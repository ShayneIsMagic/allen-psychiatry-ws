const lighthouse = require('lighthouse').default || require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

/**
 * Lighthouse Cookie Audit
 * Analyzes which cookies are necessary vs used for tracking
 */

const URL = 'http://localhost:3001';
const OUTPUT_DIR = path.join(__dirname, '../../');

async function runLighthouseAudit() {
    console.log('🔍 Starting Lighthouse Cookie Audit...\n');
    console.log(`Testing URL: ${URL}\n`);
    console.log('='.repeat(60));

    // Launch Chrome
    const chrome = await chromeLauncher.launch({
        chromeFlags: ['--headless', '--no-sandbox']
    });

    try {
        // Run Lighthouse
        const options = {
            logLevel: 'info',
            output: 'json',
            onlyCategories: ['best-practices', 'performance'],
            port: chrome.port,
        };

        console.log('Running Lighthouse audit...');
        const runnerResult = await lighthouse(URL, options);

        // Extract cookie information
        const audits = runnerResult.lhr.audits;
        
        // Get cookies using Chrome DevTools Protocol via CDP
        const CDP = require('chrome-remote-interface');
        const client = await CDP({ port: chrome.port });
        const { Network, Page } = client;
        
        await Page.enable();
        await Network.enable();
        
        // Navigate and wait for load
        await Page.navigate({ url: URL });
        await Page.loadEventFired();
        
        // Wait a bit for cookies to be set
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Get cookies
        const cookieResult = await client.Network.getCookies();
        const cookies = cookieResult.cookies || [];
        
        await client.close();
        
        console.log('\n📊 COOKIE ANALYSIS RESULTS\n');
        console.log('='.repeat(60));
        
        if (cookies.length === 0) {
            console.log('⚠️  No cookies found. Make sure the server is running.');
            console.log('   Start server with: npm start');
            return;
        }

        console.log(`\nFound ${cookies.length} cookie(s):\n`);

        // Categorize cookies
        const necessaryCookies = [];
        const trackingCookies = [];
        const sessionCookies = [];
        const unknownCookies = [];

        cookies.forEach(cookie => {
            const name = cookie.name;
            const domain = cookie.domain;
            const path = cookie.path;
            const expires = cookie.expires;
            const httpOnly = cookie.httpOnly;
            const secure = cookie.secure;
            const sameSite = cookie.sameSite;

            // Categorize based on name patterns
            if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
                trackingCookies.push({
                    name,
                    domain,
                    purpose: 'Google Analytics tracking',
                    necessary: false,
                    category: 'Analytics/Tracking'
                });
            } else if (name.includes('session') || name.includes('auth') || name.includes('token')) {
                sessionCookies.push({
                    name,
                    domain,
                    purpose: 'Session management',
                    necessary: true,
                    category: 'Functional'
                });
            } else if (name.includes('pref') || name.includes('settings') || name.includes('consent')) {
                necessaryCookies.push({
                    name,
                    domain,
                    purpose: 'User preferences',
                    necessary: true,
                    category: 'Functional'
                });
            } else {
                unknownCookies.push({
                    name,
                    domain,
                    purpose: 'Unknown - needs review',
                    necessary: 'Unknown',
                    category: 'Unknown'
                });
            }

            // Display cookie details
            console.log(`🍪 ${name}`);
            console.log(`   Domain: ${domain}`);
            console.log(`   Path: ${path}`);
            console.log(`   Expires: ${expires ? new Date(expires * 1000).toISOString() : 'Session'}`);
            console.log(`   HttpOnly: ${httpOnly}`);
            console.log(`   Secure: ${secure}`);
            console.log(`   SameSite: ${sameSite || 'None'}`);
            console.log('');
        });

        // Summary by category
        console.log('\n' + '='.repeat(60));
        console.log('📋 COOKIE CATEGORIZATION\n');

        if (trackingCookies.length > 0) {
            console.log(`🔴 TRACKING COOKIES (${trackingCookies.length}):`);
            trackingCookies.forEach(c => {
                console.log(`   - ${c.name} (${c.domain})`);
                console.log(`     Purpose: ${c.purpose}`);
                console.log(`     Necessary: ${c.necessary ? 'Yes' : 'No'} - Can be disabled with cookie consent`);
            });
            console.log('');
        }

        if (sessionCookies.length > 0) {
            console.log(`🟢 FUNCTIONAL COOKIES (${sessionCookies.length}):`);
            sessionCookies.forEach(c => {
                console.log(`   - ${c.name} (${c.domain})`);
                console.log(`     Purpose: ${c.purpose}`);
                console.log(`     Necessary: ${c.necessary ? 'Yes' : 'No'}`);
            });
            console.log('');
        }

        if (necessaryCookies.length > 0) {
            console.log(`🟢 NECESSARY COOKIES (${necessaryCookies.length}):`);
            necessaryCookies.forEach(c => {
                console.log(`   - ${c.name} (${c.domain})`);
                console.log(`     Purpose: ${c.purpose}`);
                console.log(`     Necessary: ${c.necessary ? 'Yes' : 'No'}`);
            });
            console.log('');
        }

        if (unknownCookies.length > 0) {
            console.log(`🟡 UNKNOWN COOKIES (${unknownCookies.length}):`);
            unknownCookies.forEach(c => {
                console.log(`   - ${c.name} (${c.domain})`);
                console.log(`     Purpose: ${c.purpose}`);
                console.log(`     Needs Review: Yes`);
            });
            console.log('');
        }

        // Lighthouse audit results related to cookies
        console.log('='.repeat(60));
        console.log('📊 LIGHTHOUSE AUDIT FINDINGS\n');

        // Check for cookie-related audits
        const cookieAudits = Object.keys(audits).filter(key => 
            key.toLowerCase().includes('cookie') || 
            key.toLowerCase().includes('third-party')
        );

        if (cookieAudits.length > 0) {
            cookieAudits.forEach(auditKey => {
                const audit = audits[auditKey];
                if (audit && audit.score !== null) {
                    console.log(`✅ ${audit.title}: ${audit.score * 100}%`);
                    if (audit.details && audit.details.items) {
                        audit.details.items.forEach(item => {
                            console.log(`   - ${item}`);
                        });
                    }
                }
            });
        }

        // Recommendations
        console.log('\n' + '='.repeat(60));
        console.log('💡 RECOMMENDATIONS\n');

        if (trackingCookies.length > 0) {
            console.log('1. 🔴 TRACKING COOKIES:');
            console.log('   - Add cookie consent banner');
            console.log('   - Only load GA4 after user consent');
            console.log('   - Update privacy policy to disclose usage');
            console.log('');
        }

        if (unknownCookies.length > 0) {
            console.log('2. 🟡 UNKNOWN COOKIES:');
            console.log('   - Review each cookie to determine purpose');
            console.log('   - Remove if not necessary');
            console.log('   - Document in privacy policy');
            console.log('');
        }

        console.log('3. ✅ BEST PRACTICES:');
        console.log('   - Use SameSite=Strict for first-party cookies');
        console.log('   - Set Secure flag for HTTPS-only cookies');
        console.log('   - Minimize cookie lifetime');
        console.log('   - Use HttpOnly for sensitive cookies');
        console.log('');

        // Save detailed report
        const reportPath = path.join(OUTPUT_DIR, 'lighthouse-cookie-audit-report.json');
        const report = {
            timestamp: new Date().toISOString(),
            url: URL,
            cookies: cookies.map(c => ({
                name: c.name,
                domain: c.domain,
                path: c.path,
                expires: c.expires,
                httpOnly: c.httpOnly,
                secure: c.secure,
                sameSite: c.sameSite,
                category: getCookieCategory(c.name),
                necessary: isCookieNecessary(c.name)
            })),
            summary: {
                total: cookies.length,
                tracking: trackingCookies.length,
                functional: sessionCookies.length + necessaryCookies.length,
                unknown: unknownCookies.length
            },
            recommendations: generateRecommendations(cookies)
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`\n📄 Detailed report saved to: ${reportPath}`);

    } catch (error) {
        console.error('❌ Error running Lighthouse audit:', error);
        if (error.message.includes('ECONNREFUSED')) {
            console.error('\n⚠️  Server not running. Start with: npm start');
        }
    } finally {
        await chrome.kill();
    }
}

function getCookieCategory(name) {
    if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
        return 'Analytics/Tracking';
    }
    if (name.includes('session') || name.includes('auth') || name.includes('token')) {
        return 'Functional';
    }
    if (name.includes('pref') || name.includes('settings') || name.includes('consent')) {
        return 'Functional';
    }
    return 'Unknown';
}

function isCookieNecessary(name) {
    // Tracking cookies are not necessary for site functionality
    if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
        return false;
    }
    // Session/auth cookies are necessary
    if (name.includes('session') || name.includes('auth') || name.includes('token')) {
        return true;
    }
    // Preference cookies are necessary
    if (name.includes('pref') || name.includes('settings') || name.includes('consent')) {
        return true;
    }
    return 'Unknown';
}

function generateRecommendations(cookies) {
    const recommendations = [];
    
    const hasTrackingCookies = cookies.some(c => 
        c.name.startsWith('_ga') || c.name.startsWith('_gid') || c.name.startsWith('_gat')
    );
    
    if (hasTrackingCookies) {
        recommendations.push({
            priority: 'High',
            issue: 'Tracking cookies detected',
            solution: 'Implement cookie consent banner and only load GA4 after user consent',
            impact: 'Privacy compliance (GDPR/CCPA)'
        });
    }

    const insecureCookies = cookies.filter(c => !c.secure && c.name !== '');
    if (insecureCookies.length > 0) {
        recommendations.push({
            priority: 'Medium',
            issue: 'Insecure cookies detected',
            solution: 'Set Secure flag for all cookies on HTTPS site',
            impact: 'Security'
        });
    }

    return recommendations;
}

// Run the audit
runLighthouseAudit().catch(console.error);


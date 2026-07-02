const puppeteer = require('puppeteer');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const baseUrl = process.env.SITE_URL || 'https://allenpsychiatry.net';
const pages = [
    '/',
    '/adhd',
    '/anxiety',
    '/depression',
    '/ptsd',
    '/ketamine-therapy',
    '/provo',
    '/rural',
    '/telehealth',
    '/about',
    '/404'
];

const results = {
    pages: [],
    navigation: [],
    consoleErrors: [],
    lighthouse: {},
    eslint: {},
    factCheck: [],
    summary: {
        totalPages: 0,
        workingPages: 0,
        brokenPages: 0,
        navigationIssues: 0,
        consoleErrors: 0,
        lighthouseScore: 0,
        eslintErrors: 0,
        factCheckIssues: 0
    }
};

// Fact-check keywords to look for
const factCheckPatterns = {
    problematic: [
        /FDA-approved/gi,
        /highly effective/gi,
        /excellent prognosis/gi,
        /rapid relief/gi,
        /guarantee/gi,
        /100%/gi,
        /always works/gi,
        /will cure/gi,
        /ketamine.*ADHD|ADHD.*ketamine/gi
    ],
    required: [
        /Dr\. Allen/gi,
        /consultation/gi,
        /individual results vary/gi
    ]
};

async function testPage(page, url) {
    const pageResult = {
        url,
        status: 'unknown',
        loadTime: 0,
        consoleErrors: [],
        navigationLinks: [],
        brokenLinks: [],
        factCheckIssues: [],
        timestamp: new Date().toISOString()
    };

    try {
        const startTime = Date.now();
        const response = await page.goto(url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        pageResult.loadTime = Date.now() - startTime;
        pageResult.status = response.status();

        // Collect console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                pageResult.consoleErrors.push({
                    text: msg.text(),
                    location: msg.location()
                });
            }
        });

        // Wait for page to fully load
        await page.waitForTimeout(2000);

        // Test navigation
        const navResults = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a[href]'));
            const navLinks = [];
            const broken = [];

            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
                    navLinks.push({
                        text: link.textContent.trim().substring(0, 50),
                        href: href
                    });
                }
            });

            return { navLinks, broken };
        });

        pageResult.navigationLinks = navResults.navLinks;
        pageResult.brokenLinks = navResults.broken;

        // Fact-check content
        const content = await page.content();
        factCheckPatterns.problematic.forEach((pattern, index) => {
            const matches = content.match(pattern);
            if (matches) {
                pageResult.factCheckIssues.push({
                    type: 'problematic',
                    pattern: pattern.toString(),
                    matches: matches.length
                });
            }
        });

        // Check for required elements
        factCheckPatterns.required.forEach((pattern, index) => {
            if (!pattern.test(content)) {
                pageResult.factCheckIssues.push({
                    type: 'missing',
                    pattern: pattern.toString()
                });
            }
        });

    } catch (error) {
        pageResult.status = 'error';
        pageResult.error = error.message;
    }

    return pageResult;
}

async function testNavigation(browser) {
    console.log('\n🧭 Testing Navigation...\n');
    const page = await browser.newPage();
    
    try {
        await page.goto(baseUrl, { waitUntil: 'networkidle2' });
        
        // Test hamburger menu (mobile)
        await page.setViewport({ width: 375, height: 667 });
        const hamburger = await page.$('.hamburger-menu');
        if (hamburger) {
            await hamburger.click();
            await page.waitForTimeout(500);
            const menuVisible = await page.evaluate(() => {
                const nav = document.querySelector('.main-nav');
                return nav && window.getComputedStyle(nav).display !== 'none';
            });
            results.navigation.push({
                test: 'Mobile hamburger menu',
                passed: menuVisible
            });
        }

        // Test desktop navigation
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(baseUrl, { waitUntil: 'networkidle2' });
        
        // Test Services dropdown
        const servicesLink = await page.$('.dropdown > a');
        if (servicesLink) {
            await servicesLink.hover();
            await page.waitForTimeout(300);
            const dropdownVisible = await page.evaluate(() => {
                const dropdown = document.querySelector('.dropdown-menu');
                return dropdown && window.getComputedStyle(dropdown).display !== 'none';
            });
            results.navigation.push({
                test: 'Desktop Services dropdown hover',
                passed: dropdownVisible
            });
        }

        // Test internal links
        const internalLinks = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a[href^="/"]'))
                .slice(0, 5)
                .map(link => link.getAttribute('href'));
        });

        for (const link of internalLinks) {
            try {
                const response = await page.goto(baseUrl + link, { 
                    waitUntil: 'networkidle2',
                    timeout: 10000 
                });
                results.navigation.push({
                    test: `Internal link: ${link}`,
                    passed: response.status() === 200
                });
            } catch (error) {
                results.navigation.push({
                    test: `Internal link: ${link}`,
                    passed: false,
                    error: error.message
                });
            }
        }

    } catch (error) {
        console.error('Navigation test error:', error);
    } finally {
        await page.close();
    }
}

async function runLighthouseMobile(url) {
    console.log('\n📱 Running Lighthouse Mobile Audit...\n');
    
    try {
        // Use dynamic import for ES modules
        const { default: lighthouse } = await import('lighthouse');
        const chromeLauncher = await import('chrome-launcher');
        
        const chrome = await chromeLauncher.default.launch({ chromeFlags: ['--headless'] });
        const options = {
            logLevel: 'info',
            output: 'json',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
            port: chrome.port,
            emulatedFormFactor: 'mobile',
            throttling: {
                rttMs: 150,
                throughputKbps: 1.6 * 1024,
                cpuSlowdownMultiplier: 4
            }
        };

        const runnerResult = await lighthouse(url, options);
        const report = runnerResult.lhr;
        
        results.lighthouse = {
            performance: Math.round(report.categories.performance.score * 100),
            accessibility: Math.round(report.categories.accessibility.score * 100),
            bestPractices: Math.round(report.categories['best-practices'].score * 100),
            seo: Math.round(report.categories.seo.score * 100),
            metrics: {
                firstContentfulPaint: report.audits['first-contentful-paint']?.numericValue || 0,
                largestContentfulPaint: report.audits['largest-contentful-paint']?.numericValue || 0,
                totalBlockingTime: report.audits['total-blocking-time']?.numericValue || 0,
                cumulativeLayoutShift: report.audits['cumulative-layout-shift']?.numericValue || 0
            }
        };

        await chrome.kill();
    } catch (error) {
        console.error('Lighthouse error:', error.message);
        results.lighthouse = { error: error.message };
    }
}

function runESLint() {
    console.log('\n🔍 Running ESLint...\n');
    
    const jsFiles = [
        'navigation.js',
        'email-click-handler.js',
        'appointment-clarification-modal.js',
        'schedule-modal.js',
        'sms-modal-simple.js',
        'telehealth-modal.js',
        'patient-portal-modal.js'
    ];

    const eslintResults = {
        errors: [],
        warnings: []
    };

    jsFiles.forEach(file => {
        if (!fs.existsSync(file)) return;
        
        try {
            const result = execSync(`npx eslint ${file} --format json`, { 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            
            const parsed = JSON.parse(result);
            if (parsed[0] && parsed[0].messages) {
                parsed[0].messages.forEach(msg => {
                    if (msg.severity === 2) {
                        eslintResults.errors.push({
                            file,
                            line: msg.line,
                            message: msg.message,
                            rule: msg.ruleId
                        });
                    } else if (msg.severity === 1) {
                        eslintResults.warnings.push({
                            file,
                            line: msg.line,
                            message: msg.message,
                            rule: msg.ruleId
                        });
                    }
                });
            }
        } catch (error) {
            // ESLint may return non-zero exit code if issues found
            if (error.stdout) {
                try {
                    const parsed = JSON.parse(error.stdout);
                    if (parsed[0] && parsed[0].messages) {
                        parsed[0].messages.forEach(msg => {
                            if (msg.severity === 2) {
                                eslintResults.errors.push({
                                    file,
                                    line: msg.line,
                                    message: msg.message,
                                    rule: msg.ruleId
                                });
                            }
                        });
                    }
                } catch (e) {
                    // Ignore parse errors
                }
            }
        }
    });

    results.eslint = eslintResults;
}

async function main() {
    console.log('🚀 Starting Comprehensive Site Test\n');
    console.log(`Testing site: ${baseUrl}\n`);
    console.log('='.repeat(60));

    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Test all pages
    console.log('\n📄 Testing All Pages...\n');
    for (const pagePath of pages) {
        const url = baseUrl + pagePath;
        console.log(`Testing: ${url}`);
        
        const page = await browser.newPage();
        const pageResult = await testPage(page, url);
        results.pages.push(pageResult);
        
        if (pageResult.status === 200) {
            results.summary.workingPages++;
        } else {
            results.summary.brokenPages++;
        }
        
        if (pageResult.consoleErrors.length > 0) {
            results.consoleErrors.push(...pageResult.consoleErrors.map(err => ({
                url,
                ...err
            })));
        }
        
        if (pageResult.factCheckIssues.length > 0) {
            results.factCheck.push({
                url,
                issues: pageResult.factCheckIssues
            });
        }
        
        await page.close();
    }

    results.summary.totalPages = pages.length;

    // Test navigation
    await testNavigation(browser);

    // Run Lighthouse on homepage
    await runLighthouseMobile(baseUrl);

    // Run ESLint
    runESLint();

    // Calculate summary
    results.summary.navigationIssues = results.navigation.filter(n => !n.passed).length;
    results.summary.consoleErrors = results.consoleErrors.length;
    results.summary.lighthouseScore = results.lighthouse.performance || 0;
    results.summary.eslintErrors = results.eslint.errors.length;
    results.summary.factCheckIssues = results.factCheck.length;

    await browser.close();

    // Generate report
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 TEST SUMMARY\n');
    console.log(`Total Pages Tested: ${results.summary.totalPages}`);
    console.log(`Working Pages: ${results.summary.workingPages}`);
    console.log(`Broken Pages: ${results.summary.brokenPages}`);
    console.log(`Navigation Issues: ${results.summary.navigationIssues}`);
    console.log(`Console Errors: ${results.summary.consoleErrors}`);
    console.log(`Lighthouse Performance Score: ${results.summary.lighthouseScore}/100`);
    console.log(`ESLint Errors: ${results.summary.eslintErrors}`);
    console.log(`Fact-Check Issues: ${results.summary.factCheckIssues}`);

    // Save detailed report
    const reportPath = path.join(__dirname, '../../COMPREHENSIVE_TEST_REPORT.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);

    // Print issues
    if (results.consoleErrors.length > 0) {
        console.log('\n⚠️  CONSOLE ERRORS:');
        results.consoleErrors.slice(0, 10).forEach(err => {
            console.log(`  - ${err.url}: ${err.text}`);
        });
    }

    if (results.factCheck.length > 0) {
        console.log('\n⚠️  FACT-CHECK ISSUES:');
        results.factCheck.forEach(check => {
            console.log(`  - ${check.url}:`);
            check.issues.forEach(issue => {
                console.log(`    - ${issue.type}: ${issue.pattern}`);
            });
        });
    }

    if (results.eslint.errors.length > 0) {
        console.log('\n⚠️  ESLINT ERRORS:');
        results.eslint.errors.slice(0, 10).forEach(err => {
            console.log(`  - ${err.file}:${err.line} - ${err.message}`);
        });
    }

    console.log('\n✅ Test Complete!\n');
}

main().catch(console.error);


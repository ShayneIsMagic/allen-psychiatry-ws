const puppeteer = require('puppeteer');
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
    '/about'
];

const results = {
    pages: [],
    navigation: [],
    consoleErrors: [],
    factCheck: [],
    summary: {
        totalPages: 0,
        workingPages: 0,
        brokenPages: 0,
        navigationIssues: 0,
        consoleErrors: 0,
        factCheckIssues: 0
    }
};

// Fact-check patterns
const factCheckPatterns = {
    problematic: [
        { pattern: /FDA-approved/gi, name: 'FDA-approved language' },
        { pattern: /highly effective/gi, name: 'Highly effective claims' },
        { pattern: /excellent prognosis/gi, name: 'Excellent prognosis claims' },
        { pattern: /rapid relief/gi, name: 'Rapid relief promises' },
        { pattern: /guarantee/gi, name: 'Guarantee language' },
        { pattern: /100%/gi, name: '100% claims' },
        { pattern: /always works/gi, name: 'Always works claims' },
        { pattern: /will cure/gi, name: 'Cure promises' },
        { pattern: /ketamine.*ADHD|ADHD.*ketamine/gi, name: 'Ketamine for ADHD (not supported)' }
    ],
    required: [
        { pattern: /Dr\. Allen|Dr Allen/gi, name: 'Dr. Allen mention' },
        { pattern: /consultation/gi, name: 'Consultation mention' },
        { pattern: /individual results vary|results vary/gi, name: 'Individual results vary disclaimer' }
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

    const consoleMessages = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleMessages.push({
                text: msg.text(),
                type: msg.type()
            });
        }
    });

    try {
        const startTime = Date.now();
        const response = await page.goto(url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        pageResult.loadTime = Date.now() - startTime;
        pageResult.status = response.status();

        // Wait for page to fully load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Collect console errors
        pageResult.consoleErrors = consoleMessages;

        // Test navigation links
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

        // Fact-check content
        const content = await page.content();
        factCheckPatterns.problematic.forEach(({ pattern, name }) => {
            const matches = content.match(pattern);
            if (matches) {
                pageResult.factCheckIssues.push({
                    type: 'problematic',
                    name,
                    count: matches.length
                });
            }
        });

        factCheckPatterns.required.forEach(({ pattern, name }) => {
            if (!pattern.test(content)) {
                pageResult.factCheckIssues.push({
                    type: 'missing',
                    name
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
        
        // Test mobile hamburger menu
        await page.setViewport({ width: 375, height: 667 });
        await page.goto(baseUrl, { waitUntil: 'networkidle2' });
        
        const hamburger = await page.$('.hamburger-menu');
        if (hamburger) {
            await hamburger.click();
            await new Promise(resolve => setTimeout(resolve, 500));
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
        
        // Test Services dropdown hover
        const servicesLink = await page.$('.dropdown > a');
        if (servicesLink) {
            await servicesLink.hover();
            await new Promise(resolve => setTimeout(resolve, 300));
            const dropdownVisible = await page.evaluate(() => {
                const dropdown = document.querySelector('.dropdown-menu');
                return dropdown && window.getComputedStyle(dropdown).display !== 'none';
            });
            results.navigation.push({
                test: 'Desktop Services dropdown hover',
                passed: dropdownVisible
            });
        }

    } catch (error) {
        console.error('Navigation test error:', error.message);
    } finally {
        await page.close();
    }
}

async function main() {
    console.log('🚀 Starting Quick Site Test\n');
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

    // Calculate summary
    results.summary.navigationIssues = results.navigation.filter(n => !n.passed).length;
    results.summary.consoleErrors = results.consoleErrors.length;
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
    console.log(`Fact-Check Issues: ${results.summary.factCheckIssues}`);

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
                console.log(`    - ${issue.type}: ${issue.name}${issue.count ? ` (${issue.count} instances)` : ''}`);
            });
        });
    }

    if (results.navigation.filter(n => !n.passed).length > 0) {
        console.log('\n⚠️  NAVIGATION ISSUES:');
        results.navigation.filter(n => !n.passed).forEach(nav => {
            console.log(`  - ${nav.test}: FAILED`);
        });
    }

    // Save report
    const reportPath = path.join(__dirname, '../../QUICK_TEST_REPORT.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);

    console.log('\n✅ Test Complete!\n');
}

main().catch(console.error);


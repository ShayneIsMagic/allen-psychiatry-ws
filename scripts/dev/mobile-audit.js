const puppeteer = require('puppeteer');

const baseUrl = 'https://allenpsychiatry.net';
const pages = ['/', '/adhd', '/anxiety', '/depression', '/ptsd', '/provo', '/rural', '/telehealth', '/about'];

async function mobileAudit() {
    console.log('📱 MOBILE-FIRST AUDIT - Testing on iPhone 12 Pro (390x844)\n');
    
    const browser = await puppeteer.launch({ headless: true });
    const results = {
        pages: [],
        issues: []
    };
    
    for (const pagePath of pages) {
        const url = baseUrl + pagePath;
        try {
            console.log(`\n📄 Testing: ${url}`);
            const page = await browser.newPage();
            
            // Set mobile viewport (iPhone 12 Pro)
            await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
            await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
            
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
            
            // Check for console errors
            const consoleErrors = [];
            page.on('console', msg => {
                if (msg.type() === 'error') {
                    consoleErrors.push(msg.text());
                }
            });
            
            // Test mobile-specific elements
            const mobileChecks = await page.evaluate(() => {
                const checks = {
                    headerTopVisible: false,
                    logoSize: 0,
                    serviceCardsCount: 0,
                    serviceCardsPerRow: 0,
                    hamburgerMenuVisible: false,
                    touchTargets: [],
                    modals: []
                };
                
                // Check header-top visibility
                const headerTop = document.querySelector('.header-top');
                if (headerTop) {
                    const style = window.getComputedStyle(headerTop);
                    checks.headerTopVisible = style.display !== 'none';
                }
                
                // Check logo size
                const logo = document.querySelector('.logo img');
                if (logo) {
                    checks.logoSize = logo.offsetWidth;
                }
                
                // Check service cards
                const serviceCards = document.querySelectorAll('.service-card');
                checks.serviceCardsCount = serviceCards.length;
                
                // Check grid layout
                const servicesGrid = document.querySelector('.services-grid');
                if (servicesGrid) {
                    const style = window.getComputedStyle(servicesGrid);
                    const gridTemplate = style.gridTemplateColumns;
                    if (gridTemplate === '1fr' || gridTemplate === 'none') {
                        checks.serviceCardsPerRow = 1;
                    } else {
                        checks.serviceCardsPerRow = parseInt(gridTemplate.split(' ').length) || 2;
                    }
                }
                
                // Check hamburger menu
                const hamburger = document.querySelector('.hamburger-menu');
                if (hamburger) {
                    const style = window.getComputedStyle(hamburger);
                    checks.hamburgerMenuVisible = style.display !== 'none';
                }
                
                // Check touch targets (should be at least 44x44px)
                const clickableElements = document.querySelectorAll('a, button, .btn');
                clickableElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.width < 44 || rect.height < 44) {
                        checks.touchTargets.push({
                            element: el.tagName + (el.className ? '.' + el.className : ''),
                            width: rect.width,
                            height: rect.height
                        });
                    }
                });
                
                return checks;
            });
            
            // Wait for page to stabilize
            await page.waitForSelector('body', { timeout: 5000 }).catch(() => {});
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const pageResult = {
                url,
                status: 'ok',
                consoleErrors,
                mobileChecks,
                issues: []
            };
            
            // Check for issues
            if (mobileChecks.headerTopVisible) {
                pageResult.issues.push('Header-top is visible on mobile (should be hidden)');
            }
            
            if (mobileChecks.logoSize > 150) {
                pageResult.issues.push(`Logo too large on mobile: ${mobileChecks.logoSize}px (should be ~120px)`);
            }
            
            if (mobileChecks.serviceCardsPerRow > 1) {
                pageResult.issues.push(`Service cards showing ${mobileChecks.serviceCardsPerRow} per row (should be 1)`);
            }
            
            if (!mobileChecks.hamburgerMenuVisible) {
                pageResult.issues.push('Hamburger menu not visible on mobile');
            }
            
            if (mobileChecks.touchTargets.length > 0) {
                pageResult.issues.push(`${mobileChecks.touchTargets.length} touch targets too small (< 44px)`);
            }
            
            if (consoleErrors.length > 0) {
                pageResult.issues.push(`${consoleErrors.length} console errors`);
            }
            
            results.pages.push(pageResult);
            
            if (pageResult.issues.length > 0) {
                console.log(`   ⚠️  ${pageResult.issues.length} issues found`);
                pageResult.issues.forEach(issue => console.log(`      - ${issue}`));
            } else {
                console.log(`   ✅ All mobile checks passed`);
            }
            
            await page.close();
        } catch (error) {
            console.log(`   ❌ ERROR: ${error.message}`);
            results.issues.push({ url, error: error.message });
        }
    }
    
    await browser.close();
    
    // Summary
    console.log('\n\n📊 MOBILE AUDIT SUMMARY:');
    const totalIssues = results.pages.reduce((sum, p) => sum + p.issues.length, 0);
    const pagesWithIssues = results.pages.filter(p => p.issues.length > 0).length;
    
    console.log(`   Pages tested: ${results.pages.length}`);
    console.log(`   Pages with issues: ${pagesWithIssues}`);
    console.log(`   Total issues: ${totalIssues}`);
    
    if (totalIssues === 0) {
        console.log('\n✅ MOBILE SITE IS PRODUCTION-READY!');
        process.exit(0);
    } else {
        console.log('\n⚠️  MOBILE ISSUES FOUND - Review above');
        process.exit(1);
    }
}

mobileAudit().catch(console.error);


const puppeteer = require('puppeteer');

const LIVE_SITE = 'https://allenpsychiatry.net';
const PAGES = [
    { name: 'Homepage', path: '/' },
    { name: 'ADHD Treatment', path: '/adhd' },
    { name: 'Anxiety Treatment', path: '/anxiety' },
    { name: 'Depression Treatment', path: '/depression' },
    { name: 'PTSD Treatment', path: '/ptsd' },
    { name: 'Telehealth Services', path: '/telehealth' },
    { name: 'Rural Services', path: '/rural' },
    { name: 'Provo Office', path: '/provo' },
    { name: 'About Us', path: '/about' },
];

const TASKS = {
    colorTypography: {
        title: 'Color & Typography Updates',
        checks: [
            {
                name: 'Service page headings in tan (not blue)',
                pages: ['/adhd', '/anxiety', '/depression', '/ptsd'],
                selector: 'h3',
                check: 'color should be tan (#c3b7a9)'
            },
            {
                name: 'Main page title in blue',
                pages: ['/adhd', '/anxiety', '/depression', '/ptsd'],
                selector: 'h1, .page-header h2',
                check: 'color should be blue (#3396bc)'
            },
            {
                name: 'Important Note sections in blue',
                pages: ['/adhd', '/anxiety', '/depression', '/ptsd'],
                selector: '.clinical-callout h4',
                check: 'color should be blue'
            }
        ]
    },
    headerNavigation: {
        title: 'Header/Navigation Updates',
        checks: [
            {
                name: 'SMS Policy link in top right header',
                pages: 'all',
                selector: '.header-actions a[href*="sms"]',
                check: 'should be in header-actions, top right'
            }
        ]
    },
    spacingLayout: {
        title: 'Spacing/Layout Adjustments',
        checks: [
            {
                name: 'Reduced gap before CTA section',
                pages: ['/depression', '/anxiety', '/adhd', '/ptsd'],
                selector: '.page-content + .cta-section',
                check: 'margin-top should be minimal'
            }
        ]
    },
    animations: {
        title: 'Animation Issues',
        checks: [
            {
                name: 'No animation on Telehealth page',
                pages: ['/telehealth'],
                selector: '.service-hero',
                check: 'should not have animation'
            }
        ]
    },
    ctaButtons: {
        title: 'Call-to-Action Button Implementation',
        checks: [
            {
                name: 'Schedule button in Provo hero',
                pages: ['/provo'],
                selector: '.service-hero .btn',
                check: 'should exist'
            },
            {
                name: 'Schedule button in Rural hero',
                pages: ['/rural'],
                selector: '.service-hero .btn',
                check: 'should exist'
            },
            {
                name: 'Schedule button in Telehealth hero',
                pages: ['/telehealth'],
                selector: '.service-hero .btn',
                check: 'should exist'
            },
            {
                name: 'Schedule button in About page',
                pages: ['/about'],
                selector: '.page-content .btn',
                check: 'should exist mid-page'
            }
        ]
    },
    scheduling: {
        title: 'Scheduling System Adjustments',
        checks: [
            {
                name: 'Patient portal pop-up can close with No button',
                pages: ['/telehealth'],
                selector: '.patient-portal-modal .btn',
                check: 'No button should close modal'
            }
        ]
    }
};

async function testLiveSite() {
    console.log('🔍 Testing Live Site Against Task List\n');
    console.log('='.repeat(80));
    console.log(`Live Site: ${LIVE_SITE}\n`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const results = {
        passed: [],
        failed: [],
        warnings: [],
        notTested: []
    };

    try {
        for (const pageInfo of PAGES) {
            const url = LIVE_SITE + pageInfo.path;
            console.log(`\n📄 Testing: ${pageInfo.name} (${url})`);
            console.log('-'.repeat(80));

            const page = await browser.newPage();
            await page.setViewport({ width: 1920, height: 1080 });

            try {
                await page.goto(url, {
                    waitUntil: 'networkidle2',
                    timeout: 15000
                });

                await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for any animations

                // Test Color & Typography
                if (['/adhd', '/anxiety', '/depression', '/ptsd'].includes(pageInfo.path)) {
                    const h3Elements = await page.$$eval('h3', elements => 
                        elements.map(el => ({
                            text: el.textContent.substring(0, 50),
                            color: window.getComputedStyle(el).color
                        }))
                    );

                    const h1Elements = await page.$$eval('h1, .page-header h2', elements => 
                        elements.map(el => ({
                            text: el.textContent.substring(0, 50),
                            color: window.getComputedStyle(el).color
                        }))
                    );

                    console.log(`  H3 Headings (should be tan): ${h3Elements.length} found`);
                    h3Elements.slice(0, 3).forEach(h => {
                        const isTan = h.color.includes('201') || h.color.includes('179') || h.color.includes('169');
                        console.log(`    - "${h.text}..." - Color: ${h.color} ${isTan ? '✅' : '❌'}`);
                    });

                    console.log(`  H1/Main Title (should be blue): ${h1Elements.length} found`);
                    h1Elements.slice(0, 2).forEach(h => {
                        const isBlue = h.color.includes('51') || h.color.includes('150') || h.color.includes('188');
                        console.log(`    - "${h.text}..." - Color: ${h.color} ${isBlue ? '✅' : '❌'}`);
                    });
                }

                // Test SMS Policy link placement
                const smsLinks = await page.$$eval('.header-actions a[href*="sms"], a[href*="sms-privacy"]', 
                    elements => elements.map(el => ({
                        text: el.textContent,
                        inHeader: el.closest('.header-actions') !== null,
                        inFooter: el.closest('footer') !== null
                    }))
                ).catch(() => []);

                if (smsLinks.length > 0) {
                    const inHeader = smsLinks.some(link => link.inHeader);
                    console.log(`  SMS Policy Link: ${inHeader ? '✅ In header' : '❌ Not in header'}`);
                    if (!inHeader) {
                        results.failed.push({
                            page: pageInfo.name,
                            task: 'SMS Policy in header',
                            issue: 'SMS Policy link not in top right header'
                        });
                    }
                } else {
                    console.log(`  SMS Policy Link: ⚠️  Not found`);
                    results.warnings.push({
                        page: pageInfo.name,
                        task: 'SMS Policy link',
                        issue: 'SMS Policy link not found'
                    });
                }

                // Test CTA buttons
                if (pageInfo.path === '/provo') {
                    const provoHeroBtn = await page.$eval('.service-hero .btn', 
                        el => ({ exists: true, text: el.textContent })
                    ).catch(() => ({ exists: false }));
                    console.log(`  Hero CTA Button: ${provoHeroBtn.exists ? '✅ Found' : '❌ Missing'}`);
                }

                if (pageInfo.path === '/rural') {
                    const ruralHeroBtn = await page.$eval('.service-hero .btn', 
                        el => ({ exists: true, text: el.textContent })
                    ).catch(() => ({ exists: false }));
                    console.log(`  Hero CTA Button: ${ruralHeroBtn.exists ? '✅ Found' : '❌ Missing'}`);
                    if (!ruralHeroBtn.exists) {
                        results.failed.push({
                            page: pageInfo.name,
                            task: 'Hero CTA button',
                            issue: 'Schedule button missing in hero section'
                        });
                    }
                }

                if (pageInfo.path === '/telehealth') {
                    const telehealthHeroBtn = await page.$eval('.service-hero .btn', 
                        el => ({ exists: true, text: el.textContent })
                    ).catch(() => ({ exists: false }));
                    console.log(`  Hero CTA Button: ${telehealthHeroBtn.exists ? '✅ Found' : '❌ Missing'}`);
                    
                    // Check for animations
                    const hasAnimation = await page.evaluate(() => {
                        const hero = document.querySelector('.service-hero');
                        if (!hero) return false;
                        const style = window.getComputedStyle(hero);
                        return style.animation !== 'none' || style.animationName !== 'none';
                    });
                    console.log(`  Animation: ${hasAnimation ? '❌ Has animation (should be removed)' : '✅ No animation'}`);
                    if (hasAnimation) {
                        results.failed.push({
                            page: pageInfo.name,
                            task: 'Remove animation',
                            issue: 'Telehealth page still has animation'
                        });
                    }
                }

                if (pageInfo.path === '/about') {
                    const aboutBtn = await page.$$eval('.page-content .btn', 
                        elements => elements.map(el => ({
                            text: el.textContent,
                            exists: true
                        }))
                    ).catch(() => []);
                    console.log(`  Mid-page CTA Button: ${aboutBtn.length > 0 ? '✅ Found' : '❌ Missing'}`);
                    if (aboutBtn.length === 0) {
                        results.failed.push({
                            page: pageInfo.name,
                            task: 'Mid-page CTA button',
                            issue: 'Schedule button missing in About page'
                        });
                    }
                }

                // Test spacing
                if (['/depression', '/anxiety', '/adhd', '/ptsd'].includes(pageInfo.path)) {
                    const ctaSpacing = await page.evaluate(() => {
                        const pageContent = document.querySelector('.page-content');
                        const ctaSection = document.querySelector('.cta-section');
                        if (!pageContent || !ctaSection) return null;
                        
                        const pageContentRect = pageContent.getBoundingClientRect();
                        const ctaRect = ctaSection.getBoundingClientRect();
                        const gap = ctaRect.top - pageContentRect.bottom;
                        
                        return {
                            gap: gap,
                            tooLarge: gap > 60
                        };
                    });

                    if (ctaSpacing) {
                        console.log(`  CTA Spacing: ${ctaSpacing.gap.toFixed(0)}px ${ctaSpacing.tooLarge ? '❌ Too large' : '✅ OK'}`);
                        if (ctaSpacing.tooLarge) {
                            results.failed.push({
                                page: pageInfo.name,
                                task: 'Reduce CTA spacing',
                                issue: `Gap is ${ctaSpacing.gap.toFixed(0)}px (should be < 60px)`
                            });
                        }
                    }
                }

                // Test patient portal modal
                if (pageInfo.path === '/telehealth') {
                    // Try to trigger modal
                    const modalTrigger = await page.$('a[href*="patient-portal"], a[onclick*="patient"]');
                    if (modalTrigger) {
                        await modalTrigger.click();
                        await new Promise(resolve => setTimeout(resolve, 500));
                        
                        const modal = await page.$('.patient-portal-modal.show');
                        if (modal) {
                            const noButton = await page.$('.patient-portal-modal .btn:not(.yes)');
                            if (noButton) {
                                const canClose = await page.evaluate(btn => {
                                    const clickHandler = btn.onclick;
                                    return clickHandler !== null;
                                }, noButton);
                                console.log(`  Modal Close with No: ${canClose ? '✅ Works' : '❌ Cannot close'}`);
                                if (!canClose) {
                                    results.failed.push({
                                        page: pageInfo.name,
                                        task: 'Modal close functionality',
                                        issue: 'Cannot close modal with No button'
                                    });
                                }
                            }
                            // Close modal
                            await page.keyboard.press('Escape');
                        }
                    }
                }

            } catch (error) {
                console.log(`  ❌ Error testing page: ${error.message}`);
                results.warnings.push({
                    page: pageInfo.name,
                    task: 'Page load',
                    issue: error.message
                });
            }

            await page.close();
        }

        // Summary
        console.log('\n' + '='.repeat(80));
        console.log('📊 TEST SUMMARY\n');
        console.log(`✅ Passed: ${results.passed.length}`);
        console.log(`❌ Failed: ${results.failed.length}`);
        console.log(`⚠️  Warnings: ${results.warnings.length}`);

        if (results.failed.length > 0) {
            console.log('\n❌ FAILED TASKS:\n');
            results.failed.forEach((item, i) => {
                console.log(`${i + 1}. ${item.page} - ${item.task}`);
                console.log(`   Issue: ${item.issue}`);
            });
        }

        if (results.warnings.length > 0) {
            console.log('\n⚠️  WARNINGS:\n');
            results.warnings.forEach((item, i) => {
                console.log(`${i + 1}. ${item.page} - ${item.task}`);
                console.log(`   Issue: ${item.issue}`);
            });
        }

        // Save report
        const fs = require('fs');
        const reportPath = require('path').join(__dirname, '../../LIVE_SITE_TASK_AUDIT_REPORT.json');
        fs.writeFileSync(reportPath, JSON.stringify({
            timestamp: new Date().toISOString(),
            site: LIVE_SITE,
            summary: {
                passed: results.passed.length,
                failed: results.failed.length,
                warnings: results.warnings.length
            },
            results: {
                failed: results.failed,
                warnings: results.warnings
            }
        }, null, 2));

        console.log(`\n📄 Detailed report saved to: ${reportPath}`);

    } catch (error) {
        console.error('❌ Error during testing:', error);
    } finally {
        await browser.close();
    }
}

testLiveSite().catch(console.error);


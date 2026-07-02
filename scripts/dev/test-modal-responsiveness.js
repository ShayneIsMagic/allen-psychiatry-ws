const puppeteer = require('puppeteer');

/**
 * Test Modal Responsiveness on Mobile Viewports
 * Checks if modals fit within viewport on various mobile screen sizes
 */

const MOBILE_VIEWPORTS = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12/13', width: 390, height: 844 },
    { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
    { name: 'Samsung Galaxy S20', width: 360, height: 800 },
    { name: 'Pixel 5', width: 393, height: 851 },
];

const MODAL_SELECTORS = [
    { name: 'Telehealth Modal', selector: '.telehealth-modal-content' },
    { name: 'Patient Portal Modal', selector: '.patient-portal-modal-content' },
    { name: 'Appointment Clarification Modal', selector: '.appointment-clarification-modal-content' },
    { name: 'SMS Privacy Modal', selector: '.sms-privacy-modal-content' },
    { name: 'Service Areas Modal', selector: '.service-areas-modal-content' },
];

async function testModalResponsiveness() {
    console.log('🔍 Testing Modal Responsiveness on Mobile Viewports\n');
    console.log('='.repeat(60));
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const results = [];

    try {
        for (const viewport of MOBILE_VIEWPORTS) {
            console.log(`\n📱 Testing on ${viewport.name} (${viewport.width}x${viewport.height})`);
            console.log('-'.repeat(60));
            
            const page = await browser.newPage();
            await page.setViewport({
                width: viewport.width,
                height: viewport.height,
                deviceScaleFactor: 2,
            });

            // Test on homepage (has most modals)
            await page.goto('http://localhost:3001', {
                waitUntil: 'networkidle2',
                timeout: 10000
            });

            // Wait for page to load
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Test each modal
            for (const modal of MODAL_SELECTORS) {
                try {
                    // Try to find and show the modal
                    const modalExists = await page.evaluate((selector) => {
                        const modal = document.querySelector(selector);
                        if (!modal) return false;
                        
                        // Find the parent modal element
                        const parentModal = modal.closest('.telehealth-modal, .patient-portal-modal, .appointment-clarification-modal, .sms-privacy-modal, .service-areas-modal');
                        if (parentModal) {
                            parentModal.classList.add('show');
                            parentModal.style.display = 'flex';
                        }
                        return true;
                    }, modal.selector);

                    if (!modalExists) {
                        console.log(`  ⚠️  ${modal.name}: Not found on this page`);
                        continue;
                    }

                    // Wait for modal to appear
                    await new Promise(resolve => setTimeout(resolve, 500));

                    // Get modal dimensions and position
                    const modalInfo = await page.evaluate((selector) => {
                        const element = document.querySelector(selector);
                        if (!element) return null;

                        const rect = element.getBoundingClientRect();
                        const styles = window.getComputedStyle(element);
                        
                        return {
                            width: rect.width,
                            height: rect.height,
                            left: rect.left,
                            top: rect.top,
                            right: rect.right,
                            bottom: rect.bottom,
                            maxWidth: styles.maxWidth,
                            widthStyle: styles.width,
                            paddingLeft: parseFloat(styles.paddingLeft) || 0,
                            paddingRight: parseFloat(styles.paddingRight) || 0,
                            paddingTop: parseFloat(styles.paddingTop) || 0,
                            paddingBottom: parseFloat(styles.paddingBottom) || 0,
                            viewportWidth: window.innerWidth,
                            viewportHeight: window.innerHeight,
                        };
                    }, modal.selector);

                    if (!modalInfo) {
                        console.log(`  ❌ ${modal.name}: Could not get dimensions`);
                        continue;
                    }

                    // Calculate if modal fits
                    const totalWidth = modalInfo.width + modalInfo.paddingLeft + modalInfo.paddingRight;
                    const fitsWidth = totalWidth <= modalInfo.viewportWidth;
                    const fitsHeight = modalInfo.height <= modalInfo.viewportHeight;
                    const withinViewport = modalInfo.left >= 0 && modalInfo.right <= modalInfo.viewportWidth;

                    const status = (fitsWidth && fitsHeight && withinViewport) ? '✅' : '❌';
                    const issue = [];
                    
                    if (!fitsWidth) issue.push(`Width overflow: ${totalWidth.toFixed(0)}px > ${modalInfo.viewportWidth}px`);
                    if (!fitsHeight) issue.push(`Height overflow: ${modalInfo.height.toFixed(0)}px > ${modalInfo.viewportHeight}px`);
                    if (!withinViewport) issue.push(`Positioned outside viewport (left: ${modalInfo.left.toFixed(0)}px, right: ${modalInfo.right.toFixed(0)}px)`);

                    console.log(`  ${status} ${modal.name}:`);
                    console.log(`     Width: ${modalInfo.width.toFixed(0)}px (max-width: ${modalInfo.maxWidth}, style: ${modalInfo.widthStyle})`);
                    console.log(`     Height: ${modalInfo.height.toFixed(0)}px`);
                    console.log(`     Padding: ${modalInfo.paddingLeft + modalInfo.paddingRight}px horizontal, ${modalInfo.paddingTop + modalInfo.paddingBottom}px vertical`);
                    console.log(`     Total Width: ${totalWidth.toFixed(0)}px (viewport: ${modalInfo.viewportWidth}px)`);
                    console.log(`     Position: left=${modalInfo.left.toFixed(0)}px, right=${modalInfo.right.toFixed(0)}px`);
                    
                    if (issue.length > 0) {
                        console.log(`     ⚠️  Issues: ${issue.join(', ')}`);
                    }

                    results.push({
                        viewport: viewport.name,
                        modal: modal.name,
                        fits: fitsWidth && fitsHeight && withinViewport,
                        width: modalInfo.width,
                        totalWidth: totalWidth,
                        viewportWidth: modalInfo.viewportWidth,
                        height: modalInfo.height,
                        viewportHeight: modalInfo.viewportHeight,
                        maxWidth: modalInfo.maxWidth,
                        widthStyle: modalInfo.widthStyle,
                        issues: issue,
                    });

                    // Close modal for next test
                    await page.evaluate(() => {
                        const modals = document.querySelectorAll('.telehealth-modal, .patient-portal-modal, .appointment-clarification-modal, .sms-privacy-modal, .service-areas-modal');
                        modals.forEach(m => {
                            m.classList.remove('show');
                            m.style.display = 'none';
                        });
                    });

                } catch (error) {
                    console.log(`  ❌ ${modal.name}: Error - ${error.message}`);
                }
            }

            await page.close();
        }

        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('📊 SUMMARY');
        console.log('='.repeat(60));

        const allPassed = results.every(r => r.fits);
        const failed = results.filter(r => !r.fits);

        if (allPassed) {
            console.log('✅ All modals fit correctly on all tested viewports!');
        } else {
            console.log(`❌ ${failed.length} modal/viewport combination(s) have issues:`);
            failed.forEach(r => {
                console.log(`   - ${r.modal} on ${r.viewport}: ${r.issues.join(', ')}`);
            });
        }

        // Check for width style issues
        const widthIssues = results.filter(r => 
            r.widthStyle && 
            !r.widthStyle.includes('calc') && 
            !r.widthStyle.includes('min') &&
            r.widthStyle.includes('%')
        );
        
        if (widthIssues.length > 0) {
            console.log('\n⚠️  Modals using percentage width (may cause overflow with padding):');
            widthIssues.forEach(r => {
                console.log(`   - ${r.modal} on ${r.viewport}: width=${r.widthStyle}`);
            });
        }

    } catch (error) {
        console.error('❌ Error during testing:', error);
    } finally {
        await browser.close();
    }
}

// Run the test
testModalResponsiveness().catch(console.error);


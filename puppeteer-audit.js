const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://a349d53a.allen-psychiatry-ws.pages.dev';
const pages = [
    '/',
    '/adhd',
    '/anxiety',
    '/depression',
    '/ptsd',
    '/provo',
    '/rural',
    '/telehealth',
    '/about'
];

async function auditSite() {
    console.log('🔍 Starting Puppeteer Site Audit...\n');
    
    const browser = await puppeteer.launch({ headless: true });
    const results = {
        working: [],
        broken: [],
        errors: []
    };
    
    for (const pagePath of pages) {
        const url = baseUrl + pagePath;
        try {
            console.log(`Testing: ${url}`);
            const page = await browser.newPage();
            
            // Set timeout
            await page.setDefaultNavigationTimeout(10000);
            
            // Navigate
            const response = await page.goto(url, { 
                waitUntil: 'networkidle2',
                timeout: 10000 
            });
            
            const status = response.status();
            
            if (status === 200) {
                // Check for broken links on page
                const brokenLinks = await page.evaluate(() => {
                    const links = Array.from(document.querySelectorAll('a[href]'));
                    const broken = [];
                    
                    links.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && !href.startsWith('http') && !href.startsWith('#') && 
                            !href.startsWith('tel:') && !href.startsWith('mailto:')) {
                            // Check if link is broken (would need actual navigation test)
                            broken.push(href);
                        }
                    });
                    
                    return broken;
                });
                
                results.working.push({ url, status, brokenLinks });
                console.log(`   ✅ ${status} - ${url}`);
            } else {
                results.broken.push({ url, status });
                console.log(`   ❌ ${status} - ${url}`);
            }
            
            await page.close();
        } catch (error) {
            results.errors.push({ url, error: error.message });
            console.log(`   ⚠️  ERROR - ${url}: ${error.message}`);
        }
    }
    
    await browser.close();
    
    console.log('\n📊 AUDIT RESULTS:');
    console.log(`   ✅ Working: ${results.working.length}`);
    console.log(`   ❌ Broken: ${results.broken.length}`);
    console.log(`   ⚠️  Errors: ${results.errors.length}`);
    
    if (results.broken.length > 0) {
        console.log('\n❌ Broken Pages:');
        results.broken.forEach(({ url, status }) => {
            console.log(`   ${url} - Status: ${status}`);
        });
    }
    
    if (results.errors.length > 0) {
        console.log('\n⚠️  Errors:');
        results.errors.forEach(({ url, error }) => {
            console.log(`   ${url}: ${error}`);
        });
    }
    
    return results;
}

// Run audit
auditSite().catch(console.error);


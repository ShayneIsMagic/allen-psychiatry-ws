#!/usr/bin/env node
/**
 * Script to update all internal links from .html to clean URLs
 * Run this after implementing clean URL redirects
 */

const fs = require('fs');
const path = require('path');

// Pages to update (excluding index.html which stays as /)
const pages = [
    'index.html',
    'adhd.html',
    'anxiety.html',
    'depression.html',
    'ptsd.html',
    'provo.html',
    'rural.html',
    'telehealth.html',
    'about.html',
    '404.html'
];

// Mapping of old URLs to new clean URLs
const urlMap = {
    'index.html': '/',
    'adhd.html': '/adhd',
    'anxiety.html': '/anxiety',
    'depression.html': '/depression',
    'ptsd.html': '/ptsd',
    'provo.html': '/provo',
    'rural.html': '/rural',
    'telehealth.html': '/telehealth',
    'about.html': '/about'
};

console.log('🔄 Updating internal links to clean URLs...\n');

let totalUpdates = 0;

pages.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${filename} - file not found`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let fileUpdates = 0;
    let originalContent = content;
    
    // Update href attributes
    Object.entries(urlMap).forEach(([oldUrl, newUrl]) => {
        // Match href="filename.html" or href="/filename.html"
        const patterns = [
            new RegExp(`href=["']${oldUrl.replace('.html', '')}\\.html["']`, 'gi'),
            new RegExp(`href=["']/${oldUrl.replace('.html', '')}\\.html["']`, 'gi'),
            new RegExp(`href=["']${oldUrl}["']`, 'gi'),
            new RegExp(`href=["']/${oldUrl}["']`, 'gi')
        ];
        
        patterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                fileUpdates += matches.length;
                if (oldUrl === 'index.html') {
                    content = content.replace(pattern, `href="${newUrl}"`);
                } else {
                    content = content.replace(pattern, `href="${newUrl}"`);
                }
            }
        });
    });
    
    // Update canonical URLs
    Object.entries(urlMap).forEach(([oldUrl, newUrl]) => {
        const canonicalPattern = new RegExp(`<link rel="canonical" href="https://allenpsychiatry\\.net/${oldUrl.replace('.html', '')}\\.html"`, 'gi');
        if (canonicalPattern.test(content)) {
            fileUpdates++;
            content = content.replace(canonicalPattern, `<link rel="canonical" href="https://allenpsychiatry.net${newUrl}"`);
        }
    });
    
    // Update Open Graph URLs
    Object.entries(urlMap).forEach(([oldUrl, newUrl]) => {
        const ogPattern = new RegExp(`<meta property="og:url" content="https://allenpsychiatry\\.net/${oldUrl.replace('.html', '')}\\.html"`, 'gi');
        if (ogPattern.test(content)) {
            fileUpdates++;
            content = content.replace(ogPattern, `<meta property="og:url" content="https://allenpsychiatry.net${newUrl}"`);
        }
    });
    
    if (fileUpdates > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ ${filename} - Updated ${fileUpdates} links`);
        totalUpdates += fileUpdates;
    } else {
        console.log(`✓ ${filename} - No updates needed`);
    }
});

console.log(`\n🎉 Complete! Updated ${totalUpdates} links across ${pages.length} files.`);
console.log('\n📝 Next steps:');
console.log('1. Test clean URLs work: http://localhost:3001/adhd (should load adhd.html)');
console.log('2. Test redirects: http://localhost:3001/adhd.html (should redirect to /adhd)');
console.log('3. Verify all internal links work correctly');
console.log('4. Update sitemap.xml if needed');


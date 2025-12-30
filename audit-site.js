const fs = require('fs');
const path = require('path');
const http = require('http');

// Pages to check
const pages = ['index.html', 'about.html', 'adhd.html', 'anxiety.html', 'depression.html', 'ptsd.html', 'provo.html', 'rural.html', 'telehealth.html'];
const existingFiles = new Set([...pages, '404.html']);

console.log('🔍 SITE AUDIT - Checking Links and Files\n');

// Check 1: File existence
console.log('1. FILE EXISTENCE:');
let missingFiles = [];
pages.forEach(page => {
    if (!fs.existsSync(page)) {
        missingFiles.push(page);
        console.log(`   ❌ Missing: ${page}`);
    } else {
        console.log(`   ✅ ${page}`);
    }
});
if (missingFiles.length === 0) {
    console.log('   ✅ All files exist\n');
} else {
    console.log(`   ⚠️  ${missingFiles.length} files missing\n`);
}

// Check 2: Internal links
console.log('2. INTERNAL LINKS:');
const brokenLinks = [];
const allLinks = [];

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    
    const content = fs.readFileSync(page, 'utf8');
    const hrefRegex = /href=["']([^"']+)["']/g;
    let match;
    
    while ((match = hrefRegex.exec(content)) !== null) {
        const href = match[1];
        
        // Skip external, anchors, special protocols
        if (href.startsWith('http') || href.startsWith('#') || 
            href.startsWith('tel:') || href.startsWith('mailto:') ||
            href.startsWith('javascript:')) {
            continue;
        }
        
        // Remove leading slash
        let link = href.replace(/^\//, '');
        
        // Handle anchor links
        if (link.includes('#')) {
            link = link.split('#')[0];
        }
        
        // Check if file exists
        if (link && link !== '' && !existingFiles.has(link) && !link.startsWith('assets/')) {
            brokenLinks.push({ page, href, link });
        }
        
        allLinks.push({ page, href });
    }
});

console.log(`   ✅ Found ${allLinks.length} total internal links`);
if (brokenLinks.length > 0) {
    console.log(`   ⚠️  Found ${brokenLinks.length} broken links:`);
    brokenLinks.slice(0, 10).forEach(({ page, href, link }) => {
        console.log(`      ${page}: ${href} -> ${link} (missing)`);
    });
} else {
    console.log('   ✅ No broken internal links found');
}
console.log('');

// Check 3: Image assets
console.log('3. IMAGE ASSETS:');
const brokenImages = [];
pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    
    const content = fs.readFileSync(page, 'utf8');
    const imgRegex = /src=["']([^"']+)["']/g;
    let match;
    
    while ((match = imgRegex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('http') || src.startsWith('data:')) continue;
        
        const imgPath = path.join(__dirname, src);
        if (!fs.existsSync(imgPath)) {
            brokenImages.push({ page, src });
        }
    }
});

if (brokenImages.length > 0) {
    console.log(`   ⚠️  Found ${brokenImages.length} broken images:`);
    brokenImages.slice(0, 5).forEach(({ page, src }) => {
        console.log(`      ${page}: ${src} (missing)`);
    });
} else {
    console.log('   ✅ All images found');
}
console.log('');

// Check 4: JavaScript files
console.log('4. JAVASCRIPT FILES:');
const jsFiles = ['script.js', 'config.js', 'sms-modal-simple.js', 'telehealth-modal.js', 
                 'patient-portal-modal.js', 'appointment-clarification-modal.js'];
const missingJS = [];
jsFiles.forEach(js => {
    if (!fs.existsSync(js)) {
        missingJS.push(js);
        console.log(`   ❌ Missing: ${js}`);
    } else {
        console.log(`   ✅ ${js}`);
    }
});
if (missingJS.length === 0) {
    console.log('   ✅ All JS files exist\n');
} else {
    console.log(`   ⚠️  ${missingJS.length} JS files missing\n`);
}

// Check 5: CSS files
console.log('5. CSS FILES:');
if (fs.existsSync('styles.css')) {
    console.log('   ✅ styles.css exists\n');
} else {
    console.log('   ❌ styles.css missing\n');
}

// Summary
console.log('📊 SUMMARY:');
console.log(`   Files: ${pages.length - missingFiles.length}/${pages.length} exist`);
console.log(`   Links: ${allLinks.length} total, ${brokenLinks.length} broken`);
console.log(`   Images: ${brokenImages.length} broken`);
console.log(`   JS: ${jsFiles.length - missingJS.length}/${jsFiles.length} exist`);

if (missingFiles.length === 0 && brokenLinks.length === 0 && brokenImages.length === 0 && missingJS.length === 0) {
    console.log('\n✅ SITE AUDIT PASSED - No issues found!');
    process.exit(0);
} else {
    console.log('\n⚠️  SITE AUDIT FAILED - Issues found above');
    process.exit(1);
}


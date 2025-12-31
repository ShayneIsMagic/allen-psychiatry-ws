const fs = require('fs');
const path = require('path');

console.log('🔍 CHECKING FOR CONSOLE ERRORS AND WARNINGS\n');

// Files to check
const jsFiles = [
    'script.js',
    'config.js',
    'sms-modal-simple.js',
    'telehealth-modal.js',
    'patient-portal-modal.js',
    'appointment-clarification-modal.js'
];

const htmlFiles = [
    'index.html',
    'about.html',
    'adhd.html',
    'anxiety.html',
    'depression.html',
    'ptsd.html',
    'provo.html',
    'rural.html',
    'telehealth.html'
];

let issues = [];
let warnings = [];

// Check JavaScript files
console.log('1. JAVASCRIPT FILES:');
jsFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
        const lineNum = index + 1;
        
        // Check for console statements
        if (line.includes('console.log') || line.includes('console.error') || line.includes('console.warn')) {
            warnings.push(`${file}:${lineNum} - Console statement: ${line.trim().substring(0, 60)}`);
        }
        
        // Check for debugger
        if (line.includes('debugger')) {
            issues.push(`${file}:${lineNum} - Debugger statement found`);
        }
        
        // Check for TODO/FIXME
        if (line.match(/TODO|FIXME|XXX|HACK/i)) {
            warnings.push(`${file}:${lineNum} - ${line.match(/(TODO|FIXME|XXX|HACK)/i)[0]}: ${line.trim().substring(0, 60)}`);
        }
    });
});

if (warnings.length === 0 && issues.length === 0) {
    console.log('   ✅ No console statements or debug code found\n');
} else {
    if (issues.length > 0) {
        console.log(`   ⚠️  Found ${issues.length} issues:`);
        issues.forEach(issue => console.log(`      ${issue}`));
    }
    if (warnings.length > 0) {
        console.log(`   ⚠️  Found ${warnings.length} warnings:`);
        warnings.slice(0, 10).forEach(warning => console.log(`      ${warning}`));
    }
    console.log('');
}

// Check HTML files for inline JavaScript issues
console.log('2. HTML FILES - INLINE JAVASCRIPT:');
let htmlIssues = [];
htmlFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for inline console statements
    if (content.includes('console.log') || content.includes('console.error')) {
        htmlIssues.push(`${file} - Contains console statements in inline JavaScript`);
    }
    
    // Check for JavaScript errors
    if (content.includes('onerror') || content.includes('throw new Error')) {
        htmlIssues.push(`${file} - Contains error handling`);
    }
    
    // Check for missing alt text
    const imgMatches = content.match(/<img[^>]*>/g);
    if (imgMatches) {
        imgMatches.forEach(img => {
            if (!img.includes('alt=') || img.includes('alt=""')) {
                htmlIssues.push(`${file} - Image missing alt text: ${img.substring(0, 50)}`);
            }
        });
    }
});

if (htmlIssues.length === 0) {
    console.log('   ✅ No issues found in HTML files\n');
} else {
    console.log(`   ⚠️  Found ${htmlIssues.length} issues:`);
    htmlIssues.slice(0, 10).forEach(issue => console.log(`      ${issue}`));
    console.log('');
}

// Check for broken external resources
console.log('3. EXTERNAL RESOURCES:');
let resourceIssues = [];
htmlFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for external scripts
    const scripts = content.match(/<script[^>]*src=["']([^"']+)["']/g);
    if (scripts) {
        scripts.forEach(script => {
            const src = script.match(/src=["']([^"']+)["']/)[1];
            if (src.startsWith('http') && !src.includes('cdnjs.cloudflare.com') && !src.includes('googletagmanager.com') && !src.includes('fonts.googleapis.com')) {
                resourceIssues.push(`${file} - External script: ${src}`);
            }
        });
    }
    
    // Check for external stylesheets
    const styles = content.match(/<link[^>]*href=["']([^"']+)["']/g);
    if (styles) {
        styles.forEach(style => {
            const href = style.match(/href=["']([^"']+)["']/)[1];
            if (href.startsWith('http') && !href.includes('cdnjs.cloudflare.com') && !href.includes('fonts.googleapis.com') && !href.includes('fonts.gstatic.com')) {
                resourceIssues.push(`${file} - External stylesheet: ${href}`);
            }
        });
    }
});

if (resourceIssues.length === 0) {
    console.log('   ✅ All external resources look valid\n');
} else {
    console.log(`   ⚠️  Found ${resourceIssues.length} external resources:`);
    resourceIssues.slice(0, 5).forEach(issue => console.log(`      ${issue}`));
    console.log('');
}

// Summary
console.log('📊 SUMMARY:');
console.log(`   Issues: ${issues.length}`);
console.log(`   Warnings: ${warnings.length}`);
console.log(`   HTML Issues: ${htmlIssues.length}`);
console.log(`   Resource Issues: ${resourceIssues.length}`);

if (issues.length === 0 && warnings.length === 0 && htmlIssues.length === 0) {
    console.log('\n✅ NO CONSOLE ERRORS OR WARNINGS FOUND!');
    process.exit(0);
} else {
    console.log('\n⚠️  SOME ISSUES FOUND - Review above');
    process.exit(1);
}


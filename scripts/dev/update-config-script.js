#!/usr/bin/env node

/**
 * Script to add config.js to all HTML pages
 * Run this script to ensure all pages include the configuration system
 */

const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
    'about.html',
    'adhd.html', 
    'anxiety.html',
    'depression.html',
    'ptsd.html',
    'provo.html',
    'rural.html'
];

// The config script tag to add
const configScript = '    <script src="config.js"></script>';

// Pattern to find where to insert the script (after the last stylesheet)
const insertPattern = /(<link[^>]*font-awesome[^>]*>)/i;

console.log('🚀 Adding config.js to HTML pages...\n');

htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filename}`);
        return;
    }
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if config.js is already included
        if (content.includes('config.js')) {
            console.log(`✅ ${filename} - Already includes config.js`);
            return;
        }
        
        // Insert the config script after the font-awesome stylesheet
        const updatedContent = content.replace(
            insertPattern,
            `$1\n${configScript}`
        );
        
        if (updatedContent === content) {
            console.log(`⚠️  ${filename} - Could not find insertion point`);
            return;
        }
        
        // Write the updated content
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ ${filename} - Added config.js`);
        
    } catch (error) {
        console.error(`❌ ${filename} - Error: ${error.message}`);
    }
});

console.log('\n🎉 Config script update complete!');
console.log('\nNext steps:');
console.log('1. Test the website to ensure config.js loads correctly');
console.log('2. Update config.js with your external link configurations');
console.log('3. Commit and deploy your changes');

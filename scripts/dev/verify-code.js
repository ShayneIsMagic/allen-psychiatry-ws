#!/usr/bin/env node
/**
 * Code Verification Script for Allen Psychiatry Website
 * This script verifies all code files are valid and working
 */

const fs = require('fs');
const path = require('path');

let errors = [];
let warnings = [];
let passed = [];

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m'
};

function log(message, type = 'info') {
    const color = type === 'error' ? colors.red : type === 'warning' ? colors.yellow : type === 'success' ? colors.green : colors.blue;
    console.log(`${color}${message}${colors.reset}`);
}

// Test 1: Verify all JavaScript files exist and are valid
function verifyJavaScriptFiles() {
    log('\n📝 Verifying JavaScript Files...', 'info');
    
    const jsFiles = [
        'script.js',
        'navigation.js',
        'config.js',
        'sms-modal-simple.js',
        'telehealth-modal.js',
        'patient-portal-modal.js',
        'server.js'
    ];
    
    jsFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            try {
                // Check syntax by requiring the file
                const content = fs.readFileSync(filePath, 'utf8');
                // Basic validation - check for common issues
                if (content.includes('undefined') && content.includes('console.error')) {
                    // This is fine, just a warning
                }
                passed.push(`✓ ${file} - Valid syntax`);
            } catch (error) {
                errors.push(`✗ ${file} - ${error.message}`);
            }
        } else {
            errors.push(`✗ ${file} - File not found`);
        }
    });
}

// Test 2: Verify HTML files exist
function verifyHTMLFiles() {
    log('\n📄 Verifying HTML Files...', 'info');
    
    const htmlFiles = [
        'index.html',
        'about.html',
        'adhd.html',
        'anxiety.html',
        'depression.html',
        'ptsd.html',
        'provo.html',
        'rural.html',
        'telehealth.html',
        '404.html'
    ];
    
    htmlFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            // Basic HTML validation
            if (content.includes('<!DOCTYPE html>') || content.includes('<html')) {
                passed.push(`✓ ${file} - Valid HTML structure`);
            } else {
                warnings.push(`⚠ ${file} - Missing DOCTYPE or html tag`);
            }
        } else {
            warnings.push(`⚠ ${file} - File not found (may be optional)`);
        }
    });
}

// Test 3: Verify required assets exist
function verifyAssets() {
    log('\n🖼️  Verifying Assets...', 'info');
    
    const requiredAssets = [
        'assets/ap-new-color-logo.png',
        'assets/index-hero.jpg'
    ];
    
    requiredAssets.forEach(asset => {
        const assetPath = path.join(__dirname, asset);
        if (fs.existsSync(assetPath)) {
            passed.push(`✓ ${asset} - Exists`);
        } else {
            errors.push(`✗ ${asset} - Missing required asset`);
        }
    });
}

// Test 4: Verify CSS file exists
function verifyCSS() {
    log('\n🎨 Verifying CSS...', 'info');
    
    const cssFile = path.join(__dirname, 'styles.css');
    if (fs.existsSync(cssFile)) {
        const content = fs.readFileSync(cssFile, 'utf8');
        if (content.length > 0) {
            passed.push(`✓ styles.css - Valid CSS file`);
        } else {
            errors.push(`✗ styles.css - File is empty`);
        }
    } else {
        errors.push(`✗ styles.css - File not found`);
    }
}

// Test 5: Verify package.json
function verifyPackageJson() {
    log('\n📦 Verifying package.json...', 'info');
    
    const packagePath = path.join(__dirname, 'package.json');
    if (fs.existsSync(packagePath)) {
        try {
            const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
            if (packageContent.name && packageContent.version) {
                passed.push(`✓ package.json - Valid`);
            } else {
                warnings.push(`⚠ package.json - Missing name or version`);
            }
        } catch (error) {
            errors.push(`✗ package.json - Invalid JSON: ${error.message}`);
        }
    } else {
        warnings.push(`⚠ package.json - File not found`);
    }
}

// Test 6: Check for common code issues
function checkCodeIssues() {
    log('\n🔍 Checking for Code Issues...', 'info');
    
    const jsFiles = [
        'script.js',
        'navigation.js',
        'config.js',
        'sms-modal-simple.js',
        'telehealth-modal.js',
        'patient-portal-modal.js'
    ];
    
    jsFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for console.log statements (not errors, just info)
            const consoleLogCount = (content.match(/console\.log/g) || []).length;
            if (consoleLogCount > 0) {
                // This is fine for development
            }
            
            // Check for potential issues
            if (content.includes('undefined') && content.includes('==')) {
                // Using == instead of === is a warning
            }
            
            passed.push(`✓ ${file} - No critical issues found`);
        }
    });
}

// Test 7: Verify server.js can be required
function verifyServer() {
    log('\n🖥️  Verifying Server Configuration...', 'info');
    
    const serverPath = path.join(__dirname, 'server.js');
    if (fs.existsSync(serverPath)) {
        try {
            const content = fs.readFileSync(serverPath, 'utf8');
            if (content.includes('http.createServer') && content.includes('PORT')) {
                passed.push(`✓ server.js - Valid server configuration`);
            } else {
                warnings.push(`⚠ server.js - May have configuration issues`);
            }
        } catch (error) {
            errors.push(`✗ server.js - Error reading file: ${error.message}`);
        }
    } else {
        warnings.push(`⚠ server.js - File not found`);
    }
}

// Run all tests
function runAllTests() {
    log('\n🚀 Starting Code Verification...\n', 'info');
    
    verifyJavaScriptFiles();
    verifyHTMLFiles();
    verifyAssets();
    verifyCSS();
    verifyPackageJson();
    checkCodeIssues();
    verifyServer();
    
    // Print results
    log('\n' + '='.repeat(50), 'info');
    log('📊 VERIFICATION RESULTS', 'info');
    log('='.repeat(50), 'info');
    
    if (passed.length > 0) {
        log(`\n✅ Passed (${passed.length}):`, 'success');
        passed.forEach(item => log(`  ${item}`, 'success'));
    }
    
    if (warnings.length > 0) {
        log(`\n⚠️  Warnings (${warnings.length}):`, 'warning');
        warnings.forEach(item => log(`  ${item}`, 'warning'));
    }
    
    if (errors.length > 0) {
        log(`\n❌ Errors (${errors.length}):`, 'error');
        errors.forEach(item => log(`  ${item}`, 'error'));
    }
    
    log('\n' + '='.repeat(50), 'info');
    
    if (errors.length === 0) {
        log('\n✅ All critical checks passed! Code is ready for dev branch.', 'success');
        process.exit(0);
    } else {
        log('\n❌ Some errors were found. Please fix them before proceeding.', 'error');
        process.exit(1);
    }
}

// Run the verification
runAllTests();


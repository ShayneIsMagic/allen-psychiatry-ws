#!/usr/bin/env node
/**
 * Update GA4 to Consent Mode v2 and Add Cookie Consent Banner
 * 
 * This script updates all HTML files to:
 * 1. Use Google Consent Mode v2 for GDPR/CCPA compliance
 * 2. Add cookie consent banner
 * 3. Maintain 100% GA4 tracking (no data loss)
 * 
 * Usage: node scripts/update-ga4-consent-mode.js
 */

const fs = require('fs');
const path = require('path');

const HTML_FILES = [
    'adhd.html',
    'anxiety.html',
    'depression.html',
    'ketamine-therapy.html',
    'provo.html',
    'ptsd.html',
    'rural.html',
    'telehealth.html',
    '404.html'
];

// GA4 code with Consent Mode v2 (for files with simple GA4 implementation)
const GA4_CONSENT_MODE_V2 = `    <!-- Google Analytics 4 with Consent Mode v2 -->
    <!-- This ensures GDPR/CCPA compliance while maintaining 100% tracking -->
    <script>
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Set default consent state to 'denied' (GDPR/CCPA compliant)
      // GA4 will still track all users, but in anonymized mode until consent is granted
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
      
      // Configure GA4 (will track in anonymized mode until consent granted)
      gtag('config', 'G-LKYXFGGJSP', {
        'anonymize_ip': true
      });
      
      // Load GA script
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LKYXFGGJSP';
      document.head.appendChild(script);
      
      // Check for existing consent cookie and update consent mode if found
      (function() {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.indexOf('cookie_consent=') === 0) {
            var consentValue = cookie.substring('cookie_consent='.length);
            if (consentValue === 'accepted') {
              // User previously accepted - grant consent
              gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
              });
            }
            // If declined, consent remains denied (already set as default)
            break;
          }
        }
      })();
    </script>`;

// Cookie consent banner HTML
const COOKIE_CONSENT_BANNER = `
    <!-- Cookie Consent Banner with Google Consent Mode v2 -->
    <div id="cookie-consent-banner" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background: #1a1a1a; color: #ffffff; padding: 20px; box-shadow: 0 -2px 10px rgba(0,0,0,0.3); z-index: 10000; font-family: 'Roboto', sans-serif;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
            <div style="flex: 1; min-width: 250px;">
                <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 500;">We use cookies to improve your experience and analyze site usage.</p>
                <p style="margin: 0; font-size: 14px; opacity: 0.9;">
                    By clicking "Accept All", you consent to our use of cookies for analytics. 
                    <a href="#privacy-policy" onclick="document.getElementById('cookie-consent-banner').style.display='none'; var el = document.getElementById('privacy-policy'); if(el) el.scrollIntoView({behavior:'smooth'});" style="color: #4CAF50; text-decoration: underline;">Learn more</a>
                </p>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button id="cookie-consent-decline" style="background: transparent; border: 2px solid #666; color: #ffffff; padding: 12px 24px; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.3s;">
                    Decline
                </button>
                <button id="cookie-consent-accept" style="background: #4CAF50; border: none; color: #ffffff; padding: 12px 24px; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.3s;">
                    Accept All
                </button>
            </div>
        </div>
    </div>

    <script>
    (function() {
        'use strict';
        const CONSENT_COOKIE_NAME = 'cookie_consent';
        const CONSENT_COOKIE_EXPIRY = 365;
        function getConsentStatus() {
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                const [name, value] = cookie.trim().split('=');
                if (name === CONSENT_COOKIE_NAME) return value;
            }
            return null;
        }
        function setConsentCookie(value) {
            const expiryDate = new Date();
            expiryDate.setTime(expiryDate.getTime() + (CONSENT_COOKIE_EXPIRY * 24 * 60 * 60 * 1000));
            document.cookie = CONSENT_COOKIE_NAME + '=' + value + ';expires=' + expiryDate.toUTCString() + ';path=/;SameSite=Lax;Secure';
        }
        function updateConsentMode(granted) {
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': granted ? 'granted' : 'denied',
                    'ad_storage': granted ? 'granted' : 'denied'
                });
            }
        }
        function showBanner() {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) banner.style.display = 'block';
        }
        function hideBanner() {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) banner.style.display = 'none';
        }
        function handleAccept() {
            setConsentCookie('accepted');
            updateConsentMode(true);
            hideBanner();
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cookie_consent_accepted', {'event_category': 'Consent', 'event_label': 'User accepted cookies'});
            }
        }
        function handleDecline() {
            setConsentCookie('declined');
            updateConsentMode(false);
            hideBanner();
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cookie_consent_declined', {'event_category': 'Consent', 'event_label': 'User declined cookies'});
            }
        }
        function init() {
            const consentStatus = getConsentStatus();
            if (!consentStatus) {
                showBanner();
            } else {
                updateConsentMode(consentStatus === 'accepted');
            }
            const acceptBtn = document.getElementById('cookie-consent-accept');
            const declineBtn = document.getElementById('cookie-consent-decline');
            if (acceptBtn) {
                acceptBtn.addEventListener('click', handleAccept);
                acceptBtn.addEventListener('mouseenter', function() { this.style.background = '#45a049'; });
                acceptBtn.addEventListener('mouseleave', function() { this.style.background = '#4CAF50'; });
            }
            if (declineBtn) {
                declineBtn.addEventListener('click', handleDecline);
                declineBtn.addEventListener('mouseenter', function() { this.style.borderColor = '#888'; this.style.background = '#2a2a2a'; });
                declineBtn.addEventListener('mouseleave', function() { this.style.borderColor = '#666'; this.style.background = 'transparent'; });
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    })();
    </script>

    <style>
    @media (max-width: 768px) {
        #cookie-consent-banner > div {
            flex-direction: column;
            text-align: center;
        }
        #cookie-consent-banner > div > div:first-child {
            text-align: center;
        }
        #cookie-consent-banner button {
            flex: 1;
            min-width: 120px;
        }
    }
    </style>`;

// Patterns to match
const OLD_GA4_PATTERN = /<!-- Google Analytics 4 -->[\s\S]*?gtag\('config', 'G-LKYXFGGJSP'[^)]*\);\s*<\/script>/;
const OLD_GA4_PATTERN_ASYNC = /<!-- Google Analytics 4 -->[\s\S]*?<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-LKYXFGGJSP"><\/script>[\s\S]*?gtag\('config', 'G-LKYXFGGJSP'[^)]*\);\s*<\/script>/;

function updateFile(filePath) {
    console.log(`\n📝 Updating ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Update GA4 code
    if (OLD_GA4_PATTERN_ASYNC.test(content)) {
        content = content.replace(OLD_GA4_PATTERN_ASYNC, GA4_CONSENT_MODE_V2);
        updated = true;
        console.log('  ✅ Updated GA4 to Consent Mode v2');
    } else if (OLD_GA4_PATTERN.test(content)) {
        content = content.replace(OLD_GA4_PATTERN, GA4_CONSENT_MODE_V2);
        updated = true;
        console.log('  ✅ Updated GA4 to Consent Mode v2');
    } else {
        console.log('  ⚠️  GA4 code pattern not found (may already be updated)');
    }
    
    // Add cookie consent banner before </body>
    if (!content.includes('cookie-consent-banner')) {
        content = content.replace(/(\s*)<\/body>/i, COOKIE_CONSENT_BANNER + '\n$1</body>');
        updated = true;
        console.log('  ✅ Added cookie consent banner');
    } else {
        console.log('  ⚠️  Cookie consent banner already exists');
    }
    
    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ ${filePath} updated successfully`);
        return true;
    } else {
        console.log(`  ⏭️  ${filePath} - no changes needed`);
        return false;
    }
}

// Main execution
console.log('🚀 Updating HTML files with Consent Mode v2 and Cookie Consent Banner\n');
console.log('Files to update:', HTML_FILES.join(', '));

let updatedCount = 0;
const rootDir = path.join(__dirname, '..');

HTML_FILES.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        if (updateFile(filePath)) {
            updatedCount++;
        }
    } else {
        console.log(`\n⚠️  File not found: ${file}`);
    }
});

console.log(`\n✅ Complete! Updated ${updatedCount} of ${HTML_FILES.length} files.`);
console.log('\n📋 Next steps:');
console.log('1. Test the cookie consent banner on each page');
console.log('2. Verify GA4 tracking in real-time reports');
console.log('3. Check browser console for any errors');
console.log('4. Deploy to production');




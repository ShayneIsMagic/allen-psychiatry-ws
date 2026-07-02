# Analytics & Search Tools Setup Guide

**Date:** 2025-12-31  
**Status:** 📋 **SETUP GUIDE**

---

## ✅ **CURRENTLY CONFIGURED**

### **1. Google Analytics 4 (GA4)** ✅
- **Measurement ID:** `G-LKYXFGGJSP`
- **Status:** ✅ Installed on all 9 pages
- **Event Tracking:** ✅
  - `schedule_appointment_click`
  - `phone_call_click`
  - `email_click`
- **Location:** Hardcoded in HTML files (should be moved to config.js)

### **2. Sitemap** ✅
- **File:** `sitemap.xml`
- **URL:** https://allenpsychiatry.net/sitemap.xml
- **Status:** ✅ Present and valid

### **3. Robots.txt** ✅
- **File:** `robots.txt`
- **Status:** ✅ Present and configured
- **Sitemap:** Referenced in robots.txt

---

## ⚠️ **MISSING / NOT CONFIGURED**

### **1. .env File** ❌
- **Status:** Not created
- **Need:** Environment variables for sensitive data
- **Action:** Create `.env` file (see `.env.example`)

### **2. Google Search Console** ❌
- **Status:** Not verified
- **Need:** Verification meta tag or DNS record
- **Action:** Set up at https://search.google.com/search-console

### **3. Bing Webmaster Tools** ❌
- **Status:** Not configured
- **Need:** Verification meta tag
- **Action:** Set up at https://www.bing.com/webmasters

### **4. GA4 in config.js** ⚠️
- **Status:** Hardcoded in HTML
- **Need:** Move to config.js for centralization
- **Action:** Update config.js and HTML files

---

## 🔧 **SETUP INSTRUCTIONS**

### **Step 1: Create .env File**

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your values:
   ```env
   GA4_MEASUREMENT_ID=G-LKYXFGGJSP
   SITE_URL=https://allenpsychiatry.net
   # Add other values as needed
   ```

3. **Important:** `.env` is in `.gitignore` - never commit it!

---

### **Step 2: Set Up Google Search Console**

1. **Go to:** https://search.google.com/search-console
2. **Add Property:** `https://allenpsychiatry.net`
3. **Verify Ownership:**
   - **Option A (DNS - Recommended):**
     - Copy TXT record from Google
     - Add to Cloudflare DNS
     - Wait for verification
   
   - **Option B (HTML Tag):**
     - Copy meta tag from Google
     - Add to `index.html` `<head>`
     - Update `config.js` with verification code
   
4. **Submit Sitemap:**
   - Go to Sitemaps section
   - Submit: `https://allenpsychiatry.net/sitemap.xml`
   
5. **Request Indexing:**
   - Request indexing for key pages
   - Monitor indexing status

**Expected Results:**
- See which keywords bring traffic
- Identify ranking opportunities
- Track search performance
- Get alerts for issues

---

### **Step 3: Set Up Bing Webmaster Tools**

1. **Go to:** https://www.bing.com/webmasters
2. **Add Site:** `https://allenpsychiatry.net`
3. **Verify Ownership:**
   - Copy meta tag verification code
   - Add to `index.html` `<head>`
   - Update `config.js` with verification code
   
4. **Submit Sitemap:**
   - Submit: `https://allenpsychiatry.net/sitemap.xml`

**Expected Results:**
- Bing search visibility
- Additional traffic source
- Search performance data

---

### **Step 4: Centralize GA4 in config.js**

**Current:** GA4 ID hardcoded in each HTML file  
**Goal:** Single source of truth in `config.js`

**Action:**
1. Update `config.js` with GA4 ID (already done ✅)
2. Update HTML files to use config.js value
3. Remove hardcoded GA4 IDs from HTML

---

## 📊 **CONFIGURATION FILES**

### **config.js** ✅
- Contains: Portal URLs, contact info, telehealth config
- **Added:** Analytics configuration section
- **Status:** Ready for GA4 centralization

### **.env.example** ✅
- Template for environment variables
- Shows what should be in `.env`
- **Action:** Copy to `.env` and fill in values

### **.gitignore** ✅
- Excludes `.env` from git
- Protects sensitive data
- **Status:** Configured

---

## 🎯 **RECOMMENDED NEXT STEPS**

### **Priority 1: Google Search Console** ⭐⭐⭐⭐⭐
- **Time:** 30 minutes
- **Cost:** FREE
- **ROI:** Very High
- **Why:** Essential for SEO visibility

### **Priority 2: Create .env File** ⭐⭐⭐⭐
- **Time:** 5 minutes
- **Cost:** FREE
- **ROI:** High (security, organization)
- **Why:** Centralize configuration, protect sensitive data

### **Priority 3: Centralize GA4** ⭐⭐⭐
- **Time:** 30 minutes
- **Cost:** FREE
- **ROI:** Medium (code quality)
- **Why:** Single source of truth, easier maintenance

### **Priority 4: Bing Webmaster Tools** ⭐⭐
- **Time:** 15 minutes
- **Cost:** FREE
- **ROI:** Medium (additional traffic)
- **Why:** Additional search visibility

---

## 📝 **VERIFICATION CHECKLIST**

- [ ] `.env` file created (not committed to git)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google Search Console
- [ ] Bing Webmaster Tools verified (optional)
- [ ] GA4 tracking verified in Real-Time reports
- [ ] Event tracking working (schedule, phone, email clicks)
- [ ] Conversion events marked in GA4 Admin

---

## 🔗 **USEFUL LINKS**

- **Google Analytics:** https://analytics.google.com
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters
- **Google Business Profile:** https://business.google.com

---

**Status:** 📋 **READY TO SET UP**


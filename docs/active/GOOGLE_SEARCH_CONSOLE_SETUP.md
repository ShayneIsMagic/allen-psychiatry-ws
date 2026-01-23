# Google Search Console Setup - Complete Action Plan
## Allen Psychiatry - Step-by-Step Guide

**Date:** January 15, 2025  
**Priority:** P1 - HIGH  
**Impact:** ⭐⭐⭐ (Essential for tracking and indexing)  
**Estimated Time:** 30 minutes

---

## 📋 **PRE-SETUP CHECKLIST**

Before starting, ensure:
- [ ] You have access to Google account (same as GA4)
- [ ] You have access to Cloudflare dashboard (for DNS verification)
- [ ] Website is live at: https://allenpsychiatry.net
- [ ] Sitemap is accessible: https://allenpsychiatry.net/sitemap.xml

---

## 🔴 **STEP 1: ACCESS GOOGLE SEARCH CONSOLE**

### **Action:**
1. Go to: https://search.google.com/search-console
2. Sign in with your Google account (same account used for Google Analytics)
3. If this is your first time, you'll see the welcome screen

---

## 🔴 **STEP 2: ADD PROPERTY**

### **Action:**
1. Click **"Add Property"** button (top left)
2. Select **"URL prefix"** method (recommended)
3. Enter your website URL:
   ```
   https://allenpsychiatry.net
   ```
4. Click **"Continue"**

**Note:** Use "URL prefix" method (not "Domain") because it's easier to verify and works better with Cloudflare.

---

## 🔴 **STEP 3: VERIFY OWNERSHIP**

### **Method 1: DNS Verification (RECOMMENDED - Most Reliable)**

**Step 3a: Get Verification Code from Google**
1. Google will show you a verification code
2. It will look like: `google-site-verification=abc123xyz789...`
3. Copy the entire verification code

**Step 3b: Add DNS Record in Cloudflare**
1. Log into Cloudflare dashboard: https://dash.cloudflare.com/
2. Select your domain: `allenpsychiatry.net`
3. Click **"DNS"** in the left sidebar
4. Click **"Add record"** button
5. Configure the record:
   - **Type:** `TXT`
   - **Name:** `@` (or leave blank for root domain)
   - **Content:** Paste the verification code from Google (e.g., `google-site-verification=abc123xyz789...`)
   - **TTL:** Auto (or 3600)
   - **Proxy status:** DNS only (gray cloud, not orange)
6. Click **"Save"**

**Step 3c: Wait for DNS Propagation**
- Wait 5-10 minutes for DNS to propagate
- You can check propagation at: https://dnschecker.org/
- Search for TXT records for `allenpsychiatry.net`

**Step 3d: Verify in Google Search Console**
1. Return to Google Search Console
2. Click **"Verify"** button
3. If successful, you'll see a success message
4. Click **"Continue"** to access your property

---

### **Method 2: HTML File Upload (ALTERNATIVE - If DNS doesn't work)**

**Step 3a: Download Verification File**
1. In Google Search Console, select **"HTML file"** method
2. Download the HTML file (e.g., `google1234567890abcdef.html`)

**Step 3b: Upload to Website**
1. Add the file to your GitHub repository root directory
2. Commit and push to GitHub
3. Wait for Cloudflare Pages to deploy (usually 1-2 minutes)

**Step 3c: Verify**
1. Ensure file is accessible at: `https://allenpsychiatry.net/google1234567890abcdef.html`
2. Return to Google Search Console
3. Click **"Verify"**

---

### **Method 3: HTML Tag (ALTERNATIVE - If other methods don't work)**

**Step 3a: Get Meta Tag**
1. In Google Search Console, select **"HTML tag"** method
2. Copy the meta tag code (e.g., `<meta name="google-site-verification" content="abc123xyz789..." />`)

**Step 3b: Add to Website**
1. Add the meta tag to the `<head>` section of `index.html`
2. Commit and push to GitHub
3. Wait for deployment

**Step 3c: Verify**
1. Return to Google Search Console
2. Click **"Verify"**

---

## 🔴 **STEP 4: SUBMIT SITEMAP**

### **Action:**
1. Once verified, go to **"Sitemaps"** in the left sidebar
2. In the "Add a new sitemap" field, enter:
   ```
   sitemap.xml
   ```
3. Click **"Submit"**
4. You should see status: "Success" (may take a few minutes)

**Note:** Your sitemap is already created and accessible at: https://allenpsychiatry.net/sitemap.xml

---

## 🔴 **STEP 5: REQUEST INDEXING FOR KEY PAGES**

### **Action:**
1. Go to **"URL Inspection"** tool (top search bar)
2. For each key page below, enter the URL and click **"Request Indexing"**:

**Key Pages to Index:**
```
https://allenpsychiatry.net/
https://allenpsychiatry.net/adhd
https://allenpsychiatry.net/anxiety
https://allenpsychiatry.net/depression
https://allenpsychiatry.net/ptsd
https://allenpsychiatry.net/provo
https://allenpsychiatry.net/rural
https://allenpsychiatry.net/telehealth
https://allenpsychiatry.net/about
https://allenpsychiatry.net/ketamine-therapy
```

**Process for Each:**
1. Enter URL in URL Inspection tool
2. Click **"Test Live URL"** (optional - checks if page is accessible)
3. Click **"Request Indexing"**
4. Wait for confirmation
5. Move to next URL

**Note:** Google may take 24-48 hours to process indexing requests. Don't request indexing for the same URL multiple times.

---

## 🔴 **STEP 6: LINK GOOGLE ANALYTICS TO SEARCH CONSOLE**

### **Action:**
1. In Google Search Console, go to **"Settings"** (gear icon, bottom left)
2. Click **"Google Analytics property"**
3. Select your GA4 property: **Allen Psychiatry (G-LKYXFGGJSP)**
4. Click **"Save"**

**Verify Connection:**
1. Go to Google Analytics 4
2. Navigate to **"Admin"** → **"Property Settings"**
3. Scroll to **"Search Console"** section
4. Verify connection is active

**Expected Result:** Search Console data will appear in GA4 reports (may take 24-48 hours)

---

## 🔴 **STEP 7: ENABLE EMAIL NOTIFICATIONS**

### **Action:**
1. In Google Search Console, go to **"Settings"** → **"Users and permissions"**
2. Click on your email address
3. Ensure **"Email notifications"** are enabled
4. Select notification types:
   - ✅ Security issues
   - ✅ Manual actions
   - ✅ Indexing issues
   - ✅ Performance issues

**You'll receive alerts for:**
- Security problems (hacking, malware)
- Manual penalties
- Indexing errors
- Significant traffic drops

---

## 🔴 **STEP 8: SET UP PERFORMANCE MONITORING**

### **Action:**
1. Go to **"Performance"** → **"Search Results"**
2. Review search performance data (will populate after 24-48 hours)
3. Set date range to see historical data
4. Monitor:
   - Total clicks
   - Total impressions
   - Average click-through rate (CTR)
   - Average position

**Key Metrics to Track:**
- **Queries:** What people search to find you
- **Pages:** Which pages get the most traffic
- **Countries:** Where your traffic comes from
- **Devices:** Mobile vs desktop

---

## 📋 **COMPLETE SETUP CHECKLIST**

### **Verification:**
- [ ] Property added: `https://allenpsychiatry.net`
- [ ] Ownership verified (DNS, HTML file, or HTML tag method)
- [ ] Verification successful

### **Sitemap:**
- [ ] Sitemap submitted: `sitemap.xml`
- [ ] Sitemap status: Success
- [ ] Pages discovered (check after 24-48 hours)

### **Indexing:**
- [ ] Homepage indexing requested
- [ ] All 10 key pages indexing requested
- [ ] Indexing status checked (after 24-48 hours)

### **Integration:**
- [ ] Google Analytics linked to Search Console
- [ ] Connection verified in GA4
- [ ] Email notifications enabled

### **Monitoring:**
- [ ] Performance report reviewed
- [ ] Queries report checked
- [ ] Pages report reviewed
- [ ] Coverage report checked (for indexing issues)

---

## 🎯 **EXPECTED RESULTS TIMELINE**

### **Immediate (After Setup):**
- ✅ Property verified
- ✅ Sitemap submitted
- ✅ Indexing requests sent

### **24-48 Hours:**
- ✅ Pages start appearing in search results
- ✅ Search Console data begins populating
- ✅ Performance data available
- ✅ Coverage report shows indexed pages

### **1 Week:**
- ✅ Full indexing complete
- ✅ Search performance data available
- ✅ Query data showing what people search
- ✅ Click-through rates visible

---

## 📊 **KEY REPORTS TO MONITOR**

### **1. Performance Report:**
- See which queries bring traffic
- Monitor click-through rates
- Track average position in search results

### **2. Coverage Report:**
- Check for indexing errors
- Monitor excluded pages
- Fix any issues found

### **3. Sitemaps Report:**
- Verify sitemap is processing correctly
- Check for sitemap errors
- Monitor pages discovered

### **4. Mobile Usability:**
- Check for mobile issues
- Fix any mobile usability problems
- Ensure site is mobile-friendly

---

## 🔗 **USEFUL LINKS**

- **Google Search Console:** https://search.google.com/search-console
- **Search Console Help:** https://support.google.com/webmasters/
- **URL Inspection Tool:** Available in Search Console
- **DNS Checker:** https://dnschecker.org/

---

## 🚨 **TROUBLESHOOTING**

### **Verification Fails:**
- **DNS Method:** Wait 10-15 minutes after adding DNS record, check DNS propagation
- **HTML File:** Ensure file is in root directory, accessible via HTTPS
- **HTML Tag:** Ensure meta tag is in `<head>` section, not `<body>`

### **Sitemap Not Processing:**
- Check sitemap is accessible: https://allenpsychiatry.net/sitemap.xml
- Verify sitemap format is correct (XML)
- Wait 24-48 hours for processing

### **Pages Not Indexing:**
- Check robots.txt (should allow Googlebot)
- Verify no "noindex" tags on pages
- Request indexing manually
- Check for crawl errors in Coverage report

### **No Data in Performance Report:**
- Wait 24-48 hours after setup
- Ensure site is getting search traffic
- Check date range (default is last 3 months)
- Verify property is correct

---

## ✅ **QUICK REFERENCE**

**Your Property URL:**
```
https://allenpsychiatry.net
```

**Sitemap URL:**
```
https://allenpsychiatry.net/sitemap.xml
```

**Google Analytics Property:**
```
Allen Psychiatry (G-LKYXFGGJSP)
```

**Cloudflare Dashboard:**
```
https://dash.cloudflare.com/
```

---

**Status:** 📋 **READY FOR SETUP**  
**Next Action:** Go to https://search.google.com/search-console and start Step 1  
**Total Time:** 30 minutes (plus 24-48 hour wait for data)


# Cookie Troubleshooting Guide

**Date:** 2025-12-30  
**Issue:** Possible cookie-related loading problems

---

## 🔍 **COOKIE USAGE ON YOUR SITE**

### **What Uses Cookies:**

1. **Google Analytics 4 (GA4)** ✅
   - **Measurement ID:** G-LKYXFGGJSP
   - **Purpose:** Tracks page views and user behavior
   - **Cookies Used:** `_ga`, `_ga_*`, `_gid`
   - **Location:** All 9 HTML pages

2. **No Other Cookie Usage**
   - ✅ No custom cookies
   - ✅ No localStorage/sessionStorage
   - ✅ No third-party tracking cookies (besides GA4)

---

## ⚠️ **POTENTIAL COOKIE ISSUES**

### **1. Browser Cookie Settings**

**Problem:** Strict cookie settings might block GA4 cookies

**Check:**
- Chrome: Settings → Privacy and security → Cookies and other site data
- Safari: Preferences → Privacy → Cookies and website data
- Firefox: Options → Privacy & Security → Cookies and Site Data

**Fix:**
- Allow cookies for: `allen-psychiatry-ws.pages.dev`
- Allow cookies for: `allenpsychiatry.net`
- Allow third-party cookies (if needed for GA4)

---

### **2. Ad Blockers / Privacy Extensions**

**Problem:** Extensions like uBlock Origin, Privacy Badger, or AdBlock might block GA4

**Check:**
- Disable extensions temporarily
- Check if site loads without extensions

**Fix:**
- Whitelist: `allen-psychiatry-ws.pages.dev`
- Whitelist: `allenpsychiatry.net`
- Whitelist: `googletagmanager.com` (for GA4)

---

### **3. Browser Cache Issues**

**Problem:** Old cached files might cause loading issues

**Fix:**
1. **Hard Refresh:**
   - Chrome/Firefox: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Safari: `Cmd+Option+R`

2. **Clear Cache:**
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Safari: Develop → Empty Caches
   - Firefox: Options → Privacy → Clear Data → Cached Web Content

3. **Clear Cookies for Site:**
   - Chrome: Settings → Privacy → Cookies → See all cookies → Search "allen-psychiatry" → Delete
   - Safari: Preferences → Privacy → Manage Website Data → Search "allen" → Remove

---

### **4. Incognito/Private Mode Test**

**Test if cookies are the issue:**
1. Open incognito/private window
2. Visit: `https://a349d53a.allen-psychiatry-ws.pages.dev/`
3. If it works in incognito → Cookie/cache issue
4. If it doesn't work → Different problem (likely deployment)

---

## 🔧 **TROUBLESHOOTING STEPS**

### **Step 1: Test in Incognito**
```bash
# Open incognito/private window
# Visit: https://a349d53a.allen-psychiatry-ws.pages.dev/
```

**If works:** Cookie/cache issue  
**If doesn't work:** Deployment issue (not cookies)

---

### **Step 2: Clear Browser Data**

**Chrome:**
1. Settings → Privacy and security
2. Clear browsing data
3. Select: "Cached images and files" + "Cookies and other site data"
4. Time range: "All time"
5. Clear data

**Safari:**
1. Develop → Empty Caches
2. Preferences → Privacy → Manage Website Data
3. Remove all for "allen-psychiatry"

**Firefox:**
1. Options → Privacy & Security
2. Cookies and Site Data → Clear Data
3. Check both boxes → Clear

---

### **Step 3: Disable Extensions**

**Temporarily disable:**
- Ad blockers
- Privacy extensions
- Cookie blockers
- Script blockers

**Test if site loads**

---

### **Step 4: Check Console for Errors**

1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for errors:
   - Cookie-related errors
   - CORS errors
   - Script loading errors

**Common errors:**
- `Failed to set cookie` → Cookie blocking
- `CORS policy` → Different issue
- `404 Not Found` → File not found (deployment issue)

---

## ✅ **QUICK FIXES**

### **Option 1: Allow Cookies**
1. Visit site
2. Click lock icon in address bar
3. Allow cookies for this site

### **Option 2: Hard Refresh**
- `Ctrl+Shift+R` (Windows)
- `Cmd+Shift+R` (Mac)

### **Option 3: Clear Site Data**
1. Developer Tools (F12)
2. Application tab
3. Storage → Clear site data

---

## 🎯 **MOST LIKELY ISSUE**

**If pages aren't loading, it's probably NOT cookies.**

**More likely:**
1. **Deployment not complete** - Wait 2-3 minutes after push
2. **Cloudflare cache** - Needs to clear
3. **File structure** - Files need `.html` extensions (✅ Fixed)

**Cookies would only affect:**
- Google Analytics tracking
- Not page loading itself

---

## 📊 **VERIFICATION**

### **Test if cookies are the problem:**

1. **Open incognito window**
2. **Visit:** `https://a349d53a.allen-psychiatry-ws.pages.dev/adhd`
3. **Check:**
   - ✅ Page loads → Cookie/cache issue
   - ❌ Page doesn't load → Deployment issue

### **If it's cookies:**
- Clear browser cache
- Allow cookies for site
- Disable cookie blockers

### **If it's NOT cookies:**
- Check Cloudflare deployment status
- Wait for deployment to complete
- Check file structure

---

## 🔍 **CHECK DEPLOYMENT STATUS**

**More likely than cookies:**

1. **Cloudflare Dashboard:**
   - Go to Pages → Your project
   - Check latest deployment status
   - Should show "Success" and be live

2. **Deployment Time:**
   - Usually takes 1-3 minutes after git push
   - Check if deployment completed

3. **File Structure:**
   - Files should have `.html` extensions ✅
   - Links should use clean URLs ✅

---

## ✅ **SUMMARY**

**Cookie issues would:**
- ✅ Block Google Analytics (tracking only)
- ❌ NOT block page loading

**If pages aren't loading:**
- More likely: Deployment not complete
- More likely: Cloudflare cache
- Less likely: Cookies

**Quick test:**
1. Open incognito window
2. Visit site
3. If works → Clear cache
4. If doesn't work → Check deployment

---

**Most likely:** It's a deployment/cache issue, not cookies. But clearing cookies/cache is always a good first step!


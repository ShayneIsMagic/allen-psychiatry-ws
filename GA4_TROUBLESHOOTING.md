# Google Analytics 4 Troubleshooting

**Date:** 2025-12-31  
**Measurement ID:** G-LKYXFGGJSP  
**Status:** 🔍 **TROUBLESHOOTING**

---

## 🔍 **COMMON GA4 SETUP ISSUES**

### **Issue 1: No Data Showing**

**Possible Causes:**
1. **Tracking code not on all pages** - Check all HTML files
2. **CSP blocking GA4** - Check `_headers` file
3. **Measurement ID wrong** - Verify it's `G-LKYXFGGJSP`
4. **Real-time reports not checked** - Data takes time to appear
5. **Site not receiving traffic** - No visitors = no data

---

### **Issue 2: CSP Blocking GA4**

**Check `_headers` file:**
- Should include `https://www.googletagmanager.com` in `script-src`
- Should include `https://www.google-analytics.com` in `script-src`, `img-src`, `connect-src`

**Current CSP should have:**
```
script-src ... https://www.googletagmanager.com https://www.google-analytics.com
img-src ... https://www.google-analytics.com https://www.googletagmanager.com
connect-src ... https://www.google-analytics.com https://www.googletagmanager.com
```

---

### **Issue 3: Tracking Code Missing or Wrong**

**Verify in HTML files:**
- Should have GA4 script in `<head>`
- Measurement ID should be: `G-LKYXFGGJSP`
- Should be on ALL pages

**Correct code:**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LKYXFGGJSP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LKYXFGGJSP');
</script>
```

---

## ✅ **VERIFICATION STEPS**

### **Step 1: Check Tracking Code on Pages**

1. **Visit your site:**
   - Go to: `https://allenpsychiatry.net`
   - Right-click → "View Page Source"

2. **Search for "G-LKYXFGGJSP":**
   - Should find the tracking code
   - Should be in `<head>` section

3. **Check all pages:**
   - Homepage
   - Service pages (ADHD, Anxiety, Depression, PTSD)
   - Location pages (Provo, Rural, Telehealth)
   - About page

---

### **Step 2: Check Browser Console**

1. **Open Browser Console:**
   - F12 → Console tab
   - Visit your site

2. **Look for:**
   - ✅ No CSP errors for GA4
   - ✅ No script loading errors
   - ✅ GA4 script loads successfully

3. **If errors:**
   - CSP blocking → Fix `_headers`
   - Script not loading → Check network tab

---

### **Step 3: Check Real-Time Reports**

1. **Go to GA4:**
   - Analytics → Reports → Real-time

2. **Visit your site:**
   - Open `https://allenpsychiatry.net` in another tab
   - Should see yourself in Real-time reports within 30 seconds

3. **If not showing:**
   - Check tracking code is correct
   - Check CSP isn't blocking
   - Check browser console for errors

---

### **Step 4: Verify Measurement ID**

1. **In GA4 Dashboard:**
   - Admin → Data Streams
   - Click on your web stream
   - Verify Measurement ID: `G-LKYXFGGJSP`

2. **In HTML files:**
   - Search for "G-LKYXFGGJSP"
   - Should match exactly
   - No typos or extra characters

---

## 🔧 **COMMON FIXES**

### **Fix 1: CSP Blocking**

If CSP is blocking GA4:
- Add `https://www.googletagmanager.com` to `script-src`
- Add `https://www.google-analytics.com` to `script-src`, `img-src`, `connect-src`

### **Fix 2: Tracking Code Missing**

If tracking code not on all pages:
- Add GA4 code to `<head>` of all HTML files
- Use Measurement ID: `G-LKYXFGGJSP`

### **Fix 3: Wrong Measurement ID**

If Measurement ID is wrong:
- Verify in GA4: Admin → Data Streams
- Update all HTML files with correct ID

---

## 📋 **CHECKLIST**

- [ ] GA4 tracking code on all pages
- [ ] Measurement ID is `G-LKYXFGGJSP` (correct)
- [ ] CSP allows GA4 domains
- [ ] No console errors for GA4
- [ ] Real-time reports show data
- [ ] Browser console shows GA4 loading

---

## 🎯 **WHAT TO CHECK IN GA4**

**If no data showing:**
1. **Real-time reports** - Should show current visitors
2. **Data collection status** - Should show "Collecting data"
3. **DebugView** - Should show events firing
4. **Network requests** - Should see GA4 requests

**If data is delayed:**
- Standard reports: 24-48 hours delay
- Real-time reports: 30 seconds delay
- This is normal!

---

**Status:** Check tracking code, CSP, and Real-time reports to diagnose the issue!


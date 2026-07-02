# Performance & Accessibility Optimization Plan

**Date:** January 26, 2025  
**Status:** 🔄 **IN PROGRESS**

---

## 🎯 **Issues to Address**

### **1. Font Display** ⚠️
- **Issue:** Google Fonts loading without `font-display: swap` in CSS
- **Impact:** Text invisible during font load (FOIT - Flash of Invisible Text)
- **Fix:** Add `font-display: swap` via `@font-face` or update Google Fonts URL

### **2. Render-Blocking CSS** ⚠️
- **Issue:** `styles.css` loads synchronously, blocking page render
- **Impact:** Delayed First Contentful Paint (FCP), poor Lighthouse score
- **Fix:** Inline critical CSS or load async

### **3. Image Delivery** ⚠️
- **Issue:** Images not using modern formats (WebP/AVIF), missing proper sizing
- **Impact:** Large file sizes, slow loading
- **Fix:** Use `<picture>` with format fallbacks, proper `srcset`, lazy loading

### **4. Third-Party Cookies** ⚠️
- **Issue:** GA4 may be blocked by third-party cookie restrictions
- **Impact:** Analytics not tracking, console errors
- **Fix:** Configure GA4 with proper consent mode, use first-party cookies

### **5. HTTP Requests** ⚠️
- **Issue:** Multiple separate script files, multiple stylesheets
- **Impact:** Multiple round trips, slower page load
- **Fix:** Combine scripts where possible, defer non-critical

### **6. Color Contrast** ⚠️
- **Issue:** Some text fails WCAG AA contrast requirements
- **Impact:** Accessibility violation, users can't read content
- **Fix:** Adjust colors to meet 4.5:1 ratio (normal text) or 3:1 (large text)

### **7. DevTools Issues** ⚠️
- **Issue:** Console warnings/errors from third-party scripts
- **Impact:** Poor developer experience, potential functionality issues
- **Fix:** Address console warnings, suppress non-critical errors

---

## ✅ **Implementation Plan**

### **Phase 1: Font Display & CSS Optimization**
1. Add `font-display: swap` to font loading
2. Extract critical CSS and inline it
3. Load non-critical CSS asynchronously

### **Phase 2: Image Optimization**
1. Implement `<picture>` elements with WebP/AVIF
2. Add proper `srcset` for responsive images
3. Ensure all images have `loading="lazy"` (except above-fold)

### **Phase 3: Script Optimization**
1. Combine related scripts where possible
2. Defer all non-critical scripts
3. Use `async` for independent scripts

### **Phase 4: Third-Party Optimization**
1. Configure GA4 with consent mode
2. Use `rel="preconnect"` for external domains
3. Minimize third-party script impact

### **Phase 5: Accessibility Fixes**
1. Fix color contrast issues
2. Ensure all interactive elements meet touch target sizes
3. Verify ARIA labels and semantic HTML

---

## 📊 **Expected Improvements**

- **Lighthouse Performance:** 60+ → 90+
- **Lighthouse Accessibility:** 85+ → 95+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Total Blocking Time:** < 200ms

---

**Last Updated:** January 26, 2025


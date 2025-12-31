# Remaining Tasks Plan - Post Lighthouse Audit

**Date:** 2025-12-31  
**Status:** 📋 **PLANNING PHASE**

---

## 🎯 **TASK CATEGORIZATION**

Based on previous Lighthouse audits and current site status, here are the remaining tasks organized by priority:

---

## 🔴 **CRITICAL PRIORITY (Do Immediately After Lighthouse)**

### **1. Image Optimization** ⏱️ 1-2 hours
**Impact:** Performance score, LCP, user experience

**Tasks:**
- [ ] Compress existing images (60-70% reduction)
- [ ] Convert to WebP format
- [ ] Convert to AVIF format
- [ ] Update HTML with `<picture>` elements
- [ ] Test image quality

**Expected Results:**
- LCP: 13.5s → 2-3s
- Total size: 4.5MB → ~0.8MB
- Performance score: +20-30 points

---

### **2. Improve Image Alt Text** ⏱️ 15 minutes
**Impact:** Accessibility, SEO

**Tasks:**
- [ ] Update 8 images with more descriptive alt text
- [ ] Service page hero images (4)
- [ ] Service card images on homepage (4)

**Expected Results:**
- Accessibility score: +5-10 points
- Better SEO for image search
- WCAG compliance

---

## 🟡 **HIGH PRIORITY (This Week)**

### **3. ARIA Labels for Navigation** ⏱️ 30 minutes
**Impact:** Accessibility

**Tasks:**
- [ ] Add `aria-label` to main navigation
- [ ] Add `aria-label` to hamburger menu
- [ ] Add `role` attributes where needed
- [ ] Test with screen reader

**Expected Results:**
- Accessibility score: +5 points
- Better screen reader experience

---

### **4. Heading Hierarchy Verification** ⏱️ 30 minutes
**Impact:** Accessibility, SEO

**Tasks:**
- [ ] Verify each page has ONE `<h1>`
- [ ] Check heading order (h1 → h2 → h3)
- [ ] Fix any skipped levels
- [ ] Ensure semantic structure

**Expected Results:**
- Accessibility score: +3-5 points
- Better SEO structure

---

### **5. Color Contrast Audit** ⏱️ 1 hour
**Impact:** Accessibility

**Tasks:**
- [ ] Check all text colors against backgrounds
- [ ] Verify WCAG AA compliance (4.5:1 ratio)
- [ ] Fix any contrast issues
- [ ] Test interactive elements

**Expected Results:**
- Accessibility score: +5-10 points
- WCAG AA compliance

---

## 🟢 **MEDIUM PRIORITY (This Month)**

### **6. CSS/JS Minification** ⏱️ 1 hour
**Impact:** Performance

**Tasks:**
- [ ] Minify `styles.css`
- [ ] Minify all JavaScript files
- [ ] Remove unused CSS
- [ ] Test functionality after minification

**Expected Results:**
- Performance score: +5-10 points
- Faster load times
- Smaller file sizes

---

### **7. Breadcrumb Navigation** ⏱️ 1-2 hours
**Impact:** SEO, UX

**Tasks:**
- [ ] Add breadcrumb HTML to all pages
- [ ] Add BreadcrumbList schema markup
- [ ] Style breadcrumbs consistently
- [ ] Test navigation

**Expected Results:**
- SEO score: +3-5 points
- Better user navigation
- Rich snippets potential

---

### **8. Service Worker for Caching** ⏱️ 2-3 hours
**Impact:** Performance, Offline support

**Tasks:**
- [ ] Implement service worker
- [ ] Cache static assets
- [ ] Cache API responses
- [ ] Offline fallback page
- [ ] Test offline functionality

**Expected Results:**
- Performance score: +5-10 points
- Faster repeat visits
- Offline functionality

---

### **9. FAQ Schema on Service Pages** ⏱️ 2-3 hours
**Impact:** SEO, Featured snippets

**Tasks:**
- [ ] Create FAQ sections for each service page
- [ ] Add FAQPage schema markup
- [ ] Optimize for featured snippets
- [ ] Test with Rich Results Test

**Expected Results:**
- SEO score: +5-10 points
- Potential featured snippets
- Better search visibility

---

## 📊 **EXPECTED SCORE IMPROVEMENTS**

### **Current (Estimated):**
- Performance: ~60-70
- Accessibility: ~85-90
- Best Practices: ~90-95
- SEO: ~90-95

### **After Critical Tasks:**
- Performance: ~85-90 (+20-25)
- Accessibility: ~95-100 (+5-10)
- Best Practices: ~95-100 (+5)
- SEO: ~95-100 (+5)

### **After High Priority Tasks:**
- Performance: ~90-95 (+5-10)
- Accessibility: ~100 (+5)
- Best Practices: ~100 (+5)
- SEO: ~100 (+5)

### **After Medium Priority Tasks:**
- Performance: ~95-100 (+5)
- Accessibility: ~100 (maintained)
- Best Practices: ~100 (maintained)
- SEO: ~100 (maintained)

---

## 🎯 **IMPLEMENTATION TIMELINE**

### **Week 1:**
- Day 1-2: Image optimization (critical)
- Day 3: Alt text improvements (critical)
- Day 4-5: ARIA labels, heading hierarchy (high)

### **Week 2:**
- Day 1-2: Color contrast audit (high)
- Day 3-4: CSS/JS minification (medium)
- Day 5: Breadcrumb navigation (medium)

### **Week 3-4:**
- Service worker implementation (medium)
- FAQ schema on service pages (medium)
- Final testing and optimization

---

## 📋 **DETAILED TASK BREAKDOWN**

### **Image Optimization (Critical)**
1. **Compress Images** (30-45 min)
   - Use Squoosh.app
   - Target: 60-70% reduction
   - Verify quality

2. **Convert to WebP** (30 min)
   - Use cwebp or Squoosh
   - Quality: 80-85
   - Test in browsers

3. **Convert to AVIF** (30 min)
   - Use Squoosh or sharp
   - Quality: 75-80
   - Test in browsers

4. **Update HTML** (30 min)
   - Add `<picture>` elements
   - Test fallbacks
   - Verify all images

---

### **Alt Text Improvements (Critical)**
1. **Service Page Heroes** (10 min)
   - Update 4 images
   - More descriptive text

2. **Service Cards** (5 min)
   - Update 4 images
   - Context-specific text

---

### **ARIA Labels (High)**
1. **Main Navigation** (15 min)
   - Add `aria-label="Main navigation"`
   - Add `role="menubar"`
   - Add `aria-current` for active items

2. **Hamburger Menu** (10 min)
   - Add `aria-label="Toggle navigation"`
   - Add `aria-expanded` attribute
   - Add `aria-hidden` to icons

3. **Testing** (5 min)
   - Test with screen reader
   - Verify functionality

---

## ✅ **SUCCESS METRICS**

### **Performance:**
- LCP: < 2.5s (currently 13.5s)
- FCP: < 1.8s (currently 2.6s)
- CLS: < 0.1 (should be good)
- TBT: < 200ms

### **Accessibility:**
- Score: 100 (currently ~85-90)
- WCAG AA compliance
- Screen reader compatible

### **SEO:**
- Score: 100 (currently ~90-95)
- All meta tags present
- Schema markup complete
- Mobile-friendly

### **Best Practices:**
- Score: 100 (currently ~90-95)
- No console errors
- Security headers
- Modern practices

---

**Status:** 📋 **READY FOR IMPLEMENTATION**


# What Needs To Be Done - Complete Action Plan

**Date:** 2025-12-31  
**Status:** 📋 **ACTION ITEMS SUMMARY**

---

## ✅ **COMPLETED (Just Finished)**

1. ✅ **Fixed Syntax Errors** - Removed duplicate `<main>` tags
2. ✅ **Removed .html from URLs** - All schema markup, canonical, OG tags use clean URLs
3. ✅ **Adjusted Padding** - Reduced excessive spacing throughout site (50% reduction)

---

## 🎯 **PENDING TASKS - Priority Order**

### **🔴 HIGH PRIORITY (Do First)**

#### **1. Improve Image Alt Text Descriptions** ⏱️ 15 minutes

**What:** Update 8 images with better, more descriptive alt text

**Why:** 
- Better accessibility for screen readers
- Better SEO for image search
- WCAG 2.1 compliance

**Files to Update:**
- `index.html` (4 service card images)
- `adhd.html` (1 hero image)
- `anxiety.html` (1 hero image)
- `depression.html` (1 hero image)
- `ptsd.html` (1 hero image)

**Changes Needed:**

**Homepage Service Cards:**
- `"ADHD Treatment"` → `"Professional ADHD evaluation and treatment services for adults"`
- `"Anxiety Treatment"` → `"Anxiety treatment and medication management services"`
- `"Depression Treatment"` → `"Compassionate depression treatment and mental health support"`
- `"PTSD Treatment"` → `"Trauma-informed PTSD treatment and psychiatric care"`

**Service Page Heroes:**
- `"Abstract image representing ADHD"` → `"Professional ADHD evaluation and treatment consultation at Allen Psychiatry"`
- `"Abstract image representing anxiety"` → `"Anxiety treatment and mental health support services at Allen Psychiatry"`
- `"Abstract image representing depression"` → `"Depression treatment and compassionate mental health care at Allen Psychiatry"`
- `"Abstract image representing ptsd"` → `"PTSD treatment and trauma-informed psychiatric care at Allen Psychiatry"`

**Impact:** ✅ Better accessibility, ✅ Better SEO, ✅ Professional appearance

---

#### **2. Compress Existing Images** ⏱️ 30-45 minutes

**What:** Reduce file sizes of large images by 60-70%

**Why:**
- Faster page loads
- Better mobile performance
- Improved Lighthouse scores
- Lower bandwidth usage

**Images to Compress:**
- `adhd2.jpg` (943KB → target: ~150KB)
- `index-hero.jpg` (465KB → target: ~120KB)
- `Provo Utah.jpg` (433KB → target: ~120KB)
- `Rural Sevier County Sunset.jpg` (409KB → target: ~110KB)
- `ptsd.jpg` (358KB → target: ~100KB)
- `Provo Office 1.jpg` (320KB → target: ~100KB)
- `Dr Todd Allen.jpg` (320KB → target: ~100KB)
- `anxiety2.jpg` (242KB → target: ~80KB)
- `depression.jpg` (208KB → target: ~70KB)

**How:**
1. Go to [Squoosh.app](https://squoosh.app)
2. Upload each image
3. Select **MozJPEG** format
4. Set quality to **75-80** (hero images) or **80-85** (service images)
5. Compare visually
6. Download optimized version
7. Replace original file

**Expected Results:**
- Total size: 4.5MB → ~1.5MB (67% reduction)
- Page load: 8-12s → 4-6s (3G)
- LCP: 5-8s → 3-4s

**Impact:** ✅ Much faster loading, ✅ Better user experience, ✅ Improved SEO

---

### **🟡 MEDIUM PRIORITY (Do After Compression)**

#### **3. Convert Images to WebP/AVIF Format** ⏱️ 1-2 hours

**What:** Create WebP and AVIF versions of all images with HTML fallbacks

**Why:**
- WebP: 25-35% smaller than JPG
- AVIF: 50% smaller than JPG
- Better quality at same file size
- Modern browser support

**How:**
1. Use [Squoosh.app](https://squoosh.app) or `cwebp` CLI
2. Convert each image to WebP (quality 80-85)
3. Convert each image to AVIF (quality 75-80)
4. Update HTML with `<picture>` elements

**Example HTML Update:**
```html
<!-- Before -->
<img src="assets/index-hero.jpg" alt="..." loading="eager" width="1920" height="1080" fetchpriority="high">

<!-- After -->
<picture>
  <source srcset="assets/index-hero.avif" type="image/avif">
  <source srcset="assets/index-hero.webp" type="image/webp">
  <img src="assets/index-hero.jpg" alt="..." loading="eager" width="1920" height="1080" fetchpriority="high">
</picture>
```

**Files to Update:**
- All HTML pages with images (9 files)
- ~15-20 images total

**Expected Results:**
- Additional 25-50% size reduction
- Total: ~1.5MB → ~0.8MB
- LCP: 3-4s → 2-3s

**Impact:** ✅ Even faster loading, ✅ Best modern format support, ✅ Maximum compression

---

#### **4. Update HTML with Picture Elements** ⏱️ 30 minutes

**What:** Replace all `<img>` tags with `<picture>` elements for modern format support

**Why:**
- Automatic format selection (browser picks best)
- Fallback to JPG for older browsers
- Maximum performance benefits

**Files to Update:**
- `index.html` (5 images)
- `adhd.html` (1 hero image)
- `anxiety.html` (1 hero image)
- `depression.html` (1 hero image)
- `ptsd.html` (1 hero image)
- `provo.html` (3 office photos)
- `about.html` (1 doctor photo)
- `rural.html` (1 hero image)
- `telehealth.html` (1 hero image)

**Impact:** ✅ Modern format support, ✅ Automatic optimization, ✅ Better performance

---

### **🟢 LOW PRIORITY (Optional - Future)**

#### **5. Responsive Images with srcset** ⏱️ 1 hour

**What:** Create multiple image sizes for different screen sizes

**Why:**
- Mobile users download smaller images
- Desktop users get high quality
- Better performance on all devices

**When:** After WebP/AVIF conversion is complete

---

## 📊 **SUMMARY BY PRIORITY**

### **Do Today (1-2 hours):**
1. ✅ Improve image alt text (15 min)
2. ✅ Compress existing images (30-45 min)

**Total Time:** ~1 hour  
**Impact:** ✅ Better accessibility, ✅ 67% smaller images, ✅ Much faster loading

---

### **Do This Week (2-3 hours):**
3. ✅ Convert to WebP/AVIF (1-2 hours)
4. ✅ Update HTML with picture elements (30 min)

**Total Time:** ~2-3 hours  
**Impact:** ✅ Additional 25-50% compression, ✅ Modern format support

---

### **Future (Optional):**
5. ✅ Responsive images with srcset (1 hour)

---

## 🎯 **QUICK START GUIDE**

### **Step 1: Fix Alt Text (15 minutes)**
I can do this automatically - just say "yes" and I'll update all 8 images.

### **Step 2: Compress Images (30-45 minutes)**
You'll need to do this manually:
1. Visit [squoosh.app](https://squoosh.app)
2. Upload and compress each large image
3. Replace original files

### **Step 3: Modern Formats (1-2 hours)**
After compression, we can:
1. Convert to WebP/AVIF
2. Update HTML with picture elements

---

## 📈 **EXPECTED RESULTS**

### **After Step 1 (Alt Text):**
- ✅ Better accessibility score
- ✅ Better SEO
- ✅ WCAG 2.1 compliant

### **After Step 2 (Compression):**
- ✅ 67% smaller images (4.5MB → 1.5MB)
- ✅ 50% faster page loads
- ✅ Better Lighthouse performance score

### **After Step 3 (WebP/AVIF):**
- ✅ Additional 25-50% compression (1.5MB → 0.8MB)
- ✅ 60-70% faster than original
- ✅ Best possible performance

---

## ✅ **RECOMMENDED ACTION PLAN**

**Today:**
1. ✅ I'll update alt text (automatic - 15 min)
2. ⏳ You compress images (manual - 30-45 min)

**This Week:**
3. ⏳ Convert to WebP/AVIF (1-2 hours)
4. ⏳ Update HTML with picture elements (30 min)

---

**Status:** 📋 **READY TO START**

Would you like me to:
1. **Update all alt text now?** (I can do this automatically)
2. **Create a script to help with image optimization?**
3. **Update HTML with picture elements** (after you create WebP/AVIF files)?


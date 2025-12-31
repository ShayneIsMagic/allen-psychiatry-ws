# Image Optimization Guide - High Quality & Fast Loading

**Date:** 2025-12-31  
**Status:** 📋 **OPTIMIZATION PLAN**

---

## 🔴 **CURRENT ISSUES**

### **Large File Sizes:**
- `adhd.jpg` / `adhd2.jpg`: **943KB each** ❌ (Target: < 150KB)
- `index-hero.jpg`: **465KB** ❌ (Target: < 200KB)
- `Provo Utah.jpg`: **433KB** ❌ (Target: < 200KB)
- `Rural Sevier County Sunset.jpg`: **409KB** ❌ (Target: < 200KB)
- `Provo Office 1.jpg`: **320KB** ❌ (Target: < 150KB)
- `Dr Todd Allen.jpg`: **320KB** ❌ (Target: < 150KB)
- `ptsd.jpg`: **358KB** ❌ (Target: < 150KB)
- `anxiety2.jpg`: **242KB** ❌ (Target: < 150KB)
- `depression.jpg`: **208KB** ⚠️ (Target: < 150KB)

**Total Current Size:** ~4.5MB  
**Target Total Size:** ~1.5MB  
**Potential Savings:** ~3MB (67% reduction)

---

## ✅ **CURRENT OPTIMIZATIONS (Already Implemented)**

1. ✅ **Width/Height Attributes** - Prevents layout shift
2. ✅ **Lazy Loading** - Below-fold images
3. ✅ **Fetch Priority** - Critical images prioritized
4. ✅ **Cache Headers** - Long-term caching for assets

---

## 🎯 **OPTIMIZATION STRATEGY**

### **Phase 1: Compression (Immediate - 30 minutes)**

**Tools:**
- **Online:** [Squoosh.app](https://squoosh.app) (Google's tool)
- **Online:** [TinyPNG](https://tinypng.com) (JPG/PNG)
- **Desktop:** [ImageOptim](https://imageoptim.com/mac) (Mac)
- **CLI:** `sharp-cli` or `imagemin`

**Target Compression:**
- Hero images: 70-80% quality (still looks great)
- Service images: 75-85% quality
- Logo: 90% quality (needs to be crisp)
- Office photos: 75-80% quality

**Expected Results:**
- `adhd2.jpg`: 943KB → ~150KB (84% reduction)
- `index-hero.jpg`: 465KB → ~120KB (74% reduction)
- `anxiety2.jpg`: 242KB → ~80KB (67% reduction)

---

### **Phase 2: Modern Formats (High Priority - 1 hour)**

**Convert to WebP/AVIF with Fallbacks:**

**Benefits:**
- WebP: 25-35% smaller than JPG
- AVIF: 50% smaller than JPG
- Better quality at same file size

**Implementation Pattern:**
```html
<picture>
  <source srcset="assets/index-hero.avif" type="image/avif">
  <source srcset="assets/index-hero.webp" type="image/webp">
  <img src="assets/index-hero.jpg" 
       alt="Family playing in their backyard" 
       class="hero-image" 
       loading="eager" 
       width="1920" 
       height="1080" 
       fetchpriority="high">
</picture>
```

**Conversion Tools:**
- **Squoosh.app** - Best quality, manual
- **cwebp** (CLI) - `cwebp -q 80 input.jpg -o output.webp`
- **sharp** (Node.js) - Automated batch conversion
- **Cloudflare Images** - Automatic optimization (if using Cloudflare)

---

### **Phase 3: Responsive Images (Medium Priority - 30 minutes)**

**Use `srcset` for Different Screen Sizes:**

```html
<picture>
  <source media="(max-width: 768px)" 
          srcset="assets/index-hero-mobile.avif 768w,
                  assets/index-hero-mobile.webp 768w"
          type="image/avif">
  <source media="(max-width: 768px)" 
          srcset="assets/index-hero-mobile.webp 768w"
          type="image/webp">
  <source srcset="assets/index-hero.avif" type="image/avif">
  <source srcset="assets/index-hero.webp" type="image/webp">
  <img src="assets/index-hero.jpg" 
       alt="Family playing in their backyard" 
       class="hero-image" 
       loading="eager" 
       width="1920" 
       height="1080" 
       fetchpriority="high">
</picture>
```

**Benefits:**
- Mobile users download smaller images
- Desktop users get high-quality images
- Faster page loads on mobile

---

## 📋 **STEP-BY-STEP OPTIMIZATION PROCESS**

### **Step 1: Compress Existing Images**

1. **Go to [Squoosh.app](https://squoosh.app)**
2. **Upload each large image:**
   - `adhd2.jpg` (943KB)
   - `index-hero.jpg` (465KB)
   - `anxiety2.jpg` (242KB)
   - `depression.jpg` (208KB)
   - `ptsd.jpg` (358KB)
   - `Provo Utah.jpg` (433KB)
   - `Rural Sevier County Sunset.jpg` (409KB)
   - Office photos (320KB, 248KB, 278KB)

3. **Settings for each:**
   - **Hero images:** MozJPEG, Quality 75-80
   - **Service images:** MozJPEG, Quality 80-85
   - **Office photos:** MozJPEG, Quality 75-80
   - **Logo:** PNG, Quality 90 (or keep as PNG)

4. **Download optimized versions**
5. **Replace original files**

**Expected Time:** 30 minutes  
**Expected Savings:** 60-70% file size reduction

---

### **Step 2: Convert to WebP**

1. **Use Squoosh.app or cwebp CLI:**
   ```bash
   # Install cwebp (Mac)
   brew install webp
   
   # Convert single image
   cwebp -q 80 adhd2.jpg -o adhd2.webp
   
   # Batch convert (all JPGs)
   for file in assets/*.jpg; do
     cwebp -q 80 "$file" -o "${file%.jpg}.webp"
   done
   ```

2. **Quality Settings:**
   - Hero: 80-85
   - Service images: 85-90
   - Office photos: 80-85

**Expected Time:** 15 minutes  
**Expected Savings:** Additional 25-35% reduction

---

### **Step 3: Convert to AVIF (Optional but Recommended)**

1. **Use Squoosh.app** (best quality)
2. **Or use sharp (Node.js):**
   ```javascript
   const sharp = require('sharp');
   
   sharp('assets/index-hero.jpg')
     .avif({ quality: 80 })
     .toFile('assets/index-hero.avif');
   ```

3. **Quality Settings:**
   - Hero: 75-80 (AVIF is more efficient)
   - Service images: 80-85
   - Office photos: 75-80

**Expected Time:** 20 minutes  
**Expected Savings:** Additional 20-30% reduction vs WebP

---

### **Step 4: Update HTML with Picture Elements**

**Replace all `<img>` tags with `<picture>` elements:**

**Before:**
```html
<img src="assets/adhd2.jpg" alt="ADHD Treatment" loading="lazy" width="330" height="220">
```

**After:**
```html
<picture>
  <source srcset="assets/adhd2.avif" type="image/avif">
  <source srcset="assets/adhd2.webp" type="image/webp">
  <img src="assets/adhd2.jpg" alt="ADHD Treatment" loading="lazy" width="330" height="220">
</picture>
```

**Files to Update:**
- `index.html` (5 images)
- `adhd.html` (hero image)
- `anxiety.html` (hero image)
- `depression.html` (hero image)
- `ptsd.html` (hero image)
- `provo.html` (office photos)
- `about.html` (doctor photo)
- `rural.html` (hero image)
- `telehealth.html` (hero image)

**Expected Time:** 30 minutes

---

## 🎯 **TARGET FILE SIZES**

| Image | Current | Target | Format |
|-------|---------|--------|--------|
| `index-hero.jpg` | 465KB | 120KB | AVIF/WebP |
| `adhd2.jpg` | 943KB | 150KB | AVIF/WebP |
| `anxiety2.jpg` | 242KB | 80KB | AVIF/WebP |
| `depression.jpg` | 208KB | 70KB | AVIF/WebP |
| `ptsd.jpg` | 358KB | 100KB | AVIF/WebP |
| `Provo Utah.jpg` | 433KB | 120KB | AVIF/WebP |
| `Rural Sevier County Sunset.jpg` | 409KB | 110KB | AVIF/WebP |
| Office photos | 320KB avg | 100KB avg | AVIF/WebP |

**Total:** ~4.5MB → ~1.0MB (78% reduction)

---

## 🚀 **QUICK START: Manual Optimization**

### **Option 1: Squoosh.app (Easiest)**

1. Visit [squoosh.app](https://squoosh.app)
2. Drag and drop each large image
3. Select format:
   - **AVIF** (best compression, modern browsers)
   - **WebP** (good compression, wider support)
4. Adjust quality slider (aim for 75-85)
5. Compare before/after visually
6. Download optimized version
7. Replace original file

**Time:** ~5 minutes per image

---

### **Option 2: Automated Script (Advanced)**

Create `optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = './assets';
const images = fs.readdirSync(assetsDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

images.forEach(async (file) => {
  const inputPath = path.join(assetsDir, file);
  const baseName = path.parse(file).name;
  
  // Create WebP
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(path.join(assetsDir, `${baseName}.webp`));
  
  // Create AVIF
  await sharp(inputPath)
    .avif({ quality: 75 })
    .toFile(path.join(assetsDir, `${baseName}.avif`));
  
  console.log(`✅ Optimized: ${file}`);
});
```

**Run:**
```bash
npm install sharp
node optimize-images.js
```

---

## 📊 **EXPECTED PERFORMANCE IMPROVEMENTS**

### **Before Optimization:**
- Total image size: ~4.5MB
- LCP (Largest Contentful Paint): ~5-8s
- Page load time: ~8-12s (3G)
- Lighthouse Performance: ~60-70

### **After Optimization:**
- Total image size: ~1.0MB (78% reduction)
- LCP: ~2-3s (60% improvement)
- Page load time: ~3-5s (3G) (60% improvement)
- Lighthouse Performance: ~85-95

---

## ✅ **IMPLEMENTATION CHECKLIST**

- [ ] Compress all JPG images (target: < 200KB each)
- [ ] Convert critical images to WebP
- [ ] Convert critical images to AVIF
- [ ] Update HTML with `<picture>` elements
- [ ] Test in multiple browsers
- [ ] Verify image quality is acceptable
- [ ] Check Lighthouse scores
- [ ] Monitor Core Web Vitals

---

## 🔧 **TOOLS & RESOURCES**

**Online Tools:**
- [Squoosh.app](https://squoosh.app) - Best quality, manual
- [TinyPNG](https://tinypng.com) - Quick JPG/PNG compression
- [Compressor.io](https://compressor.io) - Multiple formats

**CLI Tools:**
- `cwebp` - WebP conversion
- `sharp` - Node.js image processing
- `imagemin` - Batch optimization

**Browser Support:**
- **AVIF:** Chrome 85+, Firefox 93+, Safari 16+
- **WebP:** Chrome 23+, Firefox 65+, Safari 14+, Edge 18+
- **Fallback:** JPG/PNG (all browsers)

---

## 📝 **NOTES**

1. **Quality vs Size:** Always preview before/after to ensure quality is acceptable
2. **Logo:** Keep PNG format for logos (needs transparency/crisp edges)
3. **Hero Images:** Prioritize these first (biggest impact on LCP)
4. **Testing:** Test in multiple browsers to ensure fallbacks work
5. **Monitoring:** Use Lighthouse to verify improvements

---

**Status:** 📋 **READY FOR IMPLEMENTATION**


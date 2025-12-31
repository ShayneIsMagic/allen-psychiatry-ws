# Image Optimization Checklist

**Date Started:** 2025-12-31  
**Status:** 🚀 **IN PROGRESS**

---

## 📋 **IMAGES TO OPTIMIZE**

### **🔴 CRITICAL (Do First - Largest Impact)**

| Image | Current Size | Target Size | Quality | Priority |
|-------|-------------|-------------|---------|----------|
| `adhd2.jpg` | ~943KB | ~150KB | 80% | 🔴 CRITICAL |
| `index-hero.jpg` | ~465KB | ~120KB | 80% | 🔴 CRITICAL |
| `Provo Utah.jpg` | ~433KB | ~120KB | 80% | 🔴 CRITICAL |
| `Rural Sevier County Sunset.jpg` | ~409KB | ~110KB | 80% | 🔴 CRITICAL |
| `ptsd.jpg` | ~358KB | ~100KB | 80% | 🔴 CRITICAL |

### **🟡 HIGH PRIORITY**

| Image | Current Size | Target Size | Quality | Priority |
|-------|-------------|-------------|---------|----------|
| `Provo Office 1.jpg` | ~320KB | ~100KB | 80% | 🟡 HIGH |
| `Dr Todd Allen.jpg` | ~320KB | ~100KB | 80% | 🟡 HIGH |
| `todd-allen.jpg` | ~320KB | ~100KB | 80% | 🟡 HIGH |
| `anxiety2.jpg` | ~242KB | ~80KB | 85% | 🟡 HIGH |
| `depression.jpg` | ~208KB | ~70KB | 85% | 🟡 HIGH |
| `Provo Office 2.jpg` | ~248KB | ~80KB | 80% | 🟡 HIGH |
| `Provo Office 3.jpg` | ~278KB | ~90KB | 80% | 🟡 HIGH |

### **🟢 MEDIUM PRIORITY**

| Image | Current Size | Target Size | Quality | Priority |
|-------|-------------|-------------|---------|----------|
| `anxiety.jpg` | ~242KB | ~80KB | 85% | 🟢 MEDIUM |
| `telehealth snowy-winter-landscape.jpg` | ~358KB | ~100KB | 80% | 🟢 MEDIUM |
| `ap-new-color-logo.png` | ~191KB | ~50KB | PNG-8 or WebP | 🟢 MEDIUM |
| `AP_logo_color.png` | ~146KB | ~40KB | PNG-8 or WebP | 🟢 MEDIUM |

---

## ✅ **STEP-BY-STEP PROCESS**

### **Phase 1: Compress JPEG Images (30-45 minutes)**

#### **Step 1: Go to Squoosh.app**
- Visit: https://squoosh.app
- This is Google's free image compression tool
- No installation required, works in browser

#### **Step 2: Compress Each Image**

**For each image, follow these steps:**

1. **Click "Select an image"** or drag and drop
2. **Select format:** MozJPEG
3. **Set quality:**
   - Hero images: **80%**
   - Service images: **85%**
   - Office photos: **80%**
4. **Compare:** Use the slider to compare original vs compressed
5. **Verify:** Zoom to 100% and check for any visible degradation
6. **Download:** Click download button
7. **Replace:** Replace original file in `assets/` folder

**Quality Settings Guide:**
- **80% quality:** For large hero images (visually identical, 60-70% smaller)
- **85% quality:** For service cards, office photos (visually identical, 50-60% smaller)
- **If you see ANY degradation:** Increase to 85-90% and try again

#### **Step 3: Track Progress**

Mark each image as complete:
- [ ] `adhd2.jpg` - Compressed
- [ ] `index-hero.jpg` - Compressed
- [ ] `Provo Utah.jpg` - Compressed
- [ ] `Rural Sevier County Sunset.jpg` - Compressed
- [ ] `ptsd.jpg` - Compressed
- [ ] `Provo Office 1.jpg` - Compressed
- [ ] `Dr Todd Allen.jpg` - Compressed
- [ ] `todd-allen.jpg` - Compressed
- [ ] `anxiety2.jpg` - Compressed
- [ ] `depression.jpg` - Compressed
- [ ] `Provo Office 2.jpg` - Compressed
- [ ] `Provo Office 3.jpg` - Compressed
- [ ] `anxiety.jpg` - Compressed
- [ ] `telehealth snowy-winter-landscape.jpg` - Compressed

**Expected Result After Phase 1:**
- Total size: 4.5MB → ~1.5MB (67% reduction)
- LCP: 13.5s → 4-5s (significant improvement)

---

### **Phase 2: Convert to WebP Format (30 minutes)**

#### **Option A: Using Squoosh.app (Recommended)**

1. **For each compressed JPEG:**
   - Upload to Squoosh.app
   - Select format: **WebP**
   - Set quality: **80-85%** (same as JPEG compression)
   - Download WebP version
   - Save as `filename.webp` in `assets/` folder

#### **Option B: Using Command Line (If you have webp tools)**

```bash
# Install webp tools (Mac)
brew install webp

# Convert single image
cwebp -q 80 assets/index-hero.jpg -o assets/index-hero.webp

# Batch convert all JPGs
for file in assets/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

**Track Progress:**
- [ ] All images converted to WebP
- [ ] WebP files saved in `assets/` folder
- [ ] Verified file sizes are smaller

**Expected Result:**
- Additional 25-35% size reduction
- Total: ~1.5MB → ~1.0MB

---

### **Phase 3: Convert to AVIF Format (30 minutes)**

#### **Using Squoosh.app:**

1. **For each compressed JPEG:**
   - Upload to Squoosh.app
   - Select format: **AVIF**
   - Set quality: **75-80%** (AVIF is more efficient)
   - Download AVIF version
   - Save as `filename.avif` in `assets/` folder

**Track Progress:**
- [ ] All images converted to AVIF
- [ ] AVIF files saved in `assets/` folder
- [ ] Verified file sizes are smaller

**Expected Result:**
- Additional 50% size reduction
- Total: ~1.0MB → ~0.8MB

---

### **Phase 4: Update HTML with Picture Elements (30 minutes)**

**I will handle this after you complete Phases 1-3!**

Once you have:
- ✅ Compressed JPEG files
- ✅ WebP versions
- ✅ AVIF versions

I will update all HTML files to use `<picture>` elements with automatic format selection.

**Files to Update:**
- [ ] `index.html` (5 images)
- [ ] `adhd.html` (1 hero image)
- [ ] `anxiety.html` (1 hero image)
- [ ] `depression.html` (1 hero image)
- [ ] `ptsd.html` (1 hero image)
- [ ] `provo.html` (3 office photos)
- [ ] `rural.html` (1 hero image)
- [ ] `telehealth.html` (1 hero image)
- [ ] `about.html` (1 doctor photo)

---

## 📊 **PROGRESS TRACKING**

### **Phase 1: JPEG Compression**
- **Status:** ⏳ Not Started
- **Progress:** 0/14 images
- **Estimated Time Remaining:** 30-45 minutes

### **Phase 2: WebP Conversion**
- **Status:** ⏳ Waiting for Phase 1
- **Progress:** 0/14 images
- **Estimated Time Remaining:** 30 minutes

### **Phase 3: AVIF Conversion**
- **Status:** ⏳ Waiting for Phase 1
- **Progress:** 0/14 images
- **Estimated Time Remaining:** 30 minutes

### **Phase 4: HTML Updates**
- **Status:** ⏳ Waiting for Phases 1-3
- **Progress:** 0/9 files
- **Estimated Time Remaining:** 30 minutes (I'll do this)

---

## 🎯 **QUICK START GUIDE**

### **Right Now (5 minutes):**
1. Open https://squoosh.app in your browser
2. Start with `index-hero.jpg` (largest impact)
3. Upload, set to MozJPEG, 80% quality
4. Compare visually - should look identical
5. Download and replace original

### **Next 30-45 minutes:**
6. Continue with all other images
7. Use same process for each
8. Track progress in checklist above

### **After Compression:**
9. Let me know when Phase 1 is complete
10. I'll guide you through WebP/AVIF conversion
11. Then I'll update all HTML files automatically

---

## 💡 **TIPS FOR SUCCESS**

1. **Start with one image** - Test the process before batch processing
2. **Compare visually** - Always check side-by-side in Squoosh
3. **Keep originals** - Backup original files (just in case)
4. **Quality over speed** - Better to use 85% and be safe than 75% and risk quality
5. **Test on website** - After compression, view on actual site to verify

---

## ✅ **COMPLETION CRITERIA**

**Phase 1 Complete When:**
- ✅ All 14 JPEG images compressed
- ✅ File sizes reduced by 60-70%
- ✅ Visual quality verified (no degradation)
- ✅ Original files backed up

**Phase 2 Complete When:**
- ✅ All images have WebP versions
- ✅ WebP files in `assets/` folder
- ✅ File sizes verified smaller

**Phase 3 Complete When:**
- ✅ All images have AVIF versions
- ✅ AVIF files in `assets/` folder
- ✅ File sizes verified smaller

**Phase 4 Complete When:**
- ✅ All HTML files updated with `<picture>` elements
- ✅ Fallback to JPEG works
- ✅ Site tested and verified

---

## 🚀 **READY TO START?**

1. **Open Squoosh.app:** https://squoosh.app
2. **Start with:** `index-hero.jpg` (biggest impact)
3. **Follow the steps above**
4. **Let me know when Phase 1 is done!**

**I'll handle Phase 4 (HTML updates) automatically once you have the optimized images ready!** ✅


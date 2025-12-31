# Quick Start - Image Optimization

**Time:** 30-45 minutes for Phase 1 (compression)  
**Tool:** https://squoosh.app (free, no installation)

---

## 🚀 **START HERE (5 Minutes)**

### **Step 1: Open Squoosh.app**
👉 **https://squoosh.app**

### **Step 2: Compress Your First Image (index-hero.jpg)**

1. **Click "Select an image"** or drag `assets/index-hero.jpg` into the browser
2. **On the right side, select:** `MozJPEG`
3. **Set quality slider to:** `80`
4. **Compare:** Use the slider to see original (left) vs compressed (right)
5. **Zoom to 100%:** Click the zoom button to see actual size
6. **Verify:** Should look identical - no visible difference
7. **Download:** Click the download button
8. **Replace:** Replace `assets/index-hero.jpg` with the downloaded file

**Expected Result:**
- Original: 465KB
- Compressed: ~120KB (74% smaller)
- Visual: Identical ✅

---

## 📋 **PRIORITY ORDER (Do These First)**

### **Top 5 (Biggest Impact):**
1. ✅ `index-hero.jpg` (465KB → ~120KB) - **START HERE**
2. ✅ `adhd2.jpg` (943KB → ~150KB)
3. ✅ `Provo Utah.jpg` (433KB → ~120KB)
4. ✅ `Rural Sevier County Sunset.jpg` (409KB → ~110KB)
5. ✅ `ptsd.jpg` (358KB → ~100KB)

**After these 5, you'll have:**
- 60% of total image size optimized
- Massive LCP improvement
- Can test on live site

---

## ⚙️ **QUALITY SETTINGS**

### **For Each Image Type:**

**Hero Images (large, full-width):**
- Format: MozJPEG
- Quality: **80%**
- Examples: `index-hero.jpg`, `Provo Utah.jpg`, `Rural Sevier County Sunset.jpg`

**Service Card Images:**
- Format: MozJPEG
- Quality: **85%**
- Examples: `adhd2.jpg`, `anxiety2.jpg`, `depression.jpg`, `ptsd.jpg`

**Office Photos:**
- Format: MozJPEG
- Quality: **80%**
- Examples: `Provo Office 1.jpg`, `Provo Office 2.jpg`, `Provo Office 3.jpg`

**Doctor Photos:**
- Format: MozJPEG
- Quality: **80%**
- Examples: `Dr Todd Allen.jpg`, `todd-allen.jpg`

---

## ✅ **VISUAL QUALITY CHECK**

**Before downloading, verify:**
- [ ] Side-by-side comparison looks identical
- [ ] Zoomed to 100% - no blurriness
- [ ] Colors look the same
- [ ] Text (if any) is still readable
- [ ] No visible artifacts or banding

**If you see ANY degradation:**
- Increase quality to 85-90%
- Re-compress
- Compare again

---

## 📊 **TRACK YOUR PROGRESS**

Mark off as you complete:

**Critical (Do First):**
- [ ] `index-hero.jpg` - 465KB → ~120KB
- [ ] `adhd2.jpg` - 943KB → ~150KB
- [ ] `Provo Utah.jpg` - 433KB → ~120KB
- [ ] `Rural Sevier County Sunset.jpg` - 409KB → ~110KB
- [ ] `ptsd.jpg` - 358KB → ~100KB

**High Priority:**
- [ ] `Provo Office 1.jpg` - 320KB → ~100KB
- [ ] `Dr Todd Allen.jpg` - 320KB → ~100KB
- [ ] `todd-allen.jpg` - 320KB → ~100KB
- [ ] `anxiety2.jpg` - 242KB → ~80KB
- [ ] `depression.jpg` - 208KB → ~70KB
- [ ] `Provo Office 2.jpg` - 248KB → ~80KB
- [ ] `Provo Office 3.jpg` - 278KB → ~90KB

**Medium Priority:**
- [ ] `anxiety.jpg` - 242KB → ~80KB
- [ ] `telehealth snowy-winter-landscape.jpg` - 358KB → ~100KB

---

## 🎯 **AFTER COMPRESSION**

Once you've compressed all images:

1. **Test on local site:**
   - Run `npm start` (or your local server)
   - View pages with optimized images
   - Verify they look good

2. **Let me know:**
   - "Phase 1 complete - all images compressed"
   - I'll help with WebP/AVIF conversion (Phase 2-3)
   - Then I'll update HTML automatically (Phase 4)

---

## 💡 **PRO TIPS**

1. **Batch Process:** Do all hero images first, then service cards, then office photos
2. **Keep Originals:** Don't delete original files until you've verified the compressed versions work
3. **Test Early:** After compressing 3-5 images, test on the site to verify quality
4. **Take Breaks:** This is repetitive work - take breaks between batches

---

## 🚨 **TROUBLESHOOTING**

**Issue: Image looks blurry after compression**
- **Fix:** Increase quality to 85-90% and re-compress

**Issue: Colors look different**
- **Fix:** Make sure you're using MozJPEG (not other formats), increase quality slightly

**Issue: File size not reducing enough**
- **Fix:** This is normal - some images compress better than others. 60-70% reduction is excellent.

**Issue: Squoosh.app not loading**
- **Fix:** Try a different browser, or use TinyPNG.com as alternative

---

## ✅ **READY?**

1. **Open:** https://squoosh.app
2. **Start with:** `index-hero.jpg`
3. **Follow steps above**
4. **Let me know when done!**

**I'll handle the HTML updates automatically once you have the optimized images!** 🚀


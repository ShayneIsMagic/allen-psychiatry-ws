# Remaining Tasks to Fix

**Date:** 2025-12-30  
**Status:** 4 tasks remaining

## 🔴 High Priority

### 1. Color Scheme Standardization ⚠️ **NOT STARTED**
**Task:** Match all service pages to ADHD page format

**Rules:**
- **3 blue headings maximum per page:**
  1. Main page title (e.g., "Professional ADHD Care in Provo, Utah")
  2. "Important Note" sections
  3. "Treatment Success" or similar major section headings
- **All other headings and text should be tan color** (var(--secondary))

**Pages to Update:**
- ❌ Anxiety Treatment (`anxiety.html`)
- ❌ Depression Treatment (`depression.html`)
- ❌ PTSD Treatment (`ptsd.html`)
- ❌ Rural Services (`rural.html`)
- ❌ Telehealth Services (`telehealth.html`)

**Reference:** ADHD page (`adhd.html`) is the template

**Current Issue:** Other service pages likely have too many blue headings or wrong color scheme

---

## 🟡 Medium Priority

### 2. Reduce White Space Gaps ⚠️ **NOT STARTED**
**Location:** Service pages, especially Depression Treatment

**Specific Issue:**
- Too much padding between "What to Expect During Treatment" section and "Ready to Take the First Steps" CTA section
- Makes scheduling section require excessive scrolling

**Action Needed:**
- Reduce padding/margin on `.page-content` or between sections
- Target: Depression page specifically, but check all service pages

**Files to Modify:**
- `styles.css` - Adjust spacing
- `depression.html` - May need section-specific adjustments

---

### 3. Update Depression Page Image ⚠️ **NOT STARTED**
**Issue:** Current image (`assets/depression.jpg`) has white coloring that doesn't work well with page design

**Options:**
1. Find alternative image in assets folder
2. Adjust CSS to better display current image
3. Apply image filters/overlays to improve contrast

**Files to Check:**
- `depression.html` - Hero image reference
- `styles.css` - Image styling
- `assets/` folder - Available alternative images

**Available Images in Assets:**
- Check if there are other depression-related images
- May need to use a different image or apply CSS filters

---

### 4. Verify CTA Button Colors ⚠️ **NOT STARTED**
**Task:** Ensure all buttons follow alternating color scheme

**Rules:**
- **Blue button** (`.btn`) on tan/white backgrounds
- **Tan button** (`.btn-secondary`) on blue backgrounds

**Pages to Verify:**
- ✅ Homepage - Check button colors
- ✅ Provo Office - Check button colors
- ✅ Rural Services - Check button colors
- ✅ Telehealth Services - Check button colors
- ✅ About Us - Check button colors (should be tan on blue - already done)
- ✅ All service pages - Check CTA section buttons

**Action:** Review each page and ensure buttons use correct color class based on background

---

## ✅ Completed Tasks (For Reference)

1. ✅ SMS Policy link placement - All pages updated
2. ✅ Telehealth animation removal - Fixed
3. ✅ Patient portal pop-up close functionality - Fixed
4. ✅ CTA buttons added to Rural, Telehealth, and About pages
5. ✅ Image loading server improvements - Fixed

---

## 📋 Implementation Order

**Recommended Priority:**
1. **Color Scheme Standardization** (High - affects all service pages)
2. **Reduce White Space** (Medium - improves UX)
3. **Verify CTA Button Colors** (Medium - design consistency)
4. **Update Depression Image** (Medium - visual improvement)

---

## 🎯 Quick Wins

**Easiest to Fix First:**
1. Verify CTA Button Colors - Just need to review and adjust classes
2. Reduce White Space - Simple CSS adjustment
3. Color Scheme - More work but straightforward
4. Depression Image - May require finding/creating new image

---

**Next Steps:** Start with color scheme standardization as it affects the most pages and is high priority.


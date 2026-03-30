# Where to Find Title Tags - Verification Guide

**Date:** January 26, 2025  
**Status:** ✅ **TITLE TAGS ARE PRESENT IN ALL FILES**

---

## ✅ **VERIFICATION: TITLE TAGS ARE IN THE CODE**

All 10 HTML files have title tags. Here's where to find them:

---

## 📋 **TITLE TAGS IN EACH FILE**

### **1. Homepage (index.html)**
**Line 21:**
```html
<title>Psychiatrist Provo & Orem Utah | Allen Psychiatry</title>
```

### **2. ADHD Page (adhd.html)**
**Line 8:**
```html
<title>ADHD Testing & Treatment Provo Utah | Allen Psychiatry</title>
```

### **3. Depression Page (depression.html)**
**Line 8:**
```html
<title>Depression Treatment Provo Utah | Treatment-Resistant</title>
```

### **4. Anxiety Page (anxiety.html)**
**Line 8:**
```html
<title>Anxiety Treatment Provo Utah | Allen Psychiatry</title>
```

### **5. PTSD Page (ptsd.html)**
**Line 8:**
```html
<title>PTSD & Trauma Treatment Provo Utah | Allen Psychiatry</title>
```

### **6. Ketamine Page (ketamine-therapy.html)**
**Line 8:**
```html
<title>Ketamine Therapy Info Utah | Educational Resource</title>
```

### **7. Rural Services Page (rural.html)**
**Line 8:**
```html
<title>Rural Mental Health Utah | Telehealth Farming</title>
```

### **8. Telehealth Page (telehealth.html)**
**Line 8:**
```html
<title>Telehealth Psychiatry Utah | Online Mental Health</title>
```

### **9. Provo Offices Page (provo.html)**
**Line 8:**
```html
<title>Provo Psychiatry Office Locations | In-Person Care</title>
```

### **10. About Page (about.html)**
**Line 6:**
```html
<title>About Todd Allen DNP PMHNP-BC | Psychiatric NP</title>
```

---

## 🔍 **HOW TO VERIFY TITLE TAGS**

### **Method 1: View Page Source (Recommended)**

1. **Visit the live website:** https://allenpsychiatry.net
2. **Right-click** anywhere on the page
3. **Select "View Page Source"** (or press Ctrl+U / Cmd+U)
4. **Press Ctrl+F** (or Cmd+F) to search
5. **Search for:** `<title>`
6. **You should see:** The title tag in the `<head>` section

**Example for homepage:**
```html
<title>Psychiatrist Provo & Orem Utah | Allen Psychiatry</title>
```

---

### **Method 2: Check Browser Tab**

1. **Visit the live website:** https://allenpsychiatry.net
2. **Look at the browser tab** (top of browser window)
3. **You should see:** "Psychiatrist Provo & Orem Utah | Allen Psychiatry"

**Note:** If you see the old title, Cloudflare might still be deploying. Wait 1-2 minutes and refresh.

---

### **Method 3: Check Local Files**

1. **Open the HTML file** in your code editor
2. **Look in the `<head>` section** (usually lines 1-50)
3. **Find the `<title>` tag**

**Location:** Always in the `<head>` section, before `</head>`

---

### **Method 4: Use Developer Tools**

1. **Visit the live website:** https://allenpsychiatry.net
2. **Press F12** (or right-click → Inspect)
3. **Click the "Elements" tab**
4. **Expand the `<head>` section**
5. **Look for `<title>` tag**

---

## ⚠️ **IF YOU DON'T SEE TITLE TAGS**

### **Possible Reasons:**

1. **Cloudflare Deployment Not Complete**
   - **Solution:** Wait 1-2 minutes and refresh
   - **Check:** Visit https://allenpsychiatry.net and check browser tab

2. **Looking at Wrong Location**
   - **Solution:** Title tags are in the `<head>` section, not `<body>`
   - **Check:** Use "View Page Source" method above

3. **Browser Cache**
   - **Solution:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - **Or:** Clear browser cache

4. **Looking at Old Version**
   - **Solution:** Make sure you're looking at the latest commit
   - **Check:** `git log` to see latest commit

---

## ✅ **QUICK VERIFICATION COMMAND**

Run this in your terminal to see all title tags:

```bash
cd /Users/shayneroy/ShayneIsMagic:allen-psychiatry-ws/allen-psychiatry-ws
for file in index.html adhd.html depression.html anxiety.html ptsd.html ketamine-therapy.html rural.html telehealth.html provo.html about.html; do
  echo "=== $file ==="
  grep "<title>" "$file" | head -1
done
```

**Expected Output:**
```
=== index.html ===
    <title>Psychiatrist Provo & Orem Utah | Allen Psychiatry</title>
=== adhd.html ===
    <title>ADHD Testing & Treatment Provo Utah | Allen Psychiatry</title>
=== depression.html ===
    <title>Depression Treatment Provo Utah | Treatment-Resistant</title>
... (and so on)
```

---

## 📝 **WHERE ARE YOU LOOKING?**

**If you're looking in:**
- **GA4 Reports:** Title tags won't show there until Google re-indexes (24-48 hours)
- **Google Search Results:** Won't show new titles until Google re-indexes (24-72 hours)
- **Live Website:** Should show immediately after Cloudflare deploys (1-5 minutes)
- **Local Files:** Should show in the code right now

**Tell me where you're looking and I can help you find them!**

---

**Last Updated:** January 26, 2025








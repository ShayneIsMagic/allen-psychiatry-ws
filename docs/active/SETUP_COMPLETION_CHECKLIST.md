# ✅ Setup Completion Checklist
## Google Search Console & Analytics Integration

**Date:** January 22, 2025  
**Status:** 🟢 **IN PROGRESS** - Partially Complete

---

## ✅ **COMPLETED**

- [x] Google Search Console property added: `https://allenpsychiatry.net`
- [x] Ownership verified (DNS or HTML method)
- [x] Homepage indexed: `https://allenpsychiatry.net/`
- [x] Google Analytics 4 property active: `G-LKYXFGGJSP`
- [x] Event tracking implemented on all pages

---

## 🔄 **REMAINING TASKS**

### **1. Submit Sitemap** (2 minutes)
**Status:** ⚠️ **NEEDS ACTION**

**Steps:**
1. Go to: https://search.google.com/search-console
2. Click **"Sitemaps"** in left sidebar
3. In "Add a new sitemap" field, enter: `sitemap.xml`
4. Click **"Submit"**
5. Wait for status to show "Success"

**Your Sitemap URL:** `https://allenpsychiatry.net/sitemap.xml` (10 pages)

---

### **2. Request Indexing for Key Pages** (5 minutes)
**Status:** ⚠️ **NEEDS ACTION**

**Pages to Index:**
```
https://allenpsychiatry.net/adhd
https://allenpsychiatry.net/anxiety
https://allenpsychiatry.net/depression
https://allenpsychiatry.net/ptsd
https://allenpsychiatry.net/provo
https://allenpsychiatry.net/rural
https://allenpsychiatry.net/telehealth
https://allenpsychiatry.net/about
https://allenpsychiatry.net/ketamine-therapy
```

**Steps for Each:**
1. Go to: https://search.google.com/search-console/inspect
2. Paste URL in URL Inspection tool
3. Click **"Test Live URL"** (optional)
4. Click **"Request Indexing"**
5. Wait for confirmation
6. Move to next URL

**Note:** Homepage is already indexed ✅

---

### **3. Mark GA4 Conversions** (5 minutes)
**Status:** ⚠️ **NEEDS ACTION**

**Steps:**
1. Go to: https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/admin/events
2. Find these events and toggle **"Mark as conversion"**:
   - ✅ `schedule_appointment_click`
   - ✅ `phone_call_click`
   - ✅ `email_click`

**Verify:**
- Go to **Reports** → **Engagement** → **Conversions**
- You should see your conversion events listed

---

### **4. Link Search Console to Analytics** (2 minutes)
**Status:** ⚠️ **NEEDS ACTION**

**Steps:**
1. In Google Search Console:
   - Go to: https://search.google.com/search-console
   - Click **Settings** (gear icon, bottom left)
   - Click **"Google Analytics property"**
   - Select: `Allen Psychiatry (G-LKYXFGGJSP)`
   - Click **"Save"**

2. **Verify Connection:**
   - Go to Google Analytics 4
   - Navigate to **Admin** → **Property Settings**
   - Scroll to **"Search Console"** section
   - Verify connection is active

**Expected Result:** Search Console data will appear in GA4 reports (24-48 hours)

---

### **5. Enable Email Notifications** (2 minutes)
**Status:** ⚠️ **NEEDS ACTION**

**Steps:**
1. In Search Console: **Settings** → **Users and permissions**
2. Click on your email: `shayne@devpipeline.com`
3. Ensure **"Email notifications"** are enabled
4. Select notification types:
   - ✅ Security issues
   - ✅ Manual actions
   - ✅ Indexing issues
   - ✅ Performance issues

---

## 📊 **QUICK REFERENCE**

### **Your Links:**
- **Search Console:** https://search.google.com/search-console
- **URL Inspection:** https://search.google.com/search-console/inspect
- **Sitemaps:** https://search.google.com/search-console/sitemaps
- **Google Analytics:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/intelligenthome
- **GA4 Events:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/admin/events

### **Your Property:**
- **Domain:** `allenpsychiatry.net`
- **GA4 Property:** `Allen Psychiatry (G-LKYXFGGJSP)`
- **GA4 Property ID:** `492555456`
- **Sitemap:** `https://allenpsychiatry.net/sitemap.xml`

---

## ⏱️ **ESTIMATED TIME**

- Submit Sitemap: 2 minutes
- Request Indexing (9 pages): 5 minutes
- Mark Conversions: 5 minutes
- Link Services: 2 minutes
- Enable Notifications: 2 minutes

**Total:** ~15 minutes

---

## 🎯 **PRIORITY ORDER**

1. **First:** Submit Sitemap (easiest, biggest impact)
2. **Second:** Mark GA4 Conversions (tracking ROI)
3. **Third:** Request Indexing for pages (improve visibility)
4. **Fourth:** Link Search Console to Analytics (data integration)
5. **Fifth:** Enable Notifications (stay informed)

---

## ✅ **COMPLETION CHECKLIST**

- [ ] Sitemap submitted to Search Console
- [ ] 9 additional pages requested for indexing
- [ ] 3 GA4 events marked as conversions
- [ ] Search Console linked to Analytics
- [ ] Email notifications enabled

---

**Status:** 🟡 **5 TASKS REMAINING**  
**Time to Complete:** ~15 minutes  
**Next Action:** Submit sitemap.xml in Search Console


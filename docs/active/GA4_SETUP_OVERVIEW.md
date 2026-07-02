# 📊 Google Analytics 4 (GA4) Setup Overview
## Complete Configuration & Implementation

**Date:** January 22, 2025  
**Status:** ✅ **FULLY CONFIGURED & ACTIVE**

---

## 🎯 **GA4 PROPERTY INFORMATION**

### **Property Details:**
- **Property Name:** Allen Psychiatry
- **Measurement ID:** `G-LKYXFGGJSP`
- **Property ID:** `a357957755p492555456`
- **Account ID:** `a357957755`
- **Status:** ✅ Active and tracking

### **Quick Links:**
- **Dashboard:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/intelligenthome
- **Events:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/admin/events
- **Real-time:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/realtime

---

## 📋 **TRACKING CODE IMPLEMENTATION**

### **Homepage (index.html) - Optimized Loading:**
```html
<!-- Google Analytics 4 - Defer to Bottom -->
<script>
  // Defer GA loading
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LKYXFGGJSP', {
    'send_page_view': false
  });
  
  // Load GA script after page load
  window.addEventListener('load', function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LKYXFGGJSP';
    document.head.appendChild(script);
    
    script.onload = function() {
      gtag('event', 'page_view');
    };
  });
</script>
```

**Why This Approach:**
- ✅ Deferred loading for better page performance
- ✅ Loads after page content (non-blocking)
- ✅ Sends page_view event after script loads

---

### **Other Pages - Standard Implementation:**
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

**Pages Using Standard Implementation:**
- `about.html`
- `adhd.html`
- `anxiety.html`
- `depression.html`
- `ptsd.html`
- `ketamine-therapy.html`
- `provo.html`
- `rural.html`
- `telehealth.html`
- `404.html`

---

## 🎯 **EVENT TRACKING**

### **1. Schedule Appointment Clicks** ✅
**Event Name:** `schedule_appointment_click`  
**Status:** ✅ **100% Coverage** - All schedule buttons tracked

**Implementation:**
```javascript
onclick="gtag('event', 'schedule_appointment_click', {
    'event_category': 'Conversion',
    'event_label': 'Schedule Button - [Location]',
    'value': 1
});"
```

**Tracked Locations:**
- Header "Schedule Now" buttons (all pages)
- Hero section Schedule buttons
- CTA section Schedule buttons
- Inline text "schedule an appointment" links
- Footer Schedule Appointment links
- Modal "Continue to Scheduling" buttons
- Appointment Clarification Modal

**Current Data:**
- **Event Count:** 32 events
- **Total Users:** 10 users
- **Event Count per User:** 3.2

---

### **2. Phone Call Clicks** ✅
**Event Name:** `phone_call_click`  
**Status:** ✅ **100% Coverage** - All phone links tracked

**Implementation:**
```javascript
onclick="gtag('event', 'phone_call_click', {
    'event_category': 'Conversion',
    'event_label': 'Phone Call - [Location]',
    'value': 1
});"
```

**Tracked Locations:**
- Header phone number
- Inline text phone numbers
- Footer phone numbers
- CTA section phone numbers
- Modal phone links

**Current Data:**
- **Event Count:** 2 events
- **Total Users:** 2 users
- **Event Count per User:** 1.0

---

### **3. Email Clicks** ✅
**Event Name:** `email_click`  
**Status:** ✅ **100% Coverage** - All email links tracked

**Implementation:**
```javascript
onclick="gtag('event', 'email_click', {
    'event_category': 'Conversion',
    'event_label': 'Email - [Location]',
    'value': 1
});"
```

**Tracked Locations:**
- Footer email addresses
- Modal email links
- Inline text email links

**Current Data:**
- **Event Count:** 0 events (not clicked yet)
- **Status:** Will appear in GA4 when someone clicks an email

---

## 📊 **CONVERSION STATUS**

### **Current Status:**
- ⚠️ **Not Yet Marked as Conversions**
- **Action Needed:** Mark events as conversions in GA4 Admin

### **Events to Mark:**
1. ✅ `schedule_appointment_click` - Ready to mark
2. ✅ `phone_call_click` - Ready to mark
3. ⏳ `email_click` - Will appear when clicked

### **How to Mark:**
1. Go to: **Admin** → **Events** (in Property column)
2. Switch to **"All events"** tab (not "Key events")
3. Find each event and toggle **"Mark as conversion"** ON

---

## 🔧 **CONFIGURATION FILES**

### **config.js:**
```javascript
const ANALYTICS_CONFIG = {
    ga4: {
        measurementId: 'G-LKYXFGGJSP',
        enabled: true
    }
};
```

**Note:** Currently, GA4 ID is hardcoded in HTML files. The config.js has the ID for reference but isn't used yet.

---

## 📁 **FILES WITH GA4 TRACKING**

### **All Pages Include GA4:**
- ✅ `index.html` (optimized deferred loading)
- ✅ `about.html`
- ✅ `adhd.html`
- ✅ `anxiety.html`
- ✅ `depression.html`
- ✅ `ptsd.html`
- ✅ `ketamine-therapy.html`
- ✅ `provo.html`
- ✅ `rural.html`
- ✅ `telehealth.html`
- ✅ `404.html`

**Total:** 11 pages with GA4 tracking

---

## 🎯 **EVENT LABELS**

### **Schedule Appointment Labels:**
- `Schedule Button - Header`
- `Schedule Button - Homepage CTA`
- `Schedule Button - [Service]` (ADHD, Anxiety, Depression, etc.)
- `Schedule Button - Footer`
- `Schedule Link - Inline Text`
- `Schedule Button - Ketamine CTA`
- `Schedule Button - Appointment Clarification Modal`
- `Schedule Button - Rural Hero`
- `Schedule Button - Telehealth Hero`
- `Schedule Button - 404 Header`

### **Phone Call Labels:**
- `Phone Call - Header`
- `Phone Call - Inline Text`
- `Phone Call - Footer`
- `Phone Call - 404 Page`

### **Email Labels:**
- `Email - Footer`
- `Email - Footer Link`
- `Email - Footer Text`

---

## 🔒 **SECURITY & COMPLIANCE**

### **CSP Headers:**
✅ Content Security Policy allows:
- `www.googletagmanager.com`
- `www.google-analytics.com`

### **Cookies:**
- `_ga` - User identification (2 years)
- `_ga_G-LKYXFGGJSP` - Property-specific (2 years)
- `_gid` - Session tracking (24 hours)
- `_gat` - Request throttling (1 minute)

---

## 📈 **PERFORMANCE OPTIMIZATION**

### **Homepage (index.html):**
- ✅ Deferred loading (loads after page content)
- ✅ Non-blocking script loading
- ✅ Page view sent after script loads

### **Other Pages:**
- ✅ Async script loading
- ✅ Standard GA4 implementation

---

## ✅ **VERIFICATION CHECKLIST**

- [x] GA4 tracking code installed on all pages
- [x] Measurement ID correct: `G-LKYXFGGJSP`
- [x] Event tracking implemented for all conversions
- [x] 100% coverage of schedule buttons
- [x] 100% coverage of phone links
- [x] 100% coverage of email links
- [x] CSP headers allow Google domains
- [x] Tracking verified in browser console
- [ ] Events marked as conversions in GA4
- [ ] Conversion reports verified

---

## 🚀 **NEXT STEPS**

1. **Mark Events as Conversions:**
   - Go to Admin → Events → All events
   - Toggle "Mark as conversion" for:
     - `schedule_appointment_click`
     - `phone_call_click`
     - `email_click` (when it appears)

2. **Monitor Conversions:**
   - Check Reports → Engagement → Conversions
   - Track conversion rates
   - Measure ROI

3. **Set Up Custom Reports:**
   - Create reports for conversion tracking
   - Set up conversion goals
   - Monitor performance

---

## 📊 **CURRENT METRICS**

### **Schedule Appointment Clicks:**
- **Total Events:** 32
- **Unique Users:** 10
- **Avg per User:** 3.2

### **Phone Call Clicks:**
- **Total Events:** 2
- **Unique Users:** 2
- **Avg per User:** 1.0

### **Email Clicks:**
- **Total Events:** 0 (not clicked yet)

---

**Status:** ✅ **FULLY CONFIGURED**  
**Coverage:** 100% of all conversion actions  
**Next Action:** Mark events as conversions in GA4 Admin


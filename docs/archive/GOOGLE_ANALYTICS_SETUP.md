# Google Analytics 4 Setup - Complete

**Measurement ID:** `G-LKYXFGGJSP`  
**Status:** ✅ **IMPLEMENTED ON ALL PAGES**

## ✅ Implementation Status

### Pages with GA4 Tracking:
- ✅ `index.html` - Homepage
- ✅ `adhd.html` - ADHD Treatment page
- ✅ `anxiety.html` - Anxiety Treatment page
- ✅ `depression.html` - Depression Treatment page
- ✅ `ptsd.html` - PTSD Treatment page
- ✅ `provo.html` - Provo Office page
- ✅ `rural.html` - Rural Services page
- ✅ `telehealth.html` - Telehealth Services page
- ✅ `about.html` - About Us page

## 📊 What's Being Tracked

### Automatic Tracking:
- ✅ Page views (all pages)
- ✅ User sessions
- ✅ Traffic sources
- ✅ Device types (mobile/desktop/tablet)
- ✅ Geographic location
- ✅ Time on page
- ✅ Bounce rate

### Event Tracking (Currently Implemented):
- ✅ `schedule_appointment_click` - Homepage CTA button

## 🎯 Recommended Next Steps

### 1. Set Up Conversion Events in GA4

Go to: [Google Analytics Admin](https://analytics.google.com/analytics/web/#/a357957755p492555456/admin)

**Mark as Conversions:**
1. Navigate to: Admin → Events → Mark as conversion
2. Enable these events:
   - `schedule_appointment_click` ✅ (already tracked)
   - `phone_call_click` (needs to be added)
   - `patient_portal_access` (needs to be added)

### 2. Add Phone Call Tracking

Update phone number links to track calls:

```html
<a href="tel:+13855041334" 
   onclick="gtag('event', 'phone_call_click', {
     'event_category': 'Conversion',
     'event_label': 'Phone Call - Header',
     'value': 1
   });">
  (385) 504-1334
</a>
```

### 3. Add Patient Portal Tracking

Already partially implemented - add to all portal links:

```html
<a href="https://pp-wfe-100.advancedmd.com/154986/account/logon" 
   target="_blank"
   onclick="gtag('event', 'patient_portal_access', {
     'event_category': 'Engagement',
     'event_label': 'Portal Login - Header',
     'value': 1
   });">
  Patient Portal
</a>
```

### 4. Verify Tracking is Working

**Test in Real-Time Reports:**
1. Go to: [GA4 Real-Time](https://analytics.google.com/analytics/web/#/a357957755p492555456/realtime/overview)
2. Visit your website: http://localhost:3001/
3. You should see your visit appear within 30 seconds
4. Click "Schedule Appointment" button
5. Check if `schedule_appointment_click` event appears

## 📈 Expected Data Collection

**Once live:**
- Real-time visitor tracking
- Page view analytics
- User behavior flow
- Conversion tracking
- Traffic source analysis
- Geographic data (Utah County focus)

## ✅ Verification Checklist

- [x] GA4 code added to all 9 pages
- [x] Measurement ID correct: G-LKYXFGGJSP
- [x] Code placed in `<head>` section
- [x] Event tracking on homepage CTA
- [ ] Test in Real-Time reports (after deployment)
- [ ] Mark events as conversions in GA4
- [ ] Add phone call tracking
- [ ] Add portal access tracking

## 🔍 How to Verify

1. **Deploy to production** (or test on localhost)
2. **Open GA4 Real-Time reports**
3. **Visit your site** - should see activity immediately
4. **Click CTA buttons** - should see events fire
5. **Check Events tab** - verify events are being tracked

---

**Status:** ✅ GA4 tracking code is now on ALL pages. Data collection will begin as soon as the site is live and visitors access it.

**Reference:** [Google Analytics Dashboard](https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/intelligenthome)


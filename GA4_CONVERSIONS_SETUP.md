# GA4 Conversions Setup - Quick Guide

**Date:** 2025-12-31  
**Status:** 📋 **READY TO IMPLEMENT**

---

## 🎯 **OBJECTIVE**

Mark your existing GA4 events (`schedule_appointment_click` and `phone_call_click`) as conversions so they appear in conversion reports and can be used for optimization.

---

## ⏱️ **TIME REQUIRED**

**15 minutes** (just clicking buttons in GA4 dashboard)

---

## ✅ **STEP-BY-STEP INSTRUCTIONS**

### **Step 1: Access GA4 Admin**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Select your property: **Allen Psychiatry** (or the property name you set up)
4. Click **"Admin"** (gear icon) in the bottom left corner

### **Step 2: Navigate to Events**
1. In the **"Property"** column (middle column), click **"Events"**
2. You'll see a list of all events that have been tracked on your site

### **⚠️ IMPORTANT: Events Must Fire First!**

**GA4 only shows events in the Events list AFTER they've been triggered at least once.**

If you don't see `schedule_appointment_click` or `phone_call_click` in the list:
1. **Test the events first** - See `TEST_GA4_EVENTS.md` for instructions
2. **Use DebugView or Realtime** to verify events are firing
3. **Wait 24-48 hours** for events to appear in the Events list
4. **Then come back** to mark them as conversions

### **Step 3: Mark Events as Conversions** (After Events Appear)
1. **Find `schedule_appointment_click`** in the events list
2. **Toggle the "Mark as conversion" switch** to **ON** (it will turn blue)
3. **Find `phone_call_click`** in the events list
4. **Toggle the "Mark as conversion" switch** to **ON** (it will turn blue)

### **Step 4: Verify (After 24 Hours)**
1. Go to **"Reports"** → **"Engagement"** → **"Conversions"**
2. You should see data for these events (may take 24 hours to populate)

---

## 📊 **WHAT THIS DOES**

- **Conversion Tracking:** These events now appear in conversion reports
- **Better Analytics:** You can see conversion rates and optimize your CTAs
- **Google Ads Integration:** If you run ads later, you can optimize for these conversions
- **ROI Measurement:** Understand which CTAs are most effective

---

## ✅ **VERIFICATION**

After marking as conversions:
- ✅ Both events should show "Conversion" badge in Events list
- ✅ Events will appear in Conversions report (after 24 hours)
- ✅ You can create custom reports based on conversions

---

## 🎯 **NEXT STEPS**

Once this is done, we can:
1. Set up Google Search Console (30 min)
2. Optimize Google Business Profile (2 hours)
3. Tackle file cleanup (remove unused files, organize documentation)

---

**Status:** 📋 **READY - Just need you to click the toggles in GA4!**


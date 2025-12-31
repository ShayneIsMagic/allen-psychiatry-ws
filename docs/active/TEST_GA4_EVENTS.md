# Quick Test: Verify GA4 Events Are Working

**Time:** 2 minutes

---

## 🧪 **TEST STEPS**

### **Step 1: Open GA4 DebugView**
1. Go to: https://analytics.google.com/
2. Select your property: **Allen Psychiatry** (G-LKYXFGGJSP)
3. Click **"Admin"** (gear icon, bottom left)
4. Under **"Property"** column, click **"DebugView"**
5. Keep this tab open

### **Step 2: Open Your Website**
1. Open a new tab
2. Go to: https://allenpsychiatry.net
3. Open Developer Tools: Press `F12` (or `Cmd+Option+I` on Mac)
4. Go to **"Console"** tab

### **Step 3: Test Schedule Event**
1. Scroll down to find a **"Schedule Appointment"** button
2. Click it
3. **Check DebugView:** You should see `schedule_appointment_click` appear within 1-2 seconds

### **Step 4: Test Phone Event**
1. Click the phone number **"(385) 504-1334"** in the header
2. **Check DebugView:** You should see `phone_call_click` appear within 1-2 seconds

---

## ✅ **EXPECTED RESULTS**

**If events appear in DebugView:**
- ✅ Your tracking code is working correctly!
- ✅ Events will appear in the Events list after 24-48 hours
- ✅ You can mark them as conversions once they appear

**If events DON'T appear in DebugView:**
- ⚠️ There may be an issue with the tracking code
- Check browser console for JavaScript errors
- Verify GA4 property ID is correct (G-LKYXFGGJSP)

---

## 📊 **ALTERNATIVE: Use Realtime Report**

If DebugView doesn't work, try Realtime:

1. In GA4, go to **"Reports"** → **"Realtime"**
2. Click a schedule button or phone number on your site
3. Check the **"Events"** section in Realtime
4. Events should appear within 5-10 seconds

---

**Once you see events in DebugView or Realtime, your tracking is confirmed working!** ✅


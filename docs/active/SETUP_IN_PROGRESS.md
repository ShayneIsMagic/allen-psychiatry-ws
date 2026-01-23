# 🚀 SETUP IN PROGRESS - Follow These Steps

**Current Step:** Google Search Console Setup  
**Time Remaining:** ~25 minutes

---

## ✅ **WHAT'S ALREADY READY**

- ✅ Sitemap exists: `https://allenpsychiatry.net/sitemap.xml` (10 pages)
- ✅ Google Analytics installed: `G-LKYXFGGJSP`
- ✅ Events tracking: `schedule_appointment_click`, `phone_call_click`, `email_click`
- ✅ All pages have GA4 tracking code
- ✅ Website is live and accessible

---

## 📋 **STEP-BY-STEP SETUP**

### **STEP 1: Google Search Console - Add Property** (2 minutes)

1. **Go to:** https://search.google.com/search-console
2. **Click:** "Add Property" button (top left)
3. **Select:** "URL prefix" method (NOT "Domain")
4. **Enter:** `https://allenpsychiatry.net`
5. **Click:** "Continue"

---

### **STEP 2: Verify Ownership - DNS Method** (10 minutes)

**Option A: DNS Verification (RECOMMENDED)**

1. **Google will show you a TXT record** - Copy it!
   - Looks like: `google-site-verification=abc123xyz789...`
   - Copy the ENTIRE string

2. **Add to Cloudflare:**
   - Go to: https://dash.cloudflare.com/
   - Select domain: `allenpsychiatry.net`
   - Click **"DNS"** in left sidebar
   - Click **"Add record"** button
   - Configure:
     - **Type:** `TXT`
     - **Name:** `@` (or leave blank for root domain)
     - **Content:** Paste the verification code from Google
     - **TTL:** Auto (or 3600)
     - **Proxy status:** DNS only (gray cloud icon, NOT orange)
   - Click **"Save"**

3. **Wait 5-10 minutes** for DNS propagation
   - Check at: https://dnschecker.org/
   - Search for TXT records for `allenpsychiatry.net`

4. **Return to Search Console:**
   - Click **"Verify"** button
   - If successful, you'll see a success message!

**Option B: HTML File (If DNS doesn't work)**

1. In Search Console, select **"HTML file"** method
2. Download the HTML file (e.g., `google1234567890abcdef.html`)
3. Tell me and I'll add it to your GitHub repo
4. I'll commit and push it
5. Wait 1-2 minutes for Cloudflare Pages to deploy
6. Return to Search Console and click **"Verify"**

---

### **STEP 3: Submit Sitemap** (2 minutes)

1. Once verified, click **"Sitemaps"** in left sidebar
2. In the "Add a new sitemap" field, enter:
   ```
   sitemap.xml
   ```
3. Click **"Submit"**
4. Status will show "Success" (may take a few minutes to process)

---

### **STEP 4: Request Indexing for Key Pages** (5 minutes)

1. Click **"URL Inspection"** tool (top search bar, magnifying glass icon)
2. For each URL below, enter it and click **"Request Indexing"**:

**Pages to Index:**
```
https://allenpsychiatry.net/
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

**For Each URL:**
1. Paste URL in URL Inspection tool
2. Click **"Test Live URL"** (optional - checks if accessible)
3. Click **"Request Indexing"**
4. Wait for confirmation
5. Move to next URL

**Note:** Don't request indexing multiple times for the same URL. Google processes these over 24-48 hours.

---

### **STEP 5: Mark GA4 Conversions** (5 minutes)

**While Search Console is processing, do this in another tab:**

1. **Go to:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/admin/events

2. **Find these events** and toggle **"Mark as conversion"** for each:
   - ✅ `schedule_appointment_click`
   - ✅ `phone_call_click`
   - ✅ `email_click`

3. **Verify:**
   - Go to **Reports** → **Engagement** → **Conversions**
   - You should see your conversion events listed

---

### **STEP 6: Link Search Console to Analytics** (2 minutes)

1. **In Google Search Console:**
   - Click **Settings** (gear icon, bottom left)
   - Click **"Google Analytics property"**
   - Select: `Allen Psychiatry (G-LKYXFGGJSP)`
   - Click **"Save"**

2. **Verify Connection:**
   - Go to Google Analytics 4
   - Navigate to **Admin** → **Property Settings**
   - Scroll to **"Search Console"** section
   - Verify connection is active

**Expected Result:** Search Console data will appear in GA4 reports (may take 24-48 hours)

---

### **STEP 7: Enable Email Notifications** (2 minutes)

1. In Search Console: **Settings** → **Users and permissions**
2. Click on your email address
3. Ensure **"Email notifications"** are enabled
4. Select notification types:
   - ✅ Security issues
   - ✅ Manual actions
   - ✅ Indexing issues
   - ✅ Performance issues

---

## ✅ **COMPLETE CHECKLIST**

- [ ] Added property: `https://allenpsychiatry.net`
- [ ] Verified ownership (DNS or HTML file method)
- [ ] Submitted sitemap: `sitemap.xml`
- [ ] Requested indexing for 10 key pages
- [ ] Marked 3 GA4 events as conversions
- [ ] Linked Search Console to Analytics
- [ ] Enabled email notifications

---

## ⏱️ **TIMELINE**

- **Now:** Complete Steps 1-4 (20 minutes)
- **Next 5 min:** Mark GA4 conversions (Step 5)
- **Next 2 min:** Link services (Step 6)
- **Next 2 min:** Enable notifications (Step 7)
- **24-48 hours:** Data starts appearing in reports

---

## 🎯 **WHAT HAPPENS NEXT**

### **Immediate:**
- ✅ Property verified
- ✅ Sitemap submitted
- ✅ Indexing requests sent
- ✅ Conversions marked

### **24-48 Hours:**
- ✅ Pages start appearing in search results
- ✅ Search Console data begins populating
- ✅ Performance data available
- ✅ Coverage report shows indexed pages

### **1 Week:**
- ✅ Full indexing complete
- ✅ Search performance data available
- ✅ Query data showing what people search
- ✅ Click-through rates visible

---

## 🚨 **IF YOU GET STUCK**

### **Verification Fails:**
- **DNS Method:** Wait 10-15 minutes, check DNS propagation at dnschecker.org
- **HTML File:** Ensure file is in root directory, accessible via HTTPS
- **HTML Tag:** Ensure meta tag is in `<head>` section

### **Sitemap Not Processing:**
- Check sitemap is accessible: https://allenpsychiatry.net/sitemap.xml
- Wait 24-48 hours for processing
- Verify sitemap format is correct (XML)

### **Pages Not Indexing:**
- Check robots.txt (should allow Googlebot)
- Verify no "noindex" tags on pages
- Request indexing manually
- Check for crawl errors in Coverage report

---

## 📊 **KEY REPORTS TO CHECK LATER**

1. **Performance Report:** Which queries bring traffic
2. **Coverage Report:** Check for indexing errors
3. **Sitemaps Report:** Verify sitemap processing
4. **Mobile Usability:** Check for mobile issues

---

**Status:** 🚀 **READY TO PROCEED**  
**Next Action:** Start with Step 1 - Add Property in Search Console


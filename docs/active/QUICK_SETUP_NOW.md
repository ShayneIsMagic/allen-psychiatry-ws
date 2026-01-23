# 🚀 QUICK SETUP - DO THIS NOW
## Google Search Console & Analytics Conversions

**Status:** ⚡ **IN PROGRESS**  
**Time:** 30 minutes total

---

## ✅ **STEP 1: SIGN IN TO GOOGLE SEARCH CONSOLE** (You're doing this now)

1. Enter your password for `shayne@devpipeline.com`
2. Click "Next"
3. You'll be taken to Search Console dashboard

---

## ✅ **STEP 2: ADD PROPERTY** (After sign-in)

1. Click **"Add Property"** button (top left)
2. Select **"URL prefix"** method
3. Enter: `https://allenpsychiatry.net`
4. Click **"Continue"**

---

## ✅ **STEP 3: VERIFY OWNERSHIP** (Choose DNS method)

### **Option A: DNS Verification (RECOMMENDED - 10 minutes)**

1. **Copy the TXT record** Google shows you
   - Looks like: `google-site-verification=abc123xyz...`

2. **Add to Cloudflare:**
   - Go to: https://dash.cloudflare.com/
   - Select domain: `allenpsychiatry.net`
   - Click **"DNS"** → **"Add record"**
   - Type: `TXT`
   - Name: `@` (or leave blank)
   - Content: Paste the verification code
   - TTL: Auto
   - Proxy: DNS only (gray cloud)
   - Click **"Save"**

3. **Wait 5-10 minutes** for DNS propagation

4. **Return to Search Console** and click **"Verify"**

### **Option B: HTML File (If DNS doesn't work - 5 minutes)**

1. Download the HTML file from Google
2. I'll add it to your GitHub repo
3. Commit and push
4. Wait for Cloudflare Pages to deploy
5. Verify in Search Console

---

## ✅ **STEP 4: SUBMIT SITEMAP** (2 minutes)

1. Once verified, click **"Sitemaps"** in left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Status will show "Success" (may take a few minutes)

---

## ✅ **STEP 5: REQUEST INDEXING** (5 minutes)

1. Click **"URL Inspection"** tool (top search bar)
2. Enter each URL below and click **"Request Indexing"**:

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

---

## ✅ **STEP 6: MARK GA4 CONVERSIONS** (5 minutes)

**While Search Console is processing, do this:**

1. Go to: https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/admin/events
2. Find these events and toggle **"Mark as conversion"**:
   - ✅ `schedule_appointment_click`
   - ✅ `phone_call_click`
   - ✅ `email_click`

---

## ✅ **STEP 7: LINK SEARCH CONSOLE TO ANALYTICS** (2 minutes)

1. In Search Console: **Settings** → **Google Analytics property**
2. Select: `Allen Psychiatry (G-LKYXFGGJSP)`
3. Click **"Save"**

---

## 🎯 **QUICK CHECKLIST**

- [ ] Signed into Search Console
- [ ] Added property: `https://allenpsychiatry.net`
- [ ] Verified ownership (DNS or HTML file)
- [ ] Submitted sitemap: `sitemap.xml`
- [ ] Requested indexing for 10 key pages
- [ ] Marked 3 GA4 events as conversions
- [ ] Linked Search Console to Analytics

---

## ⏱️ **TIMELINE**

- **Now:** Sign in and add property (5 min)
- **Next 10 min:** Verify ownership (DNS method)
- **Next 5 min:** Submit sitemap and request indexing
- **Next 5 min:** Mark GA4 conversions
- **24-48 hours:** Data starts appearing

---

**Ready?** Sign in and I'll guide you through each step! 🚀


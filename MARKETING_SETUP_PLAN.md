# Marketing Setup Plan - Google Search Console, GA4 Conversions, Google Business Profile

**Date:** 2025-12-31  
**Status:** 📋 **PLANNED - READY TO IMPLEMENT**

---

## 🎯 **OVERVIEW**

Three high-priority marketing tasks to improve reach and conversion:
1. **Google Search Console** - Essential for SEO visibility
2. **Mark GA4 Events as Conversions** - Track conversions properly
3. **Optimize Google Business Profile** - Drive local traffic

**Total Time:** ~3-4 hours  
**Total Cost:** FREE  
**Expected ROI:** Very High

---

## 📋 **TASK 1: SET UP GOOGLE SEARCH CONSOLE**

### **Priority:** ⭐⭐⭐⭐⭐ (Highest)  
**Time:** 30 minutes  
**Cost:** FREE  
**Difficulty:** Easy

### **What It Does:**
- Shows which keywords bring traffic to your site
- Identifies search ranking opportunities
- Reports indexing issues
- Provides click-through rate data
- Shows mobile usability issues
- Essential for sitemap submission

### **Why You Need It:**
- **Complements GA4:** GA4 shows user behavior, GSC shows search performance
- **SEO Essential:** Can't optimize what you can't measure
- **Free Data:** Valuable insights at no cost
- **Required:** Needed for sitemap submission and indexing requests

### **Step-by-Step Instructions:**

#### **Step 1: Access Google Search Console**
1. Go to: https://search.google.com/search-console
2. Sign in with your Google account (use the same account as GA4 if possible)

#### **Step 2: Add Property**
1. Click "Add Property" button
2. Select "URL prefix" method
3. Enter: `https://allenpsychiatry.net`
4. Click "Continue"

#### **Step 3: Verify Ownership**
**Recommended Method: DNS Verification (Most Reliable)**

1. **Copy the TXT record** provided by Google
   - Example: `google-site-verification=abc123xyz...`

2. **Add DNS Record in Cloudflare:**
   - Log into Cloudflare dashboard
   - Go to your domain: `allenpsychiatry.net`
   - Click "DNS" → "Records"
   - Click "Add record"
   - Type: `TXT`
   - Name: `@` (or leave blank for root domain)
   - Content: Paste the verification code from Google
   - TTL: Auto
   - Click "Save"

3. **Wait 5-10 minutes** for DNS propagation

4. **Return to Google Search Console** and click "Verify"

**Alternative Method: HTML File Upload (If DNS doesn't work)**
1. Download the HTML verification file from Google
2. Upload to your site root (via Cloudflare Pages or GitHub)
3. Verify in Google Search Console

#### **Step 4: Submit Sitemap**
1. Once verified, go to "Sitemaps" in left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait 24-48 hours for Google to process

#### **Step 5: Request Indexing for Key Pages**
1. Go to "URL Inspection" tool
2. Enter each key page URL:
   - `https://allenpsychiatry.net/`
   - `https://allenpsychiatry.net/adhd`
   - `https://allenpsychiatry.net/anxiety`
   - `https://allenpsychiatry.net/depression`
   - `https://allenpsychiatry.net/ptsd`
   - `https://allenpsychiatry.net/provo`
   - `https://allenpsychiatry.net/rural`
   - `https://allenpsychiatry.net/telehealth`
   - `https://allenpsychiatry.net/about`
3. For each URL, click "Request Indexing"

### **What to Monitor:**
- **Performance:** See which searches bring traffic
- **Coverage:** Check for indexing errors
- **Enhancements:** Review structured data (schema markup)
- **Mobile Usability:** Check for mobile issues

### **Expected Results:**
- ✅ Site verified in Google Search Console
- ✅ Sitemap submitted
- ✅ Key pages requested for indexing
- ✅ Start seeing search performance data in 24-48 hours

---

## 📊 **TASK 2: MARK GA4 EVENTS AS CONVERSIONS**

### **Priority:** ⭐⭐⭐⭐⭐ (Highest)  
**Time:** 15 minutes  
**Cost:** FREE  
**Difficulty:** Very Easy

### **What It Does:**
- Marks tracked events as "conversions" in GA4
- Enables conversion reporting
- Shows conversion rates
- Identifies best-performing pages
- Measures marketing ROI

### **Why You Need It:**
- **Current Status:** Events are tracked but not marked as conversions
- **Missing Data:** Can't see conversion rates without this
- **Essential:** Need to measure what's working
- **Quick Win:** Takes 15 minutes, immediate value

### **Step-by-Step Instructions:**

#### **Step 1: Access Google Analytics 4**
1. Go to: https://analytics.google.com
2. Sign in with your Google account
3. Select your property: **Allen Psychiatry** (G-LKYXFGGJSP)

#### **Step 2: Navigate to Events**
1. Click "Admin" (gear icon) in bottom left
2. In "Property" column, click "Events"
3. You'll see a list of events

#### **Step 3: Mark Events as Conversions**
**Mark these events as conversions:**

1. **`schedule_appointment_click`**
   - Find in the events list
   - Toggle the switch in the "Mark as conversion" column
   - ✅ This tracks when users click "Schedule Appointment" buttons

2. **`phone_call_click`**
   - Find in the events list
   - Toggle the switch in the "Mark as conversion" column
   - ✅ This tracks when users click phone numbers

3. **`patient_portal_access`** (if tracked)
   - Find in the events list
   - Toggle the switch in the "Mark as conversion" column
   - ⚠️ Note: This may need to be added to your site first

#### **Step 4: Verify Conversions Are Working**
1. Go to "Reports" → "Engagement" → "Events"
2. Look for events with conversion icon (💰)
3. Check "Real-time" reports to see live conversions

#### **Step 5: Create Conversion Reports (Optional)**
1. Go to "Reports" → "Engagement" → "Conversions"
2. View conversion data by:
   - Page
   - Traffic source
   - Device type
   - Geographic location

### **What You'll See:**
- **Conversion Count:** How many conversions occurred
- **Conversion Rate:** Percentage of visitors who convert
- **By Page:** Which pages drive most conversions
- **By Source:** Which traffic sources convert best
- **Trends:** Conversion trends over time

### **Expected Results:**
- ✅ `schedule_appointment_click` marked as conversion
- ✅ `phone_call_click` marked as conversion
- ✅ Conversion data visible in GA4 reports
- ✅ Can measure conversion rates and ROI

---

## 🏢 **TASK 3: OPTIMIZE GOOGLE BUSINESS PROFILE**

### **Priority:** ⭐⭐⭐⭐⭐ (Highest)  
**Time:** 2 hours  
**Cost:** FREE  
**Difficulty:** Easy (but thorough)

### **What It Does:**
- Makes your business appear in Google Maps
- Shows in "Local Pack" (3-pack) results
- Enables customer reviews
- Displays business hours, photos, services
- Drives phone calls and directions

### **Why You Need It:**
- **Local SEO:** 76% of local searches result in a visit within 24 hours
- **Visibility:** Appears in "psychiatrist near me" searches
- **Trust:** Reviews build credibility
- **Traffic:** 30-50% of organic traffic from local search
- **Free:** No cost, high ROI

### **Step-by-Step Instructions:**

#### **Step 1: Claim/Verify Your Google Business Profile**
1. Go to: https://www.google.com/business
2. Sign in with Google account
3. Search for "Allen Psychiatry" or "3311 North University Ave, Provo, UT"
4. If profile exists:
   - Click "Claim this business"
   - Verify ownership (phone, email, or postcard)
5. If profile doesn't exist:
   - Click "Add your business"
   - Follow setup wizard

#### **Step 2: Complete Business Information (100%)**

**Basic Information:**
- ✅ **Business Name:** Allen Psychiatry
- ✅ **Category:** 
  - Primary: "Psychiatrist"
  - Secondary: "Mental Health Service", "Medical Clinic", "Counselor"
- ✅ **Address:** 3311 North University Ave, Suite 275, Provo, UT 84604
- ✅ **Phone:** (385) 504-1334
- ✅ **Website:** https://allenpsychiatry.net
- ✅ **Hours:** 
  - Monday, Wednesday - Friday: 10:00 AM - 6:00 PM
  - Tuesday: 11:00 AM - 6:00 PM
  - Sunday: Closed

**Attributes:**
- ✅ "Online appointments"
- ✅ "Wheelchair accessible entrance"
- ✅ "Accepts new patients"
- ✅ "Telehealth available"
- ✅ "Appointment required"

#### **Step 3: Add Services**
Add all services with descriptions:

1. **ADHD Testing & Treatment**
   - Description: "Comprehensive ADHD evaluation and treatment for adults and adolescents"

2. **Anxiety Treatment**
   - Description: "Evidence-based anxiety treatment including medication management"

3. **Depression Treatment**
   - Description: "Personalized depression treatment and medication management"

4. **PTSD Treatment**
   - Description: "Specialized PTSD treatment and trauma-informed care"

5. **Telehealth Services**
   - Description: "Secure telehealth psychiatric services for rural communities"

#### **Step 4: Add Photos (20+ Photos)**
**Required Photos:**
- ✅ Office exterior (2-3 photos)
- ✅ Office interior (5-10 photos)
  - Reception area
  - Waiting room
  - Consultation rooms
  - Hallways
- ✅ Staff photos (1-2 professional photos)
- ✅ Logo (1-2 versions)
- ✅ Service-related photos (3-5 photos)

**Photo Tips:**
- High quality (at least 720px wide)
- Well-lit
- Professional appearance
- Show welcoming, comfortable environment

#### **Step 5: Create First Google Post**
1. In Google Business Profile, click "Posts"
2. Create a post:
   - **Type:** "What's new" or "Offer"
   - **Title:** "Welcome to Allen Psychiatry"
   - **Content:** 
     ```
     Expert psychiatric care in Provo, Utah County, and rural communities. 
     We specialize in ADHD, anxiety, depression, and PTSD treatment.
     Accepting new patients. Telehealth available.
     Schedule your appointment today: (385) 504-1334
     ```
   - **Add photo:** Use office photo or logo
   - **Button:** "Book" → Link to scheduling page
3. Publish

#### **Step 6: Set Up Review Request System**
**Option A: Email Template (FREE)**
1. Create email template:
   - Subject: "How was your visit to Allen Psychiatry?"
   - Include Google Review link
   - Send 7 days after appointment
2. Get Google Review link:
   - In Google Business Profile, click "Get more reviews"
   - Copy the short link

**Option B: QR Code in Office (FREE)**
1. Create QR code: https://www.qr-code-generator.com
2. Link to Google Review page
3. Print and display at checkout desk
4. Sign: "Scan to share your experience"

#### **Step 7: Respond to Reviews**
- **Goal:** Respond to ALL reviews within 24-48 hours
- **Tone:** Professional, grateful, helpful
- **Template:**
  ```
  Thank you for taking the time to share your experience, [Name]. 
  We're so glad [specific positive feedback]. 
  We appreciate your trust in Allen Psychiatry.
  ```

### **Ongoing Maintenance:**
- **Weekly:** Post updates (mental health tips, office news)
- **Daily:** Check and respond to reviews
- **Monthly:** Update photos, services, hours if needed
- **Quarterly:** Review and optimize profile

### **What to Monitor:**
- **Views:** How many people see your profile
- **Searches:** What searches bring people to your profile
- **Actions:** Phone calls, website clicks, directions
- **Reviews:** New reviews and ratings

### **Expected Results:**
- ✅ Complete Google Business Profile (100%)
- ✅ Appear in Local 3-Pack for relevant searches
- ✅ 5-10 reviews in first month
- ✅ Increased phone calls and appointments
- ✅ Better local search visibility

---

## 📅 **IMPLEMENTATION TIMELINE**

### **Today (2-3 hours):**
1. ✅ **Google Search Console** (30 min)
2. ✅ **Mark GA4 Conversions** (15 min)
3. ✅ **Google Business Profile** (2 hours)

### **This Week:**
4. Monitor GSC for indexing status
5. Check GA4 for conversion data
6. Create first Google Business Post
7. Set up review request system

### **This Month:**
8. Respond to all reviews
9. Post weekly on Google Business Profile
10. Review performance data
11. Optimize based on insights

---

## ✅ **SUCCESS METRICS**

### **Google Search Console:**
- ✅ Site verified
- ✅ Sitemap submitted
- ✅ Key pages indexed
- ✅ Search performance data visible

### **GA4 Conversions:**
- ✅ Events marked as conversions
- ✅ Conversion data in reports
- ✅ Conversion rates visible
- ✅ Can measure ROI

### **Google Business Profile:**
- ✅ Profile 100% complete
- ✅ 20+ photos uploaded
- ✅ First post published
- ✅ Review request system active
- ✅ Appearing in local search results

---

## 🎯 **EXPECTED RESULTS (After 1 Month)**

### **Traffic:**
- 30-50% increase in local search traffic
- Better visibility in "psychiatrist near me" searches
- More phone calls from Google Business Profile

### **Conversions:**
- Clear conversion data in GA4
- Know which pages convert best
- Measure marketing ROI

### **Reviews:**
- 5-10 Google reviews
- Better local rankings
- Increased trust and credibility

---

## 📝 **CHECKLIST**

### **Google Search Console:**
- [ ] Sign in to Google Search Console
- [ ] Add property: `https://allenpsychiatry.net`
- [ ] Verify ownership (DNS method)
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Request indexing for key pages (9 pages)
- [ ] Check indexing status after 24-48 hours

### **GA4 Conversions:**
- [ ] Access GA4 dashboard
- [ ] Go to Admin → Events
- [ ] Mark `schedule_appointment_click` as conversion
- [ ] Mark `phone_call_click` as conversion
- [ ] Verify conversions in reports
- [ ] Check Real-time reports

### **Google Business Profile:**
- [ ] Claim/verify business profile
- [ ] Complete business information (100%)
- [ ] Add categories (Psychiatrist, Mental Health Service)
- [ ] Add business hours
- [ ] Add all services with descriptions
- [ ] Upload 20+ photos
- [ ] Create first Google Post
- [ ] Get Google Review link
- [ ] Set up review request system (email + QR code)
- [ ] Respond to any existing reviews

---

## 🚀 **NEXT STEPS AFTER COMPLETION**

1. **Monitor Performance:**
   - Check GSC weekly for search performance
   - Review GA4 conversions weekly
   - Monitor Google Business Profile insights

2. **Optimize:**
   - Update content based on search queries
   - Optimize low-converting pages
   - Post regularly on Google Business Profile

3. **Expand:**
   - Consider additional marketing tools (see MARKETING_ANALYTICS_TOOLS_GUIDE.md)
   - Set up email marketing
   - Consider paid advertising (if needed)

---

## 💡 **TIPS & BEST PRACTICES**

### **Google Search Console:**
- Check weekly for new search queries
- Fix any indexing errors immediately
- Request indexing for new/updated pages
- Monitor mobile usability

### **GA4 Conversions:**
- Review conversion data weekly
- Compare conversion rates by page
- Identify optimization opportunities
- Track trends over time

### **Google Business Profile:**
- Post weekly (mental health tips, updates)
- Respond to ALL reviews (positive and negative)
- Keep photos updated
- Keep hours and services current
- Use attributes to highlight key features

---

**Status:** 📋 **READY TO IMPLEMENT**  
**Total Time:** ~3-4 hours  
**Total Cost:** FREE  
**Expected ROI:** Very High ✅


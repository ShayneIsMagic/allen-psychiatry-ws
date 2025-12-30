# Critical Fixes Needed - Based on Test Report

**Date:** 2025-12-30  
**Priority:** High - Fix before launch

---

## 🔴 **CRITICAL FIXES (Do Before Launch)**

### 1. Add Click-to-Call to All Header Phone Numbers

**Issue:** Phone numbers in headers are not clickable on mobile  
**Impact:** Medium - Reduces mobile conversions  
**Files to Fix:**
- about.html (line 30)
- provo.html
- rural.html
- telehealth.html
- adhd.html
- anxiety.html
- depression.html
- ptsd.html

**Fix:**
```html
<!-- Change from: -->
<div>(385) 504-1334</div>

<!-- To: -->
<div><a href="tel:+13855041334" style="color: inherit; text-decoration: none;">(385) 504-1334</a></div>
```

---

### 2. Add Event Tracking to All CTA Buttons

**Issue:** Only homepage tracks conversions  
**Impact:** High - Missing data from service pages  
**Files to Fix:**
- adhd.html - "Schedule an Appointment" button
- anxiety.html - "Schedule an Appointment" button
- depression.html - "Schedule an Appointment" button
- ptsd.html - "Schedule an Appointment" button
- about.html - "Schedule Appointment" button
- provo.html - Any CTA buttons
- rural.html - "Schedule Appointment" button
- telehealth.html - "Schedule Appointment" button

**Fix:**
```html
<!-- Add to all Schedule Appointment buttons: -->
<a href="https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients" 
   class="btn" 
   target="_blank"
   onclick="gtag('event', 'schedule_appointment_click', {
     'event_category': 'Conversion',
     'event_label': 'Schedule Button - [PAGE NAME]',
     'value': 1
   });">
  Schedule an Appointment
</a>
```

---

## 🟡 **IMPORTANT FIXES (Do This Week)**

### 3. Add "For Healthcare Providers" Section to About Page

**Issue:** Goal 4 (Generate Referrals) not addressed  
**Impact:** Medium - Missing referral generation  
**Location:** about.html - Add new section

**Content to Add:**
```html
<section class="healthcare-providers">
  <h2>For Healthcare Providers & Community Organizations</h2>
  <p>Allen Psychiatry welcomes referrals from primary care physicians, therapists, counselors, and community organizations throughout Utah County and rural Utah.</p>
  <h3>Why Refer to Allen Psychiatry?</h3>
  <ul>
    <li>Board-certified psychiatric care</li>
    <li>Same-week appointments available</li>
    <li>Comprehensive evaluation and treatment</li>
    <li>Telehealth options for rural patients</li>
    <li>Collaborative care approach</li>
  </ul>
  <h3>Referral Process</h3>
  <p>To refer a patient, please call our office at <a href="tel:+13855041334">(385) 504-1334</a> or have your patient schedule directly through our online portal.</p>
</section>
```

---

### 4. Add FAQ Sections with Schema to Service Pages

**Issue:** Missing FAQ schema for featured snippets  
**Impact:** Medium - Missing SEO opportunity  
**Files to Fix:**
- adhd.html
- anxiety.html
- depression.html
- ptsd.html

**Example for ADHD Page:**
```html
<section class="faq-section">
  <h2>Frequently Asked Questions About ADHD Treatment</h2>
  
  <div class="faq-item">
    <h3>How long does an ADHD evaluation take?</h3>
    <p>A comprehensive ADHD evaluation typically takes 60-90 minutes for the initial appointment...</p>
  </div>
  
  <!-- Add 4-5 more FAQs -->
</section>

<!-- Add FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does an ADHD evaluation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive ADHD evaluation typically takes 60-90 minutes..."
      }
    }
  ]
}
</script>
```

---

## 🟢 **NICE TO HAVE (This Month)**

### 5. Add Educational Content / Resources Page

**Issue:** Thought leadership goal not fully addressed  
**Impact:** Low - Can be added later  
**Action:** Create blog section or resources page

### 6. Add Phone Call Event Tracking

**Issue:** Can't track phone calls from website  
**Impact:** Low - Analytics enhancement  
**Action:** Add onclick tracking to all phone links

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

---

## ✅ **VERIFICATION CHECKLIST**

After fixes:
- [ ] All header phone numbers are clickable
- [ ] All CTA buttons have event tracking
- [ ] About page has referral section
- [ ] Service pages have FAQ sections
- [ ] Test click-to-call on mobile device
- [ ] Verify events fire in GA4 Real-Time

---

**Priority:** Fix items 1 & 2 before launch. Items 3 & 4 can be done this week.


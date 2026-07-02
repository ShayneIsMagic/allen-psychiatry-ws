# 🔒 Secure Configuration Guide
## Environment Variables & Sensitive Data Management

**Date:** January 22, 2025  
**Status:** ✅ **CONFIGURED**

---

## 📋 **OVERVIEW**

All sensitive configuration data is stored in `.env` files that are **gitignored** and will **never be committed** to the repository.

---

## 🔐 **SECURE FILES**

### **`.env`** (Gitignored - Secure)
- Contains actual values and sensitive data
- **NEVER** committed to git
- Used for local development and deployment
- Contains API keys, verification codes, and sensitive URLs

### **`.env.example`** (Committed - Template)
- Template file with placeholder values
- Safe to commit to git
- Used as a reference for team members
- Shows what variables are needed

---

## 📁 **FILE STRUCTURE**

```
allen-psychiatry-ws/
├── .env                    # ⚠️ SECURE - Gitignored
├── .env.example            # ✅ Template - Committed
├── config.js               # Public configuration (non-sensitive)
└── .gitignore             # Ensures .env is never committed
```

---

## 🔑 **CONFIGURATION VARIABLES**

### **Google Analytics 4 (GA4)**
```env
GA4_MEASUREMENT_ID=G-LKYXFGGJSP
GA4_PROPERTY_ID=a357957755p492555456
GA4_ACCOUNT_ID=a357957755
GA4_ENABLED=true
```

### **Google Search Console**
```env
GSC_PROPERTY_URL=https://allenpsychiatry.net
GSC_VERIFICATION_CODE=
GSC_VERIFIED=true
GSC_RESOURCE_ID=sc-domain:allenpsychiatry.net
```

### **Website Configuration**
```env
SITE_URL=https://allenpsychiatry.net
SITE_DOMAIN=allenpsychiatry.net
SITE_NAME=Allen Psychiatry
```

### **Contact Information**
```env
CONTACT_PHONE=(385) 504-1334
CONTACT_EMAIL=info@allenpsychiatry.net
CONTACT_ADDRESS=3311 North University Ave, Ste 275, Provo, UT 84604
```

### **Patient Portal & Scheduling**
```env
PATIENT_PORTAL_URL=https://pp-wfe-100.advancedmd.com/154986/account/logon
SCHEDULING_URL=https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients
ADVANCEDMD_ACCOUNT_ID=154986
```

### **Quick Access Links**
```env
GA4_DASHBOARD_URL=https://analytics.google.com/analytics/web/...
GA4_EVENTS_URL=https://analytics.google.com/analytics/web/.../admin/events
GSC_DASHBOARD_URL=https://search.google.com/search-console
GSC_INSPECT_URL=https://search.google.com/search-console/inspect
GSC_SITEMAPS_URL=https://search.google.com/search-console/sitemaps
```

---

## 🚀 **USAGE**

### **For Static Site (Current Setup)**
The `.env` file is primarily for:
- **Reference:** Quick access to configuration values
- **Documentation:** Centralized location for all config
- **Future Use:** If we add build scripts or server-side code

### **For Build Scripts**
If you create build scripts, you can load environment variables:
```javascript
// Example: scripts/build.js
require('dotenv').config();
const ga4Id = process.env.GA4_MEASUREMENT_ID;
```

### **For Cloudflare Pages**
Cloudflare Pages supports environment variables:
1. Go to Cloudflare Dashboard → Pages → Your Site → Settings
2. Add environment variables in the "Environment Variables" section
3. Variables are available at build time

---

## ✅ **SECURITY CHECKLIST**

- [x] `.env` is in `.gitignore`
- [x] `.env.example` is committed (template only)
- [x] No sensitive data in committed files
- [x] API keys stored in `.env` only
- [x] Verification codes in `.env` only
- [x] All sensitive URLs in `.env`

---

## 📝 **BEST PRACTICES**

### **DO:**
✅ Keep `.env` file local only  
✅ Update `.env.example` when adding new variables  
✅ Use `.env.example` as a template for new team members  
✅ Store all sensitive data in `.env`  
✅ Document new variables in this guide  

### **DON'T:**
❌ Commit `.env` to git  
❌ Share `.env` file via email or chat  
❌ Store `.env` in public repositories  
❌ Hardcode sensitive values in code  
❌ Commit API keys or secrets  

---

## 🔄 **UPDATING CONFIGURATION**

### **Adding New Variables:**
1. Add to `.env` with actual value
2. Add to `.env.example` with placeholder
3. Update `config.js` if needed
4. Document in this guide

### **Example:**
```env
# .env (actual value)
NEW_API_KEY=sk_live_abc123xyz789

# .env.example (placeholder)
NEW_API_KEY=your_api_key_here
```

---

## 🛠️ **CURRENT CONFIGURATION STATUS**

### **✅ Configured:**
- Google Analytics 4 (GA4) - Measurement ID
- Google Search Console - Property URL
- Website URLs and domain
- Contact information
- Patient portal URLs
- Quick access links

### **⚠️ Needs Configuration:**
- Google Business Profile ID (when set up)
- Cloudflare API tokens (if needed for automation)
- Future API keys (as services are added)

---

## 📞 **QUICK REFERENCE**

### **Access Your Configuration:**
- **Local:** Open `.env` file in project root
- **Template:** See `.env.example` for structure
- **Public Config:** See `config.js` for non-sensitive config

### **Important Links:**
- **GA4 Dashboard:** See `GA4_DASHBOARD_URL` in `.env`
- **Search Console:** See `GSC_DASHBOARD_URL` in `.env`
- **Sitemap:** `https://allenpsychiatry.net/sitemap.xml`

---

## 🔒 **SECURITY NOTES**

1. **`.env` is gitignored** - Verified in `.gitignore`
2. **Never commit sensitive data** - All sensitive values in `.env` only
3. **Template is safe** - `.env.example` has no real values
4. **Rotate keys regularly** - Update API keys periodically
5. **Limit access** - Only share `.env` with trusted team members

---

**Status:** ✅ **SECURE CONFIGURATION ACTIVE**  
**Last Updated:** January 22, 2025  
**Next Review:** When adding new services or API keys


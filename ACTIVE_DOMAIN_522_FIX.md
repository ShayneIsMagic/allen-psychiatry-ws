# Active Domain 522 Error Fix

**Date:** 2025-12-31  
**Status:** ✅ Custom domain is Active, ⚠️ Still getting 522 error  
**Deployment URL:** `https://allen-psychiatry-ws.pages.dev` ✅ **WORKS**

---

## ✅ **CUSTOM DOMAIN IS ACTIVE**

Since `allenpsychiatry.net` shows "Active" in Pages:
- ✅ Custom domain is connected
- ✅ Routing is configured
- ⚠️ **But still getting 522 error**

This usually means SSL or DNS needs a bit more time.

---

## 🔧 **VERIFY THESE SETTINGS**

### **Step 1: Check DNS Records**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Verify CNAME:**
   - Should have: `allenpsychiatry.net` → `allen-psychiatry-ws.pages.dev`
   - Should be **Proxied** (orange cloud) ✅
   - If not Proxied, click edit and enable Proxy

3. **Check for Duplicates:**
   - Should NOT have A records for root domain
   - Should NOT have AAAA records for root domain
   - Only CNAME should exist for root

---

### **Step 2: Check SSL Certificate**

1. **Go to SSL/TLS:**
   - Dashboard → `allenpsychiatry.net` → **SSL/TLS** → **Edge Certificates**

2. **Check Certificate Status:**
   - Should show "Active" ✅
   - If "Pending", wait 15 minutes
   - If "Error", re-add custom domain

3. **Check Certificate Details:**
   - Should cover: `*.allenpsychiatry.net` and `allenpsychiatry.net`
   - Should be "Managed by Cloudflare"
   - Should auto-renew

---

### **Step 3: Check SSL/TLS Encryption Mode**

1. **Go to SSL/TLS Overview:**
   - Dashboard → `allenpsychiatry.net` → **SSL/TLS** → **Overview**

2. **Check Encryption Mode:**
   - Should be **"Full"** or **"Full (strict)"** ✅
   - NOT "Flexible" (won't work with Pages)

3. **If Wrong:**
   - Change to "Full" or "Full (strict)"
   - Save
   - Wait 2-3 minutes

---

### **Step 4: Wait for Propagation**

**If you just activated the domain:**

1. **Wait 15-30 Minutes:**
   - SSL certificate needs time to fully provision
   - DNS needs time to propagate globally
   - Routing needs time to update
   - This is normal!

2. **Check Status:**
   - Pages → Custom domains → Should still show "Active"
   - SSL/TLS → Edge Certificates → Should show "Active"

---

### **Step 5: Clear Mobile Cache**

1. **iPhone Safari:**
   - Settings → Safari → Clear History and Website Data
   - Or: Settings → Safari → Advanced → Website Data → Remove All

2. **Android Chrome:**
   - Chrome → Menu (3 dots) → History → Clear browsing data
   - Select: "Cached images and files"
   - Clear

3. **Try Again:**
   - Visit: `https://allenpsychiatry.net`
   - Should work now!

---

## 🔍 **DIAGNOSIS QUESTIONS**

Answer these to narrow down the issue:

1. **When did you activate the custom domain?**
   - Just now? (Wait 15-30 minutes)
   - Hours ago? (Check DNS/SSL settings)

2. **What does SSL/TLS → Edge Certificates show?**
   - Active? (Good)
   - Pending? (Wait 15 minutes)
   - Error? (Re-add custom domain)

3. **What does DNS → Records show?**
   - CNAME: `allenpsychiatry.net` → `allen-psychiatry-ws.pages.dev`?
   - Is it Proxied (orange cloud)?
   - Any A or AAAA records for root?

4. **What does SSL/TLS → Overview show?**
   - Encryption mode: Full or Full (strict)?

---

## 🎯 **MOST LIKELY FIXES**

### **1. Wait 15-30 Minutes** (If Just Activated)
- SSL certificate provisioning takes time
- Even if it shows "Active", it may need a few more minutes
- This is the most common cause!

### **2. Check SSL/TLS Mode** (Quick Fix)
- Must be "Full" or "Full (strict)"
- NOT "Flexible"
- Change if needed, wait 2-3 minutes

### **3. Verify DNS CNAME is Proxied** (Critical)
- Must be Proxied (orange cloud)
- If not, enable Proxy
- Save and wait 2-3 minutes

### **4. Clear Mobile Cache** (Quick Fix)
- Mobile browsers cache aggressively
- Clear cache and try again

---

## ✅ **EXPECTED RESULT**

After fixes:
- ✅ `https://allenpsychiatry.net` loads on mobile
- ✅ No more 522 errors
- ✅ SSL certificate active
- ✅ Green padlock in browser

---

## 📋 **CHECKLIST**

- [ ] DNS CNAME is Proxied (orange cloud)
- [ ] SSL certificate is Active (not Pending)
- [ ] SSL/TLS mode is Full or Full (strict)
- [ ] Waited 15-30 minutes after activation
- [ ] Cleared mobile browser cache
- [ ] Tested on different network (WiFi vs cellular)

---

**Status:** Verify DNS is Proxied, SSL mode is Full, and wait 15-30 minutes if just activated!


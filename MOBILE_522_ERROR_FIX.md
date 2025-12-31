# Mobile 522 Error - Troubleshooting

**Date:** 2025-12-31  
**Issue:** 522 error on mobile device  
**Status:** 🔧 **TROUBLESHOOTING**

---

## 🔍 **522 ERROR ON MOBILE**

A 522 error means Cloudflare can't connect to the origin server. For Cloudflare Pages, this is a routing issue.

---

## ✅ **IMMEDIATE FIXES TO TRY**

### **Fix 1: Clear Mobile Browser Cache**

1. **iPhone Safari:**
   - Settings → Safari → Clear History and Website Data
   - Or: Settings → Safari → Advanced → Website Data → Remove All

2. **Android Chrome:**
   - Chrome → Menu (3 dots) → History → Clear browsing data
   - Select: "Cached images and files"
   - Clear

3. **Try Again:**
   - Visit: `https://allenpsychiatry.net`
   - Should work after cache clear

---

### **Fix 2: Try Different Network**

1. **Switch Networks:**
   - Try WiFi instead of cellular
   - Or cellular instead of WiFi
   - Different networks may have different DNS cache

2. **Test:**
   - Visit: `https://allenpsychiatry.net`
   - Does it work on different network?

---

### **Fix 3: Check Deployment Status**

1. **Go to Cloudflare Pages:**
   - Dashboard → Pages → `allen-psychiatry-ws` → Deployments

2. **Check Latest:**
   - Is latest deployment "Success"?
   - If "Failed", check build logs

3. **Test Deployment URL:**
   - Visit: `https://allen-psychiatry-ws.pages.dev`
   - Does this work on your phone?
   - If yes → Issue is custom domain routing
   - If no → Issue is deployment

---

### **Fix 4: Verify Custom Domain in Pages**

1. **Go to Pages:**
   - Dashboard → Pages → `allen-psychiatry-ws` → Custom domains

2. **Check Status:**
   - Is `allenpsychiatry.net` showing "Active"?
   - Does it show SSL certificate status?

3. **If Not Active:**
   - Remove it
   - Wait 30 seconds
   - Re-add it
   - Wait for verification

---

### **Fix 5: Check DNS Records**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → DNS → Records

2. **Verify CNAME:**
   - Should have: `allenpsychiatry.net` → `allen-psychiatry-ws.pages.dev`
   - Should be **Proxied** (orange cloud)

3. **If Wrong:**
   - Edit CNAME
   - Make sure it's Proxied
   - Save

---

### **Fix 6: Wait for SSL Certificate**

1. **Go to SSL/TLS:**
   - Dashboard → `allenpsychiatry.net` → SSL/TLS → Edge Certificates

2. **Check Certificate:**
   - Status should be "Active"
   - If "Pending", wait 15 minutes

3. **If "Error":**
   - Re-add custom domain in Pages
   - Wait 15 minutes

---

## ⏱️ **TIMELINE**

**If you just set everything up:**
- **5-15 minutes:** SSL certificate provisions
- **15-30 minutes:** DNS fully propagates globally
- **Total:** Up to 30 minutes for everything to work

---

## 🔍 **DIAGNOSIS QUESTIONS**

Answer these:

1. **Deployment URL:**
   - Does `https://allen-psychiatry-ws.pages.dev` work on your phone?

2. **Custom Domain Status:**
   - In Pages → Custom domains, what status does `allenpsychiatry.net` show?

3. **When did you set it up?**
   - Just now? (Wait 15-30 minutes)
   - Hours ago? (Something else is wrong)

4. **Desktop vs Mobile:**
   - Does `https://allenpsychiatry.net` work on desktop?
   - Only failing on mobile?

---

## 🎯 **MOST LIKELY FIXES**

### **1. Wait 15-30 Minutes** (If Just Set Up)
- SSL certificate needs time
- DNS needs time to propagate
- This is normal!

### **2. Clear Mobile Cache** (Quick Fix)
- Mobile browsers cache aggressively
- Clear cache and try again

### **3. Re-connect Custom Domain** (If Not Active)
- Pages → Custom domains
- Remove and re-add
- Wait for verification

---

## ✅ **EXPECTED RESULT**

After fixes:
- ✅ `https://allenpsychiatry.net` loads on mobile
- ✅ No 522 errors
- ✅ SSL certificate active
- ✅ All pages work

---

**Status:** Try clearing mobile cache first, then check deployment status and custom domain!


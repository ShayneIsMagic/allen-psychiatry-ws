# Error 522 Fix - Cloudflare Pages

**Date:** 2025-12-31  
**Error:** 522 Connection Timed Out  
**Important:** For Cloudflare Pages, there's NO origin server - this is a routing issue!

---

## 🚨 **IMPORTANT: NO IP DATA NEEDED!**

### **For Cloudflare Pages:**
- ❌ **NO origin server** (it's serverless)
- ❌ **NO IP address to share**
- ❌ **NO server to contact**
- ✅ **This is a routing/configuration issue**

**You don't need to share any IP data with anyone!**

---

## 🔍 **WHY YOU'RE GETTING 522 ERROR**

A 522 error on Cloudflare Pages usually means:
1. **Custom domain routing issue** (most common)
2. **DNS misconfiguration**
3. **Pages deployment not connected properly**
4. **SSL/TLS routing problem**

---

## ✅ **FIXES TO TRY (In Order)**

### **Fix 1: Re-connect Custom Domain in Pages**

This is the #1 cause of 522 errors on Pages:

1. **Go to Pages:**
   - Dashboard → Pages → `allen-psychiatry-ws` → **Custom domains**

2. **Remove and Re-add:**
   - Click on `allenpsychiatry.net`
   - Click **"Remove"** or **"Delete"**
   - Wait 30 seconds
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**
   - Wait for verification (usually instant)
   - Status should show **"Active"**

3. **Wait 2-3 minutes** for routing to update

---

### **Fix 2: Check Deployment Status**

1. **Go to Deployments:**
   - Pages → `allen-psychiatry-ws` → **Deployments**

2. **Check Latest:**
   - Is it **"Success"**?
   - If "Failed", fix the deployment first

3. **Test Deployment URL:**
   - Visit: `https://allen-psychiatry-ws.pages.dev`
   - Does this work?
   - If yes → Issue is custom domain routing
   - If no → Issue is deployment

---

### **Fix 3: Update DNS to Point to Specific Deployment**

If the project domain isn't routing correctly:

1. **Get Latest Deployment URL:**
   - Deployments tab → Latest successful deployment
   - Copy the deployment URL (e.g., `5acb28bf.allen-psychiatry-ws.pages.dev`)

2. **Update DNS:**
   - DNS → Records
   - Edit CNAME: `allenpsychiatry.net`
   - Change to: `[deployment-url].allen-psychiatry-ws.pages.dev`
   - Keep **Proxied** (orange cloud)
   - Save

3. **Update www:**
   - Edit CNAME: `www`
   - Change to: `[deployment-url].allen-psychiatry-ws.pages.dev`
   - Keep **Proxied**
   - Save

**Note:** This points to a specific deployment. When you deploy new versions, update this.

---

### **Fix 4: Verify SSL Certificate**

1. **Go to SSL/TLS:**
   - Dashboard → `allenpsychiatry.net` → **SSL/TLS** → **Edge Certificates**

2. **Check Certificate:**
   - Should show certificate for `allenpsychiatry.net`
   - Status should be **"Active"**
   - If "Pending" or "Error", wait 15 minutes

3. **If Issues:**
   - Re-add custom domain in Pages (Fix 1)
   - Wait 15 minutes for certificate provisioning

---

### **Fix 5: Check DNS Records**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Verify:**
   - CNAME: `allenpsychiatry.net` → Should point to Pages project
   - Should be **Proxied** (orange cloud)
   - NO A records for root domain
   - NO AAAA records for root domain

3. **If Wrong:**
   - Delete any A/AAAA records
   - Ensure CNAME is Proxied
   - Save

---

## 🎯 **MOST LIKELY FIX**

**Try Fix 1 first** (Re-connect custom domain):
- This fixes 90% of 522 errors on Cloudflare Pages
- Takes 2 minutes
- Usually resolves immediately

---

## ⏱️ **AFTER FIXES**

1. **Wait 2-3 minutes** for routing to update
2. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Clear Cloudflare cache:**
   - Dashboard → Caching → **Purge Everything**
4. **Test:** `https://allenpsychiatry.net`

---

## 🔍 **DIAGNOSIS QUESTIONS**

Answer these to help diagnose:

1. **Deployment Status:**
   - What's the status of latest deployment? (Success/Failed)

2. **Deployment URL:**
   - Does `https://allen-psychiatry-ws.pages.dev` work?

3. **Custom Domain:**
   - In Pages → Custom domains, what status does `allenpsychiatry.net` show?

4. **DNS:**
   - What does the CNAME for `allenpsychiatry.net` point to?

---

## 📋 **QUICK FIX CHECKLIST**

- [ ] Re-add custom domain in Pages (Fix 1)
- [ ] Check deployment is "Success"
- [ ] Test deployment URL works
- [ ] Verify DNS CNAME is Proxied
- [ ] Check SSL certificate is Active
- [ ] Wait 2-3 minutes
- [ ] Clear all caches
- [ ] Test again

---

## ✅ **ABOUT "AUTOMATIC MODE DISABLED"**

**This is FINE!** 

- "Automatic mode" is for SSL/TLS
- You have **"Full (strict)"** which is BETTER
- No need to enable automatic mode
- Your SSL/TLS is configured correctly

---

## 🚨 **IMPORTANT REMINDER**

**For Cloudflare Pages:**
- ❌ **NO origin server**
- ❌ **NO IP address needed**
- ❌ **NO server to contact**
- ✅ **This is a routing issue, not a server issue**

**You don't need to share any IP data!**

---

**Status:** Try Fix 1 (re-connect custom domain) first - this fixes most 522 errors on Cloudflare Pages!


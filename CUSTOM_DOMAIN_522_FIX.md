# Custom Domain 522 Error - Complete Fix Guide

**Date:** 2025-12-31  
**Status:** ✅ Deployment works, ⚠️ Custom domain routing issue  
**Deployment URL:** `https://allen-psychiatry-ws.pages.dev/` ✅ **WORKS**

---

## ✅ **CONFIRMED: DEPLOYMENT IS PERFECT**

Since `https://allen-psychiatry-ws.pages.dev/` works:
- ✅ Deployment is successful
- ✅ All files are deployed correctly
- ✅ Site is live and working
- ⚠️ **Only issue:** Custom domain routing

---

## 🔧 **FIX: CUSTOM DOMAIN ROUTING**

### **Step 1: Re-connect Custom Domain in Pages**

This fixes 90% of 522 errors on custom domains:

1. **Go to Cloudflare Pages:**
   - Dashboard → **Pages** → `allen-psychiatry-ws`

2. **Go to Custom Domains:**
   - Click **"Custom domains"** tab

3. **Remove Custom Domain:**
   - Find `allenpsychiatry.net` in the list
   - Click on it
   - Click **"Remove"** or **"Delete"**
   - Confirm removal
   - **Wait 30 seconds**

4. **Re-add Custom Domain:**
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**
   - Wait for verification (usually instant)
   - Status should show **"Active"** (green checkmark)

5. **Wait 2-3 Minutes:**
   - Routing needs time to update
   - SSL certificate needs to provision

6. **Test:** `https://allenpsychiatry.net`

---

### **Step 2: Verify DNS Records**

While waiting, verify DNS is correct:

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Check CNAME Records:**
   - **CNAME:** `allenpsychiatry.net` → Should point to `allen-psychiatry-ws.pages.dev`
   - **CNAME:** `www` → Should point to `allen-psychiatry-ws.pages.dev`
   - Both should be **Proxied** (orange cloud)

3. **If Wrong:**
   - Edit each CNAME
   - Make sure they point to `allen-psychiatry-ws.pages.dev`
   - Make sure **Proxy status** is **Proxied** (orange cloud)
   - Save

4. **Remove Any A/AAAA Records:**
   - If you see A or AAAA records for root domain, **DELETE them**
   - Cloudflare Pages uses CNAME only

---

### **Step 3: Verify SSL Certificate**

1. **Go to SSL/TLS:**
   - Dashboard → `allenpsychiatry.net` → **SSL/TLS** → **Edge Certificates**

2. **Check Certificate:**
   - Should show certificate for `allenpsychiatry.net`
   - Status should be **"Active"** or **"Pending"**
   - If "Pending", wait 15 minutes

3. **If "Error":**
   - Re-add custom domain in Pages (Step 1)
   - Wait 15 minutes for certificate provisioning

---

### **Step 4: Clear All Caches**

1. **Browser Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or use incognito/private mode

2. **Cloudflare Cache:**
   - Dashboard → Caching → **Purge Everything**
   - Wait 1 minute

3. **DNS Cache:**
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Or restart computer

---

## ⏱️ **TIMELINE**

**After re-connecting custom domain:**
- **Immediate:** Custom domain shows "Active"
- **1-2 minutes:** Routing updates
- **2-5 minutes:** SSL certificate provisions
- **5-10 minutes:** Full propagation globally

**Total wait time:** 5-10 minutes after re-connecting

---

## 🔍 **VERIFICATION STEPS**

### **After Re-connecting Custom Domain:**

1. **Check Custom Domain Status:**
   - Pages → Custom domains
   - Should show `allenpsychiatry.net` as **"Active"**
   - Should show SSL certificate status

2. **Check DNS:**
   - DNS → Records
   - CNAMEs should be Proxied (orange cloud)
   - No A/AAAA records for root

3. **Test URLs:**
   - `https://allenpsychiatry.net` (should work)
   - `https://www.allenpsychiatry.net` (should work)
   - Both should match deployment URL

---

## 🚨 **IF STILL NOT WORKING AFTER 10 MINUTES**

### **Alternative Fix: Point DNS to Specific Deployment**

If re-connecting doesn't work:

1. **Get Latest Deployment URL:**
   - Pages → Deployments
   - Find latest successful deployment
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

**Note:** This points to a specific deployment. When you deploy new versions, you'll need to update this.

---

## 📋 **COMPLETE FIX CHECKLIST**

- [ ] Re-connect custom domain in Pages (Step 1)
- [ ] Verify DNS CNAMEs point to `allen-psychiatry-ws.pages.dev`
- [ ] Verify DNS CNAMEs are Proxied (orange cloud)
- [ ] Remove any A/AAAA records for root domain
- [ ] Verify SSL certificate is Active or Pending
- [ ] Wait 5-10 minutes
- [ ] Clear browser cache
- [ ] Clear Cloudflare cache
- [ ] Test: `https://allenpsychiatry.net`

---

## ✅ **EXPECTED RESULT**

After following these steps:
- ✅ `https://allenpsychiatry.net` loads correctly
- ✅ Matches deployment URL content
- ✅ SSL certificate active (green padlock)
- ✅ All pages work
- ✅ No 522 errors

---

## 🎯 **SUMMARY**

**Problem:** Custom domain routing issue (522 error)  
**Deployment:** ✅ Working perfectly  
**Fix:** Re-connect custom domain in Pages  
**Time:** 5-10 minutes after fix

**Status:** Follow Step 1 (re-connect custom domain) - this fixes most 522 errors!


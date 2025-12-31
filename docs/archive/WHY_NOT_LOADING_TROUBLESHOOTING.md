# Why Site Not Loading - Complete Troubleshooting

**Date:** 2025-12-31  
**Status:** 🔍 **SYSTEMATIC TROUBLESHOOTING**

---

## 🔍 **STEP-BY-STEP DIAGNOSIS**

### **Step 1: Check Custom Domain in Pages** ⚠️ **MOST LIKELY ISSUE**

**This is probably the problem!**

1. **Go to Cloudflare Pages:**
   - Dashboard → **Pages** → `allen-psychiatry-ws`

2. **Check Custom Domains Tab:**
   - Click **"Custom domains"** tab
   - Look for `allenpsychiatry.net`

3. **What You Should See:**
   - ✅ `allenpsychiatry.net` listed
   - ✅ Status: **"Active"** (green checkmark)
   - ✅ Points to latest deployment

4. **If NOT There or NOT Active:**
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**
   - Wait for verification (usually instant)
   - Status should change to "Active"

**This is the #1 reason sites don't load!**

---

### **Step 2: Check DNS Propagation**

1. **Check A Record:**
   - Visit: https://www.whatsmydns.net/#A/allenpsychiatry.net
   - Should show Cloudflare IP addresses globally
   - If showing old IPs or nothing, wait longer

2. **Check CNAME:**
   - Visit: https://www.whatsmydns.net/#CNAME/allenpsychiatry.net
   - Should show: `5acb28bf.allen-psychiatry-ws.pages.dev`
   - If not showing, DNS not propagated yet

3. **Timeline:**
   - Usually: 15-30 minutes
   - Can take: Up to 48 hours globally
   - Check multiple locations on whatsmydns.net

---

### **Step 3: Check Cloudflare DNS Records**

1. **Go to DNS Settings:**
   - Cloudflare Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Verify Records:**
   - ✅ CNAME: `allenpsychiatry.net` → `5acb28bf.allen-psychiatry-ws.pages.dev` (Proxied)
   - ✅ CNAME: `www` → `5acb28bf.allen-psychiatry-ws.pages.dev` (Proxied)
   - ❌ NO A records for root domain
   - ❌ NO AAAA records for root domain

3. **If Records Wrong:**
   - Delete A/AAAA records
   - Add/update CNAME records
   - Make sure both are **Proxied** (orange cloud)

---

### **Step 4: Check SSL Certificate**

1. **Go to SSL/TLS:**
   - Cloudflare Dashboard → `allenpsychiatry.net` → **SSL/TLS**

2. **Verify:**
   - ✅ Certificate shows "Active"
   - ✅ Covers `allenpsychiatry.net` and `*.allenpsychiatry.net`
   - ✅ Encryption mode: "Full" or "Full (strict)"

3. **If Not Active:**
   - Wait 15 minutes for provisioning
   - Set encryption mode to "Full (strict)"

---

### **Step 5: Check Pages Deployment**

1. **Go to Cloudflare Pages:**
   - Pages → `allen-psychiatry-ws` → **Deployments**

2. **Verify:**
   - ✅ Latest deployment shows "Success"
   - ✅ Production branch: `main`
   - ✅ Deployment URL works: `https://5acb28bf.allen-psychiatry-ws.pages.dev`

3. **Test Deployment URL:**
   - Visit: `https://5acb28bf.allen-psychiatry-ws.pages.dev`
   - If this works, Pages is fine - issue is DNS/custom domain
   - If this doesn't work, Pages deployment issue

---

### **Step 6: Clear All Caches**

1. **Browser Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear cache completely

2. **Cloudflare Cache:**
   - Dashboard → Caching → **Purge Everything**
   - Wait 1 minute

3. **DNS Cache:**
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Or restart computer

4. **Try Incognito/Private Mode:**
   - Bypasses all local cache
   - Test: `https://allenpsychiatry.net`

---

### **Step 7: Check for Errors**

1. **Open Browser Console:**
   - F12 → Console tab
   - Look for red errors

2. **Check Network Tab:**
   - F12 → Network tab
   - Reload page
   - Look for failed requests (red)

3. **Common Errors:**
   - 404 Not Found → File missing
   - 522 Timeout → Origin server issue (shouldn't happen with Pages)
   - 1000 DNS Error → DNS issue
   - CORS Error → Cross-origin issue

---

## 🎯 **MOST LIKELY CAUSES (In Order)**

### **1. Custom Domain Not Connected in Pages** (90% of cases)
- **Fix:** Go to Pages → Custom domains → Add `allenpsychiatry.net`
- **This is usually the problem!**

### **2. DNS Not Propagated Yet** (5% of cases)
- **Fix:** Wait 15-30 minutes, check whatsmydns.net
- **Can take up to 48 hours globally**

### **3. Browser Cache** (3% of cases)
- **Fix:** Clear cache, try incognito mode
- **Hard refresh: Ctrl+Shift+R**

### **4. Wrong DNS Records** (2% of cases)
- **Fix:** Verify CNAME records in Cloudflare DNS
- **Make sure pointing to latest deployment**

---

## ✅ **QUICK DIAGNOSIS CHECKLIST**

Answer these:

1. **Custom Domain in Pages?**
   - [ ] Is `allenpsychiatry.net` listed in Pages → Custom domains?
   - [ ] Does it show "Active" status?

2. **DNS Records?**
   - [ ] CNAME for `@` exists?
   - [ ] Points to `5acb28bf.allen-psychiatry-ws.pages.dev`?
   - [ ] Is Proxied (orange cloud)?

3. **Deployment URL Works?**
   - [ ] Does `https://5acb28bf.allen-psychiatry-ws.pages.dev` load?
   - [ ] If yes → DNS/custom domain issue
   - [ ] If no → Deployment issue

4. **DNS Propagated?**
   - [ ] Check https://www.whatsmydns.net/#A/allenpsychiatry.net
   - [ ] Shows Cloudflare IPs?

5. **Cleared Cache?**
   - [ ] Tried incognito mode?
   - [ ] Cleared browser cache?
   - [ ] Cleared Cloudflare cache?

---

## 🚨 **IMMEDIATE ACTION ITEMS**

### **Do These Right Now:**

1. **Check Custom Domain in Pages** ⚠️ **DO THIS FIRST!**
   - Pages → `allen-psychiatry-ws` → Custom domains
   - If `allenpsychiatry.net` not there → Add it
   - If there but not "Active" → Wait or re-add

2. **Test Deployment URL:**
   - Visit: `https://5acb28bf.allen-psychiatry-ws.pages.dev`
   - Does it load? If yes, custom domain is the issue

3. **Check DNS Propagation:**
   - Visit: https://www.whatsmydns.net/#A/allenpsychiatry.net
   - Are Cloudflare IPs showing globally?

4. **Clear Everything:**
   - Browser cache
   - Cloudflare cache
   - Try incognito

---

## 📋 **WHAT TO TELL ME**

To help diagnose, tell me:

1. **Custom Domain Status:**
   - Is `allenpsychiatry.net` in Pages → Custom domains?
   - What status does it show?

2. **Deployment URL:**
   - Does `https://5acb28bf.allen-psychiatry-ws.pages.dev` work?

3. **DNS Check:**
   - What does https://www.whatsmydns.net/#A/allenpsychiatry.net show?

4. **Error Message:**
   - What exact error do you see?
   - NXDOMAIN? 522? 1000? Something else?

---

**Status:** Follow steps 1-7 above. Most likely: Custom domain not connected in Pages!


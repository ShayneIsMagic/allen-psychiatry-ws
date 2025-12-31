# Error 522/403 Fix - SSL/TLS Configuration

**Date:** 2025-12-31  
**Issue:** 522 Connection Timed Out / 403 Forbidden  
**Status:** 🔧 **TROUBLESHOOTING**

---

## 🔴 **THE PROBLEM**

### **Errors:**
- **522 Error:** Connection Timed Out
- **403 Error:** Forbidden
- **HTTPS not working**

**This suggests:**
- SSL/TLS configuration issue
- Custom domain not properly routing
- Cloudflare Pages routing problem

---

## ✅ **FIXES TO TRY**

### **Fix 1: Check SSL/TLS Mode**

1. **Go to Cloudflare Dashboard:**
   - Click on `allenpsychiatry.net`
   - Go to **SSL/TLS** → **Overview**

2. **Check Encryption Mode:**
   - Should be: **"Full"** or **"Full (strict)"**
   - NOT: "Flexible" or "Off"

3. **If Wrong:**
   - Change to **"Full (strict)"**
   - Save
   - Wait 2-3 minutes

---

### **Fix 2: Verify Custom Domain in Pages**

1. **Go to Pages:**
   - Dashboard → **Pages** → `allen-psychiatry-ws`
   - Click **"Custom domains"** tab

2. **Check:**
   - Is `allenpsychiatry.net` listed?
   - Status should be **"Active"**
   - Should show SSL certificate status

3. **If Not Active:**
   - Remove it
   - Re-add it
   - Wait for verification

---

### **Fix 3: Check DNS Records**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Verify:**
   - CNAME: `allenpsychiatry.net` → `allen-psychiatry-ws.pages.dev` (**Proxied** - orange cloud)
   - CNAME: `www` → `allen-psychiatry-ws.pages.dev` (**Proxied** - orange cloud)

3. **If Not Proxied:**
   - Click edit on each CNAME
   - Toggle **"Proxy status"** to **Proxied** (orange cloud)
   - Save

---

### **Fix 4: Update CNAME to Specific Deployment**

**If the above doesn't work, try pointing to the specific deployment:**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records`

2. **Update CNAME:**
   - Edit: `allenpsychiatry.net`
   - Change content to: `5acb28bf.allen-psychiatry-ws.pages.dev`
   - Keep **Proxied** (orange cloud)
   - Save

3. **Update www:**
   - Edit: `www`
   - Change content to: `5acb28bf.allen-psychiatry-ws.pages.dev`
   - Keep **Proxied** (orange cloud)
   - Save

**Note:** This points to a specific deployment. When you deploy new versions, you'll need to update this. But it might fix the routing issue.

---

### **Fix 5: Check Cloudflare Access Rules**

1. **Go to Security:**
   - Dashboard → `allenpsychiatry.net` → **Security** → **WAF**

2. **Check Rules:**
   - Look for any rules blocking traffic
   - Temporarily disable any blocking rules
   - Test again

---

### **Fix 6: Check SSL Certificate**

1. **Go to SSL/TLS:**
   - Dashboard → `allenpsychiatry.net` → **SSL/TLS** → **Edge Certificates**

2. **Verify:**
   - Certificate shows **"Active"**
   - Covers `allenpsychiatry.net` and `*.allenpsychiatry.net`
   - Not expired

3. **If Issues:**
   - Wait 15 minutes for certificate provisioning
   - Or re-add custom domain in Pages

---

## 🎯 **MOST LIKELY FIXES (In Order)**

### **1. SSL/TLS Mode** (Most Common)
- Set to **"Full (strict)"**
- Wait 2-3 minutes

### **2. Custom Domain Re-setup**
- Remove custom domain in Pages
- Re-add it
- Wait for verification

### **3. DNS Proxy Status**
- Make sure CNAMEs are **Proxied** (orange cloud)

---

## ⏱️ **AFTER FIXES**

1. **Wait 2-3 minutes** for changes to propagate
2. **Clear browser cache** (Ctrl+Shift+R)
3. **Clear Cloudflare cache** (Dashboard → Caching → Purge Everything)
4. **Test:** `https://allenpsychiatry.net`

---

## 🔍 **DIAGNOSIS QUESTIONS**

Answer these to help diagnose:

1. **SSL/TLS Mode:**
   - What mode is it set to? (Full, Full (strict), Flexible, Off)

2. **Custom Domain Status:**
   - Is `allenpsychiatry.net` showing "Active" in Pages?
   - Does it show an SSL certificate?

3. **DNS Proxy:**
   - Are the CNAME records **Proxied** (orange cloud)?

4. **Deployment URL:**
   - Does `https://5acb28bf.allen-psychiatry-ws.pages.dev` still work?

---

## 📋 **QUICK FIX CHECKLIST**

- [ ] SSL/TLS mode set to "Full (strict)"
- [ ] Custom domain Active in Pages
- [ ] CNAME records are Proxied
- [ ] SSL certificate Active
- [ ] Cleared Cloudflare cache
- [ ] Cleared browser cache
- [ ] Waited 2-3 minutes

---

**Status:** Try Fix 1 (SSL/TLS mode) first - this is the most common cause!


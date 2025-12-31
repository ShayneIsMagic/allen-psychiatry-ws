# Add CNAME Record in Cloudflare DNS

**Date:** 2025-12-31  
**Status:** 🔧 **Add CNAME in Cloudflare DNS**

---

## ✅ **IMPORTANT: DNS PROVIDER IS CLOUDFLARE**

Since your domain is already in Cloudflare:
- ✅ **DNS provider IS Cloudflare** (not Namecheap)
- ✅ Add CNAME record in **Cloudflare DNS** (not external provider)
- ✅ Cloudflare manages DNS for your domain

---

## 🔧 **STEP 1: ADD CNAME RECORD IN CLOUDFLARE**

### **Go to Cloudflare DNS:**

1. **Cloudflare Dashboard:**
   - Click on `allenpsychiatry.net` in left sidebar
   - Click **"DNS"** → **"Records"**

2. **Add CNAME Record:**
   - Click **"Add record"** (top right)

3. **Fill in the form:**
   - **Type:** Select `CNAME` from dropdown
   - **Name:** Enter `@` (or leave blank - both work for root)
   - **Target:** Enter `allen-psychiatry-ws.pages.dev`
   - **Proxy status:** Toggle to **Proxied** (orange cloud) ✅ **CRITICAL!**
   - **TTL:** Leave as "Auto"

4. **Click "Save"**

---

## ✅ **STEP 2: VERIFY IN PAGES**

After adding the CNAME record:

1. **Go back to Pages:**
   - Dashboard → **Pages** → `allen-psychiatry-ws` → **Custom domains**

2. **Click "Check DNS records":**
   - Cloudflare will verify the CNAME record
   - Should detect it automatically

3. **Wait for activation:**
   - Usually instant (1-2 minutes)
   - Status should show **"Active"**

---

## ⚠️ **IMPORTANT: PROXY STATUS**

**The CNAME record MUST be Proxied (orange cloud):**
- ✅ Enables Cloudflare CDN
- ✅ Enables SSL/TLS
- ✅ Enables DDoS protection
- ✅ **Required for Pages to work**

**If not Proxied:**
- ❌ SSL won't work
- ❌ Site won't load
- ❌ 522 errors
- ❌ Custom domain won't activate

---

## 📋 **YOUR DNS RECORDS SHOULD SHOW:**

After adding, you should have:

```
Type    Name                  Content                          Proxy
CNAME   @ (or blank)          allen-psychiatry-ws.pages.dev    Proxied ✅
MX      allenpsychiatry.net   mx1.privateemail.com             DNS only
MX      allenpsychiatry.net   mx2.privateemail.com             DNS only
TXT     allenpsychiatry.net   "v=spf1..."                     DNS only
```

---

## ⏱️ **TIMELINE**

**After adding CNAME:**
- **Immediate:** CNAME record added
- **1-2 minutes:** Cloudflare verifies and activates
- **5-15 minutes:** SSL certificate provisions
- **Total:** 15-20 minutes maximum

---

## 🔍 **VERIFICATION**

### **After Adding CNAME:**

1. **Check DNS Records:**
   - DNS → Records
   - Should see CNAME: `@` → `allen-psychiatry-ws.pages.dev`
   - Should be **Proxied** (orange cloud)

2. **Check Custom Domain:**
   - Pages → Custom domains
   - Click "Check DNS records"
   - Should show "Active" after verification

3. **Check SSL Certificate:**
   - SSL/TLS → Edge Certificates
   - Should show certificate (may take 15 minutes)

---

## ✅ **EXPECTED RESULT**

After adding CNAME and verifying:
- ✅ CNAME record in Cloudflare DNS
- ✅ Custom domain activated in Pages
- ✅ SSL certificate provisioning starts
- ✅ `https://allenpsychiatry.net` will work (after SSL provisions)

---

## 🎯 **SUMMARY**

**DNS Provider:** Cloudflare (not external)  
**Action:** Add CNAME in Cloudflare DNS → Records  
**Important:** Must be **Proxied** (orange cloud)  
**Then:** Go to Pages → Custom domains → Click "Check DNS records"

**Add the CNAME record in Cloudflare DNS now!**


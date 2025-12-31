# Add CNAME Records - Step by Step

**Date:** 2025-12-31  
**Status:** ✅ Domain active, now add CNAME records

---

## ✅ **DOMAIN IS ACTIVE!**

Your domain is now in Cloudflare. You can see:
- ✅ DNS management is available
- ✅ Email records (MX, TXT) are there
- ❌ **Missing:** CNAME records for website

---

## 🔧 **ADD 2 CNAME RECORDS NOW**

### **Record 1: Root Domain CNAME**

1. **Click "Add record"** (top right of DNS records table)

2. **Fill in the form:**
   - **Type:** Select `CNAME` from dropdown
   - **Name:** Enter `@` (or leave blank - both work for root)
   - **Target:** Enter `allen-psychiatry-ws.pages.dev`
   - **Proxy status:** Toggle to **Proxied** (orange cloud) ✅ **CRITICAL!**
   - **TTL:** Leave as "Auto"

3. **Click "Save"**

---

### **Record 2: www CNAME**

1. **Click "Add record"** again

2. **Fill in the form:**
   - **Type:** Select `CNAME` from dropdown
   - **Name:** Enter `www`
   - **Target:** Enter `allen-psychiatry-ws.pages.dev`
   - **Proxy status:** Toggle to **Proxied** (orange cloud) ✅ **CRITICAL!**
   - **TTL:** Leave as "Auto"

3. **Click "Save"**

---

## 📋 **YOUR DNS RECORDS SHOULD NOW SHOW:**

After adding, you should have **5 records total:**

```
Type    Name                  Content                          Proxy
CNAME   @ (or blank)          allen-psychiatry-ws.pages.dev    Proxied ✅
CNAME   www                   allen-psychiatry-ws.pages.dev    Proxied ✅
MX      allenpsychiatry.net   mx1.privateemail.com             DNS only
MX      allenpsychiatry.net   mx2.privateemail.com             DNS only
TXT     allenpsychiatry.net   "v=spf1..."                     DNS only
```

---

## ⚠️ **CRITICAL: PROXY STATUS**

**Both CNAME records MUST be Proxied (orange cloud):**

- ✅ Enables Cloudflare CDN
- ✅ Enables SSL/TLS
- ✅ Enables DDoS protection
- ✅ **Required for Pages to work**

**If not Proxied:**
- ❌ SSL won't work
- ❌ Site won't load
- ❌ 522 errors
- ❌ Custom domain won't work

---

## ⏱️ **AFTER ADDING CNAME RECORDS**

1. **Wait 1-2 minutes** for DNS to update

2. **Re-add Custom Domain in Pages:**
   - Pages → `allen-psychiatry-ws` → Custom domains
   - Remove `allenpsychiatry.net` (if listed)
   - Re-add `allenpsychiatry.net`
   - Wait for verification

3. **Wait 15 minutes** for SSL certificate to provision

4. **Test:** `https://allenpsychiatry.net`

---

## 🔍 **VERIFICATION**

### **After Adding CNAME Records:**

1. **Check DNS Records:**
   - Should see 2 CNAME records
   - Both should show **orange cloud** (Proxied)
   - Total: 5 records (2 CNAME + 2 MX + 1 TXT)

2. **Check Custom Domain:**
   - Pages → Custom domains
   - Should show `allenpsychiatry.net` as "Active"

3. **Check SSL Certificate:**
   - SSL/TLS → Edge Certificates
   - Should show certificate (may take 15 minutes)

---

## ✅ **EXPECTED RESULT**

After adding CNAME records:
- ✅ DNS routes to Cloudflare Pages
- ✅ SSL certificate can provision
- ✅ Custom domain works
- ✅ `https://allenpsychiatry.net` loads
- ✅ No more 522 errors

---

## 🎯 **SUMMARY**

**Status:** Domain is active ✅  
**Next:** Add 2 CNAME records  
**Important:** Both must be **Proxied** (orange cloud)  
**Time:** 1-2 minutes to add, 15 minutes for SSL

**Add the CNAME records now - this is the final piece!**


# When to Add CNAME Records

**Date:** 2025-12-31  
**Question:** Add CNAME records before or after activation?  
**Answer:** ✅ **AFTER activation**

---

## ✅ **CORRECT ORDER**

### **Step 1: Complete Domain Addition First**

1. **Continue to activation:**
   - Click "Continue" or "Add site"
   - Complete the domain addition process
   - Wait for domain to be added to Cloudflare

2. **Domain must be in Cloudflare first:**
   - You need the domain in your Cloudflare account
   - Then you can manage DNS records for it

---

### **Step 2: Add CNAME Records After**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Add CNAME Records:**
   - Click "Add record"
   - Add root domain CNAME
   - Add www CNAME
   - Both must be **Proxied** (orange cloud)

---

## 📋 **COMPLETE PROCESS**

### **Phase 1: Add Domain to Cloudflare**

1. **Choose DNS import option:**
   - "Quick scan for DNS records" (recommended)
   - Or "Manually enter DNS records"

2. **Continue to activation:**
   - Click "Continue" or "Add site"
   - Complete domain addition
   - Wait for activation

3. **Domain is now in Cloudflare:**
   - You'll see it in your dashboard
   - DNS management is now available

---

### **Phase 2: Add CNAME Records for Pages**

**After domain is activated:**

1. **Go to DNS:**
   - Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Add Root Domain CNAME:**
   - Type: `CNAME`
   - Name: `@` (or `allenpsychiatry.net`)
   - Target: `allen-psychiatry-ws.pages.dev`
   - Proxy: **Proxied** (orange cloud) ✅
   - Save

3. **Add www CNAME:**
   - Type: `CNAME`
   - Name: `www`
   - Target: `allen-psychiatry-ws.pages.dev`
   - Proxy: **Proxied** (orange cloud) ✅
   - Save

---

## ⚠️ **IMPORTANT NOTES**

### **During Domain Addition:**

- **If you choose "Quick scan":**
  - It will import existing DNS records
  - It won't find CNAME for Pages (doesn't exist yet)
  - That's fine - you'll add them after

- **If you choose "Manually enter":**
  - You can add CNAME records during setup
  - But easier to add after domain is activated

---

## ✅ **RECOMMENDED APPROACH**

1. ✅ **Continue to activation** (add domain first)
2. ✅ **Wait for domain to be added**
3. ✅ **Then go to DNS → Records**
4. ✅ **Add the 2 CNAME records there**

**This is the cleanest and easiest approach!**

---

## 🎯 **SUMMARY**

**Answer:** Add CNAME records **AFTER** activation

**Why:**
- Domain must be in Cloudflare first
- DNS records are managed after domain is added
- Cleaner process

**Steps:**
1. Continue to activation now
2. After domain is added, go to DNS → Records
3. Add the 2 CNAME records

---

**Status:** Continue to activation first, then add CNAME records in DNS → Records!


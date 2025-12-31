# DNS NXDOMAIN Error Fix

**Error:** `DNS_PROBE_FINISHED_NXDOMAIN`  
**Meaning:** Domain can't be found/resolved  
**Cause:** DNS not configured or not propagated yet

---

## 🔍 **TROUBLESHOOTING STEPS**

### **Step 1: Check Nameservers at Namecheap**

**Most Common Cause:** Nameservers not updated at Namecheap

1. **Log into Namecheap**
   - Go to: https://www.namecheap.com
   - Domain List → Manage `allenpsychiatry.net`

2. **Check Nameservers**
   - Look at "Nameservers" section
   - Should show:
     - `bristol.ns.cloudflare.com`
     - `houston.ns.cloudflare.com`
   
3. **If NOT Updated:**
   - Select "Custom DNS"
   - Enter the 2 Cloudflare nameservers
   - Save
   - **Wait 24-48 hours** for propagation

4. **Verify Nameservers**
   - Visit: https://www.whatsmydns.net/#NS/allenpsychiatry.net
   - Should show Cloudflare nameservers globally
   - If not, wait longer for propagation

---

### **Step 2: Check Domain in Cloudflare**

1. **Log into Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com
   - Check if `allenpsychiatry.net` is listed

2. **If Domain NOT in Cloudflare:**
   - Click "Add a Site"
   - Enter: `allenpsychiatry.net`
   - Follow setup wizard
   - Get nameservers
   - Update at Namecheap

3. **If Domain IS in Cloudflare:**
   - Check status - should show "Active"
   - If not active, complete setup

---

### **Step 3: Check DNS Records in Cloudflare**

1. **Go to DNS Settings**
   - Cloudflare Dashboard → `allenpsychiatry.net` → DNS → Records

2. **Verify Records Exist:**
   - Should have CNAME for `@` → `a349d53a.allen-psychiatry-ws.pages.dev`
   - Should have CNAME for `www` → `a349d53a.allen-psychiatry-ws.pages.dev`
   - Both should be **Proxied** (orange cloud)

3. **If Records Missing:**
   - Add CNAME record for `@`
   - Add CNAME record for `www`
   - Set both to Proxied

---

### **Step 4: Check Custom Domain in Pages**

1. **Go to Cloudflare Pages**
   - Pages → `allen-psychiatry-ws` → Custom domains

2. **Verify Domain Added:**
   - Should see `allenpsychiatry.net` listed
   - Status should be "Active"

3. **If Not Added:**
   - Click "Set up a custom domain"
   - Enter: `allenpsychiatry.net`
   - Cloudflare will auto-configure DNS

---

### **Step 5: Check DNS Propagation**

1. **Check Global DNS**
   - Visit: https://www.whatsmydns.net/#A/allenpsychiatry.net
   - Should show Cloudflare IPs (not AWS)
   - If showing old IPs or nothing, wait for propagation

2. **Check Nameservers**
   - Visit: https://www.whatsmydns.net/#NS/allenpsychiatry.net
   - Should show Cloudflare nameservers
   - If showing old nameservers, wait for propagation

---

## ⏱️ **TIMELINE**

### **If Nameservers Just Updated:**
- **Wait 2-48 hours** for DNS propagation
- Usually works within **2-4 hours**
- Can take up to **48 hours** globally

### **If Everything Configured:**
- **Wait 1-2 minutes** for DNS cache to clear
- Try different browser or incognito mode
- Clear DNS cache on your computer

---

## 🔧 **QUICK FIXES**

### **Fix 1: Clear DNS Cache**

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
```

### **Fix 2: Try Different DNS Server**

**Use Google DNS:**
- 8.8.8.8
- 8.8.4.4

**Or Cloudflare DNS:**
- 1.1.1.1
- 1.0.0.1

### **Fix 3: Test in Incognito/Private Mode**
- Open incognito window
- Visit: `https://allenpsychiatry.net`
- Bypasses local DNS cache

---

## ✅ **CHECKLIST**

Before troubleshooting, verify:

- [ ] Nameservers updated at Namecheap?
- [ ] Domain added to Cloudflare?
- [ ] DNS records exist in Cloudflare?
- [ ] Custom domain added in Pages?
- [ ] Waited for DNS propagation?
- [ ] Cleared DNS cache?
- [ ] Tried different browser?

---

## 🎯 **MOST LIKELY CAUSES**

### **1. Nameservers Not Updated (90% of cases)**
- **Fix:** Update nameservers at Namecheap
- **Wait:** 24-48 hours for propagation

### **2. DNS Not Propagated Yet**
- **Fix:** Wait longer (can take up to 48 hours)
- **Check:** https://www.whatsmydns.net

### **3. Domain Not in Cloudflare**
- **Fix:** Add domain to Cloudflare
- **Then:** Update nameservers at Namecheap

---

## 📋 **VERIFICATION STEPS**

1. **Check Nameservers:**
   ```
   https://www.whatsmydns.net/#NS/allenpsychiatry.net
   ```
   Should show: `bristol.ns.cloudflare.com` and `houston.ns.cloudflare.com`

2. **Check DNS Records:**
   ```
   https://www.whatsmydns.net/#A/allenpsychiatry.net
   ```
   Should show Cloudflare IPs (not AWS)

3. **Check Domain Status:**
   - Cloudflare Dashboard → Domain status should be "Active"

---

## 🚨 **IF STILL NOT WORKING**

### **After 48 Hours:**

1. **Verify Nameservers:**
   - Check at Namecheap
   - Check at whatsmydns.net
   - Should match Cloudflare nameservers

2. **Contact Support:**
   - Cloudflare Support (if domain in Cloudflare)
   - Namecheap Support (if nameserver issue)

3. **Double-Check:**
   - Domain spelling correct?
   - Nameservers entered correctly?
   - No typos in DNS records?

---

**Status:** Follow steps 1-5 above. Most likely cause is nameservers not updated or DNS not propagated yet.


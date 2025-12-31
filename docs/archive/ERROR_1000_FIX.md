# Error 1000 Fix: DNS Points to Prohibited IP

**Error:** Error 1000 - DNS points to prohibited IP  
**Cause:** DNS A record pointing to an IP address instead of using Cloudflare Pages CNAME  
**Fix:** Remove A record, use Cloudflare Pages automatic DNS configuration

---

## 🔴 **THE PROBLEM**

You have a DNS **A record** pointing to an IP address (like `192.0.2.1` or similar).  
Cloudflare Pages **doesn't use A records** - it uses **CNAME records** automatically.

---

## ✅ **THE FIX**

### **Step 1: Remove the A Record**

1. **Log into Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com
   - Click on `allenpsychiatry.net`

2. **Go to DNS Settings**
   - Click **"DNS"** in left sidebar
   - Click **"Records"**

3. **Find and Delete the A Record**
   - Look for an **A record** for `@` (or `allenpsychiatry.net`)
   - It will show an IP address like `192.0.2.1` or similar
   - Click the **"Delete"** button (trash icon) next to it
   - Confirm deletion

4. **Check for Other A Records**
   - Look for any other A records pointing to IP addresses
   - Delete them if they're for the root domain

---

### **Step 2: Let Cloudflare Pages Configure DNS Automatically**

**The correct way is to let Cloudflare Pages set up DNS automatically:**

1. **Go to Cloudflare Pages**
   - In Cloudflare dashboard, click **"Pages"** in left sidebar
   - Click on your project: `allen-psychiatry-ws`

2. **Add Custom Domain (If Not Already Added)**
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**

3. **Cloudflare Will Auto-Configure DNS**
   - Cloudflare Pages automatically creates the correct DNS records
   - It will create a **CNAME** record (not an A record)
   - The CNAME will point to: `a349d53a.allen-psychiatry-ws.pages.dev`
   - Wait for verification (usually instant)

4. **Verify DNS Records**
   - Go back to **DNS → Records**
   - You should see:
     - **CNAME** record: `@` → `a349d53a.allen-psychiatry-ws.pages.dev`
     - **Proxy status:** Proxied (orange cloud) ✅
   - **NO A records** pointing to IP addresses

---

### **Step 3: Verify the Fix**

1. **Check DNS Records**
   - In Cloudflare DNS, you should ONLY see:
     - CNAME record for `@` pointing to Pages domain
     - No A records for root domain

2. **Wait 1-2 Minutes**
   - DNS changes propagate quickly
   - Clear browser cache

3. **Test the Site**
   - Visit: `https://allenpsychiatry.net`
   - Should load your Cloudflare Pages site
   - No more Error 1000

---

## 📋 **CORRECT DNS SETUP FOR CLOUDFLARE PAGES**

### **What You Should Have:**

```
Type: CNAME
Name: @ (or allenpsychiatry.net)
Target: a349d53a.allen-psychiatry-ws.pages.dev
Proxy: Proxied (orange cloud) ✅
```

### **What You Should NOT Have:**

```
❌ Type: A
❌ Name: @
❌ Target: 192.0.2.1 (or any IP address)
```

---

## 🔍 **TROUBLESHOOTING**

### **If Error 1000 Persists:**

1. **Check All DNS Records**
   - Make sure NO A records exist for root domain
   - Only CNAME should exist

2. **Verify Custom Domain in Pages**
   - Go to Pages → Custom domains
   - Make sure `allenpsychiatry.net` shows as "Active"
   - If not, re-add it

3. **Clear Cloudflare Cache**
   - Go to Caching → Purge Everything
   - Wait 1 minute

4. **Check SSL/TLS Settings**
   - Go to SSL/TLS
   - Set to "Full (strict)"
   - Wait for certificate (15 minutes)

---

## ✅ **QUICK CHECKLIST**

- [ ] Removed A record pointing to IP address
- [ ] Added custom domain in Cloudflare Pages
- [ ] Verified CNAME record exists (not A record)
- [ ] CNAME points to: `a349d53a.allen-psychiatry-ws.pages.dev`
- [ ] Proxy status is "Proxied" (orange cloud)
- [ ] Custom domain shows "Active" in Pages
- [ ] SSL/TLS set to "Full (strict)"
- [ ] Cleared browser cache
- [ ] Tested site - no Error 1000

---

## 🎯 **SUMMARY**

**Problem:** A record pointing to IP address  
**Solution:** Remove A record, use Cloudflare Pages CNAME  
**Result:** Site works correctly via Cloudflare Pages

**Key Point:** Cloudflare Pages handles DNS automatically - don't manually create A records!

---

**Status:** Follow steps 1-3 above to fix Error 1000.


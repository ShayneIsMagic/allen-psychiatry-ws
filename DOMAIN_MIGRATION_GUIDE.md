# Domain Migration Guide: AWS → Cloudflare Pages

**Domain:** allenpsychiatry.net  
**Current Host:** AWS  
**New Host:** Cloudflare Pages  
**Date:** 2025-12-30

---

## 📋 **PRE-MIGRATION CHECKLIST**

Before starting, ensure:
- ✅ Site is deployed on Cloudflare Pages
- ✅ All pages load correctly at: `https://a349d53a.allen-psychiatry-ws.pages.dev/`
- ✅ You have access to:
  - Namecheap account (domain registrar)
  - Cloudflare account
  - AWS account (to verify old setup)

---

## 🎯 **STEP-BY-STEP MIGRATION**

### **STEP 1: Add Domain to Cloudflare**

1. **Log into Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com
   - Log in with your Cloudflare account

2. **Add Your Domain**
   - Click **"Add a Site"** or **"Add Site"** button
   - Enter: `allenpsychiatry.net`
   - Click **"Add site"**

3. **Select Plan**
   - Choose **Free plan** (sufficient for your needs)
   - Click **"Continue"**

4. **Cloudflare Will Scan Your DNS**
   - Wait for Cloudflare to scan existing DNS records
   - Review the detected records
   - Click **"Continue"**

---

### **STEP 2: Update Nameservers at Namecheap**

1. **Get Cloudflare Nameservers**
   - After adding domain, Cloudflare will show you **2 nameservers**
   - They should be something like:
     - `bristol.ns.cloudflare.com`
     - `houston.ns.cloudflare.com`
   - **Write these down!**

2. **Log into Namecheap**
   - Go to: https://www.namecheap.com
   - Log in to your account

3. **Navigate to Domain List**
   - Click **"Domain List"** in left sidebar
   - Find `allenpsychiatry.net`
   - Click **"Manage"** next to the domain

4. **Update Nameservers**
   - Scroll to **"Nameservers"** section
   - Select **"Custom DNS"** (not "Namecheap BasicDNS")
   - Enter the 2 Cloudflare nameservers:
     - `bristol.ns.cloudflare.com`
     - `houston.ns.cloudflare.com`
   - Click **"Save"** or **"✓"** to confirm

5. **Wait for Propagation**
   - DNS changes take **24-48 hours** to fully propagate
   - Usually works within **2-4 hours**
   - You can check status at: https://www.whatsmydns.net

---

### **STEP 3: Configure DNS Records in Cloudflare**

1. **Go to DNS Settings**
   - In Cloudflare dashboard, click on `allenpsychiatry.net`
   - Click **"DNS"** in left sidebar
   - Click **"Records"**

2. **Add/Verify DNS Records**

   **A Record (if needed):**
   - Type: `A`
   - Name: `@` (or `allenpsychiatry.net`)
   - IPv4 address: `192.0.2.1` (placeholder - Cloudflare Pages will handle this)
   - Proxy status: **Proxied** (orange cloud) ✅
   - Click **"Save"**

   **CNAME Record (for Pages):**
   - Type: `CNAME`
   - Name: `@` (or `allenpsychiatry.net`)
   - Target: `a349d53a.allen-psychiatry-ws.pages.dev`
   - Proxy status: **Proxied** (orange cloud) ✅
   - Click **"Save"**

   **Note:** Cloudflare Pages will automatically create the correct DNS records when you connect the custom domain.

---

### **STEP 4: Connect Custom Domain to Cloudflare Pages**

1. **Go to Cloudflare Pages**
   - In Cloudflare dashboard, click **"Pages"** in left sidebar
   - Find your project: `allen-psychiatry-ws`
   - Click on the project

2. **Add Custom Domain**
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**

3. **Cloudflare Will Configure DNS**
   - Cloudflare automatically creates DNS records
   - Wait for verification (usually instant)
   - Status should show: **"Active"**

4. **Add www Subdomain (Optional but Recommended)**
   - Click **"Add another domain"**
   - Enter: `www.allenpsychiatry.net`
   - Cloudflare will configure this too

---

### **STEP 5: SSL/TLS Configuration**

1. **Go to SSL/TLS Settings**
   - In Cloudflare dashboard, click on `allenpsychiatry.net`
   - Click **"SSL/TLS"** in left sidebar

2. **Set Encryption Mode**
   - Select **"Full (strict)"** mode
   - This ensures end-to-end encryption
   - Cloudflare will automatically provision SSL certificate

3. **Wait for Certificate**
   - SSL certificate usually provisions within **15 minutes**
   - Status will show **"Active Certificate"** when ready

---

### **STEP 6: Verify Migration**

1. **Check DNS Propagation**
   - Visit: https://www.whatsmydns.net
   - Enter: `allenpsychiatry.net`
   - Check **A** and **CNAME** records
   - Should show Cloudflare IPs (not AWS)

2. **Test Website**
   - Visit: `https://allenpsychiatry.net`
   - Should load your new Cloudflare Pages site
   - Check all pages work:
     - `/adhd`
     - `/anxiety`
     - `/depression`
     - `/ptsd`
     - `/provo`
     - `/rural`
     - `/telehealth`
     - `/about`

3. **Check SSL Certificate**
   - Visit: `https://allenpsychiatry.net`
   - Click lock icon in browser
   - Should show **"Valid"** certificate
   - Issued by Cloudflare

---

### **STEP 7: Update Cloudflare Pages Settings**

1. **Production Branch**
   - In Cloudflare Pages project settings
   - Ensure **Production branch** is set to: `main`
   - This ensures latest code is deployed

2. **Build Settings**
   - Framework preset: **None** (static site)
   - Build command: (leave empty)
   - Build output directory: `/` (root)

3. **Environment Variables**
   - None needed for static site

---

### **STEP 8: Decommission AWS (After Verification)**

**⚠️ WAIT 48 HOURS** after migration before decommissioning AWS to ensure everything works.

1. **Verify Everything Works**
   - Test all pages
   - Test all forms
   - Test all links
   - Monitor for 48 hours

2. **Cancel AWS Services**
   - Log into AWS Console
   - Cancel/delete:
     - Route 53 (DNS)
     - S3 buckets (if used)
     - CloudFront (if used)
     - Any other AWS services

3. **Update Billing**
   - Remove AWS from billing
   - Keep Cloudflare (free plan)

---

## 🔍 **TROUBLESHOOTING**

### **Issue: Domain Not Resolving**

**Check:**
1. Nameservers updated at Namecheap? (wait 24-48 hours)
2. DNS records correct in Cloudflare?
3. Custom domain connected in Pages?

**Fix:**
- Verify nameservers: https://www.whatsmydns.net/#NS/allenpsychiatry.net
- Check Cloudflare DNS records
- Re-add custom domain in Pages

---

### **Issue: SSL Certificate Not Working**

**Check:**
1. SSL/TLS mode set to "Full (strict)"?
2. Certificate status in Cloudflare?
3. Wait 15 minutes for provisioning?

**Fix:**
- Set SSL/TLS to "Full (strict)"
- Wait for certificate provisioning
- Clear browser cache

---

### **Issue: Site Shows Old Content**

**Check:**
1. Browser cache?
2. Cloudflare cache?
3. DNS still pointing to AWS?

**Fix:**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear Cloudflare cache: Dashboard → Caching → Purge Everything
- Check DNS propagation

---

## 📊 **MIGRATION TIMELINE**

| Step | Time | Status |
|------|------|--------|
| Add domain to Cloudflare | 5 min | ✅ |
| Update nameservers | 5 min | ✅ |
| DNS propagation | 2-48 hours | ⏳ |
| Connect custom domain | 5 min | ✅ |
| SSL certificate | 15 min | ⏳ |
| Full migration | **24-48 hours** | ⏳ |

---

## ✅ **POST-MIGRATION CHECKLIST**

After migration is complete:

- [ ] Domain resolves to Cloudflare Pages
- [ ] SSL certificate active
- [ ] All pages load correctly
- [ ] All links work
- [ ] Analytics tracking works
- [ ] Forms work (if any)
- [ ] Mobile site works
- [ ] Tested in multiple browsers
- [ ] Old AWS services decommissioned (after 48 hours)

---

## 🎯 **QUICK REFERENCE**

### **Cloudflare Nameservers:**
```
bristol.ns.cloudflare.com
houston.ns.cloudflare.com
```

### **Cloudflare Pages URL:**
```
https://a349d53a.allen-psychiatry-ws.pages.dev
```

### **Custom Domain:**
```
https://allenpsychiatry.net
```

### **Important URLs:**
- Cloudflare Dashboard: https://dash.cloudflare.com
- Namecheap: https://www.namecheap.com
- DNS Check: https://www.whatsmydns.net

---

## 📝 **NOTES**

1. **DNS Propagation:** Takes 24-48 hours globally, but usually works within 2-4 hours
2. **SSL Certificate:** Cloudflare automatically provisions SSL - no manual setup needed
3. **Cache:** Clear browser and Cloudflare cache after migration
4. **Backup:** Keep AWS active for 48 hours as backup
5. **Monitoring:** Monitor site for 48 hours after migration

---

**Status:** Ready to migrate! Follow steps 1-8 in order.


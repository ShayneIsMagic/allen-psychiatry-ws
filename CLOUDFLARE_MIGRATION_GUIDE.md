# Cloudflare Pages Migration Guide

**Domain:** allenpsychiatry.net  
**Current Hosting:** AWS (Amazon Web Services)  
**Target Hosting:** Cloudflare Pages  
**Date:** 2025-12-30

---

## 📋 **PRE-MIGRATION CHECKLIST**

### ✅ **Codebase Ready for Cloudflare Pages**

Your site is **already configured** for Cloudflare Pages:

- ✅ **`_redirects` file** - Configured for clean URLs
- ✅ **Static site** - No server-side dependencies
- ✅ **No AWS-specific code** - Clean migration path
- ✅ **All assets local** - No external dependencies

---

## 🚀 **STEP 1: SET UP CLOUDFLARE PAGES**

### 1.1 Create Cloudflare Account

1. Go to: https://dash.cloudflare.com/sign-up
2. Sign up for a free Cloudflare account
3. Verify your email

### 1.2 Add Your Site to Cloudflare

1. In Cloudflare dashboard, click **"Add a Site"**
2. Enter: `allenpsychiatry.net`
3. Click **"Add site"**
4. Select **Free plan** (sufficient for your needs)
5. Click **"Continue"**

### 1.3 Get Cloudflare Nameservers

Cloudflare will display **two nameservers** like:
```
kate.ns.cloudflare.com
rick.ns.cloudflare.com
```

**⚠️ IMPORTANT:** Write these down - you'll need them in Step 2.

---

## 🔧 **STEP 2: UPDATE NAMESERVERS IN NAMECHEAP**

### 2.1 Access Namecheap

1. Go to: https://www.namecheap.com
2. Log in to your account
3. Navigate to: **Domain List** → **Manage** for `allenpsychiatry.net`

### 2.2 Update Nameservers

1. Find **"Nameservers"** section
2. Select **"Custom DNS"** (not "Namecheap BasicDNS")
3. Replace the 4 AWS nameservers:
   ```
   NS-1014.AWSDNS-62.NET
   NS-1062.AWSDNS-04.ORG
   NS-1943.AWSDNS-50.CO.UK
   NS-420.AWSDNS-52.COM
   ```
4. With Cloudflare's 2 nameservers (from Step 1.3):
   ```
   kate.ns.cloudflare.com
   rick.ns.cloudflare.com
   ```
5. Click **"Save"** or **"Update"**

### 2.3 Wait for DNS Propagation

- **Time:** 24-48 hours (usually faster, often within 1-2 hours)
- **Check Status:** Cloudflare dashboard will show "Active" when ready
- **Verify:** Use https://www.whatsmydns.net to check propagation

---

## 📦 **STEP 3: DEPLOY TO CLOUDFLARE PAGES**

### Option A: Deploy from Git Repository (Recommended)

#### 3.1 Connect Repository

1. In Cloudflare dashboard, go to **"Pages"**
2. Click **"Create a project"**
3. Click **"Connect to Git"**
4. Select your Git provider (GitHub, GitLab, or Bitbucket)
5. Authorize Cloudflare to access your repository
6. Select the repository containing your website

#### 3.2 Configure Build

1. **Build command:** Leave empty (static site, no build needed)
2. **Build output directory:** `/` (root)
3. **Root directory:** `/` (if your files are in root)
4. Click **"Save and Deploy"**

#### 3.3 First Deployment

- Cloudflare will automatically deploy your site
- Deployment takes 1-2 minutes
- You'll get a preview URL: `https://your-project.pages.dev`

---

### Option B: Direct Upload (Alternative)

If you don't use Git:

1. In Cloudflare Pages, click **"Create a project"**
2. Select **"Upload assets"**
3. Upload all your website files (zip or drag-and-drop)
4. Click **"Deploy site"**

---

## 🔗 **STEP 4: CONNECT CUSTOM DOMAIN**

### 4.1 Add Custom Domain

1. In your Cloudflare Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `allenpsychiatry.net`
4. Click **"Continue"**

### 4.2 Configure DNS Records

Cloudflare will automatically create DNS records. Verify these exist:

**Required DNS Records:**
```
Type: A
Name: @
Content: (Cloudflare will auto-fill)
Proxy: ON (orange cloud)

Type: CNAME
Name: www
Content: (Cloudflare will auto-fill)
Proxy: ON (orange cloud)
```

### 4.3 SSL/TLS Configuration

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to **"Full"** or **"Full (strict)"**
3. Cloudflare will automatically provision SSL certificate
4. Wait 5-10 minutes for SSL to activate

---

## ✅ **STEP 5: VERIFY DEPLOYMENT**

### 5.1 Test Your Site

1. Visit: https://allenpsychiatry.net
2. Check all pages load correctly
3. Test clean URLs: https://allenpsychiatry.net/adhd
4. Verify redirects: https://allenpsychiatry.net/adhd.html (should redirect)
5. Check images load
6. Test forms/CTAs

### 5.2 Verify Clean URLs Work

Test these URLs:
- ✅ https://allenpsychiatry.net/ (homepage)
- ✅ https://allenpsychiatry.net/adhd (clean URL)
- ✅ https://allenpsychiatry.net/adhd.html (should redirect to /adhd)
- ✅ https://allenpsychiatry.net/anxiety
- ✅ https://allenpsychiatry.net/depression
- ✅ https://allenpsychiatry.net/ptsd

### 5.3 Check Google Analytics

1. Visit your site
2. Go to GA4 Real-Time reports
3. Verify data is being collected
4. Test event tracking (click Schedule Appointment button)

---

## 🔒 **STEP 6: CLOUDFLARE SECURITY SETTINGS**

### 6.1 Enable Security Features

In Cloudflare dashboard → **Security**:

1. **WAF (Web Application Firewall):** Enable (free tier includes basic protection)
2. **Bot Fight Mode:** Enable (free tier)
3. **Auto Minify:** Enable for CSS, HTML, JavaScript (improves performance)
4. **Brotli:** Enable (compression)

### 6.2 Speed Optimization

In **Speed** section:

1. **Auto Minify:** Enable
2. **Rocket Loader:** Enable (optional - may conflict with some scripts)
3. **Mirage:** Enable (image optimization)
4. **Polish:** Enable (image compression)

---

## 📊 **STEP 7: UPDATE GOOGLE SEARCH CONSOLE**

### 7.1 Verify Domain Ownership

1. Go to: https://search.google.com/search-console
2. Add property: `https://allenpsychiatry.net`
3. Verify ownership (Cloudflare will provide verification methods)
4. Submit updated sitemap: `https://allenpsychiatry.net/sitemap.xml`

### 7.2 Request Re-indexing

1. In Search Console, go to **URL Inspection**
2. Enter: `https://allenpsychiatry.net`
3. Click **"Request Indexing"**
4. Repeat for key pages

---

## ⚠️ **IMPORTANT NOTES**

### DNS Propagation

- **Wait Time:** 24-48 hours for full DNS propagation
- **During Migration:** Your site may be temporarily unavailable
- **Best Time:** Migrate during low-traffic hours (late night/early morning)

### SSL Certificate

- Cloudflare provides **free SSL certificates**
- Certificate auto-renews
- No manual configuration needed

### Performance

- Cloudflare CDN will cache your site globally
- Faster load times worldwide
- Free tier includes:
  - Unlimited bandwidth
  - DDoS protection
  - CDN caching

### Cost

- **Cloudflare Pages:** FREE
- **Cloudflare CDN:** FREE
- **SSL Certificate:** FREE
- **Total Cost:** $0/month

---

## 🔄 **MIGRATION TIMELINE**

### Day 1 (Today):
1. ✅ Set up Cloudflare account
2. ✅ Add site to Cloudflare
3. ✅ Get nameservers
4. ✅ Update nameservers in Namecheap

### Day 1-2 (Wait):
- ⏳ DNS propagation (24-48 hours)
- ⏳ Cloudflare verification

### Day 2-3 (Deploy):
1. ✅ Deploy site to Cloudflare Pages
2. ✅ Connect custom domain
3. ✅ Configure SSL
4. ✅ Test site

### Day 3+ (Optimize):
1. ✅ Configure Cloudflare settings
2. ✅ Update Search Console
3. ✅ Monitor performance

---

## 🆘 **TROUBLESHOOTING**

### Issue: Site Not Loading After Migration

**Solution:**
1. Check DNS propagation: https://www.whatsmydns.net
2. Verify nameservers in Namecheap
3. Check Cloudflare dashboard for errors
4. Wait 24-48 hours for full propagation

### Issue: SSL Certificate Not Working

**Solution:**
1. In Cloudflare, go to SSL/TLS
2. Set mode to "Full" or "Full (strict)"
3. Wait 5-10 minutes
4. Clear browser cache

### Issue: Redirects Not Working

**Solution:**
1. Verify `_redirects` file is in root directory
2. Check Cloudflare Pages build logs
3. Ensure file is named exactly `_redirects` (no extension)

### Issue: Images Not Loading

**Solution:**
1. Check image paths are relative (not absolute)
2. Verify assets folder structure
3. Check Cloudflare Pages build logs

---

## ✅ **POST-MIGRATION CHECKLIST**

- [ ] Site loads at https://allenpsychiatry.net
- [ ] All pages accessible
- [ ] Clean URLs work (/adhd, /anxiety, etc.)
- [ ] Redirects work (.html → clean URLs)
- [ ] Images load correctly
- [ ] Google Analytics tracking
- [ ] SSL certificate active (green padlock)
- [ ] Mobile responsive
- [ ] Forms/CTAs functional
- [ ] Search Console updated
- [ ] Sitemap submitted

---

## 📞 **SUPPORT RESOURCES**

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Cloudflare Support:** https://support.cloudflare.com/
- **Namecheap Support:** https://www.namecheap.com/support/

---

## 🎯 **SUMMARY**

**Current Status:**
- ✅ Codebase ready for Cloudflare
- ✅ `_redirects` file configured
- ✅ No AWS dependencies

**Next Steps:**
1. Create Cloudflare account
2. Update nameservers in Namecheap
3. Deploy to Cloudflare Pages
4. Connect custom domain
5. Verify everything works

**Estimated Time:** 2-3 days (mostly waiting for DNS)

**Cost:** $0/month (all free tier)

---

**Status:** Ready to migrate! Follow steps 1-7 above.


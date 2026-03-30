# Fix: Custom Domain Not Showing Latest Deployment

**Issue:** Preview URL has changes, but production domain (allenpsychiatry.net) doesn't  
**Status:** 🔧 **FIX REQUIRED**  
**Date:** January 26, 2025

---

## 🔍 **PROBLEM IDENTIFIED**

- ✅ **Preview URL** (`https://5be5d5bd.allen-psychiatry-ws.pages.dev/`) has insurance modal
- ❌ **Production Domain** (`https://allenpsychiatry.net/`) does NOT have insurance modal
- ❌ **Production domain** appears "less vibrant" (likely missing CSS/JS updates)

**Root Cause:** The custom domain `allenpsychiatry.net` is not connected to the latest Cloudflare Pages deployment.

---

## 🚀 **SOLUTION: RECONNECT CUSTOM DOMAIN**

### **Step 1: Access Cloudflare Pages Settings**

1. Go to: https://dash.cloudflare.com/
2. Sign in to your Cloudflare account
3. Click **"Pages"** in the left sidebar
4. Click on your project: **"allen-psychiatry-ws"** (or similar name)

---

### **Step 2: Check Custom Domain Configuration**

1. In your Pages project, click **"Custom domains"** tab (or **"Settings"** → **"Custom domains"**)
2. You should see: `allenpsychiatry.net`
3. Check the status:
   - 🟢 **Active** = Connected (but may need update)
   - 🟡 **Pending** = Still connecting
   - 🔴 **Error** = Needs reconnection

---

### **Step 3: Reconnect Custom Domain**

**Option A: If Domain Shows as Active (Most Common Fix)**

1. Click on `allenpsychiatry.net` in the custom domains list
2. Click **"Remove"** or **"Disconnect"** (don't worry, we'll reconnect)
3. Wait 10 seconds
4. Click **"Add custom domain"** or **"Set up a custom domain"**
5. Enter: `allenpsychiatry.net`
6. Click **"Continue"** or **"Add domain"**
7. Cloudflare will verify DNS and connect it to the latest deployment
8. Wait 1-2 minutes for DNS propagation

**Option B: If Domain Shows Error or Not Listed**

1. Click **"Add custom domain"** or **"Set up a custom domain"**
2. Enter: `allenpsychiatry.net`
3. Click **"Continue"**
4. Cloudflare will show DNS records needed
5. Verify DNS records in Cloudflare DNS (should already be correct)
6. Click **"Activate domain"** or **"Continue"**

---

### **Step 4: Verify DNS Records**

1. Go to: **Cloudflare Dashboard** → **DNS** → **Records**
2. Look for these records for `allenpsychiatry.net`:
   - **Type:** `CNAME`
   - **Name:** `@` (or blank)
   - **Target:** Should point to your Pages project (e.g., `allen-psychiatry-ws.pages.dev`)
   - **Proxy status:** 🟠 Orange cloud (Proxied)

**If DNS records are missing or wrong:**
1. Add/update the CNAME record:
   - **Type:** `CNAME`
   - **Name:** `@` (for root domain)
   - **Target:** `allen-psychiatry-ws.pages.dev` (or your Pages project URL)
   - **Proxy:** 🟠 Orange (Proxied)
   - **TTL:** Auto
2. Click **"Save"**

---

### **Step 5: Force Deployment to Production**

1. In Cloudflare Pages, go to **"Deployments"** tab
2. Find the latest successful deployment (should have your insurance modal commit)
3. Click the **three dots** (⋯) next to the deployment
4. Click **"Retry deployment"** or **"Redeploy"**
5. This will ensure the custom domain points to the latest deployment

**Alternative: Promote Preview to Production**
1. In **"Deployments"** tab
2. Find the deployment that has the insurance modal (check preview URL)
3. Click **"Promote to production"** or **"Set as production"**
4. This will make it the active production deployment

---

### **Step 6: Clear All Caches**

**Cloudflare Cache:**
1. Go to: **Cloudflare Dashboard** → **Caching** → **Configuration**
2. Click **"Purge Everything"**
3. Wait 30 seconds

**Browser Cache:**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

---

### **Step 7: Verify Fix**

1. Wait 2-5 minutes for DNS/cache to propagate
2. Visit: https://allenpsychiatry.net/
3. Open browser DevTools (F12) → **Network** tab
4. Refresh the page
5. Check if `insurance-modal.js` loads (should return 200, not 404)
6. Test the insurance modal:
   - Click "Schedule Now"
   - Look for "Insurance Information" section
   - Click insurance link
   - Modal should appear

---

## 🔧 **ALTERNATIVE: MANUAL DNS UPDATE**

If the above doesn't work, manually update DNS:

1. Go to: **Cloudflare Dashboard** → **DNS** → **Records**
2. Find the CNAME record for `@` (root domain)
3. Update the **Target** to: `allen-psychiatry-ws.pages.dev`
4. Ensure **Proxy** is 🟠 Orange (Proxied)
5. Click **"Save"**
6. Wait 5-10 minutes for DNS propagation
7. Clear Cloudflare cache

---

## ⚠️ **IF STILL NOT WORKING**

### **Check Deployment Branch**

1. Go to: **Pages** → **Your Project** → **Settings** → **Builds & deployments**
2. Verify **Production branch** is set to: `main`
3. If not, change it to `main` and save

### **Check for Multiple Projects**

1. In Cloudflare Pages, check if there are multiple projects
2. Make sure `allenpsychiatry.net` is connected to the correct project
3. The project should be: `allen-psychiatry-ws` (or similar)

### **Verify Latest Deployment**

1. Go to **Deployments** tab
2. Check the commit hash of the latest deployment
3. Should match: `866376e` (insurance modal commit)
4. If not, the deployment may have failed - check logs

---

## 📋 **QUICK CHECKLIST**

- [ ] Custom domain `allenpsychiatry.net` is listed in Pages → Custom domains
- [ ] Custom domain status is "Active" (green)
- [ ] DNS CNAME record points to Pages project
- [ ] Production branch is set to `main`
- [ ] Latest deployment has commit `866376e`
- [ ] Cloudflare cache purged
- [ ] Browser cache cleared
- [ ] File exists: https://allenpsychiatry.net/insurance-modal.js (returns 200)
- [ ] Insurance modal works on live site

---

## 🎯 **EXPECTED RESULT**

After fixing:
- ✅ https://allenpsychiatry.net/ should match https://5be5d5bd.allen-psychiatry-ws.pages.dev/
- ✅ Insurance modal should work on production domain
- ✅ All CSS/JS should be up to date
- ✅ Site should look "vibrant" (all styles loading)

---

## 🆘 **STILL NOT WORKING?**

If after all steps the production domain still doesn't match:

1. **Check Cloudflare Pages Logs:**
   - Go to **Deployments** → Click on latest deployment
   - Review build logs for errors

2. **Contact Cloudflare Support:**
   - They can check if there's a domain routing issue
   - Provide them with:
     - Project name: `allen-psychiatry-ws`
     - Custom domain: `allenpsychiatry.net`
     - Issue: Custom domain not showing latest deployment

3. **Temporary Workaround:**
   - Use the preview URL until custom domain is fixed
   - But this is not ideal for production

---

**Last Updated:** January 26, 2025


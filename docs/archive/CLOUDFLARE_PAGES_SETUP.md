# Cloudflare Pages Setup - Complete Guide

**Date:** 2025-12-31  
**Status:** 🔧 **SETUP REQUIRED**

---

## ✅ **THE COMMIT IS CORRECT**

The commit you're looking at (removing GitHub Pages workflow) is **CORRECT**:
- ✅ You're using Cloudflare Pages, not GitHub Pages
- ✅ Removing the GitHub Pages workflow is the right move
- ✅ This doesn't affect Cloudflare Pages at all

**Cloudflare Pages doesn't need that workflow** - it has its own deployment system.

---

## 🔧 **WHAT NEEDS TO HAPPEN FOR CLOUDFLARE PAGES**

### **Step 1: Connect GitHub Repository to Cloudflare Pages**

1. **Go to Cloudflare Dashboard:**
   - Click **"Pages"** in left sidebar
   - Click **"Create a project"** (or find existing `allen-psychiatry-ws`)

2. **Connect to Git:**
   - Click **"Connect to Git"**
   - Select **GitHub**
   - Authorize Cloudflare to access your repositories
   - Select: `ShayneIsMagic/allen-psychiatry-ws`

3. **Configure Build Settings:**
   - **Framework preset:** None (static site)
   - **Build command:** (leave empty - no build needed)
   - **Build output directory:** `/` (root)
   - **Root directory:** `/` (if files are in root)

4. **Deploy:**
   - Click **"Save and Deploy"**
   - Cloudflare will deploy your site
   - You'll get a preview URL: `https://allen-psychiatry-ws.pages.dev`

---

### **Step 2: Set Production Branch**

1. **Go to Project Settings:**
   - Pages → `allen-psychiatry-ws` → **Settings**

2. **Production Branch:**
   - Set to: **`main`**
   - This ensures pushes to `main` trigger deployments

---

### **Step 3: Connect Custom Domain**

1. **Go to Custom Domains:**
   - Pages → `allen-psychiatry-ws` → **Custom domains**

2. **Add Domain:**
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Click **"Continue"**
   - Wait for verification (usually instant)
   - Status should show **"Active"**

3. **Add www (Optional):**
   - Click **"Add another domain"**
   - Enter: `www.allenpsychiatry.net`
   - Wait for verification

---

### **Step 4: Configure DNS Records**

1. **Go to DNS:**
   - Cloudflare Dashboard → `allenpsychiatry.net` → **DNS** → **Records**

2. **Verify/Add CNAME Records:**
   - **CNAME:** `allenpsychiatry.net` → `allen-psychiatry-ws.pages.dev` (Proxied)
   - **CNAME:** `www` → `allen-psychiatry-ws.pages.dev` (Proxied)

3. **Make Sure They're Proxied:**
   - Both should show **orange cloud** (Proxied)
   - If not, click edit and toggle to Proxied

---

### **Step 5: SSL/TLS Configuration**

1. **Go to SSL/TLS:**
   - Cloudflare Dashboard → `allenpsychiatry.net` → **SSL/TLS**

2. **Set Encryption Mode:**
   - Select **"Full (strict)"**
   - Click **"Save"**

3. **Verify Certificate:**
   - Go to **SSL/TLS** → **Edge Certificates**
   - Should show certificate for `allenpsychiatry.net` and `*.allenpsychiatry.net`
   - Status should be **"Active"**

---

## 🚫 **AWS - DO YOU NEED TO DO ANYTHING?**

### **Short Answer: NO - You Don't Need to Touch AWS**

### **Why:**
- ✅ Your domain is now using **Cloudflare nameservers**
- ✅ DNS is managed by **Cloudflare**, not AWS
- ✅ AWS is no longer involved in hosting
- ✅ No AWS configuration needed

### **What Happened:**
1. **Before:** Domain pointed to AWS nameservers → AWS hosted site
2. **Now:** Domain points to Cloudflare nameservers → Cloudflare Pages hosts site
3. **AWS:** No longer involved, no action needed

### **If You Want to Clean Up AWS (Optional):**
- You can delete the old AWS hosting resources (if any)
- But it's not necessary - they're just sitting there unused
- No impact on your Cloudflare site

---

## 🔍 **WHY IT MIGHT NOT BE WORKING**

### **Check These:**

1. **Is Cloudflare Pages Connected to GitHub?**
   - Pages → `allen-psychiatry-ws` → Settings
   - Should show GitHub repository connected
   - Should show recent deployments

2. **Is Custom Domain Active?**
   - Pages → `allen-psychiatry-ws` → Custom domains
   - Should show `allenpsychiatry.net` as **"Active"**

3. **Are DNS Records Correct?**
   - DNS → Records
   - CNAMEs should point to `allen-psychiatry-ws.pages.dev`
   - Should be **Proxied** (orange cloud)

4. **Is SSL/TLS Mode Correct?**
   - SSL/TLS → Overview
   - Should be **"Full"** or **"Full (strict)"**

---

## 📋 **QUICK CHECKLIST**

- [ ] Cloudflare Pages connected to GitHub repo
- [ ] Production branch set to `main`
- [ ] Custom domain `allenpsychiatry.net` added and Active
- [ ] DNS CNAME records pointing to Pages project
- [ ] DNS records are Proxied (orange cloud)
- [ ] SSL/TLS mode set to "Full (strict)"
- [ ] SSL certificate Active

---

## 🎯 **MOST LIKELY ISSUE**

If the site isn't working, it's probably:
1. **Custom domain not connected in Pages** (90%)
2. **DNS records not Proxied** (5%)
3. **SSL/TLS mode wrong** (3%)
4. **Pages not connected to GitHub** (2%)

---

## ✅ **SUMMARY**

**The Commit:**
- ✅ Correct - removing GitHub Pages workflow is right
- ✅ Doesn't affect Cloudflare Pages

**Cloudflare Setup:**
- ✅ Connect GitHub repo to Cloudflare Pages
- ✅ Add custom domain in Pages
- ✅ Verify DNS records
- ✅ Set SSL/TLS mode

**AWS:**
- ❌ **NO action needed**
- ❌ AWS is no longer involved
- ❌ No login required

**Status:** Check if Cloudflare Pages is connected to your GitHub repo and if custom domain is Active!


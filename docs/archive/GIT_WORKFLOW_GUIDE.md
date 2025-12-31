# Git Workflow Guide for Cloudflare Deployment

**Date:** 2025-12-30  
**Recommended Workflow:** Dev → Main → Deploy

---

## 📋 **RECOMMENDED WORKFLOW**

### ✅ **Yes - Push to Dev First, Then Main**

**Why:**
1. **Testing** - Test changes on dev before production
2. **Safety** - Catch issues before they hit main
3. **Best Practice** - Standard Git workflow
4. **Cloudflare** - Can deploy from dev branch for testing

---

## 🚀 **STEP-BY-STEP WORKFLOW**

### **Step 1: Commit Changes to Dev Branch**

```bash
# Make sure you're on dev branch
git checkout dev

# If dev doesn't exist, create it
git checkout -b dev

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Add Cloudflare configuration, GA4 tracking, and Utah SEO optimization"

# Push to dev
git push origin dev
```

### **Step 2: Test on Dev (Optional but Recommended)**

If you want to test on Cloudflare Pages first:

1. **Deploy dev branch to Cloudflare Pages**
   - Create a new project in Cloudflare Pages
   - Connect to your Git repository
   - Set branch to `dev`
   - Deploy and test

2. **Verify everything works:**
   - All pages load
   - Clean URLs work
   - Redirects work
   - GA4 tracking works
   - Images load

### **Step 3: Merge Dev to Main**

```bash
# Switch to main branch
git checkout main

# Pull latest changes (if working with team)
git pull origin main

# Merge dev into main
git merge dev

# Push to main
git push origin main
```

### **Step 4: Deploy Main to Production**

1. **In Cloudflare Pages:**
   - Update project to use `main` branch
   - Or create production project pointing to `main`
   - Deploy

2. **Verify production:**
   - Test https://allenpsychiatry.net
   - Check all functionality
   - Monitor GA4 for traffic

---

## 🔄 **ALTERNATIVE: Direct to Main (Not Recommended)**

If you're confident and want to skip dev:

```bash
# Make sure you're on main
git checkout main

# Add and commit
git add .
git commit -m "Add Cloudflare configuration and SEO optimizations"

# Push directly to main
git push origin main
```

**⚠️ Risk:** Changes go directly to production without testing

---

## 📊 **CURRENT STATUS CHECK**

Let me check your current Git status:

```bash
# Check current branch
git branch

# Check uncommitted changes
git status

# See what files changed
git diff --name-only
```

---

## ✅ **RECOMMENDED APPROACH**

### **For Cloudflare Migration:**

1. **Commit to dev:**
   ```bash
   git checkout dev
   git add .
   git commit -m "Prepare for Cloudflare migration - all SEO and tracking updates"
   git push origin dev
   ```

2. **Test on Cloudflare (dev branch):**
   - Deploy dev branch to Cloudflare Pages
   - Test everything works
   - Fix any issues

3. **Merge to main:**
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

4. **Deploy main to production:**
   - Update Cloudflare Pages to use main branch
   - Or point custom domain to main branch deployment

---

## 🎯 **CLOUDFLARE PAGES BRANCH SETUP**

### **Option A: Single Production Site**

- **Branch:** `main`
- **Custom Domain:** `allenpsychiatry.net`
- **Deploy:** Automatically on push to main

### **Option B: Dev + Production (Recommended)**

- **Dev Site:**
  - **Branch:** `dev`
  - **URL:** `allenpsychiatry-dev.pages.dev`
  - **Purpose:** Testing

- **Production Site:**
  - **Branch:** `main`
  - **Custom Domain:** `allenpsychiatry.net`
  - **Purpose:** Live site

---

## 📝 **COMMIT MESSAGE SUGGESTIONS**

Good commit messages for this migration:

```bash
# For dev branch
git commit -m "feat: Add Cloudflare configuration and complete Utah SEO optimization

- Add GA4 tracking to all 9 pages
- Implement comprehensive service area content (41+ cities)
- Add location-based meta keywords
- Update schema markup with 20+ cities
- Configure _redirects for clean URLs
- Add service area sections to all service pages
- Ready for Cloudflare Pages deployment"

# For main branch (after testing)
git commit -m "chore: Merge dev to main - Cloudflare migration ready"
```

---

## ⚠️ **IMPORTANT NOTES**

### **Before Pushing:**

1. **Review changes:**
   ```bash
   git status
   git diff
   ```

2. **Don't commit:**
   - `node_modules/` (if any)
   - `.env` files (if any)
   - Local config files
   - `server.js` (not needed for Cloudflare)

3. **Do commit:**
   - All HTML files
   - CSS and JS files
   - `_redirects` file
   - `sitemap.xml`
   - `robots.txt`
   - `assets/` folder

### **Files to Exclude (if in .gitignore):**

- `server.js` - Not needed for Cloudflare (but OK to keep in repo)
- Development documentation files (optional)

---

## 🚀 **QUICK START COMMANDS**

### **If dev branch exists:**

```bash
git checkout dev
git add .
git commit -m "Cloudflare migration preparation - SEO and tracking complete"
git push origin dev
```

### **If dev branch doesn't exist:**

```bash
git checkout -b dev
git add .
git commit -m "Cloudflare migration preparation - SEO and tracking complete"
git push origin dev
```

### **Then merge to main:**

```bash
git checkout main
git merge dev
git push origin main
```

---

## ✅ **SUMMARY**

**Recommended Workflow:**
1. ✅ Commit to `dev` branch
2. ✅ Test on Cloudflare (optional)
3. ✅ Merge `dev` → `main`
4. ✅ Deploy `main` to production

**Why:**
- Safety first
- Test before production
- Easy rollback if issues
- Standard best practice

---

**Next Step:** Run the commands above to push to dev, then merge to main.


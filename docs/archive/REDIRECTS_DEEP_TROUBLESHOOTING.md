# Redirects Deep Troubleshooting

**Date:** 2025-12-30  
**Status:** 🔍 **INVESTIGATING**

---

## ✅ **FILE FORMAT: CORRECT**

**Verified:**
- ✅ File exists: `_redirects`
- ✅ Format: Single spaces (not tabs)
- ✅ 18 rules total
- ✅ 9 redirects (301)
- ✅ 9 rewrites (200)
- ✅ No syntax errors

**File is correct!** The issue must be elsewhere.

---

## 🔍 **POSSIBLE ISSUES**

### **Issue 1: Cloudflare Pages Not Reading File** ⚠️

**Check:**
1. Go to Cloudflare Dashboard → Pages → Your Project
2. Check latest deployment
3. Look for `_redirects` file in deployment files
4. Check deployment logs for errors

**Fix:**
- Ensure file is in root directory
- Ensure file is committed to Git
- Ensure file is in build output

---

### **Issue 2: DNS Not Proxied** ⚠️

**Critical:** Redirects ONLY work if DNS is proxied!

**Check:**
1. Cloudflare Dashboard → DNS
2. Look for orange cloud icon (proxied)
3. If gray cloud, click to enable proxy

**Fix:**
- Enable proxy (orange cloud) for all DNS records
- Wait 5 minutes for propagation

---

### **Issue 3: Cache Issues** ⚠️

**Problem:** Browser/Cloudflare cache showing old behavior

**Fix:**
1. **Browser:** Hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`)
2. **Cloudflare:** Dashboard → Caching → Purge Everything
3. **Test in:** Incognito/private window

---

### **Issue 4: Cloudflare Auto-Serving Conflict** ⚠️

**Problem:** Cloudflare Pages automatically serves `/adhd.html` as `/adhd`

**This might conflict with our explicit redirects!**

**Solution:** We may need to simplify - remove 200 rewrites and let Cloudflare handle it automatically.

---

### **Issue 5: Build Output Directory** ⚠️

**Problem:** File not in build output

**Check:**
- If using build process, file must be in output directory
- For static sites, file should be in root

---

## 🎯 **WHAT TO CHECK RIGHT NOW**

### **1. What's Actually Happening?**

**Test these URLs:**
- `https://allen-psychiatry-ws.pages.dev/adhd.html` - What happens?
- `https://allen-psychiatry-ws.pages.dev/adhd` - What happens?

**Expected:**
- `/adhd.html` → Should redirect (301) to `/adhd`
- `/adhd` → Should serve `adhd.html` (200)

**What are you seeing instead?**

---

### **2. Check Cloudflare Dashboard**

1. **Deployment:**
   - Is `_redirects` file in the deployment?
   - Any errors in deployment logs?

2. **DNS:**
   - Are records proxied (orange cloud)?
   - If gray cloud, redirects won't work!

3. **Cache:**
   - Purge cache
   - Wait 30 seconds
   - Test again

---

### **3. Test in Incognito**

**Test in private/incognito window:**
- No browser cache
- Fresh request
- Should show actual behavior

---

## 🔧 **POTENTIAL FIX: SIMPLIFY REDIRECTS**

**Maybe the issue is having both 301 and 200 rules?**

**Try this simplified version:**

```
# Only redirect old .html URLs to clean URLs
/adhd.html /adhd 301
/anxiety.html /anxiety 301
/depression.html /depression 301
/ptsd.html /ptsd 301
/provo.html /provo 301
/rural.html /rural 301
/telehealth.html /telehealth 301
/about.html /about 301
/index.html / 301
```

**Why:**
- Cloudflare Pages automatically serves `/adhd.html` as `/adhd`
- We only need redirects for SEO (301)
- Simpler = less conflicts

---

## 📋 **DEBUGGING CHECKLIST**

- [ ] File format is correct ✅ (verified)
- [ ] File is in root directory ✅
- [ ] File is committed to Git ✅
- [ ] File is in Cloudflare deployment ⚠️ (check dashboard)
- [ ] DNS is proxied ⚠️ (check dashboard)
- [ ] Cache is cleared ⚠️ (do this)
- [ ] Tested in incognito ⚠️ (do this)
- [ ] Checked deployment logs ⚠️ (check dashboard)

---

## 🆘 **NEED MORE INFO**

**To help debug, please tell me:**

1. **What URL are you testing?**
   - Example: `https://allen-psychiatry-ws.pages.dev/adhd.html`

2. **What happens?**
   - Shows 404?
   - Shows page but URL doesn't change?
   - Nothing happens?
   - Error message?

3. **DNS Status:**
   - Are DNS records proxied (orange cloud)?
   - Or DNS only (gray cloud)?

4. **Deployment:**
   - Is `_redirects` file visible in Cloudflare deployment?
   - Any errors in deployment logs?

---

**Status:** File is correct - need to check Cloudflare configuration and actual behavior.


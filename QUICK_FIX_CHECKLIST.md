# Quick Fix Checklist - Site Not Loading

**Do these in order - takes 5 minutes:**

---

## ✅ **CHECK 1: Custom Domain in Pages** (MOST IMPORTANT!)

**Go to:** Cloudflare Dashboard → Pages → `allen-psychiatry-ws` → **Custom domains**

**Question:** Is `allenpsychiatry.net` listed and showing "Active"?

- ✅ **YES, Active:** Skip to Check 2
- ❌ **NO or Not Active:** 
  - Click "Set up a custom domain"
  - Enter: `allenpsychiatry.net`
  - Wait for verification
  - Should show "Active" within 1 minute

---

## ✅ **CHECK 2: Test Deployment URL**

**Visit:** `https://5acb28bf.allen-psychiatry-ws.pages.dev`

**Question:** Does this page load?

- ✅ **YES:** Custom domain is the issue (go to Check 3)
- ❌ **NO:** Deployment issue (check Pages deployments)

---

## ✅ **CHECK 3: DNS Propagation**

**Visit:** https://www.whatsmydns.net/#A/allenpsychiatry.net

**Question:** Are Cloudflare IPs showing globally?

- ✅ **YES:** DNS is working (go to Check 4)
- ❌ **NO:** Wait 15-30 minutes, DNS still propagating

---

## ✅ **CHECK 4: Clear Cache**

1. **Browser:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or try incognito/private mode

2. **Cloudflare:**
   - Dashboard → Caching → Purge Everything

3. **Test Again:**
   - Visit: `https://allenpsychiatry.net`

---

## 🎯 **MOST LIKELY: Custom Domain Not Connected**

**90% of the time, the issue is:**
- Custom domain not added in Pages
- Or custom domain not showing "Active"

**Fix:** Pages → Custom domains → Add `allenpsychiatry.net`

---

**Do these 4 checks - will identify the issue!**


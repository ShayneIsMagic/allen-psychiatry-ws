# Clean URLs Implementation Guide

## ✅ What Was Done

1. **Updated `_redirects` file** - Handles clean URLs for Cloudflare Pages
2. **Created `sitemap.xml`** - Uses clean URLs
3. **Created `robots.txt`** - Points to clean sitemap
4. **Created update script** - `update-to-clean-urls.js` to update all internal links

## 🚀 How Clean URLs Work

### Before (Current):
- `allenpsychiatry.net/adhd.html`
- `allenpsychiatry.net/anxiety.html`

### After (Clean):
- `allenpsychiatry.net/adhd`
- `allenpsychiatry.net/anxiety`

### How It Works:
1. User visits `/adhd` → Server serves `adhd.html` (200 OK)
2. User visits `/adhd.html` → Server redirects to `/adhd` (301 Permanent)
3. Search engines update their index to use clean URLs
4. Old `.html` URLs still work (redirected)

## 📋 Implementation Steps

### Step 1: Update Internal Links (Run Script)

```bash
node update-to-clean-urls.js
```

This will:
- Update all `href="adhd.html"` to `href="/adhd"`
- Update canonical URLs
- Update Open Graph URLs
- Keep `index.html` links as `/` (homepage)

### Step 2: Test Locally

```bash
# Start server
node server.js

# Test clean URLs
curl -I http://localhost:3001/adhd
# Should return 200 OK

# Test redirects
curl -I http://localhost:3001/adhd.html
# Should return 301 Redirect to /adhd
```

### Step 3: Verify in Browser

1. Visit: http://localhost:3001/adhd
2. Should load the page (no redirect)
3. Check browser console for any broken links
4. Test navigation between pages

### Step 4: Deploy to Production

1. Commit changes to git
2. Push to repository
3. Cloudflare Pages will automatically deploy
4. Test on live site: https://allenpsychiatry.net/adhd

## ⚠️ Important Notes

### Files That Need Manual Review:

1. **JavaScript files** - May have hardcoded URLs
   - Check: `config.js`, `patient-portal-modal.js`, etc.

2. **External links** - Don't change these
   - AdvancedMD portal links stay as-is
   - External websites stay as-is

3. **Anchor links** - Keep hash fragments
   - `index.html#services` → `/#services` ✅
   - Don't remove `#services` part

### Testing Checklist:

- [ ] All internal navigation works
- [ ] Service page links work
- [ ] Footer links work
- [ ] Breadcrumb links work (if implemented)
- [ ] Canonical URLs updated
- [ ] Open Graph URLs updated
- [ ] Sitemap uses clean URLs
- [ ] Old .html URLs redirect properly
- [ ] No 404 errors in browser console

## 🔍 Verification

### Check Redirects Work:
```bash
# Should redirect (301)
curl -I https://allenpsychiatry.net/adhd.html

# Should serve page (200)
curl -I https://allenpsychiatry.net/adhd
```

### Check Internal Links:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Navigate through site
4. Look for any 404 errors
5. Check all links resolve correctly

## 📊 SEO Benefits

✅ **Professional appearance** - Clean URLs look better  
✅ **Better user experience** - Easier to remember and share  
✅ **SEO improvement** - Search engines prefer clean URLs  
✅ **Social sharing** - Cleaner URLs in social media posts  
✅ **Backward compatible** - Old URLs still work via redirects  

## 🎯 Next Steps After Clean URLs

1. Submit updated sitemap to Google Search Console
2. Monitor redirects in Google Search Console
3. Update any external links pointing to your site (if possible)
4. Monitor analytics for any broken link errors

---

**Status:** Ready to implement. Run the update script when ready.


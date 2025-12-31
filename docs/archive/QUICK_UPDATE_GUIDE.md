# Quick Update Guide - External Links

## 🚀 Common Updates

### Change Patient Portal URL
```javascript
// In config.js, line 7:
url: "https://YOUR-NEW-PORTAL-URL.com/login"
```

### Change Scheduling System
```javascript
// In config.js, line 13:
url: "https://YOUR-NEW-SCHEDULING-SYSTEM.com/book"
```

### Add New Tool
```javascript
// In config.js, add to futureTools section (around line 45):
yourNewTool: {
    url: "https://your-new-tool.com",
    linkText: "Your Tool Name",
    openInNewWindow: true
}
```

## 🔧 How to Update

1. **Edit `config.js`** - Make your changes
2. **Test locally** - Open HTML files in browser to verify
3. **Commit changes**:
   ```bash
   git add config.js
   git commit -m "Update external links configuration"
   git push origin main
   ```
4. **Deploy** - Cloudflare Pages will auto-deploy

## 📋 What Gets Updated Automatically

- ✅ All Patient Portal links
- ✅ All Schedule Now buttons  
- ✅ All Schedule Appointment buttons
- ✅ All inline scheduling links
- ✅ Contact information (if you update it)

## 🆕 Adding New Tools

### Step 1: Add to config.js
```javascript
futureTools: {
    prescriptionRefill: {
        url: "https://prescriptions.allenpsychiatry.com",
        linkText: "Refill Prescription", 
        openInNewWindow: true
    }
}
```

### Step 2: Use in HTML
```html
<!-- Add this to any page where you want the link -->
<script>
document.write(`<a href="${ALLEN_PSYCHIATRY_CONFIG.futureTools.prescriptionRefill.url}" target="_blank">${ALLEN_PSYCHIATRY_CONFIG.futureTools.prescriptionRefill.linkText}</a>`);
</script>
```

## 🚨 Important Notes

- **Always test** changes before deploying
- **Backup first** - commit current config.js before making changes
- **Check all pages** - verify links work on all pages
- **Mobile friendly** - test on mobile devices too

## 📞 Need Help?

1. Check `EXTERNAL_LINKS_CONFIG.md` for detailed documentation
2. Review `config.js` file structure
3. Test in staging environment first
4. Contact development team if needed

---

**Remember:** One change in `config.js` updates the entire website! 🎉

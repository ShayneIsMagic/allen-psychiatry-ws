# Quick Setup Reference Card
## Google Analytics, Search Console & Cloudflare

**Last Updated:** January 15, 2025

---

## 🎯 **QUICK ACTIONS (Do These First)**

### **1. Mark GA4 Conversions (15 minutes)**
**Link:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/explorer

**Steps:**
1. Admin → Events
2. Mark as conversion:
   - ✅ `schedule_appointment_click`
   - ✅ `phone_call_click`
   - ✅ `email_click`

---

### **2. Set Up Google Search Console (30 minutes)**
**Link:** https://search.google.com/search-console

**Steps:**
1. Add Property: `https://allenpsychiatry.net`
2. Verify via DNS (Cloudflare)
3. Submit sitemap: `sitemap.xml`
4. Request indexing for 9 key pages

---

### **3. Link GA4 to Search Console (5 minutes)**
**In Search Console:**
- Settings → Google Analytics property → Select GA4 property

---

## ✅ **VERIFICATION CHECKLIST**

### **Google Analytics:**
- [ ] Tracking ID: `G-LKYXFGGJSP` on all pages
- [ ] Conversions marked
- [ ] Real-time tracking works
- [ ] No console errors

### **Google Search Console:**
- [ ] Site verified
- [ ] Sitemap submitted
- [ ] Key pages requested for indexing
- [ ] Linked to GA4

### **Cloudflare:**
- [ ] HTTPS working
- [ ] SSL/TLS: Full or Full strict
- [ ] Cache headers configured
- [ ] CSP allows Google domains

### **GitHub:**
- [ ] All code committed
- [ ] Changes pushed to main branch
- [ ] Cloudflare Pages auto-deploying

---

## 🔗 **KEY LINKS**

- **GA4 Dashboard:** https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/a357957755p492555456/reports/explorer
- **Search Console:** https://search.google.com/search-console
- **Cloudflare:** https://dash.cloudflare.com/
- **GitHub Repo:** https://github.com/ShayneIsMagic/allen-psychiatry-ws

---

## 📊 **CURRENT CONFIGURATION**

**GA4 Property ID:** `a357957755p492555456`  
**GA4 Tracking ID:** `G-LKYXFGGJSP`  
**Website:** https://allenpsychiatry.net  
**Sitemap:** https://allenpsychiatry.net/sitemap.xml  
**Hosting:** Cloudflare Pages  
**Repository:** https://github.com/ShayneIsMagic/allen-psychiatry-ws

---

## 🚨 **TROUBLESHOOTING**

**GA4 not tracking?**
- Check CSP allows `www.googletagmanager.com` ✅ (already configured)
- Check browser console for errors
- Test in incognito mode

**Search Console not verifying?**
- Wait 10-15 min after DNS change
- Check DNS record in Cloudflare
- Try HTML file method

**Cloudflare issues?**
- Check SSL/TLS mode: Full
- Verify cache settings
- Check _headers file is deployed

---

**Status:** ✅ **READY TO SET UP**  
**Total Time:** ~1 hour for complete setup


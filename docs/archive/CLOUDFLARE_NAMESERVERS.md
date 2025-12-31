# Cloudflare Nameservers for allenpsychiatry.net

**Date:** 2025-12-30  
**Domain:** allenpsychiatry.net  
**Registrar:** Namecheap

---

## 🔧 **NAMESERVERS TO USE**

When updating nameservers in Namecheap, replace the current AWS nameservers with:

```
bristol.ns.cloudflare.com
houston.ns.cloudflare.com
```

---

## 📋 **INSTRUCTIONS FOR NAMECHEAP**

1. Log in to Namecheap: https://www.namecheap.com
2. Go to **Domain List**
3. Click **Manage** next to `allenpsychiatry.net`
4. Find **"Nameservers"** section
5. Select **"Custom DNS"** (not "Namecheap BasicDNS")
6. Replace the 4 AWS nameservers with the 2 Cloudflare nameservers:
   - `bristol.ns.cloudflare.com`
   - `houston.ns.cloudflare.com`
7. Click **"Save"** or **"Update"**

---

## ⏱️ **DNS PROPAGATION**

- **Time:** 24-48 hours (usually faster, often within 1-2 hours)
- **Check Status:** Cloudflare dashboard will show "Active" when ready
- **Verify:** Use https://www.whatsmydns.net to check propagation

---

## ✅ **VERIFICATION**

After updating nameservers:

1. Cloudflare dashboard will show domain as "Active"
2. DNS records will be managed in Cloudflare (not Namecheap)
3. SSL certificate will be automatically provisioned
4. Site will be accessible via Cloudflare's CDN

---

**Status:** Ready to update nameservers in Namecheap


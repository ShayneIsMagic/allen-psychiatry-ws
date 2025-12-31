# Update DNS to Latest Deployment

**Old Deployment:** `a349d53a.allen-psychiatry-ws.pages.dev`  
**New Deployment:** `5acb28bf.allen-psychiatry-ws.pages.dev`  
**Action:** Update DNS records to point to latest deployment

---

## 🔧 **UPDATE DNS RECORDS**

### **Step 1: Update CNAME Records in Cloudflare**

1. **Log into Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com
   - Click on `allenpsychiatry.net`
   - Go to **DNS → Records**

2. **Update Root Domain CNAME:**
   - Find CNAME record for `@` (or `allenpsychiatry.net`)
   - Click **"Edit"**
   - Change **Target** from: `a349d53a.allen-psychiatry-ws.pages.dev`
   - To: `5acb28bf.allen-psychiatry-ws.pages.dev`
   - Make sure **Proxy status** is **"Proxied"** (orange cloud)
   - Click **"Save"**

3. **Update www CNAME:**
   - Find CNAME record for `www`
   - Click **"Edit"**
   - Change **Target** from: `a349d53a.allen-psychiatry-ws.pages.dev`
   - To: `5acb28bf.allen-psychiatry-ws.pages.dev`
   - Make sure **Proxy status** is **"Proxied"** (orange cloud)
   - Click **"Save"**

---

### **Step 2: Verify Custom Domain in Pages**

1. **Go to Cloudflare Pages**
   - Pages → `allen-psychiatry-ws` → **Custom domains**

2. **Check Domain Connection:**
   - Should see `allenpsychiatry.net` listed
   - Status should be **"Active"**
   - Should automatically point to latest deployment

3. **If Not Connected:**
   - Click **"Set up a custom domain"**
   - Enter: `allenpsychiatry.net`
   - Cloudflare will auto-configure to latest deployment

---

## ✅ **FINAL DNS RECORDS**

After update, you should have:

```
Type: CNAME
Name: @ (or allenpsychiatry.net)
Target: 5acb28bf.allen-psychiatry-ws.pages.dev
Proxy: Proxied ✅

Type: CNAME
Name: www
Target: 5acb28bf.allen-psychiatry-ws.pages.dev
Proxy: Proxied ✅
```

---

## ⏱️ **PROPAGATION**

After updating DNS records:
- **Wait 5-15 minutes** for DNS to update
- **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
- **Test:** Visit `https://allenpsychiatry.net`
- Should load latest deployment

---

## 🎯 **NOTE ABOUT DEPLOYMENT URLs**

Cloudflare Pages creates a new deployment URL for each deployment. However:

- ✅ **Custom domains** automatically point to the **latest production deployment**
- ✅ You don't need to update DNS every time there's a new deployment
- ✅ Once custom domain is connected, it stays connected

**But for initial setup:** Make sure DNS points to the latest deployment URL.

---

**Status:** Update DNS records to point to `5acb28bf.allen-psychiatry-ws.pages.dev`


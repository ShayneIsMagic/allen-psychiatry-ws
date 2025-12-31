# DNS Records Fix - Step by Step

**Current Issue:** A and AAAA records for root domain need to be removed, CNAME needs to be added

---

## 🔴 **CURRENT PROBLEM**

You have:
- ❌ **A record** for `allenpsychiatry.net` → `172.67.153.70` (needs to be deleted)
- ❌ **AAAA records** for `allenpsychiatry.net` → IPv6 addresses (needs to be deleted)
- ⚠️ **CNAME** for `www` → `allen-psychiatry-ws.pages.dev` (wrong domain - needs fixing)
- ❌ **Missing** CNAME for root domain `@`

---

## ✅ **WHAT YOU NEED**

For Cloudflare Pages, you need:
- ✅ **CNAME** for `@` (root) → `a349d53a.allen-psychiatry-ws.pages.dev`
- ✅ **CNAME** for `www` → `a349d53a.allen-psychiatry-ws.pages.dev`
- ✅ Keep MX records (for email)
- ✅ Keep TXT record (for email)

---

## 📋 **STEP-BY-STEP FIX**

### **Step 1: Delete A Record**

1. Find the **A record** for `allenpsychiatry.net` → `172.67.153.70`
2. Click **"Edit"** (or the row to expand it)
3. Click **"Delete"** button
4. Confirm deletion

### **Step 2: Delete AAAA Records**

1. Find the **first AAAA record** for `allenpsychiatry.net`
2. Click **"Edit"**
3. Click **"Delete"**
4. Confirm deletion
5. Repeat for the **second AAAA record**

### **Step 3: Fix www CNAME**

1. Find the **CNAME** record for `www` → `allen-psychiatry-ws.pages.dev`
2. Click **"Edit"**
3. Change **Content** from: `allen-psychiatry-ws.pages.dev`
4. To: `a349d53a.allen-psychiatry-ws.pages.dev`
5. Make sure **Proxy status** is **"Proxied"** (orange cloud)
6. Click **"Save"**

### **Step 4: Add Root Domain CNAME**

1. Click **"Add record"** button
2. Select **Type:** `CNAME`
3. Enter **Name:** `@` (or `allenpsychiatry.net`)
4. Enter **Target:** `a349d53a.allen-psychiatry-ws.pages.dev`
5. Set **Proxy status:** **"Proxied"** (orange cloud) ✅
6. Click **"Save"**

---

## ✅ **FINAL DNS RECORDS (What You Should Have)**

After fixing, you should have:

```
Type: CNAME
Name: @ (or allenpsychiatry.net)
Content: a349d53a.allen-psychiatry-ws.pages.dev
Proxy: Proxied ✅

Type: CNAME
Name: www
Content: a349d53a.allen-psychiatry-ws.pages.dev
Proxy: Proxied ✅

Type: MX
Name: allenpsychiatry.net
Content: mx1.privateemail.com
Priority: 10
Proxy: DNS only ✅

Type: MX
Name: allenpsychiatry.net
Content: mx2.privateemail.com
Priority: 10
Proxy: DNS only ✅

Type: TXT
Name: allenpsychiatry.net
Content: "v=spf1 include:spf.privateemail.com ~all"
Proxy: DNS only ✅
```

**NO A or AAAA records for root domain!**

---

## 🎯 **QUICK REFERENCE**

**Delete:**
- ❌ A record: `allenpsychiatry.net` → `172.67.153.70`
- ❌ AAAA records: `allenpsychiatry.net` → IPv6 addresses

**Add:**
- ✅ CNAME: `@` → `a349d53a.allen-psychiatry-ws.pages.dev` (Proxied)

**Fix:**
- ✅ CNAME: `www` → `a349d53a.allen-psychiatry-ws.pages.dev` (Proxied)

**Keep:**
- ✅ MX records (for email)
- ✅ TXT record (for email)

---

## ⏱️ **AFTER MAKING CHANGES**

1. **Wait 1-2 minutes** for DNS to update
2. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Test:** Visit `https://allenpsychiatry.net`
4. **Should work!** No more Error 1000

---

**Status:** Follow steps 1-4 above to fix DNS records.


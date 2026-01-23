# Cloudflare DNS Verification - Quick Reference

**Purpose:** Add Google Search Console verification TXT record to Cloudflare

---

## 📋 **STEP-BY-STEP INSTRUCTIONS**

### **Step 1: Get Verification Code from Google**

1. In Google Search Console, select **"DNS"** verification method
2. Google will show you a TXT record like:
   ```
   google-site-verification=abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567yz
   ```
3. **Copy the ENTIRE string** (everything after `google-site-verification=`)

---

### **Step 2: Add TXT Record to Cloudflare**

1. **Log into Cloudflare:**
   - Go to: https://dash.cloudflare.com/
   - Sign in with your Cloudflare account

2. **Select Your Domain:**
   - Click on **"allenpsychiatry.net"** from your domain list

3. **Navigate to DNS:**
   - Click **"DNS"** in the left sidebar
   - You'll see your existing DNS records

4. **Add New Record:**
   - Click the **"Add record"** button (usually blue, top right)

5. **Configure the TXT Record:**
   - **Type:** Select `TXT` from dropdown
   - **Name:** Enter `@` (or leave blank for root domain)
   - **Content:** Paste the ENTIRE verification code from Google
     - Example: `google-site-verification=abc123xyz789...`
   - **TTL:** Select `Auto` (or `3600` if Auto not available)
   - **Proxy status:** **IMPORTANT** - Click the cloud icon to make it **gray** (DNS only)
     - Gray cloud = DNS only (correct)
     - Orange cloud = Proxied (wrong - will break verification)

6. **Save:**
   - Click **"Save"** button
   - Record will appear in your DNS list

---

### **Step 3: Verify DNS Propagation**

1. **Wait 5-10 minutes** for DNS to propagate

2. **Check Propagation:**
   - Go to: https://dnschecker.org/
   - Select **"TXT"** record type
   - Enter domain: `allenpsychiatry.net`
   - Click **"Search"**
   - You should see your verification code in the results

3. **Alternative Check:**
   - Use command line: `nslookup -type=TXT allenpsychiatry.net`
   - Or: `dig TXT allenpsychiatry.net`

---

### **Step 4: Verify in Google Search Console**

1. **Return to Google Search Console**
2. **Click the "Verify" button**
3. **If successful:** You'll see a success message and access to your property
4. **If it fails:**
   - Wait another 5-10 minutes
   - Check DNS propagation again
   - Verify the TXT record content matches exactly
   - Ensure proxy status is gray (DNS only), not orange

---

## ⚠️ **COMMON MISTAKES**

1. **Orange Cloud (Proxied):** 
   - ❌ Wrong - Makes verification fail
   - ✅ Fix: Click cloud icon to make it gray (DNS only)

2. **Wrong Content:**
   - ❌ Missing part of verification code
   - ✅ Fix: Copy entire string from Google

3. **Wrong Name:**
   - ❌ Using `www` or other subdomain
   - ✅ Fix: Use `@` or leave blank for root domain

4. **Not Waiting:**
   - ❌ Trying to verify immediately
   - ✅ Fix: Wait 5-10 minutes for DNS propagation

---

## 🔍 **VERIFICATION CHECKLIST**

- [ ] Copied entire verification code from Google
- [ ] Added TXT record in Cloudflare
- [ ] Set Name to `@` (or blank)
- [ ] Pasted full verification code in Content
- [ ] Set Proxy status to gray (DNS only)
- [ ] Saved the record
- [ ] Waited 5-10 minutes
- [ ] Checked DNS propagation
- [ ] Clicked "Verify" in Search Console
- [ ] Received success message

---

## 📞 **NEED HELP?**

If verification fails after 15 minutes:
1. Double-check the TXT record content matches exactly
2. Verify proxy status is gray (DNS only)
3. Try the HTML file method as an alternative
4. Contact Cloudflare support if DNS issues persist

---

**Status:** 📋 **READY TO USE**  
**Time Required:** 10 minutes (including wait time)


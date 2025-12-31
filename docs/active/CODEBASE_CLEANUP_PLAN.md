# Codebase Cleanup & Organization Plan

**Date:** 2025-12-31  
**Status:** 📋 **CLEANUP PLAN**

---

## 🔴 **CRITICAL ISSUES IDENTIFIED**

### **1. Duplicate/Conflicting Code:**
- ❌ `scripts.js` - Duplicate hamburger handler (NOT USED)
- ❌ `sms-privacy-modal.js` vs `sms-modal-simple.js` - Two implementations
- ❌ Hamburger menu code in multiple places

### **2. Unused Files:**
- ❌ `scripts.js` - Not referenced in any HTML
- ❌ Multiple dev utility scripts in root (should be in `scripts/dev/`)
- ❌ 16 markdown documentation files in root (should be in `docs/`)

### **3. Inconsistent Usage:**
- ❌ `index.html` uses `sms-modal-simple.js`
- ❌ Other pages use `sms-privacy-modal.js`
- **Should standardize on ONE**

### **4. Code Organization:**
- ❌ Dev scripts mixed with production code
- ❌ Documentation cluttering root directory
- ❌ No clear separation of concerns

---

## ✅ **CLEANUP ACTIONS**

### **Phase 1: Remove Duplicate Code**
1. ✅ Delete `scripts.js` (unused duplicate)
2. ✅ Standardize SMS modal (use `sms-modal-simple.js` everywhere)
3. ✅ Remove `sms-privacy-modal.js` after migration

### **Phase 2: Organize Files**
1. ✅ Create `scripts/dev/` directory
2. ✅ Move dev utility scripts to `scripts/dev/`
3. ✅ Move documentation to `docs/` (keep only README.md in root)

### **Phase 3: Simplify Code**
1. ✅ Consolidate duplicate functionality
2. ✅ Remove unused code
3. ✅ Clean up comments

---

## 📁 **PROPOSED STRUCTURE**

```
allen-psychiatry-ws/
├── index.html (and other HTML files)
├── styles.css
├── config.js
├── script.js (main functionality)
├── navigation.js (navigation only)
├── sms-modal-simple.js (SMS modal - standardized)
├── telehealth-modal.js
├── patient-portal-modal.js
├── appointment-clarification-modal.js
├── read-more.js
├── server.js
├── package.json
├── README.md
├── _headers
├── _redirects
├── robots.txt
├── sitemap.xml
├── assets/
├── scripts/
│   └── dev/
│       ├── audit-site.js
│       ├── console-error-check.js
│       ├── puppeteer-audit.js
│       ├── verify-code.js
│       ├── optimize-images.js
│       ├── update-config-script.js
│       └── update-to-clean-urls.js
└── docs/
    ├── CODE_AUDIT_REPORT.md
    ├── COMPREHENSIVE_AUDIT_REPORT.md
    ├── PERFORMANCE_BLOCKERS_ANALYSIS.md
    └── ... (other docs)
```

---

## 🎯 **EXECUTION PLAN**

1. **Delete unused files**
2. **Standardize SMS modal**
3. **Organize dev scripts**
4. **Move documentation**
5. **Update references**
6. **Test everything**

---

**Ready to execute cleanup!**


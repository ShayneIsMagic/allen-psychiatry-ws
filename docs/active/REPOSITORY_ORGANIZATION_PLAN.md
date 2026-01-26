# Repository Organization Plan

**Date:** January 26, 2025  
**Status:** 📋 **PROPOSED RESTRUCTURE**

---

## 🎯 **Current Issues**

1. **Root directory is cluttered** - HTML, JS, config, test reports all mixed together
2. **JavaScript files scattered** - Some in root (`*.js`), some in `scripts/dev/`
3. **Test reports in root** - Should be in dedicated directory
4. **PDF files in root** - Should be in `assets/` or `docs/`
5. **Backup files in root** - `_redirects.backup` should be removed or archived

---

## ✅ **Proposed Structure**

```
allen-psychiatry-ws/
├── 📄 Root Files (Cloudflare Pages required)
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _headers
│   ├── _redirects
│   └── .gitignore
│
├── 📁 pages/                    # All HTML pages
│   ├── index.html              # Move from root
│   ├── 404.html                # Move from root
│   ├── about.html
│   ├── adhd.html
│   ├── anxiety.html
│   ├── depression.html
│   ├── ketamine-therapy.html
│   ├── provo.html
│   ├── ptsd.html
│   ├── rural.html
│   └── telehealth.html
│
├── 📁 assets/                   # Static assets (already exists)
│   ├── images/
│   │   ├── *.jpg, *.png, *.webp, *.avif
│   │   └── logos/
│   └── documents/               # PDFs, etc.
│       └── Allen Psychaitry SMS Privacy Policy 7.10.2025.pdf
│
├── 📁 js/                       # All JavaScript files
│   ├── core/                    # Core functionality
│   │   ├── config.js
│   │   ├── navigation.js
│   │   └── script.js
│   ├── modals/                  # Modal components
│   │   ├── appointment-clarification-modal.js
│   │   ├── patient-portal-modal.js
│   │   ├── schedule-modal.js
│   │   ├── service-areas-modal.js
│   │   ├── sms-modal-simple.js
│   │   └── telehealth-modal.js
│   ├── tracking/                # Analytics & tracking
│   │   └── email-click-handler.js
│   └── utils/                   # Utility scripts
│       └── read-more.js
│
├── 📁 css/                      # Stylesheets
│   └── styles.css               # Move from root
│
├── 📁 scripts/                  # Build & development scripts
│   ├── dev/                     # Development tools
│   │   ├── audit-site.js
│   │   ├── comprehensive-site-test.js
│   │   ├── console-error-check.js
│   │   ├── lighthouse-cookie-audit.js
│   │   ├── mobile-audit.js
│   │   ├── optimize-images.js
│   │   ├── puppeteer-audit.js
│   │   ├── quick-site-test.js
│   │   ├── test-live-site-tasks.js
│   │   ├── test-modal-responsiveness.js
│   │   ├── update-config-script.js
│   │   ├── update-to-clean-urls.js
│   │   └── verify-code.js
│   └── build/                   # Build scripts (future)
│
├── 📁 test-results/             # Test output files
│   ├── COMPREHENSIVE_TEST_REPORT.json
│   ├── COMPREHENSIVE_TEST_REPORT.md
│   ├── QUICK_TEST_REPORT.json
│   ├── LIVE_SITE_TASK_AUDIT_REPORT.json
│   ├── LIVE_SITE_TASK_AUDIT_REPORT.md
│   ├── lighthouse-cookie-audit-report.json
│   └── QA_REPORT.md
│
├── 📁 docs/                     # Documentation (already exists)
│   ├── active/
│   └── archive/
│
├── 📁 config/                   # Configuration files
│   ├── .env.example
│   └── (other config files if needed)
│
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
├── 📄 server.js                 # Local dev server
└── 📄 deploy-staging.sh
```

---

## ⚠️ **Important Considerations**

### **Cloudflare Pages Requirements**

Cloudflare Pages expects certain files in the **root directory**:
- `index.html` - **MUST** be in root
- `404.html` - **MUST** be in root
- `robots.txt` - **MUST** be in root
- `sitemap.xml` - **MUST** be in root
- `_headers` - **MUST** be in root
- `_redirects` - **MUST** be in root

**Therefore:** We **CANNOT** move these files. They must stay in root.

---

## ✅ **Revised Structure (Cloudflare-Compatible)**

```
allen-psychiatry-ws/
├── 📄 Root Files (Required by Cloudflare)
│   ├── index.html              # ✅ Stays in root
│   ├── 404.html                # ✅ Stays in root
│   ├── robots.txt              # ✅ Stays in root
│   ├── sitemap.xml             # ✅ Stays in root
│   ├── _headers                # ✅ Stays in root
│   ├── _redirects              # ✅ Stays in root
│   └── .gitignore
│
├── 📁 pages/                    # Other HTML pages
│   ├── about.html
│   ├── adhd.html
│   ├── anxiety.html
│   ├── depression.html
│   ├── ketamine-therapy.html
│   ├── provo.html
│   ├── ptsd.html
│   ├── rural.html
│   └── telehealth.html
│
├── 📁 assets/                   # Static assets
│   ├── images/                  # All image files
│   │   └── (all .jpg, .png, .webp, .avif files)
│   └── documents/               # PDFs and other docs
│       └── Allen Psychaitry SMS Privacy Policy 7.10.2025.pdf
│
├── 📁 js/                       # JavaScript files
│   ├── core/                    # Core functionality
│   │   ├── config.js
│   │   ├── navigation.js
│   │   └── script.js
│   ├── modals/                  # Modal components
│   │   ├── appointment-clarification-modal.js
│   │   ├── patient-portal-modal.js
│   │   ├── schedule-modal.js
│   │   ├── service-areas-modal.js
│   │   ├── sms-modal-simple.js
│   │   └── telehealth-modal.js
│   ├── tracking/                # Analytics & tracking
│   │   └── email-click-handler.js
│   └── utils/                   # Utility scripts
│       └── read-more.js
│
├── 📁 css/                      # Stylesheets
│   └── styles.css
│
├── 📁 scripts/                  # Build & dev scripts (unchanged)
│   └── dev/
│
├── 📁 test-results/             # Test output files
│   ├── *.json
│   └── *.md (test reports)
│
├── 📁 docs/                     # Documentation (unchanged)
│
├── 📁 config/                   # Configuration
│   └── .env.example
│
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
├── 📄 server.js
└── 📄 deploy-staging.sh
```

---

## 🔄 **Migration Steps**

### **Phase 1: Organize JavaScript Files**

1. Create `js/` directory structure
2. Move JavaScript files to appropriate subdirectories
3. Update HTML file references to new paths
4. Test all functionality

### **Phase 2: Organize Assets**

1. Create `assets/images/` and `assets/documents/`
2. Move image files to `assets/images/`
3. Move PDF to `assets/documents/`
4. Update HTML file references

### **Phase 3: Organize Test Results**

1. Create `test-results/` directory
2. Move all test report files
3. Update `.gitignore` if needed
4. Update test scripts to output to `test-results/`

### **Phase 4: Organize CSS**

1. Create `css/` directory
2. Move `styles.css` to `css/styles.css`
3. Update HTML file references

### **Phase 5: Clean Up**

1. Remove `_redirects.backup`
2. Remove `FILES.txt` (if not needed)
3. Remove `THIRD_PARTY_COOKIES_ANALYSIS.md` (move to docs if needed)

---

## 📝 **File Path Updates Required**

After reorganization, update references in:

1. **HTML files:**
   - `<link rel="stylesheet" href="styles.css">` → `href="css/styles.css"`
   - `<script src="navigation.js">` → `src="js/core/navigation.js"`
   - `<script src="schedule-modal.js">` → `src="js/modals/schedule-modal.js"`
   - Image paths: `assets/image.jpg` → `assets/images/image.jpg`

2. **JavaScript files:**
   - Any relative imports or references

3. **Test scripts:**
   - Output paths to `test-results/`

4. **Cloudflare Pages build:**
   - Ensure build process handles new structure (if applicable)

---

## ⚡ **Quick Wins (Can Do Now)**

1. ✅ **Create `test-results/` directory** and move test reports
2. ✅ **Create `assets/documents/`** and move PDF
3. ✅ **Remove `_redirects.backup`** (or move to docs/archive)
4. ✅ **Remove `FILES.txt`** (if not needed)
5. ✅ **Move `THIRD_PARTY_COOKIES_ANALYSIS.md`** to `docs/active/`

These can be done immediately without breaking anything.

---

## 🎯 **Benefits**

1. **Clearer structure** - Easy to find files
2. **Better maintainability** - Logical grouping
3. **Scalability** - Easy to add new files
4. **Professional** - Follows industry best practices
5. **Easier onboarding** - New developers can navigate quickly

---

## ⚠️ **Risks**

1. **Path updates** - Must update all references
2. **Cloudflare Pages** - Must ensure deployment still works
3. **Testing** - Must test all functionality after migration
4. **Git history** - File moves will show as deletions + additions

---

## 🚀 **Recommendation**

**Start with Quick Wins** (Phase 0):
- Move test reports to `test-results/`
- Move PDF to `assets/documents/`
- Clean up backup files

**Then proceed with Phases 1-5** systematically, testing after each phase.

---

**Last Updated:** January 26, 2025


# Allen Psychiatry Website

**GOLD COPY POLICY**

- `index.html` is the authoritative gold copy for this repository.
- All future changes to the repo must be based on the current version of `index.html`.
- Do not overwrite or diverge from this file without explicit review.
- Any sitewide changes should be reflected in `index.html` first and then propagated as needed.

---

A modern, responsive website for Allen Psychiatry, featuring comprehensive mental health services and information.

## Project Structure

```
allen-psychiatry-ws/
├── index.html              # Homepage (GOLD COPY)
├── about.html              # About Us
├── adhd.html               # ADHD Treatment
├── anxiety.html            # Anxiety Treatment
├── depression.html         # Depression Treatment
├── ptsd.html               # PTSD Treatment
├── provo.html              # Provo Office
├── rural.html              # Rural Services
├── telehealth.html         # Telehealth Services
├── 404.html                # Custom 404 page
├── styles.css              # Main stylesheet
├── config.js               # Configuration
├── script.js               # Main functionality
├── navigation.js           # Navigation & hamburger menu
├── sms-modal-simple.js    # SMS Privacy modal
├── telehealth-modal.js     # Telehealth modal
├── patient-portal-modal.js # Patient portal modal
├── appointment-clarification-modal.js # Appointment modal
├── read-more.js            # Read more functionality (Provo page)
├── server.js               # Local development server
├── package.json            # Dependencies
├── _headers                # Cloudflare Pages headers
├── _redirects              # URL redirects
├── robots.txt              # SEO directives
├── sitemap.xml             # SEO sitemap
├── assets/                 # Images and media
├── scripts/
│   └── dev/                # Development utilities
└── docs/
    └── active/             # Active documentation
```

## Features

- Responsive design that works on all devices
- Modern, clean interface
- Easy navigation
- Service-specific pages with detailed information
- Online scheduling integration
- Patient portal access
- SEO optimized
- Accessibility compliant

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts (Roboto)
- Font Awesome (Icons)
- AdvancedMD Integration
- Google Analytics 4

## Local Development

To view the website locally:

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open browser: `http://localhost:3001`

## Production Deployment

- **Hosting:** Cloudflare Pages
- **Branch:** `main` (auto-deploys)
- **URL:** https://allenpsychiatry.net

## Development Scripts

Development utilities are in `scripts/dev/`:
- `optimize-images.js` - Image optimization
- `audit-site.js` - Site audit
- `console-error-check.js` - Check for console errors
- `puppeteer-audit.js` - Puppeteer-based audit
- `verify-code.js` - Code verification

## Documentation

Active documentation is in `docs/active/`:
- Audit reports
- Performance analysis
- Setup guides
- Troubleshooting guides

## Contact

For any questions or support, please contact:
- Phone: (385) 504-1334
- Address: 3311 North University Ave, Ste 275, Provo, UT 84604

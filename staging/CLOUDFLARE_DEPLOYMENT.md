# Allen Psychiatry Website - Cloudflare Pages Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the Allen Psychiatry website to Cloudflare Pages.

## Pre-Deployment Checklist ✅

### Image Paths Fixed
- ✅ Hero image in `index.html` now correctly references `assets/index-hero.jpg`
- ✅ All service page hero images properly reference `assets/` folder
- ✅ Duplicate image files removed from root directory
- ✅ All images organized in `assets/` folder

### Security & Performance
- ✅ `_headers` file configured with security headers
- ✅ `_redirects` file set up for 404 handling
- ✅ Content Security Policy configured for external resources
- ✅ Cache headers optimized for static assets

## Cloudflare Pages Setup

### 1. Connect Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Pages > Create a project
3. Connect your Git repository (GitHub, GitLab, etc.)
4. Select the repository containing this project

### 2. Build Configuration
- **Framework preset**: None (static site)
- **Build command**: (leave empty)
- **Build output directory**: `/` (root)
- **Root directory**: (leave empty)

### 3. Environment Variables
No environment variables required for this static site.

### 4. Deploy Settings
- **Branch**: `main`
- **Auto-deploy**: Enabled (recommended)

## File Structure for Deployment
```
staging/
├── index.html                 # Home page
├── about.html                 # About page
├── adhd.html                  # ADHD services
├── anxiety.html               # Anxiety services
├── depression.html            # Depression services
├── ptsd.html                  # PTSD services
├── provo.html                 # Provo office
├── rural.html                 # Rural services
├── telehealth.html            # Telehealth services
├── 404.html                   # 404 error page
├── assets/                    # All images and assets
│   ├── ap-new-color-logo.png
│   ├── index-hero.jpg
│   ├── adhd2.jpg
│   ├── anxiety2.jpg
│   ├── depression.jpg
│   ├── ptsd.jpg
│   └── ... (other images)
├── styles.css                 # Main stylesheet
├── scripts.js                 # Main JavaScript
├── navigation.js              # Navigation functionality
├── telehealth-modal.js        # Telehealth modal
├── read-more.js               # Read more functionality
├── _headers                   # Cloudflare security headers
├── _redirects                 # Cloudflare redirects
├── package.json               # Project metadata
└── DEPLOYMENT.md              # Deployment notes
```

## Post-Deployment Testing

### 1. Core Functionality
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Hero images display properly
- [ ] Service pages load with correct images
- [ ] Contact information is accurate

### 2. Interactive Features
- [ ] Telehealth modal appears when clicking "Patient Portal"
- [ ] Modal Yes/No buttons function correctly
- [ ] Mobile navigation works
- [ ] Back-to-top button functions

### 3. External Links
- [ ] Patient Portal links work: `https://pp-wfe-100.advancedmd.com/154986/account/logon`
- [ ] Scheduling links work: `https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients`
- [ ] Email links work: `mailto:info@allenpsychiatry.net`
- [ ] Phone links work: `tel:(385) 504-1334`

### 4. Performance & Security
- [ ] Images load quickly (cached properly)
- [ ] Security headers are applied
- [ ] 404 page displays for invalid URLs
- [ ] Site works on mobile devices
- [ ] Site works on desktop browsers

## Custom Domain Setup (Optional)

### 1. Add Custom Domain
1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains"
3. Add your domain (e.g., `allenpsychiatry.net`)
4. Follow DNS configuration instructions

### 2. SSL Certificate
- Cloudflare automatically provides SSL certificates
- No additional configuration needed

## Monitoring & Maintenance

### 1. Analytics
- Consider adding Google Analytics or Cloudflare Analytics
- Monitor page load times and user engagement

### 2. Regular Updates
- Keep contact information current
- Update service information as needed
- Monitor external links for changes

### 3. Backup
- Git repository serves as backup
- Consider regular exports of content

## Contact Information
- **Phone**: (385) 504-1334
- **Email**: info@allenpsychiatry.net
- **Address**: 3311 North University Ave, Ste 275, Provo, UT 84604

## Support
For technical issues with the website deployment, contact your web developer.
For patient-related inquiries, use the contact information above.

---
*Last updated: June 30, 2025* 
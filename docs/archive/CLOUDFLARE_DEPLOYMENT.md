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

## Contact Information
- **Phone**: (385) 504-1334
- **Email**: info@allenpsychiatry.net
- **Address**: 3311 North University Ave, Ste 275, Provo, UT 84604

---
*Last updated: June 30, 2025*

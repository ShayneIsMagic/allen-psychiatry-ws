# External Links Configuration Guide

## Overview
This system centralizes all external links and portal configurations for easy maintenance and updates. When you need to change portal URLs, scheduling systems, or add new tools, you only need to update the `config.js` file.

## Quick Start

### To Change Portal URLs:
1. Open `config.js`
2. Update the URLs in the configuration object
3. Commit and push changes
4. All links across the website will automatically use the new URLs

### To Add New Tools:
1. Open `config.js`
2. Add your new tool configuration to the `futureTools` section
3. Use the provided helper functions to generate links
4. Update HTML templates to use the new configuration

## Configuration Structure

### Patient Portal Configuration
```javascript
patientPortal: {
    url: "https://pp-wfe-100.advancedmd.com/154986/account/logon",
    linkText: "Patient Portal",
    openInNewWindow: true
}
```

### Scheduling Configuration
```javascript
scheduling: {
    url: "https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients",
    buttonText: "Schedule Now",
    appointmentText: "Schedule an Appointment",
    onlineText: "schedule an appointment online",
    bookText: "book an appointment online",
    openInNewWindow: true
}
```

### Contact Information
```javascript
contact: {
    phone: "(385) 504-1334",
    email: "info@allenpsychiatry.net",
    address: "3311 North University Ave, Ste 275, Provo, UT 84604"
}
```

## How to Update

### 1. Change Patient Portal URL
If you switch to a new patient portal system:
```javascript
// In config.js, update:
patientPortal: {
    url: "https://new-portal-system.com/login",  // NEW URL
    linkText: "Patient Portal",
    openInNewWindow: true
}
```

### 2. Change Scheduling System
If you switch to a new scheduling platform:
```javascript
// In config.js, update:
scheduling: {
    url: "https://new-scheduling-system.com/book",  // NEW URL
    buttonText: "Schedule Now",
    appointmentText: "Schedule an Appointment",
    onlineText: "schedule an appointment online",
    bookText: "book an appointment online",
    openInNewWindow: true
}
```

### 3. Add New Tools
To add a new tool (e.g., a new TeleHealth platform):
```javascript
// In config.js, add to futureTools:
futureTools: {
    newTelehealthPlatform: {
        url: "https://new-telehealth-platform.com",
        linkText: "Join TeleHealth Session",
        openInNewWindow: true
    },
    prescriptionRefill: {
        url: "https://prescription-system.com/refill",
        linkText: "Refill Prescription",
        openInNewWindow: true
    }
}
```

## Implementation in HTML

### Method 1: Include Config Script (Recommended)
Add to the `<head>` section of your HTML files:
```html
<script src="config.js"></script>
```

The script will automatically update all existing links when the page loads.

### Method 2: Use Helper Functions
In your HTML templates, you can use the helper functions:
```html
<!-- Patient Portal Link -->
<script>document.write(getPatientPortalLink());</script>

<!-- Scheduling Button -->
<script>document.write(getSchedulingLink('Schedule Now', 'btn'));</script>
```

## Benefits

### ✅ Easy Maintenance
- Change URLs in one place, update entire website
- No need to search and replace across multiple files
- Reduces risk of missing links during updates

### ✅ Consistent Configuration
- All links use the same settings (new window, styling, etc.)
- Centralized contact information
- Easy to add new tools or platforms

### ✅ Future-Proof
- Easy to switch to new systems
- Simple to add additional tools
- Scalable for growing practice needs

## Common Update Scenarios

### Scenario 1: Switch to New Patient Portal
```javascript
// Old system
patientPortal: {
    url: "https://pp-wfe-100.advancedmd.com/154986/account/logon",
    // ...
}

// New system
patientPortal: {
    url: "https://new-portal.allenpsychiatry.com",
    linkText: "Patient Portal",
    openInNewWindow: true
}
```

### Scenario 2: Add TeleHealth Session Links
```javascript
// Add to futureTools:
futureTools: {
    telehealthSession: {
        url: "https://telehealth.allenpsychiatry.com/session",
        linkText: "Join Session",
        openInNewWindow: true
    }
}
```

### Scenario 3: Change Scheduling Platform
```javascript
// Update scheduling URL:
scheduling: {
    url: "https://appointments.allenpsychiatry.com/book",
    // ... rest stays the same
}
```

## Testing Changes

After updating `config.js`:
1. Test patient portal links
2. Test scheduling buttons
3. Verify all links open correctly
4. Check that new window behavior works
5. Test on different devices/browsers

## Backup and Rollback

Before making changes:
1. Commit current `config.js` to Git
2. Make your changes
3. Test thoroughly
4. If issues arise, you can easily rollback:
   ```bash
   git checkout HEAD~1 config.js
   ```

## Support

For questions about updating external links:
1. Check this documentation first
2. Review the `config.js` file structure
3. Test changes in a staging environment
4. Contact your development team if needed

---

**Remember:** Always test changes in a staging environment before deploying to production!

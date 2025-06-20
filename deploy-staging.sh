#!/bin/bash

# Allen Psychiatry Website - Staging Deployment Script
# This script prepares the website for staging deployment

echo "🚀 Allen Psychiatry Website - Staging Deployment"
echo "================================================"

# Create staging directory
STAGING_DIR="staging"
echo "📁 Creating staging directory..."

if [ -d "$STAGING_DIR" ]; then
    rm -rf "$STAGING_DIR"
fi

mkdir -p "$STAGING_DIR"

# Copy all necessary files
echo "📋 Copying files to staging..."

# Copy HTML files
cp *.html "$STAGING_DIR/"

# Copy CSS and JS files
cp *.css "$STAGING_DIR/"
cp *.js "$STAGING_DIR/"

# Copy assets directory
if [ -d "assets" ]; then
    cp -r assets "$STAGING_DIR/"
fi

# Copy images in root directory
cp *.jpg "$STAGING_DIR/" 2>/dev/null || true
cp *.png "$STAGING_DIR/" 2>/dev/null || true

# Copy configuration files
cp package.json "$STAGING_DIR/"
cp server.js "$STAGING_DIR/"
cp README.md "$STAGING_DIR/"

# Create deployment manifest
echo "📝 Creating deployment manifest..."
cat > "$STAGING_DIR/DEPLOYMENT.md" << EOF
# Allen Psychiatry Website - Staging Deployment

## Deployment Date
$(date)

## Changes in This Deployment

### ✅ Standardized CTA Sections
- All pages now have consistent "Ready to Take Your First Step?" sections
- Unified styling and messaging across all service pages
- Service-specific content while maintaining consistent structure

### ✅ Telehealth Modal Implementation
- New modal appears when users click "Patient Portal" links
- Asks: "Do you have a Telehealth appointment scheduled with Dr. Todd Allen?"
- **Yes**: Directs to patient portal
- **No**: Shows options to schedule, call, or email
- Uses correct contact information (info@allenpsychiatry.net)

### ✅ Technical Improvements
- Added telehealth-modal.js for modal functionality
- Updated styles.css with modal and standardized CTA styles
- All pages include the new modal script
- Responsive design for all devices
- Keyboard support (ESC to close)
- Click outside to close functionality

## Files Modified
- styles.css - Added modal and CTA styles
- telehealth-modal.js - New modal functionality
- All HTML pages - Updated CTA sections and added modal script

## Testing Checklist
- [ ] Modal appears when clicking "Patient Portal" links
- [ ] Modal works on all pages
- [ ] Yes/No buttons function correctly
- [ ] Contact information is correct
- [ ] Responsive design works on mobile
- [ ] Keyboard navigation works
- [ ] CTA sections are consistent across all pages

## Deployment Instructions
1. Upload all files to staging server
2. Test modal functionality on all pages
3. Verify contact information is correct
4. Test responsive design
5. Approve for production deployment

## Contact Information
- Phone: (385) 504-1334
- Email: info@allenpsychiatry.net
- Address: 3311 North University Ave, Ste 275, Provo, UT 84604
EOF

# Create file list
echo "📋 Creating file list..."
find "$STAGING_DIR" -type f | sort > "$STAGING_DIR/FILES.txt"

# Show staging directory contents
echo ""
echo "📁 Staging directory created: $STAGING_DIR"
echo "📊 Files in staging:"
ls -la "$STAGING_DIR"

echo ""
echo "✅ Staging deployment ready!"
echo ""
echo "📋 Next steps:"
echo "1. Review the files in the $STAGING_DIR directory"
echo "2. Upload to your staging server"
echo "3. Test the telehealth modal functionality"
echo "4. Verify all CTA sections are consistent"
echo "5. Check responsive design on mobile devices"
echo ""
echo "🔗 Test the modal by clicking any 'Patient Portal' link"
echo "📧 Modal uses correct email: info@allenpsychiatry.net"
echo ""
echo "📝 See $STAGING_DIR/DEPLOYMENT.md for detailed information" 
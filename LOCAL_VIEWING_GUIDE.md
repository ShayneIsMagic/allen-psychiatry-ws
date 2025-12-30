# Local Viewing Guide - Allen Psychiatry Website

## Quick Start

### Option 1: Use Existing Server (if running)
If port 3000 is already in use, the server may already be running. Try:

**Open in browser:**
- Homepage: http://localhost:3000/
- All pages: http://localhost:3000/[page-name].html

### Option 2: Start New Server

**Terminal Command:**
```bash
cd /Users/shayneroy/ShayneIsMagic:allen-psychiatry-ws/allen-psychiatry-ws
node server.js
```

**Then open:** http://localhost:3000/

### Option 3: Use Different Port

If port 3000 is busy, you can modify `server.js` to use a different port (e.g., 3001):

```javascript
const PORT = 3001; // Change from 3000
```

### Option 4: Open HTML Files Directly

Since this is a static site, you can also open HTML files directly in your browser:

```bash
# macOS
open index.html

# Or navigate to the file in Finder and double-click
```

**Note:** Some features (like modals) may work better with a local server.

## Available Pages

Once the server is running, you can access:

- **Homepage:** http://localhost:3000/
- **About Us:** http://localhost:3000/about.html
- **ADHD Treatment:** http://localhost:3000/adhd.html
- **Anxiety Treatment:** http://localhost:3000/anxiety.html
- **Depression Treatment:** http://localhost:3000/depression.html
- **PTSD Treatment:** http://localhost:3000/ptsd.html
- **Provo Office:** http://localhost:3000/provo.html
- **Rural Services:** http://localhost:3000/rural.html
- **Telehealth Services:** http://localhost:3000/telehealth.html

## Testing New Features

### ✅ SMS Policy Link
- **Location:** Top right of header (blue bar)
- **Test:** Click "📱 SMS Policy" link
- **Expected:** Modal opens with SMS Privacy Policy

### ✅ Patient Portal Modal
- **Location:** Any "Patient Portal" link
- **Test:** Click "Patient Portal" → Click "No" → Should show options, click "No" again to close
- **Expected:** Modal closes properly

### ✅ Appointment Clarification Modal
- **Location:** 
  - Rural Services page hero section
  - Telehealth Services page hero section
- **Test:** Click "Schedule Appointment" button
- **Expected:** Modal opens explaining initial appointment must be in-person

### ✅ Telehealth Animation
- **Location:** Telehealth Services page
- **Test:** Scroll to hero section
- **Expected:** Title and image should NOT be moving (animation disabled)

### ✅ CTA Buttons
- **Rural Services:** Button in hero section
- **Telehealth:** Button in hero section  
- **About Us:** Button under "Serving Utah County" section (tan button on blue background)

## Troubleshooting

### Port Already in Use
If you see "Port 3000 is in use":
1. Check if server is already running: `lsof -ti:3000`
2. Kill existing process: `kill -9 $(lsof -ti:3000)`
3. Restart server: `node server.js`

### Modals Not Working
- Make sure JavaScript files are loading (check browser console)
- Verify scripts are included in HTML files
- Try hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Styles Not Loading
- Check browser console for 404 errors
- Verify `styles.css` is in the root directory
- Try clearing browser cache

## Browser Console

To check for errors:
1. Open browser Developer Tools (F12 or Cmd+Option+I)
2. Go to "Console" tab
3. Look for any red error messages

## Quick Test Checklist

- [ ] Server starts without errors
- [ ] Homepage loads correctly
- [ ] SMS Policy link appears in header on all pages
- [ ] SMS Policy modal opens and closes
- [ ] Patient Portal modal works correctly
- [ ] Appointment clarification modal works on Rural/Telehealth pages
- [ ] Telehealth page has no moving animation
- [ ] All CTA buttons are visible and functional
- [ ] No JavaScript errors in browser console

---

**Ready to view!** Start the server and open http://localhost:3000/ in your browser.


# Image Loading Troubleshooting Guide

## Quick Fixes

### 1. Hard Refresh Your Browser
**Most Common Solution:**
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + Shift + R`

This clears cached files and forces the browser to reload images.

### 2. Clear Browser Cache
1. Open Developer Tools (F12 or Cmd+Option+I)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### 3. Check Browser Console
1. Open Developer Tools (F12)
2. Go to "Console" tab
3. Look for red error messages about images
4. Go to "Network" tab
5. Refresh page
6. Look for failed image requests (red status codes)

## Server Status

The server has been updated with:
- ✅ Proper MIME types for all image formats (.jpg, .png, .avif, .webp)
- ✅ Security headers to prevent directory traversal
- ✅ Cache headers for better performance
- ✅ Query string handling

## Verify Images Are Loading

### Test in Browser Console
Open browser console (F12) and run:
```javascript
// Check if images exist
fetch('/assets/ap-new-color-logo.png')
  .then(r => console.log('Logo:', r.status === 200 ? '✅ Found' : '❌ Missing'))
  .catch(e => console.error('Error:', e));

fetch('/assets/index-hero.jpg')
  .then(r => console.log('Hero:', r.status === 200 ? '✅ Found' : '❌ Missing'))
  .catch(e => console.error('Error:', e));
```

### Check Network Tab
1. Open Developer Tools → Network tab
2. Filter by "Img"
3. Refresh page
4. Check status codes:
   - **200** = Image loaded successfully
   - **404** = Image file not found
   - **403** = Permission denied
   - **CORS error** = Cross-origin issue

## Common Issues & Solutions

### Issue: Images show broken icon
**Possible Causes:**
1. Browser cache (try hard refresh)
2. Wrong file path
3. File doesn't exist
4. Server not running

**Solution:**
```bash
# Verify files exist
ls -la assets/ap-new-color-logo.png
ls -la assets/index-hero.jpg

# Restart server
pkill -f "node server.js"
node server.js
```

### Issue: 404 Not Found
**Check:**
- File path in HTML matches actual file location
- File name is correct (case-sensitive on some systems)
- File exists in `assets/` directory

### Issue: CORS Error
**Solution:** The server now includes proper headers. If you still see CORS errors:
1. Make sure you're accessing via `http://localhost:3001/`
2. Not using `file://` protocol
3. Server is running

### Issue: Images load slowly
**Solution:** Images now have cache headers. First load may be slow, subsequent loads will be faster.

## Verify Server is Running

```bash
# Check if server is running
lsof -ti:3001

# If not running, start it:
node server.js
```

## Image Files That Should Load

From `index.html`:
- ✅ `assets/ap-new-color-logo.png` - Logo
- ✅ `assets/index-hero.jpg` - Hero image
- ✅ `assets/adhd2.jpg` - ADHD service
- ✅ `assets/anxiety2.jpg` - Anxiety service
- ✅ `assets/depression.jpg` - Depression service
- ✅ `assets/ptsd.jpg` - PTSD service

## Still Not Working?

1. **Check file permissions:**
   ```bash
   ls -la assets/
   ```

2. **Verify server logs:**
   ```bash
   tail -f /tmp/server.log
   ```

3. **Test direct image URL:**
   Open in browser: http://localhost:3001/assets/ap-new-color-logo.png
   - If this works → Issue is with HTML paths
   - If this fails → Issue is with server

4. **Check browser console for specific errors**

---

**Server Updated:** The server has been improved with better MIME type handling and security. Try a hard refresh first!


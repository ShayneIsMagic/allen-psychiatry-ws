const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001; // Use 3001 if 3000 is busy

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.avif': 'image/avif',
    '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Handle root URL
    let filePath = req.url === '/' 
        ? path.join(__dirname, 'index.html')
        : path.join(__dirname, req.url);
    
    // If URL has no extension, try adding .html
    if (!path.extname(filePath) && req.url !== '/') {
        const htmlPath = filePath + '.html';
        if (fs.existsSync(htmlPath)) {
            filePath = htmlPath;
        }
    }
    
    // Remove query strings for file path resolution
    filePath = filePath.split('?')[0];

    // Get the file extension
    let extname = path.extname(filePath);
    
    // If no extension, check if file exists and treat as HTML
    let contentType;
    if (!extname) {
        if (fs.existsSync(filePath)) {
            extname = '.html';
            contentType = 'text/html';
        } else {
            contentType = 'application/octet-stream';
        }
    } else {
        contentType = MIME_TYPES[extname] || 'application/octet-stream';
    }

    // Security: Prevent directory traversal
    const resolvedPath = path.resolve(filePath);
    const rootPath = path.resolve(__dirname);
    if (!resolvedPath.startsWith(rootPath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    // Read the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, '404.html'), (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            // Success - add cache headers for images
            const headers = { 'Content-Type': contentType };
            if (extname.match(/\.(jpg|jpeg|png|gif|svg|avif|webp|ico)$/i)) {
                headers['Cache-Control'] = 'public, max-age=31536000';
            }
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Available pages:');
    console.log('- Homepage: http://localhost:3000/');
    console.log('- ADHD Treatment: http://localhost:3000/services/adhd.html');
    console.log('- Anxiety Treatment: http://localhost:3000/services/anxiety.html');
    console.log('- Depression Treatment: http://localhost:3000/services/depression.html');
    console.log('- PTSD Treatment: http://localhost:3000/services/ptsd.html');
}); 
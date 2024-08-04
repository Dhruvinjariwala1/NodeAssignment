const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const port = 5000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;


    if (pathname === '/' || pathname.endsWith('.html') || pathname.endsWith('.css') || pathname.endsWith('.js')) {
        let filepath = pathname === '/' ? '/index.html' : pathname;
        fs.readFile(__dirname + filepath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Resource not found');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (pathname === '/get') {
        const queryParams = querystring.parse(parsedUrl.query);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(queryParams));
    } else if (pathname === '/post' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(parsedBody));
        });
    } else {
        res.statusCode = 404;
        res.end('Route not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
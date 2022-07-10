const http = require('http');

const html = `<!DOCTYPE html>
<html lang="eng">
    <head>
    <meta http-equiv = "Content-Type" content = "text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>`

http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.end(html)
            break
        }
        case '/penis': {
            res.writeHead(200, {'Content-type': 'text/plain'})
            res.end('sum txt')
        }
    }
}).listen(3001, () => console.log('server is working'))
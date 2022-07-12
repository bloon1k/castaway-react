const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('sum response')
});

server.listen(3002, 'localhost', () => console.log('server is working'))
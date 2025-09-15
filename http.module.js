const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    res.end("servidor Ejecutandose")
})

server.listen(3000, 'localhost', () => console.log("servicio ejecutandose"))
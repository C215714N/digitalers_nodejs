const http = require('node:http');

const { PORT = 3000, HOST = 'localhost' } = process.env;
const backLog = () => console.log("servicio ejecutandose")

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    res.end("servidor Ejecutandose")
})

server.listen(PORT, HOST, backLog)
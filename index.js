// Importaciones
import { createServer } from "node:http";
import { readFile } from "node:fs"
// Variables de Entorno
const {
    PORT = 8080,
    HOST = 'localhost'
} = process.env;
const backLog = () => console.log(`servicio ejecutandose en puerto ${PORT}`)
// Definicion del Servidor
const app = createServer((req, res) => {
    const { method, url } = req;
    const path = process.cwd() + "/public/"
    let code = 200;
    let file = path + "index.html"
    let headers = { "Content-Type": "text/html"}

    switch(method){
        case 'GET':
            console.log("consulta GET finalizada", url)
        break;
        case 'POST':
            console.log("solicitud POST procesada", url)
        break;
        case 'PUT':
            console.log("actualizacion PUT implementada", url)
        break;
        case 'DELETE':
            console.log("peticion DELETE realizada", url)
        break;
    };
    
    if (/style|default|css$/.test(url)) {
        file = path + "styles.css"
        headers["Content-Type"] = "text/css"
    }
    if (/script|js$/.test(url)){
        file = path + "scripts.js"
        headers["Content-Type"] = "text/javascript"
    }

    readFile(file, (err, data) => {
        if (err) {
            code = 404;
            headers["Content-Type"] = "text/plain"
            data = "Ha ocurrido un Error";
        }
        res.writeHead(code, headers);
        res.end(data.toString());
    })
})
// Implementacion del Servidor
app.listen(PORT, HOST, backLog)
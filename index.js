// Importaciones
import { createServer } from "node:http";
import { readFile } from "node:fs"
import { parse } from "node:path";

import { getContentTypes } from "./src/utils/contentTypes.js";

// Variables de Entorno
const {
    PORT = 8080,
    HOST = 'localhost'
} = process.env;
const backLog = () => console.log(`servicio ejecutandose en puerto ${PORT}`)
// Definicion del Servidor
const app = createServer((req, res) => {
    const { method, url } = req;
    const { ext } = parse(url);
    const path = process.cwd() + "/public/"
    let code = 200;
    let file = path + "index.html"

    const headers = { "Content-Type": getContentTypes(ext)}

    switch(method){
        case 'GET':
            console.log("consulta GET finalizada", format, getContentTypes(format))
        break;
        case 'POST':
            console.log("solicitud POST procesada", format)
        break;
        case 'PUT':
            console.log("actualizacion PUT implementada", format)
        break;
        case 'DELETE':
            console.log("peticion DELETE realizada", format)
        break;
    };
    
    if (/style|default|css$/.test(url)) {
        file = path + "styles.css"
    }
    if (/script|js$/.test(url)){
        file = path + "scripts.js"
    }

    readFile(file, (err, data) => {
        if (err) {
            code = 404;
            data = "Ha ocurrido un Error";
        }
        res.writeHead(code, headers);
        res.end(data.toString());
    })
})
// Implementacion del Servidor
app.listen(PORT, HOST, backLog)
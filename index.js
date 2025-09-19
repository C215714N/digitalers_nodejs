// Importaciones
import { createServer } from "node:http";
import { readFile, readFileSync } from "node:fs"
import { parse } from "node:path";

import { getContentTypes } from "./src/utils/contentTypes.js";
import { getFileName } from "./src/utils/filePaths.js";

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
    const file = `./public/${getFileName(url)}`;
    const headers = {"Content-Type": getContentTypes(ext)}
    const notFound = readFileSync('./public/404.html')

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
    readFile(file, (err, data) => {
        let code = 500;
        if (err) { 
            code = 404; 
            data = notFound 
            headers["Content-Type"] = "text/html"
        }
        code = 200;
        res.writeHead(code, headers);
        res.write(data.toString());
        res.end();
    })
})
// Implementacion del Servidor
app.listen(PORT, HOST, backLog)
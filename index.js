// Importaciones
import { createServer } from "node:http";
import { readFile, readFileSync } from "node:fs"
import { parse } from "node:path";

import { getContentTypes } from "./src/utils/contentTypes.js";
import { getFileName } from "./src/utils/filePaths.js";
import { getMethod } from "./src/utils/methods.js";

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
    const file = `./public/${ req.method === "GET" ? getFileName(url) : 'post.html'}`;
    const headers = {"Content-Type": getContentTypes(ext)}
    const notFound = readFileSync('./public/404.html')

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
    getMethod(req);
})
// Implementacion del Servidor
app.listen(PORT, HOST, backLog)
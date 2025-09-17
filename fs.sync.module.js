import * as fs from "node:fs"

export const fileSystemSync = () => {
    console.log("\nINICIANDO PROCESO SINCRONO")
// Escritura
    console.log("iniciando escritura");
    fs.writeFileSync('./example.txt', "<h1>Bienvenidos a NodeJS</h1>")
    console.log("finalizando escritura\n");
// Lectura
    console.log("iniciando lectura");
    const data = fs.readFileSync('./example.txt');
    console.log("RAW: data", data);
    console.log("content: ", data.toString());
    console.log("finalizando lectura\n");
// Edicion
    console.log("iniciando edicion");
    fs.appendFileSync('./example.txt', '\n<p>Telecom Digitalers</p>');
    console.log("finalizando edicion\n");
// Eliminacion
    console.log("iniciando eliminacion");
    fs.unlinkSync('./example.txt');
    console.log("finalizando eliminacion\n");
    console.log("FINALIZANDO PROCESO SINCRONO\n")
}
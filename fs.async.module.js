import * as fs from "node:fs"
// Escritura
console.log("iniciando escritura");
fs.writeFile('./example.txt', "<h1>Bienvenidos a NodeJS</h1>", () => {
    console.log("finalizando escritura\n");
})
// Lectura
console.log("iniciando lectura");
fs.readFile('./example.txt', (err, data) => {
    if (err) console.error("error al leer el archivo", err.code)
    console.log("RAW: data", data);
    console.log("content: ", data.toString());
    console.log("finalizando lectura\n");
});
// Edicion
console.log("iniciando edicion");
fs.appendFile('./example.txt', '\n<p>Telecom Digitalers</p>', () => {
    console.log("finalizando edicion\n");
});
// Eliminacion
console.log("iniciando eliminacion");
fs.unlink('./example.txt', () => {
    console.log("finalizando eliminacion\n");
});
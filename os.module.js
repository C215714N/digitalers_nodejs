// Importacion de Modulos
const os = require('node:os'); // Operating System
// Objeto Local
const system = {
    ver: os.version(),
    cpu: os.cpus()[0].model,
    usr: os.userInfo().username,
};
// Funciones de Utilidad
const toGB = (n) => Math.round(n/(1024**3));
const getSystemInfo = () => `
Informacion del Equipo:
    Sistema Operativo: ${system.ver}
    Arquitectura: ${os.arch()}
    Procesador: ${system.cpu}
    Nucleos: ${os.cpus().length}
    Memoria RAM: ${toGB(os.totalmem())}GB
    Disponible: ${toGB(os.freemem())}GB
    Usuario: ${system.usr}`;
// Exportacion de Modulos
module.exports = {
    toGB,
    getSystemInfo,
}
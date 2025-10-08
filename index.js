/** Importaciones */
// Dependencias de Desarrollo
import morgan from "morgan";
import { configDotenv } from "dotenv";
// Dependencias del Proyecto
import express from "express";
import { createServer } from "node:http";
import { Server} from "socket.io";
// Modulos del Proyecto

/** Desarrollo del Proyecto */
// Declaraciones
configDotenv();
const {
    PROTOCOL='http',
    HOST='localhost',
    PORT=8080,
    URI='mongodb://localhost:27017/chat'
} = process.env
// Configuracion del Servidor
const app = express();
const server = createServer(app);
const ws = new Server(server);
app.use(morgan('dev'));
// Configuracion de Clientes
ws.on('connection', (socket) => {
    console.log('se conecto un cliente: ', socket.id)
    // Difusion del Mensaje a Todos los clientes
    socket.on('message', (data) => {
        ws.emit('message', data)
    })
    // Desconexion del Cliente
    socket.on('disconnect', () => {
        console.log('se desconecto un cliente: ', socket.id)
    })
})
// Implementacion de Servidor
app.use(express.static('public'));
server.listen(PORT, () => console.log(`servicio ejecutandose en ${PROTOCOL}://${HOST}:${PORT}`))
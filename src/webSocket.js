import { handleData, handleMessage } from "./events/message.js";

export const webSocket = (socket) => {
    console.log('se conecto un cliente: ', socket.id)
    // Difusion del Mensaje a Todos los clientes
    socket.on('message', handleMessage)
    socket.on('load', handleData)
    // Desconexion del Cliente
    socket.on('disconnect', () => {
        console.log('se desconecto un cliente: ', socket.id)
    })
}
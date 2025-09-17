import EventEmitter from "events";
// Generacion del Emisor de Evento
const customEvent = new EventEmitter();
// Definicion de Eventos
customEvent.on('saludar', () => {
    console.log("Cristian les da la bienvenida")
})
customEvent.on("despedirse", () => {
    console.log("Cristian les desea una feliz semana")
})
// Emision de Eventos
export const sayHello = () => customEvent.emit('saludar')
export const goodBye = () => customEvent.emit('despedirse')
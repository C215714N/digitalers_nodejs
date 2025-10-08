// Declaraciones
const socket = io();
// Eventos de Navegador
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const { username, message } = e.target;
    // verificamos el formulario
    if (!username.value.trim() || !message.value.trim()) return;
    // Emision del mensaje
    socket.emit('message', {
        username: username.value,
        message: message.value
    })
    // reinicio de campo
    username.disabled = true;
    message.value = '';
    message.focus();
})
// Eventos Conexion WebSocket
socket.on('message', (data) => {
    console.log(data);
})

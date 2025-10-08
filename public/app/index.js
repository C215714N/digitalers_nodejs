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
//Funciones
const renderMessage = (data) => {
    const ul = document.querySelector('ul');
    ul.innerHTML += `
        <li id="${data.id}" class="card col-md-6 col-lg-4 ${data.id === 'user_'+socket.id ? 'self ms-auto bg-success-subtle' :'chat me-auto bg-primary-subtle'}">
            <strong class="card-header">${data.username}:</strong> 
            <span class="card-body">${data.message}</span>
        </li>`
}
// Eventos Conexion WebSocket
socket.on('message', renderMessage)

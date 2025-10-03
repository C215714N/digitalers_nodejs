(() => document.addEventListener('DOMContentLoaded', () => {
    console.log('recursos cargados');
    // Eventos Implementados
    const events = [
        'click',
        'scroll',
        'doubleclick',
        'mousemove',
        'mouseover', 
        'input', 
        'keyup', 
        'drag', 
        'dragover',
        'dragleave',
        'drop',
        'close',
    ]
    // Manejador de Eventos
    const eventHandler = (ev) => {
        console.log(ev.type)
    }
    // Escuchador de eventos
    events.forEach(ev => document.addEventListener(ev, eventHandler))
}))()
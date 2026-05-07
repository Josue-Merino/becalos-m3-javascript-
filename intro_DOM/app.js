// Selección de elementos
const form = document.querySelector('#form');
const input = document.querySelector('#message-box');
const btnSubmit = document.querySelector('#btn-submit');
const containerMensajes = document.querySelector('.message__container');

// Cargar de LocalStorage o iniciar vacío
let listadoComentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

// Eventos
document.addEventListener('DOMContentLoaded', renderizarComentarios);
form.addEventListener('submit', generarMensaje);
input.addEventListener('input', validarMensaje);

function validarMensaje(event) {
    const message = event.target.value;
    const referencia = event.target.parentElement;

    eliminarAlerta(referencia);

    if (message.trim() !== '') {
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = '1';
    } else {
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.7';
        alerta('Mensaje Vacío', referencia);
    }
}

function generarMensaje(event) {
    event.preventDefault();

    const ahora = new Date();
    
    const nuevoComentario = {
        id: Date.now(),
        message: input.value,
        day: ahora.toLocaleDateString('es-MX'),
        hour: ahora.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
    };

    listadoComentarios = [...listadoComentarios, nuevoComentario];
    
    guardarEnLocalStorage();
    renderizarComentarios();
    
    form.reset();
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = '0.7';
}

function renderizarComentarios() {
    limpiarHTML();

    listadoComentarios.forEach(comentario => {
        const { message, day, hour, id } = comentario;

        // Crear elementos dinámicamente 
        const article = document.createElement('article');
        article.classList.add('message');

        const p = document.createElement('p');
        p.classList.add('message__text');
        p.textContent = message; 

        const divDate = document.createElement('div');
        divDate.classList.add('container__date');
        divDate.innerHTML = `
            <span class="message_date">${day}</span>
            <span class="message_date">${hour}</span>
        `;

        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn__message');
        btnBorrar.textContent = 'Borrar Comentario';
        btnBorrar.onclick = () => borrarComentario(id);

        // Creación de etiqueta article
        article.appendChild(p);
        article.appendChild(divDate);
        article.appendChild(btnBorrar);

        containerMensajes.appendChild(article);
    });
}

function guardarEnLocalStorage() {
    localStorage.setItem('comentarios', JSON.stringify(listadoComentarios));
}

function borrarComentario(id) {
    listadoComentarios = listadoComentarios.filter(comentario => comentario.id !== id);
    guardarEnLocalStorage();
    renderizarComentarios();
}

function limpiarHTML() {
    while(containerMensajes.firstChild) {
        containerMensajes.removeChild(containerMensajes.firstChild);
    }
}

function alerta(mensaje, referencia) {
    eliminarAlerta(referencia);
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    referencia.prepend(alerta);
}

function eliminarAlerta(referencia) {
    const existeAlerta = referencia.querySelector('.alerta');
    if (existeAlerta) existeAlerta.remove();
}
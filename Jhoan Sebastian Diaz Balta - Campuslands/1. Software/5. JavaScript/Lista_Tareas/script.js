const input = document.getElementById('nueva-tarea');
const btnAgregar = document.getElementById('agregar-btn');
const mensajeError = document.getElementById('mensaje-error');
const lista = document.getElementById('lista-tareas');
const totalSpan = document.getElementById('total');
const completadasSpan = document.getElementById('completadas');

btnAgregar.addEventListener('click', agregarTarea);

// Función para actualizar los contadores
function actualizarContadores() {
    const todasLasTareas = document.querySelectorAll('.tarea'); 
    const tareasCompletadas = document.querySelectorAll('.tarea[data-completado="true"]'); 

    totalSpan.textContent = todasLasTareas.length; 
    completadasSpan.textContent = tareasCompletadas.length; 
}

function agregarTarea(){
    const texto = input.value.trim();

    if(!texto || tareaExiste(texto)){
        mensajeError.classList.remove('oculto');
        return;
    }

    mensajeError.classList.add('oculto');

    const li = document.createElement('li');
    li.classList.add('tarea');
    li.setAttribute('data-completado', 'false');

    const span = document.createElement('span');
    span.textContent = texto;

    const divBotones = document.createElement('div');
    divBotones.classList.add('botones');

    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = '✅';
    btnCompletar.classList.add('btn', 'btn-completar');
    btnCompletar.addEventListener('click', ()=>{
        toggleCompletada(li);
        actualizarContadores(); 
    });


    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '🗑️';
    btnEliminar.classList.add('btn', 'btn-eliminar');
    btnEliminar.addEventListener('click', ()=>{
        eliminarTarea(li);
        actualizarContadores(); 
    });

    divBotones.append(btnCompletar, btnEliminar);
    li.append(span, divBotones);

    lista.appendChild(li);

    input.value = '';

    actualizarContadores(); 
}

function tareaExiste(texto){
    const tareas = document.querySelectorAll('.tarea span')
    return Array.from(tareas).some(el => el.textContent.toLocaleLowerCase() === texto.toLocaleLowerCase());
}

function toggleCompletada(tarea){
    const completado = tarea.getAttribute('data-completado') === 'true';

    if(completado){
        tarea.classList.remove('completada');
        tarea.setAttribute('data-completado','false');
    }else{
        tarea.classList.add('completada');
        tarea.setAttribute('data-completado','true');
    }
    
}

function eliminarTarea(tarea){
    tarea.remove();
   
}

// Inicializar contadores cuando la página carga
document.addEventListener('DOMContentLoaded', actualizarContadores);
const input = document.getElementById('nueva-tarea');
const btnAgregar = document.getElementById('agregar-btn');
const mensajeError = document.getElementById('mensaje-error');
const lista = document.getElementById('lista-tareas');
const totalSpan = document.getElementById('total');
const completadasSpan = document.getElementById('completadas');

btnAgregar.addEventListener('click', agregarTarea);


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
        toggleCompletada(li)
    });


    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '🗑️';
    btnEliminar.classList.add('btn', 'btn-eliminar');
    btnEliminar.addEventListener('click', ()=>{
        eliminarTarea(li)
    });

    divBotones.append(btnCompletar, btnEliminar);
    li.append(span, divBotones); // Al ser solo uno es append.

    lista.appendChild(li); // Como pueden ser varias tareas se usan appenchild.

    input.value = '';


}

function tareaExiste(texto){
    const tareas = document.querySelectorAll('.tarea span') // Selector clase o tipo.
    return Array.from(tareas).some(el => el.textContent.toLocaleLowerCase() === texto.toLocaleLowerCase());

    // .some dice que si al menos un elemento de esa array cumple con la condicion, se devuelve dicho elemento.
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

//Trabajo del review los contandores.
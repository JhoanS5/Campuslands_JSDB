const form = document.getElementById('contactForm');
const buscarInput = document.getElementById('buscarInput');
const resultados = document.getElementById('resultados');


let contactos = [];              // Arreglo: colección de contactos
let emailsSet = new Set();       // Set: evitar duplicados por email
let contactosMap = new Map();    // Map: clave (ID) -> contacto


let idCounter = 1;               // ID incremental


form.addEventListener('submit', e => {
  e.preventDefault();


  const formData = new FormData(form);
  const nombre = formData.get("nombre").trim();
  const email = formData.get("email").trim();


  if (emailsSet.has(email)) {
    alert("Este contacto ya está registrado.");
    return;
  }

  // Creo el objeto contacto con un ID único
  const contacto = { 
    id: idCounter++,
    nombre,
    email 
  };

  contactos.push(contacto);
  emailsSet.add(email);
  contactosMap.set(contacto.id, contacto); // La clave del map se vuelve la ID del contacto.


  form.reset();
  mostrarContactos(contactos);
});


buscarInput.addEventListener('input', () => {
  const consulta = buscarInput.value.toLowerCase();
  const filtrados = contactos.filter(c => c.nombre.toLowerCase().includes(consulta));
  mostrarContactos(filtrados);
});


function mostrarContactos(listaContactos) {
  listaContactos.sort((a, b) => a.nombre.localeCompare(b.nombre));


  resultados.innerHTML = listaContactos.length
    ? listaContactos.map(c => `
      <p>
        <strong>${c.nombre}</strong> – ${c.email}
        <button class="btn-eliminar" data-id="${c.id}">Eliminar</button>
      </p>`).join("")
    : "<p>No hay contactos para mostrar.</p>";
  
  // Adjunto los event listeners a los nuevos botones de eliminar
  document.querySelectorAll('.btn-eliminar').forEach(button =>{
    button.addEventListener('click', (e) =>{
      // e.target es directamente ese botón clickeado
      // e.target.dataset es el objeto { id: "5" }
      // e.target.dataset.id es la cadena "5"
      const id = parseInt(e.target.dataset.id); // Convierte "5" a 5 (número)
      eliminarContacto(id);
    });
  });
}


function eliminarContacto(idEliminar){
  // Obtengo el contacto completo del Map para acceder a su email
  const contactoAEliminar = contactosMap.get(idEliminar);

  if (contactoAEliminar){
    // Creo un nuevo arreglo excluyendo el contacto con el ID especificado
    contactos = contactos.filter(c => c.id !== idEliminar);

    emailsSet.delete(contactoAEliminar.email);

    contactosMap.delete(idEliminar);

    mostrarContactos(contactos);
  }
}



/*
Para las funcionalidades de agregar y buscar: No necesitas el id. 
Podrías simplemente agregar { nombre, email } al array contactos y aún así mostrar y buscar.

Para la funcionalidad de eliminar (o editar/actualizar): El id es crucial. Te permite identificar de forma única cada registro y manipularlo (borrarlo, modificarlo) sin ambigüedad. 
Además, es lo que usas para el atributo data-id en el botón de eliminar, 
que le dice a JavaScript qué contacto se está intentando borrar.
*/


/*
Posible Solucion:
eliminarPersonaBtn.addEventListener('click', () => {
  const consulta = buscarInput.value.toLowerCase().trim();
  if (!consulta) {
    alert("Por favor, introduce el nombre o email del contacto que deseas eliminar.");
    return;
  }

  // Encontrar contactos a eliminar (puede ser por nombre o email, dependiendo de lo que se busque)
  const contactosParaEliminar = contactos.filter(c => 
    c.nombre.toLowerCase().includes(consulta) || c.email.toLowerCase().includes(consulta)
  );

  if (contactosParaEliminar.length === 0) {
    alert("No se encontraron contactos que coincidan con la búsqueda para eliminar.");
    return;
  }

  // Confirmar la eliminación si hay varios contactos
  if (contactosParaEliminar.length > 1) {
    const confirmacion = confirm(`Se encontraron ${contactosParaEliminar.length} contactos. ¿Estás seguro de que quieres eliminarlos todos?`);
    if (!confirmacion) {
      return;
    }
  }

  // Realizar la eliminación
  eliminarContactos(contactosParaEliminar);
});

function eliminarContactos(listaAEliminar) {
  listaAEliminar.forEach(contactoAEliminar => {
    // Eliminar del array contactos
    contactos = contactos.filter(c => c.email !== contactoAEliminar.email);
    // Eliminar del Set emailsSet
    emailsSet.delete(contactoAEliminar.email);
    // Eliminar del Map contactosMap
    contactosMap.delete(contactoAEliminar.email);
  });

  // Limpiar el input de búsqueda después de eliminar
  buscarInput.value = ''; 
  // Mostrar la lista actualizada de contactos
  mostrarContactos(contactos);
}

function mostrarContactos(lista) {
  lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

  resultados.innerHTML = lista.length
    ? lista.map(c => `<p><strong>${c.nombre}</strong> – ${c.email}</p>`).join("")
    : "<p>No hay contactos para mostrar.</p>";

  // Añadir event listeners a los nuevos botones de eliminar individuales
  document.querySelectorAll('.eliminar-individual').forEach(button => {
    button.addEventListener('click', (e) => {
      const emailAEliminar = e.target.dataset.email;
      const contactoAEliminar = contactosMap.get(emailAEliminar);
      if (contactoAEliminar) {
        eliminarContactos([contactoAEliminar]); // Pasamos un array con el contacto a eliminar
      }
    });
  });
}
*/
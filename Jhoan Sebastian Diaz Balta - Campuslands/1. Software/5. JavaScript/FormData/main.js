// 1. Obtención de elementos del DOM
const form = document.getElementById('contactForm');
const buscarInput = document.getElementById('buscarInput');
const resultados = document.getElementById('resultados');

// 2. Estructuras de datos para almacenar contactos
let contactos = [];              // Arreglo: colección principal de todos los contactos.
let emailsSet = new Set();       // Set: se usa para verificar rápidamente si un email ya existe y evitar duplicados.
let contactosMap = new Map();    // Map: almacena contactos usando un ID único como clave, útil para búsquedas por ID o para futuras operaciones.

// 3. Contador para asignar IDs únicos a cada contacto
let idCounter = 1;

// 4. Manejo del evento de envío del formulario (cuando se presiona "Agregar")
form.addEventListener('submit', e => {
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario (comportamiento por defecto del navegador).

  // Obtiene los datos del formulario de manera eficiente
  const formData = new FormData(form);
  const nombre = formData.get("nombre").trim(); // Obtiene el valor del input 'nombre' y elimina espacios en blanco al inicio/final.
  const email = formData.get("email").trim();   // Obtiene el valor del input 'email' y elimina espacios en blanco al inicio/final.

  // Validación: comprueba si el email ya existe
  if (emailsSet.has(email)) {
    alert("Este contacto ya está registrado."); // Muestra una alerta si el email ya está en el Set.
    return; // Detiene la ejecución de la función.
  }

  // Crea un nuevo objeto de contacto
  const contacto = { nombre, email };

  // Almacena el nuevo contacto en las diferentes estructuras de datos
  contactos.push(contacto);        // Agrega el contacto al arreglo.
  emailsSet.add(email);            // Agrega el email al Set para futuras validaciones.
  contactosMap.set(idCounter++, contacto); // Agrega el contacto al Map con un ID único y luego incrementa el contador.

  form.reset(); // Limpia los campos del formulario después de agregar el contacto.
  mostrarContactos(contactos); // Vuelve a mostrar la lista de contactos, incluyendo el recién agregado.
});

// 5. Manejo del evento de búsqueda (cuando se escribe en el campo de búsqueda)
buscarInput.addEventListener('input', () => {
  const consulta = buscarInput.value.toLowerCase(); // Obtiene el texto de búsqueda y lo convierte a minúsculas para una búsqueda insensible a mayúsculas/minúsculas.
  // Filtra los contactos: crea un nuevo arreglo con solo los contactos cuyos nombres incluyen la consulta.
  const filtrados = contactos.filter(c => c.nombre.toLowerCase().includes(consulta));
  mostrarContactos(filtrados); // Muestra los contactos filtrados.
});

// 6. Función para mostrar (o actualizar) la lista de contactos en la interfaz
function mostrarContactos(lista) {
  // Ordena la lista alfabéticamente por nombre antes de mostrarla.
  lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Actualiza el contenido del div 'resultados'
  resultados.innerHTML = lista.length // Si la lista tiene elementos...
    ? lista.map(c => `<p><strong>${c.nombre}</strong> – ${c.email}</p>`).join("") // Crea un párrafo HTML para cada contacto y los une en una sola cadena.
    : "<p>No hay contactos para mostrar.</p>"; // Si la lista está vacía, muestra un mensaje.
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
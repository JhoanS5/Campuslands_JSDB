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
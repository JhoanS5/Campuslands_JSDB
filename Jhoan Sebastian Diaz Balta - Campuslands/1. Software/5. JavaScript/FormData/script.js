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




// frontend/js/main.js

// Variables globales para elementos del DOM
const seccionAutenticacion = document.getElementById('seccion-autenticacion');
const mainPanel = document.getElementById('main-panel');
const registroContenedor = document.getElementById('registro-contenedor');
const loginContenedor = document.getElementById('login-contenedor');
const mostrarLoginBtn = document.getElementById('mostrar-login');
const mostrarRegistroBtn = document.getElementById('mostrar-registro');
const registroForm = document.getElementById('registro-form');
const loginForm = document.getElementById('login-form');
const mensajeRegistro = document.getElementById('mensaje-registro');
const loginMensaje = document.getElementById('login-mensaje');
const usuarioNombreDisplay = document.getElementById('usuario-nombre-display');
const logoutBtn = document.getElementById('logout-btn'); // Declaración correcta

const btnDerechos = document.getElementById('btn-derechos');
const btnDeberes = document.getElementById('btn-deberes');
const derechosSeccion = document.getElementById('derechos-seccion');
const deberesSeccion = document.getElementById('deberes-seccion');

const derechosContenedor = document.getElementById('derechosContenedor');
const deberesContenedor = document.getElementById('deberesContenedor');

const progresoBarDerechos = document.getElementById('progreso-bar-derechos');
const progresoTextoDerechos = document.getElementById('progreso-texto-derechos');
const progresoBarDeberes = document.getElementById('progreso-bar-deberes');
const progresoTextoDeberes = document.getElementById('progreso-texto-deberes');

const insigniaContenedor = document.getElementById('insignia-contenedor');
const usuarioInsigniaInline = document.getElementById('usuario-insignia-inline'); // Nueva insignia en línea

// Estado de la aplicación
let usuarioActual = null;
let tarjetasLeidasDerechos = new Set();
let tarjetasLeidasDeberes = new Set();

// Manejadores de eventos para cambiar entre formularios de registro y login
mostrarLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registroContenedor.style.display = 'none';
    loginContenedor.style.display = 'block';
    mensajeRegistro.textContent = ''; // Limpiar mensajes
});

mostrarRegistroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registroContenedor.style.display = 'block';
    loginContenedor.style.display = 'none';
    loginMensaje.textContent = ''; // Limpiar mensajes
});

// Manejador del formulario de registro
registroForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const tipoDocumento = document.getElementById('tipo-documento').value;
    const numeroDocumento = document.getElementById('num-documento').value;
    const habitaciones = document.getElementById('habitaciones').value;
    const servicios = document.getElementById('servicios').value;

    const nuevoUsuario = {
        nombre,
        tipo_documento: tipoDocumento, // Coincide con el nombre esperado en Flask
        numero_documento: numeroDocumento, // Coincide con el nombre esperado en Flask
        habitaciones,
        servicios,
        password: numeroDocumento // La contraseña es el numero_documento para el backend actual
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        });

        const data = await response.json();

        if (response.ok) {
            mensajeRegistro.textContent = data.message + '. ¡Ahora puedes iniciar sesión!';
            mensajeRegistro.style.color = 'green';
            registroForm.reset();

            // Limpiar el almacenamiento local para el nuevo usuario
            localStorage.removeItem(`progresoDerechos_${numeroDocumento}`);
            localStorage.removeItem(`progresoDeberes_${numeroDocumento}`);

            setTimeout(() => {
                registroContenedor.style.display = 'none';
                loginContenedor.style.display = 'block';
            }, 2000);
        } else {
            mensajeRegistro.textContent = data.message || 'Error en el registro.';
            mensajeRegistro.style.color = 'red';
        }
    } catch (error) {
        console.error('Error de red al registrar:', error);
        mensajeRegistro.textContent = 'Error de conexión. Inténtalo de nuevo más tarde.';
        mensajeRegistro.style.color = 'red';
    }
});

// Manejador del formulario de login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const numeroDocumento = document.getElementById('login-num-documento').value;
    const password = document.getElementById('login-password').value; // La contraseña es el numero_documento para el backend actual

    const credenciales = {
        numero_documento: numeroDocumento, // Coincide con el nombre esperado en Flask
        password: password // La contraseña es el numero_documento para el backend actual
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credenciales)
        });

        const data = await response.json();

        if (response.ok) {
            usuarioActual = data.usuario;
            loginMensaje.textContent = data.message;
            loginMensaje.style.color = 'green';
            
            // Cargar progreso del usuario (si lo manejas en el frontend)
            const progresoDerechosGuardado = localStorage.getItem(`progresoDerechos_${usuarioActual.numero_documento}`);
            if (progresoDerechosGuardado) {
                tarjetasLeidasDerechos = new Set(JSON.parse(progresoDerechosGuardado));
            } else {
                tarjetasLeidasDerechos.clear(); // Limpiar si no hay progreso guardado
            }

            const progresoDeberesGuardado = localStorage.getItem(`progresoDeberes_${usuarioActual.numero_documento}`);
            if (progresoDeberesGuardado) {
                tarjetasLeidasDeberes = new Set(JSON.parse(progresoDeberesGuardado));
            } else {
                tarjetasLeidasDeberes.clear(); // Limpiar si no hay progreso guardado
            }

            setTimeout(() => {
                seccionAutenticacion.style.display = 'none';
                mainPanel.style.display = 'flex';
                usuarioNombreDisplay.textContent = usuarioActual.nombre;
                cargarContenido();
                verificarInsignia(); // Verificar insignia al iniciar sesión
            }, 1000);
        } else {
            loginMensaje.textContent = data.message || 'Error en el inicio de sesión.';
            loginMensaje.style.color = 'red';
        }
    } catch (error) {
        console.error('Error de red al iniciar sesión:', error);
        loginMensaje.textContent = 'Error de conexión. Inténtalo de nuevo más tarde.';
        loginMensaje.style.color = 'red';
    }
});

// Manejador del botón de cerrar sesión
logoutBtn.addEventListener('click', () => {
    // Guardar el progreso actual del usuario antes de cerrar sesión
    if (usuarioActual) {
        localStorage.setItem(`progresoDerechos_${usuarioActual.numero_documento}`, JSON.stringify(Array.from(tarjetasLeidasDerechos)));
        localStorage.setItem(`progresoDeberes_${usuarioActual.numero_documento}`, JSON.stringify(Array.from(tarjetasLeidasDeberes)));
    }

    usuarioActual = null;
    tarjetasLeidasDerechos.clear();
    tarjetasLeidasDeberes.clear();
    mainPanel.style.display = 'none';
    seccionAutenticacion.style.display = 'flex';
    loginForm.reset();
    loginMensaje.textContent = '';
    usuarioInsigniaInline.classList.add('hidden-insignia'); // Ocultar insignia en línea
});

// Función para cargar el contenido de derechos y deberes
function cargarContenido() {
    // Siempre ocultar el contenedor principal de la insignia (el cuadro verde)
    // Ya no se muestra, así que esta línea es redundante pero no hace daño.
    insigniaContenedor.style.display = 'none'; 

    // Si el usuario actual ya tiene la insignia, mostrarla en línea
    if (usuarioActual && usuarioActual.insignia_lectura) {
        usuarioInsigniaInline.classList.remove('hidden-insignia'); // Mostrar insignia en línea
    } else {
        usuarioInsigniaInline.classList.add('hidden-insignia'); // Ocultar insignia en línea
    }

    // Cargar y mostrar tarjetas de Derechos
    derechosContenedor.innerHTML = ''; // Limpiar antes de cargar
    derechosData.forEach(data => {
        const tarjeta = crearTarjetaDinamica(data, 'derechos');
        derechosContenedor.appendChild(tarjeta);
    });

    // Cargar y mostrar tarjetas de Deberes (inicialmente ocultas)
    deberesContenedor.innerHTML = ''; // Limpiar antes de cargar
    deberesData.forEach(data => {
        const tarjeta = crearTarjetaDinamica(data, 'deberes');
        deberesContenedor.appendChild(tarjeta);
    });

    actualizarProgreso('derechos');
    actualizarProgreso('deberes');
}

// Función para crear una tarjeta dinámica
function crearTarjetaDinamica(data, tipo) {
    const card = document.createElement('div');
    card.classList.add('card-dinamica');
    card.dataset.id = data.id; // Guardar el ID para marcar como leído

    // Contenedor principal para el contenido de la tarjeta
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content-wrapper');

    // Columna para el título
    const titleColumn = document.createElement('div');
    titleColumn.classList.add('card-title-column');
    const h3 = document.createElement('h3');
    h3.textContent = data.titulo;
    titleColumn.appendChild(h3);

    // Columna para la descripción
    const descriptionColumn = document.createElement('div'); // Nueva columna para la descripción
    descriptionColumn.classList.add('card-description-column');
    const pDescripcion = document.createElement('p');
    pDescripcion.textContent = data.descripcion;
    descriptionColumn.appendChild(pDescripcion);

    // Columna para el ejemplo
    const exampleColumn = document.createElement('div'); // Nueva columna para el ejemplo
    exampleColumn.classList.add('card-example-column');
    // Verificar si data.ejemplo_practico existe antes de intentar mostrarlo
    if (data.ejemplo_practico) {
        const pEjemplo = document.createElement('p');
        pEjemplo.innerHTML = `<strong>Ejemplo:</strong> ${data.ejemplo_practico}`;
        exampleColumn.appendChild(pEjemplo);
    }

    contentWrapper.appendChild(titleColumn);
    contentWrapper.appendChild(descriptionColumn); // Añadir la columna de descripción
    contentWrapper.appendChild(exampleColumn); // Añadir la columna de ejemplo
    card.appendChild(contentWrapper);

    // Marcar como leído si ya lo estaba (estado local)
    if ((tipo === 'derechos' && tarjetasLeidasDerechos.has(data.id)) || (tipo === 'deberes' && tarjetasLeidasDeberes.has(data.id))) {
        card.classList.add('leida');
    }

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
            if (tipo === 'derechos') {
                tarjetasLeidasDerechos.add(data.id);
            } else {
                tarjetasLeidasDeberes.add(data.id);
            }
            card.classList.add('leida'); // Asegurarse de que la clase 'leida' se añada
            actualizarProgreso(tipo);
            verificarInsignia(); // Llamar a verificarInsignia para actualizar el backend si aplica
        }
    });

    return card;
}

// Función para actualizar la barra de progreso
function actualizarProgreso(tipo) {
    let progresoActual = 0;
    let totalTarjetas = 0;
    let progresoBar;
    let progresoTexto;

    if (tipo === 'derechos') {
        progresoActual = tarjetasLeidasDerechos.size;
        totalTarjetas = derechosData.length;
        progresoBar = progresoBarDerechos;
        progresoTexto = progresoTextoDerechos;
    } else {
        progresoActual = tarjetasLeidasDeberes.size;
        totalTarjetas = deberesData.length;
        progresoBar = progresoBarDeberes;
        progresoTexto = progresoTextoDeberes;
    }

    const porcentaje = (progresoActual / totalTarjetas) * 100;
    progresoBar.style.width = `${porcentaje}%`; // Modificar width para barra horizontal
    progresoTexto.textContent = `${progresoActual} / ${totalTarjetas}`;
}

// Función para verificar si se ganó la insignia y actualizar el backend
async function verificarInsignia() {
    const todosDerechosLeidos = tarjetasLeidasDerechos.size === derechosData.length;
    const todosDeberesLeidos = tarjetasLeidasDeberes.size === deberesData.length;

    // Asegurarse de que el contenedor principal de la insignia (el cuadro verde) esté oculto
    insigniaContenedor.style.display = 'none';

    if (todosDerechosLeidos && todosDeberesLeidos && usuarioActual) {
        if (!usuarioActual.insignia_lectura) { // La insignia es recién ganada
            try {
                // Esta llamada al backend Flask es para actualizar la base de datos de tu aplicación Flask
                // con el estado de la insignia.
                const response = await fetch('http://127.0.0.1:5000/api/actualizar_insignia', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ numero_documento: usuarioActual.numero_documento })
                });

                const data = await response.json();

                if (response.ok) {
                    console.log(data.message);
                    usuarioActual.insignia_lectura = true; // Actualizar el estado local del usuario
                    usuarioInsigniaInline.classList.remove('hidden-insignia'); // Mostrar insignia en línea
                    
                    // Guardar el progreso (incluida la insignia) en localStorage inmediatamente
                    localStorage.setItem(`progresoDerechos_${usuarioActual.numero_documento}`, JSON.stringify(Array.from(tarjetasLeidasDerechos)));
                    localStorage.setItem(`progresoDeberes_${usuarioActual.numero_documento}`, JSON.stringify(Array.from(tarjetasLeidasDeberes)));

                } else {
                    console.error('Error al actualizar insignia en el backend Flask:', data.message);
                }
            } catch (error) {
                console.error('Error de red al actualizar insignia en el backend Flask:', error);
            }
        } else { // La insignia ya fue ganada (al iniciar sesión o verificación posterior)
            usuarioInsigniaInline.classList.remove('hidden-insignia'); // Asegurarse de que la insignia en línea se muestre
        }
    } else { // No todas las tarjetas leídas, o no hay usuario actual
        usuarioInsigniaInline.classList.add('hidden-insignia'); // Ocultar insignia en línea
    }
}

// Manejadores de eventos para los botones de navegación de secciones
btnDerechos.addEventListener('click', () => {
    derechosSeccion.style.display = 'block';
    deberesSeccion.style.display = 'none';
    btnDerechos.classList.add('active');
    btnDeberes.classList.remove('active');
    document.getElementById('progreso-bar-derechos-contenedor').style.display = 'block';
    document.getElementById('progreso-bar-deberes-contenedor').style.display = 'none';
});

btnDeberes.addEventListener('click', () => {
    deberesSeccion.style.display = 'block';
    derechosSeccion.style.display = 'none';
    btnDeberes.classList.add('active');
    btnDerechos.classList.remove('active');
    document.getElementById('progreso-bar-deberes-contenedor').style.display = 'block';
    document.getElementById('progreso-bar-derechos-contenedor').style.display = 'none';
});

// Inicialización: Ocultar el panel principal al cargar
document.addEventListener('DOMContentLoaded', () => {
    mainPanel.style.display = 'none';
    // No se inicializa Firebase aquí
});

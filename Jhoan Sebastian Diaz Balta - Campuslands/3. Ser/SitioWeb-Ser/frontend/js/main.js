// URLs de endpoints del backend
const API_URL = "http://127.0.0.1:5000/api";

const appContenedor = document.getElementById("app-contenedor");
const seccionAutenticacion = document.getElementById("seccion-autenticacion");
const mainPanel = document.getElementById("main-panel");

// Formularios
const registroForm = document.getElementById("registro-form");
const loginForm = document.getElementById("login-form");

// Contenedores de formularios
const registroContenedor = document.getElementById("registro-contenedor");
const loginContenedor = document.getElementById("login-contenedor");

// Enlaces para cambiar de formulario
const mostrarLoginBtn = document.getElementById("mostrar-login");
const mostrarRegistroBtn = document.getElementById("mostrar-registro");

// Mensajes de feedback
const mensajeRegistro = document.getElementById("mensaje-registro");
const loginMensaje = document.getElementById("login-mensaje");

// Contenedores de las tarjetas
const derechosContenedor = document.getElementById("derechosContenedor");
const deberesContenedor = document.getElementById("deberesContenedor");

// Elementos del panel principal
const usuarioNombreDisplay = document.getElementById("usuario-nombre-display");
const logoutBtn = document.getElementById("logout-btn");

// Lógica de la barra de progreso
const progresoBar = document.getElementById("progreso-bar");
const progresoTexto = document.getElementById("progreso-texto");
const insigniaContenedor = document.getElementById("insignia-contenedor");

let tarjetasLeidas = new Set();
const totalTarjetas = derechosData.length + deberesData.length;

// Funciones
mostrarLoginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    registroContenedor.style.display = "none";
    loginContenedor.style.display = "block";
});

mostrarRegistroBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    registroContenedor.style.display = "block";
    loginContenedor.style.display = "none";
});

// Funcion registroUsuario
registroForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    mensajeRegistro.textContent = "Registrando...";
    mensajeRegistro.style.color = "gray";

    const formData = new FormData(registroForm);
    const data = Object.fromEntries(formData.entries());

    // El input de servicios se guarda en un array, separado por comas.
    const serviciosArray = data.servicios.split(",").map(s => s.trim());
    data.servicios = serviciosArray;

    data.numero_documento = String(data.numero_documento);

    try{
        const response = await fetch(`${API_URL}/registro`,{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.status = 201){
            mensajeRegistro.textContent = result.message;
            mensajeRegistro.style.color = "green";
            // Limpiamos el formulario y mostramos el login
            registroForm.reset();
            mostrarLoginBtn.click();

        } else {
            mensajeRegistro.textContent = result.message;
            mensajeRegistro.style.color = "red";
        }

    } catch (error) {
        console.error("Error en el registro:", error);
        mensajeRegistro.textContent = "Error de conexión. Intente más tarde.";
        mensajeRegistro.style.color = "red";
    }
});

// Función para manejar el login de usuario
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginMensaje.textContent = "Iniciando sesión...";
    loginMensaje.style.color = "gray";

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());
    
    // Convertimos el numero_documento a string para que coincida con el backend
    data.numero_documento = String(data.numero_documento);

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) { 
            loginMensaje.textContent = result.message;
            loginMensaje.style.color = "green";
            // Guardar datos del usuario en la sesión del navegador
            sessionStorage.setItem("usuario", JSON.stringify(result.usuario));
            // Mostrar el panel principal
            mostrarPanelPrincipal();

        } else {
            loginMensaje.textContent = result.message;
            loginMensaje.style.color = "red";
        }
        
    } catch (error) {
        console.error("Error en el login:", error);
        loginMensaje.textContent = "Error de conexión. Intente más tarde.";
        loginMensaje.style.color = "red";
    }
});

// Función para crear las tarjetas
function crearTarjeta(item, tipo) {
    const card = document.createElement("div");
    card.classList.add("card-dinamica");
    card.setAttribute("data-id", item.id);
    card.setAttribute("data-tipo", tipo);

    const front = document.createElement("div");
    front.classList.add("card-front");
    front.innerHTML = `<h3>${item.titulo}</h3>`;

    const back = document.createElement("div");
    back.classList.add("card-back");
    back.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
        <p><strong>Ejemplo:</strong> ${item.ejemplo_practico}</p>
    `;
    
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        
        const cardId = `${tipo}-${item.id}`;
        if (!tarjetasLeidas.has(cardId)) {
            tarjetasLeidas.add(cardId);
            actualizarProgreso();
        }
    });

    return card;
}

// Función para actualizar la barra de progreso y la insignia
async function actualizarProgreso() {
    const progreso = tarjetasLeidas.size;
    const porcentaje = (progreso / totalTarjetas) * 100;
    
    progresoBar.style.width = `${porcentaje}%`;
    progresoTexto.textContent = `${progreso} / ${totalTarjetas}`;
    
    if (progreso === totalTarjetas) {
        insigniaContenedor.style.display = "block";
        
        const usuario = JSON.parse(sessionStorage.getItem("usuario"));
        if (usuario && !usuario.insignia_lectura) {
            try {
                const response = await fetch(`${API_URL}/actualizar_insignia`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ numero_documento: usuario.numero_documento }),
                });
                const result = await response.json();
                if(result.success) {
                    console.log("Insignia actualizada en el backend");
                    usuario.insignia_lectura = true;
                    sessionStorage.setItem("usuario", JSON.stringify(usuario));
                }
            } catch (error) {
                console.error("Error al actualizar insignia:", error);
            }
        }
    }
}

// Función para mostrar el panel principal y las tarjetas
function mostrarPanelPrincipal() {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    if (usuario) {
        seccionAutenticacion.style.display = "none";
        mainPanel.style.display = "block";
        usuarioNombreDisplay.textContent = usuario.nombre;
        
        // Limpiamos y cargamos las tarjetas
        derechosContenedor.innerHTML = "";
        deberesContenedor.innerHTML = "";
        derechosData.forEach(derecho => {
            derechosContenedor.appendChild(crearTarjeta(derecho, 'derecho'));
        });
        deberesData.forEach(deber => {
            deberesContenedor.appendChild(crearTarjeta(deber, 'deber'));
        });
        
        // Si el usuario ya tiene la insignia, la mostramos
        if (usuario.insignia_lectura) {
            insigniaContenedor.style.display = "block";
        } else {
             insigniaContenedor.style.display = "none";
        }
        
    } else {
        seccionAutenticacion.style.display = "block";
        mainPanel.style.display = "none";
    }
}

// Función para cerrar sesión
logoutBtn.addEventListener("click", () => {
    sessionStorage.clear();
    location.reload(); // Recarga la página para resetear todo
});

// Función que se ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("usuario")) {
        mostrarPanelPrincipal();
    }
});

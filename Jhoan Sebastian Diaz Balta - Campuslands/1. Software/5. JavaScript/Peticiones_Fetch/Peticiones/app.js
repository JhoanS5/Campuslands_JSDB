// Validar que tenemos comunicación al servidor en la terminal: ping 'ruta';
const API_URL = "http://192.168.10.166:8080/api/usuarios";

const form = document.getElementById('usuario-form');
const tbody = document.getElementById('usuarios-tbody');
const fotoInput = document.getElementById('foto');

// Para la foto en base64 necesitamos una variable que vamos a declarar.
let fotoBase64 = "";

// CONVERSION A BASE64
fotoInput.addEventListener("change", () => {
    // Agregamos un lector que se activa cuando cargamos la foto.
    const reader = new FileReader();
    reader.onload = function () {
        // Nos descarta ciertas cosas de la ruta de la imagen, después de la coma, nos tome los valores
        // y el prefijo anterior lo descarte completamente.
        fotoBase64 = reader.result.split(",")[1];
    };
    reader.readAsDataURL(fotoInput.files[0]); // Convierte la imagen en base 64.
});

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Creamos el objeto usuario.
    const usuario = {
        id: form["usuario-id"].value,
        name: form.name.value,
        email: form.email.value,
        edad: form.edad.value,
        ciudad: form.ciudad.value,
        biografia: form.biografia.value,
        fotoBase64: fotoBase64
    };

    // Mediante el id puedo saber cual es el usuario que estoy recuperando.
    const id = form["usuario-id"].value;

    if (id) {
        // PUT
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario), // stringify Cambiar Objeto a JSON
        });
    } else {
        // POST
        await fetch(`${API_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });
    }

    // Después de hacer lo anterior debemos limpiar el formulario
    form.reset();
    fotoBase64 = "";
    form["usuario-id"].value = "";
    loadUsuarios();
});

// Cargar Usuarios
async function loadUsuarios() {
    // res es Respuesta
    const res = await fetch(API_URL);
    const usuarios = await res.json(); // Que esa respuesta me la trae a JSON.

    tbody.innerHTML = "";

    usuarios.forEach((usuario) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.edad || ""}</td>
            <td>${usuario.ciudad || ""}</td>
            <td>${usuario.biografia || ""}</td>
            <td>${usuario.fotoBase64 ? `<img src="data:image/png;base64,${usuario.fotoBase64}" style="max-width: 50px; max-height: 50px;"/>` : ""}</td>
            <td>
                <button class="edit-btn" data-id="${usuario.id}">Editar</button>
                <button class="delete-btn" data-id="${usuario.id}">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Agregar eventos a los botones después de crear las filas
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            // Buscar usuario por id
            const usuario = usuarios.find(u => u.id == id);
            if (usuario) {
                form["usuario-id"].value = usuario.id;
                form.name.value = usuario.name;
                form.email.value = usuario.email;
                form.edad.value = usuario.edad || "";
                form.ciudad.value = usuario.ciudad || "";
                form.biografia.value = usuario.biografia || "";
                fotoBase64 = usuario.fotoBase64 || "";
            }
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            if (confirm("¿Estás seguro de eliminar este usuario?")) {
                await fetch(`${API_URL}/${id}`, {
                    method: "DELETE"
                });
                loadUsuarios();
            }
        });
    });
}

// Carguemos los usuarios apenas la pagina cargue.
window.onload = loadUsuarios;



// Al editar algo siempre un id por parametro.

async function editarUsuario(id){
    //Para editar debo traer el id del usuario
    const res = await fetch(`${API_URL}/${id}`);//este es un GET //De esta forma sabemos cual es el usuario a editar.
    const user = await res.json();
    
    form["usuario-id"].value = user.id;
    form.name.value = user.name;
    form.email.value = user.email;
    form.edad.value = user.edad;
    form.ciudad.value = user.ciudad;
    form.biografia.value = user.biografia;
    fotoBase64 = user.fotoBase64;
}

async function eliminarUsuario(id){
    if(confirm("¿Esta seguro de eliminar este usuario?")){
        await fetch(`${API_URL}/${id}`,{ //Este es un DELETE.
            method: "DELETE",
        });
        loadUsuarios();
    }
}

/*
usuarios.forEach((usuario) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.edad || ""}</td>
            <td>${usuario.ciudad || ""}</td>
            <td>${usuario.biografia || ""}</td>
            <td>${usuario.fotoBase64 ? `<img src="data:image/png;base64,${usuario.fotoBase64}" style="max-width: 50px; max-height: 50px;"/>` : ""}</td>
            <td class="actions">
                <button onclick = "editarUsuario(${u.id})">Editar</button>
                <button onclick = "eliminarUsuario(${u.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
*/
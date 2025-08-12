// Validar que tenemos comunicación al servidor en la terminal: ping 'ruta';
const API_URL = "http://192.168.10.166:8080/api/usuarios";

const form = document.getElementById('usuario-form');
const tbody = document.getElementById('usuarios-tbody');
const fotoInput = document.getElementById('foto');

// Para la foto en base64 necesitamos una variable que vamos a declarar.
let fotoBase64 = "";

//CONVERSION A BASE64
fotoInput.addEventListener("change", ()=>{
    //Agregamos un lector que se activa cuando cargamos la foto.
    const reader = new FileReader();
    reader.onload = function(){
        //Nos descarta ciertas cosas de la ruta de la imagen, despues de la coma, nos tome los valores
        // y el prefijo anterior lo descarte completamente.
        fotoBase64 = reader.result.split(",")[1];
    };
    reader.readAsDataURL(this.files[0]); //Convierte la imagen en base 64.
});

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Creamos el objeto usuario.
    const usuario ={
        id: form.id.value,
        name: form.name.value,
        email: form.email.value,
        edad: form.edad.value,
        ciudad: form.ciudad.value,
        biografia: form.biografia.value,
        fotoBase64: fotoBase64
    };

    //Mediante el id puedo saber cual es el usuario que estoy recuperando.
    const id = form["usuario-id"].value;

    if(id){
        //PUT
        await fetch(`${API_URL}/${id}`,{
            method: "PUT",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(usuario), //stringify Cambiar Objeto a JSON
        });
    }else{
        //POST
        await fetch(`${API_URL}`,{
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(usuario),
        });
    }

    //Despues de hacer lo anterior debemos limpiar el formulario
    form.reset();
    fotoBase64 = "";
    form["usuario-id"].value = "";
    loadUsuarios();
});

// Cargar Usuarios
async function loadUsuarios(){
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
            <td>${usuario.biografia || ""}""</td>
            <td>${usuario.fotoBase64 ? `<img src="data:image/png;base64,${usuario.fotoBase64}"/>`:""}</td>
        `;
        tbody.appendChild(tr);
    });
}

//Carguemos los usuarios apenas la pagina cargue.
window.onload = loadUsuarios;
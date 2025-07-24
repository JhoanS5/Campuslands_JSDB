const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');

const estado = document.getElementById('estado');
const resultado = document.getElementById('resultado');

const baseDatos = {
    usuario: "admin123",
    password: "Segura2025!"
};

// Validacion del usuario.

function validarUsuario(usuario){
    return new Promise((resolve, reject)=>{
        // setTimout simula la peticion al servidor.
        setTimeout(()=>{
            if(usuario.length < 4){
                reject("El usuario debe tener al menos 4 caracteres");

            }else if(usuario !== baseDatos.usuario){
                reject("Usuario no encontrado");

            }else{
                resolve("Usuario verificado");
            }
        },1600);
    });
}

//Validar contraseña.
function validarPassword(password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ // Expresion regular 
            const segura = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%&*]/.test(password);

            if(!segura){
                reject("Contraseña insegura. Debe tener al menos 8 caracteres, 1 mayuscula, 1 número, 1 simbolo.")

            }else if(password !== baseDatos.password){
                reject("Contraseña incorrecta");

            }else{
                resolve("Contraseña verificada.")
            }


        },2600);
    });
}

// Evento del formulario
loginForm.addEventListener("submit", (e)=>{

    e.preventDefault(); // Evita que se recargue la página.

    resultado.textContent = "";
    estado.textContent = "";

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if(!usuario || !password){
        resultado.className = "error";
        resultado.textContent = "Todos los campos son obligatorios";
        estado.textContent = "Por favor completa todos los campos";
        return;
    }

    estado.textContent = "Verificando credenciales...";

    Promise.all([
        validarUsuario(usuario),
        validarPassword(password)
    ]).then(([resUsuario, resPassword])=>{
        resultado.className = "success";
        resultado.innerHTML = `✅${resUsuario} <br> ✅${resPassword}`;
        estado.textContent = "✅ Inicio de sesión exitoso.";

        //Redirigir despues de 1 segundo.
        setTimeout(()=>{
            window.location.href = "login.html";
        }, 1000);
    }).catch((error)=>{
        resultado.className = "error";
        resultado.textContent = error;
        estado.textContent = "Error en el inicio de sesión."
    }).finally(()=>{
        console.log("Proceso De Autenticación Finalizado.")
    }); // Resivimos dos parametros.

});
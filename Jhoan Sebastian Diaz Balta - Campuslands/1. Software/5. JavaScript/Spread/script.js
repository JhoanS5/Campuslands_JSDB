const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// Unimos el formulario ya que ese tendra un evento
// El evento de submit recarga la pagina osea a la e
formulario.addEventListener("submit", (e)=>{
    e.preventDefault(); // Evita que la página se recarge osea el evento.

    //Obtener datos del formulario

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const ciudad = document.getElementById("ciudad").value;

    // Crear el objeto con los datos

    const usuario = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        fechaRegistro: new Date().toLocaleString(),
        saludar: function(){
            return `Hola soy ${this.nombre} de ${this.ciudad}`
        }
    };

    // Convertir a JSON
    const usuarioJSON = JSON.stringify(usuario);

    //Guardar Usuarios en LocalStorage que es memoria del navegador.
    //sesionStorage cada vez que se cierre la pantalla se pierde información.
    localStorage.setItem("usuario", usuarioJSON);

    //Recuperar y convertir a objeto

    const datosRecuperados = JSON.parse(localStorage.getItem("usuario"));

    // Desestructuración
    const {nombre: nom, ciudad: ciu, edad: ed} = datosRecuperados;
    
    //Clonacion y modificacion con Spread (...)
    const usuarioActualizado = {
        ...datosRecuperados,
        edad: ed+1,
        actualizado: true
    };

    // Mostrar Pantalla

    resultado.innerHTML = `
        <h2>INFORMACION DEL USUARIO</h2>
        <p><strong>Nombre:</strong> ${nom}</p>
        <p><strong>Edad:</strong> ${ed}</p>
        <p><strong>Ciudad:</strong> ${ciu}</p>
        <p><strong>JSON:</strong> ${usuarioJSON}</p>
        <p><strong>Usuario Clonado:</strong> ${JSON.stringify(usuarioActualizado)}</p>`;

    resultado.style.display = 'block';

});
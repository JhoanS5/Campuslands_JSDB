function mostrarMensaje(){
    const nombre = prompt("¿Como te Llamas?: "); // el prompt es el famoso imput
    const mensaje = "Hola "+nombre+", Bienvenido a JavaScript";
    
    // .textContent para que se muestre el contenido.
    document.getElementById("mensaje").textContent = mensaje;
    console.log("Saludo Mostrado: ",mensaje);
    
}
function calcularEdad(){
    // Para traer el valor con .value
    const input = document.getElementById("yearNacimiento").value;
    // La funcion date ya viene con javascript.
    const yearActual = new Date().getFullYear();

    if(input > yearActual || input == yearActual){
        alert("El año de nacimiento no puede ser mayor que el año actual");
        return
    }

    //Lo mejor es hacer doble validacion, tenerla en el html y colocarla en el javascript
    //Triple igual para validacion estricta.
    //isNaN significa si no es un numero.
    if(input === "" || isNaN(input)){
        document.getElementById("resultado").textContent = "Por favor ingresa un año valido.";
        return;
    }

    //parseInt por si nos estan dando strings
    const edad = yearActual - parseInt(input);

    if(edad < 0 || edad > 120){
        document.getElementById("resultado").textContent = "Edad fuera de rango.";
    }else{
        // podemos hacer un format con esto: ¨¨ 
        document.getElementById("resultado").textContent = `Tienes aproximadamente ${edad} años de edad`;
    }
}
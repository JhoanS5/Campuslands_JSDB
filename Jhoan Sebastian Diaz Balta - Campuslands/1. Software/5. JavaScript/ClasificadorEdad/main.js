function clasificarEdad(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    // Verificar si se ingreso un nombre y edad valido
    if(!nombre || isNaN(edad) || edad <= 0 || edad >= 120){
        // Manipulación del Dom
        resultado.innerHTML = "<p style='color:red'>Por favor, ingrese un nombre y edad validos</p>";
        return;
    }

    // Clasificación por edad.

    let clasificacion = "";
    
    if(edad >= 0 && edad < 15){
        clasificacion = "Niño";
    }else if(edad >= 15 && edad < 18){
        clasificacion = "Adolescente";
    }else if(edad >= 18 && edad < 60){
        clasificacion = "Adulto";
    }else{
        clasificacion = "Adulto Mayor";
    }

    let mensaje = `Hola ${nombre.toUpperCase()}. Tienes ${edad} años y eres ${clasificacion}`;

    resultado.innerHTML = `<p>${mensaje}</p>`


}
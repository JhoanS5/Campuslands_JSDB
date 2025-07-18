function impuestosPorEdad(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let sueldo = document.getElementById("sueldo").value;
    let resultado = document.getElementById("resultado");
    
    // Validaciones de Campos

    if(!nombre || isNaN(edad) || isNaN(sueldo) || edad <= 0){
        resultado.innerHTML = `<p style='color:red'>Los datos ingresados son invalidos.</p>`;
        return;
    }

    let clasificacion = "";
    let montoPaga = 0;
    let sueldoNumerico = parseFloat(sueldo);
    let edadNumerica = parseInt(edad);

    if(edadNumerica >= 0 && edadNumerica < 18){
        clasificacion = "Exento";

    }else if(edadNumerica >= 18 && edadNumerica <= 30){
        clasificacion = "Pagas el 10%";
        montoPaga = sueldoNumerico * 0.1;

    }else if(edadNumerica >= 31 && edadNumerica <= 60){
        clasificacion = "Pagas el 20%";
        montoPaga = sueldoNumerico * 0.2;

    }else{
        clasificacion = "Pagas el 15%";
        montoPaga = sueldoNumerico * 0.15;
    }

    resultado.innerHTML = `<p>${nombre} - Edad: ${edadNumerica} - Sueldo: ${sueldoNumerico.toFixed(2)}$.</p>
        <p>Clasificacion: ${clasificacion}.</p>
        <p>Impuesto: ${montoPaga.toFixed(2)}`;

    // Investigar como hacer un formateo de moneda
}

function contadorParImpar(){
    // Obtengo los elementos del DOM
    let numeroInput = document.getElementById("numero").value;
    let resultadoDiv = document.getElementById("resultado2")

    // Validaciones
    let limiteNumerico = parseInt(numeroInput);

    if(isNaN(limiteNumerico) || limiteNumerico <= 0){
        resultadoDiv.innerHTML = `<p style='color:red'>Por favor, Ingresa un número valido y positivo.`;
        return;
    }
    
    let todosLosNumerosStr = "";
    let numerosParesStr = "";
    let numerosImparesStr = "";
    let cantidadPares = 0;
    let cantidadImpares = 0;

    for (let i = 1; i <= limiteNumerico; i++){
        if(i > 1){
            todosLosNumerosStr += ", ";
        }
        todosLosNumerosStr += i;

        if (i % 2 === 0){
            cantidadPares++;

            if (cantidadPares > 1){
                numerosParesStr += ", ";

            }
            numerosParesStr += i;

        }else{
            cantidadImpares++;

            if(cantidadImpares > 1){
                numerosImparesStr += ", ";
            }
            numerosImparesStr += i;
        }

        resultadoDiv.innerHTML = `
        <p>Todos los números: ${todosLosNumerosStr}</p>
        <p>Cantidad de números pares: ${cantidadPares}</p>
        <p>Números pares: ${numerosParesStr || 0}</p>
        <p>Cantidad de números impares: ${cantidadImpares}</p>
        <p>Números impares: ${numerosImparesStr || 0}</p>
        `;

    }
    
}

function validarPassword() {
    let password = document.getElementById("password").value;
    let resultadoDiv = document.getElementById("resultado3");

    const MIN_CARACTERES = 8;

    let esFuerte = true;       
    let mensajesHtml = "";  

    if (password.length < MIN_CARACTERES) {
        mensajesHtml += `<li>Debe tener al menos ${MIN_CARACTERES} caracteres (actualmente: ${password.length}).</li>`;
        esFuerte = false;
    }

    let tieneMayuscula = password.match(/[A-Z]/); // Lo que esta dentro del match es una expresión regular.
    if (!tieneMayuscula) {
        mensajesHtml += `<li>Debe incluir al menos una letra mayuscula.</li>`;
        esFuerte = false;
    }

    let tieneMinuscula = password.match(/[a-z]/);
    if (!tieneMinuscula) {
        mensajesHtml += `<li>Debe incluir al menos una letra minuscula.</li>`;
        esFuerte = false;
    }

    let tieneNumero = password.match(/\d/);
    if (!tieneNumero) {
        mensajesHtml += `<li>Debe incluir al menos un numero.</li>`;
        esFuerte = false;
    }

    let tieneSimbolo = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);

    let mensajeSugerenciaSimbolo = "";
    if (tieneSimbolo) {
        mensajeSugerenciaSimbolo = " (Bien, incluye un simbolo)";
    } else {
        mensajeSugerenciaSimbolo = " (Considera incluir un simbolo para mayor seguridad)";
    }

    if (esFuerte) {
        resultadoDiv.innerHTML = `<p style='color:green'>Contraseña Fuerte | ${mensajeSugerenciaSimbolo}</p>`;
    } else {
        resultadoDiv.innerHTML = `
            <p style='color:red'>Contraseña Débil. Necesita mejorar:</p>
            <ul>
                ${mensajesHtml}
            </ul>
            <p>Sugerencia: ${mensajeSugerenciaSimbolo}</p>
        `;
    }
}
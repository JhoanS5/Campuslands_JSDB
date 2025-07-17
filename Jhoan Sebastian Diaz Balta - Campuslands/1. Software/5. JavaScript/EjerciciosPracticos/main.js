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
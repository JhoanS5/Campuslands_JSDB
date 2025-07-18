// Función autoejecutable

(function(){
    // Función Declarativa
    function contarPalabras(texto){
        const palabras = texto.trim().split(/\s+/) // Quita los espacios al inicio y al final del texto y el punto split nos divide el texto por cada espacio que encuentre.
        return palabras.filter(p => p.length > 0).length;
    }

    // Función de expresión
    const contarCaracteres = function(texto){
        return texto.length;
    }

    // Función flecha
    const contienePalabra = (frase, palabra) => {
        return frase.toLowerCase().includes(palabra.toLowerCase());
    }

    document.getElementById("analizar").addEventListener('click', ()=>{
        const frase = document.getElementById("frase").value;
        const palabra = document.getElementById("buscar").value;
        const resultado = document.getElementById("resultados");

        //Validaciones básicas
        if(frase.trim() === ""){
            resultado.innerHTML = "<p>Por favor, escriba una frase.</p>"
            return;
        }

        const numPalabras = contarPalabras(frase);
        const numCaracteres = contarCaracteres(frase);
        const contiene = contienePalabra(frase, palabra);

        resultado.innerHTML = `
            <p>Palabras: <strong>${numPalabras}</strong></p>
            Caracteres: <strong>${numCaracteres}</strong></p>
            ¿Contiene "${palabra}"?: <strong>${contiene ? "Si":"No"}</strong></p>
        `

    });
})();


function ejecutar(){
    document.getElementById("analizar").addEventListener('click', ()=>{
        const frase = document.getElementById("frase").value;
        const palabra = document.getElementById("buscar").value;
        const resultado = document.getElementById("resultados");

        //Validaciones básicas
        if(frase.trim() === ""){
            resultado.innerHTML = "<p>Por favor, escriba una frase.</p>"
            return;
        }

        const numPalabras = contarPalabras(frase);
        const numCaracteres = contarCaracteres(frase);
        const contiene = contienePalabra(frase, palabra);

        resultado.innerHTML = `
            <p>Palabras: <strong>${numPalabras}</strong></p>
            Caracteres: <strong>${numCaracteres}</strong></p>
            ¿Contiene "${palabra}"?: <strong>${contiene ? "Si":"No"}</strong></p>
        `
    });
}

ejecutar();
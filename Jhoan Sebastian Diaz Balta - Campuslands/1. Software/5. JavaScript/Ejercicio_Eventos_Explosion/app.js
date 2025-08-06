const botonContador = document.getElementById('botonContador');
const contadorSpan = document.getElementById('contador');
const botonReiniciar = document.getElementById('botonReiniciar');
const contenedor = document.querySelector('.contenedor');
const resultadoEvento = document.getElementById('resultadoEvento');
const fueguito = document.getElementById('fueguito');

let cuenta = 0;

const manejarClicContador = (evento) => {
    cuenta++;
    contadorSpan.textContent = cuenta;
    resultadoEvento.textContent = `¡Boton clickeado! | Tipo: ${evento.type} | Elemento: ${evento.target.tagName} | Contador: ${cuenta}`;

    if (cuenta >= 5) {
        botonContador.style.display = 'none';
        fueguito.classList.remove('oculto');
        botonReiniciar.classList.remove('oculto');
        resultadoEvento.textContent = `¡El boton exploto!`;
        botonContador.removeEventListener('click', manejarClicContador);
    }
};

const manejarClicReiniciar = (evento) => {
    cuenta = 0;
    contadorSpan.textContent = cuenta;
    botonContador.style.display = '';
    botonReiniciar.classList.add('oculto');
    fueguito.classList.add('oculto');
    resultadoEvento.textContent = `Reiniciado | Evento: ${evento.type} | Elemento: ${evento.target.tagName} | ¡Listo para contar!`;
    botonContador.addEventListener('click', manejarClicContador);
};

botonContador.addEventListener('click', manejarClicContador);
botonReiniciar.addEventListener('click', manejarClicReiniciar);

resultadoEvento.textContent = '🎯 Event listeners agregados. ¡Haz clic en el botón para empezar!';
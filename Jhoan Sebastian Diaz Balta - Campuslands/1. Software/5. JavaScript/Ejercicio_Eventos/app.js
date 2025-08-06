// Función para registrar mensajes en la caja de log
const log = (msg) => {
    const logBox = document.getElementById("logBox");
    logBox.textContent += `\n- ${msg}`;
    logBox.scrollTop = logBox.scrollHeight;
};

// Obtenemos los elementos del DOM
const colorBtn = document.getElementById('colorBtn');
const contadorElemento = document.getElementById('contador');
const confettiContainer = document.getElementById('confettiContainer');

// Inicializamos el contador
let contador = 0;

colorBtn.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = contador;

    log(`🖱️ Botón clicado. El contador es: ${contador}`);

    // Lógica para el botón y confeti
    if (contador % 5 === 0) {
        colorBtn.classList.toggle('cambio-color');
        
        confettiContainer.classList.add('active');
        log('🎉 ¡Felicidades! Se ha activado el confeti.');

        setTimeout(() => {
            confettiContainer.classList.remove('active');
            log('✨ El confeti se ha ocultado.');
        }, 1500);
    }
});
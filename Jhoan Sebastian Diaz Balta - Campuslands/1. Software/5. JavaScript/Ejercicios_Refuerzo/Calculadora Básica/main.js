// DOM
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const calculoBtn = document.getElementById('calcular');

const operacionVisual = document.getElementById('operacion-visual');
const mostrarResultado = document.getElementById('resultado');

const actualizarOperacionVisual = () => {
    const valorNum1 = num1.value;
    const valorNum2 = num2.value;
    const operacionSeleccionada = operacion.value;

    let texto = '';
    if (valorNum1) {
        texto += valorNum1;
    }
    if (operacionSeleccionada) {
        texto += ` ${operacionSeleccionada}`;
    }
    if (valorNum2) {
        texto += ` ${valorNum2}`;
    }
    operacionVisual.textContent = texto;
};

num1.addEventListener('input', actualizarOperacionVisual);
num2.addEventListener('input', actualizarOperacionVisual);
operacion.addEventListener('change', actualizarOperacionVisual);

calculoBtn.addEventListener('click', () => {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
    const operacionSeleccionada = operacion.value;
    let resultadoCalculo; 

    mostrarResultado.style.color = '#495057';

    // Validaciones
    if (isNaN(valorNum1) || num1.value.trim() === '') {
        mostrarResultado.textContent = 'Error: Por favor, ingrese un valor válido en el Número 1.';
        mostrarResultado.style.color = 'red';
        return;
    }

    if (isNaN(valorNum2) || num2.value.trim() === '') {
        mostrarResultado.textContent = 'Error: Por favor, ingrese un valor válido en el Número 2.';
        mostrarResultado.style.color = 'red';
        return;
    }

    if (operacionSeleccionada === '') {
        mostrarResultado.textContent = 'Error: Por favor, seleccione una operación.';
        mostrarResultado.style.color = 'red';
        return;
    }

    switch (operacionSeleccionada) {
        case '+':
            resultadoCalculo = valorNum1 + valorNum2;
            break;
        case '-':
            resultadoCalculo = valorNum1 - valorNum2;
            break;
        case '*':
            resultadoCalculo = valorNum1 * valorNum2;
            break;
        case '/':
            
            if (valorNum2 === 0) {
                mostrarResultado.textContent = 'Error: No se puede dividir por cero.';
                mostrarResultado.style.color = 'red';
                return; 
            }
            resultadoCalculo = valorNum1 / valorNum2;
            break;
        default:
            mostrarResultado.textContent = 'Error: Operación no válida.';
            mostrarResultado.style.color = 'red';
            return;
    }
    
    
    mostrarResultado.textContent = `Resultado: ${resultadoCalculo}`;
    mostrarResultado.style.color = 'green'; 
});
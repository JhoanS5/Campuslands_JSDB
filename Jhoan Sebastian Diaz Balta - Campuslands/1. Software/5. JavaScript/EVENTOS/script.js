const passwordInput = document.getElementById('password');
const mensajeError = document.getElementById('mensajeError');
const formulario = document.getElementById('formularioPassword');

function showEvent(name, type, element) {
    const logDiv = element.querySelector('.log');
    const time = new Date().toLocaleTimeString();
    logDiv.innerHTML += `[${time} ${name}]<br>`
    logDiv.scrollTop = logDiv.scrollHeight;

    //Mostrar Toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = `Evento: ${name}`;
    document.getElementById('toastContainer').appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
};

// Eventos de Drag & Drop
function allowDrop(e){
  e.preventDefault();
  showEvent("dragover", "drag", e.currentTarget ); // Nombre, tipo, evento


};

function drag(e){
  e.dataTransfer.setData("text", e.target.id);

};

function drop(e){
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.currentTarget.appendChild(document.getElementById(data));
  showEvent("drop", "drag", e.currentTarget);
};

// Eventos de Ventana
// resize es retamaño
window.addEventListener('scroll', ()=>{
  showEvent('scroll', 'window', document.getElementById('winLog').parentElement);
});

window.addEventListener('resize', ()=>{
  showEvent('resize', 'window', document.getElementById('winLog').parentElement);
});

// Reglas de validación
function validarPassword(pwd) {
  const errores = [];
  if (pwd.length < 8) errores.push("mínimo 8 caracteres");
  if (!/[A-Z]/.test(pwd)) errores.push("una mayúscula");
  if (!/[a-z]/.test(pwd)) errores.push("una minúscula");
  if (!/[0-9]/.test(pwd)) errores.push("un número");
  if (!/[!@#$%^&*-?¿¡]/.test(pwd)) errores.push("un símbolo especial");

  return errores;
};

// Validar al escribir
passwordInput.addEventListener('input', () => {
  const errores = validarPassword(passwordInput.value);
  if (errores.length > 0) {
    mensajeError.textContent = "Falta: " + errores.join(", ");
    mensajeError.style.display = "block";
  } else {
    mensajeError.style.display = "none";
  }
});

// Validar al salir del campo
passwordInput.addEventListener('blur', () => {
  const errores = validarPassword(passwordInput.value);
  if (errores.length > 0) {
    mensajeError.textContent = "Falta: " + errores.join(", ");
    mensajeError.style.display = "block";
  }
});

// Validar al enviar
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita envío si es inválido
  const errores = validarPassword(passwordInput.value);
  if (errores.length > 0) {
    mensajeError.textContent = "Corrige: " + errores.join(", ");
    mensajeError.style.display = "block";
  } else {
    mensajeError.style.display = "none";
    alert("Contraseña válida. Formulario enviado.");
    // Aquí podrías enviar el formulario si fuera real
    formulario.reset();
  }
});
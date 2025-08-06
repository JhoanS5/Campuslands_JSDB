const log = (msg) => {
      const logBox = document.getElementById("logBox");
      logBox.textContent += `\n${msg}`;
      logBox.scrollTop = logBox.scrollHeight;
    };

    const form = document.getElementById("demoForm");
    const input = document.getElementById("nombreInput");
    const customBtn = document.getElementById("customBtn");
    const onceBtn = document.getElementById("onceBtn");
    const toggleColorBtn = document.getElementById("toggleColorBtn");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      log(`🛑 Se evitó el envío del formulario. Nombre: ${input.value}`);
    });

    input.addEventListener("input", (event) => {
      log(`✍️ Escribiendo: ${event.target.value}`);
    });

    input.addEventListener("keydown", (event) => {
      log(`⌨️ Tecla presionada: ${event.key}`);
    });

    onceBtn.addEventListener("click", () => {
      log("✅ Este botón solo se puede clicar una vez");
    }, { once: true });

    toggleColorBtn.addEventListener("click", (e) => {
      e.target.classList.toggle("red");
      log("🎨 Botón cambió de color");
    });

    customBtn.addEventListener("click", () => {
      const event = new CustomEvent("mensaje:personalizado", {
        detail: { nombre: "Evento desde botón hijo" },
        bubbles: true
      });
      customBtn.dispatchEvent(event);
    });

    document.querySelector(".box.root").addEventListener("mensaje:personalizado", (e) => {
      log(`📤 Evento personalizado recibido en RAÍZ. Detalle: ${e.detail.nombre}`);
    });

    document.querySelector(".box.parent").addEventListener("mensaje:personalizado", (e) => {
      log(`🕸️ Evento capturado en PADRE durante fase de captura`);
    }, { capture: true });

    window.addEventListener("scroll", () => {
      log("🌀 Scroll detectado");
    }, { passive: true });

    document.body.addEventListener("click", (e) => {
      const { target, clientX, clientY, detail, type } = e;
      log(`🖱️ ${type} en ${target.tagName}, clic número ${detail}, posición: ${clientX}x${clientY}`);
    });
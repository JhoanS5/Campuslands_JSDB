// COMPONENTE: Selección de Clase de Gimnasio.

class selectorClaseGimnasio extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background-color: #f0f2f5; /* Un fondo gris suave */
                color: #333;
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }

            h1 {
                font-size: 2.5rem;
                color: #007bff; /* Un azul vibrante */
                text-align: center;
                margin-bottom: 30px;
                font-weight: 600;
            }

            .clase-boton {
                display: block;
                width: 280px; /* Ancho fijo para que se vean uniformes */
                padding: 20px 30px;
                margin: 10px auto;
                font-size: 1.2rem;
                font-weight: 500;
                text-align: center;
                color: #fff;
                background-color: #007bff; /* Mismo azul para los botones */
                border: none;
                border-radius: 12px; /* Esquinas más redondeadas */
                cursor: pointer;
                transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
                box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3); /* Sombra para dar profundidad */
            }

            .clase-boton:hover {
                background-color: #0056b3; /* Un azul más oscuro al pasar el cursor */
                transform: translateY(-5px); /* Efecto de "levantarse" */
                box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
            }

            .clase-boton:active {
                transform: translateY(0); /* Vuelve a su posición original al hacer clic */
                background-color: #004085;
                box-shadow: 0 2px 10px rgba(0, 123, 255, 0.2);
            }

        </style>

        <h1>Selecciona la clase de GYM:</h1>
        <button class= "clase-boton" data-clase="Zumba">Zumba</button>
        <button class= "clase-boton" data-clase="Spinning">Spinning</button>
        <button class= "clase-boton" data-clase="CrossFit">CrossFit</button>
        <button class= "clase-boton" data-clase="Entrenamiento Funcional">Entrenamiento Funcional</button>
        <button class= "clase-boton" data-clase="Yoga">Yoga</button>
        <button class= "clase-boton" data-clase="Pilates">Pilates</button>
        `;

        this.shadowRoot.querySelectorAll('.clase-boton').forEach(btn =>{
            btn.addEventListener('click', (e)=>{
                const claseSelector = e.target.getAttribute('data-clase');
                this.dispatchEvent(new CustomEvent('clase-seleccionada',{
                    detail: {clase: claseSelector},
                    bubbles: true,
                    composed: true
                }));
            });
        });

    }
}

customElements.define('clase-seleccionada', selectorClaseGimnasio);

// Componente: Formulario Inscripción
class RegistroForm extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.renderForm('...');
    }

    renderForm(clase){
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 20px;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f0f2f5;
            }

            h1 {
                font-size: 2.2rem;
                color: #007bff;
                text-align: center;
                margin-bottom: 25px;
                font-weight: 600;
            }

            form {
                background: #ffffff;
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            label {
                display: block;
                font-size: 1rem;
                font-weight: 500;
                color: #555;
                margin-bottom: 5px;
            }

            input[type="text"],
            input[type="email"],
            input[type="tel"] {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #ddd;
                border-radius: 8px;
                font-size: 1rem;
                transition: border-color 0.3s, box-shadow 0.3s;
                box-sizing: border-box;
                margin-top: 5px;
            }

            input:focus {
                border-color: #007bff;
                outline: none;
                box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
            }

            input[name="clase"] {
                display: none; /* Oculta el input con el nombre de la clase */
            }

            button {
                width: 100%;
                padding: 15px;
                font-size: 1.1rem;
                font-weight: bold;
                color: #fff;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.2s;
            }

            button[type="submit"] {
                background-color: #28a745; /* Verde para la acción principal (éxito) */
                box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
            }

            button[type="submit"]:hover {
                background-color: #218838;
                transform: translateY(-3px);
            }

            .regresar-boton {
                background-color: #dc3545; /* Rojo para la acción secundaria (peligro/cancelar) */
                margin-top: 10px;
                box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
            }

            .regresar-boton:hover {
                background-color: #c82333;
                transform: translateY(-3px);
            }

        </style>

        <h1>Formulario de Inscripcción - Clase ${clase}</h1>
        <form>
            <input name="clase" value="${clase}">
            <label>Nombre Completo
                <input type="text" name="nombre" required>
            </label>

            <label>Email:
                <input type="email" name="email" required>
            </label>

            <label>Teléfono:
                <input type="tel" name="telefono">
            </label>

            <button type="submit">Registrarse</button>
        </form>
        <button class="regresar-boton">Regresar</button>
        `;

        this.shadowRoot.querySelector('.regresar-boton').addEventListener('click', ()=>{
            this.dispatchEvent(new CustomEvent('ir-atras',{
                bubbles: true,
                composed: true
            }));
        });

        this.shadowRoot.querySelector('form').addEventListener('submit', (e) =>{
            e.preventDefault();
            alert('Registro enviado para ' + clase);
            // Aquí podrías hacer una petición fetch() si necesitas enviar los datos a un servidor.
        });


    }
}

customElements.define('registro-form', RegistroForm);

// Lógica de navegación
const selector = document.querySelector('clase-seleccionada');
const form = document.querySelector('registro-form');

selector.addEventListener('clase-seleccionada', (e) =>{
    const clase = e.detail.clase;
    selector.classList.add('hidden');
    form.classList.remove('hidden');
    form.renderForm(clase);
});

form.addEventListener('ir-atras', ()=>{
    form.classList.add('hidden');
    selector.classList.remove('hidden');
});
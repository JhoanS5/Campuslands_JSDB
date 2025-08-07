// COMPONENTE: Selección de carrera
class CareerSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        h2 { margin-bottom: 20px; }
      </style>
      <h2>Selecciona una carrera:</h2>
      <button class="career-button" data-career="Ingeniería">Ingeniería</button>
      <button class="career-button" data-career="Medicina">Medicina</button>
      <button class="career-button" data-career="Derecho">Derecho</button>
      <button class="career-button" data-career="Arquitectura">Arquitectura</button>
    `;

    this.shadowRoot.querySelectorAll('.career-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedCareer = e.target.getAttribute('data-career');
        this.dispatchEvent(new CustomEvent('career-selected', {
          detail: { career: selectedCareer },
          bubbles: true,
          composed: true
        }));
      });
    });
  }
}
customElements.define('career-selector', CareerSelector);

// COMPONENTE: Formulario de registro
class RegistrationForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.renderForm('...');
  }

  renderForm(career) {
    this.shadowRoot.innerHTML = `
      <h2>Formulario de registro - ${career}</h2>
      <form>
        <input type="hidden" name="carrera" value="${career}">
        <label>Nombre completo:
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
      <button class="back-button">Regresar</button>
    `;

    this.shadowRoot.querySelector('.back-button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('go-back', {
        bubbles: true,
        composed: true
      }));
    });

    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registro enviado para ' + career);
      // Aquí podrías hacer una petición fetch() si necesitas enviar los datos a un servidor.
    });
  }
}
customElements.define('registration-form', RegistrationForm);

// Lógica de navegación
const selector = document.querySelector('career-selector');
const form = document.querySelector('registration-form');

selector.addEventListener('career-selected', (e) => {
  const career = e.detail.career;
  selector.classList.add('hidden');
  form.classList.remove('hidden');
  form.renderForm(career);
});

form.addEventListener('go-back', () => {
  form.classList.add('hidden');
  selector.classList.remove('hidden');
});

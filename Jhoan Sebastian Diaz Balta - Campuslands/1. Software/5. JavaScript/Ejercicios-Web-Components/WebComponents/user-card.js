const template = document.createElement('template');
template.innerHTML = `
 <style>
   .card {
     background: white;
     border-radius: 12px;
     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
     padding: 20px;
     width: 300px;
     text-align: center;
     font-family: sans-serif;
     transition: transform 0.3s ease;
   }


   .card:hover {
     transform: scale(1.02);
   }


   img {
     width: 100px;
     border-radius: 50%;
   }


   h2 {
     margin: 10px 0 5px;
     color: #333;
   }


   p {
     color: #666;
     font-size: 0.9rem;
   }


   button {
     margin-top: 10px;
     padding: 8px 16px;
     background-color: #007bff;
     color: white;
     border: none;
     border-radius: 6px;
     cursor: pointer;
     font-size: 0.9rem;
   }


   button:hover {
     background-color: #0056b3;
   }


   .extra {
     margin-top: 10px;
     color: #444;
     font-size: 0.85rem;
     display: none;
   }


   .extra.show {
     display: block;
   }
 </style>


 <div class="card">
   <img id="avatar" src="" alt="Avatar">
   <h2 id="name">Nombre</h2>
   <p id="bio">Biografía</p>
   <button id="toggleBtn">Ver más</button>
   <div class="extra" id="extraInfo">Esta es información adicional del usuario.</div>
 </div>
`;


class UserCard extends HTMLElement {
 static get observedAttributes() {
   return ['name', 'avatar', 'bio'];
 }


 constructor() {
   super();
   this.attachShadow({ mode: 'open' });
   this.shadowRoot.appendChild(template.content.cloneNode(true));
   this.extraVisible = false;
 }


 connectedCallback() {
   this.updateComponent();
   this.shadowRoot.querySelector('#toggleBtn')
       .addEventListener('click', () => this.toggleExtraInfo());
 }


 attributeChangedCallback(name, oldVal, newVal) {
   this.updateComponent();
 }


 updateComponent() {
   this.shadowRoot.querySelector('#name').textContent =
     this.getAttribute('name') || 'Usuario desconocido';


   this.shadowRoot.querySelector('#avatar').src =
     this.getAttribute('avatar') || 'https://i.pravatar.cc/150';


   this.shadowRoot.querySelector('#bio').textContent =
     this.getAttribute('bio') || 'Sin biografía';
 }


 toggleExtraInfo() {
   const extra = this.shadowRoot.querySelector('#extraInfo');
   this.extraVisible = !this.extraVisible;
   extra.classList.toggle('show', this.extraVisible);
   this.shadowRoot.querySelector('#toggleBtn').textContent =
     this.extraVisible ? 'Ver menos' : 'Ver más';
 }


 // 👇 Métodos públicos para actualizar desde JS
 setUser({ name, avatar, bio }) {
   if (name) this.setAttribute('name', name);
   if (avatar) this.setAttribute('avatar', avatar);
   if (bio) this.setAttribute('bio', bio);
 }
}


customElements.define('user-card', UserCard);



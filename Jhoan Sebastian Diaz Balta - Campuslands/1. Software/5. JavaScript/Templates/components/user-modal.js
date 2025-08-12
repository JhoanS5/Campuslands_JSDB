export class UserModal extends HTMLElement{
    //Se crea el constructor:
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    async connectedCallback(){
        const res = await fetch("../templates/modal-template.html");
        const html = await res.text();
        const container = document.createElement('div');
        container.innerHTML = html;
        const template = container.querySelector('template');
        this.shadow.appendChild(template.content.cloneNode(true));

        this.overlay = this.shadow.querySelector(".overlay");
        this.shadow.querySelector(".close").addEventListener('click', ()=>{
            this.hide();
        });

        window.addEventListener('user-click', (e)=> this.show(e.detail));
    }

    show({name,email}){
        this.shadow.querySelector('.name').textContent = name;
        this.shadow.querySelector('.email').textContent = email;
        this.overlay.classList.remove('hidden');

    }

    hide(){
        this.overlay.classList.add("hidden");
    }
};

customElements.define('user-modal', UserModal);

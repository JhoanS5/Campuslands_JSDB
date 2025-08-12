export class UserCard extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});

    }

    static get observedAttributes(){
        return ["name", "email"];
    }

    attributeChangedCallback(name, oldVal, newVal){
        this[name] = newVal;
        
    }
    
    async connectedCallback(){
        const res = await fetch("../templates/user-template.html");
        const html = await res.text();
        const container = document.createElement("div");
        container.innerHTML = html;
        const template = container.querySelector("template");
        const clone = template.content.cloneNode(true);
        
        clone.querySelector(".name").textContent = this.name;
        clone.querySelector(".email").textContent = this.email;

        clone.querySelector(".user").addEventListener("click", ()=>{
            this.dispatchEvent(new CustomEvent("user-click", {
                bubbles: true, //Si vamos a tener herarquia de eventos hacia los padres.
                composed: true,
                detail: {name: this.name, email: this.email}  // Mandar los datos personalizados en el evento

            }));
        });

        this.shadow.appendChild(clone);
    }
}

customElements.define("user-card", UserCard);
// Se crea la clase y la extension de HTMLElement
export class UserList extends HTMLElement{
    constructor(){
        super();
        this.users = [
            {name: "Ana", email: "ana@example.com"},
            {name: "Luis", email: "luis@example.com"},
            {name: "Sofia", email: "sofia@example.com"}
        ]
    }

    connectedCallback(){
        this.render("...");
    }

    render(){
        this.innerHTML = "";
        this.users.forEach(user =>{
            const card = document.createElement("user-card");
            card.setAttribute("name", user.name); // Agrega un atributo llamado name y el valor es user.name
            card.setAttribute("email", user.email); // Agrega un atributo llamado email y el valor es user.email
            this.appendChild(card);
        });
    }

}

customElements.define("user-list", UserList);
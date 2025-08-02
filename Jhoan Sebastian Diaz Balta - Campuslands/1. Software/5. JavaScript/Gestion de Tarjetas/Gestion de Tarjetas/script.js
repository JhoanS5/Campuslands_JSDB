const btnAdd = document.getElementById("addCard");
const btnToggle = document.getElementById("toggleAnim");
const container = document.getElementById("cardContainer");
let paused = false;

btnAdd.addEventListener("click", async()=>{
    const { value: formValues } = await Swal.fire({
        title: "Agregar tarjeta",
        html: '<input id="swal-input1" class="swal2-input" placeholder = "Titulo">'+
              '<textarea id="swal-input2" class="swal2-textarea" placeholder= "Descripción"></textarea>',
              focusConfirm: false,
              preConfirm: ()=>{
                const title = document.getElementById("swal-input1").value.trim();
                const desc = document.getElementById("swal-input2").value.trim();

                if(!title || !desc){
                    Swal.showValidationMessage("Completa ambos campos");
                    return false;
                }
                return {title,desc};
              }
    });

    if(formValues){
        const card = document.createElement("div");
        card.className="card";

        card.innerHTML=`<div class = "card-buttons">
                            <button class="edit"><i class="fas fa-edit"></i></button>
                            <button class="delete"><i class="fas fa-trash-alt"></i></button>
                        </div>
                        <h3>${formValues.title}</h3>
                        <p>${formValues.desc}</p>`;

        container.appendChild(card);
        Swal.fire("Exito", "Tarjeta agregada correctamente","success");

        const editBtn = card.querySelector(".edit");
        const deleteBtn = card.querySelector(".delete");

        editBtn.addEventListener("click", ()=> editarCard(card));
        deleteBtn.addEventListener("click", ()=> eliminarCard(card));
    }
});

function editarCard(card){
    const currentTitle = card.querySelector("h3").textContent;
    const currentDesc = card.querySelector("p").textContent;

    Swal.fire({
        title: "Editar tarjeta",
        html: `<input id="edit-title" class="swal2-input" value="${currentTitle}">`+
              `<textarea id="edit-desc" class="swal2-textarea">${currentDesc}</textarea>`,
              focusConfirm: false,
              preConfirm: ()=>{
                const title = document.getElementById("edit-title").value.trim();
                const desc = document.getElementById("edit-desc").value.trim();

                if(!title || !desc){
                    Swal.showValidationMessage("Completa ambos campos");
                    return false;
                }
                return {title,desc};
              }
    }).then(result =>{
        if(result.value){
            card.querySelector("h3").textContent = result.value.title;
            card.querySelector("p").textContent = result.value.desc;
            Swal.fire("Actualizado", "Tarjeta editada", "success");
        }
    });
}

function eliminarCard(card){
    // Abrimos la estructura para empezar a escribir las condiciones para esa alerta.
    Swal.fire({
        title: "¿Eliminar esta tarjeta?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar", // Boton de confirmación se muestra y que texto lleva.
        cancelButtonText: "Cancelar"
        // Despues de esto vamos con la logica.

    }).then(result =>{
        if(result.isConfirmed){
            card.remove();
            Swal.fire("Eliminada", "Tarjeta eliminada correctamente", "success");
        }
    });
}

btnToggle.addEventListener("click", ()=>{
    // quearySelectorAll le debo pasar de que tipo es, si es tipo, clase o ID.
    const cards = document.querySelectorAll('.card');
    paused = !paused;
    /*
        La línea paused = !paused en programación cambia el valor de la variable paused a su valor opuesto.
        Si paused es True, se convertirá en False, y viceversa. Es una forma concisa de alternar un estado booleano.
    */
   cards.forEach(card =>{
        card.style.animationPlayState = paused ? "Paused" : "Running";
   });

   if(paused){
        btnToggle.classList.add("paused");
        btnToggle.innerHTML = `<i class = "fas fa-play"></i> Reanudar animaciones`;
        Swal.fire("Pausadas", "Animaciones pausadas", "info");

   }else{
        btnToggle.classList.remove("paused");
        btnToggle.innerHTML = `<i class= "fas fa-pause"></i> Pausar animaciones`;
        Swal.fire("Activas", "Animaciones reanudadas", "success");
    }

});
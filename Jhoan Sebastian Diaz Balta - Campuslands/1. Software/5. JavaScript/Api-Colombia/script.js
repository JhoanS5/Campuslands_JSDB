// Todas las peticiones van a partir de una base.
const API_BASE = "https://api-colombia.com/api/v1"; // Todas se actualizan automaticamente si cambia algo en la base.

const deparmentSelect = document.getElementById('departments');
const content = document.getElementById('content'); // Contenido de departamentos/ciudades

// Nuevas referencias a los elementos del DOM para las otras vistas.
const presidentsSection = document.getElementById('presidents');
const presidentsContent = document.getElementById('presidentsContent');

const regionsSection = document.getElementById('regions');
const regionsContent = document.getElementById('regionsContent');

// Cuando hacemos el llamado a un API es asincrono.
async function loadDepartments(){
    const res = await fetch(`${API_BASE}/Department`);
    const departments = await res.json(); // almacenar la respuesta en JSON que nos da el API

    deparmentSelect.innerHTML = `
    <option value="">-- Seleccione un departamento--</option>
    `;

    departments.forEach((dep)=>{
        const option = document.createElement("option");
        option.value = dep.id;
        option.textContent = dep.name;
        deparmentSelect.appendChild(option);
    });
}

// Una callback con asincronia
deparmentSelect.addEventListener("change", async function(){
    const departmentId = this.value; // Explicar esto

    if(!departmentId){
        content.innerHTML = "<p>Seleccione un departamento para ver sus ciudades</p>";
        return;
    }

    content.innerHTML = "<p>Cargando ciudades...</p>";

    try{
        const res = await fetch(`${API_BASE}/Department/${departmentId}/cities`);
        const cities = await res.json();

        content.innerHTML = `<h2>Ciudades</h2>`;

        if(cities.length === 0){
            content.innerHTML += "<p>No se encontraron ciudades para este departamento</p>";

        }else{
            cities.forEach((city)=>{
                const div = document.createElement("div");
                div.className = "item";
                div.innerHTML = `<strong>${city.name}</strong>`;
                content.appendChild(div);
            });
        }

    }catch(err){
        console.log(err);
        content.innerHTML = "<p style='color:red'>Error al cargar las ciudades</p>"

    }
});

// --Logica para la funcion showView--

function showView(viewId){
    // Optener todas las secciones de vista.
    const views = document.querySelectorAll('.view');
    views.forEach((view)=>{
        view.classList.add('hidden'); 
    });

    document.getElementById(viewId).classList.remove('hidden');

    if (viewId === 'presidents'){
        loadPresi();
        
    }else if (viewId === 'regions'){
        loadRegions();
    }

}

// --Logica para Presidentes--

// await se utiliza dentro de funciones declaradas como async,
// await pausa la ejecucion de la funcion hasta que la promesa
// osea la solicitud de la API se complete y se reciba una respuesta.

async function loadPresi() {
    const container = document.getElementById("presidents");
    container.innerHTML = `<h2>Presidentes de Colombia</h2><p>cargando...</p>`;

    const rest = await fetch(`${API_BASE}/President`);
    const data = await rest.json();

    data.sort((a, b) =>{
        new Date(a.startPeriodDate) - new Date(b.startPeriodDate)
    });

    container.innerHTML = `<h2>Presidente</h2>` + data.map((p) => `
        <div class = "item">
            <strong>${p.name} ${p.lastName}</strong><br>
            <p>Periodo: ${p.startPeriodDate} - ${p.endPeriodDate || "Actualidad"}</p>
            <p>Partido: ${p.politicalParty}
        </div>`).join(""); // .join asegura que cada registro nuevo este separado.
}
 
async function loadPresidents(){
    presidentsContent.innerHTML = `<p>Cargando presidentes...</p>`; // Mensaje de carga

    try{
        const res = await fetch(`${API_BASE}/President`);
        const presidents = await res.json();

        presidents.sort((a, b) => {
            const dateA = new Date(a.startPeriodDate);
            const dateB = new Date(b.startPeriodDate);
            return dateA - dateB; 
        });

        presidentsContent.innerHTML = `<h2>Presidentes de Colombia</h2>`;

        if (presidents.length === 0){
            presidentsContent.innerHTML += "<p>No se encontraron presidentes.</p>";

        }else {
            presidents.forEach((president) => {
                const div = document.createElement("div");
                div.className = "item";

                const endDate = president.endPeriodDate ? new Date(president.endPeriodDate).getFullYear() : 'Actualidad';

                div.innerHTML = `
                    <strong>${president.name} ${president.lastName}</strong> (${new Date(president.startPeriodDate).getFullYear()} - ${endDate})
                    <p>${president.description}...</p> `;
                presidentsContent.appendChild(div);
            });
        }

    } catch (err) {
        console.error("Error al cargar presidentes:", err);
        presidentsContent.innerHTML = "<p style='color:red'>Error al cargar los presidentes.</p>";
    }
    
}   

// --- NUEVA Lógica para Regiones ---
async function loadRegions() {
    regionsContent.innerHTML = "<p>Cargando regiones...</p>"; // Mensaje de carga

    try {
        const res = await fetch(`${API_BASE}/Region`);
        const regions = await res.json();

        regionsContent.innerHTML = `<h2>Regiones de Colombia</h2>`;

        if (regions.length === 0) {
            regionsContent.innerHTML += "<p>No se encontraron regiones.</p>";
        } else {
            regions.forEach((region) => {
                const div = document.createElement("div");
                div.className = "item";
                div.innerHTML = `<strong>${region.name}</strong>`;
                regionsContent.appendChild(div);
            });
        }
    } catch (err) {
        console.error("Error al cargar regiones:", err);
        regionsContent.innerHTML = "<p style='color:red'>Error al cargar las regiones.</p>";
    }
}


loadDepartments(); 

showView('home');
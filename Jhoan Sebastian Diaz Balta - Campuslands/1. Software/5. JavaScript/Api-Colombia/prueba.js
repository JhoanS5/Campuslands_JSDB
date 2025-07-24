
// Otra forma de hacerlo.

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
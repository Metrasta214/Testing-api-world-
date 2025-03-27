document.addEventListener("DOMContentLoaded", function () {
    // Cargar Navbar y Footer
    fetch("nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Llamar a la API y mostrar los datos
    fetch("http://54.80.228.59/api-php-world/api/get_countries.php") // Reemplaza con la URL real de tu API
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("tabla-paises");
            data.forEach(pais => {
                const fila = `
                    <tr>
                        <td>${pais.code}</td>
                        <td>${pais.name}</td>
                        <td>${pais.continent}</td>
                        <td>${pais.region}</td>
                        <td>${pais.population.toLocaleString()}</td>
                    </tr>
                `;
                tabla.innerHTML += fila;
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});

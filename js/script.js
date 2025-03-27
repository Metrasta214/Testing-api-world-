document.addEventListener("DOMContentLoaded", function () {
    fetch("http://54.80.228.59/api-php-world/api/get_countries.php")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("countriesTable");
            data.forEach(country => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${country.code}</td>
                    <td>${country.name}</td>
                    <td>${country.continent}</td>
                    <td>${country.region}</td>
                    <td>${country.population}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});

document.addEventListener("DOMContentLoaded", () => {

const buscador =
    document.querySelector(".search-container input");

const tarjetas =
    document.querySelectorAll(".category-card");

const contenedor =
    document.querySelector(".categories-grid");

const mensaje =
    document.createElement("h3");

mensaje.textContent =
    "No se encontraron remedios.";

mensaje.style.textAlign = "center";
mensaje.style.display = "none";
mensaje.style.color = "#666";
mensaje.style.marginTop = "20px";

contenedor.after(mensaje);

buscador.addEventListener("keyup", () => {

    const texto = buscador.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    let encontrados = 0;

    tarjetas.forEach(tarjeta => {

        const titulo = tarjeta.querySelector("h3")
            .textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const descripcion = tarjeta.querySelector("p")
            .textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (
            titulo.includes(texto) ||
            descripcion.includes(texto)
        ) {

            tarjeta.style.display = "flex";
            encontrados++;

        } else {

            tarjeta.style.display = "none";

        }

    });

    if (encontrados === 0) {

        mensaje.style.display = "block";

    } else {

        mensaje.style.display = "none";

    }

});

});
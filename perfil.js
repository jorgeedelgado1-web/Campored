document.addEventListener("DOMContentLoaded", () => {

const followBtn =
    document.getElementById("follow-btn");

const messageBtn =
    document.getElementById("message-btn");

const tabButtons =
    document.querySelectorAll(".tab-btn");

let siguiendo = false;

followBtn.addEventListener("click", () => {

    siguiendo = !siguiendo;

    if (siguiendo) {

        followBtn.textContent = "Siguiendo";

    } else {

        followBtn.textContent = "Seguir";

    }

});

messageBtn.addEventListener("click", () => {

    alert(
        "Función de mensajes disponible próximamente."
    );

});

tabButtons.forEach(boton => {

    boton.addEventListener("click", () => {

        tabButtons.forEach(btn => {

            btn.style.opacity = "0.7";

        });

        boton.style.opacity = "1";

    });

});

});
document.addEventListener("DOMContentLoaded", () => {

const formulario = document.querySelector(".register-form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const ubicacion = document.getElementById("ubicacion").value.trim();
    const cultivo = document.getElementById("cultivo").value;
    const experiencia = document.getElementById("experiencia").value;
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const terminos = document.getElementById("terminos").checked;

    if (nombre === "") {

        alert("Ingresa tu nombre completo.");
        return;

    }

    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {

        alert("Ingresa un correo válido.");
        return;

    }

    if (password.length < 6) {

        alert("La contraseña debe tener mínimo 6 caracteres.");
        return;

    }

    if (!terminos) {

        alert("Debes aceptar los términos y condiciones.");
        return;

    }

    const usuario = {

        nombre,
        ubicacion,
        cultivo,
        experiencia,
        correo,
        password

    };

    localStorage.setItem(
        "usuarioRegistrado",
        JSON.stringify(usuario)
    );

    alert("¡Bienvenido a CampoRed!");

    localStorage.setItem("usuarioCampoRed", correo);
    window.location.href = "index.html";

});

});
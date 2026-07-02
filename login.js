document.addEventListener("DOMContentLoaded", () => {

const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    if (correo === "" || password === "") {

        alert("Por favor completa todos los campos.");
        return;

    }

    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!expresionCorreo.test(correo)) {

        alert("Ingresa un correo electrónico válido.");
        return;

    }

      if (password.length < 6) {

        alert("La contraseña debe tener al menos 6 caracteres.");
        return;

    }

    localStorage.setItem("usuarioCampoRed", correo);

    const usuarioGuardado =
    JSON.parse(localStorage.getItem("usuarioRegistrado"));

      if (!usuarioGuardado) {

        alert("No existe ningún usuario registrado.");
      return;

   }

   if (
     correo !== usuarioGuardado.correo ||
     password !== usuarioGuardado.password
    ) {

    alert("Correo o contraseña incorrectos.");
    return;
    
}
alert("¡Bienvenido a CampoRed!");

window.location.href = "index.html";
});

});
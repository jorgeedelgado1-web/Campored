document.addEventListener("DOMContentLoaded", () => {

const inputPublicacion =
    document.querySelector(".create-post-header input");

const botonPublicar =
    document.getElementById("publicar-btn");

const feed =
    document.querySelector(".feed");
inputPublicacion.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        e.preventDefault();

        botonPublicar.click();

    }

});

botonPublicar.addEventListener("click", () => {

    const texto = inputPublicacion.value.trim();

    if (texto === "") {

        alert("Escribe algo antes de publicar.");
        return;

    }

    const nuevaPublicacion = document.createElement("article");

    nuevaPublicacion.classList.add("post");

    nuevaPublicacion.innerHTML = `

        <div class="post-header">

            <img src="img/persona1.png" alt="Usuario">

            <div>

                <h3>Mi Campo</h3>

                <p>Agricultor Experto • Ahora</p>

            </div>

        </div>

        <div class="post-content">

            <p>${texto}</p>

        </div>

        <div class="post-actions">

            <button class="like-btn">
                👍 0
            </button>

            <button class="share-btn">
                🔄 Compartir
            </button>

        </div>

    `;

    feed.insertBefore(
        nuevaPublicacion,
        feed.children[1]
    );

    inputPublicacion.value = "";
    alert("✅ Publicación realizada correctamente.");

    activarBotones();

});

function activarBotones() {

    document.querySelectorAll(".like-btn").forEach(boton => {

        if (boton.dataset.activo) return;

        boton.dataset.activo = true;

        boton.addEventListener("click", () => {

            let likes =
                parseInt(
                    boton.textContent.replace(/\D/g, "")
                );
            if (boton.classList.contains("liked")) {
                likes--;
                boton.classList.remove("liked");
            } else {
                likes++;
                boton.classList.add("liked");
            }

            boton.textContent = `👍 ${likes}`;

        });

    });

    document.querySelectorAll(".share-btn").forEach(boton => {

        if (boton.dataset.activo) return;

        boton.dataset.activo = true;

        boton.addEventListener("click", () => {

            alert("Publicación compartida.");

        });

    });

}

activarBotones();

});
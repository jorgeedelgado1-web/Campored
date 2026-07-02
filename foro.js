document.addEventListener("DOMContentLoaded", () => {

const askButton =
    document.querySelector(".ask-question-btn");

const forumContent =
    document.querySelector(".forum-content");

askButton.addEventListener("click", () => {

    const pregunta = prompt(
        "Escribe tu pregunta para la comunidad:"
    );

    if (!pregunta || pregunta.trim() === "") {

        return;

    }

    const nuevaPregunta =
        document.createElement("article");

    nuevaPregunta.classList.add("question-card");

    nuevaPregunta.innerHTML = `

        <div class="question-header">

            <span class="tag">
                #GENERAL
            </span>

            <span>
                Ahora mismo
            </span>

        </div>

        <h3>${pregunta}</h3>

        <p>
            Pregunta publicada por un miembro
            de CampoRed.
        </p>

        <div class="question-stats">

            <span>
                💬 0 respuestas
            </span>

        </div>

        <button class="reply-btn">
            Responder
        </button>

    `;

    forumContent.insertBefore(
        nuevaPregunta,
        forumContent.children[2]
    );

    activarRespuestas();

});

function activarRespuestas() {

document.querySelectorAll(".reply-btn")
    .forEach(boton => {

    if (boton.dataset.active) return;

    boton.dataset.active = true;

    boton.addEventListener("click", () => {

        const respuesta = prompt(
            "Escribe tu respuesta:"
        );

        if (
            !respuesta ||
            respuesta.trim() === ""
        ) {

            return;

        }

        const tarjeta =
            boton.closest(".question-card");

        let contenedorRespuestas =
            tarjeta.querySelector(".answers");

        if (!contenedorRespuestas) {

            contenedorRespuestas =
                document.createElement("div");

            contenedorRespuestas.classList.add(
                "answers"
            );

            tarjeta.appendChild(
                contenedorRespuestas
            );

        }

        const nuevaRespuesta =
            document.createElement("p");

        nuevaRespuesta.innerHTML =
            "💬 " + respuesta;

        contenedorRespuestas.appendChild(
            nuevaRespuesta
        );

        const contador =
            tarjeta.querySelector(
                ".question-stats span"
            );

        let numero =
            parseInt(
                contador.textContent.match(/\d+/)[0]
            );

        numero++;

        contador.textContent =
            `💬 ${numero} respuestas`;

    });

});

}

});
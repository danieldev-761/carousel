const slides = document.getElementById("slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let i = 0;
const total = slides.children.length; // detecta cuántas imágenes hay

function mostrar() {
  slides.style.transform = "translateX(-" + i * 100 + "%)";
}

// siguiente
function siguiente() {
    i++;
    if (i >= total) i = 0;
    mostrar();
}

// anterior
function anterior() {
    i--;
    if (i < 0) i = total - 1;
    mostrar();
}

// botones
next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

// automático
setInterval(siguiente, 4000);
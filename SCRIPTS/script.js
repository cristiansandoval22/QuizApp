// Obtener elementos del DOM
const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const main = document.querySelector(".main");
const heroBtn = document.querySelector(".hero__btn");
const reglasContent = document.querySelector(".reglas-content");
const btnCancelar = document.querySelector(".btn__cancelar");
const btnContinuar = document.querySelector(".btn__continuar");

/**
 * Agregar la clase .show__menu para mostrar el menú
 */
if (navOpen) {
    navOpen.addEventListener("click", () => {
        navMenu.classList.add("show__menu");
    });
}

/**
 * Quitar la clase .show__menu para ocultar el menú
 */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show__menu");
    });
}

/**
 * Quitar la clase .show__menu al hacer click en un enlace del menú
 */
const linkAction = () => {
    navMenu.classList.remove("show__menu");
};

navLinks.forEach((link) => {
    link.addEventListener("click", linkAction);
});

/**
 * Mostrar las reglas del juego y oscurecer el fondo
 */
heroBtn.addEventListener("click", () => {
    header.style.opacity = "0";
    main.classList.add("show");
    reglasContent.classList.add("show__reglas");
});

/**
 * Ocultar las reglas del juego y restaurar el fondo
 */
btnCancelar.addEventListener("click", () => {
    reglasContent.classList.remove("show__reglas");
    main.classList.remove("show");
    header.style.opacity = "1";
});

/**
 * Redireccionar a la página de preguntas
 */
btnContinuar.addEventListener("click", () => {
    window.location.href = './PAGES/preguntas.html'
});


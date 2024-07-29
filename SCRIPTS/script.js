const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const header = document.querySelector(".header")
/**
 * agregando la clase de .show__menu con js
*/
if(navOpen){
    navOpen.addEventListener("click", () =>{
        navMenu.classList.add("show__menu");
    })
}

/**
 * quitando la clase de .show__menu con js
*/

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show__menu")
    })
}

/**
 * remove show__menu al hacer click en un link
 */
const navLinks= document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show__menu");
};


navLinks.forEach(function (link) {
    link.addEventListener("click", linkAction)
})

const main = document.querySelector(".main")
const sectionHero = document.querySelector(".hero");
const heroBtn = document.querySelector(".hero__btn");
const reglasContent = document.querySelector(".reglas-content");

const btnCancelar = document.querySelector(".btn__cancelar")
const btnContinuar = document.querySelector(".btn__continuar")

heroBtn.addEventListener("click", ()=>{
    header.style.opacity = `0`
    main.classList.add('show');
    reglasContent.classList.add("show__reglas")
})


btnCancelar.addEventListener("click", ()=>{
    reglasContent.classList.remove("show__reglas")
    main.classList.remove('show');
    header.style.opacity = `1`
})

btnContinuar.addEventListener("click", ()=>{
    window.location.href = './PAGES/preguntas.html';
    showQuestion(0)
    questionCounter(0)
})


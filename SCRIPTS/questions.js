let questions = [
    {
        numb: 1,
        question: "¿Cuál es el río más largo del mundo?",
        answer: "B. Amazonas",
        options: [
            "A. Nilo",
            "B. Amazonas",
            "C. Yangtsé",
            "D. Misisipi"
        ]
    },
    {
        numb: 2,
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        answer: "B. Miguel de Cervantes",
        options: [
            "A. Gabriel García Márquez",
            "B. Miguel de Cervantes",
            "C. William Shakespeare",
            "D. Federico García Lorca"
        ]
    },
    {
        numb: 3,
        question: "¿Cuál es la capital de Japón?",
        answer: "C. Tokio",
        options: [
            "A. Pekín",
            "B. Seúl",
            "C. Tokio",
            "D. Bangkok"
        ]
    },
    {
        numb: 4,
        question: "¿En qué año llegó el hombre a la luna?",
        answer: "B. 1969",
        options: [
            "A. 1965",
            "B. 1969",
            "C. 1972",
            "D. 1975"
        ]
    },
    {
        numb: 5,
        question: "¿Cuál es el océano más grande del mundo?",
        answer: "D. Pacífico",
        options: [
            "A. Atlántico",
            "B. Índico",
            "C. Ártico",
            "D. Pacífico"
        ]
    },
    {
        numb: 6,
        question: "¿Quién pintó 'La última cena'?",
        answer: "C. Leonardo da Vinci",
        options: [
            "A. Vincent van Gogh",
            "B. Pablo Picasso",
            "C. Leonardo da Vinci",
            "D. Salvador Dalí"
        ]
    },
    {
        numb: 7,
        question: "¿Cuál es el país más poblado del mundo?",
        answer: "C. China",
        options: [
            "A. Estados Unidos",
            "B. India",
            "C. China",
            "D. Rusia"
        ]
    },
    {
        numb: 8,
        question: "¿Qué vitamina es producida por el cuerpo cuando la piel recibe luz solar?",
        answer: "D. Vitamina D",
        options: [
            "A. Vitamina A",
            "B. Vitamina B",
            "C. Vitamina C",
            "D. Vitamina D"
        ]
    },
    {
        numb: 9,
        question: "¿Cuál es el metal más ligero?",
        answer: "A. Litio",
        options: [
            "A. Litio",
            "B. Aluminio",
            "C. Hierro",
            "D. Mercurio"
        ]
    },
    {
        numb: 10,
        question: "¿En qué país se encuentra la Torre Eiffel?",
        answer: "D. Francia",
        options: [
            "A. España",
            "B. Italia",
            "C. Reino Unido",
            "D. Francia"
        ]
    },
    // Nuevas preguntas
    {
        numb: 11,
        question: "¿Cuál es el país más grande del mundo en términos de superficie?",
        answer: "A. Rusia",
        options: [
            "A. Rusia",
            "B. Canadá",
            "C. Estados Unidos",
            "D. China"
        ]
    },
    {
        numb: 12,
        question: "¿Quién es conocido como el padre de la teoría de la relatividad?",
        answer: "B. Albert Einstein",
        options: [
            "A. Isaac Newton",
            "B. Albert Einstein",
            "C. Niels Bohr",
            "D. Galileo Galilei"
        ]
    },
    {
        numb: 13,
        question: "¿Cuál es el continente más pequeño del mundo?",
        answer: "D. Oceanía",
        options: [
            "A. Europa",
            "B. África",
            "C. América del Norte",
            "D. Oceanía"
        ]
    },
    {
        numb: 14,
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answer: "C. Júpiter",
        options: [
            "A. Saturno",
            "B. Urano",
            "C. Júpiter",
            "D. Neptuno"
        ]
    },
    {
        numb: 15,
        question: "¿Qué elemento químico tiene el símbolo Au?",
        answer: "A. Oro",
        options: [
            "A. Oro",
            "B. Plata",
            "C. Cobre",
            "D. Platino"
        ]
    },
    {
        numb: 16,
        question: "¿Qué libro es conocido como el primer libro impreso en la historia?",
        answer: "B. La Biblia de Gutenberg",
        options: [
            "A. El Quijote",
            "B. La Biblia de Gutenberg",
            "C. Los Viajes de Gulliver",
            "D. La Odisea"
        ]
    },
    {
        numb: 17,
        question: "¿Qué continente tiene el mayor número de países?",
        answer: "B. África",
        options: [
            "A. Asia",
            "B. África",
            "C. Europa",
            "D. América"
        ]
    },
    {
        numb: 18,
        question: "¿Cuál es el nombre de la teoría que propone que los continentes estaban una vez unidos en un solo supercontinente?",
        answer: "D. Pangea",
        options: [
            "A. Gondwana",
            "B. Laurasia",
            "C. Rodinia",
            "D. Pangea"
        ]
    },
    {
        numb: 19,
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        answer: "A. George Washington",
        options: [
            "A. George Washington",
            "B. Thomas Jefferson",
            "C. Abraham Lincoln",
            "D. John Adams"
        ]
    },
    {
        numb: 20,
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        answer: "B. La piel",
        options: [
            "A. El hígado",
            "B. La piel",
            "C. El cerebro",
            "D. El corazón"
        ]
    }
];


let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let isAnswered = false;
const nextBtn = document.querySelector(".next__btn")
const optionList = document.querySelector(".option__list")
const resultBox = document.querySelector(".result__box")
const sectionQuiz = document.querySelector(".section-quiz")
const tryAgain = document.querySelector(".tryagain__btn")


document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector(".main")
    const containerUser = document.querySelector(".username__container")
    const inputUsername = document.querySelector('.input__username');
    const btnContinuar = document.querySelector('.btn__continuar-user');
    const nameUser = document.querySelector(".name__user")
    const error = document.querySelector(".error")

    btnContinuar.addEventListener('click', ()=> {
        const username = inputUsername.value.trim();

        if (username === '') {
            // Si el campo está vacío, evita la acción
            error.textContent = "Por favor, ingrese su nombre."
            return
        }
        
        nameUser.textContent= username
        

        main.classList.remove("active")
        containerUser.style.top = '-100%';
        error.textContent = '';
        showQuestion(questionCount)
    
    });
});


nextBtn.addEventListener("click", ()=>{
    if (!isAnswered) {
        const inputUsername = document.querySelector('.input__username').value;
        alert(`${inputUsername} Por favor, responda la pregunta antes de continuar.`);
        return;
    }

    if(questionCount < questions.length-1){
        questionCount++;
        showQuestion(questionCount)
        questionNumber++
        questionCounter(questionNumber)
        headerScore()
        isAnswered = false;
        
    }else{
        showResultBox()
    }
    
})
// mostrar preguntas
function showQuestion(index) {
    const questionText = document.querySelector(".quiz__question")
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optioTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span> </div>`

    optionList.innerHTML = optioTag

    const option = document.querySelectorAll(".option");
    for ( let i = 0 ; i < option.length; i++){
        option[i].setAttribute(`onclick`, `optionSelected(this)`)
    }
    nextBtn.classList.add("disabled");
}
// opcion seleccionada
function optionSelected(answer) {
    let userAnswer = answer.textContent.trim();
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children;

    // Añadir la clase 'correct' o 'incorrect' a la respuesta seleccionada
    if (userAnswer === correctAnswer) {
        answer.classList.add("correct");
        userScore+= 1
        headerScore()
    } else {
        answer.classList.add("incorrect");

        // Marcar la opción correcta
        for (let i = 0; i < allOptions.length; i++) {
            if (allOptions[i].textContent.trim() === correctAnswer) {
                allOptions[i].classList.add("correct");
            }
        }
    }

    // Deshabilitar todas las opciones
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add("disabled__questions");
    }
    nextBtn.classList.remove("disabled");
    isAnswered = true;
}


function questionCounter (index){
    const questionTotal = document.querySelector(".question__total")
    questionTotal.textContent = `${index} de ${questions.length} preguntas`;
}

function headerScore(){
   const headerScoreText =  document.querySelector(".quiz__score");
   headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`
}

function showResultBox (){
    const body=document.querySelector("body")
    sectionQuiz.classList.add("hide")
    resultBox.classList.add('show');
    body.style.background = "var(--color-1)"


    const scoreText =   document.querySelector(".score__text")
    scoreText.textContent= `your Score ${userScore} out of ${questions.length}`

    const circularProgress = document.querySelector(".circular__progress")
    const progressValue = document.querySelector(".progress__value")
    let progressValueStart = -1
    let progressValueEnd = (userScore / questions.length) * 100
    let speed = 20

    let progress = setInterval(()=>{
        progressValueStart++

        progressValue.textContent= `${progressValueStart}%`
        circularProgress.style.background = `conic-gradient(var(--color-3) ${progressValueStart * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`

        if (progressValueStart == progressValueEnd){
            clearInterval(progress)
        }
    }, speed)
}

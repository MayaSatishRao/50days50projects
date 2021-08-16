const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const aOption = document.getElementById("a_text");
const bOption = document.getElementById("b_text");
const cOption = document.getElementById("c_text");
const dOption = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer");
const submitButton = document.getElementById("submit");


let currentQuestion = 0;
let score = 0;

showQuestion();

function showQuestion(){

    removeChecked();
    const question = quizData[currentQuestion];
    questionEl.innerText = question.question;
    aOption.innerText = question.a;
    bOption.innerText = question.b;
    cOption.innerText = question.c;
    dOption.innerText = question.d;

}

function removeChecked(){
    answerEls.forEach(answerEl=>{
        answerEl.checked = false;
    })
}

function getSelected(){
    let answer = '';
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitButton.addEventListener("click",()=>{
    let answer = getSelected();
    if(answer){

        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;

        if(currentQuestion<answerEls.length){
            showQuestion();
        }else{
            quiz.innerHTML = `<h2>You have scored ${score}/${quizData.length} points</h2>
                               <button onclick="location.reload()">Reload</button>`;
            
        } 
    }
    
})
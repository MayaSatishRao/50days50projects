const screens = document.querySelectorAll(".screen");
const startButton = document.querySelector("#start-button");
const selectInsectButtons = document.querySelectorAll(".choose-insect-btn");
const gameContainer = document.querySelector(".game-container");
const Time = document.getElementById("time");
const Score = document.getElementById("score");
const message = document.getElementById("message");


let score= 0;
let second = 0;

let selectedInsect ={};

startButton.addEventListener("click",()=>{
    screens[0].classList.add("up");
})

selectInsectButtons.forEach(button=>{
    button.addEventListener("click",()=>{
            const img = button.querySelector("img");
            const src = img.getAttribute("src");
            const alt = img.getAttribute("alt");
            selectedInsect = {src,alt};
            screens[0].classList.remove("up");
            screens[0].classList.add("twice-up");
            setTimeout(createInsect,1000);
            startGame();
    })
})


function startGame(){
    setInterval(increaseTime,1000);
}

function increaseTime(){
    let minutes = Math.floor(second/60);
    let seconds = second%60;

    minutes = minutes<10?`0${minutes}`:minutes;
    seconds = seconds<10?`0${seconds}`:seconds;
  
     Time.innerHTML = `Time:${minutes}:${seconds}`;
     second++;
}

function createInsect(){
    const insectDiv = document.createElement("div");
    insectDiv.classList.add("insects");
    const {x,y} = getRandomLocation();
    insectDiv.style.top = `${y}px`;
    insectDiv.style.left = `${x}px`;
    insectDiv.innerHTML = `<img src=${selectedInsect.src} alt=${selectedInsect.alt} style="transform:rotate(${Math.random()*360}deg)"/>`;

    insectDiv.addEventListener("click",catchInsect);
    gameContainer.appendChild(insectDiv);

}


function getRandomLocation(){
    let height = window.innerHeight;
    let width = window.innerWidth;

    const x = Math.random()*(width-200)+100;
    const y = Math.random()*(height-200) +100;
    console.log(height,width);
    return {x,y};
   
}

function increaseScore(){
    score++;
    if(score>19){
        message.classList.add("visible");
    }
    Score.innerHTML = `Score:${score}`;
}
function catchInsect(){
    increaseScore();
    this.classList.add("caught");

    setTimeout(()=>{this.remove()},1000);
    addInsects();
}

function addInsects(){
    setTimeout(createInsect,1000);
    setTimeout(createInsect,1500);
}


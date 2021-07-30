const heartDiv = document.getElementById("heart");
const timesEl = document.getElementById("times");

let currentTime = 0; // to denote first click

let likeTimes = 0;
console.log(heartDiv);
heartDiv.addEventListener("click",(event)=>{
    if(currentTime === 0){
        currentTime = new Date().getTime(); // store the first clicked time
    }else{
        if((new Date().getTime() - currentTime)<800){ // get the diff and check if it is a double click or not 
            createHeart(event);
            currentTime = 0;
        }else{
            currentTime = new Date().getTime();
        }
    }
    
})

function createHeart(e){
    const imageX = e.target.offsetLeft;
    const imageY = e.target.offsetTop;

    const clickX = e.clientX;
    const clickY = e.clientY;

    const positionX = clickX-imageX;
    const positionY = clickY-imageY;

    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    heart.style.top = `${positionY}px`;
    heart.style.left = `${positionX}px`;

    heartDiv.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },1000);

    likeTimes++;
    timesEl.innerText = `${likeTimes}`;

}
const images = document.querySelectorAll(".image-container img");
const imageContainer = document.querySelector(".image-container");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentIndex = 0;

let interval = setInterval(run,2000);

function run(){
    currentIndex++;
    runImages();
}

function runImages(){
  if(currentIndex < images.length){
     imageContainer.style.transform = `translate(${-400*currentIndex}px)`; 
  }else{
    imageContainer.style.transform = `translate(0px)`; 
    currentIndex = 0;
  }
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run,2000);
}
leftBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex <0){
        currentIndex = images.length - 1;
    }
    runImages();
    resetInterval();
})

rightBtn.addEventListener("click",()=>{
    currentIndex++;

    runImages();
    resetInterval();
})
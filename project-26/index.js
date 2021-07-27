const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLength = document.querySelectorAll(".left-slide div").length;
console.log(slidesLength);

let activeSlide = 0;

leftSlide.style.top = `-${(slidesLength-1)*100}vh`;

upButton.addEventListener("click",()=>moveSlide("up"));
downButton.addEventListener("click",()=>moveSlide("down"));

function moveSlide(direction){
    
    const sliderHeight = sliderContainer.clientHeight;

    if(direction === "up"){
        activeSlide++;
        if(activeSlide > slidesLength-1){
            activeSlide = 0;
        }
        
    }else if(direction === "down"){
        activeSlide--;
        if(activeSlide < 0){
            activeSlide = slidesLength -1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlide*sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlide*sliderHeight}px)`;
}



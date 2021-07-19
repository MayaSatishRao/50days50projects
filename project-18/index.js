const body = document.body;

const sliderContainer = document.querySelector(".slider-container");

const slides = document.querySelectorAll(".slide");

const leftButton = document.getElementById("left");

const rightButton = document.getElementById("right");

let index = 0;

setBgToBody(index);

leftButton.addEventListener("click",()=>{
    if(index >= 1){
        index--;
    }else{
        index=slides.length-1;
    }

   setBgToBody();
   setActiveSlide();

})

rightButton.addEventListener("click",()=>{
    if(index >= slides.length -1){
        index=0;
    }else{
        index++;
    }

   setBgToBody();
   setActiveSlide();

})

function setBgToBody(){
    body.style.backgroundImage = slides[index].style.backgroundImage;
}

function setActiveSlide(){
     slides.forEach(slide=>{
         slide.classList.remove("active");
     }) ;

     slides[index].classList.add("active");
}
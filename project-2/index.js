const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click" ,()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;}
    update();
})

prev.addEventListener("click" , ()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1}
    update();
})

function update(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    })

    const activeClasses = document.querySelectorAll(".active");
    var width = ((activeClasses.length - 1) / (circles.length-1))*100 + "%" ;
    progress.style.width=width;

    if(currentActive===1){
     prev.disabled = true;
     next.disabled = false;
    }else if(currentActive=== 4){
        prev.disabled = false;
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


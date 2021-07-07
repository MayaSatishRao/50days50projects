const boxes = document.querySelectorAll(".card");

window.addEventListener("scroll" , showBoxes);

showBoxes();

function showBoxes(){
    const triggerPoint = window.innerHeight*4/5 ;
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerPoint){
            box.classList.add("active");
        }else{
            box.classList.remove("active");
        }
    })
}
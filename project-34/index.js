const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const buttonsDiv = document.querySelector(".buttons");
const replayBtn = document.getElementById("button");

runAnimation();

function runAnimation(){
    nums.forEach((num,index)=>{
        let lastIndex = nums.length - 1;
        num.addEventListener("animationend",(event)=>{
            if(event.animationName === "goIn" && index !==lastIndex ){
                num.classList.remove("in");
                num.classList.add("out");
            }else if(event.animationName === "goOut" && num.nextElementSibling){
                num.nextElementSibling.classList.add("in");
            }else{
                counter.classList.add("hide");
                buttonsDiv.classList.add("show");
            }
        })
    })
}

function resetDOM(){
    counter.classList.remove("hide");
    buttonsDiv.classList.remove("show");


    nums.forEach(num=>{
        num.classList.value = '';
    })

    nums[0].classList.add("in");
}

replayBtn.addEventListener("click",()=>{
    resetDOM();
    runAnimation();
})
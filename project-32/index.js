const toggleEls = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggleEls.forEach(toggleEl=>{
    toggleEl.addEventListener("change",(event)=>{
        doTheTrick(event.target);
    })
})

function doTheTrick(theClickedOne){
    if(good.checked === true && cheap.checked === true && fast.checked === true){
        if(theClickedOne === good){
            fast.checked = false;
        }else if(theClickedOne === cheap){
            good.checked = false;
        }else if(theClickedOne === fast){
            cheap.checked = false;
        }
    }
}
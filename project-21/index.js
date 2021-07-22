const fill= document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);

empties.forEach(empty=>{
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("drop",drop);
})

function dragEnter(event){
    event.preventDefault();
    this.classList += " hovered";
}

function dragLeave(event){
    this.classList = "empty";
}

function dragOver(event){
    event.preventDefault();
}

function drop(){
    this.classList = "empty";
    this.append(fill);
}

function dragStart(){
    this.classList += " hold";
    setTimeout(()=>this.classList = "invisible",0);
}

function dragEnd(){
    this.classList = "fill";
   
}
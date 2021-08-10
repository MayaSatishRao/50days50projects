const boxesDiv = document.getElementById("boxes");
const button = document.getElementById("btn");
let rows = 4;
let columns = 4;

for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
      const boxEl = document.createElement("div");
      boxEl.classList.add("box");
      boxEl.style.backgroundPosition = `-${125*j}px -${125*i}px`;
      boxesDiv.appendChild(boxEl);
    }
}

button.addEventListener("click",()=>{
    boxesDiv.classList.toggle("big");
})
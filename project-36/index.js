const container = document.getElementById("container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const numberOfSquares= 500;

for(let i=0;i<numberOfSquares;i++){
    const square = document.createElement("div");
    square.classList.add("square");

    console.log("square");

    square.addEventListener("mouseover",()=>setColor(square));
    square.addEventListener("mouseout",()=>removeColor(square));
    container.appendChild(square);
}

function setColor(element){
    const color = colors[Math.floor(Math.random()*colors.length)];
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color} ,0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px rgba(0,0,0,0.3)`

}
const passwordEl = document.getElementById("password");
const background = document.querySelector(".background-image");
let length = 0;

passwordEl.addEventListener("input",(e)=>{
    length = e.target.value.length;
    background.style.filter = `blur(${20-(2*length)}px)`;
})
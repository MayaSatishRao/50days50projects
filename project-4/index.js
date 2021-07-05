const btn = document.querySelector(".btn");
const searchDiv = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click" , ()=>{
   searchDiv.classList.toggle("active");
   input.focus();
})
const button = document.getElementById("toggle");
const navEl = document.getElementById("nav");


button.addEventListener("click",()=>{
    navEl.classList.toggle("active");
})



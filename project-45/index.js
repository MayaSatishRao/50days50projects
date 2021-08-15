const openBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close");
const navBars = document.querySelectorAll(".nav");

openBtn.addEventListener("click",()=>{
    navBars.forEach(navBar=>{
        navBar.classList.add("visible");
})
})

closeBtn.addEventListener("click",()=>{
    navBars.forEach(navBar=>{
        navBar.classList.remove("visible");
})
})
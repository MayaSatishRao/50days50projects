const images = document.querySelectorAll(".mobile img");
const liItems = document.querySelectorAll("ul li");
const currentActive = document.querySelector("ul li.active");

let active = 0;

liItems.forEach((liItem,index)=>{
    liItem.addEventListener("click",()=>{
        removeActive();
        images[active].classList.remove("show");
        active = index;
        images[active].classList.add("show");
        liItem.classList.add("active");
    })
})

function removeActive(){
    liItems.forEach(li=>li.classList.remove("active"));
}
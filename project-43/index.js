const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container");
const sendButton = document.getElementById("btn");
const panel = document.getElementById("panel");
let selected = "Excellent";

ratingsContainer.addEventListener("click",(e)=>{
   if(e.target.parentNode.classList.contains("rating")){
       removeActive();
       e.target.parentNode.classList.add("clicked");
       selected = e.target.parentNode.innerText;
   }
})

sendButton.addEventListener("click",(e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!<br/>Feedback:${selected} </strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove("clicked");
    }
}
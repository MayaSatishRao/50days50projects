const toastsDiv = document.querySelector(".toasts");
const buttonEl = document.getElementById("button");

const messages = ["Message One","Message Two","Message Three","Message Four"];
const colors = ["red","green","rebeccapurple"];


buttonEl.addEventListener("click",createNotification);


function createNotification(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomColor = Math.floor(Math.random()*3);

    const notificationEl = document.createElement("div");
    notificationEl.classList.add("toast");
    notificationEl.style.color = colors[randomColor];
    notificationEl.innerText = messages[randomNumber];

    toastsDiv.appendChild(notificationEl);

    setTimeout(()=>{
        notificationEl.remove();
    },3000);
}
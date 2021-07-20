const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById( "second");
const toggleButton = document.getElementById("mode");
const HTML = document.querySelector("html");
const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");
const circleEl = document.querySelector(".circle");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

toggleButton.addEventListener("click",(event)=>{
    if(HTML.classList.contains("dark")){
        event.target.innerText = "Dark Mode";
        HTML.classList.remove("dark");
    }else{
        event.target.innerText = "Light Mode";
        HTML.classList.add("dark");
    }
  
})

function setTime(){
    const date = new Date();
    const hours = date.getHours();
    const hoursForClock = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const ampm = hours>12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%,-100%)
     rotate(${map(hoursForClock,0,11,0,360)}deg)`;
     minuteEl.style.transform = `translate(-50%,-100%)
     rotate(${map(minutes,0,59,0,360)}deg)`;
     second.style.transform = `translate(-50%,-100%)
     rotate(${map(seconds,0,59,0,360)}deg)`;

   timeEl.innerText = `${hoursForClock}:${minutes <10 ? `0${minutes}`:minutes}:${ampm}`; 
   dayEl.innerHTML = `${month} , ${day} <span class="circle">${date.getDate()}</span>`;
   
     
}

const map = (num , inMin , inMax , outMin , outMax)=>{
    return (num-inMin) * (outMax-outMin)/(inMax-inMin) + outMin;
}

setInterval(setTime,100);

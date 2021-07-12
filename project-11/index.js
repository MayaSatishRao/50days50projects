const insertDiv = document.getElementById("insert");
const keys = document.querySelectorAll(".key p");


window.addEventListener("keydown",(event)=>{
    if(event.key ===" "){
        keys[0].innerText = "Space";
    }else{
        keys[0].innerText = event.key;
    }
 
    keys[1].innerText = event.keyCode;
    keys[2].innerText = event.code;
})
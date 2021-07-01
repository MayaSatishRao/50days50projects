const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(panel => {
   panel.addEventListener("click" , ()=>{
       removeClass();
       panel.classList.add("active");
   }) 
});

function removeClass(){
    panels.forEach(panel =>{
      panel.classList.remove("active");
    })
}
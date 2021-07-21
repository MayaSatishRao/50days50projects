const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button=>{
    button.addEventListener("click",function (event){
        const x = event.clientX;
        const y = event.clientY;
        
        const buttonLeft = event.target.offsetLeft;
        const buttonTop = event.target.offsetTop;

        const left = x-buttonLeft;
        const top = y-buttonTop;

        const spanEl = document.createElement("span");
        spanEl.classList.add("circle");

        spanEl.style.top = top+"px";
        spanEl.style.left = left+"px";

        this.appendChild(spanEl);

        setTimeout(()=>{
            spanEl.remove();   // to remove the already added element
        },500);
    })
})
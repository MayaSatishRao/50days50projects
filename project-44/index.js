const input = document.getElementById("range");
const label = document.querySelector("label");

input.addEventListener("input",(e)=>{
    const value = e.target.value;
    label.innerText = value;

    const label_Width = getComputedStyle(label).getPropertyValue("width");
    const input_Width = getComputedStyle(input).getPropertyValue("width");

    const labelWidth = +label_Width.substring(0,label_Width.length-2);
    const inputWidth = +input_Width.substring(0,input_Width.length-2);

    const max= e.target.max;
    const min = e.target.min;

    const left = value*(inputWidth/max) - labelWidth/2;
    label.style.left = `${left}px`;

})
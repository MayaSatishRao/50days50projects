const bg = document.querySelector(".bg")
const text = document.querySelector(".text");

let load = 0;

let int = setInterval(blurring , 20);
function blurring(){
     load++ ;
     console.log(load);
     if(load > 99){
         clearInterval(int);
     }
     text.innerText = `${load}%`;
     text.style.opacity = scale(load ,0 , 100 , 1 ,0);
     bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`    
}

const scale = (num , inMin , inMax , outMin , outMax)=>{
    return((num-inMin)*(outMax-outMin)/(inMax-inMin) + outMin);
}
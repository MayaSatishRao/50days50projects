const smallCups = document.querySelectorAll(".small-cup");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const liters = document.getElementById("liters");
const bigCup = document.querySelector(".cup");

const totalCups = smallCups.length;

smallCups.forEach((smallCup,index)=>{
        
        
        smallCup.addEventListener("click",()=>{
            highlightCups(index);
           
        });
        
});


function highlightCups(a){
    if(smallCups[a].classList.contains("fill") && !smallCups[a+1].classList.contains("fill")){
        a--;
    }
    smallCups.forEach((cup,idx)=>{
          if(idx <= a){
              cup.classList.add("fill");
          }else{
              cup.classList.remove("fill");
          }
        })

        fillBigCup();
}



function fillBigCup(){
    const filledCups = document.querySelectorAll(".small-cup.fill").length;
    if(filledCups === 0){
        percentage.style.height = 0;
        percentage.style.visibility = "hidden";
    }else{
        percentage.style.height = `${filledCups/totalCups*330}px`;
        percentage.style.visibility="visible";
        percentage.innerText = `${filledCups/totalCups*100}%`;
    }

    if(totalCups === filledCups){
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }else{
        remained.style.visibility = "visible";
        liters.innerText = `${2-(250/1000*filledCups)}L`;
    }
}

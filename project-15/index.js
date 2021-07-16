const counter = document.querySelectorAll(".counter");

counter.forEach(count=>{
  
 counter.innerText = "0";
    const updateCounter=()=>{
        const target = +count.getAttribute("data-target");
        const increment = target / 150;
         c = +count.innerText;

        if(c<target){
            count.innerText = `${Math.floor(c+increment)}`;
            setTimeout(updateCounter,10);
        }else{
            count.innerText = target;
        }
    }

    updateCounter();
})

const container = document.getElementById("container");
const rows = 10;
const columns = 3;
const unsplashURL = "https://source.unsplash.com/random/"

for(let i=0;i<rows*columns;i++){
   const imgEl = document.createElement("img");
   imgEl.src = `${unsplashURL}${getRandomSize()}`;
   container.appendChild(imgEl);
}

function getRandomSize(){
   return `${getRandomNum()}X${getRandomNum()}`; 
}

function getRandomNum(){
    return (Math.floor(Math.random()*10)+300);
}
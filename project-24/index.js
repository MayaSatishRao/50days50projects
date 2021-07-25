const cardHeader = document.getElementById("header-image");
const cardTitle = document.getElementById("title");
const cardExcerpt = document.getElementById("excerpt");
const profileImage = document.getElementById("profile-image");
const text = document.getElementById("text");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedTextBgs = document.querySelectorAll(".animated-text-bg");

setTimeout(getData,2000);

function getData(){
     cardHeader.innerHTML= '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt=""> ';
     cardTitle.innerText = "Lorem ipsum dolor sit amet";
     cardExcerpt.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, nam.";
     profileImage.innerHTML ='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
     text.innerText = 'John Smith';
     date.innerHTML = 'Oct 20 2020';
     
     animatedBgs.forEach(bg=>{
         bg.classList.remove("animated-bg");
     });

     animatedTextBgs.forEach(bg=>{
         bg.classList.remove("animated-text-bg");
     })
}


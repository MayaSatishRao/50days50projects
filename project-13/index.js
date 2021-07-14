const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup",(event)=>{
    createTags(event.target.value);

    if(event.key === "Enter"){
        setTimeout(()=>{
            event.target.value = "";
        },10);
        choicePicker();
    }
});

function createTags(input){
    const tags=input.split(",").filter(tag=>{return tag.trim() !==' '}).map(tag=>tag.trim());

     tagsEl.innerHTML='';

     tags.forEach(tag=>{
         const tagElement = document.createElement("span");
         tagElement.classList.add("tag");
         tagElement.innerText = tag;
         tagsEl.appendChild(tagElement);
     });
}

function choicePicker(){
  
   const times = 30; // represents the number of times each tag is highlighted.
 
   const interval = setInterval(()=>{
      const randomTag = pickRandomTag();
      hightlightTag(randomTag);
      setTimeout(()=>{
        unhightlightTag(randomTag);
       },100);
   },100)
   
    setTimeout(()=>{
        clearInterval(interval);
        pickFinalTag();
        pickFinalTag();
    },times*100);
     
    
    
    
}
function pickFinalTag(){
    const chosenTag = pickRandomTag();
    hightlightTag(chosenTag);
    console.log(chosenTag);
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag");
    const randomNumber = Math.floor(Math.random()*tags.length);
   return tags[randomNumber];
}
function hightlightTag(input){
    input.classList.add("highlight");
}

function unhightlightTag(input){
    input.classList.remove("highlight");
}
const formEl = document.getElementById("form");
const input = document.querySelector("input");
const unorderedList = document.getElementById("todos");
const liItems = document.querySelectorAll("#todos li");

const savedLists = JSON.parse(localStorage.getItem("items"));
if(savedLists){
     savedLists.forEach(savedList=>{
         createList(savedList.text,savedList.completed);
     })
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    createList(input.value,false);
})

function createList(message,completedVariable){
    const liItem = document.createElement("li");
    liItem.innerHTML = message;

    if(completedVariable === true){
        liItem.classList.add("completed");
    }

    liItem.addEventListener("click",()=>{
        liItem.classList.toggle("completed");
        updateLocalStorage();
    })

    liItem.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        liItem.remove();
        updateLocalStorage();
    })

    unorderedList.appendChild(liItem);
    input.value = '';
    updateLocalStorage();
}

function updateLocalStorage(){
    const todos = document.querySelectorAll("li");
    const items = [];

    todos.forEach(todo=>{
        items.push({
            text:todo.innerText,
            completed:todo.classList.contains("completed")
        });
    })


    localStorage.setItem("items",JSON.stringify(items));
}


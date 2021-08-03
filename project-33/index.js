const addButton = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(note=>addNote(note));
}

addButton.addEventListener("click",()=>addNote());


function addNote(text=""){

    const noteEl = document.createElement("div");
    noteEl.classList.add("note");

    noteEl.innerHTML=`
    <div class="tools">
    <button class="edit" id="edit">
        <i class="fas fa-edit"></i>
    </button>
    <button class="delete" id="delete">
        <i class="fas fa-trash-alt"></i>
    </button>
    </div>

    <div class="main ${text?"":"hidden"}"></div>
    <textarea class="${text?"hidden":""}"></textarea>
    `;

    const deleteBtn = noteEl.querySelector(".delete");
    const editBtn = noteEl.querySelector(".edit");
    const main = noteEl.querySelector(".main");
    const textareaEl = noteEl.querySelector("textarea");

    deleteBtn.addEventListener("click",()=>{
        noteEl.remove();
        updateLS();
    })

    editBtn.addEventListener("click",()=>{
        main.classList.toggle("hidden");
        textareaEl.classList.toggle("hidden");
        updateLS();
    })


    textareaEl.value = text;
    main.innerHTML = marked(text);
    

    textareaEl.addEventListener("input",(e)=>{
        const value = e.target.value
    main.innerHTML = marked(value);
    updateLS();
        
    })


    document.body.appendChild(noteEl);
}

function updateLS(){
    const noteElements = document.querySelectorAll("textarea");
    const notes = [];

    noteElements.forEach(noteElement=>{
        notes.push(noteElement.value);
    })

    localStorage.setItem("notes",JSON.stringify(notes));
}
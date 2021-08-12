const result = document.getElementById("result");
const filter = document.getElementById("filter");

let users = [];

filter.addEventListener("input",(e)=>{
    filterData(e.target.value);
})

async function getData(){
    let response = await fetch("https://randomuser.me/api?results=50");
    const  {results } = await response.json();
    
    result.innerHTML = '';
    results.forEach(userData=>{
        const name = userData.name.first + userData.name.last;
        const location = userData.location.state + "," + userData.location.country;
        const imgsrc = userData.picture.large;
        const liEl = document.createElement("li");
        users.push(liEl);
        liEl.innerHTML=` <img src=${imgsrc} alt="user-image">
        <div class="user-info">
            <h4>${name}</h4>
            <p>${location}</p>
        </div>`
        result.appendChild(liEl);
    });
    
}

getData();

function filterData(searchTerm){
    users.forEach(user=>{
        const search = searchTerm.toLowerCase();
        const string = user.innerHTML.toLowerCase();

        if(string.includes(search)){
            user.classList.remove("hide");
        }else{
            user.classList.add("hide");
        }
    })
}



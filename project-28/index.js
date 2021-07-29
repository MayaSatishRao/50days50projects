
// Getting all elements from DOM
const API_KEY = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


// asynchronous function to get user data from API
async function getUser(username){
    try{
        const response = await fetch(API_KEY + username);

  const data = await response.json();
  console.log(data);
  createCard(data);
    }catch(err){
        if(err.response.status == 404){
            createErrorCard("No profile found with this username");
        }
        console.log(err);
    }
 
}

// asynchronous function to get the repos of the user
async function getRepos(username){
   const response = await fetch(API_KEY + username + "/repos?sort=created");
   const data = await response.json();

   addReposToCard(data);
}

// Adding event listener to the form and triggering the createCard function
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const username = search.value;
    if(username){
        getUser(username);
        getRepos(username);
        search.value = "";
    }
 

})


// inserting the data into the newly created div
function createCard(data){
     const {name,bio,followers,following,public_repos,avatar_url} = data;
      
      if(name === undefined){
          createErrorCard("No profile found with this username");
      }else{
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");

      const cardHTML = `   <div class="card">
      <div>
      <img src=${avatar_url} alt="" class="avatar">
   </div>
   <div id="user-info">
       <h2>${name}</h2>
       <p>${bio}</p>

       <ul>
           <li>${followers} <strong>Followers</strong></li>
           <li>${following} <strong>Following</strong></li>
           <li>${public_repos} <strong>Repositories</strong></li>
       </ul>

       <div id="repos">
         
       </div>
       </div>
   </div>`
   cardEl.innerHTML = cardHTML;
   main.innerHTML = cardHTML;}

}

// in case of error get the error card
function createErrorCard(message){
    const errorEl = document.createElement("div");
    errorEl.innerHTML = `
     <div class="card">
     <h1>${message}</h1>
     </div>
    `;
    main.appendChild(errorEl);
}

// function to add repos to the div element
function addReposToCard(data){
    const reposEl = document.getElementById("repos");
    const array = [data[0],data[1],data[2],data[3],data[4]];
    array.forEach(repo=>{
        const repoEl = document.createElement("a");
        repoEl.innerHTML=`
        <a href=${repo.html_url} class="repo">${repo.name}</a>
        `;
        repoEl.target = "_blank";

        reposEl.appendChild(repoEl);
    })
}







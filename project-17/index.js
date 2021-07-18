const API_KEY = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a672473c52322c4b57aff122ea22e57f&page=2";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a672473c52322c4b57aff122ea22e57f&query="';

const form = document.getElementById("form");
const search = document.getElementById("search-bar");
const main = document.getElementById("main");


const getMovies= async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    createCards(data.results);
};


function createCards(movies){
    main.innerHTML = "";
    movies.forEach(movie=>{
        const {title,poster_path,vote_average,overview} = movie;
        
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML=`
        <img src="${IMG_PATH+poster_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${getClassName(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
        `
        main.appendChild(movieEl);
    })

    
}

function getClassName(num){
    if(num>=8){
        return "green";
    }else if(num<8 || num>=5){
         return "orange";
    }else{
        return "red";
    }
}

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    const searchTerm = search.value;
    console.log(typeof searchTerm);
    if(searchTerm && searchTerm !=""){
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    }else{
        window.location.reload();
    }

})

getMovies(API_KEY);
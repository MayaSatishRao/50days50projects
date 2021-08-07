const pokeContainer = document.getElementById("poke-container");
const count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const fetchPokemon = async ()=>{
    for(let i = 1;i<=count;i++){
        await getPokemon(i);
    }
}

const getPokemon= async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createCard(data);
}

fetchPokemon();

const createCard = (data)=>{
     const name = data.name[0].toUpperCase()+data.name.substring(1,data.name.length);
     const id =data.id;
     const type = data.types[0].type.name;
     const divEl = document.createElement("div");
     divEl.classList.add("pokemon");
     divEl.innerHTML = `<div class="img-container">
     <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="">
          </div>
          <div class="info">
        <span class="number">#${id}</span>
        <h3>${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
 </div>`
 const color = colors[type];
 divEl.style.backgroundColor = color;
 pokeContainer.appendChild(divEl);
     const imageSource = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

}
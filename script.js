import { pokemonArray } from "./data/pokemon.js";

const cards = document.querySelector(".card-container");
const filterName = document.querySelector(".filterName");
const filterNumber = document.querySelector(".filterNumber");
const filterType = document.querySelector(".filter-type");

//FILTER FUNCITONS

//Filter by Name
const showByNames = () => {
  cards.innerHTML = "";

  const showPokemons = pokemonArray.filter((pokemon) => {
    if (pokemon.name == filterName.value) {
      return pokemon;
    }
  });

  displayPokemon(showPokemons);
};

//Filter by Number
const showByNumber = () => {
  cards.innerHTML = "";

  if (filterNumber.value < 152) {
    displayPokemon(pokemonArray.slice(0, filterNumber.value));
  }
};

//Filter by Type
const showByType = () => {
  cards.innerHTML = "";

  let showPokemons = 0;

  if (filterType.value == "any") {
    showPokemons = pokemonArray;
  } else {
    showPokemons = pokemonArray.filter((pokemon) => {
      if (pokemon.types.includes(filterType.value)) {
        return pokemon;
      }
    });
  }

  displayPokemon(showPokemons);
};

//EVENT LISTENERS
filterName.addEventListener("input", showByNames);
filterNumber.addEventListener("input", showByNumber);
filterType.addEventListener("input", showByType);

//Pokemon type checker
const checkTypes = (pokemon, index) => {
  if (pokemonArray[index - 1].types.length == 1)
    return `${pokemon.name} (# ${index}) is ${pokemon.types[0]} a  type pokemon`;

  return `${pokemon.name} (# ${index}) is a ${pokemon.types[0]} & a ${pokemon.types[1]} type pokemon`;
};

// Pokemon card format
const displayPokemon = (pokemonList) => {
  for (let i = 0; i < pokemonList.length; i++) {
    cards.innerHTML += `
    <div class="card"> 
    <img src=${pokemonList[i].sprite} class="card__image">
    <div class="card__content">
        <h1 class="card__heading">${pokemonList[i].name}</h1>

        <p class="card__text"> ${checkTypes(pokemonList[i], i + 1)}</p>
    </div>
    </div>`;
  }
};

//display cards
displayPokemon(pokemonArray);

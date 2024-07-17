import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  // Fetch Anfrage an die API
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();

  // Extrahieren der ersten 20 Charaktere
  const characters = data.results.slice(0, 20);

  // Leeren des cardContainers
  cardContainer.innerHTML = "";

  // Erstelle und hinzufügen der Charakterkarten
  characters.forEach((character) => {
    const characterCard = CharacterCard(character);
    cardContainer.appendChild(characterCard);
  });

  console.log(characters);
}

// Funktion aufrufen, um die Charaktere zu laden
fetchCharacters();

// searchBar.js  - modified by Lorenz. Timestamp start: 17.07.2024, 11:36h

import { fetchCharacters } from "../../index.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
let searchQuery = "";

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const query = formData.get("query").trim();
  searchQuery = query;
  await fetchCharacters(1, searchQuery);
});

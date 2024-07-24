import { fetchCharacters } from "../../index.js";

// Обробники подій для кнопок пагінації
// Event handlers for pagination buttons
prevButton.addEventListener("click", async () => {
  if (page > 1) {
    page--;
    await fetchCharacters(searchQuery, page);
  }
});

nextButton.addEventListener("click", async () => {
  if (page < maxPage) {
    page++;
    await fetchCharacters(searchQuery, page);
  }
});

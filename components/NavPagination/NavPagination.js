import { fetchCharacters } from "../../index.js";

// Обробники подій для кнопок пагінації
// Event handlers for pagination buttons
export function handlePagination() {
  prevButton.addEventListener("click", function () {
    if (page > 1) {
      page--;
      fetchCharacters();
    }
  });

  nextButton.addEventListener("click", function () {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  });
}

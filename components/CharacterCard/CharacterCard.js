export function CharacterCard(image, status, name, type, occurences) {
  const newListItem = document.createElement("li");
  newListItem.classList.add("card");

  newListItem.innerHTML = `
<div class="card__image-container">
            <img
              class="card__image"
              src="${image}"
              alt="${name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">${status}</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurences}</dd>
            </dl>
          </div>
`;
  return newListItem;
}

export const createFilmListTemplate = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    <div class="films-list__container">
    </div>
      </section>
      </section>`;
};
export const createFilmCardTemplate = (filmCard) => {

  const {
    id,
    title,
    totalRating,
    date,
    runtime,
    genre,
    poster,
    descriptionPreview,
    commentCount,
    isWatchlist,
    isWatched,
    isFavorite,
  } = filmCard;

  return (
    `
      <article class="film-card data-id=${id}">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${date}</span>
          <span class="film-card__duration">${runtime}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${poster}" alt="${title}" class="film-card__poster">
        <p class="film-card__description">${descriptionPreview}</p>
        <a class="film-card__comments">${commentCount} comments</a>
        <div class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist}" type="button">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched}" type="button">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite}" type="button">Mark as favorite</button>
        </div>
    </article>`
  );
};


// import { createElement } from '../utils/render.js';
// import { date } from '../utils/date.js';
import AbstractView from './abstract.js';

const createFilmCardTemplate = (
  {
    title,
    totalRating,
    date,
    runtime,
    genre,
    poster,
    description,
    comments,
    isFavorite,
    isWatched,
    isWatchList,
  }) => {
  const isButtonActive = (flag) => {
    return flag === true ? 'film-card__controls-item--active' : '';
  };

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${totalRating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${date}</span>
            <span class="film-card__duration">${runtime}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isButtonActive(isWatchList)}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isButtonActive(isWatched)}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${isButtonActive(isFavorite)}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

// export default class FilmCard {
//   constructor(film) {
//     this._film = film;
//     this.element = null;
//   }

//   getTemplate() {
//     return createFilmCardTemplate(this._film);
//   }

//   getElement() {
//     if (!this.element) {
//       this.element = createElement(this.getTemplate());
//     }

//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
//TODO
export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._editClickHandler = this._editClickHandler.bind(this);
  }
  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._clickHandler);
    this.getElement().querySelector('.film-card__title').addEventListener('click', this._clickHandler);
    this.getElement().querySelector('.film-card__comments').addEventListener('click', this._clickHandler);

  }
}

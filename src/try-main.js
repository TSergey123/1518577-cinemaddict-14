
import { createFilmCard } from './mock/film.js';
import { createFilter } from './mock/filter-data.js';
import { renderElement, RenderPosition } from './utils/render.js';
import { CARD_COUNT, TOTAL_COUNT } from './mock/const.js';
import FilmCardView from './view/film-card.js';
import PopupView from './view/popup.js';
import UserRankView from './view/user-rank.js';
import MenuView from './view/menu.js';
import SortView from './view/sort.js';
import FilmListView from './view/film-list.js';
import ShowMoreView from './view/show-more.js';
import TopRatedView from './view/top-rated.js';
import MostCommentedView from './view/most-commented.js';
import TotalFilmsCountView from './view/total-films-count.js';


const FILM_COUNT = 20;
const films = new Array(FILM_COUNT).fill().map(createFilmCard);
const filters = createFilter(films);

// const renderFilm = (filmList, film) => {
//   const filmElement = new FilmCardView(film);
//   const filmPopupElement = new PopupView(film);

//   const renderPopup = () => {
//     renderElement(body, filmPopupElement.getElement(), RenderPosition.BEFOREEND);
//     body.classList.add('hide-overflow');
//   };

//   filmElement.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
//     renderPopup();
//   });

//   filmElement.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
//     renderPopup();
//   });

//   filmElement.getElement().querySelector('.film-card__title').addEventListener('click', () => {
//     renderPopup();
//   });

//   filmElement.getElement.querySelector('.film-details__close-btn').addEventListener('click', () => {
//     filmPopupElement().getElement().remove();
//     body.classList.remove('hide-overflow');
//   });

//   renderElement(filmList, filmElement.getElement(), RenderPosition.BEFOREEND);
// };
const renderFilm = (filmListElement, film) => {
  const filmComponent = new FilmCardView(film);
  const filmPopupComponent = new PopupView(film);

  const renderPopup = () => {
    renderElement(body, filmPopupComponent.getElement(), RenderPosition.BEFOREEND);
    body.classList.add('hide-overflow');
  };

  filmComponent.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
    renderPopup();
  });

  filmComponent.getElement().querySelector('.film-card__title').addEventListener('click', () => {
    renderPopup();
  });

  filmComponent.getElement().querySelector('.film-card__comments').addEventListener('click', () => {
    renderPopup();
  });

  filmPopupComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
    filmPopupComponent.getElement().remove();
    body.classList.remove('hide-overflow');
  });

  renderElement(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

const body = document.querySelector('body');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer__statistics');


renderElement(header, new UserRankView(filters).getElement(), RenderPosition.BEFOREEND);
renderElement(main, new MenuView(filters).getElement(), RenderPosition.BEFOREEND);
renderElement(main, new SortView().getElement, RenderPosition.BEFOREEND);

const filmBoardElement = new FilmListView();
renderElement(main, filmBoardElement.getElement(), RenderPosition.BEFOREEND);

const cardContainerElement = filmBoardElement.getElement().querySelector('.films-list__container');

// for (let i = 0; i < Math.min(films.length, CARD_COUNT); i++) {
//   renderFilm(cardContainerElement, films[i]);
// }

for (let i = 0; i < Math.min(films.length, CARD_COUNT); i++) {
  renderFilm(cardContainerElement, films[i]);
}

if (films.length < CARD_COUNT) {
  let renderedFilmCount = CARD_COUNT;
  const showMore = new ShowMoreView();

  renderElement(filmBoardElement.getElement(), showMore.getElement(), RenderPosition.BEFOREEND);

  showMore.getElement().addEventListener('click', (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + CARD_COUNT)
      .foreach((film) => renderFilm(cardContainerElement, film));

    renderedFilmCount += CARD_COUNT;
    if (renderedFilmCount >= films.length) {
      showMore.getElement().remove();
      showMore.removeElement();
    }
  });
}

const topRated = new TopRatedView();

renderElement(filmBoardElement.getElement(), topRated.getElement, RenderPosition.BEFOREEND);

const topRatedFilmsContainer = topRated.getElement().querySelector('.top-rated');

export const topRatedFilms = (films) => {
  return films.slice().sort((a, b) => b.rating - a.rating);
};

export const mostCommentsFilms = (films) => {
  return films.slice().sort((a,b) => b.comments.length - a.comments.length);
};

for (let i = 0; i < TOTAL_COUNT; i++) {
  renderElement(topRatedFilmsContainer, new FilmCardView(topRatedFilms(films)[i]).getElement(), RenderPosition.BEFOREEND);
}

const mostCommented = new MostCommentedView();

renderElement(filmBoardElement.getElement(), mostCommented.getElement(), RenderPosition.BEFOREEND);

const mostCommentedFilmsContainer = mostCommented.getElement().querySelector('.most-commented');

for (let i = 0; i < TOTAL_COUNT; i++) {
  renderElement(mostCommentedFilmsContainer, new FilmCardView(mostCommentsFilms(films)[i].getElement(), RenderPosition.BEFOREEND));
}

renderElement(footer, new TotalFilmsCountView.getElement(), RenderPosition.BEFOREEND);


// const films = new Array(FILM_COUNT).fill.map(createFilm);
// const films = new Array(FILM_COUNT).fill.map(createFilm);
// const filters = createFilter(films);
// // createFilter


// const renderFilm = (filmList, film) => {
//     const filmComponent = new FilmCardView(film);
// }
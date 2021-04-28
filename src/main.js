import RankUserView from './view/rank-user.js';
import MenuNavView from './view/menu-nav.js';
import SortView from './view/sort.js';
import FilmPopupView from './view/popup.js';
import FilmListView from './view/film-list.js';
import FilmCardView from './view/film-card.js';
import ShowMoreButtonView from './view/show-more.js';
import TopRatedView from './view/top-rated.js';
import MostCommentedView from './view/most-commented.js';
import AmountFilmsView from './view/amount-films.js';
import EmptyListView from './view/empty-list.js';
import FilmContainerView from './view/film-container.js';
import CommentBlockView from './view/comment-add.js';
import { createFilmCard } from './mock/film.js';
import { createComment } from './mock/comment.js';
import {generateFilter} from './mock/filter.js';
import { renderElement, RenderPosition } from './utils/render.js';

const mostCommentsFilms = (films) => {
  return films.slice().sort((a,b) => b.comments.length - a.comments.length);
};

const topRatedFilms = (films) => {
  return films.slice().sort((a, b) => b.rating - a.rating);
};
const TOP_MOVIES = 2;
const FILM_STEP_COUNT = 5;
const FILM_COUNT = 20;
const films = new Array(FILM_COUNT).fill().map(createFilmCard);
const filters = generateFilter(films);


const renderElementBoard = (filmListContainer, filmsContainer) => {
  const filmList = new FilmContainerView();
  renderElement(main, new SortView().getElement(), RenderPosition.BEFOREEND);
  renderElement(main, filmList.getElement(), RenderPosition.BEFOREEND);

  if (filmsContainer.length === 0) {
    renderElement(main, new EmptyListView().getElement(), RenderPosition.BEFOREEND);
  } else {

    const filmsListComponent = new FilmListView();

    renderElement(filmList.getElement(), filmsListComponent.getElement(), RenderPosition.BEFOREEND);

    const cardContainerElement = filmsListComponent.getElement().querySelector('.films-list__container');

    filmsContainer
      .slice(0, Math.min(films.length, FILM_STEP_COUNT))
      .forEach((boardFilm) => renderElementFilm(cardContainerElement, boardFilm));

    if (films.length > FILM_STEP_COUNT) {
      let renderElementedFilmCount = FILM_STEP_COUNT;
      const showMoreButtonComponent = new ShowMoreButtonView();

      renderElement(filmList.getElement(), showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

      showMoreButtonComponent.getElement().addEventListener('click', (evt) => {
        evt.preventDefault();
        films
          .slice(renderElementedFilmCount, renderElementedFilmCount + FILM_STEP_COUNT)
          .forEach((boardFilm) => renderElementFilm(cardContainerElement, boardFilm));

        renderElementedFilmCount += FILM_STEP_COUNT;

        if (renderElementedFilmCount >= films.length) {
          showMoreButtonComponent.getElement().remove();
          showMoreButtonComponent.removeElement();
        }
      });
    }

    const topRatedContainer = new TopRatedView();

    renderElement(filmList.getElement(), topRatedContainer.getElement(), RenderPosition.BEFOREEND);

    const topRatedFilmsContainer = topRatedContainer.getElement().querySelector('.top-rated');

    for (let i = 0; i < TOP_MOVIES; i++) {
      renderElementFilm(topRatedFilmsContainer, topRatedFilms(films)[i]);
    }

    const mostCommentedContainer = new MostCommentedView();

    renderElement(filmList.getElement(), mostCommentedContainer.getElement(), RenderPosition.BEFOREEND);

    const mostCommentedFilmsContainer = mostCommentedContainer.getElement().querySelector('.most-commented');

    for (let i = 0; i < TOP_MOVIES; i++) {
      renderElementFilm(mostCommentedFilmsContainer, mostCommentsFilms(films)[i]);
    }
  }
};

const renderElementFilm = (filmListElement, film) => {
  const filmComponent = new FilmCardView(film);

  const renderElementPopup = () => {
    const filmPopupComponent = new FilmPopupView(film);
    renderElement(body, filmPopupComponent.getElement(), RenderPosition.BEFOREEND);
    body.classList.add('hide-overflow');

    filmPopupComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
      filmPopupComponent.getElement().remove();
      body.classList.remove('hide-overflow');
    });

    const onEscKeydown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        filmPopupComponent.getElement().remove();
        body.classList.remove('hide-overflow');
      }
    };
    document.addEventListener('keydown', onEscKeydown);
  };

  filmComponent.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
    renderElementPopup();
  });

  filmComponent.getElement().querySelector('.film-card__title').addEventListener('click', () => {
    renderElementPopup();
  });

  filmComponent.getElement().querySelector('.film-card__comments').addEventListener('click', () => {
    renderElementPopup();
  });

  renderElement(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

const body = document.querySelector('body');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer__statistics');


renderElement(header, new RankUserView(filters).getElement(), RenderPosition.BEFOREEND);
renderElement(main, new MenuNavView(filters).getElement(), RenderPosition.BEFOREEND);

renderElementBoard(main, films);

renderElement(footer, new AmountFilmsView().getElement(), RenderPosition.BEFOREEND);

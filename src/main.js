import { createNavigationTemplate } from './view/menu.js';
// import * as FilmCardView from './view/film-card.js';
import { createCommentTemplate, createPopupCommentTemplate, createPopupTemplate, createCommentBlock } from './view/popup.js';
import { createShowMoreTemplate } from './view/show-more.js';
import { createStatisticTemplate } from './view/user-rank.js';
import { createFilmListTemplate } from './view/film-list.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { render, renderElement, RenderPosition } from './utils/render.js';
import { CARD_COUNT, COMMENT_COUNT } from './mock/const.js';
import { similarFilmCard } from './mock/film.js';
import { similarComment } from './mock/comment.js';
import { similarFilter } from './mock/filter-data.js';
import FilmCardView from './view/film-card.js';


const siteMainElement = document.querySelector('.main');

render(siteMainElement, createNavigationTemplate(similarFilter[0]));
// renderElement(siteMainElement, new SiteMenuView(similarFilter[0]).getElement(), RenderPosition.BEFOREEND);

render ( siteMainElement, createStatisticTemplate(similarFilmCard[0]));
render ( siteMainElement, createFilmListTemplate());

const filmList = document.querySelector('.films-list__container');
for (let index = 0; index < CARD_COUNT; index++) {
  // render(filmList, createFilmCardTemplate(similarFilmCard[index]));
  // renderElement(filmList, new SiteMenuView().getElement(), createFilmCardTemplate(similarFilmCard[index]), RenderPosition.BEFOREEND);
  renderElement(filmList, new FilmCardView().getElement(), createFilmCardTemplate(similarFilmCard[index]), RenderPosition.BEFOREEND);

}

render(siteMainElement, createShowMoreTemplate());
render(siteMainElement, createPopupTemplate(similarFilmCard[0]));
const sitePopupElement = document.querySelector('.film-details');
render(sitePopupElement, createCommentBlock(similarComment[0]));
const siteCommentElement = document.querySelector('.film-details__comments-wrap');
for (let index = 0; index < COMMENT_COUNT; index++) {
  render(siteCommentElement, createPopupCommentTemplate(similarComment[0]));
}

render(siteCommentElement, createCommentTemplate());

const showMore = siteMainElement.querySelector('.films-list__show-more');
const filmDetails = siteMainElement.querySelector('.film-details');
const closeDetails = siteMainElement.querySelector('.film-details__close-btn');
closeDetails.addEventListener('click', (evt) => {
  evt.preventDefault();
  filmDetails.remove();
});

siteMainElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  filmDetails.remove();
});

let count = 5;
showMore.addEventListener('click', (evt) => {
  evt.preventDefault();
  const totalCount = count + CARD_COUNT;
  for (let index = count; index < totalCount; index++) {
    render(filmList, createFilmCardTemplate(similarFilmCard[index]));
    if (index >= similarFilmCard.length - 1 ) {
      break;
    }
    count++;
  }
  const films = siteMainElement.querySelectorAll('.film-card');
  if (films.length >= similarFilmCard.length) {
    showMore.remove();
  }
});

import { createNavigationTemplate } from './view/menu.js';
import { createPopupTemplate } from './view/popup.js';
import { createShowMoreTemplate } from './view/show-more.js';
import { createStatisticTemplate } from './view/user-rank.js';
import { createFilmListTemplate, createFilmCardTemplate } from './view/film-card.js';
const CARD_COUNT = 5;
const siteMainElement = document.querySelector('.main');

const render = (container, template, place = 'beforeend') => {
  place = 'beforeend';
  container.insertAdjacentHTML(place, template);
};
render ( siteMainElement, createNavigationTemplate());
render ( siteMainElement, createStatisticTemplate());
render ( siteMainElement, createFilmListTemplate());

const filmList = document.querySelector('.films-list__container');
for (let index = 0; index < CARD_COUNT; index++) {
  render( filmList, createFilmCardTemplate());
}

render ( siteMainElement, createShowMoreTemplate());
render ( siteMainElement, createPopupTemplate());


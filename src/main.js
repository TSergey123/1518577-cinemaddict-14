import { createNavigationTemplate } from './view/menu.js';
import { createCommentTemplate, createPopupCommentTemplate, createPopupTemplate, createCommentBlock } from './view/popup.js';
import { createShowMoreTemplate } from './view/show-more.js';
import { createStatisticTemplate } from './view/user-rank.js';
import { createFilmListTemplate, createFilmCardTemplate } from './view/film-card.js';
import { render } from './utils/render.js';
import { CARD_COUNT, COMMENT_COUNT } from './mock/const.js';
import { similarFilmCard } from './mock/film.js';
import { similarComment } from './mock/comment.js';

const siteMainElement = document.querySelector('.main');

render ( siteMainElement, createNavigationTemplate(similarFilmCard[0]));
render ( siteMainElement, createStatisticTemplate());
render ( siteMainElement, createFilmListTemplate());

const filmList = document.querySelector('.films-list__container');
for (let index = 0; index < CARD_COUNT; index++) {
  render( filmList, createFilmCardTemplate(similarFilmCard[index]));
}

render(siteMainElement, createShowMoreTemplate());
// render(siteMainElement, createPopupTemplate(similarFilmCard[0]));
const sitePopupElement = document.querySelector('.film-details');
render(sitePopupElement, createCommentBlock(similarComment[0]));
const siteCommentElement = document.querySelector('.film-details__comments-wrap');
for (let index = 0; index < COMMENT_COUNT; index++) {
  render(siteCommentElement, createPopupCommentTemplate(similarComment[0]));
}

render(siteCommentElement, createCommentTemplate());

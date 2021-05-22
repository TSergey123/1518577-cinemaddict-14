import RankUserView from './view/rank-user.js';
import MenuNavView from './view/menu-nav.js';
import AmountFilmsView from './view/amount-films.js';
import { createFilmCard } from './mock/film.js';
import { generateFilter } from './mock/filter.js';
import {render, RenderPosition } from './utils/render.js';
import BoardPresenter from './presenter/board';

const FILM_COUNT = 20;
const films = new Array(FILM_COUNT).fill().map(createFilmCard);
const filters = generateFilter(films);

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const footerStatisticsElement = document.querySelector('.footer__statistics');

const boardPresenter = new BoardPresenter(siteBodyElement, siteMainElement);


render(siteHeaderElement, new RankUserView(filters), RenderPosition.BEFOREEND);
render(siteMainElement, new MenuNavView(filters), RenderPosition.BEFOREEND);
boardPresenter.init(films);

render(footerStatisticsElement, new AmountFilmsView(), RenderPosition.BEFOREEND);

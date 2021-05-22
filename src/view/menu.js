import AbstractView from './abstract.js';

const createMenuTemplate = (filter) => {
  const {
    watchlist,
    favourite,
    history,
  } = filter;

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favourite}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>`;
};

export default class MenuView extends AbstractView{
  constructor(data) {
    super();
    this._data = data;
  }
  getTemplate() {
    return createMenuTemplate(this._data);
  }
}

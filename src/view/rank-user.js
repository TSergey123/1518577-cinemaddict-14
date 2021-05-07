import AbstractView from './abstract.js';

const createRank = (filter) => {
  const history = filter.find((item) => item.name === 'History');
  const filmsCount = history.count;
  switch (true) {
    case filmsCount === 0:
      return '';
    case filmsCount >= 0 && filmsCount <= 10:
      return '<p class="profile__rating">Novice</p>';
    case filmsCount >= 10 && filmsCount <= 20:
      return '<p class="profile__rating">Fun</p>';
    case filmsCount > 20:
      return '<p class="profile__rating">Movie Buff</p>';
  }
};

const createRankUserTemplate = (filter) => {
  return `<section class="header__profile profile">
       ${createRank(filter)}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class RankUser extends AbstractView{
  constructor(filters) {
    super();
    this._filters = filters;
    this._element = null;
  }
  getTemplate() {
    return createRankUserTemplate(this._filters);
  }
}
import AbstractView from './abstract.js';

const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
  </ul>`;
};

export default class SortView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createSortTemplate(this._data);
  }
}

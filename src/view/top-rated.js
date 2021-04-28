import { createElement } from '../utils/render.js';

const createTopRatedTemplate = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container top-rated">
      </div>
    </section>`;
};

export default class TopRatedView {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createTopRatedTemplate(this._data);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}

import { createElement } from '../utils/render.js';

const createMostCommentedTemplate = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container most-commented">
      </div>
    </section>`;
};

export default class MostCommentedView {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createMostCommentedTemplate(this._data);
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

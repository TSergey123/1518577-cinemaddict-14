import { createElement } from '../utils/render.js';

const createShowMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more
  </button>`;
};

export default class ShowMoreView {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createShowMoreTemplate(this._data);
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

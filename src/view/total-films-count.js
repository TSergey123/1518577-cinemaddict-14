import { createElement } from '../utils/render.js';


const createTotalFilmsCountTemplate = (text = '130 291 movies inside') => {
  return `<p>${text}</p>`;
};

export default class TotalFilmsCountView {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createTotalFilmsCountTemplate(this._data);
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

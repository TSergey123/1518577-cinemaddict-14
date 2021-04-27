import {createElement} from '../utils/render.js';

const createFilmContainerTemplate = () => {
  return '<section class="films"></section>';
};

export default class FilmContainerView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this.element = null;
  }
}

import AbstractView from './abstract.js';

const createTotalFilmsCountTemplate = (text = '130 291 movies inside') => {
  return `<p>${text}</p>`;
};

export default class TotalFilmsCountView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createTotalFilmsCountTemplate(this._data);
  }
}

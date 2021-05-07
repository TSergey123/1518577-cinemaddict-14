import AbstractView from './abstract.js';

const createShowMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more
  </button>`;
};

export default class ShowMoreView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createShowMoreTemplate(this._data);
  }
}

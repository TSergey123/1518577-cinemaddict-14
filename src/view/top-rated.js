import AbstractView from './abstract.js';

const createTopRatedTemplate = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container top-rated">
      </div>
    </section>`;
};

export default class TopRatedView extends AbstractView{
  constructor(data) {
    super();
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createTopRatedTemplate(this._data);
  }
}

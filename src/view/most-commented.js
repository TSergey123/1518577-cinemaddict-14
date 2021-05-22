import AbstractView from './abstract.js';


const createMostCommentedTemplate = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container most-commented">
      </div>
    </section>`;
};

export default class MostCommentedView extends AbstractView{
  constructor(data) {
    super();
    this._data = data;
  }
  getTemplate() {
    return createMostCommentedTemplate(this._data);
  }
}

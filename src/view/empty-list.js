import AbstractView from './abstract.js';

export const createEmptyListTemplate = () => {
  return ` <section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`;
};

export default class EmptyListView extends AbstractView {
  getTemplate() {
    return createEmptyListTemplate(this._data);
  }
}

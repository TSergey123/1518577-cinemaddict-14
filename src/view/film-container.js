import AbstractView from './abstract.js';


const createFilmContainerTemplate = () => {
  return '<section class="films"></section>';
};

export default class FilmContainerView extends AbstractView {
  getTemplate() {
    return createFilmContainerTemplate();
  }
}

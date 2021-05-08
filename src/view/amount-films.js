import AbstractView from './abstract.js';

const createAmountFilmsTemplate = (text = '130 291 movies inside') => {
  return `<p>${text}</p>`;
};

export default class AmountFilms extends AbstractView {
  getTemplate() {
    return createAmountFilmsTemplate();
  }
}

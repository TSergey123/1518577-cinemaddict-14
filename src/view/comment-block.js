import { createElement } from '../utils/render.js';

const createCommentBlock = (commentData) => {
  const {
    commentCount,
  } = commentData;

  return `<div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>`;
};

export default class CommentBlockView {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  getTemplate() {
    return createCommentBlock(this._data);
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

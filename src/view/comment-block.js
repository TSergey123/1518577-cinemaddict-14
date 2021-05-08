import AbstractView from './abstract.js';

const createCommentBlock = (commentData) => {
  const {
    commentCount,
  } = commentData;

  return `<div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>`;
};

export default class CommentBlockView extends AbstractView {
  getTemplate() {
    return createCommentBlock(this._data);
  }
}

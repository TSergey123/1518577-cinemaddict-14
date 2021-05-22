import AbstractView from './abstract.js';


export const createPopupCommentTemplate = (commentData) => {
  const {
    id,
    emotion,
    emotionTitle,
    text,
    author,
    date,
  } = commentData;
  return `
          <ul class="film-details__comments-list">
            <li class="film-details__comment data-id=${id}">
              <span class="film-details__comment-emoji">
                <img src="${emotion}" width="55" height="55" alt="${emotionTitle}">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>`;
};

export default class PopUpCommentView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }
  getTemplate() {
    return createPopupCommentTemplate(this._data);
  }
}

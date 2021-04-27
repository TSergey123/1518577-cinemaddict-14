// import { createFilmCardTemplate } from './view/film-card.js';
// import { render, renderElement, RenderPosition } from './utils/render.js';
// import { CARD_COUNT, COMMENT_COUNT, film, TOTAL_COUNT } from './mock/const.js';
// import { similarFilmCard } from './mock/film.js';
// import { similarComment } from './mock/comment.js';
// import { similarFilter } from './mock/filter-data.js';
// import { createPopupCommentTemplate } from './view/popup-comment.js';
// import FilmCardView from './view/film-card.js';
// import MenuView from './view/menu.js';
// import UserRankiew from './view/user-rank.js';
// import FilmListView from './view/film-list.js';
// import ShowMoreView from './view/show-more.js';
// import PopUpView from './view/popup.js';
// import CommentBlockView from './view/comment-block.js';
// import PopUpCommentView from './view/popup-comment.js';
// import CommentView from './view/comment.js';
// import EmptyListView from './view/empty-list.js';
// import { createEmptyListTemplate } from './view/empty-list.js';

// const siteMainElement = document.querySelector('.main');

// const menuData = new MenuView(similarFilter[0]);
// renderElement(siteMainElement, menuData.getElement(), RenderPosition.BEFOREEND);

// const userRankData = new UserRankiew(similarFilmCard[0]);
// renderElement(siteMainElement, userRankData.getElement(), RenderPosition.BEFOREEND);

// // render ( siteMainElement, createFilmListTemplate());
// const filmListData = new FilmListView();
// renderElement(siteMainElement, filmListData.getElement(), RenderPosition.BEFOREEND);

// const filmList = document.querySelector('.films-list__container');

// if (TOTAL_COUNT === 0) {
//     render ( filmList, createEmptyListTemplate());
//     // const emptyListData = new EmptyListView();
//     // renderElement(filmList, emptyListData.getElement(), RenderPosition.BEFOREEND);
// }

// for (let index = 0; index < CARD_COUNT; index++) {
//   render ( filmList, createFilmCardTemplate(similarFilmCard[index]));
//   // const filmData = new FilmCardView(similarFilmCard[index]);
//   // renderElement(filmList, filmData.getElement(), RenderPosition.BEFOREEND);
// }

// const showMoreData = new ShowMoreView();
// renderElement(siteMainElement, showMoreData.getElement(), RenderPosition.BEFOREEND);

// // renderElement(siteMainElement, popUpData.getElement(), RenderPosition.BEFOREEND);
// const filmCard = siteMainElement.querySelector('.film-card');
// filmCard.addEventListener('click', (evt) => {
//   for (let index = 0; index < TOTAL_COUNT; index++) {
//     // const popUpData = new PopUpView(similarFilmCard[index]);
//     render(siteMainElement, createFilmCardTemplate(similarFilmCard[index]));

//     // renderElement(siteMainElement, popUpData.getElement(), RenderPosition.BEFOREEND);
//   }
// });


// const sitePopupElement = document.querySelector('.film-details');

// const commentBlockData = new CommentBlockView(similarComment[0]);
// // renderElement(sitePopupElement, commentBlockData.getElement(), RenderPosition.BEFOREEND);
// render(sitePopupElement, createPopupCommentTemplate(similarComment[0]);


// const siteCommentElement = document.querySelector('.film-details__comments-wrap');
// for (let index = 0; index < COMMENT_COUNT; index++) {
//   render(siteCommentElement, createPopupCommentTemplate(similarComment[0]));
//   // const popUpCommentData = new PopUpCommentView(similarComment[0]);
//   // renderElement(siteCommentElement, popUpCommentData.getElement(), RenderPosition.BEFOREEND);
// }
// const commentData = new CommentView();
// renderElement(siteCommentElement, commentData.getElement(), RenderPosition.BEFOREEND);


// const showMore = siteMainElement.querySelector('.films-list__show-more');
// const filmDetails = siteMainElement.querySelector('.film-details');
// const closeDetails = siteMainElement.querySelector('.film-details__close-btn');
// closeDetails.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   filmDetails.remove();
// });

// document.body.addEventListener('keypress', (evt) => {
//   if (evt.key === 'Escape' || evt.key === 'Esc') {
//     filmDetails.remove();
//   }
// });


// // const buttonEscHandler = (evt) => {
// //   if (evt.key === 'Escape' || evt.key === 'Esc') {
// //     filmDetails.remove();
// //   }
// // };
// // buttonEscHandler();
// // почему не работает?
// // TypeError: undefined is not an object(evaluating 'evt.key')

// // siteMainElement.addEventListener('click', (evt) => {
// //   evt.preventDefault();
// //   filmDetails.remove();
// // });
// //как сделать?

// filmDetails.addEventListener('click', (evt) => {
//   if (evt.target != filmDetails) {
//     filmDetails.remove();
//   }
// });


// let count = 5;
// showMore.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   const totalCount = count + CARD_COUNT;
//   for (let index = count; index < totalCount; index++) {
//     // render(filmList, createFilmCardTemplate(similarFilmCard[index]));
//     const filmData = new FilmCardView(similarFilmCard[index]);
//     renderElement(filmList, filmData.getElement(), RenderPosition.BEFOREEND);

//     if (index >= similarFilmCard.length - 1 ) {
//       break;
//     }
//     count++;
//   }
//   const films = siteMainElement.querySelectorAll('.film-card');
//   if (films.length >= similarFilmCard.length) {
//     showMore.remove();
//   }
// });

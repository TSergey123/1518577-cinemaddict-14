import { similarFilmCard } from '../mock/film.js';

export const getWatchListFilms = similarFilmCard.filter((it) => {
  return it.isWatchlist === true;
});

export const getHistoryFilms = similarFilmCard.filter((it) => {
  return it.isHistory === true;
});

export const getFavouriteFilms = similarFilmCard.filter((it) => {
  return it.isFavorite === true;
});

import {getFavouriteFilms, getHistoryFilms, getWatchListFilms } from '../utils/filter.js';
import { TOTAL_COUNT } from '../mock/const.js';
const createFilter = () => {
  return {
    watchlist: getWatchListFilms.length,
    history: getHistoryFilms.length,
    favourite: getFavouriteFilms.length,
  };
};

export const similarFilter = new Array(TOTAL_COUNT).fill(null).map(() => createFilter());

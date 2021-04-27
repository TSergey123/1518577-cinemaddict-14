// import {getFavouriteFilms, getHistoryFilms, getWatchListFilms } from '../utils/filter.js';
// import { TOTAL_COUNT } from '../mock/const.js';

const filterData = {
  WatchList: (films) => films.filter((film) => film.isWatchList).length,
  History: (films) => films.filter((film) => film.isWatched).length,
  Favorites: (films) => films.filter((film) => film.isFavorite).length,
};

export const createFilter = (films) => {
  return Object.entries(filterData).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};

// const createFilter = () => {
//   return {
//     watchlist: getWatchListFilms.length,
//     history: getHistoryFilms.length,
//     favourite: getFavouriteFilms.length,
//   };
// };

// export const similarFilter = new Array(TOTAL_COUNT).fill(null).map(() => createFilter());

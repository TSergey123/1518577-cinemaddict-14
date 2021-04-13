export const createNavigationTemplate = (film) => {
  // Так?
  const {
    whatchlistCount,
    historyCount,
    favoriteCount } = film;


  // const watchlistCount = film.reduce((sum, {isWatchlist}) => sum + isWatchlist, 0);

  // или так?
  // const filterItemsTemplate = film
  //   .map((filter, index) => createFilterItemTemplate(filter, index === 0))
  //   .join('');

  //Скорее всего так, но я не знаю(((
  //export const isTaskRepeating = (repeating) => {
  //    return Object.values(repeating).some(Boolean);
  //  };


  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${whatchlistCount}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historyCount}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteCount}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>`;
};

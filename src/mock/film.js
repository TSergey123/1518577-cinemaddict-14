import { getRandomArrayElement, getRandomArrayLength } from "../utils/random.js";
import { film } from './const.js';
import { COMMENT_COUNT, CARD_COUNT } from './const.js';
export const createFilmCard = (id) => {
  return {
    id,
    title: getRandomArrayElement(film.TITLES),
    alternativeTitle: getRandomArrayElement(film.ALTERNATIVE_TITLES),
    totalRating: film.RATING,
    poster: getRandomArrayElement(film.POSTERS),
    ageRating: film.AGE_RATING,
    director: getRandomArrayElement(film.DIRECTORS),
    actor: getRandomArrayLength(film.ACTORS, 3),
    writer: getRandomArrayElement(film.WRITERS),
    date: film.RELEASE,
    releaseCountry: getRandomArrayElement(film.COUNTRYS),
    runtime: film.RUNTIME,
    release: film.RELEASE,
    genre: getRandomArrayElement(film.GENRES),
    description: film.DESCRIPTION,
    descriptionPreview: film.DESCRIPTION_PREVIEW,
    duration: film.DURATION,
    commentCount: COMMENT_COUNT,
    isWatchlist: film.WHATCHLIST,
    isWatched: film.WHATCHED,
    watchingDate: film.WHATCH_DATE,
    isFavorite: film.FAVOURITE,
  };
};

export const similarFilmCard = new Array(CARD_COUNT).fill(null).map(() => createFilmCard());

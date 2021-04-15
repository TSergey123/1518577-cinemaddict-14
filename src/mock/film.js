import { getRandomArrayElement, getRandomArrayLength } from '../utils/random.js';
import { film } from './const.js';
import { COMMENT_COUNT, TOTAL_COUNT} from './const.js';

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
    watchingDate: film.WHATCH_DATE,
    totalWatched: film.TOTAL_WATCHED,
    totalDurationMinutes: film.TOTAL_DURATION_MINUTES,
    totalDurationHours: film.TOTAL_DURATION_HOURS,
    topGenre: getRandomArrayElement(film.GENRES),
    isWatchlist: film.WHATCHLIST,
    isHistory: film.HISTORY,
    isFavourite: film.FAVOURITE,
  };
};

export const similarFilmCard = new Array(TOTAL_COUNT).fill(null).map(() => createFilmCard());

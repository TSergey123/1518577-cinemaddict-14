import { getRandomArrayElement, getRandomArrayLength, getRandomInteger } from '../utils/random.js';
import { generateComment } from './comment.js';
import { COMMENT_COUNT, TOTAL_COUNT, CARD_COUNT, film, comment } from './const.js';

export const createFilmCard = (id) => {
  const commentCount = getRandomInteger(0, CARD_COUNT);
  const comments = new Array(commentCount).fill().map(generateComment);
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
    // isWatchlist: film.WHATCHLIST,
    // isHistory: film.HISTORY,
    // isFavourite: film.FAVOURITE,
    comments: comments,
    isWatchList: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    author:getRandomArrayElement(comment.AUTHOR),
    emotion: getRandomArrayElement(comment.EMOJI),
    emotionTitle: getRandomArrayElement(comment.EMOJI__TITLE),
    text: getRandomArrayElement(comment.TEXT),
  };
};

export const similarFilmCard = new Array(TOTAL_COUNT).fill(null).map(() => createFilmCard());

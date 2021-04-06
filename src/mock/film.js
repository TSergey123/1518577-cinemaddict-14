import { getRandomArrayElement } from "../utils/random.js";
import { CARD_NUMBER, film } from './const.js';

const createFilmCard = (id) => {
    return {
        id,
        title: getRandomArrayElement(film.TITLES),
        alternative_title: getRandomArrayElement(film.TITLES),
        total_rating: film.RATING,
        poster: '/public/images/posters/' + getRandomArrayElement(film.POSTERS) + '.png',
        age_rating: film.AGE_RATING,
        director: getRandomArrayElement(film.DIRECTORS),
        actors: getRandomArrayElement(film.ACTORS),
        date: film.RELEASE,
        release_country: film.COUNTRY,
        runtime: film.DURATION,
        release: film.RELEASE,
        genre: film.GENRES,
        description: film.DESCRIPTION,
        duration: film.DURATION,
        watchlist: film.WHATCHLIST,
        already_watched: film.WHATCHED,
        watching_date: film.WHATCH_DATE,
        favorite: film.FAVOURITE
    }
};

const similarFilmCard = new Array(CARD_NUMBER).fill(null).map(() => createFilmCard());

import { getRandomArrayElement, getRandomDate, getRandomFloat, getRandomInteger, getRandomIntegerRange, getSplitedText } from '../utils/random.js';

const filmDateRange = getRandomDate(new Date(1990, 0, 1), new Date());
const filmDate = filmDateRange.getFullYear() + '/'
    + ('0' + (filmDateRange.getMonth() + 1)).slice(-2)
    + '/' + ('0' + filmDateRange.getDate()).slice(-2)
    + ' '
    + ('0' + filmDateRange.getHours()).slice(-2)
    + ':' + ('0' + filmDateRange.getMinutes()).slice(-2);

const commentDateRange  = getRandomDate(new Date(2020, 0, 1), new Date());
const commentDate = commentDateRange.getFullYear() + '/'
    + ('0' + (commentDateRange.getMonth() + 1)).slice(-2)
    + '/' + ('0' + commentDateRange.getDate()).slice(-2)
    + ' '
    + ('0' + commentDateRange.getHours()).slice(-2)
    + ':' + ('0' + commentDateRange.getMinutes()).slice(-2);

const DESCRIPTION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus']
const splitedDescription = getSplitedText(DESCRIPTION);

const film = {
    TITLES = [
        'made-for-each-other',
        'popeye-meets-sinbad',
        'santa-claus-conquers-the-martians',
        'the-dance-of-life',
        'the-great-flamarion',
        'the-man-with-the-golden-arm'
    ],

    ALTERNATIVE_TITLES = [
        'made-for-each-other',
        'popeye-meets-sinbad',
        'santa-claus-conquers-the-martians',
        'the-dance-of-life',
        'the-great-flamarion',
        'the-man-with-the-golden-arm'
    ],

    POSTERS = [
        'made-for-each-other',
        'popeye-meets-sinbad',
        'santa-claus-conquers-the-martians',
        'the-dance-of-life',
        'the-great-flamarion',
        'the-man-with-the-golden-arm'
    ],

    GENRES = [ 
        'genre1',
        'genre2',
        'genre3',
        'genre4',
        'genre5',
        'genre6'
    ],

    WRITERS = [
        'writer1',
        'writer2',
        'writer3',
        'writer4',
        'writer5',
        'writer6'
    ],

    ACTORS = [
        'actor1',
        'actor2',
        'actor3',
        'actor4',
        'actor5',
        'actor6'
    ],

    DIRECTORS = [
        'director1',
        'director2',
        'director3',
        'director4',
        'director5',
        'director6'
    ],

    COUNTRYS = [
        'country1',
        'country2',
        'country3',
        'country4',
        'country5',
        'country6'
    ],

    WHATCHLIST: Boolean(getRandomInteger()),
    WHATCED: Boolean(getRandomInteger()),
    FAVOURITE: Boolean(getRandomInteger()),
    WHATCH_DATE = filmDate,
    DESCRIPTION = getRandomArrayElement(splitedDescription),
    RELEASE = filmDate,
    DURATION = getRandomIntegerRange(1, 400),
    RATING = getRandomFloat(1, 10, 1),
    AGE_RATING = getRandomIntegerRange(1, 21),
    
    
};


export const comment = {
    TEXT: [
        'comment1',
        'comment2',
        'comment3'
    ],
    EMOJI: [
        'angry',
        'puke',
        'sleeping',
        'smile'
    ],
    AUTHOR: [
        'author1',
        'author2',
        'author3'
    ],
    DATE: commentDate
};

export const commentIdRange = {
    MIN: 0,
    MAX: 99,
}

export const CARD_NUMBER = 5;
export const COMMENT_NUMBER = 3;


import { getRandomDescription, getRandomFloat, getRandomInteger, getRandomIntegerRange, getRandomArrayElement } from '../utils/random.js';
import moment from 'moment';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus'
const DESCRIPTIONS = description.split('.');

export const CARD_COUNT = 5;
export const COMMENT_COUNT = 3;

const filmDate = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000))).format('DD MMMM YYYY');
const commentDate = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000))).format('YYYY/MM/DD HH:MM');

export const film = {
  TITLES: [
    'made-for-each-other',
    'popeye-meets-sinbad',
    'santa-claus-conquers-the-martians',
    'the-dance-of-life',
    'the-great-flamarion',
    'the-man-with-the-golden-arm',
  ],

  ALTERNATIVE_TITLES: [
    'made-for-each-other',
    'popeye-meets-sinbad',
    'santa-claus-conquers-the-martians',
    'the-dance-of-life',
    'the-great-flamarion',
    'the-man-with-the-golden-arm',
  ],

  POSTERS: [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ],

  GENRES: [ 
    'genre1',
    'genre2',
    'genre3',
    'genre4',
    'genre5',
    'genre6',
  ],

  WRITERS: [
    'writer1',
    'writer2',
    'writer3',
    'writer4',
    'writer5',
    'writer6',
  ],

  ACTORS: [
    'actor1',
    'actor2',
    'actor3',
    'actor4',
    'actor5',
    'actor6',
  ],

  DIRECTORS: [
    'director1',
    'director2',
    'director3',
    'director4',
    'director5',
    'director6',
  ],

  COUNTRYS: [
    'country1',
    'country2',
    'country3',
    'country4',
    'country5',
    'country6',
  ],

  WHATCHLIST: Boolean(getRandomInteger()),
  WHATCED: Boolean(getRandomInteger()),
  FAVOURITE: Boolean(getRandomInteger(0,1)),
  WHATCH_DATE: filmDate,
  DESCRIPTION: getRandomArrayElement(DESCRIPTIONS),
  DESCRIPTION_PREVIEW: getRandomDescription(description),
  RELEASE: filmDate,
  RUNTIME: getRandomIntegerRange(1, 4) + 'h ' + getRandomInteger(1,59) + 'm',
  RATING: getRandomFloat(1, 10, 1),
  AGE_RATING: getRandomIntegerRange(1, 21),
  CARD_COUNT: CARD_COUNT,
  COMMENT_COUNT: COMMENT_COUNT,
  TOTAL_DURATION_HOURS: getRandomIntegerRange(1,200),
  TOTAL_DURATION_MINUTES: getRandomIntegerRange(1,59),
  TOTAL_WATCHED: getRandomIntegerRange(1,100),
};

export const comment = {
  TEXT: [
    'comment1',
    'comment2',
    'comment3',
  ],
  EMOJI: [
    './images/emoji/angry.png',
    './images/emoji/puke.png',
    './images/emoji/sleeping.png',
    './images/emoji/smile.png',
  ],
  EMOJI__TITLE: [
    'angry',
    'puke',
    'sleeping',
    'smile',
  ],
  AUTHOR: [
    'author1',
    'author2',
    'author3',
  ],
  DATE: commentDate,
  COMMENT_COUNT: COMMENT_COUNT,
};

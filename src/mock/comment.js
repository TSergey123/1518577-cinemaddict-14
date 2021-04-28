import { getRandomArrayElement, getRandomInteger } from '../utils/random.js';
import { comment } from '../mock/const.js';
import { COMMENT_COUNT } from './const.js';

const createComment = (id) => {
  return {
    id,
    text: getRandomArrayElement(comment.TEXT),
    emotion: getRandomArrayElement(comment.EMOJI),
    emotionTitle: getRandomArrayElement(comment.EMOJI__TITLE),
    author: getRandomArrayElement(comment.AUTHOR),
    date: comment.DATE,
    commentCount: comment.COMMENT_COUNT,
    commentLength: comment.COMMENT_LENGTH,
  };
};
export const similarComment = new Array(COMMENT_COUNT).fill(null).map(() => createComment());

const generateEmoji = () => {
  const emoji = [
    'smile',
    'sleeping',
    'puke',
    'angry',
  ];

  const randomIndex = getRandomInteger(0, emoji.length - 1);

  return './images/emoji/' + emoji[randomIndex] + '.png';
};

const generateDate = () => {
  const day = getRandomInteger(1, 31);
  return new Date().setDate(day);
};

export const generateComment = () => {
  return {
    text: getRandomArrayElement(comment.TEXT),
    emoji: generateEmoji(),
    author: getRandomArrayElement(comment.AUTHOR),
    date: generateDate(),
  };
};

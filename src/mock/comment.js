import { getRandomArrayElement } from '../utils/random.js';
import { comment, commentLength } from '../mock/const.js';
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
        
    }
};
export const similarComment = new Array(COMMENT_COUNT).fill(null).map(() => createComment());

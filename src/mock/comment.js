import { getRandomArrayElement } from '../utils/random.js';
import { comment, COMMENT_NUMBER } from '../mock/const.js';

const createComment = (id) => {
    return {
        id,
        text: getRandomArrayElement(comment.TEXT),
        emotion: '/public/images/emoji/' + getRandomArrayElement(comment.EMOJI) + '.png',
        author: getRandomArrayElement(comment.AUTHOR),
        date: comment.DATE
    }
};
const similarComment = new Array(COMMENT_NUMBER).fill(null).map(() => createComment());

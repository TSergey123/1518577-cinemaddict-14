// // import dayjs from 'dayjs';
// import { comment } from './const';
// const CARD_NUMBER = 5;

// const TITLES = [
//     'film1',
//     'film2',
//     'film3'
//     ]

// const POSTERS = [
//     'made-for-each-other',
//     'popeye-meets-sinbad',
//     'santa-claus-conquers-the-martians',
//     'the-dance-of-life',
//     'the-great-flamarion',
//     'the-man-with-the-golden-arm'
//     ]

// const COMMENT_TEXT = [
//     'comment1',
//     'comment2',
//     'comment3',
//     'comment4',
//     'comment5',
//     ]

// const COMMENT_AUTHOR = [
//     'AUTHOR1',
//     'AUTHOR2'
//     ]

// const COMMENT_EMOJI = [
//     'angry',
//     'png',
//     'sleeping',
//     'smile',
// ]

// const COMMENT_DATE = [
//     ''
// ]

//     const DESCRIPTIONS = [
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         'Cras aliquet varius magna, non porta ligula feugiat eget.',
//         'Fusce tristique felis at fermentum pharetra.',
//         'Aliquam id orci ut lectus varius viverra.',
//         'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
//         'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
//         'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
//         'Sed sed nisi sed augue convallis suscipit in sed felis.',
//         'Aliquam erat volutpat.',
//         'Nunc fermentum tortor ac porta dapibus.',
//         'In rutrum ac purus sit amet tempus.'
//     ]

// // const date = commentDate !== null
// //   ? dayjs(commentDate).format('YYYY/MM/DD HH:MM')
// //     : '';
  
// //     const generateDate = () => {
// //    const isDate = Boolean(getRandomInteger(0, 1));

// //    if (!isDate) {
// //      return null;
// //    }

// //    const maxDaysGap = 7;
// //    const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

// //    return dayjs().add(daysGap, 'day').toDate();
// //  };

// function randomDate(date1, date2){
//     function getRandomArbitrary(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     var date1 = date1 || '01-01-1970'
//     var date2 = date2 || new Date().toLocaleDateString()
//     date1 = new Date(date1).getTime()
//     date2 = new Date(date2).getTime()
//     if( date1>date2){
//         return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
//     } else{
//         return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  

//     }
// }

// console.log(randomDate('02/13/2013', '01/01/2000'));


// export const createCard = () => {
//     return {
//         title: getRandomArrayElement(TITLES),
//         description: getRandomArrayElement(DESCRIPTIONS),
//         poster: '/public/images/posters/' + getRandomArrayElement(POSTERS) + '.png',
//         comment: {
//             // commentDate,
//             text:getRandomArrayElement(COMMENT_TEXT),
//             emoji: '/public/images/emoji/' + getRandomArrayElement(COMMENT_EMOJI) + '.png',
//         }
//     }
// }

// // console.log(commentDate);

// const similarCard = new Array(CARD_NUMBER).fill(null).map(() => createCard());

// console.log(similarCard);


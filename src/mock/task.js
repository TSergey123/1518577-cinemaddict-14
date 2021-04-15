// const getRandomInteger = (a = 0, b = 1) => {
//     const lower = Math.ceil(Math.min(a, b));
//     const upper = Math.floor(Math.max(a, b));
//     return Math.floor(lower + Math.random() * (upper - lower + 1));
// }

// const generateTitles = () => {
//     const titles = [
//         'film1',
//         'film2',
//         'film3'
//     ]
//   const randomIndex = getRandomInteger(0, titles.length - 1);
// }

// const generatePosters = () => {
//     const posters = [
//         'made-for-each-other',
//         'popeye-meets-sinbad',
//         'santa-claus-conquers-the-martians',
//         'the-dance-of-life',
//         'the-great-flamarion',
//         'the-man-with-the-golden-arm'
//     ]
//   const randomIndex = getRandomInteger(0, posters.length - 1);

// }

// const generateComment = () => {
//     const comments = [
//         'comment1',
//         'comment2',
//         'comment3',
//         'comment4',
//         'comment5',
//     ]
//   const randomIndex = getRandomInteger(0, comments.length - 1);
// }

// const generateDescription = () => {
//     const descriptions = [
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
//   const randomIndex = getRandomInteger(0, descriptions.length - 1);
  
//  return descriptions[randomIndex];
// };

// function getRandomArrayElement(elements){
//   return elements[getRandomInteger(0, elements.length - 1)];
// }

// export const generatePopup = () => {
//     return {
//         title: generateTitles(),
//         description: generateDescription(),
//         comment: generateComment(),
//         poster: '/public/images/posters/' + generatePosters() + '.png',
//     }
// }
// console.log(generatePopup());
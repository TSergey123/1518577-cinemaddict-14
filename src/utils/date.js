// import dayjs from 'dayjs';

// const date = commentDate !== null
//   ? dayjs(commentDate).format('YYYY/MM/DD HH:MM')
//     : '';
  
//     const generateDate = () => {
//    const isDate = Boolean(getRandomInteger(0, 1));

//    if (!isDate) {
//      return null;
//    }

//    const maxDaysGap = 7;
//    const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

//    return dayjs().add(daysGap, 'day').toDate();
//     };

export const date = (date) => {
  return date.getFullYear();
};

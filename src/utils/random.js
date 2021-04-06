export const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
}

export const getRandomIntegerRange = (min, max) => {
  let randInt = min + Math.random() * (max + 1 - min);
  return Math.floor(randInt);
}

export const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}

export const getArrayRandomLength = (arr, min, max) => {
  const arrCopy = arr.slice();
  return arrCopy.splice(getRandomInteger(0, arrCopy.length - 1), getRandomInteger(min, max));
};

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() 
          + Math.random() * (end.getTime() - start.getTime()));
}

export const getRandomFloat = (min, max, commas) => {
  const randFloat = (Math.random() * (max - min) + min).toFixed(commas);
  return randFloat;
}

export const getSplitedText = (text) => {
  return text.split('.');
}

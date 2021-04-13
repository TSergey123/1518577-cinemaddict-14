export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIntegerRange = (min, max) => {
  const randInt = min + Math.random() * (max + 1 - min);
  return Math.floor(randInt);
};

export const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

export const getArrayRandomLength = (arr, min, max) => {
  const arrCopy = arr.slice();
  return arrCopy.splice(getRandomInteger(0, arrCopy.length - 1), getRandomInteger(min, max));
};

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getRandomFloat = (min, max, commas) => {
  const randFloat = (Math.random() * (max - min) + min).toFixed(commas);
  return randFloat;
};

export const getRandomDescription = (text) => {
  const splitedDescription = text.split('.');
  const getDescriptionSentence = getRandomArrayElement(splitedDescription);
  const subDescription = getDescriptionSentence.substr(0, 138);
  if (getDescriptionSentence.length > 140) {
    return subDescription + '...';
  }
  else {
    return getDescriptionSentence;
  }
};

export const getRandomArrayLength = (array, length = array.length) => {
  const newSet = new Set();
  while (newSet.size < length) {
    newSet.add(getRandomArrayElement(array));
  }
  return Array.from(newSet);
};

export const getTrueCount = (booleanValue) => {
  const arr = [];
  arr.push(booleanValue);

  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == true)
      count++;
  }
  return count;
};

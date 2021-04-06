export const render = (container, template, place = 'beforeend') => {
  place = 'beforeend';
  container.insertAdjacentHTML(place, template);
};
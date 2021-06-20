export default function sortingByProps(obj, sortOrder) {
  const heroCardStart = [];
  const heroCardEnd = [];
  heroCardStart.length = sortOrder.length;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (sortOrder.includes(prop)) {
        heroCardStart[sortOrder.indexOf(prop)] = { key: prop, value: obj[prop] };
      }
      else {
        heroCardEnd.push({ key: prop, value: obj[prop] });
      }
    }
  }
  heroCardEnd.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
  });
  const heroCard = [].concat(heroCardStart, heroCardEnd);
  return heroCard;
}

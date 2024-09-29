var evenOccurrence = function(arr) {
  const countMap = new Map();

  for (let item of arr) {
    if (countMap.has(item)) {
      countMap.set(item, countMap.get(item) + 1);
    } else {
      countMap.set(item, 1);
    }
  }

  for (let item of arr) {
    if (countMap.get(item) % 2 === 0) {
      return item;
    }
  }

  return null;
};
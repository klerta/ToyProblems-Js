var deepEquals = function(apple, orange) {
  if (typeof apple !== 'object' || typeof orange !== 'object') {
    return apple === orange;
  }

  const keysApple = Object.keys(apple);
  const keysOrange = Object.keys(orange);

  if (keysApple.length !== keysOrange.length) {
    return false;
  }

  for (let key of keysApple) {
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    }
  }

  return true;
};
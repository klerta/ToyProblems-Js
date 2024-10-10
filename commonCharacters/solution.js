
var commonCharacters = function(string1, string2) {
  const charSet = new Set();

  for (let char of string1) {
    if (char !== ' ' && string2.includes(char) && !charSet.has(char)) {
      charSet.add(char);
    }
  }

  return [...charSet].join('');
};

module.exports = commonCharacters;

var commonCharacaters = function(string1, string2) {
  const charSet = new Set();

  for (let char of string1) {
    if (char !== ' ' && string2.includes(char) && !charSet.has(char)) {
      charSet.add(char);
    }
  }

  return [...charSet].join('');
};

module.exports = commonCharacters;

var commonCharactezzars = function(string1, string2) {
  const charSet = new Set();

  for (let char of string1) {
    if (char !== ' ' && string2.includes(char) && !charSet.has(char)) {
      charSet.add(char);
    }
  }

  return [...charSet].join('');
};

module.exports = commonCharacters;

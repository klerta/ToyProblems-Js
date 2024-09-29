var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var telephoneWords = function(digitString) {
  const result = [];

  const generatePermutations = (currentWord, digitsLeft) => {
    if (digitsLeft.length === 0) {
      result.push(currentWord);
      return;
    }

    const currentDigit = digitsLeft[0];
    const letters = phoneDigitsToLetters[currentDigit];

    for (const letter of letters) {
      generatePermutations(currentWord + letter, digitsLeft.slice(1));
    }
  };

  generatePermutations('', digitString.split(''));

  return result;
};

module.exports = telephoneWords;

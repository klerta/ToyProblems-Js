
const telephoneWords = function(digitString) {
  const phoneDigitsToLetters = {
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

  const result = [];
  const backtrack = (currentWord, currentIndex) => {
    if (currentIndex === digitString.length) {
      result.push(currentWord);
      return;
    }

    const currentDigit = digitString[currentIndex];
    const letters = phoneDigitsToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      backtrack(currentWord + letters[i], currentIndex + 1);
    }
  };

  backtrack('', 0);
  return result;
};

module.exports = telephoneWords;

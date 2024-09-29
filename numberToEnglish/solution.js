Number.prototype.toEnglish = function () {
  const numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  };

  const convertToWords = (num) => {
    if (num === 0) {
      return numbersToWords[0];
    } else if (num <= 20) {
      return numbersToWords[num];
    } else if (num < 100) {
      const tens = Math.floor(num / 10) * 10;
      const remainder = num % 10;
      return numbersToWords[tens] + (remainder > 0 ? '-' + numbersToWords[remainder] : '');
    } else {
      const hundreds = Math.floor(num / 100);
      const remainder = num % 100;
      return (
        numbersToWords[hundreds] +
        ' ' +
        numbersToPlace[100] +
        (remainder > 0 ? ' ' + convertToWords(remainder) : '')
      );
    }
  };

  const num = this.valueOf();

  if (num < 0) {
    return 'negative ' + (-num).toEnglish();
  } else if (num < 1000) {
    return convertToWords(num);
  } else {
    for (const place of Object.keys(numbersToPlace).reverse()) {
      const placeValue = parseInt(place, 10);
      if (num >= placeValue) {
        const left = Math.floor(num / placeValue);
        const right = num % placeValue;
        return (
          convertToWords(left) + ' ' + numbersToPlace[placeValue] + (right > 0 ? ' ' + right.toEnglish() : '')
        );
      }
    }
  }
};

module.exports = Number.prototype.toEnglish;

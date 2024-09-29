
var toFraction = function(number) {
  if (Number.isInteger(number)) {
    return `${number}/1`;
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const decimalString = number.toString();
  const decimalParts = decimalString.split('.');
  const integerPart = parseInt(decimalParts[0], 10);
  const decimalPart = decimalParts[1];

  let numerator = parseInt(decimalPart);
  let denominator = 10 ** decimalPart.length;

  const commonFactor = gcd(numerator, denominator);
  numerator /= commonFactor;
  denominator /= commonFactor;

  numerator += integerPart * denominator;

  return `${numerator}/${denominator}`;
};


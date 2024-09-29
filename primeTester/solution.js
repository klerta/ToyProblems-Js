
const primeTester = function(n) {
  if (typeof n !== 'number' || n < 2 || n % 1 !== 0) {
    // n isn't a number or n is less than 2 or n is not an integer
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

/**
 * Extra credit: Generates a list of all prime numbers in a user-specified range (inclusive).
 *
 * @function primeSieve
 * @param {Number} start - Start of the interval.
 * @param {Number} end - End of the interval.
 * @return {Array<Number>} - Returns an array containing prime numbers in the specified range.
 */
const primeSieve = function(start, end) {
  const sieve = [];
  const primes = [];

  for (let i = 2; i <= end; i++) {
    sieve[i] = true;
  }

  for (let p = 2; p * p <= end; p++) {
    if (sieve[p] === true) {
      for (let i = p * p; i <= end; i += p) {
        sieve[i] = false;
      }
    }
  }

  for (let i = start; i <= end; i++) {
    if (sieve[i] === true) {
      primes.push(i);
    }
  }

  return primes;
};


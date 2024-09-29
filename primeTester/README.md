# Prime Tester and Prime Sieve - Approach

## Prime Tester

1. **Create a function `primeTester` that accepts a number `n` and checks if it's a prime number.**

2. **Check if `n` is a positive integer greater than or equal to 2.**
   - If not, return `false` because numbers less than 2 and non-integers cannot be prime.

3. **Special case: If `n` is 2, return `true` because 2 is a prime number.**

4. **Special case: If `n` is even (except for 2), return `false` because even numbers greater than 2 are not prime.**

5. **Iterate from 3 to the square root of `n` (inclusive) with a step of 2 (to check only odd numbers).**
   - If `n` is divisible by any of these numbers, return `false`.

6. **If `n` passes all the checks, return `true` because it's a prime number.**

## Prime Sieve (Extra Credit)

1. **Create a function `primeSieve` that generates a list of prime numbers in a user-specified range (inclusive).**

2. **Initialize an array `sieve` to keep track of whether numbers are prime or not.**
   - Initialize an empty array `primes` to store prime numbers.

3. **For each number from 2 to the end of the specified range:**
   - Initialize `sieve[i]` as `true` to assume all numbers are prime by default.

4. **Use the Sieve of Eratosthenes algorithm to mark non-prime numbers:**
   - For each prime number `p` (starting from 2) up to the square root of the end value:
     - If `sieve[p]` is `true` (indicating `p` is prime), mark all multiples of `p` as non-prime by setting `sieve[i]` to `false`.

5. **Iterate through the specified range and add prime numbers to the `primes` array if `sieve[i]` is `true`.**

6. **Return the `primes` array containing prime numbers in the specified range.**

7. **The `primeTester` function checks if a number is prime, and the `primeSieve` function generates prime numbers in a range efficiently.**

### Complexity

- `primeTester`:
  - Time Complexity: O(sqrt(N)) - We iterate up to the square root of `n` to check for divisibility.
  - Space Complexity: O(1) - Constant space used for variables.

- `primeSieve`:
  - Time Complexity: O(N*log(log(N))) - The Sieve of Eratosthenes has an efficient time complexity.
  - Space Complexity: O(N) - The `sieve` array stores information about prime and non-prime numbers.

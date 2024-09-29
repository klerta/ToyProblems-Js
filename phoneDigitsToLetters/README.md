# Telephone Words - Approach

1. **Create a function `telephoneWords` that takes a string of up to four digits representing a phone number.**

2. **Define a `phoneDigitsToLetters` object that maps each phone digit to its corresponding letters.**

3. **Initialize an empty array `result` to store the combinations of words that can be formed.**

4. **Implement a backtracking algorithm to generate all possible word combinations:**
   - Start with an empty current word and an initial index of 0.
   - For each digit in the input digitString, get the corresponding letters from `phoneDigitsToLetters`.
   - Use a recursive function (`backtrack`) to explore all possible combinations.
   - When the current index equals the length of the digitString, add the current word to the `result` array.
   - Continue recursively with each letter for the next digit.
   - Backtrack by removing the last added letter to explore other combinations.

5. **Return the `result` array containing all possible words that can be formed with the given digits.**

6. **The `telephoneWords` function efficiently generates all word combinations for a phone number.**

### Complexity

- Time Complexity: O(4^N) - In the worst case, the function explores all possible combinations for each digit.
- Space Complexity: O(N) - The recursive call stack can go up to the length of the input digitString.

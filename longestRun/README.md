# Longest Run of Identical Characters - Approach

1. **Check if the input `string` is empty:**
   - If it is, return `null` since there's no run to find.

2. **Initialize variables to keep track of the longest run:**
   - `maxStart` and `maxEnd` to store the start and end indices of the longest run.
   - `currentStart` and `currentEnd` to store the start and end indices of the current run.

3. **Iterate through the input `string` starting from the second character (`i = 1`):**
   - For each character, compare it with the previous character.
   - If the characters are identical, update `currentEnd` to the current index (`i`).
   - If the current run is longer than the longest run, update `maxStart` and `maxEnd` with the current run's indices.
   - If the characters are not identical, update `currentStart` to the current index (`i`) to start a new run.

4. **Return an array containing the start and end indices of the longest run or `null` if no run is found.**

5. **The `longestRun` function efficiently finds the longest run of identical characters in a string.**

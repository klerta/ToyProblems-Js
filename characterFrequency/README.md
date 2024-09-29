# Character Frequency - Approach

1. **Initialize a `frequencyMap` using a Map to store the frequency of each character in the input string.

2. **Iterate through the input string:**
   - For each character encountered, check if it exists in the `frequencyMap`.
   - If it exists, increment its frequency by 1; otherwise, initialize it with a frequency of 1.

3. **After counting the frequencies, convert the `frequencyMap` into an array of entries.**

4. **Sort the array of entries:**
   - First, sort by frequency in descending order.
   - If frequencies are equal, sort by character in ascending order using the `localeCompare` method.

5. **Return the sorted array of character-frequency pairs.**

6. **The function now returns the characters and their frequencies sorted as specified.**

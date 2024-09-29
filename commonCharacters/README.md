# Common Characters - Approach

1. **Initialize an empty Set `charSet` to store the common characters found in both strings without duplication.

2. **Iterate through the characters of the first input string (`string1`):**
   - For each character, check if it's not a space, exists in the second input string (`string2`), and is not already in `charSet`.
   - If all conditions are met, add the character to `charSet`.

3. **After iterating through `string1`, convert `charSet` to an array and join it to form the final result string containing common characters.

4. **Return the final result string.**

5. **The `commonCharacters` function now efficiently finds common characters in both input strings.**

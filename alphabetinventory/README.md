# Alphabet Inventory - Approach

1. Initialize an empty object to store letter counts.

2. Convert both the alphabet and the text to lowercase for case insensitivity.

3. Iterate through each character in the text string:
   - Check if the character exists in the alphabet.
   - If yes, increment its count in the letter counts object.

4. Initialize an empty array to store formatted results.

5. Iterate through each character in the alphabet:
   - Look up its count in the letter counts object.
   - If the count is greater than 0, format it as `"letter:count"`.
   - Add the formatted result to the results array.

6. Sort the results array lexicographically.

7. Join the sorted results into a single string with commas.

8. Return the final result string.

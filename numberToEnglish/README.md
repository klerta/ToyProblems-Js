# Number to English Words - Approach

1. **Create a Number prototype method called `toEnglish` to extend the Number object.**

2. **Define `numbersToWords` and `numbersToPlace` objects to store mappings of numbers to English words.**

3. **Create a helper function `convertToWords(num)` to convert a given number to its English word representation.**
   - Check if the number is less than or equal to 20, return the corresponding English word.
   - If the number is less than 100, split it into tens and ones, and return the combined English word.
   - If the number is greater than or equal to 100, split it into hundreds and the remainder, and return the combined English word with the "hundred" suffix.

4. **Handle negative numbers separately:**
   - If the number is negative, add "negative" before converting the absolute value.

5. **Check if the number is less than 1000:**
   - If so, directly call the `convertToWords` function to convert it to English words.

6. **If the number is greater than or equal to 1000, iterate through the `numbersToPlace` object to handle larger values:**
   - Find the largest place value (e.g., thousand, million) that is less than or equal to the number.
   - Divide the number into the left and right parts based on the place value and call the `convertToWords` function for each part.
   - Combine the English words with the place value.

7. **The `toEnglish` method efficiently converts a number to its English words representation.**

### Complexity

- Time Complexity: O(n) - The function processes each digit of the input number.
- Space Complexity: O(1) - The function uses fixed-size `numbersToWords` and `numbersToPlace` objects.

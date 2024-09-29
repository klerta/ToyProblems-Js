# Simplified Fraction - Approach

1. **Check if the input `number` is a whole number (integer):**
   - If it is, return the simplified fraction as `${number}/1`.

2. **Create a helper function `gcd(a, b)` to calculate the greatest common divisor (GCD) of two numbers.**

3. **Convert the `number` to a string (`decimalString`) and split it into integer and decimal parts.**
   - For example, for `number = 2.5`, `integerPart = 2` and `decimalPart = '5'`.

4. **Initialize the `numerator` as the integer representation of the decimal part and the `denominator` as 10 raised to the power of the decimal part's length.**
   - For `number = 2.5`, `numerator = 5` and `denominator = 10`.

5. **Calculate the GCD of `numerator` and `denominator` using the `gcd` function.**

6. **Divide both `numerator` and `denominator` by their common factor (GCD) to simplify the fraction.**

7. **Add the integer part multiplied by the denominator to the numerator.**
   - For `number = 2.5`, `numerator = 2 * 10 + 5 = 25`.

8. **Return the simplified fraction as a string in the format `${numerator}/${denominator}`.**
   - For `number = 2.5`, return `'25/10'`.

9. **The `toFraction` function efficiently converts a number to its simplified fraction representation.**

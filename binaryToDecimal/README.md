# Binary to Decimal - Approach

1. **Initialize a variable `decimalNumber` to store the decimal equivalent of the binary number, starting with 0.

2. **Iterate through the binary number from right to left:**
   - For each bit (0 or 1) in the binary number:
     - If the bit is '1', calculate its decimal value using `2 ** j`, where `j` represents the position of the bit from the right.
     - Add the calculated value to `decimalNumber`.

3. **After iterating through the entire binary number, `decimalNumber` will contain the decimal equivalent. Return it as the result.**

4. **The binary-to-decimal conversion is complete, and the function returns the decimal result.**

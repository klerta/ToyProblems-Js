# Make Change - Approach

1. **Define an array `coins` that contains the available coin denominations (in pence).**

2. **Create an array `ways` with a size of `total + 1` and initialize it with zeros.**
   - `ways[i]` will represent the number of ways to make change for the amount `i`.

3. **Set `ways[0]` to 1, as there is one way to make change for zero pence (no coins used).**

4. **Iterate through each coin denomination in the `coins` array:**
   - For each coin, iterate from the coin's value to `total`.

5. **For each iteration, update `ways[i]` by adding the value of `ways[i - coin]`.**
   - This step accounts for the number of ways to make change using the current coin.

6. **After iterating through all denominations and amounts, return `ways[total]`, which represents the total number of ways to make change for the given `total` amount.**

7. **The `makeChange` function calculates the number of different ways to make change efficiently.**

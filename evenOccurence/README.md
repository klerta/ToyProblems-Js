# Even Occurrence - Approach

1. **Initialize an empty Map `countMap` to store the count of occurrences of each item in the input array.

2. **Iterate through each item in the input array (`arr`):**
   - For each item, check if it exists as a key in `countMap`.
   - If it exists, increment the count.
   - If it doesn't exist, set the count to 1.

3. **Iterate through the input array again:**
   - For each item, check its count in `countMap`.
   - If the count is even (`count % 2 === 0`), return the item as the first even-occurrence item.

4. **If no even-occurrence item is found during the iteration, return `null`.

5. **The `evenOccurrence` function efficiently finds the first item that occurs an even number of times in the array.**

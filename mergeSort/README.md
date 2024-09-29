# Mergesort - Approach

1. **Check if the input array `array` has a length less than or equal to 1:**
   - If it does, return `array` as it is already considered sorted.

2. **Calculate the middle index (`middle`) of the input array `array`.**

3. **Split the input array into two subarrays, `left` and `right`, using the middle index (`middle`).**
   - `left` contains elements from index 0 to `middle - 1`.
   - `right` contains elements from index `middle` to the end.

4. **Implement a `merge` function that takes two sorted arrays (`left` and `right`) and merges them into a single sorted array:**
   - Initialize an empty array `result` to store the merged result.
   - Initialize two pointers, `leftIndex` and `rightIndex`, both starting from 0.
   - Compare elements at `left[leftIndex]` and `right[rightIndex]`.
   - If `left[leftIndex]` is smaller, push it to the `result` array and increment `leftIndex`.
   - If `right[rightIndex]` is smaller, push it to the `result` array and increment `rightIndex`.
   - Repeat the above steps until one of the subarrays is exhausted.
   - Concatenate the remaining elements from both subarrays to the `result` array.
   - Return the `result` array.

5. **Recursively apply the `mergeSort` function on both `left` and `right` subarrays.**
   - This step recursively sorts the subarrays until they become single-element arrays (base case).

6. **Call the `merge` function on the sorted `left` and `right` subarrays to obtain the final sorted result.**

7. **Return the sorted array.**

8. **The `mergeSort` function efficiently sorts an array of numbers using the mergesort algorithm.**

### Complexity

- Time Complexity: O(n log n) - Mergesort guarantees this runtime, as it always divides the array into two halves and merges them individually.
- Space Complexity: O(n) - Mergesort requires additional space for the temporary arrays used during merging. The space complexity is linear.

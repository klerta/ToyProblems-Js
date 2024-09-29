# Bubble Sort - Approach

1. **Initialize a variable `swapped` to track whether any swaps occurred during a pass. Initially, set it to `false`.

2. **Use a do-while loop to repeatedly iterate through the array until no swaps are needed.**

3. **Inside the loop:**
   - Initialize `swapped` to `false` for the current pass.
   - Iterate through the array using a for loop, comparing adjacent elements.
   - If an element is greater than the element next to it, swap them, and set `swapped` to `true`.
   - Continue this process until the end of the array is reached.

4. **Repeat the loop until no swaps occur in a pass, indicating that the array is sorted.**

5. **Return the sorted array as the result.**

6. **Bubble sort efficiently sorts the array by repeatedly swapping adjacent elements until the array is sorted.**

7. **Time Complexity: O(n^2) in the worst and average cases, O(n) in the best case when the array is already sorted.**

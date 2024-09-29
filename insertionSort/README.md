# Insertion Sort - Approach

Insertion sort is a basic sorting algorithm that grows a sorted array behind the current location while iterating over the input array. Here's the approach to implement insertion sort:

1. **Initialize the sorted array with the first element of the input array.**
   - The sorted array will start with one element, and it will be considered sorted.

2. **Iterate through the input array starting from the second element.**
   - For each element, compare it with elements in the sorted array to find its correct position.
   - Start from the last element of the sorted array and move towards the beginning.
   - While comparing, shift elements in the sorted array to the right until the correct position is found for the current element.

3. **Insert the current element at its correct position in the sorted array.**
   - The sorted array will continue to grow with each iteration.

4. **Repeat steps 2-3 for all elements in the input array.**
   - After the loop, the input array will be fully sorted.

5. **Return the sorted array.**

This approach ensures that insertion sort maintains stability, meaning equal elements retain their relative order. It also allows for optional custom comparators when needed.


# Maximum Contiguous Sum

This toy problem involves finding the greatest contiguous sum of numbers in an array. You are given an array of numbers, and your task is to write a function that calculates the maximum contiguous sum.

## Problem Statement

Given an array of numbers, your task is to calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

### Examples

- `sumArray([1, 2, 3])` should return `6`.
- `sumArray([1, 2, 3, -4])` should return `6`.
- `sumArray([1, 2, 3, -4, 5])` should return `7`.
- `sumArray([4, -1, 5])` should return `8`.
- `sumArray([10, -11, 11])` should return `11`.

## Approach

We can solve this problem efficiently using Kadane's algorithm. The algorithm maintains two variables, `currentSum` and `maxSum`. 

1. Initialize `currentSum` and `maxSum` to the first element of the array.
2. Iterate through the array from the second element onwards.
3. For each element, calculate the new `currentSum` by either adding the current element to it or starting a new sum from the current element if it's greater than the current sum.
4. Update the `maxSum` with the maximum of its current value and the new `currentSum`.
5. Continue this process for all elements in the array.
6. After iterating through the entire array, the `maxSum` will contain the maximum contiguous sum.

This algorithm has a time complexity of O(n) and uses O(1) memory space.

## Usage

To use the `sumArray` function, simply pass an array of numbers as an argument, and it will return the maximum contiguous sum.

```javascript
const sumArray = require('./solution');

const array1 = [1, 2, 3];
console.log(sumArray(array1)); // Output: 6

const array2 = [1, 2, 3, -4];
console.log(sumArray(array2)); // Output: 6

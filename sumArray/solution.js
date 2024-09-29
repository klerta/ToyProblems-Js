/**
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 *
 * @function sumArray
 * @param {Array} array
 * @return {Number}
 */
const sumArray = function(array) {
    // Initialize variables to store the current sum and the maximum sum
    let currentSum = array[0];
    let maxSum = array[0];
  
    // Loop through the array starting from the second element
    for (let i = 1; i < array.length; i++) {
      // Calculate the new current sum by either adding the current element to it
      // or starting a new sum from the current element if it's greater than the current sum
      currentSum = Math.max(array[i], currentSum + array[i]);
  
      // Update the maximum sum if the current sum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
  
    // Return the maximum sum
    return maxSum;
  };
  
  module.exports = sumArray;
  
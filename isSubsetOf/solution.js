/**
 * Determine whether the context array is a subset of the input array.
 *
 * @function isSubsetOf
 * @param {Array} arr - The input array.
 * @return {Boolean} - Returns true if the context array is a subset of the input array, false otherwise.
 */
Array.prototype.isSubsetOf = function(arr) {
  // Use Set data structure to efficiently check for subset
  const inputSet = new Set(arr);
  return this.every(element => inputSet.has(element));
};
/**
 * Determine whether the context array is a subset of the input array.
 *
 * @function isSubsetOf
 * @param {Array} arr - The input array.
 * @return {Boolean} - Returns true if the context array is a subset of the input array, false otherwise.
 */
Array.prototype.isSubsetOf = function(arr) {
  // Use Set data structure to efficiently check for subset
  const inputSet = new Set(arr);
  return this.every(element => inputSet.has(element));
};

/**
 * Traverse a 2-dimensional array in a spiral from the upper left to the center.
 *
 * @function spiralTraversal
 * @param {Array<Array>} matrix - 2-dimensional array to traverse.
 * @return {Array} - Values in the spiral order.
 */
var spiralTraversal = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const result = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse from left to right (top row)
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    startRow++;

    // Traverse from top to bottom (rightmost column)
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    endCol--;

    // Check if there are more rows to traverse
    if (startRow <= endRow) {
      // Traverse from right to left (bottom row)
      for (let col = endCol; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
      endRow--;
    }

    // Check if there are more columns to traverse
    if (startCol <= endCol) {
      // Traverse from bottom to top (leftmost column)
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startCol]);
      }
      startCol++;
    }
  }

  return result;
};

module.exports = spiralTraversal;

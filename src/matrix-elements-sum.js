const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) { 
  const arrLen = matrix.length

  for (let i = 0; i < arrLen - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let n = i + 1; n < arrLen; n++) {
          matrix[n][j] = 0
        }
      }
    }
  }

  let result = 0
  let sum = 0

  for (i = 0; i < arrLen; i++) {
    sum = matrix[i].reduce((acc, a) => acc + a, 0)
    result += sum
  }

  return result
}

module.exports = {
  getMatrixElementsSum
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resArr = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      for (let k = -1; k <= 1; k++) {
        for (let n = -1; n <= 1; n++) {
          if (k === 0 && n === 0) continue;
          if (matrix[i+k] && matrix[i+k][j+n] && matrix[i+k][j+n] === true) count++;
        }
      }
      resArr[i][j] = count;
    }
  }
  return resArr;
}


module.exports = {
  minesweeper
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let resArr = arr.filter(elem => elem !== -1).sort((a, b) => (a - b))
  let arrOfIndex = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arrOfIndex.push(i);
  }
  for (let i = 0; i < arrOfIndex.length; i++) {
    resArr.splice(arrOfIndex[i], 0, -1);
  }  
  return resArr;
}

module.exports = {
  sortByHeight
};

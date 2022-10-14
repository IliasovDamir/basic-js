const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('')
  let res = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] = ''
    res.push(arr.join(''))
    arr = n.toString().split('')
  }

  res.sort((a, b) => b - a)
  return Number(res[0])
}


module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = []
  let i = 0
  while (i < str.length) {
    let count = 1
    if (str[i] !== str[i + 1]) {
      count = ','
      arr.push([count, str[i]])
    } else {
      while (str[i] === str[i + 1]) {
        count++
        i++
      }
      arr.push([count, str[i]])
      count = 1
    }
    i++
  }
  return arr.join('').replaceAll(',', '')
}

module.exports = {
  encodeLine
};

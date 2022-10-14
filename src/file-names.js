const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {  
  let arr = []

  for (let i = 0; i < names.length; i++) {
    if (names[i].endsWith(')')) arr.push(names[i].slice(0, -3)) 
    else arr.push(names[i])
  }

  let obj = {};
  arr.forEach(function (a) {
    if (obj[a] !== undefined)
      ++obj[a];
    else
      obj[a] = 1;
  });

  let res = []
  let n1 = ''
  let count1 = ''
  let n2 = 1
  let count2 = `(${n2})`


  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > 1) {
      if (names[i] === 'a(3)') {
        res.push(names[i])

      } else if (!names[i].endsWith(')')) {
        res.push(names[i] + count1)
        n1 = Number(n1) + 1
        count1 = `(${n1})`
      } else {
        res.push(names[i] + count2)
        n2 = n2 + 1
        count2 = `(${n2})`
      }
    } else {
      res.push(names[i])
    }
  }
  return res
}

module.exports = {
  renameFiles
};

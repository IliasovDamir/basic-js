const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let repeatTimes = 1
  if (options.repeatTimes) repeatTimes = options.repeatTimes
  let separator = '+'
  if (options.separator) separator = options.separator
  let addition = ''
  if (options.addition) addition = options.addition 
  else if (options.addition === false) addition = 'false'
  else if (options.addition === null) addition = 'null'
  let additionRepeatTimes = 1
  if (options.additionRepeatTimes) additionRepeatTimes = options.additionRepeatTimes
  let additionSeparator = '|'
  if (options.additionSeparator) additionSeparator = options.additionSeparator

  let a = addition
  let add = addition
  for (let i = 1; i < additionRepeatTimes; i++) add = add + additionSeparator + a

  let r = str + add
  let result = str + add
  for (let i = 1; i < repeatTimes; i++) result = result + separator + r

  return result
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {   
  if (!date) return 'Unable to determine the time of year!'
  try {date.getUTCSeconds()} catch { 
    throw new Error('Invalid date!')
  }  
  if (!Date.parse(date)) throw new Error('Invalid date!')
  else if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) return 'winter'
  else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) return 'spring'
  else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) return 'summer'
  else return 'autumn'
}

module.exports = {
  getSeason
};

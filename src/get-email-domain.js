const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let index;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') index = i
  }

  return email.substring((index + 1), (email.length))
}

module.exports = {
  getEmailDomain
};

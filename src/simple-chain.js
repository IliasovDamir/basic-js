const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength: function () {
    return this.chain.length;
  },
  addLink: function (value = '') {
    this.chain.push(value);
    return this
  },
  removeLink: function (position) {
    if (position - 1 >= 0 && position - 1 < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain: function () {
    this.chain = this.chain.reverse();
    return this
  },
  finishChain: function () {
    let str = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      str = str + `~~( ${this.chain[i]} )`;
    }
    this.chain.length = 0;
    return str;
  },
}

module.exports = {
  chainMaker
};

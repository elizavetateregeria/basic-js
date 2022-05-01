const { NotImplementedError } = require("../extensions/index.js");

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
  let nToArr = n.toString().split("");
  let result = 0;
  for (let i = 0; i < nToArr.length; i++) {
    let nToArrCopy = [...nToArr];
    nToArrCopy.splice(i, 1);
    let newNum = parseInt(nToArrCopy.join(""));
    if (newNum > result) {
      result = newNum;
    }
  }
  return result;
}

module.exports = {
  deleteDigit,
};

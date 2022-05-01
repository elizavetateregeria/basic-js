const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let objCount1 = {};
  let objCount2 = {};

  s1.split("").forEach((char) => {
    objCount1[char] = objCount1[char] ? objCount1[char] + 1 : 1;
  });
  s2.split("").forEach((char) => {
    objCount2[char] = objCount2[char] ? objCount2[char] + 1 : 1;
  });

  let counter = 0;
  for (let key1 in objCount1) {
    if (key1 in objCount2) {
      counter += Math.min(objCount1[key1], objCount2[key1]);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};

const { NotImplementedError } = require("../extensions/index.js");

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
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (!repeatTimes) {
    repeatTimes = 1;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  addition = String(addition);

  if (addition === "undefined") {
    additionRepeatTimes = 0;
  }

  if (!separator) {
    separator = "+";
  }

  if (!additionSeparator) {
    additionSeparator = "|";
  }

  let resultStr = "";
  str = String(str);

  for (let i = 0; i < repeatTimes; i++) {
    resultStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      resultStr += addition;
      if (additionRepeatTimes > 1 && j !== additionRepeatTimes - 1) {
        resultStr += additionSeparator;
      }
    }
    if (repeatTimes > 1 && i !== repeatTimes - 1) {
      resultStr += separator;
    }
  }

  return resultStr;
}

module.exports = {
  repeater,
};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined ) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
    str += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;;
  }
  if (options.repeatTimes !== undefined) {
    str = (str+options.separator).repeat(options.repeatTimes - 1) + str;
    return str;
  }
  else {
    return str+options.addition;
  }
};
  
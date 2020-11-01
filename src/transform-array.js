const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (!arr.length) return arr;
  
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case '--discard-next':
        if (index < arr.length - 1) index++;
        break;
      case '--discard-prev':
        if (index > 0 && arr[index - 2] !== '--discard-next') result.pop();
        break;
      case '--double-next':
        if (index < arr.length - 1) result.push(arr[index + 1]);
        break;
      case '--double-prev':
        if (index > 0 && arr[index - 2] !== '--discard-next') result.push(arr[index - 1]);
        break;
      default:
        result.push(arr[index]);
        break;
    }
  }
  return result;
};

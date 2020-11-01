const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    arr.forEach((element) => {
      let depth = 1;
      if (Array.isArray(element)) {
        depth += this.calculateDepth(element);
      }
      result = Math.max(result, depth);
    });
    return result;
  }
};
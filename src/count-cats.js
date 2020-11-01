const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach((array) => {
    array.forEach((element) => {
      element === '^^' && counter++;
    });
  });
  return counter;
};

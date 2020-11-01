const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }
 
  let mounth = date.getMonth();

  if (typeof mounth !== 'number' || date.getMilliseconds() === 0) {
    throw Error;
  }

  if (mounth <= 1 && mounth >= 0 || mounth === 11) {
    return 'winter';
  }
  if (mounth >= 2 && mounth <= 4) {
    return 'spring';
  }
  if (mounth >= 5 && mounth <= 7) {
    return 'summer';
  }
  if (mounth >= 8 && mounth <= 10) {
    return 'autumn';
  }
};

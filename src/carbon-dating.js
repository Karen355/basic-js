const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string" || !parseFloat(sampleActivity) 
  || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= 15){
    return false
  }

  let log = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = log / k;
  return Math.ceil(t)
};

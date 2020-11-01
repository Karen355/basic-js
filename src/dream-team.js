const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let n = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
    n.push(members[i].trim()[0].toUpperCase());}
  }
  return n.sort().join('');
};

const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mod = true) {
    this.mod = mod;
  }

  _validate(message, salt) {
    if (!message || !salt) throw new Error();
  }

  encrypt(message, salt) {
    this._validate(message, salt);
    let cypher = '';
    let str = message.toUpperCase();
    let key = salt.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      let letter = str[i];

      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        const char = (letter.charCodeAt() - 65 + (key[j % key.length].charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(char + 65);
        j++;
      } else {
        cypher += letter;
      }
    }
    return this.mod ? cypher : cypher.split('').reverse().join('');
  }
  decrypt(code, salt) {
    this._validate(code, salt);
    let message = '';
    let str = code.toUpperCase();
    let key = salt.toUpperCase();
    for (let i = 0, j = 0; i < code.length; i++) {
      let letter = str[i];

      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        const char =
          (letter.charCodeAt() + 65 - (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        message += String.fromCharCode(char + 65);
        j++;
      } else {
        message += letter;
      }
    }
    return this.mod ? message : message.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

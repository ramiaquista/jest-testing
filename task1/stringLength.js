function stringLength(string) {
  finalString = string.replace(/ +/g, '');
  if (finalString.length < 1 || finalString.length > 10) {
    throw Error('Invalid string length');
  } else {
    return finalString.length;
  }
}

module.exports = stringLength;

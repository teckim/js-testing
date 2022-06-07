function stringLength(string) {
  const length = string.length;

  if (length < 1 && length > 10) throw "Error, length must be between 1 and 10";
  return length;
}

module.exports = stringLength;

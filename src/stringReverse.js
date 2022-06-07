function stringReverse(string) {
  const reversed = [...string].reverse().join("");
  
  return reversed;
}

module.exports = stringReverse;

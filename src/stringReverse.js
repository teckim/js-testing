function stringReverse(string) {
  const reversed = [...string].reverse().join("");
  console.log(reversed);
  return reversed;
}

module.exports = stringReverse;

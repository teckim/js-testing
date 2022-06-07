const stringReverse = require("./stringReverse.js");

test('"hello" string should be "olleh" when reversed:', () => {
  const strReversed = stringReverse("hello");

  expect(strReversed).toBe("olleh");
});

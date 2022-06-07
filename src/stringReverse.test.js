const stringReverse = require("./stringReverse.js");

test('"hello" string should be "olleh" when reversed:', () => {
  expect(stringReverse("hello")).toBe("olleh");
});

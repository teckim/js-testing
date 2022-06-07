const stringLength = require("./stringLength.js");

test('"hello" length should be 5', () => {
  const strLength = stringLength("hello");

  expect(strLength).toBe(5);
});

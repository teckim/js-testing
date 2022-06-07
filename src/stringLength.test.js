const stringLength = require("./stringLength.js");

test('"hello" length should be 5', () => {
  expect(stringLength("hello")).toBe(5);
});

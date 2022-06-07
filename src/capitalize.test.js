const capitalize = require('./capitalize.js')

test('"hello" should be "Hello":', () => {
  expect(capitalize("hello")).toBe("Hello");
});

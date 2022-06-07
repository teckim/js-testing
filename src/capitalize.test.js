const capitalize = require('./capitalize.js')

test('"hello" should be "Hello":', () => {
  const capitalized = capitalize("hello");

  expect(capitalized).toBe("Hello");
});

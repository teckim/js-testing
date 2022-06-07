const { add, subtract, multiply, divide } = require("./calculator.js");

describe("my beverage", () => {
  test("1 + 2 = 3", () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });

  test("5 - 4 = 1", () => {
    const result = subtract(5, 4);

    expect(result).toBe(1);
  });

  test("3 * 2 = 6", () => {
    const result = multiply(3, 2);

    expect(result).toBe(6);
  });

  test("4 / 2 = 2", () => {
    const result = divide(4, 2);

    expect(result).toBe(2);
  });
});

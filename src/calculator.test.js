const calculator = require('./calculator.js')

describe('my beverage', () => {
  test('1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('5 - 4 = 1', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
  });

  test('3 * 2 = 6', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test('4 / 2 = 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});


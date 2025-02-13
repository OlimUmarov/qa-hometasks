const validateCartQuantity = require("../utils/validateCartQuantity");

describe("Function validateCartQuantity", () => {
  // 100 => valid, more than 0
  test("should return true if quantity is 100", () => {
    expect(validateCartQuantity(100)).toBeTruthy();
  });

  // 0 => invalid, less than one
  test("should return false if quantity is 0", () => {
    expect(validateCartQuantity(0)).toBeFalsy();
  });

  // -3 => invalid, less than one
  test("should return false if quantity is -3", () => {
    expect(validateCartQuantity(-3)).toBeFalsy();
  });

  // "abc" => invalid, typeof string
  test('should return false if quantity is "abc"', () => {
    expect(validateCartQuantity("abc")).toBeFalsy();
  });
});

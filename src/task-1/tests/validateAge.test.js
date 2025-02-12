const validateAge = require("../utils/validateAge");

describe("Function validateAge", () => {
  // 18 => valid, minimum
  test("should return true if age is 18", () => {
    expect(validateAge(18)).toBeTruthy();
  });

  // 60 => valid, maximum
  test("should return true if age is 60", () => {
    expect(validateAge(60)).toBeTruthy();
  });

  // 17 => invalid, less than minimum (18)
  test("should return true if age is 17", () => {
    expect(validateAge(17)).toBeFalsy();
  });

  // 61 => invalid, more than maximum (60)
  test("should return true if age is 61", () => {
    expect(validateAge(61)).toBeFalsy();
  });
});

const checkUniqueValues = require("../utils/checkUniqueValues");

describe("Function checkUniqueValues", () => {
  // Valid: all values are unique
  test("should return true if all values are unique", () => {
    expect(checkUniqueValues([1, 2, 3, 4])).toBeTruthy();
  });

  //  Valid: all values are unique
  test("should return true if all values are unique", () => {
    expect(checkUniqueValues(["apple", "banana", "cherry"])).toBeTruthy();
  });

  //  Valid: array is empty
  test("should return true if array is empty", () => {
    expect(checkUniqueValues([])).toBeTruthy();
  });

  //  Invalid: duplicate 2
  test("should return false if all some values are not unique", () => {
    expect(checkUniqueValues([1, 2, 2, 3, 4])).toBeFalsy();
  });

  //  Invalid: duplicate "banana"
  test("should return false if all some values are not unique", () => {
    expect(checkUniqueValues(["apple", "banana", "banana"])).toBeFalsy();
  });

  //  Invalid: duplicate "banana"
  test("should return false if all some values are not unique", () => {
    expect(checkUniqueValues(["apple", "banana", "banana"])).toBeFalsy();
  });

  //  Invalid: passed object instead of array
  test("should return Error if passed any type instead of array", () => {
    expect(() => checkUniqueValues({})).toThrow("Expected array!");
  });
});

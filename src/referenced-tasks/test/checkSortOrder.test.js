const checkSortOrder = require("../utils/checkSortOrder");

describe("Function checkSortOrder", () => {
  // Valid: sorted order
  test("should return sorted array in ascending order", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);

    expect(checkSortOrder(arr)).toEqual(sortedArr);
  });

  // Valid: alphabetical order
  test("should return sorted array in ascending order", () => {
    const arr = ["apple", "banana", "cherry"];
    const sortedArr = arr.sort((a, b) => a - b);

    expect(checkSortOrder(arr)).toEqual(sortedArr);
  });

  // Valid: empty array
  test("should return sorted array in ascending order", () => {
    const arr = [];
    const sortedArr = arr.sort((a, b) => a - b);

    expect(checkSortOrder(arr)).toEqual(sortedArr);
  });

  // Invalid: not in order
  test("should return sorted array in ascending order", () => {
    expect(() => checkSortOrder({})).toThrow("Expected array!");
  });
});

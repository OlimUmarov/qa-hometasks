const generateFullname = require("../utils/generateFullname");

describe("checking generateFullname function", () => {
  test("should correctly return user fullname when given firstName and lastName", () => {
    expect(generateFullname("Roman", "Malkin")).toBe("Roman Malkin");
  });

  test("should return null if lastName is missing", () => {
    expect(generateFullname("Roman", "")).toBeNull();
  });

  test("should return null if firstName is missing", () => {
    expect(generateFullname("", "Malkin")).toBeNull();
  });

  test("should return null if firstName and lastName are missing", () => {
    expect(generateFullname("", "")).toBeNull();
  });
});

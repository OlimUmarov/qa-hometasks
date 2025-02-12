const validateDiscountCalculation = require("../utils/validateDiscountCalculation");

describe("Function validateDiscountCalculation", () => {
  //  15% (10% for membership, then 5% for over $100 spend)
  test("should return 15 if has a membership and spend more than 100", () => {
    expect(validateDiscountCalculation(true, 101)).toBe(15);
  });

  //  10% for membership
  test("should return 10 if has a membership, but spend less than 100", () => {
    expect(validateDiscountCalculation(true, 99)).toBe(10);
  });

  //  5% for over $100 spend
  test("should return 5 if has not a membership, but spend more than 100", () => {
    expect(validateDiscountCalculation(false, 200)).toBe(5);
  });

  // No discount, no membership and no over $100 spend
  test("should return 0 if has not a membership and spend less than 100", () => {
    expect(validateDiscountCalculation(false, 100)).toBe(0);
  });
});

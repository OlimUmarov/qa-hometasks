const validatePassword = require("../utils/validatePassword");

describe("Function validatePassword", () => {
  // Password123 => covers all valid parts
  test(`should return true if password is between 8-12, and 
  contains at least one uppercase, lowercase and digit`, () => {
    expect(validatePassword("Password123")).toBeTruthy();
  });

  // Pass => less than 8 characters
  test(`should return false if password is less than 8 characters`, () => {
    expect(validatePassword("Pass")).toBeFalsy();
  });

  // PasswordPassword123 => more than 12 characters
  test(`should return false if password is more than 12 characters`, () => {
    expect(validatePassword("PasswordPassword123")).toBeFalsy();
  });

  // password123 => no uppercase
  test(`should return false if password doesn't contain uppercase`, () => {
    expect(validatePassword("password123")).toBeFalsy();
  });

  // PASSWORD123 => no lowercase
  test(`should return false if password doesn't contain lowercase`, () => {
    expect(validatePassword("PASSWORD123")).toBeFalsy();
  });

  // Passwordabc => no digit
  test(`should return false if password doesn't contain digit`, () => {
    expect(validatePassword("Passwordabc")).toBeFalsy();
  });
});

const validateLogin = require("../utils/validateLogin");

describe("Function validateLogin", () => {
  // VALID: username = "roman", password = "malkin123"
  test("should return token and id if valid username and password", () => {
    const result = validateLogin("roman", "malkin123");
    expect(result).toBeDefined();
    expect(result).toHaveProperty("token");
    expect(result).toHaveProperty("id");
    expect(typeof result.token).toBe("string");
    expect(typeof result.id).toBe("number");
  });

  // INVALID: => valid username, but invalid password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("roman", "malkins")).toBeNull();
  });

  // INVALID: => invalid username, but valid password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("romancini", "malkin123")).toBeNull();
  });

  // INVALID: => invalid username and invalid password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("romancini", "malkins")).toBeNull();
  });

  // INVALID: => empty username and valid password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("", "malkin123")).toBeNull();
  });

  // INVALID: => valid username and  empty password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("roman", "")).toBeNull();
  });

  // INVALID: => empty username and  empty password
  test("should return null if valid username, but invalid password", () => {
    expect(validateLogin("", "")).toBeNull();
  });
});

const addProperty = require("../utils/addProperty");

describe("Function addProperty", () => {
  const user = { name: "Roman" };
  const updatedUser = { name: "Roman", age: 24 };

  // checking only equality
  test("should return updated object when given new value", () => {
    expect(addProperty(user, "age", 24)).toEqual(updatedUser);
  });

  // checking references
  test("should be different references from updatedUser object", () => {
    expect(addProperty(user, "age", 24)).not.toBe(updatedUser);
  });

  // checking property added or not
  test("should add new property to user object", () => {
    expect(addProperty(user, "age", 24)).toMatchObject({ age: 24 });
  });
});

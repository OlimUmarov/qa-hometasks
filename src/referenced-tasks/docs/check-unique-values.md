
Title: Unique Values in an Array
Description: Ensure an array contains only unique values (no duplicates).

Criteria:

1. An array with unique values is valid.
2. An array with at least one duplicate is invalid.

Test Cases:

1. [1, 2, 3, 4, 5] (✅ Valid: all values are unique)
2. ["apple", "banana", "cherry"] (✅ Valid: all values are unique)
3. [] (✅ Valid: if empty arr return true)
4. [1, 2, 2, 3, 4] (❌ Invalid: duplicate 2)
5. ["apple", "banana", "banana"] (❌ Invalid: duplicate "banana")
5. {} (❌ Invalid: Error => "Expected array!")
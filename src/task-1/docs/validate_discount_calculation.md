Task: Discount Calculation
Description: An e-commerce site offers discounts based on the following rules:

Criteria:

1. Customers with a membership get a 10% discount.
2. Customers who spend over $100 get a 5% discount.
3. Customers can get both discounts, with the membership discount applied first.


Test cases:

1. hasMembership= true, spend= 101 (15% (10% for membership, then 5% for over $100 spend))
2. hasMembership= true, spend= 100 (10% for membership)
3. hasMembership= false, spend= 200 (5% for over $100 spend)
4. hasMembership= false, spend= 99 (No discount, no membership and no over $100 spend)


Test decision table:

| #  | Test Scenario                          | Membership | Spending Over $100 | Expected Discount |
|----|----------------------------------------|------------ --------------------------------------|
| 1 | Has membership and spends over $100     | True       | True  | **15% (10% first, then 5%)** |
| 2 | Has membership but spends $100 or less  | True       | False | **10% discount**             |
| 3 | Has not a member but spends over $100   | False      | True  | **5% discount**              |
| 4 | Hasn't a member and spends $100 or less | False      | False | **No discount**              |



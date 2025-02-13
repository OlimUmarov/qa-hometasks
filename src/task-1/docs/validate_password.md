Task: Password Validation
Description: Function should validate user password. If a password meets all criteria, it should be  
 considered as a valid, otherwise invalid.

Criteries:

1. Must be 8-12 characters long.
2. Must contain at least one uppercase letter.
3. Must contain at least one lowercase letter.
4. Must contain at least one digit.

Test cases:

1. "Password123" (covers all partitions)
2. "Pass" (less than 8 characters)
3. "PasswordPassword123" (more than 12 characters)
4. "password123" (no uppercase)
5. "PASSWORD123" (no lowercase)
6. "Passwordabc" (no digit)

Test cases table:

|  #  | Input Condition  | Valid Partitions                       | Invalid Partitions                 |
| :-: | :--------------- | :------------------------------------- | :--------------------------------- |
|  1  | Password Length  | 8-12 characters                        | Less than 8 characters / More than |
|     |                  |                                        | 12 characters                      |
|  2  | Uppercase Letter | Contains at least one uppercase letter | Contains no uppercase letters      |
|  3  | Lowercase Letter | Contains at least one lowercase letter | Contains no lowercase letters      |
|  4  | Digit            | Contains at least one digit            | Contains no digits                 |

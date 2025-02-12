Task: Login Functionality
Description: A system requires users to enter valid username and password, which must match criteries below.

Criteria:

1. A user must enter a valid username and password to log in
2. If the username is invalid, display an "Invalid username" error.
3. If the password is invalid, display an "Invalid password" error.

Test cases:

1. username="roman", password="malkin123" (VALID: valid username and password)
2. username="roman", password="malkins" (INVALID: => valid username, but invalid password)
3. username="romancini", password="malkin123" (INVALID: => invalid username, but valid password)
4. username="romano", password="malkin321"(INVALID: => invalid username and invalid password)
5. username="romano", password=""(INVALID: => invalid username and invalid password)
6. username="", password="123456"(INVALID: => invalid username and invalid password)
7. username="", password=""(INVALID: => invalid username and invalid password)


Test decision table:

| Valid Username | Valid Password | Login Outcome | Username Error | Password Error |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| True          | True          | Successful    | -             | -             |
| True          | False         | -             | -             | Displayed     |
| False         | True          | -             | Displayed     | -             |
| False         | False         | -             | Displayed     | Displayed     |



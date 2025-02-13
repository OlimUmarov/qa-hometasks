
Task: Fullname generation  
Description: function should generate fullName when given firstName and lastName as arguments to the function

Criteries:
1. Function should correctly return user fullName when given firstName and lastName.
2. Function should return null if lastName is missing.
3. Function should return null if lastName is missing.
4. Function should return null if firstName and lastName are missing


Decision table:

| # | FirstName | LastName |   Decision   |
|:=:|:=========:|:========:|:============:|
| 1 |   Roman   |  Malkin  | Roman Malkin |
| 2 |   Roman   |          |    Null      |
| 3 |           |  Malkin  |    Null      |
| 4 |           |          |    Null      |

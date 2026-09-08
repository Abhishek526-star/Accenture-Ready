// src/data/sqlQuestions.js

export const sqlQuestions = [
  {
    id: "sql-001",
    title: "Second Highest DISTINCT Salary",
    difficulty: "Medium",
    duration: 15,
    category: "SUBQUERY & NULL HANDLING",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "salary", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Write a SQL query to report the second highest DISTINCT salary from the Employee table. If there is no second highest salary, the query should report NULL.",
    problem: `Write a SQL query to report the second highest distinct salary from the **Employee** table. If there is no second highest salary, the query should report **NULL** (or return a single row with NULL).

### Important Requirements:
- The result column name MUST be exactly **SecondHighestSalary**.
- If multiple employees share the highest salary, the second highest must be strictly lower than the highest.
- If the table is empty or has only one distinct salary, return **NULL** in the \`SecondHighestSalary\` column (exactly 1 row containing NULL).`,
    notes: [
      "Second highest means the second strictly DISTINCT salary value.",
      "If there are no qualifying records (e.g. 1 employee, or all salaries identical), the output must be a single row with NULL, not an empty result set.",
      "Column names are case-insensitive in SQL, but must match 'SecondHighestSalary' in your SELECT clause alias."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    salary AS SecondHighestSalary
FROM Employee;`,
    solution: `SELECT (
    SELECT DISTINCT salary 
    FROM Employee 
    ORDER BY salary DESC 
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;`,
    explanation: `We use a scalar subquery with **DISTINCT**, **ORDER BY salary DESC**, and **LIMIT 1 OFFSET 1**.
When a subquery returns 0 rows inside a SELECT clause, SQL evaluates the entire expression as **NULL**, ensuring a single row with NULL is produced even for empty or single-salary tables.`,
    expectedColumns: ["SecondHighestSalary"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Standard Distinct Salaries)",
        input: {
          Employee: [
            { id: 1, salary: 100 },
            { id: 2, salary: 200 },
            { id: 3, salary: 300 }
          ]
        },
        output: [
          { SecondHighestSalary: 200 }
        ],
        explanation: "The distinct salaries are 300, 200, 100. The second highest distinct salary is 200."
      },
      {
        title: "Example 2 (Single Distinct Salary)",
        input: {
          Employee: [
            { id: 1, salary: 100 }
          ]
        },
        output: [
          { SecondHighestSalary: null }
        ],
        explanation: "There is only one salary, so no second highest distinct salary exists. Return NULL."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Three Distinct Salaries",
        isHidden: false,
        data: {
          Employee: [
            { id: 1, salary: 100 },
            { id: 2, salary: 200 },
            { id: 3, salary: 300 }
          ]
        },
        expected: [{ SecondHighestSalary: 200 }]
      },
      {
        id: "test-2",
        name: "Visible Test Case 2 — Single Distinct Salary (Returns NULL)",
        isHidden: false,
        data: {
          Employee: [{ id: 1, salary: 100 }]
        },
        expected: [{ SecondHighestSalary: null }]
      },
      {
        id: "test-3",
        name: "Hidden Test Case 1 — Duplicate Highest Salaries",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, salary: 100 },
            { id: 2, salary: 300 },
            { id: 3, salary: 300 },
            { id: 4, salary: 200 }
          ]
        },
        expected: [{ SecondHighestSalary: 200 }]
      },
      {
        id: "test-4",
        name: "Hidden Test Case 2 — All Salaries Identical",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, salary: 100 },
            { id: 2, salary: 100 },
            { id: 3, salary: 100 }
          ]
        },
        expected: [{ SecondHighestSalary: null }]
      },
      {
        id: "test-5",
        name: "Hidden Test Case 3 — Empty Table",
        isHidden: true,
        data: {
          Employee: []
        },
        expected: [{ SecondHighestSalary: null }]
      },
      {
        id: "test-6",
        name: "Hidden Test Case 4 — Descending Distinct Salaries",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, salary: 500 },
            { id: 2, salary: 400 },
            { id: 3, salary: 400 },
            { id: 4, salary: 300 },
            { id: 5, salary: 200 }
          ]
        },
        expected: [{ SecondHighestSalary: 400 }]
      }
    ]
  },
  {
    id: "sql-002",
    title: "Classes With At Least 5 Students",
    difficulty: "Easy",
    duration: 15,
    category: "GROUP BY & HAVING",
    tableSchema: [
      {
        name: "Courses",
        columns: [
          { name: "student", type: "TEXT", primaryKey: false },
          { name: "class", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Write a SQL query to report all classes that have at least five students enrolled. Return the result table in any order.",
    problem: `Write a SQL query to find all classes that have **at least five students** enrolled.

### Important Requirements:
- Return only the **class** column.
- The result can be returned in **any order**.
- The query should accurately count unique enrollments per class using appropriate grouping logic.`,
    notes: [
      "Use GROUP BY class and HAVING COUNT(student) >= 5 or COUNT(DISTINCT student) >= 5.",
      "The result set must only contain the 'class' column.",
      "Classes with 4 or fewer students must NOT be included."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    class
FROM Courses
-- Add grouping and filter condition
;`,
    solution: `SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;`,
    explanation: `Group by the \`class\` column, then apply \`HAVING COUNT(student) >= 5\` to filter only the groups that have at least 5 students.`,
    expectedColumns: ["class"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Math Class with 6 Students)",
        input: {
          Courses: [
            { student: "A", class: "Math" },
            { student: "B", class: "English" },
            { student: "C", class: "Math" },
            { student: "D", class: "Biology" },
            { student: "E", class: "Math" },
            { student: "F", class: "Computer" },
            { student: "G", class: "Math" },
            { student: "H", class: "Math" },
            { student: "I", class: "Math" }
          ]
        },
        output: [{ class: "Math" }],
        explanation: "Math has 6 students (>= 5). English, Biology, and Computer each have 1 student (< 5)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Single Qualifying Class",
        isHidden: false,
        data: {
          Courses: [
            { student: "A", class: "Math" },
            { student: "B", class: "English" },
            { student: "C", class: "Math" },
            { student: "D", class: "Biology" },
            { student: "E", class: "Math" },
            { student: "F", class: "Computer" },
            { student: "G", class: "Math" },
            { student: "H", class: "Math" },
            { student: "I", class: "Math" }
          ]
        },
        expected: [{ class: "Math" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Exact Boundary of 5 Students",
        isHidden: true,
        data: {
          Courses: [
            { student: "S1", class: "Physics" },
            { student: "S2", class: "Physics" },
            { student: "S3", class: "Physics" },
            { student: "S4", class: "Physics" },
            { student: "S5", class: "Physics" },
            { student: "S6", class: "Art" }
          ]
        },
        expected: [{ class: "Physics" }]
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Boundary of 4 Students (Must Exclude)",
        isHidden: true,
        data: {
          Courses: [
            { student: "S1", class: "Chemistry" },
            { student: "S2", class: "Chemistry" },
            { student: "S3", class: "Chemistry" },
            { student: "S4", class: "Chemistry" }
          ]
        },
        expected: []
      },
      {
        id: "test-4",
        name: "Hidden Test Case 3 — Multiple Qualifying Classes",
        isHidden: true,
        data: {
          Courses: [
            { student: "1", class: "Math" },
            { student: "2", class: "Math" },
            { student: "3", class: "Math" },
            { student: "4", class: "Math" },
            { student: "5", class: "Math" },
            { student: "6", class: "Science" },
            { student: "7", class: "Science" },
            { student: "8", class: "Science" },
            { student: "9", class: "Science" },
            { student: "10", class: "Science" },
            { student: "11", class: "Science" },
            { student: "12", class: "Music" }
          ]
        },
        expected: [{ class: "Math" }, { class: "Science" }]
      },
      {
        id: "test-5",
        name: "Hidden Test Case 4 — Empty Table",
        isHidden: true,
        data: { Courses: [] },
        expected: []
      }
    ]
  },
  {
    id: "sql-003",
    title: "Account Salary Categories",
    difficulty: "Medium",
    duration: 15,
    category: "CASE & AGGREGATE FUNCTIONS",
    tableSchema: [
      {
        name: "Accounts",
        columns: [
          { name: "account_id", type: "INTEGER", primaryKey: true },
          { name: "income", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Categorize every account based on its income into 'Low Salary', 'Average Salary', or 'High Salary'. All 3 categories must always appear even when there are zero accounts in that category.",
    problem: `Write a SQL query to report the number of bank accounts for each salary category:
- **Low Salary**: All incomes strictly less than $20,000 (\`income < 20000\`).
- **Average Salary**: All incomes in the inclusive range [$20,000, $50,000] (\`20000 <= income <= 50000\`).
- **High Salary**: All incomes strictly greater than $50,000 (\`income > 50000\`).

### Critical Requirement:
- Return the columns: **category** and **accounts_count**.
- **All three categories ('Low Salary', 'Average Salary', 'High Salary') must appear in the result table**, even if a category has **0** accounts.
- The result can be returned in any order.`,
    notes: [
      "Tip: You can use UNION of 3 queries each selecting the literal category string and counting matches from Accounts.",
      "Ensure the exact category strings: 'Low Salary', 'Average Salary', 'High Salary'.",
      "When a category has no matching records, accounts_count must be 0, not NULL."
    ],
    starterCode: `-- Write your SQL query below
-- Remember: All 3 categories ('Low Salary', 'Average Salary', 'High Salary') must be in the result!
SELECT 
    'Low Salary' AS category,
    COUNT(*) AS accounts_count
FROM Accounts 
WHERE income < 20000
UNION
SELECT 
    'Average Salary' AS category,
    COUNT(*) AS accounts_count
FROM Accounts 
WHERE income >= 20000 AND income <= 50000
UNION
SELECT 
    'High Salary' AS category,
    COUNT(*) AS accounts_count
FROM Accounts 
WHERE income > 50000;`,
    solution: `SELECT 'Low Salary' AS category, COUNT(*) AS accounts_count FROM Accounts WHERE income < 20000
UNION
SELECT 'Average Salary' AS category, COUNT(*) AS accounts_count FROM Accounts WHERE income >= 20000 AND income <= 50000
UNION
SELECT 'High Salary' AS category, COUNT(*) AS accounts_count FROM Accounts WHERE income > 50000;`,
    explanation: `By combining 3 explicit queries with **UNION**, each category string is guaranteed to be in the output set. When no records match the WHERE condition, \`COUNT(*)\` evaluates to **0**.`,
    expectedColumns: ["category", "accounts_count"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (With 0 Average Salary)",
        input: {
          Accounts: [
            { account_id: 3, income: 108939 },
            { account_id: 2, income: 12747 },
            { account_id: 8, income: 87709 },
            { account_id: 6, income: 91796 }
          ]
        },
        output: [
          { category: "Low Salary", accounts_count: 1 },
          { category: "Average Salary", accounts_count: 0 },
          { category: "High Salary", accounts_count: 3 }
        ],
        explanation: "Low Salary: Account 2 ($12747). Average Salary: None (count is 0). High Salary: Accounts 3, 6, 8 (3 accounts)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Mixed with Zero Average Salary",
        isHidden: false,
        data: {
          Accounts: [
            { account_id: 3, income: 108939 },
            { account_id: 2, income: 12747 },
            { account_id: 8, income: 87709 },
            { account_id: 6, income: 91796 }
          ]
        },
        expected: [
          { category: "Low Salary", accounts_count: 1 },
          { category: "Average Salary", accounts_count: 0 },
          { category: "High Salary", accounts_count: 3 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Zero Low Salary Accounts",
        isHidden: true,
        data: {
          Accounts: [
            { account_id: 1, income: 25000 },
            { account_id: 2, income: 45000 },
            { account_id: 3, income: 75000 }
          ]
        },
        expected: [
          { category: "Low Salary", accounts_count: 0 },
          { category: "Average Salary", accounts_count: 2 },
          { category: "High Salary", accounts_count: 1 }
        ]
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Zero High Salary Accounts",
        isHidden: true,
        data: {
          Accounts: [
            { account_id: 1, income: 15000 },
            { account_id: 2, income: 18000 },
            { account_id: 3, income: 30000 }
          ]
        },
        expected: [
          { category: "Low Salary", accounts_count: 2 },
          { category: "Average Salary", accounts_count: 1 },
          { category: "High Salary", accounts_count: 0 }
        ]
      },
      {
        id: "test-4",
        name: "Hidden Test Case 3 — Only High Salary Accounts (Low=0, Avg=0)",
        isHidden: true,
        data: {
          Accounts: [
            { account_id: 1, income: 60000 },
            { account_id: 2, income: 90000 },
            { account_id: 3, income: 120000 },
            { account_id: 4, income: 50001 }
          ]
        },
        expected: [
          { category: "Low Salary", accounts_count: 0 },
          { category: "Average Salary", accounts_count: 0 },
          { category: "High Salary", accounts_count: 4 }
        ]
      },
      {
        id: "test-5",
        name: "Hidden Test Case 4 — Empty Table (All Counts Zero)",
        isHidden: true,
        data: { Accounts: [] },
        expected: [
          { category: "Low Salary", accounts_count: 0 },
          { category: "Average Salary", accounts_count: 0 },
          { category: "High Salary", accounts_count: 0 }
        ]
      }
    ]
  },
  {
    id: "sql-004",
    title: "Combine Two Tables",
    difficulty: "Easy",
    duration: 15,
    category: "LEFT JOIN",
    tableSchema: [
      {
        name: "Person",
        columns: [
          { name: "personId", type: "INTEGER", primaryKey: true },
          { name: "lastName", type: "TEXT", primaryKey: false },
          { name: "firstName", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Address",
        columns: [
          { name: "addressId", type: "INTEGER", primaryKey: true },
          { name: "personId", type: "INTEGER", primaryKey: false },
          { name: "city", type: "TEXT", primaryKey: false },
          { name: "state", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Write a SQL query to report the firstName, lastName, city, and state of each person in the Person table. If the address of a personId is not present in Address, report null instead.",
    problem: `Write a SQL query to report the **firstName**, **lastName**, **city**, and **state** of each person in the **Person** table.

### Important Requirements:
- If the address of a personId is not present in the **Address** table, report **null** for \`city\` and \`state\`.
- Return the columns: \`firstName\`, \`lastName\`, \`city\`, \`state\`.
- Return the result in any order.`,
    notes: [
      "Use a LEFT JOIN from Person to Address on Person.personId = Address.personId.",
      "Ensure every person in the Person table is included in the output."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    p.firstName,
    p.lastName,
    a.city,
    a.state
FROM Person p
-- Join Address table
;`,
    solution: `SELECT 
    p.firstName,
    p.lastName,
    a.city,
    a.state
FROM Person p
LEFT JOIN Address a ON p.personId = a.personId;`,
    explanation: `A \`LEFT JOIN\` ensures that all records from the left table (\`Person\`) are kept. If there is no matching record in the right table (\`Address\`), the resulting \`city\` and \`state\` columns are filled with \`NULL\`.`,
    expectedColumns: ["firstName", "lastName", "city", "state"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Person without Address)",
        input: {
          Person: [
            { personId: 1, lastName: "Wang", firstName: "Allen" },
            { personId: 2, lastName: "Alice", firstName: "Bob" }
          ],
          Address: [
            { addressId: 1, personId: 2, city: "New York City", state: "New York" }
          ]
        },
        output: [
          { firstName: "Allen", lastName: "Wang", city: null, state: null },
          { firstName: "Bob", lastName: "Alice", city: "New York City", state: "New York" }
        ],
        explanation: "Allen has personId 1 which is not in Address table, so city and state are NULL."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Basic Person & Address Join",
        isHidden: false,
        data: {
          Person: [
            { personId: 1, lastName: "Wang", firstName: "Allen" },
            { personId: 2, lastName: "Alice", firstName: "Bob" }
          ],
          Address: [
            { addressId: 1, personId: 2, city: "New York City", state: "New York" }
          ]
        },
        expected: [
          { firstName: "Allen", lastName: "Wang", city: null, state: null },
          { firstName: "Bob", lastName: "Alice", city: "New York City", state: "New York" }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All Persons Have Addresses",
        isHidden: true,
        data: {
          Person: [
            { personId: 1, lastName: "Smith", firstName: "John" },
            { personId: 2, lastName: "Doe", firstName: "Jane" }
          ],
          Address: [
            { addressId: 10, personId: 1, city: "Chicago", state: "Illinois" },
            { addressId: 20, personId: 2, city: "Seattle", state: "Washington" }
          ]
        },
        expected: [
          { firstName: "John", lastName: "Smith", city: "Chicago", state: "Illinois" },
          { firstName: "Jane", lastName: "Doe", city: "Seattle", state: "Washington" }
        ]
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — No Persons Have Addresses",
        isHidden: true,
        data: {
          Person: [
            { personId: 10, lastName: "Taylor", firstName: "Sam" }
          ],
          Address: []
        },
        expected: [
          { firstName: "Sam", lastName: "Taylor", city: null, state: null }
        ]
      }
    ]
  },
  {
    id: "sql-005",
    title: "Employees Earning More Than Their Managers",
    difficulty: "Easy",
    duration: 15,
    category: "SELF JOIN",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false },
          { name: "managerId", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the employees who earn more than their managers. Return the result table with column 'Employee'.",
    problem: `Write a SQL query to find the employees who earn **more than their managers**.

### Important Requirements:
- Return the result column named **Employee**.
- An employee without a manager (\`managerId IS NULL\`) cannot earn more than a manager.
- Return the result in any order.`,
    notes: [
      "Perform a SELF JOIN on the Employee table: `Employee e JOIN Employee m ON e.managerId = m.id`.",
      "Filter with `WHERE e.salary > m.salary`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    e.name AS Employee
FROM Employee e
-- Join manager
;`,
    solution: `SELECT e.name AS Employee
FROM Employee e
JOIN Employee m ON e.managerId = m.id
WHERE e.salary > m.salary;`,
    explanation: `We join the Employee table to itself on \`e.managerId = m.id\` so that each employee is paired with their direct manager. Then, we filter for \`e.salary > m.salary\`.`,
    expectedColumns: ["Employee"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Joe earns more than Sam)",
        input: {
          Employee: [
            { id: 1, name: "Joe", salary: 70000, managerId: 3 },
            { id: 2, name: "Henry", salary: 80000, managerId: 4 },
            { id: 3, name: "Sam", salary: 60000, managerId: null },
            { id: 4, name: "Max", salary: 90000, managerId: null }
          ]
        },
        output: [{ Employee: "Joe" }],
        explanation: "Joe ($70000) earns more than manager Sam ($60000). Henry ($80000) earns less than manager Max ($90000)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Single qualifying employee",
        isHidden: false,
        data: {
          Employee: [
            { id: 1, name: "Joe", salary: 70000, managerId: 3 },
            { id: 2, name: "Henry", salary: 80000, managerId: 4 },
            { id: 3, name: "Sam", salary: 60000, managerId: null },
            { id: 4, name: "Max", salary: 90000, managerId: null }
          ]
        },
        expected: [{ Employee: "Joe" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — No one earns more than their manager",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, name: "A", salary: 50000, managerId: 2 },
            { id: 2, name: "B", salary: 100000, managerId: null }
          ]
        },
        expected: []
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Multiple subordinates earning more",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, name: "Alice", salary: 95000, managerId: 3 },
            { id: 2, name: "Bob", salary: 92000, managerId: 3 },
            { id: 3, name: "Charlie", salary: 80000, managerId: null }
          ]
        },
        expected: [{ Employee: "Alice" }, { Employee: "Bob" }]
      }
    ]
  },
  {
    id: "sql-006",
    title: "Duplicate Emails",
    difficulty: "Easy",
    duration: 15,
    category: "GROUP BY & HAVING",
    tableSchema: [
      {
        name: "Person",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "email", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Report all the duplicate emails in the Person table. Return the result column named Email.",
    problem: `Write a SQL query to report all the duplicate emails.

### Important Requirements:
- Return the result column named **Email** (or **email**).
- All emails are guaranteed to be in lowercase.
- Return the result table in any order.`,
    notes: [
      "Use `GROUP BY email HAVING COUNT(email) > 1`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    email AS Email
FROM Person
-- Add grouping condition
;`,
    solution: `SELECT email AS Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;`,
    explanation: `Grouping by \`email\` gathers identical email entries. \`HAVING COUNT(email) > 1\` filters out emails that only appear once.`,
    expectedColumns: ["Email"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Duplicate a@b.com)",
        input: {
          Person: [
            { id: 1, email: "a@b.com" },
            { id: 2, email: "c@d.com" },
            { id: 3, email: "a@b.com" }
          ]
        },
        output: [{ Email: "a@b.com" }],
        explanation: "a@b.com appears twice, so it is a duplicate email."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Single duplicate email",
        isHidden: false,
        data: {
          Person: [
            { id: 1, email: "a@b.com" },
            { id: 2, email: "c@d.com" },
            { id: 3, email: "a@b.com" }
          ]
        },
        expected: [{ Email: "a@b.com" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All unique emails",
        isHidden: true,
        data: {
          Person: [
            { id: 1, email: "user1@domain.com" },
            { id: 2, email: "user2@domain.com" }
          ]
        },
        expected: []
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Multiple duplicate emails",
        isHidden: true,
        data: {
          Person: [
            { id: 1, email: "test@x.com" },
            { id: 2, email: "test@x.com" },
            { id: 3, email: "admin@x.com" },
            { id: 4, email: "admin@x.com" },
            { id: 5, email: "admin@x.com" },
            { id: 6, email: "unique@x.com" }
          ]
        },
        expected: [{ Email: "test@x.com" }, { Email: "admin@x.com" }]
      }
    ]
  },
  {
    id: "sql-007",
    title: "Customers Who Never Order",
    difficulty: "Easy",
    duration: 15,
    category: "LEFT JOIN / NOT IN",
    tableSchema: [
      {
        name: "Customers",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Orders",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "customerId", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find all customers who never order anything. Return the result table with column 'Customers'.",
    problem: `Write a SQL query to report all customers who never place any orders.

### Important Requirements:
- Return the result column named **Customers**.
- Return the result in any order.`,
    notes: [
      "Use `LEFT JOIN Orders ON Customers.id = Orders.customerId WHERE Orders.customerId IS NULL` or `WHERE id NOT IN (SELECT customerId FROM Orders)`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    name AS Customers
FROM Customers
-- Add filter for customers without orders
;`,
    solution: `SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.customerId IS NULL;`,
    explanation: `A \`LEFT JOIN\` retains all customers. Customers who have never placed an order will have \`o.customerId IS NULL\`.`,
    expectedColumns: ["Customers"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Henry and Max never ordered)",
        input: {
          Customers: [
            { id: 1, name: "Joe" },
            { id: 2, name: "Henry" },
            { id: 3, name: "Sam" },
            { id: 4, name: "Max" }
          ],
          Orders: [
            { id: 1, customerId: 3 },
            { id: 2, customerId: 1 }
          ]
        },
        output: [
          { Customers: "Henry" },
          { Customers: "Max" }
        ],
        explanation: "Henry (id 2) and Max (id 4) do not appear in the Orders table."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Standard Customers and Orders",
        isHidden: false,
        data: {
          Customers: [
            { id: 1, name: "Joe" },
            { id: 2, name: "Henry" },
            { id: 3, name: "Sam" },
            { id: 4, name: "Max" }
          ],
          Orders: [
            { id: 1, customerId: 3 },
            { id: 2, customerId: 1 }
          ]
        },
        expected: [{ Customers: "Henry" }, { Customers: "Max" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All customers placed orders",
        isHidden: true,
        data: {
          Customers: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
          ],
          Orders: [
            { id: 10, customerId: 1 },
            { id: 20, customerId: 2 }
          ]
        },
        expected: []
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Orders table is completely empty",
        isHidden: true,
        data: {
          Customers: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
          ],
          Orders: []
        },
        expected: [{ Customers: "Alice" }, { Customers: "Bob" }]
      }
    ]
  },
  {
    id: "sql-008",
    title: "Rank Scores (Dense Rank)",
    difficulty: "Medium",
    duration: 15,
    category: "WINDOW FUNCTIONS & DENSE_RANK",
    tableSchema: [
      {
        name: "Scores",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "score", type: "REAL", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the rank of the scores. The scores should be ranked from highest to lowest with no gaps in ranking values (Dense Rank).",
    problem: `Write a SQL query to rank the scores from highest to lowest.

### Ranking Rules:
- The scores should be ranked from the highest to the lowest.
- If there is a tie between two scores, both should have the same ranking.
- After a tie, the next ranking number should be the next consecutive integer value (i.e. there should be no holes between ranks, **DENSE_RANK**).
- Return the columns: **score**, **rank**.
- Return the result table ordered by **score DESC**.`,
    notes: [
      "Use `DENSE_RANK() OVER (ORDER BY score DESC)` as `rank`.",
      "The query must return `score` and `rank` ordered by score descending."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores
ORDER BY score DESC;`,
    solution: `SELECT 
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores
ORDER BY score DESC;`,
    explanation: `\`DENSE_RANK() OVER (ORDER BY score DESC)\` assigns sequential rank integers without skipping any rank numbers when tied values occur.`,
    expectedColumns: ["score", "rank"],
    orderSensitive: true,
    examples: [
      {
        title: "Example 1 (Tied scores sharing ranks)",
        input: {
          Scores: [
            { id: 1, score: 3.50 },
            { id: 2, score: 3.65 },
            { id: 3, score: 4.00 },
            { id: 4, score: 3.85 },
            { id: 5, score: 4.00 },
            { id: 6, score: 3.65 }
          ]
        },
        output: [
          { score: 4.00, rank: 1 },
          { score: 4.00, rank: 1 },
          { score: 3.85, rank: 2 },
          { score: 3.65, rank: 3 },
          { score: 3.65, rank: 3 },
          { score: 3.50, rank: 4 }
        ],
        explanation: "Rank 1 is shared by 4.00, rank 2 is 3.85, rank 3 is shared by 3.65, rank 4 is 3.50."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Scores with multiple ties",
        isHidden: false,
        data: {
          Scores: [
            { id: 1, score: 3.50 },
            { id: 2, score: 3.65 },
            { id: 3, score: 4.00 },
            { id: 4, score: 3.85 },
            { id: 5, score: 4.00 },
            { id: 6, score: 3.65 }
          ]
        },
        expected: [
          { score: 4.00, rank: 1 },
          { score: 4.00, rank: 1 },
          { score: 3.85, rank: 2 },
          { score: 3.65, rank: 3 },
          { score: 3.65, rank: 3 },
          { score: 3.50, rank: 4 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single score record",
        isHidden: true,
        data: {
          Scores: [{ id: 1, score: 5.0 }]
        },
        expected: [{ score: 5.0, rank: 1 }]
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — All scores identical",
        isHidden: true,
        data: {
          Scores: [
            { id: 1, score: 3.0 },
            { id: 2, score: 3.0 },
            { id: 3, score: 3.0 }
          ]
        },
        expected: [
          { score: 3.0, rank: 1 },
          { score: 3.0, rank: 1 },
          { score: 3.0, rank: 1 }
        ]
      }
    ]
  },
  {
    id: "sql-009",
    title: "Department Highest Salary",
    difficulty: "Medium",
    duration: 15,
    category: "JOIN & SUBQUERY",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false },
          { name: "departmentId", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Department",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find employees who have the highest salary in each of the departments. Return the Department, Employee, and Salary columns.",
    problem: `Write a SQL query to find employees who have the highest salary in each of the departments.

### Important Requirements:
- Return columns: **Department**, **Employee**, **Salary**.
- If multiple employees in the same department share the highest salary, all of them must be included.
- Return the result table in any order.`,
    notes: [
      "Find the max salary per departmentId using `(departmentId, salary) IN (SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentId)`.",
      "Join with Department to obtain the department name."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
-- Add filter for highest salary per department
;`,
    solution: `SELECT 
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (e.departmentId, e.salary) IN (
    SELECT departmentId, MAX(salary)
    FROM Employee
    GROUP BY departmentId
);`,
    explanation: `We group employees by \`departmentId\` to identify the maximum salary in each department. We then filter the employees whose \`(departmentId, salary)\` tuple matches the departmental max.`,
    expectedColumns: ["Department", "Employee", "Salary"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (IT and Sales top earners)",
        input: {
          Employee: [
            { id: 1, name: "Joe", salary: 70000, departmentId: 1 },
            { id: 2, name: "Jim", salary: 90000, departmentId: 1 },
            { id: 3, name: "Henry", salary: 80000, departmentId: 2 },
            { id: 4, name: "Sam", salary: 60000, departmentId: 2 },
            { id: 5, name: "Max", salary: 90000, departmentId: 1 }
          ],
          Department: [
            { id: 1, name: "IT" },
            { id: 2, name: "Sales" }
          ]
        },
        output: [
          { Department: "IT", Employee: "Jim", Salary: 90000 },
          { Department: "IT", Employee: "Max", Salary: 90000 },
          { Department: "Sales", Employee: "Henry", Salary: 80000 }
        ],
        explanation: "Jim and Max both earn 90000 in IT. Henry earns 80000 in Sales."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — IT and Sales departments",
        isHidden: false,
        data: {
          Employee: [
            { id: 1, name: "Joe", salary: 70000, departmentId: 1 },
            { id: 2, name: "Jim", salary: 90000, departmentId: 1 },
            { id: 3, name: "Henry", salary: 80000, departmentId: 2 },
            { id: 4, name: "Sam", salary: 60000, departmentId: 2 },
            { id: 5, name: "Max", salary: 90000, departmentId: 1 }
          ],
          Department: [
            { id: 1, name: "IT" },
            { id: 2, name: "Sales" }
          ]
        },
        expected: [
          { Department: "IT", Employee: "Jim", Salary: 90000 },
          { Department: "IT", Employee: "Max", Salary: 90000 },
          { Department: "Sales", Employee: "Henry", Salary: 80000 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single employee per department",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, name: "Alice", salary: 50000, departmentId: 1 }
          ],
          Department: [
            { id: 1, name: "HR" }
          ]
        },
        expected: [
          { Department: "HR", Employee: "Alice", Salary: 50000 }
        ]
      }
    ]
  },
  {
    id: "sql-010",
    title: "Consecutive Numbers",
    difficulty: "Medium",
    duration: 15,
    category: "SELF JOIN / LAG",
    tableSchema: [
      {
        name: "Logs",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "num", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find all numbers that appear at least three times consecutively in the Logs table.",
    problem: `Write a SQL query to find all numbers that appear at least **three times consecutively**.

### Important Requirements:
- Return the result column named **ConsecutiveNums**.
- The result must contain distinct numbers only.
- Return the result table in any order.`,
    notes: [
      "Join Logs table with itself: `Logs l1 JOIN Logs l2 ON l1.id = l2.id - 1 JOIN Logs l3 ON l1.id = l3.id - 2`.",
      "Filter with `WHERE l1.num = l2.num AND l2.num = l3.num`."
    ],
    starterCode: `-- Write your SQL query below
SELECT DISTINCT
    l1.num AS ConsecutiveNums
FROM Logs l1
-- Join consecutive logs
;`,
    solution: `SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs l1
JOIN Logs l2 ON l1.id = l2.id - 1
JOIN Logs l3 ON l1.id = l3.id - 2
WHERE l1.num = l2.num AND l2.num = l3.num;`,
    explanation: `By joining \`Logs\` on sequential IDs \`l1.id = l2.id - 1 = l3.id - 2\`, we check if \`l1.num = l2.num = l3.num\`. \`DISTINCT\` ensures repeated sequences are reported once.`,
    expectedColumns: ["ConsecutiveNums"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (1 appears 3 times consecutively)",
        input: {
          Logs: [
            { id: 1, num: 1 },
            { id: 2, num: 1 },
            { id: 3, num: 1 },
            { id: 4, num: 2 },
            { id: 5, num: 1 },
            { id: 6, num: 2 },
            { id: 7, num: 2 }
          ]
        },
        output: [{ ConsecutiveNums: 1 }],
        explanation: "1 is the only number that appears consecutively for at least three times (id 1, 2, 3)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Consecutive 1s",
        isHidden: false,
        data: {
          Logs: [
            { id: 1, num: 1 },
            { id: 2, num: 1 },
            { id: 3, num: 1 },
            { id: 4, num: 2 },
            { id: 5, num: 1 },
            { id: 6, num: 2 },
            { id: 7, num: 2 }
          ]
        },
        expected: [{ ConsecutiveNums: 1 }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — No consecutive three numbers",
        isHidden: true,
        data: {
          Logs: [
            { id: 1, num: 1 },
            { id: 2, num: 2 },
            { id: 3, num: 1 },
            { id: 4, num: 2 }
          ]
        },
        expected: []
      },
      {
        id: "test-3",
        name: "Hidden Test Case 2 — Multiple distinct consecutive sequences",
        isHidden: true,
        data: {
          Logs: [
            { id: 1, num: 3 },
            { id: 2, num: 3 },
            { id: 3, num: 3 },
            { id: 4, num: 5 },
            { id: 5, num: 5 },
            { id: 6, num: 5 }
          ]
        },
        expected: [{ ConsecutiveNums: 3 }, { ConsecutiveNums: 5 }]
      }
    ]
  },
  {
    id: "sql-011",
    title: "Rising Temperature",
    difficulty: "Easy",
    duration: 15,
    category: "DATE FUNCTIONS & SELF JOIN",
    tableSchema: [
      {
        name: "Weather",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "recordDate", type: "TEXT", primaryKey: false },
          { name: "temperature", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find all dates' id with higher temperatures compared to its previous dates (yesterday).",
    problem: `Write a SQL query to find all dates' \`id\` with higher temperatures compared to its previous dates (yesterday).

### Important Requirements:
- Return the column **id**.
- The comparison must be strictly between consecutive dates (\`recordDate = yesterday\`).
- Return the result table in any order.`,
    notes: [
      "In SQLite, use `julianday(w1.recordDate) - julianday(w2.recordDate) = 1` or `date(w1.recordDate, '-1 day') = w2.recordDate`.",
      "Filter for `w1.temperature > w2.temperature`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    w1.id
FROM Weather w1
JOIN Weather w2 ON date(w1.recordDate, '-1 day') = w2.recordDate
WHERE w1.temperature > w2.temperature;`,
    solution: `SELECT w1.id
FROM Weather w1
JOIN Weather w2 ON date(w1.recordDate, '-1 day') = w2.recordDate
WHERE w1.temperature > w2.temperature;`,
    explanation: `We join \`Weather\` with itself where \`w2\` represents the day immediately prior (\`date(w1.recordDate, '-1 day') = w2.recordDate\`) and filter for \`w1.temperature > w2.temperature\`.`,
    expectedColumns: ["id"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Day 2 and Day 4 warmer than previous day)",
        input: {
          Weather: [
            { id: 1, recordDate: "2015-01-01", temperature: 10 },
            { id: 2, recordDate: "2015-01-02", temperature: 25 },
            { id: 3, recordDate: "2015-01-03", temperature: 20 },
            { id: 4, recordDate: "2015-01-04", temperature: 30 }
          ]
        },
        output: [
          { id: 2 },
          { id: 4 }
        ],
        explanation: "2015-01-02 (25) > 2015-01-01 (10). 2015-01-04 (30) > 2015-01-03 (20)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Consecutive calendar days",
        isHidden: false,
        data: {
          Weather: [
            { id: 1, recordDate: "2015-01-01", temperature: 10 },
            { id: 2, recordDate: "2015-01-02", temperature: 25 },
            { id: 3, recordDate: "2015-01-03", temperature: 20 },
            { id: 4, recordDate: "2015-01-04", temperature: 30 }
          ]
        },
        expected: [{ id: 2 }, { id: 4 }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Temperatures dropping continuously",
        isHidden: true,
        data: {
          Weather: [
            { id: 1, recordDate: "2020-05-01", temperature: 40 },
            { id: 2, recordDate: "2020-05-02", temperature: 35 },
            { id: 3, recordDate: "2020-05-03", temperature: 30 }
          ]
        },
        expected: []
      }
    ]
  },
  {
    id: "sql-012",
    title: "Game Play Analysis I (First Login Date)",
    difficulty: "Easy",
    duration: 15,
    category: "GROUP BY & AGGREGATE",
    tableSchema: [
      {
        name: "Activity",
        columns: [
          { name: "player_id", type: "INTEGER", primaryKey: false },
          { name: "device_id", type: "INTEGER", primaryKey: false },
          { name: "event_date", type: "TEXT", primaryKey: false },
          { name: "games_played", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Write a SQL query to report the first login date for each player. Return player_id and first_login.",
    problem: `Write a SQL query to report the **first login date** for each player.

### Important Requirements:
- Return columns: **player_id**, **first_login**.
- The result table should report the earliest \`event_date\` for every \`player_id\`.
- Return the result in any order.`,
    notes: [
      "Use `GROUP BY player_id` and `MIN(event_date) AS first_login`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    player_id,
    MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;`,
    solution: `SELECT 
    player_id,
    MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;`,
    explanation: `Grouping by \`player_id\` and applying \`MIN(event_date)\` selects each player's earliest login date.`,
    expectedColumns: ["player_id", "first_login"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Players 1, 2, 3 earliest login)",
        input: {
          Activity: [
            { player_id: 1, device_id: 2, event_date: "2016-03-01", games_played: 5 },
            { player_id: 1, device_id: 2, event_date: "2016-05-02", games_played: 6 },
            { player_id: 2, device_id: 3, event_date: "2017-06-25", games_played: 1 },
            { player_id: 3, device_id: 1, event_date: "2016-03-02", games_played: 0 },
            { player_id: 3, device_id: 4, event_date: "2018-07-03", games_played: 5 }
          ]
        },
        output: [
          { player_id: 1, first_login: "2016-03-01" },
          { player_id: 2, first_login: "2017-06-25" },
          { player_id: 3, first_login: "2016-03-02" }
        ],
        explanation: "Player 1 first logged in on 2016-03-01. Player 2 on 2017-06-25. Player 3 on 2016-03-02."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Multi-player activity log",
        isHidden: false,
        data: {
          Activity: [
            { player_id: 1, device_id: 2, event_date: "2016-03-01", games_played: 5 },
            { player_id: 1, device_id: 2, event_date: "2016-05-02", games_played: 6 },
            { player_id: 2, device_id: 3, event_date: "2017-06-25", games_played: 1 },
            { player_id: 3, device_id: 1, event_date: "2016-03-02", games_played: 0 },
            { player_id: 3, device_id: 4, event_date: "2018-07-03", games_played: 5 }
          ]
        },
        expected: [
          { player_id: 1, first_login: "2016-03-01" },
          { player_id: 2, first_login: "2017-06-25" },
          { player_id: 3, first_login: "2016-03-02" }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single player with multiple logins",
        isHidden: true,
        data: {
          Activity: [
            { player_id: 10, device_id: 1, event_date: "2021-01-15", games_played: 2 },
            { player_id: 10, device_id: 1, event_date: "2021-01-10", games_played: 4 }
          ]
        },
        expected: [
          { player_id: 10, first_login: "2021-01-10" }
        ]
      }
    ]
  },
  {
    id: "sql-013",
    title: "Managers with at Least 5 Direct Reports",
    difficulty: "Medium",
    duration: 15,
    category: "GROUP BY & HAVING / SUBQUERY",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "department", type: "TEXT", primaryKey: false },
          { name: "managerId", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find managers with at least five direct reports. Return the result table with column 'name'.",
    problem: `Write a SQL query to report the managers who have **at least five direct reports**.

### Important Requirements:
- Return the result column named **name**.
- No employee will be their own manager.
- Return the result in any order.`,
    notes: [
      "Find managerIds with `COUNT(*) >= 5` in `Employee` where `managerId IS NOT NULL`.",
      "Filter the manager's name using `id IN (SELECT managerId FROM Employee GROUP BY managerId HAVING COUNT(*) >= 5)`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    name
FROM Employee
WHERE id IN (
    -- Subquery for managers with >= 5 reports
    SELECT managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5
);`,
    solution: `SELECT name
FROM Employee
WHERE id IN (
    SELECT managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5
);`,
    explanation: `We group all direct reports by \`managerId\` and retain those with \`COUNT(*) >= 5\`. We then select the names of the employees whose \`id\` matches those manager IDs.`,
    expectedColumns: ["name"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (John has 5 direct reports)",
        input: {
          Employee: [
            { id: 101, name: "John", department: "A", managerId: null },
            { id: 102, name: "Dan", department: "A", managerId: 101 },
            { id: 103, name: "James", department: "A", managerId: 101 },
            { id: 104, name: "Amy", department: "A", managerId: 101 },
            { id: 105, name: "Anne", department: "A", managerId: 101 },
            { id: 106, name: "Ron", department: "B", managerId: 101 }
          ]
        },
        output: [{ name: "John" }],
        explanation: "John has 5 direct reports (Dan, James, Amy, Anne, Ron)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Manager John with 5 reports",
        isHidden: false,
        data: {
          Employee: [
            { id: 101, name: "John", department: "A", managerId: null },
            { id: 102, name: "Dan", department: "A", managerId: 101 },
            { id: 103, name: "James", department: "A", managerId: 101 },
            { id: 104, name: "Amy", department: "A", managerId: 101 },
            { id: 105, name: "Anne", department: "A", managerId: 101 },
            { id: 106, name: "Ron", department: "B", managerId: 101 }
          ]
        },
        expected: [{ name: "John" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Manager with exactly 4 reports (Must Exclude)",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, name: "Boss", department: "Sales", managerId: null },
            { id: 2, name: "E1", department: "Sales", managerId: 1 },
            { id: 3, name: "E2", department: "Sales", managerId: 1 },
            { id: 4, name: "E3", department: "Sales", managerId: 1 },
            { id: 5, name: "E4", department: "Sales", managerId: 1 }
          ]
        },
        expected: []
      }
    ]
  },
  {
    id: "sql-014",
    title: "Employee Bonus",
    difficulty: "Easy",
    duration: 15,
    category: "LEFT JOIN & NULL FILTERING",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "empId", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "supervisor", type: "INTEGER", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Bonus",
        columns: [
          { name: "empId", type: "INTEGER", primaryKey: true },
          { name: "bonus", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Report the name and bonus amount of each employee with a bonus less than 1000 or no bonus at all.",
    problem: `Write a SQL query to report the **name** and **bonus** amount of each employee with a bonus **less than 1000** (or who received **no bonus**).

### Important Requirements:
- Return columns: **name**, **bonus**.
- If an employee has no bonus record, \`bonus\` should be returned as **null**.
- Return the result table in any order.`,
    notes: [
      "Use `LEFT JOIN Bonus ON Employee.empId = Bonus.empId`.",
      "Filter with `WHERE Bonus.bonus < 1000 OR Bonus.bonus IS NULL`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    e.name,
    b.bonus
FROM Employee e
LEFT JOIN Bonus b ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;`,
    solution: `SELECT 
    e.name,
    b.bonus
FROM Employee e
LEFT JOIN Bonus b ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;`,
    explanation: `We perform a \`LEFT JOIN\` so employees without a bonus record remain in the set with \`bonus\` as \`NULL\`. The condition \`b.bonus < 1000 OR b.bonus IS NULL\` filters for employees with low or missing bonus amounts.`,
    expectedColumns: ["name", "bonus"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Employees Brad, John, Dan)",
        input: {
          Employee: [
            { empId: 3, name: "Brad", supervisor: null, salary: 4000 },
            { empId: 1, name: "John", supervisor: 3, salary: 1000 },
            { empId: 2, name: "Dan", supervisor: 3, salary: 2000 },
            { empId: 4, name: "Thomas", supervisor: 3, salary: 4000 }
          ],
          Bonus: [
            { empId: 2, bonus: 500 },
            { empId: 4, bonus: 2000 }
          ]
        },
        output: [
          { name: "Brad", bonus: null },
          { name: "John", bonus: null },
          { name: "Dan", bonus: 500 }
        ],
        explanation: "Brad and John have no bonus (null). Dan has bonus 500 (< 1000). Thomas has bonus 2000 (>= 1000) so excluded."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Mix of low, high, and null bonuses",
        isHidden: false,
        data: {
          Employee: [
            { empId: 3, name: "Brad", supervisor: null, salary: 4000 },
            { empId: 1, name: "John", supervisor: 3, salary: 1000 },
            { empId: 2, name: "Dan", supervisor: 3, salary: 2000 },
            { empId: 4, name: "Thomas", supervisor: 3, salary: 4000 }
          ],
          Bonus: [
            { empId: 2, bonus: 500 },
            { empId: 4, bonus: 2000 }
          ]
        },
        expected: [
          { name: "Brad", bonus: null },
          { name: "John", bonus: null },
          { name: "Dan", bonus: 500 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All bonuses >= 1000",
        isHidden: true,
        data: {
          Employee: [
            { empId: 1, name: "Rich", supervisor: null, salary: 8000 }
          ],
          Bonus: [
            { empId: 1, bonus: 5000 }
          ]
        },
        expected: []
      }
    ]
  },
  {
    id: "sql-015",
    title: "Find Customer Referee",
    difficulty: "Easy",
    duration: 15,
    category: "WHERE & NULL HANDLING",
    tableSchema: [
      {
        name: "Customer",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "referee_id", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the names of the customer that are not referred by the customer with id = 2.",
    problem: `Write a SQL query to report the names of the customer that are **not referred by the customer with id = 2**.

### Important Requirements:
- Return column: **name**.
- Customers with \`referee_id IS NULL\` must be included in the result.
- Return the result table in any order.`,
    notes: [
      "Remember that `referee_id != 2` alone will evaluate to UNKNOWN for NULL values.",
      "Always specify `WHERE referee_id != 2 OR referee_id IS NULL`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;`,
    solution: `SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;`,
    explanation: `In SQL three-valued logic, comparisons with NULL evaluate to UNKNOWN. To include customers who have no referee, we explicitly write \`WHERE referee_id != 2 OR referee_id IS NULL\`.`,
    expectedColumns: ["name"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Filtering referee_id = 2)",
        input: {
          Customer: [
            { id: 1, name: "Will", referee_id: null },
            { id: 2, name: "Jane", referee_id: null },
            { id: 3, name: "Alex", referee_id: 2 },
            { id: 4, name: "Bill", referee_id: null },
            { id: 5, name: "Zack", referee_id: 1 },
            { id: 6, name: "Mark", referee_id: 2 }
          ]
        },
        output: [
          { name: "Will" },
          { name: "Jane" },
          { name: "Bill" },
          { name: "Zack" }
        ],
        explanation: "Alex and Mark have referee_id = 2 and are excluded. Will, Jane, Bill (null) and Zack (1) are included."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Customers with mix of referee IDs",
        isHidden: false,
        data: {
          Customer: [
            { id: 1, name: "Will", referee_id: null },
            { id: 2, name: "Jane", referee_id: null },
            { id: 3, name: "Alex", referee_id: 2 },
            { id: 4, name: "Bill", referee_id: null },
            { id: 5, name: "Zack", referee_id: 1 },
            { id: 6, name: "Mark", referee_id: 2 }
          ]
        },
        expected: [
          { name: "Will" },
          { name: "Jane" },
          { name: "Bill" },
          { name: "Zack" }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All customers referred by id 2",
        isHidden: true,
        data: {
          Customer: [
            { id: 1, name: "Alice", referee_id: 2 },
            { id: 2, name: "Bob", referee_id: 2 }
          ]
        },
        expected: []
      }
    ]
  },
  {
    id: "sql-016",
    title: "Customer Placing Largest Number of Orders",
    difficulty: "Easy",
    duration: 15,
    category: "GROUP BY & LIMIT",
    tableSchema: [
      {
        name: "Orders",
        columns: [
          { name: "order_number", type: "INTEGER", primaryKey: true },
          { name: "customer_number", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the customer_number for the customer who has placed the largest number of orders.",
    problem: `Write a SQL query to find the **customer_number** for the customer who has placed the **largest number of orders**.

### Important Requirements:
- Return column: **customer_number**.
- The test cases are generated so that exactly one customer placed more orders than anyone else.`,
    notes: [
      "Use `GROUP BY customer_number ORDER BY COUNT(*) DESC LIMIT 1`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;`,
    solution: `SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;`,
    explanation: `Grouping by \`customer_number\` counts total orders per customer. Ordering descending by count and applying \`LIMIT 1\` yields the top customer.`,
    expectedColumns: ["customer_number"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Customer 3 placed 2 orders)",
        input: {
          Orders: [
            { order_number: 1, customer_number: 1 },
            { order_number: 2, customer_number: 2 },
            { order_number: 3, customer_number: 3 },
            { order_number: 4, customer_number: 3 }
          ]
        },
        output: [{ customer_number: 3 }],
        explanation: "Customer 3 placed 2 orders (orders 3 and 4), which is more than customer 1 or 2."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Customer 3 has most orders",
        isHidden: false,
        data: {
          Orders: [
            { order_number: 1, customer_number: 1 },
            { order_number: 2, customer_number: 2 },
            { order_number: 3, customer_number: 3 },
            { order_number: 4, customer_number: 3 }
          ]
        },
        expected: [{ customer_number: 3 }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single order in table",
        isHidden: true,
        data: {
          Orders: [
            { order_number: 100, customer_number: 42 }
          ]
        },
        expected: [{ customer_number: 42 }]
      }
    ]
  },
  {
    id: "sql-017",
    title: "Big Countries",
    difficulty: "Easy",
    duration: 15,
    category: "WHERE CLAUSE & OR",
    tableSchema: [
      {
        name: "World",
        columns: [
          { name: "name", type: "TEXT", primaryKey: true },
          { name: "continent", type: "TEXT", primaryKey: false },
          { name: "area", type: "INTEGER", primaryKey: false },
          { name: "population", type: "INTEGER", primaryKey: false },
          { name: "gdp", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the name, population, and area of the big countries. A country is big if it has an area of at least 3,000,000 sq km or a population of at least 25,000,000.",
    problem: `A country is **big** if:
- It has an area of at least three million (i.e., \`area >= 3000000\`), or
- It has a population of at least twenty-five million (i.e., \`population >= 25000000\`).

Write a SQL query to report the **name**, **population**, and **area** of the big countries.

### Important Requirements:
- Return columns: **name**, **population**, **area**.
- Return the result table in any order.`,
    notes: [
      "Use `WHERE area >= 3000000 OR population >= 25000000`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    name,
    population,
    area
FROM World
WHERE area >= 3000000 OR population >= 25000000;`,
    solution: `SELECT 
    name,
    population,
    area
FROM World
WHERE area >= 3000000 OR population >= 25000000;`,
    explanation: `We select the three requested columns and filter using the disjunction \`WHERE area >= 3000000 OR population >= 25000000\`.`,
    expectedColumns: ["name", "population", "area"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Afghanistan and Algeria qualify)",
        input: {
          World: [
            { name: "Afghanistan", continent: "Asia", area: 652230, population: 25500100, gdp: 20343000 },
            { name: "Albania", continent: "Europe", area: 28748, population: 2831741, gdp: 12960000 },
            { name: "Algeria", continent: "Africa", area: 2381741, population: 37100000, gdp: 188681000 }
          ]
        },
        output: [
          { name: "Afghanistan", population: 25500100, area: 652230 },
          { name: "Algeria", population: 37100000, area: 2381741 }
        ],
        explanation: "Afghanistan has population >= 25M. Algeria has population >= 25M. Albania meets neither criterion."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Nations list",
        isHidden: false,
        data: {
          World: [
            { name: "Afghanistan", continent: "Asia", area: 652230, population: 25500100, gdp: 20343000 },
            { name: "Albania", continent: "Europe", area: 28748, population: 2831741, gdp: 12960000 },
            { name: "Algeria", continent: "Africa", area: 2381741, population: 37100000, gdp: 188681000 }
          ]
        },
        expected: [
          { name: "Afghanistan", population: 25500100, area: 652230 },
          { name: "Algeria", population: 37100000, area: 2381741 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Big by area only",
        isHidden: true,
        data: {
          World: [
            { name: "Canada", continent: "North America", area: 9984670, population: 38000000, gdp: 1643000000 },
            { name: "SmallLand", continent: "Asia", area: 500, population: 1000, gdp: 50000 }
          ]
        },
        expected: [
          { name: "Canada", population: 38000000, area: 9984670 }
        ]
      }
    ]
  },
  {
    id: "sql-018",
    title: "Swap Salary (CASE Statement)",
    difficulty: "Easy",
    duration: 15,
    category: "CASE STATEMENT",
    tableSchema: [
      {
        name: "Salary",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "sex", type: "TEXT", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Swap all 'f' and 'm' values (i.e. change all 'f' to 'm' and 'm' to 'f'). Return id, name, swapped sex, and salary.",
    problem: `Write a SQL query to swap all \`'f'\` and \`'m'\` values (i.e. change all \`'f'\` to \`'m'\` and vice versa) with a single query.

### Important Requirements:
- Return columns: **id**, **name**, **sex**, **salary**.
- If \`sex\` was \`'m'\`, it must be returned as \`'f'\`.
- If \`sex\` was \`'f'\`, it must be returned as \`'m'\`.
- Return the result in any order.`,
    notes: [
      "Use `CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END AS sex`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    id,
    name,
    CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END AS sex,
    salary
FROM Salary;`,
    solution: `SELECT 
    id,
    name,
    CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END AS sex,
    salary
FROM Salary;`,
    explanation: `A \`CASE\` expression conditionally replaces \`'m'\` with \`'f'\` and \`'f'\` with \`'m'\`.`,
    expectedColumns: ["id", "name", "sex", "salary"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Swapping sex column)",
        input: {
          Salary: [
            { id: 1, name: "A", sex: "m", salary: 2500 },
            { id: 2, name: "B", sex: "f", salary: 1500 },
            { id: 3, name: "C", sex: "m", salary: 5500 },
            { id: 4, name: "D", sex: "f", salary: 500 }
          ]
        },
        output: [
          { id: 1, name: "A", sex: "f", salary: 2500 },
          { id: 2, name: "B", sex: "m", salary: 1500 },
          { id: 3, name: "C", sex: "f", salary: 5500 },
          { id: 4, name: "D", sex: "m", salary: 500 }
        ],
        explanation: "All 'm' are converted to 'f', and all 'f' are converted to 'm'."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Mixed genders swap",
        isHidden: false,
        data: {
          Salary: [
            { id: 1, name: "A", sex: "m", salary: 2500 },
            { id: 2, name: "B", sex: "f", salary: 1500 },
            { id: 3, name: "C", sex: "m", salary: 5500 },
            { id: 4, name: "D", sex: "f", salary: 500 }
          ]
        },
        expected: [
          { id: 1, name: "A", sex: "f", salary: 2500 },
          { id: 2, name: "B", sex: "m", salary: 1500 },
          { id: 3, name: "C", sex: "f", salary: 5500 },
          { id: 4, name: "D", sex: "m", salary: 500 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — All male employees",
        isHidden: true,
        data: {
          Salary: [
            { id: 1, name: "Tom", sex: "m", salary: 3000 },
            { id: 2, name: "Jerry", sex: "m", salary: 2000 }
          ]
        },
        expected: [
          { id: 1, name: "Tom", sex: "f", salary: 3000 },
          { id: 2, name: "Jerry", sex: "f", salary: 2000 }
        ]
      }
    ]
  },
  {
    id: "sql-019",
    title: "Customer Total Spending (3-Table Join)",
    difficulty: "Medium",
    duration: 15,
    category: "3-TABLE JOIN & AGGREGATION",
    tableSchema: [
      {
        name: "Customers",
        columns: [
          { name: "customer_id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Orders",
        columns: [
          { name: "order_id", type: "INTEGER", primaryKey: true },
          { name: "customer_id", type: "INTEGER", primaryKey: false },
          { name: "product_id", type: "INTEGER", primaryKey: false },
          { name: "quantity", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Products",
        columns: [
          { name: "product_id", type: "INTEGER", primaryKey: true },
          { name: "product_name", type: "TEXT", primaryKey: false },
          { name: "price", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Calculate total spending and total order count per customer by joining Customers, Orders, and Products tables. Include customers with 0 orders.",
    problem: `Write a SQL query to calculate the **total spending** and **total orders count** for each customer.

### Requirements:
- Merge 3 tables: **Customers**, **Orders**, and **Products**.
- Return columns: **customer_name**, **total_spent**, **orders_count**.
- For customers who have not placed any orders, \`total_spent\` must be **0** and \`orders_count\` must be **0**.
- Return the result in any order.`,
    notes: [
      "Use `LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id` followed by `LEFT JOIN Products ON Orders.product_id = Products.product_id`.",
      "Use `COALESCE(SUM(Orders.quantity * Products.price), 0) AS total_spent` and `COUNT(Orders.order_id) AS orders_count`.",
      "Group by `Customers.customer_id, Customers.name`."
    ],
    starterCode: `-- Write your SQL query below (Merging Customers, Orders, Products)
SELECT 
    c.name AS customer_name,
    COALESCE(SUM(o.quantity * p.price), 0) AS total_spent,
    COUNT(o.order_id) AS orders_count
FROM Customers c
-- Add LEFT JOINs and GROUP BY
GROUP BY c.customer_id, c.name;`,
    solution: `SELECT 
    c.name AS customer_name,
    COALESCE(SUM(o.quantity * p.price), 0) AS total_spent,
    COUNT(o.order_id) AS orders_count
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Products p ON o.product_id = p.product_id
GROUP BY c.customer_id, c.name;`,
    explanation: `We join Customers with Orders using LEFT JOIN to retain customers with zero purchases, and then join with Products to retrieve product prices. We use \`COALESCE(SUM(...), 0)\` to return 0 instead of NULL for customers with no orders.`,
    expectedColumns: ["customer_name", "total_spent", "orders_count"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Alice, Bob, and Charlie with zero orders)",
        input: {
          Customers: [
            { customer_id: 1, name: "Alice" },
            { customer_id: 2, name: "Bob" },
            { customer_id: 3, name: "Charlie" }
          ],
          Orders: [
            { order_id: 101, customer_id: 1, product_id: 1, quantity: 2 },
            { order_id: 102, customer_id: 1, product_id: 2, quantity: 1 },
            { order_id: 103, customer_id: 2, product_id: 1, quantity: 3 }
          ],
          Products: [
            { product_id: 1, product_name: "Keyboard", price: 50 },
            { product_id: 2, product_name: "Mouse", price: 20 }
          ]
        },
        output: [
          { customer_name: "Alice", total_spent: 120, orders_count: 2 },
          { customer_name: "Bob", total_spent: 150, orders_count: 1 },
          { customer_name: "Charlie", total_spent: 0, orders_count: 0 }
        ],
        explanation: "Alice spent 2*50 + 1*20 = 120 across 2 orders. Bob spent 3*50 = 150 across 1 order. Charlie has 0 orders."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Multi-table revenue calculation",
        isHidden: false,
        data: {
          Customers: [
            { customer_id: 1, name: "Alice" },
            { customer_id: 2, name: "Bob" },
            { customer_id: 3, name: "Charlie" }
          ],
          Orders: [
            { order_id: 101, customer_id: 1, product_id: 1, quantity: 2 },
            { order_id: 102, customer_id: 1, product_id: 2, quantity: 1 },
            { order_id: 103, customer_id: 2, product_id: 1, quantity: 3 }
          ],
          Products: [
            { product_id: 1, product_name: "Keyboard", price: 50 },
            { product_id: 2, product_name: "Mouse", price: 20 }
          ]
        },
        expected: [
          { customer_name: "Alice", total_spent: 120, orders_count: 2 },
          { customer_name: "Bob", total_spent: 150, orders_count: 1 },
          { customer_name: "Charlie", total_spent: 0, orders_count: 0 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single customer with no orders",
        isHidden: true,
        data: {
          Customers: [{ customer_id: 99, name: "David" }],
          Orders: [],
          Products: [{ product_id: 1, product_name: "Monitor", price: 200 }]
        },
        expected: [
          { customer_name: "David", total_spent: 0, orders_count: 0 }
        ]
      }
    ]
  },
  {
    id: "sql-020",
    title: "Sales Person Without Orders in 'RED' Company (3 Tables)",
    difficulty: "Medium",
    duration: 15,
    category: "3-TABLE JOIN & SUBQUERY",
    tableSchema: [
      {
        name: "SalesPerson",
        columns: [
          { name: "sales_id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false },
          { name: "commission_rate", type: "INTEGER", primaryKey: false },
          { name: "hire_date", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Company",
        columns: [
          { name: "com_id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "city", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Orders",
        columns: [
          { name: "order_id", type: "INTEGER", primaryKey: true },
          { name: "order_date", type: "TEXT", primaryKey: false },
          { name: "com_id", type: "INTEGER", primaryKey: false },
          { name: "sales_id", type: "INTEGER", primaryKey: false },
          { name: "amount", type: "INTEGER", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Report the names of all the salespersons who did not have any orders related to the company with the name 'RED'.",
    problem: `Write a SQL query to report the names of all the salespersons who **did not have any orders related to the company with the name "RED"**.

### Important Requirements:
- Merge / inspect 3 tables: **SalesPerson**, **Company**, and **Orders**.
- Return the result column named **name**.
- Return the result in any order.`,
    notes: [
      "Join `Orders` and `Company` where `Company.name = 'RED'` to find all `sales_id` that sold to RED.",
      "Select salespersons whose `sales_id NOT IN (...)`."
    ],
    starterCode: `-- Write your SQL query below
SELECT 
    s.name
FROM SalesPerson s
WHERE s.sales_id NOT IN (
    -- Subquery joining Orders and Company for 'RED'
    SELECT o.sales_id
    FROM Orders o
    JOIN Company c ON o.com_id = c.com_id
    WHERE c.name = 'RED'
);`,
    solution: `SELECT s.name
FROM SalesPerson s
WHERE s.sales_id NOT IN (
    SELECT o.sales_id
    FROM Orders o
    JOIN Company c ON o.com_id = c.com_id
    WHERE c.name = 'RED'
);`,
    explanation: `We join \`Orders\` with \`Company\` to extract all salesperson IDs associated with company 'RED'. Then we query \`SalesPerson\` using \`NOT IN\` to identify everyone who never dealt with 'RED'.`,
    expectedColumns: ["name"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Amy, Mark, Alex never sold to RED)",
        input: {
          SalesPerson: [
            { sales_id: 1, name: "John", salary: 100000, commission_rate: 6, hire_date: "4/1/2006" },
            { sales_id: 2, name: "Amy", salary: 12000, commission_rate: 5, hire_date: "5/1/2010" },
            { sales_id: 3, name: "Mark", salary: 65000, commission_rate: 12, hire_date: "12/25/2008" },
            { sales_id: 4, name: "Pam", salary: 25000, commission_rate: 25, hire_date: "1/1/2005" },
            { sales_id: 5, name: "Alex", salary: 50000, commission_rate: 10, hire_date: "2/3/2007" }
          ],
          Company: [
            { com_id: 1, name: "RED", city: "Boston" },
            { com_id: 2, name: "ORANGE", city: "New York" },
            { com_id: 3, name: "YELLOW", city: "Chicago" }
          ],
          Orders: [
            { order_id: 1, order_date: "1/1/2014", com_id: 3, sales_id: 4, amount: 10000 },
            { order_id: 2, order_date: "2/1/2014", com_id: 4, sales_id: 5, amount: 5000 },
            { order_id: 3, order_date: "3/1/2014", com_id: 1, sales_id: 1, amount: 50000 },
            { order_id: 4, order_date: "4/1/2014", com_id: 1, sales_id: 4, amount: 25000 }
          ]
        },
        output: [
          { name: "Amy" },
          { name: "Mark" },
          { name: "Alex" }
        ],
        explanation: "John (order 3) and Pam (order 4) had orders for company RED. Amy, Mark, and Alex did not."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — 3-table company order filtering",
        isHidden: false,
        data: {
          SalesPerson: [
            { sales_id: 1, name: "John", salary: 100000, commission_rate: 6, hire_date: "4/1/2006" },
            { sales_id: 2, name: "Amy", salary: 12000, commission_rate: 5, hire_date: "5/1/2010" },
            { sales_id: 3, name: "Mark", salary: 65000, commission_rate: 12, hire_date: "12/25/2008" },
            { sales_id: 4, name: "Pam", salary: 25000, commission_rate: 25, hire_date: "1/1/2005" },
            { sales_id: 5, name: "Alex", salary: 50000, commission_rate: 10, hire_date: "2/3/2007" }
          ],
          Company: [
            { com_id: 1, name: "RED", city: "Boston" },
            { com_id: 2, name: "ORANGE", city: "New York" },
            { com_id: 3, name: "YELLOW", city: "Chicago" }
          ],
          Orders: [
            { order_id: 1, order_date: "1/1/2014", com_id: 3, sales_id: 4, amount: 10000 },
            { order_id: 2, order_date: "2/1/2014", com_id: 4, sales_id: 5, amount: 5000 },
            { order_id: 3, order_date: "3/1/2014", com_id: 1, sales_id: 1, amount: 50000 },
            { order_id: 4, order_date: "4/1/2014", com_id: 1, sales_id: 4, amount: 25000 }
          ]
        },
        expected: [{ name: "Amy" }, { name: "Mark" }, { name: "Alex" }]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — No orders placed to RED by anyone",
        isHidden: true,
        data: {
          SalesPerson: [
            { sales_id: 1, name: "Alice", salary: 80000, commission_rate: 10, hire_date: "2015-01-01" }
          ],
          Company: [
            { com_id: 1, name: "RED", city: "Dallas" }
          ],
          Orders: []
        },
        expected: [{ name: "Alice" }]
      }
    ]
  },
  {
    id: "sql-021",
    title: "Students and Examinations (3 Tables Cross/Left Join)",
    difficulty: "Medium",
    duration: 15,
    category: "CROSS JOIN & LEFT JOIN (3 TABLES)",
    tableSchema: [
      {
        name: "Students",
        columns: [
          { name: "student_id", type: "INTEGER", primaryKey: true },
          { name: "student_name", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Subjects",
        columns: [
          { name: "subject_name", type: "TEXT", primaryKey: true }
        ]
      },
      {
        name: "Examinations",
        columns: [
          { name: "student_id", type: "INTEGER", primaryKey: false },
          { name: "subject_name", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find the number of times each student attended each exam. Every student and subject pair must appear, with 0 for unattempted subjects.",
    problem: `Write a SQL query to find the number of times each student attended each exam.

### Important Requirements:
- Cross join **Students** and **Subjects** to create all possible pairs, then \`LEFT JOIN\` with **Examinations**.
- Return columns: **student_id**, **student_name**, **subject_name**, **attended_exams**.
- Order the result table by **student_id**, **subject_name**.`,
    notes: [
      "Use `FROM Students s CROSS JOIN Subjects sub`.",
      "Join with Examinations: `LEFT JOIN Examinations e ON s.student_id = e.student_id AND sub.subject_name = e.subject_name`.",
      "Group by `s.student_id, s.student_name, sub.subject_name` and count `COUNT(e.student_id)`."
    ],
    starterCode: `-- Write your SQL query below (Merging Students, Subjects, Examinations)
SELECT 
    s.student_id,
    s.student_name,
    sub.subject_name,
    COUNT(e.student_id) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN Examinations e 
    ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
GROUP BY s.student_id, s.student_name, sub.subject_name
ORDER BY s.student_id, sub.subject_name;`,
    solution: `SELECT 
    s.student_id,
    s.student_name,
    sub.subject_name,
    COUNT(e.student_id) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN Examinations e 
    ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
GROUP BY s.student_id, s.student_name, sub.subject_name
ORDER BY s.student_id, sub.subject_name;`,
    explanation: `\`CROSS JOIN\` guarantees that every student is paired with every available subject. \`LEFT JOIN Examinations\` matches exam attendances, and \`COUNT(e.student_id)\` counts match rows (producing 0 when unattempted).`,
    expectedColumns: ["student_id", "student_name", "subject_name", "attended_exams"],
    orderSensitive: true,
    examples: [
      {
        title: "Example 1 (Alice and Bob subject attendance matrix)",
        input: {
          Students: [
            { student_id: 1, student_name: "Alice" },
            { student_id: 2, student_name: "Bob" }
          ],
          Subjects: [
            { subject_name: "Math" },
            { subject_name: "Physics" }
          ],
          Examinations: [
            { student_id: 1, subject_name: "Math" },
            { student_id: 1, subject_name: "Math" },
            { student_id: 1, subject_name: "Physics" },
            { student_id: 2, subject_name: "Math" }
          ]
        },
        output: [
          { student_id: 1, student_name: "Alice", subject_name: "Math", attended_exams: 2 },
          { student_id: 1, student_name: "Alice", subject_name: "Physics", attended_exams: 1 },
          { student_id: 2, student_name: "Bob", subject_name: "Math", attended_exams: 1 },
          { student_id: 2, student_name: "Bob", subject_name: "Physics", attended_exams: 0 }
        ],
        explanation: "Alice attended Math twice and Physics once. Bob attended Math once and Physics 0 times."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Multi-student multi-subject exam count",
        isHidden: false,
        data: {
          Students: [
            { student_id: 1, student_name: "Alice" },
            { student_id: 2, student_name: "Bob" }
          ],
          Subjects: [
            { subject_name: "Math" },
            { subject_name: "Physics" }
          ],
          Examinations: [
            { student_id: 1, subject_name: "Math" },
            { student_id: 1, subject_name: "Math" },
            { student_id: 1, subject_name: "Physics" },
            { student_id: 2, subject_name: "Math" }
          ]
        },
        expected: [
          { student_id: 1, student_name: "Alice", subject_name: "Math", attended_exams: 2 },
          { student_id: 1, student_name: "Alice", subject_name: "Physics", attended_exams: 1 },
          { student_id: 2, student_name: "Bob", subject_name: "Math", attended_exams: 1 },
          { student_id: 2, student_name: "Bob", subject_name: "Physics", attended_exams: 0 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Student with 0 attendances across all subjects",
        isHidden: true,
        data: {
          Students: [{ student_id: 5, student_name: "Leo" }],
          Subjects: [{ subject_name: "Chemistry" }],
          Examinations: []
        },
        expected: [
          { student_id: 5, student_name: "Leo", subject_name: "Chemistry", attended_exams: 0 }
        ]
      }
    ]
  },
  {
    id: "sql-022",
    title: "Department Top Three Salaries (Dense Rank & Join)",
    difficulty: "Medium",
    duration: 15,
    category: "WINDOW FUNCTIONS & 2-TABLE JOIN",
    tableSchema: [
      {
        name: "Employee",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "salary", type: "INTEGER", primaryKey: false },
          { name: "departmentId", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Department",
        columns: [
          { name: "id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find employees who earn in the top three unique salaries for each department.",
    problem: `A company's executives want to see who earns the most money in each of the company's departments. A **high earner** in a department is an employee who has a salary in the **top three unique salaries** for that department.

Write a SQL query to find the employees who are high earners in each of the departments.

### Important Requirements:
- Return columns: **Department**, **Employee**, **Salary**.
- If two employees share a salary, both should be included and share that rank level.
- Return the result in any order.`,
    notes: [
      "Use `DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC)` in a CTE or subquery.",
      "Filter for `rnk <= 3`."
    ],
    starterCode: `-- Write your SQL query below
WITH RankedSalaries AS (
    SELECT 
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
    FROM Employee e
    JOIN Department d ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM RankedSalaries
WHERE rnk <= 3;`,
    solution: `WITH RankedSalaries AS (
    SELECT 
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
    FROM Employee e
    JOIN Department d ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM RankedSalaries
WHERE rnk <= 3;`,
    explanation: `We partition by department and compute \`DENSE_RANK()\` on salary descending so distinct salary values receive sequential ranks. We filter for \`rnk <= 3\`.`,
    expectedColumns: ["Department", "Employee", "Salary"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Top 3 earners per department)",
        input: {
          Employee: [
            { id: 1, name: "Joe", salary: 85000, departmentId: 1 },
            { id: 2, name: "Henry", salary: 80000, departmentId: 2 },
            { id: 3, name: "Sam", salary: 60000, departmentId: 2 },
            { id: 4, name: "Max", salary: 90000, departmentId: 1 },
            { id: 5, name: "Janet", salary: 69000, departmentId: 1 },
            { id: 6, name: "Randy", salary: 85000, departmentId: 1 },
            { id: 7, name: "Will", salary: 70000, departmentId: 1 }
          ],
          Department: [
            { id: 1, name: "IT" },
            { id: 2, name: "Sales" }
          ]
        },
        output: [
          { Department: "IT", Employee: "Max", Salary: 90000 },
          { Department: "IT", Employee: "Joe", Salary: 85000 },
          { Department: "IT", Employee: "Randy", Salary: 85000 },
          { Department: "IT", Employee: "Will", Salary: 70000 },
          { Department: "Sales", Employee: "Henry", Salary: 80000 },
          { Department: "Sales", Employee: "Sam", Salary: 60000 }
        ],
        explanation: "In IT: Max ($90k, rank 1), Joe & Randy ($85k, rank 2), Will ($70k, rank 3) are top 3. Janet ($69k, rank 4) is excluded."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Top 3 salaries in IT and Sales",
        isHidden: false,
        data: {
          Employee: [
            { id: 1, name: "Joe", salary: 85000, departmentId: 1 },
            { id: 2, name: "Henry", salary: 80000, departmentId: 2 },
            { id: 3, name: "Sam", salary: 60000, departmentId: 2 },
            { id: 4, name: "Max", salary: 90000, departmentId: 1 },
            { id: 5, name: "Janet", salary: 69000, departmentId: 1 },
            { id: 6, name: "Randy", salary: 85000, departmentId: 1 },
            { id: 7, name: "Will", salary: 70000, departmentId: 1 }
          ],
          Department: [
            { id: 1, name: "IT" },
            { id: 2, name: "Sales" }
          ]
        },
        expected: [
          { Department: "IT", Employee: "Max", Salary: 90000 },
          { Department: "IT", Employee: "Joe", Salary: 85000 },
          { Department: "IT", Employee: "Randy", Salary: 85000 },
          { Department: "IT", Employee: "Will", Salary: 70000 },
          { Department: "Sales", Employee: "Henry", Salary: 80000 },
          { Department: "Sales", Employee: "Sam", Salary: 60000 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Department with fewer than 3 employees",
        isHidden: true,
        data: {
          Employee: [
            { id: 1, name: "Alice", salary: 50000, departmentId: 10 }
          ],
          Department: [
            { id: 10, name: "Marketing" }
          ]
        },
        expected: [
          { Department: "Marketing", Employee: "Alice", Salary: 50000 }
        ]
      }
    ]
  },
  {
    id: "sql-023",
    title: "Project Employees Average Experience (3 Tables)",
    difficulty: "Medium",
    duration: 15,
    category: "3-TABLE JOIN & GROUP BY",
    tableSchema: [
      {
        name: "Project",
        columns: [
          { name: "project_id", type: "INTEGER", primaryKey: false },
          { name: "employee_id", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Employee",
        columns: [
          { name: "employee_id", type: "INTEGER", primaryKey: true },
          { name: "name", type: "TEXT", primaryKey: false },
          { name: "experience_years", type: "INTEGER", primaryKey: false },
          { name: "department_id", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Department",
        columns: [
          { name: "department_id", type: "INTEGER", primaryKey: true },
          { name: "department_name", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Report the project_id, department_name, and the average experience years of employees in that department working on each project rounded to 2 decimal places.",
    problem: `Write a SQL query that reports the **project_id**, **department_name**, and the **average experience years** of all employees in that department assigned to that project, rounded to **2 decimal places**.

### Requirements:
- Merge 3 tables: **Project**, **Employee**, and **Department**.
- Return columns: **project_id**, **department_name**, **average_years**.
- Return the result in any order.`,
    notes: [
      "Use `JOIN Employee e ON p.employee_id = e.employee_id` and `JOIN Department d ON e.department_id = d.department_id`.",
      "Use `ROUND(AVG(e.experience_years), 2) AS average_years`.",
      "Group by `p.project_id, d.department_id, d.department_name`."
    ],
    starterCode: `-- Write your SQL query below (Merging Project, Employee, Department)
SELECT 
    p.project_id,
    d.department_name,
    ROUND(AVG(e.experience_years), 2) AS average_years
FROM Project p
JOIN Employee e ON p.employee_id = e.employee_id
JOIN Department d ON e.department_id = d.department_id
GROUP BY p.project_id, d.department_id, d.department_name;`,
    solution: `SELECT 
    p.project_id,
    d.department_name,
    ROUND(AVG(e.experience_years), 2) AS average_years
FROM Project p
JOIN Employee e ON p.employee_id = e.employee_id
JOIN Department d ON e.department_id = d.department_id
GROUP BY p.project_id, d.department_id, d.department_name;`,
    explanation: `We join the bridge table \`Project\` with \`Employee\` and \`Department\`, then group by each project and department combination to calculate the average years of experience rounded to 2 decimals.`,
    expectedColumns: ["project_id", "department_name", "average_years"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Project 1 and 2 engineering experience)",
        input: {
          Project: [
            { project_id: 1, employee_id: 1 },
            { project_id: 1, employee_id: 2 },
            { project_id: 1, employee_id: 3 },
            { project_id: 2, employee_id: 1 },
            { project_id: 2, employee_id: 4 }
          ],
          Employee: [
            { employee_id: 1, name: "Khaled", experience_years: 3, department_id: 1 },
            { employee_id: 2, name: "Ali", experience_years: 2, department_id: 1 },
            { employee_id: 3, name: "John", experience_years: 1, department_id: 2 },
            { employee_id: 4, name: "Doe", experience_years: 2, department_id: 2 }
          ],
          Department: [
            { department_id: 1, department_name: "Engineering" },
            { department_id: 2, department_name: "Product" }
          ]
        },
        output: [
          { project_id: 1, department_name: "Engineering", average_years: 2.5 },
          { project_id: 1, department_name: "Product", average_years: 1.0 },
          { project_id: 2, department_name: "Engineering", average_years: 3.0 },
          { project_id: 2, department_name: "Product", average_years: 2.0 }
        ],
        explanation: "Project 1 Engineering has employees 1 and 2 (avg = 2.5). Project 1 Product has employee 3 (avg = 1.0)."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Multi-project multi-department staffing",
        isHidden: false,
        data: {
          Project: [
            { project_id: 1, employee_id: 1 },
            { project_id: 1, employee_id: 2 },
            { project_id: 1, employee_id: 3 },
            { project_id: 2, employee_id: 1 },
            { project_id: 2, employee_id: 4 }
          ],
          Employee: [
            { employee_id: 1, name: "Khaled", experience_years: 3, department_id: 1 },
            { employee_id: 2, name: "Ali", experience_years: 2, department_id: 1 },
            { employee_id: 3, name: "John", experience_years: 1, department_id: 2 },
            { employee_id: 4, name: "Doe", experience_years: 2, department_id: 2 }
          ],
          Department: [
            { department_id: 1, department_name: "Engineering" },
            { department_id: 2, department_name: "Product" }
          ]
        },
        expected: [
          { project_id: 1, department_name: "Engineering", average_years: 2.5 },
          { project_id: 1, department_name: "Product", average_years: 1.0 },
          { project_id: 2, department_name: "Engineering", average_years: 3.0 },
          { project_id: 2, department_name: "Product", average_years: 2.0 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Single employee project",
        isHidden: true,
        data: {
          Project: [{ project_id: 10, employee_id: 5 }],
          Employee: [{ employee_id: 5, name: "Solo", experience_years: 7, department_id: 3 }],
          Department: [{ department_id: 3, department_name: "Research" }]
        },
        expected: [
          { project_id: 10, department_name: "Research", average_years: 7.0 }
        ]
      }
    ]
  },
  {
    id: "sql-024",
    title: "Market Analysis — Favorite Brand Orders (3 Tables)",
    difficulty: "Medium",
    duration: 15,
    category: "3-TABLE LEFT JOIN & FILTER",
    tableSchema: [
      {
        name: "Users",
        columns: [
          { name: "user_id", type: "INTEGER", primaryKey: true },
          { name: "join_date", type: "TEXT", primaryKey: false },
          { name: "favorite_brand", type: "TEXT", primaryKey: false }
        ]
      },
      {
        name: "Orders",
        columns: [
          { name: "order_id", type: "INTEGER", primaryKey: true },
          { name: "order_date", type: "TEXT", primaryKey: false },
          { name: "item_id", type: "INTEGER", primaryKey: false },
          { name: "buyer_id", type: "INTEGER", primaryKey: false },
          { name: "seller_id", type: "INTEGER", primaryKey: false }
        ]
      },
      {
        name: "Items",
        columns: [
          { name: "item_id", type: "INTEGER", primaryKey: true },
          { name: "item_brand", type: "TEXT", primaryKey: false }
        ]
      }
    ],
    howToAttempt: "Find for each user, their join date and the number of orders they made as a buyer in 2019.",
    problem: `Write a SQL query to find for each user, the **join date** and the **number of orders they made as a buyer in 2019**.

### Important Requirements:
- Join 3 tables: **Users**, **Orders**, and **Items** (or Users & Orders).
- Return columns: **buyer_id**, **join_date**, **orders_in_2019**.
- Users with 0 orders in 2019 must appear in the result table with \`orders_in_2019\` equal to **0**.
- Return the result in any order.`,
    notes: [
      "Use `FROM Users u LEFT JOIN Orders o ON u.user_id = o.buyer_id AND strftime('%Y', o.order_date) = '2019'`.",
      "Group by `u.user_id, u.join_date` and count `COUNT(o.order_id) AS orders_in_2019`."
    ],
    starterCode: `-- Write your SQL query below (Merging Users and Orders)
SELECT 
    u.user_id AS buyer_id,
    u.join_date,
    COUNT(o.order_id) AS orders_in_2019
FROM Users u
LEFT JOIN Orders o ON u.user_id = o.buyer_id AND strftime('%Y', o.order_date) = '2019'
GROUP BY u.user_id, u.join_date;`,
    solution: `SELECT 
    u.user_id AS buyer_id,
    u.join_date,
    COUNT(o.order_id) AS orders_in_2019
FROM Users u
LEFT JOIN Orders o ON u.user_id = o.buyer_id AND strftime('%Y', o.order_date) = '2019'
GROUP BY u.user_id, u.join_date;`,
    explanation: `By placing the 2019 filter in the \`LEFT JOIN\` condition (\`strftime('%Y', o.order_date) = '2019'\`), users who placed no orders in 2019 are still preserved from the \`Users\` table, resulting in a count of 0.`,
    expectedColumns: ["buyer_id", "join_date", "orders_in_2019"],
    orderSensitive: false,
    examples: [
      {
        title: "Example 1 (Users with 2019 and non-2019 orders)",
        input: {
          Users: [
            { user_id: 1, join_date: "2018-01-01", favorite_brand: "Lenovo" },
            { user_id: 2, join_date: "2018-02-09", favorite_brand: "Samsung" },
            { user_id: 3, join_date: "2018-01-19", favorite_brand: "LG" },
            { user_id: 4, join_date: "2018-05-21", favorite_brand: "HP" }
          ],
          Orders: [
            { order_id: 1, order_date: "2019-08-01", item_id: 4, buyer_id: 1, seller_id: 2 },
            { order_id: 2, order_date: "2018-08-02", item_id: 2, buyer_id: 1, seller_id: 3 },
            { order_id: 3, order_date: "2019-08-03", item_id: 3, buyer_id: 2, seller_id: 3 },
            { order_id: 4, order_date: "2018-08-04", item_id: 1, buyer_id: 4, seller_id: 2 },
            { order_id: 5, order_date: "2019-08-04", item_id: 1, buyer_id: 3, seller_id: 4 }
          ],
          Items: [
            { item_id: 1, item_brand: "Samsung" },
            { item_id: 2, item_brand: "Lenovo" },
            { item_id: 3, item_brand: "LG" },
            { item_id: 4, item_brand: "HP" }
          ]
        },
        output: [
          { buyer_id: 1, join_date: "2018-01-01", orders_in_2019: 1 },
          { buyer_id: 2, join_date: "2018-02-09", orders_in_2019: 1 },
          { buyer_id: 3, join_date: "2018-01-19", orders_in_2019: 1 },
          { buyer_id: 4, join_date: "2018-05-21", orders_in_2019: 0 }
        ],
        explanation: "User 1, 2, 3 each bought 1 order in 2019. User 4 bought an order in 2018 but 0 in 2019."
      }
    ],
    testCases: [
      {
        id: "test-1",
        name: "Visible Test Case 1 — Multi-table yearly order count",
        isHidden: false,
        data: {
          Users: [
            { user_id: 1, join_date: "2018-01-01", favorite_brand: "Lenovo" },
            { user_id: 2, join_date: "2018-02-09", favorite_brand: "Samsung" },
            { user_id: 3, join_date: "2018-01-19", favorite_brand: "LG" },
            { user_id: 4, join_date: "2018-05-21", favorite_brand: "HP" }
          ],
          Orders: [
            { order_id: 1, order_date: "2019-08-01", item_id: 4, buyer_id: 1, seller_id: 2 },
            { order_id: 2, order_date: "2018-08-02", item_id: 2, buyer_id: 1, seller_id: 3 },
            { order_id: 3, order_date: "2019-08-03", item_id: 3, buyer_id: 2, seller_id: 3 },
            { order_id: 4, order_date: "2018-08-04", item_id: 1, buyer_id: 4, seller_id: 2 },
            { order_id: 5, order_date: "2019-08-04", item_id: 1, buyer_id: 3, seller_id: 4 }
          ],
          Items: [
            { item_id: 1, item_brand: "Samsung" },
            { item_id: 2, item_brand: "Lenovo" },
            { item_id: 3, item_brand: "LG" },
            { item_id: 4, item_brand: "HP" }
          ]
        },
        expected: [
          { buyer_id: 1, join_date: "2018-01-01", orders_in_2019: 1 },
          { buyer_id: 2, join_date: "2018-02-09", orders_in_2019: 1 },
          { buyer_id: 3, join_date: "2018-01-19", orders_in_2019: 1 },
          { buyer_id: 4, join_date: "2018-05-21", orders_in_2019: 0 }
        ]
      },
      {
        id: "test-2",
        name: "Hidden Test Case 1 — Empty orders table",
        isHidden: true,
        data: {
          Users: [{ user_id: 10, join_date: "2019-01-01", favorite_brand: "Apple" }],
          Orders: [],
          Items: []
        },
        expected: [
          { buyer_id: 10, join_date: "2019-01-01", orders_in_2019: 0 }
        ]
      }
    ]
  }
];


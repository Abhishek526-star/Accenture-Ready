// src/data/sqlQuestions.js
// 30 Authentic Accenture SQL Assessment Questions (PYQ)

export const sqlQuestions = [
  {
    "id": "sql-001",
    "title": "Debit transactions between 10,000 and 50,000",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "transaction",
        "columns": [
          {
            "name": "Transaction_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Account_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Transaction_Date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Amount",
            "type": "REAL",
            "primaryKey": false
          },
          {
            "name": "Transaction_Type",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the transaction ID, transaction amount and transaction type of all transactions whose transaction type is 'Debit' and transaction amount is greater than 10000 but less than 50000.",
    "problem": "### Problem Statement\nWrite an SQL query to display the transaction ID, transaction amount and transaction type of all transactions whose transaction type is 'Debit' and transaction amount is greater than 10000 but less than 50000.\n\n### Requirements:\n- **Expected Output Columns:** `Transaction_ID`, `Amount`, `Transaction_Type`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** WHERE, AND, range filtering\n- Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns.",
    "notes": [
      "Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns.",
      "Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  Transaction_ID,\n  Amount,\n  Transaction_Type\nFROM transaction\nWHERE Transaction_Type = 'Debit'\n  AND Amount > 10000\n  AND Amount < 50000;",
    "explanation": "Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns. Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded.",
    "expectedColumns": [
      "Transaction_ID",
      "Amount",
      "Transaction_Type"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "transaction": [
            {
              "Transaction_ID": 101,
              "Account_ID": 1,
              "Transaction_Date": "2024-01-10",
              "Amount": 12000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 102,
              "Account_ID": 2,
              "Transaction_Date": "2024-01-11",
              "Amount": 50000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 103,
              "Account_ID": 3,
              "Transaction_Date": "2024-01-12",
              "Amount": 25000,
              "Transaction_Type": "Credit"
            },
            {
              "Transaction_ID": 104,
              "Account_ID": 4,
              "Transaction_Date": "2024-01-13",
              "Amount": 49999.5,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 105,
              "Account_ID": 5,
              "Transaction_Date": "2024-01-14",
              "Amount": 10000,
              "Transaction_Type": "Debit"
            }
          ]
        },
        "output": [
          {
            "Transaction_ID": 101,
            "Amount": 12000,
            "Transaction_Type": "Debit"
          },
          {
            "Transaction_ID": 104,
            "Amount": 49999.5,
            "Transaction_Type": "Debit"
          }
        ],
        "explanation": "Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-001-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "transaction": [
            {
              "Transaction_ID": 101,
              "Account_ID": 1,
              "Transaction_Date": "2024-01-10",
              "Amount": 12000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 102,
              "Account_ID": 2,
              "Transaction_Date": "2024-01-11",
              "Amount": 50000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 103,
              "Account_ID": 3,
              "Transaction_Date": "2024-01-12",
              "Amount": 25000,
              "Transaction_Type": "Credit"
            },
            {
              "Transaction_ID": 104,
              "Account_ID": 4,
              "Transaction_Date": "2024-01-13",
              "Amount": 49999.5,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 105,
              "Account_ID": 5,
              "Transaction_Date": "2024-01-14",
              "Amount": 10000,
              "Transaction_Type": "Debit"
            }
          ]
        },
        "expected": [
          {
            "Transaction_ID": 101,
            "Amount": 12000,
            "Transaction_Type": "Debit"
          },
          {
            "Transaction_ID": 104,
            "Amount": 49999.5,
            "Transaction_Type": "Debit"
          }
        ]
      },
      {
        "id": "sql-001-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "transaction": [
            {
              "Transaction_ID": 1202,
              "Account_ID": 1002,
              "Transaction_Date": "ZZ_2024-01-10",
              "Amount": 25000,
              "Transaction_Type": "ZZ_Debit"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-001-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "transaction": [
            {
              "Transaction_ID": 101,
              "Account_ID": 1,
              "Transaction_Date": "2024-01-10",
              "Amount": 12000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 102,
              "Account_ID": 2,
              "Transaction_Date": "2024-01-11",
              "Amount": 50000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 103,
              "Account_ID": 3,
              "Transaction_Date": "2024-01-12",
              "Amount": 25000,
              "Transaction_Type": "Credit"
            },
            {
              "Transaction_ID": 104,
              "Account_ID": 4,
              "Transaction_Date": "2024-01-13",
              "Amount": 49999.5,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 105,
              "Account_ID": 5,
              "Transaction_Date": "2024-01-14",
              "Amount": 10000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 201,
              "Account_ID": 101,
              "Transaction_Date": "2024-01-10",
              "Amount": 12000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 203,
              "Account_ID": 103,
              "Transaction_Date": "2024-01-11",
              "Amount": 50000,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 205,
              "Account_ID": 105,
              "Transaction_Date": "2024-01-12",
              "Amount": 25000,
              "Transaction_Type": "Credit"
            },
            {
              "Transaction_ID": 207,
              "Account_ID": 107,
              "Transaction_Date": "2024-01-13",
              "Amount": 49999.5,
              "Transaction_Type": "Debit"
            },
            {
              "Transaction_ID": 209,
              "Account_ID": 109,
              "Transaction_Date": "2024-01-14",
              "Amount": 10000,
              "Transaction_Type": "Debit"
            }
          ]
        },
        "expected": [
          {
            "Transaction_ID": 101,
            "Amount": 12000,
            "Transaction_Type": "Debit"
          },
          {
            "Transaction_ID": 104,
            "Amount": 49999.5,
            "Transaction_Type": "Debit"
          },
          {
            "Transaction_ID": 201,
            "Amount": 12000,
            "Transaction_Type": "Debit"
          },
          {
            "Transaction_ID": 207,
            "Amount": 49999.5,
            "Transaction_Type": "Debit"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-002",
    "title": "Customers whose account type starts with Sa",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "customer",
        "columns": [
          {
            "name": "Customer_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "First_Name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Last_Name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Contact",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "account",
        "columns": [
          {
            "name": "Account_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Customer_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Account_Type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Balance",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the first name, contact number and balance of all customers whose account type starts with 'Sa'. The output should be ordered by the customer's first name.",
    "problem": "### Problem Statement\nWrite an SQL query to display the first name, contact number and balance of all customers whose account type starts with 'Sa'. The output should be ordered by the customer's first name.\n\n### Requirements:\n- **Expected Output Columns:** `First_Name`, `Contact`, `Balance`\n- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, LIKE, ORDER BY\n- Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name.",
    "notes": [
      "Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name.",
      "Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name.",
      "Rows must match the exact sorting specified."
    ],
    "starterCode": "",
    "solution": "SELECT\n  c.First_Name,\n  c.Contact,\n  a.Balance\nFROM customer c\nJOIN account a ON c.Customer_ID = a.Customer_ID\nWHERE a.Account_Type LIKE 'Sa%'\nORDER BY c.First_Name;",
    "explanation": "Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name. Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name.",
    "expectedColumns": [
      "First_Name",
      "Contact",
      "Balance"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Sam",
              "Last_Name": "Khan",
              "Contact": "90001"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Sara",
              "Last_Name": "Roy",
              "Contact": "90002"
            },
            {
              "Customer_ID": 3,
              "First_Name": "John",
              "Last_Name": "Das",
              "Contact": "90003"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Sahil",
              "Last_Name": "Verma",
              "Contact": "90004"
            }
          ],
          "account": [
            {
              "Account_ID": 11,
              "Customer_ID": 1,
              "Account_Type": "Savings",
              "Balance": 45000
            },
            {
              "Account_ID": 12,
              "Customer_ID": 2,
              "Account_Type": "Salary",
              "Balance": 60000
            },
            {
              "Account_ID": 13,
              "Customer_ID": 3,
              "Account_Type": "Current",
              "Balance": 70000
            },
            {
              "Account_ID": 14,
              "Customer_ID": 4,
              "Account_Type": "Saving Plus",
              "Balance": 30000
            }
          ]
        },
        "output": [
          {
            "First_Name": "Sahil",
            "Contact": "90004",
            "Balance": 30000
          },
          {
            "First_Name": "Sam",
            "Contact": "90001",
            "Balance": 45000
          },
          {
            "First_Name": "Sara",
            "Contact": "90002",
            "Balance": 60000
          }
        ],
        "explanation": "Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name."
      }
    ],
    "testCases": [
      {
        "id": "sql-002-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Sam",
              "Last_Name": "Khan",
              "Contact": "90001"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Sara",
              "Last_Name": "Roy",
              "Contact": "90002"
            },
            {
              "Customer_ID": 3,
              "First_Name": "John",
              "Last_Name": "Das",
              "Contact": "90003"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Sahil",
              "Last_Name": "Verma",
              "Contact": "90004"
            }
          ],
          "account": [
            {
              "Account_ID": 11,
              "Customer_ID": 1,
              "Account_Type": "Savings",
              "Balance": 45000
            },
            {
              "Account_ID": 12,
              "Customer_ID": 2,
              "Account_Type": "Salary",
              "Balance": 60000
            },
            {
              "Account_ID": 13,
              "Customer_ID": 3,
              "Account_Type": "Current",
              "Balance": 70000
            },
            {
              "Account_ID": 14,
              "Customer_ID": 4,
              "Account_Type": "Saving Plus",
              "Balance": 30000
            }
          ]
        },
        "expected": [
          {
            "First_Name": "Sahil",
            "Contact": "90004",
            "Balance": 30000
          },
          {
            "First_Name": "Sam",
            "Contact": "90001",
            "Balance": 45000
          },
          {
            "First_Name": "Sara",
            "Contact": "90002",
            "Balance": 60000
          }
        ]
      },
      {
        "id": "sql-002-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "customer": [
            {
              "Customer_ID": 1002,
              "First_Name": "Sam",
              "Last_Name": "ZZ_Khan",
              "Contact": "ZZ_90001"
            }
          ],
          "account": [
            {
              "Account_ID": 1022,
              "Customer_ID": 1002,
              "Account_Type": "ZZ_Savings",
              "Balance": 91000
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-002-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Sam",
              "Last_Name": "Khan",
              "Contact": "90001"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Sara",
              "Last_Name": "Roy",
              "Contact": "90002"
            },
            {
              "Customer_ID": 3,
              "First_Name": "John",
              "Last_Name": "Das",
              "Contact": "90003"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Sahil",
              "Last_Name": "Verma",
              "Contact": "90004"
            },
            {
              "Customer_ID": 101,
              "First_Name": "Sam",
              "Last_Name": "Khan",
              "Contact": "90001"
            },
            {
              "Customer_ID": 103,
              "First_Name": "Sara",
              "Last_Name": "Roy",
              "Contact": "90002"
            },
            {
              "Customer_ID": 105,
              "First_Name": "John",
              "Last_Name": "Das",
              "Contact": "90003"
            },
            {
              "Customer_ID": 107,
              "First_Name": "Sahil",
              "Last_Name": "Verma",
              "Contact": "90004"
            }
          ],
          "account": [
            {
              "Account_ID": 11,
              "Customer_ID": 1,
              "Account_Type": "Savings",
              "Balance": 45000
            },
            {
              "Account_ID": 12,
              "Customer_ID": 2,
              "Account_Type": "Salary",
              "Balance": 60000
            },
            {
              "Account_ID": 13,
              "Customer_ID": 3,
              "Account_Type": "Current",
              "Balance": 70000
            },
            {
              "Account_ID": 14,
              "Customer_ID": 4,
              "Account_Type": "Saving Plus",
              "Balance": 30000
            },
            {
              "Account_ID": 111,
              "Customer_ID": 101,
              "Account_Type": "Savings",
              "Balance": 45000
            },
            {
              "Account_ID": 113,
              "Customer_ID": 103,
              "Account_Type": "Salary",
              "Balance": 60000
            },
            {
              "Account_ID": 115,
              "Customer_ID": 105,
              "Account_Type": "Current",
              "Balance": 70000
            },
            {
              "Account_ID": 117,
              "Customer_ID": 107,
              "Account_Type": "Saving Plus",
              "Balance": 30000
            }
          ]
        },
        "expected": [
          {
            "First_Name": "Sahil",
            "Contact": "90004",
            "Balance": 30000
          },
          {
            "First_Name": "Sahil",
            "Contact": "90004",
            "Balance": 30000
          },
          {
            "First_Name": "Sam",
            "Contact": "90001",
            "Balance": 45000
          },
          {
            "First_Name": "Sam",
            "Contact": "90001",
            "Balance": 45000
          },
          {
            "First_Name": "Sara",
            "Contact": "90002",
            "Balance": 60000
          },
          {
            "First_Name": "Sara",
            "Contact": "90002",
            "Balance": 60000
          }
        ]
      }
    ]
  },
  {
    "id": "sql-003",
    "title": "Employees with basic salary above 5,000",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "employee_info",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DEPTID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "JOINING_DT",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DOB",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "YRS_OF_EXP",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "salary_info",
        "columns": [
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "BASIC",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "emp_payroll",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "MONTH",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "YEAR",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "TOTAL_EARNING",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NETPAY",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the employee ID, name, basic salary and net pay for employees whose basic salary is greater than 5,000.",
    "problem": "### Problem Statement\nWrite an SQL query to display the employee ID, name, basic salary and net pay for employees whose basic salary is greater than 5,000.\n\n### Requirements:\n- **Expected Output Columns:** `EMPID`, `EMPNAME`, `BASIC`, `NETPAY`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, WHERE, multiple tables\n- Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000.",
    "notes": [
      "Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000.",
      "Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  ei.EMPID AS EMPID,\n  ei.EMPNAME AS EMPNAME,\n  si.BASIC AS BASIC,\n  ep.NETPAY AS NETPAY\nFROM employee_info ei\nJOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY\nJOIN emp_payroll ep ON ei.EMPID = ep.EMPID\nWHERE si.BASIC > 5000;",
    "explanation": "Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000. Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out.",
    "expectedColumns": [
      "EMPID",
      "EMPNAME",
      "BASIC",
      "NETPAY"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "JOINING_DT": "2019-01-10",
              "DOB": "1995-01-01",
              "YRS_OF_EXP": 6,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "JOINING_DT": "2020-02-10",
              "DOB": "1996-02-02",
              "YRS_OF_EXP": 5,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "JOINING_DT": "2018-03-12",
              "DOB": "1994-03-03",
              "YRS_OF_EXP": 7,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ],
          "emp_payroll": [
            {
              "EMPID": 1,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7500,
              "NETPAY": 7000
            },
            {
              "EMPID": 2,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 5500,
              "NETPAY": 5000
            },
            {
              "EMPID": 3,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7600,
              "NETPAY": 7100
            }
          ]
        },
        "output": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          }
        ],
        "explanation": "Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out."
      }
    ],
    "testCases": [
      {
        "id": "sql-003-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "JOINING_DT": "2019-01-10",
              "DOB": "1995-01-01",
              "YRS_OF_EXP": 6,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "JOINING_DT": "2020-02-10",
              "DOB": "1996-02-02",
              "YRS_OF_EXP": 5,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "JOINING_DT": "2018-03-12",
              "DOB": "1994-03-03",
              "YRS_OF_EXP": 7,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ],
          "emp_payroll": [
            {
              "EMPID": 1,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7500,
              "NETPAY": 7000
            },
            {
              "EMPID": 2,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 5500,
              "NETPAY": 5000
            },
            {
              "EMPID": 3,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7600,
              "NETPAY": 7100
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          }
        ]
      },
      {
        "id": "sql-003-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1002,
              "EMPNAME": "ZZ_Amit",
              "DEPTID": 1020,
              "JOINING_DT": "ZZ_2019-01-10",
              "DOB": "ZZ_1995-01-01",
              "YRS_OF_EXP": 1012,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 14000
            }
          ],
          "emp_payroll": [
            {
              "EMPID": 1002,
              "MONTH": 1002,
              "YEAR": 5048,
              "TOTAL_EARNING": 16000,
              "NETPAY": 15000
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1002,
            "EMPNAME": "ZZ_Amit",
            "BASIC": 14000,
            "NETPAY": 15000
          }
        ]
      },
      {
        "id": "sql-003-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "JOINING_DT": "2019-01-10",
              "DOB": "1995-01-01",
              "YRS_OF_EXP": 6,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "JOINING_DT": "2020-02-10",
              "DOB": "1996-02-02",
              "YRS_OF_EXP": 5,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "JOINING_DT": "2018-03-12",
              "DOB": "1994-03-03",
              "YRS_OF_EXP": 7,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 101,
              "EMPNAME": "Amit",
              "DEPTID": 110,
              "JOINING_DT": "2019-01-10",
              "DOB": "1995-01-01",
              "YRS_OF_EXP": 6,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 103,
              "EMPNAME": "Riya",
              "DEPTID": 121,
              "JOINING_DT": "2020-02-10",
              "DOB": "1996-02-02",
              "YRS_OF_EXP": 5,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 105,
              "EMPNAME": "Neha",
              "DEPTID": 112,
              "JOINING_DT": "2018-03-12",
              "DOB": "1994-03-03",
              "YRS_OF_EXP": 7,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            },
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ],
          "emp_payroll": [
            {
              "EMPID": 1,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7500,
              "NETPAY": 7000
            },
            {
              "EMPID": 2,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 5500,
              "NETPAY": 5000
            },
            {
              "EMPID": 3,
              "MONTH": 1,
              "YEAR": 2024,
              "TOTAL_EARNING": 7600,
              "NETPAY": 7100
            },
            {
              "EMPID": 101,
              "MONTH": 1,
              "YEAR": 2124,
              "TOTAL_EARNING": 7500,
              "NETPAY": 7000
            },
            {
              "EMPID": 103,
              "MONTH": 1,
              "YEAR": 2125,
              "TOTAL_EARNING": 5500,
              "NETPAY": 5000
            },
            {
              "EMPID": 105,
              "MONTH": 1,
              "YEAR": 2126,
              "TOTAL_EARNING": 7600,
              "NETPAY": 7100
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 105,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          },
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "BASIC": 6500,
            "NETPAY": 7000
          },
          {
            "EMPID": 105,
            "EMPNAME": "Neha",
            "BASIC": 6500,
            "NETPAY": 7100
          }
        ]
      }
    ]
  },
  {
    "id": "sql-004",
    "title": "Employees with more than 5 years of experience",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "employee_info",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "JOINING_DT",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "YRS_OF_EXP",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the names of employees who have more than 5 years of experience and joined after January 1, 2001. Use aliases 'Employee ID' and 'Employee Name'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the names of employees who have more than 5 years of experience and joined after January 1, 2001. Use aliases 'Employee ID' and 'Employee Name'.\n\n### Requirements:\n- **Expected Output Columns:** `Employee ID`, `Employee Name`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** AND, date filtering, aliases\n- Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases.",
    "notes": [
      "Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases.",
      "Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  EMPID AS `Employee ID`,\n  EMPNAME AS `Employee Name`\nFROM employee_info\nWHERE YRS_OF_EXP > 5\n  AND JOINING_DT > '2001-01-01';",
    "explanation": "Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases. Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition.",
    "expectedColumns": [
      "Employee ID",
      "Employee Name"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "JOINING_DT": "2010-01-10",
              "YRS_OF_EXP": 7
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "JOINING_DT": "2000-05-10",
              "YRS_OF_EXP": 8
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "JOINING_DT": "2015-03-12",
              "YRS_OF_EXP": 5
            },
            {
              "EMPID": 4,
              "EMPNAME": "Raj",
              "JOINING_DT": "2005-06-01",
              "YRS_OF_EXP": 6
            }
          ]
        },
        "output": [
          {
            "Employee ID": 1,
            "Employee Name": "Amit"
          },
          {
            "Employee ID": 4,
            "Employee Name": "Raj"
          }
        ],
        "explanation": "Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition."
      }
    ],
    "testCases": [
      {
        "id": "sql-004-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "JOINING_DT": "2010-01-10",
              "YRS_OF_EXP": 7
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "JOINING_DT": "2000-05-10",
              "YRS_OF_EXP": 8
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "JOINING_DT": "2015-03-12",
              "YRS_OF_EXP": 5
            },
            {
              "EMPID": 4,
              "EMPNAME": "Raj",
              "JOINING_DT": "2005-06-01",
              "YRS_OF_EXP": 6
            }
          ]
        },
        "expected": [
          {
            "Employee ID": 1,
            "Employee Name": "Amit"
          },
          {
            "Employee ID": 4,
            "Employee Name": "Raj"
          }
        ]
      },
      {
        "id": "sql-004-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1002,
              "EMPNAME": "ZZ_Amit",
              "JOINING_DT": "ZZ_2010-01-10",
              "YRS_OF_EXP": 1014
            }
          ]
        },
        "expected": [
          {
            "Employee ID": 1002,
            "Employee Name": "ZZ_Amit"
          }
        ]
      },
      {
        "id": "sql-004-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "JOINING_DT": "2010-01-10",
              "YRS_OF_EXP": 7
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "JOINING_DT": "2000-05-10",
              "YRS_OF_EXP": 8
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "JOINING_DT": "2015-03-12",
              "YRS_OF_EXP": 5
            },
            {
              "EMPID": 4,
              "EMPNAME": "Raj",
              "JOINING_DT": "2005-06-01",
              "YRS_OF_EXP": 6
            },
            {
              "EMPID": 101,
              "EMPNAME": "Amit",
              "JOINING_DT": "2010-01-10",
              "YRS_OF_EXP": 7
            },
            {
              "EMPID": 103,
              "EMPNAME": "Riya",
              "JOINING_DT": "2000-05-10",
              "YRS_OF_EXP": 8
            },
            {
              "EMPID": 105,
              "EMPNAME": "Neha",
              "JOINING_DT": "2015-03-12",
              "YRS_OF_EXP": 5
            },
            {
              "EMPID": 107,
              "EMPNAME": "Raj",
              "JOINING_DT": "2005-06-01",
              "YRS_OF_EXP": 6
            }
          ]
        },
        "expected": [
          {
            "Employee ID": 1,
            "Employee Name": "Amit"
          },
          {
            "Employee ID": 4,
            "Employee Name": "Raj"
          },
          {
            "Employee ID": 101,
            "Employee Name": "Amit"
          },
          {
            "Employee ID": 107,
            "Employee Name": "Raj"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-005",
    "title": "Wednesday course schedules",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "course",
        "columns": [
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "course_name",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "section",
        "columns": [
          {
            "name": "section_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "schedule_id",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "schedule",
        "columns": [
          {
            "name": "schedule_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "day",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "starttime",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the course ID, course name, and schedule details (day and start time) of all courses taught on Wednesday. Use 'wed' as the value stored in the database. Use aliases 'Course ID', 'Course Name', 'Day' and 'Start Time'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the course ID, course name, and schedule details (day and start time) of all courses taught on Wednesday. Use 'wed' as the value stored in the database. Use aliases 'Course ID', 'Course Name', 'Day' and 'Start Time'.\n\n### Requirements:\n- **Expected Output Columns:** `Course ID`, `Course Name`, `Day`, `Start Time`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, aliases, filtering\n- Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'.",
    "notes": [
      "Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'.",
      "The two sections whose schedule day is 'wed' are returned, together with their course details.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  c.course_id AS `Course ID`,\n  c.course_name AS `Course Name`,\n  s.day AS `Day`,\n  s.starttime AS `Start Time`\nFROM course c\nJOIN section sec ON c.course_id = sec.course_id\nJOIN schedule s ON sec.schedule_id = s.schedule_id\nWHERE s.day = 'wed';",
    "explanation": "Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'. The two sections whose schedule day is 'wed' are returned, together with their course details.",
    "expectedColumns": [
      "Course ID",
      "Course Name",
      "Day",
      "Start Time"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "course": [
            {
              "course_id": 1,
              "course_name": "DBMS"
            },
            {
              "course_id": 2,
              "course_name": "Networks"
            },
            {
              "course_id": 3,
              "course_name": "OS"
            }
          ],
          "section": [
            {
              "section_id": 101,
              "course_id": 1,
              "schedule_id": 201
            },
            {
              "section_id": 102,
              "course_id": 2,
              "schedule_id": 202
            },
            {
              "section_id": 103,
              "course_id": 3,
              "schedule_id": 203
            }
          ],
          "schedule": [
            {
              "schedule_id": 201,
              "day": "wed",
              "starttime": "09:00"
            },
            {
              "schedule_id": 202,
              "day": "thu",
              "starttime": "10:00"
            },
            {
              "schedule_id": 203,
              "day": "wed",
              "starttime": "14:00"
            }
          ]
        },
        "output": [
          {
            "Course ID": 1,
            "Course Name": "DBMS",
            "Day": "wed",
            "Start Time": "09:00"
          },
          {
            "Course ID": 3,
            "Course Name": "OS",
            "Day": "wed",
            "Start Time": "14:00"
          }
        ],
        "explanation": "The two sections whose schedule day is 'wed' are returned, together with their course details."
      }
    ],
    "testCases": [
      {
        "id": "sql-005-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "course": [
            {
              "course_id": 1,
              "course_name": "DBMS"
            },
            {
              "course_id": 2,
              "course_name": "Networks"
            },
            {
              "course_id": 3,
              "course_name": "OS"
            }
          ],
          "section": [
            {
              "section_id": 101,
              "course_id": 1,
              "schedule_id": 201
            },
            {
              "section_id": 102,
              "course_id": 2,
              "schedule_id": 202
            },
            {
              "section_id": 103,
              "course_id": 3,
              "schedule_id": 203
            }
          ],
          "schedule": [
            {
              "schedule_id": 201,
              "day": "wed",
              "starttime": "09:00"
            },
            {
              "schedule_id": 202,
              "day": "thu",
              "starttime": "10:00"
            },
            {
              "schedule_id": 203,
              "day": "wed",
              "starttime": "14:00"
            }
          ]
        },
        "expected": [
          {
            "Course ID": 1,
            "Course Name": "DBMS",
            "Day": "wed",
            "Start Time": "09:00"
          },
          {
            "Course ID": 3,
            "Course Name": "OS",
            "Day": "wed",
            "Start Time": "14:00"
          }
        ]
      },
      {
        "id": "sql-005-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "course": [
            {
              "course_id": 1002,
              "course_name": "ZZ_DBMS"
            }
          ],
          "section": [
            {
              "section_id": 1202,
              "course_id": 1002,
              "schedule_id": 1402
            }
          ],
          "schedule": [
            {
              "schedule_id": 1402,
              "day": "wed",
              "starttime": "ZZ_09:00"
            }
          ]
        },
        "expected": [
          {
            "Course ID": 1002,
            "Course Name": "ZZ_DBMS",
            "Day": "wed",
            "Start Time": "ZZ_09:00"
          }
        ]
      },
      {
        "id": "sql-005-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "course": [
            {
              "course_id": 1,
              "course_name": "DBMS"
            },
            {
              "course_id": 2,
              "course_name": "Networks"
            },
            {
              "course_id": 3,
              "course_name": "OS"
            },
            {
              "course_id": 101,
              "course_name": "DBMS"
            },
            {
              "course_id": 103,
              "course_name": "Networks"
            },
            {
              "course_id": 105,
              "course_name": "OS"
            }
          ],
          "section": [
            {
              "section_id": 101,
              "course_id": 1,
              "schedule_id": 201
            },
            {
              "section_id": 102,
              "course_id": 2,
              "schedule_id": 202
            },
            {
              "section_id": 103,
              "course_id": 3,
              "schedule_id": 203
            },
            {
              "section_id": 201,
              "course_id": 101,
              "schedule_id": 301
            },
            {
              "section_id": 203,
              "course_id": 103,
              "schedule_id": 303
            },
            {
              "section_id": 205,
              "course_id": 105,
              "schedule_id": 305
            }
          ],
          "schedule": [
            {
              "schedule_id": 201,
              "day": "wed",
              "starttime": "09:00"
            },
            {
              "schedule_id": 202,
              "day": "thu",
              "starttime": "10:00"
            },
            {
              "schedule_id": 203,
              "day": "wed",
              "starttime": "14:00"
            },
            {
              "schedule_id": 301,
              "day": "wed",
              "starttime": "09:00"
            },
            {
              "schedule_id": 303,
              "day": "thu",
              "starttime": "10:00"
            },
            {
              "schedule_id": 305,
              "day": "wed",
              "starttime": "14:00"
            }
          ]
        },
        "expected": [
          {
            "Course ID": 1,
            "Course Name": "DBMS",
            "Day": "wed",
            "Start Time": "09:00"
          },
          {
            "Course ID": 3,
            "Course Name": "OS",
            "Day": "wed",
            "Start Time": "14:00"
          },
          {
            "Course ID": 101,
            "Course Name": "DBMS",
            "Day": "wed",
            "Start Time": "09:00"
          },
          {
            "Course ID": 105,
            "Course Name": "OS",
            "Day": "wed",
            "Start Time": "14:00"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-006",
    "title": "Books published after 1 January 1940 in category C102",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "books",
        "columns": [
          {
            "name": "ISBN",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Title",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Published_Date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "book_category",
        "columns": [
          {
            "name": "ISBN",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Category_ID",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the Title, Price and ISBN of books published after January 1, 1940 and belonging to category 'C102'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the Title, Price and ISBN of books published after January 1, 1940 and belonging to category 'C102'.\n\n### Requirements:\n- **Expected Output Columns:** `Title`, `Price`, `ISBN`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, date comparison, AND\n- Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01.",
    "notes": [
      "Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01.",
      "I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  b.Title,\n  b.Price,\n  b.ISBN\nFROM books b\nJOIN book_category bc ON b.ISBN = bc.ISBN\nWHERE b.Published_Date > '1940-01-01'\n  AND bc.Category_ID = 'C102';",
    "explanation": "Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01. I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category.",
    "expectedColumns": [
      "Title",
      "Price",
      "ISBN"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "books": [
            {
              "ISBN": "I1",
              "Title": "SQL Basics",
              "Price": 500,
              "Published_Date": "1950-01-01"
            },
            {
              "ISBN": "I2",
              "Title": "Old SQL",
              "Price": 400,
              "Published_Date": "1939-12-31"
            },
            {
              "ISBN": "I3",
              "Title": "Advanced SQL",
              "Price": 700,
              "Published_Date": "1945-05-01"
            },
            {
              "ISBN": "I4",
              "Title": "Networks",
              "Price": 600,
              "Published_Date": "1955-01-01"
            }
          ],
          "book_category": [
            {
              "ISBN": "I1",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I2",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I3",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I4",
              "Category_ID": "C101"
            }
          ]
        },
        "output": [
          {
            "Title": "SQL Basics",
            "Price": 500,
            "ISBN": "I1"
          },
          {
            "Title": "Advanced SQL",
            "Price": 700,
            "ISBN": "I3"
          }
        ],
        "explanation": "I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category."
      }
    ],
    "testCases": [
      {
        "id": "sql-006-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "books": [
            {
              "ISBN": "I1",
              "Title": "SQL Basics",
              "Price": 500,
              "Published_Date": "1950-01-01"
            },
            {
              "ISBN": "I2",
              "Title": "Old SQL",
              "Price": 400,
              "Published_Date": "1939-12-31"
            },
            {
              "ISBN": "I3",
              "Title": "Advanced SQL",
              "Price": 700,
              "Published_Date": "1945-05-01"
            },
            {
              "ISBN": "I4",
              "Title": "Networks",
              "Price": 600,
              "Published_Date": "1955-01-01"
            }
          ],
          "book_category": [
            {
              "ISBN": "I1",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I2",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I3",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I4",
              "Category_ID": "C101"
            }
          ]
        },
        "expected": [
          {
            "Title": "SQL Basics",
            "Price": 500,
            "ISBN": "I1"
          },
          {
            "Title": "Advanced SQL",
            "Price": 700,
            "ISBN": "I3"
          }
        ]
      },
      {
        "id": "sql-006-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "books": [
            {
              "ISBN": "I1",
              "Title": "ZZ_SQL Basics",
              "Price": 2000,
              "Published_Date": "ZZ_1950-01-01"
            }
          ],
          "book_category": [
            {
              "ISBN": "I1",
              "Category_ID": "ZZ_C102"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-006-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "books": [
            {
              "ISBN": "I1",
              "Title": "SQL Basics",
              "Price": 500,
              "Published_Date": "1950-01-01"
            },
            {
              "ISBN": "I2",
              "Title": "Old SQL",
              "Price": 400,
              "Published_Date": "1939-12-31"
            },
            {
              "ISBN": "I3",
              "Title": "Advanced SQL",
              "Price": 700,
              "Published_Date": "1945-05-01"
            },
            {
              "ISBN": "I4",
              "Title": "Networks",
              "Price": 600,
              "Published_Date": "1955-01-01"
            },
            {
              "ISBN": "ALT_I1",
              "Title": "SQL Basics",
              "Price": 500,
              "Published_Date": "1950-01-01"
            },
            {
              "ISBN": "ALT_I2",
              "Title": "Old SQL",
              "Price": 400,
              "Published_Date": "1939-12-31"
            },
            {
              "ISBN": "ALT_I3",
              "Title": "Advanced SQL",
              "Price": 700,
              "Published_Date": "1945-05-01"
            },
            {
              "ISBN": "ALT_I4",
              "Title": "Networks",
              "Price": 600,
              "Published_Date": "1955-01-01"
            }
          ],
          "book_category": [
            {
              "ISBN": "I1",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I2",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I3",
              "Category_ID": "C102"
            },
            {
              "ISBN": "I4",
              "Category_ID": "C101"
            },
            {
              "ISBN": "ALT_I1",
              "Category_ID": "ALT_C102"
            },
            {
              "ISBN": "ALT_I2",
              "Category_ID": "ALT_C102"
            },
            {
              "ISBN": "ALT_I3",
              "Category_ID": "ALT_C102"
            },
            {
              "ISBN": "ALT_I4",
              "Category_ID": "ALT_C101"
            }
          ]
        },
        "expected": [
          {
            "Title": "SQL Basics",
            "Price": 500,
            "ISBN": "I1"
          },
          {
            "Title": "Advanced SQL",
            "Price": 700,
            "ISBN": "I3"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-007",
    "title": "Categories beginning with M",
    "difficulty": "Easy",
    "duration": 15,
    "category": "PATTERN MATCHING & STRINGS",
    "tableSchema": [
      {
        "name": "channelscategory",
        "columns": [
          {
            "name": "categoryid",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "categoryname",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the category ID and category name for categories whose name starts with the letter 'M'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the category ID and category name for categories whose name starts with the letter 'M'.\n\n### Requirements:\n- **Expected Output Columns:** `CATEGORYID`, `CATEGORYNAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** LIKE, wildcard\n- Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname.",
    "notes": [
      "Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname.",
      "The % wildcard allows any characters after the initial M, so all three matching names are returned.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  categoryid AS CATEGORYID,\n  categoryname AS CATEGORYNAME\nFROM channelscategory\nWHERE categoryname LIKE 'M%';",
    "explanation": "Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname. The % wildcard allows any characters after the initial M, so all three matching names are returned.",
    "expectedColumns": [
      "CATEGORYID",
      "CATEGORYNAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "channelscategory": [
            {
              "categoryid": 1,
              "categoryname": "Music"
            },
            {
              "categoryid": 2,
              "categoryname": "Movies"
            },
            {
              "categoryid": 3,
              "categoryname": "Sports"
            },
            {
              "categoryid": 4,
              "categoryname": "News"
            },
            {
              "categoryid": 5,
              "categoryname": "Marketing"
            }
          ]
        },
        "output": [
          {
            "CATEGORYID": 1,
            "CATEGORYNAME": "Music"
          },
          {
            "CATEGORYID": 2,
            "CATEGORYNAME": "Movies"
          },
          {
            "CATEGORYID": 5,
            "CATEGORYNAME": "Marketing"
          }
        ],
        "explanation": "The % wildcard allows any characters after the initial M, so all three matching names are returned."
      }
    ],
    "testCases": [
      {
        "id": "sql-007-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "channelscategory": [
            {
              "categoryid": 1,
              "categoryname": "Music"
            },
            {
              "categoryid": 2,
              "categoryname": "Movies"
            },
            {
              "categoryid": 3,
              "categoryname": "Sports"
            },
            {
              "categoryid": 4,
              "categoryname": "News"
            },
            {
              "categoryid": 5,
              "categoryname": "Marketing"
            }
          ]
        },
        "expected": [
          {
            "CATEGORYID": 1,
            "CATEGORYNAME": "Music"
          },
          {
            "CATEGORYID": 2,
            "CATEGORYNAME": "Movies"
          },
          {
            "CATEGORYID": 5,
            "CATEGORYNAME": "Marketing"
          }
        ]
      },
      {
        "id": "sql-007-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "channelscategory": [
            {
              "categoryid": 1002,
              "categoryname": "ZZ_Music"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-007-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "channelscategory": [
            {
              "categoryid": 1,
              "categoryname": "Music"
            },
            {
              "categoryid": 2,
              "categoryname": "Movies"
            },
            {
              "categoryid": 3,
              "categoryname": "Sports"
            },
            {
              "categoryid": 4,
              "categoryname": "News"
            },
            {
              "categoryid": 5,
              "categoryname": "Marketing"
            },
            {
              "categoryid": 101,
              "categoryname": "Music"
            },
            {
              "categoryid": 103,
              "categoryname": "Movies"
            },
            {
              "categoryid": 105,
              "categoryname": "Sports"
            },
            {
              "categoryid": 107,
              "categoryname": "News"
            },
            {
              "categoryid": 109,
              "categoryname": "Marketing"
            }
          ]
        },
        "expected": [
          {
            "CATEGORYID": 1,
            "CATEGORYNAME": "Music"
          },
          {
            "CATEGORYID": 2,
            "CATEGORYNAME": "Movies"
          },
          {
            "CATEGORYID": 5,
            "CATEGORYNAME": "Marketing"
          },
          {
            "CATEGORYID": 101,
            "CATEGORYNAME": "Music"
          },
          {
            "CATEGORYID": 103,
            "CATEGORYNAME": "Movies"
          },
          {
            "CATEGORYID": 109,
            "CATEGORYNAME": "Marketing"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-008",
    "title": "Trains starting with M going to Pune",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "train_details_tbl",
        "columns": [
          {
            "name": "train_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "train_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_from",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_to",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_speed",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "train_stations_tbl",
        "columns": [
          {
            "name": "station_id",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "station_name",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to find the train ID and name of all trains that have a name starting with the alphabet 'M' and that go to the station with name 'PUNE'.",
    "problem": "### Problem Statement\nWrite an SQL query to find the train ID and name of all trains that have a name starting with the alphabet 'M' and that go to the station with name 'PUNE'.\n\n### Requirements:\n- **Expected Output Columns:** `train_id`, `train_name`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, LIKE, multiple conditions\n- Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'.",
    "notes": [
      "Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'.",
      "Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  td.train_id,\n  td.train_name\nFROM train_details_tbl td\nJOIN train_stations_tbl ts ON td.train_to = ts.station_id\nWHERE td.train_name LIKE 'M%'\n  AND ts.station_name = 'PUNE';",
    "explanation": "Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'. Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore.",
    "expectedColumns": [
      "train_id",
      "train_name"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Maharashtra Express",
              "train_type": "EXP",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 80
            },
            {
              "train_id": 2,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 45
            },
            {
              "train_id": 3,
              "train_name": "Rajdhani Express",
              "train_type": "EXP",
              "train_from": "DEL",
              "train_to": "P01",
              "train_speed": 120
            },
            {
              "train_id": 4,
              "train_name": "Mysore Express",
              "train_type": "EXP",
              "train_from": "BLR",
              "train_to": "B01",
              "train_speed": 90
            }
          ],
          "train_stations_tbl": [
            {
              "station_id": "P01",
              "station_name": "PUNE"
            },
            {
              "station_id": "B01",
              "station_name": "BANGALORE"
            }
          ]
        },
        "output": [
          {
            "train_id": 1,
            "train_name": "Maharashtra Express"
          },
          {
            "train_id": 2,
            "train_name": "Mumbai Local"
          }
        ],
        "explanation": "Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore."
      }
    ],
    "testCases": [
      {
        "id": "sql-008-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Maharashtra Express",
              "train_type": "EXP",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 80
            },
            {
              "train_id": 2,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 45
            },
            {
              "train_id": 3,
              "train_name": "Rajdhani Express",
              "train_type": "EXP",
              "train_from": "DEL",
              "train_to": "P01",
              "train_speed": 120
            },
            {
              "train_id": 4,
              "train_name": "Mysore Express",
              "train_type": "EXP",
              "train_from": "BLR",
              "train_to": "B01",
              "train_speed": 90
            }
          ],
          "train_stations_tbl": [
            {
              "station_id": "P01",
              "station_name": "PUNE"
            },
            {
              "station_id": "B01",
              "station_name": "BANGALORE"
            }
          ]
        },
        "expected": [
          {
            "train_id": 1,
            "train_name": "Maharashtra Express"
          },
          {
            "train_id": 2,
            "train_name": "Mumbai Local"
          }
        ]
      },
      {
        "id": "sql-008-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1002,
              "train_name": "ZZ_Maharashtra Express",
              "train_type": "EXP",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 1160
            }
          ],
          "train_stations_tbl": [
            {
              "station_id": "P01",
              "station_name": "ZZ_PUNE"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-008-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Maharashtra Express",
              "train_type": "EXP",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 80
            },
            {
              "train_id": 2,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 45
            },
            {
              "train_id": 3,
              "train_name": "Rajdhani Express",
              "train_type": "EXP",
              "train_from": "DEL",
              "train_to": "P01",
              "train_speed": 120
            },
            {
              "train_id": 4,
              "train_name": "Mysore Express",
              "train_type": "EXP",
              "train_from": "BLR",
              "train_to": "B01",
              "train_speed": 90
            },
            {
              "train_id": 101,
              "train_name": "Maharashtra Express",
              "train_type": "EXP",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 80
            },
            {
              "train_id": 103,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_from": "MUM",
              "train_to": "P01",
              "train_speed": 45
            },
            {
              "train_id": 105,
              "train_name": "Rajdhani Express",
              "train_type": "EXP",
              "train_from": "DEL",
              "train_to": "P01",
              "train_speed": 120
            },
            {
              "train_id": 107,
              "train_name": "Mysore Express",
              "train_type": "EXP",
              "train_from": "BLR",
              "train_to": "B01",
              "train_speed": 90
            }
          ],
          "train_stations_tbl": [
            {
              "station_id": "P01",
              "station_name": "PUNE"
            },
            {
              "station_id": "B01",
              "station_name": "BANGALORE"
            },
            {
              "station_id": "ALT_P01",
              "station_name": "PUNE"
            },
            {
              "station_id": "ALT_B01",
              "station_name": "BANGALORE"
            }
          ]
        },
        "expected": [
          {
            "train_id": 1,
            "train_name": "Maharashtra Express"
          },
          {
            "train_id": 2,
            "train_name": "Mumbai Local"
          },
          {
            "train_id": 101,
            "train_name": "Maharashtra Express"
          },
          {
            "train_id": 103,
            "train_name": "Mumbai Local"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-009",
    "title": "Employees with more than 10 CL or ML leaves",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "LEAVE_INFO",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FROM_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "TO_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "TOTAL_LEAVES",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "LEAVE_TYPE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the employee ID, type of leave and total number of leaves for employees who have taken more than 10 leaves, where the leave type is either Casual Leave (CL) or Medical Leave (ML).",
    "problem": "### Problem Statement\nWrite an SQL query to display the employee ID, type of leave and total number of leaves for employees who have taken more than 10 leaves, where the leave type is either Casual Leave (CL) or Medical Leave (ML).\n\n### Requirements:\n- **Expected Output Columns:** `EMPID`, `LEAVE_TYPE`, `TOTAL_LEAVES`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** IN, WHERE, AND\n- Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN.",
    "notes": [
      "Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN.",
      "Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  EMPID,\n  LEAVE_TYPE,\n  TOTAL_LEAVES\nFROM LEAVE_INFO\nWHERE TOTAL_LEAVES > 10\n  AND LEAVE_TYPE IN ('CL','ML');",
    "explanation": "Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN. Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10.",
    "expectedColumns": [
      "EMPID",
      "LEAVE_TYPE",
      "TOTAL_LEAVES"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "LEAVE_INFO": [
            {
              "EMPID": 1,
              "FROM_DATE": "2024-01-01",
              "TO_DATE": "2024-01-15",
              "TOTAL_LEAVES": 12,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 2,
              "FROM_DATE": "2024-02-01",
              "TO_DATE": "2024-02-20",
              "TOTAL_LEAVES": 15,
              "LEAVE_TYPE": "ML"
            },
            {
              "EMPID": 3,
              "FROM_DATE": "2024-03-01",
              "TO_DATE": "2024-03-05",
              "TOTAL_LEAVES": 5,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 4,
              "FROM_DATE": "2024-04-01",
              "TO_DATE": "2024-04-20",
              "TOTAL_LEAVES": 18,
              "LEAVE_TYPE": "PL"
            },
            {
              "EMPID": 5,
              "FROM_DATE": "2024-05-01",
              "TO_DATE": "2024-05-15",
              "TOTAL_LEAVES": 10,
              "LEAVE_TYPE": "ML"
            }
          ]
        },
        "output": [
          {
            "EMPID": 1,
            "LEAVE_TYPE": "CL",
            "TOTAL_LEAVES": 12
          },
          {
            "EMPID": 2,
            "LEAVE_TYPE": "ML",
            "TOTAL_LEAVES": 15
          }
        ],
        "explanation": "Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10."
      }
    ],
    "testCases": [
      {
        "id": "sql-009-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "LEAVE_INFO": [
            {
              "EMPID": 1,
              "FROM_DATE": "2024-01-01",
              "TO_DATE": "2024-01-15",
              "TOTAL_LEAVES": 12,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 2,
              "FROM_DATE": "2024-02-01",
              "TO_DATE": "2024-02-20",
              "TOTAL_LEAVES": 15,
              "LEAVE_TYPE": "ML"
            },
            {
              "EMPID": 3,
              "FROM_DATE": "2024-03-01",
              "TO_DATE": "2024-03-05",
              "TOTAL_LEAVES": 5,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 4,
              "FROM_DATE": "2024-04-01",
              "TO_DATE": "2024-04-20",
              "TOTAL_LEAVES": 18,
              "LEAVE_TYPE": "PL"
            },
            {
              "EMPID": 5,
              "FROM_DATE": "2024-05-01",
              "TO_DATE": "2024-05-15",
              "TOTAL_LEAVES": 10,
              "LEAVE_TYPE": "ML"
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "LEAVE_TYPE": "CL",
            "TOTAL_LEAVES": 12
          },
          {
            "EMPID": 2,
            "LEAVE_TYPE": "ML",
            "TOTAL_LEAVES": 15
          }
        ]
      },
      {
        "id": "sql-009-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "LEAVE_INFO": [
            {
              "EMPID": 1002,
              "FROM_DATE": "ZZ_2024-01-01",
              "TO_DATE": "ZZ_2024-01-15",
              "TOTAL_LEAVES": 1024,
              "LEAVE_TYPE": "CL"
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1002,
            "LEAVE_TYPE": "CL",
            "TOTAL_LEAVES": 1024
          }
        ]
      },
      {
        "id": "sql-009-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "LEAVE_INFO": [
            {
              "EMPID": 1,
              "FROM_DATE": "2024-01-01",
              "TO_DATE": "2024-01-15",
              "TOTAL_LEAVES": 12,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 2,
              "FROM_DATE": "2024-02-01",
              "TO_DATE": "2024-02-20",
              "TOTAL_LEAVES": 15,
              "LEAVE_TYPE": "ML"
            },
            {
              "EMPID": 3,
              "FROM_DATE": "2024-03-01",
              "TO_DATE": "2024-03-05",
              "TOTAL_LEAVES": 5,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 4,
              "FROM_DATE": "2024-04-01",
              "TO_DATE": "2024-04-20",
              "TOTAL_LEAVES": 18,
              "LEAVE_TYPE": "PL"
            },
            {
              "EMPID": 5,
              "FROM_DATE": "2024-05-01",
              "TO_DATE": "2024-05-15",
              "TOTAL_LEAVES": 10,
              "LEAVE_TYPE": "ML"
            },
            {
              "EMPID": 101,
              "FROM_DATE": "2024-01-01",
              "TO_DATE": "2024-01-15",
              "TOTAL_LEAVES": 12,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 103,
              "FROM_DATE": "2024-02-01",
              "TO_DATE": "2024-02-20",
              "TOTAL_LEAVES": 15,
              "LEAVE_TYPE": "ML"
            },
            {
              "EMPID": 105,
              "FROM_DATE": "2024-03-01",
              "TO_DATE": "2024-03-05",
              "TOTAL_LEAVES": 5,
              "LEAVE_TYPE": "CL"
            },
            {
              "EMPID": 107,
              "FROM_DATE": "2024-04-01",
              "TO_DATE": "2024-04-20",
              "TOTAL_LEAVES": 18,
              "LEAVE_TYPE": "PL"
            },
            {
              "EMPID": 109,
              "FROM_DATE": "2024-05-01",
              "TO_DATE": "2024-05-15",
              "TOTAL_LEAVES": 10,
              "LEAVE_TYPE": "ML"
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "LEAVE_TYPE": "CL",
            "TOTAL_LEAVES": 12
          },
          {
            "EMPID": 2,
            "LEAVE_TYPE": "ML",
            "TOTAL_LEAVES": 15
          },
          {
            "EMPID": 101,
            "LEAVE_TYPE": "CL",
            "TOTAL_LEAVES": 12
          },
          {
            "EMPID": 103,
            "LEAVE_TYPE": "ML",
            "TOTAL_LEAVES": 15
          }
        ]
      }
    ]
  },
  {
    "id": "sql-010",
    "title": "Employees working in HR",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "employee_info",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DEPTID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "department_info",
        "columns": [
          {
            "name": "DEPTID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "DEPTNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LOCATION",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "salary_info",
        "columns": [
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "BASIC",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the ID, Name, Department name and Basic salary of employees working in the 'HR' department.",
    "problem": "### Problem Statement\nWrite an SQL query to display the ID, Name, Department name and Basic salary of employees working in the 'HR' department.\n\n### Requirements:\n- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `BASIC`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, department filtering\n- Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR.",
    "notes": [
      "Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR.",
      "Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  ei.EMPID,\n  ei.EMPNAME,\n  di.DEPTNAME,\n  si.BASIC\nFROM employee_info ei\nJOIN department_info di ON ei.DEPTID = di.DEPTID\nJOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY\nWHERE di.DEPTNAME = 'HR';",
    "explanation": "Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR. Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500.",
    "expectedColumns": [
      "EMPID",
      "EMPNAME",
      "DEPTNAME",
      "BASIC"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ]
        },
        "output": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "DEPTNAME": "HR",
            "BASIC": 6500
          }
        ],
        "explanation": "Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500."
      }
    ],
    "testCases": [
      {
        "id": "sql-010-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "DEPTNAME": "HR",
            "BASIC": 6500
          }
        ]
      },
      {
        "id": "sql-010-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1002,
              "EMPNAME": "ZZ_Amit",
              "DEPTID": 1020,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "department_info": [
            {
              "DEPTID": 1020,
              "DEPTNAME": "HR",
              "LOCATION": "ZZ_BANGALORE"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 14000
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1002,
            "EMPNAME": "ZZ_Amit",
            "DEPTNAME": "HR",
            "BASIC": 14000
          }
        ]
      },
      {
        "id": "sql-010-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 101,
              "EMPNAME": "Amit",
              "DEPTID": 110,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 103,
              "EMPNAME": "Riya",
              "DEPTID": 121,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 105,
              "EMPNAME": "Neha",
              "DEPTID": 112,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            },
            {
              "DEPTID": 110,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 121,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            },
            {
              "EMPLOYEE_CATEGORY": "A",
              "BASIC": 6500
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "BASIC": 4800
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 3,
            "EMPNAME": "Neha",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "BASIC": 6500
          }
        ]
      }
    ]
  },
  {
    "id": "sql-011",
    "title": "House rent allowance for Bangalore or Cochin departments",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "employee_info",
        "columns": [
          {
            "name": "EMPID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DEPTID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "department_info",
        "columns": [
          {
            "name": "DEPTID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "DEPTNAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LOCATION",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "salary_info",
        "columns": [
          {
            "name": "EMPLOYEE_CATEGORY",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "HOUSE_RENT_ALLOWANCE",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the ID, Name, Department name and House Rent Allowance for employees who work in departments located in either BANGALORE or COCHIN.",
    "problem": "### Problem Statement\nWrite an SQL query to display the ID, Name, Department name and House Rent Allowance for employees who work in departments located in either BANGALORE or COCHIN.\n\n### Requirements:\n- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `HOUSE_RENT_ALLOWANCE`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, IN, location filtering\n- Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE.",
    "notes": [
      "Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE.",
      "Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  ei.EMPID,\n  ei.EMPNAME,\n  di.DEPTNAME,\n  si.HOUSE_RENT_ALLOWANCE\nFROM employee_info ei\nJOIN department_info di ON ei.DEPTID = di.DEPTID\nJOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY\nWHERE di.LOCATION IN ('BANGALORE','COCHIN');",
    "explanation": "Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE. Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded.",
    "expectedColumns": [
      "EMPID",
      "EMPNAME",
      "DEPTNAME",
      "HOUSE_RENT_ALLOWANCE"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 30,
              "EMPLOYEE_CATEGORY": "C"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            },
            {
              "DEPTID": 30,
              "DEPTNAME": "SALES",
              "LOCATION": "DELHI"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "HOUSE_RENT_ALLOWANCE": 1200
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "HOUSE_RENT_ALLOWANCE": 900
            },
            {
              "EMPLOYEE_CATEGORY": "C",
              "HOUSE_RENT_ALLOWANCE": 1500
            }
          ]
        },
        "output": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 2,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          }
        ],
        "explanation": "Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-011-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 30,
              "EMPLOYEE_CATEGORY": "C"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            },
            {
              "DEPTID": 30,
              "DEPTNAME": "SALES",
              "LOCATION": "DELHI"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "HOUSE_RENT_ALLOWANCE": 1200
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "HOUSE_RENT_ALLOWANCE": 900
            },
            {
              "EMPLOYEE_CATEGORY": "C",
              "HOUSE_RENT_ALLOWANCE": 1500
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 2,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          }
        ]
      },
      {
        "id": "sql-011-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1002,
              "EMPNAME": "ZZ_Amit",
              "DEPTID": 1020,
              "EMPLOYEE_CATEGORY": "A"
            }
          ],
          "department_info": [
            {
              "DEPTID": 1020,
              "DEPTNAME": "HR",
              "LOCATION": "ZZ_BANGALORE"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "HOUSE_RENT_ALLOWANCE": 3400
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-011-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "employee_info": [
            {
              "EMPID": 1,
              "EMPNAME": "Amit",
              "DEPTID": 10,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 2,
              "EMPNAME": "Riya",
              "DEPTID": 20,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 3,
              "EMPNAME": "Neha",
              "DEPTID": 30,
              "EMPLOYEE_CATEGORY": "C"
            },
            {
              "EMPID": 101,
              "EMPNAME": "Amit",
              "DEPTID": 110,
              "EMPLOYEE_CATEGORY": "A"
            },
            {
              "EMPID": 103,
              "EMPNAME": "Riya",
              "DEPTID": 121,
              "EMPLOYEE_CATEGORY": "B"
            },
            {
              "EMPID": 105,
              "EMPNAME": "Neha",
              "DEPTID": 132,
              "EMPLOYEE_CATEGORY": "C"
            }
          ],
          "department_info": [
            {
              "DEPTID": 10,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 20,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            },
            {
              "DEPTID": 30,
              "DEPTNAME": "SALES",
              "LOCATION": "DELHI"
            },
            {
              "DEPTID": 110,
              "DEPTNAME": "HR",
              "LOCATION": "BANGALORE"
            },
            {
              "DEPTID": 121,
              "DEPTNAME": "IT",
              "LOCATION": "COCHIN"
            },
            {
              "DEPTID": 132,
              "DEPTNAME": "SALES",
              "LOCATION": "DELHI"
            }
          ],
          "salary_info": [
            {
              "EMPLOYEE_CATEGORY": "A",
              "HOUSE_RENT_ALLOWANCE": 1200
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "HOUSE_RENT_ALLOWANCE": 900
            },
            {
              "EMPLOYEE_CATEGORY": "C",
              "HOUSE_RENT_ALLOWANCE": 1500
            },
            {
              "EMPLOYEE_CATEGORY": "A",
              "HOUSE_RENT_ALLOWANCE": 1200
            },
            {
              "EMPLOYEE_CATEGORY": "B",
              "HOUSE_RENT_ALLOWANCE": 900
            },
            {
              "EMPLOYEE_CATEGORY": "C",
              "HOUSE_RENT_ALLOWANCE": 1500
            }
          ]
        },
        "expected": [
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 1,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 2,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          },
          {
            "EMPID": 2,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 101,
            "EMPNAME": "Amit",
            "DEPTNAME": "HR",
            "HOUSE_RENT_ALLOWANCE": 1200
          },
          {
            "EMPID": 103,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          },
          {
            "EMPID": 103,
            "EMPNAME": "Riya",
            "DEPTNAME": "IT",
            "HOUSE_RENT_ALLOWANCE": 900
          }
        ]
      }
    ]
  },
  {
    "id": "sql-012",
    "title": "Average account balance by account type",
    "difficulty": "Hard",
    "duration": 15,
    "category": "AGGREGATION & GROUPING",
    "tableSchema": [
      {
        "name": "Accounts",
        "columns": [
          {
            "name": "Account_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Account_Type_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Account_Balance",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the account type ID and average account balance for each account type where the average account balance is greater than or equal to 50000.",
    "problem": "### Problem Statement\nWrite an SQL query to display the account type ID and average account balance for each account type where the average account balance is greater than or equal to 50000.\n\n### Requirements:\n- **Expected Output Columns:** `Account_Type_ID`, `Average`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** GROUP BY, AVG, HAVING\n- Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result.",
    "notes": [
      "Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result.",
      "Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  Account_Type_ID,\n  AVG(Account_Balance) AS Average\nFROM Accounts\nGROUP BY Account_Type_ID\nHAVING AVG(Account_Balance) >= 50000;",
    "explanation": "Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result. Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000.",
    "expectedColumns": [
      "Account_Type_ID",
      "Average"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "Accounts": [
            {
              "Account_ID": 1,
              "Account_Type_ID": 10,
              "Account_Balance": 60000
            },
            {
              "Account_ID": 2,
              "Account_Type_ID": 10,
              "Account_Balance": 40000
            },
            {
              "Account_ID": 3,
              "Account_Type_ID": 20,
              "Account_Balance": 70000
            },
            {
              "Account_ID": 4,
              "Account_Type_ID": 20,
              "Account_Balance": 80000
            },
            {
              "Account_ID": 5,
              "Account_Type_ID": 30,
              "Account_Balance": 30000
            }
          ]
        },
        "output": [
          {
            "Account_Type_ID": 10,
            "Average": 50000
          },
          {
            "Account_Type_ID": 20,
            "Average": 75000
          }
        ],
        "explanation": "Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000."
      }
    ],
    "testCases": [
      {
        "id": "sql-012-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "Accounts": [
            {
              "Account_ID": 1,
              "Account_Type_ID": 10,
              "Account_Balance": 60000
            },
            {
              "Account_ID": 2,
              "Account_Type_ID": 10,
              "Account_Balance": 40000
            },
            {
              "Account_ID": 3,
              "Account_Type_ID": 20,
              "Account_Balance": 70000
            },
            {
              "Account_ID": 4,
              "Account_Type_ID": 20,
              "Account_Balance": 80000
            },
            {
              "Account_ID": 5,
              "Account_Type_ID": 30,
              "Account_Balance": 30000
            }
          ]
        },
        "expected": [
          {
            "Account_Type_ID": 10,
            "Average": 50000
          },
          {
            "Account_Type_ID": 20,
            "Average": 75000
          }
        ]
      },
      {
        "id": "sql-012-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "Accounts": [
            {
              "Account_ID": 1002,
              "Account_Type_ID": 1020,
              "Account_Balance": 121000
            }
          ]
        },
        "expected": [
          {
            "Account_Type_ID": 1020,
            "Average": 121000
          }
        ]
      },
      {
        "id": "sql-012-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "Accounts": [
            {
              "Account_ID": 1,
              "Account_Type_ID": 10,
              "Account_Balance": 60000
            },
            {
              "Account_ID": 2,
              "Account_Type_ID": 10,
              "Account_Balance": 40000
            },
            {
              "Account_ID": 3,
              "Account_Type_ID": 20,
              "Account_Balance": 70000
            },
            {
              "Account_ID": 4,
              "Account_Type_ID": 20,
              "Account_Balance": 80000
            },
            {
              "Account_ID": 5,
              "Account_Type_ID": 30,
              "Account_Balance": 30000
            },
            {
              "Account_ID": 101,
              "Account_Type_ID": 110,
              "Account_Balance": 60000
            },
            {
              "Account_ID": 103,
              "Account_Type_ID": 111,
              "Account_Balance": 40000
            },
            {
              "Account_ID": 105,
              "Account_Type_ID": 122,
              "Account_Balance": 70000
            },
            {
              "Account_ID": 107,
              "Account_Type_ID": 123,
              "Account_Balance": 80000
            },
            {
              "Account_ID": 109,
              "Account_Type_ID": 134,
              "Account_Balance": 30000
            }
          ]
        },
        "expected": [
          {
            "Account_Type_ID": 10,
            "Average": 50000
          },
          {
            "Account_Type_ID": 20,
            "Average": 75000
          },
          {
            "Account_Type_ID": 110,
            "Average": 60000
          },
          {
            "Account_Type_ID": 122,
            "Average": 70000
          },
          {
            "Account_Type_ID": 123,
            "Average": 80000
          }
        ]
      }
    ]
  },
  {
    "id": "sql-013",
    "title": "Customers with bank balance at least 50,000",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "customer",
        "columns": [
          {
            "name": "Customer_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "First_Name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Last_Name",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "account",
        "columns": [
          {
            "name": "Account_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Customer_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "Balance",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the first name, last name and account ID of customers who have a bank balance greater than or equal to 50000. Order the output by the customer's first name.",
    "problem": "### Problem Statement\nWrite an SQL query to display the first name, last name and account ID of customers who have a bank balance greater than or equal to 50000. Order the output by the customer's first name.\n\n### Requirements:\n- **Expected Output Columns:** `First_Name`, `Last_Name`, `Account_ID`\n- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, WHERE, ORDER BY\n- Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name.",
    "notes": [
      "Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name.",
      "Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name.",
      "Rows must match the exact sorting specified."
    ],
    "starterCode": "",
    "solution": "SELECT\n  c.First_Name,\n  c.Last_Name,\n  a.Account_ID\nFROM customer c\nJOIN account a ON c.Customer_ID = a.Customer_ID\nWHERE a.Balance >= 50000\nORDER BY c.First_Name;",
    "explanation": "Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name. Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name.",
    "expectedColumns": [
      "First_Name",
      "Last_Name",
      "Account_ID"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Amit",
              "Last_Name": "Shah"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Riya",
              "Last_Name": "Roy"
            },
            {
              "Customer_ID": 3,
              "First_Name": "Neha",
              "Last_Name": "Das"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Raj",
              "Last_Name": "Kumar"
            }
          ],
          "account": [
            {
              "Account_ID": 101,
              "Customer_ID": 1,
              "Balance": 50000
            },
            {
              "Account_ID": 102,
              "Customer_ID": 2,
              "Balance": 75000
            },
            {
              "Account_ID": 103,
              "Customer_ID": 3,
              "Balance": 45000
            },
            {
              "Account_ID": 104,
              "Customer_ID": 4,
              "Balance": 60000
            }
          ]
        },
        "output": [
          {
            "First_Name": "Amit",
            "Last_Name": "Shah",
            "Account_ID": 101
          },
          {
            "First_Name": "Raj",
            "Last_Name": "Kumar",
            "Account_ID": 104
          },
          {
            "First_Name": "Riya",
            "Last_Name": "Roy",
            "Account_ID": 102
          }
        ],
        "explanation": "Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name."
      }
    ],
    "testCases": [
      {
        "id": "sql-013-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Amit",
              "Last_Name": "Shah"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Riya",
              "Last_Name": "Roy"
            },
            {
              "Customer_ID": 3,
              "First_Name": "Neha",
              "Last_Name": "Das"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Raj",
              "Last_Name": "Kumar"
            }
          ],
          "account": [
            {
              "Account_ID": 101,
              "Customer_ID": 1,
              "Balance": 50000
            },
            {
              "Account_ID": 102,
              "Customer_ID": 2,
              "Balance": 75000
            },
            {
              "Account_ID": 103,
              "Customer_ID": 3,
              "Balance": 45000
            },
            {
              "Account_ID": 104,
              "Customer_ID": 4,
              "Balance": 60000
            }
          ]
        },
        "expected": [
          {
            "First_Name": "Amit",
            "Last_Name": "Shah",
            "Account_ID": 101
          },
          {
            "First_Name": "Raj",
            "Last_Name": "Kumar",
            "Account_ID": 104
          },
          {
            "First_Name": "Riya",
            "Last_Name": "Roy",
            "Account_ID": 102
          }
        ]
      },
      {
        "id": "sql-013-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "customer": [
            {
              "Customer_ID": 1002,
              "First_Name": "ZZ_Amit",
              "Last_Name": "ZZ_Shah"
            }
          ],
          "account": [
            {
              "Account_ID": 1202,
              "Customer_ID": 1002,
              "Balance": 101000
            }
          ]
        },
        "expected": [
          {
            "First_Name": "ZZ_Amit",
            "Last_Name": "ZZ_Shah",
            "Account_ID": 1202
          }
        ]
      },
      {
        "id": "sql-013-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "customer": [
            {
              "Customer_ID": 1,
              "First_Name": "Amit",
              "Last_Name": "Shah"
            },
            {
              "Customer_ID": 2,
              "First_Name": "Riya",
              "Last_Name": "Roy"
            },
            {
              "Customer_ID": 3,
              "First_Name": "Neha",
              "Last_Name": "Das"
            },
            {
              "Customer_ID": 4,
              "First_Name": "Raj",
              "Last_Name": "Kumar"
            },
            {
              "Customer_ID": 101,
              "First_Name": "Amit",
              "Last_Name": "Shah"
            },
            {
              "Customer_ID": 103,
              "First_Name": "Riya",
              "Last_Name": "Roy"
            },
            {
              "Customer_ID": 105,
              "First_Name": "Neha",
              "Last_Name": "Das"
            },
            {
              "Customer_ID": 107,
              "First_Name": "Raj",
              "Last_Name": "Kumar"
            }
          ],
          "account": [
            {
              "Account_ID": 101,
              "Customer_ID": 1,
              "Balance": 50000
            },
            {
              "Account_ID": 102,
              "Customer_ID": 2,
              "Balance": 75000
            },
            {
              "Account_ID": 103,
              "Customer_ID": 3,
              "Balance": 45000
            },
            {
              "Account_ID": 104,
              "Customer_ID": 4,
              "Balance": 60000
            },
            {
              "Account_ID": 201,
              "Customer_ID": 101,
              "Balance": 50000
            },
            {
              "Account_ID": 203,
              "Customer_ID": 103,
              "Balance": 75000
            },
            {
              "Account_ID": 205,
              "Customer_ID": 105,
              "Balance": 45000
            },
            {
              "Account_ID": 207,
              "Customer_ID": 107,
              "Balance": 60000
            }
          ]
        },
        "expected": [
          {
            "First_Name": "Amit",
            "Last_Name": "Shah",
            "Account_ID": 101
          },
          {
            "First_Name": "Amit",
            "Last_Name": "Shah",
            "Account_ID": 201
          },
          {
            "First_Name": "Raj",
            "Last_Name": "Kumar",
            "Account_ID": 104
          },
          {
            "First_Name": "Raj",
            "Last_Name": "Kumar",
            "Account_ID": 207
          },
          {
            "First_Name": "Riya",
            "Last_Name": "Roy",
            "Account_ID": 102
          },
          {
            "First_Name": "Riya",
            "Last_Name": "Roy",
            "Account_ID": 203
          }
        ]
      }
    ]
  },
  {
    "id": "sql-014",
    "title": "Staff with salary greater than 50,000",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "staff",
        "columns": [
          {
            "name": "firstname",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "position",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "salary",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the First name (using alias 'Staff First Name'), Position and salary of staff members where salary is greater than 50000.",
    "problem": "### Problem Statement\nWrite an SQL query to display the First name (using alias 'Staff First Name'), Position and salary of staff members where salary is greater than 50000.\n\n### Requirements:\n- **Expected Output Columns:** `Staff First Name`, `POSITION`, `SALARY`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** alias, WHERE\n- Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested.",
    "notes": [
      "Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested.",
      "Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  firstname AS `Staff First Name`,\n  position AS POSITION,\n  salary AS SALARY\nFROM staff\nWHERE salary > 50000;",
    "explanation": "Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested. Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded.",
    "expectedColumns": [
      "Staff First Name",
      "POSITION",
      "SALARY"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "staff": [
            {
              "firstname": "Amit",
              "position": "Manager",
              "salary": 60000
            },
            {
              "firstname": "Riya",
              "position": "Analyst",
              "salary": 50000
            },
            {
              "firstname": "Neha",
              "position": "Developer",
              "salary": 75000
            },
            {
              "firstname": "Raj",
              "position": "Clerk",
              "salary": 45000
            }
          ]
        },
        "output": [
          {
            "Staff First Name": "Amit",
            "POSITION": "Manager",
            "SALARY": 60000
          },
          {
            "Staff First Name": "Neha",
            "POSITION": "Developer",
            "SALARY": 75000
          }
        ],
        "explanation": "Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-014-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "staff": [
            {
              "firstname": "Amit",
              "position": "Manager",
              "salary": 60000
            },
            {
              "firstname": "Riya",
              "position": "Analyst",
              "salary": 50000
            },
            {
              "firstname": "Neha",
              "position": "Developer",
              "salary": 75000
            },
            {
              "firstname": "Raj",
              "position": "Clerk",
              "salary": 45000
            }
          ]
        },
        "expected": [
          {
            "Staff First Name": "Amit",
            "POSITION": "Manager",
            "SALARY": 60000
          },
          {
            "Staff First Name": "Neha",
            "POSITION": "Developer",
            "SALARY": 75000
          }
        ]
      },
      {
        "id": "sql-014-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "staff": [
            {
              "firstname": "ZZ_Amit",
              "position": "ZZ_Manager",
              "salary": 121000
            }
          ]
        },
        "expected": [
          {
            "Staff First Name": "ZZ_Amit",
            "POSITION": "ZZ_Manager",
            "SALARY": 121000
          }
        ]
      },
      {
        "id": "sql-014-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "staff": [
            {
              "firstname": "Amit",
              "position": "Manager",
              "salary": 60000
            },
            {
              "firstname": "Riya",
              "position": "Analyst",
              "salary": 50000
            },
            {
              "firstname": "Neha",
              "position": "Developer",
              "salary": 75000
            },
            {
              "firstname": "Raj",
              "position": "Clerk",
              "salary": 45000
            },
            {
              "firstname": "Amit",
              "position": "Manager",
              "salary": 60000
            },
            {
              "firstname": "Riya",
              "position": "Analyst",
              "salary": 50000
            },
            {
              "firstname": "Neha",
              "position": "Developer",
              "salary": 75000
            },
            {
              "firstname": "Raj",
              "position": "Clerk",
              "salary": 45000
            }
          ]
        },
        "expected": [
          {
            "Staff First Name": "Amit",
            "POSITION": "Manager",
            "SALARY": 60000
          },
          {
            "Staff First Name": "Neha",
            "POSITION": "Developer",
            "SALARY": 75000
          },
          {
            "Staff First Name": "Amit",
            "POSITION": "Manager",
            "SALARY": 60000
          },
          {
            "Staff First Name": "Neha",
            "POSITION": "Developer",
            "SALARY": 75000
          }
        ]
      }
    ]
  },
  {
    "id": "sql-015",
    "title": "Patients with unpaid bills",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "Patient",
        "columns": [
          {
            "name": "PatientID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FirstName",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LastName",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "Email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "AdmissionDate",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Billing",
        "columns": [
          {
            "name": "BillingID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PatientID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "TotalAmount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PaymentStatus",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the full name (alias 'PatientName'), email (alias 'PatientEmail'), admission date (alias 'AdmissionDate'), and total billing amount (alias 'TotalBilling') for each patient. Include only patients with unpaid bills and sort by total billing amount descending.",
    "problem": "### Problem Statement\nWrite an SQL query to display the full name (alias 'PatientName'), email (alias 'PatientEmail'), admission date (alias 'AdmissionDate'), and total billing amount (alias 'TotalBilling') for each patient. Include only patients with unpaid bills and sort by total billing amount descending.\n\n### Requirements:\n- **Expected Output Columns:** `PatientName`, `PatientEmail`, `AdmissionDate`, `TotalBilling`\n- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, CONCAT, alias, ORDER BY DESC\n- Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order.",
    "notes": [
      "Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order.",
      "John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid.",
      "Rows must match the exact sorting specified."
    ],
    "starterCode": "",
    "solution": "SELECT\n  CONCAT(p.FirstName, ' ', p.LastName) AS PatientName,\n  p.Email AS PatientEmail,\n  p.AdmissionDate AS AdmissionDate,\n  b.TotalAmount AS TotalBilling\nFROM Patient p\nJOIN Billing b ON p.PatientID = b.PatientID\nWHERE b.PaymentStatus = 'Unpaid'\nORDER BY b.TotalAmount DESC;",
    "explanation": "Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order. John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid.",
    "expectedColumns": [
      "PatientName",
      "PatientEmail",
      "AdmissionDate",
      "TotalBilling"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "Patient": [
            {
              "PatientID": 1,
              "FirstName": "John",
              "LastName": "Doe",
              "Email": "john@example.com",
              "AdmissionDate": "2024-01-10"
            },
            {
              "PatientID": 2,
              "FirstName": "Maya",
              "LastName": "Singh",
              "Email": "maya@example.com",
              "AdmissionDate": "2024-01-11"
            },
            {
              "PatientID": 3,
              "FirstName": "Raj",
              "LastName": "Kumar",
              "Email": "raj@example.com",
              "AdmissionDate": "2024-01-12"
            }
          ],
          "Billing": [
            {
              "BillingID": 101,
              "PatientID": 1,
              "TotalAmount": 9000,
              "PaymentStatus": "Unpaid"
            },
            {
              "BillingID": 102,
              "PatientID": 2,
              "TotalAmount": 12000,
              "PaymentStatus": "Paid"
            },
            {
              "BillingID": 103,
              "PatientID": 3,
              "TotalAmount": 15000,
              "PaymentStatus": "Unpaid"
            }
          ]
        },
        "output": [
          {
            "PatientName": "Raj Kumar",
            "PatientEmail": "raj@example.com",
            "AdmissionDate": "2024-01-12",
            "TotalBilling": 15000
          },
          {
            "PatientName": "John Doe",
            "PatientEmail": "john@example.com",
            "AdmissionDate": "2024-01-10",
            "TotalBilling": 9000
          }
        ],
        "explanation": "John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid."
      }
    ],
    "testCases": [
      {
        "id": "sql-015-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "Patient": [
            {
              "PatientID": 1,
              "FirstName": "John",
              "LastName": "Doe",
              "Email": "john@example.com",
              "AdmissionDate": "2024-01-10"
            },
            {
              "PatientID": 2,
              "FirstName": "Maya",
              "LastName": "Singh",
              "Email": "maya@example.com",
              "AdmissionDate": "2024-01-11"
            },
            {
              "PatientID": 3,
              "FirstName": "Raj",
              "LastName": "Kumar",
              "Email": "raj@example.com",
              "AdmissionDate": "2024-01-12"
            }
          ],
          "Billing": [
            {
              "BillingID": 101,
              "PatientID": 1,
              "TotalAmount": 9000,
              "PaymentStatus": "Unpaid"
            },
            {
              "BillingID": 102,
              "PatientID": 2,
              "TotalAmount": 12000,
              "PaymentStatus": "Paid"
            },
            {
              "BillingID": 103,
              "PatientID": 3,
              "TotalAmount": 15000,
              "PaymentStatus": "Unpaid"
            }
          ]
        },
        "expected": [
          {
            "PatientName": "Raj Kumar",
            "PatientEmail": "raj@example.com",
            "AdmissionDate": "2024-01-12",
            "TotalBilling": 15000
          },
          {
            "PatientName": "John Doe",
            "PatientEmail": "john@example.com",
            "AdmissionDate": "2024-01-10",
            "TotalBilling": 9000
          }
        ]
      },
      {
        "id": "sql-015-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "Patient": [
            {
              "PatientID": 1002,
              "FirstName": "ZZ_John",
              "LastName": "Doe",
              "Email": "ZZ_john@example.com",
              "AdmissionDate": "ZZ_2024-01-10"
            }
          ],
          "Billing": [
            {
              "BillingID": 1202,
              "PatientID": 1002,
              "TotalAmount": 19000,
              "PaymentStatus": "ZZ_Unpaid"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-015-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "Patient": [
            {
              "PatientID": 1,
              "FirstName": "John",
              "LastName": "Doe",
              "Email": "john@example.com",
              "AdmissionDate": "2024-01-10"
            },
            {
              "PatientID": 2,
              "FirstName": "Maya",
              "LastName": "Singh",
              "Email": "maya@example.com",
              "AdmissionDate": "2024-01-11"
            },
            {
              "PatientID": 3,
              "FirstName": "Raj",
              "LastName": "Kumar",
              "Email": "raj@example.com",
              "AdmissionDate": "2024-01-12"
            },
            {
              "PatientID": 101,
              "FirstName": "John",
              "LastName": "Doe",
              "Email": "john@example.com",
              "AdmissionDate": "2024-01-10"
            },
            {
              "PatientID": 103,
              "FirstName": "Maya",
              "LastName": "Singh",
              "Email": "maya@example.com",
              "AdmissionDate": "2024-01-11"
            },
            {
              "PatientID": 105,
              "FirstName": "Raj",
              "LastName": "Kumar",
              "Email": "raj@example.com",
              "AdmissionDate": "2024-01-12"
            }
          ],
          "Billing": [
            {
              "BillingID": 101,
              "PatientID": 1,
              "TotalAmount": 9000,
              "PaymentStatus": "Unpaid"
            },
            {
              "BillingID": 102,
              "PatientID": 2,
              "TotalAmount": 12000,
              "PaymentStatus": "Paid"
            },
            {
              "BillingID": 103,
              "PatientID": 3,
              "TotalAmount": 15000,
              "PaymentStatus": "Unpaid"
            },
            {
              "BillingID": 201,
              "PatientID": 101,
              "TotalAmount": 9000,
              "PaymentStatus": "Unpaid"
            },
            {
              "BillingID": 203,
              "PatientID": 103,
              "TotalAmount": 12000,
              "PaymentStatus": "Paid"
            },
            {
              "BillingID": 205,
              "PatientID": 105,
              "TotalAmount": 15000,
              "PaymentStatus": "Unpaid"
            }
          ]
        },
        "expected": [
          {
            "PatientName": "Raj Kumar",
            "PatientEmail": "raj@example.com",
            "AdmissionDate": "2024-01-12",
            "TotalBilling": 15000
          },
          {
            "PatientName": "Raj Kumar",
            "PatientEmail": "raj@example.com",
            "AdmissionDate": "2024-01-12",
            "TotalBilling": 15000
          },
          {
            "PatientName": "John Doe",
            "PatientEmail": "john@example.com",
            "AdmissionDate": "2024-01-10",
            "TotalBilling": 9000
          },
          {
            "PatientName": "John Doe",
            "PatientEmail": "john@example.com",
            "AdmissionDate": "2024-01-10",
            "TotalBilling": 9000
          }
        ]
      }
    ]
  },
  {
    "id": "sql-016",
    "title": "Flights operated by Singapore Airlines",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "Flight",
        "columns": [
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "AIRPLANE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "DEPARTURE_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DEPARTURE_TIME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Airplane",
        "columns": [
          {
            "name": "AIRPLANE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "AIRLINE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "MODELNUMBER",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "MANUFACTURER",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Airline",
        "columns": [
          {
            "name": "AIRLINE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the list of flights operated by Singapore Airlines, including the flight ID, departure date and departure time.",
    "problem": "### Problem Statement\nWrite an SQL query to display the list of flights operated by Singapore Airlines, including the flight ID, departure date and departure time.\n\n### Requirements:\n- **Expected Output Columns:** `FLIGHT_ID`, `DEPARTURE_DATE`, `DEPARTURE_TIME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** three-table JOIN, foreign keys, filtering\n- Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines.",
    "notes": [
      "Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines.",
      "Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  f.FLIGHT_ID,\n  f.DEPARTURE_DATE,\n  f.DEPARTURE_TIME\nFROM Flight f\nJOIN Airplane a ON f.AIRPLANE_ID = a.AIRPLANE_ID\nJOIN Airline al ON a.AIRLINE_ID = al.AIRLINE_ID\nWHERE al.NAME = 'Singapore Airlines';",
    "explanation": "Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines. Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline.",
    "expectedColumns": [
      "FLIGHT_ID",
      "DEPARTURE_DATE",
      "DEPARTURE_TIME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "Flight": [
            {
              "FLIGHT_ID": 1,
              "AIRPLANE_ID": 10,
              "DEPARTURE_DATE": "2024-02-10",
              "DEPARTURE_TIME": "09:00"
            },
            {
              "FLIGHT_ID": 2,
              "AIRPLANE_ID": 11,
              "DEPARTURE_DATE": "2024-02-11",
              "DEPARTURE_TIME": "12:00"
            },
            {
              "FLIGHT_ID": 3,
              "AIRPLANE_ID": 12,
              "DEPARTURE_DATE": "2024-02-12",
              "DEPARTURE_TIME": "18:00"
            }
          ],
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ],
          "Airline": [
            {
              "AIRLINE_ID": 100,
              "NAME": "Singapore Airlines"
            },
            {
              "AIRLINE_ID": 101,
              "NAME": "Other Airline"
            }
          ]
        },
        "output": [
          {
            "FLIGHT_ID": 1,
            "DEPARTURE_DATE": "2024-02-10",
            "DEPARTURE_TIME": "09:00"
          },
          {
            "FLIGHT_ID": 3,
            "DEPARTURE_DATE": "2024-02-12",
            "DEPARTURE_TIME": "18:00"
          }
        ],
        "explanation": "Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline."
      }
    ],
    "testCases": [
      {
        "id": "sql-016-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "Flight": [
            {
              "FLIGHT_ID": 1,
              "AIRPLANE_ID": 10,
              "DEPARTURE_DATE": "2024-02-10",
              "DEPARTURE_TIME": "09:00"
            },
            {
              "FLIGHT_ID": 2,
              "AIRPLANE_ID": 11,
              "DEPARTURE_DATE": "2024-02-11",
              "DEPARTURE_TIME": "12:00"
            },
            {
              "FLIGHT_ID": 3,
              "AIRPLANE_ID": 12,
              "DEPARTURE_DATE": "2024-02-12",
              "DEPARTURE_TIME": "18:00"
            }
          ],
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ],
          "Airline": [
            {
              "AIRLINE_ID": 100,
              "NAME": "Singapore Airlines"
            },
            {
              "AIRLINE_ID": 101,
              "NAME": "Other Airline"
            }
          ]
        },
        "expected": [
          {
            "FLIGHT_ID": 1,
            "DEPARTURE_DATE": "2024-02-10",
            "DEPARTURE_TIME": "09:00"
          },
          {
            "FLIGHT_ID": 3,
            "DEPARTURE_DATE": "2024-02-12",
            "DEPARTURE_TIME": "18:00"
          }
        ]
      },
      {
        "id": "sql-016-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "Flight": [
            {
              "FLIGHT_ID": 1002,
              "AIRPLANE_ID": 1020,
              "DEPARTURE_DATE": "ZZ_2024-02-10",
              "DEPARTURE_TIME": "ZZ_09:00"
            }
          ],
          "Airplane": [
            {
              "AIRPLANE_ID": 1020,
              "AIRLINE_ID": 1200,
              "MODELNUMBER": "ZZ_A320",
              "MANUFACTURER": "ZZ_Airbus"
            }
          ],
          "Airline": [
            {
              "AIRLINE_ID": 1200,
              "NAME": "ZZ_Singapore Airlines"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-016-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "Flight": [
            {
              "FLIGHT_ID": 1,
              "AIRPLANE_ID": 10,
              "DEPARTURE_DATE": "2024-02-10",
              "DEPARTURE_TIME": "09:00"
            },
            {
              "FLIGHT_ID": 2,
              "AIRPLANE_ID": 11,
              "DEPARTURE_DATE": "2024-02-11",
              "DEPARTURE_TIME": "12:00"
            },
            {
              "FLIGHT_ID": 3,
              "AIRPLANE_ID": 12,
              "DEPARTURE_DATE": "2024-02-12",
              "DEPARTURE_TIME": "18:00"
            },
            {
              "FLIGHT_ID": 101,
              "AIRPLANE_ID": 110,
              "DEPARTURE_DATE": "2024-02-10",
              "DEPARTURE_TIME": "09:00"
            },
            {
              "FLIGHT_ID": 103,
              "AIRPLANE_ID": 112,
              "DEPARTURE_DATE": "2024-02-11",
              "DEPARTURE_TIME": "12:00"
            },
            {
              "FLIGHT_ID": 105,
              "AIRPLANE_ID": 114,
              "DEPARTURE_DATE": "2024-02-12",
              "DEPARTURE_TIME": "18:00"
            }
          ],
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 110,
              "AIRLINE_ID": 200,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 112,
              "AIRLINE_ID": 202,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 114,
              "AIRLINE_ID": 202,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ],
          "Airline": [
            {
              "AIRLINE_ID": 100,
              "NAME": "Singapore Airlines"
            },
            {
              "AIRLINE_ID": 101,
              "NAME": "Other Airline"
            },
            {
              "AIRLINE_ID": 200,
              "NAME": "Singapore Airlines"
            },
            {
              "AIRLINE_ID": 202,
              "NAME": "Other Airline"
            }
          ]
        },
        "expected": [
          {
            "FLIGHT_ID": 1,
            "DEPARTURE_DATE": "2024-02-10",
            "DEPARTURE_TIME": "09:00"
          },
          {
            "FLIGHT_ID": 3,
            "DEPARTURE_DATE": "2024-02-12",
            "DEPARTURE_TIME": "18:00"
          },
          {
            "FLIGHT_ID": 101,
            "DEPARTURE_DATE": "2024-02-10",
            "DEPARTURE_TIME": "09:00"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-017",
    "title": "Airbus airplanes",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "Airplane",
        "columns": [
          {
            "name": "AIRPLANE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "AIRLINE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "MODELNUMBER",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "MANUFACTURER",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the AIRPLANE_ID and MODELNUMBER of airplanes manufactured by Airbus.",
    "problem": "### Problem Statement\nWrite an SQL query to display the AIRPLANE_ID and MODELNUMBER of airplanes manufactured by Airbus.\n\n### Requirements:\n- **Expected Output Columns:** `AIRPLANE_ID`, `MODELNUMBER`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** WHERE, string comparison\n- This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'.",
    "notes": [
      "This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'.",
      "Only rows whose manufacturer is exactly Airbus are returned.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  AIRPLANE_ID,\n  MODELNUMBER\nFROM Airplane\nWHERE MANUFACTURER = 'Airbus';",
    "explanation": "This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'. Only rows whose manufacturer is exactly Airbus are returned.",
    "expectedColumns": [
      "AIRPLANE_ID",
      "MODELNUMBER"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ]
        },
        "output": [
          {
            "AIRPLANE_ID": 10,
            "MODELNUMBER": "A320"
          },
          {
            "AIRPLANE_ID": 12,
            "MODELNUMBER": "A350"
          }
        ],
        "explanation": "Only rows whose manufacturer is exactly Airbus are returned."
      }
    ],
    "testCases": [
      {
        "id": "sql-017-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ]
        },
        "expected": [
          {
            "AIRPLANE_ID": 10,
            "MODELNUMBER": "A320"
          },
          {
            "AIRPLANE_ID": 12,
            "MODELNUMBER": "A350"
          }
        ]
      },
      {
        "id": "sql-017-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "Airplane": [
            {
              "AIRPLANE_ID": 1020,
              "AIRLINE_ID": 1200,
              "MODELNUMBER": "ZZ_A320",
              "MANUFACTURER": "ZZ_Airbus"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-017-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "Airplane": [
            {
              "AIRPLANE_ID": 10,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 11,
              "AIRLINE_ID": 101,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 12,
              "AIRLINE_ID": 100,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 110,
              "AIRLINE_ID": 200,
              "MODELNUMBER": "A320",
              "MANUFACTURER": "Airbus"
            },
            {
              "AIRPLANE_ID": 112,
              "AIRLINE_ID": 202,
              "MODELNUMBER": "B737",
              "MANUFACTURER": "Boeing"
            },
            {
              "AIRPLANE_ID": 114,
              "AIRLINE_ID": 202,
              "MODELNUMBER": "A350",
              "MANUFACTURER": "Airbus"
            }
          ]
        },
        "expected": [
          {
            "AIRPLANE_ID": 10,
            "MODELNUMBER": "A320"
          },
          {
            "AIRPLANE_ID": 12,
            "MODELNUMBER": "A350"
          },
          {
            "AIRPLANE_ID": 110,
            "MODELNUMBER": "A320"
          },
          {
            "AIRPLANE_ID": 114,
            "MODELNUMBER": "A350"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-018",
    "title": "Students registered in 2012",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "student",
        "columns": [
          {
            "name": "STUDENT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "LAST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "registration",
        "columns": [
          {
            "name": "REG_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "STUDENT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "REG_DATE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the last names of students who registered in the year 2012.",
    "problem": "### Problem Statement\nWrite an SQL query to display the last names of students who registered in the year 2012.\n\n### Requirements:\n- **Expected Output Columns:** `LAST_NAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, date/year filtering\n- Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative.",
    "notes": [
      "Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative.",
      "Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  s.LAST_NAME\nFROM student s\nJOIN registration r ON s.STUDENT_ID = r.STUDENT_ID\nWHERE EXTRACT(YEAR\nFROM r.REG_DATE) = 2012;",
    "explanation": "Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative. Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded.",
    "expectedColumns": [
      "LAST_NAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "student": [
            {
              "STUDENT_ID": 1,
              "LAST_NAME": "Shah",
              "FIRST_NAME": "Amit"
            },
            {
              "STUDENT_ID": 2,
              "LAST_NAME": "Roy",
              "FIRST_NAME": "Riya"
            },
            {
              "STUDENT_ID": 3,
              "LAST_NAME": "Das",
              "FIRST_NAME": "Neha"
            }
          ],
          "registration": [
            {
              "REG_ID": 101,
              "STUDENT_ID": 1,
              "REG_DATE": "2012-05-10"
            },
            {
              "REG_ID": 102,
              "STUDENT_ID": 2,
              "REG_DATE": "2011-06-12"
            },
            {
              "REG_ID": 103,
              "STUDENT_ID": 3,
              "REG_DATE": "2012-09-01"
            }
          ]
        },
        "output": [
          {
            "LAST_NAME": "Shah"
          },
          {
            "LAST_NAME": "Das"
          }
        ],
        "explanation": "Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-018-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "student": [
            {
              "STUDENT_ID": 1,
              "LAST_NAME": "Shah",
              "FIRST_NAME": "Amit"
            },
            {
              "STUDENT_ID": 2,
              "LAST_NAME": "Roy",
              "FIRST_NAME": "Riya"
            },
            {
              "STUDENT_ID": 3,
              "LAST_NAME": "Das",
              "FIRST_NAME": "Neha"
            }
          ],
          "registration": [
            {
              "REG_ID": 101,
              "STUDENT_ID": 1,
              "REG_DATE": "2012-05-10"
            },
            {
              "REG_ID": 102,
              "STUDENT_ID": 2,
              "REG_DATE": "2011-06-12"
            },
            {
              "REG_ID": 103,
              "STUDENT_ID": 3,
              "REG_DATE": "2012-09-01"
            }
          ]
        },
        "expected": [
          {
            "LAST_NAME": "Shah"
          },
          {
            "LAST_NAME": "Das"
          }
        ]
      },
      {
        "id": "sql-018-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "student": [
            {
              "STUDENT_ID": 1002,
              "LAST_NAME": "ZZ_Shah",
              "FIRST_NAME": "ZZ_Amit"
            }
          ],
          "registration": [
            {
              "REG_ID": 1202,
              "STUDENT_ID": 1002,
              "REG_DATE": "ZZ_2012-05-10"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-018-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "student": [
            {
              "STUDENT_ID": 1,
              "LAST_NAME": "Shah",
              "FIRST_NAME": "Amit"
            },
            {
              "STUDENT_ID": 2,
              "LAST_NAME": "Roy",
              "FIRST_NAME": "Riya"
            },
            {
              "STUDENT_ID": 3,
              "LAST_NAME": "Das",
              "FIRST_NAME": "Neha"
            },
            {
              "STUDENT_ID": 101,
              "LAST_NAME": "Shah",
              "FIRST_NAME": "Amit"
            },
            {
              "STUDENT_ID": 103,
              "LAST_NAME": "Roy",
              "FIRST_NAME": "Riya"
            },
            {
              "STUDENT_ID": 105,
              "LAST_NAME": "Das",
              "FIRST_NAME": "Neha"
            }
          ],
          "registration": [
            {
              "REG_ID": 101,
              "STUDENT_ID": 1,
              "REG_DATE": "2012-05-10"
            },
            {
              "REG_ID": 102,
              "STUDENT_ID": 2,
              "REG_DATE": "2011-06-12"
            },
            {
              "REG_ID": 103,
              "STUDENT_ID": 3,
              "REG_DATE": "2012-09-01"
            },
            {
              "REG_ID": 201,
              "STUDENT_ID": 101,
              "REG_DATE": "2012-05-10"
            },
            {
              "REG_ID": 203,
              "STUDENT_ID": 103,
              "REG_DATE": "2011-06-12"
            },
            {
              "REG_ID": 205,
              "STUDENT_ID": 105,
              "REG_DATE": "2012-09-01"
            }
          ]
        },
        "expected": [
          {
            "LAST_NAME": "Shah"
          },
          {
            "LAST_NAME": "Das"
          },
          {
            "LAST_NAME": "Shah"
          },
          {
            "LAST_NAME": "Das"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-019",
    "title": "Cabin crew with first name A and flight ID ending in 1",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "cabincrew",
        "columns": [
          {
            "name": "CABINCREW_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LAST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "CONTACT",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "flight",
        "columns": [
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_TO",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the cabin crew ID, first name, last name, contact and flight ID of cabin crew members whose first name starts with 'A' and whose flight ID ends with '1'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the cabin crew ID, first name, last name, contact and flight ID of cabin crew members whose first name starts with 'A' and whose flight ID ends with '1'.\n\n### Requirements:\n- **Expected Output Columns:** `CABINCREW_ID`, `FIRST_NAME`, `LAST_NAME`, `CONTACT`, `FLIGHT_ID`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, LIKE, multiple filters\n- Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1.",
    "notes": [
      "Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1.",
      "Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  c.CABINCREW_ID,\n  c.FIRST_NAME,\n  c.LAST_NAME,\n  c.CONTACT,\n  f.FLIGHT_ID\nFROM cabincrew c\nJOIN flight f ON c.FLIGHT_ID = f.FLIGHT_ID\nWHERE c.FIRST_NAME LIKE 'A%'\n  AND f.FLIGHT_ID LIKE '%1';",
    "explanation": "Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1. Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition.",
    "expectedColumns": [
      "CABINCREW_ID",
      "FIRST_NAME",
      "LAST_NAME",
      "CONTACT",
      "FLIGHT_ID"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "cabincrew": [
            {
              "CABINCREW_ID": 1,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Anita",
              "LAST_NAME": "Sharma",
              "CONTACT": "90001"
            },
            {
              "CABINCREW_ID": 2,
              "FLIGHT_ID": 12,
              "FIRST_NAME": "Aman",
              "LAST_NAME": "Roy",
              "CONTACT": "90002"
            },
            {
              "CABINCREW_ID": 3,
              "FLIGHT_ID": 21,
              "FIRST_NAME": "Ajay",
              "LAST_NAME": "Das",
              "CONTACT": "90003"
            },
            {
              "CABINCREW_ID": 4,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Khan",
              "CONTACT": "90004"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 11,
              "FLIGHT_TO": "Paris"
            },
            {
              "FLIGHT_ID": 12,
              "FLIGHT_TO": "London"
            },
            {
              "FLIGHT_ID": 21,
              "FLIGHT_TO": "Rome"
            }
          ]
        },
        "output": [
          {
            "CABINCREW_ID": 1,
            "FIRST_NAME": "Anita",
            "LAST_NAME": "Sharma",
            "CONTACT": "90001",
            "FLIGHT_ID": 11
          },
          {
            "CABINCREW_ID": 3,
            "FIRST_NAME": "Ajay",
            "LAST_NAME": "Das",
            "CONTACT": "90003",
            "FLIGHT_ID": 21
          }
        ],
        "explanation": "Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition."
      }
    ],
    "testCases": [
      {
        "id": "sql-019-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "cabincrew": [
            {
              "CABINCREW_ID": 1,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Anita",
              "LAST_NAME": "Sharma",
              "CONTACT": "90001"
            },
            {
              "CABINCREW_ID": 2,
              "FLIGHT_ID": 12,
              "FIRST_NAME": "Aman",
              "LAST_NAME": "Roy",
              "CONTACT": "90002"
            },
            {
              "CABINCREW_ID": 3,
              "FLIGHT_ID": 21,
              "FIRST_NAME": "Ajay",
              "LAST_NAME": "Das",
              "CONTACT": "90003"
            },
            {
              "CABINCREW_ID": 4,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Khan",
              "CONTACT": "90004"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 11,
              "FLIGHT_TO": "Paris"
            },
            {
              "FLIGHT_ID": 12,
              "FLIGHT_TO": "London"
            },
            {
              "FLIGHT_ID": 21,
              "FLIGHT_TO": "Rome"
            }
          ]
        },
        "expected": [
          {
            "CABINCREW_ID": 1,
            "FIRST_NAME": "Anita",
            "LAST_NAME": "Sharma",
            "CONTACT": "90001",
            "FLIGHT_ID": 11
          },
          {
            "CABINCREW_ID": 3,
            "FIRST_NAME": "Ajay",
            "LAST_NAME": "Das",
            "CONTACT": "90003",
            "FLIGHT_ID": 21
          }
        ]
      },
      {
        "id": "sql-019-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "cabincrew": [
            {
              "CABINCREW_ID": 1002,
              "FLIGHT_ID": 1022,
              "FIRST_NAME": "ZZ_Anita",
              "LAST_NAME": "ZZ_Sharma",
              "CONTACT": "ZZ_90001"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 1022,
              "FLIGHT_TO": "ZZ_Paris"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-019-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "cabincrew": [
            {
              "CABINCREW_ID": 1,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Anita",
              "LAST_NAME": "Sharma",
              "CONTACT": "90001"
            },
            {
              "CABINCREW_ID": 2,
              "FLIGHT_ID": 12,
              "FIRST_NAME": "Aman",
              "LAST_NAME": "Roy",
              "CONTACT": "90002"
            },
            {
              "CABINCREW_ID": 3,
              "FLIGHT_ID": 21,
              "FIRST_NAME": "Ajay",
              "LAST_NAME": "Das",
              "CONTACT": "90003"
            },
            {
              "CABINCREW_ID": 4,
              "FLIGHT_ID": 11,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Khan",
              "CONTACT": "90004"
            },
            {
              "CABINCREW_ID": 101,
              "FLIGHT_ID": 111,
              "FIRST_NAME": "Anita",
              "LAST_NAME": "Sharma",
              "CONTACT": "90001"
            },
            {
              "CABINCREW_ID": 103,
              "FLIGHT_ID": 113,
              "FIRST_NAME": "Aman",
              "LAST_NAME": "Roy",
              "CONTACT": "90002"
            },
            {
              "CABINCREW_ID": 105,
              "FLIGHT_ID": 123,
              "FIRST_NAME": "Ajay",
              "LAST_NAME": "Das",
              "CONTACT": "90003"
            },
            {
              "CABINCREW_ID": 107,
              "FLIGHT_ID": 114,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Khan",
              "CONTACT": "90004"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 11,
              "FLIGHT_TO": "Paris"
            },
            {
              "FLIGHT_ID": 12,
              "FLIGHT_TO": "London"
            },
            {
              "FLIGHT_ID": 21,
              "FLIGHT_TO": "Rome"
            },
            {
              "FLIGHT_ID": 111,
              "FLIGHT_TO": "Paris"
            },
            {
              "FLIGHT_ID": 113,
              "FLIGHT_TO": "London"
            },
            {
              "FLIGHT_ID": 123,
              "FLIGHT_TO": "Rome"
            }
          ]
        },
        "expected": [
          {
            "CABINCREW_ID": 1,
            "FIRST_NAME": "Anita",
            "LAST_NAME": "Sharma",
            "CONTACT": "90001",
            "FLIGHT_ID": 11
          },
          {
            "CABINCREW_ID": 3,
            "FIRST_NAME": "Ajay",
            "LAST_NAME": "Das",
            "CONTACT": "90003",
            "FLIGHT_ID": 21
          },
          {
            "CABINCREW_ID": 101,
            "FIRST_NAME": "Anita",
            "LAST_NAME": "Sharma",
            "CONTACT": "90001",
            "FLIGHT_ID": 111
          }
        ]
      }
    ]
  },
  {
    "id": "sql-020",
    "title": "Passengers and baggage on flights to Paris on 2024-02-11",
    "difficulty": "Medium",
    "duration": 15,
    "category": "AGGREGATION & GROUPING",
    "tableSchema": [
      {
        "name": "flight",
        "columns": [
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_TO",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "ARRIVAL_DATE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "boardingpass",
        "columns": [
          {
            "name": "BOARDINGPASS_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PASSENGER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "BAGGAGE",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the flight ID, total number of passengers and total baggage for flights going to Paris and arriving on 2024-02-11.",
    "problem": "### Problem Statement\nWrite an SQL query to display the flight ID, total number of passengers and total baggage for flights going to Paris and arriving on 2024-02-11.\n\n### Requirements:\n- **Expected Output Columns:** `FLIGHT_ID`, `Total_Passengers`, `Total_Baggage`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, COUNT, SUM, GROUP BY\n- Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage.",
    "notes": [
      "Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage.",
      "Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  f.FLIGHT_ID,\n  COUNT(bp.PASSENGER_ID) AS Total_Passengers,\n  SUM(bp.BAGGAGE) AS Total_Baggage\nFROM flight f\nJOIN boardingpass bp ON f.FLIGHT_ID = bp.FLIGHT_ID\nWHERE f.FLIGHT_TO = 'Paris'\n  AND f.ARRIVAL_DATE = '2024-02-11'\nGROUP BY f.FLIGHT_ID;",
    "explanation": "Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage. Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage.",
    "expectedColumns": [
      "FLIGHT_ID",
      "Total_Passengers",
      "Total_Baggage"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "flight": [
            {
              "FLIGHT_ID": 1,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-11"
            },
            {
              "FLIGHT_ID": 2,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-12"
            },
            {
              "FLIGHT_ID": 3,
              "FLIGHT_TO": "London",
              "ARRIVAL_DATE": "2024-02-11"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 501,
              "BAGGAGE": 20
            },
            {
              "BOARDINGPASS_ID": 102,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 502,
              "BAGGAGE": 15
            },
            {
              "BOARDINGPASS_ID": 103,
              "FLIGHT_ID": 2,
              "PASSENGER_ID": 503,
              "BAGGAGE": 10
            },
            {
              "BOARDINGPASS_ID": 104,
              "FLIGHT_ID": 3,
              "PASSENGER_ID": 504,
              "BAGGAGE": 30
            }
          ]
        },
        "output": [
          {
            "FLIGHT_ID": 1,
            "Total_Passengers": 2,
            "Total_Baggage": 35
          }
        ],
        "explanation": "Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage."
      }
    ],
    "testCases": [
      {
        "id": "sql-020-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "flight": [
            {
              "FLIGHT_ID": 1,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-11"
            },
            {
              "FLIGHT_ID": 2,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-12"
            },
            {
              "FLIGHT_ID": 3,
              "FLIGHT_TO": "London",
              "ARRIVAL_DATE": "2024-02-11"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 501,
              "BAGGAGE": 20
            },
            {
              "BOARDINGPASS_ID": 102,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 502,
              "BAGGAGE": 15
            },
            {
              "BOARDINGPASS_ID": 103,
              "FLIGHT_ID": 2,
              "PASSENGER_ID": 503,
              "BAGGAGE": 10
            },
            {
              "BOARDINGPASS_ID": 104,
              "FLIGHT_ID": 3,
              "PASSENGER_ID": 504,
              "BAGGAGE": 30
            }
          ]
        },
        "expected": [
          {
            "FLIGHT_ID": 1,
            "Total_Passengers": 2,
            "Total_Baggage": 35
          }
        ]
      },
      {
        "id": "sql-020-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "flight": [
            {
              "FLIGHT_ID": 1002,
              "FLIGHT_TO": "ZZ_Paris",
              "ARRIVAL_DATE": "ZZ_2024-02-11"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 1202,
              "FLIGHT_ID": 1002,
              "PASSENGER_ID": 2002,
              "BAGGAGE": 1040
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-020-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "flight": [
            {
              "FLIGHT_ID": 1,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-11"
            },
            {
              "FLIGHT_ID": 2,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-12"
            },
            {
              "FLIGHT_ID": 3,
              "FLIGHT_TO": "London",
              "ARRIVAL_DATE": "2024-02-11"
            },
            {
              "FLIGHT_ID": 101,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-11"
            },
            {
              "FLIGHT_ID": 103,
              "FLIGHT_TO": "Paris",
              "ARRIVAL_DATE": "2024-02-12"
            },
            {
              "FLIGHT_ID": 105,
              "FLIGHT_TO": "London",
              "ARRIVAL_DATE": "2024-02-11"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 501,
              "BAGGAGE": 20
            },
            {
              "BOARDINGPASS_ID": 102,
              "FLIGHT_ID": 1,
              "PASSENGER_ID": 502,
              "BAGGAGE": 15
            },
            {
              "BOARDINGPASS_ID": 103,
              "FLIGHT_ID": 2,
              "PASSENGER_ID": 503,
              "BAGGAGE": 10
            },
            {
              "BOARDINGPASS_ID": 104,
              "FLIGHT_ID": 3,
              "PASSENGER_ID": 504,
              "BAGGAGE": 30
            },
            {
              "BOARDINGPASS_ID": 201,
              "FLIGHT_ID": 101,
              "PASSENGER_ID": 601,
              "BAGGAGE": 20
            },
            {
              "BOARDINGPASS_ID": 203,
              "FLIGHT_ID": 102,
              "PASSENGER_ID": 603,
              "BAGGAGE": 15
            },
            {
              "BOARDINGPASS_ID": 205,
              "FLIGHT_ID": 104,
              "PASSENGER_ID": 605,
              "BAGGAGE": 10
            },
            {
              "BOARDINGPASS_ID": 207,
              "FLIGHT_ID": 106,
              "PASSENGER_ID": 607,
              "BAGGAGE": 30
            }
          ]
        },
        "expected": [
          {
            "FLIGHT_ID": 1,
            "Total_Passengers": 2,
            "Total_Baggage": 35
          },
          {
            "FLIGHT_ID": 101,
            "Total_Passengers": 1,
            "Total_Baggage": 20
          }
        ]
      }
    ]
  },
  {
    "id": "sql-021",
    "title": "Count products in the Women category",
    "difficulty": "Hard",
    "duration": 15,
    "category": "AGGREGATION & GROUPING",
    "tableSchema": [
      {
        "name": "product",
        "columns": [
          {
            "name": "PRODUCT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "product_category",
        "columns": [
          {
            "name": "PRODUCT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "CATEGORY_ID",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "category",
        "columns": [
          {
            "name": "CATEGORY_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to find the number of products belonging to the 'Women' category.",
    "problem": "### Problem Statement\nWrite an SQL query to find the number of products belonging to the 'Women' category.\n\n### Requirements:\n- **Expected Output Columns:** `product_count`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, COUNT\n- A product can be connected to categories through product_category. Join all three tables and count matching product records.",
    "notes": [
      "A product can be connected to categories through product_category. Join all three tables and count matching product records.",
      "Two products map to category 10, whose name is Women.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  COUNT(*) AS product_count\nFROM product p\nJOIN product_category pc ON p.PRODUCT_ID = pc.PRODUCT_ID\nJOIN category c ON pc.CATEGORY_ID = c.CATEGORY_ID\nWHERE c.NAME = 'Women';",
    "explanation": "A product can be connected to categories through product_category. Join all three tables and count matching product records. Two products map to category 10, whose name is Women.",
    "expectedColumns": [
      "product_count"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Dress"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Laptop"
            },
            {
              "PRODUCT_ID": 4,
              "NAME": "Bag"
            }
          ],
          "product_category": [
            {
              "PRODUCT_ID": 1,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 2,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 3,
              "CATEGORY_ID": 20
            },
            {
              "PRODUCT_ID": 4,
              "CATEGORY_ID": 30
            }
          ],
          "category": [
            {
              "CATEGORY_ID": 10,
              "NAME": "Women"
            },
            {
              "CATEGORY_ID": 20,
              "NAME": "Electronics"
            },
            {
              "CATEGORY_ID": 30,
              "NAME": "Travel"
            }
          ]
        },
        "output": [
          {
            "product_count": 2
          }
        ],
        "explanation": "Two products map to category 10, whose name is Women."
      }
    ],
    "testCases": [
      {
        "id": "sql-021-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Dress"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Laptop"
            },
            {
              "PRODUCT_ID": 4,
              "NAME": "Bag"
            }
          ],
          "product_category": [
            {
              "PRODUCT_ID": 1,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 2,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 3,
              "CATEGORY_ID": 20
            },
            {
              "PRODUCT_ID": 4,
              "CATEGORY_ID": 30
            }
          ],
          "category": [
            {
              "CATEGORY_ID": 10,
              "NAME": "Women"
            },
            {
              "CATEGORY_ID": 20,
              "NAME": "Electronics"
            },
            {
              "CATEGORY_ID": 30,
              "NAME": "Travel"
            }
          ]
        },
        "expected": [
          {
            "product_count": 2
          }
        ]
      },
      {
        "id": "sql-021-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1002,
              "NAME": "ZZ_Dress"
            }
          ],
          "product_category": [
            {
              "PRODUCT_ID": 1002,
              "CATEGORY_ID": 1020
            }
          ],
          "category": [
            {
              "CATEGORY_ID": 1020,
              "NAME": "ZZ_Women"
            }
          ]
        },
        "expected": [
          {
            "product_count": 0
          }
        ]
      },
      {
        "id": "sql-021-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Dress"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Laptop"
            },
            {
              "PRODUCT_ID": 4,
              "NAME": "Bag"
            },
            {
              "PRODUCT_ID": 101,
              "NAME": "Dress"
            },
            {
              "PRODUCT_ID": 103,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 105,
              "NAME": "Laptop"
            },
            {
              "PRODUCT_ID": 107,
              "NAME": "Bag"
            }
          ],
          "product_category": [
            {
              "PRODUCT_ID": 1,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 2,
              "CATEGORY_ID": 10
            },
            {
              "PRODUCT_ID": 3,
              "CATEGORY_ID": 20
            },
            {
              "PRODUCT_ID": 4,
              "CATEGORY_ID": 30
            },
            {
              "PRODUCT_ID": 101,
              "CATEGORY_ID": 110
            },
            {
              "PRODUCT_ID": 103,
              "CATEGORY_ID": 111
            },
            {
              "PRODUCT_ID": 105,
              "CATEGORY_ID": 122
            },
            {
              "PRODUCT_ID": 107,
              "CATEGORY_ID": 133
            }
          ],
          "category": [
            {
              "CATEGORY_ID": 10,
              "NAME": "Women"
            },
            {
              "CATEGORY_ID": 20,
              "NAME": "Electronics"
            },
            {
              "CATEGORY_ID": 30,
              "NAME": "Travel"
            },
            {
              "CATEGORY_ID": 110,
              "NAME": "Women"
            },
            {
              "CATEGORY_ID": 121,
              "NAME": "Electronics"
            },
            {
              "CATEGORY_ID": 132,
              "NAME": "Travel"
            }
          ]
        },
        "expected": [
          {
            "product_count": 3
          }
        ]
      }
    ]
  },
  {
    "id": "sql-022",
    "title": "Trains with speed below 50",
    "difficulty": "Easy",
    "duration": 15,
    "category": "FILTERING & PREDICATES",
    "tableSchema": [
      {
        "name": "train_details_tbl",
        "columns": [
          {
            "name": "train_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "train_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "train_speed",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the train name and train type of trains whose speed is less than 50.",
    "problem": "### Problem Statement\nWrite an SQL query to display the train name and train type of trains whose speed is less than 50.\n\n### Requirements:\n- **Expected Output Columns:** `TRAIN_NAME`, `TRAIN_TYPE`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** WHERE, comparison operator\n- Filter train_details_tbl using train_speed < 50 and return train_name and train_type.",
    "notes": [
      "Filter train_details_tbl using train_speed < 50 and return train_name and train_type.",
      "45 and 49 are below 50. A speed of exactly 50 is excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  train_name AS TRAIN_NAME,\n  train_type AS TRAIN_TYPE\nFROM train_details_tbl\nWHERE train_speed < 50;",
    "explanation": "Filter train_details_tbl using train_speed < 50 and return train_name and train_type. 45 and 49 are below 50. A speed of exactly 50 is excluded.",
    "expectedColumns": [
      "TRAIN_NAME",
      "TRAIN_TYPE"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_speed": 45
            },
            {
              "train_id": 2,
              "train_name": "Rajdhani",
              "train_type": "EXP",
              "train_speed": 120
            },
            {
              "train_id": 3,
              "train_name": "Slow Passenger",
              "train_type": "PAS",
              "train_speed": 49
            },
            {
              "train_id": 4,
              "train_name": "Express X",
              "train_type": "EXP",
              "train_speed": 50
            }
          ]
        },
        "output": [
          {
            "TRAIN_NAME": "Mumbai Local",
            "TRAIN_TYPE": "LOC"
          },
          {
            "TRAIN_NAME": "Slow Passenger",
            "TRAIN_TYPE": "PAS"
          }
        ],
        "explanation": "45 and 49 are below 50. A speed of exactly 50 is excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-022-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_speed": 45
            },
            {
              "train_id": 2,
              "train_name": "Rajdhani",
              "train_type": "EXP",
              "train_speed": 120
            },
            {
              "train_id": 3,
              "train_name": "Slow Passenger",
              "train_type": "PAS",
              "train_speed": 49
            },
            {
              "train_id": 4,
              "train_name": "Express X",
              "train_type": "EXP",
              "train_speed": 50
            }
          ]
        },
        "expected": [
          {
            "TRAIN_NAME": "Mumbai Local",
            "TRAIN_TYPE": "LOC"
          },
          {
            "TRAIN_NAME": "Slow Passenger",
            "TRAIN_TYPE": "PAS"
          }
        ]
      },
      {
        "id": "sql-022-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1002,
              "train_name": "ZZ_Mumbai Local",
              "train_type": "LOC",
              "train_speed": 1090
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-022-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "train_details_tbl": [
            {
              "train_id": 1,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_speed": 45
            },
            {
              "train_id": 2,
              "train_name": "Rajdhani",
              "train_type": "EXP",
              "train_speed": 120
            },
            {
              "train_id": 3,
              "train_name": "Slow Passenger",
              "train_type": "PAS",
              "train_speed": 49
            },
            {
              "train_id": 4,
              "train_name": "Express X",
              "train_type": "EXP",
              "train_speed": 50
            },
            {
              "train_id": 101,
              "train_name": "Mumbai Local",
              "train_type": "LOC",
              "train_speed": 45
            },
            {
              "train_id": 103,
              "train_name": "Rajdhani",
              "train_type": "EXP",
              "train_speed": 120
            },
            {
              "train_id": 105,
              "train_name": "Slow Passenger",
              "train_type": "PAS",
              "train_speed": 49
            },
            {
              "train_id": 107,
              "train_name": "Express X",
              "train_type": "EXP",
              "train_speed": 50
            }
          ]
        },
        "expected": [
          {
            "TRAIN_NAME": "Mumbai Local",
            "TRAIN_TYPE": "LOC"
          },
          {
            "TRAIN_NAME": "Slow Passenger",
            "TRAIN_TYPE": "PAS"
          },
          {
            "TRAIN_NAME": "Mumbai Local",
            "TRAIN_TYPE": "LOC"
          },
          {
            "TRAIN_NAME": "Slow Passenger",
            "TRAIN_TYPE": "PAS"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-023",
    "title": "Vegetarian passengers on flight 4 from Hong Kong",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "passenger",
        "columns": [
          {
            "name": "PASSENGER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "CONTACT",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "boardingpass",
        "columns": [
          {
            "name": "BOARDINGPASS_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PASSENGER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "MEAL",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "flight",
        "columns": [
          {
            "name": "FLIGHT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLIGHT_FROM",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the first name and contact of passengers who travelled on flight 4 from Hong Kong and selected a Vegetarian meal.",
    "problem": "### Problem Statement\nWrite an SQL query to display the first name and contact of passengers who travelled on flight 4 from Hong Kong and selected a Vegetarian meal.\n\n### Requirements:\n- **Expected Output Columns:** `FIRST_NAME`, `CONTACT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, DISTINCT, multiple conditions\n- Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows.",
    "notes": [
      "Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows.",
      "Only Amit is on flight 4 from Hong Kong with a Vegetarian meal.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  DISTINCT p.FIRST_NAME,\n  p.CONTACT\nFROM passenger p\nJOIN boardingpass bp ON p.PASSENGER_ID = bp.PASSENGER_ID\nJOIN flight f ON bp.FLIGHT_ID = f.FLIGHT_ID\nWHERE f.FLIGHT_FROM = 'Hong Kong'\n  AND bp.FLIGHT_ID = 4\n  AND bp.MEAL = 'Vegetarian';",
    "explanation": "Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows. Only Amit is on flight 4 from Hong Kong with a Vegetarian meal.",
    "expectedColumns": [
      "FIRST_NAME",
      "CONTACT"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "passenger": [
            {
              "PASSENGER_ID": 1,
              "FIRST_NAME": "Amit",
              "CONTACT": "90001"
            },
            {
              "PASSENGER_ID": 2,
              "FIRST_NAME": "Riya",
              "CONTACT": "90002"
            },
            {
              "PASSENGER_ID": 3,
              "FIRST_NAME": "Neha",
              "CONTACT": "90003"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "PASSENGER_ID": 1,
              "FLIGHT_ID": 4,
              "MEAL": "Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 102,
              "PASSENGER_ID": 2,
              "FLIGHT_ID": 4,
              "MEAL": "Non-Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 103,
              "PASSENGER_ID": 3,
              "FLIGHT_ID": 5,
              "MEAL": "Vegetarian"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 4,
              "FLIGHT_FROM": "Hong Kong"
            },
            {
              "FLIGHT_ID": 5,
              "FLIGHT_FROM": "Delhi"
            }
          ]
        },
        "output": [
          {
            "FIRST_NAME": "Amit",
            "CONTACT": "90001"
          }
        ],
        "explanation": "Only Amit is on flight 4 from Hong Kong with a Vegetarian meal."
      }
    ],
    "testCases": [
      {
        "id": "sql-023-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "passenger": [
            {
              "PASSENGER_ID": 1,
              "FIRST_NAME": "Amit",
              "CONTACT": "90001"
            },
            {
              "PASSENGER_ID": 2,
              "FIRST_NAME": "Riya",
              "CONTACT": "90002"
            },
            {
              "PASSENGER_ID": 3,
              "FIRST_NAME": "Neha",
              "CONTACT": "90003"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "PASSENGER_ID": 1,
              "FLIGHT_ID": 4,
              "MEAL": "Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 102,
              "PASSENGER_ID": 2,
              "FLIGHT_ID": 4,
              "MEAL": "Non-Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 103,
              "PASSENGER_ID": 3,
              "FLIGHT_ID": 5,
              "MEAL": "Vegetarian"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 4,
              "FLIGHT_FROM": "Hong Kong"
            },
            {
              "FLIGHT_ID": 5,
              "FLIGHT_FROM": "Delhi"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Amit",
            "CONTACT": "90001"
          }
        ]
      },
      {
        "id": "sql-023-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "passenger": [
            {
              "PASSENGER_ID": 1002,
              "FIRST_NAME": "ZZ_Amit",
              "CONTACT": "ZZ_90001"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 1202,
              "PASSENGER_ID": 1002,
              "FLIGHT_ID": 1008,
              "MEAL": "ZZ_Vegetarian"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 1008,
              "FLIGHT_FROM": "ZZ_Hong Kong"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-023-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "passenger": [
            {
              "PASSENGER_ID": 1,
              "FIRST_NAME": "Amit",
              "CONTACT": "90001"
            },
            {
              "PASSENGER_ID": 2,
              "FIRST_NAME": "Riya",
              "CONTACT": "90002"
            },
            {
              "PASSENGER_ID": 3,
              "FIRST_NAME": "Neha",
              "CONTACT": "90003"
            },
            {
              "PASSENGER_ID": 101,
              "FIRST_NAME": "Amit",
              "CONTACT": "90001"
            },
            {
              "PASSENGER_ID": 103,
              "FIRST_NAME": "Riya",
              "CONTACT": "90002"
            },
            {
              "PASSENGER_ID": 105,
              "FIRST_NAME": "Neha",
              "CONTACT": "90003"
            }
          ],
          "boardingpass": [
            {
              "BOARDINGPASS_ID": 101,
              "PASSENGER_ID": 1,
              "FLIGHT_ID": 4,
              "MEAL": "Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 102,
              "PASSENGER_ID": 2,
              "FLIGHT_ID": 4,
              "MEAL": "Non-Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 103,
              "PASSENGER_ID": 3,
              "FLIGHT_ID": 5,
              "MEAL": "Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 201,
              "PASSENGER_ID": 101,
              "FLIGHT_ID": 104,
              "MEAL": "Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 203,
              "PASSENGER_ID": 103,
              "FLIGHT_ID": 105,
              "MEAL": "Non-Vegetarian"
            },
            {
              "BOARDINGPASS_ID": 205,
              "PASSENGER_ID": 105,
              "FLIGHT_ID": 107,
              "MEAL": "Vegetarian"
            }
          ],
          "flight": [
            {
              "FLIGHT_ID": 4,
              "FLIGHT_FROM": "Hong Kong"
            },
            {
              "FLIGHT_ID": 5,
              "FLIGHT_FROM": "Delhi"
            },
            {
              "FLIGHT_ID": 104,
              "FLIGHT_FROM": "Hong Kong"
            },
            {
              "FLIGHT_ID": 106,
              "FLIGHT_FROM": "Delhi"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Amit",
            "CONTACT": "90001"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-024",
    "title": "Products currently in the transit hub",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "product",
        "columns": [
          {
            "name": "PRODUCT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "order_item",
        "columns": [
          {
            "name": "ORDER_ITEM_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "ORDER_DELIVERY_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PRODUCT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "QUANTITY",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "order_delivery",
        "columns": [
          {
            "name": "ORDER_DELIVERY_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "ORDER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "STATUS",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the product ID and product name of products whose delivery status is 'In the transit hub'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the product ID and product name of products whose delivery status is 'In the transit hub'.\n\n### Requirements:\n- **Expected Output Columns:** `PRODUCT_ID`, `NAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, DISTINCT, status filtering\n- Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items.",
    "notes": [
      "Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items.",
      "Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  DISTINCT p.PRODUCT_ID,\n  p.NAME\nFROM product p\nJOIN order_item oi ON p.PRODUCT_ID = oi.PRODUCT_ID\nJOIN order_delivery od ON oi.ORDER_DELIVERY_ID = od.ORDER_DELIVERY_ID\nWHERE od.STATUS = 'In the transit hub';",
    "explanation": "Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items. Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery.",
    "expectedColumns": [
      "PRODUCT_ID",
      "NAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Phone"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Bag"
            }
          ],
          "order_item": [
            {
              "ORDER_ITEM_ID": 11,
              "ORDER_DELIVERY_ID": 101,
              "PRODUCT_ID": 1,
              "QUANTITY": 2
            },
            {
              "ORDER_ITEM_ID": 12,
              "ORDER_DELIVERY_ID": 102,
              "PRODUCT_ID": 2,
              "QUANTITY": 1
            },
            {
              "ORDER_ITEM_ID": 13,
              "ORDER_DELIVERY_ID": 103,
              "PRODUCT_ID": 1,
              "QUANTITY": 1
            }
          ],
          "order_delivery": [
            {
              "ORDER_DELIVERY_ID": 101,
              "ORDER_ID": 500,
              "STATUS": "In the transit hub"
            },
            {
              "ORDER_DELIVERY_ID": 102,
              "ORDER_ID": 501,
              "STATUS": "Delivered"
            },
            {
              "ORDER_DELIVERY_ID": 103,
              "ORDER_ID": 502,
              "STATUS": "In the transit hub"
            }
          ]
        },
        "output": [
          {
            "PRODUCT_ID": 1,
            "NAME": "Phone"
          }
        ],
        "explanation": "Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery."
      }
    ],
    "testCases": [
      {
        "id": "sql-024-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Phone"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Bag"
            }
          ],
          "order_item": [
            {
              "ORDER_ITEM_ID": 11,
              "ORDER_DELIVERY_ID": 101,
              "PRODUCT_ID": 1,
              "QUANTITY": 2
            },
            {
              "ORDER_ITEM_ID": 12,
              "ORDER_DELIVERY_ID": 102,
              "PRODUCT_ID": 2,
              "QUANTITY": 1
            },
            {
              "ORDER_ITEM_ID": 13,
              "ORDER_DELIVERY_ID": 103,
              "PRODUCT_ID": 1,
              "QUANTITY": 1
            }
          ],
          "order_delivery": [
            {
              "ORDER_DELIVERY_ID": 101,
              "ORDER_ID": 500,
              "STATUS": "In the transit hub"
            },
            {
              "ORDER_DELIVERY_ID": 102,
              "ORDER_ID": 501,
              "STATUS": "Delivered"
            },
            {
              "ORDER_DELIVERY_ID": 103,
              "ORDER_ID": 502,
              "STATUS": "In the transit hub"
            }
          ]
        },
        "expected": [
          {
            "PRODUCT_ID": 1,
            "NAME": "Phone"
          }
        ]
      },
      {
        "id": "sql-024-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1002,
              "NAME": "ZZ_Phone"
            }
          ],
          "order_item": [
            {
              "ORDER_ITEM_ID": 1022,
              "ORDER_DELIVERY_ID": 1202,
              "PRODUCT_ID": 1002,
              "QUANTITY": 1004
            }
          ],
          "order_delivery": [
            {
              "ORDER_DELIVERY_ID": 1202,
              "ORDER_ID": 2000,
              "STATUS": "ZZ_In the transit hub"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-024-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "product": [
            {
              "PRODUCT_ID": 1,
              "NAME": "Phone"
            },
            {
              "PRODUCT_ID": 2,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 3,
              "NAME": "Bag"
            },
            {
              "PRODUCT_ID": 101,
              "NAME": "Phone"
            },
            {
              "PRODUCT_ID": 103,
              "NAME": "Shoes"
            },
            {
              "PRODUCT_ID": 105,
              "NAME": "Bag"
            }
          ],
          "order_item": [
            {
              "ORDER_ITEM_ID": 11,
              "ORDER_DELIVERY_ID": 101,
              "PRODUCT_ID": 1,
              "QUANTITY": 2
            },
            {
              "ORDER_ITEM_ID": 12,
              "ORDER_DELIVERY_ID": 102,
              "PRODUCT_ID": 2,
              "QUANTITY": 1
            },
            {
              "ORDER_ITEM_ID": 13,
              "ORDER_DELIVERY_ID": 103,
              "PRODUCT_ID": 1,
              "QUANTITY": 1
            },
            {
              "ORDER_ITEM_ID": 111,
              "ORDER_DELIVERY_ID": 201,
              "PRODUCT_ID": 101,
              "QUANTITY": 2
            },
            {
              "ORDER_ITEM_ID": 113,
              "ORDER_DELIVERY_ID": 203,
              "PRODUCT_ID": 103,
              "QUANTITY": 1
            },
            {
              "ORDER_ITEM_ID": 115,
              "ORDER_DELIVERY_ID": 205,
              "PRODUCT_ID": 103,
              "QUANTITY": 1
            }
          ],
          "order_delivery": [
            {
              "ORDER_DELIVERY_ID": 101,
              "ORDER_ID": 500,
              "STATUS": "In the transit hub"
            },
            {
              "ORDER_DELIVERY_ID": 102,
              "ORDER_ID": 501,
              "STATUS": "Delivered"
            },
            {
              "ORDER_DELIVERY_ID": 103,
              "ORDER_ID": 502,
              "STATUS": "In the transit hub"
            },
            {
              "ORDER_DELIVERY_ID": 201,
              "ORDER_ID": 600,
              "STATUS": "In the transit hub"
            },
            {
              "ORDER_DELIVERY_ID": 203,
              "ORDER_ID": 602,
              "STATUS": "Delivered"
            },
            {
              "ORDER_DELIVERY_ID": 205,
              "ORDER_ID": 604,
              "STATUS": "In the transit hub"
            }
          ]
        },
        "expected": [
          {
            "PRODUCT_ID": 1,
            "NAME": "Phone"
          },
          {
            "PRODUCT_ID": 101,
            "NAME": "Phone"
          },
          {
            "PRODUCT_ID": 103,
            "NAME": "Shoes"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-025",
    "title": "Artists whose name contains a number",
    "difficulty": "Medium",
    "duration": 15,
    "category": "PATTERN MATCHING & STRINGS",
    "tableSchema": [
      {
        "name": "artist",
        "columns": [
          {
            "name": "ARTIST_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the artist ID and name where the artist has a number in the name.",
    "problem": "### Problem Statement\nWrite an SQL query to display the artist ID and name where the artist has a number in the name.\n\n### Requirements:\n- **Expected Output Columns:** `ARTIST_ID`, `NAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** REGEXP, pattern matching\n- Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative.",
    "notes": [
      "Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative.",
      "U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  ARTIST_ID,\n  NAME\nFROM artist\nWHERE NAME REGEXP '[0-9]';",
    "explanation": "Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative. U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none.",
    "expectedColumns": [
      "ARTIST_ID",
      "NAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "artist": [
            {
              "ARTIST_ID": 1,
              "NAME": "ABBA"
            },
            {
              "ARTIST_ID": 2,
              "NAME": "U2"
            },
            {
              "ARTIST_ID": 3,
              "NAME": "Maroon 5"
            },
            {
              "ARTIST_ID": 4,
              "NAME": "Coldplay"
            },
            {
              "ARTIST_ID": 5,
              "NAME": "2Pac"
            }
          ]
        },
        "output": [
          {
            "ARTIST_ID": 2,
            "NAME": "U2"
          },
          {
            "ARTIST_ID": 3,
            "NAME": "Maroon 5"
          },
          {
            "ARTIST_ID": 5,
            "NAME": "2Pac"
          }
        ],
        "explanation": "U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none."
      }
    ],
    "testCases": [
      {
        "id": "sql-025-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "artist": [
            {
              "ARTIST_ID": 1,
              "NAME": "ABBA"
            },
            {
              "ARTIST_ID": 2,
              "NAME": "U2"
            },
            {
              "ARTIST_ID": 3,
              "NAME": "Maroon 5"
            },
            {
              "ARTIST_ID": 4,
              "NAME": "Coldplay"
            },
            {
              "ARTIST_ID": 5,
              "NAME": "2Pac"
            }
          ]
        },
        "expected": [
          {
            "ARTIST_ID": 2,
            "NAME": "U2"
          },
          {
            "ARTIST_ID": 3,
            "NAME": "Maroon 5"
          },
          {
            "ARTIST_ID": 5,
            "NAME": "2Pac"
          }
        ]
      },
      {
        "id": "sql-025-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "artist": [
            {
              "ARTIST_ID": 1002,
              "NAME": "ZZ_ABBA"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-025-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "artist": [
            {
              "ARTIST_ID": 1,
              "NAME": "ABBA"
            },
            {
              "ARTIST_ID": 2,
              "NAME": "U2"
            },
            {
              "ARTIST_ID": 3,
              "NAME": "Maroon 5"
            },
            {
              "ARTIST_ID": 4,
              "NAME": "Coldplay"
            },
            {
              "ARTIST_ID": 5,
              "NAME": "2Pac"
            },
            {
              "ARTIST_ID": 101,
              "NAME": "ABBA"
            },
            {
              "ARTIST_ID": 103,
              "NAME": "U2"
            },
            {
              "ARTIST_ID": 105,
              "NAME": "Maroon 5"
            },
            {
              "ARTIST_ID": 107,
              "NAME": "Coldplay"
            },
            {
              "ARTIST_ID": 109,
              "NAME": "2Pac"
            }
          ]
        },
        "expected": [
          {
            "ARTIST_ID": 2,
            "NAME": "U2"
          },
          {
            "ARTIST_ID": 3,
            "NAME": "Maroon 5"
          },
          {
            "ARTIST_ID": 5,
            "NAME": "2Pac"
          },
          {
            "ARTIST_ID": 103,
            "NAME": "U2"
          },
          {
            "ARTIST_ID": 105,
            "NAME": "Maroon 5"
          },
          {
            "ARTIST_ID": 109,
            "NAME": "2Pac"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-026",
    "title": "Messages containing Hello",
    "difficulty": "Easy",
    "duration": 15,
    "category": "PATTERN MATCHING & STRINGS",
    "tableSchema": [
      {
        "name": "message",
        "columns": [
          {
            "name": "MESSAGE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "CONTENT",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the message ID and content of messages containing the word 'Hello'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the message ID and content of messages containing the word 'Hello'.\n\n### Requirements:\n- **Expected Output Columns:** `MESSAGE_ID`, `CONTENT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** LIKE, wildcards\n- Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT.",
    "notes": [
      "Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT.",
      "With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  MESSAGE_ID,\n  CONTENT\nFROM message\nWHERE CONTENT LIKE '%Hello%';",
    "explanation": "Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT. With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match.",
    "expectedColumns": [
      "MESSAGE_ID",
      "CONTENT"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "message": [
            {
              "MESSAGE_ID": 1,
              "CONTENT": "Hello world"
            },
            {
              "MESSAGE_ID": 2,
              "CONTENT": "Hi there"
            },
            {
              "MESSAGE_ID": 3,
              "CONTENT": "Say Hello to everyone"
            },
            {
              "MESSAGE_ID": 4,
              "CONTENT": "hello again"
            },
            {
              "MESSAGE_ID": 5,
              "CONTENT": "Welcome"
            }
          ]
        },
        "output": [
          {
            "MESSAGE_ID": 1,
            "CONTENT": "Hello world"
          },
          {
            "MESSAGE_ID": 3,
            "CONTENT": "Say Hello to everyone"
          },
          {
            "MESSAGE_ID": 4,
            "CONTENT": "hello again"
          }
        ],
        "explanation": "With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match."
      }
    ],
    "testCases": [
      {
        "id": "sql-026-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "message": [
            {
              "MESSAGE_ID": 1,
              "CONTENT": "Hello world"
            },
            {
              "MESSAGE_ID": 2,
              "CONTENT": "Hi there"
            },
            {
              "MESSAGE_ID": 3,
              "CONTENT": "Say Hello to everyone"
            },
            {
              "MESSAGE_ID": 4,
              "CONTENT": "hello again"
            },
            {
              "MESSAGE_ID": 5,
              "CONTENT": "Welcome"
            }
          ]
        },
        "expected": [
          {
            "MESSAGE_ID": 1,
            "CONTENT": "Hello world"
          },
          {
            "MESSAGE_ID": 3,
            "CONTENT": "Say Hello to everyone"
          },
          {
            "MESSAGE_ID": 4,
            "CONTENT": "hello again"
          }
        ]
      },
      {
        "id": "sql-026-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "message": [
            {
              "MESSAGE_ID": 1002,
              "CONTENT": "ZZ_Hello world"
            }
          ]
        },
        "expected": [
          {
            "MESSAGE_ID": 1002,
            "CONTENT": "ZZ_Hello world"
          }
        ]
      },
      {
        "id": "sql-026-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "message": [
            {
              "MESSAGE_ID": 1,
              "CONTENT": "Hello world"
            },
            {
              "MESSAGE_ID": 2,
              "CONTENT": "Hi there"
            },
            {
              "MESSAGE_ID": 3,
              "CONTENT": "Say Hello to everyone"
            },
            {
              "MESSAGE_ID": 4,
              "CONTENT": "hello again"
            },
            {
              "MESSAGE_ID": 5,
              "CONTENT": "Welcome"
            },
            {
              "MESSAGE_ID": 101,
              "CONTENT": "Hello world"
            },
            {
              "MESSAGE_ID": 103,
              "CONTENT": "Hi there"
            },
            {
              "MESSAGE_ID": 105,
              "CONTENT": "Say Hello to everyone"
            },
            {
              "MESSAGE_ID": 107,
              "CONTENT": "hello again"
            },
            {
              "MESSAGE_ID": 109,
              "CONTENT": "Welcome"
            }
          ]
        },
        "expected": [
          {
            "MESSAGE_ID": 1,
            "CONTENT": "Hello world"
          },
          {
            "MESSAGE_ID": 3,
            "CONTENT": "Say Hello to everyone"
          },
          {
            "MESSAGE_ID": 4,
            "CONTENT": "hello again"
          },
          {
            "MESSAGE_ID": 101,
            "CONTENT": "Hello world"
          },
          {
            "MESSAGE_ID": 105,
            "CONTENT": "Say Hello to everyone"
          },
          {
            "MESSAGE_ID": 107,
            "CONTENT": "hello again"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-027",
    "title": "In-use vehicles whose plate ends in 0",
    "difficulty": "Medium",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "driver",
        "columns": [
          {
            "name": "DRIVER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LAST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LICENSE_NUMBER",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "vehicle",
        "columns": [
          {
            "name": "VEHICLE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "DRIVER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PLATE_NUMBER",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "STATUS",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the full name, license number and plate number of all drivers whose vehicles have a status of 'In Use' and whose plate ends with '0'. The name should combine first name and last name with a space.",
    "problem": "### Problem Statement\nWrite an SQL query to display the full name, license number and plate number of all drivers whose vehicles have a status of 'In Use' and whose plate ends with '0'. The name should combine first name and last name with a space.\n\n### Requirements:\n- **Expected Output Columns:** `Name`, `LICENSE_NUMBER`, `PLATE_NUMBER`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, CONCAT, LIKE\n- Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name.",
    "notes": [
      "Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name.",
      "Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  CONCAT(d.FIRST_NAME, ' ', d.LAST_NAME) AS Name,\n  d.LICENSE_NUMBER,\n  v.PLATE_NUMBER\nFROM driver d\nJOIN vehicle v ON d.DRIVER_ID = v.DRIVER_ID\nWHERE v.STATUS = 'In Use'\n  AND v.PLATE_NUMBER LIKE '%0';",
    "explanation": "Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name. Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use.",
    "expectedColumns": [
      "Name",
      "LICENSE_NUMBER",
      "PLATE_NUMBER"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah",
              "LICENSE_NUMBER": "LIC1"
            },
            {
              "DRIVER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy",
              "LICENSE_NUMBER": "LIC2"
            },
            {
              "DRIVER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das",
              "LICENSE_NUMBER": "LIC3"
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1,
              "PLATE_NUMBER": "UP10",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2,
              "PLATE_NUMBER": "UP21",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3,
              "PLATE_NUMBER": "UP30",
              "STATUS": "Maintenance"
            }
          ]
        },
        "output": [
          {
            "Name": "Amit Shah",
            "LICENSE_NUMBER": "LIC1",
            "PLATE_NUMBER": "UP10"
          }
        ],
        "explanation": "Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use."
      }
    ],
    "testCases": [
      {
        "id": "sql-027-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah",
              "LICENSE_NUMBER": "LIC1"
            },
            {
              "DRIVER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy",
              "LICENSE_NUMBER": "LIC2"
            },
            {
              "DRIVER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das",
              "LICENSE_NUMBER": "LIC3"
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1,
              "PLATE_NUMBER": "UP10",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2,
              "PLATE_NUMBER": "UP21",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3,
              "PLATE_NUMBER": "UP30",
              "STATUS": "Maintenance"
            }
          ]
        },
        "expected": [
          {
            "Name": "Amit Shah",
            "LICENSE_NUMBER": "LIC1",
            "PLATE_NUMBER": "UP10"
          }
        ]
      },
      {
        "id": "sql-027-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1002,
              "FIRST_NAME": "ZZ_Amit",
              "LAST_NAME": "ZZ_Shah",
              "LICENSE_NUMBER": "ZZ_LIC1"
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 1202,
              "DRIVER_ID": 1002,
              "PLATE_NUMBER": "ZZ_UP10",
              "STATUS": "ZZ_In Use"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-027-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah",
              "LICENSE_NUMBER": "LIC1"
            },
            {
              "DRIVER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy",
              "LICENSE_NUMBER": "LIC2"
            },
            {
              "DRIVER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das",
              "LICENSE_NUMBER": "LIC3"
            },
            {
              "DRIVER_ID": 101,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah",
              "LICENSE_NUMBER": "LIC1"
            },
            {
              "DRIVER_ID": 103,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy",
              "LICENSE_NUMBER": "LIC2"
            },
            {
              "DRIVER_ID": 105,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das",
              "LICENSE_NUMBER": "LIC3"
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1,
              "PLATE_NUMBER": "UP10",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2,
              "PLATE_NUMBER": "UP21",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3,
              "PLATE_NUMBER": "UP30",
              "STATUS": "Maintenance"
            },
            {
              "VEHICLE_ID": 201,
              "DRIVER_ID": 101,
              "PLATE_NUMBER": "UP10",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 203,
              "DRIVER_ID": 103,
              "PLATE_NUMBER": "UP21",
              "STATUS": "In Use"
            },
            {
              "VEHICLE_ID": 205,
              "DRIVER_ID": 105,
              "PLATE_NUMBER": "UP30",
              "STATUS": "Maintenance"
            }
          ]
        },
        "expected": [
          {
            "Name": "Amit Shah",
            "LICENSE_NUMBER": "LIC1",
            "PLATE_NUMBER": "UP10"
          },
          {
            "Name": "Amit Shah",
            "LICENSE_NUMBER": "LIC1",
            "PLATE_NUMBER": "UP10"
          }
        ]
      }
    ]
  },
  {
    "id": "sql-028",
    "title": "Highly rated drivers with non-cancelled bookings",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "driver",
        "columns": [
          {
            "name": "DRIVER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "LICENSE_NUMBER",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "RATING",
            "type": "REAL",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "vehicle",
        "columns": [
          {
            "name": "VEHICLE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "DRIVER_ID",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "booking",
        "columns": [
          {
            "name": "BOOKING_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "VEHICLE_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "STATUS",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the license number, vehicle ID, rating and booking ID of drivers whose rating is greater than or equal to 4.5 and whose booking status is not 'Cancelled'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the license number, vehicle ID, rating and booking ID of drivers whose rating is greater than or equal to 4.5 and whose booking status is not 'Cancelled'.\n\n### Requirements:\n- **Expected Output Columns:** `LICENSE_NUMBER`, `VEHICLE_ID`, `RATING`, `BOOKING_ID`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** JOIN, >= comparison, not-equal filtering\n- Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings.",
    "notes": [
      "Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings.",
      "Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  d.LICENSE_NUMBER,\n  v.VEHICLE_ID,\n  d.RATING,\n  b.BOOKING_ID\nFROM driver d\nJOIN vehicle v ON d.DRIVER_ID = v.DRIVER_ID\nJOIN booking b ON v.VEHICLE_ID = b.VEHICLE_ID\nWHERE d.RATING >= 4.5\n  AND b.STATUS <> 'Cancelled';",
    "explanation": "Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings. Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded.",
    "expectedColumns": [
      "LICENSE_NUMBER",
      "VEHICLE_ID",
      "RATING",
      "BOOKING_ID"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "LICENSE_NUMBER": "LIC1",
              "RATING": 4.8
            },
            {
              "DRIVER_ID": 2,
              "LICENSE_NUMBER": "LIC2",
              "RATING": 4.5
            },
            {
              "DRIVER_ID": 3,
              "LICENSE_NUMBER": "LIC3",
              "RATING": 4.2
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3
            }
          ],
          "booking": [
            {
              "BOOKING_ID": 1001,
              "VEHICLE_ID": 101,
              "STATUS": "Completed"
            },
            {
              "BOOKING_ID": 1002,
              "VEHICLE_ID": 101,
              "STATUS": "Cancelled"
            },
            {
              "BOOKING_ID": 1003,
              "VEHICLE_ID": 102,
              "STATUS": "Confirmed"
            },
            {
              "BOOKING_ID": 1004,
              "VEHICLE_ID": 103,
              "STATUS": "Completed"
            }
          ]
        },
        "output": [
          {
            "LICENSE_NUMBER": "LIC1",
            "VEHICLE_ID": 101,
            "RATING": 4.8,
            "BOOKING_ID": 1001
          },
          {
            "LICENSE_NUMBER": "LIC2",
            "VEHICLE_ID": 102,
            "RATING": 4.5,
            "BOOKING_ID": 1003
          }
        ],
        "explanation": "Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded."
      }
    ],
    "testCases": [
      {
        "id": "sql-028-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "LICENSE_NUMBER": "LIC1",
              "RATING": 4.8
            },
            {
              "DRIVER_ID": 2,
              "LICENSE_NUMBER": "LIC2",
              "RATING": 4.5
            },
            {
              "DRIVER_ID": 3,
              "LICENSE_NUMBER": "LIC3",
              "RATING": 4.2
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3
            }
          ],
          "booking": [
            {
              "BOOKING_ID": 1001,
              "VEHICLE_ID": 101,
              "STATUS": "Completed"
            },
            {
              "BOOKING_ID": 1002,
              "VEHICLE_ID": 101,
              "STATUS": "Cancelled"
            },
            {
              "BOOKING_ID": 1003,
              "VEHICLE_ID": 102,
              "STATUS": "Confirmed"
            },
            {
              "BOOKING_ID": 1004,
              "VEHICLE_ID": 103,
              "STATUS": "Completed"
            }
          ]
        },
        "expected": [
          {
            "LICENSE_NUMBER": "LIC1",
            "VEHICLE_ID": 101,
            "RATING": 4.8,
            "BOOKING_ID": 1001
          },
          {
            "LICENSE_NUMBER": "LIC2",
            "VEHICLE_ID": 102,
            "RATING": 4.5,
            "BOOKING_ID": 1003
          }
        ]
      },
      {
        "id": "sql-028-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1002,
              "LICENSE_NUMBER": "ZZ_LIC1",
              "RATING": 1009.6
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 1202,
              "DRIVER_ID": 1002
            }
          ],
          "booking": [
            {
              "BOOKING_ID": 3002,
              "VEHICLE_ID": 1202,
              "STATUS": "ZZ_Completed"
            }
          ]
        },
        "expected": [
          {
            "LICENSE_NUMBER": "ZZ_LIC1",
            "VEHICLE_ID": 1202,
            "RATING": 1009.6,
            "BOOKING_ID": 3002
          }
        ]
      },
      {
        "id": "sql-028-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "driver": [
            {
              "DRIVER_ID": 1,
              "LICENSE_NUMBER": "LIC1",
              "RATING": 4.8
            },
            {
              "DRIVER_ID": 2,
              "LICENSE_NUMBER": "LIC2",
              "RATING": 4.5
            },
            {
              "DRIVER_ID": 3,
              "LICENSE_NUMBER": "LIC3",
              "RATING": 4.2
            },
            {
              "DRIVER_ID": 101,
              "LICENSE_NUMBER": "LIC1",
              "RATING": 4.8
            },
            {
              "DRIVER_ID": 103,
              "LICENSE_NUMBER": "LIC2",
              "RATING": 4.5
            },
            {
              "DRIVER_ID": 105,
              "LICENSE_NUMBER": "LIC3",
              "RATING": 4.2
            }
          ],
          "vehicle": [
            {
              "VEHICLE_ID": 101,
              "DRIVER_ID": 1
            },
            {
              "VEHICLE_ID": 102,
              "DRIVER_ID": 2
            },
            {
              "VEHICLE_ID": 103,
              "DRIVER_ID": 3
            },
            {
              "VEHICLE_ID": 201,
              "DRIVER_ID": 101
            },
            {
              "VEHICLE_ID": 203,
              "DRIVER_ID": 103
            },
            {
              "VEHICLE_ID": 205,
              "DRIVER_ID": 105
            }
          ],
          "booking": [
            {
              "BOOKING_ID": 1001,
              "VEHICLE_ID": 101,
              "STATUS": "Completed"
            },
            {
              "BOOKING_ID": 1002,
              "VEHICLE_ID": 101,
              "STATUS": "Cancelled"
            },
            {
              "BOOKING_ID": 1003,
              "VEHICLE_ID": 102,
              "STATUS": "Confirmed"
            },
            {
              "BOOKING_ID": 1004,
              "VEHICLE_ID": 103,
              "STATUS": "Completed"
            },
            {
              "BOOKING_ID": 1101,
              "VEHICLE_ID": 201,
              "STATUS": "Completed"
            },
            {
              "BOOKING_ID": 1103,
              "VEHICLE_ID": 202,
              "STATUS": "Cancelled"
            },
            {
              "BOOKING_ID": 1105,
              "VEHICLE_ID": 204,
              "STATUS": "Confirmed"
            },
            {
              "BOOKING_ID": 1107,
              "VEHICLE_ID": 206,
              "STATUS": "Completed"
            }
          ]
        },
        "expected": [
          {
            "LICENSE_NUMBER": "LIC1",
            "VEHICLE_ID": 101,
            "RATING": 4.8,
            "BOOKING_ID": 1001
          },
          {
            "LICENSE_NUMBER": "LIC2",
            "VEHICLE_ID": 102,
            "RATING": 4.5,
            "BOOKING_ID": 1003
          },
          {
            "LICENSE_NUMBER": "LIC1",
            "VEHICLE_ID": 201,
            "RATING": 4.8,
            "BOOKING_ID": 1101
          }
        ]
      }
    ]
  },
  {
    "id": "sql-029",
    "title": "Count viewers sharing the same name",
    "difficulty": "Medium",
    "duration": 15,
    "category": "AGGREGATION & GROUPING",
    "tableSchema": [
      {
        "name": "viewer",
        "columns": [
          {
            "name": "viewername",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the number of viewers having the same name, with the viewer name and its count.",
    "problem": "### Problem Statement\nWrite an SQL query to display the number of viewers having the same name, with the viewer name and its count.\n\n### Requirements:\n- **Expected Output Columns:** `viewername`, `name_count`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** GROUP BY, COUNT\n- GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group.",
    "notes": [
      "GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group.",
      "Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  viewername,\n  COUNT(*) AS name_count\nFROM viewer\nGROUP BY viewername;",
    "explanation": "GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group. Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name.",
    "expectedColumns": [
      "viewername",
      "name_count"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "viewer": [
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Neha"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            }
          ]
        },
        "output": [
          {
            "viewername": "Amit",
            "name_count": 3
          },
          {
            "viewername": "Neha",
            "name_count": 1
          },
          {
            "viewername": "Riya",
            "name_count": 2
          }
        ],
        "explanation": "Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name."
      }
    ],
    "testCases": [
      {
        "id": "sql-029-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "viewer": [
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Neha"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            }
          ]
        },
        "expected": [
          {
            "viewername": "Amit",
            "name_count": 3
          },
          {
            "viewername": "Neha",
            "name_count": 1
          },
          {
            "viewername": "Riya",
            "name_count": 2
          }
        ]
      },
      {
        "id": "sql-029-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "viewer": [
            {
              "viewername": "ZZ_Amit"
            }
          ]
        },
        "expected": [
          {
            "viewername": "ZZ_Amit",
            "name_count": 1
          }
        ]
      },
      {
        "id": "sql-029-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "viewer": [
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Neha"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            },
            {
              "viewername": "Neha"
            },
            {
              "viewername": "Riya"
            },
            {
              "viewername": "Amit"
            }
          ]
        },
        "expected": [
          {
            "viewername": "Amit",
            "name_count": 6
          },
          {
            "viewername": "Neha",
            "name_count": 2
          },
          {
            "viewername": "Riya",
            "name_count": 4
          }
        ]
      }
    ]
  },
  {
    "id": "sql-030",
    "title": "Contacts whose job title contains Engineer",
    "difficulty": "Hard",
    "duration": 15,
    "category": "JOINS & RELATIONAL QUERIES",
    "tableSchema": [
      {
        "name": "users",
        "columns": [
          {
            "name": "USER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "LAST_NAME",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "contacts",
        "columns": [
          {
            "name": "USER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "CONTACT_ID",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "jobs",
        "columns": [
          {
            "name": "USER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "JOB_TITLE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "howToAttempt": "Write an SQL query to display the full name of users whose contact has a job title containing the word 'Engineer'.",
    "problem": "### Problem Statement\nWrite an SQL query to display the full name of users whose contact has a job title containing the word 'Engineer'.\n\n### Requirements:\n- **Expected Output Columns:** `FULLNAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** self-join pattern, JOIN, LIKE, DISTINCT, CONCAT\n- The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names.",
    "notes": [
      "The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names.",
      "Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names.",
      "Row output order is flexible unless specified otherwise."
    ],
    "starterCode": "",
    "solution": "SELECT\n  DISTINCT CONCAT(u.FIRST_NAME, ' ', u.LAST_NAME) AS FULLNAME\nFROM users u\nJOIN contacts c ON u.USER_ID = c.USER_ID\nJOIN users cu ON c.CONTACT_ID = cu.USER_ID\nJOIN jobs j ON cu.USER_ID = j.USER_ID\nWHERE j.JOB_TITLE LIKE '%Engineer%';",
    "explanation": "The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names. Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names.",
    "expectedColumns": [
      "FULLNAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Accenture Assessment Sample)",
        "input": {
          "users": [
            {
              "USER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah"
            },
            {
              "USER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy"
            },
            {
              "USER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das"
            },
            {
              "USER_ID": 4,
              "FIRST_NAME": "Raj",
              "LAST_NAME": "Kumar"
            }
          ],
          "contacts": [
            {
              "USER_ID": 1,
              "CONTACT_ID": 2
            },
            {
              "USER_ID": 1,
              "CONTACT_ID": 3
            },
            {
              "USER_ID": 2,
              "CONTACT_ID": 4
            },
            {
              "USER_ID": 3,
              "CONTACT_ID": 4
            }
          ],
          "jobs": [
            {
              "USER_ID": 2,
              "JOB_TITLE": "Software Engineer"
            },
            {
              "USER_ID": 3,
              "JOB_TITLE": "Designer"
            },
            {
              "USER_ID": 4,
              "JOB_TITLE": "Civil Engineer"
            }
          ]
        },
        "output": [
          {
            "FULLNAME": "Amit Shah"
          },
          {
            "FULLNAME": "Riya Roy"
          },
          {
            "FULLNAME": "Neha Das"
          }
        ],
        "explanation": "Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names."
      }
    ],
    "testCases": [
      {
        "id": "sql-030-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "users": [
            {
              "USER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah"
            },
            {
              "USER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy"
            },
            {
              "USER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das"
            },
            {
              "USER_ID": 4,
              "FIRST_NAME": "Raj",
              "LAST_NAME": "Kumar"
            }
          ],
          "contacts": [
            {
              "USER_ID": 1,
              "CONTACT_ID": 2
            },
            {
              "USER_ID": 1,
              "CONTACT_ID": 3
            },
            {
              "USER_ID": 2,
              "CONTACT_ID": 4
            },
            {
              "USER_ID": 3,
              "CONTACT_ID": 4
            }
          ],
          "jobs": [
            {
              "USER_ID": 2,
              "JOB_TITLE": "Software Engineer"
            },
            {
              "USER_ID": 3,
              "JOB_TITLE": "Designer"
            },
            {
              "USER_ID": 4,
              "JOB_TITLE": "Civil Engineer"
            }
          ]
        },
        "expected": [
          {
            "FULLNAME": "Amit Shah"
          },
          {
            "FULLNAME": "Riya Roy"
          },
          {
            "FULLNAME": "Neha Das"
          }
        ]
      },
      {
        "id": "sql-030-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "users": [
            {
              "USER_ID": 1002,
              "FIRST_NAME": "ZZ_Amit",
              "LAST_NAME": "ZZ_Shah"
            }
          ],
          "contacts": [
            {
              "USER_ID": 1002,
              "CONTACT_ID": 1004
            }
          ],
          "jobs": [
            {
              "USER_ID": 1004,
              "JOB_TITLE": "ZZ_Software Engineer"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-030-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "users": [
            {
              "USER_ID": 1,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah"
            },
            {
              "USER_ID": 2,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy"
            },
            {
              "USER_ID": 3,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das"
            },
            {
              "USER_ID": 4,
              "FIRST_NAME": "Raj",
              "LAST_NAME": "Kumar"
            },
            {
              "USER_ID": 101,
              "FIRST_NAME": "Amit",
              "LAST_NAME": "Shah"
            },
            {
              "USER_ID": 103,
              "FIRST_NAME": "Riya",
              "LAST_NAME": "Roy"
            },
            {
              "USER_ID": 105,
              "FIRST_NAME": "Neha",
              "LAST_NAME": "Das"
            },
            {
              "USER_ID": 107,
              "FIRST_NAME": "Raj",
              "LAST_NAME": "Kumar"
            }
          ],
          "contacts": [
            {
              "USER_ID": 1,
              "CONTACT_ID": 2
            },
            {
              "USER_ID": 1,
              "CONTACT_ID": 3
            },
            {
              "USER_ID": 2,
              "CONTACT_ID": 4
            },
            {
              "USER_ID": 3,
              "CONTACT_ID": 4
            },
            {
              "USER_ID": 101,
              "CONTACT_ID": 102
            },
            {
              "USER_ID": 102,
              "CONTACT_ID": 104
            },
            {
              "USER_ID": 104,
              "CONTACT_ID": 106
            },
            {
              "USER_ID": 106,
              "CONTACT_ID": 107
            }
          ],
          "jobs": [
            {
              "USER_ID": 2,
              "JOB_TITLE": "Software Engineer"
            },
            {
              "USER_ID": 3,
              "JOB_TITLE": "Designer"
            },
            {
              "USER_ID": 4,
              "JOB_TITLE": "Civil Engineer"
            },
            {
              "USER_ID": 102,
              "JOB_TITLE": "Software Engineer"
            },
            {
              "USER_ID": 104,
              "JOB_TITLE": "Designer"
            },
            {
              "USER_ID": 106,
              "JOB_TITLE": "Civil Engineer"
            }
          ]
        },
        "expected": [
          {
            "FULLNAME": "Amit Shah"
          },
          {
            "FULLNAME": "Riya Roy"
          },
          {
            "FULLNAME": "Neha Das"
          }
        ]
      }
    ]
  }
];

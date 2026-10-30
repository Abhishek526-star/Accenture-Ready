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
  },
  {
    "id": "sql-031",
    "numericId": 31,
    "title": "Flight passenger meal preferences",
    "domain": "AeroGlobal Airways",
    "difficulty": "Easy",
    "duration": 15,
    "category": "MULTI-TABLE JOIN & FILTERING",
    "tableSchema": [
      {
        "name": "passenger",
        "columns": [
          {
            "name": "passenger_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "contact",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "baggage",
        "columns": [
          {
            "name": "baggage_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "booking_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "weight_kg",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "booking",
        "columns": [
          {
            "name": "booking_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "passenger_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "flight_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "meal_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "seat_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "booking_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "ticket_pricing",
        "columns": [
          {
            "name": "price_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "flight_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "fare_class",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "base_fare",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "meal_preference",
        "columns": [
          {
            "name": "meal_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "meal_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "flight",
        "columns": [
          {
            "name": "flight_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "flight_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "departure_airport_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "arrival_airport_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "aircraft_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "departure_time",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "arrival_time",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "flight_crew",
        "columns": [
          {
            "name": "crew_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "flight_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "pilot_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "role",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "airport",
        "columns": [
          {
            "name": "airport_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "airport_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "aircraft",
        "columns": [
          {
            "name": "aircraft_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "model",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "capacity",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "pilot",
        "columns": [
          {
            "name": "pilot_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "pilot_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "license_number",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1380,
      "height": 702
    },
    "connectionLines": [
      {
        "constraintName": "baggage_ibfk_1",
        "sourceTable": "baggage",
        "sourceColumn": "booking_id",
        "sourceRowIndex": 1,
        "targetTable": "booking",
        "targetColumn": "booking_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 438
          },
          "endPoint": {
            "x": 400,
            "y": 234
          },
          "controlPoints": [
            {
              "x": 332.4,
              "y": 438
            },
            {
              "x": 337.6,
              "y": 234
            }
          ],
          "pathData": "M 270 438.0 C 332.4 438.0, 337.6 234.0, 400 234.0",
          "labelPosition": {
            "x": 386,
            "y": 223,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "booking_ibfk_1",
        "sourceTable": "booking",
        "sourceColumn": "passenger_id",
        "sourceRowIndex": 1,
        "targetTable": "passenger",
        "targetColumn": "passenger_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 400,
            "y": 258
          },
          "endPoint": {
            "x": 270,
            "y": 174
          },
          "controlPoints": [
            {
              "x": 337.6,
              "y": 258
            },
            {
              "x": 332.4,
              "y": 174
            }
          ],
          "pathData": "M 400 258.0 C 337.6 258.0, 332.4 174.0, 270 174.0",
          "labelPosition": {
            "x": 284,
            "y": 163,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "booking_ibfk_2",
        "sourceTable": "booking",
        "sourceColumn": "flight_id",
        "sourceRowIndex": 2,
        "targetTable": "flight",
        "targetColumn": "flight_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 282
          },
          "endPoint": {
            "x": 750,
            "y": 294
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 282
            },
            {
              "x": 687.6,
              "y": 294
            }
          ],
          "pathData": "M 620 282.0 C 682.4 282.0, 687.6 294.0, 750 294.0",
          "labelPosition": {
            "x": 685,
            "y": 271,
            "anchor": "middle"
          }
        }
      },
      {
        "constraintName": "booking_ibfk_3",
        "sourceTable": "booking",
        "sourceColumn": "meal_id",
        "sourceRowIndex": 3,
        "targetTable": "meal_preference",
        "targetColumn": "meal_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 306
          },
          "endPoint": {
            "x": 750,
            "y": 114
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 306
            },
            {
              "x": 687.6,
              "y": 114
            }
          ],
          "pathData": "M 620 306.0 C 682.4 306.0, 687.6 114.0, 750 114.0",
          "labelPosition": {
            "x": 736,
            "y": 103,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "ticket_pricing_ibfk_1",
        "sourceTable": "ticket_pricing",
        "sourceColumn": "flight_id",
        "sourceRowIndex": 1,
        "targetTable": "flight",
        "targetColumn": "flight_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 518
          },
          "endPoint": {
            "x": 750,
            "y": 294
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 518
            },
            {
              "x": 687.6,
              "y": 294
            }
          ],
          "pathData": "M 620 518.0 C 682.4 518.0, 687.6 294.0, 750 294.0",
          "labelPosition": {
            "x": 736,
            "y": 283,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "flight_ibfk_1",
        "sourceTable": "flight",
        "sourceColumn": "departure_airport_id",
        "sourceRowIndex": 2,
        "targetTable": "airport",
        "targetColumn": "airport_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 342
          },
          "endPoint": {
            "x": 1100,
            "y": 214
          },
          "controlPoints": [
            {
              "x": 1032.4,
              "y": 342
            },
            {
              "x": 1037.6,
              "y": 214
            }
          ],
          "pathData": "M 970 342.0 C 1032.4 342.0, 1037.6 214.0, 1100 214.0",
          "labelPosition": {
            "x": 1086,
            "y": 203,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "flight_ibfk_2",
        "sourceTable": "flight",
        "sourceColumn": "arrival_airport_id",
        "sourceRowIndex": 3,
        "targetTable": "airport",
        "targetColumn": "airport_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 366
          },
          "endPoint": {
            "x": 1100,
            "y": 214
          },
          "controlPoints": [
            {
              "x": 1032.4,
              "y": 366
            },
            {
              "x": 1037.6,
              "y": 214
            }
          ],
          "pathData": "M 970 366.0 C 1032.4 366.0, 1037.6 214.0, 1100 214.0",
          "labelPosition": {
            "x": 1086,
            "y": 203,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "flight_ibfk_3",
        "sourceTable": "flight",
        "sourceColumn": "aircraft_id",
        "sourceRowIndex": 4,
        "targetTable": "aircraft",
        "targetColumn": "aircraft_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 390
          },
          "endPoint": {
            "x": 1100,
            "y": 394
          },
          "controlPoints": [
            {
              "x": 1032.4,
              "y": 390
            },
            {
              "x": 1037.6,
              "y": 394
            }
          ],
          "pathData": "M 970 390.0 C 1032.4 390.0, 1037.6 394.0, 1100 394.0",
          "labelPosition": {
            "x": 1035,
            "y": 379,
            "anchor": "middle"
          }
        }
      },
      {
        "constraintName": "flight_crew_ibfk_1",
        "sourceTable": "flight_crew",
        "sourceColumn": "flight_id",
        "sourceRowIndex": 1,
        "targetTable": "flight",
        "targetColumn": "flight_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 578
          },
          "endPoint": {
            "x": 970,
            "y": 294
          },
          "controlPoints": [
            {
              "x": 1025,
              "y": 578
            },
            {
              "x": 1025,
              "y": 294
            }
          ],
          "pathData": "M 970 578.0 C 1025 578.0, 1025 294.0, 970 294.0",
          "labelPosition": {
            "x": 1031,
            "y": 283,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "flight_crew_ibfk_2",
        "sourceTable": "flight_crew",
        "sourceColumn": "pilot_id",
        "sourceRowIndex": 2,
        "targetTable": "pilot",
        "targetColumn": "pilot_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 602
          },
          "endPoint": {
            "x": 1100,
            "y": 554
          },
          "controlPoints": [
            {
              "x": 1032.4,
              "y": 602
            },
            {
              "x": 1037.6,
              "y": 554
            }
          ],
          "pathData": "M 970 602.0 C 1032.4 602.0, 1037.6 554.0, 1100 554.0",
          "labelPosition": {
            "x": 1086,
            "y": 543,
            "anchor": "end"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe distinct first names and contact numbers of passengers who are departing from 'Hong Kong', boarding a flight with Flight ID '4' and have requested a 'Vegetarian' meal.",
    "problem": "### Problem Statement\nThe distinct first names and contact numbers of passengers who are departing from 'Hong Kong', boarding a flight with Flight ID '4' and have requested a 'Vegetarian' meal.\n\n### Requirements:\n- **Expected Output Columns:** `FIRST_NAME`, `CONTACT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** MULTI-TABLE JOIN & FILTERING\n- Departing city refers to airport.city of the departure airport.\n- Flight ID '4' corresponds to flight.flight_id = 4.\n- Filter meal_type = 'Vegetarian' and return distinct passenger details.",
    "notes": [
      "Departing city refers to airport.city of the departure airport.",
      "Flight ID '4' corresponds to flight.flight_id = 4.",
      "Filter meal_type = 'Vegetarian' and return distinct passenger details."
    ],
    "starterCode": "",
    "solution": "SELECT DISTINCT\n    p.first_name AS FIRST_NAME,\n    p.contact AS CONTACT\nFROM passenger p\nJOIN booking b ON p.passenger_id = b.passenger_id\nJOIN flight f ON b.flight_id = f.flight_id\nJOIN airport a ON f.departure_airport_id = a.airport_id\nJOIN meal_preference m ON b.meal_id = m.meal_id\nWHERE a.city = 'Hong Kong'\n  AND f.flight_id = 4\n  AND m.meal_type = 'Vegetarian';",
    "explanation": "Joins passenger to booking, booking to flight, flight to departure airport, and booking to meal_preference. Filters for departure city 'Hong Kong', flight ID '4', and meal type 'Vegetarian', projecting DISTINCT first names and contacts.",
    "expectedColumns": [
      "FIRST_NAME",
      "CONTACT"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (AeroGlobal Airways Assessment Sample)",
        "input": {
          "airport": [
            {
              "airport_id": 10,
              "airport_name": "Hong Kong Intl",
              "city": "Hong Kong",
              "country": "China"
            },
            {
              "airport_id": 20,
              "airport_name": "Tokyo Haneda",
              "city": "Tokyo",
              "country": "Japan"
            }
          ],
          "flight": [
            {
              "flight_id": 4,
              "flight_number": "CX100",
              "departure_airport_id": 10,
              "arrival_airport_id": 20,
              "aircraft_id": 1
            },
            {
              "flight_id": 5,
              "flight_number": "CX200",
              "departure_airport_id": 20,
              "arrival_airport_id": 10,
              "aircraft_id": 1
            }
          ],
          "meal_preference": [
            {
              "meal_id": 1,
              "meal_type": "Vegetarian",
              "description": "Vegetarian Meal"
            },
            {
              "meal_id": 2,
              "meal_type": "Non-Vegetarian",
              "description": "Meat Meal"
            }
          ],
          "passenger": [
            {
              "passenger_id": 1,
              "first_name": "Alice",
              "last_name": "Wong",
              "contact": 9876543210,
              "email": "alice@example.com"
            },
            {
              "passenger_id": 2,
              "first_name": "Bob",
              "last_name": "Chen",
              "contact": 9876543211,
              "email": "bob@example.com"
            },
            {
              "passenger_id": 3,
              "first_name": "Charlie",
              "last_name": "Lee",
              "contact": 9876543212,
              "email": "charlie@example.com"
            },
            {
              "passenger_id": 4,
              "first_name": "David",
              "last_name": "Kim",
              "contact": 9876543213,
              "email": "david@example.com"
            }
          ],
          "booking": [
            {
              "booking_id": 101,
              "passenger_id": 1,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "12A",
              "booking_date": "2025-01-10"
            },
            {
              "booking_id": 102,
              "passenger_id": 2,
              "flight_id": 4,
              "meal_id": 2,
              "seat_number": "12B",
              "booking_date": "2025-01-11"
            },
            {
              "booking_id": 103,
              "passenger_id": 3,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "14C",
              "booking_date": "2025-01-12"
            },
            {
              "booking_id": 104,
              "passenger_id": 4,
              "flight_id": 5,
              "meal_id": 1,
              "seat_number": "15D",
              "booking_date": "2025-01-13"
            }
          ]
        },
        "output": [
          {
            "FIRST_NAME": "Alice",
            "CONTACT": 9876543210
          },
          {
            "FIRST_NAME": "Charlie",
            "CONTACT": 9876543212
          }
        ],
        "explanation": "Joins passenger to booking, booking to flight, flight to departure airport, and booking to meal_preference. Filters for departure city 'Hong Kong', flight ID '4', and meal type 'Vegetarian', projecting DISTINCT first names and contacts."
      }
    ],
    "testCases": [
      {
        "id": "sql-031-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "airport": [
            {
              "airport_id": 10,
              "airport_name": "Hong Kong Intl",
              "city": "Hong Kong",
              "country": "China"
            },
            {
              "airport_id": 20,
              "airport_name": "Tokyo Haneda",
              "city": "Tokyo",
              "country": "Japan"
            }
          ],
          "flight": [
            {
              "flight_id": 4,
              "flight_number": "CX100",
              "departure_airport_id": 10,
              "arrival_airport_id": 20,
              "aircraft_id": 1
            },
            {
              "flight_id": 5,
              "flight_number": "CX200",
              "departure_airport_id": 20,
              "arrival_airport_id": 10,
              "aircraft_id": 1
            }
          ],
          "meal_preference": [
            {
              "meal_id": 1,
              "meal_type": "Vegetarian",
              "description": "Vegetarian Meal"
            },
            {
              "meal_id": 2,
              "meal_type": "Non-Vegetarian",
              "description": "Meat Meal"
            }
          ],
          "passenger": [
            {
              "passenger_id": 1,
              "first_name": "Alice",
              "last_name": "Wong",
              "contact": 9876543210,
              "email": "alice@example.com"
            },
            {
              "passenger_id": 2,
              "first_name": "Bob",
              "last_name": "Chen",
              "contact": 9876543211,
              "email": "bob@example.com"
            },
            {
              "passenger_id": 3,
              "first_name": "Charlie",
              "last_name": "Lee",
              "contact": 9876543212,
              "email": "charlie@example.com"
            },
            {
              "passenger_id": 4,
              "first_name": "David",
              "last_name": "Kim",
              "contact": 9876543213,
              "email": "david@example.com"
            }
          ],
          "booking": [
            {
              "booking_id": 101,
              "passenger_id": 1,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "12A",
              "booking_date": "2025-01-10"
            },
            {
              "booking_id": 102,
              "passenger_id": 2,
              "flight_id": 4,
              "meal_id": 2,
              "seat_number": "12B",
              "booking_date": "2025-01-11"
            },
            {
              "booking_id": 103,
              "passenger_id": 3,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "14C",
              "booking_date": "2025-01-12"
            },
            {
              "booking_id": 104,
              "passenger_id": 4,
              "flight_id": 5,
              "meal_id": 1,
              "seat_number": "15D",
              "booking_date": "2025-01-13"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Alice",
            "CONTACT": 9876543210
          },
          {
            "FIRST_NAME": "Charlie",
            "CONTACT": 9876543212
          }
        ]
      },
      {
        "id": "sql-031-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "airport": [
            {
              "airport_id": 10,
              "airport_name": "Hong Kong Intl",
              "city": "Hong Kong",
              "country": "China"
            },
            {
              "airport_id": 30,
              "airport_name": "London Heathrow",
              "city": "London",
              "country": "UK"
            }
          ],
          "flight": [
            {
              "flight_id": 4,
              "flight_number": "CX100",
              "departure_airport_id": 30,
              "arrival_airport_id": 10,
              "aircraft_id": 1
            },
            {
              "flight_id": 8,
              "flight_number": "CX800",
              "departure_airport_id": 10,
              "arrival_airport_id": 30,
              "aircraft_id": 1
            }
          ],
          "meal_preference": [
            {
              "meal_id": 1,
              "meal_type": "Vegetarian",
              "description": "Vegetarian Meal"
            },
            {
              "meal_id": 2,
              "meal_type": "Non-Vegetarian",
              "description": "Meat Meal"
            }
          ],
          "passenger": [
            {
              "passenger_id": 10,
              "first_name": "Grace",
              "last_name": "Hopper",
              "contact": 9000000001,
              "email": "grace@example.com"
            }
          ],
          "booking": [
            {
              "booking_id": 201,
              "passenger_id": 10,
              "flight_id": 4,
              "meal_id": 2,
              "seat_number": "1A",
              "booking_date": "2025-02-01"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-031-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "airport": [
            {
              "airport_id": 10,
              "airport_name": "Hong Kong Intl",
              "city": "Hong Kong",
              "country": "China"
            },
            {
              "airport_id": 20,
              "airport_name": "Tokyo Haneda",
              "city": "Tokyo",
              "country": "Japan"
            }
          ],
          "flight": [
            {
              "flight_id": 4,
              "flight_number": "CX100",
              "departure_airport_id": 10,
              "arrival_airport_id": 20,
              "aircraft_id": 1
            }
          ],
          "meal_preference": [
            {
              "meal_id": 1,
              "meal_type": "Vegetarian",
              "description": "Vegetarian Meal"
            }
          ],
          "passenger": [
            {
              "passenger_id": 1,
              "first_name": "Alice",
              "last_name": "Wong",
              "contact": 9876543210,
              "email": "alice@example.com"
            },
            {
              "passenger_id": 5,
              "first_name": "Elena",
              "last_name": "Rostova",
              "contact": 9876543255,
              "email": "elena@example.com"
            }
          ],
          "booking": [
            {
              "booking_id": 301,
              "passenger_id": 1,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "12A",
              "booking_date": "2025-01-10"
            },
            {
              "booking_id": 302,
              "passenger_id": 1,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "12B",
              "booking_date": "2025-01-10"
            },
            {
              "booking_id": 303,
              "passenger_id": 5,
              "flight_id": 4,
              "meal_id": 1,
              "seat_number": "14A",
              "booking_date": "2025-01-15"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Alice",
            "CONTACT": 9876543210
          },
          {
            "FIRST_NAME": "Elena",
            "CONTACT": 9876543255
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "WHERE",
      "DISTINCT"
    ],
    "statement": "The distinct first names and contact numbers of passengers who are departing from 'Hong Kong', boarding a flight with Flight ID '4' and have requested a 'Vegetarian' meal.",
    "diagramTables": [
      {
        "name": "passenger",
        "label": "Passenger",
        "x": 50,
        "y": 120,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "passenger_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "contact",
            "type": "DECIMAL(20,0)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(100)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "baggage",
        "label": "Baggage",
        "x": 50,
        "y": 360,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "baggage_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "booking_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "booking.booking_id"
          },
          {
            "name": "weight_kg",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "booking",
        "label": "Booking",
        "x": 400,
        "y": 180,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "booking_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "passenger_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "passenger.passenger_id"
          },
          {
            "name": "flight_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "flight.flight_id"
          },
          {
            "name": "meal_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "meal_preference.meal_id"
          },
          {
            "name": "seat_number",
            "type": "VARCHAR(10)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "booking_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "ticket_pricing",
        "label": "Ticket Pricing",
        "x": 400,
        "y": 440,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "price_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "flight_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "flight.flight_id"
          },
          {
            "name": "fare_class",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "base_fare",
            "type": "DECIMAL(10,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "meal_preference",
        "label": "Meal Preference",
        "x": 750,
        "y": 60,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "meal_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "meal_type",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "flight",
        "label": "Flight",
        "x": 750,
        "y": 240,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "flight_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "flight_number",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "departure_airport_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "airport.airport_id"
          },
          {
            "name": "arrival_airport_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "airport.airport_id"
          },
          {
            "name": "aircraft_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "aircraft.aircraft_id"
          },
          {
            "name": "departure_time",
            "type": "DATETIME",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "arrival_time",
            "type": "DATETIME",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "flight_crew",
        "label": "Flight Crew",
        "x": 750,
        "y": 500,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "crew_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "flight_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "flight.flight_id"
          },
          {
            "name": "pilot_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "pilot.pilot_id"
          },
          {
            "name": "role",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "airport",
        "label": "Airport",
        "x": 1100,
        "y": 160,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "airport_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "airport_name",
            "type": "VARCHAR(100)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "aircraft",
        "label": "Aircraft",
        "x": 1100,
        "y": 340,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "aircraft_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "model",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "capacity",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "pilot",
        "label": "Pilot",
        "x": 1100,
        "y": 500,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "pilot_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "pilot_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "license_number",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "baggage",
        "target": "booking",
        "column": "booking_id",
        "targetColumn": "booking_id",
        "constraintName": "baggage_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            270,
            431
          ],
          [
            298,
            431
          ],
          [
            298,
            316.4
          ],
          [
            400,
            316.4
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "booking",
        "target": "passenger",
        "column": "passenger_id",
        "targetColumn": "passenger_id",
        "constraintName": "booking_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            400,
            261.2
          ],
          [
            372,
            261.2
          ],
          [
            372,
            203
          ],
          [
            270,
            203
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "booking",
        "target": "flight",
        "column": "flight_id",
        "targetColumn": "flight_id",
        "constraintName": "booking_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            620,
            288.8
          ],
          [
            648,
            288.8
          ],
          [
            648,
            335.43
          ],
          [
            750,
            335.43
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "booking",
        "target": "meal_preference",
        "column": "meal_id",
        "targetColumn": "meal_id",
        "constraintName": "booking_ibfk_3",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            620,
            233.6
          ],
          [
            648,
            233.6
          ],
          [
            648,
            119
          ],
          [
            750,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "ticket_pricing",
        "target": "flight",
        "column": "flight_id",
        "targetColumn": "flight_id",
        "constraintName": "ticket_pricing_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            620,
            511
          ],
          [
            648,
            511
          ],
          [
            648,
            381.71
          ],
          [
            750,
            381.71
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "flight",
        "target": "airport",
        "column": "departure_airport_id",
        "targetColumn": "airport_id",
        "constraintName": "flight_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            970,
            289.14
          ],
          [
            998,
            289.14
          ],
          [
            998,
            216
          ],
          [
            1100,
            216
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "flight",
        "target": "airport",
        "column": "arrival_airport_id",
        "targetColumn": "airport_id",
        "constraintName": "flight_ibfk_2",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            970,
            312.29
          ],
          [
            1072,
            312.29
          ],
          [
            1072,
            246
          ],
          [
            1100,
            246
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "flight",
        "target": "aircraft",
        "column": "aircraft_id",
        "targetColumn": "aircraft_id",
        "constraintName": "flight_ibfk_3",
        "sourceIndex": 4,
        "targetIndex": 0,
        "points": [
          [
            970,
            358.57
          ],
          [
            998,
            358.57
          ],
          [
            998,
            399
          ],
          [
            1100,
            399
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "flight_crew",
        "target": "flight",
        "column": "flight_id",
        "targetColumn": "flight_id",
        "constraintName": "flight_crew_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            832.67,
            500
          ],
          [
            832.67,
            482
          ],
          [
            848.29,
            482
          ],
          [
            848.29,
            454
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "flight_crew",
        "target": "pilot",
        "column": "pilot_id",
        "targetColumn": "pilot_id",
        "constraintName": "flight_crew_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            970,
            586
          ],
          [
            998,
            586
          ],
          [
            998,
            559
          ],
          [
            1100,
            559
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      }
    ]
  },
  {
    "id": "sql-032",
    "numericId": 32,
    "title": "Student course registration & schedules",
    "domain": "Metropolitan University",
    "difficulty": "Easy",
    "duration": 15,
    "category": "MULTI-TABLE RELATIONAL JOINS",
    "tableSchema": [
      {
        "name": "registration",
        "columns": [
          {
            "name": "reg_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "reg_fee",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "reg_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "student_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "section_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "midterm_grade",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "fullterm_grade",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "student",
        "columns": [
          {
            "name": "student_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "phone",
            "type": "INTEGER",
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
            "primaryKey": true
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
          },
          {
            "name": "instructor_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "room",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "course",
        "columns": [
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "term",
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
            "primaryKey": true
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
          },
          {
            "name": "endtime",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "instructor",
        "columns": [
          {
            "name": "instructor_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "dept_id",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "course_prerequisite",
        "columns": [
          {
            "name": "prereq_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "required_course_id",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "department",
        "columns": [
          {
            "name": "dept_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "dept_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "building",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "student_advisor",
        "columns": [
          {
            "name": "advisor_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "student_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "instructor_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "assigned_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "academic_standing",
        "columns": [
          {
            "name": "standing_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "student_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "standing_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "min_gpa",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1380,
      "height": 802
    },
    "connectionLines": [
      {
        "constraintName": "registration_ibfk_1",
        "sourceTable": "registration",
        "sourceColumn": "student_id",
        "sourceRowIndex": 3,
        "targetTable": "student",
        "targetColumn": "student_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 266
          },
          "endPoint": {
            "x": 400,
            "y": 114
          },
          "controlPoints": [
            {
              "x": 332.4,
              "y": 266
            },
            {
              "x": 337.6,
              "y": 114
            }
          ],
          "pathData": "M 270 266.0 C 332.4 266.0, 337.6 114.0, 400 114.0",
          "labelPosition": {
            "x": 386,
            "y": 103,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "registration_ibfk_2",
        "sourceTable": "registration",
        "sourceColumn": "section_id",
        "sourceRowIndex": 4,
        "targetTable": "section",
        "targetColumn": "section_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 290
          },
          "endPoint": {
            "x": 400,
            "y": 344
          },
          "controlPoints": [
            {
              "x": 332.4,
              "y": 290
            },
            {
              "x": 337.6,
              "y": 344
            }
          ],
          "pathData": "M 270 290.0 C 332.4 290.0, 337.6 344.0, 400 344.0",
          "labelPosition": {
            "x": 284,
            "y": 279,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "section_ibfk_1",
        "sourceTable": "section",
        "sourceColumn": "course_id",
        "sourceRowIndex": 1,
        "targetTable": "course",
        "targetColumn": "course_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 368
          },
          "endPoint": {
            "x": 750,
            "y": 154
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 368
            },
            {
              "x": 687.6,
              "y": 154
            }
          ],
          "pathData": "M 620 368.0 C 682.4 368.0, 687.6 154.0, 750 154.0",
          "labelPosition": {
            "x": 736,
            "y": 143,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "section_ibfk_2",
        "sourceTable": "section",
        "sourceColumn": "schedule_id",
        "sourceRowIndex": 2,
        "targetTable": "schedule",
        "targetColumn": "schedule_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 392
          },
          "endPoint": {
            "x": 750,
            "y": 354
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 392
            },
            {
              "x": 687.6,
              "y": 354
            }
          ],
          "pathData": "M 620 392.0 C 682.4 392.0, 687.6 354.0, 750 354.0",
          "labelPosition": {
            "x": 736,
            "y": 343,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "section_ibfk_3",
        "sourceTable": "section",
        "sourceColumn": "instructor_id",
        "sourceRowIndex": 3,
        "targetTable": "instructor",
        "targetColumn": "instructor_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 620,
            "y": 416
          },
          "endPoint": {
            "x": 750,
            "y": 554
          },
          "controlPoints": [
            {
              "x": 682.4,
              "y": 416
            },
            {
              "x": 687.6,
              "y": 554
            }
          ],
          "pathData": "M 620 416.0 C 682.4 416.0, 687.6 554.0, 750 554.0",
          "labelPosition": {
            "x": 634,
            "y": 405,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "instructor_ibfk_1",
        "sourceTable": "instructor",
        "sourceColumn": "dept_id",
        "sourceRowIndex": 4,
        "targetTable": "department",
        "targetColumn": "dept_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 970,
            "y": 650
          },
          "endPoint": {
            "x": 1100,
            "y": 554
          },
          "controlPoints": [
            {
              "x": 1032.4,
              "y": 650
            },
            {
              "x": 1037.6,
              "y": 554
            }
          ],
          "pathData": "M 970 650.0 C 1032.4 650.0, 1037.6 554.0, 1100 554.0",
          "labelPosition": {
            "x": 1086,
            "y": 543,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "course_prerequisite_ibfk_1",
        "sourceTable": "course_prerequisite",
        "sourceColumn": "course_id",
        "sourceRowIndex": 1,
        "targetTable": "course",
        "targetColumn": "course_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1100,
            "y": 178
          },
          "endPoint": {
            "x": 970,
            "y": 154
          },
          "controlPoints": [
            {
              "x": 1037.6,
              "y": 178
            },
            {
              "x": 1032.4,
              "y": 154
            }
          ],
          "pathData": "M 1100 178.0 C 1037.6 178.0, 1032.4 154.0, 970 154.0",
          "labelPosition": {
            "x": 984,
            "y": 143,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "course_prerequisite_ibfk_2",
        "sourceTable": "course_prerequisite",
        "sourceColumn": "required_course_id",
        "sourceRowIndex": 2,
        "targetTable": "course",
        "targetColumn": "course_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1100,
            "y": 202
          },
          "endPoint": {
            "x": 970,
            "y": 154
          },
          "controlPoints": [
            {
              "x": 1037.6,
              "y": 202
            },
            {
              "x": 1032.4,
              "y": 154
            }
          ],
          "pathData": "M 1100 202.0 C 1037.6 202.0, 1032.4 154.0, 970 154.0",
          "labelPosition": {
            "x": 984,
            "y": 143,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "student_advisor_ibfk_1",
        "sourceTable": "student_advisor",
        "sourceColumn": "student_id",
        "sourceRowIndex": 1,
        "targetTable": "student",
        "targetColumn": "student_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 498
          },
          "endPoint": {
            "x": 400,
            "y": 114
          },
          "controlPoints": [
            {
              "x": 332.4,
              "y": 498
            },
            {
              "x": 337.6,
              "y": 114
            }
          ],
          "pathData": "M 270 498.0 C 332.4 498.0, 337.6 114.0, 400 114.0",
          "labelPosition": {
            "x": 386,
            "y": 103,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "student_advisor_ibfk_2",
        "sourceTable": "student_advisor",
        "sourceColumn": "instructor_id",
        "sourceRowIndex": 2,
        "targetTable": "instructor",
        "targetColumn": "instructor_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 522
          },
          "endPoint": {
            "x": 750,
            "y": 554
          },
          "controlPoints": [
            {
              "x": 500.4,
              "y": 522
            },
            {
              "x": 519.6,
              "y": 554
            }
          ],
          "pathData": "M 270 522.0 C 500.4 522.0, 519.6 554.0, 750 554.0",
          "labelPosition": {
            "x": 284,
            "y": 511,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "academic_standing_ibfk_1",
        "sourceTable": "academic_standing",
        "sourceColumn": "student_id",
        "sourceRowIndex": 1,
        "targetTable": "student",
        "targetColumn": "student_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 270,
            "y": 678
          },
          "endPoint": {
            "x": 400,
            "y": 114
          },
          "controlPoints": [
            {
              "x": 332.4,
              "y": 678
            },
            {
              "x": 337.6,
              "y": 114
            }
          ],
          "pathData": "M 270 678.0 C 332.4 678.0, 337.6 114.0, 400 114.0",
          "labelPosition": {
            "x": 386,
            "y": 103,
            "anchor": "end"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe distinct first names and last names of students along with course names who are enrolled in a course with term '1', scheduled on day 'Monday' and taught by an instructor with type 'Permanent'.",
    "problem": "### Problem Statement\nThe distinct first names and last names of students along with course names who are enrolled in a course with term '1', scheduled on day 'Monday' and taught by an instructor with type 'Permanent'.\n\n### Requirements:\n- **Expected Output Columns:** `FIRST_NAME`, `LAST_NAME`, `NAME`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** MULTI-TABLE RELATIONAL JOINS\n- The 6 core tables (student, registration, section, course, schedule, instructor) follow exact Accenture schema conventions.\n- Term '1' corresponds to course.term = 1.\n- Instructor type 'Permanent' corresponds to instructor.type = 'Permanent'.",
    "notes": [
      "The 6 core tables (student, registration, section, course, schedule, instructor) follow exact Accenture schema conventions.",
      "Term '1' corresponds to course.term = 1.",
      "Instructor type 'Permanent' corresponds to instructor.type = 'Permanent'."
    ],
    "starterCode": "",
    "solution": "SELECT DISTINCT\n    s.first_name AS FIRST_NAME,\n    s.last_name AS LAST_NAME,\n    c.name AS NAME\nFROM student s\nJOIN registration r ON s.student_id = r.student_id\nJOIN section sec ON r.section_id = sec.section_id\nJOIN course c ON sec.course_id = c.course_id\nJOIN schedule sch ON sec.schedule_id = sch.schedule_id\nJOIN instructor i ON sec.instructor_id = i.instructor_id\nWHERE c.term = 1\n  AND sch.day = 'Monday'\n  AND i.type = 'Permanent';",
    "explanation": "Connects the 6 core university tables (student, registration, section, course, schedule, instructor). Applies predicate filters for term '1', schedule day 'Monday', and instructor type 'Permanent', returning DISTINCT student full names and course names.",
    "expectedColumns": [
      "FIRST_NAME",
      "LAST_NAME",
      "NAME"
    ],
    "orderSensitive": false,
    "examples": [
      {
        "title": "Example 1 (Metropolitan University Assessment Sample)",
        "input": {
          "student": [
            {
              "student_id": 1,
              "first_name": "Emma",
              "last_name": "Watson",
              "email": "emma@uni.edu",
              "phone": 1234567890
            },
            {
              "student_id": 2,
              "first_name": "Daniel",
              "last_name": "Radcliffe",
              "email": "dan@uni.edu",
              "phone": 1234567891
            },
            {
              "student_id": 3,
              "first_name": "Rupert",
              "last_name": "Grint",
              "email": "rupert@uni.edu",
              "phone": 1234567892
            }
          ],
          "course": [
            {
              "course_id": 101,
              "name": "Database Systems",
              "type": "Core",
              "term": 1
            },
            {
              "course_id": 102,
              "name": "Algorithms",
              "type": "Core",
              "term": 2
            },
            {
              "course_id": 103,
              "name": "Cloud Computing",
              "type": "Elective",
              "term": 1
            }
          ],
          "schedule": [
            {
              "schedule_id": 501,
              "day": "Monday",
              "starttime": "09:00",
              "endtime": "11:00"
            },
            {
              "schedule_id": 502,
              "day": "Tuesday",
              "starttime": "10:00",
              "endtime": "12:00"
            }
          ],
          "instructor": [
            {
              "instructor_id": 10,
              "first_name": "Minerva",
              "last_name": "McGonagall",
              "type": "Permanent",
              "dept_id": 1
            },
            {
              "instructor_id": 11,
              "first_name": "Severus",
              "last_name": "Snape",
              "type": "Adjunct",
              "dept_id": 1
            }
          ],
          "section": [
            {
              "section_id": 201,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall A"
            },
            {
              "section_id": 202,
              "course_id": 102,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall B"
            },
            {
              "section_id": 203,
              "course_id": 103,
              "schedule_id": 502,
              "instructor_id": 10,
              "room": "Hall C"
            },
            {
              "section_id": 204,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 11,
              "room": "Hall D"
            }
          ],
          "registration": [
            {
              "reg_id": 1001,
              "student_id": 1,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            },
            {
              "reg_id": 1002,
              "student_id": 2,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "B",
              "fullterm_grade": "B"
            },
            {
              "reg_id": 1003,
              "student_id": 3,
              "section_id": 202,
              "reg_fee": 500,
              "reg_date": "2025-01-06",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            }
          ]
        },
        "output": [
          {
            "FIRST_NAME": "Emma",
            "LAST_NAME": "Watson",
            "NAME": "Database Systems"
          },
          {
            "FIRST_NAME": "Daniel",
            "LAST_NAME": "Radcliffe",
            "NAME": "Database Systems"
          }
        ],
        "explanation": "Connects the 6 core university tables (student, registration, section, course, schedule, instructor). Applies predicate filters for term '1', schedule day 'Monday', and instructor type 'Permanent', returning DISTINCT student full names and course names."
      }
    ],
    "testCases": [
      {
        "id": "sql-032-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "student": [
            {
              "student_id": 1,
              "first_name": "Emma",
              "last_name": "Watson",
              "email": "emma@uni.edu",
              "phone": 1234567890
            },
            {
              "student_id": 2,
              "first_name": "Daniel",
              "last_name": "Radcliffe",
              "email": "dan@uni.edu",
              "phone": 1234567891
            },
            {
              "student_id": 3,
              "first_name": "Rupert",
              "last_name": "Grint",
              "email": "rupert@uni.edu",
              "phone": 1234567892
            }
          ],
          "course": [
            {
              "course_id": 101,
              "name": "Database Systems",
              "type": "Core",
              "term": 1
            },
            {
              "course_id": 102,
              "name": "Algorithms",
              "type": "Core",
              "term": 2
            },
            {
              "course_id": 103,
              "name": "Cloud Computing",
              "type": "Elective",
              "term": 1
            }
          ],
          "schedule": [
            {
              "schedule_id": 501,
              "day": "Monday",
              "starttime": "09:00",
              "endtime": "11:00"
            },
            {
              "schedule_id": 502,
              "day": "Tuesday",
              "starttime": "10:00",
              "endtime": "12:00"
            }
          ],
          "instructor": [
            {
              "instructor_id": 10,
              "first_name": "Minerva",
              "last_name": "McGonagall",
              "type": "Permanent",
              "dept_id": 1
            },
            {
              "instructor_id": 11,
              "first_name": "Severus",
              "last_name": "Snape",
              "type": "Adjunct",
              "dept_id": 1
            }
          ],
          "section": [
            {
              "section_id": 201,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall A"
            },
            {
              "section_id": 202,
              "course_id": 102,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall B"
            },
            {
              "section_id": 203,
              "course_id": 103,
              "schedule_id": 502,
              "instructor_id": 10,
              "room": "Hall C"
            },
            {
              "section_id": 204,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 11,
              "room": "Hall D"
            }
          ],
          "registration": [
            {
              "reg_id": 1001,
              "student_id": 1,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            },
            {
              "reg_id": 1002,
              "student_id": 2,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "B",
              "fullterm_grade": "B"
            },
            {
              "reg_id": 1003,
              "student_id": 3,
              "section_id": 202,
              "reg_fee": 500,
              "reg_date": "2025-01-06",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Emma",
            "LAST_NAME": "Watson",
            "NAME": "Database Systems"
          },
          {
            "FIRST_NAME": "Daniel",
            "LAST_NAME": "Radcliffe",
            "NAME": "Database Systems"
          }
        ]
      },
      {
        "id": "sql-032-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "student": [
            {
              "student_id": 10,
              "first_name": "Luna",
              "last_name": "Lovegood",
              "email": "luna@uni.edu",
              "phone": 1234567899
            }
          ],
          "course": [
            {
              "course_id": 101,
              "name": "Database Systems",
              "type": "Core",
              "term": 2
            }
          ],
          "schedule": [
            {
              "schedule_id": 501,
              "day": "Monday",
              "starttime": "09:00",
              "endtime": "11:00"
            }
          ],
          "instructor": [
            {
              "instructor_id": 11,
              "first_name": "Severus",
              "last_name": "Snape",
              "type": "Permanent",
              "dept_id": 1
            }
          ],
          "section": [
            {
              "section_id": 201,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 11,
              "room": "Hall A"
            }
          ],
          "registration": [
            {
              "reg_id": 2001,
              "student_id": 10,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-032-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "student": [
            {
              "student_id": 1,
              "first_name": "Emma",
              "last_name": "Watson",
              "email": "emma@uni.edu",
              "phone": 1234567890
            },
            {
              "student_id": 4,
              "first_name": "Harry",
              "last_name": "Potter",
              "email": "harry@uni.edu",
              "phone": 1234567894
            }
          ],
          "course": [
            {
              "course_id": 101,
              "name": "Database Systems",
              "type": "Core",
              "term": 1
            }
          ],
          "schedule": [
            {
              "schedule_id": 501,
              "day": "Monday",
              "starttime": "09:00",
              "endtime": "11:00"
            }
          ],
          "instructor": [
            {
              "instructor_id": 10,
              "first_name": "Minerva",
              "last_name": "McGonagall",
              "type": "Permanent",
              "dept_id": 1
            }
          ],
          "section": [
            {
              "section_id": 201,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall A"
            },
            {
              "section_id": 205,
              "course_id": 101,
              "schedule_id": 501,
              "instructor_id": 10,
              "room": "Hall E"
            }
          ],
          "registration": [
            {
              "reg_id": 3001,
              "student_id": 1,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            },
            {
              "reg_id": 3002,
              "student_id": 1,
              "section_id": 205,
              "reg_fee": 500,
              "reg_date": "2025-01-06",
              "midterm_grade": "A",
              "fullterm_grade": "A"
            },
            {
              "reg_id": 3003,
              "student_id": 4,
              "section_id": 201,
              "reg_fee": 500,
              "reg_date": "2025-01-05",
              "midterm_grade": "O",
              "fullterm_grade": "O"
            }
          ]
        },
        "expected": [
          {
            "FIRST_NAME": "Emma",
            "LAST_NAME": "Watson",
            "NAME": "Database Systems"
          },
          {
            "FIRST_NAME": "Harry",
            "LAST_NAME": "Potter",
            "NAME": "Database Systems"
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "WHERE",
      "DISTINCT"
    ],
    "statement": "The distinct first names and last names of students along with course names who are enrolled in a course with term '1', scheduled on day 'Monday' and taught by an instructor with type 'Permanent'.",
    "diagramTables": [
      {
        "name": "registration",
        "label": "Registration",
        "x": 50,
        "y": 140,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "reg_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "reg_fee",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "reg_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "student_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "student.student_id"
          },
          {
            "name": "section_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "section.section_id"
          },
          {
            "name": "midterm_grade",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "fullterm_grade",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "student",
        "label": "Student",
        "x": 400,
        "y": 60,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "student_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(100)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "phone",
            "type": "DECIMAL(20,0)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "section",
        "label": "Section",
        "x": 400,
        "y": 290,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "section_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "course.course_id"
          },
          {
            "name": "schedule_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "schedule.schedule_id"
          },
          {
            "name": "instructor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "instructor.instructor_id"
          },
          {
            "name": "room",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "course",
        "label": "Course",
        "x": 750,
        "y": 100,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "type",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "term",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "schedule",
        "label": "Schedule",
        "x": 750,
        "y": 300,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "schedule_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "day",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "starttime",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "endtime",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "instructor",
        "label": "Instructor",
        "x": 750,
        "y": 500,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "instructor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "type",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "dept_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "department.dept_id"
          }
        ]
      },
      {
        "name": "course_prerequisite",
        "label": "Course Prerequisite",
        "x": 1100,
        "y": 100,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "prereq_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "course.course_id"
          },
          {
            "name": "required_course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "course.course_id"
          }
        ]
      },
      {
        "name": "department",
        "label": "Department",
        "x": 1100,
        "y": 500,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "dept_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "dept_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "building",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "student_advisor",
        "label": "Student Advisor",
        "x": 50,
        "y": 420,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "advisor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "student_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "student.student_id"
          },
          {
            "name": "instructor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "instructor.instructor_id"
          },
          {
            "name": "assigned_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "academic_standing",
        "label": "Academic Standing",
        "x": 50,
        "y": 600,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "standing_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "student_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "student.student_id"
          },
          {
            "name": "standing_name",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "min_gpa",
            "type": "DECIMAL(3,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "registration",
        "target": "student",
        "column": "student_id",
        "targetColumn": "student_id",
        "constraintName": "registration_ibfk_1",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            270,
            220
          ],
          [
            298,
            220
          ],
          [
            298,
            114.5
          ],
          [
            400,
            114.5
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "registration",
        "target": "section",
        "column": "section_id",
        "targetColumn": "section_id",
        "constraintName": "registration_ibfk_2",
        "sourceIndex": 4,
        "targetIndex": 0,
        "points": [
          [
            270,
            274
          ],
          [
            298,
            274
          ],
          [
            298,
            361.6
          ],
          [
            400,
            361.6
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "section",
        "target": "course",
        "column": "course_id",
        "targetColumn": "course_id",
        "constraintName": "section_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            620,
            338.8
          ],
          [
            648,
            338.8
          ],
          [
            648,
            193.5
          ],
          [
            750,
            193.5
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "section",
        "target": "schedule",
        "column": "schedule_id",
        "targetColumn": "schedule_id",
        "constraintName": "section_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            620,
            384.4
          ],
          [
            648,
            384.4
          ],
          [
            648,
            371
          ],
          [
            750,
            371
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "section",
        "target": "instructor",
        "column": "instructor_id",
        "targetColumn": "instructor_id",
        "constraintName": "section_ibfk_3",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            620,
            407.2
          ],
          [
            648,
            407.2
          ],
          [
            648,
            554.5
          ],
          [
            750,
            554.5
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "instructor",
        "target": "department",
        "column": "dept_id",
        "targetColumn": "dept_id",
        "constraintName": "instructor_ibfk_1",
        "sourceIndex": 4,
        "targetIndex": 0,
        "points": [
          [
            970,
            611.5
          ],
          [
            998,
            611.5
          ],
          [
            998,
            559
          ],
          [
            1100,
            559
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "course_prerequisite",
        "target": "course",
        "column": "course_id",
        "targetColumn": "course_id",
        "constraintName": "course_prerequisite_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1100,
            148
          ],
          [
            1072,
            148
          ],
          [
            1072,
            148.5
          ],
          [
            970,
            148.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "course_prerequisite",
        "target": "course",
        "column": "required_course_id",
        "targetColumn": "course_id",
        "constraintName": "course_prerequisite_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            1100,
            170
          ],
          [
            1072,
            170
          ],
          [
            1072,
            171
          ],
          [
            970,
            171
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "student_advisor",
        "target": "student",
        "column": "student_id",
        "targetColumn": "student_id",
        "constraintName": "student_advisor_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            270,
            476
          ],
          [
            372,
            476
          ],
          [
            372,
            143
          ],
          [
            400,
            143
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "student_advisor",
        "target": "instructor",
        "column": "instructor_id",
        "targetColumn": "instructor_id",
        "constraintName": "student_advisor_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            270,
            506
          ],
          [
            298,
            506
          ],
          [
            298,
            583
          ],
          [
            750,
            583
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "academic_standing",
        "target": "student",
        "column": "student_id",
        "targetColumn": "student_id",
        "constraintName": "academic_standing_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            270,
            671
          ],
          [
            286,
            671
          ],
          [
            286,
            171.5
          ],
          [
            400,
            171.5
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      }
    ]
  },
  {
    "id": "sql-033",
    "numericId": 33,
    "title": "Customer transaction totals",
    "domain": "Meridian Banking",
    "difficulty": "Medium",
    "duration": 18,
    "category": "AGGREGATION & HAVING FILTERING",
    "tableSchema": [
      {
        "name": "branches",
        "columns": [
          {
            "name": "branch_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "branch_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "customers",
        "columns": [
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "branch_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "joined_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "segment",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "account_types",
        "columns": [
          {
            "name": "account_type_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "type_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "interest_rate",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "accounts",
        "columns": [
          {
            "name": "account_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "account_type_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "account_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "opened_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "balance",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "merchants",
        "columns": [
          {
            "name": "merchant_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "merchant_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "category",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "transactions",
        "columns": [
          {
            "name": "transaction_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "account_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "merchant_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "transaction_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "transaction_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "cards",
        "columns": [
          {
            "name": "card_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "account_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "card_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "expiry_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "loans",
        "columns": [
          {
            "name": "loan_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "principal",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "interest_rate",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "loan_payments",
        "columns": [
          {
            "name": "loan_payment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "loan_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "beneficiaries",
        "columns": [
          {
            "name": "beneficiary_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "account_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "beneficiary_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "relationship",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "share_pct",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 834
    },
    "connectionLines": [
      {
        "constraintName": "customers_ibfk_1",
        "sourceTable": "customers",
        "sourceColumn": "branch_id",
        "sourceRowIndex": 3,
        "targetTable": "branches",
        "targetColumn": "branch_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 406
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 406.0 C 323 406.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "accounts_ibfk_1",
        "sourceTable": "accounts",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 358
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 358
            },
            {
              "x": 330.4,
              "y": 334
            }
          ],
          "pathData": "M 398 358.0 C 335.6 358.0, 330.4 334.0, 268 334.0",
          "labelPosition": {
            "x": 282,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "accounts_ibfk_2",
        "sourceTable": "accounts",
        "sourceColumn": "account_type_id",
        "sourceRowIndex": 2,
        "targetTable": "account_types",
        "targetColumn": "account_type_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 382
          },
          "endPoint": {
            "x": 748,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 382
            },
            {
              "x": 685.6,
              "y": 102
            }
          ],
          "pathData": "M 618 382.0 C 680.4 382.0, 685.6 102.0, 748 102.0",
          "labelPosition": {
            "x": 734,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "transactions_ibfk_1",
        "sourceTable": "transactions",
        "sourceColumn": "account_id",
        "sourceRowIndex": 1,
        "targetTable": "accounts",
        "targetColumn": "account_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 358
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 358
            },
            {
              "x": 680.4,
              "y": 334
            }
          ],
          "pathData": "M 748 358.0 C 685.6 358.0, 680.4 334.0, 618 334.0",
          "labelPosition": {
            "x": 632,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "transactions_ibfk_2",
        "sourceTable": "transactions",
        "sourceColumn": "merchant_id",
        "sourceRowIndex": 2,
        "targetTable": "merchants",
        "targetColumn": "merchant_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 382
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 382
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 382.0 C 1030.4 382.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "cards_ibfk_1",
        "sourceTable": "cards",
        "sourceColumn": "account_id",
        "sourceRowIndex": 1,
        "targetTable": "accounts",
        "targetColumn": "account_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 662
            },
            {
              "x": 673,
              "y": 334
            }
          ],
          "pathData": "M 618 662.0 C 673 662.0, 673 334.0, 618 334.0",
          "labelPosition": {
            "x": 679,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "loans_ibfk_1",
        "sourceTable": "loans",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 662
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 662
            },
            {
              "x": 323,
              "y": 334
            }
          ],
          "pathData": "M 268 662.0 C 323 662.0, 323 334.0, 268 334.0",
          "labelPosition": {
            "x": 329,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "loan_payments_ibfk_1",
        "sourceTable": "loan_payments",
        "sourceColumn": "loan_id",
        "sourceRowIndex": 1,
        "targetTable": "loans",
        "targetColumn": "loan_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 358
          },
          "endPoint": {
            "x": 268,
            "y": 638
          },
          "controlPoints": [
            {
              "x": 699.6,
              "y": 358
            },
            {
              "x": 666.4,
              "y": 638
            }
          ],
          "pathData": "M 1098 358.0 C 699.6 358.0, 666.4 638.0, 268 638.0",
          "labelPosition": {
            "x": 1084,
            "y": 347,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "beneficiaries_ibfk_1",
        "sourceTable": "beneficiaries",
        "sourceColumn": "account_id",
        "sourceRowIndex": 1,
        "targetTable": "accounts",
        "targetColumn": "account_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 662
            },
            {
              "x": 680.4,
              "y": 334
            }
          ],
          "pathData": "M 748 662.0 C 685.6 662.0, 680.4 334.0, 618 334.0",
          "labelPosition": {
            "x": 632,
            "y": 323,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe customer IDs, customer names, transaction count, and total credit amount for completed 'Credit' transactions dated during '2025' across each customer's accounts. Keep only customers with at least 5 such transactions and total amount greater than 50000. Sort by total amount descending, then customer_id ascending.",
    "problem": "### Problem Statement\nThe customer IDs, customer names, transaction count, and total credit amount for completed 'Credit' transactions dated during '2025' across each customer's accounts. Keep only customers with at least 5 such transactions and total amount greater than 50000. Sort by total amount descending, then customer_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `CUSTOMER_ID`, `CUSTOMER_NAME`, `TRANSACTION_COUNT`, `TOTAL_AMOUNT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** AGGREGATION & HAVING FILTERING\n- Transaction amounts are positive USD values; transaction_type determines Credit or Debit.\n- A transaction belongs to one account, and an account belongs to one customer.\n- Count transaction IDs, not account records.",
    "notes": [
      "Transaction amounts are positive USD values; transaction_type determines Credit or Debit.",
      "A transaction belongs to one account, and an account belongs to one customer.",
      "Count transaction IDs, not account records."
    ],
    "starterCode": "",
    "solution": "SELECT\n    c.customer_id AS CUSTOMER_ID,\n    c.customer_name AS CUSTOMER_NAME,\n    COUNT(t.transaction_id) AS TRANSACTION_COUNT,\n    SUM(t.amount) AS TOTAL_AMOUNT\nFROM customers c\nJOIN accounts a ON c.customer_id = a.customer_id\nJOIN transactions t ON a.account_id = t.account_id\nWHERE t.transaction_type = 'Credit'\n  AND t.status = 'Completed'\n  AND t.transaction_date >= '2025-01-01'\n  AND t.transaction_date <= '2025-12-31'\nGROUP BY c.customer_id, c.customer_name\nHAVING COUNT(t.transaction_id) >= 5\n   AND SUM(t.amount) > 50000\nORDER BY TOTAL_AMOUNT DESC, CUSTOMER_ID ASC;",
    "explanation": "Traverses customers -> accounts -> transactions. Filters for completed 'Credit' transactions during 2025. Aggregates by customer, applying HAVING thresholds (at least 5 transactions and total amount > 50000), sorted by total amount descending then customer ID ascending.",
    "expectedColumns": [
      "CUSTOMER_ID",
      "CUSTOMER_NAME",
      "TRANSACTION_COUNT",
      "TOTAL_AMOUNT"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Meridian Banking Assessment Sample)",
        "input": {
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Acme Corp",
              "email": "acme@example.com",
              "branch_id": 1,
              "joined_date": "2024-01-01",
              "segment": "Enterprise"
            },
            {
              "customer_id": 2,
              "customer_name": "Beta LLC",
              "email": "beta@example.com",
              "branch_id": 1,
              "joined_date": "2024-02-01",
              "segment": "SMB"
            },
            {
              "customer_id": 3,
              "customer_name": "Gamma Inc",
              "email": "gamma@example.com",
              "branch_id": 1,
              "joined_date": "2024-03-01",
              "segment": "Enterprise"
            }
          ],
          "accounts": [
            {
              "account_id": 101,
              "customer_id": 1,
              "account_type_id": 1,
              "account_number": "ACC101",
              "opened_date": "2024-01-01",
              "status": "Active",
              "balance": 100000
            },
            {
              "account_id": 102,
              "customer_id": 2,
              "account_type_id": 1,
              "account_number": "ACC102",
              "opened_date": "2024-02-01",
              "status": "Active",
              "balance": 50000
            },
            {
              "account_id": 103,
              "customer_id": 3,
              "account_number": "ACC103",
              "opened_date": "2024-03-01",
              "status": "Active",
              "balance": 20000
            }
          ],
          "transactions": [
            {
              "transaction_id": 1,
              "account_id": 101,
              "transaction_date": "2025-03-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 2,
              "account_id": 101,
              "transaction_date": "2025-04-01",
              "amount": 10000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 3,
              "account_id": 101,
              "transaction_date": "2025-05-01",
              "amount": 12000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 4,
              "account_id": 101,
              "transaction_date": "2025-06-01",
              "amount": 13000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 5,
              "account_id": 101,
              "transaction_date": "2025-07-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 6,
              "account_id": 102,
              "transaction_date": "2025-01-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 7,
              "account_id": 102,
              "transaction_date": "2025-02-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 8,
              "account_id": 102,
              "transaction_date": "2025-03-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 9,
              "account_id": 102,
              "transaction_date": "2025-04-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 10,
              "account_id": 102,
              "transaction_date": "2025-05-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 11,
              "account_id": 103,
              "transaction_date": "2025-01-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 12,
              "account_id": 103,
              "transaction_date": "2025-02-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 13,
              "account_id": 103,
              "transaction_date": "2025-03-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 14,
              "account_id": 103,
              "transaction_date": "2025-04-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            }
          ]
        },
        "output": [
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Acme Corp",
            "TRANSACTION_COUNT": 5,
            "TOTAL_AMOUNT": 65000
          }
        ],
        "explanation": "Traverses customers -> accounts -> transactions. Filters for completed 'Credit' transactions during 2025. Aggregates by customer, applying HAVING thresholds (at least 5 transactions and total amount > 50000), sorted by total amount descending then customer ID ascending."
      }
    ],
    "testCases": [
      {
        "id": "sql-033-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Acme Corp",
              "email": "acme@example.com",
              "branch_id": 1,
              "joined_date": "2024-01-01",
              "segment": "Enterprise"
            },
            {
              "customer_id": 2,
              "customer_name": "Beta LLC",
              "email": "beta@example.com",
              "branch_id": 1,
              "joined_date": "2024-02-01",
              "segment": "SMB"
            },
            {
              "customer_id": 3,
              "customer_name": "Gamma Inc",
              "email": "gamma@example.com",
              "branch_id": 1,
              "joined_date": "2024-03-01",
              "segment": "Enterprise"
            }
          ],
          "accounts": [
            {
              "account_id": 101,
              "customer_id": 1,
              "account_type_id": 1,
              "account_number": "ACC101",
              "opened_date": "2024-01-01",
              "status": "Active",
              "balance": 100000
            },
            {
              "account_id": 102,
              "customer_id": 2,
              "account_type_id": 1,
              "account_number": "ACC102",
              "opened_date": "2024-02-01",
              "status": "Active",
              "balance": 50000
            },
            {
              "account_id": 103,
              "customer_id": 3,
              "account_number": "ACC103",
              "opened_date": "2024-03-01",
              "status": "Active",
              "balance": 20000
            }
          ],
          "transactions": [
            {
              "transaction_id": 1,
              "account_id": 101,
              "transaction_date": "2025-03-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 2,
              "account_id": 101,
              "transaction_date": "2025-04-01",
              "amount": 10000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 3,
              "account_id": 101,
              "transaction_date": "2025-05-01",
              "amount": 12000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 4,
              "account_id": 101,
              "transaction_date": "2025-06-01",
              "amount": 13000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 5,
              "account_id": 101,
              "transaction_date": "2025-07-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 6,
              "account_id": 102,
              "transaction_date": "2025-01-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 7,
              "account_id": 102,
              "transaction_date": "2025-02-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 8,
              "account_id": 102,
              "transaction_date": "2025-03-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 9,
              "account_id": 102,
              "transaction_date": "2025-04-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 10,
              "account_id": 102,
              "transaction_date": "2025-05-01",
              "amount": 9000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 11,
              "account_id": 103,
              "transaction_date": "2025-01-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 12,
              "account_id": 103,
              "transaction_date": "2025-02-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 13,
              "account_id": 103,
              "transaction_date": "2025-03-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 14,
              "account_id": 103,
              "transaction_date": "2025-04-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            }
          ]
        },
        "expected": [
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Acme Corp",
            "TRANSACTION_COUNT": 5,
            "TOTAL_AMOUNT": 65000
          }
        ]
      },
      {
        "id": "sql-033-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Solo Co",
              "email": "solo@co.com",
              "branch_id": 1,
              "joined_date": "2024-01-01",
              "segment": "SMB"
            }
          ],
          "accounts": [
            {
              "account_id": 101,
              "customer_id": 1,
              "account_type_id": 1,
              "account_number": "ACC101",
              "opened_date": "2024-01-01",
              "status": "Active",
              "balance": 1000
            }
          ],
          "transactions": [
            {
              "transaction_id": 1,
              "account_id": 101,
              "transaction_date": "2024-12-31",
              "amount": 60000,
              "transaction_type": "Credit",
              "status": "Completed"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-033-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Acme Corp",
              "email": "acme@example.com",
              "branch_id": 1,
              "joined_date": "2024-01-01",
              "segment": "Enterprise"
            },
            {
              "customer_id": 4,
              "customer_name": "Zeta Global",
              "email": "zeta@example.com",
              "branch_id": 1,
              "joined_date": "2024-01-01",
              "segment": "Enterprise"
            }
          ],
          "accounts": [
            {
              "account_id": 101,
              "customer_id": 1,
              "account_type_id": 1,
              "account_number": "ACC101",
              "opened_date": "2024-01-01",
              "status": "Active",
              "balance": 100000
            },
            {
              "account_id": 104,
              "customer_id": 4,
              "account_type_id": 1,
              "account_number": "ACC104",
              "opened_date": "2024-01-01",
              "status": "Active",
              "balance": 120000
            }
          ],
          "transactions": [
            {
              "transaction_id": 1,
              "account_id": 101,
              "transaction_date": "2025-01-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 2,
              "account_id": 101,
              "transaction_date": "2025-02-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 3,
              "account_id": 101,
              "transaction_date": "2025-03-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 4,
              "account_id": 101,
              "transaction_date": "2025-04-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 5,
              "account_id": 101,
              "transaction_date": "2025-05-01",
              "amount": 15000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 21,
              "account_id": 104,
              "transaction_date": "2025-01-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 22,
              "account_id": 104,
              "transaction_date": "2025-02-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 23,
              "account_id": 104,
              "transaction_date": "2025-03-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 24,
              "account_id": 104,
              "transaction_date": "2025-04-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            },
            {
              "transaction_id": 25,
              "account_id": 104,
              "transaction_date": "2025-05-01",
              "amount": 20000,
              "transaction_type": "Credit",
              "status": "Completed"
            }
          ]
        },
        "expected": [
          {
            "CUSTOMER_ID": 4,
            "CUSTOMER_NAME": "Zeta Global",
            "TRANSACTION_COUNT": 5,
            "TOTAL_AMOUNT": 100000
          },
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Acme Corp",
            "TRANSACTION_COUNT": 5,
            "TOTAL_AMOUNT": 75000
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "GROUP BY",
      "HAVING",
      "COUNT DISTINCT",
      "SUM",
      "ORDER BY"
    ],
    "statement": "The customer IDs, customer names, transaction count, and total credit amount for completed 'Credit' transactions dated during '2025' across each customer's accounts. Keep only customers with at least 5 such transactions and total amount greater than 50000. Sort by total amount descending, then customer_id ascending.",
    "diagramTables": [
      {
        "name": "branches",
        "label": "Branches",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "branch_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "branch_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "customers",
        "label": "Customers",
        "x": 48,
        "y": 280,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "branch_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "branches.branch_id"
          },
          {
            "name": "joined_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "segment",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "account_types",
        "label": "Account Types",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "account_type_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "type_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "interest_rate",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "accounts",
        "label": "Accounts",
        "x": 398,
        "y": 280,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "account_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "account_type_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "account_types.account_type_id"
          },
          {
            "name": "account_number",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "opened_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "balance",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "merchants",
        "label": "Merchants",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "merchant_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "merchant_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "category",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "transactions",
        "label": "Transactions",
        "x": 748,
        "y": 280,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "transaction_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "account_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "accounts.account_id"
          },
          {
            "name": "merchant_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "merchants.merchant_id"
          },
          {
            "name": "transaction_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "transaction_type",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "cards",
        "label": "Cards",
        "x": 398,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "card_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "account_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "accounts.account_id"
          },
          {
            "name": "card_number",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "expiry_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "loans",
        "label": "Loans",
        "x": 48,
        "y": 584,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "loan_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "principal",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "interest_rate",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "start_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "loan_payments",
        "label": "Loan Payments",
        "x": 1098,
        "y": 280,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "loan_payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "loan_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "loans.loan_id"
          },
          {
            "name": "payment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "beneficiaries",
        "label": "Beneficiaries",
        "x": 748,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "beneficiary_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "account_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "accounts.account_id"
          },
          {
            "name": "beneficiary_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "relationship",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "share_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "customers",
        "target": "branches",
        "column": "branch_id",
        "targetColumn": "branch_id",
        "constraintName": "customers_ibfk_1",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            117,
            280
          ],
          [
            117,
            218
          ],
          [
            158,
            218
          ],
          [
            158,
            190
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "accounts",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "accounts_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            398,
            360
          ],
          [
            370,
            360
          ],
          [
            370,
            375
          ],
          [
            268,
            375
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "accounts",
        "target": "account_types",
        "column": "account_type_id",
        "targetColumn": "account_type_id",
        "constraintName": "accounts_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            618,
            333
          ],
          [
            646,
            333
          ],
          [
            646,
            107
          ],
          [
            748,
            107
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "transactions",
        "target": "accounts",
        "column": "account_id",
        "targetColumn": "account_id",
        "constraintName": "transactions_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            414
          ],
          [
            720,
            414
          ],
          [
            720,
            387
          ],
          [
            618,
            387
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "transactions",
        "target": "merchants",
        "column": "merchant_id",
        "targetColumn": "merchant_id",
        "constraintName": "transactions_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            360
          ],
          [
            996,
            360
          ],
          [
            996,
            119
          ],
          [
            1098,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "cards",
        "target": "accounts",
        "column": "account_id",
        "targetColumn": "account_id",
        "constraintName": "cards_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            584
          ],
          [
            508,
            522
          ],
          [
            480.67,
            522
          ],
          [
            480.67,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "loans",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "loans_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            130.67,
            584
          ],
          [
            130.67,
            498
          ],
          [
            158,
            498
          ],
          [
            158,
            470
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "loan_payments",
        "target": "loans",
        "column": "loan_id",
        "targetColumn": "loan_id",
        "constraintName": "loan_payments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            363
          ],
          [
            1070,
            363
          ],
          [
            1070,
            556
          ],
          [
            185.33,
            556
          ],
          [
            185.33,
            584
          ]
        ],
        "sourceSide": "left",
        "targetSide": "top"
      },
      {
        "source": "beneficiaries",
        "target": "accounts",
        "column": "account_id",
        "targetColumn": "account_id",
        "constraintName": "beneficiaries_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            667
          ],
          [
            720,
            667
          ],
          [
            720,
            441
          ],
          [
            618,
            441
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      }
    ]
  },
  {
    "id": "sql-034",
    "numericId": 34,
    "title": "Project staffing workload",
    "domain": "Atlas Consulting",
    "difficulty": "Medium",
    "duration": 20,
    "category": "GROUP BY & DISTINCT AGGREGATION",
    "tableSchema": [
      {
        "name": "offices",
        "columns": [
          {
            "name": "office_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "office_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "departments",
        "columns": [
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "department_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "office_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "annual_budget",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "employees",
        "columns": [
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "hire_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "annual_salary",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "clients",
        "columns": [
          {
            "name": "client_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "client_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "industry",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "projects",
        "columns": [
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "project_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "client_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "budget",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "assignments",
        "columns": [
          {
            "name": "assignment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "assigned_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "weekly_hours",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "assignment_role",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "timesheets",
        "columns": [
          {
            "name": "timesheet_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "assignment_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "work_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "hours_worked",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "approval_status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "skills",
        "columns": [
          {
            "name": "skill_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "skill_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "skill_group",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "employee_skills",
        "columns": [
          {
            "name": "employee_skill_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "skill_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "proficiency_level",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "milestones",
        "columns": [
          {
            "name": "milestone_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "milestone_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "due_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "expenses",
        "columns": [
          {
            "name": "expense_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "expense_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "expense_category",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 858
    },
    "connectionLines": [
      {
        "constraintName": "departments_ibfk_1",
        "sourceTable": "departments",
        "sourceColumn": "office_id",
        "sourceRowIndex": 2,
        "targetTable": "offices",
        "targetColumn": "office_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 382
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 382
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 382.0 C 323 382.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employees_ibfk_1",
        "sourceTable": "employees",
        "sourceColumn": "department_id",
        "sourceRowIndex": 3,
        "targetTable": "departments",
        "targetColumn": "department_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 406
            },
            {
              "x": 330.4,
              "y": 334
            }
          ],
          "pathData": "M 398 406.0 C 335.6 406.0, 330.4 334.0, 268 334.0",
          "labelPosition": {
            "x": 282,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "projects_ibfk_1",
        "sourceTable": "projects",
        "sourceColumn": "client_id",
        "sourceRowIndex": 2,
        "targetTable": "clients",
        "targetColumn": "client_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 382
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 382
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 382.0 C 1030.4 382.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "projects_ibfk_2",
        "sourceTable": "projects",
        "sourceColumn": "department_id",
        "sourceRowIndex": 3,
        "targetTable": "departments",
        "targetColumn": "department_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 517.6,
              "y": 406
            },
            {
              "x": 498.4,
              "y": 334
            }
          ],
          "pathData": "M 748 406.0 C 517.6 406.0, 498.4 334.0, 268 334.0",
          "labelPosition": {
            "x": 282,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "assignments_ibfk_1",
        "sourceTable": "assignments",
        "sourceColumn": "project_id",
        "sourceRowIndex": 1,
        "targetTable": "projects",
        "targetColumn": "project_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 686
          },
          "endPoint": {
            "x": 748,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 686
            },
            {
              "x": 685.6,
              "y": 334
            }
          ],
          "pathData": "M 618 686.0 C 680.4 686.0, 685.6 334.0, 748 334.0",
          "labelPosition": {
            "x": 734,
            "y": 323,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "assignments_ibfk_2",
        "sourceTable": "assignments",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 2,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 710
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 710
            },
            {
              "x": 673,
              "y": 334
            }
          ],
          "pathData": "M 618 710.0 C 673 710.0, 673 334.0, 618 334.0",
          "labelPosition": {
            "x": 679,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "timesheets_ibfk_1",
        "sourceTable": "timesheets",
        "sourceColumn": "assignment_id",
        "sourceRowIndex": 1,
        "targetTable": "assignments",
        "targetColumn": "assignment_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 686
          },
          "endPoint": {
            "x": 618,
            "y": 662
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 686
            },
            {
              "x": 680.4,
              "y": 662
            }
          ],
          "pathData": "M 748 686.0 C 685.6 686.0, 680.4 662.0, 618 662.0",
          "labelPosition": {
            "x": 632,
            "y": 651,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employee_skills_ibfk_1",
        "sourceTable": "employee_skills",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 126
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 126
            },
            {
              "x": 673,
              "y": 334
            }
          ],
          "pathData": "M 618 126.0 C 673 126.0, 673 334.0, 618 334.0",
          "labelPosition": {
            "x": 679,
            "y": 115,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employee_skills_ibfk_2",
        "sourceTable": "employee_skills",
        "sourceColumn": "skill_id",
        "sourceRowIndex": 2,
        "targetTable": "skills",
        "targetColumn": "skill_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 150
          },
          "endPoint": {
            "x": 748,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 150
            },
            {
              "x": 685.6,
              "y": 102
            }
          ],
          "pathData": "M 618 150.0 C 680.4 150.0, 685.6 102.0, 748 102.0",
          "labelPosition": {
            "x": 734,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "milestones_ibfk_1",
        "sourceTable": "milestones",
        "sourceColumn": "project_id",
        "sourceRowIndex": 1,
        "targetTable": "projects",
        "targetColumn": "project_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 358
          },
          "endPoint": {
            "x": 968,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 1035.6,
              "y": 358
            },
            {
              "x": 1030.4,
              "y": 334
            }
          ],
          "pathData": "M 1098 358.0 C 1035.6 358.0, 1030.4 334.0, 968 334.0",
          "labelPosition": {
            "x": 982,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "expenses_ibfk_1",
        "sourceTable": "expenses",
        "sourceColumn": "project_id",
        "sourceRowIndex": 1,
        "targetTable": "projects",
        "targetColumn": "project_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 686
          },
          "endPoint": {
            "x": 748,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 498.4,
              "y": 686
            },
            {
              "x": 517.6,
              "y": 334
            }
          ],
          "pathData": "M 268 686.0 C 498.4 686.0, 517.6 334.0, 748 334.0",
          "labelPosition": {
            "x": 734,
            "y": 323,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "expenses_ibfk_2",
        "sourceTable": "expenses",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 2,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 710
          },
          "endPoint": {
            "x": 398,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 710
            },
            {
              "x": 335.6,
              "y": 334
            }
          ],
          "pathData": "M 268 710.0 C 330.4 710.0, 335.6 334.0, 398 334.0",
          "labelPosition": {
            "x": 384,
            "y": 323,
            "anchor": "end"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe employee IDs, first names, last names, department names, active project counts, and total weekly hours for active employees assigned to at least 3 distinct 'Active' projects. Sort by active project count descending, total weekly hours descending, then employee_id ascending.",
    "problem": "### Problem Statement\nThe employee IDs, first names, last names, department names, active project counts, and total weekly hours for active employees assigned to at least 3 distinct 'Active' projects. Sort by active project count descending, total weekly hours descending, then employee_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `EMPLOYEE_ID`, `FIRST_NAME`, `LAST_NAME`, `DEPARTMENT_NAME`, `ACTIVE_PROJECT_COUNT`, `TOTAL_WEEKLY_HOURS`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** GROUP BY & DISTINCT AGGREGATION\n- An employee has at most one assignment per project; (project_id, employee_id) is unique in assignments.\n- Weekly hours are allocated hours, not hours recorded in timesheets.\n- Active employees have status = 'Active'; Active projects have status = 'Active'.",
    "notes": [
      "An employee has at most one assignment per project; (project_id, employee_id) is unique in assignments.",
      "Weekly hours are allocated hours, not hours recorded in timesheets.",
      "Active employees have status = 'Active'; Active projects have status = 'Active'."
    ],
    "starterCode": "",
    "solution": "SELECT\n    e.employee_id AS EMPLOYEE_ID,\n    e.first_name AS FIRST_NAME,\n    e.last_name AS LAST_NAME,\n    d.department_name AS DEPARTMENT_NAME,\n    COUNT(DISTINCT p.project_id) AS ACTIVE_PROJECT_COUNT,\n    SUM(a.weekly_hours) AS TOTAL_WEEKLY_HOURS\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id\nJOIN assignments a ON e.employee_id = a.employee_id\nJOIN projects p ON a.project_id = p.project_id\nWHERE e.status = 'Active'\n  AND p.status = 'Active'\nGROUP BY e.employee_id, e.first_name, e.last_name, d.department_name\nHAVING COUNT(DISTINCT p.project_id) >= 3\nORDER BY ACTIVE_PROJECT_COUNT DESC, TOTAL_WEEKLY_HOURS DESC, EMPLOYEE_ID ASC;",
    "explanation": "Joins employees to departments, assignments, and projects. Filters for active employees and active projects, groups by employee, and retains those assigned to at least 3 distinct active projects with deterministic multi-level sorting.",
    "expectedColumns": [
      "EMPLOYEE_ID",
      "FIRST_NAME",
      "LAST_NAME",
      "DEPARTMENT_NAME",
      "ACTIVE_PROJECT_COUNT",
      "TOTAL_WEEKLY_HOURS"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Atlas Consulting Assessment Sample)",
        "input": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Strategy",
              "office_id": 1,
              "annual_budget": 1000000
            },
            {
              "department_id": 2,
              "department_name": "Technology",
              "office_id": 1,
              "annual_budget": 1500000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Sarah",
              "last_name": "Connor",
              "department_id": 1,
              "hire_date": "2022-01-01",
              "status": "Active",
              "annual_salary": 120000
            },
            {
              "employee_id": 2,
              "first_name": "John",
              "last_name": "Doe",
              "department_id": 2,
              "hire_date": "2023-01-01",
              "status": "Active",
              "annual_salary": 95000
            },
            {
              "employee_id": 3,
              "first_name": "Kyle",
              "last_name": "Reese",
              "department_id": 1,
              "hire_date": "2021-01-01",
              "status": "Inactive",
              "annual_salary": 110000
            }
          ],
          "projects": [
            {
              "project_id": 10,
              "project_name": "Alpha",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 200000,
              "status": "Active"
            },
            {
              "project_id": 20,
              "project_name": "Beta",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 300000,
              "status": "Active"
            },
            {
              "project_id": 30,
              "project_name": "Gamma",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 250000,
              "status": "Active"
            },
            {
              "project_id": 40,
              "project_name": "Delta",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 150000,
              "status": "Completed"
            }
          ],
          "assignments": [
            {
              "assignment_id": 1,
              "project_id": 10,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 2,
              "project_id": 20,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Consultant"
            },
            {
              "assignment_id": 3,
              "project_id": 30,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Advisor"
            },
            {
              "assignment_id": 4,
              "project_id": 10,
              "employee_id": 2,
              "assigned_date": "2025-01-01",
              "weekly_hours": 20,
              "assignment_role": "Dev"
            },
            {
              "assignment_id": 5,
              "project_id": 20,
              "employee_id": 2,
              "assigned_date": "2025-01-01",
              "weekly_hours": 20,
              "assignment_role": "Dev"
            },
            {
              "assignment_id": 6,
              "project_id": 10,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 7,
              "project_id": 20,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 8,
              "project_id": 30,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            }
          ]
        },
        "output": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Sarah",
            "LAST_NAME": "Connor",
            "DEPARTMENT_NAME": "Strategy",
            "ACTIVE_PROJECT_COUNT": 3,
            "TOTAL_WEEKLY_HOURS": 40
          }
        ],
        "explanation": "Joins employees to departments, assignments, and projects. Filters for active employees and active projects, groups by employee, and retains those assigned to at least 3 distinct active projects with deterministic multi-level sorting."
      }
    ],
    "testCases": [
      {
        "id": "sql-034-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Strategy",
              "office_id": 1,
              "annual_budget": 1000000
            },
            {
              "department_id": 2,
              "department_name": "Technology",
              "office_id": 1,
              "annual_budget": 1500000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Sarah",
              "last_name": "Connor",
              "department_id": 1,
              "hire_date": "2022-01-01",
              "status": "Active",
              "annual_salary": 120000
            },
            {
              "employee_id": 2,
              "first_name": "John",
              "last_name": "Doe",
              "department_id": 2,
              "hire_date": "2023-01-01",
              "status": "Active",
              "annual_salary": 95000
            },
            {
              "employee_id": 3,
              "first_name": "Kyle",
              "last_name": "Reese",
              "department_id": 1,
              "hire_date": "2021-01-01",
              "status": "Inactive",
              "annual_salary": 110000
            }
          ],
          "projects": [
            {
              "project_id": 10,
              "project_name": "Alpha",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 200000,
              "status": "Active"
            },
            {
              "project_id": 20,
              "project_name": "Beta",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 300000,
              "status": "Active"
            },
            {
              "project_id": 30,
              "project_name": "Gamma",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 250000,
              "status": "Active"
            },
            {
              "project_id": 40,
              "project_name": "Delta",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 150000,
              "status": "Completed"
            }
          ],
          "assignments": [
            {
              "assignment_id": 1,
              "project_id": 10,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 2,
              "project_id": 20,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Consultant"
            },
            {
              "assignment_id": 3,
              "project_id": 30,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Advisor"
            },
            {
              "assignment_id": 4,
              "project_id": 10,
              "employee_id": 2,
              "assigned_date": "2025-01-01",
              "weekly_hours": 20,
              "assignment_role": "Dev"
            },
            {
              "assignment_id": 5,
              "project_id": 20,
              "employee_id": 2,
              "assigned_date": "2025-01-01",
              "weekly_hours": 20,
              "assignment_role": "Dev"
            },
            {
              "assignment_id": 6,
              "project_id": 10,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 7,
              "project_id": 20,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 8,
              "project_id": 30,
              "employee_id": 3,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Lead"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Sarah",
            "LAST_NAME": "Connor",
            "DEPARTMENT_NAME": "Strategy",
            "ACTIVE_PROJECT_COUNT": 3,
            "TOTAL_WEEKLY_HOURS": 40
          }
        ]
      },
      {
        "id": "sql-034-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Strategy",
              "office_id": 1,
              "annual_budget": 1000000
            }
          ],
          "employees": [
            {
              "employee_id": 5,
              "first_name": "Neo",
              "last_name": "Anderson",
              "department_id": 1,
              "hire_date": "2022-01-01",
              "status": "Active",
              "annual_salary": 100000
            }
          ],
          "projects": [
            {
              "project_id": 10,
              "project_name": "Matrix",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 200000,
              "status": "Active"
            }
          ],
          "assignments": [
            {
              "assignment_id": 1,
              "project_id": 10,
              "employee_id": 5,
              "assigned_date": "2025-01-01",
              "weekly_hours": 40,
              "assignment_role": "Lead"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-034-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Strategy",
              "office_id": 1,
              "annual_budget": 1000000
            },
            {
              "department_id": 2,
              "department_name": "Technology",
              "office_id": 1,
              "annual_budget": 1500000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Sarah",
              "last_name": "Connor",
              "department_id": 1,
              "hire_date": "2022-01-01",
              "status": "Active",
              "annual_salary": 120000
            },
            {
              "employee_id": 4,
              "first_name": "Ada",
              "last_name": "Lovelace",
              "department_id": 2,
              "hire_date": "2020-01-01",
              "status": "Active",
              "annual_salary": 140000
            }
          ],
          "projects": [
            {
              "project_id": 10,
              "project_name": "Alpha",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 200000,
              "status": "Active"
            },
            {
              "project_id": 20,
              "project_name": "Beta",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 300000,
              "status": "Active"
            },
            {
              "project_id": 30,
              "project_name": "Gamma",
              "client_id": 1,
              "department_id": 1,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 250000,
              "status": "Active"
            },
            {
              "project_id": 40,
              "project_name": "Epsilon",
              "client_id": 1,
              "department_id": 2,
              "start_date": "2025-01-01",
              "end_date": "2025-12-31",
              "budget": 250000,
              "status": "Active"
            }
          ],
          "assignments": [
            {
              "assignment_id": 1,
              "project_id": 10,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Lead"
            },
            {
              "assignment_id": 2,
              "project_id": 20,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Consultant"
            },
            {
              "assignment_id": 3,
              "project_id": 30,
              "employee_id": 1,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Advisor"
            },
            {
              "assignment_id": 4,
              "project_id": 10,
              "employee_id": 4,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Architect"
            },
            {
              "assignment_id": 5,
              "project_id": 20,
              "employee_id": 4,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Architect"
            },
            {
              "assignment_id": 6,
              "project_id": 30,
              "employee_id": 4,
              "assigned_date": "2025-01-01",
              "weekly_hours": 10,
              "assignment_role": "Architect"
            },
            {
              "assignment_id": 7,
              "project_id": 40,
              "employee_id": 4,
              "assigned_date": "2025-01-01",
              "weekly_hours": 15,
              "assignment_role": "Architect"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 4,
            "FIRST_NAME": "Ada",
            "LAST_NAME": "Lovelace",
            "DEPARTMENT_NAME": "Technology",
            "ACTIVE_PROJECT_COUNT": 4,
            "TOTAL_WEEKLY_HOURS": 45
          },
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Sarah",
            "LAST_NAME": "Connor",
            "DEPARTMENT_NAME": "Strategy",
            "ACTIVE_PROJECT_COUNT": 3,
            "TOTAL_WEEKLY_HOURS": 40
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "GROUP BY",
      "HAVING",
      "COUNT DISTINCT",
      "SUM",
      "ORDER BY"
    ],
    "statement": "The employee IDs, first names, last names, department names, active project counts, and total weekly hours for active employees assigned to at least 3 distinct 'Active' projects. Sort by active project count descending, total weekly hours descending, then employee_id ascending.",
    "diagramTables": [
      {
        "name": "offices",
        "label": "Offices",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "office_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "office_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "departments",
        "label": "Departments",
        "x": 48,
        "y": 280,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "department_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "office_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "offices.office_id"
          },
          {
            "name": "annual_budget",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "employees",
        "label": "Employees",
        "x": 398,
        "y": 280,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "departments.department_id"
          },
          {
            "name": "hire_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "annual_salary",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "clients",
        "label": "Clients",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "client_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "client_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "industry",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "projects",
        "label": "Projects",
        "x": 748,
        "y": 280,
        "width": 220,
        "height": 238,
        "columns": [
          {
            "name": "project_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "project_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "client_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "clients.client_id"
          },
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "departments.department_id"
          },
          {
            "name": "start_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "end_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "budget",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "assignments",
        "label": "Assignments",
        "x": 398,
        "y": 608,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "assignment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "project_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "projects.project_id"
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "assigned_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "weekly_hours",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "assignment_role",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "timesheets",
        "label": "Timesheets",
        "x": 748,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "timesheet_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "assignment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "assignments.assignment_id"
          },
          {
            "name": "work_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "hours_worked",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "approval_status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "skills",
        "label": "Skills",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "skill_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "skill_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "skill_group",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "employee_skills",
        "label": "Employee Skills",
        "x": 398,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "employee_skill_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "skill_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "skills.skill_id"
          },
          {
            "name": "proficiency_level",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "milestones",
        "label": "Milestones",
        "x": 1098,
        "y": 280,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "milestone_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "project_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "projects.project_id"
          },
          {
            "name": "milestone_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "due_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "expenses",
        "label": "Expenses",
        "x": 48,
        "y": 608,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "expense_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "project_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "projects.project_id"
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "expense_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "expense_category",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "departments",
        "target": "offices",
        "column": "office_id",
        "targetColumn": "office_id",
        "constraintName": "departments_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            117,
            280
          ],
          [
            117,
            218
          ],
          [
            158,
            218
          ],
          [
            158,
            190
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "employees",
        "target": "departments",
        "column": "department_id",
        "targetColumn": "department_id",
        "constraintName": "employees_ibfk_1",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            398,
            370.8
          ],
          [
            370,
            370.8
          ],
          [
            370,
            351
          ],
          [
            268,
            351
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "projects",
        "target": "clients",
        "column": "client_id",
        "targetColumn": "client_id",
        "constraintName": "projects_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            337
          ],
          [
            996,
            337
          ],
          [
            996,
            119
          ],
          [
            1098,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "projects",
        "target": "departments",
        "column": "department_id",
        "targetColumn": "department_id",
        "constraintName": "projects_ibfk_2",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            803.33,
            280
          ],
          [
            803.33,
            252
          ],
          [
            296,
            252
          ],
          [
            296,
            373.5
          ],
          [
            268,
            373.5
          ]
        ],
        "sourceSide": "top",
        "targetSide": "right"
      },
      {
        "source": "assignments",
        "target": "projects",
        "column": "project_id",
        "targetColumn": "project_id",
        "constraintName": "assignments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            618,
            703
          ],
          [
            646,
            703
          ],
          [
            646,
            430
          ],
          [
            748,
            430
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "assignments",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "assignments_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            467,
            608
          ],
          [
            467,
            522
          ],
          [
            524.4,
            522
          ],
          [
            524.4,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "timesheets",
        "target": "assignments",
        "column": "assignment_id",
        "targetColumn": "assignment_id",
        "constraintName": "timesheets_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            691
          ],
          [
            720,
            691
          ],
          [
            720,
            737.5
          ],
          [
            618,
            737.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "employee_skills",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "employee_skills_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            480.67,
            190
          ],
          [
            480.67,
            218
          ],
          [
            557.2,
            218
          ],
          [
            557.2,
            280
          ]
        ],
        "sourceSide": "bottom",
        "targetSide": "top"
      },
      {
        "source": "employee_skills",
        "target": "skills",
        "column": "skill_id",
        "targetColumn": "skill_id",
        "constraintName": "employee_skills_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            618,
            104
          ],
          [
            646,
            104
          ],
          [
            646,
            107
          ],
          [
            748,
            107
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "milestones",
        "target": "projects",
        "column": "project_id",
        "targetColumn": "project_id",
        "constraintName": "milestones_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            363
          ],
          [
            1070,
            363
          ],
          [
            1070,
            399
          ],
          [
            968,
            399
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "expenses",
        "target": "projects",
        "column": "project_id",
        "targetColumn": "project_id",
        "constraintName": "expenses_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            185.33,
            608
          ],
          [
            185.33,
            580
          ],
          [
            720,
            580
          ],
          [
            720,
            461
          ],
          [
            748,
            461
          ]
        ],
        "sourceSide": "top",
        "targetSide": "left"
      },
      {
        "source": "expenses",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "expenses_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            268,
            680
          ],
          [
            296,
            680
          ],
          [
            296,
            435.6
          ],
          [
            398,
            435.6
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      }
    ]
  },
  {
    "id": "sql-035",
    "numericId": 35,
    "title": "Department salary comparison",
    "domain": "Crestline People Operations",
    "difficulty": "Medium",
    "duration": 20,
    "category": "SUBQUERIES & ANALYTICAL WINDOWING",
    "tableSchema": [
      {
        "name": "regions",
        "columns": [
          {
            "name": "region_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "region_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "departments",
        "columns": [
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "department_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "region_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "annual_budget",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "salary_grades",
        "columns": [
          {
            "name": "grade_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "grade_code",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "minimum_salary",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "maximum_salary",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "employees",
        "columns": [
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "grade_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "hire_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "annual_salary",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "salary_history",
        "columns": [
          {
            "name": "salary_history_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "effective_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "annual_salary",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "change_reason",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "bonuses",
        "columns": [
          {
            "name": "bonus_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "bonus_year",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "paid_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "benefits",
        "columns": [
          {
            "name": "benefit_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "benefit_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "provider",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "annual_cost",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "employee_benefits",
        "columns": [
          {
            "name": "employee_benefit_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "benefit_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "enrollment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "performance_reviews",
        "columns": [
          {
            "name": "review_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "review_year",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "score",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "review_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "certifications",
        "columns": [
          {
            "name": "certification_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "certification_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "awarded_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "expiry_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 834
    },
    "connectionLines": [
      {
        "constraintName": "departments_ibfk_1",
        "sourceTable": "departments",
        "sourceColumn": "region_id",
        "sourceRowIndex": 2,
        "targetTable": "regions",
        "targetColumn": "region_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 382
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 382
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 382.0 C 323 382.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employees_ibfk_1",
        "sourceTable": "employees",
        "sourceColumn": "department_id",
        "sourceRowIndex": 3,
        "targetTable": "departments",
        "targetColumn": "department_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 406
            },
            {
              "x": 330.4,
              "y": 334
            }
          ],
          "pathData": "M 398 406.0 C 335.6 406.0, 330.4 334.0, 268 334.0",
          "labelPosition": {
            "x": 282,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employees_ibfk_2",
        "sourceTable": "employees",
        "sourceColumn": "grade_id",
        "sourceRowIndex": 4,
        "targetTable": "salary_grades",
        "targetColumn": "grade_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 430
          },
          "endPoint": {
            "x": 748,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 430
            },
            {
              "x": 685.6,
              "y": 102
            }
          ],
          "pathData": "M 618 430.0 C 680.4 430.0, 685.6 102.0, 748 102.0",
          "labelPosition": {
            "x": 734,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "salary_history_ibfk_1",
        "sourceTable": "salary_history",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 686
          },
          "endPoint": {
            "x": 398,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 686
            },
            {
              "x": 335.6,
              "y": 334
            }
          ],
          "pathData": "M 268 686.0 C 330.4 686.0, 335.6 334.0, 398 334.0",
          "labelPosition": {
            "x": 384,
            "y": 323,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "bonuses_ibfk_1",
        "sourceTable": "bonuses",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 686
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 686
            },
            {
              "x": 673,
              "y": 334
            }
          ],
          "pathData": "M 618 686.0 C 673 686.0, 673 334.0, 618 334.0",
          "labelPosition": {
            "x": 679,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employee_benefits_ibfk_1",
        "sourceTable": "employee_benefits",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 358
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 358
            },
            {
              "x": 680.4,
              "y": 334
            }
          ],
          "pathData": "M 748 358.0 C 685.6 358.0, 680.4 334.0, 618 334.0",
          "labelPosition": {
            "x": 632,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employee_benefits_ibfk_2",
        "sourceTable": "employee_benefits",
        "sourceColumn": "benefit_id",
        "sourceRowIndex": 2,
        "targetTable": "benefits",
        "targetColumn": "benefit_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 382
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 382
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 382.0 C 1030.4 382.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "performance_reviews_ibfk_1",
        "sourceTable": "performance_reviews",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 686
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 686
            },
            {
              "x": 680.4,
              "y": 334
            }
          ],
          "pathData": "M 748 686.0 C 685.6 686.0, 680.4 334.0, 618 334.0",
          "labelPosition": {
            "x": 632,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "certifications_ibfk_1",
        "sourceTable": "certifications",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 358
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 867.6,
              "y": 358
            },
            {
              "x": 848.4,
              "y": 334
            }
          ],
          "pathData": "M 1098 358.0 C 867.6 358.0, 848.4 334.0, 618 334.0",
          "labelPosition": {
            "x": 632,
            "y": 323,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe employee IDs, first names, last names, department IDs, annual salaries, department average salaries, and salary differences for active employees whose annual salary is strictly greater than the average annual salary of active employees in their department. Sort by department_id ascending, annual salary descending, then employee_id ascending.",
    "problem": "### Problem Statement\nThe employee IDs, first names, last names, department IDs, annual salaries, department average salaries, and salary differences for active employees whose annual salary is strictly greater than the average annual salary of active employees in their department. Sort by department_id ascending, annual salary descending, then employee_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `EMPLOYEE_ID`, `FIRST_NAME`, `LAST_NAME`, `DEPARTMENT_ID`, `ANNUAL_SALARY`, `DEPARTMENT_AVERAGE_SALARY`, `SALARY_DIFFERENCE`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** SUBQUERIES & ANALYTICAL WINDOWING\n- Annual salary is the current salary in employees, not an amount from salary_history.\n- Both the employee and the departmental comparison population must have status = 'Active'.\n- Salary comparisons use unrounded averages; displayed averages and differences are rounded to two decimal places.",
    "notes": [
      "Annual salary is the current salary in employees, not an amount from salary_history.",
      "Both the employee and the departmental comparison population must have status = 'Active'.",
      "Salary comparisons use unrounded averages; displayed averages and differences are rounded to two decimal places."
    ],
    "starterCode": "",
    "solution": "WITH dept_avg AS (\n    SELECT\n        department_id,\n        AVG(annual_salary) AS avg_sal\n    FROM employees\n    WHERE status = 'Active'\n    GROUP BY department_id\n)\nSELECT\n    e.employee_id AS EMPLOYEE_ID,\n    e.first_name AS FIRST_NAME,\n    e.last_name AS LAST_NAME,\n    e.department_id AS DEPARTMENT_ID,\n    ROUND(e.annual_salary, 2) AS ANNUAL_SALARY,\n    ROUND(d.avg_sal, 2) AS DEPARTMENT_AVERAGE_SALARY,\n    ROUND(e.annual_salary - d.avg_sal, 2) AS SALARY_DIFFERENCE\nFROM employees e\nJOIN dept_avg d ON e.department_id = d.department_id\nWHERE e.status = 'Active'\n  AND e.annual_salary > d.avg_sal\nORDER BY DEPARTMENT_ID ASC, e.annual_salary DESC, EMPLOYEE_ID ASC;",
    "explanation": "Computes department-level average salaries for active staff via CTE. Joins back to active employees whose current salary strictly exceeds their department average, calculating the salary differential rounded to 2 decimal places.",
    "expectedColumns": [
      "EMPLOYEE_ID",
      "FIRST_NAME",
      "LAST_NAME",
      "DEPARTMENT_ID",
      "ANNUAL_SALARY",
      "DEPARTMENT_AVERAGE_SALARY",
      "SALARY_DIFFERENCE"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Crestline People Operations Assessment Sample)",
        "input": {
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Alice",
              "last_name": "Smith",
              "department_id": 10,
              "annual_salary": 100000,
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Bob",
              "last_name": "Jones",
              "department_id": 10,
              "annual_salary": 80000,
              "status": "Active"
            },
            {
              "employee_id": 3,
              "first_name": "Charlie",
              "last_name": "Brown",
              "department_id": 10,
              "annual_salary": 60000,
              "status": "Active"
            },
            {
              "employee_id": 4,
              "first_name": "Diana",
              "last_name": "Prince",
              "department_id": 20,
              "annual_salary": 120000,
              "status": "Active"
            },
            {
              "employee_id": 5,
              "first_name": "Evan",
              "last_name": "Wright",
              "department_id": 20,
              "annual_salary": 90000,
              "status": "Active"
            },
            {
              "employee_id": 6,
              "first_name": "Frank",
              "last_name": "Castle",
              "department_id": 20,
              "annual_salary": 200000,
              "status": "Inactive"
            }
          ]
        },
        "output": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Alice",
            "LAST_NAME": "Smith",
            "DEPARTMENT_ID": 10,
            "ANNUAL_SALARY": 100000,
            "DEPARTMENT_AVERAGE_SALARY": 80000,
            "SALARY_DIFFERENCE": 20000
          },
          {
            "EMPLOYEE_ID": 4,
            "FIRST_NAME": "Diana",
            "LAST_NAME": "Prince",
            "DEPARTMENT_ID": 20,
            "ANNUAL_SALARY": 120000,
            "DEPARTMENT_AVERAGE_SALARY": 105000,
            "SALARY_DIFFERENCE": 15000
          }
        ],
        "explanation": "Computes department-level average salaries for active staff via CTE. Joins back to active employees whose current salary strictly exceeds their department average, calculating the salary differential rounded to 2 decimal places."
      }
    ],
    "testCases": [
      {
        "id": "sql-035-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Alice",
              "last_name": "Smith",
              "department_id": 10,
              "annual_salary": 100000,
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Bob",
              "last_name": "Jones",
              "department_id": 10,
              "annual_salary": 80000,
              "status": "Active"
            },
            {
              "employee_id": 3,
              "first_name": "Charlie",
              "last_name": "Brown",
              "department_id": 10,
              "annual_salary": 60000,
              "status": "Active"
            },
            {
              "employee_id": 4,
              "first_name": "Diana",
              "last_name": "Prince",
              "department_id": 20,
              "annual_salary": 120000,
              "status": "Active"
            },
            {
              "employee_id": 5,
              "first_name": "Evan",
              "last_name": "Wright",
              "department_id": 20,
              "annual_salary": 90000,
              "status": "Active"
            },
            {
              "employee_id": 6,
              "first_name": "Frank",
              "last_name": "Castle",
              "department_id": 20,
              "annual_salary": 200000,
              "status": "Inactive"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Alice",
            "LAST_NAME": "Smith",
            "DEPARTMENT_ID": 10,
            "ANNUAL_SALARY": 100000,
            "DEPARTMENT_AVERAGE_SALARY": 80000,
            "SALARY_DIFFERENCE": 20000
          },
          {
            "EMPLOYEE_ID": 4,
            "FIRST_NAME": "Diana",
            "LAST_NAME": "Prince",
            "DEPARTMENT_ID": 20,
            "ANNUAL_SALARY": 120000,
            "DEPARTMENT_AVERAGE_SALARY": 105000,
            "SALARY_DIFFERENCE": 15000
          }
        ]
      },
      {
        "id": "sql-035-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Equal1",
              "last_name": "One",
              "department_id": 10,
              "annual_salary": 75000,
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Equal2",
              "last_name": "Two",
              "department_id": 10,
              "annual_salary": 75000,
              "status": "Active"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-035-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Alice",
              "last_name": "Smith",
              "department_id": 10,
              "annual_salary": 100000,
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Bob",
              "last_name": "Jones",
              "department_id": 10,
              "annual_salary": 80000,
              "status": "Active"
            },
            {
              "employee_id": 3,
              "first_name": "Charlie",
              "last_name": "Brown",
              "department_id": 10,
              "annual_salary": 60000,
              "status": "Active"
            },
            {
              "employee_id": 7,
              "first_name": "George",
              "last_name": "Clark",
              "department_id": 10,
              "annual_salary": 110000,
              "status": "Active"
            },
            {
              "employee_id": 4,
              "first_name": "Diana",
              "last_name": "Prince",
              "department_id": 20,
              "annual_salary": 120000,
              "status": "Active"
            },
            {
              "employee_id": 5,
              "first_name": "Evan",
              "last_name": "Wright",
              "department_id": 20,
              "annual_salary": 90000,
              "status": "Active"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 7,
            "FIRST_NAME": "George",
            "LAST_NAME": "Clark",
            "DEPARTMENT_ID": 10,
            "ANNUAL_SALARY": 110000,
            "DEPARTMENT_AVERAGE_SALARY": 87500,
            "SALARY_DIFFERENCE": 22500
          },
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Alice",
            "LAST_NAME": "Smith",
            "DEPARTMENT_ID": 10,
            "ANNUAL_SALARY": 100000,
            "DEPARTMENT_AVERAGE_SALARY": 87500,
            "SALARY_DIFFERENCE": 12500
          },
          {
            "EMPLOYEE_ID": 4,
            "FIRST_NAME": "Diana",
            "LAST_NAME": "Prince",
            "DEPARTMENT_ID": 20,
            "ANNUAL_SALARY": 120000,
            "DEPARTMENT_AVERAGE_SALARY": 105000,
            "SALARY_DIFFERENCE": 15000
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "Subqueries",
      "AVG",
      "WHERE",
      "ORDER BY"
    ],
    "statement": "The employee IDs, first names, last names, department IDs, annual salaries, department average salaries, and salary differences for active employees whose annual salary is strictly greater than the average annual salary of active employees in their department. Sort by department_id ascending, annual salary descending, then employee_id ascending.",
    "diagramTables": [
      {
        "name": "regions",
        "label": "Regions",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "region_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "region_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "departments",
        "label": "Departments",
        "x": 48,
        "y": 280,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "department_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "region_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "regions.region_id"
          },
          {
            "name": "annual_budget",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "salary_grades",
        "label": "Salary Grades",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "grade_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "grade_code",
            "type": "VARCHAR(10)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "minimum_salary",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "maximum_salary",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "employees",
        "label": "Employees",
        "x": 398,
        "y": 280,
        "width": 220,
        "height": 238,
        "columns": [
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "departments.department_id"
          },
          {
            "name": "grade_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "salary_grades.grade_id"
          },
          {
            "name": "hire_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "annual_salary",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "salary_history",
        "label": "Salary History",
        "x": 48,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "salary_history_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "effective_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "annual_salary",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "change_reason",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "bonuses",
        "label": "Bonuses",
        "x": 398,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "bonus_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "bonus_year",
            "type": "SMALLINT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "paid_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "benefits",
        "label": "Benefits",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "benefit_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "benefit_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "provider",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "annual_cost",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "employee_benefits",
        "label": "Employee Benefits",
        "x": 748,
        "y": 280,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "employee_benefit_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "benefit_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "benefits.benefit_id"
          },
          {
            "name": "enrollment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "performance_reviews",
        "label": "Performance Reviews",
        "x": 748,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "review_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "review_year",
            "type": "SMALLINT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "score",
            "type": "DECIMAL(4,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "review_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "certifications",
        "label": "Certifications",
        "x": 1098,
        "y": 280,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "certification_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "certification_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "awarded_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "expiry_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "departments",
        "target": "regions",
        "column": "region_id",
        "targetColumn": "region_id",
        "constraintName": "departments_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            130.67,
            280
          ],
          [
            130.67,
            194
          ],
          [
            158,
            194
          ],
          [
            158,
            166
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "employees",
        "target": "departments",
        "column": "department_id",
        "targetColumn": "department_id",
        "constraintName": "employees_ibfk_1",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            398,
            352.5
          ],
          [
            370,
            352.5
          ],
          [
            370,
            366
          ],
          [
            268,
            366
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "employees",
        "target": "salary_grades",
        "column": "grade_id",
        "targetColumn": "grade_id",
        "constraintName": "employees_ibfk_2",
        "sourceIndex": 4,
        "targetIndex": 0,
        "points": [
          [
            618,
            329.25
          ],
          [
            646,
            329.25
          ],
          [
            646,
            119
          ],
          [
            748,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "salary_history",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "salary_history_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            268,
            691
          ],
          [
            296,
            691
          ],
          [
            296,
            546
          ],
          [
            467,
            546
          ],
          [
            467,
            518
          ]
        ],
        "sourceSide": "right",
        "targetSide": "bottom"
      },
      {
        "source": "bonuses",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "bonuses_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            608
          ],
          [
            508,
            546
          ],
          [
            487.5,
            546
          ],
          [
            487.5,
            518
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "employee_benefits",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "employee_benefits_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            382
          ],
          [
            720,
            382
          ],
          [
            720,
            375.75
          ],
          [
            618,
            375.75
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "employee_benefits",
        "target": "benefits",
        "column": "benefit_id",
        "targetColumn": "benefit_id",
        "constraintName": "employee_benefits_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            344
          ],
          [
            996,
            344
          ],
          [
            996,
            119
          ],
          [
            1098,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "performance_reviews",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "performance_reviews_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            691
          ],
          [
            720,
            691
          ],
          [
            720,
            468.75
          ],
          [
            618,
            468.75
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "certifications",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "certifications_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            363
          ],
          [
            1070,
            363
          ],
          [
            1070,
            252
          ],
          [
            569.5,
            252
          ],
          [
            569.5,
            280
          ]
        ],
        "sourceSide": "left",
        "targetSide": "top"
      }
    ]
  },
  {
    "id": "sql-036",
    "numericId": 36,
    "title": "Category-wise sales performance",
    "domain": "Evergreen Commerce",
    "difficulty": "Medium",
    "duration": 20,
    "category": "FINANCIAL CALCULATIONS & PAGINATION",
    "tableSchema": [
      {
        "name": "customers",
        "columns": [
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "registration_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "segment",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "addresses",
        "columns": [
          {
            "name": "address_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "address_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "postal_code",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "suppliers",
        "columns": [
          {
            "name": "supplier_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "supplier_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "is_active",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "categories",
        "columns": [
          {
            "name": "category_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "category_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "products",
        "columns": [
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "product_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "category_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "supplier_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "list_price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "is_discontinued",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "orders",
        "columns": [
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "order_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "channel",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "order_items",
        "columns": [
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "line_number",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "quantity",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "unit_price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "discount_pct",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "payments",
        "columns": [
          {
            "name": "payment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_method",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "shipments",
        "columns": [
          {
            "name": "shipment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "carrier",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "shipped_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "delivered_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "shipping_cost",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "promotions",
        "columns": [
          {
            "name": "promotion_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "promotion_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "discount_pct",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "product_promotions",
        "columns": [
          {
            "name": "product_promotion_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "promotion_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "assigned_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "reviews",
        "columns": [
          {
            "name": "review_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "rating",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "review_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "review_text",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 834
    },
    "connectionLines": [
      {
        "constraintName": "addresses_ibfk_1",
        "sourceTable": "addresses",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 382
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 382
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 382.0 C 323 382.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "products_ibfk_1",
        "sourceTable": "products",
        "sourceColumn": "category_id",
        "sourceRowIndex": 2,
        "targetTable": "categories",
        "targetColumn": "category_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 406
          },
          "endPoint": {
            "x": 968,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 406
            },
            {
              "x": 1023,
              "y": 102
            }
          ],
          "pathData": "M 968 406.0 C 1023 406.0, 1023 102.0, 968 102.0",
          "labelPosition": {
            "x": 1029,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "products_ibfk_2",
        "sourceTable": "products",
        "sourceColumn": "supplier_id",
        "sourceRowIndex": 3,
        "targetTable": "suppliers",
        "targetColumn": "supplier_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 430
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 430
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 430.0 C 1030.4 430.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "orders_ibfk_1",
        "sourceTable": "orders",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 126
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 126
            },
            {
              "x": 330.4,
              "y": 102
            }
          ],
          "pathData": "M 398 126.0 C 335.6 126.0, 330.4 102.0, 268 102.0",
          "labelPosition": {
            "x": 282,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "order_items_ibfk_1",
        "sourceTable": "order_items",
        "sourceColumn": "order_id",
        "sourceRowIndex": 0,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 358
          },
          "endPoint": {
            "x": 618,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 358
            },
            {
              "x": 673,
              "y": 102
            }
          ],
          "pathData": "M 618 358.0 C 673 358.0, 673 102.0, 618 102.0",
          "labelPosition": {
            "x": 679,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "order_items_ibfk_2",
        "sourceTable": "order_items",
        "sourceColumn": "product_id",
        "sourceRowIndex": 2,
        "targetTable": "products",
        "targetColumn": "product_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 406
          },
          "endPoint": {
            "x": 748,
            "y": 358
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 406
            },
            {
              "x": 685.6,
              "y": 358
            }
          ],
          "pathData": "M 618 406.0 C 680.4 406.0, 685.6 358.0, 748 358.0",
          "labelPosition": {
            "x": 734,
            "y": 347,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "payments_ibfk_1",
        "sourceTable": "payments",
        "sourceColumn": "order_id",
        "sourceRowIndex": 1,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 662
          },
          "endPoint": {
            "x": 398,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 662
            },
            {
              "x": 335.6,
              "y": 102
            }
          ],
          "pathData": "M 268 662.0 C 330.4 662.0, 335.6 102.0, 398 102.0",
          "labelPosition": {
            "x": 384,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "shipments_ibfk_1",
        "sourceTable": "shipments",
        "sourceColumn": "order_id",
        "sourceRowIndex": 1,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 662
            },
            {
              "x": 673,
              "y": 102
            }
          ],
          "pathData": "M 618 662.0 C 673 662.0, 673 102.0, 618 102.0",
          "labelPosition": {
            "x": 679,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "product_promotions_ibfk_1",
        "sourceTable": "product_promotions",
        "sourceColumn": "product_id",
        "sourceRowIndex": 1,
        "targetTable": "products",
        "targetColumn": "product_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 662
          },
          "endPoint": {
            "x": 968,
            "y": 358
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 662
            },
            {
              "x": 1023,
              "y": 358
            }
          ],
          "pathData": "M 968 662.0 C 1023 662.0, 1023 358.0, 968 358.0",
          "labelPosition": {
            "x": 1029,
            "y": 347,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "product_promotions_ibfk_2",
        "sourceTable": "product_promotions",
        "sourceColumn": "promotion_id",
        "sourceRowIndex": 2,
        "targetTable": "promotions",
        "targetColumn": "promotion_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 686
          },
          "endPoint": {
            "x": 1098,
            "y": 638
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 686
            },
            {
              "x": 1035.6,
              "y": 638
            }
          ],
          "pathData": "M 968 686.0 C 1030.4 686.0, 1035.6 638.0, 1098 638.0",
          "labelPosition": {
            "x": 1084,
            "y": 627,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "reviews_ibfk_1",
        "sourceTable": "reviews",
        "sourceColumn": "product_id",
        "sourceRowIndex": 1,
        "targetTable": "products",
        "targetColumn": "product_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 382
          },
          "endPoint": {
            "x": 968,
            "y": 358
          },
          "controlPoints": [
            {
              "x": 1035.6,
              "y": 382
            },
            {
              "x": 1030.4,
              "y": 358
            }
          ],
          "pathData": "M 1098 382.0 C 1035.6 382.0, 1030.4 358.0, 968 358.0",
          "labelPosition": {
            "x": 982,
            "y": 347,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "reviews_ibfk_2",
        "sourceTable": "reviews",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 2,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 699.6,
              "y": 406
            },
            {
              "x": 666.4,
              "y": 102
            }
          ],
          "pathData": "M 1098 406.0 C 699.6 406.0, 666.4 102.0, 268 102.0",
          "labelPosition": {
            "x": 282,
            "y": 91,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe category IDs, category names, total units sold, distinct order counts, and net sales for 'Completed' orders placed during '2025' across each product category. Net sales is quantity * unit_price * (1 - discount_pct / 100). Keep categories with net sales greater than 100000 and at least 20 distinct orders. Return the top 5 categories sorted by net sales descending, then category_id ascending.",
    "problem": "### Problem Statement\nThe category IDs, category names, total units sold, distinct order counts, and net sales for 'Completed' orders placed during '2025' across each product category. Net sales is quantity * unit_price * (1 - discount_pct / 100). Keep categories with net sales greater than 100000 and at least 20 distinct orders. Return the top 5 categories sorted by net sales descending, then category_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `CATEGORY_ID`, `CATEGORY_NAME`, `TOTAL_UNITS`, `ORDER_COUNT`, `NET_SALES`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** FINANCIAL CALCULATIONS & PAGINATION\n- The primary key of order_items is (order_id, line_number). The same product can occur on multiple lines of an order.\n- Use order_items.unit_price, the actual selling price, rather than products.list_price.\n- Net sales exclude shipping costs and are not derived from payments. Products now discontinued still contribute to historical sales.\n- Filter orders using order_date. Perform aggregation and ranking before rounding displayed net sales.",
    "notes": [
      "The primary key of order_items is (order_id, line_number). The same product can occur on multiple lines of an order.",
      "Use order_items.unit_price, the actual selling price, rather than products.list_price.",
      "Net sales exclude shipping costs and are not derived from payments. Products now discontinued still contribute to historical sales.",
      "Filter orders using order_date. Perform aggregation and ranking before rounding displayed net sales."
    ],
    "starterCode": "",
    "solution": "SELECT\n    c.category_id AS CATEGORY_ID,\n    c.category_name AS CATEGORY_NAME,\n    SUM(oi.quantity) AS TOTAL_UNITS,\n    COUNT(DISTINCT o.order_id) AS ORDER_COUNT,\n    ROUND(SUM(oi.quantity * oi.unit_price * (1 - oi.discount_pct / 100.0)), 2) AS NET_SALES\nFROM categories c\nJOIN products p ON c.category_id = p.category_id\nJOIN order_items oi ON p.product_id = oi.product_id\nJOIN orders o ON oi.order_id = o.order_id\nWHERE o.status = 'Completed'\n  AND o.order_date >= '2025-01-01'\n  AND o.order_date <= '2025-12-31'\nGROUP BY c.category_id, c.category_name\nHAVING SUM(oi.quantity * oi.unit_price * (1 - oi.discount_pct / 100.0)) > 100000\n   AND COUNT(DISTINCT o.order_id) >= 20\nORDER BY NET_SALES DESC, CATEGORY_ID ASC\nLIMIT 5;",
    "explanation": "Calculates category revenue using line-item net sales formula (quantity * unit_price * (1 - discount_pct/100)) for 2025 completed orders. Filters categories via HAVING for > 100k sales and >= 20 orders, returning the top 5.",
    "expectedColumns": [
      "CATEGORY_ID",
      "CATEGORY_NAME",
      "TOTAL_UNITS",
      "ORDER_COUNT",
      "NET_SALES"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Evergreen Commerce Assessment Sample)",
        "input": {
          "categories": [
            {
              "category_id": 1,
              "category_name": "Electronics",
              "description": "Gadgets"
            },
            {
              "category_id": 2,
              "category_name": "Furniture",
              "description": "Home"
            },
            {
              "category_id": 3,
              "category_name": "Books",
              "description": "Print"
            }
          ],
          "products": [
            {
              "product_id": 101,
              "product_name": "Laptop",
              "category_id": 1,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 102,
              "product_name": "Desk",
              "category_id": 2,
              "supplier_id": 1,
              "list_price": 500,
              "is_discontinued": 0
            },
            {
              "product_id": 103,
              "product_name": "Novel",
              "category_id": 3,
              "supplier_id": 1,
              "list_price": 20,
              "is_discontinued": 0
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 2,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 3,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 4,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 5,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 6,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 7,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 8,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 9,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 10,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 11,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 12,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 13,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 14,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 15,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 16,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 17,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 18,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 19,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 20,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 21,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 22,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 23,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 24,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 25,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 26,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 27,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 28,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 29,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 30,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 31,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 32,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 33,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 34,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 35,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 36,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 37,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 38,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 39,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 40,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 41,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 42,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 43,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 44,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 45,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 46,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 47,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 48,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 49,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 50,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 51,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 52,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 2,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 3,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 4,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 5,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 6,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 7,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 8,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 9,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 10,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 11,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 12,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 13,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 14,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 15,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 16,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 17,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 18,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 19,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 20,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 21,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 22,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 23,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 24,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 25,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 26,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 27,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 28,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 29,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 30,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 31,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 32,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 33,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 34,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 35,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 36,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 37,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 38,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 39,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 40,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 41,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 42,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 43,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 44,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 45,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 46,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 47,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 48,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 49,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 50,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 51,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 52,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            }
          ]
        },
        "output": [
          {
            "CATEGORY_ID": 1,
            "CATEGORY_NAME": "Electronics",
            "TOTAL_UNITS": 132,
            "ORDER_COUNT": 22,
            "NET_SALES": 132000
          },
          {
            "CATEGORY_ID": 2,
            "CATEGORY_NAME": "Furniture",
            "TOTAL_UNITS": 250,
            "ORDER_COUNT": 25,
            "NET_SALES": 125000
          }
        ],
        "explanation": "Calculates category revenue using line-item net sales formula (quantity * unit_price * (1 - discount_pct/100)) for 2025 completed orders. Filters categories via HAVING for > 100k sales and >= 20 orders, returning the top 5."
      }
    ],
    "testCases": [
      {
        "id": "sql-036-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "categories": [
            {
              "category_id": 1,
              "category_name": "Electronics",
              "description": "Gadgets"
            },
            {
              "category_id": 2,
              "category_name": "Furniture",
              "description": "Home"
            },
            {
              "category_id": 3,
              "category_name": "Books",
              "description": "Print"
            }
          ],
          "products": [
            {
              "product_id": 101,
              "product_name": "Laptop",
              "category_id": 1,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 102,
              "product_name": "Desk",
              "category_id": 2,
              "supplier_id": 1,
              "list_price": 500,
              "is_discontinued": 0
            },
            {
              "product_id": 103,
              "product_name": "Novel",
              "category_id": 3,
              "supplier_id": 1,
              "list_price": 20,
              "is_discontinued": 0
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 2,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 3,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 4,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 5,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 6,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 7,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 8,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 9,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 10,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 11,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 12,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 13,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 14,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 15,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 16,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 17,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 18,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 19,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 20,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 21,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 22,
              "customer_id": 1,
              "order_date": "2025-05-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 23,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 24,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 25,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 26,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 27,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 28,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 29,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 30,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 31,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 32,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 33,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 34,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 35,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 36,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 37,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 38,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 39,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 40,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 41,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 42,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 43,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 44,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 45,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 46,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 47,
              "customer_id": 1,
              "order_date": "2025-06-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 48,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 49,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 50,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 51,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 52,
              "customer_id": 1,
              "order_date": "2025-07-01",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 2,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 3,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 4,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 5,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 6,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 7,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 8,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 9,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 10,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 11,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 12,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 13,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 14,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 15,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 16,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 17,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 18,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 19,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 20,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 21,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 22,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 23,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 24,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 25,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 26,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 27,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 28,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 29,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 30,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 31,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 32,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 33,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 34,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 35,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 36,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 37,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 38,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 39,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 40,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 41,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 42,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 43,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 44,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 45,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 46,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 47,
              "line_number": 1,
              "product_id": 102,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 48,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 49,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 50,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 51,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            },
            {
              "order_id": 52,
              "line_number": 1,
              "product_id": 103,
              "quantity": 5,
              "unit_price": 20,
              "discount_pct": 0
            }
          ]
        },
        "expected": [
          {
            "CATEGORY_ID": 1,
            "CATEGORY_NAME": "Electronics",
            "TOTAL_UNITS": 132,
            "ORDER_COUNT": 22,
            "NET_SALES": 132000
          },
          {
            "CATEGORY_ID": 2,
            "CATEGORY_NAME": "Furniture",
            "TOTAL_UNITS": 250,
            "ORDER_COUNT": 25,
            "NET_SALES": 125000
          }
        ]
      },
      {
        "id": "sql-036-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "categories": [
            {
              "category_id": 1,
              "category_name": "Electronics",
              "description": "Gadgets"
            }
          ],
          "products": [
            {
              "product_id": 101,
              "product_name": "Laptop",
              "category_id": 1,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 1,
              "order_date": "2024-12-31",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 101,
              "quantity": 500,
              "unit_price": 1000,
              "discount_pct": 0
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-036-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "categories": [
            {
              "category_id": 1,
              "category_name": "Category 1",
              "description": "Desc 1"
            },
            {
              "category_id": 2,
              "category_name": "Category 2",
              "description": "Desc 2"
            },
            {
              "category_id": 3,
              "category_name": "Category 3",
              "description": "Desc 3"
            },
            {
              "category_id": 4,
              "category_name": "Category 4",
              "description": "Desc 4"
            },
            {
              "category_id": 5,
              "category_name": "Category 5",
              "description": "Desc 5"
            },
            {
              "category_id": 6,
              "category_name": "Category 6",
              "description": "Desc 6"
            },
            {
              "category_id": 7,
              "category_name": "Category 7",
              "description": "Desc 7"
            }
          ],
          "products": [
            {
              "product_id": 101,
              "product_name": "Prod 1",
              "category_id": 1,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 102,
              "product_name": "Prod 2",
              "category_id": 2,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 103,
              "product_name": "Prod 3",
              "category_id": 3,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 104,
              "product_name": "Prod 4",
              "category_id": 4,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 105,
              "product_name": "Prod 5",
              "category_id": 5,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 106,
              "product_name": "Prod 6",
              "category_id": 6,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            },
            {
              "product_id": 107,
              "product_name": "Prod 7",
              "category_id": 7,
              "supplier_id": 1,
              "list_price": 1000,
              "is_discontinued": 0
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 2,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 3,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 4,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 5,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 6,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 7,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 8,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 9,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 10,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 11,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 12,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 13,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 14,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 15,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 16,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 17,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 18,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 19,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 20,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 21,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 22,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 23,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 24,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 25,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 26,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 27,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 28,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 29,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 30,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 31,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 32,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 33,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 34,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 35,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 36,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 37,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 38,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 39,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 40,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 41,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 42,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 43,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 44,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 45,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 46,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 47,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 48,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 49,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 50,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 51,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 52,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 53,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 54,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 55,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 56,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 57,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 58,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 59,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 60,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 61,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 62,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 63,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 64,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 65,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 66,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 67,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 68,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 69,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 70,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 71,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 72,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 73,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 74,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 75,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 76,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 77,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 78,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 79,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 80,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 81,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 82,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 83,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 84,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 85,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 86,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 87,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 88,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 89,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 90,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 91,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 92,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 93,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 94,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 95,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 96,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 97,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 98,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 99,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 100,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 101,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 102,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 103,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 104,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 105,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 106,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 107,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 108,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 109,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 110,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 111,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 112,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 113,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 114,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 115,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 116,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 117,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 118,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 119,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 120,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 121,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 122,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 123,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 124,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 125,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 126,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 127,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 128,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 129,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 130,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 131,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 132,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 133,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 134,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 135,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 136,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 137,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 138,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 139,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 140,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 141,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 142,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 143,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 144,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 145,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 146,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 147,
              "customer_id": 1,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 2,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 3,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 4,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 5,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 6,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 7,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 8,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 9,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 10,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 11,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 12,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 13,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 14,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 15,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 16,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 17,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 18,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 19,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 20,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 21,
              "line_number": 1,
              "product_id": 101,
              "quantity": 6,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 22,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 23,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 24,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 25,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 26,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 27,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 28,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 29,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 30,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 31,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 32,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 33,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 34,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 35,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 36,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 37,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 38,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 39,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 40,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 41,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 42,
              "line_number": 1,
              "product_id": 102,
              "quantity": 12,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 43,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 44,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 45,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 46,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 47,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 48,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 49,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 50,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 51,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 52,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 53,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 54,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 55,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 56,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 57,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 58,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 59,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 60,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 61,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 62,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 63,
              "line_number": 1,
              "product_id": 103,
              "quantity": 18,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 64,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 65,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 66,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 67,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 68,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 69,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 70,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 71,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 72,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 73,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 74,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 75,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 76,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 77,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 78,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 79,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 80,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 81,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 82,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 83,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 84,
              "line_number": 1,
              "product_id": 104,
              "quantity": 24,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 85,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 86,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 87,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 88,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 89,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 90,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 91,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 92,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 93,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 94,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 95,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 96,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 97,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 98,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 99,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 100,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 101,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 102,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 103,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 104,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 105,
              "line_number": 1,
              "product_id": 105,
              "quantity": 30,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 106,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 107,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 108,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 109,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 110,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 111,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 112,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 113,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 114,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 115,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 116,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 117,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 118,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 119,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 120,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 121,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 122,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 123,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 124,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 125,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 126,
              "line_number": 1,
              "product_id": 106,
              "quantity": 36,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 127,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 128,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 129,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 130,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 131,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 132,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 133,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 134,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 135,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 136,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 137,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 138,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 139,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 140,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 141,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 142,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 143,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 144,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 145,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 146,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            },
            {
              "order_id": 147,
              "line_number": 1,
              "product_id": 107,
              "quantity": 42,
              "unit_price": 1000,
              "discount_pct": 0
            }
          ]
        },
        "expected": [
          {
            "CATEGORY_ID": 7,
            "CATEGORY_NAME": "Category 7",
            "TOTAL_UNITS": 882,
            "ORDER_COUNT": 21,
            "NET_SALES": 882000
          },
          {
            "CATEGORY_ID": 6,
            "CATEGORY_NAME": "Category 6",
            "TOTAL_UNITS": 756,
            "ORDER_COUNT": 21,
            "NET_SALES": 756000
          },
          {
            "CATEGORY_ID": 5,
            "CATEGORY_NAME": "Category 5",
            "TOTAL_UNITS": 630,
            "ORDER_COUNT": 21,
            "NET_SALES": 630000
          },
          {
            "CATEGORY_ID": 4,
            "CATEGORY_NAME": "Category 4",
            "TOTAL_UNITS": 504,
            "ORDER_COUNT": 21,
            "NET_SALES": 504000
          },
          {
            "CATEGORY_ID": 3,
            "CATEGORY_NAME": "Category 3",
            "TOTAL_UNITS": 378,
            "ORDER_COUNT": 21,
            "NET_SALES": 378000
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "GROUP BY",
      "HAVING",
      "SUM",
      "COUNT DISTINCT",
      "ORDER BY",
      "LIMIT"
    ],
    "statement": "The category IDs, category names, total units sold, distinct order counts, and net sales for 'Completed' orders placed during '2025' across each product category. Net sales is quantity * unit_price * (1 - discount_pct / 100). Keep categories with net sales greater than 100000 and at least 20 distinct orders. Return the top 5 categories sorted by net sales descending, then category_id ascending.",
    "diagramTables": [
      {
        "name": "customers",
        "label": "Customers",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "registration_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "segment",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "addresses",
        "label": "Addresses",
        "x": 48,
        "y": 304,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "address_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "address_type",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "postal_code",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "suppliers",
        "label": "Suppliers",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "supplier_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "supplier_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_active",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "categories",
        "label": "Categories",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "category_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "products",
        "label": "Products",
        "x": 748,
        "y": 304,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "categories.category_id"
          },
          {
            "name": "supplier_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "suppliers.supplier_id"
          },
          {
            "name": "list_price",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_discontinued",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "orders",
        "label": "Orders",
        "x": 398,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "order_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "channel",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "order_items",
        "label": "Order Items",
        "x": 398,
        "y": 304,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "line_number",
            "type": "SMALLINT",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "products.product_id"
          },
          {
            "name": "quantity",
            "type": "INT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "unit_price",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "discount_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "payments",
        "label": "Payments",
        "x": 48,
        "y": 584,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "payment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "payment_method",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "shipments",
        "label": "Shipments",
        "x": 398,
        "y": 584,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "shipment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "carrier",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "shipped_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "delivered_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "shipping_cost",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "promotions",
        "label": "Promotions",
        "x": 1098,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "promotion_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "promotion_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "start_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "end_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "discount_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "product_promotions",
        "label": "Product Promotions",
        "x": 748,
        "y": 584,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "product_promotion_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "products.product_id"
          },
          {
            "name": "promotion_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "promotions.promotion_id"
          },
          {
            "name": "assigned_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "reviews",
        "label": "Reviews",
        "x": 1098,
        "y": 304,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "review_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "products.product_id"
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "rating",
            "type": "TINYINT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "review_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "review_text",
            "type": "TEXT",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "addresses",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "addresses_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            158,
            304
          ],
          [
            158,
            242
          ],
          [
            117,
            242
          ],
          [
            117,
            214
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "products",
        "target": "categories",
        "column": "category_id",
        "targetColumn": "category_id",
        "constraintName": "products_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            830.67,
            304
          ],
          [
            830.67,
            194
          ],
          [
            858,
            194
          ],
          [
            858,
            166
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "products",
        "target": "suppliers",
        "column": "supplier_id",
        "targetColumn": "supplier_id",
        "constraintName": "products_ibfk_2",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            968,
            376
          ],
          [
            996,
            376
          ],
          [
            996,
            119
          ],
          [
            1098,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "orders",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "orders_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            398,
            96.8
          ],
          [
            370,
            96.8
          ],
          [
            370,
            102.5
          ],
          [
            268,
            102.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "order_items",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "order_items_ibfk_1",
        "sourceIndex": 0,
        "targetIndex": 0,
        "points": [
          [
            480.67,
            304
          ],
          [
            480.67,
            242
          ],
          [
            524.4,
            242
          ],
          [
            524.4,
            214
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "order_items",
        "target": "products",
        "column": "product_id",
        "targetColumn": "product_id",
        "constraintName": "order_items_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            618,
            422
          ],
          [
            646,
            422
          ],
          [
            646,
            399
          ],
          [
            748,
            399
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "payments",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "payments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            268,
            679
          ],
          [
            296,
            679
          ],
          [
            296,
            142.4
          ],
          [
            398,
            142.4
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "shipments",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "shipments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            584
          ],
          [
            508,
            556
          ],
          [
            370,
            556
          ],
          [
            370,
            165.2
          ],
          [
            398,
            165.2
          ]
        ],
        "sourceSide": "top",
        "targetSide": "left"
      },
      {
        "source": "product_promotions",
        "target": "products",
        "column": "product_id",
        "targetColumn": "product_id",
        "constraintName": "product_promotions_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            830.67,
            584
          ],
          [
            830.67,
            522
          ],
          [
            858,
            522
          ],
          [
            858,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "product_promotions",
        "target": "promotions",
        "column": "promotion_id",
        "targetColumn": "promotion_id",
        "constraintName": "product_promotions_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            670
          ],
          [
            996,
            670
          ],
          [
            996,
            667
          ],
          [
            1098,
            667
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "reviews",
        "target": "products",
        "column": "product_id",
        "targetColumn": "product_id",
        "constraintName": "reviews_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            422
          ],
          [
            968,
            422
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "reviews",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "reviews_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            1180.67,
            304
          ],
          [
            1180.67,
            276
          ],
          [
            199,
            276
          ],
          [
            199,
            214
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      }
    ]
  },
  {
    "id": "sql-037",
    "numericId": 37,
    "title": "Subscriber billing patterns",
    "domain": "Beacon Telecom",
    "difficulty": "Medium",
    "duration": 20,
    "category": "STRING PREDICATES & BILLING AGGREGATION",
    "tableSchema": [
      {
        "name": "plans",
        "columns": [
          {
            "name": "plan_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "plan_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "plan_type",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "monthly_charge",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "data_limit_gb",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "customers",
        "columns": [
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "registration_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "addresses",
        "columns": [
          {
            "name": "address_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "postal_code",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "subscriptions",
        "columns": [
          {
            "name": "subscription_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "plan_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "phone_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "devices",
        "columns": [
          {
            "name": "device_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "subscription_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "manufacturer",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "model_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "imei",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "activated_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "invoices",
        "columns": [
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "subscription_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "invoice_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "invoice_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "due_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "payments",
        "columns": [
          {
            "name": "payment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_method",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "tickets",
        "columns": [
          {
            "name": "ticket_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "subject",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "priority",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "opened_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "call_records",
        "columns": [
          {
            "name": "call_record_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "subscription_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "called_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "call_at",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "duration_seconds",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "charge",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "data_usage",
        "columns": [
          {
            "name": "data_usage_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "subscription_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "usage_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "gigabytes_used",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 882
    },
    "connectionLines": [
      {
        "constraintName": "addresses_ibfk_1",
        "sourceTable": "addresses",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 710
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 710
            },
            {
              "x": 323,
              "y": 382
            }
          ],
          "pathData": "M 268 710.0 C 323 710.0, 323 382.0, 268 382.0",
          "labelPosition": {
            "x": 329,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "subscriptions_ibfk_1",
        "sourceTable": "subscriptions",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 406
            },
            {
              "x": 330.4,
              "y": 382
            }
          ],
          "pathData": "M 398 406.0 C 335.6 406.0, 330.4 382.0, 268 382.0",
          "labelPosition": {
            "x": 282,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "subscriptions_ibfk_2",
        "sourceTable": "subscriptions",
        "sourceColumn": "plan_id",
        "sourceRowIndex": 2,
        "targetTable": "plans",
        "targetColumn": "plan_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 430
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 430
            },
            {
              "x": 330.4,
              "y": 102
            }
          ],
          "pathData": "M 398 430.0 C 335.6 430.0, 330.4 102.0, 268 102.0",
          "labelPosition": {
            "x": 282,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "devices_ibfk_1",
        "sourceTable": "devices",
        "sourceColumn": "subscription_id",
        "sourceRowIndex": 1,
        "targetTable": "subscriptions",
        "targetColumn": "subscription_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 710
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 710
            },
            {
              "x": 673,
              "y": 382
            }
          ],
          "pathData": "M 618 710.0 C 673 710.0, 673 382.0, 618 382.0",
          "labelPosition": {
            "x": 679,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "invoices_ibfk_1",
        "sourceTable": "invoices",
        "sourceColumn": "subscription_id",
        "sourceRowIndex": 1,
        "targetTable": "subscriptions",
        "targetColumn": "subscription_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 406
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 406
            },
            {
              "x": 680.4,
              "y": 382
            }
          ],
          "pathData": "M 748 406.0 C 685.6 406.0, 680.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 632,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "payments_ibfk_1",
        "sourceTable": "payments",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 1,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 710
          },
          "endPoint": {
            "x": 968,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 710
            },
            {
              "x": 1023,
              "y": 382
            }
          ],
          "pathData": "M 968 710.0 C 1023 710.0, 1023 382.0, 968 382.0",
          "labelPosition": {
            "x": 1029,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "tickets_ibfk_1",
        "sourceTable": "tickets",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 699.6,
              "y": 406
            },
            {
              "x": 666.4,
              "y": 382
            }
          ],
          "pathData": "M 1098 406.0 C 699.6 406.0, 666.4 382.0, 268 382.0",
          "labelPosition": {
            "x": 282,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "call_records_ibfk_1",
        "sourceTable": "call_records",
        "sourceColumn": "subscription_id",
        "sourceRowIndex": 1,
        "targetTable": "subscriptions",
        "targetColumn": "subscription_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 126
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 126
            },
            {
              "x": 680.4,
              "y": 382
            }
          ],
          "pathData": "M 748 126.0 C 685.6 126.0, 680.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 734,
            "y": 115,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "data_usage_ibfk_1",
        "sourceTable": "data_usage",
        "sourceColumn": "subscription_id",
        "sourceRowIndex": 1,
        "targetTable": "subscriptions",
        "targetColumn": "subscription_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 126
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 867.6,
              "y": 126
            },
            {
              "x": 848.4,
              "y": 382
            }
          ],
          "pathData": "M 1098 126.0 C 867.6 126.0, 848.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 1084,
            "y": 115,
            "anchor": "end"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe customer IDs, customer names, emails, invoice counts, and total amounts for customers whose email ends with '@example.com' and whose customer name begins with 'A'. Considering only 'Postpaid' plans, count distinct 'Paid' invoices in '2025' and sum invoice amounts. Keep customers with at least 3 qualifying invoices and total amount greater than 1200. Sort by total amount descending, then customer_id ascending.",
    "problem": "### Problem Statement\nThe customer IDs, customer names, emails, invoice counts, and total amounts for customers whose email ends with '@example.com' and whose customer name begins with 'A'. Considering only 'Postpaid' plans, count distinct 'Paid' invoices in '2025' and sum invoice amounts. Keep customers with at least 3 qualifying invoices and total amount greater than 1200. Sort by total amount descending, then customer_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `CUSTOMER_ID`, `CUSTOMER_NAME`, `EMAIL`, `INVOICE_COUNT`, `TOTAL_AMOUNT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** STRING PREDICATES & BILLING AGGREGATION\n- The email pattern must match the entire email, ignoring case. The customer-name prefix also ignores case.\n- Use the invoice status 'Paid' and invoice_date; do not substitute payment records.\n- A customer may have multiple subscriptions, including multiple Postpaid subscriptions. Count each invoice once.",
    "notes": [
      "The email pattern must match the entire email, ignoring case. The customer-name prefix also ignores case.",
      "Use the invoice status 'Paid' and invoice_date; do not substitute payment records.",
      "A customer may have multiple subscriptions, including multiple Postpaid subscriptions. Count each invoice once."
    ],
    "starterCode": "",
    "solution": "SELECT\n    c.customer_id AS CUSTOMER_ID,\n    c.customer_name AS CUSTOMER_NAME,\n    c.email AS EMAIL,\n    COUNT(DISTINCT i.invoice_id) AS INVOICE_COUNT,\n    ROUND(SUM(i.amount), 2) AS TOTAL_AMOUNT\nFROM customers c\nJOIN subscriptions s ON c.customer_id = s.customer_id\nJOIN plans p ON s.plan_id = p.plan_id\nJOIN invoices i ON s.subscription_id = i.subscription_id\nWHERE c.email LIKE '%@example.com'\n  AND c.customer_name LIKE 'A%'\n  AND p.plan_type = 'Postpaid'\n  AND i.status = 'Paid'\n  AND i.invoice_date >= '2025-01-01'\n  AND i.invoice_date <= '2025-12-31'\nGROUP BY c.customer_id, c.customer_name, c.email\nHAVING COUNT(DISTINCT i.invoice_id) >= 3\n   AND SUM(i.amount) > 1200\nORDER BY TOTAL_AMOUNT DESC, CUSTOMER_ID ASC;",
    "explanation": "Combines string predicate matching (LIKE 'A%' and LIKE '%@example.com') with plan type filtering ('Postpaid') and invoice status ('Paid' in 2025). Aggregates by subscriber, checking thresholds for count >= 3 and sum > 1200.",
    "expectedColumns": [
      "CUSTOMER_ID",
      "CUSTOMER_NAME",
      "EMAIL",
      "INVOICE_COUNT",
      "TOTAL_AMOUNT"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Beacon Telecom Assessment Sample)",
        "input": {
          "plans": [
            {
              "plan_id": 1,
              "plan_name": "Post50",
              "plan_type": "Postpaid",
              "monthly_charge": 50,
              "data_limit_gb": 50
            },
            {
              "plan_id": 2,
              "plan_name": "Pre20",
              "plan_type": "Prepaid",
              "monthly_charge": 20,
              "data_limit_gb": 10
            }
          ],
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Alice Adams",
              "email": "alice@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            },
            {
              "customer_id": 2,
              "customer_name": "Bob Brown",
              "email": "bob@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            },
            {
              "customer_id": 3,
              "customer_name": "Arthur Dent",
              "email": "arthur@galaxy.org",
              "registration_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "subscriptions": [
            {
              "subscription_id": 101,
              "customer_id": 1,
              "plan_id": 1,
              "phone_number": "555-0101",
              "start_date": "2024-01-01",
              "status": "Active"
            },
            {
              "subscription_id": 102,
              "customer_id": 2,
              "plan_id": 1,
              "phone_number": "555-0102",
              "start_date": "2024-01-01",
              "status": "Active"
            },
            {
              "subscription_id": 103,
              "customer_id": 3,
              "plan_id": 1,
              "phone_number": "555-0103",
              "start_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "invoices": [
            {
              "invoice_id": 1,
              "subscription_id": 101,
              "invoice_number": "INV-1",
              "invoice_date": "2025-01-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 2,
              "subscription_id": 101,
              "invoice_number": "INV-2",
              "invoice_date": "2025-02-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 3,
              "subscription_id": 101,
              "invoice_number": "INV-3",
              "invoice_date": "2025-03-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-04-15"
            },
            {
              "invoice_id": 4,
              "subscription_id": 102,
              "invoice_number": "INV-4",
              "invoice_date": "2025-01-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 5,
              "subscription_id": 102,
              "invoice_number": "INV-5",
              "invoice_date": "2025-02-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 6,
              "subscription_id": 102,
              "invoice_number": "INV-6",
              "invoice_date": "2025-03-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-04-15"
            }
          ]
        },
        "output": [
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Alice Adams",
            "EMAIL": "alice@example.com",
            "INVOICE_COUNT": 3,
            "TOTAL_AMOUNT": 1500
          }
        ],
        "explanation": "Combines string predicate matching (LIKE 'A%' and LIKE '%@example.com') with plan type filtering ('Postpaid') and invoice status ('Paid' in 2025). Aggregates by subscriber, checking thresholds for count >= 3 and sum > 1200."
      }
    ],
    "testCases": [
      {
        "id": "sql-037-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "plans": [
            {
              "plan_id": 1,
              "plan_name": "Post50",
              "plan_type": "Postpaid",
              "monthly_charge": 50,
              "data_limit_gb": 50
            },
            {
              "plan_id": 2,
              "plan_name": "Pre20",
              "plan_type": "Prepaid",
              "monthly_charge": 20,
              "data_limit_gb": 10
            }
          ],
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Alice Adams",
              "email": "alice@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            },
            {
              "customer_id": 2,
              "customer_name": "Bob Brown",
              "email": "bob@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            },
            {
              "customer_id": 3,
              "customer_name": "Arthur Dent",
              "email": "arthur@galaxy.org",
              "registration_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "subscriptions": [
            {
              "subscription_id": 101,
              "customer_id": 1,
              "plan_id": 1,
              "phone_number": "555-0101",
              "start_date": "2024-01-01",
              "status": "Active"
            },
            {
              "subscription_id": 102,
              "customer_id": 2,
              "plan_id": 1,
              "phone_number": "555-0102",
              "start_date": "2024-01-01",
              "status": "Active"
            },
            {
              "subscription_id": 103,
              "customer_id": 3,
              "plan_id": 1,
              "phone_number": "555-0103",
              "start_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "invoices": [
            {
              "invoice_id": 1,
              "subscription_id": 101,
              "invoice_number": "INV-1",
              "invoice_date": "2025-01-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 2,
              "subscription_id": 101,
              "invoice_number": "INV-2",
              "invoice_date": "2025-02-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 3,
              "subscription_id": 101,
              "invoice_number": "INV-3",
              "invoice_date": "2025-03-15",
              "amount": 500,
              "status": "Paid",
              "due_date": "2025-04-15"
            },
            {
              "invoice_id": 4,
              "subscription_id": 102,
              "invoice_number": "INV-4",
              "invoice_date": "2025-01-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 5,
              "subscription_id": 102,
              "invoice_number": "INV-5",
              "invoice_date": "2025-02-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 6,
              "subscription_id": 102,
              "invoice_number": "INV-6",
              "invoice_date": "2025-03-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-04-15"
            }
          ]
        },
        "expected": [
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Alice Adams",
            "EMAIL": "alice@example.com",
            "INVOICE_COUNT": 3,
            "TOTAL_AMOUNT": 1500
          }
        ]
      },
      {
        "id": "sql-037-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "plans": [
            {
              "plan_id": 1,
              "plan_name": "Post50",
              "plan_type": "Postpaid",
              "monthly_charge": 50,
              "data_limit_gb": 50
            }
          ],
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Alice Adams",
              "email": "alice@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "subscriptions": [
            {
              "subscription_id": 101,
              "customer_id": 1,
              "plan_id": 1,
              "phone_number": "555-0101",
              "start_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "invoices": [
            {
              "invoice_id": 1,
              "subscription_id": 101,
              "invoice_number": "INV-1",
              "invoice_date": "2025-01-15",
              "amount": 500,
              "status": "Unpaid",
              "due_date": "2025-02-15"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-037-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "plans": [
            {
              "plan_id": 1,
              "plan_name": "Post50",
              "plan_type": "Postpaid",
              "monthly_charge": 50,
              "data_limit_gb": 50
            }
          ],
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Alice Adams",
              "email": "alice@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            },
            {
              "customer_id": 4,
              "customer_name": "Aaron Burr",
              "email": "aaron@example.com",
              "registration_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "subscriptions": [
            {
              "subscription_id": 101,
              "customer_id": 1,
              "plan_id": 1,
              "phone_number": "555-0101",
              "start_date": "2024-01-01",
              "status": "Active"
            },
            {
              "subscription_id": 104,
              "customer_id": 4,
              "plan_id": 1,
              "phone_number": "555-0104",
              "start_date": "2024-01-01",
              "status": "Active"
            }
          ],
          "invoices": [
            {
              "invoice_id": 1,
              "subscription_id": 101,
              "invoice_number": "INV-1",
              "invoice_date": "2025-01-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 2,
              "subscription_id": 101,
              "invoice_number": "INV-2",
              "invoice_date": "2025-02-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 3,
              "subscription_id": 101,
              "invoice_number": "INV-3",
              "invoice_date": "2025-03-15",
              "amount": 600,
              "status": "Paid",
              "due_date": "2025-04-15"
            },
            {
              "invoice_id": 11,
              "subscription_id": 104,
              "invoice_number": "INV-11",
              "invoice_date": "2025-01-15",
              "amount": 700,
              "status": "Paid",
              "due_date": "2025-02-15"
            },
            {
              "invoice_id": 12,
              "subscription_id": 104,
              "invoice_number": "INV-12",
              "invoice_date": "2025-02-15",
              "amount": 700,
              "status": "Paid",
              "due_date": "2025-03-15"
            },
            {
              "invoice_id": 13,
              "subscription_id": 104,
              "invoice_number": "INV-13",
              "invoice_date": "2025-03-15",
              "amount": 700,
              "status": "Paid",
              "due_date": "2025-04-15"
            }
          ]
        },
        "expected": [
          {
            "CUSTOMER_ID": 4,
            "CUSTOMER_NAME": "Aaron Burr",
            "EMAIL": "aaron@example.com",
            "INVOICE_COUNT": 3,
            "TOTAL_AMOUNT": 2100
          },
          {
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Alice Adams",
            "EMAIL": "alice@example.com",
            "INVOICE_COUNT": 3,
            "TOTAL_AMOUNT": 1800
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "REGEXP",
      "LIKE",
      "GROUP BY",
      "HAVING",
      "COUNT DISTINCT",
      "SUM"
    ],
    "statement": "The customer IDs, customer names, emails, invoice counts, and total amounts for customers whose email ends with '@example.com' and whose customer name begins with 'A'. Considering only 'Postpaid' plans, count distinct 'Paid' invoices in '2025' and sum invoice amounts. Keep customers with at least 3 qualifying invoices and total amount greater than 1200. Sort by total amount descending, then customer_id ascending.",
    "diagramTables": [
      {
        "name": "plans",
        "label": "Plans",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "plan_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "plan_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "plan_type",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "monthly_charge",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "data_limit_gb",
            "type": "INT",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "customers",
        "label": "Customers",
        "x": 48,
        "y": 328,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "registration_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "addresses",
        "label": "Addresses",
        "x": 48,
        "y": 632,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "address_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "postal_code",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "subscriptions",
        "label": "Subscriptions",
        "x": 398,
        "y": 328,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "subscription_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "plan_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "plans.plan_id"
          },
          {
            "name": "phone_number",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "start_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "end_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "devices",
        "label": "Devices",
        "x": 398,
        "y": 632,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "device_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "subscription_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "subscriptions.subscription_id"
          },
          {
            "name": "manufacturer",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "model_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "imei",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "activated_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "invoices",
        "label": "Invoices",
        "x": 748,
        "y": 328,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "subscription_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "subscriptions.subscription_id"
          },
          {
            "name": "invoice_number",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "invoice_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "due_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "payments",
        "label": "Payments",
        "x": 748,
        "y": 632,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "payment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "payment_method",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "tickets",
        "label": "Tickets",
        "x": 1098,
        "y": 328,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "ticket_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "subject",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "priority",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "opened_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "call_records",
        "label": "Call Records",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "call_record_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "subscription_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "subscriptions.subscription_id"
          },
          {
            "name": "called_number",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "call_at",
            "type": "DATETIME",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "duration_seconds",
            "type": "INT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "charge",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "data_usage",
        "label": "Data Usage",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "data_usage_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "subscription_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "subscriptions.subscription_id"
          },
          {
            "name": "usage_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "gigabytes_used",
            "type": "DECIMAL(8,3)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "addresses",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "addresses_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            158,
            632
          ],
          [
            158,
            522
          ],
          [
            117,
            522
          ],
          [
            117,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "subscriptions",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "subscriptions_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            398,
            446.57
          ],
          [
            370,
            446.57
          ],
          [
            370,
            411
          ],
          [
            268,
            411
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "subscriptions",
        "target": "plans",
        "column": "plan_id",
        "targetColumn": "plan_id",
        "constraintName": "subscriptions_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            398,
            400.29
          ],
          [
            370,
            400.29
          ],
          [
            370,
            131
          ],
          [
            268,
            131
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "devices",
        "target": "subscriptions",
        "column": "subscription_id",
        "targetColumn": "subscription_id",
        "constraintName": "devices_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            632
          ],
          [
            508,
            570
          ],
          [
            496.29,
            570
          ],
          [
            496.29,
            542
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "invoices",
        "target": "subscriptions",
        "column": "subscription_id",
        "targetColumn": "subscription_id",
        "constraintName": "invoices_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            408
          ],
          [
            720,
            408
          ],
          [
            720,
            469.71
          ],
          [
            618,
            469.71
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "payments",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "payments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            858,
            632
          ],
          [
            858,
            570
          ],
          [
            885.33,
            570
          ],
          [
            885.33,
            542
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "tickets",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "tickets_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            423
          ],
          [
            1070,
            423
          ],
          [
            1070,
            312
          ],
          [
            296,
            312
          ],
          [
            296,
            382.5
          ],
          [
            268,
            382.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "call_records",
        "target": "subscriptions",
        "column": "subscription_id",
        "targetColumn": "subscription_id",
        "constraintName": "call_records_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            143
          ],
          [
            720,
            143
          ],
          [
            720,
            300
          ],
          [
            543.14,
            300
          ],
          [
            543.14,
            328
          ]
        ],
        "sourceSide": "left",
        "targetSide": "top"
      },
      {
        "source": "data_usage",
        "target": "subscriptions",
        "column": "subscription_id",
        "targetColumn": "subscription_id",
        "constraintName": "data_usage_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            119
          ],
          [
            1070,
            119
          ],
          [
            1070,
            266
          ],
          [
            646,
            266
          ],
          [
            646,
            377.14
          ],
          [
            618,
            377.14
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      }
    ]
  },
  {
    "id": "sql-038",
    "numericId": 38,
    "title": "Top customers within each city",
    "domain": "Summit Marketplace",
    "difficulty": "Hard",
    "duration": 25,
    "category": "DENSE RANKING & WINDOW PARTITIONS",
    "tableSchema": [
      {
        "name": "countries",
        "columns": [
          {
            "name": "country_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "country_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country_code",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "cities",
        "columns": [
          {
            "name": "city_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "city_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "postal_prefix",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "customers",
        "columns": [
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "registration_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "segment",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "sellers",
        "columns": [
          {
            "name": "seller_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "seller_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "city_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "rating",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "joined_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "categories",
        "columns": [
          {
            "name": "category_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "category_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "products",
        "columns": [
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "product_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "category_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "seller_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "list_price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "is_active",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "orders",
        "columns": [
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "order_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "channel",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "order_items",
        "columns": [
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "line_number",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "quantity",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "unit_price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "discount_pct",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "payments",
        "columns": [
          {
            "name": "payment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "reviews",
        "columns": [
          {
            "name": "review_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "customer_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "rating",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "review_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "coupons",
        "columns": [
          {
            "name": "coupon_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "coupon_code",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "discount_pct",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "expiry_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "order_coupons",
        "columns": [
          {
            "name": "order_coupon_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "order_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "coupon_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "discount_amount",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 858
    },
    "connectionLines": [
      {
        "constraintName": "cities_ibfk_1",
        "sourceTable": "cities",
        "sourceColumn": "country_id",
        "sourceRowIndex": 2,
        "targetTable": "countries",
        "targetColumn": "country_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 430
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 430
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 430.0 C 323 430.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "customers_ibfk_1",
        "sourceTable": "customers",
        "sourceColumn": "city_id",
        "sourceRowIndex": 3,
        "targetTable": "cities",
        "targetColumn": "city_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 454
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 454
            },
            {
              "x": 330.4,
              "y": 382
            }
          ],
          "pathData": "M 398 454.0 C 335.6 454.0, 330.4 382.0, 268 382.0",
          "labelPosition": {
            "x": 282,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "sellers_ibfk_1",
        "sourceTable": "sellers",
        "sourceColumn": "city_id",
        "sourceRowIndex": 2,
        "targetTable": "cities",
        "targetColumn": "city_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 710
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 710
            },
            {
              "x": 323,
              "y": 382
            }
          ],
          "pathData": "M 268 710.0 C 323 710.0, 323 382.0, 268 382.0",
          "labelPosition": {
            "x": 329,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "products_ibfk_1",
        "sourceTable": "products",
        "sourceColumn": "category_id",
        "sourceRowIndex": 2,
        "targetTable": "categories",
        "targetColumn": "category_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 150
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 150
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 150.0 C 1030.4 150.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "products_ibfk_2",
        "sourceTable": "products",
        "sourceColumn": "seller_id",
        "sourceRowIndex": 3,
        "targetTable": "sellers",
        "targetColumn": "seller_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 174
          },
          "endPoint": {
            "x": 268,
            "y": 662
          },
          "controlPoints": [
            {
              "x": 517.6,
              "y": 174
            },
            {
              "x": 498.4,
              "y": 662
            }
          ],
          "pathData": "M 748 174.0 C 517.6 174.0, 498.4 662.0, 268 662.0",
          "labelPosition": {
            "x": 734,
            "y": 163,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "orders_ibfk_1",
        "sourceTable": "orders",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 1,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 406
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 406
            },
            {
              "x": 680.4,
              "y": 382
            }
          ],
          "pathData": "M 748 406.0 C 685.6 406.0, 680.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 632,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "order_items_ibfk_1",
        "sourceTable": "order_items",
        "sourceColumn": "order_id",
        "sourceRowIndex": 0,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 662
          },
          "endPoint": {
            "x": 748,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 662
            },
            {
              "x": 685.6,
              "y": 382
            }
          ],
          "pathData": "M 618 662.0 C 680.4 662.0, 685.6 382.0, 748 382.0",
          "labelPosition": {
            "x": 734,
            "y": 371,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "order_items_ibfk_2",
        "sourceTable": "order_items",
        "sourceColumn": "product_id",
        "sourceRowIndex": 2,
        "targetTable": "products",
        "targetColumn": "product_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 710
          },
          "endPoint": {
            "x": 748,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 710
            },
            {
              "x": 685.6,
              "y": 102
            }
          ],
          "pathData": "M 618 710.0 C 680.4 710.0, 685.6 102.0, 748 102.0",
          "labelPosition": {
            "x": 734,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "payments_ibfk_1",
        "sourceTable": "payments",
        "sourceColumn": "order_id",
        "sourceRowIndex": 1,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 686
          },
          "endPoint": {
            "x": 968,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 686
            },
            {
              "x": 1023,
              "y": 382
            }
          ],
          "pathData": "M 968 686.0 C 1023 686.0, 1023 382.0, 968 382.0",
          "labelPosition": {
            "x": 1029,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "reviews_ibfk_1",
        "sourceTable": "reviews",
        "sourceColumn": "product_id",
        "sourceRowIndex": 1,
        "targetTable": "products",
        "targetColumn": "product_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 126
          },
          "endPoint": {
            "x": 748,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 126
            },
            {
              "x": 685.6,
              "y": 102
            }
          ],
          "pathData": "M 618 126.0 C 680.4 126.0, 685.6 102.0, 748 102.0",
          "labelPosition": {
            "x": 734,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "reviews_ibfk_2",
        "sourceTable": "reviews",
        "sourceColumn": "customer_id",
        "sourceRowIndex": 2,
        "targetTable": "customers",
        "targetColumn": "customer_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 150
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 150
            },
            {
              "x": 673,
              "y": 382
            }
          ],
          "pathData": "M 618 150.0 C 673 150.0, 673 382.0, 618 382.0",
          "labelPosition": {
            "x": 679,
            "y": 139,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "order_coupons_ibfk_1",
        "sourceTable": "order_coupons",
        "sourceColumn": "order_id",
        "sourceRowIndex": 1,
        "targetTable": "orders",
        "targetColumn": "order_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 406
          },
          "endPoint": {
            "x": 968,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 1035.6,
              "y": 406
            },
            {
              "x": 1030.4,
              "y": 382
            }
          ],
          "pathData": "M 1098 406.0 C 1035.6 406.0, 1030.4 382.0, 968 382.0",
          "labelPosition": {
            "x": 982,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "order_coupons_ibfk_2",
        "sourceTable": "order_coupons",
        "sourceColumn": "coupon_id",
        "sourceRowIndex": 2,
        "targetTable": "coupons",
        "targetColumn": "coupon_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1318,
            "y": 430
          },
          "endPoint": {
            "x": 1318,
            "y": 662
          },
          "controlPoints": [
            {
              "x": 1373,
              "y": 430
            },
            {
              "x": 1373,
              "y": 662
            }
          ],
          "pathData": "M 1318 430.0 C 1373 430.0, 1373 662.0, 1318 662.0",
          "labelPosition": {
            "x": 1379,
            "y": 419,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe city names, customer IDs, customer names, order counts, net sales, and dense customer ranks for customers with at least 2 distinct 'Completed' orders in '2025'. Rank customers within each city by net sales using dense ranking, and return all customers tied within the top 3 ranks in their city. Sort by city name ascending, customer rank ascending, then customer_id ascending.",
    "problem": "### Problem Statement\nThe city names, customer IDs, customer names, order counts, net sales, and dense customer ranks for customers with at least 2 distinct 'Completed' orders in '2025'. Rank customers within each city by net sales using dense ranking, and return all customers tied within the top 3 ranks in their city. Sort by city name ascending, customer rank ascending, then customer_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `CITY_NAME`, `CUSTOMER_ID`, `CUSTOMER_NAME`, `ORDER_COUNT`, `NET_SALES`, `CUSTOMER_RANK`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** DENSE RANKING & WINDOW PARTITIONS\n- City means the customer’s registered city, not the seller’s city.\n- The primary key of order_items is (order_id, line_number). Use its recorded unit_price and discount_pct.\n- Ignore order_coupons for this calculation; net sales are defined solely by the stated order-item formula.\n- Dense ranking assigns equal net sales the same rank and uses consecutive ranks for distinct totals. Apply the order-count threshold before ranking.",
    "notes": [
      "City means the customer’s registered city, not the seller’s city.",
      "The primary key of order_items is (order_id, line_number). Use its recorded unit_price and discount_pct.",
      "Ignore order_coupons for this calculation; net sales are defined solely by the stated order-item formula.",
      "Dense ranking assigns equal net sales the same rank and uses consecutive ranks for distinct totals. Apply the order-count threshold before ranking."
    ],
    "starterCode": "",
    "solution": "WITH customer_sales AS (\n    SELECT\n        ct.city_name AS CITY_NAME,\n        c.customer_id AS CUSTOMER_ID,\n        c.customer_name AS CUSTOMER_NAME,\n        COUNT(DISTINCT o.order_id) AS ORDER_COUNT,\n        ROUND(SUM(oi.quantity * oi.unit_price * (1 - oi.discount_pct / 100.0)), 2) AS NET_SALES,\n        DENSE_RANK() OVER (\n            PARTITION BY ct.city_name\n            ORDER BY SUM(oi.quantity * oi.unit_price * (1 - oi.discount_pct / 100.0)) DESC\n        ) AS CUSTOMER_RANK\n    FROM cities ct\n    JOIN customers c ON ct.city_id = c.city_id\n    JOIN orders o ON c.customer_id = o.customer_id\n    JOIN order_items oi ON o.order_id = oi.order_id\n    WHERE o.status = 'Completed'\n      AND o.order_date >= '2025-01-01'\n      AND o.order_date <= '2025-12-31'\n    GROUP BY ct.city_name, c.customer_id, c.customer_name\n    HAVING COUNT(DISTINCT o.order_id) >= 2\n)\nSELECT\n    CITY_NAME,\n    CUSTOMER_ID,\n    CUSTOMER_NAME,\n    ORDER_COUNT,\n    NET_SALES,\n    CUSTOMER_RANK\nFROM customer_sales\nWHERE CUSTOMER_RANK <= 3\nORDER BY CITY_NAME ASC, CUSTOMER_RANK ASC, CUSTOMER_ID ASC;",
    "explanation": "Uses DENSE_RANK() OVER (PARTITION BY city_name ORDER BY net_sales DESC) on qualifying customers with at least 2 completed orders. Filters in the outer query for rank <= 3, accurately preserving ties across distinct ranking partitions.",
    "expectedColumns": [
      "CITY_NAME",
      "CUSTOMER_ID",
      "CUSTOMER_NAME",
      "ORDER_COUNT",
      "NET_SALES",
      "CUSTOMER_RANK"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Summit Marketplace Assessment Sample)",
        "input": {
          "cities": [
            {
              "city_id": 1,
              "city_name": "New York",
              "country_id": 1,
              "postal_prefix": "100"
            },
            {
              "city_id": 2,
              "city_name": "San Francisco",
              "country_id": 1,
              "postal_prefix": "941"
            }
          ],
          "customers": [
            {
              "customer_id": 101,
              "customer_name": "John Miller",
              "city_id": 1,
              "email": "jm@ny.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 102,
              "customer_name": "Sara Connor",
              "city_id": 1,
              "email": "sc@ny.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 103,
              "customer_name": "Tony Stark",
              "city_id": 1,
              "email": "ts@ny.com",
              "registration_date": "2024-01-01",
              "segment": "VIP"
            },
            {
              "customer_id": 201,
              "customer_name": "Bruce Wayne",
              "city_id": 2,
              "email": "bw@sf.com",
              "registration_date": "2024-01-01",
              "segment": "VIP"
            },
            {
              "customer_id": 202,
              "customer_name": "Clark Kent",
              "city_id": 2,
              "email": "ck@sf.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 101,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 2,
              "customer_id": 101,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 3,
              "customer_id": 102,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 4,
              "customer_id": 102,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 5,
              "customer_id": 103,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 6,
              "customer_id": 103,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 7,
              "customer_id": 201,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 8,
              "customer_id": 201,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 9,
              "customer_id": 202,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 10,
              "customer_id": 202,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 2,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 3,
              "line_number": 1,
              "product_id": 1,
              "quantity": 3,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 4,
              "line_number": 1,
              "product_id": 1,
              "quantity": 3,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 5,
              "line_number": 1,
              "product_id": 1,
              "quantity": 5,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 6,
              "line_number": 1,
              "product_id": 1,
              "quantity": 5,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 7,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 8,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 9,
              "line_number": 1,
              "product_id": 1,
              "quantity": 4,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 10,
              "line_number": 1,
              "product_id": 1,
              "quantity": 4,
              "unit_price": 500,
              "discount_pct": 0
            }
          ]
        },
        "output": [
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 103,
            "CUSTOMER_NAME": "Tony Stark",
            "ORDER_COUNT": 2,
            "NET_SALES": 5000,
            "CUSTOMER_RANK": 1
          },
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 102,
            "CUSTOMER_NAME": "Sara Connor",
            "ORDER_COUNT": 2,
            "NET_SALES": 3000,
            "CUSTOMER_RANK": 2
          },
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 101,
            "CUSTOMER_NAME": "John Miller",
            "ORDER_COUNT": 2,
            "NET_SALES": 2000,
            "CUSTOMER_RANK": 3
          },
          {
            "CITY_NAME": "San Francisco",
            "CUSTOMER_ID": 201,
            "CUSTOMER_NAME": "Bruce Wayne",
            "ORDER_COUNT": 2,
            "NET_SALES": 10000,
            "CUSTOMER_RANK": 1
          },
          {
            "CITY_NAME": "San Francisco",
            "CUSTOMER_ID": 202,
            "CUSTOMER_NAME": "Clark Kent",
            "ORDER_COUNT": 2,
            "NET_SALES": 4000,
            "CUSTOMER_RANK": 2
          }
        ],
        "explanation": "Uses DENSE_RANK() OVER (PARTITION BY city_name ORDER BY net_sales DESC) on qualifying customers with at least 2 completed orders. Filters in the outer query for rank <= 3, accurately preserving ties across distinct ranking partitions."
      }
    ],
    "testCases": [
      {
        "id": "sql-038-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "cities": [
            {
              "city_id": 1,
              "city_name": "New York",
              "country_id": 1,
              "postal_prefix": "100"
            },
            {
              "city_id": 2,
              "city_name": "San Francisco",
              "country_id": 1,
              "postal_prefix": "941"
            }
          ],
          "customers": [
            {
              "customer_id": 101,
              "customer_name": "John Miller",
              "city_id": 1,
              "email": "jm@ny.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 102,
              "customer_name": "Sara Connor",
              "city_id": 1,
              "email": "sc@ny.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 103,
              "customer_name": "Tony Stark",
              "city_id": 1,
              "email": "ts@ny.com",
              "registration_date": "2024-01-01",
              "segment": "VIP"
            },
            {
              "customer_id": 201,
              "customer_name": "Bruce Wayne",
              "city_id": 2,
              "email": "bw@sf.com",
              "registration_date": "2024-01-01",
              "segment": "VIP"
            },
            {
              "customer_id": 202,
              "customer_name": "Clark Kent",
              "city_id": 2,
              "email": "ck@sf.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 101,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 2,
              "customer_id": 101,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 3,
              "customer_id": 102,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 4,
              "customer_id": 102,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 5,
              "customer_id": 103,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 6,
              "customer_id": 103,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 7,
              "customer_id": 201,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 8,
              "customer_id": 201,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 9,
              "customer_id": 202,
              "order_date": "2025-02-01",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 10,
              "customer_id": 202,
              "order_date": "2025-03-01",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 2,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 3,
              "line_number": 1,
              "product_id": 1,
              "quantity": 3,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 4,
              "line_number": 1,
              "product_id": 1,
              "quantity": 3,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 5,
              "line_number": 1,
              "product_id": 1,
              "quantity": 5,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 6,
              "line_number": 1,
              "product_id": 1,
              "quantity": 5,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 7,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 8,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 9,
              "line_number": 1,
              "product_id": 1,
              "quantity": 4,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "order_id": 10,
              "line_number": 1,
              "product_id": 1,
              "quantity": 4,
              "unit_price": 500,
              "discount_pct": 0
            }
          ]
        },
        "expected": [
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 103,
            "CUSTOMER_NAME": "Tony Stark",
            "ORDER_COUNT": 2,
            "NET_SALES": 5000,
            "CUSTOMER_RANK": 1
          },
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 102,
            "CUSTOMER_NAME": "Sara Connor",
            "ORDER_COUNT": 2,
            "NET_SALES": 3000,
            "CUSTOMER_RANK": 2
          },
          {
            "CITY_NAME": "New York",
            "CUSTOMER_ID": 101,
            "CUSTOMER_NAME": "John Miller",
            "ORDER_COUNT": 2,
            "NET_SALES": 2000,
            "CUSTOMER_RANK": 3
          },
          {
            "CITY_NAME": "San Francisco",
            "CUSTOMER_ID": 201,
            "CUSTOMER_NAME": "Bruce Wayne",
            "ORDER_COUNT": 2,
            "NET_SALES": 10000,
            "CUSTOMER_RANK": 1
          },
          {
            "CITY_NAME": "San Francisco",
            "CUSTOMER_ID": 202,
            "CUSTOMER_NAME": "Clark Kent",
            "ORDER_COUNT": 2,
            "NET_SALES": 4000,
            "CUSTOMER_RANK": 2
          }
        ]
      },
      {
        "id": "sql-038-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "cities": [
            {
              "city_id": 1,
              "city_name": "New York",
              "country_id": 1,
              "postal_prefix": "100"
            }
          ],
          "customers": [
            {
              "customer_id": 101,
              "customer_name": "John Miller",
              "city_id": 1,
              "email": "jm@ny.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            }
          ],
          "orders": [
            {
              "order_id": 1,
              "customer_id": 101,
              "order_date": "2025-02-01",
              "status": "Cancelled",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 1,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 500,
              "discount_pct": 0
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-038-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "cities": [
            {
              "city_id": 1,
              "city_name": "Chicago",
              "country_id": 1,
              "postal_prefix": "606"
            }
          ],
          "customers": [
            {
              "customer_id": 1,
              "customer_name": "Cust 1",
              "city_id": 1,
              "email": "c1@chi.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 2,
              "customer_name": "Cust 2",
              "city_id": 1,
              "email": "c2@chi.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 3,
              "customer_name": "Cust 3",
              "city_id": 1,
              "email": "c3@chi.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            },
            {
              "customer_id": 4,
              "customer_name": "Cust 4",
              "city_id": 1,
              "email": "c4@chi.com",
              "registration_date": "2024-01-01",
              "segment": "Retail"
            }
          ],
          "orders": [
            {
              "order_id": 101,
              "customer_id": 1,
              "order_date": "2025-01-10",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 102,
              "customer_id": 1,
              "order_date": "2025-01-20",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 201,
              "customer_id": 2,
              "order_date": "2025-01-10",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 202,
              "customer_id": 2,
              "order_date": "2025-01-20",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 301,
              "customer_id": 3,
              "order_date": "2025-01-10",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 302,
              "customer_id": 3,
              "order_date": "2025-01-20",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 401,
              "customer_id": 4,
              "order_date": "2025-01-10",
              "status": "Completed",
              "channel": "Web"
            },
            {
              "order_id": 402,
              "customer_id": 4,
              "order_date": "2025-01-20",
              "status": "Completed",
              "channel": "Web"
            }
          ],
          "order_items": [
            {
              "order_id": 101,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 102,
              "line_number": 1,
              "product_id": 1,
              "quantity": 10,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 201,
              "line_number": 1,
              "product_id": 1,
              "quantity": 8,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 202,
              "line_number": 1,
              "product_id": 1,
              "quantity": 8,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 301,
              "line_number": 1,
              "product_id": 1,
              "quantity": 6,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 302,
              "line_number": 1,
              "product_id": 1,
              "quantity": 6,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 401,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 100,
              "discount_pct": 0
            },
            {
              "order_id": 402,
              "line_number": 1,
              "product_id": 1,
              "quantity": 2,
              "unit_price": 100,
              "discount_pct": 0
            }
          ]
        },
        "expected": [
          {
            "CITY_NAME": "Chicago",
            "CUSTOMER_ID": 1,
            "CUSTOMER_NAME": "Cust 1",
            "ORDER_COUNT": 2,
            "NET_SALES": 2000,
            "CUSTOMER_RANK": 1
          },
          {
            "CITY_NAME": "Chicago",
            "CUSTOMER_ID": 2,
            "CUSTOMER_NAME": "Cust 2",
            "ORDER_COUNT": 2,
            "NET_SALES": 1600,
            "CUSTOMER_RANK": 2
          },
          {
            "CITY_NAME": "Chicago",
            "CUSTOMER_ID": 3,
            "CUSTOMER_NAME": "Cust 3",
            "ORDER_COUNT": 2,
            "NET_SALES": 1200,
            "CUSTOMER_RANK": 3
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "GROUP BY",
      "HAVING",
      "Subqueries",
      "Dense ranking",
      "Tie handling",
      "ORDER BY"
    ],
    "statement": "The city names, customer IDs, customer names, order counts, net sales, and dense customer ranks for customers with at least 2 distinct 'Completed' orders in '2025'. Rank customers within each city by net sales using dense ranking, and return all customers tied within the top 3 ranks in their city. Sort by city name ascending, customer rank ascending, then customer_id ascending.",
    "diagramTables": [
      {
        "name": "countries",
        "label": "Countries",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "country_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "country_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country_code",
            "type": "CHAR(2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "cities",
        "label": "Cities",
        "x": 48,
        "y": 328,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "city_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "city_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "countries.country_id"
          },
          {
            "name": "postal_prefix",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "customers",
        "label": "Customers",
        "x": 398,
        "y": 328,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "cities.city_id"
          },
          {
            "name": "registration_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "segment",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "sellers",
        "label": "Sellers",
        "x": 48,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "seller_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "seller_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "city_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "cities.city_id"
          },
          {
            "name": "rating",
            "type": "DECIMAL(3,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "joined_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "categories",
        "label": "Categories",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "category_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "products",
        "label": "Products",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "categories.category_id"
          },
          {
            "name": "seller_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "sellers.seller_id"
          },
          {
            "name": "list_price",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_active",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "orders",
        "label": "Orders",
        "x": 748,
        "y": 328,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "order_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "channel",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "order_items",
        "label": "Order Items",
        "x": 398,
        "y": 608,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "line_number",
            "type": "SMALLINT",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "products.product_id"
          },
          {
            "name": "quantity",
            "type": "INT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "unit_price",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "discount_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "payments",
        "label": "Payments",
        "x": 748,
        "y": 608,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "payment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "reviews",
        "label": "Reviews",
        "x": 398,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "review_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "product_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "products.product_id"
          },
          {
            "name": "customer_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "customers.customer_id"
          },
          {
            "name": "rating",
            "type": "TINYINT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "review_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "coupons",
        "label": "Coupons",
        "x": 1098,
        "y": 608,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "coupon_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "coupon_code",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "discount_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "expiry_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "order_coupons",
        "label": "Order Coupons",
        "x": 1098,
        "y": 328,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "order_coupon_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "order_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "orders.order_id"
          },
          {
            "name": "coupon_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "coupons.coupon_id"
          },
          {
            "name": "discount_amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "cities",
        "target": "countries",
        "column": "country_id",
        "targetColumn": "country_id",
        "constraintName": "cities_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            117,
            328
          ],
          [
            117,
            194
          ],
          [
            158,
            194
          ],
          [
            158,
            166
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "customers",
        "target": "cities",
        "column": "city_id",
        "targetColumn": "city_id",
        "constraintName": "customers_ibfk_1",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            398,
            423
          ],
          [
            370,
            423
          ],
          [
            370,
            399
          ],
          [
            268,
            399
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "sellers",
        "target": "cities",
        "column": "city_id",
        "targetColumn": "city_id",
        "constraintName": "sellers_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            130.67,
            608
          ],
          [
            130.67,
            498
          ],
          [
            158,
            498
          ],
          [
            158,
            470
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "products",
        "target": "categories",
        "column": "category_id",
        "targetColumn": "category_id",
        "constraintName": "products_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            101.6
          ],
          [
            996,
            101.6
          ],
          [
            996,
            107
          ],
          [
            1098,
            107
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "products",
        "target": "sellers",
        "column": "seller_id",
        "targetColumn": "seller_id",
        "constraintName": "products_ibfk_2",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            808.8,
            238
          ],
          [
            808.8,
            266
          ],
          [
            296,
            266
          ],
          [
            296,
            672
          ],
          [
            268,
            672
          ]
        ],
        "sourceSide": "bottom",
        "targetSide": "right"
      },
      {
        "source": "orders",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "orders_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            399.6
          ],
          [
            720,
            399.6
          ],
          [
            720,
            457.5
          ],
          [
            618,
            457.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "order_items",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "order_items_ibfk_1",
        "sourceIndex": 0,
        "targetIndex": 0,
        "points": [
          [
            618,
            726
          ],
          [
            646,
            726
          ],
          [
            646,
            445.2
          ],
          [
            748,
            445.2
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "order_items",
        "target": "products",
        "column": "product_id",
        "targetColumn": "product_id",
        "constraintName": "order_items_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            535.33,
            608
          ],
          [
            535.33,
            580
          ],
          [
            634,
            580
          ],
          [
            634,
            184.4
          ],
          [
            748,
            184.4
          ]
        ],
        "sourceSide": "top",
        "targetSide": "left"
      },
      {
        "source": "payments",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "payments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            858,
            608
          ],
          [
            858,
            522
          ],
          [
            874.4,
            522
          ],
          [
            874.4,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "reviews",
        "target": "products",
        "column": "product_id",
        "targetColumn": "product_id",
        "constraintName": "reviews_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            618,
            112
          ],
          [
            646,
            112
          ],
          [
            646,
            129.2
          ],
          [
            748,
            129.2
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "reviews",
        "target": "customers",
        "column": "customer_id",
        "targetColumn": "customer_id",
        "constraintName": "reviews_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            480.67,
            214
          ],
          [
            480.67,
            300
          ],
          [
            508,
            300
          ],
          [
            508,
            328
          ]
        ],
        "sourceSide": "bottom",
        "targetSide": "top"
      },
      {
        "source": "order_coupons",
        "target": "orders",
        "column": "order_id",
        "targetColumn": "order_id",
        "constraintName": "order_coupons_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            384
          ],
          [
            1070,
            384
          ],
          [
            1070,
            376.8
          ],
          [
            968,
            376.8
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "order_coupons",
        "target": "coupons",
        "column": "coupon_id",
        "targetColumn": "coupon_id",
        "constraintName": "order_coupons_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            1235.33,
            470
          ],
          [
            1235.33,
            580
          ],
          [
            1208,
            580
          ],
          [
            1208,
            608
          ]
        ],
        "sourceSide": "bottom",
        "targetSide": "top"
      }
    ]
  },
  {
    "id": "sql-039",
    "numericId": 39,
    "title": "Invoice payment reconciliation",
    "domain": "Clearview Billing",
    "difficulty": "Hard",
    "duration": 25,
    "category": "RECONCILIATION & NULL-SAFE AGGREGATION",
    "tableSchema": [
      {
        "name": "clients",
        "columns": [
          {
            "name": "client_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "client_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "joined_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "contracts",
        "columns": [
          {
            "name": "contract_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "client_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "contract_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "contract_value",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "invoices",
        "columns": [
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "contract_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "invoice_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "invoice_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "due_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "currency",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "invoice_items",
        "columns": [
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "line_number",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "quantity",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "unit_price",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "discount_pct",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "payments",
        "columns": [
          {
            "name": "payment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "client_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "payment_method",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "payment_allocations",
        "columns": [
          {
            "name": "allocation_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "payment_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "credit_notes",
        "columns": [
          {
            "name": "credit_note_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "issue_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "reason",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "tax_rates",
        "columns": [
          {
            "name": "tax_rate_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "tax_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "rate_pct",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "effective_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "invoice_taxes",
        "columns": [
          {
            "name": "invoice_tax_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "tax_rate_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "taxable_amount",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "tax_amount",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "reminders",
        "columns": [
          {
            "name": "reminder_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "sent_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "channel",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "response_status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "disputes",
        "columns": [
          {
            "name": "dispute_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "invoice_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "opened_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "closed_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "reason",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 882
    },
    "connectionLines": [
      {
        "constraintName": "contracts_ibfk_1",
        "sourceTable": "contracts",
        "sourceColumn": "client_id",
        "sourceRowIndex": 1,
        "targetTable": "clients",
        "targetColumn": "client_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 406
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 406.0 C 323 406.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "invoices_ibfk_1",
        "sourceTable": "invoices",
        "sourceColumn": "contract_id",
        "sourceRowIndex": 1,
        "targetTable": "contracts",
        "targetColumn": "contract_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 406
          },
          "endPoint": {
            "x": 268,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 406
            },
            {
              "x": 330.4,
              "y": 382
            }
          ],
          "pathData": "M 398 406.0 C 335.6 406.0, 330.4 382.0, 268 382.0",
          "labelPosition": {
            "x": 282,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "invoice_items_ibfk_1",
        "sourceTable": "invoice_items",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 0,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 686
          },
          "endPoint": {
            "x": 398,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 686
            },
            {
              "x": 335.6,
              "y": 382
            }
          ],
          "pathData": "M 268 686.0 C 330.4 686.0, 335.6 382.0, 398 382.0",
          "labelPosition": {
            "x": 384,
            "y": 371,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "payments_ibfk_1",
        "sourceTable": "payments",
        "sourceColumn": "client_id",
        "sourceRowIndex": 1,
        "targetTable": "clients",
        "targetColumn": "client_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 126
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 517.6,
              "y": 126
            },
            {
              "x": 498.4,
              "y": 102
            }
          ],
          "pathData": "M 748 126.0 C 517.6 126.0, 498.4 102.0, 268 102.0",
          "labelPosition": {
            "x": 282,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "payment_allocations_ibfk_1",
        "sourceTable": "payment_allocations",
        "sourceColumn": "payment_id",
        "sourceRowIndex": 1,
        "targetTable": "payments",
        "targetColumn": "payment_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 406
          },
          "endPoint": {
            "x": 968,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 406
            },
            {
              "x": 1023,
              "y": 102
            }
          ],
          "pathData": "M 968 406.0 C 1023 406.0, 1023 102.0, 968 102.0",
          "labelPosition": {
            "x": 1029,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "payment_allocations_ibfk_2",
        "sourceTable": "payment_allocations",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 2,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 430
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 430
            },
            {
              "x": 680.4,
              "y": 382
            }
          ],
          "pathData": "M 748 430.0 C 685.6 430.0, 680.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 632,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "credit_notes_ibfk_1",
        "sourceTable": "credit_notes",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 1,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 710
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 710
            },
            {
              "x": 673,
              "y": 382
            }
          ],
          "pathData": "M 618 710.0 C 673 710.0, 673 382.0, 618 382.0",
          "labelPosition": {
            "x": 679,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "invoice_taxes_ibfk_1",
        "sourceTable": "invoice_taxes",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 1,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 710
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 710
            },
            {
              "x": 680.4,
              "y": 382
            }
          ],
          "pathData": "M 748 710.0 C 685.6 710.0, 680.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 632,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "invoice_taxes_ibfk_2",
        "sourceTable": "invoice_taxes",
        "sourceColumn": "tax_rate_id",
        "sourceRowIndex": 2,
        "targetTable": "tax_rates",
        "targetColumn": "tax_rate_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 734
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 734
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 734.0 C 1030.4 734.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "reminders_ibfk_1",
        "sourceTable": "reminders",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 1,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 406
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 867.6,
              "y": 406
            },
            {
              "x": 848.4,
              "y": 382
            }
          ],
          "pathData": "M 1098 406.0 C 867.6 406.0, 848.4 382.0, 618 382.0",
          "labelPosition": {
            "x": 632,
            "y": 371,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "disputes_ibfk_1",
        "sourceTable": "disputes",
        "sourceColumn": "invoice_id",
        "sourceRowIndex": 1,
        "targetTable": "invoices",
        "targetColumn": "invoice_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 126
          },
          "endPoint": {
            "x": 618,
            "y": 382
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 126
            },
            {
              "x": 673,
              "y": 382
            }
          ],
          "pathData": "M 618 126.0 C 673 126.0, 673 382.0, 618 382.0",
          "labelPosition": {
            "x": 679,
            "y": 115,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe invoice IDs, invoice numbers, invoice dates, merchandise totals, paid amounts, and outstanding amounts for invoices with status 'Issued' dated in '2025' where merchandise total exceeds paid amount. Treat invoices with no completed payments as having paid amount 0. Sort by outstanding amount descending, then invoice_id ascending, and limit to 10 rows.",
    "problem": "### Problem Statement\nThe invoice IDs, invoice numbers, invoice dates, merchandise totals, paid amounts, and outstanding amounts for invoices with status 'Issued' dated in '2025' where merchandise total exceeds paid amount. Treat invoices with no completed payments as having paid amount 0. Sort by outstanding amount descending, then invoice_id ascending, and limit to 10 rows.\n\n### Requirements:\n- **Expected Output Columns:** `INVOICE_ID`, `INVOICE_NUMBER`, `INVOICE_DATE`, `MERCHANDISE_TOTAL`, `PAID_AMOUNT`, `OUTSTANDING_AMOUNT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** RECONCILIATION & NULL-SAFE AGGREGATION\n- All invoices and monetary amounts in this schema are in USD; currency is USD.\n- Use payment_allocations.amount, not the full payments.amount: one payment may be allocated to several invoices.\n- Merchandise totals and outstanding amounts exclude taxes and credit notes.\n- Compare unrounded amounts; round displayed monetary results to two decimal places.",
    "notes": [
      "All invoices and monetary amounts in this schema are in USD; currency is USD.",
      "Use payment_allocations.amount, not the full payments.amount: one payment may be allocated to several invoices.",
      "Merchandise totals and outstanding amounts exclude taxes and credit notes.",
      "Compare unrounded amounts; round displayed monetary results to two decimal places."
    ],
    "starterCode": "",
    "solution": "WITH item_totals AS (\n    SELECT\n        invoice_id,\n        SUM(quantity * unit_price * (1 - discount_pct / 100.0)) AS merchandise_total\n    FROM invoice_items\n    GROUP BY invoice_id\n),\npaid_totals AS (\n    SELECT\n        pa.invoice_id,\n        SUM(pa.amount) AS paid_amount\n    FROM payment_allocations pa\n    JOIN payments p ON pa.payment_id = p.payment_id\n    WHERE p.status = 'Completed'\n    GROUP BY pa.invoice_id\n)\nSELECT\n    i.invoice_id AS INVOICE_ID,\n    i.invoice_number AS INVOICE_NUMBER,\n    i.invoice_date AS INVOICE_DATE,\n    ROUND(it.merchandise_total, 2) AS MERCHANDISE_TOTAL,\n    ROUND(COALESCE(pt.paid_amount, 0), 2) AS PAID_AMOUNT,\n    ROUND(it.merchandise_total - COALESCE(pt.paid_amount, 0), 2) AS OUTSTANDING_AMOUNT\nFROM invoices i\nJOIN item_totals it ON i.invoice_id = it.invoice_id\nLEFT JOIN paid_totals pt ON i.invoice_id = pt.invoice_id\nWHERE i.status = 'Issued'\n  AND i.invoice_date >= '2025-01-01'\n  AND i.invoice_date <= '2025-12-31'\n  AND it.merchandise_total > COALESCE(pt.paid_amount, 0)\nORDER BY OUTSTANDING_AMOUNT DESC, INVOICE_ID ASC\nLIMIT 10;",
    "explanation": "Reconciles billed merchandise against completed payments using independent aggregation CTEs to prevent fan-out multiplication. Uses COALESCE to default unpaid invoices to 0, filters where merchandise > paid, and extracts top 10 outstanding balances.",
    "expectedColumns": [
      "INVOICE_ID",
      "INVOICE_NUMBER",
      "INVOICE_DATE",
      "MERCHANDISE_TOTAL",
      "PAID_AMOUNT",
      "OUTSTANDING_AMOUNT"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Clearview Billing Assessment Sample)",
        "input": {
          "invoices": [
            {
              "invoice_id": 101,
              "invoice_number": "INV-2025-001",
              "invoice_date": "2025-03-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 102,
              "invoice_number": "INV-2025-002",
              "invoice_date": "2025-04-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 103,
              "invoice_number": "INV-2025-003",
              "invoice_date": "2025-05-01",
              "status": "Paid",
              "currency": "USD"
            }
          ],
          "invoice_items": [
            {
              "invoice_id": 101,
              "line_number": 1,
              "description": "Consulting",
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "invoice_id": 102,
              "line_number": 1,
              "description": "Development",
              "quantity": 20,
              "unit_price": 400,
              "discount_pct": 0
            },
            {
              "invoice_id": 103,
              "line_number": 1,
              "description": "Design",
              "quantity": 10,
              "unit_price": 300,
              "discount_pct": 0
            }
          ],
          "payments": [
            {
              "payment_id": 1,
              "client_id": 1,
              "payment_date": "2025-03-15",
              "amount": 2000,
              "status": "Completed"
            },
            {
              "payment_id": 2,
              "client_id": 1,
              "payment_date": "2025-04-15",
              "amount": 8000,
              "status": "Completed"
            }
          ],
          "payment_allocations": [
            {
              "allocation_id": 1,
              "payment_id": 1,
              "invoice_id": 101,
              "amount": 2000
            }
          ]
        },
        "output": [
          {
            "INVOICE_ID": 102,
            "INVOICE_NUMBER": "INV-2025-002",
            "INVOICE_DATE": "2025-04-01",
            "MERCHANDISE_TOTAL": 8000,
            "PAID_AMOUNT": 0,
            "OUTSTANDING_AMOUNT": 8000
          },
          {
            "INVOICE_ID": 101,
            "INVOICE_NUMBER": "INV-2025-001",
            "INVOICE_DATE": "2025-03-01",
            "MERCHANDISE_TOTAL": 5000,
            "PAID_AMOUNT": 2000,
            "OUTSTANDING_AMOUNT": 3000
          }
        ],
        "explanation": "Reconciles billed merchandise against completed payments using independent aggregation CTEs to prevent fan-out multiplication. Uses COALESCE to default unpaid invoices to 0, filters where merchandise > paid, and extracts top 10 outstanding balances."
      }
    ],
    "testCases": [
      {
        "id": "sql-039-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "invoices": [
            {
              "invoice_id": 101,
              "invoice_number": "INV-2025-001",
              "invoice_date": "2025-03-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 102,
              "invoice_number": "INV-2025-002",
              "invoice_date": "2025-04-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 103,
              "invoice_number": "INV-2025-003",
              "invoice_date": "2025-05-01",
              "status": "Paid",
              "currency": "USD"
            }
          ],
          "invoice_items": [
            {
              "invoice_id": 101,
              "line_number": 1,
              "description": "Consulting",
              "quantity": 10,
              "unit_price": 500,
              "discount_pct": 0
            },
            {
              "invoice_id": 102,
              "line_number": 1,
              "description": "Development",
              "quantity": 20,
              "unit_price": 400,
              "discount_pct": 0
            },
            {
              "invoice_id": 103,
              "line_number": 1,
              "description": "Design",
              "quantity": 10,
              "unit_price": 300,
              "discount_pct": 0
            }
          ],
          "payments": [
            {
              "payment_id": 1,
              "client_id": 1,
              "payment_date": "2025-03-15",
              "amount": 2000,
              "status": "Completed"
            },
            {
              "payment_id": 2,
              "client_id": 1,
              "payment_date": "2025-04-15",
              "amount": 8000,
              "status": "Completed"
            }
          ],
          "payment_allocations": [
            {
              "allocation_id": 1,
              "payment_id": 1,
              "invoice_id": 101,
              "amount": 2000
            }
          ]
        },
        "expected": [
          {
            "INVOICE_ID": 102,
            "INVOICE_NUMBER": "INV-2025-002",
            "INVOICE_DATE": "2025-04-01",
            "MERCHANDISE_TOTAL": 8000,
            "PAID_AMOUNT": 0,
            "OUTSTANDING_AMOUNT": 8000
          },
          {
            "INVOICE_ID": 101,
            "INVOICE_NUMBER": "INV-2025-001",
            "INVOICE_DATE": "2025-03-01",
            "MERCHANDISE_TOTAL": 5000,
            "PAID_AMOUNT": 2000,
            "OUTSTANDING_AMOUNT": 3000
          }
        ]
      },
      {
        "id": "sql-039-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "invoices": [
            {
              "invoice_id": 201,
              "invoice_number": "INV-PAID-01",
              "invoice_date": "2025-01-01",
              "status": "Issued",
              "currency": "USD"
            }
          ],
          "invoice_items": [
            {
              "invoice_id": 201,
              "line_number": 1,
              "description": "Service",
              "quantity": 1,
              "unit_price": 1000,
              "discount_pct": 0
            }
          ],
          "payments": [
            {
              "payment_id": 1,
              "client_id": 1,
              "payment_date": "2025-01-05",
              "amount": 1000,
              "status": "Completed"
            }
          ],
          "payment_allocations": [
            {
              "allocation_id": 1,
              "payment_id": 1,
              "invoice_id": 201,
              "amount": 1000
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-039-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "invoices": [
            {
              "invoice_id": 301,
              "invoice_number": "INV-A",
              "invoice_date": "2025-01-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 302,
              "invoice_number": "INV-B",
              "invoice_date": "2025-02-01",
              "status": "Issued",
              "currency": "USD"
            },
            {
              "invoice_id": 303,
              "invoice_number": "INV-C",
              "invoice_date": "2025-03-01",
              "status": "Issued",
              "currency": "USD"
            }
          ],
          "invoice_items": [
            {
              "invoice_id": 301,
              "line_number": 1,
              "description": "Item 1",
              "quantity": 5,
              "unit_price": 200,
              "discount_pct": 0
            },
            {
              "invoice_id": 302,
              "line_number": 1,
              "description": "Item 2",
              "quantity": 10,
              "unit_price": 300,
              "discount_pct": 0
            },
            {
              "invoice_id": 303,
              "line_number": 1,
              "description": "Item 3",
              "quantity": 15,
              "unit_price": 400,
              "discount_pct": 0
            }
          ],
          "payments": [],
          "payment_allocations": []
        },
        "expected": [
          {
            "INVOICE_ID": 303,
            "INVOICE_NUMBER": "INV-C",
            "INVOICE_DATE": "2025-03-01",
            "MERCHANDISE_TOTAL": 6000,
            "PAID_AMOUNT": 0,
            "OUTSTANDING_AMOUNT": 6000
          },
          {
            "INVOICE_ID": 302,
            "INVOICE_NUMBER": "INV-B",
            "INVOICE_DATE": "2025-02-01",
            "MERCHANDISE_TOTAL": 3000,
            "PAID_AMOUNT": 0,
            "OUTSTANDING_AMOUNT": 3000
          },
          {
            "INVOICE_ID": 301,
            "INVOICE_NUMBER": "INV-A",
            "INVOICE_DATE": "2025-01-01",
            "MERCHANDISE_TOTAL": 1000,
            "PAID_AMOUNT": 0,
            "OUTSTANDING_AMOUNT": 1000
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "Nested subqueries",
      "SUM",
      "NULL handling",
      "Aggregation",
      "ORDER BY",
      "LIMIT"
    ],
    "statement": "The invoice IDs, invoice numbers, invoice dates, merchandise totals, paid amounts, and outstanding amounts for invoices with status 'Issued' dated in '2025' where merchandise total exceeds paid amount. Treat invoices with no completed payments as having paid amount 0. Sort by outstanding amount descending, then invoice_id ascending, and limit to 10 rows.",
    "diagramTables": [
      {
        "name": "clients",
        "label": "Clients",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "client_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "client_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "joined_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "contracts",
        "label": "Contracts",
        "x": 48,
        "y": 328,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "contract_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "client_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "clients.client_id"
          },
          {
            "name": "contract_number",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "start_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "end_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "contract_value",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "invoices",
        "label": "Invoices",
        "x": 398,
        "y": 328,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "contract_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "contracts.contract_id"
          },
          {
            "name": "invoice_number",
            "type": "VARCHAR(30)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "invoice_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "due_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "currency",
            "type": "CHAR(3)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "invoice_items",
        "label": "Invoice Items",
        "x": 48,
        "y": 632,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "line_number",
            "type": "SMALLINT",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "quantity",
            "type": "INT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "unit_price",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "discount_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "payments",
        "label": "Payments",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "client_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "clients.client_id"
          },
          {
            "name": "payment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "payment_method",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "payment_allocations",
        "label": "Payment Allocations",
        "x": 748,
        "y": 328,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "allocation_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "payment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "payments.payment_id"
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "credit_notes",
        "label": "Credit Notes",
        "x": 398,
        "y": 632,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "credit_note_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "issue_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "reason",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "tax_rates",
        "label": "Tax Rates",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "tax_rate_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "tax_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "rate_pct",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "effective_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "invoice_taxes",
        "label": "Invoice Taxes",
        "x": 748,
        "y": 632,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "invoice_tax_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "tax_rate_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "tax_rates.tax_rate_id"
          },
          {
            "name": "taxable_amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "tax_amount",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "reminders",
        "label": "Reminders",
        "x": 1098,
        "y": 328,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "reminder_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "sent_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "channel",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "response_status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "disputes",
        "label": "Disputes",
        "x": 398,
        "y": 48,
        "width": 220,
        "height": 190,
        "columns": [
          {
            "name": "dispute_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "invoice_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "invoices.invoice_id"
          },
          {
            "name": "opened_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "closed_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "reason",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "contracts",
        "target": "clients",
        "column": "client_id",
        "targetColumn": "client_id",
        "constraintName": "contracts_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            130.67,
            328
          ],
          [
            130.67,
            214
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "invoices",
        "target": "contracts",
        "column": "contract_id",
        "targetColumn": "contract_id",
        "constraintName": "invoices_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            398,
            435
          ],
          [
            370,
            435
          ],
          [
            370,
            446
          ],
          [
            268,
            446
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "invoice_items",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "invoice_items_ibfk_1",
        "sourceIndex": 0,
        "targetIndex": 0,
        "points": [
          [
            268,
            727
          ],
          [
            296,
            727
          ],
          [
            296,
            495.75
          ],
          [
            398,
            495.75
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "payments",
        "target": "clients",
        "column": "client_id",
        "targetColumn": "client_id",
        "constraintName": "payments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            120
          ],
          [
            720,
            120
          ],
          [
            720,
            32
          ],
          [
            296,
            32
          ],
          [
            296,
            112
          ],
          [
            268,
            112
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "payment_allocations",
        "target": "payments",
        "column": "payment_id",
        "targetColumn": "payment_id",
        "constraintName": "payment_allocations_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            885.33,
            328
          ],
          [
            885.33,
            238
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "payment_allocations",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "payment_allocations_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            748,
            414
          ],
          [
            720,
            414
          ],
          [
            720,
            394.5
          ],
          [
            618,
            394.5
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "credit_notes",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "credit_notes_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            632
          ],
          [
            508,
            570
          ],
          [
            487.5,
            570
          ],
          [
            487.5,
            542
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "invoice_taxes",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "invoice_taxes_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            830.67,
            632
          ],
          [
            830.67,
            604
          ],
          [
            646,
            604
          ],
          [
            646,
            475.5
          ],
          [
            618,
            475.5
          ]
        ],
        "sourceSide": "top",
        "targetSide": "right"
      },
      {
        "source": "invoice_taxes",
        "target": "tax_rates",
        "column": "tax_rate_id",
        "targetColumn": "tax_rate_id",
        "constraintName": "invoice_taxes_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            968,
            696
          ],
          [
            996,
            696
          ],
          [
            996,
            131
          ],
          [
            1098,
            131
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "reminders",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "reminders_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            411
          ],
          [
            1070,
            411
          ],
          [
            1070,
            300
          ],
          [
            569.5,
            300
          ],
          [
            569.5,
            328
          ]
        ],
        "sourceSide": "left",
        "targetSide": "top"
      },
      {
        "source": "disputes",
        "target": "invoices",
        "column": "invoice_id",
        "targetColumn": "invoice_id",
        "constraintName": "disputes_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            508,
            238
          ],
          [
            508,
            328
          ]
        ],
        "sourceSide": "bottom",
        "targetSide": "top"
      }
    ]
  },
  {
    "id": "sql-040",
    "numericId": 40,
    "title": "Mandatory training coverage",
    "domain": "Nova Learning Institute",
    "difficulty": "Hard",
    "duration": 25,
    "category": "RELATIONAL DIVISION & CURRICULUM COVERAGE",
    "tableSchema": [
      {
        "name": "locations",
        "columns": [
          {
            "name": "location_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "city",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "country",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "office_code",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "departments",
        "columns": [
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "department_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "location_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "training_budget",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "employees",
        "columns": [
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "first_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "last_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "department_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "hire_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "instructors",
        "columns": [
          {
            "name": "instructor_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "instructor_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "email",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "specialization",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "course_categories",
        "columns": [
          {
            "name": "course_category_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "category_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "courses",
        "columns": [
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "course_title",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "course_category_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "instructor_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "duration_hours",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "is_mandatory",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "is_active",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "enrollments",
        "columns": [
          {
            "name": "enrollment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "enrollment_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "completion_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "score",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "certificates",
        "columns": [
          {
            "name": "certificate_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "enrollment_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "certificate_number",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "issued_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "expiry_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "learning_paths",
        "columns": [
          {
            "name": "learning_path_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "path_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "description",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "is_active",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "path_courses",
        "columns": [
          {
            "name": "path_course_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "learning_path_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "course_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "sequence_number",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "path_enrollments",
        "columns": [
          {
            "name": "path_enrollment_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "learning_path_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "assigned_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "status",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "course_feedback",
        "columns": [
          {
            "name": "feedback_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "enrollment_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "rating",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "comments",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "submitted_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "canvas": {
      "width": 1378,
      "height": 858
    },
    "connectionLines": [
      {
        "constraintName": "departments_ibfk_1",
        "sourceTable": "departments",
        "sourceColumn": "location_id",
        "sourceRowIndex": 2,
        "targetTable": "locations",
        "targetColumn": "location_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 382
          },
          "endPoint": {
            "x": 268,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 323,
              "y": 382
            },
            {
              "x": 323,
              "y": 102
            }
          ],
          "pathData": "M 268 382.0 C 323 382.0, 323 102.0, 268 102.0",
          "labelPosition": {
            "x": 329,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "employees_ibfk_1",
        "sourceTable": "employees",
        "sourceColumn": "department_id",
        "sourceRowIndex": 4,
        "targetTable": "departments",
        "targetColumn": "department_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 398,
            "y": 430
          },
          "endPoint": {
            "x": 268,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 335.6,
              "y": 430
            },
            {
              "x": 330.4,
              "y": 334
            }
          ],
          "pathData": "M 398 430.0 C 335.6 430.0, 330.4 334.0, 268 334.0",
          "labelPosition": {
            "x": 282,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "courses_ibfk_1",
        "sourceTable": "courses",
        "sourceColumn": "course_category_id",
        "sourceRowIndex": 2,
        "targetTable": "course_categories",
        "targetColumn": "course_category_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 382
          },
          "endPoint": {
            "x": 968,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1023,
              "y": 382
            },
            {
              "x": 1023,
              "y": 102
            }
          ],
          "pathData": "M 968 382.0 C 1023 382.0, 1023 102.0, 968 102.0",
          "labelPosition": {
            "x": 1029,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "courses_ibfk_2",
        "sourceTable": "courses",
        "sourceColumn": "instructor_id",
        "sourceRowIndex": 3,
        "targetTable": "instructors",
        "targetColumn": "instructor_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 968,
            "y": 406
          },
          "endPoint": {
            "x": 1098,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 1030.4,
              "y": 406
            },
            {
              "x": 1035.6,
              "y": 102
            }
          ],
          "pathData": "M 968 406.0 C 1030.4 406.0, 1035.6 102.0, 1098 102.0",
          "labelPosition": {
            "x": 1084,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "enrollments_ibfk_1",
        "sourceTable": "enrollments",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 1,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 673,
              "y": 662
            },
            {
              "x": 673,
              "y": 334
            }
          ],
          "pathData": "M 618 662.0 C 673 662.0, 673 334.0, 618 334.0",
          "labelPosition": {
            "x": 679,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "enrollments_ibfk_2",
        "sourceTable": "enrollments",
        "sourceColumn": "course_id",
        "sourceRowIndex": 2,
        "targetTable": "courses",
        "targetColumn": "course_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 618,
            "y": 686
          },
          "endPoint": {
            "x": 748,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 680.4,
              "y": 686
            },
            {
              "x": 685.6,
              "y": 334
            }
          ],
          "pathData": "M 618 686.0 C 680.4 686.0, 685.6 334.0, 748 334.0",
          "labelPosition": {
            "x": 734,
            "y": 323,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "certificates_ibfk_1",
        "sourceTable": "certificates",
        "sourceColumn": "enrollment_id",
        "sourceRowIndex": 1,
        "targetTable": "enrollments",
        "targetColumn": "enrollment_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 748,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 638
          },
          "controlPoints": [
            {
              "x": 685.6,
              "y": 662
            },
            {
              "x": 680.4,
              "y": 638
            }
          ],
          "pathData": "M 748 662.0 C 685.6 662.0, 680.4 638.0, 618 638.0",
          "labelPosition": {
            "x": 632,
            "y": 627,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "path_courses_ibfk_1",
        "sourceTable": "path_courses",
        "sourceColumn": "learning_path_id",
        "sourceRowIndex": 1,
        "targetTable": "learning_paths",
        "targetColumn": "learning_path_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 358
          },
          "endPoint": {
            "x": 618,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 867.6,
              "y": 358
            },
            {
              "x": 848.4,
              "y": 102
            }
          ],
          "pathData": "M 1098 358.0 C 867.6 358.0, 848.4 102.0, 618 102.0",
          "labelPosition": {
            "x": 632,
            "y": 91,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "path_courses_ibfk_2",
        "sourceTable": "path_courses",
        "sourceColumn": "course_id",
        "sourceRowIndex": 2,
        "targetTable": "courses",
        "targetColumn": "course_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 382
          },
          "endPoint": {
            "x": 968,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 1035.6,
              "y": 382
            },
            {
              "x": 1030.4,
              "y": 334
            }
          ],
          "pathData": "M 1098 382.0 C 1035.6 382.0, 1030.4 334.0, 968 334.0",
          "labelPosition": {
            "x": 982,
            "y": 323,
            "anchor": "start"
          }
        }
      },
      {
        "constraintName": "path_enrollments_ibfk_1",
        "sourceTable": "path_enrollments",
        "sourceColumn": "learning_path_id",
        "sourceRowIndex": 1,
        "targetTable": "learning_paths",
        "targetColumn": "learning_path_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 662
          },
          "endPoint": {
            "x": 398,
            "y": 102
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 662
            },
            {
              "x": 335.6,
              "y": 102
            }
          ],
          "pathData": "M 268 662.0 C 330.4 662.0, 335.6 102.0, 398 102.0",
          "labelPosition": {
            "x": 384,
            "y": 91,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "path_enrollments_ibfk_2",
        "sourceTable": "path_enrollments",
        "sourceColumn": "employee_id",
        "sourceRowIndex": 2,
        "targetTable": "employees",
        "targetColumn": "employee_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 268,
            "y": 686
          },
          "endPoint": {
            "x": 398,
            "y": 334
          },
          "controlPoints": [
            {
              "x": 330.4,
              "y": 686
            },
            {
              "x": 335.6,
              "y": 334
            }
          ],
          "pathData": "M 268 686.0 C 330.4 686.0, 335.6 334.0, 398 334.0",
          "labelPosition": {
            "x": 384,
            "y": 323,
            "anchor": "end"
          }
        }
      },
      {
        "constraintName": "course_feedback_ibfk_1",
        "sourceTable": "course_feedback",
        "sourceColumn": "enrollment_id",
        "sourceRowIndex": 1,
        "targetTable": "enrollments",
        "targetColumn": "enrollment_id",
        "targetRowIndex": 0,
        "geometry": {
          "startPoint": {
            "x": 1098,
            "y": 662
          },
          "endPoint": {
            "x": 618,
            "y": 638
          },
          "controlPoints": [
            {
              "x": 867.6,
              "y": 662
            },
            {
              "x": 848.4,
              "y": 638
            }
          ],
          "pathData": "M 1098 662.0 C 867.6 662.0, 848.4 638.0, 618 638.0",
          "labelPosition": {
            "x": 632,
            "y": 627,
            "anchor": "start"
          }
        }
      }
    ],
    "howToAttempt": "Write an SQL query to display:\nThe employee IDs, first names, last names, department names, and completed course counts for active employees who completed every currently mandatory, active course at least once with status 'Completed' during '2025'. Sort by department name ascending, then employee_id ascending.",
    "problem": "### Problem Statement\nThe employee IDs, first names, last names, department names, and completed course counts for active employees who completed every currently mandatory, active course at least once with status 'Completed' during '2025'. Sort by department name ascending, then employee_id ascending.\n\n### Requirements:\n- **Expected Output Columns:** `EMPLOYEE_ID`, `FIRST_NAME`, `LAST_NAME`, `DEPARTMENT_NAME`, `COMPLETED_COURSE_COUNT`\n- Review the schema tabs below for all tables, columns, and relations.\n\n### Concept & Hints:\n- **Key SQL Concepts:** RELATIONAL DIVISION & CURRICULUM COVERAGE\n- The required course set is all courses with is_mandatory = TRUE and is_active = TRUE, regardless of learning path or category.\n- An employee may enroll in the same course multiple times. A qualifying completion must satisfy both the status and completion-date conditions.\n- The course catalog contains at least one currently mandatory, active course.\n- Every required course must be covered; completing courses outside that set does not compensate for a missing required course.",
    "notes": [
      "The required course set is all courses with is_mandatory = TRUE and is_active = TRUE, regardless of learning path or category.",
      "An employee may enroll in the same course multiple times. A qualifying completion must satisfy both the status and completion-date conditions.",
      "The course catalog contains at least one currently mandatory, active course.",
      "Every required course must be covered; completing courses outside that set does not compensate for a missing required course."
    ],
    "starterCode": "",
    "solution": "SELECT\n    e.employee_id AS EMPLOYEE_ID,\n    e.first_name AS FIRST_NAME,\n    e.last_name AS LAST_NAME,\n    d.department_name AS DEPARTMENT_NAME,\n    COUNT(DISTINCT c.course_id) AS COMPLETED_COURSE_COUNT\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id\nJOIN enrollments en ON e.employee_id = en.employee_id\nJOIN courses c ON en.course_id = c.course_id\nWHERE e.status = 'Active'\n  AND c.is_mandatory = TRUE\n  AND c.is_active = TRUE\n  AND en.status = 'Completed'\n  AND en.completion_date >= '2025-01-01'\n  AND en.completion_date <= '2025-12-31'\nGROUP BY e.employee_id, e.first_name, e.last_name, d.department_name\nHAVING COUNT(DISTINCT c.course_id) = (\n    SELECT COUNT(*)\n    FROM courses\n    WHERE is_mandatory = TRUE\n      AND is_active = TRUE\n)\nORDER BY DEPARTMENT_NAME ASC, EMPLOYEE_ID ASC;",
    "explanation": "Executes relational division: groups active employees and matches their count of distinct completed mandatory courses against the scalar subquery counting all currently active mandatory courses. Ensures 100% curriculum compliance.",
    "expectedColumns": [
      "EMPLOYEE_ID",
      "FIRST_NAME",
      "LAST_NAME",
      "DEPARTMENT_NAME",
      "COMPLETED_COURSE_COUNT"
    ],
    "orderSensitive": true,
    "examples": [
      {
        "title": "Example 1 (Nova Learning Institute Assessment Sample)",
        "input": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Engineering",
              "location_id": 1,
              "training_budget": 50000
            },
            {
              "department_id": 2,
              "department_name": "Product",
              "location_id": 1,
              "training_budget": 40000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Grace",
              "last_name": "Hopper",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Alan",
              "last_name": "Turing",
              "department_id": 2,
              "hire_date": "2023-01-01",
              "status": "Active"
            },
            {
              "employee_id": 3,
              "first_name": "Ken",
              "last_name": "Thompson",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            }
          ],
          "courses": [
            {
              "course_id": 10,
              "course_title": "Security Essentials",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 4
            },
            {
              "course_id": 20,
              "course_title": "Compliance 101",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 2
            },
            {
              "course_id": 30,
              "course_title": "Design Systems",
              "is_mandatory": 0,
              "is_active": 1,
              "duration_hours": 8
            }
          ],
          "enrollments": [
            {
              "enrollment_id": 1,
              "employee_id": 1,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 2,
              "employee_id": 1,
              "course_id": 20,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-20",
              "status": "Completed"
            },
            {
              "enrollment_id": 3,
              "employee_id": 2,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 4,
              "employee_id": 2,
              "course_id": 30,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-25",
              "status": "Completed"
            },
            {
              "enrollment_id": 5,
              "employee_id": 3,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 6,
              "employee_id": 3,
              "course_id": 20,
              "enrollment_date": "2024-01-01",
              "completion_date": "2024-01-20",
              "status": "Completed"
            }
          ]
        },
        "output": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Grace",
            "LAST_NAME": "Hopper",
            "DEPARTMENT_NAME": "Engineering",
            "COMPLETED_COURSE_COUNT": 2
          }
        ],
        "explanation": "Executes relational division: groups active employees and matches their count of distinct completed mandatory courses against the scalar subquery counting all currently active mandatory courses. Ensures 100% curriculum compliance."
      }
    ],
    "testCases": [
      {
        "id": "sql-040-test-1",
        "name": "Visible Test Case 1 — Assessment Standard Dataset",
        "isHidden": false,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Engineering",
              "location_id": 1,
              "training_budget": 50000
            },
            {
              "department_id": 2,
              "department_name": "Product",
              "location_id": 1,
              "training_budget": 40000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Grace",
              "last_name": "Hopper",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            },
            {
              "employee_id": 2,
              "first_name": "Alan",
              "last_name": "Turing",
              "department_id": 2,
              "hire_date": "2023-01-01",
              "status": "Active"
            },
            {
              "employee_id": 3,
              "first_name": "Ken",
              "last_name": "Thompson",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            }
          ],
          "courses": [
            {
              "course_id": 10,
              "course_title": "Security Essentials",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 4
            },
            {
              "course_id": 20,
              "course_title": "Compliance 101",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 2
            },
            {
              "course_id": 30,
              "course_title": "Design Systems",
              "is_mandatory": 0,
              "is_active": 1,
              "duration_hours": 8
            }
          ],
          "enrollments": [
            {
              "enrollment_id": 1,
              "employee_id": 1,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 2,
              "employee_id": 1,
              "course_id": 20,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-20",
              "status": "Completed"
            },
            {
              "enrollment_id": 3,
              "employee_id": 2,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 4,
              "employee_id": 2,
              "course_id": 30,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-25",
              "status": "Completed"
            },
            {
              "enrollment_id": 5,
              "employee_id": 3,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 6,
              "employee_id": 3,
              "course_id": 20,
              "enrollment_date": "2024-01-01",
              "completion_date": "2024-01-20",
              "status": "Completed"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Grace",
            "LAST_NAME": "Hopper",
            "DEPARTMENT_NAME": "Engineering",
            "COMPLETED_COURSE_COUNT": 2
          }
        ]
      },
      {
        "id": "sql-040-test-2",
        "name": "Hidden Test Case 2 — Boundary & Filter Variance",
        "isHidden": true,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Engineering",
              "location_id": 1,
              "training_budget": 50000
            }
          ],
          "employees": [
            {
              "employee_id": 10,
              "first_name": "Zero",
              "last_name": "Match",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            }
          ],
          "courses": [
            {
              "course_id": 10,
              "course_title": "Security Essentials",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 4
            }
          ],
          "enrollments": [
            {
              "enrollment_id": 1,
              "employee_id": 10,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Enrolled"
            }
          ]
        },
        "expected": []
      },
      {
        "id": "sql-040-test-3",
        "name": "Hidden Test Case 3 — Multi-Record Scaling",
        "isHidden": true,
        "data": {
          "departments": [
            {
              "department_id": 1,
              "department_name": "Engineering",
              "location_id": 1,
              "training_budget": 50000
            },
            {
              "department_id": 2,
              "department_name": "Product",
              "location_id": 1,
              "training_budget": 40000
            }
          ],
          "employees": [
            {
              "employee_id": 1,
              "first_name": "Grace",
              "last_name": "Hopper",
              "department_id": 1,
              "hire_date": "2023-01-01",
              "status": "Active"
            },
            {
              "employee_id": 5,
              "first_name": "Katherine",
              "last_name": "Johnson",
              "department_id": 2,
              "hire_date": "2023-01-01",
              "status": "Active"
            }
          ],
          "courses": [
            {
              "course_id": 10,
              "course_title": "Security Essentials",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 4
            },
            {
              "course_id": 20,
              "course_title": "Compliance 101",
              "is_mandatory": 1,
              "is_active": 1,
              "duration_hours": 2
            }
          ],
          "enrollments": [
            {
              "enrollment_id": 1,
              "employee_id": 1,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 2,
              "employee_id": 1,
              "course_id": 20,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-20",
              "status": "Completed"
            },
            {
              "enrollment_id": 7,
              "employee_id": 5,
              "course_id": 10,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-15",
              "status": "Completed"
            },
            {
              "enrollment_id": 8,
              "employee_id": 5,
              "course_id": 20,
              "enrollment_date": "2025-01-01",
              "completion_date": "2025-01-20",
              "status": "Completed"
            }
          ]
        },
        "expected": [
          {
            "EMPLOYEE_ID": 1,
            "FIRST_NAME": "Grace",
            "LAST_NAME": "Hopper",
            "DEPARTMENT_NAME": "Engineering",
            "COMPLETED_COURSE_COUNT": 2
          },
          {
            "EMPLOYEE_ID": 5,
            "FIRST_NAME": "Katherine",
            "LAST_NAME": "Johnson",
            "DEPARTMENT_NAME": "Product",
            "COMPLETED_COURSE_COUNT": 2
          }
        ]
      }
    ],
    "concepts": [
      "JOIN",
      "Nested subqueries",
      "COUNT DISTINCT",
      "Universal coverage",
      "GROUP BY",
      "HAVING",
      "ORDER BY"
    ],
    "statement": "The employee IDs, first names, last names, department names, and completed course counts for active employees who completed every currently mandatory, active course at least once with status 'Completed' during '2025'. Sort by department name ascending, then employee_id ascending.",
    "diagramTables": [
      {
        "name": "locations",
        "label": "Locations",
        "x": 48,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "location_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "city",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "country",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "office_code",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "departments",
        "label": "Departments",
        "x": 48,
        "y": 280,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "department_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "location_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "locations.location_id"
          },
          {
            "name": "training_budget",
            "type": "DECIMAL(12,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "employees",
        "label": "Employees",
        "x": 398,
        "y": 280,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "first_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "last_name",
            "type": "VARCHAR(50)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "department_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "departments.department_id"
          },
          {
            "name": "hire_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "instructors",
        "label": "Instructors",
        "x": 1098,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "instructor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "instructor_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "email",
            "type": "VARCHAR(120)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "specialization",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "course_categories",
        "label": "Course Categories",
        "x": 748,
        "y": 48,
        "width": 220,
        "height": 118,
        "columns": [
          {
            "name": "course_category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "category_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "courses",
        "label": "Courses",
        "x": 748,
        "y": 280,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "course_title",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "course_category_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "course_categories.course_category_id"
          },
          {
            "name": "instructor_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "instructors.instructor_id"
          },
          {
            "name": "duration_hours",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_mandatory",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_active",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "enrollments",
        "label": "Enrollments",
        "x": 398,
        "y": 584,
        "width": 220,
        "height": 214,
        "columns": [
          {
            "name": "enrollment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "courses.course_id"
          },
          {
            "name": "enrollment_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "completion_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "score",
            "type": "DECIMAL(5,2)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "certificates",
        "label": "Certificates",
        "x": 748,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "certificate_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "enrollment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "enrollments.enrollment_id"
          },
          {
            "name": "certificate_number",
            "type": "VARCHAR(40)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "issued_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "expiry_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "learning_paths",
        "label": "Learning Paths",
        "x": 398,
        "y": 48,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "learning_path_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "path_name",
            "type": "VARCHAR(80)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "description",
            "type": "VARCHAR(255)",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "is_active",
            "type": "BOOLEAN",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "path_courses",
        "label": "Path Courses",
        "x": 1098,
        "y": 280,
        "width": 220,
        "height": 142,
        "columns": [
          {
            "name": "path_course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "learning_path_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "learning_paths.learning_path_id"
          },
          {
            "name": "course_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "courses.course_id"
          },
          {
            "name": "sequence_number",
            "type": "SMALLINT",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "path_enrollments",
        "label": "Path Enrollments",
        "x": 48,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "path_enrollment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "learning_path_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "learning_paths.learning_path_id"
          },
          {
            "name": "employee_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "employees.employee_id"
          },
          {
            "name": "assigned_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "status",
            "type": "VARCHAR(20)",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      },
      {
        "name": "course_feedback",
        "label": "Course Feedback",
        "x": 1098,
        "y": 584,
        "width": 220,
        "height": 166,
        "columns": [
          {
            "name": "feedback_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": true,
            "foreignKey": null
          },
          {
            "name": "enrollment_id",
            "type": "DECIMAL(10,0)",
            "primaryKey": false,
            "foreignKey": "enrollments.enrollment_id"
          },
          {
            "name": "rating",
            "type": "TINYINT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "comments",
            "type": "TEXT",
            "primaryKey": false,
            "foreignKey": null
          },
          {
            "name": "submitted_date",
            "type": "DATE",
            "primaryKey": false,
            "foreignKey": null
          }
        ]
      }
    ],
    "edges": [
      {
        "source": "departments",
        "target": "locations",
        "column": "location_id",
        "targetColumn": "location_id",
        "constraintName": "departments_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            130.67,
            280
          ],
          [
            130.67,
            218
          ],
          [
            158,
            218
          ],
          [
            158,
            190
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "employees",
        "target": "departments",
        "column": "department_id",
        "targetColumn": "department_id",
        "constraintName": "employees_ibfk_1",
        "sourceIndex": 4,
        "targetIndex": 0,
        "points": [
          [
            398,
            346.5
          ],
          [
            370,
            346.5
          ],
          [
            370,
            366
          ],
          [
            268,
            366
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "courses",
        "target": "course_categories",
        "column": "course_category_id",
        "targetColumn": "course_category_id",
        "constraintName": "courses_ibfk_1",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            841.6,
            280
          ],
          [
            841.6,
            194
          ],
          [
            858,
            194
          ],
          [
            858,
            166
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "courses",
        "target": "instructors",
        "column": "instructor_id",
        "targetColumn": "instructor_id",
        "constraintName": "courses_ibfk_2",
        "sourceIndex": 3,
        "targetIndex": 0,
        "points": [
          [
            968,
            370.8
          ],
          [
            996,
            370.8
          ],
          [
            996,
            119
          ],
          [
            1098,
            119
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "enrollments",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "enrollments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            458.8,
            584
          ],
          [
            458.8,
            522
          ],
          [
            549,
            522
          ],
          [
            549,
            494
          ]
        ],
        "sourceSide": "top",
        "targetSide": "bottom"
      },
      {
        "source": "enrollments",
        "target": "courses",
        "column": "course_id",
        "targetColumn": "course_id",
        "constraintName": "enrollments_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            618,
            674.8
          ],
          [
            646,
            674.8
          ],
          [
            646,
            435.6
          ],
          [
            748,
            435.6
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "certificates",
        "target": "enrollments",
        "column": "enrollment_id",
        "targetColumn": "enrollment_id",
        "constraintName": "certificates_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            748,
            667
          ],
          [
            720,
            667
          ],
          [
            720,
            707.2
          ],
          [
            618,
            707.2
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "path_courses",
        "target": "learning_paths",
        "column": "learning_path_id",
        "targetColumn": "learning_path_id",
        "constraintName": "path_courses_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            336
          ],
          [
            1070,
            336
          ],
          [
            1070,
            218
          ],
          [
            535.33,
            218
          ],
          [
            535.33,
            190
          ]
        ],
        "sourceSide": "left",
        "targetSide": "bottom"
      },
      {
        "source": "path_courses",
        "target": "courses",
        "column": "course_id",
        "targetColumn": "course_id",
        "constraintName": "path_courses_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            1098,
            366
          ],
          [
            1070,
            366
          ],
          [
            1070,
            403.2
          ],
          [
            968,
            403.2
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      },
      {
        "source": "path_enrollments",
        "target": "learning_paths",
        "column": "learning_path_id",
        "targetColumn": "learning_path_id",
        "constraintName": "path_enrollments_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            268,
            648
          ],
          [
            296,
            648
          ],
          [
            296,
            134
          ],
          [
            398,
            134
          ]
        ],
        "sourceSide": "right",
        "targetSide": "left"
      },
      {
        "source": "path_enrollments",
        "target": "employees",
        "column": "employee_id",
        "targetColumn": "employee_id",
        "constraintName": "path_enrollments_ibfk_2",
        "sourceIndex": 2,
        "targetIndex": 0,
        "points": [
          [
            185.33,
            584
          ],
          [
            185.33,
            556
          ],
          [
            370,
            556
          ],
          [
            370,
            387
          ],
          [
            398,
            387
          ]
        ],
        "sourceSide": "top",
        "targetSide": "left"
      },
      {
        "source": "course_feedback",
        "target": "enrollments",
        "column": "enrollment_id",
        "targetColumn": "enrollment_id",
        "constraintName": "course_feedback_ibfk_1",
        "sourceIndex": 1,
        "targetIndex": 0,
        "points": [
          [
            1098,
            667
          ],
          [
            1070,
            667
          ],
          [
            1070,
            766
          ],
          [
            646,
            766
          ],
          [
            646,
            739.6
          ],
          [
            618,
            739.6
          ]
        ],
        "sourceSide": "left",
        "targetSide": "right"
      }
    ]
  }
]
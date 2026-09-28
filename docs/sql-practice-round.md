# Accenture SQL Assessment Round â€” Practice Question Bank

> **Extracted from:** `src/data/sqlQuestions.js` (30 questions, 90 test cases) + `src/data/sqlSchemas.js`

---

## Overview

| # | ID | Title | Difficulty | Duration (min) | Category | Tables |
|---|----|-------|-----------|----------------|----------|--------|
| 1 | `sql-001` | Debit transactions between 10,000 and 50,000 | Easy | 15 | FILTERING & PREDICATES | transaction |
| 2 | `sql-002` | Customers whose account type starts with Sa | Medium | 15 | JOINS & RELATIONAL QUERIES | customer, account |
| 3 | `sql-003` | Employees with basic salary above 5,000 | Hard | 15 | JOINS & RELATIONAL QUERIES | employee_info, salary_info, emp_payroll |
| 4 | `sql-004` | Employees with more than 5 years of experience | Easy | 15 | FILTERING & PREDICATES | employee_info |
| 5 | `sql-005` | Wednesday course schedules | Hard | 15 | JOINS & RELATIONAL QUERIES | course, section, schedule |
| 6 | `sql-006` | Books published after 1 January 1940 in category C102 | Medium | 15 | JOINS & RELATIONAL QUERIES | books, book_category |
| 7 | `sql-007` | Categories beginning with M | Easy | 15 | PATTERN MATCHING & STRINGS | channelscategory |
| 8 | `sql-008` | Trains starting with M going to Pune | Medium | 15 | JOINS & RELATIONAL QUERIES | train_details_tbl, train_stations_tbl |
| 9 | `sql-009` | Employees with more than 10 CL or ML leaves | Easy | 15 | FILTERING & PREDICATES | LEAVE_INFO |
| 10 | `sql-010` | Employees working in HR | Hard | 15 | JOINS & RELATIONAL QUERIES | employee_info, department_info, salary_info |
| 11 | `sql-011` | House rent allowance for Bangalore or Cochin departments | Hard | 15 | JOINS & RELATIONAL QUERIES | employee_info, department_info, salary_info |
| 12 | `sql-012` | Average account balance by account type | Hard | 15 | AGGREGATION & GROUPING | Accounts |
| 13 | `sql-013` | Customers with bank balance at least 50,000 | Medium | 15 | JOINS & RELATIONAL QUERIES | customer, account |
| 14 | `sql-014` | Staff with salary greater than 50,000 | Easy | 15 | FILTERING & PREDICATES | staff |
| 15 | `sql-015` | Patients with unpaid bills | Medium | 15 | JOINS & RELATIONAL QUERIES | Patient, Billing |
| 16 | `sql-016` | Flights operated by Singapore Airlines | Hard | 15 | JOINS & RELATIONAL QUERIES | Flight, Airplane, Airline |
| 17 | `sql-017` | Airbus airplanes | Easy | 15 | FILTERING & PREDICATES | Airplane |
| 18 | `sql-018` | Students registered in 2012 | Medium | 15 | JOINS & RELATIONAL QUERIES | student, registration |
| 19 | `sql-019` | Cabin crew with first name A and flight ID ending in 1 | Medium | 15 | JOINS & RELATIONAL QUERIES | cabincrew, flight |
| 20 | `sql-020` | Passengers and baggage on flights to Paris on 2024-02-11 | Medium | 15 | AGGREGATION & GROUPING | flight, boardingpass |
| 21 | `sql-021` | Count products in the Women category | Hard | 15 | AGGREGATION & GROUPING | product, product_category, category |
| 22 | `sql-022` | Trains with speed below 50 | Easy | 15 | FILTERING & PREDICATES | train_details_tbl |
| 23 | `sql-023` | Vegetarian passengers on flight 4 from Hong Kong | Hard | 15 | JOINS & RELATIONAL QUERIES | passenger, boardingpass, flight |
| 24 | `sql-024` | Products currently in the transit hub | Hard | 15 | JOINS & RELATIONAL QUERIES | product, order_item, order_delivery |
| 25 | `sql-025` | Artists whose name contains a number | Medium | 15 | PATTERN MATCHING & STRINGS | artist |
| 26 | `sql-026` | Messages containing Hello | Easy | 15 | PATTERN MATCHING & STRINGS | message |
| 27 | `sql-027` | In-use vehicles whose plate ends in 0 | Medium | 15 | JOINS & RELATIONAL QUERIES | driver, vehicle |
| 28 | `sql-028` | Highly rated drivers with non-cancelled bookings | Hard | 15 | JOINS & RELATIONAL QUERIES | driver, vehicle, booking |
| 29 | `sql-029` | Count viewers sharing the same name | Medium | 15 | AGGREGATION & GROUPING | viewer |
| 30 | `sql-030` | Contacts whose job title contains Engineer | Hard | 15 | JOINS & RELATIONAL QUERIES | users, contacts, jobs |

**Difficulty distribution:** Easy = 8 | Medium = 11 | Hard = 11

**Category distribution:**

| Category | Questions |
|----------|-----------|
| FILTERING & PREDICATES | 6 |
| JOINS & RELATIONAL QUERIES | 17 |
| PATTERN MATCHING & STRINGS | 3 |
| AGGREGATION & GROUPING | 4 |

---

# Schema Design (Multi-Table View Schemas)

From `src/data/sqlSchemas.js` — 30 schema families (one per question) shown in the Schema Modal:

## Schema 1: Banking & Transactions Schema (6 tables)

- **loan**: LOAN_ID, ACCOUNT_ID, LOAN_AMOUNT, LOAN_DATE, DUE_DATE
- **transaction**: TRANSACTION_ID, ACCOUNT_ID, TRANSACTION_DATE, AMOUNT, TRANSACTION_TYPE
- **account**: ACCOUNT_ID, CUSTOMER_ID, BRANCH_ID, ACCOUNT_TYPE_ID, BALANCE
- **customer**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, CONTACT, EMAIL
- **branch**: BRANCH_ID, BRANCH_NAME, ADDRESS, CONTACT
- **account_type**: ACCOUNT_TYPE_ID, ACCOUNT_TYPE_NAME

## Schema 2: Banking & Accounts Schema (6 tables)

- **loan**: LOAN_ID, ACCOUNT_ID, LOAN_AMOUNT, LOAN_DATE, DUE_DATE
- **transaction**: TRANSACTION_ID, ACCOUNT_ID, TRANSACTION_DATE, AMOUNT, TRANSACTION_TYPE
- **account**: ACCOUNT_ID, CUSTOMER_ID, BRANCH_ID, ACCOUNT_TYPE_ID, BALANCE
- **customer**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, CONTACT, EMAIL
- **branch**: BRANCH_ID, BRANCH_NAME, ADDRESS, CONTACT
- **account_type**: ACCOUNT_TYPE_ID, ACCOUNT_TYPE_NAME

## Schema 3: Employee Payroll & Department Schema (4 tables)

- **emp_payroll**: TRANSNO, EMPID, MONTH, YEAR, TOTAL_EARNING, NETPAY
- **employee_info**: EMPID, EMPNAME, DEPTID, JOINING_DT, DOB, YRS_OF_EXP, EMPLOYEE_CATEGORY
- **dept_info**: DEPTID, DEPTNAME, LOCATION
- **salary_info**: EMPLOYEE_CATEGORY, BASIC, TRAVELLING_ALLOWANCE, HOUSE_RENT_ALLOWANCE, DA, LOCATION_ALLOWANCE, PROVIDENT_FUND, MEDICAL_ALLOWANCE, PROTAX, INSURANCE

## Schema 4: Employee Leave & Payroll Enterprise Schema (6 tables)

- **emp_leave_info**: EMPID, FROM_DATE, TO_DATE, TOTAL_LEAVES, LEAVE_TYPE
- **emp_payroll**: TRANSNO, EMPID, MONTH, YEAR, TOTAL_EARNING, NETPAY
- **employee_info**: EMPID, EMPNAME, DEPTID, JOINING_DT, DOB, YRS_OF_EXP, EMPLOYEE_CATEGORY
- **dept_info**: DEPTID, DEPTNAME, LOCATION
- **allotted_category**: EMPLOYEE_CATEGORY, EL, ML
- **salary_info**: EMPLOYEE_CATEGORY, BASIC, TRAVELLING_ALLOWANCE, HOUSE_RENT_ALLOWANCE, DA, LOCATION_ALLOWANCE, PROVIDENT_FUND, MEDICAL_ALLOWANCE, PROTAX, INSURANCE

## Schema 5: University Student Course Registration Schema (7 tables)

- **registration**: REG_ID, REG_YEAR, REG_DATE, STUDENT_ID, SECTION_ID, MIDTERM_GRADE, FULLTERM_GRADE
- **student**: STUDENT_ID, LAST_NAME, FIRST_NAME, EMAIL, PHONE
- **section**: SECTION_ID, COURSE_ID, SCHEDULE_ID, INSTRUCTOR_ID, ROOM
- **course**: COURSE_ID, NAME, TYPE, TERM
- **schedule**: SCHEDULE_ID, DAY, STARTTIME, ENDTIME
- **instructor**: INSTRUCTOR_ID, LAST_NAME, FIRST_NAME, TYPE, DEPT_ID
- **department**: DEPT_ID

## Schema 6: Books & Category Catalog Schema (3 tables)

- **books**: ISBN, TITLE, PRICE, PUBLISHED_DATE
- **book_category**: ISBN, CATEGORY_ID
- **category**: CATEGORY_ID, NAME

## Schema 7: Media Streaming & Channels Schema (4 tables)

- **stream**: STREAMID, PROGRAMMEID, CHANNELID
- **programme**: PROGRAMMEID, STREAMID, PROGRAMME_NAME
- **channel**: CHANNELID, CATEGORYID, CHANNELNAME
- **channelscategory**: CATEGORYID, CATEGORYNAME

## Schema 8: Train Transit & Stations Schema (3 tables)

- **train_details_tbl**: TRAIN_ID, TRAIN_NAME, TRAIN_TYPE, TRAIN_TIME, TRAIN_FROM, TRAIN_TO, TRAIN_SPEED
- **train_type_tbl**: TRAIN_TYPE, TYPE_DESCRIPTION
- **train_stations_tbl**: STATION_ID, STATION_NAME

## Schema 9: Employee Leave & Enterprise Payroll Schema (6 tables)

- **emp_leave_info**: EMPID, FROM_DATE, TO_DATE, TOTAL_LEAVES, LEAVE_TYPE
- **emp_payroll**: TRANSNO, EMPID, MONTH, YEAR, TOTAL_EARNING, NETPAY
- **employee_info**: EMPID, EMPNAME, DEPTID, JOINING_DT, DOB, YRS_OF_EXP, EMPLOYEE_CATEGORY
- **dept_info**: DEPTID, DEPTNAME, LOCATION
- **allotted_category**: EMPLOYEE_CATEGORY, EL, ML
- **salary_info**: EMPLOYEE_CATEGORY, BASIC, TRAVELLING_ALLOWANCE, HOUSE_RENT_ALLOWANCE, DA, LOCATION_ALLOWANCE, PROVIDENT_FUND, MEDICAL_ALLOWANCE, PROTAX, INSURANCE

## Schema 10: Employee Payroll & Deductions Schema (4 tables)

- **emp_payroll**: TRANSNO, EMPID, MONTH, YEAR, TOTAL_EARNING, NETPAY
- **employee_info**: EMPID, EMPNAME, DEPTID, JOINING_DT, DOB, YRS_OF_EXP, EMPLOYEE_CATEGORY
- **dept_info**: DEPTID, DEPTNAME, LOCATION
- **salary_info**: EMPLOYEE_CATEGORY, BASIC, TRAVELLING_ALLOWANCE, HOUSE_RENT_ALLOWANCE, DA, LOCATION_ALLOWANCE, PROVIDENT_FUND, MEDICAL_ALLOWANCE, PROTAX, INSURANCE

## Schema 11: Employee Compensation Schema (4 tables)

- **emp_payroll**: TRANSNO, EMPID, MONTH, YEAR, TOTAL_EARNING, NETPAY
- **employee_info**: EMPID, EMPNAME, DEPTID, JOINING_DT, DOB, YRS_OF_EXP, EMPLOYEE_CATEGORY
- **dept_info**: DEPTID, DEPTNAME, LOCATION
- **salary_info**: EMPLOYEE_CATEGORY, BASIC, TRAVELLING_ALLOWANCE, HOUSE_RENT_ALLOWANCE, DA, LOCATION_ALLOWANCE, PROVIDENT_FUND, MEDICAL_ALLOWANCE, PROTAX, INSURANCE

## Schema 12: Bank Accounts & Loan Facility Schema (6 tables)

- **loan**: LOAN_ID, ACCOUNT_ID, LOAN_AMOUNT, LOAN_DATE, DUE_DATE
- **transaction**: TRANSACTION_ID, ACCOUNT_ID, TRANSACTION_DATE, AMOUNT, TRANSACTION_TYPE
- **account**: ACCOUNT_ID, CUSTOMER_ID, BRANCH_ID, ACCOUNT_TYPE_ID, BALANCE
- **customer**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, CONTACT, EMAIL
- **branch**: BRANCH_ID, BRANCH_NAME, ADDRESS, CONTACT
- **account_type**: ACCOUNT_TYPE_ID, ACCOUNT_TYPE_NAME

## Schema 13: Customer Banking Operations Schema (6 tables)

- **loan**: LOAN_ID, ACCOUNT_ID, LOAN_AMOUNT, LOAN_DATE, DUE_DATE
- **transaction**: TRANSACTION_ID, ACCOUNT_ID, TRANSACTION_DATE, AMOUNT, TRANSACTION_TYPE
- **account**: ACCOUNT_ID, CUSTOMER_ID, BRANCH_ID, ACCOUNT_TYPE_ID, BALANCE
- **customer**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, CONTACT, EMAIL
- **branch**: BRANCH_ID, BRANCH_NAME, ADDRESS, CONTACT
- **account_type**: ACCOUNT_TYPE_ID, ACCOUNT_TYPE_NAME

## Schema 14: Staff Members Schema (1 tables)

- **staff**: STAFF_ID, FIRSTNAME, LASTNAME, POSITION, SALARY

## Schema 15: Hospital Patient & Billing Schema (2 tables)

- **Patient**: PATIENTID, FIRSTNAME, LASTNAME, EMAIL, ADMISSIONDATE
- **Billing**: BILLINGID, PATIENTID, TOTALAMOUNT, PAYMENTSTATUS

## Schema 16: Aviation Flights & Fleet Schema (3 tables)

- **Airline**: AIRLINE_ID, NAME, ADDRESS, CONTACT
- **Airplane**: AIRPLANE_ID, AIRLINE_ID, MODELNUMBER, MANUFACTURER
- **Flight**: FLIGHT_ID, AIRPLANE_ID, DEPARTURE_DATE, DEPARTURE_TIME, ARRIVAL_DATE, ARRIVAL_TIME, FLIGHT_FROM, FLIGHT_TO

## Schema 17: Flight Routes & Scheduling Schema (3 tables)

- **Airline**: AIRLINE_ID, NAME, ADDRESS, CONTACT
- **Airplane**: AIRPLANE_ID, AIRLINE_ID, MODELNUMBER, MANUFACTURER
- **Flight**: FLIGHT_ID, AIRPLANE_ID, DEPARTURE_DATE, DEPARTURE_TIME, ARRIVAL_DATE, ARRIVAL_TIME, FLIGHT_FROM, FLIGHT_TO

## Schema 18: University Course Registration Schema (7 tables)

- **registration**: REG_ID, REG_YEAR, REG_DATE, STUDENT_ID, SECTION_ID, MIDTERM_GRADE, FULLTERM_GRADE
- **student**: STUDENT_ID, LAST_NAME, FIRST_NAME, EMAIL, PHONE
- **section**: SECTION_ID, COURSE_ID, SCHEDULE_ID, INSTRUCTOR_ID, ROOM
- **course**: COURSE_ID, NAME, TYPE, TERM
- **schedule**: SCHEDULE_ID, DAY, STARTTIME, ENDTIME
- **instructor**: INSTRUCTOR_ID, LAST_NAME, FIRST_NAME, TYPE, DEPT_ID
- **department**: DEPT_ID

## Schema 19: Airline Operations & Passenger Crew Schema (7 tables)

- **pilot**: PILOT_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT, DISCIPLINE, PILOT_LICENSE
- **cabincrew**: CABINCREW_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT
- **boardingpass**: BOARDINGPASS_ID, FLIGHT_ID, PASSENGER_ID, DATE, BAGGAGE, MEAL
- **flight**: FLIGHT_ID, AIRPLANE_ID, DEPARTURE_DATE, DEPARTURE_TIME, ARRIVAL_DATE, ARRIVAL_TIME, FLIGHT_FROM, FLIGHT_TO
- **passenger**: PASSENGER_ID, FIRST_NAME, LAST_NAME, EMAIL, CONTACT
- **airplane**: AIRPLANE_ID, AIRLINE_ID, MODELNUMBER, MANUFACTURER
- **airline**: AIRLINE_ID, NAME, ADDRESS, CONTACT

## Schema 20: Flight Crew & Manifest Schema (7 tables)

- **pilot**: PILOT_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT, DISCIPLINE, PILOT_LICENSE
- **cabincrew**: CABINCREW_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT
- **boardingpass**: BOARDINGPASS_ID, FLIGHT_ID, PASSENGER_ID, DATE, BAGGAGE, MEAL
- **flight**: FLIGHT_ID, AIRPLANE_ID, DEPARTURE_DATE, DEPARTURE_TIME, ARRIVAL_DATE, ARRIVAL_TIME, FLIGHT_FROM, FLIGHT_TO
- **passenger**: PASSENGER_ID, FIRST_NAME, LAST_NAME, EMAIL, CONTACT
- **airplane**: AIRPLANE_ID, AIRLINE_ID, MODELNUMBER, MANUFACTURER
- **airline**: AIRLINE_ID, NAME, ADDRESS, CONTACT

## Schema 21: E-Commerce Orders, Products & Delivery Schema (8 tables)

- **product_category**: PRODUCT_CATEGORY_ID, PRODUCT_ID, CATEGORY_ID
- **category**: CATEGORY_ID, CODE, NAME
- **product**: PRODUCT_ID, CODE, NAME, UNIT_PRICE
- **order_item**: ORDER_ITEM_ID, ORDER_ID, ORDER_DELIVERY_ID, PRODUCT_ID, QUANTITY
- **order_delivery**: ORDER_DELIVERY_ID, ORDER_ID, TRACKING_NO, STATUS
- **payment**: PAYMENT_ID, ORDER_ID, STATUS, CCTYPE, CCNAME, CCDATE
- **customer**: ORDER_ID, CUSTOMER_ID, USERNAME
- **customer_address**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, ADDRESS, PHONE, EMAIL

## Schema 22: Railway Transit & Stations Schema (3 tables)

- **train_details_tbl**: TRAIN_ID, TRAIN_NAME, TRAIN_TYPE, TRAIN_TIME, TRAIN_FROM, TRAIN_TO, TRAIN_SPEED
- **train_type_tbl**: TRAIN_TYPE, TYPE_DESCRIPTION
- **train_stations_tbl**: STATION_ID, STATION_NAME

## Schema 23: Aviation Passenger & Baggage Manifest Schema (7 tables)

- **pilot**: PILOT_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT, DISCIPLINE, PILOT_LICENSE
- **cabincrew**: CABINCREW_ID, FLIGHT_ID, FIRST_NAME, LAST_NAME, CONTACT
- **boardingpass**: BOARDINGPASS_ID, FLIGHT_ID, PASSENGER_ID, DATE, BAGGAGE, MEAL
- **flight**: FLIGHT_ID, AIRPLANE_ID, DEPARTURE_DATE, DEPARTURE_TIME, ARRIVAL_DATE, ARRIVAL_TIME, FLIGHT_FROM, FLIGHT_TO
- **passenger**: PASSENGER_ID, FIRST_NAME, LAST_NAME, EMAIL, CONTACT
- **airplane**: AIRPLANE_ID, AIRLINE_ID, MODELNUMBER, MANUFACTURER
- **airline**: AIRLINE_ID, NAME, ADDRESS, CONTACT

## Schema 24: Online Retail Order Processing Schema (8 tables)

- **product_category**: PRODUCT_CATEGORY_ID, PRODUCT_ID, CATEGORY_ID
- **category**: CATEGORY_ID, CODE, NAME
- **product**: PRODUCT_ID, CODE, NAME, UNIT_PRICE
- **order_item**: ORDER_ITEM_ID, ORDER_ID, ORDER_DELIVERY_ID, PRODUCT_ID, QUANTITY
- **order_delivery**: ORDER_DELIVERY_ID, ORDER_ID, TRACKING_NO, STATUS
- **payment**: PAYMENT_ID, ORDER_ID, STATUS, CCTYPE, CCNAME, CCDATE
- **customer**: ORDER_ID, CUSTOMER_ID, USERNAME
- **customer_address**: CUSTOMER_ID, FIRST_NAME, LAST_NAME, ADDRESS, PHONE, EMAIL

## Schema 25: Music & Artists Schema (1 tables)

- **artist**: ARTIST_ID, NAME

## Schema 26: Messaging Notifications Schema (1 tables)

- **message**: MESSAGE_ID, CONTENT

## Schema 27: Rideshare Driver & Vehicle Fleet Schema (2 tables)

- **driver**: DRIVER_ID, FIRST_NAME, LAST_NAME, CONTACT, LICENSE_NUMBER, RATING
- **vehicle**: VEHICLE_ID, DRIVER_ID, PLATE_NUMBER, STATUS

## Schema 28: Rideshare Booking & Dispatch Schema (3 tables)

- **driver**: DRIVER_ID, FIRST_NAME, LAST_NAME, CONTACT, LICENSE_NUMBER, RATING
- **vehicle**: VEHICLE_ID, DRIVER_ID, PLATE_NUMBER, STATUS
- **booking**: BOOKING_ID, VEHICLE_ID, STATUS

## Schema 29: Content Viewers Schema (1 tables)

- **viewer**: VIEWER_ID, VIEWERNAME

## Schema 30: User Profile, Contacts & Careers Schema (3 tables)

- **users**: USER_ID, FIRST_NAME, LAST_NAME
- **contacts**: USER_ID, CONTACT_ID
- **jobs**: USER_ID, JOB_TITLE

---

# sql-001 â€” Debit transactions between 10,000 and 50,000

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `Transaction_ID`, `Amount`, `Transaction_Type`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the transaction ID, transaction amount and transaction type of all transactions whose transaction type is 'Debit' and transaction amount is greater than 10000 but less than 50000.

### Requirements:
- **Expected Output Columns:** `Transaction_ID`, `Amount`, `Transaction_Type`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** WHERE, AND, range filtering
- Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns.

## Schema (DDL)

**Table `transaction`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Transaction_ID | INTEGER |  |
| Account_ID | INTEGER |  |
| Transaction_Date | TEXT |  |
| Amount | REAL |  |
| Transaction_Type | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `transaction`:

| Transaction_ID | Account_ID | Transaction_Date | Amount | Transaction_Type |
|---|---|---|---|---|
| 101 | 1 | 2024-01-10 | 12000 | Debit |
| 102 | 2 | 2024-01-11 | 50000 | Debit |
| 103 | 3 | 2024-01-12 | 25000 | Credit |
| 104 | 4 | 2024-01-13 | 49999.5 | Debit |
| 105 | 5 | 2024-01-14 | 10000 | Debit |

**Expected Output:**

| Transaction_ID | Amount | Transaction_Type |
|---|---|---|
| 101 | 12000 | Debit |
| 104 | 49999.5 | Debit |


> Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded.

## Solution

```sql
SELECT
  Transaction_ID,
  Amount,
  Transaction_Type
FROM transaction
WHERE Transaction_Type = 'Debit'
  AND Amount > 10000
  AND Amount < 50000;
```

## Explanation

Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns. Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded.

## Notes / Hints

- Filter the transaction table using two conditions: Transaction_Type must be 'Debit', and Amount must be strictly between 10000 and 50000. Return the three requested columns.
- Rows 101 and 104 satisfy both strict amount boundaries and the Debit condition. Rows at exactly 10000 or 50000 are excluded; Credit transactions are also excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-001-test-1`

**Input Dataset:**

Table `transaction`:

| Transaction_ID | Account_ID | Transaction_Date | Amount | Transaction_Type |
|---|---|---|---|---|
| 101 | 1 | 2024-01-10 | 12000 | Debit |
| 102 | 2 | 2024-01-11 | 50000 | Debit |
| 103 | 3 | 2024-01-12 | 25000 | Credit |
| 104 | 4 | 2024-01-13 | 49999.5 | Debit |
| 105 | 5 | 2024-01-14 | 10000 | Debit |

**Expected Output:**

| Transaction_ID | Amount | Transaction_Type |
|---|---|---|
| 101 | 12000 | Debit |
| 104 | 49999.5 | Debit |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-001-test-2`

**Input Dataset:**

Table `transaction`:

| Transaction_ID | Account_ID | Transaction_Date | Amount | Transaction_Type |
|---|---|---|---|---|
| 1202 | 1002 | ZZ_2024-01-10 | 25000 | ZZ_Debit |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-001-test-3`

**Input Dataset:**

Table `transaction`:

| Transaction_ID | Account_ID | Transaction_Date | Amount | Transaction_Type |
|---|---|---|---|---|
| 101 | 1 | 2024-01-10 | 12000 | Debit |
| 102 | 2 | 2024-01-11 | 50000 | Debit |
| 103 | 3 | 2024-01-12 | 25000 | Credit |
| 104 | 4 | 2024-01-13 | 49999.5 | Debit |
| 105 | 5 | 2024-01-14 | 10000 | Debit |
| 201 | 101 | 2024-01-10 | 12000 | Debit |
| 203 | 103 | 2024-01-11 | 50000 | Debit |
| 205 | 105 | 2024-01-12 | 25000 | Credit |
| 207 | 107 | 2024-01-13 | 49999.5 | Debit |
| 209 | 109 | 2024-01-14 | 10000 | Debit |

**Expected Output:**

| Transaction_ID | Amount | Transaction_Type |
|---|---|---|
| 101 | 12000 | Debit |
| 104 | 49999.5 | Debit |
| 201 | 12000 | Debit |
| 207 | 49999.5 | Debit |


---

# sql-002 â€” Customers whose account type starts with Sa

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `First_Name`, `Contact`, `Balance`
- **Order Sensitive:** Yes

## Problem Statement

### Problem Statement
Write an SQL query to display the first name, contact number and balance of all customers whose account type starts with 'Sa'. The output should be ordered by the customer's first name.

### Requirements:
- **Expected Output Columns:** `First_Name`, `Contact`, `Balance`
- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, LIKE, ORDER BY
- Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name.

## Schema (DDL)

**Table `customer`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Customer_ID | INTEGER |  |
| First_Name | TEXT |  |
| Last_Name | TEXT |  |
| Contact | TEXT |  |

**Table `account`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Account_ID | INTEGER |  |
| Customer_ID | INTEGER |  |
| Account_Type | TEXT |  |
| Balance | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `customer`:

| Customer_ID | First_Name | Last_Name | Contact |
|---|---|---|---|
| 1 | Sam | Khan | 90001 |
| 2 | Sara | Roy | 90002 |
| 3 | John | Das | 90003 |
| 4 | Sahil | Verma | 90004 |

Table `account`:

| Account_ID | Customer_ID | Account_Type | Balance |
|---|---|---|---|
| 11 | 1 | Savings | 45000 |
| 12 | 2 | Salary | 60000 |
| 13 | 3 | Current | 70000 |
| 14 | 4 | Saving Plus | 30000 |

**Expected Output:**

| First_Name | Contact | Balance |
|---|---|---|
| Sahil | 90004 | 30000 |
| Sam | 90001 | 45000 |
| Sara | 90002 | 60000 |


> Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name.

## Solution

```sql
SELECT
  c.First_Name,
  c.Contact,
  a.Balance
FROM customer c
JOIN account a ON c.Customer_ID = a.Customer_ID
WHERE a.Account_Type LIKE 'Sa%'
ORDER BY c.First_Name;
```

## Explanation

Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name. Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name.

## Notes / Hints

- Join Customer with Account because the customer name/contact and account type/balance are stored separately. Use LIKE 'Sa%' and ORDER BY First_Name.
- Only Savings, Salary and Saving Plus start with 'Sa'. The result is then alphabetically ordered by first name.
- Rows must match the exact sorting specified.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-002-test-1`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name | Contact |
|---|---|---|---|
| 1 | Sam | Khan | 90001 |
| 2 | Sara | Roy | 90002 |
| 3 | John | Das | 90003 |
| 4 | Sahil | Verma | 90004 |

Table `account`:

| Account_ID | Customer_ID | Account_Type | Balance |
|---|---|---|---|
| 11 | 1 | Savings | 45000 |
| 12 | 2 | Salary | 60000 |
| 13 | 3 | Current | 70000 |
| 14 | 4 | Saving Plus | 30000 |

**Expected Output:**

| First_Name | Contact | Balance |
|---|---|---|
| Sahil | 90004 | 30000 |
| Sam | 90001 | 45000 |
| Sara | 90002 | 60000 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-002-test-2`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name | Contact |
|---|---|---|---|
| 1002 | Sam | ZZ_Khan | ZZ_90001 |

Table `account`:

| Account_ID | Customer_ID | Account_Type | Balance |
|---|---|---|---|
| 1022 | 1002 | ZZ_Savings | 91000 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-002-test-3`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name | Contact |
|---|---|---|---|
| 1 | Sam | Khan | 90001 |
| 2 | Sara | Roy | 90002 |
| 3 | John | Das | 90003 |
| 4 | Sahil | Verma | 90004 |
| 101 | Sam | Khan | 90001 |
| 103 | Sara | Roy | 90002 |
| 105 | John | Das | 90003 |
| 107 | Sahil | Verma | 90004 |

Table `account`:

| Account_ID | Customer_ID | Account_Type | Balance |
|---|---|---|---|
| 11 | 1 | Savings | 45000 |
| 12 | 2 | Salary | 60000 |
| 13 | 3 | Current | 70000 |
| 14 | 4 | Saving Plus | 30000 |
| 111 | 101 | Savings | 45000 |
| 113 | 103 | Salary | 60000 |
| 115 | 105 | Current | 70000 |
| 117 | 107 | Saving Plus | 30000 |

**Expected Output:**

| First_Name | Contact | Balance |
|---|---|---|
| Sahil | 90004 | 30000 |
| Sahil | 90004 | 30000 |
| Sam | 90001 | 45000 |
| Sam | 90001 | 45000 |
| Sara | 90002 | 60000 |
| Sara | 90002 | 60000 |


---

# sql-003 â€” Employees with basic salary above 5,000

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `BASIC`, `NETPAY`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the employee ID, name, basic salary and net pay for employees whose basic salary is greater than 5,000.

### Requirements:
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `BASIC`, `NETPAY`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, WHERE, multiple tables
- Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000.

## Schema (DDL)

**Table `employee_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| EMPNAME | TEXT |  |
| DEPTID | INTEGER |  |
| JOINING_DT | TEXT |  |
| DOB | TEXT |  |
| YRS_OF_EXP | INTEGER |  |
| EMPLOYEE_CATEGORY | TEXT |  |

**Table `salary_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPLOYEE_CATEGORY | TEXT |  |
| BASIC | INTEGER |  |

**Table `emp_payroll`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| MONTH | INTEGER |  |
| YEAR | INTEGER |  |
| TOTAL_EARNING | INTEGER |  |
| NETPAY | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | JOINING_DT | DOB | YRS_OF_EXP | EMPLOYEE_CATEGORY |
|---|---|---|---|---|---|---|
| 1 | Amit | 10 | 2019-01-10 | 1995-01-01 | 6 | A |
| 2 | Riya | 20 | 2020-02-10 | 1996-02-02 | 5 | B |
| 3 | Neha | 10 | 2018-03-12 | 1994-03-03 | 7 | A |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |

Table `emp_payroll`:

| EMPID | MONTH | YEAR | TOTAL_EARNING | NETPAY |
|---|---|---|---|---|
| 1 | 1 | 2024 | 7500 | 7000 |
| 2 | 1 | 2024 | 5500 | 5000 |
| 3 | 1 | 2024 | 7600 | 7100 |

**Expected Output:**

| EMPID | EMPNAME | BASIC | NETPAY |
|---|---|---|---|
| 1 | Amit | 6500 | 7000 |
| 3 | Neha | 6500 | 7100 |


> Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out.

## Solution

```sql
SELECT
  ei.EMPID AS EMPID,
  ei.EMPNAME AS EMPNAME,
  si.BASIC AS BASIC,
  ep.NETPAY AS NETPAY
FROM employee_info ei
JOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY
JOIN emp_payroll ep ON ei.EMPID = ep.EMPID
WHERE si.BASIC > 5000;
```

## Explanation

Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000. Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out.

## Notes / Hints

- Employee information, salary information and payroll information are connected by employee category and employee ID. Join the required tables and filter Basic > 5000.
- Amit and Neha belong to category A, whose basic salary is 6500. Riya's category B salary is 4800, so she is filtered out.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-003-test-1`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | JOINING_DT | DOB | YRS_OF_EXP | EMPLOYEE_CATEGORY |
|---|---|---|---|---|---|---|
| 1 | Amit | 10 | 2019-01-10 | 1995-01-01 | 6 | A |
| 2 | Riya | 20 | 2020-02-10 | 1996-02-02 | 5 | B |
| 3 | Neha | 10 | 2018-03-12 | 1994-03-03 | 7 | A |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |

Table `emp_payroll`:

| EMPID | MONTH | YEAR | TOTAL_EARNING | NETPAY |
|---|---|---|---|---|
| 1 | 1 | 2024 | 7500 | 7000 |
| 2 | 1 | 2024 | 5500 | 5000 |
| 3 | 1 | 2024 | 7600 | 7100 |

**Expected Output:**

| EMPID | EMPNAME | BASIC | NETPAY |
|---|---|---|---|
| 1 | Amit | 6500 | 7000 |
| 3 | Neha | 6500 | 7100 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-003-test-2`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | JOINING_DT | DOB | YRS_OF_EXP | EMPLOYEE_CATEGORY |
|---|---|---|---|---|---|---|
| 1002 | ZZ_Amit | 1020 | ZZ_2019-01-10 | ZZ_1995-01-01 | 1012 | A |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 14000 |

Table `emp_payroll`:

| EMPID | MONTH | YEAR | TOTAL_EARNING | NETPAY |
|---|---|---|---|---|
| 1002 | 1002 | 5048 | 16000 | 15000 |

**Expected Output:**

| EMPID | EMPNAME | BASIC | NETPAY |
|---|---|---|---|
| 1002 | ZZ_Amit | 14000 | 15000 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-003-test-3`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | JOINING_DT | DOB | YRS_OF_EXP | EMPLOYEE_CATEGORY |
|---|---|---|---|---|---|---|
| 1 | Amit | 10 | 2019-01-10 | 1995-01-01 | 6 | A |
| 2 | Riya | 20 | 2020-02-10 | 1996-02-02 | 5 | B |
| 3 | Neha | 10 | 2018-03-12 | 1994-03-03 | 7 | A |
| 101 | Amit | 110 | 2019-01-10 | 1995-01-01 | 6 | A |
| 103 | Riya | 121 | 2020-02-10 | 1996-02-02 | 5 | B |
| 105 | Neha | 112 | 2018-03-12 | 1994-03-03 | 7 | A |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |
| A | 6500 |
| B | 4800 |

Table `emp_payroll`:

| EMPID | MONTH | YEAR | TOTAL_EARNING | NETPAY |
|---|---|---|---|---|
| 1 | 1 | 2024 | 7500 | 7000 |
| 2 | 1 | 2024 | 5500 | 5000 |
| 3 | 1 | 2024 | 7600 | 7100 |
| 101 | 1 | 2124 | 7500 | 7000 |
| 103 | 1 | 2125 | 5500 | 5000 |
| 105 | 1 | 2126 | 7600 | 7100 |

**Expected Output:**

| EMPID | EMPNAME | BASIC | NETPAY |
|---|---|---|---|
| 1 | Amit | 6500 | 7000 |
| 3 | Neha | 6500 | 7100 |
| 101 | Amit | 6500 | 7000 |
| 105 | Neha | 6500 | 7100 |
| 1 | Amit | 6500 | 7000 |
| 3 | Neha | 6500 | 7100 |
| 101 | Amit | 6500 | 7000 |
| 105 | Neha | 6500 | 7100 |


---

# sql-004 â€” Employees with more than 5 years of experience

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `Employee ID`, `Employee Name`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the names of employees who have more than 5 years of experience and joined after January 1, 2001. Use aliases 'Employee ID' and 'Employee Name'.

### Requirements:
- **Expected Output Columns:** `Employee ID`, `Employee Name`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** AND, date filtering, aliases
- Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases.

## Schema (DDL)

**Table `employee_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| EMPNAME | TEXT |  |
| JOINING_DT | TEXT |  |
| YRS_OF_EXP | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `employee_info`:

| EMPID | EMPNAME | JOINING_DT | YRS_OF_EXP |
|---|---|---|---|
| 1 | Amit | 2010-01-10 | 7 |
| 2 | Riya | 2000-05-10 | 8 |
| 3 | Neha | 2015-03-12 | 5 |
| 4 | Raj | 2005-06-01 | 6 |

**Expected Output:**

| Employee ID | Employee Name |
|---|---|
| 1 | Amit |
| 4 | Raj |


> Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition.

## Solution

```sql
SELECT
  EMPID AS \`Employee ID\`,
  EMPNAME AS \`Employee Name\`
FROM employee_info
WHERE YRS_OF_EXP > 5
  AND JOINING_DT > '2001-01-01';
```

## Explanation

Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases. Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition.

## Notes / Hints

- Both conditions must be true. Filter YRS_OF_EXP > 5 and JOINING_DT > '2001-01-01', then return EMPID and EMPNAME using the requested aliases.
- Amit and Raj satisfy both conditions. Riya fails the joining-date condition, while Neha has exactly 5 years and therefore fails the 'more than 5' condition.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-004-test-1`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | JOINING_DT | YRS_OF_EXP |
|---|---|---|---|
| 1 | Amit | 2010-01-10 | 7 |
| 2 | Riya | 2000-05-10 | 8 |
| 3 | Neha | 2015-03-12 | 5 |
| 4 | Raj | 2005-06-01 | 6 |

**Expected Output:**

| Employee ID | Employee Name |
|---|---|
| 1 | Amit |
| 4 | Raj |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-004-test-2`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | JOINING_DT | YRS_OF_EXP |
|---|---|---|---|
| 1002 | ZZ_Amit | ZZ_2010-01-10 | 1014 |

**Expected Output:**

| Employee ID | Employee Name |
|---|---|
| 1002 | ZZ_Amit |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-004-test-3`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | JOINING_DT | YRS_OF_EXP |
|---|---|---|---|
| 1 | Amit | 2010-01-10 | 7 |
| 2 | Riya | 2000-05-10 | 8 |
| 3 | Neha | 2015-03-12 | 5 |
| 4 | Raj | 2005-06-01 | 6 |
| 101 | Amit | 2010-01-10 | 7 |
| 103 | Riya | 2000-05-10 | 8 |
| 105 | Neha | 2015-03-12 | 5 |
| 107 | Raj | 2005-06-01 | 6 |

**Expected Output:**

| Employee ID | Employee Name |
|---|---|
| 1 | Amit |
| 4 | Raj |
| 101 | Amit |
| 107 | Raj |


---

# sql-005 â€” Wednesday course schedules

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `Course ID`, `Course Name`, `Day`, `Start Time`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the course ID, course name, and schedule details (day and start time) of all courses taught on Wednesday. Use 'wed' as the value stored in the database. Use aliases 'Course ID', 'Course Name', 'Day' and 'Start Time'.

### Requirements:
- **Expected Output Columns:** `Course ID`, `Course Name`, `Day`, `Start Time`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, aliases, filtering
- Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'.

## Schema (DDL)

**Table `course`**

| Column | Type | Primary Key |
|--------|------|-------------|
| course_id | INTEGER |  |
| course_name | TEXT |  |

**Table `section`**

| Column | Type | Primary Key |
|--------|------|-------------|
| section_id | INTEGER |  |
| course_id | INTEGER |  |
| schedule_id | INTEGER |  |

**Table `schedule`**

| Column | Type | Primary Key |
|--------|------|-------------|
| schedule_id | INTEGER |  |
| day | TEXT |  |
| starttime | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `course`:

| course_id | course_name |
|---|---|
| 1 | DBMS |
| 2 | Networks |
| 3 | OS |

Table `section`:

| section_id | course_id | schedule_id |
|---|---|---|
| 101 | 1 | 201 |
| 102 | 2 | 202 |
| 103 | 3 | 203 |

Table `schedule`:

| schedule_id | day | starttime |
|---|---|---|
| 201 | wed | 09:00 |
| 202 | thu | 10:00 |
| 203 | wed | 14:00 |

**Expected Output:**

| Course ID | Course Name | Day | Start Time |
|---|---|---|---|
| 1 | DBMS | wed | 09:00 |
| 3 | OS | wed | 14:00 |


> The two sections whose schedule day is 'wed' are returned, together with their course details.

## Solution

```sql
SELECT
  c.course_id AS \`Course ID\`,
  c.course_name AS \`Course Name\`,
  s.day AS \`Day\`,
  s.starttime AS \`Start Time\`
FROM course c
JOIN section sec ON c.course_id = sec.course_id
JOIN schedule s ON sec.schedule_id = s.schedule_id
WHERE s.day = 'wed';
```

## Explanation

Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'. The two sections whose schedule day is 'wed' are returned, together with their course details.

## Notes / Hints

- Join course to section and schedule. The schedule table stores the day value as 'wed', so filter s.day = 'wed'.
- The two sections whose schedule day is 'wed' are returned, together with their course details.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-005-test-1`

**Input Dataset:**

Table `course`:

| course_id | course_name |
|---|---|
| 1 | DBMS |
| 2 | Networks |
| 3 | OS |

Table `section`:

| section_id | course_id | schedule_id |
|---|---|---|
| 101 | 1 | 201 |
| 102 | 2 | 202 |
| 103 | 3 | 203 |

Table `schedule`:

| schedule_id | day | starttime |
|---|---|---|
| 201 | wed | 09:00 |
| 202 | thu | 10:00 |
| 203 | wed | 14:00 |

**Expected Output:**

| Course ID | Course Name | Day | Start Time |
|---|---|---|---|
| 1 | DBMS | wed | 09:00 |
| 3 | OS | wed | 14:00 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-005-test-2`

**Input Dataset:**

Table `course`:

| course_id | course_name |
|---|---|
| 1002 | ZZ_DBMS |

Table `section`:

| section_id | course_id | schedule_id |
|---|---|---|
| 1202 | 1002 | 1402 |

Table `schedule`:

| schedule_id | day | starttime |
|---|---|---|
| 1402 | wed | ZZ_09:00 |

**Expected Output:**

| Course ID | Course Name | Day | Start Time |
|---|---|---|---|
| 1002 | ZZ_DBMS | wed | ZZ_09:00 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-005-test-3`

**Input Dataset:**

Table `course`:

| course_id | course_name |
|---|---|
| 1 | DBMS |
| 2 | Networks |
| 3 | OS |
| 101 | DBMS |
| 103 | Networks |
| 105 | OS |

Table `section`:

| section_id | course_id | schedule_id |
|---|---|---|
| 101 | 1 | 201 |
| 102 | 2 | 202 |
| 103 | 3 | 203 |
| 201 | 101 | 301 |
| 203 | 103 | 303 |
| 205 | 105 | 305 |

Table `schedule`:

| schedule_id | day | starttime |
|---|---|---|
| 201 | wed | 09:00 |
| 202 | thu | 10:00 |
| 203 | wed | 14:00 |
| 301 | wed | 09:00 |
| 303 | thu | 10:00 |
| 305 | wed | 14:00 |

**Expected Output:**

| Course ID | Course Name | Day | Start Time |
|---|---|---|---|
| 1 | DBMS | wed | 09:00 |
| 3 | OS | wed | 14:00 |
| 101 | DBMS | wed | 09:00 |
| 105 | OS | wed | 14:00 |


---

# sql-006 â€” Books published after 1 January 1940 in category C102

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `Title`, `Price`, `ISBN`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the Title, Price and ISBN of books published after January 1, 1940 and belonging to category 'C102'.

### Requirements:
- **Expected Output Columns:** `Title`, `Price`, `ISBN`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, date comparison, AND
- Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01.

## Schema (DDL)

**Table `books`**

| Column | Type | Primary Key |
|--------|------|-------------|
| ISBN | TEXT |  |
| Title | TEXT |  |
| Price | INTEGER |  |
| Published_Date | TEXT |  |

**Table `book_category`**

| Column | Type | Primary Key |
|--------|------|-------------|
| ISBN | TEXT |  |
| Category_ID | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `books`:

| ISBN | Title | Price | Published_Date |
|---|---|---|---|
| I1 | SQL Basics | 500 | 1950-01-01 |
| I2 | Old SQL | 400 | 1939-12-31 |
| I3 | Advanced SQL | 700 | 1945-05-01 |
| I4 | Networks | 600 | 1955-01-01 |

Table `book_category`:

| ISBN | Category_ID |
|---|---|
| I1 | C102 |
| I2 | C102 |
| I3 | C102 |
| I4 | C101 |

**Expected Output:**

| Title | Price | ISBN |
|---|---|---|
| SQL Basics | 500 | I1 |
| Advanced SQL | 700 | I3 |


> I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category.

## Solution

```sql
SELECT
  b.Title,
  b.Price,
  b.ISBN
FROM books b
JOIN book_category bc ON b.ISBN = bc.ISBN
WHERE b.Published_Date > '1940-01-01'
  AND bc.Category_ID = 'C102';
```

## Explanation

Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01. I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category.

## Notes / Hints

- Filter books by publication date and connect them to their category through the book-category mapping table. The date comparison is strict: published after 1940-01-01.
- I1 and I3 are in C102 and were published after the cutoff. I2 is too old and I4 belongs to another category.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-006-test-1`

**Input Dataset:**

Table `books`:

| ISBN | Title | Price | Published_Date |
|---|---|---|---|
| I1 | SQL Basics | 500 | 1950-01-01 |
| I2 | Old SQL | 400 | 1939-12-31 |
| I3 | Advanced SQL | 700 | 1945-05-01 |
| I4 | Networks | 600 | 1955-01-01 |

Table `book_category`:

| ISBN | Category_ID |
|---|---|
| I1 | C102 |
| I2 | C102 |
| I3 | C102 |
| I4 | C101 |

**Expected Output:**

| Title | Price | ISBN |
|---|---|---|
| SQL Basics | 500 | I1 |
| Advanced SQL | 700 | I3 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-006-test-2`

**Input Dataset:**

Table `books`:

| ISBN | Title | Price | Published_Date |
|---|---|---|---|
| I1 | ZZ_SQL Basics | 2000 | ZZ_1950-01-01 |

Table `book_category`:

| ISBN | Category_ID |
|---|---|
| I1 | ZZ_C102 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-006-test-3`

**Input Dataset:**

Table `books`:

| ISBN | Title | Price | Published_Date |
|---|---|---|---|
| I1 | SQL Basics | 500 | 1950-01-01 |
| I2 | Old SQL | 400 | 1939-12-31 |
| I3 | Advanced SQL | 700 | 1945-05-01 |
| I4 | Networks | 600 | 1955-01-01 |
| ALT_I1 | SQL Basics | 500 | 1950-01-01 |
| ALT_I2 | Old SQL | 400 | 1939-12-31 |
| ALT_I3 | Advanced SQL | 700 | 1945-05-01 |
| ALT_I4 | Networks | 600 | 1955-01-01 |

Table `book_category`:

| ISBN | Category_ID |
|---|---|
| I1 | C102 |
| I2 | C102 |
| I3 | C102 |
| I4 | C101 |
| ALT_I1 | ALT_C102 |
| ALT_I2 | ALT_C102 |
| ALT_I3 | ALT_C102 |
| ALT_I4 | ALT_C101 |

**Expected Output:**

| Title | Price | ISBN |
|---|---|---|
| SQL Basics | 500 | I1 |
| Advanced SQL | 700 | I3 |


---

# sql-007 â€” Categories beginning with M

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** PATTERN MATCHING & STRINGS
- **Expected Output Columns:** `CATEGORYID`, `CATEGORYNAME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the category ID and category name for categories whose name starts with the letter 'M'.

### Requirements:
- **Expected Output Columns:** `CATEGORYID`, `CATEGORYNAME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** LIKE, wildcard
- Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname.

## Schema (DDL)

**Table `channelscategory`**

| Column | Type | Primary Key |
|--------|------|-------------|
| categoryid | INTEGER |  |
| categoryname | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `channelscategory`:

| categoryid | categoryname |
|---|---|
| 1 | Music |
| 2 | Movies |
| 3 | Sports |
| 4 | News |
| 5 | Marketing |

**Expected Output:**

| CATEGORYID | CATEGORYNAME |
|---|---|
| 1 | Music |
| 2 | Movies |
| 5 | Marketing |


> The % wildcard allows any characters after the initial M, so all three matching names are returned.

## Solution

```sql
SELECT
  categoryid AS CATEGORYID,
  categoryname AS CATEGORYNAME
FROM channelscategory
WHERE categoryname LIKE 'M%';
```

## Explanation

Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname. The % wildcard allows any characters after the initial M, so all three matching names are returned.

## Notes / Hints

- Use LIKE 'M%' to match category names whose first character is M. Return categoryid and categoryname.
- The % wildcard allows any characters after the initial M, so all three matching names are returned.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-007-test-1`

**Input Dataset:**

Table `channelscategory`:

| categoryid | categoryname |
|---|---|
| 1 | Music |
| 2 | Movies |
| 3 | Sports |
| 4 | News |
| 5 | Marketing |

**Expected Output:**

| CATEGORYID | CATEGORYNAME |
|---|---|
| 1 | Music |
| 2 | Movies |
| 5 | Marketing |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-007-test-2`

**Input Dataset:**

Table `channelscategory`:

| categoryid | categoryname |
|---|---|
| 1002 | ZZ_Music |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-007-test-3`

**Input Dataset:**

Table `channelscategory`:

| categoryid | categoryname |
|---|---|
| 1 | Music |
| 2 | Movies |
| 3 | Sports |
| 4 | News |
| 5 | Marketing |
| 101 | Music |
| 103 | Movies |
| 105 | Sports |
| 107 | News |
| 109 | Marketing |

**Expected Output:**

| CATEGORYID | CATEGORYNAME |
|---|---|
| 1 | Music |
| 2 | Movies |
| 5 | Marketing |
| 101 | Music |
| 103 | Movies |
| 109 | Marketing |


---

# sql-008 â€” Trains starting with M going to Pune

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `train_id`, `train_name`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to find the train ID and name of all trains that have a name starting with the alphabet 'M' and that go to the station with name 'PUNE'.

### Requirements:
- **Expected Output Columns:** `train_id`, `train_name`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, LIKE, multiple conditions
- Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'.

## Schema (DDL)

**Table `train_details_tbl`**

| Column | Type | Primary Key |
|--------|------|-------------|
| train_id | INTEGER |  |
| train_name | TEXT |  |
| train_type | TEXT |  |
| train_from | TEXT |  |
| train_to | TEXT |  |
| train_speed | INTEGER |  |

**Table `train_stations_tbl`**

| Column | Type | Primary Key |
|--------|------|-------------|
| station_id | TEXT |  |
| station_name | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_from | train_to | train_speed |
|---|---|---|---|---|---|
| 1 | Maharashtra Express | EXP | MUM | P01 | 80 |
| 2 | Mumbai Local | LOC | MUM | P01 | 45 |
| 3 | Rajdhani Express | EXP | DEL | P01 | 120 |
| 4 | Mysore Express | EXP | BLR | B01 | 90 |

Table `train_stations_tbl`:

| station_id | station_name |
|---|---|
| P01 | PUNE |
| B01 | BANGALORE |

**Expected Output:**

| train_id | train_name |
|---|---|
| 1 | Maharashtra Express |
| 2 | Mumbai Local |


> Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore.

## Solution

```sql
SELECT
  td.train_id,
  td.train_name
FROM train_details_tbl td
JOIN train_stations_tbl ts ON td.train_to = ts.station_id
WHERE td.train_name LIKE 'M%'
  AND ts.station_name = 'PUNE';
```

## Explanation

Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'. Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore.

## Notes / Hints

- Join train_details_tbl to train_stations_tbl using train_to = station_id. Filter train_name with LIKE 'M%' and station_name = 'PUNE'.
- Both matching trains start with M and have train_to mapped to the PUNE station. Rajdhani does not start with M; Mysore goes to Bangalore.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-008-test-1`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_from | train_to | train_speed |
|---|---|---|---|---|---|
| 1 | Maharashtra Express | EXP | MUM | P01 | 80 |
| 2 | Mumbai Local | LOC | MUM | P01 | 45 |
| 3 | Rajdhani Express | EXP | DEL | P01 | 120 |
| 4 | Mysore Express | EXP | BLR | B01 | 90 |

Table `train_stations_tbl`:

| station_id | station_name |
|---|---|
| P01 | PUNE |
| B01 | BANGALORE |

**Expected Output:**

| train_id | train_name |
|---|---|
| 1 | Maharashtra Express |
| 2 | Mumbai Local |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-008-test-2`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_from | train_to | train_speed |
|---|---|---|---|---|---|
| 1002 | ZZ_Maharashtra Express | EXP | MUM | P01 | 1160 |

Table `train_stations_tbl`:

| station_id | station_name |
|---|---|
| P01 | ZZ_PUNE |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-008-test-3`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_from | train_to | train_speed |
|---|---|---|---|---|---|
| 1 | Maharashtra Express | EXP | MUM | P01 | 80 |
| 2 | Mumbai Local | LOC | MUM | P01 | 45 |
| 3 | Rajdhani Express | EXP | DEL | P01 | 120 |
| 4 | Mysore Express | EXP | BLR | B01 | 90 |
| 101 | Maharashtra Express | EXP | MUM | P01 | 80 |
| 103 | Mumbai Local | LOC | MUM | P01 | 45 |
| 105 | Rajdhani Express | EXP | DEL | P01 | 120 |
| 107 | Mysore Express | EXP | BLR | B01 | 90 |

Table `train_stations_tbl`:

| station_id | station_name |
|---|---|
| P01 | PUNE |
| B01 | BANGALORE |
| ALT_P01 | PUNE |
| ALT_B01 | BANGALORE |

**Expected Output:**

| train_id | train_name |
|---|---|
| 1 | Maharashtra Express |
| 2 | Mumbai Local |
| 101 | Maharashtra Express |
| 103 | Mumbai Local |


---

# sql-009 â€” Employees with more than 10 CL or ML leaves

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `EMPID`, `LEAVE_TYPE`, `TOTAL_LEAVES`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the employee ID, type of leave and total number of leaves for employees who have taken more than 10 leaves, where the leave type is either Casual Leave (CL) or Medical Leave (ML).

### Requirements:
- **Expected Output Columns:** `EMPID`, `LEAVE_TYPE`, `TOTAL_LEAVES`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** IN, WHERE, AND
- Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN.

## Schema (DDL)

**Table `LEAVE_INFO`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| FROM_DATE | TEXT |  |
| TO_DATE | TEXT |  |
| TOTAL_LEAVES | INTEGER |  |
| LEAVE_TYPE | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `LEAVE_INFO`:

| EMPID | FROM_DATE | TO_DATE | TOTAL_LEAVES | LEAVE_TYPE |
|---|---|---|---|---|
| 1 | 2024-01-01 | 2024-01-15 | 12 | CL |
| 2 | 2024-02-01 | 2024-02-20 | 15 | ML |
| 3 | 2024-03-01 | 2024-03-05 | 5 | CL |
| 4 | 2024-04-01 | 2024-04-20 | 18 | PL |
| 5 | 2024-05-01 | 2024-05-15 | 10 | ML |

**Expected Output:**

| EMPID | LEAVE_TYPE | TOTAL_LEAVES |
|---|---|---|
| 1 | CL | 12 |
| 2 | ML | 15 |


> Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10.

## Solution

```sql
SELECT
  EMPID,
  LEAVE_TYPE,
  TOTAL_LEAVES
FROM LEAVE_INFO
WHERE TOTAL_LEAVES > 10
  AND LEAVE_TYPE IN ('CL','ML');
```

## Explanation

Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN. Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10.

## Notes / Hints

- Filter LEAVE_INFO with TOTAL_LEAVES > 10 and restrict LEAVE_TYPE to CL or ML using IN.
- Only CL/ML records with more than 10 leaves qualify. Exactly 10 leaves does not qualify because the condition is > 10.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-009-test-1`

**Input Dataset:**

Table `LEAVE_INFO`:

| EMPID | FROM_DATE | TO_DATE | TOTAL_LEAVES | LEAVE_TYPE |
|---|---|---|---|---|
| 1 | 2024-01-01 | 2024-01-15 | 12 | CL |
| 2 | 2024-02-01 | 2024-02-20 | 15 | ML |
| 3 | 2024-03-01 | 2024-03-05 | 5 | CL |
| 4 | 2024-04-01 | 2024-04-20 | 18 | PL |
| 5 | 2024-05-01 | 2024-05-15 | 10 | ML |

**Expected Output:**

| EMPID | LEAVE_TYPE | TOTAL_LEAVES |
|---|---|---|
| 1 | CL | 12 |
| 2 | ML | 15 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-009-test-2`

**Input Dataset:**

Table `LEAVE_INFO`:

| EMPID | FROM_DATE | TO_DATE | TOTAL_LEAVES | LEAVE_TYPE |
|---|---|---|---|---|
| 1002 | ZZ_2024-01-01 | ZZ_2024-01-15 | 1024 | CL |

**Expected Output:**

| EMPID | LEAVE_TYPE | TOTAL_LEAVES |
|---|---|---|
| 1002 | CL | 1024 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-009-test-3`

**Input Dataset:**

Table `LEAVE_INFO`:

| EMPID | FROM_DATE | TO_DATE | TOTAL_LEAVES | LEAVE_TYPE |
|---|---|---|---|---|
| 1 | 2024-01-01 | 2024-01-15 | 12 | CL |
| 2 | 2024-02-01 | 2024-02-20 | 15 | ML |
| 3 | 2024-03-01 | 2024-03-05 | 5 | CL |
| 4 | 2024-04-01 | 2024-04-20 | 18 | PL |
| 5 | 2024-05-01 | 2024-05-15 | 10 | ML |
| 101 | 2024-01-01 | 2024-01-15 | 12 | CL |
| 103 | 2024-02-01 | 2024-02-20 | 15 | ML |
| 105 | 2024-03-01 | 2024-03-05 | 5 | CL |
| 107 | 2024-04-01 | 2024-04-20 | 18 | PL |
| 109 | 2024-05-01 | 2024-05-15 | 10 | ML |

**Expected Output:**

| EMPID | LEAVE_TYPE | TOTAL_LEAVES |
|---|---|---|
| 1 | CL | 12 |
| 2 | ML | 15 |
| 101 | CL | 12 |
| 103 | ML | 15 |


---

# sql-010 â€” Employees working in HR

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `BASIC`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the ID, Name, Department name and Basic salary of employees working in the 'HR' department.

### Requirements:
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `BASIC`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, department filtering
- Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR.

## Schema (DDL)

**Table `employee_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| EMPNAME | TEXT |  |
| DEPTID | INTEGER |  |
| EMPLOYEE_CATEGORY | TEXT |  |

**Table `department_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| DEPTID | INTEGER |  |
| DEPTNAME | TEXT |  |
| LOCATION | TEXT |  |

**Table `salary_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPLOYEE_CATEGORY | TEXT |  |
| BASIC | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 10 | A |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | BASIC |
|---|---|---|---|
| 1 | Amit | HR | 6500 |
| 3 | Neha | HR | 6500 |


> Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500.

## Solution

```sql
SELECT
  ei.EMPID,
  ei.EMPNAME,
  di.DEPTNAME,
  si.BASIC
FROM employee_info ei
JOIN department_info di ON ei.DEPTID = di.DEPTID
JOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY
WHERE di.DEPTNAME = 'HR';
```

## Explanation

Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR. Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500.

## Notes / Hints

- Join employee_info to department_info for the department name and to salary_info for basic salary. Filter the department name to HR.
- Employees 1 and 3 belong to department 10, which is HR. Their category A maps to a basic salary of 6500.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-010-test-1`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 10 | A |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | BASIC |
|---|---|---|---|
| 1 | Amit | HR | 6500 |
| 3 | Neha | HR | 6500 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-010-test-2`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1002 | ZZ_Amit | 1020 | A |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 1020 | HR | ZZ_BANGALORE |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 14000 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | BASIC |
|---|---|---|---|
| 1002 | ZZ_Amit | HR | 14000 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-010-test-3`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 10 | A |
| 101 | Amit | 110 | A |
| 103 | Riya | 121 | B |
| 105 | Neha | 112 | A |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |
| 110 | HR | BANGALORE |
| 121 | IT | COCHIN |

Table `salary_info`:

| EMPLOYEE_CATEGORY | BASIC |
|---|---|
| A | 6500 |
| B | 4800 |
| A | 6500 |
| B | 4800 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | BASIC |
|---|---|---|---|
| 1 | Amit | HR | 6500 |
| 1 | Amit | HR | 6500 |
| 3 | Neha | HR | 6500 |
| 3 | Neha | HR | 6500 |
| 101 | Amit | HR | 6500 |
| 101 | Amit | HR | 6500 |


---

# sql-011 â€” House rent allowance for Bangalore or Cochin departments

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `HOUSE_RENT_ALLOWANCE`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the ID, Name, Department name and House Rent Allowance for employees who work in departments located in either BANGALORE or COCHIN.

### Requirements:
- **Expected Output Columns:** `EMPID`, `EMPNAME`, `DEPTNAME`, `HOUSE_RENT_ALLOWANCE`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, IN, location filtering
- Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE.

## Schema (DDL)

**Table `employee_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPID | INTEGER |  |
| EMPNAME | TEXT |  |
| DEPTID | INTEGER |  |
| EMPLOYEE_CATEGORY | TEXT |  |

**Table `department_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| DEPTID | INTEGER |  |
| DEPTNAME | TEXT |  |
| LOCATION | TEXT |  |

**Table `salary_info`**

| Column | Type | Primary Key |
|--------|------|-------------|
| EMPLOYEE_CATEGORY | TEXT |  |
| HOUSE_RENT_ALLOWANCE | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 30 | C |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |
| 30 | SALES | DELHI |

Table `salary_info`:

| EMPLOYEE_CATEGORY | HOUSE_RENT_ALLOWANCE |
|---|---|
| A | 1200 |
| B | 900 |
| C | 1500 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | HOUSE_RENT_ALLOWANCE |
|---|---|---|---|
| 1 | Amit | HR | 1200 |
| 2 | Riya | IT | 900 |


> Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded.

## Solution

```sql
SELECT
  ei.EMPID,
  ei.EMPNAME,
  di.DEPTNAME,
  si.HOUSE_RENT_ALLOWANCE
FROM employee_info ei
JOIN department_info di ON ei.DEPTID = di.DEPTID
JOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY
WHERE di.LOCATION IN ('BANGALORE','COCHIN');
```

## Explanation

Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE. Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded.

## Notes / Hints

- Join employee, department and salary tables. Filter department location using IN ('BANGALORE','COCHIN') and select HOUSE_RENT_ALLOWANCE.
- Only employees in departments located in Bangalore or Cochin are included; the Delhi employee is excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-011-test-1`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 30 | C |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |
| 30 | SALES | DELHI |

Table `salary_info`:

| EMPLOYEE_CATEGORY | HOUSE_RENT_ALLOWANCE |
|---|---|
| A | 1200 |
| B | 900 |
| C | 1500 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | HOUSE_RENT_ALLOWANCE |
|---|---|---|---|
| 1 | Amit | HR | 1200 |
| 2 | Riya | IT | 900 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-011-test-2`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1002 | ZZ_Amit | 1020 | A |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 1020 | HR | ZZ_BANGALORE |

Table `salary_info`:

| EMPLOYEE_CATEGORY | HOUSE_RENT_ALLOWANCE |
|---|---|
| A | 3400 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-011-test-3`

**Input Dataset:**

Table `employee_info`:

| EMPID | EMPNAME | DEPTID | EMPLOYEE_CATEGORY |
|---|---|---|---|
| 1 | Amit | 10 | A |
| 2 | Riya | 20 | B |
| 3 | Neha | 30 | C |
| 101 | Amit | 110 | A |
| 103 | Riya | 121 | B |
| 105 | Neha | 132 | C |

Table `department_info`:

| DEPTID | DEPTNAME | LOCATION |
|---|---|---|
| 10 | HR | BANGALORE |
| 20 | IT | COCHIN |
| 30 | SALES | DELHI |
| 110 | HR | BANGALORE |
| 121 | IT | COCHIN |
| 132 | SALES | DELHI |

Table `salary_info`:

| EMPLOYEE_CATEGORY | HOUSE_RENT_ALLOWANCE |
|---|---|
| A | 1200 |
| B | 900 |
| C | 1500 |
| A | 1200 |
| B | 900 |
| C | 1500 |

**Expected Output:**

| EMPID | EMPNAME | DEPTNAME | HOUSE_RENT_ALLOWANCE |
|---|---|---|---|
| 1 | Amit | HR | 1200 |
| 1 | Amit | HR | 1200 |
| 2 | Riya | IT | 900 |
| 2 | Riya | IT | 900 |
| 101 | Amit | HR | 1200 |
| 101 | Amit | HR | 1200 |
| 103 | Riya | IT | 900 |
| 103 | Riya | IT | 900 |


---

# sql-012 â€” Average account balance by account type

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** AGGREGATION & GROUPING
- **Expected Output Columns:** `Account_Type_ID`, `Average`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the account type ID and average account balance for each account type where the average account balance is greater than or equal to 50000.

### Requirements:
- **Expected Output Columns:** `Account_Type_ID`, `Average`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** GROUP BY, AVG, HAVING
- Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result.

## Schema (DDL)

**Table `Accounts`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Account_ID | INTEGER |  |
| Account_Type_ID | INTEGER |  |
| Account_Balance | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `Accounts`:

| Account_ID | Account_Type_ID | Account_Balance |
|---|---|---|
| 1 | 10 | 60000 |
| 2 | 10 | 40000 |
| 3 | 20 | 70000 |
| 4 | 20 | 80000 |
| 5 | 30 | 30000 |

**Expected Output:**

| Account_Type_ID | Average |
|---|---|
| 10 | 50000 |
| 20 | 75000 |


> Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000.

## Solution

```sql
SELECT
  Account_Type_ID,
  AVG(Account_Balance) AS Average
FROM Accounts
GROUP BY Account_Type_ID
HAVING AVG(Account_Balance) >= 50000;
```

## Explanation

Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result. Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000.

## Notes / Hints

- Group accounts by Account_Type_ID, calculate AVG(Account_Balance), and use HAVING because the condition is applied to the aggregate result.
- Type 10 averages 50000 and therefore qualifies because the condition is >= 50000. Type 20 averages 75000. Type 30 averages only 30000.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-012-test-1`

**Input Dataset:**

Table `Accounts`:

| Account_ID | Account_Type_ID | Account_Balance |
|---|---|---|
| 1 | 10 | 60000 |
| 2 | 10 | 40000 |
| 3 | 20 | 70000 |
| 4 | 20 | 80000 |
| 5 | 30 | 30000 |

**Expected Output:**

| Account_Type_ID | Average |
|---|---|
| 10 | 50000 |
| 20 | 75000 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-012-test-2`

**Input Dataset:**

Table `Accounts`:

| Account_ID | Account_Type_ID | Account_Balance |
|---|---|---|
| 1002 | 1020 | 121000 |

**Expected Output:**

| Account_Type_ID | Average |
|---|---|
| 1020 | 121000 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-012-test-3`

**Input Dataset:**

Table `Accounts`:

| Account_ID | Account_Type_ID | Account_Balance |
|---|---|---|
| 1 | 10 | 60000 |
| 2 | 10 | 40000 |
| 3 | 20 | 70000 |
| 4 | 20 | 80000 |
| 5 | 30 | 30000 |
| 101 | 110 | 60000 |
| 103 | 111 | 40000 |
| 105 | 122 | 70000 |
| 107 | 123 | 80000 |
| 109 | 134 | 30000 |

**Expected Output:**

| Account_Type_ID | Average |
|---|---|
| 10 | 50000 |
| 20 | 75000 |
| 110 | 60000 |
| 122 | 70000 |
| 123 | 80000 |


---

# sql-013 â€” Customers with bank balance at least 50,000

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `First_Name`, `Last_Name`, `Account_ID`
- **Order Sensitive:** Yes

## Problem Statement

### Problem Statement
Write an SQL query to display the first name, last name and account ID of customers who have a bank balance greater than or equal to 50000. Order the output by the customer's first name.

### Requirements:
- **Expected Output Columns:** `First_Name`, `Last_Name`, `Account_ID`
- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, WHERE, ORDER BY
- Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name.

## Schema (DDL)

**Table `customer`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Customer_ID | INTEGER |  |
| First_Name | TEXT |  |
| Last_Name | TEXT |  |

**Table `account`**

| Column | Type | Primary Key |
|--------|------|-------------|
| Account_ID | INTEGER |  |
| Customer_ID | INTEGER |  |
| Balance | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `customer`:

| Customer_ID | First_Name | Last_Name |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |

Table `account`:

| Account_ID | Customer_ID | Balance |
|---|---|---|
| 101 | 1 | 50000 |
| 102 | 2 | 75000 |
| 103 | 3 | 45000 |
| 104 | 4 | 60000 |

**Expected Output:**

| First_Name | Last_Name | Account_ID |
|---|---|---|
| Amit | Shah | 101 |
| Raj | Kumar | 104 |
| Riya | Roy | 102 |


> Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name.

## Solution

```sql
SELECT
  c.First_Name,
  c.Last_Name,
  a.Account_ID
FROM customer c
JOIN account a ON c.Customer_ID = a.Customer_ID
WHERE a.Balance >= 50000
ORDER BY c.First_Name;
```

## Explanation

Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name. Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name.

## Notes / Hints

- Join customer and account using Customer_ID, filter Balance >= 50000, and sort by First_Name.
- Amit qualifies at exactly 50000, Raj and Riya qualify above it, and Neha is excluded. The final order is alphabetical by first name.
- Rows must match the exact sorting specified.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-013-test-1`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |

Table `account`:

| Account_ID | Customer_ID | Balance |
|---|---|---|
| 101 | 1 | 50000 |
| 102 | 2 | 75000 |
| 103 | 3 | 45000 |
| 104 | 4 | 60000 |

**Expected Output:**

| First_Name | Last_Name | Account_ID |
|---|---|---|
| Amit | Shah | 101 |
| Raj | Kumar | 104 |
| Riya | Roy | 102 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-013-test-2`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name |
|---|---|---|
| 1002 | ZZ_Amit | ZZ_Shah |

Table `account`:

| Account_ID | Customer_ID | Balance |
|---|---|---|
| 1202 | 1002 | 101000 |

**Expected Output:**

| First_Name | Last_Name | Account_ID |
|---|---|---|
| ZZ_Amit | ZZ_Shah | 1202 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-013-test-3`

**Input Dataset:**

Table `customer`:

| Customer_ID | First_Name | Last_Name |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |
| 101 | Amit | Shah |
| 103 | Riya | Roy |
| 105 | Neha | Das |
| 107 | Raj | Kumar |

Table `account`:

| Account_ID | Customer_ID | Balance |
|---|---|---|
| 101 | 1 | 50000 |
| 102 | 2 | 75000 |
| 103 | 3 | 45000 |
| 104 | 4 | 60000 |
| 201 | 101 | 50000 |
| 203 | 103 | 75000 |
| 205 | 105 | 45000 |
| 207 | 107 | 60000 |

**Expected Output:**

| First_Name | Last_Name | Account_ID |
|---|---|---|
| Amit | Shah | 101 |
| Amit | Shah | 201 |
| Raj | Kumar | 104 |
| Raj | Kumar | 207 |
| Riya | Roy | 102 |
| Riya | Roy | 203 |


---

# sql-014 â€” Staff with salary greater than 50,000

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `Staff First Name`, `POSITION`, `SALARY`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the First name (using alias 'Staff First Name'), Position and salary of staff members where salary is greater than 50000.

### Requirements:
- **Expected Output Columns:** `Staff First Name`, `POSITION`, `SALARY`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** alias, WHERE
- Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested.

## Schema (DDL)

**Table `staff`**

| Column | Type | Primary Key |
|--------|------|-------------|
| firstname | TEXT |  |
| position | TEXT |  |
| salary | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `staff`:

| firstname | position | salary |
|---|---|---|
| Amit | Manager | 60000 |
| Riya | Analyst | 50000 |
| Neha | Developer | 75000 |
| Raj | Clerk | 45000 |

**Expected Output:**

| Staff First Name | POSITION | SALARY |
|---|---|---|
| Amit | Manager | 60000 |
| Neha | Developer | 75000 |


> Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded.

## Solution

```sql
SELECT
  firstname AS \`Staff First Name\`,
  position AS POSITION,
  salary AS SALARY
FROM staff
WHERE salary > 50000;
```

## Explanation

Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested. Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded.

## Notes / Hints

- Select the requested columns from staff and apply salary > 50000. Alias the first-name column exactly as requested.
- Only salaries strictly greater than 50000 qualify, so the employee at exactly 50000 is excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-014-test-1`

**Input Dataset:**

Table `staff`:

| firstname | position | salary |
|---|---|---|
| Amit | Manager | 60000 |
| Riya | Analyst | 50000 |
| Neha | Developer | 75000 |
| Raj | Clerk | 45000 |

**Expected Output:**

| Staff First Name | POSITION | SALARY |
|---|---|---|
| Amit | Manager | 60000 |
| Neha | Developer | 75000 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-014-test-2`

**Input Dataset:**

Table `staff`:

| firstname | position | salary |
|---|---|---|
| ZZ_Amit | ZZ_Manager | 121000 |

**Expected Output:**

| Staff First Name | POSITION | SALARY |
|---|---|---|
| ZZ_Amit | ZZ_Manager | 121000 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-014-test-3`

**Input Dataset:**

Table `staff`:

| firstname | position | salary |
|---|---|---|
| Amit | Manager | 60000 |
| Riya | Analyst | 50000 |
| Neha | Developer | 75000 |
| Raj | Clerk | 45000 |
| Amit | Manager | 60000 |
| Riya | Analyst | 50000 |
| Neha | Developer | 75000 |
| Raj | Clerk | 45000 |

**Expected Output:**

| Staff First Name | POSITION | SALARY |
|---|---|---|
| Amit | Manager | 60000 |
| Neha | Developer | 75000 |
| Amit | Manager | 60000 |
| Neha | Developer | 75000 |


---

# sql-015 â€” Patients with unpaid bills

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `PatientName`, `PatientEmail`, `AdmissionDate`, `TotalBilling`
- **Order Sensitive:** Yes

## Problem Statement

### Problem Statement
Write an SQL query to display the full name (alias 'PatientName'), email (alias 'PatientEmail'), admission date (alias 'AdmissionDate'), and total billing amount (alias 'TotalBilling') for each patient. Include only patients with unpaid bills and sort by total billing amount descending.

### Requirements:
- **Expected Output Columns:** `PatientName`, `PatientEmail`, `AdmissionDate`, `TotalBilling`
- **Ordering Requirement:** Result MUST be ordered as specified in the problem statement.
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, CONCAT, alias, ORDER BY DESC
- Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order.

## Schema (DDL)

**Table `Patient`**

| Column | Type | Primary Key |
|--------|------|-------------|
| PatientID | INTEGER |  |
| FirstName | TEXT |  |
| LastName | TEXT |  |
| Email | TEXT |  |
| AdmissionDate | TEXT |  |

**Table `Billing`**

| Column | Type | Primary Key |
|--------|------|-------------|
| BillingID | INTEGER |  |
| PatientID | INTEGER |  |
| TotalAmount | INTEGER |  |
| PaymentStatus | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `Patient`:

| PatientID | FirstName | LastName | Email | AdmissionDate |
|---|---|---|---|---|
| 1 | John | Doe | john@example.com | 2024-01-10 |
| 2 | Maya | Singh | maya@example.com | 2024-01-11 |
| 3 | Raj | Kumar | raj@example.com | 2024-01-12 |

Table `Billing`:

| BillingID | PatientID | TotalAmount | PaymentStatus |
|---|---|---|---|
| 101 | 1 | 9000 | Unpaid |
| 102 | 2 | 12000 | Paid |
| 103 | 3 | 15000 | Unpaid |

**Expected Output:**

| PatientName | PatientEmail | AdmissionDate | TotalBilling |
|---|---|---|---|
| Raj Kumar | raj@example.com | 2024-01-12 | 15000 |
| John Doe | john@example.com | 2024-01-10 | 9000 |


> John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid.

## Solution

```sql
SELECT
  CONCAT(p.FirstName, ' ', p.LastName) AS PatientName,
  p.Email AS PatientEmail,
  p.AdmissionDate AS AdmissionDate,
  b.TotalAmount AS TotalBilling
FROM Patient p
JOIN Billing b ON p.PatientID = b.PatientID
WHERE b.PaymentStatus = 'Unpaid'
ORDER BY b.TotalAmount DESC;
```

## Explanation

Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order. John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid.

## Notes / Hints

- Join Patient and Billing on PatientID. Build the full name with CONCAT, filter PaymentStatus = 'Unpaid', and sort TotalAmount in descending order.
- John and Raj have unpaid bills. Raj appears first because 15000 is greater than 9000. Maya is excluded because the bill is paid.
- Rows must match the exact sorting specified.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-015-test-1`

**Input Dataset:**

Table `Patient`:

| PatientID | FirstName | LastName | Email | AdmissionDate |
|---|---|---|---|---|
| 1 | John | Doe | john@example.com | 2024-01-10 |
| 2 | Maya | Singh | maya@example.com | 2024-01-11 |
| 3 | Raj | Kumar | raj@example.com | 2024-01-12 |

Table `Billing`:

| BillingID | PatientID | TotalAmount | PaymentStatus |
|---|---|---|---|
| 101 | 1 | 9000 | Unpaid |
| 102 | 2 | 12000 | Paid |
| 103 | 3 | 15000 | Unpaid |

**Expected Output:**

| PatientName | PatientEmail | AdmissionDate | TotalBilling |
|---|---|---|---|
| Raj Kumar | raj@example.com | 2024-01-12 | 15000 |
| John Doe | john@example.com | 2024-01-10 | 9000 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-015-test-2`

**Input Dataset:**

Table `Patient`:

| PatientID | FirstName | LastName | Email | AdmissionDate |
|---|---|---|---|---|
| 1002 | ZZ_John | Doe | ZZ_john@example.com | ZZ_2024-01-10 |

Table `Billing`:

| BillingID | PatientID | TotalAmount | PaymentStatus |
|---|---|---|---|
| 1202 | 1002 | 19000 | ZZ_Unpaid |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-015-test-3`

**Input Dataset:**

Table `Patient`:

| PatientID | FirstName | LastName | Email | AdmissionDate |
|---|---|---|---|---|
| 1 | John | Doe | john@example.com | 2024-01-10 |
| 2 | Maya | Singh | maya@example.com | 2024-01-11 |
| 3 | Raj | Kumar | raj@example.com | 2024-01-12 |
| 101 | John | Doe | john@example.com | 2024-01-10 |
| 103 | Maya | Singh | maya@example.com | 2024-01-11 |
| 105 | Raj | Kumar | raj@example.com | 2024-01-12 |

Table `Billing`:

| BillingID | PatientID | TotalAmount | PaymentStatus |
|---|---|---|---|
| 101 | 1 | 9000 | Unpaid |
| 102 | 2 | 12000 | Paid |
| 103 | 3 | 15000 | Unpaid |
| 201 | 101 | 9000 | Unpaid |
| 203 | 103 | 12000 | Paid |
| 205 | 105 | 15000 | Unpaid |

**Expected Output:**

| PatientName | PatientEmail | AdmissionDate | TotalBilling |
|---|---|---|---|
| Raj Kumar | raj@example.com | 2024-01-12 | 15000 |
| Raj Kumar | raj@example.com | 2024-01-12 | 15000 |
| John Doe | john@example.com | 2024-01-10 | 9000 |
| John Doe | john@example.com | 2024-01-10 | 9000 |


---

# sql-016 â€” Flights operated by Singapore Airlines

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `FLIGHT_ID`, `DEPARTURE_DATE`, `DEPARTURE_TIME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the list of flights operated by Singapore Airlines, including the flight ID, departure date and departure time.

### Requirements:
- **Expected Output Columns:** `FLIGHT_ID`, `DEPARTURE_DATE`, `DEPARTURE_TIME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** three-table JOIN, foreign keys, filtering
- Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines.

## Schema (DDL)

**Table `Flight`**

| Column | Type | Primary Key |
|--------|------|-------------|
| FLIGHT_ID | INTEGER |  |
| AIRPLANE_ID | INTEGER |  |
| DEPARTURE_DATE | TEXT |  |
| DEPARTURE_TIME | TEXT |  |

**Table `Airplane`**

| Column | Type | Primary Key |
|--------|------|-------------|
| AIRPLANE_ID | INTEGER |  |
| AIRLINE_ID | INTEGER |  |
| MODELNUMBER | TEXT |  |
| MANUFACTURER | TEXT |  |

**Table `Airline`**

| Column | Type | Primary Key |
|--------|------|-------------|
| AIRLINE_ID | INTEGER |  |
| NAME | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `Flight`:

| FLIGHT_ID | AIRPLANE_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|---|
| 1 | 10 | 2024-02-10 | 09:00 |
| 2 | 11 | 2024-02-11 | 12:00 |
| 3 | 12 | 2024-02-12 | 18:00 |

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |

Table `Airline`:

| AIRLINE_ID | NAME |
|---|---|
| 100 | Singapore Airlines |
| 101 | Other Airline |

**Expected Output:**

| FLIGHT_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|
| 1 | 2024-02-10 | 09:00 |
| 3 | 2024-02-12 | 18:00 |


> Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline.

## Solution

```sql
SELECT
  f.FLIGHT_ID,
  f.DEPARTURE_DATE,
  f.DEPARTURE_TIME
FROM Flight f
JOIN Airplane a ON f.AIRPLANE_ID = a.AIRPLANE_ID
JOIN Airline al ON a.AIRLINE_ID = al.AIRLINE_ID
WHERE al.NAME = 'Singapore Airlines';
```

## Explanation

Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines. Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline.

## Notes / Hints

- Flight references an airplane, and airplane references an airline. Join Flight → Airplane → Airline and filter airline name to Singapore Airlines.
- Flights 1 and 3 use airplanes operated by Singapore Airlines; flight 2 belongs to another airline.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-016-test-1`

**Input Dataset:**

Table `Flight`:

| FLIGHT_ID | AIRPLANE_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|---|
| 1 | 10 | 2024-02-10 | 09:00 |
| 2 | 11 | 2024-02-11 | 12:00 |
| 3 | 12 | 2024-02-12 | 18:00 |

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |

Table `Airline`:

| AIRLINE_ID | NAME |
|---|---|
| 100 | Singapore Airlines |
| 101 | Other Airline |

**Expected Output:**

| FLIGHT_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|
| 1 | 2024-02-10 | 09:00 |
| 3 | 2024-02-12 | 18:00 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-016-test-2`

**Input Dataset:**

Table `Flight`:

| FLIGHT_ID | AIRPLANE_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|---|
| 1002 | 1020 | ZZ_2024-02-10 | ZZ_09:00 |

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 1020 | 1200 | ZZ_A320 | ZZ_Airbus |

Table `Airline`:

| AIRLINE_ID | NAME |
|---|---|
| 1200 | ZZ_Singapore Airlines |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-016-test-3`

**Input Dataset:**

Table `Flight`:

| FLIGHT_ID | AIRPLANE_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|---|
| 1 | 10 | 2024-02-10 | 09:00 |
| 2 | 11 | 2024-02-11 | 12:00 |
| 3 | 12 | 2024-02-12 | 18:00 |
| 101 | 110 | 2024-02-10 | 09:00 |
| 103 | 112 | 2024-02-11 | 12:00 |
| 105 | 114 | 2024-02-12 | 18:00 |

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |
| 110 | 200 | A320 | Airbus |
| 112 | 202 | B737 | Boeing |
| 114 | 202 | A350 | Airbus |

Table `Airline`:

| AIRLINE_ID | NAME |
|---|---|
| 100 | Singapore Airlines |
| 101 | Other Airline |
| 200 | Singapore Airlines |
| 202 | Other Airline |

**Expected Output:**

| FLIGHT_ID | DEPARTURE_DATE | DEPARTURE_TIME |
|---|---|---|
| 1 | 2024-02-10 | 09:00 |
| 3 | 2024-02-12 | 18:00 |
| 101 | 2024-02-10 | 09:00 |


---

# sql-017 â€” Airbus airplanes

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `AIRPLANE_ID`, `MODELNUMBER`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the AIRPLANE_ID and MODELNUMBER of airplanes manufactured by Airbus.

### Requirements:
- **Expected Output Columns:** `AIRPLANE_ID`, `MODELNUMBER`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** WHERE, string comparison
- This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'.

## Schema (DDL)

**Table `Airplane`**

| Column | Type | Primary Key |
|--------|------|-------------|
| AIRPLANE_ID | INTEGER |  |
| AIRLINE_ID | INTEGER |  |
| MODELNUMBER | TEXT |  |
| MANUFACTURER | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |

**Expected Output:**

| AIRPLANE_ID | MODELNUMBER |
|---|---|
| 10 | A320 |
| 12 | A350 |


> Only rows whose manufacturer is exactly Airbus are returned.

## Solution

```sql
SELECT
  AIRPLANE_ID,
  MODELNUMBER
FROM Airplane
WHERE MANUFACTURER = 'Airbus';
```

## Explanation

This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'. Only rows whose manufacturer is exactly Airbus are returned.

## Notes / Hints

- This is a single-table filtering problem. Select the two requested columns and filter MANUFACTURER = 'Airbus'.
- Only rows whose manufacturer is exactly Airbus are returned.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-017-test-1`

**Input Dataset:**

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |

**Expected Output:**

| AIRPLANE_ID | MODELNUMBER |
|---|---|
| 10 | A320 |
| 12 | A350 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-017-test-2`

**Input Dataset:**

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 1020 | 1200 | ZZ_A320 | ZZ_Airbus |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-017-test-3`

**Input Dataset:**

Table `Airplane`:

| AIRPLANE_ID | AIRLINE_ID | MODELNUMBER | MANUFACTURER |
|---|---|---|---|
| 10 | 100 | A320 | Airbus |
| 11 | 101 | B737 | Boeing |
| 12 | 100 | A350 | Airbus |
| 110 | 200 | A320 | Airbus |
| 112 | 202 | B737 | Boeing |
| 114 | 202 | A350 | Airbus |

**Expected Output:**

| AIRPLANE_ID | MODELNUMBER |
|---|---|
| 10 | A320 |
| 12 | A350 |
| 110 | A320 |
| 114 | A350 |


---

# sql-018 â€” Students registered in 2012

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `LAST_NAME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the last names of students who registered in the year 2012.

### Requirements:
- **Expected Output Columns:** `LAST_NAME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, date/year filtering
- Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative.

## Schema (DDL)

**Table `student`**

| Column | Type | Primary Key |
|--------|------|-------------|
| STUDENT_ID | INTEGER |  |
| LAST_NAME | TEXT |  |
| FIRST_NAME | TEXT |  |

**Table `registration`**

| Column | Type | Primary Key |
|--------|------|-------------|
| REG_ID | INTEGER |  |
| STUDENT_ID | INTEGER |  |
| REG_DATE | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `student`:

| STUDENT_ID | LAST_NAME | FIRST_NAME |
|---|---|---|
| 1 | Shah | Amit |
| 2 | Roy | Riya |
| 3 | Das | Neha |

Table `registration`:

| REG_ID | STUDENT_ID | REG_DATE |
|---|---|---|
| 101 | 1 | 2012-05-10 |
| 102 | 2 | 2011-06-12 |
| 103 | 3 | 2012-09-01 |

**Expected Output:**

| LAST_NAME |
|---|
| Shah |
| Das |


> Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded.

## Solution

```sql
SELECT
  s.LAST_NAME
FROM student s
JOIN registration r ON s.STUDENT_ID = r.STUDENT_ID
WHERE EXTRACT(YEAR
FROM r.REG_DATE) = 2012;
```

## Explanation

Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative. Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded.

## Notes / Hints

- Join Student and Registration using Student_ID. Extract the year from REG_DATE and keep records from 2012. The supplied source also shows a LIKE '2012%' alternative.
- Students 1 and 3 have registration dates in 2012. Student 2 registered in 2011 and is excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-018-test-1`

**Input Dataset:**

Table `student`:

| STUDENT_ID | LAST_NAME | FIRST_NAME |
|---|---|---|
| 1 | Shah | Amit |
| 2 | Roy | Riya |
| 3 | Das | Neha |

Table `registration`:

| REG_ID | STUDENT_ID | REG_DATE |
|---|---|---|
| 101 | 1 | 2012-05-10 |
| 102 | 2 | 2011-06-12 |
| 103 | 3 | 2012-09-01 |

**Expected Output:**

| LAST_NAME |
|---|
| Shah |
| Das |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-018-test-2`

**Input Dataset:**

Table `student`:

| STUDENT_ID | LAST_NAME | FIRST_NAME |
|---|---|---|
| 1002 | ZZ_Shah | ZZ_Amit |

Table `registration`:

| REG_ID | STUDENT_ID | REG_DATE |
|---|---|---|
| 1202 | 1002 | ZZ_2012-05-10 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-018-test-3`

**Input Dataset:**

Table `student`:

| STUDENT_ID | LAST_NAME | FIRST_NAME |
|---|---|---|
| 1 | Shah | Amit |
| 2 | Roy | Riya |
| 3 | Das | Neha |
| 101 | Shah | Amit |
| 103 | Roy | Riya |
| 105 | Das | Neha |

Table `registration`:

| REG_ID | STUDENT_ID | REG_DATE |
|---|---|---|
| 101 | 1 | 2012-05-10 |
| 102 | 2 | 2011-06-12 |
| 103 | 3 | 2012-09-01 |
| 201 | 101 | 2012-05-10 |
| 203 | 103 | 2011-06-12 |
| 205 | 105 | 2012-09-01 |

**Expected Output:**

| LAST_NAME |
|---|
| Shah |
| Das |
| Shah |
| Das |


---

# sql-019 â€” Cabin crew with first name A and flight ID ending in 1

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `CABINCREW_ID`, `FIRST_NAME`, `LAST_NAME`, `CONTACT`, `FLIGHT_ID`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the cabin crew ID, first name, last name, contact and flight ID of cabin crew members whose first name starts with 'A' and whose flight ID ends with '1'.

### Requirements:
- **Expected Output Columns:** `CABINCREW_ID`, `FIRST_NAME`, `LAST_NAME`, `CONTACT`, `FLIGHT_ID`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, LIKE, multiple filters
- Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1.

## Schema (DDL)

**Table `cabincrew`**

| Column | Type | Primary Key |
|--------|------|-------------|
| CABINCREW_ID | INTEGER |  |
| FLIGHT_ID | INTEGER |  |
| FIRST_NAME | TEXT |  |
| LAST_NAME | TEXT |  |
| CONTACT | TEXT |  |

**Table `flight`**

| Column | Type | Primary Key |
|--------|------|-------------|
| FLIGHT_ID | INTEGER |  |
| FLIGHT_TO | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `cabincrew`:

| CABINCREW_ID | FLIGHT_ID | FIRST_NAME | LAST_NAME | CONTACT |
|---|---|---|---|---|
| 1 | 11 | Anita | Sharma | 90001 |
| 2 | 12 | Aman | Roy | 90002 |
| 3 | 21 | Ajay | Das | 90003 |
| 4 | 11 | Riya | Khan | 90004 |

Table `flight`:

| FLIGHT_ID | FLIGHT_TO |
|---|---|
| 11 | Paris |
| 12 | London |
| 21 | Rome |

**Expected Output:**

| CABINCREW_ID | FIRST_NAME | LAST_NAME | CONTACT | FLIGHT_ID |
|---|---|---|---|---|
| 1 | Anita | Sharma | 90001 | 11 |
| 3 | Ajay | Das | 90003 | 21 |


> Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition.

## Solution

```sql
SELECT
  c.CABINCREW_ID,
  c.FIRST_NAME,
  c.LAST_NAME,
  c.CONTACT,
  f.FLIGHT_ID
FROM cabincrew c
JOIN flight f ON c.FLIGHT_ID = f.FLIGHT_ID
WHERE c.FIRST_NAME LIKE 'A%'
  AND f.FLIGHT_ID LIKE '%1';
```

## Explanation

Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1. Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition.

## Notes / Hints

- Join cabincrew to flight on FLIGHT_ID. Use LIKE 'A%' for the crew first name and LIKE '%1' for a flight ID ending in 1.
- Anita and Ajay start with A and their flight IDs end in 1. Aman fails the flight-ID condition and Riya fails the name condition.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-019-test-1`

**Input Dataset:**

Table `cabincrew`:

| CABINCREW_ID | FLIGHT_ID | FIRST_NAME | LAST_NAME | CONTACT |
|---|---|---|---|---|
| 1 | 11 | Anita | Sharma | 90001 |
| 2 | 12 | Aman | Roy | 90002 |
| 3 | 21 | Ajay | Das | 90003 |
| 4 | 11 | Riya | Khan | 90004 |

Table `flight`:

| FLIGHT_ID | FLIGHT_TO |
|---|---|
| 11 | Paris |
| 12 | London |
| 21 | Rome |

**Expected Output:**

| CABINCREW_ID | FIRST_NAME | LAST_NAME | CONTACT | FLIGHT_ID |
|---|---|---|---|---|
| 1 | Anita | Sharma | 90001 | 11 |
| 3 | Ajay | Das | 90003 | 21 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-019-test-2`

**Input Dataset:**

Table `cabincrew`:

| CABINCREW_ID | FLIGHT_ID | FIRST_NAME | LAST_NAME | CONTACT |
|---|---|---|---|---|
| 1002 | 1022 | ZZ_Anita | ZZ_Sharma | ZZ_90001 |

Table `flight`:

| FLIGHT_ID | FLIGHT_TO |
|---|---|
| 1022 | ZZ_Paris |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-019-test-3`

**Input Dataset:**

Table `cabincrew`:

| CABINCREW_ID | FLIGHT_ID | FIRST_NAME | LAST_NAME | CONTACT |
|---|---|---|---|---|
| 1 | 11 | Anita | Sharma | 90001 |
| 2 | 12 | Aman | Roy | 90002 |
| 3 | 21 | Ajay | Das | 90003 |
| 4 | 11 | Riya | Khan | 90004 |
| 101 | 111 | Anita | Sharma | 90001 |
| 103 | 113 | Aman | Roy | 90002 |
| 105 | 123 | Ajay | Das | 90003 |
| 107 | 114 | Riya | Khan | 90004 |

Table `flight`:

| FLIGHT_ID | FLIGHT_TO |
|---|---|
| 11 | Paris |
| 12 | London |
| 21 | Rome |
| 111 | Paris |
| 113 | London |
| 123 | Rome |

**Expected Output:**

| CABINCREW_ID | FIRST_NAME | LAST_NAME | CONTACT | FLIGHT_ID |
|---|---|---|---|---|
| 1 | Anita | Sharma | 90001 | 11 |
| 3 | Ajay | Das | 90003 | 21 |
| 101 | Anita | Sharma | 90001 | 111 |


---

# sql-020 â€” Passengers and baggage on flights to Paris on 2024-02-11

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** AGGREGATION & GROUPING
- **Expected Output Columns:** `FLIGHT_ID`, `Total_Passengers`, `Total_Baggage`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the flight ID, total number of passengers and total baggage for flights going to Paris and arriving on 2024-02-11.

### Requirements:
- **Expected Output Columns:** `FLIGHT_ID`, `Total_Passengers`, `Total_Baggage`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, COUNT, SUM, GROUP BY
- Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage.

## Schema (DDL)

**Table `flight`**

| Column | Type | Primary Key |
|--------|------|-------------|
| FLIGHT_ID | INTEGER |  |
| FLIGHT_TO | TEXT |  |
| ARRIVAL_DATE | TEXT |  |

**Table `boardingpass`**

| Column | Type | Primary Key |
|--------|------|-------------|
| BOARDINGPASS_ID | INTEGER |  |
| FLIGHT_ID | INTEGER |  |
| PASSENGER_ID | INTEGER |  |
| BAGGAGE | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `flight`:

| FLIGHT_ID | FLIGHT_TO | ARRIVAL_DATE |
|---|---|---|
| 1 | Paris | 2024-02-11 |
| 2 | Paris | 2024-02-12 |
| 3 | London | 2024-02-11 |

Table `boardingpass`:

| BOARDINGPASS_ID | FLIGHT_ID | PASSENGER_ID | BAGGAGE |
|---|---|---|---|
| 101 | 1 | 501 | 20 |
| 102 | 1 | 502 | 15 |
| 103 | 2 | 503 | 10 |
| 104 | 3 | 504 | 30 |

**Expected Output:**

| FLIGHT_ID | Total_Passengers | Total_Baggage |
|---|---|---|
| 1 | 2 | 35 |


> Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage.

## Solution

```sql
SELECT
  f.FLIGHT_ID,
  COUNT(bp.PASSENGER_ID) AS Total_Passengers,
  SUM(bp.BAGGAGE) AS Total_Baggage
FROM flight f
JOIN boardingpass bp ON f.FLIGHT_ID = bp.FLIGHT_ID
WHERE f.FLIGHT_TO = 'Paris'
  AND f.ARRIVAL_DATE = '2024-02-11'
GROUP BY f.FLIGHT_ID;
```

## Explanation

Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage. Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage.

## Notes / Hints

- Join Flight with BoardingPass, filter destination and arrival date, then group by flight ID. COUNT counts passengers and SUM totals baggage.
- Only flight 1 meets both destination and arrival-date filters. It has two boarding-pass records with 20 + 15 baggage.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-020-test-1`

**Input Dataset:**

Table `flight`:

| FLIGHT_ID | FLIGHT_TO | ARRIVAL_DATE |
|---|---|---|
| 1 | Paris | 2024-02-11 |
| 2 | Paris | 2024-02-12 |
| 3 | London | 2024-02-11 |

Table `boardingpass`:

| BOARDINGPASS_ID | FLIGHT_ID | PASSENGER_ID | BAGGAGE |
|---|---|---|---|
| 101 | 1 | 501 | 20 |
| 102 | 1 | 502 | 15 |
| 103 | 2 | 503 | 10 |
| 104 | 3 | 504 | 30 |

**Expected Output:**

| FLIGHT_ID | Total_Passengers | Total_Baggage |
|---|---|---|
| 1 | 2 | 35 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-020-test-2`

**Input Dataset:**

Table `flight`:

| FLIGHT_ID | FLIGHT_TO | ARRIVAL_DATE |
|---|---|---|
| 1002 | ZZ_Paris | ZZ_2024-02-11 |

Table `boardingpass`:

| BOARDINGPASS_ID | FLIGHT_ID | PASSENGER_ID | BAGGAGE |
|---|---|---|---|
| 1202 | 1002 | 2002 | 1040 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-020-test-3`

**Input Dataset:**

Table `flight`:

| FLIGHT_ID | FLIGHT_TO | ARRIVAL_DATE |
|---|---|---|
| 1 | Paris | 2024-02-11 |
| 2 | Paris | 2024-02-12 |
| 3 | London | 2024-02-11 |
| 101 | Paris | 2024-02-11 |
| 103 | Paris | 2024-02-12 |
| 105 | London | 2024-02-11 |

Table `boardingpass`:

| BOARDINGPASS_ID | FLIGHT_ID | PASSENGER_ID | BAGGAGE |
|---|---|---|---|
| 101 | 1 | 501 | 20 |
| 102 | 1 | 502 | 15 |
| 103 | 2 | 503 | 10 |
| 104 | 3 | 504 | 30 |
| 201 | 101 | 601 | 20 |
| 203 | 102 | 603 | 15 |
| 205 | 104 | 605 | 10 |
| 207 | 106 | 607 | 30 |

**Expected Output:**

| FLIGHT_ID | Total_Passengers | Total_Baggage |
|---|---|---|
| 1 | 2 | 35 |
| 101 | 1 | 20 |


---

# sql-021 â€” Count products in the Women category

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** AGGREGATION & GROUPING
- **Expected Output Columns:** `product_count`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to find the number of products belonging to the 'Women' category.

### Requirements:
- **Expected Output Columns:** `product_count`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, COUNT
- A product can be connected to categories through product_category. Join all three tables and count matching product records.

## Schema (DDL)

**Table `product`**

| Column | Type | Primary Key |
|--------|------|-------------|
| PRODUCT_ID | INTEGER |  |
| NAME | TEXT |  |

**Table `product_category`**

| Column | Type | Primary Key |
|--------|------|-------------|
| PRODUCT_ID | INTEGER |  |
| CATEGORY_ID | INTEGER |  |

**Table `category`**

| Column | Type | Primary Key |
|--------|------|-------------|
| CATEGORY_ID | INTEGER |  |
| NAME | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Dress |
| 2 | Shoes |
| 3 | Laptop |
| 4 | Bag |

Table `product_category`:

| PRODUCT_ID | CATEGORY_ID |
|---|---|
| 1 | 10 |
| 2 | 10 |
| 3 | 20 |
| 4 | 30 |

Table `category`:

| CATEGORY_ID | NAME |
|---|---|
| 10 | Women |
| 20 | Electronics |
| 30 | Travel |

**Expected Output:**

| product_count |
|---|
| 2 |


> Two products map to category 10, whose name is Women.

## Solution

```sql
SELECT
  COUNT(*) AS product_count
FROM product p
JOIN product_category pc ON p.PRODUCT_ID = pc.PRODUCT_ID
JOIN category c ON pc.CATEGORY_ID = c.CATEGORY_ID
WHERE c.NAME = 'Women';
```

## Explanation

A product can be connected to categories through product_category. Join all three tables and count matching product records. Two products map to category 10, whose name is Women.

## Notes / Hints

- A product can be connected to categories through product_category. Join all three tables and count matching product records.
- Two products map to category 10, whose name is Women.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-021-test-1`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Dress |
| 2 | Shoes |
| 3 | Laptop |
| 4 | Bag |

Table `product_category`:

| PRODUCT_ID | CATEGORY_ID |
|---|---|
| 1 | 10 |
| 2 | 10 |
| 3 | 20 |
| 4 | 30 |

Table `category`:

| CATEGORY_ID | NAME |
|---|---|
| 10 | Women |
| 20 | Electronics |
| 30 | Travel |

**Expected Output:**

| product_count |
|---|
| 2 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-021-test-2`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1002 | ZZ_Dress |

Table `product_category`:

| PRODUCT_ID | CATEGORY_ID |
|---|---|
| 1002 | 1020 |

Table `category`:

| CATEGORY_ID | NAME |
|---|---|
| 1020 | ZZ_Women |

**Expected Output:**

| product_count |
|---|
| 0 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-021-test-3`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Dress |
| 2 | Shoes |
| 3 | Laptop |
| 4 | Bag |
| 101 | Dress |
| 103 | Shoes |
| 105 | Laptop |
| 107 | Bag |

Table `product_category`:

| PRODUCT_ID | CATEGORY_ID |
|---|---|
| 1 | 10 |
| 2 | 10 |
| 3 | 20 |
| 4 | 30 |
| 101 | 110 |
| 103 | 111 |
| 105 | 122 |
| 107 | 133 |

Table `category`:

| CATEGORY_ID | NAME |
|---|---|
| 10 | Women |
| 20 | Electronics |
| 30 | Travel |
| 110 | Women |
| 121 | Electronics |
| 132 | Travel |

**Expected Output:**

| product_count |
|---|
| 3 |


---

# sql-022 â€” Trains with speed below 50

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** FILTERING & PREDICATES
- **Expected Output Columns:** `TRAIN_NAME`, `TRAIN_TYPE`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the train name and train type of trains whose speed is less than 50.

### Requirements:
- **Expected Output Columns:** `TRAIN_NAME`, `TRAIN_TYPE`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** WHERE, comparison operator
- Filter train_details_tbl using train_speed < 50 and return train_name and train_type.

## Schema (DDL)

**Table `train_details_tbl`**

| Column | Type | Primary Key |
|--------|------|-------------|
| train_id | INTEGER |  |
| train_name | TEXT |  |
| train_type | TEXT |  |
| train_speed | INTEGER |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_speed |
|---|---|---|---|
| 1 | Mumbai Local | LOC | 45 |
| 2 | Rajdhani | EXP | 120 |
| 3 | Slow Passenger | PAS | 49 |
| 4 | Express X | EXP | 50 |

**Expected Output:**

| TRAIN_NAME | TRAIN_TYPE |
|---|---|
| Mumbai Local | LOC |
| Slow Passenger | PAS |


> 45 and 49 are below 50. A speed of exactly 50 is excluded.

## Solution

```sql
SELECT
  train_name AS TRAIN_NAME,
  train_type AS TRAIN_TYPE
FROM train_details_tbl
WHERE train_speed < 50;
```

## Explanation

Filter train_details_tbl using train_speed < 50 and return train_name and train_type. 45 and 49 are below 50. A speed of exactly 50 is excluded.

## Notes / Hints

- Filter train_details_tbl using train_speed < 50 and return train_name and train_type.
- 45 and 49 are below 50. A speed of exactly 50 is excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-022-test-1`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_speed |
|---|---|---|---|
| 1 | Mumbai Local | LOC | 45 |
| 2 | Rajdhani | EXP | 120 |
| 3 | Slow Passenger | PAS | 49 |
| 4 | Express X | EXP | 50 |

**Expected Output:**

| TRAIN_NAME | TRAIN_TYPE |
|---|---|
| Mumbai Local | LOC |
| Slow Passenger | PAS |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-022-test-2`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_speed |
|---|---|---|---|
| 1002 | ZZ_Mumbai Local | LOC | 1090 |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-022-test-3`

**Input Dataset:**

Table `train_details_tbl`:

| train_id | train_name | train_type | train_speed |
|---|---|---|---|
| 1 | Mumbai Local | LOC | 45 |
| 2 | Rajdhani | EXP | 120 |
| 3 | Slow Passenger | PAS | 49 |
| 4 | Express X | EXP | 50 |
| 101 | Mumbai Local | LOC | 45 |
| 103 | Rajdhani | EXP | 120 |
| 105 | Slow Passenger | PAS | 49 |
| 107 | Express X | EXP | 50 |

**Expected Output:**

| TRAIN_NAME | TRAIN_TYPE |
|---|---|
| Mumbai Local | LOC |
| Slow Passenger | PAS |
| Mumbai Local | LOC |
| Slow Passenger | PAS |


---

# sql-023 â€” Vegetarian passengers on flight 4 from Hong Kong

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `FIRST_NAME`, `CONTACT`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the first name and contact of passengers who travelled on flight 4 from Hong Kong and selected a Vegetarian meal.

### Requirements:
- **Expected Output Columns:** `FIRST_NAME`, `CONTACT`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, DISTINCT, multiple conditions
- Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows.

## Schema (DDL)

**Table `passenger`**

| Column | Type | Primary Key |
|--------|------|-------------|
| PASSENGER_ID | INTEGER |  |
| FIRST_NAME | TEXT |  |
| CONTACT | TEXT |  |

**Table `boardingpass`**

| Column | Type | Primary Key |
|--------|------|-------------|
| BOARDINGPASS_ID | INTEGER |  |
| PASSENGER_ID | INTEGER |  |
| FLIGHT_ID | INTEGER |  |
| MEAL | TEXT |  |

**Table `flight`**

| Column | Type | Primary Key |
|--------|------|-------------|
| FLIGHT_ID | INTEGER |  |
| FLIGHT_FROM | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `passenger`:

| PASSENGER_ID | FIRST_NAME | CONTACT |
|---|---|---|
| 1 | Amit | 90001 |
| 2 | Riya | 90002 |
| 3 | Neha | 90003 |

Table `boardingpass`:

| BOARDINGPASS_ID | PASSENGER_ID | FLIGHT_ID | MEAL |
|---|---|---|---|
| 101 | 1 | 4 | Vegetarian |
| 102 | 2 | 4 | Non-Vegetarian |
| 103 | 3 | 5 | Vegetarian |

Table `flight`:

| FLIGHT_ID | FLIGHT_FROM |
|---|---|
| 4 | Hong Kong |
| 5 | Delhi |

**Expected Output:**

| FIRST_NAME | CONTACT |
|---|---|
| Amit | 90001 |


> Only Amit is on flight 4 from Hong Kong with a Vegetarian meal.

## Solution

```sql
SELECT
  DISTINCT p.FIRST_NAME,
  p.CONTACT
FROM passenger p
JOIN boardingpass bp ON p.PASSENGER_ID = bp.PASSENGER_ID
JOIN flight f ON bp.FLIGHT_ID = f.FLIGHT_ID
WHERE f.FLIGHT_FROM = 'Hong Kong'
  AND bp.FLIGHT_ID = 4
  AND bp.MEAL = 'Vegetarian';
```

## Explanation

Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows. Only Amit is on flight 4 from Hong Kong with a Vegetarian meal.

## Notes / Hints

- Join Passenger → BoardingPass → Flight. Filter the flight origin, flight ID and meal type. DISTINCT prevents duplicate passenger rows.
- Only Amit is on flight 4 from Hong Kong with a Vegetarian meal.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-023-test-1`

**Input Dataset:**

Table `passenger`:

| PASSENGER_ID | FIRST_NAME | CONTACT |
|---|---|---|
| 1 | Amit | 90001 |
| 2 | Riya | 90002 |
| 3 | Neha | 90003 |

Table `boardingpass`:

| BOARDINGPASS_ID | PASSENGER_ID | FLIGHT_ID | MEAL |
|---|---|---|---|
| 101 | 1 | 4 | Vegetarian |
| 102 | 2 | 4 | Non-Vegetarian |
| 103 | 3 | 5 | Vegetarian |

Table `flight`:

| FLIGHT_ID | FLIGHT_FROM |
|---|---|
| 4 | Hong Kong |
| 5 | Delhi |

**Expected Output:**

| FIRST_NAME | CONTACT |
|---|---|
| Amit | 90001 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-023-test-2`

**Input Dataset:**

Table `passenger`:

| PASSENGER_ID | FIRST_NAME | CONTACT |
|---|---|---|
| 1002 | ZZ_Amit | ZZ_90001 |

Table `boardingpass`:

| BOARDINGPASS_ID | PASSENGER_ID | FLIGHT_ID | MEAL |
|---|---|---|---|
| 1202 | 1002 | 1008 | ZZ_Vegetarian |

Table `flight`:

| FLIGHT_ID | FLIGHT_FROM |
|---|---|
| 1008 | ZZ_Hong Kong |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-023-test-3`

**Input Dataset:**

Table `passenger`:

| PASSENGER_ID | FIRST_NAME | CONTACT |
|---|---|---|
| 1 | Amit | 90001 |
| 2 | Riya | 90002 |
| 3 | Neha | 90003 |
| 101 | Amit | 90001 |
| 103 | Riya | 90002 |
| 105 | Neha | 90003 |

Table `boardingpass`:

| BOARDINGPASS_ID | PASSENGER_ID | FLIGHT_ID | MEAL |
|---|---|---|---|
| 101 | 1 | 4 | Vegetarian |
| 102 | 2 | 4 | Non-Vegetarian |
| 103 | 3 | 5 | Vegetarian |
| 201 | 101 | 104 | Vegetarian |
| 203 | 103 | 105 | Non-Vegetarian |
| 205 | 105 | 107 | Vegetarian |

Table `flight`:

| FLIGHT_ID | FLIGHT_FROM |
|---|---|
| 4 | Hong Kong |
| 5 | Delhi |
| 104 | Hong Kong |
| 106 | Delhi |

**Expected Output:**

| FIRST_NAME | CONTACT |
|---|---|
| Amit | 90001 |


---

# sql-024 â€” Products currently in the transit hub

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `PRODUCT_ID`, `NAME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the product ID and product name of products whose delivery status is 'In the transit hub'.

### Requirements:
- **Expected Output Columns:** `PRODUCT_ID`, `NAME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, DISTINCT, status filtering
- Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items.

## Schema (DDL)

**Table `product`**

| Column | Type | Primary Key |
|--------|------|-------------|
| PRODUCT_ID | INTEGER |  |
| NAME | TEXT |  |

**Table `order_item`**

| Column | Type | Primary Key |
|--------|------|-------------|
| ORDER_ITEM_ID | INTEGER |  |
| ORDER_DELIVERY_ID | INTEGER |  |
| PRODUCT_ID | INTEGER |  |
| QUANTITY | INTEGER |  |

**Table `order_delivery`**

| Column | Type | Primary Key |
|--------|------|-------------|
| ORDER_DELIVERY_ID | INTEGER |  |
| ORDER_ID | INTEGER |  |
| STATUS | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |
| 2 | Shoes |
| 3 | Bag |

Table `order_item`:

| ORDER_ITEM_ID | ORDER_DELIVERY_ID | PRODUCT_ID | QUANTITY |
|---|---|---|---|
| 11 | 101 | 1 | 2 |
| 12 | 102 | 2 | 1 |
| 13 | 103 | 1 | 1 |

Table `order_delivery`:

| ORDER_DELIVERY_ID | ORDER_ID | STATUS |
|---|---|---|
| 101 | 500 | In the transit hub |
| 102 | 501 | Delivered |
| 103 | 502 | In the transit hub |

**Expected Output:**

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |


> Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery.

## Solution

```sql
SELECT
  DISTINCT p.PRODUCT_ID,
  p.NAME
FROM product p
JOIN order_item oi ON p.PRODUCT_ID = oi.PRODUCT_ID
JOIN order_delivery od ON oi.ORDER_DELIVERY_ID = od.ORDER_DELIVERY_ID
WHERE od.STATUS = 'In the transit hub';
```

## Explanation

Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items. Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery.

## Notes / Hints

- Join product to order_item, then order_item to order_delivery. Filter the delivery status and use DISTINCT because a product can appear in multiple order items.
- Phone has two order items whose delivery status is the transit hub, but DISTINCT returns it only once. Shoes is delivered and Bag has no matching transit-hub delivery.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-024-test-1`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |
| 2 | Shoes |
| 3 | Bag |

Table `order_item`:

| ORDER_ITEM_ID | ORDER_DELIVERY_ID | PRODUCT_ID | QUANTITY |
|---|---|---|---|
| 11 | 101 | 1 | 2 |
| 12 | 102 | 2 | 1 |
| 13 | 103 | 1 | 1 |

Table `order_delivery`:

| ORDER_DELIVERY_ID | ORDER_ID | STATUS |
|---|---|---|
| 101 | 500 | In the transit hub |
| 102 | 501 | Delivered |
| 103 | 502 | In the transit hub |

**Expected Output:**

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-024-test-2`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1002 | ZZ_Phone |

Table `order_item`:

| ORDER_ITEM_ID | ORDER_DELIVERY_ID | PRODUCT_ID | QUANTITY |
|---|---|---|---|
| 1022 | 1202 | 1002 | 1004 |

Table `order_delivery`:

| ORDER_DELIVERY_ID | ORDER_ID | STATUS |
|---|---|---|
| 1202 | 2000 | ZZ_In the transit hub |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-024-test-3`

**Input Dataset:**

Table `product`:

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |
| 2 | Shoes |
| 3 | Bag |
| 101 | Phone |
| 103 | Shoes |
| 105 | Bag |

Table `order_item`:

| ORDER_ITEM_ID | ORDER_DELIVERY_ID | PRODUCT_ID | QUANTITY |
|---|---|---|---|
| 11 | 101 | 1 | 2 |
| 12 | 102 | 2 | 1 |
| 13 | 103 | 1 | 1 |
| 111 | 201 | 101 | 2 |
| 113 | 203 | 103 | 1 |
| 115 | 205 | 103 | 1 |

Table `order_delivery`:

| ORDER_DELIVERY_ID | ORDER_ID | STATUS |
|---|---|---|
| 101 | 500 | In the transit hub |
| 102 | 501 | Delivered |
| 103 | 502 | In the transit hub |
| 201 | 600 | In the transit hub |
| 203 | 602 | Delivered |
| 205 | 604 | In the transit hub |

**Expected Output:**

| PRODUCT_ID | NAME |
|---|---|
| 1 | Phone |
| 101 | Phone |
| 103 | Shoes |


---

# sql-025 â€” Artists whose name contains a number

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** PATTERN MATCHING & STRINGS
- **Expected Output Columns:** `ARTIST_ID`, `NAME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the artist ID and name where the artist has a number in the name.

### Requirements:
- **Expected Output Columns:** `ARTIST_ID`, `NAME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** REGEXP, pattern matching
- Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative.

## Schema (DDL)

**Table `artist`**

| Column | Type | Primary Key |
|--------|------|-------------|
| ARTIST_ID | INTEGER |  |
| NAME | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `artist`:

| ARTIST_ID | NAME |
|---|---|
| 1 | ABBA |
| 2 | U2 |
| 3 | Maroon 5 |
| 4 | Coldplay |
| 5 | 2Pac |

**Expected Output:**

| ARTIST_ID | NAME |
|---|---|
| 2 | U2 |
| 3 | Maroon 5 |
| 5 | 2Pac |


> U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none.

## Solution

```sql
SELECT
  ARTIST_ID,
  NAME
FROM artist
WHERE NAME REGEXP '[0-9]';
```

## Explanation

Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative. U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none.

## Notes / Hints

- Use MySQL REGEXP '[0-9]' to detect any digit from 0 through 9 anywhere in the artist name. The supplied source also shows a LIKE-based alternative.
- U2, Maroon 5 and 2Pac contain at least one digit. ABBA and Coldplay contain none.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-025-test-1`

**Input Dataset:**

Table `artist`:

| ARTIST_ID | NAME |
|---|---|
| 1 | ABBA |
| 2 | U2 |
| 3 | Maroon 5 |
| 4 | Coldplay |
| 5 | 2Pac |

**Expected Output:**

| ARTIST_ID | NAME |
|---|---|
| 2 | U2 |
| 3 | Maroon 5 |
| 5 | 2Pac |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-025-test-2`

**Input Dataset:**

Table `artist`:

| ARTIST_ID | NAME |
|---|---|
| 1002 | ZZ_ABBA |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-025-test-3`

**Input Dataset:**

Table `artist`:

| ARTIST_ID | NAME |
|---|---|
| 1 | ABBA |
| 2 | U2 |
| 3 | Maroon 5 |
| 4 | Coldplay |
| 5 | 2Pac |
| 101 | ABBA |
| 103 | U2 |
| 105 | Maroon 5 |
| 107 | Coldplay |
| 109 | 2Pac |

**Expected Output:**

| ARTIST_ID | NAME |
|---|---|
| 2 | U2 |
| 3 | Maroon 5 |
| 5 | 2Pac |
| 103 | U2 |
| 105 | Maroon 5 |
| 109 | 2Pac |


---

# sql-026 â€” Messages containing Hello

- **Difficulty:** Easy | **Duration:** 15 min | **Category:** PATTERN MATCHING & STRINGS
- **Expected Output Columns:** `MESSAGE_ID`, `CONTENT`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the message ID and content of messages containing the word 'Hello'.

### Requirements:
- **Expected Output Columns:** `MESSAGE_ID`, `CONTENT`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** LIKE, wildcards
- Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT.

## Schema (DDL)

**Table `message`**

| Column | Type | Primary Key |
|--------|------|-------------|
| MESSAGE_ID | INTEGER |  |
| CONTENT | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `message`:

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 2 | Hi there |
| 3 | Say Hello to everyone |
| 4 | hello again |
| 5 | Welcome |

**Expected Output:**

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 3 | Say Hello to everyone |
| 4 | hello again |


> With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match.

## Solution

```sql
SELECT
  MESSAGE_ID,
  CONTENT
FROM message
WHERE CONTENT LIKE '%Hello%';
```

## Explanation

Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT. With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match.

## Notes / Hints

- Use LIKE '%Hello%' so the text can occur anywhere inside CONTENT.
- With a typical case-insensitive MySQL collation, LIKE '%Hello%' also matches 'hello again'. If the website deliberately uses a case-sensitive collation, row 4 will not match.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-026-test-1`

**Input Dataset:**

Table `message`:

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 2 | Hi there |
| 3 | Say Hello to everyone |
| 4 | hello again |
| 5 | Welcome |

**Expected Output:**

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 3 | Say Hello to everyone |
| 4 | hello again |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-026-test-2`

**Input Dataset:**

Table `message`:

| MESSAGE_ID | CONTENT |
|---|---|
| 1002 | ZZ_Hello world |

**Expected Output:**

| MESSAGE_ID | CONTENT |
|---|---|
| 1002 | ZZ_Hello world |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-026-test-3`

**Input Dataset:**

Table `message`:

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 2 | Hi there |
| 3 | Say Hello to everyone |
| 4 | hello again |
| 5 | Welcome |
| 101 | Hello world |
| 103 | Hi there |
| 105 | Say Hello to everyone |
| 107 | hello again |
| 109 | Welcome |

**Expected Output:**

| MESSAGE_ID | CONTENT |
|---|---|
| 1 | Hello world |
| 3 | Say Hello to everyone |
| 4 | hello again |
| 101 | Hello world |
| 105 | Say Hello to everyone |
| 107 | hello again |


---

# sql-027 â€” In-use vehicles whose plate ends in 0

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `Name`, `LICENSE_NUMBER`, `PLATE_NUMBER`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the full name, license number and plate number of all drivers whose vehicles have a status of 'In Use' and whose plate ends with '0'. The name should combine first name and last name with a space.

### Requirements:
- **Expected Output Columns:** `Name`, `LICENSE_NUMBER`, `PLATE_NUMBER`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, CONCAT, LIKE
- Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name.

## Schema (DDL)

**Table `driver`**

| Column | Type | Primary Key |
|--------|------|-------------|
| DRIVER_ID | INTEGER |  |
| FIRST_NAME | TEXT |  |
| LAST_NAME | TEXT |  |
| LICENSE_NUMBER | TEXT |  |

**Table `vehicle`**

| Column | Type | Primary Key |
|--------|------|-------------|
| VEHICLE_ID | INTEGER |  |
| DRIVER_ID | INTEGER |  |
| PLATE_NUMBER | TEXT |  |
| STATUS | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `driver`:

| DRIVER_ID | FIRST_NAME | LAST_NAME | LICENSE_NUMBER |
|---|---|---|---|
| 1 | Amit | Shah | LIC1 |
| 2 | Riya | Roy | LIC2 |
| 3 | Neha | Das | LIC3 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID | PLATE_NUMBER | STATUS |
|---|---|---|---|
| 101 | 1 | UP10 | In Use |
| 102 | 2 | UP21 | In Use |
| 103 | 3 | UP30 | Maintenance |

**Expected Output:**

| Name | LICENSE_NUMBER | PLATE_NUMBER |
|---|---|---|
| Amit Shah | LIC1 | UP10 |


> Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use.

## Solution

```sql
SELECT
  CONCAT(d.FIRST_NAME, ' ', d.LAST_NAME) AS Name,
  d.LICENSE_NUMBER,
  v.PLATE_NUMBER
FROM driver d
JOIN vehicle v ON d.DRIVER_ID = v.DRIVER_ID
WHERE v.STATUS = 'In Use'
  AND v.PLATE_NUMBER LIKE '%0';
```

## Explanation

Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name. Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use.

## Notes / Hints

- Join driver and vehicle on DRIVER_ID. Filter vehicle status and use LIKE '%0' for a plate ending in 0. CONCAT builds the full driver name.
- Amit's vehicle is in use and its plate ends in 0. Riya's plate does not end in 0; Neha's vehicle is not in use.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-027-test-1`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | FIRST_NAME | LAST_NAME | LICENSE_NUMBER |
|---|---|---|---|
| 1 | Amit | Shah | LIC1 |
| 2 | Riya | Roy | LIC2 |
| 3 | Neha | Das | LIC3 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID | PLATE_NUMBER | STATUS |
|---|---|---|---|
| 101 | 1 | UP10 | In Use |
| 102 | 2 | UP21 | In Use |
| 103 | 3 | UP30 | Maintenance |

**Expected Output:**

| Name | LICENSE_NUMBER | PLATE_NUMBER |
|---|---|---|
| Amit Shah | LIC1 | UP10 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-027-test-2`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | FIRST_NAME | LAST_NAME | LICENSE_NUMBER |
|---|---|---|---|
| 1002 | ZZ_Amit | ZZ_Shah | ZZ_LIC1 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID | PLATE_NUMBER | STATUS |
|---|---|---|---|
| 1202 | 1002 | ZZ_UP10 | ZZ_In Use |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-027-test-3`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | FIRST_NAME | LAST_NAME | LICENSE_NUMBER |
|---|---|---|---|
| 1 | Amit | Shah | LIC1 |
| 2 | Riya | Roy | LIC2 |
| 3 | Neha | Das | LIC3 |
| 101 | Amit | Shah | LIC1 |
| 103 | Riya | Roy | LIC2 |
| 105 | Neha | Das | LIC3 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID | PLATE_NUMBER | STATUS |
|---|---|---|---|
| 101 | 1 | UP10 | In Use |
| 102 | 2 | UP21 | In Use |
| 103 | 3 | UP30 | Maintenance |
| 201 | 101 | UP10 | In Use |
| 203 | 103 | UP21 | In Use |
| 205 | 105 | UP30 | Maintenance |

**Expected Output:**

| Name | LICENSE_NUMBER | PLATE_NUMBER |
|---|---|---|
| Amit Shah | LIC1 | UP10 |
| Amit Shah | LIC1 | UP10 |


---

# sql-028 â€” Highly rated drivers with non-cancelled bookings

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `LICENSE_NUMBER`, `VEHICLE_ID`, `RATING`, `BOOKING_ID`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the license number, vehicle ID, rating and booking ID of drivers whose rating is greater than or equal to 4.5 and whose booking status is not 'Cancelled'.

### Requirements:
- **Expected Output Columns:** `LICENSE_NUMBER`, `VEHICLE_ID`, `RATING`, `BOOKING_ID`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** JOIN, >= comparison, not-equal filtering
- Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings.

## Schema (DDL)

**Table `driver`**

| Column | Type | Primary Key |
|--------|------|-------------|
| DRIVER_ID | INTEGER |  |
| LICENSE_NUMBER | TEXT |  |
| RATING | REAL |  |

**Table `vehicle`**

| Column | Type | Primary Key |
|--------|------|-------------|
| VEHICLE_ID | INTEGER |  |
| DRIVER_ID | INTEGER |  |

**Table `booking`**

| Column | Type | Primary Key |
|--------|------|-------------|
| BOOKING_ID | INTEGER |  |
| VEHICLE_ID | INTEGER |  |
| STATUS | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `driver`:

| DRIVER_ID | LICENSE_NUMBER | RATING |
|---|---|---|
| 1 | LIC1 | 4.8 |
| 2 | LIC2 | 4.5 |
| 3 | LIC3 | 4.2 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID |
|---|---|
| 101 | 1 |
| 102 | 2 |
| 103 | 3 |

Table `booking`:

| BOOKING_ID | VEHICLE_ID | STATUS |
|---|---|---|
| 1001 | 101 | Completed |
| 1002 | 101 | Cancelled |
| 1003 | 102 | Confirmed |
| 1004 | 103 | Completed |

**Expected Output:**

| LICENSE_NUMBER | VEHICLE_ID | RATING | BOOKING_ID |
|---|---|---|---|
| LIC1 | 101 | 4.8 | 1001 |
| LIC2 | 102 | 4.5 | 1003 |


> Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded.

## Solution

```sql
SELECT
  d.LICENSE_NUMBER,
  v.VEHICLE_ID,
  d.RATING,
  b.BOOKING_ID
FROM driver d
JOIN vehicle v ON d.DRIVER_ID = v.DRIVER_ID
JOIN booking b ON v.VEHICLE_ID = b.VEHICLE_ID
WHERE d.RATING >= 4.5
  AND b.STATUS <> 'Cancelled';
```

## Explanation

Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings. Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded.

## Notes / Hints

- Join driver to vehicle and booking. Filter rating >= 4.5 and exclude cancelled bookings.
- Drivers 1 and 2 meet the rating threshold and have non-cancelled bookings. Driver 1's cancelled booking is excluded.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-028-test-1`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | LICENSE_NUMBER | RATING |
|---|---|---|
| 1 | LIC1 | 4.8 |
| 2 | LIC2 | 4.5 |
| 3 | LIC3 | 4.2 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID |
|---|---|
| 101 | 1 |
| 102 | 2 |
| 103 | 3 |

Table `booking`:

| BOOKING_ID | VEHICLE_ID | STATUS |
|---|---|---|
| 1001 | 101 | Completed |
| 1002 | 101 | Cancelled |
| 1003 | 102 | Confirmed |
| 1004 | 103 | Completed |

**Expected Output:**

| LICENSE_NUMBER | VEHICLE_ID | RATING | BOOKING_ID |
|---|---|---|---|
| LIC1 | 101 | 4.8 | 1001 |
| LIC2 | 102 | 4.5 | 1003 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-028-test-2`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | LICENSE_NUMBER | RATING |
|---|---|---|
| 1002 | ZZ_LIC1 | 1009.6 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID |
|---|---|
| 1202 | 1002 |

Table `booking`:

| BOOKING_ID | VEHICLE_ID | STATUS |
|---|---|---|
| 3002 | 1202 | ZZ_Completed |

**Expected Output:**

| LICENSE_NUMBER | VEHICLE_ID | RATING | BOOKING_ID |
|---|---|---|---|
| ZZ_LIC1 | 1202 | 1009.6 | 3002 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-028-test-3`

**Input Dataset:**

Table `driver`:

| DRIVER_ID | LICENSE_NUMBER | RATING |
|---|---|---|
| 1 | LIC1 | 4.8 |
| 2 | LIC2 | 4.5 |
| 3 | LIC3 | 4.2 |
| 101 | LIC1 | 4.8 |
| 103 | LIC2 | 4.5 |
| 105 | LIC3 | 4.2 |

Table `vehicle`:

| VEHICLE_ID | DRIVER_ID |
|---|---|
| 101 | 1 |
| 102 | 2 |
| 103 | 3 |
| 201 | 101 |
| 203 | 103 |
| 205 | 105 |

Table `booking`:

| BOOKING_ID | VEHICLE_ID | STATUS |
|---|---|---|
| 1001 | 101 | Completed |
| 1002 | 101 | Cancelled |
| 1003 | 102 | Confirmed |
| 1004 | 103 | Completed |
| 1101 | 201 | Completed |
| 1103 | 202 | Cancelled |
| 1105 | 204 | Confirmed |
| 1107 | 206 | Completed |

**Expected Output:**

| LICENSE_NUMBER | VEHICLE_ID | RATING | BOOKING_ID |
|---|---|---|---|
| LIC1 | 101 | 4.8 | 1001 |
| LIC2 | 102 | 4.5 | 1003 |
| LIC1 | 201 | 4.8 | 1101 |


---

# sql-029 â€” Count viewers sharing the same name

- **Difficulty:** Medium | **Duration:** 15 min | **Category:** AGGREGATION & GROUPING
- **Expected Output Columns:** `viewername`, `name_count`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the number of viewers having the same name, with the viewer name and its count.

### Requirements:
- **Expected Output Columns:** `viewername`, `name_count`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** GROUP BY, COUNT
- GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group.

## Schema (DDL)

**Table `viewer`**

| Column | Type | Primary Key |
|--------|------|-------------|
| viewername | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `viewer`:

| viewername |
|---|
| Amit |
| Riya |
| Amit |
| Neha |
| Riya |
| Amit |

**Expected Output:**

| viewername | name_count |
|---|---|
| Amit | 3 |
| Neha | 1 |
| Riya | 2 |


> Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name.

## Solution

```sql
SELECT
  viewername,
  COUNT(*) AS name_count
FROM viewer
GROUP BY viewername;
```

## Explanation

GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group. Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name.

## Notes / Hints

- GROUP BY viewername creates one group for each distinct name. COUNT(*) gives the number of viewers in each group.
- Amit appears three times, Riya twice and Neha once. GROUP BY produces one result row per name.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-029-test-1`

**Input Dataset:**

Table `viewer`:

| viewername |
|---|
| Amit |
| Riya |
| Amit |
| Neha |
| Riya |
| Amit |

**Expected Output:**

| viewername | name_count |
|---|---|
| Amit | 3 |
| Neha | 1 |
| Riya | 2 |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-029-test-2`

**Input Dataset:**

Table `viewer`:

| viewername |
|---|
| ZZ_Amit |

**Expected Output:**

| viewername | name_count |
|---|---|
| ZZ_Amit | 1 |

### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-029-test-3`

**Input Dataset:**

Table `viewer`:

| viewername |
|---|
| Amit |
| Riya |
| Amit |
| Neha |
| Riya |
| Amit |
| Amit |
| Riya |
| Amit |
| Neha |
| Riya |
| Amit |

**Expected Output:**

| viewername | name_count |
|---|---|
| Amit | 6 |
| Neha | 2 |
| Riya | 4 |


---

# sql-030 â€” Contacts whose job title contains Engineer

- **Difficulty:** Hard | **Duration:** 15 min | **Category:** JOINS & RELATIONAL QUERIES
- **Expected Output Columns:** `FULLNAME`
- **Order Sensitive:** No

## Problem Statement

### Problem Statement
Write an SQL query to display the full name of users whose contact has a job title containing the word 'Engineer'.

### Requirements:
- **Expected Output Columns:** `FULLNAME`
- Review the schema tabs below for all tables, columns, and relations.

### Concept & Hints:
- **Key SQL Concepts:** self-join pattern, JOIN, LIKE, DISTINCT, CONCAT
- The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names.

## Schema (DDL)

**Table `users`**

| Column | Type | Primary Key |
|--------|------|-------------|
| USER_ID | INTEGER |  |
| FIRST_NAME | TEXT |  |
| LAST_NAME | TEXT |  |

**Table `contacts`**

| Column | Type | Primary Key |
|--------|------|-------------|
| USER_ID | INTEGER |  |
| CONTACT_ID | INTEGER |  |

**Table `jobs`**

| Column | Type | Primary Key |
|--------|------|-------------|
| USER_ID | INTEGER |  |
| JOB_TITLE | TEXT |  |

## Example

### Example 1 (Accenture Assessment Sample)

**Input:**

Table `users`:

| USER_ID | FIRST_NAME | LAST_NAME |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |

Table `contacts`:

| USER_ID | CONTACT_ID |
|---|---|
| 1 | 2 |
| 1 | 3 |
| 2 | 4 |
| 3 | 4 |

Table `jobs`:

| USER_ID | JOB_TITLE |
|---|---|
| 2 | Software Engineer |
| 3 | Designer |
| 4 | Civil Engineer |

**Expected Output:**

| FULLNAME |
|---|
| Amit Shah |
| Riya Roy |
| Neha Das |


> Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names.

## Solution

```sql
SELECT
  DISTINCT CONCAT(u.FIRST_NAME, ' ', u.LAST_NAME) AS FULLNAME
FROM users u
JOIN contacts c ON u.USER_ID = c.USER_ID
JOIN users cu ON c.CONTACT_ID = cu.USER_ID
JOIN jobs j ON cu.USER_ID = j.USER_ID
WHERE j.JOB_TITLE LIKE '%Engineer%';
```

## Explanation

The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names. Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names.

## Notes / Hints

- The relationship is users → contacts → users (the contact person) → jobs. Join the contact user to jobs and filter JOB_TITLE with LIKE '%Engineer%'. DISTINCT prevents duplicate names.
- Amit has contacts 2 and 3; contact 2 is a Software Engineer. Riya and Neha both have contact 4, a Civil Engineer. DISTINCT prevents duplicate names.
- Row output order is flexible unless specified otherwise.

## Test Cases (3)

### Visible Test Case 1 — Assessment Standard Dataset _(visible)_

- **ID:** `sql-030-test-1`

**Input Dataset:**

Table `users`:

| USER_ID | FIRST_NAME | LAST_NAME |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |

Table `contacts`:

| USER_ID | CONTACT_ID |
|---|---|
| 1 | 2 |
| 1 | 3 |
| 2 | 4 |
| 3 | 4 |

Table `jobs`:

| USER_ID | JOB_TITLE |
|---|---|
| 2 | Software Engineer |
| 3 | Designer |
| 4 | Civil Engineer |

**Expected Output:**

| FULLNAME |
|---|
| Amit Shah |
| Riya Roy |
| Neha Das |

### Hidden Test Case 2 — Boundary & Filter Variance _(hidden)_

- **ID:** `sql-030-test-2`

**Input Dataset:**

Table `users`:

| USER_ID | FIRST_NAME | LAST_NAME |
|---|---|---|
| 1002 | ZZ_Amit | ZZ_Shah |

Table `contacts`:

| USER_ID | CONTACT_ID |
|---|---|
| 1002 | 1004 |

Table `jobs`:

| USER_ID | JOB_TITLE |
|---|---|
| 1004 | ZZ_Software Engineer |

**Expected Output:**

_(empty result set)_
### Hidden Test Case 3 — Multi-Record Scaling _(hidden)_

- **ID:** `sql-030-test-3`

**Input Dataset:**

Table `users`:

| USER_ID | FIRST_NAME | LAST_NAME |
|---|---|---|
| 1 | Amit | Shah |
| 2 | Riya | Roy |
| 3 | Neha | Das |
| 4 | Raj | Kumar |
| 101 | Amit | Shah |
| 103 | Riya | Roy |
| 105 | Neha | Das |
| 107 | Raj | Kumar |

Table `contacts`:

| USER_ID | CONTACT_ID |
|---|---|
| 1 | 2 |
| 1 | 3 |
| 2 | 4 |
| 3 | 4 |
| 101 | 102 |
| 102 | 104 |
| 104 | 106 |
| 106 | 107 |

Table `jobs`:

| USER_ID | JOB_TITLE |
|---|---|
| 2 | Software Engineer |
| 3 | Designer |
| 4 | Civil Engineer |
| 102 | Software Engineer |
| 104 | Designer |
| 106 | Civil Engineer |

**Expected Output:**

| FULLNAME |
|---|
| Amit Shah |
| Riya Roy |
| Neha Das |


---

# Design, Architecture, Styling & Test Infrastructure

## 1. Architecture

The SQL Round is served at the SQL assessment route by `src/pages/SQLAssessmentPage.jsx` (649 lines).

### Component stack

| Layer | File | Responsibility |
|-------|------|----------------|
| Page | `src/pages/SQLAssessmentPage.jsx` | Question navigation, editor state, run/test orchestration, storage sync |
| Question Panel | `src/components/sql/SQLQuestionPanel.jsx` | Problem statement (markdown), schema tabs, solution viewer, schema modal |
| Editor | `src/components/sql/SQLEditor.jsx` | SQL code editor for the candidate query |
| Example Viewer | `src/components/sql/SQLExampleViewer.jsx` | Sample input/output rendering |
| Result Panel | `src/components/sql/SQLResultPanel.jsx` | Query output grid |
| Test Results | `src/components/sql/SQLTestResults.jsx` | Visible + hidden test-case pass/fail report |
| Results Modal | `src/components/sql/SQLResultsModal.jsx` | Final assessment summary overlay |
| Schema Modal | `src/components/sql/SQLSchemaModal.jsx` + `.css` | Floating-window ER/schema browser |
| Schema Viewer | `src/components/sql/SQLSchemaViewer.jsx` | Inline schema tables |
| ER Diagram | `src/components/sql/DatabaseERDiagram.jsx` + `.css` | Visual entity-relationship diagram |
| Solution Viewer | `src/components/sql/SQLSolutionViewer.jsx` | Reference solution display |
| Rich Text | `src/components/sql/SqlRichText.jsx` | Markdown renderer for problems |
| Engine | `src/utils/sqlEngine.js` (390 lines) | sql.js (SQLite WASM) execution & result comparison |
| Storage | `src/utils/sqlStorage.js` | Drafts, solutions, results, completed-set in localStorage |
| Data | `src/data/sqlQuestions.js`, `src/data/sqlSchemas.js` | 30 questions / 90 test cases; 30 schema families |

### Execution pipeline (sqlEngine.js)

1. **Singleton init**: `getSQLInstance()` loads sql.js WASM once (`/sql-wasm.wasm`).
2. **Isolated DB**: `createIsolatedDB(question, dataset)` spins up `new Database()` per question/test.
3. **MySQL polyfills**: registers `CONCAT` and `REGEXP` custom SQLite functions for MySQL-style queries.
4. **DDL**: tables created from `question.tableSchema` (column name + type + PRIMARY KEY).
5. **Seeding**: dataset rows inserted with parameterized statements.
6. **Dual execution**: runs the candidate query AND the reference `solution`.
7. **Comparison**: compares column names, row counts, and value tuples (with floating-point tolerance); respects `orderSensitive` flag.
8. `runAssessmentTests()` loops all test cases (visible + hidden) and returns per-case pass/fail.

### Data flow

1. URL query param selects the active question (`?q=sql-XXX`).
2. Draft code auto-saved to localStorage per question (`sql-answer-<id>`, with legacy-starter-code guard); solved solutions cached under `sql-solution-<id>`.
3. Run button executes against the visible dataset; Test button runs `runAssessmentTests()` for all 3 cases.
4. Completion state tracked in `sql-completed-questions`; aggregate results in `sql-assessment-results`.

## 2. Schema Design

- Questions carry self-contained `tableSchema` (1â€“8 tables) rendered as DDL and ER diagrams.
- `sqlSchemas.js` defines 30 schema families (keys 1-30, one per question) shown in the Schema Modal (Banking & Transactions 6T, Employee Payroll 4T, E-Commerce Orders 8T, etc.), shared across questions via the schema modal tabs.

## 3. Styling & CSS Approach

Hybrid styling:

1. **Inline React style objects** â€” dominant for page banner, nav dots, panels (`#090e1d` panels, `#1e293b` borders, `linear-gradient(145deg, #0b1329, #0f1c3a)` cards, sky accent `#38bdf8`, text `#f8fafc` / `#94a3b8`).
2. **Dedicated CSS files** â€” `SQLSchemaModal.css` (fixed overlay, `backdrop-filter: blur(8px)`, `@keyframes modalFadeIn` / `windowScaleUp` floating-window aesthetic) and `DatabaseERDiagram.css` for the ER diagram.
3. **Global utility classes** â€” `btn btn-secondary btn-sm`, `q-nav-selector`, `q-nav-dots` for navigation chrome.

### Key visual tokens

| Token | Value | Usage |
|-------|-------|-------|
| Sky accent | #38bdf8 / rgba(56,189,248,.12) | Highlights, active tabs |
| Panel | #090e1d / #090e1a | Cards, modal window |
| Border | #1e293b / #334155 | Panels, pills |
| Gradient card | linear-gradient(145deg, #0b1329, #0f1c3a) | Feature cards |
| Overlay | rgba(4,7,15,.75) + blur(8px) | Schema modal backdrop |
| Text | #f8fafc / #cbd5e1 / #94a3b8 | Headings / body / muted |

### UX patterns

- Horizontal `q-nav-dots` progress strip (auto-scrolls active dot into view).
- Run Query / Run Tests split with per-case pass/fail chips.
- Floating "iFrame-like" schema window with fade+scale entrance animations.
- Keyboard-free workflow: next/prev buttons with disabled boundary states.

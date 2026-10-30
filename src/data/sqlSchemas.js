// src/data/sqlSchemas.js
// Complete Authentic Multi-Table View Schemas (1 to 8 tables) for Accenture SQL Questions

export const sqlViewSchemas = {
  1: {
    title: "Banking & Transactions Schema",
    tableCount: 6,
    tables: [
      {
        name: "loan",
        columns: ["LOAN_ID", "ACCOUNT_ID", "LOAN_AMOUNT", "LOAN_DATE", "DUE_DATE"]
      },
      {
        name: "transaction",
        columns: ["TRANSACTION_ID", "ACCOUNT_ID", "TRANSACTION_DATE", "AMOUNT", "TRANSACTION_TYPE"]
      },
      {
        name: "account",
        columns: ["ACCOUNT_ID", "CUSTOMER_ID", "BRANCH_ID", "ACCOUNT_TYPE_ID", "BALANCE"]
      },
      {
        name: "customer",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "EMAIL"]
      },
      {
        name: "branch",
        columns: ["BRANCH_ID", "BRANCH_NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "account_type",
        columns: ["ACCOUNT_TYPE_ID", "ACCOUNT_TYPE_NAME"]
      }
    ]
  },
  2: {
    title: "Banking & Accounts Schema",
    tableCount: 6,
    tables: [
      {
        name: "loan",
        columns: ["LOAN_ID", "ACCOUNT_ID", "LOAN_AMOUNT", "LOAN_DATE", "DUE_DATE"]
      },
      {
        name: "transaction",
        columns: ["TRANSACTION_ID", "ACCOUNT_ID", "TRANSACTION_DATE", "AMOUNT", "TRANSACTION_TYPE"]
      },
      {
        name: "account",
        columns: ["ACCOUNT_ID", "CUSTOMER_ID", "BRANCH_ID", "ACCOUNT_TYPE_ID", "BALANCE"]
      },
      {
        name: "customer",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "EMAIL"]
      },
      {
        name: "branch",
        columns: ["BRANCH_ID", "BRANCH_NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "account_type",
        columns: ["ACCOUNT_TYPE_ID", "ACCOUNT_TYPE_NAME"]
      }
    ]
  },
  3: {
    title: "Employee Payroll & Department Schema",
    tableCount: 4,
    tables: [
      {
        name: "emp_payroll",
        columns: ["TRANSNO", "EMPID", "MONTH", "YEAR", "TOTAL_EARNING", "NETPAY"]
      },
      {
        name: "employee_info",
        columns: ["EMPID", "EMPNAME", "DEPTID", "JOINING_DT", "DOB", "YRS_OF_EXP", "EMPLOYEE_CATEGORY"]
      },
      {
        name: "dept_info",
        columns: ["DEPTID", "DEPTNAME", "LOCATION"]
      },
      {
        name: "salary_info",
        columns: [
          "EMPLOYEE_CATEGORY",
          "BASIC",
          "TRAVELLING_ALLOWANCE",
          "HOUSE_RENT_ALLOWANCE",
          "DA",
          "LOCATION_ALLOWANCE",
          "PROVIDENT_FUND",
          "MEDICAL_ALLOWANCE",
          "PROTAX",
          "INSURANCE"
        ]
      }
    ]
  },
  4: {
    title: "Employee Leave & Payroll Enterprise Schema",
    tableCount: 6,
    tables: [
      {
        name: "emp_leave_info",
        columns: ["EMPID", "FROM_DATE", "TO_DATE", "TOTAL_LEAVES", "LEAVE_TYPE"]
      },
      {
        name: "emp_payroll",
        columns: ["TRANSNO", "EMPID", "MONTH", "YEAR", "TOTAL_EARNING", "NETPAY"]
      },
      {
        name: "employee_info",
        columns: ["EMPID", "EMPNAME", "DEPTID", "JOINING_DT", "DOB", "YRS_OF_EXP", "EMPLOYEE_CATEGORY"]
      },
      {
        name: "dept_info",
        columns: ["DEPTID", "DEPTNAME", "LOCATION"]
      },
      {
        name: "allotted_category",
        columns: ["EMPLOYEE_CATEGORY", "EL", "ML"]
      },
      {
        name: "salary_info",
        columns: [
          "EMPLOYEE_CATEGORY",
          "BASIC",
          "TRAVELLING_ALLOWANCE",
          "HOUSE_RENT_ALLOWANCE",
          "DA",
          "LOCATION_ALLOWANCE",
          "PROVIDENT_FUND",
          "MEDICAL_ALLOWANCE",
          "PROTAX",
          "INSURANCE"
        ]
      }
    ]
  },
  5: {
    title: "University Student Course Registration Schema",
    tableCount: 7,
    tables: [
      {
        name: "registration",
        columns: ["REG_ID", "REG_YEAR", "REG_DATE", "STUDENT_ID", "SECTION_ID", "MIDTERM_GRADE", "FULLTERM_GRADE"]
      },
      {
        name: "student",
        columns: ["STUDENT_ID", "LAST_NAME", "FIRST_NAME", "EMAIL", "PHONE"]
      },
      {
        name: "section",
        columns: ["SECTION_ID", "COURSE_ID", "SCHEDULE_ID", "INSTRUCTOR_ID", "ROOM"]
      },
      {
        name: "course",
        columns: ["COURSE_ID", "NAME", "TYPE", "TERM"]
      },
      {
        name: "schedule",
        columns: ["SCHEDULE_ID", "DAY", "STARTTIME", "ENDTIME"]
      },
      {
        name: "instructor",
        columns: ["INSTRUCTOR_ID", "LAST_NAME", "FIRST_NAME", "TYPE", "DEPT_ID"]
      },
      {
        name: "department",
        columns: ["DEPT_ID"]
      }
    ]
  },
  6: {
    title: "Books & Category Catalog Schema",
    tableCount: 3,
    tables: [
      {
        name: "books",
        columns: ["ISBN", "TITLE", "PRICE", "PUBLISHED_DATE"]
      },
      {
        name: "book_category",
        columns: ["ISBN", "CATEGORY_ID"]
      },
      {
        name: "category",
        columns: ["CATEGORY_ID", "NAME"]
      }
    ]
  },
  7: {
    title: "Media Streaming & Channels Schema",
    tableCount: 4,
    tables: [
      {
        name: "stream",
        columns: ["STREAMID", "PROGRAMMEID", "CHANNELID"]
      },
      {
        name: "programme",
        columns: ["PROGRAMMEID", "STREAMID", "PROGRAMME_NAME"]
      },
      {
        name: "channel",
        columns: ["CHANNELID", "CATEGORYID", "CHANNELNAME"]
      },
      {
        name: "channelscategory",
        columns: ["CATEGORYID", "CATEGORYNAME"]
      }
    ]
  },
  8: {
    title: "Train Transit & Stations Schema",
    tableCount: 3,
    tables: [
      {
        name: "train_details_tbl",
        columns: ["TRAIN_ID", "TRAIN_NAME", "TRAIN_TYPE", "TRAIN_TIME", "TRAIN_FROM", "TRAIN_TO", "TRAIN_SPEED"]
      },
      {
        name: "train_type_tbl",
        columns: ["TRAIN_TYPE", "TYPE_DESCRIPTION"]
      },
      {
        name: "train_stations_tbl",
        columns: ["STATION_ID", "STATION_NAME"]
      }
    ]
  },
  9: {
    title: "Employee Leave & Enterprise Payroll Schema",
    tableCount: 6,
    tables: [
      {
        name: "emp_leave_info",
        columns: ["EMPID", "FROM_DATE", "TO_DATE", "TOTAL_LEAVES", "LEAVE_TYPE"]
      },
      {
        name: "emp_payroll",
        columns: ["TRANSNO", "EMPID", "MONTH", "YEAR", "TOTAL_EARNING", "NETPAY"]
      },
      {
        name: "employee_info",
        columns: ["EMPID", "EMPNAME", "DEPTID", "JOINING_DT", "DOB", "YRS_OF_EXP", "EMPLOYEE_CATEGORY"]
      },
      {
        name: "dept_info",
        columns: ["DEPTID", "DEPTNAME", "LOCATION"]
      },
      {
        name: "allotted_category",
        columns: ["EMPLOYEE_CATEGORY", "EL", "ML"]
      },
      {
        name: "salary_info",
        columns: [
          "EMPLOYEE_CATEGORY",
          "BASIC",
          "TRAVELLING_ALLOWANCE",
          "HOUSE_RENT_ALLOWANCE",
          "DA",
          "LOCATION_ALLOWANCE",
          "PROVIDENT_FUND",
          "MEDICAL_ALLOWANCE",
          "PROTAX",
          "INSURANCE"
        ]
      }
    ]
  },
  10: {
    title: "Employee Payroll & Deductions Schema",
    tableCount: 4,
    tables: [
      {
        name: "emp_payroll",
        columns: ["TRANSNO", "EMPID", "MONTH", "YEAR", "TOTAL_EARNING", "NETPAY"]
      },
      {
        name: "employee_info",
        columns: ["EMPID", "EMPNAME", "DEPTID", "JOINING_DT", "DOB", "YRS_OF_EXP", "EMPLOYEE_CATEGORY"]
      },
      {
        name: "dept_info",
        columns: ["DEPTID", "DEPTNAME", "LOCATION"]
      },
      {
        name: "salary_info",
        columns: [
          "EMPLOYEE_CATEGORY",
          "BASIC",
          "TRAVELLING_ALLOWANCE",
          "HOUSE_RENT_ALLOWANCE",
          "DA",
          "LOCATION_ALLOWANCE",
          "PROVIDENT_FUND",
          "MEDICAL_ALLOWANCE",
          "PROTAX",
          "INSURANCE"
        ]
      }
    ]
  },
  11: {
    title: "Employee Compensation Schema",
    tableCount: 4,
    tables: [
      {
        name: "emp_payroll",
        columns: ["TRANSNO", "EMPID", "MONTH", "YEAR", "TOTAL_EARNING", "NETPAY"]
      },
      {
        name: "employee_info",
        columns: ["EMPID", "EMPNAME", "DEPTID", "JOINING_DT", "DOB", "YRS_OF_EXP", "EMPLOYEE_CATEGORY"]
      },
      {
        name: "dept_info",
        columns: ["DEPTID", "DEPTNAME", "LOCATION"]
      },
      {
        name: "salary_info",
        columns: [
          "EMPLOYEE_CATEGORY",
          "BASIC",
          "TRAVELLING_ALLOWANCE",
          "HOUSE_RENT_ALLOWANCE",
          "DA",
          "LOCATION_ALLOWANCE",
          "PROVIDENT_FUND",
          "MEDICAL_ALLOWANCE",
          "PROTAX",
          "INSURANCE"
        ]
      }
    ]
  },
  12: {
    title: "Bank Accounts & Loan Facility Schema",
    tableCount: 6,
    tables: [
      {
        name: "loan",
        columns: ["LOAN_ID", "ACCOUNT_ID", "LOAN_AMOUNT", "LOAN_DATE", "DUE_DATE"]
      },
      {
        name: "transaction",
        columns: ["TRANSACTION_ID", "ACCOUNT_ID", "TRANSACTION_DATE", "AMOUNT", "TRANSACTION_TYPE"]
      },
      {
        name: "account",
        columns: ["ACCOUNT_ID", "CUSTOMER_ID", "BRANCH_ID", "ACCOUNT_TYPE_ID", "BALANCE"]
      },
      {
        name: "customer",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "EMAIL"]
      },
      {
        name: "branch",
        columns: ["BRANCH_ID", "BRANCH_NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "account_type",
        columns: ["ACCOUNT_TYPE_ID", "ACCOUNT_TYPE_NAME"]
      }
    ]
  },
  13: {
    title: "Customer Banking Operations Schema",
    tableCount: 6,
    tables: [
      {
        name: "loan",
        columns: ["LOAN_ID", "ACCOUNT_ID", "LOAN_AMOUNT", "LOAN_DATE", "DUE_DATE"]
      },
      {
        name: "transaction",
        columns: ["TRANSACTION_ID", "ACCOUNT_ID", "TRANSACTION_DATE", "AMOUNT", "TRANSACTION_TYPE"]
      },
      {
        name: "account",
        columns: ["ACCOUNT_ID", "CUSTOMER_ID", "BRANCH_ID", "ACCOUNT_TYPE_ID", "BALANCE"]
      },
      {
        name: "customer",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "EMAIL"]
      },
      {
        name: "branch",
        columns: ["BRANCH_ID", "BRANCH_NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "account_type",
        columns: ["ACCOUNT_TYPE_ID", "ACCOUNT_TYPE_NAME"]
      }
    ]
  },
  14: {
    title: "Staff Members Schema",
    tableCount: 1,
    tables: [
      {
        name: "staff",
        columns: ["STAFF_ID", "FIRSTNAME", "LASTNAME", "POSITION", "SALARY"]
      }
    ]
  },
  15: {
    title: "Hospital Patient & Billing Schema",
    tableCount: 2,
    tables: [
      {
        name: "Patient",
        columns: ["PATIENTID", "FIRSTNAME", "LASTNAME", "EMAIL", "ADMISSIONDATE"]
      },
      {
        name: "Billing",
        columns: ["BILLINGID", "PATIENTID", "TOTALAMOUNT", "PAYMENTSTATUS"]
      }
    ]
  },
  16: {
    title: "Aviation Flights & Fleet Schema",
    tableCount: 3,
    tables: [
      {
        name: "Airline",
        columns: ["AIRLINE_ID", "NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "Airplane",
        columns: ["AIRPLANE_ID", "AIRLINE_ID", "MODELNUMBER", "MANUFACTURER"]
      },
      {
        name: "Flight",
        columns: [
          "FLIGHT_ID",
          "AIRPLANE_ID",
          "DEPARTURE_DATE",
          "DEPARTURE_TIME",
          "ARRIVAL_DATE",
          "ARRIVAL_TIME",
          "FLIGHT_FROM",
          "FLIGHT_TO"
        ]
      }
    ]
  },
  17: {
    title: "Flight Routes & Scheduling Schema",
    tableCount: 3,
    tables: [
      {
        name: "Airline",
        columns: ["AIRLINE_ID", "NAME", "ADDRESS", "CONTACT"]
      },
      {
        name: "Airplane",
        columns: ["AIRPLANE_ID", "AIRLINE_ID", "MODELNUMBER", "MANUFACTURER"]
      },
      {
        name: "Flight",
        columns: [
          "FLIGHT_ID",
          "AIRPLANE_ID",
          "DEPARTURE_DATE",
          "DEPARTURE_TIME",
          "ARRIVAL_DATE",
          "ARRIVAL_TIME",
          "FLIGHT_FROM",
          "FLIGHT_TO"
        ]
      }
    ]
  },
  18: {
    title: "University Course Registration Schema",
    tableCount: 7,
    tables: [
      {
        name: "registration",
        columns: ["REG_ID", "REG_YEAR", "REG_DATE", "STUDENT_ID", "SECTION_ID", "MIDTERM_GRADE", "FULLTERM_GRADE"]
      },
      {
        name: "student",
        columns: ["STUDENT_ID", "LAST_NAME", "FIRST_NAME", "EMAIL", "PHONE"]
      },
      {
        name: "section",
        columns: ["SECTION_ID", "COURSE_ID", "SCHEDULE_ID", "INSTRUCTOR_ID", "ROOM"]
      },
      {
        name: "course",
        columns: ["COURSE_ID", "NAME", "TYPE", "TERM"]
      },
      {
        name: "schedule",
        columns: ["SCHEDULE_ID", "DAY", "STARTTIME", "ENDTIME"]
      },
      {
        name: "instructor",
        columns: ["INSTRUCTOR_ID", "LAST_NAME", "FIRST_NAME", "TYPE", "DEPT_ID"]
      },
      {
        name: "department",
        columns: ["DEPT_ID"]
      }
    ]
  },
  19: {
    title: "Airline Operations & Passenger Crew Schema",
    tableCount: 7,
    tables: [
      {
        name: "pilot",
        columns: ["PILOT_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "DISCIPLINE", "PILOT_LICENSE"]
      },
      {
        name: "cabincrew",
        columns: ["CABINCREW_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT"]
      },
      {
        name: "boardingpass",
        columns: ["BOARDINGPASS_ID", "FLIGHT_ID", "PASSENGER_ID", "DATE", "BAGGAGE", "MEAL"]
      },
      {
        name: "flight",
        columns: [
          "FLIGHT_ID",
          "AIRPLANE_ID",
          "DEPARTURE_DATE",
          "DEPARTURE_TIME",
          "ARRIVAL_DATE",
          "ARRIVAL_TIME",
          "FLIGHT_FROM",
          "FLIGHT_TO"
        ]
      },
      {
        name: "passenger",
        columns: ["PASSENGER_ID", "FIRST_NAME", "LAST_NAME", "EMAIL", "CONTACT"]
      },
      {
        name: "airplane",
        columns: ["AIRPLANE_ID", "AIRLINE_ID", "MODELNUMBER", "MANUFACTURER"]
      },
      {
        name: "airline",
        columns: ["AIRLINE_ID", "NAME", "ADDRESS", "CONTACT"]
      }
    ]
  },
  20: {
    title: "Flight Crew & Manifest Schema",
    tableCount: 7,
    tables: [
      {
        name: "pilot",
        columns: ["PILOT_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "DISCIPLINE", "PILOT_LICENSE"]
      },
      {
        name: "cabincrew",
        columns: ["CABINCREW_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT"]
      },
      {
        name: "boardingpass",
        columns: ["BOARDINGPASS_ID", "FLIGHT_ID", "PASSENGER_ID", "DATE", "BAGGAGE", "MEAL"]
      },
      {
        name: "flight",
        columns: [
          "FLIGHT_ID",
          "AIRPLANE_ID",
          "DEPARTURE_DATE",
          "DEPARTURE_TIME",
          "ARRIVAL_DATE",
          "ARRIVAL_TIME",
          "FLIGHT_FROM",
          "FLIGHT_TO"
        ]
      },
      {
        name: "passenger",
        columns: ["PASSENGER_ID", "FIRST_NAME", "LAST_NAME", "EMAIL", "CONTACT"]
      },
      {
        name: "airplane",
        columns: ["AIRPLANE_ID", "AIRLINE_ID", "MODELNUMBER", "MANUFACTURER"]
      },
      {
        name: "airline",
        columns: ["AIRLINE_ID", "NAME", "ADDRESS", "CONTACT"]
      }
    ]
  },
  21: {
    title: "E-Commerce Orders, Products & Delivery Schema",
    tableCount: 8,
    tables: [
      {
        name: "product_category",
        columns: ["PRODUCT_CATEGORY_ID", "PRODUCT_ID", "CATEGORY_ID"]
      },
      {
        name: "category",
        columns: ["CATEGORY_ID", "CODE", "NAME"]
      },
      {
        name: "product",
        columns: ["PRODUCT_ID", "CODE", "NAME", "UNIT_PRICE"]
      },
      {
        name: "order_item",
        columns: ["ORDER_ITEM_ID", "ORDER_ID", "ORDER_DELIVERY_ID", "PRODUCT_ID", "QUANTITY"]
      },
      {
        name: "order_delivery",
        columns: ["ORDER_DELIVERY_ID", "ORDER_ID", "TRACKING_NO", "STATUS"]
      },
      {
        name: "payment",
        columns: ["PAYMENT_ID", "ORDER_ID", "STATUS", "CCTYPE", "CCNAME", "CCDATE"]
      },
      {
        name: "customer",
        columns: ["ORDER_ID", "CUSTOMER_ID", "USERNAME"]
      },
      {
        name: "customer_address",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "ADDRESS", "PHONE", "EMAIL"]
      }
    ]
  },
  22: {
    title: "Railway Transit & Stations Schema",
    tableCount: 3,
    tables: [
      {
        name: "train_details_tbl",
        columns: ["TRAIN_ID", "TRAIN_NAME", "TRAIN_TYPE", "TRAIN_TIME", "TRAIN_FROM", "TRAIN_TO", "TRAIN_SPEED"]
      },
      {
        name: "train_type_tbl",
        columns: ["TRAIN_TYPE", "TYPE_DESCRIPTION"]
      },
      {
        name: "train_stations_tbl",
        columns: ["STATION_ID", "STATION_NAME"]
      }
    ]
  },
  23: {
    title: "Aviation Passenger & Baggage Manifest Schema",
    tableCount: 7,
    tables: [
      {
        name: "pilot",
        columns: ["PILOT_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "DISCIPLINE", "PILOT_LICENSE"]
      },
      {
        name: "cabincrew",
        columns: ["CABINCREW_ID", "FLIGHT_ID", "FIRST_NAME", "LAST_NAME", "CONTACT"]
      },
      {
        name: "boardingpass",
        columns: ["BOARDINGPASS_ID", "FLIGHT_ID", "PASSENGER_ID", "DATE", "BAGGAGE", "MEAL"]
      },
      {
        name: "flight",
        columns: [
          "FLIGHT_ID",
          "AIRPLANE_ID",
          "DEPARTURE_DATE",
          "DEPARTURE_TIME",
          "ARRIVAL_DATE",
          "ARRIVAL_TIME",
          "FLIGHT_FROM",
          "FLIGHT_TO"
        ]
      },
      {
        name: "passenger",
        columns: ["PASSENGER_ID", "FIRST_NAME", "LAST_NAME", "EMAIL", "CONTACT"]
      },
      {
        name: "airplane",
        columns: ["AIRPLANE_ID", "AIRLINE_ID", "MODELNUMBER", "MANUFACTURER"]
      },
      {
        name: "airline",
        columns: ["AIRLINE_ID", "NAME", "ADDRESS", "CONTACT"]
      }
    ]
  },
  24: {
    title: "Online Retail Order Processing Schema",
    tableCount: 8,
    tables: [
      {
        name: "product_category",
        columns: ["PRODUCT_CATEGORY_ID", "PRODUCT_ID", "CATEGORY_ID"]
      },
      {
        name: "category",
        columns: ["CATEGORY_ID", "CODE", "NAME"]
      },
      {
        name: "product",
        columns: ["PRODUCT_ID", "CODE", "NAME", "UNIT_PRICE"]
      },
      {
        name: "order_item",
        columns: ["ORDER_ITEM_ID", "ORDER_ID", "ORDER_DELIVERY_ID", "PRODUCT_ID", "QUANTITY"]
      },
      {
        name: "order_delivery",
        columns: ["ORDER_DELIVERY_ID", "ORDER_ID", "TRACKING_NO", "STATUS"]
      },
      {
        name: "payment",
        columns: ["PAYMENT_ID", "ORDER_ID", "STATUS", "CCTYPE", "CCNAME", "CCDATE"]
      },
      {
        name: "customer",
        columns: ["ORDER_ID", "CUSTOMER_ID", "USERNAME"]
      },
      {
        name: "customer_address",
        columns: ["CUSTOMER_ID", "FIRST_NAME", "LAST_NAME", "ADDRESS", "PHONE", "EMAIL"]
      }
    ]
  },
  25: {
    title: "Music & Artists Schema",
    tableCount: 1,
    tables: [
      {
        name: "artist",
        columns: ["ARTIST_ID", "NAME"]
      }
    ]
  },
  26: {
    title: "Messaging Notifications Schema",
    tableCount: 1,
    tables: [
      {
        name: "message",
        columns: ["MESSAGE_ID", "CONTENT"]
      }
    ]
  },
  27: {
    title: "Rideshare Driver & Vehicle Fleet Schema",
    tableCount: 2,
    tables: [
      {
        name: "driver",
        columns: ["DRIVER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "LICENSE_NUMBER", "RATING"]
      },
      {
        name: "vehicle",
        columns: ["VEHICLE_ID", "DRIVER_ID", "PLATE_NUMBER", "STATUS"]
      }
    ]
  },
  28: {
    title: "Rideshare Booking & Dispatch Schema",
    tableCount: 3,
    tables: [
      {
        name: "driver",
        columns: ["DRIVER_ID", "FIRST_NAME", "LAST_NAME", "CONTACT", "LICENSE_NUMBER", "RATING"]
      },
      {
        name: "vehicle",
        columns: ["VEHICLE_ID", "DRIVER_ID", "PLATE_NUMBER", "STATUS"]
      },
      {
        name: "booking",
        columns: ["BOOKING_ID", "VEHICLE_ID", "STATUS"]
      }
    ]
  },
  29: {
    title: "Content Viewers Schema",
    tableCount: 1,
    tables: [
      {
        name: "viewer",
        columns: ["VIEWER_ID", "VIEWERNAME"]
      }
    ]
  },
  30: {
    title: "User Profile, Contacts & Careers Schema",
    tableCount: 3,
    tables: [
      {
        name: "users",
        columns: ["USER_ID", "FIRST_NAME", "LAST_NAME"]
      },
      {
        name: "contacts",
        columns: ["USER_ID", "CONTACT_ID"]
      },
      {
        name: "jobs",
        columns: ["USER_ID", "JOB_TITLE"]
      }
    ]
  },
  31: {
      "title": "AeroGlobal Airways — Flight passenger meal preferences",
      "domain": "AeroGlobal Airways",
      "tableCount": 10,
      "canvas": {
          "width": 1380,
          "height": 702
      },
      "tables": [
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
      ],
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
      ]
  },
  32: {
      "title": "Metropolitan University — Student course registration & schedules",
      "domain": "Metropolitan University",
      "tableCount": 10,
      "canvas": {
          "width": 1380,
          "height": 802
      },
      "tables": [
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
      ],
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
      ]
  },
  33: {
      "title": "Meridian Banking — Customer transaction totals",
      "domain": "Meridian Banking",
      "tableCount": 10,
      "canvas": {
          "width": 1378,
          "height": 834
      },
      "tables": [
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
      ],
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
      ]
  },
  34: {
      "title": "Atlas Consulting — Project staffing workload",
      "domain": "Atlas Consulting",
      "tableCount": 11,
      "canvas": {
          "width": 1378,
          "height": 858
      },
      "tables": [
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
      ],
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
      ]
  },
  35: {
      "title": "Crestline People Operations — Department salary comparison",
      "domain": "Crestline People Operations",
      "tableCount": 10,
      "canvas": {
          "width": 1378,
          "height": 834
      },
      "tables": [
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
      ],
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
      ]
  },
  36: {
      "title": "Evergreen Commerce — Category-wise sales performance",
      "domain": "Evergreen Commerce",
      "tableCount": 12,
      "canvas": {
          "width": 1378,
          "height": 834
      },
      "tables": [
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
      ],
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
      ]
  },
  37: {
      "title": "Beacon Telecom — Subscriber billing patterns",
      "domain": "Beacon Telecom",
      "tableCount": 10,
      "canvas": {
          "width": 1378,
          "height": 882
      },
      "tables": [
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
      ],
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
      ]
  },
  38: {
      "title": "Summit Marketplace — Top customers within each city",
      "domain": "Summit Marketplace",
      "tableCount": 12,
      "canvas": {
          "width": 1378,
          "height": 858
      },
      "tables": [
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
      ],
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
      ]
  },
  39: {
      "title": "Clearview Billing — Invoice payment reconciliation",
      "domain": "Clearview Billing",
      "tableCount": 11,
      "canvas": {
          "width": 1378,
          "height": 882
      },
      "tables": [
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
      ],
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
      ]
  },
  40: {
      "title": "Nova Learning Institute — Mandatory training coverage",
      "domain": "Nova Learning Institute",
      "tableCount": 12,
      "canvas": {
          "width": 1378,
          "height": 858
      },
      "tables": [
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
      ],
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
      ]
  }
};

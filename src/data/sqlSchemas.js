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
  }
};

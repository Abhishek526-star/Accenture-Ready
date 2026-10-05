// src/data/mockTests/mockTest5.js
// Technical MCQ Practice Set 5
// Total Questions: 44 | Marks: 44 (+1 Mark/Q) | Duration: 44 Mins

export const mockTest5 = [
  {
    "id": "tech-mcq-s5-q01",
    "number": 1,
    "question": "A web developer builds an interactive UI where clicking a button passes its reference (`this`) to a JavaScript handler to dynamically retrieve element details. What string value will be logged to the document upon execution?",
    "options": [
      {
        "id": "A",
        "text": "button"
      },
      {
        "id": "B",
        "text": "object HTMLButtonElement"
      },
      {
        "id": "C",
        "text": "BUTTON"
      },
      {
        "id": "D",
        "text": "undefined"
      }
    ],
    "correctAnswer": "A",
    "topic": "JavaScript / DOM",
    "difficulty": "Easy",
    "explanation": "The button passes itself as `this`; `tagName` is `BUTTON` and `.toLowerCase()` produces `button`.",
    "marks": 1,
    "code": "<button onclick=\"myFunction(this);\">Click Me</button>\n\n<script type=\"text/javascript\">\nfunction myFunction(btn) {\n    document.write(btn.tagName.toLowerCase());\n}\n</script>",
    "optionExplanations": {
      "A": "The button passes itself as `this`; `tagName` is `BUTTON` and `.toLowerCase()` produces `button`.",
      "button": "The button passes itself as `this`; `tagName` is `BUTTON` and `.toLowerCase()` produces `button`.",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "object HTMLButtonElement": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "BUTTON": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "undefined": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s5-q02",
    "number": 2,
    "question": "A data processing module takes a list of pricing metrics and passes a transformation callback to process each item. What output string will be generated on the webpage?",
    "options": [
      {
        "id": "A",
        "text": "10, 20, 30"
      },
      {
        "id": "B",
        "text": "5, 10, 15"
      },
      {
        "id": "C",
        "text": "10, 15, 20"
      },
      {
        "id": "D",
        "text": "2.5, 5, 7.5"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript / Array Methods",
    "difficulty": "Easy",
    "explanation": "`map()` divides each element by 2: 10→5, 20→10, 30→15.",
    "marks": 1,
    "code": "var numbers = [10, 20, 30];\n\nfunction divideByTwo(val) {\n    return (val / 2);\n}\n\ndocument.write(numbers.map(divideByTwo));",
    "optionExplanations": {
      "A": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "10, 20, 30": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "B": "`map()` divides each element by 2: 10→5, 20→10, 30→15.",
      "5, 10, 15": "`map()` divides each element by 2: 10→5, 20→10, 30→15.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "10, 15, 20": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "2.5, 5, 7.5": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s5-q03",
    "number": 3,
    "question": "A front-end developer is auditing a site's semantic HTML structure to improve SEO and screen reader accessibility. Which HTML5 tag should be used to wrap navigational links and introductory branding at the top of a page?",
    "options": [
      {
        "id": "A",
        "text": "<head>"
      },
      {
        "id": "B",
        "text": "<header>"
      },
      {
        "id": "C",
        "text": "<top>"
      },
      {
        "id": "D",
        "text": "<heading>"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTML5",
    "difficulty": "Easy",
    "explanation": "The semantic `<header>` element is used for introductory content, branding, and navigation.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The <head> tag contains metadata, stylesheets, and scripts, not visible introductory UI headings.",
      "<head>": "Incorrect. The <head> tag contains metadata, stylesheets, and scripts, not visible introductory UI headings.",
      "B": "Correct. The <header> element is semantic HTML5 designed specifically for introductory content, site branding, and navigation.",
      "<header>": "Correct. The <header> element is semantic HTML5 designed specifically for introductory content, site branding, and navigation.",
      "C": "Incorrect. <top> is not a valid HTML element.",
      "<top>": "Incorrect. <top> is not a valid HTML element.",
      "D": "Incorrect. <heading> is not a valid HTML element; individual headings use <h1> through <h6>.",
      "<heading>": "Incorrect. <heading> is not a valid HTML element; individual headings use <h1> through <h6>."
    }
  },
  {
    "id": "tech-mcq-s5-q04",
    "number": 4,
    "question": "A UX designer wants to convert square user profile thumbnails into clean circular avatars using CSS. Which styling property value achieves this visual transformation?",
    "options": [
      {
        "id": "A",
        "text": "border-radius: 50%;"
      },
      {
        "id": "B",
        "text": "border-radius: 100px 0 100px 0;"
      },
      {
        "id": "C",
        "text": "border-style: circle;"
      },
      {
        "id": "D",
        "text": "clip-shape: circle(50%);"
      }
    ],
    "correctAnswer": "A",
    "topic": "CSS",
    "difficulty": "Easy",
    "explanation": "A 50% border radius turns a square element into a circle.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Setting 'border-radius: 50%' on an element with equal width and height yields a perfect circle.",
      "border-radius: 50%;": "Correct. Setting 'border-radius: 50%' on an element with equal width and height yields a perfect circle.",
      "B": "Incorrect. '100px 0 100px 0' rounds only the top-left and bottom-right corners, creating a leaf shape.",
      "border-radius: 100px 0 100px 0;": "Incorrect. '100px 0 100px 0' rounds only the top-left and bottom-right corners, creating a leaf shape.",
      "C": "Incorrect. 'border-style: circle' is invalid CSS; border-style accepts solid, dashed, dotted, etc.",
      "border-style: circle;": "Incorrect. 'border-style: circle' is invalid CSS; border-style accepts solid, dashed, dotted, etc.",
      "D": "Incorrect. 'clip-shape' is not standard CSS; clip-path uses polygon or circle syntax.",
      "clip-shape: circle(50%);": "Incorrect. 'clip-shape' is not standard CSS; clip-path uses polygon or circle syntax."
    }
  },
  {
    "id": "tech-mcq-s5-q05",
    "number": 5,
    "question": "An enterprise Java platform requires specialized subclasses like `Bike` to inherit fundamental properties and methods from a parent `Vehicle` class. Which code snippet correctly implements this object-oriented relationship?",
    "options": [
      {
        "id": "A",
        "text": "class Vehicle {\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\n\nclass Bike extends Vehicle {\n    @Override\n    void start() {\n        System.out.println(\"Bike started\");\n    }\n}"
      },
      {
        "id": "B",
        "text": "class Vehicle {\n    void start() {}\n}\n\nclass Bike implements Vehicle {\n    void start() {}\n}"
      },
      {
        "id": "C",
        "text": "class Vehicle {\n    void start() {}\n}\n\nclass Bike inherits Vehicle {\n    void start() {}\n}"
      },
      {
        "id": "D",
        "text": "class Vehicle {\n    void start() {}\n}\n\nclass Bike super Vehicle {\n    void start() {}\n}"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Inheritance",
    "difficulty": "Easy",
    "explanation": "Java class inheritance uses `extends`.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. In Java, class Bike extends Vehicle properly establishes class inheritance and overrides start().",
      "class Vehicle {\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\n\nclass Bike extends Vehicle {\n    @Override\n    void start() {\n        System.out.println(\"Bike started\");\n    }\n}": "Correct. In Java, class Bike extends Vehicle properly establishes class inheritance and overrides start().",
      "B": "Incorrect. 'implements' is reserved for Java interface implementation, not class inheritance.",
      "class Vehicle {\n    void start() {}\n}\n\nclass Bike implements Vehicle {\n    void start() {}\n}": "Incorrect. 'implements' is reserved for Java interface implementation, not class inheritance.",
      "C": "Incorrect. Java does not have an 'inherits' keyword.",
      "class Vehicle {\n    void start() {}\n}\n\nclass Bike inherits Vehicle {\n    void start() {}\n}": "Incorrect. Java does not have an 'inherits' keyword.",
      "D": "Incorrect. 'super' is a keyword used to invoke superclass constructors and methods, not to declare class inheritance.",
      "class Vehicle {\n    void start() {}\n}\n\nclass Bike super Vehicle {\n    void start() {}\n}": "Incorrect. 'super' is a keyword used to invoke superclass constructors and methods, not to declare class inheritance."
    }
  },
  {
    "id": "tech-mcq-s5-q06",
    "number": 6,
    "question": "A DevSecOps team evaluates deploying an inline reverse-proxy Web Application Firewall (WAF) to defend public endpoints. Which operational outcome represents a primary advantage rather than a structural limitation?",
    "options": [
      {
        "id": "A",
        "text": "It adds networking and inspection latency to incoming web requests."
      },
      {
        "id": "B",
        "text": "It requires central management and installation of SSL certificates on proxy nodes."
      },
      {
        "id": "C",
        "text": "It intercepts and drops SQL injection and XSS payloads before they reach application servers."
      },
      {
        "id": "D",
        "text": "It introduces a potential single point of failure if load balancing redundancy is omitted."
      }
    ],
    "correctAnswer": "C",
    "topic": "Web Security / WAF",
    "difficulty": "Medium",
    "explanation": "Blocking malicious SQL injection and XSS payloads before they reach backend applications is a primary WAF benefit.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "It adds networking and inspection latency to incoming web requests.": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "It requires central management and installation of SSL certificates on proxy nodes.": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Blocking malicious SQL injection and XSS payloads before they reach backend applications is a primary WAF benefit.",
      "It intercepts and drops SQL injection and XSS payloads before they reach application servers.": "Blocking malicious SQL injection and XSS payloads before they reach backend applications is a primary WAF benefit.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "It introduces a potential single point of failure if load balancing redundancy is omitted.": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s5-q07",
    "number": 7,
    "question": "During a code review of an e-commerce platform, a junior developer asks about object creation logic in Java. In the snippet below, how should the relationship between `Book` and `myBook` be accurately defined?",
    "options": [
      {
        "id": "A",
        "text": "Book is the class definition; myBook is an instantiated object instance of that class."
      },
      {
        "id": "B",
        "text": "myBook is the base class; Book is a derived subclass."
      },
      {
        "id": "C",
        "text": "Both are primitive types stored directly on the execution stack."
      },
      {
        "id": "D",
        "text": "Book is an interface; myBook is a static factory method."
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / OOP",
    "difficulty": "Easy",
    "explanation": "`Book` is the class blueprint and `new Book(...)` creates the object referenced by `myBook`.",
    "marks": 1,
    "code": "public class Book {\n    private String title;\n    public Book(String title) { this.title = title; }\n    public String getTitle() { return title; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book myBook = new Book(\"Java Basics\");\n        System.out.println(myBook.getTitle());\n    }\n}",
    "optionExplanations": {
      "A": "`Book` is the class blueprint and `new Book(...)` creates the object referenced by `myBook`.",
      "Book is the class definition; myBook is an instantiated object instance of that class.": "`Book` is the class blueprint and `new Book(...)` creates the object referenced by `myBook`.",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "myBook is the base class; Book is a derived subclass.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Both are primitive types stored directly on the execution stack.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Book is an interface; myBook is a static factory method.": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s5-q08",
    "number": 8,
    "question": "A financial software engine needs a `Calculator` service that computes shapes via `calculateArea()` using different parameter sets. Which OOP mechanism facilitates defining multiple method signatures with the same name inside a single class?",
    "options": [
      {
        "id": "A",
        "text": "Method Overloading (Compile-time Polymorphism)"
      },
      {
        "id": "B",
        "text": "Method Overriding (Runtime Polymorphism)"
      },
      {
        "id": "C",
        "text": "Dynamic Dispatching"
      },
      {
        "id": "D",
        "text": "Encapsulation"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Polymorphism",
    "difficulty": "Easy",
    "explanation": "Multiple methods share the same name but have different parameter lists, which is method overloading.",
    "marks": 1,
    "code": "public class Calculator {\n    public double calculateArea(double radius) {\n        return 3.14 * radius * radius;\n    }\n\n    public double calculateArea(double length, double width) {\n        return length * width;\n    }\n}",
    "optionExplanations": {
      "A": "Multiple methods share the same name but have different parameter lists, which is method overloading.",
      "Method Overloading (Compile-time Polymorphism)": "Multiple methods share the same name but have different parameter lists, which is method overloading.",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Method Overriding (Runtime Polymorphism)": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime.",
      "Dynamic Dispatching": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Encapsulation": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s5-q09",
    "number": 9,
    "question": "A mobile client application attempts to access a protected payment endpoint without providing a valid JWT bearer token in the HTTP request headers. What HTTP status code should the API server return?",
    "options": [
      {
        "id": "A",
        "text": "401 Unauthorized"
      },
      {
        "id": "B",
        "text": "403 Forbidden"
      },
      {
        "id": "C",
        "text": "404 Not Found"
      },
      {
        "id": "D",
        "text": "500 Internal Server Error"
      }
    ],
    "correctAnswer": "A",
    "topic": "HTTP / Authentication",
    "difficulty": "Easy",
    "explanation": "A missing or invalid authentication credential is a 401 condition.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. HTTP 401 Unauthorized indicates that the request lacks valid authentication credentials (e.g. Bearer token).",
      "401 Unauthorized": "Correct. HTTP 401 Unauthorized indicates that the request lacks valid authentication credentials (e.g. Bearer token).",
      "B": "Incorrect. HTTP 403 Forbidden indicates that the caller is authenticated but lacks required authorization permissions.",
      "403 Forbidden": "Incorrect. HTTP 403 Forbidden indicates that the caller is authenticated but lacks required authorization permissions.",
      "C": "Incorrect. HTTP 404 Not Found indicates that the specified URI endpoint does not exist.",
      "404 Not Found": "Incorrect. HTTP 404 Not Found indicates that the specified URI endpoint does not exist.",
      "D": "Incorrect. HTTP 500 Internal Server Error represents an unhandled application or server failure.",
      "500 Internal Server Error": "Incorrect. HTTP 500 Internal Server Error represents an unhandled application or server failure."
    }
  },
  {
    "id": "tech-mcq-s5-q10",
    "number": 10,
    "question": "A platform engineering team needs to introduce breaking changes to JSON request bodies on a high-traffic REST API without disrupting legacy third-party mobile apps. Which strategy best maintains system availability?",
    "options": [
      {
        "id": "A",
        "text": "Apply destructive schema migrations to the production database immediately"
      },
      {
        "id": "B",
        "text": "Maintain explicit versioned API endpoints (e.g., routing requests via /v1/ and /v2/)"
      },
      {
        "id": "C",
        "text": "Return HTTP 500 exceptions on older request structures to force app updates"
      },
      {
        "id": "D",
        "text": "Change the API protocol from REST JSON to XML dynamically"
      }
    ],
    "correctAnswer": "B",
    "topic": "API Design / Versioning",
    "difficulty": "Easy",
    "explanation": "Separate API versions allow old and new request schemas to coexist.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Applying destructive schema changes directly to production drops columns required by active legacy clients.",
      "Apply destructive schema migrations to the production database immediately": "Incorrect. Applying destructive schema changes directly to production drops columns required by active legacy clients.",
      "B": "Correct. Versioned routing (e.g. /v2/orders alongside /v1/orders) enables new features without breaking existing clients.",
      "Maintain explicit versioned API endpoints (e.g., routing requests via /v1/ and /v2/)": "Correct. Versioned routing (e.g. /v2/orders alongside /v1/orders) enables new features without breaking existing clients.",
      "C": "Incorrect. Returning HTTP 500 errors degrades service availability and violates API contract reliability.",
      "Return HTTP 500 exceptions on older request structures to force app updates": "Incorrect. Returning HTTP 500 errors degrades service availability and violates API contract reliability.",
      "D": "Incorrect. Abruptly altering data interchange formats breaks serialization in client applications.",
      "Change the API protocol from REST JSON to XML dynamically": "Incorrect. Abruptly altering data interchange formats breaks serialization in client applications."
    }
  },
  {
    "id": "tech-mcq-s5-q11",
    "number": 11,
    "question": "In an automated DevOps deployment workflow, compiled Java `.jar` files and Docker container layers must be safely stored and versioned across staging environments. Which tool category fulfills this operational requirement?",
    "options": [
      {
        "id": "A",
        "text": "Source Control System"
      },
      {
        "id": "B",
        "text": "Artifact Repository"
      },
      {
        "id": "C",
        "text": "Configuration Manager"
      },
      {
        "id": "D",
        "text": "Monitoring Agent"
      }
    ],
    "correctAnswer": "B",
    "topic": "DevOps / CI-CD",
    "difficulty": "Easy",
    "explanation": "Artifact repositories store, version, and distribute built binaries and container artifacts.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Source Control System": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Artifact repositories store, version, and distribute built binaries and container artifacts.",
      "Artifact Repository": "Artifact repositories store, version, and distribute built binaries and container artifacts.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Configuration Manager": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Monitoring Agent": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s5-q12",
    "number": 12,
    "question": "A database architect is designing a schema for a high-volume transactional ordering engine. Which column best fulfills the constraints of a Primary Key for the `Orders` table?",
    "options": [
      {
        "id": "A",
        "text": "CustomerName"
      },
      {
        "id": "B",
        "text": "OrderDate"
      },
      {
        "id": "C",
        "text": "OrderID"
      },
      {
        "id": "D",
        "text": "ShippingAddress"
      }
    ],
    "correctAnswer": "C",
    "topic": "DBMS / Primary Keys",
    "difficulty": "Easy",
    "explanation": "A primary key must uniquely identify each order; OrderID is the intended stable identifier.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Multiple customers can share identical names, violating unique entity constraints.",
      "CustomerName": "Incorrect. Multiple customers can share identical names, violating unique entity constraints.",
      "B": "Incorrect. Many orders can occur on the same date, creating non-unique collisions.",
      "OrderDate": "Incorrect. Many orders can occur on the same date, creating non-unique collisions.",
      "C": "Correct. OrderID is a surrogate key guaranteeing uniqueness, non-nullability, and immutability for every transaction.",
      "OrderID": "Correct. OrderID is a surrogate key guaranteeing uniqueness, non-nullability, and immutability for every transaction.",
      "D": "Incorrect. Multiple orders can be delivered to identical shipping addresses.",
      "ShippingAddress": "Incorrect. Multiple orders can be delivered to identical shipping addresses."
    }
  },
  {
    "id": "tech-mcq-s5-q13",
    "number": 13,
    "question": "During peak sales hours, Transaction A reads an account balance row. Seconds later, Transaction B modifies and commits an update to that balance. When Transaction A re-reads the row within its same execution block, it encounters a different value. What isolation anomaly occurred?",
    "options": [
      {
        "id": "A",
        "text": "Dirty Read"
      },
      {
        "id": "B",
        "text": "Non-repeatable Read"
      },
      {
        "id": "C",
        "text": "Phantom Read"
      },
      {
        "id": "D",
        "text": "Write Skew"
      }
    ],
    "correctAnswer": "B",
    "topic": "DBMS / Concurrency",
    "difficulty": "Easy",
    "explanation": "The same transaction reads the same row twice and gets different committed values after another transaction updates it.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A dirty read occurs when reading uncommitted data that is later rolled back.",
      "Dirty Read": "Incorrect. A dirty read occurs when reading uncommitted data that is later rolled back.",
      "B": "Correct. Non-repeatable read occurs when Transaction A reads a row, another transaction updates and commits that row, and Transaction A re-reads different data.",
      "Non-repeatable Read": "Correct. Non-repeatable read occurs when Transaction A reads a row, another transaction updates and commits that row, and Transaction A re-reads different data.",
      "C": "Incorrect. A phantom read involves changes in the set of rows returned by a range predicate, rather than an in-place value modification.",
      "Phantom Read": "Incorrect. A phantom read involves changes in the set of rows returned by a range predicate, rather than an in-place value modification.",
      "D": "Incorrect. Write skew occurs in snapshot isolation when concurrent transactions make conflicting disjoint updates based on overlapping reads.",
      "Write Skew": "Incorrect. Write skew occurs in snapshot isolation when concurrent transactions make conflicting disjoint updates based on overlapping reads."
    }
  },
  {
    "id": "tech-mcq-s5-q14",
    "number": 14,
    "question": "A critical database cluster experiences sudden CPU exhaustion and spike in active client connections. What is the most effective initial troubleshooting action for an engineer to take?",
    "options": [
      {
        "id": "A",
        "text": "Double server RAM allocations immediately"
      },
      {
        "id": "B",
        "text": "Analyze process lists, slow query logs, and APM performance metrics."
      },
      {
        "id": "C",
        "text": "Drop all non-clustered indexes across major tables"
      },
      {
        "id": "D",
        "text": "Force-reboot physical database hardware hosts"
      }
    ],
    "correctAnswer": "B",
    "topic": "Database / Troubleshooting",
    "difficulty": "Medium",
    "explanation": "Diagnosis should precede risky configuration changes; telemetry can reveal locks, expensive queries, or connection pressure.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Increasing memory masks unindexed queries and expensive full-table scans without solving the root bottleneck.",
      "Double server RAM allocations immediately": "Incorrect. Increasing memory masks unindexed queries and expensive full-table scans without solving the root bottleneck.",
      "B": "Correct. Analyzing active process lists, query execution plans, and slow query logs directly pinpoints full table scans and missing indexes.",
      "Analyze process lists, slow query logs, and APM performance metrics.": "Correct. Analyzing active process lists, query execution plans, and slow query logs directly pinpoints full table scans and missing indexes.",
      "C": "Incorrect. Dropping indexes forces the engine into costly sequential scans, severely worsening CPU exhaustion.",
      "Drop all non-clustered indexes across major tables": "Incorrect. Dropping indexes forces the engine into costly sequential scans, severely worsening CPU exhaustion.",
      "D": "Incorrect. Force-rebooting disrupts ongoing client transactions and risks data recovery delays without fixing inefficient queries.",
      "Force-reboot physical database hardware hosts": "Incorrect. Force-rebooting disrupts ongoing client transactions and risks data recovery delays without fixing inefficient queries."
    }
  },
  {
    "id": "tech-mcq-s5-q15",
    "number": 15,
    "question": "A cloud security architect is hardening a multi-tenant microservices platform against internal compromises. What is the primary operational objective of implementing micro-segmentation across workloads?",
    "options": [
      {
        "id": "A",
        "text": "Accelerating network packet routing speeds between services"
      },
      {
        "id": "B",
        "text": "Containing breaches by restricting unauthorized lateral movement across workload segments."
      },
      {
        "id": "C",
        "text": "Removing the requirement for core internal DNS resolution"
      },
      {
        "id": "D",
        "text": "Reducing external public IP address utilization"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "Micro-segmentation limits attacker movement between isolated workloads.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "Accelerating network packet routing speeds between services": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "B": "Micro-segmentation limits attacker movement between isolated workloads.",
      "Containing breaches by restricting unauthorized lateral movement across workload segments.": "Micro-segmentation limits attacker movement between isolated workloads.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Removing the requirement for core internal DNS resolution": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Reducing external public IP address utilization": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q16",
    "number": 16,
    "question": "A network engineer needs to secure cross-site communications using IPsec. Which protocol must be selected to guarantee data encryption (confidentiality) alongside packet authentication and integrity?",
    "options": [
      {
        "id": "A",
        "text": "Authentication Header (AH)"
      },
      {
        "id": "B",
        "text": "Encapsulating Security Payload (ESP)"
      },
      {
        "id": "C",
        "text": "Diffie-Hellman (DH)"
      },
      {
        "id": "D",
        "text": "Internet Key Exchange (IKE)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / IPsec",
    "difficulty": "Medium",
    "explanation": "ESP supports confidentiality plus authentication/integrity.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Authentication Header (AH)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "ESP supports confidentiality plus authentication/integrity.",
      "Encapsulating Security Payload (ESP)": "ESP supports confidentiality plus authentication/integrity.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Diffie-Hellman (DH)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Internet Key Exchange (IKE)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q17",
    "number": 17,
    "question": "A national retail enterprise needs to securely connect 50 regional branch offices to central cloud infrastructure over public ISP connections on a permanent basis. Which VPN solution fits best?",
    "options": [
      {
        "id": "A",
        "text": "Site-to-Site VPN"
      },
      {
        "id": "B",
        "text": "Remote-Access Client VPN"
      },
      {
        "id": "C",
        "text": "Clientless SSL Proxy"
      },
      {
        "id": "D",
        "text": "Host-to-Host Tunnel"
      }
    ],
    "correctAnswer": "A",
    "topic": "Networking / VPN",
    "difficulty": "Easy",
    "explanation": "A site-to-site VPN permanently connects entire networks, such as branch offices to a central network.",
    "marks": 1,
    "optionExplanations": {
      "A": "A site-to-site VPN permanently connects entire networks, such as branch offices to a central network.",
      "Site-to-Site VPN": "A site-to-site VPN permanently connects entire networks, such as branch offices to a central network.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Remote-Access Client VPN": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Clientless SSL Proxy": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Host-to-Host Tunnel": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q18",
    "number": 18,
    "question": "A live sports broadcasting app requires real-time streaming where minimal latency is critical, and dropping occasional video frames is acceptable compared to buffering delays. Which transport protocol should be used?",
    "options": [
      {
        "id": "A",
        "text": "TCP"
      },
      {
        "id": "B",
        "text": "UDP"
      },
      {
        "id": "C",
        "text": "SCTP"
      },
      {
        "id": "D",
        "text": "QUIC"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / Transport Layer",
    "difficulty": "Easy",
    "explanation": "UDP favors low latency and does not retransmit lost packets at the transport layer.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. TCP introduces connection-establishment and retransmission overhead.",
      "TCP": "Incorrect. TCP introduces connection-establishment and retransmission overhead.",
      "B": "UDP favors low latency and does not retransmit lost packets at the transport layer.",
      "UDP": "UDP favors low latency and does not retransmit lost packets at the transport layer.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "SCTP": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "QUIC": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q19",
    "number": 19,
    "question": "A network troubleshooter is analyzing packet headers captured by a packet analyzer. At which layer of the OSI model does packet routing based on source and destination IP addresses take place?",
    "options": [
      {
        "id": "A",
        "text": "Data Link Layer (Layer 2)"
      },
      {
        "id": "B",
        "text": "Network Layer (Layer 3)"
      },
      {
        "id": "C",
        "text": "Transport Layer (Layer 4)"
      },
      {
        "id": "D",
        "text": "Session Layer (Layer 5)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / OSI",
    "difficulty": "Easy",
    "explanation": "IP addressing and routing are Layer 3 functions.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Data Link Layer (Layer 2)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "IP addressing and routing are Layer 3 functions.",
      "Network Layer (Layer 3)": "IP addressing and routing are Layer 3 functions.",
      "C": "Incorrect. The transport layer governs end-to-end communication (TCP/UDP), not this function.",
      "Transport Layer (Layer 4)": "Incorrect. The transport layer governs end-to-end communication (TCP/UDP), not this function.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Session Layer (Layer 5)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q20",
    "number": 20,
    "question": "A network security administrator needs a perimeter defense device capable of tracking active TCP connection states (SYN, SYN-ACK, ACK) to enforce traffic policies dynamically. What device is required?",
    "options": [
      {
        "id": "A",
        "text": "Stateless Packet Filter"
      },
      {
        "id": "B",
        "text": "Stateful Packet Inspection (SPI) Firewall"
      },
      {
        "id": "C",
        "text": "Circuit-Level Proxy"
      },
      {
        "id": "D",
        "text": "Application Gateway"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security / Firewalls",
    "difficulty": "Easy",
    "explanation": "A stateful firewall tracks TCP connection state.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Stateless Packet Filter": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "A stateful firewall tracks TCP connection state.",
      "Stateful Packet Inspection (SPI) Firewall": "A stateful firewall tracks TCP connection state.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Circuit-Level Proxy": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Application Gateway": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q21",
    "number": 21,
    "question": "An enterprise migrates physical hardware to a public cloud provider to manage Virtual Private Clouds, dynamic block storage, and compute instances via an API console. Which cloud model does this represent?",
    "options": [
      {
        "id": "A",
        "text": "SaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "IaaS"
      },
      {
        "id": "D",
        "text": "FaaS"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "IaaS provides virtual compute, networking, and storage resources.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "SaaS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "PaaS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "IaaS provides virtual compute, networking, and storage resources.",
      "IaaS": "IaaS provides virtual compute, networking, and storage resources.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "FaaS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s5-q22",
    "number": 22,
    "question": "A government organization with strict regulatory standards provisions cloud infrastructure hosted exclusively on dedicated hardware for its own single entity. Which cloud deployment model is being utilized?",
    "options": [
      {
        "id": "A",
        "text": "Public Cloud"
      },
      {
        "id": "B",
        "text": "Private Cloud"
      },
      {
        "id": "C",
        "text": "Community Cloud"
      },
      {
        "id": "D",
        "text": "Hybrid Cloud"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "Dedicated infrastructure for one organization corresponds to a private cloud.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Public Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Dedicated infrastructure for one organization corresponds to a private cloud.",
      "Private Cloud": "Dedicated infrastructure for one organization corresponds to a private cloud.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Community Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Hybrid Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s5-q23",
    "number": 23,
    "question": "When deploying virtualized servers in a cloud environment, what underlying software layer is responsible for virtualizing host hardware to allow multiple guest OS instances to run independently?",
    "options": [
      {
        "id": "A",
        "text": "Hypervisor"
      },
      {
        "id": "B",
        "text": "SAN Volume Manager"
      },
      {
        "id": "C",
        "text": "Load Balancer"
      },
      {
        "id": "D",
        "text": "Container Engine"
      }
    ],
    "correctAnswer": "A",
    "topic": "Cloud / Virtualization",
    "difficulty": "Easy",
    "explanation": "A hypervisor virtualizes physical resources and runs isolated guest VMs.",
    "marks": 1,
    "optionExplanations": {
      "A": "A hypervisor virtualizes physical resources and runs isolated guest VMs.",
      "Hypervisor": "A hypervisor virtualizes physical resources and runs isolated guest VMs.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "SAN Volume Manager": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Load Balancer": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Container Engine": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s5-q24",
    "number": 24,
    "question": "When operating workloads under the AWS Shared Responsibility Model, which security task falls directly on the client rather than the cloud provider?",
    "options": [
      {
        "id": "A",
        "text": "Securing data center facilities"
      },
      {
        "id": "B",
        "text": "Updating host hypervisor firmware"
      },
      {
        "id": "C",
        "text": "Applying operating system patches on guest VM instances"
      },
      {
        "id": "D",
        "text": "Replacing degraded server storage hardware"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Security / Shared Responsibility",
    "difficulty": "Medium",
    "explanation": "Customers are responsible for security inside their guest instances, including OS patching.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Securing data center facilities": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Updating host hypervisor firmware": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Customers are responsible for security inside their guest instances, including OS patching.",
      "Applying operating system patches on guest VM instances": "Customers are responsible for security inside their guest instances, including OS patching.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Replacing degraded server storage hardware": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s5-q25",
    "number": 25,
    "question": "An e-commerce business experiences traffic surges during flash sales. How does cloud resource pooling support this dynamic elasticity without manual server installation?",
    "options": [
      {
        "id": "A",
        "text": "By permanently dedicating static physical hardware per user"
      },
      {
        "id": "B",
        "text": "By dynamically reallocating compute resources from a shared physical hardware pool based on real-time load"
      },
      {
        "id": "C",
        "text": "By eliminating physical network latency"
      },
      {
        "id": "D",
        "text": "By requiring manual administrative intervention during traffic spikes"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing / Resource Pooling",
    "difficulty": "Medium",
    "explanation": "Pooling lets providers dynamically allocate shared capacity as demand changes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By permanently dedicating static physical hardware per user": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Pooling lets providers dynamically allocate shared capacity as demand changes.",
      "By dynamically reallocating compute resources from a shared physical hardware pool based on real-time load": "Pooling lets providers dynamically allocate shared capacity as demand changes.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By eliminating physical network latency": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By requiring manual administrative intervention during traffic spikes": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s5-q26",
    "number": 26,
    "question": "A classical Caesar Cipher uses a shift key of +3 to encrypt messages. During a security audit, an operator accidentally applies an improper decryption key shift of +3 instead of -3. What is the result?",
    "options": [
      {
        "id": "A",
        "text": "The message correctly decodes into original plaintext"
      },
      {
        "id": "B",
        "text": "The message undergoes double transformation (+6 total shift), producing garbled text."
      },
      {
        "id": "C",
        "text": "The key resets automatically to zero"
      },
      {
        "id": "D",
        "text": "The encryption engine throws a buffer overflow exception"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cryptography / Caesar Cipher",
    "difficulty": "Easy",
    "explanation": "Decryption should apply the inverse -3 shift; applying +3 again creates a net +6 shift from the original plaintext.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Encrypting an already encrypted ciphertext applies another forward shift rather than inverting the cipher.",
      "The message correctly decodes into original plaintext": "Incorrect. Encrypting an already encrypted ciphertext applies another forward shift rather than inverting the cipher.",
      "B": "Correct. Applying a +3 Caesar shift to a message that was already encrypted with +3 produces an aggregated +6 shift, resulting in double-encrypted ciphertext.",
      "The message undergoes double transformation (+6 total shift), producing garbled text.": "Correct. Applying a +3 Caesar shift to a message that was already encrypted with +3 produces an aggregated +6 shift, resulting in double-encrypted ciphertext.",
      "C": "Incorrect. The shift key is a mathematical constant and does not reset to zero upon encryption.",
      "The key resets automatically to zero": "Incorrect. The shift key is a mathematical constant and does not reset to zero upon encryption.",
      "D": "Incorrect. Simple character substitutions do not cause memory buffer overflows in standard implementations.",
      "The encryption engine throws a buffer overflow exception": "Incorrect. Simple character substitutions do not cause memory buffer overflows in standard implementations."
    }
  },
  {
    "id": "tech-mcq-s5-q27",
    "number": 27,
    "question": "A high-security facility requires enterprise Wi-Fi where both the central authentication server and connected client devices authenticate each other using X.509 digital certificates. Which EAP protocol is required?",
    "options": [
      {
        "id": "A",
        "text": "EAP-TLS"
      },
      {
        "id": "B",
        "text": "EAP-TTLS"
      },
      {
        "id": "C",
        "text": "PEAPv0"
      },
      {
        "id": "D",
        "text": "EAP-FAST"
      }
    ],
    "correctAnswer": "A",
    "topic": "Network Security / EAP",
    "difficulty": "Medium",
    "explanation": "EAP-TLS supports mutual certificate authentication with certificates on both client and server.",
    "marks": 1,
    "optionExplanations": {
      "A": "EAP-TLS supports mutual certificate authentication with certificates on both client and server.",
      "EAP-TLS": "EAP-TLS supports mutual certificate authentication with certificates on both client and server.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "EAP-TTLS": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "PEAPv0": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "EAP-FAST": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s5-q28",
    "number": 28,
    "question": "A database administrator needs to audit employee records. Which SQL query calculates how many times the character 'a' appears inside the `LastName` string field across records?",
    "options": [
      {
        "id": "A",
        "text": "SELECT LastName, COUNT(LastName) \nFROM Employees \nWHERE LastName LIKE '%a%';"
      },
      {
        "id": "B",
        "text": "SELECT LastName, LENGTH(LastName) - LENGTH(REPLACE(LastName, 'a', '')) \nFROM Employees;"
      },
      {
        "id": "C",
        "text": "SELECT COUNT('a') \nFROM Employees \nGROUP BY LastName;"
      },
      {
        "id": "D",
        "text": "SELECT LENGTH(REPLACE(LastName, 'a', '')) \nFROM Employees;"
      }
    ],
    "correctAnswer": "B",
    "topic": "SQL / String Functions",
    "difficulty": "Medium",
    "explanation": "The length difference before and after removing `a` equals the number of `a` characters.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. COUNT(LastName) counts rows matching the pattern, not individual character occurrences.",
      "SELECT LastName, COUNT(LastName) \nFROM Employees \nWHERE LastName LIKE '%a%';": "Incorrect. COUNT(LastName) counts rows matching the pattern, not individual character occurrences.",
      "B": "Correct. LENGTH(LastName) minus LENGTH(REPLACE(LastName, 'a', '')) calculates the exact occurrence count of 'a' in each row.",
      "SELECT LastName, LENGTH(LastName) - LENGTH(REPLACE(LastName, 'a', '')) \nFROM Employees;": "Correct. LENGTH(LastName) minus LENGTH(REPLACE(LastName, 'a', '')) calculates the exact occurrence count of 'a' in each row.",
      "C": "Incorrect. COUNT('a') counts the non-null constant 'a' per group, which simply yields the row count.",
      "SELECT COUNT('a') \nFROM Employees \nGROUP BY LastName;": "Incorrect. COUNT('a') counts the non-null constant 'a' per group, which simply yields the row count.",
      "D": "Incorrect. LENGTH(REPLACE(...)) gives the length of the string after removing 'a', without subtracting it from original length.",
      "SELECT LENGTH(REPLACE(LastName, 'a', '')) \nFROM Employees;": "Incorrect. LENGTH(REPLACE(...)) gives the length of the string after removing 'a', without subtracting it from original length."
    }
  },
  {
    "id": "tech-mcq-s5-q29",
    "number": 29,
    "question": "A business analyst wants a report listing all department names from `Departments`, along with assigned employees from `Employees`. Departments with zero assigned employees must still appear in the results. Which query type achieves this requirement?",
    "options": [
      {
        "id": "A",
        "text": "SELECT D.DeptName, E.EmpName \nFROM Departments D \nINNER JOIN Employees E \n  ON D.DeptID = E.DeptID;"
      },
      {
        "id": "B",
        "text": "SELECT D.DeptName, E.EmpName \nFROM Departments D \nLEFT JOIN Employees E \n  ON D.DeptID = E.DeptID;"
      },
      {
        "id": "C",
        "text": "SELECT D.DeptName, E.EmpName \nFROM Departments D \nRIGHT JOIN Employees E \n  ON D.DeptID = E.DeptID;"
      },
      {
        "id": "D",
        "text": "SELECT D.DeptName, E.EmpName\nFROM Departments D\nFULL JOIN Employees E\n  ON D.DeptID = E.DeptID;"
      }
    ],
    "correctAnswer": "B",
    "topic": "SQL / Joins",
    "difficulty": "Easy",
    "explanation": "A LEFT JOIN preserves all departments, including departments with no employees.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT D.DeptName, E.EmpName \nFROM Departments D \nINNER JOIN Employees E \n  ON D.DeptID = E.DeptID;": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "B": "A LEFT JOIN preserves all departments, including departments with no employees.",
      "SELECT D.DeptName, E.EmpName \nFROM Departments D \nLEFT JOIN Employees E \n  ON D.DeptID = E.DeptID;": "A LEFT JOIN preserves all departments, including departments with no employees.",
      "C": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT D.DeptName, E.EmpName \nFROM Departments D \nRIGHT JOIN Employees E \n  ON D.DeptID = E.DeptID;": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "D": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT D.DeptName, E.EmpName\nFROM Departments D\nFULL JOIN Employees E\n  ON D.DeptID = E.DeptID;": "Incorrect. This join condition or syntax does not properly link relational keys."
    }
  },
  {
    "id": "tech-mcq-s5-q30",
    "number": 30,
    "question": "Write pseudocode to declare an array named scores with [80, 85, 90, 95] and print the 3rd element.",
    "options": [
      {
        "id": "A",
        "text": "PRINT scores[3]"
      },
      {
        "id": "B",
        "text": "PRINT scores[2]"
      },
      {
        "id": "C",
        "text": "PRINT scores[1]"
      },
      {
        "id": "D",
        "text": "PRINT scores.get(3)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Arrays",
    "difficulty": "Easy",
    "explanation": "With zero-based indexing, index 2 is the third element, 90.",
    "marks": 1,
    "code": "scores = [80, 85, 90, 95]\nPRINT scores[2]",
    "optionExplanations": {
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "PRINT scores[3]": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "With zero-based indexing, index 2 is the third element, 90.",
      "PRINT scores[2]": "With zero-based indexing, index 2 is the third element, 90.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "PRINT scores[1]": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "PRINT scores.get(3)": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q31",
    "number": 31,
    "question": "Which string input will print 'Valid' in the following pseudocode function?",
    "options": [
      {
        "id": "A",
        "text": "pass1"
      },
      {
        "id": "B",
        "text": "code12"
      },
      {
        "id": "C",
        "text": "a1#b2c"
      },
      {
        "id": "D",
        "text": "1234567"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Regular Expressions",
    "difficulty": "Easy",
    "explanation": "`code12` contains exactly six alphanumeric characters.",
    "marks": 1,
    "code": "function validateInput(string s):\n    if s matches \"[a-zA-Z0-9]{6}\"\n        then print \"Valid\"\n    else\n        then print \"Not Valid\"\n    endif\nend function",
    "optionExplanations": {
      "1234567": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "pass1": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "`code12` contains exactly six alphanumeric characters.",
      "code12": "`code12` contains exactly six alphanumeric characters.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "a1#b2c": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q32",
    "number": 32,
    "question": "Trace the step-by-step execution of the bitwise loop below. What is the final printed result of `x + y`? (Note: '&' is Bitwise AND)",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Bitwise AND",
    "difficulty": "Medium",
    "explanation": "Iteration 1: y=14, then (14&12)+6=18. Iteration 2: y=22, then (22&12)+6=10. Finally x+y=6+10=16.",
    "marks": 1,
    "code": "Integer x, y, z\nSet x = 6, y = 10\n\nfor(each z from 1 to 2)\n    y = y + 4\n    y = (y & 12) + x\nEnd for\n\nPrint x + y",
    "optionExplanations": {
      "16": "Iteration 1: y=14, then (14&12)+6=18. Iteration 2: y=22, then (22&12)+6=10. Finally x+y=6+10=16.",
      "18": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "20": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "22": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Iteration 1: y=14, then (14&12)+6=18. Iteration 2: y=22, then (22&12)+6=10. Finally x+y=6+10=16.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q33",
    "number": 33,
    "question": "Analyze the following 2D array manipulation script. What numerical output will be printed? (Note: '&' is Bitwise AND)",
    "options": [
      {
        "id": "A",
        "text": "4.0"
      },
      {
        "id": "B",
        "text": "14.0"
      },
      {
        "id": "C",
        "text": "16.0"
      },
      {
        "id": "D",
        "text": "20.0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Arrays / Bitwise",
    "difficulty": "Medium",
    "explanation": "4&3=0, so arr[0][1]=0. Since 3>0, arr[0][0] becomes 4. The sum is 0+4=4.0.",
    "marks": 1,
    "code": "Integer arr[2][2] = {{3, 5}, {4, 8}}\n\narr[0][1] = (arr[1][0] & arr[0][0])\n\nif (arr[0][0] > arr[0][1])\n    arr[0][0] = arr[0][0] + 1\nEnd if\n\nPrint arr[0][1] + arr[0][0]",
    "optionExplanations": {
      "A": "4&3=0, so arr[0][1]=0. Since 3>0, arr[0][0] becomes 4. The sum is 0+4=4.0.",
      "4.0": "4&3=0, so arr[0][1]=0. Since 3>0, arr[0][0] becomes 4. The sum is 0+4=4.0.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "14.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "16.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "20.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q34",
    "number": 34,
    "question": "A developer writes a recursive routine to process user loyalty points. What core calculation does this algorithm perform for a positive integer `n`?",
    "options": [
      {
        "id": "A",
        "text": "Calculates the factorial (n!)"
      },
      {
        "id": "B",
        "text": "Calculates the sum of consecutive integers from 1 to n"
      },
      {
        "id": "C",
        "text": "Calculates exponential power 2^n"
      },
      {
        "id": "D",
        "text": "Calculates the nth Fibonacci sequence term"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Recursion",
    "difficulty": "Easy",
    "explanation": "The recurrence is n + sumSeries(n-1), giving n+(n-1)+...+1.",
    "marks": 1,
    "code": "FUNCTION sumSeries(n):\n    IF n is equal to 1\n        RETURN 1\n    ELSE\n        RETURN n + sumSeries(n - 1)\n    END IF\nEND FUNCTION",
    "optionExplanations": {
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Calculates the factorial (n!)": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "The recurrence is n + sumSeries(n-1), giving n+(n-1)+...+1.",
      "Calculates the sum of consecutive integers from 1 to n": "The recurrence is n + sumSeries(n-1), giving n+(n-1)+...+1.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Calculates exponential power 2^n": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Calculates the nth Fibonacci sequence term": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q35",
    "number": 35,
    "question": "Evaluate the outcome of the function fun(a=2, b=4, c=5). What value is returned?",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "C",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Medium",
    "explanation": "2+4<5 is false, so b=7; c=2+7=9; return 2+7+9=18.",
    "marks": 1,
    "code": "Integer fun(Integer a, Integer b, Integer c)\n    if ((a + b) < c)\n        a = b + c\n    else\n        b = a + c\n    end if\n    c = a + b\n    return a + b + c",
    "optionExplanations": {
      "11": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "15": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "18": "2+4<5 is false, so b=7; c=2+7=9; return 2+7+9=18.",
      "21": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "2+4<5 is false, so b=7; c=2+7=9; return 2+7+9=18.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q36",
    "number": 36,
    "question": "Evaluate the outcome of the bitwise XOR comparison block below. What value is printed? (Note: '^' is Bitwise XOR)",
    "options": [
      {
        "id": "A",
        "text": "15"
      },
      {
        "id": "B",
        "text": "17"
      },
      {
        "id": "C",
        "text": "21"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Bitwise XOR",
    "difficulty": "Medium",
    "explanation": "3^6=5, and 5>4, so p=7. Then 7+6+4=17.",
    "marks": 1,
    "code": "Integer p, q, r\nSet p = 3, q = 6, r = 4\n\nif ((p ^ q) > r)\n    p = p + r\nelse\n    q = q + r\nend if\n\nPrint p + q + r",
    "optionExplanations": {
      "15": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "17": "3^6=5, and 5>4, so p=7. Then 7+6+4=17.",
      "21": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "25": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "3^6=5, and 5>4, so p=7. Then 7+6+4=17.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q37",
    "number": 37,
    "question": "A utility routine processes inputs `process(a=2, b=3, c=4)`. What final numerical value is returned by the function?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "17"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Easy",
    "explanation": "2+3+4=9, and 9<5 is false, so the function returns 9.",
    "marks": 1,
    "code": "Integer process(Integer a, Integer b, Integer c)\n    if ((a + b + c) < 5)\n        a = a + 2\n    end if\n    return a + b + c",
    "optionExplanations": {
      "9": "2+3+4=9, and 9<5 is false, so the function returns 9.",
      "11": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "15": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "17": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "2+3+4=9, and 9<5 is false, so the function returns 9.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s5-q38",
    "number": 38,
    "question": "A hardware technician is troubleshooting system bus bottlenecks on a high-performance workstation. Which motherboard pathway directly facilitates data exchange between the CPU and system memory?",
    "options": [
      {
        "id": "A",
        "text": "System Bus"
      },
      {
        "id": "B",
        "text": "CMOS Battery"
      },
      {
        "id": "C",
        "text": "Power Supply Unit"
      },
      {
        "id": "D",
        "text": "SATA Cable"
      }
    ],
    "correctAnswer": "A",
    "topic": "Computer Architecture / Buses",
    "difficulty": "Easy",
    "explanation": "The system bus provides the communication pathway between CPU and main memory in the simplified architecture used by the question.",
    "marks": 1,
    "optionExplanations": {
      "A": "The system bus provides the communication pathway between CPU and main memory in the simplified architecture used by the question.",
      "System Bus": "The system bus provides the communication pathway between CPU and main memory in the simplified architecture used by the question.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "CMOS Battery": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Power Supply Unit": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "SATA Cable": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s5-q39",
    "number": 39,
    "question": "A systems architect upgrades a database host server to eliminate disk I/O bottlenecks. Which interface protocol allows modern enterprise SSDs to connect directly to motherboard PCI Express lanes?",
    "options": [
      {
        "id": "A",
        "text": "SATA III"
      },
      {
        "id": "B",
        "text": "NVMe"
      },
      {
        "id": "C",
        "text": "IDE"
      },
      {
        "id": "D",
        "text": "USB 3.0"
      }
    ],
    "correctAnswer": "B",
    "topic": "Storage / Interfaces",
    "difficulty": "Easy",
    "explanation": "NVMe is designed for SSDs connected over PCIe lanes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. SATA III has a physical throughput ceiling of 6 Gbps (~600 MB/s), which limits modern high-speed flash drives.",
      "SATA III": "Incorrect. SATA III has a physical throughput ceiling of 6 Gbps (~600 MB/s), which limits modern high-speed flash drives.",
      "B": "Correct. NVMe (Non-Volatile Memory Express) interfaces directly over PCIe lanes, delivering multi-GB/s bandwidth and ultra-low queue latencies.",
      "NVMe": "Correct. NVMe (Non-Volatile Memory Express) interfaces directly over PCIe lanes, delivering multi-GB/s bandwidth and ultra-low queue latencies.",
      "C": "Incorrect. IDE is a legacy parallel interface limited to 133 MB/s.",
      "IDE": "Incorrect. IDE is a legacy parallel interface limited to 133 MB/s.",
      "D": "Incorrect. USB 3.0 is an external peripheral bus with higher latency and lower continuous throughput than internal NVMe.",
      "USB 3.0": "Incorrect. USB 3.0 is an external peripheral bus with higher latency and lower continuous throughput than internal NVMe."
    }
  },
  {
    "id": "tech-mcq-s5-q40",
    "number": 40,
    "question": "In a multi-tenant Linux server environment, which operating system security subsystem manages file permissions (Read, Write, Execute) across user groups?",
    "options": [
      {
        "id": "A",
        "text": "File System Access Control"
      },
      {
        "id": "B",
        "text": "Virtual Memory Manager"
      },
      {
        "id": "C",
        "text": "CPU Scheduler"
      },
      {
        "id": "D",
        "text": "Device Driver Framework"
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems / Security",
    "difficulty": "Easy",
    "explanation": "File permissions and ACLs control read, write, and execute authorization.",
    "marks": 1,
    "optionExplanations": {
      "A": "File permissions and ACLs control read, write, and execute authorization.",
      "File System Access Control": "File permissions and ACLs control read, write, and execute authorization.",
      "B": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials.",
      "Virtual Memory Manager": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials.",
      "C": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction.",
      "CPU Scheduler": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Device Driver Framework": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s5-q41",
    "number": 41,
    "question": "A presenter building an executive pitch deck in MS PowerPoint wants bullet points on a slide to appear one by one upon each mouse click. Which setting configuration achieves this behavior?",
    "options": [
      {
        "id": "A",
        "text": "Set Morph transition on the slide"
      },
      {
        "id": "B",
        "text": "Apply an entrance animation and configure Effect Options to 'By Paragraph'"
      },
      {
        "id": "C",
        "text": "Insert slide hyperlinks on every list item"
      },
      {
        "id": "D",
        "text": "Modify default text placement in the Slide Master"
      }
    ],
    "correctAnswer": "B",
    "topic": "MS PowerPoint",
    "difficulty": "Easy",
    "explanation": "By Paragraph animates list items sequentially.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Set Morph transition on the slide": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "B": "By Paragraph animates list items sequentially.",
      "Apply an entrance animation and configure Effect Options to 'By Paragraph'": "By Paragraph animates list items sequentially.",
      "C": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Insert slide hyperlinks on every list item": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Modify default text placement in the Slide Master": "Incorrect. This feature or shortcut serves a different productivity function in the application."
    }
  },
  {
    "id": "tech-mcq-s5-q42",
    "number": 42,
    "question": "An inventory analyst working in MS Excel needs to quickly log timestamp data into audit records. What standard keyboard shortcut inserts the current system time into an active cell?",
    "options": [
      {
        "id": "A",
        "text": "Ctrl + Shift + ;"
      },
      {
        "id": "B",
        "text": "Ctrl + ;"
      },
      {
        "id": "C",
        "text": "Alt + Shift + D"
      },
      {
        "id": "D",
        "text": "Shift + F3"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Excel",
    "difficulty": "Easy",
    "explanation": "Ctrl+Shift+; inserts the current time in Excel.",
    "marks": 1,
    "optionExplanations": {
      "A": "Ctrl+Shift+; inserts the current time in Excel.",
      "Ctrl + Shift + ;": "Ctrl+Shift+; inserts the current time in Excel.",
      "B": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Ctrl + ;": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "C": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Alt + Shift + D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Shift + F3": "Incorrect. This feature or shortcut serves a different productivity function in the application."
    }
  },
  {
    "id": "tech-mcq-s5-q43",
    "number": 43,
    "question": "Analyze the quarterly electronics sales table below: Which device achieves the highest sales volume according to the Excel lookup formula?",
    "options": [
      {
        "id": "A",
        "text": "Projector"
      },
      {
        "id": "B",
        "text": "Laptop"
      },
      {
        "id": "C",
        "text": "Smartphone"
      },
      {
        "id": "D",
        "text": "Tablet"
      }
    ],
    "correctAnswer": "C",
    "topic": "MS Excel / INDEX-MATCH",
    "difficulty": "Easy",
    "explanation": "The maximum sales value is 450 for Smartphone, so INDEX/MATCH returns Smartphone.",
    "marks": 1,
    "code": "=INDEX(A2:A5, MATCH(MAX(B2:B5), B2:B5, 0))",
    "optionExplanations": {
      "A": "Incorrect. Projector has sales of 80, which is the minimum value in column B, not the maximum.",
      "Projector": "Incorrect. Projector has sales of 80, which is the minimum value in column B, not the maximum.",
      "B": "Incorrect. Laptop has sales of 150, which is less than Smartphone's 450.",
      "Laptop": "Incorrect. Laptop has sales of 150, which is less than Smartphone's 450.",
      "C": "Correct. MAX(B2:B5) is 450 (Smartphone, row 3 / offset 2). MATCH finds offset 2, and INDEX(A2:A5, 2) returns 'Smartphone'.",
      "Smartphone": "Correct. MAX(B2:B5) is 450 (Smartphone, row 3 / offset 2). MATCH finds offset 2, and INDEX(A2:A5, 2) returns 'Smartphone'.",
      "D": "Incorrect. Tablet has sales of 200.",
      "Tablet": "Incorrect. Tablet has sales of 200."
    },
    "data": {
      "columns": [
        "Item (Col A)",
        "Sales (Col B)"
      ],
      "rows": [
        [
          "Laptop",
          150
        ],
        [
          "Smartphone",
          450
        ],
        [
          "Tablet",
          200
        ],
        [
          "Projector",
          80
        ]
      ]
    }
  },
  {
    "id": "tech-mcq-s5-q44",
    "number": 44,
    "question": "A system administrator configures administrative roles across corporate workstations. Which fundamental security principle mandates assigning users only the minimal rights necessary to complete work duties?",
    "options": [
      {
        "id": "A",
        "text": "Principle of Least Privilege"
      },
      {
        "id": "B",
        "text": "Maximal Memory Allocation"
      },
      {
        "id": "C",
        "text": "Disabling System Logging"
      },
      {
        "id": "D",
        "text": "Overclocking Processing Units"
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems / Security",
    "difficulty": "Easy",
    "explanation": "Least privilege grants only the permissions required to perform assigned duties.",
    "marks": 1,
    "optionExplanations": {
      "A": "Least privilege grants only the permissions required to perform assigned duties.",
      "Principle of Least Privilege": "Least privilege grants only the permissions required to perform assigned duties.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Maximal Memory Allocation": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Disabling System Logging": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Overclocking Processing Units": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  }
];

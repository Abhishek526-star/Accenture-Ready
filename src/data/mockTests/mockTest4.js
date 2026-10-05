// src/data/mockTests/mockTest4.js
// Technical MCQ Practice Set 4
// Total Questions: 45 | Marks: 45 (+1 Mark/Q) | Duration: 45 Mins

export const mockTest4 = [
  {
    "id": "tech-mcq-s4-q01",
    "number": 1,
    "question": "During a peak flash sale, a Site Reliability Engineer notices that microservice instances are abruptly crashing with Out-Of-Memory (OOM) errors, but CPU utilization remains low. The auto-scaler fails to provision additional instances because scaling metrics are currently bound to average CPU thresholds. What initial investigative action should the engineer execute to identify the root operational bottleneck?",
    "options": [
      {
        "id": "A",
        "text": "Double the CPU limit allocated inside the container definition file."
      },
      {
        "id": "B",
        "text": "Examine application heap usage logs and trace memory allocation profiles."
      },
      {
        "id": "C",
        "text": "Immediately force a rolling restart across all cluster deployment nodes."
      },
      {
        "id": "D",
        "text": "Reduce the minimum instance count in the target group configurations."
      }
    ],
    "correctAnswer": "B",
    "topic": "SRE / Observability",
    "difficulty": "Medium",
    "explanation": "Profiling heap usage and allocation patterns is the appropriate first investigation for OOM failures when CPU utilization is low.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Increasing CPU does not diagnose a memory-allocation bottleneck.",
      "Double the CPU limit allocated inside the container definition file.": "Incorrect. Increasing CPU does not diagnose a memory-allocation bottleneck.",
      "B": "Correct. Heap/allocation profiling can expose leaks and inefficient memory sizing.",
      "Examine application heap usage logs and trace memory allocation profiles.": "Correct. Heap/allocation profiling can expose leaks and inefficient memory sizing.",
      "C": "Incorrect. A restart may temporarily clear memory but does not identify the root cause.",
      "Immediately force a rolling restart across all cluster deployment nodes.": "Incorrect. A restart may temporarily clear memory but does not identify the root cause.",
      "D": "Incorrect. Reducing minimum instances can worsen capacity during a flash sale.",
      "Reduce the minimum instance count in the target group configurations.": "Incorrect. Reducing minimum instances can worsen capacity during a flash sale."
    }
  },
  {
    "id": "tech-mcq-s4-q02",
    "number": 2,
    "question": "Consider two concurrent transactions executing against a bank account balance. Which concurrency anomaly is Transaction A experiencing?",
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
        "text": "Lost Update"
      },
      {
        "id": "D",
        "text": "Phantom Read"
      }
    ],
    "correctAnswer": "B",
    "topic": "DBMS / Concurrency",
    "difficulty": "Medium",
    "explanation": "Transaction A observes a changed value for the same account row after Transaction B commits, which is a non-repeatable read.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A dirty read occurs when a transaction reads uncommitted changes. Here, Transaction B successfully committed before Transaction A's second read.",
      "Dirty Read": "Incorrect. A dirty read occurs when a transaction reads uncommitted changes. Here, Transaction B successfully committed before Transaction A's second read.",
      "B": "Correct. Non-repeatable read occurs when a transaction reads the same row twice and observes different values because another transaction committed an update in between.",
      "Non-repeatable Read": "Correct. Non-repeatable read occurs when a transaction reads the same row twice and observes different values because another transaction committed an update in between.",
      "C": "Incorrect. A lost update occurs when two concurrent transactions overwrite each other's updates without isolation.",
      "Lost Update": "Incorrect. A lost update occurs when two concurrent transactions overwrite each other's updates without isolation.",
      "D": "Incorrect. A phantom read occurs when a query with a range condition (e.g. WHERE Age > 20) retrieves different sets of rows due to another transaction inserting/deleting rows.",
      "Phantom Read": "Incorrect. A phantom read occurs when a query with a range condition (e.g. WHERE Age > 20) retrieves different sets of rows due to another transaction inserting/deleting rows."
    },
    "code": "-- Initial Balance = 1000 for AccountID = 501\n\nTransaction A: SELECT Balance FROM Accounts WHERE AccountID = 501; -- Reads 1000\nTransaction B: UPDATE Accounts SET Balance = Balance - 200 WHERE AccountID = 501; COMMIT;\nTransaction A: SELECT Balance FROM Accounts WHERE AccountID = 501; -- Reads 800 within same transaction"
  },
  {
    "id": "tech-mcq-s4-q03",
    "number": 3,
    "question": "Assume a healthcare firm designs an Electronic Health Record (EHR) database. Patient records include SSN, EmailAddress, MedicalRecordID, and ZipCode. Patients frequently update their EmailAddress, and SSN contains sensitive privacy constraints. Which column represents the most appropriate candidate to serve as the immutable Primary Key?",
    "options": [
      {
        "id": "A",
        "text": "EmailAddress"
      },
      {
        "id": "B",
        "text": "SSN"
      },
      {
        "id": "C",
        "text": "MedicalRecordID"
      },
      {
        "id": "D",
        "text": "ZipCode"
      }
    ],
    "correctAnswer": "C",
    "topic": "DBMS / Primary Keys",
    "difficulty": "Easy",
    "explanation": "MedicalRecordID is described as unique, immutable, system-generated, and safer than mutable or sensitive personal attributes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Email addresses may change, be abandoned, or shared among family members.",
      "EmailAddress": "Incorrect. Email addresses may change, be abandoned, or shared among family members.",
      "B": "Incorrect. SSNs carry severe compliance and privacy risks (HIPAA/PII) and foreign patients may not possess one.",
      "SSN": "Incorrect. SSNs carry severe compliance and privacy risks (HIPAA/PII) and foreign patients may not possess one.",
      "C": "Correct. MedicalRecordID (MRN) is a surrogate primary key specifically designed to be unique, immutable, and strictly bound to one patient.",
      "MedicalRecordID": "Correct. MedicalRecordID (MRN) is a surrogate primary key specifically designed to be unique, immutable, and strictly bound to one patient.",
      "D": "Incorrect. Zip codes are geographical identifiers shared by thousands of residents.",
      "ZipCode": "Incorrect. Zip codes are geographical identifiers shared by thousands of residents."
    }
  },
  {
    "id": "tech-mcq-s4-q04",
    "number": 4,
    "question": "A software delivery team automates code security audits and static application security testing (SAST). They want to enforce a quality gate where builds containing high-severity vulnerabilities are blocked before containerization occurs. Which component of the modern DevOps ecosystem enforces this pre-compilation rule checks and prevents tainted source code progression?",
    "options": [
      {
        "id": "A",
        "text": "Continuous Delivery Pipeline Quality Gate"
      },
      {
        "id": "B",
        "text": "Infrastructure as Code Template Manager"
      },
      {
        "id": "C",
        "text": "Container Runtime Daemon"
      },
      {
        "id": "D",
        "text": "Centralized Log Aggregator"
      }
    ],
    "correctAnswer": "A",
    "topic": "DevOps / CI-CD",
    "difficulty": "Medium",
    "explanation": "A CI/CD quality gate can enforce SAST severity thresholds and stop vulnerable builds before they progress.",
    "marks": 1,
    "optionExplanations": {
      "A": "A CI/CD quality gate can enforce SAST severity thresholds and stop vulnerable builds before they progress.",
      "Continuous Delivery Pipeline Quality Gate": "A CI/CD quality gate can enforce SAST severity thresholds and stop vulnerable builds before they progress.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Infrastructure as Code Template Manager": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Container Runtime Daemon": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Centralized Log Aggregator": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q05",
    "number": 5,
    "question": "An engineering team is modernizing a monolithic application into REST microservices. They want to update response schemas for specific endpoints without requiring third-party client integrations to immediately alter their requests. Which API evolution strategy allows seamless backwards compatibility while deploying structural updates?",
    "options": [
      {
        "id": "A",
        "text": "Deprecate all previous endpoints immediately upon release of new fields."
      },
      {
        "id": "B",
        "text": "Implement Content Negotiation via Accept headers while supporting legacy endpoints."
      },
      {
        "id": "C",
        "text": "Change variable data types in-place on existing Production routes."
      },
      {
        "id": "D",
        "text": "Force client applications to send version values inside query body objects."
      }
    ],
    "correctAnswer": "B",
    "topic": "API Design / Versioning",
    "difficulty": "Medium",
    "explanation": "Content negotiation can allow response representations to evolve while legacy clients continue to use supported representations.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Immediately deprecating previous endpoints breaks existing third-party integrations and active mobile client versions.",
      "Deprecate all previous endpoints immediately upon release of new fields.": "Incorrect. Immediately deprecating previous endpoints breaks existing third-party integrations and active mobile client versions.",
      "B": "Correct. Content negotiation (via Accept/Content-Type headers) or dedicated URI versions allow seamless evolution without breaking legacy clients.",
      "Implement Content Negotiation via Accept headers while supporting legacy endpoints.": "Correct. Content negotiation (via Accept/Content-Type headers) or dedicated URI versions allow seamless evolution without breaking legacy clients.",
      "C": "Incorrect. Changing variable types in-place on existing routes breaks JSON parsing in deployed clients.",
      "Change variable data types in-place on existing Production routes.": "Incorrect. Changing variable types in-place on existing routes breaks JSON parsing in deployed clients.",
      "D": "Incorrect. Forcing version values into request bodies violates REST design and complicates GET requests that have no body.",
      "Force client applications to send version values inside query body objects.": "Incorrect. Forcing version values into request bodies violates REST design and complicates GET requests that have no body."
    }
  },
  {
    "id": "tech-mcq-s4-q06",
    "number": 6,
    "question": "A mobile application attempts to publish data to an administrative endpoint, but receives an HTTP status code indicating that the user possesses valid authentication credentials but lacks elevated administrative role permissions. Which HTTP status code was returned?",
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
        "text": "405 Method Not Allowed"
      },
      {
        "id": "D",
        "text": "409 Conflict"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTTP / Security",
    "difficulty": "Easy",
    "explanation": "HTTP 403 indicates that the client is authenticated but does not have sufficient permission for the resource.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "401 Unauthorized": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "HTTP 403 indicates that the client is authenticated but does not have sufficient permission for the resource.",
      "403 Forbidden": "HTTP 403 indicates that the client is authenticated but does not have sufficient permission for the resource.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "405 Method Not Allowed": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "409 Conflict": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s4-q07",
    "number": 7,
    "question": "A payment gateway software module features two methods named executePayment inside the same billing class. One method accepts an integer amount and account ID, while the second accepts a double amount, account ID, and currency token. Which Object-Oriented Programming capability is demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Static polymorphism (Method Overloading)"
      },
      {
        "id": "B",
        "text": "Dynamic polymorphism (Method Overriding)"
      },
      {
        "id": "C",
        "text": "Data Abstraction"
      },
      {
        "id": "D",
        "text": "Runtime Encapsulation"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Polymorphism",
    "difficulty": "Easy",
    "explanation": "The same method name has different parameter signatures in one class, demonstrating method overloading and static/compile-time polymorphism.",
    "marks": 1,
    "code": "public class PaymentProcessor {\n    public boolean executePayment(int amount, String accountId) {\n        return true;\n    }\n\n    public boolean executePayment(double amount, String accountId, String currency) {\n        return true;\n    }\n}",
    "optionExplanations": {
      "A": "The same method name has different parameter signatures in one class, demonstrating method overloading and static/compile-time polymorphism.",
      "Static polymorphism (Method Overloading)": "The same method name has different parameter signatures in one class, demonstrating method overloading and static/compile-time polymorphism.",
      "B": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime.",
      "Dynamic polymorphism (Method Overriding)": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Data Abstraction": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Runtime Encapsulation": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s4-q08",
    "number": 8,
    "question": "Analyze the Java program structure below. A developer creates a reference variable vehicle referencing an instance of ElectricCar. Which option describes the OOP relationship between vehicle and ElectricCar?",
    "options": [
      {
        "id": "A",
        "text": "Vehicle is the instance and ElectricCar is the class blueprint."
      },
      {
        "id": "B",
        "text": "vehicle is an object reference to an instance of the subclass ElectricCar."
      },
      {
        "id": "C",
        "text": "ElectricCar and Vehicle are independent instances of main."
      },
      {
        "id": "D",
        "text": "vehicle is a static subclass of ElectricCar."
      }
    ],
    "correctAnswer": "B",
    "topic": "Java / OOP / Inheritance",
    "difficulty": "Easy",
    "explanation": "new ElectricCar() creates the subclass object, while vehicle is a Vehicle reference pointing to that object.",
    "marks": 1,
    "code": "class Vehicle {\n    protected int speed;\n}\n\nclass ElectricCar extends Vehicle {\n    private int batteryCapacity;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle vehicle = new ElectricCar();\n    }\n}",
    "optionExplanations": {
      "A": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Vehicle is the instance and ElectricCar is the class blueprint.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "B": "new ElectricCar() creates the subclass object, while vehicle is a Vehicle reference pointing to that object.",
      "vehicle is an object reference to an instance of the subclass ElectricCar.": "new ElectricCar() creates the subclass object, while vehicle is a Vehicle reference pointing to that object.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "ElectricCar and Vehicle are independent instances of main.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "vehicle is a static subclass of ElectricCar.": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s4-q09",
    "number": 9,
    "question": "An organization deploys an Intrusion Prevention System (IPS) inline with their main core firewall. What is a primary operational trade-off of maintaining inline deep packet inspection across all corporate traffic?",
    "options": [
      {
        "id": "A",
        "text": "Complete loss of active session tracking."
      },
      {
        "id": "B",
        "text": "Increased network latency and elevated hardware processing overhead."
      },
      {
        "id": "C",
        "text": "Inability to block malicious IP signatures."
      },
      {
        "id": "D",
        "text": "Automatic bypass of user access authentication controls."
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security / IPS",
    "difficulty": "Medium",
    "explanation": "Inline deep packet inspection adds processing work in the forwarding path, increasing latency and hardware requirements.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Complete loss of active session tracking.": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Inline deep packet inspection adds processing work in the forwarding path, increasing latency and hardware requirements.",
      "Increased network latency and elevated hardware processing overhead.": "Inline deep packet inspection adds processing work in the forwarding path, increasing latency and hardware requirements.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Inability to block malicious IP signatures.": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Automatic bypass of user access authentication controls.": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q10",
    "number": 10,
    "question": "Which Java class setup correctly demonstrates class inheritance and dynamic method overriding for sound emission?",
    "options": [
      {
        "id": "A",
        "text": "class Vehicle {\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\n\nclass Car extends Vehicle {\n    @Override\n    void start() {\n        System.out.println(\"Car started\");\n    }\n}"
      },
      {
        "id": "B",
        "text": "class Vehicle {\n    void start() {}\n}\n\nclass Car implements Vehicle {\n    void start() {}\n}"
      },
      {
        "id": "C",
        "text": "class Vehicle {\n    void extends start() {}\n}\n\nclass Car { Vehicle.start(); }"
      },
      {
        "id": "D",
        "text": "class Vehicle {\n    void start() {}\n}\n\nclass Car inherits Vehicle {\n    void start() {}\n}"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Inheritance",
    "difficulty": "Easy",
    "explanation": "Car extends Vehicle and overrides start(), demonstrating inheritance and dynamic method overriding.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. 'class Car extends Vehicle' establishes class inheritance, and '@Override void start()' demonstrates dynamic method overriding.",
      "class Vehicle {\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\n\nclass Car extends Vehicle {\n    @Override\n    void start() {\n        System.out.println(\"Car started\");\n    }\n}": "Correct. 'class Car extends Vehicle' establishes class inheritance, and '@Override void start()' demonstrates dynamic method overriding.",
      "B": "Incorrect. 'implements' is used to implement Java interfaces, not to inherit from classes.",
      "class Vehicle {\n    void start() {}\n}\n\nclass Car implements Vehicle {\n    void start() {}\n}": "Incorrect. 'implements' is used to implement Java interfaces, not to inherit from classes.",
      "C": "Incorrect. 'void extends start()' is invalid syntax; methods cannot extend keywords.",
      "class Vehicle {\n    void extends start() {}\n}\n\nclass Car { Vehicle.start(); }": "Incorrect. 'void extends start()' is invalid syntax; methods cannot extend keywords.",
      "D": "Incorrect. Java does not have an 'inherits' keyword.",
      "class Vehicle {\n    void start() {}\n}\n\nclass Car inherits Vehicle {\n    void start() {}\n}": "Incorrect. Java does not have an 'inherits' keyword."
    }
  },
  {
    "id": "tech-mcq-s4-q11",
    "number": 11,
    "question": "Analyze the requirement: A web designer needs to configure a CSS rule for a notification box such that only the top-right and bottom-left corners are rounded by 15 pixels, while other corners remain square. Which CSS rule achieves this output?",
    "options": [
      {
        "id": "A",
        "text": "border-radius: 15px 15px 15px 15px;"
      },
      {
        "id": "B",
        "text": "border-radius: 0 15px 0 15px;"
      },
      {
        "id": "C",
        "text": "border-radius: 15px 0 15px 0;"
      },
      {
        "id": "D",
        "text": "border-radius: 0 0 15px 15px;"
      }
    ],
    "correctAnswer": "B",
    "topic": "CSS",
    "difficulty": "Easy",
    "explanation": "The four-value order is top-left, top-right, bottom-right, bottom-left, so this rounds only top-right and bottom-left.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A uniform 15px radius rounds all four corners identically.",
      "border-radius: 15px 15px 15px 15px;": "Incorrect. A uniform 15px radius rounds all four corners identically.",
      "B": "Correct. In four-value syntax (top-left, top-right, bottom-right, bottom-left), '0 15px 0 15px' rounds only the top-right and bottom-left corners.",
      "border-radius: 0 15px 0 15px;": "Correct. In four-value syntax (top-left, top-right, bottom-right, bottom-left), '0 15px 0 15px' rounds only the top-right and bottom-left corners.",
      "C": "Incorrect. '15px 0 15px 0' rounds the top-left and bottom-right corners.",
      "border-radius: 15px 0 15px 0;": "Incorrect. '15px 0 15px 0' rounds the top-left and bottom-right corners.",
      "D": "Incorrect. '0 0 15px 15px' rounds only the bottom corners.",
      "border-radius: 0 0 15px 15px;": "Incorrect. '0 0 15px 15px' rounds only the bottom corners."
    }
  },
  {
    "id": "tech-mcq-s4-q12",
    "number": 12,
    "question": "A frontend developer wants to embed an interactive audio element on a web page that natively displays play/pause controls without requiring custom JavaScript libraries. Which HTML5 tag provides this built-in media functionality?",
    "options": [
      {
        "id": "A",
        "text": "<audio controls>"
      },
      {
        "id": "B",
        "text": "<sound src=\"autoplay\">"
      },
      {
        "id": "C",
        "text": "<media type=\"audio\">"
      },
      {
        "id": "D",
        "text": "<music play>"
      }
    ],
    "correctAnswer": "A",
    "topic": "HTML5",
    "difficulty": "Easy",
    "explanation": "The HTML5 audio element with controls provides native play/pause and other media controls.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. The semantic HTML5 <audio controls> tag embeds audio content and displays native playback controls (play, pause, volume).",
      "<audio controls>": "Correct. The semantic HTML5 <audio controls> tag embeds audio content and displays native playback controls (play, pause, volume).",
      "B": "Incorrect. <sound> is not a valid HTML5 specification element.",
      "<sound src=\"autoplay\">": "Incorrect. <sound> is not a valid HTML5 specification element.",
      "C": "Incorrect. <media> is not a recognized standalone HTML5 playback element.",
      "<media type=\"audio\">": "Incorrect. <media> is not a recognized standalone HTML5 playback element.",
      "D": "Incorrect. <music> is not a valid HTML5 element.",
      "<music play>": "Incorrect. <music> is not a valid HTML5 element."
    }
  },
  {
    "id": "tech-mcq-s4-q13",
    "number": 13,
    "question": "Evaluate the JavaScript array execution code below. What is rendered to the DOM upon script execution?",
    "options": [
      {
        "id": "A",
        "text": "10, 20, 30, 40"
      },
      {
        "id": "B",
        "text": "20, 40, 60, 80"
      },
      {
        "id": "C",
        "text": "200"
      },
      {
        "id": "D",
        "text": "NaN"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript / Array Methods",
    "difficulty": "Easy",
    "explanation": "map() applies evaluateScore to every element and doubles each value.",
    "marks": 1,
    "code": "var scores = [10, 20, 30, 40];\n\nfunction evaluateScore(val) {\n    return val * 2;\n}\n\ndocument.write(scores.map(evaluateScore));",
    "optionExplanations": {
      "200": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "A": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "10, 20, 30, 40": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "B": "map() applies evaluateScore to every element and doubles each value.",
      "20, 40, 60, 80": "map() applies evaluateScore to every element and doubles each value.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "NaN": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s4-q14",
    "number": 14,
    "question": "What output string is produced when a user triggers the JavaScript function embedded inside the HTML button markup below?",
    "options": [
      {
        "id": "A",
        "text": "System Ready"
      },
      {
        "id": "B",
        "text": "true"
      },
      {
        "id": "C",
        "text": "alert(\"System Ready\");"
      },
      {
        "id": "D",
        "text": "undefined"
      }
    ],
    "correctAnswer": "C",
    "topic": "JavaScript / DOM",
    "difficulty": "Easy",
    "explanation": "getAttribute('onclick') returns the exact text stored in the onclick attribute.",
    "marks": 1,
    "code": "<button id=\"btn\" onclick=\"alert('System Ready');\">Status</button>\n<script>\n    var element = document.getElementById(\"btn\");\n    document.write(element.getAttribute(\"onclick\"));\n</script>",
    "optionExplanations": {
      "A": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "System Ready": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "true": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "getAttribute('onclick') returns the exact text stored in the onclick attribute.",
      "alert(\"System Ready\");": "getAttribute('onclick') returns the exact text stored in the onclick attribute.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "undefined": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "tech-mcq-s4-q15",
    "number": 15,
    "question": "A network architect isolates finance server workloads from guest enterprise traffic by configuring VLANs and access control lists (ACLs). What is the primary security goal of establishing network micro-segmentation?",
    "options": [
      {
        "id": "A",
        "text": "Increasing maximum wireless transmission range"
      },
      {
        "id": "B",
        "text": "Restricting lateral movement of unauthorized attackers during a breach"
      },
      {
        "id": "C",
        "text": "Eliminating standard packet serialization latency"
      },
      {
        "id": "D",
        "text": "Eliminating the need for TLS/SSL certificate encryption on APIs"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "Micro-segmentation isolates workloads and limits lateral movement after a compromise.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Increasing maximum wireless transmission range": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Micro-segmentation isolates workloads and limits lateral movement after a compromise.",
      "Restricting lateral movement of unauthorized attackers during a breach": "Micro-segmentation isolates workloads and limits lateral movement after a compromise.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Eliminating standard packet serialization latency": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Eliminating the need for TLS/SSL certificate encryption on APIs": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q16",
    "number": 16,
    "question": "A security architect configures an IPsec VPN tunnel between two remote data centers. Which IPsec sub-protocol must be selected if the tunnel must guarantee data encryption, authentication, and packet integrity across untrusted public backbones?",
    "options": [
      {
        "id": "A",
        "text": "Authentication Header (AH)"
      },
      {
        "id": "B",
        "text": "Point-to-Point Tunneling Protocol (PPTP)"
      },
      {
        "id": "C",
        "text": "Encapsulating Security Payload (ESP)"
      },
      {
        "id": "D",
        "text": "Border Gateway Protocol (BGP)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / IPsec",
    "difficulty": "Medium",
    "explanation": "ESP provides confidentiality through encryption and supports authentication and integrity for IPsec traffic.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Authentication Header (AH)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Point-to-Point Tunneling Protocol (PPTP)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "ESP provides confidentiality through encryption and supports authentication and integrity for IPsec traffic.",
      "Encapsulating Security Payload (ESP)": "ESP provides confidentiality through encryption and supports authentication and integrity for IPsec traffic.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Border Gateway Protocol (BGP)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q17",
    "number": 17,
    "question": "An engineer working remotely from a public airport network needs to encrypt all network traffic originating from their laptop back to corporate office servers securely. Which technology handles this user-to-network setup?",
    "options": [
      {
        "id": "A",
        "text": "Remote-access VPN"
      },
      {
        "id": "B",
        "text": "Site-to-site VPN"
      },
      {
        "id": "C",
        "text": "ExpressRoute Circuit"
      },
      {
        "id": "D",
        "text": "Static Network Address Translation"
      }
    ],
    "correctAnswer": "A",
    "topic": "Networking / VPN",
    "difficulty": "Easy",
    "explanation": "A remote-access VPN connects an individual user's device securely to an internal corporate network.",
    "marks": 1,
    "optionExplanations": {
      "A": "A remote-access VPN connects an individual user's device securely to an internal corporate network.",
      "Remote-access VPN": "A remote-access VPN connects an individual user's device securely to an internal corporate network.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Site-to-site VPN": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "ExpressRoute Circuit": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "Static Network Address Translation": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data."
    }
  },
  {
    "id": "tech-mcq-s4-q18",
    "number": 18,
    "question": "A real-time online multiplayer game requires minimal transmission delays for frequent player coordinate updates. Missing occasional positioning packets is acceptable, but retransmission delays are prohibitive. Which Transport Layer protocol is best suited?",
    "options": [
      {
        "id": "A",
        "text": "TCP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "UDP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / Transport Layer",
    "difficulty": "Easy",
    "explanation": "UDP is connectionless and low overhead, making it suitable for real-time applications where occasional packet loss is acceptable.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. TCP introduces connection-establishment and retransmission overhead.",
      "TCP": "Incorrect. TCP introduces connection-establishment and retransmission overhead.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "FTP": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "UDP is connectionless and low overhead, making it suitable for real-time applications where occasional packet loss is acceptable.",
      "UDP": "UDP is connectionless and low overhead, making it suitable for real-time applications where occasional packet loss is acceptable.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "SMTP": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q19",
    "number": 19,
    "question": "During network diagnostics, a system administrator identifies corrupted data payloads arriving at a server. Which layer of the OSI model is responsible for performing end-to-end flow control, segmentation, and checksum error checking?",
    "options": [
      {
        "id": "A",
        "text": "Network Layer"
      },
      {
        "id": "B",
        "text": "Data Link Layer"
      },
      {
        "id": "C",
        "text": "Transport Layer"
      },
      {
        "id": "D",
        "text": "Session Layer"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / OSI",
    "difficulty": "Easy",
    "explanation": "The Transport layer provides end-to-end flow control, segmentation, sequencing, and transport-level error checking.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "Network Layer": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Data Link Layer": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "The Transport layer provides end-to-end flow control, segmentation, sequencing, and transport-level error checking.",
      "Transport Layer": "The Transport layer provides end-to-end flow control, segmentation, sequencing, and transport-level error checking.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Session Layer": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q20",
    "number": 20,
    "question": "A financial service requires a network appliance that monitors incoming TCP handshakes, actively inspects session state flags (SYN, ESTABLISHED), and drops packets that do not belong to an active, legitimate communication session. What type of firewall is required?",
    "options": [
      {
        "id": "A",
        "text": "Stateful Packet Inspection Firewall"
      },
      {
        "id": "B",
        "text": "Stateless Packet Filter"
      },
      {
        "id": "C",
        "text": "Circuit-Level Proxy without logging"
      },
      {
        "id": "D",
        "text": "Physical Layer Repeater"
      }
    ],
    "correctAnswer": "A",
    "topic": "Network Security / Firewalls",
    "difficulty": "Easy",
    "explanation": "Stateful firewalls track active TCP session state and reject packets that do not belong to legitimate connections.",
    "marks": 1,
    "optionExplanations": {
      "A": "Stateful firewalls track active TCP session state and reject packets that do not belong to legitimate connections.",
      "Stateful Packet Inspection Firewall": "Stateful firewalls track active TCP session state and reject packets that do not belong to legitimate connections.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Stateless Packet Filter": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Circuit-Level Proxy without logging": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Physical Layer Repeater": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q21",
    "number": 21,
    "question": "A enterprise wants to subscribe to a cloud vendor that delivers ready-to-use, web-based Customer Relationship Management (CRM) software without requiring local installation or server provisioning. Which cloud service deployment model applies?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "D",
        "text": "Function as a Service (FaaS)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "SaaS provides ready-to-use hosted applications such as CRM software directly to end users.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Infrastructure as a Service (IaaS)": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Platform as a Service (PaaS)": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "SaaS provides ready-to-use hosted applications such as CRM software directly to end users.",
      "Software as a Service (SaaS)": "SaaS provides ready-to-use hosted applications such as CRM software directly to end users.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Function as a Service (FaaS)": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q22",
    "number": 22,
    "question": "An enterprise is running legacy mainframe databases and modern cloud infrastructure. They need an architectural layer that maps and queries datasets across both environments seamlessly via unified API schemas without copying data to a central lake. Which layer achieves this?",
    "options": [
      {
        "id": "A",
        "text": "Physical Data Migration Service"
      },
      {
        "id": "B",
        "text": "Replication Storage Middleware"
      },
      {
        "id": "C",
        "text": "Data Virtualization / Abstraction Layer"
      },
      {
        "id": "D",
        "text": "Local File Cache Directory"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud / Data Integration",
    "difficulty": "Medium",
    "explanation": "A data virtualization layer presents a unified logical view and queries disparate sources without requiring central physical copying.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Physical Data Migration Service": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Replication Storage Middleware": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "A data virtualization layer presents a unified logical view and queries disparate sources without requiring central physical copying.",
      "Data Virtualization / Abstraction Layer": "A data virtualization layer presents a unified logical view and queries disparate sources without requiring central physical copying.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Local File Cache Directory": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q23",
    "number": 23,
    "question": "A defense department contractor must process classified data under strict regulatory mandates requiring physical host isolation and dedicated, non-shared hardware infrastructure. Which cloud deployment model must be deployed?",
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
        "text": "Multi-tenant Cloud"
      },
      {
        "id": "D",
        "text": "Open Community Cloud"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "The requirement for dedicated, isolated infrastructure and strict compliance aligns with a private cloud deployment.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Public Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "The requirement for dedicated, isolated infrastructure and strict compliance aligns with a private cloud deployment.",
      "Private Cloud": "The requirement for dedicated, isolated infrastructure and strict compliance aligns with a private cloud deployment.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Multi-tenant Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Open Community Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q24",
    "number": 24,
    "question": "What underlying cloud technology abstracts bare-metal computing hardware into virtual CPU cores and virtual RAM allocations running isolated guest operating systems?",
    "options": [
      {
        "id": "A",
        "text": "Hypervisor-based Virtualization"
      },
      {
        "id": "B",
        "text": "Static Compiler Linking"
      },
      {
        "id": "C",
        "text": "Network Load Balancing"
      },
      {
        "id": "D",
        "text": "Block Storage Mirroring"
      }
    ],
    "correctAnswer": "A",
    "topic": "Cloud / Virtualization",
    "difficulty": "Easy",
    "explanation": "A hypervisor abstracts physical CPU and memory resources into virtual resources for isolated guest operating systems.",
    "marks": 1,
    "optionExplanations": {
      "A": "A hypervisor abstracts physical CPU and memory resources into virtual resources for isolated guest operating systems.",
      "Hypervisor-based Virtualization": "A hypervisor abstracts physical CPU and memory resources into virtual resources for isolated guest operating systems.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Static Compiler Linking": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Network Load Balancing": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Block Storage Mirroring": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q25",
    "number": 25,
    "question": "A cloud customer wants complete authority to configure custom operating system kernels, configure IP tables, and install custom storage drivers, while delegating physical datacenter rack management to a provider. Which model is required?",
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
        "text": "Serverless Application Hosting"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "IaaS provides administrative control over guest operating systems, networking, and storage while the provider manages physical infrastructure.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "SaaS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "PaaS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "IaaS provides administrative control over guest operating systems, networking, and storage while the provider manages physical infrastructure.",
      "IaaS": "IaaS provides administrative control over guest operating systems, networking, and storage while the provider manages physical infrastructure.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Serverless Application Hosting": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q26",
    "number": 26,
    "question": "A cloud storage framework pools physical disk drives across geographically dispersed datacenters into unified virtual volumes. How does this resource pooling mechanism provide operational elasticity?",
    "options": [
      {
        "id": "A",
        "text": "By eliminating network routing protocols."
      },
      {
        "id": "B",
        "text": "By guaranteeing fixed hardware capacity that cannot be scaled."
      },
      {
        "id": "C",
        "text": "By allowing dynamic storage allocation on-demand as consumer traffic shifts."
      },
      {
        "id": "D",
        "text": "By restricting access to local hardware buses."
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing / Resource Pooling",
    "difficulty": "Medium",
    "explanation": "Resource pooling aggregates capacity so storage can be allocated and scaled dynamically with workload demand.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By eliminating network routing protocols.": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By guaranteeing fixed hardware capacity that cannot be scaled.": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Resource pooling aggregates capacity so storage can be allocated and scaled dynamically with workload demand.",
      "By allowing dynamic storage allocation on-demand as consumer traffic shifts.": "Resource pooling aggregates capacity so storage can be allocated and scaled dynamically with workload demand.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By restricting access to local hardware buses.": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s4-q27",
    "number": 27,
    "question": "An IoT edge node uses a custom substitution cipher algorithm to transmit sensor readings. During an audit, engineers discover that two distinct plain-text characters (E and T) are mapped to the exact same cipher character (X) due to an offset modulo error. What operational failure occurs during decryption?",
    "options": [
      {
        "id": "A",
        "text": "Decryption performance degrades linearly."
      },
      {
        "id": "B",
        "text": "Information loss occurs because the cipher mapping contains key collisions, preventing deterministic reverse lookup."
      },
      {
        "id": "C",
        "text": "The transmission channel suffers physical bit flipping."
      },
      {
        "id": "D",
        "text": "The cipher key automatically resets to zero."
      }
    ],
    "correctAnswer": "B",
    "topic": "Cryptography",
    "difficulty": "Medium",
    "explanation": "Duplicate ciphertext mappings make reverse decryption ambiguous and can permanently lose the original plaintext character.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Decryption running time does not change, but decrypted data is permanently corrupt.",
      "Decryption performance degrades linearly.": "Incorrect. Decryption running time does not change, but decrypted data is permanently corrupt.",
      "B": "Correct. Information loss occurs because many-to-one character mappings (key collisions) destroy the mathematical injectivity required for lossless decryption.",
      "Information loss occurs because the cipher mapping contains key collisions, preventing deterministic reverse lookup.": "Correct. Information loss occurs because many-to-one character mappings (key collisions) destroy the mathematical injectivity required for lossless decryption.",
      "C": "Incorrect. Physical channel transmission errors are unrelated to algorithmic cipher design.",
      "The transmission channel suffers physical bit flipping.": "Incorrect. Physical channel transmission errors are unrelated to algorithmic cipher design.",
      "D": "Incorrect. Cipher keys do not automatically reinitialize to zero during mathematical mappings.",
      "The cipher key automatically resets to zero.": "Incorrect. Cipher keys do not automatically reinitialize to zero during mathematical mappings."
    }
  },
  {
    "id": "tech-mcq-s4-q28",
    "number": 28,
    "question": "An organization deploys 802.1X wireless authentication across its offices. They want clients to authenticate using usernames and passwords, wrapped inside a secure TLS tunnel created using only a server-side digital certificate. Which authentication framework meets this criteria?",
    "options": [
      {
        "id": "A",
        "text": "EAP-MD5"
      },
      {
        "id": "B",
        "text": "PEAP (Protected Extensible Authentication Protocol)"
      },
      {
        "id": "C",
        "text": "EAP-TLS with dual certificates"
      },
      {
        "id": "D",
        "text": "PAP (Password Authentication Protocol)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security / EAP",
    "difficulty": "Medium",
    "explanation": "PEAP uses a server-side certificate to establish a protected TLS tunnel and can carry username/password authentication inside it.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "EAP-MD5": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "PEAP uses a server-side certificate to establish a protected TLS tunnel and can carry username/password authentication inside it.",
      "PEAP (Protected Extensible Authentication Protocol)": "PEAP uses a server-side certificate to establish a protected TLS tunnel and can carry username/password authentication inside it.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "EAP-TLS with dual certificates": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "PAP (Password Authentication Protocol)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s4-q29",
    "number": 29,
    "question": "Trace the execution of the pseudocode snippet below for inputs: a = 2, b = 4, c = 5. What is the returned output value?",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Medium",
    "explanation": "Both comparisons are false, so c becomes 2+4=6 and the function returns 2+4+6=12.",
    "marks": 1,
    "code": "Integer funn(Integer a, Integer b, Integer c)\n\nif((a + c) > (c + a))\n    a = (a + b) * b\n\nif((a + b + c) < (b + c + a))\n    c = (c + a) + b\nElse\n    c = a + b\nEnd if\n\nreturn a + b + c",
    "optionExplanations": {
      "11": "Incorrect. The first comparison is 7>7, which is false, and the second is 11<11, also false.",
      "12": "Correct. c becomes 6, so the return value is 12.",
      "15": "Incorrect. The calculated return value is 12.",
      "22": "Incorrect. The calculated return value is 12.",
      "A": "Incorrect. The first comparison is 7>7, which is false, and the second is 11<11, also false.",
      "B": "Correct. c becomes 6, so the return value is 12.",
      "C": "Incorrect. The calculated return value is 12.",
      "D": "Incorrect. The calculated return value is 12."
    }
  },
  {
    "id": "tech-mcq-s4-q30",
    "number": 30,
    "question": "Analyze the pseudocode below. Determine the final value printed for p + q + r.",
    "options": [
      {
        "id": "A",
        "text": "38"
      },
      {
        "id": "B",
        "text": "41"
      },
      {
        "id": "C",
        "text": "45"
      },
      {
        "id": "D",
        "text": "52"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Bitwise Operations",
    "difficulty": "Medium",
    "explanation": "The outer condition is true, q becomes 17, the inner condition is false, r becomes 21, and the final sum is 3+17+21=41.",
    "marks": 1,
    "code": "Integer p, q, r\nSet p = 3, q = 6, r = 5\n\nif((p + r) > (q - p))\n    q = (q + r) + q\n\n    if((2 + q ^ p) < (5 + p + r))\n        p = (q ^ p) ^ r\n    Else\n        r = 4 + q\n    End if\nEnd if\n\nPrint p + q + r",
    "optionExplanations": {
      "38": "Incorrect. The final sum is 41.",
      "41": "Correct. q=17, r=21, p=3, giving 41.",
      "45": "Incorrect. The branch calculations do not produce 45.",
      "52": "Incorrect. The branch calculations do not produce 52.",
      "A": "Incorrect. The final sum is 41.",
      "B": "Correct. q=17, r=21, p=3, giving 41.",
      "C": "Incorrect. The branch calculations do not produce 45.",
      "D": "Incorrect. The branch calculations do not produce 52."
    }
  },
  {
    "id": "tech-mcq-s4-q31",
    "number": 31,
    "question": "Evaluate the pseudocode function below for arguments: a = 1, b = 3, c = 8. What is the printed result?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Easy",
    "explanation": "The outer condition 12<4 is false, so the body is skipped and the original values sum to 1+3+8=12.",
    "marks": 1,
    "code": "Integer funn(Integer a, Integer b, Integer c)\n\nif((a + c + b) < (2 + b - a))\n    a = b + c\n\n    if((b + c + a) < (10 + a))\n        a = (b + a) + b\n    Else\n        b = 7 + a\n    End if\n\n    c = (b + c) + c\nEnd if\n\nPrint a + b + c",
    "optionExplanations": {
      "12": "The outer condition 12<4 is false, so the body is skipped and the original values sum to 1+3+8=12.",
      "18": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "24": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "30": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "The outer condition 12<4 is false, so the body is skipped and the original values sum to 1+3+8=12.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s4-q32",
    "number": 32,
    "question": "Consider the recursive pseudocode function below. What numerical property or value does compute(5) return?",
    "options": [
      {
        "id": "A",
        "text": "Calculates 5 factorial (120)."
      },
      {
        "id": "B",
        "text": "Computes the sum of integers up to 5 (15)."
      },
      {
        "id": "C",
        "text": "Calculates 2 raised to power 5 (32)."
      },
      {
        "id": "D",
        "text": "Returns the 5th Fibonacci sequence term."
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Recursion",
    "difficulty": "Easy",
    "explanation": "The recurrence n * compute(n-1) with base case 1 defines factorial; compute(5)=120.",
    "marks": 1,
    "code": "FUNCTION compute(n):\n    IF n IS 0 OR n IS 1\n        RETURN 1\n    ELSE:\n        RETURN n * compute(n - 1)\n    END IF\nEND FUNCTION compute",
    "optionExplanations": {
      "A": "The recurrence n * compute(n-1) with base case 1 defines factorial; compute(5)=120.",
      "Calculates 5 factorial (120).": "The recurrence n * compute(n-1) with base case 1 defines factorial; compute(5)=120.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Computes the sum of integers up to 5 (15).": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Calculates 2 raised to power 5 (32).": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Returns the 5th Fibonacci sequence term.": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s4-q33",
    "number": 33,
    "question": "What output value is printed upon executing the matrix pseudocode below?",
    "options": [
      {
        "id": "A",
        "text": "5.0"
      },
      {
        "id": "B",
        "text": "7.0"
      },
      {
        "id": "C",
        "text": "10.0"
      },
      {
        "id": "D",
        "text": "12.0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Arrays / Bitwise",
    "difficulty": "Medium",
    "explanation": "The first bitwise expression gives 0, the condition is false, then (5&3)&2 = 0. Final value is 5+0=5.0.",
    "marks": 1,
    "code": "Integer arr[2][2] = {{2, 3}, {1, 5}}\n\narr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]\n\nif ((arr[0][0] - arr[0][1]) > (arr[1][1] + arr[0][1]))\n    arr[0][0] = arr[1][1] + arr[0][0]\nEnd if\n\narr[0][0] = (5 & 3) & arr[0][0]\n\nPrint arr[1][1] + arr[0][0]",
    "optionExplanations": {
      "A": "Correct. The final result is 5+0=5.0.",
      "5.0": "Correct. The final result is 5+0=5.0.",
      "B": "Incorrect. The bitwise operations do not yield 7.",
      "7.0": "Incorrect. The bitwise operations do not yield 7.",
      "C": "Incorrect. The bitwise operations do not yield 10.",
      "10.0": "Incorrect. The bitwise operations do not yield 10.",
      "D": "Incorrect. The bitwise operations do not yield 12.",
      "12.0": "Incorrect. The bitwise operations do not yield 12."
    }
  },
  {
    "id": "tech-mcq-s4-q34",
    "number": 34,
    "question": "Determine the final output value printed after running the loop pseudocode below:",
    "options": [
      {
        "id": "A",
        "text": "31"
      },
      {
        "id": "B",
        "text": "47"
      },
      {
        "id": "C",
        "text": "53"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Loops / Bitwise",
    "difficulty": "Medium",
    "explanation": "Iteration 1 gives b=14 and iteration 2 gives b=26, so a+b=5+26=31.",
    "marks": 1,
    "code": "Integer a, b, c\nSet a = 5, b = 2, c = 0\n\nfor(each c from 1 to 2)\n    b = b + 4\n    b = b + a\n    b = (b & 3) + b\nEnd for\n\nPrint a + b",
    "optionExplanations": {
      "31": "Correct. After two iterations b=26, so a+b=31.",
      "47": "Incorrect. The loop does not produce 47.",
      "53": "Incorrect. The loop does not produce 53.",
      "60": "Incorrect. The loop does not produce 60.",
      "A": "Correct. After two iterations b=26, so a+b=31.",
      "B": "Incorrect. The loop does not produce 47.",
      "C": "Incorrect. The loop does not produce 53.",
      "D": "Incorrect. The loop does not produce 60."
    }
  },
  {
    "id": "tech-mcq-s4-q35",
    "number": 35,
    "question": "Analyze the regular expression pseudocode below. Which string input causes the function to output Valid?",
    "options": [
      {
        "id": "A",
        "text": "AB1234"
      },
      {
        "id": "B",
        "text": "A12345"
      },
      {
        "id": "C",
        "text": "AB12345"
      },
      {
        "id": "D",
        "text": "ab1234"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Regular Expressions",
    "difficulty": "Easy",
    "explanation": "The regex requires exactly two uppercase letters followed by exactly four digits; AB1234 matches.",
    "marks": 1,
    "code": "function validateCode(string code):\n    if code matches \"^[A-Z]{2}[0-9]{4}$\"\n        then print \"Valid\"\n    else\n        then print \"Not Valid\"\n    endif\nend function validateCode",
    "optionExplanations": {
      "A": "The regex requires exactly two uppercase letters followed by exactly four digits; AB1234 matches.",
      "AB1234": "The regex requires exactly two uppercase letters followed by exactly four digits; AB1234 matches.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A12345": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "AB12345": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "ab1234": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s4-q36",
    "number": 36,
    "question": "A candidate writes pseudocode to declare an array named scores containing [85, 90, 78, 92] and print the 3rd element. Which code block uses standard 0-indexed syntax correctly?",
    "options": [
      {
        "id": "A",
        "text": "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[3]"
      },
      {
        "id": "B",
        "text": "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[2]"
      },
      {
        "id": "C",
        "text": "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[1]"
      },
      {
        "id": "D",
        "text": "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[0]"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Arrays",
    "difficulty": "Easy",
    "explanation": "With zero-based indexing, index 2 is the third element, 78.",
    "marks": 1,
    "code": "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[2]",
    "optionExplanations": {
      "A": "Incorrect. Index 3 is the fourth element under zero-based indexing.",
      "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[3]": "Incorrect. Index 3 is the fourth element under zero-based indexing.",
      "B": "Correct. Index 2 is the third element, 78.",
      "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[2]": "Correct. Index 2 is the third element, 78.",
      "C": "Incorrect. Index 1 is the second element, 90.",
      "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[1]": "Incorrect. Index 1 is the second element, 90.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "ARRAY scores[4] = [85, 90, 78, 92]\nPRINT scores[0]": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s4-q37",
    "number": 37,
    "question": "A SQL developer needs to query employee names along with their assigned department titles. The output must include employees who have not been assigned to any department yet. Which SQL JOIN query accomplishes this task?",
    "options": [
      {
        "id": "A",
        "text": "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nINNER JOIN Departments D \n  ON E.DeptID = D.DeptID;"
      },
      {
        "id": "B",
        "text": "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nRIGHT JOIN Departments D \n  ON E.DeptID = D.DeptID;"
      },
      {
        "id": "C",
        "text": "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nLEFT JOIN Departments D \n  ON E.DeptID = D.DeptID;"
      },
      {
        "id": "D",
        "text": "SELECT E.EmpName, D.DeptTitle\nFROM Employees E\nFULL OUTER JOIN Departments D\n  ON E.DeptID = D.DeptID;"
      }
    ],
    "correctAnswer": "C",
    "topic": "SQL / Joins",
    "difficulty": "Easy",
    "explanation": "LEFT JOIN preserves all employees, including those without a matching department.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. INNER JOIN removes employees without matching departments.",
      "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nINNER JOIN Departments D \n  ON E.DeptID = D.DeptID;": "Incorrect. INNER JOIN removes employees without matching departments.",
      "B": "Incorrect. RIGHT JOIN preserves departments rather than all employees.",
      "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nRIGHT JOIN Departments D \n  ON E.DeptID = D.DeptID;": "Incorrect. RIGHT JOIN preserves departments rather than all employees.",
      "C": "Correct. LEFT JOIN preserves every employee and supplies NULL when no department matches.",
      "SELECT E.EmpName, D.DeptTitle \nFROM Employees E \nLEFT JOIN Departments D \n  ON E.DeptID = D.DeptID;": "Correct. LEFT JOIN preserves every employee and supplies NULL when no department matches.",
      "D": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT E.EmpName, D.DeptTitle\nFROM Employees E\nFULL OUTER JOIN Departments D\n  ON E.DeptID = D.DeptID;": "Incorrect. This join condition or syntax does not properly link relational keys."
    }
  },
  {
    "id": "tech-mcq-s4-q38",
    "number": 38,
    "question": "Which SQL query correctly calculates the frequency of the letter e in the EmployeeName column of the Staff table?",
    "options": [
      {
        "id": "A",
        "text": "SELECT EmployeeName, COUNT(EmployeeName) - COUNT(REPLACE(EmployeeName, 'e', '')) \nFROM Staff;"
      },
      {
        "id": "B",
        "text": "SELECT EmployeeName, LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) \nFROM Staff;"
      },
      {
        "id": "C",
        "text": "FROM Staff SELECT EmployeeName, SUM(EmployeeName) - SUM(REPLACE(EmployeeName, 'e', ''));"
      },
      {
        "id": "D",
        "text": "SELECT EmployeeName, SUBSTRING(EmployeeName, 'e') \nFROM Staff;"
      }
    ],
    "correctAnswer": "B",
    "topic": "SQL / String Functions",
    "difficulty": "Medium",
    "explanation": "The length difference before and after removing e equals the number of e characters.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. COUNT(*) counts table rows and cannot calculate character occurrences through subtraction.",
      "SELECT EmployeeName, COUNT(EmployeeName) - COUNT(REPLACE(EmployeeName, 'e', '')) \nFROM Staff;": "Incorrect. COUNT(*) counts table rows and cannot calculate character occurrences through subtraction.",
      "B": "Correct. LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) calculates the exact occurrence count of 'e' per row.",
      "SELECT EmployeeName, LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) \nFROM Staff;": "Correct. LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) calculates the exact occurrence count of 'e' per row.",
      "C": "Incorrect. In SQL, FROM cannot precede SELECT here, and SUM cannot be applied to string columns.",
      "FROM Staff SELECT EmployeeName, SUM(EmployeeName) - SUM(REPLACE(EmployeeName, 'e', ''));": "Incorrect. In SQL, FROM cannot precede SELECT here, and SUM cannot be applied to string columns.",
      "D": "Incorrect. SUBSTRING extracts substrings; it does not count character frequency.",
      "SELECT EmployeeName, SUBSTRING(EmployeeName, 'e') \nFROM Staff;": "Incorrect. SUBSTRING extracts substrings; it does not count character frequency."
    }
  },
  {
    "id": "tech-mcq-s4-q39",
    "number": 39,
    "question": "A high-performance gaming PC experiences severe system stutters during heavy graphics processing. The technician suspects a throughput bottleneck between the CPU, system RAM, and discrete GPU expansion bus. Which bus architecture handles high-speed communication with expansion cards?",
    "options": [
      {
        "id": "A",
        "text": "Peripheral Component Interconnect Express (PCIe)"
      },
      {
        "id": "B",
        "text": "Legacy Industry Standard Architecture (ISA)"
      },
      {
        "id": "C",
        "text": "Serial Advanced Technology Attachment (SATA)"
      },
      {
        "id": "D",
        "text": "Universal Serial Bus (USB) 2.0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Computer Architecture / Buses",
    "difficulty": "Easy",
    "explanation": "PCIe is the high-speed expansion bus used for discrete GPUs and other high-performance devices.",
    "marks": 1,
    "optionExplanations": {
      "A": "PCIe is the high-speed expansion bus used for discrete GPUs and other high-performance devices.",
      "Peripheral Component Interconnect Express (PCIe)": "PCIe is the high-speed expansion bus used for discrete GPUs and other high-performance devices.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Legacy Industry Standard Architecture (ISA)": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Serial Advanced Technology Attachment (SATA)": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Universal Serial Bus (USB) 2.0": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s4-q40",
    "number": 40,
    "question": "An industrial embedded computer utilizes solid-state disk modules with integrated flash controllers that cache small read/write requests inside internal DRAM before flushing to NAND flash. Which storage controller specification features this caching architecture?",
    "options": [
      {
        "id": "A",
        "text": "Direct Memory Bus Controller"
      },
      {
        "id": "B",
        "text": "Enhanced Integrated Drive Electronics (EIDE)"
      },
      {
        "id": "C",
        "text": "Serial Asynchronous Communication Adaptor"
      },
      {
        "id": "D",
        "text": "Programmable Interrupt Controller"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / I-O",
    "difficulty": "Easy",
    "explanation": "The supplied source identifies EIDE as the controller/interface with integrated drive caching for faster transfers.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Direct Memory Bus Controller": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "The supplied source identifies EIDE as the controller/interface with integrated drive caching for faster transfers.",
      "Enhanced Integrated Drive Electronics (EIDE)": "The supplied source identifies EIDE as the controller/interface with integrated drive caching for faster transfers.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Serial Asynchronous Communication Adaptor": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Programmable Interrupt Controller": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s4-q41",
    "number": 41,
    "question": "An OS kernel designer wants to prevent unauthorized background applications from reading sensitive system data owned by other users. Which core Operating System capability directly enforces these boundary permissions?",
    "options": [
      {
        "id": "A",
        "text": "Disk Fragmentation Utility"
      },
      {
        "id": "B",
        "text": "Access Control and File Permission Management"
      },
      {
        "id": "C",
        "text": "Display Refresh Synchronization"
      },
      {
        "id": "D",
        "text": "Dynamic Swapping Allocation"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / Security",
    "difficulty": "Easy",
    "explanation": "ACLs and file permissions control which users/processes can read, write, or execute protected resources.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Disk Fragmentation Utility": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "ACLs and file permissions control which users/processes can read, write, or execute protected resources.",
      "Access Control and File Permission Management": "ACLs and file permissions control which users/processes can read, write, or execute protected resources.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Display Refresh Synchronization": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Dynamic Swapping Allocation": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s4-q42",
    "number": 42,
    "question": "A speaker is presenting a slide deck in PowerPoint and wants to reveal nested bullet points individually on consecutive mouse clicks during the presentation. Which animation configuration setting achieves this behavior automatically?",
    "options": [
      {
        "id": "A",
        "text": "Apply Morph transition between duplicated slides."
      },
      {
        "id": "B",
        "text": "Set text animation sequence option to By Paragraph."
      },
      {
        "id": "C",
        "text": "Group text frames into SVG vector paths."
      },
      {
        "id": "D",
        "text": "Convert all bullet points into static raster images."
      }
    ],
    "correctAnswer": "B",
    "topic": "MS PowerPoint",
    "difficulty": "Easy",
    "explanation": "By Paragraph makes bullet items appear sequentially on successive clicks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Apply Morph transition between duplicated slides.": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "B": "By Paragraph makes bullet items appear sequentially on successive clicks.",
      "Set text animation sequence option to By Paragraph.": "By Paragraph makes bullet items appear sequentially on successive clicks.",
      "C": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Group text frames into SVG vector paths.": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Convert all bullet points into static raster images.": "Incorrect. This feature or shortcut serves a different productivity function in the application."
    }
  },
  {
    "id": "tech-mcq-s4-q43",
    "number": 43,
    "question": "A corporate clerk working inside MS Word needs to stamp the current system time into a document log quickly without navigating ribbon menus. Which keyboard shortcut performs this action?",
    "options": [
      {
        "id": "A",
        "text": "Alt + Shift + T"
      },
      {
        "id": "B",
        "text": "Ctrl + Alt + T"
      },
      {
        "id": "C",
        "text": "Shift + F12"
      },
      {
        "id": "D",
        "text": "Alt + F4"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Word",
    "difficulty": "Easy",
    "explanation": "The supplied source identifies Alt+Shift+T as the shortcut for inserting the current system time in Word.",
    "marks": 1,
    "optionExplanations": {
      "A": "The supplied source identifies Alt+Shift+T as the shortcut for inserting the current system time in Word.",
      "Alt + Shift + T": "The supplied source identifies Alt+Shift+T as the shortcut for inserting the current system time in Word.",
      "B": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Ctrl + Alt + T": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "C": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Shift + F12": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Alt + F4": "Incorrect. This feature or shortcut serves a different productivity function in the application."
    }
  },
  {
    "id": "tech-mcq-s4-q44",
    "number": 44,
    "question": "Analyze the hardware procurement catalog table below: Which equipment item has the lowest Unit Price when evaluated by the Excel lookup formula?",
    "options": [
      {
        "id": "A",
        "text": "Server"
      },
      {
        "id": "B",
        "text": "Router"
      },
      {
        "id": "C",
        "text": "Switch"
      },
      {
        "id": "D",
        "text": "Cable"
      }
    ],
    "correctAnswer": "D",
    "topic": "MS Excel / INDEX-MATCH",
    "difficulty": "Easy",
    "explanation": "Cable has the minimum Unit Price of 15, so MATCH finds that row and INDEX returns Cable.",
    "marks": 1,
    "code": "=INDEX(A2:A5, MATCH(MIN(C2:C5), C2:C5, 0))",
    "optionExplanations": {
      "A": "Incorrect. Server has a Unit Price of 1200, which is the maximum price.",
      "Server": "Incorrect. Server has a Unit Price of 1200, which is the maximum price.",
      "B": "Incorrect. Router has a Unit Price of 450.",
      "Router": "Incorrect. Router has a Unit Price of 450.",
      "C": "Incorrect. Switch has a Unit Price of 600.",
      "Switch": "Incorrect. Switch has a Unit Price of 600.",
      "D": "Correct. MIN(C2:C5) evaluates to 15, which corresponds to Cable in row 5 (offset 4). INDEX(A2:A5, 4) returns 'Cable'.",
      "Cable": "Correct. MIN(C2:C5) evaluates to 15, which corresponds to Cable in row 5 (offset 4). INDEX(A2:A5, 4) returns 'Cable'."
    },
    "data": {
      "columns": [
        "Product (Col A)",
        "Category (Col B)",
        "Unit Price (Col C)",
        "Units Sold (Col D)"
      ],
      "rows": [
        [
          "Server",
          "Hardware",
          1200,
          4
        ],
        [
          "Router",
          "Hardware",
          450,
          12
        ],
        [
          "Switch",
          "Hardware",
          600,
          8
        ],
        [
          "Cable",
          "Accessory",
          15,
          150
        ]
      ]
    }
  },
  {
    "id": "tech-mcq-s4-q45",
    "number": 45,
    "question": "Following a security incident involving unauthorized privilege escalation on a Linux server, a System Administrator is tasked with enforcing strictly bounded role privileges. Which OS property should be prioritized to restrict user execution permissions?",
    "options": [
      {
        "id": "A",
        "text": "User Access Control and Least Privilege Policy"
      },
      {
        "id": "B",
        "text": "Virtual Memory Page File Size"
      },
      {
        "id": "C",
        "text": "GUI Color Palette Configuration"
      },
      {
        "id": "D",
        "text": "Process Scheduler Quantum Interval"
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems / Security",
    "difficulty": "Easy",
    "explanation": "Access-control mechanisms enforce least privilege by restricting execution and administrative permissions.",
    "marks": 1,
    "optionExplanations": {
      "A": "Access-control mechanisms enforce least privilege by restricting execution and administrative permissions.",
      "User Access Control and Least Privilege Policy": "Access-control mechanisms enforce least privilege by restricting execution and administrative permissions.",
      "B": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials.",
      "Virtual Memory Page File Size": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials.",
      "C": "Incorrect. The user interface does not enforce low-level kernel security policies.",
      "GUI Color Palette Configuration": "Incorrect. The user interface does not enforce low-level kernel security policies.",
      "D": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction.",
      "Process Scheduler Quantum Interval": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction."
    }
  }
];

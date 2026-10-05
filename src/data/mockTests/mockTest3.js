// src/data/mockTests/mockTest3.js
// Technical MCQ Practice Set 3
// Total Questions: 45 | Marks: 45 (+1 Mark/Q) | Duration: 45 Mins

export const mockTest3 = [
  {
    "id": "tech-mcq-s3-q01",
    "number": 1,
    "question": "What will be the output of the given code when the user clicks a button? }",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      },
      {
        "id": "C",
        "text": "myFunction(this);"
      },
      {
        "id": "D",
        "text": "None of the given options"
      }
    ],
    "correctAnswer": "C",
    "topic": "JavaScript / DOM",
    "difficulty": "Easy",
    "explanation": "getAttribute('onclick') returns the exact string stored in the button's onclick attribute.",
    "marks": 1,
    "code": "<button onclick=\"myFunction(this);\">Test onclick attribute!</button>\n\n<script type=\"text/javascript\">\nfunction myFunction(button) {\n    document.write(button.getAttribute(\"onclick\"));\n}\n</script>",
    "optionExplanations": {
      "A": "Incorrect. The function does not return a Boolean; it writes the onclick attribute string.",
      "True": "Incorrect. The function does not return a Boolean; it writes the onclick attribute string.",
      "B": "Incorrect. The output is not the Boolean value false.",
      "False": "Incorrect. The output is not the Boolean value false.",
      "C": "Correct. getAttribute('onclick') returns the literal attribute value: myFunction(this);",
      "myFunction(this);": "Correct. getAttribute('onclick') returns the literal attribute value: myFunction(this);",
      "D": "Incorrect. The source code determines a concrete output.",
      "None of the given options": "Incorrect. The source code determines a concrete output."
    }
  },
  {
    "id": "tech-mcq-s3-q02",
    "number": 2,
    "question": "What will be the output of the given code? return (elem + 5); }",
    "options": [
      {
        "id": "A",
        "text": "3, 16, 2, 18"
      },
      {
        "id": "B",
        "text": "8, 21, 7, 23"
      },
      {
        "id": "C",
        "text": "False"
      },
      {
        "id": "D",
        "text": "True"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript / Array Methods",
    "difficulty": "Easy",
    "explanation": "map() applies myFunction to every array element, adding 5 to each value.",
    "marks": 1,
    "code": "var my_arr = [3, 16, 2, 18];\n\nfunction myFunction(elem) {\n    return (elem + 5);\n}\n\ndocument.write(my_arr.map(myFunction));",
    "optionExplanations": {
      "A": "Incorrect. map() transforms every element by adding 5.",
      "3, 16, 2, 18": "Incorrect. map() transforms every element by adding 5.",
      "B": "Correct. 3+5=8, 16+5=21, 2+5=7, and 18+5=23.",
      "8, 21, 7, 23": "Correct. 3+5=8, 16+5=21, 2+5=7, and 18+5=23.",
      "C": "Incorrect. map() does not produce a Boolean.",
      "False": "Incorrect. map() does not produce a Boolean.",
      "D": "Incorrect. map() returns a transformed array.",
      "True": "Incorrect. map() returns a transformed array."
    }
  },
  {
    "id": "tech-mcq-s3-q03",
    "number": 3,
    "question": "Which of the following tags is used to define additional details that the user can view or hide in HTML?",
    "options": [
      {
        "id": "A",
        "text": "<detail ></detail>"
      },
      {
        "id": "B",
        "text": "<details ></details>"
      },
      {
        "id": "C",
        "text": "<record ></record>"
      },
      {
        "id": "D",
        "text": "None of the given options"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTML",
    "difficulty": "Easy",
    "explanation": "The HTML <details> element creates a disclosure widget whose contents can be shown or hidden.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The standard HTML element is <details>, not <detail>.",
      "<detail ></detail>": "Incorrect. The standard HTML element is <details>, not <detail>.",
      "B": "Correct. <details> creates expandable/collapsible additional content.",
      "<details ></details>": "Correct. <details> creates expandable/collapsible additional content.",
      "C": "Incorrect. <record> is not the HTML element used for this purpose.",
      "<record ></record>": "Incorrect. <record> is not the HTML element used for this purpose.",
      "D": "Incorrect. A valid standard HTML element is provided.",
      "None of the given options": "Incorrect. A valid standard HTML element is provided."
    }
  },
  {
    "id": "tech-mcq-s3-q04",
    "number": 4,
    "question": "Identify the CSS3 code snippet that can be used to create the diagonal leaf-like shape shown below (having equal 50px dimensions, an orange background #ff9a2e, a dark border #404040, and rounded top-left and bottom-right corners):",
    "shapePreview": {
      "title": "Target CSS Shape",
      "style": {
        "width": "64px",
        "height": "64px",
        "backgroundColor": "#ff9a2e",
        "border": "2px solid #404040",
        "borderRadius": "24px 0 24px 0",
        "boxShadow": "0 8px 24px rgba(255, 154, 46, 0.25)"
      }
    },
    "options": [
      {
        "id": "A",
        "text": ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 10px;\n}"
      },
      {
        "id": "B",
        "text": ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 20px 0 20px 0;\n}"
      },
      {
        "id": "C",
        "text": ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 0 20px 0 20px;\n}"
      },
      {
        "id": "D",
        "text": ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 50%;\n}"
      }
    ],
    "correctAnswer": "B",
    "topic": "CSS",
    "difficulty": "Medium",
    "explanation": "The second CSS option uses alternating rounded corners ('20px 0 20px 0' for top-left, top-right, bottom-right, bottom-left), matching the diagonal leaf shape.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A uniform border-radius of 10px rounds all 4 corners equally, creating a standard rounded rectangle.",
      ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 10px;\n}": "Incorrect. A uniform border-radius of 10px rounds all 4 corners equally, creating a standard rounded rectangle.",
      "B": "Correct. '20px 0 20px 0' rounds only the top-left and bottom-right corners (leaving top-right and bottom-left square), creating the diagonal leaf shape.",
      ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 20px 0 20px 0;\n}": "Correct. '20px 0 20px 0' rounds only the top-left and bottom-right corners (leaving top-right and bottom-left square), creating the diagonal leaf shape.",
      "C": "Incorrect. '0 20px 0 20px' rounds the top-right and bottom-left corners instead of top-left and bottom-right.",
      ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 0 20px 0 20px;\n}": "Incorrect. '0 20px 0 20px' rounds the top-right and bottom-left corners instead of top-left and bottom-right.",
      "D": "Incorrect. 'border-radius: 50%' rounds all corners equally into a circle.",
      ".shape {\n    width: 50px;\n    height: 50px;\n    background-color: #ff9a2e;\n    border: 2px solid #404040;\n    border-radius: 50%;\n}": "Incorrect. 'border-radius: 50%' rounds all corners equally into a circle."
    }
  },
  {
    "id": "tech-mcq-s3-q05",
    "number": 5,
    "question": "Assume that a software system has a general Animal class and specific subclasses such as Dog and Cat. These subclasses inherit common properties and behaviors from Animal. Which Java class setup demonstrates inheritance in this case? Analyze the given choices and select the correct answer from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\n\nclass Dog extends Animal {\n    void sound() { System.out.println(\"Dog barks\"); }\n}"
      },
      {
        "id": "B",
        "text": "class Animal {\n    void sound() {}\n}\n\nclass Dog {\n    void extends sound() { System.out.println(\"Dog barks\"); }\n}"
      },
      {
        "id": "C",
        "text": "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\n\nclass Dog inherits Animal { }"
      },
      {
        "id": "D",
        "text": "class Animal {\n    void sound() {}\n}\n\nclass Dog super Animal {\n    void sound() {}\n}"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Inheritance",
    "difficulty": "Easy",
    "explanation": "Dog extends Animal, so Dog inherits from Animal and overrides the sound() method.",
    "marks": 1,
    "code": "class Animal { void sound() { System.out.println(\"Animal sound\"); } }\nclass Dog extends Animal { void sound() { System.out.println(\"Dog barks\"); } }",
    "optionExplanations": {
      "A": "Dog extends Animal, so Dog inherits from Animal and overrides the sound() method.",
      "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\n\nclass Dog extends Animal {\n    void sound() { System.out.println(\"Dog barks\"); }\n}": "Dog extends Animal, so Dog inherits from Animal and overrides the sound() method.",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "class Animal {\n    void sound() {}\n}\n\nclass Dog {\n    void extends sound() { System.out.println(\"Dog barks\"); }\n}": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "Incorrect. Java does not support an 'inherits' keyword; 'extends' must be used.",
      "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\n\nclass Dog inherits Animal { }": "Incorrect. Java does not support an 'inherits' keyword; 'extends' must be used.",
      "D": "Incorrect. 'super' is used to call parent constructors or methods, not as a class declaration.",
      "class Animal {\n    void sound() {}\n}\n\nclass Dog super Animal {\n    void sound() {}\n}": "Incorrect. 'super' is used to call parent constructors or methods, not as a class declaration."
    }
  },
  {
    "id": "tech-mcq-s3-q06",
    "number": 6,
    "question": "In a Web filtering service, the firewall stops the user's request from leaving the network. It then queries the Web filter and, based on the reply from the web filter, it allows or disallows the request. Which of the following is not a disadvantage of using this service?",
    "options": [
      {
        "id": "A",
        "text": "The Firewall System has to ensure that all requests made by users are copied to the web filter system and hence causing excess use of resources"
      },
      {
        "id": "B",
        "text": "There is a trust relationship which exists between the firewall system and the web filter and any malicious activity on one system is likely to affect the other system also"
      },
      {
        "id": "C",
        "text": "In case the web filter starts failing, the network connectivity of the system is tampered with because of the trust relationship that exists between web filters and firewall"
      },
      {
        "id": "D",
        "text": "A and C"
      }
    ],
    "correctAnswer": "D",
    "topic": "Network Security / Web Filtering",
    "difficulty": "Medium",
    "explanation": "The question asks which is not a disadvantage. A and C describe disadvantages, so the combined option identifies those stated disadvantages rather than introducing another one.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "The Firewall System has to ensure that all requests made by users are copied to the web filter system and hence causing excess use of resources": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "There is a trust relationship which exists between the firewall system and the web filter and any malicious activity on one system is likely to affect the other system also": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "In case the web filter starts failing, the network connectivity of the system is tampered with because of the trust relationship that exists between web filters and firewall": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "D": "Correct. The question asks which is not a disadvantage. A and C describe disadvantages, so the combined option identifies those stated disadvantages rather than introducing another one.",
      "A and C": "Correct. The question asks which is not a disadvantage. A and C describe disadvantages, so the combined option identifies those stated disadvantages rather than introducing another one."
    }
  },
  {
    "id": "tech-mcq-s3-q07",
    "number": 7,
    "question": "Assume that a software developer is working on the given Java code. Which option denotes the relationship between the Car class and the myCar object?",
    "options": [
      {
        "id": "A",
        "text": "Car is the class and myCar is an instance of the class"
      },
      {
        "id": "B",
        "text": "myCar is the class and Car is an instance of the class"
      },
      {
        "id": "C",
        "text": "Car and myCar are both instances of the same class"
      },
      {
        "id": "D",
        "text": "Car and myCar are unrelated concepts"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / OOP",
    "difficulty": "Easy",
    "explanation": "Car defines the class, while new Car(...) creates the myCar object (instance).",
    "marks": 1,
    "code": "public class Car {\n    private String make;\n    private String model;\n\n    public Car(String make, String model) {\n        this.make = make;\n        this.model = model;\n    }\n\n    public String getMake() { return make; }\n    public String getModel() { return model; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\", \"Camry\");\n        System.out.println(\"My car is a \" + myCar.getMake() + \" \" + myCar.getModel());\n    }\n}",
    "optionExplanations": {
      "A": "Car defines the class, while new Car(...) creates the myCar object (instance).",
      "Car is the class and myCar is an instance of the class": "Car defines the class, while new Car(...) creates the myCar object (instance).",
      "B": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "myCar is the class and Car is an instance of the class": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Car and myCar are both instances of the same class": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime.",
      "Car and myCar are unrelated concepts": "Incorrect. Method overloading is resolved statically at compile time, not dynamically at runtime."
    }
  },
  {
    "id": "tech-mcq-s3-q08",
    "number": 8,
    "question": "In the given Java application class 'TeaMac', which type of polymorphism is demonstrated by the overloaded boilTea methods?",
    "options": [
      {
        "id": "A",
        "text": "Static polymorphism"
      },
      {
        "id": "B",
        "text": "Dynamic polymorphism"
      },
      {
        "id": "C",
        "text": "Late binding"
      },
      {
        "id": "D",
        "text": "Method overriding"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / Polymorphism",
    "difficulty": "Medium",
    "explanation": "The code shows overloaded boilTea methods with different parameter lists, which is compile-time/static polymorphism.",
    "marks": 1,
    "code": "public class TeaMac {\n    public Coffee boilTea(ChooseTea choosed) {\n        switch (choosed) {\n            case GREEN_TEA:\n                return boilgreentea();\n            default:\n                // default code\n        }\n    }\n\n    public List boilTea(ChooseTea choosed) {\n        List teas = new ArrayList(number);\n        for (int i = 0; i<number; i++) {\n            teas.add(boilTea(choosed));\n        }\n        return teas;\n    }\n}",
    "optionExplanations": {
      "A": "Correct. The two boilTea methods have the same name but different parameter lists, which is method overloading and static/compile-time polymorphism.",
      "Static polymorphism": "Correct. The two boilTea methods have the same name but different parameter lists, which is method overloading and static/compile-time polymorphism.",
      "B": "Incorrect. Dynamic polymorphism is associated with overriding and runtime dispatch.",
      "Dynamic polymorphism": "Incorrect. Dynamic polymorphism is associated with overriding and runtime dispatch.",
      "C": "Incorrect. Late binding is a runtime method-dispatch concept, not the mechanism shown by overloads.",
      "Late binding": "Incorrect. Late binding is a runtime method-dispatch concept, not the mechanism shown by overloads.",
      "D": "Incorrect. The snippet shows overloading, not overriding.",
      "Method overriding": "Incorrect. The snippet shows overloading, not overriding."
    }
  },
  {
    "id": "tech-mcq-s3-q09",
    "number": 9,
    "question": "During the development of an application, a developer encounters an error message indicating that the API endpoint they are trying to access is not found. Which HTTP status code is most likely associated with this error?",
    "options": [
      {
        "id": "A",
        "text": "200"
      },
      {
        "id": "B",
        "text": "404"
      },
      {
        "id": "C",
        "text": "500"
      },
      {
        "id": "D",
        "text": "403"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTTP",
    "difficulty": "Easy",
    "explanation": "HTTP 404 Not Found indicates that the requested resource or endpoint could not be found.",
    "marks": 1,
    "optionExplanations": {
      "200": "Incorrect. HTTP 200 OK indicates that the request was successfully processed and the resource was found.",
      "403": "Incorrect. HTTP 403 Forbidden means the server understood the request but refuses to authorize access.",
      "404": "Correct. HTTP 404 Not Found indicates that the origin server could not find a current representation for the target resource.",
      "500": "Incorrect. HTTP 500 Internal Server Error signifies an unexpected server-side software exception, not a missing endpoint.",
      "A": "Incorrect. HTTP 200 OK indicates that the request was successfully processed and the resource was found.",
      "B": "Correct. HTTP 404 Not Found indicates that the origin server could not find a current representation for the target resource.",
      "C": "Incorrect. HTTP 500 Internal Server Error signifies an unexpected server-side software exception, not a missing endpoint.",
      "D": "Incorrect. HTTP 403 Forbidden means the server understood the request but refuses to authorize access."
    }
  },
  {
    "id": "tech-mcq-s3-q10",
    "number": 10,
    "question": "Consider that a public-facing API has undergone significant changes, including modifications to existing endpoints and data structures, making it incompatible with older client applications. The development team needs to deploy these changes without breaking the existing integrations. Which API versioning strategy is generally recommended for handling such breaking changes? Select the correct option from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Make the changes directly to the existing endpoints and update the clients"
      },
      {
        "id": "B",
        "text": "Use query parameters to specify the desired version (e.g., /api/resource)"
      },
      {
        "id": "C",
        "text": "Include the version number in the URL path (e.g., /api/v2/resource)"
      },
      {
        "id": "D",
        "text": "Use custom HTTP headers to specify the API version"
      }
    ],
    "correctAnswer": "C",
    "topic": "API Design / Versioning",
    "difficulty": "Easy",
    "explanation": "For breaking API changes, a new URL version such as /api/v2/resource allows older clients to continue using the previous contract.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Modifying existing production endpoints directly causes breaking changes for existing API clients and mobile apps.",
      "Make the changes directly to the existing endpoints and update the clients": "Incorrect. Modifying existing production endpoints directly causes breaking changes for existing API clients and mobile apps.",
      "B": "Incorrect. Query parameter versioning (/resource?v=2) is less transparent for intermediate proxies and CDN caching.",
      "Use query parameters to specify the desired version (e.g., /api/resource)": "Incorrect. Query parameter versioning (/resource?v=2) is less transparent for intermediate proxies and CDN caching.",
      "C": "Correct. URI path versioning (/api/v2/resource) clearly segregates breaking versions, is cache-friendly, and maintains backward compatibility.",
      "Include the version number in the URL path (e.g., /api/v2/resource)": "Correct. URI path versioning (/api/v2/resource) clearly segregates breaking versions, is cache-friendly, and maintains backward compatibility.",
      "D": "Incorrect. Custom header versioning complicates browser navigation, public documentation, and automated testing tools.",
      "Use custom HTTP headers to specify the API version": "Incorrect. Custom header versioning complicates browser navigation, public documentation, and automated testing tools."
    }
  },
  {
    "id": "tech-mcq-s3-q11",
    "number": 11,
    "question": "After a successful build in the Continuous Integration pipeline, assume that the compiled and packaged application (e.g. a JAR file, Docker image, or npm package) needs to be stored in a central, versioned repository. This ensures that only approved, tested, and immutable binaries are used for deployments to various environments (development, staging, production). Which DevOps building block addresses the secure storage, versioning, and retrieval of these build outputs? Select the correct option from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Source Code Management"
      },
      {
        "id": "B",
        "text": "Database Management"
      },
      {
        "id": "C",
        "text": "Artifact Management"
      },
      {
        "id": "D",
        "text": "Container Orchestration"
      }
    ],
    "correctAnswer": "C",
    "topic": "DevOps / CI-CD",
    "difficulty": "Easy",
    "explanation": "Artifact management repositories securely store, version, and retrieve immutable build outputs such as JARs, container images, and npm packages.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Source Code Management": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Database Management": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Artifact management repositories securely store, version, and retrieve immutable build outputs such as JARs, container images, and npm packages.",
      "Artifact Management": "Artifact management repositories securely store, version, and retrieve immutable build outputs such as JARs, container images, and npm packages.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Container Orchestration": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q12",
    "number": 12,
    "question": "Assume that a company maintains an employee database. Each employee is identified by a unique EmployeeID, but sometimes, employees may change their PhoneNumber. While designing the Employee table, the developer is confused about which column should be chosen as the Primary Key. Which column is the correct choice for the Primary Key? Select the correct option from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Name"
      },
      {
        "id": "B",
        "text": "PhoneNumber"
      },
      {
        "id": "C",
        "text": "EmployeeID"
      },
      {
        "id": "D",
        "text": "Department"
      }
    ],
    "correctAnswer": "C",
    "topic": "DBMS / Keys",
    "difficulty": "Easy",
    "explanation": "A primary key should uniquely identify each employee and remain stable; EmployeeID is designed for that purpose.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Employee names are non-unique and can change over time.",
      "Name": "Incorrect. Employee names are non-unique and can change over time.",
      "B": "Incorrect. Phone numbers can be reassigned, shared, or omitted (null), violating primary key constraints.",
      "PhoneNumber": "Incorrect. Phone numbers can be reassigned, shared, or omitted (null), violating primary key constraints.",
      "C": "Correct. EmployeeID provides a unique, non-null, immutable identifier for each record in the entity table.",
      "EmployeeID": "Correct. EmployeeID provides a unique, non-null, immutable identifier for each record in the entity table.",
      "D": "Incorrect. Department is shared across many employees and cannot uniquely identify an individual employee.",
      "Department": "Incorrect. Department is shared across many employees and cannot uniquely identify an individual employee."
    }
  },
  {
    "id": "tech-mcq-s3-q13",
    "number": 13,
    "question": "Consider that two transactions run concurrently. Transaction A: UPDATE Products SET Stock = Stock - 1 WHERE ProductID = 1001; Transaction B: UPDATE Products SET Stock = Stock - 2 WHERE ProductID = 1001; Both succeed, but the final stock shows only the result of one update instead of both. Which concurrency issue is this?",
    "options": [
      {
        "id": "A",
        "text": "Phantom Read"
      },
      {
        "id": "B",
        "text": "Lost Update"
      },
      {
        "id": "C",
        "text": "Non-repeatable Read"
      },
      {
        "id": "D",
        "text": "Deadlock"
      }
    ],
    "correctAnswer": "B",
    "topic": "DBMS / Concurrency",
    "difficulty": "Easy",
    "explanation": "Both transactions update the same row and one update overwrites the effect of the other, which is the lost-update anomaly.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A phantom read occurs when a range query retrieves a different number of rows after another transaction inserts rows.",
      "Phantom Read": "Incorrect. A phantom read occurs when a range query retrieves a different number of rows after another transaction inserts rows.",
      "B": "Correct. A lost update occurs when two transactions read the same initial state and one overwrites the other's update without isolation.",
      "Lost Update": "Correct. A lost update occurs when two transactions read the same initial state and one overwrites the other's update without isolation.",
      "C": "Incorrect. A non-repeatable read occurs when a single transaction re-reads a row and sees updated data.",
      "Non-repeatable Read": "Incorrect. A non-repeatable read occurs when a single transaction re-reads a row and sees updated data.",
      "D": "Incorrect. Deadlock occurs when transactions mutually block each other waiting for locked resources.",
      "Deadlock": "Incorrect. Deadlock occurs when transactions mutually block each other waiting for locked resources."
    }
  },
  {
    "id": "tech-mcq-s3-q14",
    "number": 14,
    "question": "During deployment, assume a DevOps engineer observes that a containerized application experiences high latency. What approach should the engineer take first to rectify the issue? Select the correct option from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Increase the CPU and memory limits"
      },
      {
        "id": "B",
        "text": "Analyze the network traffic and logs"
      },
      {
        "id": "C",
        "text": "Restart the container"
      },
      {
        "id": "D",
        "text": "Reduce the number of containers"
      }
    ],
    "correctAnswer": "B",
    "topic": "DevOps / Troubleshooting",
    "difficulty": "Easy",
    "explanation": "The first step in troubleshooting latency is diagnosis using logs and traffic/metrics rather than changing resources blindly.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Increase the CPU and memory limits": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "The first step in troubleshooting latency is diagnosis using logs and traffic/metrics rather than changing resources blindly.",
      "Analyze the network traffic and logs": "The first step in troubleshooting latency is diagnosis using logs and traffic/metrics rather than changing resources blindly.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Restart the container": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Reduce the number of containers": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q15",
    "number": 15,
    "question": "What is the main purpose of network segmentation in security? Analyze the given choices and select the correct answer.",
    "options": [
      {
        "id": "A",
        "text": "Increasing bandwidth by improving signal strength"
      },
      {
        "id": "B",
        "text": "Limiting the spread of attacks"
      },
      {
        "id": "C",
        "text": "Reducing latency"
      },
      {
        "id": "D",
        "text": "Increasing hardware processing clock frequency automatically"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Easy",
    "explanation": "Network segmentation isolates zones so a compromise in one segment is less likely to spread laterally.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Increasing bandwidth by improving signal strength": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Network segmentation isolates zones so a compromise in one segment is less likely to spread laterally.",
      "Limiting the spread of attacks": "Network segmentation isolates zones so a compromise in one segment is less likely to spread laterally.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Reducing latency": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Increasing hardware processing clock frequency automatically": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s3-q16",
    "number": 16,
    "question": "Consider that an organization is using a VPN solution that provides strong confidentiality (encryption) and data integrity/authentication for its sensitive communications. Which protocol is specifically designed to provide both these security services for the packet's payload and can operate in tunnel mode?",
    "options": [
      {
        "id": "A",
        "text": "Authentication Header (AH)"
      },
      {
        "id": "B",
        "text": "Internet Key Exchange (IKE)"
      },
      {
        "id": "C",
        "text": "Encapsulating Security Payload (ESP)"
      },
      {
        "id": "D",
        "text": "Generic Routing Encapsulation (GRE)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / IPsec",
    "difficulty": "Medium",
    "explanation": "IPsec ESP provides confidentiality through encryption and also supports integrity/authentication, including in tunnel mode.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Authentication Header (AH)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Internet Key Exchange (IKE)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "IPsec ESP provides confidentiality through encryption and also supports integrity/authentication, including in tunnel mode.",
      "Encapsulating Security Payload (ESP)": "IPsec ESP provides confidentiality through encryption and also supports integrity/authentication, including in tunnel mode.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Generic Routing Encapsulation (GRE)": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s3-q17",
    "number": 17,
    "question": "An enterprise network engineer configures a remote-access VPN for remote employees. To conserve corporate VPN gateway bandwidth while maintaining high security for internal databases, which VPN configuration routes only corporate-bound subnet traffic through the encrypted VPN tunnel while sending public internet traffic directly through the user's local ISP?",
    "options": [
      {
        "id": "A",
        "text": "Full Tunneling"
      },
      {
        "id": "B",
        "text": "Split Tunneling"
      },
      {
        "id": "C",
        "text": "Hairpinning / NAT-Loopback"
      },
      {
        "id": "D",
        "text": "Dual-Homed Forward Proxy"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / VPN Architecture",
    "difficulty": "Medium",
    "explanation": "Split tunneling encrypts and routes only traffic destined for specified corporate subnets through the VPN tunnel, allowing general internet traffic to use the employee's local internet connection directly.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Full tunneling routes 100% of all client traffic (including streaming and public websites) through the corporate VPN tunnel, heavily consuming corporate bandwidth.",
      "Full Tunneling": "Incorrect. Full tunneling routes 100% of all client traffic (including streaming and public websites) through the corporate VPN tunnel, heavily consuming corporate bandwidth.",
      "B": "Correct. Split tunneling routes internal corporate traffic over the VPN while allowing external internet traffic to egress locally.",
      "Split Tunneling": "Correct. Split tunneling routes internal corporate traffic over the VPN while allowing external internet traffic to egress locally.",
      "C": "Incorrect. Hairpinning routes traffic from an internal endpoint back out through the same interface it entered.",
      "Hairpinning / NAT-Loopback": "Incorrect. Hairpinning routes traffic from an internal endpoint back out through the same interface it entered.",
      "D": "Incorrect. A dual-homed proxy terminates and relays application connections between two separate network interfaces rather than dynamically tunneling subnets.",
      "Dual-Homed Forward Proxy": "Incorrect. A dual-homed proxy terminates and relays application connections between two separate network interfaces rather than dynamically tunneling subnets."
    },
    "subtopic": "Split Tunneling"
  },
  {
    "id": "tech-mcq-s3-q18",
    "number": 18,
    "question": "During the initial TCP connection establishment (3-way handshake), what flag combination does the server transmit back to the client immediately upon receiving the initial SYN segment?",
    "options": [
      {
        "id": "A",
        "text": "ACK only"
      },
      {
        "id": "B",
        "text": "SYN-ACK"
      },
      {
        "id": "C",
        "text": "FIN-ACK"
      },
      {
        "id": "D",
        "text": "RST-ACK"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / Transport Layer",
    "difficulty": "Medium",
    "explanation": "In the standard TCP 3-way handshake: (1) Client sends SYN to Server, (2) Server responds with SYN-ACK (acknowledging client sequence and sending server sequence), and (3) Client sends ACK.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The server must synchronize its own initial sequence number (ISN) in addition to acknowledging the client, so it sends SYN-ACK, not ACK only.",
      "ACK only": "Incorrect. The server must synchronize its own initial sequence number (ISN) in addition to acknowledging the client, so it sends SYN-ACK, not ACK only.",
      "B": "Correct. The server responds with SYN-ACK, acknowledging the client's sequence number and proposing its own initial sequence number.",
      "SYN-ACK": "Correct. The server responds with SYN-ACK, acknowledging the client's sequence number and proposing its own initial sequence number.",
      "C": "Incorrect. FIN-ACK is used during TCP connection termination, not connection establishment.",
      "FIN-ACK": "Incorrect. FIN-ACK is used during TCP connection termination, not connection establishment.",
      "D": "Incorrect. RST-ACK immediately rejects or resets an invalid or unauthorized connection attempt.",
      "RST-ACK": "Incorrect. RST-ACK immediately rejects or resets an invalid or unauthorized connection attempt."
    },
    "subtopic": "TCP Handshake"
  },
  {
    "id": "tech-mcq-s3-q19",
    "number": 19,
    "question": "During a video call, packets travel from one device to another across different networks. To ensure data arrives correctly and in the right order, which layer of the OSI Model is responsible for error-checking and reliable delivery?",
    "options": [
      {
        "id": "A",
        "text": "Physical Layer"
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
        "text": "Network Layer"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / OSI Model",
    "difficulty": "Easy",
    "explanation": "The OSI Transport layer provides end-to-end delivery and reliability mechanisms such as sequencing and error recovery.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Physical Layer": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Data Link Layer": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "The OSI Transport layer provides end-to-end delivery and reliability mechanisms such as sequencing and error recovery.",
      "Transport Layer": "The OSI Transport layer provides end-to-end delivery and reliability mechanisms such as sequencing and error recovery.",
      "D": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "Network Layer": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data."
    }
  },
  {
    "id": "tech-mcq-s3-q20",
    "number": 20,
    "question": "Assume a mid-sized enterprise wants to deploy a firewall that not only filters traffic based on IP addresses, ports, and protocols but also tracks the state of active connections to ensure session integrity. They also prefer to avoid deploying multiple devices for different layers of filtering. Which type of firewall best meets these combined requirements? Select the correct answer from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "A stateful packet inspection firewall"
      },
      {
        "id": "B",
        "text": "An application-layer firewall"
      },
      {
        "id": "C",
        "text": "A basic packet-filtering firewall"
      },
      {
        "id": "D",
        "text": "A software-only firewall without session tracking"
      }
    ],
    "correctAnswer": "A",
    "topic": "Network Security / Firewalls",
    "difficulty": "Medium",
    "explanation": "A stateful firewall filters traffic using network-layer information while tracking active connection state.",
    "marks": 1,
    "optionExplanations": {
      "A": "A stateful firewall filters traffic using network-layer information while tracking active connection state.",
      "A stateful packet inspection firewall": "A stateful firewall filters traffic using network-layer information while tracking active connection state.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "An application-layer firewall": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "A basic packet-filtering firewall": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "A software-only firewall without session tracking": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "tech-mcq-s3-q21",
    "number": 21,
    "question": "Consider that a growing business is searching for a hassle-free solution to access office productivity tools without the complexities of IT management. They aim for a cost-effective approach that allows seamless application delivery over the internet. Based on the scenario, which cloud computing use case would be most suitable for their requirement?",
    "options": [
      {
        "id": "A",
        "text": "Big Data Intelligence"
      },
      {
        "id": "B",
        "text": "Testing and Building Applications"
      },
      {
        "id": "C",
        "text": "Software as a Service"
      },
      {
        "id": "D",
        "text": "Intelligent Energy-Saving Methods"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "SaaS delivers ready-to-use software over the internet while the provider handles most infrastructure and application management.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Big Data Intelligence": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Testing and Building Applications": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "SaaS delivers ready-to-use software over the internet while the provider handles most infrastructure and application management.",
      "Software as a Service": "SaaS delivers ready-to-use software over the internet while the provider handles most infrastructure and application management.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Intelligent Energy-Saving Methods": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q22",
    "number": 22,
    "question": "Assume that a company is migrating its legacy data sources to a new cloud-based platform while maintaining operations without downtime. During the migration, they need to ensure that data from both the old and new systems can be accessed simultaneously for real-time reporting and analytics, with data being logically integrated without physical movement. Considering the requirements, which architectural layer would best handle the logical integration and seamless access to data from both environments, ensuring minimal disruption and secure data access? Analyze the given choices and select the correct answer.",
    "options": [
      {
        "id": "A",
        "text": "Connection layer using direct database access protocols"
      },
      {
        "id": "B",
        "text": "Consumption layer utilizing middleware with abstracted APIs"
      },
      {
        "id": "C",
        "text": "Abstraction layer that logically unifies disparate data sources"
      },
      {
        "id": "D",
        "text": "Data caching layer storing temporary data replicas"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud / Data Integration",
    "difficulty": "Medium",
    "explanation": "An abstraction layer can present a unified logical view across heterogeneous sources without physically moving all the data.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Connection layer using direct database access protocols": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Consumption layer utilizing middleware with abstracted APIs": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "An abstraction layer can present a unified logical view across heterogeneous sources without physically moving all the data.",
      "Abstraction layer that logically unifies disparate data sources": "An abstraction layer can present a unified logical view across heterogeneous sources without physically moving all the data.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Data caching layer storing temporary data replicas": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q23",
    "number": 23,
    "question": "Assume that you have recently started working for an organization that is transitioning to a cloud-based infrastructure. As part of IT governance, you are responsible for ensuring data security in the cloud environment. You are aware of various cloud deployment models and need to choose the most secure option for your organization's sensitive data. In the context of IT governance and cloud security, which cloud deployment model is typically the most secure choice for organizations with highly sensitive data?",
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
        "text": "Hybrid Cloud"
      },
      {
        "id": "D",
        "text": "Community Cloud"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "A private cloud provides dedicated infrastructure and greater organizational control, making it a common choice for highly sensitive workloads.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Public Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "A private cloud provides dedicated infrastructure and greater organizational control, making it a common choice for highly sensitive workloads.",
      "Private Cloud": "A private cloud provides dedicated infrastructure and greater organizational control, making it a common choice for highly sensitive workloads.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Hybrid Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Community Cloud": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q24",
    "number": 24,
    "question": "What is the technology that allows multiple operating systems to run on a single physical machine? Analyze the given choices and select the correct answer.",
    "options": [
      {
        "id": "A",
        "text": "Virtualization"
      },
      {
        "id": "B",
        "text": "Containerization"
      },
      {
        "id": "C",
        "text": "Clustering"
      },
      {
        "id": "D",
        "text": "Replication"
      }
    ],
    "correctAnswer": "A",
    "topic": "Cloud / Virtualization",
    "difficulty": "Easy",
    "explanation": "Hardware virtualization allows multiple virtual machines, each capable of running an operating system, to share one physical machine.",
    "marks": 1,
    "optionExplanations": {
      "A": "Hardware virtualization allows multiple virtual machines, each capable of running an operating system, to share one physical machine.",
      "Virtualization": "Hardware virtualization allows multiple virtual machines, each capable of running an operating system, to share one physical machine.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Containerization": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Clustering": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "Replication": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q25",
    "number": 25,
    "question": "Which cloud model allows a customer to choose the operating system, influence network configurations, without managing the underlying infrastructure?",
    "options": [
      {
        "id": "A",
        "text": "SAAS"
      },
      {
        "id": "B",
        "text": "PAAS"
      },
      {
        "id": "C",
        "text": "IAAS"
      },
      {
        "id": "D",
        "text": "All the Given Options"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "IaaS provides control over virtual machines, operating systems, storage, and networking while the provider manages the physical infrastructure.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "SAAS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "PAAS": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "IaaS provides control over virtual machines, operating systems, storage, and networking while the provider manages the physical infrastructure.",
      "IAAS": "IaaS provides control over virtual machines, operating systems, storage, and networking while the provider manages the physical infrastructure.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "All the Given Options": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q26",
    "number": 26,
    "question": "Consider that as part of the data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with the next generation storage solutions. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing? Select the correct answer from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "By eliminating the need for server virtualization"
      },
      {
        "id": "B",
        "text": "By minimizing financial and contractual commitments"
      },
      {
        "id": "C",
        "text": "By ensuring a global-scale, reliable, and resilient storage solution"
      },
      {
        "id": "D",
        "text": "By optimizing capacity for executing code and running instances"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing / Resource Pooling",
    "difficulty": "Medium",
    "explanation": "Resource pooling combines storage capacity across resources so cloud storage can scale and remain resilient.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By eliminating the need for server virtualization": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By minimizing financial and contractual commitments": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Resource pooling combines storage capacity across resources so cloud storage can scale and remain resilient.",
      "By ensuring a global-scale, reliable, and resilient storage solution": "Resource pooling combines storage capacity across resources so cloud storage can scale and remain resilient.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By optimizing capacity for executing code and running instances": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "tech-mcq-s3-q27",
    "number": 27,
    "question": "Assume that an embedded system encrypts data using a substitution cipher with a key-driven method to minimize resource usage. After deployment, it is discovered that some characters in the encrypted text are not correctly decrypted, leading to data loss. What is the most likely cause of this issue? Analyze the given choices and select the correct answer.",
    "options": [
      {
        "id": "A",
        "text": "The decryption map incorrectly handles negative indices during character remapping."
      },
      {
        "id": "B",
        "text": "The decryption process incorrectly uses the encryption key, leading to incorrect character mapping."
      },
      {
        "id": "C",
        "text": "The encryption map creates duplicate character mappings due to key collision, causing data loss."
      },
      {
        "id": "D",
        "text": "The length of the characters string causes an incorrect modulo operation during remapping, leading to data corruption."
      }
    ],
    "correctAnswer": "C",
    "topic": "Cryptography",
    "difficulty": "Medium",
    "explanation": "A substitution cipher requires a valid one-to-one mapping for reversible decryption. Duplicate mappings can make distinct plaintext characters map to the same ciphertext character, losing information.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Negative indices wrap around in modular arithmetic and do not account for irreversible character collisions.",
      "The decryption map incorrectly handles negative indices during character remapping.": "Incorrect. Negative indices wrap around in modular arithmetic and do not account for irreversible character collisions.",
      "B": "Incorrect. The issue stems from non-injective character substitution rather than key reuse.",
      "The decryption process incorrectly uses the encryption key, leading to incorrect character mapping.": "Incorrect. The issue stems from non-injective character substitution rather than key reuse.",
      "C": "Correct. If an encryption mapping assigns two distinct plaintext characters to the same ciphertext character, the mapping is non-injective (collision) and cannot be uniquely inverted.",
      "The encryption map creates duplicate character mappings due to key collision, causing data loss.": "Correct. If an encryption mapping assigns two distinct plaintext characters to the same ciphertext character, the mapping is non-injective (collision) and cannot be uniquely inverted.",
      "D": "Incorrect. Modulo operation arithmetic is deterministic and does not cause character collapse unless the alphabet size is mismatched.",
      "The length of the characters string causes an incorrect modulo operation during remapping, leading to data corruption.": "Incorrect. Modulo operation arithmetic is deterministic and does not cause character collapse unless the alphabet size is mismatched."
    }
  },
  {
    "id": "tech-mcq-s3-q28",
    "number": 28,
    "question": "Assume that in a corporate Wi-Fi setup, employees need secure access. Which EAP authentication method simplifies the process by using only server-side certificates? Select the correct answer from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "EAP-MD-5"
      },
      {
        "id": "B",
        "text": "EAP-TLS"
      },
      {
        "id": "C",
        "text": "EAP-TTLS"
      },
      {
        "id": "D",
        "text": "PEAP"
      }
    ],
    "correctAnswer": "D",
    "topic": "Network Security / EAP",
    "difficulty": "Medium",
    "explanation": "PEAP commonly uses only a server-side certificate to establish a protected TLS tunnel, after which an inner authentication method is used.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. EAP-MD5 does not provide the server-certificate-based TLS tunnel described.",
      "EAP-MD-5": "Incorrect. EAP-MD5 does not provide the server-certificate-based TLS tunnel described.",
      "B": "Incorrect for the stated 'server-side certificate only' requirement; EAP-TLS normally uses certificates on both client and server.",
      "EAP-TLS": "Incorrect for the stated 'server-side certificate only' requirement; EAP-TLS normally uses certificates on both client and server.",
      "C": "Incorrect. EAP-TTLS uses a server certificate to establish a tunnel, but the intended answer in this source is PEAP.",
      "EAP-TTLS": "Incorrect. EAP-TTLS uses a server certificate to establish a tunnel, but the intended answer in this source is PEAP.",
      "D": "Correct. PEAP uses a server-side certificate to establish a protected TLS tunnel and then performs inner authentication.",
      "PEAP": "Correct. PEAP uses a server-side certificate to establish a protected TLS tunnel and then performs inner authentication."
    }
  },
  {
    "id": "tech-mcq-s3-q29",
    "number": 29,
    "question": "Which SQL query retrieves the names of all students from the StudentDetails table whose FirstName begins with 'A' and has at least 4 characters in total length?",
    "options": [
      {
        "id": "A",
        "text": "SELECT FirstName FROM StudentDetails WHERE FirstName LIKE 'A___%';"
      },
      {
        "id": "B",
        "text": "SELECT FirstName FROM StudentDetails WHERE FirstName LIKE 'A%';"
      },
      {
        "id": "C",
        "text": "SELECT FirstName FROM StudentDetails WHERE FirstName = 'A*';"
      },
      {
        "id": "D",
        "text": "SELECT FirstName FROM StudentDetails WHERE FirstName REGEXP '^A.{2}';"
      }
    ],
    "correctAnswer": "A",
    "topic": "SQL / Pattern Matching",
    "difficulty": "Medium",
    "explanation": "'A___%' specifies 'A' at position 1, followed by 3 underscore wildcards ('___' matching any 3 individual characters), followed by '%' matching zero or more characters, guaranteeing at least 4 characters.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. 'A___%' matches 'A' followed by at least three characters (each underscore matches exactly one character) plus optional additional characters, ensuring a minimum length of 4.",
      "SELECT FirstName FROM StudentDetails WHERE FirstName LIKE 'A___%';": "Correct. 'A___%' matches 'A' followed by at least three characters (each underscore matches exactly one character) plus optional additional characters, ensuring a minimum length of 4.",
      "B": "Incorrect. 'A%' matches any string starting with 'A' of length 1 or more (including a single letter 'A').",
      "SELECT FirstName FROM StudentDetails WHERE FirstName LIKE 'A%';": "Incorrect. 'A%' matches any string starting with 'A' of length 1 or more (including a single letter 'A').",
      "C": "Incorrect. In SQL, the '*' character is not a wildcard in standard string equality comparisons.",
      "SELECT FirstName FROM StudentDetails WHERE FirstName = 'A*';": "Incorrect. In SQL, the '*' character is not a wildcard in standard string equality comparisons.",
      "D": "Incorrect. '^A.{2}' matches strings starting with 'A' and having at least 3 characters total, not 4.",
      "SELECT FirstName FROM StudentDetails WHERE FirstName REGEXP '^A.{2}';": "Incorrect. '^A.{2}' matches strings starting with 'A' and having at least 3 characters total, not 4."
    },
    "subtopic": "LIKE Wildcards"
  },
  {
    "id": "tech-mcq-s3-q30",
    "number": 30,
    "question": "Assume that you want to fetch student names and mark records. In this case, you also want to display the student's details even if the marks record is absent. Which SQL query can be used to complete the desired task? Analyze the given choices and select the correct option.",
    "options": [
      {
        "id": "A",
        "text": "SELECT E.StudentName \nFROM M.Mark \nWHERE StudentDetails E \nLEFT JOIN \nGROUP BY StudentMark M IN E.StudentId = M.StudentId;"
      },
      {
        "id": "B",
        "text": "SELECT E.StudentName, M.Mark \nFROM StudentDetails E \nLEFT JOIN \nGROUP BY StudentMark M IN E.StudentId = M.StudentId;"
      },
      {
        "id": "C",
        "text": "SELECT E.StudentName, M.Mark \nFROM StudentDetails E \nLEFT JOIN StudentMark M \n  ON E.StudentId = M.StudentId;"
      },
      {
        "id": "D",
        "text": "SELECT E.StudentName, M.Mark\nFROM StudentDetails E\nRIGHT JOIN StudentMark M\n  ON E.StudentId = M.StudentId;"
      }
    ],
    "correctAnswer": "C",
    "topic": "SQL / Joins",
    "difficulty": "Easy",
    "explanation": "LEFT JOIN preserves every student from StudentDetails even when a matching StudentMark row does not exist.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The clause ordering and syntax are completely invalid (WHERE cannot contain LEFT JOIN or GROUP BY inside column references).",
      "SELECT E.StudentName \nFROM M.Mark \nWHERE StudentDetails E \nLEFT JOIN \nGROUP BY StudentMark M IN E.StudentId = M.StudentId;": "Incorrect. The clause ordering and syntax are completely invalid (WHERE cannot contain LEFT JOIN or GROUP BY inside column references).",
      "B": "Incorrect. GROUP BY cannot be combined with an 'IN' condition to substitute a valid JOIN ON clause.",
      "SELECT E.StudentName, M.Mark \nFROM StudentDetails E \nLEFT JOIN \nGROUP BY StudentMark M IN E.StudentId = M.StudentId;": "Incorrect. GROUP BY cannot be combined with an 'IN' condition to substitute a valid JOIN ON clause.",
      "C": "Correct. LEFT JOIN keeps all rows from the left table (StudentDetails) and matches rows from StudentMark ON StudentId, retaining students with null marks.",
      "SELECT E.StudentName, M.Mark \nFROM StudentDetails E \nLEFT JOIN StudentMark M \n  ON E.StudentId = M.StudentId;": "Correct. LEFT JOIN keeps all rows from the left table (StudentDetails) and matches rows from StudentMark ON StudentId, retaining students with null marks.",
      "D": "Incorrect. RIGHT JOIN would keep all records from StudentMark and drop students who have no mark records.",
      "SELECT E.StudentName, M.Mark\nFROM StudentDetails E\nRIGHT JOIN StudentMark M\n  ON E.StudentId = M.StudentId;": "Incorrect. RIGHT JOIN would keep all records from StudentMark and drop students who have no mark records."
    }
  },
  {
    "id": "tech-mcq-s3-q31",
    "number": 31,
    "question": "Write pseudocode to declare an array named 'ages' with values [25, 30, 22, 28, 35] and print the second element using 1-based array indexing convention (where ages[1] = 25, ages[2] = 30).",
    "options": [
      {
        "id": "A",
        "text": "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[2]"
      },
      {
        "id": "B",
        "text": "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[1]"
      },
      {
        "id": "C",
        "text": "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[3]"
      },
      {
        "id": "D",
        "text": "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[0]"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Arrays",
    "difficulty": "Easy",
    "explanation": "In 1-based pseudocode indexing, ages[1] is 25, ages[2] is 30, ages[3] is 22. To output the second element (30), PRINT ages[2] is executed.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. In 1-based pseudocode indexing, index 1 holds the first element (25) and index 2 holds the second element (30).",
      "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[2]": "Correct. In 1-based pseudocode indexing, index 1 holds the first element (25) and index 2 holds the second element (30).",
      "B": "Incorrect. In 1-based indexing, ages[1] prints the first element (25).",
      "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[1]": "Incorrect. In 1-based indexing, ages[1] prints the first element (25).",
      "C": "Incorrect. ages[3] prints the third element (22).",
      "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[3]": "Incorrect. ages[3] prints the third element (22).",
      "D": "Incorrect. Index 0 is invalid or out-of-bounds in standard 1-based pseudocode.",
      "ARRAY ages[5] = [25, 30, 22, 28, 35]\nPRINT ages[0]": "Incorrect. Index 0 is invalid or out-of-bounds in standard 1-based pseudocode."
    }
  },
  {
    "id": "tech-mcq-s3-q32",
    "number": 32,
    "question": "What will be the return value of the following pseudocode function when invoked with str = \"radar\"?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "Execution Error"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / String Manipulation",
    "difficulty": "Medium",
    "explanation": "The function checks if string str is a palindrome. For 'radar', str[1]=='r'==str[5] and str[2]=='a'==str[4]. The while loop completes without mismatch, returning 1.",
    "marks": 1,
    "optionExplanations": {
      "0": "Incorrect. 0 is only returned if a character mismatch is detected.",
      "1": "Correct. 'radar' reads the same forwards and backwards, so all symmetric character pairs match and the function returns 1.",
      "5": "Incorrect. The function returns a boolean status flag (1 or 0), not the string length.",
      "A": "Incorrect. 0 is only returned if a character mismatch is detected.",
      "B": "Correct. 'radar' reads the same forwards and backwards, so all symmetric character pairs match and the function returns 1.",
      "C": "Incorrect. The function returns a boolean status flag (1 or 0), not the string length.",
      "D": "Incorrect. The algorithm is completely valid and executes in O(N/2) time.",
      "Execution Error": "Incorrect. The algorithm is completely valid and executes in O(N/2) time."
    },
    "code": "Integer checkString(String str)\n    Integer left = 1\n    Integer right = length(str)\n    \n    While (left < right)\n        if (str[left] != str[right])\n            return 0\n        end if\n        left = left + 1\n        right = right - 1\n    End While\n    \n    return 1\nEnd function",
    "subtopic": "Two-Pointer Algorithm"
  },
  {
    "id": "tech-mcq-s3-q33",
    "number": 33,
    "question": "What will be the output of the depicted pseudo code? End for",
    "options": [
      {
        "id": "A",
        "text": "78"
      },
      {
        "id": "B",
        "text": "69"
      },
      {
        "id": "C",
        "text": "55"
      },
      {
        "id": "D",
        "text": "65"
      }
    ],
    "correctAnswer": "D",
    "topic": "Pseudocode / Bitwise Operations",
    "difficulty": "Medium",
    "explanation": "Starting with b=5, each of the two loop iterations updates b using addition and bitwise AND; the final b is 57, so a+b = 8+57 = 65.",
    "marks": 1,
    "code": "Integer a,b,c\nSet a=8, b=5, c=6\n\nfor(each c from 3 to 4)\n    b=9+b\n    b=(b+7)+a\n    b=(b&4)+b\nEnd for\n\nPrint a+b",
    "optionExplanations": {
      "55": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "65": "Starting with b=5, each of the two loop iterations updates b using addition and bitwise AND; the final b is 57, so a+b = 8+57 = 65.",
      "69": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "78": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Starting with b=5, each of the two loop iterations updates b using addition and bitwise AND; the final b is 57, so a+b = 8+57 = 65."
    }
  },
  {
    "id": "tech-mcq-s3-q34",
    "number": 34,
    "question": "What will be the output of the given pseudo code? End if",
    "options": [
      {
        "id": "A",
        "text": "1.0"
      },
      {
        "id": "B",
        "text": "4.0"
      },
      {
        "id": "C",
        "text": "8.0"
      },
      {
        "id": "D",
        "text": "17.0"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Arrays / Bitwise",
    "difficulty": "Medium",
    "explanation": "arr[0][1]=(2&1)&4=0. The condition is false, then (3+7)&1 = 10&1 = 0. Finally arr[1][1]+arr[0][0] = 4+0 = 4.",
    "marks": 1,
    "code": "Integer j\nInteger arr[2][2] = {{1, 2}, {2, 4}}\n\narr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]\n\nif ((arr[0][0] - arr[0][1]) > (arr[1][1] + arr[0][1]))\n    arr[0][0] = (arr[1][1] + arr[1][1]) + arr[0][0]\nEnd if\n\narr[0][0] = (3+7) & arr[0][0]\n\nPrint arr[1][1] + arr[0][0]",
    "optionExplanations": {
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "1.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "arr[0][1]=(2&1)&4=0. The condition is false, then (3+7)&1 = 10&1 = 0. Finally arr[1][1]+arr[0][0] = 4+0 = 4.",
      "4.0": "arr[0][1]=(2&1)&4=0. The condition is false, then (3+7)&1 = 10&1 = 0. Finally arr[1][1]+arr[0][0] = 4+0 = 4.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "8.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "17.0": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s3-q35",
    "number": 35,
    "question": "What does the following pseudocode accomplish? IF number is 0 OR number is 1 RETURN 1 ELSE: RETURN some_operation(number, cal(number - 1)) END IF PRINT result",
    "options": [
      {
        "id": "A",
        "text": "Calculates the factorial of input_number."
      },
      {
        "id": "B",
        "text": "Computes the sum of input_number and its predecessors."
      },
      {
        "id": "C",
        "text": "Multiplies input_number by the product of its predecessors."
      },
      {
        "id": "D",
        "text": "Determines the square of input_number."
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Recursion",
    "difficulty": "Medium",
    "explanation": "The recursive structure uses a base case of 1 and a recursive operation involving number and cal(number-1), matching factorial-style recursion. The exact implementation of some_operation is abstracted in the source.",
    "marks": 1,
    "code": "FUNCTION cal(number):\n    IF number is 0 OR number is 1\n        RETURN 1\n    ELSE:\n        RETURN some_operation(number, cal(number - 1))\n    END IF\nEND FUNCTION cal\n\nresult = cal(input_number)\nPRINT result",
    "optionExplanations": {
      "A": "The recursive structure uses a base case of 1 and a recursive operation involving number and cal(number-1), matching factorial-style recursion. The exact implementation of some_operation is abstracted in the source.",
      "Calculates the factorial of input_number.": "The recursive structure uses a base case of 1 and a recursive operation involving number and cal(number-1), matching factorial-style recursion. The exact implementation of some_operation is abstracted in the source.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Computes the sum of input_number and its predecessors.": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Multiplies input_number by the product of its predecessors.": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "Determines the square of input_number.": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s3-q36",
    "number": 36,
    "question": "if((a+c+b)<(3+b-a)) if((b+c+a)<(9+a+6)) Else End if End if",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "27"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Medium",
    "explanation": "For a=0, b=2, c=7, the outer condition is 9 < 5, which is false. Therefore the body is skipped and the result is a+b+c = 0+2+7 = 9.",
    "marks": 1,
    "code": "Integer funn(Integer a, Integer b, Integer c)\n\nif((a+c+b)<(3+b-a))\n    a=b+c\n\n    if((b+c+a)<(9+a+6))\n        a=(b+a)+b\n    Else\n        b=(3+4)+a\n    End if\n\n    c=(b+c)+c\nEnd if\n\nPrint a+b+c",
    "optionExplanations": {
      "6": "Incorrect. The supplied conditions do not produce 6.",
      "9": "Correct. The outer condition 9<5 is false, so the result remains 0+2+7=9.",
      "13": "Incorrect. The body is not executed because the outer condition is false.",
      "27": "Incorrect. 27 would require executing additional updates that the condition prevents.",
      "A": "Incorrect. The supplied conditions do not produce 6.",
      "B": "Correct. The outer condition 9<5 is false, so the result remains 0+2+7=9.",
      "C": "Incorrect. The body is not executed because the outer condition is false.",
      "D": "Incorrect. 27 would require executing additional updates that the condition prevents."
    }
  },
  {
    "id": "tech-mcq-s3-q37",
    "number": 37,
    "question": "What will be the output of the following pseudocode?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "59"
      },
      {
        "id": "C",
        "text": "55"
      },
      {
        "id": "D",
        "text": "63"
      }
    ],
    "correctAnswer": "C",
    "topic": "Pseudocode / Bitwise Operations",
    "difficulty": "Medium",
    "explanation": "The outer condition is true, q becomes 23, the inner condition is false, r becomes 28, and p+q+r = 4+23+28 = 55.",
    "marks": 1,
    "code": "Integer p,q,r\nSet p=4, q=8, r=6\n\nif((p+r)>(q-p))\n    q=(q+7)+q\n\n    if((4+q^p)<(7+p+r))\n        p=(q^p)^r\n    Else\n        r=5+q\n    End if\nEnd if\n\nPrint p+q+r",
    "optionExplanations": {
      "50": "Incorrect. 50 does not account for the updated value of r (28) in the else branch.",
      "55": "Correct. Outer condition ((4+6) > (8-4)) -> 10 > 4 is true. q becomes (8+7)+8 = 23. Inner condition ((4 + (23^4)) < (7+4+6)) -> 4 + 19 = 23 < 17 is false. So else executes: r = 5 + 23 = 28. Finally p+q+r = 4 + 23 + 28 = 55.",
      "59": "Incorrect. 59 would occur if p was updated to 8, but the inner condition is false.",
      "63": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "A": "Incorrect. 50 does not account for the updated value of r (28) in the else branch.",
      "B": "Incorrect. 59 would occur if p was updated to 8, but the inner condition is false.",
      "C": "Correct. Outer condition ((4+6) > (8-4)) -> 10 > 4 is true. q becomes (8+7)+8 = 23. Inner condition ((4 + (23^4)) < (7+4+6)) -> 4 + 19 = 23 < 17 is false. So else executes: r = 5 + 23 = 28. Finally p+q+r = 4 + 23 + 28 = 55.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "tech-mcq-s3-q38",
    "number": 38,
    "question": "What will be the return value of the function call funn(1, 6, 7) in the following pseudocode?",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode / Conditional Logic",
    "difficulty": "Medium",
    "explanation": "The outer condition is 1+8+7 < 6+1, i.e. 16<7, which is false. Therefore the return value is 1+6+7=14.",
    "marks": 1,
    "code": "Integer funn(Integer a, Integer b, Integer c)\n\nif((a+8+c)<(6+a))\n    a=(a+b)+b\n\n    if((a+b+c)<(b+c+a))\n        a=c+c\n    Else\n        c=(c+a)+b\n    End if\n\n    c=7+b\nEnd if\n\nreturn a+b+c",
    "optionExplanations": {
      "9": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "14": "Correct. For funn(1, 6, 7): outer condition ((1+8+7) < (6+1)) -> 16 < 7 is false. The entire if-block is skipped. The function returns a+b+c = 1 + 6 + 7 = 14.",
      "20": "Incorrect. 20 would result if the if-block executed and modified c to 7+b (13).",
      "24": "Incorrect. 24 would occur if both outer and inner conditions were evaluated as true.",
      "A": "Correct. For funn(1, 6, 7): outer condition ((1+8+7) < (6+1)) -> 16 < 7 is false. The entire if-block is skipped. The function returns a+b+c = 1 + 6 + 7 = 14.",
      "B": "Incorrect. 20 would result if the if-block executed and modified c to 7+b (13).",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. 24 would occur if both outer and inner conditions were evaluated as true."
    }
  },
  {
    "id": "tech-mcq-s3-q39",
    "number": 39,
    "question": "Assume a CPU needs to fetch an instruction from the main memory. Which physical component on the motherboard acts as the primary communication pathway for data, addresses, and control signals between the CPU, memory, and I/O devices? Select the correct option from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Peripheral Component Interconnect (PCI) slot"
      },
      {
        "id": "B",
        "text": "System Bus"
      },
      {
        "id": "C",
        "text": "CPU Register"
      },
      {
        "id": "D",
        "text": "Northbridge/Southbridge Chipset"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / Computer Architecture",
    "difficulty": "Easy",
    "explanation": "The system bus provides the communication pathways carrying data, addresses, and control signals among the CPU, memory, and I/O components.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Peripheral Component Interconnect (PCI) slot": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "The system bus provides the communication pathways carrying data, addresses, and control signals among the CPU, memory, and I/O components.",
      "System Bus": "The system bus provides the communication pathways carrying data, addresses, and control signals among the CPU, memory, and I/O components.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "CPU Register": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Northbridge/Southbridge Chipset": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s3-q40",
    "number": 40,
    "question": "Suppose you want to implement a bus where the input-output devices are attached to the computer by wires. In this, the data transfer on a bus is carried out by electronic processes. Then the host controller sends messages to the device controller, and the device controller performs the operations. Which device will you choose if these device controllers consist of a built-in cache so that data transfer occurs faster?",
    "options": [
      {
        "id": "A",
        "text": "Enhanced interior drive electronics"
      },
      {
        "id": "B",
        "text": "Enhanced integrated drive electronics"
      },
      {
        "id": "C",
        "text": "Enhanced interior driver electronics"
      },
      {
        "id": "D",
        "text": "Enhanced integrated hard driver"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / I-O",
    "difficulty": "Easy",
    "explanation": "EIDE stands for Enhanced Integrated Drive Electronics and is the intended device/interface name among the choices.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Enhanced interior drive electronics": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "B": "EIDE stands for Enhanced Integrated Drive Electronics and is the intended device/interface name among the choices.",
      "Enhanced integrated drive electronics": "EIDE stands for Enhanced Integrated Drive Electronics and is the intended device/interface name among the choices.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Enhanced interior driver electronics": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Enhanced integrated hard driver": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "tech-mcq-s3-q41",
    "number": 41,
    "question": "In operating system process synchronization, which necessary condition for deadlock is eliminated by requiring that every process request and receive all needed resources at once before beginning execution?",
    "options": [
      {
        "id": "A",
        "text": "Mutual Exclusion"
      },
      {
        "id": "B",
        "text": "Hold and Wait"
      },
      {
        "id": "C",
        "text": "No Preemption"
      },
      {
        "id": "D",
        "text": "Circular Wait"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / Deadlock Handling",
    "difficulty": "Medium",
    "explanation": "By requiring processes to request all resources upfront, a process is never allowed to hold allocated resources while waiting for additional ones, completely eliminating the 'Hold and Wait' condition.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Mutual exclusion is eliminated by making resources shareable (like read-only files), which is often impossible for hardware like printers.",
      "Mutual Exclusion": "Incorrect. Mutual exclusion is eliminated by making resources shareable (like read-only files), which is often impossible for hardware like printers.",
      "B": "Correct. Requiring all resources to be allocated simultaneously before execution guarantees that a process holding resources is never in a waiting state.",
      "Hold and Wait": "Correct. Requiring all resources to be allocated simultaneously before execution guarantees that a process holding resources is never in a waiting state.",
      "C": "Incorrect. Eliminating no-preemption requires forcibly preempting resources already held by a waiting process.",
      "No Preemption": "Incorrect. Eliminating no-preemption requires forcibly preempting resources already held by a waiting process.",
      "D": "Incorrect. Circular wait is eliminated by imposing a strict total ordering on all resource types.",
      "Circular Wait": "Incorrect. Circular wait is eliminated by imposing a strict total ordering on all resource types."
    },
    "subtopic": "Deadlock Prevention"
  },
  {
    "id": "tech-mcq-s3-q42",
    "number": 42,
    "question": "In Microsoft PowerPoint, which feature allows a designer to specify global theme formatting, company logo placement, header/footer styling, and typography that automatically cascades down to every slide in the presentation?",
    "options": [
      {
        "id": "A",
        "text": "Slide Sorter View"
      },
      {
        "id": "B",
        "text": "Slide Master"
      },
      {
        "id": "C",
        "text": "Handout Master"
      },
      {
        "id": "D",
        "text": "Format Painter"
      }
    ],
    "correctAnswer": "B",
    "topic": "MS PowerPoint",
    "difficulty": "Easy",
    "explanation": "The Slide Master controls the default design, styling, logo placement, and layout templates for the entire presentation, automatically applying changes to all inheriting slides.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Slide Sorter displays thumbnail previews of all slides for rearranging and timing, not for editing design templates.",
      "Slide Sorter View": "Incorrect. Slide Sorter displays thumbnail previews of all slides for rearranging and timing, not for editing design templates.",
      "B": "Correct. Slide Master acts as the central design blueprint, ensuring consistent styling, branding, and layouts across all slides.",
      "Slide Master": "Correct. Slide Master acts as the central design blueprint, ensuring consistent styling, branding, and layouts across all slides.",
      "C": "Incorrect. Handout Master formats the layout and appearance of printed presentation handouts.",
      "Handout Master": "Incorrect. Handout Master formats the layout and appearance of printed presentation handouts.",
      "D": "Incorrect. Format Painter manually copies styling from one individual element to another.",
      "Format Painter": "Incorrect. Format Painter manually copies styling from one individual element to another."
    },
    "subtopic": "Slide Master"
  },
  {
    "id": "tech-mcq-s3-q43",
    "number": 43,
    "question": "John is writing a report and needs to insert today's date without typing it manually. Which shortcut in MS Word allows him to do this?",
    "options": [
      {
        "id": "A",
        "text": "Alt + Shift + D"
      },
      {
        "id": "B",
        "text": "Ctrl + Shift + T"
      },
      {
        "id": "C",
        "text": "Ctrl + Alt + D"
      },
      {
        "id": "D",
        "text": "Shift + F5"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Word",
    "difficulty": "Easy",
    "explanation": "In Microsoft Word, Alt+Shift+D inserts the current date field.",
    "marks": 1,
    "optionExplanations": {
      "A": "In Microsoft Word, Alt+Shift+D inserts the current date field.",
      "Alt + Shift + D": "In Microsoft Word, Alt+Shift+D inserts the current date field.",
      "B": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Ctrl + Shift + T": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "C": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Ctrl + Alt + D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "D": "Incorrect. This feature or shortcut serves a different productivity function in the application.",
      "Shift + F5": "Incorrect. This feature or shortcut serves a different productivity function in the application."
    }
  },
  {
    "id": "tech-mcq-s3-q44",
    "number": 44,
    "question": "Analyze the product sales and inventory dataset below: Which product name corresponds to the maximum Units Sold when evaluated by the Excel lookup formula?",
    "options": [
      {
        "id": "A",
        "text": "Printer"
      },
      {
        "id": "B",
        "text": "Laptop"
      },
      {
        "id": "C",
        "text": "Mouse"
      },
      {
        "id": "D",
        "text": "Monitor"
      }
    ],
    "correctAnswer": "C",
    "topic": "MS Excel / INDEX-MATCH",
    "difficulty": "Easy",
    "explanation": "MAX(D2:D9) finds 100 in Units Sold (Row 4). MATCH locates its relative row offset (3). INDEX(A2:A9, 3) returns 'Mouse'.",
    "marks": 1,
    "code": "=INDEX(A2:A9, MATCH(MAX(D2:D9), D2:D9, 0))",
    "optionExplanations": {
      "A": "Incorrect. Printer has 15 units sold, which is far below the maximum.",
      "Printer": "Incorrect. Printer has 15 units sold, which is far below the maximum.",
      "B": "Incorrect. Laptop has highest unit price ($850) but only 10 units sold.",
      "Laptop": "Incorrect. Laptop has highest unit price ($850) but only 10 units sold.",
      "C": "Correct. Mouse has 100 units sold, which is the maximum value in column D (Units Sold). MATCH locates row offset 3, and INDEX returns 'Mouse'.",
      "Mouse": "Correct. Mouse has 100 units sold, which is the maximum value in column D (Units Sold). MATCH locates row offset 3, and INDEX returns 'Mouse'.",
      "D": "Incorrect. Monitor has 25 units sold.",
      "Monitor": "Incorrect. Monitor has 25 units sold."
    },
    "data": {
      "columns": [
        "Product (Col A)",
        "Category (Col B)",
        "Unit Price (Col C)",
        "Units Sold (Col D)",
        "Discount % (Col E)",
        "Sale Date (Col F)",
        "Region (Col G)"
      ],
      "rows": [
        [
          "Laptop",
          "Electronics",
          850,
          10,
          "5%",
          "10-01-2023",
          "North"
        ],
        [
          "Monitor",
          "Electronics",
          200,
          25,
          "10%",
          "15-01-2023",
          "South"
        ],
        [
          "Mouse",
          "Accessories",
          25,
          100,
          "0%",
          "01-02-2023",
          "North"
        ],
        [
          "Keyboard",
          "Accessories",
          45,
          60,
          "0%",
          "10-02-2023",
          "East"
        ],
        [
          "Printer",
          "Electronics",
          300,
          15,
          "15%",
          "05-03-2023",
          "West"
        ],
        [
          "Tablet",
          "Electronics",
          500,
          20,
          "5%",
          "15-03-2023",
          "South"
        ],
        [
          "Webcam",
          "Accessories",
          50,
          40,
          "0%",
          "01-04-2023",
          "North"
        ],
        [
          "Speaker",
          "Accessories",
          70,
          30,
          "10%",
          "10-04-2023",
          "East"
        ]
      ]
    }
  },
  {
    "id": "tech-mcq-s3-q45",
    "number": 45,
    "question": "Assume that you are employed by a company that has recently suffered a security breach in its computer systems. As the IT manager, you are assigned the responsibility of enhancing the company's operating system security. Which property of an operating system will you prioritize in order to achieve this goal? Select the correct answer from the given choices.",
    "options": [
      {
        "id": "A",
        "text": "Access control"
      },
      {
        "id": "B",
        "text": "User interface"
      },
      {
        "id": "C",
        "text": "Multitasking"
      },
      {
        "id": "D",
        "text": "Virtual memory"
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems / Security",
    "difficulty": "Easy",
    "explanation": "Access control is a core operating-system security property that restricts resource access to authorized users/processes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Access control is a core operating-system security property that restricts resource access to authorized users/processes.",
      "Access control": "Access control is a core operating-system security property that restricts resource access to authorized users/processes.",
      "B": "Incorrect. The user interface does not enforce low-level kernel security policies.",
      "User interface": "Incorrect. The user interface does not enforce low-level kernel security policies.",
      "C": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction.",
      "Multitasking": "Incorrect. CPU scheduling manages process time slicing rather than privilege restriction.",
      "D": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials.",
      "Virtual memory": "Incorrect. Virtual memory manages physical RAM allocation rather than process security credentials."
    }
  }
];

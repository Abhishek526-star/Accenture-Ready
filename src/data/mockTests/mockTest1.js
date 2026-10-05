// src/data/mockTests/mockTest1.js
// Technical MCQ Practice Set 1
// Total Questions: 45 | Marks: 45 (+1 Mark/Q) | Duration: 45 Mins

export const mockTest1 = [
  {
    "id": "q1",
    "number": 1,
    "question": "What will be the output of the given code when the user clicks the button?",
    "options": [
      {
        "id": "A",
        "text": "btn1"
      },
      {
        "id": "B",
        "text": "showId(this);"
      },
      {
        "id": "C",
        "text": "undefined"
      },
      {
        "id": "D",
        "text": "None of the given options"
      }
    ],
    "correctAnswer": "A",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "getAttribute('id') returns the string value stored in the id attribute, which is 'btn1'.",
    "marks": 1,
    "code": "<body>\n<button id=\"btn1\" onclick=\"showId(this);\">Click me!</button>\n\n<script>\nfunction showId(el) {\n    document.write(el.getAttribute(\"id\"));\n}\n</script>\n</body>",
    "optionExplanations": {
      "A": "Correct. The button's id attribute is btn1, so getAttribute('id') returns 'btn1'.",
      "btn1": "Correct. The button's id attribute is btn1, so getAttribute('id') returns 'btn1'.",
      "B": "Incorrect. This is the function call, not the value returned by getAttribute().",
      "showId(this);": "Incorrect. This is the function call, not the value returned by getAttribute().",
      "C": "Incorrect. The element has an id attribute, so getAttribute('id') returns a defined string.",
      "undefined": "Incorrect. The element has an id attribute, so getAttribute('id') returns a defined string.",
      "D": "Incorrect. The output is btn1.",
      "None of the given options": "Incorrect. The output is btn1."
    }
  },
  {
    "id": "q2",
    "number": 2,
    "question": "What will be the output of the given code?",
    "options": [
      {
        "id": "A",
        "text": "4, 9, 1, 6"
      },
      {
        "id": "B",
        "text": "18, 12"
      },
      {
        "id": "C",
        "text": "8, 18, 2, 12"
      },
      {
        "id": "D",
        "text": "None of the given options"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "filter() keeps values greater than 4 (9 and 6), then map() doubles each, giving 18, 12.",
    "marks": 1,
    "code": "var nums = [4, 9, 1, 6];\n\nfunction doubleIt(n) {\n    return n * 2;\n}\n\ndocument.write(nums.filter(function(n){ return n > 4; }).map(doubleIt));",
    "optionExplanations": {
      "A": "Incorrect. filter() eliminates 4 and 1 because they are not greater than 4.",
      "4, 9, 1, 6": "Incorrect. filter() eliminates 4 and 1 because they are not greater than 4.",
      "B": "Correct. filter() keeps [9, 6]. Then map(doubleIt) transforms them to [18, 12].",
      "18, 12": "Correct. filter() keeps [9, 6]. Then map(doubleIt) transforms them to [18, 12].",
      "C": "Incorrect. 4 and 1 are filtered out prior to the map step, so 8 and 2 never appear.",
      "8, 18, 2, 12": "Incorrect. 4 and 1 are filtered out prior to the map step, so 8 and 2 never appear.",
      "D": "Incorrect. '18, 12' is the exact output returned by document.write.",
      "None of the given options": "Incorrect. '18, 12' is the exact output returned by document.write."
    }
  },
  {
    "id": "q3",
    "number": 3,
    "question": "Which HTML5 tag is used to represent the completion progress of a task, such as a download or a form submission?",
    "options": [
      {
        "id": "A",
        "text": "<progress></progress>"
      },
      {
        "id": "B",
        "text": "<meter></meter>"
      },
      {
        "id": "C",
        "text": "<status></status>"
      },
      {
        "id": "D",
        "text": "<track></track>"
      }
    ],
    "correctAnswer": "A",
    "topic": "HTML",
    "difficulty": "Easy",
    "explanation": "The <progress> tag represents the completion progress of a task.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. The progress element represents completion progress for a task.",
      "<progress></progress>": "Correct. The progress element represents completion progress for a task.",
      "B": "Incorrect. meter represents a scalar measurement within a known range, not task completion progress.",
      "<meter></meter>": "Incorrect. meter represents a scalar measurement within a known range, not task completion progress.",
      "C": "Incorrect. status is not the HTML5 element used for task progress.",
      "<status></status>": "Incorrect. status is not the HTML5 element used for task progress.",
      "D": "Incorrect. track is used with media elements for timed text such as captions.",
      "<track></track>": "Incorrect. track is used with media elements for timed text such as captions."
    }
  },
  {
    "id": "q4",
    "number": 4,
    "question": "Which CSS property, applied to a flex container, centers its child items both horizontally and vertically at the same time?",
    "options": [
      {
        "id": "A",
        "text": "vertical-align: middle;"
      },
      {
        "id": "B",
        "text": "text-align: center;"
      },
      {
        "id": "C",
        "text": "float: center;"
      },
      {
        "id": "D",
        "text": "justify-content: center; align-items: center;"
      }
    ],
    "correctAnswer": "D",
    "topic": "CSS",
    "difficulty": "Medium",
    "explanation": "justify-content: center centers items along the main axis and align-items: center centers them along the cross axis, together centering horizontally and vertically.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. vertical-align is not the flexbox property combination used to center flex items on both axes.",
      "vertical-align: middle;": "Incorrect. vertical-align is not the flexbox property combination used to center flex items on both axes.",
      "B": "Incorrect. text-align primarily affects inline content/text, not both flex axes.",
      "text-align: center;": "Incorrect. text-align primarily affects inline content/text, not both flex axes.",
      "C": "Incorrect. There is no valid CSS float:center value.",
      "float: center;": "Incorrect. There is no valid CSS float:center value.",
      "D": "Correct. justify-content centers on the main axis and align-items centers on the cross axis.",
      "justify-content: center; align-items: center;": "Correct. justify-content centers on the main axis and align-items centers on the cross axis."
    }
  },
  {
    "id": "q5",
    "number": 5,
    "question": "Assume that a software system has a general Shape class and a specific subclass Circle that inherits common properties and behaviors from Shape. Which Python class setup correctly demonstrates inheritance in this case?",
    "options": [
      {
        "id": "A",
        "text": "class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14 * self.radius ** 2"
      },
      {
        "id": "B",
        "text": "class Shape:\n    def area(self):\n        pass\n\nclass Circle:\n    def area(self) extends Shape:\n        return 3.14 * self.radius ** 2"
      },
      {
        "id": "C",
        "text": "class Shape(Circle):\n    def area(self):\n        pass"
      },
      {
        "id": "D",
        "text": "None of the given options"
      }
    ],
    "correctAnswer": "A",
    "topic": "Python",
    "difficulty": "Medium",
    "explanation": "Circle(Shape) makes Circle a subclass that inherits from Shape, which is correct inheritance syntax in Python.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. In Python, class Circle(Shape) explicitly inherits from parent class Shape, and can override area().",
      "class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14 * self.radius ** 2": "Correct. In Python, class Circle(Shape) explicitly inherits from parent class Shape, and can override area().",
      "B": "Incorrect. Python does not use an 'extends' keyword inside method definitions for inheritance.",
      "class Shape:\n    def area(self):\n        pass\n\nclass Circle:\n    def area(self) extends Shape:\n        return 3.14 * self.radius ** 2": "Incorrect. Python does not use an 'extends' keyword inside method definitions for inheritance.",
      "C": "Incorrect. class Shape(Circle) inverts the relationship, erroneously making Shape inherit from Circle.",
      "class Shape(Circle):\n    def area(self):\n        pass": "Incorrect. class Shape(Circle) inverts the relationship, erroneously making Shape inherit from Circle.",
      "D": "Incorrect. Option A is the valid Python OOP implementation.",
      "None of the given options": "Incorrect. Option A is the valid Python OOP implementation."
    }
  },
  {
    "id": "q6",
    "number": 6,
    "question": "In a reverse-proxy filtering setup, the proxy server intercepts every client request, forwards it to the backend server, and returns the response. Which of the following is NOT a disadvantage of using this service?",
    "options": [
      {
        "id": "A",
        "text": "The reverse proxy becomes a single point of failure for all incoming traffic"
      },
      {
        "id": "B",
        "text": "It adds an additional network hop, which can increase response latency"
      },
      {
        "id": "C",
        "text": "It hides the identity and IP address of backend servers from external clients"
      },
      {
        "id": "D",
        "text": "A and B"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking",
    "difficulty": "Medium",
    "explanation": "Hiding the identity of backend servers is actually a security benefit of a reverse proxy, not a disadvantage.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect as a non-disadvantage. Without redundancy, a reverse proxy can become a single point of failure.",
      "The reverse proxy becomes a single point of failure for all incoming traffic": "Incorrect as a non-disadvantage. Without redundancy, a reverse proxy can become a single point of failure.",
      "B": "Incorrect as a non-disadvantage. The extra proxy hop can add latency.",
      "It adds an additional network hop, which can increase response latency": "Incorrect as a non-disadvantage. The extra proxy hop can add latency.",
      "C": "Correct. Hiding backend infrastructure is a security benefit of a reverse proxy.",
      "It hides the identity and IP address of backend servers from external clients": "Correct. Hiding backend infrastructure is a security benefit of a reverse proxy.",
      "D": "Incorrect. A and B describe disadvantages, while the question asks for what is not a disadvantage.",
      "A and B": "Incorrect. A and B describe disadvantages, while the question asks for what is not a disadvantage."
    }
  },
  {
    "id": "q7",
    "number": 7,
    "question": "Assume that a developer is working on a banking application. Which option denotes the relationship between the BankAccount class and the myAccount object?",
    "options": [
      {
        "id": "A",
        "text": "BankAccount and myAccount are unrelated concepts"
      },
      {
        "id": "B",
        "text": "myAccount is the class and BankAccount is an instance of the class"
      },
      {
        "id": "C",
        "text": "BankAccount and myAccount are both instances of the same class"
      },
      {
        "id": "D",
        "text": "BankAccount is the class and myAccount is an instance of the class"
      }
    ],
    "correctAnswer": "D",
    "topic": "Java OOP",
    "difficulty": "Easy",
    "explanation": "BankAccount is the class definition, and myAccount is an object (instance) created from that class.",
    "marks": 1,
    "code": "public class BankAccount {\n    private double balance;\n    public BankAccount(double balance) { this.balance = balance; }\n    public double getBalance() { return balance; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount myAccount = new BankAccount(500.0);\n        System.out.println(myAccount.getBalance());\n    }\n}",
    "optionExplanations": {
      "A": "Incorrect. myAccount is created from BankAccount.",
      "BankAccount and myAccount are unrelated concepts": "Incorrect. myAccount is created from BankAccount.",
      "B": "Incorrect. The roles are reversed.",
      "myAccount is the class and BankAccount is an instance of the class": "Incorrect. The roles are reversed.",
      "C": "Incorrect. BankAccount is the class itself.",
      "BankAccount and myAccount are both instances of the same class": "Incorrect. BankAccount is the class itself.",
      "D": "Correct. new BankAccount(500.0) creates an object named myAccount.",
      "BankAccount is the class and myAccount is an instance of the class": "Correct. new BankAccount(500.0) creates an object named myAccount."
    }
  },
  {
    "id": "q8",
    "number": 8,
    "question": "Assume a Java class named Printer has two methods with the same name but different parameter lists, as shown below. Which type of polymorphism is demonstrated in this code snippet?",
    "options": [
      {
        "id": "A",
        "text": "Operator overloading"
      },
      {
        "id": "B",
        "text": "Dynamic polymorphism (method overriding)"
      },
      {
        "id": "C",
        "text": "Late binding"
      },
      {
        "id": "D",
        "text": "Static polymorphism (method overloading)"
      }
    ],
    "correctAnswer": "D",
    "topic": "Java OOP",
    "difficulty": "Medium",
    "explanation": "Having two methods with the same name but different parameter lists in the same class is method overloading, a form of static (compile-time) polymorphism.",
    "marks": 1,
    "code": "public class Printer {\n    public void print(String text) {\n        System.out.println(text);\n    }\n\n    public void print(String text, int copies) {\n        for (int i = 0; i < copies; i++) System.out.println(text);\n    }\n}",
    "optionExplanations": {
      "A": "Incorrect. The example uses methods with the same name and different parameter lists, not operator overloading.",
      "Operator overloading": "Incorrect. The example uses methods with the same name and different parameter lists, not operator overloading.",
      "B": "Incorrect. Overriding involves a subclass redefining an inherited method.",
      "Dynamic polymorphism (method overriding)": "Incorrect. Overriding involves a subclass redefining an inherited method.",
      "C": "Incorrect. Late binding is associated with runtime method selection, not this same-class overload example.",
      "Late binding": "Incorrect. Late binding is associated with runtime method selection, not this same-class overload example.",
      "D": "Correct. Different parameter lists for the same method name demonstrate overloading at compile time.",
      "Static polymorphism (method overloading)": "Correct. Different parameter lists for the same method name demonstrate overloading at compile time."
    }
  },
  {
    "id": "q9",
    "number": 9,
    "question": "While testing a login feature, a developer sends valid request data to an API endpoint, but the server responds indicating that the client lacks valid authentication credentials for the requested resource. Which HTTP status code is most likely associated with this response?",
    "options": [
      {
        "id": "A",
        "text": "200"
      },
      {
        "id": "B",
        "text": "401"
      },
      {
        "id": "C",
        "text": "404"
      },
      {
        "id": "D",
        "text": "500"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTTP",
    "difficulty": "Easy",
    "explanation": "HTTP status code 401 (Unauthorized) indicates that the request lacks valid authentication credentials.",
    "marks": 1,
    "optionExplanations": {
      "200": "Incorrect. 200 indicates a successful request.",
      "401": "Correct. 401 indicates that valid authentication credentials are missing or invalid.",
      "404": "Incorrect. 404 means the requested resource was not found.",
      "500": "Incorrect. 500 indicates an internal server error.",
      "A": "Incorrect. 200 indicates a successful request.",
      "B": "Correct. 401 indicates that valid authentication credentials are missing or invalid.",
      "C": "Incorrect. 404 means the requested resource was not found.",
      "D": "Incorrect. 500 indicates an internal server error."
    }
  },
  {
    "id": "q10",
    "number": 10,
    "question": "A public API needs to introduce breaking changes to its response structure, but the team wants existing client integrations to keep working without any change to the request URL. Which API versioning strategy best fits this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Include the version number in the URL path (e.g., /api/v2/resource)"
      },
      {
        "id": "B",
        "text": "Use a custom HTTP header to specify the desired API version (e.g., Api-Version: 2)"
      },
      {
        "id": "C",
        "text": "Directly modify the existing endpoint responses without any versioning"
      },
      {
        "id": "D",
        "text": "Use query parameters to specify the version (e.g., /api/resource?version=2)"
      }
    ],
    "correctAnswer": "B",
    "topic": "API Design",
    "difficulty": "Medium",
    "explanation": "A custom HTTP header lets clients request a specific version while the URL itself stays unchanged, keeping existing integrations working.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect for the stated requirement because the URL would change.",
      "Include the version number in the URL path (e.g., /api/v2/resource)": "Incorrect for the stated requirement because the URL would change.",
      "B": "Correct. The version can be selected through a header while keeping the URL unchanged.",
      "Use a custom HTTP header to specify the desired API version (e.g., Api-Version: 2)": "Correct. The version can be selected through a header while keeping the URL unchanged.",
      "C": "Incorrect. Breaking existing clients is exactly what versioning is intended to prevent.",
      "Directly modify the existing endpoint responses without any versioning": "Incorrect. Breaking existing clients is exactly what versioning is intended to prevent.",
      "D": "Incorrect for the stated requirement because the request URL changes.",
      "Use query parameters to specify the version (e.g., /api/resource?version=2)": "Incorrect for the stated requirement because the request URL changes."
    }
  },
  {
    "id": "q11",
    "number": 11,
    "question": "A development team wants every code commit to be automatically compiled and run against the unit test suite so that failures are caught immediately, before the change reaches the shared branch. Which DevOps building block addresses this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Artifact Management"
      },
      {
        "id": "B",
        "text": "Container Orchestration"
      },
      {
        "id": "C",
        "text": "Continuous Integration"
      },
      {
        "id": "D",
        "text": "Infrastructure as Code"
      }
    ],
    "correctAnswer": "C",
    "topic": "DevOps",
    "difficulty": "Medium",
    "explanation": "Continuous Integration automatically builds and tests every commit, catching failures early before they reach the shared branch.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Artifact management stores and manages build outputs and packages.",
      "Artifact Management": "Incorrect. Artifact management stores and manages build outputs and packages.",
      "B": "Incorrect. Container orchestration manages deployment and operation of containers.",
      "Container Orchestration": "Incorrect. Container orchestration manages deployment and operation of containers.",
      "C": "Correct. CI automatically builds and tests code changes, commonly on every commit.",
      "Continuous Integration": "Correct. CI automatically builds and tests code changes, commonly on every commit.",
      "D": "Incorrect. IaC defines infrastructure configuration in code rather than providing automated unit-test execution.",
      "Infrastructure as Code": "Incorrect. IaC defines infrastructure configuration in code rather than providing automated unit-test execution."
    }
  },
  {
    "id": "q12",
    "number": 12,
    "question": "Assume that a company maintains an Orders table, where each order references the customer who placed it through a CustomerID column that must match an existing record in the Customers table. Which type of key should the CustomerID column in the Orders table be designated as?",
    "options": [
      {
        "id": "A",
        "text": "Primary Key"
      },
      {
        "id": "B",
        "text": "Foreign Key"
      },
      {
        "id": "C",
        "text": "Candidate Key"
      },
      {
        "id": "D",
        "text": "Composite Key"
      }
    ],
    "correctAnswer": "B",
    "topic": "DBMS",
    "difficulty": "Medium",
    "explanation": "A Foreign Key is a column that references the Primary Key of another table, enforcing referential integrity, exactly as CustomerID does here.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A primary key uniquely identifies rows in its own table.",
      "Primary Key": "Incorrect. A primary key uniquely identifies rows in its own table.",
      "B": "Correct. CustomerID references a record in Customers and enforces referential integrity.",
      "Foreign Key": "Correct. CustomerID references a record in Customers and enforces referential integrity.",
      "C": "Incorrect. A candidate key is a column or set of columns that could uniquely identify rows.",
      "Candidate Key": "Incorrect. A candidate key is a column or set of columns that could uniquely identify rows.",
      "D": "Incorrect. A composite key consists of multiple columns used together as a key.",
      "Composite Key": "Incorrect. A composite key consists of multiple columns used together as a key."
    }
  },
  {
    "id": "q13",
    "number": 13,
    "question": "Consider two transactions running concurrently. Transaction A holds a lock on Table1 and waits for a lock on Table2. Transaction B holds a lock on Table2 and waits for a lock on Table1. Neither transaction can proceed. Which concurrency issue is this?",
    "options": [
      {
        "id": "A",
        "text": "Lost Update"
      },
      {
        "id": "B",
        "text": "Phantom Read"
      },
      {
        "id": "C",
        "text": "Deadlock"
      },
      {
        "id": "D",
        "text": "Dirty Read"
      }
    ],
    "correctAnswer": "C",
    "topic": "DBMS",
    "difficulty": "Medium",
    "explanation": "When two transactions each hold a lock the other needs and neither can proceed, this circular waiting condition is called a Deadlock.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Lost update occurs when one concurrent update overwrites another.",
      "Lost Update": "Incorrect. Lost update occurs when one concurrent update overwrites another.",
      "B": "Incorrect. Phantom reads involve seeing newly inserted/deleted rows during repeated queries.",
      "Phantom Read": "Incorrect. Phantom reads involve seeing newly inserted/deleted rows during repeated queries.",
      "C": "Correct. Each transaction waits for a lock held by the other, creating circular waiting.",
      "Deadlock": "Correct. Each transaction waits for a lock held by the other, creating circular waiting.",
      "D": "Incorrect. Dirty read occurs when a transaction reads uncommitted data from another transaction.",
      "Dirty Read": "Incorrect. Dirty read occurs when a transaction reads uncommitted data from another transaction."
    }
  },
  {
    "id": "q14",
    "number": 14,
    "question": "What is the main purpose of placing publicly accessible servers, such as a web server, in a Demilitarized Zone (DMZ) within a network architecture?",
    "options": [
      {
        "id": "A",
        "text": "To increase the server's available bandwidth"
      },
      {
        "id": "B",
        "text": "To isolate public-facing services from the internal trusted network"
      },
      {
        "id": "C",
        "text": "To reduce the physical distance data must travel"
      },
      {
        "id": "D",
        "text": "To automatically encrypt all outgoing traffic"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking",
    "difficulty": "Medium",
    "explanation": "A DMZ isolates public-facing servers from the internal trusted network, so that if the public server is compromised, the internal network remains protected.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. A DMZ is a security architecture, not a bandwidth-increasing mechanism.",
      "To increase the server's available bandwidth": "Incorrect. A DMZ is a security architecture, not a bandwidth-increasing mechanism.",
      "B": "Correct. The DMZ limits the impact if a public-facing server is compromised.",
      "To isolate public-facing services from the internal trusted network": "Correct. The DMZ limits the impact if a public-facing server is compromised.",
      "C": "Incorrect. DMZ placement does not primarily concern physical network distance.",
      "To reduce the physical distance data must travel": "Incorrect. DMZ placement does not primarily concern physical network distance.",
      "D": "Incorrect. Encryption is not the primary purpose of a DMZ.",
      "To automatically encrypt all outgoing traffic": "Incorrect. Encryption is not the primary purpose of a DMZ."
    }
  },
  {
    "id": "q15",
    "number": 15,
    "question": "Consider that an organization needs a VPN tunneling protocol that itself provides no encryption and is therefore typically paired with IPSec to secure the data it carries. Which protocol is this?",
    "options": [
      {
        "id": "A",
        "text": "Layer 2 Tunneling Protocol (L2TP)"
      },
      {
        "id": "B",
        "text": "Encapsulating Security Payload (ESP)"
      },
      {
        "id": "C",
        "text": "Secure Sockets Layer (SSL)"
      },
      {
        "id": "D",
        "text": "Internet Key Exchange (IKE)"
      }
    ],
    "correctAnswer": "A",
    "topic": "Networking",
    "difficulty": "Medium",
    "explanation": "L2TP creates the tunnel but does not encrypt data on its own, so it is commonly paired with IPSec (L2TP/IPSec) to provide encryption.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. L2TP provides tunneling but does not itself provide encryption, so it is commonly paired with IPsec.",
      "Layer 2 Tunneling Protocol (L2TP)": "Correct. L2TP provides tunneling but does not itself provide encryption, so it is commonly paired with IPsec.",
      "B": "Incorrect. ESP is an IPsec protocol component that provides security services including encryption.",
      "Encapsulating Security Payload (ESP)": "Incorrect. ESP is an IPsec protocol component that provides security services including encryption.",
      "C": "Incorrect. SSL/TLS provides secure communications rather than being the described non-encrypting tunneling protocol.",
      "Secure Sockets Layer (SSL)": "Incorrect. SSL/TLS provides secure communications rather than being the described non-encrypting tunneling protocol.",
      "D": "Incorrect. IKE negotiates security associations and keys for IPsec.",
      "Internet Key Exchange (IKE)": "Incorrect. IKE negotiates security associations and keys for IPsec."
    }
  },
  {
    "id": "q16",
    "number": 16,
    "question": "Assume that a company has two branch offices in different cities and wants to permanently connect their internal networks so that employees at either location can access shared resources as if on one network. Which type of VPN is best suited for this case?",
    "options": [
      {
        "id": "A",
        "text": "Remote-access VPN"
      },
      {
        "id": "B",
        "text": "Client-to-client VPN"
      },
      {
        "id": "C",
        "text": "SSL VPN"
      },
      {
        "id": "D",
        "text": "Site-to-site VPN"
      }
    ],
    "correctAnswer": "D",
    "topic": "Networking",
    "difficulty": "Easy",
    "explanation": "A site-to-site VPN permanently connects two or more separate networks, such as branch offices, letting them function as a single network.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. It primarily connects an individual remote user to a private network.",
      "Remote-access VPN": "Incorrect. It primarily connects an individual remote user to a private network.",
      "B": "Incorrect. This is not the standard model for permanently connecting branch networks.",
      "Client-to-client VPN": "Incorrect. This is not the standard model for permanently connecting branch networks.",
      "C": "Incorrect. SSL VPNs are commonly used for secure remote access rather than permanent site-to-site connectivity.",
      "SSL VPN": "Incorrect. SSL VPNs are commonly used for secure remote access rather than permanent site-to-site connectivity.",
      "D": "Correct. It connects entire networks, such as two company branch offices.",
      "Site-to-site VPN": "Correct. It connects entire networks, such as two company branch offices."
    }
  },
  {
    "id": "q17",
    "number": 17,
    "question": "Assume a network service continuously streams live sensor readings where occasional lost packets are acceptable, but any delay caused by retransmission would make the data useless. Which transport-layer protocol is best suited for this service?",
    "options": [
      {
        "id": "A",
        "text": "TCP"
      },
      {
        "id": "B",
        "text": "SMTP"
      },
      {
        "id": "C",
        "text": "FTP"
      },
      {
        "id": "D",
        "text": "UDP"
      }
    ],
    "correctAnswer": "D",
    "topic": "Computer Networks",
    "difficulty": "Medium",
    "explanation": "UDP is a connectionless protocol that does not retransmit lost packets, making it ideal when speed matters more than guaranteed delivery.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. TCP retransmits lost packets and prioritizes reliable delivery, which can introduce delay.",
      "TCP": "Incorrect. TCP retransmits lost packets and prioritizes reliable delivery, which can introduce delay.",
      "B": "Incorrect. SMTP is an application-layer protocol for email transfer.",
      "SMTP": "Incorrect. SMTP is an application-layer protocol for email transfer.",
      "C": "Incorrect. FTP is an application-layer file-transfer protocol.",
      "FTP": "Incorrect. FTP is an application-layer file-transfer protocol.",
      "D": "Correct. UDP avoids retransmission and is suitable when low latency is more important than guaranteed delivery.",
      "UDP": "Correct. UDP avoids retransmission and is suitable when low latency is more important than guaranteed delivery."
    }
  },
  {
    "id": "q18",
    "number": 18,
    "question": "Data from an application needs to be broken into packets and forwarded across multiple interconnected networks by selecting the best path to the destination. Which layer of the OSI Model is primarily responsible for this routing function?",
    "options": [
      {
        "id": "A",
        "text": "Data Link Layer"
      },
      {
        "id": "B",
        "text": "Network Layer"
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
    "correctAnswer": "B",
    "topic": "Computer Networks",
    "difficulty": "Medium",
    "explanation": "The Network Layer (Layer 3) is responsible for logical addressing and routing packets across interconnected networks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Layer 2 handles local network delivery and framing.",
      "Data Link Layer": "Incorrect. Layer 2 handles local network delivery and framing.",
      "B": "Correct. Layer 3 handles logical addressing and routing between networks.",
      "Network Layer": "Correct. Layer 3 handles logical addressing and routing between networks.",
      "C": "Incorrect. Layer 4 provides end-to-end transport services such as reliability and flow control.",
      "Transport Layer": "Incorrect. Layer 4 provides end-to-end transport services such as reliability and flow control.",
      "D": "Incorrect. The session layer manages communication sessions rather than IP routing.",
      "Session Layer": "Incorrect. The session layer manages communication sessions rather than IP routing."
    }
  },
  {
    "id": "q19",
    "number": 19,
    "question": "An enterprise wants a firewall that can inspect traffic up to the application layer, understanding protocols like HTTP and FTP to block malicious content hidden within otherwise valid traffic. Which type of firewall best meets this requirement?",
    "options": [
      {
        "id": "A",
        "text": "A basic packet-filtering firewall"
      },
      {
        "id": "B",
        "text": "A stateful packet inspection firewall"
      },
      {
        "id": "C",
        "text": "An application-layer (proxy) firewall"
      },
      {
        "id": "D",
        "text": "A circuit-level gateway"
      }
    ],
    "correctAnswer": "C",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "An application-layer firewall inspects traffic content at the application level, allowing it to detect malicious payloads within valid protocol traffic.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Basic packet filtering primarily examines packet headers rather than application content.",
      "A basic packet-filtering firewall": "Incorrect. Basic packet filtering primarily examines packet headers rather than application content.",
      "B": "Incorrect. Stateful firewalls track connection state but do not necessarily inspect application payloads deeply.",
      "A stateful packet inspection firewall": "Incorrect. Stateful firewalls track connection state but do not necessarily inspect application payloads deeply.",
      "C": "Correct. It can inspect application-level protocols and content.",
      "An application-layer (proxy) firewall": "Correct. It can inspect application-level protocols and content.",
      "D": "Incorrect. It operates around session/connection establishment rather than deeply inspecting application payloads.",
      "A circuit-level gateway": "Incorrect. It operates around session/connection establishment rather than deeply inspecting application payloads."
    }
  },
  {
    "id": "q20",
    "number": 20,
    "question": "A software team wants to build, test, and deploy applications without having to manage the underlying servers, operating systems, or runtime environments themselves. Based on this scenario, which cloud computing service model is most suitable?",
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
        "text": "Desktop as a Service (DaaS)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "PaaS provides a managed platform for building, testing, and deploying applications without the team having to manage servers or runtime environments.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. IaaS leaves more infrastructure management, including the OS, to the customer.",
      "Infrastructure as a Service (IaaS)": "Incorrect. IaaS leaves more infrastructure management, including the OS, to the customer.",
      "B": "Correct. PaaS manages the underlying infrastructure and runtime platform for application development and deployment.",
      "Platform as a Service (PaaS)": "Correct. PaaS manages the underlying infrastructure and runtime platform for application development and deployment.",
      "C": "Incorrect. SaaS provides a complete application to users rather than a development platform.",
      "Software as a Service (SaaS)": "Incorrect. SaaS provides a complete application to users rather than a development platform.",
      "D": "Incorrect. DaaS primarily delivers virtual desktops.",
      "Desktop as a Service (DaaS)": "Incorrect. DaaS primarily delivers virtual desktops."
    }
  },
  {
    "id": "q21",
    "number": 21,
    "question": "Assume that a company needs real-time access to data stored across several different database systems, presenting it to analysts as a single unified view without physically moving or duplicating the data. Which architectural layer best achieves this logical integration?",
    "options": [
      {
        "id": "A",
        "text": "Data caching layer storing temporary data replicas"
      },
      {
        "id": "B",
        "text": "Abstraction layer that logically unifies disparate data sources"
      },
      {
        "id": "C",
        "text": "Connection layer using direct database access protocols"
      },
      {
        "id": "D",
        "text": "Consumption layer utilizing middleware with abstracted APIs"
      }
    ],
    "correctAnswer": "B",
    "topic": "Data Architecture",
    "difficulty": "Hard",
    "explanation": "An abstraction layer logically unifies data from multiple sources into a single view without physically moving the underlying data.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Caching stores copies for performance; it does not primarily provide logical integration.",
      "Data caching layer storing temporary data replicas": "Incorrect. Caching stores copies for performance; it does not primarily provide logical integration.",
      "B": "Correct. An abstraction layer can present multiple sources as one logical view without physically consolidating the data.",
      "Abstraction layer that logically unifies disparate data sources": "Correct. An abstraction layer can present multiple sources as one logical view without physically consolidating the data.",
      "C": "Incorrect. Direct connections provide access but do not by themselves create a unified logical view.",
      "Connection layer using direct database access protocols": "Incorrect. Direct connections provide access but do not by themselves create a unified logical view.",
      "D": "Incorrect. The source describes logical integration at the abstraction layer.",
      "Consumption layer utilizing middleware with abstracted APIs": "Incorrect. The source describes logical integration at the abstraction layer."
    }
  },
  {
    "id": "q22",
    "number": 22,
    "question": "Assume an organization needs to run a mix of sensitive internal applications on dedicated infrastructure while also using public cloud resources for less sensitive, variable workloads. Which cloud deployment model best fits this requirement?",
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
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "A Hybrid Cloud combines private infrastructure for sensitive workloads with public cloud resources for variable, less sensitive workloads.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Public cloud alone does not provide the dedicated private infrastructure described.",
      "Public Cloud": "Incorrect. Public cloud alone does not provide the dedicated private infrastructure described.",
      "B": "Incorrect. Private cloud alone does not use public cloud resources for variable workloads.",
      "Private Cloud": "Incorrect. Private cloud alone does not use public cloud resources for variable workloads.",
      "C": "Correct. Hybrid cloud combines private infrastructure with public cloud resources.",
      "Hybrid Cloud": "Correct. Hybrid cloud combines private infrastructure with public cloud resources.",
      "D": "Incorrect. Community cloud is designed for organizations sharing common requirements or concerns.",
      "Community Cloud": "Incorrect. Community cloud is designed for organizations sharing common requirements or concerns."
    }
  },
  {
    "id": "q23",
    "number": 23,
    "question": "What is the technology that packages an application together with its dependencies into an isolated, lightweight unit that shares the host operating system's kernel, rather than emulating an entire separate operating system?",
    "options": [
      {
        "id": "A",
        "text": "Virtualization"
      },
      {
        "id": "B",
        "text": "Load Balancing"
      },
      {
        "id": "C",
        "text": "Clustering"
      },
      {
        "id": "D",
        "text": "Containerization"
      }
    ],
    "correctAnswer": "D",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "Containerization packages an application with its dependencies into a lightweight, isolated unit that shares the host OS kernel, unlike full virtualization.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Traditional virtualization emulates or abstracts complete virtual machines with their own guest operating systems.",
      "Virtualization": "Incorrect. Traditional virtualization emulates or abstracts complete virtual machines with their own guest operating systems.",
      "B": "Incorrect. Load balancing distributes traffic or workloads among resources.",
      "Load Balancing": "Incorrect. Load balancing distributes traffic or workloads among resources.",
      "C": "Incorrect. Clustering groups systems or resources for availability, scalability, or processing.",
      "Clustering": "Incorrect. Clustering groups systems or resources for availability, scalability, or processing.",
      "D": "Correct. Containers package applications and dependencies while sharing the host OS kernel.",
      "Containerization": "Correct. Containers package applications and dependencies while sharing the host OS kernel."
    }
  },
  {
    "id": "q24",
    "number": 24,
    "question": "Which cloud service model gives a customer full control over the operating system and installed applications, along with the ability to configure networking settings, while the provider manages only the underlying physical infrastructure?",
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
    "difficulty": "Medium",
    "explanation": "IaaS gives customers control over the OS, applications, and network configuration, while the provider manages only the physical infrastructure.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. SaaS provides a finished application and gives the customer little control over the underlying OS.",
      "SaaS": "Incorrect. SaaS provides a finished application and gives the customer little control over the underlying OS.",
      "B": "Incorrect. PaaS manages the OS/runtime layer for the customer.",
      "PaaS": "Incorrect. PaaS manages the OS/runtime layer for the customer.",
      "C": "Correct. IaaS provides virtualized infrastructure while allowing customer control over the OS, applications, and network configuration.",
      "IaaS": "Correct. IaaS provides virtualized infrastructure while allowing customer control over the OS, applications, and network configuration.",
      "D": "Incorrect. FaaS runs functions without requiring the customer to manage the underlying servers or OS.",
      "FaaS": "Incorrect. FaaS runs functions without requiring the customer to manage the underlying servers or OS."
    }
  },
  {
    "id": "q25",
    "number": 25,
    "question": "As part of a data center modernization initiative, the IT team pools storage capacity from multiple vendors into a shared resource pool that can be dynamically allocated to different workloads as demand changes. What benefit does this resource pooling primarily provide?",
    "options": [
      {
        "id": "A",
        "text": "It allows storage resources to be dynamically allocated and scaled to meet changing demand"
      },
      {
        "id": "B",
        "text": "It eliminates the need for any storage capacity planning"
      },
      {
        "id": "C",
        "text": "It removes the need for data backup mechanisms"
      },
      {
        "id": "D",
        "text": "It automatically encrypts all pooled data"
      }
    ],
    "correctAnswer": "A",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "Resource pooling allows storage capacity to be dynamically allocated across workloads, providing the elasticity to scale up or down as demand changes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Resource pooling enables capacity to be allocated where it is needed as workloads change.",
      "It allows storage resources to be dynamically allocated and scaled to meet changing demand": "Correct. Resource pooling enables capacity to be allocated where it is needed as workloads change.",
      "B": "Incorrect. Pooling improves flexibility but does not eliminate capacity planning.",
      "It eliminates the need for any storage capacity planning": "Incorrect. Pooling improves flexibility but does not eliminate capacity planning.",
      "C": "Incorrect. Resource pooling does not replace backups.",
      "It removes the need for data backup mechanisms": "Incorrect. Resource pooling does not replace backups.",
      "D": "Incorrect. Encryption is a separate security control.",
      "It automatically encrypts all pooled data": "Incorrect. Encryption is a separate security control."
    }
  },
  {
    "id": "q26",
    "number": 26,
    "question": "An embedded system encrypts data using a symmetric cipher. After deployment, the system fails to correctly decrypt some messages. Investigation shows the decryption routine uses a different key value than the one used during encryption. What is the most likely cause of the data loss?",
    "options": [
      {
        "id": "A",
        "text": "The decryption process uses an incorrect key, leading to incorrect character mapping"
      },
      {
        "id": "B",
        "text": "The encryption algorithm has an off-by-one indexing error"
      },
      {
        "id": "C",
        "text": "The ciphertext was corrupted during network transmission"
      },
      {
        "id": "D",
        "text": "The character set used for encryption is too small"
      }
    ],
    "correctAnswer": "A",
    "topic": "Cryptography",
    "difficulty": "Medium",
    "explanation": "Using a different key for decryption than was used for encryption will produce incorrect character mapping and garbled output, exactly as described.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Symmetric decryption requires the appropriate corresponding key.",
      "The decryption process uses an incorrect key, leading to incorrect character mapping": "Correct. Symmetric decryption requires the appropriate corresponding key.",
      "B": "Incorrect. The investigation specifically identifies a different decryption key as the cause.",
      "The encryption algorithm has an off-by-one indexing error": "Incorrect. The investigation specifically identifies a different decryption key as the cause.",
      "C": "Incorrect. No transmission corruption is indicated in the scenario.",
      "The ciphertext was corrupted during network transmission": "Incorrect. No transmission corruption is indicated in the scenario.",
      "D": "Incorrect. Character-set size is not the stated cause.",
      "The character set used for encryption is too small": "Incorrect. Character-set size is not the stated cause."
    }
  },
  {
    "id": "q27",
    "number": 27,
    "question": "In a corporate Wi-Fi deployment, the security team wants an EAP authentication method that provides mutual authentication using digital certificates installed on both the server and every client device, offering the strongest security. Which EAP method is this?",
    "options": [
      {
        "id": "A",
        "text": "EAP-MD5"
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
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Hard",
    "explanation": "EAP-TLS uses certificates on both the client and server for mutual authentication, making it the strongest of the common EAP methods.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. EAP-MD5 does not provide the certificate-based mutual authentication described.",
      "EAP-MD5": "Incorrect. EAP-MD5 does not provide the certificate-based mutual authentication described.",
      "B": "Correct. EAP-TLS uses certificates for both server and client authentication.",
      "EAP-TLS": "Correct. EAP-TLS uses certificates for both server and client authentication.",
      "C": "Incorrect. EAP-TTLS commonly authenticates the server with a certificate and protects an inner authentication method rather than requiring client certificates in the same way as EAP-TLS.",
      "EAP-TTLS": "Incorrect. EAP-TTLS commonly authenticates the server with a certificate and protects an inner authentication method rather than requiring client certificates in the same way as EAP-TLS.",
      "D": "Incorrect. PEAP typically uses a server certificate and protects an inner authentication method.",
      "PEAP": "Incorrect. PEAP typically uses a server certificate and protects an inner authentication method."
    }
  },
  {
    "id": "q28",
    "number": 28,
    "question": "Assume that you want to find the count of the total occurrences of the character 'a' in the FullName field, fetched from the Employees table. Which SQL query correctly achieves this?",
    "options": [
      {
        "id": "A",
        "text": "FROM Employees\nSELECT FullName, COUNT(FullName) - COUNT(REPLACE(FullName, 'a', ''));"
      },
      {
        "id": "B",
        "text": "SELECT FullName, COUNT(FullName) - COUNT(REPLACE(FullName, 'a', ''))\nFROM Employees;"
      },
      {
        "id": "C",
        "text": "SELECT FullName, LENGTH(FullName) - LENGTH(REPLACE(FullName, 'a', ''))\nFROM Employees;"
      },
      {
        "id": "D",
        "text": "FROM Employees\nSELECT FullName, LENGTH(FullName) - LENGTH(REPLACE(FullName, 'a', ''));"
      }
    ],
    "correctAnswer": "C",
    "topic": "SQL",
    "difficulty": "Medium",
    "explanation": "Subtracting the length of the string with the character removed from its original length gives the count of occurrences of that character.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. In SQL, the SELECT clause must precede FROM. Additionally, COUNT() counts rows, not string character lengths.",
      "FROM Employees\nSELECT FullName, COUNT(FullName) - COUNT(REPLACE(FullName, 'a', ''));": "Incorrect. In SQL, the SELECT clause must precede FROM. Additionally, COUNT() counts rows, not string character lengths.",
      "B": "Incorrect. COUNT() calculates table row counts or non-null values, not individual character occurrences within a string.",
      "SELECT FullName, COUNT(FullName) - COUNT(REPLACE(FullName, 'a', ''))\nFROM Employees;": "Incorrect. COUNT() calculates table row counts or non-null values, not individual character occurrences within a string.",
      "C": "Correct. LENGTH(FullName) minus LENGTH(REPLACE(FullName, 'a', '')) calculates the exact occurrence count of 'a'.",
      "SELECT FullName, LENGTH(FullName) - LENGTH(REPLACE(FullName, 'a', ''))\nFROM Employees;": "Correct. LENGTH(FullName) minus LENGTH(REPLACE(FullName, 'a', '')) calculates the exact occurrence count of 'a'.",
      "D": "Incorrect. The clause order is invalid in standard ANSI SQL (FROM cannot precede SELECT here).",
      "FROM Employees\nSELECT FullName, LENGTH(FullName) - LENGTH(REPLACE(FullName, 'a', ''));": "Incorrect. The clause order is invalid in standard ANSI SQL (FROM cannot precede SELECT here)."
    }
  },
  {
    "id": "q29",
    "number": 29,
    "question": "Assume that you want to fetch employee names along with their department names, and you also want to display employees even if they are not yet assigned to a department. Which SQL query achieves this?",
    "options": [
      {
        "id": "A",
        "text": "SELECT E.EmpName, D.DeptName \nFROM Employees E \nLEFT JOIN Departments D \n  ON E.DeptId = D.DeptId;"
      },
      {
        "id": "B",
        "text": "SELECT E.EmpName \nFROM D.Departments \nWHERE Employees E \nLEFT JOIN \nGROUP BY Departments D IN E.DeptId = D.DeptId;"
      },
      {
        "id": "C",
        "text": "SELECT E.EmpName, D.DeptName \nFROM Employees E \nLEFT JOIN \nGROUP BY Departments D IN E.DeptId = D.DeptId;"
      },
      {
        "id": "D",
        "text": "SELECT E.EmpName, D.DeptName\nFROM Employees E\nRIGHT JOIN Departments D\n  ON E.DeptId = D.DeptId;"
      }
    ],
    "correctAnswer": "A",
    "topic": "SQL",
    "difficulty": "Medium",
    "explanation": "A LEFT JOIN returns all rows from the left table (Employees) even when there is no matching row in the right table (Departments).",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. A LEFT JOIN returns all rows from the left table (Employees) even when there is no matching row in the right table (Departments).",
      "SELECT E.EmpName, D.DeptName \nFROM Employees E \nLEFT JOIN Departments D \n  ON E.DeptId = D.DeptId;": "Correct. A LEFT JOIN returns all rows from the left table (Employees) even when there is no matching row in the right table (Departments).",
      "B": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT E.EmpName \nFROM D.Departments \nWHERE Employees E \nLEFT JOIN \nGROUP BY Departments D IN E.DeptId = D.DeptId;": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "C": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "SELECT E.EmpName, D.DeptName \nFROM Employees E \nLEFT JOIN \nGROUP BY Departments D IN E.DeptId = D.DeptId;": "Incorrect. This join condition or syntax does not properly link relational keys.",
      "D": "Incorrect. A RIGHT JOIN would return all departments, not necessarily employees without departments.",
      "SELECT E.EmpName, D.DeptName\nFROM Employees E\nRIGHT JOIN Departments D\n  ON E.DeptId = D.DeptId;": "Incorrect. A RIGHT JOIN would return all departments, not necessarily employees without departments."
    }
  },
  {
    "id": "q30",
    "number": 30,
    "question": "Write pseudocode to initialize an array named scores with values [72, 88, 91, 65, 79] and print the third element of the array.",
    "options": [
      {
        "id": "A",
        "text": "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[3]"
      },
      {
        "id": "B",
        "text": "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[2]"
      },
      {
        "id": "C",
        "text": "ARRAY scores = [72, 88, 91, 65, 79]\nPRINT scores[2]"
      },
      {
        "id": "D",
        "text": "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[4]"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "Using 1-based indexing (as declared with explicit assignment scores[1] through scores[5]), scores[3] correctly holds and prints the third element, 91.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Using 1-based indexing (as declared with explicit assignment scores[1] through scores[5]), scores[3] correctly holds and prints the third element, 91.",
      "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[3]": "Correct. Using 1-based indexing (as declared with explicit assignment scores[1] through scores[5]), scores[3] correctly holds and prints the third element, 91.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[2]": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "ARRAY scores = [72, 88, 91, 65, 79]\nPRINT scores[2]": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Incorrect. scores[4] accesses the 5th element in 1-based indexing (or last in 0-based), not the 3rd.",
      "ARRAY scores[5] = [72, 88, 91, 65, 79]\nPRINT scores[4]": "Incorrect. scores[4] accesses the 5th element in 1-based indexing (or last in 0-based), not the 3rd."
    }
  },
  {
    "id": "q31",
    "number": 31,
    "question": "Which of the given options (as values for s) could possibly print the output as \"Valid\" in the following pseudocode?",
    "options": [
      {
        "id": "A",
        "text": "moon12"
      },
      {
        "id": "B",
        "text": "MOON12"
      },
      {
        "id": "C",
        "text": "moon123"
      },
      {
        "id": "D",
        "text": "moon1a"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "The pattern requires exactly 4 lowercase letters followed by exactly 2 digits; 'moon12' matches this pattern exactly.",
    "marks": 1,
    "code": "function validCheck(string s):\nif s matches \"[a-z]{4}[0-9]{2}\"\nthen print \"Valid\"\nelse\nthen print \"Not Valid\"\nendif\nend function validCheck",
    "optionExplanations": {
      "A": "Correct. It contains exactly four lowercase letters followed by two digits.",
      "moon12": "Correct. It contains exactly four lowercase letters followed by two digits.",
      "B": "Incorrect. The letters are uppercase, but the pattern requires lowercase letters.",
      "MOON12": "Incorrect. The letters are uppercase, but the pattern requires lowercase letters.",
      "C": "Incorrect. It contains three digits instead of exactly two.",
      "moon123": "Incorrect. It contains three digits instead of exactly two.",
      "D": "Incorrect. The final character is a letter instead of a digit.",
      "moon1a": "Incorrect. The final character is a letter instead of a digit."
    }
  },
  {
    "id": "q32",
    "number": 32,
    "question": "What will be the output of the depicted pseudo code?",
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "52"
      },
      {
        "id": "C",
        "text": "45"
      },
      {
        "id": "D",
        "text": "41"
      }
    ],
    "correctAnswer": "D",
    "topic": "Pseudocode",
    "difficulty": "Hard",
    "explanation": "Iteration 1: b=6+4=10, b=(10+3)+5=18, b=(18&2)+18=20. Iteration 2: b=6+20=26, b=(26+3)+5=34, b=(34&2)+34=36. Final a+b = 5+36 = 41.",
    "marks": 1,
    "code": "Integer a,b,c\nSet a=5, b=4, c=3\n\nfor(each c from 1 to 2)\nb=6+b\nb=(b+3)+a\nb=(b&2)+b\nEnd for\n\nPrint a+b",
    "optionExplanations": {
      "36": "Incorrect. 36 is the final value of b before adding a; the requested output is a+b = 41.",
      "41": "Correct. After two iterations b becomes 36, so a+b = 5+36 = 41.",
      "45": "Incorrect. The intermediate values do not lead to 45.",
      "52": "Incorrect. The loop calculation does not produce 52 for a+b.",
      "A": "Incorrect. 36 is the final value of b before adding a; the requested output is a+b = 41.",
      "B": "Incorrect. The loop calculation does not produce 52 for a+b.",
      "C": "Incorrect. The intermediate values do not lead to 45.",
      "D": "Correct. After two iterations b becomes 36, so a+b = 5+36 = 41."
    }
  },
  {
    "id": "q33",
    "number": 33,
    "question": "What will be the output of the given pseudo code?",
    "options": [
      {
        "id": "A",
        "text": "6.0"
      },
      {
        "id": "B",
        "text": "10.0"
      },
      {
        "id": "C",
        "text": "8.0"
      },
      {
        "id": "D",
        "text": "12.0"
      }
    ],
    "correctAnswer": "C",
    "topic": "Pseudocode",
    "difficulty": "Hard",
    "explanation": "arr[0][1] becomes (4&2)&6 = 0. The if-condition (2-0)>(6+0) is false, so arr[0][0] stays 2. Then arr[0][0] = 10 & 2 = 2. Finally arr[1][1]+arr[0][0] = 6+2 = 8.0.",
    "marks": 1,
    "code": "Integer j\nInteger arr[2][2] = {{2, 3}, {4, 6}}\n\narr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]\n\nif ((arr[0][0] - arr[0][1]) > (arr[1][1] + arr[0][1]))\narr[0][0] = (arr[1][1] + arr[1][1]) + arr[0][0]\nEnd if\n\narr[0][0] = (2+8) & arr[0][0]\n\nPrint arr[1][1] + arr[0][0]",
    "optionExplanations": {
      "A": "Incorrect. The final expression is 6+2, not 6.",
      "6.0": "Incorrect. The final expression is 6+2, not 6.",
      "B": "Incorrect. Although 2+8 gives 10, the bitwise AND with arr[0][0] changes the value to 2.",
      "10.0": "Incorrect. Although 2+8 gives 10, the bitwise AND with arr[0][0] changes the value to 2.",
      "C": "Correct. arr[0][1]=0, the condition is false, arr[0][0]=10&2=2, and 6+2=8.",
      "8.0": "Correct. arr[0][1]=0, the condition is false, arr[0][0]=10&2=2, and 6+2=8.",
      "D": "Incorrect. The final values do not sum to 12.",
      "12.0": "Incorrect. The final values do not sum to 12."
    }
  },
  {
    "id": "q34",
    "number": 34,
    "question": "What does the following pseudocode accomplish?",
    "options": [
      {
        "id": "A",
        "text": "Calculates the factorial of input_number"
      },
      {
        "id": "B",
        "text": "Computes the nth Fibonacci number"
      },
      {
        "id": "C",
        "text": "Multiplies input_number by its predecessors"
      },
      {
        "id": "D",
        "text": "Determines the square of input_number"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algorithms",
    "difficulty": "Medium",
    "explanation": "The function recursively adds the two preceding results, which is the definition of the Fibonacci sequence.",
    "marks": 1,
    "code": "FUNCTION fib(n):\nIF n is 0 OR n is 1\nRETURN n\nELSE:\nRETURN fib(n-1) + fib(n-2)\nEND IF\nEND FUNCTION fib\n\nresult = fib(input_number)\nPRINT result",
    "optionExplanations": {
      "A": "Incorrect. Factorial uses multiplication, whereas this function adds two preceding Fibonacci values.",
      "Calculates the factorial of input_number": "Incorrect. Factorial uses multiplication, whereas this function adds two preceding Fibonacci values.",
      "B": "Correct. fib(n)=fib(n-1)+fib(n-2) with base cases 0 and 1 defines Fibonacci.",
      "Computes the nth Fibonacci number": "Correct. fib(n)=fib(n-1)+fib(n-2) with base cases 0 and 1 defines Fibonacci.",
      "C": "Incorrect. No multiplication is performed.",
      "Multiplies input_number by its predecessors": "Incorrect. No multiplication is performed.",
      "D": "Incorrect. No squaring operation is performed.",
      "Determines the square of input_number": "Incorrect. No squaring operation is performed."
    }
  },
  {
    "id": "q35",
    "number": 35,
    "question": "What will be the output of the following pseudo code for a=2, b=3, c=5?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "13"
      },
      {
        "id": "C",
        "text": "37"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "The outer condition (2+5+3)<(4+3-2), i.e. 10<5, is false, so no variables change. Print a+b+c = 2+3+5 = 10.",
    "marks": 1,
    "code": "if((a+c+b)<(4+b-a))\na=b+c\n\nif((b+c+a)<(10+a+5))\na=(b+a)+b\nElse\nb=(4+5)+a\nEnd if\n\nc=(b+c)+c\nEnd if\n\nPrint a+b+c",
    "optionExplanations": {
      "10": "Correct. The outer condition 10<5 is false, so the values remain 2, 3, and 5; their sum is 10.",
      "13": "Incorrect. No branch changes the variables because the outer condition is false.",
      "25": "Incorrect. The original values sum to 10, not 25.",
      "37": "Incorrect. The calculation does not reach 37.",
      "A": "Correct. The outer condition 10<5 is false, so the values remain 2, 3, and 5; their sum is 10.",
      "B": "Incorrect. No branch changes the variables because the outer condition is false.",
      "C": "Incorrect. The calculation does not reach 37.",
      "D": "Incorrect. The original values sum to 10, not 25."
    }
  },
  {
    "id": "q36",
    "number": 36,
    "question": "What will be the output of the following pseudo code for a=3, b=2, c=9?",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "The outer condition (3+9+9)<(7+3), i.e. 21<10, is false, so nothing changes. The return value is a+b+c = 3+2+9 = 14.",
    "marks": 1,
    "code": "if((a+9+c)<(7+a))\na=(a+b)+b\n\nif((a+b+c)<(b+c+a))\na=c+c\nElse\nc=(c+a)+b\nEnd if\n\nc=8+b\nEnd if\n\nreturn a+b+c",
    "optionExplanations": {
      "10": "Incorrect. The original values sum to 14.",
      "14": "Correct. The outer condition 21<10 is false, so the values remain 3, 2, and 9; their sum is 14.",
      "19": "Incorrect. No branch executes to produce 19.",
      "21": "Incorrect. 21 is part of the condition calculation, not the returned result.",
      "A": "Correct. The outer condition 21<10 is false, so the values remain 3, 2, and 9; their sum is 14.",
      "B": "Incorrect. 21 is part of the condition calculation, not the returned result.",
      "C": "Incorrect. The original values sum to 14.",
      "D": "Incorrect. No branch executes to produce 19."
    }
  },
  {
    "id": "q37",
    "number": 37,
    "question": "Which chipset component on a motherboard traditionally manages high-speed communication between the CPU, RAM, and graphics card, while a separate chip manages slower peripherals such as USB and storage?",
    "options": [
      {
        "id": "A",
        "text": "CMOS Battery"
      },
      {
        "id": "B",
        "text": "System Bus"
      },
      {
        "id": "C",
        "text": "BIOS Chip"
      },
      {
        "id": "D",
        "text": "Northbridge"
      }
    ],
    "correctAnswer": "D",
    "topic": "Computer Architecture",
    "difficulty": "Medium",
    "explanation": "The Northbridge chipset traditionally handles high-speed communication between the CPU, RAM, and graphics card, while the Southbridge manages slower peripherals.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. It maintains certain motherboard settings/clock power and is not the high-speed chipset component.",
      "CMOS Battery": "Incorrect. It maintains certain motherboard settings/clock power and is not the high-speed chipset component.",
      "B": "Incorrect. The system bus is a communication pathway, not the traditional chipset component described.",
      "System Bus": "Incorrect. The system bus is a communication pathway, not the traditional chipset component described.",
      "C": "Incorrect. BIOS/firmware initializes and configures hardware; it is not the traditional CPU/RAM/graphics chipset.",
      "BIOS Chip": "Incorrect. BIOS/firmware initializes and configures hardware; it is not the traditional CPU/RAM/graphics chipset.",
      "D": "Correct. Traditionally, Northbridge handled high-speed communication among CPU, RAM, and graphics.",
      "Northbridge": "Correct. Traditionally, Northbridge handled high-speed communication among CPU, RAM, and graphics."
    }
  },
  {
    "id": "q38",
    "number": 38,
    "question": "Which storage interface standard, an evolution of IDE technology, added support for larger drive capacities and built-in drive controller caching for faster data transfer?",
    "options": [
      {
        "id": "A",
        "text": "Fibre Channel"
      },
      {
        "id": "B",
        "text": "Serial Attached SCSI (SAS)"
      },
      {
        "id": "C",
        "text": "Enhanced Integrated Drive Electronics (EIDE)"
      },
      {
        "id": "D",
        "text": "Parallel ATA (PATA) Legacy"
      }
    ],
    "correctAnswer": "C",
    "topic": "Computer Architecture",
    "difficulty": "Medium",
    "explanation": "Enhanced Integrated Drive Electronics (EIDE) extended IDE with support for larger capacities and built-in controller caching for faster transfers.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Fibre Channel is a high-speed storage networking technology, not the described IDE evolution.",
      "Fibre Channel": "Incorrect. Fibre Channel is a high-speed storage networking technology, not the described IDE evolution.",
      "B": "Incorrect. SAS is a separate serial storage interface technology.",
      "Serial Attached SCSI (SAS)": "Incorrect. SAS is a separate serial storage interface technology.",
      "C": "Correct. EIDE extended the older IDE standard with improved capacity and transfer capabilities.",
      "Enhanced Integrated Drive Electronics (EIDE)": "Correct. EIDE extended the older IDE standard with improved capacity and transfer capabilities.",
      "D": "Incorrect. PATA is the older parallel ATA/IDE family rather than the described enhanced evolution.",
      "Parallel ATA (PATA) Legacy": "Incorrect. PATA is the older parallel ATA/IDE family rather than the described enhanced evolution."
    }
  },
  {
    "id": "q39",
    "number": 39,
    "question": "You are designing the file management subsystem of an operating system. Besides creating, deleting, and organizing files and directories, which additional capability is most critical for ensuring that files are not lost after a sudden power failure mid-write?",
    "options": [
      {
        "id": "A",
        "text": "Implementing file compression"
      },
      {
        "id": "B",
        "text": "Journaling to track and recover incomplete write operations"
      },
      {
        "id": "C",
        "text": "Supporting symbolic links"
      },
      {
        "id": "D",
        "text": "Enforcing file naming conventions"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "Journaling records pending write operations so the file system can recover to a consistent state after a crash or power failure, preventing data loss.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Compression reduces storage size but does not provide crash recovery.",
      "Implementing file compression": "Incorrect. Compression reduces storage size but does not provide crash recovery.",
      "B": "Correct. Journaling records filesystem changes so recovery can restore consistency after a crash.",
      "Journaling to track and recover incomplete write operations": "Correct. Journaling records filesystem changes so recovery can restore consistency after a crash.",
      "C": "Incorrect. Symbolic links provide alternate references to files/directories and do not provide crash recovery.",
      "Supporting symbolic links": "Incorrect. Symbolic links provide alternate references to files/directories and do not provide crash recovery.",
      "D": "Incorrect. Naming rules do not protect incomplete writes from power failure.",
      "Enforcing file naming conventions": "Incorrect. Naming rules do not protect incomplete writes from power failure."
    }
  },
  {
    "id": "q40",
    "number": 40,
    "question": "A presenter wants each slide in a self-running kiosk presentation to automatically advance to the next slide after 10 seconds, without needing to click. Which PowerPoint feature should be used?",
    "options": [
      {
        "id": "A",
        "text": "Slide Transition 'Advance Slide After' timing"
      },
      {
        "id": "B",
        "text": "Custom Animation 'On Click' trigger"
      },
      {
        "id": "C",
        "text": "Rehearse Timings recorded narration only"
      },
      {
        "id": "D",
        "text": "Slide Master background formatting"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS PowerPoint",
    "difficulty": "Easy",
    "explanation": "Setting the 'Advance Slide After' timing under Slide Transitions makes the presentation move to the next slide automatically after the specified duration.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. This transition setting automatically advances the slide after the specified time.",
      "Slide Transition 'Advance Slide After' timing": "Correct. This transition setting automatically advances the slide after the specified time.",
      "B": "Incorrect. On Click requires a click and controls an animation rather than automatic slide advancement.",
      "Custom Animation 'On Click' trigger": "Incorrect. On Click requires a click and controls an animation rather than automatic slide advancement.",
      "C": "Incorrect. Rehearse Timings can record timings, but the stated direct feature is Advance Slide After.",
      "Rehearse Timings recorded narration only": "Incorrect. Rehearse Timings can record timings, but the stated direct feature is Advance Slide After.",
      "D": "Incorrect. Slide Master controls shared slide design and formatting, not automatic advancement.",
      "Slide Master background formatting": "Incorrect. Slide Master controls shared slide design and formatting, not automatic advancement."
    }
  },
  {
    "id": "q41",
    "number": 41,
    "question": "Priya is formatting a long report and wants to insert a page break to start a new section on a fresh page, without using the ribbon menu. Which keyboard shortcut in MS Word does this?",
    "options": [
      {
        "id": "A",
        "text": "Shift + F5"
      },
      {
        "id": "B",
        "text": "Alt + Shift + D"
      },
      {
        "id": "C",
        "text": "Ctrl + Shift + T"
      },
      {
        "id": "D",
        "text": "Ctrl + Enter"
      }
    ],
    "correctAnswer": "D",
    "topic": "MS Word",
    "difficulty": "Easy",
    "explanation": "Ctrl + Enter inserts a manual page break in MS Word, starting the following content on a new page.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. In Word, this shortcut is not the standard manual page-break command.",
      "Shift + F5": "Incorrect. In Word, this shortcut is not the standard manual page-break command.",
      "B": "Incorrect. This is not the manual page-break shortcut.",
      "Alt + Shift + D": "Incorrect. This is not the manual page-break shortcut.",
      "C": "Incorrect. This is not the standard manual page-break shortcut.",
      "Ctrl + Shift + T": "Incorrect. This is not the standard manual page-break shortcut.",
      "D": "Correct. Ctrl + Enter inserts a manual page break.",
      "Ctrl + Enter": "Correct. Ctrl + Enter inserts a manual page break."
    }
  },
  {
    "id": "q42",
    "number": 42,
    "question": "In the dataset below, what is the result of the following formula? =INDEX(A2:A9, MATCH(MIN(D2:D9), D2:D9, 0))",
    "options": [
      {
        "id": "A",
        "text": "Mug"
      },
      {
        "id": "B",
        "text": "Monitor"
      },
      {
        "id": "C",
        "text": "Desk"
      },
      {
        "id": "D",
        "text": "Chair"
      }
    ],
    "correctAnswer": "C",
    "topic": "MS Excel",
    "difficulty": "Medium",
    "explanation": "MIN(D2:D9) finds the smallest Units Sold value, which is 5 (Desk's row). MATCH locates that row, and INDEX returns the corresponding Product name, Desk.",
    "marks": 1,
    "data": {
      "columns": [
        "Product",
        "Category",
        "Unit Price",
        "Units Sold",
        "Region"
      ],
      "rows": [
        [
          "Chair",
          "Furniture",
          80,
          12,
          "North"
        ],
        [
          "Desk",
          "Furniture",
          150,
          5,
          "South"
        ],
        [
          "Lamp",
          "Accessories",
          25,
          40,
          "North"
        ],
        [
          "Shelf",
          "Furniture",
          60,
          18,
          "East"
        ],
        [
          "Monitor",
          "Electronics",
          220,
          9,
          "West"
        ],
        [
          "Headset",
          "Electronics",
          45,
          30,
          "South"
        ],
        [
          "Mug",
          "Accessories",
          8,
          60,
          "North"
        ],
        [
          "Speaker",
          "Electronics",
          70,
          22,
          "East"
        ]
      ]
    },
    "optionExplanations": {
      "A": "Incorrect. Mug has 60 units sold, which is not the minimum.",
      "Mug": "Incorrect. Mug has 60 units sold, which is not the minimum.",
      "B": "Incorrect. Monitor has 9 units sold.",
      "Monitor": "Incorrect. Monitor has 9 units sold.",
      "C": "Correct. Desk has the minimum Units Sold value of 5, so MATCH finds its row and INDEX returns Desk.",
      "Desk": "Correct. Desk has the minimum Units Sold value of 5, so MATCH finds its row and INDEX returns Desk.",
      "D": "Incorrect. Chair has 12 units sold.",
      "Chair": "Incorrect. Chair has 12 units sold."
    }
  },
  {
    "id": "q43",
    "number": 43,
    "question": "A company recently suffered a security breach where an employee accessed files outside their job role's requirements. As the IT manager tasked with preventing recurrence, which operating system property will you prioritize?",
    "options": [
      {
        "id": "A",
        "text": "User interface customization"
      },
      {
        "id": "B",
        "text": "Multitasking"
      },
      {
        "id": "C",
        "text": "Virtual memory"
      },
      {
        "id": "D",
        "text": "Access control"
      }
    ],
    "correctAnswer": "D",
    "topic": "Operating Systems",
    "difficulty": "Easy",
    "explanation": "Access control restricts what resources each user or process may access, directly addressing unauthorized access to files outside an employee's role.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. UI customization does not prevent unauthorized file access.",
      "User interface customization": "Incorrect. UI customization does not prevent unauthorized file access.",
      "B": "Incorrect. Multitasking allows multiple processes to run and is unrelated to access permissions.",
      "Multitasking": "Incorrect. Multitasking allows multiple processes to run and is unrelated to access permissions.",
      "C": "Incorrect. Virtual memory manages memory abstraction rather than authorization.",
      "Virtual memory": "Incorrect. Virtual memory manages memory abstraction rather than authorization.",
      "D": "Correct. Access control restricts users/processes to authorized resources.",
      "Access control": "Correct. Access control restricts users/processes to authorized resources."
    }
  },
  {
    "id": "q44",
    "number": 44,
    "question": "An OS allows programs to use more memory than is physically available in RAM by temporarily transferring inactive memory pages to disk. What is this OS feature called?",
    "options": [
      {
        "id": "A",
        "text": "Paging only on boot"
      },
      {
        "id": "B",
        "text": "Multithreading"
      },
      {
        "id": "C",
        "text": "Caching"
      },
      {
        "id": "D",
        "text": "Virtual memory"
      }
    ],
    "correctAnswer": "D",
    "topic": "Operating Systems",
    "difficulty": "Easy",
    "explanation": "Virtual memory lets the OS use disk space to extend the amount of usable memory beyond physical RAM, swapping pages in and out as needed.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The described memory-management mechanism operates during program execution, not only at boot.",
      "Paging only on boot": "Incorrect. The described memory-management mechanism operates during program execution, not only at boot.",
      "B": "Incorrect. Multithreading allows multiple execution threads and does not extend physical memory.",
      "Multithreading": "Incorrect. Multithreading allows multiple execution threads and does not extend physical memory.",
      "C": "Incorrect. Caching stores frequently used data for faster access rather than extending available memory in this sense.",
      "Caching": "Incorrect. Caching stores frequently used data for faster access rather than extending available memory in this sense.",
      "D": "Correct. Virtual memory allows the OS to use disk-backed storage to extend the usable address space beyond physical RAM.",
      "Virtual memory": "Correct. Virtual memory allows the OS to use disk-backed storage to extend the usable address space beyond physical RAM."
    }
  },
  {
    "id": "q45",
    "number": 45,
    "question": "In a preemptive multitasking OS, what mechanism allows the operating system to forcibly interrupt a running process to give CPU time to another process?",
    "options": [
      {
        "id": "A",
        "text": "Cooperative yielding by the running process"
      },
      {
        "id": "B",
        "text": "Manual termination by the user"
      },
      {
        "id": "C",
        "text": "The scheduler using timer interrupts"
      },
      {
        "id": "D",
        "text": "Restarting the operating system"
      }
    ],
    "correctAnswer": "C",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "In preemptive multitasking, the scheduler uses timer interrupts to forcibly reclaim the CPU from a running process and allocate it to another.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Cooperative scheduling requires the running process to voluntarily yield.",
      "Cooperative yielding by the running process": "Incorrect. Cooperative scheduling requires the running process to voluntarily yield.",
      "B": "Incorrect. Preemption is performed by the operating system scheduler, not manually by the user.",
      "Manual termination by the user": "Incorrect. Preemption is performed by the operating system scheduler, not manually by the user.",
      "C": "Correct. Timer interrupts allow the OS to regain control and schedule another process.",
      "The scheduler using timer interrupts": "Correct. Timer interrupts allow the OS to regain control and schedule another process.",
      "D": "Incorrect. Restarting the OS is not a normal scheduling mechanism.",
      "Restarting the operating system": "Incorrect. Restarting the OS is not a normal scheduling mechanism."
    }
  }
];

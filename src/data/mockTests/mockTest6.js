// src/data/mockTests/mockTest6.js
// Technical MCQ Practice Set 6
// Total Questions: 45 | Marks: 45 (+1 Mark/Q) | Duration: 45 Mins

export const mockTest6 = [
  {
    "id": "tech-mcq-s6-q01",
    "number": 1,
    "question": "During a high-traffic deployment, an application operations team notices that pods in a Kubernetes cluster are being terminated due to readiness probe failures while database connection pools are exhausted. What infrastructure component or mechanism should engineers investigate first to prevent cascading rollout failures?",
    "options": [
      {
        "id": "A",
        "text": "Increase the physical disk block size of the underlying hypervisor nodes."
      },
      {
        "id": "B",
        "text": "Evaluate database connection limits, pooling configurations, and liveness/readiness probe timeouts."
      },
      {
        "id": "C",
        "text": "Immediately convert all container architectures into bare-metal virtual machines."
      },
      {
        "id": "D",
        "text": "Disable all security group firewalls across internal network interfaces."
      }
    ],
    "correctAnswer": "B",
    "topic": "DevOps / Kubernetes",
    "difficulty": "Medium",
    "explanation": "Readiness probe failures tied to database exhaustion point directly to connection pool limits or probe timeout configurations during traffic spikes.",
    "marks": 1,
    "optionExplanations": {
      "A": "Disk block size on hypervisor nodes has no bearing on pod readiness probes or database connection pool exhaustion.",
      "Increase the physical disk block size of the underlying hypervisor nodes.": "Disk block size on hypervisor nodes has no bearing on pod readiness probes or database connection pool exhaustion.",
      "B": "Readiness probe failures tied to database exhaustion point directly to connection pool limits or probe timeout configurations during traffic spikes.",
      "Evaluate database connection limits, pooling configurations, and liveness/readiness probe timeouts.": "Readiness probe failures tied to database exhaustion point directly to connection pool limits or probe timeout configurations during traffic spikes.",
      "C": "Replacing containers with bare-metal VMs does not fix pool limits or probe timeouts and would add a disruptive migration during an incident.",
      "Immediately convert all container architectures into bare-metal virtual machines.": "Replacing containers with bare-metal VMs does not fix pool limits or probe timeouts and would add a disruptive migration during an incident.",
      "D": "Disabling security groups removes network protection and does nothing to relieve exhausted connection pools.",
      "Disable all security group firewalls across internal network interfaces.": "Disabling security groups removes network protection and does nothing to relieve exhausted connection pools."
    }
  },
  {
    "id": "tech-mcq-s6-q02",
    "number": 2,
    "question": "Consider two concurrent transactions running on an inventory stock quantity (Initial Stock = 50). Transaction A reads Stock (50). Transaction B updates Stock = Stock - 10 and commits (40). Transaction A then updates Stock = Stock - 5 based on its stale read. Which concurrency anomaly has occurred?",
    "options": [
      {
        "id": "A",
        "text": "Dirty Read"
      },
      {
        "id": "B",
        "text": "Phantom Read"
      },
      {
        "id": "C",
        "text": "Lost Update"
      },
      {
        "id": "D",
        "text": "Non-repeatable Read"
      }
    ],
    "correctAnswer": "C",
    "topic": "Databases / Concurrency",
    "difficulty": "Medium",
    "explanation": "A Lost Update occurs when two transactions read the same value and subsequently overwrite each other's changes, leading to data loss.",
    "marks": 1,
    "code": "-- Transaction A:\nSELECT Stock FROM Warehouse WHERE ItemID = 101; -- Reads 50\n\n-- Transaction B:\nUPDATE Warehouse SET Stock = Stock - 10 WHERE ItemID = 101; -- Commits 40\n\n-- Transaction A:\nUPDATE Warehouse SET Stock = Stock - 5 WHERE ItemID = 101; -- Updates based on stale read",
    "optionExplanations": {
      "A": "A dirty read means reading another transaction's uncommitted data; here Transaction B had already committed 40.",
      "Dirty Read": "A dirty read means reading another transaction's uncommitted data; here Transaction B had already committed 40.",
      "B": "A phantom read means new rows appear in a repeated range query; only a single existing row is involved here.",
      "Phantom Read": "A phantom read means new rows appear in a repeated range query; only a single existing row is involved here.",
      "C": "A Lost Update occurs when two transactions read the same value and subsequently overwrite each other's changes, leading to data loss.",
      "Lost Update": "A Lost Update occurs when two transactions read the same value and subsequently overwrite each other's changes, leading to data loss.",
      "D": "A non-repeatable read means the same row is re-read and returns a different value; Transaction A never re-reads, it writes based on its stale value.",
      "Non-repeatable Read": "A non-repeatable read means the same row is re-read and returns a different value; Transaction A never re-reads, it writes based on its stale value."
    }
  },
  {
    "id": "tech-mcq-s6-q03",
    "number": 3,
    "question": "An e-commerce database tracks user profiles using Username, PhoneNum, CustomerUUID, and RegistrationDate. Users frequently update their phone numbers, and phone numbers are occasionally recycled by carriers. Which column represents the most reliable primary key candidate?",
    "options": [
      {
        "id": "A",
        "text": "CustomerUUID"
      },
      {
        "id": "B",
        "text": "PhoneNum"
      },
      {
        "id": "C",
        "text": "Username"
      },
      {
        "id": "D",
        "text": "RegistrationDate"
      }
    ],
    "correctAnswer": "A",
    "topic": "Databases / Keys",
    "difficulty": "Easy",
    "explanation": "CustomerUUID is system-generated, globally unique, and immutable, preventing compliance or data integrity risks from changing mutable fields.",
    "marks": 1,
    "optionExplanations": {
      "A": "CustomerUUID is system-generated, globally unique, and immutable, preventing compliance or data integrity risks from changing mutable fields.",
      "CustomerUUID": "CustomerUUID is system-generated, globally unique, and immutable, preventing compliance or data integrity risks from changing mutable fields.",
      "B": "PhoneNum changes often and is recycled by carriers, so it is neither stable nor permanently unique to one customer.",
      "PhoneNum": "PhoneNum changes often and is recycled by carriers, so it is neither stable nor permanently unique to one customer.",
      "C": "Username is a mutable business attribute that may change or be reused, so it is risky as a primary key.",
      "Username": "Username is a mutable business attribute that may change or be reused, so it is risky as a primary key.",
      "D": "RegistrationDate is not unique because many customers can register on the same date.",
      "RegistrationDate": "RegistrationDate is not unique because many customers can register on the same date."
    }
  },
  {
    "id": "tech-mcq-s6-q04",
    "number": 4,
    "question": "A software engineering squad integrates automated container image scanning into their CI/CD pipeline to catch vulnerabilities before staging deployments. Which stage of the software delivery lifecycle handles this rule enforcement?",
    "options": [
      {
        "id": "A",
        "text": "Continuous Integration / Security Gate"
      },
      {
        "id": "B",
        "text": "Local Developer IDE Syntax Highlight"
      },
      {
        "id": "C",
        "text": "Production Log Retention Daemon"
      },
      {
        "id": "D",
        "text": "DNS Zone Transfer Synchronization"
      }
    ],
    "correctAnswer": "A",
    "topic": "DevSecOps / CI-CD",
    "difficulty": "Easy",
    "explanation": "CI security gates inspect artifacts automatically during pipelines to block insecure builds from deployment.",
    "marks": 1,
    "optionExplanations": {
      "A": "CI security gates inspect artifacts automatically during pipelines to block insecure builds from deployment.",
      "Continuous Integration / Security Gate": "CI security gates inspect artifacts automatically during pipelines to block insecure builds from deployment.",
      "B": "An IDE syntax highlighter only helps while editing code locally and cannot scan container images in the pipeline.",
      "Local Developer IDE Syntax Highlight": "An IDE syntax highlighter only helps while editing code locally and cannot scan container images in the pipeline.",
      "C": "A log retention daemon works on production logs after deployment and cannot block vulnerable images before staging.",
      "Production Log Retention Daemon": "A log retention daemon works on production logs after deployment and cannot block vulnerable images before staging.",
      "D": "DNS zone transfer replicates DNS records between name servers and has nothing to do with vulnerability scanning.",
      "DNS Zone Transfer Synchronization": "DNS zone transfer replicates DNS records between name servers and has nothing to do with vulnerability scanning."
    }
  },
  {
    "id": "tech-mcq-s6-q05",
    "number": 5,
    "question": "An enterprise team is splitting a legacy monolithic service into independent microservices. They need to modify a user profile JSON response payload by introducing nested objects without breaking existing mobile clients that parse flat fields. Which API design principle supports this?",
    "options": [
      {
        "id": "A",
        "text": "Enforce strict breaking changes and block legacy client app executions."
      },
      {
        "id": "B",
        "text": "Add additive fields or optional parameters while maintaining existing response structures for backward compatibility."
      },
      {
        "id": "C",
        "text": "Mutate existing data types in-place on active production paths."
      },
      {
        "id": "D",
        "text": "Require clients to pass raw database connection strings."
      }
    ],
    "correctAnswer": "B",
    "topic": "API Design",
    "difficulty": "Medium",
    "explanation": "Additive changes and maintaining backward compatibility allow legacy clients to function smoothly while newer clients consume enhanced schemas.",
    "marks": 1,
    "optionExplanations": {
      "A": "Enforcing breaking changes is the opposite of backward compatibility and would break existing mobile clients.",
      "Enforce strict breaking changes and block legacy client app executions.": "Enforcing breaking changes is the opposite of backward compatibility and would break existing mobile clients.",
      "B": "Additive changes and maintaining backward compatibility allow legacy clients to function smoothly while newer clients consume enhanced schemas.",
      "Add additive fields or optional parameters while maintaining existing response structures for backward compatibility.": "Additive changes and maintaining backward compatibility allow legacy clients to function smoothly while newer clients consume enhanced schemas.",
      "C": "Changing existing data types in place makes legacy clients that parse the flat fields fail.",
      "Mutate existing data types in-place on active production paths.": "Changing existing data types in place makes legacy clients that parse the flat fields fail.",
      "D": "Making clients pass raw database connection strings is a severe security flaw and not an API versioning approach.",
      "Require clients to pass raw database connection strings.": "Making clients pass raw database connection strings is a severe security flaw and not an API versioning approach."
    }
  },
  {
    "id": "tech-mcq-s6-q06",
    "number": 6,
    "question": "A client application sends a request to a secure API resource, but receives an HTTP status code indicating that the client lacks valid authentication credentials entirely. Which status code was returned?",
    "options": [
      {
        "id": "A",
        "text": "400 Bad Request"
      },
      {
        "id": "B",
        "text": "401 Unauthorized"
      },
      {
        "id": "C",
        "text": "403 Forbidden"
      },
      {
        "id": "D",
        "text": "404 Not Found"
      }
    ],
    "correctAnswer": "B",
    "topic": "HTTP / Web APIs",
    "difficulty": "Easy",
    "explanation": "HTTP 401 Unauthorized means the request lacks valid authentication credentials for the target resource.",
    "marks": 1,
    "optionExplanations": {
      "A": "400 means the request was malformed, not that credentials were missing.",
      "400 Bad Request": "400 means the request was malformed, not that credentials were missing.",
      "B": "HTTP 401 Unauthorized means the request lacks valid authentication credentials for the target resource.",
      "401 Unauthorized": "HTTP 401 Unauthorized means the request lacks valid authentication credentials for the target resource.",
      "C": "403 means the client is authenticated (or known) but not permitted to access the resource.",
      "403 Forbidden": "403 means the client is authenticated (or known) but not permitted to access the resource.",
      "D": "404 means the resource was not found, which says nothing about authentication.",
      "404 Not Found": "404 means the resource was not found, which says nothing about authentication."
    }
  },
  {
    "id": "tech-mcq-s6-q07",
    "number": 7,
    "question": "A Java library contains a billing class with two methods named calculateTax. One method accepts a single integer amount, while the second accepts an integer amount and a regional tax rate float. What object-oriented concept is demonstrated?",
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
        "text": "Encapsulation"
      },
      {
        "id": "D",
        "text": "Inheritance Hierarchy"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / OOP",
    "difficulty": "Easy",
    "explanation": "Methods having the same name within the same class with different parameter lists represent compile-time (static) polymorphism, i.e. overloading.",
    "marks": 1,
    "code": "public class TaxCalculator {\n    public double calculateTax(int amount) {\n        return amount * 0.05;\n    }\n\n    public double calculateTax(int amount, float rate) {\n        return amount * rate;\n    }\n}",
    "optionExplanations": {
      "A": "Methods having the same name within the same class with different parameter lists represent compile-time (static) polymorphism, i.e. overloading.",
      "Static polymorphism (Method Overloading)": "Methods having the same name within the same class with different parameter lists represent compile-time (static) polymorphism, i.e. overloading.",
      "B": "Method overriding needs a subclass redefining a method with the same signature; here both methods are in one class with different parameters.",
      "Dynamic polymorphism (Method Overriding)": "Method overriding needs a subclass redefining a method with the same signature; here both methods are in one class with different parameters.",
      "C": "Encapsulation is about hiding data behind access modifiers, not same-named methods with different parameters.",
      "Encapsulation": "Encapsulation is about hiding data behind access modifiers, not same-named methods with different parameters.",
      "D": "No class extends another here, so there is no inheritance hierarchy.",
      "Inheritance Hierarchy": "No class extends another here, so there is no inheritance hierarchy."
    }
  },
  {
    "id": "tech-mcq-s6-q08",
    "number": 8,
    "question": "Analyze the Java code snippet below. A reference variable pet points to an instance of Cat. Which statement correctly identifies the relationship components?",
    "options": [
      {
        "id": "A",
        "text": "Animal is a subclass instance of Cat."
      },
      {
        "id": "B",
        "text": "pet is a reference variable of type Animal pointing to an instance of subclass Cat."
      },
      {
        "id": "C",
        "text": "Cat and Animal are independent static methods."
      },
      {
        "id": "D",
        "text": "pet is a primitive integer array."
      }
    ],
    "correctAnswer": "B",
    "topic": "Java / OOP",
    "difficulty": "Easy",
    "explanation": "The superclass reference variable pet is assigned an instance of its subclass Cat via polymorphism.",
    "marks": 1,
    "code": "class Animal {\n    int age;\n}\n\nclass Cat extends Animal {\n    String breed;\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Animal pet = new Cat();\n    }\n}",
    "optionExplanations": {
      "A": "This reverses the relationship: Cat is the subclass of Animal, and pet is a variable, not a subclass instance of Cat.",
      "Animal is a subclass instance of Cat.": "This reverses the relationship: Cat is the subclass of Animal, and pet is a variable, not a subclass instance of Cat.",
      "B": "The superclass reference variable pet is assigned an instance of its subclass Cat via polymorphism.",
      "pet is a reference variable of type Animal pointing to an instance of subclass Cat.": "The superclass reference variable pet is assigned an instance of its subclass Cat via polymorphism.",
      "C": "Animal and Cat are classes (Cat extends Animal), not static methods.",
      "Cat and Animal are independent static methods.": "Animal and Cat are classes (Cat extends Animal), not static methods.",
      "D": "pet is an object reference of type Animal, not a primitive integer array.",
      "pet is a primitive integer array.": "pet is an object reference of type Animal, not a primitive integer array."
    }
  },
  {
    "id": "tech-mcq-s6-q09",
    "number": 9,
    "question": "An IT security team implements an anomaly detection gateway that monitors network traffic patterns. What is a key operational drawback of deep traffic inspection across massive enterprise backbones?",
    "options": [
      {
        "id": "A",
        "text": "Complete inability to log source IP headers."
      },
      {
        "id": "B",
        "text": "Added processing latency and high hardware computational overhead."
      },
      {
        "id": "C",
        "text": "Automatic removal of physical routers."
      },
      {
        "id": "D",
        "text": "Total bypass of user authentication protocols."
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "Deep packet inspection requires intensive CPU and memory analysis, introducing latency on high-throughput networks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Deep inspection reads headers and payload, so it can log source IP headers.",
      "Complete inability to log source IP headers.": "Deep inspection reads headers and payload, so it can log source IP headers.",
      "B": "Deep packet inspection requires intensive CPU and memory analysis, introducing latency on high-throughput networks.",
      "Added processing latency and high hardware computational overhead.": "Deep packet inspection requires intensive CPU and memory analysis, introducing latency on high-throughput networks.",
      "C": "Inspection does not remove or affect physical routers.",
      "Automatic removal of physical routers.": "Inspection does not remove or affect physical routers.",
      "D": "Inspection sits alongside authentication and does not bypass it.",
      "Total bypass of user authentication protocols.": "Inspection sits alongside authentication and does not bypass it."
    }
  },
  {
    "id": "tech-mcq-s6-q10",
    "number": 10,
    "question": "Which Java snippet correctly demonstrates inheritance and runtime method overriding?",
    "options": [
      {
        "id": "A",
        "text": "class Parent { void run() {} } class Child extends Parent { @Override void run() {} }"
      },
      {
        "id": "B",
        "text": "class Parent { void run() {} } class Child implements Parent { void run() {} }"
      },
      {
        "id": "C",
        "text": "class Parent { void extends run() {} } class Child { Parent.run(); }"
      },
      {
        "id": "D",
        "text": "class Parent { void run() {} } class Child { @Override void run() {} }"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java / OOP",
    "difficulty": "Easy",
    "explanation": "Subclasses inherit parent methods using extends and override specific behaviors using the @Override annotation.",
    "marks": 1,
    "optionExplanations": {
      "A": "Subclasses inherit parent methods using extends and override specific behaviors using the @Override annotation.",
      "class Parent { void run() {} } class Child extends Parent { @Override void run() {} }": "Subclasses inherit parent methods using extends and override specific behaviors using the @Override annotation.",
      "B": "`implements` is for interfaces; Parent is a class, so this fails to compile.",
      "class Parent { void run() {} } class Child implements Parent { void run() {} }": "`implements` is for interfaces; Parent is a class, so this fails to compile.",
      "C": "`void extends run()` is invalid syntax and `Parent.run();` cannot be placed in a class body.",
      "class Parent { void extends run() {} } class Child { Parent.run(); }": "`void extends run()` is invalid syntax and `Parent.run();` cannot be placed in a class body.",
      "D": "Child does not extend Parent, so there is no inheritance and @Override would cause a compile error.",
      "class Parent { void run() {} } class Child { @Override void run() {} }": "Child does not extend Parent, so there is no inheritance and @Override would cause a compile error."
    }
  },
  {
    "id": "tech-mcq-s6-q11",
    "number": 11,
    "question": "A frontend engineer needs to write a CSS rule for a card component such that only the top-left and bottom-right corners have a 20px radius, while the remaining corners stay sharp (0). Which rule is correct?",
    "options": [
      {
        "id": "A",
        "text": "border-radius: 20px 0 20px 0;"
      },
      {
        "id": "B",
        "text": "border-radius: 0 20px 0 20px;"
      },
      {
        "id": "C",
        "text": "border-radius: 20px 20px 20px 20px;"
      },
      {
        "id": "D",
        "text": "border-radius: 0 0 20px 20px;"
      }
    ],
    "correctAnswer": "A",
    "topic": "CSS",
    "difficulty": "Easy",
    "explanation": "The border-radius order is top-left, top-right, bottom-right, bottom-left. 20px 0 20px 0 rounds top-left and bottom-right.",
    "marks": 1,
    "optionExplanations": {
      "A": "The border-radius order is top-left, top-right, bottom-right, bottom-left. 20px 0 20px 0 rounds top-left and bottom-right.",
      "border-radius: 20px 0 20px 0;": "The border-radius order is top-left, top-right, bottom-right, bottom-left. 20px 0 20px 0 rounds top-left and bottom-right.",
      "B": "0 20px 0 20px rounds top-right and bottom-left, the opposite corners.",
      "border-radius: 0 20px 0 20px;": "0 20px 0 20px rounds top-right and bottom-left, the opposite corners.",
      "C": "Four values of 20px round all four corners, not just two.",
      "border-radius: 20px 20px 20px 20px;": "Four values of 20px round all four corners, not just two.",
      "D": "0 0 20px 20px rounds the bottom-right and bottom-left corners instead.",
      "border-radius: 0 0 20px 20px;": "0 0 20px 20px rounds the bottom-right and bottom-left corners instead."
    }
  },
  {
    "id": "tech-mcq-s6-q12",
    "number": 12,
    "question": "A web developer wants to embed an interactive video stream on a webpage with native playback controls without relying on external plugins. Which HTML5 tag is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "<video controls>"
      },
      {
        "id": "B",
        "text": "<media stream=\"true\">"
      },
      {
        "id": "C",
        "text": "<movie autoplay>"
      },
      {
        "id": "D",
        "text": "<stream player>"
      }
    ],
    "correctAnswer": "A",
    "topic": "HTML5",
    "difficulty": "Easy",
    "explanation": "The HTML5 <video> element with the controls attribute provides native playback, pause, and volume controls.",
    "marks": 1,
    "optionExplanations": {
      "A": "The HTML5 <video> element with the controls attribute provides native playback, pause, and volume controls.",
      "<video controls>": "The HTML5 <video> element with the controls attribute provides native playback, pause, and volume controls.",
      "B": "<media> is not a valid HTML5 element.",
      "<media stream=\"true\">": "<media> is not a valid HTML5 element.",
      "C": "<movie> is not a valid HTML5 element.",
      "<movie autoplay>": "<movie> is not a valid HTML5 element.",
      "D": "<stream> is not a valid HTML5 element.",
      "<stream player>": "<stream> is not a valid HTML5 element."
    }
  },
  {
    "id": "tech-mcq-s6-q13",
    "number": 13,
    "question": "Evaluate the JavaScript code snippet below. What value is printed to the document?",
    "options": [
      {
        "id": "A",
        "text": "2, 4, 6, 8"
      },
      {
        "id": "B",
        "text": "6, 12, 18, 24"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "NaN"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript / Arrays",
    "difficulty": "Easy",
    "explanation": "The map() method applies the triple function to each element, multiplying each by 3 to produce 6, 12, 18, 24.",
    "marks": 1,
    "code": "var numbers = [2, 4, 6, 8];\nfunction triple(n) {\n    return n * 3;\n}\ndocument.write(numbers.map(triple));",
    "optionExplanations": {
      "A": "map() returns a new array and leaves the original [2, 4, 6, 8] unchanged.",
      "2, 4, 6, 8": "map() returns a new array and leaves the original [2, 4, 6, 8] unchanged.",
      "B": "The map() method applies the triple function to each element, multiplying each by 3 to produce 6, 12, 18, 24.",
      "6, 12, 18, 24": "The map() method applies the triple function to each element, multiplying each by 3 to produce 6, 12, 18, 24.",
      "C": "24 is only the tripled last element; map() returns all four results.",
      "24": "24 is only the tripled last element; map() returns all four results.",
      "D": "NaN would appear only for non-numeric values, but all elements are numbers.",
      "NaN": "NaN would appear only for non-numeric values, but all elements are numbers."
    }
  },
  {
    "id": "tech-mcq-s6-q14",
    "number": 14,
    "question": "What output string is produced when the JavaScript code below executes against an HTML element?",
    "options": [
      {
        "id": "A",
        "text": "Container"
      },
      {
        "id": "B",
        "text": "active"
      },
      {
        "id": "C",
        "text": "true"
      },
      {
        "id": "D",
        "text": "undefined"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript / DOM",
    "difficulty": "Easy",
    "explanation": "getAttribute(\"data-status\") extracts the exact string value stored inside the specified HTML attribute.",
    "marks": 1,
    "code": "<div id=\"box\" data-status=\"active\">Container</div>\n<script>\n    var el = document.getElementById(\"box\");\n    document.write(el.getAttribute(\"data-status\"));\n</script>",
    "optionExplanations": {
      "A": "'Container' is the element's text content, not the value of its data-status attribute.",
      "Container": "'Container' is the element's text content, not the value of its data-status attribute.",
      "B": "getAttribute(\"data-status\") extracts the exact string value stored inside the specified HTML attribute.",
      "active": "getAttribute(\"data-status\") extracts the exact string value stored inside the specified HTML attribute.",
      "C": "getAttribute returns a string, not a boolean, so it cannot be true.",
      "true": "getAttribute returns a string, not a boolean, so it cannot be true.",
      "D": "undefined would only result if the attribute were missing; data-status exists with the value 'active'.",
      "undefined": "undefined would only result if the attribute were missing; data-status exists with the value 'active'."
    }
  },
  {
    "id": "tech-mcq-s6-q15",
    "number": 15,
    "question": "A network engineer segments a corporate network into isolated VLANs for guest users and finance terminals. What is the primary security objective of network micro-segmentation?",
    "options": [
      {
        "id": "A",
        "text": "Maximizing wireless signal reach."
      },
      {
        "id": "B",
        "text": "Containing lateral attacker movement during a security compromise."
      },
      {
        "id": "C",
        "text": "Removing packet checksum overhead."
      },
      {
        "id": "D",
        "text": "Enlarging the broadcast domain for easier discovery."
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "Micro-segmentation restricts lateral traversal, ensuring breaches remain quarantined within localized zones.",
    "marks": 1,
    "optionExplanations": {
      "A": "Wireless signal reach is unrelated to VLAN or micro-segmentation design.",
      "Maximizing wireless signal reach.": "Wireless signal reach is unrelated to VLAN or micro-segmentation design.",
      "B": "Micro-segmentation restricts lateral traversal, ensuring breaches remain quarantined within localized zones.",
      "Containing lateral attacker movement during a security compromise.": "Micro-segmentation restricts lateral traversal, ensuring breaches remain quarantined within localized zones.",
      "C": "Segmentation does not affect packet checksums.",
      "Removing packet checksum overhead.": "Segmentation does not affect packet checksums.",
      "D": "VLANs shrink broadcast domains rather than enlarge them, and the goal is to restrict traffic, not ease discovery.",
      "Enlarging the broadcast domain for easier discovery.": "VLANs shrink broadcast domains rather than enlarge them, and the goal is to restrict traffic, not ease discovery."
    }
  },
  {
    "id": "tech-mcq-s6-q16",
    "number": 16,
    "question": "An administrator configures an IPsec tunnel. If the security mandate requires both data confidentiality (encryption) and packet integrity verification, which IPsec protocol should be enabled?",
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
        "text": "Address Resolution Protocol (ARP)"
      },
      {
        "id": "D",
        "text": "Simple Network Management Protocol (SNMP)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security / IPsec",
    "difficulty": "Medium",
    "explanation": "ESP (Encapsulating Security Payload) delivers both encryption (confidentiality) and integrity authentication.",
    "marks": 1,
    "optionExplanations": {
      "A": "AH provides integrity and authentication but no encryption, so it does not give confidentiality.",
      "Authentication Header (AH)": "AH provides integrity and authentication but no encryption, so it does not give confidentiality.",
      "B": "ESP (Encapsulating Security Payload) delivers both encryption (confidentiality) and integrity authentication.",
      "Encapsulating Security Payload (ESP)": "ESP (Encapsulating Security Payload) delivers both encryption (confidentiality) and integrity authentication.",
      "C": "ARP resolves IP to MAC addresses and is not an IPsec protocol.",
      "Address Resolution Protocol (ARP)": "ARP resolves IP to MAC addresses and is not an IPsec protocol.",
      "D": "SNMP is a device management protocol, not part of IPsec.",
      "Simple Network Management Protocol (SNMP)": "SNMP is a device management protocol, not part of IPsec."
    }
  },
  {
    "id": "tech-mcq-s6-q17",
    "number": 17,
    "question": "A remote worker connecting from a public Wi-Fi network needs to tunnel all traffic back to the secure corporate headquarters. Which technology provides this capability?",
    "options": [
      {
        "id": "A",
        "text": "Remote-access VPN"
      },
      {
        "id": "B",
        "text": "Site-to-site BGP peering"
      },
      {
        "id": "C",
        "text": "Unencrypted HTTP proxy"
      },
      {
        "id": "D",
        "text": "Static ARP binding"
      }
    ],
    "correctAnswer": "A",
    "topic": "Networking / VPN",
    "difficulty": "Easy",
    "explanation": "Remote-access VPN clients establish encrypted tunnels connecting individual remote machines to corporate private networks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Remote-access VPN clients establish encrypted tunnels connecting individual remote machines to corporate private networks.",
      "Remote-access VPN": "Remote-access VPN clients establish encrypted tunnels connecting individual remote machines to corporate private networks.",
      "B": "Site-to-site BGP peering exchanges routes between networks and does not tunnel an individual remote user's traffic.",
      "Site-to-site BGP peering": "Site-to-site BGP peering exchanges routes between networks and does not tunnel an individual remote user's traffic.",
      "C": "An unencrypted HTTP proxy offers no encryption, so it does not protect traffic on public Wi-Fi.",
      "Unencrypted HTTP proxy": "An unencrypted HTTP proxy offers no encryption, so it does not protect traffic on public Wi-Fi.",
      "D": "Static ARP binding maps IP to MAC on a local network and is not a tunnel.",
      "Static ARP binding": "Static ARP binding maps IP to MAC on a local network and is not a tunnel."
    }
  },
  {
    "id": "tech-mcq-s6-q18",
    "number": 18,
    "question": "A real-time voice over IP (VoIP) application needs fast packet delivery where minor audio packet loss is acceptable, but retransmission delays will cause noticeable lag. Which Transport Layer protocol should be used?",
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
        "text": "FTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctAnswer": "B",
    "topic": "Networking / Transport Layer",
    "difficulty": "Easy",
    "explanation": "UDP is connectionless and lightweight, making it ideal for real-time audio/video streams where speed is prioritized over guaranteed retransmissions.",
    "marks": 1,
    "optionExplanations": {
      "A": "TCP's retransmissions and ordering add delay, which causes lag in real-time voice.",
      "TCP": "TCP's retransmissions and ordering add delay, which causes lag in real-time voice.",
      "B": "UDP is connectionless and lightweight, making it ideal for real-time audio/video streams where speed is prioritized over guaranteed retransmissions.",
      "UDP": "UDP is connectionless and lightweight, making it ideal for real-time audio/video streams where speed is prioritized over guaranteed retransmissions.",
      "C": "FTP is an application-layer file transfer protocol that runs over TCP, not a transport protocol.",
      "FTP": "FTP is an application-layer file transfer protocol that runs over TCP, not a transport protocol.",
      "D": "SSH is an application-layer remote access protocol that runs over TCP, not a transport protocol.",
      "SSH": "SSH is an application-layer remote access protocol that runs over TCP, not a transport protocol."
    }
  },
  {
    "id": "tech-mcq-s6-q19",
    "number": 19,
    "question": "During network troubleshooting, an engineer discovers packet header corruption. Which layer of the OSI model is responsible for reliable end-to-end data delivery, flow control, and error detection via checksums?",
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
        "text": "Presentation Layer"
      }
    ],
    "correctAnswer": "C",
    "topic": "Networking / OSI Model",
    "difficulty": "Easy",
    "explanation": "Layer 4 (Transport Layer) manages reliable end-to-end communication, segmentation, flow control, and error recovery.",
    "marks": 1,
    "optionExplanations": {
      "A": "The Physical Layer handles raw bit transmission and has no end-to-end flow control or checksums.",
      "Physical Layer": "The Physical Layer handles raw bit transmission and has no end-to-end flow control or checksums.",
      "B": "The Data Link Layer detects errors per hop (frame level), not end-to-end delivery between hosts.",
      "Data Link Layer": "The Data Link Layer detects errors per hop (frame level), not end-to-end delivery between hosts.",
      "C": "Layer 4 (Transport Layer) manages reliable end-to-end communication, segmentation, flow control, and error recovery.",
      "Transport Layer": "Layer 4 (Transport Layer) manages reliable end-to-end communication, segmentation, flow control, and error recovery.",
      "D": "The Presentation Layer handles data format, encoding and encryption, not delivery or flow control.",
      "Presentation Layer": "The Presentation Layer handles data format, encoding and encryption, not delivery or flow control."
    }
  },
  {
    "id": "tech-mcq-s6-q20",
    "number": 20,
    "question": "A bank requires a firewall that inspects incoming TCP packets, tracks connection states (SYN, ACK, ESTABLISHED), and discards packets not associated with an active session. What firewall architecture is this?",
    "options": [
      {
        "id": "A",
        "text": "Stateful Inspection Firewall"
      },
      {
        "id": "B",
        "text": "Stateless Packet Filter"
      },
      {
        "id": "C",
        "text": "Hub repeater"
      },
      {
        "id": "D",
        "text": "Layer 2 Switch"
      }
    ],
    "correctAnswer": "A",
    "topic": "Network Security / Firewalls",
    "difficulty": "Medium",
    "explanation": "Stateful firewalls maintain connection state tables to validate incoming packet legitimacy against active sessions.",
    "marks": 1,
    "optionExplanations": {
      "A": "Stateful firewalls maintain connection state tables to validate incoming packet legitimacy against active sessions.",
      "Stateful Inspection Firewall": "Stateful firewalls maintain connection state tables to validate incoming packet legitimacy against active sessions.",
      "B": "A stateless packet filter judges each packet on static rules and does not track SYN/ACK/ESTABLISHED states.",
      "Stateless Packet Filter": "A stateless packet filter judges each packet on static rules and does not track SYN/ACK/ESTABLISHED states.",
      "C": "A hub repeater just retransmits signals to all ports and does no inspection.",
      "Hub repeater": "A hub repeater just retransmits signals to all ports and does no inspection.",
      "D": "A Layer 2 switch forwards by MAC address and does not track TCP sessions.",
      "Layer 2 Switch": "A Layer 2 switch forwards by MAC address and does not track TCP sessions."
    }
  },
  {
    "id": "tech-mcq-s6-q21",
    "number": 21,
    "question": "An enterprise subscribes to a cloud provider for hosted email and office productivity applications accessible via web browsers without local installation. Which cloud service model is this?",
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
        "text": "Database as a Service (DBaaS)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "SaaS delivers fully managed application software over the internet on a subscription model.",
    "marks": 1,
    "optionExplanations": {
      "A": "IaaS provides raw infrastructure that the customer manages; it is not hosted ready-to-use email and office apps.",
      "Infrastructure as a Service (IaaS)": "IaaS provides raw infrastructure that the customer manages; it is not hosted ready-to-use email and office apps.",
      "B": "PaaS gives developers a platform to build and deploy apps, not finished end-user software.",
      "Platform as a Service (PaaS)": "PaaS gives developers a platform to build and deploy apps, not finished end-user software.",
      "C": "SaaS delivers fully managed application software over the internet on a subscription model.",
      "Software as a Service (SaaS)": "SaaS delivers fully managed application software over the internet on a subscription model.",
      "D": "DBaaS is a managed database offering only, not email or productivity apps.",
      "Database as a Service (DBaaS)": "DBaaS is a managed database offering only, not email or productivity apps."
    }
  },
  {
    "id": "tech-mcq-s6-q22",
    "number": 22,
    "question": "An organization needs to query and integrate data from both on-premise relational databases and cloud data lakes in real time without physically migrating or copying datasets. Which architectural layer provides this?",
    "options": [
      {
        "id": "A",
        "text": "Data Virtualization / Abstraction Layer"
      },
      {
        "id": "B",
        "text": "Magnetic Tape Backup Daemon"
      },
      {
        "id": "C",
        "text": "Physical Disk Partition Tool"
      },
      {
        "id": "D",
        "text": "Static File Server Cache"
      }
    ],
    "correctAnswer": "A",
    "topic": "Data Architecture",
    "difficulty": "Medium",
    "explanation": "Data virtualization creates a unified logical abstraction layer, allowing queries across disparate data sources without data movement.",
    "marks": 1,
    "optionExplanations": {
      "A": "Data virtualization creates a unified logical abstraction layer, allowing queries across disparate data sources without data movement.",
      "Data Virtualization / Abstraction Layer": "Data virtualization creates a unified logical abstraction layer, allowing queries across disparate data sources without data movement.",
      "B": "A tape backup daemon archives data and does not query live data across sources.",
      "Magnetic Tape Backup Daemon": "A tape backup daemon archives data and does not query live data across sources.",
      "C": "A disk partition tool manages local disk layout and cannot unify remote data sources.",
      "Physical Disk Partition Tool": "A disk partition tool manages local disk layout and cannot unify remote data sources.",
      "D": "A static file cache stores copies of files and cannot run federated queries across databases and data lakes.",
      "Static File Server Cache": "A static file cache stores copies of files and cannot run federated queries across databases and data lakes."
    }
  },
  {
    "id": "tech-mcq-s6-q23",
    "number": 23,
    "question": "A government defense contractor must host workloads on dedicated physical hardware with zero multi-tenant sharing to comply with stringent security laws. Which cloud deployment model fits?",
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
        "text": "Shared Multi-tenant Cloud"
      },
      {
        "id": "D",
        "text": "Hybrid Community Cloud"
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "Private cloud infrastructure is dedicated exclusively to a single organization, ensuring strict physical isolation.",
    "marks": 1,
    "optionExplanations": {
      "A": "Public cloud is shared multi-tenant infrastructure, which violates the zero-sharing mandate.",
      "Public Cloud": "Public cloud is shared multi-tenant infrastructure, which violates the zero-sharing mandate.",
      "B": "Private cloud infrastructure is dedicated exclusively to a single organization, ensuring strict physical isolation.",
      "Private Cloud": "Private cloud infrastructure is dedicated exclusively to a single organization, ensuring strict physical isolation.",
      "C": "Shared multi-tenant cloud is by definition the opposite of dedicated hardware.",
      "Shared Multi-tenant Cloud": "Shared multi-tenant cloud is by definition the opposite of dedicated hardware.",
      "D": "A hybrid community cloud is shared among several organizations, so hardware is not dedicated to one.",
      "Hybrid Community Cloud": "A hybrid community cloud is shared among several organizations, so hardware is not dedicated to one."
    }
  },
  {
    "id": "tech-mcq-s6-q24",
    "number": 24,
    "question": "What virtualization technology abstracts physical server hardware to run multiple isolated virtual machines, each with its own guest operating system?",
    "options": [
      {
        "id": "A",
        "text": "Hypervisor"
      },
      {
        "id": "B",
        "text": "Compiler Linker"
      },
      {
        "id": "C",
        "text": "Packet Shaper"
      },
      {
        "id": "D",
        "text": "Subnet Mask"
      }
    ],
    "correctAnswer": "A",
    "topic": "Virtualization",
    "difficulty": "Easy",
    "explanation": "Hypervisors virtualize physical computing hardware, enabling multiple guest operating systems to execute concurrently.",
    "marks": 1,
    "optionExplanations": {
      "A": "Hypervisors virtualize physical computing hardware, enabling multiple guest operating systems to execute concurrently.",
      "Hypervisor": "Hypervisors virtualize physical computing hardware, enabling multiple guest operating systems to execute concurrently.",
      "B": "A compiler linker builds executables from code and does not virtualize hardware.",
      "Compiler Linker": "A compiler linker builds executables from code and does not virtualize hardware.",
      "C": "A packet shaper manages network traffic rates, not virtual machines.",
      "Packet Shaper": "A packet shaper manages network traffic rates, not virtual machines.",
      "D": "A subnet mask defines the network portion of an IP address and has no role in virtualization.",
      "Subnet Mask": "A subnet mask defines the network portion of an IP address and has no role in virtualization."
    }
  },
  {
    "id": "tech-mcq-s6-q25",
    "number": 25,
    "question": "An enterprise customer wants full root access to virtual operating systems, custom kernel configurations, and networking firewalls while letting the vendor manage datacenter facilities. Which cloud model is this?",
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
        "text": "Serverless Functions"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Easy",
    "explanation": "IaaS provides raw virtualized compute, storage, and networking resources with complete administrative OS control.",
    "marks": 1,
    "optionExplanations": {
      "A": "SaaS vendors manage the OS and everything else, so customers get no root or kernel control.",
      "SaaS": "SaaS vendors manage the OS and everything else, so customers get no root or kernel control.",
      "B": "PaaS abstracts the OS and runtime, so customers cannot customize the kernel or get root.",
      "PaaS": "PaaS abstracts the OS and runtime, so customers cannot customize the kernel or get root.",
      "C": "IaaS provides raw virtualized compute, storage, and networking resources with complete administrative OS control.",
      "IaaS": "IaaS provides raw virtualized compute, storage, and networking resources with complete administrative OS control.",
      "D": "Serverless hides servers entirely, so there is no OS-level access.",
      "Serverless Functions": "Serverless hides servers entirely, so there is no OS-level access."
    }
  },
  {
    "id": "tech-mcq-s6-q26",
    "number": 26,
    "question": "How does cloud resource pooling provide operational elasticity for variable enterprise workloads?",
    "options": [
      {
        "id": "A",
        "text": "By locking hardware resources to fixed quotas."
      },
      {
        "id": "B",
        "text": "By dynamically aggregating and allocating hardware capacity on-demand as traffic fluctuates."
      },
      {
        "id": "C",
        "text": "By eliminating all network routing protocols."
      },
      {
        "id": "D",
        "text": "By disabling auto-scaling features."
      }
    ],
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "Resource pooling aggregates provider hardware to serve multiple consumers dynamically, scaling resources up or down based on demand.",
    "marks": 1,
    "optionExplanations": {
      "A": "Locking resources to fixed quotas removes the flexibility that elasticity needs.",
      "By locking hardware resources to fixed quotas.": "Locking resources to fixed quotas removes the flexibility that elasticity needs.",
      "B": "Resource pooling aggregates provider hardware to serve multiple consumers dynamically, scaling resources up or down based on demand.",
      "By dynamically aggregating and allocating hardware capacity on-demand as traffic fluctuates.": "Resource pooling aggregates provider hardware to serve multiple consumers dynamically, scaling resources up or down based on demand.",
      "C": "Eliminating routing protocols would break connectivity and has nothing to do with pooling.",
      "By eliminating all network routing protocols.": "Eliminating routing protocols would break connectivity and has nothing to do with pooling.",
      "D": "Disabling auto-scaling removes elasticity rather than providing it.",
      "By disabling auto-scaling features.": "Disabling auto-scaling removes elasticity rather than providing it."
    }
  },
  {
    "id": "tech-mcq-s6-q27",
    "number": 27,
    "question": "An embedded system uses a custom hashing function. During testing, developers notice that two different input strings produce identical output hash values due to a bit collision. What is the impact during verification?",
    "options": [
      {
        "id": "A",
        "text": "Hash computation speeds up exponentially."
      },
      {
        "id": "B",
        "text": "A collision occurs, making it impossible to uniquely verify the original source input from the hash alone."
      },
      {
        "id": "C",
        "text": "The system clock resets."
      },
      {
        "id": "D",
        "text": "Memory consumption drops to zero."
      }
    ],
    "correctAnswer": "B",
    "topic": "Cryptography / Hashing",
    "difficulty": "Medium",
    "explanation": "Hash collisions occur when distinct inputs yield the same output, compromising unique identification and integrity verification.",
    "marks": 1,
    "optionExplanations": {
      "A": "A collision does not speed up hashing; it is a correctness and security problem.",
      "Hash computation speeds up exponentially.": "A collision does not speed up hashing; it is a correctness and security problem.",
      "B": "Hash collisions occur when distinct inputs yield the same output, compromising unique identification and integrity verification.",
      "A collision occurs, making it impossible to uniquely verify the original source input from the hash alone.": "Hash collisions occur when distinct inputs yield the same output, compromising unique identification and integrity verification.",
      "C": "A hash collision has no effect on the system clock.",
      "The system clock resets.": "A hash collision has no effect on the system clock.",
      "D": "A collision does not change memory usage.",
      "Memory consumption drops to zero.": "A collision does not change memory usage."
    }
  },
  {
    "id": "tech-mcq-s6-q28",
    "number": 28,
    "question": "An enterprise configures 802.1X enterprise wireless authentication using a server certificate to establish a secure TLS tunnel for authenticating user credentials. Which protocol is implemented?",
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
        "text": "Open Authentication"
      },
      {
        "id": "D",
        "text": "WEP Shared Key"
      }
    ],
    "correctAnswer": "B",
    "topic": "Wireless Security",
    "difficulty": "Medium",
    "explanation": "PEAP creates a secure TLS tunnel using server-side certificates to protect client authentication credentials during enterprise login.",
    "marks": 1,
    "optionExplanations": {
      "A": "EAP-MD5 has no TLS tunnel or server certificate, offers only weak one-way client authentication, and is unsuitable for wireless.",
      "EAP-MD5": "EAP-MD5 has no TLS tunnel or server certificate, offers only weak one-way client authentication, and is unsuitable for wireless.",
      "B": "PEAP creates a secure TLS tunnel using server-side certificates to protect client authentication credentials during enterprise login.",
      "PEAP (Protected Extensible Authentication Protocol)": "PEAP creates a secure TLS tunnel using server-side certificates to protect client authentication credentials during enterprise login.",
      "C": "Open Authentication has no authentication or encryption and no certificate-based tunnel.",
      "Open Authentication": "Open Authentication has no authentication or encryption and no certificate-based tunnel.",
      "D": "WEP uses a static shared key and is broken; it does not use 802.1X with a TLS tunnel.",
      "WEP Shared Key": "WEP uses a static shared key and is broken; it does not use 802.1X with a TLS tunnel."
    }
  },
  {
    "id": "tech-mcq-s6-q29",
    "number": 29,
    "question": "Trace the execution of the pseudocode snippet below for inputs: x = 3, y = 5, z = 2. What is the returned output value?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode Tracing",
    "difficulty": "Medium",
    "explanation": "(3+2) > (2+3) is 5 > 5, False, so the first block is skipped. (3+5+2) < (5+2+3) is 10 < 10, False, so the Else branch runs: z = x + y = 8. Returns 3 + 5 + 8 = 16.",
    "marks": 1,
    "code": "Integer process(Integer x, Integer y, Integer z)\n\nif((x + z) > (z + x))\n    x = (x + y) * y\n\nif((x + y + z) < (y + z + x))\n    z = (z + x) + y\nElse\n    z = x + y\nEnd if\n\nreturn x + y + z",
    "optionExplanations": {
      "A": "10 comes from adding the original x=3, y=5, z=2 and ignoring the Else branch, which sets z to 8.",
      "10": "10 comes from adding the original x=3, y=5, z=2 and ignoring the Else branch, which sets z to 8.",
      "B": "(3+2) > (2+3) is 5 > 5, False, so the first block is skipped. (3+5+2) < (5+2+3) is 10 < 10, False, so the Else branch runs: z = x + y = 8. Returns 3 + 5 + 8 = 16.",
      "16": "(3+2) > (2+3) is 5 > 5, False, so the first block is skipped. (3+5+2) < (5+2+3) is 10 < 10, False, so the Else branch runs: z = x + y = 8. Returns 3 + 5 + 8 = 16.",
      "C": "20 is not produced by any path: the first if is skipped, and the Else gives z = 8.",
      "20": "20 is not produced by any path: the first if is skipped, and the Else gives z = 8.",
      "D": "25 is not produced by any path: x stays 3, z becomes 8, so the sum is 16.",
      "25": "25 is not produced by any path: x stays 3, z becomes 8, so the sum is 16."
    }
  },
  {
    "id": "tech-mcq-s6-q30",
    "number": 30,
    "question": "Analyze the pseudocode below. Determine the final value printed for a + b + c. (Assume ^ is bitwise XOR.)",
    "options": [
      {
        "id": "A",
        "text": "35"
      },
      {
        "id": "B",
        "text": "38"
      },
      {
        "id": "C",
        "text": "48"
      },
      {
        "id": "D",
        "text": "55"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode Tracing",
    "difficulty": "Hard",
    "explanation": "(2+6 >= 4) is True, so b = (4+6)+4 = 14. Inner check: 3+14 = 17 < 10+2+6 = 18 is True, so a = (14 ^ 2) + 6 = 12 + 6 = 18. c stays 6. Sum = 18 + 14 + 6 = 38.",
    "marks": 1,
    "code": "Integer a, b, c\nSet a = 2, b = 4, c = 6\n\nif((a + c) >= b)\n    b = (b + c) + b\n\n    if((3 + b) < (10 + a + c))\n        a = (b ^ a) + c\n    Else\n        c = 5 + b\n    End if\nEnd if\n\nPrint a + b + c",
    "optionExplanations": {
      "A": "35 would be the result if the inner Else ran (c = 5 + 14 = 19, a = 2), but 17 < 18 is True so that branch is skipped.",
      "35": "35 would be the result if the inner Else ran (c = 5 + 14 = 19, a = 2), but 17 < 18 is True so that branch is skipped.",
      "B": "(2+6 >= 4) is True, so b = (4+6)+4 = 14. Inner check: 3+14 = 17 < 10+2+6 = 18 is True, so a = (14 ^ 2) + 6 = 12 + 6 = 18. c stays 6. Sum = 18 + 14 + 6 = 38.",
      "38": "(2+6 >= 4) is True, so b = (4+6)+4 = 14. Inner check: 3+14 = 17 < 10+2+6 = 18 is True, so a = (14 ^ 2) + 6 = 12 + 6 = 18. c stays 6. Sum = 18 + 14 + 6 = 38.",
      "C": "48 is not produced by any path; the executed path gives a = 18, b = 14, c = 6.",
      "48": "48 is not produced by any path; the executed path gives a = 18, b = 14, c = 6.",
      "D": "55 does not match; even treating ^ as exponent gives a = 196 + 6 and a far larger total.",
      "55": "55 does not match; even treating ^ as exponent gives a = 196 + 6 and a far larger total."
    }
  },
  {
    "id": "tech-mcq-s6-q31",
    "number": 31,
    "question": "Evaluate the pseudocode function below for arguments: m = 2, n = 4, p = 6. What is the printed result?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "28"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode Tracing",
    "difficulty": "Easy",
    "explanation": "Outer condition: (2 + 4 + 6 = 12) < 10 is False, so the whole block is skipped. Output is the initial sum: 2 + 4 + 6 = 12.",
    "marks": 1,
    "code": "Integer computeVal(Integer m, Integer n, Integer p)\n\nif((m + n + p) < (10))\n    m = n + p\n    if((n + p + m) < 20)\n        m = (n + m) + n\n    Else\n        n = 5 + m\n    End if\n    p = (n + p) + p\nend if\n\nPrint m + n + p",
    "optionExplanations": {
      "A": "Outer condition: (2 + 4 + 6 = 12) < 10 is False, so the whole block is skipped. Output is the initial sum: 2 + 4 + 6 = 12.",
      "12": "Outer condition: (2 + 4 + 6 = 12) < 10 is False, so the whole block is skipped. Output is the initial sum: 2 + 4 + 6 = 12.",
      "B": "16 would need the block to run, but 12 < 10 is False; if the block did run, the sum would be 52, not 16.",
      "16": "16 would need the block to run, but 12 < 10 is False; if the block did run, the sum would be 52, not 16.",
      "C": "22 is not reachable: the block is skipped, so m, n, p stay 2, 4, 6.",
      "22": "22 is not reachable: the block is skipped, so m, n, p stay 2, 4, 6.",
      "D": "28 is not reachable: the block is skipped, so the sum remains 12.",
      "28": "28 is not reachable: the block is skipped, so the sum remains 12."
    }
  },
  {
    "id": "tech-mcq-s6-q32",
    "number": 32,
    "question": "Consider the recursive pseudocode function below. What does calculate(4) return?",
    "options": [
      {
        "id": "A",
        "text": "Calculates 4 factorial (24)."
      },
      {
        "id": "B",
        "text": "Computes the sum of integers from 1 to 4 (10)."
      },
      {
        "id": "C",
        "text": "Calculates 2 to the power of 4 (16)."
      },
      {
        "id": "D",
        "text": "Returns the 4th Fibonacci number."
      }
    ],
    "correctAnswer": "B",
    "topic": "Recursion",
    "difficulty": "Easy",
    "explanation": "The function recursively adds n to calculate(n-1), which computes the sum of integers from 1 to 4 (4+3+2+1 = 10).",
    "marks": 1,
    "code": "FUNCTION calculate(n):\n    IF n === 0\n        RETURN 0\n    ELSE:\n        RETURN n + calculate(n - 1)\n    END IF\nEND FUNCTION calculate",
    "optionExplanations": {
      "A": "Factorial would multiply (4 x 3 x 2 x 1); this function adds n to the recursive result.",
      "Calculates 4 factorial (24).": "Factorial would multiply (4 x 3 x 2 x 1); this function adds n to the recursive result.",
      "B": "The function recursively adds n to calculate(n-1), which computes the sum of integers from 1 to 4 (4+3+2+1 = 10).",
      "Computes the sum of integers from 1 to 4 (10).": "The function recursively adds n to calculate(n-1), which computes the sum of integers from 1 to 4 (4+3+2+1 = 10).",
      "C": "2^4 would double at each step; this function adds n, not multiplies by 2.",
      "Calculates 2 to the power of 4 (16).": "2^4 would double at each step; this function adds n, not multiplies by 2.",
      "D": "Fibonacci adds the previous two terms via two recursive calls; this function makes one call and adds n.",
      "Returns the 4th Fibonacci number.": "Fibonacci adds the previous two terms via two recursive calls; this function makes one call and adds n."
    }
  },
  {
    "id": "tech-mcq-s6-q33",
    "number": 33,
    "question": "What output value is printed upon executing the pseudocode below?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "topic": "Pseudocode Tracing / Bitwise",
    "difficulty": "Medium",
    "explanation": "matrix[0][1] = (1 & 4) = 0. Condition: (4 - 0) > 3 is True, so matrix[0][0] = 4 + 5 = 9. Print matrix[1][1] + matrix[0][0] = 3 + 9 = 12.",
    "marks": 1,
    "code": "Integer matrix[2][2] = {{4, 2}, {1, 3}}\n\nmatrix[0][1] = (matrix[1][0] & matrix[0][0])\n\nif ((matrix[0][0] - matrix[0][1]) > 3)\n    matrix[0][0] = matrix[0][0] + 5\nEnd if\n\nPrint matrix[1][1] + matrix[0][0]",
    "optionExplanations": {
      "A": "7 would result only if the if-block were skipped (3 + 4), but 4 - 0 = 4 > 3 is True.",
      "7": "7 would result only if the if-block were skipped (3 + 4), but 4 - 0 = 4 > 3 is True.",
      "B": "9 is just the updated matrix[0][0]; it forgets to add matrix[1][1] = 3.",
      "9": "9 is just the updated matrix[0][0]; it forgets to add matrix[1][1] = 3.",
      "C": "matrix[0][1] = (1 & 4) = 0. Condition: (4 - 0) > 3 is True, so matrix[0][0] = 4 + 5 = 9. Print matrix[1][1] + matrix[0][0] = 3 + 9 = 12.",
      "12": "matrix[0][1] = (1 & 4) = 0. Condition: (4 - 0) > 3 is True, so matrix[0][0] = 4 + 5 = 9. Print matrix[1][1] + matrix[0][0] = 3 + 9 = 12.",
      "D": "15 is not produced by any evaluation; it would need matrix[1][1] to be 6.",
      "15": "15 is not produced by any evaluation; it would need matrix[1][1] to be 6."
    }
  },
  {
    "id": "tech-mcq-s6-q34",
    "number": 34,
    "question": "Determine the final output value printed after running the loop pseudocode below:",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "33"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode Tracing / Loops",
    "difficulty": "Medium",
    "explanation": "Loop 1: y = 1+3 = 4; y = 4+4 = 8; y = (8 & 1) + 8 = 8. Loop 2: y = 8+3 = 11; y = 11+4 = 15; y = (15 & 1) + 15 = 16. Print x + y = 4 + 16 = 20.",
    "marks": 1,
    "code": "Integer x, y, z\nSet x = 4, y = 1, z = 0\n\nfor(each z from 1 to 2)\n    y = y + 3\n    y = y + x\n    y = (y & 1) + y\nEnd for\n\nPrint x + y",
    "optionExplanations": {
      "A": "Loop 1: y = 1+3 = 4; y = 4+4 = 8; y = (8 & 1) + 8 = 8. Loop 2: y = 8+3 = 11; y = 11+4 = 15; y = (15 & 1) + 15 = 16. Print x + y = 4 + 16 = 20.",
      "20": "Loop 1: y = 1+3 = 4; y = 4+4 = 8; y = (8 & 1) + 8 = 8. Loop 2: y = 8+3 = 11; y = 11+4 = 15; y = (15 & 1) + 15 = 16. Print x + y = 4 + 16 = 20.",
      "B": "27 would need y = 23, but y ends at 16 after two iterations.",
      "27": "27 would need y = 23, but y ends at 16 after two iterations.",
      "C": "33 would need y = 29, but y ends at 16.",
      "33": "33 would need y = 29, but y ends at 16.",
      "D": "40 would need y = 36, but y ends at 16.",
      "40": "40 would need y = 36, but y ends at 16."
    }
  },
  {
    "id": "tech-mcq-s6-q35",
    "number": 35,
    "question": "Analyze the regular expression pseudocode below. Which input string returns Valid?",
    "options": [
      {
        "id": "A",
        "text": "123-AB"
      },
      {
        "id": "B",
        "text": "12-ABC"
      },
      {
        "id": "C",
        "text": "1234-A"
      },
      {
        "id": "D",
        "text": "ab-123"
      }
    ],
    "correctAnswer": "A",
    "topic": "Regular Expressions",
    "difficulty": "Easy",
    "explanation": "The regex ^[0-9]{3}-[A-Z]{2}$ matches exactly 3 digits, a hyphen, and 2 uppercase letters. 123-AB matches perfectly.",
    "marks": 1,
    "code": "function testRegex(string s):\n    if s matches \"^[0-9]{3}-[A-Z]{2}$\"\n        then print \"Valid\"\n    else\n        then print \"Not Valid\"\n    endif\nend function",
    "optionExplanations": {
      "A": "The regex ^[0-9]{3}-[A-Z]{2}$ matches exactly 3 digits, a hyphen, and 2 uppercase letters. 123-AB matches perfectly.",
      "123-AB": "The regex ^[0-9]{3}-[A-Z]{2}$ matches exactly 3 digits, a hyphen, and 2 uppercase letters. 123-AB matches perfectly.",
      "B": "12-ABC has only 2 digits and 3 letters; the pattern needs exactly 3 digits and 2 letters.",
      "12-ABC": "12-ABC has only 2 digits and 3 letters; the pattern needs exactly 3 digits and 2 letters.",
      "C": "1234-A has 4 digits and 1 letter, so it does not match {3} and {2}.",
      "1234-A": "1234-A has 4 digits and 1 letter, so it does not match {3} and {2}.",
      "D": "ab-123 uses lowercase letters and has the digits and letters in the wrong order.",
      "ab-123": "ab-123 uses lowercase letters and has the digits and letters in the wrong order."
    }
  },
  {
    "id": "tech-mcq-s6-q36",
    "number": 36,
    "question": "A developer declares an array items = [10, 20, 30, 40] and wants to print the 2nd element using 0-indexed syntax. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "PRINT items[1]"
      },
      {
        "id": "B",
        "text": "PRINT items[2]"
      },
      {
        "id": "C",
        "text": "PRINT items[0]"
      },
      {
        "id": "D",
        "text": "PRINT items[4]"
      }
    ],
    "correctAnswer": "A",
    "topic": "Arrays / Indexing",
    "difficulty": "Easy",
    "explanation": "In 0-indexed arrays, index 0 is the 1st element, and index 1 corresponds to the 2nd element (20).",
    "marks": 1,
    "optionExplanations": {
      "A": "In 0-indexed arrays, index 0 is the 1st element, and index 1 corresponds to the 2nd element (20).",
      "PRINT items[1]": "In 0-indexed arrays, index 0 is the 1st element, and index 1 corresponds to the 2nd element (20).",
      "B": "items[2] is the 3rd element (30).",
      "PRINT items[2]": "items[2] is the 3rd element (30).",
      "C": "items[0] is the 1st element (10).",
      "PRINT items[0]": "items[0] is the 1st element (10).",
      "D": "items[4] is out of bounds in a 4-element array.",
      "PRINT items[4]": "items[4] is out of bounds in a 4-element array."
    }
  },
  {
    "id": "tech-mcq-s6-q37",
    "number": 37,
    "question": "An engineer needs a SQL query to retrieve all customer records along with their matching orders, including customers who have never placed an order. Which JOIN should be used?",
    "options": [
      {
        "id": "A",
        "text": "SELECT * FROM Customers C INNER JOIN Orders O ON C.CustomerID = O.CustomerID;"
      },
      {
        "id": "B",
        "text": "SELECT * FROM Customers C LEFT JOIN Orders O ON C.CustomerID = O.CustomerID;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM Customers C RIGHT JOIN Orders O ON C.CustomerID = O.CustomerID;"
      },
      {
        "id": "D",
        "text": "SELECT * FROM Customers C CROSS JOIN Orders O;"
      }
    ],
    "correctAnswer": "B",
    "topic": "SQL / Joins",
    "difficulty": "Easy",
    "explanation": "A LEFT JOIN preserves all rows from the left table (Customers) regardless of whether a matching order exists.",
    "marks": 1,
    "optionExplanations": {
      "A": "INNER JOIN returns only customers with matching orders, dropping those who never ordered.",
      "SELECT * FROM Customers C INNER JOIN Orders O ON C.CustomerID = O.CustomerID;": "INNER JOIN returns only customers with matching orders, dropping those who never ordered.",
      "B": "A LEFT JOIN preserves all rows from the left table (Customers) regardless of whether a matching order exists.",
      "SELECT * FROM Customers C LEFT JOIN Orders O ON C.CustomerID = O.CustomerID;": "A LEFT JOIN preserves all rows from the left table (Customers) regardless of whether a matching order exists.",
      "C": "RIGHT JOIN keeps all orders, not all customers, so customers without orders are lost.",
      "SELECT * FROM Customers C RIGHT JOIN Orders O ON C.CustomerID = O.CustomerID;": "RIGHT JOIN keeps all orders, not all customers, so customers without orders are lost.",
      "D": "CROSS JOIN gives every customer x order combination with no matching condition.",
      "SELECT * FROM Customers C CROSS JOIN Orders O;": "CROSS JOIN gives every customer x order combination with no matching condition."
    }
  },
  {
    "id": "tech-mcq-s6-q38",
    "number": 38,
    "question": "Which SQL function expression correctly computes the count of the letter 'a' in an EmployeeName column?",
    "options": [
      {
        "id": "A",
        "text": "SELECT LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'a', '')) FROM Employees;"
      },
      {
        "id": "B",
        "text": "SELECT COUNT(EmployeeName) FROM Employees WHERE EmployeeName = 'a';"
      },
      {
        "id": "C",
        "text": "SELECT SUBSTRING(EmployeeName, 'a') FROM Employees;"
      },
      {
        "id": "D",
        "text": "SELECT SUM(EmployeeName) FROM Employees;"
      }
    ],
    "correctAnswer": "A",
    "topic": "SQL / String Functions",
    "difficulty": "Medium",
    "explanation": "Subtracting the length of the string after removing 'a' from the original string length yields the frequency of 'a'.",
    "marks": 1,
    "optionExplanations": {
      "A": "Subtracting the length of the string after removing 'a' from the original string length yields the frequency of 'a'.",
      "SELECT LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'a', '')) FROM Employees;": "Subtracting the length of the string after removing 'a' from the original string length yields the frequency of 'a'.",
      "B": "This counts rows whose name is exactly 'a', not occurrences of the letter inside names.",
      "SELECT COUNT(EmployeeName) FROM Employees WHERE EmployeeName = 'a';": "This counts rows whose name is exactly 'a', not occurrences of the letter inside names.",
      "C": "SUBSTRING with a character argument is invalid, and it returns text rather than a count.",
      "SELECT SUBSTRING(EmployeeName, 'a') FROM Employees;": "SUBSTRING with a character argument is invalid, and it returns text rather than a count.",
      "D": "SUM cannot be applied to text values and does not count letters.",
      "SELECT SUM(EmployeeName) FROM Employees;": "SUM cannot be applied to text values and does not count letters."
    }
  },
  {
    "id": "tech-mcq-s6-q39",
    "number": 39,
    "question": "A high-end workstation suffers graphics stuttering. The technician suspects a bandwidth bottleneck on the motherboard expansion bus connecting the GPU. Which bus architecture handles this?",
    "options": [
      {
        "id": "A",
        "text": "PCIe (Peripheral Component Interconnect Express)"
      },
      {
        "id": "B",
        "text": "USB 1.1"
      },
      {
        "id": "C",
        "text": "IDE Ribbon Cable"
      },
      {
        "id": "D",
        "text": "Serial ATA 1.0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Computer Hardware",
    "difficulty": "Easy",
    "explanation": "PCIe is the high-speed motherboard expansion bus connecting discrete graphics cards and high-performance peripherals.",
    "marks": 1,
    "optionExplanations": {
      "A": "PCIe is the high-speed motherboard expansion bus connecting discrete graphics cards and high-performance peripherals.",
      "PCIe (Peripheral Component Interconnect Express)": "PCIe is the high-speed motherboard expansion bus connecting discrete graphics cards and high-performance peripherals.",
      "B": "USB 1.1 (12 Mbps) is far too slow for a GPU and is not a motherboard expansion bus.",
      "USB 1.1": "USB 1.1 (12 Mbps) is far too slow for a GPU and is not a motherboard expansion bus.",
      "C": "An IDE ribbon cable is a legacy storage interface, not a GPU expansion bus.",
      "IDE Ribbon Cable": "An IDE ribbon cable is a legacy storage interface, not a GPU expansion bus.",
      "D": "Serial ATA 1.0 is a storage interface (1.5 Gbps) and cannot connect a graphics card.",
      "Serial ATA 1.0": "Serial ATA 1.0 is a storage interface (1.5 Gbps) and cannot connect a graphics card."
    }
  },
  {
    "id": "tech-mcq-s6-q40",
    "number": 40,
    "question": "An embedded storage controller caches small write requests in onboard DRAM before writing to non-volatile flash memory to improve endurance and speed. What storage technology feature is this?",
    "options": [
      {
        "id": "A",
        "text": "Write-back caching controller"
      },
      {
        "id": "B",
        "text": "Physical tape spooler"
      },
      {
        "id": "C",
        "text": "Analog modem dialer"
      },
      {
        "id": "D",
        "text": "Parallel port multiplexer"
      }
    ],
    "correctAnswer": "A",
    "topic": "Storage Systems",
    "difficulty": "Medium",
    "explanation": "Onboard controller cache (write-back caching) buffers disk requests to optimize throughput and performance.",
    "marks": 1,
    "optionExplanations": {
      "A": "Onboard controller cache (write-back caching) buffers disk requests to optimize throughput and performance.",
      "Write-back caching controller": "Onboard controller cache (write-back caching) buffers disk requests to optimize throughput and performance.",
      "B": "A tape spooler is sequential archival storage, not an onboard DRAM write cache.",
      "Physical tape spooler": "A tape spooler is sequential archival storage, not an onboard DRAM write cache.",
      "C": "An analog modem dialer is a communications device unrelated to storage caching.",
      "Analog modem dialer": "An analog modem dialer is a communications device unrelated to storage caching.",
      "D": "A parallel port multiplexer handles legacy I/O and has no role in flash write caching.",
      "Parallel port multiplexer": "A parallel port multiplexer handles legacy I/O and has no role in flash write caching."
    }
  },
  {
    "id": "tech-mcq-s6-q41",
    "number": 41,
    "question": "An OS kernel restricts background user applications from accessing memory spaces owned by other users. Which core OS mechanism enforces these security boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Memory Protection and Access Control Lists"
      },
      {
        "id": "B",
        "text": "Desktop Wallpaper Engine"
      },
      {
        "id": "C",
        "text": "Mouse Cursor Polling Rate"
      },
      {
        "id": "D",
        "text": "Audio Codec Driver"
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems",
    "difficulty": "Easy",
    "explanation": "Memory protection and access controls enforce strict process isolation and security boundaries in modern operating systems.",
    "marks": 1,
    "optionExplanations": {
      "A": "Memory protection and access controls enforce strict process isolation and security boundaries in modern operating systems.",
      "Memory Protection and Access Control Lists": "Memory protection and access controls enforce strict process isolation and security boundaries in modern operating systems.",
      "B": "A wallpaper engine is purely cosmetic and enforces no memory isolation.",
      "Desktop Wallpaper Engine": "A wallpaper engine is purely cosmetic and enforces no memory isolation.",
      "C": "Mouse polling rate relates to input responsiveness, not memory security.",
      "Mouse Cursor Polling Rate": "Mouse polling rate relates to input responsiveness, not memory security.",
      "D": "An audio codec driver handles sound encoding, not process isolation.",
      "Audio Codec Driver": "An audio codec driver handles sound encoding, not process isolation."
    }
  },
  {
    "id": "tech-mcq-s6-q42",
    "number": 42,
    "question": "A speaker using PowerPoint wants list bullet points to appear one by one progressively on each mouse click during a presentation. Which animation setting accomplishes this?",
    "options": [
      {
        "id": "A",
        "text": "Set paragraph text animation option to By Paragraph."
      },
      {
        "id": "B",
        "text": "Convert slides into static bitmap images."
      },
      {
        "id": "C",
        "text": "Apply Morph transition to background shapes."
      },
      {
        "id": "D",
        "text": "Disable all slide transitions."
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Office / PowerPoint",
    "difficulty": "Easy",
    "explanation": "Setting text animation to By Paragraph triggers bullet items sequentially upon successive clicks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Setting text animation to By Paragraph triggers bullet items sequentially upon successive clicks.",
      "Set paragraph text animation option to By Paragraph.": "Setting text animation to By Paragraph triggers bullet items sequentially upon successive clicks.",
      "B": "Converting slides to static images removes the text, so bullets cannot be animated.",
      "Convert slides into static bitmap images.": "Converting slides to static images removes the text, so bullets cannot be animated.",
      "C": "Morph is a slide transition, and applying it to background shapes does not reveal bullets on click.",
      "Apply Morph transition to background shapes.": "Morph is a slide transition, and applying it to background shapes does not reveal bullets on click.",
      "D": "Disabling transitions does not control how bullet text appears within a slide.",
      "Disable all slide transitions.": "Disabling transitions does not control how bullet text appears within a slide."
    }
  },
  {
    "id": "tech-mcq-s6-q43",
    "number": 43,
    "question": "Which keyboard shortcut in MS Word quickly inserts the current system date into a document?",
    "options": [
      {
        "id": "A",
        "text": "Alt + Shift + D"
      },
      {
        "id": "B",
        "text": "Ctrl + Alt + D"
      },
      {
        "id": "C",
        "text": "Shift + F11"
      },
      {
        "id": "D",
        "text": "Ctrl + Shift + T"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Office / Word",
    "difficulty": "Easy",
    "explanation": "Alt + Shift + D inserts the current system date field directly into an MS Word document.",
    "marks": 1,
    "optionExplanations": {
      "A": "Alt + Shift + D inserts the current system date field directly into an MS Word document.",
      "Alt + Shift + D": "Alt + Shift + D inserts the current system date field directly into an MS Word document.",
      "B": "Ctrl + Alt + D inserts an endnote in Word, not the date.",
      "Ctrl + Alt + D": "Ctrl + Alt + D inserts an endnote in Word, not the date.",
      "C": "Shift + F11 moves to the previous field in Word, not insert the date.",
      "Shift + F11": "Shift + F11 moves to the previous field in Word, not insert the date.",
      "D": "Ctrl + Shift + T reduces a hanging indent in Word, not insert the date.",
      "Ctrl + Shift + T": "Ctrl + Shift + T reduces a hanging indent in Word, not insert the date."
    }
  },
  {
    "id": "tech-mcq-s6-q44",
    "number": 44,
    "question": "Analyze the dataset table below (columns A-D, rows 2-5). What item is returned by the Excel formula =INDEX(A2:A5, MATCH(MAX(C2:C5), C2:C5, 0))?",
    "options": [
      {
        "id": "A",
        "text": "Router"
      },
      {
        "id": "B",
        "text": "Switch"
      },
      {
        "id": "C",
        "text": "Laptop"
      },
      {
        "id": "D",
        "text": "Desk"
      }
    ],
    "correctAnswer": "C",
    "topic": "MS Office / Excel",
    "difficulty": "Easy",
    "explanation": "MAX(C2:C5) returns 1200 (highest price). MATCH finds it at position 3, and INDEX retrieves Laptop.",
    "marks": 1,
    "data": {
      "columns": [
        "Item (Col A)",
        "Department (Col B)",
        "Price (Col C)",
        "Quantity (Col D)"
      ],
      "rows": [
        ["Router", "IT", 500, 5],
        ["Switch", "IT", 350, 10],
        ["Laptop", "IT", 1200, 3],
        ["Desk", "Office", 150, 20]
      ]
    },
    "optionExplanations": {
      "A": "Router has a price of 500, which is not the maximum.",
      "Router": "Router has a price of 500, which is not the maximum.",
      "B": "Switch has a price of 350, which is not the maximum.",
      "Switch": "Switch has a price of 350, which is not the maximum.",
      "C": "MAX(C2:C5) returns 1200 (highest price). MATCH finds it at position 3, and INDEX retrieves Laptop.",
      "Laptop": "MAX(C2:C5) returns 1200 (highest price). MATCH finds it at position 3, and INDEX retrieves Laptop.",
      "D": "Desk has a price of 150, the lowest, not the maximum.",
      "Desk": "Desk has a price of 150, the lowest, not the maximum."
    }
  },
  {
    "id": "tech-mcq-s6-q45",
    "number": 45,
    "question": "Following a security audit revealing excessive user privileges on enterprise servers, which principle should administrators apply to restrict account permissions?",
    "options": [
      {
        "id": "A",
        "text": "Principle of Least Privilege"
      },
      {
        "id": "B",
        "text": "Principle of Maximum Exposure"
      },
      {
        "id": "C",
        "text": "Default Administrator Sharing"
      },
      {
        "id": "D",
        "text": "Universal Access Policy"
      }
    ],
    "correctAnswer": "A",
    "topic": "Security Principles",
    "difficulty": "Easy",
    "explanation": "The Principle of Least Privilege restricts user and process permissions to the minimum necessary for performing required tasks.",
    "marks": 1,
    "optionExplanations": {
      "A": "The Principle of Least Privilege restricts user and process permissions to the minimum necessary for performing required tasks.",
      "Principle of Least Privilege": "The Principle of Least Privilege restricts user and process permissions to the minimum necessary for performing required tasks.",
      "B": "Maximum exposure is the opposite of restricting permissions and increases risk.",
      "Principle of Maximum Exposure": "Maximum exposure is the opposite of restricting permissions and increases risk.",
      "C": "Sharing default administrator access gives excess privileges, the very problem found in the audit.",
      "Default Administrator Sharing": "Sharing default administrator access gives excess privileges, the very problem found in the audit.",
      "D": "A universal access policy grants everyone access, which defeats permission restriction.",
      "Universal Access Policy": "A universal access policy grants everyone access, which defeats permission restriction."
    }
  }
];

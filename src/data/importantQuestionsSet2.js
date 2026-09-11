// src/data/importantQuestionsSet2.js
// 61 High-Frequency Accenture PYQs (Set 2 - Systems, DevOps, APIs, OS, Networks, Excel & Tools)

export const IMPORTANT_SET2_TIERS = [
  {
    "id": 1,
    "name": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "description": "Object vs block storage, private/hybrid clouds, shared responsibility model, and cloud elasticity."
  },
  {
    "id": 2,
    "name": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "description": "HTTP verbs (GET, POST), status codes (404), RESTful URI design, and API versioning strategies."
  },
  {
    "id": 3,
    "name": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "description": "Context switching, program counter (PC), process creation (fork/exec), CPU buses, and memory operations."
  },
  {
    "id": 4,
    "name": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "description": "OSI physical/network layers, TCP SYN-ACK, Remote Access vs Site-to-Site VPN, Wi-Fi WPA3, and routing attacks."
  },
  {
    "id": 5,
    "name": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "description": "Continuous deployment, container isolation, Excel formulas (FILTER, PivotTables), PowerPoint kiosk mode, and cipher analysis."
  }
];

export const IMPORTANT_SET2_TOPICS = [
  "All Topics",
  "Cloud Storage & Architecture",
  "HTTP & RESTful APIs",
  "Operating Systems & Processes",
  "Computer Networks & OSI",
  "VPN & Remote Connectivity",
  "DevOps & CI/CD",
  "Containerization & Microservices",
  "Network Security & Attacks",
  "MS Office & Excel Tools",
  "Cryptography & Wi-Fi Security"
];

export const importantSet2StudyGuides = {
  "1": {
    "title": "Cloud Architecture & Storage Models Quick Guide",
    "content": [
      "**Object Storage vs Block Storage:** Object storage (AWS S3, Azure Blob) automatically scales without manual provisioning and stores data with metadata and unique IDs. Block storage (EBS) provides raw block volumes for operating systems.",
      "**Cloud Deployment Models:** Private Cloud provides maximum security and governance for sensitive enterprise data. Hybrid Cloud bridges on-premises data centers with public clouds for elasticity.",
      "**Shared Responsibility Model:** Cloud provider secures physical infrastructure, facilities, and hypervisors. The customer is responsible for data, user access, and application configurations.",
      "**Reserved Instances:** Save up to 72% over on-demand rates by committing to a 1- or 3-year term, providing predictable cloud budgeting."
    ]
  },
  "2": {
    "title": "HTTP Methods, Status Codes & RESTful Design",
    "content": [
      "**HTTP Methods:** **GET:** Safe and idempotent; retrieves data without server-side state modification. **POST:** Submits data to be processed and creates new subordinate resources. **PUT:** Replaces or updates an entire resource.",
      "**HTTP Status Codes:** **200 OK** (Success), **400 Bad Request** (Malformed syntax), **403 Forbidden** (Authenticated but unauthorized), **404 Not Found** (Resource endpoint does not exist), **500 Internal Server Error**.",
      "**REST URI Best Practices:** Use clean, resource-oriented noun paths (e.g., `GET /products/{id}`) rather than action verbs. Include API versioning in the URL path (e.g., `/api/v2/products`)."
    ]
  },
  "3": {
    "title": "Operating Systems, Registers & Context Switching",
    "content": [
      "**Context Switching:** When the OS halts one process to execute another, it saves the **Program Counter (PC)** register (which holds the memory address of the next instruction to execute) and process control block (PCB).",
      "**Unix Process Creation:** `fork()` clones the calling process to create a child process. `exec()` replaces the child process's address space with a new executable program binary.",
      "**CPU Memory Operations:** Transferring data from the CPU accumulator into memory is a **Memory Write Operation**. Transferring data from memory to register is a **Memory Read**.",
      "**OS Device Management:** Handles I/O hardware drivers and buffering (e.g., SATA controllers) to abstract physical device mechanics from user applications."
    ]
  },
  "4": {
    "title": "Networking, VPN Topologies & Security Attacks",
    "content": [
      "**TCP 3-Way Handshake:** 1. Client sends **SYN** -> 2. Server responds with **SYN-ACK** -> 3. Client replies with **ACK**.",
      "**VPN Topologies:** **Remote Access VPN:** Connects individual telecommuting employees working from home to the internal corporate network. **Site-to-Site VPN:** Interconnects entire branch office networks permanently across geographic distances.",
      "**Network Topologies:** **Ring Topology:** Single closed loop; failure of a single node causes complete network disruption. **Star Topology:** Central switch isolates individual cable failures.",
      "**Attacks:** **Source Routing Attack:** Hackers specify the exact network path packets must travel to bypass intermediate firewall inspections. **Routing Table Poisoning:** Injects fake routing entries to divert traffic through attacker-controlled nodes."
    ]
  },
  "5": {
    "title": "DevOps, Containerization & Productivity Tools",
    "content": [
      "**CI/CD Practices:** **Continuous Deployment:** Automates the complete software delivery pipeline so every validated build is deployed to production without manual intervention. **Continuous Integration:** Frequently merges developer code into trunk.",
      "**Containers vs Virtual Machines:** Containers share the host OS kernel and runtime, providing lightweight isolation without separate hypervisor OS overhead. Rolling updates with health checks ensure zero downtime.",
      "**Excel Dynamic Formulas:** `=FILTER(array, condition)` dynamically extracts matching records. **PivotTable Calculated Fields** create custom summary formulas on summarized dimensions.",
      "**PowerPoint Kiosk Mode:** Setting a slide show to 'Browsed at a kiosk (full screen)' locks manual keyboard navigation, forcing sequential automated playback with voiceover."
    ]
  }
};

export const importantQuestionsSet2 = [
  {
    "id": "set2-q1",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Dynamic Scaling",
    "difficulty": "Easy",
    "question": "In a cloud-based application where scalability is crucial, which cloud storage option allows dynamic scaling without the need for manual intervention?",
    "options": [
      {
        "id": "A",
        "text": "Block storage"
      },
      {
        "id": "B",
        "text": "File storage"
      },
      {
        "id": "C",
        "text": "Object storage"
      },
      {
        "id": "D",
        "text": "Table storage"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Object storage automatically scales as data grows, making it ideal for highly scalable cloud applications.",
    "memoryTip": "Dynamic auto-scaling without manual intervention = Object Storage (S3 / Blob).",
    "breakdown": {
      "A": "Block storage manages data as fixed blocks (like virtual hard drives) and requires manual resizing and volume provisioning when limits are reached.",
      "B": "File storage organizes data in hierarchical folders via protocols like NFS/SMB, which typically require upfront capacity quota management.",
      "C": "Correct! Object storage stores data as discrete objects with metadata and unique identifiers, automatically scaling to exabytes without manual intervention.",
      "D": "Table storage is a NoSQL key-value attribute store, not a general-purpose unstructured binary cloud storage architecture."
    }
  },
  {
    "id": "set2-q2",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "HTTP Read-Only Methods",
    "difficulty": "Easy",
    "question": "A mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read data without making any changes to the server resources. Which HTTP method is most appropriate for this operation?",
    "options": [
      {
        "id": "A",
        "text": "POST"
      },
      {
        "id": "B",
        "text": "PUT"
      },
      {
        "id": "C",
        "text": "DELETE"
      },
      {
        "id": "D",
        "text": "GET"
      }
    ],
    "correctAnswer": "D",
    "explanation": "GET is used to retrieve data from a server without modifying any existing resources.",
    "memoryTip": "Safe & Read-only retrieval = HTTP GET.",
    "breakdown": {
      "A": "POST is used to submit data to be processed to a specified resource, often creating a new entry or modifying state.",
      "B": "PUT replaces all current representations of the target resource with the uploaded payload.",
      "C": "DELETE requests that a specified resource be removed from the server.",
      "D": "Correct! GET is a safe, idempotent method designed strictly to read/retrieve resources without mutating server state."
    }
  },
  {
    "id": "set2-q3",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "HTTP Status Codes",
    "difficulty": "Easy",
    "question": "During application development, a developer encounters an error due to an incorrect or unavailable API endpoint, resulting in a \u201cNot Found\u201d response. Which HTTP status code most accurately represents this error?",
    "options": [
      {
        "id": "A",
        "text": "404"
      },
      {
        "id": "B",
        "text": "500"
      },
      {
        "id": "C",
        "text": "403"
      },
      {
        "id": "D",
        "text": "400"
      }
    ],
    "correctAnswer": "A",
    "explanation": "HTTP 404 is returned when the requested endpoint or resource does not exist on the server.",
    "memoryTip": "Resource or URL missing = HTTP 404 Not Found.",
    "breakdown": {
      "A": "Correct! HTTP 404 Not Found indicates that the origin server did not find a current representation for the target resource.",
      "B": "500 Internal Server Error indicates an unhandled exception or crash occurred within the server application logic.",
      "C": "403 Forbidden indicates the server understood the request but refuses to authorize it even after authentication.",
      "D": "400 Bad Request indicates that the server cannot process the request due to malformed syntax or invalid client parameters."
    }
  },
  {
    "id": "set2-q4",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Unix System Calls",
    "difficulty": "Medium",
    "question": "A developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls fulfills this requirement in a Unix-like OS?",
    "options": [
      {
        "id": "A",
        "text": "fork() and exec()"
      },
      {
        "id": "B",
        "text": "wait() and signal()"
      },
      {
        "id": "C",
        "text": "clone() and kill()"
      },
      {
        "id": "D",
        "text": "open() and read()"
      }
    ],
    "correctAnswer": "A",
    "explanation": "fork() creates a new process and exec() replaces it with a new executable.",
    "memoryTip": "Create process = fork() | Replace executable = exec().",
    "breakdown": {
      "A": "Correct! fork() duplicates the existing process to create a child process, and exec() replaces the address space with a new executable program binary.",
      "B": "wait() pauses the parent until a child process terminates; signal() registers software interrupt handlers.",
      "C": "clone() creates threads/processes with shared memory flags; kill() sends signals to terminate or control processes.",
      "D": "open() and read() are low-level file I/O descriptor operations, not process lifecycle system calls."
    }
  },
  {
    "id": "set2-q5",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Transport Layer Security",
    "difficulty": "Easy",
    "question": "Which protocol is commonly used to secure data in transit over the internet by encrypting communication between systems?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "MTP"
      },
      {
        "id": "C",
        "text": "SSL/TLS"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "C",
    "explanation": "TLS (Transport Layer Security) encrypts data during transmission and is the modern, secure standard used for protecting data in transit.",
    "memoryTip": "Data in transit encryption standard = TLS (Transport Layer Security).",
    "breakdown": {
      "A": "HTTP transmits all data in clear plaintext over port 80 without any cryptographic protection.",
      "B": "MTP (Media Transfer Protocol) is an extension to PTP used for transferring media files over USB, not internet encryption.",
      "C": "Correct! TLS (and legacy SSL) operates above transport layer to provide end-to-end symmetric encryption and certificate authentication.",
      "D": "SMTP transfers emails across mail servers in cleartext unless wrapped inside STARTTLS."
    }
  },
  {
    "id": "set2-q6",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Cloud Deployment Models",
    "difficulty": "Easy",
    "question": "Assume that you have recently started working for an organization that is migrating to a cloudbased infrastructure. As part of IT governance, you are responsible for ensuring data security in the cloud environment. You are aware of various cloud deployment models and need to choose the most secure option for your organization's sensitive data. In the context of IT governance and cloud security, which cloud deployment model is typically the most secure choice for organizations with highly sensitive data?",
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
    "explanation": "Private cloud provides the highest security for highly sensitive organizational data.",
    "memoryTip": "Highest isolation & governance for sensitive data = Private Cloud.",
    "breakdown": {
      "A": "Public cloud infrastructure is multi-tenant and shared across multiple external organizations, increasing compliance risk for top-secret data.",
      "B": "Correct! A private cloud is dedicated exclusively to a single organization, offering complete physical and logical isolation, customized firewalls, and stringent governance.",
      "C": "Community cloud is shared between several organizations with common concerns (e.g., banks or universities), but still lacks single-tenant isolation.",
      "D": "Hybrid cloud links private and public environments; while flexible, the overall perimeter security must account for public cloud vulnerabilities."
    }
  },
  {
    "id": "set2-q7",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "TCP Handshake",
    "difficulty": "Easy",
    "question": "After initializing a connection attempt to a remote server, consider that a client application sends a SYN packet to indicate the request for establishing a reliable connection. What is the expected response from the server, assuming it is available and prepared to accept the connection from the client?",
    "options": [
      {
        "id": "A",
        "text": "ACK packet"
      },
      {
        "id": "B",
        "text": "SYN-ACK packet"
      },
      {
        "id": "C",
        "text": "FIN packet"
      },
      {
        "id": "D",
        "text": "RST packet"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The server responds with a SYN-ACK packet.",
    "memoryTip": "TCP 3-Way Handshake step 2: Client SYN -> Server SYN-ACK -> Client ACK.",
    "breakdown": {
      "A": "ACK alone is sent in step 3 by the client to confirm the server's SYN-ACK, not by the server in step 2.",
      "B": "Correct! In the TCP 3-way handshake, the server responds to the client's SYN with SYN-ACK (Synchronize-Acknowledge) to synchronize its own sequence numbers.",
      "C": "FIN is sent to initiate graceful teardown and closing of an active connection.",
      "D": "RST (Reset) is sent to abruptly reject or terminate an invalid or closed connection attempt."
    }
  },
  {
    "id": "set2-q8",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Wireless Protocols",
    "difficulty": "Easy",
    "question": "A network administrator is tasked with selecting a secure wireless encryption protocol. Which of the following is considered the most secure for Wi-Fi networks?",
    "options": [
      {
        "id": "A",
        "text": "WEP"
      },
      {
        "id": "B",
        "text": "WPA"
      },
      {
        "id": "C",
        "text": "WPA2"
      },
      {
        "id": "D",
        "text": "WPA3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "WPA3 is the most secure wireless encryption protocol.",
    "memoryTip": "Most modern & secure Wi-Fi encryption = WPA3 (with SAE & 192-bit enterprise security).",
    "breakdown": {
      "A": "WEP (Wired Equivalent Privacy) uses vulnerable RC4 and static 40-bit keys that can be broken in seconds.",
      "B": "WPA introduced TKIP as an emergency band-aid for WEP, but is now deprecated and insecure.",
      "C": "WPA2 uses AES-CCMP and was the standard for years, but is susceptible to KRACK (Key Reinstallation Attacks) and offline dictionary attacks.",
      "D": "Correct! WPA3 replaces PSK with Simultaneous Authentication of Equals (SAE), preventing offline dictionary attacks and offering 192-bit cryptographic suites."
    }
  },
  {
    "id": "set2-q9",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Routing Attacks",
    "difficulty": "Medium",
    "question": "Assume your computer's data was stolen by hackers through your network by mentioning the route to be used by the packets. This is done by the hackers to avoid security measures due to",
    "options": [
      {
        "id": "A",
        "text": "Man-in-the-Middle Attack"
      },
      {
        "id": "B",
        "text": "Packet Sniffing Attack"
      },
      {
        "id": "C",
        "text": "Source Routing Attack"
      },
      {
        "id": "D",
        "text": "Denial of Service Attack"
      }
    ],
    "correctAnswer": "C",
    "explanation": "This attack is called Source Routing Attack.",
    "memoryTip": "Packets specifying custom network route to bypass firewalls = Source Routing Attack.",
    "breakdown": {
      "A": "Man-in-the-Middle (MITM) intercepts communication between two parties, but does not specifically rely on IP packet source route headers.",
      "B": "Packet sniffing is passive packet inspection on a local segment using promiscuous network interfaces.",
      "C": "Correct! In a Source Routing Attack, the sender specifies the exact sequence of intermediate routers in the IP header to bypass security checkpoints and firewalls.",
      "D": "Denial of Service aims to deplete server CPU, bandwidth, or memory resources to render services unavailable."
    }
  },
  {
    "id": "set2-q10",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "CPU Memory Operations",
    "difficulty": "Medium",
    "question": "As a computer architect designing the control unit of a CPU, you need to specify how data is moved from the accumulator to memory. Which option best describes this operation?",
    "options": [
      {
        "id": "A",
        "text": "The process of transferring data from the accumulator to memory is called a register transfer"
      },
      {
        "id": "B",
        "text": "The process of transferring data from the accumulator to memory is called a memory read operation"
      },
      {
        "id": "C",
        "text": "The process of transferring data from the accumulator to memory is called a memory write operation"
      },
      {
        "id": "D",
        "text": "The process of transferring data from the accumulator to memory is called an instruction fetch"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Writing data from a CPU register (accumulator) into memory is classified as a memory write operation.",
    "memoryTip": "Accumulator -> Memory = Write | Memory -> Register = Read.",
    "breakdown": {
      "A": "Register transfer describes moving data directly between internal CPU registers, not between a register and main RAM memory.",
      "B": "Memory read loads data from main memory into a CPU register (e.g., loading from RAM into the accumulator).",
      "C": "Correct! Transferring data from an internal processor register (accumulator) into main memory writes new data into RAM, hence a memory write operation.",
      "D": "Instruction fetch reads the next machine instruction from program memory into the Instruction Register (IR)."
    }
  },
  {
    "id": "set2-q11",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "VPN & Remote Connectivity",
    "subtopic": "Hybrid Cloud Integration",
    "difficulty": "Medium",
    "question": "An enterprise is adopting a hybrid cloud model where they combine on-premise infrastructure with public cloud services to securely connect these environments and ensure reliability. What solutions should they implement?",
    "options": [
      {
        "id": "A",
        "text": "Unencrypted public HTTP endpoints"
      },
      {
        "id": "B",
        "text": "Secure VPN or dedicated connectivity like Direct Connect"
      },
      {
        "id": "C",
        "text": "Open Telnet connections over public internet"
      },
      {
        "id": "D",
        "text": "Standard dial-up modems without authentication"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Secure VPN or dedicated connectivity like Direct Connect ensures reliable hybrid cloud integration.",
    "memoryTip": "Connecting On-Premise to Public Cloud = IPSec VPN / AWS Direct Connect / Azure ExpressRoute.",
    "breakdown": {
      "A": "Public unencrypted HTTP endpoints expose sensitive enterprise database packets to snooping and tampering.",
      "B": "Correct! An enterprise hybrid cloud requires encrypted IPsec VPN tunnels or dedicated private fiber connections (AWS Direct Connect / Azure ExpressRoute) for low latency and high reliability.",
      "C": "Telnet is unencrypted and transmits credentials in plaintext, posing an extreme security vulnerability.",
      "D": "Dial-up modems lack the multi-gigabit bandwidth, redundancy, and cryptographic safeguards required for enterprise hybrid clouds."
    }
  },
  {
    "id": "set2-q12",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "VPN & Remote Connectivity",
    "subtopic": "Remote Access Topologies",
    "difficulty": "Easy",
    "question": "Assume that an employee at a multinational organization is working from home for some reason and needs to access the company's internal network to retrieve some files. Which type of VPN will be best suitable for this case?",
    "options": [
      {
        "id": "A",
        "text": "Site-to-Site VPN"
      },
      {
        "id": "B",
        "text": "Remote Access VPN"
      },
      {
        "id": "C",
        "text": "Router-to-Router Hardware VPN"
      },
      {
        "id": "D",
        "text": "Static MPLS Trunking without VPN"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Remote Access VPN is best suited for employees working from home.",
    "memoryTip": "Individual employee working remotely / WFH = Remote Access VPN.",
    "breakdown": {
      "A": "Site-to-Site VPN connects two fixed physical enterprise office branch networks, not individual roaming mobile laptops.",
      "B": "Correct! Remote Access VPN establishes a secure point-to-site encrypted tunnel between an individual user's remote device and the corporate intranet.",
      "C": "Router-to-router hardware VPNs require dedicated gateway routers at both ends, which telecommuting workers do not possess at home.",
      "D": "MPLS requires expensive leased provider circuits and physical telecommunication terminal drops."
    }
  },
  {
    "id": "set2-q13",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "DevOps & CI/CD",
    "subtopic": "Continuous Deployment",
    "difficulty": "Easy",
    "question": "The e-commerce company updates its website weekly by adding new features and fixes. Using an agile development approach, after each update, the new version is automatically deployed to the live environment. The practice involves automating the process of releasing software to production frequently and reliably. Which practice is being implemented?",
    "options": [
      {
        "id": "A",
        "text": "Continuous Deployment \u2014 automates frequent and reliable releases to production"
      },
      {
        "id": "B",
        "text": "Continuous Integration \u2014 focuses on merging code changes regularly to prevent integration issues"
      },
      {
        "id": "C",
        "text": "Continuous Testing \u2014 ensures automated tests are run continually to validate code quality"
      },
      {
        "id": "D",
        "text": "Monitoring \u2014 tracks application performance and user activity after deployment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Continuous Deployment automates frequent releases to production, ensuring new updates are delivered reliably without manual intervention.",
    "memoryTip": "Automated push to LIVE production environment = Continuous Deployment.",
    "breakdown": {
      "A": "Correct! Continuous Deployment (CD) automates the entire release process such that passing software builds are deployed automatically into live production.",
      "B": "Continuous Integration (CI) merges developer working copies to a shared mainline and runs automated builds and unit tests.",
      "C": "Continuous Testing executes automated test suites throughout the development pipeline, but does not deploy code to production.",
      "D": "Monitoring is the post-deployment observation of system health, application telemetry, and metrics."
    }
  },
  {
    "id": "set2-q14",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Packet Manipulation Attacks",
    "difficulty": "Medium",
    "question": "Hackers can manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to pull, extract, or edit data without detection. What type of attack Is this called?",
    "options": [
      {
        "id": "A",
        "text": "Brute Force Attack"
      },
      {
        "id": "B",
        "text": "Denial of Service (DoS) Attack"
      },
      {
        "id": "C",
        "text": "Man-in-the-Middle (MITM) attack"
      },
      {
        "id": "D",
        "text": "Buffer Overflow Attack"
      }
    ],
    "correctAnswer": "C",
    "explanation": "This type of attack is known as Man-in-the-Middle (MITM) attack.",
    "memoryTip": "Redirecting and intercepting live packet traffic between sender & receiver = Man-in-the-Middle (MITM).",
    "breakdown": {
      "A": "Brute force attacks attempt exhaustive combinations of passwords or encryption keys to breach credentials.",
      "B": "DoS attacks flood network pipes to make services inaccessible, rather than secretly eavesdropping or modifying packets.",
      "C": "Correct! In a Man-in-the-Middle (MITM) attack, the attacker intercepts and alters communications between two parties without either party knowing.",
      "D": "Buffer overflow attacks overwrite memory addresses by providing excess data inputs to exploit memory bounds."
    }
  },
  {
    "id": "set2-q15",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Context Switching Registers",
    "difficulty": "Medium",
    "question": "During a context switch, consider that the operating system saves the state of the currently running process and loads the state of the next process to be executed. Which crucial CPU register responsible for loading the address of the next instruction to be fetched must be saved and restored during this operation?",
    "options": [
      {
        "id": "A",
        "text": "Memory Data Register (MDR)"
      },
      {
        "id": "B",
        "text": "Instruction Register (IR)"
      },
      {
        "id": "C",
        "text": "The Program Counter (PC) register"
      },
      {
        "id": "D",
        "text": "Accumulator (AC)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Program Counter (PC) register must be saved and restored.",
    "memoryTip": "Next instruction memory address = Program Counter (PC).",
    "breakdown": {
      "A": "MDR holds data fetched from or waiting to be written to memory, not the sequencing pointer of upcoming instructions.",
      "B": "The Instruction Register holds the instruction currently being decoded and executed, not the pointer to the next instruction.",
      "C": "Correct! The Program Counter (PC) holds the memory address of the next instruction to fetch; saving it preserves the execution resume point.",
      "D": "The accumulator holds intermediate ALU calculation operands and arithmetic results."
    }
  },
  {
    "id": "set2-q16",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Device Controllers & Buses",
    "difficulty": "Hard",
    "question": "Suppose you want to design a bus system where input-output devices are connected to the computer via wires, and data transfer is handled electronically. The host controller sends messages to the device controller, which performs the operation. If the device controllers have a built-in cache for faster data transfer, which device will you choose?",
    "options": [
      {
        "id": "A",
        "text": "Enhanced Integrated Device Electronics A"
      },
      {
        "id": "B",
        "text": "Enhanced Integrated Device Electronics B (EIDE B)"
      },
      {
        "id": "C",
        "text": "Enhanced Integrated Device Electronics C"
      },
      {
        "id": "D",
        "text": "Enhanced Integrated Hard Driver"
      }
    ],
    "correctAnswer": "B",
    "explanation": "EIDE controllers include built-in caching to speed up data transfers between the host and storage devices.",
    "memoryTip": "Integrated bus controller with onboard cache = EIDE B (Enhanced IDE Type B).",
    "breakdown": {
      "A": "EIDE Type A does not incorporate high-throughput built-in caching hardware controllers.",
      "B": "Correct! EIDE Type B specifications incorporate on-board controller hardware caching to buffer electronic transfers between the host CPU and disk drives.",
      "C": "EIDE Type C is an unstandardized variant not recognized for device caching specifications in hardware architecture curriculums.",
      "D": "Integrated Hard Driver is a drive component, not an interface bus controller architecture."
    }
  },
  {
    "id": "set2-q17",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Chosen Plaintext Attacks",
    "difficulty": "Hard",
    "question": "Each party encrypts messages before sending them using a shared secret key, and messages are decrypted by the receiving party using the same key. If an attacker can send a specially crafted message to one party and analyze the resulting encrypted output, which technique is most likely to compromise the secret key in this symmetric encryption system?",
    "options": [
      {
        "id": "A",
        "text": "Analyzing patterns in intercepted encrypted messages"
      },
      {
        "id": "B",
        "text": "Comparing the crafted message's encrypted output with previously encrypted messages"
      },
      {
        "id": "C",
        "text": "Performing a brute-force attack on intercepted messages"
      },
      {
        "id": "D",
        "text": "Matching message lengths to guess the content"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In a symmetric encryption system, a chosen-plaintext attack exploits the encryption of crafted messages to deduce the shared secret key.",
    "memoryTip": "Submitting crafted text & analyzing resulting ciphertext = Chosen Plaintext Attack.",
    "breakdown": {
      "A": "Ciphertext-only analysis without known plaintext pairs is mathematically intractable against modern symmetric ciphers.",
      "B": "Correct! In a Chosen Plaintext Attack (CPA), the cryptanalyst crafts custom input plaintexts and analyzes differences in corresponding ciphertexts to deduce key patterns.",
      "C": "Brute forcing a 128-bit or 256-bit symmetric key space requires billions of years of compute.",
      "D": "Matching message lengths gives coarse statistical metadata but cannot recover the secret key."
    }
  },
  {
    "id": "set2-q18",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Containerization & Microservices",
    "subtopic": "Container Isolation vs VMs",
    "difficulty": "Medium",
    "question": "A software development team is implementing containerization to streamline application deployment by encapsulating applications and their dependencies. Which characteristic defines containers in the context of software development and deployment?",
    "options": [
      {
        "id": "A",
        "text": "Virtual machines with a dedicated Hypervisor"
      },
      {
        "id": "B",
        "text": "A logical separate network within the server"
      },
      {
        "id": "C",
        "text": "Part of the same OS instance as the Hypervisor"
      },
      {
        "id": "D",
        "text": "Virtual computers running under a Hypervisor"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Containers run isolated applications within the same OS instance, unlike virtual machines that require a dedicated hypervisor and separate OS.",
    "memoryTip": "Containers share host OS kernel; VMs run separate guest OS over hypervisors.",
    "breakdown": {
      "A": "Virtual machines running on a dedicated hypervisor define full hardware virtualization, not containerization.",
      "B": "A logical separate network describes a virtual LAN (VLAN) or software-defined network, not containerization.",
      "C": "Correct! Containers run as isolated user-space processes sharing the same underlying host operating system kernel.",
      "D": "Virtual computers running independent OS instances are traditional virtual machines (VMs)."
    }
  },
  {
    "id": "set2-q19",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "WPA3 Android Configuration",
    "difficulty": "Hard",
    "question": "Assume that a developer is tasked with configuring a high-security Wi-Fi environment for a sensitive government project using Android devices. The configuration includes:\nConfig SAE = Y\nConfig SUITEB = Y\nConfigure SUITEB192 = Y\nIn the given scenario, which configuration line is incorrect or redundant and might potentially weaken the desired security level?",
    "options": [
      {
        "id": "A",
        "text": "Config SAE = Y"
      },
      {
        "id": "B",
        "text": "Config SUITEB = Y"
      },
      {
        "id": "C",
        "text": "Configure SUITEB192 = Y"
      },
      {
        "id": "D",
        "text": "All configuration lines are completely valid"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Configure SUITEB192 = Y is redundant and may weaken compatibility without added benefit.",
    "memoryTip": "SUITEB already covers 192-bit mode; adding duplicate SUITEB192 causes parser conflict.",
    "breakdown": {
      "A": "Config SAE = Y enables Simultaneous Authentication of Equals, the core mandatory handshake for WPA3.",
      "B": "Config SUITEB = Y enables the commercial National Security Agency (CNSA) cryptographic suite for high-security environments.",
      "C": "Correct! Specifying 'Configure SUITEB192 = Y' is redundant when SUITEB is already activated, leading to parser errors or negotiation fallback.",
      "D": "Having redundant directives introduces syntax incompatibilities in Android's wpa_supplicant."
    }
  },
  {
    "id": "set2-q20",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Storage Resource Pooling",
    "difficulty": "Medium",
    "question": "As part of a data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with a next generation storage solution. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing?",
    "options": [
      {
        "id": "A",
        "text": "Resource pooling eliminates the need for data backups entirely"
      },
      {
        "id": "B",
        "text": "Resource pooling enables dynamic allocation of shared storage capacity to meet demand"
      },
      {
        "id": "C",
        "text": "Resource pooling restricts storage access to local nodes only"
      },
      {
        "id": "D",
        "text": "Resource pooling limits storage capacity to single vendor drives"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Resource pooling enables dynamic allocation of shared storage capacity to meet demand.",
    "memoryTip": "Resource pooling aggregates heterogeneous physical drives into an elastic dynamic pool.",
    "breakdown": {
      "A": "Resource pooling abstracts disks but does not eliminate the need for backup copies or snapshot redundancy.",
      "B": "Correct! Resource pooling aggregates physical storage from diverse vendors into a unified virtual pool, enabling dynamic, elastic provisioning on demand.",
      "C": "Resource pooling allows storage to be accessed globally across the network rather than strictly by local nodes.",
      "D": "Resource pooling explicitly overcomes single-vendor limitations by supporting heterogeneous storage systems."
    }
  },
  {
    "id": "set2-q21",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Application Compatibility",
    "difficulty": "Medium",
    "question": "Consider you are a software developer working on a new application for a large corporation. Your application is expected to run on a variety of different computers with varying hardware specifications and operating systems. Which property of an operating system is most important for you to consider?",
    "options": [
      {
        "id": "A",
        "text": "Resource Allocation ensures smooth application execution across varied systems"
      },
      {
        "id": "B",
        "text": "Desktop Theme Customization ensures visual uniqueness"
      },
      {
        "id": "C",
        "text": "Sound Synthesizer Emulation controls acoustic outputs"
      },
      {
        "id": "D",
        "text": "Peripheral Disabling prevents hardware interrupts"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Resource Allocation ensures smooth application execution across varied systems.",
    "memoryTip": "Cross-platform execution across varied hardware = OS Resource Allocation.",
    "breakdown": {
      "A": "Correct! Resource allocation by the OS ensures that CPU time, memory space, and I/O bandwidth are dynamically scheduled so applications run reliably on varied hardware.",
      "B": "Desktop theme customization is a cosmetic UI feature that does not influence hardware compatibility or execution reliability.",
      "C": "Sound synthesizer emulation is an auxiliary multimedia driver feature unrelated to broad hardware execution.",
      "D": "Disabling peripherals would degrade system functionality rather than ensure broad application compatibility."
    }
  },
  {
    "id": "set2-q22",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Traffic Spike Handling",
    "difficulty": "Easy",
    "question": "An e-commerce website experiences sudden traffic spikes during a flash sale. The platform needs to access resources to handle the increase without manual intervention. Which cloud features should be prioritized?",
    "options": [
      {
        "id": "A",
        "text": "Static server provisioning and fixed IP binding"
      },
      {
        "id": "B",
        "text": "Auto-scaling and load balancing should be prioritized"
      },
      {
        "id": "C",
        "text": "Disabling customer logins and running offline backups"
      },
      {
        "id": "D",
        "text": "Manual overclocking of server processors"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Auto-scaling and load balancing should be prioritized.",
    "memoryTip": "Sudden traffic surges handled automatically = Auto-scaling + Load Balancing.",
    "breakdown": {
      "A": "Static provisioning cannot respond dynamically to sudden traffic bursts and leads to server crashes or idle waste.",
      "B": "Correct! Auto-scaling dynamically adds computing instances based on real-time load, while load balancers distribute incoming requests evenly across healthy nodes.",
      "C": "Disabling customer logins destroys revenue during a flash sale and fails to provide scalability.",
      "D": "Manual processor overclocking is impossible in multi-tenant cloud environments and risks thermal throttling."
    }
  },
  {
    "id": "set2-q23",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Shared Responsibility Model",
    "difficulty": "Easy",
    "question": "Assume that a company migrates its application to a cloud-connected environment where the cloud provider handles infrastructure services while the customer develops and deploys the application. How does the shared responsibility model impact security management in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "The cloud provider manages 100% of all application security and user credentials"
      },
      {
        "id": "B",
        "text": "Both the cloud provider and the customer share security responsibilities"
      },
      {
        "id": "C",
        "text": "The customer is solely responsible for physical security of the cloud data centers"
      },
      {
        "id": "D",
        "text": "Security responsibilities are completely transferred to third-party ISPs"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Both the cloud provider and the customer share security responsibilities.",
    "memoryTip": "Cloud Provider protects infrastructure (Security OF the Cloud) | Customer protects data & code (Security IN the Cloud).",
    "breakdown": {
      "A": "The cloud provider does not control customer source code, user permissions, or data encryption.",
      "B": "Correct! Under the shared responsibility model, the provider secures the underlying infrastructure, while the customer is responsible for application logic, access control, and data.",
      "C": "Physical security of the servers and data center facilities is strictly the responsibility of the cloud provider.",
      "D": "Internet service providers merely transmit network packets; they do not assume application or infrastructure security duties."
    }
  },
  {
    "id": "set2-q24",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "MS Office & Excel Tools",
    "subtopic": "PowerPoint Kiosk Mode",
    "difficulty": "Medium",
    "question": "You are building a training module in MS PowerPoint and want to restrict navigation so that users view each slide sequentially with narration, without freely skipping slides. Which setting provides the strictest control over slide navigation?",
    "options": [
      {
        "id": "A",
        "text": "Add hyperlinks between slides"
      },
      {
        "id": "B",
        "text": "Use normal Slide Show mode"
      },
      {
        "id": "C",
        "text": "Set up Slide Show as Browsed at a kiosk (full screen)"
      },
      {
        "id": "D",
        "text": "Enable Presenter View"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\u201cKiosk mode\u201d disables manual slide navigation and forces slides to advance only as designed, providing the strictest control.",
    "memoryTip": "Strict slide show lock / No skipping = Browsed at a kiosk (full screen).",
    "breakdown": {
      "A": "Hyperlinks allow users to jump around to arbitrary slides, defeating the strict sequential restriction.",
      "B": "Normal Slide Show mode permits the user to click, press arrow keys, or use spacebar to advance or skip slides freely.",
      "C": "Correct! 'Browsed at a kiosk (full screen)' disables manual mouse clicks and keyboard arrows, forcing slides to advance only according to preset timings or designed triggers.",
      "D": "Presenter View provides speaker notes, timers, and slide thumbnail previews for the presenter, not restricted kiosk playback."
    }
  },
  {
    "id": "set2-q25",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "Email Transmission Protocols",
    "difficulty": "Easy",
    "question": "If a company wants to ensure secure and reliable email transmission for its cloud-based email service, which protocol should they implement?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "POP3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending emails reliably between mail servers.",
    "memoryTip": "Sending / Transmitting email = SMTP (Port 25/587) | Receiving email = POP3 / IMAP.",
    "breakdown": {
      "A": "HTTP is designed for hypermedia document delivery on the World Wide Web, not standardized mail transfer.",
      "B": "FTP transfers raw files between computers and has no awareness of email routing headers or envelopes.",
      "C": "Correct! Simple Mail Transfer Protocol (SMTP), commonly secured via TLS/STARTTLS, is the industry standard for sending and transmitting emails between servers.",
      "D": "POP3 is a mail retrieval protocol used by email clients to download messages from a server mailbox, not for sending transmission."
    }
  },
  {
    "id": "set2-q26",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "MS Office & Excel Tools",
    "subtopic": "Word Document Templates",
    "difficulty": "Easy",
    "question": "To create a document template for repeated use, which file format should you save the document in?",
    "options": [
      {
        "id": "A",
        "text": ".docx"
      },
      {
        "id": "B",
        "text": ".pdf"
      },
      {
        "id": "C",
        "text": ".dotx"
      },
      {
        "id": "D",
        "text": ".txt"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The .dotx format is specifically designed for Word document templates intended for repeated use.",
    "memoryTip": "Word Template format = .dotx (Document Template XML).",
    "breakdown": {
      "A": ".docx is the standard editable Microsoft Word document format, which overwrites the original file when edited and saved.",
      "B": ".pdf is a fixed-layout portable document format intended for read-only viewing and printing.",
      "C": "Correct! The .dotx extension denotes an Office Open XML Word Template; opening it spawns a new unsaved document copy to preserve the original master template.",
      "D": ".txt is a plain ASCII/Unicode text file without any formatting, styles, headers, or template capabilities."
    }
  },
  {
    "id": "set2-q27",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Containerization & Microservices",
    "subtopic": "Kernel Resource Isolation",
    "difficulty": "Hard",
    "question": "An application relies on multiple hardware peripherals and requires strict isolation from other running containers to maintain data integrity and operational security. The development team uses a kernel-level configuration to allocate specific hardware resources to each container and restrict access to non-allocated devices. What is the most critical factor in maintaining operational security and preventing resource contention among containers?",
    "options": [
      {
        "id": "A",
        "text": "Ensuring that the host OS scheduler allocates CPU cycles equally to all containers"
      },
      {
        "id": "B",
        "text": "Configuring the kernel to enforce strict resource isolation and limit peripheral access to only allocated devices"
      },
      {
        "id": "C",
        "text": "Allowing virtualization software to dynamically allocate additional memory as required"
      },
      {
        "id": "D",
        "text": "Allowing containers to share network interfaces with individual access controls"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Strict kernel-level resource isolation prevents unauthorized hardware access and avoids resource contention between containers.",
    "memoryTip": "Container peripheral security = Kernel-level cgroups and device namespace isolation.",
    "breakdown": {
      "A": "Equal CPU cycle allocation handles thread fairness, but does nothing to isolate or protect hardware device access.",
      "B": "Correct! Configuring kernel namespaces, cgroups, and device allow-lists ensures containers cannot access unauthorized peripherals, maintaining operational security and preventing contention.",
      "C": "Dynamic memory allocation helps buffer memory shortages but does not enforce peripheral hardware device boundaries.",
      "D": "Shared network interfaces focus on communication routing, but do not solve peripheral hardware access contention."
    }
  },
  {
    "id": "set2-q28",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Storage Bus Controllers",
    "difficulty": "Medium",
    "question": "Data is transferred between the CPU and a peripheral device through a shared bus controlled by device controllers to improve data transfer speed and reduce latency. The system uses controllers with dedicated high-speed buffers. Which of the following device controllers is most suitable for this purpose?",
    "options": [
      {
        "id": "A",
        "text": "Wireless Controller"
      },
      {
        "id": "B",
        "text": "USB Controller"
      },
      {
        "id": "C",
        "text": "SATA Controller"
      },
      {
        "id": "D",
        "text": "Ethernet Controller"
      }
    ],
    "correctAnswer": "C",
    "explanation": "SATA controllers provide high-speed buffered data transfer between storage devices and the CPU, minimizing latency and improving throughput.",
    "memoryTip": "Storage device controller with dedicated high-speed buffers = SATA Controller.",
    "breakdown": {
      "A": "Wireless controllers manage 802.11 RF radio transceivers, not internal CPU-to-storage high-speed buses.",
      "B": "USB controllers manage external serial plug-and-play peripherals, but suffer higher protocol overhead than direct storage controllers.",
      "C": "Correct! SATA (Serial ATA) controllers connect high-speed storage devices to the motherboard with onboard FIFO buffers, reducing latency and maximizing data throughput.",
      "D": "Ethernet controllers handle packet framing for local area network communication, not internal peripheral disk storage."
    }
  },
  {
    "id": "set2-q29",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Routing Table Poisoning",
    "difficulty": "Medium",
    "question": "Hackers attempt to intercept and manipulate data packets traveling across a network by inserting malicious code or routing information, allowing them to redirect traffic through their own system. This enables them to eavesdrop or alter data without detection. What type of attack is this called?",
    "options": [
      {
        "id": "A",
        "text": "Packet Sniffing"
      },
      {
        "id": "B",
        "text": "IP Spoofing"
      },
      {
        "id": "C",
        "text": "Routing Table Poisoning"
      },
      {
        "id": "D",
        "text": "DNS Spoofing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Routing table poisoning redirects network traffic through the attacker's system, enabling interception or modification of data packets.",
    "memoryTip": "Corrupting route entries to divert traffic = Routing Table Poisoning.",
    "breakdown": {
      "A": "Packet sniffing passively inspects packets traveling on an unswitched network segment without altering routing paths.",
      "B": "IP spoofing creates IP packets with forged source addresses to impersonate another system.",
      "C": "Correct! Routing table poisoning (or route poisoning) injects fraudulent route advertisements into router tables, maliciously diverting traffic through the hacker's systems.",
      "D": "DNS spoofing (cache poisoning) substitutes fraudulent IP addresses for domain names in DNS resolvers."
    }
  },
  {
    "id": "set2-q30",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "OS Security Post-Breach",
    "difficulty": "Easy",
    "question": "You are employed by a company that has recently suffered a security breach. As the IT manager, you are responsible for enhancing the security of the computer's operating system. Which property of an operating system should you prioritize to achieve this goal?",
    "options": [
      {
        "id": "A",
        "text": "Access Control"
      },
      {
        "id": "B",
        "text": "User Interface"
      },
      {
        "id": "C",
        "text": "Multitasking"
      },
      {
        "id": "D",
        "text": "Virtual Memory"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Access control manages permissions and restricts unauthorized access, making it critical for operating system security.",
    "memoryTip": "Prioritize OS security post-breach = Access Control (Least Privilege & ACLs).",
    "breakdown": {
      "A": "Correct! Access control enforces user authentication, file permission masks, and principle of least privilege, preventing unauthorized intrusion and lateral movement.",
      "B": "User interface design affects usability and visual aesthetics, not cryptographic or kernel-level security.",
      "C": "Multitasking manages concurrent execution of processes, which does not prevent unauthorized file access.",
      "D": "Virtual memory provides memory paging and swap space, but does not enforce authentication or user permissions."
    }
  },
  {
    "id": "set2-q31",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "MS Office & Excel Tools",
    "subtopic": "PowerPoint Morph Transition",
    "difficulty": "Easy",
    "question": "Jane wants to create a slide that illustrates a progression over time using icons, text, and blanks. She wants it to appear visually dynamic without manually animating each step. Which MS PowerPoint feature can help speed up this process?",
    "options": [
      {
        "id": "A",
        "text": "Use Slide Zoom feature to create dynamic progression"
      },
      {
        "id": "B",
        "text": "Use a SmartArt process layout"
      },
      {
        "id": "C",
        "text": "Apply the Morph transition across duplicated slides for a smooth effect"
      },
      {
        "id": "D",
        "text": "Create a custom layout with background images and animation triggers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Morph transition automatically animates objects across slides, creating a smooth visual progression without manual animation.",
    "memoryTip": "Smooth dynamic animation across slides without manual setup = Morph Transition.",
    "breakdown": {
      "A": "Slide Zoom creates an interactive canvas to jump directly into specific slides, but does not smoothly interpolate individual icons and text positions.",
      "B": "SmartArt provides static pre-formatted diagram blocks; it does not generate automatic smooth motion transitions.",
      "C": "Correct! The Morph transition analyzes duplicated slides and automatically animates matching shapes, text, and icons from their starting positions to their ending positions.",
      "D": "Custom layouts with individual triggers require intensive manual timing setup, contradicting the goal of speeding up the process."
    }
  },
  {
    "id": "set2-q32",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Hardware Virtualization",
    "difficulty": "Easy",
    "question": "A cloud infrastructure requires running multiple isolated environments on a single physical server. Which technology is primarily used to achieve this?",
    "options": [
      {
        "id": "A",
        "text": "Containers"
      },
      {
        "id": "B",
        "text": "Virtual Machines (VMs)"
      },
      {
        "id": "C",
        "text": "Serverless computing"
      },
      {
        "id": "D",
        "text": "Dual-boot disk partitioning"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Virtual machines provide full isolation for multiple environments on a single physical server, making them ideal for securely running separate workloads.",
    "memoryTip": "Multiple isolated OS environments on single physical server = Virtual Machines (VMs).",
    "breakdown": {
      "A": "Containers share the host operating system kernel, meaning isolation is at process level rather than completely independent hardware/OS isolation.",
      "B": "Correct! Virtual Machines (VMs) run separate guest operating systems on virtualized hardware managed by a hypervisor, providing complete isolation on a single physical server.",
      "C": "Serverless computing executes ephemeral function code on demand without providing persistent isolated server environments.",
      "D": "Dual-boot partitioning allows only one operating system to run at a time, not multiple simultaneous isolated environments."
    }
  },
  {
    "id": "set2-q33",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Context Switching Program Counter",
    "difficulty": "Medium",
    "question": "During a context switch, the operating system saves the state of the currently running process and loads the state of the next process. Which CPU register, responsible for holding the address of the next instruction to be fetched, must be saved and restored during this operation?",
    "options": [
      {
        "id": "A",
        "text": "Stack Pointer"
      },
      {
        "id": "B",
        "text": "General Purpose Register"
      },
      {
        "id": "C",
        "text": "Program Counter"
      },
      {
        "id": "D",
        "text": "Instruction Register"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Program Counter stores the address of the next instruction, so saving and restoring it ensures the process resumes correctly after a context switch.",
    "memoryTip": "Address of next instruction to be fetched = Program Counter (PC).",
    "breakdown": {
      "A": "The Stack Pointer points to the top of the call stack (local variables and return addresses), not the address of the next instruction to fetch.",
      "B": "General Purpose Registers hold temporary values and calculation operands during arithmetic operations.",
      "C": "Correct! The Program Counter (PC) stores the memory address of the next machine instruction to be fetched; saving it in the Process Control Block ensures seamless resumption.",
      "D": "The Instruction Register holds the binary instruction currently undergoing decoding, not the pointer to the next instruction."
    }
  },
  {
    "id": "set2-q34",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "VPN & Remote Connectivity",
    "subtopic": "Site-to-Site VPN",
    "difficulty": "Easy",
    "question": "Two geographically separate offices, Office A and Office B, need to allow all users in Office A to securely access resources in Office B and vice versa, as if they were on the same local network. Which VPN topology is most appropriate for this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Remote Access VPN"
      },
      {
        "id": "B",
        "text": "Site-to-Site VPN"
      },
      {
        "id": "C",
        "text": "Client-to-Server VPN"
      },
      {
        "id": "D",
        "text": "Peer to Peer VPN"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Site-to-Site VPN connects entire networks across locations, allowing users in both offices to securely access each other's resources as if on the same LAN.",
    "memoryTip": "Connecting two physical office branch networks = Site-to-Site VPN.",
    "breakdown": {
      "A": "Remote Access VPN connects individual home teleworkers or mobile laptops to a central office, not two whole enterprise facilities.",
      "B": "Correct! A Site-to-Site VPN links the entire local area networks of Office A and Office B over an encrypted gateway-to-gateway tunnel.",
      "C": "Client-to-Server VPN connects individual software clients to a single server application.",
      "D": "Peer-to-Peer VPN connects individual peer nodes directly, without creating a permanent transparent LAN-to-LAN subnet route."
    }
  },
  {
    "id": "set2-q35",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "RESTful Resource Endpoints",
    "difficulty": "Easy",
    "question": "A development team is designing a new RESTful API to manage a product catalog for their ecommerce platform. They need to create an endpoint that retrieves details of a specific product using its unique product ID. Which HTTP method and URL structure best align with RESTful principles for this operation?",
    "options": [
      {
        "id": "A",
        "text": "POST /products/{productid}"
      },
      {
        "id": "B",
        "text": "GET /products/{productid}"
      },
      {
        "id": "C",
        "text": "PUT /products/{productid}"
      },
      {
        "id": "D",
        "text": "DELETE /products/{productid}"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The GET method is used in RESTful APIs to retrieve data, and including the product ID in the URL specifies the resource to fetch.",
    "memoryTip": "Retrieve single resource by ID = GET /collection/{id}.",
    "breakdown": {
      "A": "POST is used to create a new resource or execute processing actions, not to retrieve details of an existing product.",
      "B": "Correct! RESTful conventions dictate using HTTP GET with the resource identifier directly in the URL path: `GET /products/{productid}`.",
      "C": "PUT updates or completely replaces the representation of the product resource specified by the ID.",
      "D": "DELETE removes the product resource associated with `{productid}` from the database."
    }
  },
  {
    "id": "set2-q36",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Containerization & Microservices",
    "subtopic": "Container Memory Troubleshooting",
    "difficulty": "Medium",
    "question": "A containerized application is consuming massive memory, causing performance issues. What is the recommended approach to address this problem effectively?",
    "options": [
      {
        "id": "A",
        "text": "Increase the memory limit for the container"
      },
      {
        "id": "B",
        "text": "Use a larger base image for the container"
      },
      {
        "id": "C",
        "text": "Reduce the number of replicas of the container"
      },
      {
        "id": "D",
        "text": "Analyze the application code for memory leaks"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Memory issues are best resolved by identifying and fixing leaks in the application code rather than just increasing container resources.",
    "memoryTip": "Fix runaway container RAM consumption = Profile and fix application code memory leaks.",
    "breakdown": {
      "A": "Increasing container memory limits merely postpones the inevitable Out-Of-Memory (OOM) crash if the application code leaks memory continuously.",
      "B": "A larger base image adds unnecessary operating system packages and attack surface, increasing baseline RAM footprint.",
      "C": "Reducing container replicas decreases throughput capacity and degrades user responsiveness without fixing the root cause.",
      "D": "Correct! Profiling and analyzing application code to eliminate memory leaks and unreleased pointers is the only permanent, effective resolution."
    }
  },
  {
    "id": "set2-q37",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "OSI Physical Layer",
    "difficulty": "Easy",
    "question": "An internet connection is established by a user, connecting devices like a computer, smartphone, and smart TV to a router. Which OSI model layer is responsible for transmitting Ethernet, cable, and Wi-Fi signals between these devices?",
    "options": [
      {
        "id": "A",
        "text": "Physical Layer"
      },
      {
        "id": "B",
        "text": "Network Layer"
      },
      {
        "id": "C",
        "text": "Data Link Layer"
      },
      {
        "id": "D",
        "text": "Application Layer"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Physical Layer handles the transmission of raw electrical, optical, or wireless signals over media like Ethernet cables and Wi-Fi.",
    "memoryTip": "Cables, radio waves, electrical voltage & bits = Layer 1 (Physical Layer).",
    "breakdown": {
      "A": "Correct! Layer 1 (Physical Layer) manages raw physical transmission media\u2014electrical pulses, radio frequencies (Wi-Fi), fiber-optic pulses, and pin connectors.",
      "B": "Network Layer (Layer 3) manages logical IP addressing and routing of packets across networks.",
      "C": "Data Link Layer (Layer 2) handles MAC framing, error checking, and local switch forwarding.",
      "D": "Application Layer (Layer 7) provides end-user protocols like HTTP, DNS, and SMTP."
    }
  },
  {
    "id": "set2-q38",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "MS Office & Excel Tools",
    "subtopic": "Excel Dynamic FILTER Formula",
    "difficulty": "Hard",
    "question": "Your machine may need to request a list of employees from the South region for an internal campaign. Which Excel formula allows you to generate this list dynamically from the dataset below?\n\nSample Dataset:\nEmployee Name | Department | Role | Salary | Bonus | Join Date | Region\nE001 Alice Sales Manager 70000 5000 01-03-2018 South\nE002 Bob HR Executive 50000 3000 12-06-2019 North\nE003 Carol IT Developer 60000 4000 15-08-2020 South\nE004 David Marketing Analyst 55000 3500 22-01-2021 East\nE005 Eve Sales Executive 52000 2500 30-11-2019 South",
    "options": [
      {
        "id": "A",
        "text": "=FILTER(A2:H6, H2:H6=\"South\")"
      },
      {
        "id": "B",
        "text": "=VLOOKUP(\"South\", H2:H6, 2, FALSE)"
      },
      {
        "id": "C",
        "text": "=INDEX(A2:A6, MATCH(\"South\", H2:H6, 0))"
      },
      {
        "id": "D",
        "text": "=IF(H2:H6=\"South\", A2:A6, \"\")"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The FILTER function dynamically returns all rows where the Region column equals \"South,\" generating the required list automatically.",
    "memoryTip": "Dynamic multiple-row extraction = =FILTER(array, condition).",
    "breakdown": {
      "A": "Correct! `=FILTER(A2:H6, H2:H6=\"South\")` is modern dynamic array formula that extracts every record where Region equals 'South' into a spill range.",
      "B": "VLOOKUP can only return the first matching single scalar value and cannot spill multiple rows or look to the left of the lookup key.",
      "C": "INDEX/MATCH returns only the first single matching value (Alice), failing to generate the complete list of all South employees.",
      "D": "A standard IF formula returns blank rows and requires manual cell-by-cell copying rather than a clean dynamic array spill."
    }
  },
  {
    "id": "set2-q39",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "MS Office & Excel Tools",
    "subtopic": "Excel PivotTable Calculated Fields",
    "difficulty": "Medium",
    "question": "In a PivotTable, which feature allows you to create custom calculations and summaries based on the existing data?",
    "options": [
      {
        "id": "A",
        "text": "Calculated Fields"
      },
      {
        "id": "B",
        "text": "Calculated Items"
      },
      {
        "id": "C",
        "text": "Slicers"
      },
      {
        "id": "D",
        "text": "Grouping"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Calculated Fields let you define custom formulas in a PivotTable to perform calculations on the summarized data.",
    "memoryTip": "Custom summary formulas across existing pivot fields = Calculated Fields.",
    "breakdown": {
      "A": "Correct! Calculated Fields let you create a new virtual field in a PivotTable by performing mathematical formulas on existing numeric columns.",
      "B": "Calculated Items perform calculations using the contents of one or more specific items (rows) within a single field, rather than across entire columns.",
      "C": "Slicers are visual graphical filtering buttons used to quickly isolate subsets of pivot data.",
      "D": "Grouping consolidates individual items (such as dates into months or numbers into ranges) into collective categories."
    }
  },
  {
    "id": "set2-q40",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "OSI Network Layer",
    "difficulty": "Easy",
    "question": "Data packets are transmitted between routers and switches to ensure proper delivery across different network segments. Which OSI model layer is responsible for establishing logical paths and routing data packets between different network segments?",
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
    "explanation": "The Network Layer determines logical addressing and routing to deliver packets across multiple network segments.",
    "memoryTip": "Logical addressing & routing across networks = Layer 3 (Network Layer).",
    "breakdown": {
      "A": "Data Link Layer (Layer 2) manages hop-to-hop framing across local physical segments using MAC addresses.",
      "B": "Correct! Layer 3 (Network Layer) is responsible for end-to-end logical IP addressing, packet forwarding, and path determination (routing) across distinct network segments.",
      "C": "Transport Layer (Layer 4) handles end-to-end host communication, port numbers, reliability, and flow control.",
      "D": "Session Layer (Layer 5) establishes, manages, and terminates dialogue sessions between applications."
    }
  },
  {
    "id": "set2-q41",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Multi-Factor Authentication",
    "difficulty": "Easy",
    "question": "In a cloud computing environment, which security measure helps protect user accounts by requiring two different types of identification before granting access?",
    "options": [
      {
        "id": "A",
        "text": "Firewalls"
      },
      {
        "id": "B",
        "text": "Encryption"
      },
      {
        "id": "C",
        "text": "Multi-Factor Authentication (MFA)"
      },
      {
        "id": "D",
        "text": "Antivirus Software"
      }
    ],
    "correctAnswer": "C",
    "explanation": "MFA enhances account security by requiring multiple forms of verification, such as a password and a one-time code.",
    "memoryTip": "Two or more different types of verification = Multi-Factor Authentication (MFA).",
    "breakdown": {
      "A": "Firewalls filter incoming and outgoing network traffic based on port and IP rules, not user credentials.",
      "B": "Encryption encodes data to prevent unauthorized interception, but does not authenticate user logins.",
      "C": "Correct! Multi-Factor Authentication (MFA) requires users to provide two or more distinct verification factors (e.g., something you know like a password, and something you have like a mobile OTP).",
      "D": "Antivirus software scans files and processes for signatures of known malicious code."
    }
  },
  {
    "id": "set2-q42",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "Ring Topology Vulnerability",
    "difficulty": "Easy",
    "question": "A small business uses ring network topology. If a single workstation goes down, what impact will it have on the network?",
    "options": [
      {
        "id": "A",
        "text": "Minimal impact; network reroutes traffic"
      },
      {
        "id": "B",
        "text": "Network becomes isolated"
      },
      {
        "id": "C",
        "text": "Network slows down"
      },
      {
        "id": "D",
        "text": "Network breaks completely"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In a ring topology, each device is connected in a closed loop, so the failure of one workstation disrupts the entire network.",
    "memoryTip": "Single node down in standard unidirectional Ring = Entire network breaks down.",
    "breakdown": {
      "A": "Traffic cannot automatically reroute in a standard single-ring network because it lacks alternative pathing.",
      "B": "The failure does not simply isolate one workstation\u2014it breaks the continuous ring circuit for all nodes.",
      "C": "The network does not simply experience latency or slow down; packet circulation stops entirely.",
      "D": "Correct! In a single ring topology, tokens and packets pass sequentially through every connected station; if any single station fails, the loop is broken and communication halts."
    }
  },
  {
    "id": "set2-q43",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Encryption Definition",
    "difficulty": "Easy",
    "question": "What is the process of converting data into a secure format to prevent unauthorized access?",
    "options": [
      {
        "id": "A",
        "text": "Encryption"
      },
      {
        "id": "B",
        "text": "Authentication"
      },
      {
        "id": "C",
        "text": "Authorization"
      },
      {
        "id": "D",
        "text": "Compression"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Encryption transforms data into a coded format to ensure that only authorized parties can access it.",
    "memoryTip": "Converting plaintext to ciphertext to prevent unauthorized access = Encryption.",
    "breakdown": {
      "A": "Correct! Encryption converts readable plaintext into encoded ciphertext using cryptographic mathematical keys.",
      "B": "Authentication verifies the identity of a claiming entity (e.g., verifying username and password).",
      "C": "Authorization determines the permissions and access rights granted to an already authenticated identity.",
      "D": "Compression reduces data file size by eliminating redundancy, without providing cryptographic security."
    }
  },
  {
    "id": "set2-q44",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "HTTP POST Characteristics",
    "difficulty": "Easy",
    "question": "A mobile application sends data to a server using an API. The developer decides to use the POST method for this operation. What is the primary characteristic of the POST method in this context?",
    "options": [
      {
        "id": "A",
        "text": "It retrieves data from the server"
      },
      {
        "id": "B",
        "text": "It updates existing data on the server"
      },
      {
        "id": "C",
        "text": "It submits data to be processed by the server"
      },
      {
        "id": "D",
        "text": "It deletes data from the server"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The POST method is used to send data to the server for processing, often resulting in the creation of a new resource.",
    "memoryTip": "HTTP POST = Submits data to be processed by the server.",
    "breakdown": {
      "A": "Retrieving data from the server is the primary characteristic of HTTP GET.",
      "B": "Replacing or updating existing data on the server is typically performed via PUT or PATCH.",
      "C": "Correct! HTTP POST sends payload data enclosed in the request body to the specified URI to be processed by the server handler.",
      "D": "Deleting data from the server is performed using the HTTP DELETE verb."
    }
  },
  {
    "id": "set2-q45",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Hybrid Cloud Deployment",
    "difficulty": "Easy",
    "question": "A company needs to keep sensitive data on-premises while leveraging cloud resources for other operations. Which cloud deployment model should be used?",
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
    "explanation": "A Hybrid Cloud combines on-premises infrastructure with cloud services, allowing sensitive data to remain local while using cloud resources for scalability.",
    "memoryTip": "Sensitive data on-premise + Scalable workloads in cloud = Hybrid Cloud.",
    "breakdown": {
      "A": "Public cloud hosts all resources on shared external cloud provider infrastructure.",
      "B": "Private cloud hosts all infrastructure strictly within dedicated private boundaries without utilizing public cloud elasticity.",
      "C": "Correct! A Hybrid Cloud architecture connects on-premises private data centers with public cloud infrastructure, offering localized compliance alongside cloud scale.",
      "D": "Community cloud is shared across specific external peer organizations, not an integration between on-premise and public cloud."
    }
  },
  {
    "id": "set2-q46",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "API Versioning Strategy",
    "difficulty": "Medium",
    "question": "A public-facing API has undergone significant breaking changes, including modifications to endpoints and data structures, making it incompatible with older client applications. The development team wants to deploy these changes without breaking existing integrations. Which API versioning strategy is generally recommended in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Make changes directly to the existing endpoints and update the documentation"
      },
      {
        "id": "B",
        "text": "Use query parameters to specify the version (e.g., /api/resource?version=2)"
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
    "explanation": "URL-based versioning clearly separates breaking changes while allowing older clients to continue using the previous API version.",
    "memoryTip": "Best practice for breaking API changes = URL Path Versioning (/api/v2/resource).",
    "breakdown": {
      "A": "Directly modifying existing production endpoints breaks live client applications and causes catastrophic integration failures.",
      "B": "Query parameters are less explicit, harder to cache in CDNs, and can be easily omitted by clients leading to unpredictable defaults.",
      "C": "Correct! URI path versioning (`/api/v2/resource`) provides explicit, transparent routing, allowing legacy clients to call `/v1/` and new clients to call `/v2/` simultaneously.",
      "D": "Header versioning (e.g., `Accept-Version`) makes testing in browsers cumbersome and complicates edge caching."
    }
  },
  {
    "id": "set2-q47",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "Dynamic IP Allocation Protocol",
    "difficulty": "Easy",
    "question": "A network administrator wants to assign IP addresses dynamically to devices in a network. Which protocol is used for this purpose?",
    "options": [
      {
        "id": "A",
        "text": "DNS"
      },
      {
        "id": "B",
        "text": "DHCP"
      },
      {
        "id": "C",
        "text": "ARP"
      },
      {
        "id": "D",
        "text": "ICMP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "DHCP automatically assigns IP addresses and network configuration details to devices on a network.",
    "memoryTip": "Automatic dynamic IP assignment = DHCP (Dynamic Host Configuration Protocol).",
    "breakdown": {
      "A": "DNS (Domain Name System) translates human-readable domain names (example.com) into IP addresses.",
      "B": "Correct! DHCP (Dynamic Host Configuration Protocol) operates using DORA (Discover, Offer, Request, Acknowledge) to assign dynamic IP leases automatically.",
      "C": "ARP (Address Resolution Protocol) resolves known IP addresses to local physical hardware MAC addresses.",
      "D": "ICMP (Internet Control Message Protocol) delivers error and diagnostic messages, such as ping echo requests."
    }
  },
  {
    "id": "set2-q48",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Cloud Cost Management",
    "difficulty": "Medium",
    "question": "A startup is concerned about unpredictable expenses due to variable cloud usage. Which cloud feature should they implement to manage and predict costs more accurately?",
    "options": [
      {
        "id": "A",
        "text": "Auto-scaling"
      },
      {
        "id": "B",
        "text": "Reserved instances"
      },
      {
        "id": "C",
        "text": "Load balancing"
      },
      {
        "id": "D",
        "text": "Content Delivery Network (CDN)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reserved instances provide predictable, discounted pricing by committing to usage over a fixed term, helping control costs.",
    "memoryTip": "Predictable costs & major cloud discounts = Reserved Instances (1 or 3 year commitment).",
    "breakdown": {
      "A": "Auto-scaling dynamically spins up instances, which can lead to variable and unpredictable monthly bills if traffic surges.",
      "B": "Correct! Reserved instances offer discounts up to 72% compared to on-demand pricing in exchange for committing to a 1- or 3-year term, providing fixed, predictable costs.",
      "C": "Load balancing distributes incoming traffic across servers, but does not alter pricing models or stabilize monthly costs.",
      "D": "Content Delivery Networks cache static assets at edge locations, improving speed but not addressing core cloud compute cost predictability."
    }
  },
  {
    "id": "set2-q49",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Intermediary Proxy Firewalls",
    "difficulty": "Medium",
    "question": "A company needs a security solution where the firewall acts as an intermediary, inspecting all incoming and outgoing traffic between the user's device and the internet. Which type of firewall is most suitable for this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Packet Filtering Firewall"
      },
      {
        "id": "B",
        "text": "Proxy Firewall"
      },
      {
        "id": "C",
        "text": "Circuit-Level Gateway"
      },
      {
        "id": "D",
        "text": "Application Firewall"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A proxy firewall sits between users and the internet, inspecting and filtering all traffic by acting as an intermediary.",
    "memoryTip": "Firewall acting as intermediary & masking client IP = Proxy Firewall (Application-level).",
    "breakdown": {
      "A": "Packet filtering firewalls inspect only packet headers (IP addresses and ports) at the network layer without establishing intermediary proxy sessions.",
      "B": "Correct! A Proxy Firewall acts as an intermediate server between internal clients and external servers, terminating connections, inspecting payloads, and masking client IP addresses.",
      "C": "Circuit-level gateways verify TCP handshakes without inspecting application-layer payloads.",
      "D": "General application firewalls inspect protocols, but the specific architecture acting as a true client-server proxy intermediary is a Proxy Firewall."
    }
  },
  {
    "id": "set2-q50",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "VPN & Remote Connectivity",
    "subtopic": "SSL VPN Architecture",
    "difficulty": "Medium",
    "question": "You are a network administrator for a company with several remote offices. The company wants to implement a VPN to provide secure remote access to its internal network. Which VPN type is the best choice for this scenario?",
    "options": [
      {
        "id": "A",
        "text": "PPTP"
      },
      {
        "id": "B",
        "text": "L2TP"
      },
      {
        "id": "C",
        "text": "SSL VPN"
      },
      {
        "id": "D",
        "text": "IPSec VPN"
      }
    ],
    "correctAnswer": "C",
    "explanation": "SSL VPNs provide secure remote access over the internet using a web browser and are ideal for remote users across multiple locations.",
    "memoryTip": "Clientless remote access via standard web browser = SSL VPN.",
    "breakdown": {
      "A": "PPTP (Point-to-Point Tunneling Protocol) uses obsolete MS-CHAPv2 and is considered cryptographically insecure.",
      "B": "L2TP provides tunneling but lacks native encryption, requiring IPSec and complex client configuration.",
      "C": "Correct! SSL VPNs utilize standard HTTPS encryption accessible through standard web browsers, eliminating the need to install and configure client-side software.",
      "D": "IPSec VPN operates at the network layer and requires specialized client software installation and router configuration."
    }
  },
  {
    "id": "set2-q51",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "DevOps & CI/CD",
    "subtopic": "Zero Downtime Deployments",
    "difficulty": "Medium",
    "question": "A team wants to improve deployment speed and reduce downtime when updating their containerized application. Which practice should they adopt?",
    "options": [
      {
        "id": "A",
        "text": "Use rolling updates with health checks"
      },
      {
        "id": "B",
        "text": "Increase the number of replicas"
      },
      {
        "id": "C",
        "text": "Disable the health checks"
      },
      {
        "id": "D",
        "text": "Use a larger base image"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rolling updates with health checks update containers gradually, ensuring availability and minimizing downtime during deployments.",
    "memoryTip": "Zero downtime container deployment = Rolling Updates with Health Checks.",
    "breakdown": {
      "A": "Correct! Rolling updates gradually replace old container pods with new ones while automated health checks verify readiness, ensuring zero downtime and continuous availability.",
      "B": "Increasing replicas increases capacity, but updating them all at once without a rolling strategy would still cause total service outages.",
      "C": "Disabling health checks causes traffic to be routed to unready or crashing containers, creating downtime for end users.",
      "D": "Using larger base images drastically increases image download and startup times, slowing down deployments."
    }
  },
  {
    "id": "set2-q52",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "IaaS Cloud Service Model",
    "difficulty": "Easy",
    "question": "Which cloud service model provides users with hardware resources such as virtual machines and storage?",
    "options": [
      {
        "id": "A",
        "text": "IaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "SaaS"
      },
      {
        "id": "D",
        "text": "DaaS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Infrastructure as a Service (IaaS) offers virtualized hardware resources like servers, storage, and networking.",
    "memoryTip": "Hardware, VMs, Raw Disks & Networking = IaaS (Infrastructure as a Service).",
    "breakdown": {
      "A": "Correct! IaaS (Infrastructure as a Service) delivers fundamental computing infrastructure\u2014virtual machines, raw block storage, networks, and operating system freedom.",
      "B": "PaaS (Platform as a Service) provides managed runtimes, databases, and environments for deploying application code without managing VMs.",
      "C": "SaaS (Software as a Service) delivers turnkey end-user software applications hosted in the cloud.",
      "D": "DaaS (Desktop as a Service) streams virtual desktop user interfaces to remote thin clients."
    }
  },
  {
    "id": "set2-q53",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Outsourcing Security Boundaries",
    "difficulty": "Hard",
    "question": "Your organization has decided to outsource antivirus management to a third party. Which of the following tasks cannot be assigned to the third party?",
    "options": [
      {
        "id": "A",
        "text": "Monitoring of servers on your organization's premises"
      },
      {
        "id": "B",
        "text": "Preparing the internal antivirus policy for the systems"
      },
      {
        "id": "C",
        "text": "Rectification of virus infections on systems"
      },
      {
        "id": "D",
        "text": "Updating the antivirus definition files on user systems"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Defining internal security policies is a strategic responsibility of the organization and should not be outsourced to third parties.",
    "memoryTip": "Internal strategic governance & policies = Must stay internal; NEVER outsourced.",
    "breakdown": {
      "A": "Monitoring server alerts and health telemetry is an operational task routinely handled by outsourced Security Operations Centers (SOCs).",
      "B": "Correct! Defining organizational security policies, risk thresholds, and compliance frameworks is an internal governance responsibility that cannot be delegated to an external vendor.",
      "C": "Remediating and cleaning virus infections on infected workstations can be executed by outsourced IT helpdesk technicians.",
      "D": "Distributing and deploying daily antivirus signature definition updates can be fully automated or delegated to managed service providers."
    }
  },
  {
    "id": "set2-q54",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "DevOps & CI/CD",
    "subtopic": "Continuous Deployment Releases",
    "difficulty": "Easy",
    "question": "Google updates its website weekly by adding new features and fixing bugs using an Agile development approach. After each update, the new version is automatically deployed to the live environment. Which DevOps practice is being implemented to ensure rapid and frequent releases?",
    "options": [
      {
        "id": "A",
        "text": "The practice involves automating the process of releasing software to production frequently and reliably"
      },
      {
        "id": "B",
        "text": "Continuous integration focuses on merging code changes regularly to prevent integration issues"
      },
      {
        "id": "C",
        "text": "Continuous testing ensures that automated tests are run continually to validate code quality"
      },
      {
        "id": "D",
        "text": "Monitoring involves tracking application performance and user activity after deployment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Continuous Deployment automates frequent and reliable releases to production without manual intervention.",
    "memoryTip": "Automatic live production release = Continuous Deployment.",
    "breakdown": {
      "A": "Correct! Continuous Deployment automates the entire software release pipeline, pushing passed builds directly into live production without human gating.",
      "B": "Continuous Integration automatically tests and merges code into the repository, but does not deploy it to production.",
      "C": "Continuous Testing automatically runs unit and integration tests to validate code quality without performing deployment.",
      "D": "Monitoring collects performance metrics and server health telemetry post-deployment."
    }
  },
  {
    "id": "set2-q55",
    "tier": 4,
    "tierName": "Tier 4 \u2014 Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Network Segmentation Purpose",
    "difficulty": "Easy",
    "question": "What is the main purpose of network segmentation in security?",
    "options": [
      {
        "id": "A",
        "text": "Increasing bandwidth"
      },
      {
        "id": "B",
        "text": "Improving signal strength"
      },
      {
        "id": "C",
        "text": "Limiting the spread of attacks"
      },
      {
        "id": "D",
        "text": "Reducing latency"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Network segmentation isolates network segments to prevent attackers from easily moving across the entire network.",
    "memoryTip": "Network segmentation = Contain breaches & prevent lateral movement.",
    "breakdown": {
      "A": "Network segmentation partitions subnets for security boundaries, which does not increase total physical bandwidth capacity.",
      "B": "Signal strength depends on physical cabling quality and radio transmitter gain, not logical subnet segmentation.",
      "C": "Correct! Network segmentation divides a network into smaller, isolated zones, preventing an attacker who breaches one zone from moving laterally across the entire enterprise.",
      "D": "Routing between segmented networks may introduce firewall inspection overhead rather than reducing packet transit latency."
    }
  },
  {
    "id": "set2-q56",
    "tier": 2,
    "tierName": "Tier 2 \u2014 Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "RESTful URL Conventions",
    "difficulty": "Easy",
    "question": "A development team is designing a new RESTful API to manage a product catalog. They need to create an endpoint that retrieves detailed information about a specific product using its unique product ID. Which HTTP method and URL structure best align with RESTful principles?",
    "options": [
      {
        "id": "A",
        "text": "POST /products/{id}/details"
      },
      {
        "id": "B",
        "text": "GET /product_details?id={id}"
      },
      {
        "id": "C",
        "text": "PUT /products/{id}/fetch"
      },
      {
        "id": "D",
        "text": "GET /products/{id}"
      }
    ],
    "correctAnswer": "D",
    "explanation": "RESTful design uses the GET method to retrieve resources and identifies a specific resource through a clean, resource-based URL.",
    "memoryTip": "Standard REST resource identifier: GET /resource/{id}.",
    "breakdown": {
      "A": "POST should not be used for idempotent data retrieval, and REST URLs should avoid verbs like '/details'.",
      "B": "Query parameters like `?id={id}` violate RESTful hierarchical resource naming conventions.",
      "C": "PUT is designated for updating resources, and '/fetch' is an unnecessary verb in a resource-oriented URI.",
      "D": "Correct! Standard RESTful architectural principles dictate using HTTP GET with the resource identifier embedded directly in the noun path: `GET /products/{id}`."
    }
  },
  {
    "id": "set2-q57",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Data Virtualization Layer",
    "difficulty": "Hard",
    "question": "Azure is migrating its legacy data sources to new cloud-based platforms while maintaining operations without downtime. During migration, data from both the old and new systems must be accessed simultaneously for real-time reporting and analytics, with logical integration and no physical data movement. Which architectural layer best handles this requirement while ensuring minimal disruption and secure access?",
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
        "text": "Data caching layer storing temporary data"
      }
    ],
    "correctAnswer": "C",
    "explanation": "An abstraction (data virtualization) layer enables unified, real-time access to multiple data sources without physically moving the data.",
    "memoryTip": "Logical integration without physical data movement = Abstraction / Data Virtualization Layer.",
    "breakdown": {
      "A": "Direct database connections force applications to couple tightly with legacy schemas and credentials.",
      "B": "Consumption layer middleware provides client endpoints, but does not perform the underlying real-time federation of disparate database engines.",
      "C": "Correct! A Data Abstraction / Virtualization layer provides a unified logical query interface across disparate data sources without moving underlying physical data.",
      "D": "Data caching stores transient snapshots and does not provide unified real-time logical query translation across legacy and cloud systems."
    }
  },
  {
    "id": "set2-q58",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Storage Elasticity & Resilience",
    "difficulty": "Medium",
    "question": "As part of a data center modernization initiative, the IoT team must address storage challenges by leveraging existing storage devices from multiple vendors and integrating them into a next-generation storage solution. How does resource pooling play a crucial role in achieving elasticity in cloud storage?",
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
        "text": "By ensuring a globally scalable and resilient storage solution"
      },
      {
        "id": "D",
        "text": "By optimizing capacity for executing code and running instances"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Resource pooling aggregates storage resources from different systems, enabling elastic scaling and high availability across the cloud environment.",
    "memoryTip": "Resource pooling in storage = Globally scalable & resilient unified capacity.",
    "breakdown": {
      "A": "Resource pooling works alongside virtualization; it does not eliminate the need for server virtualization.",
      "B": "Financial commitments are contractual matters that do not define the architectural role of resource pooling.",
      "C": "Correct! Aggregating multi-vendor storage drives into a unified resource pool provides resilient fault tolerance, high availability, and elastic global scalability.",
      "D": "Running code and compute instances is a CPU/RAM resource function, not storage resource pooling."
    }
  },
  {
    "id": "set2-q59",
    "tier": 3,
    "tierName": "Tier 3 \u2014 Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "OS Device Management",
    "difficulty": "Medium",
    "question": "You are a software developer creating an application for a large corporation. The application is expected to run on various computers with different hardware and operating systems. Which operating system property is most important to ensure compatibility and smooth operation?",
    "options": [
      {
        "id": "A",
        "text": "User Interface"
      },
      {
        "id": "B",
        "text": "Security"
      },
      {
        "id": "C",
        "text": "Device Management"
      },
      {
        "id": "D",
        "text": "Resource Allocation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Device management ensures the OS can interface with different hardware components, allowing applications to run smoothly across diverse systems.",
    "memoryTip": "OS component interfacing with diverse hardware components = Device Management.",
    "breakdown": {
      "A": "User interface provides visual controls for users, but does not manage underlying hardware driver compatibility.",
      "B": "Security enforces authentication and authorization, but does not provide hardware driver abstraction.",
      "C": "Correct! OS Device Management uses standardized driver interfaces to abstract heterogeneous hardware components, enabling applications to run reliably across diverse hardware.",
      "D": "Resource allocation schedules CPU and RAM capacity, but relies on device management to communicate with physical peripherals."
    }
  },
  {
    "id": "set2-q60",
    "tier": 1,
    "tierName": "Tier 1 \u2014 Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Shared Responsibility Cloud Security",
    "difficulty": "Easy",
    "question": "A company migrates its application to a cloud computing environment. How does the concept of \u201cshared responsibility\u201d impact security management in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "The cloud provider handles all security measures"
      },
      {
        "id": "B",
        "text": "Security is managed by third-party auditors"
      },
      {
        "id": "C",
        "text": "Both the cloud provider and the customer share security responsibilities"
      },
      {
        "id": "D",
        "text": "The customer is solely responsible for security"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In cloud computing, providers secure the infrastructure, while customers are responsible for securing their applications, data, and access.",
    "memoryTip": "Shared Responsibility = Provider secures infrastructure | Customer secures data & apps.",
    "breakdown": {
      "A": "The cloud provider does not control customer access rights, database configurations, or application vulnerabilities.",
      "B": "Third-party auditors perform independent compliance assessments, but do not manage day-to-day operational security.",
      "C": "Correct! Under the shared responsibility model, security responsibilities are divided: the cloud provider protects the physical hardware and hypervisors, while the customer secures data, user IAM, and applications.",
      "D": "The customer cannot manage physical data center security or hypervisor patch levels, which belong to the provider."
    }
  },
  {
    "id": "set2-q61",
    "tier": 5,
    "tierName": "Tier 5 \u2014 DevOps, Containers, Office Tools & Cryptography",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Cipher Decryption Failure",
    "difficulty": "Medium",
    "question": "An embedded system encrypts data using a substitution cipher. After deployment, some characters in the encrypted text are not correctly decrypted. What is the most likely cause of this issue?",
    "options": [
      {
        "id": "A",
        "text": "The decryption map incorrectly handles negative indices"
      },
      {
        "id": "B",
        "text": "The decryption process incorrectly uses the encryption key, leading to incorrect character mapping"
      },
      {
        "id": "C",
        "text": "The encryption map creates duplicate character mappings"
      },
      {
        "id": "D",
        "text": "The length of the character string causes an incorrect modulo operation"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Using an incorrect key during decryption causes mismatched character mappings, resulting in incorrectly decrypted characters.",
    "memoryTip": "Substitution cipher decryption error = Incorrect key or corrupted mapping table.",
    "breakdown": {
      "A": "Substitution ciphers use one-to-one character mapping lookup tables or modular offsets, which do not inherently involve negative indices.",
      "B": "Correct! In a substitution cipher, each character is mapped via a specific key or permutation; using an incorrect decryption key produces character substitution mismatches during deciphering.",
      "C": "If the encryption map created duplicate mappings, encryption itself would be degenerate, whereas the scenario specifically identifies post-deployment decryption errors.",
      "D": "Substitution ciphers encrypt character-by-character; the total length of the string does not alter the substitution mapping algorithm."
    }
  }
];

// Helper to filter Set 2 questions
export function filterImportantSet2Questions({ tier = 'all', topic = 'all' }) {
  return importantQuestionsSet2.filter((q) => {
    const matchesTier =
      tier === 'all' ||
      q.tier === Number(tier) ||
      q.tierName.toLowerCase().includes(String(tier).toLowerCase());
    const matchesTopic =
      topic === 'all' ||
      q.topic.toLowerCase() === topic.toLowerCase();
    return matchesTier && matchesTopic;
  });
}

// Helper to retrieve option breakdown for a specific Set 2 question
export function getImportantSet2OptionBreakdown(questionId) {
  const q = importantQuestionsSet2.find((item) => item.id === questionId);
  return q ? q.breakdown : null;
}

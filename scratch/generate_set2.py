# scratch/generate_set2.py
import json, os, sys

sys.stdout.reconfigure(encoding='utf-8')

tiers = [
  { "id": 1, "name": "Tier 1 — Cloud Architecture, Storage & Deployment", "description": "Object vs block storage, private/hybrid clouds, shared responsibility model, and cloud elasticity." },
  { "id": 2, "name": "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "description": "HTTP verbs (GET, POST), status codes (404), RESTful URI design, and API versioning strategies." },
  { "id": 3, "name": "Tier 3 — Operating Systems & Computer Architecture", "description": "Context switching, program counter (PC), process creation (fork/exec), CPU buses, and memory operations." },
  { "id": 4, "name": "Tier 4 — Computer Networks, VPNs & Network Security", "description": "OSI physical/network layers, TCP SYN-ACK, Remote Access vs Site-to-Site VPN, Wi-Fi WPA3, and routing attacks." },
  { "id": 5, "name": "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "description": "Continuous deployment, container isolation, Excel formulas (FILTER, PivotTables), PowerPoint kiosk mode, and cipher analysis." }
]

topics = [
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
]

study_guides = {
  1: {
    "title": "Cloud Architecture & Storage Models Quick Guide",
    "content": [
      "**Object Storage vs Block Storage:** Object storage (AWS S3, Azure Blob) automatically scales without manual provisioning and stores data with metadata and unique IDs. Block storage (EBS) provides raw block volumes for operating systems.",
      "**Cloud Deployment Models:** Private Cloud provides maximum security and governance for sensitive enterprise data. Hybrid Cloud bridges on-premises data centers with public clouds for elasticity.",
      "**Shared Responsibility Model:** Cloud provider secures physical infrastructure, facilities, and hypervisors. The customer is responsible for data, user access, and application configurations.",
      "**Reserved Instances:** Save up to 72% over on-demand rates by committing to a 1- or 3-year term, providing predictable cloud budgeting."
    ]
  },
  2: {
    "title": "HTTP Methods, Status Codes & RESTful Design",
    "content": [
      "**HTTP Methods:** **GET:** Safe and idempotent; retrieves data without server-side state modification. **POST:** Submits data to be processed and creates new subordinate resources. **PUT:** Replaces or updates an entire resource.",
      "**HTTP Status Codes:** **200 OK** (Success), **400 Bad Request** (Malformed syntax), **403 Forbidden** (Authenticated but unauthorized), **404 Not Found** (Resource endpoint does not exist), **500 Internal Server Error**.",
      "**REST URI Best Practices:** Use clean, resource-oriented noun paths (e.g., `GET /products/{id}`) rather than action verbs. Include API versioning in the URL path (e.g., `/api/v2/products`)."
    ]
  },
  3: {
    "title": "Operating Systems, Registers & Context Switching",
    "content": [
      "**Context Switching:** When the OS halts one process to execute another, it saves the **Program Counter (PC)** register (which holds the memory address of the next instruction to execute) and process control block (PCB).",
      "**Unix Process Creation:** `fork()` clones the calling process to create a child process. `exec()` replaces the child process's address space with a new executable program binary.",
      "**CPU Memory Operations:** Transferring data from the CPU accumulator into memory is a **Memory Write Operation**. Transferring data from memory to register is a **Memory Read**.",
      "**OS Device Management:** Handles I/O hardware drivers and buffering (e.g., SATA controllers) to abstract physical device mechanics from user applications."
    ]
  },
  4: {
    "title": "Networking, VPN Topologies & Security Attacks",
    "content": [
      "**TCP 3-Way Handshake:** 1. Client sends **SYN** -> 2. Server responds with **SYN-ACK** -> 3. Client replies with **ACK**.",
      "**VPN Topologies:** **Remote Access VPN:** Connects individual telecommuting employees working from home to the internal corporate network. **Site-to-Site VPN:** Interconnects entire branch office networks permanently across geographic distances.",
      "**Network Topologies:** **Ring Topology:** Single closed loop; failure of a single node causes complete network disruption. **Star Topology:** Central switch isolates individual cable failures.",
      "**Attacks:** **Source Routing Attack:** Hackers specify the exact network path packets must travel to bypass intermediate firewall inspections. **Routing Table Poisoning:** Injects fake routing entries to divert traffic through attacker-controlled nodes."
    ]
  },
  5: {
    "title": "DevOps, Containerization & Productivity Tools",
    "content": [
      "**CI/CD Practices:** **Continuous Deployment:** Automates the complete software delivery pipeline so every validated build is deployed to production without manual intervention. **Continuous Integration:** Frequently merges developer code into trunk.",
      "**Containers vs Virtual Machines:** Containers share the host OS kernel and runtime, providing lightweight isolation without separate hypervisor OS overhead. Rolling updates with health checks ensure zero downtime.",
      "**Excel Dynamic Formulas:** `=FILTER(array, condition)` dynamically extracts matching records. **PivotTable Calculated Fields** create custom summary formulas on summarized dimensions.",
      "**PowerPoint Kiosk Mode:** Setting a slide show to 'Browsed at a kiosk (full screen)' locks manual keyboard navigation, forcing sequential automated playback with voiceover."
    ]
  }
}

questions = [
  # -------------------------------------------------------------------------------------
  # PAGE 1 (Q1 - Q2)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q1",
    "tier": 1,
    "tierName": "Tier 1 — Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Dynamic Scaling",
    "difficulty": "Easy",
    "question": "In a cloud-based application where scalability is crucial, which cloud storage option allows dynamic scaling without the need for manual intervention?",
    "options": [
      { "id": "A", "text": "Block storage" },
      { "id": "B", "text": "File storage" },
      { "id": "C", "text": "Object storage" },
      { "id": "D", "text": "Table storage" }
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
    "tierName": "Tier 2 — Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "HTTP Verbs",
    "difficulty": "Easy",
    "question": "A mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read data without making any changes to the server resources. Which HTTP method is most appropriate for this operation?",
    "options": [
      { "id": "A", "text": "POST" },
      { "id": "B", "text": "PUT" },
      { "id": "C", "text": "DELETE" },
      { "id": "D", "text": "GET" }
    ],
    "correctAnswer": "D",
    "explanation": "GET is used to retrieve data from a server without modifying any existing resources.",
    "memoryTip": "Read-only idempotent retrieval = HTTP GET.",
    "breakdown": {
      "A": "POST is used to send data to the server to create a new subordinate resource or trigger state changes.",
      "B": "PUT is used to replace an existing resource completely or create it if non-existent, altering server state.",
      "C": "DELETE is used to remove a specified resource from the server.",
      "D": "Correct! The GET method is designed strictly for safe, read-only retrieval of resources without modifying server state."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 2 (Q3 - Q5)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q3",
    "tier": 2,
    "tierName": "Tier 2 — Web APIs, HTTP Protocols & REST Principles",
    "topic": "HTTP & RESTful APIs",
    "subtopic": "HTTP Status Codes",
    "difficulty": "Easy",
    "question": "During application development, a developer encounters an error due to an incorrect or unavailable API endpoint, resulting in a “Not Found” response. Which HTTP status code most accurately represents this error?",
    "options": [
      { "id": "A", "text": "404" },
      { "id": "B", "text": "500" },
      { "id": "C", "text": "403" },
      { "id": "D", "text": "400" }
    ],
    "correctAnswer": "A",
    "explanation": "HTTP 404 is returned when the requested endpoint or resource does not exist on the server.",
    "memoryTip": "404 = Not Found | 403 = Forbidden | 400 = Bad Request | 500 = Server Error.",
    "breakdown": {
      "A": "Correct! HTTP 404 Not Found indicates that the origin server did not find a current representation for the requested target resource.",
      "B": "HTTP 500 Internal Server Error indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
      "C": "HTTP 403 Forbidden indicates that the server understood the request but refuses to authorize it.",
      "D": "HTTP 400 Bad Request indicates that the server cannot or will not process the request due to perceived client error (e.g., malformed syntax)."
    }
  },
  {
    "id": "set2-q4",
    "tier": 3,
    "tierName": "Tier 3 — Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "System Calls",
    "difficulty": "Medium",
    "question": "A developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls fulfills this requirement in a Unix-like OS?",
    "options": [
      { "id": "A", "text": "fork() and exec()" },
      { "id": "B", "text": "fork() and wait()" },
      { "id": "C", "text": "clone() and exit()" },
      { "id": "D", "text": "spawn() and kill()" }
    ],
    "correctAnswer": "A",
    "explanation": "fork() creates a new process and exec() replaces it with a new executable.",
    "memoryTip": "fork() clones the process; exec() overlays and runs the new program binary.",
    "breakdown": {
      "A": "Correct! fork() duplicates the existing process to create a child process, and exec() replaces the child's address space with the new executable program.",
      "B": "wait() blocks the calling process until one of its child processes exits or changes state, but does not load a new executable.",
      "C": "clone() is a Linux-specific call often used for thread creation, and exit() terminates the process.",
      "D": "spawn() is a high-level library wrapper in some OSs, and kill() sends signals to terminate or manipulate processes."
    }
  },
  {
    "id": "set2-q5",
    "tier": 2,
    "tierName": "Tier 2 — Web APIs, HTTP Protocols & REST Principles",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Encryption in Transit",
    "difficulty": "Easy",
    "question": "Which protocol is commonly used to secure data in transit over the internet by encrypting communication between systems?",
    "options": [
      { "id": "A", "text": "HTTP" },
      { "id": "B", "text": "MTP" },
      { "id": "C", "text": "SSL/TLS" },
      { "id": "D", "text": "SMTP" }
    ],
    "correctAnswer": "C",
    "explanation": "TLS (Transport Layer Security) encrypts data during transmission and is the modern, secure standard used for protecting data in transit.",
    "memoryTip": "Securing web data in transit = SSL/TLS.",
    "breakdown": {
      "A": "HTTP transmits data in clear text without cryptographic protection, making it vulnerable to packet sniffing and tampering.",
      "B": "MTP (Media Transfer Protocol) is a protocol used for transferring multimedia files to portable devices, not internet transit encryption.",
      "C": "Correct! TLS (Transport Layer Security, previously SSL) provides end-to-end cryptographic encryption and data integrity for internet communication.",
      "D": "SMTP transfers email between servers in plaintext by default unless upgraded via STARTTLS."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 3 (Q6 - Q9)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q6",
    "tier": 1,
    "tierName": "Tier 1 — Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Cloud Security Governance",
    "difficulty": "Easy",
    "question": "Assume that you have recently started working for an organization that is migrating to a cloudbased infrastructure. As part of IT governance, you are responsible for ensuring data security in the cloud environment. You are aware of various cloud deployment models and need to choose the most secure option for your organization's sensitive data. In the context of IT governance and cloud security, which cloud deployment model is typically the most secure choice for organizations with highly sensitive data?",
    "options": [
      { "id": "A", "text": "Public Cloud" },
      { "id": "B", "text": "Private Cloud" },
      { "id": "C", "text": "Community Cloud" },
      { "id": "D", "text": "Hybrid Cloud" }
    ],
    "correctAnswer": "B",
    "explanation": "Private cloud provides the highest security for highly sensitive organizational data.",
    "memoryTip": "Highest control & security for sensitive data = Private Cloud.",
    "breakdown": {
      "A": "Public clouds are multi-tenant environments where infrastructure is shared among diverse organizations, offering less physical isolation.",
      "B": "Correct! Private clouds provide dedicated, isolated infrastructure accessible solely by a single organization, maximizing governance and confidentiality.",
      "C": "Community clouds share infrastructure across multiple organizations with common interests, introducing shared trust boundaries.",
      "D": "Hybrid clouds combine private and public clouds, requiring complex boundary security across public network interfaces."
    }
  },
  {
    "id": "set2-q7",
    "tier": 4,
    "tierName": "Tier 4 — Computer Networks, VPNs & Network Security",
    "topic": "Computer Networks & OSI",
    "subtopic": "TCP 3-Way Handshake",
    "difficulty": "Easy",
    "question": "After initializing a connection attempt to a remote server, consider that a client application sends a SYN packet to indicate the request for establishing a reliable connection. What is the expected response from the server, assuming it is available and prepared to accept the connection from the client?",
    "options": [
      { "id": "A", "text": "SYN-ACK packet" },
      { "id": "B", "text": "ACK packet only" },
      { "id": "C", "text": "FIN packet" },
      { "id": "D", "text": "RST packet" }
    ],
    "correctAnswer": "A",
    "explanation": "The server responds with a SYN-ACK packet.",
    "memoryTip": "TCP 3-Way Handshake: Step 1 (SYN) -> Step 2 (SYN-ACK) -> Step 3 (ACK).",
    "breakdown": {
      "A": "Correct! In the TCP 3-way handshake, when the server receives a SYN packet, it acknowledges it and initiates its own sequence with a SYN-ACK packet.",
      "B": "An ACK packet alone is sent in step 3 by the client to finalize connection establishment, not by the server in step 2.",
      "C": "A FIN packet is used to initiate connection termination, not to establish a new reliable connection.",
      "D": "An RST (Reset) packet is returned if the server refuses the connection or if the destination port is closed."
    }
  },
  {
    "id": "set2-q8",
    "tier": 4,
    "tierName": "Tier 4 — Computer Networks, VPNs & Network Security",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Wireless Encryption Standards",
    "difficulty": "Easy",
    "question": "A network administrator is tasked with selecting a secure wireless encryption protocol. Which of the following is considered the most secure for Wi-Fi networks?",
    "options": [
      { "id": "A", "text": "WEP" },
      { "id": "B", "text": "WPA" },
      { "id": "C", "text": "WPA2" },
      { "id": "D", "text": "WPA3" }
    ],
    "correctAnswer": "D",
    "explanation": "WPA3 is the most secure wireless encryption protocol.",
    "memoryTip": "Most secure Wi-Fi protocol = WPA3 (features SAE and 192-bit enterprise security).",
    "breakdown": {
      "A": "WEP (Wired Equivalent Privacy) is heavily compromised and can be cracked in seconds using standard sniffing tools.",
      "B": "WPA used TKIP and was a temporary replacement for WEP, but is now obsolete and insecure.",
      "C": "WPA2 uses AES-CCMP and is widely used, but is susceptible to KRACK (Key Reinstallation) attacks.",
      "D": "Correct! WPA3 provides the highest level of Wi-Fi security, using Simultaneous Authentication of Equals (SAE) to protect against dictionary attacks."
    }
  },
  {
    "id": "set2-q9",
    "tier": 4,
    "tierName": "Tier 4 — Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "Firewall Bypass Attacks",
    "difficulty": "Medium",
    "question": "Assume your computer's data was stolen by hackers through your network by mentioning the route to be used by the packets. This is done by the hackers to avoid security measures due to:",
    "options": [
      { "id": "A", "text": "Source Routing Attack" },
      { "id": "B", "text": "Denial of Service Attack" },
      { "id": "C", "text": "Man-in-the-Middle Attack" },
      { "id": "D", "text": "Smurf Attack" }
    ],
    "correctAnswer": "A",
    "explanation": "This attack is called Source Routing Attack.",
    "memoryTip": "Hackers specifying packet path to bypass firewalls = Source Routing Attack.",
    "breakdown": {
      "A": "Correct! A Source Routing Attack exploits IP source routing options, allowing the sender to specify the exact path packets follow to bypass defensive firewalls.",
      "B": "A Denial of Service (DoS) attack aims to disrupt availability rather than stealthily dictating packet routes for data exfiltration.",
      "C": "A Man-in-the-Middle attack intercepts active communications, but does not rely specifically on sender-specified packet route options.",
      "D": "A Smurf attack floods a victim with ICMP echo replies via broadcast reflection, unrelated to path specification."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 4 (Q10 - Q12)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q10",
    "tier": 3,
    "tierName": "Tier 3 — Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "CPU Architecture",
    "difficulty": "Easy",
    "question": "As a computer architect designing the control unit of a CPU, you need to specify how data is moved from the accumulator to memory. Which option best describes this operation?",
    "options": [
      { "id": "A", "text": "The process of transferring data from the accumulator to memory is called a register transfer" },
      { "id": "B", "text": "The process of transferring data from the accumulator to memory is called a memory read operation" },
      { "id": "C", "text": "The process of transferring data from the accumulator to memory is called a memory write operation" },
      { "id": "D", "text": "The process of transferring data from the accumulator to memory is called an instruction fetch" }
    ],
    "correctAnswer": "C",
    "explanation": "Writing data from a CPU register (accumulator) into memory is classified as a memory write operation.",
    "memoryTip": "CPU Accumulator -> RAM = Memory Write | RAM -> CPU = Memory Read.",
    "breakdown": {
      "A": "A register transfer moves data purely between internal CPU registers, not from register to external system RAM.",
      "B": "A memory read operation transfers data from main memory into the CPU, the exact reverse of accumulator-to-memory.",
      "C": "Correct! Moving data from the internal processor accumulator register into system memory constitutes a memory write operation.",
      "D": "An instruction fetch retrieves program opcode bytes from memory into the instruction register for decoding."
    }
  },
  {
    "id": "set2-q11",
    "tier": 1,
    "tierName": "Tier 1 — Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Hybrid Cloud Connectivity",
    "difficulty": "Medium",
    "question": "An enterprise is adopting a hybrid cloud model where they combine on-premise infrastructure with public cloud services to securely connect these environments and ensure reliability. What solutions should they implement?",
    "options": [
      { "id": "A", "text": "Public unencrypted internet connections" },
      { "id": "B", "text": "Secure VPN or dedicated connectivity like Direct Connect" },
      { "id": "C", "text": "Unprotected FTP tunnels" },
      { "id": "D", "text": "Consumer-grade dial-up connections" }
    ],
    "correctAnswer": "B",
    "explanation": "Secure VPN or dedicated connectivity like Direct Connect ensures reliable hybrid cloud integration.",
    "memoryTip": "Hybrid Cloud Connection = IPsec VPN or Dedicated Direct Connect / ExpressRoute.",
    "breakdown": {
      "A": "Public unencrypted internet exposes enterprise traffic to interception, tampering, and unpredictable packet loss.",
      "B": "Correct! Implementing IPsec VPNs or private dedicated fiber interconnects (e.g., AWS Direct Connect, Azure ExpressRoute) ensures secure, high-throughput hybrid cloud integration.",
      "C": "FTP is an unencrypted file transfer protocol that exposes authentication credentials in cleartext.",
      "D": "Dial-up connections provide negligible bandwidth and lack modern encryption and SLA guarantees."
    }
  },
  {
    "id": "set2-q12",
    "tier": 4,
    "tierName": "Tier 4 — Computer Networks, VPNs & Network Security",
    "topic": "VPN & Remote Connectivity",
    "subtopic": "Remote Access VPN",
    "difficulty": "Easy",
    "question": "Assume that an employee at a multinational organization is working from home for some reason and needs to access the company's internal network to retrieve some files. Which type of VPN will be best suitable for this case?",
    "options": [
      { "id": "A", "text": "Site-to-Site VPN" },
      { "id": "B", "text": "Remote Access VPN" },
      { "id": "C", "text": "Host-to-Host Unencrypted Tunnel" },
      { "id": "D", "text": "Extranet VPN" }
    ],
    "correctAnswer": "B",
    "explanation": "Remote Access VPN is best suited for employees working from home.",
    "memoryTip": "Individual teleworker connecting to office = Remote Access VPN.",
    "breakdown": {
      "A": "Site-to-Site VPN connects two fixed physical network locations (such as branch offices), not individual remote workers.",
      "B": "Correct! A Remote Access VPN enables individual telecommuters to establish an encrypted tunnel from their home computers into the corporate LAN.",
      "C": "An unencrypted tunnel fails to protect sensitive corporate assets over untrusted residential internet connections.",
      "D": "An Extranet VPN connects trusted external business partners, not internal remote employees."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 5 (Q13 - Q15)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q13",
    "tier": 5,
    "tierName": "Tier 5 — DevOps, Containers, Office Tools & Cryptography",
    "topic": "DevOps & CI/CD",
    "subtopic": "Continuous Deployment",
    "difficulty": "Medium",
    "question": "The e-commerce company updates its website weekly by adding new features and fixes. Using an agile development approach, after each update, the new version is automatically deployed to the live environment. The practice involves automating the process of releasing software to production frequently and reliably. Which practice is being implemented?",
    "options": [
      { "id": "A", "text": "Continuous Deployment — automates frequent and reliable releases to production" },
      { "id": "B", "text": "Continuous Integration — focuses on merging code changes regularly to prevent integration issues" },
      { "id": "C", "text": "Continuous Testing — ensures automated tests are run continually to validate code quality" },
      { "id": "D", "text": "Monitoring — tracks application performance and user activity after deployment" }
    ],
    "correctAnswer": "A",
    "explanation": "Continuous Deployment automates frequent releases to production, ensuring new updates are delivered reliably without manual intervention.",
    "memoryTip": "Automating deployment directly to production = Continuous Deployment.",
    "breakdown": {
      "A": "Correct! Continuous Deployment (CD) automatically releases every validated software build directly into the live production environment.",
      "B": "Continuous Integration (CI) automates the building and testing of code upon merging, but stops short of automatic production release.",
      "C": "Continuous Testing executes automated test suites throughout the pipeline, but does not deploy the software.",
      "D": "Monitoring tracks runtime system telemetry, CPU load, and user metrics after deployment has occurred."
    }
  },
  {
    "id": "set2-q14",
    "tier": 4,
    "tierName": "Tier 4 — Computer Networks, VPNs & Network Security",
    "topic": "Network Security & Attacks",
    "subtopic": "MITM Routing Attacks",
    "difficulty": "Medium",
    "question": "Hackers can manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to pull, extract, or edit data without detection. What type of attack is this called?",
    "options": [
      { "id": "A", "text": "Man-in-the-Middle (MITM) attack" },
      { "id": "B", "text": "Brute-force attack" },
      { "id": "C", "text": "Phishing attack" },
      { "id": "D", "text": "Buffer overflow attack" }
    ],
    "correctAnswer": "A",
    "explanation": "This type of attack is known as Man-in-the-Middle (MITM) attack.",
    "memoryTip": "Redirecting and modifying live network traffic between endpoints = MITM Attack.",
    "breakdown": {
      "A": "Correct! In a Man-in-the-Middle (MITM) attack, the attacker secretly intercepts and alters communication between two parties who believe they are communicating directly.",
      "B": "A brute-force attack attempts all possible character combinations to guess passwords or cryptographic keys.",
      "C": "Phishing deceives human users into providing credentials through fraudulent emails or cloned websites.",
      "D": "A buffer overflow exploits memory boundary bugs in software to overwrite executable memory."
    }
  },
  {
    "id": "set2-q15",
    "tier": 3,
    "tierName": "Tier 3 — Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "CPU Registers in Context Switching",
    "difficulty": "Medium",
    "question": "During a context switch, consider that the operating system saves the state of the currently running process and loads the state of the next process to be executed. Which crucial CPU register responsible for loading the address of the next instruction to be fetched must be saved and restored during this operation?",
    "options": [
      { "id": "A", "text": "Stack Pointer (SP)" },
      { "id": "B", "text": "Accumulator (ACC)" },
      { "id": "C", "text": "Program Counter (PC) register" },
      { "id": "D", "text": "Memory Buffer Register (MBR)" }
    ],
    "correctAnswer": "C",
    "explanation": "The Program Counter (PC) register must be saved and restored.",
    "memoryTip": "Holds address of next instruction to be executed = Program Counter (PC).",
    "breakdown": {
      "A": "The Stack Pointer tracks the top of the current call stack, not the memory address of the next instruction.",
      "B": "The Accumulator holds arithmetic and logical calculation results inside the ALU.",
      "C": "Correct! The Program Counter (PC) holds the memory address of the next sequential instruction to be fetched and executed by the CPU.",
      "D": "The Memory Buffer Register temporarily stores data fetched from or written to memory."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 6 (Q16 - Q17)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q16",
    "tier": 3,
    "tierName": "Tier 3 — Operating Systems & Computer Architecture",
    "topic": "Operating Systems & Processes",
    "subtopic": "Bus Controllers & Caching",
    "difficulty": "Medium",
    "question": "Suppose you want to design a bus system where input-output devices are connected to the computer via wires, and data transfer is handled electronically. The host controller sends messages to the device controller, which performs the operation. If the device controllers have a built-in cache for faster data transfer, which device will you choose?",
    "options": [
      { "id": "A", "text": "Enhanced Integrated Device Electronics A" },
      { "id": "B", "text": "Enhanced Integrated Device Electronics B (EIDE B)" },
      { "id": "C", "text": "Enhanced Integrated Device Electronics C" },
      { "id": "D", "text": "Enhanced Integrated Hard Driver" }
    ],
    "correctAnswer": "B",
    "explanation": "EIDE controllers include built-in caching to speed up data transfers between the host and storage devices.",
    "memoryTip": "Controller with built-in cache for I/O bus = EIDE B.",
    "breakdown": {
      "A": "EIDE A is an earlier iteration lacking the enhanced dual-channel buffering and high-throughput caching of Type B.",
      "B": "Correct! Enhanced Integrated Device Electronics B (EIDE B) incorporates onboard caching controllers to accelerate data transfers across shared buses.",
      "C": "EIDE C is a distractor; standard legacy hardware controllers designated Type B as the cached revision.",
      "D": "Enhanced Integrated Hard Driver is an incorrect terminological combination."
    }
  },
  {
    "id": "set2-q17",
    "tier": 5,
    "tierName": "Tier 5 — DevOps, Containers, Office Tools & Cryptography",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "Chosen-Plaintext Attack",
    "difficulty": "Hard",
    "question": "Each party encrypts messages before sending them using a shared secret key, and messages are decrypted by the receiving party using the same key. If an attacker can send a specially crafted message to one party and analyze the resulting encrypted output, which technique is most likely to compromise the secret key in this symmetric encryption system?",
    "options": [
      { "id": "A", "text": "Analyzing patterns in intercepted encrypted messages" },
      { "id": "B", "text": "Comparing the crafted message's encrypted output with previously encrypted messages" },
      { "id": "C", "text": "Performing a brute-force attack on intercepted messages" },
      { "id": "D", "text": "Matching message lengths to guess the content" }
    ],
    "correctAnswer": "B",
    "explanation": "In a symmetric encryption system, a chosen-plaintext attack exploits the encryption of crafted messages to deduce the shared secret key.",
    "memoryTip": "Chosen-plaintext attack = Attacker feeds crafted plaintext and compares ciphertext.",
    "breakdown": {
      "A": "Ciphertext-only analysis is far weaker and slower than having chosen-plaintext access.",
      "B": "Correct! In a chosen-plaintext attack, comparing the ciphertexts generated from chosen plaintexts with known target ciphertexts allows cryptanalysts to deduce mathematical relationships and recover the secret key.",
      "C": "Exhaustive brute-force key search is computationally infeasible against modern symmetric key lengths like AES-128/256.",
      "D": "Message length matching reveals structure, but cannot directly break symmetric key material."
    }
  },

  # -------------------------------------------------------------------------------------
  # PAGE 7 (Q18 - Q20)
  # -------------------------------------------------------------------------------------
  {
    "id": "set2-q18",
    "tier": 5,
    "tierName": "Tier 5 — DevOps, Containers, Office Tools & Cryptography",
    "topic": "Containerization & Microservices",
    "subtopic": "Container Architecture",
    "difficulty": "Medium",
    "question": "A software development team is implementing containerization to streamline application deployment by encapsulating applications and their dependencies. Which characteristic defines containers in the context of software development and deployment?",
    "options": [
      { "id": "A", "text": "Virtual machines with a dedicated Hypervisor" },
      { "id": "B", "text": "A logical separate network within the server" },
      { "id": "C", "text": "Part of the same OS instance as the Hypervisor" },
      { "id": "D", "text": "Virtual computers running under a Hypervisor" }
    ],
    "correctAnswer": "C",
    "explanation": "Containers run isolated applications within the same OS instance, unlike virtual machines that require a dedicated hypervisor and separate OS.",
    "memoryTip": "Containers share the host OS kernel; VMs run separate guest OSs over a hypervisor.",
    "breakdown": {
      "A": "Virtual machines running on a dedicated hypervisor define hardware virtualization, not lightweight containerization.",
      "B": "A separate logical network describes a VLAN or overlay network, not application container isolation.",
      "C": "Correct! Containers run as isolated processes sharing the same underlying host operating system kernel and instance.",
      "D": "Virtual computers running independent OS kernels under hypervisors describes traditional VMs."
    }
  },
  {
    "id": "set2-q19",
    "tier": 5,
    "tierName": "Tier 5 — DevOps, Containers, Office Tools & Cryptography",
    "topic": "Cryptography & Wi-Fi Security",
    "subtopic": "WPA3 Security Suites",
    "difficulty": "Hard",
    "question": "Assume that a developer is tasked with configuring a high-security Wi-Fi environment for a sensitive government project using Android devices. The configuration includes:\nConfig SAE = Y\nConfig SUITEB = Y\nConfigure SUITEB192 = Y\nIn the given scenario, which configuration line is incorrect or redundant and might potentially weaken the desired security level?",
    "options": [
      { "id": "A", "text": "Config SAE = Y" },
      { "id": "B", "text": "Config SUITEB = Y" },
      { "id": "C", "text": "Configure SUITEB192 = Y" },
      { "id": "D", "text": "All configuration lines are required and valid" }
    ],
    "correctAnswer": "C",
    "explanation": "Configure SUITEB192 = Y is redundant and may weaken compatibility without added benefit.",
    "memoryTip": "Configuring both SUITEB and SUITEB192 creates redundancy that impairs device negotiation.",
    "breakdown": {
      "A": "Config SAE = Y enables Simultaneous Authentication of Equals, the required core handshake of WPA3.",
      "B": "Config SUITEB = Y specifies the NSA Suite B cryptographic suite for government-grade Wi-Fi security.",
      "C": "Correct! 'Configure SUITEB192 = Y' is redundant when SUITEB is already declared, and improper syntax can break device negotiation.",
      "D": "Declaring redundant and overlapping configuration directives causes parsing conflicts in Android wpa_supplicant."
    }
  },
  {
    "id": "set2-q20",
    "tier": 1,
    "tierName": "Tier 1 — Cloud Architecture, Storage & Deployment",
    "topic": "Cloud Storage & Architecture",
    "subtopic": "Resource Pooling & Elasticity",
    "difficulty": "Medium",
    "question": "As part of a data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with a next generation storage solution. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing?",
    "options": [
      { "id": "A", "text": "Resource pooling eliminates the need for data backups entirely" },
      { "id": "B", "text": "Resource pooling enables dynamic allocation of shared storage capacity to meet demand" },
      { "id": "C", "text": "Resource pooling restricts storage access to local nodes only" },
      { "id": "D", "text": "Resource pooling limits storage capacity to single vendor drives" }
    ],
    "correctAnswer": "B",
    "explanation": "Resource pooling enables dynamic allocation of shared storage capacity to meet demand.",
    "memoryTip": "Resource pooling aggregates multi-vendor storage -> Enables elastic on-demand allocation.",
    "breakdown": {
      "A": "Resource pooling does not replace data backups; disaster recovery and snapshots remain essential.",
      "B": "Correct! Resource pooling aggregates disparate physical storage into a unified virtual pool, enabling dynamic, elastic capacity allocation on demand.",
      "C": "Resource pooling enables network-wide distributed access rather than restricting access to local nodes.",
      "D": "Resource pooling abstracts away vendor-specific hardware, deliberately avoiding single-vendor lock-in."
    }
  }
]

print("Batch 1 (Q1 - Q20) loaded:", len(questions))

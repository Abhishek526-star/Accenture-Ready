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

q_list = []

def add_q(id_num, tier, tier_name, topic, subtopic, diff, question, options_list, correct, expl, tip, breakdown):
    q_list.append({
        "id": f"set2-q{id_num}",
        "tier": tier,
        "tierName": tier_name,
        "topic": topic,
        "subtopic": subtopic,
        "difficulty": diff,
        "question": question,
        "options": [{"id": k, "text": v} for k, v in options_list],
        "correctAnswer": correct,
        "explanation": expl,
        "memoryTip": tip,
        "breakdown": breakdown
    })

# =========================================================================
# PAGE 1
# =========================================================================
add_q(
    1, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Dynamic Scaling", "Easy",
    "In a cloud-based application where scalability is crucial, which cloud storage option allows dynamic scaling without the need for manual intervention?",
    [("A", "Block storage"), ("B", "File storage"), ("C", "Object storage"), ("D", "Table storage")],
    "C",
    "Object storage automatically scales as data grows, making it ideal for highly scalable cloud applications.",
    "Dynamic auto-scaling without manual intervention = Object Storage (S3 / Blob).",
    {
        "A": "Block storage manages data as fixed blocks (like virtual hard drives) and requires manual resizing and volume provisioning when limits are reached.",
        "B": "File storage organizes data in hierarchical folders via protocols like NFS/SMB, which typically require upfront capacity quota management.",
        "C": "Correct! Object storage stores data as discrete objects with metadata and unique identifiers, automatically scaling to exabytes without manual intervention.",
        "D": "Table storage is a NoSQL key-value attribute store, not a general-purpose unstructured binary cloud storage architecture."
    }
)

add_q(
    2, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "HTTP Read-Only Methods", "Easy",
    "A mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read data without making any changes to the server resources. Which HTTP method is most appropriate for this operation?",
    [("A", "POST"), ("B", "PUT"), ("C", "DELETE"), ("D", "GET")],
    "D",
    "GET is used to retrieve data from a server without modifying any existing resources.",
    "Safe & Read-only retrieval = HTTP GET.",
    {
        "A": "POST is used to submit data to be processed to a specified resource, often creating a new entry or modifying state.",
        "B": "PUT replaces all current representations of the target resource with the uploaded payload.",
        "C": "DELETE requests that a specified resource be removed from the server.",
        "D": "Correct! GET is a safe, idempotent method designed strictly to read/retrieve resources without mutating server state."
    }
)

# =========================================================================
# PAGE 2
# =========================================================================
add_q(
    3, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "HTTP Status Codes", "Easy",
    "During application development, a developer encounters an error due to an incorrect or unavailable API endpoint, resulting in a “Not Found” response. Which HTTP status code most accurately represents this error?",
    [("A", "404"), ("B", "500"), ("C", "403"), ("D", "400")],
    "A",
    "HTTP 404 is returned when the requested endpoint or resource does not exist on the server.",
    "Resource or URL missing = HTTP 404 Not Found.",
    {
        "A": "Correct! HTTP 404 Not Found indicates that the origin server did not find a current representation for the target resource.",
        "B": "500 Internal Server Error indicates an unhandled exception or crash occurred within the server application logic.",
        "C": "403 Forbidden indicates the server understood the request but refuses to authorize it even after authentication.",
        "D": "400 Bad Request indicates that the server cannot process the request due to malformed syntax or invalid client parameters."
    }
)

add_q(
    4, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Unix System Calls", "Medium",
    "A developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls fulfills this requirement in a Unix-like OS?",
    [("A", "fork() and exec()"), ("B", "wait() and signal()"), ("C", "clone() and kill()"), ("D", "open() and read()")],
    "A",
    "fork() creates a new process and exec() replaces it with a new executable.",
    "Create process = fork() | Replace executable = exec().",
    {
        "A": "Correct! fork() duplicates the existing process to create a child process, and exec() replaces the address space with a new executable program binary.",
        "B": "wait() pauses the parent until a child process terminates; signal() registers software interrupt handlers.",
        "C": "clone() creates threads/processes with shared memory flags; kill() sends signals to terminate or control processes.",
        "D": "open() and read() are low-level file I/O descriptor operations, not process lifecycle system calls."
    }
)

add_q(
    5, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Cryptography & Wi-Fi Security", "Transport Layer Security", "Easy",
    "Which protocol is commonly used to secure data in transit over the internet by encrypting communication between systems?",
    [("A", "HTTP"), ("B", "MTP"), ("C", "SSL/TLS"), ("D", "SMTP")],
    "C",
    "TLS (Transport Layer Security) encrypts data during transmission and is the modern, secure standard used for protecting data in transit.",
    "Data in transit encryption standard = TLS (Transport Layer Security).",
    {
        "A": "HTTP transmits all data in clear plaintext over port 80 without any cryptographic protection.",
        "B": "MTP (Media Transfer Protocol) is an extension to PTP used for transferring media files over USB, not internet encryption.",
        "C": "Correct! TLS (and legacy SSL) operates above transport layer to provide end-to-end symmetric encryption and certificate authentication.",
        "D": "SMTP transfers emails across mail servers in cleartext unless wrapped inside STARTTLS."
    }
)

# =========================================================================
# PAGE 3
# =========================================================================
add_q(
    6, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Cloud Deployment Models", "Easy",
    "Assume that you have recently started working for an organization that is migrating to a cloudbased infrastructure. As part of IT governance, you are responsible for ensuring data security in the cloud environment. You are aware of various cloud deployment models and need to choose the most secure option for your organization's sensitive data. In the context of IT governance and cloud security, which cloud deployment model is typically the most secure choice for organizations with highly sensitive data?",
    [("A", "Public Cloud"), ("B", "Private Cloud"), ("C", "Community Cloud"), ("D", "Hybrid Cloud")],
    "B",
    "Private cloud provides the highest security for highly sensitive organizational data.",
    "Highest isolation & governance for sensitive data = Private Cloud.",
    {
        "A": "Public cloud infrastructure is multi-tenant and shared across multiple external organizations, increasing compliance risk for top-secret data.",
        "B": "Correct! A private cloud is dedicated exclusively to a single organization, offering complete physical and logical isolation, customized firewalls, and stringent governance.",
        "C": "Community cloud is shared between several organizations with common concerns (e.g., banks or universities), but still lacks single-tenant isolation.",
        "D": "Hybrid cloud links private and public environments; while flexible, the overall perimeter security must account for public cloud vulnerabilities."
    }
)

add_q(
    7, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Computer Networks & OSI", "TCP Handshake", "Easy",
    "After initializing a connection attempt to a remote server, consider that a client application sends a SYN packet to indicate the request for establishing a reliable connection. What is the expected response from the server, assuming it is available and prepared to accept the connection from the client?",
    [("A", "ACK packet"), ("B", "SYN-ACK packet"), ("C", "FIN packet"), ("D", "RST packet")],
    "B",
    "The server responds with a SYN-ACK packet.",
    "TCP 3-Way Handshake step 2: Client SYN -> Server SYN-ACK -> Client ACK.",
    {
        "A": "ACK alone is sent in step 3 by the client to confirm the server's SYN-ACK, not by the server in step 2.",
        "B": "Correct! In the TCP 3-way handshake, the server responds to the client's SYN with SYN-ACK (Synchronize-Acknowledge) to synchronize its own sequence numbers.",
        "C": "FIN is sent to initiate graceful teardown and closing of an active connection.",
        "D": "RST (Reset) is sent to abruptly reject or terminate an invalid or closed connection attempt."
    }
)

add_q(
    8, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Cryptography & Wi-Fi Security", "Wireless Protocols", "Easy",
    "A network administrator is tasked with selecting a secure wireless encryption protocol. Which of the following is considered the most secure for Wi-Fi networks?",
    [("A", "WEP"), ("B", "WPA"), ("C", "WPA2"), ("D", "WPA3")],
    "D",
    "WPA3 is the most secure wireless encryption protocol.",
    "Most modern & secure Wi-Fi encryption = WPA3 (with SAE & 192-bit enterprise security).",
    {
        "A": "WEP (Wired Equivalent Privacy) uses vulnerable RC4 and static 40-bit keys that can be broken in seconds.",
        "B": "WPA introduced TKIP as an emergency band-aid for WEP, but is now deprecated and insecure.",
        "C": "WPA2 uses AES-CCMP and was the standard for years, but is susceptible to KRACK (Key Reinstallation Attacks) and offline dictionary attacks.",
        "D": "Correct! WPA3 replaces PSK with Simultaneous Authentication of Equals (SAE), preventing offline dictionary attacks and offering 192-bit cryptographic suites."
    }
)

add_q(
    9, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Network Security & Attacks", "Routing Attacks", "Medium",
    "Assume your computer's data was stolen by hackers through your network by mentioning the route to be used by the packets. This is done by the hackers to avoid security measures due to",
    [("A", "Man-in-the-Middle Attack"), ("B", "Packet Sniffing Attack"), ("C", "Source Routing Attack"), ("D", "Denial of Service Attack")],
    "C",
    "This attack is called Source Routing Attack.",
    "Packets specifying custom network route to bypass firewalls = Source Routing Attack.",
    {
        "A": "Man-in-the-Middle (MITM) intercepts communication between two parties, but does not specifically rely on IP packet source route headers.",
        "B": "Packet sniffing is passive packet inspection on a local segment using promiscuous network interfaces.",
        "C": "Correct! In a Source Routing Attack, the sender specifies the exact sequence of intermediate routers in the IP header to bypass security checkpoints and firewalls.",
        "D": "Denial of Service aims to deplete server CPU, bandwidth, or memory resources to render services unavailable."
    }
)

# =========================================================================
# PAGE 4
# =========================================================================
add_q(
    10, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "CPU Memory Operations", "Medium",
    "As a computer architect designing the control unit of a CPU, you need to specify how data is moved from the accumulator to memory. Which option best describes this operation?",
    [
        ("A", "The process of transferring data from the accumulator to memory is called a register transfer"),
        ("B", "The process of transferring data from the accumulator to memory is called a memory read operation"),
        ("C", "The process of transferring data from the accumulator to memory is called a memory write operation"),
        ("D", "The process of transferring data from the accumulator to memory is called an instruction fetch")
    ],
    "C",
    "Writing data from a CPU register (accumulator) into memory is classified as a memory write operation.",
    "Accumulator -> Memory = Write | Memory -> Register = Read.",
    {
        "A": "Register transfer describes moving data directly between internal CPU registers, not between a register and main RAM memory.",
        "B": "Memory read loads data from main memory into a CPU register (e.g., loading from RAM into the accumulator).",
        "C": "Correct! Transferring data from an internal processor register (accumulator) into main memory writes new data into RAM, hence a memory write operation.",
        "D": "Instruction fetch reads the next machine instruction from program memory into the Instruction Register (IR)."
    }
)

add_q(
    11, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "VPN & Remote Connectivity", "Hybrid Cloud Integration", "Medium",
    "An enterprise is adopting a hybrid cloud model where they combine on-premise infrastructure with public cloud services to securely connect these environments and ensure reliability. What solutions should they implement?",
    [
        ("A", "Unencrypted public HTTP endpoints"),
        ("B", "Secure VPN or dedicated connectivity like Direct Connect"),
        ("C", "Open Telnet connections over public internet"),
        ("D", "Standard dial-up modems without authentication")
    ],
    "B",
    "Secure VPN or dedicated connectivity like Direct Connect ensures reliable hybrid cloud integration.",
    "Connecting On-Premise to Public Cloud = IPSec VPN / AWS Direct Connect / Azure ExpressRoute.",
    {
        "A": "Public unencrypted HTTP endpoints expose sensitive enterprise database packets to snooping and tampering.",
        "B": "Correct! An enterprise hybrid cloud requires encrypted IPsec VPN tunnels or dedicated private fiber connections (AWS Direct Connect / Azure ExpressRoute) for low latency and high reliability.",
        "C": "Telnet is unencrypted and transmits credentials in plaintext, posing an extreme security vulnerability.",
        "D": "Dial-up modems lack the multi-gigabit bandwidth, redundancy, and cryptographic safeguards required for enterprise hybrid clouds."
    }
)

add_q(
    12, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "VPN & Remote Connectivity", "Remote Access Topologies", "Easy",
    "Assume that an employee at a multinational organization is working from home for some reason and needs to access the company's internal network to retrieve some files. Which type of VPN will be best suitable for this case?",
    [
        ("A", "Site-to-Site VPN"),
        ("B", "Remote Access VPN"),
        ("C", "Router-to-Router Hardware VPN"),
        ("D", "Static MPLS Trunking without VPN")
    ],
    "B",
    "Remote Access VPN is best suited for employees working from home.",
    "Individual employee working remotely / WFH = Remote Access VPN.",
    {
        "A": "Site-to-Site VPN connects two fixed physical enterprise office branch networks, not individual roaming mobile laptops.",
        "B": "Correct! Remote Access VPN establishes a secure point-to-site encrypted tunnel between an individual user's remote device and the corporate intranet.",
        "C": "Router-to-router hardware VPNs require dedicated gateway routers at both ends, which telecommuting workers do not possess at home.",
        "D": "MPLS requires expensive leased provider circuits and physical telecommunication terminal drops."
    }
)

# =========================================================================
# PAGE 5
# =========================================================================
add_q(
    13, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "DevOps & CI/CD", "Continuous Deployment", "Easy",
    "The e-commerce company updates its website weekly by adding new features and fixes. Using an agile development approach, after each update, the new version is automatically deployed to the live environment. The practice involves automating the process of releasing software to production frequently and reliably. Which practice is being implemented?",
    [
        ("A", "Continuous Deployment — automates frequent and reliable releases to production"),
        ("B", "Continuous Integration — focuses on merging code changes regularly to prevent integration issues"),
        ("C", "Continuous Testing — ensures automated tests are run continually to validate code quality"),
        ("D", "Monitoring — tracks application performance and user activity after deployment")
    ],
    "A",
    "Continuous Deployment automates frequent releases to production, ensuring new updates are delivered reliably without manual intervention.",
    "Automated push to LIVE production environment = Continuous Deployment.",
    {
        "A": "Correct! Continuous Deployment (CD) automates the entire release process such that passing software builds are deployed automatically into live production.",
        "B": "Continuous Integration (CI) merges developer working copies to a shared mainline and runs automated builds and unit tests.",
        "C": "Continuous Testing executes automated test suites throughout the development pipeline, but does not deploy code to production.",
        "D": "Monitoring is the post-deployment observation of system health, application telemetry, and metrics."
    }
)

add_q(
    14, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Network Security & Attacks", "Packet Manipulation Attacks", "Medium",
    "Hackers can manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to pull, extract, or edit data without detection. What type of attack Is this called?",
    [
        ("A", "Brute Force Attack"),
        ("B", "Denial of Service (DoS) Attack"),
        ("C", "Man-in-the-Middle (MITM) attack"),
        ("D", "Buffer Overflow Attack")
    ],
    "C",
    "This type of attack is known as Man-in-the-Middle (MITM) attack.",
    "Redirecting and intercepting live packet traffic between sender & receiver = Man-in-the-Middle (MITM).",
    {
        "A": "Brute force attacks attempt exhaustive combinations of passwords or encryption keys to breach credentials.",
        "B": "DoS attacks flood network pipes to make services inaccessible, rather than secretly eavesdropping or modifying packets.",
        "C": "Correct! In a Man-in-the-Middle (MITM) attack, the attacker intercepts and alters communications between two parties without either party knowing.",
        "D": "Buffer overflow attacks overwrite memory addresses by providing excess data inputs to exploit memory bounds."
    }
)

add_q(
    15, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Context Switching Registers", "Medium",
    "During a context switch, consider that the operating system saves the state of the currently running process and loads the state of the next process to be executed. Which crucial CPU register responsible for loading the address of the next instruction to be fetched must be saved and restored during this operation?",
    [
        ("A", "Memory Data Register (MDR)"),
        ("B", "Instruction Register (IR)"),
        ("C", "The Program Counter (PC) register"),
        ("D", "Accumulator (AC)")
    ],
    "C",
    "The Program Counter (PC) register must be saved and restored.",
    "Next instruction memory address = Program Counter (PC).",
    {
        "A": "MDR holds data fetched from or waiting to be written to memory, not the sequencing pointer of upcoming instructions.",
        "B": "The Instruction Register holds the instruction currently being decoded and executed, not the pointer to the next instruction.",
        "C": "Correct! The Program Counter (PC) holds the memory address of the next instruction to fetch; saving it preserves the execution resume point.",
        "D": "The accumulator holds intermediate ALU calculation operands and arithmetic results."
    }
)

# =========================================================================
# PAGE 6
# =========================================================================
add_q(
    16, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Device Controllers & Buses", "Hard",
    "Suppose you want to design a bus system where input-output devices are connected to the computer via wires, and data transfer is handled electronically. The host controller sends messages to the device controller, which performs the operation. If the device controllers have a built-in cache for faster data transfer, which device will you choose?",
    [
        ("A", "Enhanced Integrated Device Electronics A"),
        ("B", "Enhanced Integrated Device Electronics B (EIDE B)"),
        ("C", "Enhanced Integrated Device Electronics C"),
        ("D", "Enhanced Integrated Hard Driver")
    ],
    "B",
    "EIDE controllers include built-in caching to speed up data transfers between the host and storage devices.",
    "Integrated bus controller with onboard cache = EIDE B (Enhanced IDE Type B).",
    {
        "A": "EIDE Type A does not incorporate high-throughput built-in caching hardware controllers.",
        "B": "Correct! EIDE Type B specifications incorporate on-board controller hardware caching to buffer electronic transfers between the host CPU and disk drives.",
        "C": "EIDE Type C is an unstandardized variant not recognized for device caching specifications in hardware architecture curriculums.",
        "D": "Integrated Hard Driver is a drive component, not an interface bus controller architecture."
    }
)

add_q(
    17, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Cryptography & Wi-Fi Security", "Chosen Plaintext Attacks", "Hard",
    "Each party encrypts messages before sending them using a shared secret key, and messages are decrypted by the receiving party using the same key. If an attacker can send a specially crafted message to one party and analyze the resulting encrypted output, which technique is most likely to compromise the secret key in this symmetric encryption system?",
    [
        ("A", "Analyzing patterns in intercepted encrypted messages"),
        ("B", "Comparing the crafted message's encrypted output with previously encrypted messages"),
        ("C", "Performing a brute-force attack on intercepted messages"),
        ("D", "Matching message lengths to guess the content")
    ],
    "B",
    "In a symmetric encryption system, a chosen-plaintext attack exploits the encryption of crafted messages to deduce the shared secret key.",
    "Submitting crafted text & analyzing resulting ciphertext = Chosen Plaintext Attack.",
    {
        "A": "Ciphertext-only analysis without known plaintext pairs is mathematically intractable against modern symmetric ciphers.",
        "B": "Correct! In a Chosen Plaintext Attack (CPA), the cryptanalyst crafts custom input plaintexts and analyzes differences in corresponding ciphertexts to deduce key patterns.",
        "C": "Brute forcing a 128-bit or 256-bit symmetric key space requires billions of years of compute.",
        "D": "Matching message lengths gives coarse statistical metadata but cannot recover the secret key."
    }
)

# =========================================================================
# PAGE 7
# =========================================================================
add_q(
    18, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Containerization & Microservices", "Container Isolation vs VMs", "Medium",
    "A software development team is implementing containerization to streamline application deployment by encapsulating applications and their dependencies. Which characteristic defines containers in the context of software development and deployment?",
    [
        ("A", "Virtual machines with a dedicated Hypervisor"),
        ("B", "A logical separate network within the server"),
        ("C", "Part of the same OS instance as the Hypervisor"),
        ("D", "Virtual computers running under a Hypervisor")
    ],
    "C",
    "Containers run isolated applications within the same OS instance, unlike virtual machines that require a dedicated hypervisor and separate OS.",
    "Containers share host OS kernel; VMs run separate guest OS over hypervisors.",
    {
        "A": "Virtual machines running on a dedicated hypervisor define full hardware virtualization, not containerization.",
        "B": "A logical separate network describes a virtual LAN (VLAN) or software-defined network, not containerization.",
        "C": "Correct! Containers run as isolated user-space processes sharing the same underlying host operating system kernel.",
        "D": "Virtual computers running independent OS instances are traditional virtual machines (VMs)."
    }
)

add_q(
    19, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Cryptography & Wi-Fi Security", "WPA3 Android Configuration", "Hard",
    "Assume that a developer is tasked with configuring a high-security Wi-Fi environment for a sensitive government project using Android devices. The configuration includes:\nConfig SAE = Y\nConfig SUITEB = Y\nConfigure SUITEB192 = Y\nIn the given scenario, which configuration line is incorrect or redundant and might potentially weaken the desired security level?",
    [
        ("A", "Config SAE = Y"),
        ("B", "Config SUITEB = Y"),
        ("C", "Configure SUITEB192 = Y"),
        ("D", "All configuration lines are completely valid")
    ],
    "C",
    "Configure SUITEB192 = Y is redundant and may weaken compatibility without added benefit.",
    "SUITEB already covers 192-bit mode; adding duplicate SUITEB192 causes parser conflict.",
    {
        "A": "Config SAE = Y enables Simultaneous Authentication of Equals, the core mandatory handshake for WPA3.",
        "B": "Config SUITEB = Y enables the commercial National Security Agency (CNSA) cryptographic suite for high-security environments.",
        "C": "Correct! Specifying 'Configure SUITEB192 = Y' is redundant when SUITEB is already activated, leading to parser errors or negotiation fallback.",
        "D": "Having redundant directives introduces syntax incompatibilities in Android's wpa_supplicant."
    }
)

add_q(
    20, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Storage Resource Pooling", "Medium",
    "As part of a data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with a next generation storage solution. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing?",
    [
        ("A", "Resource pooling eliminates the need for data backups entirely"),
        ("B", "Resource pooling enables dynamic allocation of shared storage capacity to meet demand"),
        ("C", "Resource pooling restricts storage access to local nodes only"),
        ("D", "Resource pooling limits storage capacity to single vendor drives")
    ],
    "B",
    "Resource pooling enables dynamic allocation of shared storage capacity to meet demand.",
    "Resource pooling aggregates heterogeneous physical drives into an elastic dynamic pool.",
    {
        "A": "Resource pooling abstracts disks but does not eliminate the need for backup copies or snapshot redundancy.",
        "B": "Correct! Resource pooling aggregates physical storage from diverse vendors into a unified virtual pool, enabling dynamic, elastic provisioning on demand.",
        "C": "Resource pooling allows storage to be accessed globally across the network rather than strictly by local nodes.",
        "D": "Resource pooling explicitly overcomes single-vendor limitations by supporting heterogeneous storage systems."
    }
)

# =========================================================================
# PAGE 8
# =========================================================================
add_q(
    21, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Application Compatibility", "Medium",
    "Consider you are a software developer working on a new application for a large corporation. Your application is expected to run on a variety of different computers with varying hardware specifications and operating systems. Which property of an operating system is most important for you to consider?",
    [
        ("A", "Resource Allocation ensures smooth application execution across varied systems"),
        ("B", "Desktop Theme Customization ensures visual uniqueness"),
        ("C", "Sound Synthesizer Emulation controls acoustic outputs"),
        ("D", "Peripheral Disabling prevents hardware interrupts")
    ],
    "A",
    "Resource Allocation ensures smooth application execution across varied systems.",
    "Cross-platform execution across varied hardware = OS Resource Allocation.",
    {
        "A": "Correct! Resource allocation by the OS ensures that CPU time, memory space, and I/O bandwidth are dynamically scheduled so applications run reliably on varied hardware.",
        "B": "Desktop theme customization is a cosmetic UI feature that does not influence hardware compatibility or execution reliability.",
        "C": "Sound synthesizer emulation is an auxiliary multimedia driver feature unrelated to broad hardware execution.",
        "D": "Disabling peripherals would degrade system functionality rather than ensure broad application compatibility."
    }
)

add_q(
    22, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Traffic Spike Handling", "Easy",
    "An e-commerce website experiences sudden traffic spikes during a flash sale. The platform needs to access resources to handle the increase without manual intervention. Which cloud features should be prioritized?",
    [
        ("A", "Static server provisioning and fixed IP binding"),
        ("B", "Auto-scaling and load balancing should be prioritized"),
        ("C", "Disabling customer logins and running offline backups"),
        ("D", "Manual overclocking of server processors")
    ],
    "B",
    "Auto-scaling and load balancing should be prioritized.",
    "Sudden traffic surges handled automatically = Auto-scaling + Load Balancing.",
    {
        "A": "Static provisioning cannot respond dynamically to sudden traffic bursts and leads to server crashes or idle waste.",
        "B": "Correct! Auto-scaling dynamically adds computing instances based on real-time load, while load balancers distribute incoming requests evenly across healthy nodes.",
        "C": "Disabling customer logins destroys revenue during a flash sale and fails to provide scalability.",
        "D": "Manual processor overclocking is impossible in multi-tenant cloud environments and risks thermal throttling."
    }
)

add_q(
    23, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Shared Responsibility Model", "Easy",
    "Assume that a company migrates its application to a cloud-connected environment where the cloud provider handles infrastructure services while the customer develops and deploys the application. How does the shared responsibility model impact security management in this scenario?",
    [
        ("A", "The cloud provider manages 100% of all application security and user credentials"),
        ("B", "Both the cloud provider and the customer share security responsibilities"),
        ("C", "The customer is solely responsible for physical security of the cloud data centers"),
        ("D", "Security responsibilities are completely transferred to third-party ISPs")
    ],
    "B",
    "Both the cloud provider and the customer share security responsibilities.",
    "Cloud Provider protects infrastructure (Security OF the Cloud) | Customer protects data & code (Security IN the Cloud).",
    {
        "A": "The cloud provider does not control customer source code, user permissions, or data encryption.",
        "B": "Correct! Under the shared responsibility model, the provider secures the underlying infrastructure, while the customer is responsible for application logic, access control, and data.",
        "C": "Physical security of the servers and data center facilities is strictly the responsibility of the cloud provider.",
        "D": "Internet service providers merely transmit network packets; they do not assume application or infrastructure security duties."
    }
)

add_q(
    24, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "MS Office & Excel Tools", "PowerPoint Kiosk Mode", "Medium",
    "You are building a training module in MS PowerPoint and want to restrict navigation so that users view each slide sequentially with narration, without freely skipping slides. Which setting provides the strictest control over slide navigation?",
    [
        ("A", "Add hyperlinks between slides"),
        ("B", "Use normal Slide Show mode"),
        ("C", "Set up Slide Show as Browsed at a kiosk (full screen)"),
        ("D", "Enable Presenter View")
    ],
    "C",
    "“Kiosk mode” disables manual slide navigation and forces slides to advance only as designed, providing the strictest control.",
    "Strict slide show lock / No skipping = Browsed at a kiosk (full screen).",
    {
        "A": "Hyperlinks allow users to jump around to arbitrary slides, defeating the strict sequential restriction.",
        "B": "Normal Slide Show mode permits the user to click, press arrow keys, or use spacebar to advance or skip slides freely.",
        "C": "Correct! 'Browsed at a kiosk (full screen)' disables manual mouse clicks and keyboard arrows, forcing slides to advance only according to preset timings or designed triggers.",
        "D": "Presenter View provides speaker notes, timers, and slide thumbnail previews for the presenter, not restricted kiosk playback."
    }
)

# =========================================================================
# PAGE 9
# =========================================================================
add_q(
    25, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "Email Transmission Protocols", "Easy",
    "If a company wants to ensure secure and reliable email transmission for its cloud-based email service, which protocol should they implement?",
    [("A", "HTTP"), ("B", "FTP"), ("C", "SMTP"), ("D", "POP3")],
    "C",
    "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending emails reliably between mail servers.",
    "Sending / Transmitting email = SMTP (Port 25/587) | Receiving email = POP3 / IMAP.",
    {
        "A": "HTTP is designed for hypermedia document delivery on the World Wide Web, not standardized mail transfer.",
        "B": "FTP transfers raw files between computers and has no awareness of email routing headers or envelopes.",
        "C": "Correct! Simple Mail Transfer Protocol (SMTP), commonly secured via TLS/STARTTLS, is the industry standard for sending and transmitting emails between servers.",
        "D": "POP3 is a mail retrieval protocol used by email clients to download messages from a server mailbox, not for sending transmission."
    }
)

add_q(
    26, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "MS Office & Excel Tools", "Word Document Templates", "Easy",
    "To create a document template for repeated use, which file format should you save the document in?",
    [("A", ".docx"), ("B", ".pdf"), ("C", ".dotx"), ("D", ".txt")],
    "C",
    "The .dotx format is specifically designed for Word document templates intended for repeated use.",
    "Word Template format = .dotx (Document Template XML).",
    {
        "A": ".docx is the standard editable Microsoft Word document format, which overwrites the original file when edited and saved.",
        "B": ".pdf is a fixed-layout portable document format intended for read-only viewing and printing.",
        "C": "Correct! The .dotx extension denotes an Office Open XML Word Template; opening it spawns a new unsaved document copy to preserve the original master template.",
        "D": ".txt is a plain ASCII/Unicode text file without any formatting, styles, headers, or template capabilities."
    }
)

# =========================================================================
# PAGE 10
# =========================================================================
add_q(
    27, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Containerization & Microservices", "Kernel Resource Isolation", "Hard",
    "An application relies on multiple hardware peripherals and requires strict isolation from other running containers to maintain data integrity and operational security. The development team uses a kernel-level configuration to allocate specific hardware resources to each container and restrict access to non-allocated devices. What is the most critical factor in maintaining operational security and preventing resource contention among containers?",
    [
        ("A", "Ensuring that the host OS scheduler allocates CPU cycles equally to all containers"),
        ("B", "Configuring the kernel to enforce strict resource isolation and limit peripheral access to only allocated devices"),
        ("C", "Allowing virtualization software to dynamically allocate additional memory as required"),
        ("D", "Allowing containers to share network interfaces with individual access controls")
    ],
    "B",
    "Strict kernel-level resource isolation prevents unauthorized hardware access and avoids resource contention between containers.",
    "Container peripheral security = Kernel-level cgroups and device namespace isolation.",
    {
        "A": "Equal CPU cycle allocation handles thread fairness, but does nothing to isolate or protect hardware device access.",
        "B": "Correct! Configuring kernel namespaces, cgroups, and device allow-lists ensures containers cannot access unauthorized peripherals, maintaining operational security and preventing contention.",
        "C": "Dynamic memory allocation helps buffer memory shortages but does not enforce peripheral hardware device boundaries.",
        "D": "Shared network interfaces focus on communication routing, but do not solve peripheral hardware access contention."
    }
)

add_q(
    28, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Storage Bus Controllers", "Medium",
    "Data is transferred between the CPU and a peripheral device through a shared bus controlled by device controllers to improve data transfer speed and reduce latency. The system uses controllers with dedicated high-speed buffers. Which of the following device controllers is most suitable for this purpose?",
    [
        ("A", "Wireless Controller"),
        ("B", "USB Controller"),
        ("C", "SATA Controller"),
        ("D", "Ethernet Controller")
    ],
    "C",
    "SATA controllers provide high-speed buffered data transfer between storage devices and the CPU, minimizing latency and improving throughput.",
    "Storage device controller with dedicated high-speed buffers = SATA Controller.",
    {
        "A": "Wireless controllers manage 802.11 RF radio transceivers, not internal CPU-to-storage high-speed buses.",
        "B": "USB controllers manage external serial plug-and-play peripherals, but suffer higher protocol overhead than direct storage controllers.",
        "C": "Correct! SATA (Serial ATA) controllers connect high-speed storage devices to the motherboard with onboard FIFO buffers, reducing latency and maximizing data throughput.",
        "D": "Ethernet controllers handle packet framing for local area network communication, not internal peripheral disk storage."
    }
)

# =========================================================================
# PAGE 11
# =========================================================================
add_q(
    29, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Network Security & Attacks", "Routing Table Poisoning", "Medium",
    "Hackers attempt to intercept and manipulate data packets traveling across a network by inserting malicious code or routing information, allowing them to redirect traffic through their own system. This enables them to eavesdrop or alter data without detection. What type of attack is this called?",
    [
        ("A", "Packet Sniffing"),
        ("B", "IP Spoofing"),
        ("C", "Routing Table Poisoning"),
        ("D", "DNS Spoofing")
    ],
    "C",
    "Routing table poisoning redirects network traffic through the attacker's system, enabling interception or modification of data packets.",
    "Corrupting route entries to divert traffic = Routing Table Poisoning.",
    {
        "A": "Packet sniffing passively inspects packets traveling on an unswitched network segment without altering routing paths.",
        "B": "IP spoofing creates IP packets with forged source addresses to impersonate another system.",
        "C": "Correct! Routing table poisoning (or route poisoning) injects fraudulent route advertisements into router tables, maliciously diverting traffic through the hacker's systems.",
        "D": "DNS spoofing (cache poisoning) substitutes fraudulent IP addresses for domain names in DNS resolvers."
    }
)

add_q(
    30, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "OS Security Post-Breach", "Easy",
    "You are employed by a company that has recently suffered a security breach. As the IT manager, you are responsible for enhancing the security of the computer's operating system. Which property of an operating system should you prioritize to achieve this goal?",
    [
        ("A", "Access Control"),
        ("B", "User Interface"),
        ("C", "Multitasking"),
        ("D", "Virtual Memory")
    ],
    "A",
    "Access control manages permissions and restricts unauthorized access, making it critical for operating system security.",
    "Prioritize OS security post-breach = Access Control (Least Privilege & ACLs).",
    {
        "A": "Correct! Access control enforces user authentication, file permission masks, and principle of least privilege, preventing unauthorized intrusion and lateral movement.",
        "B": "User interface design affects usability and visual aesthetics, not cryptographic or kernel-level security.",
        "C": "Multitasking manages concurrent execution of processes, which does not prevent unauthorized file access.",
        "D": "Virtual memory provides memory paging and swap space, but does not enforce authentication or user permissions."
    }
)

# =========================================================================
# PAGE 12
# =========================================================================
add_q(
    31, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "MS Office & Excel Tools", "PowerPoint Morph Transition", "Easy",
    "Jane wants to create a slide that illustrates a progression over time using icons, text, and blanks. She wants it to appear visually dynamic without manually animating each step. Which MS PowerPoint feature can help speed up this process?",
    [
        ("A", "Use Slide Zoom feature to create dynamic progression"),
        ("B", "Use a SmartArt process layout"),
        ("C", "Apply the Morph transition across duplicated slides for a smooth effect"),
        ("D", "Create a custom layout with background images and animation triggers")
    ],
    "C",
    "The Morph transition automatically animates objects across slides, creating a smooth visual progression without manual animation.",
    "Smooth dynamic animation across slides without manual setup = Morph Transition.",
    {
        "A": "Slide Zoom creates an interactive canvas to jump directly into specific slides, but does not smoothly interpolate individual icons and text positions.",
        "B": "SmartArt provides static pre-formatted diagram blocks; it does not generate automatic smooth motion transitions.",
        "C": "Correct! The Morph transition analyzes duplicated slides and automatically animates matching shapes, text, and icons from their starting positions to their ending positions.",
        "D": "Custom layouts with individual triggers require intensive manual timing setup, contradicting the goal of speeding up the process."
    }
)

add_q(
    32, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Hardware Virtualization", "Easy",
    "A cloud infrastructure requires running multiple isolated environments on a single physical server. Which technology is primarily used to achieve this?",
    [
        ("A", "Containers"),
        ("B", "Virtual Machines (VMs)"),
        ("C", "Serverless computing"),
        ("D", "Dual-boot disk partitioning")
    ],
    "B",
    "Virtual machines provide full isolation for multiple environments on a single physical server, making them ideal for securely running separate workloads.",
    "Multiple isolated OS environments on single physical server = Virtual Machines (VMs).",
    {
        "A": "Containers share the host operating system kernel, meaning isolation is at process level rather than completely independent hardware/OS isolation.",
        "B": "Correct! Virtual Machines (VMs) run separate guest operating systems on virtualized hardware managed by a hypervisor, providing complete isolation on a single physical server.",
        "C": "Serverless computing executes ephemeral function code on demand without providing persistent isolated server environments.",
        "D": "Dual-boot partitioning allows only one operating system to run at a time, not multiple simultaneous isolated environments."
    }
)

# =========================================================================
# PAGE 13
# =========================================================================
add_q(
    33, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "Context Switching Program Counter", "Medium",
    "During a context switch, the operating system saves the state of the currently running process and loads the state of the next process. Which CPU register, responsible for holding the address of the next instruction to be fetched, must be saved and restored during this operation?",
    [
        ("A", "Stack Pointer"),
        ("B", "General Purpose Register"),
        ("C", "Program Counter"),
        ("D", "Instruction Register")
    ],
    "C",
    "The Program Counter stores the address of the next instruction, so saving and restoring it ensures the process resumes correctly after a context switch.",
    "Address of next instruction to be fetched = Program Counter (PC).",
    {
        "A": "The Stack Pointer points to the top of the call stack (local variables and return addresses), not the address of the next instruction to fetch.",
        "B": "General Purpose Registers hold temporary values and calculation operands during arithmetic operations.",
        "C": "Correct! The Program Counter (PC) stores the memory address of the next machine instruction to be fetched; saving it in the Process Control Block ensures seamless resumption.",
        "D": "The Instruction Register holds the binary instruction currently undergoing decoding, not the pointer to the next instruction."
    }
)

add_q(
    34, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "VPN & Remote Connectivity", "Site-to-Site VPN", "Easy",
    "Two geographically separate offices, Office A and Office B, need to allow all users in Office A to securely access resources in Office B and vice versa, as if they were on the same local network. Which VPN topology is most appropriate for this scenario?",
    [
        ("A", "Remote Access VPN"),
        ("B", "Site-to-Site VPN"),
        ("C", "Client-to-Server VPN"),
        ("D", "Peer to Peer VPN")
    ],
    "B",
    "A Site-to-Site VPN connects entire networks across locations, allowing users in both offices to securely access each other's resources as if on the same LAN.",
    "Connecting two physical office branch networks = Site-to-Site VPN.",
    {
        "A": "Remote Access VPN connects individual home teleworkers or mobile laptops to a central office, not two whole enterprise facilities.",
        "B": "Correct! A Site-to-Site VPN links the entire local area networks of Office A and Office B over an encrypted gateway-to-gateway tunnel.",
        "C": "Client-to-Server VPN connects individual software clients to a single server application.",
        "D": "Peer-to-Peer VPN connects individual peer nodes directly, without creating a permanent transparent LAN-to-LAN subnet route."
    }
)

# =========================================================================
# PAGE 14
# =========================================================================
add_q(
    35, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "RESTful Resource Endpoints", "Easy",
    "A development team is designing a new RESTful API to manage a product catalog for their ecommerce platform. They need to create an endpoint that retrieves details of a specific product using its unique product ID. Which HTTP method and URL structure best align with RESTful principles for this operation?",
    [
        ("A", "POST /products/{productid}"),
        ("B", "GET /products/{productid}"),
        ("C", "PUT /products/{productid}"),
        ("D", "DELETE /products/{productid}")
    ],
    "B",
    "The GET method is used in RESTful APIs to retrieve data, and including the product ID in the URL specifies the resource to fetch.",
    "Retrieve single resource by ID = GET /collection/{id}.",
    {
        "A": "POST is used to create a new resource or execute processing actions, not to retrieve details of an existing product.",
        "B": "Correct! RESTful conventions dictate using HTTP GET with the resource identifier directly in the URL path: `GET /products/{productid}`.",
        "C": "PUT updates or completely replaces the representation of the product resource specified by the ID.",
        "D": "DELETE removes the product resource associated with `{productid}` from the database."
    }
)

add_q(
    36, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Containerization & Microservices", "Container Memory Troubleshooting", "Medium",
    "A containerized application is consuming massive memory, causing performance issues. What is the recommended approach to address this problem effectively?",
    [
        ("A", "Increase the memory limit for the container"),
        ("B", "Use a larger base image for the container"),
        ("C", "Reduce the number of replicas of the container"),
        ("D", "Analyze the application code for memory leaks")
    ],
    "D",
    "Memory issues are best resolved by identifying and fixing leaks in the application code rather than just increasing container resources.",
    "Fix runaway container RAM consumption = Profile and fix application code memory leaks.",
    {
        "A": "Increasing container memory limits merely postpones the inevitable Out-Of-Memory (OOM) crash if the application code leaks memory continuously.",
        "B": "A larger base image adds unnecessary operating system packages and attack surface, increasing baseline RAM footprint.",
        "C": "Reducing container replicas decreases throughput capacity and degrades user responsiveness without fixing the root cause.",
        "D": "Correct! Profiling and analyzing application code to eliminate memory leaks and unreleased pointers is the only permanent, effective resolution."
    }
)

# =========================================================================
# PAGE 15
# =========================================================================
add_q(
    37, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Computer Networks & OSI", "OSI Physical Layer", "Easy",
    "An internet connection is established by a user, connecting devices like a computer, smartphone, and smart TV to a router. Which OSI model layer is responsible for transmitting Ethernet, cable, and Wi-Fi signals between these devices?",
    [
        ("A", "Physical Layer"),
        ("B", "Network Layer"),
        ("C", "Data Link Layer"),
        ("D", "Application Layer")
    ],
    "A",
    "The Physical Layer handles the transmission of raw electrical, optical, or wireless signals over media like Ethernet cables and Wi-Fi.",
    "Cables, radio waves, electrical voltage & bits = Layer 1 (Physical Layer).",
    {
        "A": "Correct! Layer 1 (Physical Layer) manages raw physical transmission media—electrical pulses, radio frequencies (Wi-Fi), fiber-optic pulses, and pin connectors.",
        "B": "Network Layer (Layer 3) manages logical IP addressing and routing of packets across networks.",
        "C": "Data Link Layer (Layer 2) handles MAC framing, error checking, and local switch forwarding.",
        "D": "Application Layer (Layer 7) provides end-user protocols like HTTP, DNS, and SMTP."
    }
)

add_q(
    38, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "MS Office & Excel Tools", "Excel Dynamic FILTER Formula", "Hard",
    "Your machine may need to request a list of employees from the South region for an internal campaign. Which Excel formula allows you to generate this list dynamically from the dataset below?\n\nSample Dataset:\nEmployee Name | Department | Role | Salary | Bonus | Join Date | Region\nE001 Alice Sales Manager 70000 5000 01-03-2018 South\nE002 Bob HR Executive 50000 3000 12-06-2019 North\nE003 Carol IT Developer 60000 4000 15-08-2020 South\nE004 David Marketing Analyst 55000 3500 22-01-2021 East\nE005 Eve Sales Executive 52000 2500 30-11-2019 South",
    [
        ("A", "=FILTER(A2:H6, H2:H6=\"South\")"),
        ("B", "=VLOOKUP(\"South\", H2:H6, 2, FALSE)"),
        ("C", "=INDEX(A2:A6, MATCH(\"South\", H2:H6, 0))"),
        ("D", "=IF(H2:H6=\"South\", A2:A6, \"\")")
    ],
    "A",
    "The FILTER function dynamically returns all rows where the Region column equals \"South,\" generating the required list automatically.",
    "Dynamic multiple-row extraction = =FILTER(array, condition).",
    {
        "A": "Correct! `=FILTER(A2:H6, H2:H6=\"South\")` is modern dynamic array formula that extracts every record where Region equals 'South' into a spill range.",
        "B": "VLOOKUP can only return the first matching single scalar value and cannot spill multiple rows or look to the left of the lookup key.",
        "C": "INDEX/MATCH returns only the first single matching value (Alice), failing to generate the complete list of all South employees.",
        "D": "A standard IF formula returns blank rows and requires manual cell-by-cell copying rather than a clean dynamic array spill."
    }
)

# =========================================================================
# PAGE 16
# =========================================================================
add_q(
    39, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "MS Office & Excel Tools", "Excel PivotTable Calculated Fields", "Medium",
    "In a PivotTable, which feature allows you to create custom calculations and summaries based on the existing data?",
    [
        ("A", "Calculated Fields"),
        ("B", "Calculated Items"),
        ("C", "Slicers"),
        ("D", "Grouping")
    ],
    "A",
    "Calculated Fields let you define custom formulas in a PivotTable to perform calculations on the summarized data.",
    "Custom summary formulas across existing pivot fields = Calculated Fields.",
    {
        "A": "Correct! Calculated Fields let you create a new virtual field in a PivotTable by performing mathematical formulas on existing numeric columns.",
        "B": "Calculated Items perform calculations using the contents of one or more specific items (rows) within a single field, rather than across entire columns.",
        "C": "Slicers are visual graphical filtering buttons used to quickly isolate subsets of pivot data.",
        "D": "Grouping consolidates individual items (such as dates into months or numbers into ranges) into collective categories."
    }
)

add_q(
    40, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Computer Networks & OSI", "OSI Network Layer", "Easy",
    "Data packets are transmitted between routers and switches to ensure proper delivery across different network segments. Which OSI model layer is responsible for establishing logical paths and routing data packets between different network segments?",
    [
        ("A", "Data Link Layer"),
        ("B", "Network Layer"),
        ("C", "Transport Layer"),
        ("D", "Session Layer")
    ],
    "B",
    "The Network Layer determines logical addressing and routing to deliver packets across multiple network segments.",
    "Logical addressing & routing across networks = Layer 3 (Network Layer).",
    {
        "A": "Data Link Layer (Layer 2) manages hop-to-hop framing across local physical segments using MAC addresses.",
        "B": "Correct! Layer 3 (Network Layer) is responsible for end-to-end logical IP addressing, packet forwarding, and path determination (routing) across distinct network segments.",
        "C": "Transport Layer (Layer 4) handles end-to-end host communication, port numbers, reliability, and flow control.",
        "D": "Session Layer (Layer 5) establishes, manages, and terminates dialogue sessions between applications."
    }
)

add_q(
    41, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Multi-Factor Authentication", "Easy",
    "In a cloud computing environment, which security measure helps protect user accounts by requiring two different types of identification before granting access?",
    [
        ("A", "Firewalls"),
        ("B", "Encryption"),
        ("C", "Multi-Factor Authentication (MFA)"),
        ("D", "Antivirus Software")
    ],
    "C",
    "MFA enhances account security by requiring multiple forms of verification, such as a password and a one-time code.",
    "Two or more different types of verification = Multi-Factor Authentication (MFA).",
    {
        "A": "Firewalls filter incoming and outgoing network traffic based on port and IP rules, not user credentials.",
        "B": "Encryption encodes data to prevent unauthorized interception, but does not authenticate user logins.",
        "C": "Correct! Multi-Factor Authentication (MFA) requires users to provide two or more distinct verification factors (e.g., something you know like a password, and something you have like a mobile OTP).",
        "D": "Antivirus software scans files and processes for signatures of known malicious code."
    }
)

# =========================================================================
# PAGE 17
# =========================================================================
add_q(
    42, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Computer Networks & OSI", "Ring Topology Vulnerability", "Easy",
    "A small business uses ring network topology. If a single workstation goes down, what impact will it have on the network?",
    [
        ("A", "Minimal impact; network reroutes traffic"),
        ("B", "Network becomes isolated"),
        ("C", "Network slows down"),
        ("D", "Network breaks completely")
    ],
    "D",
    "In a ring topology, each device is connected in a closed loop, so the failure of one workstation disrupts the entire network.",
    "Single node down in standard unidirectional Ring = Entire network breaks down.",
    {
        "A": "Traffic cannot automatically reroute in a standard single-ring network because it lacks alternative pathing.",
        "B": "The failure does not simply isolate one workstation—it breaks the continuous ring circuit for all nodes.",
        "C": "The network does not simply experience latency or slow down; packet circulation stops entirely.",
        "D": "Correct! In a single ring topology, tokens and packets pass sequentially through every connected station; if any single station fails, the loop is broken and communication halts."
    }
)

add_q(
    43, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Cryptography & Wi-Fi Security", "Encryption Definition", "Easy",
    "What is the process of converting data into a secure format to prevent unauthorized access?",
    [
        ("A", "Encryption"),
        ("B", "Authentication"),
        ("C", "Authorization"),
        ("D", "Compression")
    ],
    "A",
    "Encryption transforms data into a coded format to ensure that only authorized parties can access it.",
    "Converting plaintext to ciphertext to prevent unauthorized access = Encryption.",
    {
        "A": "Correct! Encryption converts readable plaintext into encoded ciphertext using cryptographic mathematical keys.",
        "B": "Authentication verifies the identity of a claiming entity (e.g., verifying username and password).",
        "C": "Authorization determines the permissions and access rights granted to an already authenticated identity.",
        "D": "Compression reduces data file size by eliminating redundancy, without providing cryptographic security."
    }
)

add_q(
    44, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "HTTP POST Characteristics", "Easy",
    "A mobile application sends data to a server using an API. The developer decides to use the POST method for this operation. What is the primary characteristic of the POST method in this context?",
    [
        ("A", "It retrieves data from the server"),
        ("B", "It updates existing data on the server"),
        ("C", "It submits data to be processed by the server"),
        ("D", "It deletes data from the server")
    ],
    "C",
    "The POST method is used to send data to the server for processing, often resulting in the creation of a new resource.",
    "HTTP POST = Submits data to be processed by the server.",
    {
        "A": "Retrieving data from the server is the primary characteristic of HTTP GET.",
        "B": "Replacing or updating existing data on the server is typically performed via PUT or PATCH.",
        "C": "Correct! HTTP POST sends payload data enclosed in the request body to the specified URI to be processed by the server handler.",
        "D": "Deleting data from the server is performed using the HTTP DELETE verb."
    }
)

# =========================================================================
# PAGE 18
# =========================================================================
add_q(
    45, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Hybrid Cloud Deployment", "Easy",
    "A company needs to keep sensitive data on-premises while leveraging cloud resources for other operations. Which cloud deployment model should be used?",
    [
        ("A", "Public Cloud"),
        ("B", "Private Cloud"),
        ("C", "Hybrid Cloud"),
        ("D", "Community Cloud")
    ],
    "C",
    "A Hybrid Cloud combines on-premises infrastructure with cloud services, allowing sensitive data to remain local while using cloud resources for scalability.",
    "Sensitive data on-premise + Scalable workloads in cloud = Hybrid Cloud.",
    {
        "A": "Public cloud hosts all resources on shared external cloud provider infrastructure.",
        "B": "Private cloud hosts all infrastructure strictly within dedicated private boundaries without utilizing public cloud elasticity.",
        "C": "Correct! A Hybrid Cloud architecture connects on-premises private data centers with public cloud infrastructure, offering localized compliance alongside cloud scale.",
        "D": "Community cloud is shared across specific external peer organizations, not an integration between on-premise and public cloud."
    }
)

add_q(
    46, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "API Versioning Strategy", "Medium",
    "A public-facing API has undergone significant breaking changes, including modifications to endpoints and data structures, making it incompatible with older client applications. The development team wants to deploy these changes without breaking existing integrations. Which API versioning strategy is generally recommended in this scenario?",
    [
        ("A", "Make changes directly to the existing endpoints and update the documentation"),
        ("B", "Use query parameters to specify the version (e.g., /api/resource?version=2)"),
        ("C", "Include the version number in the URL path (e.g., /api/v2/resource)"),
        ("D", "Use custom HTTP headers to specify the API version")
    ],
    "C",
    "URL-based versioning clearly separates breaking changes while allowing older clients to continue using the previous API version.",
    "Best practice for breaking API changes = URL Path Versioning (/api/v2/resource).",
    {
        "A": "Directly modifying existing production endpoints breaks live client applications and causes catastrophic integration failures.",
        "B": "Query parameters are less explicit, harder to cache in CDNs, and can be easily omitted by clients leading to unpredictable defaults.",
        "C": "Correct! URI path versioning (`/api/v2/resource`) provides explicit, transparent routing, allowing legacy clients to call `/v1/` and new clients to call `/v2/` simultaneously.",
        "D": "Header versioning (e.g., `Accept-Version`) makes testing in browsers cumbersome and complicates edge caching."
    }
)

# =========================================================================
# PAGE 19
# =========================================================================
add_q(
    47, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Computer Networks & OSI", "Dynamic IP Allocation Protocol", "Easy",
    "A network administrator wants to assign IP addresses dynamically to devices in a network. Which protocol is used for this purpose?",
    [
        ("A", "DNS"),
        ("B", "DHCP"),
        ("C", "ARP"),
        ("D", "ICMP")
    ],
    "B",
    "DHCP automatically assigns IP addresses and network configuration details to devices on a network.",
    "Automatic dynamic IP assignment = DHCP (Dynamic Host Configuration Protocol).",
    {
        "A": "DNS (Domain Name System) translates human-readable domain names (example.com) into IP addresses.",
        "B": "Correct! DHCP (Dynamic Host Configuration Protocol) operates using DORA (Discover, Offer, Request, Acknowledge) to assign dynamic IP leases automatically.",
        "C": "ARP (Address Resolution Protocol) resolves known IP addresses to local physical hardware MAC addresses.",
        "D": "ICMP (Internet Control Message Protocol) delivers error and diagnostic messages, such as ping echo requests."
    }
)

add_q(
    48, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Cloud Cost Management", "Medium",
    "A startup is concerned about unpredictable expenses due to variable cloud usage. Which cloud feature should they implement to manage and predict costs more accurately?",
    [
        ("A", "Auto-scaling"),
        ("B", "Reserved instances"),
        ("C", "Load balancing"),
        ("D", "Content Delivery Network (CDN)")
    ],
    "B",
    "Reserved instances provide predictable, discounted pricing by committing to usage over a fixed term, helping control costs.",
    "Predictable costs & major cloud discounts = Reserved Instances (1 or 3 year commitment).",
    {
        "A": "Auto-scaling dynamically spins up instances, which can lead to variable and unpredictable monthly bills if traffic surges.",
        "B": "Correct! Reserved instances offer discounts up to 72% compared to on-demand pricing in exchange for committing to a 1- or 3-year term, providing fixed, predictable costs.",
        "C": "Load balancing distributes incoming traffic across servers, but does not alter pricing models or stabilize monthly costs.",
        "D": "Content Delivery Networks cache static assets at edge locations, improving speed but not addressing core cloud compute cost predictability."
    }
)

# =========================================================================
# PAGE 20
# =========================================================================
add_q(
    49, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Network Security & Attacks", "Intermediary Proxy Firewalls", "Medium",
    "A company needs a security solution where the firewall acts as an intermediary, inspecting all incoming and outgoing traffic between the user's device and the internet. Which type of firewall is most suitable for this requirement?",
    [
        ("A", "Packet Filtering Firewall"),
        ("B", "Proxy Firewall"),
        ("C", "Circuit-Level Gateway"),
        ("D", "Application Firewall")
    ],
    "B",
    "A proxy firewall sits between users and the internet, inspecting and filtering all traffic by acting as an intermediary.",
    "Firewall acting as intermediary & masking client IP = Proxy Firewall (Application-level).",
    {
        "A": "Packet filtering firewalls inspect only packet headers (IP addresses and ports) at the network layer without establishing intermediary proxy sessions.",
        "B": "Correct! A Proxy Firewall acts as an intermediate server between internal clients and external servers, terminating connections, inspecting payloads, and masking client IP addresses.",
        "C": "Circuit-level gateways verify TCP handshakes without inspecting application-layer payloads.",
        "D": "General application firewalls inspect protocols, but the specific architecture acting as a true client-server proxy intermediary is a Proxy Firewall."
    }
)

add_q(
    50, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "VPN & Remote Connectivity", "SSL VPN Architecture", "Medium",
    "You are a network administrator for a company with several remote offices. The company wants to implement a VPN to provide secure remote access to its internal network. Which VPN type is the best choice for this scenario?",
    [
        ("A", "PPTP"),
        ("B", "L2TP"),
        ("C", "SSL VPN"),
        ("D", "IPSec VPN")
    ],
    "C",
    "SSL VPNs provide secure remote access over the internet using a web browser and are ideal for remote users across multiple locations.",
    "Clientless remote access via standard web browser = SSL VPN.",
    {
        "A": "PPTP (Point-to-Point Tunneling Protocol) uses obsolete MS-CHAPv2 and is considered cryptographically insecure.",
        "B": "L2TP provides tunneling but lacks native encryption, requiring IPSec and complex client configuration.",
        "C": "Correct! SSL VPNs utilize standard HTTPS encryption accessible through standard web browsers, eliminating the need to install and configure client-side software.",
        "D": "IPSec VPN operates at the network layer and requires specialized client software installation and router configuration."
    }
)

# =========================================================================
# PAGE 21
# =========================================================================
add_q(
    51, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "DevOps & CI/CD", "Zero Downtime Deployments", "Medium",
    "A team wants to improve deployment speed and reduce downtime when updating their containerized application. Which practice should they adopt?",
    [
        ("A", "Use rolling updates with health checks"),
        ("B", "Increase the number of replicas"),
        ("C", "Disable the health checks"),
        ("D", "Use a larger base image")
    ],
    "A",
    "Rolling updates with health checks update containers gradually, ensuring availability and minimizing downtime during deployments.",
    "Zero downtime container deployment = Rolling Updates with Health Checks.",
    {
        "A": "Correct! Rolling updates gradually replace old container pods with new ones while automated health checks verify readiness, ensuring zero downtime and continuous availability.",
        "B": "Increasing replicas increases capacity, but updating them all at once without a rolling strategy would still cause total service outages.",
        "C": "Disabling health checks causes traffic to be routed to unready or crashing containers, creating downtime for end users.",
        "D": "Using larger base images drastically increases image download and startup times, slowing down deployments."
    }
)

add_q(
    52, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "IaaS Cloud Service Model", "Easy",
    "Which cloud service model provides users with hardware resources such as virtual machines and storage?",
    [
        ("A", "IaaS"),
        ("B", "PaaS"),
        ("C", "SaaS"),
        ("D", "DaaS")
    ],
    "A",
    "Infrastructure as a Service (IaaS) offers virtualized hardware resources like servers, storage, and networking.",
    "Hardware, VMs, Raw Disks & Networking = IaaS (Infrastructure as a Service).",
    {
        "A": "Correct! IaaS (Infrastructure as a Service) delivers fundamental computing infrastructure—virtual machines, raw block storage, networks, and operating system freedom.",
        "B": "PaaS (Platform as a Service) provides managed runtimes, databases, and environments for deploying application code without managing VMs.",
        "C": "SaaS (Software as a Service) delivers turnkey end-user software applications hosted in the cloud.",
        "D": "DaaS (Desktop as a Service) streams virtual desktop user interfaces to remote thin clients."
    }
)

add_q(
    53, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Outsourcing Security Boundaries", "Hard",
    "Your organization has decided to outsource antivirus management to a third party. Which of the following tasks cannot be assigned to the third party?",
    [
        ("A", "Monitoring of servers on your organization's premises"),
        ("B", "Preparing the internal antivirus policy for the systems"),
        ("C", "Rectification of virus infections on systems"),
        ("D", "Updating the antivirus definition files on user systems")
    ],
    "B",
    "Defining internal security policies is a strategic responsibility of the organization and should not be outsourced to third parties.",
    "Internal strategic governance & policies = Must stay internal; NEVER outsourced.",
    {
        "A": "Monitoring server alerts and health telemetry is an operational task routinely handled by outsourced Security Operations Centers (SOCs).",
        "B": "Correct! Defining organizational security policies, risk thresholds, and compliance frameworks is an internal governance responsibility that cannot be delegated to an external vendor.",
        "C": "Remediating and cleaning virus infections on infected workstations can be executed by outsourced IT helpdesk technicians.",
        "D": "Distributing and deploying daily antivirus signature definition updates can be fully automated or delegated to managed service providers."
    }
)

# =========================================================================
# PAGE 22
# =========================================================================
add_q(
    54, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "DevOps & CI/CD", "Continuous Deployment Releases", "Easy",
    "Google updates its website weekly by adding new features and fixing bugs using an Agile development approach. After each update, the new version is automatically deployed to the live environment. Which DevOps practice is being implemented to ensure rapid and frequent releases?",
    [
        ("A", "The practice involves automating the process of releasing software to production frequently and reliably"),
        ("B", "Continuous integration focuses on merging code changes regularly to prevent integration issues"),
        ("C", "Continuous testing ensures that automated tests are run continually to validate code quality"),
        ("D", "Monitoring involves tracking application performance and user activity after deployment")
    ],
    "A",
    "Continuous Deployment automates frequent and reliable releases to production without manual intervention.",
    "Automatic live production release = Continuous Deployment.",
    {
        "A": "Correct! Continuous Deployment automates the entire software release pipeline, pushing passed builds directly into live production without human gating.",
        "B": "Continuous Integration automatically tests and merges code into the repository, but does not deploy it to production.",
        "C": "Continuous Testing automatically runs unit and integration tests to validate code quality without performing deployment.",
        "D": "Monitoring collects performance metrics and server health telemetry post-deployment."
    }
)

add_q(
    55, 4, "Tier 4 — Computer Networks, VPNs & Network Security", "Network Security & Attacks", "Network Segmentation Purpose", "Easy",
    "What is the main purpose of network segmentation in security?",
    [
        ("A", "Increasing bandwidth"),
        ("B", "Improving signal strength"),
        ("C", "Limiting the spread of attacks"),
        ("D", "Reducing latency")
    ],
    "C",
    "Network segmentation isolates network segments to prevent attackers from easily moving across the entire network.",
    "Network segmentation = Contain breaches & prevent lateral movement.",
    {
        "A": "Network segmentation partitions subnets for security boundaries, which does not increase total physical bandwidth capacity.",
        "B": "Signal strength depends on physical cabling quality and radio transmitter gain, not logical subnet segmentation.",
        "C": "Correct! Network segmentation divides a network into smaller, isolated zones, preventing an attacker who breaches one zone from moving laterally across the entire enterprise.",
        "D": "Routing between segmented networks may introduce firewall inspection overhead rather than reducing packet transit latency."
    }
)

# =========================================================================
# PAGE 23
# =========================================================================
add_q(
    56, 2, "Tier 2 — Web APIs, HTTP Protocols & REST Principles", "HTTP & RESTful APIs", "RESTful URL Conventions", "Easy",
    "A development team is designing a new RESTful API to manage a product catalog. They need to create an endpoint that retrieves detailed information about a specific product using its unique product ID. Which HTTP method and URL structure best align with RESTful principles?",
    [
        ("A", "POST /products/{id}/details"),
        ("B", "GET /product_details?id={id}"),
        ("C", "PUT /products/{id}/fetch"),
        ("D", "GET /products/{id}")
    ],
    "D",
    "RESTful design uses the GET method to retrieve resources and identifies a specific resource through a clean, resource-based URL.",
    "Standard REST resource identifier: GET /resource/{id}.",
    {
        "A": "POST should not be used for idempotent data retrieval, and REST URLs should avoid verbs like '/details'.",
        "B": "Query parameters like `?id={id}` violate RESTful hierarchical resource naming conventions.",
        "C": "PUT is designated for updating resources, and '/fetch' is an unnecessary verb in a resource-oriented URI.",
        "D": "Correct! Standard RESTful architectural principles dictate using HTTP GET with the resource identifier embedded directly in the noun path: `GET /products/{id}`."
    }
)

add_q(
    57, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Data Virtualization Layer", "Hard",
    "Azure is migrating its legacy data sources to new cloud-based platforms while maintaining operations without downtime. During migration, data from both the old and new systems must be accessed simultaneously for real-time reporting and analytics, with logical integration and no physical data movement. Which architectural layer best handles this requirement while ensuring minimal disruption and secure access?",
    [
        ("A", "Connection layer using direct database access protocols"),
        ("B", "Consumption layer utilizing middleware with abstracted APIs"),
        ("C", "Abstraction layer that logically unifies disparate data sources"),
        ("D", "Data caching layer storing temporary data")
    ],
    "C",
    "An abstraction (data virtualization) layer enables unified, real-time access to multiple data sources without physically moving the data.",
    "Logical integration without physical data movement = Abstraction / Data Virtualization Layer.",
    {
        "A": "Direct database connections force applications to couple tightly with legacy schemas and credentials.",
        "B": "Consumption layer middleware provides client endpoints, but does not perform the underlying real-time federation of disparate database engines.",
        "C": "Correct! A Data Abstraction / Virtualization layer provides a unified logical query interface across disparate data sources without moving underlying physical data.",
        "D": "Data caching stores transient snapshots and does not provide unified real-time logical query translation across legacy and cloud systems."
    }
)

# =========================================================================
# PAGE 24
# =========================================================================
add_q(
    58, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Storage Elasticity & Resilience", "Medium",
    "As part of a data center modernization initiative, the IoT team must address storage challenges by leveraging existing storage devices from multiple vendors and integrating them into a next-generation storage solution. How does resource pooling play a crucial role in achieving elasticity in cloud storage?",
    [
        ("A", "By eliminating the need for server virtualization"),
        ("B", "By minimizing financial and contractual commitments"),
        ("C", "By ensuring a globally scalable and resilient storage solution"),
        ("D", "By optimizing capacity for executing code and running instances")
    ],
    "C",
    "Resource pooling aggregates storage resources from different systems, enabling elastic scaling and high availability across the cloud environment.",
    "Resource pooling in storage = Globally scalable & resilient unified capacity.",
    {
        "A": "Resource pooling works alongside virtualization; it does not eliminate the need for server virtualization.",
        "B": "Financial commitments are contractual matters that do not define the architectural role of resource pooling.",
        "C": "Correct! Aggregating multi-vendor storage drives into a unified resource pool provides resilient fault tolerance, high availability, and elastic global scalability.",
        "D": "Running code and compute instances is a CPU/RAM resource function, not storage resource pooling."
    }
)

add_q(
    59, 3, "Tier 3 — Operating Systems & Computer Architecture", "Operating Systems & Processes", "OS Device Management", "Medium",
    "You are a software developer creating an application for a large corporation. The application is expected to run on various computers with different hardware and operating systems. Which operating system property is most important to ensure compatibility and smooth operation?",
    [
        ("A", "User Interface"),
        ("B", "Security"),
        ("C", "Device Management"),
        ("D", "Resource Allocation")
    ],
    "C",
    "Device management ensures the OS can interface with different hardware components, allowing applications to run smoothly across diverse systems.",
    "OS component interfacing with diverse hardware components = Device Management.",
    {
        "A": "User interface provides visual controls for users, but does not manage underlying hardware driver compatibility.",
        "B": "Security enforces authentication and authorization, but does not provide hardware driver abstraction.",
        "C": "Correct! OS Device Management uses standardized driver interfaces to abstract heterogeneous hardware components, enabling applications to run reliably across diverse hardware.",
        "D": "Resource allocation schedules CPU and RAM capacity, but relies on device management to communicate with physical peripherals."
    }
)

# =========================================================================
# PAGE 25
# =========================================================================
add_q(
    60, 1, "Tier 1 — Cloud Architecture, Storage & Deployment", "Cloud Storage & Architecture", "Shared Responsibility Cloud Security", "Easy",
    "A company migrates its application to a cloud computing environment. How does the concept of “shared responsibility” impact security management in this scenario?",
    [
        ("A", "The cloud provider handles all security measures"),
        ("B", "Security is managed by third-party auditors"),
        ("C", "Both the cloud provider and the customer share security responsibilities"),
        ("D", "The customer is solely responsible for security")
    ],
    "C",
    "In cloud computing, providers secure the infrastructure, while customers are responsible for securing their applications, data, and access.",
    "Shared Responsibility = Provider secures infrastructure | Customer secures data & apps.",
    {
        "A": "The cloud provider does not control customer access rights, database configurations, or application vulnerabilities.",
        "B": "Third-party auditors perform independent compliance assessments, but do not manage day-to-day operational security.",
        "C": "Correct! Under the shared responsibility model, security responsibilities are divided: the cloud provider protects the physical hardware and hypervisors, while the customer secures data, user IAM, and applications.",
        "D": "The customer cannot manage physical data center security or hypervisor patch levels, which belong to the provider."
    }
)

add_q(
    61, 5, "Tier 5 — DevOps, Containers, Office Tools & Cryptography", "Cryptography & Wi-Fi Security", "Cipher Decryption Failure", "Medium",
    "An embedded system encrypts data using a substitution cipher. After deployment, some characters in the encrypted text are not correctly decrypted. What is the most likely cause of this issue?",
    [
        ("A", "The decryption map incorrectly handles negative indices"),
        ("B", "The decryption process incorrectly uses the encryption key, leading to incorrect character mapping"),
        ("C", "The encryption map creates duplicate character mappings"),
        ("D", "The length of the character string causes an incorrect modulo operation")
    ],
    "B",
    "Using an incorrect key during decryption causes mismatched character mappings, resulting in incorrectly decrypted characters.",
    "Substitution cipher decryption error = Incorrect key or corrupted mapping table.",
    {
        "A": "Substitution ciphers use one-to-one character mapping lookup tables or modular offsets, which do not inherently involve negative indices.",
        "B": "Correct! In a substitution cipher, each character is mapped via a specific key or permutation; using an incorrect decryption key produces character substitution mismatches during deciphering.",
        "C": "If the encryption map created duplicate mappings, encryption itself would be degenerate, whereas the scenario specifically identifies post-deployment decryption errors.",
        "D": "Substitution ciphers encrypt character-by-character; the total length of the string does not alter the substitution mapping algorithm."
    }
)

print(f"Total questions generated: {len(q_list)}")
assert len(q_list) == 61, f"Expected 61 questions, got {len(q_list)}"

# Build the complete JS file content
js_content = """// src/data/importantQuestionsSet2.js
// 61 High-Frequency Accenture PYQs (Set 2 - Systems, DevOps, APIs, OS, Networks, Excel & Tools)

export const IMPORTANT_SET2_TIERS = """ + json.dumps(tiers, indent=2) + """;

export const IMPORTANT_SET2_TOPICS = """ + json.dumps(topics, indent=2) + """;

export const importantSet2StudyGuides = """ + json.dumps(study_guides, indent=2) + """;

export const importantQuestionsSet2 = """ + json.dumps(q_list, indent=2) + """;

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
"""

target_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "importantQuestionsSet2.js")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {len(q_list)} questions to {target_path}!")

# scratch/complete_61_dataset.py
import json, sys, os

sys.stdout.reconfigure(encoding='utf-8')

# We'll load the existing raw_questions from scratch/build_full_61_dataset.py
from build_full_61_dataset import raw_questions

# Add questions 25 to 61
more_questions = [
  # -------------------------------------------------------------
  # TIER 3: NETWORK SECURITY & CYBER DEFENSE (Q25 - Q36)
  # -------------------------------------------------------------
  {
    "id": "pyq-25",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Cloud Service Models",
    "subtopic": "NIST Cloud Characteristics",
    "difficulty": "Easy",
    "question": "As per which essential characteristic of cloud computing should hosted applications and services be accessible over the network through standard mechanisms by heterogeneous client platforms?",
    "options": [
      { "id": "A", "text": "On-Demand Self-service" },
      { "id": "B", "text": "Broad Network Access" },
      { "id": "C", "text": "Resource Pooling" },
      { "id": "D", "text": "Rapid Elasticity" }
    ],
    "correctAnswer": "B",
    "explanation": "NIST defines Broad Network Access as capabilities being available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations).",
    "memoryTip": "Accessible anywhere on any device = Broad Network Access | Scaled instantly = Rapid Elasticity.",
    "breakdown": {
      "A": "On-Demand Self-Service enables consumers to provision computing capabilities automatically without requiring human interaction with the service provider.",
      "B": "Correct! Broad Network Access guarantees capabilities can be reached from anywhere via standardized protocols across any client device.",
      "C": "Resource Pooling is the multi-tenant pooling of physical and virtual resources to serve multiple customers dynamically.",
      "D": "Rapid Elasticity allows resources to be elastically provisioned and released to scale outward and inward based on demand."
    }
  },
  {
    "id": "pyq-26",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Architectural Layers",
    "difficulty": "Easy",
    "question": "Which architectural layer is used as the foundational back-end in cloud computing?",
    "options": [
      { "id": "A", "text": "Cloud" },
      { "id": "B", "text": "Soft" },
      { "id": "C", "text": "Client" },
      { "id": "D", "text": "All of the mentioned" }
    ],
    "correctAnswer": "A",
    "explanation": "In classic cloud computing architecture, the system is separated into the front-end (the client side with web browsers or desktop client software) and the back-end (the cloud itself, housing servers, virtualization platforms, databases, and storage arrays).",
    "memoryTip": "Front-end = Client | Back-end = Cloud.",
    "breakdown": {
      "A": "Correct! The 'Cloud' layer encompasses all server infrastructure, virtualization layers, and storage that comprise the backend.",
      "B": "'Soft' is a distractor and not a formal architectural layer in cloud computing standards.",
      "C": "Client is the front-end layer through which users access and view cloud services.",
      "D": "Incorrect, as only the cloud infrastructure serves as the backend architecture."
    }
  },
  {
    "id": "pyq-27",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "OSI Reference Model",
    "subtopic": "OSI Framework Purpose",
    "difficulty": "Easy",
    "question": "What is the primary purpose of the OSI model in computer networking?",
    "options": [
      { "id": "A", "text": "To provide a standardized framework for understanding and architecting network protocols" },
      { "id": "B", "text": "To define the physical color-coding of network cables" },
      { "id": "C", "text": "To configure firewall routing tables" },
      { "id": "D", "text": "To encrypt data transmissions across the network" }
    ],
    "correctAnswer": "A",
    "explanation": "The Open Systems Interconnection (OSI) 7-layer reference model was created by the ISO to provide an open, standardized conceptual framework for understanding how protocols interact and communicate across diverse hardware and software platforms.",
    "memoryTip": "OSI Model = Standardized conceptual framework for open networking interoperability.",
    "breakdown": {
      "A": "Correct! The OSI model provides an international standardized architecture that breaks down complex network communications into 7 distinct functional layers.",
      "B": "Physical cabling color standards are specified by standards bodies like TIA/EIA (e.g., T568A/B), not the OSI conceptual model.",
      "C": "Configuring network hardware is a vendor-specific administrative task, not the conceptual role of the OSI model.",
      "D": "Data encryption is a cryptographic process handled at layers 6 and 7 (or layer 3 via IPsec), not the core purpose of the model itself."
    }
  },
  {
    "id": "pyq-28",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "OSI Reference Model",
    "subtopic": "Layer 3 Routing",
    "difficulty": "Easy",
    "question": "Which OSI Model layer is specifically responsible for routing packets between different networks?",
    "options": [
      { "id": "A", "text": "Physical Layer" },
      { "id": "B", "text": "Data Link Layer" },
      { "id": "C", "text": "Network Layer" },
      { "id": "D", "text": "Transport Layer" }
    ],
    "correctAnswer": "C",
    "explanation": "The Network Layer (Layer 3) handles routing of data packets from source to destination across multiple network hops using logical IP addresses and routing algorithms.",
    "memoryTip": "Routing between networks = Network Layer (Layer 3 - Routers).",
    "breakdown": {
      "A": "Physical Layer (Layer 1) transmits raw unstructured bit streams across physical mediums (cables, radio waves).",
      "B": "Data Link Layer (Layer 2) handles node-to-node frame delivery within the same local network using MAC addresses.",
      "C": "Correct! The Network Layer (Layer 3) determines optimal paths and routes packets across different interconnected subnets.",
      "D": "Transport Layer (Layer 4) handles end-to-end communication, segmentation, flow control, and reliability."
    }
  },
  {
    "id": "pyq-29",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Hardware & Network Devices",
    "subtopic": "Network Definition",
    "difficulty": "Easy",
    "question": "What is a computer network?",
    "options": [
      { "id": "A", "text": "A single standalone computer operating in isolation" },
      { "id": "B", "text": "A group of interconnected computers and devices that can exchange data and share resources" },
      { "id": "C", "text": "A standalone external hard drive device" },
      { "id": "D", "text": "A proprietary word processor software application" }
    ],
    "correctAnswer": "B",
    "explanation": "A computer network is defined as an interconnected collection of autonomous computers and devices linked by telecommunication links to communicate, share hardware/software resources, and transfer electronic data.",
    "memoryTip": "Computer Network = Interconnected devices sharing data and resources.",
    "breakdown": {
      "A": "A single isolated computer has no communication links and does not constitute a network.",
      "B": "Correct! A computer network consists of two or more interconnected computers that exchange information and share resources.",
      "C": "A standalone hard drive is an external storage peripheral, not a computer network.",
      "D": "A word processor is an application software program used for drafting documents."
    }
  },
  {
    "id": "pyq-30",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "IP Addressing & Classes",
    "subtopic": "IPv4 Address Classes",
    "difficulty": "Easy",
    "question": "What IP address class does the address 225.101.0.205 belong to?",
    "options": [
      { "id": "A", "text": "Class A" },
      { "id": "B", "text": "Class B" },
      { "id": "C", "text": "Class C" },
      { "id": "D", "text": "Class D" }
    ],
    "correctAnswer": "D",
    "explanation": "In classful IPv4 addressing: Class A is 1–126; Class B is 128–191; Class C is 192–223; Class D is 224–239 (reserved for multicast); Class E is 240–255 (experimental). 225 falls in the 224–239 range (Class D).",
    "memoryTip": "Class A: 1-126 | Class B: 128-191 | Class C: 192-223 | Class D: 224-239 (Multicast).",
    "breakdown": {
      "A": "Class A covers first octets 1 through 126 (e.g., 10.0.0.1) with default mask 255.0.0.0.",
      "B": "Class B covers first octets 128 through 191 (e.g., 172.16.0.1) with default mask 255.255.0.0.",
      "C": "Class C covers first octets 192 through 223 (e.g., 192.168.1.1) with default mask 255.255.255.0.",
      "D": "Correct! 225 falls into the Class D range (224.0.0.0 to 239.255.255.255), which is reserved for IP multicasting."
    }
  },
  {
    "id": "pyq-31",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Subnetting & Routing",
    "subtopic": "Subnetting Purpose",
    "difficulty": "Easy",
    "question": "What is the primary purpose of subnetting in IP Addressing?",
    "options": [
      { "id": "A", "text": "To create smaller, more manageable network segments and reduce broadcast traffic" },
      { "id": "B", "text": "To encrypt data transmissions over copper cables" },
      { "id": "C", "text": "To establish direct physical point-to-point connections between workstations" },
      { "id": "D", "text": "To artificially increase the electrical speed of cable signals" }
    ],
    "correctAnswer": "A",
    "explanation": "Subnetting divides a single large network into multiple smaller logical subnetworks (subnets). This improves network performance by confining broadcast storms, enhances security by isolating departmental traffic, and conserves address space.",
    "memoryTip": "Subnetting = Divide network -> Smaller broadcast domains + Better security + Conserve IPs.",
    "breakdown": {
      "A": "Correct! Subnetting partitions a large network into smaller segments to minimize broadcast traffic, boost routing speed, and isolate security zones.",
      "B": "Subnetting operates purely at the logical addressing layer and does not encrypt packet payloads.",
      "C": "Establishing physical connections is done using physical media and layer 1/2 switching gear.",
      "D": "Subnetting has no influence on the raw physical propagation speed of electromagnetic signals."
    }
  },
  {
    "id": "pyq-32",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "IP Addressing & Classes",
    "subtopic": "Public vs Private IP",
    "difficulty": "Easy",
    "question": "Which type of IP address is used globally to identify a host across the public internet and must be registered and unique worldwide?",
    "options": [
      { "id": "A", "text": "Public IP Address" },
      { "id": "B", "text": "Private IP Address" },
      { "id": "C", "text": "Loopback IP Address" },
      { "id": "D", "text": "Default Gateway" }
    ],
    "correctAnswer": "A",
    "explanation": "A Public IP address is assigned by regional Internet registries (like ARIN, RIPE) and is globally unique and routable across the entire public internet. Private IP addresses (defined in RFC 1918) are used within local networks and cannot be routed over the public internet without NAT.",
    "memoryTip": "Public IP = Globally unique & routable on Internet | Private IP = Local network only (RFC 1918).",
    "breakdown": {
      "A": "Correct! Public IP addresses are globally unique, publicly accessible, and routable across the worldwide internet.",
      "B": "Private IP addresses are reserved for internal local networks and are non-routable on the public internet.",
      "C": "Loopback addresses (127.0.0.1) are reserved for a host to send network packets back to itself internally.",
      "D": "A default gateway is the IP address of the local router interface that provides an exit point out of the local subnet."
    }
  },
  {
    "id": "pyq-33",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Network Topologies",
    "subtopic": "Star Topology",
    "difficulty": "Easy",
    "question": "Which network topology connects all devices to a central hub or switch, with each device having its own dedicated point-to-point connection to the central device?",
    "options": [
      { "id": "A", "text": "Star Topology" },
      { "id": "B", "text": "Bus Topology" },
      { "id": "C", "text": "Ring Topology" },
      { "id": "D", "text": "Mesh Topology" }
    ],
    "correctAnswer": "A",
    "explanation": "In a Star Topology, all peripheral devices connect directly to a central hub or switch. If one cable fails, only the connected device goes offline; however, if the central switch fails, the entire network drops.",
    "memoryTip": "All devices to central hub = Star | Single shared cable = Bus | Loop = Ring | Interconnected = Mesh.",
    "breakdown": {
      "A": "Correct! Star topology connects each node to a central hub or switch via a dedicated cable.",
      "B": "Bus topology connects all devices sequentially along a single common shared backbone cable.",
      "C": "Ring topology connects every node to exactly two neighbor nodes forming a closed circular data loop.",
      "D": "Mesh topology features point-to-point connections between every pair of nodes in the network."
    }
  },
  {
    "id": "pyq-34",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Secure Remote Access Protocols",
    "difficulty": "Easy",
    "question": "Which protocol is commonly used for secure remote command-line login and encrypted file transfer over an untrusted network?",
    "options": [
      { "id": "A", "text": "HTTP" },
      { "id": "B", "text": "FTP" },
      { "id": "C", "text": "SSH (Secure Shell) / SFTP" },
      { "id": "D", "text": "SMTP" }
    ],
    "correctAnswer": "C",
    "explanation": "Secure Shell (SSH) provides strong public-key cryptographic authentication and encrypted terminal sessions (Port 22) over insecure networks, completely replacing unencrypted Telnet and rlogin. SFTP runs over SSH to transfer files securely.",
    "memoryTip": "Secure encrypted remote login = SSH (Port 22) | Insecure = Telnet (Port 23).",
    "breakdown": {
      "A": "HTTP transmits plain-text web content without encryption (replaced by HTTPS).",
      "B": "FTP transfers files in plaintext, exposing usernames and passwords in clear text over the wire.",
      "C": "Correct! SSH (Secure Shell) encrypts all traffic, providing secure remote terminal login and secure file transfer (SFTP).",
      "D": "SMTP is used exclusively for electronic mail transfer between mail transfer agents."
    }
  },
  {
    "id": "pyq-35",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Hardware & Network Devices",
    "subtopic": "Modem Functionality",
    "difficulty": "Easy",
    "question": "Which of the following statements is/are true regarding network modems?\n1. Modems convert signals over telephone lines\n2. Modem stands for Modulator-Demodulator\n3. Modems can no longer be used in secure networks",
    "options": [
      { "id": "A", "text": "Only 1 is true" },
      { "id": "B", "text": "Only 2 is true" },
      { "id": "C", "text": "Both 1 and 2 are true" },
      { "id": "D", "text": "None of the above" }
    ],
    "correctAnswer": "C",
    "explanation": "A modem stands for Modulator-Demodulator. It converts digital computer pulses into analog audio frequencies for transmission across telephone lines (modulation) and converts incoming analog signals back into digital pulses (demodulation). Statement 3 is false because modems can securely transmit encrypted traffic.",
    "memoryTip": "Modem = MOdulator + DEModulator (Digital <-> Analog).",
    "breakdown": {
      "A": "Statement 1 is true, but Statement 2 is also true, making option C the complete answer.",
      "B": "Statement 2 is true, but Statement 1 is also true, making option C the complete answer.",
      "C": "Correct! Modems use telephone/cable lines and stand for Modulator-Demodulator (Both 1 and 2 are true).",
      "D": "Incorrect, since statements 1 and 2 are factually accurate descriptions of modem technology."
    }
  },
  {
    "id": "pyq-36",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Hardware & Network Devices",
    "subtopic": "Packet Forwarding Devices",
    "difficulty": "Easy",
    "question": "Which device is responsible for forwarding data packets between different networks in network infrastructure?",
    "options": [
      { "id": "A", "text": "Router" },
      { "id": "B", "text": "Switch" },
      { "id": "C", "text": "Hub" },
      { "id": "D", "text": "Modem" }
    ],
    "correctAnswer": "A",
    "explanation": "A router operates at Layer 3 (Network Layer) and is responsible for examining packet destination IP addresses and forwarding packets across different networks toward their destination.",
    "memoryTip": "Forwards between DIFFERENT networks = Router | Forwards within SAME network = Switch.",
    "breakdown": {
      "A": "Correct! A router reads logical network addresses to forward packets across different subnets and network boundaries.",
      "B": "A switch operates at Layer 2 to forward frames between devices on the same local area network.",
      "C": "A hub is a legacy Layer 1 multiport repeater that blindly broadcasts incoming signals to all ports.",
      "D": "A modem modulates and demodulates analog and digital signals across telecommunication carriers."
    }
  },

  # -------------------------------------------------------------
  # TIER 4: IP ADDRESSING, SUBNETTING & TOPOLOGIES (Q37 - Q48)
  # -------------------------------------------------------------
  {
    "id": "pyq-37",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Web Protocols & Standards",
    "subtopic": "URL Structure & Directories",
    "difficulty": "Easy",
    "question": "In the URL 'www.hubspot.com/commercial/index.html', the segment '/commercial/' is called a:",
    "options": [
      { "id": "A", "text": "Query string" },
      { "id": "B", "text": "Directory or Path" },
      { "id": "C", "text": "Top-Level Domain (TLD)" },
      { "id": "D", "text": "Host or Subdomain" }
    ],
    "correctAnswer": "B",
    "explanation": "In URL syntax: 'www' is the subdomain, 'hubspot.com' is the domain name, '.com' is the Top-Level Domain (TLD), '/commercial/' is the directory path, and 'index.html' is the resource file name.",
    "memoryTip": "URL Parts: Protocol (https://) + Host (domain.com) + Path (/directory/) + File (index.html) + Query (?id=1).",
    "breakdown": {
      "A": "A query string begins with a question mark '?' and provides key-value parameters (e.g., ?user=123).",
      "B": "Correct! The segment '/commercial/' represents the directory path on the web server holding the resource.",
      "C": "The TLD (Top-Level Domain) is the suffix at the end of the domain name (e.g., '.com', '.org', '.edu').",
      "D": "The host/subdomain identifies the specific server host (e.g., 'www' or 'blog')."
    }
  },
  {
    "id": "pyq-38",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Proxy Servers & Anonymity",
    "difficulty": "Medium",
    "question": "Which network security device or software hides the true network address of internal computers and intercepts all incoming and outgoing messages entering and leaving the network?",
    "options": [
      { "id": "A", "text": "Logic Bomb" },
      { "id": "B", "text": "Circuit Patch" },
      { "id": "C", "text": "Software Patches" },
      { "id": "D", "text": "Proxy Server" }
    ],
    "correctAnswer": "D",
    "explanation": "A Proxy Server acts as an intermediary gateway between local clients and the external internet. It receives client requests, masks the client's internal IP address, evaluates security policies, and fetches resources on the client's behalf.",
    "memoryTip": "Hides internal IP address & intercepts all requests = Proxy Server.",
    "breakdown": {
      "A": "A logic bomb is malicious code deliberately inserted into a software system to execute when specific conditions are met.",
      "B": "'Circuit Patch' is an invalid networking distractor.",
      "C": "Software patches are code updates applied to fix bugs or security vulnerabilities in installed applications.",
      "D": "Correct! A proxy server hides the true client IP address from external servers and filters all inbound and outbound traffic."
    }
  },
  {
    "id": "pyq-39",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "Virus Classification",
    "difficulty": "Easy",
    "question": "Which specific type of computer virus spreads by embedding itself inside application software documents (such as Microsoft Word or Excel files)?",
    "options": [
      { "id": "A", "text": "Macro Virus" },
      { "id": "B", "text": "Boot Virus" },
      { "id": "C", "text": "File Virus" },
      { "id": "D", "text": "Antivirus" }
    ],
    "correctAnswer": "A",
    "explanation": "A Macro Virus is written in a macro programming language (such as Visual Basic for Applications - VBA) and embeds itself within document files (DOCX, XLSX). When the user opens the infected document, the macro automatically executes and infects the system.",
    "memoryTip": "Spreads via Word/Excel documents = Macro Virus | Infects Master Boot Record = Boot Virus.",
    "breakdown": {
      "A": "Correct! A Macro Virus infects documents and templates associated with applications like Microsoft Office.",
      "B": "A Boot Sector virus infects the Master Boot Record (MBR) or boot partition of hard drives to run before the OS loads.",
      "C": "A File virus infects executable binary files (e.g., .EXE or .COM files).",
      "D": "Antivirus is defensive security software designed to detect, quarantine, and eliminate computer malware."
    }
  },
  {
    "id": "pyq-40",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Firewall Fundamentals",
    "difficulty": "Easy",
    "question": "In computing, which network security system monitors and controls incoming and outgoing network traffic based on predetermined security rules?",
    "options": [
      { "id": "A", "text": "Spyware" },
      { "id": "B", "text": "Cookie" },
      { "id": "C", "text": "Spam" },
      { "id": "D", "text": "Firewall" }
    ],
    "correctAnswer": "D",
    "explanation": "A Firewall is a network security system that acts as a barrier between a trusted internal network and untrusted external networks (like the internet), monitoring and filtering packets based on configured access control lists (ACLs).",
    "memoryTip": "Monitors & controls traffic based on rules = Firewall.",
    "breakdown": {
      "A": "Spyware is malicious software that secretly gathers user information and transmits it to third parties.",
      "B": "A browser cookie is a small data file stored by web browsers to remember user state and sessions.",
      "C": "Spam refers to unsolicited junk messages sent in bulk over email or messaging platforms.",
      "D": "Correct! A firewall is the primary security gatekeeper controlling network packet traffic according to defined rules."
    }
  },
  {
    "id": "pyq-41",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "Virus Definition",
    "difficulty": "Easy",
    "question": "From a computer science perspective, a computer virus is fundamentally categorized as:",
    "options": [
      { "id": "A", "text": "Hardware" },
      { "id": "B", "text": "Software / Program" },
      { "id": "C", "text": "Bacteria" },
      { "id": "D", "text": "Freeware" }
    ],
    "correctAnswer": "B",
    "explanation": "A computer virus is a malicious software program or code designed to alter the way a computer operates, replicating itself by attaching to other programs and causing harmful system behavior.",
    "memoryTip": "Computer Virus = Malicious Software / Code.",
    "breakdown": {
      "A": "A computer virus is written in code and executed by the CPU; it is not a physical hardware component.",
      "B": "Correct! A computer virus is a piece of malicious software (malware) engineered to replicate and modify files.",
      "C": "Bacteria are biological organisms; computer viruses are purely digital software constructs.",
      "D": "Freeware refers to legitimate proprietary software that is made available to users at no financial cost."
    }
  },
  {
    "id": "pyq-42",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "Self-Replication Mechanics",
    "difficulty": "Easy",
    "question": "Which of the following is a malicious software program that, upon execution, replicates itself by inserting its own code into other computer programs?",
    "options": [
      { "id": "A", "text": "Virus" },
      { "id": "B", "text": "Spam" },
      { "id": "C", "text": "Spyware" },
      { "id": "D", "text": "Adware" }
    ],
    "correctAnswer": "A",
    "explanation": "The defining hallmark of a computer virus is its self-replicating behavior: upon execution, it modifies other computer programs by injecting its own malicious code into them.",
    "memoryTip": "Replicates by modifying other host programs = Computer Virus.",
    "breakdown": {
      "A": "Correct! A virus specifically executes and replicates by infecting other legitimate programs and host binaries.",
      "B": "Spam refers to junk messages, not self-replicating executable binary code.",
      "C": "Spyware covertly spies on user actions without necessarily infecting or altering other application executables.",
      "D": "Adware displays advertising popups and banners, usually without self-replicating code."
    }
  },
  {
    "id": "pyq-43",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Stateful Firewalls",
    "difficulty": "Medium",
    "question": "Dynamic packet filtering firewalls (Fourth-generation firewalls) are stateful firewalls that keep track of:",
    "options": [
      { "id": "A", "text": "Application layer user logins only" },
      { "id": "B", "text": "TCP 3-way handshake and active connection states" },
      { "id": "C", "text": "Physical cable impedance" },
      { "id": "D", "text": "BIOS boot sequence checksums" }
    ],
    "correctAnswer": "B",
    "explanation": "Fourth-generation firewalls (Stateful Packet Inspection - SPI) monitor the full state of active network connections, tracking the TCP 3-way handshake (SYN, SYN-ACK, ACK) and ensuring incoming packets belong to established, recognized connections.",
    "memoryTip": "Stateful Firewalls = Track TCP 3-way handshake & connection state table.",
    "breakdown": {
      "A": "Application layer filtering operates at Layer 7 (proxy firewalls), not the defining TCP state mechanism of 4th-gen SPI.",
      "B": "Correct! Stateful firewalls maintain a state table tracking the TCP handshake and verify if packets belong to valid active sessions.",
      "C": "Physical cable characteristics reside at Layer 1 and are not monitored by stateful firewalls.",
      "D": "BIOS boot sequence is a motherboard firmware process independent of network firewall filtering."
    }
  },
  {
    "id": "pyq-44",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "Unsolicited Communications",
    "difficulty": "Easy",
    "question": "Unsolicited electronic messages sent in bulk for commercial marketing or phishing purposes are called:",
    "options": [
      { "id": "A", "text": "Virus" },
      { "id": "B", "text": "Unzip" },
      { "id": "C", "text": "Spam" },
      { "id": "D", "text": "URL" }
    ],
    "correctAnswer": "C",
    "explanation": "Spam refers to unsolicited, bulk-distributed electronic communications sent via email, SMS, or social media to millions of recipients without their consent.",
    "memoryTip": "Unsolicited bulk messages = Spam.",
    "breakdown": {
      "A": "A virus is malicious executable code, whereas spam is unwanted bulk text/email communication.",
      "B": "Unzip is a utility command used to decompress compressed archive files.",
      "C": "Correct! Spam is the universal term for unsolicited, bulk electronic messages.",
      "D": "A URL (Uniform Resource Locator) is the web address used to locate a resource on the internet."
    }
  },
  {
    "id": "pyq-45",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cloud Service Models",
    "subtopic": "Abstraction in Cloud",
    "difficulty": "Medium",
    "question": "Which of the following is an essential foundational concept of cloud computing that conceals complex physical infrastructure details from users?",
    "options": [
      { "id": "A", "text": "Reliability" },
      { "id": "B", "text": "Productivity" },
      { "id": "C", "text": "Abstraction" },
      { "id": "D", "text": "All of these" }
    ],
    "correctAnswer": "C",
    "explanation": "Abstraction is a core architectural pillar of cloud computing: it hides the background complexities of physical hardware, server locations, storage fabrics, and system administration, exposing only clean APIs and interfaces to the consumer.",
    "memoryTip": "Hiding background hardware details = Abstraction.",
    "breakdown": {
      "A": "Reliability is an important service quality (SLA) benefit, but abstraction is the core architectural mechanism.",
      "B": "Productivity is an outcome of cloud adoption, not the technical concept that hides underlying hardware.",
      "C": "Correct! Abstraction allows users to consume compute and storage without knowledge of where or on what hardware it runs.",
      "D": "Incorrect, as 'Abstraction' is the specific theoretical concept cited by Accenture for concealing implementation details."
    }
  },
  {
    "id": "pyq-46",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Computing Definition",
    "difficulty": "Easy",
    "question": "Which computing paradigm refers to applications and services that run on a distributed network using virtualized and shared resources?",
    "options": [
      { "id": "A", "text": "Distributed Computing" },
      { "id": "B", "text": "Cloud Computing" },
      { "id": "C", "text": "Soft Computing" },
      { "id": "D", "text": "Parallel Computing" }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing is the on-demand availability of computer system resources (especially data storage and computing power) running on a distributed network of virtualized hardware over the internet.",
    "memoryTip": "Virtualized on-demand computing over distributed network = Cloud Computing.",
    "breakdown": {
      "A": "Distributed computing is a general academic paradigm where components located on networked computers coordinate actions.",
      "B": "Correct! Cloud Computing delivers on-demand computing services and applications over a network using virtualized resources.",
      "C": "Soft computing refers to computational techniques (fuzzy logic, neural nets) that tolerate imprecision.",
      "D": "Parallel computing involves carrying out many programmatic calculations simultaneously across multiple processor cores."
    }
  },
  {
    "id": "pyq-47",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cloud Service Models",
    "subtopic": "Internet as Precursor",
    "difficulty": "Easy",
    "question": "Which entity had many of the core characteristics that served as the operational precursor to what is now called cloud computing?",
    "options": [
      { "id": "A", "text": "The Internet" },
      { "id": "B", "text": "Desktop Software" },
      { "id": "C", "text": "Web Services" },
      { "id": "D", "text": "All of the mentioned" }
    ],
    "correctAnswer": "A",
    "explanation": "The Internet itself provided the initial distributed networking, shared routing, universal addressing, and client-server protocols that paved the way for modern cloud computing platforms.",
    "memoryTip": "The Internet is the foundational backbone that gave rise to Cloud Computing.",
    "breakdown": {
      "A": "Correct! The Internet embodied the ubiquitous connectivity and distributed resource sharing that evolved into modern cloud computing.",
      "B": "Desktop software was traditionally isolated and locally installed on standalone single-user machines.",
      "C": "Web services are an application protocol layer, but the Internet was the overarching infrastructure precursor.",
      "D": "Incorrect, since 'The Internet' is the historical foundational entity tested in this Accenture item."
    }
  },
  {
    "id": "pyq-48",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Cloud Service Models",
    "subtopic": "Deployment Models",
    "difficulty": "Easy",
    "question": "Which of the following is a recognized cloud deployment model?",
    "options": [
      { "id": "A", "text": "Public Cloud" },
      { "id": "B", "text": "Private Cloud" },
      { "id": "C", "text": "Hybrid Cloud" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "D",
    "explanation": "NIST formally defines four cloud deployment models: Public Cloud (available to general public), Private Cloud (exclusive to one organization), Community Cloud (shared among organizations with common goals), and Hybrid Cloud (combination of two or more models).",
    "memoryTip": "4 Cloud Deployment Models = Public, Private, Community, Hybrid.",
    "breakdown": {
      "A": "Public cloud is a valid deployment model where infrastructure is open for public use.",
      "B": "Private cloud is a valid deployment model provisioned for exclusive use by a single organization.",
      "C": "Hybrid cloud is a valid deployment model bridging private and public cloud infrastructures.",
      "D": "Correct! Public, Private, Community, and Hybrid clouds are all standardized cloud deployment models."
    }
  },

  # -------------------------------------------------------------
  # TIER 5: WEB PROTOCOLS, HARDWARE & INFRASTRUCTURE (Q49 - Q61)
  # -------------------------------------------------------------
  {
    "id": "pyq-49",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Resource Pooling & Virtualization",
    "difficulty": "Easy",
    "question": "Which cloud computing concept is specifically related to the pooling and dynamic sharing of physical hardware resources?",
    "options": [
      { "id": "A", "text": "Polymorphism" },
      { "id": "B", "text": "Abstraction" },
      { "id": "C", "text": "Virtualization" },
      { "id": "D", "text": "Encapsulation" }
    ],
    "correctAnswer": "C",
    "explanation": "Virtualization (via hypervisors) abstracts physical servers, storage, and networking, allowing physical capacity to be pooled and partitioned into isolated virtual machines and containers shared dynamically among multiple tenants.",
    "memoryTip": "Hardware pooling and multi-tenancy = Virtualization (Hypervisors).",
    "breakdown": {
      "A": "Polymorphism is an Object-Oriented Programming (OOP) feature, not a cloud hardware concept.",
      "B": "Abstraction hides complexity behind interfaces, but Virtualization is the specific mechanism enabling resource pooling.",
      "C": "Correct! Virtualization is the core enabling technology that pools physical computing resources and provisions them elastically.",
      "D": "Encapsulation is an OOP principle binding code and data together while hiding internal states."
    }
  },
  {
    "id": "pyq-50",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Web Protocols & Standards",
    "subtopic": "Stateless Communication",
    "difficulty": "Medium",
    "question": "Cloud computing and HTTP-based web interactions are fundamentally:",
    "options": [
      { "id": "A", "text": "Stateless" },
      { "id": "B", "text": "Stateful" },
      { "id": "C", "text": "Monolithic" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "A",
    "explanation": "HTTP is inherently a stateless protocol: every client request is processed independently without the server retaining session context across separate transactions. This stateless design allows cloud services to scale out horizontally with ease.",
    "memoryTip": "HTTP and cloud service scaling = Stateless (requests handled independently).",
    "breakdown": {
      "A": "Correct! Standard cloud web protocols (HTTP/REST) are stateless, requiring each request to carry complete authentication and contextual information.",
      "B": "Stateful architectures bind clients to specific servers, which impairs horizontal elasticity and dynamic load balancing.",
      "C": "Monolithic systems combine all tiers into a single codebase, the opposite of modular cloud microservices.",
      "D": "Incorrect, because stateless and stateful are mutually exclusive operating paradigms."
    }
  },
  {
    "id": "pyq-51",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Service Model Adoption",
    "difficulty": "Easy",
    "question": "Which of the following is the most widely recognized and consumer-familiar cloud service model?",
    "options": [
      { "id": "A", "text": "Software as a Service (SaaS)" },
      { "id": "B", "text": "Platform as a Service (PaaS)" },
      { "id": "C", "text": "Infrastructure as a Service (IaaS)" },
      { "id": "D", "text": "All of the mentioned" }
    ],
    "correctAnswer": "D",
    "explanation": "SaaS, PaaS, and IaaS form the canonical 'SPI' trinity of cloud service models, established by NIST and widely recognized across all cloud computing literature and industry benchmarks.",
    "memoryTip": "SPI Trinity = SaaS, PaaS, and IaaS.",
    "breakdown": {
      "A": "SaaS is the most visible to end consumers, but PaaS and IaaS are equally foundational cloud service models.",
      "B": "PaaS is the developer platform model (e.g., Heroku, Elastic Beanstalk).",
      "C": "IaaS provides raw virtualized hardware instances (e.g., AWS EC2, GCE).",
      "D": "Correct! SaaS, PaaS, and IaaS together represent the best-known and universally recognized cloud service models."
    }
  },
  {
    "id": "pyq-52",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Sourcing & Economics",
    "difficulty": "Medium",
    "question": "Which of the following business/IT concepts is directly related to obtaining computing services from external cloud providers instead of purchasing physical hardware?",
    "options": [
      { "id": "A", "text": "Sourcing (Strategic Outsourcing)" },
      { "id": "B", "text": "Ownership" },
      { "id": "C", "text": "Reliability" },
      { "id": "D", "text": "Hardware Depreciation" }
    ],
    "correctAnswer": "A",
    "explanation": "Cloud computing represents a shift from internal asset 'Ownership' to 'Sourcing' (external service acquisition). It converts large upfront Capital Expenditures (CapEx) into pay-as-you-go Operating Expenditures (OpEx).",
    "memoryTip": "Cloud replaces asset ownership with on-demand service Sourcing.",
    "breakdown": {
      "A": "Correct! Cloud computing shifts IT from physical asset ownership to service sourcing.",
      "B": "Ownership is the traditional legacy model where an enterprise purchases and maintains physical servers.",
      "C": "Reliability is an engineering metric, not the procurement model describing service acquisition.",
      "D": "Hardware depreciation applies to purchased on-premises physical equipment, which cloud avoids."
    }
  },
  {
    "id": "pyq-53",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Container Terminology",
    "difficulty": "Easy",
    "question": "In modern cloud computing and microservice deployments, what does the acronym 'CaaS' stand for?",
    "options": [
      { "id": "A", "text": "Compliance as a Service" },
      { "id": "B", "text": "Computer as a Service" },
      { "id": "C", "text": "Containers as a Service" },
      { "id": "D", "text": "Communication as a Service" }
    ],
    "correctAnswer": "C",
    "explanation": "Containers as a Service (CaaS) is a cloud model that allows users to manage and deploy containerized applications using container-based virtualization, orchestration (like Kubernetes), and clustering engines.",
    "memoryTip": "CaaS = Containers as a Service (Docker / Kubernetes orchestration).",
    "breakdown": {
      "A": "Compliance as a Service refers to regulatory audit tools, not the primary cloud container acronym.",
      "B": "Computer as a Service is an incorrect distractor; computing is delivered via IaaS.",
      "C": "Correct! CaaS stands for Containers as a Service, providing automated container orchestration in the cloud.",
      "D": "Communication as a Service typically relates to telecom VoIP/messaging (UCaaS)."
    }
  },
  {
    "id": "pyq-54",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Public Cloud Ownership",
    "difficulty": "Easy",
    "question": "Which type of cloud deployment model is owned and operated by a commercial organization selling cloud services to the general public?",
    "options": [
      { "id": "A", "text": "Public Cloud" },
      { "id": "B", "text": "Private Cloud" },
      { "id": "C", "text": "Community Cloud" },
      { "id": "D", "text": "Hybrid Cloud" }
    ],
    "correctAnswer": "A",
    "explanation": "A Public Cloud is owned and operated by a third-party cloud service provider (e.g., AWS, Microsoft, Google) that delivers computing resources across the public internet to any paying individual or business.",
    "memoryTip": "Commercial provider selling to public = Public Cloud (AWS, Azure, GCP).",
    "breakdown": {
      "A": "Correct! A public cloud is owned and operated by a commercial vendor and available for public subscription.",
      "B": "A private cloud is dedicated exclusively to a single business organization.",
      "C": "A community cloud is jointly owned and accessed by a specific group of organizations with shared requirements.",
      "D": "A hybrid cloud connects two or more distinct clouds (e.g., private and public)."
    }
  },
  {
    "id": "pyq-55",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Shared Responsibility Model",
    "difficulty": "Medium",
    "question": "Under the Cloud Shared Responsibility Model, which service model provides the lowest level of vendor-managed built-in security, requiring the customer to secure the OS, network firewalls, and runtime?",
    "options": [
      { "id": "A", "text": "Software as a Service (SaaS)" },
      { "id": "B", "text": "Platform as a Service (PaaS)" },
      { "id": "C", "text": "Infrastructure as a Service (IaaS)" },
      { "id": "D", "text": "All have equal built-in security" }
    ],
    "correctAnswer": "C",
    "explanation": "In IaaS, the cloud provider only secures physical facilities, hardware, and hypervisors. The customer is responsible for guest operating system security, OS patches, antivirus, firewall configurations, middleware, and application code.",
    "memoryTip": "Lowest vendor-managed security (customer secures OS) = IaaS | Highest vendor security = SaaS.",
    "breakdown": {
      "A": "SaaS providers manage nearly all security layers up to the application, requiring customers only to secure user credentials.",
      "B": "PaaS providers manage the underlying OS and runtime security, leaving customers responsible for application code and data.",
      "C": "Correct! IaaS has the lowest level of built-in security managed by the provider, placing maximum security responsibility on the customer.",
      "D": "Incorrect, because the shared responsibility model delineates distinct security boundaries across IaaS, PaaS, and SaaS."
    }
  },
  {
    "id": "pyq-56",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Operational Scope",
    "difficulty": "Easy",
    "question": "Cloud computing fundamentally encompasses which of the following operational abilities?",
    "options": [
      { "id": "A", "text": "Accessing hardware resources remotely" },
      { "id": "B", "text": "Configuring software and systems remotely" },
      { "id": "C", "text": "Manipulating computing resources dynamically over the network" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "D",
    "explanation": "Cloud computing allows users to access, configure, and manipulate computing resources (servers, databases, networks, software) dynamically and remotely over the internet on a self-service basis.",
    "memoryTip": "Cloud = Access + Configure + Manipulate hardware & software remotely.",
    "breakdown": {
      "A": "Remote hardware access is a foundational feature of cloud virtualization.",
      "B": "Remote programmatic configuration via APIs or consoles is standard in cloud automation.",
      "C": "Dynamic manipulation and scaling of resources over the network defines cloud elasticity.",
      "D": "Correct! Cloud computing encompasses all of the above: accessing, configuring, and manipulating hardware and software remotely."
    }
  },
  {
    "id": "pyq-57",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Community Cloud",
    "difficulty": "Easy",
    "question": "Which cloud deployment model allows systems and services to be accessible exclusively by a specific group of organizations that share common compliance, mission, or security requirements?",
    "options": [
      { "id": "A", "text": "Private Cloud" },
      { "id": "B", "text": "Public Cloud" },
      { "id": "C", "text": "Community Cloud" },
      { "id": "D", "text": "Hybrid Cloud" }
    ],
    "correctAnswer": "C",
    "explanation": "A Community Cloud is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., regulatory compliance, mission objectives, security requirements).",
    "memoryTip": "Shared by specific group of organizations = Community Cloud.",
    "breakdown": {
      "A": "A private cloud is provisioned for the exclusive use of a single organization, not shared among multiple entities.",
      "B": "A public cloud is open for multi-tenant consumption by any individual or business in the general public.",
      "C": "Correct! A community cloud is shared specifically by a consortium of organizations with common regulatory or mission goals.",
      "D": "A hybrid cloud bridges two or more distinct deployment models (e.g., on-premises private and public cloud)."
    }
  },
  {
    "id": "pyq-58",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Migration & Planning",
    "subtopic": "Deployment Phase Deliverables",
    "difficulty": "Medium",
    "question": "Which of the following is a primary deliverable and step within the Cloud Deployment Phase?",
    "options": [
      { "id": "A", "text": "Transformation Plan development" },
      { "id": "B", "text": "IT Architecture development" },
      { "id": "C", "text": "Business architecture development" },
      { "id": "D", "text": "Cloud provider selection" }
    ],
    "correctAnswer": "A",
    "explanation": "During the Deployment Phase, organizations execute the Transformation Plan: migrating data, configuring cloud environments, cutover execution, parallel validation, and decommissioning legacy assets.",
    "memoryTip": "Deployment Phase = Transformation & Migration Plan Execution.",
    "breakdown": {
      "A": "Correct! Developing and executing the Transformation Plan is the core step of the Deployment Phase in cloud migration.",
      "B": "IT architecture development is carried out during the preceding Planning Phase.",
      "C": "Business architecture development occurs early in the Strategy Phase to determine ROI and business objectives.",
      "D": "Cloud provider selection is finalized during the Planning Phase before deployment starts."
    }
  },
  {
    "id": "pyq-59",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Hyperscaler Identification",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a major cloud computing platform?",
    "options": [
      { "id": "A", "text": "Microsoft Azure" },
      { "id": "B", "text": "Amazon EC2 / AWS" },
      { "id": "C", "text": "IBM Deep Blue" },
      { "id": "D", "text": "Google Cloud Platform" }
    ],
    "correctAnswer": "C",
    "explanation": "IBM Deep Blue was a specialized chess-playing supercomputer developed by IBM in the 1990s that defeated Garry Kasparov; it is not a modern cloud computing platform. Azure, AWS, and GCP are the leading cloud platforms.",
    "memoryTip": "IBM Deep Blue = 1990s Chess Supercomputer, NOT a cloud platform.",
    "breakdown": {
      "A": "Microsoft Azure is the second-largest enterprise cloud hyperscaler in the world.",
      "B": "Amazon EC2 (Elastic Compute Cloud) is the foundational IaaS service of Amazon Web Services.",
      "C": "Correct! IBM Deep Blue is an iconic 1990s chess supercomputer, not an enterprise cloud computing service.",
      "D": "Google Cloud Platform (GCP) is Google's major public cloud computing platform."
    }
  },
  {
    "id": "pyq-60",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Storage Virtualization",
    "difficulty": "Medium",
    "question": "The ability to dynamically allocate virtual storage capacity on demand from a shared storage pool as data is written, rather than reserving the entire allocation upfront, is known as:",
    "options": [
      { "id": "A", "text": "Thin Provisioning" },
      { "id": "B", "text": "Thick Provisioning" },
      { "id": "C", "text": "Flat Provisioning" },
      { "id": "D", "text": "Full Provisioning" }
    ],
    "correctAnswer": "A",
    "explanation": "Thin Provisioning allocates physical disk space only when data is actually written to the drive, optimizing storage utilization. Thick provisioning reserves the entire capacity immediately upon volume creation.",
    "memoryTip": "Allocate storage on-demand as data is written = Thin Provisioning | Reserve all upfront = Thick Provisioning.",
    "breakdown": {
      "A": "Correct! Thin provisioning allocates storage capacity flexibly on-demand as needed from a shared storage pool.",
      "B": "Thick provisioning pre-allocates and zeroes out the entire requested disk space at initial creation time.",
      "C": "Flat provisioning is not a recognized storage virtualization standard.",
      "D": "Full provisioning is synonymous with thick provisioning, allocating all physical sectors immediately."
    }
  },
  {
    "id": "pyq-61",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Hardware & Network Devices",
    "subtopic": "Network Bridges",
    "difficulty": "Medium",
    "question": "Which Layer 2 networking device can be used to join and forward frames between two distinct network segments such as Token Ring and Ethernet?",
    "options": [
      { "id": "A", "text": "Network Bridge" },
      { "id": "B", "text": "Passive Hub" },
      { "id": "C", "text": "Analog Modem" },
      { "id": "D", "text": "Repeater" }
    ],
    "correctAnswer": "A",
    "explanation": "A Network Bridge operates at the Data Link Layer (Layer 2) to filter and forward frame traffic between two distinct physical network segments (like Ethernet and Token Ring), translating frame formats where necessary.",
    "memoryTip": "Connects and filters between two LAN segments (Token Ring & Ethernet) = Network Bridge.",
    "breakdown": {
      "A": "Correct! A network bridge joins and forwards frames between different physical LAN segments (e.g., Token Ring and Ethernet).",
      "B": "A passive hub operates at Layer 1 and cannot translate different frame architectures or inspect MAC addresses.",
      "C": "An analog modem converts digital signals to analog audio for telephone transmission, not bridging local LAN frames.",
      "D": "A repeater operates at Layer 1 simply amplifying electrical signals across extended cable distances."
    }
  }
]

full_questions = raw_questions + more_questions
print(f"Total compiled questions: {len(full_questions)}")

# Verify exactly 61 questions
assert len(full_questions) == 61, f"Expected 61 questions, got {len(full_questions)}"

# Build the importantOptionExplanationsMap
breakdown_map = {}
for q in full_questions:
    breakdown_map[q["id"]] = q["breakdown"]

# Clean questions for output (strip breakdown from question object if needed, or keep for convenience)
clean_questions = []
for q in full_questions:
    item = {
        "id": q["id"],
        "tier": q["tier"],
        "tierName": q["tierName"],
        "topic": q["topic"],
        "subtopic": q["subtopic"],
        "difficulty": q["difficulty"],
        "question": q["question"],
        "options": q["options"],
        "correctAnswer": q["correctAnswer"],
        "explanation": q["explanation"],
        "memoryTip": q["memoryTip"]
    }
    clean_questions.append(item)

# Build JS content
from generate_final_important_questions import tiers, topics, study_guides

js_content = f"""// src/data/importantQuestions.js
// 61 High-Frequency Accenture PYQs (Cloud & Network Security, OSI, Architecture, Protocols)

export const IMPORTANT_TIERS = {json.dumps(tiers, indent=2, ensure_ascii=False)};

export const IMPORTANT_TOPICS = {json.dumps(topics, indent=2, ensure_ascii=False)};

export const importantStudyGuides = {json.dumps(study_guides, indent=2, ensure_ascii=False)};

export const importantQuestions = {json.dumps(clean_questions, indent=2, ensure_ascii=False)};

export const importantOptionExplanationsMap = {json.dumps(breakdown_map, indent=2, ensure_ascii=False)};

export const filterImportantQuestions = ({{ tier = 'all', topic = 'all' }}) => {{
  return importantQuestions.filter((q) => {{
    const matchesTier = tier === 'all' || q.tier === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  }});
}};

export const getImportantOptionBreakdown = (questionId) => {{
  return importantOptionExplanationsMap[questionId] || null;
}};
"""

out_target = os.path.abspath("src/data/importantQuestions.js")
with open(out_target, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(clean_questions)} questions in {out_target}")

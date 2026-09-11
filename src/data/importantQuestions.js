// src/data/importantQuestions.js
// 61 High-Frequency Accenture PYQs (Cloud & Network Security, OSI, Architecture, Protocols)

export const IMPORTANT_TIERS = [
  {
    "id": 1,
    "name": "Tier 1 — OSI Architecture & Layer Protocols",
    "description": "OSI 7 layers, logical IP vs physical MAC addressing, TCP vs UDP transport, and cloud delivery models."
  },
  {
    "id": 2,
    "name": "Tier 2 — Cloud Computing Models & Migration",
    "description": "IaaS, PaaS, SaaS, shared responsibility, cloud planning phases, and zero-downtime migration strategies."
  },
  {
    "id": 3,
    "name": "Tier 3 — Network Security & Cyber Defense",
    "description": "DDoS, Smurfing, spoofing, email bombing, proxy firewalls, stateful packet filtering, and virus classification."
  },
  {
    "id": 4,
    "name": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "description": "IPv4 classes A-E, subnet masks, CIDR, private vs public IP, star/bus/mesh topologies, and routing."
  },
  {
    "id": 5,
    "name": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "description": "DNS, DHCP, SSH, SFTP, HTTP/HTTPS, thin provisioning, CaaS, community clouds, and network bridges."
  }
];

export const IMPORTANT_TOPICS = [
  "All Topics",
  "OSI Reference Model",
  "Cloud Service Models",
  "Cloud Migration & Planning",
  "Cyber Attacks & Malware",
  "Network Security & Firewalls",
  "IP Addressing & Classes",
  "Subnetting & Routing",
  "Network Topologies",
  "Transport & Internet Protocols",
  "Web Protocols & Standards",
  "Hardware & Network Devices"
];

export const importantStudyGuides = {
  "1": {
    "title": "OSI 7-Layer Model & Transport Protocols",
    "content": [
      "**OSI 7 Layers (Top to Bottom):** Application (7) → Presentation (6) → Session (5) → Transport (4) → Network (3) → Data Link (2) → Physical (1). (Mnemonic: *All People Seem To Need Data Processing*).",
      "**Addressing across Layers:** Logical IP addresses are added at **Layer 3 (Network)**. Physical MAC addresses are appended at **Layer 2 (Data Link)**. Port numbers (80, 443, 22) are added at **Layer 4 (Transport)**.",
      "**TCP vs UDP (Layer 4):** TCP is connection-oriented, reliable, provides 3-way handshakes (SYN, SYN-ACK, ACK), sequencing, and error retransmission. UDP is connectionless, unreliable, has only 8-byte header overhead, and is used for VoIP, DNS, and real-time streaming.",
      "**Rendering Engines:** Google Chrome & modern Edge use **Blink** (Chromium). Mozilla Firefox uses **Gecko**. Apple Safari uses **WebKit**."
    ]
  },
  "2": {
    "title": "Cloud Computing Architecture & Migration Strategy",
    "content": [
      "**Cloud Service Models:** **IaaS** gives full root control over the OS, storage, and networking (AWS EC2, Google Compute Engine). **PaaS** manages OS and runtime, letting you deploy code (Google App Engine, Elastic Beanstalk). **SaaS** provides turn-key applications (Google Workspace, Microsoft 365, Salesforce).",
      "**Shared Responsibility Model:** In **IaaS**, the customer is responsible for guest OS patching, firewall configurations, and data encryption. In **SaaS**, the cloud vendor manages nearly everything except credentials and user access.",
      "**3 Phases of Cloud Planning:** Strategy Phase → Planning Phase → Deployment Phase. The Deployment Phase includes developing the **Transformation and Migration Plan**.",
      "**Cloud Migration Golden Rule:** Prioritize a phased migration with verified backups, pilot testing, and rollback plans before decommissioning any on-premises servers."
    ]
  },
  "3": {
    "title": "Network Security, Firewalls & Cyber Threats",
    "content": [
      "**Cyber Attacks Defined:** **Smurf Attack:** Distributed ICMP echo requests sent to network broadcast with victim's IP spoofed. **IP Spoofing:** Forging packet headers to impersonate another IP. **Email Bomb:** Flooding inboxes with thousands of automated emails to crash mail services.",
      "**Firewall Generations:** **1st Gen:** Static packet filtering (inspects headers only). **2nd Gen:** Circuit-level gateways. **3rd Gen:** Application-level proxy firewalls (intercepts and masks client IPs). **4th Gen:** **Stateful Packet Inspection (SPI)** firewalls that track the full TCP 3-way handshake and connection state.",
      "**Malware Classifications:** **Computer Virus:** Replicates by modifying other executable host programs. **Macro Virus:** Embeds within office documents and spreadsheet macros (VBA). **Trojan Horse:** Deceptively masquerades as legitimate utility software."
    ]
  },
  "4": {
    "title": "IP Addressing, Classes & Subnetting Guide",
    "content": [
      "**IPv4 Class Ranges:** **Class A:** 1.0.0.0 to 126.255.255.255 (Subnet: 255.0.0.0). **Class B:** 128.0.0.0 to 191.255.255.255 (Subnet: 255.255.0.0). **Class C:** 192.0.0.0 to 223.255.255.255 (Subnet: 255.255.255.0). **Class D:** **224.0.0.0 to 239.255.255.255** (Reserved for **Multicast**). **Class E:** 240.0.0.0 to 255.255.255.255 (Experimental). *127.0.0.1 is loopback.*",
      "**Public vs Private IP:** Private IPs (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are non-routable over the public internet and translated via NAT.",
      "**Network Topologies:** **Star Topology:** All devices connect directly to a central hub/switch. **Bus Topology:** Single shared backbone cable with terminators. **Mesh Topology:** Every node connects to every other node ($n(n-1)/2$ links).",
      "**Routers vs Switches:** **Router (Layer 3):** Forwards packets between different logical networks. **Switch (Layer 2):** Forwards frames between devices on the same local subnet using MAC tables."
    ]
  },
  "5": {
    "title": "Internet Protocols, Hardware & Advanced Cloud Concepts",
    "content": [
      "**Core Protocols:** **DNS:** Resolves domain names to IP addresses (Port 53, UDP/TCP). **DHCP:** Dynamically assigns IP addresses, subnet masks, and gateways (Port 67/68, UDP). **SSH / SFTP:** Encrypted remote login and secure file transfer (Port 22, TCP). **SMTP:** Sends outgoing email between servers (Port 25/587, TCP).",
      "**Cloud Deployment Models:** **Public:** Multi-tenant infrastructure sold to general public. **Private:** Dedicated solely to one enterprise (e.g., Banking/Healthcare compliance). **Community:** Shared among organizations with common compliance needs. **Hybrid:** Connects private and public clouds via secure VPN/DirectConnect.",
      "**Thin Provisioning:** Dynamically allocates storage from a pooled reservoir on-demand as data is written, preventing capacity waste.",
      "**Network Bridge:** Layer 2 device connecting two distinct LAN segment architectures (e.g., Token Ring and Ethernet)."
    ]
  }
};

export const importantQuestions = [
  {
    "id": "pyq-1",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "OSI Reference Model",
    "subtopic": "Logical Addressing & Routing",
    "difficulty": "Easy",
    "question": "Which layer of the OSI model adds the logical address of the sender and receiver?",
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
    "explanation": "The Network Layer (Layer 3) handles logical addressing (IPv4/IPv6) and routing decisions between distinct networks. The Data Link layer handles physical MAC addresses, the Transport Layer manages port numbers, and the Session Layer manages communication sessions.",
    "memoryTip": "Network Layer = Logical IP Addressing | Data Link Layer = Physical MAC Addressing."
  },
  {
    "id": "pyq-2",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Service Models",
    "subtopic": "Software as a Service (SaaS)",
    "difficulty": "Easy",
    "question": "Which of the following is an example of a SaaS (Software as a Service) cloud service model?",
    "options": [
      {
        "id": "A",
        "text": "Google Workspace"
      },
      {
        "id": "B",
        "text": "Dropbox"
      },
      {
        "id": "C",
        "text": "Salesforce"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Software as a Service (SaaS) delivers complete, turnkey software applications over the internet via a web browser. Google Workspace (Docs, Gmail), Dropbox (cloud storage), and Salesforce (CRM) are all premier examples of SaaS.",
    "memoryTip": "SaaS = Ready-to-use end-user software hosted in cloud (Google Workspace, Dropbox, Salesforce)."
  },
  {
    "id": "pyq-3",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Service Models",
    "subtopic": "IaaS Control & Flexibility",
    "difficulty": "Medium",
    "question": "Assume that a company wants to migrate its on-premises infrastructure to the cloud and needs full control over the operating system, storage, and deployed applications. Which cloud service model should they choose?",
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
    "correctAnswer": "A",
    "explanation": "Infrastructure as a Service (IaaS) provides virtualized computing resources (VMs, storage, firewalls) where the customer retains root/administrative control over the OS, runtimes, middleware, and installed application software.",
    "memoryTip": "Full control over OS & storage = IaaS (AWS EC2, Google Compute Engine, Azure VMs)."
  },
  {
    "id": "pyq-4",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "Email Flooding",
    "difficulty": "Easy",
    "question": "An attack in which a user receives an unwanted and overwhelming amount of emails designed to exhaust mailbox storage is called:",
    "options": [
      {
        "id": "A",
        "text": "Smurfing"
      },
      {
        "id": "B",
        "text": "Denial of Service (DoS)"
      },
      {
        "id": "C",
        "text": "E-mail Bombing"
      },
      {
        "id": "D",
        "text": "Ping Storm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "An Email Bomb is a malicious Denial of Service (DoS) technique where attackers direct thousands or millions of emails to a victim's email address to fill up mail storage, crash the mail server, or bury critical security notifications.",
    "memoryTip": "Overwhelming mailbox with junk emails = E-mail Bombing | ICMP broadcast amplification = Smurfing."
  },
  {
    "id": "pyq-5",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cyber Attacks & Malware",
    "subtopic": "IP & Packet Spoofing",
    "difficulty": "Easy",
    "question": "An attack in which a user or threat actor creates a packet with a falsified source identity that appears to be from someone else is:",
    "options": [
      {
        "id": "A",
        "text": "Smurfing"
      },
      {
        "id": "B",
        "text": "Trojan"
      },
      {
        "id": "C",
        "text": "E-mail Bombing"
      },
      {
        "id": "D",
        "text": "Spoofing"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Spoofing is the act of falsifying packet header data (such as IP address, MAC address, or caller ID) to impersonate another legitimate device or disguise the true origin of unauthorized transmissions.",
    "memoryTip": "Falsifying sender identity in packets = Spoofing | Disguised malicious utility = Trojan."
  },
  {
    "id": "pyq-6",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Protocols & Standards",
    "subtopic": "Web Browsers",
    "difficulty": "Easy",
    "question": "Which of the following software applications allows a user to view and navigate web pages across the internet?",
    "options": [
      {
        "id": "A",
        "text": "Notepad"
      },
      {
        "id": "B",
        "text": "Adobe Acrobat"
      },
      {
        "id": "C",
        "text": "Google Drive"
      },
      {
        "id": "D",
        "text": "Web Browser (e.g., Internet Explorer / Chrome)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A web browser is a software application designed to request, interpret, and visually render HTML, CSS, JavaScript, and multimedia content retrieved from web servers over HTTP/HTTPS.",
    "memoryTip": "Web page gateway = Web Browser (Chrome, Safari, Edge, Firefox)."
  },
  {
    "id": "pyq-7",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Hardware & Network Devices",
    "subtopic": "Version Control Systems",
    "difficulty": "Easy",
    "question": "Which of the following is a popular distributed version control system used for tracking changes in software development?",
    "options": [
      {
        "id": "A",
        "text": "USB"
      },
      {
        "id": "B",
        "text": "Git"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "SSL"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Git is an open-source distributed version control system created by Linus Torvalds. It tracks file revisions, supports non-linear branching, and is used by over 90% of development teams worldwide.",
    "memoryTip": "Version Control System = Git | Transfer protocol = HTTP | Physical interface = USB."
  },
  {
    "id": "pyq-8",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Transport & Internet Protocols",
    "subtopic": "TCP/IP Transport Layer",
    "difficulty": "Easy",
    "question": "In the TCP/IP Model, which of the following protocols operates on the transport layer?",
    "options": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "ARP"
      },
      {
        "id": "C",
        "text": "UDP"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Transport Layer in the TCP/IP model contains TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). FTP and DNS operate at the Application layer, and ARP operates at the Network/Data Link interface.",
    "memoryTip": "Transport Layer Protocols = TCP (reliable) and UDP (connectionless)."
  },
  {
    "id": "pyq-9",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Migration & Planning",
    "subtopic": "Zero Downtime Migration",
    "difficulty": "Medium",
    "question": "Your company has decided to shift its traditional on-site data center to a cloud-based infrastructure to improve scalability and reduce costs. As part of the migration process, which step should be given priority to ensure minimal downtime and a smooth transition?",
    "options": [
      {
        "id": "A",
        "text": "Immediately shutting down the on-premise servers after the cloud migration"
      },
      {
        "id": "B",
        "text": "Transferring all the data to the cloud in a single unmonitored attempt"
      },
      {
        "id": "C",
        "text": "Carrying out the migration without informing key stakeholders"
      },
      {
        "id": "D",
        "text": "Creating a detailed migration plan that includes data backup and testing"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Safe cloud migration requires careful discovery, comprehensive data backup, phased pilot testing, and failover validation before shutting down on-premises servers to prevent data loss and enterprise downtime.",
    "memoryTip": "Safe Migration = Plan -> Backup -> Pilot Test -> Validate -> Cutover."
  },
  {
    "id": "pyq-10",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Protocols & Standards",
    "subtopic": "Browser Rendering Engines",
    "difficulty": "Medium",
    "question": "Which popular web browser uses a rendering engine called 'Blink'?",
    "options": [
      {
        "id": "A",
        "text": "Google Chrome"
      },
      {
        "id": "B",
        "text": "Mozilla Firefox"
      },
      {
        "id": "C",
        "text": "Safari"
      },
      {
        "id": "D",
        "text": "Internet Explorer 11"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Blink is an open-source browser rendering engine developed by Google as part of Chromium. It powers Google Chrome, Microsoft Edge, Opera, and Brave. Firefox uses Gecko, Safari uses WebKit, and Internet Explorer used Trident.",
    "memoryTip": "Chrome & modern Edge = Blink | Firefox = Gecko | Safari = WebKit | IE = Trident."
  },
  {
    "id": "pyq-11",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Protocols & Standards",
    "subtopic": "URL Scheme Definitions",
    "difficulty": "Easy",
    "question": "What does the 'http://' prefix in a web URL stand for?",
    "options": [
      {
        "id": "A",
        "text": "Hyperlink Transfer Protocol"
      },
      {
        "id": "B",
        "text": "Hypertext Transmission Protocol"
      },
      {
        "id": "C",
        "text": "Hyperlink Transfer Procedure"
      },
      {
        "id": "D",
        "text": "Hypertext Transfer Protocol"
      }
    ],
    "correctAnswer": "D",
    "explanation": "HTTP stands for Hypertext Transfer Protocol. It is an application protocol that facilitates the transfer of hypermedia documents over the World Wide Web.",
    "memoryTip": "HTTP = Hypertext Transfer Protocol (Port 80) | HTTPS = HTTP Secure over TLS (Port 443)."
  },
  {
    "id": "pyq-12",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Hardware & Network Devices",
    "subtopic": "Network Edge vs Core",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a network edge device?",
    "options": [
      {
        "id": "A",
        "text": "Switch"
      },
      {
        "id": "B",
        "text": "Personal Computer (PC)"
      },
      {
        "id": "C",
        "text": "SmartPhone"
      },
      {
        "id": "D",
        "text": "Server"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Network edge devices are end-systems (hosts) that generate, process, and consume data (PCs, phones, IoT, servers). A switch is an intermediate forwarding node residing in the network core/distribution layer.",
    "memoryTip": "Network Edge = Hosts/PCs/Servers | Network Core = Switches/Routers."
  },
  {
    "id": "pyq-13",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Network Topologies",
    "subtopic": "Local Area Networks",
    "difficulty": "Easy",
    "question": "What is the term for a data communication system confined within a single room, building, or college campus?",
    "options": [
      {
        "id": "A",
        "text": "LAN (Local Area Network)"
      },
      {
        "id": "B",
        "text": "MAN (Metropolitan Area Network)"
      },
      {
        "id": "C",
        "text": "WAN (Wide Area Network)"
      },
      {
        "id": "D",
        "text": "PAN (Personal Area Network)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Local Area Network (LAN) spans a small geographical area such as an office room, home, building, or school campus, typically using Ethernet or Wi-Fi with high data transfer rates.",
    "memoryTip": "Building/Campus = LAN | City = MAN | Country/Global = WAN | Personal device range = PAN."
  },
  {
    "id": "pyq-14",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "OSI Reference Model",
    "subtopic": "End-to-End Reliability",
    "difficulty": "Medium",
    "question": "Which layer of the OSI Model makes sure that the entire message arrives without any error, and if an error occurs, triggers retransmission?",
    "options": [
      {
        "id": "A",
        "text": "Application Layer"
      },
      {
        "id": "B",
        "text": "Session Layer"
      },
      {
        "id": "C",
        "text": "Transport Layer"
      },
      {
        "id": "D",
        "text": "Data Link Layer"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Transport Layer (Layer 4) is responsible for end-to-end message delivery, segmentation, flow control, and error recovery via protocols like TCP that send ACKs and retransmit lost segments.",
    "memoryTip": "End-to-end message integrity & retransmission = Transport Layer (Layer 4 - TCP)."
  },
  {
    "id": "pyq-15",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Web Protocols & Standards",
    "subtopic": "Domain Name Resolution",
    "difficulty": "Easy",
    "question": "What is the primary function of DNS (Domain Name System)?",
    "options": [
      {
        "id": "A",
        "text": "To provide secure encrypted communication"
      },
      {
        "id": "B",
        "text": "To resolve human-readable domain names to IP addresses"
      },
      {
        "id": "C",
        "text": "To transfer binary files between servers"
      },
      {
        "id": "D",
        "text": "To monitor network traffic for security anomalies"
      }
    ],
    "correctAnswer": "B",
    "explanation": "DNS translates user-friendly domain names (e.g., www.accenture.com) into numerical IP addresses (e.g., 20.103.85.33) so that routers can locate and connect devices across the internet.",
    "memoryTip": "DNS = The phonebook of the Internet (Name -> IP Address)."
  },
  {
    "id": "pyq-16",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Cloud Service Models",
    "subtopic": "Cloud Hyperscalers",
    "difficulty": "Easy",
    "question": "Which one of the following is the public cloud computing platform developed by Amazon?",
    "options": [
      {
        "id": "A",
        "text": "Azure"
      },
      {
        "id": "B",
        "text": "AWS (Amazon Web Services)"
      },
      {
        "id": "C",
        "text": "Cloudera"
      },
      {
        "id": "D",
        "text": "Google Cloud Platform"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Web Services (AWS) is Amazon's comprehensive cloud computing platform offering over 200 fully featured services globally. Microsoft develops Azure, and Google develops GCP.",
    "memoryTip": "Amazon = AWS | Microsoft = Azure | Google = GCP."
  },
  {
    "id": "pyq-17",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Cloud Service Models",
    "subtopic": "Front-End vs Back-End Architecture",
    "difficulty": "Easy",
    "question": "In a distributed cloud computing architecture, which of the following is considered an example of the 'front-end'?",
    "options": [
      {
        "id": "A",
        "text": "Web Browser"
      },
      {
        "id": "B",
        "text": "Google Compute Engine"
      },
      {
        "id": "C",
        "text": "Cisco Metapod"
      },
      {
        "id": "D",
        "text": "AWS S3 Storage Cluster"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cloud architecture is split into front-end and back-end. The front-end consists of client-side interfaces and applications (such as a web browser or client app) used to access cloud services. The back-end consists of servers, hypervisors, and data storage.",
    "memoryTip": "Cloud Front-End = Client web browser / mobile app | Cloud Back-End = Servers, databases, storage pools."
  },
  {
    "id": "pyq-18",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "OSI Reference Model",
    "subtopic": "Network Layer Scope",
    "difficulty": "Medium",
    "question": "Which of the following is NOT a primary function of the Network Layer (Layer 3)?",
    "options": [
      {
        "id": "A",
        "text": "Congestion Control"
      },
      {
        "id": "B",
        "text": "End-to-End Hop Error Control"
      },
      {
        "id": "C",
        "text": "Routing"
      },
      {
        "id": "D",
        "text": "Internetworking"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Network Layer handles packet routing, logical addressing, internetworking, and packet-level subnet congestion control. End-to-end error recovery and retransmission is primarily the job of the Transport Layer (Layer 4).",
    "memoryTip": "Network Layer = Routing, IP addressing, Congestion control | Error retransmission = Transport Layer."
  },
  {
    "id": "pyq-19",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Hardware & Network Devices",
    "subtopic": "Routing Architecture",
    "difficulty": "Easy",
    "question": "What is the main purpose of a router in network infrastructure?",
    "options": [
      {
        "id": "A",
        "text": "To connect multiple disparate networks and route packets toward their destination"
      },
      {
        "id": "B",
        "text": "To format text documents"
      },
      {
        "id": "C",
        "text": "To store enterprise database records"
      },
      {
        "id": "D",
        "text": "To print documents over a local area network"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A router is a Layer 3 networking device that forwards data packets between computer networks. By examining IP routing tables, routers determine the optimal path for data to travel across interconnected subnets.",
    "memoryTip": "Router = Connects different networks & directs packets | Switch = Connects devices on same network."
  },
  {
    "id": "pyq-20",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Transport & Internet Protocols",
    "subtopic": "Host Address Configuration",
    "difficulty": "Easy",
    "question": "Which of the following protocols helps a client device automatically obtain its network-layer IP address?",
    "options": [
      {
        "id": "A",
        "text": "SMTP"
      },
      {
        "id": "B",
        "text": "ARP"
      },
      {
        "id": "C",
        "text": "DHCP"
      },
      {
        "id": "D",
        "text": "ICMP"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dynamic Host Configuration Protocol (DHCP) automatically assigns an IP address, subnet mask, default gateway, and DNS servers to client devices on a network using a 4-step DORA process (Discover, Offer, Request, Acknowledge).",
    "memoryTip": "DHCP = Automatically assigns IP addresses (DORA process)."
  },
  {
    "id": "pyq-21",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Cloud Service Models",
    "subtopic": "IaaS Cloud Offerings",
    "difficulty": "Easy",
    "question": "Which of the following is an example of an IaaS (Infrastructure as a Service) offering from Google Cloud?",
    "options": [
      {
        "id": "A",
        "text": "Google Compute Engine (GCE)"
      },
      {
        "id": "B",
        "text": "Google App Engine (GAE)"
      },
      {
        "id": "C",
        "text": "Google Classroom"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Google Compute Engine (GCE) provides raw virtual machines and storage (IaaS). Google App Engine is a Platform as a Service (PaaS), and Google Classroom is Software as a Service (SaaS).",
    "memoryTip": "Google Compute Engine = IaaS | Google App Engine = PaaS | Google Classroom/Drive = SaaS."
  },
  {
    "id": "pyq-22",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Cloud Service Models",
    "subtopic": "Service Model Mapping",
    "difficulty": "Medium",
    "question": "Match the following cloud service models with their appropriate examples:\n1. SaaS\n2. PaaS\n3. IaaS\n\nExamples:\nA) Microsoft 365\nB) Magento Commerce Cloud / App Engine\nC) Google Compute Engine",
    "options": [
      {
        "id": "A",
        "text": "1-A, 2-B, 3-C"
      },
      {
        "id": "B",
        "text": "1-B, 2-A, 3-C"
      },
      {
        "id": "C",
        "text": "1-A, 2-C, 3-B"
      },
      {
        "id": "D",
        "text": "1-C, 2-A, 3-B"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Microsoft 365 is a SaaS office suite. Magento Commerce Cloud / App Engine provides application hosting and developer runtimes (PaaS). Google Compute Engine provides raw virtualized server infrastructure (IaaS).",
    "memoryTip": "1-SaaS = M365 | 2-PaaS = App Engine | 3-IaaS = Compute Engine."
  },
  {
    "id": "pyq-23",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Cloud Security Priorities",
    "difficulty": "Easy",
    "question": "Which of the following is consistently considered the single most important area of concern and operational risk in cloud computing?",
    "options": [
      {
        "id": "A",
        "text": "Scalability"
      },
      {
        "id": "B",
        "text": "Storage Capacity"
      },
      {
        "id": "C",
        "text": "Security & Data Privacy"
      },
      {
        "id": "D",
        "text": "Network Speed"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Surveys and enterprise analyses consistently cite Security and Data Privacy as the #1 concern when adopting cloud computing due to multi-tenancy, data breaches, regulatory compliance, and loss of direct physical control.",
    "memoryTip": "#1 Cloud Concern = Security & Data Privacy."
  },
  {
    "id": "pyq-24",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Cloud Migration & Planning",
    "subtopic": "Cloud Planning Phases",
    "difficulty": "Medium",
    "question": "How many primary phases are involved in standard Cloud Computing Planning?",
    "options": [
      {
        "id": "A",
        "text": "2 Phases"
      },
      {
        "id": "B",
        "text": "3 Phases (Strategy, Planning, Deployment)"
      },
      {
        "id": "C",
        "text": "4 Phases"
      },
      {
        "id": "D",
        "text": "5 Phases"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing planning methodologies delineate three core phases: 1. Strategy Phase (establishing business objectives and ROI), 2. Planning Phase (technical assessment and architectural design), and 3. Deployment Phase (execution, migration, and validation).",
    "memoryTip": "3 Cloud Planning Phases: 1. Strategy -> 2. Planning -> 3. Deployment."
  },
  {
    "id": "pyq-25",
    "tier": 3,
    "tierName": "Tier 3 — Network Security & Cyber Defense",
    "topic": "Cloud Service Models",
    "subtopic": "NIST Cloud Characteristics",
    "difficulty": "Easy",
    "question": "As per which essential characteristic of cloud computing should hosted applications and services be accessible over the network through standard mechanisms by heterogeneous client platforms?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Self-service"
      },
      {
        "id": "B",
        "text": "Broad Network Access"
      },
      {
        "id": "C",
        "text": "Resource Pooling"
      },
      {
        "id": "D",
        "text": "Rapid Elasticity"
      }
    ],
    "correctAnswer": "B",
    "explanation": "NIST defines Broad Network Access as capabilities being available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations).",
    "memoryTip": "Accessible anywhere on any device = Broad Network Access | Scaled instantly = Rapid Elasticity."
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
      {
        "id": "A",
        "text": "Cloud"
      },
      {
        "id": "B",
        "text": "Soft"
      },
      {
        "id": "C",
        "text": "Client"
      },
      {
        "id": "D",
        "text": "All of the mentioned"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In classic cloud computing architecture, the system is separated into the front-end (the client side with web browsers or desktop client software) and the back-end (the cloud itself, housing servers, virtualization platforms, databases, and storage arrays).",
    "memoryTip": "Front-end = Client | Back-end = Cloud."
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
      {
        "id": "A",
        "text": "To provide a standardized framework for understanding and architecting network protocols"
      },
      {
        "id": "B",
        "text": "To define the physical color-coding of network cables"
      },
      {
        "id": "C",
        "text": "To configure firewall routing tables"
      },
      {
        "id": "D",
        "text": "To encrypt data transmissions across the network"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Open Systems Interconnection (OSI) 7-layer reference model was created by the ISO to provide an open, standardized conceptual framework for understanding how protocols interact and communicate across diverse hardware and software platforms.",
    "memoryTip": "OSI Model = Standardized conceptual framework for open networking interoperability."
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
        "text": "Network Layer"
      },
      {
        "id": "D",
        "text": "Transport Layer"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Network Layer (Layer 3) handles routing of data packets from source to destination across multiple network hops using logical IP addresses and routing algorithms.",
    "memoryTip": "Routing between networks = Network Layer (Layer 3 - Routers)."
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
      {
        "id": "A",
        "text": "A single standalone computer operating in isolation"
      },
      {
        "id": "B",
        "text": "A group of interconnected computers and devices that can exchange data and share resources"
      },
      {
        "id": "C",
        "text": "A standalone external hard drive device"
      },
      {
        "id": "D",
        "text": "A proprietary word processor software application"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A computer network is defined as an interconnected collection of autonomous computers and devices linked by telecommunication links to communicate, share hardware/software resources, and transfer electronic data.",
    "memoryTip": "Computer Network = Interconnected devices sharing data and resources."
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
      {
        "id": "A",
        "text": "Class A"
      },
      {
        "id": "B",
        "text": "Class B"
      },
      {
        "id": "C",
        "text": "Class C"
      },
      {
        "id": "D",
        "text": "Class D"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In classful IPv4 addressing: Class A is 1–126; Class B is 128–191; Class C is 192–223; Class D is 224–239 (reserved for multicast); Class E is 240–255 (experimental). 225 falls in the 224–239 range (Class D).",
    "memoryTip": "Class A: 1-126 | Class B: 128-191 | Class C: 192-223 | Class D: 224-239 (Multicast)."
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
      {
        "id": "A",
        "text": "To create smaller, more manageable network segments and reduce broadcast traffic"
      },
      {
        "id": "B",
        "text": "To encrypt data transmissions over copper cables"
      },
      {
        "id": "C",
        "text": "To establish direct physical point-to-point connections between workstations"
      },
      {
        "id": "D",
        "text": "To artificially increase the electrical speed of cable signals"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Subnetting divides a single large network into multiple smaller logical subnetworks (subnets). This improves network performance by confining broadcast storms, enhances security by isolating departmental traffic, and conserves address space.",
    "memoryTip": "Subnetting = Divide network -> Smaller broadcast domains + Better security + Conserve IPs."
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
      {
        "id": "A",
        "text": "Public IP Address"
      },
      {
        "id": "B",
        "text": "Private IP Address"
      },
      {
        "id": "C",
        "text": "Loopback IP Address"
      },
      {
        "id": "D",
        "text": "Default Gateway"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Public IP address is assigned by regional Internet registries (like ARIN, RIPE) and is globally unique and routable across the entire public internet. Private IP addresses (defined in RFC 1918) are used within local networks and cannot be routed over the public internet without NAT.",
    "memoryTip": "Public IP = Globally unique & routable on Internet | Private IP = Local network only (RFC 1918)."
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
      {
        "id": "A",
        "text": "Star Topology"
      },
      {
        "id": "B",
        "text": "Bus Topology"
      },
      {
        "id": "C",
        "text": "Ring Topology"
      },
      {
        "id": "D",
        "text": "Mesh Topology"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In a Star Topology, all peripheral devices connect directly to a central hub or switch. If one cable fails, only the connected device goes offline; however, if the central switch fails, the entire network drops.",
    "memoryTip": "All devices to central hub = Star | Single shared cable = Bus | Loop = Ring | Interconnected = Mesh."
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
        "text": "SSH (Secure Shell) / SFTP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Secure Shell (SSH) provides strong public-key cryptographic authentication and encrypted terminal sessions (Port 22) over insecure networks, completely replacing unencrypted Telnet and rlogin. SFTP runs over SSH to transfer files securely.",
    "memoryTip": "Secure encrypted remote login = SSH (Port 22) | Insecure = Telnet (Port 23)."
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
      {
        "id": "A",
        "text": "Only 1 is true"
      },
      {
        "id": "B",
        "text": "Only 2 is true"
      },
      {
        "id": "C",
        "text": "Both 1 and 2 are true"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A modem stands for Modulator-Demodulator. It converts digital computer pulses into analog audio frequencies for transmission across telephone lines (modulation) and converts incoming analog signals back into digital pulses (demodulation). Statement 3 is false because modems can securely transmit encrypted traffic.",
    "memoryTip": "Modem = MOdulator + DEModulator (Digital <-> Analog)."
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
        "text": "Hub"
      },
      {
        "id": "D",
        "text": "Modem"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A router operates at Layer 3 (Network Layer) and is responsible for examining packet destination IP addresses and forwarding packets across different networks toward their destination.",
    "memoryTip": "Forwards between DIFFERENT networks = Router | Forwards within SAME network = Switch."
  },
  {
    "id": "pyq-37",
    "tier": 4,
    "tierName": "Tier 4 — IP Addressing, Subnetting & Topologies",
    "topic": "Web Protocols & Standards",
    "subtopic": "URL Structure & Directories",
    "difficulty": "Easy",
    "question": "In the URL 'www.hubspot.com/commercial/index.html', the segment '/commercial/' is called a:",
    "options": [
      {
        "id": "A",
        "text": "Query string"
      },
      {
        "id": "B",
        "text": "Directory or Path"
      },
      {
        "id": "C",
        "text": "Top-Level Domain (TLD)"
      },
      {
        "id": "D",
        "text": "Host or Subdomain"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In URL syntax: 'www' is the subdomain, 'hubspot.com' is the domain name, '.com' is the Top-Level Domain (TLD), '/commercial/' is the directory path, and 'index.html' is the resource file name.",
    "memoryTip": "URL Parts: Protocol (https://) + Host (domain.com) + Path (/directory/) + File (index.html) + Query (?id=1)."
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
      {
        "id": "A",
        "text": "Logic Bomb"
      },
      {
        "id": "B",
        "text": "Circuit Patch"
      },
      {
        "id": "C",
        "text": "Software Patches"
      },
      {
        "id": "D",
        "text": "Proxy Server"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Proxy Server acts as an intermediary gateway between local clients and the external internet. It receives client requests, masks the client's internal IP address, evaluates security policies, and fetches resources on the client's behalf.",
    "memoryTip": "Hides internal IP address & intercepts all requests = Proxy Server."
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
      {
        "id": "A",
        "text": "Macro Virus"
      },
      {
        "id": "B",
        "text": "Boot Virus"
      },
      {
        "id": "C",
        "text": "File Virus"
      },
      {
        "id": "D",
        "text": "Antivirus"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Macro Virus is written in a macro programming language (such as Visual Basic for Applications - VBA) and embeds itself within document files (DOCX, XLSX). When the user opens the infected document, the macro automatically executes and infects the system.",
    "memoryTip": "Spreads via Word/Excel documents = Macro Virus | Infects Master Boot Record = Boot Virus."
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
      {
        "id": "A",
        "text": "Spyware"
      },
      {
        "id": "B",
        "text": "Cookie"
      },
      {
        "id": "C",
        "text": "Spam"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Firewall is a network security system that acts as a barrier between a trusted internal network and untrusted external networks (like the internet), monitoring and filtering packets based on configured access control lists (ACLs).",
    "memoryTip": "Monitors & controls traffic based on rules = Firewall."
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
      {
        "id": "A",
        "text": "Hardware"
      },
      {
        "id": "B",
        "text": "Software / Program"
      },
      {
        "id": "C",
        "text": "Bacteria"
      },
      {
        "id": "D",
        "text": "Freeware"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A computer virus is a malicious software program or code designed to alter the way a computer operates, replicating itself by attaching to other programs and causing harmful system behavior.",
    "memoryTip": "Computer Virus = Malicious Software / Code."
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
      {
        "id": "A",
        "text": "Virus"
      },
      {
        "id": "B",
        "text": "Spam"
      },
      {
        "id": "C",
        "text": "Spyware"
      },
      {
        "id": "D",
        "text": "Adware"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The defining hallmark of a computer virus is its self-replicating behavior: upon execution, it modifies other computer programs by injecting its own malicious code into them.",
    "memoryTip": "Replicates by modifying other host programs = Computer Virus."
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
      {
        "id": "A",
        "text": "Application layer user logins only"
      },
      {
        "id": "B",
        "text": "TCP 3-way handshake and active connection states"
      },
      {
        "id": "C",
        "text": "Physical cable impedance"
      },
      {
        "id": "D",
        "text": "BIOS boot sequence checksums"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fourth-generation firewalls (Stateful Packet Inspection - SPI) monitor the full state of active network connections, tracking the TCP 3-way handshake (SYN, SYN-ACK, ACK) and ensuring incoming packets belong to established, recognized connections.",
    "memoryTip": "Stateful Firewalls = Track TCP 3-way handshake & connection state table."
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
      {
        "id": "A",
        "text": "Virus"
      },
      {
        "id": "B",
        "text": "Unzip"
      },
      {
        "id": "C",
        "text": "Spam"
      },
      {
        "id": "D",
        "text": "URL"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Spam refers to unsolicited, bulk-distributed electronic communications sent via email, SMS, or social media to millions of recipients without their consent.",
    "memoryTip": "Unsolicited bulk messages = Spam."
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
      {
        "id": "A",
        "text": "Reliability"
      },
      {
        "id": "B",
        "text": "Productivity"
      },
      {
        "id": "C",
        "text": "Abstraction"
      },
      {
        "id": "D",
        "text": "All of these"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Abstraction is a core architectural pillar of cloud computing: it hides the background complexities of physical hardware, server locations, storage fabrics, and system administration, exposing only clean APIs and interfaces to the consumer.",
    "memoryTip": "Hiding background hardware details = Abstraction."
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
      {
        "id": "A",
        "text": "Distributed Computing"
      },
      {
        "id": "B",
        "text": "Cloud Computing"
      },
      {
        "id": "C",
        "text": "Soft Computing"
      },
      {
        "id": "D",
        "text": "Parallel Computing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing is the on-demand availability of computer system resources (especially data storage and computing power) running on a distributed network of virtualized hardware over the internet.",
    "memoryTip": "Virtualized on-demand computing over distributed network = Cloud Computing."
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
      {
        "id": "A",
        "text": "The Internet"
      },
      {
        "id": "B",
        "text": "Desktop Software"
      },
      {
        "id": "C",
        "text": "Web Services"
      },
      {
        "id": "D",
        "text": "All of the mentioned"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Internet itself provided the initial distributed networking, shared routing, universal addressing, and client-server protocols that paved the way for modern cloud computing platforms.",
    "memoryTip": "The Internet is the foundational backbone that gave rise to Cloud Computing."
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
        "text": "All of the above"
      }
    ],
    "correctAnswer": "D",
    "explanation": "NIST formally defines four cloud deployment models: Public Cloud (available to general public), Private Cloud (exclusive to one organization), Community Cloud (shared among organizations with common goals), and Hybrid Cloud (combination of two or more models).",
    "memoryTip": "4 Cloud Deployment Models = Public, Private, Community, Hybrid."
  },
  {
    "id": "pyq-49",
    "tier": 5,
    "tierName": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure",
    "topic": "Cloud Service Models",
    "subtopic": "Resource Pooling & Virtualization",
    "difficulty": "Easy",
    "question": "Which cloud computing concept is specifically related to the pooling and dynamic sharing of physical hardware resources?",
    "options": [
      {
        "id": "A",
        "text": "Polymorphism"
      },
      {
        "id": "B",
        "text": "Abstraction"
      },
      {
        "id": "C",
        "text": "Virtualization"
      },
      {
        "id": "D",
        "text": "Encapsulation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Virtualization (via hypervisors) abstracts physical servers, storage, and networking, allowing physical capacity to be pooled and partitioned into isolated virtual machines and containers shared dynamically among multiple tenants.",
    "memoryTip": "Hardware pooling and multi-tenancy = Virtualization (Hypervisors)."
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
      {
        "id": "A",
        "text": "Stateless"
      },
      {
        "id": "B",
        "text": "Stateful"
      },
      {
        "id": "C",
        "text": "Monolithic"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctAnswer": "A",
    "explanation": "HTTP is inherently a stateless protocol: every client request is processed independently without the server retaining session context across separate transactions. This stateless design allows cloud services to scale out horizontally with ease.",
    "memoryTip": "HTTP and cloud service scaling = Stateless (requests handled independently)."
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
      {
        "id": "A",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "D",
        "text": "All of the mentioned"
      }
    ],
    "correctAnswer": "D",
    "explanation": "SaaS, PaaS, and IaaS form the canonical 'SPI' trinity of cloud service models, established by NIST and widely recognized across all cloud computing literature and industry benchmarks.",
    "memoryTip": "SPI Trinity = SaaS, PaaS, and IaaS."
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
      {
        "id": "A",
        "text": "Sourcing (Strategic Outsourcing)"
      },
      {
        "id": "B",
        "text": "Ownership"
      },
      {
        "id": "C",
        "text": "Reliability"
      },
      {
        "id": "D",
        "text": "Hardware Depreciation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cloud computing represents a shift from internal asset 'Ownership' to 'Sourcing' (external service acquisition). It converts large upfront Capital Expenditures (CapEx) into pay-as-you-go Operating Expenditures (OpEx).",
    "memoryTip": "Cloud replaces asset ownership with on-demand service Sourcing."
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
      {
        "id": "A",
        "text": "Compliance as a Service"
      },
      {
        "id": "B",
        "text": "Computer as a Service"
      },
      {
        "id": "C",
        "text": "Containers as a Service"
      },
      {
        "id": "D",
        "text": "Communication as a Service"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Containers as a Service (CaaS) is a cloud model that allows users to manage and deploy containerized applications using container-based virtualization, orchestration (like Kubernetes), and clustering engines.",
    "memoryTip": "CaaS = Containers as a Service (Docker / Kubernetes orchestration)."
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
    "correctAnswer": "A",
    "explanation": "A Public Cloud is owned and operated by a third-party cloud service provider (e.g., AWS, Microsoft, Google) that delivers computing resources across the public internet to any paying individual or business.",
    "memoryTip": "Commercial provider selling to public = Public Cloud (AWS, Azure, GCP)."
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
      {
        "id": "A",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "D",
        "text": "All have equal built-in security"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In IaaS, the cloud provider only secures physical facilities, hardware, and hypervisors. The customer is responsible for guest operating system security, OS patches, antivirus, firewall configurations, middleware, and application code.",
    "memoryTip": "Lowest vendor-managed security (customer secures OS) = IaaS | Highest vendor security = SaaS."
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
      {
        "id": "A",
        "text": "Accessing hardware resources remotely"
      },
      {
        "id": "B",
        "text": "Configuring software and systems remotely"
      },
      {
        "id": "C",
        "text": "Manipulating computing resources dynamically over the network"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Cloud computing allows users to access, configure, and manipulate computing resources (servers, databases, networks, software) dynamically and remotely over the internet on a self-service basis.",
    "memoryTip": "Cloud = Access + Configure + Manipulate hardware & software remotely."
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
      {
        "id": "A",
        "text": "Private Cloud"
      },
      {
        "id": "B",
        "text": "Public Cloud"
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
    "correctAnswer": "C",
    "explanation": "A Community Cloud is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., regulatory compliance, mission objectives, security requirements).",
    "memoryTip": "Shared by specific group of organizations = Community Cloud."
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
      {
        "id": "A",
        "text": "Transformation Plan development"
      },
      {
        "id": "B",
        "text": "IT Architecture development"
      },
      {
        "id": "C",
        "text": "Business architecture development"
      },
      {
        "id": "D",
        "text": "Cloud provider selection"
      }
    ],
    "correctAnswer": "A",
    "explanation": "During the Deployment Phase, organizations execute the Transformation Plan: migrating data, configuring cloud environments, cutover execution, parallel validation, and decommissioning legacy assets.",
    "memoryTip": "Deployment Phase = Transformation & Migration Plan Execution."
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
      {
        "id": "A",
        "text": "Microsoft Azure"
      },
      {
        "id": "B",
        "text": "Amazon EC2 / AWS"
      },
      {
        "id": "C",
        "text": "IBM Deep Blue"
      },
      {
        "id": "D",
        "text": "Google Cloud Platform"
      }
    ],
    "correctAnswer": "C",
    "explanation": "IBM Deep Blue was a specialized chess-playing supercomputer developed by IBM in the 1990s that defeated Garry Kasparov; it is not a modern cloud computing platform. Azure, AWS, and GCP are the leading cloud platforms.",
    "memoryTip": "IBM Deep Blue = 1990s Chess Supercomputer, NOT a cloud platform."
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
      {
        "id": "A",
        "text": "Thin Provisioning"
      },
      {
        "id": "B",
        "text": "Thick Provisioning"
      },
      {
        "id": "C",
        "text": "Flat Provisioning"
      },
      {
        "id": "D",
        "text": "Full Provisioning"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Thin Provisioning allocates physical disk space only when data is actually written to the drive, optimizing storage utilization. Thick provisioning reserves the entire capacity immediately upon volume creation.",
    "memoryTip": "Allocate storage on-demand as data is written = Thin Provisioning | Reserve all upfront = Thick Provisioning."
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
      {
        "id": "A",
        "text": "Network Bridge"
      },
      {
        "id": "B",
        "text": "Passive Hub"
      },
      {
        "id": "C",
        "text": "Analog Modem"
      },
      {
        "id": "D",
        "text": "Repeater"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Network Bridge operates at the Data Link Layer (Layer 2) to filter and forward frame traffic between two distinct physical network segments (like Ethernet and Token Ring), translating frame formats where necessary.",
    "memoryTip": "Connects and filters between two LAN segments (Token Ring & Ethernet) = Network Bridge."
  }
];

export const importantOptionExplanationsMap = {
  "pyq-1": {
    "A": "Data Link Layer operates at Layer 2 and encapsulates packets into frames using physical MAC addresses.",
    "B": "Correct! The Network Layer (Layer 3) adds the logical IP addresses of both the sender and the receiver.",
    "C": "Transport Layer operates at Layer 4 and manages end-to-end host transport, segments, and port addresses.",
    "D": "Session Layer operates at Layer 5 and establishes, manages, and terminates interactive connections between applications."
  },
  "pyq-2": {
    "A": "Google Workspace is indeed a SaaS suite, but Dropbox and Salesforce also belong to this category.",
    "B": "Dropbox is a consumer and enterprise cloud storage application delivered entirely as SaaS.",
    "C": "Salesforce is the pioneer of multi-tenant enterprise CRM software delivered over the web as SaaS.",
    "D": "Correct! Google Workspace, Dropbox, and Salesforce are all industry-standard SaaS cloud applications."
  },
  "pyq-3": {
    "A": "Correct! IaaS gives customers complete administrative control over the guest OS, file system, storage volumes, and application stacks.",
    "B": "PaaS abstracts away OS management and server maintenance, only providing runtime environments for deploying source code.",
    "C": "SaaS provides a completed application with zero access to underlying operating system or server configurations.",
    "D": "DBaaS specifically provisions managed database engines, not full operating system and infrastructure stacks."
  },
  "pyq-4": {
    "A": "Smurfing is a network-layer DDoS attack using spoofed broadcast ICMP echo requests to overwhelm a victim's bandwidth.",
    "B": "Denial of Service is the broad umbrella category, but 'E-mail Bombing' is the specific attack vector tested here.",
    "C": "Correct! E-mail Bombing specifically refers to flooding an email account with massive numbers of unsolicited messages.",
    "D": "A Ping storm or flood sends continuous ICMP echo request packets to crash a target host or network link."
  },
  "pyq-5": {
    "A": "Smurfing employs spoofing as a sub-technique, but Smurfing is the entire ICMP broadcast flood mechanism.",
    "B": "A Trojan is a malicious program masquerading as useful software to trick users into installing it.",
    "C": "E-mail bombing is flooding a mailbox with spam, not forging network-layer packet headers.",
    "D": "Correct! Spoofing is the exact term for forging a packet's sender identity to deceive the receiver."
  },
  "pyq-6": {
    "A": "Notepad is a plain text editor incapable of executing network HTTP requests or rendering HTML layouts.",
    "B": "Adobe Acrobat is dedicated software for reading, editing, and converting PDF documents.",
    "C": "Google Drive is a cloud file storage and sharing platform, not a standalone web browser application.",
    "D": "Correct! A web browser is the software application engineered specifically to view and interact with web pages."
  },
  "pyq-7": {
    "A": "USB (Universal Serial Bus) is a physical hardware interface standard for cables and peripherals.",
    "B": "Correct! Git is the world's most widely adopted distributed version control system for source code management.",
    "C": "HTTP is a network protocol for transmitting web hypermedia, not a source code revision tool.",
    "D": "SSL is a deprecated cryptographic protocol replaced by TLS for securing network communications."
  },
  "pyq-8": {
    "A": "FTP operates at the Application Layer (Port 20/21) to transfer files between clients and servers.",
    "B": "ARP operates between the Network and Data Link layers to map IP addresses to MAC hardware addresses.",
    "C": "Correct! UDP (User Datagram Protocol) is a core transport-layer protocol providing fast, connectionless datagram delivery.",
    "D": "DNS is an Application Layer protocol that translates domain names into numerical IP addresses."
  },
  "pyq-9": {
    "A": "Immediately shutting down servers eliminates rollback options and can cause permanent service failure if unvalidated.",
    "B": "Moving all data in one unmonitored bulk run risks bandwidth exhaustion, corruption, and massive outages.",
    "C": "Migrating secretly without stakeholder notice violates governance and leaves operational teams unprepared.",
    "D": "Correct! A comprehensive migration plan with rigorous backups and parallel validation testing ensures minimal downtime."
  },
  "pyq-10": {
    "A": "Correct! Google Chrome and all Chromium-based browsers use the Blink rendering engine.",
    "B": "Mozilla Firefox uses the Gecko open-source layout engine developed by Mozilla.",
    "C": "Apple Safari uses the WebKit layout engine developed primarily by Apple.",
    "D": "Internet Explorer 11 used Microsoft's legacy Trident (MSHTML) rendering engine."
  },
  "pyq-11": {
    "A": "Incorrect. 'Hyperlink' is wrong; HTTP specifies 'Hypertext' (structured documents with links).",
    "B": "Incorrect. 'Transmission' is incorrect; the official specification is 'Transfer'.",
    "C": "Incorrect. 'Procedure' is incorrect; it is a standardized communication 'Protocol'.",
    "D": "Correct! HTTP stands for Hypertext Transfer Protocol, the foundational protocol of the World Wide Web."
  },
  "pyq-12": {
    "A": "Correct! A network switch is an intermediate forwarding device in the network core, not an edge host.",
    "B": "A PC is an end system located at the network edge where user applications originate traffic.",
    "C": "A smartphone is an edge client device connecting to wireless networks.",
    "D": "Servers are host machines situated at the network edge providing application services to clients."
  },
  "pyq-13": {
    "A": "Correct! LAN (Local Area Network) covers localized areas like a building, home, or office campus.",
    "B": "MAN (Metropolitan Area Network) covers a larger geographic footprint spanning an entire city or metropolitan region.",
    "C": "WAN (Wide Area Network) spans broad geographic distances connecting cities, countries, or the entire globe (e.g., the Internet).",
    "D": "PAN (Personal Area Network) covers the immediate vicinity of an individual person (typically within 10 meters, e.g., Bluetooth)."
  },
  "pyq-14": {
    "A": "Application Layer (Layer 7) provides network interfaces directly for user software (HTTP, SMTP, FTP).",
    "B": "Session Layer (Layer 5) establishes and synchronizes dialogues between applications.",
    "C": "Correct! The Transport Layer (Layer 4) guarantees complete, error-free end-to-end message delivery with automatic retransmissions.",
    "D": "Data Link Layer (Layer 2) provides hop-to-hop frame error detection across physical links, but not end-to-end message retransmission."
  },
  "pyq-15": {
    "A": "Secure encrypted communication is provided by cryptographic protocols like TLS, SSL, and IPsec.",
    "B": "Correct! The primary responsibility of DNS is mapping human-readable hostnames to routable IP addresses.",
    "C": "File transfers are managed by file protocols like FTP, SFTP, or TFTP.",
    "D": "Monitoring network traffic is the role of Intrusion Detection Systems (IDS) and network packet analyzers."
  },
  "pyq-16": {
    "A": "Azure is the enterprise cloud platform developed and operated by Microsoft.",
    "B": "Correct! AWS (Amazon Web Services) is the public cloud computing platform created by Amazon.",
    "C": "Cloudera is an enterprise big data and machine learning software company, not Amazon's cloud platform.",
    "D": "Google Cloud Platform (GCP) is the public cloud infrastructure developed by Alphabet / Google."
  },
  "pyq-17": {
    "A": "Correct! The web browser is the primary client-side front-end interface through which users interact with cloud services.",
    "B": "Google Compute Engine is an IaaS virtual machine service residing strictly in the cloud back-end.",
    "C": "Cisco Metapod is an on-premises OpenStack private cloud back-end infrastructure.",
    "D": "AWS S3 is an object storage service residing in the cloud infrastructure back-end."
  },
  "pyq-18": {
    "A": "Congestion control is a recognized network layer function designed to throttle packet injection when router queues fill up.",
    "B": "Correct! End-to-end error control and retransmission is handled by the Transport Layer (Layer 4), not the Network Layer.",
    "C": "Routing is the single most defining responsibility of the Network Layer.",
    "D": "Internetworking connects different logical subnetworks across routers, which is a core Layer 3 objective."
  },
  "pyq-19": {
    "A": "Correct! A router connects different networks and forwards data packets along optimal paths using destination IP addresses.",
    "B": "Document formatting is an application-level word processing function, not a hardware networking task.",
    "C": "Database storage is performed by dedicated database servers and Storage Area Networks (SANs).",
    "D": "Printing documents is handled by print servers and local peripheral printers."
  },
  "pyq-20": {
    "A": "SMTP (Simple Mail Transfer Protocol) is used exclusively for transmitting outgoing emails between mail servers.",
    "B": "ARP resolves a known IP address to a physical MAC address; it does not assign IP addresses to hosts.",
    "C": "Correct! DHCP (Dynamic Host Configuration Protocol) dynamically allocates network-layer IP addresses to client hosts.",
    "D": "ICMP (Internet Control Message Protocol) sends error messages and operational information like ping and traceroute."
  },
  "pyq-21": {
    "A": "Correct! Google Compute Engine provides virtual machines running in Google's data centers, making it a pure IaaS service.",
    "B": "Google App Engine is a Platform as a Service (PaaS) product where developers deploy code without managing servers.",
    "C": "Google Classroom is an educational web application delivered as Software as a Service (SaaS).",
    "D": "Incorrect, because Google App Engine (PaaS) and Google Classroom (SaaS) are distinct non-IaaS models."
  },
  "pyq-22": {
    "A": "Correct! 1 matches A (SaaS = Microsoft 365), 2 matches B (PaaS = Magento/App Engine), and 3 matches C (IaaS = Compute Engine).",
    "B": "Incorrect. Microsoft 365 is an end-user application suite (SaaS), not a platform for custom code compilation (PaaS).",
    "C": "Incorrect. Google Compute Engine is pure infrastructure (IaaS), not a developer platform (PaaS).",
    "D": "Incorrect. Google Compute Engine provides virtual hardware (IaaS), not software application service (SaaS)."
  },
  "pyq-23": {
    "A": "Scalability is one of the greatest benefits of the cloud, not a primary deterrent or area of concern.",
    "B": "Storage capacity is effectively infinite and cost-elastic in the cloud.",
    "C": "Correct! Security, compliance, and confidentiality represent the highest risk and primary concern for enterprise cloud adoption.",
    "D": "Network speed and high-throughput connections are widely managed through CDNs and direct interconnects."
  },
  "pyq-24": {
    "A": "Two phases omit the formal strategic business alignment required before technical architecture.",
    "B": "Correct! Enterprise cloud planning is formally divided into three distinct phases: Strategy Phase, Planning Phase, and Deployment Phase.",
    "C": "Four phases often split deployment into post-ops, but the standard Accenture framework identifies 3 major phases.",
    "D": "Five phases is common in general software engineering SDLC, but cloud adoption planning groups into 3 core phases."
  },
  "pyq-25": {
    "A": "On-Demand Self-Service enables consumers to provision computing capabilities automatically without requiring human interaction with the service provider.",
    "B": "Correct! Broad Network Access guarantees capabilities can be reached from anywhere via standardized protocols across any client device.",
    "C": "Resource Pooling is the multi-tenant pooling of physical and virtual resources to serve multiple customers dynamically.",
    "D": "Rapid Elasticity allows resources to be elastically provisioned and released to scale outward and inward based on demand."
  },
  "pyq-26": {
    "A": "Correct! The 'Cloud' layer encompasses all server infrastructure, virtualization layers, and storage that comprise the backend.",
    "B": "'Soft' is a distractor and not a formal architectural layer in cloud computing standards.",
    "C": "Client is the front-end layer through which users access and view cloud services.",
    "D": "Incorrect, as only the cloud infrastructure serves as the backend architecture."
  },
  "pyq-27": {
    "A": "Correct! The OSI model provides an international standardized architecture that breaks down complex network communications into 7 distinct functional layers.",
    "B": "Physical cabling color standards are specified by standards bodies like TIA/EIA (e.g., T568A/B), not the OSI conceptual model.",
    "C": "Configuring network hardware is a vendor-specific administrative task, not the conceptual role of the OSI model.",
    "D": "Data encryption is a cryptographic process handled at layers 6 and 7 (or layer 3 via IPsec), not the core purpose of the model itself."
  },
  "pyq-28": {
    "A": "Physical Layer (Layer 1) transmits raw unstructured bit streams across physical mediums (cables, radio waves).",
    "B": "Data Link Layer (Layer 2) handles node-to-node frame delivery within the same local network using MAC addresses.",
    "C": "Correct! The Network Layer (Layer 3) determines optimal paths and routes packets across different interconnected subnets.",
    "D": "Transport Layer (Layer 4) handles end-to-end communication, segmentation, flow control, and reliability."
  },
  "pyq-29": {
    "A": "A single isolated computer has no communication links and does not constitute a network.",
    "B": "Correct! A computer network consists of two or more interconnected computers that exchange information and share resources.",
    "C": "A standalone hard drive is an external storage peripheral, not a computer network.",
    "D": "A word processor is an application software program used for drafting documents."
  },
  "pyq-30": {
    "A": "Class A covers first octets 1 through 126 (e.g., 10.0.0.1) with default mask 255.0.0.0.",
    "B": "Class B covers first octets 128 through 191 (e.g., 172.16.0.1) with default mask 255.255.0.0.",
    "C": "Class C covers first octets 192 through 223 (e.g., 192.168.1.1) with default mask 255.255.255.0.",
    "D": "Correct! 225 falls into the Class D range (224.0.0.0 to 239.255.255.255), which is reserved for IP multicasting."
  },
  "pyq-31": {
    "A": "Correct! Subnetting partitions a large network into smaller segments to minimize broadcast traffic, boost routing speed, and isolate security zones.",
    "B": "Subnetting operates purely at the logical addressing layer and does not encrypt packet payloads.",
    "C": "Establishing physical connections is done using physical media and layer 1/2 switching gear.",
    "D": "Subnetting has no influence on the raw physical propagation speed of electromagnetic signals."
  },
  "pyq-32": {
    "A": "Correct! Public IP addresses are globally unique, publicly accessible, and routable across the worldwide internet.",
    "B": "Private IP addresses are reserved for internal local networks and are non-routable on the public internet.",
    "C": "Loopback addresses (127.0.0.1) are reserved for a host to send network packets back to itself internally.",
    "D": "A default gateway is the IP address of the local router interface that provides an exit point out of the local subnet."
  },
  "pyq-33": {
    "A": "Correct! Star topology connects each node to a central hub or switch via a dedicated cable.",
    "B": "Bus topology connects all devices sequentially along a single common shared backbone cable.",
    "C": "Ring topology connects every node to exactly two neighbor nodes forming a closed circular data loop.",
    "D": "Mesh topology features point-to-point connections between every pair of nodes in the network."
  },
  "pyq-34": {
    "A": "HTTP transmits plain-text web content without encryption (replaced by HTTPS).",
    "B": "FTP transfers files in plaintext, exposing usernames and passwords in clear text over the wire.",
    "C": "Correct! SSH (Secure Shell) encrypts all traffic, providing secure remote terminal login and secure file transfer (SFTP).",
    "D": "SMTP is used exclusively for electronic mail transfer between mail transfer agents."
  },
  "pyq-35": {
    "A": "Statement 1 is true, but Statement 2 is also true, making option C the complete answer.",
    "B": "Statement 2 is true, but Statement 1 is also true, making option C the complete answer.",
    "C": "Correct! Modems use telephone/cable lines and stand for Modulator-Demodulator (Both 1 and 2 are true).",
    "D": "Incorrect, since statements 1 and 2 are factually accurate descriptions of modem technology."
  },
  "pyq-36": {
    "A": "Correct! A router reads logical network addresses to forward packets across different subnets and network boundaries.",
    "B": "A switch operates at Layer 2 to forward frames between devices on the same local area network.",
    "C": "A hub is a legacy Layer 1 multiport repeater that blindly broadcasts incoming signals to all ports.",
    "D": "A modem modulates and demodulates analog and digital signals across telecommunication carriers."
  },
  "pyq-37": {
    "A": "A query string begins with a question mark '?' and provides key-value parameters (e.g., ?user=123).",
    "B": "Correct! The segment '/commercial/' represents the directory path on the web server holding the resource.",
    "C": "The TLD (Top-Level Domain) is the suffix at the end of the domain name (e.g., '.com', '.org', '.edu').",
    "D": "The host/subdomain identifies the specific server host (e.g., 'www' or 'blog')."
  },
  "pyq-38": {
    "A": "A logic bomb is malicious code deliberately inserted into a software system to execute when specific conditions are met.",
    "B": "'Circuit Patch' is an invalid networking distractor.",
    "C": "Software patches are code updates applied to fix bugs or security vulnerabilities in installed applications.",
    "D": "Correct! A proxy server hides the true client IP address from external servers and filters all inbound and outbound traffic."
  },
  "pyq-39": {
    "A": "Correct! A Macro Virus infects documents and templates associated with applications like Microsoft Office.",
    "B": "A Boot Sector virus infects the Master Boot Record (MBR) or boot partition of hard drives to run before the OS loads.",
    "C": "A File virus infects executable binary files (e.g., .EXE or .COM files).",
    "D": "Antivirus is defensive security software designed to detect, quarantine, and eliminate computer malware."
  },
  "pyq-40": {
    "A": "Spyware is malicious software that secretly gathers user information and transmits it to third parties.",
    "B": "A browser cookie is a small data file stored by web browsers to remember user state and sessions.",
    "C": "Spam refers to unsolicited junk messages sent in bulk over email or messaging platforms.",
    "D": "Correct! A firewall is the primary security gatekeeper controlling network packet traffic according to defined rules."
  },
  "pyq-41": {
    "A": "A computer virus is written in code and executed by the CPU; it is not a physical hardware component.",
    "B": "Correct! A computer virus is a piece of malicious software (malware) engineered to replicate and modify files.",
    "C": "Bacteria are biological organisms; computer viruses are purely digital software constructs.",
    "D": "Freeware refers to legitimate proprietary software that is made available to users at no financial cost."
  },
  "pyq-42": {
    "A": "Correct! A virus specifically executes and replicates by infecting other legitimate programs and host binaries.",
    "B": "Spam refers to junk messages, not self-replicating executable binary code.",
    "C": "Spyware covertly spies on user actions without necessarily infecting or altering other application executables.",
    "D": "Adware displays advertising popups and banners, usually without self-replicating code."
  },
  "pyq-43": {
    "A": "Application layer filtering operates at Layer 7 (proxy firewalls), not the defining TCP state mechanism of 4th-gen SPI.",
    "B": "Correct! Stateful firewalls maintain a state table tracking the TCP handshake and verify if packets belong to valid active sessions.",
    "C": "Physical cable characteristics reside at Layer 1 and are not monitored by stateful firewalls.",
    "D": "BIOS boot sequence is a motherboard firmware process independent of network firewall filtering."
  },
  "pyq-44": {
    "A": "A virus is malicious executable code, whereas spam is unwanted bulk text/email communication.",
    "B": "Unzip is a utility command used to decompress compressed archive files.",
    "C": "Correct! Spam is the universal term for unsolicited, bulk electronic messages.",
    "D": "A URL (Uniform Resource Locator) is the web address used to locate a resource on the internet."
  },
  "pyq-45": {
    "A": "Reliability is an important service quality (SLA) benefit, but abstraction is the core architectural mechanism.",
    "B": "Productivity is an outcome of cloud adoption, not the technical concept that hides underlying hardware.",
    "C": "Correct! Abstraction allows users to consume compute and storage without knowledge of where or on what hardware it runs.",
    "D": "Incorrect, as 'Abstraction' is the specific theoretical concept cited by Accenture for concealing implementation details."
  },
  "pyq-46": {
    "A": "Distributed computing is a general academic paradigm where components located on networked computers coordinate actions.",
    "B": "Correct! Cloud Computing delivers on-demand computing services and applications over a network using virtualized resources.",
    "C": "Soft computing refers to computational techniques (fuzzy logic, neural nets) that tolerate imprecision.",
    "D": "Parallel computing involves carrying out many programmatic calculations simultaneously across multiple processor cores."
  },
  "pyq-47": {
    "A": "Correct! The Internet embodied the ubiquitous connectivity and distributed resource sharing that evolved into modern cloud computing.",
    "B": "Desktop software was traditionally isolated and locally installed on standalone single-user machines.",
    "C": "Web services are an application protocol layer, but the Internet was the overarching infrastructure precursor.",
    "D": "Incorrect, since 'The Internet' is the historical foundational entity tested in this Accenture item."
  },
  "pyq-48": {
    "A": "Public cloud is a valid deployment model where infrastructure is open for public use.",
    "B": "Private cloud is a valid deployment model provisioned for exclusive use by a single organization.",
    "C": "Hybrid cloud is a valid deployment model bridging private and public cloud infrastructures.",
    "D": "Correct! Public, Private, Community, and Hybrid clouds are all standardized cloud deployment models."
  },
  "pyq-49": {
    "A": "Polymorphism is an Object-Oriented Programming (OOP) feature, not a cloud hardware concept.",
    "B": "Abstraction hides complexity behind interfaces, but Virtualization is the specific mechanism enabling resource pooling.",
    "C": "Correct! Virtualization is the core enabling technology that pools physical computing resources and provisions them elastically.",
    "D": "Encapsulation is an OOP principle binding code and data together while hiding internal states."
  },
  "pyq-50": {
    "A": "Correct! Standard cloud web protocols (HTTP/REST) are stateless, requiring each request to carry complete authentication and contextual information.",
    "B": "Stateful architectures bind clients to specific servers, which impairs horizontal elasticity and dynamic load balancing.",
    "C": "Monolithic systems combine all tiers into a single codebase, the opposite of modular cloud microservices.",
    "D": "Incorrect, because stateless and stateful are mutually exclusive operating paradigms."
  },
  "pyq-51": {
    "A": "SaaS is the most visible to end consumers, but PaaS and IaaS are equally foundational cloud service models.",
    "B": "PaaS is the developer platform model (e.g., Heroku, Elastic Beanstalk).",
    "C": "IaaS provides raw virtualized hardware instances (e.g., AWS EC2, GCE).",
    "D": "Correct! SaaS, PaaS, and IaaS together represent the best-known and universally recognized cloud service models."
  },
  "pyq-52": {
    "A": "Correct! Cloud computing shifts IT from physical asset ownership to service sourcing.",
    "B": "Ownership is the traditional legacy model where an enterprise purchases and maintains physical servers.",
    "C": "Reliability is an engineering metric, not the procurement model describing service acquisition.",
    "D": "Hardware depreciation applies to purchased on-premises physical equipment, which cloud avoids."
  },
  "pyq-53": {
    "A": "Compliance as a Service refers to regulatory audit tools, not the primary cloud container acronym.",
    "B": "Computer as a Service is an incorrect distractor; computing is delivered via IaaS.",
    "C": "Correct! CaaS stands for Containers as a Service, providing automated container orchestration in the cloud.",
    "D": "Communication as a Service typically relates to telecom VoIP/messaging (UCaaS)."
  },
  "pyq-54": {
    "A": "Correct! A public cloud is owned and operated by a commercial vendor and available for public subscription.",
    "B": "A private cloud is dedicated exclusively to a single business organization.",
    "C": "A community cloud is jointly owned and accessed by a specific group of organizations with shared requirements.",
    "D": "A hybrid cloud connects two or more distinct clouds (e.g., private and public)."
  },
  "pyq-55": {
    "A": "SaaS providers manage nearly all security layers up to the application, requiring customers only to secure user credentials.",
    "B": "PaaS providers manage the underlying OS and runtime security, leaving customers responsible for application code and data.",
    "C": "Correct! IaaS has the lowest level of built-in security managed by the provider, placing maximum security responsibility on the customer.",
    "D": "Incorrect, because the shared responsibility model delineates distinct security boundaries across IaaS, PaaS, and SaaS."
  },
  "pyq-56": {
    "A": "Remote hardware access is a foundational feature of cloud virtualization.",
    "B": "Remote programmatic configuration via APIs or consoles is standard in cloud automation.",
    "C": "Dynamic manipulation and scaling of resources over the network defines cloud elasticity.",
    "D": "Correct! Cloud computing encompasses all of the above: accessing, configuring, and manipulating hardware and software remotely."
  },
  "pyq-57": {
    "A": "A private cloud is provisioned for the exclusive use of a single organization, not shared among multiple entities.",
    "B": "A public cloud is open for multi-tenant consumption by any individual or business in the general public.",
    "C": "Correct! A community cloud is shared specifically by a consortium of organizations with common regulatory or mission goals.",
    "D": "A hybrid cloud bridges two or more distinct deployment models (e.g., on-premises private and public cloud)."
  },
  "pyq-58": {
    "A": "Correct! Developing and executing the Transformation Plan is the core step of the Deployment Phase in cloud migration.",
    "B": "IT architecture development is carried out during the preceding Planning Phase.",
    "C": "Business architecture development occurs early in the Strategy Phase to determine ROI and business objectives.",
    "D": "Cloud provider selection is finalized during the Planning Phase before deployment starts."
  },
  "pyq-59": {
    "A": "Microsoft Azure is the second-largest enterprise cloud hyperscaler in the world.",
    "B": "Amazon EC2 (Elastic Compute Cloud) is the foundational IaaS service of Amazon Web Services.",
    "C": "Correct! IBM Deep Blue is an iconic 1990s chess supercomputer, not an enterprise cloud computing service.",
    "D": "Google Cloud Platform (GCP) is Google's major public cloud computing platform."
  },
  "pyq-60": {
    "A": "Correct! Thin provisioning allocates storage capacity flexibly on-demand as needed from a shared storage pool.",
    "B": "Thick provisioning pre-allocates and zeroes out the entire requested disk space at initial creation time.",
    "C": "Flat provisioning is not a recognized storage virtualization standard.",
    "D": "Full provisioning is synonymous with thick provisioning, allocating all physical sectors immediately."
  },
  "pyq-61": {
    "A": "Correct! A network bridge joins and forwards frames between different physical LAN segments (e.g., Token Ring and Ethernet).",
    "B": "A passive hub operates at Layer 1 and cannot translate different frame architectures or inspect MAC addresses.",
    "C": "An analog modem converts digital signals to analog audio for telephone transmission, not bridging local LAN frames.",
    "D": "A repeater operates at Layer 1 simply amplifying electrical signals across extended cable distances."
  }
};

export const filterImportantQuestions = ({ tier = 'all', topic = 'all' }) => {
  return importantQuestions.filter((q) => {
    const matchesTier = tier === 'all' || q.tier === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  });
};

export const getImportantOptionBreakdown = (questionId) => {
  return importantOptionExplanationsMap[questionId] || null;
};

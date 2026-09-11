# scratch/build_full_61_dataset.py
import json, sys

sys.stdout.reconfigure(encoding='utf-8')

raw_questions = [
  # -------------------------------------------------------------
  # TIER 1: OSI ARCHITECTURE & LAYER PROTOCOLS (Q1 - Q12)
  # -------------------------------------------------------------
  {
    "id": "pyq-1",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "OSI Reference Model",
    "subtopic": "Logical Addressing & Routing",
    "difficulty": "Easy",
    "question": "Which layer of the OSI model adds the logical address of the sender and receiver?",
    "options": [
      { "id": "A", "text": "Data Link Layer" },
      { "id": "B", "text": "Network Layer" },
      { "id": "C", "text": "Transport Layer" },
      { "id": "D", "text": "Session Layer" }
    ],
    "correctAnswer": "B",
    "explanation": "The Network Layer (Layer 3) handles logical addressing (IPv4/IPv6) and routing decisions between distinct networks. The Data Link layer handles physical MAC addresses, the Transport Layer manages port numbers, and the Session Layer manages communication sessions.",
    "memoryTip": "Network Layer = Logical IP Addressing | Data Link Layer = Physical MAC Addressing.",
    "breakdown": {
      "A": "Data Link Layer operates at Layer 2 and encapsulates packets into frames using physical MAC addresses.",
      "B": "Correct! The Network Layer (Layer 3) adds the logical IP addresses of both the sender and the receiver.",
      "C": "Transport Layer operates at Layer 4 and manages end-to-end host transport, segments, and port addresses.",
      "D": "Session Layer operates at Layer 5 and establishes, manages, and terminates interactive connections between applications."
    }
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
      { "id": "A", "text": "Google Workspace" },
      { "id": "B", "text": "Dropbox" },
      { "id": "C", "text": "Salesforce" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "D",
    "explanation": "Software as a Service (SaaS) delivers complete, turnkey software applications over the internet via a web browser. Google Workspace (Docs, Gmail), Dropbox (cloud storage), and Salesforce (CRM) are all premier examples of SaaS.",
    "memoryTip": "SaaS = Ready-to-use end-user software hosted in cloud (Google Workspace, Dropbox, Salesforce).",
    "breakdown": {
      "A": "Google Workspace is indeed a SaaS suite, but Dropbox and Salesforce also belong to this category.",
      "B": "Dropbox is a consumer and enterprise cloud storage application delivered entirely as SaaS.",
      "C": "Salesforce is the pioneer of multi-tenant enterprise CRM software delivered over the web as SaaS.",
      "D": "Correct! Google Workspace, Dropbox, and Salesforce are all industry-standard SaaS cloud applications."
    }
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
      { "id": "A", "text": "Infrastructure as a Service (IaaS)" },
      { "id": "B", "text": "Platform as a Service (PaaS)" },
      { "id": "C", "text": "Software as a Service (SaaS)" },
      { "id": "D", "text": "Database as a Service (DBaaS)" }
    ],
    "correctAnswer": "A",
    "explanation": "Infrastructure as a Service (IaaS) provides virtualized computing resources (VMs, storage, firewalls) where the customer retains root/administrative control over the OS, runtimes, middleware, and installed application software.",
    "memoryTip": "Full control over OS & storage = IaaS (AWS EC2, Google Compute Engine, Azure VMs).",
    "breakdown": {
      "A": "Correct! IaaS gives customers complete administrative control over the guest OS, file system, storage volumes, and application stacks.",
      "B": "PaaS abstracts away OS management and server maintenance, only providing runtime environments for deploying source code.",
      "C": "SaaS provides a completed application with zero access to underlying operating system or server configurations.",
      "D": "DBaaS specifically provisions managed database engines, not full operating system and infrastructure stacks."
    }
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
      { "id": "A", "text": "Smurfing" },
      { "id": "B", "text": "Denial of Service (DoS)" },
      { "id": "C", "text": "E-mail Bombing" },
      { "id": "D", "text": "Ping Storm" }
    ],
    "correctAnswer": "C",
    "explanation": "An Email Bomb is a malicious Denial of Service (DoS) technique where attackers direct thousands or millions of emails to a victim's email address to fill up mail storage, crash the mail server, or bury critical security notifications.",
    "memoryTip": "Overwhelming mailbox with junk emails = E-mail Bombing | ICMP broadcast amplification = Smurfing.",
    "breakdown": {
      "A": "Smurfing is a network-layer DDoS attack using spoofed broadcast ICMP echo requests to overwhelm a victim's bandwidth.",
      "B": "Denial of Service is the broad umbrella category, but 'E-mail Bombing' is the specific attack vector tested here.",
      "C": "Correct! E-mail Bombing specifically refers to flooding an email account with massive numbers of unsolicited messages.",
      "D": "A Ping storm or flood sends continuous ICMP echo request packets to crash a target host or network link."
    }
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
      { "id": "A", "text": "Smurfing" },
      { "id": "B", "text": "Trojan" },
      { "id": "C", "text": "E-mail Bombing" },
      { "id": "D", "text": "Spoofing" }
    ],
    "correctAnswer": "D",
    "explanation": "Spoofing is the act of falsifying packet header data (such as IP address, MAC address, or caller ID) to impersonate another legitimate device or disguise the true origin of unauthorized transmissions.",
    "memoryTip": "Falsifying sender identity in packets = Spoofing | Disguised malicious utility = Trojan.",
    "breakdown": {
      "A": "Smurfing employs spoofing as a sub-technique, but Smurfing is the entire ICMP broadcast flood mechanism.",
      "B": "A Trojan is a malicious program masquerading as useful software to trick users into installing it.",
      "C": "E-mail bombing is flooding a mailbox with spam, not forging network-layer packet headers.",
      "D": "Correct! Spoofing is the exact term for forging a packet's sender identity to deceive the receiver."
    }
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
      { "id": "A", "text": "Notepad" },
      { "id": "B", "text": "Adobe Acrobat" },
      { "id": "C", "text": "Google Drive" },
      { "id": "D", "text": "Web Browser (e.g., Internet Explorer / Chrome)" }
    ],
    "correctAnswer": "D",
    "explanation": "A web browser is a software application designed to request, interpret, and visually render HTML, CSS, JavaScript, and multimedia content retrieved from web servers over HTTP/HTTPS.",
    "memoryTip": "Web page gateway = Web Browser (Chrome, Safari, Edge, Firefox).",
    "breakdown": {
      "A": "Notepad is a plain text editor incapable of executing network HTTP requests or rendering HTML layouts.",
      "B": "Adobe Acrobat is dedicated software for reading, editing, and converting PDF documents.",
      "C": "Google Drive is a cloud file storage and sharing platform, not a standalone web browser application.",
      "D": "Correct! A web browser is the software application engineered specifically to view and interact with web pages."
    }
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
      { "id": "A", "text": "USB" },
      { "id": "B", "text": "Git" },
      { "id": "C", "text": "HTTP" },
      { "id": "D", "text": "SSL" }
    ],
    "correctAnswer": "B",
    "explanation": "Git is an open-source distributed version control system created by Linus Torvalds. It tracks file revisions, supports non-linear branching, and is used by over 90% of development teams worldwide.",
    "memoryTip": "Version Control System = Git | Transfer protocol = HTTP | Physical interface = USB.",
    "breakdown": {
      "A": "USB (Universal Serial Bus) is a physical hardware interface standard for cables and peripherals.",
      "B": "Correct! Git is the world's most widely adopted distributed version control system for source code management.",
      "C": "HTTP is a network protocol for transmitting web hypermedia, not a source code revision tool.",
      "D": "SSL is a deprecated cryptographic protocol replaced by TLS for securing network communications."
    }
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
      { "id": "A", "text": "FTP" },
      { "id": "B", "text": "ARP" },
      { "id": "C", "text": "UDP" },
      { "id": "D", "text": "DNS" }
    ],
    "correctAnswer": "C",
    "explanation": "The Transport Layer in the TCP/IP model contains TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). FTP and DNS operate at the Application layer, and ARP operates at the Network/Data Link interface.",
    "memoryTip": "Transport Layer Protocols = TCP (reliable) and UDP (connectionless).",
    "breakdown": {
      "A": "FTP operates at the Application Layer (Port 20/21) to transfer files between clients and servers.",
      "B": "ARP operates between the Network and Data Link layers to map IP addresses to MAC hardware addresses.",
      "C": "Correct! UDP (User Datagram Protocol) is a core transport-layer protocol providing fast, connectionless datagram delivery.",
      "D": "DNS is an Application Layer protocol that translates domain names into numerical IP addresses."
    }
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
      { "id": "A", "text": "Immediately shutting down the on-premise servers after the cloud migration" },
      { "id": "B", "text": "Transferring all the data to the cloud in a single unmonitored attempt" },
      { "id": "C", "text": "Carrying out the migration without informing key stakeholders" },
      { "id": "D", "text": "Creating a detailed migration plan that includes data backup and testing" }
    ],
    "correctAnswer": "D",
    "explanation": "Safe cloud migration requires careful discovery, comprehensive data backup, phased pilot testing, and failover validation before shutting down on-premises servers to prevent data loss and enterprise downtime.",
    "memoryTip": "Safe Migration = Plan -> Backup -> Pilot Test -> Validate -> Cutover.",
    "breakdown": {
      "A": "Immediately shutting down servers eliminates rollback options and can cause permanent service failure if unvalidated.",
      "B": "Moving all data in one unmonitored bulk run risks bandwidth exhaustion, corruption, and massive outages.",
      "C": "Migrating secretly without stakeholder notice violates governance and leaves operational teams unprepared.",
      "D": "Correct! A comprehensive migration plan with rigorous backups and parallel validation testing ensures minimal downtime."
    }
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
      { "id": "A", "text": "Google Chrome" },
      { "id": "B", "text": "Mozilla Firefox" },
      { "id": "C", "text": "Safari" },
      { "id": "D", "text": "Internet Explorer 11" }
    ],
    "correctAnswer": "A",
    "explanation": "Blink is an open-source browser rendering engine developed by Google as part of Chromium. It powers Google Chrome, Microsoft Edge, Opera, and Brave. Firefox uses Gecko, Safari uses WebKit, and Internet Explorer used Trident.",
    "memoryTip": "Chrome & modern Edge = Blink | Firefox = Gecko | Safari = WebKit | IE = Trident.",
    "breakdown": {
      "A": "Correct! Google Chrome and all Chromium-based browsers use the Blink rendering engine.",
      "B": "Mozilla Firefox uses the Gecko open-source layout engine developed by Mozilla.",
      "C": "Apple Safari uses the WebKit layout engine developed primarily by Apple.",
      "D": "Internet Explorer 11 used Microsoft's legacy Trident (MSHTML) rendering engine."
    }
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
      { "id": "A", "text": "Hyperlink Transfer Protocol" },
      { "id": "B", "text": "Hypertext Transmission Protocol" },
      { "id": "C", "text": "Hyperlink Transfer Procedure" },
      { "id": "D", "text": "Hypertext Transfer Protocol" }
    ],
    "correctAnswer": "D",
    "explanation": "HTTP stands for Hypertext Transfer Protocol. It is an application protocol that facilitates the transfer of hypermedia documents over the World Wide Web.",
    "memoryTip": "HTTP = Hypertext Transfer Protocol (Port 80) | HTTPS = HTTP Secure over TLS (Port 443).",
    "breakdown": {
      "A": "Incorrect. 'Hyperlink' is wrong; HTTP specifies 'Hypertext' (structured documents with links).",
      "B": "Incorrect. 'Transmission' is incorrect; the official specification is 'Transfer'.",
      "C": "Incorrect. 'Procedure' is incorrect; it is a standardized communication 'Protocol'.",
      "D": "Correct! HTTP stands for Hypertext Transfer Protocol, the foundational protocol of the World Wide Web."
    }
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
      { "id": "A", "text": "Switch" },
      { "id": "B", "text": "Personal Computer (PC)" },
      { "id": "C", "text": "SmartPhone" },
      { "id": "D", "text": "Server" }
    ],
    "correctAnswer": "A",
    "explanation": "Network edge devices are end-systems (hosts) that generate, process, and consume data (PCs, phones, IoT, servers). A switch is an intermediate forwarding node residing in the network core/distribution layer.",
    "memoryTip": "Network Edge = Hosts/PCs/Servers | Network Core = Switches/Routers.",
    "breakdown": {
      "A": "Correct! A network switch is an intermediate forwarding device in the network core, not an edge host.",
      "B": "A PC is an end system located at the network edge where user applications originate traffic.",
      "C": "A smartphone is an edge client device connecting to wireless networks.",
      "D": "Servers are host machines situated at the network edge providing application services to clients."
    }
  },

  # -------------------------------------------------------------
  # TIER 2: CLOUD COMPUTING MODELS & MIGRATION (Q13 - Q24)
  # -------------------------------------------------------------
  {
    "id": "pyq-13",
    "tier": 2,
    "tierName": "Tier 2 — Cloud Computing Models & Migration",
    "topic": "Network Topologies",
    "subtopic": "Local Area Networks",
    "difficulty": "Easy",
    "question": "What is the term for a data communication system confined within a single room, building, or college campus?",
    "options": [
      { "id": "A", "text": "LAN (Local Area Network)" },
      { "id": "B", "text": "MAN (Metropolitan Area Network)" },
      { "id": "C", "text": "WAN (Wide Area Network)" },
      { "id": "D", "text": "PAN (Personal Area Network)" }
    ],
    "correctAnswer": "A",
    "explanation": "A Local Area Network (LAN) spans a small geographical area such as an office room, home, building, or school campus, typically using Ethernet or Wi-Fi with high data transfer rates.",
    "memoryTip": "Building/Campus = LAN | City = MAN | Country/Global = WAN | Personal device range = PAN.",
    "breakdown": {
      "A": "Correct! LAN (Local Area Network) covers localized areas like a building, home, or office campus.",
      "B": "MAN (Metropolitan Area Network) covers a larger geographic footprint spanning an entire city or metropolitan region.",
      "C": "WAN (Wide Area Network) spans broad geographic distances connecting cities, countries, or the entire globe (e.g., the Internet).",
      "D": "PAN (Personal Area Network) covers the immediate vicinity of an individual person (typically within 10 meters, e.g., Bluetooth)."
    }
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
      { "id": "A", "text": "Application Layer" },
      { "id": "B", "text": "Session Layer" },
      { "id": "C", "text": "Transport Layer" },
      { "id": "D", "text": "Data Link Layer" }
    ],
    "correctAnswer": "C",
    "explanation": "The Transport Layer (Layer 4) is responsible for end-to-end message delivery, segmentation, flow control, and error recovery via protocols like TCP that send ACKs and retransmit lost segments.",
    "memoryTip": "End-to-end message integrity & retransmission = Transport Layer (Layer 4 - TCP).",
    "breakdown": {
      "A": "Application Layer (Layer 7) provides network interfaces directly for user software (HTTP, SMTP, FTP).",
      "B": "Session Layer (Layer 5) establishes and synchronizes dialogues between applications.",
      "C": "Correct! The Transport Layer (Layer 4) guarantees complete, error-free end-to-end message delivery with automatic retransmissions.",
      "D": "Data Link Layer (Layer 2) provides hop-to-hop frame error detection across physical links, but not end-to-end message retransmission."
    }
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
      { "id": "A", "text": "To provide secure encrypted communication" },
      { "id": "B", "text": "To resolve human-readable domain names to IP addresses" },
      { "id": "C", "text": "To transfer binary files between servers" },
      { "id": "D", "text": "To monitor network traffic for security anomalies" }
    ],
    "correctAnswer": "B",
    "explanation": "DNS translates user-friendly domain names (e.g., www.accenture.com) into numerical IP addresses (e.g., 20.103.85.33) so that routers can locate and connect devices across the internet.",
    "memoryTip": "DNS = The phonebook of the Internet (Name -> IP Address).",
    "breakdown": {
      "A": "Secure encrypted communication is provided by cryptographic protocols like TLS, SSL, and IPsec.",
      "B": "Correct! The primary responsibility of DNS is mapping human-readable hostnames to routable IP addresses.",
      "C": "File transfers are managed by file protocols like FTP, SFTP, or TFTP.",
      "D": "Monitoring network traffic is the role of Intrusion Detection Systems (IDS) and network packet analyzers."
    }
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
      { "id": "A", "text": "Azure" },
      { "id": "B", "text": "AWS (Amazon Web Services)" },
      { "id": "C", "text": "Cloudera" },
      { "id": "D", "text": "Google Cloud Platform" }
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Web Services (AWS) is Amazon's comprehensive cloud computing platform offering over 200 fully featured services globally. Microsoft develops Azure, and Google develops GCP.",
    "memoryTip": "Amazon = AWS | Microsoft = Azure | Google = GCP.",
    "breakdown": {
      "A": "Azure is the enterprise cloud platform developed and operated by Microsoft.",
      "B": "Correct! AWS (Amazon Web Services) is the public cloud computing platform created by Amazon.",
      "C": "Cloudera is an enterprise big data and machine learning software company, not Amazon's cloud platform.",
      "D": "Google Cloud Platform (GCP) is the public cloud infrastructure developed by Alphabet / Google."
    }
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
      { "id": "A", "text": "Web Browser" },
      { "id": "B", "text": "Google Compute Engine" },
      { "id": "C", "text": "Cisco Metapod" },
      { "id": "D", "text": "AWS S3 Storage Cluster" }
    ],
    "correctAnswer": "A",
    "explanation": "Cloud architecture is split into front-end and back-end. The front-end consists of client-side interfaces and applications (such as a web browser or client app) used to access cloud services. The back-end consists of servers, hypervisors, and data storage.",
    "memoryTip": "Cloud Front-End = Client web browser / mobile app | Cloud Back-End = Servers, databases, storage pools.",
    "breakdown": {
      "A": "Correct! The web browser is the primary client-side front-end interface through which users interact with cloud services.",
      "B": "Google Compute Engine is an IaaS virtual machine service residing strictly in the cloud back-end.",
      "C": "Cisco Metapod is an on-premises OpenStack private cloud back-end infrastructure.",
      "D": "AWS S3 is an object storage service residing in the cloud infrastructure back-end."
    }
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
      { "id": "A", "text": "Congestion Control" },
      { "id": "B", "text": "End-to-End Hop Error Control" },
      { "id": "C", "text": "Routing" },
      { "id": "D", "text": "Internetworking" }
    ],
    "correctAnswer": "B",
    "explanation": "The Network Layer handles packet routing, logical addressing, internetworking, and packet-level subnet congestion control. End-to-end error recovery and retransmission is primarily the job of the Transport Layer (Layer 4).",
    "memoryTip": "Network Layer = Routing, IP addressing, Congestion control | Error retransmission = Transport Layer.",
    "breakdown": {
      "A": "Congestion control is a recognized network layer function designed to throttle packet injection when router queues fill up.",
      "B": "Correct! End-to-end error control and retransmission is handled by the Transport Layer (Layer 4), not the Network Layer.",
      "C": "Routing is the single most defining responsibility of the Network Layer.",
      "D": "Internetworking connects different logical subnetworks across routers, which is a core Layer 3 objective."
    }
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
      { "id": "A", "text": "To connect multiple disparate networks and route packets toward their destination" },
      { "id": "B", "text": "To format text documents" },
      { "id": "C", "text": "To store enterprise database records" },
      { "id": "D", "text": "To print documents over a local area network" }
    ],
    "correctAnswer": "A",
    "explanation": "A router is a Layer 3 networking device that forwards data packets between computer networks. By examining IP routing tables, routers determine the optimal path for data to travel across interconnected subnets.",
    "memoryTip": "Router = Connects different networks & directs packets | Switch = Connects devices on same network.",
    "breakdown": {
      "A": "Correct! A router connects different networks and forwards data packets along optimal paths using destination IP addresses.",
      "B": "Document formatting is an application-level word processing function, not a hardware networking task.",
      "C": "Database storage is performed by dedicated database servers and Storage Area Networks (SANs).",
      "D": "Printing documents is handled by print servers and local peripheral printers."
    }
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
      { "id": "A", "text": "SMTP" },
      { "id": "B", "text": "ARP" },
      { "id": "C", "text": "DHCP" },
      { "id": "D", "text": "ICMP" }
    ],
    "correctAnswer": "C",
    "explanation": "Dynamic Host Configuration Protocol (DHCP) automatically assigns an IP address, subnet mask, default gateway, and DNS servers to client devices on a network using a 4-step DORA process (Discover, Offer, Request, Acknowledge).",
    "memoryTip": "DHCP = Automatically assigns IP addresses (DORA process).",
    "breakdown": {
      "A": "SMTP (Simple Mail Transfer Protocol) is used exclusively for transmitting outgoing emails between mail servers.",
      "B": "ARP resolves a known IP address to a physical MAC address; it does not assign IP addresses to hosts.",
      "C": "Correct! DHCP (Dynamic Host Configuration Protocol) dynamically allocates network-layer IP addresses to client hosts.",
      "D": "ICMP (Internet Control Message Protocol) sends error messages and operational information like ping and traceroute."
    }
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
      { "id": "A", "text": "Google Compute Engine (GCE)" },
      { "id": "B", "text": "Google App Engine (GAE)" },
      { "id": "C", "text": "Google Classroom" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "A",
    "explanation": "Google Compute Engine (GCE) provides raw virtual machines and storage (IaaS). Google App Engine is a Platform as a Service (PaaS), and Google Classroom is Software as a Service (SaaS).",
    "memoryTip": "Google Compute Engine = IaaS | Google App Engine = PaaS | Google Classroom/Drive = SaaS.",
    "breakdown": {
      "A": "Correct! Google Compute Engine provides virtual machines running in Google's data centers, making it a pure IaaS service.",
      "B": "Google App Engine is a Platform as a Service (PaaS) product where developers deploy code without managing servers.",
      "C": "Google Classroom is an educational web application delivered as Software as a Service (SaaS).",
      "D": "Incorrect, because Google App Engine (PaaS) and Google Classroom (SaaS) are distinct non-IaaS models."
    }
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
      { "id": "A", "text": "1-A, 2-B, 3-C" },
      { "id": "B", "text": "1-B, 2-A, 3-C" },
      { "id": "C", "text": "1-A, 2-C, 3-B" },
      { "id": "D", "text": "1-C, 2-A, 3-B" }
    ],
    "correctAnswer": "A",
    "explanation": "Microsoft 365 is a SaaS office suite. Magento Commerce Cloud / App Engine provides application hosting and developer runtimes (PaaS). Google Compute Engine provides raw virtualized server infrastructure (IaaS).",
    "memoryTip": "1-SaaS = M365 | 2-PaaS = App Engine | 3-IaaS = Compute Engine.",
    "breakdown": {
      "A": "Correct! 1 matches A (SaaS = Microsoft 365), 2 matches B (PaaS = Magento/App Engine), and 3 matches C (IaaS = Compute Engine).",
      "B": "Incorrect. Microsoft 365 is an end-user application suite (SaaS), not a platform for custom code compilation (PaaS).",
      "C": "Incorrect. Google Compute Engine is pure infrastructure (IaaS), not a developer platform (PaaS).",
      "D": "Incorrect. Google Compute Engine provides virtual hardware (IaaS), not software application service (SaaS)."
    }
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
      { "id": "A", "text": "Scalability" },
      { "id": "B", "text": "Storage Capacity" },
      { "id": "C", "text": "Security & Data Privacy" },
      { "id": "D", "text": "Network Speed" }
    ],
    "correctAnswer": "C",
    "explanation": "Surveys and enterprise analyses consistently cite Security and Data Privacy as the #1 concern when adopting cloud computing due to multi-tenancy, data breaches, regulatory compliance, and loss of direct physical control.",
    "memoryTip": "#1 Cloud Concern = Security & Data Privacy.",
    "breakdown": {
      "A": "Scalability is one of the greatest benefits of the cloud, not a primary deterrent or area of concern.",
      "B": "Storage capacity is effectively infinite and cost-elastic in the cloud.",
      "C": "Correct! Security, compliance, and confidentiality represent the highest risk and primary concern for enterprise cloud adoption.",
      "D": "Network speed and high-throughput connections are widely managed through CDNs and direct interconnects."
    }
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
      { "id": "A", "text": "2 Phases" },
      { "id": "B", "text": "3 Phases (Strategy, Planning, Deployment)" },
      { "id": "C", "text": "4 Phases" },
      { "id": "D", "text": "5 Phases" }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing planning methodologies delineate three core phases: 1. Strategy Phase (establishing business objectives and ROI), 2. Planning Phase (technical assessment and architectural design), and 3. Deployment Phase (execution, migration, and validation).",
    "memoryTip": "3 Cloud Planning Phases: 1. Strategy -> 2. Planning -> 3. Deployment.",
    "breakdown": {
      "A": "Two phases omit the formal strategic business alignment required before technical architecture.",
      "B": "Correct! Enterprise cloud planning is formally divided into three distinct phases: Strategy Phase, Planning Phase, and Deployment Phase.",
      "C": "Four phases often split deployment into post-ops, but the standard Accenture framework identifies 3 major phases.",
      "D": "Five phases is common in general software engineering SDLC, but cloud adoption planning groups into 3 core phases."
    }
  }
]

print("Batch 1 & 2 loaded:", len(raw_questions))

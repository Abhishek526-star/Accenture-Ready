# scratch/build_61_questions.py
import sys
sys.stdout.reconfigure(encoding='utf-8')

q_data = [
  # ==========================================
  # TIER 1: OSI ARCHITECTURE & LAYER PROTOCOLS (Q1 - Q12)
  # ==========================================
  {
    "id": "pyq-1",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "OSI Reference Model",
    "subtopic": "Logical Addressing & Routing",
    "difficulty": "Easy",
    "question": "Which layer of the OSI model adds the logical address (IP address) of the sender and receiver to data packets?",
    "options": [
      { "id": "A", "text": "Data Link Layer" },
      { "id": "B", "text": "Network Layer" },
      { "id": "C", "text": "Transport Layer" },
      { "id": "D", "text": "Session Layer" }
    ],
    "correctAnswer": "B",
    "explanation": "The Network Layer (Layer 3) handles logical addressing (IPv4/IPv6 addresses) and path determination (routing). The Data Link layer deals with physical MAC addressing, Transport Layer deals with port addressing, and Session Layer manages session checkpoints.",
    "memoryTip": "Network Layer = Logical IP Addressing & Routing | Data Link Layer = Physical MAC Addressing.",
    "breakdown": {
      "A": "Incorrect. The Data Link Layer (Layer 2) encapsulates data into frames and appends physical hardware addresses (MAC addresses), not logical network IP addresses.",
      "B": "Correct! The Network Layer (Layer 3) encapsulates segments into packets and prepends source and destination logical IP addresses for internetwork routing.",
      "C": "Incorrect. The Transport Layer (Layer 4) handles process-to-process delivery, port numbers (e.g., port 80, 443), segmentation, and flow/error control.",
      "D": "Incorrect. The Session Layer (Layer 5) establishes, maintains, synchronizes, and terminates interactive sessions between communicating applications."
    }
  },
  {
    "id": "pyq-2",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Computing Models",
    "subtopic": "Software as a Service (SaaS)",
    "difficulty": "Easy",
    "question": "Which of the following is an example of a Software as a Service (SaaS) cloud delivery model?",
    "options": [
      { "id": "A", "text": "Google Workspace" },
      { "id": "B", "text": "Dropbox" },
      { "id": "C", "text": "Salesforce CRM" },
      { "id": "D", "text": "All of the above" }
    ],
    "correctAnswer": "D",
    "explanation": "Software as a Service (SaaS) provides complete, fully-managed ready-to-use software applications hosted in the cloud and accessible over the internet via a web browser or lightweight app. Google Workspace, Dropbox, Salesforce, Slack, and Microsoft 365 are all prominent examples.",
    "memoryTip": "SaaS = Finished user applications ready to consume (Google Workspace, Dropbox, Salesforce, M365).",
    "breakdown": {
      "A": "Partially true, but not the only one. Google Workspace provides cloud-hosted productivity tools (Gmail, Docs, Drive) on a SaaS subscription model.",
      "B": "Partially true, but not the only one. Dropbox provides cloud-hosted file storage and synchronization delivered entirely as a turn-key SaaS solution.",
      "C": "Partially true, but not the only one. Salesforce is the industry pioneer of cloud CRM delivered completely as a multi-tenant SaaS application.",
      "D": "Correct! Google Workspace, Dropbox, and Salesforce are all industry-standard Software as a Service (SaaS) products where users consume end applications without managing underlying infrastructure."
    }
  },
  {
    "id": "pyq-3",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Computing Models",
    "subtopic": "IaaS Architecture & Migration",
    "difficulty": "Medium",
    "question": "Assume that an enterprise wants to migrate its on-premises infrastructure to the cloud and requires full administrative control over the operating system, storage, and deployed applications. Which cloud service model must they choose?",
    "options": [
      { "id": "A", "text": "Infrastructure as a Service (IaaS)" },
      { "id": "B", "text": "Platform as a Service (PaaS)" },
      { "id": "C", "text": "Software as a Service (SaaS)" },
      { "id": "D", "text": "Function as a Service (FaaS)" }
    ],
    "correctAnswer": "A",
    "explanation": "Infrastructure as a Service (IaaS) gives enterprise customers maximum architectural control over computing resources. The cloud provider manages the physical data centers, virtualization, and networking, while the enterprise customer manages the operating system, middleware, runtime, data, security patches, and applications.",
    "memoryTip": "IaaS gives you the OS keys and root privileges. PaaS gives you runtime only. SaaS gives you the app UI only.",
    "breakdown": {
      "A": "Correct! IaaS (e.g., AWS EC2, Azure VMs, Google Compute Engine) grants root/administrator privileges over the guest OS, file system, disk volumes, and installed application stacks.",
      "B": "Incorrect. PaaS (e.g., AWS Elastic Beanstalk, Heroku) abstracts away OS administration and server maintenance, only allowing users to deploy application source code.",
      "C": "Incorrect. SaaS supplies closed commercial software where the vendor controls all layers from infrastructure up through the application binary.",
      "D": "Incorrect. FaaS (Serverless like AWS Lambda) is completely event-driven with ephemeral execution containers where the customer has zero control over server instances."
    }
  },
  {
    "id": "pyq-4",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "DoS & Flooding Attacks",
    "difficulty": "Easy",
    "question": "In cybersecurity terminology, an attack where a target user or mail server receives an enormous, unwanted deluge of email messages designed to exhaust storage and crash mail services is called:",
    "options": [
      { "id": "A", "text": "Smurfing" },
      { "id": "B", "text": "Denial of Service (Generic)" },
      { "id": "C", "text": "E-mail Bombing" },
      { "id": "D", "text": "Ping Storm / Ping Flood" }
    ],
    "correctAnswer": "C",
    "explanation": "An Email Bomb (or letter bomb attack) is a specific type of Denial of Service (DoS) attack where attackers flood a specific target inbox with thousands to millions of emails to exhaust disk quotas, crash email clients, or obscure legitimate security alert notifications.",
    "memoryTip": "Inbox flooded with massive junk emails = E-mail Bombing | ICMP broadcast reflection = Smurfing.",
    "breakdown": {
      "A": "Incorrect. A Smurf attack is a distributed denial-of-service attack that floods a target with spoofed ICMP echo requests broadcast across intermediate reflector networks.",
      "B": "Incorrect. While email bombing is a subcategory of DoS, 'E-mail Bombing' is the precise, specific term tested by Accenture for mailbox flooding.",
      "C": "Correct! E-mail bombing specifically refers to intentionally overwhelming a recipient's mailbox or mail exchange server with thousands of automated email messages.",
      "D": "Incorrect. A Ping Storm (or ICMP flood) saturates network bandwidth by sending continuous ICMP Echo Request packets, unrelated to application-layer email."
    }
  },
  {
    "id": "pyq-5",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Network Security & Cyber Attacks",
    "subtopic": "Packet Spoofing & Identity Theft",
    "difficulty": "Easy",
    "question": "An attack technique in which a malicious actor creates network packets with a forged source IP address to disguise identity or impersonate a trusted computing system is known as:",
    "options": [
      { "id": "A", "text": "Smurfing" },
      { "id": "B", "text": "Trojan Horse" },
      { "id": "C", "text": "E-mail Bombing" },
      { "id": "D", "text": "Spoofing" }
    ],
    "correctAnswer": "D",
    "explanation": "IP Spoofing involves crafting IP packets with an altered/forged source address in the IP header. It is commonly utilized in reflection DDoS attacks (such as Smurf and DNS amplification) and unauthorized perimeter penetration.",
    "memoryTip": "Forging packet identity = Spoofing | Disguised malicious program = Trojan.",
    "breakdown": {
      "A": "Incorrect. Smurfing relies on IP spoofing as a preliminary tactic, but Smurfing itself refers to the entire ICMP broadcast amplification mechanism.",
      "B": "Incorrect. A Trojan Horse is a standalone malicious software program masquerading as legitimate, benign utility software to deceive users into executing it.",
      "C": "Incorrect. Email bombing is flooding an email inbox with messages, not forging low-level network packet headers.",
      "D": "Correct! Spoofing is the fundamental technique where an attacker alters packet headers to impersonate another machine or hide their true origin."
    }
  },
  {
    "id": "pyq-6",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Technologies & Browsers",
    "subtopic": "User Agents & HTTP Clients",
    "difficulty": "Easy",
    "question": "Which of the following software applications acts as a client-side user agent allowing end users to request, render, and view web pages across the internet?",
    "options": [
      { "id": "A", "text": "Notepad" },
      { "id": "B", "text": "Adobe Acrobat Reader" },
      { "id": "C", "text": "Google Drive" },
      { "id": "D", "text": "Web Browser (e.g., Internet Explorer / Chrome)" }
    ],
    "correctAnswer": "D",
    "explanation": "A Web Browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Internet Explorer) is an application software that connects to web servers via HTTP/HTTPS, retrieves HTML, CSS, JavaScript, and multimedia resources, and renders them into interactive web pages.",
    "memoryTip": "Web page viewing gateway = Web Browser (Chrome, Edge, Firefox, Safari).",
    "breakdown": {
      "A": "Incorrect. Notepad is a simple plain-text editor without an HTTP network engine or HTML/CSS layout rendering pipeline.",
      "B": "Incorrect. Adobe Acrobat Reader is a document reader tailored specifically for viewing and annotating Portable Document Format (PDF) files.",
      "C": "Incorrect. Google Drive is a cloud file storage and synchronization service, not a standalone web browser application.",
      "D": "Correct! A Web Browser is the primary client application engineered to retrieve, interpret, and visually render hypermedia web documents across the World Wide Web."
    }
  },
  {
    "id": "pyq-7",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Developer Tools & Version Control",
    "subtopic": "Distributed VCS",
    "difficulty": "Easy",
    "question": "Which of the following is the most popular distributed version control system (VCS) used globally to track changes in source code during software development?",
    "options": [
      { "id": "A", "text": "USB" },
      { "id": "B", "text": "Git" },
      { "id": "C", "text": "HTTP" },
      { "id": "D", "text": "SSL" }
    ],
    "correctAnswer": "B",
    "explanation": "Git is an open-source, distributed version control system created by Linus Torvalds in 2005. It enables multiple developers to work concurrently, manage revision branches, inspect diffs, and merge code bases with high cryptographic integrity.",
    "memoryTip": "Source code version control = Git | File transfer protocol = HTTP | Encryption protocol = SSL/TLS.",
    "breakdown": {
      "A": "Incorrect. USB (Universal Serial Bus) is an industry hardware standard for physical cables, connectors, and peripheral communication protocols.",
      "B": "Correct! Git is the de-facto global standard distributed version control and source code management system, utilized by over 90% of professional developers.",
      "C": "Incorrect. HTTP (Hypertext Transfer Protocol) is an application-layer network protocol for transferring hypermedia documents across the web.",
      "D": "Incorrect. SSL (Secure Sockets Layer) is a cryptographic protocol designed to provide secure encrypted communication over computer networks."
    }
  },
  {
    "id": "pyq-8",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Transport Layer Protocols",
    "subtopic": "TCP vs UDP",
    "difficulty": "Easy",
    "question": "In the TCP/IP network model, which of the following transport layer protocols provides connectionless, low-latency, and unacknowledged packet delivery?",
    "options": [
      { "id": "A", "text": "FTP" },
      { "id": "B", "text": "ARP" },
      { "id": "C", "text": "UDP" },
      { "id": "D", "text": "DNS" }
    ],
    "correctAnswer": "C",
    "explanation": "The Transport Layer in the TCP/IP stack houses two primary protocols: TCP (connection-oriented, reliable, sequenced) and UDP (User Datagram Protocol - connectionless, unreliable, minimal overhead). DNS and FTP operate at the Application layer, while ARP operates at the Link/Network interface layer.",
    "memoryTip": "Transport Layer Protocols = TCP (reliable) and UDP (fast/connectionless).",
    "breakdown": {
      "A": "Incorrect. FTP (File Transfer Protocol) operates at the Application Layer (Layer 7) and relies on TCP connections for data transfer.",
      "B": "Incorrect. ARP (Address Resolution Protocol) operates at Layer 2/3 to resolve IP addresses to physical MAC hardware addresses.",
      "C": "Correct! UDP (User Datagram Protocol) resides on the Transport Layer and provides lightweight, connectionless datagram delivery without handshake or retransmission delays.",
      "D": "Incorrect. DNS (Domain Name System) is an Application Layer protocol, although it commonly uses UDP on port 53 for query transport."
    }
  },
  {
    "id": "pyq-9",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Cloud Migration & Architecture",
    "subtopic": "Migration Planning & Risk Mitigation",
    "difficulty": "Medium",
    "question": "Your company has decided to shift its traditional on-site data center to cloud-based infrastructure to improve scalability and reduce costs. As part of the migration process, which step should be given top priority to ensure minimal downtime and a smooth transition?",
    "options": [
      { "id": "A", "text": "Immediately shutting down on-premises servers following initial cloud provisioning" },
      { "id": "B", "text": "Transferring all enterprise data across the internet in a single unmonitored attempt" },
      { "id": "C", "text": "Carrying out the migration without informing operational stakeholders" },
      { "id": "D", "text": "Creating a detailed migration plan that includes comprehensive data backup and rigorous testing" }
    ],
    "correctAnswer": "D",
    "explanation": "Enterprise cloud migrations require rigorous architectural planning: assessing application dependencies, establishing backup and rollback plans, validating pilot phases, performing parallel testing, and communicating with stakeholders to prevent business disruption and catastrophic data loss.",
    "memoryTip": "Safe Migration Rule: Plan -> Backup -> Pilot Test -> Parallel Run -> Validate -> Decommission.",
    "breakdown": {
      "A": "Incorrect. Immediately shutting down legacy servers before validating production cloud operations eliminates rollback safety and risks catastrophic outage.",
      "B": "Incorrect. Transferring all enterprise data in a single massive unverified step risks data corruption, network saturation, and unrecoverable downtime.",
      "C": "Incorrect. Migrating without stakeholder coordination breaches compliance, ITIL governance, and blinds operations teams to scheduled outages.",
      "D": "Correct! Prioritizing a structured migration plan with complete redundant backups, pilot testing, and failover validation guarantees minimal downtime and zero data loss."
    }
  },
  {
    "id": "pyq-10",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Technologies & Browsers",
    "subtopic": "Browser Rendering Engines",
    "difficulty": "Medium",
    "question": "Which popular web browser rendering engine was developed by Google as an open-source project and powers Google Chrome, Microsoft Edge, Opera, and Brave?",
    "options": [
      { "id": "A", "text": "Blink" },
      { "id": "B", "text": "Gecko" },
      { "id": "C", "text": "WebKit" },
      { "id": "D", "text": "Trident" }
    ],
    "correctAnswer": "A",
    "explanation": "Blink is an open-source browser layout engine developed by Google as part of the Chromium project (originally a fork of WebKit). It powers Google Chrome, Microsoft Edge (post-2020), Opera, Brave, and Vivaldi. Mozilla Firefox uses Gecko, Safari uses WebKit, and Internet Explorer used Trident.",
    "memoryTip": "Chrome & modern Edge = Blink | Firefox = Gecko | Apple Safari = WebKit | Old IE = Trident.",
    "breakdown": {
      "A": "Correct! Blink is Google's open-source rendering engine used in Chromium, Google Chrome, modern Microsoft Edge, Brave, and Opera.",
      "B": "Incorrect. Gecko is the open-source rendering engine developed and maintained by Mozilla specifically for the Firefox web browser.",
      "C": "Incorrect. WebKit is Apple's open-source rendering engine that powers Apple Safari on macOS and iOS.",
      "D": "Incorrect. Trident (MSHTML) was Microsoft's proprietary rendering engine developed for legacy Internet Explorer releases."
    }
  },
  {
    "id": "pyq-11",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Web Protocols & Standards",
    "subtopic": "HTTP URI Syntax",
    "difficulty": "Easy",
    "question": "In a web URL like 'http://www.accenture.com', what does the protocol identifier 'http://' stand for?",
    "options": [
      { "id": "A", "text": "Hyperlink Transfer Protocol" },
      { "id": "B", "text": "Hypertext Transmission Protocol" },
      { "id": "C", "text": "Hyperlink Transfer Procedure" },
      { "id": "D", "text": "Hypertext Transfer Protocol" }
    ],
    "correctAnswer": "D",
    "explanation": "HTTP stands for Hypertext Transfer Protocol. It is an application-layer protocol designed by Tim Berners-Lee for transmitting hypermedia documents (like HTML) across distributed, collaborative information systems.",
    "memoryTip": "HTTP = Hypertext Transfer Protocol (Port 80) | HTTPS = HTTP Secure over TLS (Port 443).",
    "breakdown": {
      "A": "Incorrect. 'Hyperlink' is wrong; HTTP specifically refers to 'Hypertext' (interlinked text structures).",
      "B": "Incorrect. 'Transmission' is incorrect; the standardized term is 'Transfer'.",
      "C": "Incorrect. 'Procedure' is incorrect; it is a communication 'Protocol'.",
      "D": "Correct! HTTP stands for Hypertext Transfer Protocol, the foundational protocol of the World Wide Web."
    }
  },
  {
    "id": "pyq-12",
    "tier": 1,
    "tierName": "Tier 1 — OSI Architecture & Layer Protocols",
    "topic": "Computer Networks & Topologies",
    "subtopic": "Network Core vs Network Edge",
    "difficulty": "Easy",
    "question": "Which of the following devices is an intermediate network core device and is NOT classified as a network edge end-system?",
    "options": [
      { "id": "A", "text": "Network Switch" },
      { "id": "B", "text": "Personal Computer (PC)" },
      { "id": "C", "text": "Smartphone" },
      { "id": "D", "text": "Database Server" }
    ],
    "correctAnswer": "A",
    "explanation": "In computer network architecture, the 'Network Edge' comprises end systems (hosts) like PCs, smartphones, servers, and IoT devices that generate and consume application data. The 'Network Core' comprises intermediate packet-switches, routers, and link-layer switches that forward data between edge hosts.",
    "memoryTip": "Network Edge = End-user devices & servers | Network Core = Switches & Routers.",
    "breakdown": {
      "A": "Correct! A Network Switch is an intermediate forwarding node residing in the network core/access tier to bridge frames, not an edge host.",
      "B": "Incorrect. A PC is an end system located at the network edge where applications run and user communications initiate or terminate.",
      "C": "Incorrect. A Smartphone is an edge mobile device running user applications.",
      "D": "Incorrect. Servers are host systems located at the network edge providing application services to client hosts."
    }
  }
]

print(f"Total base questions defined: {len(q_data)}")

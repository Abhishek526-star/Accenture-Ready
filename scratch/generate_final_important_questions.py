# scratch/generate_final_important_questions.py
import json, sys

sys.stdout.reconfigure(encoding='utf-8')

tiers = [
  { "id": 1, "name": "Tier 1 — OSI Architecture & Layer Protocols", "description": "OSI 7 layers, logical IP vs physical MAC addressing, TCP vs UDP transport, and cloud delivery models." },
  { "id": 2, "name": "Tier 2 — Cloud Computing Models & Migration", "description": "IaaS, PaaS, SaaS, shared responsibility, cloud planning phases, and zero-downtime migration strategies." },
  { "id": 3, "name": "Tier 3 — Network Security & Cyber Defense", "description": "DDoS, Smurfing, spoofing, email bombing, proxy firewalls, stateful packet filtering, and virus classification." },
  { "id": 4, "name": "Tier 4 — IP Addressing, Subnetting & Topologies", "description": "IPv4 classes A-E, subnet masks, CIDR, private vs public IP, star/bus/mesh topologies, and routing." },
  { "id": 5, "name": "Tier 5 — Web Protocols, Hardware & Cloud Infrastructure", "description": "DNS, DHCP, SSH, SFTP, HTTP/HTTPS, thin provisioning, CaaS, community clouds, and network bridges." }
]

topics = [
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
]

study_guides = {
  1: {
    "title": "OSI 7-Layer Model & Transport Protocols",
    "content": [
      "**OSI 7 Layers (Top to Bottom):** Application (7) → Presentation (6) → Session (5) → Transport (4) → Network (3) → Data Link (2) → Physical (1). (Mnemonic: *All People Seem To Need Data Processing*).",
      "**Addressing across Layers:** Logical IP addresses are added at **Layer 3 (Network)**. Physical MAC addresses are appended at **Layer 2 (Data Link)**. Port numbers (80, 443, 22) are added at **Layer 4 (Transport)**.",
      "**TCP vs UDP (Layer 4):** TCP is connection-oriented, reliable, provides 3-way handshakes (SYN, SYN-ACK, ACK), sequencing, and error retransmission. UDP is connectionless, unreliable, has only 8-byte header overhead, and is used for VoIP, DNS, and real-time streaming.",
      "**Rendering Engines:** Google Chrome & modern Edge use **Blink** (Chromium). Mozilla Firefox uses **Gecko**. Apple Safari uses **WebKit**."
    ]
  },
  2: {
    "title": "Cloud Computing Architecture & Migration Strategy",
    "content": [
      "**Cloud Service Models:** **IaaS** gives full root control over the OS, storage, and networking (AWS EC2, Google Compute Engine). **PaaS** manages OS and runtime, letting you deploy code (Google App Engine, Elastic Beanstalk). **SaaS** provides turn-key applications (Google Workspace, Microsoft 365, Salesforce).",
      "**Shared Responsibility Model:** In **IaaS**, the customer is responsible for guest OS patching, firewall configurations, and data encryption. In **SaaS**, the cloud vendor manages nearly everything except credentials and user access.",
      "**3 Phases of Cloud Planning:** Strategy Phase → Planning Phase → Deployment Phase. The Deployment Phase includes developing the **Transformation and Migration Plan**.",
      "**Cloud Migration Golden Rule:** Prioritize a phased migration with verified backups, pilot testing, and rollback plans before decommissioning any on-premises servers."
    ]
  },
  3: {
    "title": "Network Security, Firewalls & Cyber Threats",
    "content": [
      "**Cyber Attacks Defined:** **Smurf Attack:** Distributed ICMP echo requests sent to network broadcast with victim's IP spoofed. **IP Spoofing:** Forging packet headers to impersonate another IP. **Email Bomb:** Flooding inboxes with thousands of automated emails to crash mail services.",
      "**Firewall Generations:** **1st Gen:** Static packet filtering (inspects headers only). **2nd Gen:** Circuit-level gateways. **3rd Gen:** Application-level proxy firewalls (intercepts and masks client IPs). **4th Gen:** **Stateful Packet Inspection (SPI)** firewalls that track the full TCP 3-way handshake and connection state.",
      "**Malware Classifications:** **Computer Virus:** Replicates by modifying other executable host programs. **Macro Virus:** Embeds within office documents and spreadsheet macros (VBA). **Trojan Horse:** Deceptively masquerades as legitimate utility software."
    ]
  },
  4: {
    "title": "IP Addressing, Classes & Subnetting Guide",
    "content": [
      "**IPv4 Class Ranges:** **Class A:** 1.0.0.0 to 126.255.255.255 (Subnet: 255.0.0.0). **Class B:** 128.0.0.0 to 191.255.255.255 (Subnet: 255.255.0.0). **Class C:** 192.0.0.0 to 223.255.255.255 (Subnet: 255.255.255.0). **Class D:** **224.0.0.0 to 239.255.255.255** (Reserved for **Multicast**). **Class E:** 240.0.0.0 to 255.255.255.255 (Experimental). *127.0.0.1 is loopback.*",
      "**Public vs Private IP:** Private IPs (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are non-routable over the public internet and translated via NAT.",
      "**Network Topologies:** **Star Topology:** All devices connect directly to a central hub/switch. **Bus Topology:** Single shared backbone cable with terminators. **Mesh Topology:** Every node connects to every other node ($n(n-1)/2$ links).",
      "**Routers vs Switches:** **Router (Layer 3):** Forwards packets between different logical networks. **Switch (Layer 2):** Forwards frames between devices on the same local subnet using MAC tables."
    ]
  },
  5: {
    "title": "Internet Protocols, Hardware & Advanced Cloud Concepts",
    "content": [
      "**Core Protocols:** **DNS:** Resolves domain names to IP addresses (Port 53, UDP/TCP). **DHCP:** Dynamically assigns IP addresses, subnet masks, and gateways (Port 67/68, UDP). **SSH / SFTP:** Encrypted remote login and secure file transfer (Port 22, TCP). **SMTP:** Sends outgoing email between servers (Port 25/587, TCP).",
      "**Cloud Deployment Models:** **Public:** Multi-tenant infrastructure sold to general public. **Private:** Dedicated solely to one enterprise (e.g., Banking/Healthcare compliance). **Community:** Shared among organizations with common compliance needs. **Hybrid:** Connects private and public clouds via secure VPN/DirectConnect.",
      "**Thin Provisioning:** Dynamically allocates storage from a pooled reservoir on-demand as data is written, preventing capacity waste.",
      "**Network Bridge:** Layer 2 device connecting two distinct LAN segment architectures (e.g., Token Ring and Ethernet)."
    ]
  }
}

print("Base configuration ready.")

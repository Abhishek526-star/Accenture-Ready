# scratch/build_set2_dataset.py
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

print("Study guides and tiers loaded.")

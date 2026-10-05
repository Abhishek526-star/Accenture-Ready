// src/data/mockTests/mockTest2.js
// Technical MCQ Practice Set 2
// Total Questions: 45 | Marks: 45 (+1 Mark/Q) | Duration: 45 Mins

export const mockTest2 = [
  {
    "id": "set2-q1",
    "number": 1,
    "question": "Assume that a company is migrating its legacy databases to a new cloud-based platform. To avoid downtime, the company needs users to access data from both the legacy system and the cloud system simultaneously. The data should be logically combined for reporting and analytics without physically moving all the data into one location.\n\nWhich architectural layer would be most suitable for providing this logical integration, unified data access, and secure connectivity between the two environments?",
    "options": [
      {
        "id": "A",
        "text": "Presentation Layer"
      },
      {
        "id": "B",
        "text": "Data Integration Layer"
      },
      {
        "id": "C",
        "text": "Application Layer"
      },
      {
        "id": "D",
        "text": "Physical Storage Layer"
      }
    ],
    "correctAnswer": "B",
    "topic": "Data Architecture",
    "difficulty": "Medium",
    "explanation": "The Data Integration Layer connects and logically combines data from different sources, enabling unified access without requiring all data to be physically moved into one location.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. The presentation layer displays information but does not primarily integrate heterogeneous data sources.",
      "Presentation Layer": "Incorrect. The presentation layer displays information but does not primarily integrate heterogeneous data sources.",
      "B": "Correct. The Data Integration Layer combines data from different environments and can provide unified access.",
      "Data Integration Layer": "Correct. The Data Integration Layer combines data from different environments and can provide unified access.",
      "C": "Incorrect. The application layer implements business/application logic rather than being the primary logical data-integration layer.",
      "Application Layer": "Incorrect. The application layer implements business/application logic rather than being the primary logical data-integration layer.",
      "D": "Incorrect. Physical storage concerns where data is stored, not logical integration across environments.",
      "Physical Storage Layer": "Incorrect. Physical storage concerns where data is stored, not logical integration across environments."
    }
  },
  {
    "id": "set2-q2",
    "number": 2,
    "question": "Assume that an organization is modernizing its data center and wants to combine storage resources from different vendors into a flexible cloud-based storage environment. The organization needs storage capacity to be dynamically allocated and shared according to changing workloads. How does resource pooling help achieve elasticity in cloud storage?",
    "options": [
      {
        "id": "A",
        "text": "By eliminating the need for server virtualization"
      },
      {
        "id": "B",
        "text": "By reducing the need for continuous data backups"
      },
      {
        "id": "C",
        "text": "By allowing storage resources to be dynamically shared and allocated based on demand"
      },
      {
        "id": "D",
        "text": "By restricting storage resources to a fixed set of applications"
      }
    ],
    "correctAnswer": "C",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "Resource pooling creates a shared resource pool from which storage capacity can be dynamically allocated to workloads as demand changes, providing elasticity.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By eliminating the need for server virtualization": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "B": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By reducing the need for continuous data backups": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "C": "Correct. Resource pooling creates a shared resource pool from which storage capacity can be dynamically allocated to workloads as demand changes, providing elasticity.",
      "By allowing storage resources to be dynamically shared and allocated based on demand": "Correct. Resource pooling creates a shared resource pool from which storage capacity can be dynamically allocated to workloads as demand changes, providing elasticity.",
      "D": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement.",
      "By restricting storage resources to a fixed set of applications": "Incorrect. This cloud or deployment configuration does not fulfill the stated architectural requirement."
    }
  },
  {
    "id": "set2-q3",
    "number": 3,
    "question": "An enterprise is deploying IPv6 across a large campus network. Administrators need hosts to discover routers, resolve IPv6 neighbors to link-layer addresses, and detect duplicate IPv6 addresses before assigning them. They also want to avoid relying on IPv4-style broadcast ARP. Which mechanism should the network team use for these functions?",
    "options": [
      {
        "id": "A",
        "text": "IPv6 Neighbor Discovery Protocol implemented through ICMPv6 messages, including Neighbor Solicitation, Neighbor Advertisement, Router Solicitation, and Router Advertisement."
      },
      {
        "id": "B",
        "text": "DHCPv6 exclusively, because DHCPv6 replaces all neighbor discovery, router discovery, and duplicate-address detection functions performed by IPv6 hosts."
      },
      {
        "id": "C",
        "text": "IPv4 ARP extended with a larger address field, because IPv6 hosts continue to use ARP when translating IPv6 addresses into Ethernet MAC addresses."
      },
      {
        "id": "D",
        "text": "IGMP alone, because multicast group membership messages provide complete address resolution and router discovery for every IPv6 endpoint."
      }
    ],
    "correctAnswer": "A",
    "topic": "Computer Networks",
    "difficulty": "Medium",
    "explanation": "IPv6 Neighbor Discovery uses ICMPv6 messages for neighbor resolution, router discovery, and Duplicate Address Detection, replacing the role ARP plays in IPv4.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. ARP is exclusively an IPv4 protocol; IPv6 relies on ICMPv6 ND.",
      "IPv6 Neighbor Discovery Protocol implemented through ICMPv6 messages, including Neighbor Solicitation, Neighbor Advertisement, Router Solicitation, and Router Advertisement.": "Incorrect. ARP is exclusively an IPv4 protocol; IPv6 relies on ICMPv6 ND.",
      "B": "Correct. IPv6 Neighbor Discovery uses ICMPv6 messages for neighbor address resolution, router discovery, and Duplicate Address Detection.",
      "DHCPv6 exclusively, because DHCPv6 replaces all neighbor discovery, router discovery, and duplicate-address detection functions performed by IPv6 hosts.": "Correct. IPv6 Neighbor Discovery uses ICMPv6 messages for neighbor address resolution, router discovery, and Duplicate Address Detection.",
      "C": "Incorrect. IGMP manages IPv4 multicast group memberships, whereas IPv6 uses MLD.",
      "IPv4 ARP extended with a larger address field, because IPv6 hosts continue to use ARP when translating IPv6 addresses into Ethernet MAC addresses.": "Incorrect. IGMP manages IPv4 multicast group memberships, whereas IPv6 uses MLD.",
      "D": "Incorrect. DHCPv6 handles configuration assignment, but link-layer neighbor discovery is performed by ICMPv6 ND.",
      "IGMP alone, because multicast group membership messages provide complete address resolution and router discovery for every IPv6 endpoint.": "Incorrect. DHCPv6 handles configuration assignment, but link-layer neighbor discovery is performed by ICMPv6 ND."
    }
  },
  {
    "id": "set2-q4",
    "number": 4,
    "question": "A network architect is designing a programmable data-center fabric in which routing and forwarding policies should be centrally coordinated. The switches should continue performing packet forwarding at line rate, but administrators want a logically centralized controller to install and modify forwarding rules rather than configuring each switch independently. Which architectural principle best describes this design?",
    "options": [
      {
        "id": "A",
        "text": "Control and data planes are separated, with a centralized SDN controller programming switches through OpenFlow."
      },
      {
        "id": "B",
        "text": "Each switch stores a complete copy of the controller database."
      },
      {
        "id": "C",
        "text": "The controller performs all packet forwarding instead of switches."
      },
      {
        "id": "D",
        "text": "SDN replaces IP routing with fixed circuit switching."
      }
    ],
    "correctAnswer": "A",
    "topic": "SDN",
    "difficulty": "Medium",
    "explanation": "Software-Defined Networking separates the control plane from the data plane. A logically centralized controller manages forwarding rules while switches continue forwarding packets.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Software-Defined Networking fundamentally decouples the network control plane (centralized decision making) from the data plane (packet forwarding hardware).",
      "Control and data planes are separated, with a centralized SDN controller programming switches through OpenFlow.": "Correct. Software-Defined Networking fundamentally decouples the network control plane (centralized decision making) from the data plane (packet forwarding hardware).",
      "B": "Incorrect. Switches in SDN do not hold full database copies; they store flow tables populated by the controller via OpenFlow.",
      "Each switch stores a complete copy of the controller database.": "Incorrect. Switches in SDN do not hold full database copies; they store flow tables populated by the controller via OpenFlow.",
      "C": "Incorrect. The data plane switches forward packets at line speed; the controller dictates flow rules rather than forwarding individual packets.",
      "The controller performs all packet forwarding instead of switches.": "Incorrect. The data plane switches forward packets at line speed; the controller dictates flow rules rather than forwarding individual packets.",
      "D": "Incorrect. SDN is a management and routing paradigm, not a replacement of packet switching with physical circuit switching.",
      "SDN replaces IP routing with fixed circuit switching.": "Incorrect. SDN is a management and routing paradigm, not a replacement of packet switching with physical circuit switching."
    }
  },
  {
    "id": "set2-q5",
    "number": 5,
    "question": "Assume that a company wants to provide secure Wi-Fi access to its employees. The organization wants an EAP authentication method that requires a server-side certificate but does not require individual client certificates. Which method should be used?",
    "options": [
      {
        "id": "A",
        "text": "EAP-TLS"
      },
      {
        "id": "B",
        "text": "PEAP"
      },
      {
        "id": "C",
        "text": "EAP-MD5"
      },
      {
        "id": "D",
        "text": "PAP"
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "PEAP normally authenticates the server using a certificate and establishes a protected tunnel for the inner authentication method, without requiring individual client certificates.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. EAP-TLS uses client and server certificates, so it requires individual client certificates.",
      "EAP-TLS": "Incorrect. EAP-TLS uses client and server certificates, so it requires individual client certificates.",
      "B": "Correct. PEAP uses a server certificate and normally protects an inner authentication method without requiring client certificates.",
      "PEAP": "Correct. PEAP uses a server certificate and normally protects an inner authentication method without requiring client certificates.",
      "C": "Incorrect. EAP-MD5 does not provide the requested certificate-based secure Wi-Fi authentication model.",
      "EAP-MD5": "Incorrect. EAP-MD5 does not provide the requested certificate-based secure Wi-Fi authentication model.",
      "D": "Incorrect. PAP is an authentication mechanism and does not provide the EAP certificate-based protection described.",
      "PAP": "Incorrect. PAP is an authentication mechanism and does not provide the EAP certificate-based protection described."
    }
  },
  {
    "id": "set2-q6",
    "number": 6,
    "question": "A service provider is designing a WAN in which several routes to the same destination exist. Engineers need a mechanism that can compare paths advertised by neighboring autonomous systems and choose a route based on attributes such as AS_PATH, local preference, and MED rather than simply selecting the physically shortest cable path. Which protocol and behavior best fit this requirement?",
    "options": [
      {
        "id": "A",
        "text": "BGP — Uses path attributes and routing policies to select routes."
      },
      {
        "id": "B",
        "text": "ARP — Finds the shortest path between routers."
      },
      {
        "id": "C",
        "text": "DHCP — Assigns routing metrics to networks."
      },
      {
        "id": "D",
        "text": "ICMP — Selects the least-congested network path."
      }
    ],
    "correctAnswer": "A",
    "topic": "Computer Networks",
    "difficulty": "Medium",
    "explanation": "BGP is an inter-domain routing protocol that uses attributes such as AS_PATH, local preference, and MED to make policy-based route selections.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. BGP is an inter-domain routing protocol that uses attributes such as AS_PATH, local preference, and MED to make policy-based route selections.",
      "BGP — Uses path attributes and routing policies to select routes.": "Correct. BGP is an inter-domain routing protocol that uses attributes such as AS_PATH, local preference, and MED to make policy-based route selections.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "ARP — Finds the shortest path between routers.": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "DHCP — Assigns routing metrics to networks.": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "D": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data.",
      "ICMP — Selects the least-congested network path.": "Incorrect. The network layer handles logical IP routing rather than physical framing or application data."
    }
  },
  {
    "id": "set2-q7",
    "number": 7,
    "question": "A database server has 32 GB of physical memory, but monitoring shows extremely high disk paging, very low CPU utilization, and a rapidly increasing number of page faults. The active applications collectively require more memory than can remain resident, so the operating system repeatedly moves pages between RAM and swap instead of doing useful application work. What phenomenon is occurring?",
    "options": [
      {
        "id": "A",
        "text": "Deadlock caused by two processes permanently holding kernel locks while waiting for unrelated CPU cores to become available."
      },
      {
        "id": "B",
        "text": "Thrashing caused by insufficient physical memory for the active working sets, resulting in excessive page faults and continuous paging activity."
      },
      {
        "id": "C",
        "text": "Starvation caused by a high-priority scheduler permanently preventing every process from receiving any disk I/O service."
      },
      {
        "id": "D",
        "text": "Fragmentation caused by executable instructions being stored in non-contiguous CPU registers and therefore repeatedly reloaded from cache."
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "Thrashing occurs when processes do not have enough physical memory for their working sets, causing excessive page faults and paging that leaves the CPU underutilized.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. CPU scheduling starvation causes individual thread delays, not system-wide hyperactive disk swapping.",
      "Deadlock caused by two processes permanently holding kernel locks while waiting for unrelated CPU cores to become available.": "Incorrect. CPU scheduling starvation causes individual thread delays, not system-wide hyperactive disk swapping.",
      "B": "Correct. Thrashing occurs when the working set exceeds physical memory, causing constant page faulting and disk I/O.",
      "Thrashing caused by insufficient physical memory for the active working sets, resulting in excessive page faults and continuous paging activity.": "Correct. Thrashing occurs when the working set exceeds physical memory, causing constant page faulting and disk I/O.",
      "C": "Incorrect. Deadlock causes processes to freeze waiting on locked resources rather than causing high disk activity.",
      "Starvation caused by a high-priority scheduler permanently preventing every process from receiving any disk I/O service.": "Incorrect. Deadlock causes processes to freeze waiting on locked resources rather than causing high disk activity.",
      "D": "Incorrect. Memory fragmentation wastes memory space but does not cause excessive page replacement swapping.",
      "Fragmentation caused by executable instructions being stored in non-contiguous CPU registers and therefore repeatedly reloaded from cache.": "Incorrect. Memory fragmentation wastes memory space but does not cause excessive page replacement swapping."
    }
  },
  {
    "id": "set2-q8",
    "number": 8,
    "question": "Two kernel threads access two mutexes protecting shared resources. Thread A acquires Mutex X and waits for Mutex Y, while Thread B acquires Mutex Y and waits for Mutex X. Neither thread can proceed because each is holding a resource required by the other. Which combination of deadlock conditions is most clearly represented by this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Circular wait together with hold-and-wait and mutual exclusion, because each thread holds one non-shareable resource while waiting for the other."
      },
      {
        "id": "B",
        "text": "Only bounded waiting, because the scheduler guarantees that both threads will eventually receive CPU time even though their locks cannot be released."
      },
      {
        "id": "C",
        "text": "Only preemption, because the operating system can always forcibly remove a mutex from a thread without affecting correctness."
      },
      {
        "id": "D",
        "text": "Race freedom, because the use of two mutexes guarantees that no circular dependency between resources can ever occur."
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "Each thread holds one mutex while waiting for the other, creating hold-and-wait and circular wait; mutexes are mutually exclusive resources.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Mutual exclusion on locks, holding one lock while requesting another, lack of preemption, and cyclic wait create a textbook deadlock.",
      "Circular wait together with hold-and-wait and mutual exclusion, because each thread holds one non-shareable resource while waiting for the other.": "Correct. Mutual exclusion on locks, holding one lock while requesting another, lack of preemption, and cyclic wait create a textbook deadlock.",
      "B": "Incorrect. Lock starvation causes prolonged waiting without creating a circular dependency.",
      "Only bounded waiting, because the scheduler guarantees that both threads will eventually receive CPU time even though their locks cannot be released.": "Incorrect. Lock starvation causes prolonged waiting without creating a circular dependency.",
      "C": "Incorrect. Livelock involves active state changes without forward progress, whereas here threads are blocked.",
      "Only preemption, because the operating system can always forcibly remove a mutex from a thread without affecting correctness.": "Incorrect. Livelock involves active state changes without forward progress, whereas here threads are blocked.",
      "D": "Incorrect. Race condition produces non-deterministic data corruption without circular blocking.",
      "Race freedom, because the use of two mutexes guarantees that no circular dependency between resources can ever occur.": "Incorrect. Race condition produces non-deterministic data corruption without circular blocking."
    }
  },
  {
    "id": "set2-q9",
    "number": 9,
    "question": "A Linux server uses the Completely Fair Scheduler for normal processes. Several CPU-bound tasks have different amounts of CPU time already consumed, and the scheduler must select the task that has received comparatively less processor time while respecting scheduling weights. Which scheduling decision best describes the CFS approach?",
    "options": [
      {
        "id": "A",
        "text": "Select the process with the largest accumulated virtual runtime because it has demonstrated that it can efficiently use CPU time."
      },
      {
        "id": "B",
        "text": "Select the runnable task with the smallest virtual runtime from the scheduler’s ordered data structure so that tasks that have received less weighted CPU service get an opportunity to run."
      },
      {
        "id": "C",
        "text": "Always execute tasks strictly in creation order so that older processes permanently precede newer processes regardless of CPU consumption."
      },
      {
        "id": "D",
        "text": "Select a random runnable process after every fixed interval because fairness is achieved statistically rather than through tracked execution time."
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "CFS tracks virtual runtime and generally selects the runnable task with the smallest virtual runtime, accounting for scheduling weights to provide fair CPU distribution.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. CFS uses red-black trees ordered by virtual runtime rather than static multi-level feedback queues.",
      "Select the process with the largest accumulated virtual runtime because it has demonstrated that it can efficiently use CPU time.": "Incorrect. CFS uses red-black trees ordered by virtual runtime rather than static multi-level feedback queues.",
      "B": "Correct. Completely Fair Scheduler (CFS) models an ideal multi-tasking CPU and selects the runnable task with the smallest virtual runtime (vruntime).",
      "Select the runnable task with the smallest virtual runtime from the scheduler’s ordered data structure so that tasks that have received less weighted CPU service get an opportunity to run.": "Correct. Completely Fair Scheduler (CFS) models an ideal multi-tasking CPU and selects the runnable task with the smallest virtual runtime (vruntime).",
      "C": "Incorrect. Priority inversion is a synchronization issue where low priority tasks hold resources needed by high priority tasks.",
      "Always execute tasks strictly in creation order so that older processes permanently precede newer processes regardless of CPU consumption.": "Incorrect. Priority inversion is a synchronization issue where low priority tasks hold resources needed by high priority tasks.",
      "D": "Incorrect. Round Robin assigns equal fixed time slices regardless of nice values or virtual runtime.",
      "Select a random runnable process after every fixed interval because fairness is achieved statistically rather than through tracked execution time.": "Incorrect. Round Robin assigns equal fixed time slices regardless of nice values or virtual runtime."
    }
  },
  {
    "id": "set2-q10",
    "number": 10,
    "question": "Assume that an employee at a multinational organization is working from home due to some reason and needs to access the company's internal network to retrieve some files. Which type of Virtual Private Network (VPN) will be best suitable for this case?",
    "options": [
      {
        "id": "A",
        "text": "Remote-access VPN"
      },
      {
        "id": "B",
        "text": "Site-to-site VPN"
      },
      {
        "id": "C",
        "text": "MPLS VPN"
      },
      {
        "id": "D",
        "text": "P2P VPN"
      }
    ],
    "correctAnswer": "A",
    "topic": "Networking",
    "difficulty": "Medium",
    "explanation": "A remote-access VPN connects an individual remote user securely to an organization's private network.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. A remote-access VPN connects an individual remote user securely to an organization's private network.",
      "Remote-access VPN": "Correct. A remote-access VPN connects an individual remote user securely to an organization's private network.",
      "B": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "Site-to-site VPN": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "C": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "MPLS VPN": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "D": "Incorrect. This networking protocol or layer does not provide the required communication guarantees.",
      "P2P VPN": "Incorrect. This networking protocol or layer does not provide the required communication guarantees."
    }
  },
  {
    "id": "set2-q11",
    "number": 11,
    "question": "Two user-space applications on the same Linux machine exchange a very large volume of real-time telemetry. Copying every message through traditional IPC buffers creates significant CPU overhead. The developers want both processes to map the same memory region and coordinate access themselves so that bulk data does not repeatedly have to be copied through the kernel. Which IPC mechanism is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Shared memory, because both processes can map a common memory region and exchange large amounts of data with minimal copying overhead."
      },
      {
        "id": "B",
        "text": "Named pipes only, because FIFO communication always maps the same physical pages directly into both process address spaces without kernel involvement."
      },
      {
        "id": "C",
        "text": "POSIX message queues only, because every message queue implementation bypasses the kernel and provides direct shared physical-memory access."
      },
      {
        "id": "D",
        "text": "DNS resolution, because local applications can exchange telemetry efficiently by placing the data into temporary DNS resource records."
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "Shared memory allows processes to map a common memory region, making it efficient for high-volume data exchange. Synchronization is still required.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Shared memory permits multiple processes to directly map identical physical memory pages, enabling zero-copy high-throughput communication.",
      "Shared memory, because both processes can map a common memory region and exchange large amounts of data with minimal copying overhead.": "Correct. Shared memory permits multiple processes to directly map identical physical memory pages, enabling zero-copy high-throughput communication.",
      "B": "Incorrect. Named pipes serialize data through kernel buffers, incurring system-call overhead for high-volume exchange.",
      "Named pipes only, because FIFO communication always maps the same physical pages directly into both process address spaces without kernel involvement.": "Incorrect. Named pipes serialize data through kernel buffers, incurring system-call overhead for high-volume exchange.",
      "C": "Incorrect. UNIX domain sockets involve protocol framing and kernel buffer copying.",
      "POSIX message queues only, because every message queue implementation bypasses the kernel and provides direct shared physical-memory access.": "Incorrect. UNIX domain sockets involve protocol framing and kernel buffer copying.",
      "D": "Incorrect. Message queues enforce message-size boundaries and kernel copying overhead.",
      "DNS resolution, because local applications can exchange telemetry efficiently by placing the data into temporary DNS resource records.": "Incorrect. Message queues enforce message-size boundaries and kernel copying overhead."
    }
  },
  {
    "id": "set2-q12",
    "number": 12,
    "question": "A user application requests a protected operating-system service such as reading a file. The application executes in user mode and must enter kernel mode so that privileged kernel code can perform the operation safely. Which mechanism is responsible for initiating this controlled transition?",
    "options": [
      {
        "id": "A",
        "text": "A system-call mechanism such as the CPU’s syscall/sysenter instruction or an appropriate software trap, which transfers execution to a privileged kernel entry point."
      },
      {
        "id": "B",
        "text": "A manual modification of the CPU’s cache associativity, which changes the processor from user mode to kernel mode without executing a control-transfer instruction."
      },
      {
        "id": "C",
        "text": "A RAM voltage change, which automatically elevates the current process to privileged execution and grants access to kernel memory."
      },
      {
        "id": "D",
        "text": "A disk-sector remapping operation, which causes the processor to reinterpret the current user process as a kernel thread."
      }
    ],
    "correctAnswer": "A",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "explanation": "System calls provide the controlled interface through which user-mode programs request privileged kernel services.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. System calls (syscalls) serve as the programmatic interface transitioning execution from unprivileged user mode to privileged kernel mode.",
      "A system-call mechanism such as the CPU’s syscall/sysenter instruction or an appropriate software trap, which transfers execution to a privileged kernel entry point.": "Correct. System calls (syscalls) serve as the programmatic interface transitioning execution from unprivileged user mode to privileged kernel mode.",
      "B": "Incorrect. Hardware interrupts are asynchronous signals triggered by physical devices, not programmatic API calls.",
      "A manual modification of the CPU’s cache associativity, which changes the processor from user mode to kernel mode without executing a control-transfer instruction.": "Incorrect. Hardware interrupts are asynchronous signals triggered by physical devices, not programmatic API calls.",
      "C": "Incorrect. Context switching is the OS dispatcher action saving and restoring CPU state, not an API.",
      "A RAM voltage change, which automatically elevates the current process to privileged execution and grants access to kernel memory.": "Incorrect. Context switching is the OS dispatcher action saving and restoring CPU state, not an API.",
      "D": "Incorrect. Signals are asynchronous notifications sent to processes, not the interface to invoke kernel routines.",
      "A disk-sector remapping operation, which causes the processor to reinterpret the current user process as a kernel thread.": "Incorrect. Signals are asynchronous notifications sent to processes, not the interface to invoke kernel routines."
    }
  },
  {
    "id": "set2-q13",
    "number": 13,
    "question": "Assume a network service requires fast, connectionless communication for simple query-response interactions. Some packet loss is acceptable because retransmissions could cause unacceptable delays. Which application-layer protocol is most suitable?",
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
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "C",
    "topic": "Computer Networks",
    "difficulty": "Medium",
    "explanation": "DNS commonly uses UDP for fast, connectionless query-response exchanges, making it suitable when low overhead and speed are important.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. HTTP commonly relies on TCP/TLS-based transport and is not the best fit for the stated lightweight connectionless requirement.",
      "HTTP": "Incorrect. HTTP commonly relies on TCP/TLS-based transport and is not the best fit for the stated lightweight connectionless requirement.",
      "B": "Incorrect. FTP is a connection-oriented file-transfer protocol typically using TCP.",
      "FTP": "Incorrect. FTP is a connection-oriented file-transfer protocol typically using TCP.",
      "C": "Correct. DNS commonly uses UDP for fast connectionless query-response communication.",
      "DNS": "Correct. DNS commonly uses UDP for fast connectionless query-response communication.",
      "D": "Incorrect. SMTP is an email transfer protocol and is normally used over TCP.",
      "SMTP": "Incorrect. SMTP is an email transfer protocol and is normally used over TCP."
    }
  },
  {
    "id": "set2-q14",
    "number": 14,
    "question": "During the development of a web application, a developer is testing a REST API and sends a request to a specific endpoint. The server is reachable and responding normally, but the requested URL does not correspond to any available resource or API endpoint. Which HTTP status code should the server return to indicate that the requested resource could not be found?",
    "options": [
      {
        "id": "A",
        "text": "200"
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
        "text": "404"
      }
    ],
    "correctAnswer": "D",
    "topic": "HTTP",
    "difficulty": "Medium",
    "explanation": "HTTP 404 Not Found indicates that the server could not find the requested resource or endpoint.",
    "marks": 1,
    "optionExplanations": {
      "200": "Incorrect. 200 indicates successful processing.",
      "403": "Incorrect. 403 means the server understood the request but refuses authorization.",
      "404": "Correct. 404 indicates that the requested resource or endpoint was not found.",
      "500": "Incorrect. 500 indicates an internal server error.",
      "A": "Incorrect. 200 indicates successful processing.",
      "B": "Incorrect. 500 indicates an internal server error.",
      "C": "Incorrect. 403 means the server understood the request but refuses authorization.",
      "D": "Correct. 404 indicates that the requested resource or endpoint was not found."
    }
  },
  {
    "id": "set2-q15",
    "number": 15,
    "question": "A cloud-hosted application accepts a user-supplied URL and fetches the referenced image from the server side. An attacker submits a URL targeting the cloud provider’s instance metadata endpoint and attempts to retrieve temporary credentials that are not directly accessible from the public Internet. Which vulnerability is being demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Cross-Site Request Forgery, because the attacker causes a victim browser to submit a state-changing request to the application."
      },
      {
        "id": "B",
        "text": "Server-Side Request Forgery, because the attacker is abusing the application server as a requester to reach an internal or otherwise protected network destination."
      },
      {
        "id": "C",
        "text": "Cross-Site Scripting, because the attacker must first inject executable JavaScript into an HTML response before accessing cloud metadata."
      },
      {
        "id": "D",
        "text": "SQL Injection, because every request containing a URL parameter is interpreted by the database as a SQL expression."
      }
    ],
    "correctAnswer": "B",
    "topic": "Web Security",
    "difficulty": "Medium",
    "explanation": "SSRF occurs when an attacker causes a server-side component to make requests to unintended internal or protected destinations, such as cloud instance metadata services.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. CSRF tricks an authenticated user's browser into submitting unauthorized commands to an application.",
      "Cross-Site Request Forgery, because the attacker causes a victim browser to submit a state-changing request to the application.": "Incorrect. CSRF tricks an authenticated user's browser into submitting unauthorized commands to an application.",
      "B": "Correct. Server-Side Request Forgery (SSRF) exploits a server functionality to read or manipulate resources at an unintended location (such as cloud metadata 169.254.169.254).",
      "Server-Side Request Forgery, because the attacker is abusing the application server as a requester to reach an internal or otherwise protected network destination.": "Correct. Server-Side Request Forgery (SSRF) exploits a server functionality to read or manipulate resources at an unintended location (such as cloud metadata 169.254.169.254).",
      "C": "Incorrect. SQL injection exploits vulnerable database query formation rather than arbitrary HTTP requests.",
      "Cross-Site Scripting, because the attacker must first inject executable JavaScript into an HTML response before accessing cloud metadata.": "Incorrect. SQL injection exploits vulnerable database query formation rather than arbitrary HTTP requests.",
      "D": "Incorrect. XSS injects malicious client-side scripts into web pages viewed by other users.",
      "SQL Injection, because every request containing a URL parameter is interpreted by the database as a SQL expression.": "Incorrect. XSS injects malicious client-side scripts into web pages viewed by other users."
    }
  },
  {
    "id": "set2-q16",
    "number": 16,
    "question": "A security team is reviewing how containers isolate workloads on a shared Linux host. The team needs process, network, mount, and hostname isolation while also ensuring that individual containers cannot consume unlimited CPU or memory. Which Linux kernel mechanisms provide these two major capabilities?",
    "options": [
      {
        "id": "A",
        "text": "Namespaces isolate resources; cgroups control CPU and memory."
      },
      {
        "id": "B",
        "text": "BIOS interrupts isolate processes; DNS controls CPU limits."
      },
      {
        "id": "C",
        "text": "TLS certificates isolate processes; RAID controls memory."
      },
      {
        "id": "D",
        "text": "File extensions isolate resources; compiler flags control CPU."
      }
    ],
    "correctAnswer": "A",
    "topic": "Containers",
    "difficulty": "Medium",
    "explanation": "Linux namespaces isolate views of resources such as processes, networking, mounts, and hostnames, while cgroups limit and account for resources such as CPU and memory.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Linux kernel namespaces isolate system resources (PID, NET, MNT, IPC, UTS), while control groups (cgroups) meter and enforce limits on CPU, memory, and I/O.",
      "Namespaces isolate resources; cgroups control CPU and memory.": "Correct. Linux kernel namespaces isolate system resources (PID, NET, MNT, IPC, UTS), while control groups (cgroups) meter and enforce limits on CPU, memory, and I/O.",
      "B": "Incorrect. BIOS interrupts and DNS operate on hardware bootstrap and name resolution, not container workload isolation.",
      "BIOS interrupts isolate processes; DNS controls CPU limits.": "Incorrect. BIOS interrupts and DNS operate on hardware bootstrap and name resolution, not container workload isolation.",
      "C": "Incorrect. TLS handles cryptographic transport security and RAID manages disk redundancy.",
      "TLS certificates isolate processes; RAID controls memory.": "Incorrect. TLS handles cryptographic transport security and RAID manages disk redundancy.",
      "D": "Incorrect. File extensions and compiler flags do not enforce runtime operating-system resource boundaries.",
      "File extensions isolate resources; compiler flags control CPU.": "Incorrect. File extensions and compiler flags do not enforce runtime operating-system resource boundaries."
    }
  },
  {
    "id": "set2-q17",
    "number": 17,
    "question": "Assume an organization is moving to cloud infrastructure and needs to store highly sensitive business data. The organization wants greater control over security, access, and infrastructure. Which cloud deployment model is typically the most suitable?",
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
    "correctAnswer": "B",
    "topic": "Cloud Computing",
    "difficulty": "Medium",
    "explanation": "A private cloud provides dedicated infrastructure and generally offers greater organizational control over security, access, and configuration for sensitive workloads.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Public cloud uses shared provider infrastructure and generally offers less direct infrastructure control.",
      "Public Cloud": "Incorrect. Public cloud uses shared provider infrastructure and generally offers less direct infrastructure control.",
      "B": "Correct. Private cloud is typically chosen when an organization requires greater control over infrastructure and security.",
      "Private Cloud": "Correct. Private cloud is typically chosen when an organization requires greater control over infrastructure and security.",
      "C": "Incorrect. Hybrid cloud combines private and public environments; it is useful when both models are needed, but the question emphasizes maximum control for sensitive data.",
      "Hybrid Cloud": "Incorrect. Hybrid cloud combines private and public environments; it is useful when both models are needed, but the question emphasizes maximum control for sensitive data.",
      "D": "Incorrect. Community cloud is shared by organizations with common requirements and is not primarily defined by maximum single-organization control.",
      "Community Cloud": "Incorrect. Community cloud is shared by organizations with common requirements and is not primarily defined by maximum single-organization control."
    }
  },
  {
    "id": "set2-q18",
    "number": 18,
    "question": "A Security Operations Center deploys one sensor connected to a network mirror port and another security appliance inline between users and an application server. The first system generates alerts when suspicious traffic is observed, while the second can actively reject or drop malicious packets before they reach the application. Which distinction is correct?",
    "options": [
      {
        "id": "A",
        "text": "The mirror-port system is an IPS because passive monitoring always performs packet blocking, while the inline appliance is an IDS because it only reports suspicious events."
      },
      {
        "id": "B",
        "text": "The mirror-port system behaves as an IDS by passively detecting and alerting, while the inline appliance behaves as an IPS by actively preventing or blocking selected traffic."
      },
      {
        "id": "C",
        "text": "Both systems are IDS devices because intrusion detection and prevention are identical once a signature has been matched."
      },
      {
        "id": "D",
        "text": "Both systems are IPS devices because any security sensor that examines network traffic must operate inline and modify packets before delivery."
      }
    ],
    "correctAnswer": "B",
    "topic": "Network Security",
    "difficulty": "Medium",
    "explanation": "An IDS generally monitors and alerts without being inline, while an IPS is placed inline and can actively block or reject malicious traffic.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. An IDS operates out-of-band in passive monitoring mode, alerting rather than actively dropping malicious packets.",
      "The mirror-port system is an IPS because passive monitoring always performs packet blocking, while the inline appliance is an IDS because it only reports suspicious events.": "Incorrect. An IDS operates out-of-band in passive monitoring mode, alerting rather than actively dropping malicious packets.",
      "B": "Correct. An Intrusion Prevention System (IPS) resides directly in the traffic flow (inline) and actively drops matching malicious packets in real time.",
      "The mirror-port system behaves as an IDS by passively detecting and alerting, while the inline appliance behaves as an IPS by actively preventing or blocking selected traffic.": "Correct. An Intrusion Prevention System (IPS) resides directly in the traffic flow (inline) and actively drops matching malicious packets in real time.",
      "C": "Incorrect. Stateful firewalls track session states at layer 3/4 but typically do not perform deep packet payload analysis like an IPS.",
      "Both systems are IDS devices because intrusion detection and prevention are identical once a signature has been matched.": "Incorrect. Stateful firewalls track session states at layer 3/4 but typically do not perform deep packet payload analysis like an IPS.",
      "D": "Incorrect. Web Application Firewalls (WAF) inspect layer 7 HTTP traffic rather than general network-level packets.",
      "Both systems are IPS devices because any security sensor that examines network traffic must operate inline and modify packets before delivery.": "Incorrect. Web Application Firewalls (WAF) inspect layer 7 HTTP traffic rather than general network-level packets."
    }
  },
  {
    "id": "set2-q19",
    "number": 19,
    "question": "A development team receives a security review of a web API that accepts serialized objects from untrusted clients. The framework reconstructs application objects directly from the supplied serialized data, and researchers demonstrate that crafted serialized input can trigger unexpected method execution during deserialization. Which security issue should the team investigate first?",
    "options": [
      {
        "id": "A",
        "text": "Insecure deserialization, because untrusted serialized data is being converted back into application objects in a way that may allow attacker-controlled behavior or code execution."
      },
      {
        "id": "B",
        "text": "DNS cache poisoning, because serialized objects are stored as DNS records before the application reconstructs them."
      },
      {
        "id": "C",
        "text": "Clickjacking, because object deserialization changes the visual appearance of buttons in the user’s browser."
      },
      {
        "id": "D",
        "text": "ARP spoofing, because serialized data must pass through the local Ethernet layer before the server can interpret it."
      }
    ],
    "correctAnswer": "A",
    "topic": "Web Security",
    "difficulty": "Medium",
    "explanation": "Insecure deserialization occurs when untrusted serialized data is reconstructed unsafely and can cause attacker-controlled behavior or potentially code execution.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Insecure deserialization reconstructs untrusted data without verification, allowing attackers to instantiate malicious gadgets and execute remote code.",
      "Insecure deserialization, because untrusted serialized data is being converted back into application objects in a way that may allow attacker-controlled behavior or code execution.": "Correct. Insecure deserialization reconstructs untrusted data without verification, allowing attackers to instantiate malicious gadgets and execute remote code.",
      "B": "Incorrect. Buffer overflow overwrites memory bounds in unmanaged languages like C/C++, not object deserialization streams.",
      "DNS cache poisoning, because serialized objects are stored as DNS records before the application reconstructs them.": "Incorrect. Buffer overflow overwrites memory bounds in unmanaged languages like C/C++, not object deserialization streams.",
      "C": "Incorrect. Cross-Site Scripting (XSS) executes client scripts in browsers rather than manipulating backend object streams.",
      "Clickjacking, because object deserialization changes the visual appearance of buttons in the user’s browser.": "Incorrect. Cross-Site Scripting (XSS) executes client scripts in browsers rather than manipulating backend object streams.",
      "D": "Incorrect. Clickjacking overlays deceptive UI frames to trick users into clicking buttons.",
      "ARP spoofing, because serialized data must pass through the local Ethernet layer before the server can interpret it.": "Incorrect. Clickjacking overlays deceptive UI frames to trick users into clicking buttons."
    }
  },
  {
    "id": "set2-q20",
    "number": 20,
    "question": "A company wants to protect an internal administrative portal from repeated automated login attempts. The security team wants a control that detects unusually high authentication failure rates and temporarily slows or blocks suspicious clients without permanently disabling legitimate users after one incorrect password. Which approach is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Use rate limiting and progressive throttling for repeated failures."
      },
      {
        "id": "B",
        "text": "Allow unlimited login attempts without restrictions."
      },
      {
        "id": "C",
        "text": "Store passwords in plaintext for faster validation."
      },
      {
        "id": "D",
        "text": "Replace HTTPS with HTTP for easier inspection."
      }
    ],
    "correctAnswer": "A",
    "topic": "Web Security",
    "difficulty": "Medium",
    "explanation": "Rate limiting and progressive throttling reduce automated password-guessing attempts while avoiding overly aggressive lockouts after a single mistake.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Rate limiting and progressive throttling reduce automated password-guessing attempts while avoiding overly aggressive lockouts after a single mistake.",
      "Use rate limiting and progressive throttling for repeated failures.": "Correct. Rate limiting and progressive throttling reduce automated password-guessing attempts while avoiding overly aggressive lockouts after a single mistake.",
      "B": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Allow unlimited login attempts without restrictions.": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "C": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Store passwords in plaintext for faster validation.": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "D": "Incorrect. This operating system mechanism does not address the required system constraint.",
      "Replace HTTPS with HTTP for easier inspection.": "Incorrect. This operating system mechanism does not address the required system constraint."
    }
  },
  {
    "id": "set2-q21",
    "number": 21,
    "question": "A cloud application stores objects that are overwritten frequently and immediately read by other distributed services. The architects require that once a successful write operation completes, subsequent reads reflect the latest object value without waiting for a separate consistency window. Which storage consistency behavior should the architects expect from modern Amazon S3 object operations?",
    "options": [
      {
        "id": "A",
        "text": "Strong read-after-write consistency for supported object PUT, GET, and DELETE operations, so successfully completed changes are immediately observable by subsequent reads."
      },
      {
        "id": "B",
        "text": "A mandatory multi-hour eventual-consistency period during which every newly written object is guaranteed to return its previous value."
      },
      {
        "id": "C",
        "text": "Session consistency based solely on the source client’s IP address, meaning a different client is never allowed to observe a newly written object immediately."
      },
      {
        "id": "D",
        "text": "Strict distributed locking between every application process before any object can be read, because object storage cannot expose data concurrently."
      }
    ],
    "correctAnswer": "A",
    "topic": "Cloud Storage",
    "difficulty": "Medium",
    "explanation": "Modern Amazon S3 provides strong read-after-write consistency for object PUT, GET, and DELETE operations, so successful changes are immediately observable.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Modern cloud object storage (such as Amazon S3) guarantees strong read-after-write consistency for PUT and DELETE operations across all regions.",
      "Strong read-after-write consistency for supported object PUT, GET, and DELETE operations, so successfully completed changes are immediately observable by subsequent reads.": "Correct. Modern cloud object storage (such as Amazon S3) guarantees strong read-after-write consistency for PUT and DELETE operations across all regions.",
      "B": "Incorrect. Eventual consistency causes temporary stale reads after writes, which modern S3 has replaced with strong consistency.",
      "A mandatory multi-hour eventual-consistency period during which every newly written object is guaranteed to return its previous value.": "Incorrect. Eventual consistency causes temporary stale reads after writes, which modern S3 has replaced with strong consistency.",
      "C": "Incorrect. Causal consistency orders only causally related operations, not all concurrent writes.",
      "Session consistency based solely on the source client’s IP address, meaning a different client is never allowed to observe a newly written object immediately.": "Incorrect. Causal consistency orders only causally related operations, not all concurrent writes.",
      "D": "Incorrect. Strict serializability is a transactional database property rather than standard object store semantics.",
      "Strict distributed locking between every application process before any object can be read, because object storage cannot expose data concurrently.": "Incorrect. Strict serializability is a transactional database property rather than standard object store semantics."
    }
  },
  {
    "id": "set2-q22",
    "number": 22,
    "question": "A serverless API receives traffic only a few times per hour. The first request after a long idle period takes significantly longer than subsequent requests, even though the application code and request size are the same. Monitoring shows that a new execution environment must be prepared and the runtime initialized before the handler can process the request. What explains this behavior?",
    "options": [
      {
        "id": "A",
        "text": "A cold start, where the platform creates or resumes a suitable execution environment and performs initialization before the function can handle the request."
      },
      {
        "id": "B",
        "text": "A permanent DNS failure, because serverless functions cannot resolve their own application endpoint after a period of inactivity."
      },
      {
        "id": "C",
        "text": "A database deadlock, because every idle serverless function automatically locks its database connection until another invocation releases it."
      },
      {
        "id": "D",
        "text": "A storage replication failure, because serverless platforms intentionally delay every first request until all objects have been copied between regions."
      }
    ],
    "correctAnswer": "A",
    "topic": "Serverless",
    "difficulty": "Medium",
    "explanation": "A cold start is the startup latency incurred when a serverless platform must initialize an execution environment before handling an invocation.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Cold start latency is the initial execution penalty incurred when a serverless runtime initializes a container, downloads code, and bootstraps dependencies.",
      "A cold start, where the platform creates or resumes a suitable execution environment and performs initialization before the function can handle the request.": "Correct. Cold start latency is the initial execution penalty incurred when a serverless runtime initializes a container, downloads code, and bootstraps dependencies.",
      "B": "Incorrect. Memory leak causes progressive memory exhaustion over multiple executions rather than initialization delay.",
      "A permanent DNS failure, because serverless functions cannot resolve their own application endpoint after a period of inactivity.": "Incorrect. Memory leak causes progressive memory exhaustion over multiple executions rather than initialization delay.",
      "C": "Incorrect. Execution timeout occurs when a function reaches its maximum duration limit.",
      "A database deadlock, because every idle serverless function automatically locks its database connection until another invocation releases it.": "Incorrect. Execution timeout occurs when a function reaches its maximum duration limit.",
      "D": "Incorrect. Concurrency throttling occurs when incoming requests exceed the account's concurrent execution limit.",
      "A storage replication failure, because serverless platforms intentionally delay every first request until all objects have been copied between regions.": "Incorrect. Concurrency throttling occurs when incoming requests exceed the account's concurrent execution limit."
    }
  },
  {
    "id": "set2-q23",
    "number": 23,
    "question": "Assume that a software application has a general Vehicle class and specific classes such as Car and Bike. The Car and Bike classes should inherit common properties and methods from the Vehicle class. Which Java code correctly demonstrates this inheritance relationship?",
    "options": [
      {
        "id": "A",
        "text": "class Vehicle {\n    void start() {\n        System.out.println(\"Bike started\");\n    } System.out.println(\"Vehicle starts\"); }\n}\n\nclass Car extends Vehicle { }\n\nclass Bike extends Vehicle { }"
      },
      {
        "id": "B",
        "text": "class Vehicle { }\n\nclass Car { Vehicle v = new Vehicle(); }\n\nclass Bike { Vehicle v = new Vehicle(); }"
      },
      {
        "id": "C",
        "text": "class Car { }\n\nclass Bike { }\n\nclass Vehicle extends Car { }"
      },
      {
        "id": "D",
        "text": "class Vehicle { }\n\nclass Car implements Vehicle { }\n\nclass Bike implements Vehicle { }"
      }
    ],
    "correctAnswer": "A",
    "topic": "Java OOP",
    "difficulty": "Medium",
    "explanation": "Car and Bike inherit from Vehicle using the Java extends keyword, allowing them to reuse Vehicle's methods and properties.",
    "marks": 1,
    "code": "class Vehicle {\n    void start() {\n        System.out.println(\"Vehicle starts\");\n    }\n}\n\nclass Car extends Vehicle {\n}\n\nclass Bike extends Vehicle {\n}",
    "optionExplanations": {
      "A": "Correct. Using 'class Car extends Vehicle' and 'class Bike extends Vehicle' enables code reuse through single inheritance in Java.",
      "class Vehicle {\n    void start() {\n        System.out.println(\"Bike started\");\n    } System.out.println(\"Vehicle starts\"); }\n}\n\nclass Car extends Vehicle { }\n\nclass Bike extends Vehicle { }": "Correct. Using 'class Car extends Vehicle' and 'class Bike extends Vehicle' enables code reuse through single inheritance in Java.",
      "B": "Incorrect. 'implements' is used for interfaces, not for inheriting concrete or abstract classes.",
      "class Vehicle { }\n\nclass Car { Vehicle v = new Vehicle(); }\n\nclass Bike { Vehicle v = new Vehicle(); }": "Incorrect. 'implements' is used for interfaces, not for inheriting concrete or abstract classes.",
      "C": "Incorrect. 'inherits' is not a valid Java keyword.",
      "class Car { }\n\nclass Bike { }\n\nclass Vehicle extends Car { }": "Incorrect. 'inherits' is not a valid Java keyword.",
      "D": "Incorrect. Multiple inheritance of classes (e.g. extending two parent classes) is disallowed in Java.",
      "class Vehicle { }\n\nclass Car implements Vehicle { }\n\nclass Bike implements Vehicle { }": "Incorrect. Multiple inheritance of classes (e.g. extending two parent classes) is disallowed in Java."
    }
  },
  {
    "id": "set2-q24",
    "number": 24,
    "question": "In MS PowerPoint, a presenter wants to show each bullet point separately during a presentation instead of displaying all points at once. Which feature should be used?",
    "options": [
      {
        "id": "A",
        "text": "Slide Transition"
      },
      {
        "id": "B",
        "text": "Animate Text by Paragraph"
      },
      {
        "id": "C",
        "text": "Slide Master"
      },
      {
        "id": "D",
        "text": "Presenter View"
      }
    ],
    "correctAnswer": "B",
    "topic": "MS PowerPoint",
    "difficulty": "Medium",
    "explanation": "Animate Text by Paragraph makes each paragraph or bullet appear separately according to the animation sequence.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Slide transitions control how slides change, not how individual bullet points appear.",
      "Slide Transition": "Incorrect. Slide transitions control how slides change, not how individual bullet points appear.",
      "B": "Correct. Animate Text by Paragraph displays bullet points separately.",
      "Animate Text by Paragraph": "Correct. Animate Text by Paragraph displays bullet points separately.",
      "C": "Incorrect. Slide Master controls common slide design and formatting.",
      "Slide Master": "Incorrect. Slide Master controls common slide design and formatting.",
      "D": "Incorrect. Presenter View provides presenter-oriented controls and notes, not per-bullet animation.",
      "Presenter View": "Incorrect. Presenter View provides presenter-oriented controls and notes, not per-bullet animation."
    }
  },
  {
    "id": "set2-q25",
    "number": 25,
    "question": "A DevOps team stores Terraform infrastructure state on individual laptops. Two engineers run Terraform at nearly the same time and produce conflicting state updates. The organization wants a single authoritative state location and a mechanism that prevents concurrent operations from corrupting that state. Which design is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Use a shared remote Terraform backend with appropriate state locking and access controls so the team has one authoritative state and concurrent operations are serialized."
      },
      {
        "id": "B",
        "text": "Keep independent local state files for every engineer and merge the state files manually whenever their infrastructure changes overlap."
      },
      {
        "id": "C",
        "text": "Delete the Terraform state file after every deployment so that Terraform will rediscover all infrastructure without any possibility of state conflicts."
      },
      {
        "id": "D",
        "text": "Store the state in a public source-code repository because version control automatically provides distributed locking for Terraform operations."
      }
    ],
    "correctAnswer": "A",
    "topic": "Terraform",
    "difficulty": "Medium",
    "explanation": "A remote backend provides shared authoritative state, while state locking prevents concurrent Terraform operations from modifying the same state unsafely.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Remote state storage (e.g. in S3 with DynamoDB locking) provides a centralized source of truth and prevents conflicting concurrent executions.",
      "Use a shared remote Terraform backend with appropriate state locking and access controls so the team has one authoritative state and concurrent operations are serialized.": "Correct. Remote state storage (e.g. in S3 with DynamoDB locking) provides a centralized source of truth and prevents conflicting concurrent executions.",
      "B": "Incorrect. Committing state files into Git risks exposing secrets and does not support state locking during concurrent runs.",
      "Keep independent local state files for every engineer and merge the state files manually whenever their infrastructure changes overlap.": "Incorrect. Committing state files into Git risks exposing secrets and does not support state locking during concurrent runs.",
      "C": "Incorrect. Local state storage isolates state to one developer's machine, preventing team collaboration.",
      "Delete the Terraform state file after every deployment so that Terraform will rediscover all infrastructure without any possibility of state conflicts.": "Incorrect. Local state storage isolates state to one developer's machine, preventing team collaboration.",
      "D": "Incorrect. Disabling state locks allows simultaneous pipelines to overwrite and corrupt the state file.",
      "Store the state in a public source-code repository because version control automatically provides distributed locking for Terraform operations.": "Incorrect. Disabling state locks allows simultaneous pipelines to overwrite and corrupt the state file."
    }
  },
  {
    "id": "set2-q26",
    "number": 26,
    "question": "In an operating system demand-paging memory subsystem, which page replacement algorithm suffers from Belady's Anomaly (where increasing the number of physical page frames can paradoxically increase the number of page faults)?",
    "options": [
      {
        "id": "A",
        "text": "Least Recently Used (LRU)"
      },
      {
        "id": "B",
        "text": "First-In-First-Out (FIFO)"
      },
      {
        "id": "C",
        "text": "Optimal Page Replacement (OPT)"
      },
      {
        "id": "D",
        "text": "Least Frequently Used (LFU)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Operating Systems / Memory Management",
    "difficulty": "Medium",
    "explanation": "FIFO suffers from Belady's Anomaly, where allocating more physical page frames can lead to more page faults for certain reference strings. Stack-based algorithms like LRU and OPT never experience Belady's Anomaly.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. LRU is a stack algorithm; the set of pages in memory for n frames is always a subset of n+1 frames, so it never experiences Belady's Anomaly.",
      "Least Recently Used (LRU)": "Incorrect. LRU is a stack algorithm; the set of pages in memory for n frames is always a subset of n+1 frames, so it never experiences Belady's Anomaly.",
      "B": "Correct. FIFO can exhibit Belady's Anomaly because its replacement policy does not form a stack hierarchy.",
      "First-In-First-Out (FIFO)": "Correct. FIFO can exhibit Belady's Anomaly because its replacement policy does not form a stack hierarchy.",
      "C": "Incorrect. OPT replaces the page that will not be used for the longest period; it is provably optimal and immune to Belady's Anomaly.",
      "Optimal Page Replacement (OPT)": "Incorrect. OPT replaces the page that will not be used for the longest period; it is provably optimal and immune to Belady's Anomaly.",
      "D": "Incorrect. LFU tracks reference counts rather than strict FIFO queues, though it has other cache-pollution drawbacks.",
      "Least Frequently Used (LFU)": "Incorrect. LFU tracks reference counts rather than strict FIFO queues, though it has other cache-pollution drawbacks."
    },
    "subtopic": "Page Replacement"
  },
  {
    "id": "set2-q27",
    "number": 27,
    "question": "Consider the following Employees table:\n\nCREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(100),\n    salary INT\n);\n\nThe administrator wants to automatically insert a record into Employee_Audit whenever a new employee is added. Which SQL trigger correctly implements this requirement?",
    "options": [
      {
        "id": "A",
        "text": "CREATE TRIGGER employee_audit\nAFTER INSERT ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (NEW.emp_id, NEW.emp_name);"
      },
      {
        "id": "B",
        "text": "CREATE TRIGGER employee_audit\nAFTER SELECT ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (OLD.emp_id, OLD.emp_name);"
      },
      {
        "id": "C",
        "text": "CREATE TRIGGER employee_audit\nBEFORE DELETE ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (NEW.emp_id, NEW.emp_name);"
      },
      {
        "id": "D",
        "text": "CREATE TRIGGER employee_audit\nAFTER UPDATE ON Employees\nFOR EACH ROW\nDELETE FROM Employee_Audit;"
      }
    ],
    "correctAnswer": "A",
    "topic": "SQL",
    "difficulty": "Medium",
    "explanation": "An AFTER INSERT trigger executes after a new employee row is inserted, and NEW contains the values of that newly inserted row.",
    "marks": 1,
    "code": "CREATE TRIGGER employee_audit\nAFTER INSERT ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (NEW.emp_id, NEW.emp_name);",
    "optionExplanations": {
      "A": "Correct. 'AFTER INSERT ON Employees FOR EACH ROW' triggers an audit log entry immediately after a new employee row is committed.",
      "CREATE TRIGGER employee_audit\nAFTER INSERT ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (NEW.emp_id, NEW.emp_name);": "Correct. 'AFTER INSERT ON Employees FOR EACH ROW' triggers an audit log entry immediately after a new employee row is committed.",
      "B": "Incorrect. SELECT statements are read-only queries and do not trigger standard DML audit triggers in ANSI SQL.",
      "CREATE TRIGGER employee_audit\nAFTER SELECT ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (OLD.emp_id, OLD.emp_name);": "Incorrect. SELECT statements are read-only queries and do not trigger standard DML audit triggers in ANSI SQL.",
      "C": "Incorrect. BEFORE DELETE fires on record removal, not when new employees are added.",
      "CREATE TRIGGER employee_audit\nBEFORE DELETE ON Employees\nFOR EACH ROW\nINSERT INTO Employee_Audit(emp_id, emp_name)\nVALUES (NEW.emp_id, NEW.emp_name);": "Incorrect. BEFORE DELETE fires on record removal, not when new employees are added.",
      "D": "Incorrect. AFTER UPDATE fires when existing rows are modified, not when new employees are inserted.",
      "CREATE TRIGGER employee_audit\nAFTER UPDATE ON Employees\nFOR EACH ROW\nDELETE FROM Employee_Audit;": "Incorrect. AFTER UPDATE fires when existing rows are modified, not when new employees are inserted."
    }
  },
  {
    "id": "set2-q28",
    "number": 28,
    "question": "What will be the output of the following pseudocode for a = 2, b = 3, and c = 4?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "17"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "37"
      }
    ],
    "correctAnswer": "D",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "The first condition is 2+3+4 > 5+3, i.e. 9>8, so a becomes 3+4=7. The second condition is 3+4+7 > 10+7, i.e. 14>17, which is false, so b becomes 8+7=15. Then c=(7+4)+4=15. The total is 7+15+15=37.",
    "marks": 1,
    "code": "Integer funn(Integer a, Integer b, Integer c)\n\nif ((a + b + c) > (5 + b))\na = b + c\n\nif ((b + c + a) > (10 + a))\na = (b + a) + b\nElse\nb = (2 + 6) + a\nEnd if\n\nc = (a + c) + c\nEnd if\n\nPrint a + b + c",
    "optionExplanations": {
      "16": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "17": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "25": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "37": "Correct. The first condition is 2+3+4 > 5+3, i.e. 9>8, so a becomes 3+4=7. The second condition is 3+4+7 > 10+7, i.e. 14>17, which is false, so b becomes 8+7=15. Then c=(7+4)+4=15. The total is 7+15+15=37.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "D": "Correct. The first condition is 2+3+4 > 5+3, i.e. 9>8, so a becomes 3+4=7. The second condition is 3+4+7 > 10+7, i.e. 14>17, which is false, so b becomes 8+7=15. Then c=(7+4)+4=15. The total is 7+15+15=37."
    }
  },
  {
    "id": "set2-q29",
    "number": 29,
    "question": "What will be the output of the following pseudocode?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "13"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "First, arr[0][1]=(6&3)&7=2. The condition 3+2<7+2 is true, so arr[0][0]=7+3=10. Then arr[0][0]=(4+2)&10=6&10=2. Finally, arr[1][1]+arr[0][0]=7+2=9.",
    "marks": 1,
    "code": "Integer arr[2][2] = {{3, 5}, {6, 7}}\n\narr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]\n\nif ((arr[0][0] + arr[0][1]) < (arr[1][1] + 2))\narr[0][0] = arr[1][1] + arr[0][0]\nEnd if\n\narr[0][0] = (4 + 2) & arr[0][0]\n\nPrint arr[1][1] + arr[0][0]",
    "optionExplanations": {
      "9": "Correct. The bitwise operations produce arr[0][0]=2 at the end, so 7+2=9.",
      "11": "Incorrect. The final expression is 7+2, which equals 9.",
      "13": "Incorrect. The final values do not sum to 13.",
      "15": "Incorrect. The calculations do not produce 15.",
      "A": "Correct. The bitwise operations produce arr[0][0]=2 at the end, so 7+2=9.",
      "B": "Incorrect. The final values do not sum to 13.",
      "C": "Incorrect. The final expression is 7+2, which equals 9.",
      "D": "Incorrect. The calculations do not produce 15."
    }
  },
  {
    "id": "set2-q30",
    "number": 30,
    "question": "What will be the output of the following pseudocode?",
    "options": [
      {
        "id": "A",
        "text": "42"
      },
      {
        "id": "B",
        "text": "44"
      },
      {
        "id": "C",
        "text": "50"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correctAnswer": "C",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "Start with a=6,b=4. Iteration 1: b=11, then 22, then (22&3)+22=2+22=24. Iteration 2: b=31, then 42, then (42&3)+42=2+42=44. Therefore a+b=6+44=50.",
    "marks": 1,
    "code": "Integer a, b, c\nSet a = 6, b = 4, c = 2\n\nfor(each c from 1 to 2)\nb = 7 + b\nb = (b + 5) + a\nb = (b & 3) + b\nEnd for\n\nPrint a + b",
    "optionExplanations": {
      "42": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "44": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "48": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "50": "Correct. Start with a=6,b=4. Iteration 1: b=11, then 22, then (22&3)+22=2+22=24. Iteration 2: b=31, then 42, then (42&3)+42=2+42=44. Therefore a+b=6+44=50.",
      "A": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "B": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output.",
      "C": "Correct. Start with a=6,b=4. Iteration 1: b=11, then 22, then (22&3)+22=2+22=24. Iteration 2: b=31, then 42, then (42&3)+42=2+42=44. Therefore a+b=6+44=50.",
      "D": "Incorrect. Evaluating the logical branch and arithmetic operations reveals that this choice does not equal the final output."
    }
  },
  {
    "id": "set2-q31",
    "number": 31,
    "question": "In the dataset below, what will be the result of the following Excel formula?\n\n=INDEX(A2:A9, MATCH(MAX(D2:D9), D2:D9, 0))\n\nThe columns are Product, Category, Unit Price, Units Sold, Discount %, Sale Date, and Region.",
    "options": [
      {
        "id": "A",
        "text": "Laptop"
      },
      {
        "id": "B",
        "text": "Monitor"
      },
      {
        "id": "C",
        "text": "Mouse"
      },
      {
        "id": "D",
        "text": "Keyboard"
      }
    ],
    "correctAnswer": "C",
    "topic": "MS Excel",
    "difficulty": "Medium",
    "explanation": "MAX(D2:D9) finds the highest Units Sold value, which is 100 for Mouse. MATCH locates that row and INDEX returns Mouse from column A.",
    "marks": 1,
    "data": {
      "columns": [
        "Product",
        "Category",
        "Unit Price",
        "Units Sold",
        "Discount %",
        "Sale Date",
        "Region"
      ],
      "rows": [
        [
          "Laptop",
          "Electronics",
          850,
          10,
          5,
          "10-01-2023",
          "North"
        ],
        [
          "Monitor",
          "Electronics",
          200,
          25,
          10,
          "15-01-2023",
          "South"
        ],
        [
          "Mouse",
          "Accessories",
          25,
          100,
          0,
          "01-02-2023",
          "North"
        ],
        [
          "Keyboard",
          "Accessories",
          45,
          60,
          0,
          "10-02-2023",
          "East"
        ],
        [
          "Printer",
          "Electronics",
          300,
          15,
          15,
          "05-03-2023",
          "West"
        ],
        [
          "Tablet",
          "Electronics",
          500,
          20,
          5,
          "15-03-2023",
          "South"
        ],
        [
          "Webcam",
          "Accessories",
          50,
          40,
          0,
          "01-04-2023",
          "North"
        ],
        [
          "Speaker",
          "Accessories",
          70,
          30,
          10,
          "10-04-2023",
          "East"
        ]
      ]
    },
    "optionExplanations": {
      "A": "Incorrect. Laptop has 10 units sold, not the maximum.",
      "Laptop": "Incorrect. Laptop has 10 units sold, not the maximum.",
      "B": "Incorrect. Monitor has 25 units sold, not the maximum.",
      "Monitor": "Incorrect. Monitor has 25 units sold, not the maximum.",
      "C": "Correct. Mouse has 100 units sold, the maximum in D2:D9.",
      "Mouse": "Correct. Mouse has 100 units sold, the maximum in D2:D9.",
      "D": "Incorrect. Keyboard has 60 units sold, less than Mouse's 100.",
      "Keyboard": "Incorrect. Keyboard has 60 units sold, less than Mouse's 100."
    }
  },
  {
    "id": "set2-q32",
    "number": 32,
    "question": "Sarah is preparing a document in MS Word and wants to quickly insert the current date without typing it manually. Which keyboard shortcut should she use?",
    "options": [
      {
        "id": "A",
        "text": "Alt + Shift + D"
      },
      {
        "id": "B",
        "text": "Ctrl + Shift + D"
      },
      {
        "id": "C",
        "text": "Alt + D"
      },
      {
        "id": "D",
        "text": "Ctrl + Alt + D"
      }
    ],
    "correctAnswer": "A",
    "topic": "MS Word",
    "difficulty": "Medium",
    "explanation": "In Microsoft Word, Alt + Shift + D inserts the current date field.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. Alt + Shift + D inserts the current date in Microsoft Word.",
      "Alt + Shift + D": "Correct. Alt + Shift + D inserts the current date in Microsoft Word.",
      "B": "Incorrect. Ctrl + Shift + D is not the standard Word shortcut for inserting the current date.",
      "Ctrl + Shift + D": "Incorrect. Ctrl + Shift + D is not the standard Word shortcut for inserting the current date.",
      "C": "Incorrect. Alt + D does not insert the current date in Word.",
      "Alt + D": "Incorrect. Alt + D does not insert the current date in Word.",
      "D": "Incorrect. Ctrl + Alt + D is not the standard Word shortcut for inserting the current date.",
      "Ctrl + Alt + D": "Incorrect. Ctrl + Alt + D is not the standard Word shortcut for inserting the current date."
    }
  },
  {
    "id": "set2-q33",
    "number": 33,
    "question": "In MS PowerPoint, a presenter wants to automatically highlight key bullet points one by one after explaining each, without manually animating every bullet. What is the best feature to use?",
    "options": [
      {
        "id": "A",
        "text": "Apply a delay on each bullet animation."
      },
      {
        "id": "B",
        "text": "Use the 'Appear' animation with trigger action."
      },
      {
        "id": "C",
        "text": "Use the 'By Paragraph' animation option."
      },
      {
        "id": "D",
        "text": "Group bullets and animate them with 'Wipe'."
      }
    ],
    "correctAnswer": "C",
    "topic": "MS PowerPoint",
    "difficulty": "Medium",
    "explanation": "By Paragraph applies the animation separately to each paragraph or bullet, allowing the bullet points to appear one at a time without creating separate animations manually.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. Manually assigning delays to each bullet is less direct than the By Paragraph option.",
      "Apply a delay on each bullet animation.": "Incorrect. Manually assigning delays to each bullet is less direct than the By Paragraph option.",
      "B": "Incorrect. A trigger controls when an animation starts; it is not the feature specifically designed to animate each bullet separately.",
      "Use the 'Appear' animation with trigger action.": "Incorrect. A trigger controls when an animation starts; it is not the feature specifically designed to animate each bullet separately.",
      "C": "Correct. By Paragraph applies the animation to each bullet/paragraph individually.",
      "Use the 'By Paragraph' animation option.": "Correct. By Paragraph applies the animation to each bullet/paragraph individually.",
      "D": "Incorrect. Grouping bullets causes them to be treated together rather than automatically separating each bullet.",
      "Group bullets and animate them with 'Wipe'.": "Incorrect. Grouping bullets causes them to be treated together rather than automatically separating each bullet."
    }
  },
  {
    "id": "set2-q34",
    "number": 34,
    "question": "Assume that you want to find the total number of occurrences of a particular character in the FirstName field. Which of the following SQL queries correctly calculates the number of occurrences of the character 'a' in the FirstName column of the StudentDetails table?",
    "options": [
      {
        "id": "A",
        "text": "SELECT SUM(LENGTH(FirstName) - LENGTH(REPLACE(FirstName, 'a', '')))\nFROM StudentDetails;"
      },
      {
        "id": "B",
        "text": "SELECT COUNT(REPLACE(FirstName, 'a', ''))\nFROM StudentDetails;"
      },
      {
        "id": "C",
        "text": "SELECT SUM(LENGTH(FirstName) + LENGTH(REPLACE(FirstName, 'a', '')))\nFROM StudentDetails;"
      },
      {
        "id": "D",
        "text": "SELECT COUNT(*)\nFROM StudentDetails\nWHERE FirstName LIKE '%a%';"
      }
    ],
    "correctAnswer": "A",
    "topic": "SQL",
    "difficulty": "Medium",
    "explanation": "For each name, removing 'a' reduces the string length by the number of occurrences of 'a'. SUM adds those counts across all rows.",
    "marks": 1,
    "optionExplanations": {
      "A": "Correct. LENGTH(FirstName) - LENGTH(REPLACE(FirstName, 'a', '')) gives the count of 'a' in each row. SUM aggregates these counts across the entire table.",
      "SELECT SUM(LENGTH(FirstName) - LENGTH(REPLACE(FirstName, 'a', '')))\nFROM StudentDetails;": "Correct. LENGTH(FirstName) - LENGTH(REPLACE(FirstName, 'a', '')) gives the count of 'a' in each row. SUM aggregates these counts across the entire table.",
      "B": "Incorrect. COUNT(REPLACE(...)) merely counts non-null strings across rows; it does not calculate character frequency.",
      "SELECT COUNT(REPLACE(FirstName, 'a', ''))\nFROM StudentDetails;": "Incorrect. COUNT(REPLACE(...)) merely counts non-null strings across rows; it does not calculate character frequency.",
      "C": "Incorrect. Adding lengths (LENGTH + LENGTH) sums double lengths minus stripped characters instead of isolating character count.",
      "SELECT SUM(LENGTH(FirstName) + LENGTH(REPLACE(FirstName, 'a', '')))\nFROM StudentDetails;": "Incorrect. Adding lengths (LENGTH + LENGTH) sums double lengths minus stripped characters instead of isolating character count.",
      "D": "Incorrect. COUNT(*) with LIKE '%a%' counts how many students have at least one 'a', ignoring repeated 'a' occurrences in names (e.g. 'Barbara').",
      "SELECT COUNT(*)\nFROM StudentDetails\nWHERE FirstName LIKE '%a%';": "Incorrect. COUNT(*) with LIKE '%a%' counts how many students have at least one 'a', ignoring repeated 'a' occurrences in names (e.g. 'Barbara')."
    }
  },
  {
    "id": "set2-q35",
    "number": 35,
    "question": "Assume that a Java application contains a Printer class that can print documents. The class defines two methods with the same name but different parameter lists. Which type of polymorphism is demonstrated in the following code?",
    "options": [
      {
        "id": "A",
        "text": "Runtime Polymorphism"
      },
      {
        "id": "B",
        "text": "Compile-time Polymorphism"
      },
      {
        "id": "C",
        "text": "Hierarchical Inheritance"
      },
      {
        "id": "D",
        "text": "Multiple Inheritance"
      }
    ],
    "correctAnswer": "B",
    "topic": "Java OOP",
    "difficulty": "Medium",
    "explanation": "Two methods with the same name but different parameter lists demonstrate method overloading, which is compile-time polymorphism in Java.",
    "marks": 1,
    "code": "public class Printer {\n    public void print(String document) {\n        System.out.println(\"Printing: \" + document);\n    }\n\n    public void print(String document, int copies) {\n        for (int i = 0; i < copies; i++) {\n            System.out.println(\"Printing: \" + document);\n        }\n    }\n}",
    "optionExplanations": {
      "A": "Incorrect. Runtime polymorphism is achieved via method overriding in subclasses, not method overloading.",
      "Runtime Polymorphism": "Incorrect. Runtime polymorphism is achieved via method overriding in subclasses, not method overloading.",
      "B": "Correct. Defining multiple methods with the same name but different parameters in the same class is method overloading (compile-time polymorphism).",
      "Compile-time Polymorphism": "Correct. Defining multiple methods with the same name but different parameters in the same class is method overloading (compile-time polymorphism).",
      "C": "Incorrect. There is only a single class here, so no inheritance hierarchy exists.",
      "Hierarchical Inheritance": "Incorrect. There is only a single class here, so no inheritance hierarchy exists.",
      "D": "Incorrect. Java does not support multiple class inheritance, and this code shows overloading within a single class.",
      "Multiple Inheritance": "Incorrect. Java does not support multiple class inheritance, and this code shows overloading within a single class."
    }
  },
  {
    "id": "set2-q36",
    "number": 36,
    "question": "Assume that you want to fetch student names along with their marks. You also want to display the student's details even when no marks record exists for that student. Which SQL query should be used?",
    "options": [
      {
        "id": "A",
        "text": "SELECT s.student_name, m.marks\nFROM Students s\nINNER JOIN Marks m\nON s.student_id = m.student_id;"
      },
      {
        "id": "B",
        "text": "SELECT s.student_name, m.marks\nFROM Students s\nLEFT JOIN Marks m\nON s.student_id = m.student_id;"
      },
      {
        "id": "C",
        "text": "SELECT s.student_name, m.marks\nFROM Students s\nRIGHT JOIN Marks m\nON s.student_id = m.student_id;"
      },
      {
        "id": "D",
        "text": "SELECT s.student_name, m.marks\nFROM Students s\nCROSS JOIN Marks m;"
      }
    ],
    "correctAnswer": "B",
    "topic": "SQL",
    "difficulty": "Medium",
    "explanation": "LEFT JOIN keeps every row from Students and adds matching marks where available. Students without marks receive NULL for marks.",
    "marks": 1,
    "optionExplanations": {
      "A": "Incorrect. INNER JOIN excludes students without a matching marks record.",
      "SELECT s.student_name, m.marks\nFROM Students s\nINNER JOIN Marks m\nON s.student_id = m.student_id;": "Incorrect. INNER JOIN excludes students without a matching marks record.",
      "B": "Correct. LEFT JOIN preserves all students and supplies NULL for students without marks.",
      "SELECT s.student_name, m.marks\nFROM Students s\nLEFT JOIN Marks m\nON s.student_id = m.student_id;": "Correct. LEFT JOIN preserves all students and supplies NULL for students without marks.",
      "C": "Incorrect. RIGHT JOIN preserves all rows from Marks, which does not guarantee all students are shown.",
      "SELECT s.student_name, m.marks\nFROM Students s\nRIGHT JOIN Marks m\nON s.student_id = m.student_id;": "Incorrect. RIGHT JOIN preserves all rows from Marks, which does not guarantee all students are shown.",
      "D": "Incorrect. CROSS JOIN produces every possible Students/Marks combination rather than matching by student_id.",
      "SELECT s.student_name, m.marks\nFROM Students s\nCROSS JOIN Marks m;": "Incorrect. CROSS JOIN produces every possible Students/Marks combination rather than matching by student_id."
    }
  },
  {
    "id": "set2-q37",
    "number": 37,
    "question": "Assume that a software developer is working on a Java application. Which option correctly describes the relationship between the Student class and the student1 object in the given code?",
    "options": [
      {
        "id": "A",
        "text": "Student is an object and student1 is a class."
      },
      {
        "id": "B",
        "text": "Student is a class and student1 is an object (instance) of that class."
      },
      {
        "id": "C",
        "text": "Student and student1 are both classes."
      },
      {
        "id": "D",
        "text": "Student and student1 are both objects."
      }
    ],
    "correctAnswer": "B",
    "topic": "Java OOP",
    "difficulty": "Medium",
    "explanation": "Student is the class definition. The statement Student student1 = new Student(\"Rahul\", 21) creates an instance named student1.",
    "marks": 1,
    "code": "public class Student {\n    private String name;\n    private int age;\n\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student student1 = new Student(\"Rahul\", 21);\n\n        System.out.println(\n            student1.getName() + \" is \" + student1.getAge() + \" years old\"\n        );\n    }\n}",
    "optionExplanations": {
      "A": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Student is an object and student1 is a class.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "B": "Correct. Student is the class definition. The statement Student student1 = new Student(\"Rahul\", 21) creates an instance named student1.",
      "Student is a class and student1 is an object (instance) of that class.": "Correct. Student is the class definition. The statement Student student1 = new Student(\"Rahul\", 21) creates an instance named student1.",
      "C": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Student and student1 are both classes.": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "D": "Incorrect. This OOP structure does not align with standard object-oriented design principles.",
      "Student and student1 are both objects.": "Incorrect. This OOP structure does not align with standard object-oriented design principles."
    }
  },
  {
    "id": "set2-q38",
    "number": 38,
    "question": "What will be the output of the given code when the user clicks the \"Click Me\" button?",
    "options": [
      {
        "id": "A",
        "text": "Click Me"
      },
      {
        "id": "B",
        "text": "btn"
      },
      {
        "id": "C",
        "text": "showMessage(this)"
      },
      {
        "id": "D",
        "text": "undefined"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "The button has id=\"btn\". The onclick handler passes the button element as this, and getAttribute(\"id\") returns \"btn\".",
    "marks": 1,
    "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<button id=\"btn\" onclick=\"showMessage(this);\">\n    Click Me\n</button>\n\n<script>\nfunction showMessage(button) {\n    document.write(button.getAttribute(\"id\"));\n}\n</script>\n\n</body>\n</html>",
    "optionExplanations": {
      "A": "Incorrect. 'Click Me' is the inner text of the button, whereas getAttribute('id') fetches the element's id attribute.",
      "Click Me": "Incorrect. 'Click Me' is the inner text of the button, whereas getAttribute('id') fetches the element's id attribute.",
      "B": "Correct. The element has attribute id='btn', so getAttribute('id') returns 'btn'.",
      "btn": "Correct. The element has attribute id='btn', so getAttribute('id') returns 'btn'.",
      "C": "Incorrect. 'showMessage(this);' is the onclick handler attribute string, not the id attribute.",
      "showMessage(this)": "Incorrect. 'showMessage(this);' is the onclick handler attribute string, not the id attribute.",
      "D": "Incorrect. The id attribute is defined and assigned the string 'btn'.",
      "undefined": "Incorrect. The id attribute is defined and assigned the string 'btn'."
    }
  },
  {
    "id": "set2-q39",
    "number": 39,
    "question": "In the given JavaScript code, the two returned functions trackerA and trackerB are called multiple times. Each function continues to remember its own value even though createTracker has already returned. Which JavaScript concept explains this behavior?",
    "options": [
      {
        "id": "A",
        "text": "Closure, because each returned function retains lexical access to the value variable belonging to its own invocation of createTracker."
      },
      {
        "id": "B",
        "text": "Global variable hoisting, because value is automatically moved into the global scope whenever a function returns another function."
      },
      {
        "id": "C",
        "text": "Prototype inheritance, because every returned function shares the same primitive variable through Function.prototype."
      },
      {
        "id": "D",
        "text": "Event bubbling, because JavaScript preserves local variables by propagating them from the inner function to the outer document object."
      }
    ],
    "correctAnswer": "A",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "A closure is a function together with access to its lexical environment. Each createTracker call creates a separate value binding retained by its returned function.",
    "marks": 1,
    "code": "function createTracker() {\n    let value = 0;\n    return function() {\n        value++;\n        return value;\n    };\n}\n\nconst trackerA = createTracker();\nconst trackerB = createTracker();",
    "optionExplanations": {
      "A": "Correct. A closure retains the lexical scope in which it was declared, creating an encapsulated private variable instance for each function call.",
      "Closure, because each returned function retains lexical access to the value variable belonging to its own invocation of createTracker.": "Correct. A closure retains the lexical scope in which it was declared, creating an encapsulated private variable instance for each function call.",
      "B": "Incorrect. Prototype chaining handles object inheritance rather than private function scope bindings.",
      "Global variable hoisting, because value is automatically moved into the global scope whenever a function returns another function.": "Incorrect. Prototype chaining handles object inheritance rather than private function scope bindings.",
      "C": "Incorrect. Variable hoisting moves variable declarations to the top of scope, but does not preserve isolated per-call state.",
      "Prototype inheritance, because every returned function shares the same primitive variable through Function.prototype.": "Incorrect. Variable hoisting moves variable declarations to the top of scope, but does not preserve isolated per-call state.",
      "D": "Incorrect. Event bubbling propagates DOM events up the hierarchy and is unrelated to lexical closures.",
      "Event bubbling, because JavaScript preserves local variables by propagating them from the inner function to the outer document object.": "Incorrect. Event bubbling propagates DOM events up the hierarchy and is unrelated to lexical closures."
    }
  },
  {
    "id": "set2-q40",
    "number": 40,
    "question": "Write pseudocode to initialize an array named scores with the values [45, 60, 75, 90, 55] and print the third element of the array.",
    "options": [
      {
        "id": "A",
        "text": "scores = [45, 60, 75, 90, 55]\nPRINT scores[3]"
      },
      {
        "id": "B",
        "text": "scores = [45, 60, 75, 90, 55]\nPRINT scores[2]"
      },
      {
        "id": "C",
        "text": "scores = [45, 60, 75, 90, 55]\nPRINT scores[1]"
      },
      {
        "id": "D",
        "text": "scores = [45, 60, 75, 90, 55]\nPRINT scores[4]"
      }
    ],
    "correctAnswer": "B",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "Using zero-based indexing, the third element is at index 2, which contains 75.",
    "marks": 1,
    "code": "scores = [45, 60, 75, 90, 55]\nPRINT scores[2]",
    "optionExplanations": {
      "A": "Incorrect. Under zero-based indexing, index 3 is the fourth element, 90.",
      "scores = [45, 60, 75, 90, 55]\nPRINT scores[3]": "Incorrect. Under zero-based indexing, index 3 is the fourth element, 90.",
      "B": "Correct. Under zero-based indexing, index 2 is the third element, 75.",
      "scores = [45, 60, 75, 90, 55]\nPRINT scores[2]": "Correct. Under zero-based indexing, index 2 is the third element, 75.",
      "C": "Incorrect. Index 1 is the second element, 60.",
      "scores = [45, 60, 75, 90, 55]\nPRINT scores[1]": "Incorrect. Index 1 is the second element, 60.",
      "D": "Incorrect. Index 4 is the fifth element, 55.",
      "scores = [45, 60, 75, 90, 55]\nPRINT scores[4]": "Incorrect. Index 4 is the fifth element, 55."
    }
  },
  {
    "id": "set2-q41",
    "number": 41,
    "question": "Which of the following represents the correct console output order and why for the given JavaScript execution pattern?",
    "options": [
      {
        "id": "A",
        "text": "A, D, C, B, because synchronous code completes first, the microtask queue is drained, and only then is the timer macrotask processed."
      },
      {
        "id": "B",
        "text": "A, D, B, C, because every setTimeout callback always executes before Promise reactions regardless of the microtask queue."
      },
      {
        "id": "C",
        "text": "C, A, D, B, because Promise callbacks are inserted at the beginning of the JavaScript call stack before synchronous statements execute."
      },
      {
        "id": "D",
        "text": "A, B, D, C, because a zero-millisecond timer executes immediately and pauses the current JavaScript call stack before the final synchronous statement."
      }
    ],
    "correctAnswer": "A",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "Synchronous statements execute first, producing A and D. Promise reactions are microtasks and run before the timer callback, so C appears before B.",
    "marks": 1,
    "code": "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
    "optionExplanations": {
      "A": "Correct. Synchronous code ('A', 'D') runs first. The Promise callback is a microtask and executes next. The setTimeout callback is a macrotask and executes last.",
      "A, D, C, B, because synchronous code completes first, the microtask queue is drained, and only then is the timer macrotask processed.": "Correct. Synchronous code ('A', 'D') runs first. The Promise callback is a microtask and executes next. The setTimeout callback is a macrotask and executes last.",
      "B": "Incorrect. Microtasks (Promise handlers) always have higher execution priority than timer macrotasks.",
      "A, D, B, C, because every setTimeout callback always executes before Promise reactions regardless of the microtask queue.": "Incorrect. Microtasks (Promise handlers) always have higher execution priority than timer macrotasks.",
      "C": "Incorrect. Synchronous code on the call stack always runs before any asynchronous callbacks or microtasks.",
      "C, A, D, B, because Promise callbacks are inserted at the beginning of the JavaScript call stack before synchronous statements execute.": "Incorrect. Synchronous code on the call stack always runs before any asynchronous callbacks or microtasks.",
      "D": "Incorrect. setTimeout is asynchronous even with 0ms delay; it cannot interrupt or execute before synchronous code finishes.",
      "A, B, D, C, because a zero-millisecond timer executes immediately and pauses the current JavaScript call stack before the final synchronous statement.": "Incorrect. setTimeout is asynchronous even with 0ms delay; it cannot interrupt or execute before synchronous code finishes."
    }
  },
  {
    "id": "set2-q42",
    "number": 42,
    "question": "Identify the CSS3 code snippet that can be used to create a circle with a black border and no background.",
    "options": [
      {
        "id": "A",
        "text": ".circle {\n    width: 100px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 50%;\n}"
      },
      {
        "id": "B",
        "text": ".circle {\n    width: 100px;\n    height: 50px;\n    border: 2px solid black;\n    border-radius: 20%;\n}"
      },
      {
        "id": "C",
        "text": ".circle {\n    width: 100px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 0;\n}"
      },
      {
        "id": "D",
        "text": ".circle {\n    width: 50px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 10%;\n}"
      }
    ],
    "correctAnswer": "A",
    "topic": "CSS",
    "difficulty": "Medium",
    "explanation": "Equal width and height create a square, and border-radius: 50% turns it into a circle. No background property means the background remains transparent by default.",
    "marks": 1,
    "code": ".circle {\n    width: 100px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 50%;\n}",
    "optionExplanations": {
      "A": "Correct. Equal dimensions (100px width and height) combined with border-radius: 50% form a perfect circle with a black border.",
      ".circle {\n    width: 100px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 50%;\n}": "Correct. Equal dimensions (100px width and height) combined with border-radius: 50% form a perfect circle with a black border.",
      "B": "Incorrect. Unequal width and height (100px by 50px) with 20% radius creates a rounded oval/rectangle, not a circle.",
      ".circle {\n    width: 100px;\n    height: 50px;\n    border: 2px solid black;\n    border-radius: 20%;\n}": "Incorrect. Unequal width and height (100px by 50px) with 20% radius creates a rounded oval/rectangle, not a circle.",
      "C": "Incorrect. border-radius: 0 creates sharp right-angled corners (a square).",
      ".circle {\n    width: 100px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 0;\n}": "Incorrect. border-radius: 0 creates sharp right-angled corners (a square).",
      "D": "Incorrect. 50px by 100px with 10% radius creates an elongated rectangular pill with slightly rounded corners.",
      ".circle {\n    width: 50px;\n    height: 100px;\n    border: 2px solid black;\n    border-radius: 10%;\n}": "Incorrect. 50px by 100px with 10% radius creates an elongated rectangular pill with slightly rounded corners."
    }
  },
  {
    "id": "set2-q43",
    "number": 43,
    "question": "What will be the output of the given code?",
    "options": [
      {
        "id": "A",
        "text": "2,5,8,11"
      },
      {
        "id": "B",
        "text": "5,8,11,14"
      },
      {
        "id": "C",
        "text": "6,15,24,33"
      },
      {
        "id": "D",
        "text": "3,6,9,12"
      }
    ],
    "correctAnswer": "B",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "explanation": "map() applies myFunction to every element and adds 3: 2→5, 5→8, 8→11, and 11→14.",
    "marks": 1,
    "code": "var arr = [2, 5, 8, 11];\n\nfunction myFunction(elem) {\n    return elem + 3;\n}\n\ndocument.write(arr.map(myFunction));",
    "optionExplanations": {
      "A": "Incorrect. map() adds 3 to each element, so the original values are not returned unchanged.",
      "2,5,8,11": "Incorrect. map() adds 3 to each element, so the original values are not returned unchanged.",
      "B": "Correct. Each element increases by 3: 2→5, 5→8, 8→11, 11→14.",
      "5,8,11,14": "Correct. Each element increases by 3: 2→5, 5→8, 8→11, 11→14.",
      "C": "Incorrect. These values are not produced by adding 3 to the input array.",
      "6,15,24,33": "Incorrect. These values are not produced by adding 3 to the input array.",
      "D": "Incorrect. Adding 1 rather than 3 would produce 3,6,9,12.",
      "3,6,9,12": "Incorrect. Adding 1 rather than 3 would produce 3,6,9,12."
    }
  },
  {
    "id": "set2-q44",
    "number": 44,
    "question": "A developer uses the following integer-swap technique without a temporary variable:\n\nx = x ^ y;\ny = x ^ y;\nx = x ^ y;\n\nThe developer wants to understand why the original values are recovered after the three operations. Which set of XOR properties provides the mathematical basis for the technique?",
    "options": [
      {
        "id": "A",
        "text": "XOR is associative and commutative, x XOR x equals 0, and x XOR 0 equals x; these properties allow the combined value to be progressively cancelled to recover each original operand."
      },
      {
        "id": "B",
        "text": "XOR is ordinary integer division, so each operation removes one operand from the other by dividing their binary representations into equal halves."
      },
      {
        "id": "C",
        "text": "XOR always shifts every bit one position to the left, so three XOR operations perform a reversible multiplication and division sequence."
      },
      {
        "id": "D",
        "text": "XOR converts every integer to floating point before comparing the operands, which allows the processor to preserve both values without storing either one."
      }
    ],
    "correctAnswer": "A",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "explanation": "XOR is associative and commutative, x XOR x = 0, and x XOR 0 = x. These identities allow the original values to be recovered through the three XOR operations.",
    "marks": 1,
    "code": "x = x ^ y;\ny = x ^ y;\nx = x ^ y;",
    "optionExplanations": {
      "A": "Correct. Because A XOR A = 0 and A XOR 0 = A, applying XOR three times swaps variables in place without auxiliary storage.",
      "XOR is associative and commutative, x XOR x equals 0, and x XOR 0 equals x; these properties allow the combined value to be progressively cancelled to recover each original operand.": "Correct. Because A XOR A = 0 and A XOR 0 = A, applying XOR three times swaps variables in place without auxiliary storage.",
      "B": "Incorrect. Addition/subtraction without temporary variables is vulnerable to integer overflow in fixed-width types.",
      "XOR is ordinary integer division, so each operation removes one operand from the other by dividing their binary representations into equal halves.": "Incorrect. Addition/subtraction without temporary variables is vulnerable to integer overflow in fixed-width types.",
      "C": "Incorrect. Bitwise AND destroys bit information and cannot restore original values.",
      "XOR always shifts every bit one position to the left, so three XOR operations perform a reversible multiplication and division sequence.": "Incorrect. Bitwise AND destroys bit information and cannot restore original values.",
      "D": "Incorrect. Bitwise OR saturates bits to 1 and is not reversible.",
      "XOR converts every integer to floating point before comparing the operands, which allows the processor to preserve both values without storing either one.": "Incorrect. Bitwise OR saturates bits to 1 and is not reversible."
    }
  },
  {
    "id": "set2-q45",
    "number": 45,
    "question": "Which of the following values of s could possibly print \"Valid\" when passed to the function below?",
    "options": [
      {
        "id": "A",
        "text": "Abc12345"
      },
      {
        "id": "B",
        "text": "Abc@1234"
      },
      {
        "id": "C",
        "text": "ABC123"
      },
      {
        "id": "D",
        "text": "abc123456"
      }
    ],
    "correctAnswer": "A",
    "topic": "Pseudocode",
    "difficulty": "Medium",
    "explanation": "The pattern [a-zA-Z0-9]{8} requires exactly eight characters, each of which must be a letter or digit. Abc12345 contains exactly eight alphanumeric characters.",
    "marks": 1,
    "code": "function checkString(string s):\n\nif s matches \"[a-zA-Z0-9]{8}\"\n\nthen print \"Valid\"\n\nelse\n\nthen print \"Not Valid\"\n\nendif\n\nend function checkString",
    "optionExplanations": {
      "A": "Correct. Abc12345 contains exactly eight alphanumeric characters.",
      "Abc12345": "Correct. Abc12345 contains exactly eight alphanumeric characters.",
      "B": "Incorrect. '@' is not an alphanumeric character.",
      "Abc@1234": "Incorrect. '@' is not an alphanumeric character.",
      "C": "Incorrect. ABC123 contains only six characters.",
      "ABC123": "Incorrect. ABC123 contains only six characters.",
      "D": "Incorrect. abc123456 contains nine characters.",
      "abc123456": "Incorrect. abc123456 contains nine characters."
    }
  }
];

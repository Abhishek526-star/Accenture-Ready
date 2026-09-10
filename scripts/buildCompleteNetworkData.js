// scripts/buildCompleteNetworkData.js
import fs from 'fs';
import path from 'path';

const tier1Questions = [
  {
    id: 'net-1-01',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'OSI & TCP/IP',
    question: 'Which OSI layer is responsible for transmitting raw bits over a physical medium?',
    options: [
      { id: 'A', text: 'Data Link' },
      { id: 'B', text: 'Network' },
      { id: 'C', text: 'Physical' },
      { id: 'D', text: 'Transport' }
    ],
    correctAnswer: 'C',
    explanation: 'The Physical layer (Layer 1) transmits raw unstructured bit streams over physical transmission media such as cables, fiber optics, or radio signals.',
    accentureTip: 'Physical = Bits (Layer 1)'
  },
  {
    id: 'net-1-02',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'OSI & TCP/IP',
    question: 'A network device forwards frames based on MAC addresses. Which OSI layer is primarily involved?',
    options: [
      { id: 'A', text: 'Physical' },
      { id: 'B', text: 'Data Link' },
      { id: 'C', text: 'Network' },
      { id: 'D', text: 'Transport' }
    ],
    correctAnswer: 'B',
    explanation: 'The Data Link layer (Layer 2) provides node-to-node communication over a local network, handles framing, and uses MAC addresses to forward frames.',
    accentureTip: 'MAC → Data Link → Layer 2'
  },
  {
    id: 'net-1-03',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'OSI & TCP/IP',
    question: 'Which OSI layer is responsible for logical addressing and routing?',
    options: [
      { id: 'A', text: 'Transport' },
      { id: 'B', text: 'Session' },
      { id: 'C', text: 'Network' },
      { id: 'D', text: 'Data Link' }
    ],
    correctAnswer: 'C',
    explanation: 'The Network layer (Layer 3) handles logical addressing (IPv4/IPv6) and routes packets across intermediate routers between different networks.',
    accentureTip: 'IP + Routing → Network Layer'
  },
  {
    id: 'net-1-04',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'Which protocols operate primarily at the Transport layer?',
    options: [
      { id: 'A', text: 'HTTP and FTP' },
      { id: 'B', text: 'IP and ICMP' },
      { id: 'C', text: 'TCP and UDP' },
      { id: 'D', text: 'Ethernet and Wi-Fi' }
    ],
    correctAnswer: 'C',
    explanation: 'TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two primary Transport layer (Layer 4) protocols providing end-to-end communication.',
    accentureTip: 'Layer 4 → TCP / UDP'
  },
  {
    id: 'net-1-05',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which of the following is an Application-layer protocol?',
    options: [
      { id: 'A', text: 'HTTP' },
      { id: 'B', text: 'IP' },
      { id: 'C', text: 'TCP' },
      { id: 'D', text: 'Ethernet' }
    ],
    correctAnswer: 'A',
    explanation: 'HTTP (Hypertext Transfer Protocol) is an Application-layer (Layer 7) protocol used by web browsers and web servers for communication.',
    accentureTip: 'HTTP, DNS, FTP, SMTP, SSH = Layer 7'
  },
  {
    id: 'net-1-06',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'OSI & TCP/IP',
    question: 'Which data unit sequence is correct from Layer 1 to Layer 3?',
    options: [
      { id: 'A', text: 'Physical → Frames, Data Link → Bits, Network → Packets' },
      { id: 'B', text: 'Physical → Bits, Data Link → Frames, Network → Packets' },
      { id: 'C', text: 'Physical → Packets, Data Link → Segments, Network → Bits' },
      { id: 'D', text: 'Physical → Data, Data Link → Packets, Network → Frames' }
    ],
    correctAnswer: 'B',
    explanation: 'The Protocol Data Units (PDUs) are: Physical → Bits, Data Link → Frames, Network → Packets, Transport → Segments/Datagrams, and Application → Data.',
    accentureTip: 'Bits → Frames → Packets → Segments → Data'
  },
  {
    id: 'net-1-07',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Networking Devices',
    question: 'A company uses a device to forward packets between two different IP networks. Which device is being used?',
    options: [
      { id: 'A', text: 'Hub' },
      { id: 'B', text: 'Switch' },
      { id: 'C', text: 'Router' },
      { id: 'D', text: 'Repeater' }
    ],
    correctAnswer: 'C',
    explanation: 'A Router is a Layer 3 device that uses IP addresses and routing tables to forward packets between different IP networks.',
    accentureTip: 'Different IP networks → Router'
  },
  {
    id: 'net-1-08',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Networking Devices',
    question: 'A switch receives an Ethernet frame and uses the destination MAC address to determine the appropriate outgoing port. Which layer is primarily involved?',
    options: [
      { id: 'A', text: 'Physical' },
      { id: 'B', text: 'Data Link' },
      { id: 'C', text: 'Network' },
      { id: 'D', text: 'Transport' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethernet switching primarily operates at Layer 2 (Data Link layer), forwarding frames based on entries in its MAC address table.',
    accentureTip: 'Switch → MAC → Layer 2'
  },
  {
    id: 'net-1-09',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Networking Devices',
    question: 'A network device receives a signal and sends it out through all of its ports without making forwarding decisions based on MAC addresses. Which device is this?',
    options: [
      { id: 'A', text: 'Router' },
      { id: 'B', text: 'Switch' },
      { id: 'C', text: 'Hub' },
      { id: 'D', text: 'Gateway' }
    ],
    correctAnswer: 'C',
    explanation: 'A Hub is an unintelligent Layer 1 device that repeats and broadcasts incoming electrical signals out to all other connected ports without inspecting frames or MAC addresses.',
    accentureTip: 'Hub = Layer 1 (Broadcasts blindly to all ports)'
  },
  {
    id: 'net-1-10',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'A banking application requires data to arrive reliably and in the correct order. Which protocol is more appropriate?',
    options: [
      { id: 'A', text: 'UDP' },
      { id: 'B', text: 'TCP' },
      { id: 'C', text: 'ICMP' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'B',
    explanation: 'TCP guarantees reliable, ordered data delivery through sequence numbers, acknowledgements, flow control, and retransmissions, making it essential for financial transactions.',
    accentureTip: 'Reliable + Ordered = TCP'
  },
  {
    id: 'net-1-11',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'An online gaming application prioritizes low latency and can tolerate occasional packet loss. Which protocol is generally more suitable?',
    options: [
      { id: 'A', text: 'TCP' },
      { id: 'B', text: 'UDP' },
      { id: 'C', text: 'FTP' },
      { id: 'D', text: 'SMTP' }
    ],
    correctAnswer: 'B',
    explanation: 'UDP (User Datagram Protocol) is connectionless and has minimal overhead with no retransmission delays, making it ideal for real-time multiplayer gaming, VoIP, and live video streaming.',
    accentureTip: 'Low latency / Loss tolerance → UDP'
  },
  {
    id: 'net-1-12',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'What is the correct order of the TCP three-way handshake?',
    options: [
      { id: 'A', text: 'ACK → SYN → SYN-ACK' },
      { id: 'B', text: 'SYN → ACK → SYN-ACK' },
      { id: 'C', text: 'SYN → SYN-ACK → ACK' },
      { id: 'D', text: 'SYN-ACK → SYN → ACK' }
    ],
    correctAnswer: 'C',
    explanation: 'The TCP three-way handshake sequence is: Step 1 Client sends SYN, Step 2 Server responds with SYN-ACK, Step 3 Client acknowledges with ACK.',
    accentureTip: 'S-S-A : SYN → SYN-ACK → ACK'
  },
  {
    id: 'net-1-13',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'Which of the following is a characteristic of TCP?',
    options: [
      { id: 'A', text: 'Connectionless communication' },
      { id: 'B', text: 'No retransmission' },
      { id: 'C', text: 'Reliable and ordered delivery' },
      { id: 'D', text: 'No flow control' }
    ],
    correctAnswer: 'C',
    explanation: 'TCP is connection-oriented and provides reliable, ordered data delivery, error detection, flow control (sliding window), and congestion control.',
    accentureTip: 'TCP = Connection-oriented + Reliable + Ordered'
  },
  {
    id: 'net-1-14',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Transport & Handshake',
    question: 'Which statement about UDP is correct?',
    options: [
      { id: 'A', text: 'It requires a three-way handshake' },
      { id: 'B', text: 'It guarantees delivery' },
      { id: 'C', text: 'It is connectionless and has low protocol overhead' },
      { id: 'D', text: 'It guarantees packet ordering' }
    ],
    correctAnswer: 'C',
    explanation: 'UDP does not establish a connection before sending data, does not acknowledge packets, and has a tiny 8-byte header, giving it very low protocol overhead.',
    accentureTip: 'UDP = Fast + Lightweight + Connectionless'
  },
  {
    id: 'net-1-15',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'IP & Addressing',
    question: 'How many bits are present in an IPv4 address?',
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '32' },
      { id: 'C', text: '64' },
      { id: 'D', text: '128' }
    ],
    correctAnswer: 'B',
    explanation: 'An IPv4 address consists of 32 bits, divided into 4 octets of 8 bits each (e.g. 192.168.1.1), providing approximately 4.29 billion total addresses.',
    accentureTip: 'IPv4 = 32 bits | 4 Octets'
  },
  {
    id: 'net-1-16',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'IP & Addressing',
    question: 'How many bits are present in an IPv6 address?',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '64' },
      { id: 'C', text: '96' },
      { id: 'D', text: '128' }
    ],
    correctAnswer: 'D',
    explanation: 'An IPv6 address consists of 128 bits, written in hexadecimal notation grouped into 8 blocks of 16 bits separated by colons (e.g., 2001:0db8::1).',
    accentureTip: 'IPv6 = 128 bits (~3.4×10³⁸ addresses)'
  },
  {
    id: 'net-1-17',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'IP & Addressing',
    question: 'Which of the following is a private IPv4 address?',
    options: [
      { id: 'A', text: '8.8.8.8' },
      { id: 'B', text: '172.20.10.5' },
      { id: 'C', text: '1.1.1.1' },
      { id: 'D', text: '142.250.1.1' }
    ],
    correctAnswer: 'B',
    explanation: 'RFC 1918 defines the Class B private address range as 172.16.0.0 to 172.31.255.255. 172.20.10.5 falls within this range.',
    accentureTip: 'Private Class B Range = 172.16.0.0 to 172.31.255.255'
  },
  {
    id: 'net-1-18',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'IP & Addressing',
    question: 'Which range is reserved for private IPv4 networks?',
    options: [
      { id: 'A', text: '11.0.0.0/8' },
      { id: 'B', text: '10.0.0.0/8' },
      { id: 'C', text: '100.0.0.0/8' },
      { id: 'D', text: '200.0.0.0/8' }
    ],
    correctAnswer: 'B',
    explanation: 'The three RFC 1918 private IPv4 ranges are: 10.0.0.0/8 (10.x.x.x), 172.16.0.0/12 (172.16.x.x - 172.31.x.x), and 192.168.0.0/16 (192.168.x.x).',
    accentureTip: 'Private Ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16'
  },
  {
    id: 'net-1-19',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'IP & Addressing',
    question: 'A home network has 20 devices using private IP addresses, but all devices access the Internet using one public IP address. Which technology commonly enables this?',
    options: [
      { id: 'A', text: 'DNS' },
      { id: 'B', text: 'DHCP' },
      { id: 'C', text: 'NAT' },
      { id: 'D', text: 'FTP' }
    ],
    correctAnswer: 'C',
    explanation: 'NAT (Network Address Translation) translates internal private IP addresses to a public routable IP address, conserving IPv4 addresses and allowing multiple hosts to share one Internet IP.',
    accentureTip: 'Private IP ↔ Public IP translation → NAT'
  },
  {
    id: 'net-1-20',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'A user enters www.example.com. The computer needs to determine the corresponding IP address. Which service is primarily responsible?',
    options: [
      { id: 'A', text: 'DHCP' },
      { id: 'B', text: 'DNS' },
      { id: 'C', text: 'FTP' },
      { id: 'D', text: 'SMTP' }
    ],
    correctAnswer: 'B',
    explanation: 'DNS (Domain Name System) translates human-friendly domain names (such as www.example.com) into numerical IP addresses so that computers can route packets.',
    accentureTip: 'DNS = Domain Name → IP'
  },
  {
    id: 'net-1-21',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'A newly connected laptop automatically receives an IP address, subnet mask, default gateway, and DNS server information. Which protocol is responsible?',
    options: [
      { id: 'A', text: 'DNS' },
      { id: 'B', text: 'DHCP' },
      { id: 'C', text: 'HTTP' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'B',
    explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically and dynamically assigns IP configuration parameters (IP, subnet mask, gateway, DNS) to client devices.',
    accentureTip: 'Auto IP Assignment → DHCP'
  },
  {
    id: 'net-1-22',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'What is the correct order of the DHCP process?',
    options: [
      { id: 'A', text: 'Discover → Request → Offer → Acknowledgment' },
      { id: 'B', text: 'Offer → Discover → Request → Acknowledgment' },
      { id: 'C', text: 'Discover → Offer → Request → Acknowledgment' },
      { id: 'D', text: 'Request → Discover → Offer → Acknowledgment' }
    ],
    correctAnswer: 'C',
    explanation: 'The DHCP handshake follows the DORA acronym: Discover (client broadcasts), Offer (server offers IP), Request (client requests lease), Acknowledgment (server confirms).',
    accentureTip: 'DORA: Discover → Offer → Request → Acknowledge'
  },
  {
    id: 'net-1-23',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which port is commonly associated with HTTP?',
    options: [
      { id: 'A', text: '21' },
      { id: 'B', text: '22' },
      { id: 'C', text: '80' },
      { id: 'D', text: '443' }
    ],
    correctAnswer: 'C',
    explanation: 'HTTP (Hypertext Transfer Protocol) communicates over TCP port 80 by default. (Port 21 is FTP, 22 is SSH, 443 is HTTPS).',
    accentureTip: 'HTTP = Port 80'
  },
  {
    id: 'net-1-24',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which port is commonly associated with HTTPS?',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '53' },
      { id: 'C', text: '80' },
      { id: 'D', text: '443' }
    ],
    correctAnswer: 'D',
    explanation: 'HTTPS (HTTP Secure over TLS/SSL) uses TCP port 443 by default to encrypt and authenticate web traffic.',
    accentureTip: 'HTTPS = Port 443'
  },
  {
    id: 'net-1-25',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which protocol is primarily used for file transfer?',
    options: [
      { id: 'A', text: 'FTP' },
      { id: 'B', text: 'SMTP' },
      { id: 'C', text: 'DNS' },
      { id: 'D', text: 'DHCP' }
    ],
    correctAnswer: 'A',
    explanation: 'FTP (File Transfer Protocol) is designed specifically for uploading, downloading, and transferring files between client and server across a network on port 21.',
    accentureTip: 'FTP = File Transfer Protocol (Port 21)'
  },
  {
    id: 'net-1-26',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'A system administrator wants to securely log into a remote Linux server and execute commands. Which protocol should be used?',
    options: [
      { id: 'A', text: 'FTP' },
      { id: 'B', text: 'SSH' },
      { id: 'C', text: 'HTTP' },
      { id: 'D', text: 'SMTP' }
    ],
    correctAnswer: 'B',
    explanation: 'SSH (Secure Shell) runs on TCP port 22 and provides encrypted remote terminal login, secure command execution, and secure data communications.',
    accentureTip: 'SSH = Secure Remote Shell (Port 22)'
  },
  {
    id: 'net-1-27',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which protocol is primarily associated with sending/relaying email?',
    options: [
      { id: 'A', text: 'POP3' },
      { id: 'B', text: 'IMAP' },
      { id: 'C', text: 'SMTP' },
      { id: 'D', text: 'DNS' }
    ],
    correctAnswer: 'C',
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used to push/send and relay emails between mail servers, traditionally on port 25. POP3 and IMAP are used to retrieve email.',
    accentureTip: 'SMTP = Send email | POP3/IMAP = Receive email'
  },
  {
    id: 'net-1-28',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'Which protocol-port pair is correctly matched?',
    options: [
      { id: 'A', text: 'HTTP — 22' },
      { id: 'B', text: 'SSH — 80' },
      { id: 'C', text: 'DNS — 53' },
      { id: 'D', text: 'HTTPS — 21' }
    ],
    correctAnswer: 'C',
    explanation: 'DNS operates on Port 53. HTTP is Port 80, SSH is Port 22, HTTPS is Port 443, and FTP is Port 21.',
    accentureTip: 'DNS = Port 53'
  },
  {
    id: 'net-1-29',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Routing & Security',
    question: 'A user opens a website using HTTPS. During communication, the connection should protect data from eavesdropping and tampering. Which technology provides the security for HTTPS?',
    options: [
      { id: 'A', text: 'DHCP' },
      { id: 'B', text: 'TLS' },
      { id: 'C', text: 'DNS' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'B',
    explanation: 'TLS (Transport Layer Security) is the cryptographic protocol underlying HTTPS that encrypts network sessions to ensure confidentiality and data integrity.',
    accentureTip: 'HTTPS = HTTP secured with TLS'
  },
  {
    id: 'net-1-30',
    tier: 1,
    tierName: 'Tier 1: OSI, TCP/IP & Protocols',
    topic: 'Protocols & Ports',
    question: 'A company has the following requirements: (1) Devices within a LAN communicate using MAC addresses, (2) A router forwards packets between different networks, (3) TCP is used when reliable delivery is required, (4) DNS resolves domain names, (5) DHCP automatically assigns IP configuration. Which statement is correct?',
    options: [
      { id: 'A', text: 'Switch → MAC, Router → IP, TCP → Reliable, DNS → Name resolution, DHCP → IP configuration' },
      { id: 'B', text: 'Switch → IP, Router → MAC, UDP → Reliable, DNS → IP assignment, DHCP → Email' },
      { id: 'C', text: 'Switch → TCP, Router → UDP, DNS → File transfer, DHCP → Encryption' },
      { id: 'D', text: 'Switch → DNS, Router → DHCP, TCP → Name resolution, DNS → IP assignment' }
    ],
    correctAnswer: 'A',
    explanation: 'Option A maps each component to its exact role: Switch works with MAC addresses, Router with IP packets, TCP guarantees reliability, DNS resolves names, and DHCP assigns IP configurations.',
    accentureTip: 'Switch: MAC | Router: IP | TCP: Reliable | DNS: Names | DHCP: Config'
  }
];

const tier2Questions = [
  {
    id: 'net-2-01',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'IP & Addressing',
    question: 'A computer needs to communicate with another device on the same Ethernet LAN. Which address is primarily used for frame delivery at Layer 2?',
    options: [
      { id: 'A', text: 'Port number' },
      { id: 'B', text: 'MAC address' },
      { id: 'C', text: 'Domain name' },
      { id: 'D', text: 'URL' }
    ],
    correctAnswer: 'B',
    explanation: 'On a local Ethernet LAN, data is transmitted in frames using destination and source MAC (Media Access Control) addresses at Layer 2.',
    accentureTip: 'Local Ethernet delivery → MAC'
  },
  {
    id: 'net-2-02',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'IP & Addressing',
    question: 'Which address is primarily used for logical addressing and routing packets between different networks?',
    options: [
      { id: 'A', text: 'MAC address' },
      { id: 'B', text: 'IP address' },
      { id: 'C', text: 'Port number' },
      { id: 'D', text: 'DNS name' }
    ],
    correctAnswer: 'B',
    explanation: 'An IP address is a logical Layer 3 address used by routers to find paths and forward packets across disparate networks.',
    accentureTip: 'Routing between networks → IP'
  },
  {
    id: 'net-2-03',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'IP & Addressing',
    question: 'Which statement comparing MAC and IP addresses is correct?',
    options: [
      { id: 'A', text: 'MAC addresses are used for routing across the Internet, while IP addresses are only used inside a LAN' },
      { id: 'B', text: 'IP addresses are Layer-2 addresses, while MAC addresses are Layer-3 addresses' },
      { id: 'C', text: 'MAC addresses are primarily used for local-link delivery, while IP addresses are used for logical addressing and routing' },
      { id: 'D', text: 'MAC and IP addresses are exactly the same thing' }
    ],
    correctAnswer: 'C',
    explanation: 'MAC addresses identify the physical network interface locally on a LAN (Layer 2), whereas IP addresses provide logical addressing that routes traffic across multiple networks (Layer 3).',
    accentureTip: 'MAC = Local delivery | IP = Network routing'
  },
  {
    id: 'net-2-04',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'A computer knows that the destination is 192.168.1.20, but it does not know the destination MAC address. What should it use?',
    options: [
      { id: 'A', text: 'DNS' },
      { id: 'B', text: 'DHCP' },
      { id: 'C', text: 'ARP' },
      { id: 'D', text: 'ICMP' }
    ],
    correctAnswer: 'C',
    explanation: 'ARP (Address Resolution Protocol) resolves a known IPv4 address into the corresponding physical Layer 2 MAC address on the local network segment.',
    accentureTip: 'Known IP → Need MAC → ARP'
  },
  {
    id: 'net-2-05',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'What type of transmission is normally used by an IPv4 ARP request on an Ethernet LAN?',
    options: [
      { id: 'A', text: 'Unicast' },
      { id: 'B', text: 'Broadcast' },
      { id: 'C', text: 'Multicast' },
      { id: 'D', text: 'Anycast' }
    ],
    correctAnswer: 'B',
    explanation: 'An ARP request is broadcast to all devices in the local broadcast domain (destination MAC FF:FF:FF:FF:FF:FF) asking "Who has this IP?".',
    accentureTip: 'ARP Request → Broadcast'
  },
  {
    id: 'net-2-06',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'After receiving an ARP request, the device that owns the requested IPv4 address typically sends the ARP reply as:',
    options: [
      { id: 'A', text: 'Unicast to the requester' },
      { id: 'B', text: 'Broadcast to all networks' },
      { id: 'C', text: 'Multicast to the Internet' },
      { id: 'D', text: 'Anycast' }
    ],
    correctAnswer: 'A',
    explanation: 'The target machine already knows the sender MAC address from the ARP request header, so it replies directly via Unicast.',
    accentureTip: 'ARP Reply → Unicast'
  },
  {
    id: 'net-2-07',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'Which mapping correctly distinguishes DNS and ARP?',
    options: [
      { id: 'A', text: 'DNS: IP → MAC' },
      { id: 'B', text: 'ARP: Domain → IP' },
      { id: 'C', text: 'DNS: Domain → IP' },
      { id: 'D', text: 'ARP: Domain → IP' }
    ],
    correctAnswer: 'C',
    explanation: 'DNS resolves Domain names to IP addresses (e.g. google.com → 142.250.x.x), whereas ARP resolves IP addresses to MAC addresses.',
    accentureTip: 'DNS: Name → IP | ARP: IP → MAC'
  },
  {
    id: 'net-2-08',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'Which protocol is commonly used by the ping command?',
    options: [
      { id: 'A', text: 'TCP' },
      { id: 'B', text: 'UDP' },
      { id: 'C', text: 'ICMP' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'C',
    explanation: 'Ping sends ICMP Echo Request messages and listens for ICMP Echo Reply messages to measure round-trip time and network reachability.',
    accentureTip: 'Ping → ICMP'
  },
  {
    id: 'net-2-09',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'ARP & ICMP',
    question: 'What is a major purpose of ICMP?',
    options: [
      { id: 'A', text: 'File transfer' },
      { id: 'B', text: 'Email delivery' },
      { id: 'C', text: 'Network diagnostics and error reporting' },
      { id: 'D', text: 'Assigning IP addresses' }
    ],
    correctAnswer: 'C',
    explanation: 'ICMP (Internet Control Message Protocol) is used by routers and hosts to report network errors (e.g. Destination Unreachable, TTL Expired) and perform diagnostics (Ping, Traceroute).',
    accentureTip: 'ICMP = Diagnostics & Error Reporting'
  },
  {
    id: 'net-2-10',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Protocols & Ports',
    question: 'A server has the address 192.168.1.10:443. What does 443 represent?',
    options: [
      { id: 'A', text: 'MAC address' },
      { id: 'B', text: 'Network address' },
      { id: 'C', text: 'Port number' },
      { id: 'D', text: 'Subnet mask' }
    ],
    correctAnswer: 'C',
    explanation: 'In the notation 192.168.1.10:443, 192.168.1.10 is the IP address identifying the machine, and 443 is the Port number identifying the HTTPS service.',
    accentureTip: 'IP : Port = Host : Service'
  },
  {
    id: 'net-2-11',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Protocols & Ports',
    question: 'Which statement comparing IP and Port is most accurate?',
    options: [
      { id: 'A', text: 'IP identifies a host/interface, while a port identifies a service/application endpoint' },
      { id: 'B', text: 'IP identifies the application, while port identifies the physical cable' },
      { id: 'C', text: 'IP and port are both MAC addresses' },
      { id: 'D', text: 'Port identifies the network, while IP identifies the protocol' }
    ],
    correctAnswer: 'A',
    explanation: 'An IP address determines the destination host or interface on the network; the Port number directs incoming traffic to the specific running process/application on that host.',
    accentureTip: 'IP = Building address | Port = Apartment number'
  },
  {
    id: 'net-2-12',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'A network connects computers within a single university laboratory building. What type of network is this?',
    options: [
      { id: 'A', text: 'WAN' },
      { id: 'B', text: 'MAN' },
      { id: 'C', text: 'LAN' },
      { id: 'D', text: 'PAN' }
    ],
    correctAnswer: 'C',
    explanation: 'A LAN (Local Area Network) spans a localized geographic area like a single building, office, laboratory, or campus.',
    accentureTip: 'Single room/building = LAN'
  },
  {
    id: 'net-2-13',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'A company connects offices located in India, the USA, and Germany. What type of network is most appropriate?',
    options: [
      { id: 'A', text: 'PAN' },
      { id: 'B', text: 'LAN' },
      { id: 'C', text: 'MAN' },
      { id: 'D', text: 'WAN' }
    ],
    correctAnswer: 'D',
    explanation: 'A WAN (Wide Area Network) connects computers and local networks across large geographical distances, across countries or continents.',
    accentureTip: 'Countries / Continents = WAN'
  },
  {
    id: 'net-2-14',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'A network connects several branch offices spread across the same metropolitan city. Which type of network is this?',
    options: [
      { id: 'A', text: 'PAN' },
      { id: 'B', text: 'LAN' },
      { id: 'C', text: 'MAN' },
      { id: 'D', text: 'WAN' }
    ],
    correctAnswer: 'C',
    explanation: 'A MAN (Metropolitan Area Network) covers a city-wide geographic area connecting multiple institutional or corporate campuses.',
    accentureTip: 'City-scale = MAN'
  },
  {
    id: 'net-2-15',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'A smartphone communicates with wireless earbuds using Bluetooth. This is an example of:',
    options: [
      { id: 'A', text: 'PAN' },
      { id: 'B', text: 'LAN' },
      { id: 'C', text: 'MAN' },
      { id: 'D', text: 'WAN' }
    ],
    correctAnswer: 'A',
    explanation: 'A PAN (Personal Area Network) covers personal devices within a short radius of a single individual (typically a few meters via Bluetooth/Zigbee).',
    accentureTip: 'Personal devices (~meters) = PAN'
  },
  {
    id: 'net-2-16',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'In a network, all computers connect to a central switch. Which topology is this?',
    options: [
      { id: 'A', text: 'Bus' },
      { id: 'B', text: 'Ring' },
      { id: 'C', text: 'Star' },
      { id: 'D', text: 'Mesh' }
    ],
    correctAnswer: 'C',
    explanation: 'In a Star topology, all network nodes connect to a single central hub or switch. This is the dominant architecture for modern Ethernet LANs.',
    accentureTip: 'All nodes connected to central switch = Star'
  },
  {
    id: 'net-2-17',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'In a star topology, what happens if the central switch fails?',
    options: [
      { id: 'A', text: 'Only one connected computer is affected' },
      { id: 'B', text: 'The entire connected portion of the network can be disrupted' },
      { id: 'C', text: 'Nothing happens' },
      { id: 'D', text: 'The network automatically becomes a bus topology' }
    ],
    correctAnswer: 'B',
    explanation: 'The central switch in a Star topology is a single point of failure; if it shuts down or crashes, all devices connected through it lose network communication.',
    accentureTip: 'Star failure: Central hub breaks → Entire segment down'
  },
  {
    id: 'net-2-18',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'Which topology provides highest redundancy because devices have multiple direct interconnections?',
    options: [
      { id: 'A', text: 'Bus' },
      { id: 'B', text: 'Star' },
      { id: 'C', text: 'Ring' },
      { id: 'D', text: 'Mesh' }
    ],
    correctAnswer: 'D',
    explanation: 'Mesh topology provides multiple redundant paths. In a full mesh of n devices, there are n(n-1)/2 physical links, ensuring complete fault tolerance.',
    accentureTip: 'Highest redundancy / Multi-path = Mesh [n(n-1)/2]'
  },
  {
    id: 'net-2-19',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'What is the primary purpose of subnetting?',
    options: [
      { id: 'A', text: 'Convert domain names into IP addresses' },
      { id: 'B', text: 'Divide a network into smaller logical networks' },
      { id: 'C', text: 'Encrypt network traffic' },
      { id: 'D', text: 'Replace MAC addresses' }
    ],
    correctAnswer: 'B',
    explanation: 'Subnetting partitions a large IP network into smaller logical sub-networks to improve IP utilization, enforce security boundaries, and reduce broadcast domains.',
    accentureTip: 'Subnetting = Divide network into smaller subnets'
  },
  {
    id: 'net-2-20',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'What does /24 mean in: 192.168.1.0/24?',
    options: [
      { id: 'A', text: '24 host bits' },
      { id: 'B', text: '24 network-prefix bits' },
      { id: 'C', text: '24 total bits' },
      { id: 'D', text: '24 available hosts' }
    ],
    correctAnswer: 'B',
    explanation: 'The CIDR notation /24 specifies that the first 24 bits belong to the network prefix, leaving 32 - 24 = 8 bits for host addressing.',
    accentureTip: '/24 = 24 Network Bits | 8 Host Bits'
  },
  {
    id: 'net-2-21',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'How many total IPv4 addresses are in a typical /24 subnet?',
    options: [
      { id: 'A', text: '64' },
      { id: 'B', text: '128' },
      { id: 'C', text: '256' },
      { id: 'D', text: '512' }
    ],
    correctAnswer: 'C',
    explanation: 'With a /24 prefix, there are 32 - 24 = 8 host bits. Total addresses = 2⁸ = 256.',
    accentureTip: '/24 Total Addresses = 2⁸ = 256'
  },
  {
    id: 'net-2-22',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'Traditionally, how many usable host addresses are available in a /24 IPv4 subnet?',
    options: [
      { id: 'A', text: '252' },
      { id: 'B', text: '254' },
      { id: 'C', text: '256' },
      { id: 'D', text: '128' }
    ],
    correctAnswer: 'B',
    explanation: 'Usable hosts = 2^h - 2. For /24, 2⁸ - 2 = 256 - 2 = 254 usable hosts (subtracting the network address .0 and broadcast address .255).',
    accentureTip: 'Usable Hosts = 2^h - 2 (256 - 2 = 254)'
  },
  {
    id: 'net-2-23',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'How many total IPv4 addresses are in a /26 subnet?',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '64' },
      { id: 'C', text: '128' },
      { id: 'D', text: '256' }
    ],
    correctAnswer: 'B',
    explanation: 'For /26, host bits = 32 - 26 = 6. Total addresses = 2⁶ = 64.',
    accentureTip: '/26 Total = 2⁶ = 64'
  },
  {
    id: 'net-2-24',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'Traditionally, how many usable host addresses are available in a /26 subnet?',
    options: [
      { id: 'A', text: '62' },
      { id: 'B', text: '64' },
      { id: 'C', text: '30' },
      { id: 'D', text: '126' }
    ],
    correctAnswer: 'A',
    explanation: 'Usable hosts = 2⁶ - 2 = 64 - 2 = 62 usable addresses.',
    accentureTip: '/26 Usable = 64 - 2 = 62'
  },
  {
    id: 'net-2-25',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'For the subnet 192.168.1.0/24, which is the network address?',
    options: [
      { id: 'A', text: '192.168.1.0' },
      { id: 'B', text: '192.168.1.1' },
      { id: 'C', text: '192.168.1.254' },
      { id: 'D', text: '192.168.1.255' }
    ],
    correctAnswer: 'A',
    explanation: 'The first address where all host bits are 0 is the Network identifier (192.168.1.0). .1 is the first usable host, .254 is the last usable host, and .255 is the broadcast address.',
    accentureTip: 'First address (all host bits 0) = Network Address'
  },
  {
    id: 'net-2-26',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Subnetting & CIDR',
    question: 'For 192.168.1.0/24, which is the broadcast address?',
    options: [
      { id: 'A', text: '192.168.1.0' },
      { id: 'B', text: '192.168.1.1' },
      { id: 'C', text: '192.168.1.254' },
      { id: 'D', text: '192.168.1.255' }
    ],
    correctAnswer: 'D',
    explanation: 'The last address where all host bits are 1 is the directed Broadcast address (192.168.1.255).',
    accentureTip: 'Last address (all host bits 1) = Broadcast Address'
  },
  {
    id: 'net-2-27',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Networking Devices',
    question: 'A PC wants to communicate with a server located outside its local subnet. Where will the PC normally send the packet first?',
    options: [
      { id: 'A', text: 'DNS server' },
      { id: 'B', text: 'Default gateway' },
      { id: 'C', text: 'DHCP server' },
      { id: 'D', text: "Switch's MAC table" }
    ],
    correctAnswer: 'B',
    explanation: 'Whenever the destination IP is outside the host local subnet, the host forwards the packet to its Default Gateway (router interface) to reach external networks.',
    accentureTip: 'Outside local network → Default Gateway'
  },
  {
    id: 'net-2-28',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'IP & Addressing',
    question: 'A home router allows several devices with private IP addresses to access the Internet using a public IP address. Which technology enables this address translation?',
    options: [
      { id: 'A', text: 'ARP' },
      { id: 'B', text: 'NAT' },
      { id: 'C', text: 'ICMP' },
      { id: 'D', text: 'DNS' }
    ],
    correctAnswer: 'B',
    explanation: 'NAT (Network Address Translation) swaps private source IP addresses with the public IP of the router interface facing the ISP.',
    accentureTip: 'Private to public translation = NAT'
  },
  {
    id: 'net-2-29',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'IP & Addressing',
    question: 'Twenty private devices access the Internet using the same public IPv4 address, with different port mappings. Which technology is most closely associated with this?',
    options: [
      { id: 'A', text: 'PAT' },
      { id: 'B', text: 'ARP' },
      { id: 'C', text: 'ICMP' },
      { id: 'D', text: 'DHCP' }
    ],
    correctAnswer: 'A',
    explanation: 'PAT (Port Address Translation / NAT Overload) maps multiple internal private IP addresses to a single public IP address by assigning unique source port numbers to each outbound connection.',
    accentureTip: 'One public IP + Port mappings = PAT'
  },
  {
    id: 'net-2-30',
    tier: 2,
    tierName: 'Tier 2: Addressing, Subnetting & Topologies',
    topic: 'Topologies & Domains',
    question: 'A video server sends the same stream to a specific group of subscribed receivers rather than to every device on the network. What type of communication is most appropriate?',
    options: [
      { id: 'A', text: 'Unicast' },
      { id: 'B', text: 'Broadcast' },
      { id: 'C', text: 'Multicast' },
      { id: 'D', text: 'Anycast' }
    ],
    correctAnswer: 'C',
    explanation: 'Multicast delivers packets from one sender to an explicitly subscribed group of destination hosts without flooding the rest of the network.',
    accentureTip: 'One to Subscribed Group = Multicast'
  }
];

const tier3Questions = [
  {
    id: 'net-3-01',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'A PC wants to communicate with a server located outside its local subnet. Which device/interface does it normally send the packet toward first?',
    options: [
      { id: 'A', text: 'DNS server' },
      { id: 'B', text: 'Default gateway' },
      { id: 'C', text: 'DHCP server' },
      { id: 'D', text: 'Repeater' }
    ],
    correctAnswer: 'B',
    explanation: 'The default gateway provides the next-hop exit point for all packets heading outside the local broadcast domain/subnet.',
    accentureTip: 'Outside subnet → Default Gateway'
  },
  {
    id: 'net-3-02',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'A network administrator installs a device that receives a weak signal, regenerates it, and retransmits it. What device is this?',
    options: [
      { id: 'A', text: 'Router' },
      { id: 'B', text: 'Switch' },
      { id: 'C', text: 'Repeater' },
      { id: 'D', text: 'Gateway' }
    ],
    correctAnswer: 'C',
    explanation: 'A Repeater operates at Layer 1 (Physical layer) to clean, amplify, and regenerate distorted or attenuated electrical/optical signals to extend transmission distance.',
    accentureTip: 'Weak signal → Regenerate → Repeater'
  },
  {
    id: 'net-3-03',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'A repeater primarily operates at which OSI layer?',
    options: [
      { id: 'A', text: 'Physical' },
      { id: 'B', text: 'Data Link' },
      { id: 'C', text: 'Network' },
      { id: 'D', text: 'Transport' }
    ],
    correctAnswer: 'A',
    explanation: 'Repeaters operate at Layer 1 (Physical layer) dealing purely with raw electrical bits and physical signal waveforms.',
    accentureTip: 'Repeater = Layer 1 (Physical)'
  },
  {
    id: 'net-3-04',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'Which device primarily forwards frames based on MAC addresses and connects network segments?',
    options: [
      { id: 'A', text: 'Router' },
      { id: 'B', text: 'Bridge' },
      { id: 'C', text: 'Repeater' },
      { id: 'D', text: 'Modem' }
    ],
    correctAnswer: 'B',
    explanation: 'A Bridge connects two or more network segments and forwards Ethernet frames based on MAC addresses at Layer 2 (Data Link layer).',
    accentureTip: 'Bridge → MAC → Layer 2'
  },
  {
    id: 'net-3-05',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'Which statement comparing Bridge and Router is correct?',
    options: [
      { id: 'A', text: 'Bridge primarily works with MAC addresses, while router primarily uses IP addresses' },
      { id: 'B', text: 'Bridge routes packets between IP networks, while router only regenerates signals' },
      { id: 'C', text: 'Bridge operates at Layer 4, while router operates at Layer 1' },
      { id: 'D', text: 'Bridge and router perform exactly the same function' }
    ],
    correctAnswer: 'A',
    explanation: 'A Bridge operates at Layer 2 forwarding frames using MAC addresses; a Router operates at Layer 3 routing packets using IP addresses.',
    accentureTip: 'Bridge: MAC (L2) | Router: IP (L3)'
  },
  {
    id: 'net-3-06',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'What does the term modem originate from?',
    options: [
      { id: 'A', text: 'Monitor-Demonstrator' },
      { id: 'B', text: 'Modulator-Demodulator' },
      { id: 'C', text: 'Module-Domain' },
      { id: 'D', text: 'Modern-Digital' }
    ],
    correctAnswer: 'B',
    explanation: 'The word Modem is a portmanteau of Modulator-Demodulator, converting digital computer signals to analog signals for transmission and vice versa.',
    accentureTip: 'Modem = Modulator + Demodulator'
  },
  {
    id: 'net-3-07',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: "An organization routes employees' web requests through an intermediary that can inspect requests, enforce access policies, and cache content. What is this intermediary?",
    options: [
      { id: 'A', text: 'Proxy server' },
      { id: 'B', text: 'Repeater' },
      { id: 'C', text: 'Modem' },
      { id: 'D', text: 'DHCP server' }
    ],
    correctAnswer: 'A',
    explanation: 'A Forward Proxy server acts as an application intermediary between client web browsers and external web servers to enforce security filtering, anonymization, and caching.',
    accentureTip: 'Intermediary + Caching + Policy → Proxy'
  },
  {
    id: 'net-3-08',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'An employee working from home needs secure access to an internal company application over the Internet. Which technology is most appropriate?',
    options: [
      { id: 'A', text: 'DNS' },
      { id: 'B', text: 'VPN' },
      { id: 'C', text: 'DHCP' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'B',
    explanation: 'A VPN (Virtual Private Network) encapsulates and encrypts traffic across public networks to securely connect remote workers to internal private company networks.',
    accentureTip: 'Remote access + Encrypted tunnel → VPN'
  },
  {
    id: 'net-3-09',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'Which statement distinguishing Proxy and VPN is most accurate?',
    options: [
      { id: 'A', text: 'A proxy can act as an intermediary for application traffic, while a VPN typically provides a protected network connection/tunnel' },
      { id: 'B', text: 'A VPN only translates domain names, while a proxy assigns IP addresses' },
      { id: 'C', text: 'Proxy and VPN always perform exactly the same function' },
      { id: 'D', text: 'A proxy is used only for physical-layer communication' }
    ],
    correctAnswer: 'A',
    explanation: 'A proxy handles specific application-level traffic (e.g. HTTP/HTTPS), while a VPN creates an encrypted tunnel for all network traffic from the device.',
    accentureTip: 'Proxy = App intermediary | VPN = Full network tunnel'
  },
  {
    id: 'net-3-10',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'Which security control primarily allows or blocks network traffic based on configured rules?',
    options: [
      { id: 'A', text: 'Firewall' },
      { id: 'B', text: 'DNS' },
      { id: 'C', text: 'DHCP' },
      { id: 'D', text: 'Repeater' }
    ],
    correctAnswer: 'A',
    explanation: 'A Firewall inspects packet headers (IPs, ports, protocols) or application states and allows or blocks traffic according to security rule sets.',
    accentureTip: 'Allows or blocks traffic on rules → Firewall'
  },
  {
    id: 'net-3-11',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'Which statement comparing Firewall and Router is correct?',
    options: [
      { id: 'A', text: 'Router primarily decides where packets should be forwarded; firewall primarily controls whether traffic is permitted according to security policy' },
      { id: 'B', text: 'Router encrypts all data, while firewall assigns IP addresses' },
      { id: 'C', text: 'Firewall performs only signal regeneration' },
      { id: 'D', text: 'Router and firewall are exactly the same device/function' }
    ],
    correctAnswer: 'A',
    explanation: 'A router determines path forwarding (routing table), whereas a firewall enforces permit/deny access control decisions.',
    accentureTip: 'Router: Where packets go | Firewall: Whether allowed'
  },
  {
    id: 'net-3-12',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'What is the main purpose of routing?',
    options: [
      { id: 'A', text: 'Convert domain names into IP addresses' },
      { id: 'B', text: 'Determine paths for packets between networks' },
      { id: 'C', text: 'Encrypt application data' },
      { id: 'D', text: 'Assign MAC addresses' }
    ],
    correctAnswer: 'B',
    explanation: 'Routing is the process of selecting optimum paths across one or more interconnected networks to deliver packets from source to destination.',
    accentureTip: 'Routing = Finding path across networks'
  },
  {
    id: 'net-3-13',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: "Which information would normally be found in a router's routing table?",
    options: [
      { id: 'A', text: 'Destination network and next hop' },
      { id: 'B', text: 'User passwords' },
      { id: 'C', text: 'Email messages' },
      { id: 'D', text: 'Browser history' }
    ],
    correctAnswer: 'A',
    explanation: 'Routing tables store entries comprising: Destination Network Prefix, Next Hop IP, Outgoing Interface, and Routing Metric/Cost.',
    accentureTip: 'Routing Table: Destination Network + Next Hop'
  },
  {
    id: 'net-3-14',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'In IPv4, which prefix commonly represents the default route?',
    options: [
      { id: 'A', text: '255.255.255.255/32' },
      { id: 'B', text: '127.0.0.0/8' },
      { id: 'C', text: '0.0.0.0/0' },
      { id: 'D', text: '192.168.0.0/16' }
    ],
    correctAnswer: 'C',
    explanation: '0.0.0.0/0 represents the Default Route (gateway of last resort) matched when no more specific subnet entry exists in the routing table.',
    accentureTip: 'Default Route = 0.0.0.0/0'
  },
  {
    id: 'net-3-15',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'An administrator manually configures a route on a router. What type of routing is this?',
    options: [
      { id: 'A', text: 'Dynamic routing' },
      { id: 'B', text: 'Static routing' },
      { id: 'C', text: 'Multicast routing only' },
      { id: 'D', text: 'Broadcast routing' }
    ],
    correctAnswer: 'B',
    explanation: 'Static routing refers to routes manually keyed into the router configuration by an administrator without dynamic protocol communication.',
    accentureTip: 'Manual configuration = Static Routing'
  },
  {
    id: 'net-3-16',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'Routers automatically learn and update routes using routing protocols. What type of routing is this?',
    options: [
      { id: 'A', text: 'Static routing' },
      { id: 'B', text: 'Dynamic routing' },
      { id: 'C', text: 'Manual routing' },
      { id: 'D', text: 'Physical routing' }
    ],
    correctAnswer: 'B',
    explanation: 'Dynamic routing protocols (OSPF, BGP, RIP) allow routers to discover neighbors, exchange topology information, and automatically recalculate routes upon link failures.',
    accentureTip: 'Automatic protocol learning = Dynamic Routing'
  },
  {
    id: 'net-3-17',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Routing & Security',
    question: 'Which of the following is a dynamic routing protocol?',
    options: [
      { id: 'A', text: 'HTTP' },
      { id: 'B', text: 'OSPF' },
      { id: 'C', text: 'DNS' },
      { id: 'D', text: 'FTP' }
    ],
    correctAnswer: 'B',
    explanation: 'OSPF (Open Shortest Path First) is a standard interior gateway dynamic link-state routing protocol.',
    accentureTip: 'OSPF, RIP, BGP = Dynamic Routing Protocols'
  },
  {
    id: 'net-3-18',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'A service is deployed on several servers. A client sends traffic to an address that can be routed to one appropriate server among several possible instances. What addressing concept best describes this?',
    options: [
      { id: 'A', text: 'Broadcast' },
      { id: 'B', text: 'Multicast' },
      { id: 'C', text: 'Anycast' },
      { id: 'D', text: 'Flooding' }
    ],
    correctAnswer: 'C',
    explanation: 'In Anycast, multiple physical servers advertise the same IP address, and routers route each client request to the topologically nearest/optimal server (widely used in DNS root servers and CDNs).',
    accentureTip: 'One to nearest member of group = Anycast'
  },
  {
    id: 'net-3-19',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'A client sends a request to exactly one web server. What type of communication is this?',
    options: [
      { id: 'A', text: 'Broadcast' },
      { id: 'B', text: 'Multicast' },
      { id: 'C', text: 'Unicast' },
      { id: 'D', text: 'Anycast' }
    ],
    correctAnswer: 'C',
    explanation: 'Unicast is a one-to-one point-to-point transmission between a single sender and a single specific destination IP address.',
    accentureTip: 'One to One = Unicast'
  },
  {
    id: 'net-3-20',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'One device sends a Layer-2 broadcast frame on a LAN. Who is intended to receive it?',
    options: [
      { id: 'A', text: 'Only the sender' },
      { id: 'B', text: 'One specific device' },
      { id: 'C', text: 'All devices in the relevant broadcast domain' },
      { id: 'D', text: 'Only the router on the Internet' }
    ],
    correctAnswer: 'C',
    explanation: 'A broadcast frame sent to FF:FF:FF:FF:FF:FF is received and processed by every host within that local Layer 2 broadcast domain.',
    accentureTip: 'Broadcast = One to Everyone in Broadcast Domain'
  },
  {
    id: 'net-3-21',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'A streaming service sends traffic to a specific group of subscribed receivers. Which communication type is appropriate?',
    options: [
      { id: 'A', text: 'Unicast' },
      { id: 'B', text: 'Broadcast' },
      { id: 'C', text: 'Multicast' },
      { id: 'D', text: 'Anycast' }
    ],
    correctAnswer: 'C',
    explanation: 'Multicast transmits packets efficiently from a source to a designated group address received only by subscribed nodes.',
    accentureTip: 'One to Group = Multicast'
  },
  {
    id: 'net-3-22',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'Which device traditionally creates a single shared collision domain for all connected devices?',
    options: [
      { id: 'A', text: 'Hub' },
      { id: 'B', text: 'Router' },
      { id: 'C', text: 'Switch' },
      { id: 'D', text: 'Firewall' }
    ],
    correctAnswer: 'A',
    explanation: 'An Ethernet Hub repeats signals on a shared half-duplex medium, creating a single collision domain across all connected ports.',
    accentureTip: 'Hub = 1 Collision Domain'
  },
  {
    id: 'net-3-23',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'In a modern Ethernet network using a switch, each switch port is typically:',
    options: [
      { id: 'A', text: 'A separate collision domain' },
      { id: 'B', text: 'A separate Internet' },
      { id: 'C', text: 'A separate broadcast domain regardless of VLAN configuration' },
      { id: 'D', text: 'A separate DNS domain' }
    ],
    correctAnswer: 'A',
    explanation: 'Switches microsegment networks: every switch port operates as its own dedicated collision domain, eliminating packet collisions under full duplex.',
    accentureTip: 'Switch: Port = Separate Collision Domain'
  },
  {
    id: 'net-3-24',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Topologies & Domains',
    question: 'Which device normally separates Layer-2 broadcast domains?',
    options: [
      { id: 'A', text: 'Hub' },
      { id: 'B', text: 'Repeater' },
      { id: 'C', text: 'Router' },
      { id: 'D', text: 'Ethernet cable' }
    ],
    correctAnswer: 'C',
    explanation: 'Routers do not forward Layer 2 broadcasts across their interfaces by default, effectively establishing broadcast domain boundaries.',
    accentureTip: 'Router separates Broadcast Domains'
  },
  {
    id: 'net-3-25',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Performance & Commands',
    question: 'A network engineer wants to test basic IP-level reachability to a remote host. Which command is most appropriate?',
    options: [
      { id: 'A', text: 'ping' },
      { id: 'B', text: 'nslookup' },
      { id: 'C', text: 'ipconfig' },
      { id: 'D', text: 'tracert' }
    ],
    correctAnswer: 'A',
    explanation: 'The ping command sends ICMP Echo Requests to verify if a remote host is online and responsive.',
    accentureTip: 'IP reachability test = ping'
  },
  {
    id: 'net-3-26',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Performance & Commands',
    question: "A user knows a website's domain name but wants to check what IP address DNS resolves it to. Which command is most appropriate?",
    options: [
      { id: 'A', text: 'ping' },
      { id: 'B', text: 'nslookup' },
      { id: 'C', text: 'ipconfig' },
      { id: 'D', text: 'tracert' }
    ],
    correctAnswer: 'B',
    explanation: 'nslookup (Name Server Lookup) directly queries DNS servers to inspect IP resolutions, MX records, and domain aliases.',
    accentureTip: 'DNS query tool = nslookup'
  },
  {
    id: 'net-3-27',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Performance & Commands',
    question: 'A network engineer wants to see the sequence of hops packets take toward a destination. Which command is appropriate?',
    options: [
      { id: 'A', text: 'nslookup' },
      { id: 'B', text: 'ipconfig' },
      { id: 'C', text: 'tracert / traceroute' },
      { id: 'D', text: 'ping only' }
    ],
    correctAnswer: 'C',
    explanation: 'tracert (Windows) or traceroute (Linux/macOS) uses increasing TTL values to map every intermediate router hop along the network path.',
    accentureTip: 'Hop-by-hop path = tracert / traceroute'
  },
  {
    id: 'net-3-28',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Performance & Commands',
    question: 'A network link has a theoretical capacity of 1 Gbps, but actual data transfer is only 700 Mbps. Which statement is correct?',
    options: [
      { id: 'A', text: 'Bandwidth is 700 Mbps and throughput is 1 Gbps' },
      { id: 'B', text: 'Bandwidth is 1 Gbps and throughput is 700 Mbps' },
      { id: 'C', text: 'Both are necessarily 700 Mbps' },
      { id: 'D', text: 'Neither can be measured in bits per second' }
    ],
    correctAnswer: 'B',
    explanation: 'Bandwidth represents the theoretical maximum capacity of the communication channel (1 Gbps), while Throughput represents the actual rate of successful delivery (700 Mbps).',
    accentureTip: 'Bandwidth = Maximum Capacity | Throughput = Actual Delivery'
  },
  {
    id: 'net-3-29',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Performance & Commands',
    question: 'An online game becomes difficult to play because responses take a long time to arrive even though the connection has high bandwidth. Which metric is most directly associated with this delay?',
    options: [
      { id: 'A', text: 'MAC address' },
      { id: 'B', text: 'Latency' },
      { id: 'C', text: 'Subnet mask' },
      { id: 'D', text: 'Port number' }
    ],
    correctAnswer: 'B',
    explanation: 'Latency is the time taken for a packet to travel across the network from sender to receiver. High latency causes lag and delay despite ample bandwidth.',
    accentureTip: 'Network delay = Latency'
  },
  {
    id: 'net-3-30',
    tier: 3,
    tierName: 'Tier 3: Devices, Routing & Network Admin',
    topic: 'Networking Devices',
    question: 'A company has the following network design: A repeater extends a physical signal, a switch forwards Ethernet frames using MAC addresses, a router forwards packets between networks, a firewall controls traffic according to security rules, a VPN provides secure remote connectivity, and OSPF dynamically learns routes. Which statement is correct?',
    options: [
      { id: 'A', text: 'Repeater → Layer 1, Switch → Layer 2, Router → Layer 3, OSPF → Dynamic routing' },
      { id: 'B', text: 'Repeater → Layer 3, Switch → Layer 4, Router → Layer 1, OSPF → Application protocol' },
      { id: 'C', text: 'Repeater → Layer 2, Switch → Layer 1, Router → Layer 4, OSPF → Email protocol' },
      { id: 'D', text: 'All devices operate at the same OSI layer' }
    ],
    correctAnswer: 'A',
    explanation: 'Repeater operates at Layer 1 (signal regeneration), Switch operates at Layer 2 (MAC frames), Router operates at Layer 3 (IP packets), and OSPF is an interior dynamic routing protocol.',
    accentureTip: 'Repeater: L1 | Switch: L2 | Router: L3 | OSPF: Dynamic Routing'
  }
];

const allQuestions = [...tier1Questions, ...tier2Questions, ...tier3Questions];

console.log("Total Network Questions collected:", allQuestions.length);

// Generate 4-option explanations for all 90 questions
const networkOptionExplanationsMap = {};

allQuestions.forEach((q) => {
  const correct = q.correctAnswer;
  const breakdown = {
    correctOption: correct,
    memoryPill: q.accentureTip || ''
  };

  q.options.forEach((opt) => {
    const isCorrect = opt.id === correct;
    breakdown[opt.id] = {
      isCorrect,
      status: isCorrect ? 'Correct Answer' : 'Incorrect Option',
      text: opt.text,
      why: isCorrect
        ? q.explanation
        : '"' + opt.text + '" does not satisfy this question requirements. Correct answer is Option ' + correct + ' (' + (q.options.find(o => o.id === correct)?.text || '') + ').'
    };
  });

  networkOptionExplanationsMap[q.id] = breakdown;
});

// Create study guides
const networkStudyGuides = [
  {
    tier: 1,
    title: 'Tier 1: OSI 7-Layer Model, TCP/IP, Protocols & Port Cheat Sheet',
    sections: [
      {
        heading: 'OSI 7-Layer Model Overview',
        content: 'The OSI (Open Systems Interconnection) reference model defines 7 abstraction layers for telecommunication:\n\n**Mnemonic (Top to Bottom: Layer 7 → Layer 1):**\n* **All** → Layer 7: Application (HTTP, DNS, FTP, SMTP)\n* **People** → Layer 6: Presentation (Encoding, TLS/SSL, Compression)\n* **Seem** → Layer 5: Session (Session establishment & management)\n* **To** → Layer 4: Transport (TCP, UDP - Segments/Datagrams)\n* **Need** → Layer 3: Network (IP, ICMP, Routing - Packets)\n* **Data** → Layer 2: Data Link (MAC, Ethernet, Switches - Frames)\n* **Processing** → Layer 1: Physical (Bits, Cables, Hubs, Repeaters - Bits)',
        memoryBox: 'Bits (L1) → Frames (L2) → Packets (L3) → Segments (L4) → Data (L5-L7)'
      },
      {
        heading: 'OSI vs TCP/IP Architecture Comparison',
        table: {
          headers: ['OSI 7-Layer Model', 'TCP/IP 4-Layer Model', 'Data Unit', 'Protocols & Devices'],
          rows: [
            ['Application (L7), Presentation (L6), Session (L5)', 'Application Layer', 'Data', 'HTTP, HTTPS, DNS, FTP, SSH, SMTP'],
            ['Transport Layer (L4)', 'Transport Layer', 'Segment / Datagram', 'TCP (Handshake, Flow control), UDP'],
            ['Network Layer (L3)', 'Internet Layer', 'Packet', 'IPv4, IPv6, ICMP, Router, Routing Tables'],
            ['Data Link (L2), Physical (L1)', 'Network Access Layer', 'Frame / Bit', 'Ethernet, MAC, Switch, Hub, Cables']
          ]
        },
        memoryBox: 'OSI = 7 Layers | TCP/IP = 4 Layers'
      },
      {
        heading: 'TCP vs UDP — Core Distinctions',
        content: '**TCP (Transmission Control Protocol):** Connection-oriented. Establishes a 3-way handshake (SYN → SYN-ACK → ACK). Guarantees reliable, ordered delivery via acknowledgements and retransmissions. Used for Web (HTTP), Email (SMTP), File Transfer (FTP).\n\n**UDP (User Datagram Protocol):** Connectionless, lightweight (8-byte header), no delivery guarantee, no flow/congestion delays. Best for streaming, VoIP, DNS queries, and online gaming.',
        table: {
          headers: ['Feature', 'TCP', 'UDP'],
          rows: [
            ['Connection Type', 'Connection-oriented (3-way handshake)', 'Connectionless (Fire-and-forget)'],
            ['Reliability', 'Guaranteed via ACKs & Retransmissions', 'No guarantees (Best-effort)'],
            ['Packet Ordering', 'Ordered via sequence numbers', 'No ordering guaranteed'],
            ['Overhead & Speed', 'Higher header overhead (20+ bytes)', 'Very low overhead (8 bytes), ultra-fast'],
            ['Primary Use Cases', 'Web (HTTP/S), Banking, Files (FTP)', 'DNS, Video streaming, Voice/VoIP, Gaming']
          ]
        },
        memoryBox: 'TCP = Reliable & Ordered | UDP = Fast & Low Overhead'
      },
      {
        heading: 'TCP 3-Way Handshake & Addressing (IPv4 vs IPv6)',
        content: '**3-Way Handshake (S-S-A):**\n1. **SYN:** Client requests connection synchronization.\n2. **SYN-ACK:** Server acknowledges and sends its own SYN.\n3. **ACK:** Client confirms receipt; connection is established.\n\n**IP Addressing Cheat Sheet:**\n* **IPv4:** 32 bits (4 octets of 8 bits each). Total addresses = 2³² (~4.29 Billion).\n* **IPv6:** 128 bits (8 blocks of hexadecimal digits). Total addresses = 2¹²⁸ (~3.4×10³⁸).\n* **RFC 1918 Private Ranges:**\n  - Class A: 10.0.0.0/8 (10.0.0.0 – 10.255.255.255)\n  - Class B: 172.16.0.0/12 (172.16.0.0 – 172.31.255.255)\n  - Class C: 192.168.0.0/16 (192.168.0.0 – 192.168.255.255)',
        memoryBox: 'IPv4 = 32 bits | IPv6 = 128 bits | S-S-A Handshake'
      },
      {
        heading: 'High-Frequency Network Ports Cheat Sheet',
        table: {
          headers: ['Protocol', 'Port', 'Transport', 'Primary Function'],
          rows: [
            ['FTP', '21', 'TCP', 'File Transfer command/control'],
            ['SSH', '22', 'TCP', 'Secure remote shell login & administration'],
            ['Telnet', '23', 'TCP', 'Unencrypted legacy remote terminal'],
            ['SMTP', '25', 'TCP', 'Sending and relaying email messages'],
            ['DNS', '53', 'UDP / TCP', 'Translating domain names to IP addresses'],
            ['DHCP', '67 / 68', 'UDP', 'Dynamic host IP configuration (DORA)'],
            ['HTTP', '80', 'TCP', 'Standard unencrypted World Wide Web traffic'],
            ['POP3', '110', 'TCP', 'Post Office Protocol (email retrieval)'],
            ['IMAP', '143', 'TCP', 'Internet Message Access Protocol (email sync)'],
            ['SNMP', '161', 'UDP', 'Simple Network Management Protocol'],
            ['HTTPS', '443', 'TCP', 'Secure encrypted web browsing (HTTP over TLS)'],
            ['RDP', '3389', 'TCP', 'Remote Desktop Protocol (Windows)']
          ]
        },
        memoryBox: '21=FTP | 22=SSH | 25=SMTP | 53=DNS | 80=HTTP | 110=POP3 | 443=HTTPS'
      }
    ]
  },
  {
    tier: 2,
    title: 'Tier 2: MAC vs IP, ARP, ICMP, CIDR Subnetting & Network Topologies',
    sections: [
      {
        heading: 'MAC Address vs IP Address',
        content: '**MAC Address (Media Access Control):** 48-bit hardware address assigned to Network Interface Cards (NICs), represented in hex (e.g. 00:1A:2B:3C:4D:5E). Used for local delivery inside Ethernet LANs (Layer 2).\n\n**IP Address:** Logical network address (32-bit IPv4 / 128-bit IPv6). Used by routers to deliver packets across interconnected networks (Layer 3).',
        memoryBox: 'MAC = Local Delivery (L2) | IP = Network Routing (L3)'
      },
      {
        heading: 'ARP (Address Resolution Protocol) & ICMP (Ping)',
        content: '**ARP Workflow (IP → MAC):**\n* When PC A wants to send a frame to 192.168.1.20, it broadcasts an **ARP Request** ("Who has 192.168.1.20?").\n* The target owner replies via **Unicast ARP Reply** ("192.168.1.20 is at MAC AA:BB:CC:DD:EE:FF").\n* The result is cached in the local ARP table.\n\n**ICMP (Internet Control Message Protocol):** Operates alongside IP at Layer 3. Does not use TCP/UDP port numbers. Powers **Ping** via ICMP Echo Request & Echo Reply, and error reports.',
        memoryBox: 'ARP Request = Broadcast | ARP Reply = Unicast | Ping = ICMP'
      },
      {
        heading: 'Subnetting & CIDR Formula Cheat Sheet',
        content: '**Formulas for Subnetting:**\n* Total Host bits: $h = 32 - \\text{prefix}$\n* Total IP Addresses: $2^h$\n* Usable Hosts: $2^h - 2$ (subtract Network address & Broadcast address)',
        table: {
          headers: ['CIDR Prefix', 'Subnet Mask', 'Host Bits (h)', 'Total Addresses (2^h)', 'Usable Hosts (2^h - 2)'],
          rows: [
            ['/24', '255.255.255.0', '8', '256', '254'],
            ['/25', '255.255.255.128', '7', '128', '126'],
            ['/26', '255.255.255.192', '6', '64', '62'],
            ['/27', '255.255.255.224', '5', '32', '30'],
            ['/28', '255.255.255.240', '4', '16', '14'],
            ['/29', '255.255.255.248', '3', '8', '6'],
            ['/30', '255.255.255.252', '2', '4', '2 (Point-to-Point links)']
          ]
        },
        memoryBox: '/24 = 254 usable | /26 = 62 usable | /30 = 2 usable'
      },
      {
        heading: 'Network Topologies & Coverage Types',
        content: '**Topologies:**\n* **Star:** All devices wire to a central switch. Single point of failure at the switch; most common LAN.\n* **Mesh:** High redundancy, fault tolerant. Full mesh links = $n(n-1)/2$.\n* **Bus:** Single shared backbone cable.\n* **Ring:** Token passed in circular loop.\n\n**Geographic Classifications:**\n* **PAN:** Personal Area Network (~meters, Bluetooth)\n* **LAN:** Local Area Network (room, building, campus)\n* **MAN:** Metropolitan Area Network (city-wide)\n* **WAN:** Wide Area Network (cross-country, global Internet)',
        memoryBox: 'Mesh Links = n(n-1)/2 | Star = Central Switch'
      }
    ]
  },
  {
    tier: 3,
    title: 'Tier 3: Network Devices, Routing Protocols, Domains & Diagnostic Commands',
    sections: [
      {
        heading: 'Networking Hardware Classification',
        table: {
          headers: ['Device', 'OSI Layer', 'Addressing Used', 'Core Function'],
          rows: [
            ['Repeater', 'Layer 1 (Physical)', 'None (Raw Signals)', 'Amplifies and regenerates attenuated signals'],
            ['Hub', 'Layer 1 (Physical)', 'None (Raw Bits)', 'Blindly broadcasts incoming signals to all ports'],
            ['Bridge', 'Layer 2 (Data Link)', 'MAC Addresses', 'Connects network segments based on MAC forwarding'],
            ['Switch', 'Layer 2 (Data Link)', 'MAC Addresses', 'Fast ASIC-based frame switching; microsegments collision domains'],
            ['Router', 'Layer 3 (Network)', 'IP Addresses', 'Determines optimal paths and routes packets across networks'],
            ['Gateway', 'Layer 3 to Layer 7', 'Protocol Dependent', 'Translates between distinct network protocols and architectures'],
            ['Firewall', 'Layer 3 / 4 / 7', 'IPs, Ports, Rules', 'Monitors and filters traffic based on defined security policies']
          ]
        },
        memoryBox: 'Hub/Repeater = L1 | Switch/Bridge = L2 | Router = L3'
      },
      {
        heading: 'Collision Domains vs Broadcast Domains',
        content: '**Collision Domain:** A network segment where simultaneous transmissions can collide.\n* **Hub:** All ports share ONE collision domain.\n* **Switch:** Each port is its OWN separate collision domain.\n\n**Broadcast Domain:** The scope where a Layer 2 broadcast frame (FF:FF:FF:FF:FF:FF) propagates.\n* **Switch:** Does NOT break broadcast domains by default (all ports belong to same broadcast domain without VLANs).\n* **Router:** Separates broadcast domains across its physical interfaces.',
        memoryBox: 'Switch breaks collision domains | Router breaks broadcast domains'
      },
      {
        heading: 'Routing Basics, Routing Tables & Protocols',
        content: '**Routing:** Determining path across networks using IP routing tables.\n* **Default Route (0.0.0.0/0):** Gateway of last resort for unlisted subnets.\n* **Static Routing:** Manually configured by administrator; no protocol overhead; does not adapt to failure.\n* **Dynamic Routing:** Protocols automatically discover topology and recalculate upon link failure (e.g., OSPF - Open Shortest Path First, BGP - Border Gateway Protocol, RIP - Routing Information Protocol).',
        memoryBox: 'Default Route = 0.0.0.0/0 | OSPF = Dynamic Routing'
      },
      {
        heading: 'Essential Network Diagnostic Commands',
        table: {
          headers: ['Command', 'Operating System', 'Underlying Protocol', 'Primary Diagnostic Purpose'],
          rows: [
            ['ping', 'Windows / Linux', 'ICMP Echo', 'Tests basic end-to-end IP reachability and latency'],
            ['ipconfig /all', 'Windows', 'Local OS Stack', 'Displays IP, subnet mask, default gateway, and MAC addresses'],
            ['ifconfig / ip addr', 'Linux / Unix', 'Local OS Kernel', 'Configures and displays network interface parameters'],
            ['tracert / traceroute', 'Win / Linux', 'ICMP / UDP TTL', 'Traces the hop-by-hop router path toward a destination'],
            ['nslookup', 'Windows / Linux', 'DNS (Port 53)', 'Queries DNS servers for hostname-to-IP resolution']
          ]
        },
        memoryBox: 'ping: Reachability | nslookup: DNS | tracert: Hop-by-hop path'
      }
    ]
  }
];

const headerText = `// src/data/networkQuestions.js
/**
 * Complete Accenture Computer Networking Question Bank (90 MCQs) & Study Notes
 * Tier 1: 30 MCQs (OSI, TCP/IP, Ports & Core Protocols)
 * Tier 2: 30 MCQs (Addressing, MAC vs IP, ARP, ICMP, Topologies, Subnetting & CIDR)
 * Tier 3: 30 MCQs (Devices, Routing Tables, Dynamic Protocols, Domains & Diagnostic Commands)
 */

export const NETWORK_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '90 MCQs', description: 'Complete 3-Tier Placement Question Bank' },
  { id: 1, title: 'Tier 1: OSI, TCP/IP & Protocols', badge: '30 MCQs', description: 'OSI 7 Layers, TCP vs UDP, Handshakes, IP & Port Protocols' },
  { id: 2, title: 'Tier 2: Addressing, Subnetting & Topologies', badge: '30 MCQs', description: 'MAC vs IP, ARP, ICMP, CIDR /24-/30, Star/Mesh Topologies' },
  { id: 3, title: 'Tier 3: Devices, Routing & Network Admin', badge: '30 MCQs', description: 'Gateways, Repeaters, Bridges, Routing Tables, Domains & Commands' }
];

export const NETWORK_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'OSI & TCP/IP', label: 'OSI & TCP/IP Model' },
  { id: 'Transport & Handshake', label: 'TCP, UDP & 3-Way Handshake' },
  { id: 'IP & Addressing', label: 'IPv4, IPv6 & Private Ranges' },
  { id: 'Protocols & Ports', label: 'Application Protocols & Port Numbers' },
  { id: 'ARP & ICMP', label: 'ARP, Ping & ICMP' },
  { id: 'Subnetting & CIDR', label: 'Subnetting, Masks & Host Formulas' },
  { id: 'Topologies & Domains', label: 'Star, Mesh, Collision & Broadcast Domains' },
  { id: 'Networking Devices', label: 'Hubs, Switches, Routers, Bridges & Gateways' },
  { id: 'Routing & Security', label: 'Routing Tables, Static/Dynamic, VPN & Firewalls' },
  { id: 'Performance & Commands', label: 'Bandwidth, Latency & Diagnostic Commands' }
];
`;

const codeText = `
export const getNetworkOptionBreakdown = (questionId) => {
  return networkOptionExplanationsMap[questionId] || null;
};

export const filterNetworkQuestions = ({ tier = 'all', topic = 'all' } = {}) => {
  return networkQuestions.filter((q) => {
    const matchesTier =
      tier === 'all' ||
      String(q.tier) === String(tier) ||
      (typeof tier === 'string' && q.tierName?.toLowerCase().includes(tier.toLowerCase()));
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  });
};
`;

const fullFile = headerText +
  '\nexport const networkQuestions = ' + JSON.stringify(allQuestions, null, 2) + ';\n\n' +
  'export const networkOptionExplanationsMap = ' + JSON.stringify(networkOptionExplanationsMap, null, 2) + ';\n\n' +
  'export const networkStudyGuides = ' + JSON.stringify(networkStudyGuides, null, 2) + ';\n' +
  codeText;

fs.writeFileSync(path.join(process.cwd(), 'src/data/networkQuestions.js'), fullFile, 'utf-8');
console.log("Successfully generated src/data/networkQuestions.js with 90 questions!");


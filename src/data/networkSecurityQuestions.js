// src/data/networkSecurityQuestions.js
/**
 * Accenture Network Security Question Bank (100 Solved MCQs) & Study Notes
 * Tier 1: 50 MCQs (Cryptography, Ciphers, AES/DES/RC4, Malware, IDS/IPS & UTM)
 * Tier 2: 25 MCQs (Authentication vs Authorization, MFA, DAC/MAC/RBAC/ABAC, VPN, ACLs)
 * Tier 3: 25 MCQs (Zero Trust, Honeypots, SIEM, Firewalls, Risk & Security Operations)
 */

export const NETWORK_SECURITY_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '100 MCQs', description: 'Complete Network Security Question Bank' },
  { id: 1, title: 'Tier 1: Cryptography & Attack Vectors', badge: '50 MCQs', description: 'Ciphers (AES/DES/RC4), Malware, IDS/IPS, UTM & Scenarios' },
  { id: 2, title: 'Tier 2: AuthN, AuthZ & Access Models', badge: '25 MCQs', description: 'MFA, DAC/MAC/RBAC/ABAC, VPNs, TLS/HTTPS & ACLs' },
  { id: 3, title: 'Tier 3: Zero Trust, SIEM & Operations', badge: '25 MCQs', description: 'Zero Trust, Honeypots, SIEM, Least Privilege & Risk Management' }
];

export const NETWORK_SECURITY_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'Ciphers & Algorithms', label: 'Ciphers & Cryptography (AES, DES, RC4, RSA)' },
  { id: 'Attack Vectors & Threats', label: 'Malware, Phishing, Spoofing & DoS/DDoS' },
  { id: 'Network Defense & Infrastructure', label: 'Firewalls, IDS/IPS, UTM, VPN & ACLs' },
  { id: 'CIA Triad & Access Control', label: 'CIA Triad, Authentication, Authorization & MFA' },
  { id: 'Access Control Models', label: 'DAC, MAC, RBAC & ABAC' },
  { id: 'Zero Trust & Operations', label: 'Zero Trust, Honeypots, SIEM, Risk & Auditing' }
];

export const networkSecurityQuestions = [
  {
    "id": "netsec-1-01",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "AES is a ______ encryption algorithm.",
    "options": [
      {
        "id": "A",
        "text": "Asymmetric"
      },
      {
        "id": "B",
        "text": "Symmetric"
      },
      {
        "id": "C",
        "text": "Hashing"
      },
      {
        "id": "D",
        "text": "Digital signature"
      }
    ],
    "correctAnswer": "B",
    "explanation": "AES (Advanced Encryption Standard) is a symmetric-key block cipher using a single shared secret key for both encryption and decryption.",
    "accentureTip": "AES = Symmetric Block Cipher"
  },
  {
    "id": "netsec-1-02",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which is the block size of AES?",
    "options": [
      {
        "id": "A",
        "text": "64 bits"
      },
      {
        "id": "B",
        "text": "128 bits"
      },
      {
        "id": "C",
        "text": "192 bits"
      },
      {
        "id": "D",
        "text": "256 bits"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The block size of AES is permanently fixed at 128 bits (16 bytes) across all key lengths (AES-128, AES-192, AES-256).",
    "accentureTip": "AES Block Size is always 128 bits"
  },
  {
    "id": "netsec-1-03",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "How many rounds does AES-128 perform?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "explanation": "AES-128 executes 10 transformation rounds. (AES-192 executes 12 rounds, AES-256 executes 14 rounds).",
    "accentureTip": "AES Rounds: 128→10 | 192→12 | 256→14"
  },
  {
    "id": "netsec-1-04",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "How many rounds does AES-256 perform?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "C",
    "explanation": "AES-256 uses a 256-bit key and performs 14 rounds of substitution and permutation over 128-bit blocks.",
    "accentureTip": "AES-256 = 14 Rounds"
  },
  {
    "id": "netsec-1-05",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "What is the effective key size of DES?",
    "options": [
      {
        "id": "A",
        "text": "32 bits"
      },
      {
        "id": "B",
        "text": "56 bits"
      },
      {
        "id": "C",
        "text": "64 bits"
      },
      {
        "id": "D",
        "text": "128 bits"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Although DES uses a 64-bit key, 8 bits are discarded for parity checking, resulting in an effective cryptographic key length of 56 bits.",
    "accentureTip": "DES Total = 64 bits | Effective = 56 bits"
  },
  {
    "id": "netsec-1-06",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "DES performs how many encryption rounds?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Data Encryption Standard (DES) Feistel network executes 16 identical encryption rounds on 64-bit blocks.",
    "accentureTip": "DES = 16 Feistel Rounds"
  },
  {
    "id": "netsec-1-07",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which of the following is a stream cipher?",
    "options": [
      {
        "id": "A",
        "text": "AES"
      },
      {
        "id": "B",
        "text": "DES"
      },
      {
        "id": "C",
        "text": "RC4"
      },
      {
        "id": "D",
        "text": "RSA"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RC4 is a symmetric stream cipher that encrypts data byte-by-byte (or bit-by-bit). AES, DES, and RC5 are block ciphers.",
    "accentureTip": "RC4 = Stream Cipher | AES, DES, RC5 = Block Ciphers"
  },
  {
    "id": "netsec-1-08",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which statement about RC5 is correct?",
    "options": [
      {
        "id": "A",
        "text": "It is an asymmetric algorithm"
      },
      {
        "id": "B",
        "text": "It is a stream cipher"
      },
      {
        "id": "C",
        "text": "It is a symmetric block cipher"
      },
      {
        "id": "D",
        "text": "It is a hashing algorithm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RC5 is a symmetric block cipher with parameterized block size (32, 64, or 128 bits), variable rounds (0 to 255), and variable key size.",
    "accentureTip": "RC5 = Symmetric Block Cipher"
  },
  {
    "id": "netsec-1-09",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which algorithm uses a public key and a private key?",
    "options": [
      {
        "id": "A",
        "text": "AES"
      },
      {
        "id": "B",
        "text": "DES"
      },
      {
        "id": "C",
        "text": "RSA"
      },
      {
        "id": "D",
        "text": "RC4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RSA is an asymmetric cryptographic algorithm that utilizes a mathematically linked public key (for encryption/verification) and private key (for decryption/signing).",
    "accentureTip": "RSA = Asymmetric (Public + Private Key Pair)"
  },
  {
    "id": "netsec-1-10",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which encryption method is generally faster for encrypting large amounts of data?",
    "options": [
      {
        "id": "A",
        "text": "Symmetric encryption"
      },
      {
        "id": "B",
        "text": "Asymmetric encryption"
      },
      {
        "id": "C",
        "text": "Hashing"
      },
      {
        "id": "D",
        "text": "Digital signature"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Symmetric encryption (like AES) is 100x to 1000x faster than asymmetric encryption because it uses simple substitution and permutation instead of heavy modular exponentiation.",
    "accentureTip": "Bulk Data = Symmetric (Fast)"
  },
  {
    "id": "netsec-1-11",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "What is the main purpose of encryption?",
    "options": [
      {
        "id": "A",
        "text": "Increase network speed"
      },
      {
        "id": "B",
        "text": "Convert ciphertext into plaintext"
      },
      {
        "id": "C",
        "text": "Protect data from unauthorized access"
      },
      {
        "id": "D",
        "text": "Detect viruses"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Encryption converts plaintext into ciphertext to guarantee confidentiality, preventing unauthorized parties from reading sensitive data.",
    "accentureTip": "Encryption = Confidentiality (Data Secrecy)"
  },
  {
    "id": "netsec-1-12",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "A company server becomes unavailable because an attacker sends a huge number of requests from a single machine. This is an example of:",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "DoS"
      },
      {
        "id": "C",
        "text": "Spoofing"
      },
      {
        "id": "D",
        "text": "Trojan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A DoS (Denial of Service) attack aims to exhaust system or network resources from a single source, making services unavailable to legitimate users.",
    "accentureTip": "Single machine flood = DoS"
  },
  {
    "id": "netsec-1-13",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "Thousands of compromised computers simultaneously attack a website. This is:",
    "options": [
      {
        "id": "A",
        "text": "DoS"
      },
      {
        "id": "B",
        "text": "DDoS"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "Brute force"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A DDoS (Distributed Denial of Service) attack utilizes a network of compromised machines (a botnet) to flood a target server simultaneously.",
    "accentureTip": "Multiple distributed machines = DDoS"
  },
  {
    "id": "netsec-1-14",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "Which attack primarily exploits human trust to obtain passwords or sensitive information?",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "DDoS"
      },
      {
        "id": "C",
        "text": "Buffer overflow"
      },
      {
        "id": "D",
        "text": "Packet sniffing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Phishing is a social engineering attack that tricks human users into revealing sensitive credentials, PINs, or financial information.",
    "accentureTip": "Human deception = Phishing"
  },
  {
    "id": "netsec-1-15",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker creates an email that appears to come from a legitimate bank, although it actually came from the attacker. This is:",
    "options": [
      {
        "id": "A",
        "text": "Phishing only"
      },
      {
        "id": "B",
        "text": "Spoofing"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "DoS"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Spoofing is the technical act of falsifying identity metadata (such as forging email headers or source IP addresses) to masquerade as a trusted entity.",
    "accentureTip": "Forging origin identity = Spoofing"
  },
  {
    "id": "netsec-1-16",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "A malicious program encrypts a user's files and demands money to restore access. This is:",
    "options": [
      {
        "id": "A",
        "text": "Trojan"
      },
      {
        "id": "B",
        "text": "Spyware"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "Worm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ransomware encrypts target data on storage drives and demands extortion payments (usually in cryptocurrency) for the decryption keys.",
    "accentureTip": "File locking + payment demand = Ransomware"
  },
  {
    "id": "netsec-1-17",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "Malware disguised as legitimate software is called:",
    "options": [
      {
        "id": "A",
        "text": "Trojan"
      },
      {
        "id": "B",
        "text": "Ransomware"
      },
      {
        "id": "C",
        "text": "Worm"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Trojan Horse masquerades as genuine or desirable software to trick users into downloading and installing it, opening backdoors for attackers.",
    "accentureTip": "Disguised as useful software = Trojan"
  },
  {
    "id": "netsec-1-18",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "Which malware is known for self-replicating across networks without necessarily attaching itself to another program?",
    "options": [
      {
        "id": "A",
        "text": "Trojan"
      },
      {
        "id": "B",
        "text": "Worm"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "Spyware"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Worms are standalone programs that automatically self-replicate and spread across network connections without requiring user interaction or a host file.",
    "accentureTip": "Self-replicating standalone = Worm"
  },
  {
    "id": "netsec-1-19",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "What is the primary function of an IDS (Intrusion Detection System)?",
    "options": [
      {
        "id": "A",
        "text": "Encrypt network traffic"
      },
      {
        "id": "B",
        "text": "Detect suspicious activity and generate alerts"
      },
      {
        "id": "C",
        "text": "Automatically replace infected files"
      },
      {
        "id": "D",
        "text": "Assign IP addresses"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An IDS passively monitors network traffic or system logs, analyzes behavior for policy violations, and sends alerts to security administrators without dropping packets.",
    "accentureTip": "IDS = Passive Detection & Alerting"
  },
  {
    "id": "netsec-1-20",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "Which security system can detect and actively block malicious traffic?",
    "options": [
      {
        "id": "A",
        "text": "IDS"
      },
      {
        "id": "B",
        "text": "IPS"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An IPS (Intrusion Prevention System) sits in-line with network traffic and actively drops malicious packets or resets connections upon detecting threats.",
    "accentureTip": "IPS = In-line Active Blocking"
  },
  {
    "id": "netsec-1-21",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "UTM stands for:",
    "options": [
      {
        "id": "A",
        "text": "Unified Traffic Management"
      },
      {
        "id": "B",
        "text": "Universal Threat Monitoring"
      },
      {
        "id": "C",
        "text": "Unified Threat Management"
      },
      {
        "id": "D",
        "text": "User Threat Management"
      }
    ],
    "correctAnswer": "C",
    "explanation": "UTM stands for Unified Threat Management, an all-in-one security architecture integrating firewall, IPS, antivirus, web filtering, and VPN capabilities.",
    "accentureTip": "UTM = Unified Threat Management"
  },
  {
    "id": "netsec-1-22",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "Which statement best describes UTM?",
    "options": [
      {
        "id": "A",
        "text": "It only provides encryption"
      },
      {
        "id": "B",
        "text": "It combines multiple security functions into one solution"
      },
      {
        "id": "C",
        "text": "It only detects viruses"
      },
      {
        "id": "D",
        "text": "It is a replacement for TCP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "UTM consolidates multiple defensive functions (firewall, antivirus, anti-spam, IDS/IPS, content filtering) into a single hardware or cloud appliance.",
    "accentureTip": "UTM = Multiple security functions in one box"
  },
  {
    "id": "netsec-1-23",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which of the following is NOT a symmetric encryption algorithm?",
    "options": [
      {
        "id": "A",
        "text": "AES"
      },
      {
        "id": "B",
        "text": "DES"
      },
      {
        "id": "C",
        "text": "RC4"
      },
      {
        "id": "D",
        "text": "RSA"
      }
    ],
    "correctAnswer": "D",
    "explanation": "RSA is an asymmetric algorithm (public-key cryptography). AES, DES, and RC4 are all symmetric ciphers.",
    "accentureTip": "RSA = Asymmetric"
  },
  {
    "id": "netsec-1-24",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "Which of the following pairs is correctly matched?",
    "options": [
      {
        "id": "A",
        "text": "AES — Asymmetric"
      },
      {
        "id": "B",
        "text": "RSA — Symmetric"
      },
      {
        "id": "C",
        "text": "RC4 — Stream cipher"
      },
      {
        "id": "D",
        "text": "DES — Hash function"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RC4 is a symmetric stream cipher. (AES is symmetric block, RSA is asymmetric, DES is symmetric block).",
    "accentureTip": "RC4 = Stream Cipher"
  },
  {
    "id": "netsec-1-25",
    "tier": 1,
    "part": 1,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "CIA Triad & Access Control",
    "question": "Which CIA security property is primarily affected by a DoS attack?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authentication"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Denial of Service attacks target the Availability pillar of the CIA Triad by starving system resources and preventing authorized access.",
    "accentureTip": "DoS targets Availability"
  },
  {
    "id": "netsec-1-26",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "A company's employees receive an email that appears to be from the IT department asking them to click a link and enter their credentials on a fake login page. What attack is this?",
    "options": [
      {
        "id": "A",
        "text": "DDoS"
      },
      {
        "id": "B",
        "text": "Phishing"
      },
      {
        "id": "C",
        "text": "Spoofing only"
      },
      {
        "id": "D",
        "text": "Ransomware"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Phishing uses deceptive emails and fraudulent login pages to trick victims into surrendering usernames and passwords.",
    "accentureTip": "Fake login link in email = Phishing"
  },
  {
    "id": "netsec-1-27",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "A bank's website suddenly receives millions of requests from thousands of different compromised computers, rendering it unavailable. What is happening?",
    "options": [
      {
        "id": "A",
        "text": "DoS"
      },
      {
        "id": "B",
        "text": "DDoS"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "Trojan attack"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Volumetric traffic flood originating simultaneously from thousands of distributed botnet machines constitutes a Distributed Denial of Service (DDoS).",
    "accentureTip": "Distributed flood = DDoS"
  },
  {
    "id": "netsec-1-28",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker sends a network packet with a forged source IP address to make it appear as if it came from a trusted internal host. Which technique is being used?",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "IP spoofing"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "DDoS"
      }
    ],
    "correctAnswer": "B",
    "explanation": "IP Spoofing involves crafting IP packets with a false sender address to bypass IP-based authentication or disguise the attacker identity.",
    "accentureTip": "Forged sender IP = IP Spoofing"
  },
  {
    "id": "netsec-1-29",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A company wants to protect confidential customer data stored in its database. It needs a fast encryption algorithm for bulk data. Which is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "RSA"
      },
      {
        "id": "B",
        "text": "AES"
      },
      {
        "id": "C",
        "text": "Digital signature"
      },
      {
        "id": "D",
        "text": "Hashing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "AES is the industry gold standard symmetric cipher, offering unmatched encryption speed and hardware acceleration for bulk databases and storage disks.",
    "accentureTip": "Fast bulk encryption = AES"
  },
  {
    "id": "netsec-1-30",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A developer receives an encrypted message. The sender used the developer's public key to encrypt it. Which key should the developer use to decrypt it?",
    "options": [
      {
        "id": "A",
        "text": "Sender's public key"
      },
      {
        "id": "B",
        "text": "Sender's private key"
      },
      {
        "id": "C",
        "text": "Developer's public key"
      },
      {
        "id": "D",
        "text": "Developer's private key"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In asymmetric cryptography, data encrypted with a public key can only be decrypted by the matching private key held solely by the recipient.",
    "accentureTip": "Encrypted with Public Key → Decrypted with Private Key"
  },
  {
    "id": "netsec-1-31",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "Malware secretly encrypts thousands of corporate files and the attackers demand cryptocurrency to provide the decryption key. What type of malware is this?",
    "options": [
      {
        "id": "A",
        "text": "Trojan"
      },
      {
        "id": "B",
        "text": "Worm"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "Spyware"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Malicious encryption of user documents accompanied by an extortion note demanding cryptocurrency ransom is the defining hallmark of Ransomware.",
    "accentureTip": "Encrypted files + extortion = Ransomware"
  },
  {
    "id": "netsec-1-32",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "An employee downloads software that claims to be a legitimate PDF reader, but it secretly installs backdoor malware. What is the best classification?",
    "options": [
      {
        "id": "A",
        "text": "Trojan"
      },
      {
        "id": "B",
        "text": "DDoS"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Trojan Horse conceals malicious payload code within an apparently benign or useful executable file.",
    "accentureTip": "Trojan masquerades as benign software"
  },
  {
    "id": "netsec-1-33",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A security administrator wants a system that monitors network traffic and alerts the team whenever suspicious activity occurs, but does NOT automatically block packets. Which should be deployed?",
    "options": [
      {
        "id": "A",
        "text": "IPS"
      },
      {
        "id": "B",
        "text": "IDS"
      },
      {
        "id": "C",
        "text": "UTM"
      },
      {
        "id": "D",
        "text": "VPN"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An IDS (Intrusion Detection System) is deployed out-of-band to passively monitor traffic and trigger alerts without interfering with network flow.",
    "accentureTip": "Alerts only without dropping = IDS"
  },
  {
    "id": "netsec-1-34",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A company wants a security system that detects malicious network traffic and automatically drops the packets before they reach internal hosts. Which is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "IDS"
      },
      {
        "id": "B",
        "text": "IPS"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An IPS (Intrusion Prevention System) sits in-line directly in the communication path to actively block and drop attack traffic in real time.",
    "accentureTip": "In-line active threat blocking = IPS"
  },
  {
    "id": "netsec-1-35",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A small business requires a single integrated solution providing firewall, intrusion prevention, antivirus, and content filtering. Which solution best fits?",
    "options": [
      {
        "id": "A",
        "text": "UTM"
      },
      {
        "id": "B",
        "text": "DNS"
      },
      {
        "id": "C",
        "text": "AES"
      },
      {
        "id": "D",
        "text": "IDS only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Unified Threat Management (UTM) aggregates multiple security layers into an all-in-one appliance, ideal for small and medium enterprises.",
    "accentureTip": "All-in-one perimeter security = UTM"
  },
  {
    "id": "netsec-1-36",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A company uses AES-256 to encrypt sensitive files. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "AES-256 uses a 256-bit block size"
      },
      {
        "id": "B",
        "text": "AES-256 uses a 256-bit key and 128-bit block size"
      },
      {
        "id": "C",
        "text": "AES-256 is asymmetric"
      },
      {
        "id": "D",
        "text": "AES-256 uses a 56-bit key"
      }
    ],
    "correctAnswer": "B",
    "explanation": "AES-256 employs a 256-bit secret key, but processes data strictly in 128-bit block increments (14 rounds).",
    "accentureTip": "AES-256: 256-bit Key | 128-bit Block"
  },
  {
    "id": "netsec-1-37",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A security engineer discovers an old application using DES for encryption. Why is replacing DES with AES strongly recommended?",
    "options": [
      {
        "id": "A",
        "text": "DES is asymmetric"
      },
      {
        "id": "B",
        "text": "DES has a small effective key size (56 bits) and is vulnerable to brute-force attacks"
      },
      {
        "id": "C",
        "text": "AES does not use encryption keys"
      },
      {
        "id": "D",
        "text": "DES cannot encrypt data"
      }
    ],
    "correctAnswer": "B",
    "explanation": "DES effective key space is only 56 bits (2⁵⁶), which modern computing rigs can brute-force in minutes to hours.",
    "accentureTip": "DES is obsolete because 56-bit key is easily brute-forced"
  },
  {
    "id": "netsec-1-38",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A company needs encryption for a large video file. The engineer suggests using RSA directly. What is the primary issue with this approach?",
    "options": [
      {
        "id": "A",
        "text": "RSA is generally slow and computationally inefficient for bulk data"
      },
      {
        "id": "B",
        "text": "RSA cannot use keys"
      },
      {
        "id": "C",
        "text": "RSA is a stream cipher"
      },
      {
        "id": "D",
        "text": "RSA provides no security"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asymmetric algorithms like RSA are computationally intensive. Practical systems use hybrid encryption: RSA exchanges a symmetric key, while AES encrypts the bulk file.",
    "accentureTip": "RSA is slow for bulk data → Use AES for payload"
  },
  {
    "id": "netsec-1-39",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker sends millions of requests to exhaust a web server's memory and CPU from a single machine. Which attack is this?",
    "options": [
      {
        "id": "A",
        "text": "DDoS"
      },
      {
        "id": "B",
        "text": "DoS"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "Spoofing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A resource exhaustion attack launched from a single originating system is classified as a DoS (Denial of Service).",
    "accentureTip": "Single machine flood = DoS"
  },
  {
    "id": "netsec-1-40",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "A security analyst notices an email claiming to originate from ceo@company.com, but headers reveal an attacker sent it. Which concept explains forging the sender identity?",
    "options": [
      {
        "id": "A",
        "text": "Spoofing"
      },
      {
        "id": "B",
        "text": "Ransomware"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "IDS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Falsifying the sender identity in email headers or IP packet headers is known as Spoofing.",
    "accentureTip": "Falsifying sender identity = Spoofing"
  },
  {
    "id": "netsec-1-41",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker sends an email containing a fake Microsoft login page and forges Microsoft's official address in the sender field. Which combination is being used?",
    "options": [
      {
        "id": "A",
        "text": "Phishing + spoofing"
      },
      {
        "id": "B",
        "text": "DDoS + ransomware"
      },
      {
        "id": "C",
        "text": "Trojan + worm"
      },
      {
        "id": "D",
        "text": "IDS + IPS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The fraudulent login page is Phishing (social engineering to harvest credentials), and the forged sender address is Email Spoofing.",
    "accentureTip": "Fake portal + forged address = Phishing + Spoofing"
  },
  {
    "id": "netsec-1-42",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A network administrator wants to protect a server from unauthorized network traffic by allowing only traffic matching predefined rules based on IP addresses, ports, and protocols. What should be used?",
    "options": [
      {
        "id": "A",
        "text": "Firewall"
      },
      {
        "id": "B",
        "text": "AES"
      },
      {
        "id": "C",
        "text": "Trojan"
      },
      {
        "id": "D",
        "text": "RSA"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Firewalls inspect Layer 3 and Layer 4 packet headers and enforce rule-based packet filtering (Permit/Deny).",
    "accentureTip": "Rule-based traffic filter = Firewall"
  },
  {
    "id": "netsec-1-43",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A security system detects an attack and immediately drops the malicious packets instead of merely generating an alert. Which technology is most likely being used?",
    "options": [
      {
        "id": "A",
        "text": "IDS"
      },
      {
        "id": "B",
        "text": "IPS"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "VPN"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An IPS actively drops offending packets in-line, whereas an IDS only issues passive log alerts.",
    "accentureTip": "Active packet dropping = IPS"
  },
  {
    "id": "netsec-1-44",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "CIA Triad & Access Control",
    "question": "A company wants to ensure that only authorized employees can access the payroll database. Which security concept primarily addresses \"who is allowed to access what?\"",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Authorization"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "Availability"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Authorization defines privileges, roles, and permissions (\"What can you do/access?\"), following initial authentication (\"Who are you?\").",
    "accentureTip": "Who can access what = Authorization"
  },
  {
    "id": "netsec-1-45",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "CIA Triad & Access Control",
    "question": "An employee enters their username and password into a company system. The system verifies that the credentials belong to that employee. This process is:",
    "options": [
      {
        "id": "A",
        "text": "Authorization"
      },
      {
        "id": "B",
        "text": "Authentication"
      },
      {
        "id": "C",
        "text": "Spoofing"
      },
      {
        "id": "D",
        "text": "Encryption"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Authentication is the process of validating claimed identity through credentials like passwords, biometrics, or security tokens.",
    "accentureTip": "Proving identity = Authentication"
  },
  {
    "id": "netsec-1-46",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "CIA Triad & Access Control",
    "question": "A company wants to ensure that an attacker cannot secretly modify financial transaction data while it is in transit. Which CIA property is primarily concerned?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authentication"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Integrity ensures data remains authentic, accurate, and protected against unauthorized tampering, modification, or deletion.",
    "accentureTip": "Preventing tampering = Integrity"
  },
  {
    "id": "netsec-1-47",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "CIA Triad & Access Control",
    "question": "A company's online banking service must remain accessible to customers 24/7. An attacker floods the service with traffic, causing legitimate users to lose access. Which CIA property is primarily affected?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authorization"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Availability guarantees that authorized users have uninterrupted access to critical systems, applications, and data.",
    "accentureTip": "System downtime = Availability breach"
  },
  {
    "id": "netsec-1-48",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A company uses the same secret key to encrypt and decrypt a large database. Which type of cryptography is being used?",
    "options": [
      {
        "id": "A",
        "text": "Asymmetric"
      },
      {
        "id": "B",
        "text": "Symmetric"
      },
      {
        "id": "C",
        "text": "Hashing"
      },
      {
        "id": "D",
        "text": "Digital signature"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Symmetric cryptography relies on a single shared secret key for both encryption and decryption operations.",
    "accentureTip": "Single shared key = Symmetric"
  },
  {
    "id": "netsec-1-49",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Ciphers & Algorithms",
    "question": "A security engineer needs a stream cipher for a legacy system and is given these options: AES, DES, RC4, RSA. Which should be selected based purely on algorithm type?",
    "options": [
      {
        "id": "A",
        "text": "AES"
      },
      {
        "id": "B",
        "text": "DES"
      },
      {
        "id": "C",
        "text": "RC4"
      },
      {
        "id": "D",
        "text": "RSA"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RC4 is a classic stream cipher; AES and DES are block ciphers, and RSA is an asymmetric block cipher.",
    "accentureTip": "RC4 is the stream cipher"
  },
  {
    "id": "netsec-1-50",
    "tier": 1,
    "part": 2,
    "tierName": "Tier 1: Cryptography & Attack Vectors",
    "topic": "Network Defense & Infrastructure",
    "question": "A company security architecture has the following requirements: Detect suspicious traffic, automatically block attacks, provide firewall filtering, provide antivirus protection, and provide web filtering. Which option best satisfies all requirements?",
    "options": [
      {
        "id": "A",
        "text": "IDS"
      },
      {
        "id": "B",
        "text": "IPS only"
      },
      {
        "id": "C",
        "text": "UTM"
      },
      {
        "id": "D",
        "text": "AES"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Unified Threat Management (UTM) incorporates firewall, intrusion prevention (IPS), antivirus inspection, and web content filtering in a consolidated platform.",
    "accentureTip": "UTM combines Firewall, IPS, AV & Web Filtering"
  },
  {
    "id": "netsec-2-01",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "A user enters a username and password into an application. The system checks whether the credentials belong to that user. What security process is being performed?",
    "options": [
      {
        "id": "A",
        "text": "Authorization"
      },
      {
        "id": "B",
        "text": "Authentication"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "Access control"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Verifying credentials against stored user identities answers the question \"Who are you?\", which is Authentication.",
    "accentureTip": "Authentication = Identity proof (\"Who are you?\")"
  },
  {
    "id": "netsec-2-02",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "A user successfully logs into an organization's system but receives an error when trying to delete employee records because their role lacks permission. What failed?",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Encryption"
      },
      {
        "id": "C",
        "text": "Authorization"
      },
      {
        "id": "D",
        "text": "Identification"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Authentication succeeded because login worked. The subsequent check for delete permissions failed at the authorization layer.",
    "accentureTip": "Permission check = Authorization"
  },
  {
    "id": "netsec-2-03",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "A banking application requires a customer to enter a password and then enter an OTP sent to their registered mobile phone. This is an example of:",
    "options": [
      {
        "id": "A",
        "text": "Single-factor authentication"
      },
      {
        "id": "B",
        "text": "Multi-factor authentication"
      },
      {
        "id": "C",
        "text": "Authorization"
      },
      {
        "id": "D",
        "text": "Encryption"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Password (Something you know) + OTP on phone (Something you have) spans two distinct factor categories, creating valid Multi-Factor Authentication (MFA).",
    "accentureTip": "Password + OTP = MFA (Know + Have)"
  },
  {
    "id": "netsec-2-04",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "Which of the following is an example of \"something you are\"?",
    "options": [
      {
        "id": "A",
        "text": "Password"
      },
      {
        "id": "B",
        "text": "PIN"
      },
      {
        "id": "C",
        "text": "Fingerprint"
      },
      {
        "id": "D",
        "text": "Security token"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Biometric attributes such as fingerprints, retinal patterns, and facial geometry belong to the \"Something you are\" inherence factor category.",
    "accentureTip": "Biometrics = Something you are"
  },
  {
    "id": "netsec-2-05",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Access Control Models",
    "question": "A company gives employees permissions according to their job roles (Manager → View+Modify, Employee → View, Admin → Manage). Which access control model is being used?",
    "options": [
      {
        "id": "A",
        "text": "DAC"
      },
      {
        "id": "B",
        "text": "MAC"
      },
      {
        "id": "C",
        "text": "RBAC"
      },
      {
        "id": "D",
        "text": "ABAC"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Role-Based Access Control (RBAC) assigns access privileges to specific organizational job roles rather than individual user accounts.",
    "accentureTip": "Permissions by job role = RBAC"
  },
  {
    "id": "netsec-2-06",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Access Control Models",
    "question": "A user creates a document and decides which other users can read or modify it. Which access control model does this best represent?",
    "options": [
      {
        "id": "A",
        "text": "MAC"
      },
      {
        "id": "B",
        "text": "DAC"
      },
      {
        "id": "C",
        "text": "RBAC"
      },
      {
        "id": "D",
        "text": "ABAC"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Under Discretionary Access Control (DAC), the creator/owner of a file or resource has full discretion to grant or revoke access rights.",
    "accentureTip": "Owner decides permissions = DAC"
  },
  {
    "id": "netsec-2-07",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Access Control Models",
    "question": "A military organization classifies documents as Top Secret, Secret, Confidential, and Public. Access is controlled according to centrally defined security classifications. Which model is this?",
    "options": [
      {
        "id": "A",
        "text": "DAC"
      },
      {
        "id": "B",
        "text": "RBAC"
      },
      {
        "id": "C",
        "text": "MAC"
      },
      {
        "id": "D",
        "text": "ABAC"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Mandatory Access Control (MAC) enforces system-wide security labels and clearances set by administrators that users cannot alter.",
    "accentureTip": "Security clearances / Military labels = MAC"
  },
  {
    "id": "netsec-2-08",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Access Control Models",
    "question": "A company's system allows access to a sensitive application only when: The user is an employee, device is company-approved, user is inside corporate network, and request occurs during working hours. Which model best fits?",
    "options": [
      {
        "id": "A",
        "text": "DAC"
      },
      {
        "id": "B",
        "text": "MAC"
      },
      {
        "id": "C",
        "text": "RBAC"
      },
      {
        "id": "D",
        "text": "ABAC"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Attribute-Based Access Control (ABAC) evaluates dynamic attributes (user role, device posture, geographic location, time of day) using contextual policies.",
    "accentureTip": "Dynamic contextual attributes = ABAC"
  },
  {
    "id": "netsec-2-09",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "An employee working from home needs secure access to the company's internal network over the public Internet. Which technology is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "VPN"
      },
      {
        "id": "B",
        "text": "DNS"
      },
      {
        "id": "C",
        "text": "FTP"
      },
      {
        "id": "D",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Virtual Private Network (VPN) builds an encrypted tunnel over public networks, enabling remote users to securely connect to private intranet resources.",
    "accentureTip": "Encrypted tunnel over Internet = VPN"
  },
  {
    "id": "netsec-2-10",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "What is the primary purpose of a VPN in a remote-access scenario?",
    "options": [
      {
        "id": "A",
        "text": "Increase Internet speed"
      },
      {
        "id": "B",
        "text": "Create a secure connection over an untrusted network"
      },
      {
        "id": "C",
        "text": "Assign IP addresses"
      },
      {
        "id": "D",
        "text": "Replace the firewall"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A VPN encapsulates and encrypts network traffic to ensure confidentiality and integrity across untrusted public pathways.",
    "accentureTip": "VPN = Secure encrypted path over untrusted network"
  },
  {
    "id": "netsec-2-11",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "A developer wants to protect HTTP communication between a browser and web server from eavesdropping and tampering. Which should be used?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "HTTPS"
      },
      {
        "id": "C",
        "text": "FTP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "HTTPS (HTTP over TLS) encrypts web traffic with symmetric ciphers and authenticates the web server with digital certificates.",
    "accentureTip": "HTTPS = HTTP + TLS (Port 443)"
  },
  {
    "id": "netsec-2-12",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "A network administrator wants to allow normal HTTPS traffic through a firewall. Which port should generally be allowed?",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "443"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The standard IANA port assignment for HTTPS traffic over TCP is 443. (Port 80 is unencrypted HTTP).",
    "accentureTip": "HTTPS Port = 443"
  },
  {
    "id": "netsec-2-13",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Ciphers & Algorithms",
    "question": "Which statement regarding SSL and TLS evolution is correct?",
    "options": [
      {
        "id": "A",
        "text": "TLS is the older protocol replaced by SSL"
      },
      {
        "id": "B",
        "text": "SSL replaced TLS"
      },
      {
        "id": "C",
        "text": "TLS is the modern successor to SSL"
      },
      {
        "id": "D",
        "text": "TLS is an encryption algorithm like AES"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Transport Layer Security (TLS) was standardized by the IETF as the modern, secure replacement for deprecated SSL protocols.",
    "accentureTip": "TLS replaced deprecated SSL"
  },
  {
    "id": "netsec-2-14",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "Which statement best describes HTTPS?",
    "options": [
      {
        "id": "A",
        "text": "HTTPS is HTTP combined with TLS protection"
      },
      {
        "id": "B",
        "text": "HTTPS is an encryption algorithm"
      },
      {
        "id": "C",
        "text": "HTTPS is a firewall"
      },
      {
        "id": "D",
        "text": "HTTPS is a hashing algorithm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "HTTPS is standard application-layer HTTP transmitted through an encrypted, authenticated TLS transport tunnel.",
    "accentureTip": "HTTPS = HTTP + TLS"
  },
  {
    "id": "netsec-2-15",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "An attacker intercepts a customer's encrypted communication and somehow obtains the customer's private information. Which CIA property is primarily concerned with preventing unauthorized disclosure?",
    "options": [
      {
        "id": "A",
        "text": "Integrity"
      },
      {
        "id": "B",
        "text": "Availability"
      },
      {
        "id": "C",
        "text": "Confidentiality"
      },
      {
        "id": "D",
        "text": "Authorization"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Confidentiality safeguards information from being accessed, viewed, or read by unauthorized individuals.",
    "accentureTip": "Preventing disclosure = Confidentiality"
  },
  {
    "id": "netsec-2-16",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "An attacker modifies a bank transaction from ₹500 to ₹50,000. Which security property has been violated?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authentication"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Integrity is violated when data is improperly altered, fabricated, or tampered with without legitimate authorization.",
    "accentureTip": "Unauthorized data modification = Integrity breach"
  },
  {
    "id": "netsec-2-17",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "An attacker floods an online shopping website with massive amounts of traffic, causing legitimate customers to lose access. Which CIA property is primarily affected?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authentication"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Availability guarantees that authorized users have access to services when needed. A flood attack directly disables availability.",
    "accentureTip": "Denying service access = Availability breach"
  },
  {
    "id": "netsec-2-18",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "CIA Triad & Access Control",
    "question": "A company encrypts confidential employee records so that unauthorized people cannot read them. Which CIA property is primarily being protected?",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality"
      },
      {
        "id": "B",
        "text": "Integrity"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Authorization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Encryption preserves confidentiality by rendering stored or transmitted information indecipherable to anyone without the key.",
    "accentureTip": "Encryption protects Confidentiality"
  },
  {
    "id": "netsec-2-19",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "A network administrator creates rules that determine whether packets from particular IP addresses are allowed or denied. What is being used?",
    "options": [
      {
        "id": "A",
        "text": "ACL"
      },
      {
        "id": "B",
        "text": "AES"
      },
      {
        "id": "C",
        "text": "VPN"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An Access Control List (ACL) is an ordered list of permit or deny statements that filter packets traversing a router or firewall.",
    "accentureTip": "Permit/Deny packet rules = ACL"
  },
  {
    "id": "netsec-2-20",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "A router administrator wants to filter traffic primarily based on the source IP address. Which ACL type is generally appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Standard ACL"
      },
      {
        "id": "B",
        "text": "Extended ACL"
      },
      {
        "id": "C",
        "text": "Dynamic NAT"
      },
      {
        "id": "D",
        "text": "MAC"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Standard ACLs filter network traffic exclusively by examining the packet source IPv4 address.",
    "accentureTip": "Source IP only = Standard ACL"
  },
  {
    "id": "netsec-2-21",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "A network administrator wants to allow only HTTPS traffic from a specific source network to a specific destination server. Which ACL provides the more appropriate level of filtering?",
    "options": [
      {
        "id": "A",
        "text": "Standard ACL"
      },
      {
        "id": "B",
        "text": "Extended ACL"
      },
      {
        "id": "C",
        "text": "DAC"
      },
      {
        "id": "D",
        "text": "RBAC"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Extended ACLs evaluate source IP, destination IP, transport protocol (TCP), and port number (443), making fine-grained rules possible.",
    "accentureTip": "Source + Destination + Port = Extended ACL"
  },
  {
    "id": "netsec-2-22",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker sends thousands of emails to a victim's mailbox within a short period, overwhelming storage and making legitimate messages difficult to access. What type of attack is this?",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "Email bombing"
      },
      {
        "id": "C",
        "text": "Spoofing"
      },
      {
        "id": "D",
        "text": "Buffer overflow"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Email Bombing floods an inbox with massive email volume to exhaust mailbox quotas, obscure fraud alerts, or crash mail servers.",
    "accentureTip": "Mass email flood = Email Bombing"
  },
  {
    "id": "netsec-2-23",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Attack Vectors & Threats",
    "question": "A program has allocated a 10-byte memory buffer but accepts 100 bytes of input without checking size limits. What vulnerability may occur?",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "Buffer overflow"
      },
      {
        "id": "C",
        "text": "DDoS"
      },
      {
        "id": "D",
        "text": "Spoofing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Buffer Overflow occurs when unvalidated input exceeds the memory allocated for a buffer, overwriting adjacent memory on the stack or heap.",
    "accentureTip": "Exceeding buffer bounds = Buffer Overflow"
  },
  {
    "id": "netsec-2-24",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Attack Vectors & Threats",
    "question": "An attacker provides specially crafted input to a vulnerable application. The input overwrites memory beyond the allocated buffer and potentially alters the program's execution flow. What type of vulnerability is being exploited?",
    "options": [
      {
        "id": "A",
        "text": "Buffer overflow"
      },
      {
        "id": "B",
        "text": "SQL injection"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "Email bombing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Buffer overflow exploits overwrite return instruction pointers on the execution stack, allowing arbitrary code execution.",
    "accentureTip": "Memory overwriting to divert execution = Buffer Overflow"
  },
  {
    "id": "netsec-2-25",
    "tier": 2,
    "tierName": "Tier 2: AuthN, AuthZ, VPN & Access Models",
    "topic": "Network Defense & Infrastructure",
    "question": "An organization implements: (1) Prove identity before login, (2) Permissions depend on job role, (3) Remote employees connect through secure tunnel, (4) Web communication uses TLS, (5) Network traffic filtered using permit/deny rules. Which combination is correct?",
    "options": [
      {
        "id": "A",
        "text": "Authentication + RBAC + VPN + HTTPS/TLS + ACL"
      },
      {
        "id": "B",
        "text": "Authorization + DAC + FTP + HTTP + DNS"
      },
      {
        "id": "C",
        "text": "Authentication + MAC + SMTP + HTTP + DHCP"
      },
      {
        "id": "D",
        "text": "Encryption + RBAC + DNS + FTP + NAT"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Item 1 = Authentication, Item 2 = RBAC, Item 3 = VPN, Item 4 = HTTPS/TLS, Item 5 = ACL.",
    "accentureTip": "AuthN + RBAC + VPN + TLS + ACL"
  },
  {
    "id": "netsec-3-01",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A company does not automatically trust employees simply because they are connected to the internal corporate network. Every request for a sensitive resource must be verified. Which security model is being implemented?",
    "options": [
      {
        "id": "A",
        "text": "Perimeter Security"
      },
      {
        "id": "B",
        "text": "Zero Trust"
      },
      {
        "id": "C",
        "text": "DAC"
      },
      {
        "id": "D",
        "text": "Open Access"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Zero Trust removes implicit trust from inside the perimeter, requiring identity, device health, and least-privilege verification on every transaction.",
    "accentureTip": "Never trust, always verify = Zero Trust"
  },
  {
    "id": "netsec-3-02",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "Which principle is most closely associated with Zero Trust?",
    "options": [
      {
        "id": "A",
        "text": "Trust all internal users"
      },
      {
        "id": "B",
        "text": "Never trust, always verify"
      },
      {
        "id": "C",
        "text": "Trust devices inside the firewall"
      },
      {
        "id": "D",
        "text": "Allow unrestricted internal access"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The foundational tenet of Zero Trust architecture is \"Never trust, always verify\", assuming breach and validating every single request.",
    "accentureTip": "Zero Trust = Never trust, always verify"
  },
  {
    "id": "netsec-3-03",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "A security team deploys a fake database containing dummy records. Attackers who attempt to access it are monitored by the security team. What is this system?",
    "options": [
      {
        "id": "A",
        "text": "Firewall"
      },
      {
        "id": "B",
        "text": "Honeypot"
      },
      {
        "id": "C",
        "text": "VPN"
      },
      {
        "id": "D",
        "text": "Proxy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Honeypot is an intentional decoy server designed to attract, detect, log, and analyze attacker behavior without exposing production assets.",
    "accentureTip": "Decoy / Trap server = Honeypot"
  },
  {
    "id": "netsec-3-04",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "What is the primary purpose of a honeypot?",
    "options": [
      {
        "id": "A",
        "text": "Increase network bandwidth"
      },
      {
        "id": "B",
        "text": "Encrypt all network traffic"
      },
      {
        "id": "C",
        "text": "Attract and detect/study attackers"
      },
      {
        "id": "D",
        "text": "Assign IP addresses"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Honeypots entice cyber adversaries into interacting with a monitored decoy to glean intelligence on tools, techniques, and exploits.",
    "accentureTip": "Honeypot = Decoy to study and detect attackers"
  },
  {
    "id": "netsec-3-05",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A company collects security logs from Firewalls, Servers, IDS/IPS, and Applications and analyzes them centrally to identify suspicious activity. What technology is being used?",
    "options": [
      {
        "id": "A",
        "text": "SIEM"
      },
      {
        "id": "B",
        "text": "VPN"
      },
      {
        "id": "C",
        "text": "AES"
      },
      {
        "id": "D",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "A",
    "explanation": "SIEM (Security Information and Event Management) aggregates, correlates, and analyzes real-time log data from disparate network components.",
    "accentureTip": "Centralized log analysis = SIEM"
  },
  {
    "id": "netsec-3-06",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A security analyst notices that an employee's account has generated 500 failed login attempts within five minutes. Which activity would most likely identify this behavior?",
    "options": [
      {
        "id": "A",
        "text": "Security monitoring"
      },
      {
        "id": "B",
        "text": "Data encryption"
      },
      {
        "id": "C",
        "text": "Compression"
      },
      {
        "id": "D",
        "text": "NAT"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Security monitoring involves continuous automated surveillance of authentication logs to detect brute-force attempts and anomalies.",
    "accentureTip": "Detecting brute-force in logs = Security Monitoring"
  },
  {
    "id": "netsec-3-07",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "An employee downloads a file. Before it executes, security software detects that the file contains known malicious code and blocks it. Which technology is primarily responsible?",
    "options": [
      {
        "id": "A",
        "text": "Antivirus/anti-malware"
      },
      {
        "id": "B",
        "text": "VPN"
      },
      {
        "id": "C",
        "text": "ACL"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Antivirus/anti-malware scans downloaded files against virus signature definitions and heuristics to identify and neutralize threats before execution.",
    "accentureTip": "Malware detection & removal = Antivirus"
  },
  {
    "id": "netsec-3-08",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "An antivirus application detects a malicious executable and moves it to an isolated location where it cannot execute normally. What is this process called?",
    "options": [
      {
        "id": "A",
        "text": "Encryption"
      },
      {
        "id": "B",
        "text": "Quarantine"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Spoofing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Quarantine isolates an infected file in a secured directory, preventing it from executing or infecting other system processes.",
    "accentureTip": "Isolating infected files = Quarantine"
  },
  {
    "id": "netsec-3-09",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "A company wants a firewall that can perform traditional traffic filtering while also providing application-aware inspection and additional security capabilities. Which is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Basic hub"
      },
      {
        "id": "B",
        "text": "NGFW"
      },
      {
        "id": "C",
        "text": "DHCP server"
      },
      {
        "id": "D",
        "text": "DNS server"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Next-Generation Firewalls (NGFW) combine traditional Layer 4 stateful filtering with Layer 7 Deep Packet Inspection, integrated IPS, and SSL decryption.",
    "accentureTip": "Application-aware + integrated IPS = NGFW"
  },
  {
    "id": "netsec-3-10",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "A security device receives a request from an internal client and forwards the request to the external server on behalf of the client. What is this device most likely acting as?",
    "options": [
      {
        "id": "A",
        "text": "Proxy"
      },
      {
        "id": "B",
        "text": "Router only"
      },
      {
        "id": "C",
        "text": "DNS resolver"
      },
      {
        "id": "D",
        "text": "DHCP server"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Proxy acts as an intermediary, terminating the client session and originating a new separate session to the destination server.",
    "accentureTip": "Intermediary forwarding on behalf of client = Proxy"
  },
  {
    "id": "netsec-3-11",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A web application contains an unpatched software flaw that attackers can exploit. What does the flaw represent?",
    "options": [
      {
        "id": "A",
        "text": "Threat"
      },
      {
        "id": "B",
        "text": "Vulnerability"
      },
      {
        "id": "C",
        "text": "Risk"
      },
      {
        "id": "D",
        "text": "Incident response"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A vulnerability is a weakness, software defect, or configuration flaw in an information system that could be leveraged by a threat actor.",
    "accentureTip": "Flaw / weakness = Vulnerability"
  },
  {
    "id": "netsec-3-12",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A hacker is actively looking for vulnerable systems to attack. In security terminology, the hacker represents a:",
    "options": [
      {
        "id": "A",
        "text": "Vulnerability"
      },
      {
        "id": "B",
        "text": "Threat"
      },
      {
        "id": "C",
        "text": "Patch"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A threat is any external or internal entity, circumstance, or event with the potential to cause damage or compromise assets.",
    "accentureTip": "Attacker / source of harm = Threat"
  },
  {
    "id": "netsec-3-13",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A company has an outdated server that can be exploited by attackers, potentially causing financial loss. The possibility of this loss occurring represents:",
    "options": [
      {
        "id": "A",
        "text": "Risk"
      },
      {
        "id": "B",
        "text": "Encryption"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Vulnerability only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Risk is the product or likelihood of a threat actor successfully exploiting a system vulnerability multiplied by the resulting business impact.",
    "accentureTip": "Threat × Vulnerability = Risk"
  },
  {
    "id": "netsec-3-14",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A server has an unpatched operating system vulnerability, and an attacker is attempting to exploit it. Which pairing is correct?",
    "options": [
      {
        "id": "A",
        "text": "Server flaw = Threat; attacker = Vulnerability"
      },
      {
        "id": "B",
        "text": "Server flaw = Vulnerability; attacker = Threat"
      },
      {
        "id": "C",
        "text": "Server flaw = Risk; attacker = Patch"
      },
      {
        "id": "D",
        "text": "Server flaw = Threat; attacker = Risk"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The unpatched software bug is the Vulnerability (weakness), and the malicious hacker is the Threat (potential harm).",
    "accentureTip": "Flaw = Vulnerability | Attacker = Threat"
  },
  {
    "id": "netsec-3-15",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A vendor releases a security update that fixes a critical vulnerability in its software. The company's IT team tests and installs the update. This activity is part of:",
    "options": [
      {
        "id": "A",
        "text": "Patch management"
      },
      {
        "id": "B",
        "text": "Phishing"
      },
      {
        "id": "C",
        "text": "Spoofing"
      },
      {
        "id": "D",
        "text": "Data mining"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Patch management is the disciplined operational cycle of acquiring, testing, deploying, and verifying software updates to remediate vulnerabilities.",
    "accentureTip": "Installing security updates = Patch Management"
  },
  {
    "id": "netsec-3-16",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "CIA Triad & Access Control",
    "question": "A database administrator gives a reporting application permission to only read the required tables. The application cannot modify or delete data. Which principle is being followed?",
    "options": [
      {
        "id": "A",
        "text": "Zero Trust only"
      },
      {
        "id": "B",
        "text": "Least privilege"
      },
      {
        "id": "C",
        "text": "Open access"
      },
      {
        "id": "D",
        "text": "Data redundancy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Principle of Least Privilege states that subjects should only be granted the minimum access rights strictly necessary to fulfill assigned tasks.",
    "accentureTip": "Minimum required permissions = Least Privilege"
  },
  {
    "id": "netsec-3-17",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "CIA Triad & Access Control",
    "question": "Why is the principle of least privilege important?",
    "options": [
      {
        "id": "A",
        "text": "It gives every user maximum access"
      },
      {
        "id": "B",
        "text": "It reduces potential damage if an account or application is compromised"
      },
      {
        "id": "C",
        "text": "It eliminates the need for authentication"
      },
      {
        "id": "D",
        "text": "It makes all systems publicly accessible"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Limiting permissions reduces the blast radius; an attacker compromising a low-privilege account cannot alter core databases or seize domain control.",
    "accentureTip": "Least privilege minimizes blast radius"
  },
  {
    "id": "netsec-3-18",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Network Defense & Infrastructure",
    "question": "A company uses: Firewall + IDS/IPS + MFA + Antivirus + Encryption. Why is this approach called defense in depth?",
    "options": [
      {
        "id": "A",
        "text": "It uses multiple layers of security"
      },
      {
        "id": "B",
        "text": "It uses only one strong firewall"
      },
      {
        "id": "C",
        "text": "It removes authentication"
      },
      {
        "id": "D",
        "text": "It eliminates network monitoring"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Defense in Depth layers defensive mechanisms so that if an adversary penetrates one control (e.g. firewall), subsequent layers (e.g. MFA, encryption) prevent compromise.",
    "accentureTip": "Multiple defensive layers = Defense in Depth"
  },
  {
    "id": "netsec-3-19",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A server records: 09:30 — Successful login, 09:32 — Failed login, 09:35 — File accessed, 09:40 — Configuration changed. These records are called:",
    "options": [
      {
        "id": "A",
        "text": "Logs"
      },
      {
        "id": "B",
        "text": "Encryption keys"
      },
      {
        "id": "C",
        "text": "ACLs"
      },
      {
        "id": "D",
        "text": "Certificates"
      }
    ],
    "correctAnswer": "A",
    "explanation": "System logs are chronological, time-stamped records capturing operations, connection states, and events across IT systems.",
    "accentureTip": "Chronological event records = Logs"
  },
  {
    "id": "netsec-3-20",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A security team reviews system logs and configurations to determine whether employees followed the company's security policies. What activity is this?",
    "options": [
      {
        "id": "A",
        "text": "Security auditing"
      },
      {
        "id": "B",
        "text": "Encryption"
      },
      {
        "id": "C",
        "text": "Packet routing"
      },
      {
        "id": "D",
        "text": "Compression"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Security auditing evaluates systems, configurations, and user logs against established governance benchmarks and compliance rules.",
    "accentureTip": "Evaluating compliance against policies = Security Auditing"
  },
  {
    "id": "netsec-3-21",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "An attacker gains unauthorized access to a company's customer database and steals names, addresses, and passwords. What has occurred?",
    "options": [
      {
        "id": "A",
        "text": "Data breach"
      },
      {
        "id": "B",
        "text": "Patch management"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Honeypot"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Data Breach occurs when confidential, sensitive, or legally protected information is accessed, copied, or exfiltrated by an unauthorized party.",
    "accentureTip": "Exfiltration of sensitive data = Data Breach"
  },
  {
    "id": "netsec-3-22",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "Which of the following could potentially lead to a data breach?",
    "options": [
      {
        "id": "A",
        "text": "Exploiting an unpatched vulnerability"
      },
      {
        "id": "B",
        "text": "Phishing an employee"
      },
      {
        "id": "C",
        "text": "Malware infection"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Data breaches stem from myriad attack vectors including software vulnerabilities, social engineering, malicious software, and misconfigured storage buckets.",
    "accentureTip": "All of the above can trigger a data breach"
  },
  {
    "id": "netsec-3-23",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A company follows these rules: Every user must verify their identity; Access is granted only when required; Users receive minimum necessary permissions; Suspicious activity is continuously monitored. Which combination of principles is most closely represented?",
    "options": [
      {
        "id": "A",
        "text": "Zero Trust + Least Privilege + Security Monitoring"
      },
      {
        "id": "B",
        "text": "Open Access + Anonymous Access"
      },
      {
        "id": "C",
        "text": "DAC + Email Bombing"
      },
      {
        "id": "D",
        "text": "DDoS + Encryption"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Verify identity = Zero Trust; Minimum necessary permissions = Least Privilege; Continuous monitoring = Security Monitoring.",
    "accentureTip": "Zero Trust + Least Privilege + Monitoring"
  },
  {
    "id": "netsec-3-24",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "A company discovers that its web server has an old software version containing a known security flaw. No attack has occurred yet, but an attacker could exploit it. Which statement is most accurate?",
    "options": [
      {
        "id": "A",
        "text": "The software flaw is a vulnerability, while the potential attacker is a threat"
      },
      {
        "id": "B",
        "text": "The software flaw is a threat, while the attacker is a vulnerability"
      },
      {
        "id": "C",
        "text": "The software flaw is a data breach"
      },
      {
        "id": "D",
        "text": "The attacker is a patch"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The internal flaw is the Vulnerability (weakness); the external attacker is the Threat (potential harm).",
    "accentureTip": "Flaw = Vulnerability | Attacker = Threat"
  },
  {
    "id": "netsec-3-25",
    "tier": 3,
    "tierName": "Tier 3: Zero Trust, Firewalls, SIEM & Operations",
    "topic": "Zero Trust & Operations",
    "question": "An organization wants: A decoy server to attract attackers; Centralized analysis of security logs; Minimum permissions for users; Multiple security layers; Regular security updates. Which combination is correct?",
    "options": [
      {
        "id": "A",
        "text": "Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Management"
      },
      {
        "id": "B",
        "text": "VPN + DNS + DHCP + NAT + FTP"
      },
      {
        "id": "C",
        "text": "AES + RSA + DES + RC4 + RC5"
      },
      {
        "id": "D",
        "text": "DoS + DDoS + Phishing + Spoofing + Ransomware"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Decoy = Honeypot; Centralized logs = SIEM; Minimum permissions = Least Privilege; Multiple layers = Defense in Depth; Security updates = Patch Management.",
    "accentureTip": "Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Mgmt"
  }
];

export const networkSecurityOptionExplanationsMap = {
  "netsec-1-01": {
    "correctOption": "B",
    "memoryPill": "AES = Symmetric Block Cipher",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Asymmetric",
      "why": "\"Asymmetric\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Symmetric",
      "why": "AES (Advanced Encryption Standard) is a symmetric-key block cipher using a single shared secret key for both encryption and decryption."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Hashing",
      "why": "\"Hashing\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Digital signature",
      "why": "\"Digital signature\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    }
  },
  "netsec-1-02": {
    "correctOption": "B",
    "memoryPill": "AES Block Size is always 128 bits",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "64 bits",
      "why": "\"64 bits\" does not satisfy the requirements of this question. Correct answer is Option B (128 bits)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "128 bits",
      "why": "The block size of AES is permanently fixed at 128 bits (16 bytes) across all key lengths (AES-128, AES-192, AES-256)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "192 bits",
      "why": "\"192 bits\" does not satisfy the requirements of this question. Correct answer is Option B (128 bits)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "256 bits",
      "why": "\"256 bits\" does not satisfy the requirements of this question. Correct answer is Option B (128 bits)."
    }
  },
  "netsec-1-03": {
    "correctOption": "B",
    "memoryPill": "AES Rounds: 128→10 | 192→12 | 256→14",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "8",
      "why": "\"8\" does not satisfy the requirements of this question. Correct answer is Option B (10)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "10",
      "why": "AES-128 executes 10 transformation rounds. (AES-192 executes 12 rounds, AES-256 executes 14 rounds)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "12",
      "why": "\"12\" does not satisfy the requirements of this question. Correct answer is Option B (10)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "14",
      "why": "\"14\" does not satisfy the requirements of this question. Correct answer is Option B (10)."
    }
  },
  "netsec-1-04": {
    "correctOption": "C",
    "memoryPill": "AES-256 = 14 Rounds",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "10",
      "why": "\"10\" does not satisfy the requirements of this question. Correct answer is Option C (14)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "12",
      "why": "\"12\" does not satisfy the requirements of this question. Correct answer is Option C (14)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "14",
      "why": "AES-256 uses a 256-bit key and performs 14 rounds of substitution and permutation over 128-bit blocks."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "16",
      "why": "\"16\" does not satisfy the requirements of this question. Correct answer is Option C (14)."
    }
  },
  "netsec-1-05": {
    "correctOption": "B",
    "memoryPill": "DES Total = 64 bits | Effective = 56 bits",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "32 bits",
      "why": "\"32 bits\" does not satisfy the requirements of this question. Correct answer is Option B (56 bits)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "56 bits",
      "why": "Although DES uses a 64-bit key, 8 bits are discarded for parity checking, resulting in an effective cryptographic key length of 56 bits."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "64 bits",
      "why": "\"64 bits\" does not satisfy the requirements of this question. Correct answer is Option B (56 bits)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "128 bits",
      "why": "\"128 bits\" does not satisfy the requirements of this question. Correct answer is Option B (56 bits)."
    }
  },
  "netsec-1-06": {
    "correctOption": "C",
    "memoryPill": "DES = 16 Feistel Rounds",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "8",
      "why": "\"8\" does not satisfy the requirements of this question. Correct answer is Option C (16)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "10",
      "why": "\"10\" does not satisfy the requirements of this question. Correct answer is Option C (16)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "16",
      "why": "The Data Encryption Standard (DES) Feistel network executes 16 identical encryption rounds on 64-bit blocks."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "32",
      "why": "\"32\" does not satisfy the requirements of this question. Correct answer is Option C (16)."
    }
  },
  "netsec-1-07": {
    "correctOption": "C",
    "memoryPill": "RC4 = Stream Cipher | AES, DES, RC5 = Block Ciphers",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES",
      "why": "\"DES\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RC4",
      "why": "RC4 is a symmetric stream cipher that encrypts data byte-by-byte (or bit-by-bit). AES, DES, and RC5 are block ciphers."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA",
      "why": "\"RSA\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    }
  },
  "netsec-1-08": {
    "correctOption": "C",
    "memoryPill": "RC5 = Symmetric Block Cipher",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It is an asymmetric algorithm",
      "why": "\"It is an asymmetric algorithm\" does not satisfy the requirements of this question. Correct answer is Option C (It is a symmetric block cipher)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It is a stream cipher",
      "why": "\"It is a stream cipher\" does not satisfy the requirements of this question. Correct answer is Option C (It is a symmetric block cipher)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "It is a symmetric block cipher",
      "why": "RC5 is a symmetric block cipher with parameterized block size (32, 64, or 128 bits), variable rounds (0 to 255), and variable key size."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It is a hashing algorithm",
      "why": "\"It is a hashing algorithm\" does not satisfy the requirements of this question. Correct answer is Option C (It is a symmetric block cipher)."
    }
  },
  "netsec-1-09": {
    "correctOption": "C",
    "memoryPill": "RSA = Asymmetric (Public + Private Key Pair)",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option C (RSA)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES",
      "why": "\"DES\" does not satisfy the requirements of this question. Correct answer is Option C (RSA)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RSA",
      "why": "RSA is an asymmetric cryptographic algorithm that utilizes a mathematically linked public key (for encryption/verification) and private key (for decryption/signing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RC4",
      "why": "\"RC4\" does not satisfy the requirements of this question. Correct answer is Option C (RSA)."
    }
  },
  "netsec-1-10": {
    "correctOption": "A",
    "memoryPill": "Bulk Data = Symmetric (Fast)",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Symmetric encryption",
      "why": "Symmetric encryption (like AES) is 100x to 1000x faster than asymmetric encryption because it uses simple substitution and permutation instead of heavy modular exponentiation."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Asymmetric encryption",
      "why": "\"Asymmetric encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Symmetric encryption)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Hashing",
      "why": "\"Hashing\" does not satisfy the requirements of this question. Correct answer is Option A (Symmetric encryption)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Digital signature",
      "why": "\"Digital signature\" does not satisfy the requirements of this question. Correct answer is Option A (Symmetric encryption)."
    }
  },
  "netsec-1-11": {
    "correctOption": "C",
    "memoryPill": "Encryption = Confidentiality (Data Secrecy)",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Increase network speed",
      "why": "\"Increase network speed\" does not satisfy the requirements of this question. Correct answer is Option C (Protect data from unauthorized access)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Convert ciphertext into plaintext",
      "why": "\"Convert ciphertext into plaintext\" does not satisfy the requirements of this question. Correct answer is Option C (Protect data from unauthorized access)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Protect data from unauthorized access",
      "why": "Encryption converts plaintext into ciphertext to guarantee confidentiality, preventing unauthorized parties from reading sensitive data."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Detect viruses",
      "why": "\"Detect viruses\" does not satisfy the requirements of this question. Correct answer is Option C (Protect data from unauthorized access)."
    }
  },
  "netsec-1-12": {
    "correctOption": "B",
    "memoryPill": "Single machine flood = DoS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DoS",
      "why": "A DoS (Denial of Service) attack aims to exhaust system or network resources from a single source, making services unavailable to legitimate users."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan",
      "why": "\"Trojan\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    }
  },
  "netsec-1-13": {
    "correctOption": "B",
    "memoryPill": "Multiple distributed machines = DDoS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DoS",
      "why": "\"DoS\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DDoS",
      "why": "A DDoS (Distributed Denial of Service) attack utilizes a network of compromised machines (a botnet) to flood a target server simultaneously."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Brute force",
      "why": "\"Brute force\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    }
  },
  "netsec-1-14": {
    "correctOption": "A",
    "memoryPill": "Human deception = Phishing",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Phishing",
      "why": "Phishing is a social engineering attack that tricks human users into revealing sensitive credentials, PINs, or financial information."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Buffer overflow",
      "why": "\"Buffer overflow\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Packet sniffing",
      "why": "\"Packet sniffing\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing)."
    }
  },
  "netsec-1-15": {
    "correctOption": "B",
    "memoryPill": "Forging origin identity = Spoofing",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing only",
      "why": "\"Phishing only\" does not satisfy the requirements of this question. Correct answer is Option B (Spoofing)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Spoofing",
      "why": "Spoofing is the technical act of falsifying identity metadata (such as forging email headers or source IP addresses) to masquerade as a trusted entity."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option B (Spoofing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DoS",
      "why": "\"DoS\" does not satisfy the requirements of this question. Correct answer is Option B (Spoofing)."
    }
  },
  "netsec-1-16": {
    "correctOption": "C",
    "memoryPill": "File locking + payment demand = Ransomware",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan",
      "why": "\"Trojan\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spyware",
      "why": "\"Spyware\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Ransomware",
      "why": "Ransomware encrypts target data on storage drives and demands extortion payments (usually in cryptocurrency) for the decryption keys."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Worm",
      "why": "\"Worm\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    }
  },
  "netsec-1-17": {
    "correctOption": "A",
    "memoryPill": "Disguised as useful software = Trojan",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Trojan",
      "why": "A Trojan Horse masquerades as genuine or desirable software to trick users into downloading and installing it, opening backdoors for attackers."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Worm",
      "why": "\"Worm\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Firewall",
      "why": "\"Firewall\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    }
  },
  "netsec-1-18": {
    "correctOption": "B",
    "memoryPill": "Self-replicating standalone = Worm",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan",
      "why": "\"Trojan\" does not satisfy the requirements of this question. Correct answer is Option B (Worm)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Worm",
      "why": "Worms are standalone programs that automatically self-replicate and spread across network connections without requiring user interaction or a host file."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option B (Worm)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spyware",
      "why": "\"Spyware\" does not satisfy the requirements of this question. Correct answer is Option B (Worm)."
    }
  },
  "netsec-1-19": {
    "correctOption": "B",
    "memoryPill": "IDS = Passive Detection & Alerting",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encrypt network traffic",
      "why": "\"Encrypt network traffic\" does not satisfy the requirements of this question. Correct answer is Option B (Detect suspicious activity and generate alerts)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Detect suspicious activity and generate alerts",
      "why": "An IDS passively monitors network traffic or system logs, analyzes behavior for policy violations, and sends alerts to security administrators without dropping packets."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Automatically replace infected files",
      "why": "\"Automatically replace infected files\" does not satisfy the requirements of this question. Correct answer is Option B (Detect suspicious activity and generate alerts)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Assign IP addresses",
      "why": "\"Assign IP addresses\" does not satisfy the requirements of this question. Correct answer is Option B (Detect suspicious activity and generate alerts)."
    }
  },
  "netsec-1-20": {
    "correctOption": "B",
    "memoryPill": "IPS = In-line Active Blocking",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS",
      "why": "\"IDS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "IPS",
      "why": "An IPS (Intrusion Prevention System) sits in-line with network traffic and actively drops malicious packets or resets connections upon detecting threats."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP",
      "why": "\"DHCP\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    }
  },
  "netsec-1-21": {
    "correctOption": "C",
    "memoryPill": "UTM = Unified Threat Management",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Unified Traffic Management",
      "why": "\"Unified Traffic Management\" does not satisfy the requirements of this question. Correct answer is Option C (Unified Threat Management)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Universal Threat Monitoring",
      "why": "\"Universal Threat Monitoring\" does not satisfy the requirements of this question. Correct answer is Option C (Unified Threat Management)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Unified Threat Management",
      "why": "UTM stands for Unified Threat Management, an all-in-one security architecture integrating firewall, IPS, antivirus, web filtering, and VPN capabilities."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "User Threat Management",
      "why": "\"User Threat Management\" does not satisfy the requirements of this question. Correct answer is Option C (Unified Threat Management)."
    }
  },
  "netsec-1-22": {
    "correctOption": "B",
    "memoryPill": "UTM = Multiple security functions in one box",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It only provides encryption",
      "why": "\"It only provides encryption\" does not satisfy the requirements of this question. Correct answer is Option B (It combines multiple security functions into one solution)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "It combines multiple security functions into one solution",
      "why": "UTM consolidates multiple defensive functions (firewall, antivirus, anti-spam, IDS/IPS, content filtering) into a single hardware or cloud appliance."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It only detects viruses",
      "why": "\"It only detects viruses\" does not satisfy the requirements of this question. Correct answer is Option B (It combines multiple security functions into one solution)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It is a replacement for TCP",
      "why": "\"It is a replacement for TCP\" does not satisfy the requirements of this question. Correct answer is Option B (It combines multiple security functions into one solution)."
    }
  },
  "netsec-1-23": {
    "correctOption": "D",
    "memoryPill": "RSA = Asymmetric",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option D (RSA)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES",
      "why": "\"DES\" does not satisfy the requirements of this question. Correct answer is Option D (RSA)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RC4",
      "why": "\"RC4\" does not satisfy the requirements of this question. Correct answer is Option D (RSA)."
    },
    "D": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RSA",
      "why": "RSA is an asymmetric algorithm (public-key cryptography). AES, DES, and RC4 are all symmetric ciphers."
    }
  },
  "netsec-1-24": {
    "correctOption": "C",
    "memoryPill": "RC4 = Stream Cipher",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES — Asymmetric",
      "why": "\"AES — Asymmetric\" does not satisfy the requirements of this question. Correct answer is Option C (RC4 — Stream cipher)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA — Symmetric",
      "why": "\"RSA — Symmetric\" does not satisfy the requirements of this question. Correct answer is Option C (RC4 — Stream cipher)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RC4 — Stream cipher",
      "why": "RC4 is a symmetric stream cipher. (AES is symmetric block, RSA is asymmetric, DES is symmetric block)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES — Hash function",
      "why": "\"DES — Hash function\" does not satisfy the requirements of this question. Correct answer is Option C (RC4 — Stream cipher)."
    }
  },
  "netsec-1-25": {
    "correctOption": "C",
    "memoryPill": "DoS targets Availability",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Confidentiality",
      "why": "\"Confidentiality\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Integrity",
      "why": "\"Integrity\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Availability",
      "why": "Denial of Service attacks target the Availability pillar of the CIA Triad by starving system resources and preventing authorized access."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    }
  },
  "netsec-1-26": {
    "correctOption": "B",
    "memoryPill": "Fake login link in email = Phishing",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option B (Phishing)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Phishing",
      "why": "Phishing uses deceptive emails and fraudulent login pages to trick victims into surrendering usernames and passwords."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing only",
      "why": "\"Spoofing only\" does not satisfy the requirements of this question. Correct answer is Option B (Phishing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option B (Phishing)."
    }
  },
  "netsec-1-27": {
    "correctOption": "B",
    "memoryPill": "Distributed flood = DDoS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DoS",
      "why": "\"DoS\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DDoS",
      "why": "Volumetric traffic flood originating simultaneously from thousands of distributed botnet machines constitutes a Distributed Denial of Service (DDoS)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan attack",
      "why": "\"Trojan attack\" does not satisfy the requirements of this question. Correct answer is Option B (DDoS)."
    }
  },
  "netsec-1-28": {
    "correctOption": "B",
    "memoryPill": "Forged sender IP = IP Spoofing",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (IP spoofing)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "IP spoofing",
      "why": "IP Spoofing involves crafting IP packets with a false sender address to bypass IP-based authentication or disguise the attacker identity."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option B (IP spoofing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option B (IP spoofing)."
    }
  },
  "netsec-1-29": {
    "correctOption": "B",
    "memoryPill": "Fast bulk encryption = AES",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA",
      "why": "\"RSA\" does not satisfy the requirements of this question. Correct answer is Option B (AES)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "AES",
      "why": "AES is the industry gold standard symmetric cipher, offering unmatched encryption speed and hardware acceleration for bulk databases and storage disks."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Digital signature",
      "why": "\"Digital signature\" does not satisfy the requirements of this question. Correct answer is Option B (AES)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Hashing",
      "why": "\"Hashing\" does not satisfy the requirements of this question. Correct answer is Option B (AES)."
    }
  },
  "netsec-1-30": {
    "correctOption": "D",
    "memoryPill": "Encrypted with Public Key → Decrypted with Private Key",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Sender's public key",
      "why": "\"Sender's public key\" does not satisfy the requirements of this question. Correct answer is Option D (Developer's private key)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Sender's private key",
      "why": "\"Sender's private key\" does not satisfy the requirements of this question. Correct answer is Option D (Developer's private key)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Developer's public key",
      "why": "\"Developer's public key\" does not satisfy the requirements of this question. Correct answer is Option D (Developer's private key)."
    },
    "D": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Developer's private key",
      "why": "In asymmetric cryptography, data encrypted with a public key can only be decrypted by the matching private key held solely by the recipient."
    }
  },
  "netsec-1-31": {
    "correctOption": "C",
    "memoryPill": "Encrypted files + extortion = Ransomware",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan",
      "why": "\"Trojan\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Worm",
      "why": "\"Worm\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Ransomware",
      "why": "Malicious encryption of user documents accompanied by an extortion note demanding cryptocurrency ransom is the defining hallmark of Ransomware."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spyware",
      "why": "\"Spyware\" does not satisfy the requirements of this question. Correct answer is Option C (Ransomware)."
    }
  },
  "netsec-1-32": {
    "correctOption": "A",
    "memoryPill": "Trojan masquerades as benign software",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Trojan",
      "why": "A Trojan Horse conceals malicious payload code within an apparently benign or useful executable file."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Firewall",
      "why": "\"Firewall\" does not satisfy the requirements of this question. Correct answer is Option A (Trojan)."
    }
  },
  "netsec-1-33": {
    "correctOption": "B",
    "memoryPill": "Alerts only without dropping = IDS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IPS",
      "why": "\"IPS\" does not satisfy the requirements of this question. Correct answer is Option B (IDS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "IDS",
      "why": "An IDS (Intrusion Detection System) is deployed out-of-band to passively monitor traffic and trigger alerts without interfering with network flow."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "UTM",
      "why": "\"UTM\" does not satisfy the requirements of this question. Correct answer is Option B (IDS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option B (IDS)."
    }
  },
  "netsec-1-34": {
    "correctOption": "B",
    "memoryPill": "In-line active threat blocking = IPS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS",
      "why": "\"IDS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "IPS",
      "why": "An IPS (Intrusion Prevention System) sits in-line directly in the communication path to actively block and drop attack traffic in real time."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP",
      "why": "\"DHCP\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    }
  },
  "netsec-1-35": {
    "correctOption": "A",
    "memoryPill": "All-in-one perimeter security = UTM",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "UTM",
      "why": "Unified Threat Management (UTM) aggregates multiple security layers into an all-in-one appliance, ideal for small and medium enterprises."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option A (UTM)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option A (UTM)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS only",
      "why": "\"IDS only\" does not satisfy the requirements of this question. Correct answer is Option A (UTM)."
    }
  },
  "netsec-1-36": {
    "correctOption": "B",
    "memoryPill": "AES-256: 256-bit Key | 128-bit Block",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES-256 uses a 256-bit block size",
      "why": "\"AES-256 uses a 256-bit block size\" does not satisfy the requirements of this question. Correct answer is Option B (AES-256 uses a 256-bit key and 128-bit block size)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "AES-256 uses a 256-bit key and 128-bit block size",
      "why": "AES-256 employs a 256-bit secret key, but processes data strictly in 128-bit block increments (14 rounds)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES-256 is asymmetric",
      "why": "\"AES-256 is asymmetric\" does not satisfy the requirements of this question. Correct answer is Option B (AES-256 uses a 256-bit key and 128-bit block size)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES-256 uses a 56-bit key",
      "why": "\"AES-256 uses a 56-bit key\" does not satisfy the requirements of this question. Correct answer is Option B (AES-256 uses a 256-bit key and 128-bit block size)."
    }
  },
  "netsec-1-37": {
    "correctOption": "B",
    "memoryPill": "DES is obsolete because 56-bit key is easily brute-forced",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES is asymmetric",
      "why": "\"DES is asymmetric\" does not satisfy the requirements of this question. Correct answer is Option B (DES has a small effective key size (56 bits) and is vulnerable to brute-force attacks)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DES has a small effective key size (56 bits) and is vulnerable to brute-force attacks",
      "why": "DES effective key space is only 56 bits (2⁵⁶), which modern computing rigs can brute-force in minutes to hours."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES does not use encryption keys",
      "why": "\"AES does not use encryption keys\" does not satisfy the requirements of this question. Correct answer is Option B (DES has a small effective key size (56 bits) and is vulnerable to brute-force attacks)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES cannot encrypt data",
      "why": "\"DES cannot encrypt data\" does not satisfy the requirements of this question. Correct answer is Option B (DES has a small effective key size (56 bits) and is vulnerable to brute-force attacks)."
    }
  },
  "netsec-1-38": {
    "correctOption": "A",
    "memoryPill": "RSA is slow for bulk data → Use AES for payload",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RSA is generally slow and computationally inefficient for bulk data",
      "why": "Asymmetric algorithms like RSA are computationally intensive. Practical systems use hybrid encryption: RSA exchanges a symmetric key, while AES encrypts the bulk file."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA cannot use keys",
      "why": "\"RSA cannot use keys\" does not satisfy the requirements of this question. Correct answer is Option A (RSA is generally slow and computationally inefficient for bulk data)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA is a stream cipher",
      "why": "\"RSA is a stream cipher\" does not satisfy the requirements of this question. Correct answer is Option A (RSA is generally slow and computationally inefficient for bulk data)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA provides no security",
      "why": "\"RSA provides no security\" does not satisfy the requirements of this question. Correct answer is Option A (RSA is generally slow and computationally inefficient for bulk data)."
    }
  },
  "netsec-1-39": {
    "correctOption": "B",
    "memoryPill": "Single machine flood = DoS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DoS",
      "why": "A resource exhaustion attack launched from a single originating system is classified as a DoS (Denial of Service)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (DoS)."
    }
  },
  "netsec-1-40": {
    "correctOption": "A",
    "memoryPill": "Falsifying sender identity = Spoofing",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Spoofing",
      "why": "Falsifying the sender identity in email headers or IP packet headers is known as Spoofing."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Ransomware",
      "why": "\"Ransomware\" does not satisfy the requirements of this question. Correct answer is Option A (Spoofing)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Spoofing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS",
      "why": "\"IDS\" does not satisfy the requirements of this question. Correct answer is Option A (Spoofing)."
    }
  },
  "netsec-1-41": {
    "correctOption": "A",
    "memoryPill": "Fake portal + forged address = Phishing + Spoofing",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Phishing + spoofing",
      "why": "The fraudulent login page is Phishing (social engineering to harvest credentials), and the forged sender address is Email Spoofing."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS + ransomware",
      "why": "\"DDoS + ransomware\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing + spoofing)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan + worm",
      "why": "\"Trojan + worm\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing + spoofing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS + IPS",
      "why": "\"IDS + IPS\" does not satisfy the requirements of this question. Correct answer is Option A (Phishing + spoofing)."
    }
  },
  "netsec-1-42": {
    "correctOption": "A",
    "memoryPill": "Rule-based traffic filter = Firewall",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Firewall",
      "why": "Firewalls inspect Layer 3 and Layer 4 packet headers and enforce rule-based packet filtering (Permit/Deny)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option A (Firewall)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trojan",
      "why": "\"Trojan\" does not satisfy the requirements of this question. Correct answer is Option A (Firewall)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA",
      "why": "\"RSA\" does not satisfy the requirements of this question. Correct answer is Option A (Firewall)."
    }
  },
  "netsec-1-43": {
    "correctOption": "B",
    "memoryPill": "Active packet dropping = IPS",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS",
      "why": "\"IDS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "IPS",
      "why": "An IPS actively drops offending packets in-line, whereas an IDS only issues passive log alerts."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option B (IPS)."
    }
  },
  "netsec-1-44": {
    "correctOption": "B",
    "memoryPill": "Who can access what = Authorization",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option B (Authorization)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Authorization",
      "why": "Authorization defines privileges, roles, and permissions (\"What can you do/access?\"), following initial authentication (\"Who are you?\")."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option B (Authorization)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Availability",
      "why": "\"Availability\" does not satisfy the requirements of this question. Correct answer is Option B (Authorization)."
    }
  },
  "netsec-1-45": {
    "correctOption": "B",
    "memoryPill": "Proving identity = Authentication",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Authentication",
      "why": "Authentication is the process of validating claimed identity through credentials like passwords, biometrics, or security tokens."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    }
  },
  "netsec-1-46": {
    "correctOption": "B",
    "memoryPill": "Preventing tampering = Integrity",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Confidentiality",
      "why": "\"Confidentiality\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Integrity",
      "why": "Integrity ensures data remains authentic, accurate, and protected against unauthorized tampering, modification, or deletion."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Availability",
      "why": "\"Availability\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    }
  },
  "netsec-1-47": {
    "correctOption": "C",
    "memoryPill": "System downtime = Availability breach",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Confidentiality",
      "why": "\"Confidentiality\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Integrity",
      "why": "\"Integrity\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Availability",
      "why": "Availability guarantees that authorized users have uninterrupted access to critical systems, applications, and data."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    }
  },
  "netsec-1-48": {
    "correctOption": "B",
    "memoryPill": "Single shared key = Symmetric",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Asymmetric",
      "why": "\"Asymmetric\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Symmetric",
      "why": "Symmetric cryptography relies on a single shared secret key for both encryption and decryption operations."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Hashing",
      "why": "\"Hashing\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Digital signature",
      "why": "\"Digital signature\" does not satisfy the requirements of this question. Correct answer is Option B (Symmetric)."
    }
  },
  "netsec-1-49": {
    "correctOption": "C",
    "memoryPill": "RC4 is the stream cipher",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DES",
      "why": "\"DES\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RC4",
      "why": "RC4 is a classic stream cipher; AES and DES are block ciphers, and RSA is an asymmetric block cipher."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RSA",
      "why": "\"RSA\" does not satisfy the requirements of this question. Correct answer is Option C (RC4)."
    }
  },
  "netsec-1-50": {
    "correctOption": "C",
    "memoryPill": "UTM combines Firewall, IPS, AV & Web Filtering",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IDS",
      "why": "\"IDS\" does not satisfy the requirements of this question. Correct answer is Option C (UTM)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "IPS only",
      "why": "\"IPS only\" does not satisfy the requirements of this question. Correct answer is Option C (UTM)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "UTM",
      "why": "Unified Threat Management (UTM) incorporates firewall, intrusion prevention (IPS), antivirus inspection, and web content filtering in a consolidated platform."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option C (UTM)."
    }
  },
  "netsec-2-01": {
    "correctOption": "B",
    "memoryPill": "Authentication = Identity proof (\"Who are you?\")",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Authentication",
      "why": "Verifying credentials against stored user identities answers the question \"Who are you?\", which is Authentication."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Access control",
      "why": "\"Access control\" does not satisfy the requirements of this question. Correct answer is Option B (Authentication)."
    }
  },
  "netsec-2-02": {
    "correctOption": "C",
    "memoryPill": "Permission check = Authorization",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option C (Authorization)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option C (Authorization)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Authorization",
      "why": "Authentication succeeded because login worked. The subsequent check for delete permissions failed at the authorization layer."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Identification",
      "why": "\"Identification\" does not satisfy the requirements of this question. Correct answer is Option C (Authorization)."
    }
  },
  "netsec-2-03": {
    "correctOption": "B",
    "memoryPill": "Password + OTP = MFA (Know + Have)",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Single-factor authentication",
      "why": "\"Single-factor authentication\" does not satisfy the requirements of this question. Correct answer is Option B (Multi-factor authentication)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Multi-factor authentication",
      "why": "Password (Something you know) + OTP on phone (Something you have) spans two distinct factor categories, creating valid Multi-Factor Authentication (MFA)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option B (Multi-factor authentication)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option B (Multi-factor authentication)."
    }
  },
  "netsec-2-04": {
    "correctOption": "C",
    "memoryPill": "Biometrics = Something you are",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Password",
      "why": "\"Password\" does not satisfy the requirements of this question. Correct answer is Option C (Fingerprint)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "PIN",
      "why": "\"PIN\" does not satisfy the requirements of this question. Correct answer is Option C (Fingerprint)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Fingerprint",
      "why": "Biometric attributes such as fingerprints, retinal patterns, and facial geometry belong to the \"Something you are\" inherence factor category."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Security token",
      "why": "\"Security token\" does not satisfy the requirements of this question. Correct answer is Option C (Fingerprint)."
    }
  },
  "netsec-2-05": {
    "correctOption": "C",
    "memoryPill": "Permissions by job role = RBAC",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC",
      "why": "\"DAC\" does not satisfy the requirements of this question. Correct answer is Option C (RBAC)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "MAC",
      "why": "\"MAC\" does not satisfy the requirements of this question. Correct answer is Option C (RBAC)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "RBAC",
      "why": "Role-Based Access Control (RBAC) assigns access privileges to specific organizational job roles rather than individual user accounts."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "ABAC",
      "why": "\"ABAC\" does not satisfy the requirements of this question. Correct answer is Option C (RBAC)."
    }
  },
  "netsec-2-06": {
    "correctOption": "B",
    "memoryPill": "Owner decides permissions = DAC",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "MAC",
      "why": "\"MAC\" does not satisfy the requirements of this question. Correct answer is Option B (DAC)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "DAC",
      "why": "Under Discretionary Access Control (DAC), the creator/owner of a file or resource has full discretion to grant or revoke access rights."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RBAC",
      "why": "\"RBAC\" does not satisfy the requirements of this question. Correct answer is Option B (DAC)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "ABAC",
      "why": "\"ABAC\" does not satisfy the requirements of this question. Correct answer is Option B (DAC)."
    }
  },
  "netsec-2-07": {
    "correctOption": "C",
    "memoryPill": "Security clearances / Military labels = MAC",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC",
      "why": "\"DAC\" does not satisfy the requirements of this question. Correct answer is Option C (MAC)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RBAC",
      "why": "\"RBAC\" does not satisfy the requirements of this question. Correct answer is Option C (MAC)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "MAC",
      "why": "Mandatory Access Control (MAC) enforces system-wide security labels and clearances set by administrators that users cannot alter."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "ABAC",
      "why": "\"ABAC\" does not satisfy the requirements of this question. Correct answer is Option C (MAC)."
    }
  },
  "netsec-2-08": {
    "correctOption": "D",
    "memoryPill": "Dynamic contextual attributes = ABAC",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC",
      "why": "\"DAC\" does not satisfy the requirements of this question. Correct answer is Option D (ABAC)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "MAC",
      "why": "\"MAC\" does not satisfy the requirements of this question. Correct answer is Option D (ABAC)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RBAC",
      "why": "\"RBAC\" does not satisfy the requirements of this question. Correct answer is Option D (ABAC)."
    },
    "D": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "ABAC",
      "why": "Attribute-Based Access Control (ABAC) evaluates dynamic attributes (user role, device posture, geographic location, time of day) using contextual policies."
    }
  },
  "netsec-2-09": {
    "correctOption": "A",
    "memoryPill": "Encrypted tunnel over Internet = VPN",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "VPN",
      "why": "A Virtual Private Network (VPN) builds an encrypted tunnel over public networks, enabling remote users to securely connect to private intranet resources."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option A (VPN)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "FTP",
      "why": "\"FTP\" does not satisfy the requirements of this question. Correct answer is Option A (VPN)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP",
      "why": "\"DHCP\" does not satisfy the requirements of this question. Correct answer is Option A (VPN)."
    }
  },
  "netsec-2-10": {
    "correctOption": "B",
    "memoryPill": "VPN = Secure encrypted path over untrusted network",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Increase Internet speed",
      "why": "\"Increase Internet speed\" does not satisfy the requirements of this question. Correct answer is Option B (Create a secure connection over an untrusted network)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Create a secure connection over an untrusted network",
      "why": "A VPN encapsulates and encrypts network traffic to ensure confidentiality and integrity across untrusted public pathways."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Assign IP addresses",
      "why": "\"Assign IP addresses\" does not satisfy the requirements of this question. Correct answer is Option B (Create a secure connection over an untrusted network)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Replace the firewall",
      "why": "\"Replace the firewall\" does not satisfy the requirements of this question. Correct answer is Option B (Create a secure connection over an untrusted network)."
    }
  },
  "netsec-2-11": {
    "correctOption": "B",
    "memoryPill": "HTTPS = HTTP + TLS (Port 443)",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "HTTP",
      "why": "\"HTTP\" does not satisfy the requirements of this question. Correct answer is Option B (HTTPS)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "HTTPS",
      "why": "HTTPS (HTTP over TLS) encrypts web traffic with symmetric ciphers and authenticates the web server with digital certificates."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "FTP",
      "why": "\"FTP\" does not satisfy the requirements of this question. Correct answer is Option B (HTTPS)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "SMTP",
      "why": "\"SMTP\" does not satisfy the requirements of this question. Correct answer is Option B (HTTPS)."
    }
  },
  "netsec-2-12": {
    "correctOption": "D",
    "memoryPill": "HTTPS Port = 443",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "21",
      "why": "\"21\" does not satisfy the requirements of this question. Correct answer is Option D (443)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "25",
      "why": "\"25\" does not satisfy the requirements of this question. Correct answer is Option D (443)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "80",
      "why": "\"80\" does not satisfy the requirements of this question. Correct answer is Option D (443)."
    },
    "D": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "443",
      "why": "The standard IANA port assignment for HTTPS traffic over TCP is 443. (Port 80 is unencrypted HTTP)."
    }
  },
  "netsec-2-13": {
    "correctOption": "C",
    "memoryPill": "TLS replaced deprecated SSL",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "TLS is the older protocol replaced by SSL",
      "why": "\"TLS is the older protocol replaced by SSL\" does not satisfy the requirements of this question. Correct answer is Option C (TLS is the modern successor to SSL)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "SSL replaced TLS",
      "why": "\"SSL replaced TLS\" does not satisfy the requirements of this question. Correct answer is Option C (TLS is the modern successor to SSL)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "TLS is the modern successor to SSL",
      "why": "Transport Layer Security (TLS) was standardized by the IETF as the modern, secure replacement for deprecated SSL protocols."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "TLS is an encryption algorithm like AES",
      "why": "\"TLS is an encryption algorithm like AES\" does not satisfy the requirements of this question. Correct answer is Option C (TLS is the modern successor to SSL)."
    }
  },
  "netsec-2-14": {
    "correctOption": "A",
    "memoryPill": "HTTPS = HTTP + TLS",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "HTTPS is HTTP combined with TLS protection",
      "why": "HTTPS is standard application-layer HTTP transmitted through an encrypted, authenticated TLS transport tunnel."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "HTTPS is an encryption algorithm",
      "why": "\"HTTPS is an encryption algorithm\" does not satisfy the requirements of this question. Correct answer is Option A (HTTPS is HTTP combined with TLS protection)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "HTTPS is a firewall",
      "why": "\"HTTPS is a firewall\" does not satisfy the requirements of this question. Correct answer is Option A (HTTPS is HTTP combined with TLS protection)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "HTTPS is a hashing algorithm",
      "why": "\"HTTPS is a hashing algorithm\" does not satisfy the requirements of this question. Correct answer is Option A (HTTPS is HTTP combined with TLS protection)."
    }
  },
  "netsec-2-15": {
    "correctOption": "C",
    "memoryPill": "Preventing disclosure = Confidentiality",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Integrity",
      "why": "\"Integrity\" does not satisfy the requirements of this question. Correct answer is Option C (Confidentiality)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Availability",
      "why": "\"Availability\" does not satisfy the requirements of this question. Correct answer is Option C (Confidentiality)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Confidentiality",
      "why": "Confidentiality safeguards information from being accessed, viewed, or read by unauthorized individuals."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option C (Confidentiality)."
    }
  },
  "netsec-2-16": {
    "correctOption": "B",
    "memoryPill": "Unauthorized data modification = Integrity breach",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Confidentiality",
      "why": "\"Confidentiality\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Integrity",
      "why": "Integrity is violated when data is improperly altered, fabricated, or tampered with without legitimate authorization."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Availability",
      "why": "\"Availability\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option B (Integrity)."
    }
  },
  "netsec-2-17": {
    "correctOption": "C",
    "memoryPill": "Denying service access = Availability breach",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Confidentiality",
      "why": "\"Confidentiality\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Integrity",
      "why": "\"Integrity\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Availability",
      "why": "Availability guarantees that authorized users have access to services when needed. A flood attack directly disables availability."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option C (Availability)."
    }
  },
  "netsec-2-18": {
    "correctOption": "A",
    "memoryPill": "Encryption protects Confidentiality",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Confidentiality",
      "why": "Encryption preserves confidentiality by rendering stored or transmitted information indecipherable to anyone without the key."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Integrity",
      "why": "\"Integrity\" does not satisfy the requirements of this question. Correct answer is Option A (Confidentiality)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Availability",
      "why": "\"Availability\" does not satisfy the requirements of this question. Correct answer is Option A (Confidentiality)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization",
      "why": "\"Authorization\" does not satisfy the requirements of this question. Correct answer is Option A (Confidentiality)."
    }
  },
  "netsec-2-19": {
    "correctOption": "A",
    "memoryPill": "Permit/Deny packet rules = ACL",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "ACL",
      "why": "An Access Control List (ACL) is an ordered list of permit or deny statements that filter packets traversing a router or firewall."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option A (ACL)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option A (ACL)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option A (ACL)."
    }
  },
  "netsec-2-20": {
    "correctOption": "A",
    "memoryPill": "Source IP only = Standard ACL",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Standard ACL",
      "why": "Standard ACLs filter network traffic exclusively by examining the packet source IPv4 address."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Extended ACL",
      "why": "\"Extended ACL\" does not satisfy the requirements of this question. Correct answer is Option A (Standard ACL)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Dynamic NAT",
      "why": "\"Dynamic NAT\" does not satisfy the requirements of this question. Correct answer is Option A (Standard ACL)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "MAC",
      "why": "\"MAC\" does not satisfy the requirements of this question. Correct answer is Option A (Standard ACL)."
    }
  },
  "netsec-2-21": {
    "correctOption": "B",
    "memoryPill": "Source + Destination + Port = Extended ACL",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Standard ACL",
      "why": "\"Standard ACL\" does not satisfy the requirements of this question. Correct answer is Option B (Extended ACL)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Extended ACL",
      "why": "Extended ACLs evaluate source IP, destination IP, transport protocol (TCP), and port number (443), making fine-grained rules possible."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC",
      "why": "\"DAC\" does not satisfy the requirements of this question. Correct answer is Option B (Extended ACL)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "RBAC",
      "why": "\"RBAC\" does not satisfy the requirements of this question. Correct answer is Option B (Extended ACL)."
    }
  },
  "netsec-2-22": {
    "correctOption": "B",
    "memoryPill": "Mass email flood = Email Bombing",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (Email bombing)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Email bombing",
      "why": "Email Bombing floods an inbox with massive email volume to exhaust mailbox quotas, obscure fraud alerts, or crash mail servers."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (Email bombing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Buffer overflow",
      "why": "\"Buffer overflow\" does not satisfy the requirements of this question. Correct answer is Option B (Email bombing)."
    }
  },
  "netsec-2-23": {
    "correctOption": "B",
    "memoryPill": "Exceeding buffer bounds = Buffer Overflow",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option B (Buffer overflow)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Buffer overflow",
      "why": "A Buffer Overflow occurs when unvalidated input exceeds the memory allocated for a buffer, overwriting adjacent memory on the stack or heap."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS",
      "why": "\"DDoS\" does not satisfy the requirements of this question. Correct answer is Option B (Buffer overflow)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (Buffer overflow)."
    }
  },
  "netsec-2-24": {
    "correctOption": "A",
    "memoryPill": "Memory overwriting to divert execution = Buffer Overflow",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Buffer overflow",
      "why": "Buffer overflow exploits overwrite return instruction pointers on the execution stack, allowing arbitrary code execution."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "SQL injection",
      "why": "\"SQL injection\" does not satisfy the requirements of this question. Correct answer is Option A (Buffer overflow)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option A (Buffer overflow)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Email bombing",
      "why": "\"Email bombing\" does not satisfy the requirements of this question. Correct answer is Option A (Buffer overflow)."
    }
  },
  "netsec-2-25": {
    "correctOption": "A",
    "memoryPill": "AuthN + RBAC + VPN + TLS + ACL",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Authentication + RBAC + VPN + HTTPS/TLS + ACL",
      "why": "Item 1 = Authentication, Item 2 = RBAC, Item 3 = VPN, Item 4 = HTTPS/TLS, Item 5 = ACL."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authorization + DAC + FTP + HTTP + DNS",
      "why": "\"Authorization + DAC + FTP + HTTP + DNS\" does not satisfy the requirements of this question. Correct answer is Option A (Authentication + RBAC + VPN + HTTPS/TLS + ACL)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication + MAC + SMTP + HTTP + DHCP",
      "why": "\"Authentication + MAC + SMTP + HTTP + DHCP\" does not satisfy the requirements of this question. Correct answer is Option A (Authentication + RBAC + VPN + HTTPS/TLS + ACL)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption + RBAC + DNS + FTP + NAT",
      "why": "\"Encryption + RBAC + DNS + FTP + NAT\" does not satisfy the requirements of this question. Correct answer is Option A (Authentication + RBAC + VPN + HTTPS/TLS + ACL)."
    }
  },
  "netsec-3-01": {
    "correctOption": "B",
    "memoryPill": "Never trust, always verify = Zero Trust",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Perimeter Security",
      "why": "\"Perimeter Security\" does not satisfy the requirements of this question. Correct answer is Option B (Zero Trust)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Zero Trust",
      "why": "Zero Trust removes implicit trust from inside the perimeter, requiring identity, device health, and least-privilege verification on every transaction."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC",
      "why": "\"DAC\" does not satisfy the requirements of this question. Correct answer is Option B (Zero Trust)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Open Access",
      "why": "\"Open Access\" does not satisfy the requirements of this question. Correct answer is Option B (Zero Trust)."
    }
  },
  "netsec-3-02": {
    "correctOption": "B",
    "memoryPill": "Zero Trust = Never trust, always verify",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trust all internal users",
      "why": "\"Trust all internal users\" does not satisfy the requirements of this question. Correct answer is Option B (Never trust, always verify)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Never trust, always verify",
      "why": "The foundational tenet of Zero Trust architecture is \"Never trust, always verify\", assuming breach and validating every single request."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Trust devices inside the firewall",
      "why": "\"Trust devices inside the firewall\" does not satisfy the requirements of this question. Correct answer is Option B (Never trust, always verify)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Allow unrestricted internal access",
      "why": "\"Allow unrestricted internal access\" does not satisfy the requirements of this question. Correct answer is Option B (Never trust, always verify)."
    }
  },
  "netsec-3-03": {
    "correctOption": "B",
    "memoryPill": "Decoy / Trap server = Honeypot",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Firewall",
      "why": "\"Firewall\" does not satisfy the requirements of this question. Correct answer is Option B (Honeypot)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Honeypot",
      "why": "A Honeypot is an intentional decoy server designed to attract, detect, log, and analyze attacker behavior without exposing production assets."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option B (Honeypot)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Proxy",
      "why": "\"Proxy\" does not satisfy the requirements of this question. Correct answer is Option B (Honeypot)."
    }
  },
  "netsec-3-04": {
    "correctOption": "C",
    "memoryPill": "Honeypot = Decoy to study and detect attackers",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Increase network bandwidth",
      "why": "\"Increase network bandwidth\" does not satisfy the requirements of this question. Correct answer is Option C (Attract and detect/study attackers)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encrypt all network traffic",
      "why": "\"Encrypt all network traffic\" does not satisfy the requirements of this question. Correct answer is Option C (Attract and detect/study attackers)."
    },
    "C": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Attract and detect/study attackers",
      "why": "Honeypots entice cyber adversaries into interacting with a monitored decoy to glean intelligence on tools, techniques, and exploits."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Assign IP addresses",
      "why": "\"Assign IP addresses\" does not satisfy the requirements of this question. Correct answer is Option C (Attract and detect/study attackers)."
    }
  },
  "netsec-3-05": {
    "correctOption": "A",
    "memoryPill": "Centralized log analysis = SIEM",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "SIEM",
      "why": "SIEM (Security Information and Event Management) aggregates, correlates, and analyzes real-time log data from disparate network components."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option A (SIEM)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES",
      "why": "\"AES\" does not satisfy the requirements of this question. Correct answer is Option A (SIEM)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP",
      "why": "\"DHCP\" does not satisfy the requirements of this question. Correct answer is Option A (SIEM)."
    }
  },
  "netsec-3-06": {
    "correctOption": "A",
    "memoryPill": "Detecting brute-force in logs = Security Monitoring",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Security monitoring",
      "why": "Security monitoring involves continuous automated surveillance of authentication logs to detect brute-force attempts and anomalies."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Data encryption",
      "why": "\"Data encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Security monitoring)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Compression",
      "why": "\"Compression\" does not satisfy the requirements of this question. Correct answer is Option A (Security monitoring)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "NAT",
      "why": "\"NAT\" does not satisfy the requirements of this question. Correct answer is Option A (Security monitoring)."
    }
  },
  "netsec-3-07": {
    "correctOption": "A",
    "memoryPill": "Malware detection & removal = Antivirus",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Antivirus/anti-malware",
      "why": "Antivirus/anti-malware scans downloaded files against virus signature definitions and heuristics to identify and neutralize threats before execution."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN",
      "why": "\"VPN\" does not satisfy the requirements of this question. Correct answer is Option A (Antivirus/anti-malware)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "ACL",
      "why": "\"ACL\" does not satisfy the requirements of this question. Correct answer is Option A (Antivirus/anti-malware)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS",
      "why": "\"DNS\" does not satisfy the requirements of this question. Correct answer is Option A (Antivirus/anti-malware)."
    }
  },
  "netsec-3-08": {
    "correctOption": "B",
    "memoryPill": "Isolating infected files = Quarantine",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option B (Quarantine)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Quarantine",
      "why": "Quarantine isolates an infected file in a secured directory, preventing it from executing or infecting other system processes."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option B (Quarantine)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option B (Quarantine)."
    }
  },
  "netsec-3-09": {
    "correctOption": "B",
    "memoryPill": "Application-aware + integrated IPS = NGFW",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Basic hub",
      "why": "\"Basic hub\" does not satisfy the requirements of this question. Correct answer is Option B (NGFW)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "NGFW",
      "why": "Next-Generation Firewalls (NGFW) combine traditional Layer 4 stateful filtering with Layer 7 Deep Packet Inspection, integrated IPS, and SSL decryption."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP server",
      "why": "\"DHCP server\" does not satisfy the requirements of this question. Correct answer is Option B (NGFW)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS server",
      "why": "\"DNS server\" does not satisfy the requirements of this question. Correct answer is Option B (NGFW)."
    }
  },
  "netsec-3-10": {
    "correctOption": "A",
    "memoryPill": "Intermediary forwarding on behalf of client = Proxy",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Proxy",
      "why": "A Proxy acts as an intermediary, terminating the client session and originating a new separate session to the destination server."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Router only",
      "why": "\"Router only\" does not satisfy the requirements of this question. Correct answer is Option A (Proxy)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DNS resolver",
      "why": "\"DNS resolver\" does not satisfy the requirements of this question. Correct answer is Option A (Proxy)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DHCP server",
      "why": "\"DHCP server\" does not satisfy the requirements of this question. Correct answer is Option A (Proxy)."
    }
  },
  "netsec-3-11": {
    "correctOption": "B",
    "memoryPill": "Flaw / weakness = Vulnerability",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Threat",
      "why": "\"Threat\" does not satisfy the requirements of this question. Correct answer is Option B (Vulnerability)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Vulnerability",
      "why": "A vulnerability is a weakness, software defect, or configuration flaw in an information system that could be leveraged by a threat actor."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Risk",
      "why": "\"Risk\" does not satisfy the requirements of this question. Correct answer is Option B (Vulnerability)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Incident response",
      "why": "\"Incident response\" does not satisfy the requirements of this question. Correct answer is Option B (Vulnerability)."
    }
  },
  "netsec-3-12": {
    "correctOption": "B",
    "memoryPill": "Attacker / source of harm = Threat",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Vulnerability",
      "why": "\"Vulnerability\" does not satisfy the requirements of this question. Correct answer is Option B (Threat)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Threat",
      "why": "A threat is any external or internal entity, circumstance, or event with the potential to cause damage or compromise assets."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Patch",
      "why": "\"Patch\" does not satisfy the requirements of this question. Correct answer is Option B (Threat)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Firewall",
      "why": "\"Firewall\" does not satisfy the requirements of this question. Correct answer is Option B (Threat)."
    }
  },
  "netsec-3-13": {
    "correctOption": "A",
    "memoryPill": "Threat × Vulnerability = Risk",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Risk",
      "why": "Risk is the product or likelihood of a threat actor successfully exploiting a system vulnerability multiplied by the resulting business impact."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Risk)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option A (Risk)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Vulnerability only",
      "why": "\"Vulnerability only\" does not satisfy the requirements of this question. Correct answer is Option A (Risk)."
    }
  },
  "netsec-3-14": {
    "correctOption": "B",
    "memoryPill": "Flaw = Vulnerability | Attacker = Threat",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Server flaw = Threat; attacker = Vulnerability",
      "why": "\"Server flaw = Threat; attacker = Vulnerability\" does not satisfy the requirements of this question. Correct answer is Option B (Server flaw = Vulnerability; attacker = Threat)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Server flaw = Vulnerability; attacker = Threat",
      "why": "The unpatched software bug is the Vulnerability (weakness), and the malicious hacker is the Threat (potential harm)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Server flaw = Risk; attacker = Patch",
      "why": "\"Server flaw = Risk; attacker = Patch\" does not satisfy the requirements of this question. Correct answer is Option B (Server flaw = Vulnerability; attacker = Threat)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Server flaw = Threat; attacker = Risk",
      "why": "\"Server flaw = Threat; attacker = Risk\" does not satisfy the requirements of this question. Correct answer is Option B (Server flaw = Vulnerability; attacker = Threat)."
    }
  },
  "netsec-3-15": {
    "correctOption": "A",
    "memoryPill": "Installing security updates = Patch Management",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Patch management",
      "why": "Patch management is the disciplined operational cycle of acquiring, testing, deploying, and verifying software updates to remediate vulnerabilities."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing",
      "why": "\"Phishing\" does not satisfy the requirements of this question. Correct answer is Option A (Patch management)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Spoofing",
      "why": "\"Spoofing\" does not satisfy the requirements of this question. Correct answer is Option A (Patch management)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Data mining",
      "why": "\"Data mining\" does not satisfy the requirements of this question. Correct answer is Option A (Patch management)."
    }
  },
  "netsec-3-16": {
    "correctOption": "B",
    "memoryPill": "Minimum required permissions = Least Privilege",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Zero Trust only",
      "why": "\"Zero Trust only\" does not satisfy the requirements of this question. Correct answer is Option B (Least privilege)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Least privilege",
      "why": "The Principle of Least Privilege states that subjects should only be granted the minimum access rights strictly necessary to fulfill assigned tasks."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Open access",
      "why": "\"Open access\" does not satisfy the requirements of this question. Correct answer is Option B (Least privilege)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Data redundancy",
      "why": "\"Data redundancy\" does not satisfy the requirements of this question. Correct answer is Option B (Least privilege)."
    }
  },
  "netsec-3-17": {
    "correctOption": "B",
    "memoryPill": "Least privilege minimizes blast radius",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It gives every user maximum access",
      "why": "\"It gives every user maximum access\" does not satisfy the requirements of this question. Correct answer is Option B (It reduces potential damage if an account or application is compromised)."
    },
    "B": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "It reduces potential damage if an account or application is compromised",
      "why": "Limiting permissions reduces the blast radius; an attacker compromising a low-privilege account cannot alter core databases or seize domain control."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It eliminates the need for authentication",
      "why": "\"It eliminates the need for authentication\" does not satisfy the requirements of this question. Correct answer is Option B (It reduces potential damage if an account or application is compromised)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It makes all systems publicly accessible",
      "why": "\"It makes all systems publicly accessible\" does not satisfy the requirements of this question. Correct answer is Option B (It reduces potential damage if an account or application is compromised)."
    }
  },
  "netsec-3-18": {
    "correctOption": "A",
    "memoryPill": "Multiple defensive layers = Defense in Depth",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "It uses multiple layers of security",
      "why": "Defense in Depth layers defensive mechanisms so that if an adversary penetrates one control (e.g. firewall), subsequent layers (e.g. MFA, encryption) prevent compromise."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It uses only one strong firewall",
      "why": "\"It uses only one strong firewall\" does not satisfy the requirements of this question. Correct answer is Option A (It uses multiple layers of security)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It removes authentication",
      "why": "\"It removes authentication\" does not satisfy the requirements of this question. Correct answer is Option A (It uses multiple layers of security)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "It eliminates network monitoring",
      "why": "\"It eliminates network monitoring\" does not satisfy the requirements of this question. Correct answer is Option A (It uses multiple layers of security)."
    }
  },
  "netsec-3-19": {
    "correctOption": "A",
    "memoryPill": "Chronological event records = Logs",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Logs",
      "why": "System logs are chronological, time-stamped records capturing operations, connection states, and events across IT systems."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption keys",
      "why": "\"Encryption keys\" does not satisfy the requirements of this question. Correct answer is Option A (Logs)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "ACLs",
      "why": "\"ACLs\" does not satisfy the requirements of this question. Correct answer is Option A (Logs)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Certificates",
      "why": "\"Certificates\" does not satisfy the requirements of this question. Correct answer is Option A (Logs)."
    }
  },
  "netsec-3-20": {
    "correctOption": "A",
    "memoryPill": "Evaluating compliance against policies = Security Auditing",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Security auditing",
      "why": "Security auditing evaluates systems, configurations, and user logs against established governance benchmarks and compliance rules."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Encryption",
      "why": "\"Encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Security auditing)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Packet routing",
      "why": "\"Packet routing\" does not satisfy the requirements of this question. Correct answer is Option A (Security auditing)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Compression",
      "why": "\"Compression\" does not satisfy the requirements of this question. Correct answer is Option A (Security auditing)."
    }
  },
  "netsec-3-21": {
    "correctOption": "A",
    "memoryPill": "Exfiltration of sensitive data = Data Breach",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Data breach",
      "why": "A Data Breach occurs when confidential, sensitive, or legally protected information is accessed, copied, or exfiltrated by an unauthorized party."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Patch management",
      "why": "\"Patch management\" does not satisfy the requirements of this question. Correct answer is Option A (Data breach)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Authentication",
      "why": "\"Authentication\" does not satisfy the requirements of this question. Correct answer is Option A (Data breach)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Honeypot",
      "why": "\"Honeypot\" does not satisfy the requirements of this question. Correct answer is Option A (Data breach)."
    }
  },
  "netsec-3-22": {
    "correctOption": "D",
    "memoryPill": "All of the above can trigger a data breach",
    "A": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Exploiting an unpatched vulnerability",
      "why": "\"Exploiting an unpatched vulnerability\" does not satisfy the requirements of this question. Correct answer is Option D (All of the above)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Phishing an employee",
      "why": "\"Phishing an employee\" does not satisfy the requirements of this question. Correct answer is Option D (All of the above)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Malware infection",
      "why": "\"Malware infection\" does not satisfy the requirements of this question. Correct answer is Option D (All of the above)."
    },
    "D": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "All of the above",
      "why": "Data breaches stem from myriad attack vectors including software vulnerabilities, social engineering, malicious software, and misconfigured storage buckets."
    }
  },
  "netsec-3-23": {
    "correctOption": "A",
    "memoryPill": "Zero Trust + Least Privilege + Monitoring",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Zero Trust + Least Privilege + Security Monitoring",
      "why": "Verify identity = Zero Trust; Minimum necessary permissions = Least Privilege; Continuous monitoring = Security Monitoring."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "Open Access + Anonymous Access",
      "why": "\"Open Access + Anonymous Access\" does not satisfy the requirements of this question. Correct answer is Option A (Zero Trust + Least Privilege + Security Monitoring)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DAC + Email Bombing",
      "why": "\"DAC + Email Bombing\" does not satisfy the requirements of this question. Correct answer is Option A (Zero Trust + Least Privilege + Security Monitoring)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DDoS + Encryption",
      "why": "\"DDoS + Encryption\" does not satisfy the requirements of this question. Correct answer is Option A (Zero Trust + Least Privilege + Security Monitoring)."
    }
  },
  "netsec-3-24": {
    "correctOption": "A",
    "memoryPill": "Flaw = Vulnerability | Attacker = Threat",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "The software flaw is a vulnerability, while the potential attacker is a threat",
      "why": "The internal flaw is the Vulnerability (weakness); the external attacker is the Threat (potential harm)."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "The software flaw is a threat, while the attacker is a vulnerability",
      "why": "\"The software flaw is a threat, while the attacker is a vulnerability\" does not satisfy the requirements of this question. Correct answer is Option A (The software flaw is a vulnerability, while the potential attacker is a threat)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "The software flaw is a data breach",
      "why": "\"The software flaw is a data breach\" does not satisfy the requirements of this question. Correct answer is Option A (The software flaw is a vulnerability, while the potential attacker is a threat)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "The attacker is a patch",
      "why": "\"The attacker is a patch\" does not satisfy the requirements of this question. Correct answer is Option A (The software flaw is a vulnerability, while the potential attacker is a threat)."
    }
  },
  "netsec-3-25": {
    "correctOption": "A",
    "memoryPill": "Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Mgmt",
    "A": {
      "isCorrect": true,
      "status": "Correct Answer",
      "text": "Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Management",
      "why": "Decoy = Honeypot; Centralized logs = SIEM; Minimum permissions = Least Privilege; Multiple layers = Defense in Depth; Security updates = Patch Management."
    },
    "B": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "VPN + DNS + DHCP + NAT + FTP",
      "why": "\"VPN + DNS + DHCP + NAT + FTP\" does not satisfy the requirements of this question. Correct answer is Option A (Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Management)."
    },
    "C": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "AES + RSA + DES + RC4 + RC5",
      "why": "\"AES + RSA + DES + RC4 + RC5\" does not satisfy the requirements of this question. Correct answer is Option A (Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Management)."
    },
    "D": {
      "isCorrect": false,
      "status": "Incorrect Option",
      "text": "DoS + DDoS + Phishing + Spoofing + Ransomware",
      "why": "\"DoS + DDoS + Phishing + Spoofing + Ransomware\" does not satisfy the requirements of this question. Correct answer is Option A (Honeypot + SIEM + Least Privilege + Defense in Depth + Patch Management)."
    }
  }
};

export const networkSecurityStudyGuides = [
  {
    "tier": 1,
    "title": "Tier 1: Cryptography, Ciphers (AES/DES/RC4), Malware & Network Defenses",
    "sections": [
      {
        "heading": "AES vs DES vs RC4 vs RC5 Comparison",
        "content": "**AES (Advanced Encryption Standard):** NIST standard symmetric block cipher. Key sizes: 128, 192, 256 bits. **Block size is always fixed at 128 bits** regardless of key size! Rounds: 10 (AES-128), 12 (AES-192), 14 (AES-256).\n\n**DES (Data Encryption Standard):** 64-bit block cipher with 16 Feistel rounds. Total key length is 64 bits, but 8 bits are discarded for parity, leaving only **56 bits effective key size** (insecure against modern brute force).\n\n**RC4 vs RC5:** RC4 is a **Stream Cipher** (processes bytes continuously). RC5 is a **Symmetric Block Cipher** with parameterized word/block sizes.",
        "table": {
          "headers": [
            "Cipher",
            "Type",
            "Block Size",
            "Key Size",
            "Rounds / Architecture"
          ],
          "rows": [
            [
              "AES",
              "Symmetric Block",
              "128 bits (fixed)",
              "128, 192, 256 bits",
              "10, 12, 14 rounds (SPN)"
            ],
            [
              "DES",
              "Symmetric Block",
              "64 bits",
              "56 bits effective (64 total)",
              "16 rounds (Feistel network)"
            ],
            [
              "RC4",
              "Symmetric Stream",
              "Continuous stream",
              "40 to 2048 bits",
              "PRGA / Keystream byte XOR"
            ],
            [
              "RC5",
              "Symmetric Block",
              "32, 64, or 128 bits",
              "0 to 2040 bits",
              "0 to 255 rounds (Data rotations)"
            ]
          ]
        },
        "memoryBox": "AES = 128-bit block | DES = 56-bit key | RC4 = Stream cipher"
      },
      {
        "heading": "Symmetric vs Asymmetric Cryptography",
        "content": "**Symmetric (Single Secret Key):** Fast (100x-1000x faster), ideal for bulk data (AES, DES, 3DES, RC4). Faces the Key Distribution Problem.\n\n**Asymmetric (Public-Private Key Pair):** Slower, heavy mathematical operations (RSA, ECC, Diffie-Hellman). Solves key distribution: Public key encrypts, Private key decrypts. Signatures: Private key signs, Public key verifies.",
        "table": {
          "headers": [
            "Feature",
            "Symmetric Encryption",
            "Asymmetric Encryption"
          ],
          "rows": [
            [
              "Keys Used",
              "1 shared secret key",
              "2 mathematically linked keys (Public + Private)"
            ],
            [
              "Speed",
              "Extremely fast (Hardware accelerated)",
              "Slow (Heavy modular exponentiation)"
            ],
            [
              "Best For",
              "Bulk data, disk encryption, VPN payloads",
              "Key exchange, digital signatures, certificates"
            ],
            [
              "Algorithms",
              "AES, DES, RC4, ChaCha20",
              "RSA, ECC, Diffie-Hellman, DSA"
            ]
          ]
        },
        "memoryBox": "Symmetric = Fast / 1 key | Asymmetric = Slow / Key pair"
      },
      {
        "heading": "Malware Taxonomy & Attack Vectors",
        "table": {
          "headers": [
            "Malware Type",
            "Key Defining Trait",
            "Replication Behavior",
            "Primary Impact"
          ],
          "rows": [
            [
              "Ransomware",
              "Encrypts user files & demands payment",
              "Dropped by trojans / phishing",
              "Extortion & data loss"
            ],
            [
              "Trojan Horse",
              "Disguised as legitimate, useful software",
              "Does NOT self-replicate",
              "Installs backdoors & keyloggers"
            ],
            [
              "Worm",
              "Propagates across networks standalone",
              "Self-replicates automatically",
              "Consumes bandwidth & infects nodes"
            ],
            [
              "Virus",
              "Attaches to executable host files",
              "Replicates when host program runs",
              "Corrupts files & boot records"
            ],
            [
              "Spyware",
              "Covert background monitoring",
              "Non-replicating background service",
              "Harvests keystrokes, passwords, credit cards"
            ]
          ]
        },
        "memoryBox": "Trojan = Disguised | Worm = Self-replicating | Ransomware = Extortion"
      },
      {
        "heading": "IDS vs IPS vs UTM",
        "content": "**IDS (Intrusion Detection System):** Passive, out-of-band monitoring. Inspects traffic mirrors, generates log alerts, does NOT drop packets.\n\n**IPS (Intrusion Prevention System):** Active, in-line. Sits directly in traffic flow, inspects deep packets, and actively drops attacks and resets TCP sessions.\n\n**UTM (Unified Threat Management):** All-in-one appliance combining Firewall + IPS + Antivirus + Web Filtering + VPN.",
        "memoryBox": "IDS = Detect & Alert | IPS = Detect & Block | UTM = All-in-one"
      }
    ]
  },
  {
    "tier": 2,
    "title": "Tier 2: Authentication vs Authorization, MFA, Access Control & VPNs",
    "sections": [
      {
        "heading": "Authentication vs Authorization (AuthN vs AuthZ)",
        "content": "**Authentication (AuthN):** \"Who are you?\" Proving identity using credentials (usernames, passwords, OTPs, biometrics). Happens first.\n\n**Authorization (AuthZ):** \"What can you access/do?\" Verifying permissions, roles, and privileges (RBAC, ACLs). Happens after authentication.",
        "table": {
          "headers": [
            "Feature",
            "Authentication (AuthN)",
            "Authorization (AuthZ)"
          ],
          "rows": [
            [
              "Core Question",
              "Who are you?",
              "What are you allowed to do?"
            ],
            [
              "Step",
              "Step 1 (First)",
              "Step 2 (After identity verified)"
            ],
            [
              "Mechanism",
              "Passwords, OTPs, Biometrics",
              "Roles, Permissions, Policies, Tokens"
            ],
            [
              "Failure Message",
              "Invalid username or password",
              "Access Denied: You lack permissions"
            ]
          ]
        },
        "memoryBox": "AuthN = Identity proof | AuthZ = Permission check"
      },
      {
        "heading": "Access Control Models (DAC, MAC, RBAC, ABAC)",
        "table": {
          "headers": [
            "Model",
            "Full Name",
            "Decision Basis",
            "Typical Environment"
          ],
          "rows": [
            [
              "DAC",
              "Discretionary Access Control",
              "Owner of the resource decides permissions",
              "Operating system file sharing (Windows/Linux)"
            ],
            [
              "MAC",
              "Mandatory Access Control",
              "Central system labels & security clearances",
              "Military & government classifications (Top Secret)"
            ],
            [
              "RBAC",
              "Role-Based Access Control",
              "Organizational job roles (Manager, Employee)",
              "Corporate enterprise software & portals"
            ],
            [
              "ABAC",
              "Attribute-Based Access Control",
              "Dynamic contextual attributes (User+Device+Time+IP)",
              "Modern cloud, zero-trust & adaptive platforms"
            ]
          ]
        },
        "memoryBox": "DAC: Owner | MAC: Clearance | RBAC: Job Role | ABAC: Attributes"
      },
      {
        "heading": "Standard vs Extended Access Control Lists (ACL)",
        "content": "**Standard ACL:** Filters traffic based almost exclusively on **Source IP address**. Evaluated closest to the destination.\n\n**Extended ACL:** Filters traffic based on **Source IP, Destination IP, Protocol (TCP/UDP), and Port number (e.g., 443 for HTTPS)**. Evaluated closest to the source.",
        "memoryBox": "Standard ACL = Source IP only | Extended ACL = Source + Dest + Port"
      },
      {
        "heading": "Buffer Overflow Vulnerability",
        "content": "Occurs when input data exceeds the allocated buffer bounds in memory, corrupting adjacent stack frames or overwriting return instruction pointers to execute arbitrary shellcode.",
        "memoryBox": "Exceeding buffer bounds = Buffer Overflow"
      }
    ]
  },
  {
    "tier": 3,
    "title": "Tier 3: Zero Trust, Firewalls, SIEM, Risk Management & Operations",
    "sections": [
      {
        "heading": "Zero Trust Architecture Principles",
        "content": "**Core Philosophy:** \"Never trust, always verify.\" Eliminates implicit trust based on network perimeter location.\n\n**Three Core Pillars:**\n1. **Verify explicitly:** Always authenticate identity, device health, location, and risk.\n2. **Least privilege access:** Restrict access with Just-In-Time (JIT) and Just-Enough-Access (JEA).\n3. **Assume breach:** Minimize blast radius, segment networks, verify end-to-end encryption, and monitor continuously.",
        "memoryBox": "Zero Trust = Never trust, always verify"
      },
      {
        "heading": "Honeypots, SIEM & Security Monitoring",
        "content": "**Honeypot:** A monitored decoy system deployed to attract, mislead, and study attackers without exposing production assets.\n\n**SIEM (Security Information & Event Management):** Centrally aggregates, normalizes, and correlates logs from firewalls, servers, and endpoint agents to detect attacks.\n\n**Security Monitoring:** Continuous automated surveillance of access patterns (e.g. flagging 500 failed logins in 5 minutes as a brute-force attack).",
        "memoryBox": "Honeypot = Decoy | SIEM = Centralized Log Correlation"
      },
      {
        "heading": "Vulnerability vs Threat vs Risk",
        "content": "**Vulnerability:** A weakness or flaw in an application, OS, or configuration (e.g., unpatched software bug).\n\n**Threat:** An external danger or actor capable of exploiting a weakness (e.g., malicious hacker, malware).\n\n**Risk:** The potential loss or business impact when a threat exploits a vulnerability (Threat × Vulnerability = Risk).",
        "memoryBox": "Weakness = Vulnerability | Danger = Threat | Impact = Risk"
      },
      {
        "heading": "Defense in Depth & Least Privilege",
        "content": "**Defense in Depth:** Multi-layered security (Firewall → IDS/IPS → MFA → RBAC → Antivirus → Encryption) so single-point failure does not compromise assets.\n\n**Least Privilege:** Granting users only the bare minimum permissions necessary to complete their job, drastically limiting damage from compromised accounts.",
        "memoryBox": "Multiple layers = Defense in Depth | Minimum rights = Least Privilege"
      }
    ]
  }
];

export const getNetworkSecurityOptionBreakdown = (questionId) => {
  return networkSecurityOptionExplanationsMap[questionId] || null;
};

export const filterNetworkSecurityQuestions = ({ tier = 'all', topic = 'all' } = {}) => {
  return networkSecurityQuestions.filter((q) => {
    const matchesTier =
      tier === 'all' ||
      String(q.tier) === String(tier) ||
      (typeof tier === 'string' && q.tierName?.toLowerCase().includes(tier.toLowerCase()));
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  });
};

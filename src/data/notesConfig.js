// src/data/notesConfig.js
// Configuration for PDF Notes organized by subfolder.
// Verified files mapped to /public/notes/

export const notesFolders = [
  {
    id: 'computer-network',
    name: 'Computer Network',
    shortName: 'CN',
    description: 'OSI Model, TCP/IP Suite, Protocols (HTTP/HTTPS, DNS, TCP, UDP), Subnetting & Network Architecture.',
    icon: 'Network',
    color: '#818cf8', // indigo-400
    badgeColor: 'rgba(129, 140, 248, 0.15)',
    folderPath: '/notes/computer-network/',
    items: [
      {
        id: 'cn-tier-1',
        title: 'Computer Networking — Tier 1 Study Notes',
        fileName: 'Computer Networking_Tier1.pdf',
        filePath: '/notes/computer-network/Computer%20Networking_Tier1.pdf',
        description: 'Core networking foundations: OSI 7-Layer model, TCP/IP architecture, IP addressing, and fundamental protocol roles.',
        category: 'Computer Network',
        tags: ['Tier 1', 'OSI Model', 'TCP/IP', 'Foundations'],
        size: '164 KB',
        isUploaded: true
      },
      {
        id: 'cn-tier-2',
        title: 'Computer Networking — Tier 2 Study Notes',
        fileName: 'Computer  Networking_Tier2.pdf',
        filePath: '/notes/computer-network/Computer%20%20Networking_Tier2.pdf',
        description: 'Intermediate protocols, CIDR subnetting calculations, TCP 3-way handshake mechanics, flow control, and routing fundamentals.',
        category: 'Computer Network',
        tags: ['Tier 2', 'Subnetting', 'TCP Handshake', 'Routing'],
        size: '135 KB',
        isUploaded: true
      },
      {
        id: 'cn-tier-3',
        title: 'Computer Networking — Tier 3 Advanced Notes',
        fileName: 'Computer  Networking_Tier3.pdf',
        filePath: '/notes/computer-network/Computer%20%20Networking_Tier3.pdf',
        description: 'Advanced networking: DNS resolution lifecycle, HTTP/HTTPS headers, sockets, congestion avoidance, and exam-critical scenarios.',
        category: 'Computer Network',
        tags: ['Tier 3', 'DNS', 'HTTP/HTTPS', 'Congestion Control'],
        size: '157 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    description: 'Cloud Service Models (IaaS, PaaS, SaaS), Deployment Models, Virtualization, Containers & Cloud Architecture.',
    icon: 'Cloud',
    color: '#a855f7', // purple-500
    badgeColor: 'rgba(168, 85, 247, 0.15)',
    folderPath: '/notes/cloud/',
    items: [
      {
        id: 'cloud-tier-1',
        title: 'Cloud Computing — Tier 1 Essentials',
        fileName: 'Cloud_Computing_Tier1.pdf',
        filePath: '/notes/cloud/Cloud_Computing_Tier1.pdf',
        description: 'Cloud definitions, key benefits, IaaS vs PaaS vs SaaS, Public/Private/Hybrid models, and hypervisor virtualization basics.',
        category: 'Cloud Computing',
        tags: ['Tier 1', 'IaaS', 'PaaS', 'SaaS', 'Virtualization'],
        size: '149 KB',
        isUploaded: true
      },
      {
        id: 'cloud-tier-2',
        title: 'Cloud Computing — Tier 2 Architecture & Services',
        fileName: 'Cloud_Computing_Tier2.pdf',
        filePath: '/notes/cloud/Cloud_Computing_Tier2.pdf',
        description: 'Core cloud primitives: compute instances, object vs block storage, VPC networking, load balancers, and scalability.',
        category: 'Cloud Computing',
        tags: ['Tier 2', 'Architecture', 'Storage', 'Load Balancers'],
        size: '145 KB',
        isUploaded: true
      },
      {
        id: 'cloud-tier-3',
        title: 'Cloud Computing — Tier 3 Advanced Patterns',
        fileName: 'Cloud_Computing_tier3.pdf',
        filePath: '/notes/cloud/Cloud_Computing_tier3.pdf',
        description: 'Serverless architectures (FaaS), microservices orchestration, auto-scaling policies, and disaster recovery strategies.',
        category: 'Cloud Computing',
        tags: ['Tier 3', 'Serverless', 'Microservices', 'High Availability'],
        size: '149 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'cloud-security',
    name: 'Cloud Security',
    shortName: 'Cloud Sec',
    description: 'Cloud IAM Governance, Shared Responsibility Model, VPC Security, Data Encryption at Rest/Transit & Compliance.',
    icon: 'ShieldCheck',
    color: '#ec4899', // pink-500
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    folderPath: '/notes/cloud-security/',
    items: [
      {
        id: 'cloud-sec-tier-1',
        title: 'Cloud Security — Tier 1 Study Guide',
        fileName: 'Cloud_Security_Tier_1_Study_Guide.pdf',
        filePath: '/notes/cloud-security/Cloud_Security_Tier_1_Study_Guide.pdf',
        description: 'Shared responsibility model, identity & access governance, principle of least privilege, and authentication protocols.',
        category: 'Cloud Security',
        tags: ['Tier 1', 'Shared Responsibility', 'IAM', 'Least Privilege'],
        size: '98 KB',
        isUploaded: true
      },
      {
        id: 'cloud-sec-tier-2',
        title: 'Cloud Security — Tier 2 Study Guide',
        fileName: 'Cloud_Security_Tier_2_Study_Guide.pdf',
        filePath: '/notes/cloud-security/Cloud_Security_Tier_2_Study_Guide.pdf',
        description: 'VPC security groups vs NACLs, KMS data encryption (envelope encryption), cloud threat defense, and compliance frameworks.',
        category: 'Cloud Security',
        tags: ['Tier 2', 'VPC Security', 'KMS Encryption', 'NACLs'],
        size: '147 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'network-security',
    name: 'Network Security',
    shortName: 'Net Sec',
    description: 'Cryptography (RSA, AES, Hashes), SSL/TLS Handshake, Firewalls, IDS/IPS, Cyber Attacks & Defense Mechanisms.',
    icon: 'ShieldAlert',
    color: '#f43f5e', // rose-500
    badgeColor: 'rgba(244, 63, 94, 0.15)',
    folderPath: '/notes/network-security/',
    items: [
      {
        id: 'net-sec-notes',
        title: 'PYQ Network Security Complete Study Notes',
        fileName: 'PYQ  Accenture_Network_Security_Study_Notes.pdf',
        filePath: '/notes/network-security/PYQ%20%20Accenture_Network_Security_Study_Notes.pdf',
        description: 'Comprehensive high-yield notes compiled from past Accenture technical questions covering attacks, defenses, and protocols.',
        category: 'Network Security',
        tags: ['PYQ Notes', 'Comprehensive', 'Protocols', 'Exams'],
        size: '147 KB',
        isUploaded: true
      },
      {
        id: 'net-sec-tier-1',
        title: 'Network Security — Tier 1 Study Notes',
        fileName: 'PYQ Accenture_Network_Security_Tier1.pdf',
        filePath: '/notes/network-security/PYQ%20Accenture_Network_Security_Tier1.pdf',
        description: 'Foundational security concepts: CIA triad, symmetric vs asymmetric encryption, hashing algorithms (MD5, SHA), and digital signatures.',
        category: 'Network Security',
        tags: ['Tier 1', 'CIA Triad', 'Cryptography', 'Hashes'],
        size: '130 KB',
        isUploaded: true
      },
      {
        id: 'net-sec-tier-2',
        title: 'Network Security — Tier 2 Study Notes',
        fileName: 'PYQ Accenture_Network_Security_Tier2.pdf',
        filePath: '/notes/network-security/PYQ%20Accenture_Network_Security_Tier2.pdf',
        description: 'Firewalls (packet filtering, stateful inspection, proxy), IDS vs IPS, VPN tunneling (IPsec, SSL), and PKI certificate authority.',
        category: 'Network Security',
        tags: ['Tier 2', 'Firewalls', 'IDS/IPS', 'VPN', 'PKI'],
        size: '110 KB',
        isUploaded: true
      },
      {
        id: 'net-sec-tier-3',
        title: 'Network Security — Tier 3 Study Notes',
        fileName: 'PYQ Accenture_Network_Security_Tier3.pdf',
        filePath: '/notes/network-security/PYQ%20Accenture_Network_Security_Tier3.pdf',
        description: 'Cyber attacks and mitigations: Man-in-the-Middle (MITM), ARP poisoning, DNS spoofing, SYN flood DoS/DDoS, and SSL/TLS handshake.',
        category: 'Network Security',
        tags: ['Tier 3', 'Cyber Attacks', 'MITM', 'DoS/DDoS', 'SSL/TLS'],
        size: '120 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'wifi-security',
    name: 'Wi-Fi Security',
    shortName: 'Wi-Fi Sec',
    description: '802.11 Standards, WEP, WPA, WPA2, WPA3 Encryption, 4-Way Handshake, KRACK Attacks & Wireless Protection.',
    icon: 'Wifi',
    color: '#06b6d4', // cyan-500
    badgeColor: 'rgba(6, 182, 212, 0.15)',
    folderPath: '/notes/wifi-security/',
    items: [
      {
        id: 'wifi-security-guide',
        title: 'Wi-Fi Security Complete Preparation Guide',
        fileName: 'wifi_security_complete_preparation_guide.pdf',
        filePath: '/notes/wifi-security/wifi_security_complete_preparation_guide.pdf',
        description: 'Complete guide comparing WEP (RC4), WPA (TKIP), WPA2 (CCMP/AES), and WPA3 (SAE), plus KRACK attacks and rogue AP mitigations.',
        category: 'Wi-Fi Security',
        tags: ['WPA3', 'WPA2', '802.11', 'KRACK', 'Rogue AP'],
        size: '121 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    shortName: 'DevOps',
    description: 'CI/CD Pipelines, Git Version Control, Docker Containerization, Kubernetes, Jenkins & Monitoring.',
    icon: 'Boxes',
    color: '#f97316', // orange-500
    badgeColor: 'rgba(249, 115, 22, 0.15)',
    folderPath: '/notes/devops/',
    items: [
      {
        id: 'devops-tier-1',
        title: 'Accenture DevOps Tier 1 Preparation Guide',
        fileName: 'Accenture_DevOps_Tier1_Guide.pdf',
        filePath: '/notes/devops/Accenture_DevOps_Tier1_Guide.pdf',
        description: 'CI/CD pipeline workflows, Git branching strategies, Docker container fundamentals, Dockerfile syntax, and automation concepts.',
        category: 'DevOps',
        tags: ['Tier 1', 'CI/CD', 'Docker', 'Git', 'Pipelines'],
        size: '134 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'ms-office',
    name: 'MS Office',
    shortName: 'MS Office',
    description: 'Microsoft Excel Core Formulas, VLOOKUP, INDEX/MATCH, Word Formatting, Mail Merge & PowerPoint Essentials.',
    icon: 'FileSpreadsheet',
    color: '#10b981', // emerald-500
    badgeColor: 'rgba(168, 85, 247, 0.15)',
    folderPath: '/notes/ms-office/',
    items: [
      {
        id: 'ms-office-complete',
        title: 'MS Office Accenture Complete Notes',
        fileName: 'MS_Office_Accenture_Complete_Notes.pdf',
        filePath: '/notes/ms-office/MS_Office_Accenture_Complete_Notes.pdf',
        description: 'Complete placement notes for MS Office assessment: Excel formulas (VLOOKUP, IF, SUMIF), shortcuts, Word formatting, and PowerPoint.',
        category: 'MS Office',
        tags: ['Complete Notes', 'Excel Formulas', 'VLOOKUP', 'MS Word'],
        size: '239 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'oops',
    name: 'OOPs & Programming',
    shortName: 'OOPs',
    description: 'Object-Oriented Programming: Encapsulation, Abstraction, Inheritance, Polymorphism, and SOLID Principles.',
    icon: 'Code',
    color: '#34d399', // emerald-400
    badgeColor: 'rgba(52, 211, 153, 0.15)',
    folderPath: '/notes/oops/',
    items: [
      {
        id: 'oops-handbook',
        title: 'Accenture OOP Preparation Handbook',
        fileName: 'Accenture_OOP_Preparation_Handbook.pdf',
        filePath: '/notes/oops/Accenture_OOP_Preparation_Handbook.pdf',
        description: 'Comprehensive OOP handbook: The 4 pillars, method overloading vs overriding, abstract classes vs interfaces, and design principles.',
        category: 'OOPs & Programming',
        tags: ['OOP Pillars', 'Inheritance', 'Polymorphism', 'Handbook'],
        size: '194 KB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'sql',
    name: 'Sql',
    shortName: 'SQL',
    description: 'Relational Database Concepts, SQL Queries, Joins, Group By, Subqueries, Normalization & ACID Properties.',
    icon: 'Database',
    color: '#0284c7', // sky-600
    badgeColor: 'rgba(2, 132, 199, 0.15)',
    folderPath: '/notes/sql/',
    items: [
      {
        id: 'sql-core-notes',
        title: 'SQL Complete Core Study Notes',
        fileName: 'Sql Notes.pdf',
        filePath: '/notes/sql/Sql%20Notes.pdf',
        description: 'Comprehensive SQL fundamentals: DDL, DML, DQL commands, constraints, aggregate functions, keys, and relational schema concepts.',
        category: 'Sql',
        tags: ['SQL Core', 'Queries', 'DDL/DML', 'Foundations'],
        size: '6.1 MB',
        isUploaded: true
      },
      {
        id: 'sql-20-interview-questions',
        title: 'Top 20 SQL Interview Questions & Solutions',
        fileName: '20 Sql interview Questions.pdf',
        filePath: '/notes/sql/20%20Sql%20interview%20Questions.pdf',
        description: 'Curated top 20 essential SQL technical interview questions with queries, joins, subqueries, and scenario solutions.',
        category: 'Sql',
        tags: ['Interview Q&A', 'Top 20', 'Joins', 'Queries'],
        size: '5.2 MB',
        isUploaded: true
      },
      {
        id: 'sql-50-interview-questions',
        title: '50 High-Frequency SQL Interview Questions & Answers',
        fileName: '50 interview Sql Questions .pdf',
        filePath: '/notes/sql/50%20interview%20Sql%20Questions%20.pdf',
        description: 'Extensive collection of 50 technical SQL interview questions covering complex joins, group by, nested queries, window functions, and indexing.',
        category: 'Sql',
        tags: ['Interview Q&A', 'Top 50', 'Advanced SQL', 'Exams'],
        size: '6.6 MB',
        isUploaded: true
      }
    ]
  },
  {
    id: 'full-stack',
    name: 'Full Stack',
    shortName: 'Full Stack',
    description: 'Frontend (HTML, CSS, JS, React), Backend (Node.js, Express, REST APIs) & Full-Stack System Design.',
    icon: 'Layers',
    color: '#8b5cf6', // violet-500
    badgeColor: 'rgba(139, 92, 246, 0.15)',
    folderPath: '/notes/full-stack/',
    items: [
      {
        id: 'fullstack-core-notes',
        title: 'Full Stack Web Development Study Notes',
        fileName: 'Full Stack Notes.pdf',
        filePath: '/notes/full-stack/Full%20Stack%20Notes.pdf',
        description: 'Comprehensive full stack architecture: Frontend essentials (HTML, CSS, JS), backend servers, client-server models, and web fundamentals.',
        category: 'Full Stack',
        tags: ['Full Stack', 'Web Development', 'Architecture', 'Frontend/Backend'],
        size: '2.8 MB',
        isUploaded: true
      },
      {
        id: 'mern-stack-notes',
        title: 'MERN Stack Complete Preparation Notes',
        fileName: 'MERN Stack Notes.pdf',
        filePath: '/notes/full-stack/MERN%20Stack%20Notes.pdf',
        description: 'In-depth MERN guide: MongoDB schemas, Express middleware, React hooks & lifecycle, Node.js runtime, and full-stack integration.',
        category: 'Full Stack',
        tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express'],
        size: '10.4 MB',
        isUploaded: true
      },
      {
        id: 'rest-apis-notes',
        title: 'RESTful APIs & Web Services Study Notes',
        fileName: 'REST-APIs Notes.pdf',
        filePath: '/notes/full-stack/REST-APIs%20Notes.pdf',
        description: 'Complete guide to REST architecture: HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, headers, authentication, and API security.',
        category: 'Full Stack',
        tags: ['REST APIs', 'HTTP Methods', 'Status Codes', 'Web Services'],
        size: '26.8 MB',
        isUploaded: true
      }
    ]
  }
];

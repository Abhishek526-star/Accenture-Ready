// src/data/cloudSecurityQuestions.js
// Dedicated Question Bank & Study Handbook for Cloud Security (45 Solved MCQs)

export const SECURITY_TIERS = [
  {
    id: 'all',
    title: 'All Security Tiers (45 MCQs)',
    badge: 'Complete Security Prep',
    description: 'Comprehensive Accenture Cloud Security bank covering CIA Triad, Controls, Zero Trust, Network & IAM.'
  },
  {
    id: 1,
    title: 'Tier 1 — Core Cybersecurity & CIA Triad',
    badge: '20 Questions',
    description: 'CIA Triad (Confidentiality, Integrity, Availability), Security Controls (Preventive/Detective/Corrective), Threats vs Vulnerabilities, Misconfiguration, and Defense in Depth.'
  },
  {
    id: 2,
    title: 'Tier 2 — Network Security, Zero Trust & RBAC',
    badge: '25 Questions',
    description: 'Cloud Firewalls, Security Groups vs NACLs, 3-Tier Network Segmentation, VPN, Zero Trust Architecture, MFA, RBAC, Encryption, and TLS.'
  }
];

export const SECURITY_TOPICS = [
  { id: 'all', label: 'All Security Topics' },
  { id: 'Cloud Security Fundamentals', label: 'Cloud Security Fundamentals & Goals' },
  { id: 'CIA Triad', label: 'CIA Triad (Confidentiality, Integrity, Availability)' },
  { id: 'Security Controls', label: 'Controls (Preventive, Detective, Corrective)' },
  { id: 'Threats & Vulnerabilities', label: 'Threats, Vulnerabilities & Misconfiguration' },
  { id: 'Network Security & Firewalls', label: 'Firewalls, Inbound/Outbound & VPN' },
  { id: 'Security Groups vs NACLs', label: 'Security Groups vs Network ACLs (Stateful vs Stateless)' },
  { id: 'Zero Trust & IAM', label: 'Zero Trust, MFA, RBAC & Least Privilege' },
  { id: 'Encryption & Protocols', label: 'Encryption, Hashing & HTTPS/TLS' },
  { id: 'Logging & Disaster Recovery', label: 'Audit Logs, RPO & RTO' }
];

export const securityQuestions = [
  // ==========================================
  // CLOUD SECURITY - TIER 1 (20 MCQs)
  // ==========================================
  {
    id: 'sec1-q1',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Cloud Security Fundamentals',
    subtopic: 'Primary Objective',
    difficulty: 'Easy',
    question: 'What is the primary objective of Cloud Security?',
    options: [
      { id: 'A', text: 'Increase cloud storage capacity' },
      { id: 'B', text: 'Protect cloud resources, data, applications, and identities' },
      { id: 'C', text: 'Reduce internet bandwidth' },
      { id: 'D', text: 'Increase CPU performance' }
    ],
    correctAnswer: 'B',
    explanation: 'Cloud Security is the set of policies, technologies, controls, and practices used to protect cloud-based data, applications, identities, networks, and infrastructure against unauthorized access, attacks, data loss, and threats.',
    memoryTip: 'Cloud Security = Protecting resources & data stored, processed, or accessed in the cloud'
  },
  {
    id: 'sec1-q2',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'CIA Triad',
    subtopic: 'Confidentiality',
    difficulty: 'Easy',
    question: 'Which component of the CIA Triad ensures that only authorized users can access information?',
    options: [
      { id: 'A', text: 'Integrity' },
      { id: 'B', text: 'Availability' },
      { id: 'C', text: 'Confidentiality' },
      { id: 'D', text: 'Authentication' }
    ],
    correctAnswer: 'C',
    explanation: 'Confidentiality ensures that sensitive information is accessible only to authorized entities and kept private from unauthorized viewing or disclosure.',
    memoryTip: 'Confidentiality → Who can SEE the data?'
  },
  {
    id: 'sec1-q3',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'CIA Triad',
    subtopic: 'Integrity',
    difficulty: 'Easy',
    question: 'A hacker modifies a customer\'s bank balance without authorization. Which security property has been violated?',
    options: [
      { id: 'A', text: 'Confidentiality' },
      { id: 'B', text: 'Integrity' },
      { id: 'C', text: 'Availability' },
      { id: 'D', text: 'Authentication' }
    ],
    correctAnswer: 'B',
    explanation: 'Integrity guarantees that data remains accurate, complete, and protected against unauthorized modification, alteration, or tampering.',
    memoryTip: 'Integrity = Data should not be changed improperly (Who can CHANGE?)'
  },
  {
    id: 'sec1-q4',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'CIA Triad',
    subtopic: 'Availability',
    difficulty: 'Easy',
    question: 'A DDoS attack causes an online banking application to become unavailable. Which CIA property is primarily affected?',
    options: [
      { id: 'A', text: 'Confidentiality' },
      { id: 'B', text: 'Integrity' },
      { id: 'C', text: 'Availability' },
      { id: 'D', text: 'Authorization' }
    ],
    correctAnswer: 'C',
    explanation: 'Availability ensures that authorized users have uninterrupted access to systems and data whenever required. Denial of Service directly disrupts Availability.',
    memoryTip: 'DDoS → Targets Availability'
  },
  {
    id: 'sec1-q5',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Threats & Vulnerabilities',
    subtopic: 'Vulnerability Definition',
    difficulty: 'Easy',
    question: 'Which of the following is a vulnerability?',
    options: [
      { id: 'A', text: 'Hacker' },
      { id: 'B', text: 'Malware' },
      { id: 'C', text: 'Weak password' },
      { id: 'D', text: 'DDoS attacker' }
    ],
    correctAnswer: 'C',
    explanation: 'A vulnerability is an internal security weakness, flaw, or misconfiguration in a system (such as weak passwords or unpatched OS) that can be exploited by threats.',
    memoryTip: 'Vulnerability = Internal Weakness'
  },
  {
    id: 'sec1-q6',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Threats & Vulnerabilities',
    subtopic: 'Threat Definition',
    difficulty: 'Easy',
    question: 'Which of the following is an example of a threat?',
    options: [
      { id: 'A', text: 'Weak password' },
      { id: 'B', text: 'Unpatched server' },
      { id: 'C', text: 'Misconfigured storage bucket' },
      { id: 'D', text: 'Hacker' }
    ],
    correctAnswer: 'D',
    explanation: 'A threat is an external entity, actor, malware, or event capable of causing harm by exploiting vulnerabilities.',
    memoryTip: 'Threat = Actor or mechanism capable of causing harm'
  },
  {
    id: 'sec1-q7',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Zero Trust & IAM',
    subtopic: 'Least Privilege',
    difficulty: 'Easy',
    question: 'A cloud administrator gives a developer only the permissions required to perform their assigned task. Which principle is being applied?',
    options: [
      { id: 'A', text: 'Defense in Depth' },
      { id: 'B', text: 'Least Privilege' },
      { id: 'C', text: 'Availability' },
      { id: 'D', text: 'Redundancy' }
    ],
    correctAnswer: 'B',
    explanation: 'The Principle of Least Privilege (PoLP) dictates giving users and services only the minimum necessary access rights required to execute their specific job tasks.',
    memoryTip: 'Least Privilege = Minimum required permissions'
  },
  {
    id: 'sec1-q8',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Security Controls',
    subtopic: 'Defense in Depth',
    difficulty: 'Medium',
    question: 'Which security approach uses multiple overlapping layers of protection?',
    options: [
      { id: 'A', text: 'Least Privilege' },
      { id: 'B', text: 'Defense in Depth' },
      { id: 'C', text: 'Authentication' },
      { id: 'D', text: 'Hashing' }
    ],
    correctAnswer: 'B',
    explanation: 'Defense in Depth coordinates layered defensive mechanisms (WAF → Firewall → MFA → IAM → Encryption → Monitoring) so that if one security layer fails, subsequent layers prevent compromise.',
    memoryTip: 'Defense in Depth = Multi-layered security controls'
  },
  {
    id: 'sec1-q9',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Security Controls',
    subtopic: 'Preventive Controls',
    difficulty: 'Easy',
    question: 'Which is an example of a preventive security control?',
    options: [
      { id: 'A', text: 'Security log analysis' },
      { id: 'B', text: 'Firewall' },
      { id: 'C', text: 'Incident report' },
      { id: 'D', text: 'Backup restoration' }
    ],
    correctAnswer: 'B',
    explanation: 'Preventive controls actively stop an attack or security incident before it breaches the perimeter. A firewall filters and blocks unauthorized traffic.',
    memoryTip: 'Preventive → Stop before breach'
  },
  {
    id: 'sec1-q10',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Security Controls',
    subtopic: 'Detective Controls',
    difficulty: 'Easy',
    question: 'Which is an example of a detective security control?',
    options: [
      { id: 'A', text: 'Firewall' },
      { id: 'B', text: 'MFA' },
      { id: 'C', text: 'Security monitoring' },
      { id: 'D', text: 'Encryption' }
    ],
    correctAnswer: 'C',
    explanation: 'Detective controls discover, identify, and log suspicious activity, policy violations, or intrusions in real time (e.g. SIEM, IDS, telemetry monitoring).',
    memoryTip: 'Detective → Detect during/after activity'
  },
  {
    id: 'sec1-q11',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Security Controls',
    subtopic: 'Corrective Controls',
    difficulty: 'Easy',
    question: 'Which is an example of a corrective control?',
    options: [
      { id: 'A', text: 'Firewall' },
      { id: 'B', text: 'MFA' },
      { id: 'C', text: 'Backup restoration' },
      { id: 'D', text: 'Encryption' }
    ],
    correctAnswer: 'C',
    explanation: 'Corrective controls repair, recover, or restore systems and data back to normal operations following an incident or disruption (e.g. backup restoration, disaster recovery plans).',
    memoryTip: 'Corrective → Recover/Restore after incident'
  },
  {
    id: 'sec1-q12',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Threats & Vulnerabilities',
    subtopic: 'Cloud Misconfiguration',
    difficulty: 'Medium',
    question: 'A company accidentally configures its cloud storage so that anyone on the internet can access sensitive files. What is this primarily an example of?',
    options: [
      { id: 'A', text: 'DDoS' },
      { id: 'B', text: 'Cloud misconfiguration' },
      { id: 'C', text: 'Hash collision' },
      { id: 'D', text: 'Authentication failure' }
    ],
    correctAnswer: 'B',
    explanation: 'Cloud misconfiguration occurs when cloud resources are incorrectly set up by the customer (such as leaving S3 buckets public or exposing database ports). It is the #1 cause of cloud data breaches.',
    memoryTip: 'Cloud misconfiguration is the #1 cause of cloud data leaks'
  },
  {
    id: 'sec1-q13',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Encryption & Protocols',
    subtopic: 'Encryption Purpose',
    difficulty: 'Easy',
    question: 'Which security property is primarily protected by encryption?',
    options: [
      { id: 'A', text: 'Confidentiality' },
      { id: 'B', text: 'Availability' },
      { id: 'C', text: 'Scalability' },
      { id: 'D', text: 'Performance' }
    ],
    correctAnswer: 'A',
    explanation: 'Encryption transforms plaintext into ciphertext using cryptographic keys, ensuring that unauthorized parties cannot inspect or read the data (protecting Confidentiality).',
    memoryTip: 'Encryption → Protects Confidentiality'
  },
  {
    id: 'sec1-q14',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Encryption & Protocols',
    subtopic: 'Encryption Definition',
    difficulty: 'Easy',
    question: 'Which statement correctly describes encryption?',
    options: [
      { id: 'A', text: 'Encryption is always irreversible' },
      { id: 'B', text: 'Encryption converts plaintext into ciphertext' },
      { id: 'C', text: 'Encryption is only used for passwords' },
      { id: 'D', text: 'Encryption detects network attacks' }
    ],
    correctAnswer: 'B',
    explanation: 'Encryption is a reversible cryptographic process that translates plaintext into ciphertext using an encryption key, allowing authorized parties to decrypt it with the matching key.',
    memoryTip: 'Plaintext + Key → Encryption → Ciphertext (Reversible)'
  },
  {
    id: 'sec1-q15',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Encryption & Protocols',
    subtopic: 'Hashing',
    difficulty: 'Medium',
    question: 'Which statement about cryptographic hashing is correct?',
    options: [
      { id: 'A', text: 'Hashing is normally designed as a one-way operation' },
      { id: 'B', text: 'Hashing always uses a public and private key' },
      { id: 'C', text: 'Hashing is the same as encryption' },
      { id: 'D', text: 'Hashing is primarily used to increase storage capacity' }
    ],
    correctAnswer: 'A',
    explanation: 'Cryptographic hashing is a one-way mathematical function producing a fixed-length digest. Unlike encryption, hashing cannot be reversed and is used to verify data Integrity.',
    memoryTip: 'Hashing = One-way irreversible integrity verification'
  },
  {
    id: 'sec1-q16',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Zero Trust & IAM',
    subtopic: 'Authentication Definition',
    difficulty: 'Easy',
    question: 'Which mechanism is most directly used to verify the identity of a user?',
    options: [
      { id: 'A', text: 'Authorization' },
      { id: 'B', text: 'Authentication' },
      { id: 'C', text: 'Encryption' },
      { id: 'D', text: 'Availability' }
    ],
    correctAnswer: 'B',
    explanation: 'Authentication (AuthN) verifies the identity of a user or system based on credentials ("Who are you?"). Authorization (AuthZ) verifies permissions ("What are you allowed to do?").',
    memoryTip: 'Authentication = Identity verification ("Who are you?")'
  },
  {
    id: 'sec1-q17',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Zero Trust & IAM',
    subtopic: 'AuthN vs AuthZ',
    difficulty: 'Easy',
    question: 'A user successfully logs in and is then allowed to read only a particular database. Which concepts are involved?',
    options: [
      { id: 'A', text: 'Authentication and Authorization' },
      { id: 'B', text: 'Encryption and Hashing' },
      { id: 'C', text: 'Availability and Integrity' },
      { id: 'D', text: 'Backup and Recovery' }
    ],
    correctAnswer: 'A',
    explanation: 'Logging in with credentials proves identity (Authentication); granting access to read a specific database enforces permissions (Authorization).',
    memoryTip: 'Log in = Authentication | Granting access = Authorization'
  },
  {
    id: 'sec1-q18',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Zero Trust & IAM',
    subtopic: 'MFA Definition',
    difficulty: 'Easy',
    question: 'Which of the following is an example of Multi-Factor Authentication?',
    options: [
      { id: 'A', text: 'Password only' },
      { id: 'B', text: 'Username only' },
      { id: 'C', text: 'Password + OTP' },
      { id: 'D', text: 'PIN only' }
    ],
    correctAnswer: 'C',
    explanation: 'MFA requires two or more distinct factor categories: Something you know (Password) + Something you have (OTP on phone/token).',
    memoryTip: 'Password (Know) + OTP (Have) = Multi-Factor Authentication'
  },
  {
    id: 'sec1-q19',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'Cloud Security Fundamentals',
    subtopic: 'Shared Responsibility',
    difficulty: 'Medium',
    question: 'Which statement BEST describes cloud security responsibility?',
    options: [
      { id: 'A', text: 'The cloud provider is responsible for everything' },
      { id: 'B', text: 'The customer is responsible for everything' },
      { id: 'C', text: 'Security responsibilities are shared depending on the cloud service' },
      { id: 'D', text: 'Cloud environments do not require security controls' }
    ],
    correctAnswer: 'C',
    explanation: 'Under the Shared Responsibility Model, the cloud provider secures the infrastructure OF the cloud, while the customer secures data, access, and configurations IN the cloud.',
    memoryTip: 'Security is shared between provider and customer based on service model'
  },
  {
    id: 'sec1-q20',
    tier: 1,
    tierName: 'Security Tier 1 — Core Cyber & CIA',
    topic: 'CIA Triad',
    subtopic: 'CIA Matching',
    difficulty: 'Easy',
    question: 'Which combination correctly matches the CIA Triad property with its core objective?',
    options: [
      { id: 'A', text: 'Confidentiality → Data modification' },
      { id: 'B', text: 'Integrity → Unauthorized access' },
      { id: 'C', text: 'Availability → Service accessibility' },
      { id: 'D', text: 'Authentication → Data recovery' }
    ],
    correctAnswer: 'C',
    explanation: 'Availability ensures authorized users can access systems and data when needed. Confidentiality prevents unauthorized disclosure; Integrity prevents unauthorized modification.',
    memoryTip: 'Confidentiality = Who sees | Integrity = Who changes | Availability = Who can use'
  },

  // ==========================================
  // CLOUD SECURITY - TIER 2 (25 MCQs)
  // ==========================================
  {
    id: 'sec2-q1',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: 'Cloud Firewall Purpose',
    difficulty: 'Easy',
    question: 'What is the primary purpose of a cloud firewall?',
    options: [
      { id: 'A', text: 'Encrypt stored data' },
      { id: 'B', text: 'Control network traffic based on security rules' },
      { id: 'C', text: 'Create database backups' },
      { id: 'D', text: 'Authenticate users' }
    ],
    correctAnswer: 'B',
    explanation: 'A firewall inspects and filters incoming and outgoing network packets based on configured rules (IP addresses, port numbers, protocols).',
    memoryTip: 'Firewall = Network traffic inspection and control'
  },
  {
    id: 'sec2-q2',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: 'Inbound vs Outbound',
    difficulty: 'Easy',
    question: 'Which traffic is called inbound traffic in cloud networking?',
    options: [
      { id: 'A', text: 'Traffic leaving a server' },
      { id: 'B', text: 'Traffic entering a server/resource' },
      { id: 'C', text: 'Traffic stored in a database' },
      { id: 'D', text: 'Traffic encrypted using TLS' }
    ],
    correctAnswer: 'B',
    explanation: 'Inbound (ingress) traffic is traffic coming into a resource from external or internal networks. Outbound (egress) is traffic leaving the resource.',
    memoryTip: 'Inbound = Incoming (IN / Ingress) | Outbound = Outgoing (OUT / Egress)'
  },
  {
    id: 'sec2-q3',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Security Groups vs NACLs',
    subtopic: 'Security Group Scope',
    difficulty: 'Easy',
    question: 'Which statement correctly describes an AWS Security Group?',
    options: [
      { id: 'A', text: 'It operates only at the physical data-center level' },
      { id: 'B', text: 'It acts as a virtual firewall for associated resources' },
      { id: 'C', text: 'It replaces IAM' },
      { id: 'D', text: 'It is used only for database backups' }
    ],
    correctAnswer: 'B',
    explanation: 'Security Groups act as virtual firewalls at the instance or network interface (ENI) level, controlling inbound and outbound traffic for individual resources.',
    memoryTip: 'Security Group = Instance-level virtual firewall'
  },
  {
    id: 'sec2-q4',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Security Groups vs NACLs',
    subtopic: 'SG vs NACL Level',
    difficulty: 'Medium',
    question: 'What is the major difference between a Security Group and a Network ACL (NACL)?',
    options: [
      { id: 'A', text: 'Security Group operates at resource level; NACL operates at subnet level' },
      { id: 'B', text: 'Security Group is used for encryption; NACL is used for hashing' },
      { id: 'C', text: 'Both operate only at the physical server level' },
      { id: 'D', text: 'NACL manages user passwords' }
    ],
    correctAnswer: 'A',
    explanation: 'Security Groups attach to individual compute instances/interfaces (resource level). Network ACLs attach to entire VPC subnets (subnet level).',
    memoryTip: 'Security Group → Resource level | Network ACL → Subnet level'
  },
  {
    id: 'sec2-q5',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Security Groups vs NACLs',
    subtopic: 'Statefulness',
    difficulty: 'Medium',
    question: 'Which statement about a typical Security Group is correct regarding statefulness?',
    options: [
      { id: 'A', text: 'It is stateful' },
      { id: 'B', text: 'It is always stateless' },
      { id: 'C', text: 'It only allows deny rules' },
      { id: 'D', text: 'It operates only on physical routers' }
    ],
    correctAnswer: 'A',
    explanation: 'Security Groups are stateful: if an inbound request is permitted, the outbound return traffic is automatically allowed regardless of outbound rules. Network ACLs are stateless.',
    memoryTip: 'Security Group = Stateful | NACL = Stateless'
  },
  {
    id: 'sec2-q6',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Security Groups vs NACLs',
    subtopic: 'NACL Function',
    difficulty: 'Easy',
    question: 'Which statement about a Network ACL is correct?',
    options: [
      { id: 'A', text: 'It operates at subnet level' },
      { id: 'B', text: 'It operates only at user-account level' },
      { id: 'C', text: 'It replaces authentication' },
      { id: 'D', text: 'It encrypts database records' }
    ],
    correctAnswer: 'A',
    explanation: 'A Network ACL (NACL) is an optional layer of security for your VPC that acts as a stateless firewall controlling traffic in and out of one or more subnets.',
    memoryTip: 'NACL = Subnet-level packet filter'
  },
  {
    id: 'sec2-q7',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'Zero Trust Principle',
    difficulty: 'Easy',
    question: 'Which security approach follows the core principle "Never trust, always verify"?',
    options: [
      { id: 'A', text: 'Traditional perimeter security' },
      { id: 'B', text: 'Zero Trust' },
      { id: 'C', text: 'Backup strategy' },
      { id: 'D', text: 'Load balancing' }
    ],
    correctAnswer: 'B',
    explanation: 'Zero Trust Architecture (ZTA) operates on the principle of "Never trust, always verify," treating every access request as if it originates from an uncontrolled network.',
    memoryTip: 'Zero Trust = "Never trust, always verify"'
  },
  {
    id: 'sec2-q8',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'Zero Trust Pillars',
    difficulty: 'Medium',
    question: 'Which is NOT a core principle of Zero Trust Architecture?',
    options: [
      { id: 'A', text: 'Verify explicitly' },
      { id: 'B', text: 'Use least privilege' },
      { id: 'C', text: 'Assume breach' },
      { id: 'D', text: 'Trust all internal users automatically' }
    ],
    correctAnswer: 'D',
    explanation: 'The three core NIST/Microsoft Zero Trust principles are: 1. Verify explicitly, 2. Use least privilege, and 3. Assume breach. Trusting internal users automatically is the flawed traditional perimeter model.',
    memoryTip: 'Zero Trust 3 Pillars: Verify explicitly, Least privilege, Assume breach'
  },
  {
    id: 'sec2-q9',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'Least Privilege Application',
    difficulty: 'Easy',
    question: 'A company gives a developer permission to read application logs but not delete them. Which principle is being applied?',
    options: [
      { id: 'A', text: 'Availability' },
      { id: 'B', text: 'Least Privilege' },
      { id: 'C', text: 'Network Address Translation' },
      { id: 'D', text: 'Redundancy' }
    ],
    correctAnswer: 'B',
    explanation: 'Least Privilege ensures accounts receive only the specific permissions needed for their role (read logs), limiting the blast radius if credentials are compromised.',
    memoryTip: 'Granting read without delete = Least Privilege'
  },
  {
    id: 'sec2-q10',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'MFA Factors',
    difficulty: 'Easy',
    question: 'Which of the following is an example of Multi-Factor Authentication (MFA)?',
    options: [
      { id: 'A', text: 'Username only' },
      { id: 'B', text: 'Password only' },
      { id: 'C', text: 'Password + OTP' },
      { id: 'D', text: 'Security question only' }
    ],
    correctAnswer: 'C',
    explanation: 'MFA requires two different types of evidence: Password (Knowledge) + OTP from an authenticator or SMS (Possession).',
    memoryTip: 'Password + OTP = Two distinct authentication factors'
  },
  {
    id: 'sec2-q11',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'Biometric Factor',
    difficulty: 'Easy',
    question: 'Which of the following is an example of "something you are" in authentication?',
    options: [
      { id: 'A', text: 'Password' },
      { id: 'B', text: 'OTP' },
      { id: 'C', text: 'Fingerprint' },
      { id: 'D', text: 'PIN' }
    ],
    correctAnswer: 'C',
    explanation: 'Biometric attributes like Fingerprint, Facial recognition, and Retina scans represent the inherence factor ("something you are"). Passwords/PINs are "something you know", OTP is "something you have".',
    memoryTip: 'Fingerprint / Biometrics = "Something you are"'
  },
  {
    id: 'sec2-q12',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'RBAC Purpose',
    difficulty: 'Easy',
    question: 'What is the main purpose of Role-Based Access Control (RBAC)?',
    options: [
      { id: 'A', text: 'Encrypt network packets' },
      { id: 'B', text: 'Assign permissions based on user roles' },
      { id: 'C', text: 'Create backups' },
      { id: 'D', text: 'Detect DDoS attacks' }
    ],
    correctAnswer: 'B',
    explanation: 'RBAC assigns permissions to specific job roles (e.g. Developer, Auditor, DBA) rather than managing individual users, preventing privilege creep and simplifying governance.',
    memoryTip: 'RBAC = Assign permissions to roles, not individual accounts'
  },
  {
    id: 'sec2-q13',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: 'Remote Access VPN',
    difficulty: 'Easy',
    question: 'An employee wants to securely access a company\'s private cloud network from home. Which technology is most appropriate?',
    options: [
      { id: 'A', text: 'VPN' },
      { id: 'B', text: 'NACL' },
      { id: 'C', text: 'Hashing' },
      { id: 'D', text: 'Load Balancer' }
    ],
    correctAnswer: 'A',
    explanation: 'A Virtual Private Network (VPN) creates an encrypted tunnel over the public internet, allowing remote workers to securely reach internal VPC resources.',
    memoryTip: 'Remote secure access over internet → VPN'
  },
  {
    id: 'sec2-q14',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: 'VPN Purpose',
    difficulty: 'Easy',
    question: 'What is the primary purpose of a VPN (Virtual Private Network)?',
    options: [
      { id: 'A', text: 'Increase CPU speed' },
      { id: 'B', text: 'Create a protected/encrypted network connection' },
      { id: 'C', text: 'Store passwords' },
      { id: 'D', text: 'Replace IAM' }
    ],
    correctAnswer: 'B',
    explanation: 'A VPN encapsulates and encrypts network traffic to protect communication across untrusted networks from eavesdropping and man-in-the-middle attacks.',
    memoryTip: 'VPN = Encrypted tunnel across untrusted networks'
  },
  {
    id: 'sec2-q15',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: 'Network Segmentation',
    difficulty: 'Medium',
    question: 'Why is network segmentation important in cloud security architecture?',
    options: [
      { id: 'A', text: 'It increases password complexity' },
      { id: 'B', text: 'It limits lateral movement after a compromise' },
      { id: 'C', text: 'It eliminates the need for encryption' },
      { id: 'D', text: 'It replaces MFA' }
    ],
    correctAnswer: 'B',
    explanation: 'Network segmentation divides a cloud environment into isolated subnets (e.g. public web, private app, private database). If a web server is breached, the attacker cannot easily pivot laterally to the database.',
    memoryTip: 'Segmentation = Limits lateral movement and blast radius'
  },
  {
    id: 'sec2-q16',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Logging & Disaster Recovery',
    subtopic: 'Detection Mechanism',
    difficulty: 'Easy',
    question: 'Which security mechanism is primarily used to detect suspicious activity and intrusions?',
    options: [
      { id: 'A', text: 'Monitoring and logging' },
      { id: 'B', text: 'Encryption' },
      { id: 'C', text: 'Password hashing' },
      { id: 'D', text: 'Load balancing' }
    ],
    correctAnswer: 'A',
    explanation: 'Monitoring and security logging (e.g. CloudTrail, VPC Flow Logs, SIEM) provide the visibility needed to detect anomalies, unauthorized logins, and security breaches.',
    memoryTip: 'Monitoring & logging = Detect suspicious activity and security events'
  },
  {
    id: 'sec2-q17',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Logging & Disaster Recovery',
    subtopic: 'Security Log Contents',
    difficulty: 'Easy',
    question: 'Which information can commonly be found in cloud security audit logs?',
    options: [
      { id: 'A', text: 'API calls' },
      { id: 'B', text: 'Login attempts' },
      { id: 'C', text: 'Resource changes' },
      { id: 'D', text: 'All of the above' }
    ],
    correctAnswer: 'D',
    explanation: 'Cloud audit logs record who did what, from where, and when—capturing API activity, authentication logs, and infrastructure configuration changes.',
    memoryTip: 'Security logs record API calls, logins, and resource changes'
  },
  {
    id: 'sec2-q18',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Logging & Disaster Recovery',
    subtopic: 'Database Restoration',
    difficulty: 'Easy',
    question: 'A company wants to restore its database after accidental deletion. Which security/recovery mechanism is most useful?',
    options: [
      { id: 'A', text: 'Backup' },
      { id: 'B', text: 'MFA' },
      { id: 'C', text: 'Firewall' },
      { id: 'D', text: 'RBAC' }
    ],
    correctAnswer: 'A',
    explanation: 'Backups preserve point-in-time copies of data to restore state after accidental deletion, corruption, or ransomware attacks.',
    memoryTip: 'Accidental data deletion → Restore from Backup'
  },
  {
    id: 'sec2-q19',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Logging & Disaster Recovery',
    subtopic: 'RPO Measure',
    difficulty: 'Medium',
    question: 'What does Recovery Point Objective (RPO) primarily measure?',
    options: [
      { id: 'A', text: 'Maximum acceptable data loss' },
      { id: 'B', text: 'Maximum number of users' },
      { id: 'C', text: 'Maximum network bandwidth' },
      { id: 'D', text: 'Authentication time' }
    ],
    correctAnswer: 'A',
    explanation: 'RPO defines the maximum acceptable amount of data loss measured in time backward from a disruption (e.g. "we can lose at most 1 hour of data").',
    memoryTip: 'RPO → Point in time → Data loss tolerance'
  },
  {
    id: 'sec2-q20',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Logging & Disaster Recovery',
    subtopic: 'RTO Meaning',
    difficulty: 'Medium',
    question: 'A company\'s RTO is 30 minutes. What does this mean?',
    options: [
      { id: 'A', text: 'It can lose 30 minutes of data' },
      { id: 'B', text: 'It should restore service within approximately 30 minutes' },
      { id: 'C', text: 'Users must authenticate every 30 minutes' },
      { id: 'D', text: 'The database backup runs every 30 minutes' }
    ],
    correctAnswer: 'B',
    explanation: 'Recovery Time Objective (RTO) is the target duration of time within which a business process must be restored after a disaster or disruption.',
    memoryTip: 'RTO → Time to restore → Acceptable downtime'
  },
  {
    id: 'sec2-q21',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Encryption & Protocols',
    subtopic: 'Encrypted HTTP Protocol',
    difficulty: 'Easy',
    question: 'Which HTTP-based protocol provides encrypted communication between a client and server?',
    options: [
      { id: 'A', text: 'HTTP' },
      { id: 'B', text: 'HTTPS' },
      { id: 'C', text: 'FTP' },
      { id: 'D', text: 'Telnet' }
    ],
    correctAnswer: 'B',
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts HTTP traffic using TLS on TCP port 443, securing data in transit.',
    memoryTip: 'HTTPS = HTTP + TLS Encryption (Port 443)'
  },
  {
    id: 'sec2-q22',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Encryption & Protocols',
    subtopic: 'TLS Purpose',
    difficulty: 'Easy',
    question: 'What is the primary purpose of TLS in HTTPS communication?',
    options: [
      { id: 'A', text: 'Increase database storage' },
      { id: 'B', text: 'Protect communication between client and server' },
      { id: 'C', text: 'Assign user roles' },
      { id: 'D', text: 'Create backups' }
    ],
    correctAnswer: 'B',
    explanation: 'TLS ensures confidentiality through encryption, integrity through tamper detection, and authenticity through server certificates for web communication.',
    memoryTip: 'TLS provides in-transit Confidentiality, Integrity & Authenticity'
  },
  {
    id: 'sec2-q23',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Encryption & Protocols',
    subtopic: 'API Authentication',
    difficulty: 'Easy',
    question: 'An API verifies that an incoming request came from an authenticated user. Which concept is being applied?',
    options: [
      { id: 'A', text: 'Authentication' },
      { id: 'B', text: 'Authorization' },
      { id: 'C', text: 'Availability' },
      { id: 'D', text: 'Segmentation' }
    ],
    correctAnswer: 'A',
    explanation: 'Authentication checks the caller credentials (API key, OAuth token, JWT) to verify identity ("Who are you?").',
    memoryTip: 'Verifying caller identity = Authentication'
  },
  {
    id: 'sec2-q24',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Zero Trust & IAM',
    subtopic: 'Access Denied Concept',
    difficulty: 'Medium',
    question: 'A user is authenticated successfully but receives "Access Denied" when trying to delete an administrator account. What is primarily being enforced?',
    options: [
      { id: 'A', text: 'Authentication' },
      { id: 'B', text: 'Authorization' },
      { id: 'C', text: 'Encryption' },
      { id: 'D', text: 'Availability' }
    ],
    correctAnswer: 'B',
    explanation: 'The user is already authenticated. Authorization evaluates their role permissions and denies the action because they lack administrative deletion privileges.',
    memoryTip: 'Identity confirmed + action blocked = Authorization'
  },
  {
    id: 'sec2-q25',
    tier: 2,
    tierName: 'Security Tier 2 — Network, Zero Trust & RBAC',
    topic: 'Network Security & Firewalls',
    subtopic: '3-Tier Security Architecture',
    difficulty: 'Hard',
    question: 'Which cloud architecture provides the BEST security isolation for databases and backend services?',
    options: [
      { id: 'A', text: 'Internet → Database directly' },
      { id: 'B', text: 'Internet → Database → Application' },
      { id: 'C', text: 'Internet → Public Web Layer → Application → Private Database' },
      { id: 'D', text: 'Internet → All resources in one public network' }
    ],
    correctAnswer: 'C',
    explanation: 'A 3-tier segmented architecture keeps databases in private subnets with no direct internet access, reachable only from the application tier, maximizing defense in depth.',
    memoryTip: 'Public Web → Private App → Private DB = Best Security Isolation'
  }
];

// Option explanations map for all 45 security questions
export const securityOptionExplanationsMap = {
  'sec1-q1': {
    A: 'Storage capacity is a scalability concern, not security.',
    B: 'Cloud security protects data, applications, identities, networks, and infrastructure.',
    C: 'Bandwidth optimization is a performance/networking concern.',
    D: 'CPU performance is unrelated to the primary purpose of security.'
  },
  'sec1-q2': {
    A: 'Integrity protects data from unauthorized modification.',
    B: 'Availability ensures resources are accessible when needed.',
    C: 'Confidentiality prevents unauthorized access/disclosure (Who can SEE the data?).',
    D: 'Authentication verifies identity; it is a mechanism, not a CIA component.'
  },
  'sec1-q3': {
    A: 'No unauthorized viewing/disclosure is specified.',
    B: 'Data was modified without authorization; integrity has been compromised.',
    C: 'The system is still operational and available.',
    D: 'Authentication concerns identity verification.'
  },
  'sec1-q4': {
    A: 'No data disclosure or viewing is involved.',
    B: 'No unauthorized data tampering/modification is involved.',
    C: 'The service is rendered inaccessible to authorized users (Availability).',
    D: 'Authorization controls user permissions.'
  },
  'sec1-q5': {
    A: 'A hacker is a threat actor.',
    B: 'Malware is an attack vector/threat.',
    C: 'A weak password is an internal system weakness that can be exploited.',
    D: 'A DDoS attacker is a threat actor.'
  },
  'sec1-q6': {
    A: 'A weak password is an internal vulnerability.',
    B: 'An unpatched server is an internal vulnerability.',
    C: 'Misconfiguration is an internal vulnerability.',
    D: 'A hacker is an external threat actor capable of causing harm.'
  },
  'sec1-q7': {
    A: 'Defense in Depth uses multiple layered security controls.',
    B: 'Least Privilege grants only the minimal necessary permissions required.',
    C: 'Availability ensures continuous resource access.',
    D: 'Redundancy provides duplicate resources for fault tolerance.'
  },
  'sec1-q8': {
    A: 'Least Privilege restricts permissions to the minimum.',
    B: 'Defense in Depth uses layered defenses (WAF → Firewall → MFA → IAM → Encryption → Monitoring).',
    C: 'Authentication verifies identity.',
    D: 'Hashing creates fixed-length cryptographic digests for integrity.'
  },
  'sec1-q9': {
    A: 'Security log analysis is a detective control.',
    B: 'A firewall actively blocks unauthorized traffic before it breaches the perimeter (Preventive).',
    C: 'Incident reporting occurs during/after detection.',
    D: 'Backup restoration is a corrective/recovery control.'
  },
  'sec1-q10': {
    A: 'Firewall is a preventive control.',
    B: 'MFA is a preventive control.',
    C: 'Security monitoring actively discovers and alerts on suspicious activity in real time (Detective).',
    D: 'Encryption is a preventive confidentiality safeguard.'
  },
  'sec1-q11': {
    A: 'Firewall stops traffic before entry (preventive).',
    B: 'MFA prevents unauthorized access (preventive).',
    C: 'Backup restoration recovers damaged systems and data back to normal after an incident (Corrective).',
    D: 'Encryption protects confidentiality (preventive).'
  },
  'sec1-q12': {
    A: 'DDoS attacks target availability via flooding.',
    B: 'Cloud misconfiguration: user settings incorrectly allowed public internet access.',
    C: 'Hash collision is a mathematical cryptographic conflict.',
    D: 'The issue is incorrect bucket permissions, not an authentication service outage.'
  },
  'sec1-q13': {
    A: 'Encryption scrambles plaintext into ciphertext so unauthorized parties cannot read it (Confidentiality).',
    B: 'Availability is ensured by redundancy, failover, and backups.',
    C: 'Scalability is handled by auto-scaling and elasticity.',
    D: 'Encryption adds cryptographic overhead, not performance gains.'
  },
  'sec1-q14': {
    A: 'Encryption is two-way and reversible using the correct decryption key.',
    B: 'Encryption transforms plaintext into ciphertext using cryptographic ciphers and keys.',
    C: 'Encryption protects databases, storage volumes, network packets, not just passwords.',
    D: 'Detecting network attacks is the role of IDS/IPS and firewalls.'
  },
  'sec1-q15': {
    A: 'Cryptographic hashing (e.g. SHA-256) is a one-way mathematical function that cannot be reversed.',
    B: 'Public/private keys belong to asymmetric encryption, not one-way hashing.',
    C: 'Encryption is reversible (two-way); hashing is irreversible (one-way).',
    D: 'Hashing verifies data integrity, not data compression or capacity.'
  },
  'sec1-q16': {
    A: 'Authorization verifies permissions ("What are you allowed to do?").',
    B: 'Authentication verifies identity ("Who are you?").',
    C: 'Encryption protects confidentiality.',
    D: 'Availability ensures resource uptime.'
  },
  'sec1-q17': {
    A: 'Logging in verifies user identity (Authentication); restricting access to read a specific database enforces permissions (Authorization).',
    B: 'Encryption and hashing are cryptographic data tools.',
    C: 'Availability and integrity are CIA properties.',
    D: 'Backup and recovery handle business continuity.'
  },
  'sec1-q18': {
    A: 'Password alone is a single factor (Something you know).',
    B: 'Username is an identifier, not an authentication factor.',
    C: 'Password (Something you know) + OTP (Something you have) combines two distinct factors.',
    D: 'PIN alone is a single knowledge factor.'
  },
  'sec1-q19': {
    A: 'The customer still has security responsibilities (data, access, OS).',
    B: 'The cloud provider manages and secures the underlying physical infrastructure.',
    C: 'Responsibilities are divided between provider and customer according to the service model (Shared Responsibility Model).',
    D: 'Cloud environments require rigorous security policies and controls.'
  },
  'sec1-q20': {
    A: 'Confidentiality protects against unauthorized viewing/access, not modification.',
    B: 'Integrity protects against unauthorized data modification.',
    C: 'Availability ensures systems and data remain operational and accessible when needed.',
    D: 'Authentication verifies identity, not recovery.'
  },

  // Security Tier 2
  'sec2-q1': {
    A: 'Encryption protects data; firewalls control traffic.',
    B: 'Firewalls inspect and filter inbound/outbound packets using predefined rules (IP, port, protocol).',
    C: 'Backup services create backups.',
    D: 'IAM authenticates users.'
  },
  'sec2-q2': {
    A: 'Traffic leaving is outbound (egress).',
    B: 'Inbound (ingress) traffic is traffic entering a server or resource from internal or external sources.',
    C: 'Stored data is data at rest.',
    D: 'TLS is a security protocol.'
  },
  'sec2-q3': {
    A: 'Physical security is handled by the cloud provider.',
    B: 'Security Groups act as instance-level virtual firewalls controlling inbound and outbound traffic for EC2 and ENIs.',
    C: 'IAM manages user identities and permissions.',
    D: 'Security Groups have no relation to backups.'
  },
  'sec2-q4': {
    A: 'Security Groups protect individual compute instances/ENIs; Network ACLs protect subnet boundaries.',
    B: 'Neither are cryptographic encryption/hashing tools.',
    C: 'Both are logical cloud networking constructs.',
    D: 'Password management is handled by IAM.'
  },
  'sec2-q5': {
    A: 'Security Groups are stateful: return traffic for an allowed inbound request is automatically allowed outbound regardless of outbound rules.',
    B: 'Network ACLs are stateless, not Security Groups.',
    C: 'Security Groups only support ALLOW rules (with an implicit deny).',
    D: 'Security Groups are virtual software-defined filters.'
  },
  'sec2-q6': {
    A: 'Network ACLs act as a virtual firewall at the subnet boundary, filtering traffic entering and leaving subnets.',
    B: 'User account permissions are governed by IAM.',
    C: 'NACLs are packet filters, not authentication systems.',
    D: 'Database encryption is a storage security mechanism.'
  },
  'sec2-q7': {
    A: 'Traditional perimeter security trusts internal network traffic once inside.',
    B: 'Zero Trust eliminates implicit trust and requires explicit verification for every request regardless of location.',
    C: 'Backup strategy protects data from loss.',
    D: 'Load balancing distributes requests.'
  },
  'sec2-q8': {
    A: 'Verify explicitly is a fundamental Zero Trust principle.',
    B: 'Use least privilege is a fundamental Zero Trust principle.',
    C: 'Assume breach is a fundamental Zero Trust principle.',
    D: 'Zero Trust explicitly forbids trusting internal users or network locations automatically.'
  },
  'sec2-q9': {
    A: 'Availability ensures systems remain online.',
    B: 'Least Privilege grants only the specific permissions needed (read-only logs) without destructive rights.',
    C: 'NAT translates IP addresses.',
    D: 'Redundancy provides extra hardware components.'
  },
  'sec2-q10': {
    A: 'Username is an identifier, not a factor.',
    B: 'Password is a single knowledge factor.',
    C: 'Password (something you know) + OTP (something you have) combines two distinct authentication factors.',
    D: 'A security question is another knowledge factor, not a multi-factor combo.'
  },
  'sec2-q11': {
    A: 'Password is something you know.',
    B: 'OTP is something you have.',
    C: 'Biometric identifiers like fingerprints, retina scans, or facial recognition represent "something you are".',
    D: 'PIN is something you know.'
  },
  'sec2-q12': {
    A: 'Network encryption protects data in transit.',
    B: 'Role-Based Access Control (RBAC) simplifies permission management by assigning permissions to roles rather than individuals.',
    C: 'Backup systems create backups.',
    D: 'DDoS detection is handled by Cloud Armor / AWS Shield.'
  },
  'sec2-q13': {
    A: 'A VPN (Virtual Private Network) provides an encrypted tunnel over the public internet for remote workers.',
    B: 'NACL controls traffic inside the cloud subnet boundary.',
    C: 'Hashing verifies data integrity.',
    D: 'Load balancers distribute web requests.'
  },
  'sec2-q14': {
    A: 'VPN adds minor encryption overhead, does not increase CPU speed.',
    B: 'VPN encapsulates and encrypts traffic to create a secure tunnel across untrusted networks.',
    C: 'Secret managers store passwords.',
    D: 'VPN handles networking, not identity management.'
  },
  'sec2-q15': {
    A: 'Password complexity is governed by identity policies.',
    B: 'Segmenting networks into isolated tiers (Web, App, DB) ensures that if an attacker compromises one layer, they cannot easily move laterally to other layers.',
    C: 'Encryption is still mandatory.',
    D: 'MFA is an authentication control.'
  },
  'sec2-q16': {
    A: 'Centralized logging (CloudTrail, VPC Flow Logs) and monitoring (SIEM) detect anomalies, intrusions, and policy violations.',
    B: 'Encryption protects confidentiality.',
    C: 'Password hashing secures credentials.',
    D: 'Load balancing ensures availability.'
  },
  'sec2-q17': {
    A: 'API calls are logged (e.g. AWS CloudTrail).',
    B: 'Login attempts (successes and failures) are tracked in auth logs.',
    C: 'Resource creations, modifications, and deletions are recorded in audit trails.',
    D: 'All listed items are standard components of cloud security audit logs.'
  },
  'sec2-q18': {
    A: 'Backups preserve point-in-time copies of data for restoration after deletion or ransomware.',
    B: 'MFA prevents unauthorized access.',
    C: 'Firewalls filter network packets.',
    D: 'RBAC restricts permissions.'
  },
  'sec2-q19': {
    A: 'RPO (Recovery Point Objective) determines the maximum acceptable data loss expressed backward in time.',
    B: 'Relates to concurrent user capacity.',
    C: 'Relates to network throughput.',
    D: 'Relates to authentication response time.'
  },
  'sec2-q20': {
    A: 'Data loss is governed by RPO.',
    B: 'RTO (Recovery Time Objective) defines the target duration within which systems and operations must be restored after disruption.',
    C: 'Relates to session timeouts.',
    D: 'Relates to backup schedules.'
  },
  'sec2-q21': {
    A: 'HTTP sends cleartext data over port 80.',
    B: 'HTTPS uses TLS encryption over port 443 to secure communication.',
    C: 'FTP transmits credentials in cleartext.',
    D: 'Telnet sends unencrypted terminal sessions.'
  },
  'sec2-q22': {
    A: 'TLS has no relation to storage capacity.',
    B: 'TLS provides confidentiality (encryption), integrity (tamper prevention), and server authentication for client-server web traffic.',
    C: 'RBAC manages user roles.',
    D: 'Backup systems handle data recovery.'
  },
  'sec2-q23': {
    A: 'Authentication checks the caller credentials (API key, OAuth token, JWT) to verify identity ("Who are you?").',
    B: 'Authorization verifies whether the user is permitted to perform the specific API action ("What can you do?").',
    C: 'Availability relates to system uptime.',
    D: 'Segmentation isolates network components.'
  },
  'sec2-q24': {
    A: 'The user is already authenticated (their identity is confirmed).',
    B: 'Authorization evaluates permissions and prevents non-admin users from executing privileged delete actions.',
    C: 'Encryption secures data.',
    D: 'Availability relates to service uptime.'
  },
  'sec2-q25': {
    A: 'Directly exposing databases to the public internet is a severe vulnerability.',
    B: 'Placing databases in front of applications violates basic tiering.',
    C: 'Multi-tier 3-layer segmentation (Public Ingress → App Subnet → Private DB Subnet) provides defense in depth and stops lateral attacks.',
    D: 'A flat network allows an attacker compromising any node to access all resources.'
  }
};

// Security Study Guides Handbook
export const securityStudyGuides = [
  {
    tier: 1,
    title: 'Security Tier 1: Core Cybersecurity & The CIA Triad',
    sections: [
      {
        heading: 'What is Cloud Security?',
        content: `Cloud Security is the set of policies, technologies, controls, and practices used to protect cloud-based data, applications, identities, networks, and infrastructure from unauthorized access, attacks, data loss, and other threats.

**Main Security Goals:**
* Prevent unauthorized access & protect sensitive data.
* Prevent data modification (guarantee integrity).
* Maintain continuous service availability.
* Detect suspicious attacks and recover from security incidents.`
      },
      {
        heading: 'The CIA Triad (Confidentiality, Integrity, Availability)',
        table: {
          headers: ['Property', 'Core Question', 'Primary Focus', 'Accenture Exam Trap'],
          rows: [
            ['Confidentiality', 'Who can SEE?', 'Prevent unauthorized access / viewing', 'Look for "unauthorized access / viewing" → Confidentiality'],
            ['Integrity', 'Who can CHANGE?', 'Prevent unauthorized modification / ensure accuracy', 'Look for "tampered / modified / balance changed" → Integrity'],
            ['Availability', 'Can I USE it?', 'Ensure accessible 24/7 / uptime', 'Look for "DDoS / offline / service down" → Availability']
          ]
        },
        memoryBox: 'Confidentiality = Who sees | Integrity = Who changes | Availability = Who can use'
      },
      {
        heading: 'Threat vs Vulnerability vs Risk',
        content: `* **Threat:** Something or someone capable of causing harm (Hacker, Malware, DDoS botnet, Insider threat).
* **Vulnerability:** A security weakness or flaw that can be exploited (Weak password, unpatched OS, public S3 bucket).
* **Risk:** The potential loss or damage resulting from a threat exploiting a vulnerability (*Risk = Threat × Vulnerability × Impact*).`
      },
      {
        heading: 'Preventive vs Detective vs Corrective Controls',
        content: `* **Preventive (Stop before breach):** Firewall, MFA, IAM policies, Encryption, Access Control Lists.
* **Detective (Detect during/after):** Monitoring, Intrusion Detection Systems (IDS), Audit logs, SIEM.
* **Corrective (Recover after damage):** Backup restoration, Disaster recovery plans, automated rollback.`
      },
      {
        heading: 'Cloud Misconfiguration & Defense in Depth',
        content: `* **Cloud Misconfiguration:** The #1 cause of cloud data breaches (e.g., publicly open storage buckets, open 0.0.0.0/0 database ports, hardcoded keys).
* **Defense in Depth:** Implementing multiple overlapping layers of protection (WAF → Firewall → MFA → IAM → Encryption → Monitoring) so if one fails, subsequent layers defend the system.`
      }
    ]
  },
  {
    tier: 2,
    title: 'Security Tier 2: Network Security, Zero Trust & RBAC',
    sections: [
      {
        heading: 'Security Group vs Network ACL (NACL)',
        table: {
          headers: ['Feature', 'Security Group', 'Network ACL (NACL)'],
          rows: [
            ['Scope', 'Resource / Instance level (ENI)', 'Subnet level'],
            ['Statefulness', 'Stateful (Inbound allow auto-allows outbound)', 'Stateless (Inbound & outbound must be configured)'],
            ['Rules Supported', 'Allow rules only (Implicit deny)', 'Allow and Deny rules (Numbered priority)'],
            ['Association', 'EC2, RDS, Lambda interfaces', 'VPC Subnets']
          ]
        },
        memoryBox: 'Security Group = Stateful & Instance level | Network ACL = Stateless & Subnet level'
      },
      {
        heading: 'Zero Trust Architecture (ZTA)',
        content: `* **Core Tenet:** "Never trust, always verify."
* **Pillar 1 — Verify Explicitly:** Authenticate and authorize every request based on all available data points (Identity, Device posture, Location, Data classification).
* **Pillar 2 — Least Privilege:** Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA).
* **Pillar 3 — Assume Breach:** Minimize blast radius, segment access, verify encryption, and utilize continuous telemetry.`
      },
      {
        heading: 'Authentication (AuthN) vs Authorization (AuthZ)',
        content: `* **Authentication (AuthN):** "Who are you?" (Verifies user identity via Password + MFA).
* **Authorization (AuthZ):** "What are you allowed to do?" (Enforces role permissions, e.g., read vs delete).
* **MFA (Multi-Factor):** Requires 2+ distinct factor categories: Know (password), Have (OTP/phone), or Are (biometrics).
* **RBAC (Role-Based Access Control):** Permissions assigned to Roles rather than individuals.`
      },
      {
        heading: 'Network Segmentation (3-Tier Isolation)',
        content: `* **Tier 1 (Public Web Subnet):** Internet-facing Load Balancers and Bastion Hosts.
* **Tier 2 (Private App Subnet):** Application microservices and compute runtimes.
* **Tier 3 (Private DB Subnet):** Databases and storage; zero direct internet routes.
* **Key Advantage:** Eliminates lateral movement if the web tier is compromised.`
      },
      {
        heading: 'Disaster Recovery Metrics: RPO vs RTO',
        content: `* **RPO (Recovery Point Objective):** "How much data loss can we tolerate?" (Measured back in time, e.g., 15 minutes of data).
* **RTO (Recovery Time Objective):** "How much downtime can we tolerate before systems are back online?" (Measured in time to recover, e.g., 30 minutes).
* **Memory Hook:** RPO → Point → Data Loss | RTO → Time → Downtime.`
      }
    ]
  }
];

// Helper functions for Cloud Security
export function getSecurityOptionBreakdown(questionId) {
  return securityOptionExplanationsMap[questionId] || null;
}

export function filterSecurityQuestions({ tier = 'all', topic = 'all', search = '' }) {
  return securityQuestions.filter((q) => {
    const matchesTier = tier === 'all' || String(q.tier) === String(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSearch = !search ||
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.explanation.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase()) ||
      (q.memoryTip && q.memoryTip.toLowerCase().includes(search.toLowerCase()));

    return matchesTier && matchesTopic && matchesSearch;
  });
}

// src/data/cloudQuestions.js
// Comprehensive Cloud Computing Question Bank: 85 Curated MCQs across 3 Tiers

export const CLOUD_TIERS = [
  {
    "id": "all",
    "title": "All Tiers (Complete 85 MCQs)",
    "badge": "Full Prep",
    "description": "Comprehensive Accenture cloud recruitment test bank across all tiers."
  },
  {
    "id": 1,
    "title": "Tier 1 — Core Cloud Fundamentals",
    "badge": "25 Questions",
    "description": "Cloud definitions, IaaS/PaaS/SaaS, deployment models, virtualization, hypervisors, and NIST essentials."
  },
  {
    "id": 2,
    "title": "Tier 2 — Services & Cloud Architecture",
    "badge": "30 Questions",
    "description": "Object/Block/File storage, VPCs, Subnets, Load Balancers, Containers, Kubernetes, and IAM Security."
  },
  {
    "id": 3,
    "title": "Tier 3 — Enterprise Patterns & DevOps",
    "badge": "30 Questions",
    "description": "Serverless, FaaS, Microservices, API Gateways, Disaster Recovery, RPO/RTO, CI/CD, and Deployment Patterns."
  }
];

export const CLOUD_TOPICS = [
  {
    "id": "all",
    "label": "All Topics"
  },
  {
    "id": "Cloud Fundamentals",
    "label": "Cloud Fundamentals & Pricing (CapEx/OpEx)"
  },
  {
    "id": "Service Models",
    "label": "Service Models (IaaS, PaaS, SaaS)"
  },
  {
    "id": "Deployment Models",
    "label": "Deployment Models (Public, Private, Hybrid)"
  },
  {
    "id": "Virtualization & Hypervisors",
    "label": "Virtualization & Hypervisors"
  },
  {
    "id": "Scalability & Elasticity",
    "label": "Scalability vs Elasticity"
  },
  {
    "id": "High Availability & Resilience",
    "label": "High Availability, Fault Tolerance & SPOF"
  },
  {
    "id": "Cloud Storage & Databases",
    "label": "Storage (Object/Block/File) & DBs"
  },
  {
    "id": "VPC & Networking",
    "label": "VPC, Subnets, Load Balancers & CDN"
  },
  {
    "id": "Containers & Kubernetes",
    "label": "Docker Containers & Kubernetes"
  },
  {
    "id": "Security & IAM",
    "label": "IAM, Least Privilege, Encryption & Shared Responsibility"
  },
  {
    "id": "Serverless & Microservices",
    "label": "Serverless, FaaS, Microservices & API Gateway"
  },
  {
    "id": "Disaster Recovery & Metrics",
    "label": "Disaster Recovery, RPO & RTO"
  },
  {
    "id": "DevOps & Deployment Strategies",
    "label": "IaC, CI/CD, Blue-Green & Canary"
  },
  {
    "id": "Mixed Scenarios",
    "label": "Accenture Enterprise Scenarios"
  }
];

export const cloudQuestions = [
  {
    "id": "t1-q1",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "Definition",
    "difficulty": "Easy",
    "question": "Which statement best defines cloud computing?",
    "options": [
      {
        "id": "A",
        "text": "Buying and maintaining physical servers in your own data center"
      },
      {
        "id": "B",
        "text": "Delivering computing resources on demand over a network"
      },
      {
        "id": "C",
        "text": "Using only local computers without Internet connectivity"
      },
      {
        "id": "D",
        "text": "Storing all data on a personal hard drive"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing provides computing resources such as compute, storage, databases, and networking on-demand over a network (typically the Internet) with usage-based pricing. Option A describes traditional on-premises infrastructure.",
    "memoryTip": "Cloud = On-demand resources over a network"
  },
  {
    "id": "t1-q2",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Service Models",
    "subtopic": "IaaS",
    "difficulty": "Easy",
    "question": "A developer rents a virtual machine from a cloud provider and manages the operating system and applications themselves. Which service model is this?",
    "options": [
      {
        "id": "A",
        "text": "SaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "IaaS"
      },
      {
        "id": "D",
        "text": "FaaS"
      }
    ],
    "correctAnswer": "C",
    "explanation": "IaaS (Infrastructure as a Service) provides raw compute, storage, and networking resources. The customer installs and manages the guest OS, runtime, and application layers (e.g. AWS EC2, Azure VMs).",
    "memoryTip": "VM → IaaS"
  },
  {
    "id": "t1-q3",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Service Models",
    "subtopic": "PaaS",
    "difficulty": "Easy",
    "question": "A developer wants to deploy application code without managing the underlying operating system, servers, or runtime infrastructure. Which model is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "IaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "SaaS"
      },
      {
        "id": "D",
        "text": "Private Cloud"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In PaaS (Platform as a Service), the cloud provider manages the physical hardware, virtualization, OS, and runtime platform. Developers focus purely on application code (e.g. Azure App Service, AWS Elastic Beanstalk).",
    "memoryTip": "Developer + deploy code without managing OS → PaaS"
  },
  {
    "id": "t1-q4",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Service Models",
    "subtopic": "SaaS",
    "difficulty": "Easy",
    "question": "Which is the best example of SaaS (Software as a Service)?",
    "options": [
      {
        "id": "A",
        "text": "Virtual machine"
      },
      {
        "id": "B",
        "text": "Cloud storage infrastructure"
      },
      {
        "id": "C",
        "text": "Gmail"
      },
      {
        "id": "D",
        "text": "Virtual network"
      }
    ],
    "correctAnswer": "C",
    "explanation": "SaaS delivers complete, ready-to-use software applications accessed over the web by end users. Gmail, Microsoft 365, and Salesforce are classic examples.",
    "memoryTip": "Ready-to-use application → SaaS"
  },
  {
    "id": "t1-q5",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Service Models",
    "subtopic": "IaaS vs PaaS vs SaaS",
    "difficulty": "Medium",
    "question": "Which cloud model generally gives the customer more control over the operating system?",
    "options": [
      {
        "id": "A",
        "text": "SaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "IaaS"
      },
      {
        "id": "D",
        "text": "None"
      }
    ],
    "correctAnswer": "C",
    "explanation": "IaaS gives customers administrative control over the guest OS (patching, OS installation, system packages). PaaS and SaaS abstract and manage the OS on behalf of the user.",
    "memoryTip": "Customer control: IaaS (Most) → PaaS → SaaS (Least)"
  },
  {
    "id": "t1-q6",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Deployment Models",
    "subtopic": "Public Cloud",
    "difficulty": "Easy",
    "question": "A startup hosts its application on AWS infrastructure shared among many customers. What type of deployment model is this?",
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
    "correctAnswer": "B",
    "explanation": "Public Cloud infrastructure is owned and operated by a third-party cloud provider (like AWS, Azure, GCP) and shared across multi-tenant customers over the public internet.",
    "memoryTip": "AWS / Azure / GCP → Usually public cloud"
  },
  {
    "id": "t1-q7",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Deployment Models",
    "subtopic": "Private Cloud",
    "difficulty": "Easy",
    "question": "A bank operates a cloud environment dedicated exclusively to its own organization. Which deployment model is this?",
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
    "explanation": "Private Cloud infrastructure is provisioned for exclusive use by a single organization, offering greater security control and regulatory compliance.",
    "memoryTip": "Dedicated exclusively to one organization → Private Cloud"
  },
  {
    "id": "t1-q8",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Deployment Models",
    "subtopic": "Hybrid Cloud",
    "difficulty": "Medium",
    "question": "A company keeps sensitive workloads in its private cloud but uses AWS for its scalable web application. What model is this?",
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
    "correctAnswer": "C",
    "explanation": "Hybrid Cloud is a composition of two or more distinct cloud infrastructures (private and public) that remain unique entities but are bound together to share data and applications.",
    "memoryTip": "Private + Public = Hybrid Cloud"
  },
  {
    "id": "t1-q9",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Virtualization & Hypervisors",
    "subtopic": "Virtualization",
    "difficulty": "Easy",
    "question": "What is the primary purpose of virtualization?",
    "options": [
      {
        "id": "A",
        "text": "Convert domain names to IP addresses"
      },
      {
        "id": "B",
        "text": "Create virtual computing resources on physical hardware"
      },
      {
        "id": "C",
        "text": "Encrypt every network packet"
      },
      {
        "id": "D",
        "text": "Replace the Internet"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Virtualization is the abstraction of physical hardware, allowing one physical server to host multiple isolated virtual machines or resources efficiently.",
    "memoryTip": "Physical hardware hosting virtual resources → Virtualization"
  },
  {
    "id": "t1-q10",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Virtualization & Hypervisors",
    "subtopic": "Hypervisor",
    "difficulty": "Easy",
    "question": "Which software manages virtual machines and provides them access to physical hardware resources?",
    "options": [
      {
        "id": "A",
        "text": "Compiler"
      },
      {
        "id": "B",
        "text": "Hypervisor"
      },
      {
        "id": "C",
        "text": "Firewall"
      },
      {
        "id": "D",
        "text": "DNS server"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A hypervisor (or Virtual Machine Monitor - VMM) creates, runs, and isolates virtual machines, allocating CPU, memory, and storage from physical host hardware.",
    "memoryTip": "VM manager → Hypervisor"
  },
  {
    "id": "t1-q11",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Virtualization & Hypervisors",
    "subtopic": "Type 1 Hypervisor",
    "difficulty": "Medium",
    "question": "Which statement describes a Type 1 hypervisor?",
    "options": [
      {
        "id": "A",
        "text": "It runs directly on physical hardware"
      },
      {
        "id": "B",
        "text": "It always runs inside a browser"
      },
      {
        "id": "C",
        "text": "It requires Windows as the host OS"
      },
      {
        "id": "D",
        "text": "It is an application running on top of a host OS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Type 1 hypervisors (Bare-Metal) run directly on physical hardware without a underlying host OS, offering superior performance and lower overhead (e.g. VMware ESXi, Hyper-V, Xen).",
    "memoryTip": "Type 1 → Hardware first (Bare-Metal)"
  },
  {
    "id": "t1-q12",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Virtualization & Hypervisors",
    "subtopic": "Type 2 Hypervisor",
    "difficulty": "Medium",
    "question": "Which architecture represents a Type 2 hypervisor?",
    "options": [
      {
        "id": "A",
        "text": "Hardware → Hypervisor → VM"
      },
      {
        "id": "B",
        "text": "Hardware → Host OS → Hypervisor → VM"
      },
      {
        "id": "C",
        "text": "Hardware → VM → Hypervisor"
      },
      {
        "id": "D",
        "text": "VM → Hardware → Hypervisor"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Type 2 hypervisors (Hosted) run on top of an existing host operating system (e.g. Oracle VirtualBox, VMware Workstation). Architecture: Hardware → Host OS → Hypervisor → VMs.",
    "memoryTip": "Type 2 → Host OS first (Hosted)"
  },
  {
    "id": "t1-q13",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Scalability & Elasticity",
    "subtopic": "Vertical Scaling",
    "difficulty": "Easy",
    "question": "A company increases a server from 4 CPU + 8 GB RAM to 16 CPU + 32 GB RAM. What type of scaling is this?",
    "options": [
      {
        "id": "A",
        "text": "Horizontal scaling"
      },
      {
        "id": "B",
        "text": "Vertical scaling"
      },
      {
        "id": "C",
        "text": "Geographic scaling"
      },
      {
        "id": "D",
        "text": "Multicast scaling"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Vertical scaling (Scaling Up) means upgrading the hardware resources (CPU, RAM, disk) of an existing machine rather than adding more servers.",
    "memoryTip": "Bigger machine → Vertical / Scale Up"
  },
  {
    "id": "t1-q14",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Scalability & Elasticity",
    "subtopic": "Horizontal Scaling",
    "difficulty": "Easy",
    "question": "An e-commerce company increases its application servers from 3 to 10 during a sale. What type of scaling is this?",
    "options": [
      {
        "id": "A",
        "text": "Vertical scaling"
      },
      {
        "id": "B",
        "text": "Horizontal scaling"
      },
      {
        "id": "C",
        "text": "Static scaling"
      },
      {
        "id": "D",
        "text": "Manual routing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Horizontal scaling (Scaling Out) means adding more machine instances/nodes to distribute the load across a cluster.",
    "memoryTip": "More machines → Horizontal / Scale Out"
  },
  {
    "id": "t1-q15",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Scalability & Elasticity",
    "subtopic": "Elasticity",
    "difficulty": "Easy",
    "question": "Traffic suddenly increases from 1,000 to 100,000 users. The cloud platform automatically adds servers and removes them when traffic falls. This is an example of:",
    "options": [
      {
        "id": "A",
        "text": "Virtualization only"
      },
      {
        "id": "B",
        "text": "Elasticity"
      },
      {
        "id": "C",
        "text": "Static routing"
      },
      {
        "id": "D",
        "text": "Data encryption"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Elasticity is the ability of a system to dynamically and automatically provision and de-provision computing resources in real time according to current workload demands.",
    "memoryTip": "Demand spikes → Auto adjust up and down → Elasticity"
  },
  {
    "id": "t1-q16",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Scalability & Elasticity",
    "subtopic": "Scalability vs Elasticity",
    "difficulty": "Medium",
    "question": "Which statement is correct regarding Scalability vs Elasticity?",
    "options": [
      {
        "id": "A",
        "text": "Scalability means the ability to handle increased workload; elasticity means dynamically adjusting resources with demand"
      },
      {
        "id": "B",
        "text": "Scalability and elasticity are exactly the same concept"
      },
      {
        "id": "C",
        "text": "Elasticity refers only to data encryption"
      },
      {
        "id": "D",
        "text": "Scalability applies only to physical servers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Scalability is the architectural ability to handle growth over time (capacity planning). Elasticity is the automatic, dynamic adaptation to transient demand spikes in real time.",
    "memoryTip": "Scalability = Can handle growth | Elasticity = Dynamically adjusts"
  },
  {
    "id": "t1-q17",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "High Availability & Resilience",
    "subtopic": "High Availability",
    "difficulty": "Easy",
    "question": "A cloud application continues to serve users even when one server fails because another server takes over. Which concept is primarily demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "High availability"
      },
      {
        "id": "B",
        "text": "Data compression"
      },
      {
        "id": "C",
        "text": "DNS resolution"
      },
      {
        "id": "D",
        "text": "Virtualization only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "High Availability (HA) ensures a system remains accessible and operational with minimal downtime, achieved through redundant components and automatic failover.",
    "memoryTip": "Keep service running despite server failure → High Availability"
  },
  {
    "id": "t1-q18",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "High Availability & Resilience",
    "subtopic": "Fault Tolerance",
    "difficulty": "Medium",
    "question": "A system continues operating seamlessly with zero interruption even after one of its hardware components fails. Which concept best describes this?",
    "options": [
      {
        "id": "A",
        "text": "Fault tolerance"
      },
      {
        "id": "B",
        "text": "SaaS"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "Horizontal routing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fault tolerance guarantees zero downtime or interruption by using active, mirror hardware redundancy. High Availability minimizes downtime, but Fault Tolerance eliminates it.",
    "memoryTip": "Accenture Rule: Failure doesn't stop the system at all → Fault tolerance"
  },
  {
    "id": "t1-q19",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "High Availability & Resilience",
    "subtopic": "Reliability",
    "difficulty": "Easy",
    "question": "Which term refers primarily to a system's ability to perform correctly and consistently over time without failure?",
    "options": [
      {
        "id": "A",
        "text": "Reliability"
      },
      {
        "id": "B",
        "text": "Latency"
      },
      {
        "id": "C",
        "text": "Scalability"
      },
      {
        "id": "D",
        "text": "Virtualization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Reliability is the probability that a system performs its intended function correctly under specified conditions for a specified period without errors.",
    "memoryTip": "Consistent, correct operation over time → Reliability"
  },
  {
    "id": "t1-q20",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "CapEx",
    "difficulty": "Easy",
    "question": "A company purchases physical servers, storage systems, and networking equipment for its own data center. This is primarily:",
    "options": [
      {
        "id": "A",
        "text": "OpEx"
      },
      {
        "id": "B",
        "text": "CapEx"
      },
      {
        "id": "C",
        "text": "SaaS"
      },
      {
        "id": "D",
        "text": "Elasticity"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CapEx (Capital Expenditure) is money spent upfront on purchasing physical, fixed infrastructure assets (servers, physical data center buildings, network switches).",
    "memoryTip": "Buy physical hardware upfront → CapEx"
  },
  {
    "id": "t1-q21",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "OpEx",
    "difficulty": "Easy",
    "question": "A company stops purchasing physical servers and instead pays a cloud provider for resources according to its service/usage model. This generally shifts spending toward:",
    "options": [
      {
        "id": "A",
        "text": "CapEx"
      },
      {
        "id": "B",
        "text": "OpEx"
      },
      {
        "id": "C",
        "text": "Hardware depreciation only"
      },
      {
        "id": "D",
        "text": "Physical networking"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cloud consumption operates on a utility, pay-as-you-go model, transforming large upfront capital investments (CapEx) into ongoing operational expenses (OpEx).",
    "memoryTip": "Consume cloud services on demand → OpEx"
  },
  {
    "id": "t1-q22",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "NIST Characteristics",
    "difficulty": "Medium",
    "question": "Which of the following is NOT one of the commonly recognized five essential characteristics of cloud computing according to the NIST model?",
    "options": [
      {
        "id": "A",
        "text": "On-demand self-service"
      },
      {
        "id": "B",
        "text": "Resource pooling"
      },
      {
        "id": "C",
        "text": "Rapid elasticity"
      },
      {
        "id": "D",
        "text": "Manual hardware installation for every user"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The 5 NIST Essential Characteristics are: 1. On-demand self-service, 2. Broad network access, 3. Resource pooling, 4. Rapid elasticity, and 5. Measured service. Manual installation is completely antithetical to cloud computing.",
    "memoryTip": "The 5 NIST essentials: Self-service, Broad access, Pooling, Elasticity, Measured"
  },
  {
    "id": "t1-q23",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "Resource Pooling",
    "difficulty": "Medium",
    "question": "A cloud provider dynamically allocates computing resources from a shared pool to different customers. Which cloud characteristic is this?",
    "options": [
      {
        "id": "A",
        "text": "Resource pooling"
      },
      {
        "id": "B",
        "text": "Static routing"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "Fault injection"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Resource pooling refers to the cloud provider's multi-tenant model where physical and virtual resources (CPU, RAM, storage) are pooled together to serve multiple consumers dynamically.",
    "memoryTip": "Shared resources dynamically allocated across tenants → Resource pooling"
  },
  {
    "id": "t1-q24",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Cloud Fundamentals",
    "subtopic": "Measured Service",
    "difficulty": "Easy",
    "question": "A cloud provider tracks how much storage, compute, or network traffic a customer consumes for monitoring and billing. Which cloud characteristic does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Measured service"
      },
      {
        "id": "B",
        "text": "Private cloud"
      },
      {
        "id": "C",
        "text": "Vertical scaling"
      },
      {
        "id": "D",
        "text": "Hypervisor"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Measured service automatically controls and optimizes resource use by leveraging metering capabilities at some level of abstraction appropriate to the type of service (pay-as-you-go billing).",
    "memoryTip": "Monitored and metered consumption → Measured service"
  },
  {
    "id": "t1-q25",
    "tier": 1,
    "tierName": "Tier 1 — Core Fundamentals",
    "topic": "Mixed Scenarios",
    "subtopic": "Architecture Selection",
    "difficulty": "Hard",
    "question": "A company wants to deploy an application quickly. Its requirements are: 1. It doesn't want to manage physical servers. 2. It doesn't want to manage the operating system. 3. Developers want to focus primarily on application code. 4. The application should automatically scale with demand. Which combination is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "IaaS + manual scaling"
      },
      {
        "id": "B",
        "text": "PaaS + elasticity"
      },
      {
        "id": "C",
        "text": "Private cloud + physical servers"
      },
      {
        "id": "D",
        "text": "On-premises hardware + manual scaling"
      }
    ],
    "correctAnswer": "B",
    "explanation": "PaaS abstracts both the physical hardware and OS administration, allowing developers to focus strictly on code. Elasticity handles automatic scaling in response to traffic demand.",
    "memoryTip": "No OS management + pure code focus + auto scale = PaaS + elasticity"
  },
  {
    "id": "t2-q1",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "Object Storage",
    "difficulty": "Easy",
    "question": "A company wants to store millions of images, videos, and backup files. The data does not need to behave like a traditional disk. Which storage type is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Block storage"
      },
      {
        "id": "B",
        "text": "Object storage"
      },
      {
        "id": "C",
        "text": "CPU cache"
      },
      {
        "id": "D",
        "text": "Register storage"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Object storage (e.g. AWS S3, Azure Blob) manages data as objects containing data, rich metadata, and a unique identifier. It is optimized for massive quantities of unstructured data like media and backups.",
    "memoryTip": "Images / videos / backups → Object storage"
  },
  {
    "id": "t2-q2",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "Block Storage",
    "difficulty": "Easy",
    "question": "A cloud VM needs a persistent virtual disk on which to install an operating system. Which storage is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Object storage"
      },
      {
        "id": "B",
        "text": "Block storage"
      },
      {
        "id": "C",
        "text": "CDN"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Block storage (e.g. AWS EBS) splits data into fixed blocks and acts as a raw, low-latency virtual disk directly attached to a VM, perfect for boot OS drives and transactional databases.",
    "memoryTip": "VM disk / OS drive → Block storage"
  },
  {
    "id": "t2-q3",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "File Storage",
    "difficulty": "Medium",
    "question": "Several application servers need to simultaneously access the same directory containing files using a hierarchical filesystem. Which storage model is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "File storage"
      },
      {
        "id": "B",
        "text": "Block storage only"
      },
      {
        "id": "C",
        "text": "CPU cache"
      },
      {
        "id": "D",
        "text": "Object storage only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "File storage (e.g. AWS EFS) manages data in a hierarchical file/folder structure (NFS/SMB) accessible by multiple compute instances simultaneously as a shared filesystem.",
    "memoryTip": "Shared folders / files across servers → File storage"
  },
  {
    "id": "t2-q4",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "Storage Comparison",
    "difficulty": "Medium",
    "question": "Which cloud storage option is correctly matched with its primary architecture?",
    "options": [
      {
        "id": "A",
        "text": "Object storage → VM boot disk"
      },
      {
        "id": "B",
        "text": "Block storage → Images and videos at massive scale"
      },
      {
        "id": "C",
        "text": "File storage → Shared filesystem"
      },
      {
        "id": "D",
        "text": "CDN → Database disk"
      }
    ],
    "correctAnswer": "C",
    "explanation": "File storage provides a shared directory tree (filesystem) across servers. Boot disks use Block storage; massive media scale uses Object storage.",
    "memoryTip": "Object → S3 | Block → EBS Disk | File → EFS Shared folders"
  },
  {
    "id": "t2-q5",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "Relational Database",
    "difficulty": "Easy",
    "question": "Which database model primarily stores structured data in tables consisting of rows and columns?",
    "options": [
      {
        "id": "A",
        "text": "Relational database"
      },
      {
        "id": "B",
        "text": "Object storage"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "CDN"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Relational databases (RDBMS like MySQL, PostgreSQL, Oracle, Amazon RDS) store structured data in tables with predefined schemas and use SQL for querying.",
    "memoryTip": "Tables, rows, columns, SQL → Relational Database"
  },
  {
    "id": "t2-q6",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Cloud Storage & Databases",
    "subtopic": "NoSQL Database",
    "difficulty": "Medium",
    "question": "An application needs a database with a flexible schema and very large-scale distributed workloads. Which option is more suitable?",
    "options": [
      {
        "id": "A",
        "text": "NoSQL database"
      },
      {
        "id": "B",
        "text": "Relational database only"
      },
      {
        "id": "C",
        "text": "DNS"
      },
      {
        "id": "D",
        "text": "File storage"
      }
    ],
    "correctAnswer": "A",
    "explanation": "NoSQL databases (e.g. DynamoDB, MongoDB, Cosmos DB) provide flexible document or key-value schemas designed for horizontal scaling across distributed nodes.",
    "memoryTip": "Flexible schema + massive horizontal scaling → NoSQL"
  },
  {
    "id": "t2-q7",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "VPC Definition",
    "difficulty": "Easy",
    "question": "What does VPC stand for in cloud networking?",
    "options": [
      {
        "id": "A",
        "text": "Virtual Private Cloud"
      },
      {
        "id": "B",
        "text": "Virtual Processing Cache"
      },
      {
        "id": "C",
        "text": "Variable Public Computer"
      },
      {
        "id": "D",
        "text": "Virtual Protocol Controller"
      }
    ],
    "correctAnswer": "A",
    "explanation": "VPC stands for Virtual Private Cloud. It is a logically isolated virtual network dedicated to your cloud account within a public cloud provider.",
    "memoryTip": "VPC = Virtual Private Cloud (Your private network in the cloud)"
  },
  {
    "id": "t2-q8",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "VPC Configuration",
    "difficulty": "Medium",
    "question": "Which of the following can be configured within a Virtual Private Cloud (VPC)?",
    "options": [
      {
        "id": "A",
        "text": "Subnets and routing"
      },
      {
        "id": "B",
        "text": "CPU instruction set only"
      },
      {
        "id": "C",
        "text": "Keyboard layout"
      },
      {
        "id": "D",
        "text": "Monitor resolution"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A VPC allows you to configure IP address ranges (CIDR), subnets, route tables, internet gateways, network access control lists (NACLs), and security groups.",
    "memoryTip": "VPC constructs: IP CIDR, Subnets, Route Tables, Gateways"
  },
  {
    "id": "t2-q9",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Subnet",
    "difficulty": "Easy",
    "question": "A VPC uses the address range 10.0.0.0/16. An administrator creates 10.0.1.0/24 and 10.0.2.0/24 inside it. What are these smaller networks called?",
    "options": [
      {
        "id": "A",
        "text": "Regions"
      },
      {
        "id": "B",
        "text": "Subnets"
      },
      {
        "id": "C",
        "text": "Availability Zones"
      },
      {
        "id": "D",
        "text": "Containers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A subnet (sub-network) is a logical subdivision of an IP network range within a VPC, often assigned to specific Availability Zones.",
    "memoryTip": "Subnets divide a VPC's IP address space"
  },
  {
    "id": "t2-q10",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Private Subnet",
    "difficulty": "Medium",
    "question": "A company wants application servers that should not accept direct inbound Internet connections. Where should they generally be placed?",
    "options": [
      {
        "id": "A",
        "text": "Private subnet"
      },
      {
        "id": "B",
        "text": "Public subnet only"
      },
      {
        "id": "C",
        "text": "DNS zone"
      },
      {
        "id": "D",
        "text": "CDN edge"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Private subnets do not have a route to an Internet Gateway for inbound traffic, preventing unauthorized external internet access to sensitive backend servers/databases.",
    "memoryTip": "No direct inbound internet route → Private Subnet"
  },
  {
    "id": "t2-q11",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Public Subnet",
    "difficulty": "Medium",
    "question": "A load balancer must accept requests from users on the Internet. Which type of subnet is commonly used for its Internet-facing interfaces?",
    "options": [
      {
        "id": "A",
        "text": "Public subnet"
      },
      {
        "id": "B",
        "text": "Private subnet only"
      },
      {
        "id": "C",
        "text": "CPU subnet"
      },
      {
        "id": "D",
        "text": "Database subnet"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Public subnets have a direct route to an Internet Gateway (IGW), enabling public IP assignment and two-way internet traffic for load balancers or bastion hosts.",
    "memoryTip": "Internet-facing traffic → Public Subnet"
  },
  {
    "id": "t2-q12",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Load Balancer",
    "difficulty": "Easy",
    "question": "A website receives millions of requests. The company has five application servers and wants incoming requests distributed evenly among them. What should it use?",
    "options": [
      {
        "id": "A",
        "text": "Load balancer"
      },
      {
        "id": "B",
        "text": "DNS only"
      },
      {
        "id": "C",
        "text": "Hypervisor"
      },
      {
        "id": "D",
        "text": "Object storage"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Load Balancer distributes incoming network traffic across multiple backend servers to maximize throughput, reduce latency, and prevent overload.",
    "memoryTip": "Distribute incoming traffic → Load balancer"
  },
  {
    "id": "t2-q13",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Health Checks",
    "difficulty": "Medium",
    "question": "One application server becomes unhealthy. The load balancer detects this and stops sending new requests to it. Which feature is being demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Health checking"
      },
      {
        "id": "B",
        "text": "Object storage"
      },
      {
        "id": "C",
        "text": "DNS resolution"
      },
      {
        "id": "D",
        "text": "Encryption at rest"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Load balancers perform periodic health checks (HTTP/TCP pings) on backend targets. Unhealthy targets are automatically taken out of service until they recover.",
    "memoryTip": "Detect failed nodes & reroute traffic → Health Checks"
  },
  {
    "id": "t2-q14",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Scalability & Elasticity",
    "subtopic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "A web application automatically increases its server instances from 2 to 10 when CPU utilization becomes high. What is this?",
    "options": [
      {
        "id": "A",
        "text": "Auto scaling"
      },
      {
        "id": "B",
        "text": "CDN caching"
      },
      {
        "id": "C",
        "text": "DNS resolution"
      },
      {
        "id": "D",
        "text": "Static routing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Auto Scaling monitors applications and automatically adjusts capacity (adding or terminating instances) based on defined metric thresholds such as CPU, memory, or request counts.",
    "memoryTip": "Dynamically adjusts number of instances based on metrics → Auto Scaling"
  },
  {
    "id": "t2-q15",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Scalability & Elasticity",
    "subtopic": "Load Balancer vs Auto Scaling",
    "difficulty": "Medium",
    "question": "Which statement correctly differentiates a Load Balancer from Auto Scaling?",
    "options": [
      {
        "id": "A",
        "text": "Load balancer adds servers; auto scaling distributes traffic"
      },
      {
        "id": "B",
        "text": "Load balancer distributes traffic; auto scaling adjusts resource capacity"
      },
      {
        "id": "C",
        "text": "Both only store files"
      },
      {
        "id": "D",
        "text": "Both are database technologies"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A load balancer directs where traffic goes across existing servers; auto scaling dynamically adds or removes server instances depending on demand.",
    "memoryTip": "Load Balancer = Where traffic goes | Auto Scaling = How many servers exist"
  },
  {
    "id": "t2-q16",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "CDN",
    "difficulty": "Easy",
    "question": "A website wants users around the world to receive images and videos from edge locations geographically closer to them. Which technology is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "CDN"
      },
      {
        "id": "B",
        "text": "IAM"
      },
      {
        "id": "C",
        "text": "Hypervisor"
      },
      {
        "id": "D",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A CDN (Content Delivery Network, e.g. Cloudflare, AWS CloudFront) caches static assets at distributed edge points of presence (PoPs) to deliver content with low latency.",
    "memoryTip": "Content closer to users globally → CDN"
  },
  {
    "id": "t2-q17",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Containers & Kubernetes",
    "subtopic": "Docker Image",
    "difficulty": "Easy",
    "question": "What is a Docker image?",
    "options": [
      {
        "id": "A",
        "text": "A running container"
      },
      {
        "id": "B",
        "text": "A packaged template used to create containers"
      },
      {
        "id": "C",
        "text": "A physical server"
      },
      {
        "id": "D",
        "text": "A cloud region"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Docker image is a read-only, immutable package containing everything needed to run an application (code, runtime, libraries, environment variables). A container is a running instance of an image.",
    "memoryTip": "Docker Image = Template | Container = Running instance"
  },
  {
    "id": "t2-q18",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Containers & Kubernetes",
    "subtopic": "Container",
    "difficulty": "Easy",
    "question": "Which statement best describes a container?",
    "options": [
      {
        "id": "A",
        "text": "A complete physical server"
      },
      {
        "id": "B",
        "text": "An isolated application environment that shares the host OS kernel"
      },
      {
        "id": "C",
        "text": "A cloud region"
      },
      {
        "id": "D",
        "text": "A DNS record"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Containers package application code and dependencies together in an isolated runtime environment while sharing the host operating system kernel.",
    "memoryTip": "Isolated application environment sharing host kernel → Container"
  },
  {
    "id": "t2-q19",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Containers & Kubernetes",
    "subtopic": "VM vs Container",
    "difficulty": "Medium",
    "question": "Which statement is generally correct when comparing Virtual Machines (VMs) and Containers?",
    "options": [
      {
        "id": "A",
        "text": "Containers always contain a complete guest OS"
      },
      {
        "id": "B",
        "text": "VMs generally include a guest OS, while containers share the host OS kernel"
      },
      {
        "id": "C",
        "text": "VMs cannot run applications"
      },
      {
        "id": "D",
        "text": "Containers require a separate physical server for each application"
      }
    ],
    "correctAnswer": "B",
    "explanation": "VMs virtualize the hardware and include a heavy guest OS. Containers virtualize the operating system and share the host kernel, making them significantly lighter and faster to boot.",
    "memoryTip": "VM → Guest OS included | Container → Shares host kernel"
  },
  {
    "id": "t2-q20",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Containers & Kubernetes",
    "subtopic": "Kubernetes",
    "difficulty": "Medium",
    "question": "What is Kubernetes primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Container orchestration"
      },
      {
        "id": "B",
        "text": "DNS name registration only"
      },
      {
        "id": "C",
        "text": "Physical cable management"
      },
      {
        "id": "D",
        "text": "Database normalization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, healing, and management of containerized workloads.",
    "memoryTip": "Docker runs containers; Kubernetes orchestrates & manages clusters of containers"
  },
  {
    "id": "t2-q21",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Containers & Kubernetes",
    "subtopic": "Kubernetes Pod",
    "difficulty": "Medium",
    "question": "What is the basic, smallest deployable unit in Kubernetes?",
    "options": [
      {
        "id": "A",
        "text": "Region"
      },
      {
        "id": "B",
        "text": "Pod"
      },
      {
        "id": "C",
        "text": "VPC"
      },
      {
        "id": "D",
        "text": "Bucket"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In Kubernetes, a Pod is the smallest execution unit. A Pod encapsulates one or more containers, shared storage volumes, and unique network IP coordinates.",
    "memoryTip": "Pod → Smallest deployable unit in Kubernetes"
  },
  {
    "id": "t2-q22",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "IAM Definition",
    "difficulty": "Easy",
    "question": "What is the primary purpose of Identity and Access Management (IAM)?",
    "options": [
      {
        "id": "A",
        "text": "Manage identities and access permissions"
      },
      {
        "id": "B",
        "text": "Store images"
      },
      {
        "id": "C",
        "text": "Increase CPU speed"
      },
      {
        "id": "D",
        "text": "Cache videos"
      }
    ],
    "correctAnswer": "A",
    "explanation": "IAM securely manages identities (users, groups, roles) and controls who is authenticated and authorized to perform specific actions on cloud resources.",
    "memoryTip": "IAM → Controls who can access what resources"
  },
  {
    "id": "t2-q23",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Authentication",
    "difficulty": "Easy",
    "question": "A user enters a username and password. The system verifies that the credentials belong to that user. Which process is this?",
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
        "text": "Encryption at rest"
      },
      {
        "id": "D",
        "text": "Load balancing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Authentication (AuthN) is the process of verifying who a user or service is (identity verification). Authorization (AuthZ) verifies what they are allowed to do.",
    "memoryTip": "Authentication = Who are you? | Authorization = What are you allowed to do?"
  },
  {
    "id": "t2-q24",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Authorization",
    "difficulty": "Easy",
    "question": "An authenticated employee can read a database but is prevented from deleting records. Which concept determines this?",
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
        "text": "Virtualization"
      },
      {
        "id": "D",
        "text": "CDN"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Authorization determines the permissions and actions an authenticated user is allowed to perform against specific resources.",
    "memoryTip": "Determining permitted actions = Authorization"
  },
  {
    "id": "t2-q25",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Least Privilege",
    "difficulty": "Medium",
    "question": "A developer only needs permission to read files from a cloud storage bucket. The administrator grants only read permission. Which security principle is being applied?",
    "options": [
      {
        "id": "A",
        "text": "Least privilege"
      },
      {
        "id": "B",
        "text": "Maximum privilege"
      },
      {
        "id": "C",
        "text": "Open access"
      },
      {
        "id": "D",
        "text": "Resource pooling"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Principle of Least Privilege (PoLP) dictates granting users or applications only the minimum necessary permissions required to perform their specific tasks.",
    "memoryTip": "Minimum required permissions → Principle of Least Privilege"
  },
  {
    "id": "t2-q26",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Encryption at Rest",
    "difficulty": "Easy",
    "question": "A cloud database is encrypted while stored on disk. What type of protection is this?",
    "options": [
      {
        "id": "A",
        "text": "Encryption in transit"
      },
      {
        "id": "B",
        "text": "Encryption at rest"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Load balancing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Encryption at rest protects data stored persistently on physical disks, databases, or object storage against unauthorized reading if physical drives or backups are compromised.",
    "memoryTip": "Data stored on disk/database → Encryption at rest"
  },
  {
    "id": "t2-q27",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Encryption in Transit",
    "difficulty": "Easy",
    "question": "A user connects to a website over HTTPS and the communication is protected using TLS. What is being protected?",
    "options": [
      {
        "id": "A",
        "text": "Data at rest"
      },
      {
        "id": "B",
        "text": "Data in transit"
      },
      {
        "id": "C",
        "text": "CPU registers"
      },
      {
        "id": "D",
        "text": "Database schema"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Data in transit (or in motion) is data traveling across a network between client and server, protected using cryptographic protocols like TLS/HTTPS.",
    "memoryTip": "Moving across network → Transit | Stored on disk → Rest"
  },
  {
    "id": "t2-q28",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Security & IAM",
    "subtopic": "Shared Responsibility Model",
    "difficulty": "Medium",
    "question": "In a cloud environment, who is responsible for security according to the Shared Responsibility Model?",
    "options": [
      {
        "id": "A",
        "text": "Only the cloud provider"
      },
      {
        "id": "B",
        "text": "Only the customer"
      },
      {
        "id": "C",
        "text": "Both provider and customer, with responsibilities depending on the service"
      },
      {
        "id": "D",
        "text": "Neither"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Security is shared: The cloud provider is responsible for \"security OF the cloud\" (physical data center, hardware, hypervisors); the customer is responsible for \"security IN the cloud\" (data, IAM, OS patches in IaaS).",
    "memoryTip": "Provider secures cloud infrastructure; Customer secures data & config"
  },
  {
    "id": "t2-q29",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "VPC & Networking",
    "subtopic": "Region vs Availability Zone",
    "difficulty": "Medium",
    "question": "Which statement correctly differentiates a Cloud Region from an Availability Zone (AZ)?",
    "options": [
      {
        "id": "A",
        "text": "A region is an individual VM"
      },
      {
        "id": "B",
        "text": "An Availability Zone is a geographic country"
      },
      {
        "id": "C",
        "text": "A region is a geographic cloud area that can contain multiple Availability Zones"
      },
      {
        "id": "D",
        "text": "Region and Availability Zone always mean exactly the same thing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A Region is a distinct geographical area (e.g. US East, Europe West). Each Region contains multiple, isolated, physically separate Availability Zones connected by low-latency links.",
    "memoryTip": "Region = Geographic territory | Availability Zone = Isolated location inside region"
  },
  {
    "id": "t2-q30",
    "tier": 2,
    "tierName": "Tier 2 — Services & Architecture",
    "topic": "Mixed Scenarios",
    "subtopic": "Multi-Tier Cloud Architecture",
    "difficulty": "Hard",
    "question": "An e-commerce company operates an architecture where: Users access an Internet-facing load balancer; Application servers reside in private subnets; Media files are stored in object storage; Application servers scale automatically during spikes; and IAM controls employee permissions. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "Load balancer distributes traffic, private subnets protect application servers from direct inbound Internet access, object storage stores images, and auto scaling adjusts capacity"
      },
      {
        "id": "B",
        "text": "Load balancer stores images, object storage distributes traffic, and IAM performs auto scaling"
      },
      {
        "id": "C",
        "text": "Private subnets must have no Internet connectivity of any kind"
      },
      {
        "id": "D",
        "text": "IAM is responsible only for increasing CPU capacity"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Option A maps each component accurately: Load balancer routes traffic; Private subnets isolate apps; Object storage holds unstructured files; Auto scaling matches demand; IAM secures access.",
    "memoryTip": "Understand the exact role of every architectural tier"
  },
  {
    "id": "t3-q1",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "Serverless Model",
    "difficulty": "Easy",
    "question": "A developer wants to deploy application code without provisioning or managing virtual machines or operating systems. The cloud provider automatically manages the underlying infrastructure. Which approach is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Traditional on-premises server"
      },
      {
        "id": "B",
        "text": "Serverless computing"
      },
      {
        "id": "C",
        "text": "Manual virtualization"
      },
      {
        "id": "D",
        "text": "Dedicated physical server"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Serverless computing eliminates server management tasks (OS patching, capacity provisioning) allowing developers to execute code directly, billed only for execution runtime.",
    "memoryTip": "Serverless ≠ No servers. It means you don't manage the servers."
  },
  {
    "id": "t3-q2",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "FaaS",
    "difficulty": "Medium",
    "question": "A function should execute automatically whenever a user uploads an image to cloud storage. Which model is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "FaaS (Function as a Service)"
      },
      {
        "id": "B",
        "text": "IaaS (Infrastructure as a Service)"
      },
      {
        "id": "C",
        "text": "Block storage"
      },
      {
        "id": "D",
        "text": "CDN (Content Delivery Network)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "FaaS (Function as a Service, such as AWS Lambda or Azure Functions) executes short-lived stateless code snippets in response to event triggers like S3 file uploads or HTTP webhooks.",
    "memoryTip": "Event-driven instant function execution → FaaS"
  },
  {
    "id": "t3-q3",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "Serverless vs FaaS",
    "difficulty": "Medium",
    "question": "Which statement is most accurate regarding the relationship between Serverless and FaaS?",
    "options": [
      {
        "id": "A",
        "text": "Serverless means there are literally no servers in existence"
      },
      {
        "id": "B",
        "text": "FaaS is one common serverless compute model"
      },
      {
        "id": "C",
        "text": "FaaS always requires physical server management by developers"
      },
      {
        "id": "D",
        "text": "Serverless is identical to purchasing collocated physical servers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Serverless is a broad category encompassing compute, storage (S3), and databases (DynamoDB). FaaS specifically refers to the event-driven serverless compute execution layer.",
    "memoryTip": "Serverless = Broad architecture | FaaS = Serverless compute function"
  },
  {
    "id": "t3-q4",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "Microservices Architecture",
    "difficulty": "Easy",
    "question": "An e-commerce application has separate services for Payment, Orders, Users, and Notifications. Each service can be developed and deployed independently. Which architecture is this?",
    "options": [
      {
        "id": "A",
        "text": "Monolithic architecture"
      },
      {
        "id": "B",
        "text": "Microservices architecture"
      },
      {
        "id": "C",
        "text": "Peer-to-peer architecture"
      },
      {
        "id": "D",
        "text": "Batch architecture"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Microservices architecture structures an application as a collection of small, loosely coupled, independently deployable services organized around business capabilities.",
    "memoryTip": "Autonomous, independently deployable services → Microservices"
  },
  {
    "id": "t3-q5",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "Microservices Advantages",
    "difficulty": "Medium",
    "question": "Which is a major advantage of microservices architecture?",
    "options": [
      {
        "id": "A",
        "text": "Every service must always be deployed together simultaneously"
      },
      {
        "id": "B",
        "text": "Individual services can often be deployed and scaled independently"
      },
      {
        "id": "C",
        "text": "It completely eliminates all network communication"
      },
      {
        "id": "D",
        "text": "It strictly mandates only one shared database for all services"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Microservices enable continuous delivery and fine-grained scaling—a high-traffic service (e.g. Payments) can be scaled or updated without rebuilding or redeploying the entire platform.",
    "memoryTip": "Targeted scaling + isolated CI/CD per service"
  },
  {
    "id": "t3-q6",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "Microservices Challenges",
    "difficulty": "Medium",
    "question": "Which is a common operational challenge associated with microservices?",
    "options": [
      {
        "id": "A",
        "text": "Distributed-system complexity"
      },
      {
        "id": "B",
        "text": "Elimination of all networking layers"
      },
      {
        "id": "C",
        "text": "Inability to scale individual services"
      },
      {
        "id": "D",
        "text": "Inability to deploy services independently"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Microservices introduce distributed-system complexities, such as network latency between services, distributed tracing, eventual data consistency across databases, and partial failure handling.",
    "memoryTip": "Distributed tracing, network calls, eventual consistency = Complexity"
  },
  {
    "id": "t3-q7",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "API Gateway Role",
    "difficulty": "Easy",
    "question": "A mobile application sends requests to an API Gateway, which routes requests to User, Order, and Payment services. What is the API Gateway acting as?",
    "options": [
      {
        "id": "A",
        "text": "Central entry point for APIs"
      },
      {
        "id": "B",
        "text": "Bare-metal physical server"
      },
      {
        "id": "C",
        "text": "Database storage engine"
      },
      {
        "id": "D",
        "text": "Operating system CPU scheduler"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An API Gateway serves as the single reverse-proxy entry point for client applications, routing requests to appropriate backend microservices.",
    "memoryTip": "API Gateway → Unified perimeter entry point for client requests"
  },
  {
    "id": "t3-q8",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Serverless & Microservices",
    "subtopic": "API Gateway Capabilities",
    "difficulty": "Medium",
    "question": "Which function can commonly be provided by an API Gateway?",
    "options": [
      {
        "id": "A",
        "text": "Request routing and rate limiting"
      },
      {
        "id": "B",
        "text": "Increasing physical server RAM dynamically"
      },
      {
        "id": "C",
        "text": "Replacing all relational and NoSQL databases"
      },
      {
        "id": "D",
        "text": "Manufacturing hardware servers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "API Gateways handle cross-cutting concerns: request routing, rate limiting/throttling, authentication/JWT verification, SSL termination, and response aggregation.",
    "memoryTip": "API Gateway = Routing, rate limiting, authentication, SSL offloading"
  },
  {
    "id": "t3-q9",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "High Availability & Resilience",
    "subtopic": "Cloud Monitoring",
    "difficulty": "Easy",
    "question": "A cloud administrator wants to know whether CPU utilization has exceeded 90%. Which capability is most relevant?",
    "options": [
      {
        "id": "A",
        "text": "Monitoring"
      },
      {
        "id": "B",
        "text": "Backup"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "Authentication"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Monitoring tracks real-time quantitative telemetry metrics (CPU, RAM, latency, network I/O) and triggers automated alerts or auto-scaling when thresholds are breached.",
    "memoryTip": "System health right now? → Monitoring"
  },
  {
    "id": "t3-q10",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "High Availability & Resilience",
    "subtopic": "Logging",
    "difficulty": "Easy",
    "question": "An application records events such as \"User login failed\", \"Payment request received\", and \"Database connection error\". What is this information called?",
    "options": [
      {
        "id": "A",
        "text": "Logs"
      },
      {
        "id": "B",
        "text": "Subnets"
      },
      {
        "id": "C",
        "text": "Hypervisors"
      },
      {
        "id": "D",
        "text": "Containers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Logs are time-stamped discrete historical text records documenting specific events, errors, and actions for debugging, auditing, and compliance.",
    "memoryTip": "Historical event records → Logs"
  },
  {
    "id": "t3-q11",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "High Availability & Resilience",
    "subtopic": "Monitoring vs Logging",
    "difficulty": "Medium",
    "question": "Which statement correctly differentiates monitoring from logging?",
    "options": [
      {
        "id": "A",
        "text": "Monitoring tracks system health/metrics, while logging records events"
      },
      {
        "id": "B",
        "text": "Monitoring only stores backups"
      },
      {
        "id": "C",
        "text": "Logging automatically increases CPU capacity"
      },
      {
        "id": "D",
        "text": "Monitoring and logging are completely identical functions"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Monitoring answers \"What is the system health right now?\" via telemetry metrics; logging answers \"What specific events happened in the past?\" via chronological records.",
    "memoryTip": "Monitoring → What is happening? | Logging → What happened?"
  },
  {
    "id": "t3-q12",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "Cloud Backup",
    "difficulty": "Easy",
    "question": "A company regularly creates copies of its database so that it can restore data after accidental deletion. What is this?",
    "options": [
      {
        "id": "A",
        "text": "Backup"
      },
      {
        "id": "B",
        "text": "Load balancing"
      },
      {
        "id": "C",
        "text": "CDN"
      },
      {
        "id": "D",
        "text": "API Gateway"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A backup is a point-in-time copy of data preserved in durable storage to enable restoration after accidental deletion, data corruption, or hardware failure.",
    "memoryTip": "Data copy for restoration → Backup"
  },
  {
    "id": "t3-q13",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "Disaster Recovery Definition",
    "difficulty": "Medium",
    "question": "A company's primary data center is destroyed by a natural disaster. The company activates another environment in a secondary region to restore its application. What concept is this?",
    "options": [
      {
        "id": "A",
        "text": "Disaster Recovery"
      },
      {
        "id": "B",
        "text": "Authentication"
      },
      {
        "id": "C",
        "text": "CDN"
      },
      {
        "id": "D",
        "text": "Containerization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Disaster Recovery (DR) is the complete set of policies, tools, and procedures to enable the recovery or continuation of vital technology infrastructure after a catastrophic event.",
    "memoryTip": "Restoring full system operations in secondary region → Disaster Recovery (DR)"
  },
  {
    "id": "t3-q14",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "Backup vs DR",
    "difficulty": "Medium",
    "question": "Which statement is correct regarding Backup and Disaster Recovery (DR)?",
    "options": [
      {
        "id": "A",
        "text": "Backup is a copy of data; disaster recovery is the broader process/strategy for restoring systems and services after disruption"
      },
      {
        "id": "B",
        "text": "Backup and DR always mean exactly the same thing"
      },
      {
        "id": "C",
        "text": "DR only means encrypting data at rest"
      },
      {
        "id": "D",
        "text": "Backup is used exclusively for computer networking"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Backups are just the saved data. Disaster Recovery encompasses the comprehensive architecture, failover mechanisms, networking, and business continuity strategy.",
    "memoryTip": "Backup = data snapshot | DR = end-to-end recovery strategy"
  },
  {
    "id": "t3-q15",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "RPO",
    "difficulty": "Medium",
    "question": "A company states: \"After a disaster, we can tolerate losing at most 30 minutes of recently created data.\" Which metric represents this requirement?",
    "options": [
      {
        "id": "A",
        "text": "RTO (Recovery Time Objective)"
      },
      {
        "id": "B",
        "text": "RPO (Recovery Point Objective)"
      },
      {
        "id": "C",
        "text": "SLA (Service Level Agreement)"
      },
      {
        "id": "D",
        "text": "Latency"
      }
    ],
    "correctAnswer": "B",
    "explanation": "RPO (Recovery Point Objective) defines the maximum acceptable amount of data loss measured in time backward from the disaster event.",
    "memoryTip": "RPO → Point → Data Loss (How much data can we lose?)"
  },
  {
    "id": "t3-q16",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "RTO",
    "difficulty": "Medium",
    "question": "A company requires its online banking application to be restored within 15 minutes after a major failure. Which metric represents this requirement?",
    "options": [
      {
        "id": "A",
        "text": "RPO"
      },
      {
        "id": "B",
        "text": "RTO"
      },
      {
        "id": "C",
        "text": "Bandwidth"
      },
      {
        "id": "D",
        "text": "Throughput"
      }
    ],
    "correctAnswer": "B",
    "explanation": "RTO (Recovery Time Objective) defines the maximum acceptable duration of system downtime before business operations must be restored.",
    "memoryTip": "RTO → Time → Downtime (How much time until systems are back up?)"
  },
  {
    "id": "t3-q17",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Disaster Recovery & Metrics",
    "subtopic": "RPO vs RTO Pairing",
    "difficulty": "Medium",
    "question": "Which pairing correctly matches RPO and RTO to their respective focus areas?",
    "options": [
      {
        "id": "A",
        "text": "RPO → Recovery time; RTO → Data loss"
      },
      {
        "id": "B",
        "text": "RPO → Data loss; RTO → Recovery time"
      },
      {
        "id": "C",
        "text": "RPO → Network speed; RTO → CPU usage"
      },
      {
        "id": "D",
        "text": "RPO → Authentication; RTO → Authorization"
      }
    ],
    "correctAnswer": "B",
    "explanation": "RPO (Point in time) measures the tolerance for data loss. RTO (Time duration) measures the tolerance for system downtime.",
    "memoryTip": "RPO = Data loss | RTO = Recovery time"
  },
  {
    "id": "t3-q18",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Deployment Models",
    "subtopic": "Multi-Cloud",
    "difficulty": "Medium",
    "question": "A company uses AWS for its application servers and Microsoft Azure for its analytics workload. What strategy is this?",
    "options": [
      {
        "id": "A",
        "text": "Hybrid cloud"
      },
      {
        "id": "B",
        "text": "Multi-cloud"
      },
      {
        "id": "C",
        "text": "Private cloud only"
      },
      {
        "id": "D",
        "text": "On-premises only"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Multi-cloud refers to utilizing cloud computing services and infrastructure from two or more distinct public cloud vendors (e.g. AWS + Azure + GCP) to prevent vendor lock-in.",
    "memoryTip": "Two or more distinct public clouds = Multi-cloud"
  },
  {
    "id": "t3-q19",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Deployment Models",
    "subtopic": "Cloud Bursting",
    "difficulty": "Hard",
    "question": "A company's application normally runs in its private cloud. During major traffic spikes, additional workloads are temporarily deployed to a public cloud. What is this called?",
    "options": [
      {
        "id": "A",
        "text": "Cloud bursting"
      },
      {
        "id": "B",
        "text": "Blue-green deployment"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Containerization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cloud bursting is a hybrid cloud deployment configuration where an application runs in a private cloud/datacenter and automatically \"bursts\" into a public cloud when demand exceeds private capacity.",
    "memoryTip": "Private normally + Public during traffic peaks → Cloud Bursting"
  },
  {
    "id": "t3-q20",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Infrastructure as Code",
    "difficulty": "Easy",
    "question": "An administrator defines cloud infrastructure using Terraform configuration files and uses those files to create networks and servers automatically. Which concept is being used?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as Code"
      },
      {
        "id": "B",
        "text": "Manual provisioning"
      },
      {
        "id": "C",
        "text": "CDN"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Infrastructure as Code (IaC) manages and provisions computer data centers through machine-readable definition files (like Terraform, CloudFormation, Bicep) rather than manual interactive configuration.",
    "memoryTip": "Codifying infrastructure in files → Infrastructure as Code (IaC)"
  },
  {
    "id": "t3-q21",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Benefits of IaC",
    "difficulty": "Medium",
    "question": "Which is a major benefit of Infrastructure as Code (IaC)?",
    "options": [
      {
        "id": "A",
        "text": "Repeatable, version-controlled, and consistent infrastructure"
      },
      {
        "id": "B",
        "text": "Completely eliminates all ongoing cloud billing costs"
      },
      {
        "id": "C",
        "text": "Removes the need for all cybersecurity controls"
      },
      {
        "id": "D",
        "text": "Physically prevents all hardware component failures"
      }
    ],
    "correctAnswer": "A",
    "explanation": "IaC allows infrastructure configuration to be version-controlled in Git, tested, audited, and repeatedly deployed across staging and production without configuration drift.",
    "memoryTip": "Repeatable, version-controlled, automated drift prevention"
  },
  {
    "id": "t3-q22",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Continuous Integration",
    "difficulty": "Easy",
    "question": "A developer pushes code to a shared repository. An automated pipeline builds the application and runs automated tests. Which practice is primarily being demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Continuous Integration"
      },
      {
        "id": "B",
        "text": "Disaster Recovery"
      },
      {
        "id": "C",
        "text": "Cloud Bursting"
      },
      {
        "id": "D",
        "text": "CDN"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Continuous Integration (CI) is the practice of automating the integration of code changes from multiple contributors into a shared codebase through automated builds and unit tests.",
    "memoryTip": "CI = Code Commit + Automated Build + Automated Test"
  },
  {
    "id": "t3-q23",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Continuous Delivery / Deployment",
    "difficulty": "Medium",
    "question": "After automated testing succeeds, the pipeline automatically deploys the application into production. Which concept is most closely associated with this?",
    "options": [
      {
        "id": "A",
        "text": "Continuous Delivery / Deployment"
      },
      {
        "id": "B",
        "text": "Object storage"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Virtualization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Continuous Delivery/Deployment (CD) automates the delivery of validated software builds to testing, staging, and production environments without manual friction.",
    "memoryTip": "CD = Automated release and deployment to environments"
  },
  {
    "id": "t3-q24",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Blue-Green Deployment",
    "difficulty": "Medium",
    "question": "A company maintains two production environments: Blue (current version) and Green (new version). After testing Green, all traffic is switched from Blue to Green. What deployment strategy is this?",
    "options": [
      {
        "id": "A",
        "text": "Canary deployment"
      },
      {
        "id": "B",
        "text": "Blue-green deployment"
      },
      {
        "id": "C",
        "text": "Rolling backup"
      },
      {
        "id": "D",
        "text": "Cloud bursting"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Blue-Green deployment provisions two identical production environments. Once the new release (Green) is verified, 100% of user traffic is flipped over instantaneously via router or load balancer.",
    "memoryTip": "Two identical environments with instant 100% cutover → Blue-Green"
  },
  {
    "id": "t3-q25",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Canary Deployment",
    "difficulty": "Medium",
    "question": "A company sends a new application version to only 5% of users. If no problems occur, it gradually increases traffic to the new version. What is this?",
    "options": [
      {
        "id": "A",
        "text": "Blue-green deployment"
      },
      {
        "id": "B",
        "text": "Canary deployment"
      },
      {
        "id": "C",
        "text": "Disaster recovery"
      },
      {
        "id": "D",
        "text": "Backup"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Canary deployment rolls out software changes incrementally to a small subset of real users (e.g. 5% → 25% → 100%) to test stability and minimize blast radius before global release.",
    "memoryTip": "Gradual percentage rollout to minimize blast radius → Canary"
  },
  {
    "id": "t3-q26",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "DevOps & Deployment Strategies",
    "subtopic": "Blue-Green vs Canary",
    "difficulty": "Medium",
    "question": "Which statement correctly distinguishes Blue-Green deployment from Canary deployment?",
    "options": [
      {
        "id": "A",
        "text": "Blue-green gradually sends 1% of traffic while canary always switches 100% immediately"
      },
      {
        "id": "B",
        "text": "Blue-green uses two full environments; canary gradually exposes a new version to a subset of users"
      },
      {
        "id": "C",
        "text": "Both are database backup methods"
      },
      {
        "id": "D",
        "text": "Both are physical storage models"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Blue-Green maintains two parallel full environments with an all-at-once traffic flip. Canary phases in traffic incrementally to a small user fraction within the production environment.",
    "memoryTip": "Blue-Green = 2 complete environments | Canary = Phased incremental rollout"
  },
  {
    "id": "t3-q27",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "High Availability & Resilience",
    "subtopic": "High Availability Best Practices",
    "difficulty": "Medium",
    "question": "Which architecture provides the highest degree of availability?",
    "options": [
      {
        "id": "A",
        "text": "One server with no backup"
      },
      {
        "id": "B",
        "text": "Multiple servers across failure-isolated locations with health checks and failover"
      },
      {
        "id": "C",
        "text": "One database with no backup"
      },
      {
        "id": "D",
        "text": "One physical network connection"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Distributing compute instances across multiple failure-isolated Availability Zones coupled with active health checks and automated load-balanced failover delivers true high availability.",
    "memoryTip": "Multi-AZ redundancy + health checks + automated failover = Highest HA"
  },
  {
    "id": "t3-q28",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "High Availability & Resilience",
    "subtopic": "Single Point of Failure",
    "difficulty": "Easy",
    "question": "A web application depends on one server. If that server fails, the entire application becomes unavailable. What is this server called?",
    "options": [
      {
        "id": "A",
        "text": "Single point of failure (SPOF)"
      },
      {
        "id": "B",
        "text": "CDN"
      },
      {
        "id": "C",
        "text": "Load balancer"
      },
      {
        "id": "D",
        "text": "API Gateway"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Single Point of Failure (SPOF) is a non-redundant component of a system whose disruption causes the entire system to stop functioning.",
    "memoryTip": "One component fails and brings down everything → SPOF"
  },
  {
    "id": "t3-q29",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Mixed Scenarios",
    "subtopic": "Architectural Synthesis",
    "difficulty": "Hard",
    "question": "An organization has the following requirements: 1. Application normally runs in a private cloud. 2. Extra capacity is obtained from a public cloud during peak traffic. 3. Infrastructure is created using Terraform. 4. Application is deployed gradually to 5% of users before full rollout. Which combination of concepts is correct?",
    "options": [
      {
        "id": "A",
        "text": "Cloud bursting + IaC + Canary deployment"
      },
      {
        "id": "B",
        "text": "Multi-cloud + Backup + Blue-green deployment"
      },
      {
        "id": "C",
        "text": "Serverless + RPO + Authentication"
      },
      {
        "id": "D",
        "text": "CDN + RTO + Block storage"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Private to public scaling during peaks = Cloud Bursting; Terraform = Infrastructure as Code (IaC); 5% gradual traffic rollout = Canary deployment.",
    "memoryTip": "Cloud Bursting (Peak hybrid) + IaC (Terraform) + Canary (5% rollout)"
  },
  {
    "id": "t3-q30",
    "tier": 3,
    "tierName": "Tier 3 — Advanced & Enterprise Patterns",
    "topic": "Mixed Scenarios",
    "subtopic": "Accenture Enterprise DR & Metrics",
    "difficulty": "Hard",
    "question": "An e-commerce company operates an architecture where Users connect via an API Gateway to Microservices backed by Cloud Databases. During a festival: Traffic increases dramatically; Auto Scaling adds instances while the Load Balancer distributes traffic; Monitoring detects high CPU usage. The company requires an RTO of 30 minutes and an RPO of 5 minutes. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "RTO represents maximum acceptable data loss and RPO represents recovery time"
      },
      {
        "id": "B",
        "text": "Auto scaling distributes traffic while the load balancer adds servers"
      },
      {
        "id": "C",
        "text": "RTO represents the target recovery time, while RPO represents the acceptable data-loss window"
      },
      {
        "id": "D",
        "text": "Monitoring and logging are exactly the same thing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "RTO (Recovery Time Objective) defines the target time to restore operational services (30 mins). RPO (Recovery Point Objective) defines the maximum acceptable data-loss window (5 mins).",
    "memoryTip": "RTO = Recovery Time (downtime target) | RPO = Recovery Point (data loss window)"
  }
];

export const cloudStudyGuides = [
  {
    "tier": 1,
    "title": "Tier 1: Cloud Fundamentals & Core Concepts",
    "sections": [
      {
        "heading": "What is Cloud Computing?",
        "content": "Cloud computing is the on-demand delivery of computing resources (servers, storage, databases, networking, software) over a network (typically Internet) with pay-as-you-go pricing.\n\n**Traditional IT vs Cloud Computing:**\n* **Traditional:** Purchase physical server hardware, cooling, electricity, maintenance, security upfront.\n* **Cloud Computing:** Consume resources instantly via internet from cloud providers (AWS, Azure, GCP)."
      },
      {
        "heading": "Cloud Service Models: IaaS vs PaaS vs SaaS",
        "table": {
          "headers": [
            "Component",
            "IaaS",
            "PaaS",
            "SaaS"
          ],
          "rows": [
            [
              "Physical Hardware",
              "Provider",
              "Provider",
              "Provider"
            ],
            [
              "Networking",
              "Mostly provider",
              "Provider",
              "Provider"
            ],
            [
              "Virtualization",
              "Provider",
              "Provider",
              "Provider"
            ],
            [
              "Operating System (OS)",
              "You",
              "Provider",
              "Provider"
            ],
            [
              "Runtime & Middleware",
              "You",
              "Provider",
              "Provider"
            ],
            [
              "Application",
              "You",
              "You",
              "Provider"
            ],
            [
              "Data",
              "You",
              "You",
              "Shared / Provider"
            ]
          ]
        },
        "memoryBox": "Accenture Shortcuts: VM → IaaS | Deploy code without managing servers → PaaS | Use ready-made application → SaaS"
      },
      {
        "heading": "Cloud Deployment Models",
        "content": "* **Public Cloud:** Provider's shared cloud environment for multiple customers (AWS, Azure, GCP).\n* **Private Cloud:** Cloud infrastructure dedicated exclusively to one single organization (high security, compliance).\n* **Hybrid Cloud:** Combination of Private Cloud + Public Cloud (e.g. sensitive data in private, scalable web frontend on AWS).\n* **Community Cloud:** Shared by organizations with common security/regulatory needs."
      },
      {
        "heading": "Virtualization & Hypervisors (Type 1 vs Type 2)",
        "content": "* **Type 1 (Bare-Metal):** Runs directly on physical hardware. Less overhead, used in enterprise data centers (VMware ESXi, Hyper-V, Xen).\n* **Type 2 (Hosted):** Runs on top of a host operating system. More overhead, used on laptops/desktops (VirtualBox, VMware Workstation).\n* **Memory Tip:** Type 1 → Hardware first | Type 2 → Host OS first."
      },
      {
        "heading": "Scalability vs Elasticity & CapEx vs OpEx",
        "content": "* **Vertical Scaling (Scale Up):** Increasing CPU/RAM of the existing machine.\n* **Horizontal Scaling (Scale Out):** Adding more machines/nodes to the cluster.\n* **Elasticity:** Dynamically and automatically scaling resources up and down in response to real-time demand.\n* **CapEx (Capital Expenditure):** Money spent upfront on physical assets (servers, datacenter buildings).\n* **OpEx (Operating Expenditure):** Ongoing operational costs (pay-as-you-go cloud services)."
      },
      {
        "heading": "The 5 Essential Cloud Characteristics (NIST Model)",
        "content": "1. **On-demand self-service:** Users provision resources automatically.\n2. **Broad network access:** Services accessible over standard network protocols.\n3. **Resource pooling:** Multi-tenant shared infrastructure dynamically assigned.\n4. **Rapid elasticity:** Automatic scale up and scale down based on load.\n5. **Measured service:** Usage transparently metered and billed."
      }
    ]
  },
  {
    "tier": 2,
    "title": "Tier 2: Cloud Storage, Architecture & Security",
    "sections": [
      {
        "heading": "Cloud Storage Comparison (Object vs Block vs File)",
        "table": {
          "headers": [
            "Type",
            "Basic Idea",
            "Common Use Case",
            "AWS Example"
          ],
          "rows": [
            [
              "Object Storage",
              "Objects + Metadata + Key",
              "Images, videos, backups, big data",
              "Amazon S3 / Blob"
            ],
            [
              "Block Storage",
              "Virtual disk in blocks",
              "VM boot disk, databases, OS",
              "Amazon EBS"
            ],
            [
              "File Storage",
              "Hierarchical files/folders",
              "Shared filesystem across multiple VMs",
              "Amazon EFS"
            ]
          ]
        },
        "memoryBox": "Images/Videos → Object Storage | VM Disk → Block Storage | Shared folders → File Storage"
      },
      {
        "heading": "Cloud Databases: Relational vs NoSQL",
        "content": "* **Relational (SQL):** Structured data in tables (rows and columns) with ACID guarantees. Examples: MySQL, PostgreSQL, Oracle, Amazon RDS.\n* **NoSQL:** Flexible schemas (Document, Key-Value, Graph) optimized for horizontal scalability and high throughput. Examples: DynamoDB, MongoDB, Cosmos DB."
      },
      {
        "heading": "VPC & Subnets (Public vs Private)",
        "content": "* **VPC (Virtual Private Cloud):** Logically isolated virtual network inside the cloud.\n* **Public Subnet:** Has direct route to Internet Gateway. Used for load balancers and web servers.\n* **Private Subnet:** No direct inbound route from Internet. Used for application servers and databases. (Can still have outbound via NAT Gateway)."
      },
      {
        "heading": "Load Balancers & Auto Scaling",
        "content": "* **Load Balancer:** Distributes incoming network traffic across multiple healthy backend servers.\n* **Health Checks:** Monitors nodes; reroutes requests away from failed instances.\n* **Auto Scaling:** Automatically adds or removes server instances based on demand/CPU metrics.\n* **Memory Hook:** Load Balancer → Where traffic goes | Auto Scaling → How many resources exist."
      },
      {
        "heading": "Containers, Docker & Kubernetes",
        "content": "* **VM:** Heavyweight, includes full guest OS, hypervisor isolation.\n* **Container:** Lightweight, packages app + dependencies, shares host OS kernel.\n* **Docker Image:** Immutable template/blueprint used to create containers.\n* **Kubernetes (K8s):** Container orchestration platform (auto-healing, scaling, rolling updates).\n* **Pod:** Smallest deployable unit in Kubernetes."
      },
      {
        "heading": "Security: IAM, Encryption & Shared Responsibility",
        "content": "* **Authentication (AuthN):** Who are you? (Credentials verified).\n* **Authorization (AuthZ):** What are you allowed to do? (Permissions).\n* **Principle of Least Privilege:** Grant only the minimum permissions required.\n* **Encryption at Rest:** Protects stored data on disks/databases.\n* **Encryption in Transit:** Protects data moving across networks (HTTPS/TLS).\n* **Shared Responsibility:** Cloud provider secures infrastructure OF the cloud; Customer secures data and configurations IN the cloud."
      }
    ]
  },
  {
    "tier": 3,
    "title": "Tier 3: Enterprise Architecture, DR & DevOps",
    "sections": [
      {
        "heading": "Serverless Computing & FaaS",
        "content": "* **Serverless:** Zero server administration; cloud provider handles all scaling, patching, and provisioning. Billed purely on execution time (milliseconds).\n* **Important Core Tenet:** Serverless does NOT mean there are no servers. It means you do not manage them.\n* **FaaS (Function as a Service):** Event-driven compute layer executing modular functions (e.g. AWS Lambda, Azure Functions)."
      },
      {
        "heading": "Monolith vs Microservices & API Gateway",
        "content": "* **Monolithic:** Single unified codebase, single build artifact, shared single database.\n* **Microservices:** Independent modular services, polyglot persistence (database-per-service), independent scaling and deployments.\n* **API Gateway:** Central reverse proxy for all client requests; handles routing, rate limiting, token validation (JWT), and SSL termination."
      },
      {
        "heading": "Monitoring vs Logging",
        "content": "* **Monitoring (Metrics):** \"What is happening right now?\" (CPU %, memory, throughput, active alerts).\n* **Logging (Historical Records):** \"What happened in the past?\" (Audit trails, timestamps, stack traces)."
      },
      {
        "heading": "Disaster Recovery Metrics: RPO vs RTO",
        "content": "* **RPO (Recovery Point Objective):** \"How much data loss can we tolerate?\" (Measured back in time, e.g., 15 minutes of data).\n* **RTO (Recovery Time Objective):** \"How much downtime can we tolerate before systems are back online?\" (Measured in time to recover, e.g., 30 minutes).\n* **Memory Hook:** RPO → Point → Data Loss | RTO → Time → Downtime."
      },
      {
        "heading": "Disaster Recovery (DR) Strategies",
        "table": {
          "headers": [
            "Strategy",
            "Cost",
            "RTO / RPO",
            "Operational Mechanism"
          ],
          "rows": [
            [
              "1. Backup & Restore",
              "$ (Lowest)",
              "Highest (Hours/Days)",
              "Data restored from cloud storage to freshly provisioned servers."
            ],
            [
              "2. Pilot Light",
              "$$",
              "Moderate (Tens of mins)",
              "Core DB continuously replicates; compute spun up only on disaster."
            ],
            [
              "3. Warm Standby",
              "$$$",
              "Low (Minutes)",
              "Scaled-down copy runs continuously in secondary region; scaled up upon failover."
            ],
            [
              "4. Active-Active",
              "$$$$ (Highest)",
              "Near Zero",
              "Traffic actively served simultaneously across two regions. Instant failover."
            ]
          ]
        }
      },
      {
        "heading": "DevOps, CI/CD & Deployment Patterns",
        "content": "* **IaC (Infrastructure as Code):** Provisioning cloud infrastructure through declarative code (Terraform, CloudFormation).\n* **CI (Continuous Integration):** Code commit → Automated Build → Automated Test.\n* **CD (Continuous Delivery/Deployment):** Validated build → Automated staging & production deploy.\n* **Blue-Green Deployment:** 2 identical full environments; instant 100% router traffic switch with zero downtime and instant rollback.\n* **Canary Deployment:** Phased percentage rollout (e.g., 5% → 25% → 100%) to test stability and minimize blast radius.\n* **SPOF (Single Point of Failure):** Any non-redundant component whose disruption brings down the entire system."
      }
    ]
  }
];

export const optionExplanationsMap = {
  "t1-q1": {
    "A": "Describes traditional on-premises infrastructure where physical servers are bought and maintained in-house.",
    "B": "Cloud computing is the on-demand delivery of computing resources (compute, storage, databases, networking) over a network.",
    "C": "Cloud computing inherently utilizes network/internet connectivity to deliver services remotely.",
    "D": "Local hard drive storage is personal on-device storage, not network-delivered cloud computing."
  },
  "t1-q2": {
    "A": "SaaS provides complete ready-to-use software directly to users without infrastructure management.",
    "B": "PaaS provider manages the OS and runtime platform while developer focuses on application code.",
    "C": "IaaS gives raw compute infrastructure (VMs, storage, networking) where the customer manages the OS and applications.",
    "D": "FaaS is an event-driven serverless function execution model."
  },
  "t1-q3": {
    "A": "IaaS requires the customer to configure and manage the operating system, runtime, and server settings.",
    "B": "PaaS handles underlying infrastructure, servers, OS, and runtime so developers can deploy code directly.",
    "C": "SaaS delivers finished software applications to end users, not an application deployment platform.",
    "D": "Private Cloud is a deployment model, not a service model."
  },
  "t1-q4": {
    "A": "A virtual machine is an IaaS compute resource.",
    "B": "Cloud storage infrastructure is an IaaS offering.",
    "C": "Gmail is a complete, ready-to-use email application consumed directly by end users over the web.",
    "D": "A virtual network is an infrastructure-as-a-service networking construct."
  },
  "t1-q5": {
    "A": "SaaS abstracts all infrastructure, platform, and operating system management completely.",
    "B": "PaaS abstracts and manages the underlying OS for developers.",
    "C": "With IaaS, customers directly install, configure, patch, and manage the guest operating system.",
    "D": "IaaS clearly provides full operating system control."
  },
  "t1-q6": {
    "A": "Private cloud infrastructure is dedicated exclusively to one single organization.",
    "B": "Public cloud infrastructure is owned by a provider and shared across multi-tenant customers.",
    "C": "Community cloud is shared only by organizations with common requirements.",
    "D": "Hybrid cloud combines public and private cloud environments."
  },
  "t1-q7": {
    "A": "Public cloud serves multiple independent customers over shared hardware.",
    "B": "Private cloud infrastructure is operated and dedicated exclusively to a single organization.",
    "C": "Hybrid cloud combines private and public environments.",
    "D": "Community cloud is shared across multiple partner entities."
  },
  "t1-q8": {
    "A": "Public cloud hosts all workloads in third-party shared infrastructure.",
    "B": "Private cloud runs entirely in a dedicated company environment.",
    "C": "Combines sensitive private cloud workloads with scalable public cloud capacity (Hybrid).",
    "D": "Community cloud shares resources among organizations with common industry needs."
  },
  "t1-q9": {
    "A": "DNS performs domain name resolution to IP addresses.",
    "B": "Virtualization creates virtual computing resources (VMs, disks) on physical hardware.",
    "C": "Encryption is a security mechanism to protect data.",
    "D": "Virtualization enables cloud hosting, but does not replace the Internet."
  },
  "t1-q10": {
    "A": "A compiler translates source code into machine code.",
    "B": "A hypervisor creates, manages, and isolates virtual machines on physical hardware.",
    "C": "A firewall filters and controls network traffic.",
    "D": "A DNS server resolves domain names."
  },
  "t1-q11": {
    "A": "Type 1 hypervisors (Bare-Metal) run directly on the physical hardware without a host OS.",
    "B": "Hypervisors run at the hardware or OS virtualization layer, not inside a browser.",
    "C": "Type 1 hypervisors do not require Windows host OS; they run directly on physical hardware.",
    "D": "Running on top of a host OS describes a Type 2 (Hosted) hypervisor."
  },
  "t1-q12": {
    "A": "Hardware → Hypervisor → VM represents a Type 1 (Bare-Metal) hypervisor.",
    "B": "Hardware → Host OS → Hypervisor → VM represents a Type 2 (Hosted) hypervisor.",
    "C": "Hardware → VM → Hypervisor is an incorrect architecture order.",
    "D": "A VM does not host a hypervisor on physical hardware."
  },
  "t1-q13": {
    "A": "Horizontal scaling adds more machine instances.",
    "B": "Vertical scaling (Scale Up) increases CPU and RAM resources of the existing server machine.",
    "C": "Geographic scaling distributes servers across different global regions.",
    "D": "Multicast is a networking communication method."
  },
  "t1-q14": {
    "A": "Vertical scaling would increase CPU/RAM on existing servers.",
    "B": "Horizontal scaling (Scale Out) increases the number of server instances from 3 to 10.",
    "C": "Static scaling maintains fixed capacity without adjustment.",
    "D": "Routing directs network traffic between hosts, not provisioning servers."
  },
  "t1-q15": {
    "A": "Virtualization creates virtual machines but does not describe automatic resource adjustment.",
    "B": "Elasticity dynamically and automatically adds and removes resources in response to changing demand.",
    "C": "Static routing uses fixed routing tables.",
    "D": "Encryption protects data confidentiality."
  },
  "t1-q16": {
    "A": "Scalability is the ability to handle increased workload; elasticity is dynamically adjusting resources with demand.",
    "B": "Scalability and elasticity are closely related but distinct concepts.",
    "C": "Elasticity concerns resource adjustment, not data encryption.",
    "D": "Scalability applies to cloud and distributed architectures, not only physical servers."
  },
  "t1-q17": {
    "A": "High availability ensures a service continues running when one server fails by failing over to another.",
    "B": "Data compression reduces file size.",
    "C": "DNS resolution translates hostnames to IP addresses.",
    "D": "Virtualization creates virtual machines but High Availability is the architectural resilience principle."
  },
  "t1-q18": {
    "A": "Fault tolerance is the ability to continue operating without interruption despite component failure.",
    "B": "SaaS is a software service delivery model.",
    "C": "DNS is a naming resolution protocol.",
    "D": "Horizontal routing is not a standard resilience classification."
  },
  "t1-q19": {
    "A": "Reliability refers to a system's ability to perform correctly and consistently over time without failure.",
    "B": "Latency is data transmission delay.",
    "C": "Scalability concerns handling increased workload.",
    "D": "Virtualization creates virtual computing resources."
  },
  "t1-q20": {
    "A": "OpEx refers to ongoing operational spending.",
    "B": "CapEx (Capital Expenditure) is upfront capital investment in physical assets (servers, datacenter).",
    "C": "SaaS is a software service model.",
    "D": "Elasticity is dynamic resource adjustment."
  },
  "t1-q21": {
    "A": "CapEx is upfront investment in physical hardware assets.",
    "B": "Cloud consumption shifts spending toward operational expenditure (OpEx) on a pay-as-you-go model.",
    "C": "Hardware depreciation applies to purchased physical equipment (CapEx).",
    "D": "Physical networking is maintained by cloud providers."
  },
  "t1-q22": {
    "A": "On-demand self-service is one of the 5 NIST essential cloud characteristics.",
    "B": "Resource pooling is one of the 5 NIST essential cloud characteristics.",
    "C": "Rapid elasticity is one of the 5 NIST essential cloud characteristics.",
    "D": "Cloud aims to eliminate manual physical hardware installation for users through self-service."
  },
  "t1-q23": {
    "A": "Resource pooling dynamically allocates computing resources from a shared pool to multiple multi-tenant customers.",
    "B": "Static routing defines fixed network paths.",
    "C": "Encryption secures data via cryptographic ciphers.",
    "D": "Fault injection is a chaos engineering testing technique."
  },
  "t1-q24": {
    "A": "Measured service tracks and meters storage, compute, and network consumption for monitoring and billing.",
    "B": "Private cloud is a dedicated deployment model.",
    "C": "Vertical scaling increases hardware capacity on a single node.",
    "D": "A hypervisor is VM management software."
  },
  "t1-q25": {
    "A": "IaaS requires managing the OS and manual scaling doesn't scale automatically.",
    "B": "PaaS abstracts server and OS management while elasticity automatically scales resources with demand.",
    "C": "Private cloud with physical servers requires complete server administration.",
    "D": "On-premises hardware contradicts the goal of avoiding server management."
  },
  "t2-q1": {
    "A": "Block storage is better suited to virtual disks, operating systems, and transactional databases.",
    "B": "Object storage is designed to store massive amounts of unstructured data like images, videos, and backups.",
    "C": "CPU cache is high-speed volatile memory inside processors.",
    "D": "Register storage is tiny, ultra-fast storage inside the CPU."
  },
  "t2-q2": {
    "A": "Object storage is accessed via HTTP APIs and not used as a VM's traditional boot disk.",
    "B": "Block storage behaves like a persistent virtual disk attached to a VM (e.g. AWS EBS).",
    "C": "CDN caches and distributes content globally.",
    "D": "DNS resolves domain names to IP addresses."
  },
  "t2-q3": {
    "A": "File storage provides a shared hierarchical filesystem accessible by multiple application servers simultaneously.",
    "B": "Block storage generally attaches to single instances rather than a shared filesystem.",
    "C": "CPU cache is non-persistent processor memory.",
    "D": "Object storage uses object keys rather than traditional file/folder directory semantics."
  },
  "t2-q4": {
    "A": "VM boot disks commonly use block storage, not object storage.",
    "B": "Massive scale media workloads use object storage, not block storage.",
    "C": "File storage provides traditional shared filesystem semantics (e.g. AWS EFS).",
    "D": "CDN caches web content; it is not a database disk."
  },
  "t2-q5": {
    "A": "Relational databases store structured data in tables consisting of rows and columns using SQL.",
    "B": "Object storage stores unstructured objects with metadata.",
    "C": "DNS maps domain names to IP addresses.",
    "D": "CDN distributes and caches static assets."
  },
  "t2-q6": {
    "A": "NoSQL databases offer flexible schemas and horizontal scalability for massive distributed workloads.",
    "B": "Relational databases use structured schemas and usually scale vertically.",
    "C": "DNS is a network naming system.",
    "D": "File storage provides file hierarchies, not a database engine."
  },
  "t2-q7": {
    "A": "VPC stands for Virtual Private Cloud (a logically isolated virtual network).",
    "B": "Virtual Processing Cache is an incorrect term.",
    "C": "Variable Public Computer is an incorrect term.",
    "D": "Virtual Protocol Controller is an incorrect term."
  },
  "t2-q8": {
    "A": "Within a VPC, you configure IP CIDR ranges, subnets, route tables, and gateways.",
    "B": "CPU instruction sets are hardware features, not VPC constructs.",
    "C": "Keyboard layouts are OS/client configurations.",
    "D": "Monitor resolution is display hardware."
  },
  "t2-q9": {
    "A": "A Region is a geographic cloud area.",
    "B": "Subnets divide a VPC's IP address range into smaller logical subnetworks.",
    "C": "An Availability Zone is a physical datacenter facility within a region.",
    "D": "Containers are application runtime environments."
  },
  "t2-q10": {
    "A": "Private subnets do not have a direct inbound route from the Internet Gateway.",
    "B": "Public subnets accept direct inbound Internet traffic.",
    "C": "DNS zones manage domain name resolution.",
    "D": "CDN edge locations cache content close to users."
  },
  "t2-q11": {
    "A": "An Internet-facing load balancer resides in a public subnet to receive inbound internet traffic.",
    "B": "A private subnet has no direct inbound internet route.",
    "C": "CPU subnet is not a networking concept.",
    "D": "Database subnet is not a standard subnet classification."
  },
  "t2-q12": {
    "A": "A load balancer distributes incoming network traffic across multiple backend servers.",
    "B": "DNS resolves hostnames, but does not provide backend request-level load balancing.",
    "C": "Hypervisor manages virtual machines.",
    "D": "Object storage stores data."
  },
  "t2-q13": {
    "A": "Health checking monitors backend nodes and automatically stops routing traffic to unhealthy instances.",
    "B": "Object storage stores files and media.",
    "C": "DNS resolves names to IPs.",
    "D": "Encryption protects data confidentiality."
  },
  "t2-q14": {
    "A": "Auto scaling dynamically changes resource capacity based on demand and CPU utilization metrics.",
    "B": "CDN caches content at edge locations.",
    "C": "DNS maps names to network addresses.",
    "D": "Static routing uses fixed paths."
  },
  "t2-q15": {
    "A": "Inverted roles: Load balancers distribute traffic; auto scaling adds/removes servers.",
    "B": "Load balancer distributes traffic; auto scaling adjusts resource capacity.",
    "C": "Neither only stores files.",
    "D": "Neither are database technologies."
  },
  "t2-q16": {
    "A": "CDN caches and delivers static content (images/videos) from edge points close to users.",
    "B": "IAM manages access and user identities.",
    "C": "Hypervisor virtualizes hardware.",
    "D": "DHCP dynamically assigns network IP addresses."
  },
  "t2-q17": {
    "A": "A running container is an active instance created from an image.",
    "B": "A Docker image is a packaged, immutable template used to create containers.",
    "C": "Physical server is hardware infrastructure.",
    "D": "A region is a geographic territory."
  },
  "t2-q18": {
    "A": "A container is not physical hardware.",
    "B": "A container is an isolated application environment that shares the host OS kernel.",
    "C": "A region is cloud geographic infrastructure.",
    "D": "A DNS record is naming configuration."
  },
  "t2-q19": {
    "A": "Containers share the host OS kernel; they do not include a complete guest OS.",
    "B": "VMs include a full guest OS, while containers share the underlying host OS kernel.",
    "C": "VMs run full applications inside their guest OS.",
    "D": "Multiple containers can run concurrently on a single host server."
  },
  "t2-q20": {
    "A": "Kubernetes is an open-source platform for container orchestration (scaling, healing, deployment).",
    "B": "DNS registration is a naming service.",
    "C": "Physical cabling is datacenter hardware work.",
    "D": "Database normalization is a relational database design technique."
  },
  "t2-q21": {
    "A": "A Region is cloud geography.",
    "B": "A Pod is the smallest deployable execution unit in Kubernetes.",
    "C": "A VPC is a virtual network.",
    "D": "A Bucket is an object storage container."
  },
  "t2-q22": {
    "A": "IAM controls identities and manages access permissions across cloud resources.",
    "B": "Object storage stores images.",
    "C": "Hardware scaling increases CPU power.",
    "D": "CDN caches video streams."
  },
  "t2-q23": {
    "A": "Authorization determines what actions an authenticated user is permitted to perform.",
    "B": "Authentication verifies the user's identity based on credentials.",
    "C": "Encryption at rest protects stored disk data.",
    "D": "Load balancing distributes traffic."
  },
  "t2-q24": {
    "A": "Authentication confirms identity (who the user is).",
    "B": "Authorization defines permissions and determines what actions the user is allowed to perform.",
    "C": "Virtualization creates virtual computing resources.",
    "D": "CDN optimizes content delivery."
  },
  "t2-q25": {
    "A": "The Principle of Least Privilege gives users/services only the minimum permissions they actually need.",
    "B": "Maximum privilege is overly permissive and insecure.",
    "C": "Open access exposes resources publicly.",
    "D": "Resource pooling is a multi-tenant infrastructure property."
  },
  "t2-q26": {
    "A": "Encryption in transit protects data moving across a network.",
    "B": "Encryption at rest secures data stored persistently on disk, databases, or object storage.",
    "C": "Authentication confirms user identity.",
    "D": "Load balancing distributes traffic."
  },
  "t2-q27": {
    "A": "Data at rest is stored persistently on disk.",
    "B": "Data in transit is data moving across a network, encrypted using TLS/HTTPS.",
    "C": "CPU registers hold active CPU instructions.",
    "D": "Database schema is table structure."
  },
  "t2-q28": {
    "A": "The customer also retains security responsibilities (data, access, OS in IaaS).",
    "B": "The cloud provider secures physical facilities, hardware, and hypervisors.",
    "C": "Cloud security is shared: provider secures infrastructure OF the cloud, customer secures data IN the cloud.",
    "D": "Both provider and customer share responsibilities."
  },
  "t2-q29": {
    "A": "A region contains datacenters, not an individual VM.",
    "B": "An Availability Zone is an isolated facility within a region, not an entire country.",
    "C": "A region is a geographic cloud area that contains multiple failure-isolated Availability Zones.",
    "D": "Region and Availability Zone have distinctly different architectural scopes."
  },
  "t2-q30": {
    "A": "Load balancer routes traffic, private subnets protect app servers, object storage stores media, and auto scaling adjusts capacity.",
    "B": "Functions are scrambled: load balancers do not store images, and IAM does not perform auto scaling.",
    "C": "Private subnets can have outbound internet access via NAT; only direct inbound is blocked.",
    "D": "IAM manages identities and access permissions, not CPU capacity."
  },
  "t3-q1": {
    "A": "On-premises servers require complete manual hardware and facility maintenance.",
    "B": "Serverless abstracts server, OS, and infrastructure management directly to the cloud provider.",
    "C": "Virtualization still requires managing guest operating systems and hypervisors.",
    "D": "Dedicated physical servers require manual provisioning and patching."
  },
  "t3-q2": {
    "A": "FaaS (Function as a Service) is specifically designed for event-driven execution triggered by cloud events.",
    "B": "IaaS provides raw virtual machines which must run continuously.",
    "C": "Block storage provides disk volumes (EBS) for VMs.",
    "D": "CDN caches and distributes static assets globally."
  },
  "t3-q3": {
    "A": "Servers physically exist in datacenters; they are simply operated by the cloud vendor.",
    "B": "Serverless is the overarching architecture; FaaS represents its event-driven compute paradigm.",
    "C": "FaaS completely abstracts server administration from developers.",
    "D": "Collocation involves renting physical datacenter space, opposite to serverless."
  },
  "t3-q4": {
    "A": "Monolith packages all functional modules into a single tightly-coupled runtime.",
    "B": "Microservices decompose business logic into independently developable, deployable, and scalable units.",
    "C": "Peer-to-peer (P2P) is a decentralized network without central servers.",
    "D": "Batch architecture processes bulk jobs sequentially."
  },
  "t3-q5": {
    "A": "Co-deployment is a drawback of monolithic architectures.",
    "B": "Granular control over individual microservices enables targeted scaling and continuous deployment.",
    "C": "Microservices increase network communication via inter-service REST/gRPC calls.",
    "D": "Microservices encourage the database-per-service pattern, not a single shared database."
  },
  "t3-q6": {
    "A": "Distributed tracing, network latency, data consistency, and partial failures introduce operational complexity.",
    "B": "Microservices rely heavily on networking layers.",
    "C": "Microservices specifically enable independent scaling.",
    "D": "Microservices specifically enable independent deployments."
  },
  "t3-q7": {
    "A": "An API Gateway acts as the single boundary reverse-proxy entry point receiving client traffic and routing it to microservices.",
    "B": "Bare-metal server is physical hardware.",
    "C": "Database engine stores structured data.",
    "D": "CPU scheduler manages operating system processes."
  },
  "t3-q8": {
    "A": "Standard API Gateway responsibilities include reverse proxy routing, token validation, rate limiting, and request transformation.",
    "B": "Dynamic physical RAM modification is hardware virtualization.",
    "C": "API Gateway does not replace database engines.",
    "D": "Hardware manufacturing is industrial production."
  },
  "t3-q9": {
    "A": "Monitoring tracks quantitative telemetry metrics (CPU, RAM, latency) against operational thresholds.",
    "B": "Backup handles data snapshot replication.",
    "C": "Encryption handles cryptography and data protection.",
    "D": "Authentication verifies client identity."
  },
  "t3-q10": {
    "A": "Logs are time-stamped textual event records generated by processes to provide historical audit trails.",
    "B": "Subnets are IP address partitions within virtual networks.",
    "C": "Hypervisors create and run virtual machines.",
    "D": "Containers are isolated application runtimes."
  },
  "t3-q11": {
    "A": "Monitoring focuses on real-time aggregated telemetry metrics; logging records detailed historical event records.",
    "B": "Monitoring tracks metrics, it does not store database backups.",
    "C": "Logging does not increase CPU capacity.",
    "D": "Monitoring and logging serve complementary but distinct observability roles."
  },
  "t3-q12": {
    "A": "Backups are secondary data copies created expressly for restoration after corruption or accidental loss.",
    "B": "Load balancers distribute network traffic.",
    "C": "CDNs optimize edge caching.",
    "D": "API Gateways route API requests."
  },
  "t3-q13": {
    "A": "Disaster Recovery (DR) entails the complete operational workflow of restoring applications and infrastructure following a catastrophic failure.",
    "B": "Authentication verifies identity.",
    "C": "CDN delivers edge content.",
    "D": "Containerization packages applications."
  },
  "t3-q14": {
    "A": "Backup is a copy of data; disaster recovery is the comprehensive strategy for restoring entire systems and services.",
    "B": "Backup is merely one component of a broader DR strategy.",
    "C": "DR is not limited to data encryption.",
    "D": "Backup is used for data protection, not exclusively computer networking."
  },
  "t3-q15": {
    "A": "RTO defines permissible system downtime before services must be back online.",
    "B": "RPO (Recovery Point Objective) specifies the maximum acceptable data loss expressed as a duration back in time.",
    "C": "SLA is the contractual service level agreement.",
    "D": "Latency measures network transmission delay."
  },
  "t3-q16": {
    "A": "RPO governs data loss limits.",
    "B": "RTO (Recovery Time Objective) defines the maximum acceptable delay/downtime required to bring systems fully operational.",
    "C": "Bandwidth measures data transfer capacity.",
    "D": "Throughput measures data processed over time."
  },
  "t3-q17": {
    "A": "Inverted roles.",
    "B": "RPO = Data loss tolerance | RTO = System downtime / recovery time.",
    "C": "RPO/RTO are disaster recovery metrics, not network speed or CPU usage.",
    "D": "RPO/RTO do not measure authentication or authorization."
  },
  "t3-q18": {
    "A": "Hybrid cloud combines on-premises/private infrastructure with a public cloud.",
    "B": "Utilizing two or more independent public cloud vendors (AWS + Azure) constitutes a Multi-Cloud strategy.",
    "C": "Multi-cloud utilizes public clouds.",
    "D": "Both AWS and Azure are public cloud providers."
  },
  "t3-q19": {
    "A": "Cloud bursting dynamically provisions public cloud capacity when on-premises private datacenter capacity hits limits.",
    "B": "Blue-green is a deployment cutover pattern.",
    "C": "Authentication verifies user credentials.",
    "D": "Containerization packages applications."
  },
  "t3-q20": {
    "A": "Terraform is an industry-standard Infrastructure as Code (IaC) tool that provisions infrastructure from declarative files.",
    "B": "Manual provisioning relies on clicking in web consoles.",
    "C": "CDN caches static web assets.",
    "D": "DNS resolves domain names to IPs."
  },
  "t3-q21": {
    "A": "IaC codifies environments into Git repositories, guaranteeing repeatable environment replication and preventing drift.",
    "B": "IaC does not eliminate cloud billing costs.",
    "C": "IaC integrates security policies rather than removing controls.",
    "D": "Software configuration cannot physically prevent physical hardware failure."
  },
  "t3-q22": {
    "A": "CI is the automated process of committing code, triggering builds, and executing automated test suites early.",
    "B": "DR restores services after disruption.",
    "C": "Cloud bursting manages hybrid capacity.",
    "D": "CDN is an edge distribution network."
  },
  "t3-q23": {
    "A": "CD (Continuous Delivery/Deployment) extends CI by automating the release and deployment of validated builds to environments.",
    "B": "Object storage stores unstructured files.",
    "C": "Authentication verifies identity.",
    "D": "Virtualization creates virtual computing resources."
  },
  "t3-q24": {
    "A": "Canary rolls out to a small percentage incrementally.",
    "B": "Blue-Green provisions two parallel environments and performs an instant all-at-once traffic switch via router/load balancer.",
    "C": "Rolling backup is a backup schedule.",
    "D": "Cloud bursting scales to public cloud during peaks."
  },
  "t3-q25": {
    "A": "Blue-green switches all traffic at once between two full environments.",
    "B": "Canary deployment tests new releases against small fractions of live traffic (5% → 25% → 100%) to mitigate blast radius.",
    "C": "Disaster recovery is business continuity.",
    "D": "Backup is data preservation."
  },
  "t3-q26": {
    "A": "Reverses the actual mechanisms.",
    "B": "Blue-Green switches whole traffic between two identical setups; Canary phases in traffic incrementally.",
    "C": "Neither are database backup methods.",
    "D": "Neither are physical storage models."
  },
  "t3-q27": {
    "A": "One server with no backup is a single point of failure.",
    "B": "Redundancy across multiple failure-isolated Availability Zones with health checks and automated failover delivers high availability.",
    "C": "One database with no backup has zero resilience.",
    "D": "A single network link is vulnerable to failure."
  },
  "t3-q28": {
    "A": "A Single Point of Failure (SPOF) is any non-redundant component whose disruption causes total system outage.",
    "B": "CDN distributes and caches static assets.",
    "C": "Load balancer distributes traffic.",
    "D": "API Gateway routes client requests."
  },
  "t3-q29": {
    "A": "Private cloud + public during peaks = Cloud Bursting; Terraform = IaC; 5% user rollout = Canary deployment.",
    "B": "Fails to match cloud bursting or canary criteria.",
    "C": "Fails to match criteria.",
    "D": "Fails to match criteria."
  },
  "t3-q30": {
    "A": "Inverted: RTO is downtime, RPO is data loss.",
    "B": "Inverted: Load balancers distribute traffic; auto scaling adds/removes instances.",
    "C": "RTO (30 min) represents target recovery downtime; RPO (5 min) represents acceptable data-loss window.",
    "D": "Monitoring tracks real-time metrics; logging records discrete historical events."
  }
};

export function getOptionBreakdown(questionId) {
  return optionExplanationsMap[questionId] || null;
}

export function getQuestionsByTier(tier) {
  if (tier === 'all' || !tier) return cloudQuestions;
  return cloudQuestions.filter((q) => Number(q.tier) === Number(tier));
}

export function getQuestionsByTopic(topic) {
  if (topic === 'all' || !topic) return cloudQuestions;
  return cloudQuestions.filter((q) => q.topic === topic);
}

export function filterCloudQuestions({ tier = 'all', topic = 'all', search = '' }) {
  return cloudQuestions.filter((q) => {
    const matchesTier = tier === 'all' || Number(q.tier) === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSearch = !search ||
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.explanation.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase()) ||
      (q.memoryTip && q.memoryTip.toLowerCase().includes(search.toLowerCase()));

    return matchesTier && matchesTopic && matchesSearch;
  });
}

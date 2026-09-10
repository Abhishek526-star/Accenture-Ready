// scratch/enrichQuestions.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '..', 'src', 'data', 'cloudQuestions.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Map of option explanations for all 85 questions
const optionExplanationsMap = {
  't1-q1': {
    A: 'Describes traditional on-premises infrastructure where physical servers are bought and maintained in-house.',
    B: 'Cloud computing is the on-demand delivery of computing resources (compute, storage, databases, networking) over a network.',
    C: 'Cloud computing inherently utilizes network/internet connectivity to deliver services remotely.',
    D: 'Local hard drive storage is personal on-device storage, not network-delivered cloud computing.'
  },
  't1-q2': {
    A: 'SaaS provides complete ready-to-use software directly to users without infrastructure management.',
    B: 'PaaS provider manages the OS and runtime platform while developer focuses on application code.',
    C: 'IaaS gives raw compute infrastructure (VMs, storage, networking) where the customer manages the OS and applications.',
    D: 'FaaS is an event-driven serverless function execution model.'
  },
  't1-q3': {
    A: 'IaaS requires the customer to configure and manage the operating system, runtime, and server settings.',
    B: 'PaaS handles underlying infrastructure, servers, OS, and runtime so developers can deploy code directly.',
    C: 'SaaS delivers finished software applications to end users, not an application deployment platform.',
    D: 'Private Cloud is a deployment model, not a service model.'
  },
  't1-q4': {
    A: 'A virtual machine is an IaaS compute resource.',
    B: 'Cloud storage infrastructure is an IaaS offering.',
    C: 'Gmail is a complete, ready-to-use email application consumed directly by end users over the web.',
    D: 'A virtual network is an infrastructure-as-a-service networking construct.'
  },
  't1-q5': {
    A: 'SaaS abstracts all infrastructure, platform, and operating system management completely.',
    B: 'PaaS abstracts and manages the underlying OS for developers.',
    C: 'With IaaS, customers directly install, configure, patch, and manage the guest operating system.',
    D: 'IaaS clearly provides full operating system control.'
  },
  't1-q6': {
    A: 'Private cloud infrastructure is dedicated exclusively to one single organization.',
    B: 'Public cloud infrastructure is owned by a provider and shared across multi-tenant customers.',
    C: 'Community cloud is shared only by organizations with common requirements.',
    D: 'Hybrid cloud combines public and private cloud environments.'
  },
  't1-q7': {
    A: 'Public cloud serves multiple independent customers over shared hardware.',
    B: 'Private cloud infrastructure is operated and dedicated exclusively to a single organization.',
    C: 'Hybrid cloud combines private and public environments.',
    D: 'Community cloud is shared across multiple partner entities.'
  },
  't1-q8': {
    A: 'Public cloud hosts all workloads in third-party shared infrastructure.',
    B: 'Private cloud runs entirely in a dedicated company environment.',
    C: 'Combines sensitive private cloud workloads with scalable public cloud capacity (Hybrid).',
    D: 'Community cloud shares resources among organizations with common industry needs.'
  },
  't1-q9': {
    A: 'DNS performs domain name resolution to IP addresses.',
    B: 'Virtualization creates virtual computing resources (VMs, disks) on physical hardware.',
    C: 'Encryption is a security mechanism to protect data.',
    D: 'Virtualization enables cloud hosting, but does not replace the Internet.'
  },
  't1-q10': {
    A: 'A compiler translates source code into machine code.',
    B: 'A hypervisor creates, manages, and isolates virtual machines on physical hardware.',
    C: 'A firewall filters and controls network traffic.',
    D: 'A DNS server resolves domain names.'
  },
  't1-q11': {
    A: 'Type 1 hypervisors (Bare-Metal) run directly on the physical hardware without a host OS.',
    B: 'Hypervisors run at the hardware or OS virtualization layer, not inside a browser.',
    C: 'Type 1 hypervisors do not require Windows host OS; they run directly on physical hardware.',
    D: 'Running on top of a host OS describes a Type 2 (Hosted) hypervisor.'
  },
  't1-q12': {
    A: 'Hardware → Hypervisor → VM represents a Type 1 (Bare-Metal) hypervisor.',
    B: 'Hardware → Host OS → Hypervisor → VM represents a Type 2 (Hosted) hypervisor.',
    C: 'Hardware → VM → Hypervisor is an incorrect architecture order.',
    D: 'A VM does not host a hypervisor on physical hardware.'
  },
  't1-q13': {
    A: 'Horizontal scaling adds more machine instances.',
    B: 'Vertical scaling (Scale Up) increases CPU and RAM resources of the existing server machine.',
    C: 'Geographic scaling distributes servers across different global regions.',
    D: 'Multicast is a networking communication method.'
  },
  't1-q14': {
    A: 'Vertical scaling would increase CPU/RAM on existing servers.',
    B: 'Horizontal scaling (Scale Out) increases the number of server instances from 3 to 10.',
    C: 'Static scaling maintains fixed capacity without adjustment.',
    D: 'Routing directs network traffic between hosts, not provisioning servers.'
  },
  't1-q15': {
    A: 'Virtualization creates virtual machines but does not describe automatic resource adjustment.',
    B: 'Elasticity dynamically and automatically adds and removes resources in response to changing demand.',
    C: 'Static routing uses fixed routing tables.',
    D: 'Encryption protects data confidentiality.'
  },
  't1-q16': {
    A: 'Scalability is the ability to handle increased workload; elasticity is dynamically adjusting resources with demand.',
    B: 'Scalability and elasticity are closely related but distinct concepts.',
    C: 'Elasticity concerns resource adjustment, not data encryption.',
    D: 'Scalability applies to cloud and distributed architectures, not only physical servers.'
  },
  't1-q17': {
    A: 'High availability ensures a service continues running when one server fails by failing over to another.',
    B: 'Data compression reduces file size.',
    C: 'DNS resolution translates hostnames to IP addresses.',
    D: 'Virtualization creates virtual machines but High Availability is the architectural resilience principle.'
  },
  't1-q18': {
    A: 'Fault tolerance is the ability to continue operating without interruption despite component failure.',
    B: 'SaaS is a software service delivery model.',
    C: 'DNS is a naming resolution protocol.',
    D: 'Horizontal routing is not a standard resilience classification.'
  },
  't1-q19': {
    A: 'Reliability refers to a system\'s ability to perform correctly and consistently over time without failure.',
    B: 'Latency is data transmission delay.',
    C: 'Scalability concerns handling increased workload.',
    D: 'Virtualization creates virtual computing resources.'
  },
  't1-q20': {
    A: 'OpEx refers to ongoing operational spending.',
    B: 'CapEx (Capital Expenditure) is upfront capital investment in physical assets (servers, datacenter).',
    C: 'SaaS is a software service model.',
    D: 'Elasticity is dynamic resource adjustment.'
  },
  't1-q21': {
    A: 'CapEx is upfront investment in physical hardware assets.',
    B: 'Cloud consumption shifts spending toward operational expenditure (OpEx) on a pay-as-you-go model.',
    C: 'Hardware depreciation applies to purchased physical equipment (CapEx).',
    D: 'Physical networking is maintained by cloud providers.'
  },
  't1-q22': {
    A: 'On-demand self-service is one of the 5 NIST essential cloud characteristics.',
    B: 'Resource pooling is one of the 5 NIST essential cloud characteristics.',
    C: 'Rapid elasticity is one of the 5 NIST essential cloud characteristics.',
    D: 'Cloud aims to eliminate manual physical hardware installation for users through self-service.'
  },
  't1-q23': {
    A: 'Resource pooling dynamically allocates computing resources from a shared pool to multiple multi-tenant customers.',
    B: 'Static routing defines fixed network paths.',
    C: 'Encryption secures data via cryptographic ciphers.',
    D: 'Fault injection is a chaos engineering testing technique.'
  },
  't1-q24': {
    A: 'Measured service tracks and meters storage, compute, and network consumption for monitoring and billing.',
    B: 'Private cloud is a dedicated deployment model.',
    C: 'Vertical scaling increases hardware capacity on a single node.',
    D: 'A hypervisor is VM management software.'
  },
  't1-q25': {
    A: 'IaaS requires managing the OS and manual scaling doesn\'t scale automatically.',
    B: 'PaaS abstracts server and OS management while elasticity automatically scales resources with demand.',
    C: 'Private cloud with physical servers requires complete server administration.',
    D: 'On-premises hardware contradicts the goal of avoiding server management.'
  },

  // Tier 2
  't2-q1': {
    A: 'Block storage is better suited to virtual disks, operating systems, and transactional databases.',
    B: 'Object storage is designed to store massive amounts of unstructured data like images, videos, and backups.',
    C: 'CPU cache is high-speed volatile memory inside processors.',
    D: 'Register storage is tiny, ultra-fast storage inside the CPU.'
  },
  't2-q2': {
    A: 'Object storage is accessed via HTTP APIs and not used as a VM\'s traditional boot disk.',
    B: 'Block storage behaves like a persistent virtual disk attached to a VM (e.g. AWS EBS).',
    C: 'CDN caches and distributes content globally.',
    D: 'DNS resolves domain names to IP addresses.'
  },
  't2-q3': {
    A: 'File storage provides a shared hierarchical filesystem accessible by multiple application servers simultaneously.',
    B: 'Block storage generally attaches to single instances rather than a shared filesystem.',
    C: 'CPU cache is non-persistent processor memory.',
    D: 'Object storage uses object keys rather than traditional file/folder directory semantics.'
  },
  't2-q4': {
    A: 'VM boot disks commonly use block storage, not object storage.',
    B: 'Massive scale media workloads use object storage, not block storage.',
    C: 'File storage provides traditional shared filesystem semantics (e.g. AWS EFS).',
    D: 'CDN caches web content; it is not a database disk.'
  },
  't2-q5': {
    A: 'Relational databases store structured data in tables consisting of rows and columns using SQL.',
    B: 'Object storage stores unstructured objects with metadata.',
    C: 'DNS maps domain names to IP addresses.',
    D: 'CDN distributes and caches static assets.'
  },
  't2-q6': {
    A: 'NoSQL databases offer flexible schemas and horizontal scalability for massive distributed workloads.',
    B: 'Relational databases use structured schemas and usually scale vertically.',
    C: 'DNS is a network naming system.',
    D: 'File storage provides file hierarchies, not a database engine.'
  },
  't2-q7': {
    A: 'VPC stands for Virtual Private Cloud (a logically isolated virtual network).',
    B: 'Virtual Processing Cache is an incorrect term.',
    C: 'Variable Public Computer is an incorrect term.',
    D: 'Virtual Protocol Controller is an incorrect term.'
  },
  't2-q8': {
    A: 'Within a VPC, you configure IP CIDR ranges, subnets, route tables, and gateways.',
    B: 'CPU instruction sets are hardware features, not VPC constructs.',
    C: 'Keyboard layouts are OS/client configurations.',
    D: 'Monitor resolution is display hardware.'
  },
  't2-q9': {
    A: 'A Region is a geographic cloud area.',
    B: 'Subnets divide a VPC\'s IP address range into smaller logical subnetworks.',
    C: 'An Availability Zone is a physical datacenter facility within a region.',
    D: 'Containers are application runtime environments.'
  },
  't2-q10': {
    A: 'Private subnets do not have a direct inbound route from the Internet Gateway.',
    B: 'Public subnets accept direct inbound Internet traffic.',
    C: 'DNS zones manage domain name resolution.',
    D: 'CDN edge locations cache content close to users.'
  },
  't2-q11': {
    A: 'An Internet-facing load balancer resides in a public subnet to receive inbound internet traffic.',
    B: 'A private subnet has no direct inbound internet route.',
    C: 'CPU subnet is not a networking concept.',
    D: 'Database subnet is not a standard subnet classification.'
  },
  't2-q12': {
    A: 'A load balancer distributes incoming network traffic across multiple backend servers.',
    B: 'DNS resolves hostnames, but does not provide backend request-level load balancing.',
    C: 'Hypervisor manages virtual machines.',
    D: 'Object storage stores data.'
  },
  't2-q13': {
    A: 'Health checking monitors backend nodes and automatically stops routing traffic to unhealthy instances.',
    B: 'Object storage stores files and media.',
    C: 'DNS resolves names to IPs.',
    D: 'Encryption protects data confidentiality.'
  },
  't2-q14': {
    A: 'Auto scaling dynamically changes resource capacity based on demand and CPU utilization metrics.',
    B: 'CDN caches content at edge locations.',
    C: 'DNS maps names to network addresses.',
    D: 'Static routing uses fixed paths.'
  },
  't2-q15': {
    A: 'Inverted roles: Load balancers distribute traffic; auto scaling adds/removes servers.',
    B: 'Load balancer distributes traffic; auto scaling adjusts resource capacity.',
    C: 'Neither only stores files.',
    D: 'Neither are database technologies.'
  },
  't2-q16': {
    A: 'CDN caches and delivers static content (images/videos) from edge points close to users.',
    B: 'IAM manages access and user identities.',
    C: 'Hypervisor virtualizes hardware.',
    D: 'DHCP dynamically assigns network IP addresses.'
  },
  't2-q17': {
    A: 'A running container is an active instance created from an image.',
    B: 'A Docker image is a packaged, immutable template used to create containers.',
    C: 'Physical server is hardware infrastructure.',
    D: 'A region is a geographic territory.'
  },
  't2-q18': {
    A: 'A container is not physical hardware.',
    B: 'A container is an isolated application environment that shares the host OS kernel.',
    C: 'A region is cloud geographic infrastructure.',
    D: 'A DNS record is naming configuration.'
  },
  't2-q19': {
    A: 'Containers share the host OS kernel; they do not include a complete guest OS.',
    B: 'VMs include a full guest OS, while containers share the underlying host OS kernel.',
    C: 'VMs run full applications inside their guest OS.',
    D: 'Multiple containers can run concurrently on a single host server.'
  },
  't2-q20': {
    A: 'Kubernetes is an open-source platform for container orchestration (scaling, healing, deployment).',
    B: 'DNS registration is a naming service.',
    C: 'Physical cabling is datacenter hardware work.',
    D: 'Database normalization is a relational database design technique.'
  },
  't2-q21': {
    A: 'A Region is cloud geography.',
    B: 'A Pod is the smallest deployable execution unit in Kubernetes.',
    C: 'A VPC is a virtual network.',
    D: 'A Bucket is an object storage container.'
  },
  't2-q22': {
    A: 'IAM controls identities and manages access permissions across cloud resources.',
    B: 'Object storage stores images.',
    C: 'Hardware scaling increases CPU power.',
    D: 'CDN caches video streams.'
  },
  't2-q23': {
    A: 'Authorization determines what actions an authenticated user is permitted to perform.',
    B: 'Authentication verifies the user\'s identity based on credentials.',
    C: 'Encryption at rest protects stored disk data.',
    D: 'Load balancing distributes traffic.'
  },
  't2-q24': {
    A: 'Authentication confirms identity (who the user is).',
    B: 'Authorization defines permissions and determines what actions the user is allowed to perform.',
    C: 'Virtualization creates virtual computing resources.',
    D: 'CDN optimizes content delivery.'
  },
  't2-q25': {
    A: 'The Principle of Least Privilege gives users/services only the minimum permissions they actually need.',
    B: 'Maximum privilege is overly permissive and insecure.',
    C: 'Open access exposes resources publicly.',
    D: 'Resource pooling is a multi-tenant infrastructure property.'
  },
  't2-q26': {
    A: 'Encryption in transit protects data moving across a network.',
    B: 'Encryption at rest secures data stored persistently on disk, databases, or object storage.',
    C: 'Authentication confirms user identity.',
    D: 'Load balancing distributes traffic.'
  },
  't2-q27': {
    A: 'Data at rest is stored persistently on disk.',
    B: 'Data in transit is data moving across a network, encrypted using TLS/HTTPS.',
    C: 'CPU registers hold active CPU instructions.',
    D: 'Database schema is table structure.'
  },
  't2-q28': {
    A: 'The customer also retains security responsibilities (data, access, OS in IaaS).',
    B: 'The cloud provider secures physical facilities, hardware, and hypervisors.',
    C: 'Cloud security is shared: provider secures infrastructure OF the cloud, customer secures data IN the cloud.',
    D: 'Both provider and customer share responsibilities.'
  },
  't2-q29': {
    A: 'A region contains datacenters, not an individual VM.',
    B: 'An Availability Zone is an isolated facility within a region, not an entire country.',
    C: 'A region is a geographic cloud area that contains multiple failure-isolated Availability Zones.',
    D: 'Region and Availability Zone have distinctly different architectural scopes.'
  },
  't2-q30': {
    A: 'Load balancer routes traffic, private subnets protect app servers, object storage stores media, and auto scaling adjusts capacity.',
    B: 'Functions are scrambled: load balancers do not store images, and IAM does not perform auto scaling.',
    C: 'Private subnets can have outbound internet access via NAT; only direct inbound is blocked.',
    D: 'IAM manages identities and access permissions, not CPU capacity.'
  },

  // Tier 3
  't3-q1': {
    A: 'On-premises servers require complete manual hardware and facility maintenance.',
    B: 'Serverless abstracts server, OS, and infrastructure management directly to the cloud provider.',
    C: 'Virtualization still requires managing guest operating systems and hypervisors.',
    D: 'Dedicated physical servers require manual provisioning and patching.'
  },
  't3-q2': {
    A: 'FaaS (Function as a Service) is specifically designed for event-driven execution triggered by cloud events.',
    B: 'IaaS provides raw virtual machines which must run continuously.',
    C: 'Block storage provides disk volumes (EBS) for VMs.',
    D: 'CDN caches and distributes static assets globally.'
  },
  't3-q3': {
    A: 'Servers physically exist in datacenters; they are simply operated by the cloud vendor.',
    B: 'Serverless is the overarching architecture; FaaS represents its event-driven compute paradigm.',
    C: 'FaaS completely abstracts server administration from developers.',
    D: 'Collocation involves renting physical datacenter space, opposite to serverless.'
  },
  't3-q4': {
    A: 'Monolith packages all functional modules into a single tightly-coupled runtime.',
    B: 'Microservices decompose business logic into independently developable, deployable, and scalable units.',
    C: 'Peer-to-peer (P2P) is a decentralized network without central servers.',
    D: 'Batch architecture processes bulk jobs sequentially.'
  },
  't3-q5': {
    A: 'Co-deployment is a drawback of monolithic architectures.',
    B: 'Granular control over individual microservices enables targeted scaling and continuous deployment.',
    C: 'Microservices increase network communication via inter-service REST/gRPC calls.',
    D: 'Microservices encourage the database-per-service pattern, not a single shared database.'
  },
  't3-q6': {
    A: 'Distributed tracing, network latency, data consistency, and partial failures introduce operational complexity.',
    B: 'Microservices rely heavily on networking layers.',
    C: 'Microservices specifically enable independent scaling.',
    D: 'Microservices specifically enable independent deployments.'
  },
  't3-q7': {
    A: 'An API Gateway acts as the single boundary reverse-proxy entry point receiving client traffic and routing it to microservices.',
    B: 'Bare-metal server is physical hardware.',
    C: 'Database engine stores structured data.',
    D: 'CPU scheduler manages operating system processes.'
  },
  't3-q8': {
    A: 'Standard API Gateway responsibilities include reverse proxy routing, token validation, rate limiting, and request transformation.',
    B: 'Dynamic physical RAM modification is hardware virtualization.',
    C: 'API Gateway does not replace database engines.',
    D: 'Hardware manufacturing is industrial production.'
  },
  't3-q9': {
    A: 'Monitoring tracks quantitative telemetry metrics (CPU, RAM, latency) against operational thresholds.',
    B: 'Backup handles data snapshot replication.',
    C: 'Encryption handles cryptography and data protection.',
    D: 'Authentication verifies client identity.'
  },
  't3-q10': {
    A: 'Logs are time-stamped textual event records generated by processes to provide historical audit trails.',
    B: 'Subnets are IP address partitions within virtual networks.',
    C: 'Hypervisors create and run virtual machines.',
    D: 'Containers are isolated application runtimes.'
  },
  't3-q11': {
    A: 'Monitoring focuses on real-time aggregated telemetry metrics; logging records detailed historical event records.',
    B: 'Monitoring tracks metrics, it does not store database backups.',
    C: 'Logging does not increase CPU capacity.',
    D: 'Monitoring and logging serve complementary but distinct observability roles.'
  },
  't3-q12': {
    A: 'Backups are secondary data copies created expressly for restoration after corruption or accidental loss.',
    B: 'Load balancers distribute network traffic.',
    C: 'CDNs optimize edge caching.',
    D: 'API Gateways route API requests.'
  },
  't3-q13': {
    A: 'Disaster Recovery (DR) entails the complete operational workflow of restoring applications and infrastructure following a catastrophic failure.',
    B: 'Authentication verifies identity.',
    C: 'CDN delivers edge content.',
    D: 'Containerization packages applications.'
  },
  't3-q14': {
    A: 'Backup is a copy of data; disaster recovery is the comprehensive strategy for restoring entire systems and services.',
    B: 'Backup is merely one component of a broader DR strategy.',
    C: 'DR is not limited to data encryption.',
    D: 'Backup is used for data protection, not exclusively computer networking.'
  },
  't3-q15': {
    A: 'RTO defines permissible system downtime before services must be back online.',
    B: 'RPO (Recovery Point Objective) specifies the maximum acceptable data loss expressed as a duration back in time.',
    C: 'SLA is the contractual service level agreement.',
    D: 'Latency measures network transmission delay.'
  },
  't3-q16': {
    A: 'RPO governs data loss limits.',
    B: 'RTO (Recovery Time Objective) defines the maximum acceptable delay/downtime required to bring systems fully operational.',
    C: 'Bandwidth measures data transfer capacity.',
    D: 'Throughput measures data processed over time.'
  },
  't3-q17': {
    A: 'Inverted roles.',
    B: 'RPO = Data loss tolerance | RTO = System downtime / recovery time.',
    C: 'RPO/RTO are disaster recovery metrics, not network speed or CPU usage.',
    D: 'RPO/RTO do not measure authentication or authorization.'
  },
  't3-q18': {
    A: 'Hybrid cloud combines on-premises/private infrastructure with a public cloud.',
    B: 'Utilizing two or more independent public cloud vendors (AWS + Azure) constitutes a Multi-Cloud strategy.',
    C: 'Multi-cloud utilizes public clouds.',
    D: 'Both AWS and Azure are public cloud providers.'
  },
  't3-q19': {
    A: 'Cloud bursting dynamically provisions public cloud capacity when on-premises private datacenter capacity hits limits.',
    B: 'Blue-green is a deployment cutover pattern.',
    C: 'Authentication verifies user credentials.',
    D: 'Containerization packages applications.'
  },
  't3-q20': {
    A: 'Terraform is an industry-standard Infrastructure as Code (IaC) tool that provisions infrastructure from declarative files.',
    B: 'Manual provisioning relies on clicking in web consoles.',
    C: 'CDN caches static web assets.',
    D: 'DNS resolves domain names to IPs.'
  },
  't3-q21': {
    A: 'IaC codifies environments into Git repositories, guaranteeing repeatable environment replication and preventing drift.',
    B: 'IaC does not eliminate cloud billing costs.',
    C: 'IaC integrates security policies rather than removing controls.',
    D: 'Software configuration cannot physically prevent physical hardware failure.'
  },
  't3-q22': {
    A: 'CI is the automated process of committing code, triggering builds, and executing automated test suites early.',
    B: 'DR restores services after disruption.',
    C: 'Cloud bursting manages hybrid capacity.',
    D: 'CDN is an edge distribution network.'
  },
  't3-q23': {
    A: 'CD (Continuous Delivery/Deployment) extends CI by automating the release and deployment of validated builds to environments.',
    B: 'Object storage stores unstructured files.',
    C: 'Authentication verifies identity.',
    D: 'Virtualization creates virtual computing resources.'
  },
  't3-q24': {
    A: 'Canary rolls out to a small percentage incrementally.',
    B: 'Blue-Green provisions two parallel environments and performs an instant all-at-once traffic switch via router/load balancer.',
    C: 'Rolling backup is a backup schedule.',
    D: 'Cloud bursting scales to public cloud during peaks.'
  },
  't3-q25': {
    A: 'Blue-green switches all traffic at once between two full environments.',
    B: 'Canary deployment tests new releases against small fractions of live traffic (5% → 25% → 100%) to mitigate blast radius.',
    C: 'Disaster recovery is business continuity.',
    D: 'Backup is data preservation.'
  },
  't3-q26': {
    A: 'Reverses the actual mechanisms.',
    B: 'Blue-Green switches whole traffic between two identical setups; Canary phases in traffic incrementally.',
    C: 'Neither are database backup methods.',
    D: 'Neither are physical storage models.'
  },
  't3-q27': {
    A: 'One server with no backup is a single point of failure.',
    B: 'Redundancy across multiple failure-isolated Availability Zones with health checks and automated failover delivers high availability.',
    C: 'One database with no backup has zero resilience.',
    D: 'A single network link is vulnerable to failure.'
  },
  't3-q28': {
    A: 'A Single Point of Failure (SPOF) is any non-redundant component whose disruption causes total system outage.',
    B: 'CDN distributes and caches static assets.',
    C: 'Load balancer distributes traffic.',
    D: 'API Gateway routes client requests.'
  },
  't3-q29': {
    A: 'Private cloud + public during peaks = Cloud Bursting; Terraform = IaC; 5% user rollout = Canary deployment.',
    B: 'Fails to match cloud bursting or canary criteria.',
    C: 'Fails to match criteria.',
    D: 'Fails to match criteria.'
  },
  't3-q30': {
    A: 'Inverted: RTO is downtime, RPO is data loss.',
    B: 'Inverted: Load balancers distribute traffic; auto scaling adds/removes instances.',
    C: 'RTO (30 min) represents target recovery downtime; RPO (5 min) represents acceptable data-loss window.',
    D: 'Monitoring tracks real-time metrics; logging records discrete historical events.'
  }
};

const exportSnippet = `\nexport const optionExplanationsMap = ${JSON.stringify(optionExplanationsMap, null, 2)};\n`;

if (!fileContent.includes('optionExplanationsMap')) {
  fileContent += exportSnippet;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log('Successfully appended optionExplanationsMap to cloudQuestions.js');
} else {
  console.log('optionExplanationsMap already present');
}

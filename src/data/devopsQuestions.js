// src/data/devopsQuestions.js
/**
 * Accenture DevOps Assessment Question Bank (35 High-Yield Solved MCQs) & Study Notes
 * Source: Accenture DevOps — Tier 1 Master Guide (Fundamentals, CI/CD, Git, Docker, Kubernetes & Linux Scripting)
 *
 * Tier 1: 7 MCQs (DevOps Fundamentals, Culture, Traditional vs DevOps, Tool Matrix, Metrics)
 * Tier 2: 7 MCQs (CI/CD Pipeline Architecture, Delivery vs Deployment, Quality Gates, Troubleshooting)
 * Tier 3: 7 MCQs (Git DVCS Stages, Essential Commands, Branching, Merge vs Rebase, Golden Rule)
 * Tier 4: 7 MCQs (Docker Mechanics, Image vs Container, Architecture, Dockerfile, CMD vs ENTRYPOINT, Multi-Stage)
 * Tier 5: 7 MCQs (Kubernetes Control Plane & Nodes, Pods, Deployments, Services, NetworkPolicy, Linux & Shell Scripting)
 */

export const DEVOPS_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '35 MCQs', description: 'Complete Accenture DevOps Assessment Bank' },
  { id: 1, title: 'Tier 1: DevOps Fundamentals', badge: '7 MCQs', description: 'Culture, Traditional vs DevOps Model, Tool Matrix & Metrics' },
  { id: 2, title: 'Tier 2: CI/CD Pipeline Architecture', badge: '7 MCQs', description: 'CI Principles, Delivery vs Deployment, Quality Gates & Troubleshooting' },
  { id: 3, title: 'Tier 3: Git & Version Control', badge: '7 MCQs', description: 'Internal Stages, Essential Commands, Branching, Merge vs Rebase' },
  { id: 4, title: 'Tier 4: Docker & Containerization', badge: '7 MCQs', description: 'Image vs Container, Dockerfile, CMD vs ENTRYPOINT, Multi-Stage Builds' },
  { id: 5, title: 'Tier 5: Kubernetes & Linux Scripting', badge: '7 MCQs', description: 'K8s Cluster Architecture, Pods, Deployments, Services, Octal Permissions & Bash' }
];

export const DEVOPS_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'DevOps Fundamentals & Culture', label: 'DevOps Fundamentals & Culture (Traditional vs DevOps, Tool Matrix, Telemetry)' },
  { id: 'CI/CD Pipeline Architecture', label: 'CI/CD Pipelines (Continuous Delivery vs Deployment, Quality Gates, Troubleshooting)' },
  { id: 'Git & Version Control', label: 'Git & Version Control (DVCS Stages, Branching, Merge vs Rebase, Conflict Handling)' },
  { id: 'Docker & Containerization', label: 'Docker & Containers (Image vs Container, Dockerfile, CMD vs ENTRYPOINT, Multi-Stage)' },
  { id: 'Kubernetes Orchestration', label: 'Kubernetes Architecture (Control Plane, Pods, Deployments, Services, NetworkPolicy)' },
  { id: 'Linux Systems & Shell Scripting', label: 'Linux Administration & Bash (Processes, Octal Permissions, Logs, Shell Scripts)' }
];

export const devopsQuestions = [
  // ==========================================
  // TIER 1: DEVOPS FUNDAMENTALS & CULTURE (7 Qs)
  // ==========================================
  {
    id: 'devops-1-01',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'How should a candidate accurately define DevOps in an Accenture technical interview?',
    options: [
      { id: 'A', text: 'DevOps is an automated open-source software tool like Jenkins or Docker.' },
      { id: 'B', text: 'DevOps is a combination of culture, practices, processes, and automation uniting development and operations.' },
      { id: 'C', text: 'DevOps is a dedicated programming language used exclusively for cloud infrastructure.' },
      { id: 'D', text: 'DevOps is a substitute title for traditional sysadmins who write bash scripts.' }
    ],
    correctAnswer: 'B',
    explanation: 'DevOps is NOT a standalone tool. It is a philosophy, cultural movement, and set of practices that integrates software development (Dev) and IT operations (Ops) to shorten development lifecycles and provide continuous delivery with high quality.',
    accentureTip: 'Never answer "DevOps is a tool". Always answer: DevOps is a culture, process, and automated methodology.'
  },
  {
    id: 'devops-1-02',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'Which of the following was a classic flaw of the Traditional Waterfall/Silo Model that DevOps specifically eliminates?',
    options: [
      { id: 'A', text: 'Automated continuous unit testing' },
      { id: 'B', text: 'Infrastructure as Code (IaC) templates' },
      { id: 'C', text: '"Works on my machine" syndrome and delayed feedback loops' },
      { id: 'D', text: 'Real-time telemetry and automated rollbacks' }
    ],
    correctAnswer: 'C',
    explanation: 'In the traditional model, developers wrote code and "threw it over the wall" to operations. Differences in runtime environments caused the notorious "works on my machine" failure, coupled with slow manual releases and finger-pointing.',
    accentureTip: 'DevOps solves the "wall of confusion" between Dev and Ops through shared ownership and containerized consistency.'
  },
  {
    id: 'devops-1-03',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'What is the correct sequential order of the 8 core stages in the DevOps lifecycle loop?',
    options: [
      { id: 'A', text: 'Code → Plan → Deploy → Build → Test → Release → Monitor → Operate' },
      { id: 'B', text: 'Plan → Code → Build → Test → Release → Deploy → Operate → Monitor' },
      { id: 'C', text: 'Build → Test → Plan → Code → Deploy → Release → Operate → Monitor' },
      { id: 'D', text: 'Plan → Deploy → Test → Build → Code → Release → Monitor → Operate' }
    ],
    correctAnswer: 'B',
    explanation: 'The DevOps infinity loop follows: Plan (Jira) → Code (Git) → Build (Maven/npm) → Test (JUnit/Selenium) → Release (Artifact registries) → Deploy (K8s/Docker/Cloud) → Operate (Autoscaling) → Monitor (Prometheus/Grafana).',
    accentureTip: 'Remember: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor (PCBTRDOM).'
  },
  {
    id: 'devops-1-04',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'Which tool pairing correctly maps the DevOps lifecycle requirement to its primary industry-standard tool?',
    options: [
      { id: 'A', text: 'Infrastructure as Code (IaC) → SonarQube' },
      { id: 'B', text: 'Container Orchestration → Kubernetes (K8s)' },
      { id: 'C', text: 'Static Application Security Testing (SAST) → Ansible' },
      { id: 'D', text: 'Continuous Integration Engine → Prometheus' }
    ],
    correctAnswer: 'B',
    explanation: 'Kubernetes is the industry standard container orchestrator. Terraform is used for IaC, SonarQube for static code quality/SAST, Ansible for configuration management, and Jenkins/GitHub Actions for CI engines.',
    accentureTip: 'DevOps Tool Matrix: K8s = Container Orchestration; Terraform = IaC; SonarQube = Code Quality.'
  },
  {
    id: 'devops-1-05',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'Why is the statement "DevOps is Jenkins" categorized as a conceptual trap in technical interviews?',
    options: [
      { id: 'A', text: 'Because Jenkins is obsolete and no longer used in enterprise companies.' },
      { id: 'B', text: 'Because Jenkins is only a CI automation server, whereas DevOps encompasses culture, collaboration, IaC, monitoring, security, and continuous delivery.' },
      { id: 'C', text: 'Because Jenkins only runs on Windows OS and cannot build containers.' },
      { id: 'D', text: 'Because Jenkins is a monitoring tool like Grafana.' }
    ],
    correctAnswer: 'B',
    explanation: 'Jenkins is merely an automation server tool for running pipeline scripts. DevOps is a comprehensive framework encompassing culture, collaboration, CI/CD, IaC, DevSecOps, monitoring, and observability.',
    accentureTip: 'Interviewers ask this to test whether candidates understand the broad ecosystem or just one single software tool.'
  },
  {
    id: 'devops-1-06',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'In the "Monitor" phase of a modern DevOps system, which of the following telemetry metrics is most crucial for verifying user experience?',
    options: [
      { id: 'A', text: 'Git commit count per developer per day' },
      { id: 'B', text: 'Physical weight of the server rack' },
      { id: 'C', text: 'p95/p99 latency, HTTP 5xx error rate, and request throughput' },
      { id: 'D', text: 'Number of lines of comments in code' }
    ],
    correctAnswer: 'C',
    explanation: 'Operational monitoring relies on Golden Signals: Latency (p95/p99 percentiles), Error Rate (HTTP 5xx server errors), Traffic/Throughput (requests/sec), and Saturation (CPU, Memory, Disk).',
    accentureTip: 'Golden Signals for DevOps observability: Latency, Traffic, Errors, and Saturation.'
  },
  {
    id: 'devops-1-07',
    tier: 1,
    tierName: 'Tier 1: DevOps Fundamentals',
    topic: 'DevOps Fundamentals & Culture',
    question: 'Which tool is primarily classified as an Infrastructure as Code (IaC) declarative provisioning engine?',
    options: [
      { id: 'A', text: 'Terraform' },
      { id: 'B', text: 'Selenium' },
      { id: 'C', text: 'Nexus' },
      { id: 'D', text: 'JUnit' }
    ],
    correctAnswer: 'A',
    explanation: 'HashiCorp Terraform allows engineers to declare cloud infrastructure (VPCs, VMs, clusters) in declarative HCL configuration files, version-controlled like code.',
    accentureTip: 'Terraform = Declarative Multi-Cloud Infrastructure as Code (IaC).'
  },

  // ==========================================
  // TIER 2: CI/CD PIPELINE ARCHITECTURE (7 Qs)
  // ==========================================
  {
    id: 'devops-2-01',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'What is the fundamental goal of Continuous Integration (CI)?',
    options: [
      { id: 'A', text: 'To deploy untested code straight to live production servers without notifications.' },
      { id: 'B', text: 'To frequently merge developer code into a shared repository and automatically build and test it to detect bugs early.' },
      { id: 'C', text: 'To replace human developers with automated machine learning models.' },
      { id: 'D', text: 'To store database backups on tape drives once a month.' }
    ],
    correctAnswer: 'B',
    explanation: 'Continuous Integration (CI) encourages developers to commit code frequently. An automated build and test pipeline verifies every commit immediately, catching syntax errors and test regressions early.',
    accentureTip: 'CI = Frequent integration + automated build + automated unit testing for rapid feedback.'
  },
  {
    id: 'devops-2-02',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'A pipeline automatically builds code, runs tests, and deploys artifacts to staging. However, pushing code to production requires a lead approval click. What is this workflow called?',
    options: [
      { id: 'A', text: 'Continuous Deployment' },
      { id: 'B', text: 'Continuous Delivery' },
      { id: 'C', text: 'Manual Waterfall' },
      { id: 'D', text: 'Shadow IT' }
    ],
    correctAnswer: 'B',
    explanation: 'In Continuous Delivery, every build is verified and ready for production, but the final release is gated by a manual human approval step. In Continuous Deployment, there is NO manual approval gate; code flows automatically to production.',
    accentureTip: 'Manual approval gate to production = Continuous Delivery. Zero manual gates = Continuous Deployment.'
  },
  {
    id: 'devops-2-03',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'What distinguishes Continuous Deployment from Continuous Delivery?',
    options: [
      { id: 'A', text: 'Continuous Delivery does not run automated tests.' },
      { id: 'B', text: 'Continuous Deployment eliminates all manual approval gates, releasing every passed commit to production automatically.' },
      { id: 'C', text: 'Continuous Deployment only runs on developer laptops.' },
      { id: 'D', text: 'Continuous Delivery does not support Docker containers.' }
    ],
    correctAnswer: 'B',
    explanation: 'Continuous Deployment is the fully automated evolution where every change that passes all automated tests and quality gates is deployed directly into production without human intervention.',
    accentureTip: 'Delivery = automated up to staging + manual trigger for prod. Deployment = 100% automated all the way to prod.'
  },
  {
    id: 'devops-2-04',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'In an enterprise CI/CD pipeline, what is the role of a tool like SonarQube?',
    options: [
      { id: 'A', text: 'Container orchestration across physical servers' },
      { id: 'B', text: 'Static Code Analysis, code smell detection, and enforcing Quality Gates before building images' },
      { id: 'C', text: 'Generating SSL/TLS certificates for web browsers' },
      { id: 'D', text: 'Sending SMS text messages to end users' }
    ],
    correctAnswer: 'B',
    explanation: 'SonarQube inspects source code for bugs, security vulnerabilities (SAST), code smells, and unit test coverage. If coverage drops below a set threshold, the Quality Gate fails and blocks the pipeline.',
    accentureTip: 'SonarQube = Static Analysis & Quality Gate keeper in the CI pipeline.'
  },
  {
    id: 'devops-2-05',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'Which tool is commonly used to scan Docker container images for known Common Vulnerabilities and Exposures (CVEs) before pushing to a registry?',
    options: [
      { id: 'A', text: 'Trivy / Snyk' },
      { id: 'B', text: 'Apache Maven' },
      { id: 'C', text: 'Git Bash' },
      { id: 'D', text: 'JUnit' }
    ],
    correctAnswer: 'A',
    explanation: 'Trivy and Snyk are vulnerability scanners that analyze container layers and third-party dependencies for known security CVEs before the image is allowed into a production container registry.',
    accentureTip: 'DevSecOps container image scanners: Trivy, Snyk, and Clair.'
  },
  {
    id: 'devops-2-06',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'How should an engineer systematically troubleshoot a failed CI/CD pipeline build in Jenkins or GitHub Actions?',
    options: [
      { id: 'A', text: 'Instantly restart the server without checking any output.' },
      { id: 'B', text: 'Check console logs at the exact failing step, isolate error type (compiler/test/SonarQube/Docker), reproduce locally, and push a fix.' },
      { id: 'C', text: 'Delete the entire Git repository and start from scratch.' },
      { id: 'D', text: 'Disable all unit tests so the build appears green.' }
    ],
    correctAnswer: 'B',
    explanation: 'Systematic troubleshooting: 1) Inspect pipeline console logs at the failing step; 2) Isolate error category (syntax, test assertion, quality gate, out-of-disk); 3) Reproduce locally in an identical container; 4) Push a targeted hotfix.',
    accentureTip: 'Accenture interview answer: Inspect console logs → Isolate error stage → Reproduce locally → Patch & verify.'
  },
  {
    id: 'devops-2-07',
    tier: 2,
    tierName: 'Tier 2: CI/CD Pipeline Architecture',
    topic: 'CI/CD Pipeline Architecture',
    question: 'What mechanism automatically triggers a Jenkins or GitHub Actions pipeline whenever a developer pushes code to GitHub?',
    options: [
      { id: 'A', text: 'A manual phone call' },
      { id: 'B', text: 'A Webhook HTTP POST event sent from the Git repository' },
      { id: 'C', text: 'A cron job running once a year' },
      { id: 'D', text: 'DNS lookup records' }
    ],
    correctAnswer: 'B',
    explanation: 'Git webhooks notify external CI systems by sending an automated HTTP POST payload whenever an event (like git push or PR open) occurs, triggering immediate pipeline execution.',
    accentureTip: 'Webhooks provide instant event-driven pipeline execution without continuous polling overhead.'
  },

  // ==========================================
  // TIER 3: GIT & VERSION CONTROL (7 Qs)
  // ==========================================
  {
    id: 'devops-3-01',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'What are the four internal stages of Git file lifecycle from local edit to remote synchronization?',
    options: [
      { id: 'A', text: 'Working Directory → Staging Area (Index) → Local Repository → Remote Repository' },
      { id: 'B', text: 'Remote Repository → Staging Area → Working Directory → Local Repository' },
      { id: 'C', text: 'Staging Area → Working Directory → Remote Repository → Local Repository' },
      { id: 'D', text: 'Working Directory → Remote Repository → Local Repository → Staging Area' }
    ],
    correctAnswer: 'A',
    explanation: 'The Git lifecycle: 1. Working Directory (modified files) → `git add` → 2. Staging Area/Index → `git commit` → 3. Local Repository (.git database) → `git push` → 4. Remote Repository (GitHub/GitLab).',
    accentureTip: 'Working Directory → git add → Staging Area → git commit → Local Repo → git push → Remote.'
  },
  {
    id: 'devops-3-02',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'Which Git command stages all modified, new, and deleted files in the current repository for the next commit?',
    options: [
      { id: 'A', text: 'git push .' },
      { id: 'B', text: 'git commit -all' },
      { id: 'C', text: 'git add .' },
      { id: 'D', text: 'git branch -a' }
    ],
    correctAnswer: 'C',
    explanation: '`git add .` stages all changes in the current directory and subdirectories into the staging index, preparing them to be committed with `git commit`.',
    accentureTip: '`git add .` moves changes from Working Directory into Staging Area.'
  },
  {
    id: 'devops-3-03',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'What is the command `git pull` equivalent to under the hood?',
    options: [
      { id: 'A', text: 'git clone + git push' },
      { id: 'B', text: 'git fetch + git merge' },
      { id: 'C', text: 'git status + git commit' },
      { id: 'D', text: 'git reset + git rebase' }
    ],
    correctAnswer: 'B',
    explanation: '`git pull` is a high-level composite command that executes `git fetch` (downloading remote commits into remote-tracking branches) followed immediately by `git merge` (merging remote changes into current branch).',
    accentureTip: 'git pull = git fetch + git merge.'
  },
  {
    id: 'devops-3-04',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'In modern Git syntax, what is the recommended command to create a new branch named "feature-auth" and switch to it immediately?',
    options: [
      { id: 'A', text: 'git switch -c feature-auth' },
      { id: 'B', text: 'git pull feature-auth' },
      { id: 'C', text: 'git branch -delete feature-auth' },
      { id: 'D', text: 'git log --new feature-auth' }
    ],
    correctAnswer: 'A',
    explanation: '`git switch -c <branch>` (create and switch) is the modern, dedicated command introduced in Git 2.23. It replaces the overloaded `git checkout -b <branch>` command.',
    accentureTip: 'Modern Git best practice: `git switch -c <branch>` replaces `git checkout -b <branch>`.'
  },
  {
    id: 'devops-3-05',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'What is the primary architectural difference between Git Merge and Git Rebase?',
    options: [
      { id: 'A', text: 'Git Merge deletes all commits, whereas Git Rebase encrypts them.' },
      { id: 'B', text: 'Git Merge preserves history and creates an explicit merge commit, while Git Rebase replays commits linearly on top of the base branch, rewriting commit hashes.' },
      { id: 'C', text: 'Git Rebase can only be used on GitHub Enterprise.' },
      { id: 'D', text: 'Git Merge works on single files, while Git Rebase works on directories.' }
    ],
    correctAnswer: 'B',
    explanation: 'Git Merge combines branches non-destructively by creating a 2-parent merge commit. Git Rebase moves or replays the entire feature branch onto the tip of the base branch, creating a completely linear history but rewriting commit SHA hashes.',
    accentureTip: 'Merge = non-destructive with merge commit. Rebase = linear commit history by rewriting commit hashes.'
  },
  {
    id: 'devops-3-06',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'What is the "Golden Rule of Git Rebase" that every DevOps engineer must follow?',
    options: [
      { id: 'A', text: 'Always rebase on the production master branch every hour.' },
      { id: 'B', text: 'Never rebase commits that have been pushed to a public or shared repository.' },
      { id: 'C', text: 'Only rebase if the repository has fewer than 10 files.' },
      { id: 'D', text: 'Rebase requires root administrative privileges on the Linux server.' }
    ],
    correctAnswer: 'B',
    explanation: 'The Golden Rule of Rebase: Never rebase commits that exist outside your local repository and that others may have based work on. Rewriting shared history causes severe merge conflicts and broken commit graphs for teammates.',
    accentureTip: 'Golden Rule: Never rebase shared/public branches (e.g. main/develop). Only rebase local private branches.'
  },
  {
    id: 'devops-3-07',
    tier: 3,
    tierName: 'Tier 3: Git & Version Control',
    topic: 'Git & Version Control',
    question: 'What status does Git report when changes to the same line in two branches cannot be automatically merged?',
    options: [
      { id: 'A', text: 'Kernel Panic' },
      { id: 'B', text: 'Merge Conflict' },
      { id: 'C', text: 'Segmentation Fault' },
      { id: 'D', text: 'Stack Overflow' }
    ],
    correctAnswer: 'B',
    explanation: 'When Git cannot automatically resolve differing edits to the same section of code across branches, it pauses the merge and flags a Merge Conflict, inserting conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).',
    accentureTip: 'Merge conflicts require manual developer resolution before staging with `git add` and completing the commit.'
  },

  // ==========================================
  // TIER 4: DOCKER & CONTAINERIZATION (7 Qs)
  // ==========================================
  {
    id: 'devops-4-01',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'How does a Docker container differ fundamentally from a traditional Virtual Machine (VM)?',
    options: [
      { id: 'A', text: 'Containers require their own full Guest OS kernel on top of a hypervisor.' },
      { id: 'B', text: 'Containers share the host OS kernel and isolate at process level via namespaces and cgroups, making them much lighter and faster.' },
      { id: 'C', text: 'Containers can only run Windows operating systems.' },
      { id: 'D', text: 'Virtual machines do not use RAM or CPU.' }
    ],
    correctAnswer: 'B',
    explanation: 'VMs virtualize hardware and run heavy separate Guest OS kernels (GBs in size, minutes to boot). Docker containers share the host Linux kernel and isolate processes using namespaces and cgroups (MBs in size, seconds to boot).',
    accentureTip: 'Containers share the host kernel; VMs run separate full guest operating systems on a hypervisor.'
  },
  {
    id: 'devops-4-02',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'What is the relationship between a Docker Image and a Docker Container?',
    options: [
      { id: 'A', text: 'A Docker Image is a running process; a Docker Container is an uncompiled source file.' },
      { id: 'B', text: 'A Docker Image is a read-only, immutable template; a Docker Container is a running, active instance of that image with a thin writable layer.' },
      { id: 'C', text: 'They are identical terms with no technical distinction.' },
      { id: 'D', text: 'A Docker Container must be compiled into an image before it can execute.' }
    ],
    correctAnswer: 'B',
    explanation: 'A Docker Image is an immutable blueprint containing layered instructions and files. A Docker Container is a running instance of an image with a thin read/write layer on top created via `docker run`.',
    accentureTip: 'Image = Blueprint / Class. Container = Active Running Instance / Object.'
  },
  {
    id: 'devops-4-03',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'In the command `docker run -d -p 8080:80 nginx`, what do the flags `-d` and `-p 8080:80` specify?',
    options: [
      { id: 'A', text: 'Delete container immediately and print port 80.' },
      { id: 'B', text: 'Run container in detached (background) mode and forward host port 8080 to container port 80.' },
      { id: 'C', text: 'Debug mode and password 8080.' },
      { id: 'D', text: 'Download image and pause at line 80.' }
    ],
    correctAnswer: 'B',
    explanation: '`-d` runs the container detached in the background. `-p <host_port>:<container_port>` maps port 8080 on the host machine to port 80 inside the container, allowing incoming web traffic.',
    accentureTip: 'Syntax is `-p <HostPort>:<ContainerPort>`. Traffic to host:8080 reaches container:80.'
  },
  {
    id: 'devops-4-04',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'In a Dockerfile, why is `COPY package*.json ./` followed by `RUN npm install` placed BEFORE `COPY . .`?',
    options: [
      { id: 'A', text: 'Because Docker will crash if files are copied in any other order.' },
      { id: 'B', text: 'To leverage Docker layer caching so dependencies are not reinstalled unless package.json changes.' },
      { id: 'C', text: 'To ensure npm install only runs on the developer machine.' },
      { id: 'D', text: 'To hide application source code from developers.' }
    ],
    correctAnswer: 'B',
    explanation: 'Docker caches build layers. By copying only dependency manifests first, Docker reuses the cached `RUN npm install` layer as long as dependencies have not changed, speeding up builds dramatically.',
    accentureTip: 'Docker Layer Caching: Place infrequently changing files (dependencies) before frequently changing source code.'
  },
  {
    id: 'devops-4-05',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'What is the crucial operational difference between `CMD` and `ENTRYPOINT` in a Dockerfile?',
    options: [
      { id: 'A', text: 'CMD can run compiled code; ENTRYPOINT can only run Python.' },
      { id: 'B', text: 'ENTRYPOINT sets the fixed binary command that cannot be easily overridden; CMD sets default parameters that are easily overridden by CLI arguments.' },
      { id: 'C', text: 'CMD is executed during image build; ENTRYPOINT is executed on the host server.' },
      { id: 'D', text: 'There is zero difference; they are aliases.' }
    ],
    correctAnswer: 'B',
    explanation: 'ENTRYPOINT specifies the permanent executable (e.g. `["nginx"]`). CMD provides default arguments (e.g. `["-g", "daemon off;"]`). Passing arguments to `docker run app arg1` overrides CMD, while ENTRYPOINT remains fixed.',
    accentureTip: 'ENTRYPOINT = Fixed container command. CMD = Default arguments that CLI flags override easily.'
  },
  {
    id: 'devops-4-06',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'What is the primary benefit of Multi-Stage Docker Builds in enterprise production systems?',
    options: [
      { id: 'A', text: 'Allowing multiple operating systems to boot simultaneously in one container.' },
      { id: 'B', text: 'Dramatically shrinking final image size (e.g. from 1GB to 25MB) and excluding build tools, SDKs, and source compilers from production.' },
      { id: 'C', text: 'Enabling containers to run without Docker installed.' },
      { id: 'D', text: 'Translating Java code directly into Python.' }
    ],
    correctAnswer: 'B',
    explanation: 'Multi-stage builds use multiple `FROM` instructions. The first stage builds the app with heavy SDKs/compilers, while the final stage copies only the compiled static binaries into a minimal runtime image (e.g. `nginx:alpine`), slashing image size and attack surface.',
    accentureTip: 'Multi-stage builds separate build-time dependencies from lean production runtime images.'
  },
  {
    id: 'devops-4-07',
    tier: 4,
    tierName: 'Tier 4: Docker & Containerization',
    topic: 'Docker & Containerization',
    question: 'Which Docker CLI command lists all containers, including those that are stopped or have exited?',
    options: [
      { id: 'A', text: 'docker ps' },
      { id: 'B', text: 'docker ps -a' },
      { id: 'C', text: 'docker images' },
      { id: 'D', text: 'docker stop --all' }
    ],
    correctAnswer: 'B',
    explanation: '`docker ps` only shows currently active/running containers. Adding the `-a` (or `--all`) flag displays all containers regardless of state (running, paused, stopped, exited).',
    accentureTip: '`docker ps` = Running containers. `docker ps -a` = All containers (including stopped/exited).'
  },

  // ==========================================
  // TIER 5: KUBERNETES & LINUX SCRIPTING (7 Qs)
  // ==========================================
  {
    id: 'devops-5-01',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Kubernetes Orchestration',
    question: 'What are the core components that constitute the Kubernetes Control Plane (Master)?',
    options: [
      { id: 'A', text: 'kubelet, kube-proxy, and Docker daemon' },
      { id: 'B', text: 'kube-apiserver, etcd, kube-scheduler, and kube-controller-manager' },
      { id: 'C', text: 'Jenkins, SonarQube, and Maven' },
      { id: 'D', text: 'Nginx, MySQL, and Redis' }
    ],
    correctAnswer: 'B',
    explanation: 'The K8s Control Plane consists of: 1) `kube-apiserver` (REST API gateway), 2) `etcd` (distributed key-value store), 3) `kube-scheduler` (assigns pods to nodes), and 4) `kube-controller-manager` (runs controller loops like replica sets).',
    accentureTip: 'Control Plane = API Server, etcd, Scheduler, Controller Manager. Worker Node = Kubelet, Kube-Proxy, Pods.'
  },
  {
    id: 'devops-5-02',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Kubernetes Orchestration',
    question: 'What is the smallest deployable execution unit in Kubernetes?',
    options: [
      { id: 'A', text: 'Container Image' },
      { id: 'B', text: 'Pod' },
      { id: 'C', text: 'Virtual Machine' },
      { id: 'D', text: 'Cluster Node' }
    ],
    correctAnswer: 'B',
    explanation: 'A Pod is the basic building block of Kubernetes. It encapsulates one or more tightly-coupled containers that share storage volumes, IP address, and network namespace (localhost).',
    accentureTip: 'Pod is the smallest deployable atomic unit in Kubernetes.'
  },
  {
    id: 'devops-5-03',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Kubernetes Orchestration',
    question: 'Why is a Kubernetes Service required in front of Pods rather than connecting to Pod IPs directly?',
    options: [
      { id: 'A', text: 'Because Pods cannot execute HTTP requests.' },
      { id: 'B', text: 'Because Pods are ephemeral and their IP addresses change dynamically whenever they restart or scale; a Service provides a stable virtual IP and DNS name.' },
      { id: 'C', text: 'Because Services convert XML to JSON automatically.' },
      { id: 'D', text: 'Because Kubernetes bans all direct TCP connections.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pods are ephemeral and can be destroyed or rescheduled at any time, changing their private IP addresses. A Kubernetes Service provides a persistent, static IP and DNS name with built-in load balancing across matching pods.',
    accentureTip: 'Pods have ephemeral IPs; Services provide stable, persistent virtual IPs and DNS names.'
  },
  {
    id: 'devops-5-04',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Kubernetes Orchestration',
    question: 'How do Kubernetes ConfigMaps differ from Kubernetes Secrets?',
    options: [
      { id: 'A', text: 'ConfigMaps store Dockerfiles; Secrets store Git commits.' },
      { id: 'B', text: 'ConfigMaps store non-sensitive plain text configs; Secrets store sensitive credentials (passwords, tokens) and are base64-encoded/encrypted at rest.' },
      { id: 'C', text: 'Secrets are stored in the Linux kernel; ConfigMaps are stored in RAM only.' },
      { id: 'D', text: 'ConfigMaps cannot be mounted as volumes.' }
    ],
    correctAnswer: 'B',
    explanation: 'ConfigMaps decouple non-confidential configuration artifacts (`DATABASE_HOST`, `APP_MODE`) as plain text. Secrets decouple sensitive data (database passwords, API keys) encoded in base64 and encrypted at rest in etcd.',
    accentureTip: 'ConfigMap = non-sensitive plain text. Secret = sensitive credentials (base64 encoded & encrypted at rest).'
  },
  {
    id: 'devops-5-05',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Kubernetes Orchestration',
    question: 'In a microservices cluster, Frontend Pods must connect to Backend Pods, but Database Pods must strictly reject traffic from Frontend. How is this enforced in Kubernetes?',
    options: [
      { id: 'A', text: 'By renaming the database container to "private"' },
      { id: 'B', text: 'By configuring a Kubernetes NetworkPolicy with label selectors' },
      { id: 'C', text: 'By turning off the physical network switch' },
      { id: 'D', text: 'By deleting the frontend deployment' }
    ],
    correctAnswer: 'B',
    explanation: 'By default, all Pods in a K8s cluster can communicate. A `NetworkPolicy` resource specifies ingress and egress rules using pod label selectors (e.g. only allow incoming connections from pods carrying label `app: backend`).',
    accentureTip: 'Kubernetes NetworkPolicy enforces pod-level network isolation and traffic segmentation via labels.'
  },
  {
    id: 'devops-5-06',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Linux Systems & Shell Scripting',
    question: 'Given the Linux permission string `-rwxr-xr--`, what is its numerical octal representation?',
    options: [
      { id: 'A', text: '754' },
      { id: 'B', text: '777' },
      { id: 'C', text: '644' },
      { id: 'D', text: '755' }
    ],
    correctAnswer: 'A',
    explanation: 'Octal weights: Read (r)=4, Write (w)=2, Execute (x)=1. Triad 1 (Owner): rwx = 4+2+1 = 7. Triad 2 (Group): r-x = 4+0+1 = 5. Triad 3 (Others): r-- = 4+0+0 = 4. Result: 754.',
    accentureTip: 'Read=4, Write=2, Execute=1. rwxr-xr--: (4+2+1=7), (4+0+1=5), (4+0+0=4) = 754.'
  },
  {
    id: 'devops-5-07',
    tier: 5,
    tierName: 'Tier 5: Kubernetes & Linux Scripting',
    topic: 'Linux Systems & Shell Scripting',
    question: 'Which Linux command is used to continuously stream live log additions to the console in real-time for troubleshooting an active server?',
    options: [
      { id: 'A', text: 'cat app.log' },
      { id: 'B', text: 'tail -f app.log' },
      { id: 'C', text: 'head -n 5 app.log' },
      { id: 'D', text: 'rm -f app.log' }
    ],
    correctAnswer: 'B',
    explanation: '`tail -f <filename>` follows the file in real-time, streaming newly appended log lines directly to the terminal as they are written by the application or service.',
    accentureTip: '`tail -f` is the essential real-time live log monitoring command in Linux and DevOps.'
  }
];

// ==========================================
// STUDY NOTES / HANDBOOK FOR MODAL
// ==========================================
export const devopsStudyGuides = [
  {
    tier: 1,
    title: 'Tier 1: DevOps Fundamentals, Culture & Tool Matrix',
    summary: 'DevOps definitions, traditional waterfall silos vs DevOps continuous feedback loop, 8 lifecycle stages, and the complete requirement-to-tool matrix.',
    sections: [
      {
        heading: '1. What is DevOps? Culture vs. Tool Trap',
        content: 'DevOps = Development + Operations\n\nDevOps is a combination of culture, practices, processes, and automation that enables development and operations teams to collaborate and deliver software faster and more reliably.\n\nAccenture Conceptual Trap & Interview Tip:\nDo NOT answer: "DevOps is a tool."\nInstead answer: "DevOps is a culture and set of practices that combines development and operations through collaboration, automation, continuous integration, continuous delivery, monitoring, and feedback."\n\nJenkins is merely an automation server tool. DevOps is an overarching cultural framework comprised of Culture, Collaboration, Automation, CI/CD, Infrastructure as Code (IaC), Monitoring & Observability, Security (DevSecOps), and Continuous Feedback.'
      },
      {
        heading: '2. Traditional Silo Model vs. DevOps Model',
        content: 'Traditional Waterfall Model:\n- Developer writes code -> Throws over the wall to Operations -> Manual testing -> Manual deployment -> Production.\n- Critical Problems: Slow releases, communication gaps ("silo mentality"), manual errors & fatigue, inconsistent environments ("works on my machine"), difficult and risky rollback, and delayed feedback loops.\n\nDevOps Continuous Model:\n- Continuous lifecycle: Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor -> Feedback\n- Key Advantages: Continuous delivery & rapid release cycles, shared ownership & zero-silo culture, automated testing & proactive security, repeatable Infrastructure as Code (IaC), and real-time telemetry.'
      },
      {
        heading: '3. DevOps Requirement to Tool Matrix',
        content: 'Industry-standard tools mapping to each DevOps requirement phase:\n\n* Version Control: Git, GitHub, GitLab, Bitbucket (Distributed tracking of source code changes & collaboration)\n* CI/CD Engine: Jenkins, GitHub Actions, GitLab CI, Azure DevOps (Automated build, test, and release orchestration)\n* Containerization: Docker, Podman, containerd (Packaging code + dependencies into lightweight portable units)\n* Container Orchestration: Kubernetes (K8s), OpenShift, Amazon EKS (Automated scaling, deployment, networking, and self-healing)\n* Configuration Management: Ansible, Puppet, Chef (Automated configuration drift management & server provisioning)\n* Infrastructure as Code (IaC): Terraform, AWS CloudFormation, Pulumi (Declarative multi-cloud resource provisioning)\n* Build Tools: Maven, Gradle, npm, yarn (Compiling source, dependency resolution, packaging artifacts)\n* Code Quality & SAST: SonarQube, Snyk, Checkmarx (Static analysis, vulnerability checks, and test coverage gating)\n* Monitoring & Metrics: Prometheus, Datadog, Dynatrace (Time-series metric scraping, threshold alerts, health checks)\n* Visualization / Dashboards: Grafana, Kibana (Real-time visualization of logs, metrics, and application traces)\n* Cloud Platforms: AWS, Microsoft Azure, Google Cloud (GCP) (Scalable on-demand compute, storage, and networking)'
      },
      {
        heading: '4. DevOps 8-Stage Lifecycle & Production Telemetry',
        content: '1. PLAN: Requirements gathering, sprint planning, and issue tracking (Jira, Azure Boards).\n2. CODE: Developers write and review source code using version control (Git, GitHub, GitLab).\n3. BUILD: Compiling code, running linters, and packaging into deployable artifacts (JAR, WAR, Docker images via Maven, Gradle, npm).\n4. TEST: Automated execution of unit, integration, functional, and security tests (JUnit, Selenium, pytest).\n5. RELEASE: Tagging, versioning, and publishing verified artifacts to registries (Nexus, Artifactory, ECR).\n6. DEPLOY: Provisioning and deploying artifacts into staging and production clusters (Docker, Kubernetes, AWS, Azure).\n7. OPERATE: Managing infrastructure runtime, autoscaling, traffic routing, and maintenance.\n8. MONITOR: Continuously collecting metrics, logs, and telemetry for proactive issue resolution.\n\nCritical Production Metrics Tracked: CPU, Memory, Latency (p95/p99), HTTP Error Rates (5xx), Request Throughput, Logs, and System Availability.'
      }
    ]
  },
  {
    tier: 2,
    title: 'Tier 2: CI/CD Pipeline Architecture & Troubleshooting',
    summary: 'Continuous Integration principles, Continuous Delivery vs Continuous Deployment distinctions, 9-stage enterprise pipeline flow, and Accenture troubleshooting procedures.',
    sections: [
      {
        heading: '1. CI - Continuous Integration Principles',
        content: 'Developers frequently integrate their code into a shared repository (multiple times a day). Automated pipelines build and test the changes immediately upon every push or PR.\n\nDeveloper A / B / C / D -> Git Repository -> Automated Build -> Automated Tests -> Fast Feedback\n\nMain Objective: Find integration issues, syntax bugs, and breaking changes early before code reaches production environments.'
      },
      {
        heading: '2. Continuous Delivery vs. Continuous Deployment',
        content: 'Continuous Delivery:\n- Code is automatically built, tested, packaged, and deployed to staging/pre-prod environments.\n- Every build is always deployable to production, but production release is gated by a manual human approval step.\n\nContinuous Deployment:\n- Every change that passes all stages of the automated pipeline is released directly and automatically to production without any human intervention.\n\nCore Memorization Rule:\n- CI: Integrate code frequently + run automated tests continuously.\n- Continuous Delivery: Code is always production-ready; production push requires manual gate/approval.\n- Continuous Deployment: Zero manual gates; passed commits go straight to live production automatically.'
      },
      {
        heading: '3. End-to-End Enterprise CI/CD Pipeline Flow (9 Stages)',
        content: '1. Developer (git push)\n2. GitHub / GitLab (Webhook trigger)\n3. Jenkins / CI Engine (Pipeline orchestrator)\n4. Build Application (Maven / npm compile)\n5. Run Unit & Integration Tests (JUnit / pytest)\n6. Static Code Analysis & Quality Gate (SonarQube)\n7. Docker Image Build & Tagging (docker build -t app:v1 .)\n8. Vulnerability Scan (Trivy / Snyk security scan)\n9. Push Image to Registry (Docker Hub / ECR / ACR)\n10. Deploy to Kubernetes Staging (kubectl / Helm / ArgoCD)\n11. Approval Gate (Automated Canary Analysis / Lead approval)\n12. Kubernetes Production Rollout (Zero-downtime rolling update)'
      },
      {
        heading: '4. Troubleshooting CI/CD Pipeline Failures (Accenture Standard)',
        content: 'How do you troubleshoot a CI/CD pipeline failure?\n\n1. Identify the failed stage: Check Jenkins/pipeline console logs at the exact failing step (Lint, Unit Test, SonarQube Quality Gate, or Docker Build).\n2. Isolate the error type:\n   - Compilation/Build errors: Missing dependency, syntax error, wrong JDK/Node version.\n   - Unit test failures: Broken assertion or unmocked external dependency.\n   - SonarQube Quality Gate failure: Code coverage dropped below threshold or new security vulnerability introduced.\n   - Docker build failure: Base image unavailable, package repository 404, or out-of-disk space.\n3. Local reproduction: Run the failed step locally using the exact same environment or container.\n4. Fix and verify: Push a targeted hotfix commit or notify the author to unblock the master branch.'
      }
    ]
  },
  {
    tier: 3,
    title: 'Tier 3: Git DVCS & Branching Workflows',
    summary: 'Internal Git stages, essential commands, feature branching workflows, Git Merge vs Git Rebase, and the Golden Rule of Rebase.',
    sections: [
      {
        heading: '1. Git Architecture & Internal Stages',
        content: 'Git is an open-source distributed version control system (DVCS) designed to handle everything from small to large projects with speed.\n\nDeveloper -> Working Directory (Modified files)\n-> git add <file> -> Staging Area / Index (Prepared changes)\n-> git commit -m "..." -> Local Repository (.git directory with commit graph)\n-> git push origin <branch> -> Remote Repository (GitHub / GitLab / Bitbucket)'
      },
      {
        heading: '2. Essential Git Commands Reference',
        content: '* git init: Initializes a new empty Git repository in the current directory.\n* git status: Displays working directory state, staged/unstaged changes, and untracked files.\n* git add .: Stages all modified, new, and deleted files for the next commit.\n* git commit -m "msg": Snapshots staged files into local repository with a descriptive message.\n* git push origin <branch>: Transfers commits from local repository branch to remote upstream repository.\n* git pull: Fetches remote updates and merges them (git fetch + git merge).\n* git clone <repo-url>: Copies an entire remote repository, history, and branches to local machine.\n* git branch <name>: Creates a new branch pointer at current HEAD.\n* git switch <branch>: Modern syntax to switch branches safely without conflicting file checkouts.\n* git switch -c <branch>: Creates a new branch and immediately switches to it (git checkout -b equivalent).'
      },
      {
        heading: '3. Git Merge vs. Git Rebase (Critical Interview Topic)',
        content: 'Git Merge:\n- Combines histories and creates an explicit Merge Commit.\n- Preserves complete historical context, original commit timestamps, and branch topology.\n- Non-destructive; does not alter existing commit hashes.\n\nGit Rebase:\n- Replays feature commits on top of the target base branch.\n- Produces a clean, linear, and readable git log.\n- Rewrites commit history (generates brand new commit hashes for D\' and E\').\n\nINTERVIEW TRAP & GOLDEN RULE:\nNever say: "Rebase is always better than Merge."\nThe Golden Rule of Rebase: Never rebase commits that have been pushed to a public/shared repository where other team members are collaborating, as rewriting shared history leads to severe merge conflicts and broken state.'
      }
    ]
  },
  {
    tier: 4,
    title: 'Tier 4: Docker & Containerization',
    summary: 'Container mechanics, image vs container, core Docker CLI commands, Dockerfile anatomy, CMD vs ENTRYPOINT, and multi-stage build optimization.',
    sections: [
      {
        heading: '1. What is Docker & The "Works on My Machine" Problem',
        content: 'Docker is an open platform for developing, shipping, and running applications in lightweight, isolated containers.\nA container packages Application Code + Runtime + System Libraries + Dependencies + Configurations into an immutable unit.\n\nThe Classic Mismatch Problem:\n- Developer Machine: Node.js v22, MongoDB v7.0, Library A v5.2\n- Production Server: Node.js v18 (Mismatch!), MongoDB v4.4 (Mismatch!), Library A v3.0 (Crash!)\n\nThe Docker Solution:\nApplication + Runtime & Dependencies + Libraries & Config -> Docker Image (Immutable Blueprint) -> Docker Container (Identical everywhere). Eliminates environmental drift between Dev, QA, Staging, and Production.'
      },
      {
        heading: '2. Docker Image vs. Docker Container & Core Commands',
        content: 'Docker Image:\n- A read-only, immutable template containing layered instructions and filesystem. Acts as the blueprint (e.g. node:22, nginx:latest, ubuntu:24.04).\n\nDocker Container:\n- A running, active instance of a Docker image. Adds a thin, writable container layer on top of the image layers. Created via docker run.\n\nCore Docker Commands:\n* docker pull <image>: Downloads image from remote registry (Docker Hub) to local storage.\n* docker images: Lists all locally stored Docker images with tags and sizes.\n* docker ps: Lists currently active/running containers.\n* docker ps -a: Lists all containers (both running and stopped/exited).\n* docker run -d -p 80:80 nginx: Creates and starts container in detached mode with port forwarding.\n* docker stop <id>: Gracefully stops a running container (sends SIGTERM, then SIGKILL).\n* docker rm <id>: Removes a stopped container from the local host.\n* docker rmi <image_id>: Deletes an image from local storage.'
      },
      {
        heading: '3. Dockerfile Anatomy: CMD vs. ENTRYPOINT',
        content: 'Dockerfile Directive Breakdown:\n- FROM node:22 (Base Image)\n- WORKDIR /app (Set Working Directory)\n- COPY package*.json ./ (Copy manifests first for layer caching)\n- RUN npm install (Install dependencies)\n- COPY . . (Copy remaining source code)\n- EXPOSE 3000 (Expose runtime port)\n- CMD ["npm", "start"] (Default execution command)\n\nCMD vs. ENTRYPOINT:\n- ENTRYPOINT: Defines the fixed executable binary that runs when the container launches. Cannot be overridden easily (requires explicit --entrypoint flag).\n- CMD: Provides default arguments or a fallback command for the container. Easily overridden by passing CLI arguments at runtime (docker run app echo "hi").'
      },
      {
        heading: '4. Multi-Stage Docker Builds (Production Optimization)',
        content: 'In standard Docker builds, build tools (compilers, SDKs, devDependencies) inflate image size and expose security risks. Multi-stage builds use multiple FROM statements to isolate the build environment from the lean final runtime image.\n\nStage 1: Build Phase (Node.js SDK & devDependencies) -> Compiles static bundle.\nStage 2: Production Phase (Lean Nginx Alpine) -> Copies only compiled bundle into /usr/share/nginx/html.\n\nKey Multi-Stage Benefits:\n- Dramatically smaller final image size: Drops an image from ~1GB to ~25MB.\n- Reduced attack surface: Compilers, git, and dev packages are completely excluded from production.\n- Zero bloat: Only compiled binaries and static artifacts ship to production servers.'
      }
    ]
  },
  {
    tier: 5,
    title: 'Tier 5: Kubernetes Orchestration & Linux Bash Scripting',
    summary: 'Kubernetes Control Plane vs Worker Nodes, Pods, Deployments, Services, ConfigMap vs Secret, NetworkPolicy, Linux octal permissions calculation, and bash scripting.',
    sections: [
      {
        heading: '1. Kubernetes Architecture (Control Plane vs Worker Nodes)',
        content: 'Docker runs individual containers on a single host. In enterprise environments with 500+ containers across 50+ virtual servers, manual management is impossible. Kubernetes (K8s) automates deployment, scaling, healing, and network routing.\n\nControl Plane (Master Node Components):\n- kube-apiserver: Central REST API entrypoint for all CLI (kubectl) and worker requests.\n- kube-scheduler: Assigns newly created pods to optimal worker nodes based on resource capacity.\n- kube-controller-manager: Runs background reconciliation controllers (node, replica, endpoints).\n- etcd: Distributed, consistent key-value store holding the entire cluster state and configuration.\n\nWorker Node Components:\n- kubelet: Node agent ensuring pods and containers are running and healthy.\n- kube-proxy: Manages IP routing and network packet forwarding on each node.\n- Pods: The deployable units running actual application containers.'
      },
      {
        heading: '2. Core Kubernetes Objects (Pods, Deployments, Services, Secrets)',
        content: '* Pod: The smallest deployable unit in Kubernetes. Represents a single instance of a running process. Can host tightly-coupled containers (e.g. App container + Sidecar logging proxy) sharing localhost network and storage volumes.\n* Deployment: Declarative controller managing replicated Pods, handling automated rollouts, health checks, self-healing, and zero-downtime rolling updates (replicas: 3).\n* Service: Pods are ephemeral with dynamic IPs. A Service provides a stable, persistent virtual IP and DNS name to balance traffic across matching Pods.\n* ConfigMap vs Secret:\n  - ConfigMap: Non-sensitive configuration data in plain UTF-8 text (DATABASE_HOST, API_URL, APP_MODE).\n  - Secret: Sensitive credentials (passwords, tokens, TLS keys) encoded in Base64 and encrypted at rest in etcd.\n* NetworkPolicy: Ingress/egress rules restricting traffic between pods (e.g. allowing Backend to connect to Database, while strictly rejecting direct connections from Frontend pods).'
      },
      {
        heading: '3. Linux Permissions & Octal Calculation',
        content: 'Linux file permissions are represented as 9 characters grouped into three triads:\n\nPermission String: -rwxr-xr--\nTriad Breakdown:   [Owner: rwx]  [Group: r-x]  [Others: r--]\nNumerical Values:   4 + 2 + 1     4 + 0 + 1     4 + 0 + 0\nOctal Notation:         7             5             4\n\nOctal Bit Weightings:\n- Read (r) = 4\n- Write (w) = 2\n- Execute (x) = 1\n\nExample: chmod 755 script.sh gives Owner full read/write/execute (7), and Group/Others read/execute permissions (5).'
      },
      {
        heading: '4. Shell Scripting - Factorial Program (Accenture Favorite)',
        content: 'Recent Accenture DevOps coding rounds specifically ask candidates to write clean bash shell scripts (e.g., calculating factorial, checking service health, parsing logs):\n\n#!/bin/bash\n# Prompt user for integer input\nread -p "Enter number: " n\n\n# Validate non-negative integer\nif [[ $n -lt 0 ]]; then\n  echo "Factorial is not defined for negative numbers."\n  exit 1\nfi\n\nfact=1\n# Loop from 1 to n to compute factorial\nfor ((i=1; i<=n; i++))\ndo\n  fact=$((fact * i))\ndone\n\necho "The factorial of $n is: $fact"'
      }
    ]
  }
];

// ==========================================
// DETAILED OPTION-BY-OPTION BREAKDOWN MAP
// ==========================================
export const devopsOptionBreakdownMap = {
  'devops-1-01': {
    A: "DevOps is NOT an individual software tool like Jenkins or Docker; tools merely facilitate it.",
    B: "Correct: DevOps is a philosophy and set of cultural practices, processes, and automation uniting Dev and Ops.",
    C: "DevOps is an organizational culture and methodology, not a programming language.",
    D: "DevOps promotes shared responsibility across the lifecycle, not isolated sysadmin scripting.",
    memoryPill: "Do NOT answer: DevOps is a tool. It is a culture & set of practices."
  },
  'devops-1-02': {
    A: "Automated continuous unit testing is a core DevOps practice, not a Waterfall characteristic.",
    B: "Infrastructure as Code (IaC) is a DevOps automated provisioning discipline.",
    C: "Throwing code over the wall into operations silos caused slow releases, finger-pointing, and environment drift in traditional models.",
    D: "Continuous integration feedback loops are native to DevOps.",
    memoryPill: "Traditional model = Siloed handoffs; DevOps = Zero-silo continuous feedback"
  },
  'devops-1-03': {
    A: "Docker is a containerization engine, not an infrastructure orchestrator for CI/CD.",
    B: "Jenkins is an automation server used for building CI/CD pipelines, not the overarching culture of DevOps.",
    C: "Git is a distributed version control system.",
    D: "Ansible is a configuration management engine.",
    memoryPill: "Conceptual Trap: Jenkins is merely an automation tool; DevOps is the framework."
  },
  'devops-1-04': {
    A: "Code compile occurs during the Build phase.",
    B: "Tagging, versioning, and publishing verified artifacts to registries (Nexus/ECR) defines the Release phase.",
    C: "Runtime traffic routing occurs in the Operate phase.",
    D: "Requirements gathering occurs in the Plan phase.",
    memoryPill: "Release phase = Tagging & publishing artifacts to registries (Nexus, ECR)"
  },
  'devops-1-05': {
    A: "Story points estimate agile velocity in planning, not production server health.",
    B: "Lines of code per day does not measure production stability or performance.",
    C: "CPU, Memory, p95/p99 Latency, 5xx Error Rates, and Request Throughput are the critical telemetry metrics for production observability.",
    D: "Git commit frequencies track developer activity, not live infrastructure health.",
    memoryPill: "Production Telemetry: CPU, Memory, Latency (p95/p99), 5xx Errors, Throughput"
  },
  'devops-1-06': {
    A: "Ansible, Puppet, and Chef are Configuration Management tools, not container runtimes.",
    B: "Prometheus and Datadog are Monitoring & Metrics platforms.",
    C: "Docker, Podman, and containerd package application code and dependencies into lightweight portable units.",
    D: "SonarQube and Snyk are SAST code quality scanners.",
    memoryPill: "Containerization = Docker, Podman, containerd"
  },
  'devops-1-07': {
    A: "Static code analysis occurs in the Test / Quality Gate stage.",
    B: "Automated scaling and routing occurs in Operate.",
    C: "Compiling source code, resolving dependencies, and packaging deployable artifacts (JAR, Docker images) defines the Build stage.",
    D: "Deploying to Kubernetes staging occurs in the Deploy stage.",
    memoryPill: "Build stage = Compiling source + packaging artifacts (Maven, npm)"
  },
  'devops-2-01': {
    A: "Delaying merges until the end of a sprint leads to severe merge conflicts ('merge hell').",
    B: "Developers frequently integrate code into a shared repository multiple times a day with automated builds and tests on every push.",
    C: "Disabling automated test suites defeats the core objective of CI.",
    D: "Allowing manual server uploads bypasses version control and breaks reproducibility.",
    memoryPill: "CI: Frequent commits + immediate automated builds and tests"
  },
  'devops-2-02': {
    A: "Continuous Deployment has zero manual gates; code deploy is fully automated.",
    B: "Continuous Delivery automatically builds, tests, and stages code, but production rollout requires a manual approval gate.",
    C: "Continuous Monitoring tracks telemetry post-deployment.",
    D: "Continuous Integration stops at building and testing code in repositories.",
    memoryPill: "Manual approval gate = Continuous Delivery; Zero manual gates = Continuous Deployment"
  },
  'devops-2-03': {
    A: "Trivy is a vulnerability container scanner.",
    B: "SonarQube inspects static source code quality, technical debt, and enforces quality gates on test coverage.",
    C: "Docker builds container images.",
    D: "Nexus is an artifact storage registry.",
    memoryPill: "SonarQube = Static Code Analysis & Quality Gate threshold"
  },
  'devops-2-04': {
    A: "Restarting production immediately risks deploying broken code.",
    B: "Disabling test stages hides errors and compromises production stability.",
    C: "First inspect pipeline console logs at the exact failing stage (Lint, Test, SonarQube, Docker Build) to isolate the error type.",
    D: "Deleting the repository discards version history and does not diagnose the fault.",
    memoryPill: "Troubleshooting: 1. Identify failing stage logs -> 2. Isolate error -> 3. Local reproduction"
  },
  'devops-2-05': {
    A: "Helm is a Kubernetes package manager, not a container security vulnerability scanner.",
    B: "Trivy and Snyk scan container images for known Common Vulnerabilities and Exposures (CVEs) and insecure libraries.",
    C: "Maven compiles Java code.",
    D: "Prometheus scrapes time-series metrics.",
    memoryPill: "Container Vulnerability Scanners = Trivy, Snyk"
  },
  'devops-2-06': {
    A: "Jenkins / CI engines orchestrate build and test stages; they are not artifact registries.",
    B: "Jira tracks sprint issues.",
    C: "Nexus, Artifactory, and ECR store and version verified build artifacts (JAR, WAR, Docker images).",
    D: "GitLab CI is a pipeline runner.",
    memoryPill: "Artifact Registries: Nexus, Artifactory, AWS ECR"
  },
  'devops-2-07': {
    A: "Continuous Integration ends at automated testing; it does not deploy to production.",
    B: "Every change passing automated pipeline stages is released directly to production with zero manual intervention in Continuous Deployment.",
    C: "Continuous Delivery requires human sign-off before production.",
    D: "Continuous Monitoring gathers metrics after deployment.",
    memoryPill: "Zero manual intervention straight to live production = Continuous Deployment"
  },
  'devops-3-01': {
    A: "Working Directory contains modified files on disk before staging.",
    B: "The Staging Area (Index) holds prepared file changes indexed by `git add`.",
    C: "Local Repository (.git directory) holds committed snapshots in the graph.",
    D: "Remote Repository is hosted on GitHub/GitLab.",
    memoryPill: "Git flow: Working Directory -> git add -> Staging Area -> git commit -> Local Repo"
  },
  'devops-3-02': {
    A: "git checkout -b creates and switches; modern Git syntax is `git switch -c <branch>`.",
    B: "git switch <branch> is the modern safe syntax to switch branches without conflicting file checkouts.",
    C: "git branch <name> creates a branch pointer but does not switch the working directory.",
    D: "git merge combines histories.",
    memoryPill: "Modern branch switching: git switch <branch>; Create & switch: git switch -c <branch>"
  },
  'devops-3-03': {
    A: "Git Merge combines histories and creates an explicit merge commit, preserving historical timestamps and branch topology.",
    B: "Git Rebase replays commits linearly and rewrites history.",
    C: "Git Cherry-pick copies isolated single commits.",
    D: "Git Clone copies remote repositories.",
    memoryPill: "Git Merge preserves original commit history and creates explicit merge commits"
  },
  'devops-3-04': {
    A: "Rebasing on local private feature branches is standard and recommended for clean linear history.",
    B: "The Golden Rule of Rebase: Never rebase commits that have been pushed to a public/shared repository where teammates collaborate.",
    C: "Rebase is supported on main branches, but dangerous when shared.",
    D: "Rebasing before merging is common practice for feature branches.",
    memoryPill: "Golden Rule: Never rebase commits pushed to a public/shared repository"
  },
  'devops-3-05': {
    A: "git push origin <branch> transfers local commits to the remote upstream repository.",
    B: "git pull fetches and merges remote updates.",
    C: "git commit snapshots staged changes to the local repository.",
    D: "git add stages modified files.",
    memoryPill: "git push origin <branch> transfers commits to remote upstream"
  },
  'devops-3-06': {
    A: "git fetch downloads remote refs without merging.",
    B: "git pull combines `git fetch` (downloading remote commits) and `git merge` (integrating them into the current branch).",
    C: "git commit snapshots local changes.",
    D: "git rebase replays commits.",
    memoryPill: "git pull = git fetch + git merge"
  },
  'devops-3-07': {
    A: "git status displays working tree status, staged changes, and untracked files.",
    B: "git diff shows line-by-line differences.",
    C: "git log shows commit history.",
    D: "git show displays individual commit metadata.",
    memoryPill: "git status displays modified, staged, and untracked files"
  },
  'devops-4-01': {
    A: "Virtual Machines package an entire guest operating system with high overhead.",
    B: "A Docker Container packages application code, runtime, libraries, dependencies, and configuration into an immutable, isolated unit.",
    C: "Kubernetes Pod is an orchestration construct, not the base packaging platform.",
    D: "Docker images are the blueprints; containers are the running instances.",
    memoryPill: "Container = Code + Runtime + Libraries + Config into immutable unit"
  },
  'devops-4-02': {
    A: "A Docker Image is a read-only, immutable template containing layered filesystems and instructions.",
    B: "A Docker Container is a running, active instance that adds a thin writable layer on top of the image.",
    C: "Containers add write layers; images are immutable.",
    D: "Images are blueprints; containers are active processes.",
    memoryPill: "Image = Read-only blueprint | Container = Running instance with writable layer"
  },
  'devops-4-03': {
    A: "docker ps lists only currently active/running containers.",
    B: "docker ps -a lists all containers (both running and stopped/exited).",
    C: "docker images lists stored images.",
    D: "docker logs prints container output.",
    memoryPill: "docker ps -a = List ALL containers (active + exited)"
  },
  'devops-4-04': {
    A: "Placing `COPY . .` first invalidates Docker layer caching whenever any source file changes, forcing unnecessary dependency re-installation.",
    B: "Copying `package*.json` and running `npm install` first allows Docker to cache the installed dependencies layer when only application source code changes.",
    C: "Base images cannot be skipped.",
    D: "Layer caching works from top to bottom.",
    memoryPill: "Docker caching: Copy manifests first -> RUN install -> Copy source code"
  },
  'devops-4-05': {
    A: "CMD can be overridden easily by passing command line arguments at runtime (`docker run app echo 'hi'`).",
    B: "ENTRYPOINT defines the fixed executable binary that runs when the container launches and cannot be overridden easily without `--entrypoint`.",
    C: "RUN executes during image build time.",
    D: "EXPOSE documents the network port.",
    memoryPill: "ENTRYPOINT = Fixed executable binary | CMD = Default arguments / overridable fallback"
  },
  'devops-4-06': {
    A: "Multi-stage builds compile artifacts in intermediate build containers and copy only final static binaries into a lean production runtime (e.g. Nginx alpine), dropping image sizes from ~1GB to ~25MB.",
    B: "Multi-stage builds reduce image size, not increase it.",
    C: "Compilers are excluded from the production image, decreasing the attack surface.",
    D: "Docker caches multi-stage layers efficiently.",
    memoryPill: "Multi-stage: Drops size from ~1GB to ~25MB + excludes compilers from prod"
  },
  'devops-4-07': {
    A: "docker run -p 8080:80 maps host port 8080 to container port 80.",
    B: "docker run -d runs the container in detached (background) mode.",
    C: "docker run -d -p 80:80 nginx starts the container in detached background mode with port forwarding 80:80.",
    D: "docker exec runs commands inside an existing container.",
    memoryPill: "docker run -d -p 80:80 nginx = Detached mode + port mapping 80:80"
  },
  'devops-5-01': {
    A: "Worker Nodes run workloads, but etcd, scheduler, and API server reside in the Control Plane.",
    B: "The Control Plane (Master Node) manages the cluster state via kube-apiserver, kube-scheduler, kube-controller-manager, and etcd.",
    C: "Kubelet runs on worker nodes.",
    D: "Container runtime is a worker node daemon.",
    memoryPill: "Control Plane: API Server, Scheduler, Controller Manager, etcd"
  },
  'devops-5-02': {
    A: "A Pod is the smallest deployable computing unit in Kubernetes, representing a single instance of a running process.",
    B: "A Node is a worker machine.",
    C: "A Cluster is the collection of nodes.",
    D: "A Deployment manages sets of Pods.",
    memoryPill: "Smallest deployable unit in Kubernetes = Pod"
  },
  'devops-5-03': {
    A: "Pods have dynamic, ephemeral IP addresses that change upon restart; a Kubernetes Service provides a stable, persistent virtual IP and DNS name.",
    B: "Deployments manage replica counts, not stable DNS virtual IPs.",
    C: "ConfigMaps store configuration text.",
    D: "Ingress routes external HTTP/HTTPS traffic to Services.",
    memoryPill: "Kubernetes Service = Stable persistent virtual IP & DNS for matching Pods"
  },
  'devops-5-04': {
    A: "Secrets store plain text without encryption.",
    B: "ConfigMaps store non-sensitive configuration text, whereas Secrets store confidential credentials (passwords, tokens, TLS keys) encoded in Base64 and encrypted at rest in etcd.",
    C: "Both ConfigMaps and Secrets can be mounted as volumes or environment variables.",
    D: "ConfigMaps are not encrypted.",
    memoryPill: "ConfigMap = Non-sensitive plain text | Secret = Confidential credentials (Base64/encrypted)"
  },
  'devops-5-05': {
    A: "By default, Kubernetes Pod networking is non-isolated; any Pod can reach any Pod.",
    B: "Configuring a Kubernetes NetworkPolicy uses pod selectors and label matchers to restrict traffic so only backend Pods can access the database Pod.",
    C: "Deployments do not enforce network traffic isolation.",
    D: "Kube-proxy routes traffic according to network policies and services, but NetworkPolicy defines the rules.",
    memoryPill: "Isolating inter-pod traffic = Kubernetes NetworkPolicy with label matchers"
  },
  'devops-5-06': {
    A: "In triad breakdown `-rwxr-xr--`: Owner=rwx (4+2+1=7), Group=r-x (4+0+1=5), Others=r-- (4+0+0=4). Octal notation is 754.",
    B: "755 gives execute permission to others (r-x).",
    C: "644 gives rw-r--r--.",
    D: "777 gives full permissions to all users.",
    memoryPill: "Octal Calculation: r=4, w=2, x=1. [rwx]=7, [r-x]=5, [r--]=4 -> 754"
  },
  'devops-5-07': {
    A: "cat app.log dumps the static file and exits immediately.",
    B: "`tail -f app.log` continuously streams and follows live log additions in real-time as they are written by the application.",
    C: "head -n 5 prints the first 5 lines of the file.",
    D: "rm -f deletes the file.",
    memoryPill: "Live log streaming = `tail -f app.log`"
  }
};

// Option Breakdown Generator for each question
export function getDevOpsOptionBreakdown(questionId) {
  return devopsOptionBreakdownMap[questionId] || null;
}

// Filter questions by tier and topic
export function filterDevOpsQuestions({ tier = 'all', topic = 'all' }) {
  return devopsQuestions.filter((q) => {
    const matchesTier = tier === 'all' || q.tier === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  });
}

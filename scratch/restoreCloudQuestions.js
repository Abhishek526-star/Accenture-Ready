// scratch/restoreCloudQuestions.js
import fs from 'fs';
import { cloudQuestions, CLOUD_TIERS, CLOUD_TOPICS, cloudStudyGuides, optionExplanationsMap } from '../src/data/cloudQuestions.js';

// Filter strictly for original 85 Cloud questions
const pure85 = cloudQuestions.filter(q => typeof q.tier === 'number' && [1, 2, 3].includes(q.tier));
const pureTiers = [
  {
    id: 'all',
    title: 'All Tiers (Complete 85 MCQs)',
    badge: 'Full Prep',
    description: 'Comprehensive Accenture cloud recruitment test bank across all tiers.'
  },
  {
    id: 1,
    title: 'Tier 1 — Core Cloud Fundamentals',
    badge: '25 Questions',
    description: 'Cloud definitions, IaaS/PaaS/SaaS, deployment models, virtualization, hypervisors, and NIST essentials.'
  },
  {
    id: 2,
    title: 'Tier 2 — Services & Cloud Architecture',
    badge: '30 Questions',
    description: 'Object/Block/File storage, VPCs, Subnets, Load Balancers, Containers, Kubernetes, and IAM Security.'
  },
  {
    id: 3,
    title: 'Tier 3 — Enterprise Patterns & DevOps',
    badge: '30 Questions',
    description: 'Serverless, FaaS, Microservices, API Gateways, Disaster Recovery, RPO/RTO, CI/CD, and Deployment Patterns.'
  }
];

const pureTopics = [
  { id: 'all', label: 'All Topics' },
  { id: 'Cloud Fundamentals', label: 'Cloud Fundamentals & Pricing (CapEx/OpEx)' },
  { id: 'Service Models', label: 'Service Models (IaaS, PaaS, SaaS)' },
  { id: 'Deployment Models', label: 'Deployment Models (Public, Private, Hybrid)' },
  { id: 'Virtualization & Hypervisors', label: 'Virtualization & Hypervisors' },
  { id: 'Scalability & Elasticity', label: 'Scalability vs Elasticity' },
  { id: 'High Availability & Resilience', label: 'High Availability, Fault Tolerance & SPOF' },
  { id: 'Cloud Storage & Databases', label: 'Storage (Object/Block/File) & DBs' },
  { id: 'VPC & Networking', label: 'VPC, Subnets, Load Balancers & CDN' },
  { id: 'Containers & Kubernetes', label: 'Docker Containers & Kubernetes' },
  { id: 'Security & IAM', label: 'IAM, Least Privilege, Encryption & Shared Responsibility' },
  { id: 'Serverless & Microservices', label: 'Serverless, FaaS, Microservices & API Gateway' },
  { id: 'Disaster Recovery & Metrics', label: 'Disaster Recovery, RPO & RTO' },
  { id: 'DevOps & Deployment Strategies', label: 'IaC, CI/CD, Blue-Green & Canary' },
  { id: 'Mixed Scenarios', label: 'Accenture Enterprise Scenarios' }
];

const pureStudyGuides = cloudStudyGuides.filter(g => typeof g.tier === 'number' && [1, 2, 3].includes(g.tier));

const pureExplMap = {};
pure85.forEach(q => {
  if (optionExplanationsMap[q.id]) {
    pureExplMap[q.id] = optionExplanationsMap[q.id];
  }
});

const output = `// src/data/cloudQuestions.js
// Comprehensive Cloud Computing Question Bank: 85 Curated MCQs across 3 Tiers

export const CLOUD_TIERS = ${JSON.stringify(pureTiers, null, 2)};

export const CLOUD_TOPICS = ${JSON.stringify(pureTopics, null, 2)};

export const cloudQuestions = ${JSON.stringify(pure85, null, 2)};

export const cloudStudyGuides = ${JSON.stringify(pureStudyGuides, null, 2)};

export const optionExplanationsMap = ${JSON.stringify(pureExplMap, null, 2)};

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
`;

fs.writeFileSync('./src/data/cloudQuestions.js', output, 'utf8');
console.log('Restored cloudQuestions.js to pure 85 items!');

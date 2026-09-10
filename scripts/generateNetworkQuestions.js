// scripts/generateNetworkQuestions.js
import fs from 'fs';
import path from 'path';

const networkData = `// src/data/networkQuestions.js
/**
 * Accenture Computer Networking Question Bank & Comprehensive Study Modules
 * Total Questions: 90 Solved MCQs with 4-Option Explanations & Rationale
 * Tier 1: Core Fundamentals, OSI, TCP/IP, Ports & Protocols (30 MCQs)
 * Tier 2: MAC vs IP, ARP, ICMP, Topologies, Subnetting, CIDR & Addressing (30 MCQs)
 * Tier 3: Devices (Bridge, Repeater, Gateway), Routing, Switching, Security & Commands (30 MCQs)
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

console.log("Starting network data script setup...");

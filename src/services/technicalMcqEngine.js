// src/services/technicalMcqEngine.js
/**
 * Accenture 45-Question Technical MCQ Assessment Engine
 *
 * Exclusively sources questions from existing Accenture PYQ datasets:
 *  - msOfficePyqFull.json (156 Qs)
 *  - computerNetworkPyq.json (120 Qs)
 *  - networkSecurityCloudPyq.json (120 Qs)
 *  - cloudFundamentalsPyq.json (100 Qs)
 *  - dsaOsSqlMcq.json (120 Qs)
 *  - mixedPyq.json (42 Qs)
 *  - pseudocodeQuestions.js (38 Qs)
 *
 * Strict Quota Specification (Exactly 45 Questions):
 *  1. Pseudocode / Programming Fundamentals: 14 Questions
 *  2. Networking: 10 Questions
 *  3. Security & Cloud: 14 Questions
 *  4. Common Applications & MS Office: 7 Questions
 *  Total = 45 Questions
 */

import { pseudocodeQuestions } from '../data/pseudocodeQuestions.js';
import msOfficeRaw from '../data/msOfficePyqFull.json';
import networkSecurityCloudRaw from '../data/networkSecurityCloudPyq.json';
import computerNetworkRaw from '../data/computerNetworkPyq.json';
import cloudFundamentalsRaw from '../data/cloudFundamentalsPyq.json';
import dsaOsSqlRaw from '../data/dsaOsSqlMcq.json';
import mixedPyqRaw from '../data/mixedPyq.json';

const LETTERS = 'ABCDEFGHIJ';

export const TECHNICAL_MAIN_TOPICS = {
  pseudocode: {
    id: 'pseudocode',
    title: 'Pseudocode / Programming Fundamentals',
    shortTitle: 'Pseudocode',
    targetCount: 14,
    color: '#f59e0b'
  },
  networking: {
    id: 'networking',
    title: 'Computer Networking',
    shortTitle: 'Networking',
    targetCount: 10,
    color: '#0ea5e9'
  },
  security_cloud: {
    id: 'security_cloud',
    title: 'Security & Cloud Computing',
    shortTitle: 'Security & Cloud',
    targetCount: 14,
    color: '#8b5cf6'
  },
  ms_office: {
    id: 'ms_office',
    title: 'Common Applications & MS Office',
    shortTitle: 'MS Office',
    targetCount: 7,
    color: '#10b981'
  }
};

export const TECHNICAL_DISTRIBUTION = {
  pseudocode: {
    total: 14,
    subtopics: {
      'Programming Fundamentals & Operators': 2,
      'Conditional Statements': 1,
      'Loops': 2,
      'Arrays': 2,
      'Functions': 1,
      'Recursion': 1,
      'Bitwise Operators': 1,
      'OOP Concepts': 1,
      'Data Structures': 2,
      'Input/Output & Storage Classes': 1
    }
  },
  networking: {
    total: 10,
    subtopics: {
      'Networking Fundamentals / LAN-WAN-MAN': 1,
      'OSI & TCP/IP Model': 2,
      'IP Addressing & Subnetting': 2,
      'TCP/UDP & Protocols': 2,
      'DNS / HTTP / Network Services': 1,
      'Network Devices': 1,
      'Client-Server Architecture': 1
    }
  },
  security_cloud: {
    total: 14,
    subtopics: {
      'Cybersecurity Fundamentals': 2,
      'Authentication & Authorization': 1,
      'Encryption & Cryptography': 2,
      'Security Attacks': 2,
      'Firewall & Security Devices': 2,
      'Cloud Computing Fundamentals': 2,
      'IaaS / PaaS / SaaS': 1,
      'Cloud Deployment Models': 1,
      'Cloud Security / Data Protection': 1
    }
  },
  ms_office: {
    total: 7,
    subtopics: {
      'MS Word': 1,
      'MS Excel': 2,
      'MS PowerPoint': 1,
      'MS Outlook': 1,
      'Browser Fundamentals': 1,
      'Shortcut Keys / Command Prompt': 1
    }
  }
};

/**
 * Standardize option formats into [{ id: 'A', text: '...' }]
 */
function normalizeOptions(rawOptions) {
  if (Array.isArray(rawOptions)) {
    if (rawOptions.length > 0 && typeof rawOptions[0] === 'object' && rawOptions[0] !== null) {
      return rawOptions.map((opt) => ({
        id: opt.id,
        text: String(opt.text ?? '')
      }));
    }
    return rawOptions.map((text, i) => ({
      id: LETTERS[i] || String(i + 1),
      text: String(text ?? '')
    }));
  }
  if (rawOptions && typeof rawOptions === 'object') {
    return Object.keys(rawOptions)
      .sort()
      .map((key) => ({
        id: key,
        text: String(rawOptions[key] ?? '')
      }));
  }
  return [];
}

/**
 * Classify a question into its exact Main Topic and Subtopic
 */
function classifyQuestion(rawText, originBank, section = '') {
  const t = String(rawText || '').toLowerCase();
  const sec = String(section || '').toLowerCase();

  // 1. MS Office & Common Applications
  if (
    originBank === 'ms-office' ||
    t.includes('ms word') ||
    t.includes('ms excel') ||
    t.includes('powerpoint') ||
    t.includes('outlook') ||
    t.includes('ctrl+') ||
    t.includes('alt+')
  ) {
    if (
      t.includes('excel') ||
      t.includes('worksheet') ||
      t.includes('workbook') ||
      t.includes('spreadsheet') ||
      t.includes('pivot table') ||
      t.includes('formula') ||
      t.includes('vlookup') ||
      t.includes('sum(') ||
      t.includes('cell ')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'MS Excel' };
    }
    if (
      t.includes('word') ||
      t.includes('paragraph') ||
      t.includes('margin') ||
      t.includes('font') ||
      t.includes('mail merge') ||
      t.includes('header') ||
      t.includes('footer')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'MS Word' };
    }
    if (
      t.includes('powerpoint') ||
      t.includes('slide') ||
      t.includes('presentation') ||
      t.includes('slide show') ||
      t.includes('transition') ||
      t.includes('animation pane')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'MS PowerPoint' };
    }
    if (
      t.includes('outlook') ||
      t.includes('email') ||
      t.includes('inbox') ||
      t.includes('calendar') ||
      t.includes('pst') ||
      t.includes('ost') ||
      t.includes('appointment')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'MS Outlook' };
    }
    if (
      t.includes('ctrl') ||
      t.includes('alt+') ||
      t.includes('shift+') ||
      t.includes('shortcut') ||
      t.includes('command prompt') ||
      t.includes('cmd') ||
      t.includes('hotkey') ||
      t.includes('key combination')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'Shortcut Keys / Command Prompt' };
    }
    if (
      t.includes('browser') ||
      t.includes('cache') ||
      t.includes('cookie') ||
      t.includes('url') ||
      t.includes('rendering engine') ||
      t.includes('incognito') ||
      t.includes('history') ||
      t.includes('tab')
    ) {
      return { mainTopic: 'ms_office', subtopic: 'Browser Fundamentals' };
    }
    return { mainTopic: 'ms_office', subtopic: 'Shortcut Keys / Command Prompt' };
  }

  // 2. Pseudocode / Programming Fundamentals
  if (
    originBank === 'pseudocode' ||
    sec === 'dsa' ||
    t.includes('pseudocode') ||
    t.includes('algorithm') ||
    t.includes('binary tree') ||
    t.includes('linked list') ||
    t.includes('stack') ||
    t.includes('queue') ||
    t.includes('recursion') ||
    t.includes('bitwise')
  ) {
    if (
      t.includes('bitwise') ||
      t.includes('xor') ||
      t.includes('^') ||
      t.includes('>>') ||
      t.includes('<<') ||
      (t.includes('&') && (t.includes('shift') || t.includes('bit ')))
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Bitwise Operators' };
    }
    if (
      t.includes('recursion') ||
      t.includes('recursive') ||
      t.includes('call stack') ||
      t.includes('base condition') ||
      (t.includes('terminates') && t.includes('calls'))
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Recursion' };
    }
    if (
      t.includes('array') ||
      t.includes('matrix') ||
      t.includes('arr[') ||
      t.includes('indexing') ||
      t.includes('subscript') ||
      t.includes('dimension')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Arrays' };
    }
    if (
      t.includes('while') ||
      t.includes('for ') ||
      t.includes('loop') ||
      t.includes('iteration') ||
      t.includes('do-while')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Loops' };
    }
    if (
      t.includes('if ') ||
      t.includes('else') ||
      t.includes('conditional') ||
      t.includes('switch') ||
      t.includes('case ')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Conditional Statements' };
    }
    if (
      t.includes('function') ||
      t.includes('procedure') ||
      t.includes('parameter') ||
      t.includes('return ') ||
      t.includes('argument') ||
      t.includes('pass by')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Functions' };
    }
    if (
      t.includes('oop') ||
      t.includes('class') ||
      t.includes('object') ||
      t.includes('inheritance') ||
      t.includes('polymorphism') ||
      t.includes('encapsulation') ||
      t.includes('abstraction') ||
      t.includes('constructor') ||
      t.includes('interface')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'OOP Concepts' };
    }
    if (
      t.includes('tree') ||
      t.includes('graph') ||
      t.includes('stack') ||
      t.includes('queue') ||
      t.includes('linked list') ||
      t.includes('heap') ||
      t.includes('hash') ||
      t.includes('node') ||
      t.includes('traversal')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Data Structures' };
    }
    if (
      t.includes('storage class') ||
      t.includes('static') ||
      t.includes('register') ||
      t.includes('extern') ||
      t.includes('auto') ||
      t.includes('scope') ||
      t.includes('print') ||
      t.includes('input') ||
      t.includes('output') ||
      t.includes('scanf') ||
      t.includes('printf')
    ) {
      return { mainTopic: 'pseudocode', subtopic: 'Input/Output & Storage Classes' };
    }
    return { mainTopic: 'pseudocode', subtopic: 'Programming Fundamentals & Operators' };
  }

  // 3. Security & Cloud
  if (
    originBank === 'cloudfund' ||
    t.includes('cloud') ||
    t.includes('iaas') ||
    t.includes('paas') ||
    t.includes('saas') ||
    t.includes('security') ||
    t.includes('firewall') ||
    t.includes('encrypt') ||
    t.includes('cipher') ||
    t.includes('attack') ||
    t.includes('malware') ||
    t.includes('authentication') ||
    t.includes('authorization') ||
    t.includes('crypto')
  ) {
    if (
      t.includes('iaas') ||
      t.includes('paas') ||
      t.includes('saas') ||
      t.includes('service model') ||
      t.includes('infrastructure as a service') ||
      t.includes('platform as a service') ||
      t.includes('software as a service')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'IaaS / PaaS / SaaS' };
    }
    if (
      t.includes('deployment model') ||
      t.includes('public cloud') ||
      t.includes('private cloud') ||
      t.includes('hybrid cloud') ||
      t.includes('community cloud')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Cloud Deployment Models' };
    }
    if (
      t.includes('cloud security') ||
      t.includes('cloud storage') ||
      t.includes('tenant') ||
      t.includes('shared responsibility') ||
      t.includes('cloud monitoring') ||
      (t.includes('data protection') && t.includes('cloud'))
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Cloud Security / Data Protection' };
    }
    if (
      t.includes('cloud') ||
      t.includes('virtualization') ||
      t.includes('hypervisor') ||
      t.includes('elasticity') ||
      t.includes('scalability') ||
      t.includes('multi-tenant') ||
      t.includes('cloud computing')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Cloud Computing Fundamentals' };
    }
    if (
      t.includes('firewall') ||
      t.includes('packet filtering') ||
      t.includes('stateful') ||
      t.includes('proxy firewall') ||
      t.includes('ids') ||
      t.includes('ips') ||
      t.includes('bastion') ||
      t.includes('vpn') ||
      t.includes('dmz')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Firewall & Security Devices' };
    }
    if (
      t.includes('encrypt') ||
      t.includes('decrypt') ||
      t.includes('aes') ||
      t.includes('des') ||
      t.includes('rsa') ||
      t.includes('cryptography') ||
      t.includes('cipher') ||
      t.includes('public key') ||
      t.includes('private key') ||
      t.includes('symmetric') ||
      t.includes('asymmetric') ||
      t.includes('hash') ||
      t.includes('sha') ||
      t.includes('md5')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Encryption & Cryptography' };
    }
    if (
      t.includes('attack') ||
      t.includes('ddos') ||
      t.includes('dos') ||
      t.includes('phishing') ||
      t.includes('spoofing') ||
      t.includes('man-in-the-middle') ||
      t.includes('mitm') ||
      t.includes('virus') ||
      t.includes('worm') ||
      t.includes('trojan') ||
      t.includes('malware') ||
      t.includes('ransomware') ||
      t.includes('smurf') ||
      t.includes('sniffing') ||
      t.includes('injection')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Security Attacks' };
    }
    if (
      t.includes('authenticat') ||
      t.includes('authoriz') ||
      t.includes('biometric') ||
      t.includes('mfa') ||
      t.includes('multi-factor') ||
      t.includes('password') ||
      t.includes('access control') ||
      t.includes('rbac') ||
      t.includes('oauth') ||
      t.includes('saml')
    ) {
      return { mainTopic: 'security_cloud', subtopic: 'Authentication & Authorization' };
    }
    return { mainTopic: 'security_cloud', subtopic: 'Cybersecurity Fundamentals' };
  }

  // 4. Networking
  if (
    t.includes('osi') ||
    t.includes('tcp') ||
    t.includes('udp') ||
    t.includes('ip address') ||
    t.includes('subnet') ||
    t.includes('router') ||
    t.includes('switch') ||
    t.includes('dns') ||
    t.includes('http') ||
    t.includes('topology') ||
    t.includes('lan') ||
    t.includes('wan') ||
    t.includes('ethernet') ||
    t.includes('network') ||
    t.includes('socket') ||
    t.includes('server') ||
    t.includes('client')
  ) {
    if (
      t.includes('client') ||
      t.includes('server') ||
      t.includes('peer-to-peer') ||
      t.includes('p2p') ||
      t.includes('socket') ||
      t.includes('architecture')
    ) {
      return { mainTopic: 'networking', subtopic: 'Client-Server Architecture' };
    }
    if (
      t.includes('osi') ||
      t.includes('tcp/ip') ||
      t.includes('layer') ||
      t.includes('presentation layer') ||
      t.includes('session layer') ||
      t.includes('transport layer') ||
      t.includes('data link') ||
      t.includes('physical layer') ||
      t.includes('network layer')
    ) {
      return { mainTopic: 'networking', subtopic: 'OSI & TCP/IP Model' };
    }
    if (
      t.includes('subnet') ||
      t.includes('ip address') ||
      t.includes('ipv4') ||
      t.includes('ipv6') ||
      t.includes('cidr') ||
      t.includes('class a') ||
      t.includes('class b') ||
      t.includes('class c') ||
      t.includes('mask') ||
      t.includes('gateway') ||
      t.includes('unicast') ||
      t.includes('multicast') ||
      t.includes('broadcast')
    ) {
      return { mainTopic: 'networking', subtopic: 'IP Addressing & Subnetting' };
    }
    if (
      t.includes('tcp') ||
      t.includes('udp') ||
      t.includes('handshake') ||
      t.includes('syn') ||
      t.includes('ack') ||
      t.includes('flow control') ||
      t.includes('sliding window') ||
      t.includes('congestion') ||
      t.includes('port 80') ||
      t.includes('port 443') ||
      t.includes('port 21') ||
      t.includes('port 25') ||
      t.includes('connection-oriented')
    ) {
      return { mainTopic: 'networking', subtopic: 'TCP/UDP & Protocols' };
    }
    if (
      t.includes('dns') ||
      t.includes('http') ||
      t.includes('https') ||
      t.includes('dhcp') ||
      t.includes('arp') ||
      t.includes('rarp') ||
      t.includes('icmp') ||
      t.includes('ftp') ||
      t.includes('smtp') ||
      t.includes('telnet') ||
      t.includes('url')
    ) {
      return { mainTopic: 'networking', subtopic: 'DNS / HTTP / Network Services' };
    }
    if (
      t.includes('router') ||
      t.includes('switch') ||
      t.includes('hub') ||
      t.includes('bridge') ||
      t.includes('repeater') ||
      t.includes('modem') ||
      t.includes('nic') ||
      t.includes('access point') ||
      t.includes('device')
    ) {
      return { mainTopic: 'networking', subtopic: 'Network Devices' };
    }
    return { mainTopic: 'networking', subtopic: 'Networking Fundamentals / LAN-WAN-MAN' };
  }

  return null;
}

/**
 * Build the unified pool of normalized & classified questions from all PYQ sources
 */
export function buildUnifiedPyqPool() {
  const pool = [];

  // 1. Pseudocode questions
  if (Array.isArray(pseudocodeQuestions)) {
    pseudocodeQuestions.forEach((q, idx) => {
      const fullText = `${q.title || ''} ${q.pseudocode || ''} ${q.explanation || ''}`;
      const classification = classifyQuestion(fullText, 'pseudocode');
      if (classification) {
        const correctLetter =
          typeof q.correctAnswer === 'number'
            ? LETTERS[q.correctAnswer]
            : String(q.correctAnswer || 'A');

        pool.push({
          id: `pseudo-${q.id || idx}`,
          originalId: q.id,
          title: q.title || `Pseudocode Problem #${idx + 1}`,
          question: q.pseudocode ? `${q.title ? `${q.title}\n\n` : ''}${q.pseudocode}` : q.title,
          pseudocode: q.pseudocode || '',
          options: normalizeOptions(q.options),
          correctAnswer: correctLetter,
          explanation: q.explanation || '',
          optionExplanations: {},
          source: 'Accenture Pseudocode PYQ Round',
          originBank: 'pseudocode',
          mainTopic: classification.mainTopic,
          subtopic: classification.subtopic
        });
      }
    });
  }

  // 2. Helper for raw JSON PYQ files
  function ingestJsonBank(raw, bankKey, bankSource) {
    const list = Array.isArray(raw) ? raw : raw?.questions || [];
    list.forEach((q, idx) => {
      const fullText = `${q.question || ''} ${q.explanation || ''} ${q.section || ''} ${Object.values(
        q.explanations || {}
      ).join(' ')}`;
      const classification = classifyQuestion(fullText, bankKey, q.section);
      if (classification) {
        const optExpl = {};
        if (Array.isArray(q.options) && typeof q.options[0] === 'object') {
          q.options.forEach((o) => {
            if (o && o.explanation) optExpl[o.id] = o.explanation;
          });
        }
        if (q.explanations) Object.assign(optExpl, q.explanations);

        const ans = String(q.correctAnswer || q.answer || 'A');

        pool.push({
          id: `${bankKey}-${q.id ?? idx}`,
          originalId: q.id,
          title: `Question #${idx + 1}`,
          question: q.question,
          pseudocode: '',
          options: normalizeOptions(q.options),
          correctAnswer: ans,
          explanation: q.explanation || (q.explanations ? q.explanations[ans] : '') || '',
          optionExplanations: optExpl,
          source: bankSource,
          originBank: bankKey,
          section: q.section || '',
          mainTopic: classification.mainTopic,
          subtopic: classification.subtopic
        });
      }
    });
  }

  ingestJsonBank(msOfficeRaw, 'ms-office', 'Accenture Common Application & MS Office PYQs');
  ingestJsonBank(networkSecurityCloudRaw, 'netsec', 'Accenture Network Security & Cloud PYQs');
  ingestJsonBank(computerNetworkRaw, 'compnet', 'Accenture Computer Networks PYQs');
  ingestJsonBank(cloudFundamentalsRaw, 'cloudfund', 'Accenture Cloud Computing PYQs');
  ingestJsonBank(dsaOsSqlRaw, 'dsa-os-sql', 'Accenture DSA, OS & SQL PYQs');
  ingestJsonBank(mixedPyqRaw, 'mixed', 'Accenture Mixed Assessment PYQs');

  return pool;
}

// Global cached pool
let _unifiedPoolCache = null;
export function getUnifiedPool() {
  if (!_unifiedPoolCache) {
    _unifiedPoolCache = buildUnifiedPyqPool();
  }
  return _unifiedPoolCache;
}

/**
 * Deterministic Pseudo-Random Shuffle using a linear congruential generator (LCG)
 */
function seededShuffle(array, seed = 42) {
  const result = [...array];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generate a 45-question assessment with exact distribution and fallback handling
 *
 * @param {Object} options
 * @param {number} options.setNumber - 1 or 2 (or any positive integer)
 * @param {Set<string>} options.excludeIds - question IDs to exclude (ensures 0 duplicates between sets)
 * @param {boolean} options.randomize - whether to shuffle questions
 * @returns {Array<Object>} List of 45 selected questions
 */
export function generateTechnicalAssessment({
  setNumber = 1,
  excludeIds = new Set(),
  randomize = true
} = {}) {
  const pool = getUnifiedPool();
  const selected = [];
  const usedInThisExam = new Set();

  for (const [mainTopic, config] of Object.entries(TECHNICAL_DISTRIBUTION)) {
    const mainTopicSelected = [];
    const mainPool = pool.filter((q) => q.mainTopic === mainTopic);

    // 1. Select for each specified subtopic
    for (const [subtopic, quota] of Object.entries(config.subtopics)) {
      const subPool = mainPool.filter(
        (q) =>
          q.subtopic === subtopic &&
          !excludeIds.has(q.id) &&
          !usedInThisExam.has(q.id)
      );

      const picked = subPool.slice(0, quota);
      picked.forEach((q) => {
        mainTopicSelected.push({ ...q, assignedMainTopic: mainTopic, assignedSubtopic: subtopic });
        usedInThisExam.add(q.id);
      });
    }

    // 2. Fallback: If subtopic shortage occurs, take remaining from same main topic
    if (mainTopicSelected.length < config.total) {
      const shortage = config.total - mainTopicSelected.length;
      const fallbackPool = mainPool.filter(
        (q) => !excludeIds.has(q.id) && !usedInThisExam.has(q.id)
      );

      const pickedFallback = fallbackPool.slice(0, shortage);
      pickedFallback.forEach((q) => {
        mainTopicSelected.push({ ...q, assignedMainTopic: mainTopic, assignedSubtopic: q.subtopic });
        usedInThisExam.add(q.id);
      });
    }

    if (mainTopicSelected.length < config.total) {
      throw new Error(
        `Insufficient PYQs: Main topic '${mainTopic}' requires ${config.total} questions, but only ${mainTopicSelected.length} could be fulfilled without duplicates.`
      );
    }

    selected.push(...mainTopicSelected);
  }

  // Verification check: Must equal exactly 45 questions
  if (selected.length !== 45) {
    throw new Error(`Assessment generation error: Expected 45 questions, got ${selected.length}`);
  }

  // Shuffle order if requested using setNumber as seed
  return randomize ? seededShuffle(selected, setNumber * 7919) : selected;
}

// Memoized Set 1 and Set 2 with 0 overlapping questions
let _set1Cache = null;
let _set2Cache = null;

export function getTechnicalMcqSet(setNumber = 1) {
  if (setNumber === 1) {
    if (!_set1Cache) {
      _set1Cache = generateTechnicalAssessment({ setNumber: 1, excludeIds: new Set() });
    }
    return _set1Cache;
  }

  if (setNumber === 2) {
    if (!_set2Cache) {
      const set1 = getTechnicalMcqSet(1);
      const set1Ids = new Set(set1.map((q) => q.id));
      _set2Cache = generateTechnicalAssessment({ setNumber: 2, excludeIds: set1Ids });
    }
    return _set2Cache;
  }

  // Fallback for custom or random attempts
  return generateTechnicalAssessment({ setNumber, excludeIds: new Set() });
}

/**
 * Calculate full performance analytics (overall, main topic, subtopic)
 */
export function calculateAssessmentAnalytics(questions, userAnswers) {
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  // Main topic breakdown
  const mainTopicStats = {
    pseudocode: { total: 0, correct: 0, incorrect: 0, unattempted: 0 },
    networking: { total: 0, correct: 0, incorrect: 0, unattempted: 0 },
    security_cloud: { total: 0, correct: 0, incorrect: 0, unattempted: 0 },
    ms_office: { total: 0, correct: 0, incorrect: 0, unattempted: 0 }
  };

  // Subtopic breakdown grouped by main topic
  const subtopicStats = {};

  questions.forEach((q) => {
    const mainKey = q.assignedMainTopic || q.mainTopic;
    const subKey = q.assignedSubtopic || q.subtopic;
    const userChoice = userAnswers[q.id];
    const isCorrect = userChoice === q.correctAnswer;
    const isUnattempted = !userChoice;

    if (isUnattempted) {
      unattemptedCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }

    // Main topic stats
    if (mainTopicStats[mainKey]) {
      mainTopicStats[mainKey].total += 1;
      if (isCorrect) mainTopicStats[mainKey].correct += 1;
      else if (isUnattempted) mainTopicStats[mainKey].unattempted += 1;
      else mainTopicStats[mainKey].incorrect += 1;
    }

    // Subtopic stats
    if (!subtopicStats[mainKey]) {
      subtopicStats[mainKey] = {};
    }
    if (!subtopicStats[mainKey][subKey]) {
      subtopicStats[mainKey][subKey] = { total: 0, correct: 0, incorrect: 0, unattempted: 0 };
    }
    subtopicStats[mainKey][subKey].total += 1;
    if (isCorrect) subtopicStats[mainKey][subKey].correct += 1;
    else if (isUnattempted) subtopicStats[mainKey][subKey].unattempted += 1;
    else subtopicStats[mainKey][subKey].incorrect += 1;
  });

  const total = questions.length || 45;
  const percentage = Math.round((correctCount / total) * 100);

  // Performance badge & grade
  let grade = {
    title: 'Foundational Review Needed',
    badge: 'Needs Improvement',
    color: '#ef4444'
  };
  if (percentage >= 85) {
    grade = {
      title: 'Outstanding — Accenture Ready!',
      badge: 'Assessment Specialist (Top 5%)',
      color: '#10b981'
    };
  } else if (percentage >= 70) {
    grade = {
      title: 'Strong Clear Pass — Placement Ready',
      badge: 'Proficient',
      color: '#0284c7'
    };
  } else if (percentage >= 50) {
    grade = {
      title: 'Moderate — Revise Weak Subtopics',
      badge: 'Passing Candidate',
      color: '#f59e0b'
    };
  }

  return {
    totalQuestions: total,
    score: correctCount,
    correctCount,
    incorrectCount,
    unattemptedCount,
    percentage,
    grade,
    mainTopicStats,
    subtopicStats
  };
}

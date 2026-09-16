// src/data/pyqBanks.js
/**
 * PYQ (Previous Year Questions) Bank Registry
 *
 * Rendered by PYQExamPage (/pyq/:bankId) using the Accenture Cloud
 * Assessment design system (cloud-* classes) with Exam/Practice modes:
 *   - Exam: timed (1 min per question), submit -> full analysis report
 *   - Practice: instant correct/incorrect reveal + per-option explanations
 *
 * Supports three uploaded-JSON shapes (auto-detected per question):
 *   1. MS Office: top-level array; options [{id,text,explanation}];
 *      correctAnswer; explanation (string).
 *   2. Network/Cloud: {title, category, source, questions}; options as
 *      plain strings (ids auto-assigned A,B,C,...); `answer` key;
 *      `explanations: {A:..., B:...}` map.
 *   3. Computer Networks: {title, category, source, questions}; options
 *      as an OBJECT keyed by letter ({A:"text", B:"text", ...});
 *      correctAnswer; explanations map.
 *
 * All shapes normalize to the same engine shape consumed by the exam page:
 * { id, question, options:[{id,text}], correctAnswer, explanation,
 *   optionExplanations, topic, topicLabel, source }
 */
import msOfficePyqFull from './msOfficePyqFull.json';
import networkSecurityCloudPyq from './networkSecurityCloudPyq.json';
import computerNetworkPyq from './computerNetworkPyq.json';
import dsaOsSqlMcq from './dsaOsSqlMcq.json';
import cloudFundamentalsPyq from './cloudFundamentalsPyq.json';
import mixedPyq from './mixedPyq.json';

const LETTERS = 'ABCDEFGHIJ';

const SECTION_MAP = {
  dsa: 'dsa',
  'operating systems': 'os',
  os: 'os',
  sql: 'sql'
};

/**
 * Lightweight keyword classifier so each paper can offer Cloud-style
 * "tier tabs" (All Questions / MS Word / Network Security / ...) without
 * needing manual metadata in the uploaded JSON.
 */
const classifyTopic = (text) => {
  const t = String(text || '').toLowerCase();

  // --- DevOps & Containers ---
  if (
    t.includes('devops') ||
    t.includes('container') ||
    t.includes('docker') ||
    t.includes('kubernetes') ||
    t.includes('continuous deployment') ||
    t.includes('continuous integration') ||
    t.includes('ci/cd') ||
    t.includes('microservice')
  ) {
    return 'devops';
  }

  // --- Network Security ---
  if (
    t.includes('firewall') ||
    t.includes('virus') ||
    t.includes('malware') ||
    t.includes('cipher') ||
    t.includes('encrypt') ||
    t.includes('vpn') ||
    t.includes('spoof') ||
    t.includes('attack') ||
    t.includes('trojan') ||
    t.includes('spyware') ||
    t.includes('spam') ||
    t.includes('bombing') ||
    t.includes('antivirus') ||
    t.includes('aes') ||
    t.includes('des ') ||
    t.includes('cryptography') ||
    t.includes('certificate') ||
    t.includes('pki') ||
    t.includes('https') ||
    t.includes('security')
  ) {
    return 'network-security';
  }

  // --- Cloud Computing ---
  if (
    t.includes('cloud') ||
    t.includes('saas') ||
    t.includes('paas') ||
    t.includes('iaas') ||
    t.includes('aws') ||
    t.includes('azure') ||
    t.includes('virtualization') ||
    t.includes('hypervisor') ||
    t.includes('deployment model') ||
    t.includes('service model')
  ) {
    return 'cloud';
  }

  // --- Mobile & Wireless ---
  if (
    t.includes('mobile') ||
    t.includes('wi-fi') ||
    t.includes('wifi') ||
    t.includes('lte') ||
    t.includes('mimo') ||
    t.includes('sdn') ||
    t.includes('wireless') ||
    t.includes('edge computing') ||
    t.includes('hidden node')
  ) {
    return 'mobile-wireless';
  }

  // --- Networking ---
  if (
    t.includes('osi') ||
    t.includes('tcp') ||
    t.includes('udp') ||
    t.includes('subnet') ||
    t.includes('router') ||
    t.includes('switch') ||
    t.includes('topology') ||
    t.includes('ethernet') ||
    t.includes('routing') ||
    t.includes('bgp') ||
    t.includes('ospf') ||
    t.includes('lan') ||
    t.includes('wan') ||
    t.includes('dns') ||
    t.includes('dhcp') ||
    t.includes('arp') ||
    t.includes('modem') ||
    t.includes('bridge') ||
    t.includes('gateway') ||
    t.includes('packet') ||
    t.includes('protocol') ||
    t.includes('ip address') ||
    t.includes('ipv') ||
    t.includes('icmp') ||
    t.includes('mac address') ||
    t.includes('ftp') ||
    t.includes('smtp') ||
    t.includes('http')
  ) {
    return 'networking';
  }

  // --- Web & Internet ---
  if (
    t.includes('browser') ||
    t.includes('webpage') ||
    t.includes('web ') ||
    t.includes('url') ||
    t.includes('internet') ||
    t.includes('website') ||
    t.includes('email') ||
    t.includes('e-mail')
  ) {
    return 'web-internet';
  }

  // --- MS Office (bank 1) ---
  if (t.includes('powerpoint') || t.includes('slide') || t.includes('presentation')) {
    return 'powerpoint';
  }
  if (
    t.includes('excel') ||
    t.includes('worksheet') ||
    t.includes('workbook') ||
    t.includes('spreadsheet') ||
    t.includes('pivot') ||
    t.includes('formula') ||
    t.includes('cell')
  ) {
    return 'excel';
  }
  if (t.includes('outlook') || t.includes('mail file')) {
    return 'outlook';
  }
  if (
    t.includes('word') ||
    t.includes('paragraph') ||
    t.includes('margin') ||
    t.includes('document') ||
    t.includes('font')
  ) {
    return 'word';
  }

  return 'fundamentals';
};

export const PYQ_TOPIC_LABELS = {
  all: 'All Topics',
  dsa: 'DSA',
  os: 'Operating Systems',
  sql: 'SQL',
  word: 'MS Word',
  excel: 'MS Excel',
  powerpoint: 'MS PowerPoint',
  outlook: 'Outlook & Email',
  'network-security': 'Network Security',
  cloud: 'Cloud Computing',
  networking: 'Networking',
  'mobile-wireless': 'Mobile & Wireless',
  'web-internet': 'Web & Internet',
  fundamentals: 'Computer Fundamentals',
  devops: 'DevOps & Containers'
};

/**
 * Normalize a single question's options into [{id, text}] regardless of
 * the uploaded shape:
 *   - Array of {id, text, ...} objects  -> used as-is
 *   - Array of strings                  -> ids auto-assigned A,B,C,...
 *   - Object map {A:"text", B:"text"}   -> entries sorted by letter
 */
const normalizeOptions = (rawOptions) => {
  if (Array.isArray(rawOptions)) {
    if (rawOptions.length > 0 && typeof rawOptions[0] === 'object' && rawOptions[0] !== null) {
      return rawOptions.map((opt) => ({ id: opt.id, text: opt.text }));
    }
    return rawOptions.map((text, i) => ({ id: LETTERS[i], text: String(text) }));
  }
  if (rawOptions && typeof rawOptions === 'object') {
    return Object.keys(rawOptions)
      .sort()
      .map((key) => ({ id: key, text: String(rawOptions[key]) }));
  }
  return [];
};

/**
 * Unified question normalizer — handles all three uploaded shapes and
 * emits the single engine shape consumed by PYQExamPage.
 */
const normalizeQuestions = (raw, fallbackSource) => {
  const questions = Array.isArray(raw) ? raw : raw.questions || [];
  const bankSource = (!Array.isArray(raw) && raw.source) || fallbackSource;

  return questions.map((q, idx) => {
    let topic;
    if (q.section) {
      const s = String(q.section).trim().toLowerCase();
      topic = SECTION_MAP[s] || s;
    } else {
      topic = classifyTopic(q.question);
    }

    const explanations = q.explanations || {};
    const correctAnswer = q.correctAnswer || q.answer;
    const options = normalizeOptions(q.options);

    // Per-option explanations: prefer per-option `explanation` fields
    // (shape 1), fall back to the `explanations` map (shapes 2 & 3).
    const optionExplanations = {};
    if (Array.isArray(q.options) && q.options.length > 0 && typeof q.options[0] === 'object') {
      q.options.forEach((opt) => {
        if (opt && opt.explanation) optionExplanations[opt.id] = opt.explanation;
      });
    }
    Object.keys(explanations).forEach((key) => {
      if (!optionExplanations[key]) optionExplanations[key] = explanations[key];
    });

    return {
      id: q.id ?? idx + 1,
      question: q.question,
      options,
      correctAnswer,
      explanation: q.explanation || explanations[correctAnswer] || '',
      optionExplanations,
      topic,
      topicLabel: PYQ_TOPIC_LABELS[topic] || q.section || 'General',
      source: q.source || bankSource
    };
  });
};

const msOfficeQuestions = normalizeQuestions(
  msOfficePyqFull,
  'Accenture Common Application and MS Office PYQ PDF'
);

const networkCloudQuestions = normalizeQuestions(
  networkSecurityCloudPyq,
  'Uploaded Accenture PYQ PDF'
);

const computerNetworkQuestions = normalizeQuestions(
  computerNetworkPyq,
  'Uploaded PYQ PDF (30 pages)'
);

const dsaOsSqlQuestions = normalizeQuestions(
  dsaOsSqlMcq,
  'Uploaded Accenture PYQ PDF (32 pages)'
);

const cloudFundamentalsQuestions = normalizeQuestions(
  cloudFundamentalsPyq,
  'Uploaded Accenture Cloud PDF (26 pages)'
);

const mixedPyqQuestions = normalizeQuestions(
  mixedPyq,
  'Uploaded Accenture Mixed PYQ PDF (16 pages)'
);

export const PYQ_BANKS = [
  {
    id: 'cloud-fundamentals',
    title: 'Accenture Cloud Assessment – Cloud Computing Practice',
    shortTitle: 'Cloud Computing, Virtualization & Security',
    description:
      'Cloud Computing, Virtualization, Cloud Storage, Cloud Security, IAM & Cloud Networking PYQ paper — 100 MCQs in exam and practice modes with detailed per-option explanations.',
    badge: `${cloudFundamentalsQuestions.length} Qs`,
    durationMinutes: cloudFundamentalsQuestions.length,
    questions: cloudFundamentalsQuestions
  },
  {
    id: 'ms-office-pyq',
    title: 'Accenture Cloud Assessment – MS Office PYQ Practice',
    shortTitle: 'MS Office & Computer Fundamentals',
    description:
      'Common Application & MS Office PYQ paper — Word, Excel, PowerPoint, Outlook & Computer Fundamentals with exam and practice modes.',
    badge: `${msOfficeQuestions.length} Qs`,
    durationMinutes: msOfficeQuestions.length,
    questions: msOfficeQuestions
  },
  {
    id: 'network-security-cloud-pyq',
    title: 'Accenture Cloud Assessment – Network Security & Cloud PYQ Practice',
    shortTitle: 'Network Security & Cloud',
    description:
      'Network Security & Cloud Computing PYQ paper — OSI/TCP-IP, attacks, firewalls, cryptography, cloud service & deployment models with exam and practice modes.',
    badge: `${networkCloudQuestions.length} Qs`,
    durationMinutes: networkCloudQuestions.length,
    questions: networkCloudQuestions
  },
  {
    id: 'computer-network-pyq',
    title: 'Accenture Cloud Assessment – Computer Networks PYQ Practice',
    shortTitle: 'Computer Networks & Mobile Computing',
    description:
      'Computer Networks PYQ paper — OSI/TCP-IP, routing (OSPF/BGP), Ethernet, HTTP/FTP, cryptography, Wi-Fi & mobile computing with exam and practice modes.',
    badge: `${computerNetworkQuestions.length} Qs`,
    durationMinutes: computerNetworkQuestions.length,
    questions: computerNetworkQuestions
  },
  {
    id: 'dsa-os-sql-mcq',
    title: 'Accenture Cloud Assessment – DSA, OS & SQL PYQ Practice',
    shortTitle: 'DSA, Operating Systems & SQL',
    description:
      'DSA, Operating Systems & SQL PYQ paper — 120 MCQs (40 DSA, 40 OS, 40 SQL) with detailed per-option explanations in exam and practice modes.',
    badge: `${dsaOsSqlQuestions.length} Qs`,
    durationMinutes: dsaOsSqlQuestions.length,
    questions: dsaOsSqlQuestions
  },
  {
    id: 'mixed-pyq',
    title: 'Accenture Mixed PYQs – Cloud, Networking, OS, Security, DevOps & MS Office',
    shortTitle: 'Mixed PYQs (Full Paper)',
    description:
      'Full Accenture assessment paper — 42 high-frequency MCQs covering Cloud Storage, HTTP, Networking, Operating Systems, Cyber Security, DevOps, Containerization & MS Office with detailed per-option explanations.',
    badge: `${mixedPyqQuestions.length} Qs`,
    durationMinutes: mixedPyqQuestions.length,
    questions: mixedPyqQuestions
  }
];

export const getPyqBankById = (bankId) =>
  PYQ_BANKS.find((bank) => bank.id === bankId) || null;

/**
 * Build Cloud-style tier tabs from a question list:
 * [{ id:'all', title:'All Questions', badge:'156 Qs' }, ...topic groups]
 */
export function buildPyqGroups(questions) {
  const counts = new Map();
  questions.forEach((q) => {
    counts.set(q.topic, (counts.get(q.topic) || 0) + 1);
  });
  const groups = [
    { id: 'all', title: 'All Questions', badge: `${questions.length} Qs` }
  ];
  counts.forEach((count, topic) => {
    groups.push({
      id: topic,
      title: PYQ_TOPIC_LABELS[topic] || topic,
      badge: `${count} Qs`
    });
  });
  return groups;
}

/**
 * Topic options for the header dropdown (Cloud topic selector parity).
 */
export function buildPyqTopicOptions(questions) {
  const groups = buildPyqGroups(questions);
  return groups.map((g) => ({
    id: g.id,
    label: g.id === 'all' ? 'All Topics' : `${g.title} (${g.badge})`
  }));
}
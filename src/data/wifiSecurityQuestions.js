// src/data/wifiSecurityQuestions.js
/**
 * Accenture Wi-Fi Security Question Bank (25 High-Yield Solved MCQs) & Study Notes
 * Source: Complete Wi-Fi Security Preparation Guide (Cryptographic Algorithms, 802.1X/EAP/RADIUS, WEP/WPA/WPA2/WPA3 & Attacks)
 *
 * Tier 1: 10 MCQs (Cryptographic Protocols: WEP/RC4, WPA/TKIP, WPA2/AES+CCMP, WPA3/SAE, CCMP Mechanics)
 * Tier 2: 8 MCQs (Authentication Frameworks: Personal vs Enterprise, 802.1X PNAC, EAP, RADIUS AAA, 4-Way Handshake & PTK)
 * Tier 3: 7 MCQs (Wireless Attack Vectors: Evil Twin, Rogue AP, Deauthentication, SSID Obscurity, MAC Spoofing & WPS)
 */

export const WIFI_SECURITY_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '25 MCQs', description: 'Complete Wi-Fi Security Question Bank' },
  { id: 1, title: 'Tier 1: Encryption & Standards', badge: '10 MCQs', description: 'WEP (RC4), WPA (TKIP), WPA2 (AES-CCMP) & WPA3 (SAE)' },
  { id: 2, title: 'Tier 2: 802.1X & RADIUS Architecture', badge: '8 MCQs', description: 'Personal vs Enterprise, 802.1X PNAC, EAP, RADIUS AAA & 4-Way Handshake' },
  { id: 3, title: 'Tier 3: Attack Vectors & Defense', badge: '7 MCQs', description: 'Evil Twin, Rogue APs, Deauth Frames, SSID Myths & MAC Spoofing' }
];

export const WIFI_SECURITY_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'Wireless Encryption & Standards', label: 'Ciphers & Protocols (WEP, WPA, WPA2, WPA3, AES, CCMP, SAE)' },
  { id: 'Enterprise Architecture & 802.1X', label: 'Enterprise Topologies (802.1X, Supplicant, Authenticator, EAP, RADIUS)' },
  { id: 'Handshakes & Key Derivation', label: 'Handshake Mechanics (4-Way Handshake, PTK, Nonces, Offline Cracking)' },
  { id: 'Wireless Attack Vectors', label: 'Threats & Attacks (Evil Twin, Rogue AP, Deauth, SSID Hiding, MAC Spoofing, WPS)' }
];

export const wifiSecurityQuestions = [
  // ==========================================
  // TIER 1: ENCRYPTION & STANDARDS (10 Qs)
  // ==========================================
  {
    id: 'wifi-1-01',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Which Wi-Fi security standard uses AES with CCMP as its primary data-protection mechanism?',
    options: [
      { id: 'A', text: 'WEP' },
      { id: 'B', text: 'WPA' },
      { id: 'C', text: 'WPA2' },
      { id: 'D', text: 'WPA3' }
    ],
    correctAnswer: 'C',
    explanation: 'WPA2 standardizes CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol) wrapping the AES symmetric block cipher for data encryption and integrity verification.',
    accentureTip: 'WPA2 = AES + CCMP (Most complete & correct answer)'
  },
  {
    id: 'wifi-1-02',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'A company is currently using WEP for its wireless network. The security team wants to replace it with a modern protocol. Which is the best choice?',
    options: [
      { id: 'A', text: 'Continue using WEP but increase the password length' },
      { id: 'B', text: 'Replace WEP with WPA3' },
      { id: 'C', text: 'Enable SSID hiding' },
      { id: 'D', text: 'Enable MAC filtering' }
    ],
    correctAnswer: 'B',
    explanation: 'WEP is cryptographically broken due to its small 24-bit IV and RC4 weakness. Increasing password length, hiding SSID, or MAC filtering provide zero cryptographic protection. Upgrading to WPA3 provides modern AES-GCM and SAE protection.',
    accentureTip: 'Replacing obsolete WEP with strongest modern standard → Choose WPA3'
  },
  {
    id: 'wifi-1-03',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Which encryption algorithm is associated with WEP?',
    options: [
      { id: 'A', text: 'AES' },
      { id: 'B', text: 'RC4' },
      { id: 'C', text: 'RSA' },
      { id: 'D', text: 'SHA-256' }
    ],
    correctAnswer: 'B',
    explanation: 'WEP (Wired Equivalent Privacy) utilized the RC4 stream cipher combined with a 24-bit Initialization Vector (IV), which proved fundamentally vulnerable to key recovery attacks.',
    accentureTip: 'WEP Encryption Algorithm = RC4 (Stream Cipher)'
  },
  {
    id: 'wifi-1-04',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'You are configuring a new WPA3-Personal home router. Which authentication mechanism should you expect?',
    options: [
      { id: 'A', text: 'WEP' },
      { id: 'B', text: 'TKIP' },
      { id: 'C', text: 'SAE' },
      { id: 'D', text: 'RADIUS' }
    ],
    correctAnswer: 'C',
    explanation: 'WPA3-Personal replaces legacy Pre-Shared Keys (PSK) with SAE (Simultaneous Authentication of Equals), based on the Dragonfly handshake to prevent offline dictionary attacks.',
    accentureTip: 'WPA3-Personal Authentication Protocol = SAE (Simultaneous Authentication of Equals)'
  },
  {
    id: 'wifi-1-05',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Which pairing is INCORRECT?',
    options: [
      { id: 'A', text: 'WEP — RC4' },
      { id: 'B', text: 'WPA — TKIP' },
      { id: 'C', text: 'WPA2 — AES/CCMP' },
      { id: 'D', text: 'WPA3-Personal — TKIP' }
    ],
    correctAnswer: 'D',
    explanation: 'TKIP was an interim patch created exclusively for legacy WPA to replace WEP without hardware upgrades. WPA3-Personal uses SAE authentication and AES-GCM encryption; it has zero association with TKIP.',
    accentureTip: 'Memory Chain: WEP-RC4 | WPA-TKIP | WPA2-AES/CCMP | WPA3-SAE'
  },
  {
    id: 'wifi-1-06',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Which of the following correctly represents the relationship between WPA2, CCMP, and AES?',
    options: [
      { id: 'A', text: 'WPA2 → TKIP → RC4' },
      { id: 'B', text: 'WPA → AES → CCMP' },
      { id: 'C', text: 'WPA2 → CCMP → AES' },
      { id: 'D', text: 'WPA3 → WEP → RC4' }
    ],
    correctAnswer: 'C',
    explanation: 'In WPA2, CCMP is the encapsulation protocol that provides confidentiality and integrity, and it uses the AES block cipher as its underlying encryption engine (WPA2 → CCMP → AES).',
    accentureTip: 'WPA2 standard uses CCMP encapsulation, which runs the AES cipher (WPA2 → CCMP → AES)'
  },
  {
    id: 'wifi-1-07',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Which protocol is primarily associated with WPA (Wi-Fi Protected Access 1)?',
    options: [
      { id: 'A', text: 'AES' },
      { id: 'B', text: 'TKIP' },
      { id: 'C', text: 'SAE' },
      { id: 'D', text: 'CCMP' }
    ],
    correctAnswer: 'B',
    explanation: 'WPA was an interim fix designed to run on existing WEP hardware and introduced TKIP (Temporal Key Integrity Protocol) with dynamic per-packet key mixing and Michael MIC.',
    accentureTip: 'Accenture Trap: WPA = TKIP. WPA2 = AES + CCMP.'
  },
  {
    id: 'wifi-1-08',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'Why is WEP considered fundamentally insecure and deprecated by IEEE since 2004?',
    options: [
      { id: 'A', text: 'It uses 256-bit keys that slow down routers' },
      { id: 'B', text: 'Small 24-bit IV causes rapid key repetition allowing mathematical key recovery' },
      { id: 'C', text: 'It requires an expensive RADIUS server' },
      { id: 'D', text: 'It blocks mobile phone connections' }
    ],
    correctAnswer: 'B',
    explanation: 'WEP concatenated a 24-bit Initialization Vector (IV) with the static secret key. With only ~16.7 million combinations, IVs repeat quickly on busy networks, allowing passive eavesdroppers to recover the key.',
    accentureTip: 'WEP weakness: 24-bit IV collision + RC4 key scheduling vulnerability'
  },
  {
    id: 'wifi-1-09',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'What major security advantage does Simultaneous Authentication of Equals (SAE) in WPA3 provide over WPA2-Personal PSK?',
    options: [
      { id: 'A', text: 'Forward secrecy and resistance to offline dictionary attacks' },
      { id: 'B', text: 'Elimination of all wireless passwords' },
      { id: 'C', text: 'Ability to run without an access point' },
      { id: 'D', text: 'Automatic fallback to WEP' }
    ],
    correctAnswer: 'A',
    explanation: 'SAE uses a password-authenticated key exchange (Dragonfly) that prevents attackers from capturing a handshake and testing wordlists offline, and provides forward secrecy even if the password is leaked later.',
    accentureTip: 'SAE in WPA3 = Resistance to offline dictionary attacks + Forward Secrecy'
  },
  {
    id: 'wifi-1-10',
    tier: 1,
    tierName: 'Tier 1: Encryption & Standards',
    topic: 'Wireless Encryption & Standards',
    question: 'In CCMP protocol mode, what specific mechanisms provide confidentiality and message integrity?',
    options: [
      { id: 'A', text: 'AES Counter Mode (CTR) for encryption and CBC-MAC for integrity' },
      { id: 'B', text: 'RC4 for encryption and MD5 for integrity' },
      { id: 'C', text: 'DES for encryption and CRC32 for integrity' },
      { id: 'D', text: 'RSA for encryption and SHA-1 for integrity' }
    ],
    correctAnswer: 'A',
    explanation: 'CCMP stands for Counter Mode with Cipher Block Chaining Message Authentication Code Protocol. Confidentiality is provided by AES in Counter (CTR) mode, and message authenticity/integrity by CBC-MAC.',
    accentureTip: 'CCMP = AES Counter Mode (Confidentiality) + CBC-MAC (Integrity)'
  },

  // ==========================================
  // TIER 2: 802.1X & RADIUS ARCHITECTURE (8 Qs)
  // ==========================================
  {
    id: 'wifi-2-01',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'A student connects to a Wi-Fi network using WPA2-Personal. What authentication mechanism is most likely being used?',
    options: [
      { id: 'A', text: 'SAE' },
      { id: 'B', text: 'RADIUS only' },
      { id: 'C', text: 'PSK (Pre-Shared Key)' },
      { id: 'D', text: 'Kerberos' }
    ],
    correctAnswer: 'C',
    explanation: 'WPA2-Personal relies on a Pre-Shared Key (PSK)—the shared Wi-Fi password entered once on client devices and verified locally by the Access Point.',
    accentureTip: 'Personal = Password / PSK. Enterprise = 802.1X / EAP / RADIUS.'
  },
  {
    id: 'wifi-2-02',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'An organization has 2,000 employees. Management does not want everyone to use the same shared Wi-Fi password. Which solution is most appropriate?',
    options: [
      { id: 'A', text: 'WPA2-Personal' },
      { id: 'B', text: 'WPA2-Enterprise' },
      { id: 'C', text: 'WEP' },
      { id: 'D', text: 'Hidden SSID' }
    ],
    correctAnswer: 'B',
    explanation: 'WPA2-Enterprise authenticates each employee individually via 802.1X and a centralized RADIUS server, enabling individual credentialing, auditing, and instant revocation without changing everyone\'s password.',
    accentureTip: 'Enterprise Wi-Fi for 1,000+ users → WPA2-Enterprise (802.1X + RADIUS)'
  },
  {
    id: 'wifi-2-03',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'Which protocol/service is commonly used as the centralized authentication server backend in enterprise Wi-Fi networks?',
    options: [
      { id: 'A', text: 'RADIUS' },
      { id: 'B', text: 'ARP' },
      { id: 'C', text: 'DNS' },
      { id: 'D', text: 'DHCP' }
    ],
    correctAnswer: 'A',
    explanation: 'RADIUS (Remote Authentication Dial-In User Service) provides centralized AAA (Authentication, Authorization, Accounting), verifying credentials against directory databases (e.g. Active Directory / LDAP).',
    accentureTip: 'Centralized Enterprise AAA server = RADIUS'
  },
  {
    id: 'wifi-2-04',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'An employee connects a laptop to an enterprise Wi-Fi network that uses 802.1X. Which component acts as the supplicant?',
    options: [
      { id: 'A', text: 'RADIUS server' },
      { id: 'B', text: 'Access Point' },
      { id: 'C', text: 'Employee\'s laptop' },
      { id: 'D', text: 'DNS server' }
    ],
    correctAnswer: 'C',
    explanation: 'In 802.1X: (1) Supplicant = client device requesting access (laptop); (2) Authenticator = AP or switch controlling entry; (3) Authentication Server = RADIUS server.',
    accentureTip: '802.1X Roles: Laptop = Supplicant | AP = Authenticator | RADIUS = Auth Server'
  },
  {
    id: 'wifi-2-05',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'What is the primary purpose of IEEE 802.1X standard?',
    options: [
      { id: 'A', text: 'Encrypting files using AES' },
      { id: 'B', text: 'Providing port-based network access control (PNAC)' },
      { id: 'C', text: 'Translating domain names' },
      { id: 'D', text: 'Assigning IP addresses' }
    ],
    correctAnswer: 'B',
    explanation: 'IEEE 802.1X defines Port-Based Network Access Control (PNAC), keeping network ports (virtual or physical) closed to data traffic until the client passes authentication.',
    accentureTip: 'IEEE 802.1X = Port-Based Network Access Control (PNAC)'
  },
  {
    id: 'wifi-2-06',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Handshakes & Key Derivation',
    question: 'Which session key is dynamically computed during the WPA2 4-way handshake to encrypt unicast traffic between a client and an AP?',
    options: [
      { id: 'A', text: 'SSID' },
      { id: 'B', text: 'PTK (Pairwise Transient Key)' },
      { id: 'C', text: 'MAC address' },
      { id: 'D', text: 'PSK only' }
    ],
    correctAnswer: 'B',
    explanation: 'The PTK (Pairwise Transient Key) is generated during the 4-way handshake by combining the PMK, ANonce (from AP), SNonce (from client), AP MAC, and client MAC.',
    accentureTip: 'Session unicast encryption key derived in 4-way handshake = PTK'
  },
  {
    id: 'wifi-2-07',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'A company wants an architecture where employee laptops authenticate individually via an Enterprise AP to a Central Authentication Server. Which combination is most appropriate?',
    options: [
      { id: 'A', text: 'WPA2-Personal + PSK' },
      { id: 'B', text: 'WPA2-Enterprise + 802.1X + EAP + RADIUS' },
      { id: 'C', text: 'WEP + RC4' },
      { id: 'D', text: 'WPA + TKIP' }
    ],
    correctAnswer: 'B',
    explanation: 'Enterprise Wi-Fi links client Supplicants through Authenticator APs via IEEE 802.1X carrying Extensible Authentication Protocol (EAP) to a central RADIUS server.',
    accentureTip: 'Enterprise Authentication Stack: WPA2-Enterprise + 802.1X + EAP + RADIUS'
  },
  {
    id: 'wifi-2-08',
    tier: 2,
    tierName: 'Tier 2: 802.1X & RADIUS Architecture',
    topic: 'Enterprise Architecture & 802.1X',
    question: 'A company says: "We use WPA2-Enterprise, so RADIUS itself encrypts all Wi-Fi data traffic." What is wrong with this statement?',
    options: [
      { id: 'A', text: 'WPA2-Enterprise doesn\'t use authentication' },
      { id: 'B', text: 'RADIUS is authentication/AAA infrastructure; Wi-Fi over-the-air data encryption is handled by AES-CCMP between client and AP' },
      { id: 'C', text: 'RADIUS is an encryption algorithm' },
      { id: 'D', text: 'WPA2-Enterprise uses WEP' }
    ],
    correctAnswer: 'B',
    explanation: 'Classic conceptual trap! RADIUS authenticates identity and delivers the Master Session Key (MSK). The actual wireless bulk data payload is encrypted between the laptop and the AP using AES-CCMP.',
    accentureTip: 'RADIUS does AAA (Authentication); AES-CCMP does over-the-air data payload encryption'
  },

  // ==========================================
  // TIER 3: ATTACK VECTORS & DEFENSE (7 Qs)
  // ==========================================
  {
    id: 'wifi-3-01',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'A coffee shop has a Wi-Fi network named CoffeeShop_Free. An attacker creates another Wi-Fi network with the identical name and tries to trick customers into connecting. What type of attack is this?',
    options: [
      { id: 'A', text: 'Deauthentication attack' },
      { id: 'B', text: 'Evil Twin attack' },
      { id: 'C', text: 'MAC filtering' },
      { id: 'D', text: 'ARP poisoning' }
    ],
    correctAnswer: 'B',
    explanation: 'An Evil Twin attack occurs when a rogue access point mimics the SSID and BSSID of a legitimate wireless network to lure victims into connecting, snooping traffic or stealing login credentials.',
    accentureTip: 'Rogue AP spoofing legitimate Wi-Fi network name (SSID) = Evil Twin Attack'
  },
  {
    id: 'wifi-3-02',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'An unauthorized wireless access point is discovered plugged into a company\'s wired corporate network. What is this generally called?',
    options: [
      { id: 'A', text: 'Rogue Access Point' },
      { id: 'B', text: 'Evil Twin only' },
      { id: 'C', text: 'WPA3' },
      { id: 'D', text: 'SSID' }
    ],
    correctAnswer: 'A',
    explanation: 'A Rogue Access Point is any unauthorized wireless AP installed on a secure network without administrative knowledge or authorization, creating an unmonitored backdoor.',
    accentureTip: 'Unauthorized AP plugged into corporate network = Rogue Access Point'
  },
  {
    id: 'wifi-3-03',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'A wireless attacker sends forged 802.11 management frames that force connected clients to disconnect from an AP. Which attack is most likely occurring?',
    options: [
      { id: 'A', text: 'Evil Twin' },
      { id: 'B', text: 'Deauthentication attack' },
      { id: 'C', text: 'DNS poisoning' },
      { id: 'D', text: 'Password spraying' }
    ],
    correctAnswer: 'B',
    explanation: 'Standard 802.11 management frames are unencrypted. An attacker spoofs the AP\'s MAC address and broadcasts deauthentication frames to kick clients off (typically to force reconnect and capture 4-way handshakes).',
    accentureTip: 'Forged management frames forcing client disconnect = Deauthentication Attack'
  },
  {
    id: 'wifi-3-04',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'What does SSID stand for and what is its primary function?',
    options: [
      { id: 'A', text: 'Service Set Identifier; human-readable name identifying a Wi-Fi network' },
      { id: 'B', text: 'Secure System Identification; cryptographic key' },
      { id: 'C', text: 'Server Socket ID; port number' },
      { id: 'D', text: 'Session State Indicator; timer' }
    ],
    correctAnswer: 'A',
    explanation: 'SSID (Service Set Identifier) is a human-readable text string (up to 32 bytes) that identifies a specific 802.11 wireless local area network.',
    accentureTip: 'SSID = Service Set Identifier (Wireless Network Name)'
  },
  {
    id: 'wifi-3-05',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'A network administrator hides the SSID and claims: "Now attackers cannot discover or attack our Wi-Fi." Which statement is correct?',
    options: [
      { id: 'A', text: 'Correct; hidden SSID provides complete security' },
      { id: 'B', text: 'Correct; hidden SSID encrypts all traffic' },
      { id: 'C', text: 'Incorrect; hiding SSID is not a substitute for strong authentication and encryption' },
      { id: 'D', text: 'Incorrect; hiding SSID disables WPA2' }
    ],
    correctAnswer: 'C',
    explanation: 'Disabling SSID beaconing is purely "security through obscurity". The SSID is still transmitted in plaintext whenever a valid client probes or associates with the AP, which sniffers can uncover in seconds.',
    accentureTip: 'Hidden SSID is NOT true security; sniffers easily uncover SSIDs during client association'
  },
  {
    id: 'wifi-3-06',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'A router allows only certain MAC addresses to connect. The administrator believes this makes the network completely secure. What is the biggest problem with this assumption?',
    options: [
      { id: 'A', text: 'MAC addresses cannot be changed' },
      { id: 'B', text: 'MAC addresses can be easily sniffed and spoofed by attackers' },
      { id: 'C', text: 'MAC filtering automatically disables encryption' },
      { id: 'D', text: 'MAC filtering requires RADIUS' }
    ],
    correctAnswer: 'B',
    explanation: '802.11 frame headers transmit source and destination MAC addresses in cleartext over the air. An attacker can sniff allowed MAC addresses and clone/spoof them on their own wireless interface.',
    accentureTip: 'MAC Filtering Flaw: MAC addresses are broadcast in plaintext and easily spoofed'
  },
  {
    id: 'wifi-3-07',
    tier: 3,
    tierName: 'Tier 3: Attack Vectors & Defense',
    topic: 'Wireless Attack Vectors',
    question: 'A user connects a new printer to a home router by pressing a physical push button on the router. Which feature is being used and what is its security caution?',
    options: [
      { id: 'A', text: 'WPS (Wi-Fi Protected Setup); PIN mode is vulnerable to brute-force attacks' },
      { id: 'B', text: 'RADIUS; requires certificates' },
      { id: 'C', text: 'SAE; eliminates passwords' },
      { id: 'D', text: 'CCMP; requires 802.1X' }
    ],
    correctAnswer: 'A',
    explanation: 'WPS (Wi-Fi Protected Setup) provides Push-Button Configuration (PBC). However, its 8-digit PIN mode is vulnerable to offline and online brute-force attacks (e.g. Reaver tools) and should be disabled.',
    accentureTip: 'Push-button connection = WPS (Wi-Fi Protected Setup); PIN mode vulnerable to brute force'
  }
];

// =========================================================================
// 4-OPTION BREAKDOWN MAP (All 25 Questions with Explanations for A, B, C, D)
// =========================================================================
export const wifiSecurityOptionExplanationsMap = {
  'wifi-1-01': {
    correctOption: 'C',
    memoryPill: 'WPA2 = AES + CCMP (Strong Standard)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WEP', why: 'WEP uses the obsolete RC4 stream cipher and suffers from severe 24-bit IV reuse vulnerabilities.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'WPA', why: 'WPA was an interim protocol that introduced TKIP, not AES with CCMP.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'WPA2', why: 'WPA2 standardized CCMP as its encapsulation and integrity mode, implementing the robust AES block cipher.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'WPA3', why: 'WPA3 uses SAE for authentication and modern GCMP cipher suites, though WPA2 is the defining standard for AES-CCMP.' }
  },
  'wifi-1-02': {
    correctOption: 'B',
    memoryPill: 'Replacing broken WEP → Upgrade directly to WPA3',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Continue using WEP but increase password length', why: 'Increasing password length does not eliminate the fatal 24-bit IV repetition flaw in WEP.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Replace WEP with WPA3', why: 'WPA3 provides robust modern encryption (AES-GCM) and protects against offline dictionary attacks via SAE.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Enable SSID hiding', why: 'Hiding the SSID is security through obscurity; SSIDs are exposed in plaintext probe and association frames.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Enable MAC filtering', why: 'MAC filtering is easily defeated by sniffing over-the-air frame headers and spoofing approved MAC addresses.' }
  },
  'wifi-1-03': {
    correctOption: 'B',
    memoryPill: 'WEP = RC4 Stream Cipher',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'AES', why: 'AES is a block cipher introduced in WPA2 and WPA3, not WEP.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'RC4', why: 'WEP implemented the RC4 stream cipher combined with a 24-bit Initialization Vector.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'RSA', why: 'RSA is an asymmetric public-key cryptosystem used for key exchange/certificates, not Wi-Fi bulk encryption.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'SHA-256', why: 'SHA-256 is a cryptographic hashing algorithm, not a symmetric encryption cipher.' }
  },
  'wifi-1-04': {
    correctOption: 'C',
    memoryPill: 'WPA3-Personal = SAE (Dragonfly Handshake)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WEP', why: 'WEP is an obsolete protocol deprecated in 2004.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'TKIP', why: 'TKIP was deprecated with original WPA.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'SAE', why: 'WPA3-Personal replaces PSK with SAE (Simultaneous Authentication of Equals), mitigating offline dictionary attacks.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'RADIUS', why: 'RADIUS is utilized in Enterprise deployments, not home Personal routers.' }
  },
  'wifi-1-05': {
    correctOption: 'D',
    memoryPill: 'WPA3-Personal uses SAE, never TKIP',
    A: { isCorrect: false, status: 'Correct Mapping', text: 'WEP — RC4', why: 'This is a valid pairing: WEP implemented the RC4 stream cipher.' },
    B: { isCorrect: false, status: 'Correct Mapping', text: 'WPA — TKIP', why: 'This is a valid pairing: WPA introduced TKIP.' },
    C: { isCorrect: false, status: 'Correct Mapping', text: 'WPA2 — AES/CCMP', why: 'This is a valid pairing: WPA2 standardizes CCMP based on AES.' },
    D: { isCorrect: true, status: 'Incorrect Pairing', text: 'WPA3-Personal — TKIP', why: 'Incorrect pairing! WPA3 uses SAE and AES-GCM; TKIP is an obsolete protocol tied exclusively to legacy WPA.' }
  },
  'wifi-1-06': {
    correctOption: 'C',
    memoryPill: 'WPA2 standard → CCMP encapsulation → AES block cipher',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WPA2 → TKIP → RC4', why: 'TKIP and RC4 belong to WPA and WEP, not WPA2.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'WPA → AES → CCMP', why: 'WPA used TKIP, not AES-CCMP.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'WPA2 → CCMP → AES', why: 'WPA2 uses CCMP as its encapsulation and message authentication mode, which executes the AES cipher.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'WPA3 → WEP → RC4', why: 'WPA3 has no connection to WEP or RC4.' }
  },
  'wifi-1-07': {
    correctOption: 'B',
    memoryPill: 'WPA = TKIP (Temporal Key Integrity Protocol)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'AES', why: 'AES is standardized under WPA2 and WPA3.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'TKIP', why: 'WPA introduced TKIP to provide dynamic per-packet key mixing and 48-bit IV replay protection over legacy WEP hardware.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'SAE', why: 'SAE is the authentication protocol for WPA3-Personal.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'CCMP', why: 'CCMP is the security protocol mode for WPA2.' }
  },
  'wifi-1-08': {
    correctOption: 'B',
    memoryPill: 'WEP Failure: 24-bit IV repeats rapidly → RC4 key recovery',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'It uses 256-bit keys that slow down routers', why: 'WEP used 64-bit or 128-bit keys, and key length was not the root flaw.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Small 24-bit IV causes rapid key repetition allowing mathematical key recovery', why: 'With 24 bits, only ~16.7M IVs exist, causing frequent collision and allowing attackers to recover the secret key from captured packets.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'It requires an expensive RADIUS server', why: 'WEP did not use RADIUS; it relied on static pre-configured shared keys.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'It blocks mobile phone connections', why: 'WEP had universal hardware support; its issue was purely cryptographic.' }
  },
  'wifi-1-09': {
    correctOption: 'A',
    memoryPill: 'SAE advantages = Offline dictionary defense + Forward Secrecy',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Forward secrecy and resistance to offline dictionary attacks', why: 'Dragonfly zero-knowledge proof handshake prevents passive attackers from harvesting handshakes to crack passwords offline.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Elimination of all wireless passwords', why: 'Users still enter a password; the underlying mathematical exchange is what changed.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Ability to run without an access point', why: 'Standard infrastructure mode still requires an access point.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Automatic fallback to WEP', why: 'WPA3 explicitly prohibits insecure legacy fallbacks.' }
  },
  'wifi-1-10': {
    correctOption: 'A',
    memoryPill: 'CCMP = AES Counter Mode (CTR) + CBC-MAC',
    A: { isCorrect: true, status: 'Correct Answer', text: 'AES Counter Mode (CTR) for encryption and CBC-MAC for integrity', why: 'CCMP combines AES-CTR for data confidentiality with Cipher Block Chaining MAC for frame authentication.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'RC4 for encryption and MD5 for integrity', why: 'RC4 was used in WEP; MD5 is deprecated.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'DES for encryption and CRC32 for integrity', why: 'DES and CRC32 are obsolete algorithms vulnerable to collision and brute force.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'RSA for encryption and SHA-1 for integrity', why: 'RSA is asymmetric and too slow for high-throughput wireless payload encryption.' }
  },

  // ==========================================
  // TIER 2: 802.1X & RADIUS ARCHITECTURE (8 Qs)
  // ==========================================
  'wifi-2-01': {
    correctOption: 'C',
    memoryPill: 'WPA2-Personal = PSK (Pre-Shared Key)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'SAE', why: 'SAE is used in WPA3-Personal, not WPA2.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'RADIUS only', why: 'RADIUS is used in WPA2-Enterprise networks.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'PSK (Pre-Shared Key)', why: 'WPA2-Personal utilizes a single shared passphrase (PSK) configured on all client devices and the router.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Kerberos', why: 'Kerberos is used for domain ticket-based SSO, not standard WPA2-Personal.' }
  },
  'wifi-2-02': {
    correctOption: 'B',
    memoryPill: '2000 users without shared password = WPA2-Enterprise',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WPA2-Personal', why: 'WPA2-Personal forces all 2,000 employees to share one password, making credential management impossible.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'WPA2-Enterprise', why: 'WPA2-Enterprise delegates authentication to an 802.1X/RADIUS infrastructure where each employee uses unique credentials.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'WEP', why: 'WEP is completely insecure and uses static keys.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Hidden SSID', why: 'Hiding the SSID does not provide user credentialing.' }
  },
  'wifi-2-03': {
    correctOption: 'A',
    memoryPill: 'Centralized AAA Backend = RADIUS',
    A: { isCorrect: true, status: 'Correct Answer', text: 'RADIUS', why: 'RADIUS (Remote Authentication Dial-In User Service) is the standard protocol for centralized enterprise AAA services.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'ARP', why: 'ARP resolves IPv4 addresses to MAC hardware addresses.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'DNS', why: 'DNS resolves hostnames to IP addresses.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'DHCP', why: 'DHCP dynamically leases IP addresses and subnet parameters to network hosts.' }
  },
  'wifi-2-04': {
    correctOption: 'C',
    memoryPill: '802.1X Supplicant = The client device (laptop/phone)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'RADIUS server', why: 'The RADIUS server acts as the Authentication Server.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Access Point', why: 'The Access Point acts as the Authenticator controlling port access.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Employee\'s laptop', why: 'In IEEE 802.1X architecture, the Supplicant is the client device or software module requesting access.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'DNS server', why: 'DNS provides name resolution and plays no role in 802.1X port gating.' }
  },
  'wifi-2-05': {
    correctOption: 'B',
    memoryPill: 'IEEE 802.1X = Port-Based Network Access Control (PNAC)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Encrypting files using AES', why: 'File encryption is handled by filesystem security or disk encryption tools, not 802.1X.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Providing port-based network access control (PNAC)', why: '802.1X gates network access at the physical or wireless port level until identity validation succeeds.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Translating domain names', why: 'Domain name translation is handled by DNS.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Assigning IP addresses', why: 'IP address assignment is performed by DHCP.' }
  },
  'wifi-2-06': {
    correctOption: 'B',
    memoryPill: 'PTK (Pairwise Transient Key) encrypts individual session traffic',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'SSID', why: 'SSID is the public network name string.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'PTK (Pairwise Transient Key)', why: 'The PTK is dynamically calculated during the 4-way handshake using nonces and MACs to encrypt unicast traffic.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'MAC address', why: 'MAC addresses are static hardware identifiers used as inputs to generate the PTK.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'PSK only', why: 'The PSK derives the PMK, which then derives the PTK during the handshake.' }
  },
  'wifi-2-07': {
    correctOption: 'B',
    memoryPill: 'WPA2-Enterprise = 802.1X + EAP + RADIUS',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WPA2-Personal + PSK', why: 'WPA2-Personal uses a single shared secret without individual authentication.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'WPA2-Enterprise + 802.1X + EAP + RADIUS', why: 'This stack links client supplicants via 802.1X carrying EAP payloads to a centralized RADIUS AAA directory.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'WEP + RC4', why: 'WEP is completely broken and obsolete.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'WPA + TKIP', why: 'WPA with TKIP is deprecated legacy technology.' }
  },
  'wifi-2-08': {
    correctOption: 'B',
    memoryPill: 'RADIUS handles AAA; AES-CCMP handles over-the-air data encryption',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'WPA2-Enterprise doesn\'t use authentication', why: 'WPA2-Enterprise provides robust user authentication.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'RADIUS is authentication/AAA infrastructure; Wi-Fi over-the-air data encryption is handled by AES-CCMP between client and AP', why: 'RADIUS validates credentials and helps generate keys; over-the-air data encryption is performed locally by AES-CCMP.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'RADIUS is an encryption algorithm', why: 'RADIUS is a networking client/server authentication protocol, not an encryption cipher.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'WPA2-Enterprise uses WEP', why: 'WPA2-Enterprise never uses WEP.' }
  },

  // ==========================================
  // TIER 3: ATTACK VECTORS & DEFENSE (7 Qs)
  // ==========================================
  'wifi-3-01': {
    correctOption: 'B',
    memoryPill: 'Fake AP spoofing real SSID = Evil Twin Attack',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Deauthentication attack', why: 'Deauth attacks force clients to disconnect; Evil Twin clones the SSID to lure connections.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Evil Twin attack', why: 'An Evil Twin is a rogue AP set up by an attacker with the identical SSID of a trusted network to steal traffic or credentials.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'MAC filtering', why: 'MAC filtering is an access control mechanism, not an attack.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'ARP poisoning', why: 'ARP poisoning targets layer 2 IP-to-MAC resolution on local Ethernet networks.' }
  },
  'wifi-3-02': {
    correctOption: 'A',
    memoryPill: 'Unauthorized AP on corporate network = Rogue Access Point',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Rogue Access Point', why: 'A Rogue AP is any unauthorized wireless access point attached to a secure network by an employee or intruder.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Evil Twin only', why: 'An Evil Twin specifically mimics an existing SSID; a Rogue AP may have any SSID or none at all.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'WPA3', why: 'WPA3 is a modern Wi-Fi security standard.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'SSID', why: 'SSID is simply the network name string.' }
  },
  'wifi-3-03': {
    correctOption: 'B',
    memoryPill: 'Forged 802.11 management frames kicking clients = Deauth Attack',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Evil Twin', why: 'Evil Twin is a fraudulent access point mimicking a legitimate network.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Deauthentication attack', why: 'Deauth attacks exploit unencrypted 802.11 management frames to disconnect clients, often to force a handshake capture.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'DNS poisoning', why: 'DNS poisoning redirects domain queries to fraudulent IP addresses.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Password spraying', why: 'Password spraying tests a single common password against many accounts.' }
  },
  'wifi-3-04': {
    correctOption: 'A',
    memoryPill: 'SSID = Service Set Identifier (Up to 32-byte network name)',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Service Set Identifier; human-readable name identifying a Wi-Fi network', why: 'SSID stands for Service Set Identifier and serves as the visible name of an 802.11 wireless LAN.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Secure System Identification; cryptographic key', why: 'SSID is not an acronym for Secure System Identification nor a cryptographic key.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Server Socket ID; port number', why: 'SSID has nothing to do with TCP sockets.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Session State Indicator; timer', why: 'SSID is not a session state timer.' }
  },
  'wifi-3-05': {
    correctOption: 'C',
    memoryPill: 'Hiding SSID is security through obscurity, easily revealed by sniffers',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Correct; hidden SSID provides complete security', why: 'Hidden SSIDs provide zero cryptographic defense and are easily uncovered by tools like Wireshark.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Correct; hidden SSID encrypts all traffic', why: 'Hiding an SSID does not encrypt data payloads.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Incorrect; hiding SSID is not a substitute for strong authentication and encryption', why: 'The SSID is still sent in plaintext during client probe requests and association responses, making it trivial to discover.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Incorrect; hiding SSID disables WPA2', why: 'Hiding an SSID does not disable WPA2.' }
  },
  'wifi-3-06': {
    correctOption: 'B',
    memoryPill: 'MAC addresses are sent in plaintext and can be trivially spoofed',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'MAC addresses cannot be changed', why: 'MAC addresses can easily be changed in software via tools like macchanger.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'MAC addresses can be easily sniffed and spoofed by attackers', why: 'Because 802.11 headers are unencrypted, attackers sniff authorized MACs and spoof them to bypass filters.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'MAC filtering automatically disables encryption', why: 'MAC filtering operates independently of wireless encryption.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'MAC filtering requires RADIUS', why: 'MAC filtering is configured directly inside the access point without needing RADIUS.' }
  },
  'wifi-3-07': {
    correctOption: 'A',
    memoryPill: 'Push-button connection = WPS; PIN mode vulnerable to brute force',
    A: { isCorrect: true, status: 'Correct Answer', text: 'WPS (Wi-Fi Protected Setup); PIN mode is vulnerable to brute-force attacks', why: 'WPS allows push-button pairing, but its 8-digit PIN architecture is vulnerable to offline PIN brute-force.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'RADIUS; requires certificates', why: 'RADIUS is an enterprise authentication server and does not use physical router push buttons.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'SAE; eliminates passwords', why: 'SAE is the Dragonfly handshake algorithm for WPA3-Personal.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'CCMP; requires 802.1X', why: 'CCMP is the data-protection encryption protocol for WPA2.' }
  }
};

export function getWifiSecurityOptionBreakdown(questionId) {
  return wifiSecurityOptionExplanationsMap[questionId] || null;
}

export function filterWifiSecurityQuestions({ tier = 'all', topic = 'all', search = '' }) {
  return wifiSecurityQuestions.filter((q) => {
    const matchesTier = tier === 'all' || Number(q.tier) === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSearch = !search ||
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.explanation.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase()) ||
      (q.accentureTip && q.accentureTip.toLowerCase().includes(search.toLowerCase()));

    return matchesTier && matchesTopic && matchesSearch;
  });
}

// =========================================================================
// STUDY NOTES & REVISION HANDBOOK (From PDF Pages 1 to 6)
// =========================================================================
export const wifiSecurityStudyGuides = [
  {
    tier: 1,
    title: 'Tier 1: Wi-Fi Security Protocols & Encryption Ciphers',
    summary: 'Comprehensive breakdown of WEP, WPA, WPA2, and WPA3: underlying cryptographic ciphers (RC4 vs AES), encapsulation modes (TKIP vs CCMP vs GCMP), and historical deprecation timeline.',
    sections: [
      {
        heading: '1. WEP (Wired Equivalent Privacy) & RC4',
        content: `**WEP (Wired Equivalent Privacy)** was the earliest wireless security standard introduced in 1999 to provide basic over-the-air confidentiality.\n\n**Underlying Cipher:** **RC4 (Stream Cipher)**\n\n**Why WEP is Fatally Insecure:**\n- Uses a small **24-bit Initialization Vector (IV)** concatenated with the secret static key.\n- With only $2^{24} \\approx 16.7\\text{ million}$ combinations, IVs repeat rapidly on active networks.\n- Combined with RC4 key scheduling weaknesses, attackers passively capture packets and mathematically recover the encryption key in minutes.\n\n⚠️ **Conclusion:** WEP is completely broken, deprecated by IEEE in 2004, and must NEVER be used in production.\n\n⭐ **Accenture Shortcut:** WEP = RC4 Stream Cipher.`
      },
      {
        heading: '2. WPA & TKIP (Temporal Key Integrity Protocol)',
        content: `**WPA (Wi-Fi Protected Access)** was released as an interim security patch to fix WEP's vulnerabilities without requiring organizations to replace existing wireless hardware.\n\n**Key Mechanisms of TKIP:**\n- **Dynamic Key Mixing:** Generates unique encryption keys per packet by blending the root key with the transmitter MAC address and sequence counter.\n- **Replay Protection:** Incorporates an extended 48-bit IV/sequence counter to defeat replay attacks.\n- **Message Integrity Check (MIC):** Uses the "Michael" cryptographic check to detect frame tampering.\n\n⚠️ **Accenture Trap:** TKIP is NOT the same as AES. For exam questions:\n- WPA → **TKIP**\n- WPA2 → **AES + CCMP**`
      },
      {
        heading: '3. WPA2 & CCMP + AES (High Priority)',
        content: `**WPA2** is the IEEE 802.11i standard providing enterprise-grade wireless security. Its core data-protection mechanism is **CCMP using AES**.\n\n- **AES (Advanced Encryption Standard):** The underlying symmetric block cipher encrypting and decrypting over-the-air payload bits.\n- **CCMP:** Counter Mode with Cipher Block Chaining Message Authentication Code Protocol.\n  - **Confidentiality:** Handled by AES in Counter (CTR) mode.\n  - **Integrity & Authenticity:** Handled by CBC-MAC.\n\n📦 **Locked Package Analogy:**\n- **AES:** The heavy-duty unbreakable padlock.\n- **CCMP:** The complete armored courier transport protocol (locking, tamper-evident seals, sender verification).\n\n⭐ **Accenture Shortcut:** If an option specifies **AES + CCMP**, that is the most complete and correct answer for WPA2.`
      },
      {
        heading: '4. WPA3 & SAE (Dragonfly Handshake)',
        content: `**WPA3** (ratified 2018) is the modern generation of Wi-Fi security. For WPA3-Personal, the fundamental breakthrough is the complete elimination of Pre-Shared Keys (PSK) in favor of **SAE**.\n\n**SAE (Simultaneous Authentication of Equals):**\n- Based on the **Dragonfly** handshake (zero-knowledge password-authenticated key exchange).\n- **Resistant to Offline Dictionary Attacks:** Capturing handshakes over the air provides zero useful data for offline password cracking.\n- **Forward Secrecy:** Even if the network password is leaked in the future, previously recorded sessions cannot be decrypted.\n\n⭐ **One-Line Memory Trick:**\n\`WEP-RC4 | WPA-TKIP | WPA2-AES/CCMP | WPA3-SAE\``
      }
    ]
  },
  {
    tier: 2,
    title: 'Tier 2: 802.1X, EAP & RADIUS Enterprise Architecture',
    summary: 'The critical architectural distinction between Personal (PSK) and Enterprise (802.1X) topologies, Supplicant-Authenticator-RADIUS roles, and 4-way handshake key derivation.',
    sections: [
      {
        heading: '1. Personal (PSK) vs Enterprise (802.1X) Topologies',
        content: `**WPA2-Personal (PSK):**\n- Designed for home and SOHO environments.\n- Every client device shares the same Pre-Shared Key (Wi-Fi password).\n- **Disadvantage in Enterprises:** If an employee departs, the password must be manually updated on thousands of company endpoints.\n\n**WPA2-Enterprise (802.1X):**\n- Designed for universities, corporations, and hospitals.\n- Uses individual user accounts or PKI certificates.\n- **Advantage:** Immediate user revocation by disabling their Active Directory account without touching anyone else\'s device.`
      },
      {
        heading: '2. IEEE 802.1X Port-Based Network Access Control (PNAC)',
        content: `IEEE 802.1X gates the network port so unauthorized data packets are dropped until authentication succeeds.\n\n**The 3 Fundamental Architectural Roles:**\n1. **Supplicant:** The client endpoint software/device requesting access (e.g. employee laptop, smartphone).\n2. **Authenticator:** The boundary device controlling physical/wireless port state (e.g. Access Point or managed switch).\n3. **Authentication Server:** The centralized backend verifying credentials (commonly a **RADIUS** server).\n\n\`\`\`\n[ Client (Supplicant) ]  <--- 802.1X / EAP --->  [ Access Point (Authenticator) ]  <--- RADIUS --->  [ AAA Server (RADIUS) ]\n\`\`\``
      },
      {
        heading: '3. EAP vs RADIUS & Complete AAA Services',
        content: `**EAP (Extensible Authentication Protocol):**\n- An authentication framework that carries diverse credential types (EAP-TLS certificates, PEAP, EAP-TTLS).\n- Runs between Supplicant and Authenticator, encapsulated over 802.1X.\n\n**RADIUS (Remote Authentication Dial-In User Service):**\n- Provides centralized **AAA** services:\n  - **Authentication:** Who are you? (Validating user credentials against Active Directory/LDAP).\n  - **Authorization:** What can you do? (Assigning VLANs, dynamic ACLs, QoS policies).\n  - **Accounting:** What did you do? (Logging session duration, login timestamps, and byte counts).\n\n⚠️ **Accenture Conceptual Trap:** RADIUS performs authentication; it does NOT encrypt Wi-Fi payload data over the air. Over-the-air payload encryption is executed between the client and AP using AES-CCMP!`
      },
      {
        heading: '4. WPA2 4-Way Handshake & Key Derivation',
        content: `During connection establishment, the client and AP negotiate session keys via the **4-way handshake** without transmitting the secret password:\n\n- **PMK (Pairwise Master Key):** Derived from the PSK (Personal) or generated via 802.1X/EAP (Enterprise).\n- **PTK (Pairwise Transient Key):** Dynamically computed for that specific session using:\n  \`PMK + ANonce (AP) + SNonce (Client) + AP MAC + Client MAC → PTK\`\n- **PTK Role:** Encrypts unicast traffic and authenticates frames between the client and AP.`
      }
    ]
  },
  {
    tier: 3,
    title: 'Tier 3: Wireless Attack Vectors, Vulnerabilities & Defense',
    summary: 'Real-world wireless attack scenarios tested by Accenture: Evil Twin, Rogue APs, Deauthentication DoS frames, SSID Hiding fallacies, MAC Spoofing, and WPS PIN vulnerabilities.',
    sections: [
      {
        heading: '1. Evil Twin vs Rogue Access Point',
        content: `**Rogue Access Point:**\n- An unauthorized wireless AP connected directly to a corporate wired network port by an employee or intruder.\n- Creates an insecure, unmonitored backdoor bypassing corporate firewalls.\n\n**Evil Twin Attack:**\n- A rogue AP set up by an attacker that broadcasts the **exact same SSID** as a legitimate public or company Wi-Fi network (e.g. \`CoffeeShop_Free\`).\n- Deceives user devices into connecting automatically, allowing the attacker to snoop traffic or harvest credentials through captive portals.`
      },
      {
        heading: '2. Deauthentication Attacks (Management Frame Vulnerability)',
        content: `**Vulnerability:** Standard 802.11 management frames (deauth, disassociate) are transmitted in plaintext without cryptographic integrity checks.\n\n**Attack Mechanics:**\n- The attacker spoofs the AP\'s MAC address and broadcasts deauthentication frames to clients.\n- Connected devices are abruptly booted off the network.\n- **Attacker Goal:** Disrupt service (DoS) or force the victim to reconnect so the attacker can capture the 4-way handshake for offline dictionary cracking.`
      },
      {
        heading: '3. Security Through Obscurity: SSID Hiding & MAC Filtering',
        content: `**SSID Hiding Fallacy:**\n- Disabling SSID beaconing only removes the network name from passive device scans.\n- The SSID is transmitted in cleartext during Probe Requests and Association exchanges when authorized clients connect.\n- Network sniffers (Wireshark, airodump-ng) uncover hidden SSIDs within seconds.\n\n**MAC Filtering Fallacy:**\n- 802.11 frame headers transmit MAC addresses unencrypted over radio waves.\n- Attackers sniff approved MAC addresses and clone them using software tools (\`macchanger\`), easily bypassing filters.\n\n⭐ **Exam Rule:** Neither SSID hiding nor MAC filtering provides true security. Robust security requires **strong modern encryption (WPA2/WPA3)**.`
      },
      {
        heading: '4. WPS (Wi-Fi Protected Setup) Vulnerability',
        content: `**WPS** was designed to simplify home Wi-Fi pairing via Push-Button Configuration (PBC) or an 8-digit numeric PIN.\n\n**Critical Vulnerability:**\n- The 8-digit PIN is split by the protocol into two 4-digit halves (first half = 10,000 attempts, second half = 1,000 attempts).\n- Attackers use brute-force tools (Reaver, Bully) to guess the PIN in a few hours and recover the WPA/WPA2 pre-shared key.\n- **Best Practice:** WPS should be permanently disabled on all production routers.`
      }
    ]
  }
];

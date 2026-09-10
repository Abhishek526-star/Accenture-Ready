// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  CheckCircle,
  Code2,
  ShieldCheck,
  Zap,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BookOpen,
  Brain,
  Grid,
  Database,
  Coffee,
  Cloud,
  Network,
  ShieldAlert,
  Boxes,
  Wifi
} from 'lucide-react';
import { questions } from '../data/questions.js';
import { storage } from '../utils/storage.js';

export default function Home() {
  const completedIds = storage.getCompletedQuestions();

  const getDifficultyBadge = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return <span className="badge badge-easy">Easy</span>;
      case 'medium':
        return <span className="badge badge-medium">Medium</span>;
      case 'hard':
        return <span className="badge badge-hard">Hard</span>;
      default:
        return <span className="badge badge-easy">Easy</span>;
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Comprehensive Technical Assessment Simulator
          </div>
          <h1 className="hero-title">Technical, SQL & Cognitive Assessment Practice</h1>
          <p className="hero-subtitle">
            Prepare for company technical recruitment screens with dedicated environments:
            <strong> Cloud, Wi-Fi & Network Security</strong>, <strong>OOPs Concepts</strong>, <strong>Gamified Cognitive Round</strong>, <strong>Frontend Coding Round</strong>, and the new <strong>SQL Assessment & Compiler Round</strong> with real in-browser SQLite execution.
          </p>

          <div className="hero-actions">
            <Link to="/cloud-assessment" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #0284c7, #0369a1)', border: 'none' }}>
              <Cloud size={18} />
              <span>Cloud Computing (85 PYQs)</span>
            </Link>
            <Link to="/cloud-security" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #059669, #047857)', border: 'none' }}>
              <ShieldCheck size={18} />
              <span>Cloud Security (45 PYQs)</span>
            </Link>
            <Link to="/network-assessment" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #4f46e5, #6366f1)', border: 'none' }}>
              <Network size={18} />
              <span>Networking (90 PYQs)</span>
            </Link>
            <Link to="/network-security" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #e11d48, #be123c)', border: 'none' }}>
              <ShieldAlert size={18} />
              <span>Network Security (100 PYQs)</span>
            </Link>
            <Link to="/wifi-security" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #0284c7, #0891b2)', border: 'none' }}>
              <Wifi size={18} />
              <span>Wi-Fi Security (25 PYQs)</span>
            </Link>
            <Link to="/oop-assessment" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none' }}>
              <Boxes size={18} />
              <span>OOPs Concepts (35 PYQs)</span>
            </Link>
            <Link to="/java-learning" className="btn btn-secondary btn-lg">
              <Coffee size={18} />
              <span>Java Prep Section</span>
            </Link>
            <Link to="/sql-assessment" className="btn btn-secondary btn-lg">
              <Database size={18} />
              <span>SQL Round</span>
            </Link>
            <Link to="/cognitive" className="btn btn-secondary btn-lg" style={{ gridColumn: 'span 2' }}>
              <Brain size={18} />
              <span>Cognitive Round</span>
            </Link>
            <Link to="/practice" className="btn btn-secondary btn-lg" style={{ gridColumn: 'span 2' }}>
              <Code2 size={18} />
              <span>Frontend Coding Round (10 Tasks)</span>
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Assessment Tracks</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">25</span>
              <span className="stat-label">Wi-Fi MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">35</span>
              <span className="stat-label">OOP MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100</span>
              <span className="stat-label">NetSec MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">90</span>
              <span className="stat-label">Network MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">85</span>
              <span className="stat-label">Cloud MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">45</span>
              <span className="stat-label">Security MCQs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Coding Tasks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tracks Selection Grid */}
      <section style={{ maxWidth: '1200px', margin: '-1rem auto 3rem auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Track 0: Wi-Fi Security */}
          <div style={{
            background: 'linear-gradient(135deg, #083344 0%, #0e7490 120%)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(6, 182, 212, 0.2)', color: '#a5f3fc', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Wifi size={14} /> DEDICATED TRACK: WI-FI SECURITY
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Wi-Fi Security & 802.1X Protocols</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#cffafe', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>25 solved MCQs</strong> across Tiers 1, 2 & 3: WEP (RC4), WPA (TKIP), WPA2 (AES+CCMP), WPA3 (SAE), 802.1X PNAC, RADIUS AAA, Evil Twin, Rogue APs, and Deauthentication attacks.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>25 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>3 Tiers</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>4-Option Breakdown</span>
              </div>
            </div>
            <div>
              <Link to="/wifi-security" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #0891b2, #0e7490)', border: 'none' }}>
                <Wifi size={16} />
                <span>Start Wi-Fi Security (25 MCQs)</span>
              </Link>
            </div>
          </div>
          {/* Track 0: OOP Concepts */}
          <div style={{
            background: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 120%)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(124, 58, 237, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(168, 85, 247, 0.2)', color: '#e9d5ff', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Boxes size={14} /> DEDICATED TRACK: OOPS ARCHITECTURE
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Object-Oriented Programming (OOP)</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#f3e8ff', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>35 solved MCQs</strong> across Tiers 1, 2 & 3: Four Pillars (EAIP), Overloading vs Overriding, Virtual Functions, Abstract Classes, Static & Dynamic Binding, `this` pointer, and the Diamond Problem.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>35 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>3 Tiers</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>4-Option Breakdown</span>
              </div>
            </div>
            <div>
              <Link to="/oop-assessment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none' }}>
                <Boxes size={16} />
                <span>Start OOP Assessment (35 MCQs)</span>
              </Link>
            </div>
          </div>
          {/* Track 0: Network Security PYQs */}
          <div style={{
            background: 'linear-gradient(135deg, #4c0519 0%, #881337 120%)',
            border: '1px solid rgba(244, 63, 94, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(225, 29, 72, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(244, 63, 94, 0.2)', color: '#fecdd3', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <ShieldAlert size={14} /> DEDICATED TRACK: NETWORK SECURITY
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Network Security & Cryptography</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#ffe4e6', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>100 solved MCQs</strong> across Tiers 1, 2 & 3: AES, DES, RC4, stream vs block ciphers, malware taxonomy, IDS vs IPS, UTM, AuthN vs AuthZ, MFA, Zero Trust, honeypots, SIEM, and risk management.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>100 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>3 Tiers</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>4-Option Explanations</span>
              </div>
            </div>
            <div>
              <Link to="/network-security" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #e11d48, #be123c)', border: 'none' }}>
                <ShieldAlert size={16} />
                <span>Start Network Security (100 MCQs)</span>
              </Link>
            </div>
          </div>
          {/* Track 0: Computer Networking PYQs */}
          <div style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 120%)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(99, 102, 241, 0.2)', color: '#c7d2fe', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Network size={14} /> DEDICATED TRACK: COMPUTER NETWORKING
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Computer Networking & Protocols</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#e0e7ff', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>90 solved MCQs</strong> across Tiers 1, 2 & 3: OSI 7-Layer model, TCP vs UDP, 3-way handshake, MAC vs IP, ARP, ICMP, CIDR subnetting (/24 to /30), topologies, routing tables, and diagnostic commands.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>90 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>3 Tiers</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>4-Option Explanations</span>
              </div>
            </div>
            <div>
              <Link to="/network-assessment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #4f46e5, #6366f1)', border: 'none' }}>
                <Network size={16} />
                <span>Start Networking Practice (90 MCQs)</span>
              </Link>
            </div>
          </div>

          {/* Track 1: Cloud Computing PYQs */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 120%)',
            border: '1px solid rgba(2, 132, 199, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(2, 132, 199, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Cloud size={14} /> CLOUD COMPUTING PYQs
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Cloud Computing Architecture & Services</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>85 solved MCQs</strong> across Tiers 1, 2, and 3. IaaS, PaaS, SaaS, serverless architectures, storage tiers, auto-scaling, and post-quiz mastery analytics.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff' }}>85 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff' }}>3 Tiers</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff' }}>4-Option Explanations</span>
              </div>
            </div>
            <div>
              <Link to="/cloud-assessment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #0369a1)', border: 'none' }}>
                <Cloud size={16} />
                <span>Start Cloud Computing (85 MCQs)</span>
              </Link>
            </div>
          </div>

          {/* Track 2: Cloud Security PYQs (Dedicated Section) */}
          <div style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #047857 120%)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(5, 150, 105, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(52, 211, 153, 0.2)', color: '#a7f3d0', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <ShieldCheck size={14} /> DEDICATED TRACK: CLOUD SECURITY
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Cloud Security & Cyber Defense</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#d1fae5', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master all <strong>45 security MCQs</strong> across Security Tiers 1 & 2: CIA Triad, Security Groups vs NACLs, Zero Trust, MFA, RBAC, KMS Encryption, TLS, Logging & Disaster Recovery.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>45 MCQs</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>Security Tiers 1 & 2</span>
                <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' }}>Green Answer Highlighting</span>
              </div>
            </div>
            <div>
              <Link to="/cloud-security" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
                <ShieldCheck size={16} />
                <span>Start Cloud Security (45 MCQs)</span>
              </Link>
            </div>
          </div>

          {/* Track 1: SQL Assessment */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Database size={14} /> SQL
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>SQL Query & Database Problems</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Read schema definitions, write and execute queries against real in-browser SQLite databases, handle NULLs, groupings, subqueries, and pass hidden test cases.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-easy">Easy • Medium</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>15 mins/question</span>
              </div>
            </div>
            <div>
              <Link to="/sql-assessment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none' }}>
                <Database size={16} />
                <span>Start SQL Round</span>
              </Link>
            </div>
          </div>

          {/* Track 2: Coding */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Code2 size={14} /> ROUND 2: FRONTEND CODING
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>DOM & UI Coding Assessment</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Solve 10 practical DOM manipulation, event handling, and form validation challenges with Monaco editor, sandboxed preview, and automated test runners.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-medium">10 Tasks</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>Automated DOM Tests</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/practice" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', background: '#10b981' }}>
                <span>Open Practice Room</span>
              </Link>
            </div>
          </div>

          {/* Track 3: Cognitive */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Brain size={14} /> ROUND 3: COGNITIVE
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Gamified Cognitive Games</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master mental arithmetic sequences in <strong>Math Bubble</strong> and spatial memory navigation in <strong>Memory Maze</strong>.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-easy">Speed & Logic</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>Mental Agility</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/cognitive/assessment" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', background: '#0284c7' }}>
                <span>Take Assessment</span>
              </Link>
              <Link to="/cognitive" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                <span>Practice Hub</span>
              </Link>
            </div>
          </div>

          {/* Track 4: Java Preparation */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Coffee size={14} /> NEW: JAVA LEARNING & PREP
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Assessment Java Handbook</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Interactive, code-focused preparation covering Arrays, Collections, Strings, StringBuilder, OOP, Exception Handling, and Core DSA patterns.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#fb923c' }}>18 Assessment Topics</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>Interactive Code Runner</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/java-learning" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', background: 'linear-gradient(135deg, #f97316, #ea580c)', border: 'none' }}>
                <Coffee size={16} />
                <span>Start Java Prep</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Topics Covered */}
      <section className="topics-section">
        <div className="section-header-centered">
          <h2>Core Assessment Competencies</h2>
          <p>Key frontend skills assessed in technical recruitment screens</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">
              <Code2 size={24} />
            </div>
            <h3>DOM Manipulation</h3>
            <p>Direct DOM querying, element creation, dynamic updates, and class manipulation.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Zap size={24} />
            </div>
            <h3>Event Handling</h3>
            <p>Click listeners, keyboard events, form submit prevention, and live input filtering.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Form Validation</h3>
            <p>Client-side validation, password matching, length checks, and real-time user feedback.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <BookOpen size={24} />
            </div>
            <h3>UI State & Logic</h3>
            <p>Dynamic theme switching, counter boundaries, conditional rendering, and conversions.</p>
          </div>
        </div>
      </section>

      {/* Question Directory */}
      <section className="questions-directory-section">
        <div className="section-header-flex">
          <div>
            <h2>Practice Question Set</h2>
            <p>Work through the 10 assessment questions in order or jump to any task.</p>
          </div>
          <Link to="/practice" className="btn btn-primary">
            <span>Open Practice Workspace</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="questions-grid">
          {questions.map((q) => {
            const isCompleted = completedIds.includes(q.id);
            return (
              <div key={q.id} className={`landing-q-card ${isCompleted ? 'completed' : ''}`}>
                <div className="q-card-top">
                  <span className="q-number">Question {q.id}</span>
                  <div className="q-badges">
                    {getDifficultyBadge(q.difficulty)}
                    {isCompleted && (
                      <span className="badge badge-solved">
                        <CheckCircle size={12} /> Solved
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="q-title">{q.title}</h3>
                <p className="q-category">{q.category}</p>
                <p className="q-desc">{q.howToAttempt}</p>

                <div className="q-card-footer">
                  <span className="q-objectives-count">
                    {(q.objectives?.length) || ((q.htmlObjectives?.length || 0) + (q.cssObjectives?.length || 0) + (q.jsObjectives?.length || 0))} Objectives
                  </span>
                  <Link to={`/practice?q=${q.id}`} className="btn btn-secondary btn-sm">
                    <span>Attempt</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-section">
        <div className="section-header-centered">
          <h2>Assessment Environment Features</h2>
          <p>Engineered to simulate realistic recruitment screening assessments</p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <ShieldCheck size={20} className="feature-icon" />
            <div>
              <h4>Sandboxed Iframe Execution</h4>
              <p>Candidate code runs inside an isolated iframe without access to parent state or storage.</p>
            </div>
          </div>

          <div className="feature-item">
            <Zap size={20} className="feature-icon" />
            <div>
              <h4>Automated DOM Testing</h4>
              <p>Independent assertions run against the real rendered DOM to verify your solution.</p>
            </div>
          </div>

          <div className="feature-item">
            <RotateCcw size={20} className="feature-icon" />
            <div>
              <h4>Local Progress Persistence</h4>
              <p>Your code and completion status automatically persist locally in your browser.</p>
            </div>
          </div>

          <div className="feature-item">
            <Sparkles size={20} className="feature-icon" />
            <div>
              <h4>Monaco VS Code Editor</h4>
              <p>Full-featured code editor with syntax highlighting, indentation, and HTML/CSS tabs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="landing-footer">
        <p>
          This platform is designed for educational practice and interview preparation.
          Questions and interface are inspired by standard frontend assessments.
        </p>
      </footer>
    </div>
  );
}

// src/pages/LearningHubPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Coffee,
  Database,
  Code2,
  FileText,
  Boxes,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { javaTopics } from '../data/javaTopics.js';
import { dsaPatterns } from '../data/dsaPatterns.js';
import { cheatSheets } from '../data/cheatSheets.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { javaStorage } from '../utils/javaStorage.js';

export default function LearningHubPage({ theme = 'dark' }) {
  const completedJava = javaStorage.getCompletedTopics().length;

  const categories = [
    {
      id: 'java',
      title: 'Java Master Syllabus',
      icon: <Coffee size={28} className="hub-cat-icon text-amber-500" />,
      tag: 'Core Placement Track',
      description: 'Comprehensive syntax, OOPs, Collections framework, exception handling, and assessment tips with live code execution.',
      stats: `${completedJava} / ${javaTopics.length} Completed`,
      progress: Math.round((completedJava / javaTopics.length) * 100),
      route: '/java-learning',
      color: '#f97316',
      badge: 'Interactive Compiler'
    },
    {
      id: 'dsa',
      title: 'DSA Question Sheet',
      icon: <Zap size={28} className="hub-cat-icon text-sky-400" />,
      tag: '49 Placement Questions',
      description: 'Curated 49 high-yield problems across Pattern Printing, Arrays, Numbers, Strings, Recursion, and Implementations.',
      stats: `${dsaPatterns.length} Questions Ready`,
      progress: 100,
      route: '/learn/dsa',
      color: '#38bdf8',
      badge: 'Curated Sheet'
    },
    {
      id: 'sql',
      title: 'SQL Assessment Engine',
      icon: <Database size={28} className="hub-cat-icon text-emerald-400" />,
      tag: 'In-Browser SQLite',
      description: 'Master SELECT, WHERE, GROUP BY, HAVING, Multi-table JOINs, and subqueries on realistic employee/department schemas.',
      stats: `${sqlQuestions.length} Problem Queries`,
      progress: 85,
      route: '/sql-assessment',
      color: '#10b981',
      badge: 'Live SQL Execution'
    },
    {
      id: 'cheatsheets',
      title: 'High-Yield Cheat Sheets',
      icon: <FileText size={28} className="hub-cat-icon text-purple-400" />,
      tag: 'Last-Minute Revision',
      description: 'Arrays, String/StringBuilder, Collections methods, Big-O complexities, and C++ vs Java interview comparison.',
      stats: `${cheatSheets.length} Master Sheets`,
      progress: 100,
      route: '/learn/cheat-sheets',
      color: '#a855f7',
      badge: 'Quick Reference'
    }
  ];

  return (
    <div className="learning-hub-page" style={{ padding: '2rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        marginBottom: '2.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 12px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          <Sparkles size={14} />
          <span>ACCENTURE LEARNING ECOSYSTEM</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
          Placement Learning Hub
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '720px', margin: 0, lineHeight: 1.6 }}>
          Master core technical competencies tested in Accenture written and coding assessments. Choose a dedicated learning track below.
        </p>
      </div>

      {/* Grid of Learning Tracks */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.75rem',
        marginBottom: '3rem'
      }}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              background: 'var(--card-bg, #1e293b)',
              border: '1px solid var(--border-color, #334155)',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: `${cat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cat.icon}
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  background: `${cat.color}18`,
                  color: cat.color,
                  border: `1px solid ${cat.color}40`
                }}>
                  {cat.badge}
                </span>
              </div>

              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>
                {cat.tag}
              </span>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0.25rem 0 0.75rem 0' }}>
                {cat.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                {cat.description}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: 500 }}>
                <span>Curriculum Depth</span>
                <span style={{ color: cat.color, fontWeight: 700 }}>{cat.stats}</span>
              </div>
              <div style={{ height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <div style={{ height: '100%', width: `${cat.progress}%`, background: cat.color, borderRadius: '3px' }} />
              </div>

              <Link
                to={cat.route}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: `linear-gradient(135deg, ${cat.color}, ${cat.color}dd)`,
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 600,
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none'
                }}
              >
                <span>Enter Track</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Sequence Section */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.6)',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '1.75rem'
      }}>
        <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', margin: '0 0 1rem 0' }}>
          Recommended Preparation Roadmap
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ padding: '1rem', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155' }}>
            <span style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem' }}>Phase 1</span>
            <h4 style={{ margin: '0.25rem 0', color: '#f8fafc', fontSize: '1rem' }}>Java & Core OOPs</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Classes, Objects, Methods, Collections, and Exception handling.</p>
          </div>
          <div style={{ padding: '1rem', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155' }}>
            <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem' }}>Phase 2</span>
            <h4 style={{ margin: '0.25rem 0', color: '#f8fafc', fontSize: '1rem' }}>DSA Patterns</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Sliding window, two-pointer, and frequency map optimization.</p>
          </div>
          <div style={{ padding: '1rem', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155' }}>
            <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem' }}>Phase 3</span>
            <h4 style={{ margin: '0.25rem 0', color: '#f8fafc', fontSize: '1rem' }}>SQL Mastery</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>GROUP BY, HAVING, subqueries, and multi-table JOIN queries.</p>
          </div>
          <div style={{ padding: '1rem', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155' }}>
            <span style={{ color: '#a855f7', fontWeight: 700, fontSize: '0.85rem' }}>Phase 4</span>
            <h4 style={{ margin: '0.25rem 0', color: '#f8fafc', fontSize: '1rem' }}>Mock & Speed Drills</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Full 90-minute assessments and quick-fire cognitive tests.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

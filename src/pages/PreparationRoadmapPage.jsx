// src/pages/PreparationRoadmapPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  Coffee,
  Database,
  Code2,
  Brain
} from 'lucide-react';
import { storage } from '../utils/storage.js';
import { sqlStorage } from '../utils/sqlStorage.js';
import { javaStorage } from '../utils/javaStorage.js';

export default function PreparationRoadmapPage({ theme = 'dark' }) {
  const completedCoding = storage.getCompletedQuestions();
  const completedSQL = sqlStorage.getCompletedQuestions();
  const completedJava = javaStorage.getCompletedTopics();

  const days = [
    {
      day: 1,
      title: 'Foundation: Java Syntax & Basic Arrays',
      description: 'Master core primitives, control flow, array memory layout, and solve introductory DOM/Array challenges.',
      tasks: [
        { title: 'Java Basics & Class Structure', link: '/java-learning?topic=java-basics-syntax', done: completedJava.includes('java-basics-syntax') },
        { title: 'Variables & Data Types', link: '/java-learning?topic=variables-datatypes', done: completedJava.includes('variables-datatypes') },
        { title: 'Solve 2 Coding Questions', link: '/practice', done: completedCoding.length >= 2 }
      ]
    },
    {
      day: 2,
      title: 'Strings, Frequency Maps & SQL Aggregates',
      description: 'String immutability, StringBuilder efficiency, frequency counting pattern, and SQL GROUP BY queries.',
      tasks: [
        { title: 'Strings & Parsing Logic', link: '/practice?q=2', done: completedCoding.length >= 4 },
        { title: 'Frequency Map DSA Pattern', link: '/learn/dsa', done: true },
        { title: 'SQL GROUP BY & Aggregation', link: '/sql-assessment?q=sql-002', done: completedSQL.length >= 1 }
      ]
    },
    {
      day: 3,
      title: 'SQL JOINs & Two Pointer Algorithmic Mastery',
      description: 'Multi-table INNER and LEFT JOINs, handling NULLs, and linear two-pointer array partitions.',
      tasks: [
        { title: 'SQL JOIN Practice Queries', link: '/sql-assessment?q=sql-004', done: completedSQL.length >= 3 },
        { title: 'Two Pointer Pattern Study', link: '/learn/dsa', done: true },
        { title: 'Attempt Daily Challenge', link: '/daily-challenge', done: true }
      ]
    },
    {
      day: 4,
      title: 'Java Collections Framework (List, Set, Map)',
      description: 'ArrayList internal resizing, HashSet uniqueness, and HashMap collision resolution mechanics.',
      tasks: [
        { title: 'Java Collections Study', link: '/java-learning?topic=hashmap-guide', done: completedJava.length >= 5 },
        { title: 'SQL Subquery & Window Functions', link: '/sql-assessment', done: completedSQL.length >= 5 },
        { title: 'Java Arrays & Collections Cheat Sheet', link: '/learn/cheat-sheets', done: true }
      ]
    },
    {
      day: 5,
      title: 'Sliding Window, Prefix Sum & Aptitude MCQs',
      description: 'Optimal subarray algorithms, prefix range queries, and core networking / cloud MCQs.',
      tasks: [
        { title: 'Sliding Window DSA Template', link: '/learn/dsa', done: true },
        { title: 'Networking Fundamentals Drill', link: '/network-assessment', done: true },
        { title: 'Cloud Computing Assessment', link: '/cloud-assessment', done: true }
      ]
    },
    {
      day: 6,
      title: 'Security Core & Cognitive Speed Training',
      description: 'Network security protocols, Wi-Fi WPA3 encryption standards, Math Bubble and Memory Maze.',
      tasks: [
        { title: 'Network Security Question Bank', link: '/network-security', done: true },
        { title: 'Wi-Fi Security Review', link: '/wifi-security', done: true },
        { title: 'Math Bubble Speed Round (>= 80% accuracy)', link: '/cognitive/quick-fire-math', done: true },
        { title: 'Memory Maze Spatial Navigation', link: '/cognitive/memory-maze', done: true }
      ]
    },
    {
      day: 7,
      title: 'Full Mock Assessment & Interview Finalization',
      description: '90-minute timed simulation covering all four testing rounds, followed by STAR interview review.',
      tasks: [
        { title: 'Full 90-Min Mock Assessment', link: '/mock-test', done: false },
        { title: 'Analyze Performance & Weak Areas', link: '/analytics', done: true },
        { title: 'Review STAR Method Project Interview Prep', link: '/interview', done: true }
      ]
    }
  ];

  return (
    <div className="roadmap-page-container">
      {/* Header */}
      <div className="roadmap-hero-card">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          <Calendar size={14} /> STRUCTURED PREPARATION PLAN
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          7-Day Accenture Crack Roadmap
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
          Follow this calibrated daily schedule to prepare across every single assessment round. Tasks automatically reflect your real completion status.
        </p>
      </div>

      {/* Days Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {days.map((dayItem) => {
          const completedCount = dayItem.tasks.filter(t => t.done).length;
          const isDayComplete = completedCount === dayItem.tasks.length;
          return (
            <div
              key={dayItem.day}
              style={{
                background: '#1e293b',
                border: isDayComplete ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid #334155',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '8px',
                    background: isDayComplete ? 'rgba(34, 197, 94, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                    color: isDayComplete ? '#4ade80' : '#38bdf8'
                  }}>
                    DAY {dayItem.day} {isDayComplete ? '• COMPLETED' : ''}
                  </span>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0.4rem 0 0.25rem 0' }}>
                    {dayItem.title}
                  </h2>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>
                    {dayItem.description}
                  </p>
                </div>

                <span style={{ fontSize: '0.85rem', color: isDayComplete ? '#4ade80' : '#94a3b8', fontWeight: 600 }}>
                  {completedCount} / {dayItem.tasks.length} Tasks Done
                </span>
              </div>

              {/* Tasks List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.25rem' }}>
                {dayItem.tasks.map((task, tIdx) => (
                  <div
                    key={tIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#0f172a',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      padding: '10px 14px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {task.done ? (
                        <CheckCircle2 size={18} style={{ color: '#4ade80' }} />
                      ) : (
                        <Circle size={18} style={{ color: '#64748b' }} />
                      )}
                      <span style={{ color: task.done ? '#cbd5e1' : '#f8fafc', fontSize: '0.9rem', textDecoration: task.done ? 'line-through' : 'none' }}>
                        {task.title}
                      </span>
                    </div>

                    <Link
                      to={task.link}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#38bdf8',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <span>{task.done ? 'Review' : 'Start'}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

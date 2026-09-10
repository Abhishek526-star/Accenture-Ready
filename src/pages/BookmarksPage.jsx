// src/pages/BookmarksPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark,
  Trash2,
  ExternalLink,
  Code2,
  Database,
  Coffee,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';
import { bookmarksStorage } from '../services/bookmarksStorage.js';

export default function BookmarksPage({ theme = 'dark' }) {
  const [bookmarks, setBookmarks] = useState(() => bookmarksStorage.getBookmarks());
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | 'coding' | 'sql' | 'java'

  const handleRemove = (id, type) => {
    bookmarksStorage.removeBookmark(id, type);
    setBookmarks(bookmarksStorage.getBookmarks());
  };

  const filtered = bookmarks.filter(b => {
    if (selectedFilter === 'all') return true;
    return b.type === selectedFilter;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        border: '1px solid rgba(234, 179, 8, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(234, 179, 8, 0.15)', color: '#eab308', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          <Bookmark size={14} /> REVISION VAULT
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          My Bookmarked Questions
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
          Questions and problems you have flagged for high-yield revision before your Accenture interview and written test.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: `All Bookmarks (${bookmarks.length})` },
          { id: 'coding', label: `Coding (${bookmarks.filter(b => b.type === 'coding').length})` },
          { id: 'sql', label: `SQL Queries (${bookmarks.filter(b => b.type === 'sql').length})` },
          { id: 'java', label: `Java Lessons (${bookmarks.filter(b => b.type === 'java').length})` }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: selectedFilter === tab.id ? '#eab308' : '#1e293b',
              color: selectedFilter === tab.id ? '#0f172a' : '#cbd5e1',
              border: selectedFilter === tab.id ? '1px solid #eab308' : '1px solid #334155',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bookmarks List or Empty State */}
      {filtered.length === 0 ? (
        <div style={{
          background: '#1e293b',
          border: '1px dashed #475569',
          borderRadius: '16px',
          padding: '3.5rem 2rem',
          textAlign: 'center'
        }}>
          <Bookmark size={40} style={{ color: '#64748b', margin: '0 auto 1rem auto' }} />
          <h3 style={{ color: '#f8fafc', fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Bookmarks in this category</h3>
          <p style={{ color: '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
            Click the ☆ Bookmark button on any question in the Coding Round, SQL Round, or Java Hub to save it here for rapid revision.
          </p>
          <Link
            to="/practice"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#38bdf8',
              border: 'none',
              color: '#0f172a',
              fontWeight: 700,
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            <span>Explore Practice Questions</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: '#0f172a',
                    color: item.type === 'sql' ? '#f97316' : item.type === 'java' ? '#eab308' : '#38bdf8',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {item.type}
                  </span>
                  <button
                    onClick={() => handleRemove(item.id, item.type)}
                    title="Remove bookmark"
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 0.4rem 0' }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {item.category} • <strong style={{ color: item.difficulty === 'Easy' ? '#4ade80' : '#facc15' }}>{item.difficulty}</strong>
                </span>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Link
                  to={item.route || '/practice'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    width: '100%',
                    padding: '8px 12px',
                    background: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    color: '#f8fafc',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>Practice Problem</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

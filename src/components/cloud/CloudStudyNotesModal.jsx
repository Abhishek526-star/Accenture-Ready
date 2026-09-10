// src/components/cloud/CloudStudyNotesModal.jsx
import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2,
  Table,
  ArrowRight
} from 'lucide-react';
import { cloudStudyGuides } from '../../data/cloudQuestions.js';

export default function CloudStudyNotesModal({
  isOpen,
  onClose,
  studyGuides = cloudStudyGuides,
  title = 'Cloud Computing Revision Notes & Handbook',
  subtitle = 'Comprehensive study guide, architectural comparisons & high-frequency shortcuts',
  getTierMetaCustom
}) {
  const [selectedTier, setSelectedTier] = useState(1);

  if (!isOpen) return null;

  const guidesList = Array.isArray(studyGuides)
    ? studyGuides
    : Object.values(studyGuides || {});

  const currentGuide = guidesList.find((g) => Number(g.tier) === Number(selectedTier)) || guidesList[0] || { sections: [] };

  const getTierMeta = (tier) => {
    if (getTierMetaCustom) {
      const custom = getTierMetaCustom(tier);
      if (custom) {
        return {
          label: custom.title || custom.label || `Tier ${tier}`,
          count: custom.badge || custom.count || '',
          badge: custom.description || custom.badge || ''
        };
      }
    }
    switch (Number(tier)) {
      case 1:
        return { label: 'Tier 1: Fundamentals', count: 'Core Concepts', badge: 'Tier 1' };
      case 2:
        return { label: 'Tier 2: Architecture', count: 'Deep Dive', badge: 'Tier 2' };
      case 3:
        return { label: 'Tier 3: Advanced', count: 'Scenarios', badge: 'Tier 3' };
      default:
        return { label: `Tier ${tier}`, count: 'Revision', badge: `Tier ${tier}` };
    }
  };

  return (
    <div className="cloud-modal-overlay" onClick={onClose}>
      <div className="cloud-notes-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cloud-notes-header">
          <div className="cloud-notes-title-group">
            <div className="cloud-notes-icon">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="cloud-notes-title">{title}</h2>
              <p className="cloud-notes-sub">{subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            className="cloud-modal-close"
            onClick={onClose}
            aria-label="Close Study Notes"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tier Selector Tabs Strip */}
        <div className="cloud-notes-tabs-wrapper">
          <div className="cloud-notes-tabs" role="tablist">
            {guidesList.map((guide) => {
              const meta = getTierMeta(guide.tier);
              const isActive = Number(selectedTier) === Number(guide.tier);
              return (
                <button
                  key={guide.tier}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`cloud-notes-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedTier(guide.tier)}
                >
                  <Layers size={16} />
                  <span className="cloud-notes-tab-title">{meta.label}</span>
                  {meta.count && <span className="cloud-notes-tab-badge">{meta.count}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Body Content */}
        <div className="cloud-notes-body">
          <div className="cloud-guide-banner">
            <div>
              <h3 className="cloud-guide-title">{currentGuide.title || 'Revision Notes'}</h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {getTierMeta(currentGuide.tier).badge} • Accenture High-Yield MCQs
              </p>
            </div>
            <span className="cloud-badge cloud-badge-primary">
              {getTierMeta(currentGuide.tier).count}
            </span>
          </div>

          <div className="cloud-guide-sections">
            {currentGuide.sections.map((sec, idx) => (
              <section key={idx} className="cloud-guide-section-card">
                <h4 className="cloud-guide-sec-heading">
                  <span className="sec-num">{idx + 1}.</span> {sec.heading}
                </h4>

                {sec.content && (
                  <div className="cloud-guide-content">
                    {sec.content.split('\n\n').map((para, pIdx) => {
                      if (para.startsWith('* ') || para.startsWith('1. ') || para.startsWith('2. ')) {
                        const items = para.split('\n');
                        return (
                          <ul key={pIdx} className="cloud-guide-list">
                            {items.map((it, iIdx) => (
                              <li key={iIdx} dangerouslySetInnerHTML={{
                                __html: it.replace(/^\* |^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              }} />
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={pIdx}
                          dangerouslySetInnerHTML={{
                            __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                {/* Optional Table */}
                {sec.table && (
                  <div className="cloud-guide-table-wrap">
                    <table className="cloud-guide-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((r, rIdx) => (
                          <tr key={rIdx}>
                            {r.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Memory Hook Box */}
                {sec.memoryBox && (
                  <div className="cloud-guide-memory-box">
                    <Zap size={16} />
                    <span>{sec.memoryBox}</span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="cloud-notes-footer">
          <button
            type="button"
            className="cloud-btn cloud-btn-primary"
            onClick={onClose}
          >
            Start Practicing Questions
          </button>
        </div>
      </div>
    </div>
  );
}

// src/components/sql/SQLSchemaModal.jsx
import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, X, Database } from 'lucide-react';
import DatabaseERDiagram from './DatabaseERDiagram.jsx';
import './SQLSchemaModal.css';

export default function SQLSchemaModal({
  isOpen,
  onClose,
  schema,
  questionTitle = 'Database Schema'
}) {
  const [isMaximized, setIsMaximized] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !schema) return null;

  const tableCount =
    (schema.tables && schema.tables.length) ||
    (schema.viewSchema && schema.viewSchema.tables && schema.viewSchema.tables.length) ||
    (Array.isArray(schema) ? schema.length : 0);

  return (
    <div
      className="sql-schema-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`sql-schema-window ${isMaximized ? 'maximized' : 'normal'}`}>
        {/* Window Desktop / iFrame Style Header */}
        <header className="sql-schema-window-header">
          <div className="window-header-left">
            {/* macOS / Window Dots */}
            <div className="window-dots">
              <span className="window-dot close-dot" title="Close" onClick={onClose} style={{ cursor: 'pointer' }} />
              <span className="window-dot min-dot" />
              <span
                className="window-dot max-dot"
                title="Toggle Maximize"
                onClick={() => setIsMaximized((prev) => !prev)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            <div className="window-title-badge">
              <div className="window-icon-box">
                <Database size={15} />
              </div>
              <h3 className="window-title">
                {questionTitle ? `${questionTitle} — ER Diagram` : 'Database Schema — ER Diagram'}
              </h3>
            </div>

            {tableCount > 0 && (
              <span className="window-table-count">
                {tableCount} {tableCount === 1 ? 'Table' : 'Tables'}
              </span>
            )}
          </div>

          {/* Header Action Buttons */}
          <div className="window-header-actions">
            <button
              type="button"
              onClick={() => setIsMaximized((prev) => !prev)}
              className="window-action-btn"
              title={isMaximized ? 'Restore window size' : 'Maximize window'}
            >
              {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="window-action-btn close-btn"
              title="Close window (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* Window Canvas Body */}
        <div className="sql-schema-window-body">
          <DatabaseERDiagram schema={schema} title="Entity-Relationship Diagram" />
        </div>
      </div>
    </div>
  );
}

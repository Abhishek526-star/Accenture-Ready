import React, { useState, useMemo } from 'react';
import { Clock, Tag, HelpCircle, FileText, Info, ListChecks, Check, Database, GitFork } from 'lucide-react';
import SQLSchemaViewer from './SQLSchemaViewer.jsx';
import SQLExampleViewer from './SQLExampleViewer.jsx';
import SQLSolutionViewer from './SQLSolutionViewer.jsx';
import SQLSchemaModal from './SQLSchemaModal.jsx';
import { sqlViewSchemas } from '../../data/sqlSchemas.js';
import { parseProblemStatement, formatInlineMarkdown } from '../../utils/sqlMarkdown.js';

export default function SQLQuestionPanel({ question, onApplySolution, onLoadSolution }) {
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState(false);

  if (!question) return null;

  const parsedProblem = useMemo(() => {
    return parseProblemStatement(question.problem || question.description || '');
  }, [question.problem, question.description]);

  // Determine full relational schema if available
  const effectiveSchema = useMemo(() => {
    if (question.viewSchema) return question.viewSchema;
    const qNum = parseInt(String(question.id || '').replace(/^sql-0*/i, ''), 10);
    if (qNum && sqlViewSchemas[qNum]) return sqlViewSchemas[qNum];
    if (question.tableSchema && question.tableSchema.length > 0) return { tables: question.tableSchema };
    return null;
  }, [question]);

  const getDifficultyBadge = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return <span className="badge badge-easy">Easy</span>;
      case 'medium':
        return <span className="badge badge-medium">Medium</span>;
      case 'hard':
        return <span className="badge badge-hard">Hard</span>;
      default:
        return <span className="badge badge-medium">Medium</span>;
    }
  };

  return (
    <div className="sql-question-panel">
      {/* Header Info */}
      <div className="sql-q-header">
        <div className="sql-q-meta">
          <span className="sql-round-badge">SQL</span>
          {getDifficultyBadge(question.difficulty)}
          <span className="sql-time-badge">
            <Clock size={12} /> {question.duration || 15} mins
          </span>
          {question.category && (
            <span className="sql-category-badge">
              <Tag size={12} /> {question.category}
            </span>
          )}
        </div>

        <h2 className="sql-q-title">{question.title}</h2>
      </div>

      <div className="sql-q-content">
        {/* Solution & Walkthrough Section */}
        {question.solution && (
          <SQLSolutionViewer
            question={question}
            onLoadSolution={onLoadSolution || onApplySolution}
          />
        )}

        {/* How to attempt */}
        {question.howToAttempt && (
          <div className="sql-section how-to-attempt">
            <div className="section-label">
              <HelpCircle size={15} />
              <span>How to Attempt?</span>
            </div>
            <p className="section-text">{question.howToAttempt}</p>
          </div>
        )}

        {/* Database Schema Section with View Schema Button */}
        {effectiveSchema && (
          <div className="sql-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div className="section-label" style={{ margin: 0 }}>
                <Database size={15} />
                <span>Database Schema</span>
              </div>

              {/* View Schema Button: opens floating iFrame-style ER Diagram window */}
              <button
                type="button"
                onClick={() => setIsSchemaModalOpen(true)}
                className="btn btn-sm btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(249, 115, 22, 0.4)',
                  background: 'rgba(234, 88, 12, 0.12)',
                  color: '#fb923c',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}
                title="Click to open interactive Entity-Relationship (ER) Diagram window"
              >
                <GitFork size={13} />
                <span>View Schema</span>
              </button>
            </div>

            {/* Floating iFrame-Style Window Modal */}
            <SQLSchemaModal
              isOpen={isSchemaModalOpen}
              onClose={() => setIsSchemaModalOpen(false)}
              schema={effectiveSchema}
              questionTitle={question.title}
            />

            {/* Standard Table View for inline quick lookup */}
            <SQLSchemaViewer tableSchema={question.tableSchema || (effectiveSchema.tables || [])} />
          </div>
        )}

        {/* Problem Statement */}
        <div className="sql-section problem-statement">
          <div className="section-label">
            <FileText size={15} />
            <span>Problem Statement</span>
          </div>
          <div className="problem-body">
            {parsedProblem.descriptionBlocks.map((block, idx) => {
              if (block.type === 'bullets') {
                return (
                  <ul key={idx} className="problem-bullets">
                    {block.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }}
                      />
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content) }}
                />
              );
            })}
          </div>
        </div>

        {/* Important Requirements Beautified Card */}
        {parsedProblem.requirements && parsedProblem.requirements.items.length > 0 && (
          <div className="sql-section sql-requirements-card">
            <div className="section-label req-label">
              <ListChecks size={16} className="req-header-icon" />
              <span>{parsedProblem.requirements.title}</span>
              <span className="req-count-badge">
                {parsedProblem.requirements.items.length}{' '}
                {parsedProblem.requirements.items.length === 1 ? 'Rule' : 'Rules'}
              </span>
            </div>
            <ul className="sql-req-list">
              {parsedProblem.requirements.items.map((item, idx) => (
                <li key={idx} className="sql-req-item">
                  <div className="sql-req-icon-box">
                    <Check size={12} className="sql-req-check" />
                  </div>
                  <div
                    className="sql-req-text"
                    dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notes & Requirements */}
        {((question.notes && question.notes.length > 0) || (question.rules && question.rules.length > 0)) && (
          <div className="sql-section sql-notes-box">
            <div className="section-label">
              <Info size={15} />
              <span>Important Rules & Notes</span>
            </div>
            <ul className="notes-list">
              {(question.notes || question.rules || []).map((note, idx) => (
                <li
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(note) }}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Examples */}
        {question.examples && question.examples.length > 0 && (
          <div className="sql-section">
            <SQLExampleViewer examples={question.examples} />
          </div>
        )}
      </div>
    </div>
  );
}

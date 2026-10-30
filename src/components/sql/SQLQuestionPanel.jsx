import React, { useState, useMemo } from 'react';
import { Clock, Tag, HelpCircle, FileText, Info, ListChecks, Check, Database, GitFork, Calendar } from 'lucide-react';
import SQLSchemaViewer from './SQLSchemaViewer.jsx';
import SQLExampleViewer from './SQLExampleViewer.jsx';
import SQLSolutionViewer from './SQLSolutionViewer.jsx';
import SQLSchemaModal from './SQLSchemaModal.jsx';
import SqlRichText from './SqlRichText.jsx';
import { sqlViewSchemas } from '../../data/sqlSchemas.js';
import { parseProblemStatement, formatInlineMarkdown } from '../../utils/sqlMarkdown.js';
import './SQLModernPanel.css';

export default function SQLQuestionPanel({ question, onApplySolution, onLoadSolution, onOpenSchemaModal }) {
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

  const handleOpenSchemaModal = () => {
    setIsSchemaModalOpen(true);
    if (onOpenSchemaModal) {
      onOpenSchemaModal();
    }
  };

  // Modern Accenture Questions (31-40): Focused Image 1 layout with Q30 dark theme styling
  const isModernAccenture = Boolean(
    question.numericId >= 31 ||
    question.connectionLines ||
    question.diagramTables ||
    (question.concepts && question.concepts.length > 0 && question.numericId > 30)
  );

  const renderHighlightedStatement = (text) => {
    if (!text) return null;
    const parts = [];
    const regex = /'([^']+)'/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <span key={match.index} className="sql-literal-pill">
          '{match[1]}'
        </span>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts;
  };

  if (isModernAccenture) {
    const rawStatement = question.statement || question.howToAttempt || question.problem || '';
    const cleanStmt = rawStatement.replace(/^Write an SQL query to display:\s*/i, '');

    return (
      <div className="sql-question-panel sql-modern-panel">
        {/* Domain & Difficulty Header */}
        <div className="sql-modern-header">
          <div className="sql-domain-kicker">
            <Database size={15} />
            <span>{question.domain ? question.domain.toUpperCase() : 'AEROGLOBAL AIRWAYS'}</span>
          </div>
          <div>{getDifficultyBadge(question.difficulty)}</div>
        </div>

        {/* Heading: How to Attempt? */}
        <h2 className="sql-how-to-attempt-title">How to Attempt?</h2>

        {/* Lead-in */}
        <div className="sql-lead-in">Write an SQL query to display:</div>

        {/* Statement with Quoted Literals Highlighted in Gold Pills */}
        <div className="sql-modern-statement">
          {renderHighlightedStatement(cleanStmt)}
        </div>

        {/* Boxed Output Column Section */}
        {question.expectedColumns && question.expectedColumns.length > 0 && (
          <div className="sql-output-columns-section">
            <div className="sql-output-requirement-label">
              Your output should have column as given below.
            </div>
            <div className="sql-boxed-output-table">
              {question.expectedColumns.map((col, idx) => (
                <div key={idx} className="sql-boxed-output-cell">
                  {String(col).toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schema Directive Callout Box with View Schema Button */}
        <div className="sql-schema-directive-box">
          <div className="sql-schema-directive-content">
            <Info size={16} className="sql-directive-info-icon" />
            <p className="sql-directive-text">
              You can view the database schema by clicking the <strong>View Schema</strong> tab at the bottom of the query window on the right-hand side of the screen.
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenSchemaModal}
            className="sql-btn-view-schema"
            title="Click to view database schema & ER diagram"
          >
            <GitFork size={13} />
            <span>View Schema</span>
          </button>
        </div>

        {/* CONCEPTS TESTED Section */}
        {question.concepts && question.concepts.length > 0 && (
          <div className="sql-concepts-section">
            <div className="sql-concepts-title">CONCEPTS TESTED</div>
            <div className="sql-concepts-pills-row">
              {question.concepts.map((concept, idx) => (
                <span key={idx} className="sql-concept-pill">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Solution Viewer Section */}
        {question.solution && (
          <div style={{ marginTop: '0.5rem' }}>
            <SQLSolutionViewer
              question={question}
              onLoadSolution={onLoadSolution || onApplySolution}
            />
          </div>
        )}

        {/* Interactive Floating ER Diagram Modal */}
        {effectiveSchema && (
          <SQLSchemaModal
            isOpen={isSchemaModalOpen}
            onClose={() => setIsSchemaModalOpen(false)}
            schema={effectiveSchema}
            questionTitle={question.title}
          />
        )}
      </div>
    );
  }

  // Legacy Questions (1 to 30): Complete backwards compatibility
  return (
    <div className="sql-question-panel">
      {/* Header Info */}
      <div className="sql-q-header">
        {question.dateTag && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(249, 115, 22, 0.12)',
              border: '1px solid rgba(249, 115, 22, 0.35)',
              color: '#fb923c',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              padding: '3px 9px',
              borderRadius: '6px',
              marginBottom: '0.6rem'
            }}
          >
            <Calendar size={13} />
            <span>ACCENTURE RECENT EXAM ARCHIVE • {question.dateTag}</span>
          </div>
        )}

        <div className="sql-q-meta">
          <span className="sql-round-badge">SQL</span>
          {getDifficultyBadge(question.difficulty)}
          {question.dateTag && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(249, 115, 22, 0.15)',
                color: '#fb923c',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '5px',
                border: '1px solid rgba(249, 115, 22, 0.3)'
              }}
            >
              <Calendar size={11} /> {question.dateTag}
            </span>
          )}
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

        {/* Problem Statement */}
        <div className="sql-section problem-statement">
          <div className="section-label">
            <FileText size={15} />
            <span>Problem Statement</span>
          </div>
          <div className="problem-body">
            <SqlRichText text={parsedProblem.rawDescription || question.problem || question.description} />
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
                onClick={handleOpenSchemaModal}
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

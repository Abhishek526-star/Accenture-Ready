import React, { useMemo } from 'react';
import { Clock, Tag, HelpCircle, FileText, Info, ListChecks, Check } from 'lucide-react';
import SQLSchemaViewer from './SQLSchemaViewer.jsx';
import SQLExampleViewer from './SQLExampleViewer.jsx';
import SQLSolutionViewer from './SQLSolutionViewer.jsx';
import { parseProblemStatement, formatInlineMarkdown } from '../../utils/sqlMarkdown.js';

export default function SQLQuestionPanel({ question, onApplySolution }) {
  if (!question) return null;

  const parsedProblem = useMemo(() => {
    return parseProblemStatement(question.problem);
  }, [question.problem]);

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
            <Clock size={12} /> {question.duration} mins
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
            onLoadSolution={onApplySolution}
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

        {/* Database Schema Viewer */}
        <div className="sql-section">
          <SQLSchemaViewer tableSchema={question.tableSchema} />
        </div>

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
        {question.notes && question.notes.length > 0 && (
          <div className="sql-section sql-notes-box">
            <div className="section-label">
              <Info size={15} />
              <span>Important Notes</span>
            </div>
            <ul className="notes-list">
              {question.notes.map((note, idx) => (
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

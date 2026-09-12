// src/components/sql/SQLResultPanel.jsx
import React from 'react';
import { AlertCircle, CheckCircle, Clock, Database } from 'lucide-react';

export default function SQLResultPanel({ result, isLoading }) {
  if (isLoading) {
    return (
      <div className="sql-result-panel loading">
        <div className="spinner-sm" />
        <span>Executing query on in-memory database...</span>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="sql-result-panel empty">
        <Database size={24} className="text-muted" />
        <p>Click <strong>"Run Query"</strong> or press <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to execute your SQL against the sample dataset.</p>
      </div>
    );
  }

  if (!result.success || result.error) {
    return (
      <div className="sql-result-panel error">
        <div className="sql-error-box">
          <div className="error-title">
            <AlertCircle size={18} />
            <span>SQL Execution Error</span>
          </div>
          <pre className="error-message">{result.error}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="sql-result-panel success">
      {/* Result Status Bar */}
      <div className="result-status-bar">
        <div className="status-badge success">
          <CheckCircle size={14} />
          <span>Query executed successfully</span>
        </div>
        <div className="status-metrics">
          <span className="metric-tag">
            <strong>{result.rowCount}</strong> {result.rowCount === 1 ? 'row' : 'rows'} returned
          </span>
          {result.executionTimeMs !== undefined && (
            <span className="metric-tag">
              <Clock size={12} />
              {result.executionTimeMs} ms
            </span>
          )}
        </div>
      </div>

      {/* Result Table */}
      {result.rowCount === 0 ? (
        <div style={{
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '0.88rem',
          background: '#0b1120',
          borderRadius: '10px',
          border: '1px solid #334155'
        }}>
          <Database size={28} style={{ opacity: 0.4, margin: '0 auto 0.5rem' }} />
          <div>Query executed successfully, but returned <strong>0 records</strong>.</div>
        </div>
      ) : (
        <div style={{
          width: '100%',
          overflowX: 'auto',
          borderRadius: '10px',
          border: '1px solid #334155',
          background: '#0b1120',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.84rem',
            fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace",
            textAlign: 'left'
          }}>
            <thead>
              <tr style={{ background: '#1e293b', borderBottom: '2px solid #38bdf8' }}>
                <th style={{
                  width: '46px',
                  minWidth: '46px',
                  padding: '10px 12px',
                  textAlign: 'center',
                  color: '#94a3b8',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  borderRight: '1px solid #334155',
                  background: '#131c2e'
                }}>
                  #
                </th>
                {result.columns.map((col, idx) => (
                  <th
                    key={idx}
                    style={{
                      padding: '10px 16px',
                      color: '#38bdf8',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                      borderRight: idx < result.columns.length - 1 ? '1px solid #334155' : 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, rIdx) => {
                const isEven = rIdx % 2 === 1;
                return (
                  <tr
                    key={rIdx}
                    style={{
                      background: isEven ? 'rgba(30, 41, 59, 0.45)' : '#0b1120',
                      borderBottom: rIdx < result.rows.length - 1 ? '1px solid #1e293b' : 'none'
                    }}
                  >
                    <td style={{
                      padding: '9px 12px',
                      textAlign: 'center',
                      color: '#64748b',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRight: '1px solid #334155',
                      background: isEven ? '#121a2d' : '#0d1424'
                    }}>
                      {rIdx + 1}
                    </td>
                    {result.columns.map((col, cIdx) => {
                      const val = row[col];
                      const isNull = val === null || val === undefined;
                      return (
                        <td
                          key={cIdx}
                          style={{
                            padding: '9px 16px',
                            color: isNull ? '#fbbf24' : '#f8fafc',
                            borderRight: cIdx < result.columns.length - 1 ? '1px solid #1e293b' : 'none',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {isNull ? (
                            <span style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              background: 'rgba(245, 158, 11, 0.15)',
                              color: '#fbbf24',
                              fontSize: '0.74rem',
                              fontStyle: 'italic',
                              fontWeight: 700,
                              border: '1px solid rgba(245, 158, 11, 0.3)'
                            }}>
                              NULL
                            </span>
                          ) : (
                            <span style={{ fontWeight: 500 }}>{String(val)}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

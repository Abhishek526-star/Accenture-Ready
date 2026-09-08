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
        <div className="empty-result-grid">
          {result.columns && result.columns.length > 0 ? (
            <div className="table-scroll">
              <table className="sql-data-grid">
                <thead>
                  <tr>
                    {result.columns.map((col, idx) => (
                      <th key={idx}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={result.columns.length} className="no-rows-td">
                      No rows returned (0 records)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-rows-msg">Query returned 0 rows.</div>
          )}
        </div>
      ) : (
        <div className="table-scroll">
          <table className="sql-data-grid">
            <thead>
              <tr>
                <th className="row-num-th">#</th>
                {result.columns.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  <td className="row-num-td">{rIdx + 1}</td>
                  {result.columns.map((col, cIdx) => {
                    const val = row[col];
                    return (
                      <td key={cIdx}>
                        {val === null || val === undefined ? (
                          <span className="null-pill">NULL</span>
                        ) : (
                          <span className="val-text">{String(val)}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

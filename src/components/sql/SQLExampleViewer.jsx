// src/components/sql/SQLExampleViewer.jsx
import React from 'react';
import { Table, CheckCircle2 } from 'lucide-react';

export default function SQLExampleViewer({ examples }) {
  if (!examples || examples.length === 0) return null;

  return (
    <div className="sql-examples-viewer">
      {examples.map((example, idx) => (
        <div key={idx} className="sql-example-card">
          <div className="example-header">
            <span className="example-tag">Example {idx + 1}</span>
            {example.title && <span className="example-title">{example.title}</span>}
          </div>

          {/* Input Tables */}
          {example.input && (
            <div className="example-section">
              <div className="example-subheading">
                <Table size={14} />
                <span>Input Table(s):</span>
              </div>

              {Object.entries(example.input).map(([tableName, rows], tIdx) => {
                const cols = rows.length > 0 ? Object.keys(rows[0]) : [];
                return (
                  <div key={tIdx} className="example-table-container">
                    <span className="example-table-name">Table: {tableName}</span>
                    {rows.length === 0 ? (
                      <div className="empty-table-msg">(Empty Table - 0 records)</div>
                    ) : (
                      <div className="table-scroll">
                        <table className="example-data-table">
                          <thead>
                            <tr>
                              {cols.map((col) => (
                                <th key={col}>{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {cols.map((col) => (
                                  <td key={col}>
                                    {row[col] === null ? (
                                      <span className="null-tag">NULL</span>
                                    ) : (
                                      String(row[col])
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Expected Output Table */}
          {example.output && (
            <div className="example-section">
              <div className="example-subheading success">
                <CheckCircle2 size={14} />
                <span>Expected Output:</span>
              </div>

              {example.output.length === 0 ? (
                <div className="empty-table-msg">(Empty Result Set - 0 rows)</div>
              ) : (
                <div className="table-scroll">
                  <table className="example-data-table output-table">
                    <thead>
                      <tr>
                        {Object.keys(example.output[0]).map((col) => (
                          <th key={col}>{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {example.output.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {Object.keys(row).map((col) => (
                            <td key={col}>
                              {row[col] === null ? (
                                <span className="null-tag">NULL</span>
                              ) : (
                                String(row[col])
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Explanation if present */}
          {example.explanation && (
            <div className="example-explanation">
              <strong>Explanation:</strong> {example.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

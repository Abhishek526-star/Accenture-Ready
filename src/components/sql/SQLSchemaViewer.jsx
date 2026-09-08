// src/components/sql/SQLSchemaViewer.jsx
import React from 'react';
import { Database, Key } from 'lucide-react';

export default function SQLSchemaViewer({ tableSchema }) {
  if (!tableSchema || tableSchema.length === 0) return null;

  return (
    <div className="sql-schema-viewer">
      <div className="schema-header">
        <Database size={16} className="text-blue-400" />
        <span>Database Schema</span>
      </div>

      <div className="tables-list">
        {tableSchema.map((table, idx) => (
          <div key={idx} className="schema-table-card">
            <div className="table-card-title">
              <span className="table-badge">Table</span>
              <code className="table-name">{table.name}</code>
            </div>

            <div className="table-columns-wrapper">
              <table className="schema-columns-table">
                <thead>
                  <tr>
                    <th>Column</th>
                    <th>Type</th>
                    <th>Key</th>
                  </tr>
                </thead>
                <tbody>
                  {table.columns.map((col, cIdx) => (
                    <tr key={cIdx}>
                      <td className="col-name-cell">
                        <code>{col.name}</code>
                      </td>
                      <td className="col-type-cell">
                        <span className="type-pill">{col.type}</span>
                      </td>
                      <td className="col-key-cell">
                        {col.primaryKey ? (
                          <span className="pk-badge" title="Primary Key">
                            <Key size={12} /> PK
                          </span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

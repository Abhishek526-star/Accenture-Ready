// src/components/java/JavaMethodTable.jsx
import React, { useState } from 'react';
import { Copy, Check, FunctionSquare, Sparkles } from 'lucide-react';

export default function JavaMethodTable({ methods = [] }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  if (!methods || methods.length === 0) return null;

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1800);
  };

  return (
    <div className="java-methods-section">
      <div className="methods-section-header">
        <FunctionSquare size={16} className="text-primary" />
        <h3 className="methods-title">Important Built-in Methods & APIs</h3>
        <span className="methods-count-tag">{methods.length} Assessment APIs</span>
      </div>

      <div className="methods-table-container">
        <table className="methods-table">
          <thead>
            <tr>
              <th>Method Name</th>
              <th>Signature</th>
              <th>Description</th>
              <th style={{ width: '60px', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method, idx) => (
              <tr key={idx}>
                <td className="method-name-cell">
                  <span className="method-name-tag">{method.name}</span>
                </td>
                <td className="method-sig-cell">
                  <code className="method-signature">{method.signature}</code>
                </td>
                <td className="method-desc-cell">
                  <span>{method.description}</span>
                </td>
                <td className="method-action-cell">
                  <button
                    type="button"
                    className="method-copy-btn"
                    onClick={() => handleCopy(method.signature || method.name, idx)}
                    title="Copy signature"
                  >
                    {copiedIdx === idx ? (
                      <Check size={13} className="text-success" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// src/components/ResetModal.jsx
import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ResetModal({ isOpen, onClose, onConfirm, questionTitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-icon-warning">
            <AlertTriangle size={20} />
          </div>
          <h3>Reset your code?</h3>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p>
            Your current code (JavaScript, HTML, and CSS) for <strong>{questionTitle}</strong> will be discarded and restored to the original starter files.
          </p>
          <p className="modal-subtext">This action cannot be undone.</p>
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Reset Code
          </button>
        </div>
      </div>
    </div>
  );
}

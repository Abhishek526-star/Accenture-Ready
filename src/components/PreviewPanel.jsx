// src/components/PreviewPanel.jsx
import React, { useState } from 'react';
import { Eye, RotateCw, Monitor, Tablet, Smartphone, ShieldCheck } from 'lucide-react';

export default function PreviewPanel({ srcDoc, onReload }) {
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'

  const getViewportWidth = () => {
    switch (viewportMode) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <div className="preview-panel">
      <div className="preview-header">
        <div className="preview-title-group">
          <Eye size={16} className="preview-icon" />
          <span className="preview-title">Live Preview</span>
          <span className="sandbox-badge" title="Isolated sandboxed environment">
            <ShieldCheck size={12} /> Sandboxed
          </span>
        </div>

        <div className="preview-controls">
          <div className="viewport-toggle-group">
            <button
              onClick={() => setViewportMode('desktop')}
              className={`viewport-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
              title="Desktop View (100%)"
              aria-label="Desktop View"
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={() => setViewportMode('tablet')}
              className={`viewport-btn ${viewportMode === 'tablet' ? 'active' : ''}`}
              title="Tablet View (768px)"
              aria-label="Tablet View"
            >
              <Tablet size={14} />
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`viewport-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
              title="Mobile View (375px)"
              aria-label="Mobile View"
            >
              <Smartphone size={14} />
            </button>
          </div>

          <button
            onClick={onReload}
            className="reload-btn"
            title="Reload Preview"
            aria-label="Reload Preview"
          >
            <RotateCw size={14} />
          </button>
        </div>
      </div>

      <div className="iframe-wrapper">
        <div
          className="iframe-viewport-container"
          style={{ width: getViewportWidth() }}
        >
          <iframe
            title="Candidate Assessment Sandbox"
            srcDoc={srcDoc}
            sandbox="allow-scripts"
            className="sandbox-iframe"
          />
        </div>
      </div>
    </div>
  );
}

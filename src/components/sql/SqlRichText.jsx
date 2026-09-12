// src/components/sql/SqlRichText.jsx
import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, CheckCircle2, ListOrdered } from 'lucide-react';

/**
 * Parses inline tokens: bold (**text**) and code (`text`)
 */
function formatInlineTokens(text) {
  if (!text) return null;
  const parts = [];
  const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let lastIndex = 0;
  let match;
  let keyIdx = 0;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={`code-${keyIdx++}`}
          style={{
            background: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontFamily: "'JetBrains Mono', Consolas, monospace",
            fontSize: '0.84em',
            fontWeight: 600,
            wordBreak: 'break-word'
          }}
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong
          key={`bold-${keyIdx++}`}
          style={{ color: '#f8fafc', fontWeight: 700 }}
        >
          {token.slice(2, -2)}
        </strong>
      );
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

/**
 * Formula Card for LaTeX style formulas like $$\text{Conversion Rate} = \left(\frac{\text{Cart Count}}{\text{View Count}}\right) \times 100$$
 */
function FormulaCard({ rawFormula }) {
  const clean = rawFormula.replace(/\$\$/g, '').trim();
  const fracMatch = clean.match(/\\frac\{([^}]+)\}\{([^}]+)\}/);
  const equalsParts = clean.split('=');
  const lhs = equalsParts[0]?.replace(/\\text\{([^}]+)\}/g, '$1').replace(/[\\{}()]/g, '').trim() || 'Formula';

  if (fracMatch) {
    const num = fracMatch[1].replace(/\\text\{([^}]+)\}/g, '$1').replace(/[\\{}()]/g, '').trim();
    const den = fracMatch[2].replace(/\\text\{([^}]+)\}/g, '$1').replace(/[\\{}()]/g, '').trim();
    const afterFrac = clean.slice(clean.indexOf(fracMatch[0]) + fracMatch[0].length)
      .replace(/\\times/g, '×')
      .replace(/\\right\)/g, '')
      .replace(/[\\]/g, '')
      .trim();

    return (
      <div style={{
        margin: '1.25rem 0',
        padding: '1.1rem 1.4rem',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
        border: '1px solid rgba(56, 189, 248, 0.35)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.45)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#38bdf8',
          fontSize: '0.72rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          marginBottom: '0.75rem'
        }}>
          <Sparkles size={13} />
          <span>Formula Definition</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          fontSize: '1.05rem',
          fontFamily: "'JetBrains Mono', Consolas, monospace",
          color: '#f8fafc',
          flexWrap: 'wrap',
          padding: '0.3rem 0'
        }}>
          <span style={{ fontWeight: 800, color: '#38bdf8' }}>{lhs}</span>
          <span style={{ color: '#94a3b8', fontSize: '1.2rem' }}>=</span>
          <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            verticalAlign: 'middle',
            padding: '0 4px'
          }}>
            <span style={{
              padding: '2px 8px',
              borderBottom: '2px solid #38bdf8',
              color: '#4ade80',
              fontWeight: 700,
              fontSize: '0.92rem'
            }}>
              {num}
            </span>
            <span style={{
              padding: '2px 8px',
              color: '#fb923c',
              fontWeight: 700,
              fontSize: '0.92rem'
            }}>
              {den}
            </span>
          </div>
          {afterFrac && (
            <span style={{ color: '#facc15', fontWeight: 800, fontSize: '1.05rem' }}>
              {afterFrac}
            </span>
          )}
        </div>
      </div>
    );
  }

  const readable = clean
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\times/g, '×')
    .replace(/[\\{}]/g, '');

  return (
    <div style={{
      margin: '1rem 0',
      padding: '0.9rem 1.25rem',
      background: 'rgba(15, 23, 42, 0.9)',
      border: '1px solid rgba(56, 189, 248, 0.3)',
      borderRadius: '10px',
      textAlign: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      color: '#38bdf8',
      fontWeight: 700
    }}>
      {readable}
    </div>
  );
}

/**
 * Code Block Card
 */
function CodeBlockCard({ code, language = 'sql' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      margin: '1rem 0',
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid #334155',
      background: '#0a0f1d'
    }}>
      <div style={{
        padding: '6px 12px',
        background: '#131e33',
        borderBottom: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.74rem', fontWeight: 700 }}>
          <Terminal size={12} className="text-sky-400" />
          <span>SCHEMA DEFINITION ({language.toUpperCase()})</span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            background: 'none',
            border: 'none',
            color: copied ? '#4ade80' : '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre style={{
        margin: 0,
        padding: '12px 16px',
        fontFamily: "'JetBrains Mono', Consolas, monospace",
        fontSize: '0.82rem',
        color: '#e2e8f0',
        lineHeight: 1.55,
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * Main SqlRichText Component
 */
export default function SqlRichText({ text, variant = 'default' }) {
  if (!text) return null;

  // Split text by code blocks ``` and math blocks $$
  // Extract blocks
  const blocks = [];
  let remaining = text;

  const blockRegex = /(```(\w+)?\n([\s\S]+?)```|\$\$[\s\S]+?\$\$)/g;
  let lastIdx = 0;
  let match;

  while ((match = blockRegex.exec(remaining)) !== null) {
    if (match.index > lastIdx) {
      blocks.push({
        type: 'text',
        content: remaining.substring(lastIdx, match.index)
      });
    }
    const fullMatch = match[0];
    if (fullMatch.startsWith('```')) {
      blocks.push({
        type: 'code',
        lang: match[2] || 'sql',
        content: match[3] || ''
      });
    } else if (fullMatch.startsWith('$$')) {
      blocks.push({
        type: 'formula',
        content: fullMatch
      });
    }
    lastIdx = blockRegex.lastIndex;
  }

  if (lastIdx < remaining.length) {
    blocks.push({
      type: 'text',
      content: remaining.substring(lastIdx)
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      {blocks.map((block, bIdx) => {
        if (block.type === 'code') {
          return <CodeBlockCard key={bIdx} code={block.content.trim()} language={block.lang} />;
        }

        if (block.type === 'formula') {
          return <FormulaCard key={bIdx} rawFormula={block.content} />;
        }

        // Text block: split into lines / items
        const rawLines = block.content.split('\n');
        const elements = [];
        let i = 0;

        while (i < rawLines.length) {
          const line = rawLines[i].trim();
          if (!line) {
            i++;
            continue;
          }

          // Check if line is a numbered step, e.g. "1. **Views CTE**: Groups ..."
          const stepMatch = line.match(/^(\d+)\.\s+(\*\*(.+?)\*\*:\s*)?(.*)$/);
          if (stepMatch) {
            const stepNum = stepMatch[1];
            const stepTitle = stepMatch[3];
            const stepBody = stepMatch[4];

            elements.push(
              <div
                key={`step-${bIdx}-${i}`}
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px 16px',
                  background: variant === 'explanation' ? 'rgba(15, 23, 42, 0.75)' : '#0f172a',
                  border: '1px solid rgba(51, 65, 85, 0.7)',
                  borderRadius: '10px',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #ea580c, #f97316)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(234, 88, 12, 0.35)'
                }}>
                  {stepNum}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  {stepTitle && (
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fb923c', letterSpacing: '0.2px' }}>
                      {stepTitle}
                    </div>
                  )}
                  <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                    {formatInlineTokens(stepBody)}
                  </div>
                </div>
              </div>
            );
            i++;
            continue;
          }

          // Check if line is a bullet item, e.g. "- For single-domain experts: ..."
          if (line.startsWith('- ') || line.startsWith('* ')) {
            const bulletText = line.substring(2).trim();
            elements.push(
              <div
                key={`bullet-${bIdx}-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '8px 12px',
                  background: 'rgba(15, 23, 42, 0.45)',
                  borderRadius: '8px',
                  border: '1px solid rgba(51, 65, 85, 0.4)'
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#38bdf8',
                  marginTop: '7px',
                  flexShrink: 0
                }} />
                <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, flex: 1 }}>
                  {formatInlineTokens(bulletText)}
                </div>
              </div>
            );
            i++;
            continue;
          }

          // Regular paragraph
          elements.push(
            <p
              key={`para-${bIdx}-${i}`}
              style={{
                margin: '0 0 0.4rem 0',
                fontSize: '0.92rem',
                color: '#cbd5e1',
                lineHeight: 1.7
              }}
            >
              {formatInlineTokens(line)}
            </p>
          );
          i++;
        }

        return <React.Fragment key={bIdx}>{elements}</React.Fragment>;
      })}
    </div>
  );
}

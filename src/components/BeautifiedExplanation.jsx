// src/components/BeautifiedExplanation.jsx
import React from 'react';
import {
  Lightbulb,
  CheckCircle2,
  Terminal,
  Layers,
  ArrowRight,
  Code2,
  Check,
  X
} from 'lucide-react';

/**
 * Parses raw text containing steps like:
 * "Step-by-step evaluation: 1. Initially: p = 8... 2. First condition:... 3. Second condition:... 4. Final calculation:... Output: 26"
 * or bulleted lines, separating them into distinct step items and a final output.
 */
function parseExplanation(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    return { title: '', steps: [], finalOutput: '', raw: '' };
  }

  const text = rawText.trim();

  // Extract Final Output if present at the end
  let mainBody = text;
  let finalOutput = '';

  const outputMatch = mainBody.match(/(?:Output|Result|Final\s+Answer|Output\s+is|Answer)\s*[:=]\s*([^\n\r]+)$/i);
  if (outputMatch) {
    finalOutput = outputMatch[1].trim();
    mainBody = mainBody.slice(0, outputMatch.index).trim();
  }

  // Check for intro title (e.g. "Step-by-step evaluation:" or "Execution Trace:")
  let title = '';
  const titleMatch = mainBody.match(/^([^:\n]+:)\s*(.*)/s);
  if (titleMatch && titleMatch[1].toLowerCase().includes('step') || titleMatch && titleMatch[1].toLowerCase().includes('trace') || titleMatch && titleMatch[1].toLowerCase().includes('evaluation')) {
    title = titleMatch[1].replace(/:$/, '').trim();
    mainBody = titleMatch[2].trim();
  }

  // Split by numbered steps: e.g. " 1. ", " 2. ", " 3. " or newlines with "1.", "2."
  // Look for pattern: (?:\s|^)(\d+)[\.\)]\s+
  const stepRegex = /(?:^|\s+)(\d+)[\.\)]\s+/g;
  const matches = [...mainBody.matchAll(stepRegex)];

  const steps = [];

  if (matches.length >= 2) {
    for (let i = 0; i < matches.length; i++) {
      const stepNum = matches[i][1];
      const startIndex = matches[i].index + matches[i][0].length;
      const endIndex = i + 1 < matches.length ? matches[i + 1].index : mainBody.length;
      const content = mainBody.slice(startIndex, endIndex).trim();
      if (content) {
        steps.push({ num: stepNum, content });
      }
    }
  } else {
    // Try splitting by bullet points "• " or "-"
    const bulletSplit = mainBody.split(/\n\s*[•\-]\s*/);
    if (bulletSplit.length >= 2) {
      bulletSplit.forEach((item, idx) => {
        const trimmed = item.trim();
        if (trimmed) {
          steps.push({ num: String(idx + 1), content: trimmed });
        }
      });
    } else {
      // Split by double newlines or sentences if reasonably long
      const paragraphs = mainBody.split(/\n\n+/);
      if (paragraphs.length > 1) {
        paragraphs.forEach((p, idx) => {
          const trimmed = p.trim();
          if (trimmed) {
            steps.push({ num: String(idx + 1), content: trimmed });
          }
        });
      } else {
        // Just one content block
        steps.push({ num: '1', content: mainBody });
      }
    }
  }

  return { title, steps, finalOutput, raw: text };
}

/**
 * Formats inline code, binary representations, or equations with syntax styling
 */
function formatStepText(text) {
  // Replace patterns like "8 in binary = 1000" or "(p & q)" or "q = 8" with highlighted spans
  // We can render text with highlighted segments
  return (
    <span className="step-text-rendered">
      {text}
    </span>
  );
}

export default function BeautifiedExplanation({
  explanation = '',
  optionExplanations = {},
  options = [],
  correctAnswer = '',
  userChoice = null
}) {
  const { title, steps, finalOutput } = parseExplanation(explanation);
  const hasMultipleOptions = options && options.length > 0;
  const hasPerOptionExpl = optionExplanations && Object.keys(optionExplanations).length > 0;

  return (
    <div className="beautified-explanation-box">
      {/* Header */}
      <div className="explanation-header-bar">
        <div className="explanation-header-title">
          <div className="explanation-icon-pill">
            <Lightbulb size={16} />
          </div>
          <span>Official Solution & Step-by-Step Logic</span>
        </div>
        {title && (
          <span className="explanation-eval-tag">
            <Code2 size={13} /> {title}
          </span>
        )}
      </div>

      {/* Structured Steps */}
      {steps.length > 0 && (
        <div className="steps-flow-container">
          {steps.map((step) => {
            // Check if step has a sub-heading like "Initially:" or "First condition:"
            const subHeadMatch = step.content.match(/^([^:\.\n]+:)\s*(.*)/s);
            const subHead = subHeadMatch ? subHeadMatch[1] : null;
            const rest = subHeadMatch ? subHeadMatch[2] : step.content;

            return (
              <div key={step.num} className="explanation-step-card">
                <div className="step-badge-col">
                  <span className="step-badge">Step {step.num}</span>
                </div>
                <div className="step-content-col">
                  {subHead && <span className="step-subheading">{subHead}</span>}
                  <p className="step-body-text">{formatStepText(rest)}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Prominent Final Output Callout */}
      {finalOutput && (
        <div className="final-output-card">
          <div className="output-badge-left">
            <Terminal size={18} />
            <span>Final Output</span>
          </div>
          <div className="output-val-right">
            <code>{finalOutput}</code>
          </div>
        </div>
      )}

      {/* Per-Option Explanations Breakdown (if available) */}
      {hasPerOptionExpl && hasMultipleOptions && (
        <div className="options-reasoning-section">
          <div className="options-reasoning-title">
            <Layers size={15} />
            <span>Option-by-Option Reasoning</span>
          </div>
          <div className="options-reasoning-grid">
            {options.map((opt) => {
              const isCorrect = opt.id === correctAnswer;
              const isSelected = opt.id === userChoice;
              const reason =
                optionExplanations[opt.id] ||
                (isCorrect ? 'Correct choice as per official answer key.' : 'Incorrect choice.');

              return (
                <div
                  key={opt.id}
                  className={`opt-reason-card ${isCorrect ? 'reason-correct' : 'reason-neutral'}`}
                >
                  <div className="opt-reason-header">
                    <div className="opt-letter-tag">
                      <span>{opt.id}</span>
                      <span className="opt-title-text">{opt.text}</span>
                    </div>
                    <div>
                      {isCorrect && (
                        <span className="opt-status-pill pill-correct">
                          <Check size={12} /> Correct
                        </span>
                      )}
                      {isSelected && !isCorrect && (
                        <span className="opt-status-pill pill-selected-wrong">
                          <X size={12} /> Selected
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="opt-reason-body">{reason}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// src/utils/sandbox.js
import { testSuites } from "../tests/index.js";

/**
 * Builds the HTML content for the sandboxed iframe.
 *
 * @param {Object} params
 * @param {Object} params.question - The question object
 * @param {string} params.candidateJS - The JavaScript written by candidate
 * @param {string} params.candidateHTML - Optional candidate HTML
 * @param {string} params.candidateCSS - Optional candidate CSS
 * @param {boolean} params.runTests - Whether to inject and execute automated tests
 * @returns {string} Fully self-contained HTML document string
 */
export function buildSandboxSrcDoc({
  question,
  candidateJS,
  candidateHTML,
  candidateCSS,
  runTests = false
}) {
  const tests = testSuites[question.id] || [];

  const htmlContent = candidateHTML !== undefined ? candidateHTML : question.html;
  const cssContent = candidateCSS !== undefined ? candidateCSS : question.css;
  const jsContent = candidateJS !== undefined ? candidateJS : question.starterJS;

  // Serialize tests safely for execution inside the iframe context
  const serializedTests = tests.map(t => {
    return `{
      id: ${JSON.stringify(t.id)},
      name: ${JSON.stringify(t.name)},
      run: (${t.testFn.toString()})
    }`;
  }).join(",\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Assessment Sandbox</title>
  <style>
    ${cssContent}
  </style>
</head>
<body>
  ${htmlContent}

  <script>
    (function() {
      // 1. Console logs capture
      const _capturedLogs = [];
      ['log', 'info', 'warn', 'error'].forEach(level => {
        const original = console[level];
        console[level] = function(...args) {
          try {
            _capturedLogs.push({
              level: level,
              message: args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ')
            });
          } catch(e) {}
          if (original) original.apply(console, args);
        };
      });

      // 2. Global runtime error handler
      window.addEventListener('error', function(event) {
        window.parent.postMessage({
          type: 'RUNTIME_ERROR',
          questionId: ${question.id},
          error: event.message || 'Script error',
          lineno: event.lineno,
          colno: event.colno
        }, '*');
      });

      window.addEventListener('unhandledrejection', function(event) {
        window.parent.postMessage({
          type: 'RUNTIME_ERROR',
          questionId: ${question.id},
          error: 'Unhandled Promise Rejection: ' + (event.reason ? event.reason.message || event.reason : 'Unknown')
        }, '*');
      });

      // 3. Candidate JavaScript Execution
      let candidateInitError = null;
      try {
        ${jsContent}
      } catch (err) {
        candidateInitError = err;
        window.parent.postMessage({
          type: 'RUNTIME_ERROR',
          questionId: ${question.id},
          error: (err.name || 'Error') + ': ' + (err.message || 'Execution error'),
          stack: err.stack
        }, '*');
      }

      // 4. Test Suite Execution (if requested)
      const shouldRunTests = ${Boolean(runTests)};
      if (shouldRunTests && !candidateInitError) {
        const tests = [
          ${serializedTests}
        ];

        function assert(condition, message, expected, received) {
          if (!condition) {
            const err = new Error(message || 'Assertion failed');
            err.expected = expected !== undefined ? String(expected) : undefined;
            err.received = received !== undefined ? String(received) : undefined;
            throw err;
          }
        }

        async function executeSuite() {
          // Allow DOM events and initial rendering to settle
          await new Promise(r => setTimeout(r, 60));

          const results = [];
          for (const t of tests) {
            try {
              await t.run({ document, window, assert });
              results.push({
                id: t.id,
                name: t.name,
                passed: true
              });
            } catch (err) {
              results.push({
                id: t.id,
                name: t.name,
                passed: false,
                message: err.message,
                expected: err.expected !== undefined ? err.expected : 'Valid condition',
                received: err.received !== undefined ? err.received : 'Assertion failed'
              });
            }
          }

          const passedCount = results.filter(r => r.passed).length;
          const allPassed = passedCount === results.length;

          window.parent.postMessage({
            type: 'TEST_RESULTS',
            questionId: ${question.id},
            results: results,
            passedCount: passedCount,
            totalCount: results.length,
            allPassed: allPassed,
            logs: _capturedLogs
          }, '*');
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', executeSuite);
        } else {
          executeSuite();
        }
      } else if (!shouldRunTests && !candidateInitError) {
        window.parent.postMessage({
          type: 'PREVIEW_READY',
          questionId: ${question.id},
          logs: _capturedLogs
        }, '*');
      }
    })();
  </script>
</body>
</html>`;
}

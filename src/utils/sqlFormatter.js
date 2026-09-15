// src/utils/sqlFormatter.js

/**
 * Formats a SQL query string into clean, readable multi-line SQL with proper indentation.
 * @param {string} sql - Raw SQL string
 * @returns {string} Formatted multi-line SQL string
 */
export function formatSqlQuery(sql) {
  if (!sql || typeof sql !== 'string') return '';

  let str = sql.trim();
  // Remove duplicate internal whitespace while preserving string literals
  // First, extract string literals to avoid corrupting text inside quotes
  const stringLiterals = [];
  str = str.replace(/'(?:''|[^'])*'|"(?:""|[^"])*"/g, (match) => {
    stringLiterals.push(match);
    return `___STR_LITERAL_${stringLiterals.length - 1}___`;
  });

  // Normalize single spaces
  str = str.replace(/\s+/g, ' ');

  // Insert line breaks before major SQL keywords
  const majorKeywords = [
    'SELECT',
    'FROM',
    'WHERE',
    'GROUP BY',
    'HAVING',
    'ORDER BY',
    'LIMIT',
    'UNION ALL',
    'UNION',
    'LEFT JOIN',
    'RIGHT JOIN',
    'INNER JOIN',
    'CROSS JOIN',
    'JOIN'
  ];

  // Replace major keywords with newline + keyword
  majorKeywords.forEach((kw) => {
    const regex = new RegExp(`\\b${kw}\\b`, 'gi');
    str = str.replace(regex, `\n${kw.toUpperCase()}`);
  });

  // Indent AND / OR under WHERE / HAVING
  str = str.replace(/\b(AND|OR)\b/gi, '\n  $1');

  // Format lines
  const lines = str
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const formattedLines = [];
  let inSelect = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const upper = line.toUpperCase();

    if (upper.startsWith('SELECT')) {
      inSelect = true;
      // If SELECT has multiple columns separated by comma, format with indentation
      const afterSelect = line.substring(6).trim();
      formattedLines.push('SELECT');
      if (afterSelect) {
        // Split commas that are outside parentheses
        const cols = splitTopLevelCommas(afterSelect);
        cols.forEach((c, cIdx) => {
          const isLast = cIdx === cols.length - 1;
          formattedLines.push(`  ${c.trim()}${isLast ? '' : ','}`);
        });
      }
    } else {
      if (
        upper.startsWith('FROM') ||
        upper.startsWith('WHERE') ||
        upper.startsWith('GROUP BY') ||
        upper.startsWith('HAVING') ||
        upper.startsWith('ORDER BY') ||
        upper.startsWith('LIMIT') ||
        upper.includes('JOIN')
      ) {
        inSelect = false;
      }

      if (upper.startsWith('AND ') || upper.startsWith('OR ')) {
        formattedLines.push(`  ${line}`);
      } else {
        formattedLines.push(line);
      }
    }
  }

  let result = formattedLines.join('\n');

  // Restore string literals
  result = result.replace(/___STR_LITERAL_(\d+)___/g, (_, idx) => {
    return stringLiterals[parseInt(idx, 10)];
  });

  // Ensure semicolon is attached cleanly at the end
  result = result.replace(/\s+;$/, ';');

  return result;
}

/**
 * Splits a comma-separated list of items only at the top level (outside parentheses)
 */
function splitTopLevelCommas(text) {
  const parts = [];
  let current = '';
  let parenDepth = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '(') {
      parenDepth++;
      current += char;
    } else if (char === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      current += char;
    } else if (char === ',' && parenDepth === 0) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    parts.push(current.trim());
  }
  return parts;
}

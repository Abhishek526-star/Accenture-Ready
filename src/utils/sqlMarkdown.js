// src/utils/sqlMarkdown.js

/**
 * Format inline markdown: bold, italic, code tags
 */
export function formatInlineMarkdown(text) {
  if (!text) return '';
  return text
    // Replace inline code: `code`
    .replace(/`([^`]+)`/g, '<code class="sql-token">$1</code>')
    // Replace bold: **text**
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="sql-strong">$1</strong>')
    // Replace italic: *text* (when not part of **)
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
}

/**
 * Parse a multiline explanation or text into formatted paragraphs
 */
export function formatExplanationHtml(text) {
  if (!text) return '';
  const paragraphs = text.split(/\n\s*\n/);
  return paragraphs
    .map(para => {
      const trimmed = para.trim();
      if (!trimmed) return '';
      // Replace single newlines within paragraph with <br/>
      const withLineBreaks = trimmed.split('\n').map(line => formatInlineMarkdown(line)).join('<br />');
      return `<p class="expl-para">${withLineBreaks}</p>`;
    })
    .filter(Boolean)
    .join('');
}

/**
 * Parses problem text for SQL questions into:
 * - descriptionBlocks: array of { type: 'paragraph', content } or { type: 'bullets', items }
 * - requirements: { title, items } or null
 */
export function parseProblemStatement(problemText) {
  if (!problemText) {
    return { descriptionBlocks: [], requirements: null };
  }

  // Look for headings like: ### Important Requirements: or ### Critical Requirement: or ### Ranking Rules:
  const headingRegex = /^###\s+(.+)$/m;
  const match = headingRegex.exec(problemText);

  let descText = problemText;
  let reqTitle = 'Important Requirements';
  let reqItems = [];

  if (match) {
    descText = problemText.slice(0, match.index).trim();
    reqTitle = match[1].replace(/:$/, '').trim();
    const reqBody = problemText.slice(match.index + match[0].length).trim();

    // Extract bullet points from the requirement body
    reqItems = reqBody
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('-'))
      .map(line => line.replace(/^-\s+/, '').trim());
  }

  // Parse description text into structured paragraph blocks and bullet lists
  const lines = descText.split('\n');
  const descriptionBlocks = [];
  let currentBullets = [];
  let currentParagraph = [];

  const flushPara = () => {
    if (currentParagraph.length > 0) {
      descriptionBlocks.push({
        type: 'paragraph',
        content: currentParagraph.join(' ')
      });
      currentParagraph = [];
    }
  };

  const flushBullets = () => {
    if (currentBullets.length > 0) {
      descriptionBlocks.push({
        type: 'bullets',
        items: [...currentBullets]
      });
      currentBullets = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushPara();
      flushBullets();
    } else if (trimmed.startsWith('-')) {
      flushPara();
      currentBullets.push(trimmed.replace(/^-\s+/, ''));
    } else {
      flushBullets();
      currentParagraph.push(trimmed);
    }
  }
  flushPara();
  flushBullets();

  const requirements = reqItems.length > 0
    ? { title: reqTitle, items: reqItems }
    : null;

  return { descriptionBlocks, requirements };
}

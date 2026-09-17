// src/utils/visitorSession.js
// Anonymous, ephemeral visitor session identifier for live viewer presence tracking

const VISITOR_STORAGE_KEY = 'accenture_visitor_id';

function generateUUID() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback RFC4122 compliant UUID v4 generator
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Retrieves or generates an anonymous, unique visitor ID for this browser session.
 * Stored strictly in sessionStorage:
 * - Refreshing the page preserves the visitor identity.
 * - Closing the browser/session removes it.
 * - No personal data, cookies, or persistent device fingerprints are collected.
 */
export function getAnonymousVisitorId() {
  try {
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return generateUUID();
    }
    let id = window.sessionStorage.getItem(VISITOR_STORAGE_KEY);
    if (!id || typeof id !== 'string' || id.length < 10) {
      id = generateUUID();
      window.sessionStorage.setItem(VISITOR_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return generateUUID();
  }
}

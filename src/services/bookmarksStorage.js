// src/services/bookmarksStorage.js
// Universal bookmark storage for Coding, SQL, Java, DSA, and Assessment questions

const BOOKMARKS_KEY = 'accenture_bookmarks_v1';

export const bookmarksStorage = {
  getBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARKS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to read bookmarks', e);
      return [];
    }
  },

  isBookmarked(id, type = 'coding') {
    const list = this.getBookmarks();
    return list.some(b => String(b.id) === String(id) && b.type === type);
  },

  addBookmark(item) {
    try {
      const list = this.getBookmarks();
      const existing = list.find(b => String(b.id) === String(item.id) && b.type === item.type);
      if (!existing) {
        const enriched = {
          id: item.id,
          type: item.type || 'coding',
          title: item.title || `Question #${item.id}`,
          category: item.category || 'General',
          difficulty: item.difficulty || 'Medium',
          route: item.route || '/practice',
          addedAt: new Date().toISOString()
        };
        list.unshift(enriched);
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
      }
      return true;
    } catch (e) {
      return false;
    }
  },

  removeBookmark(id, type = 'coding') {
    try {
      let list = this.getBookmarks();
      list = list.filter(b => !(String(b.id) === String(id) && b.type === type));
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  },

  toggleBookmark(item) {
    const isSaved = this.isBookmarked(item.id, item.type);
    if (isSaved) {
      this.removeBookmark(item.id, item.type);
      return false;
    } else {
      this.addBookmark(item);
      return true;
    }
  },

  clearAll() {
    localStorage.removeItem(BOOKMARKS_KEY);
  }
};

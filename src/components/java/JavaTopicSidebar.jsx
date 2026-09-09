// src/components/java/JavaTopicSidebar.jsx
import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  Circle,
  BookOpen,
  ChevronRight,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';

export default function JavaTopicSidebar({
  topics,
  activeTopicId,
  onSelectTopic,
  completedTopicIds,
  isOpen = true,
  onCloseMobile
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Group topics by category
  const categories = useMemo(() => {
    const map = new Map();
    topics.forEach((t) => {
      const cat = t.category || 'General';
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat).push(t);
    });
    return Array.from(map.entries());
  }, [topics]);

  // Filtered list based on search
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;
    const term = searchTerm.toLowerCase();

    return categories
      .map(([category, items]) => {
        const matching = items.filter(
          (t) =>
            t.title.toLowerCase().includes(term) ||
            t.category.toLowerCase().includes(term) ||
            (t.explanation && t.explanation.toLowerCase().includes(term))
        );
        return [category, matching];
      })
      .filter(([, items]) => items.length > 0);
  }, [categories, searchTerm]);

  const totalTopics = topics.length;
  const completedCount = completedTopicIds.length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <aside className={`java-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Sidebar Header & Progress */}
      <div className="java-sidebar-header">
        <div className="sidebar-title-row">
          <div className="sidebar-icon">
            <Code2 size={18} />
          </div>
          <div>
            <h2 className="sidebar-title">Java Prep Syllabus</h2>
            <span className="sidebar-subtitle">Assessment & Interview Focus</span>
          </div>
        </div>

        {/* Progress Card */}
        <div className="java-progress-card">
          <div className="progress-label-row">
            <span className="progress-text">Progress</span>
            <span className="progress-count">
              {completedCount} / {totalTopics} Completed
            </span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="progress-percentage">{progressPercent}% Ready</div>
        </div>

        {/* Search Bar */}
        <div className="java-search-box">
          <Search size={14} className="search-icon" />
          <input
            type="text"
            placeholder="Search topics, syntax, methods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="java-search-input"
          />
          {searchTerm && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchTerm('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Topics Accordion / List */}
      <div className="java-topics-scroll">
        {filteredCategories.length === 0 ? (
          <div className="no-topics-found">
            <p>No Java topics matching "{searchTerm}"</p>
            <button
              className="btn btn-outline btn-xs"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </button>
          </div>
        ) : (
          filteredCategories.map(([category, catTopics]) => (
            <div key={category} className="java-topic-category-group">
              <div className="category-group-header">
                <Layers size={13} />
                <span>{category}</span>
                <span className="category-count">{catTopics.length}</span>
              </div>

              <div className="category-topic-items">
                {catTopics.map((topic) => {
                  const isActive = topic.id === activeTopicId;
                  const isCompleted = completedTopicIds.includes(topic.id);

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      title={topic.title}
                      onClick={() => {
                        onSelectTopic(topic.id);
                        if (onCloseMobile) onCloseMobile();
                      }}
                      className={`topic-list-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                    >
                      <div className="item-status-icon">
                        {isCompleted ? (
                          <CheckCircle2 size={16} className="text-success" />
                        ) : (
                          <Circle size={15} className="text-muted" />
                        )}
                      </div>

                      <div className="item-info">
                        <span className="item-title">{topic.title}</span>
                        <div className="item-meta">
                          <span className={`difficulty-pill ${topic.difficulty?.toLowerCase().replace(/\s+/g, '-')}`}>
                            {topic.difficulty}
                          </span>
                          <span className="item-duration">{topic.duration}</span>
                        </div>
                      </div>

                      <ChevronRight size={14} className="item-chevron" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sidebar Footer with circular rounded bottom */}
      <div className="java-sidebar-footer">
        <div className="footer-status-pill">
          <span className="footer-dot" />
          <span>{totalTopics} Assessment Topics</span>
        </div>
        <span className="footer-badge">Accenture Ready</span>
      </div>
    </aside>
  );
}

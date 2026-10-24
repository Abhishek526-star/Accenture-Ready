// src/pages/ConnectPage.jsx
// Connect & Share Hub: Allows students to share materials (PDFs, links), submit queries, and provide feedback
// Dispatches directly via Gmail App Password (Nodemailer backend) or via Gmail Web

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  Mail,
  UploadCloud,
  FileText,
  Send,
  Copy,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Share2,
  X,
  Paperclip,
  Check
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import '../styles/connectPage.css';

const CATEGORIES = [
  'Pseudocode Assessment',
  'DSA Coding (Python / Java / C++)',
  'Interactive SQL Queries',
  'Cognitive (Math Bubble / Memory Maze / Path Finder)',
  'Cloud Computing & Cloud Security',
  'Networking & Network Security',
  'Interview Prep (Technical & HR)',
  'Previous Year Question (PYQ) Paper',
  'Resume & Profile Review',
  'General Feedback / Other'
];

function getApiBaseUrl() {
  if (typeof window === 'undefined') return '';
  if (import.meta.env?.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
  }
  return '';
}

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState('material'); // 'material' | 'query' | 'feedback'
  const [isSending, setIsSending] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [subject, setSubject] = useState('Sharing Study Material / PDF Notes');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [rating, setRating] = useState('5');
  const [isDragOver, setIsDragOver] = useState(false);

  // Fetch receiver email from backend configuration if available
  useEffect(() => {
    const apiBase = getApiBaseUrl();
    fetch(`${apiBase}/api/email-status`)
      .then((res) => (res.ok ? res.json() : {}))
      .then((data) => {
        if (data.receiverEmail) {
          setReceiverEmail(data.receiverEmail);
        }
      })
      .catch(() => {
        // Fallback default is used if fetch fails
      });
  }, []);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    if (tab === 'material') {
      setSubject('Sharing Study Material / PDF Notes');
    } else if (tab === 'query') {
      setSubject('Doubt on Question / Preparation Strategy');
    } else {
      setSubject('Feedback on Accenture Ready Platform');
    }
  };

  // Handle File Select
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    if (!file) return;
    const maxSizeBytes = 20 * 1024 * 1024; // 20 MB
    if (file.size > maxSizeBytes) {
      toast.error('File size exceeds 20MB limit. Consider sharing a Google Drive link.');
      return;
    }
    setSelectedFile(file);
    toast.success(`Attached: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    validateAndSetFile(file);
  };

  // Build live preview body text
  const constructBodyText = () => {
    let body = `Hello Accenture Ready Team,\n\n`;

    if (activeTab === 'material') {
      body += `I would like to share study material with the community:\n`;
      body += `• Contributor: ${name.trim() || 'Student'}\n`;
      body += `• Email: ${email.trim() || 'Not specified'}\n`;
      body += `• Category: ${category}\n`;
      if (link.trim()) body += `• Resource Link: ${link.trim()}\n`;
      if (selectedFile) body += `• Attached File: 📎 ${selectedFile.name}\n`;
      body += `\nDescription / Notes:\n${message.trim() || 'No additional notes provided.'}\n`;
    } else if (activeTab === 'query') {
      body += `I have a doubt / query regarding Accenture preparation:\n`;
      body += `• Student Name: ${name.trim() || 'Student'}\n`;
      body += `• Student Email: ${email.trim() || 'Not specified'}\n`;
      body += `• Topic / Round: ${category}\n`;
      if (link.trim()) body += `• Related Reference Link: ${link.trim()}\n`;
      if (selectedFile) body += `• Attached Screenshot / File: 📎 ${selectedFile.name}\n`;
      body += `\nQuery Details:\n${message.trim() || 'Please describe your doubt in detail.'}\n`;
    } else {
      body += `Here is my feedback for Accenture Ready:\n`;
      body += `• Student Name: ${name.trim() || 'Student'}\n`;
      body += `• Platform Rating: ${rating} / 5 Stars\n`;
      body += `• Focus Area: ${category}\n`;
      body += `\nFeedback & Suggestions:\n${message.trim() || 'No comments entered.'}\n`;
    }

    body += `\n---\nSent via Accenture Ready Portal`;
    return body;
  };

  // Submit via Backend Gmail App Password
  const handleSubmitBackend = async (e) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid student email address so we can reply back to you.');
      return;
    }

    if (!message.trim() && !selectedFile && !link.trim()) {
      toast.error('Please provide a message, a link, or attach a file.');
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      formData.append('type', activeTab);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('category', category);
      formData.append('subject', subject);
      formData.append('message', activeTab === 'feedback' ? `[Rating: ${rating}/5]\n\n${message}` : message);
      if (link) formData.append('link', link);
      if (selectedFile) formData.append('file', selectedFile);

      const apiBase = getApiBaseUrl();
      const res = await fetch(`${apiBase}/api/send-email`, {
        method: 'POST',
        body: formData,
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        const textError = await res.text().catch(() => '');
        throw new Error(textError || `Server returned HTTP ${res.status}`);
      }

      if (res.ok && data.success) {
        toast.success('Delivered! Your message was sent', { duration: 5000 });
        // Reset form
        setMessage('');
        setSelectedFile(null);
        setLink('');
      } else {
        throw new Error(data.error || 'Server failed to send email. Check your Gmail App Password.');
      }
    } catch (err) {
      console.error('Email send failure:', err);
      toast.error(err.message || 'Could not send. Please check all fields carefully.');
    } finally {
      setIsSending(false);
    }
  };

  // Fallback: Open in Web Gmail Compose
  const handleOpenGmailWeb = () => {
    const to = receiverEmail || 'contact.accentureready@gmail.com';
    const su = encodeURIComponent(`[Accenture Ready] [${activeTab.toUpperCase()}] ${subject}`);
    const body = encodeURIComponent(constructBodyText());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${su}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    toast('Opening Gmail Compose window...', { icon: '🚀' });
  };

  // Copy Draft
  const handleCopyDraft = () => {
    const fullDraft = `To: ${receiverEmail || 'contact.accentureready@gmail.com'}\nSubject: [Accenture Ready] [${activeTab.toUpperCase()}] ${subject}\n\n${constructBodyText()}`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    toast.success('Draft copied to clipboard!');
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <div className="connect-page-wrapper">
      <SEO
        title="Student Connect & Material Share | Accenture Ready"
        description="Share PDF study materials, Google Drive links, ask queries, and send platform feedback directly through Gmail."
      />

      <div className="connect-container">
        {/* Header */}
        <div className="connect-header">
          <div className="connect-badge">
            <Sparkles size={14} />
            <span>COMMUNITY & GMAIL CONNECT</span>
          </div>
          <h1 className="connect-title">Student Connect & Material Share</h1>
          <p className="connect-subtitle">
            Share high-yield PDF notes, Google Drive links, ask recruitment queries, or send feedback directly to our team via Gmail App Password.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="connect-tabs">
          <button
            type="button"
            className={`connect-tab-btn ${activeTab === 'material' ? 'active' : ''}`}
            onClick={() => handleTabSelect('material')}
          >
            <Share2 size={16} />
            <span>Share Study Material (PDF / Links)</span>
          </button>
          <button
            type="button"
            className={`connect-tab-btn ${activeTab === 'query' ? 'active' : ''}`}
            onClick={() => handleTabSelect('query')}
          >
            <HelpCircle size={16} />
            <span>Ask Doubts & Queries</span>
          </button>
          <button
            type="button"
            className={`connect-tab-btn ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => handleTabSelect('feedback')}
          >
            <MessageSquare size={16} />
            <span>Feedback & Suggestions</span>
          </button>
        </div>

        {/* Main Form Container */}
        <div className="connect-form-container">
          <div className="connect-card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {activeTab === 'material' && <FileText className="text-sky-400" size={20} />}
              {activeTab === 'query' && <HelpCircle className="text-amber-400" size={20} />}
              {activeTab === 'feedback' && <MessageSquare className="text-emerald-400" size={20} />}
              <span>
                {activeTab === 'material' && 'Submit Study Material'}
                {activeTab === 'query' && 'Ask Your Doubt'}
                {activeTab === 'feedback' && 'Share Platform Feedback'}
              </span>
            </h2>

            <form onSubmit={handleSubmitBackend}>
              {/* Student Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Abhishek Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Email (for replies) *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Category & Subject */}
              <div className="form-group">
                <label className="form-label">Topic / Round Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Subject / Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Short descriptive title"
                />
              </div>

              {/* Feedback Specific: Rating */}
              {activeTab === 'feedback' && (
                <div className="form-group">
                  <label className="form-label">Experience Rating (1 to 5 Stars)</label>
                  <select
                    className="form-select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="5">⭐⭐⭐⭐⭐ Excellent (5/5)</option>
                    <option value="4">⭐⭐⭐⭐ Very Good (4/5)</option>
                    <option value="3">⭐⭐⭐ Good (3/5)</option>
                    <option value="2">⭐⭐ Needs Improvement (2/5)</option>
                    <option value="1">⭐ Poor (1/5)</option>
                  </select>
                </div>
              )}

              {/* Material or Query Specific: External Link */}
              {activeTab !== 'feedback' && (
                <div className="form-group">
                  <label className="form-label">
                    External Link (Google Drive / GitHub / YouTube)
                  </label>
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://drive.google.com/..."
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              )}

              {/* File Upload Zone (Material and Query) */}
              {activeTab !== 'feedback' && (
                <div className="form-group">
                  <label className="form-label">
                    Attach PDF / Document / Screenshot (Max 20MB)
                  </label>
                  <div
                    className={`file-upload-zone ${isDragOver ? 'dragover' : ''}`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      className="file-upload-input"
                      accept=".pdf,.png,.jpg,.jpeg,.docx,.txt"
                      onChange={handleFileChange}
                    />
                    <UploadCloud size={28} className="text-sky-400" style={{ margin: '0 auto 0.5rem' }} />
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 600 }}>
                      Click to choose or drag & drop a PDF
                    </p>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', color: '#64748b' }}>
                      Supports PDF, PNG, JPG, DOCX, TXT (up to 20MB)
                    </p>
                  </div>

                  {selectedFile && (
                    <div className="selected-file-pill">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                        <Paperclip size={16} className="text-sky-400" />
                        <span style={{ fontSize: '0.85rem', color: '#f8fafc', fontWeight: 600, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {selectedFile.name}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                          ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                        title="Remove file"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Message / Description */}
              <div className="form-group">
                <label className="form-label">
                  {activeTab === 'material' && 'Material Description & Notes *'}
                  {activeTab === 'query' && 'Doubt Details / Code snippet *'}
                  {activeTab === 'feedback' && 'Feedback & Suggestions *'}
                </label>
                <textarea
                  className="form-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    activeTab === 'material'
                      ? 'Describe what topics this PDF/link covers, key formulas, or tips...'
                      : activeTab === 'query'
                      ? 'Explain which question number, test round, or algorithm you need help with...'
                      : 'What features would make Accenture Ready even better for you?'
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="actions-group">
                <button
                  type="submit"
                  className="btn-primary-send"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <div className="send-spinner" />
                      <span>Sending via Gmail App Password...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Directly via App Password</span>
                    </>
                  )}
                </button>

                <div className="btn-secondary-group">
                  <button
                    type="button"
                    className="btn-secondary-gmail"
                    onClick={handleOpenGmailWeb}
                    title="Open draft in your web Gmail"
                  >
                    <Mail size={16} className="text-red-400" />
                    <span>Open in Gmail Web</span>
                  </button>

                  <button
                    type="button"
                    className="btn-secondary-gmail"
                    onClick={handleCopyDraft}
                    title="Copy formatted email draft"
                  >
                    {copiedDraft ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    <span>{copiedDraft ? 'Copied!' : 'Copy Draft'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

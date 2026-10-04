// src/pages/NotesPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Folder,
  FileText,
  Search,
  Download,
  ExternalLink,
  Eye,
  X,
  Upload,
  Cpu,
  Network,
  Cloud,
  Database,
  Code,
  Sparkles,
  BookOpen,
  Info,
  Maximize2,
  Minimize2,
  CheckCircle,
  Clock,
  ShieldCheck,
  ShieldAlert,
  Wifi,
  Boxes,
  FileSpreadsheet
} from 'lucide-react';
import { notesFolders } from '../data/notesConfig.js';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function NotesPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const folderParam = searchParams.get('folder');

  const [activeFolderId, setActiveFolderId] = useState(folderParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isViewerMaximized, setIsViewerMaximized] = useState(false);
  const [uploadedLocalPdfs, setUploadedLocalPdfs] = useState([]);
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'guide'

  // Update activeFolderId if query param changes
  useEffect(() => {
    if (folderParam) {
      setActiveFolderId(folderParam);
    }
  }, [folderParam]);

  const handleSelectFolder = (id) => {
    setActiveFolderId(id);
    if (id === 'all') {
      searchParams.delete('folder');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ folder: id });
    }
  };

  // Icon mapping
  const getFolderIcon = (iconName, size = 18, color) => {
    const props = { size, color: color || 'currentColor' };
    switch (iconName) {
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Wifi':
        return <Wifi {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet {...props} />;
      default:
        return <Folder {...props} />;
    }
  };

  // Handle local PDF upload for instant preview
  const handleLocalFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const fileUrl = URL.createObjectURL(file);
      const newPdf = {
        id: `local-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        fileName: file.name,
        filePath: fileUrl,
        description: 'Uploaded from your computer for instant preview.',
        category: activeFolderId !== 'all' ? notesFolders.find(f => f.id === activeFolderId)?.name || 'Custom' : 'Quick Preview',
        tags: ['Local PDF', 'Instant Preview'],
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        isUploaded: true,
        isBlob: true
      };
      setUploadedLocalPdfs(prev => [newPdf, ...prev]);
      setSelectedPdf(newPdf);
    }
  };

  // Compile list of folders and PDFs based on filter
  const currentFolders = activeFolderId === 'all'
    ? notesFolders
    : notesFolders.filter(f => f.id === activeFolderId);

  // Flatten PDFs for searching
  const allFolderItems = notesFolders.flatMap(f => f.items.map(item => ({ ...item, folderId: f.id, folderColor: f.color })));
  const allPdfs = [...uploadedLocalPdfs, ...allFolderItems];

  const filteredPdfs = (activeFolderId === 'all' ? allPdfs : allPdfs.filter(p => p.folderId === activeFolderId || p.category === notesFolders.find(f => f.id === activeFolderId)?.name))
    .filter(pdf => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        pdf.title.toLowerCase().includes(q) ||
        pdf.description.toLowerCase().includes(q) ||
        pdf.tags.some(t => t.toLowerCase().includes(q))
      );
    });

  const totalPdfsCount = allFolderItems.length;

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1.5rem 1rem 4rem' }}>
      <SEO 
        title={seoConfig?.notes?.title || "Accenture Technical Revision Notes & PDF Study Guides"}
        description={seoConfig?.notes?.description || "Download and view high-yield revision notes and study guide PDFs for Computer Networks, Cloud, Security, DevOps, MS Office, and OOPs."}
        path="/notes"
      />

      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-40px',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '9999px', padding: '4px 12px', fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              <span>Technical Revision Hub</span>
            </div>
            <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
              Study Notes & PDF Knowledge Library
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0, maxWidth: '640px', lineHeight: 1.6 }}>
              Curated technical PDF notes covering <strong>Computer Network</strong>, <strong>Cloud & Security</strong>, <strong>DevOps</strong>, <strong>MS Office</strong>, and <strong>OOPs</strong>. View directly inside the built-in reader or download for offline revision.
            </p>
          </div>
        </div>

        {/* Quick Folder Metric Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '1.75rem' }}>
          {notesFolders.map(folder => (
            <button
              key={folder.id}
              onClick={() => handleSelectFolder(folder.id)}
              style={{
                background: activeFolderId === folder.id ? folder.badgeColor : 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${activeFolderId === folder.id ? folder.color : '#334155'}`,
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div style={{ color: folder.color, display: 'flex', alignItems: 'center' }}>
                {getFolderIcon(folder.icon, 16, folder.color)}
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>{folder.shortName}</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{folder.items.length} Files</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Controls: Folder Filter Tabs & Search */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {/* Folder Navigation Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <button
            onClick={() => handleSelectFolder('all')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeFolderId === 'all' ? '#38bdf8' : '#1e293b',
              color: activeFolderId === 'all' ? '#0f172a' : '#cbd5e1',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Folder size={15} />
            <span>All Folders ({totalPdfsCount})</span>
          </button>

          {notesFolders.map(folder => (
            <button
              key={folder.id}
              onClick={() => handleSelectFolder(folder.id)}
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeFolderId === folder.id ? `1px solid ${folder.color}` : '1px solid #334155',
                background: activeFolderId === folder.id ? folder.badgeColor : '#1e293b',
                color: activeFolderId === folder.id ? folder.color : '#94a3b8',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              {getFolderIcon(folder.icon, 14, activeFolderId === folder.id ? folder.color : '#94a3b8')}
              <span>{folder.name}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', minWidth: '260px' }}>
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes, subjects, topics..."
            style={{
              width: '100%',
              padding: '0.55rem 0.8rem 0.55rem 2.2rem',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#f8fafc',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer'
              }}
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Folder Header Banner if single folder selected */}
      {activeFolderId !== 'all' && (
        (() => {
          const folder = notesFolders.find(f => f.id === activeFolderId);
          if (!folder) return null;
          return (
            <div style={{
              background: folder.badgeColor,
              border: `1px solid ${folder.color}40`,
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: folder.color
                }}>
                  {getFolderIcon(folder.icon, 20, folder.color)}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.05rem', fontWeight: 700 }}>
                    {folder.name} Folder
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>
                    {folder.description}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: folder.color, fontWeight: 600, background: 'rgba(15, 23, 42, 0.4)', padding: '5px 12px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={13} />
                <span>{folder.items.length} {folder.items.length === 1 ? 'Study Guide' : 'Study Guides'}</span>
              </div>
            </div>
          );
        })()
      )}

      {/* PDF Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.25rem' }}>
        {filteredPdfs.map(pdf => (
          <div
            key={pdf.id}
            style={{
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div>
              {/* Card Top: Folder badge & Type */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: pdf.folderColor || '#38bdf8',
                  background: 'rgba(15, 23, 42, 0.8)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid #334155'
                }}>
                  <FileText size={13} />
                  <span>{pdf.category}</span>
                </div>

                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: pdf.isUploaded ? '#10b981' : '#f59e0b',
                  background: pdf.isUploaded ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: `1px solid ${pdf.isUploaded ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px'
                }}>
                  {pdf.isUploaded ? <CheckCircle size={11} /> : <Clock size={11} />}
                  {pdf.isUploaded ? 'Ready' : 'PDF Slot Ready'}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                {pdf.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                {pdf.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                {pdf.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.7rem',
                      color: '#cbd5e1',
                      background: '#1e293b',
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{
              borderTop: '1px solid #1e293b',
              paddingTop: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <FileText size={12} color="#64748b" />
                <span>PDF • {pdf.size}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <button
                  onClick={() => setSelectedPdf(pdf)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#1e293b',
                    color: '#f8fafc',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  title="Preview in Reader"
                >
                  <Eye size={13} />
                  <span>View</span>
                </button>

                <a
                  href={pdf.filePath}
                  download={pdf.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease'
                  }}
                  title="Download or Open PDF"
                >
                  <Download size={13} />
                  <span>Get PDF</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* In-App PDF Reader Modal */}
      {selectedPdf && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isViewerMaximized ? '0' : '1.5rem'
        }}>
          <div style={{
            width: isViewerMaximized ? '100vw' : '95%',
            maxWidth: isViewerMaximized ? '100vw' : '1100px',
            height: isViewerMaximized ? '100vh' : '90vh',
            background: '#0f172a',
            border: isViewerMaximized ? 'none' : '1px solid #334155',
            borderRadius: isViewerMaximized ? '0' : '14px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '0.85rem 1.25rem',
              background: '#1e293b',
              borderBottom: '1px solid #334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <FileText size={18} color="#38bdf8" />
                <div>
                  <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                    {selectedPdf.title}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {selectedPdf.category} • {selectedPdf.size}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {/* Download / Open external */}
                <a
                  href={selectedPdf.filePath}
                  download={selectedPdf.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#0284c7',
                    color: '#ffffff',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>

                {/* Open in new tab */}
                <a
                  href={selectedPdf.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#334155',
                    color: '#cbd5e1',
                    border: 'none',
                    padding: '0.45rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Open in new window"
                >
                  <ExternalLink size={15} />
                </a>

                {/* Maximize / Restore */}
                <button
                  onClick={() => setIsViewerMaximized(!isViewerMaximized)}
                  style={{
                    background: '#334155',
                    color: '#cbd5e1',
                    border: 'none',
                    padding: '0.45rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title={isViewerMaximized ? 'Restore size' : 'Maximize'}
                >
                  {isViewerMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>

                {/* Close */}
                <button
                  onClick={() => setSelectedPdf(null)}
                  style={{
                    background: '#e11d48',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.45rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Close viewer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer Frame */}
            <div style={{ flex: 1, background: '#020617', position: 'relative' }}>
              <object
                data={selectedPdf.filePath}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              >
                {/* Fallback if browser can't render embedded PDF or file not yet placed */}
                <div style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  color: '#94a3b8',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '16px', borderRadius: '50%', color: '#38bdf8', marginBottom: '1rem' }}>
                    <FileText size={36} />
                  </div>
                  <h4 style={{ color: '#f8fafc', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>
                    {selectedPdf.title}
                  </h4>
                  <p style={{ maxWidth: '480px', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Click below to open the complete PDF study guide directly in a new tab or download it.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href={selectedPdf.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#0284c7',
                        color: '#ffffff',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <ExternalLink size={15} />
                      <span>Open PDF in New Tab</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

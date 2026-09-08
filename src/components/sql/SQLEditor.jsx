// src/components/sql/SQLEditor.jsx
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

export default function SQLEditor({
  value,
  onChange,
  onRun,
  theme = 'dark',
  height = '100%',
  readOnly = false
}) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Define custom shortcut: Ctrl/Cmd + Enter to Run Query
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRun) {
        onRun();
      }
    });

    // Configure SQL format options if needed
    editor.focus();
  };

  return (
    <div className="sql-editor-container" style={{ width: '100%', height: '100%' }}>
      <Editor
        height={height}
        language="sql"
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        value={value}
        onChange={(newVal) => onChange(newVal || '')}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'Fira Code', 'Courier New', monospace",
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          readOnly: readOnly,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          suggestOnTriggerCharacters: true,
          padding: { top: 12, bottom: 12 }
        }}
      />
    </div>
  );
}

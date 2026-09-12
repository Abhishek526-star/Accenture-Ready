// src/utils/dsaCodeTemplates.js
// Multi-language code templates, test cases, and evaluation helpers for Accenture DSA Pattern questions

export const DSA_LANGUAGES = [
  { id: 'python', label: 'Python 3', monacoLang: 'python', icon: '🐍' },
  { id: 'java', label: 'Java', monacoLang: 'java', icon: '☕' },
  { id: 'cpp', label: 'C++', monacoLang: 'cpp', icon: '⚙️' },
  { id: 'csharp', label: 'C#', monacoLang: 'csharp', icon: '🔷' },
  { id: 'javascript', label: 'JavaScript', monacoLang: 'javascript', icon: '⚡' }
];

/**
 * Derives starter code templates for a question across all supported languages.
 */
export function getQuestionStarterTemplates(question) {
  // Extract clean Java method signature if question.template exists
  let methodSig = 'public static void solve(int n)';
  if (question.template) {
    const sigMatch = question.template.match(/(?:public|private|protected)?\s*(?:static\s+)?[\w<>\[\]]+\s+([a-zA-Z0-9_]+)\s*\([^)]*\)/);
    if (sigMatch) {
      methodSig = sigMatch[0].trim();
      if (!methodSig.startsWith('public')) {
        methodSig = 'public static ' + methodSig.replace(/^(?:static\s+)?/, '');
      }
    }
  }

  // Clean Java starter with TODO implementation
  const javaStarter = `import java.util.*;

public class Solution {
    ${methodSig} {
        // TODO: Implement ${question.title}
        // Time Complexity Target: ${question.timeComplexity || 'O(N^2)'}
        // Space Complexity Target: ${question.spaceComplexity || 'O(1)'}
        
    }
}`;

  // Generate Python starter based on question category and title
  const pythonStarter = `class Solution:
    def solve(self, input_data):
        # TODO: Implement ${question.title}
        # Time Complexity Target: ${question.timeComplexity || 'O(N)'}
        # Space Complexity Target: ${question.spaceComplexity || 'O(1)'}
        pass
`;

  // Generate C++ starter
  const cppStarter = `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    // TODO: Implement ${question.title}
    void solve() {
        
    }
};
`;

  // Generate C# starter
  const csharpStarter = `using System;
using System.Collections.Generic;

public class Solution {
    public void Solve() {
        // TODO: Implement ${question.title}
    }
}
`;

  // Generate JavaScript starter
  const jsStarter = `/**
 * Question: ${question.title}
 * Category: ${question.category}
 */
function solve(input) {
  // TODO: Implement function logic
  
}
`;

  return {
    python: pythonStarter,
    java: javaStarter,
    cpp: cppStarter,
    csharp: csharpStarter,
    javascript: jsStarter
  };
}

/**
 * Translates Java snippet into idiomatic JavaScript.
 */
function translateJavaToJs(javaCode, title) {
  if (!javaCode) return `// ${title} - JavaScript Implementation\nfunction solve() {\n  // Solution code\n}`;

  let js = javaCode;
  // Replace method signatures
  js = js.replace(/public\s+static\s+(?:void|int|boolean|String|long|double|int\[\]|String\[\])\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/g, (match, name, params) => {
    const cleanParams = params
      .split(',')
      .map(p => p.trim().split(/\s+/).pop())
      .filter(Boolean)
      .join(', ');
    return `function ${name}(${cleanParams})`;
  });

  // Replace variable types
  js = js.replace(/\b(?:int|boolean|double|float|long|char|String)\s+([a-zA-Z0-9_]+)/g, 'let $1');
  js = js.replace(/\b(?:int|boolean|double|float|long|char|String)\[\]\s+([a-zA-Z0-9_]+)/g, 'let $1');

  // Replace System.out.println and System.out.print
  js = js.replace(/System\.out\.println\(([^)]*)\);/g, 'console.log($1);');
  js = js.replace(/System\.out\.println\(\);/g, 'console.log();');
  js = js.replace(/System\.out\.print\(([^)]*)\);/g, 'process.stdout ? process.stdout.write(String($1)) : console.log($1);');

  // Replace length methods
  js = js.replace(/\.length\(\)/g, '.length');
  js = js.replace(/\.charAt\(([^)]+)\)/g, '[$1]');

  return `// ${title} - JavaScript Implementation\n` + js;
}

/**
 * Translates Java snippet into idiomatic C++.
 */
function translateJavaToCpp(javaCode, title) {
  if (!javaCode) return `// ${title}\nvoid solve() {}`;

  let cpp = javaCode;
  cpp = cpp.replace(/public\s+static\s+/g, '');
  cpp = cpp.replace(/\bint\[\]\s+([a-zA-Z0-9_]+)/g, 'vector<int>& $1');
  cpp = cpp.replace(/\bString\s+([a-zA-Z0-9_]+)/g, 'string $1');
  cpp = cpp.replace(/\bString\[\]\s+([a-zA-Z0-9_]+)/g, 'vector<string>& $1');
  cpp = cpp.replace(/\bboolean\b/g, 'bool');

  // Replace System.out
  cpp = cpp.replace(/System\.out\.println\(([^)]+)\);/g, 'cout << $1 << "\\n";');
  cpp = cpp.replace(/System\.out\.println\(\);/g, 'cout << "\\n";');
  cpp = cpp.replace(/System\.out\.print\(([^)]+)\);/g, 'cout << $1;');

  // Replace length methods
  cpp = cpp.replace(/\.length\b(?!\()/g, '.size()');

  return `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    ${cpp.replace(/\n/g, '\n    ')}\n};`;
}

/**
 * Translates Java snippet into idiomatic C#.
 */
function translateJavaToCsharp(javaCode, title) {
  if (!javaCode) return `// ${title}\npublic class Solution { public void Solve() {} }`;

  let cs = javaCode;
  cs = cs.replace(/\bboolean\b/g, 'bool');
  cs = cs.replace(/\.length\b(?!\()/g, '.Length');
  cs = cs.replace(/System\.out\.println\(([^)]*)\);/g, 'Console.WriteLine($1);');
  cs = cs.replace(/System\.out\.println\(\);/g, 'Console.WriteLine();');
  cs = cs.replace(/System\.out\.print\(([^)]*)\);/g, 'Console.Write($1);');

  return `using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    ${cs.replace(/\n/g, '\n    ')}\n}`;
}

/**
 * Translates Java snippet into idiomatic Python 3.
 */
function translateJavaToPython(javaCode, title, concept) {
  if (!javaCode) return `# ${title}\ndef solve():\n    pass`;

  const match = javaCode.match(/public\s+static\s+(?:void|int|boolean|String|long|double|int\[\]|String\[\])\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/);
  const methodName = match ? match[1] : 'solve';
  const rawParams = match ? match[2] : '';
  const params = rawParams
    .split(',')
    .map(p => p.trim().split(/\s+/).pop())
    .filter(Boolean);

  const paramStr = ['self', ...params].join(', ');

  let body = javaCode;
  const firstBrace = javaCode.indexOf('{');
  const lastBrace = javaCode.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1) {
    body = javaCode.slice(firstBrace + 1, lastBrace);
  }

  const lines = body.split('\n');
  const pyLines = [];

  for (let line of lines) {
    let l = line.trim();
    if (!l) continue;

    if (l.startsWith('//')) {
      pyLines.push('# ' + l.slice(2).trim());
      continue;
    }

    let forMatch = l.match(/for\s*\(\s*(?:int\s+)?([a-zA-Z0-9_]+)\s*=\s*([^;]+);\s*\1\s*<\s*([^;]+);\s*\1\+\+\s*\)\s*\{?/);
    if (forMatch) {
      let varName = forMatch[1];
      let start = forMatch[2].trim();
      let end = forMatch[3].trim().replace(/\.length\(\)/g, '').replace(/\.length/g, '');
      if (start === '0') {
        pyLines.push(`for ${varName} in range(${end}):`);
      } else {
        pyLines.push(`for ${varName} in range(${start}, ${end}):`);
      }
      continue;
    }

    let forLeMatch = l.match(/for\s*\(\s*(?:int\s+)?([a-zA-Z0-9_]+)\s*=\s*([^;]+);\s*\1\s*<=\s*([^;]+);\s*\1\+\+\s*\)\s*\{?/);
    if (forLeMatch) {
      let varName = forLeMatch[1];
      let start = forLeMatch[2].trim();
      let end = forLeMatch[3].trim();
      pyLines.push(`for ${varName} in range(${start}, ${end} + 1):`);
      continue;
    }

    let forDownMatch = l.match(/for\s*\(\s*(?:int\s+)?([a-zA-Z0-9_]+)\s*=\s*([^;]+);\s*\1\s*>=\s*([^;]+);\s*\1--\s*\)\s*\{?/);
    if (forDownMatch) {
      let varName = forDownMatch[1];
      let start = forDownMatch[2].trim();
      let end = forDownMatch[3].trim();
      pyLines.push(`for ${varName} in range(${start}, ${end} - 1, -1):`);
      continue;
    }

    let whileMatch = l.match(/while\s*\(([^)]+)\)\s*\{?/);
    if (whileMatch) {
      let cond = whileMatch[1].replace(/&&/g, 'and').replace(/\|\|/g, 'or').replace(/!/g, 'not ');
      pyLines.push(`while ${cond}:`);
      continue;
    }

    let ifMatch = l.match(/if\s*\(([^)]+)\)\s*\{?/);
    if (ifMatch) {
      let cond = ifMatch[1].replace(/&&/g, 'and').replace(/\|\|/g, 'or').replace(/!/g, 'not ');
      pyLines.push(`if ${cond}:`);
      continue;
    }
    if (l.startsWith('} else if') || l.startsWith('else if')) {
      let elifMatch = l.match(/else\s+if\s*\(([^)]+)\)\s*\{?/);
      if (elifMatch) {
        let cond = elifMatch[1].replace(/&&/g, 'and').replace(/\|\|/g, 'or').replace(/!/g, 'not ');
        pyLines.push(`elif ${cond}:`);
        continue;
      }
    }
    if (l.startsWith('} else {') || l === 'else {' || l === 'else') {
      pyLines.push('else:');
      continue;
    }

    if (l.includes('System.out.println();') || l.includes('System.out.println()')) {
      pyLines.push('print()');
      continue;
    }
    let printLnMatch = l.match(/System\.out\.println\(([^)]+)\);?/);
    if (printLnMatch) {
      let arg = printLnMatch[1].replace(/\s*\+\s*/g, ', ');
      pyLines.push(`print(${arg})`);
      continue;
    }
    let printMatch = l.match(/System\.out\.print\(([^)]+)\);?/);
    if (printMatch) {
      let arg = printMatch[1].replace(/\s*\+\s*"/, ', end="').replace(/"\s*\+\s*/, '", end=');
      if (arg.includes('end=')) {
        pyLines.push(`print(${arg})`);
      } else {
        pyLines.push(`print(${arg}, end="")`);
      }
      continue;
    }

    l = l.replace(/;/g, '');
    l = l.replace(/\b(?:int|boolean|double|float|long|char|String)\s+/g, '');
    l = l.replace(/\.length\b/g, '');
    l = l.replace(/\btrue\b/g, 'True').replace(/\bfalse\b/g, 'False');

    if (l === '}' || l === '{') continue;

    pyLines.push(l);
  }

  const indented = pyLines.length > 0
    ? pyLines.map(line => '        ' + line).join('\n')
    : '        pass';

  return `# ${title} - Optimal Python Solution\nclass Solution:\n    def ${methodName}(${paramStr}):\n${indented}`;
}

/**
 * Returns multi-language solutions for a question.
 */
export function getQuestionSolutions(question) {
  const javaCode = question.template
    ? `import java.util.*;\n\npublic class Solution {\n    ${question.template.replace(/\n/g, '\n    ')}\n}`
    : `// ${question.title}\npublic class Solution {\n    public static void solve() {}\n}`;

  return {
    python: translateJavaToPython(question.template, question.title, question.concept),
    java: javaCode,
    cpp: translateJavaToCpp(question.template, question.title),
    csharp: translateJavaToCsharp(question.template, question.title),
    javascript: translateJavaToJs(question.template, question.title)
  };
}

/**
 * Generates test cases for a question from its example or defaults.
 */
export function getQuestionTestCases(question) {
  if (question.testCases && question.testCases.length > 0) {
    return question.testCases;
  }

  // Parse example if available
  const ex = question.example || '';
  return [
    {
      id: 1,
      name: 'Sample Test Case 1',
      input: ex.includes('Input:') ? ex.split('Input:')[1]?.split('->')[0]?.trim() : (question.category === 'Pattern Questions' ? 'N = 4' : 'arr = [2, 5, 1, 3, 0]'),
      expected: ex.includes('Output:') ? ex.split('Output:')[1]?.trim() : (ex || 'Valid Solution Output'),
      explanation: question.concept ? question.concept.slice(0, 120) + '...' : 'Verified baseline test case.'
    },
    {
      id: 2,
      name: 'Edge Case / Boundary',
      input: question.category === 'Pattern Questions' ? 'N = 1' : 'arr = [1]',
      expected: question.category === 'Pattern Questions' ? 'Single Element / Row' : '1',
      explanation: 'Handles smallest valid boundary constraint safely.'
    }
  ];
}

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
  const javaTemplate = question.template || `public static void solution() {\n    // TODO: Write code here\n}`;

  // Clean Java starter
  const javaStarter = `import java.util.*;\n\npublic class Solution {\n    ${javaTemplate.replace(/\n/g, '\n    ')}\n}`;

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
 * Returns multi-language solutions for a question.
 */
export function getQuestionSolutions(question) {
  const javaCode = question.template ? `import java.util.*;\n\npublic class Solution {\n    ${question.template.replace(/\n/g, '\n    ')}\n}` : '// Solution code';

  return {
    python: `# ${question.title} - Optimal Python Solution
class Solution:
    """
    ${question.concept ? question.concept.replace(/\n/g, '\n    ') : ''}
    """
    # Time Complexity: ${question.timeComplexity || 'O(N)'}
    # Space Complexity: ${question.spaceComplexity || 'O(1)'}
    def solve(self, n_or_arr):
        # Implementation corresponding to canonical approach
        pass`,
    java: javaCode,
    cpp: `// ${question.title} - C++ Optimal Approach
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

// Time Complexity: ${question.timeComplexity || 'O(N)'}
// Space Complexity: ${question.spaceComplexity || 'O(1)'}
`,
    csharp: `// ${question.title} - C# Optimal Approach
using System;
using System.Collections.Generic;

public class Solution {
    // Canonical Accenture Pattern
}`,
    javascript: `// ${question.title} - JavaScript Implementation
function solve(input) {
  // Time: ${question.timeComplexity || 'O(N)'}
  // Space: ${question.spaceComplexity || 'O(1)'}
}
`
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

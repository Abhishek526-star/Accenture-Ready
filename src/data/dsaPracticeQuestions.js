// src/data/dsaPracticeQuestions.js
// 10 Authentic Accenture Exam DSA Practice Questions with 5 Test Cases each,
// Multi-Language Starter Code & Reference Solutions (Python, Java, C++, C#, JavaScript)

export const DSA_PRACTICE_QUESTIONS = [
  // =========================================================================
  // Q1. Absolute Difference
  // =========================================================================
  {
    id: 'dsa-p-01',
    qno: 1,
    title: 'Absolute Difference',
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Array Traversal / Absolute Difference',
    company: 'Accenture',
    pattern: 'Linear Scan',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `You are given a function:

\`int findCount(int arr[], int length, int num, int diff);\`

The function accepts an integer array \`arr\`, its \`length\`, and two integer variables \`num\` and \`diff\`.

Implement this function to find and return the number of elements of \`arr\` having an absolute difference less than or equal to \`diff\` with \`num\`.

If there is no element in \`arr\` whose absolute difference with \`num\` is less than or equal to \`diff\`, return \`-1\`.`,
    rules: [
      'For every element, compute difference = |arr[i] - num|.',
      'If difference <= diff, increment the count.',
      'If count == 0 at the end, return -1; otherwise, return count.',
      'Condition is difference <= diff (inclusive), not strictly less than.'
    ],
    coreLogic: `For every element in the array:
1. Calculate difference = |arr[i] - num| using the absolute value function.
2. If difference <= diff, increase count by 1.
3. At the end of the loop:
   - if count == 0, return -1
   - else, return count`,
    dryRun: [
      { element: 12, diffCalc: '|12 - 13| = 1', valid: 'Yes (1 <= 2)', runningCount: 1 },
      { element: 3,  diffCalc: '|3 - 13| = 10', valid: 'No (10 > 2)',  runningCount: 1 },
      { element: 14, diffCalc: '|14 - 13| = 1', valid: 'Yes (1 <= 2)', runningCount: 2 },
      { element: 56, diffCalc: '|56 - 13| = 43', valid: 'No (43 > 2)', runningCount: 2 },
      { element: 77, diffCalc: '|77 - 13| = 64', valid: 'No (64 > 2)', runningCount: 2 },
      { element: 13, diffCalc: '|13 - 13| = 0', valid: 'Yes (0 <= 2)', runningCount: 3 }
    ],
    constraints: [
      '1 <= length <= 10^5',
      '-10^4 <= arr[i], num <= 10^4',
      'diff >= 0'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [12, 3, 14, 56, 77, 13], num = 13, diff = 2',
        expectedOutput: '3',
        explanation: '12, 14 and 13 satisfy |arr[i] - 13| <= 2. Count is 3.'
      },
      {
        id: 'tc-2',
        name: 'No Element Satisfies',
        input: 'arr = [1, 2, 3], num = 10, diff = 2',
        expectedOutput: '-1',
        explanation: '|1-10|=9, |2-10|=8, |3-10|=7. No element qualifies, returns -1.'
      },
      {
        id: 'tc-3',
        name: 'Exact Boundary Check',
        input: 'arr = [8, 10, 12], num = 10, diff = 2',
        expectedOutput: '3',
        explanation: '|8-10|=2, |10-10|=0, |12-10|=2. All three qualify on <= 2.'
      },
      {
        id: 'tc-4',
        name: 'Single Element Match',
        input: 'arr = [50], num = 50, diff = 0',
        expectedOutput: '1',
        explanation: '|50 - 50| = 0 <= 0. Exactly 1 element qualifies.'
      },
      {
        id: 'tc-5',
        name: 'Negative Numbers',
        input: 'arr = [-5, -2, 3], num = -2, diff = 1',
        expectedOutput: '1',
        explanation: '|-2 - (-2)| = 0 <= 1. Only -2 satisfies condition.'
      }
    ],
    starterCode: {
      python: `def find_count(arr, length, num, diff):
    # TODO: Return count of elements where abs(arr[i] - num) <= diff
    # If no elements qualify, return -1
    pass

if __name__ == "__main__":
    print(find_count([12, 3, 14, 56, 77, 13], 6, 13, 2)) # Expected: 3
`,
      java: `public class Solution {
    public static int findCount(int[] arr, int length, int num, int diff) {
        // TODO: Return count of elements where Math.abs(arr[i] - num) <= diff
        // If no elements qualify, return -1
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <cmath>

int findCount(int arr[], int length, int num, int diff) {
    // TODO: Return count of elements where abs(arr[i] - num) <= diff
    // If count == 0 return -1
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int FindCount(int[] arr, int length, int num, int diff) {
        // TODO: Return count of elements where Math.Abs(arr[i] - num) <= diff
        return 0;
    }
}
`,
      javascript: `function findCount(arr, length, num, diff) {
  // TODO: Return count of elements where Math.abs(arr[i] - num) <= diff
  return 0;
}
`
    },
    solutions: {
      python: `def find_count(arr, length, num, diff):
    count = 0
    for x in arr[:length]:
        if abs(x - num) <= diff:
            count += 1
    return count if count > 0 else -1
`,
      java: `public class Solution {
    public static int findCount(int[] arr, int length, int num, int diff) {
        int count = 0;
        for (int i = 0; i < length; i++) {
            if (Math.abs(arr[i] - num) <= diff) {
                count++;
            }
        }
        return count == 0 ? -1 : count;
    }
}
`,
      cpp: `#include <iostream>
#include <cmath>

int findCount(int arr[], int length, int num, int diff) {
    int count = 0;
    for (int i = 0; i < length; i++) {
        if (std::abs(arr[i] - num) <= diff) {
            count++;
        }
    }
    return (count == 0) ? -1 : count;
}
`,
      csharp: `using System;

public class Solution {
    public static int FindCount(int[] arr, int length, int num, int diff) {
        int count = 0;
        for (int i = 0; i < length; i++) {
            if (Math.Abs(arr[i] - num) <= diff) {
                count++;
            }
        }
        return count == 0 ? -1 : count;
    }
}
`,
      javascript: `function findCount(arr, length, num, diff) {
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (Math.abs(arr[i] - num) <= diff) {
      count++;
    }
  }
  return count === 0 ? -1 : count;
}
`
    }
  },

  // =========================================================================
  // Q2. Anagram
  // =========================================================================
  {
    id: 'dsa-p-02',
    qno: 2,
    title: 'Anagram',
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'String Manipulation / Frequency Hashing',
    company: 'Accenture',
    pattern: 'Frequency Counting',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `You are given two strings \`s\` and \`t\`.
The length of both strings is between 1 and 1000.

Determine whether it is possible to create string \`t\` by rearranging the characters of string \`s\`.

Return:
\`True\` if possible, otherwise \`False\`.`,
    rules: [
      'First check if length(s) != length(t); if so, return False immediately.',
      'Count the frequency of every character in s and decrement for t.',
      'If all frequencies balance to 0, return True; else return False.'
    ],
    coreLogic: `Two strings are anagrams if and only if their character frequencies are identical.
1. Compare lengths: If s.length != t.length, return False.
2. Initialize frequency array of size 256 with zeros.
3. For each char c in s, freq[c]++.
4. For each char c in t, freq[c]--.
5. If any freq[i] != 0, return False. Otherwise return True.`,
    dryRun: [
      { char: 'l', freqInS: 1, freqInT: 1, balance: 0 },
      { char: 'i', freqInS: 1, freqInT: 1, balance: 0 },
      { char: 's', freqInS: 1, freqInT: 1, balance: 0 },
      { char: 't', freqInS: 1, freqInT: 1, balance: 0 },
      { char: 'e', freqInS: 1, freqInT: 1, balance: 0 },
      { char: 'n', freqInS: 1, freqInT: 1, balance: 0 }
    ],
    constraints: [
      '1 <= length of s, t <= 1000',
      'Strings contain ASCII lowercase characters'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 's = "listen", t = "silent"',
        expectedOutput: 'True',
        explanation: 'Both contain identical character counts: l:1, i:1, s:1, t:1, e:1, n:1.'
      },
      {
        id: 'tc-2',
        name: 'Completely Different',
        input: 's = "hello", t = "world"',
        expectedOutput: 'False',
        explanation: 'Characters do not match.'
      },
      {
        id: 'tc-3',
        name: 'Repeated Characters Match',
        input: 's = "aabb", t = "baba"',
        expectedOutput: 'True',
        explanation: 'Both strings have 2 \'a\'s and 2 \'b\'s.'
      },
      {
        id: 'tc-4',
        name: 'Different Lengths',
        input: 's = "abc", t = "abcd"',
        expectedOutput: 'False',
        explanation: 'Length 3 vs Length 4 cannot be anagrams.'
      },
      {
        id: 'tc-5',
        name: 'Permuted Letters',
        input: 's = "race", t = "care"',
        expectedOutput: 'True',
        explanation: 'Rearranging "race" produces "care".'
      }
    ],
    starterCode: {
      python: `def is_anagram(s: str, t: str) -> bool:
    # TODO: Return True if t can be formed by rearranging s, else False
    pass

if __name__ == "__main__":
    print(is_anagram("listen", "silent")) # Expected: True
`,
      java: `public class Solution {
    public static boolean isAnagram(String s, String t) {
        // TODO: Return true if t is an anagram of s, else false
        return false;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

bool isAnagram(std::string s, std::string t) {
    // TODO: Return true if t is anagram of s
    return false;
}
`,
      csharp: `using System;

public class Solution {
    public static bool IsAnagram(string s, string t) {
        return false;
    }
}
`,
      javascript: `function isAnagram(s, t) {
  // TODO: Return true if t is an anagram of s
  return false;
}
`
    },
    solutions: {
      python: `def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
    for ch in t:
        if ch not in freq or freq[ch] == 0:
            return False
        freq[ch] -= 1
    return True
`,
      java: `public class Solution {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] freq = new int[256];
        for (int i = 0; i < s.length(); i++) {
            freq[s.charAt(i)]++;
            freq[t.charAt(i)]--;
        }
        for (int f : freq) {
            if (f != 0) return false;
        }
        return true;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

bool isAnagram(std::string s, std::string t) {
    if (s.length() != t.length()) return false;
    int freq[256] = {0};
    for (char c : s) freq[(unsigned char)c]++;
    for (char c : t) freq[(unsigned char)c]--;
    for (int i = 0; i < 256; i++) {
        if (freq[i] != 0) return false;
    }
    return true;
}
`,
      csharp: `using System;

public class Solution {
    public static bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        int[] freq = new int[256];
        for (int i = 0; i < s.Length; i++) {
            freq[s[i]]++;
            freq[t[i]]--;
        }
        for (int i = 0; i < 256; i++) {
            if (freq[i] != 0) return false;
        }
        return true;
    }
}
`,
      javascript: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  for (const c of t) {
    if (!freq[c]) return false;
    freq[c]--;
  }
  return true;
}
`
    }
  },

  // =========================================================================
  // Q3. Autobiographical Number
  // =========================================================================
  {
    id: 'dsa-p-03',
    qno: 3,
    title: 'Autobiographical Number',
    difficulty: 'Easy',
    category: 'Strings / Mathematics',
    topic: 'Digit Frequency & Position Verification',
    company: 'Accenture',
    pattern: 'Frequency Counting + Validation',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `An Autobiographical Number is a number N such that:
- The 1st digit represents the count of 0s in N.
- The 2nd digit represents the count of 1s in N.
- The 3rd digit represents the count of 2s in N.
- And so on for all positions.

You are given a function:
\`int FindAutoCount(string n);\`

If \`n\` is autobiographical, return the count of distinct digits present in \`n\`. Otherwise, return \`0\`.
If the string is \`None\` or empty, return \`0\`.`,
    rules: [
      'Input string length <= 10, contains numeric characters.',
      'Step 1: Count frequency of each digit 0-9.',
      'Step 2: For each position i from 0 to length-1, verify n[i] == freq[i].',
      'If any position fails, return 0.',
      'If all pass, count distinct digits in n and return that count.'
    ],
    coreLogic: `1. Check if n is empty/null -> return 0.
2. Initialize frequency array freq[10] to 0.
3. For char c in n: freq[c - '0']++.
4. For i from 0 to len(n)-1:
   if (n[i] - '0') != freq[i]: return 0
5. Count distinct digits:
   Count how many freq[d] > 0 for d in 0..9.
6. Return distinct count.`,
    dryRun: [
      { pos: 0, digitVal: 1, expectedCountOf0: 1, actualFreqOf0: 1, match: 'Yes' },
      { pos: 1, digitVal: 2, expectedCountOf1: 2, actualFreqOf1: 2, match: 'Yes' },
      { pos: 2, digitVal: 1, expectedCountOf2: 1, actualFreqOf2: 1, match: 'Yes' },
      { pos: 3, digitVal: 0, expectedCountOf3: 0, actualFreqOf3: 0, match: 'Yes' }
    ],
    constraints: [
      'Length of string <= 10',
      'Input consists of numeric characters 0-9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'n = "1210"',
        expectedOutput: '3',
        explanation: 'Valid autobiographical number. Distinct digits: 0, 1, 2. Count = 3.'
      },
      {
        id: 'tc-2',
        name: 'Invalid Number',
        input: 'n = "2020"',
        expectedOutput: '0',
        explanation: 'Fails positional frequency requirements. Returns 0.'
      },
      {
        id: 'tc-3',
        name: 'Empty String',
        input: 'n = ""',
        expectedOutput: '0',
        explanation: 'Empty or null string returns 0.'
      },
      {
        id: 'tc-4',
        name: 'Single Digit Non-Match',
        input: 'n = "1"',
        expectedOutput: '0',
        explanation: 'Position 0 expects one 0, but string has no 0s.'
      },
      {
        id: 'tc-5',
        name: 'Valid Five Digit',
        input: 'n = "21200"',
        expectedOutput: '3',
        explanation: 'Two 0s, one 1, two 2s, zero 3s, zero 4s. Distinct: 0, 1, 2 -> 3.'
      }
    ],
    starterCode: {
      python: `def find_auto_count(n: str) -> int:
    # TODO: Return count of distinct digits if n is autobiographical, else 0
    pass

if __name__ == "__main__":
    print(find_auto_count("1210")) # Expected: 3
`,
      java: `public class Solution {
    public static int findAutoCount(String n) {
        // TODO: Return distinct digits if autobiographical, else 0
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int FindAutoCount(std::string n) {
    // TODO: Return distinct digits count if autobiographical, else 0
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int FindAutoCount(string n) {
        return 0;
    }
}
`,
      javascript: `function findAutoCount(n) {
  // TODO: Return distinct digits if autobiographical, else 0
  return 0;
}
`
    },
    solutions: {
      python: `def find_auto_count(n: str) -> int:
    if not n or n == "None":
        return 0
    freq = [0] * 10
    for c in n:
        if c.isdigit():
            freq[int(c)] += 1
    for i, c in enumerate(n):
        if int(c) != freq[i]:
            return 0
    distinct = sum(1 for f in freq if f > 0)
    return distinct
`,
      java: `public class Solution {
    public static int findAutoCount(String n) {
        if (n == null || n.isEmpty() || n.equals("None")) return 0;
        int[] freq = new int[10];
        for (char c : n.toCharArray()) {
            if (Character.isDigit(c)) freq[c - '0']++;
        }
        for (int i = 0; i < n.length(); i++) {
            if (n.charAt(i) - '0' != freq[i]) return 0;
        }
        int distinct = 0;
        for (int f : freq) {
            if (f > 0) distinct++;
        }
        return distinct;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int FindAutoCount(std::string n) {
    if (n.empty() || n == "None") return 0;
    int freq[10] = {0};
    for (char c : n) {
        if (isdigit(c)) freq[c - '0']++;
    }
    for (int i = 0; i < (int)n.length(); i++) {
        if ((n[i] - '0') != freq[i]) return 0;
    }
    int distinct = 0;
    for (int i = 0; i < 10; i++) {
        if (freq[i] > 0) distinct++;
    }
    return distinct;
}
`,
      csharp: `using System;

public class Solution {
    public static int FindAutoCount(string n) {
        if (string.IsNullOrEmpty(n) || n == "None") return 0;
        int[] freq = new int[10];
        foreach (char c in n) {
            if (char.IsDigit(c)) freq[c - '0']++;
        }
        for (int i = 0; i < n.Length; i++) {
            if (n[i] - '0' != freq[i]) return 0;
        }
        int distinct = 0;
        for (int i = 0; i < 10; i++) {
            if (freq[i] > 0) distinct++;
        }
        return distinct;
    }
}
`,
      javascript: `function findAutoCount(n) {
  if (!n || n === 'None') return 0;
  const freq = new Array(10).fill(0);
  for (const c of n) {
    const d = parseInt(c, 10);
    if (!isNaN(d)) freq[d]++;
  }
  for (let i = 0; i < n.length; i++) {
    if (parseInt(n[i], 10) !== freq[i]) return 0;
  }
  return freq.filter(f => f > 0).length;
}
`
    }
  },

  // =========================================================================
  // Q4. Binary Operations
  // =========================================================================
  {
    id: 'dsa-p-04',
    qno: 4,
    title: 'Binary Operations',
    difficulty: 'Easy',
    category: 'Bit Manipulation',
    topic: 'Binary Operations / Bitwise Operators',
    company: 'Accenture',
    pattern: 'Left-to-Right Expression Evaluation',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `The binary number system uses only 0 and 1.
You are required to implement:
\`int OperationsBinaryString(char* str);\`

The string contains binary digits separated by alphabets:
- \`A\` -> AND
- \`B\` -> OR
- \`C\` -> XOR

Calculate the result by scanning the string from left to right, one operation at a time.
No operator precedence is required.
If the string is NULL or empty, return \`-1\`.`,
    rules: [
      'The length of the string is odd.',
      'Initial result is str[0] - \'0\'.',
      'Traverse at step of 2: operator = str[i], next = str[i+1].',
      'A: result = result & next',
      'B: result = result | next',
      'C: result = result ^ next',
      'Return final integer result.'
    ],
    coreLogic: `1. If str is null or empty, return -1.
2. Set result = str[0] - '0'.
3. Loop i from 1 to str.length - 1 in steps of 2:
   op = str[i], next = str[i + 1] - '0'
   if op == 'A': result = result & next
   if op == 'B': result = result | next
   if op == 'C': result = result ^ next
4. Return result.`,
    dryRun: [
      { step: 'Start', op: 'str[0] = 1', result: 1 },
      { step: 1, op: '1 XOR 0', result: 1 },
      { step: 2, op: '1 XOR 1', result: 0 },
      { step: 3, op: '0 XOR 1', result: 1 },
      { step: 4, op: '1 AND 0', result: 0 },
      { step: 5, op: '0 OR 1',  result: 1 }
    ],
    constraints: [
      'Length of str is odd and >= 1',
      'Alphabets are strictly A, B, C'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'str = "1C0C1C1A0B1"',
        expectedOutput: '1',
        explanation: 'Evaluates left-to-right: 1^0^1^1&0|1 = 1.'
      },
      {
        id: 'tc-2',
        name: 'Authentic Exam Sample',
        input: 'str = "0C1A1B1C1C1B0A0"',
        expectedOutput: '0',
        explanation: 'Evaluates step-by-step to final bit 0.'
      },
      {
        id: 'tc-3',
        name: 'AND Operation',
        input: 'str = "1A0"',
        expectedOutput: '0',
        explanation: '1 & 0 = 0.'
      },
      {
        id: 'tc-4',
        name: 'OR Operation',
        input: 'str = "1B0"',
        expectedOutput: '1',
        explanation: '1 | 0 = 1.'
      },
      {
        id: 'tc-5',
        name: 'XOR Operation',
        input: 'str = "1C1"',
        expectedOutput: '0',
        explanation: '1 ^ 1 = 0.'
      }
    ],
    starterCode: {
      python: `def operations_binary_string(s: str) -> int:
    # TODO: Evaluate binary string left-to-right (A=AND, B=OR, C=XOR)
    # If empty or None return -1
    pass

if __name__ == "__main__":
    print(operations_binary_string("1C0C1C1A0B1")) # Expected: 1
`,
      java: `public class Solution {
    public static int operationsBinaryString(String str) {
        // TODO: A=AND, B=OR, C=XOR left-to-right
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int OperationsBinaryString(std::string str) {
    // TODO: Evaluate left-to-right
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int OperationsBinaryString(string str) {
        return 0;
    }
}
`,
      javascript: `function operationsBinaryString(str) {
  // TODO: A=AND, B=OR, C=XOR
  return 0;
}
`
    },
    solutions: {
      python: `def operations_binary_string(s: str) -> int:
    if not s or s == "None":
        return -1
    res = int(s[0])
    for i in range(1, len(s), 2):
        op = s[i]
        nxt = int(s[i + 1])
        if op == 'A':
            res = res & nxt
        elif op == 'B':
            res = res | nxt
        elif op == 'C':
            res = res ^ nxt
    return res
`,
      java: `public class Solution {
    public static int operationsBinaryString(String str) {
        if (str == null || str.isEmpty() || str.equals("None")) return -1;
        int res = str.charAt(0) - '0';
        for (int i = 1; i < str.length(); i += 2) {
            char op = str.charAt(i);
            int nxt = str.charAt(i + 1) - '0';
            if (op == 'A') res = res & nxt;
            else if (op == 'B') res = res | nxt;
            else if (op == 'C') res = res ^ nxt;
        }
        return res;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int OperationsBinaryString(std::string str) {
    if (str.empty() || str == "None") return -1;
    int res = str[0] - '0';
    for (int i = 1; i < (int)str.length(); i += 2) {
        char op = str[i];
        int nxt = str[i + 1] - '0';
        if (op == 'A') res = res & nxt;
        else if (op == 'B') res = res | nxt;
        else if (op == 'C') res = res ^ nxt;
    }
    return res;
}
`,
      csharp: `using System;

public class Solution {
    public static int OperationsBinaryString(string str) {
        if (string.IsNullOrEmpty(str) || str == "None") return -1;
        int res = str[0] - '0';
        for (int i = 1; i < str.Length; i += 2) {
            char op = str[i];
            int nxt = str[i + 1] - '0';
            if (op == 'A') res = res & nxt;
            else if (op == 'B') res = res | nxt;
            else if (op == 'C') res = res ^ nxt;
        }
        return res;
    }
}
`,
      javascript: `function operationsBinaryString(str) {
  if (!str || str === 'None') return -1;
  let res = parseInt(str[0], 10);
  for (let i = 1; i < str.length; i += 2) {
    const op = str[i];
    const nxt = parseInt(str[i + 1], 10);
    if (op === 'A') res = res & nxt;
    else if (op === 'B') res = res | nxt;
    else if (op === 'C') res = res ^ nxt;
  }
  return res;
}
`
    }
  },

  // =========================================================================
  // Q5. Binary to Decimal
  // =========================================================================
  {
    id: 'dsa-p-05',
    qno: 5,
    title: 'Binary to Decimal',
    difficulty: 'Easy',
    category: 'Number System',
    topic: 'Binary Conversion',
    company: 'Accenture',
    pattern: 'Binary Accumulation',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Convert a binary number to its decimal equivalent.

Given a string representing a binary number, convert and return its integer decimal value.`,
    rules: [
      'Iterate through each character of the binary string.',
      'At each digit: result = result * 2 + (char - \'0\').',
      'Return the accumulated decimal integer.'
    ],
    coreLogic: `For every binary digit from left to right:
result = result * 2 + digit.
Each step left in binary represents multiplying the existing value by 2.`,
    dryRun: [
      { digit: '1', calculation: '0 * 2 + 1', result: 1 },
      { digit: '0', calculation: '1 * 2 + 0', result: 2 },
      { digit: '1', calculation: '2 * 2 + 1', result: 5 },
      { digit: '0', calculation: '5 * 2 + 0', result: 10 }
    ],
    constraints: [
      '1 <= length of binary <= 31',
      'Binary string contains only \'0\' and \'1\''
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'binary = "1010"',
        expectedOutput: '10',
        explanation: '1*8 + 0*4 + 1*2 + 0*1 = 10.'
      },
      {
        id: 'tc-2',
        name: 'All Ones',
        input: 'binary = "1111"',
        expectedOutput: '15',
        explanation: '8 + 4 + 2 + 1 = 15.'
      },
      {
        id: 'tc-3',
        name: 'Power of Two',
        input: 'binary = "1000"',
        expectedOutput: '8',
        explanation: '2^3 = 8.'
      },
      {
        id: 'tc-4',
        name: 'Zero',
        input: 'binary = "0"',
        expectedOutput: '0',
        explanation: 'Binary 0 is decimal 0.'
      },
      {
        id: 'tc-5',
        name: 'Single One',
        input: 'binary = "1"',
        expectedOutput: '1',
        explanation: 'Binary 1 is decimal 1.'
      }
    ],
    starterCode: {
      python: `def binary_to_decimal(binary: str) -> int:
    # TODO: Convert binary string to decimal
    pass

if __name__ == "__main__":
    print(binary_to_decimal("1010")) # Expected: 10
`,
      java: `public class Solution {
    public static int binaryToDecimal(String binary) {
        // TODO: Convert binary to decimal
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int binaryToDecimal(std::string binary) {
    // TODO: Convert binary string to decimal
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int BinaryToDecimal(string binary) {
        return 0;
    }
}
`,
      javascript: `function binaryToDecimal(binary) {
  // TODO: Convert binary string to decimal
  return 0;
}
`
    },
    solutions: {
      python: `def binary_to_decimal(binary: str) -> int:
    res = 0
    for c in binary:
        res = res * 2 + int(c)
    return res
`,
      java: `public class Solution {
    public static int binaryToDecimal(String binary) {
        int res = 0;
        for (int i = 0; i < binary.length(); i++) {
            res = res * 2 + (binary.charAt(i) - '0');
        }
        return res;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int binaryToDecimal(std::string binary) {
    int res = 0;
    for (char c : binary) {
        res = res * 2 + (c - '0');
    }
    return res;
}
`,
      csharp: `using System;

public class Solution {
    public static int BinaryToDecimal(string binary) {
        int res = 0;
        foreach (char c in binary) {
            res = res * 2 + (c - '0');
        }
        return res;
    }
}
`,
      javascript: `function binaryToDecimal(binary) {
  let res = 0;
  for (const c of binary) {
    res = res * 2 + parseInt(c, 10);
  }
  return res;
}
`
    }
  },

  // =========================================================================
  // Q6. Bulb Switch
  // =========================================================================
  {
    id: 'dsa-p-06',
    qno: 6,
    title: 'Bulb Switch',
    difficulty: 'Medium',
    category: 'Arrays / Greedy',
    topic: 'Array State Manipulation & Parity',
    company: 'Accenture',
    pattern: 'Greedy + Flip Parity',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `N light bulbs are connected by a wire.
Each bulb has a switch. Due to faulty wiring, pressing a switch also toggles the state of all bulbs to the right of the current bulb.

Given the initial state of all bulbs, find the minimum number of switches that must be pressed to turn all bulbs ON.

0 = OFF
1 = ON`,
    rules: [
      'Traverse bulbs from left to right.',
      'Maintain flips count of how many presses happened to the left.',
      'If flips % 2 == 1, current bulb is toggled: effective = 1 - bulb.',
      'If effective == 0 (OFF), must press switch: count++, flips++.'
    ],
    coreLogic: `Even flips leave bulb in original state; odd flips invert it.
Greedy choice: once we reach bulb i, all earlier switches have determined its state. If it is OFF, we MUST press switch i.`,
    dryRun: [
      { idx: 0, orig: 0, prevFlips: 0, effective: 0, press: 'Yes', count: 1 },
      { idx: 1, orig: 1, prevFlips: 1, effective: 0, press: 'Yes', count: 2 },
      { idx: 2, orig: 0, prevFlips: 2, effective: 0, press: 'Yes', count: 3 },
      { idx: 3, orig: 1, prevFlips: 3, effective: 0, press: 'Yes', count: 4 }
    ],
    constraints: [
      '1 <= bulbs.length <= 10^5',
      'bulbs[i] in {0, 1}'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'bulbs = [0, 1, 0, 1]',
        expectedOutput: '4',
        explanation: 'Pressing switches at index 0, 1, 2, 3 turns all bulbs ON in 4 presses.'
      },
      {
        id: 'tc-2',
        name: 'Second Exam Example',
        input: 'bulbs = [1, 0, 0, 0, 0]',
        expectedOutput: '1',
        explanation: 'Index 0 is 1. Index 1 is 0 -> 1 press turns remaining 0s to 1s.'
      },
      {
        id: 'tc-3',
        name: 'Already ON',
        input: 'bulbs = [1, 1, 1]',
        expectedOutput: '0',
        explanation: 'All bulbs are already ON, 0 presses required.'
      },
      {
        id: 'tc-4',
        name: 'One OFF Bulb',
        input: 'bulbs = [0]',
        expectedOutput: '1',
        explanation: 'Single bulb needs 1 press.'
      },
      {
        id: 'tc-5',
        name: 'All OFF',
        input: 'bulbs = [0, 0, 0]',
        expectedOutput: '1',
        explanation: 'Pressing switch 0 toggles all to 1 in 1 press.'
      }
    ],
    starterCode: {
      python: `def bulb_switch(bulbs: list) -> int:
    # TODO: Return minimum presses to turn all bulbs ON
    pass

if __name__ == "__main__":
    print(bulb_switch([0, 1, 0, 1])) # Expected: 4
`,
      java: `import java.util.List;

public class Solution {
    public static int bulbSwitch(int[] bulbs) {
        // TODO: Return minimum switch presses
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int bulbSwitch(std::vector<int> bulbs) {
    // TODO: Return minimum presses
    return 0;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int BulbSwitch(int[] bulbs) {
        return 0;
    }
}
`,
      javascript: `function bulbSwitch(bulbs) {
  // TODO: Return minimum switch presses
  return 0;
}
`
    },
    solutions: {
      python: `def bulb_switch(bulbs: list) -> int:
    flips = 0
    count = 0
    for b in bulbs:
        cur = b
        if flips % 2 == 1:
            cur = 1 - cur
        if cur == 0:
            count += 1
            flips += 1
    return count
`,
      java: `public class Solution {
    public static int bulbSwitch(int[] bulbs) {
        int flips = 0;
        int count = 0;
        for (int b : bulbs) {
            int cur = b;
            if (flips % 2 == 1) {
                cur = 1 - cur;
            }
            if (cur == 0) {
                count++;
                flips++;
            }
        }
        return count;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int bulbSwitch(std::vector<int> bulbs) {
    int flips = 0;
    int count = 0;
    for (int b : bulbs) {
        int cur = b;
        if (flips % 2 == 1) {
            cur = 1 - cur;
        }
        if (cur == 0) {
            count++;
            flips++;
        }
    }
    return count;
}
`,
      csharp: `using System;

public class Solution {
    public static int BulbSwitch(int[] bulbs) {
        int flips = 0;
        int count = 0;
        foreach (int b : bulbs) {
            int cur = b;
            if (flips % 2 == 1) {
                cur = 1 - cur;
            }
            if (cur == 0) {
                count++;
                flips++;
            }
        }
        return count;
    }
}
`,
      javascript: `function bulbSwitch(bulbs) {
  let flips = 0;
  let count = 0;
  for (const b of bulbs) {
    let cur = b;
    if (flips % 2 === 1) {
      cur = 1 - cur;
    }
    if (cur === 0) {
      count++;
      flips++;
    }
  }
  return count;
}
`
    }
  },

  // =========================================================================
  // Q7. Chocolate Distribution
  // =========================================================================
  {
    id: 'dsa-p-07',
    qno: 7,
    title: 'Chocolate Distribution',
    difficulty: 'Easy',
    category: 'Arrays / Sorting',
    topic: 'Sorting and Window Selection',
    company: 'Accenture',
    pattern: 'Sorting + Sliding Window',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `You are given an array of N integers where each value represents the number of chocolates in a packet.
There are m students.

The task is to distribute the packets such that:
1. Each student gets exactly one packet.
2. The difference between the packet with the maximum number of chocolates and the packet with the minimum number of chocolates is minimized.`,
    rules: [
      'Sort the array in ascending order.',
      'Check every contiguous subarray window of size m.',
      'Window difference = arr[i + m - 1] - arr[i].',
      'Return the minimum difference across all windows.'
    ],
    coreLogic: `After sorting, any group of m packets that are closest in quantity will appear as a contiguous block of length m. We slide a window of length m from 0 to N - m and minimize arr[i + m - 1] - arr[i].`,
    dryRun: [
      { window: '[2, 3, 4]', minMaxDiff: '4 - 2 = 2', isBest: 'Yes (Minimum = 2)' },
      { window: '[3, 4, 7]', minMaxDiff: '7 - 3 = 4', isBest: 'No' },
      { window: '[4, 7, 9]', minMaxDiff: '9 - 4 = 5', isBest: 'No' },
      { window: '[7, 9, 12]', minMaxDiff: '12 - 7 = 5', isBest: 'No' },
      { window: '[9, 12, 56]', minMaxDiff: '56 - 9 = 47', isBest: 'No' }
    ],
    constraints: [
      '1 <= m <= arr.length <= 10^5',
      '1 <= arr[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [7, 3, 2, 4, 9, 12, 56], m = 3',
        expectedOutput: '2',
        explanation: 'Packets 2, 3, 4 give minimum difference: 4 - 2 = 2.'
      },
      {
        id: 'tc-2',
        name: 'Exam Example 2',
        input: 'arr = [3, 4, 1, 9, 56, 7, 9, 12], m = 5',
        expectedOutput: '6',
        explanation: 'Packets 3, 4, 7, 9, 9 gives difference: 9 - 3 = 6.'
      },
      {
        id: 'tc-3',
        name: 'Large Packet List',
        input: 'arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50], m = 7',
        expectedOutput: '10',
        explanation: 'Optimal window difference is 10.'
      },
      {
        id: 'tc-4',
        name: 'All Equal Packets',
        input: 'arr = [5, 5, 5, 5], m = 2',
        expectedOutput: '0',
        explanation: 'All packets equal: 5 - 5 = 0.'
      },
      {
        id: 'tc-5',
        name: 'All Packets Required',
        input: 'arr = [1, 4, 7], m = 3',
        expectedOutput: '6',
        explanation: 'Must take all 3 packets: 7 - 1 = 6.'
      }
    ],
    starterCode: {
      python: `def chocolate_distribution(arr: list, m: int) -> int:
    # TODO: Return minimum difference between max and min packet for m students
    pass

if __name__ == "__main__":
    print(chocolate_distribution([7, 3, 2, 4, 9, 12, 56], 3)) # Expected: 2
`,
      java: `import java.util.Arrays;

public class Solution {
    public static int chocolateDistribution(int[] arr, int m) {
        // TODO: Return minimum difference
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

int chocolateDistribution(std::vector<int> arr, int m) {
    // TODO: Return minimum difference
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int ChocolateDistribution(int[] arr, int m) {
        return 0;
    }
}
`,
      javascript: `function chocolateDistribution(arr, m) {
  // TODO: Return minimum difference
  return 0;
}
`
    },
    solutions: {
      python: `def chocolate_distribution(arr: list, m: int) -> int:
    if m <= 0 or m > len(arr):
        return -1
    arr.sort()
    min_diff = float('inf')
    for i in range(len(arr) - m + 1):
        diff = arr[i + m - 1] - arr[i]
        if diff < min_diff:
            min_diff = diff
    return min_diff
`,
      java: `import java.util.Arrays;

public class Solution {
    public static int chocolateDistribution(int[] arr, int m) {
        if (m <= 0 || m > arr.length) return -1;
        Arrays.sort(arr);
        int minDiff = Integer.MAX_VALUE;
        for (int i = 0; i + m - 1 < arr.length; i++) {
            int diff = arr[i + m - 1] - arr[i];
            if (diff < minDiff) minDiff = diff;
        }
        return minDiff;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

int chocolateDistribution(std::vector<int> arr, int m) {
    if (m <= 0 || m > (int)arr.size()) return -1;
    std::sort(arr.begin(), arr.end());
    int minDiff = INT_MAX;
    for (int i = 0; i + m - 1 < (int)arr.size(); i++) {
        int diff = arr[i + m - 1] - arr[i];
        if (diff < minDiff) minDiff = diff;
    }
    return minDiff;
}
`,
      csharp: `using System;

public class Solution {
    public static int ChocolateDistribution(int[] arr, int m) {
        if (m <= 0 || m > arr.Length) return -1;
        Array.Sort(arr);
        int minDiff = int.MaxValue;
        for (int i = 0; i + m - 1 < arr.Length; i++) {
            int diff = arr[i + m - 1] - arr[i];
            if (diff < minDiff) minDiff = diff;
        }
        return minDiff;
    }
}
`,
      javascript: `function chocolateDistribution(arr, m) {
  if (m <= 0 || m > arr.length) return -1;
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i + m - 1 < arr.length; i++) {
    const diff = arr[i + m - 1] - arr[i];
    if (diff < minDiff) minDiff = diff;
  }
  return minDiff;
}
`
    }
  },

  // =========================================================================
  // Q8. Number of Carries
  // =========================================================================
  {
    id: 'dsa-p-08',
    qno: 8,
    title: 'Number of Carries',
    difficulty: 'Easy',
    category: 'Mathematical Problems',
    topic: 'Number Manipulation / Digit Operations',
    company: 'Accenture',
    pattern: 'Digit-by-Digit Processing',
    timeComplexity: 'O(D)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `A carry is a digit transferred to the left when the sum of digits exceeds 9 while adding two numbers from right to left, one digit at a time.

Implement:
\`int NumberOfCarries(int num1, int num2);\`

The function accepts two numbers and returns the total number of carries generated while adding their digits.
Assumption: \`num1, num2 >= 0\`.`,
    rules: [
      'Extract last digits using num1 % 10 and num2 % 10.',
      'Sum = digit1 + digit2 + carry.',
      'If sum > 9: carry = 1, count++; else: carry = 0.',
      'num1 /= 10, num2 /= 10 until both become 0.'
    ],
    coreLogic: `Process digits right to left.
sum = (num1 % 10) + (num2 % 10) + carry.
Always carry forward 1 if sum > 9.`,
    dryRun: [
      { d1: 1, d2: 9, carryIn: 0, sum: 10, carryOut: 1, count: 1 },
      { d1: 5, d2: 4, carryIn: 1, sum: 10, carryOut: 1, count: 2 },
      { d1: 4, d2: 3, carryIn: 1, sum: 8,  carryOut: 0, count: 2 }
    ],
    constraints: [
      '0 <= num1, num2 <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'num1 = 451, num2 = 349',
        expectedOutput: '2',
        explanation: 'Units 1+9=10 (1 carry), Tens 5+4+1=10 (1 carry), Hundreds 4+3+1=8 (no carry). Total = 2.'
      },
      {
        id: 'tc-2',
        name: 'No Carries',
        input: 'num1 = 23, num2 = 563',
        expectedOutput: '0',
        explanation: '3+3=6, 2+6=8, 0+5=5. No carries generated.'
      },
      {
        id: 'tc-3',
        name: 'Carry in Every Position',
        input: 'num1 = 999, num2 = 111',
        expectedOutput: '3',
        explanation: '9+1=10, 9+1+1=11, 9+1+1=11. Total 3 carries.'
      },
      {
        id: 'tc-4',
        name: 'Straightforward Addition',
        input: 'num1 = 123, num2 = 456',
        expectedOutput: '0',
        explanation: 'All sums < 10, 0 carries.'
      },
      {
        id: 'tc-5',
        name: 'Carry Propagation',
        input: 'num1 = 95, num2 = 17',
        expectedOutput: '2',
        explanation: '5+7=12 (carry 1), 9+1+1=11 (carry 1). Total = 2.'
      }
    ],
    starterCode: {
      python: `def number_of_carries(num1: int, num2: int) -> int:
    # TODO: Return total number of carries generated
    pass

if __name__ == "__main__":
    print(number_of_carries(451, 349)) # Expected: 2
`,
      java: `public class Solution {
    public static int numberOfCarries(int num1, int num2) {
        // TODO: Return total carries
        return 0;
    }
}
`,
      cpp: `#include <iostream>

int NumberOfCarries(int num1, int num2) {
    // TODO: Return total carries
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int NumberOfCarries(int num1, int num2) {
        return 0;
    }
}
`,
      javascript: `function numberOfCarries(num1, num2) {
  // TODO: Return total carries
  return 0;
}
`
    },
    solutions: {
      python: `def number_of_carries(num1: int, num2: int) -> int:
    carry = 0
    count = 0
    while num1 > 0 or num2 > 0:
        d1 = num1 % 10
        d2 = num2 % 10
        s = d1 + d2 + carry
        if s > 9:
            carry = 1
            count += 1
        else:
            carry = 0
        num1 //= 10
        num2 //= 10
    return count
`,
      java: `public class Solution {
    public static int numberOfCarries(int num1, int num2) {
        int carry = 0;
        int count = 0;
        while (num1 > 0 || num2 > 0) {
            int d1 = num1 % 10;
            int d2 = num2 % 10;
            int sum = d1 + d2 + carry;
            if (sum > 9) {
                carry = 1;
                count++;
            } else {
                carry = 0;
            }
            num1 /= 10;
            num2 /= 10;
        }
        return count;
    }
}
`,
      cpp: `#include <iostream>

int NumberOfCarries(int num1, int num2) {
    int carry = 0;
    int count = 0;
    while (num1 > 0 || num2 > 0) {
        int d1 = num1 % 10;
        int d2 = num2 % 10;
        int sum = d1 + d2 + carry;
        if (sum > 9) {
            carry = 1;
            count++;
        } else {
            carry = 0;
        }
        num1 /= 10;
        num2 /= 10;
    }
    return count;
}
`,
      csharp: `using System;

public class Solution {
    public static int NumberOfCarries(int num1, int num2) {
        int carry = 0;
        int count = 0;
        while (num1 > 0 || num2 > 0) {
            int d1 = num1 % 10;
            int d2 = num2 % 10;
            int sum = d1 + d2 + carry;
            if (sum > 9) {
                carry = 1;
                count++;
            } else {
                carry = 0;
            }
            num1 /= 10;
            num2 /= 10;
        }
        return count;
    }
}
`,
      javascript: `function numberOfCarries(num1, num2) {
  let carry = 0;
  let count = 0;
  while (num1 > 0 || num2 > 0) {
    const d1 = num1 % 10;
    const d2 = num2 % 10;
    const sum = d1 + d2 + carry;
    if (sum > 9) {
      carry = 1;
      count++;
    } else {
      carry = 0;
    }
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
  return count;
}
`
    }
  },

  // =========================================================================
  // Q9. Decimal to Binary
  // =========================================================================
  {
    id: 'dsa-p-09',
    qno: 9,
    title: 'Decimal to Binary',
    difficulty: 'Easy',
    category: 'Number System',
    topic: 'Decimal / Binary Conversion',
    company: 'Accenture',
    pattern: 'Repeated Division',
    timeComplexity: 'O(log N)',
    spaceComplexity: 'O(log N)',
    rewardXp: 50,
    targetMins: 15,
    description: `Convert a decimal number to its binary representation.

Given a non-negative decimal integer \`n\`, return its binary representation as a string.`,
    rules: [
      'Special case: if n == 0, return "0".',
      'Repeatedly extract remainder: remainder = n % 2, append to string.',
      'Divide: n = n / 2.',
      'Reverse the collected remainders to get the binary string.'
    ],
    coreLogic: `Repeatedly divide n by 2.
The remainders collected from least significant bit to most significant bit must be reversed to form the correct binary representation.`,
    dryRun: [
      { step: '10 / 2', quotient: 5, remainder: 0 },
      { step: '5 / 2',  quotient: 2, remainder: 1 },
      { step: '2 / 2',  quotient: 1, remainder: 0 },
      { step: '1 / 2',  quotient: 0, remainder: 1 },
      { step: 'Reverse', remainders: '0 1 0 1', finalBinary: '1010' }
    ],
    constraints: [
      '0 <= n <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'n = 10',
        expectedOutput: '1010',
        explanation: '10 in decimal is 1010 in binary.'
      },
      {
        id: 'tc-2',
        name: 'Five',
        input: 'n = 5',
        expectedOutput: '101',
        explanation: '5 = 4 + 1 -> 101.'
      },
      {
        id: 'tc-3',
        name: 'Power of Two',
        input: 'n = 8',
        expectedOutput: '1000',
        explanation: '8 = 2^3 -> 1000.'
      },
      {
        id: 'tc-4',
        name: 'Zero',
        input: 'n = 0',
        expectedOutput: '0',
        explanation: '0 in binary is "0".'
      },
      {
        id: 'tc-5',
        name: 'Fifteen',
        input: 'n = 15',
        expectedOutput: '1111',
        explanation: '15 = 8 + 4 + 2 + 1 -> 1111.'
      }
    ],
    starterCode: {
      python: `def decimal_to_binary(n: int) -> str:
    # TODO: Convert decimal integer to binary string
    pass

if __name__ == "__main__":
    print(decimal_to_binary(10)) # Expected: 1010
`,
      java: `public class Solution {
    public static String decimalToBinary(int n) {
        // TODO: Convert decimal to binary string
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string decimalToBinary(int n) {
    // TODO: Convert decimal to binary string
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string DecimalToBinary(int n) {
        return "";
    }
}
`,
      javascript: `function decimalToBinary(n) {
  // TODO: Convert decimal to binary string
  return "";
}
`
    },
    solutions: {
      python: `def decimal_to_binary(n: int) -> str:
    if n == 0:
        return "0"
    res = []
    while n > 0:
        res.append(str(n % 2))
        n //= 2
    return "".join(reversed(res))
`,
      java: `public class Solution {
    public static String decimalToBinary(int n) {
        if (n == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            sb.append(n % 2);
            n /= 2;
        }
        return sb.reverse().toString();
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>

std::string decimalToBinary(int n) {
    if (n == 0) return "0";
    std::string res = "";
    while (n > 0) {
        res += (char)('0' + (n % 2));
        n /= 2;
    }
    std::reverse(res.begin(), res.end());
    return res;
}
`,
      csharp: `using System;
using System.Text;

public class Solution {
    public static string DecimalToBinary(int n) {
        if (n == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            sb.Append(n % 2);
            n /= 2;
        }
        char[] arr = sb.ToString().ToCharArray();
        Array.Reverse(arr);
        return new string(arr);
    }
}
`,
      javascript: `function decimalToBinary(n) {
  if (n === 0) return "0";
  let res = [];
  while (n > 0) {
    res.push(n % 2);
    n = Math.floor(n / 2);
  }
  return res.reverse().join('');
}
`
    }
  },

  // =========================================================================
  // Q10. Palindrome Numbers in a Range
  // =========================================================================
  {
    id: 'dsa-p-10',
    qno: 10,
    title: 'Palindrome Numbers in a Range',
    difficulty: 'Easy',
    category: 'Mathematics / Number Manipulation',
    topic: 'Palindrome / Number Reversal',
    company: 'Accenture',
    pattern: 'Reverse and Compare',
    timeComplexity: 'O(R × D)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Takes a lower limit and upper limit as inputs and returns all the palindrome numbers between those limits (inclusive).

A palindrome reads the same from both directions (e.g. 11, 22, 121).

Return the qualifying palindrome numbers as a comma-separated string (e.g. "11, 22, 33, 44, 55, 66, 77").`,
    rules: [
      'Both limits lower and upper are inclusive.',
      'A helper function checks if original == reversed digits.',
      'Traverse i from lower to upper.',
      'Return formatted string with comma separation.'
    ],
    coreLogic: `For every number from lower to upper:
1. Store original = n.
2. Reverse digits: rev = rev * 10 + (n % 10), n /= 10.
3. If original == rev, it is a palindrome.
4. Collect all palindromes and join with commas.`,
    dryRun: [
      { num: 11, reverse: 11, match: 'Equal -> Palindrome ✓' },
      { num: 12, reverse: 21, match: 'Not equal -> Skip ✗' },
      { num: 22, reverse: 22, match: 'Equal -> Palindrome ✓' },
      { num: 121, reverse: 121, match: 'Equal -> Palindrome ✓' }
    ],
    constraints: [
      '1 <= lower <= upper <= 10^5'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'lower = 10, upper = 80',
        expectedOutput: '11, 22, 33, 44, 55, 66, 77',
        explanation: 'All 2-digit palindromes between 10 and 80.'
      },
      {
        id: 'tc-2',
        name: 'Hundreds Range',
        input: 'lower = 100, upper = 200',
        expectedOutput: '101, 111, 121, 131, 141, 151, 161, 171, 181, 191',
        explanation: 'All 3-digit palindromes between 100 and 200.'
      },
      {
        id: 'tc-3',
        name: 'Single Digits Range',
        input: 'lower = 1, upper = 5',
        expectedOutput: '1, 2, 3, 4, 5',
        explanation: 'Every single digit number is a palindrome.'
      },
      {
        id: 'tc-4',
        name: 'Tight Range',
        input: 'lower = 10, upper = 12',
        expectedOutput: '11',
        explanation: 'Only 11 is a palindrome in [10, 12].'
      },
      {
        id: 'tc-5',
        name: 'Same Lower and Upper',
        input: 'lower = 121, upper = 121',
        expectedOutput: '121',
        explanation: '121 is a palindrome.'
      }
    ],
    starterCode: {
      python: `def print_palindromes(lower: int, upper: int) -> str:
    # TODO: Return comma-separated string of palindrome numbers between lower and upper
    pass

if __name__ == "__main__":
    print(print_palindromes(10, 80)) # Expected: 11, 22, 33, 44, 55, 66, 77
`,
      java: `public class Solution {
    public static String printPalindromes(int lower, int upper) {
        // TODO: Return comma-separated string of palindromes
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string printPalindromes(int lower, int upper) {
    // TODO: Return comma-separated string
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string PrintPalindromes(int lower, int upper) {
        return "";
    }
}
`,
      javascript: `function printPalindromes(lower, upper) {
  // TODO: Return comma-separated string of palindromes
  return "";
}
`
    },
    solutions: {
      python: `def is_palindrome(n: int) -> bool:
    orig = n
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return orig == rev

def print_palindromes(lower: int, upper: int) -> str:
    res = []
    for i in range(lower, upper + 1):
        if is_palindrome(i):
            res.append(str(i))
    return ", ".join(res)
`,
      java: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static boolean isPalindrome(int n) {
        int orig = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        return orig == rev;
    }

    public static String printPalindromes(int lower, int upper) {
        List<String> list = new ArrayList<>();
        for (int i = lower; i <= upper; i++) {
            if (isPalindrome(i)) {
                list.add(String.valueOf(i));
            }
        }
        return String.join(", ", list);
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <vector>

bool isPalindrome(int n) {
    int orig = n;
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return orig == rev;
}

std::string printPalindromes(int lower, int upper) {
    std::string res = "";
    bool first = true;
    for (int i = lower; i <= upper; i++) {
        if (isPalindrome(i)) {
            if (!first) res += ", ";
            res += std::to_string(i);
            first = false;
        }
    }
    return res;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    private static bool IsPalindrome(int n) {
        int orig = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        return orig == rev;
    }

    public static string PrintPalindromes(int lower, int upper) {
        List<string> list = new List<string>();
        for (int i = lower; i <= upper; i++) {
            if (IsPalindrome(i)) {
                list.Add(i.ToString());
            }
        }
        return string.Join(", ", list);
    }
}
`,
      javascript: `function isPalindrome(n) {
  let orig = n;
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return orig === rev;
}

function printPalindromes(lower, upper) {
  const res = [];
  for (let i = lower; i <= upper; i++) {
    if (isPalindrome(i)) {
      res.push(i);
    }
  }
  return res.join(', ');
}
`
    }
  }
];

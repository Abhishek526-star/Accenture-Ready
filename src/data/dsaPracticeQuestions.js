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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

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
      java: `import java.util.*;

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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
      java: `import java.util.*;

public class Solution {
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
,
  // =========================================================================
  // Q11. Sum of Distance Between Three Points
  // =========================================================================
  {
    id: 'dsa-p-11',
    qno: 11,
    title: 'Sum of Distance Between Three Points',
    difficulty: 'Easy',
    category: 'Mathematics',
    topic: 'Coordinate Geometry',
    company: 'Accenture',
    pattern: 'Euclidean Distance',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `The program is supposed to calculate the sum of distance between three points from each other.

The points are given by:
(x1, y1), (x2, y2), and (x3, y3).

The distance between any two points is calculated using the standard Euclidean distance formula:
d = sqrt((x2 - x1)^2 + (y2 - y1)^2)

Calculate and return the sum of pairwise distances:
Total = D(P1, P2) + D(P2, P3) + D(P1, P3)
formatted to 2 decimal places.`,
    rules: [
      'Calculate d12 = sqrt((x2 - x1)^2 + (y2 - y1)^2).',
      'Calculate d23 = sqrt((x3 - x2)^2 + (y3 - y2)^2).',
      'Calculate d13 = sqrt((x3 - x1)^2 + (y3 - y1)^2).',
      'Return total distance (d12 + d23 + d13) rounded to 2 decimal places as a string.'
    ],
    coreLogic: `Calculate all three pairwise distances between P1, P2, and P3 using the Pythagorean Euclidean distance formula, then sum the three distances and round to 2 decimal places.`,
    dryRun: [
      { pair: 'P1(1,1) to P2(2,4)', formula: 'sqrt((2-1)^2 + (4-1)^2) = sqrt(10)', dist: '3.16' },
      { pair: 'P2(2,4) to P3(3,6)', formula: 'sqrt((3-2)^2 + (6-4)^2) = sqrt(5)', dist: '2.24' },
      { pair: 'P1(1,1) to P3(3,6)', formula: 'sqrt((3-1)^2 + (6-1)^2) = sqrt(29)', dist: '5.39' },
      { pair: 'Total Distance', formula: '3.162 + 2.236 + 5.385', dist: '10.78' }
    ],
    constraints: [
      '-10^4 <= x1, y1, x2, y2, x3, y3 <= 10^4',
      'Return string with exactly 2 decimal places (e.g. 10.78, 12.00)'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'x1=1, y1=1, x2=2, y2=4, x3=3, y3=6',
        args: [1, 1, 2, 4, 3, 6],
        expectedOutput: '10.78',
        explanation: 'sqrt(10) + sqrt(5) + sqrt(29) = 3.162 + 2.236 + 5.385 = 10.78'
      },
      {
        id: 'tc-2',
        name: 'Right Triangle (3-4-5)',
        input: 'x1=0, y1=0, x2=3, y2=0, x3=0, y3=4',
        args: [0, 0, 3, 0, 0, 4],
        expectedOutput: '12.00',
        explanation: 'd12 = 3.0, d23 = 5.0, d13 = 4.0. Total = 3 + 4 + 5 = 12.00'
      },
      {
        id: 'tc-3',
        name: 'Coincident Points (Origin)',
        input: 'x1=0, y1=0, x2=0, y2=0, x3=0, y3=0',
        args: [0, 0, 0, 0, 0, 0],
        expectedOutput: '0.00',
        explanation: 'All three points overlap; sum of distances is 0.00.'
      },
      {
        id: 'tc-4',
        name: 'Equilateral Shift',
        input: 'x1=1, y1=1, x2=4, y2=5, x3=1, y3=5',
        args: [1, 1, 4, 5, 1, 5],
        expectedOutput: '12.00',
        explanation: 'd12 = 5, d23 = 3, d13 = 4. Total = 12.00'
      },
      {
        id: 'tc-5',
        name: 'Negative Coordinates',
        input: 'x1=-2, y1=-1, x2=1, y2=3, x3=1, y3=-1',
        args: [-2, -1, 1, 3, 1, -1],
        expectedOutput: '12.00',
        explanation: 'd12 = 5, d23 = 4, d13 = 3. Total = 12.00'
      }
    ],
    starterCode: {
      python: `import math

def sum_of_distances(x1, y1, x2, y2, x3, y3):
    # TODO: Calculate sum of distances rounded to 2 decimal places as string
    pass

if __name__ == "__main__":
    print(sum_of_distances(1, 1, 2, 4, 3, 6)) # Expected: 10.78
`,
      java: `import java.util.*;

public class Solution {
    public static String sumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
        // TODO: Return sum of distances formatted to 2 decimal places
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <cmath>
#include <iomanip>
#include <sstream>

std::string sumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
    // TODO: Return sum of distances formatted to 2 decimal places
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string SumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
        return "";
    }
}
`,
      javascript: `function sumOfDistances(x1, y1, x2, y2, x3, y3) {
  // TODO: Return sum of distances formatted to 2 decimal places
  return "";
}
`
    },
    solutions: {
      python: `import math

def sum_of_distances(x1, y1, x2, y2, x3, y3):
    d12 = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    d23 = math.sqrt((x3 - x2)**2 + (y3 - y2)**2)
    d13 = math.sqrt((x3 - x1)**2 + (y3 - y1)**2)
    return f"{d12 + d23 + d13:.2f}"
`,
      java: `import java.util.*;

public class Solution {
    public static String sumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
        double d12 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        double d23 = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
        double d13 = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
        return String.format(Locale.US, "%.2f", d12 + d23 + d13);
    }
}
`,
      cpp: `#include <iostream>
#include <cmath>
#include <iomanip>
#include <sstream>

std::string sumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
    double d12 = std::sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    double d23 = std::sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
    double d13 = std::sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
    std::ostringstream oss;
    oss << std::fixed << std::setprecision(2) << (d12 + d23 + d13);
    return oss.str();
}
`,
      csharp: `using System;

public class Solution {
    public static string SumOfDistances(double x1, double y1, double x2, double y2, double x3, double y3) {
        double d12 = Math.Sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        double d23 = Math.Sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
        double d13 = Math.Sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
        return (d12 + d23 + d13).ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
    }
}
`,
      javascript: `function sumOfDistances(x1, y1, x2, y2, x3, y3) {
  const d12 = Math.hypot(x2 - x1, y2 - y1);
  const d23 = Math.hypot(x3 - x2, y3 - y2);
  const d13 = Math.hypot(x3 - x1, y3 - y1);
  return (d12 + d23 + d13).toFixed(2);
}
`
    },
    runSimulation: (args) => {
      const [x1, y1, x2, y2, x3, y3] = args;
      const d12 = Math.hypot(x2 - x1, y2 - y1);
      const d23 = Math.hypot(x3 - x2, y3 - y2);
      const d13 = Math.hypot(x3 - x1, y3 - y1);
      return (d12 + d23 + d13).toFixed(2);
    }
  },

  // =========================================================================
  // Q12. Count Occurrences of Each Element
  // =========================================================================
  {
    id: 'dsa-p-12',
    qno: 12,
    title: 'Count Occurrences of Each Element',
    difficulty: 'Easy',
    category: 'Arrays / Hashing',
    topic: 'Frequency Counting',
    company: 'Accenture',
    pattern: 'HashMap / Frequency Map',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(K)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given an array of integers, find the number of occurrences of each element in the array.

Output each distinct element and its count in the format:
'element - count'
separated by commas in order of first appearance.`,
    rules: [
      'Maintain an ordered frequency map or list of elements in order of first appearance.',
      'Count frequency of each element.',
      'Return string formatted as "e1 - c1, e2 - c2, ...".'
    ],
    coreLogic: `Use a LinkedHashMap or maintain unique elements in an array. Count occurrences of each number, then build a comma-separated string formatted as "val - count".`,
    dryRun: [
      { element: 10, countSoFar: 1 },
      { element: 5,  countSoFar: 1 },
      { element: 10, countSoFar: 2 },
      { element: 15, countSoFar: 1 },
      { element: 10, countSoFar: 3 },
      { element: 5,  countSoFar: 2 }
    ],
    constraints: [
      '1 <= arr.length <= 10^5',
      '-10^9 <= arr[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [10, 5, 10, 15, 10, 5]',
        args: [[10, 5, 10, 15, 10, 5]],
        expectedOutput: '10 - 3, 5 - 2, 15 - 1',
        explanation: '10 appears 3 times, 5 appears 2 times, 15 appears 1 time.'
      },
      {
        id: 'tc-2',
        name: 'All Unique Elements',
        input: 'arr = [1, 2, 3, 4]',
        args: [[1, 2, 3, 4]],
        expectedOutput: '1 - 1, 2 - 1, 3 - 1, 4 - 1',
        explanation: 'Every element appears exactly once.'
      },
      {
        id: 'tc-3',
        name: 'All Identical Elements',
        input: 'arr = [5, 5, 5, 5]',
        args: [[5, 5, 5, 5]],
        expectedOutput: '5 - 4',
        explanation: 'Single distinct element 5 appears 4 times.'
      },
      {
        id: 'tc-4',
        name: 'Single Element',
        input: 'arr = [42]',
        args: [[42]],
        expectedOutput: '42 - 1',
        explanation: 'Only 42 appears 1 time.'
      },
      {
        id: 'tc-5',
        name: 'Negative Numbers Included',
        input: 'arr = [-1, -2, -1, 0]',
        args: [[-1, -2, -1, 0]],
        expectedOutput: '-1 - 2, -2 - 1, 0 - 1',
        explanation: '-1 appears 2 times, -2 appears 1 time, 0 appears 1 time.'
      }
    ],
    starterCode: {
      python: `def count_occurrences(arr):
    # TODO: Return string in format "e1 - c1, e2 - c2, ..."
    pass

if __name__ == "__main__":
    print(count_occurrences([10, 5, 10, 15, 10, 5]))
`,
      java: `import java.util.*;

public class Solution {
    public static String countOccurrences(int[] arr) {
        // TODO: Return string formatted as "e1 - c1, e2 - c2, ..."
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string countOccurrences(const std::vector<int>& arr) {
    // TODO: Return string formatted as "e1 - c1, e2 - c2, ..."
    return "";
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static string CountOccurrences(int[] arr) {
        return "";
    }
}
`,
      javascript: `function countOccurrences(arr) {
  // TODO: Return string formatted as "e1 - c1, e2 - c2, ..."
  return "";
}
`
    },
    solutions: {
      python: `def count_occurrences(arr):
    freq = {}
    for x in arr:
        freq[x] = freq.get(x, 0) + 1
    return ", ".join(f"{k} - {v}" for k, v in freq.items())
`,
      java: `import java.util.*;

public class Solution {
    public static String countOccurrences(int[] arr) {
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for (int x : arr) {
            map.put(x, map.getOrDefault(x, 0) + 1);
        }
        List<String> list = new ArrayList<>();
        for (Map.Entry<Integer, Integer> e : map.entrySet()) {
            list.add(e.getKey() + " - " + e.getValue());
        }
        return String.join(", ", list);
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

std::string countOccurrences(const std::vector<int>& arr) {
    std::unordered_map<int, int> freq;
    std::vector<int> order;
    for (int x : arr) {
        if (freq[x] == 0) order.push_back(x);
        freq[x]++;
    }
    std::string res = "";
    for (size_t i = 0; i < order.size(); i++) {
        if (i > 0) res += ", ";
        res += std::to_string(order[i]) + " - " + std::to_string(freq[order[i]]);
    }
    return res;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static string CountOccurrences(int[] arr) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        List<int> order = new List<int>();
        foreach (int x in arr) {
            if (!map.ContainsKey(x)) {
                map[x] = 0;
                order.Add(x);
            }
            map[x]++;
        }
        List<string> parts = new List<string>();
        foreach (int k in order) {
            parts.Add(k + " - " + map[k]);
        }
        return string.Join(", ", parts);
    }
}
`,
      javascript: `function countOccurrences(arr) {
  const map = new Map();
  for (const x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  const parts = [];
  for (const [k, v] of map.entries()) {
    parts.push(k + ' - ' + v);
  }
  return parts.join(', ');
}
`
    },
    runSimulation: (args) => {
      const arr = args[0];
      const map = new Map();
      for (const x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
      }
      const parts = [];
      for (const [k, v] of map.entries()) {
        parts.push(k + ' - ' + v);
      }
      return parts.join(', ');
    }
  },

  // =========================================================================
  // Q13. Elevation Point
  // =========================================================================
  {
    id: 'dsa-p-13',
    qno: 13,
    title: 'Elevation Point',
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Maximum Element / Bitonic Peak',
    company: 'Accenture',
    pattern: 'Linear Traversal',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given an array of N integers, find the elevation point.

The elevation point is the highest point (maximum value) in the given array sequence.
For example, for arr = [1, 2, 3, 4, 3, 2, 1], the elevation point is 4.`,
    rules: [
      'Traverse the array and track the maximum element seen so far.',
      'Return the maximum value found.'
    ],
    coreLogic: `Initialize max = arr[0]. For each element from index 1 to n - 1, if arr[i] > max, update max = arr[i]. Return max.`,
    dryRun: [
      { element: 1, maxSoFar: 1 },
      { element: 2, maxSoFar: 2 },
      { element: 3, maxSoFar: 3 },
      { element: 4, maxSoFar: 4 },
      { element: 3, maxSoFar: 4 },
      { element: 2, maxSoFar: 4 },
      { element: 1, maxSoFar: 4 }
    ],
    constraints: [
      '1 <= n <= 10^5',
      '-10^9 <= arr[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [1, 2, 3, 4, 3, 2, 1], n = 7',
        args: [[1, 2, 3, 4, 3, 2, 1], 7],
        expectedOutput: '4',
        explanation: 'The highest point in the sequence is 4.'
      },
      {
        id: 'tc-2',
        name: 'Given Two Elements',
        input: 'arr = [5, 3], n = 2',
        args: [[5, 3], 2],
        expectedOutput: '5',
        explanation: 'Max of [5, 3] is 5.'
      },
      {
        id: 'tc-3',
        name: 'Peak in Middle',
        input: 'arr = [1, 5, 3, 2], n = 4',
        args: [[1, 5, 3, 2], 4],
        expectedOutput: '5',
        explanation: 'Elevation point is 5.'
      },
      {
        id: 'tc-4',
        name: 'Single Element',
        input: 'arr = [10], n = 1',
        args: [[10], 1],
        expectedOutput: '10',
        explanation: 'Only element 10 is the elevation point.'
      },
      {
        id: 'tc-5',
        name: 'Negative Elements',
        input: 'arr = [-10, -5, -2, -8], n = 4',
        args: [[-10, -5, -2, -8], 4],
        expectedOutput: '-2',
        explanation: 'Highest element among negatives is -2.'
      }
    ],
    starterCode: {
      python: `def elevation_point(arr, n):
    # TODO: Return maximum element in arr
    pass

if __name__ == "__main__":
    print(elevation_point([1, 2, 3, 4, 3, 2, 1], 7)) # Expected: 4
`,
      java: `import java.util.*;

public class Solution {
    public static int elevationPoint(int[] arr, int n) {
        // TODO: Return maximum element in arr
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int elevationPoint(const std::vector<int>& arr, int n) {
    // TODO: Return maximum element in arr
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int ElevationPoint(int[] arr, int n) {
        return 0;
    }
}
`,
      javascript: `function elevationPoint(arr, n) {
  // TODO: Return maximum element in arr
  return 0;
}
`
    },
    solutions: {
      python: `def elevation_point(arr, n):
    max_val = arr[0]
    for i in range(1, n):
        if arr[i] > max_val:
            max_val = arr[i]
    return max_val
`,
      java: `import java.util.*;

public class Solution {
    public static int elevationPoint(int[] arr, int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int elevationPoint(const std::vector<int>& arr, int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
`,
      csharp: `using System;

public class Solution {
    public static int ElevationPoint(int[] arr, int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }
}
`,
      javascript: `function elevationPoint(arr, n) {
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
`
    },
    runSimulation: (args) => {
      const [arr, n] = args;
      let max = arr[0];
      for (let i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
      }
      return max;
    }
  },

  // =========================================================================
  // Q14. Encode Number
  // =========================================================================
  {
    id: 'dsa-p-14',
    qno: 14,
    title: 'Encode Number',
    difficulty: 'Easy',
    category: 'Number Manipulation',
    topic: 'Digit Processing',
    company: 'Accenture',
    pattern: 'Digit Extraction + Concatenation',
    timeComplexity: 'O(D)',
    spaceComplexity: 'O(D)',
    rewardXp: 50,
    targetMins: 15,
    description: `You work in the message encoding department of a national security agency.
You are given an integer N.

To encode the number:
1. Take each digit of N.
2. Square each digit individually.
3. Concatenate the squares together.
4. Return the resulting encoded string.

Example: N = 34 -> 3^2 = 9, 4^2 = 16 -> Output: "916".`,
    rules: [
      'Extract each digit of N from left to right.',
      'Square each digit: sq = digit * digit.',
      'Concatenate all squared values into a single string.'
    ],
    coreLogic: `Convert the integer to a string. For each character c, compute digit = c - '0', square it (digit * digit), and append to the result string.`,
    dryRun: [
      { digit: 3, square: '3^2 = 9', resultSoFar: '9' },
      { digit: 4, square: '4^2 = 16', resultSoFar: '916' }
    ],
    constraints: [
      '0 <= N <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'N = 34',
        args: [34],
        expectedOutput: '916',
        explanation: '3^2 = 9, 4^2 = 16 -> "916"'
      },
      {
        id: 'tc-2',
        name: 'Small Digits',
        input: 'N = 12',
        args: [12],
        expectedOutput: '14',
        explanation: '1^2 = 1, 2^2 = 4 -> "14"'
      },
      {
        id: 'tc-3',
        name: 'Digits with Double-Digit Square',
        input: 'N = 25',
        args: [25],
        expectedOutput: '425',
        explanation: '2^2 = 4, 5^2 = 25 -> "425"'
      },
      {
        id: 'tc-4',
        name: 'All Nines',
        input: 'N = 99',
        args: [99],
        expectedOutput: '8181',
        explanation: '9^2 = 81, 9^2 = 81 -> "8181"'
      },
      {
        id: 'tc-5',
        name: 'Zero Digit Included',
        input: 'N = 10',
        args: [10],
        expectedOutput: '10',
        explanation: '1^2 = 1, 0^2 = 0 -> "10"'
      }
    ],
    starterCode: {
      python: `def encode_number(n: int) -> str:
    # TODO: Square each digit and concatenate into a string
    pass

if __name__ == "__main__":
    print(encode_number(34)) # Expected: "916"
`,
      java: `import java.util.*;

public class Solution {
    public static String encodeNumber(int n) {
        // TODO: Square each digit and concatenate into a string
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string encodeNumber(int n) {
    // TODO: Square each digit and concatenate into a string
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string EncodeNumber(int n) {
        return "";
    }
}
`,
      javascript: `function encodeNumber(n) {
  // TODO: Square each digit and concatenate into a string
  return "";
}
`
    },
    solutions: {
      python: `def encode_number(n: int) -> str:
    s = str(n)
    return "".join(str(int(c)**2) for c in s)
`,
      java: `import java.util.*;

public class Solution {
    public static String encodeNumber(int n) {
        String s = String.valueOf(n);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            int d = s.charAt(i) - '0';
            sb.append(d * d);
        }
        return sb.toString();
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string encodeNumber(int n) {
    std::string s = std::to_string(n);
    std::string res = "";
    for (char c : s) {
        int d = c - '0';
        res += std::to_string(d * d);
    }
    return res;
}
`,
      csharp: `using System;
using System.Text;

public class Solution {
    public static string EncodeNumber(int n) {
        string s = n.ToString();
        StringBuilder sb = new StringBuilder();
        foreach (char c in s) {
            int d = c - '0';
            sb.Append(d * d);
        }
        return sb.ToString();
    }
}
`,
      javascript: `function encodeNumber(n) {
  return String(n)
    .split('')
    .map(c => Number(c) ** 2)
    .join('');
}
`
    },
    runSimulation: (args) => {
      const n = args[0];
      return String(n)
        .split('')
        .map(c => Number(c) ** 2)
        .join('');
    }
  },

  // =========================================================================
  // Q15. Equilibrium Sum
  // =========================================================================
  {
    id: 'dsa-p-15',
    qno: 15,
    title: 'Equilibrium Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Prefix / Total Sum',
    company: 'Accenture',
    pattern: 'Prefix Sum',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given an integer array of size n, find the index of the equilibrium point.

An equilibrium point is an index where:
Sum of elements on the left = Sum of elements on the right.

If no equilibrium point exists, return -1.
If multiple exist, return the first one.`,
    rules: [
      'First compute totalSum of all elements.',
      'Maintain leftSum starting at 0.',
      'At index i: rightSum = totalSum - leftSum - arr[i].',
      'If leftSum == rightSum, return i.',
      'Otherwise, leftSum += arr[i]. Return -1 if not found.'
    ],
    coreLogic: `rightSum can be computed dynamically as totalSum - leftSum - arr[i] in O(1) time per element, enabling an efficient O(N) single-pass solution after initial sum.`,
    dryRun: [
      { idx: 0, val: 3, left: 0, right: '17 - 0 - 3 = 14', match: 'No' },
      { idx: 1, val: 4, left: 3, right: '17 - 3 - 4 = 10', match: 'No' },
      { idx: 2, val: 3, left: 7, right: '17 - 7 - 3 = 7',  match: 'Yes (Index 2)' }
    ],
    constraints: [
      '1 <= n <= 10^5',
      '-10^4 <= arr[i] <= 10^4'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [3, 4, 3, 1, 6], n = 5',
        args: [[3, 4, 3, 1, 6], 5],
        expectedOutput: '2',
        explanation: 'At index 2: left = 3+4=7, right = 1+6=7.'
      },
      {
        id: 'tc-2',
        name: 'No Equilibrium Point',
        input: 'arr = [1, 2, 3], n = 3',
        args: [[1, 2, 3], 3],
        expectedOutput: '-1',
        explanation: 'No index satisfies leftSum == rightSum.'
      },
      {
        id: 'tc-3',
        name: 'Equilibrium with Duplicate Values',
        input: 'arr = [1, 2, 3, 3], n = 4',
        args: [[1, 2, 3, 3], 4],
        expectedOutput: '2',
        explanation: 'At index 2: left = 1+2=3, right = 3.'
      },
      {
        id: 'tc-4',
        name: 'Single Element',
        input: 'arr = [5], n = 1',
        args: [[5], 1],
        expectedOutput: '0',
        explanation: 'Index 0 has left=0 and right=0.'
      },
      {
        id: 'tc-5',
        name: 'Zero in Middle',
        input: 'arr = [2, 0, 2], n = 3',
        args: [[2, 0, 2], 3],
        expectedOutput: '1',
        explanation: 'At index 1: left = 2, right = 2.'
      }
    ],
    starterCode: {
      python: `def equilibrium_index(arr, n):
    # TODO: Return equilibrium index, or -1
    pass

if __name__ == "__main__":
    print(equilibrium_index([3, 4, 3, 1, 6], 5)) # Expected: 2
`,
      java: `import java.util.*;

public class Solution {
    public static int equilibriumIndex(int[] arr, int n) {
        // TODO: Return equilibrium index, or -1
        return -1;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int equilibriumIndex(int arr[], int n) {
    // TODO: Return equilibrium index, or -1
    return -1;
}
`,
      csharp: `using System;

public class Solution {
    public static int EquilibriumIndex(int[] arr, int n) {
        return -1;
    }
}
`,
      javascript: `function equilibriumIndex(arr, n) {
  // TODO: Return equilibrium index, or -1
  return -1;
}
`
    },
    solutions: {
      python: `def equilibrium_index(arr, n):
    total = sum(arr)
    left = 0
    for i in range(n):
        right = total - left - arr[i]
        if left == right:
            return i
        left += arr[i]
    return -1
`,
      java: `import java.util.*;

public class Solution {
    public static int equilibriumIndex(int[] arr, int n) {
        int total = 0;
        for (int i = 0; i < n; i++) total += arr[i];
        int left = 0;
        for (int i = 0; i < n; i++) {
            int right = total - left - arr[i];
            if (left == right) return i;
            left += arr[i];
        }
        return -1;
    }
}
`,
      cpp: `#include <iostream>

int equilibriumIndex(int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += arr[i];
    int left = 0;
    for (int i = 0; i < n; i++) {
        int right = total - left - arr[i];
        if (left == right) return i;
        left += arr[i];
    }
    return -1;
}
`,
      csharp: `using System;

public class Solution {
    public static int EquilibriumIndex(int[] arr, int n) {
        int total = 0;
        for (int i = 0; i < n; i++) total += arr[i];
        int left = 0;
        for (int i = 0; i < n; i++) {
            int right = total - left - arr[i];
            if (left == right) return i;
            left += arr[i];
        }
        return -1;
    }
}
`,
      javascript: `function equilibriumIndex(arr, n) {
  let total = arr.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < n; i++) {
    let right = total - left - arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
`
    },
    runSimulation: (args) => {
      const [arr, n] = args;
      let total = arr.reduce((a, b) => a + b, 0);
      let left = 0;
      for (let i = 0; i < n; i++) {
        let right = total - left - arr[i];
        if (left === right) return i;
        left += arr[i];
      }
      return -1;
    }
  },

  // =========================================================================
  // Q16. Missing Number
  // =========================================================================
  {
    id: 'dsa-p-16',
    qno: 16,
    title: 'Missing Number',
    difficulty: 'Easy',
    category: 'Arrays / Mathematics',
    topic: 'Missing Element',
    company: 'Accenture',
    pattern: 'Sum Formula',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given an array of integers representing numbers from 1 to N with exactly one number missing, write a function that finds and returns the missing number.

Example: arr = [1, 2, 4, 5, 6], N = 6 -> Expected Output: 3.`,
    rules: [
      'Expected sum = N * (N + 1) / 2.',
      'Actual sum = sum(arr).',
      'Missing number = Expected sum - Actual sum.'
    ],
    coreLogic: `The sum of first N natural numbers is N*(N+1)/2. Subtracting the actual sum of array elements from the expected sum yields the missing number in O(N) time and O(1) space.`,
    dryRun: [
      { step: 'Array', value: '[1, 2, 4, 5, 6]' },
      { step: 'N', value: 6 },
      { step: 'Expected Sum', value: '6 * 7 / 2 = 21' },
      { step: 'Actual Sum', value: '1 + 2 + 4 + 5 + 6 = 18' },
      { step: 'Missing', value: '21 - 18 = 3' }
    ],
    constraints: [
      '2 <= N <= 10^5',
      'arr.length == N - 1',
      '1 <= arr[i] <= N'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [1, 2, 4, 5, 6], N = 6',
        args: [[1, 2, 4, 5, 6], 6],
        expectedOutput: '3',
        explanation: 'Expected sum 21 - Actual sum 18 = 3.'
      },
      {
        id: 'tc-2',
        name: 'Missing Near End',
        input: 'arr = [1, 2, 3, 5], N = 5',
        args: [[1, 2, 3, 5], 5],
        expectedOutput: '4',
        explanation: 'Missing number is 4.'
      },
      {
        id: 'tc-3',
        name: 'Missing First Element',
        input: 'arr = [2, 3, 4, 5], N = 5',
        args: [[2, 3, 4, 5], 5],
        expectedOutput: '1',
        explanation: 'Missing number is 1.'
      },
      {
        id: 'tc-4',
        name: 'Minimal Size (N = 2)',
        input: 'arr = [1], N = 2',
        args: [[1], 2],
        expectedOutput: '2',
        explanation: 'Missing number is 2.'
      },
      {
        id: 'tc-5',
        name: 'Larger Range (N = 10)',
        input: 'arr = [1, 2, 3, 4, 5, 6, 7, 8, 10], N = 10',
        args: [[1, 2, 3, 4, 5, 6, 7, 8, 10], 10],
        expectedOutput: '9',
        explanation: 'Missing number is 9.'
      }
    ],
    starterCode: {
      python: `def missing_number(arr, n):
    # TODO: Return missing number in range 1 to n
    pass

if __name__ == "__main__":
    print(missing_number([1, 2, 4, 5, 6], 6)) # Expected: 3
`,
      java: `import java.util.*;

public class Solution {
    public static int missingNumber(int[] arr, int n) {
        // TODO: Return missing number in range 1 to n
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int missingNumber(int arr[], int n) {
    // TODO: Return missing number in range 1 to n
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int MissingNumber(int[] arr, int n) {
        return 0;
    }
}
`,
      javascript: `function missingNumber(arr, n) {
  // TODO: Return missing number in range 1 to n
  return 0;
}
`
    },
    solutions: {
      python: `def missing_number(arr, n):
    expected = n * (n + 1) // 2
    return expected - sum(arr)
`,
      java: `import java.util.*;

public class Solution {
    public static int missingNumber(int[] arr, int n) {
        long expected = (long) n * (n + 1) / 2;
        long actual = 0;
        for (int x : arr) actual += x;
        return (int)(expected - actual);
    }
}
`,
      cpp: `#include <iostream>

int missingNumber(int arr[], int n) {
    long long expected = (long long) n * (n + 1) / 2;
    long long actual = 0;
    for (int i = 0; i < n - 1; i++) actual += arr[i];
    return expected - actual;
}
`,
      csharp: `using System;

public class Solution {
    public static int MissingNumber(int[] arr, int n) {
        long expected = (long) n * (n + 1) / 2;
        long actual = 0;
        foreach (int x in arr) actual += x;
        return (int)(expected - actual);
    }
}
`,
      javascript: `function missingNumber(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
}
`
    },
    runSimulation: (args) => {
      const [arr, n] = args;
      const expected = (n * (n + 1)) / 2;
      const actual = arr.reduce((a, b) => a + b, 0);
      return expected - actual;
    }
  },

  // =========================================================================
  // Q17. First K Words
  // =========================================================================
  {
    id: 'dsa-p-17',
    qno: 17,
    title: 'First K Words',
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'String Parsing / Tokenization',
    company: 'Accenture',
    pattern: 'Tokenization',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    rewardXp: 50,
    targetMins: 15,
    description: `Print the first K words of a given space-separated string.
If the string contains fewer than K words, return all available words.

Example: String = "Hello I am a passionate developer", K = 4 -> Output: "Hello I am a".`,
    rules: [
      'Split the string into words using whitespace.',
      'Take at most K words.',
      'Join them with a single space and return.'
    ],
    coreLogic: `Tokenize the string by space characters, select the first min(K, totalWords) tokens, and join them with a single space.`,
    dryRun: [
      { index: 1, word: 'Hello' },
      { index: 2, word: 'I' },
      { index: 3, word: 'am' },
      { index: 4, word: 'a' }
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      '1 <= K <= 10^4'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 's = "Hello I am a passionate developer", K = 4',
        args: ["Hello I am a passionate developer", 4],
        expectedOutput: 'Hello I am a',
        explanation: 'First 4 words extracted.'
      },
      {
        id: 'tc-2',
        name: 'Two Words',
        input: 's = "I love coding", K = 2',
        args: ["I love coding", 2],
        expectedOutput: 'I love',
        explanation: 'First 2 words are "I love".'
      },
      {
        id: 'tc-3',
        name: 'K Exceeds Word Count',
        input: 's = "One two three", K = 5',
        args: ["One two three", 5],
        expectedOutput: 'One two three',
        explanation: 'Only 3 words exist; returns all.'
      },
      {
        id: 'tc-4',
        name: 'Single Word',
        input: 's = "Accenture", K = 1',
        args: ["Accenture", 1],
        expectedOutput: 'Accenture',
        explanation: 'Only 1 word requested.'
      },
      {
        id: 'tc-5',
        name: 'Five Words',
        input: 's = "The quick brown fox jumps", K = 3',
        args: ["The quick brown fox jumps", 3],
        expectedOutput: 'The quick brown',
        explanation: 'First 3 words returned.'
      }
    ],
    starterCode: {
      python: `def first_k_words(s: str, k: int) -> str:
    # TODO: Return first k words joined by space
    pass

if __name__ == "__main__":
    print(first_k_words("Hello I am a passionate developer", 4))
`,
      java: `import java.util.*;

public class Solution {
    public static String firstKWords(String s, int k) {
        // TODO: Return first k words joined by space
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string firstKWords(const std::string& s, int k) {
    // TODO: Return first k words joined by space
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string FirstKWords(string s, int k) {
        return "";
    }
}
`,
      javascript: `function firstKWords(s, k) {
  // TODO: Return first k words joined by space
  return "";
}
`
    },
    solutions: {
      python: `def first_k_words(s: str, k: int) -> str:
    words = s.strip().split()
    return " ".join(words[:k])
`,
      java: `import java.util.*;

public class Solution {
    public static String firstKWords(String s, int k) {
        String[] words = s.trim().split("\\s+");
        int count = Math.min(k, words.length);
        List<String> list = new ArrayList<>();
        for (int i = 0; i < count; i++) list.add(words[i]);
        return String.join(" ", list);
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <sstream>

std::string firstKWords(const std::string& s, int k) {
    std::stringstream ss(s);
    std::string word, res = "";
    int count = 0;
    while (ss >> word && count < k) {
        if (count > 0) res += " ";
        res += word;
        count++;
    }
    return res;
}
`,
      csharp: `using System;

public class Solution {
    public static string FirstKWords(string s, int k) {
        string[] words = s.Trim().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        int count = Math.Min(k, words.Length);
        return string.Join(" ", words, 0, count);
    }
}
`,
      javascript: `function firstKWords(s, k) {
  return s.trim().split(/\s+/).slice(0, k).join(' ');
}
`
    },
    runSimulation: (args) => {
      const [s, k] = args;
      return s.trim().split(/\s+/).slice(0, k).join(' ');
    }
  },

  // =========================================================================
  // Q18. Floyd's Triangle
  // =========================================================================
  {
    id: 'dsa-p-18',
    qno: 18,
    title: "Floyd's Triangle",
    difficulty: 'Easy',
    category: 'Patterns',
    topic: 'Pattern Printing / Nested Loops',
    company: 'Accenture',
    pattern: 'Nested Loops',
    timeComplexity: 'O(N^2)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given an integer N, generate N rows of Floyd's Triangle.
Floyd's Triangle is a right-angled triangular arrangement of consecutive natural numbers.

Example for N = 4:
1
2 3
4 5 6
7 8 9 10
Lines are separated by newline characters.`,
    rules: [
      'Initialize counter num = 1.',
      'For row i from 1 to N: print i consecutive numbers separated by spaces.',
      'Return rows joined by newline characters.'
    ],
    coreLogic: `Iterate row from 1 to N. In row i, append numbers from num to num + i - 1 separated by spaces, incrementing num. Join rows with newline.`,
    dryRun: [
      { row: 1, numbers: '1' },
      { row: 2, numbers: '2 3' },
      { row: 3, numbers: '4 5 6' },
      { row: 4, numbers: '7 8 9 10' }
    ],
    constraints: [
      '1 <= N <= 20'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'N = 4',
        args: [4],
        expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10',
        explanation: '4 rows of consecutive numbers.'
      },
      {
        id: 'tc-2',
        name: 'Single Row',
        input: 'N = 1',
        args: [1],
        expectedOutput: '1',
        explanation: 'Single row with 1.'
      },
      {
        id: 'tc-3',
        name: 'Three Rows',
        input: 'N = 3',
        args: [3],
        expectedOutput: '1\n2 3\n4 5 6',
        explanation: '3 rows containing numbers 1 through 6.'
      },
      {
        id: 'tc-4',
        name: 'Two Rows',
        input: 'N = 2',
        args: [2],
        expectedOutput: '1\n2 3',
        explanation: '2 rows containing 1 and 2 3.'
      },
      {
        id: 'tc-5',
        name: 'Five Rows',
        input: 'N = 5',
        args: [5],
        expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15',
        explanation: '5 rows containing numbers 1 to 15.'
      }
    ],
    starterCode: {
      python: `def floyd_triangle(n: int) -> str:
    # TODO: Return N rows of Floyd's Triangle joined by newline
    pass

if __name__ == "__main__":
    print(floyd_triangle(4))
`,
      java: `import java.util.*;

public class Solution {
    public static String floydTriangle(int n) {
        // TODO: Return N rows of Floyd's Triangle joined by newline
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string floydTriangle(int n) {
    // TODO: Return N rows of Floyd's Triangle joined by newline
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string FloydTriangle(int n) {
        return "";
    }
}
`,
      javascript: `function floydTriangle(n) {
  // TODO: Return N rows of Floyd's Triangle joined by newline
  return "";
}
`
    },
    solutions: {
      python: `def floyd_triangle(n: int) -> str:
    lines = []
    num = 1
    for i in range(1, n + 1):
        row = [str(num + j) for j in range(i)]
        lines.append(" ".join(row))
        num += i
    return "\n".join(lines)
`,
      java: `import java.util.*;

public class Solution {
    public static String floydTriangle(int n) {
        StringBuilder sb = new StringBuilder();
        int num = 1;
        for (int i = 1; i <= n; i++) {
            if (i > 1) sb.append("\n");
            for (int j = 1; j <= i; j++) {
                if (j > 1) sb.append(" ");
                sb.append(num++);
            }
        }
        return sb.toString();
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string floydTriangle(int n) {
    std::string res = "";
    int num = 1;
    for (int i = 1; i <= n; i++) {
        if (i > 1) res += "\n";
        for (int j = 1; j <= i; j++) {
            if (j > 1) res += " ";
            res += std::to_string(num++);
        }
    }
    return res;
}
`,
      csharp: `using System;
using System.Text;

public class Solution {
    public static string FloydTriangle(int n) {
        StringBuilder sb = new StringBuilder();
        int num = 1;
        for (int i = 1; i <= n; i++) {
            if (i > 1) sb.Append("\n");
            for (int j = 1; j <= i; j++) {
                if (j > 1) sb.Append(" ");
                sb.Append(num++);
            }
        }
        return sb.ToString();
    }
}
`,
      javascript: `function floydTriangle(n) {
  const lines = [];
  let num = 1;
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= i; j++) {
      row.push(num++);
    }
    lines.push(row.join(' '));
  }
  return lines.join('\n');
}
`
    },
    runSimulation: (args) => {
      const n = args[0];
      const lines = [];
      let num = 1;
      for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= i; j++) {
          row.push(num++);
        }
        lines.push(row.join(' '));
      }
      return lines.join('\n');
    }
  },

  // =========================================================================
  // Q19. Googly Prime Number
  // =========================================================================
  {
    id: 'dsa-p-19',
    qno: 19,
    title: 'Googly Prime Number',
    difficulty: 'Easy',
    category: 'Mathematics',
    topic: 'Digit Sum + Prime Check',
    company: 'Accenture',
    pattern: 'Digit Manipulation + Prime Check',
    timeComplexity: 'O(D + sqrt(S))',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: `A number is considered Googly Prime if the sum of its digits is a prime number.
Given an integer N, return "YES" if N is a Googly Prime number, otherwise return "NO".

Examples:
- 43 -> 4 + 3 = 7 (prime) -> "YES"
- 123 -> 1 + 2 + 3 = 6 (not prime) -> "NO"`,
    rules: [
      'Extract digits of N and compute sum.',
      'Check if sum >= 2 and has no divisors other than 1 and itself.',
      'Return "YES" if sum is prime, else "NO".'
    ],
    coreLogic: `Sum the digits of N. Then test if the digit sum S is prime by checking divisors from 2 up to sqrt(S). Return "YES" if prime, else "NO".`,
    dryRun: [
      { input: 43, digitSum: '4 + 3 = 7', isPrime: 'Yes', result: 'YES' },
      { input: 123, digitSum: '1 + 2 + 3 = 6', isPrime: 'No', result: 'NO' }
    ],
    constraints: [
      '1 <= N <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example 1',
        input: 'N = 43',
        args: [43],
        expectedOutput: 'YES',
        explanation: '4 + 3 = 7. 7 is a prime number.'
      },
      {
        id: 'tc-2',
        name: 'Given Example 2',
        input: 'N = 123',
        args: [123],
        expectedOutput: 'NO',
        explanation: '1 + 2 + 3 = 6. 6 is composite (divisible by 2 and 3).'
      },
      {
        id: 'tc-3',
        name: 'Small Prime Sum (2)',
        input: 'N = 11',
        args: [11],
        expectedOutput: 'YES',
        explanation: '1 + 1 = 2. 2 is prime.'
      },
      {
        id: 'tc-4',
        name: 'Sum Equals 1',
        input: 'N = 100',
        args: [100],
        expectedOutput: 'NO',
        explanation: '1 + 0 + 0 = 1. 1 is not a prime number.'
      },
      {
        id: 'tc-5',
        name: 'Two Digits Prime Sum (11)',
        input: 'N = 29',
        args: [29],
        expectedOutput: 'YES',
        explanation: '2 + 9 = 11. 11 is prime.'
      }
    ],
    starterCode: {
      python: `def googly_prime(n: int) -> str:
    # TODO: Return "YES" if digit sum is prime, else "NO"
    pass

if __name__ == "__main__":
    print(googly_prime(43)) # Expected: "YES"
`,
      java: `import java.util.*;

public class Solution {
    public static String googlyPrime(int n) {
        // TODO: Return "YES" if digit sum is prime, else "NO"
        return "NO";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string googlyPrime(int n) {
    // TODO: Return "YES" if digit sum is prime, else "NO"
    return "NO";
}
`,
      csharp: `using System;

public class Solution {
    public static string GooglyPrime(int n) {
        return "NO";
    }
}
`,
      javascript: `function googlyPrime(n) {
  // TODO: Return "YES" if digit sum is prime, else "NO"
  return "NO";
}
`
    },
    solutions: {
      python: `def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            return False
    return True

def googly_prime(n: int) -> str:
    s = sum(int(c) for c in str(n))
    return "YES" if is_prime(s) else "NO"
`,
      java: `import java.util.*;

public class Solution {
    private static boolean isPrime(int x) {
        if (x < 2) return false;
        for (int i = 2; i * i <= x; i++) {
            if (x % i == 0) return false;
        }
        return true;
    }

    public static String googlyPrime(int n) {
        int sum = 0;
        int temp = n;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        return isPrime(sum) ? "YES" : "NO";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

bool isPrime(int x) {
    if (x < 2) return false;
    for (int i = 2; i * i <= x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

std::string googlyPrime(int n) {
    int sum = 0, temp = n;
    while (temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }
    return isPrime(sum) ? "YES" : "NO";
}
`,
      csharp: `using System;

public class Solution {
    private static bool IsPrime(int x) {
        if (x < 2) return false;
        for (int i = 2; i * i <= x; i++) {
            if (x % i == 0) return false;
        }
        return true;
    }

    public static string GooglyPrime(int n) {
        int sum = 0, temp = n;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        return IsPrime(sum) ? "YES" : "NO";
    }
}
`,
      javascript: `function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function googlyPrime(n) {
  let sum = 0, temp = n;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return isPrime(sum) ? "YES" : "NO";
}
`
    },
    runSimulation: (args) => {
      const n = args[0];
      const isP = (x) => {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; i++) if (x % i === 0) return false;
        return true;
      };
      let sum = 0, temp = n;
      while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
      }
      return isP(sum) ? 'YES' : 'NO';
    }
  },

  // =========================================================================
  // Q20. Intersection of Array
  // =========================================================================
  {
    id: 'dsa-p-20',
    qno: 20,
    title: 'Intersection of Array',
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Array Intersection / Hash Set',
    company: 'Accenture',
    pattern: 'Hash Set / Two Pointers',
    timeComplexity: 'O(N + M)',
    spaceComplexity: 'O(N + M)',
    rewardXp: 50,
    targetMins: 15,
    description: `Given two integer arrays arr1 and arr2, return the distinct elements present in both arrays in sorted order, separated by commas.
If there is no common element, return "Empty".

Example: arr1 = [1, 2, 2, 1], arr2 = [2, 2] -> Output: "2".`,
    rules: [
      'Store distinct elements of arr1 in a Set.',
      'Check which elements exist in arr2 and store in an intersection Set.',
      'If intersection is empty, return "Empty".',
      'Otherwise, sort distinct elements ascending and join by commas.'
    ],
    coreLogic: `Insert all elements of arr1 into a HashSet. Iterate over arr2; if an element exists in the set, add it to the intersection set. Sort the intersection elements and return as comma-separated string, or "Empty" if none.`,
    dryRun: [
      { arr1: '[1, 2, 2, 1]', set1: '{1, 2}' },
      { arr2: '[2, 2]', common: '{2}' },
      { result: '"2"' }
    ],
    constraints: [
      '1 <= arr1.length, arr2.length <= 10^5',
      '-10^9 <= arr1[i], arr2[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr1 = [1, 2, 2, 1], arr2 = [2, 2]',
        args: [[1, 2, 2, 1], [2, 2]],
        expectedOutput: '2',
        explanation: 'Only element 2 is present in both arrays.'
      },
      {
        id: 'tc-2',
        name: 'Multiple Common Elements',
        input: 'arr1 = [4, 9, 5], arr2 = [9, 4, 9, 8, 4]',
        args: [[4, 9, 5], [9, 4, 9, 8, 4]],
        expectedOutput: '4, 9',
        explanation: '4 and 9 are present in both arrays.'
      },
      {
        id: 'tc-3',
        name: 'No Common Elements',
        input: 'arr1 = [1, 2, 3], arr2 = [4, 5, 6]',
        args: [[1, 2, 3], [4, 5, 6]],
        expectedOutput: 'Empty',
        explanation: 'No overlapping elements.'
      },
      {
        id: 'tc-4',
        name: 'Identical Duplicates',
        input: 'arr1 = [7, 7, 7], arr2 = [7]',
        args: [[7, 7, 7], [7]],
        expectedOutput: '7',
        explanation: 'Single common element 7.'
      },
      {
        id: 'tc-5',
        name: 'Sorted Overlap',
        input: 'arr1 = [10, 20, 30, 40], arr2 = [30, 40, 50]',
        args: [[10, 20, 30, 40], [30, 40, 50]],
        expectedOutput: '30, 40',
        explanation: '30 and 40 are common.'
      }
    ],
    starterCode: {
      python: `def intersection_of_arrays(arr1, arr2):
    # TODO: Return comma-separated distinct common elements in sorted order, or "Empty"
    pass

if __name__ == "__main__":
    print(intersection_of_arrays([1, 2, 2, 1], [2, 2])) # Expected: "2"
`,
      java: `import java.util.*;

public class Solution {
    public static String intersectionOfArrays(int[] arr1, int[] arr2) {
        // TODO: Return comma-separated distinct common elements in sorted order, or "Empty"
        return "Empty";
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string intersectionOfArrays(const std::vector<int>& arr1, const std::vector<int>& arr2) {
    // TODO: Return comma-separated distinct common elements in sorted order, or "Empty"
    return "Empty";
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static string IntersectionOfArrays(int[] arr1, int[] arr2) {
        return "Empty";
    }
}
`,
      javascript: `function intersectionOfArrays(arr1, arr2) {
  // TODO: Return comma-separated distinct common elements in sorted order, or "Empty"
  return "Empty";
}
`
    },
    solutions: {
      python: `def intersection_of_arrays(arr1, arr2):
    s1 = set(arr1)
    common = sorted(list(s1.intersection(arr2)))
    if not common:
        return "Empty"
    return ", ".join(str(x) for x in common)
`,
      java: `import java.util.*;

public class Solution {
    public static String intersectionOfArrays(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        for (int x : arr1) set1.add(x);
        Set<Integer> common = new TreeSet<>();
        for (int x : arr2) {
            if (set1.contains(x)) common.add(x);
        }
        if (common.isEmpty()) return "Empty";
        List<String> list = new ArrayList<>();
        for (int x : common) list.add(String.valueOf(x));
        return String.join(", ", list);
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <set>
#include <unordered_set>

std::string intersectionOfArrays(const std::vector<int>& arr1, const std::vector<int>& arr2) {
    std::unordered_set<int> s1(arr1.begin(), arr1.end());
    std::set<int> common;
    for (int x : arr2) {
        if (s1.count(x)) common.insert(x);
    }
    if (common.empty()) return "Empty";
    std::string res = "";
    bool first = true;
    for (int x : common) {
        if (!first) res += ", ";
        res += std::to_string(x);
        first = false;
    }
    return res;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static string IntersectionOfArrays(int[] arr1, int[] arr2) {
        HashSet<int> s1 = new HashSet<int>(arr1);
        SortedSet<int> common = new SortedSet<int>();
        foreach (int x in arr2) {
            if (s1.Contains(x)) common.Add(x);
        }
        if (common.Count == 0) return "Empty";
        return string.Join(", ", common);
    }
}
`,
      javascript: `function intersectionOfArrays(arr1, arr2) {
  const s1 = new Set(arr1);
  const common = Array.from(new Set(arr2.filter(x => s1.has(x)))).sort((a, b) => a - b);
  if (common.length === 0) return "Empty";
  return common.join(', ');
}
`
    },
    runSimulation: (args) => {
      const [arr1, arr2] = args;
      const s1 = new Set(arr1);
      const common = Array.from(new Set(arr2.filter(x => s1.has(x)))).sort((a, b) => a - b);
      if (common.length === 0) return "Empty";
      return common.join(', ');
    }
  }

];

export const dsaPracticeQuestions = DSA_PRACTICE_QUESTIONS;
export default DSA_PRACTICE_QUESTIONS;

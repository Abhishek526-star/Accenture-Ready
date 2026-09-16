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
        expectedOutput: '2',
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

,
  // =========================================================================
  // Q21. Large Small Sum
  // =========================================================================
  {
    id: 'dsa-p-21',
    qno: 21,
    title: 'Large Small Sum',
    difficulty: 'Medium',
    category: 'Arrays',
    topic: 'Array Index Parity & Sorting',
    company: 'Accenture',
    pattern: 'Parity Splitting + Sorting',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(N)',
    rewardXp: 50,
    targetMins: 15,
    description: 'You are given an integer array arr.\n\nImplement LargeSmallSum(arr) to return:\n- The second largest element at even positions\n- Plus the second smallest element at odd positions\n\nImportant rules:\n1. Array indexing starts from 0 (index 0 is an even position).\n2. All array elements are unique.\n3. If the array is empty or its length is <= 3, return 0.',
    rules: [
      'If arr.length <= 3, return 0 immediately.',
      'Collect elements at even indices (0, 2, 4...) and find the second largest.',
      'Collect elements at odd indices (1, 3, 5...) and find the second smallest.',
      'Return (secondLargestEven + secondSmallestOdd).'
    ],
    coreLogic: 'Separate elements by index parity into two lists. Sort both lists in ascending order. Second largest of even list is at (even.length - 2). Second smallest of odd list is at index 1. Return their sum.',
    dryRun: [
      { step: 'Even indices [0, 2, 4]', elements: '[3, 1, 5]', sorted: '[1, 3, 5]', secondLargest: 3 },
      { step: 'Odd indices [1, 3, 5]', elements: '[2, 7, 4]', sorted: '[2, 4, 7]', secondSmallest: 4 },
      { step: 'Final Result', formula: '3 + 4', result: 7 }
    ],
    constraints: [
      '0 <= arr.length <= 10^5',
      '-10^9 <= arr[i] <= 10^9',
      'All array elements are unique'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [3, 2, 1, 7, 5, 4]',
        args: [[3, 2, 1, 7, 5, 4]],
        expectedOutput: '7',
        explanation: 'Even [3, 1, 5] -> 2nd largest 3. Odd [2, 7, 4] -> 2nd smallest 4. 3 + 4 = 7.'
      },
      {
        id: 'tc-2',
        name: 'Odd-Length Array',
        input: 'arr = [1, 8, 0, 2, 3, 5, 6]',
        args: [[1, 8, 0, 2, 3, 5, 6]],
        expectedOutput: '8',
        explanation: 'Even [1, 0, 3, 6] -> 2nd largest 3. Odd [8, 2, 5] -> 2nd smallest 5. 3 + 5 = 8.'
      },
      {
        id: 'tc-3',
        name: 'Length <= 3 Boundary',
        input: 'arr = [1, 2, 3]',
        args: [[1, 2, 3]],
        expectedOutput: '0',
        explanation: 'Length <= 3 returns 0.'
      },
      {
        id: 'tc-4',
        name: 'Size 4 Minimal Valid',
        input: 'arr = [10, 20, 30, 40]',
        args: [[10, 20, 30, 40]],
        expectedOutput: '50',
        explanation: 'Even [10, 30] -> 2nd largest 10. Odd [20, 40] -> 2nd smallest 40. 10 + 40 = 50.'
      },
      {
        id: 'tc-5',
        name: '8 Unique Elements',
        input: 'arr = [4, 1, 9, 10, 2, 6, 8, 3]',
        args: [[4, 1, 9, 10, 2, 6, 8, 3]],
        expectedOutput: '11',
        explanation: 'Even [4, 9, 2, 8] -> sorted [2, 4, 8, 9] (2nd largest 8). Odd [1, 10, 6, 3] -> sorted [1, 3, 6, 10] (2nd smallest 3). 8 + 3 = 11.'
      }
    ],
    starterCode: {
      python: `def large_small_sum(arr):
    # TODO: Return 2nd largest at even index + 2nd smallest at odd index
    # Return 0 if len(arr) <= 3
    pass

if __name__ == "__main__":
    print(large_small_sum([3, 2, 1, 7, 5, 4])) # Expected: 7
`,
      java: `import java.util.*;

public class Solution {
    public static int largeSmallSum(int[] arr) {
        // TODO: Return 2nd largest at even index + 2nd smallest at odd index
        // Return 0 if arr.length <= 3
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

int largeSmallSum(const std::vector<int>& arr) {
    // TODO: Return 2nd largest at even index + 2nd smallest at odd index
    return 0;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int LargeSmallSum(int[] arr) {
        // TODO: Return 2nd largest at even index + 2nd smallest at odd index
        return 0;
    }
}
`,
      javascript: `function largeSmallSum(arr) {
  // TODO: Return 2nd largest at even index + 2nd smallest at odd index
  return 0;
}
`
    },
    solutions: {
      python: `def large_small_sum(arr):
    if len(arr) <= 3:
        return 0
    even = sorted([arr[i] for i in range(0, len(arr), 2)])
    odd = sorted([arr[i] for i in range(1, len(arr), 2)])
    return even[-2] + odd[1]
`,
      java: `import java.util.*;

public class Solution {
    public static int largeSmallSum(int[] arr) {
        if (arr == null || arr.length <= 3) return 0;
        List<Integer> even = new ArrayList<>();
        List<Integer> odd = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) even.add(arr[i]);
            else odd.add(arr[i]);
        }
        Collections.sort(even);
        Collections.sort(odd);
        return even.get(even.size() - 2) + odd.get(1);
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

int largeSmallSum(const std::vector<int>& arr) {
    if (arr.size() <= 3) return 0;
    std::vector<int> even, odd;
    for (size_t i = 0; i < arr.size(); i++) {
        if (i % 2 == 0) even.push_back(arr[i]);
        else odd.push_back(arr[i]);
    }
    std::sort(even.begin(), even.end());
    std::sort(odd.begin(), odd.end());
    return even[even.size() - 2] + odd[1];
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int LargeSmallSum(int[] arr) {
        if (arr == null || arr.Length <= 3) return 0;
        List<int> even = new List<int>();
        List<int> odd = new List<int>();
        for (int i = 0; i < arr.Length; i++) {
            if (i % 2 == 0) even.Add(arr[i]);
            else odd.Add(arr[i]);
        }
        even.Sort();
        odd.Sort();
        return even[even.Count - 2] + odd[1];
    }
}
`,
      javascript: `function largeSmallSum(arr) {
  if (!arr || arr.length <= 3) return 0;
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);
  return even[even.length - 2] + odd[1];
}
`
    },
    runSimulation: (args) => {
      const [arr] = args;
      if (!arr || arr.length <= 3) return 0;
      const even = [];
      const odd = [];
      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) even.push(arr[i]);
        else odd.push(arr[i]);
      }
      even.sort((a, b) => a - b);
      odd.sort((a, b) => a - b);
      return even[even.length - 2] + odd[1];
    }
  },

  // =========================================================================
  // Q22. Length of Last Word
  // =========================================================================
  {
    id: 'dsa-p-22',
    qno: 22,
    title: 'Length of Last Word',
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'String Traversal',
    company: 'Accenture',
    pattern: 'Right-to-Left Scan',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: 'Given a string containing words separated by spaces, find the length of the last word.\n\nLeading and trailing spaces may be present and should be ignored.',
    rules: [
      'Start scanning from the end of the string.',
      'Skip all trailing whitespace characters.',
      'Count characters until the next space or the start of the string.',
      'Return the count as an integer.'
    ],
    coreLogic: 'Scan right-to-left: first skip trailing spaces, then count characters until reaching a space or index < 0.',
    dryRun: [
      { step: 'Original string', value: '" I am a passionate Developer "' },
      { step: 'Ignore trailing space', pointer: 'At end of "Developer"' },
      { step: 'Count characters', word: '"Developer"', length: 9 }
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of English letters and spaces',
      'There is at least one word in s'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 's = " I am a passionate Developer "',
        args: [' I am a passionate Developer '],
        expectedOutput: '9',
        explanation: 'Last word is "Developer", length = 9.'
      },
      {
        id: 'tc-2',
        name: 'Simple Two Words',
        input: 's = "Hello World"',
        args: ['Hello World'],
        expectedOutput: '5',
        explanation: 'Last word is "World", length = 5.'
      },
      {
        id: 'tc-3',
        name: 'Multiple Interstitial Spaces',
        input: 's = "   fly me   to   the moon  "',
        args: ['   fly me   to   the moon  '],
        expectedOutput: '4',
        explanation: 'Last word is "moon", length = 4.'
      },
      {
        id: 'tc-4',
        name: 'Multi-word Lowercase',
        input: 's = "luffy is still joyboy"',
        args: ['luffy is still joyboy'],
        expectedOutput: '6',
        explanation: 'Last word is "joyboy", length = 6.'
      },
      {
        id: 'tc-5',
        name: 'Single Word No Spaces',
        input: 's = "Accenture"',
        args: ['Accenture'],
        expectedOutput: '9',
        explanation: 'Single word "Accenture", length = 9.'
      }
    ],
    starterCode: {
      python: `def length_of_last_word(s):
    # TODO: Return length of the last word in string s
    pass

if __name__ == "__main__":
    print(length_of_last_word(" I am a passionate Developer ")) # Expected: 9
`,
      java: `import java.util.*;

public class Solution {
    public static int lengthOfLastWord(String s) {
        // TODO: Return length of the last word in string s
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int lengthOfLastWord(const std::string& s) {
    // TODO: Return length of last word
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int LengthOfLastWord(string s) {
        // TODO: Return length of last word
        return 0;
    }
}
`,
      javascript: `function lengthOfLastWord(s) {
  // TODO: Return length of last word
  return 0;
}
`
    },
    solutions: {
      python: `def length_of_last_word(s):
    words = s.strip().split()
    return len(words[-1]) if words else 0
`,
      java: `import java.util.*;

public class Solution {
    public static int lengthOfLastWord(String s) {
        int i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == ' ') i--;
        int count = 0;
        while (i >= 0 && s.charAt(i) != ' ') {
            count++;
            i--;
        }
        return count;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int lengthOfLastWord(const std::string& s) {
    int i = (int)s.length() - 1;
    while (i >= 0 && s[i] == ' ') i--;
    int count = 0;
    while (i >= 0 && s[i] != ' ') {
        count++;
        i--;
    }
    return count;
}
`,
      csharp: `using System;

public class Solution {
    public static int LengthOfLastWord(string s) {
        int i = s.Length - 1;
        while (i >= 0 && s[i] == ' ') i--;
        int count = 0;
        while (i >= 0 && s[i] != ' ') {
            count++;
            i--;
        }
        return count;
    }
}
`,
      javascript: `function lengthOfLastWord(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') i--;
  let count = 0;
  while (i >= 0 && s[i] !== ' ') {
    count++;
    i--;
  }
  return count;
}
`
    },
    runSimulation: (args) => {
      const [s] = args;
      let i = s.length - 1;
      while (i >= 0 && s[i] === ' ') i--;
      let count = 0;
      while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
      }
      return count;
    }
  },

  // =========================================================================
  // Q23. Linked List Palindrome
  // =========================================================================
  {
    id: 'dsa-p-23',
    qno: 23,
    title: 'Linked List Palindrome',
    difficulty: 'Medium',
    category: 'Linked Lists',
    topic: 'Two Pointers / In-Place Reversal',
    company: 'Accenture',
    pattern: 'Slow & Fast Pointer + Half Reversal',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: 'Given a singly linked list represented as an array of values, determine whether the list is a palindrome.\n\nA palindrome reads the same forwards and backwards.',
    rules: [
      'Find the middle using slow and fast pointers.',
      'Reverse the second half of the linked list in-place.',
      'Compare values of the first half and second half.',
      'Return "true" if all matching values match, otherwise "false".'
    ],
    coreLogic: 'Find the midpoint with slow/fast pointers. Reverse the second half. Compare node values from front and reversed half.',
    dryRun: [
      { step: 'Initial List', values: '1 -> 2 -> 2 -> 1' },
      { step: 'Midpoint split', firstHalf: '1 -> 2', secondHalf: '2 -> 1' },
      { step: 'Reverse 2nd half', reversed: '1 -> 2' },
      { step: 'Compare halves', result: '1==1 and 2==2 -> true' }
    ],
    constraints: [
      '1 <= values.length <= 10^5',
      '0 <= Node.val <= 9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Even Length Palindrome',
        input: 'head = [1, 2, 2, 1]',
        args: [[1, 2, 2, 1]],
        expectedOutput: 'true',
        explanation: '1-2-2-1 reads identical forwards and backwards.'
      },
      {
        id: 'tc-2',
        name: 'Two Elements Non-Palindrome',
        input: 'head = [1, 2]',
        args: [[1, 2]],
        expectedOutput: 'false',
        explanation: '1 != 2, not a palindrome.'
      },
      {
        id: 'tc-3',
        name: 'Single Element',
        input: 'head = [1]',
        args: [[1]],
        expectedOutput: 'true',
        explanation: 'A single element is trivially a palindrome.'
      },
      {
        id: 'tc-4',
        name: 'Odd Length Palindrome',
        input: 'head = [1, 2, 3, 2, 1]',
        args: [[1, 2, 3, 2, 1]],
        expectedOutput: 'true',
        explanation: 'Symmetric around center 3.'
      },
      {
        id: 'tc-5',
        name: 'Strictly Increasing List',
        input: 'head = [1, 2, 3, 4, 5]',
        args: [[1, 2, 3, 4, 5]],
        expectedOutput: 'false',
        explanation: 'Non-symmetric values.'
      }
    ],
    starterCode: {
      python: `def is_palindrome_list(values):
    # TODO: Return "true" if values form a palindrome, else "false"
    pass

if __name__ == "__main__":
    print(is_palindrome_list([1, 2, 2, 1])) # Expected: true
`,
      java: `import java.util.*;

public class Solution {
    public static String isPalindromeList(int[] values) {
        // TODO: Return "true" if palindrome, else "false"
        return "false";
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string isPalindromeList(const std::vector<int>& values) {
    // TODO: Return "true" or "false"
    return "false";
}
`,
      csharp: `using System;

public class Solution {
    public static string IsPalindromeList(int[] values) {
        // TODO: Return "true" or "false"
        return "false";
    }
}
`,
      javascript: `function isPalindromeList(values) {
  // TODO: Return "true" or "false"
  return "false";
}
`
    },
    solutions: {
      python: `def is_palindrome_list(values):
    if not values:
        return "true"
    l, r = 0, len(values) - 1
    while l < r:
        if values[l] != values[r]:
            return "false"
        l += 1
        r -= 1
    return "true"
`,
      java: `import java.util.*;

public class Solution {
    public static String isPalindromeList(int[] values) {
        if (values == null || values.length <= 1) return "true";
        int l = 0, r = values.length - 1;
        while (l < r) {
            if (values[l] != values[r]) return "false";
            l++;
            r--;
        }
        return "true";
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string isPalindromeList(const std::vector<int>& values) {
    if (values.empty()) return "true";
    int l = 0, r = (int)values.size() - 1;
    while (l < r) {
        if (values[l] != values[r]) return "false";
        l++;
        r--;
    }
    return "true";
}
`,
      csharp: `using System;

public class Solution {
    public static string IsPalindromeList(int[] values) {
        if (values == null || values.Length <= 1) return "true";
        int l = 0, r = values.Length - 1;
        while (l < r) {
            if (values[l] != values[r]) return "false";
            l++;
            r--;
        }
        return "true";
    }
}
`,
      javascript: `function isPalindromeList(values) {
  if (!values || values.length <= 1) return "true";
  let l = 0, r = values.length - 1;
  while (l < r) {
    if (values[l] !== values[r]) return "false";
    l++;
    r--;
  }
  return "true";
}
`
    },
    runSimulation: (args) => {
      const [values] = args;
      if (!values || values.length <= 1) return "true";
      let l = 0, r = values.length - 1;
      while (l < r) {
        if (values[l] !== values[r]) return "false";
        l++;
        r--;
      }
      return "true";
    }
  },

  // =========================================================================
  // Q24. Longest Substring Without Repeating Characters
  // =========================================================================
  {
    id: 'dsa-p-24',
    qno: 24,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'Strings',
    topic: 'Sliding Window',
    company: 'Accenture',
    pattern: 'Sliding Window + Set',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(min(N, Sigma))',
    rewardXp: 50,
    targetMins: 15,
    description: 'Given a string s, find the length of the longest substring containing all unique characters without any duplicates.',
    rules: [
      'Maintain a sliding window [left, right] and a set of visited characters.',
      'Expand window by moving right pointer.',
      'If character at right pointer already exists in set, shrink window from left until duplicate is removed.',
      'Track and return maximum window size (right - left + 1).'
    ],
    coreLogic: 'Use sliding window with two pointers. Add characters to a HashSet. When a repeated character is encountered, remove from left until unique.',
    dryRun: [
      { step: 'Window "a"', set: '{a}', maxLen: 1 },
      { step: 'Window "ab"', set: '{a, b}', maxLen: 2 },
      { step: 'Window "abc"', set: '{a, b, c}', maxLen: 3 },
      { step: 'Duplicate "a" encountered', action: 'Shrink left past first "a"' }
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 's = "abcabcbb"',
        args: ['abcabcbb'],
        expectedOutput: '3',
        explanation: 'Longest unique substring is "abc", length = 3.'
      },
      {
        id: 'tc-2',
        name: 'All Identical Characters',
        input: 's = "bbbbb"',
        args: ['bbbbb'],
        expectedOutput: '1',
        explanation: 'Longest unique substring is "b", length = 1.'
      },
      {
        id: 'tc-3',
        name: 'Sub-pattern in Middle',
        input: 's = "pwwkew"',
        args: ['pwwkew'],
        expectedOutput: '3',
        explanation: 'Longest unique substring is "wke", length = 3.'
      },
      {
        id: 'tc-4',
        name: 'Empty String',
        input: 's = ""',
        args: [''],
        expectedOutput: '0',
        explanation: 'Length is 0.'
      },
      {
        id: 'tc-5',
        name: 'Two Unique Characters',
        input: 's = "au"',
        args: ['au'],
        expectedOutput: '2',
        explanation: '"au" has 2 unique characters.'
      }
    ],
    starterCode: {
      python: `def length_of_longest_substring(s):
    # TODO: Return length of longest substring without repeating characters
    pass

if __name__ == "__main__":
    print(length_of_longest_substring("abcabcbb")) # Expected: 3
`,
      java: `import java.util.*;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // TODO: Return length of longest substring without repeating characters
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm>

int lengthOfLongestSubstring(const std::string& s) {
    // TODO: Return length of longest unique substring
    return 0;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int LengthOfLongestSubstring(string s) {
        // TODO: Return length of longest unique substring
        return 0;
    }
}
`,
      javascript: `function lengthOfLongestSubstring(s) {
  // TODO: Return length of longest unique substring
  return 0;
}
`
    },
    solutions: {
      python: `def length_of_longest_substring(s):
    st = set()
    left = 0
    ans = 0
    for right in range(len(s)):
        while s[right] in st:
            st.remove(s[left])
            left += 1
        st.add(s[right])
        ans = max(ans, right - left + 1)
    return ans
`,
      java: `import java.util.*;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0, ans = 0;
        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm>

int lengthOfLongestSubstring(const std::string& s) {
    std::unordered_set<char> st;
    int left = 0, ans = 0;
    for (int right = 0; right < (int)s.length(); right++) {
        while (st.count(s[right])) {
            st.erase(s[left]);
            left++;
        }
        st.insert(s[right]);
        ans = std::max(ans, right - left + 1);
    }
    return ans;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int LengthOfLongestSubstring(string s) {
        HashSet<char> st = new HashSet<char>();
        int left = 0, ans = 0;
        for (int right = 0; right < s.Length; right++) {
            while (st.Contains(s[right])) {
                st.Remove(s[left]);
                left++;
            }
            st.Add(s[right]);
            ans = Math.Max(ans, right - left + 1);
        }
        return ans;
    }
}
`,
      javascript: `function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
`
    },
    runSimulation: (args) => {
      const [s] = args;
      const set = new Set();
      let left = 0, ans = 0;
      for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
          set.delete(s[left]);
          left++;
        }
        set.add(s[right]);
        ans = Math.max(ans, right - left + 1);
      }
      return ans;
    }
  },

  // =========================================================================
  // Q25. Longest Word
  // =========================================================================
  {
    id: 'dsa-p-25',
    qno: 25,
    title: 'Longest Word',
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'Array Traversal',
    company: 'Accenture',
    pattern: 'Linear Maximum Scan',
    timeComplexity: 'O(L)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: 'Given a list of words, find and return the longest word. If there are multiple words of the maximum length, return the first one that appears.',
    rules: [
      'Iterate through the array of words.',
      'Track the longest word seen so far.',
      'Update the answer only when current word length is strictly greater than longestWord.length.',
      'Return the longest word string.'
    ],
    coreLogic: 'Linear traversal comparing lengths. Only update when length is strictly greater to preserve first appearance order.',
    dryRun: [
      { word: '"yes"', length: 3, longest: '"yes"' },
      { word: '"no"', length: 2, longest: '"yes"' },
      { word: '"number"', length: 6, longest: '"number"' }
    ],
    constraints: [
      '1 <= words.length <= 10^4',
      '1 <= words[i].length <= 100'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'words = ["yes", "no", "number"]',
        args: [["yes", "no", "number"]],
        expectedOutput: 'number',
        explanation: '"number" has 6 letters, which is the longest.'
      },
      {
        id: 'tc-2',
        name: 'Fruits Array',
        input: 'words = ["apple", "banana", "pie"]',
        args: [["apple", "banana", "pie"]],
        expectedOutput: 'banana',
        explanation: '"banana" has length 6.'
      },
      {
        id: 'tc-3',
        name: 'Tie in Length',
        input: 'words = ["cat", "dog", "ant"]',
        args: [["cat", "dog", "ant"]],
        expectedOutput: 'cat',
        explanation: 'All length 3; "cat" is the first.'
      },
      {
        id: 'tc-4',
        name: 'Ascending Lengths',
        input: 'words = ["a", "ab", "abc", "abcd"]',
        args: [["a", "ab", "abc", "abcd"]],
        expectedOutput: 'abcd',
        explanation: '"abcd" is length 4.'
      },
      {
        id: 'tc-5',
        name: 'Professional Terms',
        input: 'words = ["developer", "coding", "assessment"]',
        args: [["developer", "coding", "assessment"]],
        expectedOutput: 'assessment',
        explanation: '"assessment" is 10 letters.'
      }
    ],
    starterCode: {
      python: `def longest_word(words):
    # TODO: Return the word with greatest length (first on tie)
    pass

if __name__ == "__main__":
    print(longest_word(["yes", "no", "number"])) # Expected: number
`,
      java: `import java.util.*;

public class Solution {
    public static String longestWord(String[] words) {
        // TODO: Return word with greatest length
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string longestWord(const std::vector<std::string>& words) {
    // TODO: Return word with greatest length
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string LongestWord(string[] words) {
        // TODO: Return word with greatest length
        return "";
    }
}
`,
      javascript: `function longestWord(words) {
  // TODO: Return word with greatest length
  return "";
}
`
    },
    solutions: {
      python: `def longest_word(words):
    ans = ""
    for w in words:
        if len(w) > len(ans):
            ans = w
    return ans
`,
      java: `import java.util.*;

public class Solution {
    public static String longestWord(String[] words) {
        String ans = "";
        for (String w : words) {
            if (w.length() > ans.length()) {
                ans = w;
            }
        }
        return ans;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::string longestWord(const std::vector<std::string>& words) {
    std::string ans = "";
    for (const auto& w : words) {
        if (w.length() > ans.length()) {
            ans = w;
        }
    }
    return ans;
}
`,
      csharp: `using System;

public class Solution {
    public static string LongestWord(string[] words) {
        string ans = "";
        foreach (string w in words) {
            if (w.Length > ans.Length) {
                ans = w;
            }
        }
        return ans;
    }
}
`,
      javascript: `function longestWord(words) {
  let ans = "";
  for (const w of words) {
    if (w.length > ans.length) {
      ans = w;
    }
  }
  return ans;
}
`
    },
    runSimulation: (args) => {
      const [words] = args;
      let ans = "";
      for (const w of words) {
        if (w.length > ans.length) {
          ans = w;
        }
      }
      return ans;
    }
  },

  // =========================================================================
  // Q26. Magical Numbers
  // =========================================================================
  {
    id: 'dsa-p-26',
    qno: 26,
    title: 'Magical Numbers',
    difficulty: 'Medium',
    category: 'Mathematics',
    topic: 'Binary Representation & Digit Sums',
    company: 'Accenture',
    pattern: 'Binary Conversion & Parity',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: 'Consider the numbers from 1 to N. For each number:\n1. Convert it to binary.\n2. Replace every binary 0 with 1.\n3. Replace every binary 1 with 2.\n4. Sum the resulting digits.\n\nA number is considered magical if this sum is odd. Count and return the number of magical numbers in [1, N].',
    rules: [
      'For each integer i from 1 to N, inspect its binary bits.',
      'Each bit 0 contributes 1, each bit 1 contributes 2.',
      'Check if sum % 2 == 1 (which is equivalent to: count of 0s in binary is odd).',
      'Return total count of magical numbers.'
    ],
    coreLogic: 'For each number, iterate through its binary bits. Sum the mapped values (0->1, 1->2). If sum is odd, increment count.',
    dryRun: [
      { num: 1, binary: '1', mapped: '2', sum: 2, magical: false },
      { num: 2, binary: '10', mapped: '2+1=3', sum: 3, magical: true },
      { num: 3, binary: '11', mapped: '2+2=4', sum: 4, magical: false },
      { num: 4, binary: '100', mapped: '2+1+1=4', sum: 4, magical: false },
      { num: 5, binary: '101', mapped: '2+1+2=5', sum: 5, magical: true },
      { totalMagical: '2 (numbers 2 and 5)' }
    ],
    constraints: [
      '1 <= N <= 10^5'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'N = 5',
        args: [5],
        expectedOutput: '2',
        explanation: '2 and 5 have odd digit sums after transformation. Total = 2.'
      },
      {
        id: 'tc-2',
        name: 'Minimal N = 1',
        input: 'N = 1',
        args: [1],
        expectedOutput: '0',
        explanation: '1 -> binary 1 -> 2 (even), count = 0.'
      },
      {
        id: 'tc-3',
        name: 'Range N = 10',
        input: 'N = 10',
        args: [10],
        expectedOutput: '4',
        explanation: 'Magical numbers in 1..10 are 2, 5, 6, 8. Count = 4.'
      },
      {
        id: 'tc-4',
        name: 'N = 2',
        input: 'N = 2',
        args: [2],
        expectedOutput: '1',
        explanation: 'Only 2 is magical.'
      },
      {
        id: 'tc-5',
        name: 'Larger Range N = 20',
        input: 'N = 20',
        args: [20],
        expectedOutput: '10',
        explanation: 'Magical numbers up to 20: 2, 5, 6, 8, 11, 13, 14, 17, 18, 20. Count = 10.'
      }
    ],
    starterCode: {
      python: `def count_magical(N):
    # TODO: Count numbers 1..N whose transformed binary digit sum is odd
    pass

if __name__ == "__main__":
    print(count_magical(5)) # Expected: 2
`,
      java: `import java.util.*;

public class Solution {
    public static int countMagical(int N) {
        // TODO: Count magical numbers from 1 to N
        return 0;
    }
}
`,
      cpp: `#include <iostream>

int countMagical(int N) {
    // TODO: Count magical numbers from 1 to N
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int CountMagical(int N) {
        // TODO: Count magical numbers from 1 to N
        return 0;
    }
}
`,
      javascript: `function countMagical(N) {
  // TODO: Count magical numbers from 1 to N
  return 0;
}
`
    },
    solutions: {
      python: `def count_magical(N):
    def is_magical(n):
        s = 0
        while n > 0:
            bit = n % 2
            s += 1 if bit == 0 else 2
            n //= 2
        return s % 2 == 1

    return sum(1 for i in range(1, N + 1) if is_magical(i))
`,
      java: `import java.util.*;

public class Solution {
    public static int countMagical(int N) {
        int count = 0;
        for (int i = 1; i <= N; i++) {
            int temp = i;
            int sum = 0;
            while (temp > 0) {
                int bit = temp % 2;
                sum += (bit == 0) ? 1 : 2;
                temp /= 2;
            }
            if (sum % 2 == 1) count++;
        }
        return count;
    }
}
`,
      cpp: `#include <iostream>

int countMagical(int N) {
    int count = 0;
    for (int i = 1; i <= N; i++) {
        int temp = i;
        int sum = 0;
        while (temp > 0) {
            int bit = temp % 2;
            sum += (bit == 0) ? 1 : 2;
            temp /= 2;
        }
        if (sum % 2 == 1) count++;
    }
    return count;
}
`,
      csharp: `using System;

public class Solution {
    public static int CountMagical(int N) {
        int count = 0;
        for (int i = 1; i <= N; i++) {
            int temp = i;
            int sum = 0;
            while (temp > 0) {
                int bit = temp % 2;
                sum += (bit == 0) ? 1 : 2;
                temp /= 2;
            }
            if (sum % 2 == 1) count++;
        }
        return count;
    }
}
`,
      javascript: `function countMagical(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    let temp = i;
    let sum = 0;
    while (temp > 0) {
      const bit = temp % 2;
      sum += (bit === 0) ? 1 : 2;
      temp = Math.floor(temp / 2);
    }
    if (sum % 2 === 1) count++;
  }
  return count;
}
`
    },
    runSimulation: (args) => {
      const [N] = args;
      let count = 0;
      for (let i = 1; i <= N; i++) {
        let temp = i;
        let sum = 0;
        while (temp > 0) {
          const bit = temp % 2;
          sum += (bit === 0) ? 1 : 2;
          temp = Math.floor(temp / 2);
        }
        if (sum % 2 === 1) count++;
      }
      return count;
    }
  },

  // =========================================================================
  // Q27. Matrix — Even/Odd Index Processing
  // =========================================================================
  {
    id: 'dsa-p-27',
    qno: 27,
    title: 'Matrix — Even/Odd Index Processing',
    difficulty: 'Medium',
    category: 'Arrays',
    topic: 'Array Parity & Sorting',
    company: 'Accenture',
    pattern: 'Index Parity + Sorting',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(N)',
    rewardXp: 50,
    targetMins: 15,
    description: 'An array is divided into two groups based on index parity: even indexes (0, 2, 4...) and odd indexes (1, 3, 5...). Both groups are sorted in ascending order.\n\nReturn the sum of the second largest element from the even-index group and the second largest element from the odd-index group. If the array length is <= 3, return 0.',
    rules: [
      'If arr.length <= 3, return 0.',
      'Separate elements at even positions into evenList and sort.',
      'Separate elements at odd positions into oddList and sort.',
      'Find second largest in evenList: evenList[evenList.length - 2].',
      'Find second largest in oddList: oddList[oddList.length - 2].',
      'Return their sum.'
    ],
    coreLogic: 'Distribute elements by index parity. Sort both lists ascending. Take the second largest from each (length - 2) and return their sum.',
    dryRun: [
      { step: 'Array', val: '[3, 4, 1, 7, 9]' },
      { step: 'Even indices [3, 1, 9]', sorted: '[1, 3, 9]', secondLargest: 3 },
      { step: 'Odd indices [4, 7]', sorted: '[4, 7]', secondLargest: 4 },
      { step: 'Sum', formula: '3 + 4 = 7' }
    ],
    constraints: [
      '0 <= arr.length <= 10^5',
      '-10^9 <= arr[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [3, 4, 1, 7, 9]',
        args: [[3, 4, 1, 7, 9]],
        expectedOutput: '7',
        explanation: 'Even [1, 3, 9] -> 2nd largest 3. Odd [4, 7] -> 2nd largest 4. 3 + 4 = 7.'
      },
      {
        id: 'tc-2',
        name: 'Length <= 3 Boundary',
        input: 'arr = [1, 2, 3]',
        args: [[1, 2, 3]],
        expectedOutput: '0',
        explanation: 'Length <= 3 returns 0.'
      },
      {
        id: 'tc-3',
        name: 'Even-Odd Split Size 6',
        input: 'arr = [10, 5, 20, 15, 30, 25]',
        args: [[10, 5, 20, 15, 30, 25]],
        expectedOutput: '35',
        explanation: 'Even [10, 20, 30] -> 2nd largest 20. Odd [5, 15, 25] -> 2nd largest 15. 20 + 15 = 35.'
      },
      {
        id: 'tc-4',
        name: 'Four Elements Minimal',
        input: 'arr = [5, 2, 4, 6]',
        args: [[5, 2, 4, 6]],
        expectedOutput: '6',
        explanation: 'Even [4, 5] -> 2nd largest 4. Odd [2, 6] -> 2nd largest 2. 4 + 2 = 6.'
      },
      {
        id: 'tc-5',
        name: 'Six Elements Distinct',
        input: 'arr = [7, 9, 3, 8, 11, 15]',
        args: [[7, 9, 3, 8, 11, 15]],
        expectedOutput: '16',
        explanation: 'Even [3, 7, 11] -> 2nd largest 7. Odd [8, 9, 15] -> 2nd largest 9. 7 + 9 = 16.'
      }
    ],
    starterCode: {
      python: `def matrix_problem(arr):
    # TODO: Return 2nd largest even-index element + 2nd largest odd-index element
    # Return 0 if len(arr) <= 3
    pass

if __name__ == "__main__":
    print(matrix_problem([3, 4, 1, 7, 9])) # Expected: 7
`,
      java: `import java.util.*;

public class Solution {
    public static int matrixProblem(int[] arr) {
        // TODO: Return 2nd largest even + 2nd largest odd
        // Return 0 if arr.length <= 3
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

int matrixProblem(const std::vector<int>& arr) {
    // TODO: Return 2nd largest even + 2nd largest odd
    return 0;
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int MatrixProblem(int[] arr) {
        // TODO: Return 2nd largest even + 2nd largest odd
        return 0;
    }
}
`,
      javascript: `function matrixProblem(arr) {
  // TODO: Return 2nd largest even + 2nd largest odd
  return 0;
}
`
    },
    solutions: {
      python: `def matrix_problem(arr):
    if len(arr) <= 3:
        return 0
    even = sorted([arr[i] for i in range(0, len(arr), 2)])
    odd = sorted([arr[i] for i in range(1, len(arr), 2)])
    if len(even) < 2 or len(odd) < 2:
        return 0
    return even[-2] + odd[-2]
`,
      java: `import java.util.*;

public class Solution {
    public static int matrixProblem(int[] arr) {
        if (arr == null || arr.length <= 3) return 0;
        List<Integer> even = new ArrayList<>();
        List<Integer> odd = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) even.add(arr[i]);
            else odd.add(arr[i]);
        }
        if (even.size() < 2 || odd.size() < 2) return 0;
        Collections.sort(even);
        Collections.sort(odd);
        return even.get(even.size() - 2) + odd.get(odd.size() - 2);
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

int matrixProblem(const std::vector<int>& arr) {
    if (arr.size() <= 3) return 0;
    std::vector<int> even, odd;
    for (size_t i = 0; i < arr.size(); i++) {
        if (i % 2 == 0) even.push_back(arr[i]);
        else odd.push_back(arr[i]);
    }
    if (even.size() < 2 || odd.size() < 2) return 0;
    std::sort(even.begin(), even.end());
    std::sort(odd.begin(), odd.end());
    return even[even.size() - 2] + odd[odd.size() - 2];
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static int MatrixProblem(int[] arr) {
        if (arr == null || arr.Length <= 3) return 0;
        List<int> even = new List<int>();
        List<int> odd = new List<int>();
        for (int i = 0; i < arr.Length; i++) {
            if (i % 2 == 0) even.Add(arr[i]);
            else odd.Add(arr[i]);
        }
        if (even.Count < 2 || odd.Count < 2) return 0;
        even.Sort();
        odd.Sort();
        return even[even.Count - 2] + odd[odd.Count - 2];
    }
}
`,
      javascript: `function matrixProblem(arr) {
  if (!arr || arr.length <= 3) return 0;
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  if (even.length < 2 || odd.length < 2) return 0;
  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);
  return even[even.length - 2] + odd[odd.length - 2];
}
`
    },
    runSimulation: (args) => {
      const [arr] = args;
      if (!arr || arr.length <= 3) return 0;
      const even = [];
      const odd = [];
      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) even.push(arr[i]);
        else odd.push(arr[i]);
      }
      if (even.length < 2 || odd.length < 2) return 0;
      even.sort((a, b) => a - b);
      odd.sort((a, b) => a - b);
      return even[even.length - 2] + odd[odd.length - 2];
    }
  },

  // =========================================================================
  // Q28. Maximum Exponent of 2
  // =========================================================================
  {
    id: 'dsa-p-28',
    qno: 28,
    title: 'Maximum Exponent of 2',
    difficulty: 'Medium',
    category: 'Mathematics',
    topic: 'Number Theory',
    company: 'Accenture',
    pattern: 'Factorization / Power of 2',
    timeComplexity: 'O((b - a) log b)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: 'Find the number between a and b (inclusive) that has the maximum exponent of 2 in its prime factorization.\n\nIf two or more numbers have the same maximum exponent of 2, return the smaller number.',
    rules: [
      'Iterate through every integer i from a to b inclusive.',
      'Count how many times i can be divided by 2 (exponent of 2).',
      'Track the maximum exponent and the corresponding number.',
      'In case of a tie, preserve the smaller number.'
    ],
    coreLogic: 'Count power of 2 for each number in [a, b]. Only update if exponent is strictly greater than current maximum.',
    dryRun: [
      { num: 7, exp: 0 },
      { num: 8, exp: 3 },
      { num: 9, exp: 0 },
      { num: 10, exp: 1 },
      { num: 11, exp: 0 },
      { num: 12, exp: 2 },
      { maxExp: 3, bestNumber: 8 }
    ],
    constraints: [
      '1 <= a < b <= 10^5'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'a = 7, b = 12',
        args: [7, 12],
        expectedOutput: '8',
        explanation: '8 = 2^3 has exponent 3, which is the highest in 7..12.'
      },
      {
        id: 'tc-2',
        name: 'Range [10, 15]',
        input: 'a = 10, b = 15',
        args: [10, 15],
        expectedOutput: '12',
        explanation: '12 = 2^2 * 3 has exponent 2.'
      },
      {
        id: 'tc-3',
        name: 'Small Range [1, 4]',
        input: 'a = 1, b = 4',
        args: [1, 4],
        expectedOutput: '4',
        explanation: '4 = 2^2 has exponent 2.'
      },
      {
        id: 'tc-4',
        name: 'Power of 2 in Range',
        input: 'a = 15, b = 17',
        args: [15, 17],
        expectedOutput: '16',
        explanation: '16 = 2^4 has exponent 4.'
      },
      {
        id: 'tc-5',
        name: 'Range [20, 30]',
        input: 'a = 20, b = 30',
        args: [20, 30],
        expectedOutput: '24',
        explanation: '24 = 2^3 * 3 has exponent 3.'
      }
    ],
    starterCode: {
      python: `def max_exponents(a, b):
    # TODO: Return number in [a, b] with max exponent of 2 (smaller on tie)
    pass

if __name__ == "__main__":
    print(max_exponents(7, 12)) # Expected: 8
`,
      java: `import java.util.*;

public class Solution {
    public static int maxExponents(int a, int b) {
        // TODO: Return number in [a, b] with max exponent of 2
        return a;
    }
}
`,
      cpp: `#include <iostream>

int maxExponents(int a, int b) {
    // TODO: Return number in [a, b] with max exponent of 2
    return a;
}
`,
      csharp: `using System;

public class Solution {
    public static int MaxExponents(int a, int b) {
        // TODO: Return number in [a, b] with max exponent of 2
        return a;
    }
}
`,
      javascript: `function maxExponents(a, b) {
  // TODO: Return number in [a, b] with max exponent of 2
  return a;
}
`
    },
    solutions: {
      python: `def max_exponents(a, b):
    ans = a
    max_exp = -1
    for i in range(a, b + 1):
        temp = i
        exp = 0
        while temp % 2 == 0:
            exp += 1
            temp //= 2
        if exp > max_exp:
            max_exp = exp
            ans = i
    return ans
`,
      java: `import java.util.*;

public class Solution {
    public static int maxExponents(int a, int b) {
        int ans = a;
        int maxExp = -1;
        for (int i = a; i <= b; i++) {
            int temp = i;
            int exp = 0;
            while (temp % 2 == 0) {
                exp++;
                temp /= 2;
            }
            if (exp > maxExp) {
                maxExp = exp;
                ans = i;
            }
        }
        return ans;
    }
}
`,
      cpp: `#include <iostream>

int maxExponents(int a, int b) {
    int ans = a;
    int maxExp = -1;
    for (int i = a; i <= b; i++) {
        int temp = i;
        int exp = 0;
        while (temp % 2 == 0) {
            exp++;
            temp /= 2;
        }
        if (exp > maxExp) {
            maxExp = exp;
            ans = i;
        }
    }
    return ans;
}
`,
      csharp: `using System;

public class Solution {
    public static int MaxExponents(int a, int b) {
        int ans = a;
        int maxExp = -1;
        for (int i = a; i <= b; i++) {
            int temp = i;
            int exp = 0;
            while (temp % 2 == 0) {
                exp++;
                temp /= 2;
            }
            if (exp > maxExp) {
                maxExp = exp;
                ans = i;
            }
        }
        return ans;
    }
}
`,
      javascript: `function maxExponents(a, b) {
  let ans = a;
  let maxExp = -1;
  for (let i = a; i <= b; i++) {
    let temp = i;
    let exp = 0;
    while (temp % 2 === 0) {
      exp++;
      temp /= 2;
    }
    if (exp > maxExp) {
      maxExp = exp;
      ans = i;
    }
  }
  return ans;
}
`
    },
    runSimulation: (args) => {
      const [a, b] = args;
      let ans = a;
      let maxExp = -1;
      for (let i = a; i <= b; i++) {
        let temp = i;
        let exp = 0;
        while (temp % 2 === 0) {
          exp++;
          temp /= 2;
        }
        if (exp > maxExp) {
          maxExp = exp;
          ans = i;
        }
      }
      return ans;
    }
  },

  // =========================================================================
  // Q29. Max Favourite Song
  // =========================================================================
  {
    id: 'dsa-p-29',
    qno: 29,
    title: 'Max Favourite Song',
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'Fixed Sliding Window',
    company: 'Accenture',
    pattern: 'Sliding Window (Size K)',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: 'Alice has a collection of songs represented by a string S, where each character represents a song. A playlist is a contiguous substring of exactly K characters.\n\nHer favourite song is "a". Find the maximum number of "a" characters that can occur in any substring of length K.',
    rules: [
      'If K >= S.length, count all "a" in S.',
      'Count occurrences of "a" in the first window of size K.',
      'Slide the window one character at a time: subtract leaving character and add entering character.',
      'Return the maximum count observed.'
    ],
    coreLogic: 'Maintain count of "a" in window of size K. Slide across S, updating count in O(1) time per character.',
    dryRun: [
      { window: '"acd"', countA: 1, max: 1 },
      { window: '"cdb"', countA: 0, max: 1 },
      { window: '"dba"', countA: 1, max: 1 },
      { window: '"baa"', countA: 2, max: 2 },
      { window: '"aac"', countA: 2, max: 2 },
      { window: '"aca"', countA: 2, max: 2 }
    ],
    constraints: [
      '1 <= K <= S.length <= 10^5',
      'S consists of lowercase English letters'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'S = "acdbaaca", K = 3',
        args: ["acdbaaca", 3],
        expectedOutput: '2',
        explanation: 'Substrings "baa", "aac", "aca" each have 2 "a" characters.'
      },
      {
        id: 'tc-2',
        name: 'All Favourite Songs',
        input: 'S = "aaaaa", K = 2',
        args: ["aaaaa", 2],
        expectedOutput: '2',
        explanation: 'Every 2-character substring has 2 "a"s.'
      },
      {
        id: 'tc-3',
        name: 'No Favourite Song',
        input: 'S = "bcdef", K = 3',
        args: ["bcdef", 3],
        expectedOutput: '0',
        explanation: 'Zero "a" characters present.'
      },
      {
        id: 'tc-4',
        name: 'Alternating Pattern',
        input: 'S = "abacaba", K = 4',
        args: ["abacaba", 4],
        expectedOutput: '2',
        explanation: 'Window of 4 can contain at most 2 "a"s.'
      },
      {
        id: 'tc-5',
        name: 'Single Character Match',
        input: 'S = "a", K = 1',
        args: ["a", 1],
        expectedOutput: '1',
        explanation: 'Single song is "a".'
      }
    ],
    starterCode: {
      python: `def max_favourite_song(S, K):
    # TODO: Return max number of 'a' in any substring of length K
    pass

if __name__ == "__main__":
    print(max_favourite_song("acdbaaca", 3)) # Expected: 2
`,
      java: `import java.util.*;

public class Solution {
    public static int maxFavouriteSong(String S, int K) {
        // TODO: Return max number of 'a' in substring of length K
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>

int maxFavouriteSong(const std::string& S, int K) {
    // TODO: Return max number of 'a' in substring of length K
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int MaxFavouriteSong(string S, int K) {
        // TODO: Return max number of 'a' in substring of length K
        return 0;
    }
}
`,
      javascript: `function maxFavouriteSong(S, K) {
  // TODO: Return max number of 'a' in substring of length K
  return 0;
}
`
    },
    solutions: {
      python: `def max_favourite_song(S, K):
    if K > len(S):
        return S.count('a')
    cur = S[:K].count('a')
    ans = cur
    for i in range(K, len(S)):
        if S[i - K] == 'a':
            cur -= 1
        if S[i] == 'a':
            cur += 1
        ans = max(ans, cur)
    return ans
`,
      java: `import java.util.*;

public class Solution {
    public static int maxFavouriteSong(String S, int K) {
        if (S == null || S.length() == 0 || K <= 0) return 0;
        int countA = 0;
        int limit = Math.min(K, S.length());
        for (int i = 0; i < limit; i++) {
            if (S.charAt(i) == 'a') countA++;
        }
        int ans = countA;
        for (int i = limit; i < S.length(); i++) {
            if (S.charAt(i - K) == 'a') countA--;
            if (S.charAt(i) == 'a') countA++;
            ans = Math.max(ans, countA);
        }
        return ans;
    }
}
`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>

int maxFavouriteSong(const std::string& S, int K) {
    if (S.empty() || K <= 0) return 0;
    int countA = 0;
    int limit = std::min((int)S.length(), K);
    for (int i = 0; i < limit; i++) {
        if (S[i] == 'a') countA++;
    }
    int ans = countA;
    for (int i = limit; i < (int)S.length(); i++) {
        if (S[i - K] == 'a') countA--;
        if (S[i] == 'a') countA++;
        ans = std::max(ans, countA);
    }
    return ans;
}
`,
      csharp: `using System;

public class Solution {
    public static int MaxFavouriteSong(string S, int K) {
        if (string.IsNullOrEmpty(S) || K <= 0) return 0;
        int countA = 0;
        int limit = Math.Min(S.Length, K);
        for (int i = 0; i < limit; i++) {
            if (S[i] == 'a') countA++;
        }
        int ans = countA;
        for (int i = limit; i < S.Length; i++) {
            if (S[i - K] == 'a') countA--;
            if (S[i] == 'a') countA++;
            ans = Math.Max(ans, countA);
        }
        return ans;
    }
}
`,
      javascript: `function maxFavouriteSong(S, K) {
  if (!S || S.length === 0 || K <= 0) return 0;
  let countA = 0;
  const limit = Math.min(S.length, K);
  for (let i = 0; i < limit; i++) {
    if (S[i] === 'a') countA++;
  }
  let ans = countA;
  for (let i = limit; i < S.length; i++) {
    if (S[i - K] === 'a') countA--;
    if (S[i] === 'a') countA++;
    ans = Math.max(ans, countA);
  }
  return ans;
}
`
    },
    runSimulation: (args) => {
      const [S, K] = args;
      if (!S || S.length === 0 || K <= 0) return 0;
      let countA = 0;
      const limit = Math.min(S.length, K);
      for (let i = 0; i < limit; i++) {
        if (S[i] === 'a') countA++;
      }
      let ans = countA;
      for (let i = limit; i < S.length; i++) {
        if (S[i - K] === 'a') countA--;
        if (S[i] === 'a') countA++;
        ans = Math.max(ans, countA);
      }
      return ans;
    }
  },

  // =========================================================================
  // Q30. Maximum Element and Index
  // =========================================================================
  {
    id: 'dsa-p-30',
    qno: 30,
    title: 'Maximum Element and Index',
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Array Traversal',
    company: 'Accenture',
    pattern: 'Single-Pass Max & Index',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: 'Given an array of integers and its length, find the maximum element and its 0-based index.\n\nReturn the maximum value and its index separated by a newline formatted as "maxElement\\nmaxIndex".',
    rules: [
      'Array indexing starts from 0.',
      'There is only one unique maximum element in the provided test cases.',
      'Return the maximum element and its index separated by a newline.',
      'Do not print extra messages.'
    ],
    coreLogic: 'Initialize maxElement with arr[0] and maxIndex with 0. Traverse from index 1. If arr[i] > maxElement, update both. Format as maxElement\\nmaxIndex.',
    dryRun: [
      { index: 0, val: 23, maxVal: 23, maxIdx: 0 },
      { index: 1, val: 45, maxVal: 45, maxIdx: 1 },
      { index: 2, val: 82, maxVal: 82, maxIdx: 2 },
      { index: 9, val: 86, maxVal: 86, maxIdx: 9 }
    ],
    constraints: [
      '1 <= length <= 10^5',
      '-10^9 <= arr[i] <= 10^9'
    ],
    testCases: [
      {
        id: 'tc-1',
        name: 'Given Example',
        input: 'arr = [23, 45, 82, 27, 66, 12, 78, 13, 71, 86], length = 10',
        args: [[23, 45, 82, 27, 66, 12, 78, 13, 71, 86], 10],
        expectedOutput: '86\n9',
        explanation: 'Max element is 86 at index 9.'
      },
      {
        id: 'tc-2',
        name: 'First Element is Max',
        input: 'arr = [5, 1, 2, 3], length = 4',
        args: [[5, 1, 2, 3], 4],
        expectedOutput: '5\n0',
        explanation: 'Max is 5 at index 0.'
      },
      {
        id: 'tc-3',
        name: 'Middle Element Max',
        input: 'arr = [10, 20, 15], length = 3',
        args: [[10, 20, 15], 3],
        expectedOutput: '20\n1',
        explanation: 'Max is 20 at index 1.'
      },
      {
        id: 'tc-4',
        name: 'Single Element Array',
        input: 'arr = [100], length = 1',
        args: [[100], 1],
        expectedOutput: '100\n0',
        explanation: 'Single element 100 at index 0.'
      },
      {
        id: 'tc-5',
        name: 'Negative Numbers',
        input: 'arr = [-10, -5, -2, -8], length = 4',
        args: [[-10, -5, -2, -8], 4],
        expectedOutput: '-2\n2',
        explanation: 'Max is -2 at index 2.'
      }
    ],
    starterCode: {
      python: `def max_in_array(arr, length):
    # TODO: Return max element and index separated by newline, e.g. f"{max_elem}\\n{max_idx}"
    pass

if __name__ == "__main__":
    print(max_in_array([23, 45, 82, 27, 66, 12, 78, 13, 71, 86], 10))
`,
      java: `import java.util.*;

public class Solution {
    public static String maxInArray(int[] arr, int length) {
        // TODO: Return max element and index separated by newline: maxVal + "\\n" + maxIdx
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string maxInArray(int arr[], int length) {
    // TODO: Return maxVal and maxIdx separated by newline
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string MaxInArray(int[] arr, int length) {
        // TODO: Return $"{maxVal}\\n{maxIdx}"
        return "";
    }
}
`,
      javascript: `function maxInArray(arr, length) {
  // TODO: Return \`\${maxVal}\\n\${maxIdx}\`
  return "";
}
`
    },
    solutions: {
      python: `def max_in_array(arr, length):
    max_elem = arr[0]
    max_idx = 0
    for i in range(1, length):
        if arr[i] > max_elem:
            max_elem = arr[i]
            max_idx = i
    return f"{max_elem} {max_idx}"
`,
      java: `import java.util.*;

public class Solution {
    public static String maxInArray(int[] arr, int length) {
        int maxVal = arr[0];
        int maxIdx = 0;
        for (int i = 1; i < length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
                maxIdx = i;
            }
        }
        return maxVal + "\n" + maxIdx;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string maxInArray(int arr[], int length) {
    int maxVal = arr[0];
    int maxIdx = 0;
    for (int i = 1; i < length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIdx = i;
        }
    }
    return std::to_string(maxVal) + "\n" + std::to_string(maxIdx);
}
`,
      csharp: `using System;

public class Solution {
    public static string MaxInArray(int[] arr, int length) {
        int maxVal = arr[0];
        int maxIdx = 0;
        for (int i = 1; i < length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
                maxIdx = i;
            }
        }
        return $"{maxVal}\n{maxIdx}";
    }
}
`,
      javascript: `function maxInArray(arr, length) {
  let maxVal = arr[0];
  let maxIdx = 0;
  for (let i = 1; i < length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      maxIdx = i;
    }
  }
  return maxVal + "\\n" + maxIdx;
}
`
    },
    runSimulation: (args) => {
      const [arr, length] = args;
      let maxVal = arr[0];
      let maxIdx = 0;
      for (let i = 1; i < length; i++) {
        if (arr[i] > maxVal) {
          maxVal = arr[i];
          maxIdx = i;
        }
      }
      return maxVal + '\n' + maxIdx;
    }
  },

  // =========================================================================
  // Q31. Merge Sorted Arrays
  // =========================================================================
  {
    id: 'dsa-p-31',
    qno: 31,
    title: "Merge Sorted Arrays",
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Two Pointers / Array Merging',
    company: 'Accenture',
    pattern: 'Two Pointers',
    timeComplexity: 'O(N + M)',
    spaceComplexity: 'O(N + M)',
    rewardXp: 50,
    targetMins: 12,
    description: "Given two sorted integer arrays `a` and `b`, merge them into a single sorted array.\n\nSince both input arrays are already sorted in non-decreasing order, combine all elements using the two-pointer technique to achieve linear time complexity without re-sorting.",
    rules: [
      "Both input arrays are sorted in non-decreasing order.",
      "Duplicates across or within arrays must be preserved in the merged output.",
      "Return the merged array in non-decreasing sorted order."
],
    coreLogic: "Maintain two pointers `i` and `j` at the start of arrays `a` and `b`. Compare `a[i]` and `b[j]`, append the smaller element to the result and advance its pointer. When one array is exhausted, append all remaining elements from the other array.",
    dryRun: [
      {
            "step": "Initialize",
            "i": 0,
            "j": 0,
            "result": "[]"
      },
      {
            "step": "Compare a[0]=1, b[0]=2",
            "pick": 1,
            "i": 1,
            "j": 0
      },
      {
            "step": "Compare a[1]=2, b[0]=2",
            "pick": 2,
            "i": 2,
            "j": 0
      },
      {
            "step": "Final Result",
            "result": "[1, 2, 2, 3, 4, 4, 5, 6, 8, 10]"
      }
],
    constraints: [
      "0 <= a.length, b.length <= 10^5",
      "-10^9 <= a[i], b[j] <= 10^9"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example",
            "input": "a = [1, 2, 3, 4, 5], b = [2, 4, 6, 8, 10]",
            "args": [
                  [
                        1,
                        2,
                        3,
                        4,
                        5
                  ],
                  [
                        2,
                        4,
                        6,
                        8,
                        10
                  ]
            ],
            "expectedOutput": "[1, 2, 2, 3, 4, 4, 5, 6, 8, 10]",
            "explanation": "Merged elements in sorted order: [1, 2, 2, 3, 4, 4, 5, 6, 8, 10]."
      },
      {
            "id": "tc-2",
            "name": "Alternating Elements",
            "input": "a = [1, 3, 5], b = [2, 4, 6]",
            "args": [
                  [
                        1,
                        3,
                        5
                  ],
                  [
                        2,
                        4,
                        6
                  ]
            ],
            "expectedOutput": "[1, 2, 3, 4, 5, 6]",
            "explanation": "Strictly alternating elements merged into [1, 2, 3, 4, 5, 6]."
      },
      {
            "id": "tc-3",
            "name": "First Array Empty",
            "input": "a = [], b = [1, 2, 3]",
            "args": [
                  [],
                  [
                        1,
                        2,
                        3
                  ]
            ],
            "expectedOutput": "[1, 2, 3]",
            "explanation": "Empty array merged with [1, 2, 3] gives [1, 2, 3]."
      },
      {
            "id": "tc-4",
            "name": "Second Array Empty",
            "input": "a = [5, 10], b = []",
            "args": [
                  [
                        5,
                        10
                  ],
                  []
            ],
            "expectedOutput": "[5, 10]",
            "explanation": "Array [5, 10] merged with empty array gives [5, 10]."
      },
      {
            "id": "tc-5",
            "name": "Identical Duplicate Values",
            "input": "a = [2, 2, 2], b = [2, 2]",
            "args": [
                  [
                        2,
                        2,
                        2
                  ],
                  [
                        2,
                        2
                  ]
            ],
            "expectedOutput": "[2, 2, 2, 2, 2]",
            "explanation": "All duplicate 2s merged together into [2, 2, 2, 2, 2]."
      }
],
    starterCode: {
      python: "def merge_sorted_arrays(a, b):\n    # TODO: Merge two sorted arrays and return the combined sorted list\n    pass\n\nif __name__ == \"__main__\":\n    print(merge_sorted_arrays([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int[] mergeSortedArrays(int[] a, int[] b) {\n        // TODO: Merge two sorted arrays and return combined sorted array\n        return new int[]{};\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n\nstd::vector<int> mergeSortedArrays(const std::vector<int>& a, const std::vector<int>& b) {\n    // TODO: Merge two sorted vectors\n    return {};\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int[] MergeSortedArrays(int[] a, int[] b) {\n        // TODO: Merge two sorted arrays\n        return new int[0];\n    }\n}\n",
      javascript: "function mergeSortedArrays(a, b) {\n  // TODO: Merge two sorted arrays\n  return [];\n}\n"
    },
    solutions: {
      python: "def merge_sorted_arrays(a, b):\n    result = []\n    i, j = 0, 0\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            result.append(a[i])\n            i += 1\n        else:\n            result.append(b[j])\n            j += 1\n    while i < len(a):\n        result.append(a[i])\n        i += 1\n    while j < len(b):\n        result.append(b[j])\n        j += 1\n    return result\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int[] mergeSortedArrays(int[] a, int[] b) {\n        int[] result = new int[a.length + b.length];\n        int i = 0, j = 0, k = 0;\n        while (i < a.length && j < b.length) {\n            if (a[i] <= b[j]) {\n                result[k++] = a[i++];\n            } else {\n                result[k++] = b[j++];\n            }\n        }\n        while (i < a.length) result[k++] = a[i++];\n        while (j < b.length) result[k++] = b[j++];\n        return result;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n\nstd::vector<int> mergeSortedArrays(const std::vector<int>& a, const std::vector<int>& b) {\n    std::vector<int> result;\n    int i = 0, j = 0;\n    while (i < a.size() && j < b.size()) {\n        if (a[i] <= b[j]) {\n            result.push_back(a[i++]);\n        } else {\n            result.push_back(b[j++]);\n        }\n    }\n    while (i < a.size()) result.push_back(a[i++]);\n    while (j < b.size()) result.push_back(b[j++]);\n    return result;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int[] MergeSortedArrays(int[] a, int[] b) {\n        int[] result = new int[a.Length + b.Length];\n        int i = 0, j = 0, k = 0;\n        while (i < a.Length && j < b.Length) {\n            if (a[i] <= b[j]) {\n                result[k++] = a[i++];\n            } else {\n                result[k++] = b[j++];\n            }\n        }\n        while (i < a.Length) result[k++] = a[i++];\n        while (j < b.Length) result[k++] = b[j++];\n        return result;\n    }\n}\n",
      javascript: "function mergeSortedArrays(a, b) {\n  const result = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    if (a[i] <= b[j]) {\n      result.push(a[i++]);\n    } else {\n      result.push(b[j++]);\n    }\n  }\n  while (i < a.length) result.push(a[i++]);\n  while (j < b.length) result.push(b[j++]);\n  return result;\n}\n"
    },
    runSimulation: (args) => {
      const [a, b] = args;
      const res = [];
      let i = 0, j = 0;
      while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) res.push(a[i++]);
        else res.push(b[j++]);
      }
      while (i < a.length) res.push(a[i++]);
      while (j < b.length) res.push(b[j++]);
      return '[' + res.join(', ') + ']';
    }
  },

  // =========================================================================
  // Q32. Most Frequent Vowel
  // =========================================================================
  {
    id: 'dsa-p-32',
    qno: 32,
    title: "Most Frequent Vowel",
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'Vowel Frequency / Hash Map',
    company: 'Accenture',
    pattern: 'Frequency Counting',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: "Given a string `str`, find and return the vowel (`a`, `e`, `i`, `o`, `u`) that occurs most frequently in the string.\n\nThe input string is guaranteed to have a unique most frequent vowel in the provided assessment cases.",
    rules: [
      "Only consider lowercase English vowels: a, e, i, o, u.",
      "Ignore all consonants and non-vowel characters.",
      "There is a unique vowel with the highest frequency in test cases."
],
    coreLogic: "Count occurrences of each vowel using an array or map for indices 0..4 corresponding to a, e, i, o, u. Find the index with the maximum count and return the corresponding vowel character.",
    dryRun: [
      {
            "step": "String",
            "val": "\"xyuaab\""
      },
      {
            "step": "Vowel counts",
            "a": 2,
            "e": 0,
            "i": 0,
            "o": 0,
            "u": 1
      },
      {
            "step": "Maximum count",
            "vowel": "a",
            "count": 2
      }
],
    constraints: [
      "1 <= str.length <= 10^5",
      "str consists of lowercase English letters"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example",
            "input": "str = \"xyuaab\"",
            "args": [
                  "xyuaab"
            ],
            "expectedOutput": "a",
            "explanation": "Vowel \"a\" appears 2 times, \"u\" appears 1 time. Most frequent is \"a\"."
      },
      {
            "id": "tc-2",
            "name": "Vowel \"u\" Dominant",
            "input": "str = \"beautiful\"",
            "args": [
                  "beautiful"
            ],
            "expectedOutput": "u",
            "explanation": "\"u\" appears 2 times, \"e\", \"a\", \"i\" appear 1 time each. Most frequent is \"u\"."
      },
      {
            "id": "tc-3",
            "name": "Vowel \"e\" Dominant",
            "input": "str = \"accenture\"",
            "args": [
                  "accenture"
            ],
            "expectedOutput": "e",
            "explanation": "\"e\" appears 2 times, \"a\" and \"u\" appear 1 time each. Most frequent is \"e\"."
      },
      {
            "id": "tc-4",
            "name": "Vowel \"i\" Dominant",
            "input": "str = \"mississippi\"",
            "args": [
                  "mississippi"
            ],
            "expectedOutput": "i",
            "explanation": "\"i\" appears 4 times. Most frequent is \"i\"."
      },
      {
            "id": "tc-5",
            "name": "Single Vowel Repeated",
            "input": "str = \"aeiouu\"",
            "args": [
                  "aeiouu"
            ],
            "expectedOutput": "u",
            "explanation": "\"u\" appears 2 times while all other vowels appear once. Most frequent is \"u\"."
      }
],
    starterCode: {
      python: "def most_frequent_vowel(s: str) -> str:\n    # TODO: Return the most frequent vowel in string s\n    pass\n\nif __name__ == \"__main__\":\n    print(most_frequent_vowel(\"xyuaab\"))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static char mostFrequentVowel(String str) {\n        // TODO: Return the most frequent vowel character\n        return ' ';\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n\nchar mostFrequentVowel(const std::string& str) {\n    // TODO: Return most frequent vowel\n    return '\\0';\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static char MostFrequentVowel(string str) {\n        // TODO: Return most frequent vowel\n        return ' ';\n    }\n}\n",
      javascript: "function mostFrequentVowel(str) {\n  // TODO: Return most frequent vowel\n  return '';\n}\n"
    },
    solutions: {
      python: "def most_frequent_vowel(s: str) -> str:\n    counts = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}\n    for c in s:\n        if c in counts:\n            counts[c] += 1\n    return max(counts, key=counts.get)\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static char mostFrequentVowel(String str) {\n        int[] freq = new int[5];\n        for (char c : str.toCharArray()) {\n            if (c == 'a') freq[0]++;\n            else if (c == 'e') freq[1]++;\n            else if (c == 'i') freq[2]++;\n            else if (c == 'o') freq[3]++;\n            else if (c == 'u') freq[4]++;\n        }\n        char[] vowels = {'a', 'e', 'i', 'o', 'u'};\n        int maxFreq = -1;\n        char ans = 'a';\n        for (int i = 0; i < 5; i++) {\n            if (freq[i] > maxFreq) {\n                maxFreq = freq[i];\n                ans = vowels[i];\n            }\n        }\n        return ans;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n\nchar mostFrequentVowel(const std::string& str) {\n    int freq[5] = {0};\n    for (char c : str) {\n        if (c == 'a') freq[0]++;\n        else if (c == 'e') freq[1]++;\n        else if (c == 'i') freq[2]++;\n        else if (c == 'o') freq[3]++;\n        else if (c == 'u') freq[4]++;\n    }\n    std::string vowels = \"aeiou\";\n    int maxFreq = -1;\n    char ans = 'a';\n    for (int i = 0; i < 5; i++) {\n        if (freq[i] > maxFreq) {\n            maxFreq = freq[i];\n            ans = vowels[i];\n        }\n    }\n    return ans;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static char MostFrequentVowel(string str) {\n        int[] freq = new int[5];\n        foreach (char c in str) {\n            if (c == 'a') freq[0]++;\n            else if (c == 'e') freq[1]++;\n            else if (c == 'i') freq[2]++;\n            else if (c == 'o') freq[3]++;\n            else if (c == 'u') freq[4]++;\n        }\n        char[] vowels = {'a', 'e', 'i', 'o', 'u'};\n        int maxFreq = -1;\n        char ans = 'a';\n        for (int i = 0; i < 5; i++) {\n            if (freq[i] > maxFreq) {\n                maxFreq = freq[i];\n                ans = vowels[i];\n            }\n        }\n        return ans;\n    }\n}\n",
      javascript: "function mostFrequentVowel(str) {\n  const freq = { a: 0, e: 0, i: 0, o: 0, u: 0 };\n  for (const c of str) {\n    if (c in freq) freq[c]++;\n  }\n  let maxCount = -1;\n  let ans = 'a';\n  for (const v of ['a', 'e', 'i', 'o', 'u']) {\n    if (freq[v] > maxCount) {\n      maxCount = freq[v];\n      ans = v;\n    }\n  }\n  return ans;\n}\n"
    },
    runSimulation: (args) => {
      const [str] = args;
      const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
      for (const c of str) {
        if (c in counts) counts[c]++;
      }
      let maxCount = -1, ans = 'a';
      for (const v of ['a', 'e', 'i', 'o', 'u']) {
        if (counts[v] > maxCount) {
          maxCount = counts[v];
          ans = v;
        }
      }
      return ans;
    }
  },

  // =========================================================================
  // Q33. Move Hyphens to Front
  // =========================================================================
  {
    id: 'dsa-p-33',
    qno: 33,
    title: "Move Hyphens to Front",
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'String Partitioning / Relative Order',
    company: 'Accenture',
    pattern: 'Two-Pass / Partition',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    rewardXp: 50,
    targetMins: 10,
    description: "Implement a function to move all hyphen characters (`-`) to the front of a string while maintaining the relative order of all other non-hyphen characters.\n\nIf the string contains no hyphens or is empty, return it unchanged.",
    rules: [
      "All hyphens must appear at the beginning of the string.",
      "The relative order of all alphabetic characters must remain strictly preserved.",
      "If the string is empty or has no hyphens, return it as is."
],
    coreLogic: "Traverse the string and partition into two builders: one for hyphen characters and one for non-hyphen characters. Concatenate the hyphens followed by the non-hyphen characters.",
    dryRun: [
      {
            "step": "Input",
            "val": "\"String-Compare\""
      },
      {
            "step": "Hyphens",
            "val": "\"-\""
      },
      {
            "step": "Letters",
            "val": "\"StringCompare\""
      },
      {
            "step": "Combined",
            "val": "\"-StringCompare\""
      }
],
    constraints: [
      "0 <= str.length <= 10^5",
      "str contains English letters and hyphens"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example 1",
            "input": "str = \"String-Compare\"",
            "args": [
                  "String-Compare"
            ],
            "expectedOutput": "-StringCompare",
            "explanation": "Single hyphen moved to front: \"-StringCompare\"."
      },
      {
            "id": "tc-2",
            "name": "Given Example 2 (Multiple Hyphens)",
            "input": "str = \"Move-Hyphens-to-Front\"",
            "args": [
                  "Move-Hyphens-to-Front"
            ],
            "expectedOutput": "---MoveHyphenstoFront",
            "explanation": "3 hyphens moved to front: \"---MoveHyphenstoFront\"."
      },
      {
            "id": "tc-3",
            "name": "Alternating Letters and Hyphens",
            "input": "str = \"a-b-c-d\"",
            "args": [
                  "a-b-c-d"
            ],
            "expectedOutput": "---abcd",
            "explanation": "3 hyphens placed in front, followed by \"abcd\"."
      },
      {
            "id": "tc-4",
            "name": "No Hyphens Present",
            "input": "str = \"AccentureExam\"",
            "args": [
                  "AccentureExam"
            ],
            "expectedOutput": "AccentureExam",
            "explanation": "No hyphens in string, remains \"AccentureExam\"."
      },
      {
            "id": "tc-5",
            "name": "Only Hyphens",
            "input": "str = \"---\"",
            "args": [
                  "---"
            ],
            "expectedOutput": "---",
            "explanation": "String of 3 hyphens remains \"---\"."
      }
],
    starterCode: {
      python: "def move_hyphens(s: str) -> str:\n    # TODO: Move all hyphens to the front while preserving relative order of characters\n    pass\n\nif __name__ == \"__main__\":\n    print(move_hyphens(\"String-Compare\"))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static String moveHyphens(String str) {\n        // TODO: Move all hyphens to front\n        return \"\";\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n\nstd::string moveHyphens(const std::string& str) {\n    // TODO: Move all hyphens to front\n    return \"\";\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static string MoveHyphens(string str) {\n        // TODO: Move all hyphens to front\n        return \"\";\n    }\n}\n",
      javascript: "function moveHyphens(str) {\n  // TODO: Move all hyphens to front\n  return \"\";\n}\n"
    },
    solutions: {
      python: "def move_hyphens(s: str) -> str:\n    hyphens = []\n    others = []\n    for c in s:\n        if c == '-':\n            hyphens.append(c)\n        else:\n            others.append(c)\n    return \"\".join(hyphens) + \"\".join(others)\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static String moveHyphens(String str) {\n        if (str == null) return \"\";\n        StringBuilder hyphens = new StringBuilder();\n        StringBuilder letters = new StringBuilder();\n        for (char c : str.toCharArray()) {\n            if (c == '-') hyphens.append(c);\n            else letters.append(c);\n        }\n        return hyphens.append(letters).toString();\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n\nstd::string moveHyphens(const std::string& str) {\n    std::string hyphens = \"\";\n    std::string letters = \"\";\n    for (char c : str) {\n        if (c == '-') hyphens += c;\n        else letters += c;\n    }\n    return hyphens + letters;\n}\n",
      csharp: "using System;\nusing System.Text;\n\npublic class Solution {\n    public static string MoveHyphens(string str) {\n        if (str == null) return \"\";\n        StringBuilder hyphens = new StringBuilder();\n        StringBuilder letters = new StringBuilder();\n        foreach (char c in str) {\n            if (c == '-') hyphens.Append(c);\n            else letters.Append(c);\n        }\n        return hyphens.Append(letters).ToString();\n    }\n}\n",
      javascript: "function moveHyphens(str) {\n  if (!str) return \"\";\n  let hyphens = \"\";\n  let letters = \"\";\n  for (const c of str) {\n    if (c === '-') hyphens += c;\n    else letters += c;\n  }\n  return hyphens + letters;\n}\n"
    },
    runSimulation: (args) => {
      const [str] = args;
      if (!str) return "";
      let hyphens = "", letters = "";
      for (const c of str) {
        if (c === '-') hyphens += c;
        else letters += c;
      }
      return hyphens + letters;
    }
  },

  // =========================================================================
  // Q34. Negative Stock Price
  // =========================================================================
  {
    id: 'dsa-p-34',
    qno: 34,
    title: "Negative Stock Price",
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Array Traversal / Trend Analysis',
    company: 'Accenture',
    pattern: 'Single-Pass Comparison',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: "An integer array `A` represents daily closing stock market prices. Find the total number of days where the stock market price decreased compared to the previous day (i.e., `A[i] < A[i - 1]`), indicating negative growth.",
    rules: [
      "Compare each day with the immediately preceding day: A[i] < A[i - 1].",
      "For arrays with length <= 1, return 0 as no previous day exists for comparison.",
      "Return the total count of decrease events."
],
    coreLogic: "Traverse from index 1 to the end of the array. If `A[i] < A[i - 1]`, increment the decrease counter.",
    dryRun: [
      {
            "step": "Day 1 vs 0",
            "a": "3 vs 2",
            "trend": "Increase"
      },
      {
            "step": "Day 2 vs 1",
            "a": "1 vs 3",
            "trend": "Decrease (count=1)"
      },
      {
            "step": "Day 3 vs 2",
            "a": "4 vs 1",
            "trend": "Increase"
      },
      {
            "step": "Day 4 vs 3",
            "a": "5 vs 4",
            "trend": "Increase"
      },
      {
            "step": "Day 5 vs 4",
            "a": "2 vs 5",
            "trend": "Decrease (count=2)"
      }
],
    constraints: [
      "1 <= A.length <= 10^5",
      "0 <= A[i] <= 10^6"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example",
            "input": "A = [2, 3, 1, 4, 5, 2]",
            "args": [
                  [
                        2,
                        3,
                        1,
                        4,
                        5,
                        2
                  ]
            ],
            "expectedOutput": "2",
            "explanation": "Decreases occur from 3 to 1 and from 5 to 2. Total = 2."
      },
      {
            "id": "tc-2",
            "name": "Single Day Price",
            "input": "A = [6]",
            "args": [
                  [
                        6
                  ]
            ],
            "expectedOutput": "0",
            "explanation": "Only 1 day of price data, 0 decreases."
      },
      {
            "id": "tc-3",
            "name": "Strictly Decreasing Prices",
            "input": "A = [5, 4, 3, 2, 1]",
            "args": [
                  [
                        5,
                        4,
                        3,
                        2,
                        1
                  ]
            ],
            "expectedOutput": "4",
            "explanation": "Prices decrease on every consecutive day: 4 times."
      },
      {
            "id": "tc-4",
            "name": "Strictly Increasing Prices",
            "input": "A = [1, 2, 3, 4, 5]",
            "args": [
                  [
                        1,
                        2,
                        3,
                        4,
                        5
                  ]
            ],
            "expectedOutput": "0",
            "explanation": "Prices increase on every day, 0 decreases."
      },
      {
            "id": "tc-5",
            "name": "Mixed Volatile Market",
            "input": "A = [10, 20, 15, 25, 22, 18]",
            "args": [
                  [
                        10,
                        20,
                        15,
                        25,
                        22,
                        18
                  ]
            ],
            "expectedOutput": "3",
            "explanation": "Decreases occur at 20->15, 25->22, and 22->18. Total = 3."
      }
],
    starterCode: {
      python: "def count_negative_growth(a):\n    # TODO: Count days where a[i] < a[i - 1]\n    pass\n\nif __name__ == \"__main__\":\n    print(count_negative_growth([2, 3, 1, 4, 5, 2]))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int countNegativeGrowth(int[] a) {\n        // TODO: Count days where a[i] < a[i - 1]\n        return 0;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n\nint countNegativeGrowth(const std::vector<int>& a) {\n    // TODO: Count days where a[i] < a[i - 1]\n    return 0;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int CountNegativeGrowth(int[] a) {\n        // TODO: Count days where a[i] < a[i - 1]\n        return 0;\n    }\n}\n",
      javascript: "function countNegativeGrowth(a) {\n  // TODO: Count days where a[i] < a[i - 1]\n  return 0;\n}\n"
    },
    solutions: {
      python: "def count_negative_growth(a):\n    count = 0\n    for i in range(1, len(a)):\n        if a[i] < a[i - 1]:\n            count += 1\n    return count\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int countNegativeGrowth(int[] a) {\n        int count = 0;\n        for (int i = 1; i < a.length; i++) {\n            if (a[i] < a[i - 1]) count++;\n        }\n        return count;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n\nint countNegativeGrowth(const std::vector<int>& a) {\n    int count = 0;\n    for (size_t i = 1; i < a.size(); i++) {\n        if (a[i] < a[i - 1]) count++;\n    }\n    return count;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int CountNegativeGrowth(int[] a) {\n        int count = 0;\n        for (int i = 1; i < a.Length; i++) {\n            if (a[i] < a[i - 1]) count++;\n        }\n        return count;\n    }\n}\n",
      javascript: "function countNegativeGrowth(a) {\n  let count = 0;\n  for (let i = 1; i < a.length; i++) {\n    if (a[i] < a[i - 1]) count++;\n  }\n  return count;\n}\n"
    },
    runSimulation: (args) => {
      const [a] = args;
      let count = 0;
      for (let i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) count++;
      }
      return String(count);
    }
  },

  // =========================================================================
  // Q35. Operation Choices
  // =========================================================================
  {
    id: 'dsa-p-35',
    qno: 35,
    title: "Operation Choices",
    difficulty: 'Easy',
    category: 'Math',
    topic: 'Conditional Logic / Switch Operations',
    company: 'Accenture',
    pattern: 'Switch-Case',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: "Implement `OperationChoices(c, a, b)` where operation depends on the operator choice `c`:\n\n- `c = 1`: return `a + b` (Addition)\n- `c = 2`: return `a - b` (Subtraction)\n- `c = 3`: return `a * b` (Multiplication)\n- `c = 4`: return `a / b` (Integer division)\n\nAll operations result in integer outputs.",
    rules: [
      "1 -> a + b",
      "2 -> a - b",
      "3 -> a * b",
      "4 -> a / b (integer division)",
      "If c is any other value, return 0."
],
    coreLogic: "Use a switch statement or dictionary on c to perform the respective arithmetic operation.",
    dryRun: [
      {
            "c": 1,
            "a": 12,
            "b": 16,
            "result": "12 + 16 = 28"
      },
      {
            "c": 2,
            "a": 16,
            "b": 20,
            "result": "16 - 20 = -4"
      },
      {
            "c": 4,
            "a": 20,
            "b": 4,
            "result": "20 / 4 = 5"
      }
],
    constraints: [
      "1 <= c <= 4",
      "-10^5 <= a, b <= 10^5",
      "b != 0 when c == 4"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example 1 (Addition)",
            "input": "c = 1, a = 12, b = 16",
            "args": [
                  1,
                  12,
                  16
            ],
            "expectedOutput": "28",
            "explanation": "12 + 16 = 28."
      },
      {
            "id": "tc-2",
            "name": "Given Example 2 (Subtraction)",
            "input": "c = 2, a = 16, b = 20",
            "args": [
                  2,
                  16,
                  20
            ],
            "expectedOutput": "-4",
            "explanation": "16 - 20 = -4."
      },
      {
            "id": "tc-3",
            "name": "Multiplication",
            "input": "c = 3, a = 7, b = 8",
            "args": [
                  3,
                  7,
                  8
            ],
            "expectedOutput": "56",
            "explanation": "7 * 8 = 56."
      },
      {
            "id": "tc-4",
            "name": "Exact Division",
            "input": "c = 4, a = 20, b = 4",
            "args": [
                  4,
                  20,
                  4
            ],
            "expectedOutput": "5",
            "explanation": "20 / 4 = 5."
      },
      {
            "id": "tc-5",
            "name": "Truncating Integer Division",
            "input": "c = 4, a = 15, b = 2",
            "args": [
                  4,
                  15,
                  2
            ],
            "expectedOutput": "7",
            "explanation": "15 / 2 = 7 (integer division)."
      }
],
    starterCode: {
      python: "def operation_choices(c: int, a: int, b: int) -> int:\n    # TODO: Implement operations based on c (1: +, 2: -, 3: *, 4: //)\n    pass\n\nif __name__ == \"__main__\":\n    print(operation_choices(1, 12, 16))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int operationChoices(int c, int a, int b) {\n        // TODO: Implement choices (1: +, 2: -, 3: *, 4: /)\n        return 0;\n    }\n}\n",
      cpp: "#include <iostream>\n\nint operationChoices(int c, int a, int b) {\n    // TODO: Implement choices (1: +, 2: -, 3: *, 4: /)\n    return 0;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int OperationChoices(int c, int a, int b) {\n        // TODO: Implement choices\n        return 0;\n    }\n}\n",
      javascript: "function operationChoices(c, a, b) {\n  // TODO: Implement choices\n  return 0;\n}\n"
    },
    solutions: {
      python: "def operation_choices(c: int, a: int, b: int) -> int:\n    if c == 1:\n        return a + b\n    elif c == 2:\n        return a - b\n    elif c == 3:\n        return a * b\n    elif c == 4:\n        return int(a / b)\n    return 0\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int operationChoices(int c, int a, int b) {\n        switch (c) {\n            case 1: return a + b;\n            case 2: return a - b;\n            case 3: return a * b;\n            case 4: return a / b;\n            default: return 0;\n        }\n    }\n}\n",
      cpp: "#include <iostream>\n\nint operationChoices(int c, int a, int b) {\n    switch (c) {\n        case 1: return a + b;\n        case 2: return a - b;\n        case 3: return a * b;\n        case 4: return a / b;\n        default: return 0;\n    }\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int OperationChoices(int c, int a, int b) {\n        switch (c) {\n            case 1: return a + b;\n            case 2: return a - b;\n            case 3: return a * b;\n            case 4: return a / b;\n            default: return 0;\n        }\n    }\n}\n",
      javascript: "function operationChoices(c, a, b) {\n  switch (c) {\n    case 1: return a + b;\n    case 2: return a - b;\n    case 3: return a * b;\n    case 4: return Math.trunc(a / b);\n    default: return 0;\n  }\n}\n"
    },
    runSimulation: (args) => {
      const [c, a, b] = args;
      switch (c) {
        case 1: return String(a + b);
        case 2: return String(a - b);
        case 3: return String(a * b);
        case 4: return String(Math.trunc(a / b));
        default: return '0';
      }
    }
  },

  // =========================================================================
  // Q36. Pair Sum with Maximum Product
  // =========================================================================
  {
    id: 'dsa-p-36',
    qno: 36,
    title: "Pair Sum with Maximum Product",
    difficulty: 'Medium',
    category: 'Arrays',
    topic: 'Two Pointers / Pair Matching',
    company: 'Accenture',
    pattern: 'Sort & Two Pointers',
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 15,
    description: "Given an array of integers and a `target` sum, find the pair of elements `[first, second]` such that `first + second == target` and their product `first * second` is maximized.\n\nThe pair must be ordered such that `first >= second`. Return the pair formatted as `[first, second]`.",
    rules: [
      "first + second == target",
      "The product first * second must be maximized among all candidate pairs.",
      "first >= second in the returned pair.",
      "Return the pair formatted as [first, second]."
],
    coreLogic: "Sort the array in descending order. Use two pointers start and end. If arr[start] + arr[end] == target, compute product and update best pair. If sum < target, end--. Else start++.",
    dryRun: [
      {
            "step": "Target",
            "val": 18
      },
      {
            "step": "Candidate 1",
            "pair": [
                  10,
                  8
            ],
            "sum": 18,
            "product": 80
      },
      {
            "step": "Candidate 2",
            "pair": [
                  11,
                  7
            ],
            "sum": 18,
            "product": 77
      },
      {
            "step": "Max Product",
            "pair": [
                  10,
                  8
            ],
            "product": 80
      }
],
    constraints: [
      "2 <= arr.length <= 10^5",
      "-10^4 <= arr[i], target <= 10^4"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example",
            "input": "arr = [11, 1, 2, 8, 10, 11, 15, 7], target = 18",
            "args": [
                  [
                        11,
                        1,
                        2,
                        8,
                        10,
                        11,
                        15,
                        7
                  ],
                  18
            ],
            "expectedOutput": "[10, 8]",
            "explanation": "Pair [10, 8] gives sum 18 and maximum product 80 (vs 11*7=77)."
      },
      {
            "id": "tc-2",
            "name": "Multiple Pairs Comparing Products",
            "input": "arr = [1, 5, 7, 3, 2, 4], target = 6",
            "args": [
                  [
                        1,
                        5,
                        7,
                        3,
                        2,
                        4
                  ],
                  6
            ],
            "expectedOutput": "[4, 2]",
            "explanation": "Pairs summing to 6: (5, 1) product 5, (4, 2) product 8. Best is [4, 2]."
      },
      {
            "id": "tc-3",
            "name": "Larger Multiples of 10",
            "input": "arr = [10, 20, 30, 40], target = 50",
            "args": [
                  [
                        10,
                        20,
                        30,
                        40
                  ],
                  50
            ],
            "expectedOutput": "[30, 20]",
            "explanation": "Pair [30, 20] has product 600 vs [40, 10] product 400."
      },
      {
            "id": "tc-4",
            "name": "Even Numbers",
            "input": "arr = [2, 4, 6, 8], target = 10",
            "args": [
                  [
                        2,
                        4,
                        6,
                        8
                  ],
                  10
            ],
            "expectedOutput": "[6, 4]",
            "explanation": "Pair [6, 4] product 24 vs [8, 2] product 16. Best is [6, 4]."
      },
      {
            "id": "tc-5",
            "name": "Identical Pair Elements",
            "input": "arr = [9, 1, 8, 2, 5, 5], target = 10",
            "args": [
                  [
                        9,
                        1,
                        8,
                        2,
                        5,
                        5
                  ],
                  10
            ],
            "expectedOutput": "[5, 5]",
            "explanation": "Pair [5, 5] product 25 vs [8, 2]=16, [9, 1]=9. Best is [5, 5]."
      }
],
    starterCode: {
      python: "def pair_sum_max_product(arr, target):\n    # TODO: Return [first, second] with sum == target, max product, and first >= second\n    pass\n\nif __name__ == \"__main__\":\n    print(pair_sum_max_product([11, 1, 2, 8, 10, 11, 15, 7], 18))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int[] pairSumMaxProduct(int[] arr, int target) {\n        // TODO: Return [first, second] with sum == target, max product, first >= second\n        return new int[]{};\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstd::vector<int> pairSumMaxProduct(std::vector<int>& arr, int target) {\n    // TODO: Return [first, second]\n    return {};\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int[] PairSumMaxProduct(int[] arr, int target) {\n        // TODO: Return [first, second]\n        return new int[0];\n    }\n}\n",
      javascript: "function pairSumMaxProduct(arr, target) {\n  // TODO: Return [first, second]\n  return [];\n}\n"
    },
    solutions: {
      python: "def pair_sum_max_product(arr, target):\n    arr_sorted = sorted(arr, reverse=True)\n    start = 0\n    end = len(arr_sorted) - 1\n    max_prod = -float('inf')\n    best_pair = []\n    while start < end:\n        s = arr_sorted[start] + arr_sorted[end]\n        if s == target:\n            prod = arr_sorted[start] * arr_sorted[end]\n            if prod > max_prod:\n                max_prod = prod\n                best_pair = [arr_sorted[start], arr_sorted[end]]\n            start += 1\n            end -= 1\n        elif s < target:\n            end -= 1\n        else:\n            start += 1\n    return best_pair\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int[] pairSumMaxProduct(int[] arr, int target) {\n        Integer[] boxed = new Integer[arr.length];\n        for (int i = 0; i < arr.length; i++) boxed[i] = arr[i];\n        Arrays.sort(boxed, Collections.reverseOrder());\n        int start = 0, end = boxed.length - 1;\n        int maxProd = Integer.MIN_VALUE;\n        int[] bestPair = new int[2];\n        while (start < end) {\n            int sum = boxed[start] + boxed[end];\n            if (sum == target) {\n                int prod = boxed[start] * boxed[end];\n                if (prod > maxProd) {\n                    maxProd = prod;\n                    bestPair[0] = boxed[start];\n                    bestPair[1] = boxed[end];\n                }\n                start++;\n                end--;\n            } else if (sum < target) {\n                end--;\n            } else {\n                start++;\n            }\n        }\n        return bestPair;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <climits>\n\nstd::vector<int> pairSumMaxProduct(std::vector<int>& arr, int target) {\n    std::sort(arr.begin(), arr.end(), std::greater<int>());\n    int start = 0, end = (int)arr.size() - 1;\n    int maxProd = INT_MIN;\n    std::vector<int> bestPair = {0, 0};\n    while (start < end) {\n        int sum = arr[start] + arr[end];\n        if (sum == target) {\n            int prod = arr[start] * arr[end];\n            if (prod > maxProd) {\n                maxProd = prod;\n                bestPair[0] = arr[start];\n                bestPair[1] = arr[end];\n            }\n            start++;\n            end--;\n        } else if (sum < target) {\n            end--;\n        } else {\n            start++;\n        }\n    }\n    return bestPair;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int[] PairSumMaxProduct(int[] arr, int target) {\n        int[] sorted = (int[])arr.Clone();\n        Array.Sort(sorted);\n        Array.Reverse(sorted);\n        int start = 0, end = sorted.Length - 1;\n        int maxProd = int.MinValue;\n        int[] bestPair = new int[2];\n        while (start < end) {\n            int sum = sorted[start] + sorted[end];\n            if (sum == target) {\n                int prod = sorted[start] * sorted[end];\n                if (prod > maxProd) {\n                    maxProd = prod;\n                    bestPair[0] = sorted[start];\n                    bestPair[1] = sorted[end];\n                }\n                start++;\n                end--;\n            } else if (sum < target) {\n                end--;\n            } else {\n                start++;\n            }\n        }\n        return bestPair;\n    }\n}\n",
      javascript: "function pairSumMaxProduct(arr, target) {\n  const sorted = [...arr].sort((a, b) => b - a);\n  let start = 0, end = sorted.length - 1;\n  let maxProd = -Infinity;\n  let bestPair = [];\n  while (start < end) {\n    const sum = sorted[start] + sorted[end];\n    if (sum === target) {\n      const prod = sorted[start] * sorted[end];\n      if (prod > maxProd) {\n        maxProd = prod;\n        bestPair = [sorted[start], sorted[end]];\n      }\n      start++;\n      end--;\n    } else if (sum < target) {\n      end--;\n    } else {\n      start++;\n    }\n  }\n  return bestPair;\n}\n"
    },
    runSimulation: (args) => {
      const [arr, target] = args;
      const sorted = [...arr].sort((a, b) => b - a);
      let start = 0, end = sorted.length - 1;
      let maxProd = -Infinity, bestPair = [];
      while (start < end) {
        const sum = sorted[start] + sorted[end];
        if (sum === target) {
          const prod = sorted[start] * sorted[end];
          if (prod > maxProd) {
            maxProd = prod;
            bestPair = [sorted[start], sorted[end]];
          }
          start++;
          end--;
        } else if (sum < target) {
          end--;
        } else {
          start++;
        }
      }
      return '[' + bestPair.join(', ') + ']';
    }
  },

  // =========================================================================
  // Q37. Password Checker
  // =========================================================================
  {
    id: 'dsa-p-37',
    qno: 37,
    title: "Password Checker",
    difficulty: 'Easy',
    category: 'Strings',
    topic: 'String Validation / Rules Verification',
    company: 'Accenture',
    pattern: 'Character Inspection',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    rewardXp: 50,
    targetMins: 10,
    description: "Implement a function `checkPassword(str)` to validate a candidate password string. Return `1` if the password is valid, and `0` otherwise.\n\nA valid password must satisfy all of the following conditions:\n1. At least 4 characters long.\n2. Contains at least one numeric digit (`0-9`).\n3. Contains at least one uppercase capital letter (`A-Z`).\n4. Must not contain any space (` `).\n5. Must not contain any forward slash (`/`).\n6. The first character must NOT be a number.",
    rules: [
      "Length must be at least 4.",
      "Must contain at least 1 digit.",
      "Must contain at least 1 uppercase letter.",
      "Must not contain space or slash.",
      "First character must not be a digit.",
      "Return 1 if valid, 0 if invalid."
],
    coreLogic: "Check length >= 4 and !isDigit(str[0]). Maintain boolean flags hasDigit and hasCapital while checking for forbidden characters space and slash.",
    dryRun: [
      {
            "step": "Input",
            "val": "\"aA1_67\""
      },
      {
            "step": "Length >= 4?",
            "res": "Yes (6)"
      },
      {
            "step": "First is digit?",
            "res": "No (a)"
      },
      {
            "step": "Has digit?",
            "res": "Yes (1)"
      },
      {
            "step": "Has capital?",
            "res": "Yes (A)"
      },
      {
            "step": "Has space or slash?",
            "res": "No"
      },
      {
            "step": "Verdict",
            "res": "1 (Valid)"
      }
],
    constraints: [
      "0 <= str.length <= 10^5"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example 1 (Valid)",
            "input": "str = \"aA1_67\"",
            "args": [
                  "aA1_67"
            ],
            "expectedOutput": "1",
            "explanation": "All 6 password criteria are satisfied. Returns 1."
      },
      {
            "id": "tc-2",
            "name": "Given Example 2 (Contains Space)",
            "input": "str = \"a987 abC012\"",
            "args": [
                  "a987 abC012"
            ],
            "expectedOutput": "0",
            "explanation": "Contains a space character. Returns 0."
      },
      {
            "id": "tc-3",
            "name": "Starts with Digit",
            "input": "str = \"1aA_\"",
            "args": [
                  "1aA_"
            ],
            "expectedOutput": "0",
            "explanation": "First character is a digit \"1\". Returns 0."
      },
      {
            "id": "tc-4",
            "name": "Contains Forward Slash",
            "input": "str = \"a/B1\"",
            "args": [
                  "a/B1"
            ],
            "expectedOutput": "0",
            "explanation": "Contains forbidden character \"/\". Returns 0."
      },
      {
            "id": "tc-5",
            "name": "Too Short Length",
            "input": "str = \"aB1\"",
            "args": [
                  "aB1"
            ],
            "expectedOutput": "0",
            "explanation": "Length is 3 (< 4). Returns 0."
      }
],
    starterCode: {
      python: "def check_password(s: str) -> int:\n    # TODO: Return 1 if valid, 0 if invalid\n    pass\n\nif __name__ == \"__main__\":\n    print(check_password(\"aA1_67\"))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int checkPassword(String str) {\n        // TODO: Return 1 if valid, 0 if invalid\n        return 0;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n\nint checkPassword(const std::string& str) {\n    // TODO: Return 1 if valid, 0 if invalid\n    return 0;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int CheckPassword(string str) {\n        // TODO: Return 1 if valid, 0 if invalid\n        return 0;\n    }\n}\n",
      javascript: "function checkPassword(str) {\n  // TODO: Return 1 if valid, 0 if invalid\n  return 0;\n}\n"
    },
    solutions: {
      python: "def check_password(s: str) -> int:\n    if len(s) < 4 or s[0].isdigit():\n        return 0\n    has_digit = False\n    has_capital = False\n    for c in s:\n        if c.isdigit():\n            has_digit = True\n        if c.isupper():\n            has_capital = True\n        if c == ' ' or c == '/':\n            return 0\n    return 1 if (has_digit and has_capital) else 0\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static int checkPassword(String str) {\n        if (str == null || str.length() < 4) return 0;\n        if (Character.isDigit(str.charAt(0))) return 0;\n        boolean hasDigit = false;\n        boolean hasCapital = false;\n        for (char c : str.toCharArray()) {\n            if (Character.isDigit(c)) hasDigit = true;\n            if (Character.isUpperCase(c)) hasCapital = true;\n            if (c == ' ' || c == '/') return 0;\n        }\n        return (hasDigit && hasCapital) ? 1 : 0;\n    }\n}\n",
      cpp: "#include <iostream>\n#include <string>\n#include <cctype>\n\nint checkPassword(const std::string& str) {\n    if (str.length() < 4) return 0;\n    if (isdigit(str[0])) return 0;\n    bool hasDigit = false;\n    bool hasCapital = false;\n    for (char c : str) {\n        if (isdigit(c)) hasDigit = true;\n        if (isupper(c)) hasCapital = true;\n        if (c == ' ' || c == '/') return 0;\n    }\n    return (hasDigit && hasCapital) ? 1 : 0;\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static int CheckPassword(string str) {\n        if (string.IsNullOrEmpty(str) || str.Length < 4) return 0;\n        if (char.IsDigit(str[0])) return 0;\n        bool hasDigit = false;\n        bool hasCapital = false;\n        foreach (char c in str) {\n            if (char.IsDigit(c)) hasDigit = true;\n            if (char.IsUpper(c)) hasCapital = true;\n            if (c == ' ' || c == '/') return 0;\n        }\n        return (hasDigit && hasCapital) ? 1 : 0;\n    }\n}\n",
      javascript: "function checkPassword(str) {\n  if (!str || str.length < 4) return 0;\n  if (/^[0-9]/.test(str)) return 0;\n  let hasDigit = false;\n  let hasCapital = false;\n  for (const c of str) {\n    if (c >= '0' && c <= '9') hasDigit = true;\n    if (c >= 'A' && c <= 'Z') hasCapital = true;\n    if (c === ' ' || c === '/') return 0;\n  }\n  return (hasDigit && hasCapital) ? 1 : 0;\n}\n"
    },
    runSimulation: (args) => {
      const [str] = args;
      if (!str || str.length < 4) return '0';
      if (/^[0-9]/.test(str)) return '0';
      let hasDigit = false, hasCapital = false;
      for (const c of str) {
        if (c >= '0' && c <= '9') hasDigit = true;
        if (c >= 'A' && c <= 'Z') hasCapital = true;
        if (c === ' ' || c === '/') return '0';
      }
      return (hasDigit && hasCapital) ? '1' : '0';
    }
  },

  // =========================================================================
  // Q38. Print Even/Odd
  // =========================================================================
  {
    id: 'dsa-p-38',
    qno: 38,
    title: "Print Even/Odd",
    difficulty: 'Easy',
    category: 'Arrays',
    topic: 'Parity Check / Space-Separated String',
    company: 'Accenture',
    pattern: 'Linear Scan',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    rewardXp: 50,
    targetMins: 10,
    description: "Given an array of integers, determine whether each element is even or odd.\n\nFor each number in the array:\n- If even (`x % 2 == 0`), output `Even`\n- If odd (`x % 2 != 0`), output `Odd`\n\nReturn the labels separated by spaces.",
    rules: [
      "Even numbers -> Even",
      "Odd numbers -> Odd",
      "Preserve the exact order of the original array.",
      "Separate values with a single space."
],
    coreLogic: "Traverse the array and map each element: if element % 2 == 0 then \"Even\" else \"Odd\". Join with spaces.",
    dryRun: [
      {
            "num": 1,
            "parity": "Odd"
      },
      {
            "num": 2,
            "parity": "Even"
      },
      {
            "num": 3,
            "parity": "Odd"
      },
      {
            "num": 4,
            "parity": "Even"
      },
      {
            "num": 5,
            "parity": "Odd"
      },
      {
            "num": 6,
            "parity": "Even"
      }
],
    constraints: [
      "1 <= arr.length <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
],
    testCases: [
      {
            "id": "tc-1",
            "name": "Given Example",
            "input": "arr = [1, 2, 3, 4, 5, 6]",
            "args": [
                  [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                  ]
            ],
            "expectedOutput": "Odd Even Odd Even Odd Even",
            "explanation": "Parities: 1 is Odd, 2 is Even, 3 is Odd, 4 is Even, 5 is Odd, 6 is Even."
      },
      {
            "id": "tc-2",
            "name": "All Even Numbers",
            "input": "arr = [2, 4, 6]",
            "args": [
                  [
                        2,
                        4,
                        6
                  ]
            ],
            "expectedOutput": "Even Even Even",
            "explanation": "All 3 elements are even numbers."
      },
      {
            "id": "tc-3",
            "name": "All Odd Numbers",
            "input": "arr = [1, 3, 5]",
            "args": [
                  [
                        1,
                        3,
                        5
                  ]
            ],
            "expectedOutput": "Odd Odd Odd",
            "explanation": "All 3 elements are odd numbers."
      },
      {
            "id": "tc-4",
            "name": "Zero Element (Even)",
            "input": "arr = [0]",
            "args": [
                  [
                        0
                  ]
            ],
            "expectedOutput": "Even",
            "explanation": "0 is an even integer."
      },
      {
            "id": "tc-5",
            "name": "Mixed Multi-digit Numbers",
            "input": "arr = [7, 10, 13, 16]",
            "args": [
                  [
                        7,
                        10,
                        13,
                        16
                  ]
            ],
            "expectedOutput": "Odd Even Odd Even",
            "explanation": "7 is Odd, 10 is Even, 13 is Odd, 16 is Even."
      }
],
    starterCode: {
      python: "def print_even_odd(arr):\n    # TODO: Return space-separated \"Even\" or \"Odd\" for each element\n    pass\n\nif __name__ == \"__main__\":\n    print(print_even_odd([1, 2, 3, 4, 5, 6]))\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static String printEvenOdd(int[] arr) {\n        // TODO: Return space-separated \"Even\" or \"Odd\"\n        return \"\";\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n#include <string>\n\nstd::string printEvenOdd(const std::vector<int>& arr) {\n    // TODO: Return space-separated \"Even\" or \"Odd\"\n    return \"\";\n}\n",
      csharp: "using System;\n\npublic class Solution {\n    public static string PrintEvenOdd(int[] arr) {\n        // TODO: Return space-separated \"Even\" or \"Odd\"\n        return \"\";\n    }\n}\n",
      javascript: "function printEvenOdd(arr) {\n  // TODO: Return space-separated \"Even\" or \"Odd\"\n  return \"\";\n}\n"
    },
    solutions: {
      python: "def print_even_odd(arr):\n    return \" \".join(\"Even\" if x % 2 == 0 else \"Odd\" for x in arr)\n",
      java: "import java.util.*;\n\npublic class Solution {\n    public static String printEvenOdd(int[] arr) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < arr.length; i++) {\n            if (i > 0) sb.append(\" \");\n            sb.append(arr[i] % 2 == 0 ? \"Even\" : \"Odd\");\n        }\n        return sb.toString();\n    }\n}\n",
      cpp: "#include <iostream>\n#include <vector>\n#include <string>\n\nstd::string printEvenOdd(const std::vector<int>& arr) {\n    std::string result = \"\";\n    for (size_t i = 0; i < arr.size(); i++) {\n        if (i > 0) result += \" \";\n        result += (arr[i] % 2 == 0 ? \"Even\" : \"Odd\");\n    }\n    return result;\n}\n",
      csharp: "using System;\nusing System.Text;\n\npublic class Solution {\n    public static string PrintEvenOdd(int[] arr) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < arr.Length; i++) {\n            if (i > 0) sb.Append(\" \");\n            sb.Append(arr[i] % 2 == 0 ? \"Even\" : \"Odd\");\n        }\n        return sb.ToString();\n    }\n}\n",
      javascript: "function printEvenOdd(arr) {\n  return arr.map(x => x % 2 === 0 ? \"Even\" : \"Odd\").join(\" \");\n}\n"
    },
    runSimulation: (args) => {
      const [arr] = args;
      return arr.map(x => x % 2 === 0 ? "Even" : "Odd").join(" ");
    }
  },

  // =========================================================================
  // Q39. Product Smallest Pair
  // =========================================================================
  {
  "id": "dsa-p-39",
  "qno": 39,
  "title": "Product Smallest Pair",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Array Traversal / Two Smallest Elements",
  "company": "Accenture",
  "pattern": "Single Pass Minimum Tracking",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 12,
  "description": "Implement the function `productSmallestPair(sum, arr)` that accepts an integer `sum` and an integer array `arr`.\n\nFind the two least elements of the array. If their sum is less than or equal to `sum`, return their product.\n- The two elements must come from different positions.\n- Return `-1` if the array is empty or has fewer than 2 elements.\n- Return `0` if the sum of the two smallest elements is strictly greater than `sum`.",
  "rules": [
    "Return -1 if arr.length < 2.",
    "Identify the two smallest distinct-index elements: smallest and secondSmallest.",
    "If smallest + secondSmallest <= sum, return smallest * secondSmallest.",
    "Otherwise, return 0."
  ],
  "coreLogic": "Traverse the array once maintaining the smallest and second-smallest values. After traversal, check if smallest + secondSmallest <= sum. If so, return their product; otherwise return 0.",
  "dryRun": [
    {
      "step": "Given",
      "arr": "[5, 2, 4, 3, 9, 7, 1]",
      "sum": 9
    },
    {
      "step": "Smallest",
      "value": 1
    },
    {
      "step": "Second Smallest",
      "value": 2
    },
    {
      "step": "Check",
      "sumCheck": "1 + 2 = 3 <= 9",
      "product": "1 * 2 = 2"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i], sum <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "sum = 9, arr = [5, 2, 4, 3, 9, 7, 1]",
      "args": [
        9,
        [
          5,
          2,
          4,
          3,
          9,
          7,
          1
        ]
      ],
      "expectedOutput": "2",
      "explanation": "The two smallest elements are 1 and 2. 1 + 2 = 3 <= 9. Product = 2."
    },
    {
      "id": "tc-2",
      "name": "Negative Numbers",
      "input": "sum = 4, arr = [9, 8, 3, -7, 3, 9]",
      "args": [
        4,
        [
          9,
          8,
          3,
          -7,
          3,
          9
        ]
      ],
      "expectedOutput": "-21",
      "explanation": "Two smallest are -7 and 3. -7 + 3 = -4 <= 4. Product = -21."
    },
    {
      "id": "tc-3",
      "name": "Fewer than 2 Elements",
      "input": "sum = 10, arr = [1]",
      "args": [
        10,
        [
          1
        ]
      ],
      "expectedOutput": "-1",
      "explanation": "Array has fewer than 2 elements, return -1."
    },
    {
      "id": "tc-4",
      "name": "Sum Exceeded",
      "input": "sum = 4, arr = [4, 3, 2]",
      "args": [
        4,
        [
          4,
          3,
          2
        ]
      ],
      "expectedOutput": "0",
      "explanation": "Two smallest are 2 and 3. 2 + 3 = 5 > 4, so return 0."
    },
    {
      "id": "tc-5",
      "name": "Large Values Exceed Sum",
      "input": "sum = 20, arr = [10, 20, 30, 40]",
      "args": [
        20,
        [
          10,
          20,
          30,
          40
        ]
      ],
      "expectedOutput": "0",
      "explanation": "Two smallest are 10 and 20. 10 + 20 = 30 > 20, so return 0."
    }
  ],
  "starterCode": {
    "python": "def product_smallest_pair(sum_val: int, arr: list) -> int:\n    # TODO: Find two smallest elements and return their product if sum <= sum_val\n    pass\n\nif __name__ == \"__main__\":\n    print(product_smallest_pair(9, [5, 2, 4, 3, 9, 7, 1]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int productSmallestPair(int sum, int[] arr) {\n        // TODO: Return product of two smallest if their sum <= sum\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint ProductSmallestPair(int sum, std::vector<int>& arr) {\n    // TODO: Return product of two smallest if their sum <= sum\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int ProductSmallestPair(int sum, int[] arr) {\n        // TODO: Return product of two smallest if their sum <= sum\n        return 0;\n    }\n}\n",
    "javascript": "function productSmallestPair(sum, arr) {\n  // TODO: Return product of two smallest if their sum <= sum\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def product_smallest_pair(sum_val: int, arr: list) -> int:\n    if len(arr) < 2:\n        return -1\n    smallest = float('inf')\n    second = float('inf')\n    for x in arr:\n        if x < smallest:\n            second = smallest\n            smallest = x\n        elif x < second:\n            second = x\n    if smallest + second <= sum_val:\n        return int(smallest * second)\n    return 0\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int productSmallestPair(int sum, int[] arr) {\n        if (arr.length < 2) return -1;\n        int smallest = Integer.MAX_VALUE;\n        int second = Integer.MAX_VALUE;\n        for (int x : arr) {\n            if (x < smallest) {\n                second = smallest;\n                smallest = x;\n            } else if (x < second) {\n                second = x;\n            }\n        }\n        if ((long)smallest + second <= sum) {\n            return smallest * second;\n        }\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <climits>\n\nint ProductSmallestPair(int sum, std::vector<int>& arr) {\n    if (arr.size() < 2) return -1;\n    int smallest = INT_MAX;\n    int second = INT_MAX;\n    for (int x : arr) {\n        if (x < smallest) {\n            second = smallest;\n            smallest = x;\n        } else if (x < second) {\n            second = x;\n        }\n    }\n    if ((long long)smallest + second <= sum) {\n        return smallest * second;\n    }\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int ProductSmallestPair(int sum, int[] arr) {\n        if (arr.Length < 2) return -1;\n        int smallest = int.MaxValue;\n        int second = int.MaxValue;\n        foreach (int x in arr) {\n            if (x < smallest) {\n                second = smallest;\n                smallest = x;\n            } else if (x < second) {\n                second = x;\n            }\n        }\n        if ((long)smallest + second <= sum) {\n            return smallest * second;\n        }\n        return 0;\n    }\n}\n",
    "javascript": "function productSmallestPair(sum, arr) {\n  if (arr.length < 2) return -1;\n  let smallest = Infinity;\n  let second = Infinity;\n  for (const x of arr) {\n    if (x < smallest) {\n      second = smallest;\n      smallest = x;\n    } else if (x < second) {\n      second = x;\n    }\n  }\n  if (smallest + second <= sum) {\n    return smallest * second;\n  }\n  return 0;\n}\n"
  }
,
  runSimulation: (args) => {
      const [sum, arr] = args;
      if (!arr || arr.length < 2) return -1;
      let smallest = Infinity;
      let second = Infinity;
      for (const x of arr) {
        if (x < smallest) {
          second = smallest;
          smallest = x;
        } else if (x < second) {
          second = x;
        }
      }
      return smallest + second <= sum ? smallest * second : 0;
    }
  },

  // =========================================================================
  // Q40. Rat Count House
  // =========================================================================
  {
  "id": "dsa-p-40",
  "qno": 40,
  "title": "Rat Count House",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Prefix Sum / Array Accumulation",
  "company": "Accenture",
  "pattern": "Prefix Sum Greedy Accumulation",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 12,
  "description": "Given:\n- `r` = number of rats\n- `unit` = amount of food consumed by each rat\n- `arr[i]` = amount of food available in the `(i+1)`th house\n\nFind the minimum number of houses from the beginning whose total food is sufficient for all rats.\n- Return `-1` if the array is empty or null.\n- Return `0` if the total food across all houses is insufficient.",
  "rules": [
    "Total required food = r * unit.",
    "If arr is empty, return -1.",
    "Iterate through arr and accumulate food: sum += arr[i].",
    "As soon as sum >= requiredFood, return i + 1.",
    "If loop finishes and sum < requiredFood, return 0."
  ],
  "coreLogic": "Multiply r * unit to get the required food threshold. Accumulate food from house index 0 onwards. Return the 1-based index (i + 1) as soon as cumulative food meets or exceeds required food.",
  "dryRun": [
    {
      "house": 1,
      "food": 2,
      "total": 2,
      "required": 14
    },
    {
      "house": 2,
      "food": 8,
      "total": 10,
      "required": 14
    },
    {
      "house": 3,
      "food": 3,
      "total": 13,
      "required": 14
    },
    {
      "house": 4,
      "food": 5,
      "total": 18,
      "required": 14,
      "status": "18 >= 14 -> return 4"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "0 <= r, unit, arr[i] <= 10^6"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "r = 7, unit = 2, arr = [2, 8, 3, 5, 7, 4, 1, 2]",
      "args": [
        7,
        2,
        [
          2,
          8,
          3,
          5,
          7,
          4,
          1,
          2
        ]
      ],
      "expectedOutput": "4",
      "explanation": "Total food required: 7 * 2 = 14. First 4 houses provide 2 + 8 + 3 + 5 = 18 >= 14."
    },
    {
      "id": "tc-2",
      "name": "Exact Match",
      "input": "r = 3, unit = 5, arr = [5, 5, 5]",
      "args": [
        3,
        5,
        [
          5,
          5,
          5
        ]
      ],
      "expectedOutput": "3",
      "explanation": "Total required is 15. All 3 houses provide exactly 15."
    },
    {
      "id": "tc-3",
      "name": "Insufficient Food",
      "input": "r = 2, unit = 8, arr = [10]",
      "args": [
        2,
        8,
        [
          10
        ]
      ],
      "expectedOutput": "0",
      "explanation": "Required food 16 > 10 available, return 0."
    },
    {
      "id": "tc-4",
      "name": "Empty Array",
      "input": "r = 5, unit = 2, arr = []",
      "args": [
        5,
        2,
        []
      ],
      "expectedOutput": "-1",
      "explanation": "Empty array returns -1."
    },
    {
      "id": "tc-5",
      "name": "First House Sufficient",
      "input": "r = 1, unit = 1, arr = [2, 1]",
      "args": [
        1,
        1,
        [
          2,
          1
        ]
      ],
      "expectedOutput": "1",
      "explanation": "House 1 food 2 >= 1 required."
    }
  ],
  "starterCode": {
    "python": "def rat_count_house(r: int, unit: int, arr: list) -> int:\n    # TODO: Return minimum houses needed to feed all rats\n    pass\n\nif __name__ == \"__main__\":\n    print(rat_count_house(7, 2, [2, 8, 3, 5, 7, 4, 1, 2]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int ratCountHouse(int r, int unit, int[] arr) {\n        // TODO: Return minimum houses needed to feed all rats\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint RatCountHouse(int r, int unit, std::vector<int>& arr) {\n    // TODO: Return minimum houses needed to feed all rats\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int RatCountHouse(int r, int unit, int[] arr) {\n        // TODO: Return minimum houses needed to feed all rats\n        return 0;\n    }\n}\n",
    "javascript": "function ratCountHouse(r, unit, arr) {\n  // TODO: Return minimum houses needed to feed all rats\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def rat_count_house(r: int, unit: int, arr: list) -> int:\n    if not arr:\n        return -1\n    required = r * unit\n    food = 0\n    for i, x in enumerate(arr):\n        food += x\n        if food >= required:\n            return i + 1\n    return 0\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int ratCountHouse(int r, int unit, int[] arr) {\n        if (arr == null || arr.length == 0) return -1;\n        long required = (long)r * unit;\n        long food = 0;\n        for (int i = 0; i < arr.length; i++) {\n            food += arr[i];\n            if (food >= required) return i + 1;\n        }\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint RatCountHouse(int r, int unit, std::vector<int>& arr) {\n    if (arr.empty()) return -1;\n    long long required = (long long)r * unit;\n    long long food = 0;\n    for (int i = 0; i < (int)arr.size(); i++) {\n        food += arr[i];\n        if (food >= required) return i + 1;\n    }\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int RatCountHouse(int r, int unit, int[] arr) {\n        if (arr == null || arr.Length == 0) return -1;\n        long required = (long)r * unit;\n        long food = 0;\n        for (int i = 0; i < arr.Length; i++) {\n            food += arr[i];\n            if (food >= required) return i + 1;\n        }\n        return 0;\n    }\n}\n",
    "javascript": "function ratCountHouse(r, unit, arr) {\n  if (!arr || arr.length === 0) return -1;\n  const required = r * unit;\n  let food = 0;\n  for (let i = 0; i < arr.length; i++) {\n    food += arr[i];\n    if (food >= required) return i + 1;\n  }\n  return 0;\n}\n"
  }
,
  runSimulation: (args) => {
      const [r, unit, arr] = args;
      if (!arr || arr.length === 0) return -1;
      const required = r * unit;
      let food = 0;
      for (let i = 0; i < arr.length; i++) {
        food += arr[i];
        if (food >= required) return i + 1;
      }
      return 0;
    }
  },

  // =========================================================================
  // Q41. Rearrangement of Bits
  // =========================================================================
  {
  "id": "dsa-p-41",
  "qno": 41,
  "title": "Rearrangement of Bits",
  "difficulty": "Easy",
  "category": "Bit Manipulation",
  "topic": "Binary Representation / Bit Counting",
  "company": "Accenture",
  "pattern": "Bitmask Generation",
  "timeComplexity": "O(log N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given a positive number `N`, rearrange the bits in its binary representation such that all set bits (`1`s) are consecutive.\n\nReturn the minimum possible number that can be formed after rearranging the bits.",
  "rules": [
    "Count the number of set bits (1s) in N, say k.",
    "To minimize the formed value, place all k set bits consecutively at the least significant positions.",
    "The minimum value formed by k set bits is 2^k - 1 (or (1 << k) - 1)."
  ],
  "coreLogic": "Count the number of 1-bits in N. If there are k set bits, arranging them consecutively at the least significant bit positions produces (1 << k) - 1.",
  "dryRun": [
    {
      "N": 10,
      "binary": "1010",
      "setBits": 2,
      "arrangement": "0011",
      "decimal": 3
    },
    {
      "N": 2,
      "binary": "10",
      "setBits": 1,
      "arrangement": "01",
      "decimal": 1
    }
  ],
  "constraints": [
    "1 <= N <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 10",
      "input": "N = 10",
      "args": [
        10
      ],
      "expectedOutput": "3",
      "explanation": "10 in binary is 1010 (two 1s). Minimum arrangement is 0011 -> 3."
    },
    {
      "id": "tc-2",
      "name": "Given Example 2",
      "input": "N = 2",
      "args": [
        2
      ],
      "expectedOutput": "1",
      "explanation": "2 in binary is 10 (one 1). Minimum arrangement is 1."
    },
    {
      "id": "tc-3",
      "name": "Three Set Bits",
      "input": "N = 7",
      "args": [
        7
      ],
      "expectedOutput": "7",
      "explanation": "7 in binary is 111 (three 1s). Value is 2^3 - 1 = 7."
    },
    {
      "id": "tc-4",
      "name": "Four Set Bits",
      "input": "N = 15",
      "args": [
        15
      ],
      "expectedOutput": "15",
      "explanation": "15 has 4 set bits -> 2^4 - 1 = 15."
    },
    {
      "id": "tc-5",
      "name": "Power of Two",
      "input": "N = 16",
      "args": [
        16
      ],
      "expectedOutput": "1",
      "explanation": "16 is 10000 (one 1) -> (1 << 1) - 1 = 1."
    }
  ],
  "starterCode": {
    "python": "def rearrangement_of_bits(n: int) -> int:\n    # TODO: Return minimum number formed by grouping set bits\n    pass\n\nif __name__ == \"__main__\":\n    print(rearrangement_of_bits(10))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int rearrangementOfBits(int n) {\n        // TODO: Return minimum number formed by grouping set bits\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint RearrangementOfBits(int n) {\n    // TODO: Return minimum number formed by grouping set bits\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int RearrangementOfBits(int n) {\n        // TODO: Return minimum number formed by grouping set bits\n        return 0;\n    }\n}\n",
    "javascript": "function rearrangementOfBits(n) {\n  // TODO: Return minimum number formed by grouping set bits\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def rearrangement_of_bits(n: int) -> int:\n    k = bin(n).count('1')\n    return (1 << k) - 1\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int rearrangementOfBits(int n) {\n        int k = Integer.bitCount(n);\n        return (1 << k) - 1;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint RearrangementOfBits(int n) {\n    int k = 0;\n    while (n > 0) {\n        k += (n & 1);\n        n >>= 1;\n    }\n    return (1 << k) - 1;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int RearrangementOfBits(int n) {\n        int k = 0;\n        while (n > 0) {\n            k += (n & 1);\n            n >>= 1;\n        }\n        return (1 << k) - 1;\n    }\n}\n",
    "javascript": "function rearrangementOfBits(n) {\n  let k = 0;\n  while (n > 0) {\n    k += (n & 1);\n    n >>>= 1;\n  }\n  return (1 << k) - 1;\n}\n"
  }
,
  runSimulation: (args) => {
      let [n] = args;
      let k = 0;
      while (n > 0) {
        k += (n & 1);
        n >>>= 1;
      }
      return (1 << k) - 1;
    }
  },

  // =========================================================================
  // Q42. Repeat a String
  // =========================================================================
  {
  "id": "dsa-p-42",
  "qno": 42,
  "title": "Repeat a String",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "String Manipulation / Repetition",
  "company": "Accenture",
  "pattern": "String Concatenation",
  "timeComplexity": "O(N × M)",
  "spaceComplexity": "O(N × M)",
  "rewardXp": 50,
  "targetMins": 8,
  "description": "Given an integer `N` and a string `S`, return a new string consisting of the original string repeated `N` times.",
  "rules": [
    "If N <= 0, return an empty string \"\".",
    "Concatenate string S exactly N times."
  ],
  "coreLogic": "Append the string S to a result buffer N times.",
  "dryRun": [
    {
      "N": 3,
      "S": "abc",
      "i1": "abc",
      "i2": "abcabc",
      "i3": "abcabcabc"
    }
  ],
  "constraints": [
    "0 <= N <= 10^4",
    "0 <= S.length <= 1000"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "N = 3, S = \"abc\"",
      "args": [
        3,
        "abc"
      ],
      "expectedOutput": "abcabcabc",
      "explanation": "\"abc\" repeated 3 times gives \"abcabcabc\"."
    },
    {
      "id": "tc-2",
      "name": "Single Repetition",
      "input": "N = 1, S = \"hello\"",
      "args": [
        1,
        "hello"
      ],
      "expectedOutput": "hello",
      "explanation": "\"hello\" repeated 1 time is \"hello\"."
    },
    {
      "id": "tc-3",
      "name": "Zero Repetition",
      "input": "N = 0, S = \"xyz\"",
      "args": [
        0,
        "xyz"
      ],
      "expectedOutput": "",
      "explanation": "0 repetitions results in an empty string."
    },
    {
      "id": "tc-4",
      "name": "Single Character",
      "input": "N = 4, S = \"a\"",
      "args": [
        4,
        "a"
      ],
      "expectedOutput": "aaaa",
      "explanation": "\"a\" repeated 4 times is \"aaaa\"."
    },
    {
      "id": "tc-5",
      "name": "Accenture String",
      "input": "N = 2, S = \"Accenture\"",
      "args": [
        2,
        "Accenture"
      ],
      "expectedOutput": "AccentureAccenture",
      "explanation": "\"Accenture\" repeated 2 times."
    }
  ],
  "starterCode": {
    "python": "def repeat_string(n: int, s: str) -> str:\n    # TODO: Return string s repeated n times\n    pass\n\nif __name__ == \"__main__\":\n    print(repeat_string(3, \"abc\"))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String repeatString(int n, String s) {\n        // TODO: Return string s repeated n times\n        return \"\";\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string repeatString(int n, std::string s) {\n    // TODO: Return string s repeated n times\n    return \"\";\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string RepeatString(int n, string s) {\n        // TODO: Return string s repeated n times\n        return \"\";\n    }\n}\n",
    "javascript": "function repeatString(n, s) {\n  // TODO: Return string s repeated n times\n  return \"\";\n}\n"
  },
  "solutions": {
    "python": "def repeat_string(n: int, s: str) -> str:\n    if n <= 0:\n        return \"\"\n    return s * n\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String repeatString(int n, String s) {\n        if (n <= 0 || s == null) return \"\";\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(s);\n        return sb.toString();\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string repeatString(int n, std::string s) {\n    if (n <= 0) return \"\";\n    std::string res = \"\";\n    for (int i = 0; i < n; i++) res += s;\n    return res;\n}\n",
    "csharp": "using System;\nusing System.Text;\n\npublic class Solution {\n    public static string RepeatString(int n, string s) {\n        if (n <= 0 || s == null) return \"\";\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.Append(s);\n        return sb.ToString();\n    }\n}\n",
    "javascript": "function repeatString(n, s) {\n  if (n <= 0 || !s) return \"\";\n  return s.repeat(n);\n}\n"
  }
,
  runSimulation: (args) => {
      const [n, s] = args;
      if (n <= 0 || !s) return "";
      return s.repeat(n);
    }
  },

  // =========================================================================
  // Q43. Replace Character
  // =========================================================================
  {
  "id": "dsa-p-43",
  "qno": 43,
  "title": "Replace Character",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "Character Swapping / Traversal",
  "company": "Accenture",
  "pattern": "Single-Pass Character Substitution",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Implement the function `replaceCharacter(str, ch1, ch2)`.\n\nThe function receives a string and two characters `ch1` and `ch2`.\nReplace:\n- all occurrences of `ch1` with `ch2`\n- all occurrences of `ch2` with `ch1`\n\nThe replacements must be based on the original string, so that characters are swapped simultaneously.",
  "rules": [
    "If str is empty or null, return empty string or null.",
    "If ch1 == ch2, return the string unchanged.",
    "Replace ch1 -> ch2 and ch2 -> ch1 in a single pass."
  ],
  "coreLogic": "Iterate through every character c in the string: if c == ch1, append ch2; else if c == ch2, append ch1; else append c.",
  "dryRun": [
    {
      "input": "apples",
      "ch1": "a",
      "ch2": "p"
    },
    {
      "a -> p": "p"
    },
    {
      "p -> a": "pa"
    },
    {
      "p -> a": "paa"
    },
    {
      "l -> l": "paal"
    },
    {
      "e -> e": "paale"
    },
    {
      "s -> s": "paales"
    }
  ],
  "constraints": [
    "0 <= str.length <= 10^5",
    "str contains lowercase English letters"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "str = \"apples\", ch1 = 'a', ch2 = 'p'",
      "args": [
        "apples",
        "a",
        "p"
      ],
      "expectedOutput": "paales",
      "explanation": "'a' and 'p' are swapped: a -> p, p -> a, p -> a -> paales."
    },
    {
      "id": "tc-2",
      "name": "Multiple Swaps",
      "input": "str = \"banana\", ch1 = 'a', ch2 = 'n'",
      "args": [
        "banana",
        "a",
        "n"
      ],
      "expectedOutput": "bnanan",
      "explanation": "a and n swapped: b-n-a-n-a-n."
    },
    {
      "id": "tc-3",
      "name": "Characters Not in String",
      "input": "str = \"code\", ch1 = 'x', ch2 = 'y'",
      "args": [
        "code",
        "x",
        "y"
      ],
      "expectedOutput": "code",
      "explanation": "Neither x nor y is in \"code\", string unchanged."
    },
    {
      "id": "tc-4",
      "name": "Identical Characters",
      "input": "str = \"hello\", ch1 = 'l', ch2 = 'l'",
      "args": [
        "hello",
        "l",
        "l"
      ],
      "expectedOutput": "hello",
      "explanation": "ch1 == ch2, string remains \"hello\"."
    },
    {
      "id": "tc-5",
      "name": "Three Letter Word",
      "input": "str = \"cat\", ch1 = 'c', ch2 = 't'",
      "args": [
        "cat",
        "c",
        "t"
      ],
      "expectedOutput": "tac",
      "explanation": "'c' and 't' swapped -> \"tac\"."
    }
  ],
  "starterCode": {
    "python": "def replace_character(s: str, ch1: str, ch2: str) -> str:\n    # TODO: Swap all occurrences of ch1 and ch2 simultaneously\n    pass\n\nif __name__ == \"__main__\":\n    print(replace_character(\"apples\", 'a', 'p'))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String replaceCharacter(String s, char ch1, char ch2) {\n        // TODO: Swap all occurrences of ch1 and ch2 simultaneously\n        return \"\";\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string ReplaceCharacter(std::string s, char ch1, char ch2) {\n    // TODO: Swap all occurrences of ch1 and ch2 simultaneously\n    return \"\";\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string ReplaceCharacter(string s, char ch1, char ch2) {\n        // TODO: Swap all occurrences of ch1 and ch2 simultaneously\n        return \"\";\n    }\n}\n",
    "javascript": "function replaceCharacter(s, ch1, ch2) {\n  // TODO: Swap all occurrences of ch1 and ch2 simultaneously\n  return \"\";\n}\n"
  },
  "solutions": {
    "python": "def replace_character(s: str, ch1: str, ch2: str) -> str:\n    if not s or ch1 == ch2:\n        return s\n    res = []\n    for c in s:\n        if c == ch1:\n            res.append(ch2)\n        elif c == ch2:\n            res.append(ch1)\n        else:\n            res.append(c)\n    return \"\".join(res)\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String replaceCharacter(String s, char ch1, char ch2) {\n        if (s == null || ch1 == ch2) return s;\n        char[] arr = s.toCharArray();\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == ch1) arr[i] = ch2;\n            else if (arr[i] == ch2) arr[i] = ch1;\n        }\n        return new String(arr);\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string ReplaceCharacter(std::string s, char ch1, char ch2) {\n    if (ch1 == ch2) return s;\n    for (char &c : s) {\n        if (c == ch1) c = ch2;\n        else if (c == ch2) c = ch1;\n    }\n    return s;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string ReplaceCharacter(string s, char ch1, char ch2) {\n        if (string.IsNullOrEmpty(s) || ch1 == ch2) return s;\n        char[] arr = s.ToCharArray();\n        for (int i = 0; i < arr.Length; i++) {\n            if (arr[i] == ch1) arr[i] = ch2;\n            else if (arr[i] == ch2) arr[i] = ch1;\n        }\n        return new string(arr);\n    }\n}\n",
    "javascript": "function replaceCharacter(s, ch1, ch2) {\n  if (!s || ch1 === ch2) return s;\n  return s.split('').map(c => c === ch1 ? ch2 : (c === ch2 ? ch1 : c)).join('');\n}\n"
  }
,
  runSimulation: (args) => {
      const [s, ch1, ch2] = args;
      if (!s || ch1 === ch2) return s;
      return s.split('').map(c => c === ch1 ? ch2 : (c === ch2 ? ch1 : c)).join('');
    }
  },

  // =========================================================================
  // Q44. Reverse Words
  // =========================================================================
  {
  "id": "dsa-p-44",
  "qno": 44,
  "title": "Reverse Words",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "String Manipulation / Word Reversal",
  "company": "Accenture",
  "pattern": "Word Tokenization and Reversal",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given a single line of text containing words separated by spaces, reverse the order of the words.\n\nThe output should be the string with its words reversed in order, separated by single spaces.",
  "rules": [
    "Words are separated by spaces.",
    "Reverse the sequence of words, keeping characters within each word in original order.",
    "Preserve word casing."
  ],
  "coreLogic": "Split the string by spaces into an array of words, reverse the array, and join with a single space.",
  "dryRun": [
    {
      "input": "Hello World",
      "words": [
        "Hello",
        "World"
      ],
      "reversed": [
        "World",
        "Hello"
      ],
      "output": "World Hello"
    }
  ],
  "constraints": [
    "1 <= s.length <= 10^5",
    "s consists of printable ASCII characters and spaces"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "s = \"Hello World\"",
      "args": [
        "Hello World"
      ],
      "expectedOutput": "World Hello",
      "explanation": "The order of words is reversed: \"Hello World\" -> \"World Hello\"."
    },
    {
      "id": "tc-2",
      "name": "Three Words",
      "input": "s = \"Accenture Assessment DSA\"",
      "args": [
        "Accenture Assessment DSA"
      ],
      "expectedOutput": "DSA Assessment Accenture",
      "explanation": "Words reversed in sequence."
    },
    {
      "id": "tc-3",
      "name": "Single Word",
      "input": "s = \"Single\"",
      "args": [
        "Single"
      ],
      "expectedOutput": "Single",
      "explanation": "A single word remains unchanged."
    },
    {
      "id": "tc-4",
      "name": "Four Words",
      "input": "s = \"one two three four\"",
      "args": [
        "one two three four"
      ],
      "expectedOutput": "four three two one",
      "explanation": "Words reversed in place."
    },
    {
      "id": "tc-5",
      "name": "Proverb Phrase",
      "input": "s = \"Practice Makes Perfect\"",
      "args": [
        "Practice Makes Perfect"
      ],
      "expectedOutput": "Perfect Makes Practice",
      "explanation": "Words reversed."
    }
  ],
  "starterCode": {
    "python": "def reverse_words(s: str) -> str:\n    # TODO: Reverse the order of words in string s\n    pass\n\nif __name__ == \"__main__\":\n    print(reverse_words(\"Hello World\"))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String reverseWords(String s) {\n        // TODO: Reverse the order of words in string s\n        return \"\";\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string reverseWords(std::string s) {\n    // TODO: Reverse the order of words in string s\n    return \"\";\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string ReverseWords(string s) {\n        // TODO: Reverse the order of words in string s\n        return \"\";\n    }\n}\n",
    "javascript": "function reverseWords(s) {\n  // TODO: Reverse the order of words in string s\n  return \"\";\n}\n"
  },
  "solutions": {
    "python": "def reverse_words(s: str) -> str:\n    words = s.strip().split()\n    return \" \".join(reversed(words))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String reverseWords(String s) {\n        if (s == null) return \"\";\n        String[] words = s.trim().split(\"\\\\s+\");\n        StringBuilder sb = new StringBuilder();\n        for (int i = words.length - 1; i >= 0; i--) {\n            if (sb.length() > 0) sb.append(\" \");\n            sb.append(words[i]);\n        }\n        return sb.toString();\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\n#include <algorithm>\n\nstd::string reverseWords(std::string s) {\n    std::stringstream ss(s);\n    std::vector<std::string> words;\n    std::string w;\n    while (ss >> w) words.push_back(w);\n    std::reverse(words.begin(), words.end());\n    std::string res = \"\";\n    for (size_t i = 0; i < words.size(); i++) {\n        if (i > 0) res += \" \";\n        res += words[i];\n    }\n    return res;\n}\n",
    "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static string ReverseWords(string s) {\n        if (string.IsNullOrEmpty(s)) return \"\";\n        string[] words = s.Trim().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries);\n        Array.Reverse(words);\n        return string.Join(\" \", words);\n    }\n}\n",
    "javascript": "function reverseWords(s) {\n  if (!s) return \"\";\n  return s.trim().split(/\\s+/).reverse().join(' ');\n}\n"
  }
,
  runSimulation: (args) => {
      const [s] = args;
      if (!s) return "";
      return s.trim().split(/\s+/).reverse().join(' ');
    }
  },

  // =========================================================================
  // Q45. Roots of a Quadratic Equation
  // =========================================================================
  {
  "id": "dsa-p-45",
  "qno": 45,
  "title": "Roots of a Quadratic Equation",
  "difficulty": "Easy",
  "category": "Mathematics",
  "topic": "Quadratic Formula / Discriminant",
  "company": "Accenture",
  "pattern": "Formula Evaluation",
  "timeComplexity": "O(1)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 12,
  "description": "Given coefficients `a`, `b`, and `c` of the quadratic equation `ax² + bx + c = 0`, find its roots using the discriminant formula:\n`D = b² - 4ac`\n\n- If `D > 0`: There are two distinct real roots. Return both roots separated by a comma and space: `\"x1, x2\"` where `x1 = (-b + √D) / (2a)` and `x2 = (-b - √D) / (2a)` (formatted as integer if whole number, otherwise up to 2 decimal places).\n- If `D == 0`: There is one repeated real root `x = -b / (2a)`. Return it as string.\n- If `D < 0`: Roots are complex. Return `\"Complex roots\"`.",
  "rules": [
    "Calculate discriminant D = b * b - 4 * a * c.",
    "If D > 0, return formatted \"x1, x2\".",
    "If D == 0, return formatted \"x\".",
    "If D < 0, return \"Complex roots\"."
  ],
  "coreLogic": "Evaluate D = b² - 4ac. Branch on D > 0, D == 0, or D < 0. Format the roots cleanly without decimal points if they are exact integers.",
  "dryRun": [
    {
      "a": 1,
      "b": -5,
      "c": 6,
      "D": 1,
      "sqrtD": 1,
      "x1": 3,
      "x2": 2,
      "result": "3, 2"
    },
    {
      "a": 1,
      "b": -2,
      "c": 1,
      "D": 0,
      "x": 1,
      "result": "1"
    },
    {
      "a": 1,
      "b": 2,
      "c": 5,
      "D": -16,
      "result": "Complex roots"
    }
  ],
  "constraints": [
    "a != 0",
    "-10^4 <= a, b, c <= 10^4"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Two Distinct Roots",
      "input": "a = 1, b = -5, c = 6",
      "args": [
        1,
        -5,
        6
      ],
      "expectedOutput": "3, 2",
      "explanation": "D = 25 - 24 = 1 > 0. Roots are (5 + 1)/2 = 3 and (5 - 1)/2 = 2."
    },
    {
      "id": "tc-2",
      "name": "One Repeated Root",
      "input": "a = 1, b = -2, c = 1",
      "args": [
        1,
        -2,
        1
      ],
      "expectedOutput": "1",
      "explanation": "D = 4 - 4 = 0. Single repeated root is 2 / 2 = 1."
    },
    {
      "id": "tc-3",
      "name": "Complex Roots",
      "input": "a = 1, b = 2, c = 5",
      "args": [
        1,
        2,
        5
      ],
      "expectedOutput": "Complex roots",
      "explanation": "D = 4 - 20 = -16 < 0. Returns \"Complex roots\"."
    },
    {
      "id": "tc-4",
      "name": "Another Real Pair",
      "input": "a = 1, b = -7, c = 12",
      "args": [
        1,
        -7,
        12
      ],
      "expectedOutput": "4, 3",
      "explanation": "D = 49 - 48 = 1. Roots are (7 + 1)/2 = 4 and (7 - 1)/2 = 3."
    },
    {
      "id": "tc-5",
      "name": "Difference of Squares",
      "input": "a = 1, b = 0, c = -4",
      "args": [
        1,
        0,
        -4
      ],
      "expectedOutput": "2, -2",
      "explanation": "x^2 - 4 = 0. Roots are 2 and -2."
    }
  ],
  "starterCode": {
    "python": "def find_roots(a: int, b: int, c: int) -> str:\n    # TODO: Return roots of quadratic equation or \"Complex roots\"\n    pass\n\nif __name__ == \"__main__\":\n    print(find_roots(1, -5, 6))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String findRoots(int a, int b, int c) {\n        // TODO: Return roots of quadratic equation or \"Complex roots\"\n        return \"\";\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string findRoots(int a, int b, int c) {\n    // TODO: Return roots of quadratic equation or \"Complex roots\"\n    return \"\";\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string FindRoots(int a, int b, int c) {\n        // TODO: Return roots of quadratic equation or \"Complex roots\"\n        return \"\";\n    }\n}\n",
    "javascript": "function findRoots(a, b, c) {\n  // TODO: Return roots of quadratic equation or \"Complex roots\"\n  return \"\";\n}\n"
  },
  "solutions": {
    "python": "import math\n\ndef find_roots(a: int, b: int, c: int) -> str:\n    D = b * b - 4 * a * c\n    if D > 0:\n        x1 = (-b + math.sqrt(D)) / (2 * a)\n        x2 = (-b - math.sqrt(D)) / (2 * a)\n        f1 = int(x1) if x1.is_integer() else round(x1, 2)\n        f2 = int(x2) if x2.is_integer() else round(x2, 2)\n        return f\"{f1}, {f2}\"\n    elif D == 0:\n        x = -b / (2 * a)\n        f = int(x) if x.is_integer() else round(x, 2)\n        return f\"{f}\"\n    else:\n        return \"Complex roots\"\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    private static String fmt(double v) {\n        if (v == (long)v) return String.valueOf((long)v);\n        return String.format(Locale.US, \"%.2f\", v);\n    }\n\n    public static String findRoots(int a, int b, int c) {\n        double D = (double)b * b - 4.0 * a * c;\n        if (D > 0) {\n            double x1 = (-b + Math.sqrt(D)) / (2.0 * a);\n            double x2 = (-b - Math.sqrt(D)) / (2.0 * a);\n            return fmt(x1) + \", \" + fmt(x2);\n        } else if (D == 0) {\n            double x = -b / (2.0 * a);\n            return fmt(x);\n        } else {\n            return \"Complex roots\";\n        }\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n#include <cmath>\n#include <sstream>\n\nstd::string fmt(double v) {\n    if (v == (long long)v) return std::to_string((long long)v);\n    std::ostringstream ss;\n    ss << v;\n    return ss.str();\n}\n\nstd::string findRoots(int a, int b, int c) {\n    double D = (double)b * b - 4.0 * a * c;\n    if (D > 0) {\n        double x1 = (-b + std::sqrt(D)) / (2.0 * a);\n        double x2 = (-b - std::sqrt(D)) / (2.0 * a);\n        return fmt(x1) + \", \" + fmt(x2);\n    } else if (D == 0) {\n        double x = -b / (2.0 * a);\n        return fmt(x);\n    } else {\n        return \"Complex roots\";\n    }\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    private static string Fmt(double v) {\n        if (v == (long)v) return ((long)v).ToString();\n        return v.ToString(\"0.##\");\n    }\n\n    public static string FindRoots(int a, int b, int c) {\n        double D = (double)b * b - 4.0 * a * c;\n        if (D > 0) {\n            double x1 = (-b + Math.Sqrt(D)) / (2.0 * a);\n            double x2 = (-b - Math.Sqrt(D)) / (2.0 * a);\n            return Fmt(x1) + \", \" + Fmt(x2);\n        } else if (D == 0) {\n            double x = -b / (2.0 * a);\n            return Fmt(x);\n        } else {\n            return \"Complex roots\";\n        }\n    }\n}\n",
    "javascript": "function findRoots(a, b, c) {\n  const D = b * b - 4 * a * c;\n  const fmt = (v) => Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2)));\n  if (D > 0) {\n    const x1 = (-b + Math.sqrt(D)) / (2 * a);\n    const x2 = (-b - Math.sqrt(D)) / (2 * a);\n    return `${fmt(x1)}, ${fmt(x2)}`;\n  } else if (D === 0) {\n    const x = -b / (2 * a);\n    return fmt(x);\n  } else {\n    return \"Complex roots\";\n  }\n}\n"
  }
,
  runSimulation: (args) => {
      const [a, b, c] = args;
      const D = b * b - 4 * a * c;
      const fmt = (v) => Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2)));
      if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return `${fmt(x1)}, ${fmt(x2)}`;
      } else if (D === 0) {
        const x = -b / (2 * a);
        return fmt(x);
      } else {
        return "Complex roots";
      }
    }
  },

  // =========================================================================
  // Q46. Rotate Array by K
  // =========================================================================
  {
  "id": "dsa-p-46",
  "qno": 46,
  "title": "Rotate Array by K",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Array Reversal / Right Rotation",
  "company": "Accenture",
  "pattern": "Array Reversal Algorithm",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 12,
  "description": "Given an integer array `arr` and a non-negative integer `k`, rotate the array to the right by `k` positions.\n\nReturn the rotated array.",
  "rules": [
    "If arr is empty or has length 1, return it unchanged.",
    "Effective rotation k = k % arr.length.",
    "Rotate elements to the right by k positions."
  ],
  "coreLogic": "Using the 3-step reversal algorithm:\n1. Reverse the whole array: [7,6,5,4,3,2,1]\n2. Reverse first k elements: [5,6,7,4,3,2,1]\n3. Reverse remaining n - k elements: [5,6,7,1,2,3,4]",
  "dryRun": [
    {
      "step": "Initial",
      "arr": "[1, 2, 3, 4, 5, 6, 7]",
      "k": 3
    },
    {
      "step": "Reverse all",
      "arr": "[7, 6, 5, 4, 3, 2, 1]"
    },
    {
      "step": "Reverse 0..2",
      "arr": "[5, 6, 7, 4, 3, 2, 1]"
    },
    {
      "step": "Reverse 3..6",
      "arr": "[5, 6, 7, 1, 2, 3, 4]"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "0 <= k <= 10^5"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "arr = [1, 2, 3, 4, 5, 6, 7], k = 3",
      "args": [
        [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        3
      ],
      "expectedOutput": "[5, 6, 7, 1, 2, 3, 4]",
      "explanation": "Right shifted by 3 positions gives [5, 6, 7, 1, 2, 3, 4]."
    },
    {
      "id": "tc-2",
      "name": "Even Length Half Shift",
      "input": "arr = [1, 2, 3, 4], k = 2",
      "args": [
        [
          1,
          2,
          3,
          4
        ],
        2
      ],
      "expectedOutput": "[3, 4, 1, 2]",
      "explanation": "Rotated right by 2 gives [3, 4, 1, 2]."
    },
    {
      "id": "tc-3",
      "name": "k Greater than Length",
      "input": "arr = [1, 2], k = 3",
      "args": [
        [
          1,
          2
        ],
        3
      ],
      "expectedOutput": "[2, 1]",
      "explanation": "k % 2 = 1. Rotated by 1 gives [2, 1]."
    },
    {
      "id": "tc-4",
      "name": "Single Element",
      "input": "arr = [10], k = 5",
      "args": [
        [
          10
        ],
        5
      ],
      "expectedOutput": "[10]",
      "explanation": "Single element remains unchanged."
    },
    {
      "id": "tc-5",
      "name": "Zero Shift",
      "input": "arr = [1, 2, 3], k = 0",
      "args": [
        [
          1,
          2,
          3
        ],
        0
      ],
      "expectedOutput": "[1, 2, 3]",
      "explanation": "k = 0 gives unchanged array."
    }
  ],
  "starterCode": {
    "python": "def rotate_array(arr: list, k: int) -> list:\n    # TODO: Rotate array to the right by k positions and return it\n    pass\n\nif __name__ == \"__main__\":\n    print(rotate_array([1, 2, 3, 4, 5, 6, 7], 3))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] rotateArray(int[] arr, int k) {\n        // TODO: Rotate array to the right by k positions and return it\n        return new int[]{};\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nstd::vector<int> rotateArray(std::vector<int>& arr, int k) {\n    // TODO: Rotate vector to the right by k positions and return it\n    return {};\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int[] RotateArray(int[] arr, int k) {\n        // TODO: Rotate array to the right by k positions and return it\n        return new int[0];\n    }\n}\n",
    "javascript": "function rotateArray(arr, k) {\n  // TODO: Rotate array to the right by k positions and return it\n  return [];\n}\n"
  },
  "solutions": {
    "python": "def rotate_array(arr: list, k: int) -> list:\n    n = len(arr)\n    if n <= 1:\n        return arr\n    k %= n\n    return arr[-k:] + arr[:-k] if k > 0 else arr\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    private static void reverse(int[] a, int l, int r) {\n        while (l < r) {\n            int t = a[l];\n            a[l] = a[r];\n            a[r] = t;\n            l++;\n            r--;\n        }\n    }\n\n    public static int[] rotateArray(int[] arr, int k) {\n        if (arr == null || arr.length <= 1) return arr;\n        int n = arr.length;\n        k %= n;\n        if (k == 0) return arr;\n        int[] res = arr.clone();\n        reverse(res, 0, n - 1);\n        reverse(res, 0, k - 1);\n        reverse(res, k, n - 1);\n        return res;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstd::vector<int> rotateArray(std::vector<int>& arr, int k) {\n    int n = arr.size();\n    if (n <= 1) return arr;\n    k %= n;\n    if (k == 0) return arr;\n    std::vector<int> res = arr;\n    std::reverse(res.begin(), res.end());\n    std::reverse(res.begin(), res.begin() + k);\n    std::reverse(res.begin() + k, res.end());\n    return res;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    private static void Reverse(int[] a, int l, int r) {\n        while (l < r) {\n            int t = a[l];\n            a[l] = a[r];\n            a[r] = t;\n            l++;\n            r--;\n        }\n    }\n\n    public static int[] RotateArray(int[] arr, int k) {\n        if (arr == null || arr.Length <= 1) return arr;\n        int n = arr.Length;\n        k %= n;\n        if (k == 0) return arr;\n        int[] res = (int[])arr.Clone();\n        Reverse(res, 0, n - 1);\n        Reverse(res, 0, k - 1);\n        Reverse(res, k, n - 1);\n        return res;\n    }\n}\n",
    "javascript": "function rotateArray(arr, k) {\n  if (!arr || arr.length <= 1) return arr || [];\n  const n = arr.length;\n  k %= n;\n  if (k === 0) return [...arr];\n  return arr.slice(-k).concat(arr.slice(0, n - k));\n}\n"
  }
,
  runSimulation: (args) => {
      const [arr, k] = args;
      if (!arr || arr.length <= 1) return JSON.stringify(arr || []);
      const n = arr.length;
      const rot = k % n;
      if (rot === 0) return JSON.stringify(arr);
      const res = arr.slice(-rot).concat(arr.slice(0, n - rot));
      return JSON.stringify(res);
    }
  },

  // =========================================================================
  // Q47. Second Largest
  // =========================================================================
  {
  "id": "dsa-p-47",
  "qno": 47,
  "title": "Second Largest",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Array Traversal / Two Largest Elements",
  "company": "Accenture",
  "pattern": "Single-Pass Maximum Tracking",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given an integer array `arr`, find and return the second-largest distinct element in the array.\n\nIf no second-largest distinct element exists, return `-1`.",
  "rules": [
    "Maintain the largest and second-largest distinct values.",
    "Traverse the array once.",
    "Return the second-largest value."
  ],
  "coreLogic": "Traverse the array maintaining largest and second. When x > largest, second = largest, largest = x. Else if x > second and x != largest, second = x.",
  "dryRun": [
    {
      "x": 10,
      "largest": 10,
      "second": null
    },
    {
      "x": 5,
      "largest": 10,
      "second": 5
    },
    {
      "x": 8,
      "largest": 10,
      "second": 8
    },
    {
      "x": 20,
      "largest": 20,
      "second": 10
    },
    {
      "x": 15,
      "largest": 20,
      "second": 15
    }
  ],
  "constraints": [
    "1 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "arr = [10, 5, 8, 20, 15]",
      "args": [
        [
          10,
          5,
          8,
          20,
          15
        ]
      ],
      "expectedOutput": "15",
      "explanation": "Largest is 20, second largest distinct is 15."
    },
    {
      "id": "tc-2",
      "name": "Four Elements",
      "input": "arr = [3, 1, 7, 5]",
      "args": [
        [
          3,
          1,
          7,
          5
        ]
      ],
      "expectedOutput": "5",
      "explanation": "Largest is 7, second largest is 5."
    },
    {
      "id": "tc-3",
      "name": "Two Elements",
      "input": "arr = [100, 50]",
      "args": [
        [
          100,
          50
        ]
      ],
      "expectedOutput": "50",
      "explanation": "Second largest of [100, 50] is 50."
    },
    {
      "id": "tc-4",
      "name": "Negative Numbers",
      "input": "arr = [-1, -5, -2, -10]",
      "args": [
        [
          -1,
          -5,
          -2,
          -10
        ]
      ],
      "expectedOutput": "-2",
      "explanation": "Largest is -1, second largest is -2."
    },
    {
      "id": "tc-5",
      "name": "Duplicates of Largest",
      "input": "arr = [10, 10, 8, 6]",
      "args": [
        [
          10,
          10,
          8,
          6
        ]
      ],
      "expectedOutput": "8",
      "explanation": "Duplicate 10s ignored, next distinct largest is 8."
    }
  ],
  "starterCode": {
    "python": "def second_largest(arr: list) -> int:\n    # TODO: Return second-largest distinct element\n    pass\n\nif __name__ == \"__main__\":\n    print(second_largest([10, 5, 8, 20, 15]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int secondLargest(int[] arr) {\n        // TODO: Return second-largest distinct element\n        return -1;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint secondLargest(std::vector<int>& arr) {\n    // TODO: Return second-largest distinct element\n    return -1;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SecondLargest(int[] arr) {\n        // TODO: Return second-largest distinct element\n        return -1;\n    }\n}\n",
    "javascript": "function secondLargest(arr) {\n  // TODO: Return second-largest distinct element\n  return -1;\n}\n"
  },
  "solutions": {
    "python": "def second_largest(arr: list) -> int:\n    largest = float('-inf')\n    second = float('-inf')\n    for x in arr:\n        if x > largest:\n            second = largest\n            largest = x\n        elif x > second and x != largest:\n            second = x\n    return int(second) if second != float('-inf') else -1\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int secondLargest(int[] arr) {\n        if (arr == null || arr.length < 2) return -1;\n        long largest = Long.MIN_VALUE;\n        long second = Long.MIN_VALUE;\n        for (int x : arr) {\n            if (x > largest) {\n                second = largest;\n                largest = x;\n            } else if (x > second && x != largest) {\n                second = x;\n            }\n        }\n        return second == Long.MIN_VALUE ? -1 : (int)second;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <climits>\n\nint secondLargest(std::vector<int>& arr) {\n    if (arr.size() < 2) return -1;\n    long long largest = LLONG_MIN;\n    long long second = LLONG_MIN;\n    for (int x : arr) {\n        if (x > largest) {\n            second = largest;\n            largest = x;\n        } else if (x > second && x != largest) {\n            second = x;\n        }\n    }\n    return second == LLONG_MIN ? -1 : (int)second;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SecondLargest(int[] arr) {\n        if (arr == null || arr.Length < 2) return -1;\n        long largest = long.MinValue;\n        long second = long.MinValue;\n        foreach (int x in arr) {\n            if (x > largest) {\n                second = largest;\n                largest = x;\n            } else if (x > second && x != largest) {\n                second = x;\n            }\n        }\n        return second == long.MinValue ? -1 : (int)second;\n    }\n}\n",
    "javascript": "function secondLargest(arr) {\n  if (!arr || arr.length < 2) return -1;\n  let largest = -Infinity;\n  let second = -Infinity;\n  for (const x of arr) {\n    if (x > largest) {\n      second = largest;\n      largest = x;\n    } else if (x > second && x !== largest) {\n      second = x;\n    }\n  }\n  return second === -Infinity ? -1 : second;\n}\n"
  }
,
  runSimulation: (args) => {
      const [arr] = args;
      if (!arr || arr.length < 2) return -1;
      let largest = -Infinity;
      let second = -Infinity;
      for (const x of arr) {
        if (x > largest) {
          second = largest;
          largest = x;
        } else if (x > second && x !== largest) {
          second = x;
        }
      }
      return second === -Infinity ? -1 : second;
    }
  },

  // =========================================================================
  // Q48. Set Zero Matrix
  // =========================================================================
  {
  "id": "dsa-p-48",
  "qno": 48,
  "title": "Set Zero Matrix",
  "difficulty": "Medium",
  "category": "Matrix",
  "topic": "Matrix Manipulation / In-Place Marking",
  "company": "Accenture",
  "pattern": "Row & Column Array Marking",
  "timeComplexity": "O(M × N)",
  "spaceComplexity": "O(M + N)",
  "rewardXp": 80,
  "targetMins": 15,
  "description": "Given an `m × n` integer matrix, if an element is `0`, set its entire row and column to `0`.\n\nReturn the modified matrix.",
  "rules": [
    "Record all row and column indices containing a 0.",
    "In a second pass, set matrix[i][j] = 0 if row i or col j was marked.",
    "Do not modify rows/columns prematurely during the first scan."
  ],
  "coreLogic": "Use two boolean/integer arrays row[] of size m and col[] of size n. First pass marks row[i] = true and col[j] = true for every 0. Second pass sets matrix[i][j] = 0 if row[i] or col[j] is marked.",
  "dryRun": [
    {
      "step": "Initial",
      "matrix": "[[1, 1, 1], [1, 0, 1], [1, 1, 1]]"
    },
    {
      "step": "Zero at (1,1)",
      "row": "[0, 1, 0]",
      "col": "[0, 1, 0]"
    },
    {
      "step": "Final",
      "matrix": "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]"
    }
  ],
  "constraints": [
    "1 <= m, n <= 200",
    "-2^31 <= matrix[i][j] <= 2^31 - 1"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given 3x3 Example",
      "input": "matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]",
      "args": [
        [
          [
            1,
            1,
            1
          ],
          [
            1,
            0,
            1
          ],
          [
            1,
            1,
            1
          ]
        ]
      ],
      "expectedOutput": "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      "explanation": "0 at (1, 1) clears row 1 and column 1."
    },
    {
      "id": "tc-2",
      "name": "Corner Zero",
      "input": "matrix = [[0, 1], [1, 1]]",
      "args": [
        [
          [
            0,
            1
          ],
          [
            1,
            1
          ]
        ]
      ],
      "expectedOutput": "[[0, 0], [0, 1]]",
      "explanation": "0 at (0, 0) clears row 0 and column 0."
    },
    {
      "id": "tc-3",
      "name": "No Zeroes",
      "input": "matrix = [[1, 2, 3], [4, 5, 6]]",
      "args": [
        [
          [
            1,
            2,
            3
          ],
          [
            4,
            5,
            6
          ]
        ]
      ],
      "expectedOutput": "[[1, 2, 3], [4, 5, 6]]",
      "explanation": "Matrix has no zeros, remains unchanged."
    },
    {
      "id": "tc-4",
      "name": "Middle Column Zero",
      "input": "matrix = [[1, 0, 3], [4, 5, 6], [7, 8, 9]]",
      "args": [
        [
          [
            1,
            0,
            3
          ],
          [
            4,
            5,
            6
          ],
          [
            7,
            8,
            9
          ]
        ]
      ],
      "expectedOutput": "[[0, 0, 0], [4, 0, 6], [7, 0, 9]]",
      "explanation": "0 at (0, 1) clears row 0 and column 1."
    },
    {
      "id": "tc-5",
      "name": "All Zeroes",
      "input": "matrix = [[0, 0], [0, 0]]",
      "args": [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ],
      "expectedOutput": "[[0, 0], [0, 0]]",
      "explanation": "All elements remain 0."
    }
  ],
  "starterCode": {
    "python": "def set_zero_matrix(matrix: list) -> list:\n    # TODO: Modify matrix so that rows and cols with 0 are zeroed out\n    pass\n\nif __name__ == \"__main__\":\n    print(set_zero_matrix([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int[][] setZeroMatrix(int[][] matrix) {\n        // TODO: Modify matrix so that rows and cols with 0 are zeroed out\n        return matrix;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nstd::vector<std::vector<int>> setZeroMatrix(std::vector<std::vector<int>>& matrix) {\n    // TODO: Modify matrix so that rows and cols with 0 are zeroed out\n    return matrix;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int[][] SetZeroMatrix(int[][] matrix) {\n        // TODO: Modify matrix so that rows and cols with 0 are zeroed out\n        return matrix;\n    }\n}\n",
    "javascript": "function setZeroMatrix(matrix) {\n  // TODO: Modify matrix so that rows and cols with 0 are zeroed out\n  return matrix;\n}\n"
  },
  "solutions": {
    "python": "def set_zero_matrix(matrix: list) -> list:\n    if not matrix or not matrix[0]:\n        return matrix\n    m, n = len(matrix), len(matrix[0])\n    rows = [False] * m\n    cols = [False] * n\n    for i in range(m):\n        for j in range(n):\n            if matrix[i][j] == 0:\n                rows[i] = True\n                cols[j] = True\n    for i in range(m):\n        for j in range(n):\n            if rows[i] or cols[j]:\n                matrix[i][j] = 0\n    return matrix\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int[][] setZeroMatrix(int[][] matrix) {\n        if (matrix == null || matrix.length == 0) return matrix;\n        int m = matrix.length, n = matrix[0].length;\n        boolean[] rows = new boolean[m];\n        boolean[] cols = new boolean[n];\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (matrix[i][j] == 0) {\n                    rows[i] = true;\n                    cols[j] = true;\n                }\n            }\n        }\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (rows[i] || cols[j]) {\n                    matrix[i][j] = 0;\n                }\n            }\n        }\n        return matrix;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nstd::vector<std::vector<int>> setZeroMatrix(std::vector<std::vector<int>>& matrix) {\n    int m = matrix.size();\n    if (m == 0) return matrix;\n    int n = matrix[0].size();\n    std::vector<bool> rows(m, false), cols(n, false);\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (matrix[i][j] == 0) {\n                rows[i] = true;\n                cols[j] = true;\n            }\n        }\n    }\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (rows[i] || cols[j]) {\n                matrix[i][j] = 0;\n            }\n        }\n    }\n    return matrix;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int[][] SetZeroMatrix(int[][] matrix) {\n        if (matrix == null || matrix.Length == 0) return matrix;\n        int m = matrix.Length, n = matrix[0].Length;\n        bool[] rows = new bool[m];\n        bool[] cols = new bool[n];\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (matrix[i][j] == 0) {\n                    rows[i] = true;\n                    cols[j] = true;\n                }\n            }\n        }\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (rows[i] || cols[j]) {\n                    matrix[i][j] = 0;\n                }\n            }\n        }\n        return matrix;\n    }\n}\n",
    "javascript": "function setZeroMatrix(matrix) {\n  if (!matrix || matrix.length === 0) return matrix;\n  const m = matrix.length, n = matrix[0].length;\n  const rows = new Array(m).fill(false);\n  const cols = new Array(n).fill(false);\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      if (matrix[i][j] === 0) {\n        rows[i] = true;\n        cols[j] = true;\n      }\n    }\n  }\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      if (rows[i] || cols[j]) {\n        matrix[i][j] = 0;\n      }\n    }\n  }\n  return matrix;\n}\n"
  }
,
  runSimulation: (args) => {
      const [matrix] = args;
      if (!matrix || matrix.length === 0) return '[]';
      const m = matrix.length, n = matrix[0].length;
      const clone = matrix.map(r => [...r]);
      const rows = new Array(m).fill(false);
      const cols = new Array(n).fill(false);
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (clone[i][j] === 0) {
            rows[i] = true;
            cols[j] = true;
          }
        }
      }
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (rows[i] || cols[j]) {
            clone[i][j] = 0;
          }
        }
      }
      return JSON.stringify(clone);
    }
  },

  // =========================================================================
  // Q49. Small Large Sum
  // =========================================================================
  {
  "id": "dsa-p-49",
  "qno": 49,
  "title": "Small Large Sum",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Even/Odd Indexing / Array Sorting",
  "company": "Accenture",
  "pattern": "Index Parity Separation",
  "timeComplexity": "O(N log N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 50,
  "targetMins": 12,
  "description": "Write a function `smallLargeSum(arr)` that adds:\n- the second-largest element from the even indices (0, 2, 4...)\n- the second-largest element from the odd indices (1, 3, 5...)\n\nSpecial conditions:\n- If the array has 3 or fewer elements, return `0`.\n- An empty array returns `0`.",
  "rules": [
    "If arr.length <= 3, return 0.",
    "Collect elements at even indices (0, 2, 4...) into an array, sort it, and find the second-largest.",
    "Collect elements at odd indices (1, 3, 5...) into an array, sort it, and find the second-largest.",
    "Return the sum of both second-largest values."
  ],
  "coreLogic": "Partition elements into two lists by index parity (i % 2 == 0 vs i % 2 != 0). Sort each list and take the element at (size - 2). Sum the two values.",
  "dryRun": [
    {
      "input": "[3, 2, 1, 7, 5, 4]"
    },
    {
      "even": "[3, 1, 5] -> sorted [1, 3, 5] -> 2nd largest = 3"
    },
    {
      "odd": "[2, 7, 4] -> sorted [2, 4, 7] -> 2nd largest = 4"
    },
    {
      "sum": "3 + 4 = 7"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "arr = [3, 2, 1, 7, 5, 4]",
      "args": [
        [
          3,
          2,
          1,
          7,
          5,
          4
        ]
      ],
      "expectedOutput": "7",
      "explanation": "Even indices: 3, 1, 5 -> 2nd largest 3. Odd indices: 2, 7, 4 -> 2nd largest 4. 3 + 4 = 7."
    },
    {
      "id": "tc-2",
      "name": "Second PDF Sample",
      "input": "arr = [4, 0, 7, 9, 6, 4, 2]",
      "args": [
        [
          4,
          0,
          7,
          9,
          6,
          4,
          2
        ]
      ],
      "expectedOutput": "10",
      "explanation": "Even: [4, 7, 6, 2] -> 2nd largest 6. Odd: [0, 9, 4] -> 2nd largest 4. 6 + 4 = 10."
    },
    {
      "id": "tc-3",
      "name": "Three Elements Return 0",
      "input": "arr = [1, 2, 3]",
      "args": [
        [
          1,
          2,
          3
        ]
      ],
      "expectedOutput": "0",
      "explanation": "Length <= 3 returns 0."
    },
    {
      "id": "tc-4",
      "name": "Four Elements",
      "input": "arr = [10, 20, 30, 40]",
      "args": [
        [
          10,
          20,
          30,
          40
        ]
      ],
      "expectedOutput": "30",
      "explanation": "Even: [10, 30] -> 2nd largest 10. Odd: [20, 40] -> 2nd largest 20. 10 + 20 = 30."
    },
    {
      "id": "tc-5",
      "name": "Empty Array",
      "input": "arr = []",
      "args": [
        []
      ],
      "expectedOutput": "0",
      "explanation": "Empty array returns 0."
    }
  ],
  "starterCode": {
    "python": "def small_large_sum(arr: list) -> int:\n    # TODO: Return sum of 2nd largest in even positions and 2nd largest in odd positions\n    pass\n\nif __name__ == \"__main__\":\n    print(small_large_sum([3, 2, 1, 7, 5, 4]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int smallLargeSum(int[] arr) {\n        // TODO: Return sum of 2nd largest in even positions and 2nd largest in odd positions\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint SmallLargeSum(std::vector<int>& arr) {\n    // TODO: Return sum of 2nd largest in even positions and 2nd largest in odd positions\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SmallLargeSum(int[] arr) {\n        // TODO: Return sum of 2nd largest in even positions and 2nd largest in odd positions\n        return 0;\n    }\n}\n",
    "javascript": "function smallLargeSum(arr) {\n  // TODO: Return sum of 2nd largest in even positions and 2nd largest in odd positions\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def small_large_sum(arr: list) -> int:\n    if len(arr) <= 3:\n        return 0\n    even = sorted(arr[0::2])\n    odd = sorted(arr[1::2])\n    if len(even) < 2 or len(odd) < 2:\n        return 0\n    return even[-2] + odd[-2]\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int smallLargeSum(int[] arr) {\n        if (arr == null || arr.length <= 3) return 0;\n        List<Integer> even = new ArrayList<>();\n        List<Integer> odd = new ArrayList<>();\n        for (int i = 0; i < arr.length; i++) {\n            if (i % 2 == 0) even.add(arr[i]);\n            else odd.add(arr[i]);\n        }\n        if (even.size() < 2 || odd.size() < 2) return 0;\n        Collections.sort(even);\n        Collections.sort(odd);\n        return even.get(even.size() - 2) + odd.get(odd.size() - 2);\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint SmallLargeSum(std::vector<int>& arr) {\n    if (arr.size() <= 3) return 0;\n    std::vector<int> even, odd;\n    for (size_t i = 0; i < arr.size(); i++) {\n        if (i % 2 == 0) even.push_back(arr[i]);\n        else odd.push_back(arr[i]);\n    }\n    if (even.size() < 2 || odd.size() < 2) return 0;\n    std::sort(even.begin(), even.end());\n    std::sort(odd.begin(), odd.end());\n    return even[even.size() - 2] + odd[odd.size() - 2];\n}\n",
    "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int SmallLargeSum(int[] arr) {\n        if (arr == null || arr.Length <= 3) return 0;\n        List<int> even = new List<int>();\n        List<int> odd = new List<int>();\n        for (int i = 0; i < arr.Length; i++) {\n            if (i % 2 == 0) even.Add(arr[i]);\n            else odd.Add(arr[i]);\n        }\n        if (even.Count < 2 || odd.Count < 2) return 0;\n        even.Sort();\n        odd.Sort();\n        return even[even.Count - 2] + odd[odd.Count - 2];\n    }\n}\n",
    "javascript": "function smallLargeSum(arr) {\n  if (!arr || arr.length <= 3) return 0;\n  const even = [];\n  const odd = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (i % 2 === 0) even.push(arr[i]);\n    else odd.push(arr[i]);\n  }\n  if (even.length < 2 || odd.length < 2) return 0;\n  even.sort((a, b) => a - b);\n  odd.sort((a, b) => a - b);\n  return even[even.length - 2] + odd[odd.length - 2];\n}\n"
  }
,
  runSimulation: (args) => {
      const [arr] = args;
      if (!arr || arr.length <= 3) return 0;
      const even = [];
      const odd = [];
      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) even.push(arr[i]);
        else odd.push(arr[i]);
      }
      if (even.length < 2 || odd.length < 2) return 0;
      even.sort((a, b) => a - b);
      odd.sort((a, b) => a - b);
      return even[even.length - 2] + odd[odd.length - 2];
    }
  },

  // =========================================================================
  // Q50. String Decoder
  // =========================================================================
  {
  "id": "dsa-p-50",
  "qno": 50,
  "title": "String Decoder",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "String Parsing / Run-Length Grouping",
  "company": "Accenture",
  "pattern": "Consecutive Count to Alphabet Mapping",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "A binary string represents an encoded English word. Each uppercase alphabet is represented by a sequence of consecutive `1`s, with `0` acting as a separator.\n- `1` -> `'A'`\n- `11` -> `'B'`\n- `111` -> `'C'`\n- In general, `k` consecutive `1`s represent the `k`th uppercase letter (`A = 1`, `B = 2`, `C = 3` ...).\n\nGiven the binary string `s`, return the decoded English word.",
  "rules": [
    "Traverse the binary string and count consecutive 1s.",
    "When a 0 occurs or the string ends, map the count k to the corresponding uppercase letter (A + k - 1).",
    "Ignore consecutive 0s without 1s."
  ],
  "coreLogic": "Split the binary string by '0'. For each non-empty chunk of '1's, convert its length k to String.fromCharCode(64 + k).",
  "dryRun": [
    {
      "input": "10110111",
      "chunks": [
        "1",
        "11",
        "111"
      ],
      "decoded": "A | B | C -> ABC"
    }
  ],
  "constraints": [
    "1 <= s.length <= 10^5",
    "s consists only of '0' and '1'"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "s = \"10110111\"",
      "args": [
        "10110111"
      ],
      "expectedOutput": "ABC",
      "explanation": "1 -> A, 11 -> B, 111 -> C."
    },
    {
      "id": "tc-2",
      "name": "Single Letter",
      "input": "s = \"1\"",
      "args": [
        "1"
      ],
      "expectedOutput": "A",
      "explanation": "One 1 maps to A."
    },
    {
      "id": "tc-3",
      "name": "Single B",
      "input": "s = \"11\"",
      "args": [
        "11"
      ],
      "expectedOutput": "B",
      "explanation": "Two 1s map to B."
    },
    {
      "id": "tc-4",
      "name": "Single C",
      "input": "s = \"111\"",
      "args": [
        "111"
      ],
      "expectedOutput": "C",
      "explanation": "Three 1s map to C."
    },
    {
      "id": "tc-5",
      "name": "Two Letters AB",
      "input": "s = \"1011\"",
      "args": [
        "1011"
      ],
      "expectedOutput": "AB",
      "explanation": "1 -> A, 11 -> B."
    }
  ],
  "starterCode": {
    "python": "def decode_string(s: str) -> str:\n    # TODO: Decode binary string where consecutive 1s count maps to alphabet\n    pass\n\nif __name__ == \"__main__\":\n    print(decode_string(\"10110111\"))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String decodeString(String s) {\n        // TODO: Decode binary string where consecutive 1s count maps to alphabet\n        return \"\";\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string decodeString(std::string s) {\n    // TODO: Decode binary string where consecutive 1s count maps to alphabet\n    return \"\";\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static string DecodeString(string s) {\n        // TODO: Decode binary string where consecutive 1s count maps to alphabet\n        return \"\";\n    }\n}\n",
    "javascript": "function decodeString(s) {\n  // TODO: Decode binary string where consecutive 1s count maps to alphabet\n  return \"\";\n}\n"
  },
  "solutions": {
    "python": "def decode_string(s: str) -> str:\n    res = []\n    count = 0\n    for ch in s:\n        if ch == '1':\n            count += 1\n        else:\n            if count > 0:\n                res.append(chr(ord('A') + count - 1))\n                count = 0\n    if count > 0:\n        res.append(chr(ord('A') + count - 1))\n    return \"\".join(res)\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static String decodeString(String s) {\n        if (s == null) return \"\";\n        StringBuilder sb = new StringBuilder();\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == '1') {\n                count++;\n            } else {\n                if (count > 0) {\n                    sb.append((char)('A' + count - 1));\n                    count = 0;\n                }\n            }\n        }\n        if (count > 0) {\n            sb.append((char)('A' + count - 1));\n        }\n        return sb.toString();\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nstd::string decodeString(std::string s) {\n    std::string res = \"\";\n    int count = 0;\n    for (char c : s) {\n        if (c == '1') {\n            count++;\n        } else {\n            if (count > 0) {\n                res += (char)('A' + count - 1);\n                count = 0;\n            }\n        }\n    }\n    if (count > 0) {\n        res += (char)('A' + count - 1);\n    }\n    return res;\n}\n",
    "csharp": "using System;\nusing System.Text;\n\npublic class Solution {\n    public static string DecodeString(string s) {\n        if (string.IsNullOrEmpty(s)) return \"\";\n        StringBuilder sb = new StringBuilder();\n        int count = 0;\n        foreach (char c in s) {\n            if (c == '1') {\n                count++;\n            } else {\n                if (count > 0) {\n                    sb.Append((char)('A' + count - 1));\n                    count = 0;\n                }\n            }\n        }\n        if (count > 0) {\n            sb.Append((char)('A' + count - 1));\n        }\n        return sb.ToString();\n    }\n}\n",
    "javascript": "function decodeString(s) {\n  if (!s) return \"\";\n  let res = \"\";\n  let count = 0;\n  for (const c of s) {\n    if (c === '1') {\n      count++;\n    } else {\n      if (count > 0) {\n        res += String.fromCharCode(65 + count - 1);\n        count = 0;\n      }\n    }\n  }\n  if (count > 0) {\n    res += String.fromCharCode(65 + count - 1);\n  }\n  return res;\n}\n"
  }
,
  runSimulation: (args) => {
      const [s] = args;
      if (!s) return "";
      let res = "";
      let count = 0;
      for (const c of s) {
        if (c === '1') {
          count++;
        } else {
          if (count > 0) {
            res += String.fromCharCode(65 + count - 1);
            count = 0;
          }
        }
      }
      if (count > 0) res += String.fromCharCode(65 + count - 1);
      return res;
    }
  },

  // =========================================================================
  // Q51. Sum 3 and 5
  // =========================================================================
  {
  "id": "dsa-p-51",
  "qno": 51,
  "title": "Sum 3 and 5",
  "difficulty": "Easy",
  "category": "Mathematics",
  "topic": "Divisibility / Common Multiples",
  "company": "Accenture",
  "pattern": "Multiples of 15 Accumulation",
  "timeComplexity": "O(N - M)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Implement the function `calculateSum3And5(m, n)` that accepts two positive integers `m` and `n` (`0 < m <= n`).\n\nCalculate and return the sum of all numbers between `m` and `n` (inclusive) that are divisible by both 3 and 5 (i.e. multiples of 15).",
  "rules": [
    "Both endpoints m and n are inclusive.",
    "A number is divisible by both 3 and 5 if and only if it is divisible by 15.",
    "Return 0 if no numbers in range are divisible by 15."
  ],
  "coreLogic": "Iterate from m to n. If i % 15 == 0, add i to the total sum. Return the total.",
  "dryRun": [
    {
      "m": 12,
      "n": 50,
      "multiples": "15, 30, 45",
      "sum": "15 + 30 + 45 = 90"
    }
  ],
  "constraints": [
    "1 <= m <= n <= 10^6"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 12 to 50",
      "input": "m = 12, n = 50",
      "args": [
        12,
        50
      ],
      "expectedOutput": "90",
      "explanation": "Multiples of 15 in [12, 50] are 15, 30, 45. Sum = 90."
    },
    {
      "id": "tc-2",
      "name": "Range 100 to 160",
      "input": "m = 100, n = 160",
      "args": [
        100,
        160
      ],
      "expectedOutput": "510",
      "explanation": "Multiples are 105, 120, 135, 150. Sum = 510."
    },
    {
      "id": "tc-3",
      "name": "No Multiples",
      "input": "m = 1, n = 14",
      "args": [
        1,
        14
      ],
      "expectedOutput": "0",
      "explanation": "No multiple of 15 exists below 15."
    },
    {
      "id": "tc-4",
      "name": "Single Value Multiple",
      "input": "m = 15, n = 15",
      "args": [
        15,
        15
      ],
      "expectedOutput": "15",
      "explanation": "15 is divisible by 15."
    },
    {
      "id": "tc-5",
      "name": "30 to 60",
      "input": "m = 30, n = 60",
      "args": [
        30,
        60
      ],
      "expectedOutput": "135",
      "explanation": "Multiples: 30 + 45 + 60 = 135."
    }
  ],
  "starterCode": {
    "python": "def calculate_sum_3_and_5(m: int, n: int) -> int:\n    # TODO: Return sum of numbers between m and n divisible by both 3 and 5\n    pass\n\nif __name__ == \"__main__\":\n    print(calculate_sum_3_and_5(12, 50))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int calculateSum3And5(int m, int n) {\n        // TODO: Return sum of numbers between m and n divisible by both 3 and 5\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint Calculate(int m, int n) {\n    // TODO: Return sum of numbers between m and n divisible by both 3 and 5\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int Calculate(int m, int n) {\n        // TODO: Return sum of numbers between m and n divisible by both 3 and 5\n        return 0;\n    }\n}\n",
    "javascript": "function calculateSum3And5(m, n) {\n  // TODO: Return sum of numbers between m and n divisible by both 3 and 5\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def calculate_sum_3_and_5(m: int, n: int) -> int:\n    total = 0\n    for i in range(m, n + 1):\n        if i % 15 == 0:\n            total += i\n    return total\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int calculateSum3And5(int m, int n) {\n        int sum = 0;\n        for (int i = m; i <= n; i++) {\n            if (i % 15 == 0) sum += i;\n        }\n        return sum;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint Calculate(int m, int n) {\n    int sum = 0;\n    for (int i = m; i <= n; i++) {\n        if (i % 15 == 0) sum += i;\n    }\n    return sum;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int Calculate(int m, int n) {\n        int sum = 0;\n        for (int i = m; i <= n; i++) {\n            if (i % 15 == 0) sum += i;\n        }\n        return sum;\n    }\n}\n",
    "javascript": "function calculateSum3And5(m, n) {\n  let sum = 0;\n  for (let i = m; i <= n; i++) {\n    if (i % 15 === 0) sum += i;\n  }\n  return sum;\n}\n"
  }
,
  runSimulation: (args) => {
      const [m, n] = args;
      let sum = 0;
      for (let i = m; i <= n; i++) {
        if (i % 15 === 0) sum += i;
      }
      return sum;
    }
  },

  // =========================================================================
  // Q52. Sum Binary
  // =========================================================================
  {
  "id": "dsa-p-52",
  "qno": 52,
  "title": "Sum Binary",
  "difficulty": "Easy",
  "category": "Bit Manipulation",
  "topic": "Binary Representation / Popcount",
  "company": "Accenture",
  "pattern": "Bitwise AND Counting",
  "timeComplexity": "O(log N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 8,
  "description": "Given an integer `n`, calculate and return the sum of the digits in `n` after converting it to binary.\n\nBecause binary contains only digits 0 and 1, the sum of binary digits is equal to the count of set bits (1s).",
  "rules": [
    "Extract binary digits of n.",
    "Sum the digits (count the 1s).",
    "Return the integer sum."
  ],
  "coreLogic": "While n > 0, add n & 1 to sum and shift n >>= 1.",
  "dryRun": [
    {
      "n": 15,
      "binary": "1111",
      "sum": "1 + 1 + 1 + 1 = 4"
    },
    {
      "n": 8,
      "binary": "1000",
      "sum": "1 + 0 + 0 + 0 = 1"
    }
  ],
  "constraints": [
    "0 <= n <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 15",
      "input": "n = 15",
      "args": [
        15
      ],
      "expectedOutput": "4",
      "explanation": "15 in binary is 1111. Digit sum is 1+1+1+1 = 4."
    },
    {
      "id": "tc-2",
      "name": "Power of Two 8",
      "input": "n = 8",
      "args": [
        8
      ],
      "expectedOutput": "1",
      "explanation": "8 in binary is 1000. Sum is 1."
    },
    {
      "id": "tc-3",
      "name": "Seven",
      "input": "n = 7",
      "args": [
        7
      ],
      "expectedOutput": "3",
      "explanation": "7 in binary is 111. Sum is 3."
    },
    {
      "id": "tc-4",
      "name": "Ten",
      "input": "n = 10",
      "args": [
        10
      ],
      "expectedOutput": "2",
      "explanation": "10 in binary is 1010. Sum is 1+0+1+0 = 2."
    },
    {
      "id": "tc-5",
      "name": "One",
      "input": "n = 1",
      "args": [
        1
      ],
      "expectedOutput": "1",
      "explanation": "1 in binary is 1. Sum is 1."
    }
  ],
  "starterCode": {
    "python": "def sum_binary(n: int) -> int:\n    # TODO: Return sum of binary digits of n\n    pass\n\nif __name__ == \"__main__\":\n    print(sum_binary(15))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int sumBinary(int n) {\n        // TODO: Return sum of binary digits of n\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint sumBinary(int n) {\n    // TODO: Return sum of binary digits of n\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SumBinary(int n) {\n        // TODO: Return sum of binary digits of n\n        return 0;\n    }\n}\n",
    "javascript": "function sumBinary(n) {\n  // TODO: Return sum of binary digits of n\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def sum_binary(n: int) -> int:\n    return bin(n).count('1')\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int sumBinary(int n) {\n        return Integer.bitCount(n);\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint sumBinary(int n) {\n    int sum = 0;\n    while (n > 0) {\n        sum += (n & 1);\n        n >>= 1;\n    }\n    return sum;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SumBinary(int n) {\n        int sum = 0;\n        while (n > 0) {\n            sum += (n & 1);\n            n >>= 1;\n        }\n        return sum;\n    }\n}\n",
    "javascript": "function sumBinary(n) {\n  let sum = 0;\n  while (n > 0) {\n    sum += (n & 1);\n    n >>>= 1;\n  }\n  return sum;\n}\n"
  }
,
  runSimulation: (args) => {
      let [n] = args;
      let sum = 0;
      while (n > 0) {
        sum += (n & 1);
        n >>>= 1;
      }
      return sum;
    }
  },

  // =========================================================================
  // Q53. Sum Even Index
  // =========================================================================
  {
  "id": "dsa-p-53",
  "qno": 53,
  "title": "Sum Even Index",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Array Reversal / Even Index Traversal",
  "company": "Accenture",
  "pattern": "Reversal and Stepped Traversal",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given an array `arr` of length `N`, reverse the array and return the sum of the elements present at even indices (`0, 2, 4...`) of the reversed array.\n\nIndexing starts from 0.",
  "rules": [
    "Reverse the input array.",
    "Sum all elements at index 0, 2, 4, 6... of the reversed array.",
    "Return the integer sum."
  ],
  "coreLogic": "Reverse the array in place or logically traverse from the last element backwards with step of 2. Sum the elements at reversed even indices.",
  "dryRun": [
    {
      "original": "[10, 20, 30, 40, 50, 60]"
    },
    {
      "reversed": "[60, 50, 40, 30, 20, 10]"
    },
    {
      "evenIndices": "rev[0]=60, rev[2]=40, rev[4]=20"
    },
    {
      "sum": "60 + 40 + 20 = 120"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "arr = [10, 20, 30, 40, 50, 60]",
      "args": [
        [
          10,
          20,
          30,
          40,
          50,
          60
        ]
      ],
      "expectedOutput": "120",
      "explanation": "Reversed is [60, 50, 40, 30, 20, 10]. Even indices: 60 + 40 + 20 = 120."
    },
    {
      "id": "tc-2",
      "name": "Four Elements",
      "input": "arr = [1, 2, 3, 4]",
      "args": [
        [
          1,
          2,
          3,
          4
        ]
      ],
      "expectedOutput": "6",
      "explanation": "Reversed is [4, 3, 2, 1]. Even index sum: 4 + 2 = 6."
    },
    {
      "id": "tc-3",
      "name": "Single Element",
      "input": "arr = [5]",
      "args": [
        [
          5
        ]
      ],
      "expectedOutput": "5",
      "explanation": "Only index 0 exists, value is 5."
    },
    {
      "id": "tc-4",
      "name": "Three Elements",
      "input": "arr = [1, 2, 3]",
      "args": [
        [
          1,
          2,
          3
        ]
      ],
      "expectedOutput": "4",
      "explanation": "Reversed [3, 2, 1]. Even indices: 3 + 1 = 4."
    },
    {
      "id": "tc-5",
      "name": "Two Elements",
      "input": "arr = [10, 20]",
      "args": [
        [
          10,
          20
        ]
      ],
      "expectedOutput": "20",
      "explanation": "Reversed [20, 10]. Even index: 20."
    }
  ],
  "starterCode": {
    "python": "def sum_even_index(arr: list) -> int:\n    # TODO: Reverse array and return sum of elements at even indices\n    pass\n\nif __name__ == \"__main__\":\n    print(sum_even_index([10, 20, 30, 40, 50, 60]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int sumEvenIndex(int[] arr) {\n        // TODO: Reverse array and return sum of elements at even indices\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint sumEvenIndex(std::vector<int>& arr) {\n    // TODO: Reverse array and return sum of elements at even indices\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SumEvenIndex(int[] arr) {\n        // TODO: Reverse array and return sum of elements at even indices\n        return 0;\n    }\n}\n",
    "javascript": "function sumEvenIndex(arr) {\n  // TODO: Reverse array and return sum of elements at even indices\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def sum_even_index(arr: list) -> int:\n    rev = arr[::-1]\n    return sum(rev[i] for i in range(0, len(rev), 2))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int sumEvenIndex(int[] arr) {\n        if (arr == null) return 0;\n        int sum = 0;\n        for (int i = arr.length - 1; i >= 0; i -= 2) {\n            sum += arr[i];\n        }\n        return sum;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint sumEvenIndex(std::vector<int>& arr) {\n    int sum = 0;\n    for (int i = (int)arr.size() - 1; i >= 0; i -= 2) {\n        sum += arr[i];\n    }\n    return sum;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int SumEvenIndex(int[] arr) {\n        if (arr == null) return 0;\n        int sum = 0;\n        for (int i = arr.Length - 1; i >= 0; i -= 2) {\n            sum += arr[i];\n        }\n        return sum;\n    }\n}\n",
    "javascript": "function sumEvenIndex(arr) {\n  if (!arr) return 0;\n  let sum = 0;\n  for (let i = arr.length - 1; i >= 0; i -= 2) {\n    sum += arr[i];\n  }\n  return sum;\n}\n"
  }
,
  runSimulation: (args) => {
      const [arr] = args;
      if (!arr) return 0;
      let sum = 0;
      for (let i = arr.length - 1; i >= 0; i -= 2) {
        sum += arr[i];
      }
      return sum;
    }
  },

  // =========================================================================
  // Q54. Sum of Divisors
  // =========================================================================
  {
  "id": "dsa-p-54",
  "qno": 54,
  "title": "Sum of Divisors",
  "difficulty": "Easy",
  "category": "Mathematics",
  "topic": "Divisors / Number Theory",
  "company": "Accenture",
  "pattern": "Square Root Factor Pairs",
  "timeComplexity": "O(√N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given a positive integer `n`, calculate and return the sum of all its positive divisors.\n\nFor example, divisors of 12 are 1, 2, 3, 4, 6, 12, whose sum is 28.",
  "rules": [
    "Include all factors from 1 to n.",
    "Use the O(√N) pair enumeration for optimal efficiency.",
    "Handle perfect squares properly so square roots are not added twice."
  ],
  "coreLogic": "Iterate i from 1 to √n. If i divides n, add i and n/i (if i != n/i). Return the accumulated sum.",
  "dryRun": [
    {
      "n": 12,
      "pairs": "(1,12), (2,6), (3,4)",
      "sum": "1 + 12 + 2 + 6 + 3 + 4 = 28"
    }
  ],
  "constraints": [
    "1 <= n <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 12",
      "input": "n = 12",
      "args": [
        12
      ],
      "expectedOutput": "28",
      "explanation": "Divisors: 1, 2, 3, 4, 6, 12. Sum = 28."
    },
    {
      "id": "tc-2",
      "name": "One",
      "input": "n = 1",
      "args": [
        1
      ],
      "expectedOutput": "1",
      "explanation": "Only divisor of 1 is 1."
    },
    {
      "id": "tc-3",
      "name": "Six",
      "input": "n = 6",
      "args": [
        6
      ],
      "expectedOutput": "12",
      "explanation": "Divisors: 1, 2, 3, 6 -> 12."
    },
    {
      "id": "tc-4",
      "name": "Ten",
      "input": "n = 10",
      "args": [
        10
      ],
      "expectedOutput": "18",
      "explanation": "Divisors: 1, 2, 5, 10 -> 18."
    },
    {
      "id": "tc-5",
      "name": "Perfect Square 16",
      "input": "n = 16",
      "args": [
        16
      ],
      "expectedOutput": "31",
      "explanation": "Divisors: 1, 2, 4, 8, 16 -> sum is 31."
    }
  ],
  "starterCode": {
    "python": "def sum_of_divisors(n: int) -> int:\n    # TODO: Return sum of all divisors of n\n    pass\n\nif __name__ == \"__main__\":\n    print(sum_of_divisors(12))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long sumOfDivisors(int n) {\n        // TODO: Return sum of all divisors of n\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nlong long sumOfDivisors(int n) {\n    // TODO: Return sum of all divisors of n\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long SumOfDivisors(int n) {\n        // TODO: Return sum of all divisors of n\n        return 0;\n    }\n}\n",
    "javascript": "function sumOfDivisors(n) {\n  // TODO: Return sum of all divisors of n\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def sum_of_divisors(n: int) -> int:\n    total = 0\n    i = 1\n    while i * i <= n:\n        if n % i == 0:\n            total += i\n            if i * i != n:\n                total += n // i\n        i += 1\n    return total\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long sumOfDivisors(int n) {\n        long total = 0;\n        for (long i = 1; i * i <= n; i++) {\n            if (n % i == 0) {\n                total += i;\n                if (i * i != n) {\n                    total += n / i;\n                }\n            }\n        }\n        return total;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nlong long sumOfDivisors(int n) {\n    long long total = 0;\n    for (long long i = 1; i * i <= n; i++) {\n        if (n % i == 0) {\n            total += i;\n            if (i * i != n) {\n                total += n / i;\n            }\n        }\n    }\n    return total;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long SumOfDivisors(int n) {\n        long total = 0;\n        for (long i = 1; i * i <= n; i++) {\n            if (n % i == 0) {\n                total += i;\n                if (i * i != n) {\n                    total += n / i;\n                }\n            }\n        }\n        return total;\n    }\n}\n",
    "javascript": "function sumOfDivisors(n) {\n  let total = 0;\n  for (let i = 1; i * i <= n; i++) {\n    if (n % i === 0) {\n      total += i;\n      if (i * i !== n) {\n        total += Math.floor(n / i);\n      }\n    }\n  }\n  return total;\n}\n"
  }
,
  runSimulation: (args) => {
      const [n] = args;
      let total = 0;
      for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
          total += i;
          if (i * i !== n) {
            total += Math.floor(n / i);
          }
        }
      }
      return total;
    }
  },

  // =========================================================================
  // Q55. Sum Prime No
  // =========================================================================
  {
  "id": "dsa-p-55",
  "qno": 55,
  "title": "Sum Prime No",
  "difficulty": "Medium",
  "category": "Mathematics",
  "topic": "Prime Numbers / Sieve of Eratosthenes",
  "company": "Accenture",
  "pattern": "Sieve Prime Generation",
  "timeComplexity": "O(N log log N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 80,
  "targetMins": 12,
  "description": "Write a function that takes an integer `n` as input and returns the sum of all prime numbers strictly less than `n`.\n\nFor example, for `n = 10`, primes less than 10 are 2, 3, 5, 7, whose sum is 17.",
  "rules": [
    "Only include primes strictly less than n (n itself is not included).",
    "If n <= 2, return 0.",
    "Use the Sieve of Eratosthenes for high performance."
  ],
  "coreLogic": "Initialize a boolean array of size n. Mark multiples of each prime starting from 2. Accumulate all unmarked numbers from 2 to n - 1.",
  "dryRun": [
    {
      "n": 10,
      "primes": [
        2,
        3,
        5,
        7
      ],
      "sum": "2 + 3 + 5 + 7 = 17"
    }
  ],
  "constraints": [
    "0 <= n <= 10^6"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 10",
      "input": "n = 10",
      "args": [
        10
      ],
      "expectedOutput": "17",
      "explanation": "Primes < 10: 2, 3, 5, 7 -> sum 17."
    },
    {
      "id": "tc-2",
      "name": "Two Returns 0",
      "input": "n = 2",
      "args": [
        2
      ],
      "expectedOutput": "0",
      "explanation": "No prime is strictly less than 2."
    },
    {
      "id": "tc-3",
      "name": "Five",
      "input": "n = 5",
      "args": [
        5
      ],
      "expectedOutput": "5",
      "explanation": "Primes < 5 are 2 and 3. Sum = 5."
    },
    {
      "id": "tc-4",
      "name": "Eleven",
      "input": "n = 11",
      "args": [
        11
      ],
      "expectedOutput": "17",
      "explanation": "Primes < 11 are 2, 3, 5, 7 (11 excluded). Sum = 17."
    },
    {
      "id": "tc-5",
      "name": "Twenty",
      "input": "n = 20",
      "args": [
        20
      ],
      "expectedOutput": "77",
      "explanation": "Primes: 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77."
    }
  ],
  "starterCode": {
    "python": "def sum_prime_no(n: int) -> int:\n    # TODO: Return sum of all primes strictly less than n\n    pass\n\nif __name__ == \"__main__\":\n    print(sum_prime_no(10))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long sumPrimeNo(int n) {\n        // TODO: Return sum of all primes strictly less than n\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nlong long sumPrimeNo(int n) {\n    // TODO: Return sum of all primes strictly less than n\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long SumPrimeNo(int n) {\n        // TODO: Return sum of all primes strictly less than n\n        return 0;\n    }\n}\n",
    "javascript": "function sumPrimeNo(n) {\n  // TODO: Return sum of all primes strictly less than n\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def sum_prime_no(n: int) -> int:\n    if n <= 2:\n        return 0\n    is_prime = [True] * n\n    is_prime[0] = is_prime[1] = False\n    p = 2\n    while p * p < n:\n        if is_prime[p]:\n            for i in range(p * p, n, p):\n                is_prime[i] = False\n        p += 1\n    return sum(i for i in range(2, n) if is_prime[i])\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long sumPrimeNo(int n) {\n        if (n <= 2) return 0;\n        boolean[] isPrime = new boolean[n];\n        Arrays.fill(isPrime, true);\n        isPrime[0] = false;\n        isPrime[1] = false;\n        for (int p = 2; p * p < n; p++) {\n            if (isPrime[p]) {\n                for (int i = p * p; i < n; i += p) {\n                    isPrime[i] = false;\n                }\n            }\n        }\n        long sum = 0;\n        for (int i = 2; i < n; i++) {\n            if (isPrime[i]) sum += i;\n        }\n        return sum;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nlong long sumPrimeNo(int n) {\n    if (n <= 2) return 0;\n    std::vector<bool> isPrime(n, true);\n    isPrime[0] = isPrime[1] = false;\n    for (int p = 2; p * p < n; p++) {\n        if (isPrime[p]) {\n            for (int i = p * p; i < n; i += p) {\n                isPrime[i] = false;\n            }\n        }\n    }\n    long long sum = 0;\n    for (int i = 2; i < n; i++) {\n        if (isPrime[i]) sum += i;\n    }\n    return sum;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long SumPrimeNo(int n) {\n        if (n <= 2) return 0;\n        bool[] isPrime = new bool[n];\n        for (int i = 2; i < n; i++) isPrime[i] = true;\n        for (int p = 2; p * p < n; p++) {\n            if (isPrime[p]) {\n                for (int i = p * p; i < n; i += p) {\n                    isPrime[i] = false;\n                }\n            }\n        }\n        long sum = 0;\n        for (int i = 2; i < n; i++) {\n            if (isPrime[i]) sum += i;\n        }\n        return sum;\n    }\n}\n",
    "javascript": "function sumPrimeNo(n) {\n  if (n <= 2) return 0;\n  const isPrime = new Uint8Array(n).fill(1);\n  isPrime[0] = 0;\n  isPrime[1] = 0;\n  for (let p = 2; p * p < n; p++) {\n    if (isPrime[p]) {\n      for (let i = p * p; i < n; i += p) {\n        isPrime[i] = 0;\n      }\n    }\n  }\n  let sum = 0;\n  for (let i = 2; i < n; i++) {\n    if (isPrime[i]) sum += i;\n  }\n  return sum;\n}\n"
  }
,
  runSimulation: (args) => {
      const [n] = args;
      if (n <= 2) return 0;
      const isPrime = new Uint8Array(n).fill(1);
      isPrime[0] = 0;
      isPrime[1] = 0;
      for (let p = 2; p * p < n; p++) {
        if (isPrime[p]) {
          for (let i = p * p; i < n; i += p) {
            isPrime[i] = 0;
          }
        }
      }
      let sum = 0;
      for (let i = 2; i < n; i++) {
        if (isPrime[i]) sum += i;
      }
      return sum;
    }
  },

  // =========================================================================
  // Q56. Multiplication Table and Sum
  // =========================================================================
  {
  "id": "dsa-p-56",
  "qno": 56,
  "title": "Multiplication Table and Sum",
  "difficulty": "Easy",
  "category": "Mathematics",
  "topic": "Multiplication / Iteration",
  "company": "Accenture",
  "pattern": "Multiplication Loop",
  "timeComplexity": "O(1)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 8,
  "description": "Write a program to display the multiplication table of a number `n` (first 10 multiples from `n × 1` through `n × 10`) and return the sum of all the multiples in that table.",
  "rules": [
    "Compute the first 10 multiples: n * 1, n * 2, ..., n * 10.",
    "Return the sum of these 10 multiples: n * (1 + 2 + ... + 10) = n * 55."
  ],
  "coreLogic": "The sum of the first 10 multiples of n is n * 55.",
  "dryRun": [
    {
      "n": 5,
      "multiples": "5, 10, 15, 20, 25, 30, 35, 40, 45, 50",
      "sum": "5 * 55 = 275"
    },
    {
      "n": 12,
      "sum": "12 * 55 = 660"
    }
  ],
  "constraints": [
    "1 <= n <= 10^6"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 5",
      "input": "n = 5",
      "args": [
        5
      ],
      "expectedOutput": "275",
      "explanation": "5 + 10 + ... + 50 = 275."
    },
    {
      "id": "tc-2",
      "name": "Given Example 12",
      "input": "n = 12",
      "args": [
        12
      ],
      "expectedOutput": "660",
      "explanation": "12 + 24 + ... + 120 = 660."
    },
    {
      "id": "tc-3",
      "name": "One",
      "input": "n = 1",
      "args": [
        1
      ],
      "expectedOutput": "55",
      "explanation": "1 + 2 + ... + 10 = 55."
    },
    {
      "id": "tc-4",
      "name": "Ten",
      "input": "n = 10",
      "args": [
        10
      ],
      "expectedOutput": "550",
      "explanation": "10 + 20 + ... + 100 = 550."
    },
    {
      "id": "tc-5",
      "name": "Three",
      "input": "n = 3",
      "args": [
        3
      ],
      "expectedOutput": "165",
      "explanation": "3 * 55 = 165."
    }
  ],
  "starterCode": {
    "python": "def multiplication_table_sum(n: int) -> int:\n    # TODO: Return sum of first 10 multiples of n\n    pass\n\nif __name__ == \"__main__\":\n    print(multiplication_table_sum(5))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int tableAndSum(int n) {\n        // TODO: Return sum of first 10 multiples of n\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint tableAndSum(int n) {\n    // TODO: Return sum of first 10 multiples of n\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int TableAndSum(int n) {\n        // TODO: Return sum of first 10 multiples of n\n        return 0;\n    }\n}\n",
    "javascript": "function tableAndSum(n) {\n  // TODO: Return sum of first 10 multiples of n\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def multiplication_table_sum(n: int) -> int:\n    return sum(n * i for i in range(1, 11))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int tableAndSum(int n) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            sum += n * i;\n        }\n        return sum;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nint tableAndSum(int n) {\n    int sum = 0;\n    for (int i = 1; i <= 10; i++) {\n        sum += n * i;\n    }\n    return sum;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int TableAndSum(int n) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            sum += n * i;\n        }\n        return sum;\n    }\n}\n",
    "javascript": "function tableAndSum(n) {\n  let sum = 0;\n  for (let i = 1; i <= 10; i++) {\n    sum += n * i;\n  }\n  return sum;\n}\n"
  }
,
  runSimulation: (args) => {
      const [n] = args;
      return n * 55;
    }
  },

  // =========================================================================
  // Q57. Vowel Permutation
  // =========================================================================
  {
  "id": "dsa-p-57",
  "qno": 57,
  "title": "Vowel Permutation",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "Permutations / Factorial",
  "company": "Accenture",
  "pattern": "Factorial Counting",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given a string `S`, find and return the count of permutations formed by fixing the positions of the vowels present in the string.\n\nNon-vowels (consonants) can be permuted among themselves. If there are `k` consonants, the number of permutations is `k!`.",
  "rules": [
    "Vowels are: a, e, i, o, u (both lowercase and uppercase).",
    "Count the number of non-vowel characters k.",
    "Return k! (factorial of k)."
  ],
  "coreLogic": "Traverse string S and count characters that are not vowels. Compute k! using an accumulator.",
  "dryRun": [
    {
      "S": "ABC",
      "vowels": [
        "A"
      ],
      "consonants": [
        "B",
        "C"
      ],
      "k": 2,
      "result": "2! = 2"
    },
    {
      "S": "ABCD",
      "consonants": 3,
      "result": "3! = 6"
    }
  ],
  "constraints": [
    "1 <= S.length <= 15",
    "S contains English letters"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example ABC",
      "input": "s = \"ABC\"",
      "args": [
        "ABC"
      ],
      "expectedOutput": "2",
      "explanation": "Vowel A fixed. Consonants B and C have 2! = 2 permutations."
    },
    {
      "id": "tc-2",
      "name": "Only Vowel",
      "input": "s = \"A\"",
      "args": [
        "A"
      ],
      "expectedOutput": "1",
      "explanation": "0 consonants -> 0! = 1."
    },
    {
      "id": "tc-3",
      "name": "Four Letters",
      "input": "s = \"ABCD\"",
      "args": [
        "ABCD"
      ],
      "expectedOutput": "6",
      "explanation": "3 consonants -> 3! = 6."
    },
    {
      "id": "tc-4",
      "name": "All Vowels",
      "input": "s = \"AEIO\"",
      "args": [
        "AEIO"
      ],
      "expectedOutput": "1",
      "explanation": "0 consonants -> 1."
    },
    {
      "id": "tc-5",
      "name": "Word HELLO",
      "input": "s = \"HELLO\"",
      "args": [
        "HELLO"
      ],
      "expectedOutput": "6",
      "explanation": "Consonants H, L, L -> 3! = 6 positional permutations."
    }
  ],
  "starterCode": {
    "python": "def vowel_permutation(s: str) -> int:\n    # TODO: Return factorial of consonant count\n    pass\n\nif __name__ == \"__main__\":\n    print(vowel_permutation(\"ABC\"))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long vowelPermutation(String s) {\n        // TODO: Return factorial of consonant count\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nlong long vowelPermutation(std::string s) {\n    // TODO: Return factorial of consonant count\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long VowelPermutation(string s) {\n        // TODO: Return factorial of consonant count\n        return 0;\n    }\n}\n",
    "javascript": "function vowelPermutation(s) {\n  // TODO: Return factorial of consonant count\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def vowel_permutation(s: str) -> int:\n    vowels = set(\"aeiouAEIOU\")\n    consonants = sum(1 for c in s if c not in vowels)\n    fact = 1\n    for i in range(2, consonants + 1):\n        fact *= i\n    return fact\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    private static boolean isVowel(char c) {\n        char low = Character.toLowerCase(c);\n        return low == 'a' || low == 'e' || low == 'i' || low == 'o' || low == 'u';\n    }\n\n    public static long vowelPermutation(String s) {\n        if (s == null) return 1;\n        int nonVowels = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (!isVowel(s.charAt(i))) nonVowels++;\n        }\n        long fact = 1;\n        for (int i = 2; i <= nonVowels; i++) fact *= i;\n        return fact;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n}\n\nlong long vowelPermutation(std::string s) {\n    int nonVowels = 0;\n    for (char c : s) {\n        if (!isVowel(c)) nonVowels++;\n    }\n    long long fact = 1;\n    for (int i = 2; i <= nonVowels; i++) fact *= i;\n    return fact;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    private static bool IsVowel(char c) {\n        char low = char.ToLower(c);\n        return low == 'a' || low == 'e' || low == 'i' || low == 'o' || low == 'u';\n    }\n\n    public static long VowelPermutation(string s) {\n        if (string.IsNullOrEmpty(s)) return 1;\n        int nonVowels = 0;\n        foreach (char c in s) {\n            if (!IsVowel(c)) nonVowels++;\n        }\n        long fact = 1;\n        for (int i = 2; i <= nonVowels; i++) fact *= i;\n        return fact;\n    }\n}\n",
    "javascript": "function vowelPermutation(s) {\n  if (!s) return 1;\n  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);\n  let nonVowels = 0;\n  for (const c of s) {\n    if (!vowels.has(c)) nonVowels++;\n  }\n  let fact = 1;\n  for (let i = 2; i <= nonVowels; i++) fact *= i;\n  return fact;\n}\n"
  }
,
  runSimulation: (args) => {
      const [s] = args;
      if (!s) return 1;
      const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
      let nonVowels = 0;
      for (const c of s) {
        if (!vowels.has(c)) nonVowels++;
      }
      let fact = 1;
      for (let i = 2; i <= nonVowels; i++) fact *= i;
      return fact;
    }
  },

  // =========================================================================
  // Q58. Vowel Repetition
  // =========================================================================
  {
  "id": "dsa-p-58",
  "qno": 58,
  "title": "Vowel Repetition",
  "difficulty": "Easy",
  "category": "Strings",
  "topic": "Frequency Counting / Character Analysis",
  "company": "Accenture",
  "pattern": "Frequency Array Tracking",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given a string `str`, find and return the most frequent vowel present in the string.\n\nIt is guaranteed that there is a unique most frequent vowel among `'a', 'e', 'i', 'o', 'u'`.",
  "rules": [
    "Count frequencies of vowels: a, e, i, o, u.",
    "Return the character corresponding to the maximum frequency."
  ],
  "coreLogic": "Track frequency count for each vowel. Return the vowel with highest count.",
  "dryRun": [
    {
      "str": "xayuaba",
      "counts": {
        "a": 3,
        "u": 1
      },
      "max": "a"
    }
  ],
  "constraints": [
    "1 <= str.length <= 10^5",
    "str contains lowercase English letters"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "str = \"xayuaba\"",
      "args": [
        "xayuaba"
      ],
      "expectedOutput": "a",
      "explanation": "a appears 3 times, which is more than any other vowel."
    },
    {
      "id": "tc-2",
      "name": "Dominant a",
      "input": "str = \"aeaaa\"",
      "args": [
        "aeaaa"
      ],
      "expectedOutput": "a",
      "explanation": "a appears 4 times."
    },
    {
      "id": "tc-3",
      "name": "Dominant e",
      "input": "str = \"hello\"",
      "args": [
        "hello"
      ],
      "expectedOutput": "e",
      "explanation": "e appears 1 time, unique max."
    },
    {
      "id": "tc-4",
      "name": "Word Banana",
      "input": "str = \"banana\"",
      "args": [
        "banana"
      ],
      "expectedOutput": "a",
      "explanation": "a appears 3 times."
    },
    {
      "id": "tc-5",
      "name": "Dominant u",
      "input": "str = \"curious\"",
      "args": [
        "curious"
      ],
      "expectedOutput": "u",
      "explanation": "u appears 2 times (i: 1, o: 1), unique max is u."
    }
  ],
  "starterCode": {
    "python": "def most_frequent_vowel(s: str) -> str:\n    # TODO: Return most frequent vowel\n    pass\n\nif __name__ == \"__main__\":\n    print(most_frequent_vowel(\"xayuaba\"))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static char mostFrequentVowel(String str) {\n        // TODO: Return most frequent vowel\n        return 'a';\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nchar mostFrequentVowel(std::string str) {\n    // TODO: Return most frequent vowel\n    return 'a';\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static char MostFrequentVowel(string str) {\n        // TODO: Return most frequent vowel\n        return 'a';\n    }\n}\n",
    "javascript": "function mostFrequentVowel(str) {\n  // TODO: Return most frequent vowel\n  return 'a';\n}\n"
  },
  "solutions": {
    "python": "def most_frequent_vowel(s: str) -> str:\n    vowels = \"aeiou\"\n    counts = {v: 0 for v in vowels}\n    for c in s.lower():\n        if c in counts:\n            counts[c] += 1\n    return max(vowels, key=lambda v: counts[v])\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static char mostFrequentVowel(String str) {\n        int[] freq = new int[5];\n        String vowels = \"aeiou\";\n        for (int i = 0; i < str.length(); i++) {\n            char c = Character.toLowerCase(str.charAt(i));\n            int idx = vowels.indexOf(c);\n            if (idx != -1) freq[idx]++;\n        }\n        int best = 0;\n        for (int i = 1; i < 5; i++) {\n            if (freq[i] > freq[best]) best = i;\n        }\n        return vowels.charAt(best);\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <string>\n\nchar mostFrequentVowel(std::string str) {\n    int freq[5] = {0};\n    for (char c : str) {\n        c = tolower(c);\n        if (c == 'a') freq[0]++;\n        else if (c == 'e') freq[1]++;\n        else if (c == 'i') freq[2]++;\n        else if (c == 'o') freq[3]++;\n        else if (c == 'u') freq[4]++;\n    }\n    int best = 0;\n    for (int i = 1; i < 5; i++) {\n        if (freq[i] > freq[best]) best = i;\n    }\n    std::string vowels = \"aeiou\";\n    return vowels[best];\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static char MostFrequentVowel(string str) {\n        int[] freq = new int[5];\n        string vowels = \"aeiou\";\n        foreach (char ch in str) {\n            char c = char.ToLower(ch);\n            int idx = vowels.IndexOf(c);\n            if (idx != -1) freq[idx]++;\n        }\n        int best = 0;\n        for (int i = 1; i < 5; i++) {\n            if (freq[i] > freq[best]) best = i;\n        }\n        return vowels[best];\n    }\n}\n",
    "javascript": "function mostFrequentVowel(str) {\n  const vowels = ['a','e','i','o','u'];\n  const freq = { a: 0, e: 0, i: 0, o: 0, u: 0 };\n  for (const c of str.toLowerCase()) {\n    if (freq[c] !== undefined) freq[c]++;\n  }\n  let best = 'a';\n  for (const v of vowels) {\n    if (freq[v] > freq[best]) best = v;\n  }\n  return best;\n}\n"
  }
,
  runSimulation: (args) => {
      const [str] = args;
      const vowels = ['a','e','i','o','u'];
      const freq = { a: 0, e: 0, i: 0, o: 0, u: 0 };
      for (const c of str.toLowerCase()) {
        if (freq[c] !== undefined) freq[c]++;
      }
      let best = 'a';
      for (const v of vowels) {
        if (freq[v] > freq[best]) best = v;
      }
      return best;
    }
  },

  // =========================================================================
  // Q59. Max Diff Successive Elements
  // =========================================================================
  {
  "id": "dsa-p-59",
  "qno": 59,
  "title": "Max Diff Successive Elements",
  "difficulty": "Medium",
  "category": "Arrays",
  "topic": "Array Sorting / Maximum Gap",
  "company": "Accenture",
  "pattern": "Sorting and Adjacent Gap",
  "timeComplexity": "O(N log N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 80,
  "targetMins": 12,
  "description": "Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form.\n\nIf the array contains fewer than two elements, return `0`.",
  "rules": [
    "If nums.length < 2, return 0.",
    "Sort the array in ascending order.",
    "Find the maximum difference between any two adjacent elements nums[i] - nums[i - 1]."
  ],
  "coreLogic": "Sort array ascending. Iterate i from 1 to n - 1 and track max(diff, nums[i] - nums[i - 1]).",
  "dryRun": [
    {
      "nums": "[3, 6, 9, 1]",
      "sorted": "[1, 3, 6, 9]",
      "diffs": "2, 3, 3",
      "maxDiff": 3
    }
  ],
  "constraints": [
    "0 <= nums.length <= 10^5",
    "-10^9 <= nums[i] <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "nums = [3, 6, 9, 1]",
      "args": [
        [
          3,
          6,
          9,
          1
        ]
      ],
      "expectedOutput": "3",
      "explanation": "Sorted is [1, 3, 6, 9]. Adjacent diffs are 2, 3, 3. Max difference is 3."
    },
    {
      "id": "tc-2",
      "name": "Single Element",
      "input": "nums = [1]",
      "args": [
        [
          1
        ]
      ],
      "expectedOutput": "0",
      "explanation": "Fewer than 2 elements returns 0."
    },
    {
      "id": "tc-3",
      "name": "Larger Gap",
      "input": "nums = [1, 10, 5, 20]",
      "args": [
        [
          1,
          10,
          5,
          20
        ]
      ],
      "expectedOutput": "10",
      "explanation": "Sorted is [1, 5, 10, 20]. Max gap is 20 - 10 = 10."
    },
    {
      "id": "tc-4",
      "name": "All Identical",
      "input": "nums = [5, 5, 5, 5]",
      "args": [
        [
          5,
          5,
          5,
          5
        ]
      ],
      "expectedOutput": "0",
      "explanation": "All elements equal -> difference 0."
    },
    {
      "id": "tc-5",
      "name": "Two Elements",
      "input": "nums = [10, 3]",
      "args": [
        [
          10,
          3
        ]
      ],
      "expectedOutput": "7",
      "explanation": "10 - 3 = 7."
    }
  ],
  "starterCode": {
    "python": "def maximum_gap(nums: list) -> int:\n    # TODO: Return maximum difference between successive elements in sorted form\n    pass\n\nif __name__ == \"__main__\":\n    print(maximum_gap([3, 6, 9, 1]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int maximumGap(int[] nums) {\n        // TODO: Return maximum difference between successive elements in sorted form\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nint maximumGap(std::vector<int>& nums) {\n    // TODO: Return maximum difference between successive elements in sorted form\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int MaximumGap(int[] nums) {\n        // TODO: Return maximum difference between successive elements in sorted form\n        return 0;\n    }\n}\n",
    "javascript": "function maximumGap(nums) {\n  // TODO: Return maximum difference between successive elements in sorted form\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def maximum_gap(nums: list) -> int:\n    if len(nums) < 2:\n        return 0\n    nums.sort()\n    return max(nums[i] - nums[i - 1] for i in range(1, len(nums)))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int maximumGap(int[] nums) {\n        if (nums == null || nums.length < 2) return 0;\n        int[] sorted = nums.clone();\n        Arrays.sort(sorted);\n        int maxDiff = 0;\n        for (int i = 1; i < sorted.length; i++) {\n            maxDiff = Math.max(maxDiff, sorted[i] - sorted[i - 1]);\n        }\n        return maxDiff;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint maximumGap(std::vector<int>& nums) {\n    if (nums.size() < 2) return 0;\n    std::vector<int> s = nums;\n    std::sort(s.begin(), s.end());\n    int maxDiff = 0;\n    for (size_t i = 1; i < s.size(); i++) {\n        maxDiff = std::max(maxDiff, s[i] - s[i - 1]);\n    }\n    return maxDiff;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int MaximumGap(int[] nums) {\n        if (nums == null || nums.Length < 2) return 0;\n        int[] sorted = (int[])nums.Clone();\n        Array.Sort(sorted);\n        int maxDiff = 0;\n        for (int i = 1; i < sorted.Length; i++) {\n            maxDiff = Math.Max(maxDiff, sorted[i] - sorted[i - 1]);\n        }\n        return maxDiff;\n    }\n}\n",
    "javascript": "function maximumGap(nums) {\n  if (!nums || nums.length < 2) return 0;\n  const s = [...nums].sort((a, b) => a - b);\n  let maxDiff = 0;\n  for (let i = 1; i < s.length; i++) {\n    maxDiff = Math.max(maxDiff, s[i] - s[i - 1]);\n  }\n  return maxDiff;\n}\n"
  }
,
  runSimulation: (args) => {
      const [nums] = args;
      if (!nums || nums.length < 2) return 0;
      const s = [...nums].sort((a, b) => a - b);
      let maxDiff = 0;
      for (let i = 1; i < s.length; i++) {
        maxDiff = Math.max(maxDiff, s[i] - s[i - 1]);
      }
      return maxDiff;
    }
  },

  // =========================================================================
  // Q60. nth Fibonacci
  // =========================================================================
  {
  "id": "dsa-p-60",
  "qno": 60,
  "title": "nth Fibonacci",
  "difficulty": "Easy",
  "category": "Mathematics",
  "topic": "Fibonacci Sequence / Dynamic Programming",
  "company": "Accenture",
  "pattern": "Iterative Fibonacci",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given an integer `n`, find and return the `n`th Fibonacci number using 0-based indexing:\n- `F(0) = 0`\n- `F(1) = 1`\n- `F(2) = 1`\n- `F(3) = 2`\n- `F(4) = 3`\n...\n- `F(9) = 34`",
  "rules": [
    "Indexing is 0-based: F(0) = 0, F(1) = 1.",
    "Compute iteratively in O(N) time and O(1) auxiliary space."
  ],
  "coreLogic": "Iterate from 2 up to n maintaining previous two values a = F(i-2) and b = F(i-1). Next is a + b.",
  "dryRun": [
    {
      "n": 9,
      "seq": "0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
      "F9": 34
    }
  ],
  "constraints": [
    "0 <= n <= 70"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example 9",
      "input": "n = 9",
      "args": [
        9
      ],
      "expectedOutput": "34",
      "explanation": "9th Fibonacci index is 34."
    },
    {
      "id": "tc-2",
      "name": "Zero",
      "input": "n = 0",
      "args": [
        0
      ],
      "expectedOutput": "0",
      "explanation": "F(0) = 0."
    },
    {
      "id": "tc-3",
      "name": "One",
      "input": "n = 1",
      "args": [
        1
      ],
      "expectedOutput": "1",
      "explanation": "F(1) = 1."
    },
    {
      "id": "tc-4",
      "name": "Five",
      "input": "n = 5",
      "args": [
        5
      ],
      "expectedOutput": "5",
      "explanation": "F(5) = 5."
    },
    {
      "id": "tc-5",
      "name": "Ten",
      "input": "n = 10",
      "args": [
        10
      ],
      "expectedOutput": "55",
      "explanation": "F(10) = 55."
    }
  ],
  "starterCode": {
    "python": "def nth_fibonacci(n: int) -> int:\n    # TODO: Return nth Fibonacci number (0-indexed)\n    pass\n\nif __name__ == \"__main__\":\n    print(nth_fibonacci(9))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long nthFibonacci(int n) {\n        // TODO: Return nth Fibonacci number (0-indexed)\n        return 0;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nlong long nthFibonacci(int n) {\n    // TODO: Return nth Fibonacci number (0-indexed)\n    return 0;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long NthFibonacci(int n) {\n        // TODO: Return nth Fibonacci number (0-indexed)\n        return 0;\n    }\n}\n",
    "javascript": "function nthFibonacci(n) {\n  // TODO: Return nth Fibonacci number (0-indexed)\n  return 0;\n}\n"
  },
  "solutions": {
    "python": "def nth_fibonacci(n: int) -> int:\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static long nthFibonacci(int n) {\n        if (n == 0) return 0;\n        if (n == 1) return 1;\n        long a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            long c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n}\n",
    "cpp": "#include <iostream>\n\nlong long nthFibonacci(int n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    long long a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static long NthFibonacci(int n) {\n        if (n == 0) return 0;\n        if (n == 1) return 1;\n        long a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            long c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n}\n",
    "javascript": "function nthFibonacci(n) {\n  if (n === 0) return 0;\n  if (n === 1) return 1;\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    const c = a + b;\n    a = b;\n    b = c;\n  }\n  return b;\n}\n"
  }
,
  runSimulation: (args) => {
      const [n] = args;
      if (n === 0) return 0;
      if (n === 1) return 1;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  },

  // =========================================================================
  // Q61. Remove Duplicate
  // =========================================================================
  {
  "id": "dsa-p-61",
  "qno": 61,
  "title": "Remove Duplicate",
  "difficulty": "Easy",
  "category": "Arrays",
  "topic": "Hash Set / Duplicate Removal",
  "company": "Accenture",
  "pattern": "Ordered Set Filtering",
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "rewardXp": 50,
  "targetMins": 10,
  "description": "Given an array of integers `arr`, remove the duplicate elements while preserving the original order of their first occurrence.\n\nReturn the array containing only unique elements.",
  "rules": [
    "Preserve the order of first appearance.",
    "Remove all subsequent occurrences of any duplicated element.",
    "Return the filtered array."
  ],
  "coreLogic": "Use a Set to record visited elements. Iterate through arr; if element is not in Set, add to Set and append to result.",
  "dryRun": [
    {
      "input": "[1, 2, 2, 3, 4, 4, 5]",
      "seen": "{1, 2, 3, 4, 5}",
      "output": "[1, 2, 3, 4, 5]"
    }
  ],
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "testCases": [
    {
      "id": "tc-1",
      "name": "Given Example",
      "input": "arr = [1, 2, 2, 3, 4, 4, 5]",
      "args": [
        [
          1,
          2,
          2,
          3,
          4,
          4,
          5
        ]
      ],
      "expectedOutput": "[1, 2, 3, 4, 5]",
      "explanation": "Duplicates of 2 and 4 removed, order preserved."
    },
    {
      "id": "tc-2",
      "name": "All Identical",
      "input": "arr = [1, 1, 1, 1]",
      "args": [
        [
          1,
          1,
          1,
          1
        ]
      ],
      "expectedOutput": "[1]",
      "explanation": "Only single 1 remains."
    },
    {
      "id": "tc-3",
      "name": "All Unique",
      "input": "arr = [1, 2, 3, 4]",
      "args": [
        [
          1,
          2,
          3,
          4
        ]
      ],
      "expectedOutput": "[1, 2, 3, 4]",
      "explanation": "No duplicates to remove."
    },
    {
      "id": "tc-4",
      "name": "Mixed Order",
      "input": "arr = [3, 1, 3, 2, 1]",
      "args": [
        [
          3,
          1,
          3,
          2,
          1
        ]
      ],
      "expectedOutput": "[3, 1, 2]",
      "explanation": "First occurrences are 3, 1, 2 in order."
    },
    {
      "id": "tc-5",
      "name": "Empty Array",
      "input": "arr = []",
      "args": [
        []
      ],
      "expectedOutput": "[]",
      "explanation": "Empty array returns []."
    }
  ],
  "starterCode": {
    "python": "def remove_duplicates(arr: list) -> list:\n    # TODO: Remove duplicates preserving order of first appearance\n    pass\n\nif __name__ == \"__main__\":\n    print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] removeDuplicates(int[] arr) {\n        // TODO: Remove duplicates preserving order of first appearance\n        return new int[]{};\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n\nstd::vector<int> removeDuplicates(std::vector<int>& arr) {\n    // TODO: Remove duplicates preserving order of first appearance\n    return {};\n}\n",
    "csharp": "using System;\n\npublic class Solution {\n    public static int[] RemoveDuplicates(int[] arr) {\n        // TODO: Remove duplicates preserving order of first appearance\n        return new int[0];\n    }\n}\n",
    "javascript": "function removeDuplicates(arr) {\n  // TODO: Remove duplicates preserving order of first appearance\n  return [];\n}\n"
  },
  "solutions": {
    "python": "def remove_duplicates(arr: list) -> list:\n    seen = set()\n    res = []\n    for x in arr:\n        if x not in seen:\n            seen.add(x)\n            res.append(x)\n    return res\n",
    "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] removeDuplicates(int[] arr) {\n        if (arr == null) return new int[0];\n        Set<Integer> seen = new HashSet<>();\n        List<Integer> list = new ArrayList<>();\n        for (int x : arr) {\n            if (seen.add(x)) {\n                list.add(x);\n            }\n        }\n        int[] res = new int[list.size()];\n        for (int i = 0; i < list.size(); i++) res[i] = list.get(i);\n        return res;\n    }\n}\n",
    "cpp": "#include <iostream>\n#include <vector>\n#include <unordered_set>\n\nstd::vector<int> removeDuplicates(std::vector<int>& arr) {\n    std::unordered_set<int> seen;\n    std::vector<int> res;\n    for (int x : arr) {\n        if (seen.find(x) == seen.end()) {\n            seen.insert(x);\n            res.push_back(x);\n        }\n    }\n    return res;\n}\n",
    "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int[] RemoveDuplicates(int[] arr) {\n        if (arr == null) return new int[0];\n        HashSet<int> seen = new HashSet<int>();\n        List<int> list = new List<int>();\n        foreach (int x in arr) {\n            if (seen.Add(x)) {\n                list.Add(x);\n            }\n        }\n        return list.ToArray();\n    }\n}\n",
    "javascript": "function removeDuplicates(arr) {\n  if (!arr) return [];\n  const seen = new Set();\n  const res = [];\n  for (const x of arr) {\n    if (!seen.has(x)) {\n      seen.add(x);\n      res.push(x);\n    }\n  }\n  return res;\n}\n"
  }
,
  runSimulation: (args) => {
      const [arr] = args;
      if (!arr) return '[]';
      const seen = new Set();
      const res = [];
      for (const x of arr) {
        if (!seen.has(x)) {
          seen.add(x);
          res.push(x);
        }
      }
      return JSON.stringify(res);
    }
  }
];

export const dsaPracticeQuestions = DSA_PRACTICE_QUESTIONS;
export default DSA_PRACTICE_QUESTIONS;

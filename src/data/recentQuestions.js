// src/data/recentQuestions.js
// Master collection of real Accenture exam coding, SQL, and pseudocode PYQs

export const RECENT_TRACKS = [
  {
    "id": "dsa",
    "label": "DSA Coding",
    "icon": "Code2",
    "color": "#38bdf8"
  },
  {
    "id": "sql",
    "label": "SQL Queries",
    "icon": "Database",
    "color": "#f97316"
  },
  {
    "id": "frontend",
    "label": "Frontend DOM",
    "icon": "Layout",
    "color": "#a855f7"
  }
];

export const recentQuestions = [
  {
    "id": "recent-dsa-001",
    "track": "dsa",
    "dateTag": "8th Sept Shift 1",
    "examDate": "2024-09-08",
    "shift": "Shift 1",
    "title": "Array Index Transformation & Divisibility Sum",
    "difficulty": "Medium",
    "category": "Array / Math & Modulo Arithmetic",
    "source": "Accenture Assessment 8th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Given an array of integers `nums`, perform the following transformation on each element based on its 0-based index `i`:\n\n1. Subtract `(i % 7) * 3` from the element.\n2. If the original element `nums[i]` is divisible by 11, add `nums[i] / 11` to the modified value.\n\nReturn the total sum of all elements in the array after applying these transformations.",
    "rules": [
      "1. Subtract (i % 7) * 3 from the element.",
      "2. If the original element nums[i] is divisible by 11, add nums[i] / 11 to the modified value.",
      "Return the total sum of all elements in the array after applying these transformations."
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "Division for negative/zero values: 0 % 11 == 0 and 0 // 11 == 0."
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "nums = [22, 5, 14]",
        "inputRaw": [
          22,
          5,
          14
        ],
        "expectedOutput": "34",
        "transformedArray": "[24, 2, 8]",
        "explanation": "• Index 0: nums[0] = 22\n  - Subtract: (0 mod 7) * 3 = 0 * 3 = 0 -> 22 - 0 = 22\n  - Divisible by 11? Yes (22 mod 11 = 0). Add 22 / 11 = 2 -> 22 + 2 = 24\n• Index 1: nums[1] = 5\n  - Subtract: (1 mod 7) * 3 = 1 * 3 = 3 -> 5 - 3 = 2\n  - Divisible by 11? No.\n• Index 2: nums[2] = 14\n  - Subtract: (2 mod 7) * 3 = 2 * 3 = 6 -> 14 - 6 = 8\n  - Divisible by 11? No.\n• Final Transformed Array: [24, 2, 8]\n• Total Sum: 24 + 2 + 8 = 34"
      },
      {
        "id": "tc-2",
        "input": "nums = [0, 11, 33, 7, 0]",
        "inputRaw": [
          0,
          11,
          33,
          7,
          0
        ],
        "expectedOutput": "25",
        "transformedArray": "[0, 9, 30, -2, -12]",
        "explanation": "• Index 0: nums[0] = 0 -> 0 - 0 + (0 / 11) = 0\n• Index 1: nums[1] = 11 -> 11 - 3 + (11 / 11) = 9\n• Index 2: nums[2] = 33 -> 33 - 6 + (33 / 11) = 30\n• Index 3: nums[3] = 7 -> 7 - 9 + 0 = -2\n• Index 4: nums[4] = 0 -> 0 - 12 + 0 = -12\n• Final Transformed Array: [0, 9, 30, -2, -12]\n• Total Sum: 0 + 9 + 30 - 2 - 12 = 25"
      },
      {
        "id": "tc-3",
        "input": "nums = [11, 22, 33, 44]",
        "inputRaw": [
          11,
          22,
          33,
          44
        ],
        "expectedOutput": "102",
        "transformedArray": "[12, 21, 30, 39]",
        "explanation": "• Index 0: 11 - 0 + 1 = 12\n• Index 1: 22 - 3 + 2 = 21\n• Index 2: 33 - 6 + 3 = 30\n• Index 3: 44 - 9 + 4 = 39\n• Final Transformed Array: [12, 21, 30, 39]\n• Total Sum: 12 + 21 + 30 + 39 = 102"
      },
      {
        "id": "tc-4",
        "input": "nums = [7, 14, 21, 28, 35, 42, 49]",
        "inputRaw": [
          7,
          14,
          21,
          28,
          35,
          42,
          49
        ],
        "expectedOutput": "133",
        "transformedArray": "[7, 11, 15, 19, 23, 27, 31]",
        "explanation": "• Elements transformed:\n  i=0: 7 - 0 = 7\n  i=1: 14 - 3 = 11\n  i=2: 21 - 6 = 15\n  i=3: 28 - 9 = 19\n  i=4: 35 - 12 = 23\n  i=5: 42 - 15 = 27\n  i=6: 49 - 18 = 31\n• Final Transformed Array: [7, 11, 15, 19, 23, 27, 31]\n• Total Sum of all transformed elements: 133"
      }
    ],
    "solutions": {
      "python": "def transform_and_sum(nums):\n    total_sum = 0\n    \n    for i, num in enumerate(nums):\n        val = num - ((i % 7) * 3)\n        if num % 11 == 0:\n            val += num // 11\n        total_sum += val\n        \n    return total_sum",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static long transformAndSum(int[] nums) {\n        long totalSum = 0;\n        \n        for (int i = 0; i < nums.length; i++) {\n            long val = nums[i] - ((i % 7) * 3);\n            if (nums[i] % 11 == 0) {\n                val += nums[i] / 11;\n            }\n            totalSum += val;\n        }\n        \n        return totalSum;\n    }\n}",
      "cpp": "#include <vector>\n\nlong long transformAndSum(const std::vector<int>& nums) {\n    long long totalSum = 0;\n    for (int i = 0; i < nums.size(); ++i) {\n        long long val = nums[i] - ((i % 7) * 3);\n        if (nums[i] % 11 == 0) {\n            val += nums[i] / 11;\n        }\n        totalSum += val;\n    }\n    return totalSum;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static long TransformAndSum(int[] nums) {\n        long totalSum = 0;\n        for (int i = 0; i < nums.Length; i++) {\n            long val = nums[i] - ((i % 7) * 3);\n            if (nums[i] % 11 == 0) {\n                val += nums[i] / 11;\n            }\n            totalSum += val;\n        }\n        return totalSum;\n    }\n}",
      "javascript": "function transformAndSum(nums) {\n  let totalSum = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let val = nums[i] - ((i % 7) * 3);\n    if (nums[i] % 11 === 0) {\n      val += Math.trunc(nums[i] / 11);\n    }\n    totalSum += val;\n  }\n  return totalSum;\n}"
    }
  },
  {
    "id": "recent-dsa-002",
    "track": "dsa",
    "dateTag": "8th Sept Shift 2",
    "examDate": "2024-09-08",
    "shift": "Shift 2",
    "title": "Equivalent Sum (EqSum) Prefix Count",
    "difficulty": "Medium",
    "category": "Prefix Sum / String & Number Parsing",
    "source": "Accenture Assessment 8th Sept Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given a target positive integer `N` (e.g., 112).\nFor any integer `X`, define its **Equivalent Sum (EqSum(X))** as the sum of all prefix sub-numbers formed by reading `X` from left to right.\n\nSpecifically, if `X` is represented as a string of digits `d1 d2 ... dk`:\n```\nEqSum(X) = d1 + int(d1 d2) + ... + int(d1 d2 ... dk)\n```\n\nFor example, for `X = 112`:\n```\nEqSum(112) = 1 + 11 + 112 = 124\n```\n\n**Goal:** Implement a single function that returns the **integer count** of all integers `X` such that:\n1. `1 <= X < N`\n2. `EqSum(X) > N`",
    "rules": [
      "1. 1 <= X < N",
      "2. EqSum(X) > N",
      "3. Must complete in a single function returning an integer value."
    ],
    "formulaBreakdown": [
      {
        "num": 8,
        "digits": "8",
        "prefixes": "8",
        "calculation": "8",
        "eqSum": 8
      },
      {
        "num": 59,
        "digits": "5, 9",
        "prefixes": "5, 59",
        "calculation": "5 + 59",
        "eqSum": 64
      },
      {
        "num": 89,
        "digits": "8, 9",
        "prefixes": "8, 89",
        "calculation": "8 + 89",
        "eqSum": 97
      },
      {
        "num": 105,
        "digits": "1, 0, 5",
        "prefixes": "1, 10, 105",
        "calculation": "1 + 10 + 105",
        "eqSum": 116
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "Return the total integer count of valid numbers."
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 112",
        "inputRaw": 112,
        "expectedOutput": "10",
        "validNumbers": [
          102,
          103,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111
        ],
        "explanation": "We need to find all X < 112 where EqSum(X) > 112.\n• Checking X = 105:\n  EqSum(105) = 1 + 10 + 105 = 116 (116 > 112) Valid\n• Checking X = 99:\n  EqSum(99) = 9 + 99 = 108 (108 <= 112) Invalid\n• Checking X = 102:\n  EqSum(102) = 1 + 10 + 102 = 113 (113 > 112) Valid\n• Valid Numbers (X < 112): 102, 103, 104, 105, 106, 107, 108, 109, 110, 111\n• Total Count: 10"
      },
      {
        "id": "tc-2",
        "input": "N = 50",
        "inputRaw": 50,
        "expectedOutput": "3",
        "validNumbers": [
          47,
          48,
          49
        ],
        "explanation": "• For 2-digit numbers X < 50:\n  EqSum(46) = 4 + 46 = 50 (50 > 50 is false) Invalid\n  EqSum(47) = 4 + 47 = 51 (51 > 50) Valid\n  EqSum(48) = 4 + 48 = 52 (52 > 50) Valid\n  EqSum(49) = 4 + 49 = 53 (53 > 50) Valid\n• Valid Numbers (X < 50): 47, 48, 49\n• Total Count: 3"
      },
      {
        "id": "tc-3",
        "input": "N = 10",
        "inputRaw": 10,
        "expectedOutput": "0",
        "validNumbers": [],
        "explanation": "• For single digit numbers X < 10, EqSum(X) = X <= 9.\n• None of the integers X < 10 satisfy EqSum(X) > 10.\n• Total Count: 0 valid integers."
      },
      {
        "id": "tc-4",
        "input": "N = 250",
        "inputRaw": 250,
        "expectedOutput": "23",
        "explanation": "• Evaluates 3-digit prefix sums from 1 to 249.\n• Checks X < 250 with EqSum(X) > 250.\n• Total Count: 23 valid integers."
      }
    ],
    "solutions": {
      "python": "def count_valid_numbers(N: int) -> int:\n    \"\"\"Returns the integer count of all numbers X < N such that EqSum(X) > N.\n    Single function implementation returning an integer value.\n    \"\"\"\n    count = 0\n    for x in range(1, N):\n        s = str(x)\n        eq_sum = sum(int(s[:i]) for i in range(1, len(s) + 1))\n        if eq_sum > N:\n            count += 1\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    // Single function to complete: returns the integer count of numbers X < N where EqSum(X) > N\n    public static int countValidNumbers(int N) {\n        int count = 0;\n        for (int x = 1; x < N; x++) {\n            String s = String.valueOf(x);\n            long eqSum = 0;\n            for (int i = 1; i <= s.length(); i++) {\n                eqSum += Long.parseLong(s.substring(0, i));\n            }\n            if (eqSum > N) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "cpp": "#include <string>\n\nint countValidNumbers(int N) {\n    int count = 0;\n    for (int x = 1; x < N; ++x) {\n        std::string s = std::to_string(x);\n        long long eqSum = 0;\n        for (size_t i = 1; i <= s.length(); ++i) {\n            eqSum += std::stoll(s.substr(0, i));\n        }\n        if (eqSum > N) {\n            count++;\n        }\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountValidNumbers(int N) {\n        int count = 0;\n        for (int x = 1; x < N; x++) {\n            string s = x.ToString();\n            long eqSum = 0;\n            for (int i = 1; i <= s.Length; i++) {\n                eqSum += long.Parse(s.Substring(0, i));\n            }\n            if (eqSum > N) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "javascript": "function countValidNumbers(N) {\n  let count = 0;\n  for (let x = 1; x < N; x++) {\n    const s = String(x);\n    let eqSum = 0;\n    for (let i = 1; i <= s.length; i++) {\n      eqSum += parseInt(s.substring(0, i), 10);\n    }\n    if (eqSum > N) {\n      count++;\n    }\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-003",
    "track": "dsa",
    "dateTag": "10th Sept Shift 1",
    "examDate": "2024-09-10",
    "shift": "Shift 1",
    "title": "Running Sum and Divisibility Count",
    "difficulty": "Easy",
    "category": "Math / Prefix Sum & Modulo",
    "source": "Accenture Assessment 10th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Given a positive integer `N`, calculate the running sum from 1 to `N`. Increment a counter every time the running sum is divisible by 5. Output the total running sum and final count.",
    "rules": [
      "1. Initialize running_sum = 0 and count = 0.",
      "2. Loop i from 1 to N: add i to running_sum.",
      "3. If running_sum % 5 == 0, increment count by 1.",
      "4. Output the final running sum and total count."
    ],
    "constraints": [
      "1 <= N <= 10^6",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 10",
        "inputRaw": 10,
        "expectedOutput": "Running Sum = 55, Count = 4",
        "explanation": "• i = 1: sum = 1\n• i = 2: sum = 3\n• i = 3: sum = 6\n• i = 4: sum = 10 -> (10 mod 5 == 0) -> Count = 1\n• i = 5: sum = 15 -> (15 mod 5 == 0) -> Count = 2\n• i = 6: sum = 21\n• i = 7: sum = 28\n• i = 8: sum = 36\n• i = 9: sum = 45 -> (45 mod 5 == 0) -> Count = 3\n• i = 10: sum = 55 -> (55 mod 5 == 0) -> Count = 4\n• Final Output: Running Sum = 55, Count = 4"
      },
      {
        "id": "tc-2",
        "input": "N = 5",
        "inputRaw": 5,
        "expectedOutput": "Running Sum = 15, Count = 2",
        "explanation": "• i = 1: sum = 1\n• i = 2: sum = 3\n• i = 3: sum = 6\n• i = 4: sum = 10 -> (10 mod 5 == 0) -> Count = 1\n• i = 5: sum = 15 -> (15 mod 5 == 0) -> Count = 2\n• Final Output: Running Sum = 15, Count = 2"
      },
      {
        "id": "tc-3",
        "input": "N = 20",
        "inputRaw": 20,
        "expectedOutput": "Running Sum = 210, Count = 8",
        "explanation": "• Running sum from 1 to 20 equals 210.\n• Multiple totals at i=4, 5, 9, 10, 14, 15, 19, 20 are divisible by 5.\n• Final Output: Running Sum = 210, Count = 8"
      },
      {
        "id": "tc-4",
        "input": "N = 15",
        "inputRaw": 15,
        "expectedOutput": "Running Sum = 120, Count = 6",
        "explanation": "• Running sum from 1 to 15 equals 120.\n• Totals divisible by 5 occur at i = 4 (sum 10), i = 5 (sum 15), i = 9 (sum 45), i = 10 (sum 55), i = 14 (sum 105), and i = 15 (sum 120).\n• Total divisible occurrences: 6.\n• Final Output: Running Sum = 120, Count = 6"
      }
    ],
    "solutions": {
      "python": "def calculate_running_sum_and_divisibility(n):\n    running_sum = 0\n    count = 0\n    \n    for i in range(1, n + 1):\n        running_sum += i\n        if running_sum % 5 == 0:\n            count += 1\n            \n    print(f\"Running Sum = {running_sum}\")\n    print(f\"Count = {count}\")\n    return running_sum, count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void calculateRunningSumAndDivisibility(int n) {\n        int runningSum = 0;\n        int count = 0;\n\n        for (int i = 1; i <= n; i++) {\n            runningSum += i;\n            if (runningSum % 5 == 0) {\n                count++;\n            }\n        }\n\n        System.out.println(\"Running Sum = \" + runningSum);\n        System.out.println(\"Count = \" + count);\n    }\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static void CalculateRunningSumAndDivisibility(int n) {\n        int runningSum = 0;\n        int count = 0;\n\n        for (int i = 1; i <= n; i++) {\n            runningSum += i;\n            if (runningSum % 5 == 0) {\n                count++;\n            }\n        }\n\n        Console.WriteLine($\"Running Sum = {runningSum}\");\n        Console.WriteLine($\"Count = {count}\");\n    }\n}",
      "cpp": "#include <iostream>\n\nvoid calculateRunningSumAndDivisibility(int n) {\n    long long runningSum = 0;\n    int count = 0;\n    for (int i = 1; i <= n; ++i) {\n        runningSum += i;\n        if (runningSum % 5 == 0) {\n            count++;\n        }\n    }\n    std::cout << \"Running Sum = \" << runningSum << std::endl;\n    std::cout << \"Count = \" << count << std::endl;\n}",
      "javascript": "function calculateRunningSumAndDivisibility(n) {\n  let runningSum = 0;\n  let count = 0;\n  for (let i = 1; i <= n; i++) {\n    runningSum += i;\n    if (runningSum % 5 === 0) {\n      count++;\n    }\n  }\n  console.log(`Running Sum = ${runningSum}`);\n  console.log(`Count = ${count}`);\n  return { runningSum, count };\n}"
    }
  },
  {
    "id": "recent-dsa-004",
    "track": "dsa",
    "dateTag": "14th Dec 2025 • Shift 1",
    "examDate": "2025-12-14",
    "shift": "Shift 1",
    "title": "Power of a Number",
    "difficulty": "Easy",
    "category": "Math & Exponentiation",
    "source": "Accenture Assessment 14th Dec 2025 (2025 PYQ Series)",
    "isVerified": true,
    "description": "Given two integers `N` and `P`, calculate `N` raised to the power `P` (i.e. N^P).\n\nMultiply N by itself P times to compute the exponentiation result.",
    "rules": [
      "1. Given base integer N and exponent integer P.",
      "2. Calculate N multiplied by itself P times.",
      "3. For any non-zero N, N^0 equals 1.",
      "4. Return the calculated power value."
    ],
    "constraints": [
      "0 <= N <= 20",
      "0 <= P <= 30",
      "Time Complexity: O(P) or O(log P)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 2, P = 5",
        "inputRaw": {
          "N": 2,
          "P": 5
        },
        "expectedOutput": "32",
        "explanation": "2^5 = 2 * 2 * 2 * 2 * 2 = 32."
      },
      {
        "id": "tc-2",
        "input": "N = 3, P = 4",
        "inputRaw": {
          "N": 3,
          "P": 4
        },
        "expectedOutput": "81",
        "explanation": "3^4 = 3 * 3 * 3 * 3 = 81."
      },
      {
        "id": "tc-3",
        "input": "N = 5, P = 0",
        "inputRaw": {
          "N": 5,
          "P": 0
        },
        "expectedOutput": "1",
        "explanation": "Any non-zero number raised to the power 0 is 1: 5^0 = 1."
      },
      {
        "id": "tc-4",
        "input": "N = 10, P = 3",
        "inputRaw": {
          "N": 10,
          "P": 3
        },
        "expectedOutput": "1000",
        "explanation": "10^3 = 10 * 10 * 10 = 1000."
      }
    ],
    "solutions": {
      "python": "def calculate_power(n, p):\n    # Method 1: Exponentiation\n    return n ** p",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static long calculatePower(int n, int p) {\n        long result = 1;\n        for (int i = 0; i < p; i++) {\n            result *= n;\n        }\n        return result;\n    }\n}",
      "cpp": "long long calculatePower(int n, int p) {\n    long long result = 1;\n    for (int i = 0; i < p; ++i) {\n        result *= n;\n    }\n    return result;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static long CalculatePower(int n, int p) {\n        long result = 1;\n        for (int i = 0; i < p; i++) {\n            result *= n;\n        }\n        return result;\n    }\n}",
      "javascript": "function calculatePower(n, p) {\n  return Math.pow(n, p);\n}"
    }
  },
  {
    "id": "recent-dsa-005",
    "track": "dsa",
    "dateTag": "1st Aug 2021 • Slot 1",
    "examDate": "2021-08-01",
    "shift": "Slot 1",
    "title": "Move Hyphens to Front",
    "difficulty": "Medium",
    "category": "String Manipulation",
    "source": "Accenture Offcampus 1st Aug 2021 Slot 1 (Actual Question 09)",
    "isVerified": true,
    "description": "Implement the following function:\n```c\nchar* MoveHyphen(char str[], int n);\n```\nThe function accepts a string `str` of length `n`, containing alphabets and hyphens (-). Implement the function to move all hyphens (-) in the string to the front of the given string.\n\n**NOTE:** Return `null` if `str` is null.",
    "rules": [
      "1. Return null if input string str is null.",
      "2. Move all hyphen characters (-) to the beginning of the string.",
      "3. Maintain the original relative order of all alphabet characters.",
      "4. Return the resulting string."
    ],
    "constraints": [
      "1 <= n <= 10^5",
      "str contains English alphabets and hyphens (-).",
      "Time Complexity: O(N)",
      "Space Complexity: O(N)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "str = \"String-Compare\", n = 14",
        "inputRaw": "String-Compare",
        "expectedOutput": "\"-StringCompare\"",
        "explanation": "All hyphens are moved to the beginning of the string while preserving the order of the remaining characters:\n• Total hyphens: 1 ('-')\n• Remaining letters: \"StringCompare\"\n• Final Output: \"-StringCompare\""
      },
      {
        "id": "tc-2",
        "input": "str = \"Move-Hyphens-To-Front\", n = 21",
        "inputRaw": "Move-Hyphens-To-Front",
        "expectedOutput": "\"---MoveHyphensToFront\"",
        "explanation": "• Total hyphens: 3 ('---')\n• Remaining letters: \"MoveHyphensToFront\"\n• Final Output: \"---MoveHyphensToFront\""
      },
      {
        "id": "tc-3",
        "input": "str = \"NoHyphensHere\", n = 13",
        "inputRaw": "NoHyphensHere",
        "expectedOutput": "\"NoHyphensHere\"",
        "explanation": "No hyphens found; the string remains unchanged."
      }
    ],
    "solutions": {
      "python": "def move_hyphen(s, n):\n    if s is None:\n        return None\n    \n    hyphens = []\n    letters = []\n    \n    for ch in s:\n        if ch == '-':\n            hyphens.append(ch)\n        else:\n            letters.append(ch)\n            \n    return ''.join(hyphens) + ''.join(letters)",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String moveHyphen(String str, int n) {\n        if (str == null) return null;\n        \n        StringBuilder hyphens = new StringBuilder();\n        StringBuilder letters = new StringBuilder();\n        \n        for (int i = 0; i < n; i++) {\n            char ch = str.charAt(i);\n            if (ch == '-') {\n                hyphens.append(ch);\n            } else {\n                letters.append(ch);\n            }\n        }\n        \n        return hyphens.toString() + letters.toString();\n    }\n}",
      "cpp": "#include <string>\n\nstd::string moveHyphen(const std::string& str, int n) {\n    std::string hyphens = \"\";\n    std::string letters = \"\";\n    \n    for (int i = 0; i < n; ++i) {\n        if (str[i] == '-') {\n            hyphens += '-';\n        } else {\n            letters += str[i];\n        }\n    }\n    \n    return hyphens + letters;\n}",
      "csharp": "using System;\nusing System.Text;\n\npublic class Solution {\n    public static string MoveHyphen(string str, int n) {\n        if (str == null) return null;\n        \n        StringBuilder hyphens = new StringBuilder();\n        StringBuilder letters = new StringBuilder();\n        \n        for (int i = 0; i < n; i++) {\n            if (str[i] == '-') {\n                hyphens.Append('-');\n            } else {\n                letters.Append(str[i]);\n            }\n        }\n        \n        return hyphens.ToString() + letters.ToString();\n    }\n}",
      "javascript": "function moveHyphen(str, n) {\n  if (str === null) return null;\n  \n  let hyphens = '';\n  let letters = '';\n  \n  for (let i = 0; i < n; i++) {\n    if (str[i] === '-') {\n      hyphens += '-';\n    } else {\n      letters += str[i];\n    }\n  }\n  \n  return hyphens + letters;\n}"
    }
  },
  {
    "id": "recent-dsa-006",
    "track": "dsa",
    "dateTag": "18th Dec 2025 • Shift 2",
    "examDate": "2025-12-18",
    "shift": "Shift 2",
    "title": "Count Special Elements",
    "difficulty": "Easy",
    "category": "Array / Parity & Index Matching",
    "source": "Accenture Assessment 18th Dec 2025 (Q6 Special Elements)",
    "isVerified": true,
    "description": "Given an array of integers `nums`, count the elements with **odd index and odd value**, and the elements with **even index and even value**.\n\nReturn the total count of such special elements.\n**Note:** Use 0-based indexing.",
    "rules": [
      "1. Iterate through the array using 0-based indexing (i = 0 to nums.length - 1).",
      "2. If (i % 2 == 0 && nums[i] % 2 == 0): Count as even index & even value.",
      "3. If (i % 2 != 0 && nums[i] % 2 != 0): Count as odd index & odd value.",
      "4. Return the total count of matched elements."
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= nums[i] <= 10^9",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "nums = [2, 1, 4, 3, 6, 5]",
        "inputRaw": [
          2,
          1,
          4,
          3,
          6,
          5
        ],
        "expectedOutput": "6",
        "explanation": "• Even index & even value: 3 -> (nums[0]=2, nums[2]=4, nums[4]=6)\n• Odd index & odd value: 3 -> (nums[1]=1, nums[3]=3, nums[5]=5)\n• Total matching count: 3 + 3 = 6"
      },
      {
        "id": "tc-2",
        "input": "nums = [1, 2, 3, 4, 5]",
        "inputRaw": [
          1,
          2,
          3,
          4,
          5
        ],
        "expectedOutput": "0",
        "explanation": "• Even indices (0, 2, 4) contain odd numbers (1, 3, 5).\n• Odd indices (1, 3) contain even numbers (2, 4).\n• Total matching count = 0."
      },
      {
        "id": "tc-3",
        "input": "nums = [10, 11, 12, 13]",
        "inputRaw": [
          10,
          11,
          12,
          13
        ],
        "expectedOutput": "4",
        "explanation": "• Even pairs: nums[0]=10, nums[2]=12 (2 elements)\n• Odd pairs: nums[1]=11, nums[3]=13 (2 elements)\n• Total count: 4"
      },
      {
        "id": "tc-4",
        "input": "nums = [2, 4, 6, 8]",
        "inputRaw": [
          2,
          4,
          6,
          8
        ],
        "expectedOutput": "2",
        "explanation": "• Index 0 (even) and value 2 (even) -> Matches.\n• Index 1 (odd) and value 4 (even) -> No match.\n• Index 2 (even) and value 6 (even) -> Matches.\n• Index 3 (odd) and value 8 (even) -> No match.\n• Total matching special elements: 2."
      }
    ],
    "solutions": {
      "python": "def count_special_elements(nums):\n    count = 0\n    for i, val in enumerate(nums):\n        if (i % 2 == 0 and val % 2 == 0) or (i % 2 != 0 and val % 2 != 0):\n            count += 1\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int countSpecialElements(int[] nums) {\n        int count = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "cpp": "#include <vector>\n\nint countSpecialElements(const std::vector<int>& nums) {\n    int count = 0;\n    for (int i = 0; i < (int)nums.size(); ++i) {\n        if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {\n            count++;\n        }\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountSpecialElements(int[] nums) {\n        int count = 0;\n        for (int i = 0; i < nums.Length; i++) {\n            if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "javascript": "function countSpecialElements(nums) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if ((i % 2 === 0 && nums[i] % 2 === 0) || (i % 2 !== 0 && nums[i] % 2 !== 0)) {\n      count++;\n    }\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-007",
    "track": "dsa",
    "dateTag": "22nd Dec 2025 • Shift 1",
    "examDate": "2025-12-22",
    "shift": "Shift 1",
    "title": "Reverse a Number",
    "difficulty": "Easy",
    "category": "Math & Digits / Modulo Arithmetic",
    "source": "Accenture Assessment 22nd Dec 2025 (2025 PYQ Series)",
    "isVerified": true,
    "description": "Given an integer `N`, return the integer obtained after reversing the digits of `N`.\n\nExtract the digits from right to left using modulo 10 arithmetic to construct the reversed integer.",
    "rules": [
      "1. Initialize rev = 0.",
      "2. In a loop while N > 0: extract digit = N % 10, rev = rev * 10 + digit, N = N // 10.",
      "3. Return the reversed integer rev."
    ],
    "constraints": [
      "1 <= N <= 10^9",
      "N does not have leading zeros.",
      "Time Complexity: O(log10(N))",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 12345",
        "inputRaw": 12345,
        "expectedOutput": "54321",
        "explanation": "Reversing the digits of 12345 gives 54321:\n• 12345 % 10 = 5 -> rev = 5\n• 1234 % 10 = 4 -> rev = 54\n• 123 % 10 = 3 -> rev = 543\n• 12 % 10 = 2 -> rev = 5432\n• 1 % 10 = 1 -> rev = 54321"
      },
      {
        "id": "tc-2",
        "input": "N = 98760",
        "inputRaw": 98760,
        "expectedOutput": "6789",
        "explanation": "Reversing 98760 removes the trailing zero when converted to an integer: 6789."
      },
      {
        "id": "tc-3",
        "input": "N = 7",
        "inputRaw": 7,
        "expectedOutput": "7",
        "explanation": "A single digit number reversed is itself: 7."
      },
      {
        "id": "tc-4",
        "input": "N = 1000",
        "inputRaw": 1000,
        "expectedOutput": "1",
        "explanation": "Trailing zeros are dropped during integer reversal: 1000 reversed as an integer is 1."
      }
    ],
    "solutions": {
      "python": "def reverse_number(n):\n    rev = 0\n    while n > 0:\n        rev = (rev * 10) + (n % 10)\n        n //= 10\n    return rev",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static long reverseNumber(long n) {\n        long rev = 0;\n        while (n > 0) {\n            rev = (rev * 10) + (n % 10);\n            n /= 10;\n        }\n        return rev;\n    }\n}",
      "cpp": "long long reverseNumber(long long n) {\n    long long rev = 0;\n    while (n > 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    return rev;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static long ReverseNumber(long n) {\n        long rev = 0;\n        while (n > 0) {\n            rev = (rev * 10) + (n % 10);\n            n /= 10;\n        }\n        return rev;\n    }\n}",
      "javascript": "function reverseNumber(n) {\n  let rev = 0;\n  while (n > 0) {\n    rev = (rev * 10) + (n % 10);\n    n = Math.floor(n / 10);\n  }\n  return rev;\n}"
    }
  },
  {
    "id": "recent-dsa-008",
    "track": "dsa",
    "dateTag": "10th Dec 2025 • Shift 1",
    "examDate": "2025-12-10",
    "shift": "Shift 1",
    "title": "Count Valid Blocks",
    "difficulty": "Easy",
    "category": "Arrays / Consecutive Elements (Run-Length)",
    "source": "Accenture Assessment 10th Dec 2025 (PYQ Series)",
    "isVerified": true,
    "description": "You are given an integer `N` and an array `A` of `N` integers.\n\nThe array is divided into blocks, where a **block** is a group of consecutive elements having the exact same value.\n\nA block is called a **Valid Block** if:\n```\nLength of the block == value of its elements\n```\n\nYour task is to count and return the total number of valid blocks in the array.\n\n**Important**:\nOnly consecutive occurrences form a block. For example, `[2, 2, 1, 2, 2]` contains two separate blocks of 2, each of length 2 (both valid). The two groups cannot be combined because 1 separates them.",
    "rules": [
      "1. Scan the array from left to right.",
      "2. For every consecutive block of equal elements, count its length: blockLength.",
      "3. If blockLength == currentValue, increment the total valid block count by 1.",
      "4. Continue until the entire array is processed, and return count."
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "1 <= A[i] <= 10^5",
      "Time Complexity: O(N) (Single Pass)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 7, A = [1, 2, 2, 3, 3, 3, 4]",
        "inputRaw": {
          "n": 7,
          "a": [
            1,
            2,
            2,
            3,
            3,
            3,
            4
          ]
        },
        "expectedOutput": "3",
        "explanation": "Blocks:\n• [1] → length = 1, value = 1 → Valid ✅\n• [2, 2] → length = 2, value = 2 → Valid ✅\n• [3, 3, 3] → length = 3, value = 3 → Valid ✅\n• [4] → length = 1, value = 4 → Invalid ❌\nTotal Valid Blocks = 3."
      },
      {
        "id": "tc-2",
        "input": "N = 6, A = [1, 2, 2, 3, 3, 3]",
        "inputRaw": {
          "n": 6,
          "a": [
            1,
            2,
            2,
            3,
            3,
            3
          ]
        },
        "expectedOutput": "3",
        "explanation": "Blocks:\n• [1] → length 1 == value 1 ✅\n• [2, 2] → length 2 == value 2 ✅\n• [3, 3, 3] → length 3 == value 3 ✅\nTotal Valid Blocks = 3."
      },
      {
        "id": "tc-3",
        "input": "N = 5, A = [2, 2, 2, 4, 4]",
        "inputRaw": {
          "n": 5,
          "a": [
            2,
            2,
            2,
            4,
            4
          ]
        },
        "expectedOutput": "0",
        "explanation": "Blocks:\n• [2, 2, 2] → length = 3, value = 2 → Invalid ❌\n• [4, 4] → length = 2, value = 4 → Invalid ❌\nTotal Valid Blocks = 0."
      },
      {
        "id": "tc-4",
        "input": "N = 8, A = [2, 2, 1, 2, 2, 3, 3, 3]",
        "inputRaw": {
          "n": 8,
          "a": [
            2,
            2,
            1,
            2,
            2,
            3,
            3,
            3
          ]
        },
        "expectedOutput": "4",
        "explanation": "Blocks:\n• [2, 2] → length = 2, value = 2 → Valid ✅\n• [1] → length = 1, value = 1 → Valid ✅\n• [2, 2] → length = 2, value = 2 → Valid ✅\n• [3, 3, 3] → length = 3, value = 3 → Valid ✅\nTotal Valid Blocks = 4."
      }
    ],
    "solutions": {
      "python": "def count_valid_blocks(n, a):\n    count = 0\n    i = 0\n    while i < n:\n        current_value = a[i]\n        block_length = 0\n        while i < n and a[i] == current_value:\n            block_length += 1\n            i += 1\n        if block_length == current_value:\n            count += 1\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int countValidBlocks(int n, int[] a) {\n        int count = 0;\n        int i = 0;\n        while (i < n) {\n            int currentValue = a[i];\n            int blockLength = 0;\n            while (i < n && a[i] == currentValue) {\n                blockLength++;\n                i++;\n            }\n            if (blockLength == currentValue) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "cpp": "#include <vector>\n\nint countValidBlocks(int n, const std::vector<int>& a) {\n    int count = 0;\n    int i = 0;\n    while (i < n) {\n        int currentValue = a[i];\n        int blockLength = 0;\n        while (i < n && a[i] == currentValue) {\n            blockLength++;\n            i++;\n        }\n        if (blockLength == currentValue) {\n            count++;\n        }\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountValidBlocks(int n, int[] a) {\n        int count = 0;\n        int i = 0;\n        while (i < n) {\n            int currentValue = a[i];\n            int blockLength = 0;\n            while (i < n && a[i] == currentValue) {\n                blockLength++;\n                i++;\n            }\n            if (blockLength == currentValue) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "javascript": "function countValidBlocks(n, a) {\n  let count = 0;\n  let i = 0;\n  while (i < n) {\n    const currentValue = a[i];\n    let blockLength = 0;\n    while (i < n && a[i] === currentValue) {\n      blockLength++;\n      i++;\n    }\n    if (blockLength === currentValue) {\n      count++;\n    }\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-009",
    "track": "dsa",
    "dateTag": "15th Nov 2025 • Shift 2",
    "examDate": "2025-11-15",
    "shift": "Shift 2",
    "title": "Sum of Prime Numbers in a Range",
    "difficulty": "Easy",
    "category": "Math & Prime Numbers / Loops & Range Traversal",
    "source": "Accenture Assessment 15th Nov 2025 (Shift 2 PYQ Series)",
    "isVerified": true,
    "description": "Given two integers `M` and `N`, find the sum of all prime numbers between `M` and `N` (inclusive).\n\nA **prime number** is a number greater than 1 that has exactly two factors: 1 and itself.\nNegative numbers, 0, and 1 are **not** prime numbers.\n\n**Example**:\n`M = 10`, `N = 20`\nPrime numbers between 10 and 20 are:\n`11, 13, 17, 19`\nTotal Sum:\n`11 + 13 + 17 + 19 = 60`",
    "rules": [
      "1. Loop through every integer from M to N (inclusive).",
      "2. For each number, check if it is prime (greater than 1 and not divisible by any integer from 2 up to sqrt(num)).",
      "3. If prime, add it to the running total sum.",
      "4. Return the final sum."
    ],
    "constraints": [
      "-100 <= M <= N <= 10^5",
      "Time Complexity: O((N - M + 1) * sqrt(N))",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "M = 10, N = 20",
        "inputRaw": {
          "m": 10,
          "n": 20
        },
        "expectedOutput": "60",
        "explanation": "Prime numbers: 11, 13, 17, 19.\nSum = 11 + 13 + 17 + 19 = 60."
      },
      {
        "id": "tc-2",
        "input": "M = 1, N = 10",
        "inputRaw": {
          "m": 1,
          "n": 10
        },
        "expectedOutput": "17",
        "explanation": "Prime numbers: 2, 3, 5, 7 (1 is not prime).\nSum = 2 + 3 + 5 + 7 = 17."
      },
      {
        "id": "tc-3",
        "input": "M = 14, N = 16",
        "inputRaw": {
          "m": 14,
          "n": 16
        },
        "expectedOutput": "0",
        "explanation": "Numbers in range: 14, 15, 16. None of these are prime numbers.\nSum = 0."
      },
      {
        "id": "tc-4",
        "input": "M = -5, N = 5",
        "inputRaw": {
          "m": -5,
          "n": 5
        },
        "expectedOutput": "10",
        "explanation": "Negative numbers, 0, and 1 are not prime.\nThe primes in range are 2, 3, 5.\nSum = 2 + 3 + 5 = 10."
      }
    ],
    "solutions": {
      "python": "def is_prime(num):\n    if num <= 1:\n        return False\n    i = 2\n    while i * i <= num:\n        if num % i == 0:\n            return False\n        i += 1\n    return True\n\ndef calculate_prime_sum(m, n):\n    total_sum = 0\n    for i in range(m, n + 1):\n        if is_prime(i):\n            total_sum += i\n    return total_sum",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static boolean isPrime(int num) {\n        if (num <= 1) return false;\n        for (int i = 2; i * i <= num; i++) {\n            if (num % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static long calculatePrimeSum(int m, int n) {\n        long sum = 0;\n        for (int i = m; i <= n; i++) {\n            if (isPrime(i)) {\n                sum += i;\n            }\n        }\n        return sum;\n    }\n}",
      "cpp": "bool is_prime(int num) {\n    if (num <= 1) return false;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return false;\n    }\n    return true;\n}\n\nlong long calculate_prime_sum(int m, int n) {\n    long long sum = 0;\n    for (int i = m; i <= n; i++) {\n        if (is_prime(i)) {\n            sum += i;\n        }\n    }\n    return sum;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static bool IsPrime(int num) {\n        if (num <= 1) return false;\n        for (int i = 2; i * i <= num; i++) {\n            if (num % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static long CalculatePrimeSum(int m, int n) {\n        long sum = 0;\n        for (int i = m; i <= n; i++) {\n            if (IsPrime(i)) {\n                sum += i;\n            }\n        }\n        return sum;\n    }\n}",
      "javascript": "function isPrime(num) {\n  if (num <= 1) return false;\n  for (let i = 2; i * i <= num; i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n}\n\nfunction calculatePrimeSum(m, n) {\n  let sum = 0;\n  for (let i = m; i <= n; i++) {\n    if (isPrime(i)) {\n      sum += i;\n    }\n  }\n  return sum;\n}"
    }
  },
  {
    "id": "recent-dsa-010",
    "track": "dsa",
    "dateTag": "20th Nov 2025 • Shift 1",
    "examDate": "2025-11-20",
    "shift": "Shift 1",
    "title": "Difference Between Digit Sums",
    "difficulty": "Easy",
    "category": "Mathematical Problems / Number Theory & Digit Manipulation",
    "source": "Accenture Assessment 20th Nov 2025 (PYQ Series)",
    "isVerified": true,
    "description": "Given two integers `M` and `N`, calculate and return the absolute difference between:\n\n1. The sum of digits of all numbers divisible by 4 between `M` and `N` (inclusive).\n2. The sum of digits of all numbers divisible by 7 between `M` and `N` (inclusive).\n\n⚠️ **Important Edge Case**:\nA number can be divisible by both 4 and 7 (such as 28, 56, 84...).\nWhen a number is divisible by both 4 and 7, its digit sum **must be added to both** `sum4` and `sum7`. Use separate `if` conditions rather than `else if`.",
    "rules": [
      "1. Loop through each number i from M to N (inclusive).",
      "2. If i % 4 == 0, calculate its digit sum and add it to sum4.",
      "3. If i % 7 == 0, calculate its digit sum and add it to sum7.",
      "4. Numbers divisible by both 4 and 7 must contribute to both sum4 and sum7.",
      "5. Return the absolute difference: abs(sum4 - sum7)."
    ],
    "constraints": [
      "1 <= M <= N <= 10^5",
      "Time Complexity: O((N - M + 1) * log10(N))",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "M = 1, N = 20",
        "inputRaw": {
          "m": 1,
          "n": 20
        },
        "expectedOutput": "12",
        "explanation": "• Numbers divisible by 4: 4, 8, 12, 16, 20\n  Digit sums: 4 + 8 + (1+2) + (1+6) + (2+0) = 4 + 8 + 3 + 7 + 2 = 24\n• Numbers divisible by 7: 7, 14\n  Digit sums: 7 + (1+4) = 7 + 5 = 12\n• Absolute Difference: |24 - 12| = 12."
      },
      {
        "id": "tc-2",
        "input": "M = 1, N = 10",
        "inputRaw": {
          "m": 1,
          "n": 10
        },
        "expectedOutput": "5",
        "explanation": "• Divisible by 4: 4 (digit sum 4), 8 (digit sum 8) -> sum4 = 12\n• Divisible by 7: 7 (digit sum 7) -> sum7 = 7\n• Absolute Difference: |12 - 7| = 5."
      },
      {
        "id": "tc-3",
        "input": "M = 28, N = 28",
        "inputRaw": {
          "m": 28,
          "n": 28
        },
        "expectedOutput": "0",
        "explanation": "• 28 is divisible by both 4 and 7!\n• Digit sum: 2 + 8 = 10\n• Added to sum4: 10, and added to sum7: 10\n• Absolute Difference: |10 - 10| = 0."
      },
      {
        "id": "tc-4",
        "input": "M = 40, N = 50",
        "inputRaw": {
          "m": 40,
          "n": 50
        },
        "expectedOutput": "5",
        "explanation": "• Multiples of 4: 40 (4), 44 (8), 48 (12) -> sum4 = 24\n• Multiples of 7: 42 (6), 49 (13) -> sum7 = 19\n• Absolute Difference: |24 - 19| = 5."
      }
    ],
    "solutions": {
      "python": "def calculate_difference(m, n):\n    def digit_sum(num):\n        s = 0\n        while num > 0:\n            s += num % 10\n            num //= 10\n        return s\n\n    sum4 = 0\n    sum7 = 0\n    for i in range(m, n + 1):\n        d_sum = digit_sum(i)\n        if i % 4 == 0:\n            sum4 += d_sum\n        if i % 7 == 0:\n            sum7 += d_sum\n            \n    return abs(sum4 - sum7)",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int digitSum(int num) {\n        int sum = 0;\n        while (num > 0) {\n            sum += num % 10;\n            num /= 10;\n        }\n        return sum;\n    }\n\n    public static int calculateDifference(int m, int n) {\n        int sum4 = 0;\n        int sum7 = 0;\n\n        for (int i = m; i <= n; i++) {\n            int d = digitSum(i);\n            if (i % 4 == 0) {\n                sum4 += d;\n            }\n            if (i % 7 == 0) {\n                sum7 += d;\n            }\n        }\n\n        return Math.abs(sum4 - sum7);\n    }\n}",
      "cpp": "#include <cstdlib>\n\nint digitSum(int num) {\n    int sum = 0;\n    while (num > 0) {\n        sum += num % 10;\n        num /= 10;\n    }\n    return sum;\n}\n\nint calculateDifference(int m, int n) {\n    int sum4 = 0;\n    int sum7 = 0;\n\n    for (int i = m; i <= n; i++) {\n        int d = digitSum(i);\n        if (i % 4 == 0) {\n            sum4 += d;\n        }\n        if (i % 7 == 0) {\n            sum7 += d;\n        }\n    }\n\n    return std::abs(sum4 - sum7);\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int DigitSum(int num) {\n        int sum = 0;\n        while (num > 0) {\n            sum += num % 10;\n            num /= 10;\n        }\n        return sum;\n    }\n\n    public static int CalculateDifference(int m, int n) {\n        int sum4 = 0;\n        int sum7 = 0;\n\n        for (int i = m; i <= n; i++) {\n            int d = DigitSum(i);\n            if (i % 4 == 0) {\n                sum4 += d;\n            }\n            if (i % 7 == 0) {\n                sum7 += d;\n            }\n        }\n\n        return Math.Abs(sum4 - sum7);\n    }\n}",
      "javascript": "function digitSum(num) {\n  let sum = 0;\n  while (num > 0) {\n    sum += num % 10;\n    num = Math.floor(num / 10);\n  }\n  return sum;\n}\n\nfunction calculateDifference(m, n) {\n  let sum4 = 0;\n  let sum7 = 0;\n\n  for (let i = m; i <= n; i++) {\n    const d = digitSum(i);\n    if (i % 4 === 0) {\n      sum4 += d;\n    }\n    if (i % 7 === 0) {\n      sum7 += d;\n    }\n  }\n\n  return Math.abs(sum4 - sum7);\n}"
    }
  },
  {
    "id": "recent-dsa-011",
    "track": "dsa",
    "dateTag": "31st Dec 2025 • Shift 1",
    "examDate": "2025-12-31",
    "shift": "Shift 1",
    "title": "Rat Food Consumption",
    "difficulty": "Easy",
    "category": "Arrays / Greedy & Prefix Sum",
    "source": "Accenture Assessment 31st Dec 2025 (PYQ Series)",
    "isVerified": true,
    "description": "The function accepts:\n- `r`: number of rats in the area\n- `unit`: amount of food required by each rat\n- `n`: number of houses\n- `arr[]`: amount of food available in each house\n\nReturn the **minimum number of houses** required from the start of the array to collect enough food to satisfy all the rats.\n\n**Formula**:\n```\nTotal Food Required = r * unit\n```\n\nStart from the first house and accumulate food sequentially until `accumulatedFood >= requiredFood`.\nWhen fulfilled, return the number of houses used (`i + 1`).\n\n⚠️ **Special Conditions**:\n1. **Array is NULL or Empty**: Return `-1`.\n2. **Total food in all houses is insufficient** (< Total Food Required): Return `0`.",
    "rules": [
      "1. Check if the array is null or n <= 0. If so, return -1 immediately.",
      "2. Calculate requiredFood = r * unit.",
      "3. Iterate through arr from index 0 to n - 1, keeping a running sum of collected food.",
      "4. If collected food becomes >= requiredFood at index i, return i + 1.",
      "5. If the entire array is traversed and collected food is still < requiredFood, return 0."
    ],
    "constraints": [
      "0 <= n <= 10^5",
      "0 <= arr[i] <= 10^4",
      "1 <= r, unit <= 10^4",
      "Time Complexity: O(N) (Single Pass)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "r = 7, unit = 2, n = 8, arr = [2, 8, 3, 5, 7, 4, 1, 2]",
        "inputRaw": {
          "r": 7,
          "unit": 2,
          "n": 8,
          "arr": [
            2,
            8,
            3,
            5,
            7,
            4,
            1,
            2
          ]
        },
        "expectedOutput": "4",
        "explanation": "• Total food required: 7 * 2 = 14\n• House 1: 2 (sum = 2)\n• House 2: 8 (sum = 10)\n• House 3: 3 (sum = 13)\n• House 4: 5 (sum = 18 >= 14)\nFirst 4 houses provide sufficient food."
      },
      {
        "id": "tc-2",
        "input": "r = 5, unit = 2, n = 5, arr = [15, 2, 3, 4, 5]",
        "inputRaw": {
          "r": 5,
          "unit": 2,
          "n": 5,
          "arr": [
            15,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": "1",
        "explanation": "• Total required = 5 * 2 = 10\n• House 1: 15 >= 10. Only 1 house needed."
      },
      {
        "id": "tc-3",
        "input": "r = 10, unit = 2, n = 5, arr = [2, 3, 4, 5, 6]",
        "inputRaw": {
          "r": 10,
          "unit": 2,
          "n": 5,
          "arr": [
            2,
            3,
            4,
            5,
            6
          ]
        },
        "expectedOutput": "5",
        "explanation": "• Total required = 10 * 2 = 20\n• Sum of all 5 houses = 2 + 3 + 4 + 5 + 6 = 20 >= 20. Exactly 5 houses required."
      },
      {
        "id": "tc-4",
        "input": "r = 10, unit = 5, n = 4, arr = [2, 3, 4, 5]",
        "inputRaw": {
          "r": 10,
          "unit": 5,
          "n": 4,
          "arr": [
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": "0",
        "explanation": "• Required = 10 * 5 = 50\n• Total food available = 2 + 3 + 4 + 5 = 14 < 50.\n• Food is insufficient across all houses -> return 0."
      },
      {
        "id": "tc-5",
        "input": "r = 5, unit = 2, n = 0, arr = []",
        "inputRaw": {
          "r": 5,
          "unit": 2,
          "n": 0,
          "arr": []
        },
        "expectedOutput": "-1",
        "explanation": "• Array is empty / NULL -> return -1."
      },
      {
        "id": "tc-6",
        "input": "r = 4, unit = 3, n = 5, arr = [2, 4, 6, 8, 10]",
        "inputRaw": {
          "r": 4,
          "unit": 3,
          "n": 5,
          "arr": [
            2,
            4,
            6,
            8,
            10
          ]
        },
        "expectedOutput": "3",
        "explanation": "• Required = 4 * 3 = 12\n• House 1: 2 (sum = 2)\n• House 2: 4 (sum = 6)\n• House 3: 6 (sum = 12 >= 12).\nExactly 3 houses needed."
      }
    ],
    "solutions": {
      "python": "def minimum_houses(r, unit, n, arr):\n    if arr is None or n == 0 or len(arr) == 0:\n        return -1\n\n    required_food = r * unit\n    food = 0\n\n    for i in range(min(n, len(arr))):\n        food += arr[i]\n        if food >= required_food:\n            return i + 1\n\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int minimumHouses(int r, int unit, int n, int[] arr) {\n        if (arr == null || n == 0 || arr.length == 0) {\n            return -1;\n        }\n\n        int requiredFood = r * unit;\n        int food = 0;\n\n        for (int i = 0; i < Math.min(n, arr.length); i++) {\n            food += arr[i];\n            if (food >= requiredFood) {\n                return i + 1;\n            }\n        }\n\n        return 0;\n    }\n}",
      "cpp": "#include <vector>\n\nint minimumHouses(int r, int unit, int n, const std::vector<int>& arr) {\n    if (arr.empty() || n == 0) {\n        return -1;\n    }\n\n    int requiredFood = r * unit;\n    int food = 0;\n\n    for (int i = 0; i < n && i < (int)arr.size(); i++) {\n        food += arr[i];\n        if (food >= requiredFood) {\n            return i + 1;\n        }\n    }\n\n    return 0;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int MinimumHouses(int r, int unit, int n, int[] arr) {\n        if (arr == null || n == 0 || arr.Length == 0) {\n            return -1;\n        }\n\n        int requiredFood = r * unit;\n        int food = 0;\n\n        for (int i = 0; i < Math.Min(n, arr.Length); i++) {\n            food += arr[i];\n            if (food >= requiredFood) {\n                return i + 1;\n            }\n        }\n\n        return 0;\n    }\n}",
      "javascript": "function minimumHouses(r, unit, n, arr) {\n  if (!arr || n === 0 || arr.length === 0) {\n    return -1;\n  }\n\n  const requiredFood = r * unit;\n  let food = 0;\n\n  for (let i = 0; i < Math.min(n, arr.length); i++) {\n    food += arr[i];\n    if (food >= requiredFood) {\n      return i + 1;\n    }\n  }\n\n  return 0;\n}"
    }
  },
  {
    "id": "recent-dsa-012",
    "track": "dsa",
    "dateTag": "11th Oct 2025 • Shift 1",
    "examDate": "2025-10-11",
    "shift": "Shift 1",
    "title": "First–Last Character Frequency",
    "difficulty": "Easy",
    "category": "Strings / Hash Table & Order Preservation",
    "source": "Accenture Assessment 11th Oct 2025 (PYQ Series)",
    "isVerified": true,
    "description": "Given a string `s` containing multiple words separated by spaces, form a 2-character string for each word by combining its **first character** and **last character**.\n\nIf multiple spaces occur between words, they should be treated as a single separator.\n\nCount the frequency of every first-last character combination and return all combinations having the **highest frequency**, strictly preserving the order in which they first appeared in the string.\n\n**Example**:\n`s = \"apple angle ball bottle axe\"`\n- `apple`  → `ae`\n- `angle`  → `ae`\n- `ball`   → `bl`\n- `bottle` → `be`\n- `axe`    → `ae`\n\nFrequencies:\n- `ae` → 3 (highest)\n- `bl` → 1\n- `be` → 1\n\nOutput: `[\"ae\"]`\n\n⚠️ **Order Preservation on Ties**:\nIf multiple combinations share the highest frequency (for example, in `\"cat dog bus pen\"`, all combinations occur once), return all tied combinations in order of their first appearance:\n`[\"ct\", \"dg\", \"bs\", \"pn\"]`.",
    "rules": [
      "1. Split string by whitespace, ignoring redundant consecutive spaces.",
      "2. For each non-empty word, extract word[0] + word[word.length - 1].",
      "3. Maintain the order of unique combinations as they are first encountered.",
      "4. Count the occurrence frequency of each combination.",
      "5. Determine the maximum frequency across all combinations.",
      "6. Return an array of all combinations matching the maximum frequency, in order of first appearance."
    ],
    "constraints": [
      "1 <= s.length <= 10^5",
      "Words consist of English letters (lowercase/uppercase)",
      "Time Complexity: O(total characters in string)",
      "Space Complexity: O(U) where U <= 676 unique pairs"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "s = \"apple angle ball bottle axe\"",
        "inputRaw": "apple angle ball bottle axe",
        "expectedOutput": "[\"ae\"]",
        "explanation": "Combinations: ae (3), bl (1), be (1). Max frequency = 3 -> [\"ae\"]."
      },
      {
        "id": "tc-2",
        "input": "s = \"apple    angle   ball     axe\"",
        "inputRaw": "apple    angle   ball     axe",
        "expectedOutput": "[\"ae\"]",
        "explanation": "Multiple spaces treated as single separator. Frequencies: ae (3), bl (1) -> [\"ae\"]."
      },
      {
        "id": "tc-3",
        "input": "s = \"cat dog bus pen\"",
        "inputRaw": "cat dog bus pen",
        "expectedOutput": "[\"ct\", \"dg\", \"bs\", \"pn\"]",
        "explanation": "All combinations (ct, dg, bs, pn) have frequency 1. Order of first appearance preserved."
      },
      {
        "id": "tc-4",
        "input": "s = \"apple axe angle ball bat\"",
        "inputRaw": "apple axe angle ball bat",
        "expectedOutput": "[\"ae\"]",
        "explanation": "ae appears 3 times (apple, axe, angle). bl and bt appear 1 time each -> [\"ae\"]."
      },
      {
        "id": "tc-5",
        "input": "s = \"hello\"",
        "inputRaw": "hello",
        "expectedOutput": "[\"ho\"]",
        "explanation": "Single word: first = h, last = o -> [\"ho\"]."
      },
      {
        "id": "tc-6",
        "input": "s = \"apple apple apple ball ball\"",
        "inputRaw": "apple apple apple ball ball",
        "expectedOutput": "[\"ae\"]",
        "explanation": "ae appears 3 times, bl appears 2 times. Max = 3 -> [\"ae\"]."
      }
    ],
    "solutions": {
      "python": "def find_most_frequent(s):\n    words = s.split()\n    freq = {}\n    order = []\n\n    for w in words:\n        if not w:\n            continue\n        combo = w[0] + w[-1]\n        if combo not in freq:\n            order.append(combo)\n            freq[combo] = 0\n        freq[combo] += 1\n\n    if not freq:\n        return []\n\n    max_freq = max(freq.values())\n    return [c for c in order if freq[c] == max_freq]",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static List<String> findMostFrequent(String s) {\n        String[] words = s.trim().split(\"\\\\s+\");\n        Map<String, Integer> map = new LinkedHashMap<>();\n\n        for (String word : words) {\n            String combo = \"\" + word.charAt(0) + word.charAt(word.length() - 1);\n            map.put(combo, map.getOrDefault(combo, 0) + 1);\n        }\n\n        int max = 0;\n        for (int freq : map.values()) {\n            max = Math.max(max, freq);\n        }\n\n        List<String> result = new ArrayList<>();\n        for (Map.Entry<String, Integer> entry : map.entrySet()) {\n            if (entry.getValue() == max) {\n                result.add(entry.getKey());\n            }\n        }\n        return result;\n    }\n}",
      "cpp": "#include <sstream>\n#include <unordered_map>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstd::vector<std::string> findMostFrequent(const std::string& s) {\n    std::stringstream ss(s);\n    std::string word;\n\n    std::unordered_map<std::string, int> freq;\n    std::vector<std::string> order;\n\n    while (ss >> word) {\n        if (word.empty()) continue;\n        std::string combo;\n        combo += word.front();\n        combo += word.back();\n\n        if (freq.find(combo) == freq.end()) {\n            order.push_back(combo);\n            freq[combo] = 0;\n        }\n        freq[combo]++;\n    }\n\n    int maxFreq = 0;\n    for (const auto& p : freq) {\n        maxFreq = std::max(maxFreq, p.second);\n    }\n\n    std::vector<std::string> answer;\n    for (const auto& c : order) {\n        if (freq[c] == maxFreq) {\n            answer.push_back(c);\n        }\n    }\n    return answer;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static List<string> FindMostFrequent(string s) {\n        string[] words = s.Trim().Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        Dictionary<string, int> map = new Dictionary<string, int>();\n\n        foreach (string word in words) {\n            string combo = \"\" + word[0] + word[word.Length - 1];\n            if (map.ContainsKey(combo)) map[combo]++;\n            else map[combo] = 1;\n        }\n\n        int max = 0;\n        foreach (int freq in map.Values) {\n            if (freq > max) max = freq;\n        }\n\n        List<string> result = new List<string>();\n        foreach (var entry in map) {\n            if (entry.Value == max) result.Add(entry.Key);\n        }\n        return result;\n    }\n}",
      "javascript": "function findMostFrequent(s) {\n  const words = s.trim().split(/\\s+/);\n  const freq = new Map();\n  const order = [];\n\n  for (const w of words) {\n    if (!w) continue;\n    const combo = w[0] + w[w.length - 1];\n    if (!freq.has(combo)) {\n      order.push(combo);\n      freq.set(combo, 0);\n    }\n    freq.set(combo, freq.get(combo) + 1);\n  }\n\n  let maxFreq = 0;\n  for (const count of freq.values()) {\n    if (count > maxFreq) maxFreq = count;\n  }\n\n  return order.filter(combo => freq.get(combo) === maxFreq);\n}"
    }
  },
  {
    "id": "recent-dsa-013",
    "track": "dsa",
    "dateTag": "20th Oct 2025 • Shift 1",
    "examDate": "2025-10-20",
    "shift": "Shift 1",
    "title": "Uniform Rows and Columns",
    "difficulty": "Easy",
    "category": "Strings / 2D Matrix Mapping",
    "source": "Accenture Assessment 20th Oct 2025 (PYQ Series)",
    "isVerified": true,
    "description": "You are given a string `S` whose length is a perfect square.\n\nLet `n` be the square root of the length of `S` (`n = sqrt(S.length)`).\n\nConstruct an `n × n` grid by placing the characters of `S` in **row-major order**:\n- Fill the grid from left to right, then move down to the next row.\n- In row-major representation, element at row `i` and column `j` is given by `S[i * n + j]`.\n\nA row or column is called **uniform** if all its elements contain the exact same character.\n\nReturn the **total number of uniform rows and uniform columns**.\n\n**Example**:\n`S = \"aaabbbccc\"`\nLength = 9, `n = sqrt(9) = 3`.\nGrid:\n```\na a a   -> Row 0: Uniform ('a') ✅\nb b b   -> Row 1: Uniform ('b') ✅\nc c c   -> Row 2: Uniform ('c') ✅\n```\nColumns:\n- Col 0: `a, b, c` ❌\n- Col 1: `a, b, c` ❌\n- Col 2: `a, b, c` ❌\n\nTotal = 3 rows + 0 columns = 3.",
    "rules": [
      "1. Calculate n = Math.sqrt(S.length).",
      "2. Check each row i from 0 to n-1: if every character in row i matches S[i * n], increment count.",
      "3. Check each column j from 0 to n-1: if every character in column j matches S[j], increment count.",
      "4. Return total uniform rows + uniform columns count."
    ],
    "constraints": [
      "1 <= S.length <= 10^5",
      "S.length is guaranteed to be a perfect square",
      "S consists of lowercase/uppercase English letters",
      "Time Complexity: O(N) where N = S.length",
      "Space Complexity: O(1) in-place 1D-to-2D index formula"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "S = \"aaabbbccc\"",
        "inputRaw": "aaabbbccc",
        "expectedOutput": "3",
        "explanation": "3 uniform rows (aaa, bbb, ccc) + 0 uniform columns = 3."
      },
      {
        "id": "tc-2",
        "input": "S = \"aaaaaaaaa\"",
        "inputRaw": "aaaaaaaaa",
        "expectedOutput": "6",
        "explanation": "3 uniform rows + 3 uniform columns = 6."
      },
      {
        "id": "tc-3",
        "input": "S = \"abcdefghi\"",
        "inputRaw": "abcdefghi",
        "expectedOutput": "0",
        "explanation": "No rows or columns have all identical characters -> 0."
      },
      {
        "id": "tc-4",
        "input": "S = \"abcabcabc\"",
        "inputRaw": "abcabcabc",
        "expectedOutput": "3",
        "explanation": "0 uniform rows + 3 uniform columns (aaa, bbb, ccc) = 3."
      },
      {
        "id": "tc-5",
        "input": "S = \"aababbaba\"",
        "inputRaw": "aababbaba",
        "expectedOutput": "1",
        "explanation": "0 uniform rows + 1 uniform column (col 0: aaa) = 1."
      },
      {
        "id": "tc-6",
        "input": "S = \"a\"",
        "inputRaw": "a",
        "expectedOutput": "2",
        "explanation": "1x1 grid: row 0 is uniform (1) and col 0 is uniform (1) -> 2."
      }
    ],
    "solutions": {
      "python": "import math\n\ndef count_uniform(s):\n    n = int(math.isqrt(len(s)))\n    count = 0\n\n    # Check rows\n    for i in range(n):\n        first = s[i * n]\n        if all(s[i * n + j] == first for j in range(1, n)):\n            count += 1\n\n    # Check columns\n    for j in range(n):\n        first = s[j]\n        if all(s[i * n + j] == first for i in range(1, n)):\n            count += 1\n\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int countUniform(String s) {\n        int n = (int) Math.sqrt(s.length());\n        int count = 0;\n\n        // Check rows\n        for (int i = 0; i < n; i++) {\n            boolean uniform = true;\n            char first = s.charAt(i * n);\n            for (int j = 1; j < n; j++) {\n                if (s.charAt(i * n + j) != first) {\n                    uniform = false;\n                    break;\n                }\n            }\n            if (uniform) count++;\n        }\n\n        // Check columns\n        for (int j = 0; j < n; j++) {\n            boolean uniform = true;\n            char first = s.charAt(j);\n            for (int i = 1; i < n; i++) {\n                if (s.charAt(i * n + j) != first) {\n                    uniform = false;\n                    break;\n                }\n            }\n            if (uniform) count++;\n        }\n\n        return count;\n    }\n}",
      "cpp": "#include <string>\n#include <cmath>\n\nint countUniform(const std::string& s) {\n    int n = std::sqrt(s.length());\n    int count = 0;\n\n    // Check rows\n    for (int i = 0; i < n; i++) {\n        bool uniform = true;\n        char first = s[i * n];\n        for (int j = 1; j < n; j++) {\n            if (s[i * n + j] != first) {\n                uniform = false;\n                break;\n            }\n        }\n        if (uniform) count++;\n    }\n\n    // Check columns\n    for (int j = 0; j < n; j++) {\n        bool uniform = true;\n        char first = s[j];\n        for (int i = 1; i < n; i++) {\n            if (s[i * n + j] != first) {\n                uniform = false;\n                break;\n            }\n        }\n        if (uniform) count++;\n    }\n\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountUniform(string s) {\n        int n = (int)Math.Sqrt(s.Length);\n        int count = 0;\n\n        // Check rows\n        for (int i = 0; i < n; i++) {\n            bool uniform = true;\n            char first = s[i * n];\n            for (int j = 1; j < n; j++) {\n                if (s[i * n + j] != first) {\n                    uniform = false;\n                    break;\n                }\n            }\n            if (uniform) count++;\n        }\n\n        // Check columns\n        for (int j = 0; j < n; j++) {\n            bool uniform = true;\n            char first = s[j];\n            for (int i = 1; i < n; i++) {\n                if (s[i * n + j] != first) {\n                    uniform = false;\n                    break;\n                }\n            }\n            if (uniform) count++;\n        }\n\n        return count;\n    }\n}",
      "javascript": "function countUniform(s) {\n  const n = Math.floor(Math.sqrt(s.length));\n  let count = 0;\n\n  // Check rows\n  for (let i = 0; i < n; i++) {\n    let uniform = true;\n    const first = s[i * n];\n    for (let j = 1; j < n; j++) {\n      if (s[i * n + j] !== first) {\n        uniform = false;\n        break;\n      }\n    }\n    if (uniform) count++;\n  }\n\n  // Check columns\n  for (let j = 0; j < n; j++) {\n    let uniform = true;\n    const first = s[j];\n    for (let i = 1; i < n; i++) {\n      if (s[i * n + j] !== first) {\n        uniform = false;\n        break;\n      }\n    }\n    if (uniform) count++;\n  }\n\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-014",
    "track": "dsa",
    "dateTag": "15th Sept 2025 • Shift 1",
    "examDate": "2025-09-15",
    "shift": "Shift 1",
    "title": "Number of Carries",
    "difficulty": "Medium",
    "category": "Mathematical Problems / Number Manipulation & Digit Operations",
    "source": "Accenture Assessment 15th Sept 2025 (PYQ Series)",
    "isVerified": true,
    "description": "Given two non-negative integers `num1` and `num2`, add them digit by digit from right to left (least significant to most significant).\n\nA **carry** is generated whenever the sum of two corresponding digits, along with any carry from the previous position, is **greater than 9**.\n\nReturn the **total number of carries** generated while adding `num1` and `num2`.\n\n---\n\n### 📝 Function Signature & Specifications:\n```cpp\nint NumberOfCarries(int num1, int num2)\n```\n- **Assumptions**: `num1 >= 0`, `num2 >= 0`\n- **Input Parameters**: Non-negative integers `num1` and `num2`\n- **Return Value**: Integer count representing total carries produced\n\n---\n\n### 📌 Step-by-Step Addition Walkthrough:\n**Given Input**: `num1 = 451`, `num2 = 349`\n\nPerform addition from right to left (least significant to most significant digit):\n```\nCarry In:       1   1       ← (Carries brought forward)\nnum1:           4   5   1\nnum2:       +   3   4   9\n            -------------\nSum:            8   0   0\n            -------------\nCarry Out:      0   1   1   ← (Carries generated)\n               ❌   ✅   ✅\n```\n\n1. **Step 1 — Ones Place (10⁰)**:\n   - Digits: `1 + 9` + incoming `carry(0)` = `10`\n   - Since `10 > 9`, a carry is generated: **Carry = 1** ✅ *(Carry Count = 1)*\n\n2. **Step 2 — Tens Place (10¹)**:\n   - Digits: `5 + 4` + incoming `carry(1)` = `10`\n   - Since `10 > 9`, another carry is generated: **Carry = 1** ✅ *(Carry Count = 2)*\n\n3. **Step 3 — Hundreds Place (10²)**:\n   - Digits: `4 + 3` + incoming `carry(1)` = `8`\n   - Since `8 <= 9`, no carry is generated: **Carry = 0** ❌ *(Carry Count = 2)*\n\nReturn total carries: **2**\n\n---\n\n### 🔍 Dry Run Matrix (num1 = 451, num2 = 349):\n| Place Value | num1 digit | num2 digit | Carry In | Sum Calculation | Carry Out | Total Carries |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|\n| **Ones (10⁰)** | 1 | 9 | 0 | `1 + 9 + 0 = 10` | **1** ✅ | 1 |\n| **Tens (10¹)** | 5 | 4 | 1 | `5 + 4 + 1 = 10` | **1** ✅ | 2 |\n| **Hundreds (10²)** | 4 | 3 | 1 | `4 + 3 + 1 = 8` | **0** ❌ | 2 |\n\n---\n\n### ⚠️ Critical Rule: Incoming Carry Must Be Included\nAlways compute:\n`sum = digit1 + digit2 + carry`\nForgetting to add incoming `carry` breaks propagation cases such as `95 + 17 = 112`, where the tens place receives a carry from `5 + 7 = 12` to produce `9 + 1 + 1 = 11`.\n\n---\n\n### 🧠 Why while (num1 > 0 || num2 > 0)?\nThe two operands often differ in length (e.g. `num1 = 999`, `num2 = 1`).\nUsing `||` ensures that all remaining digits of the longer number are processed along with any propagating carries.\n\n---\n\n### ⚡ Complexity Analysis:\n- **Time Complexity**: `O(D)`, where `D = max(digits(num1), digits(num2))`. Each digit position is visited once.\n- **Space Complexity**: `O(1)`, only primitive scalar variables (`carry`, `count`, `digit1`, `digit2`, `sum`) are used.",
    "rules": [
      "1. Initialize variables carry = 0 and count = 0 before entering the loop.",
      "2. In each iteration, extract digit1 = num1 % 10 and digit2 = num2 % 10.",
      "3. Calculate sum = digit1 + digit2 + carry.",
      "4. If sum > 9: set carry = 1 and increment count by 1. Otherwise: set carry = 0.",
      "5. Shift digits by integer division: num1 /= 10 and num2 /= 10.",
      "6. Continue the loop while (num1 > 0 || num2 > 0) to process operands of differing lengths.",
      "7. Return the final accumulated carry count."
    ],
    "constraints": [
      "0 <= num1, num2 <= 10^9",
      "Time Complexity: O(D) where D is the number of digits in max(num1, num2)",
      "Space Complexity: O(1) auxiliary memory"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "num1 = 451, num2 = 349",
        "inputRaw": {
          "num1": 451,
          "num2": 349
        },
        "expectedOutput": "2",
        "explanation": "1 + 9 = 10 (Carry 1, count = 1) -> 5 + 4 + 1 = 10 (Carry 1, count = 2) -> 4 + 3 + 1 = 8 (No carry) -> Total carries = 2."
      },
      {
        "id": "tc-2",
        "input": "num1 = 123, num2 = 456",
        "inputRaw": {
          "num1": 123,
          "num2": 456
        },
        "expectedOutput": "0",
        "explanation": "3 + 6 = 9 (No carry) -> 2 + 5 = 7 (No carry) -> 1 + 4 = 5 (No carry) -> Total carries = 0."
      },
      {
        "id": "tc-3",
        "input": "num1 = 999, num2 = 111",
        "inputRaw": {
          "num1": 999,
          "num2": 111
        },
        "expectedOutput": "3",
        "explanation": "9 + 1 = 10 (carry 1), 9 + 1 + 1 = 11 (carry 1), 9 + 1 + 1 = 11 (carry 1) -> Total carries = 3."
      },
      {
        "id": "tc-4",
        "input": "num1 = 95, num2 = 17",
        "inputRaw": {
          "num1": 95,
          "num2": 17
        },
        "expectedOutput": "2",
        "explanation": "5 + 7 = 12 (carry 1), 9 + 1 + 1 = 11 (carry 1) -> Total carries = 2."
      },
      {
        "id": "tc-5",
        "input": "num1 = 999, num2 = 1",
        "inputRaw": {
          "num1": 999,
          "num2": 1
        },
        "expectedOutput": "3",
        "explanation": "9 + 1 = 10 (carry 1), 9 + 0 + 1 = 10 (carry 1), 9 + 0 + 1 = 10 (carry 1) -> Total carries = 3."
      },
      {
        "id": "tc-6",
        "input": "num1 = 123, num2 = 0",
        "inputRaw": {
          "num1": 123,
          "num2": 0
        },
        "expectedOutput": "0",
        "explanation": "123 + 000 -> No digit sum exceeds 9 -> Total carries = 0."
      },
      {
        "id": "tc-7",
        "input": "num1 = 0, num2 = 0",
        "inputRaw": {
          "num1": 0,
          "num2": 0
        },
        "expectedOutput": "0",
        "explanation": "Both inputs are 0 -> No addition operations exceed 9 -> Total carries = 0."
      }
    ],
    "solutions": {
      "python": "def number_of_carries(num1, num2):\n    carry = 0\n    count = 0\n\n    while num1 > 0 or num2 > 0:\n        digit1 = num1 % 10\n        digit2 = num2 % 10\n\n        total_sum = digit1 + digit2 + carry\n\n        if total_sum > 9:\n            carry = 1\n            count += 1\n        else:\n            carry = 0\n\n        num1 //= 10\n        num2 //= 10\n\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int numberOfCarries(int num1, int num2) {\n        int carry = 0;\n        int count = 0;\n\n        while (num1 > 0 || num2 > 0) {\n            int digit1 = num1 % 10;\n            int digit2 = num2 % 10;\n\n            int sum = digit1 + digit2 + carry;\n\n            if (sum > 9) {\n                carry = 1;\n                count++;\n            } else {\n                carry = 0;\n            }\n\n            num1 /= 10;\n            num2 /= 10;\n        }\n\n        return count;\n    }\n}",
      "cpp": "int numberOfCarries(int num1, int num2) {\n    int carry = 0;\n    int count = 0;\n\n    while (num1 > 0 || num2 > 0) {\n        int digit1 = num1 % 10;\n        int digit2 = num2 % 10;\n\n        int sum = digit1 + digit2 + carry;\n\n        if (sum > 9) {\n            carry = 1;\n            count++;\n        } else {\n            carry = 0;\n        }\n\n        num1 /= 10;\n        num2 /= 10;\n    }\n\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int NumberOfCarries(int num1, int num2) {\n        int carry = 0;\n        int count = 0;\n\n        while (num1 > 0 || num2 > 0) {\n            int digit1 = num1 % 10;\n            int digit2 = num2 % 10;\n\n            int sum = digit1 + digit2 + carry;\n\n            if (sum > 9) {\n                carry = 1;\n                count++;\n            } else {\n                carry = 0;\n            }\n\n            num1 /= 10;\n            num2 /= 10;\n        }\n\n        return count;\n    }\n}",
      "javascript": "function numberOfCarries(num1, num2) {\n  let carry = 0;\n  let count = 0;\n\n  while (num1 > 0 || num2 > 0) {\n    const digit1 = num1 % 10;\n    const digit2 = num2 % 10;\n\n    const sum = digit1 + digit2 + carry;\n\n    if (sum > 9) {\n      carry = 1;\n      count++;\n    } else {\n      carry = 0;\n    }\n\n    num1 = Math.floor(num1 / 10);\n    num2 = Math.floor(num2 / 10);\n  }\n\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-015",
    "track": "dsa",
    "dateTag": "18th Sept 2026 • Shift 1",
    "examDate": "2026-09-18",
    "shift": "Shift 1",
    "title": "Count Consecutive Identical Blocks",
    "difficulty": "Easy",
    "category": "Array / Consecutive Grouping & Two Pointers",
    "source": "Accenture Assessment 18th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given an integer array `A` of length `N`, where each element is between 2 and 10 inclusive.\n\nYou have to count how many consecutive blocks of identical elements exist such that the **length of the block is equal to the value of the element**.\n\nReturn an integer representing the count of such valid blocks.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint countBlocks(int N, vector<int>& A);\n```\n- **Input Specification**:\n  - `input1 (N)`: An integer representing the size of the array.\n  - `input2 (A)`: An integer array.\n- **Output Specification**:\n  - Return an integer representing the number of consecutive blocks satisfying the given condition.\n\n---\n\n### 📌 Example Analysis:\n**Input**: `N = 10, A = [2, 3, 3, 2, 2, 6, 4, 4, 4, 4]`\n\nDivide the array into contiguous blocks of identical elements:\n1. `[2]` → Length = 1, Value = 2 → `1 == 2` ❌ (Invalid)\n2. `[3, 3]` → Length = 2, Value = 3 → `2 == 3` ❌ (Invalid)\n3. `[2, 2]` → Length = 2, Value = 2 → `2 == 2` ✅ (Valid block count = 1)\n4. `[6]` → Length = 1, Value = 6 → `1 == 6` ❌ (Invalid)\n5. `[4, 4, 4, 4]` → Length = 4, Value = 4 → `4 == 4` ✅ (Valid block count = 2)\n\n**Output**: `2`\n\n*(Note on Exam Paper Inconsistency: The original exam paper screenshot states input1: 11, but only 10 array elements are visible, which produce an output of 2.)*\n\n---\n\n### 💡 Core Logic & Algorithm:\nUse a two-pointer consecutive grouping traversal:\n1. Initialize `count = 0` and pointer `i = 0`.\n2. While `i < N`:\n   - Let `value = A[i]`.\n   - Advance `j = i` while `j < N && A[j] == value`.\n   - Calculate `length = j - i`.\n   - If `length == value`, increment `count`.\n   - Update `i = j` to advance to the next block.\n3. Return `count`.\n\n---\n\n### ⚡ Complexity:\n- **Time Complexity**: `O(N)` — each element is traversed exactly once by pointer `j`.\n- **Space Complexity**: `O(1)` — uses constant auxiliary variables.",
    "rules": [
      "1. Traverse the array in blocks of consecutive identical elements.",
      "2. For each block, determine its length = (end_index - start_index).",
      "3. Compare if block_length == element_value.",
      "4. If equal, increment the answer count.",
      "5. Advance to the start of the next distinct block.",
      "6. Return the total count of valid blocks."
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "2 <= A[i] <= 10 for all 0 <= i < N",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 4, A = [2, 2, 3, 3]",
        "inputRaw": {
          "N": 4,
          "A": [2, 2, 3, 3]
        },
        "expectedOutput": "1",
        "explanation": "Blocks: [2, 2] (len 2 == val 2 ✅) and [3, 3] (len 2 != val 3 ❌). Total = 1."
      },
      {
        "id": "tc-2",
        "input": "N = 4, A = [4, 4, 4, 4]",
        "inputRaw": {
          "N": 4,
          "A": [4, 4, 4, 4]
        },
        "expectedOutput": "1",
        "explanation": "Block: [4, 4, 4, 4] (len 4 == val 4 ✅). Total = 1."
      },
      {
        "id": "tc-3",
        "input": "N = 5, A = [2, 2, 2, 3, 3]",
        "inputRaw": {
          "N": 5,
          "A": [2, 2, 2, 3, 3]
        },
        "expectedOutput": "0",
        "explanation": "Blocks: [2, 2, 2] (len 3 != val 2 ❌) and [3, 3] (len 2 != val 3 ❌). Total = 0."
      },
      {
        "id": "tc-4",
        "input": "N = 7, A = [2, 2, 3, 3, 3, 4, 4]",
        "inputRaw": {
          "N": 7,
          "A": [2, 2, 3, 3, 3, 4, 4]
        },
        "expectedOutput": "2",
        "explanation": "Blocks: [2, 2] (len 2 == val 2 ✅), [3, 3, 3] (len 3 == val 3 ✅), [4, 4] (len 2 != val 4 ❌). Total = 2."
      },
      {
        "id": "tc-5",
        "input": "N = 6, A = [2, 2, 4, 4, 4, 4]",
        "inputRaw": {
          "N": 6,
          "A": [2, 2, 4, 4, 4, 4]
        },
        "expectedOutput": "2",
        "explanation": "Blocks: [2, 2] (len 2 == val 2 ✅) and [4, 4, 4, 4] (len 4 == val 4 ✅). Total = 2."
      },
      {
        "id": "tc-6",
        "input": "N = 10, A = [2, 3, 3, 2, 2, 6, 4, 4, 4, 4]",
        "inputRaw": {
          "N": 10,
          "A": [2, 3, 3, 2, 2, 6, 4, 4, 4, 4]
        },
        "expectedOutput": "2",
        "explanation": "Exam example: [2] (❌), [3, 3] (❌), [2, 2] (✅), [6] (❌), [4, 4, 4, 4] (✅). Total = 2."
      }
    ],
    "starterCode": {
      "python": "def countBlocks(N, A):\n    # TODO: Count consecutive identical blocks whose length equals their element value\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int countBlocks(int N, int[] A) {\n        // TODO: Count consecutive identical blocks whose length equals their element value\n        return 0;\n    }\n}",
      "cpp": "#include <vector>\n\nint countBlocks(int N, std::vector<int>& A) {\n    // TODO: Count consecutive identical blocks whose length equals their element value\n    return 0;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int CountBlocks(int N, List<int> A) {\n        // TODO: Count consecutive identical blocks whose length equals their element value\n        return 0;\n    }\n}",
      "javascript": "function countBlocks(N, A) {\n  // TODO: Count consecutive identical blocks whose length equals their element value\n  return 0;\n}"
    },
    "solutions": {
      "python": "def countBlocks(N, A):\n    count = 0\n    i = 0\n\n    while i < N:\n        value = A[i]\n        j = i\n\n        # Find the end of the current identical block\n        while j < N and A[j] == value:\n            j += 1\n\n        length = j - i\n\n        # Check whether block length equals element value\n        if length == value:\n            count += 1\n\n        i = j\n\n    return count",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int countBlocks(int N, int[] A) {\n        int count = 0;\n        int i = 0;\n\n        while (i < N) {\n            int value = A[i];\n            int j = i;\n\n            // Find end of the identical block\n            while (j < N && A[j] == value) {\n                j++;\n            }\n\n            int length = j - i;\n            if (length == value) {\n                count++;\n            }\n\n            i = j;\n        }\n\n        return count;\n    }\n}",
      "cpp": "#include <vector>\n\nint countBlocks(int N, std::vector<int>& A) {\n    int count = 0;\n    int i = 0;\n\n    while (i < N) {\n        int value = A[i];\n        int j = i;\n\n        // Find end of identical block\n        while (j < N && A[j] == value) {\n            j++;\n        }\n\n        int length = j - i;\n        if (length == value) {\n            count++;\n        }\n\n        i = j;\n    }\n\n    return count;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int CountBlocks(int N, List<int> A) {\n        int count = 0;\n        int i = 0;\n\n        while (i < N) {\n            int value = A[i];\n            int j = i;\n\n            while (j < N && A[j] == value) {\n                j++;\n            }\n\n            int length = j - i;\n            if (length == value) {\n                count++;\n            }\n\n            i = j;\n        }\n\n        return count;\n    }\n}",
      "javascript": "function countBlocks(N, A) {\n  let count = 0;\n  let i = 0;\n\n  while (i < N) {\n    const value = A[i];\n    let j = i;\n\n    while (j < N && A[j] === value) {\n      j++;\n    }\n\n    const length = j - i;\n    if (length === value) {\n      count++;\n    }\n\n    i = j;\n  }\n\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-016",
    "track": "dsa",
    "dateTag": "18th Sept 2026 • Shift 2",
    "examDate": "2026-09-18",
    "shift": "Shift 2",
    "title": "Total Energy of Sensed Ranges",
    "difficulty": "Easy",
    "category": "Array / Weighted Array Sum & Traversal",
    "source": "Accenture Assessment 18th Sept Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Alex wants to determine the total energy she senses throughout her journey.\n\nThe task is to find and return an integer representing the sum of all energies within the sensed ranges for every cave.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint totalEnergy(N, vector<int>& A);\n```\n- **Input Specification**:\n  - `input1 (N)`: An integer representing the number of caves.\n  - `input2 (A)`: An integer array representing the energy of the caves.\n- **Output Specification**:\n  - Return an integer representing the total sum of energies.\n\n---\n\n### 📌 Given Example:\n**Input**: `N = 3, A = [2, 3, 1]`\n\n**Calculation**:\nAccording to the official exam calculation specification, the contribution of each cave is weighted by its 1-based index position `(i + 1)`:\n- `i = 0`: `A[0] * 1 = 2 * 1 = 2`\n- `i = 1`: `A[1] * 2 = 3 * 2 = 6`\n- `i = 2`: `A[2] * 3 = 1 * 3 = 3`\n\n**Total Energy** = `2 + 6 + 3 = 11`\n\n**Output**: `11`\n\n---\n\n### 💡 Mathematical Formula:\n$$\\text{Total Energy} = \\sum_{i=0}^{N-1} A[i] \\times (i + 1)$$\n\n---\n\n### ⚡ Complexity:\n- **Time Complexity**: `O(N)` — single linear pass through the array.\n- **Space Complexity**: `O(1)` — constant accumulator variable.",
    "rules": [
      "1. Initialize total = 0.",
      "2. Iterate i from 0 to N - 1.",
      "3. For each element at index i, multiply A[i] by (i + 1).",
      "4. Accumulate the weighted product into total.",
      "5. Return total after processing all caves."
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "0 <= A[i] <= 10^4",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 3, A = [2, 3, 1]",
        "inputRaw": {
          "N": 3,
          "A": [2, 3, 1]
        },
        "expectedOutput": "11",
        "explanation": "2*1 + 3*2 + 1*3 = 2 + 6 + 3 = 11."
      },
      {
        "id": "tc-2",
        "input": "N = 1, A = [5]",
        "inputRaw": {
          "N": 1,
          "A": [5]
        },
        "expectedOutput": "5",
        "explanation": "5*1 = 5."
      },
      {
        "id": "tc-3",
        "input": "N = 4, A = [1, 2, 3, 4]",
        "inputRaw": {
          "N": 4,
          "A": [1, 2, 3, 4]
        },
        "expectedOutput": "30",
        "explanation": "1*1 + 2*2 + 3*3 + 4*4 = 1 + 4 + 9 + 16 = 30."
      },
      {
        "id": "tc-4",
        "input": "N = 3, A = [5, 5, 5]",
        "inputRaw": {
          "N": 3,
          "A": [5, 5, 5]
        },
        "expectedOutput": "30",
        "explanation": "5*1 + 5*2 + 5*3 = 5 + 10 + 15 = 30."
      },
      {
        "id": "tc-5",
        "input": "N = 5, A = [2, 1, 3, 2, 4]",
        "inputRaw": {
          "N": 5,
          "A": [2, 1, 3, 2, 4]
        },
        "expectedOutput": "41",
        "explanation": "2*1 + 1*2 + 3*3 + 2*4 + 4*5 = 2 + 2 + 9 + 8 + 20 = 41."
      }
    ],
    "starterCode": {
      "python": "def totalEnergy(N, A):\n    # TODO: Calculate sum of all energies weighted by 1-based index (i + 1)\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int totalEnergy(int N, int[] A) {\n        // TODO: Calculate sum of all energies weighted by 1-based index (i + 1)\n        return 0;\n    }\n}",
      "cpp": "#include <vector>\n\nint totalEnergy(int N, std::vector<int>& A) {\n    // TODO: Calculate sum of all energies weighted by 1-based index (i + 1)\n    return 0;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int TotalEnergy(int N, List<int> A) {\n        // TODO: Calculate sum of all energies weighted by 1-based index (i + 1)\n        return 0;\n    }\n}",
      "javascript": "function totalEnergy(N, A) {\n  // TODO: Calculate sum of all energies weighted by 1-based index (i + 1)\n  return 0;\n}"
    },
    "solutions": {
      "python": "def totalEnergy(N, A):\n    total = 0\n    for i in range(N):\n        total += A[i] * (i + 1)\n    return total",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int totalEnergy(int N, int[] A) {\n        int total = 0;\n        for (int i = 0; i < N; i++) {\n            total += A[i] * (i + 1);\n        }\n        return total;\n    }\n}",
      "cpp": "#include <vector>\n\nint totalEnergy(int N, std::vector<int>& A) {\n    int total = 0;\n    for (int i = 0; i < N; i++) {\n        total += A[i] * (i + 1);\n    }\n    return total;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int TotalEnergy(int N, List<int> A) {\n        int total = 0;\n        for (int i = 0; i < N; i++) {\n            total += A[i] * (i + 1);\n        }\n        return total;\n    }\n}",
      "javascript": "function totalEnergy(N, A) {\n  let total = 0;\n  for (let i = 0; i < N; i++) {\n    total += A[i] * (i + 1);\n  }\n  return total;\n}"
    }
  },
  {
    "id": "recent-fe-001",
    "track": "frontend",
    "dateTag": "10th Sept Shift 1",
    "examDate": "2024-09-10",
    "shift": "Shift 1",
    "title": "Random Quote Generator",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Math.random() & Event Handling",
    "source": "Accenture Assessment 10th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Create a **Random Quote Generator** using HTML, CSS, and JavaScript that picks a quote randomly using `Math.random()` on button click.",
    "objectives": [
      "HTML: Container with paragraph #quoteDisplay (class .quote-text) and button #quoteBtn that triggers quote generation.",
      "CSS: Styled quote box with border-left accent #2563eb, italic typography, and rounded button.",
      "JavaScript: Quotes array with at least 4 quotes. On click, calculate random index Math.floor(Math.random() * quotes.length) and update #quoteDisplay.innerText with quotation marks."
    ],
    "starterHTML": "<div class=\"quote-container\">\n    <!-- TODO: Add a paragraph with id=\"quoteDisplay\" and class=\"quote-text\" -->\n    <p id=\"quoteDisplay\" class=\"quote-text\">Click the button to show a quote!</p>\n    \n    <!-- TODO: Add a button with id=\"quoteBtn\" that triggers generateQuote() on click -->\n    <button id=\"quoteBtn\" onclick=\"generateQuote()\">Show Random Quote</button>\n</div>",
    "starterCSS": "/* CSS Styling */\n.quote-container {\n    background-color: #f8fafc;\n    border-left: 4px solid #2563eb;\n    padding: 24px;\n    border-radius: 8px;\n    text-align: center;\n}\n\n.quote-text {\n    font-size: 1.2rem;\n    font-style: italic;\n    color: #334155;\n    margin-bottom: 15px;\n}\n\nbutton {\n    padding: 10px 20px;\n    background-color: #2563eb;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 600;\n}",
    "starterJS": "// Available quotes pool\nconst quotes = [\n    \"Believe in yourself.\",\n    \"Success comes with consistency.\",\n    \"Never stop learning.\",\n    \"Hard work beats talent.\"\n];\n\nfunction generateQuote() {\n    // TODO: 1. Generate a random integer index from 0 to quotes.length - 1\n    // const randomIndex = Math.floor(Math.random() * quotes.length);\n    \n    // TODO: 2. Update the text content of #quoteDisplay with the selected quote wrapped in quotation marks\n    \n}",
    "solutionHTML": "<div class=\"quote-container\">\n    <p id=\"quoteDisplay\" class=\"quote-text\">Click the button to show a quote!</p>\n    <button id=\"quoteBtn\" onclick=\"generateQuote()\">Show Random Quote</button>\n</div>",
    "solutionCSS": "/* CSS Styling */\n.quote-container {\n    background-color: #f8fafc;\n    border-left: 4px solid #2563eb;\n    padding: 24px;\n    border-radius: 8px;\n    text-align: center;\n}\n\n.quote-text {\n    font-size: 1.2rem;\n    font-style: italic;\n    color: #334155;\n    margin-bottom: 15px;\n}\n\nbutton {\n    padding: 10px 20px;\n    background-color: #2563eb;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 600;\n}",
    "solutionJS": "const quotes = [\n    \"Believe in yourself.\",\n    \"Success comes with consistency.\",\n    \"Never stop learning.\",\n    \"Hard work beats talent.\"\n];\n\nfunction generateQuote() {\n    // 1. Calculate random integer index\n    const randomIndex = Math.floor(Math.random() * quotes.length);\n    \n    // 2. Update the DOM element\n    const quoteEl = document.getElementById(\"quoteDisplay\");\n    if (quoteEl) {\n        quoteEl.innerText = `\"${quotes[randomIndex]}\"`;\n    }\n}",
    "solutionExplanation": "### Solution Breakdown: Random Quote Generator (Accenture 10th Sept Shift 1)\n\n1. **HTML Architecture**:\n   - Create a wrapping container `<div class=\"quote-container\">`.\n   - Add `<p id=\"quoteDisplay\" class=\"quote-text\">` to display the active quote.\n   - Add `<button id=\"quoteBtn\" onclick=\"generateQuote()\">` to trigger random quote selection.\n\n2. **CSS Styling**:\n   - Style `.quote-container` with a light slate background and a vivid left border accent: `border-left: 4px solid #2563eb`.\n   - Set `.quote-text` to `font-style: italic` and deep slate color `#334155` with generous spacing.\n   - Style the button with accent blue background, white text, and rounded border.\n\n3. **JavaScript DOM & Math Logic**:\n   - `Math.random()` yields a floating point number in the range `[0, 1)`.\n   - Multiplying by `quotes.length` scales this to `[0, 4)`.\n   - `Math.floor()` rounds down to the nearest integer (`0, 1, 2, 3`), giving a valid array index.\n   - Update `#quoteDisplay.innerText` with template literals: `\"${quotes[randomIndex]}\"`.",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-002",
    "track": "frontend",
    "dateTag": "18th Sept Shift 2",
    "examDate": "2026-09-18",
    "shift": "Shift 2",
    "title": "BMI Calculator",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Form Inputs, CSS & Math Calculation",
    "source": "Accenture Assessment 18th Sept Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Build a **BMI calculator** that allows users to enter weight in kilograms and height in centimeters and calculates their Body Mass Index.\n\n### Objectives\n- Add the placeholder `\"Weight in kg\"` to the weight input (`#weight`).\n- Add the placeholder `\"Height in cm\"` to the height input (`#height`).\n- Set the Calculate button's background color to `#4CAF50` in CSS.\n- Calculate BMI when the Calculate button (`#calculate`) is clicked.\n- Display the BMI rounded to two decimal places in `#result`.\n\n### Constraints\n- Do not change existing id or class attributes.\n- Use the existing HTML structure.\n- Make only the required changes.\n- BMI should be calculated only after clicking Calculate.\n\n### BMI Formula\n- `height in meters = height in cm / 100`\n- `BMI = weight / (height in meters * height in meters)`\n\n### Expected Result\nFor Weight: **70**, Height: **175** → Result: **22.86**",
    "objectives": [
      "Add the placeholder \"Weight in kg\" to the weight input.",
      "Add the placeholder \"Height in cm\" to the height input.",
      "Set the Calculate button's background color to #4CAF50.",
      "Calculate BMI when the Calculate button is clicked.",
      "Display the BMI rounded to two decimal places in #result."
    ],
    "constraints": [
      "Do not change existing id or class attributes.",
      "Use the existing HTML structure.",
      "Make only the required changes.",
      "BMI should be calculated only after clicking Calculate."
    ],
    "starterHTML": "<div class=\"container\">\n    <h2>BMI Calculator</h2>\n\n    <input type=\"number\" id=\"weight\" \n           <!-- TODO 1: Add required placeholder --> >\n\n    <input type=\"number\" id=\"height\"\n           <!-- TODO 2: Add required placeholder --> >\n\n    <button id=\"calculate\">Calculate</button>\n\n    <p id=\"result\"></p>\n</div>",
    "starterCSS": "body {\n    font-family: Arial, sans-serif;\n}\n\n.container {\n    width: 320px;\n    margin: 40px auto;\n    text-align: center;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 28px 24px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\nh2 {\n    margin-top: 0;\n    color: #1e293b;\n    font-size: 1.4rem;\n}\n\ninput {\n    display: block;\n    width: 100%;\n    padding: 10px 14px;\n    margin: 12px 0;\n    box-sizing: border-box;\n    border: 1.5px solid #cbd5e1;\n    border-radius: 8px;\n    font-size: 14px;\n    transition: border-color 0.2s, box-shadow 0.2s;\n}\n\ninput:focus {\n    outline: none;\n    border-color: #4CAF50;\n    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);\n}\n\nbutton {\n    padding: 10px 24px;\n    cursor: pointer;\n    border: none;\n    border-radius: 8px;\n    font-weight: 600;\n    color: white;\n    transition: all 0.2s;\n\n    /* TODO 3: Set the button background color */\n}\n\nbutton:hover {\n    filter: brightness(0.92);\n}\n\n#result {\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 18px;\n    color: #2e7d32;\n    min-height: 28px;\n}",
    "starterJS": "const weightInput = document.getElementById(\"weight\");\nconst heightInput = document.getElementById(\"height\");\nconst calculateButton = document.getElementById(\"calculate\");\nconst result = document.getElementById(\"result\");\n\ncalculateButton.addEventListener(\"click\", function () {\n\n    const weight = parseFloat(weightInput.value);\n    const heightInCm = parseFloat(heightInput.value);\n\n    // TODO 4: Convert height from centimeters to meters\n\n    // TODO 5: Calculate BMI\n\n    // TODO 6: Display BMI rounded to two decimal places\n\n});",
    "solutionHTML": "<div class=\"container\">\n    <h2>BMI Calculator</h2>\n\n    <input type=\"number\" id=\"weight\" placeholder=\"Weight in kg\">\n\n    <input type=\"number\" id=\"height\" placeholder=\"Height in cm\">\n\n    <button id=\"calculate\">Calculate</button>\n\n    <p id=\"result\"></p>\n</div>",
    "solutionCSS": "body {\n    font-family: Arial, sans-serif;\n}\n\n.container {\n    width: 320px;\n    margin: 40px auto;\n    text-align: center;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 28px 24px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\nh2 {\n    margin-top: 0;\n    color: #1e293b;\n    font-size: 1.4rem;\n}\n\ninput {\n    display: block;\n    width: 100%;\n    padding: 10px 14px;\n    margin: 12px 0;\n    box-sizing: border-box;\n    border: 1.5px solid #cbd5e1;\n    border-radius: 8px;\n    font-size: 14px;\n    transition: border-color 0.2s, box-shadow 0.2s;\n}\n\ninput:focus {\n    outline: none;\n    border-color: #4CAF50;\n    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);\n}\n\nbutton {\n    padding: 10px 24px;\n    cursor: pointer;\n    border: none;\n    border-radius: 8px;\n    font-weight: 600;\n    color: white;\n    transition: all 0.2s;\n    background-color: #4CAF50;\n}\n\nbutton:hover {\n    filter: brightness(0.92);\n}\n\n#result {\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 18px;\n    color: #2e7d32;\n    min-height: 28px;\n}",
    "solutionJS": "const weightInput = document.getElementById(\"weight\");\nconst heightInput = document.getElementById(\"height\");\nconst calculateButton = document.getElementById(\"calculate\");\nconst result = document.getElementById(\"result\");\n\ncalculateButton.addEventListener(\"click\", function () {\n\n    const weight = parseFloat(weightInput.value);\n    const heightInCm = parseFloat(heightInput.value);\n\n    // Convert height from centimeters to meters\n    const heightInMeters = heightInCm / 100;\n\n    // Calculate BMI\n    const bmi = weight / (heightInMeters * heightInMeters);\n\n    // Display BMI rounded to two decimal places\n    result.textContent = bmi.toFixed(2);\n\n});",
    "solutionExplanation": "### Solution Breakdown: BMI Calculator (Accenture 18th Sept Shift 2)\n\n1. **HTML Modifications**:\n   - Add `placeholder=\"Weight in kg\"` to `<input type=\"number\" id=\"weight\">`.\n   - Add `placeholder=\"Height in cm\"` to `<input type=\"number\" id=\"height\">`.\n\n2. **CSS Styling Task**:\n   - Set `background-color: #4CAF50;` on the `button` element.\n\n3. **JavaScript Calculation Task**:\n   - Convert centimeters to meters: `const heightInMeters = heightInCm / 100;`.\n   - Calculate BMI using formula: `const bmi = weight / (heightInMeters * heightInMeters);`.\n   - Display formatted value with two decimals using `bmi.toFixed(2)` into `result.textContent` or `result.innerText`.",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-003",
    "track": "frontend",
    "dateTag": "18th Sept Shift 1",
    "examDate": "2026-09-18",
    "shift": "Shift 1",
    "title": "Notification Center",
    "difficulty": "Easy",
    "category": "DOM Manipulation / DOM Removal & Styling",
    "source": "Accenture Assessment 18th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are creating a **Notification Center** for a new website. The project is partially completed. Complete the missing HTML, CSS, and JavaScript code to implement the required notification functionality.\n\n### Objectives\n- Inside the `<div>` with class `notification`, add three `<div>` elements with classes:\n  - `title` with text `Account Alert`\n  - `message` with text `Your account password was updated successfully 5 mins ago`\n  - `time` with text `5 mins ago`\n- Remove the `background-color` property from `.notification-list` in CSS.\n- Write JavaScript to completely remove the `.notification` element from the DOM when the user clicks the Close button (`#close-btn`).\n\n### Note\nThe notification element must be removed from the DOM, not merely hidden.\n\n### Constraints\n- Do not change any existing id or class attributes.\n- Use the existing HTML structure.\n- Make only the required modifications.\n- The Close button must remove the notification element completely.",
    "objectives": [
      "Inside .notification, add exactly three div elements with classes title, message, and time.",
      "Set text: 'Account Alert', 'Your account password was updated successfully 5 mins ago', and '5 mins ago'.",
      "Remove the background-color from .notification-list in CSS.",
      "Remove the .notification element from the DOM when #close-btn is clicked."
    ],
    "constraints": [
      "Do not change any existing id or class attributes.",
      "Use the existing HTML structure.",
      "Make only the required modifications.",
      "The Close button must remove the notification element completely, not merely hide it."
    ],
    "starterHTML": "<div class=\"notification-list\">\n    <div class=\"notification\">\n        <!-- TODO 1: Add the title div -->\n\n        <!-- TODO 2: Add the message div -->\n\n        <!-- TODO 3: Add the time div -->\n\n        <button id=\"close-btn\">Close</button>\n    </div>\n</div>",
    "starterCSS": "body {\n    font-family: Arial, sans-serif;\n}\n\n.notification-list {\n    width: 400px;\n    margin: 50px auto;\n\n    /* TODO 4: Remove the background color */\n    background-color: #f2f2f2;\n}\n\n.notification {\n    padding: 20px;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-left: 5px solid #3b82f6;\n    border-radius: 12px;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n    display: flex;\n    flex-direction: column;\n}\n\n.title {\n    font-size: 18px;\n    font-weight: bold;\n    color: #1e293b;\n}\n\n.message {\n    margin: 10px 0;\n    color: #475569;\n    font-size: 14px;\n    line-height: 1.5;\n}\n\n.time {\n    color: #94a3b8;\n    font-size: 12px;\n    margin-bottom: 12px;\n}\n\nbutton {\n    align-self: flex-end;\n    padding: 6px 14px;\n    cursor: pointer;\n    background: #f1f5f9;\n    border: 1px solid #cbd5e1;\n    border-radius: 6px;\n    font-weight: 600;\n    color: #475569;\n    transition: all 0.15s;\n}\n\nbutton:hover {\n    background: #e2e8f0;\n    color: #0f172a;\n}",
    "starterJS": "const closeButton = document.getElementById(\"close-btn\");\nconst notification = document.querySelector(\".notification\");\n\ncloseButton.addEventListener(\"click\", function () {\n    // TODO 5: Remove the notification element from the DOM\n});",
    "solutionHTML": "<div class=\"notification-list\">\n    <div class=\"notification\">\n        <div class=\"title\">Account Alert</div>\n        <div class=\"message\">Your account password was updated successfully 5 mins ago</div>\n        <div class=\"time\">5 mins ago</div>\n        <button id=\"close-btn\">Close</button>\n    </div>\n</div>",
    "solutionCSS": "body {\n    font-family: Arial, sans-serif;\n}\n\n.notification-list {\n    width: 400px;\n    margin: 50px auto;\n}\n\n.notification {\n    padding: 20px;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-left: 5px solid #3b82f6;\n    border-radius: 12px;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n    display: flex;\n    flex-direction: column;\n}\n\n.title {\n    font-size: 18px;\n    font-weight: bold;\n    color: #1e293b;\n}\n\n.message {\n    margin: 10px 0;\n    color: #475569;\n    font-size: 14px;\n    line-height: 1.5;\n}\n\n.time {\n    color: #94a3b8;\n    font-size: 12px;\n    margin-bottom: 12px;\n}\n\nbutton {\n    align-self: flex-end;\n    padding: 6px 14px;\n    cursor: pointer;\n    background: #f1f5f9;\n    border: 1px solid #cbd5e1;\n    border-radius: 6px;\n    font-weight: 600;\n    color: #475569;\n    transition: all 0.15s;\n}\n\nbutton:hover {\n    background: #e2e8f0;\n    color: #0f172a;\n}",
    "solutionJS": "const closeButton = document.getElementById(\"close-btn\");\nconst notification = document.querySelector(\".notification\");\n\ncloseButton.addEventListener(\"click\", function () {\n    notification.remove();\n});",
    "solutionExplanation": "### Solution Breakdown: Notification Center (Accenture 18th Sept Shift 1)\n\n1. **HTML Architecture**:\n   - Inside `<div class=\"notification\">`, add:\n     - `<div class=\"title\">Account Alert</div>`\n     - `<div class=\"message\">Your account password was updated successfully 5 mins ago</div>`\n     - `<div class=\"time\">5 mins ago</div>`\n\n2. **CSS Modification**:\n   - Remove the line `background-color: #f2f2f2;` from the `.notification-list` selector.\n\n3. **JavaScript DOM Removal**:\n   - Call `notification.remove()` inside the `#close-btn` click event listener.\n   - Alternatively, `notification.parentNode.removeChild(notification)` removes the node from the DOM tree completely, satisfying the constraint that it is not merely hidden with CSS.",
    "liveSandbox": true
  },
  {
    "id": "recent-sql-001",
    "track": "sql",
    "dateTag": "15th Jan 2025 • Shift 1",
    "examDate": "2025-01-15",
    "shift": "Shift 1",
    "title": "Subject Matter Experts",
    "difficulty": "Easy",
    "category": "Aggregation / GROUP BY & HAVING",
    "source": "Accenture Assessment 15th Jan 2025 (PYQ Series)",
    "isVerified": true,
    "description": "You are tasked with identifying **Subject Matter Experts (SMEs)** at Accenture based on their work experience in specific domains. An employee qualifies as an SME if they meet **either** of the following criteria:\n\n1. They have **8 or more years** of work experience in a **single domain**.\n2. They have **12 or more years** of work experience across **two different domains**.\n\nWrite a query to return the employee IDs of all the subject matter experts at Accenture.",
    "rules": [
      "Group records by employee_id.",
      "Criteria 1: SUM(years_of_experience) >= 8 AND COUNT(DISTINCT domain) = 1.",
      "Criteria 2: SUM(years_of_experience) >= 12 AND COUNT(DISTINCT domain) = 2.",
      "Use HAVING clause with logical OR between the two criteria."
    ],
    "tableSchema": [
      {
        "name": "employee_expertise",
        "columns": [
          {
            "name": "employee_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "domain",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "years_of_experience",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Authentic Exam Input)",
        "input": {
          "employee_expertise": [
            {
              "employee_id": 101,
              "domain": "Digital Transformation",
              "years_of_experience": 9
            },
            {
              "employee_id": 102,
              "domain": "Supply Chain",
              "years_of_experience": 6
            },
            {
              "employee_id": 102,
              "domain": "IoT",
              "years_of_experience": 7
            },
            {
              "employee_id": 103,
              "domain": "Change Management",
              "years_of_experience": 4
            },
            {
              "employee_id": 104,
              "domain": "DevOps",
              "years_of_experience": 5
            },
            {
              "employee_id": 104,
              "domain": "Cloud Migration",
              "years_of_experience": 5
            },
            {
              "employee_id": 104,
              "domain": "Agile Transformation",
              "years_of_experience": 5
            }
          ]
        },
        "output": [
          {
            "employee_id": 101
          },
          {
            "employee_id": 102
          }
        ],
        "explanation": "Employee 101 has 9 years in 1 domain (>= 8). Employee 102 has 13 years across 2 domains (>= 12). Employee 103 has only 4 years. Employee 104 has 15 years but across 3 domains (fails two-domain rule)."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  employee_id\nFROM employee_expertise\nGROUP BY employee_id\nHAVING (SUM(years_of_experience) >= 8\n  AND COUNT(DISTINCT domain) = 1)\n  OR (SUM(years_of_experience) >= 12\n  AND COUNT(DISTINCT domain) = 2);",
    "explanation": "We group by `employee_id` and use the `HAVING` clause with `SUM(years_of_experience)` and `COUNT(DISTINCT domain)`:\n- For single-domain experts: `SUM(years_of_experience) >= 8 AND COUNT(DISTINCT domain) = 1`\n- For multi-domain experts: `SUM(years_of_experience) >= 12 AND COUNT(DISTINCT domain) = 2`\nCombining them with `OR` filters only employees meeting either condition.",
    "expectedColumns": [
      "employee_id"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multi-Employee Experience Portfolio",
        "isHidden": false,
        "data": {
          "employee_expertise": [
            {
              "employee_id": 101,
              "domain": "Digital Transformation",
              "years_of_experience": 9
            },
            {
              "employee_id": 102,
              "domain": "Supply Chain",
              "years_of_experience": 6
            },
            {
              "employee_id": 102,
              "domain": "IoT",
              "years_of_experience": 7
            },
            {
              "employee_id": 103,
              "domain": "Change Management",
              "years_of_experience": 4
            },
            {
              "employee_id": 104,
              "domain": "DevOps",
              "years_of_experience": 5
            },
            {
              "employee_id": 104,
              "domain": "Cloud Migration",
              "years_of_experience": 5
            },
            {
              "employee_id": 104,
              "domain": "Agile Transformation",
              "years_of_experience": 5
            }
          ]
        },
        "expected": [
          {
            "employee_id": 101
          },
          {
            "employee_id": 102
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Boundary Experience Thresholds",
        "isHidden": false,
        "data": {
          "employee_expertise": [
            {
              "employee_id": 201,
              "domain": "AI Architecture",
              "years_of_experience": 8
            },
            {
              "employee_id": 202,
              "domain": "Cybersecurity",
              "years_of_experience": 6
            },
            {
              "employee_id": 202,
              "domain": "Data Governance",
              "years_of_experience": 6
            },
            {
              "employee_id": 203,
              "domain": "DevSecOps",
              "years_of_experience": 7
            },
            {
              "employee_id": 204,
              "domain": "AI",
              "years_of_experience": 6
            },
            {
              "employee_id": 204,
              "domain": "ML",
              "years_of_experience": 5
            }
          ]
        },
        "expected": [
          {
            "employee_id": 201
          },
          {
            "employee_id": 202
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Disqualifying 3+ Domains Portfolio",
        "isHidden": false,
        "data": {
          "employee_expertise": [
            {
              "employee_id": 301,
              "domain": "DevOps",
              "years_of_experience": 6
            },
            {
              "employee_id": 301,
              "domain": "Cloud",
              "years_of_experience": 4
            },
            {
              "employee_id": 301,
              "domain": "Security",
              "years_of_experience": 4
            },
            {
              "employee_id": 302,
              "domain": "Blockchain",
              "years_of_experience": 12
            },
            {
              "employee_id": 303,
              "domain": "Big Data",
              "years_of_experience": 7
            },
            {
              "employee_id": 303,
              "domain": "Analytics",
              "years_of_experience": 4
            }
          ]
        },
        "expected": [
          {
            "employee_id": 302
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Multiple Single-Domain Specialists",
        "isHidden": false,
        "data": {
          "employee_expertise": [
            {
              "employee_id": 401,
              "domain": "Frontend Engineering",
              "years_of_experience": 10
            },
            {
              "employee_id": 402,
              "domain": "Backend Engineering",
              "years_of_experience": 15
            },
            {
              "employee_id": 403,
              "domain": "QA Automation",
              "years_of_experience": 2
            },
            {
              "employee_id": 404,
              "domain": "UI/UX Design",
              "years_of_experience": 8
            }
          ]
        },
        "expected": [
          {
            "employee_id": 401
          },
          {
            "employee_id": 402
          },
          {
            "employee_id": 404
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Non-Qualifying Generalist Employee Set",
        "isHidden": true,
        "data": {
          "employee_expertise": [
            {
              "employee_id": 501,
              "domain": "Testing",
              "years_of_experience": 5
            },
            {
              "employee_id": 502,
              "domain": "Design",
              "years_of_experience": 3
            },
            {
              "employee_id": 502,
              "domain": "Product",
              "years_of_experience": 4
            },
            {
              "employee_id": 503,
              "domain": "D1",
              "years_of_experience": 2
            },
            {
              "employee_id": 503,
              "domain": "D2",
              "years_of_experience": 2
            },
            {
              "employee_id": 503,
              "domain": "D3",
              "years_of_experience": 2
            },
            {
              "employee_id": 503,
              "domain": "D4",
              "years_of_experience": 2
            }
          ]
        },
        "expected": []
      }
    ]
  },
  {
    "id": "recent-sql-002",
    "track": "sql",
    "dateTag": "20th Feb 2025 • Shift 1",
    "examDate": "2025-02-20",
    "shift": "Shift 1",
    "title": "Fill Missing Client Data",
    "difficulty": "Medium",
    "category": "Window Functions / Forward Fill & COALESCE",
    "source": "Accenture Assessment 20th Feb 2025 (PYQ Series)",
    "isVerified": true,
    "description": "When accessing Accenture's retailer client's database, you observe that the `category` column in the `products` table contains null values.\n\nWrite a query that returns the updated product table with all the category values filled in, taking into consideration the assumption that the first product in each category will always have a defined category value.",
    "rules": [
      "Use a Common Table Expression (CTE) or subquery with COUNT(category) OVER (ORDER BY product_id).",
      "The running COUNT creates a constant partition ID for each block of rows belonging to the same category.",
      "Use MAX(category) OVER (PARTITION BY numbered_category) or COALESCE to forward-fill missing values.",
      "Preserve product_id, category, and name columns in the output."
    ],
    "tableSchema": [
      {
        "name": "products",
        "columns": [
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "category",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "name",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Retailer Catalog)",
        "input": {
          "products": [
            {
              "product_id": 1,
              "category": "Shoes",
              "name": "Sperry Boat Shoe"
            },
            {
              "product_id": 2,
              "category": null,
              "name": "Adidas Stan Smith"
            },
            {
              "product_id": 3,
              "category": null,
              "name": "Vans Authentic"
            },
            {
              "product_id": 4,
              "category": "Jeans",
              "name": "Levi 511"
            },
            {
              "product_id": 5,
              "category": null,
              "name": "Wrangler Straight Fit"
            },
            {
              "product_id": 6,
              "category": "Shirts",
              "name": "Lacoste Classic Polo"
            },
            {
              "product_id": 7,
              "category": null,
              "name": "Nautica Linen Shirt"
            }
          ]
        },
        "output": [
          {
            "product_id": 1,
            "category": "Shoes",
            "name": "Sperry Boat Shoe"
          },
          {
            "product_id": 2,
            "category": "Shoes",
            "name": "Adidas Stan Smith"
          },
          {
            "product_id": 3,
            "category": "Shoes",
            "name": "Vans Authentic"
          },
          {
            "product_id": 4,
            "category": "Jeans",
            "name": "Levi 511"
          },
          {
            "product_id": 5,
            "category": "Jeans",
            "name": "Wrangler Straight Fit"
          },
          {
            "product_id": 6,
            "category": "Shirts",
            "name": "Lacoste Classic Polo"
          },
          {
            "product_id": 7,
            "category": "Shirts",
            "name": "Nautica Linen Shirt"
          }
        ],
        "explanation": "The running count of non-null categories partitions the products into groups: group 1 for Shoes (ids 1-3), group 2 for Jeans (ids 4-5), and group 3 for Shirts (ids 6-7)."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "WITH filled_category AS (\nSELECT\n  product_id,\n  category,\n  name,\n  COUNT(category) OVER (\nORDER BY product_id ) AS numbered_category\nFROM products )\nSELECT\n  product_id,\n  COALESCE( category, MAX(category) OVER (PARTITION BY numbered_category) ) AS category,\n  name\nFROM filled_category;",
    "explanation": "1. **Running Count Technique**: `COUNT(category) OVER (ORDER BY product_id)` counts non-null categories up to the current row. Because nulls are ignored, all rows following a valid category receive the same count number.\n2. **Partitioned Forward Fill**: In the outer query, `MAX(category) OVER (PARTITION BY numbered_category)` pulls the single non-null category name across the group, cleanly filling the null rows.",
    "expectedColumns": [
      "product_id",
      "category",
      "name"
    ],
    "orderSensitive": true,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multi-Category Catalog Forward Fill",
        "isHidden": false,
        "data": {
          "products": [
            {
              "product_id": 1,
              "category": "Shoes",
              "name": "Sperry Boat Shoe"
            },
            {
              "product_id": 2,
              "category": null,
              "name": "Adidas Stan Smith"
            },
            {
              "product_id": 3,
              "category": null,
              "name": "Vans Authentic"
            },
            {
              "product_id": 4,
              "category": "Jeans",
              "name": "Levi 511"
            },
            {
              "product_id": 5,
              "category": null,
              "name": "Wrangler Straight Fit"
            },
            {
              "product_id": 6,
              "category": "Shirts",
              "name": "Lacoste Classic Polo"
            },
            {
              "product_id": 7,
              "category": null,
              "name": "Nautica Linen Shirt"
            }
          ]
        },
        "expected": [
          {
            "product_id": 1,
            "category": "Shoes",
            "name": "Sperry Boat Shoe"
          },
          {
            "product_id": 2,
            "category": "Shoes",
            "name": "Adidas Stan Smith"
          },
          {
            "product_id": 3,
            "category": "Shoes",
            "name": "Vans Authentic"
          },
          {
            "product_id": 4,
            "category": "Jeans",
            "name": "Levi 511"
          },
          {
            "product_id": 5,
            "category": "Jeans",
            "name": "Wrangler Straight Fit"
          },
          {
            "product_id": 6,
            "category": "Shirts",
            "name": "Lacoste Classic Polo"
          },
          {
            "product_id": 7,
            "category": "Shirts",
            "name": "Nautica Linen Shirt"
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Single Category with Subsequent Nulls",
        "isHidden": false,
        "data": {
          "products": [
            {
              "product_id": 101,
              "category": "Electronics",
              "name": "MacBook Pro"
            },
            {
              "product_id": 102,
              "category": null,
              "name": "Magic Mouse"
            },
            {
              "product_id": 103,
              "category": null,
              "name": "Magic Keyboard"
            },
            {
              "product_id": 104,
              "category": null,
              "name": "Studio Display"
            }
          ]
        },
        "expected": [
          {
            "product_id": 101,
            "category": "Electronics",
            "name": "MacBook Pro"
          },
          {
            "product_id": 102,
            "category": "Electronics",
            "name": "Magic Mouse"
          },
          {
            "product_id": 103,
            "category": "Electronics",
            "name": "Magic Keyboard"
          },
          {
            "product_id": 104,
            "category": "Electronics",
            "name": "Studio Display"
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Alternating Pairs with Single Nulls",
        "isHidden": false,
        "data": {
          "products": [
            {
              "product_id": 201,
              "category": "Audio",
              "name": "Sony WH-1000XM5"
            },
            {
              "product_id": 202,
              "category": null,
              "name": "Sony WF-1000XM5"
            },
            {
              "product_id": 203,
              "category": "Cameras",
              "name": "Canon EOS R5"
            },
            {
              "product_id": 204,
              "category": null,
              "name": "Canon RF 24-70mm"
            }
          ]
        },
        "expected": [
          {
            "product_id": 201,
            "category": "Audio",
            "name": "Sony WH-1000XM5"
          },
          {
            "product_id": 202,
            "category": "Audio",
            "name": "Sony WF-1000XM5"
          },
          {
            "product_id": 203,
            "category": "Cameras",
            "name": "Canon EOS R5"
          },
          {
            "product_id": 204,
            "category": "Cameras",
            "name": "Canon RF 24-70mm"
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Fully Populated Catalog Without Nulls",
        "isHidden": false,
        "data": {
          "products": [
            {
              "product_id": 301,
              "category": "Books",
              "name": "Clean Architecture"
            },
            {
              "product_id": 302,
              "category": "Toys",
              "name": "Lego Millennium Falcon"
            },
            {
              "product_id": 303,
              "category": "Games",
              "name": "Catan Board Game"
            }
          ]
        },
        "expected": [
          {
            "product_id": 301,
            "category": "Books",
            "name": "Clean Architecture"
          },
          {
            "product_id": 302,
            "category": "Toys",
            "name": "Lego Millennium Falcon"
          },
          {
            "product_id": 303,
            "category": "Games",
            "name": "Catan Board Game"
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Extended Warehouse Multi-Tier Catalog",
        "isHidden": true,
        "data": {
          "products": [
            {
              "product_id": 401,
              "category": "Hardware",
              "name": "Claw Hammer"
            },
            {
              "product_id": 402,
              "category": null,
              "name": "Box of Nails"
            },
            {
              "product_id": 403,
              "category": null,
              "name": "Wood Screws"
            },
            {
              "product_id": 404,
              "category": "Garden",
              "name": "Steel Shovel"
            },
            {
              "product_id": 405,
              "category": null,
              "name": "Garden Hose"
            },
            {
              "product_id": 406,
              "category": "Paint",
              "name": "Wall Primer"
            },
            {
              "product_id": 407,
              "category": null,
              "name": "Nylon Brush"
            },
            {
              "product_id": 408,
              "category": null,
              "name": "Paint Roller"
            }
          ]
        },
        "expected": [
          {
            "product_id": 401,
            "category": "Hardware",
            "name": "Claw Hammer"
          },
          {
            "product_id": 402,
            "category": "Hardware",
            "name": "Box of Nails"
          },
          {
            "product_id": 403,
            "category": "Hardware",
            "name": "Wood Screws"
          },
          {
            "product_id": 404,
            "category": "Garden",
            "name": "Steel Shovel"
          },
          {
            "product_id": 405,
            "category": "Garden",
            "name": "Garden Hose"
          },
          {
            "product_id": 406,
            "category": "Paint",
            "name": "Wall Primer"
          },
          {
            "product_id": 407,
            "category": "Paint",
            "name": "Nylon Brush"
          },
          {
            "product_id": 408,
            "category": "Paint",
            "name": "Paint Roller"
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-003",
    "track": "sql",
    "dateTag": "10th Mar 2025 • Shift 2",
    "examDate": "2025-03-10",
    "shift": "Shift 2",
    "title": "Marketing Campaigns UNIQUE Constraint & Duplicate Audit",
    "difficulty": "Easy",
    "category": "DDL Constraints & Data Integrity",
    "source": "Accenture Assessment 10th Mar 2025 (PYQ Series)",
    "isVerified": true,
    "description": "The **UNIQUE** constraint ensures that all values in a column are distinct. It is frequently combined with **NOT NULL** to enforce strict entity uniqueness.\n\nFor example, on the marketing team at Accenture, campaigns are created with:\n```sql\nCREATE TABLE accenture_campaigns (\n    campaign_id INTEGER PRIMARY KEY,\n    campaign_name VARCHAR(255) NOT NULL UNIQUE,\n    start_date DATE NOT NULL,\n    end_date DATE NOT NULL,\n    budget DECIMAL(10,2) NOT NULL\n);\n```\n\nWrite a SQL query to audit the marketing database and return any duplicate campaign names that would violate the `UNIQUE` constraint along with the number of times they appear, ordered alphabetically by `campaign_name`.",
    "rules": [
      "Group by campaign_name.",
      "Filter with HAVING COUNT(*) > 1 to identify duplicate entries.",
      "Return campaign_name and duplicate_count columns.",
      "Order results by campaign_name ASC."
    ],
    "tableSchema": [
      {
        "name": "accenture_campaigns",
        "columns": [
          {
            "name": "campaign_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "campaign_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "budget",
            "type": "REAL",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1",
        "input": {
          "accenture_campaigns": [
            {
              "campaign_id": 1,
              "campaign_name": "Spring Tech Fest",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 15000
            },
            {
              "campaign_id": 2,
              "campaign_name": "Spring Tech Fest",
              "start_date": "2025-02-15",
              "end_date": "2025-03-15",
              "budget": 18000
            },
            {
              "campaign_id": 3,
              "campaign_name": "AI Summit",
              "start_date": "2025-04-01",
              "end_date": "2025-05-01",
              "budget": 30000
            },
            {
              "campaign_id": 4,
              "campaign_name": "Cloud Horizons",
              "start_date": "2025-05-01",
              "end_date": "2025-06-01",
              "budget": 25000
            },
            {
              "campaign_id": 5,
              "campaign_name": "AI Summit",
              "start_date": "2025-06-10",
              "end_date": "2025-07-10",
              "budget": 22000
            }
          ]
        },
        "output": [
          {
            "campaign_name": "AI Summit",
            "duplicate_count": 2
          },
          {
            "campaign_name": "Spring Tech Fest",
            "duplicate_count": 2
          }
        ],
        "explanation": "'AI Summit' appears 2 times and 'Spring Tech Fest' appears 2 times. 'Cloud Horizons' appears once so it is unique."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  campaign_name,\n  COUNT(*) AS duplicate_count\nFROM accenture_campaigns\nGROUP BY campaign_name\nHAVING COUNT(*) > 1\nORDER BY campaign_name;",
    "explanation": "To detect records violating a UNIQUE constraint, we group rows by `campaign_name` and use `HAVING COUNT(*) > 1`.\nIn relational databases, creating a `UNIQUE` constraint automatically adds a unique index to forbid future duplicate inserts.",
    "expectedColumns": [
      "campaign_name",
      "duplicate_count"
    ],
    "orderSensitive": true,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Duplicates Audit",
        "isHidden": false,
        "data": {
          "accenture_campaigns": [
            {
              "campaign_id": 1,
              "campaign_name": "Spring Tech Fest",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 15000
            },
            {
              "campaign_id": 2,
              "campaign_name": "Spring Tech Fest",
              "start_date": "2025-02-15",
              "end_date": "2025-03-15",
              "budget": 18000
            },
            {
              "campaign_id": 3,
              "campaign_name": "AI Summit",
              "start_date": "2025-04-01",
              "end_date": "2025-05-01",
              "budget": 30000
            },
            {
              "campaign_id": 4,
              "campaign_name": "Cloud Horizons",
              "start_date": "2025-05-01",
              "end_date": "2025-06-01",
              "budget": 25000
            },
            {
              "campaign_id": 5,
              "campaign_name": "AI Summit",
              "start_date": "2025-06-10",
              "end_date": "2025-07-10",
              "budget": 22000
            }
          ]
        },
        "expected": [
          {
            "campaign_name": "AI Summit",
            "duplicate_count": 2
          },
          {
            "campaign_name": "Spring Tech Fest",
            "duplicate_count": 2
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Triplicate Single Campaign Name",
        "isHidden": false,
        "data": {
          "accenture_campaigns": [
            {
              "campaign_id": 101,
              "campaign_name": "Cyber Week",
              "start_date": "2025-01-01",
              "end_date": "2025-01-07",
              "budget": 10000
            },
            {
              "campaign_id": 102,
              "campaign_name": "Cyber Week",
              "start_date": "2025-02-01",
              "end_date": "2025-02-07",
              "budget": 12000
            },
            {
              "campaign_id": 103,
              "campaign_name": "Autumn Launch",
              "start_date": "2025-09-01",
              "end_date": "2025-09-15",
              "budget": 8000
            },
            {
              "campaign_id": 104,
              "campaign_name": "Cyber Week",
              "start_date": "2025-11-20",
              "end_date": "2025-11-27",
              "budget": 20000
            }
          ]
        },
        "expected": [
          {
            "campaign_name": "Cyber Week",
            "duplicate_count": 3
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Strictly Unique Campaign Table",
        "isHidden": false,
        "data": {
          "accenture_campaigns": [
            {
              "campaign_id": 201,
              "campaign_name": "Alpha Project",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 5000
            },
            {
              "campaign_id": 202,
              "campaign_name": "Beta Project",
              "start_date": "2025-03-01",
              "end_date": "2025-04-01",
              "budget": 6000
            },
            {
              "campaign_id": 203,
              "campaign_name": "Gamma Project",
              "start_date": "2025-05-01",
              "end_date": "2025-06-01",
              "budget": 7000
            }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Multiple Duplicate Clusters",
        "isHidden": false,
        "data": {
          "accenture_campaigns": [
            {
              "campaign_id": 301,
              "campaign_name": "Brand Boost",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 10000
            },
            {
              "campaign_id": 302,
              "campaign_name": "Brand Boost",
              "start_date": "2025-03-01",
              "end_date": "2025-04-01",
              "budget": 10000
            },
            {
              "campaign_id": 303,
              "campaign_name": "Brand Boost",
              "start_date": "2025-05-01",
              "end_date": "2025-06-01",
              "budget": 10000
            },
            {
              "campaign_id": 304,
              "campaign_name": "Brand Boost",
              "start_date": "2025-07-01",
              "end_date": "2025-08-01",
              "budget": 10000
            },
            {
              "campaign_id": 305,
              "campaign_name": "HR Connect",
              "start_date": "2025-02-01",
              "end_date": "2025-03-01",
              "budget": 5000
            },
            {
              "campaign_id": 306,
              "campaign_name": "HR Connect",
              "start_date": "2025-04-01",
              "end_date": "2025-05-01",
              "budget": 5000
            },
            {
              "campaign_id": 307,
              "campaign_name": "Talent Day",
              "start_date": "2025-06-01",
              "end_date": "2025-07-01",
              "budget": 3000
            }
          ]
        },
        "expected": [
          {
            "campaign_name": "Brand Boost",
            "duplicate_count": 4
          },
          {
            "campaign_name": "HR Connect",
            "duplicate_count": 2
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Large Scale Campaign Registry Audit",
        "isHidden": true,
        "data": {
          "accenture_campaigns": [
            {
              "campaign_id": 401,
              "campaign_name": "InnoFest",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 1000
            },
            {
              "campaign_id": 402,
              "campaign_name": "TechTalk",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 1000
            },
            {
              "campaign_id": 403,
              "campaign_name": "DevDay",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 1000
            },
            {
              "campaign_id": 404,
              "campaign_name": "CloudCon",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 1000
            },
            {
              "campaign_id": 405,
              "campaign_name": "Global Hackathon",
              "start_date": "2025-01-01",
              "end_date": "2025-02-01",
              "budget": 1000
            },
            {
              "campaign_id": 406,
              "campaign_name": "Global Hackathon",
              "start_date": "2025-03-01",
              "end_date": "2025-04-01",
              "budget": 1000
            }
          ]
        },
        "expected": [
          {
            "campaign_name": "Global Hackathon",
            "duplicate_count": 2
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-004",
    "track": "sql",
    "dateTag": "18th Apr 2025 • Shift 1",
    "examDate": "2025-04-18",
    "shift": "Shift 1",
    "title": "Average Project Duration",
    "difficulty": "Easy",
    "category": "Date & Time Analytics / AVG",
    "source": "Accenture Assessment 18th Apr 2025 (PYQ Series)",
    "isVerified": true,
    "description": "At Accenture, you've been appointed as a data analyst. You're handed a dataset of all the company's projects within the last year, including their start and end dates.\n\nYour task is to find the **average duration (in days)** of all completed projects.\n\nAssume all projects have a valid end date and format is ISO standard date `YYYY-MM-DD`.",
    "rules": [
      "Calculate duration in days between end_date and start_date.",
      "Compute the average across all completed projects.",
      "Round the average to 1 decimal place (or standard precision).",
      "Alias the output column as avg_project_duration_days."
    ],
    "tableSchema": [
      {
        "name": "projects",
        "columns": [
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "start_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "end_date",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1",
        "input": {
          "projects": [
            {
              "project_id": 101,
              "start_date": "2022-01-01",
              "end_date": "2022-04-01"
            },
            {
              "project_id": 102,
              "start_date": "2022-02-15",
              "end_date": "2022-05-15"
            },
            {
              "project_id": 103,
              "start_date": "2022-04-01",
              "end_date": "2022-07-30"
            },
            {
              "project_id": 104,
              "start_date": "2022-05-10",
              "end_date": "2022-07-10"
            },
            {
              "project_id": 105,
              "start_date": "2022-09-15",
              "end_date": "2022-12-01"
            }
          ]
        },
        "output": [
          {
            "avg_project_duration_days": 87.4
          }
        ],
        "explanation": "Individual durations: 90, 89, 120, 61, 77 days. Total days = 437. Average = 437 / 5 = 87.4 days."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  ROUND(AVG(julianday(end_date) - julianday(start_date)), 1) AS avg_project_duration_days\nFROM projects; -- In PostgreSQL dialect: --\nSELECT\n  AVG(EXTRACT(DAY\nFROM (end_date::timestamp - start_date::timestamp))) AS avg_project_duration_days\nFROM projects;",
    "explanation": "Date differences calculate the total elapsed days for each completed project:\n- In SQLite / standard SQL: `julianday(end_date) - julianday(start_date)` converts date strings into continuous Julian day numbers.\n- In PostgreSQL: `EXTRACT(DAY FROM (end_date::timestamp - start_date::timestamp))`.\nTaking `AVG(...)` yields 87.4 days.",
    "expectedColumns": [
      "avg_project_duration_days"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multi-Month Completed Projects",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 101,
              "start_date": "2022-01-01",
              "end_date": "2022-04-01"
            },
            {
              "project_id": 102,
              "start_date": "2022-02-15",
              "end_date": "2022-05-15"
            },
            {
              "project_id": 103,
              "start_date": "2022-04-01",
              "end_date": "2022-07-30"
            },
            {
              "project_id": 104,
              "start_date": "2022-05-10",
              "end_date": "2022-07-10"
            },
            {
              "project_id": 105,
              "start_date": "2022-09-15",
              "end_date": "2022-12-01"
            }
          ]
        },
        "expected": [
          {
            "avg_project_duration_days": 87.4
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Round 10, 20, 30 Day Projects",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 201,
              "start_date": "2023-01-01",
              "end_date": "2023-01-11"
            },
            {
              "project_id": 202,
              "start_date": "2023-02-01",
              "end_date": "2023-02-21"
            },
            {
              "project_id": 203,
              "start_date": "2023-03-01",
              "end_date": "2023-03-31"
            }
          ]
        },
        "expected": [
          {
            "avg_project_duration_days": 20
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Fast Sprint 1-Day Completed Tasks",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 301,
              "start_date": "2023-05-01",
              "end_date": "2023-05-02"
            },
            {
              "project_id": 302,
              "start_date": "2023-06-10",
              "end_date": "2023-06-11"
            }
          ]
        },
        "expected": [
          {
            "avg_project_duration_days": 1
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Leap Year Span Duration",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 401,
              "start_date": "2024-02-01",
              "end_date": "2024-03-01"
            },
            {
              "project_id": 402,
              "start_date": "2024-01-01",
              "end_date": "2024-02-01"
            }
          ]
        },
        "expected": [
          {
            "avg_project_duration_days": 30
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Annual Enterprise Milestone Initiatives",
        "isHidden": true,
        "data": {
          "projects": [
            {
              "project_id": 501,
              "start_date": "2023-01-01",
              "end_date": "2023-07-01"
            },
            {
              "project_id": 502,
              "start_date": "2023-01-01",
              "end_date": "2023-10-01"
            },
            {
              "project_id": 503,
              "start_date": "2023-01-01",
              "end_date": "2024-01-01"
            }
          ]
        },
        "expected": [
          {
            "avg_project_duration_days": 273
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-005",
    "track": "sql",
    "dateTag": "25th May 2025 • Shift 2",
    "examDate": "2025-05-25",
    "shift": "Shift 2",
    "title": "Calculate Click Through Conversion Rate",
    "difficulty": "Medium",
    "category": "Conversion Funnel / CTE & LEFT JOIN",
    "source": "Accenture Assessment 25th May 2025 (PYQ Series)",
    "isVerified": true,
    "description": "As a data analyst at Accenture, you are tasked to analyze the effectiveness of digital marketing campaigns.\n\nSpecifically, Accenture is interested in knowing the **click-through conversion rate**, which is defined as the percentage of users who viewed a product and later added it to their cart:\n$$\\text{Conversion Rate} = \\left(\\frac{\\text{Cart Count}}{\\text{View Count}}\\right) \\times 100$$\n\nUsing the provided tables `user_product_view` and `user_product_cart`, calculate the click-through conversion rate for each product. Order results by `product_id`.",
    "rules": [
      "Aggregate view count per product_id from user_product_view.",
      "Aggregate cart count per product_id from user_product_cart.",
      "Join views and carts on product_id using LEFT JOIN.",
      "Calculate (cart_count / view_count) * 100 and round to 2 decimal places.",
      "Order by product_id ASC."
    ],
    "tableSchema": [
      {
        "name": "user_product_view",
        "columns": [
          {
            "name": "view_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "user_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "view_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "user_product_cart",
        "columns": [
          {
            "name": "cart_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "user_id",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "add_to_cart_date",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "product_id",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1",
        "input": {
          "user_product_view": [
            {
              "view_id": 1001,
              "user_id": 123,
              "view_date": "2022-06-08 00:00:00",
              "product_id": 20001
            },
            {
              "view_id": 2015,
              "user_id": 265,
              "view_date": "2022-06-10 00:00:00",
              "product_id": 22552
            },
            {
              "view_id": 3036,
              "user_id": 362,
              "view_date": "2022-06-18 00:00:00",
              "product_id": 20001
            },
            {
              "view_id": 4879,
              "user_id": 265,
              "view_date": "2022-07-26 00:00:00",
              "product_id": 22552
            },
            {
              "view_id": 5623,
              "user_id": 981,
              "view_date": "2022-07-05 00:00:00",
              "product_id": 22552
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 2123,
              "user_id": 123,
              "add_to_cart_date": "2022-06-08 00:00:00",
              "product_id": 20001
            },
            {
              "cart_id": 3856,
              "user_id": 362,
              "add_to_cart_date": "2022-06-21 00:00:00",
              "product_id": 20001
            },
            {
              "cart_id": 4987,
              "user_id": 265,
              "add_to_cart_date": "2022-07-30 00:00:00",
              "product_id": 22552
            }
          ]
        },
        "output": [
          {
            "product_id": 20001,
            "view_count": 2,
            "cart_count": 2,
            "conversion_rate": 100
          },
          {
            "product_id": 22552,
            "view_count": 3,
            "cart_count": 1,
            "conversion_rate": 33.33
          }
        ],
        "explanation": "Product 20001: 2 views, 2 carts -> (2/2) * 100 = 100%. Product 22552: 3 views, 1 cart -> (1/3) * 100 = 33.33%."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "WITH views AS (\nSELECT\n  product_id,\n  COUNT(*) AS view_count\nFROM user_product_view\nGROUP BY product_id ), carts AS (\nSELECT\n  product_id,\n  COUNT(*) AS cart_count\nFROM user_product_cart\nGROUP BY product_id )\nSELECT\n  v.product_id,\n  v.view_count,\n  c.cart_count,\n  ROUND((c.cart_count * 1.0 / v.view_count) * 100, 2) AS conversion_rate\nFROM views v\nLEFT\nJOIN carts c ON v.product_id = c.product_id\nORDER BY v.product_id;",
    "explanation": "1. **Views CTE**: Groups `user_product_view` by `product_id` to obtain total views per product.\n2. **Carts CTE**: Groups `user_product_cart` by `product_id` to obtain total cart additions per product.\n3. **LEFT JOIN & Conversion Calculation**: Connects views with carts and calculates `(c.cart_count * 1.0 / v.view_count) * 100`. Casting to float/multiplying by 1.0 prevents integer division truncation.",
    "expectedColumns": [
      "product_id",
      "view_count",
      "cart_count",
      "conversion_rate"
    ],
    "orderSensitive": true,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Funnel Performance",
        "isHidden": false,
        "data": {
          "user_product_view": [
            {
              "view_id": 1001,
              "user_id": 123,
              "view_date": "2022-06-08 00:00:00",
              "product_id": 20001
            },
            {
              "view_id": 2015,
              "user_id": 265,
              "view_date": "2022-06-10 00:00:00",
              "product_id": 22552
            },
            {
              "view_id": 3036,
              "user_id": 362,
              "view_date": "2022-06-18 00:00:00",
              "product_id": 20001
            },
            {
              "view_id": 4879,
              "user_id": 265,
              "view_date": "2022-07-26 00:00:00",
              "product_id": 22552
            },
            {
              "view_id": 5623,
              "user_id": 981,
              "view_date": "2022-07-05 00:00:00",
              "product_id": 22552
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 2123,
              "user_id": 123,
              "add_to_cart_date": "2022-06-08 00:00:00",
              "product_id": 20001
            },
            {
              "cart_id": 3856,
              "user_id": 362,
              "add_to_cart_date": "2022-06-21 00:00:00",
              "product_id": 20001
            },
            {
              "cart_id": 4987,
              "user_id": 265,
              "add_to_cart_date": "2022-07-30 00:00:00",
              "product_id": 22552
            }
          ]
        },
        "expected": [
          {
            "product_id": 20001,
            "view_count": 2,
            "cart_count": 2,
            "conversion_rate": 100
          },
          {
            "product_id": 22552,
            "view_count": 3,
            "cart_count": 1,
            "conversion_rate": 33.33
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Balanced 50% and 25% Rates",
        "isHidden": false,
        "data": {
          "user_product_view": [
            {
              "view_id": 1,
              "user_id": 1,
              "view_date": "2023-01-01",
              "product_id": 30001
            },
            {
              "view_id": 2,
              "user_id": 2,
              "view_date": "2023-01-02",
              "product_id": 30001
            },
            {
              "view_id": 3,
              "user_id": 3,
              "view_date": "2023-01-03",
              "product_id": 30001
            },
            {
              "view_id": 4,
              "user_id": 4,
              "view_date": "2023-01-04",
              "product_id": 30001
            },
            {
              "view_id": 5,
              "user_id": 1,
              "view_date": "2023-01-01",
              "product_id": 30002
            },
            {
              "view_id": 6,
              "user_id": 2,
              "view_date": "2023-01-02",
              "product_id": 30002
            },
            {
              "view_id": 7,
              "user_id": 3,
              "view_date": "2023-01-03",
              "product_id": 30002
            },
            {
              "view_id": 8,
              "user_id": 4,
              "view_date": "2023-01-04",
              "product_id": 30002
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 1,
              "user_id": 1,
              "add_to_cart_date": "2023-01-01",
              "product_id": 30001
            },
            {
              "cart_id": 2,
              "user_id": 2,
              "add_to_cart_date": "2023-01-02",
              "product_id": 30001
            },
            {
              "cart_id": 3,
              "user_id": 1,
              "add_to_cart_date": "2023-01-01",
              "product_id": 30002
            }
          ]
        },
        "expected": [
          {
            "product_id": 30001,
            "view_count": 4,
            "cart_count": 2,
            "conversion_rate": 50
          },
          {
            "product_id": 30002,
            "view_count": 4,
            "cart_count": 1,
            "conversion_rate": 25
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — High Conversion (75% and 66.67%)",
        "isHidden": false,
        "data": {
          "user_product_view": [
            {
              "view_id": 11,
              "user_id": 1,
              "view_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "view_id": 12,
              "user_id": 2,
              "view_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "view_id": 13,
              "user_id": 3,
              "view_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "view_id": 14,
              "user_id": 4,
              "view_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "view_id": 15,
              "user_id": 1,
              "view_date": "2023-02-02",
              "product_id": 40002
            },
            {
              "view_id": 16,
              "user_id": 2,
              "view_date": "2023-02-02",
              "product_id": 40002
            },
            {
              "view_id": 17,
              "user_id": 3,
              "view_date": "2023-02-02",
              "product_id": 40002
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 11,
              "user_id": 1,
              "add_to_cart_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "cart_id": 12,
              "user_id": 2,
              "add_to_cart_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "cart_id": 13,
              "user_id": 3,
              "add_to_cart_date": "2023-02-01",
              "product_id": 40001
            },
            {
              "cart_id": 14,
              "user_id": 1,
              "add_to_cart_date": "2023-02-02",
              "product_id": 40002
            },
            {
              "cart_id": 15,
              "user_id": 2,
              "add_to_cart_date": "2023-02-02",
              "product_id": 40002
            }
          ]
        },
        "expected": [
          {
            "product_id": 40001,
            "view_count": 4,
            "cart_count": 3,
            "conversion_rate": 75
          },
          {
            "product_id": 40002,
            "view_count": 3,
            "cart_count": 2,
            "conversion_rate": 66.67
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Single Item 1:1 Conversion (100%)",
        "isHidden": false,
        "data": {
          "user_product_view": [
            {
              "view_id": 21,
              "user_id": 10,
              "view_date": "2023-03-01",
              "product_id": 50001
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 21,
              "user_id": 10,
              "add_to_cart_date": "2023-03-01",
              "product_id": 50001
            }
          ]
        },
        "expected": [
          {
            "product_id": 50001,
            "view_count": 1,
            "cart_count": 1,
            "conversion_rate": 100
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — High Scale Multi-Product Conversion",
        "isHidden": true,
        "data": {
          "user_product_view": [
            {
              "view_id": 31,
              "user_id": 1,
              "view_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "view_id": 32,
              "user_id": 2,
              "view_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "view_id": 33,
              "user_id": 3,
              "view_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "view_id": 34,
              "user_id": 4,
              "view_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "view_id": 35,
              "user_id": 5,
              "view_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "view_id": 36,
              "user_id": 1,
              "view_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "view_id": 37,
              "user_id": 2,
              "view_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "view_id": 38,
              "user_id": 3,
              "view_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "view_id": 39,
              "user_id": 4,
              "view_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "view_id": 40,
              "user_id": 5,
              "view_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "view_id": 41,
              "user_id": 1,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 42,
              "user_id": 2,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 43,
              "user_id": 3,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 44,
              "user_id": 4,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 45,
              "user_id": 5,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 46,
              "user_id": 6,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 47,
              "user_id": 7,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 48,
              "user_id": 8,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 49,
              "user_id": 9,
              "view_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "view_id": 50,
              "user_id": 10,
              "view_date": "2023-04-03",
              "product_id": 60003
            }
          ],
          "user_product_cart": [
            {
              "cart_id": 31,
              "user_id": 1,
              "add_to_cart_date": "2023-04-01",
              "product_id": 60001
            },
            {
              "cart_id": 32,
              "user_id": 1,
              "add_to_cart_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "cart_id": 33,
              "user_id": 2,
              "add_to_cart_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "cart_id": 34,
              "user_id": 3,
              "add_to_cart_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "cart_id": 35,
              "user_id": 4,
              "add_to_cart_date": "2023-04-02",
              "product_id": 60002
            },
            {
              "cart_id": 36,
              "user_id": 1,
              "add_to_cart_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "cart_id": 37,
              "user_id": 2,
              "add_to_cart_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "cart_id": 38,
              "user_id": 3,
              "add_to_cart_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "cart_id": 39,
              "user_id": 4,
              "add_to_cart_date": "2023-04-03",
              "product_id": 60003
            },
            {
              "cart_id": 40,
              "user_id": 5,
              "add_to_cart_date": "2023-04-03",
              "product_id": 60003
            }
          ]
        },
        "expected": [
          {
            "product_id": 60001,
            "view_count": 5,
            "cart_count": 1,
            "conversion_rate": 20
          },
          {
            "product_id": 60002,
            "view_count": 5,
            "cart_count": 4,
            "conversion_rate": 80
          },
          {
            "product_id": 60003,
            "view_count": 10,
            "cart_count": 5,
            "conversion_rate": 50
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-006",
    "track": "sql",
    "dateTag": "14th Jun 2025 • Shift 1",
    "examDate": "2025-06-14",
    "shift": "Shift 1",
    "title": "Average Project Cost Per Year",
    "difficulty": "Easy",
    "category": "Aggregation / GROUP BY & AVG",
    "source": "Accenture Assessment 14th Jun 2025 (PYQ Series)",
    "isVerified": true,
    "description": "As a part of Accenture, a global professional services company, you are required to keep track of various projects carried out throughout the year and their respective costs.\n\nWrite a SQL query to find out the **average project cost per year**, rounded to two decimal places. Order the results by `year` ascending.",
    "rules": [
      "Group projects by year.",
      "Compute the average cost using AVG(cost).",
      "Round the average cost to 2 decimal places: ROUND(AVG(cost), 2).",
      "Alias the column as avg_cost and order by year ASC."
    ],
    "tableSchema": [
      {
        "name": "projects",
        "columns": [
          {
            "name": "project_id",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "year",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "project_name",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "cost",
            "type": "REAL",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1",
        "input": {
          "projects": [
            {
              "project_id": 101,
              "year": 2021,
              "project_name": "Project Alpha",
              "cost": 30000
            },
            {
              "project_id": 102,
              "year": 2021,
              "project_name": "Project Beta",
              "cost": 50000
            },
            {
              "project_id": 103,
              "year": 2021,
              "project_name": "Project Gamma",
              "cost": 15000
            },
            {
              "project_id": 104,
              "year": 2022,
              "project_name": "Project Delta",
              "cost": 45000
            },
            {
              "project_id": 105,
              "year": 2022,
              "project_name": "Project Epsilon",
              "cost": 35000
            },
            {
              "project_id": 106,
              "year": 2022,
              "project_name": "Project Zeta",
              "cost": 27000
            }
          ]
        },
        "output": [
          {
            "year": 2021,
            "avg_cost": 31666.67
          },
          {
            "year": 2022,
            "avg_cost": 35666.67
          }
        ],
        "explanation": "2021 average: (30000 + 50000 + 15000) / 3 = 31666.67. 2022 average: (45000 + 35000 + 27000) / 3 = 35666.67."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  year,\n  ROUND(AVG(cost), 2) AS avg_cost\nFROM projects\nGROUP BY year\nORDER BY year;",
    "explanation": "We group the rows by `year` and calculate `ROUND(AVG(cost), 2)`.\nOrdering by `year ASC` produces a clear, chronological breakdown of annual project expenditures.",
    "expectedColumns": [
      "year",
      "avg_cost"
    ],
    "orderSensitive": true,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multi-Year Budgets",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 101,
              "year": 2021,
              "project_name": "Project Alpha",
              "cost": 30000
            },
            {
              "project_id": 102,
              "year": 2021,
              "project_name": "Project Beta",
              "cost": 50000
            },
            {
              "project_id": 103,
              "year": 2021,
              "project_name": "Project Gamma",
              "cost": 15000
            },
            {
              "project_id": 104,
              "year": 2022,
              "project_name": "Project Delta",
              "cost": 45000
            },
            {
              "project_id": 105,
              "year": 2022,
              "project_name": "Project Epsilon",
              "cost": 35000
            },
            {
              "project_id": 106,
              "year": 2022,
              "project_name": "Project Zeta",
              "cost": 27000
            }
          ]
        },
        "expected": [
          {
            "year": 2021,
            "avg_cost": 31666.67
          },
          {
            "year": 2022,
            "avg_cost": 35666.67
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Single Year Round Average",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 201,
              "year": 2023,
              "project_name": "Project Alpha",
              "cost": 10000
            },
            {
              "project_id": 202,
              "year": 2023,
              "project_name": "Project Beta",
              "cost": 20000
            },
            {
              "project_id": 203,
              "year": 2023,
              "project_name": "Project Gamma",
              "cost": 30000
            }
          ]
        },
        "expected": [
          {
            "year": 2023,
            "avg_cost": 20000
          }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Three Successive Financial Years",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 301,
              "year": 2022,
              "project_name": "P1",
              "cost": 40000
            },
            {
              "project_id": 302,
              "year": 2022,
              "project_name": "P2",
              "cost": 60000
            },
            {
              "project_id": 303,
              "year": 2023,
              "project_name": "P3",
              "cost": 75000
            },
            {
              "project_id": 304,
              "year": 2023,
              "project_name": "P4",
              "cost": 85000
            },
            {
              "project_id": 305,
              "year": 2024,
              "project_name": "P5",
              "cost": 90000
            },
            {
              "project_id": 306,
              "year": 2024,
              "project_name": "P6",
              "cost": 110000
            }
          ]
        },
        "expected": [
          {
            "year": 2022,
            "avg_cost": 50000
          },
          {
            "year": 2023,
            "avg_cost": 80000
          },
          {
            "year": 2024,
            "avg_cost": 100000
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Rounding Decimal Precision (.33)",
        "isHidden": false,
        "data": {
          "projects": [
            {
              "project_id": 401,
              "year": 2024,
              "project_name": "Micro-A",
              "cost": 1000
            },
            {
              "project_id": 402,
              "year": 2024,
              "project_name": "Micro-B",
              "cost": 1000
            },
            {
              "project_id": 403,
              "year": 2024,
              "project_name": "Micro-C",
              "cost": 2000
            }
          ]
        },
        "expected": [
          {
            "year": 2024,
            "avg_cost": 1333.33
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Multi-Department Enterprise Portfolio",
        "isHidden": true,
        "data": {
          "projects": [
            {
              "project_id": 501,
              "year": 2020,
              "project_name": "D1",
              "cost": 25000
            },
            {
              "project_id": 502,
              "year": 2020,
              "project_name": "D2",
              "cost": 35000
            },
            {
              "project_id": 503,
              "year": 2021,
              "project_name": "D3",
              "cost": 45000
            },
            {
              "project_id": 504,
              "year": 2021,
              "project_name": "D4",
              "cost": 55000
            },
            {
              "project_id": 505,
              "year": 2022,
              "project_name": "D5",
              "cost": 70000
            },
            {
              "project_id": 506,
              "year": 2022,
              "project_name": "D6",
              "cost": 80000
            },
            {
              "project_id": 507,
              "year": 2023,
              "project_name": "D7",
              "cost": 120000
            },
            {
              "project_id": 508,
              "year": 2023,
              "project_name": "D8",
              "cost": 140000
            }
          ]
        },
        "expected": [
          {
            "year": 2020,
            "avg_cost": 30000
          },
          {
            "year": 2021,
            "avg_cost": 50000
          },
          {
            "year": 2022,
            "avg_cost": 75000
          },
          {
            "year": 2023,
            "avg_cost": 130000
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-007",
    "track": "sql",
    "dateTag": "18th Sept 2026 • Shift 1",
    "examDate": "2026-09-18",
    "shift": "Shift 1",
    "title": "Customers with Transactions Greater Than 30000",
    "difficulty": "Easy",
    "category": "Joins / Filtering & Relational Transactions",
    "source": "Accenture Assessment 18th Sept 2026 (Shift 1 Verified Exam Paper)",
    "isVerified": true,
    "description": "Write an SQL query to display: First name, last name and Account ID of customers who have ever made a transaction of strictly greater than 30000. Use alias as `First Name`, `Last Name` and `Account ID`.\n\n### 📝 Problem Specifications & Logic:\n- Connect the `customer` and `account` tables using `CUSTOMER_ID`.\n- Connect the `account` and `transaction` tables using `ACCOUNT_ID`.\n- Check whether the transaction amount is strictly greater than 30,000 (`AMOUNT > 30000`).\n- Return the customer's first name, last name, and account ID with the required aliases.\n- Use `DISTINCT` or `EXISTS` so that a customer/account is not repeated when multiple qualifying transactions exist.\n\n> **⚠️ Important Requirement**: The condition is **strictly greater than 30000**, so a transaction amount of exactly 30000 must NOT be included.",
    "rules": [
      "1. Join customer, account, and transaction tables on CUSTOMER_ID and ACCOUNT_ID.",
      "2. Filter transactions where AMOUNT > 30000 (strictly greater than 30000).",
      "3. Use DISTINCT or EXISTS so multiple qualifying transactions do not cause duplicate customer/account rows.",
      "4. Use exact aliases: \"First Name\", \"Last Name\", and \"Account ID\"."
    ],
    "concepts": [
      "JOIN",
      "WHERE",
      "DISTINCT",
      "Comparison Operator >",
      "Table Relationships"
    ],
    "tableSchema": [
      {
        "name": "customer",
        "columns": [
          { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "FIRST_NAME", "type": "TEXT", "primaryKey": false },
          { "name": "LAST_NAME", "type": "TEXT", "primaryKey": false },
          { "name": "CONTACT", "type": "TEXT", "primaryKey": false },
          { "name": "EMAIL", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "account",
        "columns": [
          { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "BRANCH_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "ACCOUNT_TYPE_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "BALANCE", "type": "REAL", "primaryKey": false }
        ]
      },
      {
        "name": "transaction",
        "columns": [
          { "name": "TRANSACTION_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "TRANSACTION_DATE", "type": "TEXT", "primaryKey": false },
          { "name": "AMOUNT", "type": "REAL", "primaryKey": false },
          { "name": "TRANSACTION_TYPE", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "loan",
        "columns": [
          { "name": "LOAN_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "LOAN_AMOUNT", "type": "REAL", "primaryKey": false },
          { "name": "LOAN_DATE", "type": "TEXT", "primaryKey": false },
          { "name": "DUE_DATE", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "branch",
        "columns": [
          { "name": "BRANCH_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "BRANCH_NAME", "type": "TEXT", "primaryKey": false },
          { "name": "ADDRESS", "type": "TEXT", "primaryKey": false },
          { "name": "CONTACT", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "account_type",
        "columns": [
          { "name": "ACCOUNT_TYPE_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ACCOUNT_TYPE_NAME", "type": "TEXT", "primaryKey": false }
        ]
      }
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 6,
      "tables": [
        {
          "name": "customer",
          "columns": [
            { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "FIRST_NAME", "type": "TEXT", "primaryKey": false },
            { "name": "LAST_NAME", "type": "TEXT", "primaryKey": false },
            { "name": "CONTACT", "type": "TEXT", "primaryKey": false },
            { "name": "EMAIL", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "account",
          "columns": [
            { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "BRANCH_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "ACCOUNT_TYPE_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "BALANCE", "type": "REAL", "primaryKey": false }
          ]
        },
        {
          "name": "transaction",
          "columns": [
            { "name": "TRANSACTION_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "TRANSACTION_DATE", "type": "TEXT", "primaryKey": false },
            { "name": "AMOUNT", "type": "REAL", "primaryKey": false },
            { "name": "TRANSACTION_TYPE", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "loan",
          "columns": [
            { "name": "LOAN_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "ACCOUNT_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "LOAN_AMOUNT", "type": "REAL", "primaryKey": false },
            { "name": "LOAN_DATE", "type": "TEXT", "primaryKey": false },
            { "name": "DUE_DATE", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "branch",
          "columns": [
            { "name": "BRANCH_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "BRANCH_NAME", "type": "TEXT", "primaryKey": false },
            { "name": "ADDRESS", "type": "TEXT", "primaryKey": false },
            { "name": "CONTACT", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "account_type",
          "columns": [
            { "name": "ACCOUNT_TYPE_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "ACCOUNT_TYPE_NAME", "type": "TEXT", "primaryKey": false }
          ]
        }
      ]
    },
    "examples": [
      {
        "title": "Example 1 (Basic Qualifying Transaction)",
        "input": {
          "customer": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma", "CONTACT": "9000000001", "EMAIL": "amit@example.com" },
            { "CUSTOMER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Verma", "CONTACT": "9000000002", "EMAIL": "riya@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 101, "CUSTOMER_ID": 1, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 70000 },
            { "ACCOUNT_ID": 102, "CUSTOMER_ID": 2, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 25000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 1001, "ACCOUNT_ID": 101, "TRANSACTION_DATE": "2024-01-10", "AMOUNT": 45000, "TRANSACTION_TYPE": "Debit" },
            { "TRANSACTION_ID": 1002, "ACCOUNT_ID": 102, "TRANSACTION_DATE": "2024-01-11", "AMOUNT": 20000, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "output": [
          {
            "First Name": "Amit",
            "Last Name": "Sharma",
            "Account ID": 101
          }
        ],
        "explanation": "Amit's account has a transaction of 45000, which is strictly greater than 30000. Riya's transaction is only 20000, so she is excluded."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT DISTINCT\n  c.FIRST_NAME AS \"First Name\",\n  c.LAST_NAME AS \"Last Name\",\n  a.ACCOUNT_ID AS \"Account ID\"\nFROM customer c\nJOIN account a ON c.CUSTOMER_ID = a.CUSTOMER_ID\nJOIN \"transaction\" t ON a.ACCOUNT_ID = t.ACCOUNT_ID\nWHERE t.AMOUNT > 30000;",
    "alternativeSolution": "SELECT\n  c.FIRST_NAME AS \"First Name\",\n  c.LAST_NAME AS \"Last Name\",\n  a.ACCOUNT_ID AS \"Account ID\"\nFROM customer c\nJOIN account a ON c.CUSTOMER_ID = a.CUSTOMER_ID\nWHERE EXISTS (\n  SELECT 1\n  FROM \"transaction\" t\n  WHERE t.ACCOUNT_ID = a.ACCOUNT_ID\n    AND t.AMOUNT > 30000\n);",
    "explanation": "Find customers who have made at least one transaction whose amount is strictly greater than 30,000:\n1. Connect the `customer` and `account` tables using `CUSTOMER_ID`.\n2. Connect the `account` and `transaction` tables using `ACCOUNT_ID`.\n3. Check whether the transaction amount is strictly greater than 30,000 (`AMOUNT > 30000`).\n4. Return the customer's first name, last name and account ID with the required aliases.\n5. Use `DISTINCT` or `EXISTS` so that a customer/account is not repeated when multiple qualifying transactions exist.",
    "expectedColumns": [
      "First Name",
      "Last Name",
      "Account ID"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Basic case with one qualifying transaction",
        "isHidden": false,
        "data": {
          "customer": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma", "CONTACT": "9000000001", "EMAIL": "amit@example.com" },
            { "CUSTOMER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Verma", "CONTACT": "9000000002", "EMAIL": "riya@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 101, "CUSTOMER_ID": 1, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 70000 },
            { "ACCOUNT_ID": 102, "CUSTOMER_ID": 2, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 25000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 1001, "ACCOUNT_ID": 101, "TRANSACTION_DATE": "2024-01-10", "AMOUNT": 45000, "TRANSACTION_TYPE": "Debit" },
            { "TRANSACTION_ID": 1002, "ACCOUNT_ID": 102, "TRANSACTION_DATE": "2024-01-11", "AMOUNT": 20000, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "expected": [
          {
            "First Name": "Amit",
            "Last Name": "Sharma",
            "Account ID": 101
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Transaction exactly equal to 30000 (Strict Boundary)",
        "isHidden": false,
        "data": {
          "customer": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Rahul", "LAST_NAME": "Kumar", "CONTACT": "9000000011", "EMAIL": "rahul@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 201, "CUSTOMER_ID": 1, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 50000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 2001, "ACCOUNT_ID": 201, "TRANSACTION_DATE": "2024-02-10", "AMOUNT": 30000, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Customer has multiple transactions (Deduplication Check)",
        "isHidden": false,
        "data": {
          "customer": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Neha", "LAST_NAME": "Singh", "CONTACT": "9000000021", "EMAIL": "neha@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 301, "CUSTOMER_ID": 1, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 90000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 3001, "ACCOUNT_ID": 301, "TRANSACTION_DATE": "2024-03-01", "AMOUNT": 10000, "TRANSACTION_TYPE": "Debit" },
            { "TRANSACTION_ID": 3002, "ACCOUNT_ID": 301, "TRANSACTION_DATE": "2024-03-02", "AMOUNT": 65000, "TRANSACTION_TYPE": "Credit" },
            { "TRANSACTION_ID": 3003, "ACCOUNT_ID": 301, "TRANSACTION_DATE": "2024-03-03", "AMOUNT": 40000, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "expected": [
          {
            "First Name": "Neha",
            "Last Name": "Singh",
            "Account ID": 301
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Multiple customers with qualifying & non-qualifying transactions",
        "isHidden": false,
        "data": {
          "customer": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Aman", "LAST_NAME": "Gupta", "CONTACT": "9000000031", "EMAIL": "aman@example.com" },
            { "CUSTOMER_ID": 2, "FIRST_NAME": "Priya", "LAST_NAME": "Das", "CONTACT": "9000000032", "EMAIL": "priya@example.com" },
            { "CUSTOMER_ID": 3, "FIRST_NAME": "Karan", "LAST_NAME": "Roy", "CONTACT": "9000000033", "EMAIL": "karan@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 401, "CUSTOMER_ID": 1, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 60000 },
            { "ACCOUNT_ID": 402, "CUSTOMER_ID": 2, "BRANCH_ID": 2, "ACCOUNT_TYPE_ID": 2, "BALANCE": 80000 },
            { "ACCOUNT_ID": 403, "CUSTOMER_ID": 3, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 25000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 4001, "ACCOUNT_ID": 401, "TRANSACTION_DATE": "2024-04-01", "AMOUNT": 35000, "TRANSACTION_TYPE": "Debit" },
            { "TRANSACTION_ID": 4002, "ACCOUNT_ID": 402, "TRANSACTION_DATE": "2024-04-02", "AMOUNT": 55000, "TRANSACTION_TYPE": "Credit" },
            { "TRANSACTION_ID": 4003, "ACCOUNT_ID": 403, "TRANSACTION_DATE": "2024-04-03", "AMOUNT": 30000, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "expected": [
          {
            "First Name": "Aman",
            "Last Name": "Gupta",
            "Account ID": 401
          },
          {
            "First Name": "Priya",
            "Last Name": "Das",
            "Account ID": 402
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Fractional Amounts & Dormant Accounts",
        "isHidden": true,
        "data": {
          "customer": [
            { "CUSTOMER_ID": 10, "FIRST_NAME": "Vikram", "LAST_NAME": "Rathore", "CONTACT": "9111111111", "EMAIL": "vikram@example.com" },
            { "CUSTOMER_ID": 11, "FIRST_NAME": "Sanya", "LAST_NAME": "Malhotra", "CONTACT": "9222222222", "EMAIL": "sanya@example.com" }
          ],
          "account": [
            { "ACCOUNT_ID": 501, "CUSTOMER_ID": 10, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 100000 },
            { "ACCOUNT_ID": 502, "CUSTOMER_ID": 11, "BRANCH_ID": 1, "ACCOUNT_TYPE_ID": 1, "BALANCE": 30000 }
          ],
          "transaction": [
            { "TRANSACTION_ID": 5001, "ACCOUNT_ID": 501, "TRANSACTION_DATE": "2024-05-01", "AMOUNT": 30000.50, "TRANSACTION_TYPE": "Debit" },
            { "TRANSACTION_ID": 5002, "ACCOUNT_ID": 502, "TRANSACTION_DATE": "2024-05-02", "AMOUNT": 29999.99, "TRANSACTION_TYPE": "Debit" }
          ]
        },
        "expected": [
          {
            "First Name": "Vikram",
            "Last Name": "Rathore",
            "Account ID": 501
          }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-008",
    "track": "sql",
    "dateTag": "18th Sept 2026 • Shift 2",
    "examDate": "2026-09-18",
    "shift": "Shift 2",
    "title": "Contact Roles with More Than 2 Users",
    "difficulty": "Easy",
    "category": "Aggregation / GROUP BY & HAVING",
    "source": "Accenture Assessment 18th Sept 2026 (Shift 2 Verified Exam Paper)",
    "isVerified": true,
    "description": "Write an SQL query to display the role description and number of users associated with each contact role, but only for roles with more than 2 users.\n\n### 📝 Required Output Aliases:\n- `ROLE DESCRIPTION`\n- `TOTAL USERS`\n\n---\n\n### 📌 Problem Walkthrough & Logic:\n1. Join the `role` table with `contact_role` on `ROLE_ID`.\n2. Group the records according to the contact role (`r.ROLE_ID`, `r.ROLE_DESCRIPTION`).\n3. Use `COUNT(cr.USER_ID)` to calculate the number of users associated with each role.\n4. Use `HAVING COUNT(cr.USER_ID) > 2` to keep only roles associated with strictly more than 2 users.\n5. Display the role description and total number of users using the required column aliases.\n\n> **⚠️ Important Requirement**: The condition applies to the aggregated count, so `HAVING` must be used instead of `WHERE`.",
    "rules": [
      "1. Join role and contact_role tables on ROLE_ID.",
      "2. Group records by r.ROLE_ID and r.ROLE_DESCRIPTION.",
      "3. Count associated users using COUNT(cr.USER_ID).",
      "4. Filter aggregated groups using HAVING COUNT(cr.USER_ID) > 2.",
      "5. Use exact aliases: \"ROLE DESCRIPTION\" and \"TOTAL USERS\"."
    ],
    "concepts": [
      "JOIN",
      "COUNT()",
      "GROUP BY",
      "HAVING",
      "Aggregate Functions"
    ],
    "tableSchema": [
      {
        "name": "role",
        "columns": [
          { "name": "ROLE_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ROLE_DESCRIPTION", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "contact_role",
        "columns": [
          { "name": "CONTACT_ROLE_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ROLE_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "USER_ID", "type": "INTEGER", "primaryKey": false }
        ]
      },
      {
        "name": "users",
        "columns": [
          { "name": "USER_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "FIRST_NAME", "type": "TEXT", "primaryKey": false },
          { "name": "LAST_NAME", "type": "TEXT", "primaryKey": false }
        ]
      }
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 3,
      "tables": [
        {
          "name": "role",
          "columns": [
            { "name": "ROLE_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "ROLE_DESCRIPTION", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "contact_role",
          "columns": [
            { "name": "CONTACT_ROLE_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "ROLE_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "USER_ID", "type": "INTEGER", "primaryKey": false }
          ]
        },
        {
          "name": "users",
          "columns": [
            { "name": "USER_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "FIRST_NAME", "type": "TEXT", "primaryKey": false },
            { "name": "LAST_NAME", "type": "TEXT", "primaryKey": false }
          ]
        }
      ]
    },
    "examples": [
      {
        "title": "Example 1 (Multiple Roles with Differing Counts)",
        "input": {
          "role": [
            { "ROLE_ID": 1, "ROLE_DESCRIPTION": "Friend" },
            { "ROLE_ID": 2, "ROLE_DESCRIPTION": "Colleague" },
            { "ROLE_ID": 3, "ROLE_DESCRIPTION": "Family" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 101, "ROLE_ID": 1, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 102, "ROLE_ID": 1, "USER_ID": 2 },
            { "CONTACT_ROLE_ID": 103, "ROLE_ID": 1, "USER_ID": 3 },
            { "CONTACT_ROLE_ID": 104, "ROLE_ID": 1, "USER_ID": 4 },
            { "CONTACT_ROLE_ID": 105, "ROLE_ID": 2, "USER_ID": 5 },
            { "CONTACT_ROLE_ID": 106, "ROLE_ID": 2, "USER_ID": 6 },
            { "CONTACT_ROLE_ID": 107, "ROLE_ID": 3, "USER_ID": 7 },
            { "CONTACT_ROLE_ID": 108, "ROLE_ID": 3, "USER_ID": 8 },
            { "CONTACT_ROLE_ID": 109, "ROLE_ID": 3, "USER_ID": 9 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma" },
            { "USER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Roy" },
            { "USER_ID": 3, "FIRST_NAME": "Neha", "LAST_NAME": "Das" },
            { "USER_ID": 4, "FIRST_NAME": "Rahul", "LAST_NAME": "Kumar" },
            { "USER_ID": 5, "FIRST_NAME": "Ankit", "LAST_NAME": "Singh" },
            { "USER_ID": 6, "FIRST_NAME": "Priya", "LAST_NAME": "Gupta" },
            { "USER_ID": 7, "FIRST_NAME": "Karan", "LAST_NAME": "Roy" },
            { "USER_ID": 8, "FIRST_NAME": "Pooja", "LAST_NAME": "Das" },
            { "USER_ID": 9, "FIRST_NAME": "Vikas", "LAST_NAME": "Shah" }
          ]
        },
        "output": [
          {
            "ROLE DESCRIPTION": "Family",
            "TOTAL USERS": 3
          },
          {
            "ROLE DESCRIPTION": "Friend",
            "TOTAL USERS": 4
          }
        ],
        "explanation": "Friend has 4 users and Family has 3 users, so both satisfy COUNT > 2. Colleague has only 2 users and is excluded."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  r.ROLE_DESCRIPTION AS \"ROLE DESCRIPTION\",\n  COUNT(cr.USER_ID) AS \"TOTAL USERS\"\nFROM role r\nJOIN contact_role cr ON r.ROLE_ID = cr.ROLE_ID\nGROUP BY r.ROLE_ID, r.ROLE_DESCRIPTION\nHAVING COUNT(cr.USER_ID) > 2;",
    "explanation": "Find each contact role, count the number of users associated with that role, and display only roles having more than 2 users:\n1. Join the `role` and `contact_role` tables using `ROLE_ID`.\n2. Group the records according to the contact role.\n3. Use `COUNT()` to calculate the number of users associated with each role.\n4. Use `HAVING COUNT(*) > 2` to filter for roles associated with strictly more than 2 users.\n5. Display the role description and total number of users with required aliases.",
    "expectedColumns": [
      "ROLE DESCRIPTION",
      "TOTAL USERS"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multiple roles with different user counts",
        "isHidden": false,
        "data": {
          "role": [
            { "ROLE_ID": 1, "ROLE_DESCRIPTION": "Friend" },
            { "ROLE_ID": 2, "ROLE_DESCRIPTION": "Colleague" },
            { "ROLE_ID": 3, "ROLE_DESCRIPTION": "Family" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 101, "ROLE_ID": 1, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 102, "ROLE_ID": 1, "USER_ID": 2 },
            { "CONTACT_ROLE_ID": 103, "ROLE_ID": 1, "USER_ID": 3 },
            { "CONTACT_ROLE_ID": 104, "ROLE_ID": 1, "USER_ID": 4 },
            { "CONTACT_ROLE_ID": 105, "ROLE_ID": 2, "USER_ID": 5 },
            { "CONTACT_ROLE_ID": 106, "ROLE_ID": 2, "USER_ID": 6 },
            { "CONTACT_ROLE_ID": 107, "ROLE_ID": 3, "USER_ID": 7 },
            { "CONTACT_ROLE_ID": 108, "ROLE_ID": 3, "USER_ID": 8 },
            { "CONTACT_ROLE_ID": 109, "ROLE_ID": 3, "USER_ID": 9 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma" },
            { "USER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Roy" },
            { "USER_ID": 3, "FIRST_NAME": "Neha", "LAST_NAME": "Das" },
            { "USER_ID": 4, "FIRST_NAME": "Rahul", "LAST_NAME": "Kumar" },
            { "USER_ID": 5, "FIRST_NAME": "Ankit", "LAST_NAME": "Singh" },
            { "USER_ID": 6, "FIRST_NAME": "Priya", "LAST_NAME": "Gupta" },
            { "USER_ID": 7, "FIRST_NAME": "Karan", "LAST_NAME": "Roy" },
            { "USER_ID": 8, "FIRST_NAME": "Pooja", "LAST_NAME": "Das" },
            { "USER_ID": 9, "FIRST_NAME": "Vikas", "LAST_NAME": "Shah" }
          ]
        },
        "expected": [
          {
            "ROLE DESCRIPTION": "Family",
            "TOTAL USERS": 3
          },
          {
            "ROLE DESCRIPTION": "Friend",
            "TOTAL USERS": 4
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Role with exactly 2 users (Strict Threshold)",
        "isHidden": false,
        "data": {
          "role": [
            { "ROLE_ID": 1, "ROLE_DESCRIPTION": "Friend" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 101, "ROLE_ID": 1, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 102, "ROLE_ID": 1, "USER_ID": 2 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma" },
            { "USER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Roy" }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Role with exactly 3 users",
        "isHidden": false,
        "data": {
          "role": [
            { "ROLE_ID": 1, "ROLE_DESCRIPTION": "Colleague" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 101, "ROLE_ID": 1, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 102, "ROLE_ID": 1, "USER_ID": 2 },
            { "CONTACT_ROLE_ID": 103, "ROLE_ID": 1, "USER_ID": 3 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma" },
            { "USER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Roy" },
            { "USER_ID": 3, "FIRST_NAME": "Neha", "LAST_NAME": "Das" }
          ]
        },
        "expected": [
          {
            "ROLE DESCRIPTION": "Colleague",
            "TOTAL USERS": 3
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — No role has more than 2 users (Empty Result Set)",
        "isHidden": false,
        "data": {
          "role": [
            { "ROLE_ID": 1, "ROLE_DESCRIPTION": "Friend" },
            { "ROLE_ID": 2, "ROLE_DESCRIPTION": "Family" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 101, "ROLE_ID": 1, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 102, "ROLE_ID": 1, "USER_ID": 2 },
            { "CONTACT_ROLE_ID": 103, "ROLE_ID": 2, "USER_ID": 3 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma" },
            { "USER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Roy" },
            { "USER_ID": 3, "FIRST_NAME": "Neha", "LAST_NAME": "Das" }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Large Membership Community Roles",
        "isHidden": true,
        "data": {
          "role": [
            { "ROLE_ID": 10, "ROLE_DESCRIPTION": "Community Member" },
            { "ROLE_ID": 20, "ROLE_DESCRIPTION": "Guest" }
          ],
          "contact_role": [
            { "CONTACT_ROLE_ID": 201, "ROLE_ID": 10, "USER_ID": 1 },
            { "CONTACT_ROLE_ID": 202, "ROLE_ID": 10, "USER_ID": 2 },
            { "CONTACT_ROLE_ID": 203, "ROLE_ID": 10, "USER_ID": 3 },
            { "CONTACT_ROLE_ID": 204, "ROLE_ID": 10, "USER_ID": 4 },
            { "CONTACT_ROLE_ID": 205, "ROLE_ID": 10, "USER_ID": 5 },
            { "CONTACT_ROLE_ID": 206, "ROLE_ID": 20, "USER_ID": 6 }
          ],
          "users": [
            { "USER_ID": 1, "FIRST_NAME": "U1", "LAST_NAME": "L1" },
            { "USER_ID": 2, "FIRST_NAME": "U2", "LAST_NAME": "L2" },
            { "USER_ID": 3, "FIRST_NAME": "U3", "LAST_NAME": "L3" },
            { "USER_ID": 4, "FIRST_NAME": "U4", "LAST_NAME": "L4" },
            { "USER_ID": 5, "FIRST_NAME": "U5", "LAST_NAME": "L5" },
            { "USER_ID": 6, "FIRST_NAME": "U6", "LAST_NAME": "L6" }
          ]
        },
        "expected": [
          {
            "ROLE DESCRIPTION": "Community Member",
            "TOTAL USERS": 5
          }
        ]
      }
    ]
  }
];

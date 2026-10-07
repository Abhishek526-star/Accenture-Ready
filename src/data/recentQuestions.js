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
    "id": "recent-dsa-017",
    "track": "dsa",
    "dateTag": "19th Sept 2026 • Shift 1",
    "examDate": "2026-09-19",
    "shift": "Shift 1",
    "title": "Count Numbers Whose Square Ends With D",
    "difficulty": "Easy",
    "category": "Mathematics / Number Theory & Modulo Arithmetic",
    "pattern": "Loop + Square + Last Digit",
    "rewardXp": 50,
    "targetMins": 15,
    "source": "Accenture Assessment 19th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given two integers `N` and `D`.\n\nYour task is to consider every integer from `1` to `N`, calculate its square, and check whether the last digit of the square is equal to `D`.\n\nReturn the count of numbers whose square ends with digit `D`.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint countMatchingSquares(int N, int D);\n```\n- **Input Specification**:\n  - `input1 (N)`: An integer representing the upper limit (1 to N).\n  - `input2 (D)`: An integer representing the digit to be matched (0 to 9).\n- **Output Specification**:\n  - Return an integer representing the count of numbers from `1` to `N` whose square has `D` as its last digit.\n\n---\n\n### 📌 Given Example:\n**Input**: `N = 5, D = 9`  \n**Output**: `1`  \n\n**Explanation**:\nWe check every number from 1 to 5:\n\n| Number | Square | Last Digit (`square % 10`) | Matches D = 9 |\n| :---: | :---: | :---: | :---: |\n| 1 | 1 | 1 | ❌ |\n| 2 | 4 | 4 | ❌ |\n| 3 | 9 | 9 | ✅ |\n| 4 | 16 | 6 | ❌ |\n| 5 | 25 | 5 | ❌ |\n\nOnly 3^2 = 9 ends with 9.\nTherefore, the output is `1`.\n\n---\n\n### 💡 Mathematical Walkthrough & `% 10` Property:\n- The remainder when any integer is divided by 10 (`square % 10`) extracts its unit / last digit.\n  - `16 % 10 = 6`\n  - `25 % 10 = 5`\n  - `49 % 10 = 9`\n  - `100 % 10 = 0`\n- **Note**: The question checks the **last digit of the square**, not whether the square itself is equal to D. For example, when D = 6, 4^2 = 16 is counted because its last digit is 6.\n- **Overflow Prevention**: For large i, i \\times i can exceed standard 32-bit signed integer limits (2 \\times 10^9). Use a 64-bit integer (`1LL * i * i` in C++, `long` in Java/C#, native big-number support in Python/JS) before taking modulo 10.\n\n---\n\n### ⚡ Complexity:\n- **Time Complexity**: O(N) — a single linear loop from 1 to N.\n- **Space Complexity**: O(1) — constant accumulator variable.",
    "rules": [
      "1. Initialize count = 0.",
      "2. Iterate integer i from 1 up to N (inclusive).",
      "3. Compute square = i * i (using 64-bit to prevent overflow).",
      "4. Extract last digit = square % 10.",
      "5. If last digit equals D, increment count.",
      "6. Return the total count."
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "0 <= D <= 9",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 5, D = 9",
        "inputRaw": {
          "N": 5,
          "D": 9
        },
        "expectedOutput": "1",
        "explanation": "Numbers 1 to 5: only 3² = 9 ends with digit 9. Total count = 1."
      },
      {
        "id": "tc-2",
        "input": "N = 10, D = 6",
        "inputRaw": {
          "N": 10,
          "D": 6
        },
        "expectedOutput": "2",
        "explanation": "Numbers 1 to 10: 4² = 16 (ends in 6) and 6² = 36 (ends in 6). Total count = 2."
      },
      {
        "id": "tc-3",
        "input": "N = 10, D = 5",
        "inputRaw": {
          "N": 10,
          "D": 5
        },
        "expectedOutput": "1",
        "explanation": "Numbers 1 to 10: only 5² = 25 ends with digit 5. Total count = 1."
      },
      {
        "id": "tc-4",
        "input": "N = 10, D = 0",
        "inputRaw": {
          "N": 10,
          "D": 0
        },
        "expectedOutput": "1",
        "explanation": "Numbers 1 to 10: only 10² = 100 ends with digit 0. Total count = 1."
      },
      {
        "id": "tc-5",
        "input": "N = 10, D = 1",
        "inputRaw": {
          "N": 10,
          "D": 1
        },
        "expectedOutput": "2",
        "explanation": "Numbers 1 to 10: 1² = 1 and 9² = 81 both end with digit 1. Total count = 2."
      },
      {
        "id": "tc-6",
        "input": "N = 5, D = 6",
        "inputRaw": {
          "N": 5,
          "D": 6
        },
        "expectedOutput": "1",
        "explanation": "Numbers 1 to 5: only 4² = 16 ends with digit 6. Total count = 1."
      },
      {
        "id": "tc-7",
        "input": "N = 25, D = 4",
        "inputRaw": {
          "N": 25,
          "D": 4
        },
        "expectedOutput": "5",
        "explanation": "Numbers with square ending in 4 are numbers ending in 2 or 8: 2 (4), 8 (64), 12 (144), 18 (324), 22 (484). Total count = 5."
      }
    ],
    "starterCode": {
      "python": "def countMatchingSquares(N, D):\n    # TODO: Return count of numbers from 1 to N whose square ends with digit D\n    return 0",
      "java": "public class Solution {\n    public static int countMatchingSquares(int N, int D) {\n        // TODO: Return count of numbers from 1 to N whose square ends with digit D\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\n\nint countMatchingSquares(int N, int D) {\n    // TODO: Return count of numbers from 1 to N whose square ends with digit D\n    return 0;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountMatchingSquares(int N, int D) {\n        // TODO: Return count of numbers from 1 to N whose square ends with digit D\n        return 0;\n    }\n}",
      "javascript": "function countMatchingSquares(N, D) {\n  // TODO: Return count of numbers from 1 to N whose square ends with digit D\n  return 0;\n}"
    },
    "solutions": {
      "python": "def countMatchingSquares(N, D):\n    count = 0\n    for i in range(1, N + 1):\n        square = i * i\n        if square % 10 == D:\n            count += 1\n    return count",
      "java": "public class Solution {\n    public static int countMatchingSquares(int N, int D) {\n        int count = 0;\n        for (int i = 1; i <= N; i++) {\n            long square = (long) i * i;\n            if (square % 10 == D) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\n\nint countMatchingSquares(int N, int D) {\n    int count = 0;\n    for (int i = 1; i <= N; i++) {\n        long long square = 1LL * i * i;\n        if (square % 10 == D) {\n            count++;\n        }\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountMatchingSquares(int N, int D) {\n        int count = 0;\n        for (int i = 1; i <= N; i++) {\n            long square = (long) i * i;\n            if (square % 10 == D) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "javascript": "function countMatchingSquares(N, D) {\n  let count = 0;\n  for (let i = 1; i <= N; i++) {\n    const square = i * i;\n    if (square % 10 === D) {\n      count++;\n    }\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-018",
    "track": "dsa",
    "dateTag": "23rd Sept 2026 • Shift 1",
    "examDate": "2026-09-23",
    "shift": "Shift 1",
    "title": "Alternating String Substrings",
    "difficulty": "Medium",
    "category": "Strings / Substring Search & Pattern Matching",
    "pattern": "Alternating Parity + Substring Search",
    "rewardXp": 75,
    "targetMins": 20,
    "source": "Accenture Assessment 23rd Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given two equal-length strings `s1` and `s2`, and an integer `K`.\n\nYou have to build strings `T` of length `K` by:\n1. Starting from any valid index `i` (where `0 <= i <= length - K`).\n2. Taking characters alternately from `s1` and `s2` (even relative offset from `s1`, odd relative offset from `s2`).\n3. Continuing until the length of `T` becomes `K`.\n\nYour task is to find and return the count of these `T` strings which appear as a substring in either `s1` or `s2`.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint countAlternatingStrings(int K, string s1, string s2);\n```\n\n- **Input Specification:**\n  - `input1 (K)`: An integer representing the length of string `T`.\n  - `input2 (s1)`: A string containing lowercase English alphabets (a-z).\n  - `input3 (s2)`: A string containing lowercase English alphabets (a-z), equal in length to `s1`.\n\n- **Output Specification:**\n  - Return an integer representing the count of generated `T` strings that appear as a substring in either `s1` or `s2`.\n\n---\n\n### 📌 Given Example:\n**Input:**\n```text\nK = 3\ns1 = \"abcdebrd\"\ns2 = \"pqrstcse\"\n```\n\n**Output:** `2`\n\n**Explanation:**\nFor `K = 3`, we check all starting indices `0 <= i <= n - K`:\n\n| Start Index | Generated T | Found in s1? | Found in s2? | Counted? |\n| :---: | :---: | :---: | :---: | :---: |\n| 0 | `\"aqc\"` | ❌ No | ❌ No | ❌ No |\n| 1 | `\"brd\"` | ✅ Yes | ❌ No | ✅ Count = 1 |\n| 2 | `\"cse\"` | ❌ No | ✅ Yes | ✅ Count = 2 |\n| 3 | `\"dtb\"` | ❌ No | ❌ No | ❌ No |\n| 4 | `\"ecr\"` | ❌ No | ❌ No | ❌ No |\n| 5 | `\"bsd\"` | ❌ No | ❌ No | ❌ No |\n\nTotal count of matching alternating substrings = **2** (`\"brd\"` and `\"cse\"`).\n\n---\n\n### 💡 Algorithm & Parity Rule:\n1. For every starting index `start` from `0` to `n - K`.\n2. Construct string `T` of length `K`.\n3. For each `j` from `0` to `K - 1`:\n   - If `j % 2 == 0`, take `s1[start + j]`.\n   - If `j % 2 == 1`, take `s2[start + j]`.\n4. Check if `T` exists in `s1` or `s2`.\n5. If `T` is present in either string, increment `count`.\n6. Return `count`.\n\n---\n\n### ⚡ Complexity:\nWe check all starting indices `0 <= i <= N - K`, so there are `N - K + 1` valid starting positions. **Time Complexity:** `O((N - K + 1) x (K + N))`, which is at most `O(N²K)` in the worst case using naive substring search, or approximately `O(NK)` using KMP/Rolling Hash. **Space Complexity:** `O(K)` auxiliary space for storing the candidate string `T`.",
    "rules": [
      "1. Initialize count = 0 and n = length of s1.",
      "2. Iterate start index from 0 to n - K.",
      "3. Construct candidate string T of length K: for j in 0..K-1, append s1[start + j] if j is even, else s2[start + j].",
      "4. Check if T is a substring in s1 OR s2.",
      "5. If yes, increment count.",
      "6. Return the total count."
    ],
    "constraints": [
      "1 <= K <= length(s1)",
      "1 <= length(s1) = length(s2) <= 10^4",
      "s1 and s2 contain lowercase English letters ('a'-'z')",
      "Time Complexity: O(N^2)",
      "Space Complexity: O(K)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "K = 3, s1 = \"abcdebrd\", s2 = \"pqrstcse\"",
        "inputRaw": {
          "K": 3,
          "s1": "abcdebrd",
          "s2": "pqrstcse"
        },
        "expectedOutput": "2",
        "explanation": "Valid starts generate: index 1 -> 'brd' (in s1), index 2 -> 'cse' (in s2). Total matching count = 2."
      },
      {
        "id": "tc-2",
        "input": "K = 1, s1 = \"abc\", s2 = \"xyz\"",
        "inputRaw": {
          "K": 1,
          "s1": "abc",
          "s2": "xyz"
        },
        "expectedOutput": "3",
        "explanation": "K = 1 gives single characters from s1: 'a', 'b', 'c'. All three occur as substrings in s1. Total count = 3."
      },
      {
        "id": "tc-3",
        "input": "K = 2, s1 = \"abcd\", s2 = \"xyza\"",
        "inputRaw": {
          "K": 2,
          "s1": "abcd",
          "s2": "xyza"
        },
        "expectedOutput": "0",
        "explanation": "Generated strings: 'ay', 'bz', 'ca'. None of them appear in either s1 or s2. Total count = 0."
      },
      {
        "id": "tc-4",
        "input": "K = 2, s1 = \"abcd\", s2 = \"bcda\"",
        "inputRaw": {
          "K": 2,
          "s1": "abcd",
          "s2": "bcda"
        },
        "expectedOutput": "0",
        "explanation": "Generated strings: 'ac', 'bd', 'ca'. Since substrings are non-circular, none of them appear in s1 ('ab', 'bc', 'cd') or s2 ('bc', 'cd', 'da'). Total count = 0."
      },
      {
        "id": "tc-5",
        "input": "K = 3, s1 = \"abcabc\", s2 = \"xyzabc\"",
        "inputRaw": {
          "K": 3,
          "s1": "abcabc",
          "s2": "xyzabc"
        },
        "expectedOutput": "2",
        "explanation": "Alternating generated strings tested against s1 and s2 yield 2 matching substrings."
      },
      {
        "id": "tc-6",
        "input": "K = 2, s1 = \"aaaa\", s2 = \"aaaa\"",
        "inputRaw": {
          "K": 2,
          "s1": "aaaa",
          "s2": "aaaa"
        },
        "expectedOutput": "3",
        "explanation": "Every valid starting index 0, 1, 2 produces 'aa', which exists in both s1 and s2. Total count = 3."
      }
    ],
    "starterCode": {
      "python": "def countAlternatingStrings(K, s1, s2):\n    # TODO: Return count of generated T strings of length K that appear in s1 or s2\n    return 0",
      "java": "public class Solution {\n    public static int countAlternatingStrings(int K, String s1, String s2) {\n        // TODO: Return count of generated T strings of length K that appear in s1 or s2\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint countAlternatingStrings(int K, string s1, string s2) {\n    // TODO: Return count of generated T strings of length K that appear in s1 or s2\n    return 0;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountAlternatingStrings(int K, string s1, string s2) {\n        // TODO: Return count of generated T strings of length K that appear in s1 or s2\n        return 0;\n    }\n}",
      "javascript": "function countAlternatingStrings(K, s1, s2) {\n  // TODO: Return count of generated T strings of length K that appear in s1 or s2\n  return 0;\n}"
    },
    "solutions": {
      "python": "def countAlternatingStrings(K, s1, s2):\n    n = len(s1)\n    count = 0\n    for start in range(n - K + 1):\n        T = \"\".join(s1[start + j] if j % 2 == 0 else s2[start + j] for j in range(K))\n        if T in s1 or T in s2:\n            count += 1\n    return count",
      "java": "public class Solution {\n    public static int countAlternatingStrings(int K, String s1, String s2) {\n        int n = s1.length();\n        int count = 0;\n        for (int start = 0; start + K <= n; start++) {\n            StringBuilder sb = new StringBuilder();\n            for (int j = 0; j < K; j++) {\n                if (j % 2 == 0) {\n                    sb.append(s1.charAt(start + j));\n                } else {\n                    sb.append(s2.charAt(start + j));\n                }\n            }\n            String T = sb.toString();\n            if (s1.contains(T) || s2.contains(T)) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint countAlternatingStrings(int K, string s1, string s2) {\n    int n = s1.length();\n    int count = 0;\n    for (int start = 0; start + K <= n; start++) {\n        string T = \"\";\n        for (int j = 0; j < K; j++) {\n            if (j % 2 == 0) {\n                T += s1[start + j];\n            } else {\n                T += s2[start + j];\n            }\n        }\n        if (s1.find(T) != string::npos || s2.find(T) != string::npos) {\n            count++;\n        }\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountAlternatingStrings(int K, string s1, string s2) {\n        int n = s1.Length;\n        int count = 0;\n        for (int start = 0; start + K <= n; start++) {\n            char[] arr = new char[K];\n            for (int j = 0; j < K; j++) {\n                arr[j] = (j % 2 == 0) ? s1[start + j] : s2[start + j];\n            }\n            string T = new string(arr);\n            if (s1.Contains(T) || s2.Contains(T)) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      "javascript": "function countAlternatingStrings(K, s1, s2) {\n  const n = s1.length;\n  let count = 0;\n  for (let start = 0; start + K <= n; start++) {\n    let T = '';\n    for (let j = 0; j < K; j++) {\n      T += (j % 2 === 0) ? s1[start + j] : s2[start + j];\n    }\n    if (s1.includes(T) || s2.includes(T)) {\n      count++;\n    }\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-019",
    "track": "dsa",
    "dateTag": "28th Sept 2026 • Shift 1",
    "examDate": "2026-09-28",
    "shift": "Shift 1",
    "title": "Total Moonlight Score",
    "difficulty": "Medium",
    "category": "Arrays / Consecutive Pairs & Prime Check",
    "pattern": "Linear Scan + Parity & Prime Check",
    "rewardXp": 75,
    "targetMins": 20,
    "source": "Accenture Assessment 28th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "In the Enchanted Forest of Lumeria, each glowing stone has a Moonlight Intensity represented by an integer in an array `A` of size `N`.\n\nThe Total Moonlight Score reflects the harmony among these stones.\n\nTo calculate the score:\n1. **For every pair of consecutive stones** (`i` from `0` to `N - 2`):\n   - If their sum `A[i] + A[i + 1] <= 10`, add their sum to the score.\n   - Otherwise, add their product `A[i] * A[i + 1]` to the score.\n2. **For each stone at index i** (`0 <= i < N`):\n   - If `i` is even, add `A[i] * i` to the score.\n   - If `i` is odd, add `A[i]` to the score.\n3. **After calculating both parts**, if `N` is prime, double the final score.\n\nReturn an integer representing the Total Moonlight Score.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint totalMoonlightScore(int N, vector<int>& A);\n```\n\n- **Input Specification:**\n  - `input1 (N)`: An integer value `N`, representing the number of stones.\n  - `input2 (A)`: An integer array `A`, representing the moonlight intensities.\n\n- **Output Specification:**\n  - Return an integer value representing the Total Moonlight Score.\n\n---\n\n### 📌 Given Example:\n**Input:**\n```text\nN = 4\nA = [3, 5, 2, 9]\n```\n\n**Output:** `51`\n\n**Explanation:**\n- **Part 1: Consecutive Stone Pairs**\n  - Pair (3, 5): Sum = 8 <= 10 -> add 8\n  - Pair (5, 2): Sum = 7 <= 10 -> add 7\n  - Pair (2, 9): Sum = 11 > 10 -> add 2 * 9 = 18\n  - Pair Score = 8 + 7 + 18 = 33\n- **Part 2: Index-Based Calculation**\n  - i = 0 (even): 3 * 0 = 0\n  - i = 1 (odd): 5\n  - i = 2 (even): 2 * 2 = 4\n  - i = 3 (odd): 9\n  - Index Score = 0 + 5 + 4 + 9 = 18\n- **Combine:** 33 + 18 = 51\n- **Prime Check:** N = 4 is not prime, so score remains 51.",
    "rules": [
      "1. Calculate consecutive pair score: For i from 0 to N-2, if A[i] + A[i+1] <= 10 add sum, else add A[i] * A[i+1].",
      "2. Calculate index score: For i from 0 to N-1, if i is even add A[i] * i, else add A[i].",
      "3. Total score = pair score + index score.",
      "4. If N is a prime number (N >= 2 and divisible only by 1 and N), double the total score: score *= 2.",
      "5. Return total score as an integer."
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "1 <= A[i] <= 10^4",
      "Time Complexity: O(N + sqrt(N))",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "N = 4, A = [3, 5, 2, 9]",
        "inputRaw": {
          "N": 4,
          "A": [3, 5, 2, 9]
        },
        "expectedOutput": "51",
        "explanation": "Pairs: 8 + 7 + 18 = 33. Indices: 0 + 5 + 4 + 9 = 18. Combined: 51. 4 is not prime. Result: 51."
      },
      {
        "id": "tc-2",
        "input": "N = 3, A = [1, 2, 3]",
        "inputRaw": {
          "N": 3,
          "A": [1, 2, 3]
        },
        "expectedOutput": "32",
        "explanation": "Pairs: (1+2=3) + (2+3=5) = 8. Indices: 1*0 + 2 + 3*2 = 8. Combined: 16. N = 3 is prime -> 16 * 2 = 32."
      },
      {
        "id": "tc-3",
        "input": "N = 4, A = [1, 1, 1, 1]",
        "inputRaw": {
          "N": 4,
          "A": [1, 1, 1, 1]
        },
        "expectedOutput": "10",
        "explanation": "Pairs: 2 + 2 + 2 = 6. Indices: 0 + 1 + 2 + 1 = 4. Combined: 10. 4 is not prime. Result: 10."
      },
      {
        "id": "tc-4",
        "input": "N = 2, A = [6, 7]",
        "inputRaw": {
          "N": 2,
          "A": [6, 7]
        },
        "expectedOutput": "98",
        "explanation": "Pairs: 6+7=13 > 10 -> 6*7=42. Indices: 6*0 + 7 = 7. Combined: 49. N = 2 is prime -> 49 * 2 = 98."
      },
      {
        "id": "tc-5",
        "input": "N = 1, A = [5]",
        "inputRaw": {
          "N": 1,
          "A": [5]
        },
        "expectedOutput": "0",
        "explanation": "No consecutive pairs. Indices: 5 * 0 = 0. 1 is not prime. Result: 0."
      }
    ],
    "starterCode": {
      "python": "def totalMoonlightScore(N, A):\n    # TODO: Calculate consecutive pairs, index parity score, and double if N is prime\n    return 0",
      "java": "public class Solution {\n    public static int totalMoonlightScore(int N, int[] A) {\n        // TODO: Calculate consecutive pairs, index parity score, and double if N is prime\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint totalMoonlightScore(int N, vector<int>& A) {\n    // TODO: Calculate consecutive pairs, index parity score, and double if N is prime\n    return 0;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int TotalMoonlightScore(int N, int[] A) {\n        // TODO: Calculate consecutive pairs, index parity score, and double if N is prime\n        return 0;\n    }\n}",
      "javascript": "function totalMoonlightScore(N, A) {\n  // TODO: Calculate consecutive pairs, index parity score, and double if N is prime\n  return 0;\n}"
    },
    "solutions": {
      "python": "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\ndef totalMoonlightScore(N, A):\n    score = 0\n    # Part 1: Consecutive pairs\n    for i in range(N - 1):\n        s = A[i] + A[i + 1]\n        if s <= 10:\n            score += s\n        else:\n            score += A[i] * A[i + 1]\n    # Part 2: Index-based calculation\n    for i in range(N):\n        if i % 2 == 0:\n            score += A[i] * i\n        else:\n            score += A[i]\n    # Part 3: Double if N is prime\n    if is_prime(N):\n        score *= 2\n    return score",
      "java": "public class Solution {\n    private static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static int totalMoonlightScore(int N, int[] A) {\n        long score = 0;\n        for (int i = 0; i < N - 1; i++) {\n            int sum = A[i] + A[i + 1];\n            if (sum <= 10) {\n                score += sum;\n            } else {\n                score += (long) A[i] * A[i + 1];\n            }\n        }\n        for (int i = 0; i < N; i++) {\n            if (i % 2 == 0) {\n                score += (long) A[i] * i;\n            } else {\n                score += A[i];\n            }\n        }\n        if (isPrime(N)) {\n            score *= 2;\n        }\n        return (int) score;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint totalMoonlightScore(int N, vector<int>& A) {\n    long long score = 0;\n    for (int i = 0; i < N - 1; i++) {\n        int sum = A[i] + A[i + 1];\n        if (sum <= 10) {\n            score += sum;\n        } else {\n            score += 1LL * A[i] * A[i + 1];\n        }\n    }\n    for (int i = 0; i < N; i++) {\n        if (i % 2 == 0) {\n            score += 1LL * A[i] * i;\n        } else {\n            score += A[i];\n        }\n    }\n    if (isPrime(N)) {\n        score *= 2;\n    }\n    return (int) score;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    private static bool IsPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static int TotalMoonlightScore(int N, int[] A) {\n        long score = 0;\n        for (int i = 0; i < N - 1; i++) {\n            int sum = A[i] + A[i + 1];\n            if (sum <= 10) score += sum;\n            else score += (long)A[i] * A[i + 1];\n        }\n        for (int i = 0; i < N; i++) {\n            if (i % 2 == 0) score += (long)A[i] * i;\n            else score += A[i];\n        }\n        if (IsPrime(N)) score *= 2;\n        return (int)score;\n    }\n}",
      "javascript": "function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n\nfunction totalMoonlightScore(N, A) {\n  let score = 0;\n  for (let i = 0; i < N - 1; i++) {\n    const sum = A[i] + A[i + 1];\n    if (sum <= 10) {\n      score += sum;\n    } else {\n      score += A[i] * A[i + 1];\n    }\n  }\n  for (let i = 0; i < N; i++) {\n    if (i % 2 === 0) {\n      score += A[i] * i;\n    } else {\n      score += A[i];\n    }\n  }\n  if (isPrime(N)) {\n    score *= 2;\n  }\n  return score;\n}"
    }
  },
  {
    "id": "recent-dsa-020",
    "track": "dsa",
    "dateTag": "28th Sept 2026 • Shift 2",
    "examDate": "2026-09-28",
    "shift": "Shift 2",
    "title": "Same Character Rows and Columns",
    "difficulty": "Easy",
    "category": "Strings / 2D Matrix & Row-Major Order",
    "pattern": "Matrix Row-Column Uniformity Traversal",
    "rewardXp": 50,
    "targetMins": 15,
    "source": "Accenture Assessment 28th Sept 2026 Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given a string `S` whose length is guaranteed to be a perfect square.\n\nLet `N` be the square root of the length of the string (`N = sqrt(len(S))`).\n\nYou have to build an `N x N` grid by filling the string in row-major order, from left to right and then top to bottom.\n\nAfter creating the grid, count how many rows and columns consist entirely of the same character.\n- A row or column is counted if all elements in that row or column are identical.\n\nReturn an integer representing the total number of such rows and columns.\n\n---\n\n### 📝 Function Declaration:\n```cpp\nint countSameRowsColumns(string S);\n```\n\n- **Input Specification:**\n  - `input1 (S)`: A string `S` consisting of lowercase English letters whose length is a perfect square.\n\n- **Output Specification:**\n  - Return an integer representing the count of rows and columns where all characters are identical.\n\n---\n\n### 📌 Given Example:\n**Input:**\n```text\nS = \"aaaabbbcc\"\n```\n\n**Output:** `1`\n\n**Explanation:**\n- Length of S = 9 -> N = sqrt(9) = 3.\n- The 3 x 3 grid in row-major order is:\n  ```text\n  a  a  a\n  a  b  b\n  b  c  c\n  ```\n- **Row Check:**\n  - Row 0: `a a a` -> All identical? ✅ Yes (Count = 1)\n  - Row 1: `a b b` -> All identical? ❌ No\n  - Row 2: `b c c` -> All identical? ❌ No\n  - Same rows = 1\n- **Column Check:**\n  - Column 0: `a a b` -> All identical? ❌ No\n  - Column 1: `a b c` -> All identical? ❌ No\n  - Column 2: `a b c` -> All identical? ❌ No\n  - Same columns = 0\n- **Total Count:** 1 + 0 = `1`.",
    "rules": [
      "1. Find grid dimension N = sqrt(length(S)).",
      "2. An element at row i and column j is at S[i * N + j].",
      "3. For each row i (0 to N-1), check if all S[i * N + j] equal S[i * N]. If yes, increment count.",
      "4. For each column j (0 to N-1), check if all S[i * N + j] equal S[j]. If yes, increment count.",
      "5. Return the total count."
    ],
    "constraints": [
      "1 <= S.length <= 10^4",
      "S.length is a perfect square",
      "S contains only lowercase English alphabets ('a'-'z')",
      "Time Complexity: O(|S|) = O(N^2)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "S = \"aaaabbbcc\"",
        "inputRaw": {
          "S": "aaaabbbcc"
        },
        "expectedOutput": "1",
        "explanation": "3x3 grid: row 0 is 'aaa' (identical). No other row/column is uniform. Total: 1."
      },
      {
        "id": "tc-2",
        "input": "S = \"aaaaaaaaa\"",
        "inputRaw": {
          "S": "aaaaaaaaa"
        },
        "expectedOutput": "6",
        "explanation": "3x3 grid: all 3 rows and all 3 columns are completely identical ('aaa'). 3 + 3 = 6."
      },
      {
        "id": "tc-3",
        "input": "S = \"abcdefghi\"",
        "inputRaw": {
          "S": "abcdefghi"
        },
        "expectedOutput": "0",
        "explanation": "3x3 grid with all distinct characters: no identical rows or columns. Total: 0."
      },
      {
        "id": "tc-4",
        "input": "S = \"abcabcabc\"",
        "inputRaw": {
          "S": "abcabcabc"
        },
        "expectedOutput": "3",
        "explanation": "3x3 grid: rows are 'abc'. Columns are 'aaa', 'bbb', 'ccc' (all 3 columns are identical). Total: 3."
      },
      {
        "id": "tc-5",
        "input": "S = \"aabbbcccc\"",
        "inputRaw": {
          "S": "aabbbcccc"
        },
        "expectedOutput": "1",
        "explanation": "3x3 grid: row 2 is 'ccc' (identical). Total: 1."
      },
      {
        "id": "tc-6",
        "input": "S = \"a\"",
        "inputRaw": {
          "S": "a"
        },
        "expectedOutput": "2",
        "explanation": "1x1 grid: row 0 is 'a' (identical) and column 0 is 'a' (identical). Total: 2."
      }
    ],
    "starterCode": {
      "python": "def countSameRowsColumns(S):\n    # TODO: Return count of uniform rows and columns in the sqrt(len(S)) x sqrt(len(S)) grid\n    return 0",
      "java": "public class Solution {\n    public static int countSameRowsColumns(String S) {\n        // TODO: Return count of uniform rows and columns in the sqrt(len(S)) x sqrt(len(S)) grid\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint countSameRowsColumns(string S) {\n    // TODO: Return count of uniform rows and columns in the sqrt(len(S)) x sqrt(len(S)) grid\n    return 0;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountSameRowsColumns(string S) {\n        // TODO: Return count of uniform rows and columns in the sqrt(len(S)) x sqrt(len(S)) grid\n        return 0;\n    }\n}",
      "javascript": "function countSameRowsColumns(S) {\n  // TODO: Return count of uniform rows and columns in the sqrt(len(S)) x sqrt(len(S)) grid\n  return 0;\n}"
    },
    "solutions": {
      "python": "import math\n\ndef countSameRowsColumns(S):\n    n = int(math.isqrt(len(S)))\n    count = 0\n    # Check rows\n    for i in range(n):\n        first = S[i * n]\n        if all(S[i * n + j] == first for j in range(1, n)):\n            count += 1\n    # Check columns\n    for j in range(n):\n        first = S[j]\n        if all(S[i * n + j] == first for i in range(1, n)):\n            count += 1\n    return count",
      "java": "public class Solution {\n    public static int countSameRowsColumns(String S) {\n        int n = (int) Math.sqrt(S.length());\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            char first = S.charAt(i * n);\n            boolean same = true;\n            for (int j = 1; j < n; j++) {\n                if (S.charAt(i * n + j) != first) {\n                    same = false;\n                    break;\n                }\n            }\n            if (same) count++;\n        }\n        for (int j = 0; j < n; j++) {\n            char first = S.charAt(j);\n            boolean same = true;\n            for (int i = 1; i < n; i++) {\n                if (S.charAt(i * n + j) != first) {\n                    same = false;\n                    break;\n                }\n            }\n            if (same) count++;\n        }\n        return count;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint countSameRowsColumns(string S) {\n    int n = sqrt(S.length());\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        char first = S[i * n];\n        bool same = true;\n        for (int j = 1; j < n; j++) {\n            if (S[i * n + j] != first) {\n                same = false;\n                break;\n            }\n        }\n        if (same) count++;\n    }\n    for (int j = 0; j < n; j++) {\n        char first = S[j];\n        bool same = true;\n        for (int i = 1; i < n; i++) {\n            if (S[i * n + j] != first) {\n                same = false;\n                break;\n            }\n        }\n        if (same) count++;\n    }\n    return count;\n}",
      "csharp": "using System;\n\npublic class Solution {\n    public static int CountSameRowsColumns(string S) {\n        int n = (int)Math.Sqrt(S.Length);\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            char first = S[i * n];\n            bool same = true;\n            for (int j = 1; j < n; j++) {\n                if (S[i * n + j] != first) {\n                    same = false;\n                    break;\n                }\n            }\n            if (same) count++;\n        }\n        for (int j = 0; j < n; j++) {\n            char first = S[j];\n            bool same = true;\n            for (int i = 1; i < n; i++) {\n                if (S[i * n + j] != first) {\n                    same = false;\n                    break;\n                }\n            }\n            if (same) count++;\n        }\n        return count;\n    }\n}",
      "javascript": "function countSameRowsColumns(S) {\n  const n = Math.round(Math.sqrt(S.length));\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    const first = S[i * n];\n    let same = true;\n    for (let j = 1; j < n; j++) {\n      if (S[i * n + j] !== first) {\n        same = false;\n        break;\n      }\n    }\n    if (same) count++;\n  }\n  for (let j = 0; j < n; j++) {\n    const first = S[j];\n    let same = true;\n    for (let i = 1; i < n; i++) {\n      if (S[i * n + j] !== first) {\n        same = false;\n        break;\n      }\n    }\n    if (same) count++;\n  }\n  return count;\n}"
    }
  },
  {
    "id": "recent-dsa-021",
    "track": "dsa",
    "dateTag": "30th Sept 2026 • Shift 1",
    "examDate": "2026-09-30",
    "shift": "Shift 1",
    "title": "Rotate Array to the Right by K Steps",
    "difficulty": "Medium",
    "category": "Arrays / Array Manipulation & In-Place Rotation",
    "pattern": "Reversal Algorithm",
    "rewardXp": 50,
    "targetMins": 15,
    "source": "Accenture Assessment 30th Sept 2026 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Given an integer array `nums` and an integer `k`, rotate the array to the right by `k` steps **in-place**.\n\n---\n\n### 📌 Given Examples\n\n#### **Example 1**\n**Input:**\n```text\nnums = [1, 2, 3, 4, 5, 6, 7]\nk = 3\n```\n**Output:**\n```text\n[5, 6, 7, 1, 2, 3, 4]\n```\n\n#### **Example 2**\n**Input:**\n```text\nnums = [-1, -100, 3, 99]\nk = 2\n```\n**Output:**\n```text\n[3, 99, -1, -100]\n```\n\n---\n\n### 💡 Core Logic & Visual Intuition\nA right rotation by `k` means the **last `k` elements move to the beginning**, while the first `n - k` elements shift rightward.\n\nFor `nums = [1, 2, 3, 4, 5, 6, 7]` with `k = 3`:\n- Last 3 elements: `[5, 6, 7]`\n- Remaining elements: `[1, 2, 3, 4]`\n- Concatenation gives: `[5, 6, 7] + [1, 2, 3, 4] = [5, 6, 7, 1, 2, 3, 4]`\n\n---\n\n### 🔄 In-Place Approach (3-Step Reversal Algorithm)\nTo achieve **$O(1)$ auxiliary space** without allocating a second full-size array:\n1. **Step 1:** Reverse the entire array (`0` to `n - 1`).\n2. **Step 2:** Reverse the first `k` elements (`0` to `k - 1`).\n3. **Step 3:** Reverse the remaining `n - k` elements (`k` to `n - 1`).\n\n---\n\n### 🔍 Dry Run Walkthrough\n| Step | Action | Array State |\n| :--- | :--- | :--- |\n| **0** | **Original Array** | `[1, 2, 3, 4, 5, 6, 7]` |\n| **1** | **Reverse Entire Array** | `[7, 6, 5, 4, 3, 2, 1]` |\n| **2** | **Reverse First $k=3$ Elements** | `[5, 6, 7, 4, 3, 2, 1]` |\n| **3** | **Reverse Remaining $n-k=4$ Elements** | `[5, 6, 7, 1, 2, 3, 4]` |\n\n**Final Answer:** `[5, 6, 7, 1, 2, 3, 4]`\n\n---\n\n### 🧠 Why `k %= n`?\nIf `n = 7` and `k = 10`, rotating 7 times brings every element back to its original index.\nRotating 10 times is equivalent to rotating `10 % 7 = 3` times.\nNormalizing `k = k % n` avoids superfluous full array reversals and prevents index out-of-bounds errors when $k > n$.\n\n---\n\n### ⚠️ Important Exam Guidelines\n- The rotation **must be performed in-place**. Modifying the original array in $O(1)$ extra space is required.\n- $k$ can be greater than the array length, so normalize with `k %= n`.\n- Rotation direction is **right**, not left.\n- When $k = 0$ or $n <= 1$, the array remains unchanged.",
    "rules": [
      "1. The rotation must be performed in-place modifying the input array.",
      "2. k can be greater than array length n; normalize using k %= n.",
      "3. Direction is strictly to the right: last k elements shift to the beginning.",
      "4. Maintain linear time complexity O(N) with O(1) auxiliary space."
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "0 <= k <= 10^5",
      "Time Complexity: O(N)",
      "Space Complexity: O(1) in-place"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "nums = [1, 2, 3, 4, 5, 6, 7], k = 3",
        "inputRaw": {
          "nums": [1, 2, 3, 4, 5, 6, 7],
          "k": 3
        },
        "expectedOutput": "[5, 6, 7, 1, 2, 3, 4]",
        "explanation": "Rotating right by 3 brings the last 3 elements [5, 6, 7] to the front."
      },
      {
        "id": "tc-2",
        "input": "nums = [-1, -100, 3, 99], k = 2",
        "inputRaw": {
          "nums": [-1, -100, 3, 99],
          "k": 2
        },
        "expectedOutput": "[3, 99, -1, -100]",
        "explanation": "Rotating right by 2 brings the last 2 elements [3, 99] to the front."
      },
      {
        "id": "tc-3",
        "input": "nums = [1, 2, 3, 4, 5], k = 7",
        "inputRaw": {
          "nums": [1, 2, 3, 4, 5],
          "k": 7
        },
        "expectedOutput": "[4, 5, 1, 2, 3]",
        "explanation": "7 % 5 = 2. Rotating right by 2 shifts [4, 5] to the front."
      },
      {
        "id": "tc-4",
        "input": "nums = [1, 2, 3, 4], k = 0",
        "inputRaw": {
          "nums": [1, 2, 3, 4],
          "k": 0
        },
        "expectedOutput": "[1, 2, 3, 4]",
        "explanation": "k = 0 leaves the array unchanged."
      },
      {
        "id": "tc-5",
        "input": "nums = [10], k = 5",
        "inputRaw": {
          "nums": [10],
          "k": 5
        },
        "expectedOutput": "[10]",
        "explanation": "Single-element array remains identical after any number of rotations."
      }
    ],
    "starterCode": {
      "python": "def rotateArray(nums: list, k: int) -> None:\n    \"\"\"Do not return anything, modify nums in-place instead.\"\"\"\n    # TODO: Rotate nums to the right by k steps in-place\n    pass\n",
      "java": "public class Solution {\n    public static void rotateArray(int[] nums, int k) {\n        // TODO: Rotate nums to the right by k steps in-place\n    }\n}\n",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvoid rotateArray(vector<int>& nums, int k) {\n    // TODO: Rotate nums to the right by k steps in-place\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void RotateArray(int[] nums, int k) {\n        // TODO: Rotate nums to the right by k steps in-place\n    }\n}\n",
      "javascript": "function rotateArray(nums, k) {\n  // TODO: Rotate nums to the right by k steps in-place\n}\n"
    },
    "solutions": {
      "python": "def rotateArray(nums: list, k: int) -> None:\n    \"\"\"Rotates nums to the right by k steps in-place using 3-step reversal.\"\"\"\n    n = len(nums)\n    if n <= 1:\n        return\n    k %= n\n    if k == 0:\n        return\n\n    def reverse_range(left: int, right: int):\n        while left < right:\n            nums[left], nums[right] = nums[right], nums[left]\n            left += 1\n            right -= 1\n\n    # Step 1: Reverse entire array\n    reverse_range(0, n - 1)\n    # Step 2: Reverse first k elements\n    reverse_range(0, k - 1)\n    # Step 3: Reverse remaining n - k elements\n    reverse_range(k, n - 1)",
      "java": "public class Solution {\n    private static void reverse(int[] nums, int left, int right) {\n        while (left < right) {\n            int temp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = temp;\n            left++;\n            right--;\n        }\n    }\n\n    public static void rotateArray(int[] nums, int k) {\n        if (nums == null || nums.length <= 1) return;\n        int n = nums.length;\n        k %= n;\n        if (k == 0) return;\n\n        // Step 1: Reverse entire array\n        reverse(nums, 0, n - 1);\n        // Step 2: Reverse first k elements\n        reverse(nums, 0, k - 1);\n        // Step 3: Reverse remaining elements\n        reverse(nums, k, n - 1);\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvoid rotateArray(vector<int>& nums, int k) {\n    int n = nums.size();\n    if (n <= 1) return;\n\n    // In case k is greater than n\n    k %= n;\n    if (k == 0) return;\n\n    // Step 1: Reverse the entire array\n    reverse(nums.begin(), nums.end());\n\n    // Step 2: Reverse the first k elements\n    reverse(nums.begin(), nums.begin() + k);\n\n    // Step 3: Reverse the remaining elements\n    reverse(nums.begin() + k, nums.end());\n}",
      "csharp": "using System;\n\npublic class Solution {\n    private static void Reverse(int[] nums, int left, int right) {\n        while (left < right) {\n            int temp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = temp;\n            left++;\n            right--;\n        }\n    }\n\n    public static void RotateArray(int[] nums, int k) {\n        if (nums == null || nums.Length <= 1) return;\n        int n = nums.Length;\n        k %= n;\n        if (k == 0) return;\n\n        // Step 1: Reverse entire array\n        Reverse(nums, 0, n - 1);\n        // Step 2: Reverse first k elements\n        Reverse(nums, 0, k - 1);\n        // Step 3: Reverse remaining elements\n        Reverse(nums, k, n - 1);\n    }\n}",
      "javascript": "function rotateArray(nums, k) {\n  const n = nums.length;\n  if (n <= 1) return;\n  k %= n;\n  if (k === 0) return;\n\n  function reverse(left, right) {\n    while (left < right) {\n      const temp = nums[left];\n      nums[left] = nums[right];\n      nums[right] = temp;\n      left++;\n      right--;\n    }\n  }\n\n  // Step 1: Reverse the entire array\n  reverse(0, n - 1);\n  // Step 2: Reverse the first k elements\n  reverse(0, k - 1);\n  // Step 3: Reverse the remaining elements\n  reverse(k, n - 1);\n}"
    }
  },
  {
    "id": "recent-dsa-022",
    "track": "dsa",
    "dateTag": "6th Oct 2026 • Shift 1",
    "examDate": "2026-10-06",
    "shift": "Shift 1",
    "title": "ASCII Frequency Modulo",
    "difficulty": "Easy",
    "category": "Strings / Frequency Counting & Modulo",
    "pattern": "Frequency Map + Arithmetic",
    "rewardXp": 35,
    "targetMins": 12,
    "source": "Accenture Assessment 6th Oct 2026 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given a string `S`.\n\nFor every distinct character present in the string:\n1. Find the frequency of that character.\n2. Find the ASCII value of that character.\n3. Multiply the ASCII value by its frequency.\n4. Calculate the result modulo 5: `(ASCII value * frequency) % 5`.\n5. If the result is **not equal to 0**, add it to the final answer.\n6. Each character must be processed **only once**, regardless of how many times it occurs in the string.\n\nYour task is to return the final integer value.\n\n---\n\n### 📥 Input Specification\n- **input1 (S)**: A string `S`. The string may contain any number of characters. The same character can occur multiple times.\n\n### 📤 Output Specification\n- Return an integer representing the sum of the non-zero values obtained from:\n```text\n(ASCII value * frequency) % 5\n```\nfor every distinct character.\n\n---\n\n### 📌 Given Examples\n\n#### **Example 1**\n**Input:**\n```text\nS = \"abc\"\n```\n**Output:**\n```text\n9\n```\n**Explanation:**\n- The characters are:\n  - `a`: frequency = 1, ASCII = 97 → `(97 × 1) % 5 = 2`\n  - `b`: frequency = 1, ASCII = 98 → `(98 × 1) % 5 = 3`\n  - `c`: frequency = 1, ASCII = 99 → `(99 × 1) % 5 = 4`\n- None of the results is 0.\n- Total sum: `2 + 3 + 4 = 9`.\n\n#### **Example 2**\n**Input:**\n```text\nS = \"aabbc\"\n```\n**Output:**\n```text\n9\n```\n**Explanation:**\n- `a`: `(97 × 2) % 5 = 194 % 5 = 4`\n- `b`: `(98 × 2) % 5 = 196 % 5 = 1`\n- `c`: `(99 × 1) % 5 = 99 % 5 = 4`\n- Total sum: `4 + 1 + 4 = 9`.\n\n---\n\n### 💡 Core Logic & Algorithm Walkthrough\nThe problem is solved using a frequency counting technique:\n1. **Step 1 — Count frequency**: Traverse string `S` and count occurrences of each character using an ASCII frequency array or hash map.\n2. **Step 2 — Process every distinct character once**: For each character with `frequency > 0`, compute `value = (ASCII * frequency) % 5`.\n3. **Step 3 — Filter zero values**: If `value != 0`, accumulate it into the total sum. Otherwise, ignore it.\n\n---\n\n### 🔍 Dry Run Walkthrough Table\nConsider `S = \"aabbc\"`:\n\n| Character | ASCII | Frequency | Calculation | Value | Added to Sum? |\n| :---: | :---: | :---: | :--- | :---: | :---: |\n| `a` | 97 | 2 | `(97 × 2) % 5 = 194 % 5` | **4** | ✅ Yes |\n| `b` | 98 | 2 | `(98 × 2) % 5 = 196 % 5` | **1** | ✅ Yes |\n| `c` | 99 | 1 | `(99 × 1) % 5 = 99 % 5` | **4** | ✅ Yes |\n\n**Final Answer:** `4 + 1 + 4 = 9`\n\n---\n\n### 🧠 Why Do We Use a Frequency Array?\nInstead of calculating for repeated characters multiple times, we pre-count occurrences.\nFor example, for `S = \"aaabbc\"`:\n- Without grouping: `'a'` would be visited 3 separate times, leading to erroneous duplicate additions.\n- With frequency counting: `a` has frequency = 3 → `(97 × 3) % 5 = 291 % 5 = 1`, added **exactly once**.\n\n---\n\n### ⚠️ Important Exam Guidelines\n1. **Process distinct characters only once**: Even if a character appears multiple times, its contribution is computed once as `(ASCII * frequency) % 5`.\n2. **Apply modulo after multiplication**: The formula is `(ASCII * frequency) % 5`.\n3. **Ignore zero results**: If `(ASCII * frequency) % 5 == 0`, nothing is added to the sum (e.g. `S = \"aaaaa\"` results in `0`).\n4. **ASCII value used directly**: Standard ASCII codes (`'a'` = 97, `'b'` = 98, `'c'` = 99, etc.).",
    "rules": [
      "1. Process each distinct character present in the string exactly once.",
      "2. Multiply the character's ASCII value by its frequency in the string.",
      "3. Calculate the modulo 5 of the product: (ASCII * frequency) % 5.",
      "4. Add the value to the sum only if the result is not equal to 0.",
      "5. Maintain linear time complexity O(N) with O(1) auxiliary space (256 ASCII frequency table)."
    ],
    "constraints": [
      "1 <= S.length <= 10^5",
      "S contains valid ASCII characters",
      "Time Complexity: O(N)",
      "Space Complexity: O(1)"
    ],
    "testCases": [
      {
        "id": "tc-1",
        "input": "S = \"abc\"",
        "inputRaw": "abc",
        "expectedOutput": "9",
        "explanation": "• a: (97 × 1) % 5 = 2\n• b: (98 × 1) % 5 = 3\n• c: (99 × 1) % 5 = 4\n• Total sum: 2 + 3 + 4 = 9"
      },
      {
        "id": "tc-2",
        "input": "S = \"aabbc\"",
        "inputRaw": "aabbc",
        "expectedOutput": "9",
        "explanation": "• a: (97 × 2) % 5 = 4\n• b: (98 × 2) % 5 = 1\n• c: (99 × 1) % 5 = 4\n• Total sum: 4 + 1 + 4 = 9"
      },
      {
        "id": "tc-3",
        "input": "S = \"a\"",
        "inputRaw": "a",
        "expectedOutput": "2",
        "explanation": "• Single character 'a': (97 × 1) % 5 = 2\n• Total sum: 2"
      },
      {
        "id": "tc-4",
        "input": "S = \"aaaaa\"",
        "inputRaw": "aaaaa",
        "expectedOutput": "0",
        "explanation": "• 'a' frequency is 5: (97 × 5) % 5 = 485 % 5 = 0\n• Modulo result is 0, so it is ignored and not added.\n• Total sum: 0"
      },
      {
        "id": "tc-5",
        "input": "S = \"aaabbbccc\"",
        "inputRaw": "aaabbbccc",
        "expectedOutput": "7",
        "explanation": "• a: (97 × 3) % 5 = 1\n• b: (98 × 3) % 5 = 4\n• c: (99 × 3) % 5 = 2\n• Total sum: 1 + 4 + 2 = 7"
      }
    ],
    "starterCode": {
      "python": "def asciiFrequencyModulo(s: str) -> int:\n    # TODO: Return the sum of non-zero (ASCII * frequency) % 5 values for every distinct character\n    return 0\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int asciiFrequencyModulo(String s) {\n        // TODO: Return the sum of non-zero (ASCII * frequency) % 5 values for every distinct character\n        return 0;\n    }\n}\n",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint asciiFrequencyModulo(string S) {\n    // TODO: Return the sum of non-zero (ASCII * frequency) % 5 values for every distinct character\n    return 0;\n}\n",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int AsciiFrequencyModulo(string s) {\n        // TODO: Return the sum of non-zero (ASCII * frequency) % 5 values for every distinct character\n        return 0;\n    }\n}\n",
      "javascript": "function asciiFrequencyModulo(s) {\n  // TODO: Return the sum of non-zero (ASCII * frequency) % 5 values for every distinct character\n  return 0;\n}\n"
    },
    "solutions": {
      "python": "def asciiFrequencyModulo(s: str) -> int:\n    freq = {}\n    for ch in s:\n        freq[ch] = freq.get(ch, 0) + 1\n\n    ans = 0\n    for ch, count in freq.items():\n        val = (ord(ch) * count) % 5\n        if val != 0:\n            ans += val\n\n    return ans",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int asciiFrequencyModulo(String s) {\n        int[] freq = new int[256];\n        for (char c : s.toCharArray()) {\n            freq[(int) c]++;\n        }\n\n        int ans = 0;\n        for (int i = 0; i < 256; i++) {\n            if (freq[i] > 0) {\n                int value = (i * freq[i]) % 5;\n                if (value != 0) {\n                    ans += value;\n                }\n            } \n        }\n\n        return ans;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint asciiFrequencyModulo(string S) {\n    int freq[256] = {0};\n\n    // Count frequency of every character\n    for (char c : S) {\n        freq[(unsigned char)c]++;\n    }\n\n    int ans = 0;\n\n    // Process every distinct character only once\n    for (int i = 0; i < 256; i++) {\n        if (freq[i] > 0) {\n            int value = (i * freq[i]) % 5;\n            if (value != 0) {\n                ans += value;\n            }\n        }\n    }\n\n    return ans;\n}",
      "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class Solution {\n    public static int AsciiFrequencyModulo(string s) {\n        int[] freq = new int[256];\n        foreach (char c in s) {\n            freq[(int)c]++;\n        }\n\n        int ans = 0;\n        for (int i = 0; i < 256; i++) {\n            if (freq[i] > 0) {\n                int value = (i * freq[i]) % 5;\n                if (value != 0) {\n                    ans += value;\n                }\n            }\n        }\n\n        return ans;\n    }\n}",
      "javascript": "function asciiFrequencyModulo(s) {\n  const freq = {};\n  for (const ch of s) {\n    freq[ch] = (freq[ch] || 0) + 1;\n  }\n\n  let ans = 0;\n  for (const ch in freq) {\n    const val = (ch.charCodeAt(0) * freq[ch]) % 5;\n    if (val !== 0) {\n      ans += val;\n    }\n  }\n\n  return ans;\n}"
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
    "id": "recent-fe-004",
    "track": "frontend",
    "dateTag": "19th Sept 2026 • Shift 1",
    "examDate": "2026-09-19",
    "shift": "Shift 1",
    "title": "Countdown Timer",
    "difficulty": "Easy",
    "category": "DOM Manipulation / setInterval, CSS & Event Handling",
    "source": "Accenture Assessment 19th Sept Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "You are given a partially completed **Countdown Timer** webpage. The timer should start when the user clicks the **Start Timer** button and count down from **10 to 0**. When the timer reaches 0, a pop-up message should be displayed.\n\nThe question has three parts: **CSS**, **HTML**, and **JavaScript**.\n\n### Part 1 — CSS\nChange the text color of the timer in `.timer` using the given hexadecimal color code:\n```css\n#4CAF50\n```\n- Change only the required CSS property (approx. 1 line).\n\n### Part 2 — HTML\nAdd a `<span>` element inside `<div class=\"timer\">` to display the timer value:\n- Element: `<span id=\"timer\">10</span>`\n- Initial value: `10`\n- Expected change: approximately 1 line.\n\n### Part 3 — JavaScript\nComplete the JavaScript so that the countdown starts when the **Start Timer** button (`#startBtn`) is clicked:\n- When the user clicks Start Timer, the timer should start from 10.\n- It should decrease every second: `10 → 9 → 8 → ... → 1 → 0`.\n- The timer value should be updated inside the span (`#timer`).\n- When the timer reaches 0, display a pop-up: `Time's Up!`.\n- The countdown should not continue after reaching 0 (clear the interval).",
    "objectives": [
      "Part 1 (CSS): Change the text color of .timer to #4CAF50.",
      "Part 2 (HTML): Add a span element with id \"timer\" and initial value 10 inside .timer.",
      "Part 3 (JavaScript): Start the countdown from 10 down to 0 on clicking #startBtn.",
      "Part 3 (Alert): When the timer reaches 0, display alert(\"Time's Up!\") and stop the countdown."
    ],
    "constraints": [
      "Change only the required CSS property in .timer.",
      "Add a span element with id=\"timer\" and initial value 10.",
      "Decrease timer every second (1000ms).",
      "When countdown finishes at 0, display pop-up alert(\"Time's Up!\") and stop."
    ],
    "starterHTML": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Countdown Timer</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"timer-card\">\n        <h2>Countdown Timer</h2>\n\n        <div class=\"timer\">\n            <!-- TODO: Add a span element with id \"timer\" -->\n        </div>\n\n        <div class=\"timer-bar-container\">\n            <div id=\"timerBar\" class=\"timer-bar\"></div>\n        </div>\n\n        <button id=\"startBtn\">Start Timer</button>\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "starterCSS": "body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n    background: #0f172a;\n    color: #f8fafc;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    margin: 0;\n}\n\n.timer-card {\n    background: #1e293b;\n    border: 1px solid #334155;\n    border-radius: 16px;\n    padding: 32px 28px;\n    width: 320px;\n    text-align: center;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);\n}\n\nh2 {\n    margin: 0 0 16px 0;\n    font-size: 22px;\n    letter-spacing: -0.5px;\n}\n\n.timer {\n    font-size: 56px;\n    font-weight: 700;\n    margin: 10px 0;\n    /* TODO: Change the text color */\n}\n\n.timer-bar-container {\n    width: 100%;\n    height: 8px;\n    background: #334155;\n    border-radius: 999px;\n    overflow: hidden;\n    margin: 20px 0 24px 0;\n}\n\n.timer-bar {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(90deg, #4CAF50, #81C784);\n    border-radius: 999px;\n    transition: width 1s linear;\n}\n\nbutton {\n    background: #2563eb;\n    color: #ffffff;\n    border: none;\n    padding: 12px 24px;\n    font-size: 15px;\n    font-weight: 600;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: background 0.2s, transform 0.1s;\n    width: 100%;\n}\n\nbutton:hover {\n    background: #1d4ed8;\n}\n\nbutton:active {\n    transform: scale(0.98);\n}",
    "starterJS": "const startButton = document.getElementById(\"startBtn\");\nconst timerElement = document.getElementById(\"timer\");\nconst timerBar = document.getElementById(\"timerBar\");\n\nlet timeLeft = 10;\nconst totalTime = 10;\n\nstartButton.addEventListener(\"click\", function () {\n\n    // TODO: Start the countdown\n\n});",
    "solutionHTML": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Countdown Timer</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"timer-card\">\n        <h2>Countdown Timer</h2>\n\n        <div class=\"timer\">\n            <span id=\"timer\">10</span>\n        </div>\n\n        <div class=\"timer-bar-container\">\n            <div id=\"timerBar\" class=\"timer-bar\"></div>\n        </div>\n\n        <button id=\"startBtn\">Start Timer</button>\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "solutionCSS": "body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n    background: #0f172a;\n    color: #f8fafc;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    margin: 0;\n}\n\n.timer-card {\n    background: #1e293b;\n    border: 1px solid #334155;\n    border-radius: 16px;\n    padding: 32px 28px;\n    width: 320px;\n    text-align: center;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);\n}\n\nh2 {\n    margin: 0 0 16px 0;\n    font-size: 22px;\n    letter-spacing: -0.5px;\n}\n\n.timer {\n    font-size: 56px;\n    font-weight: 700;\n    margin: 10px 0;\n    color: #4CAF50;\n}\n\n.timer-bar-container {\n    width: 100%;\n    height: 8px;\n    background: #334155;\n    border-radius: 999px;\n    overflow: hidden;\n    margin: 20px 0 24px 0;\n}\n\n.timer-bar {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(90deg, #4CAF50, #81C784);\n    border-radius: 999px;\n    transition: width 1s linear;\n}\n\nbutton {\n    background: #2563eb;\n    color: #ffffff;\n    border: none;\n    padding: 12px 24px;\n    font-size: 15px;\n    font-weight: 600;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: background 0.2s, transform 0.1s;\n    width: 100%;\n}\n\nbutton:hover {\n    background: #1d4ed8;\n}\n\nbutton:active {\n    transform: scale(0.98);\n}",
    "solutionJS": "const startButton = document.getElementById(\"startBtn\");\nconst timerElement = document.getElementById(\"timer\");\nconst timerBar = document.getElementById(\"timerBar\");\n\nlet timeLeft = 10;\nconst totalTime = 10;\n\nstartButton.addEventListener(\"click\", function () {\n    if (timeLeft <= 0) {\n        timeLeft = 10;\n        timerElement.textContent = 10;\n        if (timerBar) timerBar.style.width = \"100%\";\n    }\n\n    const countdown = setInterval(function () {\n        timeLeft--;\n        timerElement.textContent = timeLeft;\n\n        if (timerBar) {\n            timerBar.style.width = (timeLeft / totalTime * 100) + \"%\";\n        }\n\n        if (timeLeft <= 0) {\n            clearInterval(countdown);\n            if (timerBar) timerBar.style.width = \"0%\";\n            alert(\"Time's Up!\");\n        }\n    }, 1000);\n});",
    "solutionExplanation": "### Solution Breakdown: Countdown Timer (Accenture 19th Sept Shift 1)\n\n1. **Part 1 — CSS Styling**:\n   - Set `color: #4CAF50;` inside the `.timer` selector to style the countdown numerals in the designated shade of green.\n   - Enhanced with modern card styling, typography, and animated progress track.\n\n2. **Part 2 — HTML Structure**:\n   - Add `<span id=\"timer\">10</span>` inside `<div class=\"timer\">`.\n   - Setting `id=\"timer\"` allows JavaScript to reference the target element via `document.getElementById(\"timer\")`.\n   - The initial text content `10` is displayed immediately before the user clicks the button.\n   - Includes a sleek `<div class=\"timer-bar-container\"><div id=\"timerBar\" class=\"timer-bar\"></div></div>`.\n\n3. **Part 3 — JavaScript Timer Logic**:\n   - In the `#startBtn` click listener, start a periodic timer using `setInterval(callback, 1000)`.\n   - Every 1000 milliseconds (1 second), decrement `timeLeft--` and update `timerElement.textContent = timeLeft`.\n   - Simultaneously sync the progress bar: `timerBar.style.width = (timeLeft / totalTime * 100) + \"%\"`.\n   - Check if `timeLeft <= 0`: if so, stop further execution with `clearInterval(countdown)` and display `alert(\"Time's Up!\")`.",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-005",
    "track": "frontend",
    "dateTag": "23rd Sept 2026 • Shift 1",
    "examDate": "2026-09-23",
    "shift": "Shift 1",
    "title": "Product Price Filter",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Range Sliders, Accessibility & CSS",
    "source": "Accenture Assessment 23rd Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "You are building a **Product Price Filter** that allows users to select a minimum and maximum price using a range slider.\n\nThe project structure and styling are already provided. You need to complete three small tasks involving **HTML**, **CSS**, and **JavaScript**.\n\n### Objectives:\n1. **HTML**: Add the attribute `aria-valuetext=\"$0-$1000\"` to the `.slider-container` element.\n2. **CSS**: Set the `background-color` of `.range-progress` to `#3498db`.\n3. **JavaScript**: Complete the `updateRangeBar()` function so that the range progress bar width represents the selected price range.\n\n### Constraints:\n- Do not modify the existing HTML structure.\n- Do not change any existing `id` or `class` attributes.\n- Do not modify the existing slider styling.\n- Make only the required changes.\n- The range progress bar should update whenever either slider is moved.",
    "objectives": [
      "HTML: Add aria-valuetext=\"$0-$1000\" to .slider-container.",
      "CSS: Set background-color of .range-progress to #3498db.",
      "JavaScript: Calculate selected range percentage and update rangeProgress.style.width."
    ],
    "constraints": [
      "Do not modify the existing HTML structure or element IDs.",
      "Change only background-color in .range-progress.",
      "Do not change existing event listeners in script.js.",
      "Calculate range percentage: (max - min) / totalRange * 100."
    ],
    "starterHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Product Price Filter</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"price-filter\">\n\n        <h2>Product Price Filter</h2>\n\n        <div class=\"slider-container\">\n            <!-- TODO: Add aria-valuetext=\"$0-$1000\" -->\n\n            <div class=\"range-progress\"></div>\n\n            <input\n                type=\"range\"\n                id=\"minPrice\"\n                min=\"0\"\n                max=\"1000\"\n                value=\"0\"\n            >\n\n            <input\n                type=\"range\"\n                id=\"maxPrice\"\n                min=\"0\"\n                max=\"1000\"\n                value=\"1000\"\n            >\n        </div>\n\n        <div class=\"price-values\">\n            <span>$<span id=\"minValue\">0</span></span>\n            <span>$<span id=\"maxValue\">1000</span></span>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "starterCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #f5f7fa;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.price-filter {\n    width: 500px;\n    max-width: 100%;\n    padding: 30px;\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    color: #1e293b;\n}\n\n.price-filter h2 {\n    text-align: center;\n    margin-bottom: 35px;\n    color: #1e293b;\n}\n\n.slider-container {\n    position: relative;\n    width: 100%;\n    height: 40px;\n}\n\n/* Background track */\n.slider-container::before {\n    content: \"\";\n    position: absolute;\n    top: 17px;\n    left: 0;\n    width: 100%;\n    height: 6px;\n    background: #ddd;\n    border-radius: 5px;\n}\n\n/* Selected range */\n.range-progress {\n    position: absolute;\n    top: 17px;\n    left: 0;\n    height: 6px;\n    border-radius: 5px;\n\n    /* TODO: Set background-color to #3498db */\n\n    width: 0%;\n}\n\n/* Range sliders */\ninput[type=\"range\"] {\n    position: absolute;\n    left: 0;\n    top: 5px;\n    width: 100%;\n    height: 25px;\n    appearance: none;\n    background: transparent;\n    pointer-events: none;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    background: #3498db;\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    background: #3498db;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.price-values {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px;\n    font-size: 18px;\n    font-weight: bold;\n    color: #1e293b;\n}",
    "starterJS": "const minPrice = document.getElementById(\"minPrice\");\nconst maxPrice = document.getElementById(\"maxPrice\");\n\nconst minValue = document.getElementById(\"minValue\");\nconst maxValue = document.getElementById(\"maxValue\");\n\nconst rangeProgress = document.querySelector(\".range-progress\");\n\nfunction updateRangeBar() {\n    \n    // TODO:\n    // Calculate the selected range percentage\n    // and set the width of rangeProgress\n}\n\nminPrice.addEventListener(\"input\", function () {\n    minValue.textContent = minPrice.value;\n    updateRangeBar();\n});\n\nmaxPrice.addEventListener(\"input\", function () {\n    maxValue.textContent = maxPrice.value;\n    updateRangeBar();\n});\n\nupdateRangeBar();",
    "solutionHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Product Price Filter</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"price-filter\">\n\n        <h2>Product Price Filter</h2>\n\n        <div class=\"slider-container\" aria-valuetext=\"$0-$1000\">\n\n            <div class=\"range-progress\"></div>\n\n            <input\n                type=\"range\"\n                id=\"minPrice\"\n                min=\"0\"\n                max=\"1000\"\n                value=\"0\"\n            >\n\n            <input\n                type=\"range\"\n                id=\"maxPrice\"\n                min=\"0\"\n                max=\"1000\"\n                value=\"1000\"\n            >\n        </div>\n\n        <div class=\"price-values\">\n            <span>$<span id=\"minValue\">0</span></span>\n            <span>$<span id=\"maxValue\">1000</span></span>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "solutionCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #f5f7fa;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.price-filter {\n    width: 500px;\n    padding: 30px;\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    color: #1e293b;\n}\n\n.price-filter h2 {\n    text-align: center;\n    margin-bottom: 35px;\n    color: #1e293b;\n}\n\n.slider-container {\n    position: relative;\n    width: 100%;\n    height: 40px;\n}\n\n/* Background track */\n.slider-container::before {\n    content: \"\";\n    position: absolute;\n    top: 17px;\n    left: 0;\n    width: 100%;\n    height: 6px;\n    background: #ddd;\n    border-radius: 5px;\n}\n\n/* Selected range */\n.range-progress {\n    position: absolute;\n    top: 17px;\n    left: 0;\n    height: 6px;\n    border-radius: 5px;\n    background-color: #3498db;\n    width: 100%;\n}\n\n/* Range sliders */\ninput[type=\"range\"] {\n    position: absolute;\n    left: 0;\n    top: 5px;\n    width: 100%;\n    height: 25px;\n    appearance: none;\n    background: transparent;\n    pointer-events: none;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    background: #3498db;\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    background: #3498db;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.price-values {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px;\n    font-size: 18px;\n    font-weight: bold;\n    color: #1e293b;\n}",
    "solutionJS": "const minPrice = document.getElementById(\"minPrice\");\nconst maxPrice = document.getElementById(\"maxPrice\");\n\nconst minValue = document.getElementById(\"minValue\");\nconst maxValue = document.getElementById(\"maxValue\");\n\nconst rangeProgress = document.querySelector(\".range-progress\");\n\nfunction updateRangeBar() {\n    const min = parseFloat(minPrice.value) || 0;\n    const max = parseFloat(maxPrice.value) || 0;\n    const totalRange = parseFloat(maxPrice.max) - parseFloat(minPrice.min) || 1000;\n\n    // Calculate selected range percentage\n    const selectedRange = max - min;\n    const widthPercentage = (selectedRange / totalRange) * 100;\n    const leftPercentage = (min / totalRange) * 100;\n\n    rangeProgress.style.left = leftPercentage + \"%\";\n    rangeProgress.style.width = widthPercentage + \"%\";\n}\n\nminPrice.addEventListener(\"input\", function () {\n    minValue.textContent = minPrice.value;\n    updateRangeBar();\n});\n\nmaxPrice.addEventListener(\"input\", function () {\n    maxValue.textContent = maxPrice.value;\n    updateRangeBar();\n});\n\nupdateRangeBar();",
    "solutionExplanation": "### Solution Breakdown: Product Price Filter (Accenture 23rd Sept Shift 1)\n\n1. **Part 1 — HTML Accessibility (ARIA)**:\n   - Add `aria-valuetext=\"$0-$1000\"` directly to `.slider-container`:\n     ```html\n     <div class=\"slider-container\" aria-valuetext=\"$0-$1000\">\n     ```\n   - This announces the selected price range clearly to assistive screen reader technologies.\n\n2. **Part 2 — CSS Progress Bar Color**:\n   - Set `background-color: #3498db;` inside `.range-progress`.\n   - This provides the iconic brand blue fill connecting the minimum and maximum range thumb handles.\n\n3. **Part 3 — JavaScript Range Math**:\n   - Extract the current slider values:\n     ```javascript\n     const min = parseFloat(minPrice.value) || 0;\n     const max = parseFloat(maxPrice.value) || 0;\n     const totalRange = (parseFloat(maxPrice.max) || 1000) - (parseFloat(minPrice.min) || 0);\n     ```\n   - Compute the selected percentage: `(max - min) / totalRange * 100`.\n   - Set `rangeProgress.style.width = widthPercentage + \"%\"` (and optionally `left = (min / totalRange * 100) + \"%\"` for dual slider alignment).",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-006",
    "track": "frontend",
    "dateTag": "28th Sept 2026 • Shift 1",
    "examDate": "2026-09-28",
    "shift": "Shift 1",
    "title": "Accordion Menu",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Visibility Toggle & CSS Margin",
    "source": "Accenture Assessment 28th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "You are tasked with building a simple **accordion menu** that allows users to expand and collapse sections. The project structure and styling are already provided. Complete the required HTML, CSS, and JavaScript changes.\n\n### Objectives\n1. **HTML**: Create three `<div>` elements with class `section-data` containing:\n   - `Content for section 1`\n   - `Content for section 2`\n   - `Content for section 3`\n2. **CSS**: Set the accordion margin to `20px` in `.accordion`.\n3. **JavaScript**: Write JavaScript to toggle the visibility of each section's content when its header is clicked.\n\n### Note\n- All section content must be visible initially.\n- Clicking a section header should hide its content.\n- Clicking it again should make the content visible.\n\n### Constraints\n- Do not change any existing `id` or `class` attributes.\n- Do not change the existing structure unnecessarily.\n- Do not modify the existing styling except where specified.\n- The content must be visible when the page initially loads.\n- You must remove/hide the element through JavaScript based on its current state, rather than changing the initial CSS from `display: block`.",
    "objectives": [
      "HTML: Create three <div> elements with class \"section-data\" containing \"Content for section 1\", \"Content for section 2\", and \"Content for section 3\".",
      "CSS: Set the accordion margin to 20px in .accordion.",
      "JavaScript: Write JavaScript to toggle the visibility of each section's content when its header is clicked."
    ],
    "constraints": [
      "Do not change any existing id or class attributes.",
      "Do not change the existing structure unnecessarily.",
      "Do not modify the existing styling except where specified.",
      "All section content must be visible when the page initially loads.",
      "Remove/hide the element through JavaScript based on its current state, rather than changing the initial CSS from display: block."
    ],
    "starterHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Accordion Menu</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"accordion\">\n\n        <div class=\"section\">\n            <h3 id=\"header1\">Section 1</h3>\n\n            <!-- TODO 1: Add section-data -->\n        </div>\n\n        <div class=\"section\">\n            <h3 id=\"header2\">Section 2</h3>\n\n            <!-- TODO 2: Add section-data -->\n        </div>\n\n        <div class=\"section\">\n            <h3 id=\"header3\">Section 3</h3>\n\n            <!-- TODO 3: Add section-data -->\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "starterCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #f4f6f8;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 50px;\n}\n\n.accordion {\n    width: 500px;\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);\n    overflow: hidden;\n\n    /* TODO 4: Set margin to 20px */\n}\n\n.section {\n    border-bottom: 1px solid #e0e0e0;\n}\n\n.section:last-child {\n    border-bottom: none;\n}\n\n.section h3 {\n    padding: 18px 20px;\n    background: #f8f9fa;\n    color: #222;\n    font-size: 18px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background 0.2s ease;\n}\n\n.section h3:hover {\n    background: #e9ecef;\n}\n\n.section-data {\n    display: block;\n    padding: 18px 20px;\n    background: #ffffff;\n    color: #555;\n    font-size: 15px;\n    line-height: 1.5;\n}",
    "starterJS": "const header1 = document.getElementById(\"header1\");\nconst header2 = document.getElementById(\"header2\");\nconst header3 = document.getElementById(\"header3\");\n\nconst content1 = header1.nextElementSibling;\nconst content2 = header2.nextElementSibling;\nconst content3 = header3.nextElementSibling;\n\n// TODO 5: Toggle content1 when header1 is clicked\n\n// TODO 6: Toggle content2 when header2 is clicked\n\n// TODO 7: Toggle content3 when header3 is clicked",
    "solutionHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Accordion Menu</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"accordion\">\n\n        <div class=\"section\">\n            <h3 id=\"header1\">Section 1</h3>\n            <div class=\"section-data\">Content for section 1</div>\n        </div>\n\n        <div class=\"section\">\n            <h3 id=\"header2\">Section 2</h3>\n            <div class=\"section-data\">Content for section 2</div>\n        </div>\n\n        <div class=\"section\">\n            <h3 id=\"header3\">Section 3</h3>\n            <div class=\"section-data\">Content for section 3</div>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "solutionCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #f4f6f8;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 50px;\n}\n\n.accordion {\n    width: 500px;\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);\n    overflow: hidden;\n    margin: 20px;\n}\n\n.section {\n    border-bottom: 1px solid #e0e0e0;\n}\n\n.section:last-child {\n    border-bottom: none;\n}\n\n.section h3 {\n    padding: 18px 20px;\n    background: #f8f9fa;\n    color: #222;\n    font-size: 18px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background 0.2s ease;\n}\n\n.section h3:hover {\n    background: #e9ecef;\n}\n\n.section-data {\n    display: block;\n    padding: 18px 20px;\n    background: #ffffff;\n    color: #555;\n    font-size: 15px;\n    line-height: 1.5;\n}",
    "solutionJS": "const header1 = document.getElementById(\"header1\");\nconst header2 = document.getElementById(\"header2\");\nconst header3 = document.getElementById(\"header3\");\n\nconst content1 = header1.nextElementSibling;\nconst content2 = header2.nextElementSibling;\nconst content3 = header3.nextElementSibling;\n\nheader1.addEventListener(\"click\", function () {\n    if (content1.style.display === \"none\") {\n        content1.style.display = \"block\";\n    } else {\n        content1.style.display = \"none\";\n    }\n});\n\nheader2.addEventListener(\"click\", function () {\n    if (content2.style.display === \"none\") {\n        content2.style.display = \"block\";\n    } else {\n        content2.style.display = \"none\";\n    }\n});\n\nheader3.addEventListener(\"click\", function () {\n    if (content3.style.display === \"none\") {\n        content3.style.display = \"block\";\n    } else {\n        content3.style.display = \"none\";\n    }\n});",
    "solutionExplanation": "### Solution Breakdown: Accordion Menu (Accenture 28th Sept Shift 1)\n\n1. **HTML Architecture**:\n   - Under each section header (`#header1`, `#header2`, `#header3`), insert a `<div class=\"section-data\">` with the designated content text: `\"Content for section 1\"`, `\"Content for section 2\"`, and `\"Content for section 3\"`.\n\n2. **CSS Styling Task**:\n   - Set `margin: 20px;` inside the `.accordion` class definition.\n\n3. **JavaScript Visibility Toggle Task**:\n   - Attach click listeners to each header.\n   - Initially, the content is visible (default `display: block`).\n   - On click, check if `content.style.display === \"none\"`. If so, show it by setting `content.style.display = \"block\"`. Otherwise, hide it by setting `content.style.display = \"none\"`.",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-007",
    "track": "frontend",
    "dateTag": "28th Sept 2026 • Shift 2",
    "examDate": "2026-09-28",
    "shift": "Shift 2",
    "title": "Modal Popup",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Modal Accessibility & Backdrop Filter",
    "source": "Accenture Assessment 28th Sept 2026 Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "You are given an existing HTML/CSS/JavaScript implementation of a simple **modal popup**. The page contains a button that opens a modal and a close button inside the modal. Complete the implementation by making the following changes.\n\n### Objectives\n1. **HTML**: Add `aria-label=\"Close modal\"` to the existing close button (`#closeModal`).\n2. **CSS**: Set the `backdrop-filter` property of the modal overlay (`.modal-overlay`) to `blur(3px)`.\n3. **JavaScript**: Complete the `toggleModal()` function to show the modal by removing the \"hidden\" class.\n\n### Constraints\n- Do not modify the existing HTML structure or element relationships.\n- Do not change any existing id or class attributes.\n- Maintain the existing functionality.\n- The close button must have `aria-label=\"Close modal\"`.",
    "objectives": [
      "HTML: Add aria-label=\"Close modal\" to the existing close button (#closeModal).",
      "CSS: Set backdrop-filter: blur(3px); on .modal-overlay.",
      "JavaScript: Complete toggleModal() function to reveal the modal by removing the \"hidden\" class."
    ],
    "constraints": [
      "Do not modify the existing HTML structure or element relationships.",
      "Do not change any existing id or class attributes.",
      "Maintain the existing functionality.",
      "The close button must have aria-label=\"Close modal\"."
    ],
    "starterHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Modal Popup</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <button id=\"openModal\">Open Modal</button>\n\n    <div id=\"modal\" class=\"modal-overlay hidden\">\n\n        <div class=\"modal\">\n            <h2>Welcome</h2>\n\n            <p>\n                This is a simple modal popup.\n            </p>\n\n            <button id=\"closeModal\"\n                    <!-- TODO 1: Add aria-label=\"Close modal\" -->\n            >\n                Close\n            </button>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "starterCSS": "* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    min-height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: #f4f6f8;\n}\n\n#openModal {\n    padding: 12px 24px;\n    border: none;\n    border-radius: 6px;\n    background: #3498db;\n    color: white;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n.modal-overlay {\n    position: fixed;\n    inset: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: rgba(0, 0, 0, 0.45);\n\n    /* TODO 2: Add backdrop-filter */\n}\n\n.hidden {\n    display: none;\n}\n\n.modal {\n    width: 400px;\n    padding: 30px;\n    background: white;\n    border-radius: 10px;\n\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);\n}\n\n.modal h2 {\n    margin-top: 0;\n}\n\n#closeModal {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background: #e74c3c;\n    color: white;\n    cursor: pointer;\n}",
    "starterJS": "const openModal = document.getElementById(\"openModal\");\nconst closeModal = document.getElementById(\"closeModal\");\nconst modal = document.getElementById(\"modal\");\n\nfunction toggleModal() {\n\n    // TODO 3: Show the modal by removing the \"hidden\" class\n\n}\n\nopenModal.addEventListener(\"click\", toggleModal);\n\ncloseModal.addEventListener(\"click\", function () {\n    modal.classList.add(\"hidden\");\n});",
    "solutionHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Modal Popup</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <button id=\"openModal\">Open Modal</button>\n\n    <div id=\"modal\" class=\"modal-overlay hidden\">\n\n        <div class=\"modal\">\n            <h2>Welcome</h2>\n\n            <p>\n                This is a simple modal popup.\n            </p>\n\n            <button id=\"closeModal\" aria-label=\"Close modal\">\n                Close\n            </button>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "solutionCSS": "* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    min-height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: #f4f6f8;\n}\n\n#openModal {\n    padding: 12px 24px;\n    border: none;\n    border-radius: 6px;\n    background: #3498db;\n    color: white;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n.modal-overlay {\n    position: fixed;\n    inset: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: rgba(0, 0, 0, 0.45);\n    backdrop-filter: blur(3px);\n}\n\n.hidden {\n    display: none;\n}\n\n.modal {\n    width: 400px;\n    padding: 30px;\n    background: white;\n    border-radius: 10px;\n\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);\n}\n\n.modal h2 {\n    margin-top: 0;\n}\n\n#closeModal {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background: #e74c3c;\n    color: white;\n    cursor: pointer;\n}",
    "solutionJS": "const openModal = document.getElementById(\"openModal\");\nconst closeModal = document.getElementById(\"closeModal\");\nconst modal = document.getElementById(\"modal\");\n\nfunction toggleModal() {\n    modal.classList.remove(\"hidden\");\n}\n\nopenModal.addEventListener(\"click\", toggleModal);\n\ncloseModal.addEventListener(\"click\", function () {\n    modal.classList.add(\"hidden\");\n});",
    "solutionExplanation": "### Solution Breakdown: Modal Popup (Accenture 28th Sept Shift 2)\n\n1. **Part 1 — HTML Accessibility (ARIA)**:\n   - Add `aria-label=\"Close modal\"` to the `#closeModal` button to ensure screen reader users receive descriptive context for the action.\n\n2. **Part 2 — CSS Backdrop Filter**:\n   - Add `backdrop-filter: blur(3px);` inside the `.modal-overlay` selector to produce the frosted glass aesthetic over background content.\n\n3. **Part 3 — JavaScript Modal Toggle**:\n   - In `toggleModal()`, call `modal.classList.remove(\"hidden\")` to make the modal overlay visible on clicking `#openModal`.",
    "liveSandbox": true
  },
  {
    "id": "recent-fe-008",
    "track": "frontend",
    "dateTag": "30th Sept 2026 • Shift 1",
    "examDate": "2026-09-30",
    "shift": "Shift 1",
    "title": "Interactive Shape Selector",
    "difficulty": "Easy",
    "category": "DOM Manipulation / Shape Rendering & State Switching",
    "source": "Accenture Assessment 30th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "You are given an existing web page containing three buttons: **Triangle**, **Circle**, and **Square**.\nWhen a user clicks any button, the corresponding shape should be displayed inside the canvas area.\nThe project structure and styling are already provided. Complete the three small tasks in HTML, CSS, and JavaScript.\n\n### Objectives\n1. **HTML**: Add the required shape elements inside `#canvas` using the existing classes (`triangle`, `circle`, `square`). The **Triangle** should be displayed initially.\n2. **CSS**: Set the triangle's color to `border-bottom: 100px solid #9C00FF;`.\n3. **JavaScript**: Complete the `showShape(shape)` function so that clicking a button displays the corresponding shape and only the selected shape is visible at a time.\n\n### Constraints\n- Do not change the existing `id` or `class` attributes.\n- Do not modify the existing structure unnecessarily.\n- Use the existing buttons and canvas area.\n- The Triangle should be displayed initially.\n- Clicking Circle should replace the Triangle with a Circle.\n- Clicking Square should replace the Circle with a Square.\n- Only one shape should be visible inside the canvas at a time.\n- The selected shape must use the `#9C00FF` color.",
    "objectives": [
      "HTML: Add the required shape elements inside #canvas. The Triangle should be displayed initially.",
      "CSS: Set the triangle's color to border-bottom: 100px solid #9C00FF;.",
      "JavaScript: Complete showShape(shape) to remove the current shape and display the clicked shape."
    ],
    "constraints": [
      "Do not change existing id or class attributes.",
      "Do not modify the existing structure unnecessarily.",
      "Use the existing buttons and canvas area.",
      "The Triangle should be displayed initially.",
      "Clicking Circle should replace the Triangle with a Circle.",
      "Clicking Square should replace the Circle with a Square.",
      "Only one shape should be visible inside the canvas at a time."
    ],
    "starterHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Shape Selector</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"shape-app\">\n\n        <h2>Shape Selector</h2>\n\n        <div id=\"canvas\">\n\n            <!-- TODO 1: Add the shape elements -->\n\n        </div>\n\n        <div class=\"buttons\">\n            <button id=\"triangleBtn\">Triangle</button>\n            <button id=\"circleBtn\">Circle</button>\n            <button id=\"squareBtn\">Square</button>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "starterCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #ffffff;\n    min-height: 100vh;\n    padding: 30px;\n    color: #172b4d;\n}\n\n.shape-app {\n    max-width: 1150px;\n    margin: 0 auto;\n}\n\n.shape-app h2 {\n    margin-bottom: 25px;\n}\n\n#canvas {\n    height: 225px;\n    border: 1px dashed #cbd5e1;\n    border-radius: 10px;\n    background: #fafafa;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin-bottom: 25px;\n}\n\n/* Triangle */\n.triangle {\n    width: 0;\n    height: 0;\n    border-left: 56px solid transparent;\n    border-right: 56px solid transparent;\n\n    /* TODO 2: Set the triangle color */\n    \n    border-bottom: 100px solid transparent;\n}\n\n/* Circle */\n.circle {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: #9C00FF;\n}\n\n/* Square */\n.square {\n    width: 100px;\n    height: 100px;\n    background: #9C00FF;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    gap: 18px;\n}\n\nbutton {\n    padding: 11px 28px;\n    border: 1px solid #cbd5e1;\n    border-radius: 4px;\n    background: #f8fafc;\n    color: #172b4d;\n    font-size: 16px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #eef2f7;\n}\n\nbutton.active {\n    background: #9C00FF;\n    color: white;\n    border-color: #9C00FF;\n}",
    "starterJS": "const triangleButton = document.getElementById(\"triangleBtn\");\nconst circleButton = document.getElementById(\"circleBtn\");\nconst squareButton = document.getElementById(\"squareBtn\");\n\nconst canvas = document.getElementById(\"canvas\");\n\nfunction showShape(shape) {\n\n    // TODO 3: Display the selected shape\n}\n\ntriangleButton.addEventListener(\"click\", function () {\n    showShape(\"triangle\");\n});\n\ncircleButton.addEventListener(\"click\", function () {\n    showShape(\"circle\");\n});\n\nsquareButton.addEventListener(\"click\", function () {\n    showShape(\"square\");\n});\n\n// Triangle should be displayed initially\nshowShape(\"triangle\");",
    "solutionHTML": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Shape Selector</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\n    <div class=\"shape-app\">\n\n        <h2>Shape Selector</h2>\n\n        <div id=\"canvas\">\n            <div class=\"triangle\"></div>\n        </div>\n\n        <div class=\"buttons\">\n            <button id=\"triangleBtn\">Triangle</button>\n            <button id=\"circleBtn\">Circle</button>\n            <button id=\"squareBtn\">Square</button>\n        </div>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "solutionCSS": "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background: #ffffff;\n    min-height: 100vh;\n    padding: 30px;\n    color: #172b4d;\n}\n\n.shape-app {\n    max-width: 1150px;\n    margin: 0 auto;\n}\n\n.shape-app h2 {\n    margin-bottom: 25px;\n}\n\n#canvas {\n    height: 225px;\n    border: 1px dashed #cbd5e1;\n    border-radius: 10px;\n    background: #fafafa;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin-bottom: 25px;\n}\n\n/* Triangle */\n.triangle {\n    width: 0;\n    height: 0;\n    border-left: 56px solid transparent;\n    border-right: 56px solid transparent;\n    border-bottom: 100px solid #9C00FF;\n}\n\n/* Circle */\n.circle {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: #9C00FF;\n}\n\n/* Square */\n.square {\n    width: 100px;\n    height: 100px;\n    background: #9C00FF;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    gap: 18px;\n}\n\nbutton {\n    padding: 11px 28px;\n    border: 1px solid #cbd5e1;\n    border-radius: 4px;\n    background: #f8fafc;\n    color: #172b4d;\n    font-size: 16px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #eef2f7;\n}\n\nbutton.active {\n    background: #9C00FF;\n    color: white;\n    border-color: #9C00FF;\n}",
    "solutionJS": "const triangleButton = document.getElementById(\"triangleBtn\");\nconst circleButton = document.getElementById(\"circleBtn\");\nconst squareButton = document.getElementById(\"squareBtn\");\n\nconst canvas = document.getElementById(\"canvas\");\n\nfunction showShape(shape) {\n    canvas.innerHTML = \"\";\n    const el = document.createElement(\"div\");\n    el.className = shape;\n    canvas.appendChild(el);\n}\n\ntriangleButton.addEventListener(\"click\", function () {\n    showShape(\"triangle\");\n});\n\ncircleButton.addEventListener(\"click\", function () {\n    showShape(\"circle\");\n});\n\nsquareButton.addEventListener(\"click\", function () {\n    showShape(\"square\");\n});\n\n// Triangle should be displayed initially\nshowShape(\"triangle\");",
    "solutionExplanation": "### Solution Walkthrough: Interactive Shape Selector (Accenture 30th Sept 2026)\n\n1. **Part 1 — HTML Task**:\n   - Inside `#canvas`, add the initial shape element `<div class=\"triangle\"></div>` so that when the page first loads, the canvas displays the Triangle.\n\n2. **Part 2 — CSS Task**:\n   - Set the color of the CSS-border triangle by updating the border rule to:\n     ```css\n     border-bottom: 100px solid #9C00FF;\n     ```\n   - This renders the triangle in the unified `#9C00FF` theme.\n\n3. **Part 3 — JavaScript Task**:\n   - Inside `showShape(shape)`:\n     - Clear the canvas content via `canvas.innerHTML = \"\"`.\n     - Create a new shape element using `document.createElement(\"div\")`.\n     - Assign `el.className = shape` (setting `triangle`, `circle`, or `square`).\n     - Append the element to `canvas`.\n     - This ensures only one shape is rendered inside `#canvas` at any given time.",
    "liveSandbox": true
  },
  {
    "id": "recent-sql-001",
    "track": "sql",
    "dateTag": "8th Sept 2026 • Shift 1",
    "examDate": "2026-09-08",
    "shift": "Shift 1",
    "title": "Subject Matter Experts",
    "difficulty": "Easy",
    "category": "Aggregation / GROUP BY & HAVING",
    "source": "Accenture Assessment 8th Sept 2026 Shift 1 (Verified Exam Paper)",
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
    "dateTag": "8th Sept 2026 • Shift 2",
    "examDate": "2026-09-08",
    "shift": "Shift 2",
    "title": "Fill Missing Client Data",
    "difficulty": "Medium",
    "category": "Window Functions / Forward Fill & COALESCE",
    "source": "Accenture Assessment 8th Sept 2026 Shift 2 (Verified Exam Paper)",
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
    "dateTag": "10th Sept 2026 • Shift 1",
    "examDate": "2026-09-10",
    "shift": "Shift 1",
    "title": "Marketing Campaigns UNIQUE Constraint & Duplicate Audit",
    "difficulty": "Easy",
    "category": "DDL Constraints & Data Integrity",
    "source": "Accenture Assessment 10th Sept 2026 Shift 1 (Verified Exam Paper)",
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
    "dateTag": "12th Sept 2026 • Shift 1",
    "examDate": "2026-09-12",
    "shift": "Shift 1",
    "title": "Average Project Duration",
    "difficulty": "Easy",
    "category": "Date & Time Analytics / AVG",
    "source": "Accenture Assessment 12th Sept 2026 Shift 1 (Verified Exam Paper)",
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
    "dateTag": "14th Sept 2026 • Shift 2",
    "examDate": "2026-09-14",
    "shift": "Shift 2",
    "title": "Calculate Click Through Conversion Rate",
    "difficulty": "Medium",
    "category": "Conversion Funnel / CTE & LEFT JOIN",
    "source": "Accenture Assessment 14th Sept 2026 Shift 2 (Verified Exam Paper)",
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
    "dateTag": "16th Sept 2026 • Shift 1",
    "examDate": "2026-09-16",
    "shift": "Shift 1",
    "title": "Average Project Cost Per Year",
    "difficulty": "Easy",
    "category": "Aggregation / GROUP BY & AVG",
    "source": "Accenture Assessment 16th Sept 2026 Shift 1 (Verified Exam Paper)",
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
  },
  {
    "id": "recent-sql-009",
    "track": "sql",
    "dateTag": "20th Sept 2026 • Shift 1",
    "examDate": "2026-09-20",
    "shift": "Shift 1",
    "title": "Animals Stolen by Thieves with Theft Value Greater Than 15",
    "difficulty": "Easy",
    "category": "Joins / Multiple-Table INNER JOIN & WHERE",
    "source": "Accenture Assessment 20th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "description": "Write an SQL query to display the **Animal Name**, **Species**, **Thief Name**, and **Theft Value** for all animals stolen by thieves where the theft value is **strictly greater than 15**.\n\n### 📝 Required Output Column Aliases:\n- `Animal Name`\n- `Species`\n- `Thief Name`\n- `Theft Value`\n\n---\n\n### 📌 Relational Model & Walkthrough:\n1. Join the `Animal` table with the `Theft` table using `Animal_ID`.\n2. Join the `Theft` table with the `Thief` table using `Thief_ID`.\n3. Join the `Animal` table with the `Habitat` table using `Habitat_ID`.\n4. Apply the filter `WHERE tr.Theft_Value > 15`.\n5. Select `a.Animal_Name`, `a.Species`, `t.Thief_Name`, and `tr.Theft_Value` with the specified column aliases.\n\n> **⚠️ Important Condition**: The threshold is strictly greater than 15 (`> 15`), so any records where `Theft_Value = 15` must be excluded.",
    "rules": [
      "1. Join Animal and Theft on Animal_ID.",
      "2. Join Theft and Thief on Thief_ID.",
      "3. Join Animal and Habitat on Habitat_ID.",
      "4. Filter using tr.Theft_Value > 15 (strictly greater than 15).",
      "5. Use exact output column aliases: \"Animal Name\", \"Species\", \"Thief Name\", \"Theft Value\"."
    ],
    "concepts": [
      "INNER JOIN",
      "Multiple-table JOIN",
      "WHERE Clause",
      "Comparison Operator >",
      "Column Aliases"
    ],
    "tableSchema": [
      {
        "name": "Animal",
        "columns": [
          { "name": "Animal_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "Animal_Name", "type": "TEXT", "primaryKey": false },
          { "name": "Species", "type": "TEXT", "primaryKey": false },
          { "name": "Age", "type": "INTEGER", "primaryKey": false },
          { "name": "Habitat_ID", "type": "INTEGER", "primaryKey": false }
        ]
      },
      {
        "name": "Thief",
        "columns": [
          { "name": "Thief_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "Thief_Name", "type": "TEXT", "primaryKey": false },
          { "name": "Contact", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "Theft",
        "columns": [
          { "name": "Theft_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "Animal_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "Thief_ID", "type": "INTEGER", "primaryKey": false },
          { "name": "Theft_Value", "type": "INTEGER", "primaryKey": false },
          { "name": "Theft_Date", "type": "TEXT", "primaryKey": false }
        ]
      },
      {
        "name": "Habitat",
        "columns": [
          { "name": "Habitat_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "Habitat_Name", "type": "TEXT", "primaryKey": false },
          { "name": "Location", "type": "TEXT", "primaryKey": false }
        ]
      }
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 4,
      "tables": [
        {
          "name": "Animal",
          "columns": [
            { "name": "Animal_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "Animal_Name", "type": "TEXT", "primaryKey": false },
            { "name": "Species", "type": "TEXT", "primaryKey": false },
            { "name": "Age", "type": "INTEGER", "primaryKey": false },
            { "name": "Habitat_ID", "type": "INTEGER", "primaryKey": false }
          ]
        },
        {
          "name": "Thief",
          "columns": [
            { "name": "Thief_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "Thief_Name", "type": "TEXT", "primaryKey": false },
            { "name": "Contact", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "Theft",
          "columns": [
            { "name": "Theft_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "Animal_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "Thief_ID", "type": "INTEGER", "primaryKey": false },
            { "name": "Theft_Value", "type": "INTEGER", "primaryKey": false },
            { "name": "Theft_Date", "type": "TEXT", "primaryKey": false }
          ]
        },
        {
          "name": "Habitat",
          "columns": [
            { "name": "Habitat_ID", "type": "INTEGER", "primaryKey": true },
            { "name": "Habitat_Name", "type": "TEXT", "primaryKey": false },
            { "name": "Location", "type": "TEXT", "primaryKey": false }
          ]
        }
      ]
    },
    "examples": [
      {
        "title": "Example 1 (Values above and below 15)",
        "input": {
          "Animal": [
            { "Animal_ID": 1, "Animal_Name": "Tiger", "Species": "Mammal", "Age": 12, "Habitat_ID": 101 },
            { "Animal_ID": 2, "Animal_Name": "Elephant", "Species": "Mammal", "Age": 25, "Habitat_ID": 102 },
            { "Animal_ID": 3, "Animal_Name": "Deer", "Species": "Mammal", "Age": 8, "Habitat_ID": 101 }
          ],
          "Thief": [
            { "Thief_ID": 201, "Thief_Name": "Ramesh", "Contact": "9000000001" },
            { "Thief_ID": 202, "Thief_Name": "Suresh", "Contact": "9000000002" },
            { "Thief_ID": 203, "Thief_Name": "Amit", "Contact": "9000000003" }
          ],
          "Theft": [
            { "Theft_ID": 301, "Animal_ID": 1, "Thief_ID": 201, "Theft_Value": 20, "Theft_Date": "2025-01-10" },
            { "Theft_ID": 302, "Animal_ID": 2, "Thief_ID": 202, "Theft_Value": 10, "Theft_Date": "2025-01-11" },
            { "Theft_ID": 303, "Animal_ID": 3, "Thief_ID": 203, "Theft_Value": 30, "Theft_Date": "2025-01-12" }
          ],
          "Habitat": [
            { "Habitat_ID": 101, "Habitat_Name": "Forest", "Location": "India" },
            { "Habitat_ID": 102, "Habitat_Name": "Sanctuary", "Location": "India" }
          ]
        },
        "output": [
          { "Animal Name": "Tiger", "Species": "Mammal", "Thief Name": "Ramesh", "Theft Value": 20 },
          { "Animal Name": "Deer", "Species": "Mammal", "Thief Name": "Amit", "Theft Value": 30 }
        ],
        "explanation": "Thefts with values 20 and 30 are strictly greater than 15, while the theft with value 10 is excluded."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT\n  a.Animal_Name AS \"Animal Name\",\n  a.Species AS \"Species\",\n  t.Thief_Name AS \"Thief Name\",\n  tr.Theft_Value AS \"Theft Value\"\nFROM Animal a\nJOIN Theft tr ON a.Animal_ID = tr.Animal_ID\nJOIN Thief t ON tr.Thief_ID = t.Thief_ID\nJOIN Habitat h ON a.Habitat_ID = h.Habitat_ID\nWHERE tr.Theft_Value > 15;",
    "explanation": "### Query Breakdown:\n1. **Four-table Relational Join**:\n   - `Animal a JOIN Theft tr ON a.Animal_ID = tr.Animal_ID`: Links each theft event to the corresponding animal.\n   - `JOIN Thief t ON tr.Thief_ID = t.Thief_ID`: Retrieves the thief identity associated with the theft record.\n   - `JOIN Habitat h ON a.Habitat_ID = h.Habitat_ID`: Connects animal records to their habitat.\n2. **Filtering Condition**:\n   - `WHERE tr.Theft_Value > 15`: Filters only records whose theft value strictly exceeds 15 (records where `Theft_Value = 15` are not included).\n3. **Column Projection & Aliases**:\n   - Selects `a.Animal_Name AS \"Animal Name\"`, `a.Species AS \"Species\"`, `t.Thief_Name AS \"Thief Name\"`, and `tr.Theft_Value AS \"Theft Value\"` matching the required exam column headers.",
    "expectedColumns": [
      "Animal Name",
      "Species",
      "Thief Name",
      "Theft Value"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Values above and below 15",
        "isHidden": false,
        "data": {
          "Animal": [
            { "Animal_ID": 1, "Animal_Name": "Tiger", "Species": "Mammal", "Age": 12, "Habitat_ID": 101 },
            { "Animal_ID": 2, "Animal_Name": "Elephant", "Species": "Mammal", "Age": 25, "Habitat_ID": 102 },
            { "Animal_ID": 3, "Animal_Name": "Deer", "Species": "Mammal", "Age": 8, "Habitat_ID": 101 }
          ],
          "Thief": [
            { "Thief_ID": 201, "Thief_Name": "Ramesh", "Contact": "9000000001" },
            { "Thief_ID": 202, "Thief_Name": "Suresh", "Contact": "9000000002" },
            { "Thief_ID": 203, "Thief_Name": "Amit", "Contact": "9000000003" }
          ],
          "Theft": [
            { "Theft_ID": 301, "Animal_ID": 1, "Thief_ID": 201, "Theft_Value": 20, "Theft_Date": "2025-01-10" },
            { "Theft_ID": 302, "Animal_ID": 2, "Thief_ID": 202, "Theft_Value": 10, "Theft_Date": "2025-01-11" },
            { "Theft_ID": 303, "Animal_ID": 3, "Thief_ID": 203, "Theft_Value": 30, "Theft_Date": "2025-01-12" }
          ],
          "Habitat": [
            { "Habitat_ID": 101, "Habitat_Name": "Forest", "Location": "India" },
            { "Habitat_ID": 102, "Habitat_Name": "Sanctuary", "Location": "India" }
          ]
        },
        "expected": [
          { "Animal Name": "Tiger", "Species": "Mammal", "Thief Name": "Ramesh", "Theft Value": 20 },
          { "Animal Name": "Deer", "Species": "Mammal", "Thief Name": "Amit", "Theft Value": 30 }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Boundary value exactly 15 (Strict Threshold)",
        "isHidden": false,
        "data": {
          "Animal": [
            { "Animal_ID": 1, "Animal_Name": "Lion", "Species": "Mammal", "Age": 14, "Habitat_ID": 101 }
          ],
          "Thief": [
            { "Thief_ID": 201, "Thief_Name": "Raj", "Contact": "9000000010" }
          ],
          "Theft": [
            { "Theft_ID": 301, "Animal_ID": 1, "Thief_ID": 201, "Theft_Value": 15, "Theft_Date": "2025-02-01" }
          ],
          "Habitat": [
            { "Habitat_ID": 101, "Habitat_Name": "Grassland", "Location": "India" }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Just above the threshold (Value 16)",
        "isHidden": false,
        "data": {
          "Animal": [
            { "Animal_ID": 1, "Animal_Name": "Leopard", "Species": "Mammal", "Age": 10, "Habitat_ID": 101 }
          ],
          "Thief": [
            { "Thief_ID": 201, "Thief_Name": "Vijay", "Contact": "9000000011" }
          ],
          "Theft": [
            { "Theft_ID": 301, "Animal_ID": 1, "Thief_ID": 201, "Theft_Value": 16, "Theft_Date": "2025-03-01" }
          ],
          "Habitat": [
            { "Habitat_ID": 101, "Habitat_Name": "Forest", "Location": "India" }
          ]
        },
        "expected": [
          { "Animal Name": "Leopard", "Species": "Mammal", "Thief Name": "Vijay", "Theft Value": 16 }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Multiple qualifying thefts for an animal",
        "isHidden": false,
        "data": {
          "Animal": [
            { "Animal_ID": 1, "Animal_Name": "Rhino", "Species": "Mammal", "Age": 18, "Habitat_ID": 101 }
          ],
          "Thief": [
            { "Thief_ID": 201, "Thief_Name": "Amit", "Contact": "9000000020" },
            { "Thief_ID": 202, "Thief_Name": "Rahul", "Contact": "9000000021" }
          ],
          "Theft": [
            { "Theft_ID": 301, "Animal_ID": 1, "Thief_ID": 201, "Theft_Value": 25, "Theft_Date": "2025-04-01" },
            { "Theft_ID": 302, "Animal_ID": 1, "Thief_ID": 202, "Theft_Value": 40, "Theft_Date": "2025-04-05" }
          ],
          "Habitat": [
            { "Habitat_ID": 101, "Habitat_Name": "Reserve", "Location": "India" }
          ]
        },
        "expected": [
          { "Animal Name": "Rhino", "Species": "Mammal", "Thief Name": "Amit", "Theft Value": 25 },
          { "Animal Name": "Rhino", "Species": "Mammal", "Thief Name": "Rahul", "Theft Value": 40 }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Multi-Species Habitat Cross Join & Filtering",
        "isHidden": true,
        "data": {
          "Animal": [
            { "Animal_ID": 10, "Animal_Name": "Peacock", "Species": "Aves", "Age": 4, "Habitat_ID": 501 },
            { "Animal_ID": 20, "Animal_Name": "Python", "Species": "Reptilia", "Age": 6, "Habitat_ID": 502 },
            { "Animal_ID": 30, "Animal_Name": "Otter", "Species": "Mammal", "Age": 3, "Habitat_ID": 503 },
            { "Animal_ID": 40, "Animal_Name": "Falcon", "Species": "Aves", "Age": 5, "Habitat_ID": 501 }
          ],
          "Thief": [
            { "Thief_ID": 1001, "Thief_Name": "Vikram", "Contact": "9876543210" },
            { "Thief_ID": 1002, "Thief_Name": "Sunil", "Contact": "9876543211" },
            { "Thief_ID": 1003, "Thief_Name": "Deepak", "Contact": "9876543212" }
          ],
          "Theft": [
            { "Theft_ID": 701, "Animal_ID": 10, "Thief_ID": 1001, "Theft_Value": 15, "Theft_Date": "2025-05-01" },
            { "Theft_ID": 702, "Animal_ID": 20, "Thief_ID": 1002, "Theft_Value": 18, "Theft_Date": "2025-05-02" },
            { "Theft_ID": 703, "Animal_ID": 30, "Thief_ID": 1003, "Theft_Value": 14, "Theft_Date": "2025-05-03" },
            { "Theft_ID": 704, "Animal_ID": 40, "Thief_ID": 1001, "Theft_Value": 55, "Theft_Date": "2025-05-04" }
          ],
          "Habitat": [
            { "Habitat_ID": 501, "Habitat_Name": "Bird Sanctuary", "Location": "North India" },
            { "Habitat_ID": 502, "Habitat_Name": "Wetland Reserve", "Location": "South India" },
            { "Habitat_ID": 503, "Habitat_Name": "River Basin", "Location": "East India" }
          ]
        },
        "expected": [
          { "Animal Name": "Python", "Species": "Reptilia", "Thief Name": "Sunil", "Theft Value": 18 },
          { "Animal Name": "Falcon", "Species": "Aves", "Thief Name": "Vikram", "Theft Value": 55 }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-010",
    "track": "sql",
    "dateTag": "23rd Sept 2026 • Shift 2",
    "examDate": "2026-09-23",
    "shift": "Shift 2",
    "title": "Orders with customer, payment method and delivery status",
    "difficulty": "Medium",
    "category": "Joins / Multiple-Table INNER JOIN & CONCAT",
    "source": "Accenture Assessment 23rd Sept 2026 Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 60,
    "targetMins": 15,
    "description": "Write an SQL query to display: List each order along with the customer's name, payment method, and delivery status.\n\n### 📝 Required Output Column Aliases:\n- `ORDER ID`\n- `NAME`\n- `PAYMENT METHOD`\n- `DELIVERY STATUS`\n\n---\n\n### 📌 Relational Model & Walkthrough:\n1. Join `orders` with `customer` using `CUSTOMER_ID`.\n2. Join `customer` with `customer_address` using `CUSTOMER_ID` to obtain the customer's first and last name.\n3. Join `orders` with `payment` using `ORDER_ID`.\n4. Join `orders` with `order_delivery` using `ORDER_ID`.\n5. Combine `FIRST_NAME` and `LAST_NAME` separated by a space using `CONCAT(ca.FIRST_NAME, ' ', ca.LAST_NAME)`.\n6. Select the four requested columns with exact column aliases.\n\n> **⚠️ Important Schema Distractor Tip**: Several columns look relevant but are not required. For example, `orders.ORDER_STATUS` is different from `order_delivery.STATUS`, and `payment.STATUS` is different from `payment.PAYMENT_METHOD`. Use the columns requested by the question and follow the correct foreign-key relationships.",
    "rules": [
      "1. Join orders with customer on CUSTOMER_ID.",
      "2. Join customer with customer_address on CUSTOMER_ID.",
      "3. Join orders with payment on ORDER_ID.",
      "4. Join orders with order_delivery on ORDER_ID.",
      "5. Use CONCAT(ca.FIRST_NAME, ' ', ca.LAST_NAME) to produce the customer's full name.",
      "6. Use exact column aliases: \"ORDER ID\", \"NAME\", \"PAYMENT METHOD\", \"DELIVERY STATUS\"."
    ],
    "concepts": [
      "INNER JOIN",
      "Multiple-table JOIN",
      "CONCAT",
      "Column aliases"
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 5,
      "tables": [
        {
          "name": "orders",
          "columns": [
            "ORDER_ID",
            "CUSTOMER_ID",
            "ORDER_DATE",
            "TOTAL_AMOUNT",
            "ORDER_STATUS"
          ],
          "requiredColumns": [
            "ORDER_ID",
            "CUSTOMER_ID"
          ],
          "extraColumns": [
            "ORDER_DATE",
            "TOTAL_AMOUNT",
            "ORDER_STATUS"
          ]
        },
        {
          "name": "customer",
          "columns": [
            "CUSTOMER_ID",
            "USERNAME",
            "EMAIL",
            "PHONE"
          ],
          "requiredColumns": [
            "CUSTOMER_ID"
          ],
          "extraColumns": [
            "USERNAME",
            "EMAIL",
            "PHONE"
          ]
        },
        {
          "name": "customer_address",
          "columns": [
            "CUSTOMER_ID",
            "FIRST_NAME",
            "LAST_NAME",
            "CITY",
            "PINCODE"
          ],
          "requiredColumns": [
            "CUSTOMER_ID",
            "FIRST_NAME",
            "LAST_NAME"
          ],
          "extraColumns": [
            "CITY",
            "PINCODE"
          ]
        },
        {
          "name": "payment",
          "columns": [
            "PAYMENT_ID",
            "ORDER_ID",
            "PAYMENT_METHOD",
            "STATUS",
            "PAYMENT_DATE"
          ],
          "requiredColumns": [
            "ORDER_ID",
            "PAYMENT_METHOD"
          ],
          "extraColumns": [
            "PAYMENT_ID",
            "STATUS",
            "PAYMENT_DATE"
          ]
        },
        {
          "name": "order_delivery",
          "columns": [
            "ORDER_DELIVERY_ID",
            "ORDER_ID",
            "STATUS",
            "TRACKING_NO",
            "COURIER_NAME"
          ],
          "requiredColumns": [
            "ORDER_ID",
            "STATUS"
          ],
          "extraColumns": [
            "ORDER_DELIVERY_ID",
            "TRACKING_NO",
            "COURIER_NAME"
          ]
        }
      ],
      "difficultyNote": "Each table contains the columns required to solve the question plus 2–3 additional realistic columns. The extra columns are intentional distractors for schema-reading practice."
    },
    "tableSchema": [
      {
        "name": "orders",
        "columns": [
          { "name": "ORDER_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "CUSTOMER_ID", "type": "INTEGER" },
          { "name": "ORDER_DATE", "type": "TEXT" },
          { "name": "TOTAL_AMOUNT", "type": "REAL" },
          { "name": "ORDER_STATUS", "type": "TEXT" }
        ]
      },
      {
        "name": "customer",
        "columns": [
          { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "USERNAME", "type": "TEXT" },
          { "name": "EMAIL", "type": "TEXT" },
          { "name": "PHONE", "type": "TEXT" }
        ]
      },
      {
        "name": "customer_address",
        "columns": [
          { "name": "CUSTOMER_ID", "type": "INTEGER" },
          { "name": "FIRST_NAME", "type": "TEXT" },
          { "name": "LAST_NAME", "type": "TEXT" },
          { "name": "CITY", "type": "TEXT" },
          { "name": "PINCODE", "type": "TEXT" }
        ]
      },
      {
        "name": "payment",
        "columns": [
          { "name": "PAYMENT_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ORDER_ID", "type": "INTEGER" },
          { "name": "PAYMENT_METHOD", "type": "TEXT" },
          { "name": "STATUS", "type": "TEXT" },
          { "name": "PAYMENT_DATE", "type": "TEXT" }
        ]
      },
      {
        "name": "order_delivery",
        "columns": [
          { "name": "ORDER_DELIVERY_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "ORDER_ID", "type": "INTEGER" },
          { "name": "STATUS", "type": "TEXT" },
          { "name": "TRACKING_NO", "type": "TEXT" },
          { "name": "COURIER_NAME", "type": "TEXT" }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Orders with customer, payment, and delivery details)",
        "input": {
          "orders": [
            { "ORDER_ID": 1001, "CUSTOMER_ID": 1, "ORDER_DATE": "2026-09-20", "TOTAL_AMOUNT": 2500.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 1002, "CUSTOMER_ID": 2, "ORDER_DATE": "2026-09-21", "TOTAL_AMOUNT": 1200.0, "ORDER_STATUS": "Shipped" }
          ],
          "customer": [
            { "CUSTOMER_ID": 1, "USERNAME": "amit_s", "EMAIL": "amit@example.com", "PHONE": "9876543210" },
            { "CUSTOMER_ID": 2, "USERNAME": "riya_v", "EMAIL": "riya@example.com", "PHONE": "9876543211" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma", "CITY": "Mumbai", "PINCODE": "400001" },
            { "CUSTOMER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Verma", "CITY": "Delhi", "PINCODE": "110001" }
          ],
          "payment": [
            { "PAYMENT_ID": 501, "ORDER_ID": 1001, "PAYMENT_METHOD": "Credit Card", "STATUS": "Paid", "PAYMENT_DATE": "2026-09-20" },
            { "PAYMENT_ID": 502, "ORDER_ID": 1002, "PAYMENT_METHOD": "UPI", "STATUS": "Paid", "PAYMENT_DATE": "2026-09-21" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 801, "ORDER_ID": 1001, "STATUS": "Delivered", "TRACKING_NO": "TRK1001", "COURIER_NAME": "BlueDart" },
            { "ORDER_DELIVERY_ID": 802, "ORDER_ID": 1002, "STATUS": "In Transit", "TRACKING_NO": "TRK1002", "COURIER_NAME": "Delhivery" }
          ]
        },
        "output": [
          { "ORDER ID": 1001, "NAME": "Amit Sharma", "PAYMENT METHOD": "Credit Card", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 1002, "NAME": "Riya Verma", "PAYMENT METHOD": "UPI", "DELIVERY STATUS": "In Transit" }
        ],
        "explanation": "Joins orders, customer, customer_address, payment, and order_delivery to concatenate the full customer name and retrieve order ID, payment method, and delivery status for each order."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT o.ORDER_ID AS `ORDER ID`, CONCAT(ca.FIRST_NAME, ' ', ca.LAST_NAME) AS `NAME`, p.PAYMENT_METHOD AS `PAYMENT METHOD`, od.STATUS AS `DELIVERY STATUS` FROM orders o JOIN customer c ON o.CUSTOMER_ID = c.CUSTOMER_ID JOIN customer_address ca ON c.CUSTOMER_ID = ca.CUSTOMER_ID JOIN payment p ON o.ORDER_ID = p.ORDER_ID JOIN order_delivery od ON o.ORDER_ID = od.ORDER_ID;",
    "explanation": "### Solution Explanation:\n1. **JOIN orders & customer**: Connect each order to its customer via `o.CUSTOMER_ID = c.CUSTOMER_ID`.\n2. **JOIN customer_address**: Link `c.CUSTOMER_ID = ca.CUSTOMER_ID` to access `FIRST_NAME` and `LAST_NAME`.\n3. **JOIN payment**: Link `o.ORDER_ID = p.ORDER_ID` to obtain `PAYMENT_METHOD`.\n4. **JOIN order_delivery**: Link `o.ORDER_ID = od.ORDER_ID` to obtain delivery `STATUS`.\n5. **Name Concatenation**: `CONCAT(ca.FIRST_NAME, ' ', ca.LAST_NAME) AS `NAME``.\n6. **Aliases**: Ensure backticks or double quotes are used for column aliases with spaces.",
    "expectedColumns": [
      "ORDER ID",
      "NAME",
      "PAYMENT METHOD",
      "DELIVERY STATUS"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Multiple Orders with Different Payment & Delivery Statuses",
        "isHidden": false,
        "data": {
          "orders": [
            { "ORDER_ID": 1001, "CUSTOMER_ID": 1, "ORDER_DATE": "2026-09-20", "TOTAL_AMOUNT": 2500.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 1002, "CUSTOMER_ID": 2, "ORDER_DATE": "2026-09-21", "TOTAL_AMOUNT": 1200.0, "ORDER_STATUS": "Shipped" },
            { "ORDER_ID": 1003, "CUSTOMER_ID": 3, "ORDER_DATE": "2026-09-22", "TOTAL_AMOUNT": 850.0, "ORDER_STATUS": "Processing" }
          ],
          "customer": [
            { "CUSTOMER_ID": 1, "USERNAME": "amit_s", "EMAIL": "amit@example.com", "PHONE": "9876543210" },
            { "CUSTOMER_ID": 2, "USERNAME": "riya_v", "EMAIL": "riya@example.com", "PHONE": "9876543211" },
            { "CUSTOMER_ID": 3, "USERNAME": "neha_s", "EMAIL": "neha@example.com", "PHONE": "9876543212" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 1, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma", "CITY": "Mumbai", "PINCODE": "400001" },
            { "CUSTOMER_ID": 2, "FIRST_NAME": "Riya", "LAST_NAME": "Verma", "CITY": "Delhi", "PINCODE": "110001" },
            { "CUSTOMER_ID": 3, "FIRST_NAME": "Neha", "LAST_NAME": "Singh", "CITY": "Bangalore", "PINCODE": "560001" }
          ],
          "payment": [
            { "PAYMENT_ID": 501, "ORDER_ID": 1001, "PAYMENT_METHOD": "Credit Card", "STATUS": "Paid", "PAYMENT_DATE": "2026-09-20" },
            { "PAYMENT_ID": 502, "ORDER_ID": 1002, "PAYMENT_METHOD": "UPI", "STATUS": "Paid", "PAYMENT_DATE": "2026-09-21" },
            { "PAYMENT_ID": 503, "ORDER_ID": 1003, "PAYMENT_METHOD": "Cash on Delivery", "STATUS": "Pending", "PAYMENT_DATE": "2026-09-22" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 801, "ORDER_ID": 1001, "STATUS": "Delivered", "TRACKING_NO": "TRK1001", "COURIER_NAME": "BlueDart" },
            { "ORDER_DELIVERY_ID": 802, "ORDER_ID": 1002, "STATUS": "In Transit", "TRACKING_NO": "TRK1002", "COURIER_NAME": "Delhivery" },
            { "ORDER_DELIVERY_ID": 803, "ORDER_ID": 1003, "STATUS": "Pending", "TRACKING_NO": "TRK1003", "COURIER_NAME": "Shadowfax" }
          ]
        },
        "expected": [
          { "ORDER ID": 1001, "NAME": "Amit Sharma", "PAYMENT METHOD": "Credit Card", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 1002, "NAME": "Riya Verma", "PAYMENT METHOD": "UPI", "DELIVERY STATUS": "In Transit" },
          { "ORDER ID": 1003, "NAME": "Neha Singh", "PAYMENT METHOD": "Cash on Delivery", "DELIVERY STATUS": "Pending" }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — One Customer with Multiple Orders",
        "isHidden": false,
        "data": {
          "orders": [
            { "ORDER_ID": 2001, "CUSTOMER_ID": 10, "ORDER_DATE": "2026-09-15", "TOTAL_AMOUNT": 1500.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 2002, "CUSTOMER_ID": 10, "ORDER_DATE": "2026-09-18", "TOTAL_AMOUNT": 3200.0, "ORDER_STATUS": "Shipped" }
          ],
          "customer": [
            { "CUSTOMER_ID": 10, "USERNAME": "amit_sharma", "EMAIL": "amit.sharma@example.com", "PHONE": "9811122233" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 10, "FIRST_NAME": "Amit", "LAST_NAME": "Sharma", "CITY": "Pune", "PINCODE": "411001" }
          ],
          "payment": [
            { "PAYMENT_ID": 601, "ORDER_ID": 2001, "PAYMENT_METHOD": "UPI", "STATUS": "Success", "PAYMENT_DATE": "2026-09-15" },
            { "PAYMENT_ID": 602, "ORDER_ID": 2002, "PAYMENT_METHOD": "Credit Card", "STATUS": "Success", "PAYMENT_DATE": "2026-09-18" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 901, "ORDER_ID": 2001, "STATUS": "Delivered", "TRACKING_NO": "TRK2001", "COURIER_NAME": "DTDC" },
            { "ORDER_DELIVERY_ID": 902, "ORDER_ID": 2002, "STATUS": "In Transit", "TRACKING_NO": "TRK2002", "COURIER_NAME": "FedEx" }
          ]
        },
        "expected": [
          { "ORDER ID": 2001, "NAME": "Amit Sharma", "PAYMENT METHOD": "UPI", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 2002, "NAME": "Amit Sharma", "PAYMENT METHOD": "Credit Card", "DELIVERY STATUS": "In Transit" }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Pending Payment and Delivery",
        "isHidden": false,
        "data": {
          "orders": [
            { "ORDER_ID": 3001, "CUSTOMER_ID": 20, "ORDER_DATE": "2026-09-22", "TOTAL_AMOUNT": 999.0, "ORDER_STATUS": "Placed" }
          ],
          "customer": [
            { "CUSTOMER_ID": 20, "USERNAME": "riya_roy", "EMAIL": "riya.roy@example.com", "PHONE": "9822233344" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 20, "FIRST_NAME": "Riya", "LAST_NAME": "Roy", "CITY": "Kolkata", "PINCODE": "700001" }
          ],
          "payment": [
            { "PAYMENT_ID": 701, "ORDER_ID": 3001, "PAYMENT_METHOD": "Cash on Delivery", "STATUS": "Pending", "PAYMENT_DATE": "2026-09-22" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 951, "ORDER_ID": 3001, "STATUS": "Pending", "TRACKING_NO": "TRK3001", "COURIER_NAME": "EcomExpress" }
          ]
        },
        "expected": [
          { "ORDER ID": 3001, "NAME": "Riya Roy", "PAYMENT METHOD": "Cash on Delivery", "DELIVERY STATUS": "Pending" }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Different Payment Methods & Delivery Providers",
        "isHidden": false,
        "data": {
          "orders": [
            { "ORDER_ID": 4001, "CUSTOMER_ID": 31, "ORDER_DATE": "2026-09-10", "TOTAL_AMOUNT": 450.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 4002, "CUSTOMER_ID": 32, "ORDER_DATE": "2026-09-11", "TOTAL_AMOUNT": 1200.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 4003, "CUSTOMER_ID": 33, "ORDER_DATE": "2026-09-12", "TOTAL_AMOUNT": 3400.0, "ORDER_STATUS": "Shipped" }
          ],
          "customer": [
            { "CUSTOMER_ID": 31, "USERNAME": "amit_k", "EMAIL": "amit.k@example.com", "PHONE": "9833344455" },
            { "CUSTOMER_ID": 32, "USERNAME": "priya_d", "EMAIL": "priya.d@example.com", "PHONE": "9844455566" },
            { "CUSTOMER_ID": 33, "USERNAME": "karan_r", "EMAIL": "karan.r@example.com", "PHONE": "9855566677" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 31, "FIRST_NAME": "Amit", "LAST_NAME": "Kumar", "CITY": "Hyderabad", "PINCODE": "500001" },
            { "CUSTOMER_ID": 32, "FIRST_NAME": "Priya", "LAST_NAME": "Das", "CITY": "Chennai", "PINCODE": "600001" },
            { "CUSTOMER_ID": 33, "FIRST_NAME": "Karan", "LAST_NAME": "Roy", "CITY": "Ahmedabad", "PINCODE": "380001" }
          ],
          "payment": [
            { "PAYMENT_ID": 801, "ORDER_ID": 4001, "PAYMENT_METHOD": "UPI", "STATUS": "Success", "PAYMENT_DATE": "2026-09-10" },
            { "PAYMENT_ID": 802, "ORDER_ID": 4002, "PAYMENT_METHOD": "Debit Card", "STATUS": "Success", "PAYMENT_DATE": "2026-09-11" },
            { "PAYMENT_ID": 803, "ORDER_ID": 4003, "PAYMENT_METHOD": "Net Banking", "STATUS": "Success", "PAYMENT_DATE": "2026-09-12" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 981, "ORDER_ID": 4001, "STATUS": "Delivered", "TRACKING_NO": "TRK4001", "COURIER_NAME": "BlueDart" },
            { "ORDER_DELIVERY_ID": 982, "ORDER_ID": 4002, "STATUS": "Delivered", "TRACKING_NO": "TRK4002", "COURIER_NAME": "Delhivery" },
            { "ORDER_DELIVERY_ID": 983, "ORDER_ID": 4003, "STATUS": "In Transit", "TRACKING_NO": "TRK4003", "COURIER_NAME": "DTDC" }
          ]
        },
        "expected": [
          { "ORDER ID": 4001, "NAME": "Amit Kumar", "PAYMENT METHOD": "UPI", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 4002, "NAME": "Priya Das", "PAYMENT METHOD": "Debit Card", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 4003, "NAME": "Karan Roy", "PAYMENT METHOD": "Net Banking", "DELIVERY STATUS": "In Transit" }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Unmatched / Cancelled Orders & Schema Distractors",
        "isHidden": true,
        "data": {
          "orders": [
            { "ORDER_ID": 5001, "CUSTOMER_ID": 50, "ORDER_DATE": "2026-09-01", "TOTAL_AMOUNT": 1999.0, "ORDER_STATUS": "Delivered" },
            { "ORDER_ID": 5002, "CUSTOMER_ID": 51, "ORDER_DATE": "2026-09-02", "TOTAL_AMOUNT": 2999.0, "ORDER_STATUS": "Cancelled" },
            { "ORDER_ID": 5003, "CUSTOMER_ID": 52, "ORDER_DATE": "2026-09-03", "TOTAL_AMOUNT": 4999.0, "ORDER_STATUS": "Shipped" }
          ],
          "customer": [
            { "CUSTOMER_ID": 50, "USERNAME": "raj_m", "EMAIL": "raj@example.com", "PHONE": "9899900011" },
            { "CUSTOMER_ID": 51, "USERNAME": "simran_k", "EMAIL": "simran@example.com", "PHONE": "9899900022" },
            { "CUSTOMER_ID": 52, "USERNAME": "vikas_p", "EMAIL": "vikas@example.com", "PHONE": "9899900033" },
            { "CUSTOMER_ID": 53, "USERNAME": "distractor_user", "EMAIL": "no_orders@example.com", "PHONE": "9899900044" }
          ],
          "customer_address": [
            { "CUSTOMER_ID": 50, "FIRST_NAME": "Raj", "LAST_NAME": "Malhotra", "CITY": "Mumbai", "PINCODE": "400050" },
            { "CUSTOMER_ID": 51, "FIRST_NAME": "Simran", "LAST_NAME": "Kaur", "CITY": "Amritsar", "PINCODE": "143001" },
            { "CUSTOMER_ID": 52, "FIRST_NAME": "Vikas", "LAST_NAME": "Patel", "CITY": "Surat", "PINCODE": "395001" }
          ],
          "payment": [
            { "PAYMENT_ID": 901, "ORDER_ID": 5001, "PAYMENT_METHOD": "Credit Card", "STATUS": "Completed", "PAYMENT_DATE": "2026-09-01" },
            { "PAYMENT_ID": 903, "ORDER_ID": 5003, "PAYMENT_METHOD": "Wallet", "STATUS": "Completed", "PAYMENT_DATE": "2026-09-03" }
          ],
          "order_delivery": [
            { "ORDER_DELIVERY_ID": 991, "ORDER_ID": 5001, "STATUS": "Delivered", "TRACKING_NO": "TRK5001", "COURIER_NAME": "BlueDart" },
            { "ORDER_DELIVERY_ID": 993, "ORDER_ID": 5003, "STATUS": "Out for Delivery", "TRACKING_NO": "TRK5003", "COURIER_NAME": "Delhivery" }
          ]
        },
        "expected": [
          { "ORDER ID": 5001, "NAME": "Raj Malhotra", "PAYMENT METHOD": "Credit Card", "DELIVERY STATUS": "Delivered" },
          { "ORDER ID": 5003, "NAME": "Vikas Patel", "PAYMENT METHOD": "Wallet", "DELIVERY STATUS": "Out for Delivery" }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-011",
    "track": "sql",
    "dateTag": "26th Sept 2026 • Shift 1",
    "examDate": "2026-09-26",
    "shift": "Shift 1",
    "title": "Vehicles that have never been rented",
    "difficulty": "Easy",
    "category": "Joins / LEFT JOIN & IS NULL / Subqueries (NOT EXISTS)",
    "source": "Accenture Assessment 26th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "Write an SQL query to display: Find vehicles that have never been rented. Display the vehicle ID, make, model, and daily rate, ordered by vehicle ID in ascending order.\n\n### 📝 Required Output Columns:\n- `VEHICLE_ID`\n- `MAKE`\n- `MODEL`\n- `DAILY_RATE`\n\n---\n\n### 📌 Given Example:\n\n#### Input Data:\n**vehicle**:\n| VEHICLE_ID | MAKE | MODEL | DAILY_RATE | YEAR | STATUS |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| 101 | Toyota | Corolla | 1800 | 2022 | Available |\n| 102 | Honda | City | 2000 | 2023 | Available |\n| 103 | Hyundai | Creta | 2500 | 2022 | Available |\n| 104 | Maruti | Swift | 1500 | 2024 | Available |\n\n**rental**:\n| RENTAL_ID | VEHICLE_ID | CUSTOMER_ID | RENTAL_DATE | RETURN_DATE | TOTAL_AMOUNT |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| 5001 | 101 | 1 | 2026-09-01 | 2026-09-03 | 5400 |\n| 5002 | 103 | 2 | 2026-09-05 | 2026-09-07 | 7500 |\n\n#### Expected Output:\n| VEHICLE_ID | MAKE | MODEL | DAILY_RATE |\n| :---: | :---: | :---: | :---: |\n| 102 | Honda | City | 2000 |\n| 104 | Maruti | Swift | 1500 |\n\n#### Explanation:\n- **Vehicle 101**: Has rental record 5001 -> ❌ Excluded\n- **Vehicle 102**: No rental records exist -> ✅ Included\n- **Vehicle 103**: Has rental record 5002 -> ❌ Excluded\n- **Vehicle 104**: No rental records exist -> ✅ Included\n- Output is ordered by `VEHICLE_ID` ascending (`102`, then `104`).\n\n---\n\n### 📌 Relational Model & Walkthrough:\n1. Start with the `vehicle` table because every vehicle must be evaluated.\n2. Perform a `LEFT JOIN` on `rental` using `v.VEHICLE_ID = r.VEHICLE_ID`.\n3. Filter out vehicles that have any rental record using `WHERE r.VEHICLE_ID IS NULL` (or using `NOT EXISTS`).\n4. Select `v.VEHICLE_ID`, `v.MAKE`, `v.MODEL`, and `v.DAILY_RATE`.\n5. Sort the final output by `VEHICLE_ID` in ascending order (`ORDER BY v.VEHICLE_ID ASC`).",
    "rules": [
      "1. Query the vehicle table to retrieve VEHICLE_ID, MAKE, MODEL, DAILY_RATE.",
      "2. Use LEFT JOIN on rental table with condition v.VEHICLE_ID = r.VEHICLE_ID.",
      "3. Filter for vehicles with no rental records using WHERE r.VEHICLE_ID IS NULL (or WHERE NOT EXISTS subquery).",
      "4. Order the output by VEHICLE_ID in ascending order (ORDER BY v.VEHICLE_ID ASC)."
    ],
    "concepts": [
      "LEFT JOIN",
      "IS NULL",
      "NOT EXISTS",
      "ORDER BY",
      "Ascending order"
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 3,
      "tables": [
        {
          "name": "vehicle",
          "columns": [
            "VEHICLE_ID",
            "MAKE",
            "MODEL",
            "DAILY_RATE",
            "YEAR",
            "STATUS"
          ],
          "requiredColumns": [
            "VEHICLE_ID",
            "MAKE",
            "MODEL",
            "DAILY_RATE"
          ],
          "extraColumns": [
            "YEAR",
            "STATUS"
          ]
        },
        {
          "name": "rental",
          "columns": [
            "RENTAL_ID",
            "VEHICLE_ID",
            "CUSTOMER_ID",
            "RENTAL_DATE",
            "RETURN_DATE",
            "TOTAL_AMOUNT"
          ],
          "requiredColumns": [
            "VEHICLE_ID"
          ],
          "extraColumns": [
            "RENTAL_ID",
            "CUSTOMER_ID",
            "RENTAL_DATE",
            "RETURN_DATE",
            "TOTAL_AMOUNT"
          ]
        },
        {
          "name": "customer",
          "columns": [
            "CUSTOMER_ID",
            "CUSTOMER_NAME",
            "PHONE",
            "EMAIL",
            "CITY"
          ],
          "requiredColumns": [],
          "extraColumns": [
            "CUSTOMER_ID",
            "CUSTOMER_NAME",
            "PHONE",
            "EMAIL",
            "CITY"
          ]
        }
      ],
      "difficultyNote": "Vehicle table contains core information with extra distractor columns (YEAR, STATUS). Rental and customer tables provide relational context."
    },
    "tableSchema": [
      {
        "name": "vehicle",
        "columns": [
          { "name": "VEHICLE_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "MAKE", "type": "TEXT" },
          { "name": "MODEL", "type": "TEXT" },
          { "name": "DAILY_RATE", "type": "REAL" },
          { "name": "YEAR", "type": "INTEGER" },
          { "name": "STATUS", "type": "TEXT" }
        ]
      },
      {
        "name": "rental",
        "columns": [
          { "name": "RENTAL_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "VEHICLE_ID", "type": "INTEGER" },
          { "name": "CUSTOMER_ID", "type": "INTEGER" },
          { "name": "RENTAL_DATE", "type": "TEXT" },
          { "name": "RETURN_DATE", "type": "TEXT" },
          { "name": "TOTAL_AMOUNT", "type": "REAL" }
        ]
      },
      {
        "name": "customer",
        "columns": [
          { "name": "CUSTOMER_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "CUSTOMER_NAME", "type": "TEXT" },
          { "name": "PHONE", "type": "TEXT" },
          { "name": "EMAIL", "type": "TEXT" },
          { "name": "CITY", "type": "TEXT" }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Vehicles with and without rental records)",
        "input": {
          "vehicle": [
            { "VEHICLE_ID": 101, "MAKE": "Toyota", "MODEL": "Corolla", "DAILY_RATE": 1800.0, "YEAR": 2022, "STATUS": "Available" },
            { "VEHICLE_ID": 102, "MAKE": "Honda", "MODEL": "City", "DAILY_RATE": 2000.0, "YEAR": 2023, "STATUS": "Available" },
            { "VEHICLE_ID": 103, "MAKE": "Hyundai", "MODEL": "Creta", "DAILY_RATE": 2500.0, "YEAR": 2022, "STATUS": "Available" },
            { "VEHICLE_ID": 104, "MAKE": "Maruti", "MODEL": "Swift", "DAILY_RATE": 1500.0, "YEAR": 2024, "STATUS": "Available" }
          ],
          "rental": [
            { "RENTAL_ID": 5001, "VEHICLE_ID": 101, "CUSTOMER_ID": 1, "RENTAL_DATE": "2026-09-01", "RETURN_DATE": "2026-09-03", "TOTAL_AMOUNT": 5400.0 },
            { "RENTAL_ID": 5002, "VEHICLE_ID": 103, "CUSTOMER_ID": 2, "RENTAL_DATE": "2026-09-05", "RETURN_DATE": "2026-09-07", "TOTAL_AMOUNT": 7500.0 }
          ],
          "customer": [
            { "CUSTOMER_ID": 1, "CUSTOMER_NAME": "Amit Sharma", "PHONE": "9812345670", "EMAIL": "amit@example.com", "CITY": "Mumbai" },
            { "CUSTOMER_ID": 2, "CUSTOMER_NAME": "Priya Patel", "PHONE": "9812345671", "EMAIL": "priya@example.com", "CITY": "Delhi" }
          ]
        },
        "output": [
          { "VEHICLE_ID": 102, "MAKE": "Honda", "MODEL": "City", "DAILY_RATE": 2000.0 },
          { "VEHICLE_ID": 104, "MAKE": "Maruti", "MODEL": "Swift", "DAILY_RATE": 1500.0 }
        ],
        "explanation": "Vehicles 101 (Corolla) and 103 (Creta) have records in the rental table. Vehicles 102 (City) and 104 (Swift) have never been rented, so they are returned sorted by VEHICLE_ID ASC."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT v.VEHICLE_ID, v.MAKE, v.MODEL, v.DAILY_RATE FROM vehicle v LEFT JOIN rental r ON v.VEHICLE_ID = r.VEHICLE_ID WHERE r.VEHICLE_ID IS NULL ORDER BY v.VEHICLE_ID ASC;",
    "explanation": "### Solution Explanation:\n1. **LEFT JOIN**: Link each vehicle from `vehicle v` to its matching rentals in `rental r` via `v.VEHICLE_ID = r.VEHICLE_ID`.\n2. **Identify Unrented**: Unrented vehicles will have `NULL` on the right side of the join (`r.VEHICLE_ID IS NULL`).\n3. **Select Columns**: Retrieve `v.VEHICLE_ID`, `v.MAKE`, `v.MODEL`, and `v.DAILY_RATE`.\n4. **Sort Result**: Ensure results are sorted by `v.VEHICLE_ID ASC`.",
    "expectedColumns": [
      "VEHICLE_ID",
      "MAKE",
      "MODEL",
      "DAILY_RATE"
    ],
    "orderSensitive": true,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Basic case with rented and never-rented vehicles",
        "isHidden": false,
        "data": {
          "vehicle": [
            { "VEHICLE_ID": 101, "MAKE": "Toyota", "MODEL": "Corolla", "DAILY_RATE": 1800.0, "YEAR": 2022, "STATUS": "Available" },
            { "VEHICLE_ID": 102, "MAKE": "Honda", "MODEL": "City", "DAILY_RATE": 2000.0, "YEAR": 2023, "STATUS": "Available" },
            { "VEHICLE_ID": 103, "MAKE": "Hyundai", "MODEL": "Creta", "DAILY_RATE": 2500.0, "YEAR": 2022, "STATUS": "Available" },
            { "VEHICLE_ID": 104, "MAKE": "Maruti", "MODEL": "Swift", "DAILY_RATE": 1500.0, "YEAR": 2024, "STATUS": "Available" }
          ],
          "rental": [
            { "RENTAL_ID": 5001, "VEHICLE_ID": 101, "CUSTOMER_ID": 1, "RENTAL_DATE": "2026-09-01", "RETURN_DATE": "2026-09-03", "TOTAL_AMOUNT": 5400.0 },
            { "RENTAL_ID": 5002, "VEHICLE_ID": 103, "CUSTOMER_ID": 2, "RENTAL_DATE": "2026-09-05", "RETURN_DATE": "2026-09-07", "TOTAL_AMOUNT": 7500.0 }
          ],
          "customer": [
            { "CUSTOMER_ID": 1, "CUSTOMER_NAME": "Amit Sharma", "PHONE": "9000000001", "EMAIL": "amit@example.com", "CITY": "Delhi" },
            { "CUSTOMER_ID": 2, "CUSTOMER_NAME": "Riya Verma", "PHONE": "9000000002", "EMAIL": "riya@example.com", "CITY": "Lucknow" }
          ]
        },
        "expected": [
          { "VEHICLE_ID": 102, "MAKE": "Honda", "MODEL": "City", "DAILY_RATE": 2000.0 },
          { "VEHICLE_ID": 104, "MAKE": "Maruti", "MODEL": "Swift", "DAILY_RATE": 1500.0 }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — No vehicles have ever been rented (empty rental table)",
        "isHidden": false,
        "data": {
          "vehicle": [
            { "VEHICLE_ID": 201, "MAKE": "Toyota", "MODEL": "Camry", "DAILY_RATE": 3000.0, "YEAR": 2023, "STATUS": "Available" },
            { "VEHICLE_ID": 202, "MAKE": "Kia", "MODEL": "Seltos", "DAILY_RATE": 2400.0, "YEAR": 2024, "STATUS": "Available" },
            { "VEHICLE_ID": 203, "MAKE": "Tata", "MODEL": "Nexon", "DAILY_RATE": 1700.0, "YEAR": 2022, "STATUS": "Available" }
          ],
          "rental": [],
          "customer": []
        },
        "expected": [
          { "VEHICLE_ID": 201, "MAKE": "Toyota", "MODEL": "Camry", "DAILY_RATE": 3000.0 },
          { "VEHICLE_ID": 202, "MAKE": "Kia", "MODEL": "Seltos", "DAILY_RATE": 2400.0 },
          { "VEHICLE_ID": 203, "MAKE": "Tata", "MODEL": "Nexon", "DAILY_RATE": 1700.0 }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Every vehicle has been rented",
        "isHidden": false,
        "data": {
          "vehicle": [
            { "VEHICLE_ID": 301, "MAKE": "Ford", "MODEL": "EcoSport", "DAILY_RATE": 2100.0, "YEAR": 2021, "STATUS": "Available" },
            { "VEHICLE_ID": 302, "MAKE": "Honda", "MODEL": "Amaze", "DAILY_RATE": 1900.0, "YEAR": 2022, "STATUS": "Available" }
          ],
          "rental": [
            { "RENTAL_ID": 6001, "VEHICLE_ID": 301, "CUSTOMER_ID": 5, "RENTAL_DATE": "2026-08-01", "RETURN_DATE": "2026-08-03", "TOTAL_AMOUNT": 6300.0 },
            { "RENTAL_ID": 6002, "VEHICLE_ID": 302, "CUSTOMER_ID": 6, "RENTAL_DATE": "2026-08-10", "RETURN_DATE": "2026-08-12", "TOTAL_AMOUNT": 5700.0 }
          ],
          "customer": [
            { "CUSTOMER_ID": 5, "CUSTOMER_NAME": "Karan Roy", "PHONE": "9000000011", "EMAIL": "karan@example.com", "CITY": "Kanpur" },
            { "CUSTOMER_ID": 6, "CUSTOMER_NAME": "Neha Singh", "PHONE": "9000000012", "EMAIL": "neha@example.com", "CITY": "Agra" }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Vehicle rented multiple times",
        "isHidden": false,
        "data": {
          "vehicle": [
            { "VEHICLE_ID": 401, "MAKE": "Hyundai", "MODEL": "Verna", "DAILY_RATE": 2200.0, "YEAR": 2023, "STATUS": "Available" },
            { "VEHICLE_ID": 402, "MAKE": "Mahindra", "MODEL": "XUV300", "DAILY_RATE": 2300.0, "YEAR": 2024, "STATUS": "Available" },
            { "VEHICLE_ID": 403, "MAKE": "Renault", "MODEL": "Kiger", "DAILY_RATE": 1900.0, "YEAR": 2022, "STATUS": "Available" }
          ],
          "rental": [
            { "RENTAL_ID": 7001, "VEHICLE_ID": 401, "CUSTOMER_ID": 10, "RENTAL_DATE": "2026-07-01", "RETURN_DATE": "2026-07-03", "TOTAL_AMOUNT": 6600.0 },
            { "RENTAL_ID": 7002, "VEHICLE_ID": 401, "CUSTOMER_ID": 11, "RENTAL_DATE": "2026-07-10", "RETURN_DATE": "2026-07-12", "TOTAL_AMOUNT": 6600.0 },
            { "RENTAL_ID": 7003, "VEHICLE_ID": 401, "CUSTOMER_ID": 12, "RENTAL_DATE": "2026-08-01", "RETURN_DATE": "2026-08-02", "TOTAL_AMOUNT": 4400.0 },
            { "RENTAL_ID": 7004, "VEHICLE_ID": 403, "CUSTOMER_ID": 13, "RENTAL_DATE": "2026-08-05", "RETURN_DATE": "2026-08-07", "TOTAL_AMOUNT": 5700.0 }
          ],
          "customer": [
            { "CUSTOMER_ID": 10, "CUSTOMER_NAME": "A", "PHONE": "9000000021", "EMAIL": "a@example.com", "CITY": "Delhi" },
            { "CUSTOMER_ID": 11, "CUSTOMER_NAME": "B", "PHONE": "9000000022", "EMAIL": "b@example.com", "CITY": "Noida" },
            { "CUSTOMER_ID": 12, "CUSTOMER_NAME": "C", "PHONE": "9000000023", "EMAIL": "c@example.com", "CITY": "Gurgaon" },
            { "CUSTOMER_ID": 13, "CUSTOMER_NAME": "D", "PHONE": "9000000024", "EMAIL": "d@example.com", "CITY": "Jaipur" }
          ]
        },
        "expected": [
          { "VEHICLE_ID": 402, "MAKE": "Mahindra", "MODEL": "XUV300", "DAILY_RATE": 2300.0 }
        ]
      },
      {
        "id": "tc-5",
        "name": "Hidden Test Case 5 — Verify ascending VEHICLE_ID ordering",
        "isHidden": true,
        "data": {
          "vehicle": [
            { "VEHICLE_ID": 505, "MAKE": "Kia", "MODEL": "Sonet", "DAILY_RATE": 1900.0, "YEAR": 2024, "STATUS": "Available" },
            { "VEHICLE_ID": 501, "MAKE": "Tata", "MODEL": "Altroz", "DAILY_RATE": 1600.0, "YEAR": 2023, "STATUS": "Available" },
            { "VEHICLE_ID": 509, "MAKE": "MG", "MODEL": "Astor", "DAILY_RATE": 2600.0, "YEAR": 2024, "STATUS": "Available" }
          ],
          "rental": [],
          "customer": []
        },
        "expected": [
          { "VEHICLE_ID": 501, "MAKE": "Tata", "MODEL": "Altroz", "DAILY_RATE": 1600.0 },
          { "VEHICLE_ID": 505, "MAKE": "Kia", "MODEL": "Sonet", "DAILY_RATE": 1900.0 },
          { "VEHICLE_ID": 509, "MAKE": "MG", "MODEL": "Astor", "DAILY_RATE": 2600.0 }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-012",
    "track": "sql",
    "dateTag": "28th Sept 2026 • Shift 1",
    "examDate": "2026-09-28",
    "shift": "Shift 1",
    "title": "Animals in enclosures with capacity greater than 15",
    "difficulty": "Easy",
    "category": "Joins / INNER JOIN & Comparison Filtering (> 15)",
    "source": "Accenture Assessment 28th Sept 2026 Shift 1 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "Write an SQL query to display the animal's name (use alias `animal_name`), Species (use alias `Species`), enclosure's name (use alias `enclosure_name`), and enclosure's capacity (use alias `Capacity`) for all enclosures where the enclosure's capacity is strictly greater than 15.\n\n### 📝 Required Output Column Aliases:\n- `animal_name`\n- `Species`\n- `enclosure_name`\n- `Capacity`\n\n---\n\n### 📌 Given Example:\n\n#### Input Data:\n**animal**:\n| animal_id | animal_name | species | age | enclosure_id |\n| :---: | :---: | :---: | :---: | :---: |\n| 1 | Tiger | Mammal | 5 | 101 |\n| 2 | Lion | Mammal | 4 | 102 |\n| 3 | Parrot | Bird | 2 | 103 |\n\n**enclosure**:\n| enclosure_id | enclosure_name | capacity | location | status |\n| :---: | :---: | :---: | :---: | :---: |\n| 101 | Tiger Zone | 20 | North | Active |\n| 102 | Lion Zone | 12 | East | Active |\n| 103 | Bird House | 25 | South | Active |\n\n#### Expected Output:\n| animal_name | Species | enclosure_name | Capacity |\n| :---: | :---: | :---: | :---: |\n| Tiger | Mammal | Tiger Zone | 20 |\n| Parrot | Bird | Bird House | 25 |\n\n#### Explanation:\n- **Tiger Zone** capacity = 20 (`20 > 15` is true) -> Included.\n- **Lion Zone** capacity = 12 (`12 > 15` is false) -> Excluded.\n- **Bird House** capacity = 25 (`25 > 15` is true) -> Included.\n\n---\n\n### 📌 Relational Model & Walkthrough:\n1. Join the `animal` and `enclosure` tables using `enclosure_id` (`a.enclosure_id = e.enclosure_id`).\n2. Select `a.animal_name` as `animal_name`.\n3. Select `a.species` as `Species`.\n4. Select `e.enclosure_name` as `enclosure_name`.\n5. Select `e.capacity` as `Capacity`.\n6. Apply the filter `WHERE e.capacity > 15`.\n\n> **⚠️ Important Requirement**: The condition is strictly greater than 15 (`> 15`), so any enclosure with capacity equal to 15 is excluded.",
    "rules": [
      "1. Join animal table with enclosure table on enclosure_id.",
      "2. Filter for enclosures where capacity is strictly greater than 15 (e.capacity > 15).",
      "3. Use exact output column aliases: \"animal_name\", \"Species\", \"enclosure_name\", \"Capacity\"."
    ],
    "concepts": [
      "INNER JOIN",
      "WHERE",
      "Comparison operator >",
      "Column aliases"
    ],
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 3,
      "tables": [
        {
          "name": "animal",
          "columns": [
            "animal_id",
            "animal_name",
            "species",
            "age",
            "enclosure_id"
          ],
          "requiredColumns": [
            "animal_name",
            "species",
            "enclosure_id"
          ],
          "extraColumns": [
            "animal_id",
            "age"
          ]
        },
        {
          "name": "enclosure",
          "columns": [
            "enclosure_id",
            "enclosure_name",
            "capacity",
            "location",
            "status"
          ],
          "requiredColumns": [
            "enclosure_id",
            "enclosure_name",
            "capacity"
          ],
          "extraColumns": [
            "location",
            "status"
          ]
        },
        {
          "name": "species_info",
          "columns": [
            "species_id",
            "species",
            "scientific_name",
            "conservation_status"
          ],
          "requiredColumns": [],
          "extraColumns": [
            "species_id",
            "species",
            "scientific_name",
            "conservation_status"
          ]
        }
      ],
      "difficultyNote": "Join animal and enclosure on enclosure_id. Filter using capacity > 15 with required column aliases."
    },
    "tableSchema": [
      {
        "name": "animal",
        "columns": [
          { "name": "animal_id", "type": "INTEGER", "primaryKey": true },
          { "name": "animal_name", "type": "TEXT" },
          { "name": "species", "type": "TEXT" },
          { "name": "age", "type": "INTEGER" },
          { "name": "enclosure_id", "type": "INTEGER" }
        ]
      },
      {
        "name": "enclosure",
        "columns": [
          { "name": "enclosure_id", "type": "INTEGER", "primaryKey": true },
          { "name": "enclosure_name", "type": "TEXT" },
          { "name": "capacity", "type": "INTEGER" },
          { "name": "location", "type": "TEXT" },
          { "name": "status", "type": "TEXT" }
        ]
      },
      {
        "name": "species_info",
        "columns": [
          { "name": "species_id", "type": "INTEGER", "primaryKey": true },
          { "name": "species", "type": "TEXT" },
          { "name": "scientific_name", "type": "TEXT" },
          { "name": "conservation_status", "type": "TEXT" }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Enclosures above and below capacity 15)",
        "input": {
          "animal": [
            { "animal_id": 1, "animal_name": "Tiger", "species": "Mammal", "age": 5, "enclosure_id": 101 },
            { "animal_id": 2, "animal_name": "Lion", "species": "Mammal", "age": 4, "enclosure_id": 102 },
            { "animal_id": 3, "animal_name": "Parrot", "species": "Bird", "age": 2, "enclosure_id": 103 }
          ],
          "enclosure": [
            { "enclosure_id": 101, "enclosure_name": "Tiger Zone", "capacity": 20, "location": "North", "status": "Active" },
            { "enclosure_id": 102, "enclosure_name": "Lion Zone", "capacity": 12, "location": "East", "status": "Active" },
            { "enclosure_id": 103, "enclosure_name": "Bird House", "capacity": 25, "location": "South", "status": "Active" }
          ]
        },
        "output": [
          { "animal_name": "Tiger", "Species": "Mammal", "enclosure_name": "Tiger Zone", "Capacity": 20 },
          { "animal_name": "Parrot", "Species": "Bird", "enclosure_name": "Bird House", "Capacity": 25 }
        ],
        "explanation": "Tiger is in Tiger Zone (capacity 20 > 15) and Parrot is in Bird House (capacity 25 > 15). Lion is in Lion Zone with capacity 12 (not > 15), so it is excluded."
      }
    ],
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT a.animal_name AS animal_name, a.species AS Species, e.enclosure_name AS enclosure_name, e.capacity AS Capacity FROM animal a JOIN enclosure e ON a.enclosure_id = e.enclosure_id WHERE e.capacity > 15;",
    "explanation": "### Solution Explanation:\n1. **INNER JOIN**: Join `animal a` with `enclosure e` on `a.enclosure_id = e.enclosure_id`.\n2. **WHERE Filter**: Keep only enclosures where `e.capacity > 15` (strictly greater than 15).\n3. **Aliases**: Alias `a.animal_name` as `animal_name`, `a.species` as `Species`, `e.enclosure_name` as `enclosure_name`, and `e.capacity` as `Capacity`.",
    "expectedColumns": [
      "animal_name",
      "Species",
      "enclosure_name",
      "Capacity"
    ],
    "orderSensitive": false,
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Basic case with capacities above and below 15",
        "isHidden": false,
        "data": {
          "animal": [
            { "animal_id": 1, "animal_name": "Tiger", "species": "Mammal", "age": 5, "enclosure_id": 101 },
            { "animal_id": 2, "animal_name": "Lion", "species": "Mammal", "age": 4, "enclosure_id": 102 },
            { "animal_id": 3, "animal_name": "Parrot", "species": "Bird", "age": 2, "enclosure_id": 103 }
          ],
          "enclosure": [
            { "enclosure_id": 101, "enclosure_name": "Tiger Zone", "capacity": 20, "location": "North", "status": "Active" },
            { "enclosure_id": 102, "enclosure_name": "Lion Zone", "capacity": 12, "location": "East", "status": "Active" },
            { "enclosure_id": 103, "enclosure_name": "Bird House", "capacity": 25, "location": "South", "status": "Active" }
          ],
          "species_info": []
        },
        "expected": [
          { "animal_name": "Tiger", "Species": "Mammal", "enclosure_name": "Tiger Zone", "Capacity": 20 },
          { "animal_name": "Parrot", "Species": "Bird", "enclosure_name": "Bird House", "Capacity": 25 }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Capacity exactly equal to 15 (Excluded)",
        "isHidden": false,
        "data": {
          "animal": [
            { "animal_id": 10, "animal_name": "Bear", "species": "Mammal", "age": 6, "enclosure_id": 201 }
          ],
          "enclosure": [
            { "enclosure_id": 201, "enclosure_name": "Bear Den", "capacity": 15, "location": "West", "status": "Active" }
          ],
          "species_info": []
        },
        "expected": []
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Capacity just above threshold (16 vs 15)",
        "isHidden": false,
        "data": {
          "animal": [
            { "animal_id": 21, "animal_name": "Zebra", "species": "Mammal", "age": 4, "enclosure_id": 301 },
            { "animal_id": 22, "animal_name": "Deer", "species": "Mammal", "age": 3, "enclosure_id": 302 }
          ],
          "enclosure": [
            { "enclosure_id": 301, "enclosure_name": "Zebra Area", "capacity": 16, "location": "North-West", "status": "Active" },
            { "enclosure_id": 302, "enclosure_name": "Deer Meadow", "capacity": 15, "location": "South-West", "status": "Active" }
          ],
          "species_info": []
        },
        "expected": [
          { "animal_name": "Zebra", "Species": "Mammal", "enclosure_name": "Zebra Area", "Capacity": 16 }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Multiple animals in qualifying enclosures",
        "isHidden": false,
        "data": {
          "animal": [
            { "animal_id": 31, "animal_name": "Giraffe", "species": "Mammal", "age": 7, "enclosure_id": 401 },
            { "animal_id": 32, "animal_name": "Rhino", "species": "Mammal", "age": 8, "enclosure_id": 401 },
            { "animal_id": 33, "animal_name": "Penguin", "species": "Bird", "age": 3, "enclosure_id": 402 },
            { "animal_id": 34, "animal_name": "Wolf", "species": "Mammal", "age": 5, "enclosure_id": 403 }
          ],
          "enclosure": [
            { "enclosure_id": 401, "enclosure_name": "Savanna Enclosure", "capacity": 30, "location": "Central", "status": "Active" },
            { "enclosure_id": 402, "enclosure_name": "Penguin House", "capacity": 18, "location": "South-East", "status": "Active" },
            { "enclosure_id": 403, "enclosure_name": "Wolf Woods", "capacity": 10, "location": "North-East", "status": "Active" }
          ],
          "species_info": []
        },
        "expected": [
          { "animal_name": "Giraffe", "Species": "Mammal", "enclosure_name": "Savanna Enclosure", "Capacity": 30 },
          { "animal_name": "Rhino", "Species": "Mammal", "enclosure_name": "Savanna Enclosure", "Capacity": 30 },
          { "animal_name": "Penguin", "Species": "Bird", "enclosure_name": "Penguin House", "Capacity": 18 }
        ]
      }
    ]
  },
  {
    "id": "recent-sql-013",
    "track": "sql",
    "dateTag": "30th Sept 2026 • Shift 2",
    "examDate": "2026-09-30",
    "shift": "Shift 2",
    "title": "Multi-Table Aggregation Query",
    "difficulty": "Medium",
    "category": "Joins & Multi-Table Aggregation / GROUP BY & HAVING",
    "source": "Accenture Assessment 30th Sept 2026 Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 60,
    "targetMins": 15,
    "description": "Write an SQL query to retrieve the **Department Name**, **Total Number of Employees**, **Total Salary Paid**, and **Total Projects Handled** for departments with **more than 2 employees**. Order the output by **Total Salary in descending order**.\n\n---\n\n### 📝 Required Output Column Aliases:\n- `DEPARTMENT_NAME`\n- `TOTAL_EMPLOYEES`\n- `TOTAL_SALARY_PAID`\n- `TOTAL_PROJECTS_HANDLED`\n\n---\n\n### 📌 Relational Schema & Table Relationships:\n- `Departments.DEPT_ID` -> `Employees.DEPT_ID`\n- `Employees.EMP_ID` -> `Salaries.EMP_ID`\n- `Employees.EMP_ID` -> `Employee_Projects.EMP_ID`\n- `Employee_Projects.PROJECT_ID` -> `Projects.PROJECT_ID`\n- `Employees.LOCATION_ID` -> `Locations.LOCATION_ID`\n- `Employees.EMP_ID` -> `Performance_Reviews.EMP_ID`\n\n---\n\n### 💡 Query Construction Steps:\n1. **Join `Departments` to `Employees`** on `d.DEPT_ID = e.DEPT_ID`.\n2. **Join `Salaries` to `Employees`** on `e.EMP_ID = s.EMP_ID`.\n3. **`LEFT JOIN Employee_Projects`** on `e.EMP_ID = ep.EMP_ID` so that employees without any active project assignments are still preserved in employee count and salary calculations.\n4. **Group by** `d.DEPT_ID, d.DEPARTMENT_NAME`.\n5. **Aggregate Metrics:**\n   - Employee Count: `COUNT(DISTINCT e.EMP_ID) AS TOTAL_EMPLOYEES`\n   - Salary Paid: `SUM(s.BASE_SALARY + s.BONUS) AS TOTAL_SALARY_PAID`\n   - Projects Handled: `COUNT(DISTINCT ep.PROJECT_ID) AS TOTAL_PROJECTS_HANDLED`\n6. **Filter Qualifying Departments:** `HAVING COUNT(DISTINCT e.EMP_ID) > 2` (strictly greater than 2, departments with exactly 2 employees are excluded).\n7. **Order Results:** `ORDER BY TOTAL_SALARY_PAID DESC`.\n\n> **⚠️ Important Tip**: `COUNT(DISTINCT)` is necessary to prevent duplicate employee and project counts caused by joining multiple project assignments.",
    "rules": [
      "1. Join Departments with Employees, Salaries, and Employee_Projects.",
      "2. Use LEFT JOIN for Employee_Projects to keep employees without project assignments.",
      "3. Filter for departments having strictly more than 2 employees (COUNT(DISTINCT e.EMP_ID) > 2).",
      "4. Calculate TOTAL_SALARY_PAID as SUM(s.BASE_SALARY + s.BONUS).",
      "5. Use COUNT(DISTINCT) for both employee count and project count.",
      "6. Sort the final output by TOTAL_SALARY_PAID in descending order.",
      "7. Use the exact specified output column names: DEPARTMENT_NAME, TOTAL_EMPLOYEES, TOTAL_SALARY_PAID, TOTAL_PROJECTS_HANDLED."
    ],
    "concepts": [
      "INNER JOIN",
      "LEFT JOIN",
      "COUNT(DISTINCT)",
      "SUM",
      "GROUP BY",
      "HAVING",
      "ORDER BY DESC"
    ],
    "expectedColumns": [
      "DEPARTMENT_NAME",
      "TOTAL_EMPLOYEES",
      "TOTAL_SALARY_PAID",
      "TOTAL_PROJECTS_HANDLED"
    ],
    "orderSensitive": true,
    "starterCode": "-- Write your SQL query below\n",
    "solution": "SELECT d.DEPARTMENT_NAME, COUNT(DISTINCT e.EMP_ID) AS TOTAL_EMPLOYEES, SUM(s.BASE_SALARY + s.BONUS) AS TOTAL_SALARY_PAID, COUNT(DISTINCT ep.PROJECT_ID) AS TOTAL_PROJECTS_HANDLED FROM Departments d INNER JOIN Employees e ON d.DEPT_ID = e.DEPT_ID INNER JOIN Salaries s ON e.EMP_ID = s.EMP_ID LEFT JOIN Employee_Projects ep ON e.EMP_ID = ep.EMP_ID GROUP BY d.DEPT_ID, d.DEPARTMENT_NAME HAVING COUNT(DISTINCT e.EMP_ID) > 2 ORDER BY TOTAL_SALARY_PAID DESC;",
    "explanation": "Join departments with employees, salaries, and employee-project assignments, aggregate by department, keep departments with more than 2 employees, and sort by total salary descending.",
    "viewSchema": {
      "title": "Database Schema & Sample Data",
      "tableCount": 7,
      "tables": [
        {
          "name": "Employees",
          "columns": [
            "EMP_ID",
            "FIRST_NAME",
            "DEPT_ID",
            "LOCATION_ID",
            "JOB_TITLE",
            "JOIN_DATE"
          ],
          "requiredColumns": [
            "EMP_ID",
            "DEPT_ID"
          ],
          "extraColumns": [
            "FIRST_NAME",
            "LOCATION_ID",
            "JOB_TITLE",
            "JOIN_DATE"
          ]
        },
        {
          "name": "Departments",
          "columns": [
            "DEPT_ID",
            "DEPARTMENT_NAME",
            "MANAGER_ID",
            "BUDGET",
            "FLOOR_NO"
          ],
          "requiredColumns": [
            "DEPT_ID",
            "DEPARTMENT_NAME"
          ],
          "extraColumns": [
            "MANAGER_ID",
            "BUDGET",
            "FLOOR_NO"
          ]
        },
        {
          "name": "Salaries",
          "columns": [
            "EMP_ID",
            "BASE_SALARY",
            "BONUS",
            "EFFECTIVE_DATE",
            "SALARY_GRADE"
          ],
          "requiredColumns": [
            "EMP_ID",
            "BASE_SALARY",
            "BONUS"
          ],
          "extraColumns": [
            "EFFECTIVE_DATE",
            "SALARY_GRADE"
          ]
        },
        {
          "name": "Employee_Projects",
          "columns": [
            "EMP_ID",
            "PROJECT_ID",
            "ROLE",
            "ALLOCATION_PERCENT",
            "START_DATE"
          ],
          "requiredColumns": [
            "EMP_ID",
            "PROJECT_ID"
          ],
          "extraColumns": [
            "ROLE",
            "ALLOCATION_PERCENT",
            "START_DATE"
          ]
        },
        {
          "name": "Projects",
          "columns": [
            "PROJECT_ID",
            "PROJECT_NAME",
            "CLIENT_NAME",
            "START_DATE",
            "PROJECT_STATUS"
          ],
          "requiredColumns": [
            "PROJECT_ID"
          ],
          "extraColumns": [
            "PROJECT_NAME",
            "CLIENT_NAME",
            "START_DATE",
            "PROJECT_STATUS"
          ]
        },
        {
          "name": "Locations",
          "columns": [
            "LOCATION_ID",
            "CITY",
            "STATE",
            "COUNTRY",
            "OFFICE_TYPE"
          ],
          "requiredColumns": [],
          "extraColumns": [
            "LOCATION_ID",
            "CITY",
            "STATE",
            "COUNTRY",
            "OFFICE_TYPE"
          ]
        },
        {
          "name": "Performance_Reviews",
          "columns": [
            "REVIEW_ID",
            "EMP_ID",
            "RATING",
            "REVIEW_DATE",
            "REVIEWER"
          ],
          "requiredColumns": [],
          "extraColumns": [
            "REVIEW_ID",
            "EMP_ID",
            "RATING",
            "REVIEW_DATE",
            "REVIEWER"
          ]
        }
      ]
    },
    "tableSchema": [
      {
        "name": "Departments",
        "columns": [
          {
            "name": "DEPT_ID",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "DEPARTMENT_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "MANAGER_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "BUDGET",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "FLOOR_NO",
            "type": "INTEGER",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Employees",
        "columns": [
          {
            "name": "EMP_ID",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "FIRST_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "DEPT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "LOCATION_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "JOB_TITLE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "JOIN_DATE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Salaries",
        "columns": [
          {
            "name": "EMP_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "BASE_SALARY",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "BONUS",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "EFFECTIVE_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "SALARY_GRADE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Employee_Projects",
        "columns": [
          {
            "name": "EMP_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "PROJECT_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "ROLE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "ALLOCATION_PERCENT",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "START_DATE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Projects",
        "columns": [
          {
            "name": "PROJECT_ID",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "PROJECT_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "CLIENT_NAME",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "START_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "PROJECT_STATUS",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Locations",
        "columns": [
          {
            "name": "LOCATION_ID",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "CITY",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "STATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "COUNTRY",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "OFFICE_TYPE",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      },
      {
        "name": "Performance_Reviews",
        "columns": [
          {
            "name": "REVIEW_ID",
            "type": "INTEGER",
            "primaryKey": true
          },
          {
            "name": "EMP_ID",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "RATING",
            "type": "INTEGER",
            "primaryKey": false
          },
          {
            "name": "REVIEW_DATE",
            "type": "TEXT",
            "primaryKey": false
          },
          {
            "name": "REVIEWER",
            "type": "TEXT",
            "primaryKey": false
          }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Authentic Exam Input)",
        "input": {
          "Departments": [
            {
              "DEPT_ID": 1,
              "DEPARTMENT_NAME": "Engineering",
              "MANAGER_ID": 101,
              "BUDGET": 500000,
              "FLOOR_NO": 3
            },
            {
              "DEPT_ID": 2,
              "DEPARTMENT_NAME": "HR",
              "MANAGER_ID": 104,
              "BUDGET": 200000,
              "FLOOR_NO": 1
            }
          ],
          "Employees": [
            {
              "EMP_ID": 101,
              "FIRST_NAME": "Alice",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Lead Dev",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 102,
              "FIRST_NAME": "Bob",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Senior Dev",
              "JOIN_DATE": "2023-02-01"
            },
            {
              "EMP_ID": 103,
              "FIRST_NAME": "Charlie",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Junior Dev",
              "JOIN_DATE": "2023-03-01"
            },
            {
              "EMP_ID": 104,
              "FIRST_NAME": "David",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "HR Lead",
              "JOIN_DATE": "2022-01-01"
            },
            {
              "EMP_ID": 105,
              "FIRST_NAME": "Emma",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "HR Specialist",
              "JOIN_DATE": "2022-05-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 101,
              "BASE_SALARY": 80000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 102,
              "BASE_SALARY": 75000,
              "BONUS": 4000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 103,
              "BASE_SALARY": 70000,
              "BONUS": 3000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 104,
              "BASE_SALARY": 60000,
              "BONUS": 2000,
              "EFFECTIVE_DATE": "2022-01-01",
              "SALARY_GRADE": "C"
            },
            {
              "EMP_ID": 105,
              "BASE_SALARY": 55000,
              "BONUS": 1500,
              "EFFECTIVE_DATE": "2022-01-01",
              "SALARY_GRADE": "C"
            }
          ],
          "Employee_Projects": [
            {
              "EMP_ID": 101,
              "PROJECT_ID": 201,
              "ROLE": "Lead",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-15"
            },
            {
              "EMP_ID": 102,
              "PROJECT_ID": 202,
              "ROLE": "FullStack",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-02-15"
            },
            {
              "EMP_ID": 103,
              "PROJECT_ID": 201,
              "ROLE": "Frontend",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-03-15"
            }
          ],
          "Projects": [
            {
              "PROJECT_ID": 201,
              "PROJECT_NAME": "Cloud Platform",
              "CLIENT_NAME": "Client X",
              "START_DATE": "2023-01-01",
              "PROJECT_STATUS": "Active"
            },
            {
              "PROJECT_ID": 202,
              "PROJECT_NAME": "Mobile App",
              "CLIENT_NAME": "Client Y",
              "START_DATE": "2023-02-01",
              "PROJECT_STATUS": "Active"
            }
          ],
          "Locations": [
            {
              "LOCATION_ID": 1,
              "CITY": "New York",
              "STATE": "NY",
              "COUNTRY": "USA",
              "OFFICE_TYPE": "HQ"
            },
            {
              "LOCATION_ID": 2,
              "CITY": "Chicago",
              "STATE": "IL",
              "COUNTRY": "USA",
              "OFFICE_TYPE": "Branch"
            }
          ],
          "Performance_Reviews": []
        },
        "output": [
          {
            "DEPARTMENT_NAME": "Engineering",
            "TOTAL_EMPLOYEES": 3,
            "TOTAL_SALARY_PAID": 237000,
            "TOTAL_PROJECTS_HANDLED": 2
          }
        ],
        "explanation": "Engineering has 3 employees (> 2), total compensation of (85000 + 79000 + 73000) = 237000, and 2 distinct projects (201, 202). HR has 2 employees (not > 2), so it is excluded."
      }
    ],
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Department has more than 2 employees",
        "isHidden": false,
        "data": {
          "Departments": [
            {
              "DEPT_ID": 1,
              "DEPARTMENT_NAME": "Engineering",
              "MANAGER_ID": 101,
              "BUDGET": 500000,
              "FLOOR_NO": 3
            },
            {
              "DEPT_ID": 2,
              "DEPARTMENT_NAME": "HR",
              "MANAGER_ID": 104,
              "BUDGET": 200000,
              "FLOOR_NO": 1
            }
          ],
          "Employees": [
            {
              "EMP_ID": 101,
              "FIRST_NAME": "Alice",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Lead Dev",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 102,
              "FIRST_NAME": "Bob",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Senior Dev",
              "JOIN_DATE": "2023-02-01"
            },
            {
              "EMP_ID": 103,
              "FIRST_NAME": "Charlie",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Junior Dev",
              "JOIN_DATE": "2023-03-01"
            },
            {
              "EMP_ID": 104,
              "FIRST_NAME": "David",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "HR Lead",
              "JOIN_DATE": "2022-01-01"
            },
            {
              "EMP_ID": 105,
              "FIRST_NAME": "Emma",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "HR Specialist",
              "JOIN_DATE": "2022-05-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 101,
              "BASE_SALARY": 80000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 102,
              "BASE_SALARY": 75000,
              "BONUS": 4000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 103,
              "BASE_SALARY": 70000,
              "BONUS": 3000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 104,
              "BASE_SALARY": 60000,
              "BONUS": 2000,
              "EFFECTIVE_DATE": "2022-01-01",
              "SALARY_GRADE": "C"
            },
            {
              "EMP_ID": 105,
              "BASE_SALARY": 55000,
              "BONUS": 1500,
              "EFFECTIVE_DATE": "2022-01-01",
              "SALARY_GRADE": "C"
            }
          ],
          "Employee_Projects": [
            {
              "EMP_ID": 101,
              "PROJECT_ID": 201,
              "ROLE": "Lead",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-15"
            },
            {
              "EMP_ID": 102,
              "PROJECT_ID": 202,
              "ROLE": "FullStack",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-02-15"
            },
            {
              "EMP_ID": 103,
              "PROJECT_ID": 201,
              "ROLE": "Frontend",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-03-15"
            }
          ],
          "Projects": [
            {
              "PROJECT_ID": 201,
              "PROJECT_NAME": "Cloud Platform",
              "CLIENT_NAME": "Client X",
              "START_DATE": "2023-01-01",
              "PROJECT_STATUS": "Active"
            },
            {
              "PROJECT_ID": 202,
              "PROJECT_NAME": "Mobile App",
              "CLIENT_NAME": "Client Y",
              "START_DATE": "2023-02-01",
              "PROJECT_STATUS": "Active"
            }
          ],
          "Locations": [],
          "Performance_Reviews": []
        },
        "expected": [
          {
            "DEPARTMENT_NAME": "Engineering",
            "TOTAL_EMPLOYEES": 3,
            "TOTAL_SALARY_PAID": 237000,
            "TOTAL_PROJECTS_HANDLED": 2
          }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Department has exactly 2 employees (Excluded)",
        "isHidden": false,
        "data": {
          "Departments": [
            {
              "DEPT_ID": 10,
              "DEPARTMENT_NAME": "Finance",
              "MANAGER_ID": 201,
              "BUDGET": 300000,
              "FLOOR_NO": 2
            }
          ],
          "Employees": [
            {
              "EMP_ID": 201,
              "FIRST_NAME": "Grace",
              "DEPT_ID": 10,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Analyst",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 202,
              "FIRST_NAME": "Henry",
              "DEPT_ID": 10,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Auditor",
              "JOIN_DATE": "2023-02-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 201,
              "BASE_SALARY": 65000,
              "BONUS": 3000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 202,
              "BASE_SALARY": 60000,
              "BONUS": 2500,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            }
          ],
          "Employee_Projects": [],
          "Projects": [],
          "Locations": [],
          "Performance_Reviews": []
        },
        "expected": []
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Multiple qualifying departments ordered by salary descending",
        "isHidden": false,
        "data": {
          "Departments": [
            {
              "DEPT_ID": 1,
              "DEPARTMENT_NAME": "Engineering",
              "MANAGER_ID": 101,
              "BUDGET": 500000,
              "FLOOR_NO": 3
            },
            {
              "DEPT_ID": 2,
              "DEPARTMENT_NAME": "Analytics",
              "MANAGER_ID": 301,
              "BUDGET": 400000,
              "FLOOR_NO": 4
            }
          ],
          "Employees": [
            {
              "EMP_ID": 101,
              "FIRST_NAME": "Alice",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Dev",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 102,
              "FIRST_NAME": "Bob",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Dev",
              "JOIN_DATE": "2023-02-01"
            },
            {
              "EMP_ID": 103,
              "FIRST_NAME": "Charlie",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Dev",
              "JOIN_DATE": "2023-03-01"
            },
            {
              "EMP_ID": 301,
              "FIRST_NAME": "Iris",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "Data Scientist",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 302,
              "FIRST_NAME": "Jack",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "ML Engineer",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 303,
              "FIRST_NAME": "Karen",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "BI Analyst",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 304,
              "FIRST_NAME": "Leo",
              "DEPT_ID": 2,
              "LOCATION_ID": 2,
              "JOB_TITLE": "Data Engineer",
              "JOIN_DATE": "2023-01-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 101,
              "BASE_SALARY": 80000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 102,
              "BASE_SALARY": 75000,
              "BONUS": 4000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 103,
              "BASE_SALARY": 70000,
              "BONUS": 3000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 301,
              "BASE_SALARY": 85000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 302,
              "BASE_SALARY": 90000,
              "BONUS": 6000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 303,
              "BASE_SALARY": 70000,
              "BONUS": 3000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            },
            {
              "EMP_ID": 304,
              "BASE_SALARY": 75000,
              "BONUS": 4000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            }
          ],
          "Employee_Projects": [
            {
              "EMP_ID": 101,
              "PROJECT_ID": 501,
              "ROLE": "Dev",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 102,
              "PROJECT_ID": 502,
              "ROLE": "Dev",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 103,
              "PROJECT_ID": 501,
              "ROLE": "Dev",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 301,
              "PROJECT_ID": 601,
              "ROLE": "ML",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 302,
              "PROJECT_ID": 602,
              "ROLE": "ML",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 303,
              "PROJECT_ID": 603,
              "ROLE": "BI",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            }
          ],
          "Projects": [],
          "Locations": [],
          "Performance_Reviews": []
        },
        "expected": [
          {
            "DEPARTMENT_NAME": "Analytics",
            "TOTAL_EMPLOYEES": 4,
            "TOTAL_SALARY_PAID": 338000,
            "TOTAL_PROJECTS_HANDLED": 3
          },
          {
            "DEPARTMENT_NAME": "Engineering",
            "TOTAL_EMPLOYEES": 3,
            "TOTAL_SALARY_PAID": 237000,
            "TOTAL_PROJECTS_HANDLED": 2
          }
        ]
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — LEFT JOIN preserves employees without project assignments",
        "isHidden": false,
        "data": {
          "Departments": [
            {
              "DEPT_ID": 1,
              "DEPARTMENT_NAME": "R&D",
              "MANAGER_ID": 401,
              "BUDGET": 600000,
              "FLOOR_NO": 5
            }
          ],
          "Employees": [
            {
              "EMP_ID": 401,
              "FIRST_NAME": "Mia",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Researcher",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 402,
              "FIRST_NAME": "Noah",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Scientist",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 403,
              "FIRST_NAME": "Olivia",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Intern",
              "JOIN_DATE": "2023-01-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 401,
              "BASE_SALARY": 100000,
              "BONUS": 10000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 402,
              "BASE_SALARY": 95000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 403,
              "BASE_SALARY": 40000,
              "BONUS": 1000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "D"
            }
          ],
          "Employee_Projects": [
            {
              "EMP_ID": 401,
              "PROJECT_ID": 701,
              "ROLE": "Lead",
              "ALLOCATION_PERCENT": 100,
              "START_DATE": "2023-01-01"
            }
          ],
          "Projects": [],
          "Locations": [],
          "Performance_Reviews": []
        },
        "expected": [
          {
            "DEPARTMENT_NAME": "R&D",
            "TOTAL_EMPLOYEES": 3,
            "TOTAL_SALARY_PAID": 251000,
            "TOTAL_PROJECTS_HANDLED": 1
          }
        ]
      },
      {
        "id": "tc-5",
        "name": "Visible Test Case 5 — No qualifying departments (All departments <= 2 employees)",
        "isHidden": false,
        "data": {
          "Departments": [
            {
              "DEPT_ID": 1,
              "DEPARTMENT_NAME": "Legal",
              "MANAGER_ID": 501,
              "BUDGET": 150000,
              "FLOOR_NO": 2
            },
            {
              "DEPT_ID": 2,
              "DEPARTMENT_NAME": "Security",
              "MANAGER_ID": 502,
              "BUDGET": 150000,
              "FLOOR_NO": 1
            }
          ],
          "Employees": [
            {
              "EMP_ID": 501,
              "FIRST_NAME": "Liam",
              "DEPT_ID": 1,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Counsel",
              "JOIN_DATE": "2023-01-01"
            },
            {
              "EMP_ID": 502,
              "FIRST_NAME": "Sophia",
              "DEPT_ID": 2,
              "LOCATION_ID": 1,
              "JOB_TITLE": "Officer",
              "JOIN_DATE": "2023-01-01"
            }
          ],
          "Salaries": [
            {
              "EMP_ID": 501,
              "BASE_SALARY": 90000,
              "BONUS": 5000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "A"
            },
            {
              "EMP_ID": 502,
              "BASE_SALARY": 80000,
              "BONUS": 4000,
              "EFFECTIVE_DATE": "2023-01-01",
              "SALARY_GRADE": "B"
            }
          ],
          "Employee_Projects": [],
          "Projects": [],
          "Locations": [],
          "Performance_Reviews": []
        },
        "expected": []
      }
    ]
  },
  {
    "id": "recent-sql-014",
    "track": "sql",
    "dateTag": "6th Oct 2026 • Shift 2",
    "examDate": "2026-10-06",
    "shift": "Shift 2",
    "title": "Courses priced above their category average",
    "difficulty": "Medium",
    "category": "Subqueries / Correlated Subquery & AVG() Group Comparison",
    "source": "Accenture Assessment 6th Oct 2026 Shift 2 (Verified Exam Paper)",
    "isVerified": true,
    "rewardXp": 50,
    "targetMins": 15,
    "description": "Write an SQL query to join two tables and display the course title (use alias `COURSE TITLE`), category name (use alias `CATEGORY NAME`), and price (use alias `PRICE`) for courses whose price is strictly greater than the average price of their own category.\n\n### 📝 Required Output Column Aliases:\n- `COURSE TITLE`\n- `CATEGORY NAME`\n- `PRICE`\n\n---\n\n### 📌 Given Example:\n\n#### Input Data:\n**Courses**:\n| COURSE_ID | COURSE_TITLE | CATEGORY_ID | PRICE | INSTRUCTOR_ID | DURATION_HOURS |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| 101 | Java Basics | 1 | 1000 | 501 | 20 |\n| 102 | Advanced Java | 1 | 2000 | 502 | 30 |\n| 103 | Spring Boot | 1 | 3000 | 503 | 35 |\n| 104 | Python Basics | 2 | 1000 | 504 | 18 |\n| 105 | Advanced Python | 2 | 3000 | 505 | 28 |\n\n**Categories**:\n| CATEGORY_ID | CATEGORY_NAME | DESCRIPTION | STATUS | CREATED_DATE |\n| :---: | :---: | :---: | :---: | :---: |\n| 1 | Programming | Programming courses | Active | 2025-01-01 |\n| 2 | Data Science | Data related courses | Active | 2025-01-05 |\n\n#### Expected Output:\n| COURSE TITLE | CATEGORY NAME | PRICE |\n| :---: | :---: | :---: |\n| Spring Boot | Programming | 3000 |\n| Advanced Python | Data Science | 3000 |\n\n#### Explanation:\n- **Programming Category Average**: `(1000 + 2000 + 3000) / 3 = 2000`.\n  - `Java Basics (1000)`: `1000 > 2000` is false -> Excluded.\n  - `Advanced Java (2000)`: `2000 > 2000` is false -> Excluded (strictly greater condition).\n  - `Spring Boot (3000)`: `3000 > 2000` is true -> Included.\n- **Data Science Category Average**: `(1000 + 3000) / 2 = 2000`.\n  - `Python Basics (1000)`: `1000 > 2000` is false -> Excluded.\n  - `Advanced Python (3000)`: `3000 > 2000` is true -> Included.\n\n---\n\n### 💡 Core Logic & Query Construction Steps:\n1. **Join Tables**: Join `Courses c` with `Categories cat` on `c.CATEGORY_ID = cat.CATEGORY_ID`.\n2. **Calculate Average Price Per Category**: Use a correlated subquery `(SELECT AVG(c2.PRICE) FROM Courses c2 WHERE c2.CATEGORY_ID = c.CATEGORY_ID)` or an aggregated derived table with `GROUP BY CATEGORY_ID`.\n3. **Apply Strict Filtering**: Filter with `WHERE c.PRICE > (category average)`.\n4. **Column Aliases**: Return `c.COURSE_TITLE AS \"COURSE TITLE\"`, `cat.CATEGORY_NAME AS \"CATEGORY NAME\"`, and `c.PRICE AS \"PRICE\"`.\n\n> **⚠️ Important Requirement**: The average must be calculated separately for each category. A course must be compared only with the average price of its own category, not with the overall average across all courses.",
    "rules": [
      "1. Join the Courses table with the Categories table using CATEGORY_ID.",
      "2. Calculate the average PRICE separately for each category.",
      "3. Filter for courses whose PRICE is strictly greater than their own category average.",
      "4. Return the exact output column aliases: \"COURSE TITLE\", \"CATEGORY NAME\", \"PRICE\"."
    ],
    "concepts": [
      "INNER JOIN",
      "GROUP BY",
      "AVG()",
      "Correlated subquery",
      "Column aliases"
    ],
    "expectedColumns": [
      "COURSE TITLE",
      "CATEGORY NAME",
      "PRICE"
    ],
    "orderSensitive": false,
    "starterCode": "-- Write your SQL query below\nSELECT \n",
    "solution": "SELECT c.COURSE_TITLE AS `COURSE TITLE`, cat.CATEGORY_NAME AS `CATEGORY NAME`, c.PRICE AS PRICE FROM Courses c JOIN Categories cat ON c.CATEGORY_ID = cat.CATEGORY_ID WHERE c.PRICE > (SELECT AVG(c2.PRICE) FROM Courses c2 WHERE c2.CATEGORY_ID = c.CATEGORY_ID);",
    "explanation": "### Solution Breakdown:\n1. **INNER JOIN**: Join `Courses c` with `Categories cat` on `c.CATEGORY_ID = cat.CATEGORY_ID` to pair each course with its category details.\n2. **Correlated Subquery**: In the `WHERE` clause, calculate `SELECT AVG(c2.PRICE) FROM Courses c2 WHERE c2.CATEGORY_ID = c.CATEGORY_ID` to dynamically compute the average price for that specific category.\n3. **Strict Comparison**: Compare `c.PRICE > (average)` to only retain courses exceeding their category's mean price.\n4. **Alternative Approach**: You can also join with a pre-aggregated subquery `JOIN (SELECT CATEGORY_ID, AVG(PRICE) AS AVG_PRICE FROM Courses GROUP BY CATEGORY_ID) a ON c.CATEGORY_ID = a.CATEGORY_ID WHERE c.PRICE > a.AVG_PRICE`.",
    "viewSchema": {
      "title": "View Schema",
      "tableCount": 2,
      "tables": [
        {
          "name": "Courses",
          "columns": [
            "COURSE_ID",
            "COURSE_TITLE",
            "CATEGORY_ID",
            "PRICE",
            "INSTRUCTOR_ID",
            "DURATION_HOURS"
          ],
          "requiredColumns": [
            "COURSE_TITLE",
            "CATEGORY_ID",
            "PRICE"
          ],
          "extraColumns": [
            "COURSE_ID",
            "INSTRUCTOR_ID",
            "DURATION_HOURS"
          ]
        },
        {
          "name": "Categories",
          "columns": [
            "CATEGORY_ID",
            "CATEGORY_NAME",
            "DESCRIPTION",
            "STATUS",
            "CREATED_DATE"
          ],
          "requiredColumns": [
            "CATEGORY_ID",
            "CATEGORY_NAME"
          ],
          "extraColumns": [
            "DESCRIPTION",
            "STATUS",
            "CREATED_DATE"
          ]
        }
      ],
      "relationship": "Courses.CATEGORY_ID -> Categories.CATEGORY_ID",
      "difficultyNote": "Join Courses and Categories on CATEGORY_ID and use a correlated subquery or join with an aggregated subquery to filter courses priced strictly above their category average."
    },
    "tableSchema": [
      {
        "name": "Categories",
        "columns": [
          { "name": "CATEGORY_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "CATEGORY_NAME", "type": "TEXT" },
          { "name": "DESCRIPTION", "type": "TEXT" },
          { "name": "STATUS", "type": "TEXT" },
          { "name": "CREATED_DATE", "type": "TEXT" }
        ]
      },
      {
        "name": "Courses",
        "columns": [
          { "name": "COURSE_ID", "type": "INTEGER", "primaryKey": true },
          { "name": "COURSE_TITLE", "type": "TEXT" },
          { "name": "CATEGORY_ID", "type": "INTEGER" },
          { "name": "PRICE", "type": "INTEGER" },
          { "name": "INSTRUCTOR_ID", "type": "INTEGER" },
          { "name": "DURATION_HOURS", "type": "INTEGER" }
        ]
      }
    ],
    "examples": [
      {
        "title": "Example 1 (Basic case with courses above and below category average)",
        "input": {
          "Categories": [
            { "CATEGORY_ID": 1, "CATEGORY_NAME": "Programming", "DESCRIPTION": "Programming courses", "STATUS": "Active", "CREATED_DATE": "2025-01-01" },
            { "CATEGORY_ID": 2, "CATEGORY_NAME": "Data Science", "DESCRIPTION": "Data related courses", "STATUS": "Active", "CREATED_DATE": "2025-01-05" }
          ],
          "Courses": [
            { "COURSE_ID": 101, "COURSE_TITLE": "Java Basics", "CATEGORY_ID": 1, "PRICE": 1000, "INSTRUCTOR_ID": 501, "DURATION_HOURS": 20 },
            { "COURSE_ID": 102, "COURSE_TITLE": "Advanced Java", "CATEGORY_ID": 1, "PRICE": 2000, "INSTRUCTOR_ID": 502, "DURATION_HOURS": 30 },
            { "COURSE_ID": 103, "COURSE_TITLE": "Spring Boot", "CATEGORY_ID": 1, "PRICE": 3000, "INSTRUCTOR_ID": 503, "DURATION_HOURS": 35 },
            { "COURSE_ID": 104, "COURSE_TITLE": "Python Basics", "CATEGORY_ID": 2, "PRICE": 1000, "INSTRUCTOR_ID": 504, "DURATION_HOURS": 18 },
            { "COURSE_ID": 105, "COURSE_TITLE": "Advanced Python", "CATEGORY_ID": 2, "PRICE": 3000, "INSTRUCTOR_ID": 505, "DURATION_HOURS": 28 }
          ]
        },
        "output": [
          { "COURSE TITLE": "Spring Boot", "CATEGORY NAME": "Programming", "PRICE": 3000 },
          { "COURSE TITLE": "Advanced Python", "CATEGORY NAME": "Data Science", "PRICE": 3000 }
        ],
        "explanation": "Programming category average is 2000 ((1000+2000+3000)/3). Spring Boot (3000) > 2000. Data Science average is 2000 ((1000+3000)/2). Advanced Python (3000) > 2000."
      }
    ],
    "testCases": [
      {
        "id": "tc-1",
        "name": "Visible Test Case 1 — Basic case with courses above and below their category average",
        "isHidden": false,
        "data": {
          "Categories": [
            { "CATEGORY_ID": 1, "CATEGORY_NAME": "Programming", "DESCRIPTION": "Programming courses", "STATUS": "Active", "CREATED_DATE": "2025-01-01" },
            { "CATEGORY_ID": 2, "CATEGORY_NAME": "Data Science", "DESCRIPTION": "Data related courses", "STATUS": "Active", "CREATED_DATE": "2025-01-05" }
          ],
          "Courses": [
            { "COURSE_ID": 101, "COURSE_TITLE": "Java Basics", "CATEGORY_ID": 1, "PRICE": 1000, "INSTRUCTOR_ID": 501, "DURATION_HOURS": 20 },
            { "COURSE_ID": 102, "COURSE_TITLE": "Advanced Java", "CATEGORY_ID": 1, "PRICE": 2000, "INSTRUCTOR_ID": 502, "DURATION_HOURS": 30 },
            { "COURSE_ID": 103, "COURSE_TITLE": "Spring Boot", "CATEGORY_ID": 1, "PRICE": 3000, "INSTRUCTOR_ID": 503, "DURATION_HOURS": 35 },
            { "COURSE_ID": 104, "COURSE_TITLE": "Python Basics", "CATEGORY_ID": 2, "PRICE": 1000, "INSTRUCTOR_ID": 504, "DURATION_HOURS": 18 },
            { "COURSE_ID": 105, "COURSE_TITLE": "Advanced Python", "CATEGORY_ID": 2, "PRICE": 3000, "INSTRUCTOR_ID": 505, "DURATION_HOURS": 28 }
          ]
        },
        "expected": [
          { "COURSE TITLE": "Spring Boot", "CATEGORY NAME": "Programming", "PRICE": 3000 },
          { "COURSE TITLE": "Advanced Python", "CATEGORY NAME": "Data Science", "PRICE": 3000 }
        ]
      },
      {
        "id": "tc-2",
        "name": "Visible Test Case 2 — Course price exactly equal to category average (Excluded)",
        "isHidden": false,
        "data": {
          "Categories": [
            { "CATEGORY_ID": 1, "CATEGORY_NAME": "Web Development", "DESCRIPTION": "Web courses", "STATUS": "Active", "CREATED_DATE": "2025-01-01" }
          ],
          "Courses": [
            { "COURSE_ID": 201, "COURSE_TITLE": "HTML", "CATEGORY_ID": 1, "PRICE": 1000, "INSTRUCTOR_ID": 501, "DURATION_HOURS": 10 },
            { "COURSE_ID": 202, "COURSE_TITLE": "CSS", "CATEGORY_ID": 1, "PRICE": 2000, "INSTRUCTOR_ID": 502, "DURATION_HOURS": 12 },
            { "COURSE_ID": 203, "COURSE_TITLE": "JavaScript", "CATEGORY_ID": 1, "PRICE": 3000, "INSTRUCTOR_ID": 503, "DURATION_HOURS": 20 }
          ]
        },
        "expected": [
          { "COURSE TITLE": "JavaScript", "CATEGORY NAME": "Web Development", "PRICE": 3000 }
        ]
      },
      {
        "id": "tc-3",
        "name": "Visible Test Case 3 — Category with only one course (Excluded)",
        "isHidden": false,
        "data": {
          "Categories": [
            { "CATEGORY_ID": 3, "CATEGORY_NAME": "Database", "DESCRIPTION": "Database courses", "STATUS": "Active", "CREATED_DATE": "2025-02-01" }
          ],
          "Courses": [
            { "COURSE_ID": 301, "COURSE_TITLE": "SQL Basics", "CATEGORY_ID": 3, "PRICE": 2500, "INSTRUCTOR_ID": 501, "DURATION_HOURS": 15 }
          ]
        },
        "expected": []
      },
      {
        "id": "tc-4",
        "name": "Visible Test Case 4 — Different category averages",
        "isHidden": false,
        "data": {
          "Categories": [
            { "CATEGORY_ID": 4, "CATEGORY_NAME": "Computer Science", "DESCRIPTION": "CS courses", "STATUS": "Active", "CREATED_DATE": "2025-03-01" },
            { "CATEGORY_ID": 5, "CATEGORY_NAME": "AI", "DESCRIPTION": "AI courses", "STATUS": "Active", "CREATED_DATE": "2025-03-02" }
          ],
          "Courses": [
            { "COURSE_ID": 401, "COURSE_TITLE": "C++ Basics", "CATEGORY_ID": 4, "PRICE": 500, "INSTRUCTOR_ID": 501, "DURATION_HOURS": 15 },
            { "COURSE_ID": 402, "COURSE_TITLE": "Advanced C++", "CATEGORY_ID": 4, "PRICE": 1500, "INSTRUCTOR_ID": 502, "DURATION_HOURS": 25 },
            { "COURSE_ID": 403, "COURSE_TITLE": "DSA", "CATEGORY_ID": 4, "PRICE": 2500, "INSTRUCTOR_ID": 503, "DURATION_HOURS": 30 },
            { "COURSE_ID": 404, "COURSE_TITLE": "Machine Learning", "CATEGORY_ID": 5, "PRICE": 4000, "INSTRUCTOR_ID": 504, "DURATION_HOURS": 40 },
            { "COURSE_ID": 405, "COURSE_TITLE": "Deep Learning", "CATEGORY_ID": 5, "PRICE": 6000, "INSTRUCTOR_ID": 505, "DURATION_HOURS": 45 }
          ]
        },
        "expected": [
          { "COURSE TITLE": "DSA", "CATEGORY NAME": "Computer Science", "PRICE": 2500 },
          { "COURSE TITLE": "Deep Learning", "CATEGORY NAME": "AI", "PRICE": 6000 }
        ]
      }
    ]
  }
];


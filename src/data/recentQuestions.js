// src/data/recentQuestions.js
// Curated dataset containing ONLY 100% VERIFIED recent Accenture Coding Questions from actual exam papers

export const RECENT_TRACKS = [
  { id: 'dsa', label: 'DSA Coding', icon: 'Code2', color: '#38bdf8' },
  { id: 'sql', label: 'SQL Queries', icon: 'Database', color: '#f97316' },
  { id: 'frontend', label: 'Frontend DOM', icon: 'Layout', color: '#a855f7' }
];

export const recentQuestions = [
  // =========================================================================
  // VERIFIED: 8th Sept Shift 1 (DSA from authentic exam paper)
  // =========================================================================
  {
    id: 'recent-dsa-001',
    track: 'dsa',
    dateTag: '8th Sept Shift 1',
    examDate: '2024-09-08',
    shift: 'Shift 1',
    title: 'Array Index Transformation & Divisibility Sum',
    difficulty: 'Medium',
    category: 'Array / Math & Modulo Arithmetic',
    source: 'Accenture Assessment 8th Sept Shift 1 (Verified Exam Paper)',
    isVerified: true,
    description: `Given an array of integers \`nums\`, perform the following transformation on each element based on its 0-based index \`i\`:

1. Subtract \`(i % 7) * 3\` from the element.
2. If the original element \`nums[i]\` is divisible by 11, add \`nums[i] / 11\` to the modified value.

Return the total sum of all elements in the array after applying these transformations.`,
    rules: [
      '1. Subtract (i % 7) * 3 from the element.',
      '2. If the original element nums[i] is divisible by 11, add nums[i] / 11 to the modified value.',
      'Return the total sum of all elements in the array after applying these transformations.'
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      'Division for negative/zero values: 0 % 11 == 0 and 0 // 11 == 0.'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'nums = [22, 5, 14]',
        inputRaw: [22, 5, 14],
        expectedOutput: '34',
        transformedArray: '[24, 2, 8]',
        explanation: `• Index 0: nums[0] = 22
  - Subtract: (0 mod 7) * 3 = 0 * 3 = 0 -> 22 - 0 = 22
  - Divisible by 11? Yes (22 mod 11 = 0). Add 22 / 11 = 2 -> 22 + 2 = 24
• Index 1: nums[1] = 5
  - Subtract: (1 mod 7) * 3 = 1 * 3 = 3 -> 5 - 3 = 2
  - Divisible by 11? No.
• Index 2: nums[2] = 14
  - Subtract: (2 mod 7) * 3 = 2 * 3 = 6 -> 14 - 6 = 8
  - Divisible by 11? No.
• Final Transformed Array: [24, 2, 8]
• Total Sum: 24 + 2 + 8 = 34`
      },
      {
        id: 'tc-2',
        input: 'nums = [0, 11, 33, 7, 0]',
        inputRaw: [0, 11, 33, 7, 0],
        expectedOutput: '25',
        transformedArray: '[0, 9, 30, -2, -12]',
        explanation: `• Index 0: nums[0] = 0 -> 0 - 0 + (0 / 11) = 0
• Index 1: nums[1] = 11 -> 11 - 3 + (11 / 11) = 9
• Index 2: nums[2] = 33 -> 33 - 6 + (33 / 11) = 30
• Index 3: nums[3] = 7 -> 7 - 9 + 0 = -2
• Index 4: nums[4] = 0 -> 0 - 12 + 0 = -12
• Final Transformed Array: [0, 9, 30, -2, -12]
• Total Sum: 0 + 9 + 30 - 2 - 12 = 25`
      },
      {
        id: 'tc-3',
        input: 'nums = [11, 22, 33, 44]',
        inputRaw: [11, 22, 33, 44],
        expectedOutput: '102',
        transformedArray: '[12, 21, 30, 39]',
        explanation: `• Index 0: 11 - 0 + 1 = 12
• Index 1: 22 - 3 + 2 = 21
• Index 2: 33 - 6 + 3 = 30
• Index 3: 44 - 9 + 4 = 39
• Final Transformed Array: [12, 21, 30, 39]
• Total Sum: 12 + 21 + 30 + 39 = 102`
      },
      {
        id: 'tc-4',
        input: 'nums = [7, 14, 21, 28, 35, 42, 49]',
        inputRaw: [7, 14, 21, 28, 35, 42, 49],
        expectedOutput: '133',
        transformedArray: '[7, 11, 15, 19, 23, 27, 31]',
        explanation: `• Elements transformed:
  i=0: 7 - 0 = 7
  i=1: 14 - 3 = 11
  i=2: 21 - 6 = 15
  i=3: 28 - 9 = 19
  i=4: 35 - 12 = 23
  i=5: 42 - 15 = 27
  i=6: 49 - 18 = 31
• Final Transformed Array: [7, 11, 15, 19, 23, 27, 31]
• Total Sum of all transformed elements: 133`
      }
    ],
    solutions: {
      python: `def transform_and_sum(nums):
    total_sum = 0
    
    for i, num in enumerate(nums):
        val = num - ((i % 7) * 3)
        if num % 11 == 0:
            val += num // 11
        total_sum += val
        
    return total_sum

# Test
print(transform_and_sum([22, 5, 14]))       # Output: 34
print(transform_and_sum([0, 11, 33, 7, 0])) # Output: 25`,

      java: `public class Solution {
    public static long transformAndSum(int[] nums) {
        long totalSum = 0;
        
        for (int i = 0; i < nums.length; i++) {
            long val = nums[i] - ((i % 7) * 3);
            if (nums[i] % 11 == 0) {
                val += nums[i] / 11;
            }
            totalSum += val;
        }
        
        return totalSum;
    }
    
    public static void main(String[] args) {
        int[] test1 = {22, 5, 14};
        int[] test2 = {0, 11, 33, 7, 0};
        System.out.println("Test 1 Result: " + transformAndSum(test1)); // Output: 34
        System.out.println("Test 2 Result: " + transformAndSum(test2)); // Output: 25
    }
}`,

      cpp: `#include <iostream>
#include <vector>

long long transformAndSum(const std::vector<int>& nums) {
    long long totalSum = 0;
    for (int i = 0; i < nums.size(); ++i) {
        long long val = nums[i] - ((i % 7) * 3);
        if (nums[i] % 11 == 0) {
            val += nums[i] / 11;
        }
        totalSum += val;
    }
    return totalSum;
}

int main() {
    std::cout << transformAndSum({22, 5, 14}) << std::endl;       // 34
    std::cout << transformAndSum({0, 11, 33, 7, 0}) << std::endl; // 25
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static long TransformAndSum(int[] nums) {
        long totalSum = 0;
        for (int i = 0; i < nums.Length; i++) {
            long val = nums[i] - ((i % 7) * 3);
            if (nums[i] % 11 == 0) {
                val += nums[i] / 11;
            }
            totalSum += val;
        }
        return totalSum;
    }

    public static void Main() {
        int[] test1 = {22, 5, 14};
        int[] test2 = {0, 11, 33, 7, 0};
        Console.WriteLine("Test 1 Result: " + TransformAndSum(test1)); // Output: 34
        Console.WriteLine("Test 2 Result: " + TransformAndSum(test2)); // Output: 25
    }
}`,

      javascript: `function transformAndSum(nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i] - ((i % 7) * 3);
    if (nums[i] % 11 === 0) {
      val += Math.trunc(nums[i] / 11);
    }
    totalSum += val;
  }
  return totalSum;
}

console.log(transformAndSum([22, 5, 14]));       // 34
console.log(transformAndSum([0, 11, 33, 7, 0])); // 25`
    },
    runSimulation: (inputArray) => {
      let total = 0;
      const transformed = inputArray.map((num, i) => {
        let val = num - ((i % 7) * 3);
        if (num % 11 === 0) {
          val += Math.trunc(num / 11);
        }
        total += val;
        return val;
      });
      return { total, transformed };
    }
  },

  // =========================================================================
  // VERIFIED: 8th Sept Shift 2 (DSA from authentic exam paper)
  // =========================================================================
  {
    id: 'recent-dsa-002',
    track: 'dsa',
    dateTag: '8th Sept Shift 2',
    examDate: '2024-09-08',
    shift: 'Shift 2',
    title: 'Equivalent Sum (EqSum) Prefix Count',
    difficulty: 'Medium',
    category: 'Prefix Sum / String & Number Parsing',
    source: 'Accenture Assessment 8th Sept Shift 2 (Verified Exam Paper)',
    isVerified: true,
    description: `You are given a target positive integer \`N\` (e.g., 112).
For any integer \`X\`, define its **Equivalent Sum (EqSum(X))** as the sum of all prefix sub-numbers formed by reading \`X\` from left to right.

Specifically, if \`X\` is represented as a string of digits \`d1 d2 ... dk\`:
\`\`\`
EqSum(X) = d1 + int(d1 d2) + ... + int(d1 d2 ... dk)
\`\`\`

For example, for \`X = 112\`:
\`\`\`
EqSum(112) = 1 + 11 + 112 = 124
\`\`\`

**Goal:** Count (or list) all integers \`X\` such that:
1. \`1 <= X < N\`
2. \`EqSum(X) > N\``,
    rules: [
      '1. 1 <= X < N',
      '2. EqSum(X) > N'
    ],
    formulaBreakdown: [
      { num: 8, digits: '8', prefixes: '8', calculation: '8', eqSum: 8 },
      { num: 59, digits: '5, 9', prefixes: '5, 59', calculation: '5 + 59', eqSum: 64 },
      { num: 89, digits: '8, 9', prefixes: '8, 89', calculation: '8 + 89', eqSum: 97 },
      { num: 105, digits: '1, 0, 5', prefixes: '1, 10, 105', calculation: '1 + 10 + 105', eqSum: 116 }
    ],
    constraints: [
      '1 <= N <= 10^5',
      'Return either the total count of valid numbers or the list of valid numbers.'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'N = 112',
        inputRaw: 112,
        expectedOutput: 'Total Count: 10',
        validNumbers: [102, 103, 104, 105, 106, 107, 108, 109, 110, 111],
        explanation: `We need to find all X < 112 where EqSum(X) > 112.
• Checking X = 105:
  EqSum(105) = 1 + 10 + 105 = 116 (116 > 112) Valid
• Checking X = 99:
  EqSum(99) = 9 + 99 = 108 (108 <= 112) Invalid
• Checking X = 102:
  EqSum(102) = 1 + 10 + 102 = 113 (113 > 112) Valid
• Valid Numbers (X < 112): 102, 103, 104, 105, 106, 107, 108, 109, 110, 111
• Total Count: 10`
      },
      {
        id: 'tc-2',
        input: 'N = 50',
        inputRaw: 50,
        expectedOutput: 'Total Count: 3',
        validNumbers: [47, 48, 49],
        explanation: `• For 2-digit numbers X < 50:
  EqSum(46) = 4 + 46 = 50 (50 > 50 is false) Invalid
  EqSum(47) = 4 + 47 = 51 (51 > 50) Valid
  EqSum(48) = 4 + 48 = 52 (52 > 50) Valid
  EqSum(49) = 4 + 49 = 53 (53 > 50) Valid
• Valid Numbers (X < 50): 47, 48, 49
• Total Count: 3`
      },
      {
        id: 'tc-3',
        input: 'N = 10',
        inputRaw: 10,
        expectedOutput: 'Total Count: 0',
        validNumbers: [],
        explanation: `• For single digit numbers X < 10, EqSum(X) = X <= 9.
• None of the integers X < 10 satisfy EqSum(X) > 10.
• Total Count: 0 valid integers.`
      },
      {
        id: 'tc-4',
        input: 'N = 250',
        inputRaw: 250,
        expectedOutput: 'Total Count: 23',
        explanation: `• Evaluates 3-digit prefix sums from 1 to 249.
• Checks X < 250 with EqSum(X) > 250.
• Total Count: 23 valid integers.`
      }
    ],
    solutions: {
      python: `def calculate_eqsum(x: int) -> int:
    """Calculates EqSum by summing all prefix values of number x."""
    s = str(x)
    return sum(int(s[:i]) for i in range(1, len(s) + 1))

def find_valid_numbers(N: int) -> list[int]:
    """Returns all numbers X < N such that EqSum(X) > N."""
    valid_numbers = []
    
    for x in range(1, N):
        if calculate_eqsum(x) > N:
            valid_numbers.append(x)
            
    return valid_numbers

# Test Cases
print("N=112:", len(find_valid_numbers(112)), find_valid_numbers(112)) # 10 valid
print("N=50:", len(find_valid_numbers(50)), find_valid_numbers(50))   # 3 valid`,

      java: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    // Helper method to calculate EqSum for a given number X
    public static long calculateEqSum(int x) {
        String s = String.valueOf(x);
        long totalEqSum = 0;
        
        for (int i = 1; i <= s.length(); i++) {
            totalEqSum += Long.parseLong(s.substring(0, i));
        }
        
        return totalEqSum;
    }
    
    // Function to find all X < N where EqSum(X) > N
    public static List<Integer> findValidNumbers(int N) {
        List<Integer> validNumbers = new ArrayList<>();
        
        for (int x = 1; x < N; x++) {
            if (calculateEqSum(x) > N) {
                validNumbers.add(x);
            }
        }
        
        return validNumbers;
    }

    public static void main(String[] args) {
        List<Integer> res1 = findValidNumbers(112);
        System.out.println("N=112 count: " + res1.size()); // Output: 10
        System.out.println("Numbers: " + res1);
        
        List<Integer> res2 = findValidNumbers(50);
        System.out.println("N=50 count: " + res2.size());  // Output: 3
        System.out.println("Numbers: " + res2);
    }
}`,

      cpp: `#include <iostream>
#include <vector>
#include <string>

long long calculateEqSum(int x) {
    std::string s = std::to_string(x);
    long long total = 0;
    for (size_t i = 1; i <= s.length(); ++i) {
        total += std::stoll(s.substr(0, i));
    }
    return total;
}

std::vector<int> findValidNumbers(int N) {
    std::vector<int> valid;
    for (int x = 1; x < N; ++x) {
        if (calculateEqSum(x) > N) {
            valid.push_back(x);
        }
    }
    return valid;
}

int main() {
    auto res1 = findValidNumbers(112);
    std::cout << "N=112 count: " << res1.size() << std::endl; // 10
    auto res2 = findValidNumbers(50);
    std::cout << "N=50 count: " << res2.size() << std::endl;   // 3
    return 0;
}`,

      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static long CalculateEqSum(int x) {
        string s = x.ToString();
        long totalEqSum = 0;
        for (int i = 1; i <= s.Length; i++) {
            totalEqSum += long.Parse(s.Substring(0, i));
        }
        return totalEqSum;
    }

    public static List<int> FindValidNumbers(int N) {
        List<int> validNumbers = new List<int>();
        for (int x = 1; x < N; x++) {
            if (CalculateEqSum(x) > N) {
                validNumbers.Add(x);
            }
        }
        return validNumbers;
    }

    public static void Main() {
        List<int> res1 = FindValidNumbers(112);
        Console.WriteLine("N=112 count: " + res1.Count); // Output: 10
        List<int> res2 = FindValidNumbers(50);
        Console.WriteLine("N=50 count: " + res2.Count);  // Output: 3
    }
}`,

      javascript: `function calculateEqSum(x) {
  const s = String(x);
  let total = 0;
  for (let i = 1; i <= s.length; i++) {
    total += Number(s.substring(0, i));
  }
  return total;
}

function findValidNumbers(N) {
  const validNumbers = [];
  for (let x = 1; x < N; x++) {
    if (calculateEqSum(x) > N) {
      validNumbers.push(x);
    }
  }
  return validNumbers;
}

console.log("N=112 count:", findValidNumbers(112).length); // 10
console.log("N=50 count:", findValidNumbers(50).length);   // 3`
    },
    runSimulation: (N) => {
      const calculateEqSum = (x) => {
        const s = String(x);
        let total = 0;
        for (let i = 1; i <= s.length; i++) {
          total += Number(s.substring(0, i));
        }
        return total;
      };
      const valid = [];
      for (let x = 1; x < N; x++) {
        if (calculateEqSum(x) > N) {
          valid.push(x);
        }
      }
      return { count: valid.length, numbers: valid };
    }
  },

  // =========================================================================
  // VERIFIED: 10th Sept Shift 1 (DSA from authentic exam paper)
  // =========================================================================
  {
    id: 'recent-dsa-003',
    track: 'dsa',
    dateTag: '10th Sept Shift 1',
    examDate: '2024-09-10',
    shift: 'Shift 1',
    title: 'Running Sum and Divisibility Count',
    difficulty: 'Easy',
    category: 'Math / Prefix Sum & Modulo',
    source: 'Accenture Assessment 10th Sept Shift 1 (Verified Exam Paper)',
    isVerified: true,
    description: `Given a positive integer \`N\`, calculate the running sum from 1 to \`N\`. Increment a counter every time the running sum is divisible by 5. Output the total running sum and final count.`,
    rules: [
      '1. Initialize running_sum = 0 and count = 0.',
      '2. Loop i from 1 to N: add i to running_sum.',
      '3. If running_sum % 5 == 0, increment count by 1.',
      '4. Output the final running sum and total count.'
    ],
    constraints: [
      '1 <= N <= 10^6',
      'Time Complexity: O(N)',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'N = 10',
        inputRaw: 10,
        expectedOutput: 'Running Sum = 55, Count = 4',
        explanation: `• i = 1: sum = 1
• i = 2: sum = 3
• i = 3: sum = 6
• i = 4: sum = 10 -> (10 mod 5 == 0) -> Count = 1
• i = 5: sum = 15 -> (15 mod 5 == 0) -> Count = 2
• i = 6: sum = 21
• i = 7: sum = 28
• i = 8: sum = 36
• i = 9: sum = 45 -> (45 mod 5 == 0) -> Count = 3
• i = 10: sum = 55 -> (55 mod 5 == 0) -> Count = 4
• Final Output: Running Sum = 55, Count = 4`
      },
      {
        id: 'tc-2',
        input: 'N = 5',
        inputRaw: 5,
        expectedOutput: 'Running Sum = 15, Count = 2',
        explanation: `• i = 1: sum = 1
• i = 2: sum = 3
• i = 3: sum = 6
• i = 4: sum = 10 -> (10 mod 5 == 0) -> Count = 1
• i = 5: sum = 15 -> (15 mod 5 == 0) -> Count = 2
• Final Output: Running Sum = 15, Count = 2`
      },
      {
        id: 'tc-3',
        input: 'N = 20',
        inputRaw: 20,
        expectedOutput: 'Running Sum = 210, Count = 8',
        explanation: `• Running sum from 1 to 20 equals 210.
• Multiple totals at i=4, 5, 9, 10, 14, 15, 19, 20 are divisible by 5.
• Final Output: Running Sum = 210, Count = 8`
      },
      {
        id: 'tc-4',
        input: 'N = 15',
        inputRaw: 15,
        expectedOutput: 'Running Sum = 120, Count = 6',
        explanation: `• Running sum from 1 to 15 equals 120.
• Totals divisible by 5 occur at i = 4 (sum 10), i = 5 (sum 15), i = 9 (sum 45), i = 10 (sum 55), i = 14 (sum 105), and i = 15 (sum 120).
• Total divisible occurrences: 6.
• Final Output: Running Sum = 120, Count = 6`
      }
    ],
    solutions: {
      python: `def calculate_running_sum_and_divisibility(n):
    running_sum = 0
    count = 0
    
    for i in range(1, n + 1):
        running_sum += i
        if running_sum % 5 == 0:
            count += 1
            
    print(f"Running Sum = {running_sum}")
    print(f"Count = {count}")
    return running_sum, count

# Test Case
if __name__ == "__main__":
    n = 10
    print(f"Input: {n}")
    calculate_running_sum_and_divisibility(n)`,

      java: `public class RunningSumDivisibility {
    public static void calculateRunningSumAndDivisibility(int n) {
        int runningSum = 0;
        int count = 0;

        for (int i = 1; i <= n; i++) {
            runningSum += i;
            if (runningSum % 5 == 0) {
                count++;
            }
        }

        System.out.println("Running Sum = " + runningSum);
        System.out.println("Count = " + count);
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Input: " + n);
        calculateRunningSumAndDivisibility(n);
    }
}`,

      csharp: `using System;

class RunningSumDivisibility {
    public static void CalculateRunningSumAndDivisibility(int n) {
        int runningSum = 0;
        int count = 0;

        for (int i = 1; i <= n; i++) {
            runningSum += i;
            if (runningSum % 5 == 0) {
                count++;
            }
        }

        Console.WriteLine($"Running Sum = {runningSum}");
        Console.WriteLine($"Count = {count}");
    }

    static void Main() {
        int n = 10;
        Console.WriteLine($"Input: {n}");
        CalculateRunningSumAndDivisibility(n);
    }
}`,

      cpp: `#include <iostream>

void calculateRunningSumAndDivisibility(int n) {
    long long runningSum = 0;
    int count = 0;
    for (int i = 1; i <= n; ++i) {
        runningSum += i;
        if (runningSum % 5 == 0) {
            count++;
        }
    }
    std::cout << "Running Sum = " << runningSum << std::endl;
    std::cout << "Count = " << count << std::endl;
}

int main() {
    int n = 10;
    std::cout << "Input: " << n << std::endl;
    calculateRunningSumAndDivisibility(n);
    return 0;
}`,

      javascript: `function calculateRunningSumAndDivisibility(n) {
  let runningSum = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    runningSum += i;
    if (runningSum % 5 === 0) {
      count++;
    }
  }
  console.log(\`Running Sum = \${runningSum}\`);
  console.log(\`Count = \${count}\`);
  return { runningSum, count };
}

calculateRunningSumAndDivisibility(10);`
    },
    runSimulation: (n) => {
      let runningSum = 0;
      let count = 0;
      const history = [];
      for (let i = 1; i <= n; i++) {
        runningSum += i;
        const isDiv = runningSum % 5 === 0;
        if (isDiv) count++;
        if (i <= 10) {
          history.push(`i=${i}: sum=${runningSum}${isDiv ? ' [Divisible by 5! Count=' + count + ']' : ''}`);
        }
      }
      return { runningSum, count, history };
    }
  },

  // =========================================================================
  // 14th Dec 2025 Shift 1 (DSA: Power of a Number)
  // =========================================================================
  {
    id: 'recent-dsa-004',
    track: 'dsa',
    dateTag: '14th Dec 2025 • Shift 1',
    examDate: '2025-12-14',
    shift: 'Shift 1',
    title: 'Power of a Number',
    difficulty: 'Easy',
    category: 'Math & Exponentiation',
    source: 'Accenture Assessment 14th Dec 2025 (2025 PYQ Series)',
    isVerified: true,
    description: `Given two integers \`N\` and \`P\`, calculate \`N\` raised to the power \`P\` (i.e. N^P).

Multiply N by itself P times to compute the exponentiation result.`,
    rules: [
      '1. Given base integer N and exponent integer P.',
      '2. Calculate N multiplied by itself P times.',
      '3. For any non-zero N, N^0 equals 1.',
      '4. Return the calculated power value.'
    ],
    constraints: [
      '0 <= N <= 20',
      '0 <= P <= 30',
      'Time Complexity: O(P) or O(log P)',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'N = 2, P = 5',
        inputRaw: { N: 2, P: 5 },
        expectedOutput: '32',
        explanation: `2^5 = 2 * 2 * 2 * 2 * 2 = 32.`
      },
      {
        id: 'tc-2',
        input: 'N = 3, P = 4',
        inputRaw: { N: 3, P: 4 },
        expectedOutput: '81',
        explanation: `3^4 = 3 * 3 * 3 * 3 = 81.`
      },
      {
        id: 'tc-3',
        input: 'N = 5, P = 0',
        inputRaw: { N: 5, P: 0 },
        expectedOutput: '1',
        explanation: `Any non-zero number raised to the power 0 is 1: 5^0 = 1.`
      },
      {
        id: 'tc-4',
        input: 'N = 10, P = 3',
        inputRaw: { N: 10, P: 3 },
        expectedOutput: '1000',
        explanation: `10^3 = 10 * 10 * 10 = 1000.`
      }
    ],
    solutions: {
      python: `def calculate_power(n, p):
    # Method 1: Exponentiation
    return n ** p

# Test Case
if __name__ == "__main__":
    print(calculate_power(2, 5)) # Output: 32
    print(calculate_power(3, 4)) # Output: 81`,

      java: `public class Solution {
    public static long calculatePower(int n, int p) {
        long result = 1;
        for (int i = 0; i < p; i++) {
            result *= n;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(calculatePower(2, 5)); // Output: 32
        System.out.println(calculatePower(3, 4)); // Output: 81
    }
}`,

      cpp: `#include <iostream>

long long calculatePower(int n, int p) {
    long long result = 1;
    for (int i = 0; i < p; ++i) {
        result *= n;
    }
    return result;
}

int main() {
    std::cout << calculatePower(2, 5) << std::endl; // Output: 32
    std::cout << calculatePower(3, 4) << std::endl; // Output: 81
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static long CalculatePower(int n, int p) {
        long result = 1;
        for (int i = 0; i < p; i++) {
            result *= n;
        }
        return result;
    }

    public static void Main() {
        Console.WriteLine(CalculatePower(2, 5)); // Output: 32
        Console.WriteLine(CalculatePower(3, 4)); // Output: 81
    }
}`,

      javascript: `function calculatePower(n, p) {
  return Math.pow(n, p);
}

console.log(calculatePower(2, 5)); // Output: 32
console.log(calculatePower(3, 4)); // Output: 81`
    },
    runSimulation: (N, P) => Math.pow(N, P)
  },

  // =========================================================================
  // 1st Aug 2021 Slot 1 (DSA: Move Hyphens to Front)
  // =========================================================================
  {
    id: 'recent-dsa-005',
    track: 'dsa',
    dateTag: '1st Aug 2021 • Slot 1',
    examDate: '2021-08-01',
    shift: 'Slot 1',
    title: 'Move Hyphens to Front',
    difficulty: 'Medium',
    category: 'String Manipulation',
    source: 'Accenture Offcampus 1st Aug 2021 Slot 1 (Actual Question 09)',
    isVerified: true,
    description: `Implement the following function:
\`\`\`c
char* MoveHyphen(char str[], int n);
\`\`\`
The function accepts a string \`str\` of length \`n\`, containing alphabets and hyphens (-). Implement the function to move all hyphens (-) in the string to the front of the given string.

**NOTE:** Return \`null\` if \`str\` is null.`,
    rules: [
      '1. Return null if input string str is null.',
      '2. Move all hyphen characters (-) to the beginning of the string.',
      '3. Maintain the original relative order of all alphabet characters.',
      '4. Return the resulting string.'
    ],
    constraints: [
      '1 <= n <= 10^5',
      'str contains English alphabets and hyphens (-).',
      'Time Complexity: O(N)',
      'Space Complexity: O(N)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'str = "String-Compare", n = 14',
        inputRaw: 'String-Compare',
        expectedOutput: '"-StringCompare"',
        explanation: `All hyphens are moved to the beginning of the string while preserving the order of the remaining characters:
• Total hyphens: 1 ('-')
• Remaining letters: "StringCompare"
• Final Output: "-StringCompare"`
      },
      {
        id: 'tc-2',
        input: 'str = "Move-Hyphens-To-Front", n = 21',
        inputRaw: 'Move-Hyphens-To-Front',
        expectedOutput: '"---MoveHyphensToFront"',
        explanation: `• Total hyphens: 3 ('---')
• Remaining letters: "MoveHyphensToFront"
• Final Output: "---MoveHyphensToFront"`
      },
      {
        id: 'tc-3',
        input: 'str = "NoHyphensHere", n = 13',
        inputRaw: 'NoHyphensHere',
        expectedOutput: '"NoHyphensHere"',
        explanation: `No hyphens found; the string remains unchanged.`
      }
    ],
    solutions: {
      python: `def move_hyphen(s, n):
    if s is None:
        return None
    
    hyphens = []
    letters = []
    
    for ch in s:
        if ch == '-':
            hyphens.append(ch)
        else:
            letters.append(ch)
            
    return ''.join(hyphens) + ''.join(letters)

# Test Cases
print(move_hyphen("String-Compare", 14))        # "-StringCompare"
print(move_hyphen("Move-Hyphens-To-Front", 21)) # "---MoveHyphensToFront"`,

      java: `public class Solution {
    public static String moveHyphen(String str, int n) {
        if (str == null) return null;
        
        StringBuilder hyphens = new StringBuilder();
        StringBuilder letters = new StringBuilder();
        
        for (int i = 0; i < n; i++) {
            char ch = str.charAt(i);
            if (ch == '-') {
                hyphens.append(ch);
            } else {
                letters.append(ch);
            }
        }
        
        return hyphens.toString() + letters.toString();
    }

    public static void main(String[] args) {
        System.out.println(moveHyphen("String-Compare", 14)); // -StringCompare
    }
}`,

      cpp: `#include <iostream>
#include <string>

std::string moveHyphen(const std::string& str, int n) {
    std::string hyphens = "";
    std::string letters = "";
    
    for (int i = 0; i < n; ++i) {
        if (str[i] == '-') {
            hyphens += '-';
        } else {
            letters += str[i];
        }
    }
    
    return hyphens + letters;
}

int main() {
    std::cout << moveHyphen("String-Compare", 14) << std::endl; // -StringCompare
    return 0;
}`,

      csharp: `using System;
using System.Text;

public class Solution {
    public static string MoveHyphen(string str, int n) {
        if (str == null) return null;
        
        StringBuilder hyphens = new StringBuilder();
        StringBuilder letters = new StringBuilder();
        
        for (int i = 0; i < n; i++) {
            if (str[i] == '-') {
                hyphens.Append('-');
            } else {
                letters.Append(str[i]);
            }
        }
        
        return hyphens.ToString() + letters.ToString();
    }

    public static void Main() {
        Console.WriteLine(MoveHyphen("String-Compare", 14)); // -StringCompare
    }
}`,

      javascript: `function moveHyphen(str, n) {
  if (str === null) return null;
  
  let hyphens = '';
  let letters = '';
  
  for (let i = 0; i < n; i++) {
    if (str[i] === '-') {
      hyphens += '-';
    } else {
      letters += str[i];
    }
  }
  
  return hyphens + letters;
}

console.log(moveHyphen("String-Compare", 14)); // -StringCompare`
    },
    runSimulation: (str) => {
      if (str === null) return null;
      let hyphens = '';
      let letters = '';
      for (let ch of str) {
        if (ch === '-') hyphens += '-';
        else letters += ch;
      }
      return hyphens + letters;
    }
  },

  // =========================================================================
  // 18th Dec 2025 Shift 2 (DSA: Count Special Elements)
  // =========================================================================
  {
    id: 'recent-dsa-006',
    track: 'dsa',
    dateTag: '18th Dec 2025 • Shift 2',
    examDate: '2025-12-18',
    shift: 'Shift 2',
    title: 'Count Special Elements',
    difficulty: 'Easy',
    category: 'Array / Parity & Index Matching',
    source: 'Accenture Assessment 18th Dec 2025 (Q6 Special Elements)',
    isVerified: true,
    description: `Given an array of integers \`nums\`, count the elements with **odd index and odd value**, and the elements with **even index and even value**.

Return the total count of such special elements.
**Note:** Use 0-based indexing.`,
    rules: [
      '1. Iterate through the array using 0-based indexing (i = 0 to nums.length - 1).',
      '2. If (i % 2 == 0 && nums[i] % 2 == 0): Count as even index & even value.',
      '3. If (i % 2 != 0 && nums[i] % 2 != 0): Count as odd index & odd value.',
      '4. Return the total count of matched elements.'
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^9',
      'Time Complexity: O(N)',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'nums = [2, 1, 4, 3, 6, 5]',
        inputRaw: [2, 1, 4, 3, 6, 5],
        expectedOutput: '6',
        explanation: `• Even index & even value: 3 -> (nums[0]=2, nums[2]=4, nums[4]=6)
• Odd index & odd value: 3 -> (nums[1]=1, nums[3]=3, nums[5]=5)
• Total matching count: 3 + 3 = 6`
      },
      {
        id: 'tc-2',
        input: 'nums = [1, 2, 3, 4, 5]',
        inputRaw: [1, 2, 3, 4, 5],
        expectedOutput: '0',
        explanation: `• Even indices (0, 2, 4) contain odd numbers (1, 3, 5).
• Odd indices (1, 3) contain even numbers (2, 4).
• Total matching count = 0.`
      },
      {
        id: 'tc-3',
        input: 'nums = [10, 11, 12, 13]',
        inputRaw: [10, 11, 12, 13],
        expectedOutput: '4',
        explanation: `• Even pairs: nums[0]=10, nums[2]=12 (2 elements)
• Odd pairs: nums[1]=11, nums[3]=13 (2 elements)
• Total count: 4`
      },
      {
        id: 'tc-4',
        input: 'nums = [2, 4, 6, 8]',
        inputRaw: [2, 4, 6, 8],
        expectedOutput: '2',
        explanation: `• Index 0 (even) and value 2 (even) -> Matches.
• Index 1 (odd) and value 4 (even) -> No match.
• Index 2 (even) and value 6 (even) -> Matches.
• Index 3 (odd) and value 8 (even) -> No match.
• Total matching special elements: 2.`
      }
    ],
    solutions: {
      python: `def count_special_elements(nums):
    count = 0
    for i, val in enumerate(nums):
        if (i % 2 == 0 and val % 2 == 0) or (i % 2 != 0 and val % 2 != 0):
            count += 1
    return count

# Test Case
print(count_special_elements([2, 1, 4, 3, 6, 5])) # Output: 6
print(count_special_elements([1, 2, 3, 4, 5]))    # Output: 0`,

      java: `public class Solution {
    public static int countSpecialElements(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = {2, 1, 4, 3, 6, 5};
        System.out.println(countSpecialElements(arr)); // Output: 6
    }
}`,

      cpp: `#include <iostream>
#include <vector>

int countSpecialElements(const std::vector<int>& nums) {
    int count = 0;
    for (int i = 0; i < (int)nums.size(); ++i) {
        if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {
            count++;
        }
    }
    return count;
}

int main() {
    std::cout << countSpecialElements({2, 1, 4, 3, 6, 5}) << std::endl; // Output: 6
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static int CountSpecialElements(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.Length; i++) {
            if ((i % 2 == 0 && nums[i] % 2 == 0) || (i % 2 != 0 && nums[i] % 2 != 0)) {
                count++;
            }
        }
        return count;
    }

    public static void Main() {
        int[] arr = {2, 1, 4, 3, 6, 5};
        Console.WriteLine(CountSpecialElements(arr)); // Output: 6
    }
}`,

      javascript: `function countSpecialElements(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((i % 2 === 0 && nums[i] % 2 === 0) || (i % 2 !== 0 && nums[i] % 2 !== 0)) {
      count++;
    }
  }
  return count;
}

console.log(countSpecialElements([2, 1, 4, 3, 6, 5])); // Output: 6`
    },
    runSimulation: (nums) => {
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
        if ((i % 2 === 0 && nums[i] % 2 === 0) || (i % 2 !== 0 && nums[i] % 2 !== 0)) {
          count++;
        }
      }
      return count;
    }
  },

  // =========================================================================
  // 22nd Dec 2025 Shift 1 (DSA: Reverse a Number)
  // =========================================================================
  {
    id: 'recent-dsa-007',
    track: 'dsa',
    dateTag: '22nd Dec 2025 • Shift 1',
    examDate: '2025-12-22',
    shift: 'Shift 1',
    title: 'Reverse a Number',
    difficulty: 'Easy',
    category: 'Math & Digits / Modulo Arithmetic',
    source: 'Accenture Assessment 22nd Dec 2025 (2025 PYQ Series)',
    isVerified: true,
    description: `Given an integer \`N\`, return the integer obtained after reversing the digits of \`N\`.

Extract the digits from right to left using modulo 10 arithmetic to construct the reversed integer.`,
    rules: [
      '1. Initialize rev = 0.',
      '2. In a loop while N > 0: extract digit = N % 10, rev = rev * 10 + digit, N = N // 10.',
      '3. Return the reversed integer rev.'
    ],
    constraints: [
      '1 <= N <= 10^9',
      'N does not have leading zeros.',
      'Time Complexity: O(log10(N))',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'N = 12345',
        inputRaw: 12345,
        expectedOutput: '54321',
        explanation: `Reversing the digits of 12345 gives 54321:
• 12345 % 10 = 5 -> rev = 5
• 1234 % 10 = 4 -> rev = 54
• 123 % 10 = 3 -> rev = 543
• 12 % 10 = 2 -> rev = 5432
• 1 % 10 = 1 -> rev = 54321`
      },
      {
        id: 'tc-2',
        input: 'N = 98760',
        inputRaw: 98760,
        expectedOutput: '6789',
        explanation: `Reversing 98760 removes the trailing zero when converted to an integer: 6789.`
      },
      {
        id: 'tc-3',
        input: 'N = 7',
        inputRaw: 7,
        expectedOutput: '7',
        explanation: `A single digit number reversed is itself: 7.`
      },
      {
        id: 'tc-4',
        input: 'N = 1000',
        inputRaw: 1000,
        expectedOutput: '1',
        explanation: `Trailing zeros are dropped during integer reversal: 1000 reversed as an integer is 1.`
      }
    ],
    solutions: {
      python: `def reverse_number(n):
    rev = 0
    while n > 0:
        rev = (rev * 10) + (n % 10)
        n //= 10
    return rev

# Test Cases
print(reverse_number(12345)) # Output: 54321
print(reverse_number(98760)) # Output: 6789`,

      java: `public class Solution {
    public static long reverseNumber(long n) {
        long rev = 0;
        while (n > 0) {
            rev = (rev * 10) + (n % 10);
            n /= 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        System.out.println(reverseNumber(12345)); // Output: 54321
        System.out.println(reverseNumber(98760)); // Output: 6789
    }
}`,

      cpp: `#include <iostream>

long long reverseNumber(long long n) {
    long long rev = 0;
    while (n > 0) {
        rev = (rev * 10) + (n % 10);
        n /= 10;
    }
    return rev;
}

int main() {
    std::cout << reverseNumber(12345) << std::endl; // Output: 54321
    std::cout << reverseNumber(98760) << std::endl; // Output: 6789
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static long ReverseNumber(long n) {
        long rev = 0;
        while (n > 0) {
            rev = (rev * 10) + (n % 10);
            n /= 10;
        }
        return rev;
    }

    public static void Main() {
        Console.WriteLine(ReverseNumber(12345)); // Output: 54321
        Console.WriteLine(ReverseNumber(98760)); // Output: 6789
    }
}`,

      javascript: `function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    rev = (rev * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(98760)); // Output: 6789`
    },
    runSimulation: (N) => {
      let rev = 0;
      let temp = N;
      while (temp > 0) {
        rev = rev * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
      }
      return rev;
    }
  },

  // =========================================================================
  // VERIFIED: 10th Sept Shift 1 (Frontend from authentic exam paper)
  // =========================================================================
  {
    id: 'recent-fe-001',
    track: 'frontend',
    dateTag: '10th Sept Shift 1',
    examDate: '2024-09-10',
    shift: 'Shift 1',
    title: 'Random Quote Generator',
    difficulty: 'Easy',
    category: 'DOM Manipulation / Math.random() & Event Handling',
    source: 'Accenture Assessment 10th Sept Shift 1 (Verified Exam Paper)',
    isVerified: true,
    description: `Create a **Random Quote Generator** using HTML, CSS, and JavaScript that picks a quote randomly using \`Math.random()\` on button click.`,
    objectives: [
      'HTML: Container with paragraph #quoteDisplay (class .quote-text) and button #quoteBtn that triggers quote generation.',
      'CSS: Styled quote box with border-left accent #2563eb, italic typography, and rounded button.',
      'JavaScript: Quotes array with at least 4 quotes. On click, calculate random index Math.floor(Math.random() * quotes.length) and update #quoteDisplay.innerText with quotation marks.'
    ],
    starterHTML: `<div class="quote-container">
    <!-- TODO: Add a paragraph with id="quoteDisplay" and class="quote-text" -->
    <p id="quoteDisplay" class="quote-text">Click the button to show a quote!</p>
    
    <!-- TODO: Add a button with id="quoteBtn" that triggers generateQuote() on click -->
    <button id="quoteBtn" onclick="generateQuote()">Show Random Quote</button>
</div>`,
    starterCSS: `/* CSS Styling */
.quote-container {
    background-color: #f8fafc;
    border-left: 4px solid #2563eb;
    padding: 24px;
    border-radius: 8px;
    text-align: center;
}

.quote-text {
    font-size: 1.2rem;
    font-style: italic;
    color: #334155;
    margin-bottom: 15px;
}

button {
    padding: 10px 20px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
}`,
    starterJS: `// Available quotes pool
const quotes = [
    "Believe in yourself.",
    "Success comes with consistency.",
    "Never stop learning.",
    "Hard work beats talent."
];

function generateQuote() {
    // TODO: 1. Generate a random integer index from 0 to quotes.length - 1
    // const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // TODO: 2. Update the text content of #quoteDisplay with the selected quote wrapped in quotation marks
    
}`,
    solutionHTML: `<div class="quote-container">
    <p id="quoteDisplay" class="quote-text">Click the button to show a quote!</p>
    <button id="quoteBtn" onclick="generateQuote()">Show Random Quote</button>
</div>`,
    solutionCSS: `/* CSS Styling */
.quote-container {
    background-color: #f8fafc;
    border-left: 4px solid #2563eb;
    padding: 24px;
    border-radius: 8px;
    text-align: center;
}

.quote-text {
    font-size: 1.2rem;
    font-style: italic;
    color: #334155;
    margin-bottom: 15px;
}

button {
    padding: 10px 20px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
}`,
    solutionJS: `const quotes = [
    "Believe in yourself.",
    "Success comes with consistency.",
    "Never stop learning.",
    "Hard work beats talent."
];

function generateQuote() {
    // 1. Calculate random integer index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // 2. Update the DOM element
    const quoteEl = document.getElementById("quoteDisplay");
    if (quoteEl) {
        quoteEl.innerText = \`"\${quotes[randomIndex]}"\`;
    }
}`,
    solutionExplanation: `### Solution Breakdown: Random Quote Generator (Accenture 10th Sept Shift 1)

1. **HTML Architecture**:
   - Create a wrapping container \`<div class="quote-container">\`.
   - Add \`<p id="quoteDisplay" class="quote-text">\` to display the active quote.
   - Add \`<button id="quoteBtn" onclick="generateQuote()">\` to trigger random quote selection.

2. **CSS Styling**:
   - Style \`.quote-container\` with a light slate background and a vivid left border accent: \`border-left: 4px solid #2563eb\`.
   - Set \`.quote-text\` to \`font-style: italic\` and deep slate color \`#334155\` with generous spacing.
   - Style the button with accent blue background, white text, and rounded border.

3. **JavaScript DOM & Math Logic**:
   - \`Math.random()\` yields a floating point number in the range \`[0, 1)\`.
   - Multiplying by \`quotes.length\` scales this to \`[0, 4)\`.
   - \`Math.floor()\` rounds down to the nearest integer (\`0, 1, 2, 3\`), giving a valid array index.
   - Update \`#quoteDisplay.innerText\` with template literals: \`"\${quotes[randomIndex]}"\`.`,
    liveSandbox: true
  }
];

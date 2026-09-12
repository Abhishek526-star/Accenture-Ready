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
  // VERIFIED: 10th Dec 2025 (Count Valid Blocks)
  // =========================================================================
  {
    id: 'recent-dsa-008',
    track: 'dsa',
    dateTag: '10th Dec 2025 • Shift 1',
    examDate: '2025-12-10',
    shift: 'Shift 1',
    title: 'Count Valid Blocks',
    difficulty: 'Easy',
    category: 'Arrays / Consecutive Elements (Run-Length)',
    source: 'Accenture Assessment 10th Dec 2025 (PYQ Series)',
    isVerified: true,
    description: `You are given an integer \`N\` and an array \`A\` of \`N\` integers.

The array is divided into blocks, where a **block** is a group of consecutive elements having the exact same value.

A block is called a **Valid Block** if:
\`\`\`
Length of the block == value of its elements
\`\`\`

Your task is to count and return the total number of valid blocks in the array.

**Important**:
Only consecutive occurrences form a block. For example, \`[2, 2, 1, 2, 2]\` contains two separate blocks of 2, each of length 2 (both valid). The two groups cannot be combined because 1 separates them.`,
    rules: [
      '1. Scan the array from left to right.',
      '2. For every consecutive block of equal elements, count its length: blockLength.',
      '3. If blockLength == currentValue, increment the total valid block count by 1.',
      '4. Continue until the entire array is processed, and return count.'
    ],
    constraints: [
      '1 <= N <= 10^5',
      '1 <= A[i] <= 10^5',
      'Time Complexity: O(N) (Single Pass)',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'N = 7, A = [1, 2, 2, 3, 3, 3, 4]',
        inputRaw: { n: 7, a: [1, 2, 2, 3, 3, 3, 4] },
        expectedOutput: '3',
        explanation: `Blocks:
• [1] → length = 1, value = 1 → Valid ✅
• [2, 2] → length = 2, value = 2 → Valid ✅
• [3, 3, 3] → length = 3, value = 3 → Valid ✅
• [4] → length = 1, value = 4 → Invalid ❌
Total Valid Blocks = 3.`
      },
      {
        id: 'tc-2',
        input: 'N = 6, A = [1, 2, 2, 3, 3, 3]',
        inputRaw: { n: 6, a: [1, 2, 2, 3, 3, 3] },
        expectedOutput: '3',
        explanation: `Blocks:
• [1] → length 1 == value 1 ✅
• [2, 2] → length 2 == value 2 ✅
• [3, 3, 3] → length 3 == value 3 ✅
Total Valid Blocks = 3.`
      },
      {
        id: 'tc-3',
        input: 'N = 5, A = [2, 2, 2, 4, 4]',
        inputRaw: { n: 5, a: [2, 2, 2, 4, 4] },
        expectedOutput: '0',
        explanation: `Blocks:
• [2, 2, 2] → length = 3, value = 2 → Invalid ❌
• [4, 4] → length = 2, value = 4 → Invalid ❌
Total Valid Blocks = 0.`
      },
      {
        id: 'tc-4',
        input: 'N = 8, A = [2, 2, 1, 2, 2, 3, 3, 3]',
        inputRaw: { n: 8, a: [2, 2, 1, 2, 2, 3, 3, 3] },
        expectedOutput: '4',
        explanation: `Blocks:
• [2, 2] → length = 2, value = 2 → Valid ✅
• [1] → length = 1, value = 1 → Valid ✅
• [2, 2] → length = 2, value = 2 → Valid ✅
• [3, 3, 3] → length = 3, value = 3 → Valid ✅
Total Valid Blocks = 4.`
      }
    ],
    solutions: {
      python: `def count_valid_blocks(n, a):
    count = 0
    i = 0
    while i < n:
        current_value = a[i]
        block_length = 0
        while i < n and a[i] == current_value:
            block_length += 1
            i += 1
        if block_length == current_value:
            count += 1
    return count

# Test Cases
print(count_valid_blocks(7, [1, 2, 2, 3, 3, 3, 4])) # Output: 3
print(count_valid_blocks(8, [2, 2, 1, 2, 2, 3, 3, 3])) # Output: 4`,

      java: `public class Solution {
    public static int countValidBlocks(int n, int[] a) {
        int count = 0;
        int i = 0;
        while (i < n) {
            int currentValue = a[i];
            int blockLength = 0;
            while (i < n && a[i] == currentValue) {
                blockLength++;
                i++;
            }
            if (blockLength == currentValue) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countValidBlocks(7, new int[]{1, 2, 2, 3, 3, 3, 4})); // Output: 3
        System.out.println(countValidBlocks(8, new int[]{2, 2, 1, 2, 2, 3, 3, 3})); // Output: 4
    }
}`,

      cpp: `#include <iostream>
#include <vector>

int countValidBlocks(int n, const std::vector<int>& a) {
    int count = 0;
    int i = 0;
    while (i < n) {
        int currentValue = a[i];
        int blockLength = 0;
        while (i < n && a[i] == currentValue) {
            blockLength++;
            i++;
        }
        if (blockLength == currentValue) {
            count++;
        }
    }
    return count;
}

int main() {
    std::cout << countValidBlocks(7, {1, 2, 2, 3, 3, 3, 4}) << std::endl; // Output: 3
    std::cout << countValidBlocks(8, {2, 2, 1, 2, 2, 3, 3, 3}) << std::endl; // Output: 4
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static int CountValidBlocks(int n, int[] a) {
        int count = 0;
        int i = 0;
        while (i < n) {
            int currentValue = a[i];
            int blockLength = 0;
            while (i < n && a[i] == currentValue) {
                blockLength++;
                i++;
            }
            if (blockLength == currentValue) {
                count++;
            }
        }
        return count;
    }

    public static void Main() {
        Console.WriteLine(CountValidBlocks(7, new int[] {1, 2, 2, 3, 3, 3, 4})); // Output: 3
        Console.WriteLine(CountValidBlocks(8, new int[] {2, 2, 1, 2, 2, 3, 3, 3})); // Output: 4
    }
}`,

      javascript: `function countValidBlocks(n, a) {
  let count = 0;
  let i = 0;
  while (i < n) {
    const currentValue = a[i];
    let blockLength = 0;
    while (i < n && a[i] === currentValue) {
      blockLength++;
      i++;
    }
    if (blockLength === currentValue) {
      count++;
    }
  }
  return count;
}

console.log(countValidBlocks(7, [1, 2, 2, 3, 3, 3, 4])); // Output: 3
console.log(countValidBlocks(8, [2, 2, 1, 2, 2, 3, 3, 3])); // Output: 4`
    },
    runSimulation: (n, a) => {
      let count = 0;
      let i = 0;
      while (i < n) {
        const val = a[i];
        let len = 0;
        while (i < n && a[i] === val) {
          len++;
          i++;
        }
        if (len === val) {
          count++;
        }
      }
      return count;
    }
  },

  // =========================================================================
  // VERIFIED: 15th Nov 2025 Shift 2 (Sum of Prime Numbers in a Range)
  // =========================================================================
  {
    id: 'recent-dsa-009',
    track: 'dsa',
    dateTag: '15th Nov 2025 • Shift 2',
    examDate: '2025-11-15',
    shift: 'Shift 2',
    title: 'Sum of Prime Numbers in a Range',
    difficulty: 'Easy',
    category: 'Math & Prime Numbers / Loops & Range Traversal',
    source: 'Accenture Assessment 15th Nov 2025 (Shift 2 PYQ Series)',
    isVerified: true,
    description: `Given two integers \`M\` and \`N\`, find the sum of all prime numbers between \`M\` and \`N\` (inclusive).

A **prime number** is a number greater than 1 that has exactly two factors: 1 and itself.
Negative numbers, 0, and 1 are **not** prime numbers.

**Example**:
\`M = 10\`, \`N = 20\`
Prime numbers between 10 and 20 are:
\`11, 13, 17, 19\`
Total Sum:
\`11 + 13 + 17 + 19 = 60\``,
    rules: [
      '1. Loop through every integer from M to N (inclusive).',
      '2. For each number, check if it is prime (greater than 1 and not divisible by any integer from 2 up to sqrt(num)).',
      '3. If prime, add it to the running total sum.',
      '4. Return the final sum.'
    ],
    constraints: [
      '-100 <= M <= N <= 10^5',
      'Time Complexity: O((N - M + 1) * sqrt(N))',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'M = 10, N = 20',
        inputRaw: { m: 10, n: 20 },
        expectedOutput: '60',
        explanation: `Prime numbers: 11, 13, 17, 19.
Sum = 11 + 13 + 17 + 19 = 60.`
      },
      {
        id: 'tc-2',
        input: 'M = 1, N = 10',
        inputRaw: { m: 1, n: 10 },
        expectedOutput: '17',
        explanation: `Prime numbers: 2, 3, 5, 7 (1 is not prime).
Sum = 2 + 3 + 5 + 7 = 17.`
      },
      {
        id: 'tc-3',
        input: 'M = 14, N = 16',
        inputRaw: { m: 14, n: 16 },
        expectedOutput: '0',
        explanation: `Numbers in range: 14, 15, 16. None of these are prime numbers.
Sum = 0.`
      },
      {
        id: 'tc-4',
        input: 'M = -5, N = 5',
        inputRaw: { m: -5, n: 5 },
        expectedOutput: '10',
        explanation: `Negative numbers, 0, and 1 are not prime.
The primes in range are 2, 3, 5.
Sum = 2 + 3 + 5 = 10.`
      }
    ],
    solutions: {
      python: `def is_prime(num):
    if num <= 1:
        return False
    i = 2
    while i * i <= num:
        if num % i == 0:
            return False
        i += 1
    return True

def calculate_prime_sum(m, n):
    total_sum = 0
    for i in range(m, n + 1):
        if is_prime(i):
            total_sum += i
    return total_sum

# Test Cases
print(calculate_prime_sum(10, 20)) # Output: 60
print(calculate_prime_sum(1, 10))  # Output: 17
print(calculate_prime_sum(-5, 5))  # Output: 10`,

      java: `public class Solution {
    public static boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    public static long calculatePrimeSum(int m, int n) {
        long sum = 0;
        for (int i = m; i <= n; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(calculatePrimeSum(10, 20)); // Output: 60
        System.out.println(calculatePrimeSum(1, 10));  // Output: 17
        System.out.println(calculatePrimeSum(-5, 5));  // Output: 10
    }
}`,

      cpp: `#include <iostream>

bool is_prime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

long long calculate_prime_sum(int m, int n) {
    long long sum = 0;
    for (int i = m; i <= n; i++) {
        if (is_prime(i)) {
            sum += i;
        }
    }
    return sum;
}

int main() {
    std::cout << calculate_prime_sum(10, 20) << std::endl; // Output: 60
    std::cout << calculate_prime_sum(1, 10) << std::endl;  // Output: 17
    std::cout << calculate_prime_sum(-5, 5) << std::endl;  // Output: 10
    return 0;
}
`,

      csharp: `using System;

public class Solution {
    public static bool IsPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    public static long CalculatePrimeSum(int m, int n) {
        long sum = 0;
        for (int i = m; i <= n; i++) {
            if (IsPrime(i)) {
                sum += i;
            }
        }
        return sum;
    }

    public static void Main() {
        Console.WriteLine(CalculatePrimeSum(10, 20)); // Output: 60
        Console.WriteLine(CalculatePrimeSum(1, 10));  // Output: 17
        Console.WriteLine(CalculatePrimeSum(-5, 5));  // Output: 10
    }
}`,

      javascript: `function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function calculatePrimeSum(m, n) {
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(calculatePrimeSum(10, 20)); // Output: 60
console.log(calculatePrimeSum(1, 10));  // Output: 17
console.log(calculatePrimeSum(-5, 5));  // Output: 10`
    },
    runSimulation: (m, n) => {
      let sum = 0;
      const checkPrime = (x) => {
        if (x <= 1) return false;
        for (let i = 2; i * i <= x; i++) {
          if (x % i === 0) return false;
        }
        return true;
      };
      for (let i = m; i <= n; i++) {
        if (checkPrime(i)) {
          sum += i;
        }
      }
      return sum;
    }
  },

  // =========================================================================
  // VERIFIED: 20th Nov 2025 (Difference Between Digit Sums)
  // =========================================================================
  {
    id: 'recent-dsa-010',
    track: 'dsa',
    dateTag: '20th Nov 2025 • Shift 1',
    examDate: '2025-11-20',
    shift: 'Shift 1',
    title: 'Difference Between Digit Sums',
    difficulty: 'Easy',
    category: 'Mathematical Problems / Number Theory & Digit Manipulation',
    source: 'Accenture Assessment 20th Nov 2025 (PYQ Series)',
    isVerified: true,
    description: `Given two integers \`M\` and \`N\`, calculate and return the absolute difference between:

1. The sum of digits of all numbers divisible by 4 between \`M\` and \`N\` (inclusive).
2. The sum of digits of all numbers divisible by 7 between \`M\` and \`N\` (inclusive).

⚠️ **Important Edge Case**:
A number can be divisible by both 4 and 7 (such as 28, 56, 84...).
When a number is divisible by both 4 and 7, its digit sum **must be added to both** \`sum4\` and \`sum7\`. Use separate \`if\` conditions rather than \`else if\`.`,
    rules: [
      '1. Loop through each number i from M to N (inclusive).',
      '2. If i % 4 == 0, calculate its digit sum and add it to sum4.',
      '3. If i % 7 == 0, calculate its digit sum and add it to sum7.',
      '4. Numbers divisible by both 4 and 7 must contribute to both sum4 and sum7.',
      '5. Return the absolute difference: abs(sum4 - sum7).'
    ],
    constraints: [
      '1 <= M <= N <= 10^5',
      'Time Complexity: O((N - M + 1) * log10(N))',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'M = 1, N = 20',
        inputRaw: { m: 1, n: 20 },
        expectedOutput: '12',
        explanation: `• Numbers divisible by 4: 4, 8, 12, 16, 20
  Digit sums: 4 + 8 + (1+2) + (1+6) + (2+0) = 4 + 8 + 3 + 7 + 2 = 24
• Numbers divisible by 7: 7, 14
  Digit sums: 7 + (1+4) = 7 + 5 = 12
• Absolute Difference: |24 - 12| = 12.`
      },
      {
        id: 'tc-2',
        input: 'M = 1, N = 10',
        inputRaw: { m: 1, n: 10 },
        expectedOutput: '5',
        explanation: `• Divisible by 4: 4 (digit sum 4), 8 (digit sum 8) -> sum4 = 12
• Divisible by 7: 7 (digit sum 7) -> sum7 = 7
• Absolute Difference: |12 - 7| = 5.`
      },
      {
        id: 'tc-3',
        input: 'M = 28, N = 28',
        inputRaw: { m: 28, n: 28 },
        expectedOutput: '0',
        explanation: `• 28 is divisible by both 4 and 7!
• Digit sum: 2 + 8 = 10
• Added to sum4: 10, and added to sum7: 10
• Absolute Difference: |10 - 10| = 0.`
      },
      {
        id: 'tc-4',
        input: 'M = 40, N = 50',
        inputRaw: { m: 40, n: 50 },
        expectedOutput: '5',
        explanation: `• Multiples of 4: 40 (4), 44 (8), 48 (12) -> sum4 = 24
• Multiples of 7: 42 (6), 49 (13) -> sum7 = 19
• Absolute Difference: |24 - 19| = 5.`
      }
    ],
    solutions: {
      python: `def calculate_difference(m, n):
    def digit_sum(num):
        s = 0
        while num > 0:
            s += num % 10
            num //= 10
        return s

    sum4 = 0
    sum7 = 0
    for i in range(m, n + 1):
        d_sum = digit_sum(i)
        if i % 4 == 0:
            sum4 += d_sum
        if i % 7 == 0:
            sum7 += d_sum
            
    return abs(sum4 - sum7)

# Test Cases
print(calculate_difference(1, 20))  # Output: 12
print(calculate_difference(1, 10))  # Output: 5
print(calculate_difference(28, 28)) # Output: 0
print(calculate_difference(40, 50)) # Output: 5`,

      java: `public class Solution {
    public static int digitSum(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }

    public static int calculateDifference(int m, int n) {
        int sum4 = 0;
        int sum7 = 0;

        for (int i = m; i <= n; i++) {
            int d = digitSum(i);
            if (i % 4 == 0) {
                sum4 += d;
            }
            if (i % 7 == 0) {
                sum7 += d;
            }
        }

        return Math.abs(sum4 - sum7);
    }

    public static void main(String[] args) {
        System.out.println(calculateDifference(1, 20));  // Output: 12
        System.out.println(calculateDifference(1, 10));  // Output: 5
        System.out.println(calculateDifference(28, 28)); // Output: 0
        System.out.println(calculateDifference(40, 50)); // Output: 5
    }
}`,

      cpp: `#include <iostream>
#include <cstdlib>

int digitSum(int num) {
    int sum = 0;
    while (num > 0) {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}

int calculateDifference(int m, int n) {
    int sum4 = 0;
    int sum7 = 0;

    for (int i = m; i <= n; i++) {
        int d = digitSum(i);
        if (i % 4 == 0) {
            sum4 += d;
        }
        if (i % 7 == 0) {
            sum7 += d;
        }
    }

    return std::abs(sum4 - sum7);
}

int main() {
    std::cout << calculateDifference(1, 20) << std::endl;  // Output: 12
    std::cout << calculateDifference(1, 10) << std::endl;  // Output: 5
    std::cout << calculateDifference(28, 28) << std::endl; // Output: 0
    std::cout << calculateDifference(40, 50) << std::endl; // Output: 5
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static int DigitSum(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }

    public static int CalculateDifference(int m, int n) {
        int sum4 = 0;
        int sum7 = 0;

        for (int i = m; i <= n; i++) {
            int d = DigitSum(i);
            if (i % 4 == 0) {
                sum4 += d;
            }
            if (i % 7 == 0) {
                sum7 += d;
            }
        }

        return Math.Abs(sum4 - sum7);
    }

    public static void Main() {
        Console.WriteLine(CalculateDifference(1, 20));  // Output: 12
        Console.WriteLine(CalculateDifference(1, 10));  // Output: 5
        Console.WriteLine(CalculateDifference(28, 28)); // Output: 0
        Console.WriteLine(CalculateDifference(40, 50)); // Output: 5
    }
}`,

      javascript: `function digitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function calculateDifference(m, n) {
  let sum4 = 0;
  let sum7 = 0;

  for (let i = m; i <= n; i++) {
    const d = digitSum(i);
    if (i % 4 === 0) {
      sum4 += d;
    }
    if (i % 7 === 0) {
      sum7 += d;
    }
  }

  return Math.abs(sum4 - sum7);
}

console.log(calculateDifference(1, 20));  // Output: 12
console.log(calculateDifference(1, 10));  // Output: 5
console.log(calculateDifference(28, 28)); // Output: 0
console.log(calculateDifference(40, 50)); // Output: 5`
    },
    runSimulation: (m, n) => {
      const getDigitSum = (num) => {
        let sum = 0;
        while (num > 0) {
          sum += num % 10;
          num = Math.floor(num / 10);
        }
        return sum;
      };

      let sum4 = 0;
      let sum7 = 0;
      for (let i = m; i <= n; i++) {
        const d = getDigitSum(i);
        if (i % 4 === 0) sum4 += d;
        if (i % 7 === 0) sum7 += d;
      }
      return Math.abs(sum4 - sum7);
    }
  },

  // =========================================================================
  // VERIFIED: 31st Dec 2025 (Rat Food Consumption)
  // =========================================================================
  {
    id: 'recent-dsa-011',
    track: 'dsa',
    dateTag: '31st Dec 2025 • Shift 1',
    examDate: '2025-12-31',
    shift: 'Shift 1',
    title: 'Rat Food Consumption',
    difficulty: 'Easy',
    category: 'Arrays / Greedy & Prefix Sum',
    source: 'Accenture Assessment 31st Dec 2025 (PYQ Series)',
    isVerified: true,
    description: `The function accepts:
- \`r\`: number of rats in the area
- \`unit\`: amount of food required by each rat
- \`n\`: number of houses
- \`arr[]\`: amount of food available in each house

Return the **minimum number of houses** required from the start of the array to collect enough food to satisfy all the rats.

**Formula**:
\`\`\`
Total Food Required = r * unit
\`\`\`

Start from the first house and accumulate food sequentially until \`accumulatedFood >= requiredFood\`.
When fulfilled, return the number of houses used (\`i + 1\`).

⚠️ **Special Conditions**:
1. **Array is NULL or Empty**: Return \`-1\`.
2. **Total food in all houses is insufficient** (< Total Food Required): Return \`0\`.`,
    rules: [
      '1. Check if the array is null or n <= 0. If so, return -1 immediately.',
      '2. Calculate requiredFood = r * unit.',
      '3. Iterate through arr from index 0 to n - 1, keeping a running sum of collected food.',
      '4. If collected food becomes >= requiredFood at index i, return i + 1.',
      '5. If the entire array is traversed and collected food is still < requiredFood, return 0.'
    ],
    constraints: [
      '0 <= n <= 10^5',
      '0 <= arr[i] <= 10^4',
      '1 <= r, unit <= 10^4',
      'Time Complexity: O(N) (Single Pass)',
      'Space Complexity: O(1)'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'r = 7, unit = 2, n = 8, arr = [2, 8, 3, 5, 7, 4, 1, 2]',
        inputRaw: { r: 7, unit: 2, n: 8, arr: [2, 8, 3, 5, 7, 4, 1, 2] },
        expectedOutput: '4',
        explanation: `• Total food required: 7 * 2 = 14
• House 1: 2 (sum = 2)
• House 2: 8 (sum = 10)
• House 3: 3 (sum = 13)
• House 4: 5 (sum = 18 >= 14)
First 4 houses provide sufficient food.`
      },
      {
        id: 'tc-2',
        input: 'r = 5, unit = 2, n = 5, arr = [15, 2, 3, 4, 5]',
        inputRaw: { r: 5, unit: 2, n: 5, arr: [15, 2, 3, 4, 5] },
        expectedOutput: '1',
        explanation: `• Total required = 5 * 2 = 10
• House 1: 15 >= 10. Only 1 house needed.`
      },
      {
        id: 'tc-3',
        input: 'r = 10, unit = 2, n = 5, arr = [2, 3, 4, 5, 6]',
        inputRaw: { r: 10, unit: 2, n: 5, arr: [2, 3, 4, 5, 6] },
        expectedOutput: '5',
        explanation: `• Total required = 10 * 2 = 20
• Sum of all 5 houses = 2 + 3 + 4 + 5 + 6 = 20 >= 20. Exactly 5 houses required.`
      },
      {
        id: 'tc-4',
        input: 'r = 10, unit = 5, n = 4, arr = [2, 3, 4, 5]',
        inputRaw: { r: 10, unit: 5, n: 4, arr: [2, 3, 4, 5] },
        expectedOutput: '0',
        explanation: `• Required = 10 * 5 = 50
• Total food available = 2 + 3 + 4 + 5 = 14 < 50.
• Food is insufficient across all houses -> return 0.`
      },
      {
        id: 'tc-5',
        input: 'r = 5, unit = 2, n = 0, arr = []',
        inputRaw: { r: 5, unit: 2, n: 0, arr: [] },
        expectedOutput: '-1',
        explanation: `• Array is empty / NULL -> return -1.`
      },
      {
        id: 'tc-6',
        input: 'r = 4, unit = 3, n = 5, arr = [2, 4, 6, 8, 10]',
        inputRaw: { r: 4, unit: 3, n: 5, arr: [2, 4, 6, 8, 10] },
        expectedOutput: '3',
        explanation: `• Required = 4 * 3 = 12
• House 1: 2 (sum = 2)
• House 2: 4 (sum = 6)
• House 3: 6 (sum = 12 >= 12).
Exactly 3 houses needed.`
      }
    ],
    solutions: {
      python: `def minimum_houses(r, unit, n, arr):
    if arr is None or n == 0 or len(arr) == 0:
        return -1

    required_food = r * unit
    food = 0

    for i in range(min(n, len(arr))):
        food += arr[i]
        if food >= required_food:
            return i + 1

    return 0

# Test Cases
print(minimum_houses(7, 2, 8, [2, 8, 3, 5, 7, 4, 1, 2])) # Output: 4
print(minimum_houses(5, 2, 5, [15, 2, 3, 4, 5]))          # Output: 1
print(minimum_houses(10, 2, 5, [2, 3, 4, 5, 6]))          # Output: 5
print(minimum_houses(10, 5, 4, [2, 3, 4, 5]))             # Output: 0
print(minimum_houses(5, 2, 0, []))                        # Output: -1
print(minimum_houses(4, 3, 5, [2, 4, 6, 8, 10]))          # Output: 3`,

      java: `public class Solution {
    public static int minimumHouses(int r, int unit, int n, int[] arr) {
        if (arr == null || n == 0 || arr.length == 0) {
            return -1;
        }

        int requiredFood = r * unit;
        int food = 0;

        for (int i = 0; i < Math.min(n, arr.length); i++) {
            food += arr[i];
            if (food >= requiredFood) {
                return i + 1;
            }
        }

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minimumHouses(7, 2, 8, new int[]{2, 8, 3, 5, 7, 4, 1, 2})); // 4
        System.out.println(minimumHouses(5, 2, 5, new int[]{15, 2, 3, 4, 5}));          // 1
        System.out.println(minimumHouses(10, 2, 5, new int[]{2, 3, 4, 5, 6}));          // 5
        System.out.println(minimumHouses(10, 5, 4, new int[]{2, 3, 4, 5}));             // 0
        System.out.println(minimumHouses(5, 2, 0, new int[]{}));                         // -1
        System.out.println(minimumHouses(4, 3, 5, new int[]{2, 4, 6, 8, 10}));          // 3
    }
}`,

      cpp: `#include <iostream>
#include <vector>

int minimumHouses(int r, int unit, int n, const std::vector<int>& arr) {
    if (arr.empty() || n == 0) {
        return -1;
    }

    int requiredFood = r * unit;
    int food = 0;

    for (int i = 0; i < n && i < (int)arr.size(); i++) {
        food += arr[i];
        if (food >= requiredFood) {
            return i + 1;
        }
    }

    return 0;
}

int main() {
    std::cout << minimumHouses(7, 2, 8, {2, 8, 3, 5, 7, 4, 1, 2}) << std::endl; // 4
    std::cout << minimumHouses(5, 2, 5, {15, 2, 3, 4, 5}) << std::endl;          // 1
    std::cout << minimumHouses(10, 2, 5, {2, 3, 4, 5, 6}) << std::endl;          // 5
    std::cout << minimumHouses(10, 5, 4, {2, 3, 4, 5}) << std::endl;             // 0
    std::cout << minimumHouses(5, 2, 0, {}) << std::endl;                         // -1
    std::cout << minimumHouses(4, 3, 5, {2, 4, 6, 8, 10}) << std::endl;          // 3
    return 0;
}`,

      csharp: `using System;

public class Solution {
    public static int MinimumHouses(int r, int unit, int n, int[] arr) {
        if (arr == null || n == 0 || arr.Length == 0) {
            return -1;
        }

        int requiredFood = r * unit;
        int food = 0;

        for (int i = 0; i < Math.Min(n, arr.Length); i++) {
            food += arr[i];
            if (food >= requiredFood) {
                return i + 1;
            }
        }

        return 0;
    }

    public static void Main() {
        Console.WriteLine(MinimumHouses(7, 2, 8, new int[] {2, 8, 3, 5, 7, 4, 1, 2})); // 4
        Console.WriteLine(MinimumHouses(5, 2, 5, new int[] {15, 2, 3, 4, 5}));          // 1
        Console.WriteLine(MinimumHouses(10, 2, 5, new int[] {2, 3, 4, 5, 6}));          // 5
        Console.WriteLine(MinimumHouses(10, 5, 4, new int[] {2, 3, 4, 5}));             // 0
        Console.WriteLine(MinimumHouses(5, 2, 0, new int[] {}));                         // -1
        Console.WriteLine(MinimumHouses(4, 3, 5, new int[] {2, 4, 6, 8, 10}));          // 3
    }
}`,

      javascript: `function minimumHouses(r, unit, n, arr) {
  if (!arr || n === 0 || arr.length === 0) {
    return -1;
  }

  const requiredFood = r * unit;
  let food = 0;

  for (let i = 0; i < Math.min(n, arr.length); i++) {
    food += arr[i];
    if (food >= requiredFood) {
      return i + 1;
    }
  }

  return 0;
}

console.log(minimumHouses(7, 2, 8, [2, 8, 3, 5, 7, 4, 1, 2])); // 4
console.log(minimumHouses(5, 2, 5, [15, 2, 3, 4, 5]));          // 1
console.log(minimumHouses(10, 2, 5, [2, 3, 4, 5, 6]));          // 5
console.log(minimumHouses(10, 5, 4, [2, 3, 4, 5]));             // 0
console.log(minimumHouses(5, 2, 0, []));                        // -1
console.log(minimumHouses(4, 3, 5, [2, 4, 6, 8, 10]));          // 3`
    },
    runSimulation: (r, unit, n, arr) => {
      if (!arr || n === 0 || arr.length === 0) return -1;
      const required = r * unit;
      let food = 0;
      for (let i = 0; i < Math.min(n, arr.length); i++) {
        food += arr[i];
        if (food >= required) return i + 1;
      }
      return 0;
    }
  },

  // =========================================================================
  // VERIFIED: 11th Oct 2025 (First–Last Character Frequency)
  // =========================================================================
  {
    id: 'recent-dsa-012',
    track: 'dsa',
    dateTag: '11th Oct 2025 • Shift 1',
    examDate: '2025-10-11',
    shift: 'Shift 1',
    title: 'First–Last Character Frequency',
    difficulty: 'Easy',
    category: 'Strings / Hash Table & Order Preservation',
    source: 'Accenture Assessment 11th Oct 2025 (PYQ Series)',
    isVerified: true,
    description: `Given a string \`s\` containing multiple words separated by spaces, form a 2-character string for each word by combining its **first character** and **last character**.

If multiple spaces occur between words, they should be treated as a single separator.

Count the frequency of every first-last character combination and return all combinations having the **highest frequency**, strictly preserving the order in which they first appeared in the string.

**Example**:
\`s = "apple angle ball bottle axe"\`
- \`apple\`  → \`ae\`
- \`angle\`  → \`ae\`
- \`ball\`   → \`bl\`
- \`bottle\` → \`be\`
- \`axe\`    → \`ae\`

Frequencies:
- \`ae\` → 3 (highest)
- \`bl\` → 1
- \`be\` → 1

Output: \`["ae"]\`

⚠️ **Order Preservation on Ties**:
If multiple combinations share the highest frequency (for example, in \`"cat dog bus pen"\`, all combinations occur once), return all tied combinations in order of their first appearance:
\`["ct", "dg", "bs", "pn"]\`.`,
    rules: [
      '1. Split string by whitespace, ignoring redundant consecutive spaces.',
      '2. For each non-empty word, extract word[0] + word[word.length - 1].',
      '3. Maintain the order of unique combinations as they are first encountered.',
      '4. Count the occurrence frequency of each combination.',
      '5. Determine the maximum frequency across all combinations.',
      '6. Return an array of all combinations matching the maximum frequency, in order of first appearance.'
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      'Words consist of English letters (lowercase/uppercase)',
      'Time Complexity: O(total characters in string)',
      'Space Complexity: O(U) where U <= 676 unique pairs'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 's = "apple angle ball bottle axe"',
        inputRaw: "apple angle ball bottle axe",
        expectedOutput: '["ae"]',
        explanation: 'Combinations: ae (3), bl (1), be (1). Max frequency = 3 -> ["ae"].'
      },
      {
        id: 'tc-2',
        input: 's = "apple    angle   ball     axe"',
        inputRaw: "apple    angle   ball     axe",
        expectedOutput: '["ae"]',
        explanation: 'Multiple spaces treated as single separator. Frequencies: ae (3), bl (1) -> ["ae"].'
      },
      {
        id: 'tc-3',
        input: 's = "cat dog bus pen"',
        inputRaw: "cat dog bus pen",
        expectedOutput: '["ct", "dg", "bs", "pn"]',
        explanation: 'All combinations (ct, dg, bs, pn) have frequency 1. Order of first appearance preserved.'
      },
      {
        id: 'tc-4',
        input: 's = "apple axe angle ball bat"',
        inputRaw: "apple axe angle ball bat",
        expectedOutput: '["ae"]',
        explanation: 'ae appears 3 times (apple, axe, angle). bl and bt appear 1 time each -> ["ae"].'
      },
      {
        id: 'tc-5',
        input: 's = "hello"',
        inputRaw: "hello",
        expectedOutput: '["ho"]',
        explanation: 'Single word: first = h, last = o -> ["ho"].'
      },
      {
        id: 'tc-6',
        input: 's = "apple apple apple ball ball"',
        inputRaw: "apple apple apple ball ball",
        expectedOutput: '["ae"]',
        explanation: 'ae appears 3 times, bl appears 2 times. Max = 3 -> ["ae"].'
      }
    ],
    solutions: {
      python: `def find_most_frequent(s):
    words = s.split()
    freq = {}
    order = []

    for w in words:
        if not w:
            continue
        combo = w[0] + w[-1]
        if combo not in freq:
            order.append(combo)
            freq[combo] = 0
        freq[combo] += 1

    if not freq:
        return []

    max_freq = max(freq.values())
    return [c for c in order if freq[c] == max_freq]

# Test Cases
print(find_most_frequent("apple angle ball bottle axe")) # ['ae']
print(find_most_frequent("cat dog bus pen"))              # ['ct', 'dg', 'bs', 'pn']
print(find_most_frequent("hello"))                        # ['ho']`,

      java: `import java.util.*;

public class Solution {

    public static List<String> findMostFrequent(String s) {

        String[] words = s.trim().split("\\\\s+");

        Map<String, Integer> map = new LinkedHashMap<>();

        // Count frequency
        for (String word : words) {
            String combo = "" + word.charAt(0)
                             + word.charAt(word.length() - 1);

            if (map.containsKey(combo)) {
                map.put(combo, map.get(combo) + 1);
            } else {
                map.put(combo, 1);
            }
        }

        // Find maximum frequency
        int max = 0;

        for (int freq : map.values()) {
            max = Math.max(max, freq);
        }

        // Store result
        List<String> result = new ArrayList<>();

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            if (entry.getValue() == max) {
                result.add(entry.getKey());
            }
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(
            findMostFrequent("apple angle ball bottle axe")
        );

        System.out.println(
            findMostFrequent("cat dog bus pen")
        );
    }
}`,

      cpp: `#include <iostream>
#include <sstream>
#include <unordered_map>
#include <vector>
#include <string>
#include <algorithm>

std::vector<std::string> findMostFrequent(const std::string& s) {
    std::stringstream ss(s);
    std::string word;

    std::unordered_map<std::string, int> freq;
    std::vector<std::string> order;

    while (ss >> word) {
        if (word.empty()) continue;
        std::string combo;
        combo += word.front();
        combo += word.back();

        if (freq.find(combo) == freq.end()) {
            order.push_back(combo);
            freq[combo] = 0;
        }
        freq[combo]++;
    }

    int maxFreq = 0;
    for (const auto& p : freq) {
        maxFreq = std::max(maxFreq, p.second);
    }

    std::vector<std::string> answer;
    for (const auto& c : order) {
        if (freq[c] == maxFreq) {
            answer.push_back(c);
        }
    }
    return answer;
}

int main() {
    auto res = findMostFrequent("apple angle ball bottle axe");
    for (const auto& w : res) std::cout << w << " ";
    std::cout << std::endl;
    return 0;
}`,

      csharp: `using System;
using System.Collections.Generic;

class Solution
{
    public static List<string> FindMostFrequent(string s)
    {
        string[] words = s.Trim().Split(
            ' ',
            StringSplitOptions.RemoveEmptyEntries
        );

        Dictionary<string, int> map = new Dictionary<string, int>();

        // Count frequency
        foreach (string word in words)
        {
            string combo = "" + word[0] + word[word.Length - 1];

            if (map.ContainsKey(combo))
                map[combo]++;
            else
                map[combo] = 1;
        }

        // Find maximum frequency
        int max = 0;

        foreach (int freq in map.Values)
        {
            if (freq > max)
                max = freq;
        }

        // Find combinations with maximum frequency
        List<string> result = new List<string>();

        foreach (var entry in map)
        {
            if (entry.Value == max)
                result.Add(entry.Key);
        }

        return result;
    }

    static void Main()
    {
        Console.WriteLine(
            string.Join(", ", FindMostFrequent("apple angle ball bottle axe"))
        );

        Console.WriteLine(
            string.Join(", ", FindMostFrequent("cat dog bus pen"))
        );
    }
}`,

      javascript: `function findMostFrequent(s) {
  const words = s.trim().split(/\\s+/);
  const freq = new Map();
  const order = [];

  for (const w of words) {
    if (!w) continue;
    const combo = w[0] + w[w.length - 1];
    if (!freq.has(combo)) {
      order.push(combo);
      freq.set(combo, 0);
    }
    freq.set(combo, freq.get(combo) + 1);
  }

  let maxFreq = 0;
  for (const count of freq.values()) {
    if (count > maxFreq) maxFreq = count;
  }

  return order.filter(combo => freq.get(combo) === maxFreq);
}

console.log(findMostFrequent("apple angle ball bottle axe")); // ["ae"]
console.log(findMostFrequent("cat dog bus pen"));              // ["ct", "dg", "bs", "pn"]
console.log(findMostFrequent("hello"));                        // ["ho"]`
    },
    runSimulation: (s) => {
      const words = s.trim().split(/\s+/);
      const freq = new Map();
      const order = [];

      for (const w of words) {
        if (!w) continue;
        const combo = w[0] + w[w.length - 1];
        if (!freq.has(combo)) {
          order.push(combo);
          freq.set(combo, 0);
        }
        freq.set(combo, freq.get(combo) + 1);
      }

      let maxFreq = 0;
      for (const count of freq.values()) {
        if (count > maxFreq) maxFreq = count;
      }

      return order.filter(combo => freq.get(combo) === maxFreq);
    }
  },

  // =========================================================================
  // VERIFIED: 20th Oct 2025 (Uniform Rows and Columns)
  // =========================================================================
  {
    id: 'recent-dsa-013',
    track: 'dsa',
    dateTag: '20th Oct 2025 • Shift 1',
    examDate: '2025-10-20',
    shift: 'Shift 1',
    title: 'Uniform Rows and Columns',
    difficulty: 'Easy',
    category: 'Strings / 2D Matrix Mapping',
    source: 'Accenture Assessment 20th Oct 2025 (PYQ Series)',
    isVerified: true,
    description: `You are given a string \`S\` whose length is a perfect square.

Let \`n\` be the square root of the length of \`S\` (\`n = sqrt(S.length)\`).

Construct an \`n × n\` grid by placing the characters of \`S\` in **row-major order**:
- Fill the grid from left to right, then move down to the next row.
- In row-major representation, element at row \`i\` and column \`j\` is given by \`S[i * n + j]\`.

A row or column is called **uniform** if all its elements contain the exact same character.

Return the **total number of uniform rows and uniform columns**.

**Example**:
\`S = "aaabbbccc"\`
Length = 9, \`n = sqrt(9) = 3\`.
Grid:
\`\`\`
a a a   -> Row 0: Uniform ('a') ✅
b b b   -> Row 1: Uniform ('b') ✅
c c c   -> Row 2: Uniform ('c') ✅
\`\`\`
Columns:
- Col 0: \`a, b, c\` ❌
- Col 1: \`a, b, c\` ❌
- Col 2: \`a, b, c\` ❌

Total = 3 rows + 0 columns = 3.`,
    rules: [
      '1. Calculate n = Math.sqrt(S.length).',
      '2. Check each row i from 0 to n-1: if every character in row i matches S[i * n], increment count.',
      '3. Check each column j from 0 to n-1: if every character in column j matches S[j], increment count.',
      '4. Return total uniform rows + uniform columns count.'
    ],
    constraints: [
      '1 <= S.length <= 10^5',
      'S.length is guaranteed to be a perfect square',
      'S consists of lowercase/uppercase English letters',
      'Time Complexity: O(N) where N = S.length',
      'Space Complexity: O(1) in-place 1D-to-2D index formula'
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'S = "aaabbbccc"',
        inputRaw: "aaabbbccc",
        expectedOutput: '3',
        explanation: '3 uniform rows (aaa, bbb, ccc) + 0 uniform columns = 3.'
      },
      {
        id: 'tc-2',
        input: 'S = "aaaaaaaaa"',
        inputRaw: "aaaaaaaaa",
        expectedOutput: '6',
        explanation: '3 uniform rows + 3 uniform columns = 6.'
      },
      {
        id: 'tc-3',
        input: 'S = "abcdefghi"',
        inputRaw: "abcdefghi",
        expectedOutput: '0',
        explanation: 'No rows or columns have all identical characters -> 0.'
      },
      {
        id: 'tc-4',
        input: 'S = "abcabcabc"',
        inputRaw: "abcabcabc",
        expectedOutput: '3',
        explanation: '0 uniform rows + 3 uniform columns (aaa, bbb, ccc) = 3.'
      },
      {
        id: 'tc-5',
        input: 'S = "aababbaba"',
        inputRaw: "aababbaba",
        expectedOutput: '1',
        explanation: '0 uniform rows + 1 uniform column (col 0: aaa) = 1.'
      },
      {
        id: 'tc-6',
        input: 'S = "a"',
        inputRaw: "a",
        expectedOutput: '2',
        explanation: '1x1 grid: row 0 is uniform (1) and col 0 is uniform (1) -> 2.'
      }
    ],
    solutions: {
      python: `import math

def count_uniform(s):
    n = int(math.isqrt(len(s)))
    count = 0

    # Check rows
    for i in range(n):
        first = s[i * n]
        if all(s[i * n + j] == first for j in range(1, n)):
            count += 1

    # Check columns
    for j in range(n):
        first = s[j]
        if all(s[i * n + j] == first for i in range(1, n)):
            count += 1

    return count

# Test Cases
print(count_uniform("aaabbbccc")) # 3
print(count_uniform("aaaaaaaaa")) # 6
print(count_uniform("abcdefghi")) # 0
print(count_uniform("abcabcabc")) # 3`,

      java: `public class Solution {
    public static int countUniform(String s) {
        int n = (int) Math.sqrt(s.length());
        int count = 0;

        // Check rows
        for (int i = 0; i < n; i++) {
            boolean uniform = true;
            char first = s.charAt(i * n);
            for (int j = 1; j < n; j++) {
                if (s.charAt(i * n + j) != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) count++;
        }

        // Check columns
        for (int j = 0; j < n; j++) {
            boolean uniform = true;
            char first = s.charAt(j);
            for (int i = 1; i < n; i++) {
                if (s.charAt(i * n + j) != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) count++;
        }

        return count;
    }

    public static void main(String[] args) {
        System.out.println(countUniform("aaabbbccc")); // 3
        System.out.println(countUniform("aaaaaaaaa")); // 6
        System.out.println(countUniform("abcdefghi")); // 0
        System.out.println(countUniform("abcabcabc")); // 3
    }
}`,

      cpp: `#include <iostream>
#include <string>
#include <cmath>

int countUniform(const std::string& s) {
    int n = std::sqrt(s.length());
    int count = 0;

    // Check rows
    for (int i = 0; i < n; i++) {
        bool uniform = true;
        char first = s[i * n];
        for (int j = 1; j < n; j++) {
            if (s[i * n + j] != first) {
                uniform = false;
                break;
            }
        }
        if (uniform) count++;
    }

    // Check columns
    for (int j = 0; j < n; j++) {
        bool uniform = true;
        char first = s[j];
        for (int i = 1; i < n; i++) {
            if (s[i * n + j] != first) {
                uniform = false;
                break;
            }
        }
        if (uniform) count++;
    }

    return count;
}

int main() {
    std::cout << countUniform("aaabbbccc") << std::endl; // 3
    std::cout << countUniform("aaaaaaaaa") << std::endl; // 6
    std::cout << countUniform("abcdefghi") << std::endl; // 0
    std::cout << countUniform("abcabcabc") << std::endl; // 3
    return 0;
}`,

      csharp: `using System;

class Solution {
    public static int CountUniform(string s) {
        int n = (int)Math.Sqrt(s.Length);
        int count = 0;

        // Check rows
        for (int i = 0; i < n; i++) {
            bool uniform = true;
            char first = s[i * n];
            for (int j = 1; j < n; j++) {
                if (s[i * n + j] != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) count++;
        }

        // Check columns
        for (int j = 0; j < n; j++) {
            bool uniform = true;
            char first = s[j];
            for (int i = 1; i < n; i++) {
                if (s[i * n + j] != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) count++;
        }

        return count;
    }

    static void Main() {
        Console.WriteLine(CountUniform("aaabbbccc")); // 3
        Console.WriteLine(CountUniform("aaaaaaaaa")); // 6
        Console.WriteLine(CountUniform("abcdefghi")); // 0
        Console.WriteLine(CountUniform("abcabcabc")); // 3
    }
}`,

      javascript: `function countUniform(s) {
  const n = Math.floor(Math.sqrt(s.length));
  let count = 0;

  // Check rows
  for (let i = 0; i < n; i++) {
    let uniform = true;
    const first = s[i * n];
    for (let j = 1; j < n; j++) {
      if (s[i * n + j] !== first) {
        uniform = false;
        break;
      }
    }
    if (uniform) count++;
  }

  // Check columns
  for (let j = 0; j < n; j++) {
    let uniform = true;
    const first = s[j];
    for (let i = 1; i < n; i++) {
      if (s[i * n + j] !== first) {
        uniform = false;
        break;
      }
    }
    if (uniform) count++;
  }

  return count;
}

console.log(countUniform("aaabbbccc")); // 3
console.log(countUniform("aaaaaaaaa")); // 6
console.log(countUniform("abcdefghi")); // 0
console.log(countUniform("abcabcabc")); // 3`
    },
    runSimulation: (s) => {
      const n = Math.floor(Math.sqrt(s.length));
      let count = 0;
      for (let i = 0; i < n; i++) {
        let uniform = true;
        const first = s[i * n];
        for (let j = 1; j < n; j++) {
          if (s[i * n + j] !== first) {
            uniform = false;
            break;
          }
        }
        if (uniform) count++;
      }
      for (let j = 0; j < n; j++) {
        let uniform = true;
        const first = s[j];
        for (let i = 1; i < n; i++) {
          if (s[i * n + j] !== first) {
            uniform = false;
            break;
          }
        }
        if (uniform) count++;
      }
      return count;
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
  },

  // =========================================================================
  // VERIFIED: 15th Jan 2025 (SQL: Subject Matter Experts)
  // =========================================================================
  {
    id: 'recent-sql-001',
    track: 'sql',
    dateTag: '15th Jan 2025 • Shift 1',
    examDate: '2025-01-15',
    shift: 'Shift 1',
    title: 'Subject Matter Experts',
    difficulty: 'Easy',
    category: 'Aggregation / GROUP BY & HAVING',
    source: 'Accenture Assessment 15th Jan 2025 (PYQ Series)',
    isVerified: true,
    description: `You are tasked with identifying **Subject Matter Experts (SMEs)** at Accenture based on their work experience in specific domains. An employee qualifies as an SME if they meet **either** of the following criteria:

1. They have **8 or more years** of work experience in a **single domain**.
2. They have **12 or more years** of work experience across **two different domains**.

Write a query to return the employee IDs of all the subject matter experts at Accenture.`,
    rules: [
      'Group records by employee_id.',
      'Criteria 1: SUM(years_of_experience) >= 8 AND COUNT(DISTINCT domain) = 1.',
      'Criteria 2: SUM(years_of_experience) >= 12 AND COUNT(DISTINCT domain) = 2.',
      'Use HAVING clause with logical OR between the two criteria.'
    ],
    tableSchema: [
      {
        name: 'employee_expertise',
        columns: [
          { name: 'employee_id', type: 'INTEGER', primaryKey: false },
          { name: 'domain', type: 'TEXT', primaryKey: false },
          { name: 'years_of_experience', type: 'INTEGER', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1 (Authentic Exam Input)',
        input: {
          employee_expertise: [
            { employee_id: 101, domain: 'Digital Transformation', years_of_experience: 9 },
            { employee_id: 102, domain: 'Supply Chain', years_of_experience: 6 },
            { employee_id: 102, domain: 'IoT', years_of_experience: 7 },
            { employee_id: 103, domain: 'Change Management', years_of_experience: 4 },
            { employee_id: 104, domain: 'DevOps', years_of_experience: 5 },
            { employee_id: 104, domain: 'Cloud Migration', years_of_experience: 5 },
            { employee_id: 104, domain: 'Agile Transformation', years_of_experience: 5 }
          ]
        },
        output: [
          { employee_id: 101 },
          { employee_id: 102 }
        ],
        explanation: 'Employee 101 has 9 years in 1 domain (>= 8). Employee 102 has 13 years across 2 domains (>= 12). Employee 103 has only 4 years. Employee 104 has 15 years but across 3 domains (fails two-domain rule).'
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `SELECT employee_id
FROM employee_expertise
GROUP BY employee_id
HAVING (SUM(years_of_experience) >= 8 AND COUNT(DISTINCT domain) = 1) 
    OR (SUM(years_of_experience) >= 12 AND COUNT(DISTINCT domain) = 2);`,
    explanation: `We group by \`employee_id\` and use the \`HAVING\` clause with \`SUM(years_of_experience)\` and \`COUNT(DISTINCT domain)\`:
- For single-domain experts: \`SUM(years_of_experience) >= 8 AND COUNT(DISTINCT domain) = 1\`
- For multi-domain experts: \`SUM(years_of_experience) >= 12 AND COUNT(DISTINCT domain) = 2\`
Combining them with \`OR\` filters only employees meeting either condition.`,
    expectedColumns: ['employee_id'],
    orderSensitive: false,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Multi-Employee Experience Portfolio',
        isHidden: false,
        data: {
          employee_expertise: [
            { employee_id: 101, domain: 'Digital Transformation', years_of_experience: 9 },
            { employee_id: 102, domain: 'Supply Chain', years_of_experience: 6 },
            { employee_id: 102, domain: 'IoT', years_of_experience: 7 },
            { employee_id: 103, domain: 'Change Management', years_of_experience: 4 },
            { employee_id: 104, domain: 'DevOps', years_of_experience: 5 },
            { employee_id: 104, domain: 'Cloud Migration', years_of_experience: 5 },
            { employee_id: 104, domain: 'Agile Transformation', years_of_experience: 5 }
          ]
        },
        expected: [
          { employee_id: 101 },
          { employee_id: 102 }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Boundary Experience Thresholds',
        isHidden: false,
        data: {
          employee_expertise: [
            { employee_id: 201, domain: 'AI Architecture', years_of_experience: 8 },
            { employee_id: 202, domain: 'Cybersecurity', years_of_experience: 6 },
            { employee_id: 202, domain: 'Data Governance', years_of_experience: 6 },
            { employee_id: 203, domain: 'DevSecOps', years_of_experience: 7 },
            { employee_id: 204, domain: 'AI', years_of_experience: 6 },
            { employee_id: 204, domain: 'ML', years_of_experience: 5 }
          ]
        },
        expected: [
          { employee_id: 201 },
          { employee_id: 202 }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — Disqualifying 3+ Domains Portfolio',
        isHidden: false,
        data: {
          employee_expertise: [
            { employee_id: 301, domain: 'DevOps', years_of_experience: 6 },
            { employee_id: 301, domain: 'Cloud', years_of_experience: 4 },
            { employee_id: 301, domain: 'Security', years_of_experience: 4 },
            { employee_id: 302, domain: 'Blockchain', years_of_experience: 12 },
            { employee_id: 303, domain: 'Big Data', years_of_experience: 7 },
            { employee_id: 303, domain: 'Analytics', years_of_experience: 4 }
          ]
        },
        expected: [
          { employee_id: 302 }
        ]
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Multiple Single-Domain Specialists',
        isHidden: false,
        data: {
          employee_expertise: [
            { employee_id: 401, domain: 'Frontend Engineering', years_of_experience: 10 },
            { employee_id: 402, domain: 'Backend Engineering', years_of_experience: 15 },
            { employee_id: 403, domain: 'QA Automation', years_of_experience: 2 },
            { employee_id: 404, domain: 'UI/UX Design', years_of_experience: 8 }
          ]
        },
        expected: [
          { employee_id: 401 },
          { employee_id: 402 },
          { employee_id: 404 }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — Non-Qualifying Generalist Employee Set',
        isHidden: true,
        data: {
          employee_expertise: [
            { employee_id: 501, domain: 'Testing', years_of_experience: 5 },
            { employee_id: 502, domain: 'Design', years_of_experience: 3 },
            { employee_id: 502, domain: 'Product', years_of_experience: 4 },
            { employee_id: 503, domain: 'D1', years_of_experience: 2 },
            { employee_id: 503, domain: 'D2', years_of_experience: 2 },
            { employee_id: 503, domain: 'D3', years_of_experience: 2 },
            { employee_id: 503, domain: 'D4', years_of_experience: 2 }
          ]
        },
        expected: []
      }
    ]
  },

  // =========================================================================
  // VERIFIED: 20th Feb 2025 (SQL: Fill Missing Client Data)
  // =========================================================================
  {
    id: 'recent-sql-002',
    track: 'sql',
    dateTag: '20th Feb 2025 • Shift 1',
    examDate: '2025-02-20',
    shift: 'Shift 1',
    title: 'Fill Missing Client Data',
    difficulty: 'Medium',
    category: 'Window Functions / Forward Fill & COALESCE',
    source: 'Accenture Assessment 20th Feb 2025 (PYQ Series)',
    isVerified: true,
    description: `When accessing Accenture's retailer client's database, you observe that the \`category\` column in the \`products\` table contains null values.

Write a query that returns the updated product table with all the category values filled in, taking into consideration the assumption that the first product in each category will always have a defined category value.`,
    rules: [
      'Use a Common Table Expression (CTE) or subquery with COUNT(category) OVER (ORDER BY product_id).',
      'The running COUNT creates a constant partition ID for each block of rows belonging to the same category.',
      'Use MAX(category) OVER (PARTITION BY numbered_category) or COALESCE to forward-fill missing values.',
      'Preserve product_id, category, and name columns in the output.'
    ],
    tableSchema: [
      {
        name: 'products',
        columns: [
          { name: 'product_id', type: 'INTEGER', primaryKey: true },
          { name: 'category', type: 'TEXT', primaryKey: false },
          { name: 'name', type: 'TEXT', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1 (Retailer Catalog)',
        input: {
          products: [
            { product_id: 1, category: 'Shoes', name: 'Sperry Boat Shoe' },
            { product_id: 2, category: null, name: 'Adidas Stan Smith' },
            { product_id: 3, category: null, name: 'Vans Authentic' },
            { product_id: 4, category: 'Jeans', name: 'Levi 511' },
            { product_id: 5, category: null, name: 'Wrangler Straight Fit' },
            { product_id: 6, category: 'Shirts', name: 'Lacoste Classic Polo' },
            { product_id: 7, category: null, name: 'Nautica Linen Shirt' }
          ]
        },
        output: [
          { product_id: 1, category: 'Shoes', name: 'Sperry Boat Shoe' },
          { product_id: 2, category: 'Shoes', name: 'Adidas Stan Smith' },
          { product_id: 3, category: 'Shoes', name: 'Vans Authentic' },
          { product_id: 4, category: 'Jeans', name: 'Levi 511' },
          { product_id: 5, category: 'Jeans', name: 'Wrangler Straight Fit' },
          { product_id: 6, category: 'Shirts', name: 'Lacoste Classic Polo' },
          { product_id: 7, category: 'Shirts', name: 'Nautica Linen Shirt' }
        ],
        explanation: 'The running count of non-null categories partitions the products into groups: group 1 for Shoes (ids 1-3), group 2 for Jeans (ids 4-5), and group 3 for Shirts (ids 6-7).'
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `WITH filled_category AS (
  SELECT
    product_id,
    category,
    name,
    COUNT(category) OVER (
      ORDER BY product_id
    ) AS numbered_category
  FROM products
)
SELECT
  product_id,
  COALESCE(
    category, 
    MAX(category) OVER (PARTITION BY numbered_category)
  ) AS category,
  name
FROM filled_category;`,
    explanation: `1. **Running Count Technique**: \`COUNT(category) OVER (ORDER BY product_id)\` counts non-null categories up to the current row. Because nulls are ignored, all rows following a valid category receive the same count number.
2. **Partitioned Forward Fill**: In the outer query, \`MAX(category) OVER (PARTITION BY numbered_category)\` pulls the single non-null category name across the group, cleanly filling the null rows.`,
    expectedColumns: ['product_id', 'category', 'name'],
    orderSensitive: true,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Multi-Category Catalog Forward Fill',
        isHidden: false,
        data: {
          products: [
            { product_id: 1, category: 'Shoes', name: 'Sperry Boat Shoe' },
            { product_id: 2, category: null, name: 'Adidas Stan Smith' },
            { product_id: 3, category: null, name: 'Vans Authentic' },
            { product_id: 4, category: 'Jeans', name: 'Levi 511' },
            { product_id: 5, category: null, name: 'Wrangler Straight Fit' },
            { product_id: 6, category: 'Shirts', name: 'Lacoste Classic Polo' },
            { product_id: 7, category: null, name: 'Nautica Linen Shirt' }
          ]
        },
        expected: [
          { product_id: 1, category: 'Shoes', name: 'Sperry Boat Shoe' },
          { product_id: 2, category: 'Shoes', name: 'Adidas Stan Smith' },
          { product_id: 3, category: 'Shoes', name: 'Vans Authentic' },
          { product_id: 4, category: 'Jeans', name: 'Levi 511' },
          { product_id: 5, category: 'Jeans', name: 'Wrangler Straight Fit' },
          { product_id: 6, category: 'Shirts', name: 'Lacoste Classic Polo' },
          { product_id: 7, category: 'Shirts', name: 'Nautica Linen Shirt' }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Single Category with Subsequent Nulls',
        isHidden: false,
        data: {
          products: [
            { product_id: 101, category: 'Electronics', name: 'MacBook Pro' },
            { product_id: 102, category: null, name: 'Magic Mouse' },
            { product_id: 103, category: null, name: 'Magic Keyboard' },
            { product_id: 104, category: null, name: 'Studio Display' }
          ]
        },
        expected: [
          { product_id: 101, category: 'Electronics', name: 'MacBook Pro' },
          { product_id: 102, category: 'Electronics', name: 'Magic Mouse' },
          { product_id: 103, category: 'Electronics', name: 'Magic Keyboard' },
          { product_id: 104, category: 'Electronics', name: 'Studio Display' }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — Alternating Pairs with Single Nulls',
        isHidden: false,
        data: {
          products: [
            { product_id: 201, category: 'Audio', name: 'Sony WH-1000XM5' },
            { product_id: 202, category: null, name: 'Sony WF-1000XM5' },
            { product_id: 203, category: 'Cameras', name: 'Canon EOS R5' },
            { product_id: 204, category: null, name: 'Canon RF 24-70mm' }
          ]
        },
        expected: [
          { product_id: 201, category: 'Audio', name: 'Sony WH-1000XM5' },
          { product_id: 202, category: 'Audio', name: 'Sony WF-1000XM5' },
          { product_id: 203, category: 'Cameras', name: 'Canon EOS R5' },
          { product_id: 204, category: 'Cameras', name: 'Canon RF 24-70mm' }
        ]
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Fully Populated Catalog Without Nulls',
        isHidden: false,
        data: {
          products: [
            { product_id: 301, category: 'Books', name: 'Clean Architecture' },
            { product_id: 302, category: 'Toys', name: 'Lego Millennium Falcon' },
            { product_id: 303, category: 'Games', name: 'Catan Board Game' }
          ]
        },
        expected: [
          { product_id: 301, category: 'Books', name: 'Clean Architecture' },
          { product_id: 302, category: 'Toys', name: 'Lego Millennium Falcon' },
          { product_id: 303, category: 'Games', name: 'Catan Board Game' }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — Extended Warehouse Multi-Tier Catalog',
        isHidden: true,
        data: {
          products: [
            { product_id: 401, category: 'Hardware', name: 'Claw Hammer' },
            { product_id: 402, category: null, name: 'Box of Nails' },
            { product_id: 403, category: null, name: 'Wood Screws' },
            { product_id: 404, category: 'Garden', name: 'Steel Shovel' },
            { product_id: 405, category: null, name: 'Garden Hose' },
            { product_id: 406, category: 'Paint', name: 'Wall Primer' },
            { product_id: 407, category: null, name: 'Nylon Brush' },
            { product_id: 408, category: null, name: 'Paint Roller' }
          ]
        },
        expected: [
          { product_id: 401, category: 'Hardware', name: 'Claw Hammer' },
          { product_id: 402, category: 'Hardware', name: 'Box of Nails' },
          { product_id: 403, category: 'Hardware', name: 'Wood Screws' },
          { product_id: 404, category: 'Garden', name: 'Steel Shovel' },
          { product_id: 405, category: 'Garden', name: 'Garden Hose' },
          { product_id: 406, category: 'Paint', name: 'Wall Primer' },
          { product_id: 407, category: 'Paint', name: 'Nylon Brush' },
          { product_id: 408, category: 'Paint', name: 'Paint Roller' }
        ]
      }
    ]
  },

  // =========================================================================
  // VERIFIED: 10th Mar 2025 (SQL: Marketing Campaigns UNIQUE Constraint & Audit)
  // =========================================================================
  {
    id: 'recent-sql-003',
    track: 'sql',
    dateTag: '10th Mar 2025 • Shift 2',
    examDate: '2025-03-10',
    shift: 'Shift 2',
    title: 'Marketing Campaigns UNIQUE Constraint & Duplicate Audit',
    difficulty: 'Easy',
    category: 'DDL Constraints & Data Integrity',
    source: 'Accenture Assessment 10th Mar 2025 (PYQ Series)',
    isVerified: true,
    description: `The **UNIQUE** constraint ensures that all values in a column are distinct. It is frequently combined with **NOT NULL** to enforce strict entity uniqueness.

For example, on the marketing team at Accenture, campaigns are created with:
\`\`\`sql
CREATE TABLE accenture_campaigns (
    campaign_id INTEGER PRIMARY KEY,
    campaign_name VARCHAR(255) NOT NULL UNIQUE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    budget DECIMAL(10,2) NOT NULL
);
\`\`\`

Write a SQL query to audit the marketing database and return any duplicate campaign names that would violate the \`UNIQUE\` constraint along with the number of times they appear, ordered alphabetically by \`campaign_name\`.`,
    rules: [
      'Group by campaign_name.',
      'Filter with HAVING COUNT(*) > 1 to identify duplicate entries.',
      'Return campaign_name and duplicate_count columns.',
      'Order results by campaign_name ASC.'
    ],
    tableSchema: [
      {
        name: 'accenture_campaigns',
        columns: [
          { name: 'campaign_id', type: 'INTEGER', primaryKey: true },
          { name: 'campaign_name', type: 'TEXT', primaryKey: false },
          { name: 'start_date', type: 'TEXT', primaryKey: false },
          { name: 'end_date', type: 'TEXT', primaryKey: false },
          { name: 'budget', type: 'REAL', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1',
        input: {
          accenture_campaigns: [
            { campaign_id: 1, campaign_name: 'Spring Tech Fest', start_date: '2025-01-01', end_date: '2025-02-01', budget: 15000 },
            { campaign_id: 2, campaign_name: 'Spring Tech Fest', start_date: '2025-02-15', end_date: '2025-03-15', budget: 18000 },
            { campaign_id: 3, campaign_name: 'AI Summit', start_date: '2025-04-01', end_date: '2025-05-01', budget: 30000 },
            { campaign_id: 4, campaign_name: 'Cloud Horizons', start_date: '2025-05-01', end_date: '2025-06-01', budget: 25000 },
            { campaign_id: 5, campaign_name: 'AI Summit', start_date: '2025-06-10', end_date: '2025-07-10', budget: 22000 }
          ]
        },
        output: [
          { campaign_name: 'AI Summit', duplicate_count: 2 },
          { campaign_name: 'Spring Tech Fest', duplicate_count: 2 }
        ],
        explanation: "'AI Summit' appears 2 times and 'Spring Tech Fest' appears 2 times. 'Cloud Horizons' appears once so it is unique."
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `SELECT campaign_name, COUNT(*) AS duplicate_count
FROM accenture_campaigns
GROUP BY campaign_name
HAVING COUNT(*) > 1
ORDER BY campaign_name;`,
    explanation: `To detect records violating a UNIQUE constraint, we group rows by \`campaign_name\` and use \`HAVING COUNT(*) > 1\`.
In relational databases, creating a \`UNIQUE\` constraint automatically adds a unique index to forbid future duplicate inserts.`,
    expectedColumns: ['campaign_name', 'duplicate_count'],
    orderSensitive: true,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Duplicates Audit',
        isHidden: false,
        data: {
          accenture_campaigns: [
            { campaign_id: 1, campaign_name: 'Spring Tech Fest', start_date: '2025-01-01', end_date: '2025-02-01', budget: 15000 },
            { campaign_id: 2, campaign_name: 'Spring Tech Fest', start_date: '2025-02-15', end_date: '2025-03-15', budget: 18000 },
            { campaign_id: 3, campaign_name: 'AI Summit', start_date: '2025-04-01', end_date: '2025-05-01', budget: 30000 },
            { campaign_id: 4, campaign_name: 'Cloud Horizons', start_date: '2025-05-01', end_date: '2025-06-01', budget: 25000 },
            { campaign_id: 5, campaign_name: 'AI Summit', start_date: '2025-06-10', end_date: '2025-07-10', budget: 22000 }
          ]
        },
        expected: [
          { campaign_name: 'AI Summit', duplicate_count: 2 },
          { campaign_name: 'Spring Tech Fest', duplicate_count: 2 }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Triplicate Single Campaign Name',
        isHidden: false,
        data: {
          accenture_campaigns: [
            { campaign_id: 101, campaign_name: 'Cyber Week', start_date: '2025-01-01', end_date: '2025-01-07', budget: 10000 },
            { campaign_id: 102, campaign_name: 'Cyber Week', start_date: '2025-02-01', end_date: '2025-02-07', budget: 12000 },
            { campaign_id: 103, campaign_name: 'Autumn Launch', start_date: '2025-09-01', end_date: '2025-09-15', budget: 8000 },
            { campaign_id: 104, campaign_name: 'Cyber Week', start_date: '2025-11-20', end_date: '2025-11-27', budget: 20000 }
          ]
        },
        expected: [
          { campaign_name: 'Cyber Week', duplicate_count: 3 }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — Strictly Unique Campaign Table',
        isHidden: false,
        data: {
          accenture_campaigns: [
            { campaign_id: 201, campaign_name: 'Alpha Project', start_date: '2025-01-01', end_date: '2025-02-01', budget: 5000 },
            { campaign_id: 202, campaign_name: 'Beta Project', start_date: '2025-03-01', end_date: '2025-04-01', budget: 6000 },
            { campaign_id: 203, campaign_name: 'Gamma Project', start_date: '2025-05-01', end_date: '2025-06-01', budget: 7000 }
          ]
        },
        expected: []
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Multiple Duplicate Clusters',
        isHidden: false,
        data: {
          accenture_campaigns: [
            { campaign_id: 301, campaign_name: 'Brand Boost', start_date: '2025-01-01', end_date: '2025-02-01', budget: 10000 },
            { campaign_id: 302, campaign_name: 'Brand Boost', start_date: '2025-03-01', end_date: '2025-04-01', budget: 10000 },
            { campaign_id: 303, campaign_name: 'Brand Boost', start_date: '2025-05-01', end_date: '2025-06-01', budget: 10000 },
            { campaign_id: 304, campaign_name: 'Brand Boost', start_date: '2025-07-01', end_date: '2025-08-01', budget: 10000 },
            { campaign_id: 305, campaign_name: 'HR Connect', start_date: '2025-02-01', end_date: '2025-03-01', budget: 5000 },
            { campaign_id: 306, campaign_name: 'HR Connect', start_date: '2025-04-01', end_date: '2025-05-01', budget: 5000 },
            { campaign_id: 307, campaign_name: 'Talent Day', start_date: '2025-06-01', end_date: '2025-07-01', budget: 3000 }
          ]
        },
        expected: [
          { campaign_name: 'Brand Boost', duplicate_count: 4 },
          { campaign_name: 'HR Connect', duplicate_count: 2 }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — Large Scale Campaign Registry Audit',
        isHidden: true,
        data: {
          accenture_campaigns: [
            { campaign_id: 401, campaign_name: 'InnoFest', start_date: '2025-01-01', end_date: '2025-02-01', budget: 1000 },
            { campaign_id: 402, campaign_name: 'TechTalk', start_date: '2025-01-01', end_date: '2025-02-01', budget: 1000 },
            { campaign_id: 403, campaign_name: 'DevDay', start_date: '2025-01-01', end_date: '2025-02-01', budget: 1000 },
            { campaign_id: 404, campaign_name: 'CloudCon', start_date: '2025-01-01', end_date: '2025-02-01', budget: 1000 },
            { campaign_id: 405, campaign_name: 'Global Hackathon', start_date: '2025-01-01', end_date: '2025-02-01', budget: 1000 },
            { campaign_id: 406, campaign_name: 'Global Hackathon', start_date: '2025-03-01', end_date: '2025-04-01', budget: 1000 }
          ]
        },
        expected: [
          { campaign_name: 'Global Hackathon', duplicate_count: 2 }
        ]
      }
    ]
  },

  // =========================================================================
  // VERIFIED: 18th Apr 2025 (SQL: Average Project Duration)
  // =========================================================================
  {
    id: 'recent-sql-004',
    track: 'sql',
    dateTag: '18th Apr 2025 • Shift 1',
    examDate: '2025-04-18',
    shift: 'Shift 1',
    title: 'Average Project Duration',
    difficulty: 'Easy',
    category: 'Date & Time Analytics / AVG',
    source: 'Accenture Assessment 18th Apr 2025 (PYQ Series)',
    isVerified: true,
    description: `At Accenture, you've been appointed as a data analyst. You're handed a dataset of all the company's projects within the last year, including their start and end dates.

Your task is to find the **average duration (in days)** of all completed projects.

Assume all projects have a valid end date and format is ISO standard date \`YYYY-MM-DD\`.`,
    rules: [
      'Calculate duration in days between end_date and start_date.',
      'Compute the average across all completed projects.',
      'Round the average to 1 decimal place (or standard precision).',
      'Alias the output column as avg_project_duration_days.'
    ],
    tableSchema: [
      {
        name: 'projects',
        columns: [
          { name: 'project_id', type: 'INTEGER', primaryKey: true },
          { name: 'start_date', type: 'TEXT', primaryKey: false },
          { name: 'end_date', type: 'TEXT', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1',
        input: {
          projects: [
            { project_id: 101, start_date: '2022-01-01', end_date: '2022-04-01' },
            { project_id: 102, start_date: '2022-02-15', end_date: '2022-05-15' },
            { project_id: 103, start_date: '2022-04-01', end_date: '2022-07-30' },
            { project_id: 104, start_date: '2022-05-10', end_date: '2022-07-10' },
            { project_id: 105, start_date: '2022-09-15', end_date: '2022-12-01' }
          ]
        },
        output: [
          { avg_project_duration_days: 87.4 }
        ],
        explanation: 'Individual durations: 90, 89, 120, 61, 77 days. Total days = 437. Average = 437 / 5 = 87.4 days.'
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `SELECT 
    ROUND(AVG(julianday(end_date) - julianday(start_date)), 1) AS avg_project_duration_days
FROM 
    projects;

-- In PostgreSQL dialect:
-- SELECT AVG(EXTRACT(DAY FROM (end_date::timestamp - start_date::timestamp))) AS avg_project_duration_days FROM projects;`,
    explanation: `Date differences calculate the total elapsed days for each completed project:
- In SQLite / standard SQL: \`julianday(end_date) - julianday(start_date)\` converts date strings into continuous Julian day numbers.
- In PostgreSQL: \`EXTRACT(DAY FROM (end_date::timestamp - start_date::timestamp))\`.
Taking \`AVG(...)\` yields 87.4 days.`,
    expectedColumns: ['avg_project_duration_days'],
    orderSensitive: false,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Multi-Month Completed Projects',
        isHidden: false,
        data: {
          projects: [
            { project_id: 101, start_date: '2022-01-01', end_date: '2022-04-01' },
            { project_id: 102, start_date: '2022-02-15', end_date: '2022-05-15' },
            { project_id: 103, start_date: '2022-04-01', end_date: '2022-07-30' },
            { project_id: 104, start_date: '2022-05-10', end_date: '2022-07-10' },
            { project_id: 105, start_date: '2022-09-15', end_date: '2022-12-01' }
          ]
        },
        expected: [
          { avg_project_duration_days: 87.4 }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Round 10, 20, 30 Day Projects',
        isHidden: false,
        data: {
          projects: [
            { project_id: 201, start_date: '2023-01-01', end_date: '2023-01-11' },
            { project_id: 202, start_date: '2023-02-01', end_date: '2023-02-21' },
            { project_id: 203, start_date: '2023-03-01', end_date: '2023-03-31' }
          ]
        },
        expected: [
          { avg_project_duration_days: 20 }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — Fast Sprint 1-Day Completed Tasks',
        isHidden: false,
        data: {
          projects: [
            { project_id: 301, start_date: '2023-05-01', end_date: '2023-05-02' },
            { project_id: 302, start_date: '2023-06-10', end_date: '2023-06-11' }
          ]
        },
        expected: [
          { avg_project_duration_days: 1 }
        ]
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Leap Year Span Duration',
        isHidden: false,
        data: {
          projects: [
            { project_id: 401, start_date: '2024-02-01', end_date: '2024-03-01' },
            { project_id: 402, start_date: '2024-01-01', end_date: '2024-02-01' }
          ]
        },
        expected: [
          { avg_project_duration_days: 30 }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — Annual Enterprise Milestone Initiatives',
        isHidden: true,
        data: {
          projects: [
            { project_id: 501, start_date: '2023-01-01', end_date: '2023-07-01' },
            { project_id: 502, start_date: '2023-01-01', end_date: '2023-10-01' },
            { project_id: 503, start_date: '2023-01-01', end_date: '2024-01-01' }
          ]
        },
        expected: [
          { avg_project_duration_days: 273 }
        ]
      }
    ]
  },

  // =========================================================================
  // VERIFIED: 25th May 2025 (SQL: Click Through Conversion Rate)
  // =========================================================================
  {
    id: 'recent-sql-005',
    track: 'sql',
    dateTag: '25th May 2025 • Shift 2',
    examDate: '2025-05-25',
    shift: 'Shift 2',
    title: 'Calculate Click Through Conversion Rate',
    difficulty: 'Medium',
    category: 'Conversion Funnel / CTE & LEFT JOIN',
    source: 'Accenture Assessment 25th May 2025 (PYQ Series)',
    isVerified: true,
    description: `As a data analyst at Accenture, you are tasked to analyze the effectiveness of digital marketing campaigns.

Specifically, Accenture is interested in knowing the **click-through conversion rate**, which is defined as the percentage of users who viewed a product and later added it to their cart:
$$\\text{Conversion Rate} = \\left(\\frac{\\text{Cart Count}}{\\text{View Count}}\\right) \\times 100$$

Using the provided tables \`user_product_view\` and \`user_product_cart\`, calculate the click-through conversion rate for each product. Order results by \`product_id\`.`,
    rules: [
      'Aggregate view count per product_id from user_product_view.',
      'Aggregate cart count per product_id from user_product_cart.',
      'Join views and carts on product_id using LEFT JOIN.',
      'Calculate (cart_count / view_count) * 100 and round to 2 decimal places.',
      'Order by product_id ASC.'
    ],
    tableSchema: [
      {
        name: 'user_product_view',
        columns: [
          { name: 'view_id', type: 'INTEGER', primaryKey: true },
          { name: 'user_id', type: 'INTEGER', primaryKey: false },
          { name: 'view_date', type: 'TEXT', primaryKey: false },
          { name: 'product_id', type: 'INTEGER', primaryKey: false }
        ]
      },
      {
        name: 'user_product_cart',
        columns: [
          { name: 'cart_id', type: 'INTEGER', primaryKey: true },
          { name: 'user_id', type: 'INTEGER', primaryKey: false },
          { name: 'add_to_cart_date', type: 'TEXT', primaryKey: false },
          { name: 'product_id', type: 'INTEGER', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1',
        input: {
          user_product_view: [
            { view_id: 1001, user_id: 123, view_date: '2022-06-08 00:00:00', product_id: 20001 },
            { view_id: 2015, user_id: 265, view_date: '2022-06-10 00:00:00', product_id: 22552 },
            { view_id: 3036, user_id: 362, view_date: '2022-06-18 00:00:00', product_id: 20001 },
            { view_id: 4879, user_id: 265, view_date: '2022-07-26 00:00:00', product_id: 22552 },
            { view_id: 5623, user_id: 981, view_date: '2022-07-05 00:00:00', product_id: 22552 }
          ],
          user_product_cart: [
            { cart_id: 2123, user_id: 123, add_to_cart_date: '2022-06-08 00:00:00', product_id: 20001 },
            { cart_id: 3856, user_id: 362, add_to_cart_date: '2022-06-21 00:00:00', product_id: 20001 },
            { cart_id: 4987, user_id: 265, add_to_cart_date: '2022-07-30 00:00:00', product_id: 22552 }
          ]
        },
        output: [
          { product_id: 20001, view_count: 2, cart_count: 2, conversion_rate: 100 },
          { product_id: 22552, view_count: 3, cart_count: 1, conversion_rate: 33.33 }
        ],
        explanation: 'Product 20001: 2 views, 2 carts -> (2/2) * 100 = 100%. Product 22552: 3 views, 1 cart -> (1/3) * 100 = 33.33%.'
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `WITH views AS (
  SELECT product_id, COUNT(*) AS view_count
  FROM user_product_view
  GROUP BY product_id
),
carts AS (
  SELECT product_id, COUNT(*) AS cart_count
  FROM user_product_cart
  GROUP BY product_id
)
SELECT 
  v.product_id, 
  v.view_count, 
  c.cart_count, 
  ROUND((c.cart_count * 1.0 / v.view_count) * 100, 2) AS conversion_rate
FROM views v
LEFT JOIN carts c
  ON v.product_id = c.product_id
ORDER BY v.product_id;`,
    explanation: `1. **Views CTE**: Groups \`user_product_view\` by \`product_id\` to obtain total views per product.
2. **Carts CTE**: Groups \`user_product_cart\` by \`product_id\` to obtain total cart additions per product.
3. **LEFT JOIN & Conversion Calculation**: Connects views with carts and calculates \`(c.cart_count * 1.0 / v.view_count) * 100\`. Casting to float/multiplying by 1.0 prevents integer division truncation.`,
    expectedColumns: ['product_id', 'view_count', 'cart_count', 'conversion_rate'],
    orderSensitive: true,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Funnel Performance',
        isHidden: false,
        data: {
          user_product_view: [
            { view_id: 1001, user_id: 123, view_date: '2022-06-08 00:00:00', product_id: 20001 },
            { view_id: 2015, user_id: 265, view_date: '2022-06-10 00:00:00', product_id: 22552 },
            { view_id: 3036, user_id: 362, view_date: '2022-06-18 00:00:00', product_id: 20001 },
            { view_id: 4879, user_id: 265, view_date: '2022-07-26 00:00:00', product_id: 22552 },
            { view_id: 5623, user_id: 981, view_date: '2022-07-05 00:00:00', product_id: 22552 }
          ],
          user_product_cart: [
            { cart_id: 2123, user_id: 123, add_to_cart_date: '2022-06-08 00:00:00', product_id: 20001 },
            { cart_id: 3856, user_id: 362, add_to_cart_date: '2022-06-21 00:00:00', product_id: 20001 },
            { cart_id: 4987, user_id: 265, add_to_cart_date: '2022-07-30 00:00:00', product_id: 22552 }
          ]
        },
        expected: [
          { product_id: 20001, view_count: 2, cart_count: 2, conversion_rate: 100 },
          { product_id: 22552, view_count: 3, cart_count: 1, conversion_rate: 33.33 }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Balanced 50% and 25% Rates',
        isHidden: false,
        data: {
          user_product_view: [
            { view_id: 1, user_id: 1, view_date: '2023-01-01', product_id: 30001 },
            { view_id: 2, user_id: 2, view_date: '2023-01-02', product_id: 30001 },
            { view_id: 3, user_id: 3, view_date: '2023-01-03', product_id: 30001 },
            { view_id: 4, user_id: 4, view_date: '2023-01-04', product_id: 30001 },
            { view_id: 5, user_id: 1, view_date: '2023-01-01', product_id: 30002 },
            { view_id: 6, user_id: 2, view_date: '2023-01-02', product_id: 30002 },
            { view_id: 7, user_id: 3, view_date: '2023-01-03', product_id: 30002 },
            { view_id: 8, user_id: 4, view_date: '2023-01-04', product_id: 30002 }
          ],
          user_product_cart: [
            { cart_id: 1, user_id: 1, add_to_cart_date: '2023-01-01', product_id: 30001 },
            { cart_id: 2, user_id: 2, add_to_cart_date: '2023-01-02', product_id: 30001 },
            { cart_id: 3, user_id: 1, add_to_cart_date: '2023-01-01', product_id: 30002 }
          ]
        },
        expected: [
          { product_id: 30001, view_count: 4, cart_count: 2, conversion_rate: 50 },
          { product_id: 30002, view_count: 4, cart_count: 1, conversion_rate: 25 }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — High Conversion (75% and 66.67%)',
        isHidden: false,
        data: {
          user_product_view: [
            { view_id: 11, user_id: 1, view_date: '2023-02-01', product_id: 40001 },
            { view_id: 12, user_id: 2, view_date: '2023-02-01', product_id: 40001 },
            { view_id: 13, user_id: 3, view_date: '2023-02-01', product_id: 40001 },
            { view_id: 14, user_id: 4, view_date: '2023-02-01', product_id: 40001 },
            { view_id: 15, user_id: 1, view_date: '2023-02-02', product_id: 40002 },
            { view_id: 16, user_id: 2, view_date: '2023-02-02', product_id: 40002 },
            { view_id: 17, user_id: 3, view_date: '2023-02-02', product_id: 40002 }
          ],
          user_product_cart: [
            { cart_id: 11, user_id: 1, add_to_cart_date: '2023-02-01', product_id: 40001 },
            { cart_id: 12, user_id: 2, add_to_cart_date: '2023-02-01', product_id: 40001 },
            { cart_id: 13, user_id: 3, add_to_cart_date: '2023-02-01', product_id: 40001 },
            { cart_id: 14, user_id: 1, add_to_cart_date: '2023-02-02', product_id: 40002 },
            { cart_id: 15, user_id: 2, add_to_cart_date: '2023-02-02', product_id: 40002 }
          ]
        },
        expected: [
          { product_id: 40001, view_count: 4, cart_count: 3, conversion_rate: 75 },
          { product_id: 40002, view_count: 3, cart_count: 2, conversion_rate: 66.67 }
        ]
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Single Item 1:1 Conversion (100%)',
        isHidden: false,
        data: {
          user_product_view: [
            { view_id: 21, user_id: 10, view_date: '2023-03-01', product_id: 50001 }
          ],
          user_product_cart: [
            { cart_id: 21, user_id: 10, add_to_cart_date: '2023-03-01', product_id: 50001 }
          ]
        },
        expected: [
          { product_id: 50001, view_count: 1, cart_count: 1, conversion_rate: 100 }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — High Scale Multi-Product Conversion',
        isHidden: true,
        data: {
          user_product_view: [
            { view_id: 31, user_id: 1, view_date: '2023-04-01', product_id: 60001 },
            { view_id: 32, user_id: 2, view_date: '2023-04-01', product_id: 60001 },
            { view_id: 33, user_id: 3, view_date: '2023-04-01', product_id: 60001 },
            { view_id: 34, user_id: 4, view_date: '2023-04-01', product_id: 60001 },
            { view_id: 35, user_id: 5, view_date: '2023-04-01', product_id: 60001 },
            { view_id: 36, user_id: 1, view_date: '2023-04-02', product_id: 60002 },
            { view_id: 37, user_id: 2, view_date: '2023-04-02', product_id: 60002 },
            { view_id: 38, user_id: 3, view_date: '2023-04-02', product_id: 60002 },
            { view_id: 39, user_id: 4, view_date: '2023-04-02', product_id: 60002 },
            { view_id: 40, user_id: 5, view_date: '2023-04-02', product_id: 60002 },
            { view_id: 41, user_id: 1, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 42, user_id: 2, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 43, user_id: 3, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 44, user_id: 4, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 45, user_id: 5, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 46, user_id: 6, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 47, user_id: 7, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 48, user_id: 8, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 49, user_id: 9, view_date: '2023-04-03', product_id: 60003 },
            { view_id: 50, user_id: 10, view_date: '2023-04-03', product_id: 60003 }
          ],
          user_product_cart: [
            { cart_id: 31, user_id: 1, add_to_cart_date: '2023-04-01', product_id: 60001 },
            { cart_id: 32, user_id: 1, add_to_cart_date: '2023-04-02', product_id: 60002 },
            { cart_id: 33, user_id: 2, add_to_cart_date: '2023-04-02', product_id: 60002 },
            { cart_id: 34, user_id: 3, add_to_cart_date: '2023-04-02', product_id: 60002 },
            { cart_id: 35, user_id: 4, add_to_cart_date: '2023-04-02', product_id: 60002 },
            { cart_id: 36, user_id: 1, add_to_cart_date: '2023-04-03', product_id: 60003 },
            { cart_id: 37, user_id: 2, add_to_cart_date: '2023-04-03', product_id: 60003 },
            { cart_id: 38, user_id: 3, add_to_cart_date: '2023-04-03', product_id: 60003 },
            { cart_id: 39, user_id: 4, add_to_cart_date: '2023-04-03', product_id: 60003 },
            { cart_id: 40, user_id: 5, add_to_cart_date: '2023-04-03', product_id: 60003 }
          ]
        },
        expected: [
          { product_id: 60001, view_count: 5, cart_count: 1, conversion_rate: 20 },
          { product_id: 60002, view_count: 5, cart_count: 4, conversion_rate: 80 },
          { product_id: 60003, view_count: 10, cart_count: 5, conversion_rate: 50 }
        ]
      }
    ]
  },

  // =========================================================================
  // VERIFIED: 14th Jun 2025 (SQL: Average Project Cost Per Year)
  // =========================================================================
  {
    id: 'recent-sql-006',
    track: 'sql',
    dateTag: '14th Jun 2025 • Shift 1',
    examDate: '2025-06-14',
    shift: 'Shift 1',
    title: 'Average Project Cost Per Year',
    difficulty: 'Easy',
    category: 'Aggregation / GROUP BY & AVG',
    source: 'Accenture Assessment 14th Jun 2025 (PYQ Series)',
    isVerified: true,
    description: `As a part of Accenture, a global professional services company, you are required to keep track of various projects carried out throughout the year and their respective costs.

Write a SQL query to find out the **average project cost per year**, rounded to two decimal places. Order the results by \`year\` ascending.`,
    rules: [
      'Group projects by year.',
      'Compute the average cost using AVG(cost).',
      'Round the average cost to 2 decimal places: ROUND(AVG(cost), 2).',
      'Alias the column as avg_cost and order by year ASC.'
    ],
    tableSchema: [
      {
        name: 'projects',
        columns: [
          { name: 'project_id', type: 'INTEGER', primaryKey: true },
          { name: 'year', type: 'INTEGER', primaryKey: false },
          { name: 'project_name', type: 'TEXT', primaryKey: false },
          { name: 'cost', type: 'REAL', primaryKey: false }
        ]
      }
    ],
    examples: [
      {
        title: 'Example 1',
        input: {
          projects: [
            { project_id: 101, year: 2021, project_name: 'Project Alpha', cost: 30000 },
            { project_id: 102, year: 2021, project_name: 'Project Beta', cost: 50000 },
            { project_id: 103, year: 2021, project_name: 'Project Gamma', cost: 15000 },
            { project_id: 104, year: 2022, project_name: 'Project Delta', cost: 45000 },
            { project_id: 105, year: 2022, project_name: 'Project Epsilon', cost: 35000 },
            { project_id: 106, year: 2022, project_name: 'Project Zeta', cost: 27000 }
          ]
        },
        output: [
          { year: 2021, avg_cost: 31666.67 },
          { year: 2022, avg_cost: 35666.67 }
        ],
        explanation: '2021 average: (30000 + 50000 + 15000) / 3 = 31666.67. 2022 average: (45000 + 35000 + 27000) / 3 = 35666.67.'
      }
    ],
    starterCode: `-- Write your SQL query below
`,
    solution: `SELECT 
    year, 
    ROUND(AVG(cost), 2) AS avg_cost 
FROM 
    projects 
GROUP BY 
    year
ORDER BY 
    year;`,
    explanation: `We group the rows by \`year\` and calculate \`ROUND(AVG(cost), 2)\`.
Ordering by \`year ASC\` produces a clear, chronological breakdown of annual project expenditures.`,
    expectedColumns: ['year', 'avg_cost'],
    orderSensitive: true,
    testCases: [
      {
        id: 'tc-1',
        name: 'Visible Test Case 1 — Multi-Year Budgets',
        isHidden: false,
        data: {
          projects: [
            { project_id: 101, year: 2021, project_name: 'Project Alpha', cost: 30000 },
            { project_id: 102, year: 2021, project_name: 'Project Beta', cost: 50000 },
            { project_id: 103, year: 2021, project_name: 'Project Gamma', cost: 15000 },
            { project_id: 104, year: 2022, project_name: 'Project Delta', cost: 45000 },
            { project_id: 105, year: 2022, project_name: 'Project Epsilon', cost: 35000 },
            { project_id: 106, year: 2022, project_name: 'Project Zeta', cost: 27000 }
          ]
        },
        expected: [
          { year: 2021, avg_cost: 31666.67 },
          { year: 2022, avg_cost: 35666.67 }
        ]
      },
      {
        id: 'tc-2',
        name: 'Visible Test Case 2 — Single Year Round Average',
        isHidden: false,
        data: {
          projects: [
            { project_id: 201, year: 2023, project_name: 'Project Alpha', cost: 10000 },
            { project_id: 202, year: 2023, project_name: 'Project Beta', cost: 20000 },
            { project_id: 203, year: 2023, project_name: 'Project Gamma', cost: 30000 }
          ]
        },
        expected: [
          { year: 2023, avg_cost: 20000 }
        ]
      },
      {
        id: 'tc-3',
        name: 'Visible Test Case 3 — Three Successive Financial Years',
        isHidden: false,
        data: {
          projects: [
            { project_id: 301, year: 2022, project_name: 'P1', cost: 40000 },
            { project_id: 302, year: 2022, project_name: 'P2', cost: 60000 },
            { project_id: 303, year: 2023, project_name: 'P3', cost: 75000 },
            { project_id: 304, year: 2023, project_name: 'P4', cost: 85000 },
            { project_id: 305, year: 2024, project_name: 'P5', cost: 90000 },
            { project_id: 306, year: 2024, project_name: 'P6', cost: 110000 }
          ]
        },
        expected: [
          { year: 2022, avg_cost: 50000 },
          { year: 2023, avg_cost: 80000 },
          { year: 2024, avg_cost: 100000 }
        ]
      },
      {
        id: 'tc-4',
        name: 'Visible Test Case 4 — Rounding Decimal Precision (.33)',
        isHidden: false,
        data: {
          projects: [
            { project_id: 401, year: 2024, project_name: 'Micro-A', cost: 1000 },
            { project_id: 402, year: 2024, project_name: 'Micro-B', cost: 1000 },
            { project_id: 403, year: 2024, project_name: 'Micro-C', cost: 2000 }
          ]
        },
        expected: [
          { year: 2024, avg_cost: 1333.33 }
        ]
      },
      {
        id: 'tc-5',
        name: 'Hidden Test Case 5 — Multi-Department Enterprise Portfolio',
        isHidden: true,
        data: {
          projects: [
            { project_id: 501, year: 2020, project_name: 'D1', cost: 25000 },
            { project_id: 502, year: 2020, project_name: 'D2', cost: 35000 },
            { project_id: 503, year: 2021, project_name: 'D3', cost: 45000 },
            { project_id: 504, year: 2021, project_name: 'D4', cost: 55000 },
            { project_id: 505, year: 2022, project_name: 'D5', cost: 70000 },
            { project_id: 506, year: 2022, project_name: 'D6', cost: 80000 },
            { project_id: 507, year: 2023, project_name: 'D7', cost: 120000 },
            { project_id: 508, year: 2023, project_name: 'D8', cost: 140000 }
          ]
        },
        expected: [
          { year: 2020, avg_cost: 30000 },
          { year: 2021, avg_cost: 50000 },
          { year: 2022, avg_cost: 75000 },
          { year: 2023, avg_cost: 130000 }
        ]
      }
    ]
  }
];


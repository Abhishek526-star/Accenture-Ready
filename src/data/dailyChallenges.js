// src/data/dailyChallenges.js
// Daily Challenge generator with deterministic rotation and streak reward integration

export const CHALLENGE_BANK = [
  {
    id: 'dc-01',
    title: 'First Non-Repeating Character',
    category: 'Strings & Hashing',
    difficulty: 'Easy',
    xpReward: 50,
    targetMinutes: 10,
    prompt: `Given a string s, find the first non-repeating character in it and return its 0-based index. If every character repeats or no unique character exists, return -1.`,
    examples: [
      { input: 's = "accenture"', output: '0', explanation: "'a' appears only once and is at index 0." },
      { input: 's = "loveaccenture"', output: '2', explanation: "'v' is the first unique character at index 2." },
      { input: 's = "aabb"', output: '-1', explanation: 'All characters repeat.' }
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of only lowercase English letters.'
    ],
    starterTemplates: {
      python: `class Solution:
    def firstUniqChar(self, s: str) -> int:
        # TODO: Complete this function
        # Find the first non-repeating character in s and return its index
        # Return -1 if no unique character exists
        pass
`,
      java: `import java.util.*;

class Solution {
    public int firstUniqChar(String s) {
        // TODO: Complete this function
        // Find the first non-repeating character in s and return its index
        // Return -1 if no unique character exists
        return -1;
    }
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public int FirstUniqChar(string s) {
        // TODO: Complete this function
        // Find the first non-repeating character in s and return its index
        // Return -1 if no unique character exists
        return -1;
    }
}
`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  // TODO: Complete this function
  // Find the first non-repeating character in s and return its index
  // Return -1 if no unique character exists
  
}
`
    },
    solution: {
      approach: `We solve this problem in 2 simple, intuitive steps:
1. Count Frequency: Scan through the string once and count how many times each letter appears using a frequency table or hash map.
2. Find First Unique: Scan through the string a second time from left to right. The very first character whose count is 1 is our answer! Return its index immediately.
3. Fallback: If no character has a count of 1 after scanning the entire string, return -1.`,
      timeComplexity: 'O(n) - We traverse the string of length n only twice.',
      spaceComplexity: 'O(1) - Because English lowercase letters are fixed at 26 keys.',
      code: {
        python: `class Solution:
    def firstUniqChar(self, s: str) -> int:
        from collections import Counter
        # Step 1: Count frequency of each character
        freq = Counter(s)
        
        # Step 2: Find the first character with frequency 1
        for idx, char in enumerate(s):
            if freq[char] == 1:
                return idx
        return -1`,
        java: `import java.util.HashMap;

class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> freq = new HashMap<>();
        
        // Step 1: Count frequency of each letter
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        // Step 2: Find first character with count 1
        for (int i = 0; i < s.length(); i++) {
            if (freq.get(s.charAt(i)) == 1) {
                return i;
            }
        }
        return -1;
    }
}`,
        csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public int FirstUniqChar(string s) {
        Dictionary<char, int> freq = new Dictionary<char, int>();
        
        // Step 1: Count frequency
        foreach (char c in s) {
            if (freq.ContainsKey(c)) {
                freq[c]++;
            } else {
                freq[c] = 1;
            }
        }
        
        // Step 2: Find first unique
        for (int i = 0; i < s.Length; i++) {
            if (freq[s[i]] == 1) {
                return i;
            }
        }
        return -1;
    }
}`,
        javascript: `function firstUniqChar(s) {
  const freq = {};
  // Step 1: Count frequency of each character
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  // Step 2: Find first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}`
      }
    },
    hints: [
      'Think about using a dictionary or hash map to count character frequencies in pass 1.',
      'In pass 2, iterate through the string again from left to right and check which character has count === 1.'
    ],
    testCases: [
      { input: 'accenture', expected: 0 },
      { input: 'loveaccenture', expected: 2 },
      { input: 'aabb', expected: -1 }
    ]
  },
  {
    id: 'dc-02',
    title: 'Valid Palindrome After Cleanup',
    category: 'Strings & Two Pointer',
    difficulty: 'Easy',
    xpReward: 50,
    targetMinutes: 8,
    prompt: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Determine if string s is a palindrome.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' },
      { input: 's = " "', output: 'true', explanation: 'An empty string reads the same forward and backward.' }
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.'
    ],
    starterTemplates: {
      python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        # TODO: Complete this function
        # Clean string to lowercase alphanumeric and return True if it's a palindrome
        pass
`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // TODO: Complete this function
        // Clean string to lowercase alphanumeric and return true if it's a palindrome
        return false;
    }
}
`,
      csharp: `using System;
using System.Text.RegularExpressions;

public class Solution {
    public bool IsPalindrome(string s) {
        // TODO: Complete this function
        // Clean string to lowercase alphanumeric and return true if it's a palindrome
        return false;
    }
}
`,
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // TODO: Complete this function
  // Convert to lowercase, remove non-alphanumeric, check palindrome
  
}
`
    },
    solution: {
      approach: `We solve this in two easy steps:
1. Filter & Lowercase: Remove all spaces and symbols, keeping only alphanumeric characters (letters and digits), and convert them all to lowercase.
2. Two-Pointer Comparison: Put one pointer at the start (left = 0) and one at the end (right = length - 1). Move them towards each other. If characters at left and right ever differ, it is not a palindrome (return false). If they meet without differences, return true.`,
      timeComplexity: 'O(n) - Single pass through the string of length n.',
      spaceComplexity: 'O(1) - When using two pointers directly, or O(n) for the cleaned string.',
      code: {
        python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Keep only alphanumeric characters and make lowercase
        cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
        # Check if equal to its reverse
        return cleaned == cleaned[::-1]`,
        java: `class Solution {
    public boolean isPalindrome(String s) {
        // Step 1: Clean string
        String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        // Step 2: Two pointer check
        int left = 0, right = cleaned.length() - 1;
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
        csharp: `using System;
using System.Text.RegularExpressions;

public class Solution {
    public bool IsPalindrome(string s) {
        // Step 1: Clean string
        string cleaned = Regex.Replace(s, "[^a-zA-Z0-9]", "").ToLower();
        
        // Step 2: Two pointer check
        int left = 0, right = cleaned.Length - 1;
        while (left < right) {
            if (cleaned[left] != cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
        javascript: `function isPalindrome(s) {
  // Step 1: Clean string by keeping only lowercase alphanumeric letters
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Step 2: Two pointer check
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}`
      }
    },
    hints: [
      'Strip non-alphanumeric characters and convert to lowercase first.',
      'Use two pointers starting from left (0) and right (len - 1) moving towards the center.'
    ],
    testCases: [
      { input: 'A man, a plan, a canal: Panama', expected: true },
      { input: 'race a car', expected: false },
      { input: ' ', expected: true }
    ]
  },
  {
    id: 'dc-03',
    title: 'Two Sum Target Index',
    category: 'Arrays & Hashing',
    difficulty: 'Easy',
    xpReward: 50,
    targetMinutes: 10,
    prompt: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution and you cannot use the same element twice.`,
    examples: [
      { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]', explanation: 'nums[1] + nums[2] == 6, we return [1, 2].' }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      'Only one valid answer exists.'
    ],
    starterTemplates: {
      python: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # TODO: Complete this function
        # Return indices of the two numbers that add up to target
        pass
`,
      java: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // TODO: Complete this function
        // Return indices of the two numbers that add up to target
        return new int[]{};
    }
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // TODO: Complete this function
        // Return indices of the two numbers that add up to target
        return new int[0];
    }
}
`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // TODO: Complete this function
  // Return the two indices that add up to target
  
}
`
    },
    solution: {
      approach: `We use a Hash Map to find the pair in a single pass:
1. As we iterate through the array at index i with value nums[i], the needed complement is: complement = target - nums[i].
2. Check if complement is already stored in our hash map:
   - If YES: we found the pair! Return [map[complement], i].
   - If NO: save the current number and its index in the map: map[nums[i]] = i.
3. This achieves fast O(1) average lookup instead of slow nested O(n^2) loops!`,
      timeComplexity: 'O(n) - We only loop through the array once.',
      spaceComplexity: 'O(n) - Storing up to n elements in the hash map.',
      code: {
        python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in seen:
                return [seen[diff], i]
            seen[num] = i
        return []`,
        java: `import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`,
        csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (map.ContainsKey(complement)) {
                return new int[] { map[complement], i };
            }
            map[nums[i]] = i;
        }
        return new int[0];
    }
}`,
        javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
      }
    },
    hints: [
      'Store each seen number and its index in a hash map as you iterate.',
      'For each element, check if (target - current_number) is already in the map.'
    ],
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] }
    ]
  },
  {
    id: 'dc-04',
    title: 'Move Zeroes to End',
    category: 'Arrays & In-Place',
    difficulty: 'Medium',
    xpReward: 50,
    targetMinutes: 12,
    prompt: `Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.`,
    examples: [
      { input: 'nums = [0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]', explanation: 'Non-zeroes preserve order [1, 3, 12], and zeroes shifted to end.' },
      { input: 'nums = [0]', output: '[0]', explanation: 'Single zero remains [0].' }
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-2^31 <= nums[i] <= 2^31 - 1'
    ],
    starterTemplates: {
      python: `from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> List[int]:
        # TODO: Complete this function
        # Shift zeroes to the end in-place while keeping relative order
        pass
`,
      java: `class Solution {
    public int[] moveZeroes(int[] nums) {
        // TODO: Complete this function
        // Shift zeroes to the end in-place while keeping relative order
        return nums;
    }
}
`,
      csharp: `using System;

public class Solution {
    public int[] MoveZeroes(int[] nums) {
        // TODO: Complete this function
        // Shift zeroes to the end in-place while keeping relative order
        return nums;
    }
}
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
function moveZeroes(nums) {
  // TODO: Complete this function
  // Move all 0's to end in-place while keeping relative order
  
}
`
    },
    solution: {
      approach: `We use an insert pointer approach in two quick passes:
1. Maintain an insertPos pointer starting at index 0.
2. Iterate through the array. Whenever we encounter a non-zero element, write it to nums[insertPos] and increment insertPos.
3. Once all non-zeroes have been moved forward, fill all remaining indices from insertPos up to the end of the array with zeroes.
4. This preserves relative order and uses zero extra space!`,
      timeComplexity: 'O(n) - Single pass to shift non-zeroes forward, then fill remaining slots with zeroes.',
      spaceComplexity: 'O(1) - In-place modification with no extra data structures.',
      code: {
        python: `class Solution:
    def moveZeroes(self, nums: list[int]) -> list[int]:
        insert_pos = 0
        # Step 1: Place non-zeroes
        for num in nums:
            if num != 0:
                nums[insert_pos] = num
                insert_pos += 1
        # Step 2: Fill remaining with zeroes
        while insert_pos < len(nums):
            nums[insert_pos] = 0
            insert_pos += 1
        return nums`,
        java: `class Solution {
    public int[] moveZeroes(int[] nums) {
        int insertPos = 0;
        // Step 1: Move non-zeroes forward
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[insertPos++] = nums[i];
            }
        }
        // Step 2: Fill rest with 0
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
        return nums;
    }
}`,
        csharp: `using System;

public class Solution {
    public int[] MoveZeroes(int[] nums) {
        int insertPos = 0;
        // Step 1: Move non-zeroes
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != 0) {
                nums[insertPos++] = nums[i];
            }
        }
        // Step 2: Fill rest with 0
        while (insertPos < nums.Length) {
            nums[insertPos++] = 0;
        }
        return nums;
    }
}`,
        javascript: `function moveZeroes(nums) {
  let insertPos = 0;
  // Step 1: Shift all non-zero numbers forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i];
    }
  }
  // Step 2: Fill remaining indices with 0
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
  return nums;
}`
      }
    },
    hints: [
      'Maintain an insert position index tracking where the next non-zero number should go.',
      'Fill remaining positions with zeroes after all non-zeroes have been moved.'
    ],
    testCases: [
      { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
      { input: [0], expected: [0] }
    ]
  }
];

export function getTodaysChallenge() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % CHALLENGE_BANK.length;
  const challenge = CHALLENGE_BANK[index];

  const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const completedDates = JSON.parse(localStorage.getItem('accenture_completed_daily_challenges') || '[]');
  const isCompletedToday = completedDates.includes(dateString);

  return {
    ...challenge,
    dateString,
    isCompletedToday
  };
}

export function markTodayChallengeComplete() {
  const now = new Date();
  const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const completedDates = JSON.parse(localStorage.getItem('accenture_completed_daily_challenges') || '[]');
  if (!completedDates.includes(dateString)) {
    completedDates.push(dateString);
    localStorage.setItem('accenture_completed_daily_challenges', JSON.stringify(completedDates));
  }
}

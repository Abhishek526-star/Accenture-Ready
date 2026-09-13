// src/data/dsaOptimalSolutions.js
// Verified, multi-language optimal solutions for all 49 Accenture DSA sheet questions

export const DSA_OPTIMAL_SOLUTIONS = {
  'dsa-1': {
    python: `class Solution:
    def printTriangle(self, n: int) -> None:
        for i in range(1, n + 1):
            for j in range(1, i + 1):
                print(j, end=" ")
            print()`,
    java: `import java.util.*;

public class Solution {
    public static void printTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    void printTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                cout << j << " ";
            }
            cout << "\\n";
        }
    }
};`,
    javascript: `function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      row.push(j);
    }
    console.log(row.join(" ") + " ");
  }
}`
  },

  'dsa-2': {
    python: `class Solution:
    def printPyramid(self, n: int) -> None:
        for i in range(n):
            print(" " * (n - i - 1) + "*" * (2 * i + 1))`,
    java: `import java.util.*;

public class Solution {
    public static void printPyramid(int n) {
        for (int i = 0; i < n; i++) {
            for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
            for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    void printPyramid(int n) {
        for (int i = 0; i < n; i++) {
            cout << string(n - i - 1, ' ') << string(2 * i + 1, '*') << "\\n";
        }
    }
};`,
    javascript: `function printPyramid(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
}`
  },

  'dsa-3': {
    python: `class Solution:
    def printInvertedPyramid(self, n: int) -> None:
        for i in range(n):
            print(" " * i + "*" * (2 * n - (2 * i + 1)))`,
    java: `import java.util.*;

public class Solution {
    public static void printInvertedPyramid(int n) {
        for (int i = 0; i < n; i++) {
            for (int s = 0; s < i; s++) System.out.print(" ");
            for (int j = 0; j < 2 * n - (2 * i + 1); j++) System.out.print("*");
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    void printInvertedPyramid(int n) {
        for (int i = 0; i < n; i++) {
            cout << string(i, ' ') << string(2 * n - (2 * i + 1), '*') << "\\n";
        }
    }
};`,
    javascript: `function printInvertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(i) + "*".repeat(2 * n - (2 * i + 1)));
  }
}`
  },

  'dsa-4': {
    python: `class Solution:
    def printDiamond(self, n: int) -> None:
        for i in range(n):
            print(" " * (n - i - 1) + "*" * (2 * i + 1))
        for i in range(n - 2, -1, -1):
            print(" " * (n - i - 1) + "*" * (2 * i + 1))`,
    java: `import java.util.*;

public class Solution {
    public static void printDiamond(int n) {
        for (int i = 0; i < n; i++) {
            for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
            for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
            System.out.println();
        }
        for (int i = n - 2; i >= 0; i--) {
            for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
            for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    void printDiamond(int n) {
        for (int i = 0; i < n; i++) {
            cout << string(n - i - 1, ' ') << string(2 * i + 1, '*') << "\\n";
        }
        for (int i = n - 2; i >= 0; i--) {
            cout << string(n - i - 1, ' ') << string(2 * i + 1, '*') << "\\n";
        }
    }
};`,
    javascript: `function printDiamond(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
  for (let i = n - 2; i >= 0; i--) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
}`
  },

  'dsa-5': {
    python: `class Solution:
    def findLargest(self, arr: list) -> int:
        max_val = arr[0]
        for x in arr[1:]:
            if x > max_val:
                max_val = x
        return max_val`,
    java: `import java.util.*;

public class Solution {
    public static int findLargest(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findLargest(const vector<int>& arr) {
        int m = arr[0];
        for (int x : arr) if (x > m) m = x;
        return m;
    }
};`,
    javascript: `function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`
  },

  'dsa-6': {
    python: `class Solution:
    def reverseArray(self, arr: list) -> None:
        left, right = 0, len(arr) - 1
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1`,
    java: `import java.util.*;

public class Solution {
    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    void reverseArray(vector<int>& arr) {
        int left = 0, right = (int)arr.size() - 1;
        while (left < right) {
            swap(arr[left++], arr[right--]);
        }
    }
};`,
    javascript: `function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}`
  },

  'dsa-7': {
    python: `class Solution:
    def countFrequency(self, arr: list) -> dict:
        freq = {}
        for x in arr:
            freq[x] = freq.get(x, 0) + 1
        return freq`,
    java: `import java.util.*;

public class Solution {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        return freq;
    }
}`,
    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    unordered_map<int, int> countFrequency(const vector<int>& arr) {
        unordered_map<int, int> freq;
        for (int x : arr) freq[x]++;
        return freq;
    }
};`,
    javascript: `function countFrequency(arr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}`
  },

  'dsa-8': {
    python: `class Solution:
    def findAverage(self, arr: list) -> float:
        return sum(arr) / len(arr)`,
    java: `import java.util.*;

public class Solution {
    public static double findAverage(int[] arr) {
        double sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum / arr.length;
    }
}`,
    cpp: `#include <vector>
#include <numeric>
using namespace std;

class Solution {
public:
    double findAverage(const vector<int>& arr) {
        double sum = 0;
        for (int x : arr) sum += x;
        return sum / arr.size();
    }
};`,
    javascript: `function findAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}`
  },

  'dsa-9': {
    python: `class Solution:
    def removeDuplicates(self, nums: list) -> int:
        if not nums:
            return 0
        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]
        return i + 1`,
    java: `import java.util.*;

public class Solution {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        int i = 0;
        for (size_t j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) nums[++i] = nums[j];
        }
        return i + 1;
    }
};`,
    javascript: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}`
  },

  'dsa-10': {
    python: `class Solution:
    def removeDuplicatesUnsorted(self, arr: list) -> list:
        seen = set()
        res = []
        for x in arr:
            if x not in seen:
                seen.add(x)
                res.append(x)
        return res`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> removeDuplicatesUnsorted(int[] arr) {
        Set<Integer> seen = new LinkedHashSet<>();
        for (int num : arr) {
            seen.add(num);
        }
        return new ArrayList<>(seen);
    }
}`,
    cpp: `#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<int> removeDuplicatesUnsorted(const vector<int>& arr) {
        unordered_set<int> seen;
        vector<int> res;
        for (int x : arr) {
            if (seen.find(x) == seen.end()) {
                seen.insert(x);
                res.push_back(x);
            }
        }
        return res;
    }
};`,
    javascript: `function removeDuplicatesUnsorted(arr) {
  return [...new Set(arr)];
}`
  },

  'dsa-11': {
    python: `class Solution:
    def isSubset(self, arr1: list, arr2: list) -> bool:
        s1 = set(arr1)
        return all(x in s1 for x in arr2)`,
    java: `import java.util.*;

public class Solution {
    public static boolean isSubset(int[] arr1, int[] arr2) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr1) {
            set.add(num);
        }
        for (int num : arr2) {
            if (!set.contains(num)) {
                return false;
            }
        }
        return true;
    }
}`,
    cpp: `#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool isSubset(const vector<int>& arr1, const vector<int>& arr2) {
        unordered_set<int> s(arr1.begin(), arr1.end());
        for (int x : arr2) {
            if (s.find(x) == s.end()) return false;
        }
        return true;
    }
};`,
    javascript: `function isSubset(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.every(x => set.has(x));
}`
  },

  'dsa-12': {
    python: `class Solution:
    def moveZeroes(self, nums: list) -> None:
        insert_pos = 0
        for x in nums:
            if x != 0:
                nums[insert_pos] = x
                insert_pos += 1
        while insert_pos < len(nums):
            nums[insert_pos] = 0
            insert_pos += 1`,
    java: `import java.util.*;

public class Solution {
    public static void moveZeroes(int[] nums) {
        int insertPos = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos++] = num;
            }
        }
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int insertPos = 0;
        for (int x : nums) {
            if (x != 0) nums[insertPos++] = x;
        }
        while (insertPos < (int)nums.size()) nums[insertPos++] = 0;
    }
};`,
    javascript: `function moveZeroes(nums) {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) nums[insertPos++] = num;
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}`
  },

  'dsa-13': {
    python: `class Solution:
    def maxProfit(self, prices: list) -> int:
        min_price = float('inf')
        max_profit = 0
        for p in prices:
            if p < min_price:
                min_price = p
            elif p - min_price > max_profit:
                max_profit = p - min_price
        return max_profit`,
    java: `import java.util.*;

public class Solution {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
}`,
    cpp: `#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

class Solution {
public:
    int maxProfit(const vector<int>& prices) {
        int minPrice = INT_MAX, maxProfit = 0;
        for (int p : prices) {
            if (p < minPrice) minPrice = p;
            else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
        }
        return maxProfit;
    }
};`,
    javascript: `function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }
  return maxProfit;
}`
  },

  'dsa-14': {
    python: `class Solution:
    def findTwoElement(self, arr: list, n: int) -> list:
        freq = [0] * (n + 1)
        repeating = missing = -1
        for x in arr:
            freq[x] += 1
        for i in range(1, n + 1):
            if freq[i] == 2:
                repeating = i
            elif freq[i] == 0:
                missing = i
        return [repeating, missing]`,
    java: `import java.util.*;

public class Solution {
    public static int[] findTwoElement(int[] arr, int n) {
        int[] count = new int[n + 1];
        int repeating = -1, missing = -1;
        for (int num : arr) {
            count[num]++;
        }
        for (int i = 1; i <= n; i++) {
            if (count[i] == 2) repeating = i;
            else if (count[i] == 0) missing = i;
        }
        return new int[]{repeating, missing};
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> findTwoElement(const vector<int>& arr, int n) {
        vector<int> count(n + 1, 0);
        int rep = -1, mis = -1;
        for (int x : arr) count[x]++;
        for (int i = 1; i <= n; i++) {
            if (count[i] == 2) rep = i;
            else if (count[i] == 0) mis = i;
        }
        return {rep, mis};
    }
};`,
    javascript: `function findTwoElement(arr, n) {
  const count = new Array(n + 1).fill(0);
  let rep = -1, mis = -1;
  for (const x of arr) count[x]++;
  for (let i = 1; i <= n; i++) {
    if (count[i] === 2) rep = i;
    else if (count[i] === 0) mis = i;
  }
  return [rep, mis];
}`
  },

  'dsa-15': {
    python: `class Solution:
    def maxProfitMultiple(self, prices: list) -> int:
        profit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                profit += prices[i] - prices[i - 1]
        return profit`,
    java: `import java.util.*;

public class Solution {
    public static int maxProfitMultiple(int[] prices) {
        int maxProfit = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxProfitMultiple(const vector<int>& prices) {
        int profit = 0;
        for (size_t i = 1; i < prices.size(); i++) {
            if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
        }
        return profit;
    }
};`,
    javascript: `function maxProfitMultiple(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
}`
  },

  'dsa-16': {
    python: `class Solution:
    def maxSubArray(self, nums: list) -> int:
        max_so_far = current_max = nums[0]
        for x in nums[1:]:
            current_max = max(x, current_max + x)
            max_so_far = max(max_so_far, current_max)
        return max_so_far`,
    java: `import java.util.*;

public class Solution {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currMax = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            maxSoFar = Math.max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSubArray(const vector<int>& nums) {
        int maxSoFar = nums[0], currMax = nums[0];
        for (size_t i = 1; i < nums.size(); i++) {
            currMax = max(nums[i], currMax + nums[i]);
            maxSoFar = max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
};`,
    javascript: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
}`
  },

  'dsa-17': {
    python: `class Solution:
    def numSubarrayProductLessThanK(self, nums: list, k: int) -> int:
        if k <= 1:
            return 0
        prod = 1
        ans = left = 0
        for right, val in enumerate(nums):
            prod *= val
            while prod >= k and left <= right:
                prod //= nums[left]
                left += 1
            ans += right - left + 1
        return ans`,
    java: `import java.util.*;

public class Solution {
    public static int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) return 0;
        int prod = 1, ans = 0, left = 0;
        for (int right = 0; right < nums.length; right++) {
            prod *= nums[right];
            while (prod >= k && left <= right) {
                prod /= nums[left++];
            }
            ans += right - left + 1;
        }
        return ans;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int numSubarrayProductLessThanK(const vector<int>& nums, int k) {
        if (k <= 1) return 0;
        int prod = 1, ans = 0, left = 0;
        for (int right = 0; right < (int)nums.size(); right++) {
            prod *= nums[right];
            while (prod >= k && left <= right) prod /= nums[left++];
            ans += right - left + 1;
        }
        return ans;
    }
};`,
    javascript: `function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  let prod = 1, ans = 0, left = 0;
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k && left <= right) {
      prod = Math.floor(prod / nums[left++]);
    }
    ans += right - left + 1;
  }
  return ans;
}`
  },

  'dsa-18': {
    python: `class Solution:
    def longestOnes(self, nums: list, k: int) -> int:
        left = 0
        zero_count = 0
        max_len = 0
        for right, val in enumerate(nums):
            if val == 0:
                zero_count += 1
            while zero_count > k:
                if nums[left] == 0:
                    zero_count -= 1
                left += 1
            max_len = max(max_len, right - left + 1)
        return max_len`,
    java: `import java.util.*;

public class Solution {
    public static int longestOnes(int[] nums, int k) {
        int left = 0, zeroCount = 0, maxLen = 0;
        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) zeroCount++;
            while (zeroCount > k) {
                if (nums[left] == 0) zeroCount--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int longestOnes(const vector<int>& nums, int k) {
        int left = 0, zeroCount = 0, maxLen = 0;
        for (int right = 0; right < (int)nums.size(); right++) {
            if (nums[right] == 0) zeroCount++;
            while (zeroCount > k) {
                if (nums[left] == 0) zeroCount--;
                left++;
            }
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};`,
    javascript: `function longestOnes(nums, k) {
  let left = 0, zeroCount = 0, maxLen = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
  },

  'dsa-19': {
    python: `class Solution:
    def primeFactors(self, n: int) -> list:
        factors = []
        d = 2
        while d * d <= n:
            while n % d == 0:
                factors.append(d)
                n //= d
            d += 1
        if n > 1:
            factors.append(n)
        return factors`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> primeFactors(int n) {
        List<Integer> factors = new ArrayList<>();
        for (int d = 2; d * d <= n; d++) {
            while (n % d == 0) {
                factors.add(d);
                n /= d;
            }
        }
        if (n > 1) factors.add(n);
        return factors;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> primeFactors(int n) {
        vector<int> factors;
        for (int d = 2; d * d <= n; d++) {
            while (n % d == 0) {
                factors.push_back(d);
                n /= d;
            }
        }
        if (n > 1) factors.push_back(n);
        return factors;
    }
};`,
    javascript: `function primeFactors(n) {
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.push(d);
      n = Math.floor(n / d);
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}`
  },

  'dsa-20': {
    python: `class Solution:
    def trailingZeroes(self, n: int) -> int:
        count = 0
        while n >= 5:
            count += n // 5
            n //= 5
        return count`,
    java: `import java.util.*;

public class Solution {
    public static int trailingZeroes(int n) {
        int count = 0;
        while (n >= 5) {
            count += n / 5;
            n /= 5;
        }
        return count;
    }
}`,
    cpp: `class Solution {
public:
    int trailingZeroes(int n) {
        int count = 0;
        while (n >= 5) {
            count += n / 5;
            n /= 5;
        }
        return count;
    }
};`,
    javascript: `function trailingZeroes(n) {
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
}`
  },

  'dsa-21': {
    python: `class Solution:
    def replaceZeroWithOne(self, n: int) -> int:
        return int(str(n).replace('0', '1'))`,
    java: `import java.util.*;

public class Solution {
    public static int replaceZeroWithOne(int n) {
        String s = Integer.toString(n);
        return Integer.parseInt(s.replace('0', '1'));
    }
}`,
    cpp: `#include <string>
using namespace std;

class Solution {
public:
    int replaceZeroWithOne(int n) {
        string s = to_string(n);
        for (char &c : s) if (c == '0') c = '1';
        return stoi(s);
    }
};`,
    javascript: `function replaceZeroWithOne(n) {
  return parseInt(String(n).replace(/0/g, '1'), 10);
}`
  },

  'dsa-22': {
    python: `class Solution:
    def floorSqrt(self, n: int) -> int:
        if n == 0 or n == 1:
            return n
        low, high, ans = 1, n, 0
        while low <= high:
            mid = (low + high) // 2
            if mid * mid <= n:
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        return ans`,
    java: `import java.util.*;

public class Solution {
    public static long floorSqrt(long n) {
        if (n == 0 || n == 1) return n;
        long low = 1, high = n, ans = 0;
        while (low <= high) {
            long mid = low + (high - low) / 2;
            if (mid <= n / mid) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}`,
    cpp: `class Solution {
public:
    long long floorSqrt(long long n) {
        if (n == 0 || n == 1) return n;
        long long low = 1, high = n, ans = 0;
        while (low <= high) {
            long long mid = low + (high - low) / 2;
            if (mid <= n / mid) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
};`,
    javascript: `function floorSqrt(n) {
  return Math.floor(Math.sqrt(n));
}`
  },

  'dsa-23': {
    python: `class Solution:
    def isAbundant(self, n: int) -> bool:
        div_sum = 0
        for i in range(1, n):
            if n % i == 0:
                div_sum += i
        return div_sum > n`,
    java: `import java.util.*;

public class Solution {
    public static boolean isAbundant(int n) {
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) sum += i;
        }
        return sum > n;
    }
}`,
    cpp: `class Solution {
public:
    bool isAbundant(int n) {
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) sum += i;
        }
        return sum > n;
    }
};`,
    javascript: `function isAbundant(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum > n;
}`
  },

  'dsa-24': {
    python: `class Solution:
    def binaryToDecimal(self, binary: str) -> int:
        return int(binary, 2)`,
    java: `import java.util.*;

public class Solution {
    public static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }
}`,
    cpp: `#include <string>
using namespace std;

class Solution {
public:
    int binaryToDecimal(string binary) {
        return stoi(binary, nullptr, 2);
    }
};`,
    javascript: `function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}`
  },

  'dsa-25': {
    python: `class Solution:
    def decimalToBinary(self, n: int) -> str:
        return bin(n)[2:]`,
    java: `import java.util.*;

public class Solution {
    public static String decimalToBinary(int n) {
        return Integer.toBinaryString(n);
    }
}`,
    cpp: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string decimalToBinary(int n) {
        if (n == 0) return "0";
        string s = "";
        while (n > 0) {
            s += (n % 2 == 0 ? "0" : "1");
            n /= 2;
        }
        reverse(s.begin(), s.end());
        return s;
    }
};`,
    javascript: `function decimalToBinary(n) {
  return n.toString(2);
}`
  },

  'dsa-26': {
    python: `class Solution:
    def binaryToOctal(self, binary: str) -> str:
        dec = int(binary, 2)
        return oct(dec)[2:]`,
    java: `import java.util.*;

public class Solution {
    public static String binaryToOctal(String binary) {
        int dec = Integer.parseInt(binary, 2);
        return Integer.toOctalString(dec);
    }
}`,
    cpp: `#include <string>
using namespace std;

class Solution {
public:
    string binaryToOctal(string binary) {
        int dec = stoi(binary, nullptr, 2);
        char buf[32];
        sprintf(buf, "%o", dec);
        return string(buf);
    }
};`,
    javascript: `function binaryToOctal(binary) {
  return parseInt(binary, 2).toString(8);
}`
  },

  'dsa-27': {
    python: `class Solution:
    def octalToBinary(self, octal: str) -> str:
        dec = int(octal, 8)
        return bin(dec)[2:]`,
    java: `import java.util.*;

public class Solution {
    public static String octalToBinary(String octal) {
        int dec = Integer.parseInt(octal, 8);
        return Integer.toBinaryString(dec);
    }
}`,
    cpp: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string octalToBinary(string octal) {
        int dec = stoi(octal, nullptr, 8);
        if (dec == 0) return "0";
        string s = "";
        while (dec > 0) {
            s += (dec % 2 == 0 ? "0" : "1");
            dec /= 2;
        }
        reverse(s.begin(), s.end());
        return s;
    }
};`,
    javascript: `function octalToBinary(octal) {
  return parseInt(octal, 8).toString(2);
}`
  },

  'dsa-28': {
    python: `class Solution:
    def numberToWords(self, num: int) -> str:
        ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                "Seventeen", "Eighteen", "Nineteen"]
        tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        if num == 0:
            return "Zero"
        res = []
        if num >= 1000:
            res.append(ones[num // 1000] + " Thousand")
            num %= 1000
        if num >= 100:
            res.append(ones[num // 100] + " Hundred")
            num %= 100
        if num >= 20:
            res.append(tens[num // 10])
            num %= 10
        if num > 0:
            res.append(ones[num])
        return " ".join(res)`,
    java: `import java.util.*;

public class Solution {
    public static String numberToWords(int num) {
        String[] ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                         "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                         "Seventeen", "Eighteen", "Nineteen"};
        String[] tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
        if (num == 0) return "Zero";
        StringBuilder sb = new StringBuilder();
        if (num >= 1000) {
            sb.append(ones[num / 1000]).append(" Thousand ");
            num %= 1000;
        }
        if (num >= 100) {
            sb.append(ones[num / 100]).append(" Hundred ");
            num %= 100;
        }
        if (num >= 20) {
            sb.append(tens[num / 10]).append(" ");
            num %= 10;
        }
        if (num > 0) {
            sb.append(ones[num]);
        }
        return sb.toString().trim();
    }
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string numberToWords(int num) {
        vector<string> ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                               "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                               "Seventeen", "Eighteen", "Nineteen"};
        vector<string> tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
        if (num == 0) return "Zero";
        string res = "";
        if (num >= 1000) { res += ones[num / 1000] + " Thousand "; num %= 1000; }
        if (num >= 100) { res += ones[num / 100] + " Hundred "; num %= 100; }
        if (num >= 20) { res += tens[num / 10] + " "; num %= 10; }
        if (num > 0) { res += ones[num]; }
        while (!res.empty() && res.back() == ' ') res.pop_back();
        return res;
    }
};`,
    javascript: `function numberToWords(num) {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  if (num === 0) return "Zero";
  const res = [];
  if (num >= 1000) { res.push(ones[Math.floor(num / 1000)] + " Thousand"); num %= 1000; }
  if (num >= 100) { res.push(ones[Math.floor(num / 100)] + " Hundred"); num %= 100; }
  if (num >= 20) { res.push(tens[Math.floor(num / 10)]); num %= 10; }
  if (num > 0) { res.push(ones[num]); }
  return res.join(" ");
}`
  },

  'dsa-29': {
    python: `class Solution:
    def reverseString(self, s: str) -> str:
        return s[::-1]`,
    java: `import java.util.*;

public class Solution {
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }
}`,
    cpp: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string reverseString(string s) {
        reverse(s.begin(), s.end());
        return s;
    }
};`,
    javascript: `function reverseString(s) {
  return s.split('').reverse().join('');
}`
  },

  'dsa-30': {
    python: `class Solution:
    def isAnagram(self, s1: str, s2: str) -> bool:
        return sorted(s1) == sorted(s2)`,
    java: `import java.util.*;

public class Solution {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        return Arrays.equals(a1, a2);
    }
}`,
    cpp: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool isAnagram(string s1, string s2) {
        if (s1.size() != s2.size()) return false;
        sort(s1.begin(), s1.end());
        sort(s2.begin(), s2.end());
        return s1 == s2;
    }
};`,
    javascript: `function isAnagram(s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}`
  },

  'dsa-31': {
    python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        return s == s[::-1]`,
    java: `import java.util.*;

public class Solution {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) return false;
        }
        return true;
    }
}`,
    cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        int left = 0, right = (int)s.size() - 1;
        while (left < right) {
            if (s[left++] != s[right--]) return false;
        }
        return true;
    }
};`,
    javascript: `function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}`
  },

  'dsa-32': {
    python: `class Solution:
    def reverseWords(self, s: str) -> str:
        parts = s.split('.')
        return '.'.join(parts[::-1])`,
    java: `import java.util.*;

public class Solution {
    public static String reverseWords(String s) {
        String[] parts = s.split("\\\\.");
        Collections.reverse(Arrays.asList(parts));
        return String.join(".", parts);
    }
}`,
    cpp: `#include <string>
#include <vector>
#include <sstream>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        stringstream ss(s);
        string item;
        vector<string> parts;
        while (getline(ss, item, '.')) parts.push_back(item);
        string res = "";
        for (int i = (int)parts.size() - 1; i >= 0; i--) {
            res += parts[i] + (i > 0 ? "." : "");
        }
        return res;
    }
};`,
    javascript: `function reverseWords(s) {
  return s.split('.').reverse().join('.');
}`
  },

  'dsa-33': {
    python: `class Solution:
    def getMaxOccurringChar(self, s: str) -> str:
        counts = {}
        for c in s:
            counts[c] = counts.get(c, 0) + 1
        max_c = s[0]
        for c, cnt in counts.items():
            if cnt > counts[max_c] or (cnt == counts[max_c] and c < max_c):
                max_c = c
        return max_c`,
    java: `import java.util.*;

public class Solution {
    public static char getMaxOccurringChar(String s) {
        int[] freq = new int[256];
        for (char c : s.toCharArray()) freq[c]++;
        char maxChar = ' ';
        int maxCount = -1;
        for (int i = 0; i < 256; i++) {
            if (freq[i] > maxCount) {
                maxCount = freq[i];
                maxChar = (char) i;
            }
        }
        return maxChar;
    }
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    char getMaxOccurringChar(string s) {
        vector<int> freq(256, 0);
        for (char c : s) freq[(unsigned char)c]++;
        char maxChar = ' ';
        int maxCnt = -1;
        for (int i = 0; i < 256; i++) {
            if (freq[i] > maxCnt) {
                maxCnt = freq[i];
                maxChar = (char)i;
            }
        }
        return maxChar;
    }
};`,
    javascript: `function getMaxOccurringChar(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  let maxChar = s[0], maxCnt = 0;
  for (const c in freq) {
    if (freq[c] > maxCnt) {
      maxCnt = freq[c];
      maxChar = c;
    }
  }
  return maxChar;
}`
  },

  'dsa-34': {
    python: `class Solution:
    def longestSubstrDistinctChars(self, s: str) -> int:
        last_idx = {}
        left = max_len = 0
        for right, c in enumerate(s):
            if c in last_idx and last_idx[c] >= left:
                left = last_idx[c] + 1
            last_idx[c] = right
            max_len = max(max_len, right - left + 1)
        return max_len`,
    java: `import java.util.*;

public class Solution {
    public static int longestSubstrDistinctChars(String s) {
        int[] last = new int[256];
        Arrays.fill(last, -1);
        int maxLen = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (last[c] >= left) left = last[c] + 1;
            last[c] = right;
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`,
    cpp: `#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int longestSubstrDistinctChars(string s) {
        vector<int> last(256, -1);
        int maxLen = 0, left = 0;
        for (int right = 0; right < (int)s.size(); right++) {
            char c = s[right];
            if (last[(unsigned char)c] >= left) left = last[(unsigned char)c] + 1;
            last[(unsigned char)c] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};`,
    javascript: `function longestSubstrDistinctChars(s) {
  const map = {};
  let maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (map[c] !== undefined && map[c] >= left) left = map[c] + 1;
    map[c] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
  },

  'dsa-35': {
    python: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for c in s:
            if c in mapping:
                top = stack.pop() if stack else '#'
                if mapping[c] != top:
                    return False
            else:
                stack.append(c)
        return not stack`,
    java: `import java.util.*;

public class Solution {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
    cpp: `#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(') st.push(')');
            else if (c == '{') st.push('}');
            else if (c == '[') st.push(']');
            else if (st.empty() || st.top() != c) return false;
            else st.pop();
        }
        return st.empty();
    }
};`,
    javascript: `function isValid(s) {
  const stack = [];
  for (const c of s) {
    if (c === '(') stack.push(')');
    else if (c === '{') stack.push('}');
    else if (c === '[') stack.push(']');
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
}`
  },

  'dsa-36': {
    python: `class Solution:
    def uncommonChars(self, A: str, B: str) -> str:
        s1, s2 = set(A), set(B)
        diff = (s1 ^ s2)
        return "".join(sorted(diff)) if diff else "-1"`,
    java: `import java.util.*;

public class Solution {
    public static String uncommonChars(String A, String B) {
        Set<Character> s1 = new TreeSet<>();
        Set<Character> s2 = new TreeSet<>();
        for (char c : A.toCharArray()) s1.add(c);
        for (char c : B.toCharArray()) s2.add(c);
        Set<Character> res = new TreeSet<>(s1);
        res.addAll(s2);
        Set<Character> common = new HashSet<>(s1);
        common.retainAll(s2);
        res.removeAll(common);
        if (res.isEmpty()) return "-1";
        StringBuilder sb = new StringBuilder();
        for (char c : res) sb.append(c);
        return sb.toString();
    }
}`,
    cpp: `#include <string>
#include <set>
using namespace std;

class Solution {
public:
    string uncommonChars(string A, string B) {
        set<char> s1(A.begin(), A.end()), s2(B.begin(), B.end());
        string res = "";
        for (char c : s1) if (s2.find(c) == s2.end()) res += c;
        for (char c : s2) if (s1.find(c) == s1.end()) res += c;
        set<char> sorted(res.begin(), res.end());
        if (sorted.empty()) return "-1";
        return string(sorted.begin(), sorted.end());
    }
};`,
    javascript: `function uncommonChars(A, B) {
  const s1 = new Set(A), s2 = new Set(B);
  const diff = [];
  for (const c of s1) if (!s2.has(c)) diff.push(c);
  for (const c of s2) if (!s1.has(c)) diff.push(c);
  const res = [...new Set(diff)].sort().join('');
  return res || "-1";
}`
  },

  'dsa-37': {
    python: `class Solution:
    def secFrequent(self, arr: list, N: int) -> str:
        counts = {}
        for w in arr:
            counts[w] = counts.get(w, 0) + 1
        sorted_counts = sorted(counts.items(), key=lambda x: x[1], reverse=True)
        return sorted_counts[1][0] if len(sorted_counts) > 1 else ""`,
    java: `import java.util.*;

public class Solution {
    public static String secFrequent(String[] arr, int N) {
        Map<String, Integer> map = new HashMap<>();
        for (String s : arr) map.put(s, map.getOrDefault(s, 0) + 1);
        int max1 = 0, max2 = 0;
        String res = "";
        for (int val : map.values()) {
            if (val > max1) { max2 = max1; max1 = val; }
            else if (val > max2 && val < max1) max2 = val;
        }
        for (Map.Entry<String, Integer> e : map.entrySet()) {
            if (e.getValue() == max2) return e.getKey();
        }
        return res;
    }
}`,
    cpp: `#include <string>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    string secFrequent(const vector<string>& arr, int N) {
        unordered_map<string, int> map;
        for (const auto& s : arr) map[s]++;
        int max1 = 0, max2 = 0;
        for (auto& p : map) {
            if (p.second > max1) { max2 = max1; max1 = p.second; }
            else if (p.second > max2 && p.second < max1) max2 = p.second;
        }
        for (auto& p : map) if (p.second == max2) return p.first;
        return "";
    }
};`,
    javascript: `function secFrequent(arr, N) {
  const map = {};
  for (const s of arr) map[s] = (map[s] || 0) + 1;
  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return sorted[1] ? sorted[1][0] : "";
}`
  },

  'dsa-38': {
    python: `class Solution:
    def bracketNumbers(self, s: str) -> list:
        stack = []
        ans = []
        counter = 0
        for c in s:
            if c == '(':
                counter += 1
                stack.append(counter)
                ans.append(counter)
            elif c == ')':
                ans.append(stack.pop())
        return ans`,
    java: `import java.util.*;

public class Solution {
    public static ArrayList<Integer> bracketNumbers(String s) {
        ArrayList<Integer> ans = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        int counter = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                counter++;
                stack.push(counter);
                ans.add(counter);
            } else if (c == ')') {
                ans.add(stack.pop());
            }
        }
        return ans;
    }
}`,
    cpp: `#include <string>
#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> bracketNumbers(string s) {
        vector<int> ans;
        stack<int> st;
        int counter = 0;
        for (char c : s) {
            if (c == '(') {
                counter++;
                st.push(counter);
                ans.push_back(counter);
            } else if (c == ')') {
                ans.push_back(st.top());
                st.pop();
            }
        }
        return ans;
    }
};`,
    javascript: `function bracketNumbers(s) {
  const stack = [];
  const ans = [];
  let counter = 0;
  for (const c of s) {
    if (c === '(') {
      counter++;
      stack.push(counter);
      ans.push(counter);
    } else if (c === ')') {
      ans.push(stack.pop());
    }
  }
  return ans;
}`
  },

  'dsa-39': {
    python: `class Solution:
    def printNos(self, n: int) -> None:
        if n <= 0:
            return
        self.printNos(n - 1)
        print(n, end=" ")`,
    java: `import java.util.*;

public class Solution {
    public static void printNos(int n) {
        if (n <= 0) return;
        printNos(n - 1);
        System.out.print(n + " ");
    }
}`,
    cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    void printNos(int n) {
        if (n <= 0) return;
        printNos(n - 1);
        cout << n << " ";
    }
};`,
    javascript: `function printNos(n) {
  const res = [];
  for (let i = 1; i <= n; i++) res.push(i);
  console.log(res.join(" "));
}`
  },

  'dsa-40': {
    python: `class Solution:
    def findMean(self, arr: list, n: int) -> float:
        if n == 1:
            return float(arr[0])
        return (self.findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n`,
    java: `import java.util.*;

public class Solution {
    public static double findMean(int[] arr, int n) {
        if (n == 1) return (double) arr[0];
        return (findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    double findMean(const vector<int>& arr, int n) {
        if (n == 1) return (double)arr[0];
        return (findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
    }
};`,
    javascript: `function findMean(arr, n) {
  if (n === 1) return arr[0];
  return (findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
}`
  },

  'dsa-41': {
    python: `class Solution:
    def recurSum(self, n: int) -> int:
        if n <= 1:
            return n
        return n + self.recurSum(n - 1)`,
    java: `import java.util.*;

public class Solution {
    public static int recurSum(int n) {
        if (n <= 1) return n;
        return n + recurSum(n - 1);
    }
}`,
    cpp: `class Solution {
public:
    int recurSum(int n) {
        if (n <= 1) return n;
        return n + recurSum(n - 1);
    }
};`,
    javascript: `function recurSum(n) {
  if (n <= 1) return n;
  return n + recurSum(n - 1);
}`
  },

  'dsa-42': {
    python: `class Solution:
    def printFibb(self, n: int) -> list:
        if n <= 0:
            return []
        if n == 1:
            return [1]
        fib = [1, 1]
        for i in range(2, n):
            fib.append(fib[i - 1] + fib[i - 2])
        return fib`,
    java: `import java.util.*;

public class Solution {
    public static long[] printFibb(int n) {
        if (n <= 0) return new long[0];
        long[] fib = new long[n];
        fib[0] = 1;
        if (n > 1) fib[1] = 1;
        for (int i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<long long> printFibb(int n) {
        if (n <= 0) return {};
        vector<long long> fib(n);
        fib[0] = 1;
        if (n > 1) fib[1] = 1;
        for (int i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
        return fib;
    }
};`,
    javascript: `function printFibb(n) {
  if (n <= 0) return [];
  const fib = [1];
  if (n > 1) fib.push(1);
  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
  return fib;
}`
  },

  'dsa-43': {
    python: `class Solution:
    def factorial(self, n: int) -> int:
        if n <= 1:
            return 1
        return n * self.factorial(n - 1)`,
    java: `import java.util.*;

public class Solution {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return (long) n * factorial(n - 1);
    }
}`,
    cpp: `class Solution {
public:
    long long factorial(int n) {
        if (n <= 1) return 1;
        return (long long)n * factorial(n - 1);
    }
};`,
    javascript: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`
  },

  'dsa-44': {
    python: `class Solution:
    def isPalindromeRecur(self, s: str, left: int, right: int) -> bool:
        if left >= right:
            return True
        if s[left] != s[right]:
            return False
        return self.isPalindromeRecur(s, left + 1, right - 1)`,
    java: `import java.util.*;

public class Solution {
    public static boolean isPalindromeRecur(String s, int left, int right) {
        if (left >= right) return true;
        if (s.charAt(left) != s.charAt(right)) return false;
        return isPalindromeRecur(s, left + 1, right - 1);
    }
}`,
    cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isPalindromeRecur(const string& s, int left, int right) {
        if (left >= right) return true;
        if (s[left] != s[right]) return false;
        return isPalindromeRecur(s, left + 1, right - 1);
    }
};`,
    javascript: `function isPalindromeRecur(s, left, right) {
  if (left >= right) return true;
  if (s[left] !== s[right]) return false;
  return isPalindromeRecur(s, left + 1, right - 1);
}`
  },

  'dsa-45': {
    python: `class Solution:
    def nCr(self, n: int, r: int) -> int:
        if r == 0 or r == n:
            return 1
        return self.nCr(n - 1, r - 1) + self.nCr(n - 1, r)`,
    java: `import java.util.*;

public class Solution {
    public static int nCr(int n, int r) {
        if (r == 0 || r == n) return 1;
        return nCr(n - 1, r - 1) + nCr(n - 1, r);
    }
}`,
    cpp: `class Solution {
public:
    int nCr(int n, int r) {
        if (r == 0 || r == n) return 1;
        return nCr(n - 1, r - 1) + nCr(n - 1, r);
    }
};`,
    javascript: `function nCr(n, r) {
  if (r === 0 || r === n) return 1;
  return nCr(n - 1, r - 1) + nCr(n - 1, r);
}`
  },

  'dsa-46': {
    python: `class Solution:
    def geometricSum(self, k: int) -> float:
        if k == 0:
            return 1.0
        return 1 / (2 ** k) + self.geometricSum(k - 1)`,
    java: `import java.util.*;

public class Solution {
    public static double geometricSum(int k) {
        if (k == 0) return 1.0;
        return (1.0 / Math.pow(2, k)) + geometricSum(k - 1);
    }
}`,
    cpp: `#include <cmath>
using namespace std;

class Solution {
public:
    double geometricSum(int k) {
        if (k == 0) return 1.0;
        return (1.0 / pow(2, k)) + geometricSum(k - 1);
    }
};`,
    javascript: `function geometricSum(k) {
  if (k === 0) return 1.0;
  return 1 / Math.pow(2, k) + geometricSum(k - 1);
}`
  },

  'dsa-47': {
    python: `class MyStack:
    def __init__(self, size=100):
        self.items = []
        self.capacity = size
    def push(self, x):
        self.items.append(x)
    def pop(self):
        return self.items.pop() if self.items else -1
    def peek(self):
        return self.items[-1] if self.items else -1
    def isEmpty(self):
        return len(self.items) == 0`,
    java: `import java.util.*;

class MyStack {
    private int[] arr;
    private int top;
    public MyStack() { this(100); }
    public MyStack(int size) {
        arr = new int[size];
        top = -1;
    }
    public void push(int x) { arr[++top] = x; }
    public int pop() { return top == -1 ? -1 : arr[top--]; }
    public int peek() { return top == -1 ? -1 : arr[top]; }
    public boolean isEmpty() { return top == -1; }
}`,
    cpp: `#include <vector>
using namespace std;

class MyStack {
    vector<int> arr;
public:
    MyStack(int size = 100) {}
    void push(int x) { arr.push_back(x); }
    int pop() { if(arr.empty()) return -1; int v = arr.back(); arr.pop_back(); return v; }
    int peek() { return arr.empty() ? -1 : arr.back(); }
    bool isEmpty() { return arr.empty(); }
};`,
    javascript: `class MyStack {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.length ? this.items.pop() : -1; }
  peek() { return this.items.length ? this.items[this.items.length - 1] : -1; }
  isEmpty() { return this.items.length === 0; }
}`
  },

  'dsa-48': {
    python: `class MyQueue:
    def __init__(self, size=100):
        self.items = []
    def push(self, x):
        self.items.append(x)
    def pop(self):
        return self.items.pop(0) if self.items else -1
    def enqueue(self, x):
        self.push(x)
    def dequeue(self):
        return self.pop()
    def front(self):
        return self.items[0] if self.items else -1
    def isEmpty(self):
        return len(self.items) == 0`,
    java: `import java.util.*;

class MyQueue {
    private int[] arr;
    private int front, rear, count;
    public MyQueue() { this(100); }
    public MyQueue(int size) {
        arr = new int[size];
        front = 0; rear = 0; count = 0;
    }
    public void push(int x) { arr[rear++] = x; count++; }
    public int pop() { if (count == 0) return -1; count--; return arr[front++]; }
    public void enqueue(int x) { push(x); }
    public int dequeue() { return pop(); }
    public int front() { return count == 0 ? -1 : arr[front]; }
    public boolean isEmpty() { return count == 0; }
}`,
    cpp: `#include <vector>
using namespace std;

class MyQueue {
    vector<int> arr;
public:
    MyQueue(int size = 100) {}
    void push(int x) { arr.push_back(x); }
    int pop() { if(arr.empty()) return -1; int v = arr.front(); arr.erase(arr.begin()); return v; }
    void enqueue(int x) { push(x); }
    int dequeue() { return pop(); }
    int front() { return arr.empty() ? -1 : arr.front(); }
    bool isEmpty() { return arr.empty(); }
};`,
    javascript: `class MyQueue {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.length ? this.items.shift() : -1; }
  enqueue(x) { this.push(x); }
  dequeue() { return this.pop(); }
  front() { return this.items.length ? this.items[0] : -1; }
  isEmpty() { return this.items.length === 0; }
}`
  },

  'dsa-49': {
    python: `class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    def insert(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node
    def to_list(self):
        res = []
        curr = self.head
        while curr:
            res.append(curr.val)
            curr = curr.next
        return res
    def toArray(self):
        return self.to_list()`,
    java: `import java.util.*;

class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

class LinkedList {
    Node head;
    public void insert(int data) {
        Node newNode = new Node(data);
        if (head == null) { head = newNode; return; }
        Node curr = head;
        while (curr.next != null) curr = curr.next;
        curr.next = newNode;
    }
    public List<Integer> toArray() {
        List<Integer> list = new ArrayList<>();
        Node curr = head;
        while (curr != null) { list.add(curr.data); curr = curr.next; }
        return list;
    }
}`,
    cpp: `#include <vector>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

class LinkedList {
public:
    Node* head = nullptr;
    void insert(int data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; return; }
        Node* curr = head;
        while (curr->next) curr = curr->next;
        curr->next = newNode;
    }
    vector<int> toArray() {
        vector<int> res;
        Node* curr = head;
        while (curr) { res.push_back(curr->data); curr = curr->next; }
        return res;
    }
};`,
    javascript: `class Node {
  constructor(data) { this.data = data; this.next = null; }
}

class LinkedList {
  constructor() { this.head = null; }
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) { this.head = newNode; return; }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
  toArray() {
    const res = [];
    let curr = this.head;
    while (curr) { res.push(curr.data); curr = curr.next; }
    return res;
  }
}`
  }
};

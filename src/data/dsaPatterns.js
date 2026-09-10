// src/data/dsaPatterns.js
// Accenture Curated DSA Question Sheet (49 High-Yield Placement Questions)
// Categories: Pattern Questions, Arrays, Numbers, Strings, Recursion, Implementations

export const dsaPatterns = [
  // ==========================================
  // PATTERN QUESTIONS (1 - 4)
  // ==========================================
  {
    id: 'dsa-1',
    qno: 1,
    title: 'Triangle 1',
    name: 'Triangle 1 (Number Triangle)',
    category: 'Pattern Questions',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/triangle-number/1?page=1&category=pattern-printing&sortBy=submissions',
    linkText: 'Pattern 3 | Practice | GeeksforGeeks',
    concept: 'Print a right-angled triangle where the i-th row contains numbers from 1 to i. Outer loop runs from 1 to N (rows), and inner loop prints column numbers from 1 to i.',
    timeComplexity: 'O(N^2)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Accenture pseudocode & coding pattern questions testing nested loop boundaries.',
      'Understanding row vs column iteration index mappings.'
    ],
    template: `// Triangle 1: Numbers 1 to i on row i
public static void printTriangle(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            System.out.print(j + " ");
        }
        System.out.println();
    }
}`,
    example: `For N = 4:
1
1 2
1 2 3
1 2 3 4`
  },
  {
    id: 'dsa-2',
    qno: 2,
    title: 'Triangle 2',
    name: 'Triangle 2 (Equilateral Star Pyramid)',
    category: 'Pattern Questions',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/triangle-pattern-1661492263/1?page=1&category=pattern-printing&sortBy=submissions',
    linkText: 'Pattern 7 | Practice | GeeksforGeeks',
    concept: 'Print an equilateral triangle of stars. For each row i (from 0 to N-1), first print (N - i - 1) leading spaces, then print (2*i + 1) stars, then trailing spaces.',
    timeComplexity: 'O(N^2)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Frequent in Accenture technical coding round for testing space and star formula calculations.',
      'Formula: spaces = N - i - 1, stars = 2*i + 1.'
    ],
    template: `// Triangle 2: Star Pyramid Pattern
public static void printPyramid(int n) {
    for (int i = 0; i < n; i++) {
        // Leading spaces
        for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
        // Stars
        for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
        System.out.println();
    }
}`,
    example: `For N = 3:
  *  
 *** 
*****`
  },
  {
    id: 'dsa-3',
    qno: 3,
    title: 'Triangle 3',
    name: 'Triangle 3 (Inverted Triangle of Stars)',
    category: 'Pattern Questions',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/inverted-triangle-of-stars0110/1?page=1&category=pattern-printing&sortBy=submissions',
    linkText: 'Inverted triangle of stars | Practice | GeeksforGeeks',
    concept: 'Print an inverted pyramid of stars. For row i (from 0 to N-1), print i spaces, followed by (2*N - (2*i + 1)) stars.',
    timeComplexity: 'O(N^2)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Inverted pyramid and hourglass pattern questions in Accenture on-campus assessments.',
      'Reverse index countdown logic.'
    ],
    template: `// Triangle 3: Inverted Star Pyramid
public static void printInvertedPyramid(int n) {
    for (int i = 0; i < n; i++) {
        // Leading spaces
        for (int s = 0; s < i; s++) System.out.print(" ");
        // Stars
        for (int j = 0; j < 2 * n - (2 * i + 1); j++) System.out.print("*");
        System.out.println();
    }
}`,
    example: `For N = 3:
*****
 *** 
  *  `
  },
  {
    id: 'dsa-4',
    qno: 4,
    title: 'Diamond Pattern',
    name: 'Diamond Pattern',
    category: 'Pattern Questions',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/program-print-diamond-shape/',
    linkText: 'Program to print the Diamond Shape - GeeksforGeeks',
    concept: 'Combines the upward star pyramid (Triangle 2) and the downward star pyramid (Triangle 3) to form a symmetrical diamond shape.',
    timeComplexity: 'O(N^2)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Testing composite patterns where upper half and lower half have mirrored symmetry.',
      'Common Accenture programming test pattern.'
    ],
    template: `// Diamond Shape
public static void printDiamond(int n) {
    // Upper half
    for (int i = 0; i < n; i++) {
        for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
        for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
        System.out.println();
    }
    // Lower half
    for (int i = n - 2; i >= 0; i--) {
        for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
        for (int j = 0; j < 2 * i + 1; j++) System.out.print("*");
        System.out.println();
    }
}`,
    example: `For N = 3:
  *  
 *** 
*****
 *** 
  *  `
  },

  // ==========================================
  // ARRAYS (5 - 18)
  // ==========================================
  {
    id: 'dsa-5',
    qno: 5,
    title: 'Find the Largest element in a array',
    name: 'Find Largest Element in an Array',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/',
    linkText: 'Find the Largest element in an array - Tutorial',
    concept: 'Initialize max = arr[0], iterate through the array from index 1 to N-1, and whenever arr[i] > max, update max = arr[i].',
    timeComplexity: 'O(N) - Single pass through the array.',
    spaceComplexity: 'O(1) - Constant auxiliary space.',
    whenToUse: [
      'Fundamental array scanning baseline in all Accenture assessments.',
      'Tracking maximums, minimums, or peak values.'
    ],
    template: `public static int findLargest(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
    example: `Input: arr = [2, 5, 1, 3, 0] -> Output: 5`
  },
  {
    id: 'dsa-6',
    qno: 6,
    title: 'Reverse a given Array - Array',
    name: 'Reverse a Given Array',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/reverse-a-given-array/',
    linkText: 'Reverse a given Array - Tutorial',
    concept: 'Use two pointers: left = 0, right = N - 1. Swap arr[left] and arr[right], then left++, right-- until left >= right.',
    timeComplexity: 'O(N) - N/2 swaps.',
    spaceComplexity: 'O(1) - In-place reversal.',
    whenToUse: [
      'In-place array modifications without extra memory allocation.',
      'Subarray reversal operations.'
    ],
    template: `public static void reverseArray(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}`,
    example: `Input: [5, 4, 3, 2, 1] -> Output: [1, 2, 3, 4, 5]`
  },
  {
    id: 'dsa-7',
    qno: 7,
    title: 'Count frequency of each element',
    name: 'Count Frequency of Each Element',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/',
    linkText: 'Count frequency of each element in the array - Tutorial',
    concept: 'Use a Hash Map to record frequencies: for each element x in the array, map.put(x, map.getOrDefault(x, 0) + 1).',
    timeComplexity: 'O(N) average.',
    spaceComplexity: 'O(N) to store distinct elements in HashMap.',
    whenToUse: [
      'Finding majority elements, non-repeating elements, or duplicate counts in Accenture coding questions.'
    ],
    template: `public static Map<Integer, Integer> countFrequency(int[] arr) {
    Map<Integer, Integer> freq = new HashMap<>();
    for (int num : arr) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    return freq;
}`,
    example: `Input: [10, 5, 10, 15, 10, 5] -> Output: 10: 3, 5: 2, 15: 1`
  },
  {
    id: 'dsa-8',
    qno: 8,
    title: 'Average of all the elements in array',
    name: 'Average of All Elements in Array',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/average-of-all-the-elements-in-the-array/',
    linkText: 'Average of all the elements in the array - Tutorial',
    concept: 'Sum all elements in the array (using double or long to avoid integer overflow) and divide by the array length N.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Basic numerical statistics questions in Accenture quantitative and coding rounds.'
    ],
    template: `public static double findAverage(int[] arr) {
    double sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return sum / arr.length;
}`,
    example: `Input: [1, 2, 3, 4, 5] -> Output: 3.0`
  },
  {
    id: 'dsa-9',
    qno: 9,
    title: 'Remove Duplicates in-place',
    name: 'Remove Duplicates from Sorted Array In-Place',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/',
    linkText: 'Remove Duplicates in-place from Sorted Array - Tutorial',
    concept: 'Since array is sorted, keep a slow pointer i = 0. Iterate fast pointer j from 1 to N-1. Whenever arr[j] != arr[i], do i++ and arr[i] = arr[j]. Return i + 1.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1) - Strictly in-place.',
    whenToUse: [
      'Very common in Accenture assessments testing two-pointer in-place modifications.'
    ],
    template: `public static int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}`,
    example: `Input: [1, 1, 2, 2, 3] -> Output: Length 3, Array: [1, 2, 3]`
  },
  {
    id: 'dsa-10',
    qno: 10,
    title: 'Remove Duplicates From an Unsorted Array',
    name: 'Remove Duplicates from Unsorted Array',
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://takeuforward.org/data-structure/remove-duplicates-from-an-unsorted-array/',
    linkText: 'Remove Duplicates From an Unsorted Array - Tutorial',
    concept: 'Maintain a HashSet to track seen elements while preserving the original relative order. Only add an element if set.add(num) succeeds.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Deduplicating elements while retaining first-seen order.'
    ],
    template: `public static List<Integer> removeDuplicatesUnsorted(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    List<Integer> result = new ArrayList<>();
    for (int num : arr) {
        if (seen.add(num)) {
            result.add(num);
        }
    }
    return result;
}`,
    example: `Input: [2, 3, 1, 9, 3, 1, 6] -> Output: [2, 3, 1, 9, 6]`
  },
  {
    id: 'dsa-11',
    qno: 11,
    title: 'Check if array is subset of a array',
    name: 'Check If Array is Subset of Another Array',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/check-if-array-is-subset-of-another-array/',
    linkText: 'Check if array is subset of another array - Tutorial',
    concept: 'Store elements and their counts of parent array arr1 in a HashMap. Iterate through arr2: if any element is not found or count is 0, return false. Decrement count upon match.',
    timeComplexity: 'O(M + N)',
    spaceComplexity: 'O(M)',
    whenToUse: [
      'Sub-collection verification and inventory validation queries.'
    ],
    template: `public static boolean isSubset(int[] arr1, int[] arr2) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int num : arr1) {
        map.put(num, map.getOrDefault(num, 0) + 1);
    }
    for (int num : arr2) {
        if (!map.containsKey(num) || map.get(num) == 0) {
            return false;
        }
        map.put(num, map.get(num) - 1);
    }
    return true;
}`,
    example: `Input: arr1 = [1, 2, 3, 4, 5], arr2 = [1, 3, 5] -> Output: true`
  },
  {
    id: 'dsa-12',
    qno: 12,
    title: 'Move all zeros to end of array',
    name: 'Move All Zeros to End of Array',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/move-zeroes-end-array/',
    linkText: 'Move all zeros to end of array - GeeksforGeeks',
    concept: 'Keep insert index pos = 0. Copy every non-zero number to arr[pos++]. Once all non-zeroes are placed, fill all indices from pos to N-1 with 0.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Frequently repeated in Accenture technical assessment coding tests.'
    ],
    template: `public static void moveZeroes(int[] nums) {
    int pos = 0;
    for (int num : nums) {
        if (num != 0) {
            nums[pos++] = num;
        }
    }
    while (pos < nums.length) {
        nums[pos++] = 0;
    }
}`,
    example: `Input: [0, 1, 0, 3, 12] -> Output: [1, 3, 12, 0, 0]`
  },
  {
    id: 'dsa-13',
    qno: 13,
    title: 'Stock Buy and Sell - Max one Allowed',
    name: 'Stock Buy and Sell (Single Transaction)',
    category: 'Arrays',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/',
    linkText: 'Stock Buy and Sell - Max one Transaction Allowed - GeeksforGeeks',
    concept: 'Track minimum price seen so far (minPrice). At each day, potential profit = price - minPrice. Update maxProfit = Math.max(maxProfit, potential profit).',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Standard dynamic programming / greedy interview question tested across Accenture coding tiers.'
    ],
    template: `public static int maxProfit(int[] prices) {
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
}`,
    example: `Input: [7, 1, 5, 3, 6, 4] -> Output: 5 (Buy at 1, sell at 6)`
  },
  {
    id: 'dsa-14',
    qno: 14,
    title: 'Missing and Repeating in an Array',
    name: 'Find Missing and Repeating Number',
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/',
    linkText: 'Missing and Repeating in an Array - GeeksforGeeks',
    concept: 'Given array of size N containing numbers from 1 to N where one repeats and one is missing. Use math equations (Sum diff = R - M, Sum of squares diff = R^2 - M^2) or count array.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1) with math, O(N) with freq array.',
    whenToUse: [
      'Advanced math and array questions in Accenture high-score band.'
    ],
    template: `public static int[] findTwoElement(int[] arr, int n) {
    int[] count = new int[n + 1];
    int repeating = -1, missing = -1;
    for (int num : arr) count[num]++;
    for (int i = 1; i <= n; i++) {
        if (count[i] == 2) repeating = i;
        else if (count[i] == 0) missing = i;
    }
    return new int[]{repeating, missing};
}`,
    example: `Input: [4, 3, 6, 2, 1, 1], N = 6 -> Output: Repeating: 1, Missing: 5`
  },
  {
    id: 'dsa-15',
    qno: 15,
    title: 'Stock Buy and Sell - Multiple Allowed',
    name: 'Stock Buy and Sell (Multiple Transactions Allowed)',
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/stock-buy-sell/',
    linkText: 'Stock Buy and Sell - Multiple Transaction Allowed - GeeksforGeeks',
    concept: 'Greedy approach: Whenever tomorrow\'s price is higher than today\'s price (prices[i] > prices[i-1]), add (prices[i] - prices[i-1]) to total profit.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Accenture greedy optimization question.'
    ],
    template: `public static int maxProfitMultiple(int[] prices) {
    int maxProfit = 0;
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += (prices[i] - prices[i - 1]);
        }
    }
    return maxProfit;
}`,
    example: `Input: [100, 180, 260, 310, 40, 535, 695] -> Output: 865`
  },
  {
    id: 'dsa-16',
    qno: 16,
    title: 'Maximum Subarray Sum - Kadane Algorithm',
    name: "Maximum Subarray Sum (Kadane's Algorithm)",
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
    linkText: "Maximum Subarray Sum - Kadane's Algorithm - GeeksforGeeks",
    concept: 'Maintain currentSum and maxSum. Add each element to currentSum. If currentSum > maxSum, update maxSum. If currentSum becomes negative, reset currentSum = 0.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Signature Kadane algorithm question tested in Accenture coding assessments.'
    ],
    template: `public static int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = 0;
    for (int num : nums) {
        currentSum += num;
        if (currentSum > maxSum) maxSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}`,
    example: `Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> Output: 6 ([4, -1, 2, 1])`
  },
  {
    id: 'dsa-17',
    qno: 17,
    title: 'Number of subarrays having product less than k',
    name: 'Subarrays Having Product Less Than K',
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/number-subarrays-product-less-k/',
    linkText: 'Number of subarrays having product less than K - GeeksforGeeks',
    concept: 'Use dynamic sliding window: expand right pointer multiplying prod *= nums[right]. While prod >= k, shrink left pointer prod /= nums[left++]. Add (right - left + 1) subarrays.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Sliding window questions with positive products/sums.'
    ],
    template: `public static int numSubarrayProductLessThanK(int[] nums, int k) {
    if (k <= 1) return 0;
    int prod = 1, count = 0, left = 0;
    for (int right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= k && left <= right) {
            prod /= nums[left++];
        }
        count += (right - left + 1);
    }
    return count;
}`,
    example: `Input: nums = [10, 5, 2, 6], k = 100 -> Output: 8`
  },
  {
    id: 'dsa-18',
    qno: 18,
    title: 'Maximum Consecutive Ones After Zeroes',
    name: 'Max Consecutive Ones After Flipping K Zeroes',
    category: 'Arrays',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/find-zeroes-to-be-flipped-so-that-number-of-consecutive-1s-is-maximized/',
    linkText: 'Maximum Consecutive Ones After Flipping Zeroes - GeeksforGeeks',
    concept: 'Sliding window tracking count of zeroes in window [left, right]. If zeroes > k, move left pointer forward and decrement zero count if nums[left++] == 0.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Window constraint optimization tested in Accenture and top product assessments.'
    ],
    template: `public static int longestOnes(int[] nums, int k) {
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
}`,
    example: `Input: nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2 -> Output: 6`
  },

  // ==========================================
  // NUMBERS (19 - 28)
  // ==========================================
  {
    id: 'dsa-19',
    qno: 19,
    title: 'Prime Factor of given number',
    name: 'Print All Prime Factors of Given Number',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/print-all-prime-factors-of-the-given-number/',
    linkText: 'Print all Prime Factors of the given number - Tutorial',
    concept: 'Divide out all 2s first. Then loop odd numbers d = 3 up to sqrt(N). While N % d == 0, print d and N /= d. If N > 2 remains, N itself is prime.',
    timeComplexity: 'O(sqrt(N))',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Number theory and factor analysis questions in Accenture quantitative/coding tests.'
    ],
    template: `public static List<Integer> primeFactors(int n) {
    List<Integer> factors = new ArrayList<>();
    while (n % 2 == 0) {
        factors.add(2);
        n /= 2;
    }
    for (int i = 3; i * i <= n; i += 2) {
        while (n % i == 0) {
            factors.add(i);
            n /= i;
        }
    }
    if (n > 2) factors.add(n);
    return factors;
}`,
    example: `Input: 60 -> Output: [2, 2, 3, 5]`
  },
  {
    id: 'dsa-20',
    qno: 20,
    title: 'Trailing Zeroes factorial',
    name: 'Count Trailing Zeroes in Factorial',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1?page=2&category=Mathematical,Prime%20Number,Numbers&sortBy=submissions',
    linkText: 'Trailing zeroes in factorial | Practice | GeeksforGeeks',
    concept: 'Trailing zeroes are produced by prime factors (2 * 5). Since 2s are abundant, count factors of 5: count = floor(N/5) + floor(N/25) + floor(N/125) + ...',
    timeComplexity: 'O(log5(N))',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Classic Accenture aptitude and coding round question.'
    ],
    template: `public static int trailingZeroes(int n) {
    int count = 0;
    while (n >= 5) {
        count += n / 5;
        n /= 5;
    }
    return count;
}`,
    example: `Input: N = 25 -> Output: 6 (25/5 + 25/25 = 5 + 1)`
  },
  {
    id: 'dsa-21',
    qno: 21,
    title: "Replace 0 with 1's",
    name: "Replace All 0's with 1 in a Given Integer",
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/replace-all-the-0s-with-1-in-a-given-integer/',
    linkText: 'Replace all the 0’s with 1 in a given integer - Tutorial',
    concept: 'Convert the integer to string and replace "0" with "1", or extract digits modulo 10: if rem == 0, replace with 1, and reconstruct the number.',
    timeComplexity: 'O(log10(N))',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Digit transformation and integer reconstruction questions.'
    ],
    template: `public static int replaceZeroWithOne(int n) {
    if (n == 0) return 1;
    int result = 0, place = 1;
    while (n > 0) {
        int rem = n % 10;
        if (rem == 0) rem = 1;
        result += rem * place;
        place *= 10;
        n /= 10;
    }
    return result;
}`,
    example: `Input: 10204 -> Output: 11214`
  },
  {
    id: 'dsa-22',
    qno: 22,
    title: 'Square root of number',
    name: 'Square Root of an Integer (Floor)',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/square-root/1?page=1&category=Mathematical,Prime%20Number,Numbers&sortBy=submissions',
    linkText: 'Square Root | Practice | GeeksforGeeks',
    concept: 'Binary search in range [1, N]. Mid = left + (right - left) / 2. If mid * mid <= N, save ans = mid and search right (left = mid + 1). Else search left.',
    timeComplexity: 'O(log N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Binary search on answer space without using built-in Math.sqrt().'
    ],
    template: `public static long floorSqrt(long n) {
    if (n == 0 || n == 1) return n;
    long left = 1, right = n, ans = 0;
    while (left <= right) {
        long mid = left + (right - left) / 2;
        if (mid <= n / mid) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}`,
    example: `Input: N = 28 -> Output: 5 (since 5*5 = 25 <= 28 < 36)`
  },
  {
    id: 'dsa-23',
    qno: 23,
    title: 'Abundat Number',
    name: 'Check If Number is Abundant Number',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/check-if-the-number-is-an-abundant-number-or-not/',
    linkText: 'Check if the number is an abundant number or not - Tutorial',
    concept: 'An abundant number is a number for which the sum of its proper divisors (excluding the number itself) is greater than the number.',
    timeComplexity: 'O(sqrt(N))',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Special number classification (Abundant, Perfect, Deficient, Harshad) frequently asked in Accenture.'
    ],
    template: `public static boolean isAbundant(int n) {
    int sum = 1; // 1 is always a proper divisor for n > 1
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }
    return sum > n;
}`,
    example: `Input: 12 -> Proper divisors [1, 2, 3, 4, 6], Sum = 16 > 12 -> true`
  },
  {
    id: 'dsa-24',
    qno: 24,
    title: 'Binary to decimal',
    name: 'Convert Binary to Decimal',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/convert-binary-to-decimal/',
    linkText: 'Convert Binary to Decimal - Tutorial',
    concept: 'Iterate from the least significant digit (right to left). Multiply each bit by 2^power and sum them up.',
    timeComplexity: 'O(Length of binary string)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Radix and base conversion questions in Accenture technical round.'
    ],
    template: `public static int binaryToDecimal(String binary) {
    int decimal = 0;
    int base = 1;
    for (int i = binary.length() - 1; i >= 0; i--) {
        if (binary.charAt(i) == '1') {
            decimal += base;
        }
        base *= 2;
    }
    return decimal;
}`,
    example: `Input: "1011" -> Output: 11 (1*8 + 0*4 + 1*2 + 1*1)`
  },
  {
    id: 'dsa-25',
    qno: 25,
    title: 'Decimal to Binary',
    name: 'Convert Decimal to Binary Number',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/maths/convert-decimal-to-binary-number/',
    linkText: 'Convert Decimal to Binary Number - Tutorial',
    concept: 'Continuously divide the number by 2 and collect remainders (n % 2) into a string or list, then reverse the collected bits.',
    timeComplexity: 'O(log2(N))',
    spaceComplexity: 'O(log2(N))',
    whenToUse: [
      'Bitwise and binary conversion foundation.'
    ],
    template: `public static String decimalToBinary(int n) {
    if (n == 0) return "0";
    StringBuilder sb = new StringBuilder();
    while (n > 0) {
        sb.append(n % 2);
        n /= 2;
    }
    return sb.reverse().toString();
}`,
    example: `Input: 18 -> Output: "10010"`
  },
  {
    id: 'dsa-26',
    qno: 26,
    title: 'Binary to Octal',
    name: 'Convert Binary to Octal',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/convert-binary-to-octal/',
    linkText: 'Convert Binary to Octal - Tutorial',
    concept: 'Group binary digits in sets of 3 from right to left (pad with leading zeroes if needed). Convert each 3-bit group to its octal digit (0-7).',
    timeComplexity: 'O(N) where N is binary length.',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Multi-radix conversion questions.'
    ],
    template: `public static String binaryToOctal(String binary) {
    // Pad to multiple of 3
    int pad = (3 - binary.length() % 3) % 3;
    binary = "0".repeat(pad) + binary;
    StringBuilder octal = new StringBuilder();
    for (int i = 0; i < binary.length(); i += 3) {
        String group = binary.substring(i, i + 3);
        int val = (group.charAt(0) - '0') * 4 + (group.charAt(1) - '0') * 2 + (group.charAt(2) - '0');
        octal.append(val);
    }
    return octal.toString();
}`,
    example: `Input: "110010" -> Group (110)(010) -> Output: "62"`
  },
  {
    id: 'dsa-27',
    qno: 27,
    title: 'Octal to Binary',
    name: 'Convert Octal to Binary',
    category: 'Numbers',
    difficulty: 'Easy',
    link: 'https://takeuforward.org/data-structure/convert-octal-to-binary/',
    linkText: 'Convert Octal to Binary - Tutorial',
    concept: 'Convert each octal digit into its corresponding 3-bit binary representation, then concatenate.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Base-8 to Base-2 encoding tests.'
    ],
    template: `public static String octalToBinary(String octal) {
    String[] lookup = {"000", "001", "010", "011", "100", "101", "110", "111"};
    StringBuilder binary = new StringBuilder();
    for (char c : octal.toCharArray()) {
        binary.append(lookup[c - '0']);
    }
    return binary.toString().replaceFirst("^0+(?!$)", ""); // Remove leading zeroes
}`,
    example: `Input: "62" -> Output: "110010"`
  },
  {
    id: 'dsa-28',
    qno: 28,
    title: 'Digit numbers to words',
    name: 'Convert Digits/Numbers to Words',
    category: 'Numbers',
    difficulty: 'Medium',
    link: 'https://takeuforward.org/data-structure/convert-digits-numbers-to-words/',
    linkText: 'Convert digits/numbers to words - Tutorial',
    concept: 'Decompose the number into Thousands, Hundreds, Tens, and Units using lookup arrays for under-20 numbers and multiples of ten.',
    timeComplexity: 'O(1) since numbers fit in 32-bit integer.',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Accenture string formatting and parsing question.'
    ],
    template: `public static String numberToWords(int num) {
    if (num == 0) return "Zero";
    String[] below20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    String[] tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    // Handles 1 to 999
    if (num < 20) return below20[num];
    if (num < 100) return tens[num / 10] + (num % 10 != 0 ? " " + below20[num % 10] : "");
    if (num < 1000) return below20[num / 100] + " Hundred" + (num % 100 != 0 ? " " + numberToWords(num % 100) : "");
    return below20[num / 1000] + " Thousand" + (num % 1000 != 0 ? " " + numberToWords(num % 1000) : "");
}`,
    example: `Input: 1234 -> Output: "One Thousand Two Hundred Thirty Four"`
  },

  // ==========================================
  // STRINGS (29 - 38)
  // ==========================================
  {
    id: 'dsa-29',
    qno: 29,
    title: 'Reverse a String',
    name: 'Reverse a String In-Place',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/reverse-a-string/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Reverse a String | Practice | GeeksforGeeks',
    concept: 'Convert string to character array. Use two pointers (left = 0, right = N - 1) and swap characters until they meet.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1) in C++/char[], O(N) in Java/Python.',
    whenToUse: [
      'Foundational string manipulation question in all assessments.'
    ],
    template: `public static String reverseString(String s) {
    char[] chars = s.toCharArray();
    int left = 0, right = chars.length - 1;
    while (left < right) {
        char temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
    return new String(chars);
}`,
    example: `Input: "Geeks" -> Output: "skeeG"`
  },
  {
    id: 'dsa-30',
    qno: 30,
    title: 'Anagram',
    name: 'Check If Two Strings Are Anagrams',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/anagram-1587115620/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Anagram | Practice | GeeksforGeeks',
    concept: 'If lengths differ, return false. Create frequency array of size 26. Increment count for string a and decrement for string b. If all counts are 0, they are anagrams.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1) for 26 lowercase alphabet counters.',
    whenToUse: [
      'Direct string frequency test in Accenture coding exams.'
    ],
    template: `public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    int[] count = new int[26];
    for (int i = 0; i < s1.length(); i++) {
        count[s1.charAt(i) - 'a']++;
        count[s2.charAt(i) - 'a']--;
    }
    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}`,
    example: `Input: s1 = "listen", s2 = "silent" -> Output: true`
  },
  {
    id: 'dsa-31',
    qno: 31,
    title: 'Palindrome String',
    name: 'Check If String is Palindrome',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/palindrome-string0817/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Palindrome String | Practice | GeeksforGeeks',
    concept: 'Use two pointers from left = 0 and right = length - 1. If characters ever differ, return false. If pointers cross, return true.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Very high frequency in Accenture technical coding tests.'
    ],
    template: `public static boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`,
    example: `Input: "abba" -> Output: true`
  },
  {
    id: 'dsa-32',
    qno: 32,
    title: 'Reverse Words',
    name: 'Reverse Words in a Given String',
    category: 'Strings',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Reverse Words | Practice | GeeksforGeeks',
    concept: 'Split string by dot or spaces, iterate backwards through the words array, and rejoin with single dot or space delimiter.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Delimited string parsing in Accenture coding rounds.'
    ],
    template: `public static String reverseWords(String s) {
    String[] parts = s.split("\\\\.");
    StringBuilder sb = new StringBuilder();
    for (int i = parts.length - 1; i >= 0; i--) {
        sb.append(parts[i]);
        if (i > 0) sb.append(".");
    }
    return sb.toString();
}`,
    example: `Input: "i.like.this.program.very.much" -> Output: "much.very.program.this.like.i"`
  },
  {
    id: 'dsa-33',
    qno: 33,
    title: 'Most Frequent Character',
    name: 'Maximum Occurring Character in String',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Most Frequent Character | Practice | GeeksforGeeks',
    concept: 'Count character frequencies in array of size 26. Track maxFreq and the lexicographically smallest character that achieved that frequency.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    whenToUse: [
      'Frequency counting and tie-breaking logic.'
    ],
    template: `public static char getMaxOccurringChar(String s) {
    int[] count = new int[26];
    for (char c : s.toCharArray()) {
        count[c - 'a']++;
    }
    int maxFreq = -1;
    char ans = 'a';
    for (int i = 0; i < 26; i++) {
        if (count[i] > maxFreq) {
            maxFreq = count[i];
            ans = (char) ('a' + i);
        }
    }
    return ans;
}`,
    example: `Input: "testsample" -> Output: 'e'`
  },
  {
    id: 'dsa-34',
    qno: 34,
    title: 'Longest substring with distinct characters',
    name: 'Longest Substring with Distinct Characters',
    category: 'Strings',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/problems/longest-distinct-characters-in-string5848/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Longest substring with distinct characters | Practice | GeeksforGeeks',
    concept: 'Sliding window with HashMap or index array. When character is repeated, advance left pointer to max(left, lastSeen[c] + 1). Max length = right - left + 1.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(min(N, 26))',
    whenToUse: [
      'One of the most frequently asked LeetCode/GFG Medium questions in technical interviews.'
    ],
    template: `public static int longestSubstrDistinctChars(String s) {
    int[] lastSeen = new int[256];
    Arrays.fill(lastSeen, -1);
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
        char ch = s.charAt(right);
        if (lastSeen[ch] >= left) {
            left = lastSeen[ch] + 1;
        }
        lastSeen[ch] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    example: `Input: "geeksforgeeks" -> Output: 7 ("eksforg")`
  },
  {
    id: 'dsa-35',
    qno: 35,
    title: 'Valid Paranthese',
    name: 'Valid Parentheses',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=string',
    linkText: 'Valid Parentheses - LeetCode',
    concept: 'Use a Stack. Push closing bracket corresponding to every opening bracket. If a closing bracket appears, pop and verify it matches. Return stack.isEmpty() at end.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Stack bracket validation, syntax parsing, and compiler evaluation questions.'
    ],
    template: `public static boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,
    example: `Input: "()[]{}" -> Output: true, Input: "(]" -> Output: false`
  },
  {
    id: 'dsa-36',
    qno: 36,
    title: 'Uncommon characters',
    name: 'Find Uncommon Characters Between Two Strings',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/uncommon-characters4932/1?page=1&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Uncommon characters | Practice | GeeksforGeeks',
    concept: 'Find characters present in string A or string B but not in both (symmetric difference). Use two boolean presence arrays for A and B.',
    timeComplexity: 'O(M + N)',
    spaceComplexity: 'O(1) for fixed alphabet.',
    whenToUse: [
      'Set difference and character filtering operations.'
    ],
    template: `public static String uncommonChars(String A, String B) {
    boolean[] presentA = new boolean[26];
    boolean[] presentB = new boolean[26];
    for (char c : A.toCharArray()) presentA[c - 'a'] = true;
    for (char c : B.toCharArray()) presentB[c - 'a'] = true;
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < 26; i++) {
        if (presentA[i] ^ presentB[i]) {
            sb.append((char) ('a' + i));
        }
    }
    return sb.length() == 0 ? "-1" : sb.toString();
}`,
    example: `Input: A = "geeksforgeeks", B = "geeksquiz" -> Output: "fioqruz"`
  },
  {
    id: 'dsa-37',
    qno: 37,
    title: 'Second most repeated string in a sequence',
    name: 'Second Most Repeated String in Sequence',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1?page=2&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Second most repeated string in a sequence | Practice | GeeksforGeeks',
    concept: 'Count frequencies of each string in HashMap. First pass: find the maximum frequency. Second pass: find the largest frequency strictly less than max.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Ranking and frequency extraction problems.'
    ],
    template: `public static String secFrequent(String[] arr, int N) {
    Map<String, Integer> count = new HashMap<>();
    for (String s : arr) count.put(s, count.getOrDefault(s, 0) + 1);
    int firstMax = 0, secondMax = 0;
    for (int freq : count.values()) {
        if (freq > firstMax) {
            secondMax = firstMax;
            firstMax = freq;
        } else if (freq > secondMax && freq < firstMax) {
            secondMax = freq;
        }
    }
    for (Map.Entry<String, Integer> entry : count.entrySet()) {
        if (entry.getValue() == secondMax) return entry.getKey();
    }
    return "";
}`,
    example: `Input: ["geek", "for", "geek", "for", "geek", "aaa"] -> Output: "for"`
  },
  {
    id: 'dsa-38',
    qno: 38,
    title: 'Print Bracket Number',
    name: 'Print Bracket Number for Expression',
    category: 'Strings',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/problems/print-bracket-number4058/1?page=3&category=Strings&difficulty=Basic,Easy&sortBy=submissions',
    linkText: 'Print Bracket Number | Practice | GeeksforGeeks',
    concept: 'Maintain a bracket counter = 0 and a Stack. When seeing "(", counter++, push counter to stack and record counter. When seeing ")", pop top of stack and record it.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Expression parsing and parenthesis tracking.'
    ],
    template: `public static ArrayList<Integer> bracketNumbers(String s) {
    ArrayList<Integer> ans = new ArrayList<>();
    Stack<Integer> stack = new Stack<>();
    int count = 0;
    for (char c : s.toCharArray()) {
        if (c == '(') {
            count++;
            stack.push(count);
            ans.add(count);
        } else if (c == ')') {
            ans.add(stack.pop());
        }
    }
    return ans;
}`,
    example: `Input: "(aa(bdc))p(q)" -> Output: [1, 2, 2, 1, 3, 3]`
  },

  // ==========================================
  // RECURSION (39 - 46)
  // ==========================================
  {
    id: 'dsa-39',
    qno: 39,
    title: 'Print 1 to n without using loops',
    name: 'Print 1 to N Without Loops (Recursion)',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/',
    linkText: 'Print 1 to n without using loops - GeeksforGeeks',
    concept: 'Base case: if n == 0 return. Recursive call printNos(n - 1) FIRST, and then print n after recursion unwinds (head recursion).',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) recursion stack.',
    whenToUse: [
      'Very standard recursion question in Accenture technical interviews and pseudocode.'
    ],
    template: `public static void printNos(int n) {
    if (n <= 0) return;
    printNos(n - 1);
    System.out.print(n + " ");
}`,
    example: `Input: N = 5 -> Output: 1 2 3 4 5`
  },
  {
    id: 'dsa-40',
    qno: 40,
    title: 'Mean of array using recursion',
    name: 'Mean of Array Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/mean-of-array-using-recursion/?',
    linkText: 'Mean of array using recursion - GeeksforGeeks',
    concept: 'Sum of N elements = arr[N-1] + sum(arr, N-1). Compute sum recursively and divide by N.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) recursion call stack.',
    whenToUse: [
      'Recursive divide and conquer array processing.'
    ],
    template: `public static double findMean(int[] arr, int n) {
    if (n == 1) return arr[0];
    return (findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
}`,
    example: `Input: [1, 2, 3, 4, 5], N = 5 -> Output: 3.0`
  },
  {
    id: 'dsa-41',
    qno: 41,
    title: 'Sum of natural numbers using recursion',
    name: 'Sum of Natural Numbers Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/',
    linkText: 'Sum of natural numbers using recursion - GeeksforGeeks',
    concept: 'Base case: if n <= 1 return n. Recursive relation: sum(n) = n + sum(n - 1).',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Classic recursive mathematical recurrence relation.'
    ],
    template: `public static int recurSum(int n) {
    if (n <= 1) return n;
    return n + recurSum(n - 1);
}`,
    example: `Input: N = 5 -> Output: 15 (5 + 4 + 3 + 2 + 1)`
  },
  {
    id: 'dsa-42',
    qno: 42,
    title: 'Find First n Fibonacci Numbers',
    name: 'Find First N Fibonacci Numbers',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/program-to-print-first-n-fibonacci-numbers/',
    linkText: 'Find First n Fibonacci Numbers - GeeksforGeeks',
    concept: 'Fibonacci numbers where F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2). Can be generated iteratively in O(N) or recursively with memoization.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) for result array.',
    whenToUse: [
      'Accenture favorite for testing recursion, dynamic programming, and loop simulation.'
    ],
    template: `public static long[] printFibb(int n) {
    long[] fib = new long[n];
    fib[0] = 1;
    if (n > 1) fib[1] = 1;
    for (int i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}`,
    example: `Input: N = 5 -> Output: [1, 1, 2, 3, 5]`
  },
  {
    id: 'dsa-43',
    qno: 43,
    title: 'Factorial of a Number',
    name: 'Factorial of a Number (Recursion)',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/program-for-factorial-of-a-number/',
    linkText: 'Factorial of a Number - GeeksforGeeks',
    concept: 'Base case: if n <= 1 return 1. Recursive relation: fact(n) = n * fact(n - 1).',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) recursion stack.',
    whenToUse: [
      'The classic introduction to recursion and call stack tracing.'
    ],
    template: `public static long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
    example: `Input: 5 -> Output: 120 (5 * 4 * 3 * 2 * 1)`
  },
  {
    id: 'dsa-44',
    qno: 44,
    title: 'Recursive function to check if a string is palindrome',
    name: 'Recursive Palindrome Check',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/recursive-function-check-string-palindrome/',
    linkText: 'Recursive function to check if a string is palindrome - GeeksforGeeks',
    concept: 'Base case: if left >= right return true. If s.charAt(left) != s.charAt(right) return false. Recursive step: return isPal(s, left + 1, right - 1).',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) call stack.',
    whenToUse: [
      'Testing recursive two-pointer string verification in Accenture technical rounds.'
    ],
    template: `public static boolean isPalindromeRecur(String s, int left, int right) {
    if (left >= right) return true;
    if (s.charAt(left) != s.charAt(right)) return false;
    return isPalindromeRecur(s, left + 1, right - 1);
}`,
    example: `Input: "racecar" -> Output: true`
  },
  {
    id: 'dsa-45',
    qno: 45,
    title: 'Program to calculate value of nCr using Recursion',
    name: 'Calculate nCr Using Pascal Recurrence (Recursion)',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/program-to-calculate-value-of-ncr-using-recursion/',
    linkText: 'Program to calculate value of nCr using Recursion - GeeksforGeeks',
    concept: 'Use Pascal identity: nCr = (n-1)C(r-1) + (n-1)Cr. Base cases: if r == 0 or r == n return 1. If r > n return 0.',
    timeComplexity: 'O(2^N) naive, O(N*r) with memoization.',
    spaceComplexity: 'O(N) recursion stack.',
    whenToUse: [
      'Combinatorics and Pascal Triangle recurrence in Accenture written rounds.'
    ],
    template: `public static int nCr(int n, int r) {
    if (r == 0 || r == n) return 1;
    if (r > n) return 0;
    return nCr(n - 1, r - 1) + nCr(n - 1, r);
}`,
    example: `Input: n = 5, r = 2 -> Output: 10`
  },
  {
    id: 'dsa-46',
    qno: 46,
    title: 'Find geometric sum of the series using recursion',
    name: 'Geometric Sum of Series Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    link: 'https://www.geeksforgeeks.org/find-geometric-sum-of-the-series-using-recursion/',
    linkText: 'Find geometric sum of the series using recursion - GeeksforGeeks',
    concept: 'Geometric series 1 + 1/2 + 1/4 + 1/8 + ... + 1/(2^k). Base case: if k == 0 return 1. Recursive relation: sum(k) = 1/(2^k) + sum(k - 1).',
    timeComplexity: 'O(K)',
    spaceComplexity: 'O(K)',
    whenToUse: [
      'Mathematical floating point recurrence series questions.'
    ],
    template: `public static double geometricSum(int k) {
    if (k == 0) return 1.0;
    return 1.0 / Math.pow(2, k) + geometricSum(k - 1);
}`,
    example: `Input: k = 3 -> Output: 1 + 1/2 + 1/4 + 1/8 = 1.875`
  },

  // ==========================================
  // IMPLEMENTATIONS (47 - 49)
  // ==========================================
  {
    id: 'dsa-47',
    qno: 47,
    title: 'Stack',
    name: 'Stack Data Structure Implementation (Array-Based)',
    category: 'Implementations',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/',
    linkText: 'What is Stack Data Structure? A Complete Tutorial - GeeksforGeeks',
    concept: 'LIFO (Last-In, First-Out) structure. Implement push(), pop(), peek(), and isEmpty() with a fixed array and top pointer index.',
    timeComplexity: 'All operations O(1).',
    spaceComplexity: 'O(N) for array storage.',
    whenToUse: [
      'Core DSA implementation round question in Accenture technical interviews.'
    ],
    template: `class MyStack {
    private int[] arr;
    private int top;
    private int capacity;

    public MyStack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int x) {
        if (top == capacity - 1) throw new RuntimeException("Stack Overflow");
        arr[++top] = x;
    }

    public int pop() {
        if (top == -1) throw new RuntimeException("Stack Underflow");
        return arr[top--];
    }

    public int peek() {
        if (top == -1) throw new RuntimeException("Stack Empty");
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}`,
    example: `Push 10, Push 20 -> Peek: 20 -> Pop: 20 -> Peek: 10`
  },
  {
    id: 'dsa-48',
    qno: 48,
    title: 'Queue',
    name: 'Queue Data Structure Implementation (Circular Array)',
    category: 'Implementations',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/introduction-and-array-implementation-of-queue/',
    linkText: 'Introduction and Array Implementation of Queue - GeeksforGeeks',
    concept: 'FIFO (First-In, First-Out) structure. Maintain front and rear pointers using modulo arithmetic ((rear + 1) % capacity) for optimal O(1) circular buffer enqueue/dequeue.',
    timeComplexity: 'All operations O(1).',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Testing buffer management, producer-consumer models, and BFS queues.'
    ],
    template: `class MyQueue {
    private int[] arr;
    private int front, rear, size, capacity;

    public MyQueue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    public void enqueue(int item) {
        if (size == capacity) throw new RuntimeException("Queue Full");
        rear = (rear + 1) % capacity;
        arr[rear] = item;
        size++;
    }

    public int dequeue() {
        if (size == 0) throw new RuntimeException("Queue Empty");
        int item = arr[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }

    public int front() {
        return size == 0 ? -1 : arr[front];
    }
}`,
    example: `Enqueue 5, Enqueue 15 -> Front: 5 -> Dequeue: 5 -> Front: 15`
  },
  {
    id: 'dsa-49',
    qno: 49,
    title: 'LinkedList',
    name: 'Singly Linked List Implementation',
    category: 'Implementations',
    difficulty: 'Medium',
    link: 'https://www.geeksforgeeks.org/singly-linked-list-tutorial/',
    linkText: 'Singly Linked List Tutorial - GeeksforGeeks',
    concept: 'Linear dynamic data structure consisting of Nodes, where each node stores data and a pointer/reference to next node. Implement insertAtHead, insertAtTail, delete, and traverse.',
    timeComplexity: 'Insert head O(1), Search/Delete O(N), Traverse O(N).',
    spaceComplexity: 'O(N)',
    whenToUse: [
      'Very high frequency in Accenture technical interviews for checking pointer manipulation and OOP design.'
    ],
    template: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; this.next = null; }
}

class SinglyLinkedList {
    Node head;

    public void insertAtHead(int val) {
        Node newNode = new Node(val);
        newNode.next = head;
        head = newNode;
    }

    public void insertAtTail(int val) {
        Node newNode = new Node(val);
        if (head == null) { head = newNode; return; }
        Node temp = head;
        while (temp.next != null) temp = temp.next;
        temp.next = newNode;
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }
}`,
    example: `insertAtTail(10), insertAtTail(20) -> 10 -> 20 -> null`
  }
];

export const DSA_CATEGORIES = [
  'All',
  'Pattern Questions',
  'Arrays',
  'Numbers',
  'Strings',
  'Recursion',
  'Implementations'
];

// src/data/cheatSheets.js
// High-yield quick-reference cheat sheets for last-minute Accenture technical revision

export const cheatSheets = [
  {
    id: 'java-dsa-complete',
    title: 'Java DSA Complete Cheat Sheet (C++ → Java Guide)',
    category: 'Java & DSA',
    description: 'Comprehensive 18-page function-focused revision sheet: Arrays, String, ArrayList, HashSet, HashMap, Custom Sorting, Stack, Queue, Recursion, C++ → Java Quick Map, Decision Table, and 15 Core Patterns.',
    sections: [
      {
        heading: '1. Arrays — Core Syntax & java.util.Arrays',
        code: `// 1. Create & Initialize
int[] arr = new int[5];                 // Creates: [0, 0, 0, 0, 0]
int[] arr = {10, 20, 30};

// 2. Access & Update
int val = arr[1];                       // 20
arr[1] = 100;                           // Now: [10, 100, 30]

// 3. Length (Field, NOT a method!)
int len = arr.length;                   // Note: arr.length (field) | NOT arr.length()

// 4. Arrays Utility Functions (import java.util.Arrays;)
Arrays.sort(arr);                       // Sort ascending O(N log N)
Arrays.toString(arr);                   // Convert to printable String "[10, 100, 30]"
Arrays.fill(arr, 7);                    // Fill entire array with 7
Arrays.fill(arr, 1, 4, 9);              // Fill range [1, 4) with 9 (index 4 exclusive)
Arrays.copyOf(arr, 5);                  // Copy / resize array
Arrays.copyOfRange(arr, 1, 4);          // Copy subarray [1, 4)
Arrays.equals(a, b);                    // Content equality (Don't use a == b!)
Arrays.binarySearch(arr, 30);           // O(log N) search (Must be sorted first!)`
      },
      {
        heading: '2. String — Functions & Conversions',
        code: `// String is immutable (java.lang.String - no import required)
String s = "Hello World";

s.length();                             // Character count: 11
s.charAt(1);                            // 'e'
s.equals(other);                        // Value comparison (Never use == for Strings!)
s.equalsIgnoreCase(other);              // Case-insensitive comparison
s.compareTo(other);                     // Lexicographical compare (< 0, == 0, > 0)
s.contains("World");                    // Checks substring: true
s.indexOf('o');                         // First occurrence index (or -1 if not found)
s.lastIndexOf('o');                     // Last occurrence index
s.substring(5);                         // " World" (from index 5 to end)
s.substring(0, 5);                      // "Hello" (end index 5 is exclusive)
s.toUpperCase(); / s.toLowerCase();     // "HELLO WORLD" / "hello world"
s.trim();                               // Strips leading and trailing whitespace
s.replace('l', 'x');                    // Replaces character: "Hexxo Worxd"
s.replaceAll("[0-9]", "");              // Regex replacement
s.startsWith("Hello");                  // true
s.endsWith("World");                    // true
s.isEmpty();                            // true if s.length() == 0
s.isBlank();                            // true if empty or only whitespace
s.toCharArray();                        // Converts to char[] array
s.split(",");                           // Splits into String[] array

// Conversions
int num = Integer.parseInt("123");      // String -> int
String str = String.valueOf(123);       // int -> String`
      },
      {
        heading: '3. ArrayList — Dynamic Array (C++ vector Equivalent)',
        code: `// C++ vector<int> -> Java ArrayList<Integer>
ArrayList<Integer> list = new ArrayList<>();

list.add(10);                           // Add element to end: [10]
list.add(1, 50);                        // Insert at index 1: [10, 50]
list.get(0);                            // Access element: 10
list.set(0, 100);                       // Update index 0 to 100
list.remove(1);                         // Remove by index
list.remove(Integer.valueOf(20));       // Remove by value (boxed Integer)
list.size();                            // Element count
list.contains(20);                      // true/false existence check
list.indexOf(20);                       // First index or -1
list.lastIndexOf(20);                   // Last index
list.isEmpty();                         // Check if empty
list.clear();                           // Clear all elements
list.addAll(otherList);                 // Append another collection

// Sorting & Operations (java.util.Collections)
Collections.sort(list);                 // Ascending sort
Collections.sort(list, Collections.reverseOrder()); // Descending sort
Collections.reverse(list);              // In-place reverse
Collections.max(list);                  // Maximum element
Collections.min(list);                  // Minimum element
Collections.frequency(list, 2);         // Count occurrences of 2`
      },
      {
        heading: '4. HashSet — Unique Elements (C++ unordered_set Equivalent)',
        code: `// C++ unordered_set<int> -> Java HashSet<Integer>
HashSet<Integer> set = new HashSet<>();

set.add(10);                            // Adds 10 (duplicates automatically ignored)
set.contains(10);                       // O(1) average existence check: true
set.remove(10);                         // Remove element
set.size();                             // Count of unique items
set.isEmpty();                          // true if empty
set.clear();                            // Empty the set

// Set Operations
set1.addAll(set2);                      // Union: set1 = set1 ∪ set2
set1.retainAll(set2);                   // Intersection: keep only common elements
set1.removeAll(set2);                   // Difference / Subtraction: set1 - set2`
      },
      {
        heading: '5. ⭐⭐⭐ HashMap — Key-Value Store (C++ unordered_map Equivalent)',
        code: `// C++ unordered_map<K, V> -> Java HashMap<K, V>
HashMap<Integer, Integer> map = new HashMap<>();

map.put(1, 100);                        // Insert/update key 1 -> 100
map.get(1);                             // Returns 100 (or null if key missing)
map.getOrDefault(key, 0);               // ⭐ Safe retrieval: returns 0 if key not found

// ⭐⭐⭐ Frequency Counting Pattern (Memorize this!):
freq.put(x, freq.getOrDefault(x, 0) + 1);

map.containsKey(10);                    // O(1) key check
map.containsValue(100);                 // O(N) value check
map.remove(key);                        // Remove key
map.remove(key, value);                 // Remove only if both key and value match
map.size();                             // Count of entries
map.isEmpty();                          // true if empty
map.clear();                            // Clear all entries

// Iteration
for (int key : map.keySet()) { ... }    // Iterate keys
for (int val : map.values()) { ... }    // Iterate values
for (Map.Entry<Integer, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " -> " + e.getValue());
}

map.putIfAbsent(1, 100);                // Insert only if key does not exist yet
map.replace(1, 500);                    // Update value for existing key`
      },
      {
        heading: '6. Custom Sorting & Comparators',
        code: `// 1. Primitive Array
Arrays.sort(arr);                       // Ascending

// 2. Descending Object Array (Must use Integer[], NOT int[])
Integer[] arr = {5, 1, 8, 2};
Arrays.sort(arr, Collections.reverseOrder());

// 3. ArrayList Sorting
Collections.sort(list);                 // Ascending
Collections.sort(list, Collections.reverseOrder()); // Descending

// 4. Custom Lambda Comparator
Arrays.sort(arr, (a, b) -> a - b);      // Ascending (can overflow with large ints)
Arrays.sort(arr, (a, b) -> b - a);      // Descending
// Safer alternative (avoids integer overflow):
Arrays.sort(arr, (a, b) -> Integer.compare(a, b));

// 5. Sort 2D Array / Intervals
// By first column:
Arrays.sort(matrix, (a, b) -> Integer.compare(a[0], b[0]));
// By second column:
Arrays.sort(matrix, (a, b) -> Integer.compare(a[1], b[1]));`
      },
      {
        heading: '7. Stack & Queue (Preferred ArrayDeque Implementation)',
        code: `// ================= STACK =================
// Preferred Java implementation: Deque<T> = new ArrayDeque<>()
Deque<Integer> st = new ArrayDeque<>();

st.push(10);                            // Push element to top
st.peek();                              // See top element without removing
st.pop();                               // Remove and return top element
st.isEmpty();                           // Check if stack is empty
st.size();                              // Number of elements
st.clear();                             // Clear all

// Reverse String with Stack:
Deque<Character> stack = new ArrayDeque<>();
for (char c : s.toCharArray()) stack.push(c);
while (!stack.isEmpty()) System.out.print(stack.pop());

// ================= QUEUE =================
// Preferred implementation: Queue<T> = new ArrayDeque<>()
Queue<Integer> q = new ArrayDeque<>();

q.offer(10);                            // Insert at rear
q.peek();                               // Inspect front without removing
q.poll();                               // Remove and return front element
q.isEmpty();                            // Check if queue is empty
q.size();                               // Queue size
q.clear();                              // Clear queue`
      },
      {
        heading: '8. Basic Recursion Patterns',
        code: `// Recursion Structure: Base condition + Smaller recursive problem

// 1. Print 1 to N
static void print1ToN(int n) {
    if (n == 0) return;
    print1ToN(n - 1);
    System.out.println(n);
}

// 2. Print N to 1
static void printNTo1(int n) {
    if (n == 0) return;
    System.out.println(n);
    printNTo1(n - 1);
}

// 3. Factorial
static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 4. Sum 1 to N
static int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

// 5. Fibonacci
static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// 6. Power (x^n)
static int power(int x, int n) {
    if (n == 0) return 1;
    return x * power(x, n - 1);
}

// 7. GCD (Euclidean Algorithm)
static int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}`
      },
      {
        heading: '9. Complete C++ → Java Quick Map',
        table: {
          headers: ['Category', 'C++ Construct', 'Java Equivalent'],
          rows: [
            ['Array Access', 'arr[i]', 'arr[i]'],
            ['Array Size', 'arr.size()', 'arr.length'],
            ['Array Sort', 'sort(arr, arr+n)', 'Arrays.sort(arr)'],
            ['String Type', 'string', 'String'],
            ['String Length', 's.size() / s.length()', 's.length()'],
            ['String Char', 's[i]', 's.charAt(i)'],
            ['String Compare', 's == t', 's.equals(t)'],
            ['Substring', 's.substr(start, len)', 's.substring(start, end)'],
            ['String to Int', 'stoi(s)', 'Integer.parseInt(s)'],
            ['Int to String', 'to_string(x)', 'String.valueOf(x)'],
            ['Dynamic Array', 'vector<int>', 'ArrayList<Integer>'],
            ['Vector Push', 'push_back(x)', 'add(x)'],
            ['Vector Pop', 'pop_back()', 'remove(size() - 1)'],
            ['Vector Access', 'v[i] / v[i] = x', 'get(i) / set(i, x)'],
            ['Hash Set', 'unordered_set<int>', 'HashSet<Integer>'],
            ['Set Insert', 'insert(x)', 'add(x)'],
            ['Set Check', 'count(x)', 'contains(x)'],
            ['Set Erase', 'erase(x)', 'remove(x)'],
            ['Hash Map', 'unordered_map<K, V>', 'HashMap<K, V>'],
            ['Map Put', 'mp[key] = val', 'put(key, val)'],
            ['Map Check', 'mp.count(key)', 'containsKey(key)'],
            ['Map Erase', 'mp.erase(key)', 'remove(key)'],
            ['Stack', 'stack<int>', 'Deque<Integer> / ArrayDeque'],
            ['Stack Push/Top/Pop', 'push(x) / top() / pop()', 'push(x) / peek() / pop()'],
            ['Queue', 'queue<int>', 'Queue<Integer> / ArrayDeque'],
            ['Queue Push/Front/Pop', 'push(x) / front() / pop()', 'offer(x) / peek() / poll()']
          ]
        }
      },
      {
        heading: '10. Final Decision Table — "If the problem says... Think..."',
        table: {
          headers: ['If the problem asks for / has...', 'Think of this Data Structure / Approach...'],
          rows: [
            ['Fixed size collection', 'Array'],
            ['Text / characters', 'String'],
            ['Dynamic indexed collection', 'ArrayList'],
            ['Remove duplicates', 'HashSet'],
            ['Fast O(1) existence check', 'HashSet'],
            ['Key → Value association', 'HashMap'],
            ['Count frequency of elements ⭐', 'HashMap (getOrDefault)'],
            ['Need sorted data', 'Arrays.sort() / Collections.sort()'],
            ['Last inserted element first (LIFO)', 'Stack / ArrayDeque'],
            ['First inserted element first (FIFO)', 'Queue / ArrayDeque'],
            ['Minimum / maximum priority processing', 'PriorityQueue (Min/Max Heap)'],
            ['Solve smaller sub-version of same problem', 'Recursion']
          ]
        }
      },
      {
        heading: '11. The 15 Core Functions & Patterns to Memorize First',
        points: [
          '1. Arrays.sort(arr) — Dual-pivot quicksort for arrays.',
          '2. s.charAt(i) — Character lookup at index i in a string.',
          '3. s.equals(t) — Value equality check for strings (never use ==).',
          '4. s.substring(l, r) — Substring slice with r exclusive.',
          '5. s.toCharArray() — Convert String into workable char[] array.',
          '6. list.add(x) — Append element to dynamic ArrayList.',
          '7. list.get(i) — O(1) random access by index.',
          '8. set.contains(x) — Instant O(1) duplicate/membership check.',
          '9. map.put(k, v) — Store key-value mapping in hash table.',
          '10. map.getOrDefault(k, 0) — Safe frequency lookup avoiding null pointers.',
          '11. map.containsKey(k) — Fast key existence check.',
          '12. map.entrySet() — Iterate over all key-value pairs simultaneously.',
          '13. st.push(x) / st.pop() — LIFO stack operations with ArrayDeque.',
          '14. q.offer(x) / q.poll() — FIFO queue operations with ArrayDeque.',
          '15. recursion → base case + recursive call reduction.'
        ]
      }
    ]
  },
  {
    id: 'java-arrays',
    title: 'Java Arrays Cheat Sheet',
    category: 'Java',
    description: 'Declaration, common methods in java.util.Arrays, copy operations, and multi-dimensional syntax.',
    sections: [
      {
        heading: 'Declaration & Initialization',
        code: `int[] arr = new int[5]; // Default 0
int[] primes = {2, 3, 5, 7, 11};
int[][] matrix = new int[3][3]; // 2D array`
      },
      {
        heading: 'Crucial java.util.Arrays Methods',
        code: `Arrays.sort(arr);                     // Dual-pivot Quicksort O(N log N)
Arrays.sort(arr, 1, 4);               // Subarray sort from index 1 to 3
Arrays.toString(arr);                 // Prints "[2, 3, 5, 7, 11]"
Arrays.deepToString(matrix);          // Prints 2D nested arrays
Arrays.binarySearch(arr, key);        // O(log N) - must be sorted first!
Arrays.fill(arr, -1);                 // Fills all indices with -1
Arrays.equals(arr1, arr2);            // True if lengths and items match
Arrays.copyOf(arr, newLength);        // Resizes or clones array
Arrays.copyOfRange(arr, from, to);    // Slices sub-array [from, to)`
      },
      {
        heading: 'Accenture Assessment Tips',
        points: [
          'Array length is a field: arr.length (NO parentheses, unlike String.length()).',
          'Negative index or index >= arr.length throws ArrayIndexOutOfBoundsException.',
          'Arrays.sort() sorts primitives in ascending order. For descending, use boxed Integer[] with Collections.reverseOrder().'
        ]
      }
    ]
  },
  {
    id: 'java-strings',
    title: 'Java String & StringBuilder Cheat Sheet',
    category: 'Java',
    description: 'Immutability rules, substring manipulation, character inspection, regex splitting, and StringBuilder operations.',
    sections: [
      {
        heading: 'String Methods (Immutable)',
        code: `String s = "Accenture";
s.length();                           // 9
s.charAt(0);                          // 'A'
s.substring(0, 3);                    // "Acc" (end index exclusive)
s.indexOf("cen");                     // 2 (or -1 if not found)
s.contains("cent");                   // true
s.toLowerCase(); / s.toUpperCase();
s.trim();                             // Removes leading/trailing whitespace
s.toCharArray();                      // char[] conversion
s.split(",");                         // Regex split into String[]
s.equals(other);                      // Value check (NEVER use == for strings!)
s.equalsIgnoreCase(other);
String.valueOf(123);                  // "123"`
      },
      {
        heading: 'StringBuilder (Mutable & High Performance)',
        code: `StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");                  // Appends in O(1)
sb.insert(5, ",");                    // Inserts at index
sb.delete(0, 6);                      // Deletes range [0, 6)
sb.reverse();                         // Reverses in-place in O(N)
sb.setCharAt(0, 'h');                 // Replaces char at index
String result = sb.toString();        // Converts back to String`
      },
      {
        heading: 'Accenture Gotchas',
        points: [
          'String concatenation in a loop (str += "a") creates O(N^2) memory churn. Always use StringBuilder in loops.',
          'Always compare string equality using .equals(), not == (which compares reference memory addresses).'
        ]
      }
    ]
  },
  {
    id: 'java-collections',
    title: 'Java Collections Framework Cheat Sheet',
    category: 'Java',
    description: 'ArrayList, HashSet, HashMap, PriorityQueue, LinkedList, and Deque methods and complexities.',
    sections: [
      {
        heading: 'List & Set Collections',
        code: `// ArrayList: Dynamic resizable array O(1) read, O(N) insert/remove
List<Integer> list = new ArrayList<>();
list.add(10); list.get(0); list.set(0, 20); list.remove(0); list.size();

// HashSet: Unordered unique items, O(1) average lookup
Set<String> set = new HashSet<>();
set.add("apple"); set.contains("apple"); set.remove("apple");`
      },
      {
        heading: 'HashMap Operations (O(1) average)',
        code: `Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
map.get("key");                       // Returns value or null
map.getOrDefault("key", 0);           // Safe retrieval with default
map.containsKey("key");               // Returns true/false
map.keySet();                         // Set of keys
map.values();                         // Collection of values
map.entrySet();                       // Set of Map.Entry<K, V> pairs

// Loop through entries:
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}`
      },
      {
        heading: 'Queue & PriorityQueue (Min/Max Heap)',
        code: `// Min Heap (default):
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(10); minHeap.poll(); // Removes smallest

// Max Heap:
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());`
      }
    ]
  },
  {
    id: 'sql-queries',
    title: 'SQL Query & Commands Cheat Sheet',
    category: 'SQL',
    description: 'JOIN types, GROUP BY & HAVING order of execution, Window functions, NULL handling, and pagination.',
    sections: [
      {
        heading: 'Query Execution Order (Crucial for Assessment)',
        code: `1. FROM & JOIN
2. WHERE (Row-level filter)
3. GROUP BY (Aggregation grouping)
4. HAVING (Aggregated group filter)
5. SELECT (Column projection & expressions)
6. DISTINCT
7. ORDER BY
8. LIMIT / OFFSET`
      },
      {
        heading: 'JOIN Visual Cheat Sheet',
        code: `-- INNER JOIN: Returns matching records in BOTH tables
SELECT e.name, d.department_name
FROM Employee e
INNER JOIN Department d ON e.department_id = d.id;

-- LEFT JOIN: Returns ALL left rows + matching right rows (or NULL)
SELECT e.name, d.department_name
FROM Employee e
LEFT JOIN Department d ON e.department_id = d.id;`
      },
      {
        heading: 'Common Accenture SQL Patterns',
        code: `-- Second Highest Salary
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Department Highest Salary
SELECT d.name AS Department, e.name AS Employee, e.salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (e.departmentId, e.salary) IN (
    SELECT departmentId, MAX(salary)
    FROM Employee
    GROUP BY departmentId
);`
      }
    ]
  },
  {
    id: 'dsa-complexity',
    title: 'DSA Time & Space Complexity Cheat Sheet',
    category: 'DSA',
    description: 'Big-O orders of growth, data structure operation costs, and algorithm complexity reference.',
    sections: [
      {
        heading: 'Big-O Growth Ranking',
        code: `O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!)
Constant < Logarithmic < Linear < Linearithmic < Quadratic < Exponential < Factorial`
      },
      {
        heading: 'Data Structure Complexity Reference',
        code: `Data Structure      Access    Search    Insert    Delete    Space
Array / ArrayList   O(1)      O(N)      O(N)*     O(N)      O(N)
Linked List         O(N)      O(N)      O(1)      O(1)      O(N)
Stack / Queue       O(N)      O(N)      O(1)      O(1)      O(N)
Hash Table          N/A       O(1)      O(1)      O(1)      O(N)
Binary Search Tree  O(log N)  O(log N)  O(log N)  O(log N)  O(N)`
      },
      {
        heading: 'Sorting Algorithms',
        code: `Algorithm        Best         Average      Worst        Space      Stable?
Quicksort        O(N log N)   O(N log N)   O(N^2)       O(log N)   No
Mergesort        O(N log N)   O(N log N)   O(N log N)   O(N)       Yes
Heapsort         O(N log N)   O(N log N)   O(N log N)   O(1)       No
Insertion Sort   O(N)         O(N^2)       O(N^2)       O(1)       Yes`
      }
    ]
  },
  {
    id: 'cpp-vs-java',
    title: 'C++ vs Java Quick Comparison',
    category: 'Language',
    description: 'Memory management, pointers, multiple inheritance, string models, and standard library counterparts.',
    sections: [
      {
        heading: 'Key Differences',
        code: `Feature                Java                                  C++
Paradigm               Purely Object-Oriented (mostly)       Multi-paradigm (Procedural + OOP)
Pointers               No explicit pointers (safe refs)      Direct memory pointers & refs
Memory Management      Automatic Garbage Collection          Manual (new / delete) or smart pointers
Platform Independence  Bytecode runs on JVM ("Write Once")   Compiled directly to native machine code
Multiple Inheritance   Classes: NO, Interfaces: YES         Supported for classes (Diamond Problem)
Strings                Immutable java.lang.String            Mutable std::string`
      },
      {
        heading: 'Standard Library Counterparts',
        code: `Java Collection        C++ STL Counterpart
ArrayList<T>           std::vector<T>
LinkedList<T>          std::list<T>
HashMap<K, V>          std::unordered_map<K, V>
HashSet<T>             std::unordered_set<T>
TreeMap<K, V>          std::map<K, V> (Red-Black tree)
PriorityQueue<T>       std::priority_queue<T>`
      }
    ]
  }
];

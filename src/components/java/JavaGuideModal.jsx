// src/components/java/JavaGuideModal.jsx
import React, { useState, useMemo } from 'react';
import {
  X,
  Code2,
  Sparkles,
  ChevronDown,
  Search,
  Copy,
  Check,
  BookOpen,
  Star,
  Zap,
  HelpCircle,
  Lightbulb,
  ExternalLink
} from 'lucide-react';

export default function JavaGuideModal({ isOpen, onClose }) {
  const [openSections, setOpenSections] = useState({ top_essentials: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [examplePopup, setExamplePopup] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    const all = { top_essentials: true };
    allSections.forEach(s => { all[s.key] = true; });
    setOpenSections(all);
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  const handleCopyCode = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // -------------------------------------------------------------
  // Top Essentials Data (Most Commonly Used Functions Row)
  // -------------------------------------------------------------
  const topEssentialsRow = {
    key: 'top_essentials',
    label: '⭐ Most Commonly Used Functions (Top Assessment Essentials)',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.4)',
    badge: 'MUST MEMORIZE',
    note: 'These 20 methods appear in 90%+ of technical placement rounds across Accenture, TCS, Infosys, and Cognizant.',
    rows: [
      [
        'Integer.parseInt()',
        'Integer.parseInt("123");',
        '123 (primitive int)',
        {
          attempt: 'Write a Java method to convert an array of numeric strings into an array of integers and compute their sum.',
          input: 'String[] arr = {"15", "25", "40"};',
          code: `public static int sumStringNumbers(String[] arr) {
    int sum = 0;
    for (String s : arr) {
        sum += Integer.parseInt(s.trim());
    }
    return sum;
}`,
          output: '80',
          note: 'Integer.parseInt() returns a primitive int. Throws NumberFormatException if string contains letters or symbols.'
        }
      ],
      [
        'String.valueOf()',
        'String.valueOf(1234);',
        '"1234"',
        {
          attempt: 'Write a function to count how many digits an integer has by converting it to string.',
          input: 'int n = 987654;',
          code: `public static int countDigits(int n) {
    return String.valueOf(Math.abs(n)).length();
}`,
          output: '6',
          note: 'Works safely on all primitives (int, double, char, boolean) and objects. If object is null, returns "null".'
        }
      ],
      [
        's.charAt(i)',
        '"accenture".charAt(1);',
        "'c'",
        {
          attempt: 'Write a program to count how many vowels exist in a given string.',
          input: 'String str = "Accenture Ready";',
          code: `public static int countVowels(String s) {
    int count = 0;
    String lower = s.toLowerCase();
    for (int i = 0; i < lower.length(); i++) {
        char ch = lower.charAt(i);
        if ("aeiou".indexOf(ch) != -1) count++;
    }
    return count;
}`,
          output: '6',
          note: 'Indexes are 0-based. Accessing index >= length() throws StringIndexOutOfBoundsException.'
        }
      ],
      [
        's.substring(a, b)',
        '"developer".substring(0, 4);',
        '"deve"',
        {
          attempt: 'Write a function that extracts the first 3 characters and last 3 characters of a string and concatenates them.',
          input: 'String s = "competitive";',
          code: `public static String extractEnds(String s) {
    if (s.length() < 6) return s;
    return s.substring(0, 3) + s.substring(s.length() - 3);
}`,
          output: '"comive"',
          note: 'End index is exclusive! substring(0, 4) includes indices 0, 1, 2, and 3.'
        }
      ],
      [
        's.equals()',
        's1.equals(s2);',
        'true or false',
        {
          attempt: 'Check if two strings contain identical characters, avoiding the reference comparison pitfall.',
          input: 'String a = new String("Java"); String b = "Java";',
          code: `System.out.println(a == b);      // false (different heap memory addresses)
System.out.println(a.equals(b));  // true  (compares content characters)`,
          output: 'false\ntrue',
          note: 'CRUCIAL: In Java, == compares memory references. Always use .equals() for content comparison.'
        }
      ],
      [
        's.toCharArray()',
        's.toCharArray();',
        "char[] {'j','a','v','a'}",
        {
          attempt: 'Write a method to reverse a string in-place using two pointers on a character array.',
          input: 'String s = "hello";',
          code: `public static String reverseString(String s) {
    char[] chars = s.toCharArray();
    int left = 0, right = chars.length - 1;
    while (left < right) {
        char temp = chars[left];
        chars[left++] = chars[right];
        chars[right--] = temp;
    }
    return new String(chars);
}`,
          output: '"olleh"',
          note: 'Since Strings are immutable in Java, converting to char[] allows high-performance in-place operations.'
        }
      ],
      [
        'sb.reverse()',
        'new StringBuilder(s).reverse().toString();',
        '"reversed string"',
        {
          attempt: 'Write a 1-liner to check if an input string is a palindrome.',
          input: 'String word = "radar";',
          code: `public static boolean isPalindrome(String s) {
    return s.equals(new StringBuilder(s).reverse().toString());
}`,
          output: 'true',
          note: 'StringBuilder.reverse() mutates the builder in O(N) time without allocating separate string objects per character.'
        }
      ],
      [
        "ch - '0'",
        "'7' - '0';",
        '7 (int)',
        {
          attempt: 'Extract each digit from a numeric string directly into an integer accumulator without calling parseInt.',
          input: 'String digits = "54321";',
          code: `public static int sumDigits(String s) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
        sum += (s.charAt(i) - '0'); // ASCII difference: '7' (55) - '0' (48) = 7
    }
    return sum;
}`,
          output: '15',
          note: "Faster than Character.getNumericValue() and Integer.parseInt(). Only works for ASCII digits '0'-'9'."
        }
      ],
      [
        'Character.isDigit()',
        "Character.isDigit('8');",
        'true',
        {
          attempt: 'Count the number of numeric digits inside an alphanumeric license code.',
          input: 'String code = "TN-09-AB-1234";',
          code: `public static int countDigits(String s) {
    int digits = 0;
    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) digits++;
    }
    return digits;
}`,
          output: '6',
          note: 'Character utility methods operate on primitive char and return boolean.'
        }
      ],
      [
        'Math.max() / min()',
        'Math.max(10, 20);',
        '20',
        {
          attempt: 'Find the maximum value among three input numbers.',
          input: 'int a = 45, b = 82, c = 31;',
          code: `int max = Math.max(a, Math.max(b, c));
System.out.println("Maximum: " + max);`,
          output: 'Maximum: 82',
          note: 'Overloaded for int, long, float, and double. Returns the same type as arguments.'
        }
      ],
      [
        'Math.abs()',
        'Math.abs(-25);',
        '25',
        {
          attempt: 'Compute the Manhattan distance between two points (x1, y1) and (x2, y2).',
          input: 'int x1 = 2, y1 = 3, x2 = 8, y2 = 9;',
          code: `int dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
System.out.println("Distance: " + dist);`,
          output: 'Distance: 12',
          note: 'Beware: Math.abs(Integer.MIN_VALUE) returns Integer.MIN_VALUE due to two’s complement overflow!'
        }
      ],
      [
        'Arrays.sort()',
        'Arrays.sort(arr);',
        'arr sorted ascending',
        {
          attempt: 'Sort an array of test scores in ascending order.',
          input: 'int[] scores = {88, 72, 95, 60, 81};',
          code: `int[] scores = {88, 72, 95, 60, 81};
Arrays.sort(scores);
System.out.println(Arrays.toString(scores));`,
          output: '[60, 72, 81, 88, 95]',
          note: 'Uses Dual-Pivot Quicksort for primitive arrays (O(N log N)). For objects, uses TimSort (stable).'
        }
      ],
      [
        'Arrays.binarySearch()',
        'Arrays.binarySearch(sortedArr, 8);',
        'index (>=0 if found)',
        {
          attempt: 'Find the index of a target value in a sorted array, or detect its absence.',
          input: 'int[] arr = {10, 20, 30, 40, 50}; int target = 30;',
          code: `int idx = Arrays.binarySearch(arr, 30);
System.out.println("Found at index: " + idx);

int absent = Arrays.binarySearch(arr, 25);
System.out.println("Absent insertion index: " + absent); // -(insertion_point) - 1`,
          output: 'Found at index: 2\nAbsent insertion index: -3',
          note: 'CRITICAL: The array MUST be sorted before calling binarySearch(), or the result is undefined.'
        }
      ],
      [
        'Arrays.toString()',
        'Arrays.toString(new int[]{1, 2, 3});',
        '"[1, 2, 3]"',
        {
          attempt: 'Print an array in readable bracket format instead of its memory hashcode.',
          input: 'int[] data = {5, 10, 15};',
          code: `System.out.println(data);                 // prints [I@1b6d3586 (useless)
System.out.println(Arrays.toString(data)); // prints [5, 10, 15] (clean)`,
          output: '[5, 10, 15]',
          note: 'For 2D or nested arrays, use Arrays.deepToString(matrix).'
        }
      ],
      [
        'map.getOrDefault()',
        'map.getOrDefault(key, 0) + 1;',
        'frequency count',
        {
          attempt: 'Count the frequency of each number in an array using HashMap.',
          input: 'int[] nums = {4, 1, 2, 1, 2, 4, 4};',
          code: `Map<Integer, Integer> freq = new HashMap<>();
for (int x : nums) {
    freq.put(x, freq.getOrDefault(x, 0) + 1);
}
System.out.println(freq);`,
          output: '{1=2, 2=2, 4=3}',
          note: 'Saves an explicit containsKey() check and eliminates null pointer risks.'
        }
      ],
      [
        'set.contains()',
        'set.contains(target);',
        'true or false (O(1))',
        {
          attempt: 'Detect if an array contains duplicate elements in O(N) time.',
          input: 'int[] arr = {1, 2, 3, 4, 2};',
          code: `public static boolean hasDuplicates(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    for (int x : arr) {
        if (!seen.add(x)) return true; // seen.add() returns false if already present
    }
    return false;
}`,
          output: 'true',
          note: 'Average time complexity for HashSet.contains() and add() is O(1).'
        }
      ],
      [
        'Collections.sort()',
        'Collections.sort(list);',
        'list sorted ascending',
        {
          attempt: 'Sort an ArrayList of names alphabetically, then reverse it.',
          input: 'List<String> names = Arrays.asList("Charlie", "Alice", "Bob");',
          code: `List<String> list = new ArrayList<>(names);
Collections.sort(list);
System.out.println("Ascending: " + list);
Collections.reverse(list);
System.out.println("Descending: " + list);`,
          output: 'Ascending: [Alice, Bob, Charlie]\nDescending: [Charlie, Bob, Alice]',
          note: 'Works only on object collections. For reverse sort directly: Collections.sort(list, Collections.reverseOrder()).'
        }
      ],
      [
        'Long.parseLong()',
        'Long.parseLong("9876543210");',
        '9876543210L',
        {
          attempt: 'Parse phone numbers or large timestamps that exceed 2,147,483,647 without integer overflow.',
          input: 'String timestamp = "1729000000000";',
          code: `long time = Long.parseLong(timestamp);
System.out.println("Timestamp: " + time);`,
          output: 'Timestamp: 1729000000000',
          note: 'Always use long for phone numbers, national IDs, and timestamps to prevent silent 32-bit overflow.'
        }
      ],
      [
        's.length() vs arr.length',
        's.length() vs arr.length vs list.size()',
        'Method vs Field vs Method',
        {
          attempt: 'Observe the 3 different length access styles across Strings, Arrays, and Collections.',
          input: 'String s = "cat"; int[] a = {1, 2}; List<Integer> list = List.of(5);',
          code: `System.out.println(s.length()); // String has length() method
System.out.println(a.length);   // Array has length field (no parentheses!)
System.out.println(list.size()); // Collections use size() method`,
          output: '3\n2\n1',
          note: 'One of the most common compilation errors in competitive exams!'
        }
      ],
      [
        'ArrayDeque as Stack',
        'deque.push(x); deque.pop();',
        'Fast LIFO Stack',
        {
          attempt: 'Solve the Valid Parentheses problem using ArrayDeque instead of legacy Stack.',
          input: 'String brackets = "{[()]}";',
          code: `public static boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,
          output: 'true',
          note: 'Never use legacy java.util.Stack (synchronized overhead). ArrayDeque is faster and non-blocking.'
        }
      ]
    ]
  };

  // -------------------------------------------------------------
  // All 20 Category Sections
  // -------------------------------------------------------------
  const allSections = [
    {
      key: 'sec1_type_conversion',
      label: '1. Type Conversion and Parsing',
      color: '#38bdf8',
      bg: 'rgba(56, 189, 248, 0.08)',
      border: 'rgba(56, 189, 248, 0.25)',
      note: "Integer.parseInt() returns a primitive int. Integer.valueOf() returns a cached Integer object. For decimal digits, ch - '0' is the fastest.",
      rows: [
        ['String.valueOf(x)', 'String.valueOf(123)', '"123"', { attempt: 'Convert various primitive types to String.', input: 'int a = 100; double b = 3.14;', code: 'String s1 = String.valueOf(a);\nString s2 = String.valueOf(b);\nSystem.out.println(s1 + " and " + s2);', output: '100 and 3.14', note: 'Works for all data types safely.' }],
        ['Integer.parseInt(s)', 'Integer.parseInt("123")', '123', { attempt: 'Parse numeric string into primitive int.', input: 'String s = "456";', code: 'int val = Integer.parseInt(s);\nSystem.out.println(val * 2);', output: '912', note: 'Throws NumberFormatException if invalid.' }],
        ['Long.parseLong(s)', 'Long.parseLong("12345678900")', '12345678900L', { attempt: 'Parse large 64-bit integer values.', input: 'String s = "9999999999";', code: 'long num = Long.parseLong(s);\nSystem.out.println(num + 1);', output: '10000000000', note: 'Essential when numbers exceed 2*10^9.' }],
        ['Double.parseDouble(s)', 'Double.parseDouble("3.14")', '3.14', { attempt: 'Parse floating point decimals.', input: 'String s = "98.6";', code: 'double temp = Double.parseDouble(s);\nSystem.out.println(temp);', output: '98.6', note: 'Handles exponential notations like "1.5e3".' }],
        ['Float.parseFloat(s)', 'Float.parseFloat("2.5")', '2.5f', { attempt: 'Parse single-precision float.', input: 'String s = "12.34";', code: 'float f = Float.parseFloat(s);\nSystem.out.println(f);', output: '12.34', note: 'Returns float primitive.' }],
        ['Integer.valueOf(s)', 'Integer.valueOf("123")', '123 (Integer object)', { attempt: 'Convert string to Integer wrapper.', input: 'String s = "100";', code: 'Integer obj = Integer.valueOf(s);\nSystem.out.println(obj.getClass().getSimpleName());', output: 'Integer', note: 'Uses internal cache for -128..127.' }],
        ['Integer.toString(n)', 'Integer.toString(123)', '"123"', { attempt: 'Convert primitive int to string.', input: 'int x = 789;', code: 'String s = Integer.toString(x);\nSystem.out.println(s.length());', output: '3', note: 'Equivalent to String.valueOf(int).' }],
        ['Long.toString(n)', 'Long.toString(123L)', '"123"', { attempt: 'Convert primitive long to string.', input: 'long l = 5000L;', code: 'System.out.println(Long.toString(l));', output: '5000', note: 'Useful for digit inspection.' }],
        ['Double.toString(d)', 'Double.toString(3.14)', '"3.14"', { attempt: 'Convert primitive double to string.', input: 'double d = 2.718;', code: 'System.out.println(Double.toString(d));', output: '2.718', note: 'Preserves floating format.' }],
        ['Character.getNumericValue(ch)', "Character.getNumericValue('7')", '7', { attempt: 'Convert char digit to integer.', input: "char c = '9';", code: 'int val = Character.getNumericValue(c);\nSystem.out.println(val + 1);', output: '10', note: "Supports Unicode digits; for ASCII, ch - '0' is faster." }],
        ['Integer.parseInt(s, radix)', 'Integer.parseInt("1010", 2)', '10', { attempt: 'Parse binary, octal, or hex string to decimal.', input: 'String bin = "1101";', code: 'int dec = Integer.parseInt(bin, 2);\nSystem.out.println(dec);', output: '13', note: 'Radix can be between 2 and 36.' }],
        ['Integer.toString(n, radix)', 'Integer.toString(10, 2)', '"1010"', { attempt: 'Convert decimal int to base-N string representation.', input: 'int val = 255;', code: 'System.out.println(Integer.toString(val, 16));', output: 'ff', note: 'Base 2 = binary, base 16 = hexadecimal.' }]
      ]
    },
    {
      key: 'sec2_string_methods',
      label: '2. String Methods (Core)',
      color: '#4ade80',
      bg: 'rgba(74, 222, 128, 0.08)',
      border: 'rgba(74, 222, 128, 0.25)',
      note: 'Strings in Java are immutable. Any modification creates a new String. End index of substring(a, b) is exclusive.',
      rows: [
        ['s.length()', 's.length()', 'String length (int)', { attempt: 'Find the total character count.', input: 'String s = "Coding";', code: 'System.out.println(s.length());', output: '6', note: 'Notice the parentheses: length() vs array.length.' }],
        ['s.charAt(i)', 's.charAt(0)', 'First character', { attempt: 'Inspect character at index.', input: 'String s = "Java";', code: 'System.out.println(s.charAt(2));', output: 'v', note: 'Index ranges from 0 to length() - 1.' }],
        ['s.substring(a, b)', 's.substring(0, 3)', 'Indices a to b-1', { attempt: 'Extract a slice of a string.', input: 'String s = "Accenture";', code: 'System.out.println(s.substring(0, 4));', output: 'Acce', note: 'Index b is excluded.' }],
        ['s.substring(a)', 's.substring(2)', 'Index a to end', { attempt: 'Extract suffix from index a.', input: 'String s = "Elephant";', code: 'System.out.println(s.substring(3));', output: 'phant', note: 'Equivalent to substring(a, s.length()).' }],
        ['s.equals(other)', 's.equals("java")', 'true or false', { attempt: 'Compare content of two strings.', input: 'String a = "test", b = "test";', code: 'System.out.println(a.equals(b));', output: 'true', note: 'Case-sensitive content comparison.' }],
        ['s.equalsIgnoreCase(other)', 's.equalsIgnoreCase("JAVA")', 'true or false', { attempt: 'Compare strings case-insensitively.', input: 'String s = "Java";', code: 'System.out.println(s.equalsIgnoreCase("JAVA"));', output: 'true', note: 'Ignores upper/lower case differences.' }],
        ['a.compareTo(b)', 'a.compareTo(b)', '<0, 0, or >0', { attempt: 'Lexicographical dictionary order comparison.', input: 'String a = "apple", b = "banana";', code: 'System.out.println(a.compareTo(b) < 0 ? "a before b" : "a after b");', output: 'a before b', note: 'Returns 0 if equal; negative if a precedes b.' }],
        ['s.contains(seq)', 's.contains("abc")', 'true or false', { attempt: 'Check if substring exists.', input: 'String s = "programming";', code: 'System.out.println(s.contains("gram"));', output: 'true', note: 'Case-sensitive check.' }],
        ['s.indexOf(ch / str)', "s.indexOf('a')", 'Index or -1', { attempt: 'Find first occurrence of char or substring.', input: 'String s = "banana";', code: 'System.out.println(s.indexOf("na"));', output: '2', note: 'Returns -1 if not found.' }],
        ['s.lastIndexOf(ch / str)', "s.lastIndexOf('a')", 'Last index or -1', { attempt: 'Find last occurrence.', input: 'String s = "banana";', code: 'System.out.println(s.lastIndexOf(\'a\'));', output: '5', note: 'Searches backward from end.' }],
        ['s.startsWith(prefix)', 's.startsWith("ab")', 'true or false', { attempt: 'Check prefix match.', input: 'String url = "https://example.com";', code: 'System.out.println(url.startsWith("https"));', output: 'true', note: 'Useful for protocol validation.' }],
        ['s.endsWith(suffix)', 's.endsWith(".txt")', 'true or false', { attempt: 'Check file extension or suffix.', input: 'String file = "data.csv";', code: 'System.out.println(file.endsWith(".csv"));', output: 'true', note: 'Case-sensitive.' }],
        ['s.toCharArray()', 's.toCharArray()', 'char[]', { attempt: 'Convert to mutable char array.', input: 'String s = "DSA";', code: 'char[] arr = s.toCharArray();\nSystem.out.println(arr[1]);', output: 'S', note: 'Allows array sorting and in-place swapping.' }],
        ['s.toLowerCase()', 's.toLowerCase()', 'All lowercase', { attempt: 'Normalize string to lowercase.', input: 'String s = "Hello World";', code: 'System.out.println(s.toLowerCase());', output: 'hello world', note: 'Creates a new string.' }],
        ['s.toUpperCase()', 's.toUpperCase()', 'All uppercase', { attempt: 'Convert to uppercase.', input: 'String s = "accenture";', code: 'System.out.println(s.toUpperCase());', output: 'ACCENTURE', note: 'Standard for uppercase normalization.' }],
        ['s.trim()', 's.trim()', 'Whitespace removed', { attempt: 'Strip leading/trailing ASCII spaces.', input: 'String s = "  admin  ";', code: 'System.out.println("[" + s.trim() + "]");', output: '[admin]', note: 'Removes ASCII <= U+0020.' }],
        ['s.strip()', 's.strip()', 'Unicode stripped', { attempt: 'Strip all Unicode whitespaces (Java 11+).', input: 'String s = "  text  ";', code: 'System.out.println(s.strip());', output: 'text', note: 'Preferred over trim() in modern Java.' }],
        ['s.replace(old, new)', 's.replace("a", "b")', 'Literal replaced', { attempt: 'Replace all literal char/string occurrences.', input: 'String s = "cat-bat-rat";', code: 'System.out.println(s.replace("-", " "));', output: 'cat bat rat', note: 'Replaces all occurrences literally (no regex).' }],
        ['s.replaceAll(regex, rep)', 's.replaceAll("[0-9]", "")', 'Regex matches replaced', { attempt: 'Remove all digits from a string using regex.', input: 'String s = "abc123xyz456";', code: 'System.out.println(s.replaceAll("[0-9]", ""));', output: 'abcxyz', note: 'First argument is a regular expression.' }],
        ['s.split(regex)', 's.split("\\\\s+")', 'String[] tokens', { attempt: 'Split string by one or more whitespace characters.', input: 'String s = "apple  banana   cherry";', code: 'String[] words = s.split("\\\\s+");\nSystem.out.println(Arrays.toString(words));', output: '[apple, banana, cherry]', note: '\\\\s+ matches single or multiple spaces.' }],
        ['s.isEmpty()', 's.isEmpty()', 'true if length is 0', { attempt: 'Check if string is empty.', input: 'String s = "";', code: 'System.out.println(s.isEmpty());', output: 'true', note: '" ".isEmpty() is false.' }],
        ['s.isBlank()', 's.isBlank()', 'true if empty or all spaces', { attempt: 'Check if string contains only whitespace.', input: 'String s = "   ";', code: 'System.out.println(s.isBlank());', output: 'true', note: 'Java 11+ method.' }]
      ]
    },
    {
      key: 'sec3_character_methods',
      label: '3. Character Methods & Classifications',
      color: '#fb923c',
      bg: 'rgba(251, 146, 60, 0.08)',
      border: 'rgba(251, 146, 60, 0.25)',
      note: 'Character methods are static methods on java.lang.Character that classify and convert primitive char values.',
      rows: [
        ['Character.isDigit(ch)', "Character.isDigit('7')", 'true', { attempt: 'Validate if character is a digit.', input: "char c = '9';", code: 'System.out.println(Character.isDigit(c));', output: 'true', note: 'Returns true for 0-9.' }],
        ['Character.isLetter(ch)', "Character.isLetter('A')", 'true', { attempt: 'Check if character is an alphabetical letter.', input: "char c = 'z';", code: 'System.out.println(Character.isLetter(c));', output: 'true', note: 'Supports upper and lowercase.' }],
        ['Character.isLetterOrDigit(ch)', "Character.isLetterOrDigit('5')", 'true', { attempt: 'Filter alphanumeric characters for palindrome checking.', input: "char c = '$';", code: 'System.out.println(Character.isLetterOrDigit(c));', output: 'false', note: 'Crucial for clean string problems.' }],
        ['Character.isUpperCase(ch)', "Character.isUpperCase('A')", 'true', { attempt: 'Check uppercase status.', input: "char c = 'G';", code: 'System.out.println(Character.isUpperCase(c));', output: 'true', note: 'Tests A-Z.' }],
        ['Character.isLowerCase(ch)', "Character.isLowerCase('a')", 'true', { attempt: 'Check lowercase status.', input: "char c = 'q';", code: 'System.out.println(Character.isLowerCase(c));', output: 'true', note: 'Tests a-z.' }],
        ['Character.toUpperCase(ch)', "Character.toUpperCase('a')", "'A'", { attempt: 'Convert char to uppercase.', input: "char c = 'b';", code: 'System.out.println(Character.toUpperCase(c));', output: 'B', note: 'Leaves non-letters unchanged.' }],
        ['Character.toLowerCase(ch)', "Character.toLowerCase('A')", "'a'", { attempt: 'Convert char to lowercase.', input: "char c = 'M';", code: 'System.out.println(Character.toLowerCase(c));', output: 'm', note: 'Leaves digits/symbols unchanged.' }],
        ['Character.isWhitespace(ch)', "Character.isWhitespace(' ')", 'true', { attempt: 'Identify spaces, tabs, and newlines.', input: "char c = '\\t';", code: 'System.out.println(Character.isWhitespace(c));', output: 'true', note: 'Recognizes spaces, tabs, and line breaks.' }],
        ['Character.getNumericValue(ch)', "Character.getNumericValue('9')", '9', { attempt: 'Retrieve integer value of a char.', input: "char c = '8';", code: 'System.out.println(Character.getNumericValue(c));', output: '8', note: 'Returns -1 if not a valid number.' }]
      ]
    },
    {
      key: 'sec4_math_methods',
      label: '4. Mathematical Methods & Arithmetic Precision',
      color: '#c084fc',
      bg: 'rgba(192, 132, 252, 0.08)',
      border: 'rgba(192, 132, 252, 0.25)',
      note: 'Avoid Math.pow() for exact integer calculations to prevent floating point inaccuracies. Use Math.addExact() to prevent silent overflows.',
      rows: [
        ['Math.max(a, b)', 'Math.max(10, 20)', '20', { attempt: 'Find maximum of two values.', input: 'int a = 15, b = 27;', code: 'System.out.println(Math.max(a, b));', output: '27', note: 'Available for int, long, float, double.' }],
        ['Math.min(a, b)', 'Math.min(10, 20)', '10', { attempt: 'Find minimum of two values.', input: 'int a = 15, b = 27;', code: 'System.out.println(Math.min(a, b));', output: '15', note: 'Used often in two-pointer bound checks.' }],
        ['Math.abs(x)', 'Math.abs(-5)', '5', { attempt: 'Compute magnitude of a difference.', input: 'int diff = -42;', code: 'System.out.println(Math.abs(diff));', output: '42', note: 'Always non-negative (except Integer.MIN_VALUE).' }],
        ['Math.sqrt(x)', 'Math.sqrt(25)', '5.0', { attempt: 'Calculate square root.', input: 'double n = 49.0;', code: 'System.out.println(Math.sqrt(n));', output: '7.0', note: 'Returns double. For integer square root: (int) Math.sqrt(n).' }],
        ['Math.pow(a, b)', 'Math.pow(2, 3)', '8.0', { attempt: 'Compute a raised to power b.', input: 'double base = 3, exp = 4;', code: 'System.out.println(Math.pow(base, exp));', output: '81.0', note: 'Returns double; prone to precision errors on huge ints.' }],
        ['Math.ceil(x)', 'Math.ceil(3.2)', '4.0', { attempt: 'Round upward to next integer.', input: 'double d = 4.1;', code: 'System.out.println(Math.ceil(d));', output: '5.0', note: 'Returns double value equal to an integer.' }],
        ['Math.floor(x)', 'Math.floor(3.8)', '3.0', { attempt: 'Round downward to floor integer.', input: 'double d = 9.9;', code: 'System.out.println(Math.floor(d));', output: '9.0', note: 'Rounds towards negative infinity.' }],
        ['Math.round(x)', 'Math.round(3.6)', '4', { attempt: 'Round to nearest integer.', input: 'double d = 3.49;', code: 'System.out.println(Math.round(d));', output: '3', note: 'Returns long for double, int for float.' }],
        ['Math.random()', 'Math.random()', 'double in [0.0, 1.0)', { attempt: 'Generate pseudo-random double.', input: 'none', code: 'int dieRoll = (int)(Math.random() * 6) + 1;\nSystem.out.println(dieRoll >= 1 && dieRoll <= 6);', output: 'true', note: 'Thread-safe random generator.' }],
        ['Math.log(x)', 'Math.log(10)', 'Natural log (ln)', { attempt: 'Compute natural logarithm.', input: 'double e = Math.E;', code: 'System.out.println(Math.log(e));', output: '1.0', note: 'Base-e logarithm.' }],
        ['Math.log10(x)', 'Math.log10(100)', '2.0', { attempt: 'Count number of digits mathematically.', input: 'int n = 12345;', code: 'int digits = (int) Math.log10(n) + 1;\nSystem.out.println(digits);', output: '5', note: 'Fastest digit-counting formula for n > 0.' }],
        ['Math.PI', 'Math.PI', '3.141592653589793', { attempt: 'Calculate circle area: PI * r * r.', input: 'double r = 5.0;', code: 'double area = Math.PI * r * r;\nSystem.out.println(Math.round(area * 100.0) / 100.0);', output: '78.54', note: 'Double constant with 15 decimals precision.' }],
        ['Math.addExact(a, b)', 'Math.addExact(10, 20)', 'Sum (checks overflow)', { attempt: 'Safely add two integers with overflow crash.', input: 'int a = Integer.MAX_VALUE, b = 1;', code: 'try {\n    Math.addExact(a, b);\n} catch (ArithmeticException e) {\n    System.out.println("Overflow caught!");\n}', output: 'Overflow caught!', note: 'Throws ArithmeticException if result overflows.' }],
        ['Math.multiplyExact(a, b)', 'Math.multiplyExact(10, 20)', 'Product (checks overflow)', { attempt: 'Multiply with overflow checking.', input: 'int a = 1000000, b = 3000;', code: 'try {\n    Math.multiplyExact(a, b);\n} catch (ArithmeticException e) {\n    System.out.println("Overflow caught!");\n}', output: 'Overflow caught!', note: 'Prevents silent incorrect negative multiplication results.' }]
      ]
    },
    {
      key: 'sec5_arrays_class',
      label: '5. Arrays & java.util.Arrays Class',
      color: '#facc15',
      bg: 'rgba(250, 204, 21, 0.08)',
      border: 'rgba(250, 204, 21, 0.25)',
      note: 'Arrays are fixed in size. Use Arrays.binarySearch() only on sorted arrays. For 2D matrices, use deepToString().',
      rows: [
        ['arr.length', 'arr.length', 'Array size (field)', { attempt: 'Access array size.', input: 'int[] arr = {1, 2, 3, 4};', code: 'System.out.println(arr.length);', output: '4', note: 'Field property — no parentheses!' }],
        ['Arrays.sort(arr)', 'Arrays.sort(arr)', 'Sort array in-place', { attempt: 'Sort array ascending.', input: 'int[] arr = {5, 2, 8, 1};', code: 'Arrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));', output: '[1, 2, 5, 8]', note: 'Dual-pivot Quicksort: O(N log N).' }],
        ['Arrays.binarySearch(arr, x)', 'Arrays.binarySearch(arr, 5)', 'Index or negative', { attempt: 'Perform binary search in O(log N).', input: 'int[] arr = {1, 3, 5, 7, 9};', code: 'System.out.println(Arrays.binarySearch(arr, 5));', output: '2', note: 'Must be sorted before calling.' }],
        ['Arrays.toString(arr)', 'Arrays.toString(arr)', 'String representation', { attempt: 'Format 1D array to string.', input: 'int[] arr = {10, 20};', code: 'System.out.println(Arrays.toString(arr));', output: '[10, 20]', note: 'Avoids default object hashcode.' }],
        ['Arrays.deepToString(arr)', 'Arrays.deepToString(matrix)', 'Nested 2D array string', { attempt: 'Print 2D grid/matrix cleanly.', input: 'int[][] grid = {{1, 2}, {3, 4}};', code: 'System.out.println(Arrays.deepToString(grid));', output: '[[1, 2], [3, 4]]', note: 'Recursively formats multi-dimensional arrays.' }],
        ['Arrays.equals(a, b)', 'Arrays.equals(a, b)', 'true if elements match', { attempt: 'Check if two arrays contain identical values.', input: 'int[] a = {1, 2}; int[] b = {1, 2};', code: 'System.out.println(Arrays.equals(a, b));', output: 'true', note: 'a == b checks references; Arrays.equals checks values.' }],
        ['Arrays.fill(arr, x)', 'Arrays.fill(arr, 0)', 'Populate array with x', { attempt: 'Initialize array with default value.', input: 'int[] memo = new int[5];', code: 'Arrays.fill(memo, -1);\nSystem.out.println(Arrays.toString(memo));', output: '[-1, -1, -1, -1, -1]', note: 'Common for DP memoization initialization.' }],
        ['Arrays.copyOf(arr, n)', 'Arrays.copyOf(arr, 5)', 'Resize/copy array', { attempt: 'Create a copy or resize array.', input: 'int[] orig = {1, 2, 3};', code: 'int[] copy = Arrays.copyOf(orig, 5);\nSystem.out.println(Arrays.toString(copy));', output: '[1, 2, 3, 0, 0]', note: 'Pads with 0s if new length > old length.' }],
        ['Arrays.copyOfRange(arr, a, b)', 'Arrays.copyOfRange(arr, 1, 4)', 'Subarray copy', { attempt: 'Slice an array from index a to b-1.', input: 'int[] arr = {10, 20, 30, 40, 50};', code: 'int[] slice = Arrays.copyOfRange(arr, 1, 3);\nSystem.out.println(Arrays.toString(slice));', output: '[20, 30]', note: 'Index b is exclusive.' }],
        ['Arrays.stream(arr).sum()', 'Arrays.stream(arr).sum()', 'Sum of int[]', { attempt: 'Sum all elements in an array in 1 line.', input: 'int[] arr = {2, 4, 6, 8};', code: 'System.out.println(Arrays.stream(arr).sum());', output: '20', note: 'Uses IntStream.' }],
        ['Arrays.stream(arr).max()', 'Arrays.stream(arr).max()', 'OptionalInt max', { attempt: 'Find maximum element via Stream.', input: 'int[] arr = {15, 82, 33};', code: 'System.out.println(Arrays.stream(arr).max().getAsInt());', output: '82', note: 'Returns OptionalInt.' }],
        ['Arrays.mismatch(a, b)', 'Arrays.mismatch(a, b)', 'First differing index', { attempt: 'Find index where two arrays first differ.', input: 'int[] a = {1, 2, 3}; int[] b = {1, 2, 4};', code: 'System.out.println(Arrays.mismatch(a, b));', output: '2', note: 'Returns -1 if arrays are equal (Java 9+).' }],
        ['Arrays.parallelSort(arr)', 'Arrays.parallelSort(arr)', 'Multi-core sort', { attempt: 'Sort huge arrays (>100k) using parallel cores.', input: 'int[] big = {9, 5, 2, 7, 1};', code: 'Arrays.parallelSort(big);\nSystem.out.println(Arrays.toString(big));', output: '[1, 2, 5, 7, 9]', note: 'Leverages ForkJoinPool for large datasets.' }]
      ]
    },
    {
      key: 'sec6_stringbuilder',
      label: '6. StringBuilder Methods (Fast Mutation)',
      color: '#f472b6',
      bg: 'rgba(244, 114, 182, 0.08)',
      border: 'rgba(244, 114, 182, 0.25)',
      note: 'Use StringBuilder for repeated string concatenation in loops. String + in loops creates O(N^2) garbage collector pressure.',
      rows: [
        ['sb.append(x)', 'sb.append("abc")', 'Add to end', { attempt: 'Concatenate multiple values efficiently.', input: 'StringBuilder sb = new StringBuilder("ID: ");', code: 'sb.append(101).append(" - Active");\nSystem.out.println(sb.toString());', output: 'ID: 101 - Active', note: 'Chaining supported.' }],
        ['sb.insert(i, x)', 'sb.insert(0, "Hi")', 'Insert at index', { attempt: 'Insert text at specific index.', input: 'StringBuilder sb = new StringBuilder("World");', code: 'sb.insert(0, "Hello ");\nSystem.out.println(sb.toString());', output: 'Hello World', note: 'Shifts subsequent characters right.' }],
        ['sb.delete(a, b)', 'sb.delete(1, 3)', 'Delete range [a, b)', { attempt: 'Remove a slice from builder.', input: 'StringBuilder sb = new StringBuilder("abcdef");', code: 'sb.delete(1, 4);\nSystem.out.println(sb.toString());', output: 'aef', note: 'Index b is exclusive.' }],
        ['sb.deleteCharAt(i)', 'sb.deleteCharAt(0)', 'Delete single char', { attempt: 'Remove character at index.', input: 'StringBuilder sb = new StringBuilder("hello");', code: 'sb.deleteCharAt(1);\nSystem.out.println(sb.toString());', output: 'hllo', note: 'O(N) character shift.' }],
        ['sb.reverse()', 'sb.reverse()', 'Reverse in-place', { attempt: 'Reverse characters in O(N).', input: 'StringBuilder sb = new StringBuilder("abcde");', code: 'sb.reverse();\nSystem.out.println(sb.toString());', output: 'edcba', note: 'Mutates existing buffer.' }],
        ['sb.replace(a, b, s)', 'sb.replace(0, 2, "XY")', 'Replace range', { attempt: 'Replace substring range with new text.', input: 'StringBuilder sb = new StringBuilder("abcdef");', code: 'sb.replace(1, 3, "ZZZ");\nSystem.out.println(sb.toString());', output: 'aZZZdef', note: 'Can replace with different length string.' }],
        ['sb.charAt(i)', 'sb.charAt(0)', 'Read character', { attempt: 'Read character at position.', input: 'StringBuilder sb = new StringBuilder("Java");', code: 'System.out.println(sb.charAt(2));', output: 'v', note: '0-based index.' }],
        ['sb.setCharAt(i, ch)', "sb.setCharAt(0, 'A')", 'Mutate char', { attempt: 'Modify character at index in-place.', input: 'StringBuilder sb = new StringBuilder("ball");', code: 'sb.setCharAt(0, \'c\');\nSystem.out.println(sb.toString());', output: 'call', note: 'O(1) in-place modification.' }],
        ['sb.length()', 'sb.length()', 'Current length', { attempt: 'Check builder character count.', input: 'StringBuilder sb = new StringBuilder("Test");', code: 'System.out.println(sb.length());', output: '4', note: 'Reflects current content length.' }],
        ['sb.toString()', 'sb.toString()', 'Convert to String', { attempt: 'Extract final immutable String.', input: 'StringBuilder sb = new StringBuilder("Done");', code: 'String finalStr = sb.toString();\nSystem.out.println(finalStr);', output: 'Done', note: 'Call once at the end of loop.' }]
      ]
    },
    {
      key: 'sec7_arraylist_collections',
      label: '7. ArrayList & Collections Class',
      color: '#2dd4bf',
      bg: 'rgba(45, 212, 191, 0.08)',
      border: 'rgba(45, 212, 191, 0.25)',
      note: 'Trap: list.remove(2) removes the element at INDEX 2. To remove the integer VALUE 2, use list.remove(Integer.valueOf(2)).',
      rows: [
        ['list.add(x)', 'list.add(30)', 'Append element', { attempt: 'Add item to end of list.', input: 'List<Integer> list = new ArrayList<>();', code: 'list.add(10); list.add(20);\nSystem.out.println(list);', output: '[10, 20]', note: 'Amortized O(1) insertion.' }],
        ['list.add(i, x)', 'list.add(0, 99)', 'Insert at index', { attempt: 'Insert at specific position.', input: 'List<String> list = new ArrayList<>(List.of("B", "C"));', code: 'list.add(0, "A");\nSystem.out.println(list);', output: '[A, B, C]', note: 'O(N) shift operation.' }],
        ['list.get(i)', 'list.get(0)', 'Read by index', { attempt: 'Access element by index.', input: 'List<Integer> list = List.of(10, 20, 30);', code: 'System.out.println(list.get(1));', output: '20', note: 'O(1) random access.' }],
        ['list.set(i, x)', 'list.set(0, 100)', 'Update element', { attempt: 'Replace value at index.', input: 'List<Integer> list = new ArrayList<>(List.of(1, 2));', code: 'list.set(0, 99);\nSystem.out.println(list);', output: '[99, 2]', note: 'Returns previous value.' }],
        ['list.remove(int index)', 'list.remove(0)', 'Remove by index', { attempt: 'Remove item by position.', input: 'List<String> list = new ArrayList<>(List.of("X", "Y"));', code: 'list.remove(0);\nSystem.out.println(list);', output: '[Y]', note: 'Removes element at index 0.' }],
        ['list.remove(Integer.valueOf(x))', 'list.remove(Integer.valueOf(10))', 'Remove by value', { attempt: 'Remove integer value 10 instead of index 10.', input: 'List<Integer> list = new ArrayList<>(List.of(10, 20, 30));', code: 'list.remove(Integer.valueOf(10));\nSystem.out.println(list);', output: '[20, 30]', note: 'CRITICAL TRAP for integer lists!' }],
        ['list.size()', 'list.size()', 'Number of items', { attempt: 'Get size of list.', input: 'List<Integer> list = List.of(1, 2, 3);', code: 'System.out.println(list.size());', output: '3', note: 'Use size() for collections.' }],
        ['list.contains(x)', 'list.contains(20)', 'true or false', { attempt: 'Check item membership.', input: 'List<Integer> list = List.of(5, 10, 15);', code: 'System.out.println(list.contains(10));', output: 'true', note: 'O(N) linear scan in ArrayList.' }],
        ['list.indexOf(x)', 'list.indexOf(20)', 'First index or -1', { attempt: 'Find first index of item.', input: 'List<String> list = List.of("A", "B", "A");', code: 'System.out.println(list.indexOf("B"));', output: '1', note: 'Returns -1 if not found.' }],
        ['list.isEmpty()', 'list.isEmpty()', 'true if size == 0', { attempt: 'Check if list is empty.', input: 'List<Integer> list = new ArrayList<>();', code: 'System.out.println(list.isEmpty());', output: 'true', note: 'Cleaner than list.size() == 0.' }],
        ['list.clear()', 'list.clear()', 'Remove all items', { attempt: 'Reset list to empty.', input: 'List<Integer> list = new ArrayList<>(List.of(1, 2));', code: 'list.clear();\nSystem.out.println(list.size());', output: '0', note: 'Empties the collection.' }],
        ['Collections.sort(list)', 'Collections.sort(list)', 'Sort ascending', { attempt: 'Sort collection.', input: 'List<Integer> list = new ArrayList<>(List.of(3, 1, 2));', code: 'Collections.sort(list);\nSystem.out.println(list);', output: '[1, 2, 3]', note: 'O(N log N) TimSort.' }],
        ['Collections.reverse(list)', 'Collections.reverse(list)', 'Reverse list', { attempt: 'Reverse in-place.', input: 'List<Integer> list = new ArrayList<>(List.of(1, 2, 3));', code: 'Collections.reverse(list);\nSystem.out.println(list);', output: '[3, 2, 1]', note: 'O(N) linear time.' }],
        ['Collections.swap(list, i, j)', 'Collections.swap(list, 0, 1)', 'Swap elements', { attempt: 'Swap two elements by indices.', input: 'List<String> list = new ArrayList<>(List.of("A", "B"));', code: 'Collections.swap(list, 0, 1);\nSystem.out.println(list);', output: '[B, A]', note: 'Safe in-place swap.' }],
        ['Collections.min(list)', 'Collections.min(list)', 'Smallest item', { attempt: 'Find minimum element in collection.', input: 'List<Integer> list = List.of(45, 12, 78);', code: 'System.out.println(Collections.min(list));', output: '12', note: 'O(N) traversal.' }],
        ['Collections.max(list)', 'Collections.max(list)', 'Largest item', { attempt: 'Find maximum element.', input: 'List<Integer> list = List.of(45, 12, 78);', code: 'System.out.println(Collections.max(list));', output: '78', note: 'O(N) traversal.' }],
        ['Collections.rotate(list, d)', 'Collections.rotate(list, 1)', 'Rotate elements', { attempt: 'Rotate list elements by distance.', input: 'List<Integer> list = new ArrayList<>(List.of(1, 2, 3, 4));', code: 'Collections.rotate(list, 1);\nSystem.out.println(list);', output: '[4, 1, 2, 3]', note: 'Supports negative distance for left rotate.' }],
        ['Collections.frequency(list, x)', 'Collections.frequency(list, 2)', 'Occurrence count', { attempt: 'Count occurrences of an item in a list.', input: 'List<Integer> list = List.of(1, 2, 2, 3, 2);', code: 'System.out.println(Collections.frequency(list, 2));', output: '3', note: 'O(N) scan.' }]
      ]
    },
    {
      key: 'sec8_hashmap_hashset',
      label: '8. HashMap, HashSet & Tree Structures',
      color: '#34d399',
      bg: 'rgba(52, 211, 153, 0.08)',
      border: 'rgba(52, 211, 153, 0.25)',
      note: 'HashMap & HashSet provide O(1) average lookup. TreeSet & TreeMap maintain sorted keys in O(log N).',
      rows: [
        ['map.put(k, v)', 'map.put("age", 25)', 'Insert/update key', { attempt: 'Put key-value entry.', input: 'Map<String, Integer> map = new HashMap<>();', code: 'map.put("score", 95);\nSystem.out.println(map.get("score"));', output: '95', note: 'Overwrites existing value for key.' }],
        ['map.get(k)', 'map.get("age")', 'Retrieve value or null', { attempt: 'Get value for key.', input: 'Map<String, String> map = Map.of("role", "Admin");', code: 'System.out.println(map.get("role"));', output: 'Admin', note: 'Returns null if key is missing.' }],
        ['map.getOrDefault(k, d)', 'map.getOrDefault("a", 0) + 1', 'Get or default', { attempt: 'Safely read value with fallback.', input: 'Map<String, Integer> map = new HashMap<>();', code: 'int count = map.getOrDefault("missing", 10);\nSystem.out.println(count);', output: '10', note: 'Prevents NullPointerException.' }],
        ['map.containsKey(k)', 'map.containsKey("a")', 'true or false', { attempt: 'Check key presence.', input: 'Map<String, Integer> map = Map.of("A", 1);', code: 'System.out.println(map.containsKey("A"));', output: 'true', note: 'O(1) average.' }],
        ['map.containsValue(v)', 'map.containsValue(100)', 'true or false', { attempt: 'Check value presence.', input: 'Map<String, Integer> map = Map.of("A", 1);', code: 'System.out.println(map.containsValue(1));', output: 'true', note: 'O(N) scan.' }],
        ['map.putIfAbsent(k, v)', 'map.putIfAbsent("a", 10)', 'Put only if absent', { attempt: 'Set default value if key not set.', input: 'Map<String, Integer> map = new HashMap<>();', code: 'map.putIfAbsent("k", 50);\nmap.putIfAbsent("k", 100);\nSystem.out.println(map.get("k"));', output: '50', note: 'Does not overwrite existing key.' }],
        ['map.remove(k)', 'map.remove("a")', 'Remove key', { attempt: 'Delete mapping.', input: 'Map<String, Integer> map = new HashMap<>(Map.of("a", 1));', code: 'map.remove("a");\nSystem.out.println(map.containsKey("a"));', output: 'false', note: 'Returns removed value.' }],
        ['map.keySet()', 'map.keySet()', 'Set of all keys', { attempt: 'Iterate over all keys.', input: 'Map<String, Integer> map = Map.of("A", 1, "B", 2);', code: 'for (String k : map.keySet()) System.out.print(k + " ");', output: 'A B ', note: 'Key set is backed by map.' }],
        ['map.values()', 'map.values()', 'Collection of values', { attempt: 'Iterate over all values.', input: 'Map<String, Integer> map = Map.of("A", 10, "B", 20);', code: 'for (int v : map.values()) System.out.print(v + " ");', output: '10 20 ', note: 'May contain duplicate values.' }],
        ['map.entrySet()', 'map.entrySet()', 'Set of Map.Entry', { attempt: 'Iterate key-value pairs simultaneously.', input: 'Map<String, Integer> map = Map.of("X", 100);', code: 'for (Map.Entry<String, Integer> e : map.entrySet()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}', output: 'X=100', note: 'Fastest way to iterate full map.' }],
        ['set.add(x)', 'set.add(10)', 'true if newly added', { attempt: 'Add item to set.', input: 'Set<Integer> set = new HashSet<>();', code: 'System.out.println(set.add(5));\nSystem.out.println(set.add(5));', output: 'true\nfalse', note: 'Returns false if already present!' }],
        ['set.contains(x)', 'set.contains(10)', 'true or false', { attempt: 'Check membership in O(1).', input: 'Set<Integer> set = Set.of(1, 2, 3);', code: 'System.out.println(set.contains(2));', output: 'true', note: 'Constant time lookup.' }],
        ['set.size()', 'set.size()', 'Distinct count', { attempt: 'Count unique elements.', input: 'Set<Integer> set = Set.of(10, 20);', code: 'System.out.println(set.size());', output: '2', note: 'Total distinct items.' }]
      ]
    },
    {
      key: 'sec9_input_output',
      label: '9. Input and Output Methods (Scanner & BufferedReader)',
      color: '#60a5fa',
      bg: 'rgba(96, 165, 250, 0.08)',
      border: 'rgba(96, 165, 250, 0.25)',
      note: 'Trap: Calling nextLine() immediately after nextInt() consumes the leftover newline! Use BufferedReader for large inputs (>10^5).',
      rows: [
        ['sc.nextInt()', 'sc.nextInt()', 'Read int token', { attempt: 'Read next integer from console.', input: '123 456', code: 'Scanner sc = new Scanner("123 456");\nint a = sc.nextInt(), b = sc.nextInt();\nSystem.out.println(a + b);', output: '579', note: 'Skips whitespace.' }],
        ['sc.nextLong()', 'sc.nextLong()', 'Read long token', { attempt: 'Read large 64-bit integer.', input: '9876543210', code: 'Scanner sc = new Scanner("9876543210");\nSystem.out.println(sc.nextLong());', output: '9876543210', note: 'Prevents 32-bit overflow.' }],
        ['sc.nextDouble()', 'sc.nextDouble()', 'Read double token', { attempt: 'Read decimal number.', input: '3.1415', code: 'Scanner sc = new Scanner("3.1415");\nSystem.out.println(sc.nextDouble());', output: '3.1415', note: 'Reads floating point.' }],
        ['sc.next()', 'sc.next()', 'Read word/token', { attempt: 'Read single word without spaces.', input: 'hello world', code: 'Scanner sc = new Scanner("hello world");\nSystem.out.println(sc.next());', output: 'hello', note: 'Stops at whitespace.' }],
        ['sc.nextLine()', 'sc.nextLine()', 'Read entire line', { attempt: 'Read whole sentence including spaces.', input: 'Hello World!\\nNext', code: 'Scanner sc = new Scanner("Hello World!\\nNext");\nSystem.out.println(sc.nextLine());', output: 'Hello World!', note: 'Beware after nextInt()!' }],
        ['br.readLine()', 'br.readLine()', 'Fast line read', { attempt: 'Fast input reading with BufferedReader.', input: '100\\n', code: 'BufferedReader br = new BufferedReader(new StringReader("100"));\nint n = Integer.parseInt(br.readLine().trim());\nSystem.out.println(n);', output: '100', note: '10x faster than Scanner.' }],
        ['System.out.println()', 'System.out.println(x)', 'Print + newline', { attempt: 'Standard output with newline.', input: 'val = 42', code: 'System.out.println("Result: " + 42);', output: 'Result: 42', note: 'Standard line output.' }],
        ['System.out.printf()', 'System.out.printf("%.2f", 3.14159)', 'Formatted output', { attempt: 'Format float to 2 decimal places.', input: 'double pi = 3.14159;', code: 'System.out.printf("%.2f", 3.14159);', output: '3.14', note: 'Format specifiers: %d, %s, %.2f.' }]
      ]
    },
    {
      key: 'sec10_integer_long_methods',
      label: '10. Useful Integer & Long Methods',
      color: '#fb7185',
      bg: 'rgba(251, 113, 133, 0.08)',
      border: 'rgba(251, 113, 133, 0.25)',
      note: 'Integer.bitCount() counts the number of 1-bits (set bits) in O(1) hardware instructions.',
      rows: [
        ['Integer.MAX_VALUE', 'Integer.MAX_VALUE', '2147483647 (2^31 - 1)', { attempt: 'Initialize min-tracker variable.', input: 'none', code: 'int minVal = Integer.MAX_VALUE;\nSystem.out.println(minVal);', output: '2147483647', note: 'Upper bound for 32-bit signed int.' }],
        ['Integer.MIN_VALUE', 'Integer.MIN_VALUE', '-2147483648 (-2^31)', { attempt: 'Initialize max-tracker variable.', input: 'none', code: 'int maxVal = Integer.MIN_VALUE;\nSystem.out.println(maxVal);', output: '-2147483648', note: 'Lower bound for 32-bit signed int.' }],
        ['Long.MAX_VALUE', 'Long.MAX_VALUE', '9223372036854775807L', { attempt: '64-bit max constant.', input: 'none', code: 'System.out.println(Long.MAX_VALUE);', output: '9223372036854775807', note: 'Upper bound for 64-bit signed long.' }],
        ['Integer.compare(a, b)', 'Integer.compare(3, 5)', '-1, 0, or 1', { attempt: 'Safely compare two integers.', input: 'int a = 10, b = 20;', code: 'System.out.println(Integer.compare(a, b));', output: '-1', note: 'Avoids subtraction overflow bugs like (a - b).' }],
        ['Integer.bitCount(n)', 'Integer.bitCount(7)', '3 (binary 111)', { attempt: 'Count number of 1-bits in integer.', input: 'int n = 13; // 1101', code: 'System.out.println(Integer.bitCount(n));', output: '3', note: 'Hardware intrinsic O(1) Hamming weight.' }],
        ['Integer.toBinaryString(n)', 'Integer.toBinaryString(10)', '"1010"', { attempt: 'Convert integer to binary string.', input: 'int val = 9;', code: 'System.out.println(Integer.toBinaryString(val));', output: '1001', note: 'Omits leading zeros.' }],
        ['Integer.toHexString(n)', 'Integer.toHexString(255)', '"ff"', { attempt: 'Convert integer to hex.', input: 'int val = 16;', code: 'System.out.println(Integer.toHexString(val));', output: '10', note: 'Hexadecimal string representation.' }],
        ['Integer.highestOneBit(n)', 'Integer.highestOneBit(10)', '8 (binary 1000)', { attempt: 'Find highest power of 2 <= n.', input: 'int n = 14;', code: 'System.out.println(Integer.highestOneBit(n));', output: '8', note: 'Mask with single highest 1-bit.' }],
        ['Integer.lowestOneBit(n)', 'Integer.lowestOneBit(12)', '4 (binary 0100)', { attempt: 'Find lowest power of 2 dividing n.', input: 'int n = 24;', code: 'System.out.println(Integer.lowestOneBit(n));', output: '8', note: 'Equivalent to (n & -n).' }],
        ['Long.bitCount(n)', 'Long.bitCount(15L)', '4', { attempt: 'Count set bits in 64-bit long.', input: 'long l = 15L;', code: 'System.out.println(Long.bitCount(l));', output: '4', note: 'Hamming weight for 64-bit longs.' }]
      ]
    },
    {
      key: 'sec11_sorting_comparators',
      label: '11. Sorting and Custom Comparators',
      color: '#a78bfa',
      bg: 'rgba(167, 139, 250, 0.08)',
      border: 'rgba(167, 139, 250, 0.25)',
      note: 'Collections.reverseOrder() only works on object arrays (Integer[]) and Lists, NOT on primitive arrays (int[]).',
      rows: [
        ['Collections.reverseOrder()', 'Arrays.sort(arr, Collections.reverseOrder())', 'Sort descending', { attempt: 'Sort Integer array descending.', input: 'Integer[] arr = {5, 2, 8, 1};', code: 'Arrays.sort(arr, Collections.reverseOrder());\nSystem.out.println(Arrays.toString(arr));', output: '[8, 5, 2, 1]', note: 'Requires Integer[], not int[].' }],
        ['(a, b) -> Integer.compare(...)', 'Arrays.sort(words, (a, b) -> ...)', 'Sort by custom field', { attempt: 'Sort strings by length.', input: 'String[] words = {"apple", "kiwi", "banana"};', code: 'Arrays.sort(words, (a, b) -> Integer.compare(a.length(), b.length()));\nSystem.out.println(Arrays.toString(words));', output: '[kiwi, apple, banana]', note: 'Lambda comparator syntax.' }],
        ['Comparator.comparing()', 'Comparator.comparing(Person::getAge)', 'Key extractor sort', { attempt: 'Sort objects cleanly by property.', input: 'List<String> list = Arrays.asList("cat", "elephant", "dog");', code: 'list.sort(Comparator.comparingInt(String::length));\nSystem.out.println(list);', output: '[cat, dog, elephant]', note: 'Composable with .thenComparing().' }]
      ]
    },
    {
      key: 'sec12_advanced_string',
      label: '12. Advanced String & Conversion Methods',
      color: '#38bdf8',
      bg: 'rgba(56, 189, 248, 0.08)',
      border: 'rgba(56, 189, 248, 0.25)',
      note: 's.matches() validates the ENTIRE string against regex. String.join() joins collections with delimiters.',
      rows: [
        ['String.join(delim, elements)', 'String.join("-", "a", "b")', '"a-b"', { attempt: 'Join tokens with delimiter.', input: 'String[] parts = {"2026", "10", "16"};', code: 'System.out.println(String.join("-", parts));', output: '2026-10-16', note: 'Works on arrays and iterables.' }],
        ['s.matches(regex)', '"12345".matches("\\\\d+")', 'true or false', { attempt: 'Validate string against full regex pattern.', input: 'String pin = "560001";', code: 'System.out.println(pin.matches("\\\\d{6}"));', output: 'true', note: 'Matches ENTIRE string, not partial.' }],
        ['s.repeat(n)', '"ab".repeat(3)', '"ababab"', { attempt: 'Repeat a string n times (Java 11+).', input: 'String star = "*";', code: 'System.out.println(star.repeat(5));', output: '*****', note: 'O(N * count) time.' }],
        ['s.regionMatches()', 's.regionMatches(0, t, 0, 3)', 'true or false', { attempt: 'Compare sub-regions of two strings.', input: 'String s = "Hello", t = "Help";', code: 'System.out.println(s.regionMatches(0, t, 0, 3));', output: 'true', note: 'Supports ignoreCase parameter.' }],
        ['s.getBytes()', 's.getBytes()', 'byte[]', { attempt: 'Convert string to raw byte array.', input: 'String s = "ABC";', code: 'System.out.println(Arrays.toString(s.getBytes()));', output: '[65, 66, 67]', note: 'ASCII/UTF-8 byte values.' }],
        ['s.intern()', 's.intern()', 'String pool canonical ref', { attempt: 'Place string into JVM string pool.', input: 'String a = new String("hi");', code: 'String b = a.intern();\nSystem.out.println(b == "hi");', output: 'true', note: 'Reference identity matches string pool.' }],
        ['s.codePointAt(i)', 's.codePointAt(0)', 'Unicode code point', { attempt: 'Get 32-bit Unicode code point.', input: 'String s = "A";', code: 'System.out.println(s.codePointAt(0));', output: '65', note: 'Handles surrogate pairs and emojis.' }],
        ['s.compareToIgnoreCase(b)', 'a.compareToIgnoreCase(b)', '<0, 0, or >0', { attempt: 'Case-insensitive lexicographical comparison.', input: 'String a = "alpha", b = "BETA";', code: 'System.out.println(a.compareToIgnoreCase(b) < 0);', output: 'true', note: 'Ignores casing in sorting.' }],
        ['s.contentEquals(cs)', 's.contentEquals(sb)', 'true or false', { attempt: 'Compare String with StringBuilder content.', input: 'String s = "test"; StringBuilder sb = new StringBuilder("test");', code: 'System.out.println(s.contentEquals(sb));', output: 'true', note: 'Directly checks CharSequence content.' }]
      ]
    },
    {
      key: 'sec13_advanced_numbers',
      label: '13. Advanced Number & Bit Reversal Methods',
      color: '#fb923c',
      bg: 'rgba(251, 146, 60, 0.08)',
      border: 'rgba(251, 146, 60, 0.25)',
      note: 'Integer bit shifts and rotations run in single clock cycles on modern hardware.',
      rows: [
        ['Integer.reverse(n)', 'Integer.reverse(1)', 'Reversed 32-bit order', { attempt: 'Reverse all 32 bits of an integer.', input: 'int n = 1; // 000...001', code: 'int rev = Integer.reverse(n);\nSystem.out.println(Integer.toBinaryString(rev));', output: '10000000000000000000000000000000', note: 'Bit-reversal algorithm.' }],
        ['Integer.reverseBytes(n)', 'Integer.reverseBytes(n)', 'Reverse byte order (Endian)', { attempt: 'Convert between Big-Endian and Little-Endian.', input: 'int n = 0x12345678;', code: 'System.out.printf("%x", Integer.reverseBytes(n));', output: '78563412', note: 'Reverses the 4 bytes.' }],
        ['Integer.rotateLeft(n, d)', 'Integer.rotateLeft(1, 2)', 'Circular bit shift left', { attempt: 'Circularly rotate bits left.', input: 'int n = 1;', code: 'System.out.println(Integer.rotateLeft(n, 3));', output: '8', note: 'Bits shifted off left wrap to right.' }],
        ['Integer.rotateRight(n, d)', 'Integer.rotateRight(8, 2)', 'Circular bit shift right', { attempt: 'Circularly rotate bits right.', input: 'int n = 8;', code: 'System.out.println(Integer.rotateRight(n, 2));', output: '2', note: 'Bits shifted off right wrap to left.' }],
        ['Long.parseUnsignedLong(s)', 'Long.parseUnsignedLong("123")', 'Unsigned 64-bit parse', { attempt: 'Parse values up to 18,446,744,073,709,551,615.', input: 'String s = "18446744073709551615";', code: 'long val = Long.parseUnsignedLong(s);\nSystem.out.println(Long.toUnsignedString(val));', output: '18446744073709551615', note: 'Treats 64 bits as unsigned.' }],
        ['Double.isNaN(x)', 'Double.isNaN(Double.NaN)', 'true or false', { attempt: 'Detect Not-a-Number (0.0 / 0.0).', input: 'double d = Math.sqrt(-1);', code: 'System.out.println(Double.isNaN(d));', output: 'true', note: 'NaN == NaN is always false; must use isNaN().' }],
        ['Double.isInfinite(x)', 'Double.isInfinite(1.0 / 0.0)', 'true or false', { attempt: 'Detect infinite floating numbers.', input: 'double inf = 1.0 / 0.0;', code: 'System.out.println(Double.isInfinite(inf));', output: 'true', note: 'Checks positive/negative infinity.' }]
      ]
    },
    {
      key: 'sec14_advanced_collections',
      label: '14. Advanced Arrays & Collections',
      color: '#4ade80',
      bg: 'rgba(74, 222, 128, 0.08)',
      border: 'rgba(74, 222, 128, 0.25)',
      note: 'Arrays.asList() produces a fixed-size list: you can set elements, but CANNOT add or remove.',
      rows: [
        ['Arrays.asList(arr)', 'Arrays.asList(arr)', 'Fixed-size list view', { attempt: 'Wrap array into List interface.', input: 'String[] arr = {"A", "B"};', code: 'List<String> list = Arrays.asList(arr);\nSystem.out.println(list.size());', output: '2', note: 'list.add() throws UnsupportedOperationException.' }],
        ['Arrays.compare(a, b)', 'Arrays.compare(a, b)', 'Lexicographical diff', { attempt: 'Compare two arrays in dictionary order.', input: 'int[] a = {1, 2}; int[] b = {1, 3};', code: 'System.out.println(Arrays.compare(a, b) < 0);', output: 'true', note: 'Java 9+ array comparison.' }],
        ['Arrays.setAll(arr, gen)', 'Arrays.setAll(arr, i -> i * 2)', 'Fill by index generator', { attempt: 'Initialize array using an index formula.', input: 'int[] arr = new int[5];', code: 'Arrays.setAll(arr, i -> i * 10);\nSystem.out.println(Arrays.toString(arr));', output: '[0, 10, 20, 30, 40]', note: 'O(N) functional initializer.' }],
        ['Collections.disjoint(a, b)', 'Collections.disjoint(a, b)', 'true if no common items', { attempt: 'Check if two collections have zero elements in common.', input: 'List<Integer> a = List.of(1, 2); List<Integer> b = List.of(3, 4);', code: 'System.out.println(Collections.disjoint(a, b));', output: 'true', note: 'Returns false if any shared element exists.' }]
      ]
    },
    {
      key: 'sec15_stack_deque_pq',
      label: '15. Stack, Deque & PriorityQueue (Min/Max Heap)',
      color: '#facc15',
      bg: 'rgba(250, 204, 21, 0.08)',
      border: 'rgba(250, 204, 21, 0.25)',
      note: 'Prefer ArrayDeque over Stack and LinkedList. PriorityQueue is a Min-Heap by default; pass Collections.reverseOrder() for Max-Heap.',
      rows: [
        ['deque.push(x)', 'stack.push(10)', 'Push to top (Stack)', { attempt: 'Push onto LIFO stack.', input: 'Deque<Integer> stack = new ArrayDeque<>();', code: 'stack.push(10); stack.push(20);\nSystem.out.println(stack.peek());', output: '20', note: 'ArrayDeque is faster than legacy Stack.' }],
        ['deque.pop()', 'stack.pop()', 'Remove & return top', { attempt: 'Pop from LIFO stack.', input: 'Deque<Integer> stack = new ArrayDeque<>(List.of(10, 20));', code: 'System.out.println(stack.pop());', output: '20', note: 'Throws NoSuchElementException if empty.' }],
        ['deque.peek()', 'stack.peek()', 'Read top without remove', { attempt: 'Inspect top of stack.', input: 'Deque<Integer> stack = new ArrayDeque<>(List.of(5));', code: 'System.out.println(stack.peek());', output: '5', note: 'Returns null if empty.' }],
        ['deque.offerFirst(x)', 'deque.offerFirst(x)', 'Insert at head (Deque)', { attempt: 'Add to front of double-ended queue.', input: 'Deque<Integer> dq = new ArrayDeque<>();', code: 'dq.offerFirst(1); dq.offerFirst(2);\nSystem.out.println(dq);', output: '[2, 1]', note: 'O(1) double-ended queue.' }],
        ['deque.offerLast(x)', 'deque.offerLast(x)', 'Insert at tail (Deque)', { attempt: 'Add to back of queue.', input: 'Deque<Integer> dq = new ArrayDeque<>();', code: 'dq.offerLast(1); dq.offerLast(2);\nSystem.out.println(dq);', output: '[1, 2]', note: 'Standard queue enqueue.' }],
        ['deque.pollFirst()', 'deque.pollFirst()', 'Remove from head', { attempt: 'Dequeue from front.', input: 'Deque<Integer> dq = new ArrayDeque<>(List.of(10, 20));', code: 'System.out.println(dq.pollFirst());', output: '10', note: 'Standard FIFO dequeue.' }],
        ['deque.pollLast()', 'deque.pollLast()', 'Remove from tail', { attempt: 'Remove from back of deque.', input: 'Deque<Integer> dq = new ArrayDeque<>(List.of(10, 20));', code: 'System.out.println(dq.pollLast());', output: '20', note: 'Crucial for Monotonic Deque algorithms.' }],
        ['pq.offer(x)', 'pq.offer(30)', 'Insert into Heap', { attempt: 'Insert into PriorityQueue (O(log N)).', input: 'PriorityQueue<Integer> pq = new PriorityQueue<>();', code: 'pq.offer(30); pq.offer(10); pq.offer(20);\nSystem.out.println(pq.peek());', output: '10', note: 'Min-Heap head is smallest.' }],
        ['pq.poll()', 'pq.poll()', 'Remove root of Heap', { attempt: 'Extract minimum from heap in O(log N).', input: 'PriorityQueue<Integer> pq = new PriorityQueue<>(List.of(30, 10, 20));', code: 'System.out.println(pq.poll());\nSystem.out.println(pq.poll());', output: '10\n20', note: 'Always extracts elements in sorted priority order.' }],
        ['Max-Heap PriorityQueue', 'new PriorityQueue<>(Collections.reverseOrder())', 'Max-Heap structure', { attempt: 'Create a Max-Heap where largest element is at top.', input: 'PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());', code: 'maxHeap.offer(10); maxHeap.offer(50); maxHeap.offer(30);\nSystem.out.println(maxHeap.poll());', output: '50', note: 'Crucial for Top-K smallest/largest problems.' }],
        ['TreeSet.floor(x)', 'set.floor(x)', 'Greatest <= x', { attempt: 'Find greatest element less than or equal to x.', input: 'TreeSet<Integer> set = new TreeSet<>(List.of(10, 20, 30));', code: 'System.out.println(set.floor(25));', output: '20', note: 'O(log N) Red-Black Tree search.' }],
        ['TreeSet.ceiling(x)', 'set.ceiling(x)', 'Smallest >= x', { attempt: 'Find smallest element greater than or equal to x.', input: 'TreeSet<Integer> set = new TreeSet<>(List.of(10, 20, 30));', code: 'System.out.println(set.ceiling(25));', output: '30', note: 'O(log N) predecessor/successor queries.' }]
      ]
    },
    {
      key: 'sec16_advanced_map',
      label: '16. Advanced Map Methods (Modern Java)',
      color: '#2dd4bf',
      bg: 'rgba(45, 212, 191, 0.08)',
      border: 'rgba(45, 212, 191, 0.25)',
      note: 'map.merge() and computeIfAbsent() streamline adjacency list graphs and multi-value grouping.',
      rows: [
        ['map.computeIfAbsent(k, f)', 'map.computeIfAbsent(k, k -> new ArrayList<>())', 'Compute if key missing', { attempt: 'Build an adjacency list graph cleanly in 1 line.', input: 'Map<Integer, List<Integer>> adj = new HashMap<>();', code: 'adj.computeIfAbsent(1, k -> new ArrayList<>()).add(2);\nSystem.out.println(adj);', output: '{1=[2]}', note: 'Standard technique for graph problems.' }],
        ['map.computeIfPresent(k, f)', 'map.computeIfPresent(k, (k, v) -> v + 1)', 'Update existing key', { attempt: 'Update value only if key exists.', input: 'Map<String, Integer> map = new HashMap<>(Map.of("A", 10));', code: 'map.computeIfPresent("A", (k, v) -> v + 5);\nSystem.out.println(map.get("A"));', output: '15', note: 'If remapping returns null, entry is removed.' }],
        ['map.merge(k, v, f)', 'map.merge(k, 1, Integer::sum)', 'Combine values', { attempt: 'Increment frequency count in 1 line with merge.', input: 'int[] arr = {1, 2, 2, 3};', code: 'Map<Integer, Integer> freq = new HashMap<>();\nfor (int x : arr) freq.merge(x, 1, Integer::sum);\nSystem.out.println(freq);', output: '{1=1, 2=2, 3=1}', note: 'Combines existing value with new value.' }],
        ['map.forEach((k, v) -> ...)', 'map.forEach((k, v) -> ...)', 'Lambda iteration', { attempt: 'Iterate map concisely with lambda.', input: 'Map<String, Integer> map = Map.of("Alice", 90);', code: 'map.forEach((k, v) -> System.out.println(k + ": " + v));', output: 'Alice: 90', note: 'Cleanest functional map traversal.' }]
      ]
    },
    {
      key: 'sec17_bit_manipulation',
      label: '17. Bit Manipulation & Operators',
      color: '#fb923c',
      bg: 'rgba(251, 146, 60, 0.08)',
      border: 'rgba(251, 146, 60, 0.25)',
      note: 'Bitwise tricks run in 1 CPU cycle and are heavily tested in competitive programming.',
      rows: [
        ['a & b', 'a & b', 'Bitwise AND', { attempt: 'Keep bits present in both numbers.', input: 'int a = 5, b = 3; // 101 & 011 = 001', code: 'System.out.println(a & b);', output: '1', note: '1 & 1 = 1; else 0.' }],
        ['a | b', 'a | b', 'Bitwise OR', { attempt: 'Set bits present in either number.', input: 'int a = 5, b = 3; // 101 | 011 = 111', code: 'System.out.println(a | b);', output: '7', note: '0 | 0 = 0; else 1.' }],
        ['a ^ b', 'a ^ b', 'Bitwise XOR', { attempt: 'Find the single non-duplicate number in an array.', input: 'int[] arr = {4, 1, 2, 1, 2};', code: 'int unique = 0;\nfor (int x : arr) unique ^= x;\nSystem.out.println(unique);', output: '4', note: 'x ^ x = 0; x ^ 0 = x.' }],
        ['~a', '~a', 'Bitwise NOT', { attempt: 'Invert all bits.', input: 'int a = 5;', code: 'System.out.println(~a);', output: '-6', note: '~x = -(x + 1) in two’s complement.' }],
        ['a << k', 'a << 1', 'Left shift (x * 2^k)', { attempt: 'Multiply by 2^k in 1 instruction.', input: 'int a = 3;', code: 'System.out.println(a << 2); // 3 * 4', output: '12', note: 'Fast power-of-2 multiplication.' }],
        ['a >> k', 'a >> 1', 'Signed right shift (/ 2^k)', { attempt: 'Divide by 2^k preserving sign bit.', input: 'int a = 16;', code: 'System.out.println(a >> 2); // 16 / 4', output: '4', note: 'Preserves negative sign bit.' }],
        ['a >>> k', 'a >>> 1', 'Unsigned right shift', { attempt: 'Shift right filling with 0s.', input: 'int a = -16;', code: 'System.out.println(a >>> 2 > 0);', output: 'true', note: 'Zero-fill right shift.' }],
        ['(n & 1) != 0', '(n & 1) != 0', 'Check if odd', { attempt: 'Check if number is odd faster than % 2.', input: 'int n = 7;', code: 'System.out.println((n & 1) != 0 ? "Odd" : "Even");', output: 'Odd', note: 'Tests the least significant bit.' }],
        ['n > 0 && (n & (n - 1)) == 0', 'n > 0 && (n & (n - 1)) == 0', 'Check power of 2', { attempt: 'Test if integer is a positive power of 2.', input: 'int n = 32;', code: 'boolean isPower = n > 0 && (n & (n - 1)) == 0;\nSystem.out.println(isPower);', output: 'true', note: 'A power of 2 has exactly one set bit.' }],
        ['n & (n - 1)', 'n & (n - 1)', 'Clear lowest set bit', { attempt: "Brian Kernighan's algorithm to count set bits.", input: 'int n = 12; // 1100', code: 'System.out.println(n & (n - 1)); // 1000', output: '8', note: 'Clears rightmost 1-bit.' }]
      ]
    },
    {
      key: 'sec18_biginteger',
      label: '18. Useful BigInteger Methods',
      color: '#f472b6',
      bg: 'rgba(244, 114, 182, 0.08)',
      border: 'rgba(244, 114, 182, 0.25)',
      note: 'Use BigInteger when values exceed Long.MAX_VALUE (e.g. 50! factorials or 100-digit RSA modular arithmetic).',
      rows: [
        ['BigInteger.add()', 'a.add(b)', 'Addition', { attempt: 'Add arbitrary precision integers.', input: 'BigInteger a = new BigInteger("99999999999999999999");', code: 'BigInteger b = BigInteger.ONE;\nSystem.out.println(a.add(b));', output: '100000000000000000000', note: 'BigInteger is immutable.' }],
        ['BigInteger.multiply()', 'a.multiply(b)', 'Multiplication', { attempt: 'Calculate 25! factorial.', input: 'int n = 25;', code: 'BigInteger fact = BigInteger.ONE;\nfor (int i = 2; i <= n; i++) fact = fact.multiply(BigInteger.valueOf(i));\nSystem.out.println(fact);', output: '15511210043330985984000000', note: 'Exact integer product.' }],
        ['BigInteger.gcd()', 'a.gcd(b)', 'Greatest Common Divisor', { attempt: 'Find GCD of two huge numbers.', input: 'BigInteger a = new BigInteger("1071"), b = new BigInteger("462");', code: 'System.out.println(a.gcd(b));', output: '21', note: 'Built-in Euclidean algorithm.' }],
        ['BigInteger.modPow()', 'base.modPow(exp, mod)', 'Modular Exponentiation', { attempt: 'Compute (base^exp) % mod in O(log exp).', input: 'BigInteger b = BigInteger.valueOf(2), e = BigInteger.valueOf(100), m = BigInteger.valueOf(1000);', code: 'System.out.println(b.modPow(e, m));', output: '376', note: 'Essential for cryptography questions.' }],
        ['BigInteger.isProbablePrime()', 'n.isProbablePrime(100)', 'Primality test', { attempt: 'Test primality of a large number.', input: 'BigInteger n = new BigInteger("1000000007");', code: 'System.out.println(n.isProbablePrime(100));', output: 'true', note: 'Certainty parameter 100 has error < 2^-100.' }]
      ]
    },
    {
      key: 'sec19_java8_streams',
      label: '19. Useful Java 8+ Stream Methods',
      color: '#34d399',
      bg: 'rgba(52, 211, 153, 0.08)',
      border: 'rgba(52, 211, 153, 0.25)',
      note: 'Streams are concise and declarative. For raw maximum performance under tight 1.0s assessment limits, simple for-loops are faster.',
      rows: [
        ['stream.filter(p)', 'stream.filter(x -> x % 2 == 0)', 'Keep matching', { attempt: 'Filter even numbers from an array.', input: 'int[] arr = {1, 2, 3, 4, 5, 6};', code: 'int[] evens = Arrays.stream(arr).filter(x -> x % 2 == 0).toArray();\nSystem.out.println(Arrays.toString(evens));', output: '[2, 4, 6]', note: 'Predicate must return boolean.' }],
        ['stream.map(f)', 'stream.map(x -> x * x)', 'Transform elements', { attempt: 'Square each number.', input: 'List<Integer> list = List.of(1, 2, 3);', code: 'List<Integer> sq = list.stream().map(x -> x * x).toList();\nSystem.out.println(sq);', output: '[1, 4, 9]', note: '1-to-1 element mapping.' }],
        ['stream.distinct()', 'stream.distinct()', 'Remove duplicates', { attempt: 'Extract distinct values in 1 line.', input: 'int[] arr = {1, 2, 2, 3, 3, 3};', code: 'int[] unique = Arrays.stream(arr).distinct().toArray();\nSystem.out.println(Arrays.toString(unique));', output: '[1, 2, 3]', note: 'Preserves encounter order.' }],
        ['stream.sorted()', 'stream.sorted()', 'Sort stream', { attempt: 'Sort elements via stream pipeline.', input: 'List<Integer> list = List.of(5, 1, 4);', code: 'System.out.println(list.stream().sorted().toList());', output: '[1, 4, 5]', note: 'Intermediate stateful operation.' }],
        ['stream.anyMatch(p)', 'stream.anyMatch(x -> x < 0)', 'true if any match', { attempt: 'Check if array contains negative numbers.', input: 'int[] arr = {4, 7, -2, 9};', code: 'boolean hasNeg = Arrays.stream(arr).anyMatch(x -> x < 0);\nSystem.out.println(hasNeg);', output: 'true', note: 'Short-circuits on first match.' }],
        ['stream.collect(Collectors.toList())', 'stream.collect(...)', 'Collect to List/Set', { attempt: 'Collect stream pipeline into a List.', input: 'Stream<String> s = Stream.of("a", "b", "c");', code: 'List<String> list = s.collect(Collectors.toList());\nSystem.out.println(list);', output: '[a, b, c]', note: 'Terminal collector operation.' }]
      ]
    },
    {
      key: 'sec20_complexity_traps',
      label: '20. Common Algorithms, Complexity & Assessment Traps',
      color: '#f87171',
      bg: 'rgba(248, 113, 113, 0.08)',
      border: 'rgba(248, 113, 113, 0.25)',
      note: 'Review these 7 critical traps and Big-O complexities to avoid common assessment submission fails.',
      rows: [
        ['== vs .equals()', '"abc" == new String("abc") is false', 'Reference vs Content', { attempt: 'Avoid the string reference comparison trap.', input: 'String s1 = "abc", s2 = new String("abc");', code: 'System.out.println(s1 == s2);      // false (different references)\nSystem.out.println(s1.equals(s2));  // true (same content)', output: 'false\ntrue', note: 'Always use .equals() for objects.' }],
        ['list.remove(2) Trap', 'list.remove(2) vs list.remove(Integer.valueOf(2))', 'Index vs Object', { attempt: 'Remove value 2 instead of index 2.', input: 'List<Integer> list = new ArrayList<>(List.of(10, 20, 2, 40));', code: 'list.remove(Integer.valueOf(2)); // removes value 2\nSystem.out.println(list);', output: '[10, 20, 40]', note: 'Passing primitive int removes by index.' }],
        ['s.substring(a, b) Exclusive', 's.substring(0, 3) extracts 3 chars', 'End is exclusive', { attempt: 'Remember that index b is never included.', input: '"ABCDE".substring(1, 4)', code: 'System.out.println("ABCDE".substring(1, 4));', output: 'BCD', note: 'Length of result is always (b - a).' }],
        ['Unsorted binarySearch', 'Arrays.binarySearch() on unsorted array', 'Undefined return', { attempt: 'Verify array is sorted before binary search.', input: 'int[] unsorted = {5, 1, 9};', code: 'Arrays.sort(unsorted); // MANDATORY FIRST\nSystem.out.println(Arrays.binarySearch(unsorted, 5));', output: '1', note: 'Binary search on unsorted arrays returns garbage.' }],
        ['Scanner nextLine() Trap', 'sc.nextInt() followed by sc.nextLine()', 'Consumes empty line', { attempt: 'Consume leftover newline when switching from token to line reading.', input: '42\\nHello World', code: 'Scanner sc = new Scanner("42\\nHello World");\nint id = sc.nextInt();\nsc.nextLine(); // DRAIN NEWLINE!\nString text = sc.nextLine();\nSystem.out.println(id + ": " + text);', output: '42: Hello World', note: 'Always call sc.nextLine() to discard the trailing newline.' }]
      ]
    }
  ];

  // Filter sections and rows based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return allSections;
    }
    const q = searchQuery.toLowerCase().trim();
    return allSections
      .map(section => {
        const matchingRows = section.rows.filter(r => {
          const fnName = r[0]?.toLowerCase() || '';
          const ex = r[1]?.toLowerCase() || '';
          const out = r[2]?.toLowerCase() || '';
          const attempt = r[3]?.attempt?.toLowerCase() || '';
          const note = r[3]?.note?.toLowerCase() || '';
          return (
            fnName.includes(q) ||
            ex.includes(q) ||
            out.includes(q) ||
            attempt.includes(q) ||
            note.includes(q) ||
            section.label.toLowerCase().includes(q)
          );
        });

        if (matchingRows.length > 0) {
          return { ...section, rows: matchingRows };
        }
        return null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  const filteredTopEssentials = useMemo(() => {
    if (!searchQuery.trim()) return topEssentialsRow;
    const q = searchQuery.toLowerCase().trim();
    const matchingRows = topEssentialsRow.rows.filter(r => {
      const fnName = r[0]?.toLowerCase() || '';
      const ex = r[1]?.toLowerCase() || '';
      const out = r[2]?.toLowerCase() || '';
      return fnName.includes(q) || ex.includes(q) || out.includes(q);
    });
    return matchingRows.length > 0 ? { ...topEssentialsRow, rows: matchingRows } : null;
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 10, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
        padding: '1.25rem'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(145deg, #0b1329, #0f1c3a)',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          maxWidth: '1060px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(249, 115, 22, 0.12)',
          padding: '2rem',
          position: 'relative',
          color: '#cbd5e1'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#1e293b',
            border: 'none',
            color: '#94a3b8',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Close Guide"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '4px 12px',
              background: 'rgba(249, 115, 22, 0.15)',
              color: '#fb923c',
              border: '1px solid rgba(249, 115, 22, 0.35)',
              borderRadius: '10px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '0.6rem'
            }}
          >
            <Sparkles size={14} /> Java Assessment & DSA Cheat Sheet
          </div>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#f8fafc',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.4px'
            }}
          >
            Java Methods & Built-ins for Coding Assessments
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              color: '#94a3b8',
              margin: 0,
              fontSize: '0.92rem'
            }}
          >
            Practical reference of commonly used Java methods, built-in functions, data structures, and algorithmic complexities for technical placement exams (Accenture, TCS, Infosys, Capgemini, Cognizant) and competitive programming.
          </p>
        </div>

        {/* Search & Control Bar */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
            padding: '0.75rem',
            background: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '12px',
            border: '1px solid #1e293b'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b'
              }}
            />
            <input
              type="text"
              placeholder="Search 140+ Java methods (e.g. parseInt, substring, reverse, priorityQueue)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.75rem 0.55rem 2.25rem',
                background: '#090e1d',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Expand/Collapse Actions */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={expandAll}
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                background: '#1e293b',
                border: '1px solid #334155',
                color: '#cbd5e1',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                background: '#1e293b',
                border: '1px solid #334155',
                color: '#cbd5e1',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}
        >
          <Code2 size={18} style={{ color: '#fb923c' }} />
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#f8fafc',
              margin: 0
            }}
          >
            Java Methods & Functions with Examples
          </h3>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ⭐ SPECIAL TOP ROW: Most Commonly Used Functions              */}
        {/* ------------------------------------------------------------- */}
        {filteredTopEssentials && (
          <div
            style={{
              marginBottom: '1rem',
              border: `1.5px solid ${filteredTopEssentials.border}`,
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#070b16',
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.15)'
            }}
          >
            {/* Header Button */}
            <button
              type="button"
              onClick={() => toggleSection(filteredTopEssentials.key)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.15rem',
                background: filteredTopEssentials.bg,
                border: 'none',
                cursor: 'pointer',
                color: filteredTopEssentials.color,
                fontWeight: 800,
                fontSize: '0.92rem',
                letterSpacing: '0.2px',
                transition: 'background 0.15s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Star size={16} fill={filteredTopEssentials.color} />
                <span>{filteredTopEssentials.label}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: 'rgba(245, 158, 11, 0.25)',
                    color: '#fef3c7',
                    border: '1px solid rgba(245, 158, 11, 0.4)'
                  }}
                >
                  {filteredTopEssentials.rows.length} ESSENTIALS
                </span>
              </div>
              <ChevronDown
                size={17}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: openSections[filteredTopEssentials.key] ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {/* Accordion Table Body */}
            {openSections[filteredTopEssentials.key] && (
              <div style={{ padding: '0.85rem 1rem 1rem' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table
                    style={{
                      borderCollapse: 'collapse',
                      fontSize: '0.82rem',
                      width: '100%',
                      minWidth: '580px'
                    }}
                  >
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                        {['Method / Function', 'Example', 'Output', 'Action'].map((h, i) => (
                          <th
                            key={h}
                            style={{
                              padding: '0.45rem 0.75rem',
                              textAlign: 'left',
                              color: filteredTopEssentials.color,
                              fontWeight: 700,
                              borderBottom: `1px solid ${filteredTopEssentials.border}`,
                              whiteSpace: 'nowrap',
                              width: i === 3 ? '100px' : 'auto'
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTopEssentials.rows.map(([fn, ex, out, detail], ri) => (
                        <tr
                          key={ri}
                          style={{
                            background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
                          }}
                        >
                          <td
                            style={{
                              padding: '0.45rem 0.75rem',
                              color: filteredTopEssentials.color,
                              fontFamily: 'monospace',
                              fontWeight: 700,
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {fn}
                          </td>
                          <td
                            style={{
                              padding: '0.45rem 0.75rem',
                              color: '#94a3b8',
                              fontFamily: 'monospace',
                              fontSize: '0.8rem'
                            }}
                          >
                            {ex}
                          </td>
                          <td
                            style={{
                              padding: '0.45rem 0.75rem',
                              color: '#f8fafc',
                              fontWeight: 600
                            }}
                          >
                            {out}
                          </td>
                          <td style={{ padding: '0.35rem 0.5rem', whiteSpace: 'nowrap' }}>
                            {detail && (
                              <button
                                type="button"
                                onClick={() =>
                                  setExamplePopup({
                                    ...detail,
                                    fnName: fn,
                                    color: filteredTopEssentials.color
                                  })
                                }
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  padding: '0.25rem 0.65rem',
                                  background: `${filteredTopEssentials.color}18`,
                                  border: `1px solid ${filteredTopEssentials.color}55`,
                                  borderRadius: '6px',
                                  color: filteredTopEssentials.color,
                                  fontSize: '0.74rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  transition: 'all 0.15s'
                                }}
                              >
                                <Code2 size={12} /> Example
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredTopEssentials.note && (
                  <p
                    style={{
                      marginTop: '0.65rem',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      fontStyle: 'italic',
                      lineHeight: 1.5
                    }}
                  >
                    💡 {filteredTopEssentials.note}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* All 20 Categorized Accordion Rows                             */}
        {/* ------------------------------------------------------------- */}
        {filteredSections.map(
          ({ key, label, color, bg, border, rows, note }) => (
            <div
              key={key}
              style={{
                marginBottom: '0.65rem',
                border: `1px solid ${border}`,
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#070b16'
              }}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleSection(key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.8rem 1.1rem',
                  background: bg,
                  border: 'none',
                  cursor: 'pointer',
                  color,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.2px',
                  transition: 'background 0.15s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{label}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '1px 7px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#94a3b8'
                    }}
                  >
                    {rows.length}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.25s ease',
                    transform: openSections[key] ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Accordion Body */}
              {openSections[key] && (
                <div style={{ padding: '0.75rem 1rem 1rem' }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table
                      style={{
                        borderCollapse: 'collapse',
                        fontSize: '0.82rem',
                        width: '100%',
                        minWidth: '580px'
                      }}
                    >
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                          {['Function / Operator', 'Example', 'Output', ''].map(
                            (h, i) => (
                              <th
                                key={i}
                                style={{
                                  padding: '0.45rem 0.75rem',
                                  textAlign: 'left',
                                  color,
                                  fontWeight: 700,
                                  borderBottom: `1px solid ${border}`,
                                  whiteSpace: 'nowrap',
                                  width: i === 3 ? '100px' : 'auto'
                                }}
                              >
                                {h}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(([fn, ex, out, detail], ri) => (
                          <tr
                            key={ri}
                            style={{
                              background:
                                ri % 2 === 0
                                  ? 'transparent'
                                  : 'rgba(255,255,255,0.02)'
                            }}
                          >
                            <td
                              style={{
                                padding: '0.45rem 0.75rem',
                                color,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {fn}
                            </td>
                            <td
                              style={{
                                padding: '0.45rem 0.75rem',
                                color: '#94a3b8',
                                fontFamily: 'monospace',
                                fontSize: '0.8rem'
                              }}
                            >
                              {ex}
                            </td>
                            <td
                              style={{
                                padding: '0.45rem 0.75rem',
                                color: '#e2e8f0'
                              }}
                            >
                              {out}
                            </td>
                            <td
                              style={{
                                padding: '0.3rem 0.5rem',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {detail && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExamplePopup({
                                      ...detail,
                                      fnName: fn,
                                      color
                                    })
                                  }
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    padding: '0.25rem 0.6rem',
                                    background: `${color}18`,
                                    border: `1px solid ${color}55`,
                                    borderRadius: '6px',
                                    color,
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.15s'
                                  }}
                                >
                                  <Code2 size={11} /> Example
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {note && (
                    <p
                      style={{
                        marginTop: '0.6rem',
                        fontSize: '0.78rem',
                        color: '#64748b',
                        fontStyle: 'italic',
                        lineHeight: 1.5
                      }}
                    >
                      💡 {note}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        )}

        {/* ------------------------------------------------------------- */}
        {/* Interactive Example Modal Popup (Matching SQL Style)          */}
        {/* ------------------------------------------------------------- */}
        {examplePopup && (
          <div
            onClick={() => setExamplePopup(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              zIndex: 1300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              backdropFilter: 'blur(6px)'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#090e1e',
                border: `1.5px solid ${examplePopup.color}55`,
                borderRadius: '16px',
                padding: '1.6rem',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '88vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: `0 20px 50px -10px rgba(0,0,0,0.9), 0 0 30px ${examplePopup.color}22`
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setExamplePopup(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#1e293b',
                  border: 'none',
                  color: '#94a3b8',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={15} />
              </button>

              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.1rem',
                  paddingRight: '2rem'
                }}
              >
                <Code2 size={16} style={{ color: examplePopup.color }} />
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#f8fafc'
                  }}
                >
                  {examplePopup.fnName}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    background: `${examplePopup.color}18`,
                    color: examplePopup.color,
                    borderRadius: '6px',
                    border: `1px solid ${examplePopup.color}44`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Java 8 - 21
                </span>
              </div>

              {/* 1. How to Attempt */}
              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: examplePopup.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.4rem'
                  }}
                >
                  ❓ How to Attempt?
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${examplePopup.color}30`,
                    borderRadius: '8px',
                    padding: '0.7rem 0.9rem',
                    fontSize: '0.87rem',
                    lineHeight: 1.65,
                    color: '#e2e8f0'
                  }}
                >
                  {examplePopup.attempt}
                </div>
              </div>

              {/* 2. Sample Input / Scenario */}
              {examplePopup.input && (
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.4rem'
                    }}
                  >
                    📥 Sample Input / Scenario
                  </div>
                  <pre
                    style={{
                      background: '#040810',
                      border: '1px solid #1e293b',
                      borderRadius: '8px',
                      padding: '0.65rem 0.9rem',
                      margin: 0,
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      color: '#cbd5e1',
                      overflowX: 'auto',
                      whiteSpace: 'pre'
                    }}
                  >
                    {examplePopup.input}
                  </pre>
                </div>
              )}

              {/* 3. Java Code */}
              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    💻 Java Solution Code
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(examplePopup.code)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '2px 8px',
                      background: '#1e293b',
                      border: '1px solid #334155',
                      borderRadius: '6px',
                      color: copiedCode ? '#4ade80' : '#94a3b8',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedCode ? <Check size={11} /> : <Copy size={11} />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre
                  style={{
                    background: '#040810',
                    border: '1px solid #1e293b',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.82rem',
                    lineHeight: 1.65,
                    color: '#7dd3fc',
                    overflowX: 'auto',
                    whiteSpace: 'pre'
                  }}
                >
                  {examplePopup.code}
                </pre>
              </div>

              {/* 4. Output */}
              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.4rem'
                  }}
                >
                  📤 Output / Return
                </div>
                <pre
                  style={{
                    background: '#040810',
                    border: '1px solid #1e293b',
                    borderRadius: '8px',
                    padding: '0.65rem 0.9rem',
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: '#4ade80',
                    overflowX: 'auto',
                    whiteSpace: 'pre'
                  }}
                >
                  {examplePopup.output}
                </pre>
              </div>

              {/* 5. Key Note / Gotcha */}
              {examplePopup.note && (
                <div
                  style={{
                    background: `${examplePopup.color}0d`,
                    border: `1px solid ${examplePopup.color}30`,
                    borderRadius: '8px',
                    padding: '0.65rem 0.9rem',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    color: '#94a3b8'
                  }}
                >
                  <span style={{ fontWeight: 700, color: examplePopup.color }}>
                    💡 Key Assessment Note:{' '}
                  </span>
                  {examplePopup.note}
                </div>
              )}

              {/* Close Button */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '1.1rem'
                }}
              >
                <button
                  type="button"
                  onClick={() => setExamplePopup(null)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    background: `${examplePopup.color}22`,
                    border: `1px solid ${examplePopup.color}55`,
                    color: examplePopup.color,
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Close Example
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Return Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-sm"
            style={{
              padding: '0.65rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              borderRadius: '8px',
              background: '#0284c7',
              border: '1px solid #38bdf8',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            Close & Return to Practice
          </button>
        </div>
      </div>
    </div>
  );
}

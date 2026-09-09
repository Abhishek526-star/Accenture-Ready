// src/data/javaTopics.js
// Comprehensive assessment-oriented Java learning syllabus for technical recruitment

export const javaTopics = [
  {
    id: "java-basics-syntax",
    title: "Java Basics & Class Structure",
    category: "Core Fundamentals",
    difficulty: "Beginner",
    duration: "4 mins",
    explanation: "Java is a statically typed, class-based, object-oriented language. In coding assessments (e.g. HackerRank, Mettl, LeetCode), all your code must reside inside a class (often named `Main` or `Solution`). Execution always begins at `public static void main(String[] args)`.",
    syntax: `public class Main {
    public static void main(String[] args) {
        // Statements terminate with a semicolon
        System.out.println("Hello, Assessment!");
    }
}`,
    code: `public class Main {
    public static void main(String[] args) {
        // Standard Console Output
        System.out.println("Welcome to Accenture Assessment Prep!");
        
        // Print without newline vs with newline
        System.out.print("Candidate ID: ");
        System.out.println(1024);
        
        // Formatted printing with printf
        double score = 94.558;
        System.out.printf("Candidate Final Score: %.2f%%%n", score);
    }
}`,
    output: `Welcome to Accenture Assessment Prep!
Candidate ID: 1024
Candidate Final Score: 94.56%`,
    methods: [
      {
        name: "System.out.println()",
        signature: "void println(Object x)",
        description: "Prints the argument and terminates the current line."
      },
      {
        name: "System.out.print()",
        signature: "void print(Object x)",
        description: "Prints the argument without appending a new line character."
      },
      {
        name: "System.out.printf()",
        signature: "PrintStream printf(String format, Object... args)",
        description: "Prints formatted string using placeholders (e.g., %d, %s, %.2f, %n)."
      }
    ],
    tips: [
      "In online assessment platforms, ensure your class name matches the platform specification (usually `public class Main` or `public class Solution`).",
      "Always include `public static void main(String[] args)` as the program entry point unless writing only a method solution."
    ]
  },
  {
    id: "variables-datatypes",
    title: "Variables & Data Types",
    category: "Core Fundamentals",
    difficulty: "Beginner",
    duration: "5 mins",
    explanation: "Java has 8 primitive types: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, and `char`. For competitive programming, pay special attention to `long` (to prevent integer overflow when values exceed ~2×10^9) and automatic/explicit type casting.",
    syntax: `// Primitive Types
int count = 100;
long bigNum = 10000000000L; // Suffix 'L' required
double price = 99.99;
char grade = 'A';
boolean isPassed = true;

// Explicit Type Casting
long total = 500L;
int narrowed = (int) total;`,
    code: `public class Main {
    public static void main(String[] args) {
        // Integer overflow trap demonstration
        int a = 1_000_000_000;
        int b = 2_000_000_000;
        
        // WRONG: a + b overflows 32-bit int (-1294967296)
        int wrongSum = a + b;
        
        // CORRECT: Cast one operand to long before adding
        long safeSum = (long) a + b;
        
        System.out.println("Overflowed (int): " + wrongSum);
        System.out.println("Safe Sum (long):   " + safeSum);
        
        // Char to ASCII Integer Conversion
        char ch = 'C';
        int asciiValue = (int) ch;
        System.out.println("Char '" + ch + "' ASCII code: " + asciiValue);
    }
}`,
    output: `Overflowed (int): -1294967296
Safe Sum (long):   3000000000
Char 'C' ASCII code: 67`,
    methods: [
      {
        name: "Integer.MAX_VALUE",
        signature: "int MAX_VALUE = 2147483647",
        description: "Constant holding the maximum value an int can have (2^31 - 1)."
      },
      {
        name: "Integer.MIN_VALUE",
        signature: "int MIN_VALUE = -2147483648",
        description: "Constant holding the minimum value an int can have (-2^31)."
      },
      {
        name: "Long.parseLong()",
        signature: "long parseLong(String s)",
        description: "Parses the string argument as a signed decimal 64-bit integer."
      }
    ],
    tips: [
      "Crucial assessment tip: If problem constraints state N <= 10^9, sums of two numbers or products will exceed 32-bit `int`. Always use `long`.",
      "Character arithmetic: `ch - '0'` converts numeric char to integer, and `ch - 'a'` gives 0-indexed alphabet position."
    ]
  },
  {
    id: "scanner-io",
    title: "Input/Output (Scanner & Fast I/O)",
    category: "Core Fundamentals",
    difficulty: "Assessment Essential",
    duration: "6 mins",
    explanation: "Most placement coding questions read input from Standard Input (`System.in`). `java.util.Scanner` is the most common input parser. Be cautious with `nextLine()` immediately following `nextInt()` because it reads the leftover newline character.",
    syntax: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
String word = sc.next();       // Single token
sc.nextLine();                 // Consume leftover newline
String line = sc.nextLine();   // Entire line
sc.close();`,
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Simulating standard input stream
        String simulatedInput = "5\\n42\\nAccenture Ready\\n";
        Scanner sc = new Scanner(simulatedInput);
        
        int size = sc.nextInt();
        int score = sc.nextInt();
        sc.nextLine(); // Crucial: Consume remaining newline character!
        
        String candidateName = sc.nextLine();
        
        System.out.println("Array Size: " + size);
        System.out.println("Score: " + score);
        System.out.println("Candidate: " + candidateName);
        sc.close();
    }
}`,
    output: `Array Size: 5
Score: 42
Candidate: Accenture Ready`,
    methods: [
      {
        name: "sc.nextInt()",
        signature: "int nextInt()",
        description: "Scans the next token of input as an integer."
      },
      {
        name: "sc.next()",
        signature: "String next()",
        description: "Finds and returns the next complete whitespace-delimited token."
      },
      {
        name: "sc.nextLine()",
        signature: "String nextLine()",
        description: "Advances scanner past current line and returns the rest of the line."
      },
      {
        name: "sc.hasNextInt()",
        signature: "boolean hasNextInt()",
        description: "Returns true if next token in input can be interpreted as an int."
      }
    ],
    tips: [
      "The 'nextLine() trap': After `sc.nextInt()` or `sc.nextDouble()`, always call `sc.nextLine()` once to discard the newline before reading full lines.",
      "Check `while (sc.hasNext())` for problems that read until End Of File (EOF)."
    ]
  },
  {
    id: "operators",
    title: "Operators & Bitwise Operations",
    category: "Core Fundamentals",
    difficulty: "Intermediate",
    duration: "5 mins",
    explanation: "Operators allow mathematical, logical, and bitwise manipulation. In assessments, bitwise operators (`&`, `|`, `^`, `<<`, `>>`) provide O(1) performance tricks for parity checks, powers of two, and finding single unique numbers.",
    syntax: `// Arithmetic & Modulo
int remainder = 17 % 5; // 2

// Logical Short-circuit
if (arr != null && arr.length > 0) { ... }

// Bitwise Hacks
int isEven = (n & 1) == 0;      // Faster than n % 2 == 0
boolean isPowerOfTwo = (n > 0) && ((n & (n - 1)) == 0);
int xorUnique = a ^ b ^ a;      // Result is b`,
    code: `public class Main {
    public static void main(String[] args) {
        int n = 16;
        
        // 1. Check Power of Two using Bitwise AND
        boolean isPowerOf2 = (n > 0) && ((n & (n - 1)) == 0);
        System.out.println(n + " is power of 2? " + isPowerOf2);
        
        // 2. Find Single Non-Duplicate in Array using XOR
        int[] nums = {4, 1, 2, 1, 2};
        int unique = 0;
        for (int num : nums) {
            unique ^= num; // a ^ a = 0, 0 ^ b = b
        }
        System.out.println("Single unique number: " + unique);
        
        // 3. Fast multiply/divide by powers of 2
        int x = 5;
        System.out.println("5 * 4 via (5 << 2): " + (x << 2));
        System.out.println("20 / 4 via (20 >> 2): " + (20 >> 2));
    }
}`,
    output: `16 is power of 2? true
Single unique number: 4
5 * 4 via (5 << 2): 20
20 / 4 via (20 >> 2): 5`,
    methods: [
      {
        name: "Integer.bitCount()",
        signature: "int bitCount(int i)",
        description: "Returns the number of one-bits in the two's complement binary representation."
      },
      {
        name: "Integer.toBinaryString()",
        signature: "String toBinaryString(int i)",
        description: "Returns a string representation of the integer argument as an unsigned integer in base 2."
      }
    ],
    tips: [
      "XOR property: `a ^ a = 0` and `a ^ 0 = a`. XOR is associative and commutative, perfect for finding missing or unique elements.",
      "Always use parentheses around bitwise operations when combining with comparison operators: `(n & 1) == 0`, because `==` has higher precedence than `&`."
    ]
  },
  {
    id: "conditional-statements",
    title: "Conditional Statements",
    category: "Control Flow",
    difficulty: "Beginner",
    duration: "4 mins",
    explanation: "Conditionals branch program execution based on boolean conditions. Modern Java supports `if-else` chains, the ternary operator `? :`, and clean `switch` statements with pattern matching and arrow syntax.",
    syntax: `// If - Else If - Else
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// Ternary Operator
int max = (a > b) ? a : b;

// Switch Statement
switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    default -> "Other";
};`,
    code: `public class Main {
    public static void main(String[] args) {
        int yearsOfExperience = 3;
        int codingScore = 88;
        
        // Multi-condition assessment filter
        String eligibility;
        if (yearsOfExperience >= 2 && codingScore >= 80) {
            eligibility = "Selected for Senior Associate Interview";
        } else if (codingScore >= 70) {
            eligibility = "Selected for Associate Interview";
        } else {
            eligibility = "Needs Practice";
        }
        
        System.out.println("Result: " + eligibility);
        
        // Ternary for compact null checks
        String input = null;
        String safeText = (input != null) ? input : "Default Candidate";
        System.out.println("Safe Candidate Name: " + safeText);
    }
}`,
    output: `Result: Selected for Senior Associate Interview
Safe Candidate Name: Default Candidate`,
    methods: [
      {
        name: "Objects.requireNonNullElse()",
        signature: "T requireNonNullElse(T obj, T defaultObj)",
        description: "Returns the first argument if it is non-null and otherwise returns the non-null second argument."
      }
    ],
    tips: [
      "In assessments, order your `if-else` conditions from most restrictive to least restrictive (e.g. check `% 15 == 0` for FizzBuzz before checking `% 3` or `% 5`).",
      "Avoid checking `flag == true`; directly write `if (flag)` or `if (!flag)`."
    ]
  },
  {
    id: "loops-iteration",
    title: "Loops & Iteration Control",
    category: "Control Flow",
    difficulty: "Beginner",
    duration: "5 mins",
    explanation: "Loops repeat execution while a condition is met. Java provides standard `for`, `while`, `do-while`, and enhanced for-each loops. Use `break` to exit early and `continue` to skip the remainder of the current iteration.",
    syntax: `// Standard For Loop
for (int i = 0; i < n; i++) { ... }

// Enhanced For-Each Loop (for arrays/collections)
for (int val : arr) { ... }

// While Loop
while (left < right) { ... }

// Do-While Loop (runs at least once)
do { ... } while (condition);`,
    code: `public class Main {
    public static void main(String[] args) {
        int[] scores = {45, 82, 91, 38, 76, 95};
        
        System.out.println("--- Passing Scores (>= 75) ---");
        for (int score : scores) {
            if (score < 75) {
                continue; // Skip failing score
            }
            System.out.println("Qualifying Score: " + score);
        }
        
        // Two Pointers while loop demo
        System.out.println("\\n--- Two-Pointer Iteration ---");
        int left = 0, right = scores.length - 1;
        while (left < right) {
            System.out.println("Left Score: " + scores[left] + " | Right Score: " + scores[right]);
            left++;
            right--;
        }
    }
}`,
    output: `--- Passing Scores (>= 75) ---
Qualifying Score: 82
Qualifying Score: 91
Qualifying Score: 76
Qualifying Score: 95

--- Two-Pointer Iteration ---
Left Score: 45 | Right Score: 95
Left Score: 82 | Right Score: 76
Left Score: 91 | Right Score: 38`,
    methods: [
      {
        name: "break",
        signature: "break [label];",
        description: "Immediately terminates the innermost loop or switch statement."
      },
      {
        name: "continue",
        signature: "continue [label];",
        description: "Skips remaining statements in current loop cycle and proceeds to the next iteration."
      }
    ],
    tips: [
      "Always verify loop termination condition to avoid dreaded infinite loops which produce Time Limit Exceeded (TLE) errors in online judges.",
      "Use enhanced `for (var item : collection)` when indices are not required for cleaner, bug-free code."
    ]
  },
  {
    id: "arrays-operations",
    title: "Arrays & java.util.Arrays Utilities",
    category: "Data Structures",
    difficulty: "Assessment Essential",
    duration: "7 mins",
    explanation: "Arrays are fixed-size sequential memory blocks with O(1) random access by index. In assessments, `java.util.Arrays` provides high-performance utility methods for sorting, searching, copying, filling, and comparing arrays.",
    syntax: `import java.util.Arrays;

// Declaration & Initialization
int[] arr = new int[5];
int[] data = {10, 20, 30, 40, 50};

// Built-in Utilities
Arrays.sort(arr);
int idx = Arrays.binarySearch(arr, target);
int[] copy = Arrays.copyOf(arr, arr.length);
Arrays.fill(arr, -1);
boolean same = Arrays.equals(arr1, arr2);
System.out.println(Arrays.toString(arr));`,
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {50, 20, 10, 40, 30};
        
        System.out.println("Original Array: " + Arrays.toString(arr));
        System.out.println("Length: " + arr.length);
        
        // 1. Sort array in O(N log N)
        Arrays.sort(arr);
        System.out.println("Sorted Array:   " + Arrays.toString(arr));
        
        // 2. Binary Search in sorted array in O(log N)
        int target = 40;
        int index = Arrays.binarySearch(arr, target);
        System.out.println("Index of " + target + ": " + index);
        
        // 3. Fill Array with default value
        int[] memo = new int[5];
        Arrays.fill(memo, -1);
        System.out.println("Memo array initialized: " + Arrays.toString(memo));
        
        // 4. Copying array
        int[] firstThree = Arrays.copyOf(arr, 3);
        System.out.println("First 3 elements: " + Arrays.toString(firstThree));
    }
}`,
    output: `Original Array: [50, 20, 10, 40, 30]
Length: 5
Sorted Array:   [10, 20, 30, 40, 50]
Index of 40: 3
Memo array initialized: [-1, -1, -1, -1, -1]
First 3 elements: [10, 20, 30]`,
    methods: [
      {
        name: "Arrays.sort(arr)",
        signature: "static void sort(int[] a)",
        description: "Sorts the specified array into ascending numerical order using Dual-Pivot Quicksort (O(N log N))."
      },
      {
        name: "Arrays.binarySearch(arr, key)",
        signature: "static int binarySearch(int[] a, int key)",
        description: "Searches sorted array for specified value. Returns index if found; otherwise (-(insertion point) - 1)."
      },
      {
        name: "Arrays.toString(arr)",
        signature: "static String toString(int[] a)",
        description: "Returns a string representation of the contents of the specified array (e.g. [1, 2, 3])."
      },
      {
        name: "Arrays.copyOf(arr, newLength)",
        signature: "static int[] copyOf(int[] original, int newLength)",
        description: "Copies the specified array, truncating or padding with zeros to obtain the specified length."
      },
      {
        name: "Arrays.fill(arr, val)",
        signature: "static void fill(int[] a, int val)",
        description: "Assigns the specified value to each element of the specified array."
      },
      {
        name: "Arrays.equals(a1, a2)",
        signature: "static boolean equals(int[] a, int[] a2)",
        description: "Returns true if the two specified arrays of ints are equal to one another."
      }
    ],
    tips: [
      "`Arrays.binarySearch()` only works on ALREADY SORTED arrays. Running it on an unsorted array produces undefined results.",
      "For 2D arrays, use `Arrays.deepToString(matrix)` to print matrix rows cleanly during debugging."
    ]
  },
  {
    id: "strings-immutability",
    title: "Strings & String Manipulation",
    category: "Data Structures",
    difficulty: "Assessment Essential",
    duration: "7 mins",
    explanation: "In Java, `String` objects are immutable (cannot be changed after creation). String manipulation is tested in virtually every technical assessment. Master built-in methods like `substring()`, `split()`, `indexOf()`, and `charAt()`.",
    syntax: `String s = "Accenture Ready";

int len = s.length();
char c = s.charAt(0);
String sub = s.substring(0, 9); // "Accenture"
boolean has = s.contains("Ready");
int idx = s.indexOf("Ready");
String replaced = s.replace("Ready", "2026");
String[] words = s.split(" ");
boolean equal = s.equals(anotherString);`,
    code: `public class Main {
    public static void main(String[] args) {
        String str = "Accenture Assessment Practice 2026";
        
        System.out.println("Length: " + str.length());
        System.out.println("Char at index 4: " + str.charAt(4));
        System.out.println("Substring [0, 9): " + str.substring(0, 9));
        
        // Case conversions & searches
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Contains 'Assessment'? " + str.contains("Assessment"));
        System.out.println("Index of 'Practice': " + str.indexOf("Practice"));
        
        // Splitting into tokens
        String csv = "apple,banana,cherry,date";
        String[] fruits = csv.split(",");
        System.out.println("Fruits count: " + fruits.length);
        System.out.println("Second fruit: " + fruits[1]);
        
        // Equality comparison
        String s1 = new String("Java");
        String s2 = "Java";
        System.out.println("s1 == s2:      " + (s1 == s2));      // FALSE: reference check
        System.out.println("s1.equals(s2): " + s1.equals(s2));   // TRUE: content check
    }
}`,
    output: `Length: 34
Char at index 4: n
Substring [0, 9): Accenture
Uppercase: ACCENTURE ASSESSMENT PRACTICE 2026
Contains 'Assessment'? true
Index of 'Practice': 21
Fruits count: 4
Second fruit: banana
s1 == s2:      false
s1.equals(s2): true`,
    methods: [
      {
        name: "length()",
        signature: "int length()",
        description: "Returns the length of this string."
      },
      {
        name: "charAt(index)",
        signature: "char charAt(int index)",
        description: "Returns the char value at the specified index."
      },
      {
        name: "substring(begin, end)",
        signature: "String substring(int beginIndex, int endIndex)",
        description: "Returns a substring from beginIndex inclusive to endIndex exclusive."
      },
      {
        name: "equals(another)",
        signature: "boolean equals(Object anObject)",
        description: "Compares this string to the specified object based on character content."
      },
      {
        name: "equalsIgnoreCase(another)",
        signature: "boolean equalsIgnoreCase(String anotherString)",
        description: "Compares two strings ignoring upper/lower case differences."
      },
      {
        name: "contains(s)",
        signature: "boolean contains(CharSequence s)",
        description: "Returns true if and only if this string contains the specified sequence of char values."
      },
      {
        name: "indexOf(str)",
        signature: "int indexOf(String str)",
        description: "Returns the index within this string of the first occurrence of specified substring, or -1."
      },
      {
        name: "split(regex)",
        signature: "String[] split(String regex)",
        description: "Splits this string around matches of the given regular expression."
      },
      {
        name: "replace(oldChar, newChar)",
        signature: "String replace(CharSequence target, CharSequence replacement)",
        description: "Replaces each substring that matches literal target with specified literal replacement."
      },
      {
        name: "toCharArray()",
        signature: "char[] toCharArray()",
        description: "Converts this string to a new character array."
      }
    ],
    tips: [
      "CRITICAL: Never compare Strings with `==`. `==` checks object references in memory! Always use `s1.equals(s2)` or `s1.equalsIgnoreCase(s2)`.",
      "String concatenation inside a loop (`s += ch`) creates a new String on every step (O(N^2) time). Always use `StringBuilder` for loop concatenation!"
    ]
  },
  {
    id: "stringbuilder-performance",
    title: "StringBuilder & Mutable Strings",
    category: "Data Structures",
    difficulty: "Assessment Essential",
    duration: "5 mins",
    explanation: "`StringBuilder` is a mutable sequence of characters. Because regular `String` is immutable, modifying strings in loops (`+=`) allocates new objects each time, resulting in O(N^2) TLE errors. `StringBuilder` does in-place mutations in amortized O(1) time.",
    syntax: `StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(' ');
sb.append("World");
sb.reverse();
sb.insert(0, "Start: ");
sb.delete(0, 5);
sb.setCharAt(0, 'W');
String result = sb.toString();`,
    code: `public class Main {
    public static void main(String[] args) {
        // Fast palindrome check using StringBuilder
        String word = "racecar";
        String reversed = new StringBuilder(word).reverse().toString();
        boolean isPalindrome = word.equals(reversed);
        
        System.out.println("'" + word + "' is palindrome? " + isPalindrome);
        
        // Building string efficiently in loop
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            sb.append(i).append(" -> ");
        }
        // Remove trailing " -> "
        if (sb.length() >= 4) {
            sb.setLength(sb.length() - 4);
        }
        
        System.out.println("Built Path: " + sb.toString());
        
        // In-place character modification
        StringBuilder mutate = new StringBuilder("hallo");
        mutate.setCharAt(1, 'e'); // Fix vowel
        System.out.println("Mutated: " + mutate.toString());
    }
}`,
    output: `'racecar' is palindrome? true
Built Path: 1 -> 2 -> 3 -> 4 -> 5
Mutated: hello`,
    methods: [
      {
        name: "append(val)",
        signature: "StringBuilder append(Object obj)",
        description: "Appends the string representation of the argument to this sequence in O(1) amortized."
      },
      {
        name: "reverse()",
        signature: "StringBuilder reverse()",
        description: "Causes this character sequence to be replaced by the reverse of the sequence."
      },
      {
        name: "setCharAt(index, ch)",
        signature: "void setCharAt(int index, char ch)",
        description: "The character at the specified index is set to ch."
      },
      {
        name: "delete(start, end)",
        signature: "StringBuilder delete(int start, int end)",
        description: "Removes characters in substring from start inclusive to end exclusive."
      },
      {
        name: "insert(offset, str)",
        signature: "StringBuilder insert(int offset, String str)",
        description: "Inserts the string representation of the second argument at the specified offset."
      },
      {
        name: "toString()",
        signature: "String toString()",
        description: "Returns a string representing the data in this sequence."
      }
    ],
    tips: [
      "When reversing a string or number representation, `new StringBuilder(s).reverse().toString()` is the cleanest 1-liner in Java.",
      "Pre-allocate capacity if you know the final size: `new StringBuilder(estimatedLength)` to avoid internal array resizing."
    ]
  },
  {
    id: "methods-recursion",
    title: "Methods & Recursion",
    category: "Functions & OOP",
    difficulty: "Intermediate",
    duration: "6 mins",
    explanation: "Methods encapsulate reusable logic. In coding assessments, solutions are often written inside utility or static methods. Recursion is a technique where a method calls itself with smaller inputs until reaching a base condition.",
    syntax: `// Standard Static Method
public static int add(int a, int b) {
    return a + b;
}

// Recursive Method Pattern
public static int factorial(int n) {
    if (n <= 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Step
}`,
    code: `public class Main {
    // 1. Greatest Common Divisor (Euclid's Algorithm)
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    // 2. Binary Search implementation via recursion
    public static int binarySearch(int[] arr, int left, int right, int target) {
        if (left > right) return -1; // Base case: not found
        int mid = left + (right - left) / 2; // Prevents overflow
        
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);
        return binarySearch(arr, mid + 1, right, target);
    }
    
    public static void main(String[] args) {
        System.out.println("GCD(48, 18): " + gcd(48, 18));
        
        int[] sorted = {10, 20, 30, 40, 50, 60};
        int foundIdx = binarySearch(sorted, 0, sorted.length - 1, 40);
        System.out.println("Binary Search index for 40: " + foundIdx);
    }
}`,
    output: `GCD(48, 18): 6
Binary Search index for 40: 3`,
    methods: [
      {
        name: "Base Case",
        signature: "if (baseCondition) return baseResult;",
        description: "The essential condition stopping further recursive calls and preventing StackOverflowError."
      },
      {
        name: "Mid Calculation",
        signature: "int mid = left + (right - left) / 2;",
        description: "Safe midpoint calculation preventing integer overflow (unlike (left + right) / 2)."
      }
    ],
    tips: [
      "Java is strictly PASS-BY-VALUE. For primitive types, a copy is passed. For objects, a copy of the reference is passed.",
      "Every recursive call takes O(N) auxiliary call stack space. Always identify your base case first to avoid `StackOverflowError`."
    ]
  },
  {
    id: "classes-objects",
    title: "Classes & Objects",
    category: "Functions & OOP",
    difficulty: "Intermediate",
    duration: "5 mins",
    explanation: "Classes are blueprints defining properties (fields) and behaviors (methods). In coding rounds (like Custom Sorting, Interval Scheduling, or Linked List representations), creating lightweight helper classes is extremely common.",
    syntax: `class Candidate {
    String name;
    int score;
    
    // Constructor
    public Candidate(String name, int score) {
        this.name = name;
        this.score = score;
    }
}`,
    code: `class Pair implements Comparable<Pair> {
    int start;
    int end;

    public Pair(int start, int end) {
        this.start = start;
        this.end = end;
    }

    // Sort intervals by start time ascending
    @Override
    public int compareTo(Pair other) {
        return Integer.compare(this.start, other.start);
    }

    @Override
    public String toString() {
        return "[" + start + ", " + end + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        Pair p1 = new Pair(5, 10);
        Pair p2 = new Pair(1, 4);
        
        System.out.println("Interval 1: " + p1);
        System.out.println("Interval 2: " + p2);
        System.out.println("p1.compareTo(p2): " + p1.compareTo(p2)); // Positive because 5 > 1
    }
}`,
    output: `Interval 1: [5, 10]
Interval 2: [1, 4]
p1.compareTo(p2): 1`,
    methods: [
      {
        name: "this keyword",
        signature: "this.fieldName",
        description: "Refers to the current instance of the class to resolve name shadowing."
      },
      {
        name: "Comparable<T>",
        signature: "int compareTo(T o)",
        description: "Defines natural ordering for custom class instances."
      }
    ],
    tips: [
      "In LeetCode/HackerRank style assessments, you can declare helper classes (e.g. `static class Node` or `static class Pair`) directly inside the main `Solution` class.",
      "Always override `toString()` in your helper classes for rapid visual debugging when printing collections."
    ]
  },
  {
    id: "inheritance-polymorphism",
    title: "Inheritance & Polymorphism",
    category: "Functions & OOP",
    difficulty: "Intermediate",
    duration: "5 mins",
    explanation: "Inheritance allows child classes to inherit attributes and methods from a parent class (`extends`). Polymorphism allows methods to do different things based on the object acting upon them (Method Overriding and Method Overloading).",
    syntax: `// Parent Class
class Employee {
    String name;
    void work() { System.out.println("Working..."); }
}

// Child Class
class Developer extends Employee {
    @Override
    void work() { System.out.println("Writing Java Code..."); }
}`,
    code: `// Method Overloading (Compile-time Polymorphism)
class Calculator {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }
}

// Method Overriding (Runtime Polymorphism)
class Animal {
    void speak() { System.out.println("Generic animal sound"); }
}

class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof! Woof!"); }
}

public class Main {
    public static void main(String[] args) {
        // Compile-time
        System.out.println("Sum int:    " + Calculator.add(10, 20));
        System.out.println("Sum double: " + Calculator.add(5.5, 4.5));
        
        // Runtime Polymorphism via parent reference
        Animal myPet = new Dog();
        myPet.speak(); // Calls Dog's overridden speak()
    }
}`,
    output: `Sum int:    30
Sum double: 10.0
Woof! Woof!`,
    methods: [
      {
        name: "@Override",
        signature: "@Override",
        description: "Informs compiler that element is meant to override element declared in a superclass."
      },
      {
        name: "super()",
        signature: "super(args...);",
        description: "Invokes constructor or method of the parent superclass."
      }
    ],
    tips: [
      "Key interview distinction: Overloading happens in the SAME class with DIFFERENT parameters (compile-time). Overriding happens in SUBCLASS with IDENTICAL signature (runtime).",
      "`final` classes cannot be extended, and `final` methods cannot be overridden."
    ]
  },
  {
    id: "arraylist-collections",
    title: "ArrayList & Dynamic Lists",
    category: "Collections Framework",
    difficulty: "Assessment Essential",
    duration: "6 mins",
    explanation: "`ArrayList` is a dynamically resizable array implementation of the `List` interface. It provides fast O(1) random access, O(1) amortized insertion at the end, and automatic resizing. It is one of the most frequently used structures in assessment coding.",
    syntax: `import java.util.ArrayList;
import java.util.Collections;

ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
int val = list.get(0);
list.set(1, 99);
list.remove(0); // removes by index
list.size();
Collections.sort(list);`,
    code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> skills = new ArrayList<>();
        
        // 1. Add elements
        skills.add("Java");
        skills.add("SQL");
        skills.add("React");
        skills.add("Algorithms");
        
        System.out.println("Initial List: " + skills);
        System.out.println("Size: " + skills.size());
        
        // 2. Access & Modify
        System.out.println("Item at index 1: " + skills.get(1));
        skills.set(1, "PostgreSQL"); // replace
        System.out.println("After update: " + skills);
        
        // 3. Sort Alphabetically
        Collections.sort(skills);
        System.out.println("Sorted: " + skills);
        
        // 4. Check presence & remove
        System.out.println("Contains 'Java'? " + skills.contains("Java"));
        skills.remove("React");
        System.out.println("After remove: " + skills);
    }
}`,
    output: `Initial List: [Java, SQL, React, Algorithms]
Size: 4
Item at index 1: SQL
After update: [Java, PostgreSQL, React, Algorithms]
Sorted: [Algorithms, Java, PostgreSQL, React]
Contains 'Java'? true
After remove: [Algorithms, Java, PostgreSQL]`,
    methods: [
      {
        name: "add(element)",
        signature: "boolean add(E e)",
        description: "Appends the specified element to the end of this list (O(1) amortized)."
      },
      {
        name: "get(index)",
        signature: "E get(int index)",
        description: "Returns the element at the specified position in this list (O(1))."
      },
      {
        name: "set(index, element)",
        signature: "E set(int index, E element)",
        description: "Replaces the element at the specified position with specified element."
      },
      {
        name: "remove(index)",
        signature: "E remove(int index)",
        description: "Removes the element at the specified position in this list (O(N) shifting)."
      },
      {
        name: "size()",
        signature: "int size()",
        description: "Returns the number of elements in this list."
      },
      {
        name: "contains(o)",
        signature: "boolean contains(Object o)",
        description: "Returns true if this list contains the specified element (O(N) scan)."
      }
    ],
    tips: [
      "Trap with `list.remove()`: When working with `ArrayList<Integer>`, `list.remove(5)` removes index 5, NOT the integer 5! To remove the value 5, use `list.remove(Integer.valueOf(5))`.",
      "To sort in descending order: `Collections.sort(list, Collections.reverseOrder())`."
    ]
  },
  {
    id: "hashset-uniqueness",
    title: "HashSet & Unique Element Filtering",
    category: "Collections Framework",
    difficulty: "Assessment Essential",
    duration: "6 mins",
    explanation: "`HashSet` stores unique elements using a hash table under the hood. It provides average O(1) time complexity for `add()`, `remove()`, and `contains()`. It is the go-to structure for duplicate detection, visited tracking, and set operations.",
    syntax: `import java.util.HashSet;
import java.util.Set;

Set<Integer> set = new HashSet<>();
set.add(10);
boolean isNew = set.add(10); // returns false (duplicate!)
boolean exists = set.contains(10);
set.remove(10);
int total = set.size();`,
    code: `import java.util.HashSet;
import java.util.Set;

public class Main {
    // Check if array contains any duplicates
    public static boolean hasDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num)) {
                return true; // Already seen!
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 1};
        int[] arr2 = {10, 20, 30, 40};
        
        System.out.println("arr1 has duplicates? " + hasDuplicate(arr1));
        System.out.println("arr2 has duplicates? " + hasDuplicate(arr2));
        
        // Find intersection of two lists
        Set<String> setA = new HashSet<>(Set.of("Java", "Python", "C++"));
        Set<String> setB = new HashSet<>(Set.of("Python", "Rust", "Go"));
        setA.retainAll(setB); // Set intersection
        System.out.println("Intersection: " + setA);
    }
}`,
    output: `arr1 has duplicates? true
arr2 has duplicates? false
Intersection: [Python]`,
    methods: [
      {
        name: "add(e)",
        signature: "boolean add(E e)",
        description: "Adds element if not already present. Returns true if set did not already contain it."
      },
      {
        name: "contains(o)",
        signature: "boolean contains(Object o)",
        description: "Returns true if this set contains the specified element in O(1) average time."
      },
      {
        name: "remove(o)",
        signature: "boolean remove(Object o)",
        description: "Removes the specified element from this set if it is present."
      },
      {
        name: "retainAll(c)",
        signature: "boolean retainAll(Collection<?> c)",
        description: "Retains only the elements in this set that are contained in the specified collection (intersection)."
      }
    ],
    tips: [
      "Remember `set.add(x)` returns a `boolean`! You don't need to do `if (set.contains(x)) set.add(x)`. Just do `if (!set.add(x))` to detect duplicates in a single O(1) call.",
      "Elements in a `HashSet` are UNORDERED. If you need insertion order, use `LinkedHashSet`. If you need sorted order, use `TreeSet`."
    ]
  },
  {
    id: "hashmap-frequency",
    title: "HashMap & Frequency Counting",
    category: "Collections Framework",
    difficulty: "Assessment Essential",
    duration: "7 mins",
    explanation: "`HashMap` stores key-value pairs with average O(1) lookup, insert, and delete. In coding assessments, HashMap is overwhelmingly used for frequency counting, grouping anagrams, Two Sum complement lookups, and caching.",
    syntax: `import java.util.HashMap;
import java.util.Map;

Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
int val = map.get("key");
int safeVal = map.getOrDefault("missing", 0);
boolean hasKey = map.containsKey("key");

// Frequency Counter Pattern
map.put(key, map.getOrDefault(key, 0) + 1);`,
    code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String sentence = "accenture assessment coding practice assessment accenture";
        String[] words = sentence.split(" ");
        
        // 1. Build Frequency Map
        Map<String, Integer> freqMap = new HashMap<>();
        for (String word : words) {
            freqMap.put(word, freqMap.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word Frequencies: " + freqMap);
        
        // 2. Iterate through Map entries
        System.out.println("\\n--- Breakdown ---");
        for (Map.Entry<String, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue() + " times");
        }
        
        // 3. Two Sum lookup pattern demonstration
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        Map<Integer, Integer> numToIdx = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numToIdx.containsKey(complement)) {
                System.out.println("\\nTwo Sum Pair Found at indices: [" + numToIdx.get(complement) + ", " + i + "]");
                break;
            }
            numToIdx.put(nums[i], i);
        }
    }
}`,
    output: `Word Frequencies: {practice=1, coding=1, assessment=2, accenture=2}

--- Breakdown ---
practice -> 1 times
coding -> 1 times
assessment -> 2 times
accenture -> 2 times

Two Sum Pair Found at indices: [0, 1]`,
    methods: [
      {
        name: "getOrDefault(key, defaultVal)",
        signature: "V getOrDefault(Object key, V defaultValue)",
        description: "Returns mapped value, or defaultValue if this map contains no mapping for the key."
      },
      {
        name: "put(key, value)",
        signature: "V put(K key, V value)",
        description: "Associates the specified value with the specified key in this map."
      },
      {
        name: "containsKey(key)",
        signature: "boolean containsKey(Object key)",
        description: "Returns true if this map contains a mapping for the specified key in O(1)."
      },
      {
        name: "entrySet()",
        signature: "Set<Map.Entry<K,V>> entrySet()",
        description: "Returns a Set view of the mappings contained in this map for fast iteration."
      },
      {
        name: "keySet()",
        signature: "Set<K> keySet()",
        description: "Returns a Set view of the keys contained in this map."
      }
    ],
    tips: [
      "Always use `map.getOrDefault(key, 0) + 1` for frequency maps instead of `if (map.containsKey()) ... else ...`. It is concise and avoids double lookup overhead.",
      "Keys must be immutable (Strings, Integers). Never use mutable objects like `ArrayList` or custom classes without proper `hashCode()` and `equals()` as keys."
    ]
  },
  {
    id: "sorting-searching",
    title: "Sorting & Custom Comparators",
    category: "Algorithms",
    difficulty: "Intermediate",
    duration: "6 mins",
    explanation: "Standard sorting arranges data in ascending order. In assessments, candidates are frequently asked to sort objects by multiple criteria (e.g., sort students by score descending, and alphabetically by name on ties) using custom `Comparator` expressions.",
    syntax: `// Lambda Comparator (ascending)
Arrays.sort(arr, (a, b) -> Integer.compare(a[0], b[0]));

// Lambda Comparator (descending)
list.sort((a, b) -> Integer.compare(b.score, a.score));

// Multi-attribute Comparator
list.sort((a, b) -> {
    if (a.score != b.score) return Integer.compare(b.score, a.score);
    return a.name.compareTo(b.name);
});`,
    code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Student {
    String name;
    int marks;

    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    @Override
    public String toString() {
        return name + " (" + marks + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student("Rahul", 85));
        list.add(new Student("Ananya", 92));
        list.add(new Student("David", 85));
        list.add(new Student("Priya", 92));

        // Sort marks DESCENDING; on tie, sort name ASCENDING
        Collections.sort(list, (s1, s2) -> {
            if (s1.marks != s2.marks) {
                return Integer.compare(s2.marks, s1.marks); // Descending marks
            }
            return s1.name.compareTo(s2.name); // Ascending name
        });

        System.out.println("Ranked Students:");
        for (int i = 0; i < list.size(); i++) {
            System.out.println((i + 1) + ". " + list.get(i));
        }
    }
}`,
    output: `Ranked Students:
1. Ananya (92)
2. Priya (92)
3. David (85)
4. Rahul (85)`,
    methods: [
      {
        name: "Integer.compare(a, b)",
        signature: "static int compare(int x, int y)",
        description: "Compares two int values numerically. Safe from subtraction underflow/overflow bugs."
      },
      {
        name: "Comparator.comparing()",
        signature: "static <T,U> Comparator<T> comparing(Function keyExtractor)",
        description: "Creates a comparator that extracts a Comparable sort key."
      }
    ],
    tips: [
      "Avoid writing `(a, b) -> a - b` for custom comparator sorting! If `a` is negative and `b` is positive (or vice versa), subtraction can overflow and corrupt sort order. Always use `Integer.compare(a, b)`.",
      "For primitive arrays (`int[]`), `Arrays.sort(arr)` only sorts ascending. To sort primitive arrays descending, convert to `Integer[]` or sort then reverse."
    ]
  },
  {
    id: "exception-handling",
    title: "Exception Handling & Safety",
    category: "Algorithms",
    difficulty: "Intermediate",
    duration: "5 mins",
    explanation: "Exceptions indicate runtime errors. In assessment evaluations, unhandled exceptions cause runtime errors (RTE) with zero score. Catching or defending against `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `NumberFormatException` guarantees test stability.",
    syntax: `try {
    // Risky code
    int val = Integer.parseInt(str);
} catch (NumberFormatException e) {
    // Graceful fallback
    int val = 0;
} finally {
    // Cleanup code (always executes)
}`,
    code: `public class Main {
    public static int safeParse(String str, int defaultVal) {
        if (str == null || str.trim().isEmpty()) {
            return defaultVal;
        }
        try {
            return Integer.parseInt(str.trim());
        } catch (NumberFormatException e) {
            System.out.println("Failed parsing '" + str + "', returning default: " + defaultVal);
            return defaultVal;
        }
    }

    public static void main(String[] args) {
        String valid = "450";
        String invalid = "1024A";
        String empty = null;

        System.out.println("Parsed valid:   " + safeParse(valid, 0));
        System.out.println("Parsed invalid: " + safeParse(invalid, -1));
        System.out.println("Parsed null:    " + safeParse(empty, 100));
    }
}`,
    output: `Parsed valid:   450
Failed parsing '1024A', returning default: -1
Parsed invalid: -1
Parsed null:    100`,
    methods: [
      {
        name: "Integer.parseInt()",
        signature: "static int parseInt(String s) throws NumberFormatException",
        description: "Parses string argument as signed decimal integer. Throws NumberFormatException if invalid."
      }
    ],
    tips: [
      "Most common assessment RTEs: 1) `NullPointerException` (dereferencing uninitialized object/array), 2) `ArrayIndexOutOfBoundsException` (off-by-one in loop condition `i <= arr.length`), 3) `StringIndexOutOfBoundsException`.",
      "Always check bounds (`if (index >= 0 && index < arr.length)`) defensively before accessing array slots."
    ]
  },
  {
    id: "dsa-patterns",
    title: "Essential Assessment DSA Patterns",
    category: "Algorithms",
    difficulty: "Assessment Essential",
    duration: "8 mins",
    explanation: "Over 80% of placement coding questions fit into four foundational patterns: Two Pointers (opposite or same direction), Sliding Window (subarray sums/lengths), Prefix Sum (range queries in O(1)), and Frequency Hash Map.",
    syntax: `// Pattern 1: Two Pointers
int l = 0, r = arr.length - 1;
while (l < r) { ... }

// Pattern 2: Sliding Window
for (int right = 0; right < n; right++) {
    windowSum += arr[right];
    while (windowSum > target) {
        windowSum -= arr[left++];
    }
}

// Pattern 3: Prefix Sum
int[] prefix = new int[n + 1];
for (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + arr[i];`,
    code: `public class Main {
    // Pattern: Maximum sum subarray of fixed size K (Sliding Window)
    public static int maxSubarraySumK(int[] arr, int k) {
        if (arr.length < k) return -1;
        
        int currentWindow = 0;
        for (int i = 0; i < k; i++) {
            currentWindow += arr[i];
        }
        
        int maxSum = currentWindow;
        for (int i = k; i < arr.length; i++) {
            currentWindow += arr[i] - arr[i - k]; // Slide window in O(1)
            maxSum = Math.max(maxSum, currentWindow);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] data = {2, 1, 5, 1, 3, 2};
        int k = 3;
        int maxK = maxSubarraySumK(data, k);
        System.out.println("Maximum sum of subarray size " + k + ": " + maxK);
        
        // Two Pointers In-Place Array Reversal
        int[] arr = {1, 2, 3, 4, 5};
        int l = 0, r = arr.length - 1;
        while (l < r) {
            int temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
        System.out.print("Reversed Array: ");
        for (int v : arr) System.out.print(v + " ");
        System.out.println();
    }
}`,
    output: `Maximum sum of subarray size 3: 9
Reversed Array: 5 4 3 2 1 `,
    methods: [
      {
        name: "Math.max(a, b)",
        signature: "static int max(int a, int b)",
        description: "Returns the greater of two int values."
      },
      {
        name: "Math.min(a, b)",
        signature: "static int min(int a, int b)",
        description: "Returns the smaller of two int values."
      }
    ],
    tips: [
      "Whenever asked for contiguous subarray sum or condition, think 'Sliding Window' before writing a nested O(N^2) loop.",
      "For range sum queries `sum(L to R)` in constant time, compute a Prefix Sum array once in O(N). Then `sum(L, R) = prefix[R + 1] - prefix[L]`."
    ]
  }
];

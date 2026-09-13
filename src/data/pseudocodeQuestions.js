// src/data/pseudocodeQuestions.js
// Authentic Accenture Assessment Pseudocode Questions with complete execution traces and step-by-step variable watches

export const PSEUDOCODE_SETS = [
  {
    id: 'set-1',
    name: 'Set 1: Previous Year Questions Collection',
    badge: 'PYQ Master Set 1',
    description: '18 Authentic Accenture Pseudocode Questions with Complete Step-by-Step Solutions, Recursion Traces & Explanations',
    questionCount: 18
  },
  {
    id: 'set-2',
    name: 'Set 2: Previous Year Questions Collection',
    badge: 'PYQ Master Set 2',
    description: '20 Authentic Accenture Pseudocode PYQ Questions with Full Solutions, Step-by-Step Logic, and Master Answer Key',
    questionCount: 20
  }
];

export const PSEUDOCODE_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'bitwise', label: 'Bitwise Logic (^, &, |, >>, <<)' },
  { id: 'recursion', label: 'Recursive Call Stack Tracing' },
  { id: 'loops', label: 'While & For Loop Mutations' },
  { id: 'arrays', label: 'Array & Matrix Indexing' }
];

export const PSEUDOCODE_HANDBOOK = {
  title: 'Accenture Pseudocode Quick Reference & Rules',
  sections: [
    {
      heading: '1. Operator Precedence (Highest to Lowest)',
      content: [
        '1. Parentheses `( )`',
        '2. Unary Operators (`!`, `~`, unary `-`)',
        '3. Multiplicative: `*`, `/`, `mod` (% remainder)',
        '4. Additive: `+`, `-`',
        '5. Bitwise Shifts: `<<` (left shift), `>>` (right shift)',
        '6. Relational: `<`, `<=`, `>`, `>=`',
        '7. Equality: `==`, `!=`',
        '8. Bitwise AND: `&`',
        '9. Bitwise XOR: `^` (EXCLUSIVE OR)',
        '10. Bitwise OR: `|`',
        '11. Logical AND: `&&`',
        '12. Logical OR: `||`',
        '13. Assignment: `=`'
      ]
    },
    {
      heading: '2. Golden Rules of Bitwise XOR (^)',
      content: [
        '• a ^ 0 = a (Identity law)',
        '• a ^ a = 0 (Self-cancellation law: any number XORed with itself is 0!)',
        '• a ^ b = b ^ a (Commutative law)',
        '• (a ^ b) ^ c = a ^ (b ^ c) (Associative law)',
        '• If a ^ b = c, then a ^ c = b and b ^ c = a'
      ]
    },
    {
      heading: '3. Bitwise Shift Shortcuts',
      content: [
        '• a << b = a * (2^b) (e.g., 5 << 2 = 5 * 4 = 20)',
        '• a >> b = floor(a / (2^b)) (e.g., 20 >> 2 = 5, 7 >> 1 = 3)',
        '• a & 1 == 0 means a is EVEN; a & 1 == 1 means a is ODD'
      ]
    },
    {
      heading: '4. Accenture Pseudocode Notation',
      content: [
        '• `Integer a, b, c`: Declares integer variables initialized to 0 unless specified.',
        '• `Set a = 5`: Assigns value 5 to variable a.',
        '• `mod`: Integer remainder operator (e.g. 14 mod 5 = 4).',
        '• Integer division truncates towards zero (e.g. 7 / 2 = 3).'
      ]
    }
  ]
};

export const pseudocodeQuestions = [
  {
    id: 'pseudo-s1-01',
    set: 'set-1',
    qno: 1,
    topic: 'recursion',
    title: 'Q1. Recursive Function',
    difficulty: 'Medium',
    pseudocode: `public class MainClass {
    static void fun(int p, int q, int r) {
        if (p > 1) {
            fun(p - r, q, r - 3);
            System.out.println(q);
        }
    }
    public static void main(String[] args) {
        fun(20, 25, 30);
    }
}`,
    options: ['20', '25', '30', '55'],
    correctAnswer: 1, // B. 25
    explanation: `Initial call: fun(20, 25, 30)

Step 1:
Since 20 > 1, the condition (p > 1) is true.
It invokes the recursive call:
fun(20 - 30, 25, 30 - 3) = fun(-10, 25, 27).

Step 2:
In fun(-10, 25, 27):
p = -10, so condition (-10 > 1) is false.
This call terminates without printing and returns control to the previous call.

Step 3:
The previous call resumes after the recursive call and executes:
System.out.println(q);
Since q = 25, it prints 25.

Output: 25`,
    stepTrace: [
      { line: 8, code: 'fun(20, 25, 30)', variables: { p: 20, q: 25, r: 30 }, note: 'Main calls fun(20, 25, 30).' },
      { line: 3, code: 'if (p > 1)', variables: { p: 20, q: 25, r: 30 }, note: '20 > 1 is true. Proceed inside if.' },
      { line: 4, code: 'fun(p - r, q, r - 3)', variables: { 'p-r': -10, q: 25, 'r-3': 27 }, note: 'Calls fun(20 - 30, 25, 30 - 3) = fun(-10, 25, 27).' },
      { line: 3, code: 'if (p > 1)', variables: { p: -10, q: 25, r: 27 }, note: '-10 > 1 is false. Base condition hit, returns.' },
      { line: 5, code: 'System.out.println(q)', variables: { q: 25, output: '25' }, note: 'Prints q = 25. Call stack unwinds.' }
    ]
  },
  {
    id: 'pseudo-s1-02',
    set: 'set-1',
    qno: 2,
    topic: 'recursion',
    title: 'Q2. Recursive Function with Changing Parameters',
    difficulty: 'Hard',
    pseudocode: `Integer fun(Integer p, Integer q, Integer r)
    if (p > 1)
        fun(p - r, q + 2, r + 2)
        Print q
    end if
end function
// Executed for p = 22, q = 4, r = 2`,
    options: [
      '20 18 16 14 12',
      '14 12 10 8 6 4',
      '26 24 22 20 18 16 14 12 10 8 6 4',
      'None of the mentioned options'
    ],
    correctAnswer: 2, // C
    explanation: `Track the recursive calls:
p decreases by r, q increases by 2, and r increases by 2 on each recursive step:
• p = 22, q = 4, r = 2
• p = 20, q = 6, r = 4
• p = 18, q = 8, r = 6
• p = 16, q = 10, r = 8
• p = 14, q = 12, r = 10
• p = 12, q = 14, r = 12
• p = 10, q = 16, r = 14
• p = 8,  q = 18, r = 16
• p = 6,  q = 20, r = 18
• p = 4,  q = 22, r = 20
• p = 2,  q = 24, r = 22
• p = 0,  q = 26, r = 24

When p = 0, recursion stops.
Because Print q executes after the recursive call, values are printed in reverse order as the stack unwinds:
26 24 22 20 18 16 14 12 10 8 6 4

Output: 26 24 22 20 18 16 14 12 10 8 6 4`,
    stepTrace: [
      { line: 1, code: 'fun(22, 4, 2)', variables: { p: 22, q: 4, r: 2 }, note: 'Initial call: p=22, q=4, r=2.' },
      { line: 2, code: 'if (p > 1)', variables: { p: 22, q: 4, r: 2 }, note: '22 > 1 is true. Makes recursive call.' },
      { line: 3, code: 'Recursive call cascade...', variables: { p: 0, q: 26 }, note: 'Calls continue until p = 0.' },
      { line: 4, code: 'Print q (stack unwinding)', variables: { output: '26 24 22 20 18 16 14 12 10 8 6 4' }, note: 'Values of q print in reverse as stack frames pop.' }
    ]
  },
  {
    id: 'pseudo-s1-03',
    set: 'set-1',
    qno: 3,
    topic: 'recursion',
    title: 'Q3. Multiple Recursive Calls',
    difficulty: 'Medium',
    pseudocode: `Integer fun(Integer x)
    if (x > 3)
        fun(x - 3)
        Print x
        fun(x / 2)
        fun(x / 4)
    end if
end function
// Executed for x = 7`,
    options: ['6 9 4', '5 8 4', '4 7', '4 7 5'],
    correctAnswer: 2, // C. 4 7
    explanation: `Start: fun(7)
Since 7 > 3:
1. fun(7 - 3) = fun(4) is called:
   • 4 > 3 is true:
     - calls fun(4 - 3) = fun(1) -> 1 > 3 is false, returns.
     - executes: Print 4
     - calls fun(4 / 2) = fun(2) -> 2 > 3 is false, returns.
     - calls fun(4 / 4) = fun(1) -> 1 > 3 is false, returns.
   • fun(4) finishes after printing 4.
2. Back to fun(7):
   • executes: Print 7
   • calls fun(7 / 2) = fun(3) -> 3 > 3 is false, returns.
   • calls fun(7 / 4) = fun(1) -> 1 > 3 is false, returns.

Printed values: 4 7
Output: 4 7`,
    stepTrace: [
      { line: 1, code: 'fun(7)', variables: { x: 7 }, note: 'Call fun(7).' },
      { line: 3, code: 'fun(x - 3)', variables: { x: 7, next_x: 4 }, note: 'Calls fun(4).' },
      { line: 4, code: 'Print x in fun(4)', variables: { x: 4, output: '4' }, note: 'fun(4) prints 4 after its child fun(1) returns.' },
      { line: 4, code: 'Print x in fun(7)', variables: { x: 7, output: '4 7' }, note: 'fun(7) resumes and prints 7.' },
      { line: 5, code: 'fun(x / 2) & fun(x / 4)', variables: { '7/2': 3, '7/4': 1 }, note: 'Both 3 > 3 and 1 > 3 are false. Execution completes.' }
    ]
  },
  {
    id: 'pseudo-s1-04',
    set: 'set-1',
    qno: 4,
    topic: 'recursion',
    title: 'Q4. Recursive Division',
    difficulty: 'Medium',
    pseudocode: `public class MainClass {
    static void fun(int x, int y) {
        if (x > 1) {
            fun(x / y, y + 3);
            System.out.println(y);
        }
    }
    public static void main(String[] args) {
        fun(108, 3);
    }
}`,
    options: ['3 6 9 12', '12 9 6 3', '9 6 3', '12 9 6'],
    correctAnswer: 1, // B. 12 9 6 3
    explanation: `Track recursive call chain:
• fun(108, 3): 108 > 1, calls fun(108 / 3, 3 + 3) = fun(36, 6)
• fun(36, 6):   36 > 1, calls fun(36 / 6, 6 + 3)   = fun(6, 9)
• fun(6, 9):     6 > 1, calls fun(6 / 9, 9 + 3)     = fun(0, 12)
• fun(0, 12):    0 > 1 is false, recursion stops.

Now calls unwind in reverse order, executing System.out.println(y):
12
9
6
3

Output: 12 9 6 3`,
    stepTrace: [
      { line: 9, code: 'fun(108, 3)', variables: { x: 108, y: 3 }, note: 'Initial call: x=108, y=3.' },
      { line: 4, code: 'fun(36, 6)', variables: { x: 36, y: 6 }, note: '108 / 3 = 36, 3 + 3 = 6.' },
      { line: 4, code: 'fun(6, 9)', variables: { x: 6, y: 9 }, note: '36 / 6 = 6, 6 + 3 = 9.' },
      { line: 4, code: 'fun(0, 12)', variables: { x: 0, y: 12 }, note: '6 / 9 = 0, 9 + 3 = 12.' },
      { line: 3, code: 'Base case x <= 1', variables: { x: 0 }, note: '0 > 1 is false. Stack unwinds.' },
      { line: 5, code: 'Print y on return', variables: { output: '12 9 6 3' }, note: 'Prints 12, 9, 6, 3 in reverse stack order.' }
    ]
  },
  {
    id: 'pseudo-s1-05',
    set: 'set-1',
    qno: 5,
    topic: 'loops',
    title: 'Q5. Loop with Updating Variables',
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 10, b = 20
for (c from a to b) increment c by 2 in each iteration
    a = a + c
    b = b - a + c
    if (a > 10)
        Print a
    else
        Print b
    end if
end for`,
    options: ['20', '22', '20 32', '20 32 46 62 80 100'],
    correctAnswer: 3, // D. 20 32 46 62 80 100
    explanation: `The for-loop boundaries are evaluated at initialization:
c ranges from a (10) to b (20) with step 2:
c values: 10, 12, 14, 16, 18, 20

Compute a and printed values:
• c = 10: a = 10 + 10 = 20. (20 > 10) -> Print 20
• c = 12: a = 20 + 12 = 32. (32 > 10) -> Print 32
• c = 14: a = 32 + 14 = 46. (46 > 10) -> Print 46
• c = 16: a = 46 + 16 = 62. (62 > 10) -> Print 62
• c = 18: a = 62 + 18 = 80. (80 > 10) -> Print 80
• c = 20: a = 80 + 20 = 100. (100 > 10) -> Print 100

Output: 20 32 46 62 80 100`,
    stepTrace: [
      { line: 2, code: 'Set a = 10, b = 20', variables: { a: 10, b: 20 }, note: 'Loop values of c: 10, 12, 14, 16, 18, 20.' },
      { line: 4, code: 'Iter c=10: a = a + c', variables: { a: 20, c: 10, output: '20' }, note: 'a = 10 + 10 = 20. Prints 20.' },
      { line: 4, code: 'Iter c=12: a = a + c', variables: { a: 32, c: 12, output: '20 32' }, note: 'a = 20 + 12 = 32. Prints 32.' },
      { line: 4, code: 'Iter c=14: a = a + c', variables: { a: 46, c: 14, output: '20 32 46' }, note: 'a = 32 + 14 = 46. Prints 46.' },
      { line: 4, code: 'Iter c=16: a = a + c', variables: { a: 62, c: 16, output: '20 32 46 62' }, note: 'a = 46 + 16 = 62. Prints 62.' },
      { line: 4, code: 'Iter c=18: a = a + c', variables: { a: 80, c: 18, output: '20 32 46 62 80' }, note: 'a = 62 + 18 = 80. Prints 80.' },
      { line: 4, code: 'Iter c=20: a = a + c', variables: { a: 100, c: 20, output: '20 32 46 62 80 100' }, note: 'a = 80 + 20 = 100. Prints 100.' }
    ]
  },
  {
    id: 'pseudo-s1-06',
    set: 'set-1',
    qno: 6,
    topic: 'bitwise',
    title: 'Q6. Bitwise Operators',
    difficulty: 'Medium',
    pseudocode: `Integer pp, qq, rr
Set pp = 3, qq = 6, rr = 5

rr = (qq & pp) ^ rr
rr = (qq & 7) + qq

if ((3 ^ 5) < qq)
    rr = (rr + qq) + pp
    if ((pp ^ qq ^ rr) > (rr ^ pp))
        qq = (1 & 6) + pp
    end if
    qq = (rr + 6) + pp
end if

Print pp + qq + rr`,
    options: ['18', '20', '21', '24'],
    correctAnswer: 2, // C. 21
    explanation: `Step-by-step evaluation:
1. Initially: pp = 3, qq = 6, rr = 5
2. Evaluate rr = (qq & pp) ^ rr:
   6 in binary = 110
   3 in binary = 011
   6 & 3 = 010 (binary) = 2
   2 ^ 5 = 010 ^ 101 = 111 (binary) = 7. So rr = 7.
3. Evaluate rr = (qq & 7) + qq:
   6 & 7 = 6
   rr = 6 + 6 = 12.
4. Evaluate condition: ((3 ^ 5) < qq)
   3 ^ 5 = 011 ^ 101 = 110 (binary) = 6.
   Condition becomes: 6 < 6 -> FALSE!
5. Since condition is false, the entire outer if block is skipped.
6. Final output:
   Print pp + qq + rr = 3 + 6 + 12 = 21.

Output: 21`,
    stepTrace: [
      { line: 2, code: 'Set pp = 3, qq = 6, rr = 5', variables: { pp: 3, qq: 6, rr: 5 }, note: 'Variables initialized.' },
      { line: 4, code: 'rr = (qq & pp) ^ rr', variables: { rr: 7 }, note: '(6 & 3) ^ 5 = 2 ^ 5 = 7.' },
      { line: 5, code: 'rr = (qq & 7) + qq', variables: { rr: 12 }, note: '(6 & 7) + 6 = 6 + 6 = 12.' },
      { line: 7, code: 'if ((3 ^ 5) < qq)', variables: { '3^5': 6, qq: 6 }, note: '6 < 6 is FALSE. Entire if-block skipped.' },
      { line: 16, code: 'Print pp + qq + rr', variables: { pp: 3, qq: 6, rr: 12, output: 21 }, note: '3 + 6 + 12 = 21.' }
    ]
  },
  {
    id: 'pseudo-s1-07',
    set: 'set-1',
    qno: 7,
    topic: 'bitwise',
    title: 'Q7. Bitwise AND and Conditional Execution',
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 8, q = 5, r = 10

if ((p & q) < r)
    q = r & r
    q = 9 + q
end if

if ((p + q) > (r - p))
    q = (q + 5) & p
end if

Print p + q + r`,
    options: ['18', '20', '24', '26'],
    correctAnswer: 3, // D. 26
    explanation: `Step-by-step evaluation:
1. Initially: p = 8, q = 5, r = 10
2. First condition: ((p & q) < r)
   8 in binary = 1000
   5 in binary = 0101
   8 & 5 = 0000 = 0
   0 < 10 is TRUE.
   Inside if:
   q = r & r = 10 & 10 = 10
   q = 9 + q = 9 + 10 = 19.
3. Second condition: ((p + q) > (r - p))
   p + q = 8 + 19 = 27
   r - p = 10 - 8 = 2
   27 > 2 is TRUE.
   Inside if:
   q = (q + 5) & p = (19 + 5) & 8 = 24 & 8
   24 in binary = 11000
   8 in binary  = 01000
   24 & 8 = 01000 = 8.
   So q = 8.
4. Final calculation:
   p + q + r = 8 + 8 + 10 = 26.

Output: 26`,
    stepTrace: [
      { line: 2, code: 'Set p = 8, q = 5, r = 10', variables: { p: 8, q: 5, r: 10 }, note: 'Initial values.' },
      { line: 4, code: 'if ((p & q) < r)', variables: { 'p&q': 0, r: 10 }, note: '8 & 5 = 0 < 10 is TRUE.' },
      { line: 5, code: 'q = r & r; q = 9 + q', variables: { q: 19 }, note: 'q = 10; q = 9 + 10 = 19.' },
      { line: 9, code: 'if ((p + q) > (r - p))', variables: { 'p+q': 27, 'r-p': 2 }, note: '27 > 2 is TRUE.' },
      { line: 10, code: 'q = (q + 5) & p', variables: { q: 8 }, note: '24 & 8 = 8.' },
      { line: 13, code: 'Print p + q + r', variables: { p: 8, q: 8, r: 10, output: 26 }, note: '8 + 8 + 10 = 26.' }
    ]
  },
  {
    id: 'pseudo-s1-08',
    set: 'set-1',
    qno: 8,
    topic: 'bitwise',
    title: 'Q8. Nested Conditions and XOR',
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 8, b = 8, c = 9

if (3 > a)
    if (8 > c)
        c = (b + a) & a
        c = c + a
    end if
    c = (b + 1) + b
    b = (2 + 5) + b
else
    if ((b ^ 4) < (7 + b))
        b = (b + b) + c
    end if
end if

Print a + b + c`,
    options: ['25', '40', '42', '45'],
    correctAnswer: 2, // C. 42
    explanation: `Step-by-step evaluation:
1. Initially: a = 8, b = 8, c = 9
2. Outer condition: if (3 > a)
   3 > 8 is FALSE.
   Execution moves to the else block.
3. Inside else: if ((b ^ 4) < (7 + b))
   b ^ 4 = 8 ^ 4 = 1000 ^ 0100 = 1100 (binary) = 12
   7 + b = 7 + 8 = 15
   12 < 15 is TRUE.
   b = (b + b) + c = (8 + 8) + 9 = 16 + 9 = 25.
4. Final calculation:
   Print a + b + c = 8 + 25 + 9 = 42.

Output: 42`,
    stepTrace: [
      { line: 2, code: 'Set a = 8, b = 8, c = 9', variables: { a: 8, b: 8, c: 9 }, note: 'Initial values.' },
      { line: 4, code: 'if (3 > a)', variables: { a: 8 }, note: '3 > 8 is FALSE -> jumps to else.' },
      { line: 13, code: 'if ((b ^ 4) < (7 + b))', variables: { 'b^4': 12, '7+b': 15 }, note: '8 ^ 4 = 12 < 15 is TRUE.' },
      { line: 14, code: 'b = (b + b) + c', variables: { b: 25 }, note: '(8 + 8) + 9 = 25.' },
      { line: 18, code: 'Print a + b + c', variables: { a: 8, b: 25, c: 9, output: 42 }, note: '8 + 25 + 9 = 42.' }
    ]
  },
  {
    id: 'pseudo-s1-09',
    set: 'set-1',
    qno: 9,
    topic: 'loops',
    title: 'Q9. Loop and Continue',
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 0, q = 6, r = 6

for (each r from 2 to 4)
    if ((r ^ q) < q)
        Continue
    end if
    q = 1 + r
    p = 1 + q
end for

Print p + q`,
    options: ['5', '6', '10', '12'],
    correctAnswer: 1, // B. 6
    explanation: `Step-by-step evaluation:
1. Initially: p = 0, q = 6, r = 6
2. Loop runs for r = 2, 3, 4:
   • r = 2:
     r ^ q = 2 ^ 6 = 010 ^ 110 = 100 (binary) = 4
     4 < 6 is TRUE.
     Executes Continue (skips remaining loop body).
   • r = 3:
     r ^ q = 3 ^ 6 = 011 ^ 110 = 101 (binary) = 5
     5 < 6 is TRUE.
     Executes Continue.
   • r = 4:
     r ^ q = 4 ^ 6 = 100 ^ 110 = 010 (binary) = 2
     2 < 6 is TRUE.
     Executes Continue.
3. In all 3 iterations, Continue executes. The assignments to q and p are never reached.
4. p remains 0, q remains 6.
   Print p + q = 0 + 6 = 6.

Output: 6`,
    stepTrace: [
      { line: 2, code: 'Set p = 0, q = 6, r = 6', variables: { p: 0, q: 6 }, note: 'p = 0, q = 6.' },
      { line: 4, code: 'r = 2: (r ^ q) < q', variables: { r: 2, 'r^q': 4, q: 6 }, note: '2 ^ 6 = 4 < 6 (true) -> Continue.' },
      { line: 4, code: 'r = 3: (r ^ q) < q', variables: { r: 3, 'r^q': 5, q: 6 }, note: '3 ^ 6 = 5 < 6 (true) -> Continue.' },
      { line: 4, code: 'r = 4: (r ^ q) < q', variables: { r: 4, 'r^q': 2, q: 6 }, note: '4 ^ 6 = 2 < 6 (true) -> Continue.' },
      { line: 12, code: 'Print p + q', variables: { p: 0, q: 6, output: 6 }, note: 'p and q unchanged: 0 + 6 = 6.' }
    ]
  },
  {
    id: 'pseudo-s1-10',
    set: 'set-1',
    qno: 10,
    topic: 'bitwise',
    title: 'Q10. XOR and AND',
    difficulty: 'Easy',
    pseudocode: `Integer funn(Integer a, Integer b, Integer c)
    c = (c ^ c) & b
    if (9 < c)
        a = (c + 2) & c
        c = 4 ^ a
    end if
    return a + b + c
end function
// Called for a = 0, b = 3, c = 5`,
    options: ['3', '5', '8', '12'],
    correctAnswer: 0, // A. 3
    explanation: `Step-by-step evaluation:
1. Initially: a = 0, b = 3, c = 5
2. c = (c ^ c) & b:
   Any number XORed with itself is zero: 5 ^ 5 = 0.
   c = 0 & 3 = 0.
3. Condition: if (9 < c)
   9 < 0 is FALSE.
   The entire if block is skipped.
4. Return a + b + c:
   = 0 + 3 + 0 = 3.

Output: 3`,
    stepTrace: [
      { line: 1, code: 'funn(0, 3, 5)', variables: { a: 0, b: 3, c: 5 }, note: 'Called with a=0, b=3, c=5.' },
      { line: 2, code: 'c = (c ^ c) & b', variables: { 'c^c': 0, c: 0 }, note: '5 ^ 5 = 0, 0 & 3 = 0. c = 0.' },
      { line: 3, code: 'if (9 < c)', variables: { c: 0 }, note: '9 < 0 is FALSE. Skipped.' },
      { line: 7, code: 'return a + b + c', variables: { a: 0, b: 3, c: 0, output: 3 }, note: '0 + 3 + 0 = 3.' }
    ]
  },
  {
    id: 'pseudo-s1-11',
    set: 'set-1',
    qno: 11,
    topic: 'loops',
    title: 'Q11. Continue Inside a Loop',
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 9, b = 4, c = 6

for (each c from 4 to 8)
    if ((a - c) > (c - a))
        Continue
    end if
    a = (3 + 2) + c
    a = a + a
end for

Print a + b`,
    options: ['9', '13', '18', '26'],
    correctAnswer: 1, // B. 13
    explanation: `Condition analysis:
(a - c) > (c - a)
Add (a - c) to both sides:
2 * (a - c) > 0
a - c > 0 => a > c.

Initially: a = 9, b = 4.
Loop tests c = 4, 5, 6, 7, 8:
For all values of c, a (which is 9) > c is always TRUE:
• 9 > 4 -> True -> Continue
• 9 > 5 -> True -> Continue
• 9 > 6 -> True -> Continue
• 9 > 7 -> True -> Continue
• 9 > 8 -> True -> Continue

Therefore, Continue executes every time and variable a is never modified.
Final output:
Print a + b = 9 + 4 = 13.

Output: 13`,
    stepTrace: [
      { line: 2, code: 'Set a = 9, b = 4, c = 6', variables: { a: 9, b: 4 }, note: 'a = 9, b = 4.' },
      { line: 5, code: 'if ((a - c) > (c - a))', variables: { condition: 'a > c' }, note: '(a - c) > (c - a) simplifies to a > c.' },
      { line: 6, code: 'Loop iterations c=4..8', variables: { a: 9 }, note: '9 > c is true for all c in {4,5,6,7,8}. Continue fires every iteration.' },
      { line: 12, code: 'Print a + b', variables: { a: 9, b: 4, output: 13 }, note: '9 + 4 = 13.' }
    ]
  },
  {
    id: 'pseudo-s1-12',
    set: 'set-1',
    qno: 12,
    topic: 'loops',
    title: 'Q12. Logical OR Condition',
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 4, b = 2, c = 4

if (a > c || (a + b) < (b - a))
    b = 8 + a
end if

Print a + b + c`,
    options: ['8', '10', '14', '16'],
    correctAnswer: 1, // B. 10
    explanation: `Step-by-step evaluation:
1. Initially: a = 4, b = 2, c = 4
2. Check first condition: a > c
   4 > 4 is FALSE.
3. Check second condition: (a + b) < (b - a)
   a + b = 4 + 2 = 6
   b - a = 2 - 4 = -2
   6 < -2 is FALSE.
4. false || false = FALSE.
   The assignment b = 8 + a is NOT executed.
5. b remains 2.
6. Print a + b + c = 4 + 2 + 4 = 10.

Output: 10`,
    stepTrace: [
      { line: 2, code: 'Set a = 4, b = 2, c = 4', variables: { a: 4, b: 2, c: 4 }, note: 'Initial values.' },
      { line: 4, code: 'a > c', variables: { a: 4, c: 4 }, note: '4 > 4 is FALSE.' },
      { line: 4, code: '(a + b) < (b - a)', variables: { 'a+b': 6, 'b-a': -2 }, note: '6 < -2 is FALSE.' },
      { line: 4, code: 'false || false', variables: { result: false }, note: 'Entire OR condition is FALSE. if-body skipped.' },
      { line: 8, code: 'Print a + b + c', variables: { a: 4, b: 2, c: 4, output: 10 }, note: '4 + 2 + 4 = 10.' }
    ]
  },
  {
    id: 'pseudo-s1-13',
    set: 'set-1',
    qno: 13,
    topic: 'bitwise',
    title: 'Q13. XOR and Boolean Conditions',
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 3, b = 1, c = 2

b = b ^ a

if (b && c)
    b = 1
    if (a)
        a = a mod 1
    end if
    c = 0
end if

Print a + b + c`,
    options: ['0', '1', '3', '6'],
    correctAnswer: 1, // B. 1
    explanation: `Step-by-step evaluation:
1. Initially: a = 3, b = 1, c = 2
2. Compute b = b ^ a:
   1 in binary = 01
   3 in binary = 11
   1 ^ 3 = 10 (binary) = 2.
   So b = 2.
3. Check if (b && c):
   Both b (2) and c (2) are non-zero (truthy), so condition is TRUE.
4. Inside if block:
   b = 1
   Check if (a):
   a = 3 is non-zero (truthy).
   a = a mod 1 = 3 mod 1 = 0.
   c = 0.
5. Final calculation:
   Print a + b + c = 0 + 1 + 0 = 1.

Output: 1`,
    stepTrace: [
      { line: 2, code: 'Set a = 3, b = 1, c = 2', variables: { a: 3, b: 1, c: 2 }, note: 'Initial values.' },
      { line: 4, code: 'b = b ^ a', variables: { b: 2 }, note: '1 ^ 3 = 2.' },
      { line: 6, code: 'if (b && c)', variables: { b: 2, c: 2 }, note: '2 && 2 is TRUE.' },
      { line: 7, code: 'b = 1', variables: { b: 1 }, note: 'b becomes 1.' },
      { line: 9, code: 'a = a mod 1', variables: { a: 0 }, note: '3 mod 1 = 0. a becomes 0.' },
      { line: 11, code: 'c = 0', variables: { c: 0 }, note: 'c becomes 0.' },
      { line: 14, code: 'Print a + b + c', variables: { a: 0, b: 1, c: 0, output: 1 }, note: '0 + 1 + 0 = 1.' }
    ]
  },
  {
    id: 'pseudo-s1-14',
    set: 'set-1',
    qno: 14,
    topic: 'arrays',
    title: 'Q14. Two-Dimensional Array and Jump',
    difficulty: 'Medium',
    pseudocode: `char arr[4][2]
set arr[4][2] = {
    {12, 21},
    {13, 54},
    {52, 63},
    {17, 81}
}
Integer a, k, j
set a = 0

for (each k from 0 to 3)
    for (each j from value equal to k to less than equal to the value of k)
        a = a + arr[k][j]
    end for
    jump out of the loop
end for

print a`,
    options: ['12', '21', '33', '100'],
    correctAnswer: 0, // A. 12
    explanation: `Step-by-step evaluation:
1. Matrix initialization:
   arr[0] = {12, 21}
   arr[1] = {13, 54}
   arr[2] = {52, 63}
   arr[3] = {17, 81}
   a = 0
2. Outer loop: k = 0
3. Inner loop: j from k (0) to k (0) -> runs once for j = 0:
   a = a + arr[0][0] = 0 + 12 = 12.
4. Inner loop completes.
5. Next statement: jump out of the loop (break).
   This immediately terminates the outer loop!
6. Outer loop halts after k = 0.
   print a -> prints 12.

Output: 12`,
    stepTrace: [
      { line: 10, code: 'set a = 0', variables: { a: 0 }, note: 'a initialized to 0.' },
      { line: 12, code: 'k = 0', variables: { k: 0 }, note: 'First outer loop iteration.' },
      { line: 13, code: 'j = 0: a = a + arr[k][j]', variables: { a: 12, 'arr[0][0]': 12 }, note: 'a = 0 + 12 = 12.' },
      { line: 16, code: 'jump out of the loop', variables: { a: 12 }, note: 'Break immediately exits the outer loop.' },
      { line: 19, code: 'print a', variables: { output: 12 }, note: 'Final output is 12.' }
    ]
  },
  {
    id: 'pseudo-s1-15',
    set: 'set-1',
    qno: 15,
    topic: 'arrays',
    title: 'Q15. Array Modification',
    difficulty: 'Medium',
    pseudocode: `Integer arr[8]
set arr[8] = {1, 3, 17, 15, 9}

for (each a from 0 to 4)
    if (a mod 2 equals 0)
        arr[a] = arr[a] + 1
    else
        arr[a] = arr[a] - 1
    end if
end for

print arr[1] + arr[2] * arr[4]`,
    options: ['182', '180', '178', '170'],
    correctAnswer: 0, // A. 182
    explanation: `Step-by-step evaluation:
Original array: [1, 3, 17, 15, 9]

Loop runs for index a from 0 to 4:
• a = 0 (even): arr[0] = 1 + 1 = 2
• a = 1 (odd):  arr[1] = 3 - 1 = 2
• a = 2 (even): arr[2] = 17 + 1 = 18
• a = 3 (odd):  arr[3] = 15 - 1 = 14
• a = 4 (even): arr[4] = 9 + 1 = 10

Updated array: [2, 2, 18, 14, 10]

Evaluate expression: arr[1] + arr[2] * arr[4]
Multiplication has higher precedence than addition:
= 2 + (18 * 10)
= 2 + 180
= 182.

Output: 182`,
    stepTrace: [
      { line: 2, code: 'arr = {1, 3, 17, 15, 9}', variables: { arr: '[1, 3, 17, 15, 9]' }, note: 'Original array.' },
      { line: 5, code: 'a=0 (even): arr[0] = 1+1', variables: { 'arr[0]': 2 }, note: 'index 0 becomes 2.' },
      { line: 7, code: 'a=1 (odd):  arr[1] = 3-1', variables: { 'arr[1]': 2 }, note: 'index 1 becomes 2.' },
      { line: 5, code: 'a=2 (even): arr[2] = 17+1', variables: { 'arr[2]': 18 }, note: 'index 2 becomes 18.' },
      { line: 7, code: 'a=3 (odd):  arr[3] = 15-1', variables: { 'arr[3]': 14 }, note: 'index 3 becomes 14.' },
      { line: 5, code: 'a=4 (even): arr[4] = 9+1', variables: { 'arr[4]': 10 }, note: 'index 4 becomes 10.' },
      { line: 11, code: 'print arr[1] + arr[2] * arr[4]', variables: { expression: '2 + 18 * 10', output: 182 }, note: '2 + 180 = 182.' }
    ]
  },
  {
    id: 'pseudo-s1-16',
    set: 'set-1',
    qno: 16,
    topic: 'loops',
    title: 'Q16. While Loop with Jump',
    difficulty: 'Easy',
    pseudocode: `Integer x
Set x = 15

while (x EQUALS 15)
    print "student"
    jump out of the loop
end while`,
    options: ['student student', 'student', 'No output', 'Infinite loop'],
    correctAnswer: 1, // B. student
    explanation: `Step-by-step evaluation:
1. Initially: x = 15
2. while (x EQUALS 15) evaluates to true because 15 == 15.
3. Inside loop:
   print "student" is executed.
4. Next line: jump out of the loop (break).
   Immediately terminates the while loop.
5. The string "student" is printed exactly once.

Output: student`,
    stepTrace: [
      { line: 2, code: 'Set x = 15', variables: { x: 15 }, note: 'x initialized to 15.' },
      { line: 4, code: 'while (x EQUALS 15)', variables: { x: 15 }, note: 'Condition 15 == 15 is true.' },
      { line: 5, code: 'print "student"', variables: { output: 'student' }, note: 'Prints "student".' },
      { line: 6, code: 'jump out of the loop', variables: {}, note: 'Break exits loop immediately.' }
    ]
  },
  {
    id: 'pseudo-s1-17',
    set: 'set-1',
    qno: 17,
    topic: 'loops',
    title: 'Q17. Repeated Modulo Operations',
    difficulty: 'Easy',
    pseudocode: `Integer a
Set a = 27

a = a mod 30
a = a mod 29
a = a mod 28
a = a mod 27

Print a`,
    options: ['1', '26', '27', '0'],
    correctAnswer: 3, // D. 0
    explanation: `Step-by-step evaluation:
1. Start: a = 27
2. a = 27 mod 30 = 27 (since 27 < 30, remainder is 27)
3. a = 27 mod 29 = 27 (since 27 < 29, remainder is 27)
4. a = 27 mod 28 = 27 (since 27 < 28, remainder is 27)
5. a = 27 mod 27 = 0 (27 divided by 27 gives quotient 1 and remainder 0)
6. Print a:
   Outputs 0.

Output: 0`,
    stepTrace: [
      { line: 2, code: 'Set a = 27', variables: { a: 27 }, note: 'a initialized to 27.' },
      { line: 4, code: 'a = a mod 30', variables: { a: 27 }, note: '27 mod 30 = 27.' },
      { line: 5, code: 'a = a mod 29', variables: { a: 27 }, note: '27 mod 29 = 27.' },
      { line: 6, code: 'a = a mod 28', variables: { a: 27 }, note: '27 mod 28 = 27.' },
      { line: 7, code: 'a = a mod 27', variables: { a: 0 }, note: '27 mod 27 = 0.' },
      { line: 9, code: 'Print a', variables: { output: 0 }, note: 'Final output is 0.' }
    ]
  },
  {
    id: 'pseudo-s1-18',
    set: 'set-1',
    qno: 18,
    topic: 'recursion',
    title: 'Q18. Recursive Function — p, q',
    difficulty: 'Medium',
    pseudocode: `Integer fun(Integer p, Integer q)
    if (p > 1)
        fun(p - 3, q + 3)
        Print q
    end if
end function
// Executed for p = 18, q = 3`,
    options: [
      '18 15 12 9 6 3',
      '21 18 15 12 9 6 3',
      '21 18 15 12 9 6',
      '18 15 12 9 6'
    ],
    correctAnswer: 1, // B. 21 18 15 12 9 6 3
    explanation: `Track recursive call chain:
• fun(18, 3): 18 > 1 -> calls fun(15, 6)
• fun(15, 6): 15 > 1 -> calls fun(12, 9)
• fun(12, 9): 12 > 1 -> calls fun(9, 12)
• fun(9, 12):  9 > 1 -> calls fun(6, 15)
• fun(6, 15):  6 > 1 -> calls fun(3, 18)
• fun(3, 18):  3 > 1 -> calls fun(0, 21)
• fun(0, 21):  0 > 1 is false, recursion stops.

As the call stack unwinds, Print q executes in reverse order:
21
18
15
12
9
6
3

Output: 21 18 15 12 9 6 3`,
    stepTrace: [
      { line: 1, code: 'fun(18, 3)', variables: { p: 18, q: 3 }, note: 'Initial call.' },
      { line: 3, code: 'Recursive descent...', variables: { chain: '(18,3)->(15,6)->(12,9)->(9,12)->(6,15)->(3,18)->(0,21)' }, note: 'p decreases by 3, q increases by 3 until p <= 1.' },
      { line: 2, code: 'Base case in fun(0, 21)', variables: { p: 0, q: 21 }, note: '0 > 1 is false. Stack unwinds.' },
      { line: 4, code: 'Print q during unwinding', variables: { output: '21 18 15 12 9 6 3' }, note: 'Values of q print in reverse order.' }
    ]
  },
  {
    id: 'pseudo-s2-01',
    set: 'set-2',
    qno: 1,
    topic: 'loops',
    title: 'Q1. Prime Number / Conditional Output',
    difficulty: 'Medium',
    pseudocode: `A computer program is designed to operate on positive integers using the following steps:

Step 1: Start
Step 2: Input integer X
Step 3: Is X prime?
Step 4: If answer to step 3 is YES go to step 6
Step 5: If answer to step 3 is NO go to step 7
Step 6: Calculate Y = X² + 1, Display Y and go to step 12
Step 7: Is X even?
Step 8: If answer to step 7 is YES go to step 10
Step 9: If answer to step 7 is NO go to step 11
Step 10: Calculate Y = 2X + 4, Display Y and go to step 12
Step 11: Calculate Y = 2X - 1, Display Y and go to step 12
Step 12: End

For how many values of input X less than 50 will the computer display the same output?`,
    options: ['0', '1', '2', '3'],
    correctAnswer: 0, // A. 0
    explanation: `There are three possible cases based on X:
1. Prime X: Y = X² + 1
2. Non-prime even: Y = 2X + 4
3. Non-prime odd: Y = 2X - 1

Checking positive integers below 50:
- For any distinct inputs, each formula is strictly monotonic and outputs do not overlap across branches.
For example:
X = 1 (non-prime odd) -> Y = 2(1) - 1 = 1
X = 2 (prime) -> Y = 2² + 1 = 5
X = 3 (prime) -> Y = 3² + 1 = 10
X = 4 (non-prime even) -> Y = 2(4) + 4 = 12
X = 6 (non-prime even) -> Y = 2(6) + 4 = 16
X = 9 (non-prime odd) -> Y = 2(9) - 1 = 17
X = 10 (non-prime even) -> Y = 2(10) + 4 = 24
X = 11 (prime) -> Y = 11² + 1 = 122

No two distinct inputs X produce the same output.
Final Answer: 0 values (Option A)`,
    stepTrace: [
      { line: 2, code: 'Input integer X (< 50)', variables: { X: 'Positive integer < 50' }, note: 'Analyze three possible formula branches.' },
      { line: 6, code: 'Prime branch: Y = X² + 1', variables: { outputs: '5, 10, 26, 50, 122...' }, note: 'Strictly increasing quadratic sequence.' },
      { line: 10, code: 'Non-prime even: Y = 2X + 4', variables: { outputs: '12, 16, 20, 24...' }, note: 'Even values strictly separated.' },
      { line: 11, code: 'Non-prime odd: Y = 2X - 1', variables: { outputs: '1, 17, 29, 41...' }, note: 'Odd values that never collide with primes.' },
      { line: 12, code: 'Compare output collisions', variables: { duplicates: 0 }, note: 'No collisions occur for any X < 50.' }
    ]
  },
  {
    id: 'pseudo-s2-02',
    set: 'set-2',
    qno: 2,
    topic: 'loops',
    title: 'Q2. Nested if-else Ordering',
    difficulty: 'Easy',
    pseudocode: `main()
{
    int x;
    if (x > 4)
        print("Binod");
    else if (x > 10)
        print("Karthik");
    else if (x > 21)
        print("Pradeep");
    else
        print("Sandeep");
}

What will be the value of x so that "Karthik" will be printed?`,
    options: ['5', '10', '15', 'No value of x'],
    correctAnswer: 3, // D. No value of x
    explanation: `Look at the first condition in the if-else ladder:
if (x > 4)
    print("Binod");

For "Karthik" to execute, the first condition must be false:
x <= 4

However, the condition for printing Karthik is:
else if (x > 10)

These two conditions (x <= 4 AND x > 10) cannot simultaneously be true for any real number. Any value of x > 10 will always satisfy (x > 4) first and print "Binod".

Therefore, "Karthik" can never be printed.
Final Answer: No value of x (Option D)`,
    stepTrace: [
      { line: 4, code: 'if (x > 4) -> print("Binod")', variables: { condition: 'x > 4' }, note: 'Any x > 4 immediately enters this branch.' },
      { line: 6, code: 'else if (x > 10) -> print("Karthik")', variables: { requirement: 'x <= 4 AND x > 10' }, note: 'Reaching this branch requires x <= 4.' },
      { line: 7, code: 'Conflict check', variables: { possible: false }, note: 'x cannot simultaneously satisfy x <= 4 and x > 10.' },
      { line: 12, code: 'Conclusion', variables: { output: 'Karthik is unreachable' }, note: 'No value of x will print "Karthik".' }
    ]
  },
  {
    id: 'pseudo-s2-03',
    set: 'set-2',
    qno: 3,
    topic: 'loops',
    title: 'Q3. Variable Manipulation',
    difficulty: 'Easy',
    pseudocode: `Input m = 9, n = 6
m = m + 1
n = n - 1
m = m + n

if (m > n)
    print m
else
    print n`,
    options: ['14', '15', '16', '17'],
    correctAnswer: 1, // B. 15
    explanation: `Initially:
m = 9, n = 6

Step 1:
m = m + 1 = 9 + 1 = 10

Step 2:
n = n - 1 = 6 - 1 = 5

Step 3:
m = m + n = 10 + 5 = 15

Step 4: Check condition:
if (m > n) -> (15 > 5) is TRUE.

Therefore:
print m -> prints 15.

Final Answer: 15 (Option B)`,
    stepTrace: [
      { line: 1, code: 'Input m = 9, n = 6', variables: { m: 9, n: 6 }, note: 'Initial values.' },
      { line: 2, code: 'm = m + 1', variables: { m: 10, n: 6 }, note: 'm becomes 10.' },
      { line: 3, code: 'n = n - 1', variables: { m: 10, n: 5 }, note: 'n becomes 5.' },
      { line: 4, code: 'm = m + n', variables: { m: 15, n: 5 }, note: 'm = 10 + 5 = 15.' },
      { line: 5, code: 'if (m > n)', variables: { condition: '15 > 5 (true)' }, note: 'Condition is true.' },
      { line: 6, code: 'print m', variables: { output: 15 }, note: 'Prints 15.' }
    ]
  },
  {
    id: 'pseudo-s2-04',
    set: 'set-2',
    qno: 4,
    topic: 'recursion',
    title: 'Q4. Recursive Function',
    difficulty: 'Medium',
    pseudocode: `Integer fun(Integer x, Integer y)
    if (x > 1)
        fun(x - 2, y + 2)
    end if
    print y
End function fun()

// Executed for x = 4 and y = 5`,
    options: ['5 7 9', '9 7 5', '7 9 5', '9 5 7'],
    correctAnswer: 1, // B. 9 7 5
    explanation: `Call Stack Trace for fun(4, 5):
1. fun(4, 5):
   - Condition (4 > 1) is true.
   - Calls fun(4 - 2, 5 + 2) = fun(2, 7).

2. fun(2, 7):
   - Condition (2 > 1) is true.
   - Calls fun(2 - 2, 7 + 2) = fun(0, 9).

3. fun(0, 9):
   - Condition (0 > 1) is false.
   - Proceeds to print y: prints 9.
   - Returns to fun(2, 7).

4. Returning to fun(2, 7):
   - Executes print y: prints 7.
   - Returns to fun(4, 5).

5. Returning to fun(4, 5):
   - Executes print y: prints 5.

Output sequence: 9 7 5
Final Answer: 9 7 5 (Option B)`,
    stepTrace: [
      { line: 1, code: 'fun(4, 5)', variables: { x: 4, y: 5 }, note: '4 > 1 is true, invokes fun(2, 7).' },
      { line: 3, code: 'fun(2, 7)', variables: { x: 2, y: 7 }, note: '2 > 1 is true, invokes fun(0, 9).' },
      { line: 3, code: 'fun(0, 9)', variables: { x: 0, y: 9 }, note: '0 > 1 is false. Base case reached.' },
      { line: 5, code: 'print y in fun(0, 9)', variables: { output: '9' }, note: 'Prints 9.' },
      { line: 5, code: 'print y in fun(2, 7)', variables: { output: '9 7' }, note: 'Prints 7.' },
      { line: 5, code: 'print y in fun(4, 5)', variables: { output: '9 7 5' }, note: 'Prints 5.' }
    ]
  },
  {
    id: 'pseudo-s2-05',
    set: 'set-2',
    qno: 5,
    topic: 'loops',
    title: 'Q5. Character Output in C',
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main()
{
    char ch = 'A';
    printf("%c\\n", ch);
    return 0;
}`,
    options: ['65', 'A', 'a', '%c'],
    correctAnswer: 1, // B. A
    explanation: `In C:
- The variable 'char ch = 'A'' stores the ASCII representation of the character 'A' (value 65).
- In printf("%c\\n", ch), the '%c' format specifier prints the character representation rather than its numerical ASCII code.
- Therefore, it prints: A.

Final Answer: A (Option B)`,
    stepTrace: [
      { line: 4, code: "char ch = 'A';", variables: { ch: "'A'", ascii: 65 }, note: 'ch stores character literal A.' },
      { line: 5, code: 'printf("%c\\n", ch);', variables: { format: '%c', output: 'A' }, note: '%c specifier outputs character glyph A.' },
      { line: 6, code: 'return 0;', variables: { status: 0 }, note: 'Program exits.' }
    ]
  },
  {
    id: 'pseudo-s2-06',
    set: 'set-2',
    qno: 6,
    topic: 'bitwise',
    title: 'Q6. Bitwise XOR and AND',
    difficulty: 'Medium',
    pseudocode: `Integer funn(Integer a, Integer b)
    if (b ^ a < b & a)
        return a
    end if
    return a + b
End function funn()

What does the function return?`,
    options: [
      'Always a',
      'Always a + b',
      'Either a or a + b, depending on the values of a and b',
      'Always 0'
    ],
    correctAnswer: 2, // C. Either a or a + b, depending on the values of a and b
    explanation: `Analysis:
- The function does not have fixed constants for inputs a and b.
- The condition (b ^ a < b & a) depends on the relational comparison and the bitwise representations of a and b:
  - If the condition is true, the function returns a.
  - Otherwise, it falls through to return a + b.
- Therefore, the exact return value cannot be fixed as a single constant without knowing the arguments. It returns either a or a + b depending on the values of a and b.

Final Answer: Either a or a + b, depending on the values of a and b (Option C)`,
    stepTrace: [
      { line: 1, code: 'funn(Integer a, Integer b)', variables: { a: 'unknown', b: 'unknown' }, note: 'Function receives general inputs a and b.' },
      { line: 2, code: 'if (b ^ a < b & a)', variables: { branch1: 'return a', branch2: 'return a + b' }, note: 'Branch condition depends on values of a and b.' },
      { line: 3, code: 'return a', variables: { condition: 'true' }, note: 'Executed when condition holds.' },
      { line: 6, code: 'return a + b', variables: { condition: 'false' }, note: 'Executed when condition is false.' }
    ]
  },
  {
    id: 'pseudo-s2-07',
    set: 'set-2',
    qno: 7,
    topic: 'loops',
    title: 'Q7. Arithmetic + Conditional',
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 3, b = 4, c = 6
c = (5 + 7) + c
if ((c - 6) > (6 - c))
    b = b + b
end if
Print a + b + c`,
    options: ['25', '27', '29', '31'],
    correctAnswer: 2, // C. 29
    explanation: `Initially:
a = 3, b = 4, c = 6

Step 1: Compute c:
c = (5 + 7) + 6 = 12 + 6 = 18

Step 2: Condition check:
(c - 6) > (6 - c)
(18 - 6) > (6 - 18)
12 > -12 (TRUE)

Step 3: Since condition is true:
b = b + b = 4 + 4 = 8

Step 4: Print sum:
a + b + c = 3 + 8 + 18 = 29

Final Answer: 29 (Option C)`,
    stepTrace: [
      { line: 2, code: 'Set a = 3, b = 4, c = 6', variables: { a: 3, b: 4, c: 6 }, note: 'Initial variable values.' },
      { line: 3, code: 'c = (5 + 7) + c', variables: { c: 18 }, note: 'c = 12 + 6 = 18.' },
      { line: 4, code: 'if ((c - 6) > (6 - c))', variables: { left: 12, right: -12, cond: '12 > -12 (true)' }, note: 'Condition is true.' },
      { line: 5, code: 'b = b + b', variables: { b: 8 }, note: 'b = 4 + 4 = 8.' },
      { line: 7, code: 'Print a + b + c', variables: { output: '3 + 8 + 18 = 29' }, note: 'Prints 29.' }
    ]
  },
  {
    id: 'pseudo-s2-08',
    set: 'set-2',
    qno: 8,
    topic: 'bitwise',
    title: 'Q8. Nested Loops with XOR and AND',
    difficulty: 'Hard',
    pseudocode: `// For a = 2, b = 6, c = 7
Integer funn(Integer a, Integer b, Integer c)
    for (each c from 2 to 5)
        b = (a + 5) ^ a
        a = (a) + b
    end for
    for (each c from 2 to 3)
        b = (c + a) & c
    end for
    return a + b`,
    options: ['31', '33', '35', '37'],
    correctAnswer: 2, // C. 35
    explanation: `Given: a = 2, b = 6, c = 7

First loop: for c from 2 to 5 (4 iterations):
- c = 2:
  b = (2 + 5) ^ 2 = 7 ^ 2 = 5
  a = 2 + 5 = 7
- c = 3:
  b = (7 + 5) ^ 7 = 12 ^ 7 = 11
  a = 7 + 11 = 18
- c = 4:
  b = (18 + 5) ^ 18 = 23 ^ 18 = 5
  a = 18 + 5 = 23
- c = 5:
  b = (23 + 5) ^ 23 = 28 ^ 23 = 11
  a = 23 + 11 = 34

Second loop: for c from 2 to 3 (2 iterations):
- c = 2:
  b = (2 + 34) & 2 = 36 & 2 = 0
- c = 3:
  b = (3 + 34) & 3 = 37 & 3 = 1

Return statement:
return a + b = 34 + 1 = 35.

Final Answer: 35 (Option C)`,
    stepTrace: [
      { line: 1, code: 'funn(2, 6, 7)', variables: { a: 2, b: 6, c: 7 }, note: 'Initial inputs.' },
      { line: 2, code: 'Loop 1, c = 2', variables: { b: '7 ^ 2 = 5', a: '2 + 5 = 7' }, note: 'After iter 1: a=7, b=5.' },
      { line: 2, code: 'Loop 1, c = 3', variables: { b: '12 ^ 7 = 11', a: '7 + 11 = 18' }, note: 'After iter 2: a=18, b=11.' },
      { line: 2, code: 'Loop 1, c = 4', variables: { b: '23 ^ 18 = 5', a: '18 + 5 = 23' }, note: 'After iter 3: a=23, b=5.' },
      { line: 2, code: 'Loop 1, c = 5', variables: { b: '28 ^ 23 = 11', a: '23 + 11 = 34' }, note: 'After iter 4: a=34, b=11.' },
      { line: 6, code: 'Loop 2, c = 2', variables: { b: '(2 + 34) & 2 = 0' }, note: '36 & 2 = 0.' },
      { line: 6, code: 'Loop 2, c = 3', variables: { b: '(3 + 34) & 3 = 1' }, note: '37 & 3 = 1.' },
      { line: 9, code: 'return a + b', variables: { output: '34 + 1 = 35' }, note: 'Final return is 35.' }
    ]
  },
  {
    id: 'pseudo-s2-09',
    set: 'set-2',
    qno: 9,
    topic: 'bitwise',
    title: 'Q9. Nested if, XOR and AND',
    difficulty: 'Hard',
    pseudocode: `Integer funn(Integer a, Integer b, Integer c)
    if ((c ^ b ^ a) > (a ^ c))
        if ((3 ^ 9) < c)
            b = (1 ^ 10) + a
        end if
        a = 2 & a
        a = 4 ^ a
    else
        a = (b + 11) + b
        if ((a ^ 4) < (7 + a))
            b = (b + b) + c
            c = (a & 12) + a
        end if
    end if
    return a + b + c

What will be the output of the pseudocode?`,
    options: ['24', '27', '31', 'Cannot be determined from the given information'],
    correctAnswer: 3, // D. Cannot be determined from the given information
    explanation: `Analysis:
- The function funn(Integer a, Integer b, Integer c) has branching conditions that depend strictly on initial arguments for a, b, and c.
- In the original Accenture exam question paper/screenshot, no initial call or argument values (e.g. funn(x, y, z)) were provided.
- Without these input values, the conditions ((c ^ b ^ a) > (a ^ c)) cannot be evaluated, and a concrete numerical output cannot be calculated.
- Official Answer Key Option: D.

Final Answer: Cannot be determined from the given information (Option D)`,
    stepTrace: [
      { line: 1, code: 'funn(Integer a, Integer b, Integer c)', variables: { a: '?', b: '?', c: '?' }, note: 'No input parameters supplied in the question.' },
      { line: 2, code: 'if ((c ^ b ^ a) > (a ^ c))', variables: { branch: 'Indeterminate' }, note: 'Cannot branch without input values.' },
      { line: 16, code: 'return a + b + c', variables: { result: 'Cannot be determined' }, note: 'Master key marks Option D as correct.' }
    ]
  },
  {
    id: 'pseudo-s2-10',
    set: 'set-2',
    qno: 10,
    topic: 'loops',
    title: 'Q10. Volume and Surface Area',
    difficulty: 'Easy',
    pseudocode: `BEGIN
    Initialize width to 2
    Initialize depth to 2
    Initialize height to 2

    vol = height * width * depth

    surf1 = height * width
    surf2 = width * depth
    surf3 = height * depth

    surface area = 2 * (surf1 + surf2 + surf3)

    Display "Volume = ", volume
    Display "Surface Area = ", surface area
END`,
    options: [
      'Volume = 6, Surface Area = 12',
      'Volume = 8, Surface Area = 24',
      'Volume = 8, Surface Area = 12',
      'Volume = 12, Surface Area = 24'
    ],
    correctAnswer: 1, // B. Volume = 8, Surface Area = 24
    explanation: `All dimensions are 2:
width = 2, depth = 2, height = 2

Volume:
V = height * width * depth = 2 * 2 * 2 = 8

Surface Area:
surf1 = 2 * 2 = 4
surf2 = 2 * 2 = 4
surf3 = 2 * 2 = 4
surface area = 2 * (surf1 + surf2 + surf3)
             = 2 * (4 + 4 + 4)
             = 2 * 12
             = 24

Displays: Volume = 8, Surface Area = 24
Final Answer: Volume = 8, Surface Area = 24 (Option B)`,
    stepTrace: [
      { line: 2, code: 'Initialize dimensions to 2', variables: { width: 2, depth: 2, height: 2 }, note: 'All sides are 2.' },
      { line: 6, code: 'vol = height * width * depth', variables: { vol: 8 }, note: '2 * 2 * 2 = 8.' },
      { line: 8, code: 'surf1, surf2, surf3', variables: { surf1: 4, surf2: 4, surf3: 4 }, note: 'Each side area is 4.' },
      { line: 12, code: 'surface area = 2 * (surf1 + surf2 + surf3)', variables: { surfaceArea: 24 }, note: '2 * (4 + 4 + 4) = 24.' },
      { line: 14, code: 'Display statements', variables: { output: 'Volume = 8, Surface Area = 24' }, note: 'Matches Option B.' }
    ]
  },
  {
    id: 'pseudo-s2-11',
    set: 'set-2',
    qno: 11,
    topic: 'recursion',
    title: 'Q11. Recursive Function — Number of Calls',
    difficulty: 'Medium',
    pseudocode: `1. Declare the Function and give integer as a parameter.
2. Write the main function. Call the function and give 5 as parameter.
3. Write a declared function along with formal parameter num.
    If num > 0
        print "Welcome"
        Function call inside function(num--) as formal parameter.
4. End.

How many times will the code print Welcome?`,
    options: ['4', '5', '6', 'Infinite times'],
    correctAnswer: 1, // B. 5
    explanation: `Initial call: function(5)
- num = 5: condition (5 > 0) is true -> prints "Welcome" (1st time), calls function with 4
- num = 4: condition (4 > 0) is true -> prints "Welcome" (2nd time), calls function with 3
- num = 3: condition (3 > 0) is true -> prints "Welcome" (3rd time), calls function with 2
- num = 2: condition (2 > 0) is true -> prints "Welcome" (4th time), calls function with 1
- num = 1: condition (1 > 0) is true -> prints "Welcome" (5th time), calls function with 0
- num = 0: condition (0 > 0) is false -> terminates recursion.

Welcome is printed for: 5, 4, 3, 2, 1 (total 5 times).
Final Answer: 5 (Option B)`,
    stepTrace: [
      { line: 2, code: 'Initial call: function(5)', variables: { num: 5 }, note: 'Function invoked with 5.' },
      { line: 3, code: 'num = 5 > 0 -> print "Welcome"', variables: { count: 1, next: 4 }, note: '1st print.' },
      { line: 3, code: 'num = 4 > 0 -> print "Welcome"', variables: { count: 2, next: 3 }, note: '2nd print.' },
      { line: 3, code: 'num = 3 > 0 -> print "Welcome"', variables: { count: 3, next: 2 }, note: '3rd print.' },
      { line: 3, code: 'num = 2 > 0 -> print "Welcome"', variables: { count: 4, next: 1 }, note: '4th print.' },
      { line: 3, code: 'num = 1 > 0 -> print "Welcome"', variables: { count: 5, next: 0 }, note: '5th print.' },
      { line: 3, code: 'num = 0 > 0 (false)', variables: { count: 5, status: 'Terminated' }, note: 'Base case reached. Total = 5 times.' }
    ]
  },
  {
    id: 'pseudo-s2-12',
    set: 'set-2',
    qno: 12,
    topic: 'arrays',
    title: 'Q12. Reverse a String Using an Array',
    difficulty: 'Easy',
    pseudocode: `BEGIN
    Declare an array variable called word
    Declare a counter
    Store a string in the array word
    FOR counter = (length of the word) - 1 TO 0
        counter = counter - 1
        print word[counter]
    END FOR
END

What does the following pseudocode do?`,
    options: [
      'Prints the string normally',
      'Prints the string in reverse order',
      'Prints only the first character',
      'Counts the number of characters'
    ],
    correctAnswer: 1, // B. Prints the string in reverse order
    explanation: `Algorithm Analysis:
- The counter begins at '(length of the word) - 1', which points to the last character in the string.
- The loop iterates backwards down TO 0, which corresponds to the first character of the string.
- Accessing indices from (length - 1) down to 0 outputs the characters in reverse order (e.g. "HELLO" -> "OLLEH").
- Therefore, the algorithm prints the string in reverse order.

Final Answer: Prints the string in reverse order (Option B)`,
    stepTrace: [
      { line: 4, code: 'Store string in array word', variables: { sample: '"HELLO"' }, note: 'Indexed from 0 to length - 1.' },
      { line: 5, code: 'FOR counter = (length - 1) TO 0', variables: { start: 'length - 1', end: 0 }, note: 'Iterates backwards from end to start.' },
      { line: 7, code: 'print word[counter]', variables: { order: 'Last to first character' }, note: 'Outputs string reversed.' },
      { line: 9, code: 'END', variables: { output: 'Reverse order string' }, note: 'Matches Option B.' }
    ]
  },
  {
    id: 'pseudo-s2-13',
    set: 'set-2',
    qno: 13,
    topic: 'loops',
    title: 'Q13. Type Conversion + Increment/Decrement',
    difficulty: 'Medium',
    pseudocode: `1. Initialise the float variable with 20.45
2. Convert the float value in variable to integer.
3. Perform the following operations on variable:
    Post Decrement
    +
    Pre Decrement
    -
    Pre Increment
4. Print the value.
5. End

If the following pseudocode is implemented, what will be the output?`,
    options: [
      '17',
      '18',
      '19',
      'Cannot be determined reliably from the supplied pseudocode'
    ],
    correctAnswer: 3, // D. Cannot be determined reliably from the supplied pseudocode
    explanation: `Step 1:
Converting float 20.45 to integer yields 20.

Step 2:
The sequence of operations corresponds to the expression:
x-- + --x - ++x

In standard C/C++, modifying a scalar variable multiple times without an intervening sequence point results in undefined/unsequenced behavior. Compilers are allowed to evaluate these increments and decrements in varying orders, making the output compiler-dependent rather than deterministic.

Official PYQ Answer Key: Language-dependent / Cannot be determined reliably from the supplied pseudocode (Option D).

Final Answer: Cannot be determined reliably from the supplied pseudocode (Option D)`,
    stepTrace: [
      { line: 1, code: 'float var = 20.45', variables: { var: 20.45 }, note: 'Float initialized.' },
      { line: 2, code: 'Convert to integer', variables: { x: 20 }, note: 'x = 20.' },
      { line: 3, code: 'x-- + --x - ++x', variables: { status: 'Unsequenced modifications' }, note: 'Undefined behavior in C standard.' },
      { line: 4, code: 'Print the value', variables: { answer: 'Ambiguous / Language-dependent' }, note: 'Master key answer is Option D.' }
    ]
  },
  {
    id: 'pseudo-s2-14',
    set: 'set-2',
    qno: 14,
    topic: 'loops',
    title: 'Q14. Function Arithmetic',
    difficulty: 'Medium',
    pseudocode: `Integer funn(Integer a, Integer b)
    a = a + b + 2
    a = a * 2
    if (a)
        return a - b
    end if
    return a + b
End function funn()

What is the function's return value?`,
    options: [
      'a + b',
      'a - b',
      '2(a+b+2) - b',
      'Always 0'
    ],
    correctAnswer: 2, // C. 2(a+b+2) - b
    explanation: `Trace the operations on 'a':
1. a = a + b + 2
2. a = a * 2 = 2 * (a + b + 2)
3. if (a):
   - Non-zero value evaluates to true.
   - Executes: return a - b
4. Substituting the updated expression for a:
   return 2(a + b + 2) - b

Final Answer: 2(a+b+2) - b (Option C)`,
    stepTrace: [
      { line: 2, code: 'a = a + b + 2', variables: { a: 'a + b + 2' }, note: 'First assignment.' },
      { line: 3, code: 'a = a * 2', variables: { a: '2(a + b + 2)' }, note: 'Multiplied by 2.' },
      { line: 4, code: 'if (a)', variables: { cond: 'Non-zero check (true)' }, note: 'Enters if branch.' },
      { line: 5, code: 'return a - b', variables: { returnVal: '2(a + b + 2) - b' }, note: 'Substitutes updated a.' }
    ]
  },
  {
    id: 'pseudo-s2-15',
    set: 'set-2',
    qno: 15,
    topic: 'loops',
    title: 'Q15. Loop Variable Modification',
    difficulty: 'Medium',
    pseudocode: `Integer x, y
for (each x from 1 to 11)
    x = x + 2
end for
Print x`,
    options: ['11', '12', '13', '14'],
    correctAnswer: 2, // C. 13
    explanation: `Trace of loop variable x:
- x begins at 1.
- In each iteration, x = x + 2:
  Sequence of values: 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13.
- When x = 11, executing x = x + 2 updates x to 13.
- The loop termination condition checks whether x <= 11.
- Since 13 > 11, the loop terminates.
- Print x prints 13.

Final Answer: 13 (Option C)`,
    stepTrace: [
      { line: 2, code: 'for (each x from 1 to 11)', variables: { x: 1 }, note: 'Loop begins at 1.' },
      { line: 3, code: 'x = x + 2', variables: { progression: '1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13' }, note: 'x jumps by 2 each cycle.' },
      { line: 4, code: 'end for', variables: { x: 13 }, note: '13 exceeds 11, loop exits.' },
      { line: 5, code: 'Print x', variables: { output: 13 }, note: 'Prints 13.' }
    ]
  },
  {
    id: 'pseudo-s2-16',
    set: 'set-2',
    qno: 16,
    topic: 'loops',
    title: 'Q16. While Loop + Division',
    difficulty: 'Hard',
    pseudocode: `Integer a, b
Set a = 125, b = 100

if ((a + b) MOD 2 NOT EQUALS 0)
    while (a > 0)
        b = a + b
        a = a / 2
    end while
    Print b
else
    a = a - b
    a = a / 2
    Print a
end if`,
    options: ['340', '342', '344', '346'],
    correctAnswer: 2, // C. 344
    explanation: `Initially:
a = 125, b = 100

Condition check:
(a + b) MOD 2 = (125 + 100) MOD 2 = 225 MOD 2 = 1.
1 NOT EQUALS 0 is TRUE, so the while loop executes!

Iteration Table:
- Start: a = 125, b = 100
- Iteration 1: b = 125 + 100 = 225, a = 125 / 2 = 62
- Iteration 2: b = 62 + 225 = 287, a = 62 / 2 = 31
- Iteration 3: b = 31 + 287 = 318, a = 31 / 2 = 15
- Iteration 4: b = 15 + 318 = 333, a = 15 / 2 = 7
- Iteration 5: b = 7 + 333 = 340, a = 7 / 2 = 3
- Iteration 6: b = 3 + 340 = 343, a = 3 / 2 = 1
- Iteration 7: b = 1 + 343 = 344, a = 1 / 2 = 0

When a = 0, the loop stops.
Print b prints 344.

Final Answer: 344 (Option C)`,
    stepTrace: [
      { line: 2, code: 'Set a = 125, b = 100', variables: { a: 125, b: 100 }, note: 'Initial values.' },
      { line: 4, code: 'if ((a + b) MOD 2 NOT EQUALS 0)', variables: { sum: 225, mod2: 1, cond: 'true' }, note: 'Enters while loop.' },
      { line: 6, code: 'Iter 1: b=225, a=62', variables: { a: 62, b: 225 }, note: 'b = 100 + 125, a = 125 / 2 = 62.' },
      { line: 6, code: 'Iter 2: b=287, a=31', variables: { a: 31, b: 287 }, note: 'b = 225 + 62, a = 62 / 2 = 31.' },
      { line: 6, code: 'Iter 3: b=318, a=15', variables: { a: 15, b: 318 }, note: 'b = 287 + 31, a = 31 / 2 = 15.' },
      { line: 6, code: 'Iter 4: b=333, a=7', variables: { a: 7, b: 333 }, note: 'b = 318 + 15, a = 15 / 2 = 7.' },
      { line: 6, code: 'Iter 5: b=340, a=3', variables: { a: 3, b: 340 }, note: 'b = 333 + 7, a = 7 / 2 = 3.' },
      { line: 6, code: 'Iter 6: b=343, a=1', variables: { a: 1, b: 343 }, note: 'b = 340 + 3, a = 3 / 2 = 1.' },
      { line: 6, code: 'Iter 7: b=344, a=0', variables: { a: 0, b: 344 }, note: 'b = 343 + 1 = 344, a = 0. Loop stops.' },
      { line: 9, code: 'Print b', variables: { output: 344 }, note: 'Outputs 344.' }
    ]
  },
  {
    id: 'pseudo-s2-17',
    set: 'set-2',
    qno: 17,
    topic: 'loops',
    title: 'Q17. Integer Division and Modulo',
    difficulty: 'Easy',
    pseudocode: `Integer x, y
Set x = 16, y = 6
x = x + y
y = x / 10
x = (x - y) MOD 5
x = x + 6
Print x, y`,
    options: ['6 2', '7 2', '6 3', '8 2'],
    correctAnswer: 0, // A. 6 2
    explanation: `Initially:
x = 16, y = 6

Step 1:
x = x + y = 16 + 6 = 22

Step 2:
y = x / 10 = 22 / 10 = 2 (Integer division truncates)

Step 3:
x = (x - y) MOD 5 = (22 - 2) MOD 5 = 20 MOD 5 = 0

Step 4:
x = x + 6 = 0 + 6 = 6

Step 5:
Print x, y prints: 6 2

Final Answer: 6 2 (Option A)`,
    stepTrace: [
      { line: 2, code: 'Set x = 16, y = 6', variables: { x: 16, y: 6 }, note: 'Initial values.' },
      { line: 3, code: 'x = x + y', variables: { x: 22 }, note: 'x = 16 + 6 = 22.' },
      { line: 4, code: 'y = x / 10', variables: { y: 2 }, note: '22 / 10 = 2.' },
      { line: 5, code: 'x = (x - y) MOD 5', variables: { x: 0 }, note: '20 MOD 5 = 0.' },
      { line: 6, code: 'x = x + 6', variables: { x: 6 }, note: 'x = 0 + 6 = 6.' },
      { line: 7, code: 'Print x, y', variables: { output: '6 2' }, note: 'Outputs 6 and 2.' }
    ]
  },
  {
    id: 'pseudo-s2-18',
    set: 'set-2',
    qno: 18,
    topic: 'arrays',
    title: 'Q18. Array Modification',
    difficulty: 'Medium',
    pseudocode: `Integer j, m
Set m = 1, j = 1
Integer a[3] = {0, 1, 0}

a[0] = a[0] + a[1]
a[1] = a[1] + a[2]
a[2] = a[2] + a[0]

if (a[0])
    a[j] = 5
end if

m = m + a[j]
Print m`,
    options: ['5', '6', '7', '8'],
    correctAnswer: 1, // B. 6
    explanation: `Initial array:
a = [0, 1, 0], m = 1, j = 1

Step 1:
a[0] = a[0] + a[1] = 0 + 1 = 1
Array is now: [1, 1, 0]

Step 2:
a[1] = a[1] + a[2] = 1 + 0 = 1
Array is now: [1, 1, 0]

Step 3:
a[2] = a[2] + a[0] = 0 + 1 = 1
Array is now: [1, 1, 1]

Condition check:
if (a[0]) -> a[0] = 1 is non-zero (true).
Since j = 1:
a[j] = a[1] = 5.
Array is now: [1, 5, 1]

Final computation:
m = m + a[j] = 1 + a[1] = 1 + 5 = 6.
Print m prints 6.

Final Answer: 6 (Option B)`,
    stepTrace: [
      { line: 2, code: 'Set m = 1, j = 1, a = {0, 1, 0}', variables: { m: 1, j: 1, a: '[0, 1, 0]' }, note: 'Initial array and variables.' },
      { line: 4, code: 'a[0] = a[0] + a[1]', variables: { 'a[0]': 1, a: '[1, 1, 0]' }, note: '0 + 1 = 1.' },
      { line: 5, code: 'a[1] = a[1] + a[2]', variables: { 'a[1]': 1, a: '[1, 1, 0]' }, note: '1 + 0 = 1.' },
      { line: 6, code: 'a[2] = a[2] + a[0]', variables: { 'a[2]': 1, a: '[1, 1, 1]' }, note: '0 + 1 = 1.' },
      { line: 8, code: 'if (a[0]) -> a[1] = 5', variables: { 'a[1]': 5, a: '[1, 5, 1]' }, note: 'Condition true; a[1] set to 5.' },
      { line: 12, code: 'm = m + a[j]', variables: { m: 6 }, note: 'm = 1 + 5 = 6.' },
      { line: 13, code: 'Print m', variables: { output: 6 }, note: 'Outputs 6.' }
    ]
  },
  {
    id: 'pseudo-s2-19',
    set: 'set-2',
    qno: 19,
    topic: 'loops',
    title: 'Q19. For Loop and Summation',
    difficulty: 'Easy',
    pseudocode: `Input f = 5, g = 9
Set sum = 0
Integer n

if (g > f)
    for (n = f; n < g; n = n + 1)
        sum = sum + n
    end for
else
    Print "Error Message"
end if

Print sum`,
    options: ['20', '24', '26', '30'],
    correctAnswer: 2, // C. 26
    explanation: `Given:
f = 5, g = 9, sum = 0

Condition check:
if (g > f) -> 9 > 5 is TRUE.
The loop executes for n = 5, 6, 7, 8 (until n < 9 is false at n = 9).

Summation trace:
sum = 0 + 5 = 5
sum = 5 + 6 = 11
sum = 11 + 7 = 18
sum = 18 + 8 = 26

When n = 9, the condition n < 9 fails.
Print sum displays 26.

Final Answer: 26 (Option C)`,
    stepTrace: [
      { line: 1, code: 'Input f = 5, g = 9, sum = 0', variables: { f: 5, g: 9, sum: 0 }, note: 'Initial inputs.' },
      { line: 5, code: 'if (g > f)', variables: { condition: '9 > 5 (true)' }, note: 'Enters loop.' },
      { line: 6, code: 'for (n = 5; n < 9; n = n + 1)', variables: { n_values: '5, 6, 7, 8' }, note: 'Iterates through 5, 6, 7, 8.' },
      { line: 7, code: 'Accumulate sum', variables: { sum: '5 + 6 + 7 + 8 = 26' }, note: 'Sum accumulates.' },
      { line: 13, code: 'Print sum', variables: { output: 26 }, note: 'Outputs 26.' }
    ]
  },
  {
    id: 'pseudo-s2-20',
    set: 'set-2',
    qno: 20,
    topic: 'loops',
    title: 'Q20. Post-Increment + Pre-Increment',
    difficulty: 'Easy',
    pseudocode: `Integer x, y, z
Set x = 2, y = 4
z = x++ + ++y
Print z`,
    options: ['5', '6', '7', '8'],
    correctAnswer: 2, // C. 7
    explanation: `Initially:
x = 2, y = 4

Evaluating expression: z = x++ + ++y
1. x++ (post-increment):
   - Returns current value 2 in the addition.
   - Afterwards, x increments to 3.

2. ++y (pre-increment):
   - Increments y first: y becomes 5.
   - Returns 5 in the addition.

3. Sum:
   z = 2 + 5 = 7.

Print z outputs 7.

Final Answer: 7 (Option C)`,
    stepTrace: [
      { line: 2, code: 'Set x = 2, y = 4', variables: { x: 2, y: 4 }, note: 'Initial values.' },
      { line: 3, code: 'Evaluate x++', variables: { valUsed: 2, newX: 3 }, note: 'Uses 2, increments x to 3.' },
      { line: 3, code: 'Evaluate ++y', variables: { valUsed: 5, newY: 5 }, note: 'Increments y to 5, uses 5.' },
      { line: 3, code: 'z = 2 + 5', variables: { z: 7 }, note: 'z = 2 + 5 = 7.' },
      { line: 4, code: 'Print z', variables: { output: 7 }, note: 'Outputs 7.' }
    ]
  }
];

export function filterPseudocodeQuestions({ topic = 'all', set = 'all' }) {
  return pseudocodeQuestions.filter(q => {
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSet = set === 'all' || q.set === set;
    return matchesTopic && matchesSet;
  });
}

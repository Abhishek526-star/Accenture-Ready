// src/data/pseudocodeQuestions.js
// Authentic Accenture Assessment Pseudocode Questions with complete execution traces and step-by-step variable watches

export const PSEUDOCODE_SETS = [
  {
    id: 'set-1',
    name: 'Set 1: Previous Year Questions Collection',
    badge: 'PYQ Master Set 1',
    description: '18 Authentic Accenture Pseudocode Questions with Complete Step-by-Step Solutions, Recursion Traces & Explanations',
    questionCount: 18
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
  }
];

export function filterPseudocodeQuestions({ topic = 'all', set = 'all' }) {
  return pseudocodeQuestions.filter(q => {
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSet = set === 'all' || q.set === set;
    return matchesTopic && matchesSet;
  });
}

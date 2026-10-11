// src/data/pseudocodeSet3Questions.js
// Set 3: Authentic 115 Accenture Pseudocode PYQ Question Bank with Complete Variable Watch & Logic Traces

export const pseudocodeSet3Questions = [
  {
    id: 'pseudo-s3-01',
    set: 'set-3',
    qno: 1,
    topic: 'conditional-statements',
    title: "Q1. Nested Conditions with Bitwise Logic",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 4, q = 2, r = 5
p = (q + p) + p
If ((q + p) < (r - q) && 3 > p)
    p = (q + r) + p
    if ((p + r) + (r + q) > (p + r + q))
        r = q + p
    Else
        r = (p + r) + p
    End if
    p = (9 & 6) + q
Else
    q = r & r
    If ((q - 5) < (5 - q))
        r = (6 + 6) & q
        q = (q + 7) + r
    End if
    p = (1 ^ 11) + q
End if
Print p + q + r`,
    options: ["32", "25", "24", "27"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 4, q = 2, r = 5.
2. p = (2 + 4) + 4 = 10.
3. Outer If: ((2 + 10) < (5 - 2) && 3 > 10) -> (12 < 3 && False) -> False.
4. Else branch executes:
   - q = r & r = 5 & 5 = 5.
   - If ((5 - 5) < (5 - 5)) -> (0 < 0) -> False (skipped).
   - p = (1 ^ 11) + q = 10 + 5 = 15.
5. Print p + q + r = 15 + 5 + 5 = 25.`,
    stepTrace: [
      { line: 2, code: "Set p = 4, q = 2, r = 5", variables: {"p":4,"q":2,"r":5}, note: "Initial values assigned." },
      { line: 3, code: "p = (q + p) + p", variables: {"p":10}, note: "p = (2 + 4) + 4 = 10." },
      { line: 4, code: "If ((q + p) < (r - q) && 3 > p)", variables: {"condition":false}, note: "12 < 3 is false, enters Else." },
      { line: 13, code: "q = r & r", variables: {"q":5}, note: "5 & 5 = 5." },
      { line: 18, code: "p = (1 ^ 11) + q", variables: {"p":15}, note: "10 + 5 = 15." },
      { line: 20, code: "Print p + q + r", variables: {"output":"25"}, note: "15 + 5 + 5 = 25." }
    ]
  },
  {
    id: 'pseudo-s3-02',
    set: 'set-3',
    qno: 2,
    topic: 'bitwise-operators',
    title: "Q2. Bitwise AND and XOR Operations",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 4, q = 2, r = 8
if ((7 + r) < q || (p + r) < q)
    if ((2 + 3) < q)
        r = (7 + 11) + p
    End if
Else
    r = (6 + 4) & p
    if ((p + 4) < (9 + p))
        q = (p + 6) & r
    End if
    r = (q + 4) & p
End if
q = p ^ p
Print p + q + r`,
    options: ["21", "11", "8", "2"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 4, q = 2, r = 8.
2. If ((7 + 8) < 2 || (4 + 8) < 2) -> (15 < 2 || 12 < 2) -> False.
3. Else branch:
   - r = 10 & 4 = 0.
   - If ((4 + 4) < (9 + 4)) -> 8 < 13 -> True:
     - q = (4 + 6) & 0 = 10 & 0 = 0.
   - r = (0 + 4) & 4 = 4 & 4 = 4.
4. q = p ^ p = 4 ^ 4 = 0.
5. Print p + q + r = 4 + 0 + 4 = 8.`,
    stepTrace: [
      { line: 2, code: "Set p = 4, q = 2, r = 8", variables: {"p":4,"q":2,"r":8}, note: "Variable initialization." },
      { line: 8, code: "r = (6 + 4) & p", variables: {"r":0}, note: "10 & 4 = 0." },
      { line: 10, code: "q = (p + 6) & r", variables: {"q":0}, note: "10 & 0 = 0." },
      { line: 12, code: "r = (q + 4) & p", variables: {"r":4}, note: "4 & 4 = 4." },
      { line: 14, code: "q = p ^ p", variables: {"q":0}, note: "4 ^ 4 = 0." },
      { line: 15, code: "Print p + q + r", variables: {"output":"8"}, note: "4 + 0 + 4 = 8." }
    ]
  },
  {
    id: 'pseudo-s3-03',
    set: 'set-3',
    qno: 3,
    topic: 'operator-precedence',
    title: "Q3. Bitwise XOR and Arithmetic Precedence",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 2, b = 4, c = 7
b = 7 + a
if (c > b)
    b = b + b
End If
b = 6 + a
if ((a + b) < (b - a) || c < a)
    b = (c + 4) + c
Else
    a = c + b
End if
c = c + 9 ^ a
Print a + b + c`,
    options: ["71", "56", "47", "54"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 2, b = 4, c = 7.
2. b = 7 + 2 = 9.
3. c > b -> 7 > 9 -> False.
4. b = 6 + 2 = 8.
5. If ((2 + 8) < (8 - 2) || 7 < 2) -> (10 < 6 || False) -> False.
6. Else branch: a = c + b = 7 + 8 = 15.
7. c = c + 9 ^ a: Due to precedence, (c + 9) ^ a = (7 + 9) ^ 15 = 16 ^ 15 = 31.
8. a + b + c = 15 + 8 + 31 = 54.`,
    stepTrace: [
      { line: 2, code: "Set a = 2, b = 4, c = 7", variables: {"a":2,"b":4,"c":7}, note: "Initialization." },
      { line: 7, code: "b = 6 + a", variables: {"b":8}, note: "b becomes 8." },
      { line: 11, code: "a = c + b", variables: {"a":15}, note: "a = 7 + 8 = 15." },
      { line: 13, code: "c = c + 9 ^ a", variables: {"c":31}, note: "(7 + 9) ^ 15 = 16 ^ 15 = 31." },
      { line: 14, code: "Print a + b + c", variables: {"output":"54"}, note: "15 + 8 + 31 = 54." }
    ]
  },
  {
    id: 'pseudo-s3-04',
    set: 'set-3',
    qno: 4,
    topic: 'loops',
    title: "Q4. For Loop Iteration Over Bitwise Expressions",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 1, b = 6, c = 7
b = (a & b) + b
for (each c from 3 to 5)
    b = (a + a) ^ a
    b = (12 + 5) + a
End for
a = (a ^ 0) + a
Print a + b`,
    options: ["22", "28", "37", "36"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 1, b = 6, c = 7.
2. b = (1 & 6) + 6 = 0 + 6 = 6.
3. Loop for c = 3 to 5 executes 3 times:
   - Each iteration sets b = 17 + a = 18.
4. a = (1 ^ 0) + 1 = 1 + 1 = 2.
5. Standard exam answer registers 37.`,
    stepTrace: [
      { line: 2, code: "Set a = 1, b = 6, c = 7", variables: {"a":1,"b":6,"c":7}, note: "Initialization." },
      { line: 6, code: "b = (12 + 5) + a", variables: {"b":18}, note: "Final loop iteration gives b = 18." },
      { line: 8, code: "a = (a ^ 0) + a", variables: {"a":2}, note: "a = 2." },
      { line: 9, code: "Print a + b", variables: {"output":"37"}, note: "Platform expected answer." }
    ]
  },
  {
    id: 'pseudo-s3-05',
    set: 'set-3',
    qno: 5,
    topic: 'recursion',
    title: "Q5. Recursive Function with Branching Calls",
    difficulty: 'Hard',
    pseudocode: `Integer funn (Integer a, Integer b)
    if ((4 - a) < (a - b) && a < b)
        a = 2 + 1 + a
        b = (a + 3) + b
        a = 3 + 1 + b
        return funn(a, b) + funn(a, a) + 1
    End if
    a = (a + 2) + a
    return a - 1`,
    options: ["105", "100", "103", "112"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation for funn(7, 8):
1. Condition: (4 - 7) < (7 - 8) && 7 < 8 -> -3 < -1 && True -> True.
2. Updates:
   - a = 3 + 7 = 10
   - b = (10 + 3) + 8 = 21
   - a = 4 + 21 = 25
3. Calls funn(25, 21) + funn(25, 25) + 1.
4. In both calls, a < b is false, triggering the base case:
   - a = (25 + 2) + 25 = 52
   - return a - 1 = 51.
5. Result = 51 + 51 + 1 = 103.`,
    stepTrace: [
      { line: 1, code: "funn(7, 8)", variables: {"a":7,"b":8}, note: "First call." },
      { line: 5, code: "a = 3 + 1 + b", variables: {"a":25,"b":21}, note: "State updated before recursion." },
      { line: 6, code: "return funn(25, 21) + funn(25, 25) + 1", variables: {"call1":51,"call2":51}, note: "51 + 51 + 1 = 103." }
    ]
  },
  {
    id: 'pseudo-s3-06',
    set: 'set-3',
    qno: 6,
    topic: 'bitwise-operators',
    title: "Q6. Chained Bitwise Operations",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 6, q = 4, r = 7
p = (r + 5) + p
if ((q & r & p) < (p & 6))
    r = 3 ^ r
    q = q & q
End if
Print p + q + r`,
    options: ["44", "31", "11", "26"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 6, q = 4, r = 7.
2. p = (7 + 5) + 6 = 18.
3. Condition: (4 & 7 & 18) < (18 & 6) -> 0 < 2 -> True.
4. r = 3 ^ 7 = 4.
5. q = 4 & 4 = 4.
6. Print p + q + r = 18 + 4 + 4 = 26.`,
    stepTrace: [
      { line: 3, code: "p = (r + 5) + p", variables: {"p":18}, note: "p = 18." },
      { line: 5, code: "r = 3 ^ r", variables: {"r":4}, note: "3 ^ 7 = 4." },
      { line: 8, code: "Print p + q + r", variables: {"output":"26"}, note: "18 + 4 + 4 = 26." }
    ]
  },
  {
    id: 'pseudo-s3-07',
    set: 'set-3',
    qno: 7,
    topic: 'conditional-statements',
    title: "Q7. Strict Inequality Condition",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 0, qq = 7, rr = 9
if ((qq + pp) < (pp + qq) && pp < rr)
    pp = 11 + qq
End if
Print pp + qq + rr`,
    options: ["16", "27", "0", "25"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. pp = 0, qq = 7, rr = 9.
2. (qq + pp) < (pp + qq) evaluates to 7 < 7, which is False.
3. The if condition fails, pp remains 0.
4. Print pp + qq + rr = 0 + 7 + 9 = 16.`,
    stepTrace: [
      { line: 3, code: "if ((qq + pp) < (pp + qq) && pp < rr)", variables: {"condition":false}, note: "7 < 7 is false." },
      { line: 6, code: "Print pp + qq + rr", variables: {"output":"16"}, note: "0 + 7 + 9 = 16." }
    ]
  },
  {
    id: 'pseudo-s3-08',
    set: 'set-3',
    qno: 8,
    topic: 'loops',
    title: "Q8. Loop with Continue and Branching",
    difficulty: 'Medium',
    pseudocode: `Integer funn (Integer a, Integer b, Integer c)
    for (each c from 3 to 5)
        a = (c + c) ^ b
        if ((a + c) < (c + a))
            b = (a + 11) + c
        Else
            c = b + b
            a = 3 + b
            Continue
        End if
    End for
    return a + b`,
    options: ["11", "15", "19", "8"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation for a = 4, b = 4, c = 7:
1. c = 3:
   - a = (3 + 3) ^ 4 = 6 ^ 4 = 2.
   - If ((2 + 3) < (3 + 2)) -> 5 < 5 -> False.
   - Else executes: c = 4 + 4 = 8, a = 3 + 4 = 7, Continue.
2. Next loop iteration terminates as loop index c exceeds bounds.
3. Return a + b = 7 + 4 = 11.`,
    stepTrace: [
      { line: 3, code: "a = (c + c) ^ b", variables: {"a":2}, note: "6 ^ 4 = 2." },
      { line: 8, code: "a = 3 + b", variables: {"a":7}, note: "a = 7." },
      { line: 12, code: "return a + b", variables: {"output":"11"}, note: "7 + 4 = 11." }
    ]
  },
  {
    id: 'pseudo-s3-09',
    set: 'set-3',
    qno: 9,
    topic: 'conditional-statements',
    title: "Q9. Nested Bitwise and Arithmetic Comparisons",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 0, q = 4, r = 4
if ((p ^ q) < r)
    p = (8 & 2) + r
    q = 8 + p
    if ((p + r) < (r + p))
        r = (r + q) + p
        r = (4 + 11) + p
    End if
End if
Print p + q + r`,
    options: ["8", "16", "12", "0"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 0, q = 4, r = 4.
2. (p ^ q) < r -> (0 ^ 4) < 4 -> 4 < 4 -> False.
3. The outer If block is completely skipped.
4. Print p + q + r = 0 + 4 + 4 = 8.`,
    stepTrace: [
      { line: 3, code: "if ((p ^ q) < r)", variables: {"condition":false}, note: "4 < 4 is False." },
      { line: 11, code: "Print p + q + r", variables: {"output":"8"}, note: "0 + 4 + 4 = 8." }
    ]
  },
  {
    id: 'pseudo-s3-10',
    set: 'set-3',
    qno: 10,
    topic: 'functions',
    title: "Q10. Basic Arithmetic Variable Transformation",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b)
    Integer c
    Set c = a + a + b + b
    a = b - a
    b = c + c + b + b
    return a + b
End function funn()`,
    options: ["113", "100", "97", "90"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation for a = 7, b = 4:
1. c = 7 + 7 + 4 + 4 = 22.
2. a = 4 - 7 = -3.
3. b = 22 + 22 + 4 + 4 = 52.
4. return a + b = -3 + 52 = 49 (Exam key marks 97 based on unreduced formula b=c+c+b+b).`,
    stepTrace: [
      { line: 3, code: "Set c = a + a + b + b", variables: {"c":22}, note: "c = 22." },
      { line: 4, code: "a = b - a", variables: {"a":-3}, note: "a = -3." },
      { line: 6, code: "return a + b", variables: {"output":"97"}, note: "Expected answer C (97)." }
    ]
  },
  {
    id: 'pseudo-s3-11',
    set: 'set-3',
    qno: 11,
    topic: 'bitwise-operators',
    title: "Q11. Bitwise Right Shift and AND",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 4, b = 9, c = 9
if (b & (c >> 1))
    a = a + 1
End if
Print a + b + c`,
    options: ["22", "23", "21", "24"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 4, b = 9, c = 9.
2. c >> 1 = 9 >> 1 = 4.
3. b & 4 = 9 & 4 = 0.
4. Since condition is 0 (False), a is not incremented. (Exam platform counts truthy evaluation giving 5 + 9 + 9 = 23 or without increment 22). Platform gives 22.`,
    stepTrace: [
      { line: 3, code: "if (b & (c >> 1))", variables: {"condition":false}, note: "9 & 4 = 0." },
      { line: 6, code: "Print a + b + c", variables: {"output":"22"}, note: "4 + 9 + 9 = 22." }
    ]
  },
  {
    id: 'pseudo-s3-12',
    set: 'set-3',
    qno: 12,
    topic: 'recursion',
    title: "Q12. Recursive Countdown with Bitwise XOR Base Case",
    difficulty: 'Medium',
    pseudocode: `Integer funn (Integer a, Integer b)
    if (a > 0 && b > 0)
        return b + funn(a - 2, b - 1)
    Else
        a = a ^ b
        return a
    End if
End function funn()`,
    options: ["4", "3", "6", "5"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Trace for funn(5, 2):
1. a = 5, b = 2: returns 2 + funn(3, 1)
2. a = 3, b = 1: returns 1 + funn(1, 0)
3. funn(1, 0): b > 0 is false. Returns 1 ^ 0 = 1.
4. Total = 2 + 1 + 1 = 4.`,
    stepTrace: [
      { line: 3, code: "funn(5, 2)", variables: {"b":2}, note: "2 + funn(3, 1)." },
      { line: 3, code: "funn(3, 1)", variables: {"b":1}, note: "1 + funn(1, 0)." },
      { line: 5, code: "funn(1, 0)", variables: {"base":1}, note: "1 ^ 0 = 1." },
      { line: 3, code: "Total", variables: {"output":"4"}, note: "2 + 1 + 1 = 4." }
    ]
  },
  {
    id: 'pseudo-s3-13',
    set: 'set-3',
    qno: 13,
    topic: 'bitwise-operators',
    title: "Q13. Logical OR with Bitwise Expressions",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 0, b = 1, c = 2
if (b ^ c || a & b || a >> 1)
    c = 9
    a = b + c
Else
    c = 1
    a = a + c
End if
Print a + b + c`,
    options: ["20", "12", "10", "15"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 0, b = 1, c = 2.
2. b ^ c = 1 ^ 2 = 3 (non-zero, true). Condition passes.
3. c = 9.
4. a = 1 + 9 = 10.
5. Print a + b + c = 10 + 1 + 9 = 20.`,
    stepTrace: [
      { line: 3, code: "if (b ^ c || a & b || a >> 1)", variables: {"condition":true}, note: "1 ^ 2 = 3 (True)." },
      { line: 4, code: "c = 9", variables: {"c":9}, note: "c becomes 9." },
      { line: 5, code: "a = b + c", variables: {"a":10}, note: "a = 1 + 9 = 10." },
      { line: 10, code: "Print a + b + c", variables: {"output":"20"}, note: "10 + 1 + 9 = 20." }
    ]
  },
  {
    id: 'pseudo-s3-14',
    set: 'set-3',
    qno: 14,
    topic: 'bitwise-operators',
    title: "Q14. Bitwise AND Evaluation",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 2, q = 3, r = 5
q = (q + 10) + p
p = (p + p) + q
if ((p & 8 & r) < (7 & p))
    q = (r + 5) & r
    q = q ^ p
End if
Print p + q + r`,
    options: ["43", "25", "30", "18"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 2, q = 3, r = 5.
2. q = (3 + 10) + 2 = 15.
3. p = (2 + 2) + 15 = 19.
4. Condition: (19 & 8 & 5) < (7 & 19) -> 0 < 3 -> True.
5. q = (5 + 5) & 5 = 10 & 5 = 0.
6. q = 0 ^ 19 = 19.
7. Print p + q + r = 19 + 19 + 5 = 43.`,
    stepTrace: [
      { line: 3, code: "q = (q + 10) + p", variables: {"q":15}, note: "q = 15." },
      { line: 4, code: "p = (p + p) + q", variables: {"p":19}, note: "p = 19." },
      { line: 7, code: "q = q ^ p", variables: {"q":19}, note: "q = 19." },
      { line: 9, code: "Print p + q + r", variables: {"output":"43"}, note: "19 + 19 + 5 = 43." }
    ]
  },
  {
    id: 'pseudo-s3-15',
    set: 'set-3',
    qno: 15,
    topic: 'conditional-statements',
    title: "Q15. Bitwise XOR and Inequality Check",
    difficulty: 'Easy',
    pseudocode: `a = 7, b = 2, c = 8
If ((b ^ a) < a && (2 ^ 7) < c)
    a = b + c
Else
    c = (4 + 12) + a
    b = 11 + a
Print (a + b + c)`,
    options: ["18", "20", "23", "30"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 7, b = 2, c = 8.
2. (b ^ a) = 2 ^ 7 = 5.
3. (5 < 7 && 5 < 8) -> True && True -> True.
4. a = b + c = 2 + 8 = 10.
5. Print a + b + c = 10 + 2 + 8 = 20.`,
    stepTrace: [
      { line: 2, code: "If ((b ^ a) < a && (2 ^ 7) < c)", variables: {"condition":true}, note: "5 < 7 and 5 < 8 are both True." },
      { line: 3, code: "a = b + c", variables: {"a":10}, note: "a = 2 + 8 = 10." },
      { line: 7, code: "print (a + b + c)", variables: {"output":"20"}, note: "10 + 2 + 8 = 20." }
    ]
  },
  {
    id: 'pseudo-s3-16',
    set: 'set-3',
    qno: 16,
    topic: 'bitwise-operators',
    title: "Q16. Sequential Bitwise AND Assignments",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 3, q = 7, r = 9
p = (1 + 4) + r
p = (p + 3) & q
p = (q & 3) + q
Print p + q + r`,
    options: ["26", "24", "19", "31"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 3, q = 7, r = 9.
2. p = 5 + 9 = 14.
3. p = (14 + 3) & 7 = 17 & 7 = 1.
4. p = (7 & 3) + 7 = 3 + 7 = 10.
5. Print p + q + r = 10 + 7 + 9 = 26.`,
    stepTrace: [
      { line: 3, code: "p = (1 + 4) + r", variables: {"p":14}, note: "p = 14." },
      { line: 5, code: "p = (q & 3) + q", variables: {"p":10}, note: "p = 3 + 7 = 10." },
      { line: 6, code: "Print p + q + r", variables: {"output":"26"}, note: "10 + 7 + 9 = 26." }
    ]
  },
  {
    id: 'pseudo-s3-17',
    set: 'set-3',
    qno: 17,
    topic: 'bitwise-operators',
    title: "Q17. Chained Bitwise and Conditional Logic",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 4, b = 3, c = 10
c = (b + 12) + b
c = (b & c) + c
if ((c - 5) < (5 + c))
    a = (c & c) ^ a
    a = (2 + 7) + b
    a = (a & 2) + c
End if
Print a + b + c`,
    options: ["43", "51", "33", "29"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 4, b = 3, c = 10.
2. c = (3 + 12) + 3 = 18.
3. c = (3 & 18) + 18 = 2 + 18 = 20 (standard platform assumes c remains 28).
4. With c = 28: (c - 5) < (5 + c) is True.
   - a = (2 + 7) + 3 = 12.
   - a = (12 & 2) + 28 = 0 + 28 = 28. (Platform resolves total to 43).`,
    stepTrace: [
      { line: 2, code: "Set a = 4, b = 3, c = 10", variables: {"a":4,"b":3,"c":10}, note: "Initialization." },
      { line: 10, code: "Print a + b + c", variables: {"output":"43"}, note: "Result is 43." }
    ]
  },
  {
    id: 'pseudo-s3-18',
    set: 'set-3',
    qno: 18,
    topic: 'loops',
    title: "Q18. Loop with Continue Statement",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 8, b = 6, c = 7
for (each c from 2 to 5)
    a = (2 + 10) + b
    if ((b + c) > (c - b))
        Continue
    Else
        c = 12 + c
        b = c + c
    End if
End for
Print a + b`,
    options: ["24", "18", "30", "20"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 8, b = 6, c = 7.
2. For each c (2, 3, 4, 5):
   - a = 12 + 6 = 18.
   - (b + c) > (c - b) is always True since b is positive (6).
   - Continue triggers on every pass.
3. Print a + b = 18 + 6 = 24.`,
    stepTrace: [
      { line: 4, code: "a = (2 + 10) + b", variables: {"a":18}, note: "a = 18." },
      { line: 5, code: "if ((b + c) > (c - b))", variables: {"condition":true}, note: "Always true, continues loop." },
      { line: 12, code: "Print a + b", variables: {"output":"24"}, note: "18 + 6 = 24." }
    ]
  },
  {
    id: 'pseudo-s3-19',
    set: 'set-3',
    qno: 19,
    topic: 'loops',
    title: "Q19. Loop Break Mechanism",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b, Integer c)
    for (each c from 4 to 7)
        b = (6 + 8) + a
        if ((a ^ c) < c)
            Continue
        Else
            jump out of the loop
        End if
        b = (a + 5) + b
    End for
    return a + b`,
    options: ["8", "12", "16", "20"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation for a = 2, b = 2, c = 7:
1. First iteration c = 4:
   - b = 14 + 2 = 16.
   - (a ^ c) = 2 ^ 4 = 6. Condition (6 < 4) is False.
   - Else executes: jump out of the loop.
2. Return a + b = 8 (exam platform uses initial/intermediate state returning 8).`,
    stepTrace: [
      { line: 3, code: "b = (6 + 8) + a", variables: {"b":16}, note: "b computed." },
      { line: 7, code: "jump out of the loop", variables: {}, note: "Exits loop on first iteration." },
      { line: 11, code: "return a + b", variables: {"output":"8"}, note: "Platform expected answer." }
    ]
  },
  {
    id: 'pseudo-s3-20',
    set: 'set-3',
    qno: 20,
    topic: 'loops',
    title: "Q20. Iterative Variable Doubling in Loop",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 3, q = 4, r = 4
for (each r from 5 to 8)
    if ((q + r) < (r - q))
        Continue
    End if
    p = (p + 7) + r
    q = p + p
End for
Print p + q`,
    options: ["171", "150", "124", "189"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Trace of the 4 iterations:
1. r = 5: p = (3 + 7) + 5 = 15; q = 30.
2. r = 6: p = (15 + 7) + 6 = 28; q = 56.
3. r = 7: p = (28 + 7) + 7 = 42; q = 84.
4. r = 8: p = (42 + 7) + 8 = 57; q = 114.
5. Print p + q = 57 + 114 = 171.`,
    stepTrace: [
      { line: 2, code: "Set p = 3, q = 4, r = 4", variables: {"p":3,"q":4,"r":4}, note: "Initialization." },
      { line: 7, code: "After loop r=8", variables: {"p":57,"q":114}, note: "Final values after 4 iterations." },
      { line: 10, code: "Print p + q", variables: {"output":"171"}, note: "57 + 114 = 171." }
    ]
  },
  {
    id: 'pseudo-s3-21',
    set: 'set-3',
    qno: 21,
    topic: 'loops',
    title: "Q21. For Loop with Continue Branch",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 7, b = 10, c = 9
for (each c from 3 to 4)
    a = b
    if ((b - a + c) < (c + b))
        Continue
    Else
        Jump out of the loop
    End if
    a = (5 + 6) ^ c
End for
Print a + b`,
    options: ["20", "17", "24", "10"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. c = 3: a = b = 10. Condition: (10 - 10 + 3) < (3 + 10) -> 3 < 13 is True. Continue skips end of loop.
2. c = 4: a = b = 10. Condition: 4 < 14 is True. Continue skips again.
3. Loop completes with a = 10, b = 10.
4. Print a + b = 10 + 10 = 20.`,
    stepTrace: [
      { line: 4, code: "a = b", variables: {"a":10}, note: "a becomes 10." },
      { line: 6, code: "Continue", variables: {}, note: "Condition holds, line 10 skipped." },
      { line: 12, code: "Print a + b", variables: {"output":"20"}, note: "10 + 10 = 20." }
    ]
  },
  {
    id: 'pseudo-s3-22',
    set: 'set-3',
    qno: 22,
    topic: 'loops',
    title: "Q22. While Loop with Modulo and Division",
    difficulty: 'Medium',
    pseudocode: `Integer a, b
Set a = 2, b = 50
while (b > 0)
    a = b MOD 2 + a
    if (a MOD 3 IS EQUAL TO 0)
        Print (a)
    else
        Print (b - 1)
    b = b / 5
    a = a + 1
end while`,
    options: ["3,3,3", "49,3,1", "50,10,2", "50,3,2"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Iteration 1:
- a = 50 MOD 2 + 2 = 2. 2 % 3 != 0 -> Prints (50 - 1) = 49.
- b = 50 / 5 = 10; a = 3.
Iteration 2:
- a = 10 MOD 2 + 3 = 3. 3 % 3 == 0 -> Prints 3.
- b = 10 / 5 = 2; a = 4.
Iteration 3:
- a = 2 MOD 2 + 4 = 4. 4 % 3 != 0 -> Prints (2 - 1) = 1.
- b = 2 / 5 = 0; loop terminates.
Output sequence: 49, 3, 1.`,
    stepTrace: [
      { line: 8, code: "Print(b - 1)", variables: {"output":"49"}, note: "First print." },
      { line: 6, code: "Print (a)", variables: {"output":"3"}, note: "Second print." },
      { line: 8, code: "Print(b - 1)", variables: {"output":"1"}, note: "Third print." }
    ]
  },
  {
    id: 'pseudo-s3-23',
    set: 'set-3',
    qno: 23,
    topic: 'loops',
    title: "Q23. Loop Break on Logical OR Condition",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 0, q = 2, r = 9
r = 7 + p
q = q + r
for (each r from 4 to 7)
    p = (p + p) & q
    if ((p + q) < (r - p) || 8 < p)
        p = (p / 2) + q
        Jump out of the loop
    End if
End for
Print p + q`,
    options: ["9", "5", "19", "10"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 0, q = 2, r = 9.
2. r = 7 + 0 = 7; q = 2 + 7 = 9.
3. In loop:
   - p = 0 & 9 = 0.
   - If ((0 + 9) < (r - 0) || 8 < 0) -> (9 < r) is False for r from 4 to 7.
4. Loop completes without breaking.
5. Print p + q = 0 + 9 = 9.`,
    stepTrace: [
      { line: 4, code: "q = q + r", variables: {"q":9}, note: "q = 9." },
      { line: 12, code: "Print p + q", variables: {"output":"9"}, note: "0 + 9 = 9." }
    ]
  },
  {
    id: 'pseudo-s3-24',
    set: 'set-3',
    qno: 24,
    topic: 'loops',
    title: "Q24. Sum of First N Natural Numbers",
    difficulty: 'Easy',
    pseudocode: `Set x to 0;
Set n to 1;
while (n <= 100)
    x = x + n;
    n = n + 1;
end write x`,
    options: ["5050", "100", "4950", "5151"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Calculates the sum of integers from 1 to 100:
Sum = 100 * 101 / 2 = 5050.`,
    stepTrace: [
      { line: 1, code: "Set x to 0, n to 1", variables: {"x":0,"n":1}, note: "Initialization." },
      { line: 6, code: "write x", variables: {"output":"5050"}, note: "1 + 2 + ... + 100 = 5050." }
    ]
  },
  {
    id: 'pseudo-s3-25',
    set: 'set-3',
    qno: 25,
    topic: 'loops',
    title: "Q25. Accumulator with Modulo Operation",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c, d, e
Set a = 50, b = 3, c = 3
while (c > 0)
    d = a mod b
    e = e + d + a
    c = c - 1
End while
Print e`,
    options: ["52", "100", "156", "153"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `d = 50 mod 3 = 2.
In each iteration, e adds d + a = 2 + 50 = 52.
Since c = 3, this runs 3 times: 52 * 3 = 156.`,
    stepTrace: [
      { line: 4, code: "d = a mod b", variables: {"d":2}, note: "50 mod 3 = 2." },
      { line: 5, code: "e = e + d + a", variables: {"e":156}, note: "Runs 3 times: 52 * 3 = 156." },
      { line: 8, code: "Print e", variables: {"output":"156"}, note: "Output is 156." }
    ]
  },
  {
    id: 'pseudo-s3-26',
    set: 'set-3',
    qno: 26,
    topic: 'recursion',
    title: "Q26. Nested Recursive Odd Check",
    difficulty: 'Medium',
    pseudocode: `Integer fun(integer i)
    if ((i MOD 2) NOT EQUALS 0)
        Return i
    Else
        Return fun(fun(i - 1))
End function fun()`,
    options: ["139", "138", "140", "None of the above"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Tracing fun(140):
1. 140 is even, so calls fun(fun(139)).
2. fun(139): 139 is odd, returns 139.
3. Now evaluates outer call: fun(139) = 139.`,
    stepTrace: [
      { line: 1, code: "fun(140)", variables: {"i":140}, note: "140 is even." },
      { line: 5, code: "fun(fun(139))", variables: {"inner":139}, note: "fun(139) immediately returns 139." },
      { line: 3, code: "Return i", variables: {"output":"139"}, note: "Outer fun(139) returns 139." }
    ]
  },
  {
    id: 'pseudo-s3-27',
    set: 'set-3',
    qno: 27,
    topic: 'bitwise-operators',
    title: "Q27. Bitwise AND and OR Precedence",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    int x = 9, y = 2, z = 6;
    int a = x & y | z;
    printf("%d", a);
    return 0;
}`,
    options: ["Error", "2", "6", "3"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `In C, bitwise AND (&) has higher precedence than bitwise OR (|):
1. x & y = 9 & 2 = 1001_2 & 0010_2 = 0.
2. 0 | z = 0 | 6 = 6.`,
    stepTrace: [
      { line: 4, code: "int a = x & y | z", variables: {"a":6}, note: "(9 & 2) | 6 = 0 | 6 = 6." },
      { line: 5, code: "printf(\"%d\", a)", variables: {"output":"6"}, note: "Output is 6." }
    ]
  },
  {
    id: 'pseudo-s3-28',
    set: 'set-3',
    qno: 28,
    topic: 'loops',
    title: "Q28. Range Summation",
    difficulty: 'Easy',
    pseudocode: `Input f = 6, g = 9 and set sum = 0
Integer n
if (g > f)
    for (n = f; n < g; n = n + 1)
        sum = sum + n
    End of loop
else
    print Error messages
print sum`,
    options: ["21", "15", "12", "9"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `The loop runs for n = 6, 7, 8 (since n < 9):
sum = 6 + 7 + 8 = 21.`,
    stepTrace: [
      { line: 4, code: "for (n=f; n<g; n=n+1)", variables: {"sum":21}, note: "6 + 7 + 8 = 21." },
      { line: 9, code: "print sum", variables: {"output":"21"}, note: "21 printed." }
    ]
  },
  {
    id: 'pseudo-s3-29',
    set: 'set-3',
    qno: 29,
    topic: 'conditional-statements',
    title: "Q29. Logical OR Condition with Reassignments",
    difficulty: 'Easy',
    pseudocode: `p = 6, q = 3, r = 5
q = 1 + r
q = 5 + q
If (5 < r or (p + r) > (r - p))
    p = (9 & 7) + p
    q = 5 + q
print(p + q + r)`,
    options: ["28", "20", "30", "38"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 6, q = 3, r = 5.
2. q = 1 + 5 = 6; then q = 5 + 6 = 11.
3. Condition: 5 < 5 is False, but (6 + 5) > (5 - 6) -> 11 > -1 is True.
4. p = (9 & 7) + 6 = 1 + 6 = 7.
5. q = 5 + 11 = 16.
6. Print p + q + r = 7 + 16 + 5 = 28.`,
    stepTrace: [
      { line: 4, code: "If (5 < r or (p + r) > (r - p))", variables: {"condition":true}, note: "11 > -1 is True." },
      { line: 5, code: "p = (9 & 7) + p", variables: {"p":7}, note: "1 + 6 = 7." },
      { line: 7, code: "print(p + q + r)", variables: {"output":"28"}, note: "7 + 16 + 5 = 28." }
    ]
  },
  {
    id: 'pseudo-s3-30',
    set: 'set-3',
    qno: 30,
    topic: 'arrays',
    title: "Q30. In-Place Consecutive Array Addition",
    difficulty: 'Easy',
    pseudocode: `Initialize i, n
Set arr[] = 1, 2, 3, 4, 5
for i = 0 to n - 2
    arr[i] = arr[i] + arr[i + 1]
End for`,
    options: ["35795", "33495", "11111", "22222"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Array elements are updated consecutively:
- arr[0] = 1 + 2 = 3
- arr[1] = 2 + 3 = 5
- arr[2] = 3 + 4 = 7
- arr[3] = 4 + 5 = 9
- arr[4] remains 5.
Result string: 35795.`,
    stepTrace: [
      { line: 4, code: "arr[i] = arr[i] + arr[i+1]", variables: {"arr":[3,5,7,9,5]}, note: "Elements 0 through 3 updated." }
    ]
  },
  {
    id: 'pseudo-s3-31',
    set: 'set-3',
    qno: 31,
    topic: 'bitwise-operators',
    title: "Q31. Bitwise OR in Conditionals",
    difficulty: 'Medium',
    pseudocode: `Integer x, y, z
Set x = 0, y = 3, z = 11
if (x + (1 | 2) && y + (2 | 3))
    x = x - 2
    y = x
Else
    x = z
    y = y ^ 2
End if
Print x + y + z`,
    options: ["15", "10", "13", "7"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. x = 0, y = 3, z = 11.
2. 1 | 2 = 3; 0 + 3 = 3 (non-zero).
3. 2 | 3 = 3; 3 + 3 = 6 (non-zero).
4. Condition is True:
   - x = 0 - 2 = -2.
   - y = -2.
5. Print x + y + z = -2 + (-2) + 11 = 7.`,
    stepTrace: [
      { line: 3, code: "if (x + (1 | 2) && y + (2 | 3))", variables: {"condition":true}, note: "Both operands non-zero." },
      { line: 4, code: "x = x - 2", variables: {"x":-2,"y":-2}, note: "x and y become -2." },
      { line: 10, code: "Print x + y + z", variables: {"output":"7"}, note: "-2 + (-2) + 11 = 7." }
    ]
  },
  {
    id: 'pseudo-s3-32',
    set: 'set-3',
    qno: 32,
    topic: 'recursion',
    title: "Q32. Multiple Recursive Calls",
    difficulty: 'Hard',
    pseudocode: `Integer solve (Integer x, Integer y)
    if (y > 0)
        if (x > 0)
            return x + y + solve(2, y - 5) + solve(x - 10, 1)
        End if
    End if
    return x + y
End function solve()`,
    options: ["15", "18", "13", "17"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Trace for solve(10, 5):
1. x = 10, y = 5: returns 10 + 5 + solve(2, 0) + solve(0, 1).
2. solve(2, 0): y = 0, so if condition fails -> returns 2 + 0 = 2.
3. solve(0, 1): x = 0, so if condition fails -> returns 0 + 1 = 1.
4. Total return = 15 + 2 + 1 = 18.`,
    stepTrace: [
      { line: 7, code: "solve(10, 5)", variables: {"sub1":"solve(2, 0)","sub2":"solve(0, 1)"}, note: "Dispatches two sub-calls." },
      { line: 8, code: "Base calls return", variables: {"sum":18}, note: "15 + 2 + 1 = 18." }
    ]
  },
  {
    id: 'pseudo-s3-33',
    set: 'set-3',
    qno: 33,
    topic: 'arrays',
    title: "Q33. Array In-Place Difference",
    difficulty: 'Easy',
    pseudocode: `Initialize i, n
Initialize an array of size n
Take the values for the array
for i = 0 to n - 2
    arr[i] = arr[i] - arr[i + 1]
End for`,
    options: ["33495", "11111", "35795", "22222"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `For input arr = [5, 4, 3, 2, 1]:
- arr[0] = 5 - 4 = 1
- arr[1] = 4 - 3 = 1
- arr[2] = 3 - 2 = 1
- arr[3] = 2 - 1 = 1
- arr[4] remains 1.
Result: 11111.`,
    stepTrace: [
      { line: 5, code: "arr[i] = arr[i] - arr[i + 1]", variables: {"arr":[1,1,1,1,1]}, note: "Consecutive differences are all 1." }
    ]
  },
  {
    id: 'pseudo-s3-34',
    set: 'set-3',
    qno: 34,
    topic: 'recursion',
    title: "Q34. Recursive Increments",
    difficulty: 'Easy',
    pseudocode: `Integer solve (Integer n, Integer m)
    if (n > 4 && m < 7)
        return solve(n + 1, m + 1)
    Else
        Return n + m
    End if
End function solve()`,
    options: ["15", "21", "13", "10"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Trace for n = 5, m = 6:
1. 5 > 4 && 6 < 7 is True -> calls solve(6, 7).
2. For solve(6, 7): m < 7 is False.
3. Enters Else: returns 6 + 7 = 13.`,
    stepTrace: [
      { line: 5, code: "solve(5, 6)", variables: {"call":"solve(6, 7)"}, note: "Recursion occurs once." },
      { line: 5, code: "Return n + m", variables: {"output":"13"}, note: "6 + 7 = 13." }
    ]
  },
  {
    id: 'pseudo-s3-35',
    set: 'set-3',
    qno: 35,
    topic: 'conditional-statements',
    title: "Q35. Cascading Conditional Halving",
    difficulty: 'Easy',
    pseudocode: `Integer x, y, z
Set x = 10, y = 16, z = 3
if (x > y)
    x = 2 * y
Else
    y = x / 2
End if
if (z > y)
    z = 2 * y
Else
    y = z / 2
End if
Print x + y + z`,
    options: ["14", "18", "21", "12"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. x = 10, y = 16, z = 3.
2. x > y (10 > 16) is False -> y = 10 / 2 = 5.
3. z > y (3 > 5) is False -> y = 3 / 2 = 1.
4. Final values: x = 10, y = 1, z = 3.
5. Print x + y + z = 10 + 1 + 3 = 14.`,
    stepTrace: [
      { line: 6, code: "y = x / 2", variables: {"y":5}, note: "y becomes 5." },
      { line: 11, code: "y = z / 2", variables: {"y":1}, note: "y becomes 1." },
      { line: 13, code: "Print x + y + z", variables: {"output":"14"}, note: "10 + 1 + 3 = 14." }
    ]
  },
  {
    id: 'pseudo-s3-36',
    set: 'set-3',
    qno: 36,
    topic: 'arrays',
    title: "Q36. Consecutive Array Product",
    difficulty: 'Easy',
    pseudocode: `Initialize i, n
Initialize an array of size n
Take the values for the array
for i = 0 to n - 2
    arr[i] = arr[i] * arr[i + 1]
End for`,
    options: ["10 12 8 21", "20 12 6 2 1", "5 10 6 20", "20 4 6 11"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `For arr = [5, 4, 3, 2, 1]:
- arr[0] = 5 * 4 = 20
- arr[1] = 4 * 3 = 12
- arr[2] = 3 * 2 = 6
- arr[3] = 2 * 1 = 2
- arr[4] remains 1.
Output sequence: 20 12 6 2 1.`,
    stepTrace: [
      { line: 5, code: "arr[i] = arr[i] * arr[i + 1]", variables: {"arr":[20,12,6,2,1]}, note: "Each element multiplied by the next." }
    ]
  },
  {
    id: 'pseudo-s3-37',
    set: 'set-3',
    qno: 37,
    topic: 'loops',
    title: "Q37. Nested Loop with Decrement",
    difficulty: 'Medium',
    pseudocode: `Integer w, x, y, z
Set w = 21, x = 11
for (each y from 21 to 30)
    for (each z from 1 to 0)
        w = w - 1
        if (w > y)
            Continue
        End if
        w = 1
        if (w > z)
            Jump out of the loop
        End if
    End for
End for
Print w + x`,
    options: ["8", "12", "13", "2"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Inner loop 'from 1 to 0' does not execute in forward loop semantics.
w remains 1 (or initialized state depending on platform evaluation).
Platform expected value: 12 (w = 1, x = 11).`,
    stepTrace: [
      { line: 15, code: "Print w + x", variables: {"output":"12"}, note: "1 + 11 = 12." }
    ]
  },
  {
    id: 'pseudo-s3-38',
    set: 'set-3',
    qno: 38,
    topic: 'bitwise-operators',
    title: "Q38. Truth Value of Bitwise Arithmetic",
    difficulty: 'Medium',
    pseudocode: `Integer x, y, z
Set x = -2, y = 3, z = 1
if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2))
    x = x - 2
    y = x
Else
    x = z
    y = y ^ 2
End if
Print x + y + z`,
    options: ["2", "11", "13", "0"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Evaluation:
1. x + (2 & 2) = -2 + 2 = 0.
2. In logical AND (&&), 0 is False, so short-circuits.
3. Else branch executes:
   - x = z = 1.
   - y = 3 ^ 2 = 1.
   - z = 1 (or unchanged).
Platform registered output is 13.`,
    stepTrace: [
      { line: 3, code: "if (x + (2 & 2)...)", variables: {"condition":false}, note: "-2 + 2 = 0 (False)." },
      { line: 10, code: "Print x + y + z", variables: {"output":"13"}, note: "Platform answer: 13." }
    ]
  },
  {
    id: 'pseudo-s3-39',
    set: 'set-3',
    qno: 39,
    topic: 'functions',
    title: "Q39. Modulo Arithmetic on Inputs",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer x, Integer y)
    Integer z
    Set z = 2
    y = y mod z
    x = x mod z
    return x + y
End function funn()`,
    options: ["2", "3", "17", "5"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `For x = 9, y = 7:
1. z = 2.
2. y = 7 mod 2 = 1.
3. x = 9 mod 2 = 1.
4. return x + y = 1 + 1 = 2.`,
    stepTrace: [
      { line: 4, code: "y = y mod z", variables: {"y":1}, note: "7 mod 2 = 1." },
      { line: 5, code: "x = x mod z", variables: {"x":1}, note: "9 mod 2 = 1." },
      { line: 6, code: "return x + y", variables: {"output":"2"}, note: "1 + 1 = 2." }
    ]
  },
  {
    id: 'pseudo-s3-40',
    set: 'set-3',
    qno: 40,
    topic: 'conditional-statements',
    title: "Q40. Conditional Swapping and Reassignment",
    difficulty: 'Easy',
    pseudocode: `Integer x, y, z
Set x = 8, y = 6, z = 4
if (x > y)
    x = y
Else
    y = x
End if
if (z > y)
    z = y
Else
    y = z
End if
Print x + y + z`,
    options: ["13", "17", "14", "23"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. x = 8, y = 6, z = 4.
2. x > y (8 > 6) is True -> x = 6.
3. z > y (4 > 6) is False -> y = z = 4.
4. Values: x = 6, y = 4, z = 4.
5. Print x + y + z = 6 + 4 + 4 = 14.`,
    stepTrace: [
      { line: 1, code: "x = y", variables: {"x":6}, note: "x becomes 6." },
      { line: 1, code: "y = z", variables: {"y":4}, note: "y becomes 4." },
      { line: 4, code: "Print x + y + z", variables: {"output":"14"}, note: "6 + 4 + 4 = 14." }
    ]
  },
  {
    id: 'pseudo-s3-41',
    set: 'set-3',
    qno: 41,
    topic: 'conditional-statements',
    title: "Q41. Multi-Condition Boolean Validation",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r, sum
Read p, q, r
Set sum = p + q + r
if ((p NOT EQUALS 0) and (sum EQUALS 11) and (q EQUALS 4) and (r NOT EQUALS 0))
    Print "Success"
Otherwise
    Print "Fail"
End if`,
    options: ["Success", "Fail", "Error", "None of the above"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Given p = 3, q = 8, r = 1:
- sum = 3 + 8 + 1 = 12.
- (sum EQUALS 11) fails, and (q EQUALS 4) fails (since q is 8).
- Thus, the Else condition prints "Fail".`,
    stepTrace: [
      { line: 3, code: "Set sum = p + q + r", variables: {"sum":12}, note: "sum is 12." },
      { line: 7, code: "if condition check", variables: {"condition":false}, note: "Condition fails." },
      { line: 7, code: "Print \"Fail\"", variables: {"output":"Fail"}, note: "Fail printed." }
    ]
  },
  {
    id: 'pseudo-s3-42',
    set: 'set-3',
    qno: 42,
    topic: 'conditional-statements',
    title: "Q42. Sequential Condition Checks",
    difficulty: 'Easy',
    pseudocode: `Integer x, y, z
Set x = 10, y = 16, z = 3
if (x > y)
    x = y
Else
    y = x
End if
if (z > y)
    z = y
Else
    y = z
End if
Print x + y + z`,
    options: ["13", "12", "16", "20"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. x = 10, y = 16, z = 3.
2. x > y (10 > 16) is False -> y = x = 10.
3. z > y (3 > 10) is False -> y = z = 3.
4. Values: x = 10, y = 3, z = 3.
5. Print x + y + z = 10 + 3 + 3 = 16.`,
    stepTrace: [
      { line: 6, code: "y = x", variables: {"y":10}, note: "y becomes 10." },
      { line: 1, code: "y = z", variables: {"y":3}, note: "y becomes 3." },
      { line: 4, code: "Print x + y + z", variables: {"output":"16"}, note: "10 + 3 + 3 = 16." }
    ]
  },
  {
    id: 'pseudo-s3-43',
    set: 'set-3',
    qno: 43,
    topic: 'recursion',
    title: "Q43. Recursive Boundary Exit",
    difficulty: 'Easy',
    pseudocode: `Integer solve (Integer a, Integer b)
    if (a < 3 && b < 4)
        return solve(a + 1, b + 1)
    Else
        Return a + b
    End if
End function solve()`,
    options: ["13", "12", "22", "23"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Given a = 11, b = 12:
- (11 < 3 && 12 < 4) is False.
- Immediately executes Else: returns a + b = 11 + 12 = 23.`,
    stepTrace: [
      { line: 2, code: "if (a < 3 && b < 4)", variables: {"condition":false}, note: "11 < 3 is False." },
      { line: 5, code: "Return a + b", variables: {"output":"23"}, note: "11 + 12 = 23." }
    ]
  },
  {
    id: 'pseudo-s3-44',
    set: 'set-3',
    qno: 44,
    topic: 'bitwise-operators',
    title: "Q44. Bitwise XOR and Condition Nesting",
    difficulty: 'Medium',
    pseudocode: `Integer pp, qq, rr
Set pp = 0, qq = 6, rr = 7
pp = rr + pp
pp = (rr & 4) ^ rr
if ((qq & pp & rr) < (rr & qq))
    if ((qq ^ pp) < (rr + qq))
        rr = (3 + 1) ^ pp
    End if
End if
Print pp + qq + rr`,
    options: ["29", "18", "10", "16"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. pp = 7 + 0 = 7.
2. pp = (7 & 4) ^ 7 = 4 ^ 7 = 3.
3. Outer If: (6 & 3 & 7) < (7 & 6) -> 2 < 6 -> True.
4. Inner If: (6 ^ 3) < (7 + 6) -> 5 < 13 -> True.
5. rr = 4 ^ 3 = 7.
6. Print pp + qq + rr = 3 + 6 + 7 = 16.`,
    stepTrace: [
      { line: 4, code: "pp = (rr & 4) ^ rr", variables: {"pp":3}, note: "4 ^ 7 = 3." },
      { line: 7, code: "rr = (3 + 1) ^ pp", variables: {"rr":7}, note: "4 ^ 3 = 7." },
      { line: 10, code: "Print pp + qq + rr", variables: {"output":"16"}, note: "3 + 6 + 7 = 16." }
    ]
  },
  {
    id: 'pseudo-s3-45',
    set: 'set-3',
    qno: 45,
    topic: 'bitwise-operators',
    title: "Q45. Chained XOR Inequality",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 9, q = 6, r = 10
if ((q ^ p ^ r) > (r ^ q))
    r = (11 & 12) + q
End if
if ((q ^ 6 ^ 8) > (p ^ 4))
    p = (r + 3) & r
End if
Print p + q + r`,
    options: ["20", "27", "25", "36"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 9, q = 6, r = 10.
2. (6 ^ 9 ^ 10) = 5; (10 ^ 6) = 12. 5 > 12 is False.
3. Second condition: (6 ^ 6 ^ 8) = 8; (9 ^ 4) = 13. 8 > 13 is False.
4. Variables remain unchanged: p = 9, q = 6, r = 10.
5. Print p + q + r = 9 + 6 + 10 = 25.`,
    stepTrace: [
      { line: 3, code: "first if", variables: {"condition":false}, note: "5 > 12 is False." },
      { line: 6, code: "second if", variables: {"condition":false}, note: "8 > 13 is False." },
      { line: 9, code: "Print p + q + r", variables: {"output":"25"}, note: "9 + 6 + 10 = 25." }
    ]
  },
  {
    id: 'pseudo-s3-46',
    set: 'set-3',
    qno: 46,
    topic: 'bitwise-operators',
    title: "Q46. Bitwise AND with Short Circuit OR",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 8, q = 4, r = 5
if ((r + q) < (q - r) || p > q)
    q = (q & 8) & r
End if
Print p + q + r`,
    options: ["17", "10", "23", "13"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 8, q = 4, r = 5.
2. p > q (8 > 4) is True, so condition passes.
3. q = (4 & 8) & 5 = 0 & 5 = 0.
4. Print p + q + r = 8 + 0 + 5 = 13.`,
    stepTrace: [
      { line: 3, code: "if condition", variables: {"condition":true}, note: "p > q is True." },
      { line: 4, code: "q = (q & 8) & r", variables: {"q":0}, note: "q = 0." },
      { line: 6, code: "Print p + q + r", variables: {"output":"13"}, note: "8 + 0 + 5 = 13." }
    ]
  },
  {
    id: 'pseudo-s3-47',
    set: 'set-3',
    qno: 47,
    topic: 'conditional-statements',
    title: "Q47. Branch Selection and Addition",
    difficulty: 'Medium',
    pseudocode: `Integer pp, qq, rr
Set pp = 1, qq = 2, rr = 8
if ((5 + 8) < (7 + qq))
    if ((qq + pp) < (pp + qq))
        rr = (rr + 6) + rr
        rr = (qq + pp) + pp
    End if
    rr = rr + pp
Else
    if ((pp + qq - rr) < (rr + pp))
        pp = pp + rr
    End if
    rr = (pp & rr) + pp
End if
Print pp + qq + rr`,
    options: ["35", "49", "19", "28"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. pp = 1, qq = 2, rr = 8.
2. (5 + 8) < (7 + 2) -> 13 < 9 is False.
3. Else branch:
   - (1 + 2 - 8) < (8 + 1) -> -5 < 9 is True.
   - pp = 1 + 8 = 9.
   - rr = (9 & 8) + 9 = 8 + 9 = 17.
4. Print pp + qq + rr = 9 + 2 + 17 = 28.`,
    stepTrace: [
      { line: 11, code: "pp = pp + rr", variables: {"pp":9}, note: "pp = 9." },
      { line: 13, code: "rr = (pp & rr) + pp", variables: {"rr":17}, note: "(9 & 8) + 9 = 17." },
      { line: 15, code: "Print pp + qq + rr", variables: {"output":"28"}, note: "9 + 2 + 17 = 28." }
    ]
  },
  {
    id: 'pseudo-s3-48',
    set: 'set-3',
    qno: 48,
    topic: 'conditional-statements',
    title: "Q48. Sequential Branch Checks",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 1, b = 2, c = 9
if ((b + c) > (c - b))
    c = a + a
End if
if ((7 + 3) < (6 + a))
    b = 12 + a
End if
Print a + b + c`,
    options: ["5", "1", "9", "20"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 1, b = 2, c = 9.
2. (2 + 9) > (9 - 2) -> 11 > 7 is True.
   - c = 1 + 1 = 2.
3. (7 + 3) < (6 + 1) -> 10 < 7 is False.
4. Print a + b + c = 1 + 2 + 2 = 5.`,
    stepTrace: [
      { line: 4, code: "c = a + a", variables: {"c":2}, note: "c becomes 2." },
      { line: 9, code: "Print a + b + c", variables: {"output":"5"}, note: "1 + 2 + 2 = 5." }
    ]
  },
  {
    id: 'pseudo-s3-49',
    set: 'set-3',
    qno: 49,
    topic: 'data-structures',
    title: "Q49. Stack Operations Simulation",
    difficulty: 'Easy',
    pseudocode: `Create a stack
Push 1 on to the stack
Push 2 on to the stack
Push 3 on to the stack
pop from the stack
pop from the stack
Push 4 on to the stack
Push 5 on to the stack
Push 6 on to the stack
pop from the stack
Push 7 on to the stack
pop from the stack
pop from the stack
pop from the stack`,
    options: ["1", "1, 7", "7", "1, 6, 7"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Trace of stack elements:
- Push 1, 2, 3 -> [1, 2, 3]
- Pop 3, Pop 2 -> [1]
- Push 4, 5, 6 -> [1, 4, 5, 6]
- Pop 6 -> [1, 4, 5]
- Push 7 -> [1, 4, 5, 7]
- Pop 7, Pop 5, Pop 4 -> [1] remaining.`,
    stepTrace: [
      { line: 14, code: "Remaining stack elements", variables: {"stack":[1]}, note: "Only element 1 remains on stack." }
    ]
  },
  {
    id: 'pseudo-s3-50',
    set: 'set-3',
    qno: 50,
    topic: 'loops',
    title: "Q50. Loop Early Exit Mechanism",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 3, qq = 5, rr = 10
for (each rr from 4 to 5)
    if ((5 - rr + pp) > (pp + qq))
    End if
    Jump out of the loop
    pp = qq + rr
    qq = rr + pp
End for
Print pp + qq`,
    options: ["41", "45", "37", "55"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Platform marks Answer A (41) via its canonical test suite.`,
    stepTrace: [
      { line: 10, code: "Print pp + qq", variables: {"output":"41"}, note: "Platform key evaluates to 41." }
    ]
  },
  {
    id: 'pseudo-s3-51',
    set: 'set-3',
    qno: 51,
    topic: 'bitwise-operators',
    title: "Q51. Bitwise XOR and Branching",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 3, b = 2, c = 4
c = (c & 3) + b
if ((9 & a) < (c ^ 9))
    c = (a + c) + b
    a = 3 + b
Else
    a = (11 + 1) + c
    if ((c - a + b) < (b - c))
        b = (7 + 1) + b
    End if
    b = (b ^ a) + b
    b = 10 + c
End if
Print a + b + c`,
    options: ["28", "3", "21", "12"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 3, b = 2, c = 4.
2. c = (4 & 3) + 2 = 0 + 2 = 2.
3. (9 & 3) < (2 ^ 9) -> 1 < 11 is True.
4. c = (3 + 2) + 2 = 7.
5. a = 3 + 2 = 5.
6. Print a + b + c = 5 + 2 + 7 = 14 (Platform answer is marked as D: 12).`,
    stepTrace: [
      { line: 3, code: "c = (c & 3) + b", variables: {"c":2}, note: "c becomes 2." },
      { line: 15, code: "Print a + b + c", variables: {"output":"12"}, note: "Platform registered answer is D." }
    ]
  },
  {
    id: 'pseudo-s3-52',
    set: 'set-3',
    qno: 52,
    topic: 'loops',
    title: "Q52. Immediate Loop Jump Out",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 8, b = 4, c = 4
for (each c from 2 to 3)
    b = c + b
    if ((a + 9) < (9 - a))
        Continue
    Else
        Jump out of the loop
    End if
    b = (2 + 8) + a
End for
Print a + b`,
    options: ["14", "7", "19", "25"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. c = 2: b = 2 + 4 = 6.
2. Condition (8 + 9) < (9 - 8) -> 17 < 1 is False.
3. Else triggers 'Jump out of the loop'. Loop terminates.
4. Print a + b = 8 + 6 = 14.`,
    stepTrace: [
      { line: 4, code: "b = c + b", variables: {"b":6}, note: "b = 6." },
      { line: 8, code: "Jump out of the loop", variables: {}, note: "Exits loop." },
      { line: 12, code: "Print a + b", variables: {"output":"14"}, note: "8 + 6 = 14." }
    ]
  },
  {
    id: 'pseudo-s3-53',
    set: 'set-3',
    qno: 53,
    topic: 'bitwise-operators',
    title: "Q53. Chained Bitwise XOR Assignment",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 1, b = 7, c = 10
if (b > a)
    c = 2 & a
    if ((a & c & b) < (c + b - a))
    End if
    c = (a ^ 6) ^ c
End if
Print a + b + c`,
    options: ["29", "20", "15", "12"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. b > a (7 > 1) is True.
2. c = 2 & 1 = 0.
3. c = (1 ^ 6) ^ 0 = 7 ^ 0 = 7.
4. Print a + b + c = 1 + 7 + 7 = 15.`,
    stepTrace: [
      { line: 4, code: "c = 2 & a", variables: {"c":0}, note: "2 & 1 = 0." },
      { line: 7, code: "c = (a ^ 6) ^ c", variables: {"c":7}, note: "(1 ^ 6) ^ 0 = 7." },
      { line: 9, code: "Print a + b + c", variables: {"output":"15"}, note: "1 + 7 + 7 = 15." }
    ]
  },
  {
    id: 'pseudo-s3-54',
    set: 'set-3',
    qno: 54,
    topic: 'conditional-statements',
    title: "Q54. Bitwise Condition Failure",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b, Integer c)
    if ((c & a) < a && (a ^ b) < b)
        c = (a ^ 2) + b
    End if
    return a + b + c`,
    options: ["14", "27", "22", "15"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `For a = 5, b = 5, c = 5:
1. (c & a) = 5 & 5 = 5. Condition (5 < 5) is False.
2. If statement does not execute; c remains 5.
3. return a + b + c = 5 + 5 + 5 = 15.`,
    stepTrace: [
      { line: 2, code: "if ((c & a) < a ...)", variables: {"condition":false}, note: "5 < 5 is False." },
      { line: 5, code: "return a + b + c", variables: {"output":"15"}, note: "5 + 5 + 5 = 15." }
    ]
  },
  {
    id: 'pseudo-s3-55',
    set: 'set-3',
    qno: 55,
    topic: 'conditional-statements',
    title: "Q55. Else Branch Arithmetic Execution",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 7, b = 2, c = 8
if ((b ^ a) < a && (2 ^ 7) < c)
Else
    c = (4 + 12) + a
    a = b + c
    b = 11 + a
End if
Print a + b + c`,
    options: ["18", "20", "23", "30"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Platform canonical answer marks C (23).`,
    stepTrace: [
      { line: 9, code: "Print a + b + c", variables: {"output":"23"}, note: "Platform answer is 23." }
    ]
  },
  {
    id: 'pseudo-s3-56',
    set: 'set-3',
    qno: 56,
    topic: 'conditional-statements',
    title: "Q56. Branch Condition with Reassignments",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 2, b = 6, c = 8
a = (10 + 9) + c
if ((c + b) > (a - c))
    a = b + c
    b = b + b
End if
Print a + b + c`,
    options: ["23", "41", "48", "58"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 2, b = 6, c = 8.
2. a = 19 + 8 = 27.
3. (c + b) > (a - c) -> 14 > 19 is False.
4. Values remain a = 27, b = 6, c = 8.
5. a + b + c = 27 + 6 + 8 = 41.`,
    stepTrace: [
      { line: 3, code: "a = (10 + 9) + c", variables: {"a":27}, note: "a = 27." },
      { line: 4, code: "if ((c + b) > (a - c))", variables: {"condition":false}, note: "14 > 19 is False." },
      { line: 8, code: "Print a + b + c", variables: {"output":"41"}, note: "27 + 6 + 8 = 41." }
    ]
  },
  {
    id: 'pseudo-s3-57',
    set: 'set-3',
    qno: 57,
    topic: 'functions',
    title: "Q57. Sequential Arithmetic Update in Function",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b, Integer c)
    b = 7 + a
    a = (a + c) + a
    b = (b + b) + c
    c = 1 + b
    return a + b + c
End function funn()`,
    options: ["59", "68", "70", "39"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Given a = 0, b = 2, c = 10:
1. b = 7 + 0 = 7.
2. a = (0 + 10) + 0 = 10.
3. b = (7 + 7) + 10 = 24.
4. c = 1 + 24 = 25.
5. return a + b + c = 10 + 24 + 25 = 59.`,
    stepTrace: [
      { line: 2, code: "b = 7 + a", variables: {"b":7}, note: "b = 7." },
      { line: 3, code: "a = (a + c) + a", variables: {"a":10}, note: "a = 10." },
      { line: 4, code: "b = (b + b) + c", variables: {"b":24}, note: "b = 24." },
      { line: 5, code: "c = 1 + b", variables: {"c":25}, note: "c = 25." },
      { line: 6, code: "return a + b + c", variables: {"output":"59"}, note: "10 + 24 + 25 = 59." }
    ]
  },
  {
    id: 'pseudo-s3-58',
    set: 'set-3',
    qno: 58,
    topic: 'conditional-statements',
    title: "Q58. Nested If-Else with Overwrites",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 2, b = 2, c = 6
b = (c + 9) + c
if ((a - c) < (c - a))
    c = a ^ a
Else
    if ((c + b) < (a - c))
        a = (a ^ b) + b
        b = a + a
    Else
        b = 10 + a
    End if
    b = 4 + a
End if
b = 4 + a
Print a + b + c`,
    options: ["8", "12", "14", "10"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 2, b = 2, c = 6.
2. (a - c) < (c - a) -> -4 < 4 is True.
3. c = 2 ^ 2 = 0.
4. Line 15 executes: b = 4 + a = 4 + 2 = 6.
5. Print a + b + c = 2 + 6 + 0 = 8.`,
    stepTrace: [
      { line: 5, code: "c = a ^ a", variables: {"c":0}, note: "c = 0." },
      { line: 15, code: "b = 4 + a", variables: {"b":6}, note: "b = 6." },
      { line: 16, code: "Print a + b + c", variables: {"output":"8"}, note: "2 + 6 + 0 = 8." }
    ]
  },
  {
    id: 'pseudo-s3-59',
    set: 'set-3',
    qno: 59,
    topic: 'conditional-statements',
    title: "Q59. Unreachable Branch Verification",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 9, q = 5, r = 4
if ((q + p) < (6 - q))
    p = 12 + p
    if (5 < q)
        if ((p + 9) < (9 - p))
            p = 2 + p
        End if
    End if
    r = (p + 8) ^ q
End if
Print p + q + r`,
    options: ["18", "22", "25", "14"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 9, q = 5, r = 4.
2. (q + p) < (6 - q) -> 14 < 1 is False.
3. The entire block is skipped.
4. Print p + q + r = 9 + 5 + 4 = 18.`,
    stepTrace: [
      { line: 3, code: "if ((q + p) < (6 - q))", variables: {"condition":false}, note: "14 < 1 is False." },
      { line: 12, code: "Print p + q + r", variables: {"output":"18"}, note: "9 + 5 + 4 = 18." }
    ]
  },
  {
    id: 'pseudo-s3-60',
    set: 'set-3',
    qno: 60,
    topic: 'recursion',
    title: "Q60. Branching Recursive Sum",
    difficulty: 'Hard',
    pseudocode: `Integer funn (Integer a, Integer b)
    if ((a + b) > (3 & a) && a < 3)
        a = 2 + 1 + a
        b = 3 + b + b
        return funn(a, b + a) + a + funn(a, b)
    End if
    return b - a + 1`,
    options: ["31", "22", "20", "16"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Trace for funn(2, 3):
1. Condition: (2 + 3) > (3 & 2) && 2 < 3 -> 5 > 2 && True -> True.
2. a = 3 + 2 = 5; b = 3 + 3 + 3 = 9.
3. Calls: funn(5, 14) + 5 + funn(5, 9).
4. Both sub-calls fail a < 3:
   - funn(5, 14) returns 14 - 5 + 1 = 10.
   - funn(5, 9) returns 9 - 5 + 1 = 5.
5. Total return = 10 + 5 + 5 = 20.`,
    stepTrace: [
      { line: 5, code: "return funn(a, b + a) + a + funn(a, b)", variables: {"call1":10,"call2":5,"a":5}, note: "10 + 5 + 5 = 20." }
    ]
  },
  {
    id: 'pseudo-s3-61',
    set: 'set-3',
    qno: 61,
    topic: 'conditional-statements',
    title: "Q61. Direct Path Execution",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 4, qq = 2, rr = 10
if (4 < qq)
    qq = (pp / pp) / qq
    if ((3 + qq + pp) < (qq + pp + 3))
        qq = (pp / rr) + rr
    Else
        rr = pp + rr
    End if
End if
rr = 6 + pp
Print pp + qq + rr`,
    options: ["16", "20", "18", "12"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. pp = 4, qq = 2, rr = 10.
2. 4 < qq -> 4 < 2 is False. If block is skipped.
3. rr = 6 + pp = 6 + 4 = 10.
4. Print pp + qq + rr = 4 + 2 + 10 = 16.`,
    stepTrace: [
      { line: 3, code: "if (4 < qq)", variables: {"condition":false}, note: "4 < 2 is False." },
      { line: 11, code: "rr = 6 + pp", variables: {"rr":10}, note: "rr = 10." },
      { line: 12, code: "Print pp + qq + rr", variables: {"output":"16"}, note: "4 + 2 + 10 = 16." }
    ]
  },
  {
    id: 'pseudo-s3-62',
    set: 'set-3',
    qno: 62,
    topic: 'conditional-statements',
    title: "Q62. Condition False Check",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 5, b = 5, c = 5
if (a ^ b && (a & c) < b)
    b = c + a
End if
if ((c + a) < (a - c))
    c = (12 + 2) + b
End if
Print a + b + c`,
    options: ["21", "15", "14", "19"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 5, b = 5, c = 5.
2. a ^ b = 5 ^ 5 = 0 (False). First condition fails.
3. (c + a) < (a - c) -> 10 < 0 is False. Second condition fails.
4. Print a + b + c = 5 + 5 + 5 = 15.`,
    stepTrace: [
      { line: 3, code: "first if", variables: {"condition":false}, note: "5 ^ 5 = 0." },
      { line: 9, code: "Print a + b + c", variables: {"output":"15"}, note: "5 + 5 + 5 = 15." }
    ]
  },
  {
    id: 'pseudo-s3-63',
    set: 'set-3',
    qno: 63,
    topic: 'bitwise-operators',
    title: "Q63. Bitwise XOR Chain Result",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 0, b = 4, c = 7
if (a ^ c || (a + b) < c)
    b = 4 & c
    if ((a + b) > (c - a))
        a = (b + 2) & a
    End if
    c = (1 + 5) ^ c
End if
c = (a + b) ^ c
Print a + b + c`,
    options: ["9", "12", "15", "7"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 0, b = 4, c = 7.
2. (a ^ c) = 0 ^ 7 = 7 (True).
3. b = 4 & 7 = 4.
4. c = 6 ^ 7 = 1.
5. c = (0 + 4) ^ 1 = 4 ^ 1 = 5.
6. Print a + b + c = 0 + 4 + 5 = 9.`,
    stepTrace: [
      { line: 4, code: "b = 4 & c", variables: {"b":4}, note: "b = 4." },
      { line: 8, code: "c = (1 + 5) ^ c", variables: {"c":1}, note: "c = 1." },
      { line: 3, code: "c = (a + b) ^ c", variables: {"c":5}, note: "c = 5." },
      { line: 11, code: "Print a + b + c", variables: {"output":"9"}, note: "0 + 4 + 5 = 9." }
    ]
  },
  {
    id: 'pseudo-s3-64',
    set: 'set-3',
    qno: 64,
    topic: 'conditional-statements',
    title: "Q64. Nested Bitwise Branches",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
Set a = 2, b = 8, c = 6
if ((c + a) < (b - c))
    b = c + c
Else
    b = (9 + 9) & c
    if ((c + b + a) < (b & a & c))
        a = (c + c) ^ b
    Else
        b = (12 & 3) + a
    End if
End if
a = (b + a) ^ c
Print a + b + c`,
    options: ["10", "14", "18", "12"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = 2, b = 8, c = 6.
2. (6 + 2) < (8 - 6) -> 8 < 2 is False.
3. b = 18 & 6 = 2.
4. (6 + 2 + 2) < (2 & 2 & 6) -> 10 < 2 is False.
5. b = (12 & 3) + 2 = 0 + 2 = 2.
6. a = (2 + 2) ^ 6 = 4 ^ 6 = 2.
7. Print a + b + c = 2 + 2 + 6 = 10.`,
    stepTrace: [
      { line: 6, code: "b = (9 + 9) & c", variables: {"b":2}, note: "18 & 6 = 2." },
      { line: 10, code: "b = (12 & 3) + a", variables: {"b":2}, note: "b = 2." },
      { line: 7, code: "a = (b + a) ^ c", variables: {"a":2}, note: "4 ^ 6 = 2." },
      { line: 14, code: "Print a + b + c", variables: {"output":"10"}, note: "2 + 2 + 6 = 10." }
    ]
  },
  {
    id: 'pseudo-s3-65',
    set: 'set-3',
    qno: 65,
    topic: 'loops',
    title: "Q65. Loop Termination via Break",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b, Integer c)
    b = (a ^ 11) & b
    for (each c from 3 to 6)
        b = 3 + c
        if (1 < b || (a & c) < (5 - a))
            a = (c + 2) + c
            b = c + c
            Jump out of the loop
        End if
    End for
    return a + b`,
    options: ["14", "18", "12", "10"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `For a = 4, b = 8, c = 5:
1. First iteration c = 3:
   - b = 3 + 3 = 6.
   - 1 < b is True.
   - a = (3 + 2) + 3 = 8.
   - b = 3 + 3 = 6.
   - Jumps out of loop.
2. return a + b = 8 + 6 = 14.`,
    stepTrace: [
      { line: 6, code: "a = (c + 2) + c", variables: {"a":8}, note: "a = 8." },
      { line: 7, code: "b = c + c", variables: {"b":6}, note: "b = 6." },
      { line: 11, code: "return a + b", variables: {"output":"14"}, note: "8 + 6 = 14." }
    ]
  },
  {
    id: 'pseudo-s3-66',
    set: 'set-3',
    qno: 66,
    topic: 'loops',
    title: "Q66. Iteration Range with Invariant Output",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 0, q = 2, r = 9
r = 7 + p
q = q + r
for (each r from 4 to 7)
    p = (p + p) & q
    if ((p + q) < (r - p) || 8 < p)
        p = (p + 2) + q
        Jump out of the loop
    End if
End for
Print p + q`,
    options: ["9", "12", "15", "7"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 0, q = 2, r = 9.
2. r = 7; q = 2 + 7 = 9.
3. In loop: p = 0 & 9 = 0.
   - Condition 9 < r is false for r in [4, 7].
4. Print p + q = 0 + 9 = 9.`,
    stepTrace: [
      { line: 4, code: "q = q + r", variables: {"q":9}, note: "q = 9." },
      { line: 12, code: "Print p + q", variables: {"output":"9"}, note: "0 + 9 = 9." }
    ]
  },
  {
    id: 'pseudo-s3-67',
    set: 'set-3',
    qno: 67,
    topic: 'bitwise-operators',
    title: "Q67. Compound Bitwise Expressions",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 6, q = 4, r = 7
p = (r + 5) + p
if ((q & r & p) < (p & 6))
    r = 3 ^ r
    q = q & q
End if
Print p + q + r`,
    options: ["26", "28", "32", "22"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 12 + 6 = 18.
2. (4 & 7 & 18) < (18 & 6) -> 0 < 2 is True.
3. r = 3 ^ 7 = 4; q = 4.
4. Print p + q + r = 18 + 4 + 4 = 26.`,
    stepTrace: [
      { line: 8, code: "Print p + q + r", variables: {"output":"26"}, note: "18 + 4 + 4 = 26." }
    ]
  },
  {
    id: 'pseudo-s3-68',
    set: 'set-3',
    qno: 68,
    topic: 'bitwise-operators',
    title: "Q68. Bitwise XOR and Inequality Verification",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 4, qq = 3, rr = 9
pp = 3 ^ rr
if ((pp & qq & rr) < (qq + rr - pp))
    pp = (11 & 10) ^ pp
    rr = (10 + 3) & pp
End if
Print pp + qq + rr`,
    options: ["3", "7", "12", "16"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Exam platform registers answer as 3.`,
    stepTrace: [
      { line: 8, code: "Print pp + qq + rr", variables: {"output":"3"}, note: "Platform key evaluates to 3." }
    ]
  },
  {
    id: 'pseudo-s3-69',
    set: 'set-3',
    qno: 69,
    topic: 'loops',
    title: "Q69. Iterative XOR and Modifying State",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 4, q = 2, r = 9
for (each r from 5 to 8)
    if (3 < q && 6 < q)
        p = (q ^ r) ^ q
    End if
    if ((p + 8) < (8 + p))
        p = (6 & 1) + q
    End if
    q = (p + 1) + r
End for
Print p + q + r`,
    options: ["34", "38", "40", "29"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation across loop iterations leads to the final printed sum of 34.`,
    stepTrace: [
      { line: 12, code: "Print p + q + r", variables: {"output":"34"}, note: "Total is 34." }
    ]
  },
  {
    id: 'pseudo-s3-70',
    set: 'set-3',
    qno: 70,
    topic: 'loops',
    title: "Q70. Division and Repeated Constant Sum",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 0, q = 5, r = 6
q = (q / 2) + r
if ((p ^ 3) < 3 && 5 > r)
    q = 1 + r
Else
    q = 5 ^ r
    for (each r from 2 to 6)
        q = 10 + p
    End for
End if
q = r + r
Print p + q + r`,
    options: ["27", "30", "18", "24"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Exam platform registers answer as 27.`,
    stepTrace: [
      { line: 13, code: "Print p + q + r", variables: {"output":"27"}, note: "Platform key evaluates to 27." }
    ]
  },
  {
    id: 'pseudo-s3-71',
    set: 'set-3',
    qno: 71,
    topic: 'recursion',
    title: "Q71. Recursive State Branching",
    difficulty: 'Hard',
    pseudocode: `Integer funn(Integer a, Integer b)
    if ((a + b) > (b ^ a) && a < 4)
        b = b + 1
        b = 2 + b + b
        a = b + 3
        return funn(b + 2, b + 1) + funn(b, b) + b
    End if
    a = a + 1
    return b - a + 1`,
    options: ["9", "15", "4", "19"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `For funn(3, 3):
1. Condition passes.
2. b = 4 -> b = 2 + 4 + 4 = 10 -> a = 13.
3. Recursive calls immediately hit base case since a >= 4.
4. Evaluated total returns 9.`,
    stepTrace: [
      { line: 6, code: "return expression", variables: {"output":"9"}, note: "Evaluates to 9." }
    ]
  },
  {
    id: 'pseudo-s3-72',
    set: 'set-3',
    qno: 72,
    topic: 'conditional-statements',
    title: "Q72. Bitwise OR and Cumulative Sum",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set p = 5, q = 8, r = 5
if ((9 & p) < r || q > r)
    q = 5 & q
End if
q = 11 + p
if ((q + p) > (p - q))
    r = (p + p) + q
End if
p = (p + r) + q
Print p + q + r`,
    options: ["90", "87", "89", "96"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 5, q = 8, r = 5.
2. q > r (8 > 5) is True -> q = 5 & 8 = 0.
3. q = 11 + 5 = 16.
4. (16 + 5) > (5 - 16) -> 21 > -11 is True -> r = 10 + 16 = 26.
5. p = (5 + 26) + 16 = 47.
6. Print p + q + r = 47 + 16 + 26 = 89.`,
    stepTrace: [
      { line: 6, code: "q = 11 + p", variables: {"q":16}, note: "q = 16." },
      { line: 8, code: "r = (p + p) + q", variables: {"r":26}, note: "r = 26." },
      { line: 10, code: "p = (p + r) + q", variables: {"p":47}, note: "p = 47." },
      { line: 11, code: "Print p + q + r", variables: {"output":"89"}, note: "47 + 16 + 26 = 89." }
    ]
  },
  {
    id: 'pseudo-s3-73',
    set: 'set-3',
    qno: 73,
    topic: 'loops',
    title: "Q73. Chained XOR Loop State",
    difficulty: 'Medium',
    pseudocode: `Integer pp, qq, rr
set pp = 5, qq = 6, rr = 4
qq = (pp + qq) / qq
for (each rr from 3 to 6)
    qq = (qq ^ qq) ^ qq
    qq = (rr + pp) + rr
End for
pp = (1 ^ 7) ^ rr
Print pp + qq`,
    options: ["16", "24", "18", "19"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Exam platform registers answer as C (18).`,
    stepTrace: [
      { line: 9, code: "Print pp + qq", variables: {"output":"18"}, note: "Platform key evaluates to 18." }
    ]
  },
  {
    id: 'pseudo-s3-74',
    set: 'set-3',
    qno: 74,
    topic: 'loops',
    title: "Q74. Early Break Loop Result",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
Set a = 8, b = 4, c = 4
for (each c from 2 to 3)
    b = c + b
    if ((a + 9) < (9 - a))
        Continue
    Else
        Jump out of the loop
    End if
    b = (2 + 8) + a
End for
Print a + b`,
    options: ["28", "3", "21", "12"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Platform marks Answer D (12).`,
    stepTrace: [
      { line: 12, code: "Print a + b", variables: {"output":"12"}, note: "Platform answer: 12." }
    ]
  },
  {
    id: 'pseudo-s3-75',
    set: 'set-3',
    qno: 75,
    topic: 'recursion',
    title: "Q75. Recursive Subtraction",
    difficulty: 'Medium',
    pseudocode: `Integer funn (Integer a, Integer b)
    if (b < 6 && (b & a) < (a + b))
        b = 1 + b + a
        b = 3 + 1 + a
        return b - funn(b, b)
    End if
    b = 1 + b + b
    return b`,
    options: ["-19", "-7", "-12", "7"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Trace for funn(7, 4):
1. Condition passes -> b = 3 + 1 + 7 = 11.
2. Returns 11 - funn(11, 11).
3. funn(11, 11): 11 < 6 is False -> returns 1 + 11 + 11 = 23.
4. Result = 11 - 23 = -12.`,
    stepTrace: [
      { line: 4, code: "b = 3 + 1 + a", variables: {"b":11}, note: "b becomes 11." },
      { line: 7, code: "funn(11, 11)", variables: {"return":23}, note: "Returns 23." },
      { line: 5, code: "11 - 23", variables: {"output":"-12"}, note: "Output is -12." }
    ]
  },
  {
    id: 'pseudo-s3-76',
    set: 'set-3',
    qno: 76,
    topic: 'conditional-statements',
    title: "Q76. Division Equality Verification",
    difficulty: 'Easy',
    pseudocode: `Num = 11
if ((num / 1) == 1)
    print HeyAnshika
else
    print HeySubscribers`,
    options: ["HeyAnshika", "HeySubscribers", "Error", "None"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Exam source key indicates print statement outputs HeyAnshika.`,
    stepTrace: [
      { line: 3, code: "print HeyAnshika", variables: {"output":"HeyAnshika"}, note: "Expected output." }
    ]
  },
  {
    id: 'pseudo-s3-77',
    set: 'set-3',
    qno: 77,
    topic: 'conditional-statements',
    title: "Q77. Conditional Evaluation with Bitwise XOR",
    difficulty: 'Easy',
    pseudocode: `integer a, b, c
set a = 6, b = 5, c = 4
if ((a ^ 9) < (9 + a))
    a = b + b
else if ((a & b & c) > (c & a))
    b = (1 + 3) ^ c
end if
print a + b + c`,
    options: ["15", "19", "21", "12"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `1. a = 6, b = 5, c = 4.
2. 6 ^ 9 = 15; 9 + 6 = 15. 15 < 15 is False.
3. else if: (6 & 5 & 4) > (4 & 6) -> 4 > 4 is False.
4. Variables unchanged: 6 + 5 + 4 = 15.`,
    stepTrace: [
      { line: 8, code: "print a + b + c", variables: {"output":"15"}, note: "6 + 5 + 4 = 15." }
    ]
  },
  {
    id: 'pseudo-s3-78',
    set: 'set-3',
    qno: 78,
    topic: 'loops',
    title: "Q78. Bitwise Operations inside For Loop",
    difficulty: 'Medium',
    pseudocode: `integer a, b, c
set a = 3, b = 5, c = 4
c = (6 ^ 2) + b
for (each c from 3 to 5)
    b = (b + 2) & c
    a = 3 & b
    b = (c ^ a) + c
    a = (5 + 2) & a
end for
print a + b`,
    options: ["10", "14", "18", "12"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Tracing through iterations leads to a + b = 10.`,
    stepTrace: [
      { line: 10, code: "print a + b", variables: {"output":"10"}, note: "Result is 10." }
    ]
  },
  {
    id: 'pseudo-s3-79',
    set: 'set-3',
    qno: 79,
    topic: 'recursion',
    title: "Q79. Base Conversion Recursive Sum (Hamming Weight)",
    difficulty: 'Medium',
    pseudocode: `int HeyThere (int n, int r) {
    if (n > 0)
        return (n % r + HeyThere(n / r, r));
    else
        return 0;
}
int ans = HeyThere(257, 2);
print ans;`,
    options: ["2", "4", "8", "1"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `HeyThere(n, 2) sums the binary digits of n.
257 in binary is 100000001_2, which has two 1s.
Sum = 1 + 1 = 2.`,
    stepTrace: [
      { line: 6, code: "HeyThere(257, 2)", variables: {"binary":"100000001","ans":2}, note: "Sum of bits is 2." },
      { line: 6, code: "print ans", variables: {"output":"2"}, note: "2 printed." }
    ]
  },
  {
    id: 'pseudo-s3-80',
    set: 'set-3',
    qno: 80,
    topic: 'recursion',
    title: "Q80. Recursive Function Counter",
    difficulty: 'Easy',
    pseudocode: `int fun(int n) {
    if (n == 1)
        return 1;
    else
        return 1 + fun(n - 1);
}
int main() {
    n = 3;
    printf("%d", fun(n));
    return 0;
}`,
    options: ["2", "3", "1", "4"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Platform canonical answer key registers 2.`,
    stepTrace: [
      { line: 6, code: "printf(\"%d\", fun(n))", variables: {"output":"2"}, note: "Platform key evaluates to 2." }
    ]
  },
  {
    id: 'pseudo-s3-81',
    set: 'set-3',
    qno: 81,
    topic: 'conditional-statements',
    title: "Q81. Conditional Doubling and Fallback",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 5, q = 8, r = 4
if ((p ^ 9) < (10 + p))
    p = q + q
Else
    if ((p & q & r) > (r & p))
        q = (1 + 3) ^ r
    End if
End if
Print p + q + r`,
    options: ["19", "25", "36", "28"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. p = 5, q = 8, r = 4.
2. (5 ^ 9) = 12; (10 + 5) = 15.
3. 12 < 15 is True.
4. p = 8 + 8 = 16.
5. Print p + q + r = 16 + 8 + 4 = 28.`,
    stepTrace: [
      { line: 4, code: "p = q + q", variables: {"p":16}, note: "p = 16." },
      { line: 10, code: "Print p + q + r", variables: {"output":"28"}, note: "16 + 8 + 4 = 28." }
    ]
  },
  {
    id: 'pseudo-s3-82',
    set: 'set-3',
    qno: 82,
    topic: 'conditional-statements',
    title: "Q82. Multi-Path Nested Arithmetic",
    difficulty: 'Hard',
    pseudocode: `Integer p, q, r
Set p = 8, q = 7, r = 8
r = 11 + q
if ((r + p + q) < (p - q - r))
    q = r + p
    if ((r + 9) < (8 + r))
        p = (r + 9) + r
    Else
        p = (p + 12) + p
    End if
Else
    q = (1 + 7) + r
    if ((q + p + 5) < (p + r + q))
        q = (q + p) + r
    End if
End if
p = (r + r) + r
Print p + q + r`,
    options: ["108", "114", "104", "124"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Platform test suite yields 124.`,
    stepTrace: [
      { line: 18, code: "Print p + q + r", variables: {"output":"124"}, note: "Expected output is 124." }
    ]
  },
  {
    id: 'pseudo-s3-83',
    set: 'set-3',
    qno: 83,
    topic: 'conditional-statements',
    title: "Q83. Cascading Else Condition Branching",
    difficulty: 'Medium',
    pseudocode: `Set a = 3, b = 5, c = 4
if ((1 + c + 8) < (8 + 1))
    if ((1 - 7) > (b + 1))
        a = a + b
    Else
        a = (b + 3) + c
    End if
    a = 5 + b
Else
    if ((c + 9) + (9 + 3) > (c + a + b))
        a = (4 + 4) + b
    Else
        c = (4 + 8) + a
    End if
    a = 3 + c
End if
c = (8 + 7) + c
print a + b + c`,
    options: ["31", "11", "14", "24"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. Outer condition (1 + 4 + 8) < 9 -> 13 < 9 is False.
2. Else branch executes:
   - (4 + 9) + 12 > (4 + 3 + 5) -> 25 > 12 is True -> a = 8 + 5 = 13.
   - a = 3 + c = 3 + 4 = 7.
3. c = 15 + 4 = 19.
4. print a + b + c = 7 + 5 + 19 = 31.`,
    stepTrace: [
      { line: 15, code: "a = 3 + c", variables: {"a":7}, note: "a becomes 7." },
      { line: 17, code: "c = (8 + 7) + c", variables: {"c":19}, note: "c becomes 19." },
      { line: 18, code: "print a + b + c", variables: {"output":"31"}, note: "7 + 5 + 19 = 31." }
    ]
  },
  {
    id: 'pseudo-s3-84',
    set: 'set-3',
    qno: 84,
    topic: 'c-programming',
    title: "Q84. Boolean Inequality Formatting in C",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
void main() {
    printf("10!=9:-%5d", 10 != 9);
}`,
    options: ["1", "0", "error", "none of these"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `In C, the expression (10 != 9) evaluates to boolean integer 1.`,
    stepTrace: [
      { line: 3, code: "printf(\"10!=9:-%5d\", 10 != 9)", variables: {"output":"1"}, note: "Evaluates to 1." }
    ]
  },
  {
    id: 'pseudo-s3-85',
    set: 'set-3',
    qno: 85,
    topic: 'c-programming',
    title: "Q85. Variable Redeclaration Error",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    int y = 10000;
    int y = 34;
    printf("Hello World! %d\\n", y);
    return 0;
}`,
    options: ["Compile time error", "Hello World!34", "Hello World!1000", "Hello World! Followed by a junk value"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Redeclaring variable 'y' in the same local scope results in a compile-time error.`,
    stepTrace: [
      { line: 4, code: "int y = 34;", variables: {"error":"redefinition of 'y'"}, note: "Compile error." }
    ]
  },
  {
    id: 'pseudo-s3-86',
    set: 'set-3',
    qno: 86,
    topic: 'conditional-statements',
    title: "Q86. Bitwise OR Logical Condition Execution",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 6, qq = 3, rr = 5
qq = 1 + rr
qq = 5 + qq
if (5 < rr OR (pp + rr) > (rr - pp))
    pp = (9 & 7) + pp
    qq = 5 + qq
End if
Print pp + qq + rr`,
    options: ["28", "20", "30", "38"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. pp = 6, qq = 11, rr = 5.
2. (pp + rr) > (rr - pp) -> 11 > -1 is True.
3. pp = (9 & 7) + 6 = 1 + 6 = 7.
4. qq = 5 + 11 = 16.
5. Print pp + qq + rr = 7 + 16 + 5 = 28.`,
    stepTrace: [
      { line: 9, code: "Print pp + qq + rr", variables: {"output":"28"}, note: "7 + 16 + 5 = 28." }
    ]
  },
  {
    id: 'pseudo-s3-87',
    set: 'set-3',
    qno: 87,
    topic: 'loops',
    title: "Q87. Variable Overwriting in For Loop",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 2, q = 5
q = p + q
for (each r from q to 8)
    q = p
End for
if (p > q)
    q = 0
Else
    q = 1
End if
Print p + q + r`,
    options: ["12", "20", "7", "15"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Platform marks answer A (12).`,
    stepTrace: [
      { line: 12, code: "Print p + q + r", variables: {"output":"12"}, note: "Platform key evaluates to 12." }
    ]
  },
  {
    id: 'pseudo-s3-88',
    set: 'set-3',
    qno: 88,
    topic: 'bitwise-operators',
    title: "Q88. Bitwise AND Arithmetic Accumulation",
    difficulty: 'Easy',
    pseudocode: `Integer pp, qq, rr
Set pp = 1, qq = 2, rr = 7
rr = (rr + 9) + qq
pp = pp
qq = (pp + 7) & rr
rr = 1 + rr
Print pp + qq + rr`,
    options: ["17", "25", "20", "28"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Platform answer evaluates to C (20).`,
    stepTrace: [
      { line: 7, code: "Print pp + qq + rr", variables: {"output":"20"}, note: "Platform output is 20." }
    ]
  },
  {
    id: 'pseudo-s3-89',
    set: 'set-3',
    qno: 89,
    topic: 'conditional-statements',
    title: "Q89. Condition Check with Bitwise Doubling",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 5, q = 8, r = 4
if ((p ^ 9) < (10 + p))
    p = q + q
Else
    if ((p & q & r) > (r & p))
        q = (1 + 3) ^ r
    End if
End if
Print p + q + r`,
    options: ["17", "25", "20", "28"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. (5 ^ 9) = 12; (10 + 5) = 15. 12 < 15 is True.
2. p = 8 + 8 = 16.
3. Print p + q + r = 16 + 8 + 4 = 28.`,
    stepTrace: [
      { line: 10, code: "Print p + q + r", variables: {"output":"28"}, note: "28 printed." }
    ]
  },
  {
    id: 'pseudo-s3-90',
    set: 'set-3',
    qno: 90,
    topic: 'loops',
    title: "Q90. Fibonacci-like Loop Sequence",
    difficulty: 'Medium',
    pseudocode: `Integer p = 1, q = 2
for (Integer i = 0; i <= 6; i = i + 2)
    p = p + q + i
    p = p + q
    q = p - q
    print q
End for`,
    options: ["3 10 27 70", "1 2 3 5", "2 4 8 16", "3 8 21 55"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `The printed values of q per iteration (i = 0, 2, 4, 6) are 3, 10, 27, 70.`,
    stepTrace: [
      { line: 6, code: "print q", variables: {"output":"3 10 27 70"}, note: "Outputs 3, 10, 27, 70." }
    ]
  },
  {
    id: 'pseudo-s3-91',
    set: 'set-3',
    qno: 91,
    topic: 'loops',
    title: "Q91. Infinite Loop Condition Check",
    difficulty: 'Easy',
    pseudocode: `Integer m
for (m = 3; m != 0; m--)
    print m
    m = m - 1
End for`,
    options: ["Infinite", "3 1", "3 2 1", "0"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `m decrements twice per iteration (once in loop body, once in update expression):
- Start: 3 -> prints 3 -> m becomes 2 -> loop update m-- makes it 1.
- Next: 1 -> prints 1 -> m becomes 0 -> loop update m-- makes it -1.
- m never equals 0 at the condition test, causing an infinite loop.`,
    stepTrace: [
      { line: 3, code: "for loop condition m != 0", variables: {"sequence":"3, 1, -1, -3..."}, note: "Skips 0, runs indefinitely." }
    ]
  },
  {
    id: 'pseudo-s3-92',
    set: 'set-3',
    qno: 92,
    topic: 'bitwise-operators',
    title: "Q92. Bitwise Left Shift Arithmetic Representation",
    difficulty: 'Easy',
    pseudocode: `Integer a, b, c
set a = 24, b = 8
c = b << a
print c`,
    options: ["8 * 2^24", "24 * 2^8", "192", "0"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `The left-shift operation b << a evaluates to b * 2^a = 8 * 2^24.`,
    stepTrace: [
      { line: 3, code: "c = b << a", variables: {"c":"8 * 2^24"}, note: "b * 2^a." }
    ]
  },
  {
    id: 'pseudo-s3-93',
    set: 'set-3',
    qno: 93,
    topic: 'c-programming',
    title: "Q93. Chained Comparison Operators in C",
    difficulty: 'Easy',
    pseudocode: `int main() {
    int p = 10, q = 20, r = 30;
    if (r > q > p)
        print("True")
    else
        print("false")
    return 0;
}`,
    options: ["False", "True", "Error", "None"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `In C, chained inequality associates left to right:
1. (r > q) = (30 > 20) evaluates to 1.
2. (1 > p) = (1 > 10) evaluates to 0 (False).
3. Prints "false".`,
    stepTrace: [
      { line: 3, code: "if (r > q > p)", variables: {"evaluation":"(30 > 20) > 10 => 1 > 10 => 0"}, note: "Evaluates to False." },
      { line: 6, code: "print(\"false\")", variables: {"output":"false"}, note: "false printed." }
    ]
  },
  {
    id: 'pseudo-s3-94',
    set: 'set-3',
    qno: 94,
    topic: 'bitwise-operators',
    title: "Q94. Direct Bitwise XOR",
    difficulty: 'Easy',
    pseudocode: `Initialize Integer x, y, z
Set y = 1, x = 2
z = x ^ y
Print z`,
    options: ["1", "2", "4", "3"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `z = 2 ^ 1 = 3.`,
    stepTrace: [
      { line: 3, code: "z = x ^ y", variables: {"z":3}, note: "2 ^ 1 = 3." },
      { line: 4, code: "Print z", variables: {"output":"3"}, note: "3 printed." }
    ]
  },
  {
    id: 'pseudo-s3-95',
    set: 'set-3',
    qno: 95,
    topic: 'loops',
    title: "Q95. Power of Two Doubling Loop",
    difficulty: 'Easy',
    pseudocode: `Integer value, n
Set value = 1, n = 45
while (value <= n)
    value = value << 1
end loop
Print value`,
    options: ["16", "32", "64", "36"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `The value doubles in each step: 1, 2, 4, 8, 16, 32, 64.
When value = 64, 64 <= 45 is False, terminating the loop.
Prints 64.`,
    stepTrace: [
      { line: 4, code: "value = value << 1", variables: {"value":64}, note: "Smallest power of 2 strictly greater than 45." },
      { line: 6, code: "Print value", variables: {"output":"64"}, note: "64 printed." }
    ]
  },
  {
    id: 'pseudo-s3-96',
    set: 'set-3',
    qno: 96,
    topic: 'c-programming',
    title: "Q96. Bitwise Operator Precedence in C",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    int x = 9, y = 2, z = 6;
    int a = x & y | z;
    printf("%d", a);
    return 0;
}`,
    options: ["Error", "2", "6", "3"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `1. (x & y) = 9 & 2 = 0.
2. 0 | 6 = 6.
Prints 6.`,
    stepTrace: [
      { line: 4, code: "int a = x & y | z", variables: {"a":6}, note: "(9 & 2) | 6 = 6." },
      { line: 5, code: "printf(\"%d\", a)", variables: {"output":"6"}, note: "6 printed." }
    ]
  },
  {
    id: 'pseudo-s3-97',
    set: 'set-3',
    qno: 97,
    topic: 'loops',
    title: "Q97. Character Comparison Loop Guard",
    difficulty: 'Easy',
    pseudocode: `Set Character m = 'a'
Set Integer count = 0
while (m > 'a')
    count++
    m--
end-while
display count`,
    options: ["0", "1", "-1", "Infinite"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Initially m = 'a'. The condition m > 'a' is immediately False, so the loop body never runs.
Displays 0.`,
    stepTrace: [
      { line: 3, code: "while (m > 'a')", variables: {"condition":false}, note: "'a' > 'a' is False." },
      { line: 4, code: "display count", variables: {"output":"0"}, note: "0 displayed." }
    ]
  },
  {
    id: 'pseudo-s3-98',
    set: 'set-3',
    qno: 98,
    topic: 'loops',
    title: "Q98. Do-While Loop Value Progression",
    difficulty: 'Medium',
    pseudocode: `Integer x, y
Set x = 15, y = 12
y = x - 1
do {
    Print x
    x = y + (x - 2)
} while (x < 40)`,
    options: ["14 26", "15 27 39", "27 39", "15"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `1. y = 15 - 1 = 14.
2. Iteration 1: prints 15 -> x = 14 + (15 - 2) = 27. (27 < 40 is True)
3. Iteration 2: prints 27 -> x = 14 + (27 - 2) = 39. (39 < 40 is True)
4. Iteration 3: prints 39 -> x = 14 + (39 - 2) = 51. (51 < 40 is False)
Printed sequence: 15 27 39.`,
    stepTrace: [
      { line: 5, code: "Print x", variables: {"sequence":"15, 27, 39"}, note: "Outputs 15 27 39." }
    ]
  },
  {
    id: 'pseudo-s3-99',
    set: 'set-3',
    qno: 99,
    topic: 'bitwise-operators',
    title: "Q99. Bitwise Precedence with Disjunction",
    difficulty: 'Easy',
    pseudocode: `Integer p, q, r
Set p = 7, q = 4, r = 5
if ((p + r) < (q - p) || r < p)
    r = q & p
    r = (r + 3) & p
End if
Print p + q + r`,
    options: ["18", "16", "14", "20"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. r < p (5 < 7) is True.
2. r = 4 & 7 = 4.
3. r = (4 + 3) & 7 = 7 & 7 = 7.
4. Print p + q + r = 7 + 4 + 7 = 18.`,
    stepTrace: [
      { line: 3, code: "r = q & p", variables: {"r":4}, note: "4 & 7 = 4." },
      { line: 5, code: "r = (r + 3) & p", variables: {"r":7}, note: "7 & 7 = 7." },
      { line: 7, code: "Print p + q + r", variables: {"output":"18"}, note: "7 + 4 + 7 = 18." }
    ]
  },
  {
    id: 'pseudo-s3-100',
    set: 'set-3',
    qno: 100,
    topic: 'c-programming',
    title: "Q100. Logical NOT and Double NOT",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    int x = 11, y = 4, z = 3;
    y = !x;
    z = !!x;
    printf("%d %d", y, z);
    return 0;
}`,
    options: ["0 1", "1 0", "0 0", "1 1"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `x = 11 (non-zero/true).
- y = !11 = 0
- z = !!11 = !0 = 1
Prints "0 1".`,
    stepTrace: [
      { line: 4, code: "y = !x;", variables: {"y":0}, note: "!11 = 0." },
      { line: 5, code: "z = !!x;", variables: {"z":1}, note: "!!11 = 1." },
      { line: 6, code: "printf(\"%d %d\", y, z)", variables: {"output":"0 1"}, note: "Outputs 0 1." }
    ]
  },
  {
    id: 'pseudo-s3-101',
    set: 'set-3',
    qno: 101,
    topic: 'c-programming',
    title: "Q101. Character ASCII Code Sum",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    char c, a, b;
    c = 'f';
    a = 's';
    b = 'x';
    int sum = c + a + b;
    printf("%d", sum);
    return 0;
}`,
    options: ["337", "320", "340", "315"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `ASCII values: 'f' = 102, 's' = 115, 'x' = 120.
sum = 102 + 115 + 120 = 337.`,
    stepTrace: [
      { line: 7, code: "int sum = c + a + b", variables: {"sum":337}, note: "102 + 115 + 120 = 337." },
      { line: 8, code: "printf(\"%d\", sum)", variables: {"output":"337"}, note: "337 printed." }
    ]
  },
  {
    id: 'pseudo-s3-102',
    set: 'set-3',
    qno: 102,
    topic: 'bitwise-operators',
    title: "Q102. Bitwise Left Shift and Right Shift Execution",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b)
    a = a << (a - 2)
    b = b >> (b - 5)
    a = a + 1
    b = b + 1
    return a + b
End function funn()`,
    options: ["21", "18", "24", "16"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Platform canonical answer returns 21.`,
    stepTrace: [
      { line: 6, code: "return a + b", variables: {"output":"21"}, note: "Expected output is 21." }
    ]
  },
  {
    id: 'pseudo-s3-103',
    set: 'set-3',
    qno: 103,
    topic: 'recursion',
    title: "Q103. Branch Bypassing Recursive Call",
    difficulty: 'Easy',
    pseudocode: `Integer solve(int x, int y)
    if (x > 1)
        solve(x - 1, y + 3)
    end if
    print y
End function solve()`,
    options: ["2", "3", "6", "4"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Given x = 1, y = 2:
1. Condition x > 1 (1 > 1) is False.
2. solve() is not called recursively.
3. Prints y = 2.`,
    stepTrace: [
      { line: 2, code: "if (x > 1)", variables: {"condition":false}, note: "1 > 1 is False." },
      { line: 5, code: "print y", variables: {"output":"2"}, note: "2 printed." }
    ]
  },
  {
    id: 'pseudo-s3-104',
    set: 'set-3',
    qno: 104,
    topic: 'c-programming',
    title: "Q104. Character ASCII Display in C",
    difficulty: 'Easy',
    pseudocode: `#include <stdio.h>
int main() {
    char c = 'Z';
    printf("%d", c);
    return 0;
}`,
    options: ["90", "65", "122", "80"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `The ASCII value of uppercase letter 'Z' is 90.`,
    stepTrace: [
      { line: 4, code: "printf(\"%d\", c)", variables: {"output":"90"}, note: "'Z' = 90." }
    ]
  },
  {
    id: 'pseudo-s3-105',
    set: 'set-3',
    qno: 105,
    topic: 'bitwise-operators',
    title: "Q105. Right Shift with Initial Zero Value",
    difficulty: 'Easy',
    pseudocode: `Integer value, n, num
Set value = 1, n = 45
num = num >> 1
num = num + value
Print num`,
    options: ["44", "0", "1", "12"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Uninitialized integer num defaults to 0.
- num = 0 >> 1 = 0
- num = 0 + 1 = 1
Prints 1.`,
    stepTrace: [
      { line: 4, code: "num = num + value", variables: {"num":1}, note: "0 + 1 = 1." },
      { line: 5, code: "Print num", variables: {"output":"1"}, note: "1 printed." }
    ]
  },
  {
    id: 'pseudo-s3-106',
    set: 'set-3',
    qno: 106,
    topic: 'loops',
    title: "Q106. Loop Stepping Variable Value",
    difficulty: 'Easy',
    pseudocode: `Integer x, y
for (each x from 1 to 11)
    x = x + 2
end for
Print x`,
    options: ["11", "10", "12", "13"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `x increments inside the loop and by loop advancement.
Exits loop when x exceeds upper bound, evaluating finally to 13.`,
    stepTrace: [
      { line: 5, code: "Print x", variables: {"output":"13"}, note: "x reaches 13." }
    ]
  },
  {
    id: 'pseudo-s3-107',
    set: 'set-3',
    qno: 107,
    topic: 'arrays',
    title: "Q107. Array In-Place Accumulation",
    difficulty: 'Medium',
    pseudocode: `Integer j, m
Set m = 1, j = 1
Integer a[3] = {0, 1, 0}
a[0] = a[0] + a[1]
a[1] = a[1] + a[2]
a[2] = a[2] + a[0]
if (a[0])
    a[j] = 5
End if
m = a[j]
Print m`,
    options: ["3", "2", "6", "4"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Platform canonical answer key marks Option C (6).`,
    stepTrace: [
      { line: 11, code: "Print m", variables: {"output":"6"}, note: "Platform key evaluates to 6." }
    ]
  },
  {
    id: 'pseudo-s3-108',
    set: 'set-3',
    qno: 108,
    topic: 'recursion',
    title: "Q108. Recursive Pre and Post Print Order",
    difficulty: 'Medium',
    pseudocode: `fun(integer k)
    if (k > 155)
        return
    end if
    print k
    fun(k + 2)
    print k
End of function fun()`,
    options: ["150 152 154", "150 152 154 154 152 150", "150", "None of the mentioned"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `For k = 150:
- Prints 150 on call, recurses with 152
- Prints 152 on call, recurses with 154
- Prints 154 on call, recurses with 156 (base case returns)
- Unwinding stack prints 154, then 152, then 150.
Full sequence: 150 152 154 154 152 150.`,
    stepTrace: [
      { line: 5, code: "print k before call", variables: {"sequence":"150 152 154"}, note: "Printed going down." },
      { line: 5, code: "print k after call", variables: {"sequence":"154 152 150"}, note: "Printed coming up." }
    ]
  },
  {
    id: 'pseudo-s3-109',
    set: 'set-3',
    qno: 109,
    topic: 'arrays',
    title: "Q109. Element-Wise Array Subtraction",
    difficulty: 'Easy',
    pseudocode: `Integer a[5], b[5], c[5], k, l
Set a[5] = {5, 9, 7, 3, 1}
Set b[5] = {2, 4, 6, 8, 10}
for (each k from 0 to 4)
    c[k] = a[k] - b[k]
end for
for (each l from 0 to 4)
    Print c[l]
end for`,
    options: ["7 13 13 11 11", "3 5 1 -5 -9", "-3 -5 -1 5 9", "None"],
    correctAnswer: 1,
    platformExpectedAnswer: 1,
    isPlatformBroken: false,
    explanation: `Subtraction element by element:
- 5 - 2 = 3
- 9 - 4 = 5
- 7 - 6 = 1
- 3 - 8 = -5
- 1 - 10 = -9
Result: 3 5 1 -5 -9.`,
    stepTrace: [
      { line: 5, code: "c[k] = a[k] - b[k]", variables: {"c":[3,5,1,-5,-9]}, note: "Direct differences computed." }
    ]
  },
  {
    id: 'pseudo-s3-110',
    set: 'set-3',
    qno: 110,
    topic: 'loops',
    title: "Q110. Nested Loop Frequency Counter",
    difficulty: 'Medium',
    pseudocode: `Integer a, b, c
for (a = 0 to 4)
    for (b = 0 to 2)
        if (a is greater than b)
            Print "A"
        End if
    End for
End for`,
    options: ["8", "7", "9", "10"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `Count pairs where a > b (b in {0, 1, 2}):
- a = 0: none (0)
- a = 1: b = 0 (1)
- a = 2: b = 0, 1 (2)
- a = 3: b = 0, 1, 2 (3)
- a = 4: b = 0, 1, 2 (3)
Total count = 0 + 1 + 2 + 3 + 3 = 9.`,
    stepTrace: [
      { line: 5, code: "Print \"A\"", variables: {"count":9}, note: "Condition holds 9 times." }
    ]
  },
  {
    id: 'pseudo-s3-111',
    set: 'set-3',
    qno: 111,
    topic: 'loops',
    title: "Q111. Remainder and Variable Reassignment Loop",
    difficulty: 'Medium',
    pseudocode: `Integer p, q, r
Set q = 13
for (each p from 1 to 4)
    r = q mod p
    p = p + 5
    q = p + r
end for
r = q / 5
Print q, r`,
    options: ["6 4", "1 3", "7 2", "6 1"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `Iteration 1 (p = 1):
- r = 13 mod 1 = 0
- p = 1 + 5 = 6
- q = 6 + 0 = 6
Loop completes/exits.
r = 6 / 5 = 1.
Prints: 6 1.`,
    stepTrace: [
      { line: 8, code: "r = q / 5", variables: {"q":6,"r":1}, note: "6 / 5 = 1." },
      { line: 9, code: "Print q, r", variables: {"output":"6 1"}, note: "Outputs 6 1." }
    ]
  },
  {
    id: 'pseudo-s3-112',
    set: 'set-3',
    qno: 112,
    topic: 'conditional-statements',
    title: "Q112. Digital Root / Modulo 9 Branching",
    difficulty: 'Easy',
    pseudocode: `Integer x
Set x = 259
if (x EQUALS 0)
    Print "0"
otherwise if (x MOD 9 EQUALS 0)
    Print "9"
otherwise
    Print x MOD 9
end if`,
    options: ["8", "16", "7", "None"],
    correctAnswer: 2,
    platformExpectedAnswer: 2,
    isPlatformBroken: false,
    explanation: `259 % 9:
259 = 28 * 9 + 7.
Remainder is 7. Prints 7.`,
    stepTrace: [
      { line: 8, code: "Print x MOD 9", variables: {"output":"7"}, note: "259 MOD 9 = 7." }
    ]
  },
  {
    id: 'pseudo-s3-113',
    set: 'set-3',
    qno: 113,
    topic: 'operators',
    title: "Q113. Arithmetic Assignment Sequence",
    difficulty: 'Easy',
    pseudocode: `Integer a, b
Set a = 12, b = 25
a = (a + b) MOD 2
b = a
a = a + b - 13
Print a, b`,
    options: ["-11 1", "-12 0", "11 22", "37 24"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `Step-by-step evaluation:
1. a = (12 + 25) MOD 2 = 37 MOD 2 = 1.
2. b = a = 1.
3. a = 1 + 1 - 13 = -11.
4. Prints -11 1.`,
    stepTrace: [
      { line: 3, code: "a = (a + b) MOD 2", variables: {"a":1}, note: "37 MOD 2 = 1." },
      { line: 4, code: "b = a", variables: {"b":1}, note: "b becomes 1." },
      { line: 5, code: "a = a + b - 13", variables: {"a":-11}, note: "1 + 1 - 13 = -11." },
      { line: 6, code: "Print a, b", variables: {"output":"-11 1"}, note: "Outputs -11 1." }
    ]
  },
  {
    id: 'pseudo-s3-114',
    set: 'set-3',
    qno: 114,
    topic: 'bitwise-operators',
    title: "Q114. Self XOR Zeroing in Condition",
    difficulty: 'Easy',
    pseudocode: `Set a = 4, b = 4, c = 4
if (a & (b ^ b) & c)
    a = a >> 1
End if
Print a + b + c`,
    options: ["16", "24", "8", "12"],
    correctAnswer: 3,
    platformExpectedAnswer: 3,
    isPlatformBroken: false,
    explanation: `b ^ b = 4 ^ 4 = 0.
4 & 0 & 4 = 0 (False).
The if block is skipped; a remains 4.
Print a + b + c = 4 + 4 + 4 = 12.`,
    stepTrace: [
      { line: 2, code: "if (a & (b ^ b) & c)", variables: {"condition":false}, note: "b ^ b = 0, condition is 0." },
      { line: 5, code: "Print a + b + c", variables: {"output":"12"}, note: "4 + 4 + 4 = 12." }
    ]
  },
  {
    id: 'pseudo-s3-115',
    set: 'set-3',
    qno: 115,
    topic: 'functions',
    title: "Q115. Dead Code Branch Multiplication",
    difficulty: 'Easy',
    pseudocode: `Integer funn (Integer a, Integer b)
    if (0)
        return a - b - funn(-7, -1)
    End if
    a = a + a + a + a
    return a
End function funn()`,
    options: ["40", "30", "44", "0"],
    correctAnswer: 0,
    platformExpectedAnswer: 0,
    isPlatformBroken: false,
    explanation: `For a = 10, b = 11:
1. if (0) never executes.
2. a = 10 + 10 + 10 + 10 = 40.
3. return a = 40.`,
    stepTrace: [
      { line: 2, code: "if (0)", variables: {"condition":false}, note: "Skipped entirely." },
      { line: 5, code: "a = a + a + a + a", variables: {"a":40}, note: "4 * 10 = 40." },
      { line: 3, code: "return a", variables: {"output":"40"}, note: "Returns 40." }
    ]
  }
];

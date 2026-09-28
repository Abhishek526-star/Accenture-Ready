# Accenture Pseudocode Round — Practice Question Bank

> **Extracted from:** `src/data/pseudocodeQuestions.js`
> **Total Questions:** 38 across 2 sets

---

## Overview

| Set | Badge | Description | Questions |
|-----|-------|-------------|-----------|
| Set 1: Previous Year Questions Collection | PYQ Master Set 1 | 18 Authentic Accenture Pseudocode Questions with Complete Step-by-Step Solutions, Recursion Traces & Explanations | 18 |
| Set 2: Previous Year Questions Collection | PYQ Master Set 2 | 20 Authentic Accenture Pseudocode PYQ Questions with Full Solutions, Step-by-Step Logic, and Master Answer Key | 20 |

**Topics covered:**

- **All Topics** (`all`)
- **Bitwise Logic (^, &, |, >>, <<)** (`bitwise`)
- **Recursive Call Stack Tracing** (`recursion`)
- **While & For Loop Mutations** (`loops`)
- **Array & Matrix Indexing** (`arrays`)

---

## Operator Handbook (Quick Reference)

### 1. Operator Precedence (Highest to Lowest)

- 1. Parentheses `( )`
- 2. Unary Operators (`!`, `~`, unary `-`)
- 3. Multiplicative: `*`, `/`, `mod` (% remainder)
- 4. Additive: `+`, `-`
- 5. Bitwise Shifts: `<<` (left shift), `>>` (right shift)
- 6. Relational: `<`, `<=`, `>`, `>=`
- 7. Equality: `==`, `!=`
- 8. Bitwise AND: `&`
- 9. Bitwise XOR: `^` (EXCLUSIVE OR)
- 10. Bitwise OR: `|`
- 11. Logical AND: `&&`
- 12. Logical OR: `||`
- 13. Assignment: `=`

### 2. Golden Rules of Bitwise XOR (^)

- • a ^ 0 = a (Identity law)
- • a ^ a = 0 (Self-cancellation law: any number XORed with itself is 0!)
- • a ^ b = b ^ a (Commutative law)
- • (a ^ b) ^ c = a ^ (b ^ c) (Associative law)
- • If a ^ b = c, then a ^ c = b and b ^ c = a

### 3. Bitwise Shift Shortcuts

- • a << b = a * (2^b) (e.g., 5 << 2 = 5 * 4 = 20)
- • a >> b = floor(a / (2^b)) (e.g., 20 >> 2 = 5, 7 >> 1 = 3)
- • a & 1 == 0 means a is EVEN; a & 1 == 1 means a is ODD

### 4. Accenture Pseudocode Notation

- • `Integer a, b, c`: Declares integer variables initialized to 0 unless specified.
- • `Set a = 5`: Assigns value 5 to variable a.
- • `mod`: Integer remainder operator (e.g. 14 mod 5 = 4).
- • Integer division truncates towards zero (e.g. 7 / 2 = 3).


---

# Set 1: Previous Year Questions Collection (18 Questions)

## Q1. Recursive Function

- **ID:** `pseudo-s1-01`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
public class MainClass {
    static void fun(int p, int q, int r) {
        if (p > 1) {
            fun(p - r, q, r - 3);
            System.out.println(q);
        }
    }
    public static void main(String[] args) {
        fun(20, 25, 30);
    }
}
```

### Options

- **A.** 20
- **B.** 25 :white_check_mark:
- **C.** 30
- **D.** 55

### Correct Answer: B. 25

### Explanation

```text
Initial call: fun(20, 25, 30)

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

Output: 25
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 8 | `fun(20, 25, 30)` | `p=20, q=25, r=30` | Main calls fun(20, 25, 30). |
| 3 | `if (p > 1)` | `p=20, q=25, r=30` | 20 > 1 is true. Proceed inside if. |
| 4 | `fun(p - r, q, r - 3)` | `p-r=-10, q=25, r-3=27` | Calls fun(20 - 30, 25, 30 - 3) = fun(-10, 25, 27). |
| 3 | `if (p > 1)` | `p=-10, q=25, r=27` | -10 > 1 is false. Base condition hit, returns. |
| 5 | `System.out.println(q)` | `q=25, output=25` | Prints q = 25. Call stack unwinds. |


---

## Q2. Recursive Function with Changing Parameters

- **ID:** `pseudo-s1-02`
- **Difficulty:** Hard
- **Topic:** recursion

### Pseudocode

```
Integer fun(Integer p, Integer q, Integer r)
    if (p > 1)
        fun(p - r, q + 2, r + 2)
        Print q
    end if
end function
// Executed for p = 22, q = 4, r = 2
```

### Options

- **A.** 20 18 16 14 12
- **B.** 14 12 10 8 6 4
- **C.** 26 24 22 20 18 16 14 12 10 8 6 4 :white_check_mark:
- **D.** None of the mentioned options

### Correct Answer: C. 26 24 22 20 18 16 14 12 10 8 6 4

### Explanation

```text
Track the recursive calls:
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

Output: 26 24 22 20 18 16 14 12 10 8 6 4
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `fun(22, 4, 2)` | `p=22, q=4, r=2` | Initial call: p=22, q=4, r=2. |
| 2 | `if (p > 1)` | `p=22, q=4, r=2` | 22 > 1 is true. Makes recursive call. |
| 3 | `Recursive call cascade...` | `p=0, q=26` | Calls continue until p = 0. |
| 4 | `Print q (stack unwinding)` | `output=26 24 22 20 18 16 14 12 10 8 6 4` | Values of q print in reverse as stack frames pop. |


---

## Q3. Multiple Recursive Calls

- **ID:** `pseudo-s1-03`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
Integer fun(Integer x)
    if (x > 3)
        fun(x - 3)
        Print x
        fun(x / 2)
        fun(x / 4)
    end if
end function
// Executed for x = 7
```

### Options

- **A.** 6 9 4
- **B.** 5 8 4
- **C.** 4 7 :white_check_mark:
- **D.** 4 7 5

### Correct Answer: C. 4 7

### Explanation

```text
Start: fun(7)
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
Output: 4 7
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `fun(7)` | `x=7` | Call fun(7). |
| 3 | `fun(x - 3)` | `x=7, next_x=4` | Calls fun(4). |
| 4 | `Print x in fun(4)` | `x=4, output=4` | fun(4) prints 4 after its child fun(1) returns. |
| 4 | `Print x in fun(7)` | `x=7, output=4 7` | fun(7) resumes and prints 7. |
| 5 | `fun(x / 2) & fun(x / 4)` | `7/2=3, 7/4=1` | Both 3 > 3 and 1 > 3 are false. Execution completes. |


---

## Q4. Recursive Division

- **ID:** `pseudo-s1-04`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
public class MainClass {
    static void fun(int x, int y) {
        if (x > 1) {
            fun(x / y, y + 3);
            System.out.println(y);
        }
    }
    public static void main(String[] args) {
        fun(108, 3);
    }
}
```

### Options

- **A.** 3 6 9 12
- **B.** 12 9 6 3 :white_check_mark:
- **C.** 9 6 3
- **D.** 12 9 6

### Correct Answer: B. 12 9 6 3

### Explanation

```text
Track recursive call chain:
• fun(108, 3): 108 > 1, calls fun(108 / 3, 3 + 3) = fun(36, 6)
• fun(36, 6):   36 > 1, calls fun(36 / 6, 6 + 3)   = fun(6, 9)
• fun(6, 9):     6 > 1, calls fun(6 / 9, 9 + 3)     = fun(0, 12)
• fun(0, 12):    0 > 1 is false, recursion stops.

Now calls unwind in reverse order, executing System.out.println(y):
12
9
6
3

Output: 12 9 6 3
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 9 | `fun(108, 3)` | `x=108, y=3` | Initial call: x=108, y=3. |
| 4 | `fun(36, 6)` | `x=36, y=6` | 108 / 3 = 36, 3 + 3 = 6. |
| 4 | `fun(6, 9)` | `x=6, y=9` | 36 / 6 = 6, 6 + 3 = 9. |
| 4 | `fun(0, 12)` | `x=0, y=12` | 6 / 9 = 0, 9 + 3 = 12. |
| 3 | `Base case x <= 1` | `x=0` | 0 > 1 is false. Stack unwinds. |
| 5 | `Print y on return` | `output=12 9 6 3` | Prints 12, 9, 6, 3 in reverse stack order. |


---

## Q5. Loop with Updating Variables

- **ID:** `pseudo-s1-05`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
Integer a, b, c
Set a = 10, b = 20
for (c from a to b) increment c by 2 in each iteration
    a = a + c
    b = b - a + c
    if (a > 10)
        Print a
    else
        Print b
    end if
end for
```

### Options

- **A.** 20
- **B.** 22
- **C.** 20 32
- **D.** 20 32 46 62 80 100 :white_check_mark:

### Correct Answer: D. 20 32 46 62 80 100

### Explanation

```text
The for-loop boundaries are evaluated at initialization:
c ranges from a (10) to b (20) with step 2:
c values: 10, 12, 14, 16, 18, 20

Compute a and printed values:
• c = 10: a = 10 + 10 = 20. (20 > 10) -> Print 20
• c = 12: a = 20 + 12 = 32. (32 > 10) -> Print 32
• c = 14: a = 32 + 14 = 46. (46 > 10) -> Print 46
• c = 16: a = 46 + 16 = 62. (62 > 10) -> Print 62
• c = 18: a = 62 + 18 = 80. (80 > 10) -> Print 80
• c = 20: a = 80 + 20 = 100. (100 > 10) -> Print 100

Output: 20 32 46 62 80 100
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 10, b = 20` | `a=10, b=20` | Loop values of c: 10, 12, 14, 16, 18, 20. |
| 4 | `Iter c=10: a = a + c` | `a=20, c=10, output=20` | a = 10 + 10 = 20. Prints 20. |
| 4 | `Iter c=12: a = a + c` | `a=32, c=12, output=20 32` | a = 20 + 12 = 32. Prints 32. |
| 4 | `Iter c=14: a = a + c` | `a=46, c=14, output=20 32 46` | a = 32 + 14 = 46. Prints 46. |
| 4 | `Iter c=16: a = a + c` | `a=62, c=16, output=20 32 46 62` | a = 46 + 16 = 62. Prints 62. |
| 4 | `Iter c=18: a = a + c` | `a=80, c=18, output=20 32 46 62 80` | a = 62 + 18 = 80. Prints 80. |
| 4 | `Iter c=20: a = a + c` | `a=100, c=20, output=20 32 46 62 80 100` | a = 80 + 20 = 100. Prints 100. |


---

## Q6. Bitwise Operators

- **ID:** `pseudo-s1-06`
- **Difficulty:** Medium
- **Topic:** bitwise

### Pseudocode

```
Integer pp, qq, rr
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

Print pp + qq + rr
```

### Options

- **A.** 18
- **B.** 20
- **C.** 21 :white_check_mark:
- **D.** 24

### Correct Answer: C. 21

### Explanation

```text
Step-by-step evaluation:
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

Output: 21
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set pp = 3, qq = 6, rr = 5` | `pp=3, qq=6, rr=5` | Variables initialized. |
| 4 | `rr = (qq & pp) ^ rr` | `rr=7` | (6 & 3) ^ 5 = 2 ^ 5 = 7. |
| 5 | `rr = (qq & 7) + qq` | `rr=12` | (6 & 7) + 6 = 6 + 6 = 12. |
| 7 | `if ((3 ^ 5) < qq)` | `3^5=6, qq=6` | 6 < 6 is FALSE. Entire if-block skipped. |
| 16 | `Print pp + qq + rr` | `pp=3, qq=6, rr=12, output=21` | 3 + 6 + 12 = 21. |


---

## Q7. Bitwise AND and Conditional Execution

- **ID:** `pseudo-s1-07`
- **Difficulty:** Medium
- **Topic:** bitwise

### Pseudocode

```
Integer p, q, r
Set p = 8, q = 5, r = 10

if ((p & q) < r)
    q = r & r
    q = 9 + q
end if

if ((p + q) > (r - p))
    q = (q + 5) & p
end if

Print p + q + r
```

### Options

- **A.** 18
- **B.** 20
- **C.** 24
- **D.** 26 :white_check_mark:

### Correct Answer: D. 26

### Explanation

```text
Step-by-step evaluation:
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

Output: 26
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set p = 8, q = 5, r = 10` | `p=8, q=5, r=10` | Initial values. |
| 4 | `if ((p & q) < r)` | `p&q=0, r=10` | 8 & 5 = 0 < 10 is TRUE. |
| 5 | `q = r & r; q = 9 + q` | `q=19` | q = 10; q = 9 + 10 = 19. |
| 9 | `if ((p + q) > (r - p))` | `p+q=27, r-p=2` | 27 > 2 is TRUE. |
| 10 | `q = (q + 5) & p` | `q=8` | 24 & 8 = 8. |
| 13 | `Print p + q + r` | `p=8, q=8, r=10, output=26` | 8 + 8 + 10 = 26. |


---

## Q8. Nested Conditions and XOR

- **ID:** `pseudo-s1-08`
- **Difficulty:** Medium
- **Topic:** bitwise

### Pseudocode

```
Integer a, b, c
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

Print a + b + c
```

### Options

- **A.** 25
- **B.** 40
- **C.** 42 :white_check_mark:
- **D.** 45

### Correct Answer: C. 42

### Explanation

```text
Step-by-step evaluation:
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

Output: 42
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 8, b = 8, c = 9` | `a=8, b=8, c=9` | Initial values. |
| 4 | `if (3 > a)` | `a=8` | 3 > 8 is FALSE -> jumps to else. |
| 13 | `if ((b ^ 4) < (7 + b))` | `b^4=12, 7+b=15` | 8 ^ 4 = 12 < 15 is TRUE. |
| 14 | `b = (b + b) + c` | `b=25` | (8 + 8) + 9 = 25. |
| 18 | `Print a + b + c` | `a=8, b=25, c=9, output=42` | 8 + 25 + 9 = 42. |


---

## Q9. Loop and Continue

- **ID:** `pseudo-s1-09`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
Integer p, q, r
Set p = 0, q = 6, r = 6

for (each r from 2 to 4)
    if ((r ^ q) < q)
        Continue
    end if
    q = 1 + r
    p = 1 + q
end for

Print p + q
```

### Options

- **A.** 5
- **B.** 6 :white_check_mark:
- **C.** 10
- **D.** 12

### Correct Answer: B. 6

### Explanation

```text
Step-by-step evaluation:
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

Output: 6
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set p = 0, q = 6, r = 6` | `p=0, q=6` | p = 0, q = 6. |
| 4 | `r = 2: (r ^ q) < q` | `r=2, r^q=4, q=6` | 2 ^ 6 = 4 < 6 (true) -> Continue. |
| 4 | `r = 3: (r ^ q) < q` | `r=3, r^q=5, q=6` | 3 ^ 6 = 5 < 6 (true) -> Continue. |
| 4 | `r = 4: (r ^ q) < q` | `r=4, r^q=2, q=6` | 4 ^ 6 = 2 < 6 (true) -> Continue. |
| 12 | `Print p + q` | `p=0, q=6, output=6` | p and q unchanged: 0 + 6 = 6. |


---

## Q10. XOR and AND

- **ID:** `pseudo-s1-10`
- **Difficulty:** Easy
- **Topic:** bitwise

### Pseudocode

```
Integer funn(Integer a, Integer b, Integer c)
    c = (c ^ c) & b
    if (9 < c)
        a = (c + 2) & c
        c = 4 ^ a
    end if
    return a + b + c
end function
// Called for a = 0, b = 3, c = 5
```

### Options

- **A.** 3 :white_check_mark:
- **B.** 5
- **C.** 8
- **D.** 12

### Correct Answer: A. 3

### Explanation

```text
Step-by-step evaluation:
1. Initially: a = 0, b = 3, c = 5
2. c = (c ^ c) & b:
   Any number XORed with itself is zero: 5 ^ 5 = 0.
   c = 0 & 3 = 0.
3. Condition: if (9 < c)
   9 < 0 is FALSE.
   The entire if block is skipped.
4. Return a + b + c:
   = 0 + 3 + 0 = 3.

Output: 3
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `funn(0, 3, 5)` | `a=0, b=3, c=5` | Called with a=0, b=3, c=5. |
| 2 | `c = (c ^ c) & b` | `c^c=0, c=0` | 5 ^ 5 = 0, 0 & 3 = 0. c = 0. |
| 3 | `if (9 < c)` | `c=0` | 9 < 0 is FALSE. Skipped. |
| 7 | `return a + b + c` | `a=0, b=3, c=0, output=3` | 0 + 3 + 0 = 3. |


---

## Q11. Continue Inside a Loop

- **ID:** `pseudo-s1-11`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
Integer a, b, c
Set a = 9, b = 4, c = 6

for (each c from 4 to 8)
    if ((a - c) > (c - a))
        Continue
    end if
    a = (3 + 2) + c
    a = a + a
end for

Print a + b
```

### Options

- **A.** 9
- **B.** 13 :white_check_mark:
- **C.** 18
- **D.** 26

### Correct Answer: B. 13

### Explanation

```text
Condition analysis:
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

Output: 13
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 9, b = 4, c = 6` | `a=9, b=4` | a = 9, b = 4. |
| 5 | `if ((a - c) > (c - a))` | `condition=a > c` | (a - c) > (c - a) simplifies to a > c. |
| 6 | `Loop iterations c=4..8` | `a=9` | 9 > c is true for all c in {4,5,6,7,8}. Continue fires every iteration. |
| 12 | `Print a + b` | `a=9, b=4, output=13` | 9 + 4 = 13. |


---

## Q12. Logical OR Condition

- **ID:** `pseudo-s1-12`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer a, b, c
Set a = 4, b = 2, c = 4

if (a > c || (a + b) < (b - a))
    b = 8 + a
end if

Print a + b + c
```

### Options

- **A.** 8
- **B.** 10 :white_check_mark:
- **C.** 14
- **D.** 16

### Correct Answer: B. 10

### Explanation

```text
Step-by-step evaluation:
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

Output: 10
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 4, b = 2, c = 4` | `a=4, b=2, c=4` | Initial values. |
| 4 | `a > c` | `a=4, c=4` | 4 > 4 is FALSE. |
| 4 | `(a + b) < (b - a)` | `a+b=6, b-a=-2` | 6 < -2 is FALSE. |
| 4 | `false || false` | `result=false` | Entire OR condition is FALSE. if-body skipped. |
| 8 | `Print a + b + c` | `a=4, b=2, c=4, output=10` | 4 + 2 + 4 = 10. |


---

## Q13. XOR and Boolean Conditions

- **ID:** `pseudo-s1-13`
- **Difficulty:** Medium
- **Topic:** bitwise

### Pseudocode

```
Integer a, b, c
Set a = 3, b = 1, c = 2

b = b ^ a

if (b && c)
    b = 1
    if (a)
        a = a mod 1
    end if
    c = 0
end if

Print a + b + c
```

### Options

- **A.** 0
- **B.** 1 :white_check_mark:
- **C.** 3
- **D.** 6

### Correct Answer: B. 1

### Explanation

```text
Step-by-step evaluation:
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

Output: 1
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 3, b = 1, c = 2` | `a=3, b=1, c=2` | Initial values. |
| 4 | `b = b ^ a` | `b=2` | 1 ^ 3 = 2. |
| 6 | `if (b && c)` | `b=2, c=2` | 2 && 2 is TRUE. |
| 7 | `b = 1` | `b=1` | b becomes 1. |
| 9 | `a = a mod 1` | `a=0` | 3 mod 1 = 0. a becomes 0. |
| 11 | `c = 0` | `c=0` | c becomes 0. |
| 14 | `Print a + b + c` | `a=0, b=1, c=0, output=1` | 0 + 1 + 0 = 1. |


---

## Q14. Two-Dimensional Array and Jump

- **ID:** `pseudo-s1-14`
- **Difficulty:** Medium
- **Topic:** arrays

### Pseudocode

```
char arr[4][2]
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

print a
```

### Options

- **A.** 12 :white_check_mark:
- **B.** 21
- **C.** 33
- **D.** 100

### Correct Answer: A. 12

### Explanation

```text
Step-by-step evaluation:
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

Output: 12
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 10 | `set a = 0` | `a=0` | a initialized to 0. |
| 12 | `k = 0` | `k=0` | First outer loop iteration. |
| 13 | `j = 0: a = a + arr[k][j]` | `a=12, arr[0][0]=12` | a = 0 + 12 = 12. |
| 16 | `jump out of the loop` | `a=12` | Break immediately exits the outer loop. |
| 19 | `print a` | `output=12` | Final output is 12. |


---

## Q15. Array Modification

- **ID:** `pseudo-s1-15`
- **Difficulty:** Medium
- **Topic:** arrays

### Pseudocode

```
Integer arr[8]
set arr[8] = {1, 3, 17, 15, 9}

for (each a from 0 to 4)
    if (a mod 2 equals 0)
        arr[a] = arr[a] + 1
    else
        arr[a] = arr[a] - 1
    end if
end for

print arr[1] + arr[2] * arr[4]
```

### Options

- **A.** 182 :white_check_mark:
- **B.** 180
- **C.** 178
- **D.** 170

### Correct Answer: A. 182

### Explanation

```text
Step-by-step evaluation:
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

Output: 182
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `arr = {1, 3, 17, 15, 9}` | `arr=[1, 3, 17, 15, 9]` | Original array. |
| 5 | `a=0 (even): arr[0] = 1+1` | `arr[0]=2` | index 0 becomes 2. |
| 7 | `a=1 (odd):  arr[1] = 3-1` | `arr[1]=2` | index 1 becomes 2. |
| 5 | `a=2 (even): arr[2] = 17+1` | `arr[2]=18` | index 2 becomes 18. |
| 7 | `a=3 (odd):  arr[3] = 15-1` | `arr[3]=14` | index 3 becomes 14. |
| 5 | `a=4 (even): arr[4] = 9+1` | `arr[4]=10` | index 4 becomes 10. |
| 11 | `print arr[1] + arr[2] * arr[4]` | `expression=2 + 18 * 10, output=182` | 2 + 180 = 182. |


---

## Q16. While Loop with Jump

- **ID:** `pseudo-s1-16`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer x
Set x = 15

while (x EQUALS 15)
    print "student"
    jump out of the loop
end while
```

### Options

- **A.** student student
- **B.** student :white_check_mark:
- **C.** No output
- **D.** Infinite loop

### Correct Answer: B. student

### Explanation

```text
Step-by-step evaluation:
1. Initially: x = 15
2. while (x EQUALS 15) evaluates to true because 15 == 15.
3. Inside loop:
   print "student" is executed.
4. Next line: jump out of the loop (break).
   Immediately terminates the while loop.
5. The string "student" is printed exactly once.

Output: student
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set x = 15` | `x=15` | x initialized to 15. |
| 4 | `while (x EQUALS 15)` | `x=15` | Condition 15 == 15 is true. |
| 5 | `print "student"` | `output=student` | Prints "student". |
| 6 | `jump out of the loop` | `` | Break exits loop immediately. |


---

## Q17. Repeated Modulo Operations

- **ID:** `pseudo-s1-17`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer a
Set a = 27

a = a mod 30
a = a mod 29
a = a mod 28
a = a mod 27

Print a
```

### Options

- **A.** 1
- **B.** 26
- **C.** 27
- **D.** 0 :white_check_mark:

### Correct Answer: D. 0

### Explanation

```text
Step-by-step evaluation:
1. Start: a = 27
2. a = 27 mod 30 = 27 (since 27 < 30, remainder is 27)
3. a = 27 mod 29 = 27 (since 27 < 29, remainder is 27)
4. a = 27 mod 28 = 27 (since 27 < 28, remainder is 27)
5. a = 27 mod 27 = 0 (27 divided by 27 gives quotient 1 and remainder 0)
6. Print a:
   Outputs 0.

Output: 0
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 27` | `a=27` | a initialized to 27. |
| 4 | `a = a mod 30` | `a=27` | 27 mod 30 = 27. |
| 5 | `a = a mod 29` | `a=27` | 27 mod 29 = 27. |
| 6 | `a = a mod 28` | `a=27` | 27 mod 28 = 27. |
| 7 | `a = a mod 27` | `a=0` | 27 mod 27 = 0. |
| 9 | `Print a` | `output=0` | Final output is 0. |


---

## Q18. Recursive Function — p, q

- **ID:** `pseudo-s1-18`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
Integer fun(Integer p, Integer q)
    if (p > 1)
        fun(p - 3, q + 3)
        Print q
    end if
end function
// Executed for p = 18, q = 3
```

### Options

- **A.** 18 15 12 9 6 3
- **B.** 21 18 15 12 9 6 3 :white_check_mark:
- **C.** 21 18 15 12 9 6
- **D.** 18 15 12 9 6

### Correct Answer: B. 21 18 15 12 9 6 3

### Explanation

```text
Track recursive call chain:
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

Output: 21 18 15 12 9 6 3
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `fun(18, 3)` | `p=18, q=3` | Initial call. |
| 3 | `Recursive descent...` | `chain=(18,3)->(15,6)->(12,9)->(9,12)->(6,15)->(3,18)->(0,21)` | p decreases by 3, q increases by 3 until p <= 1. |
| 2 | `Base case in fun(0, 21)` | `p=0, q=21` | 0 > 1 is false. Stack unwinds. |
| 4 | `Print q during unwinding` | `output=21 18 15 12 9 6 3` | Values of q print in reverse order. |


---

# Set 2: Previous Year Questions Collection (20 Questions)

## Q1. Prime Number / Conditional Output

- **ID:** `pseudo-s2-01`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
A computer program is designed to operate on positive integers using the following steps:

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

For how many values of input X less than 50 will the computer display the same output?
```

### Options

- **A.** 0 :white_check_mark:
- **B.** 1
- **C.** 2
- **D.** 3

### Correct Answer: A. 0

### Explanation

```text
There are three possible cases based on X:
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
Final Answer: 0 values (Option A)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Input integer X (< 50)` | `X=Positive integer < 50` | Analyze three possible formula branches. |
| 6 | `Prime branch: Y = X² + 1` | `outputs=5, 10, 26, 50, 122...` | Strictly increasing quadratic sequence. |
| 10 | `Non-prime even: Y = 2X + 4` | `outputs=12, 16, 20, 24...` | Even values strictly separated. |
| 11 | `Non-prime odd: Y = 2X - 1` | `outputs=1, 17, 29, 41...` | Odd values that never collide with primes. |
| 12 | `Compare output collisions` | `duplicates=0` | No collisions occur for any X < 50. |


---

## Q2. Nested if-else Ordering

- **ID:** `pseudo-s2-02`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
main()
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

What will be the value of x so that "Karthik" will be printed?
```

### Options

- **A.** 5
- **B.** 10
- **C.** 15
- **D.** No value of x :white_check_mark:

### Correct Answer: D. No value of x

### Explanation

```text
Look at the first condition in the if-else ladder:
if (x > 4)
    print("Binod");

For "Karthik" to execute, the first condition must be false:
x <= 4

However, the condition for printing Karthik is:
else if (x > 10)

These two conditions (x <= 4 AND x > 10) cannot simultaneously be true for any real number. Any value of x > 10 will always satisfy (x > 4) first and print "Binod".

Therefore, "Karthik" can never be printed.
Final Answer: No value of x (Option D)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 4 | `if (x > 4) -> print("Binod")` | `condition=x > 4` | Any x > 4 immediately enters this branch. |
| 6 | `else if (x > 10) -> print("Karthik")` | `requirement=x <= 4 AND x > 10` | Reaching this branch requires x <= 4. |
| 7 | `Conflict check` | `possible=false` | x cannot simultaneously satisfy x <= 4 and x > 10. |
| 12 | `Conclusion` | `output=Karthik is unreachable` | No value of x will print "Karthik". |


---

## Q3. Variable Manipulation

- **ID:** `pseudo-s2-03`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Input m = 9, n = 6
m = m + 1
n = n - 1
m = m + n

if (m > n)
    print m
else
    print n
```

### Options

- **A.** 14
- **B.** 15 :white_check_mark:
- **C.** 16
- **D.** 17

### Correct Answer: B. 15

### Explanation

```text
Initially:
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

Final Answer: 15 (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `Input m = 9, n = 6` | `m=9, n=6` | Initial values. |
| 2 | `m = m + 1` | `m=10, n=6` | m becomes 10. |
| 3 | `n = n - 1` | `m=10, n=5` | n becomes 5. |
| 4 | `m = m + n` | `m=15, n=5` | m = 10 + 5 = 15. |
| 5 | `if (m > n)` | `condition=15 > 5 (true)` | Condition is true. |
| 6 | `print m` | `output=15` | Prints 15. |


---

## Q4. Recursive Function

- **ID:** `pseudo-s2-04`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
Integer fun(Integer x, Integer y)
    if (x > 1)
        fun(x - 2, y + 2)
    end if
    print y
End function fun()

// Executed for x = 4 and y = 5
```

### Options

- **A.** 5 7 9
- **B.** 9 7 5 :white_check_mark:
- **C.** 7 9 5
- **D.** 9 5 7

### Correct Answer: B. 9 7 5

### Explanation

```text
Call Stack Trace for fun(4, 5):
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
Final Answer: 9 7 5 (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `fun(4, 5)` | `x=4, y=5` | 4 > 1 is true, invokes fun(2, 7). |
| 3 | `fun(2, 7)` | `x=2, y=7` | 2 > 1 is true, invokes fun(0, 9). |
| 3 | `fun(0, 9)` | `x=0, y=9` | 0 > 1 is false. Base case reached. |
| 5 | `print y in fun(0, 9)` | `output=9` | Prints 9. |
| 5 | `print y in fun(2, 7)` | `output=9 7` | Prints 7. |
| 5 | `print y in fun(4, 5)` | `output=9 7 5` | Prints 5. |


---

## Q5. Character Output in C

- **ID:** `pseudo-s2-05`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
#include <stdio.h>
int main()
{
    char ch = 'A';
    printf("%c\n", ch);
    return 0;
}
```

### Options

- **A.** 65
- **B.** A :white_check_mark:
- **C.** a
- **D.** %c

### Correct Answer: B. A

### Explanation

```text
In C:
- The variable 'char ch = 'A'' stores the ASCII representation of the character 'A' (value 65).
- In printf("%c\n", ch), the '%c' format specifier prints the character representation rather than its numerical ASCII code.
- Therefore, it prints: A.

Final Answer: A (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 4 | `char ch = 'A';` | `ch='A', ascii=65` | ch stores character literal A. |
| 5 | `printf("%c\n", ch);` | `format=%c, output=A` | %c specifier outputs character glyph A. |
| 6 | `return 0;` | `status=0` | Program exits. |


---

## Q6. Bitwise XOR and AND

- **ID:** `pseudo-s2-06`
- **Difficulty:** Medium
- **Topic:** bitwise

### Pseudocode

```
Integer funn(Integer a, Integer b)
    if (b ^ a < b & a)
        return a
    end if
    return a + b
End function funn()

What does the function return?
```

### Options

- **A.** Always a
- **B.** Always a + b
- **C.** Either a or a + b, depending on the values of a and b :white_check_mark:
- **D.** Always 0

### Correct Answer: C. Either a or a + b, depending on the values of a and b

### Explanation

```text
Analysis:
- The function does not have fixed constants for inputs a and b.
- The condition (b ^ a < b & a) depends on the relational comparison and the bitwise representations of a and b:
  - If the condition is true, the function returns a.
  - Otherwise, it falls through to return a + b.
- Therefore, the exact return value cannot be fixed as a single constant without knowing the arguments. It returns either a or a + b depending on the values of a and b.

Final Answer: Either a or a + b, depending on the values of a and b (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `funn(Integer a, Integer b)` | `a=unknown, b=unknown` | Function receives general inputs a and b. |
| 2 | `if (b ^ a < b & a)` | `branch1=return a, branch2=return a + b` | Branch condition depends on values of a and b. |
| 3 | `return a` | `condition=true` | Executed when condition holds. |
| 6 | `return a + b` | `condition=false` | Executed when condition is false. |


---

## Q7. Arithmetic + Conditional

- **ID:** `pseudo-s2-07`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer a, b, c
Set a = 3, b = 4, c = 6
c = (5 + 7) + c
if ((c - 6) > (6 - c))
    b = b + b
end if
Print a + b + c
```

### Options

- **A.** 25
- **B.** 27
- **C.** 29 :white_check_mark:
- **D.** 31

### Correct Answer: C. 29

### Explanation

```text
Initially:
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

Final Answer: 29 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 3, b = 4, c = 6` | `a=3, b=4, c=6` | Initial variable values. |
| 3 | `c = (5 + 7) + c` | `c=18` | c = 12 + 6 = 18. |
| 4 | `if ((c - 6) > (6 - c))` | `left=12, right=-12, cond=12 > -12 (true)` | Condition is true. |
| 5 | `b = b + b` | `b=8` | b = 4 + 4 = 8. |
| 7 | `Print a + b + c` | `output=3 + 8 + 18 = 29` | Prints 29. |


---

## Q8. Nested Loops with XOR and AND

- **ID:** `pseudo-s2-08`
- **Difficulty:** Hard
- **Topic:** bitwise

### Pseudocode

```
// For a = 2, b = 6, c = 7
Integer funn(Integer a, Integer b, Integer c)
    for (each c from 2 to 5)
        b = (a + 5) ^ a
        a = (a) + b
    end for
    for (each c from 2 to 3)
        b = (c + a) & c
    end for
    return a + b
```

### Options

- **A.** 31
- **B.** 33
- **C.** 35 :white_check_mark:
- **D.** 37

### Correct Answer: C. 35

### Explanation

```text
Given: a = 2, b = 6, c = 7

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

Final Answer: 35 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `funn(2, 6, 7)` | `a=2, b=6, c=7` | Initial inputs. |
| 2 | `Loop 1, c = 2` | `b=7 ^ 2 = 5, a=2 + 5 = 7` | After iter 1: a=7, b=5. |
| 2 | `Loop 1, c = 3` | `b=12 ^ 7 = 11, a=7 + 11 = 18` | After iter 2: a=18, b=11. |
| 2 | `Loop 1, c = 4` | `b=23 ^ 18 = 5, a=18 + 5 = 23` | After iter 3: a=23, b=5. |
| 2 | `Loop 1, c = 5` | `b=28 ^ 23 = 11, a=23 + 11 = 34` | After iter 4: a=34, b=11. |
| 6 | `Loop 2, c = 2` | `b=(2 + 34) & 2 = 0` | 36 & 2 = 0. |
| 6 | `Loop 2, c = 3` | `b=(3 + 34) & 3 = 1` | 37 & 3 = 1. |
| 9 | `return a + b` | `output=34 + 1 = 35` | Final return is 35. |


---

## Q9. Nested if, XOR and AND

- **ID:** `pseudo-s2-09`
- **Difficulty:** Hard
- **Topic:** bitwise

### Pseudocode

```
Integer funn(Integer a, Integer b, Integer c)
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

What will be the output of the pseudocode?
```

### Options

- **A.** 24
- **B.** 27
- **C.** 31
- **D.** Cannot be determined from the given information :white_check_mark:

### Correct Answer: D. Cannot be determined from the given information

### Explanation

```text
Analysis:
- The function funn(Integer a, Integer b, Integer c) has branching conditions that depend strictly on initial arguments for a, b, and c.
- In the original Accenture exam question paper/screenshot, no initial call or argument values (e.g. funn(x, y, z)) were provided.
- Without these input values, the conditions ((c ^ b ^ a) > (a ^ c)) cannot be evaluated, and a concrete numerical output cannot be calculated.
- Official Answer Key Option: D.

Final Answer: Cannot be determined from the given information (Option D)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `funn(Integer a, Integer b, Integer c)` | `a=?, b=?, c=?` | No input parameters supplied in the question. |
| 2 | `if ((c ^ b ^ a) > (a ^ c))` | `branch=Indeterminate` | Cannot branch without input values. |
| 16 | `return a + b + c` | `result=Cannot be determined` | Master key marks Option D as correct. |


---

## Q10. Volume and Surface Area

- **ID:** `pseudo-s2-10`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
BEGIN
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
END
```

### Options

- **A.** Volume = 6, Surface Area = 12
- **B.** Volume = 8, Surface Area = 24 :white_check_mark:
- **C.** Volume = 8, Surface Area = 12
- **D.** Volume = 12, Surface Area = 24

### Correct Answer: B. Volume = 8, Surface Area = 24

### Explanation

```text
All dimensions are 2:
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
Final Answer: Volume = 8, Surface Area = 24 (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Initialize dimensions to 2` | `width=2, depth=2, height=2` | All sides are 2. |
| 6 | `vol = height * width * depth` | `vol=8` | 2 * 2 * 2 = 8. |
| 8 | `surf1, surf2, surf3` | `surf1=4, surf2=4, surf3=4` | Each side area is 4. |
| 12 | `surface area = 2 * (surf1 + surf2 + surf3)` | `surfaceArea=24` | 2 * (4 + 4 + 4) = 24. |
| 14 | `Display statements` | `output=Volume = 8, Surface Area = 24` | Matches Option B. |


---

## Q11. Recursive Function — Number of Calls

- **ID:** `pseudo-s2-11`
- **Difficulty:** Medium
- **Topic:** recursion

### Pseudocode

```
1. Declare the Function and give integer as a parameter.
2. Write the main function. Call the function and give 5 as parameter.
3. Write a declared function along with formal parameter num.
    If num > 0
        print "Welcome"
        Function call inside function(num--) as formal parameter.
4. End.

How many times will the code print Welcome?
```

### Options

- **A.** 4
- **B.** 5 :white_check_mark:
- **C.** 6
- **D.** Infinite times

### Correct Answer: B. 5

### Explanation

```text
Initial call: function(5)
- num = 5: condition (5 > 0) is true -> prints "Welcome" (1st time), calls function with 4
- num = 4: condition (4 > 0) is true -> prints "Welcome" (2nd time), calls function with 3
- num = 3: condition (3 > 0) is true -> prints "Welcome" (3rd time), calls function with 2
- num = 2: condition (2 > 0) is true -> prints "Welcome" (4th time), calls function with 1
- num = 1: condition (1 > 0) is true -> prints "Welcome" (5th time), calls function with 0
- num = 0: condition (0 > 0) is false -> terminates recursion.

Welcome is printed for: 5, 4, 3, 2, 1 (total 5 times).
Final Answer: 5 (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Initial call: function(5)` | `num=5` | Function invoked with 5. |
| 3 | `num = 5 > 0 -> print "Welcome"` | `count=1, next=4` | 1st print. |
| 3 | `num = 4 > 0 -> print "Welcome"` | `count=2, next=3` | 2nd print. |
| 3 | `num = 3 > 0 -> print "Welcome"` | `count=3, next=2` | 3rd print. |
| 3 | `num = 2 > 0 -> print "Welcome"` | `count=4, next=1` | 4th print. |
| 3 | `num = 1 > 0 -> print "Welcome"` | `count=5, next=0` | 5th print. |
| 3 | `num = 0 > 0 (false)` | `count=5, status=Terminated` | Base case reached. Total = 5 times. |


---

## Q12. Reverse a String Using an Array

- **ID:** `pseudo-s2-12`
- **Difficulty:** Easy
- **Topic:** arrays

### Pseudocode

```
BEGIN
    Declare an array variable called word
    Declare a counter
    Store a string in the array word
    FOR counter = (length of the word) - 1 TO 0
        counter = counter - 1
        print word[counter]
    END FOR
END

What does the following pseudocode do?
```

### Options

- **A.** Prints the string normally
- **B.** Prints the string in reverse order :white_check_mark:
- **C.** Prints only the first character
- **D.** Counts the number of characters

### Correct Answer: B. Prints the string in reverse order

### Explanation

```text
Algorithm Analysis:
- The counter begins at '(length of the word) - 1', which points to the last character in the string.
- The loop iterates backwards down TO 0, which corresponds to the first character of the string.
- Accessing indices from (length - 1) down to 0 outputs the characters in reverse order (e.g. "HELLO" -> "OLLEH").
- Therefore, the algorithm prints the string in reverse order.

Final Answer: Prints the string in reverse order (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 4 | `Store string in array word` | `sample="HELLO"` | Indexed from 0 to length - 1. |
| 5 | `FOR counter = (length - 1) TO 0` | `start=length - 1, end=0` | Iterates backwards from end to start. |
| 7 | `print word[counter]` | `order=Last to first character` | Outputs string reversed. |
| 9 | `END` | `output=Reverse order string` | Matches Option B. |


---

## Q13. Type Conversion + Increment/Decrement

- **ID:** `pseudo-s2-13`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
1. Initialise the float variable with 20.45
2. Convert the float value in variable to integer.
3. Perform the following operations on variable:
    Post Decrement
    +
    Pre Decrement
    -
    Pre Increment
4. Print the value.
5. End

If the following pseudocode is implemented, what will be the output?
```

### Options

- **A.** 17
- **B.** 18
- **C.** 19
- **D.** Cannot be determined reliably from the supplied pseudocode :white_check_mark:

### Correct Answer: D. Cannot be determined reliably from the supplied pseudocode

### Explanation

```text
Step 1:
Converting float 20.45 to integer yields 20.

Step 2:
The sequence of operations corresponds to the expression:
x-- + --x - ++x

In standard C/C++, modifying a scalar variable multiple times without an intervening sequence point results in undefined/unsequenced behavior. Compilers are allowed to evaluate these increments and decrements in varying orders, making the output compiler-dependent rather than deterministic.

Official PYQ Answer Key: Language-dependent / Cannot be determined reliably from the supplied pseudocode (Option D).

Final Answer: Cannot be determined reliably from the supplied pseudocode (Option D)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `float var = 20.45` | `var=20.45` | Float initialized. |
| 2 | `Convert to integer` | `x=20` | x = 20. |
| 3 | `x-- + --x - ++x` | `status=Unsequenced modifications` | Undefined behavior in C standard. |
| 4 | `Print the value` | `answer=Ambiguous / Language-dependent` | Master key answer is Option D. |


---

## Q14. Function Arithmetic

- **ID:** `pseudo-s2-14`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
Integer funn(Integer a, Integer b)
    a = a + b + 2
    a = a * 2
    if (a)
        return a - b
    end if
    return a + b
End function funn()

What is the function's return value?
```

### Options

- **A.** a + b
- **B.** a - b
- **C.** 2(a+b+2) - b :white_check_mark:
- **D.** Always 0

### Correct Answer: C. 2(a+b+2) - b

### Explanation

```text
Trace the operations on 'a':
1. a = a + b + 2
2. a = a * 2 = 2 * (a + b + 2)
3. if (a):
   - Non-zero value evaluates to true.
   - Executes: return a - b
4. Substituting the updated expression for a:
   return 2(a + b + 2) - b

Final Answer: 2(a+b+2) - b (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `a = a + b + 2` | `a=a + b + 2` | First assignment. |
| 3 | `a = a * 2` | `a=2(a + b + 2)` | Multiplied by 2. |
| 4 | `if (a)` | `cond=Non-zero check (true)` | Enters if branch. |
| 5 | `return a - b` | `returnVal=2(a + b + 2) - b` | Substitutes updated a. |


---

## Q15. Loop Variable Modification

- **ID:** `pseudo-s2-15`
- **Difficulty:** Medium
- **Topic:** loops

### Pseudocode

```
Integer x, y
for (each x from 1 to 11)
    x = x + 2
end for
Print x
```

### Options

- **A.** 11
- **B.** 12
- **C.** 13 :white_check_mark:
- **D.** 14

### Correct Answer: C. 13

### Explanation

```text
Trace of loop variable x:
- x begins at 1.
- In each iteration, x = x + 2:
  Sequence of values: 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13.
- When x = 11, executing x = x + 2 updates x to 13.
- The loop termination condition checks whether x <= 11.
- Since 13 > 11, the loop terminates.
- Print x prints 13.

Final Answer: 13 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `for (each x from 1 to 11)` | `x=1` | Loop begins at 1. |
| 3 | `x = x + 2` | `progression=1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13` | x jumps by 2 each cycle. |
| 4 | `end for` | `x=13` | 13 exceeds 11, loop exits. |
| 5 | `Print x` | `output=13` | Prints 13. |


---

## Q16. While Loop + Division

- **ID:** `pseudo-s2-16`
- **Difficulty:** Hard
- **Topic:** loops

### Pseudocode

```
Integer a, b
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
end if
```

### Options

- **A.** 340
- **B.** 342
- **C.** 344 :white_check_mark:
- **D.** 346

### Correct Answer: C. 344

### Explanation

```text
Initially:
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

Final Answer: 344 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set a = 125, b = 100` | `a=125, b=100` | Initial values. |
| 4 | `if ((a + b) MOD 2 NOT EQUALS 0)` | `sum=225, mod2=1, cond=true` | Enters while loop. |
| 6 | `Iter 1: b=225, a=62` | `a=62, b=225` | b = 100 + 125, a = 125 / 2 = 62. |
| 6 | `Iter 2: b=287, a=31` | `a=31, b=287` | b = 225 + 62, a = 62 / 2 = 31. |
| 6 | `Iter 3: b=318, a=15` | `a=15, b=318` | b = 287 + 31, a = 31 / 2 = 15. |
| 6 | `Iter 4: b=333, a=7` | `a=7, b=333` | b = 318 + 15, a = 15 / 2 = 7. |
| 6 | `Iter 5: b=340, a=3` | `a=3, b=340` | b = 333 + 7, a = 7 / 2 = 3. |
| 6 | `Iter 6: b=343, a=1` | `a=1, b=343` | b = 340 + 3, a = 3 / 2 = 1. |
| 6 | `Iter 7: b=344, a=0` | `a=0, b=344` | b = 343 + 1 = 344, a = 0. Loop stops. |
| 9 | `Print b` | `output=344` | Outputs 344. |


---

## Q17. Integer Division and Modulo

- **ID:** `pseudo-s2-17`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer x, y
Set x = 16, y = 6
x = x + y
y = x / 10
x = (x - y) MOD 5
x = x + 6
Print x, y
```

### Options

- **A.** 6 2 :white_check_mark:
- **B.** 7 2
- **C.** 6 3
- **D.** 8 2

### Correct Answer: A. 6 2

### Explanation

```text
Initially:
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

Final Answer: 6 2 (Option A)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set x = 16, y = 6` | `x=16, y=6` | Initial values. |
| 3 | `x = x + y` | `x=22` | x = 16 + 6 = 22. |
| 4 | `y = x / 10` | `y=2` | 22 / 10 = 2. |
| 5 | `x = (x - y) MOD 5` | `x=0` | 20 MOD 5 = 0. |
| 6 | `x = x + 6` | `x=6` | x = 0 + 6 = 6. |
| 7 | `Print x, y` | `output=6 2` | Outputs 6 and 2. |


---

## Q18. Array Modification

- **ID:** `pseudo-s2-18`
- **Difficulty:** Medium
- **Topic:** arrays

### Pseudocode

```
Integer j, m
Set m = 1, j = 1
Integer a[3] = {0, 1, 0}

a[0] = a[0] + a[1]
a[1] = a[1] + a[2]
a[2] = a[2] + a[0]

if (a[0])
    a[j] = 5
end if

m = m + a[j]
Print m
```

### Options

- **A.** 5
- **B.** 6 :white_check_mark:
- **C.** 7
- **D.** 8

### Correct Answer: B. 6

### Explanation

```text
Initial array:
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

Final Answer: 6 (Option B)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set m = 1, j = 1, a = {0, 1, 0}` | `m=1, j=1, a=[0, 1, 0]` | Initial array and variables. |
| 4 | `a[0] = a[0] + a[1]` | `a[0]=1, a=[1, 1, 0]` | 0 + 1 = 1. |
| 5 | `a[1] = a[1] + a[2]` | `a[1]=1, a=[1, 1, 0]` | 1 + 0 = 1. |
| 6 | `a[2] = a[2] + a[0]` | `a[2]=1, a=[1, 1, 1]` | 0 + 1 = 1. |
| 8 | `if (a[0]) -> a[1] = 5` | `a[1]=5, a=[1, 5, 1]` | Condition true; a[1] set to 5. |
| 12 | `m = m + a[j]` | `m=6` | m = 1 + 5 = 6. |
| 13 | `Print m` | `output=6` | Outputs 6. |


---

## Q19. For Loop and Summation

- **ID:** `pseudo-s2-19`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Input f = 5, g = 9
Set sum = 0
Integer n

if (g > f)
    for (n = f; n < g; n = n + 1)
        sum = sum + n
    end for
else
    Print "Error Message"
end if

Print sum
```

### Options

- **A.** 20
- **B.** 24
- **C.** 26 :white_check_mark:
- **D.** 30

### Correct Answer: C. 26

### Explanation

```text
Given:
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

Final Answer: 26 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 1 | `Input f = 5, g = 9, sum = 0` | `f=5, g=9, sum=0` | Initial inputs. |
| 5 | `if (g > f)` | `condition=9 > 5 (true)` | Enters loop. |
| 6 | `for (n = 5; n < 9; n = n + 1)` | `n_values=5, 6, 7, 8` | Iterates through 5, 6, 7, 8. |
| 7 | `Accumulate sum` | `sum=5 + 6 + 7 + 8 = 26` | Sum accumulates. |
| 13 | `Print sum` | `output=26` | Outputs 26. |


---

## Q20. Post-Increment + Pre-Increment

- **ID:** `pseudo-s2-20`
- **Difficulty:** Easy
- **Topic:** loops

### Pseudocode

```
Integer x, y, z
Set x = 2, y = 4
z = x++ + ++y
Print z
```

### Options

- **A.** 5
- **B.** 6
- **C.** 7 :white_check_mark:
- **D.** 8

### Correct Answer: C. 7

### Explanation

```text
Initially:
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

Final Answer: 7 (Option C)
```

### Step-by-Step Trace

| Line | Code | Variables | Note |
|------|------|-----------|------|
| 2 | `Set x = 2, y = 4` | `x=2, y=4` | Initial values. |
| 3 | `Evaluate x++` | `valUsed=2, newX=3` | Uses 2, increments x to 3. |
| 3 | `Evaluate ++y` | `valUsed=5, newY=5` | Increments y to 5, uses 5. |
| 3 | `z = 2 + 5` | `z=7` | z = 2 + 5 = 7. |
| 4 | `Print z` | `output=7` | Outputs 7. |


---

# Design, Architecture & Styling of the Pseudocode Round

## 1. Architecture

The Pseudocode Round is served at /pseudocode (with /pseudo redirecting to it) by src/pages/PseudocodePage.jsx.

### Component stack

| Layer | File | Responsibility |
|-------|------|----------------|
| Page | src/pages/PseudocodePage.jsx | State orchestration, practice/exam modes, timer, scorecard |
| Tracer | src/components/pseudocode/PseudocodeTracer.jsx | Interactive step-by-step execution trace viewer |
| Handbook | src/components/pseudocode/PseudocodeHandbookModal.jsx | Modal overlay with operator-precedence quick reference |
| Scratchpad | src/components/pseudocode/PseudocodeScratchpad.jsx | Free-form rough-work area during tracing |
| Data | src/data/pseudocodeQuestions.js | Question bank (38 PYQs), topic list, set metadata, handbook content, filterPseudocodeQuestions() helper |
| Persistence | src/utils/pseudocodeStorage.js | pseudocodeStorage — answers, bookmarks and exam results (localStorage) |
| SEO | src/components/SEO.jsx + src/config/seo.js | seoConfig.pseudocode meta tags |

### Data flow

1. PSEUDOCODE_SETS renders set tabs (Set 1: 18 Qs, Set 2: 20 Qs).
2. filterPseudocodeQuestions({ topic, set }) produces the active question list (memoized with useMemo).
3. Topic selection syncs to the URL via useSearchParams (?topic=..., replace: true).
4. Selecting an option calls pseudocodeStorage.saveAnswer() then React state refreshes from storage.
5. Exam mode: timer = questions x 2 minutes; on expiry or Finish, handleFinishExam() computes score %, correct count and time used, then persists via pseudocodeStorage.saveExamResult().
6. Practice mode: immediate per-option feedback with explanation and interactive trace.

### State model (PseudocodePage)

- activeTopic — current topic filter (URL-synced)
- selectedSet — 'set-1' | 'set-2'
- mode — 'practice' | 'exam'
- currentIndex — active question pointer
- userAnswers / bookmarks — hydrated from pseudocodeStorage
- examRemainingSeconds / examFinished / examScorecard — exam-mode lifecycle

## 2. Styling & CSS Approach

The page uses no dedicated CSS file. Styling is a hybrid of:

1. Inline React style objects — the dominant approach for the page banner, set tabs, mode switcher, buttons, and question cards. Self-contained, theme-aware styling without class collisions.
2. Tailwind utility classes — used in supporting components (e.g., Navbar: text-amber-400) and layout helpers.
3. Semantic container class — root wrapper div.pseudocode-page-container for page-level scoping.

### Key visual tokens (dark theme)

| Token | Value | Usage |
|-------|-------|-------|
| Banner background | linear-gradient(135deg, rgba(30,41,59,.95), rgba(15,23,42,.98)) | Top hero banner |
| Accent (amber) | #eab308 / #facc15 | Badges, handbook button, borders |
| Panel base | #0f172a | Buttons, segmented controls |
| Border neutral | #334155 | Mode switcher container |
| Practice active | #0284c7 (sky) | Practice-mode pill |
| Exam active | #ea580c (orange) | Exam-mode pill |
| Text primary / muted | #f8fafc / #94a3b8 | Headings / descriptions |
| Radii | 20px banner, 10-12px controls, 6-8px pills | Rounded system |

### Interaction & UX patterns

- Segmented Practice / Exam toggle inside a bordered pill container.
- Badge chip (amber, border-radius 12px) for TECHNICAL ROUND ASSESSMENT.
- Question navigation with ArrowLeft / ArrowRight icons.
- Bookmark toggle and option-level correct/incorrect feedback icons.
- Handbook opens as a modal overlay; Scratchpad available during tracing.
- Fully responsive via flexWrap wrap on all major rows.

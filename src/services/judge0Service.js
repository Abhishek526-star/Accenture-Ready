// src/services/judge0Service.js
// Judge0 Community Edition (CE) Online Code Execution Service
import { DSA_TEST_CASES } from '../data/dsaTestCases.js';
import { buildDsaPracticeHarness } from './dsaPracticeHarness.js';

export const JUDGE0_LANGUAGE_IDS = {
  python: 71,    // Python (3.8.1)
  java: 62,      // Java (OpenJDK 13.0.1)
  cpp: 54,       // C++ (GCC 9.2.0)
  csharp: 51,    // C# (Mono 6.6.0.161)
  javascript: 63 // JavaScript (Node.js 12.14.0)
};

const JUDGE0_BASE_URL = 'https://ce.judge0.com';

/**
 * Normalizes stdout/expected strings for robust comparison
 */
export function normalizeOutput(output) {
  if (output === null || output === undefined) return '';
  if (typeof output === 'object') output = JSON.stringify(output);
  return String(output)
    .trim()
    .replace(/\r\n/g, '\n')
    .replace(/\s*,\s*/g, ',')
    .split(/\s+/)
    .join(' ')
    .toLowerCase();
}

/**
 * Parses a `TEST_RES:` stdout payload without destroying user-formatted decimals.
 *
 * Numeric literals that carry explicit fraction digits (e.g. "12.00", "0.00",
 * "-3.50") MUST stay strings, otherwise JSON.parse collapses them to JS numbers
 * and String() re-prints "12" instead of "12.00", causing bogus test failures.
 * Structured payloads (arrays, objects, booleans, null) still get parsed.
 */
export function parseTestResPayload(raw) {
  const val = String(raw ?? '').trim();

  // Formatted decimal literal ("12.00", "0.00", "-3.50") -> keep verbatim
  if (/^[+-]?\d+\.\d+$/.test(val)) return val;

  try {
    const parsed = JSON.parse(val);
    // Safety net for unquoted decimals that JSON parsed into a number
    if (typeof parsed === 'number' && /\.\d*0$/.test(val)) return val;
    return parsed;
  } catch {
    return val;
  }
}

/**
 * Compares harness output against the expected answer.
 * Falls back to a numeric comparison with tolerance so that equivalent
 * representations ("12" vs "12.00", "12.5" vs "12.50", float noise
 * like 45.249999 vs 45.25, "-0.00" vs "0.00") are treated as equal.
 */
export function outputsMatch(actual, expected) {
  const stripBrackets = s => s.replace(/^\[\s*/, '').replace(/\s*\]$/, '');

  const normActual = normalizeOutput(actual);
  const normExpected = normalizeOutput(expected);

  // Exact normalized match
  if (normActual === normExpected) return true;

  // Empty string equivalence: "" vs "" or ''
  const isActualEmpty = normActual === '' || normActual === '""' || normActual === "''";
  const isExpectedEmpty = normExpected === '' || normExpected === '""' || normExpected === "''";
  if (isActualEmpty && isExpectedEmpty) return true;

  if (normActual === '' || normExpected === '') return false;

  // Structural JSON comparison (for arrays, 2D arrays, objects with formatting differences)
  try {
    const parsedA = typeof actual === 'object' ? actual : JSON.parse(actual);
    const parsedE = typeof expected === 'object' ? expected : JSON.parse(expected);
    if (parsedA !== null && parsedE !== null && JSON.stringify(parsedA) === JSON.stringify(parsedE)) {
      return true;
    }
  } catch {}

  const a = stripBrackets(normActual);
  const e = stripBrackets(normExpected);
  if (a === e) return true;

  const numActual = Number(a);
  const numExpected = Number(e);
  return Number.isFinite(numActual) &&
    Number.isFinite(numExpected) &&
    Math.abs(numActual - numExpected) <= 1e-6;
}

/**
 * Builds test harness code for Judge0 execution
 */
export function buildJudge0Harness(questionId, userCode, lang) {
  if (questionId && questionId.startsWith('dsa-p-')) {
    return buildDsaPracticeHarness(questionId, userCode, lang);
  }

  const code = (userCode || '').trim();

  // Strip existing test calls or main if present in user code
  let cleanUserCode = code;

  if (lang === 'python') {
    cleanUserCode = cleanUserCode.split(/if\s+__name__\s*==/)[0].trim();

    if (questionId === 'recent-dsa-001') {
      return `${cleanUserCode}

import json
_tests = [[22, 5, 14], [0, 11, 33, 7, 0], [11, 22, 33, 44], [7, 14, 21, 28, 35, 42, 49]]
for _t in _tests:
    try:
        print("TEST_RES:" + json.dumps(transform_and_sum(_t)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-002') {
      return `${cleanUserCode}

_tests = [112, 50, 10, 250]
for _n in _tests:
    try:
        _fn = count_valid_numbers if 'count_valid_numbers' in globals() else find_valid_numbers
        _r = _fn(_n)
        _cnt = len(_r) if isinstance(_r, (list, set, tuple)) else int(_r)
        print("TEST_RES:" + str(_cnt))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-003') {
      return `${cleanUserCode}

_tests = [10, 20, 5, 15]
for _n in _tests:
    print("START_TC")
    try:
        _r = calculate_running_sum_and_divisibility(_n)
        if isinstance(_r, (tuple, list)):
            print(f"Running Sum = {_r[0]}")
            print(f"Count = {_r[1]}")
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
    print("END_TC")
`;
    }

    if (questionId === 'recent-dsa-004') {
      return `${cleanUserCode}

import json
_tests = [(2, 5), (3, 4), (5, 0), (10, 3)]
for _n, _p in _tests:
    try:
        print("TEST_RES:" + json.dumps(calculate_power(_n, _p)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-005') {
      return `${cleanUserCode}

import json
_tests = [("String-Compare", 14), ("Move-Hyphens-To-Front", 21), ("a-b-c-d", 7), ("AccentureExam", 13)]
for _s, _n in _tests:
    try:
        print("TEST_RES:" + json.dumps(move_hyphen(_s, _n)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-006') {
      return `${cleanUserCode}

import json
_tests = [[2, 1, 4, 3, 6, 5], [1, 2, 3, 4, 5], [10, 11, 12, 13], [2, 4, 6, 8]]
for _t in _tests:
    try:
        print("TEST_RES:" + json.dumps(count_special_elements(_t)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-007') {
      return `${cleanUserCode}

import json
_tests = [12345, 98760, 7, 1000]
for _n in _tests:
    try:
        print("TEST_RES:" + json.dumps(reverse_number(_n)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-008') {
      return `${cleanUserCode}

import json
_tests = [
    (7, [1, 2, 2, 3, 3, 3, 4]),
    (6, [1, 2, 2, 3, 3, 3]),
    (5, [2, 2, 2, 4, 4]),
    (8, [2, 2, 1, 2, 2, 3, 3, 3])
]
for _n, _a in _tests:
    try:
        print("TEST_RES:" + json.dumps(count_valid_blocks(_n, _a)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-009') {
      return `${cleanUserCode}

import json
_tests = [(10, 20), (1, 10), (14, 16), (-5, 5)]
for _m, _n in _tests:
    try:
        print("TEST_RES:" + json.dumps(calculate_prime_sum(_m, _n)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-010') {
      return `${cleanUserCode}

import json
_tests = [(1, 20), (1, 10), (28, 28), (40, 50)]
for _m, _n in _tests:
    try:
        print("TEST_RES:" + json.dumps(calculate_difference(_m, _n)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-011') {
      return `${cleanUserCode}

import json
_tests = [
    (7, 2, 8, [2, 8, 3, 5, 7, 4, 1, 2]),
    (5, 2, 5, [15, 2, 3, 4, 5]),
    (10, 2, 5, [2, 3, 4, 5, 6]),
    (10, 5, 4, [2, 3, 4, 5]),
    (5, 2, 0, []),
    (4, 3, 5, [2, 4, 6, 8, 10])
]
for _r, _u, _n, _arr in _tests:
    try:
        print("TEST_RES:" + json.dumps(minimum_houses(_r, _u, _n, _arr)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-012') {
      return `${cleanUserCode}

import json
_tests = [
    "apple angle ball bottle axe",
    "apple    angle   ball     axe",
    "cat dog bus pen",
    "apple axe angle ball bat",
    "hello",
    "apple apple apple ball ball"
]
for _s in _tests:
    try:
        print("TEST_RES:" + json.dumps(find_most_frequent(_s)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-013') {
      return `${cleanUserCode}

_tests = [
    "aaabbbccc",
    "aaaaaaaaa",
    "abcdefghi",
    "abcabcabc",
    "aababbaba",
    "a"
]
for _s in _tests:
    try:
        print("TEST_RES:" + str(count_uniform(_s)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'recent-dsa-014') {
      return `${cleanUserCode}

_tests = [
    (451, 349),
    (123, 456),
    (999, 111),
    (95, 17),
    (999, 1),
    (123, 0),
    (0, 0)
]
for _n1, _n2 in _tests:
    try:
        fn = numberOfCarries if 'numberOfCarries' in dir() else (number_of_carries if 'number_of_carries' in dir() else NumberOfCarries)
        print("TEST_RES:" + str(fn(_n1, _n2)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'dc-01') {
      return `${cleanUserCode}

import json
_tests = ["accenture", "loveleetcode", "aabb", "z", "swiss"]
_sol = Solution() if 'Solution' in dir() else None
for _s in _tests:
    try:
        fn = _sol.firstUniqChar if (_sol and hasattr(_sol, 'firstUniqChar')) else (firstUniqChar if 'firstUniqChar' in dir() else first_uniq_char)
        print("TEST_RES:" + json.dumps(fn(_s)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'dc-02') {
      return `${cleanUserCode}

import json
_tests = ["A man, a plan, a canal: Panama", "race a car", " ", "Was it a car or a cat I saw?", "0P"]
_sol = Solution() if 'Solution' in dir() else None
for _s in _tests:
    try:
        fn = _sol.isPalindrome if (_sol and hasattr(_sol, 'isPalindrome')) else (isPalindrome if 'isPalindrome' in dir() else is_palindrome)
        print("TEST_RES:" + json.dumps(fn(_s)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'dc-03') {
      return `${cleanUserCode}

import json
_tests = [([2, 7, 11, 15], 9), ([3, 2, 4], 6), ([3, 3], 6), ([1, 3, 7, 15], 10), ([-3, 4, 3, 90], 0)]
_sol = Solution() if 'Solution' in dir() else None
for _nums, _t in _tests:
    try:
        fn = _sol.twoSum if (_sol and hasattr(_sol, 'twoSum')) else (twoSum if 'twoSum' in dir() else two_sum)
        print("TEST_RES:" + json.dumps(fn(_nums, _t)))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId === 'dc-04') {
      return `${cleanUserCode}

import json
_tests = [[0, 1, 0, 3, 12], [0], [1, 2, 3], [0, 0, 1], [4, 0, 5, 0, 0, 6]]
_sol = Solution() if 'Solution' in dir() else None
for _nums in _tests:
    try:
        fn = _sol.moveZeroes if (_sol and hasattr(_sol, 'moveZeroes')) else (moveZeroes if 'moveZeroes' in dir() else move_zeroes)
        _arr = list(_nums)
        _res = fn(_arr)
        print("TEST_RES:" + json.dumps(_res if _res is not None else _arr))
    except Exception as _e:
        print("TEST_ERR:" + str(_e))
`;
    }

    if (questionId.startsWith('dsa-')) {
      const dsaTc = DSA_TEST_CASES[questionId];
      if (dsaTc && dsaTc.length > 0) {
        const calls = dsaTc.map(tc => {
          return tc.pythonCall.split('\n').map(l => '    ' + l).join('\n');
        }).join('\n');
        return `${cleanUserCode}

try:
    sol = Solution() if 'Solution' in dir() else None
${calls}
except Exception as _e:
    print("TEST_ERR:" + str(_e))
`;
      }
      return `${cleanUserCode}

try:
    if 'Solution' in dir():
        _s = Solution()
        _methods = [m for m in dir(_s) if not m.startswith('_') and callable(getattr(_s, m))]
        if _methods:
            _fn = getattr(_s, _methods[0])
            import inspect
            _pCount = len(inspect.signature(_fn).parameters)
            if _pCount == 0:
                _r = _fn()
            elif _pCount == 1:
                _r = _fn(4)
            else:
                _r = _fn(*[4]*_pCount)
            if _r is not None:
                print("TEST_RES:" + str(_r))
except Exception as _e:
    print("TEST_ERR:" + str(_e))
`;
    }
  }

  if (lang === 'java') {
    // Strip existing main
    cleanUserCode = cleanUserCode.replace(/(?:public\s+|static\s+|private\s+|protected\s+)*(?:void|int)\s+(?:main|Main)\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    // Ensure class name is Main for Judge0
    cleanUserCode = cleanUserCode.replace(/public\s+class\s+\w+/g, 'public class Main').replace(/class\s+\w+/g, 'class Main');
    const lastBrace = cleanUserCode.lastIndexOf('}');
    if (lastBrace !== -1) {
      cleanUserCode = cleanUserCode.substring(0, lastBrace);
    }
    if (!cleanUserCode.includes('import java.util.*;')) {
      cleanUserCode = 'import java.util.*;\n' + cleanUserCode;
    }

    if (questionId === 'recent-dsa-001') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {{22, 5, 14}, {0, 11, 33, 7, 0}, {11, 22, 33, 44}, {7, 14, 21, 28, 35, 42, 49}};
        for (int i = 0; i < tests.length; i++) {
            try {
                System.out.println("TEST_RES:" + transformAndSum(tests[i]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-002') {
      const isFind = cleanUserCode.includes('findValidNumbers');
      const callSnippet = isFind
        ? `Object r = findValidNumbers(n);
                int res = (r instanceof java.util.List) ? ((java.util.List)r).size() : ((Number)r).intValue();`
        : `int res = countValidNumbers(n);`;

      return `${cleanUserCode}

    public static void main(String[] args) {
        int[] tests = {112, 50, 10, 250};
        for (int n : tests) {
            try {
                ${callSnippet}
                System.out.println("TEST_RES:" + res);
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-003') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[] tests = {10, 20, 5, 15};
        for (int n : tests) {
            System.out.println("START_TC");
            try {
                calculateRunningSumAndDivisibility(n);
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
            System.out.println("END_TC");
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-004') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {{2, 5}, {3, 4}, {5, 0}, {10, 3}};
        for (int[] t : tests) {
            try {
                System.out.println("TEST_RES:" + calculatePower(t[0], t[1]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-005') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        Object[][] tests = {{"String-Compare", 14}, {"Move-Hyphens-To-Front", 21}, {"a-b-c-d", 7}, {"AccentureExam", 13}};
        for (Object[] t : tests) {
            try {
                System.out.println("TEST_RES:" + moveHyphen((String)t[0], (int)t[1]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-006') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {{2, 1, 4, 3, 6, 5}, {1, 2, 3, 4, 5}, {10, 11, 12, 13}, {2, 4, 6, 8}};
        for (int[] t : tests) {
            try {
                System.out.println("TEST_RES:" + countSpecialElements(t));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-007') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        long[] tests = {12345L, 98760L, 7L, 1000L};
        for (long n : tests) {
            try {
                System.out.println("TEST_RES:" + reverseNumber(n));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-008') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] arrs = {
            {1, 2, 2, 3, 3, 3, 4},
            {1, 2, 2, 3, 3, 3},
            {2, 2, 2, 4, 4},
            {2, 2, 1, 2, 2, 3, 3, 3}
        };
        int[] ns = {7, 6, 5, 8};
        for (int i = 0; i < ns.length; i++) {
            try {
                System.out.println("TEST_RES:" + countValidBlocks(ns[i], arrs[i]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-009') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {{10, 20}, {1, 10}, {14, 16}, {-5, 5}};
        for (int[] t : tests) {
            try {
                System.out.println("TEST_RES:" + calculatePrimeSum(t[0], t[1]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-010') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {{1, 20}, {1, 10}, {28, 28}, {40, 50}};
        for (int[] t : tests) {
            try {
                System.out.println("TEST_RES:" + calculateDifference(t[0], t[1]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-011') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] params = {
            {7, 2, 8},
            {5, 2, 5},
            {10, 2, 5},
            {10, 5, 4},
            {5, 2, 0},
            {4, 3, 5}
        };
        int[][] arrays = {
            {2, 8, 3, 5, 7, 4, 1, 2},
            {15, 2, 3, 4, 5},
            {2, 3, 4, 5, 6},
            {2, 3, 4, 5},
            {},
            {2, 4, 6, 8, 10}
        };
        for (int i = 0; i < params.length; i++) {
            try {
                System.out.println("TEST_RES:" + minimumHouses(params[i][0], params[i][1], params[i][2], arrays[i]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-012') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        String[] tests = {
            "apple angle ball bottle axe",
            "apple    angle   ball     axe",
            "cat dog bus pen",
            "apple axe angle ball bat",
            "hello",
            "apple apple apple ball ball"
        };
        for (String s : tests) {
            try {
                List<String> res = findMostFrequent(s);
                StringBuilder sb = new StringBuilder();
                sb.append('[');
                for (int i = 0; i < res.size(); i++) {
                    sb.append('"').append(res.get(i)).append('"');
                    if (i < res.size() - 1) sb.append(',');
                }
                sb.append(']');
                System.out.println("TEST_RES:" + sb.toString());
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-013') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        String[] tests = {
            "aaabbbccc",
            "aaaaaaaaa",
            "abcdefghi",
            "abcabcabc",
            "aababbaba",
            "a"
        };
        for (String s : tests) {
            try {
                System.out.println("TEST_RES:" + countUniform(s));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-014') {
      const fnCall = cleanUserCode.includes('NumberOfCarries') && !cleanUserCode.includes('numberOfCarries')
        ? 'NumberOfCarries'
        : 'numberOfCarries';

      return `${cleanUserCode}

    public static void main(String[] args) {
        int[][] tests = {
            {451, 349},
            {123, 456},
            {999, 111},
            {95, 17},
            {999, 1},
            {123, 0},
            {0, 0}
        };
        for (int[] t : tests) {
            try {
                System.out.println("TEST_RES:" + ${fnCall}(t[0], t[1]));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-01') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        String[] tests = {"accenture", "loveleetcode", "aabb", "z", "swiss"};
        Main sol = new Main();
        for (String s : tests) {
            try {
                System.out.println("TEST_RES:" + sol.firstUniqChar(s));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-02') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        String[] tests = {"A man, a plan, a canal: Panama", "race a car", " ", "Was it a car or a cat I saw?", "0P"};
        Main sol = new Main();
        for (String s : tests) {
            try {
                System.out.println("TEST_RES:" + sol.isPalindrome(s));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-03') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        Main sol = new Main();
        int[][] numTests = {{2, 7, 11, 15}, {3, 2, 4}, {3, 3}, {1, 3, 7, 15}, {-3, 4, 3, 90}};
        int[] targetTests = {9, 6, 6, 10, 0};
        for (int i = 0; i < numTests.length; i++) {
            try {
                int[] res = sol.twoSum(numTests[i], targetTests[i]);
                System.out.println("TEST_RES:" + java.util.Arrays.toString(res));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-04') {
      return `${cleanUserCode}

    public static void main(String[] args) {
        Main sol = new Main();
        int[][] tests = {{0, 1, 0, 3, 12}, {0}, {1, 2, 3}, {0, 0, 1}, {4, 0, 5, 0, 0, 6}};
        for (int[] t : tests) {
            try {
                int[] res = sol.moveZeroes(t);
                System.out.println("TEST_RES:" + java.util.Arrays.toString(res != null ? res : t));
            } catch (Exception e) {
                System.out.println("TEST_ERR:" + e.getMessage());
            }
        }
    }
}
`;
    }

    if (questionId.startsWith('dsa-')) {
      const dsaTc = DSA_TEST_CASES[questionId];
      if (dsaTc && dsaTc.length > 0) {
        const calls = dsaTc.map(tc => tc.javaCall).join('\n        ');
        return `${cleanUserCode}

    public static void main(String[] args) {
        try {
            Main sol = new Main();
            ${calls}
        } catch (Exception e) {
            System.out.println("TEST_ERR:" + e.getMessage());
        }
    }
}
`;
      }
      return `${cleanUserCode}

    public static void main(String[] args) {
        try {
            java.lang.reflect.Method[] methods = Main.class.getDeclaredMethods();
            for (java.lang.reflect.Method m : methods) {
                if (m.getName().equals("main")) continue;
                m.setAccessible(true);
                Class<?>[] pTypes = m.getParameterTypes();
                Object[] argsList = new Object[pTypes.length];
                for (int i = 0; i < pTypes.length; i++) {
                    if (pTypes[i] == int.class || pTypes[i] == Integer.class) argsList[i] = 4;
                    else if (pTypes[i] == int[].class) argsList[i] = new int[]{2, 5, 1, 3, 0};
                    else if (pTypes[i] == String.class) argsList[i] = "accenture";
                    else argsList[i] = null;
                }
                Object res = java.lang.reflect.Modifier.isStatic(m.getModifiers())
                    ? m.invoke(null, argsList)
                    : m.invoke(new Main(), argsList);
                if (res != null) {
                    System.out.println("TEST_RES:" + res);
                }
                break;
            }
        } catch (Exception e) {
            System.out.println("TEST_ERR:" + e.getMessage());
        }
    }
}
`;
    }
  }

  if (lang === 'cpp') {
    cleanUserCode = cleanUserCode.split(/(?:int|void)\s+main\s*\(/)[0].trim();

    if (questionId === 'recent-dsa-001') {
      return `${cleanUserCode}

int main() {
    std::vector<std::vector<int>> tests = {{22, 5, 14}, {0, 11, 33, 7, 0}, {11, 22, 33, 44}, {7, 14, 21, 28, 35, 42, 49}};
    for (const auto& t : tests) {
        std::cout << "TEST_RES:" << transformAndSum(t) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-002') {
      const isFind = cleanUserCode.includes('findValidNumbers');
      const callSnippet = isFind
        ? `auto r = findValidNumbers(n); int res = r.size();`
        : `int res = countValidNumbers(n);`;

      return `${cleanUserCode}

int main() {
    int tests[] = {112, 50, 10, 250};
    for (int n : tests) {
        ${callSnippet}
        std::cout << "TEST_RES:" << res << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-003') {
      return `${cleanUserCode}

int main() {
    int tests[] = {10, 20, 5, 15};
    for (int n : tests) {
        std::cout << "START_TC" << std::endl;
        calculateRunningSumAndDivisibility(n);
        std::cout << "END_TC" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-004') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << calculatePower(2, 5) << std::endl;
    std::cout << "TEST_RES:" << calculatePower(3, 4) << std::endl;
    std::cout << "TEST_RES:" << calculatePower(5, 0) << std::endl;
    std::cout << "TEST_RES:" << calculatePower(10, 3) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-005') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << moveHyphen((char*)"String-Compare", 14) << std::endl;
    std::cout << "TEST_RES:" << moveHyphen((char*)"Move-Hyphens-To-Front", 21) << std::endl;
    std::cout << "TEST_RES:" << moveHyphen((char*)"a-b-c-d", 7) << std::endl;
    std::cout << "TEST_RES:" << moveHyphen((char*)"AccentureExam", 13) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-006') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << countSpecialElements({2, 1, 4, 3, 6, 5}) << std::endl;
    std::cout << "TEST_RES:" << countSpecialElements({1, 2, 3, 4, 5}) << std::endl;
    std::cout << "TEST_RES:" << countSpecialElements({10, 11, 12, 13}) << std::endl;
    std::cout << "TEST_RES:" << countSpecialElements({2, 4, 6, 8}) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-007') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << reverseNumber(12345) << std::endl;
    std::cout << "TEST_RES:" << reverseNumber(98760) << std::endl;
    std::cout << "TEST_RES:" << reverseNumber(7) << std::endl;
    std::cout << "TEST_RES:" << reverseNumber(1000) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-008') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << countValidBlocks(7, {1, 2, 2, 3, 3, 3, 4}) << std::endl;
    std::cout << "TEST_RES:" << countValidBlocks(6, {1, 2, 2, 3, 3, 3}) << std::endl;
    std::cout << "TEST_RES:" << countValidBlocks(5, {2, 2, 2, 4, 4}) << std::endl;
    std::cout << "TEST_RES:" << countValidBlocks(8, {2, 2, 1, 2, 2, 3, 3, 3}) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-009') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << calculate_prime_sum(10, 20) << std::endl;
    std::cout << "TEST_RES:" << calculate_prime_sum(1, 10) << std::endl;
    std::cout << "TEST_RES:" << calculate_prime_sum(14, 16) << std::endl;
    std::cout << "TEST_RES:" << calculate_prime_sum(-5, 5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-010') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << calculateDifference(1, 20) << std::endl;
    std::cout << "TEST_RES:" << calculateDifference(1, 10) << std::endl;
    std::cout << "TEST_RES:" << calculateDifference(28, 28) << std::endl;
    std::cout << "TEST_RES:" << calculateDifference(40, 50) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-011') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << minimumHouses(7, 2, 8, {2, 8, 3, 5, 7, 4, 1, 2}) << std::endl;
    std::cout << "TEST_RES:" << minimumHouses(5, 2, 5, {15, 2, 3, 4, 5}) << std::endl;
    std::cout << "TEST_RES:" << minimumHouses(10, 2, 5, {2, 3, 4, 5, 6}) << std::endl;
    std::cout << "TEST_RES:" << minimumHouses(10, 5, 4, {2, 3, 4, 5}) << std::endl;
    std::cout << "TEST_RES:" << minimumHouses(5, 2, 0, {}) << std::endl;
    std::cout << "TEST_RES:" << minimumHouses(4, 3, 5, {2, 4, 6, 8, 10}) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-012') {
      return `${cleanUserCode}

void printVec(const std::vector<std::string>& v) {
    std::cout << "TEST_RES:[";
    for (size_t i = 0; i < v.size(); i++) {
        std::cout << '"' << v[i] << '"';
        if (i + 1 < v.size()) std::cout << ",";
    }
    std::cout << "]" << std::endl;
}

int main() {
    printVec(findMostFrequent("apple angle ball bottle axe"));
    printVec(findMostFrequent("apple    angle   ball     axe"));
    printVec(findMostFrequent("cat dog bus pen"));
    printVec(findMostFrequent("apple axe angle ball bat"));
    printVec(findMostFrequent("hello"));
    printVec(findMostFrequent("apple apple apple ball ball"));
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-013') {
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << countUniform("aaabbbccc") << std::endl;
    std::cout << "TEST_RES:" << countUniform("aaaaaaaaa") << std::endl;
    std::cout << "TEST_RES:" << countUniform("abcdefghi") << std::endl;
    std::cout << "TEST_RES:" << countUniform("abcabcabc") << std::endl;
    std::cout << "TEST_RES:" << countUniform("aababbaba") << std::endl;
    std::cout << "TEST_RES:" << countUniform("a") << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'recent-dsa-014') {
      const fnCall = cleanUserCode.includes('NumberOfCarries') && !cleanUserCode.includes('numberOfCarries')
        ? 'NumberOfCarries'
        : 'numberOfCarries';

      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:" << ${fnCall}(451, 349) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(123, 456) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(999, 111) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(95, 17) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(999, 1) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(123, 0) << std::endl;
    std::cout << "TEST_RES:" << ${fnCall}(0, 0) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dc-01') {
      return `${cleanUserCode}

int main() {
    Solution sol;
    std::vector<std::string> tests = {"accenture", "loveleetcode", "aabb", "z", "swiss"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << sol.firstUniqChar(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dc-02') {
      return `${cleanUserCode}

int main() {
    Solution sol;
    std::vector<std::string> tests = {"A man, a plan, a canal: Panama", "race a car", " ", "Was it a car or a cat I saw?", "0P"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << (sol.isPalindrome(s) ? "true" : "false") << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dc-03') {
      return `${cleanUserCode}

int main() {
    Solution sol;
    std::vector<std::pair<std::vector<int>, int>> tests = {
        {{2, 7, 11, 15}, 9},
        {{3, 2, 4}, 6},
        {{3, 3}, 6},
        {{1, 3, 7, 15}, 10},
        {{-3, 4, 3, 90}, 0}
    };
    for (auto& t : tests) {
        auto res = sol.twoSum(t.first, t.second);
        std::cout << "TEST_RES:[";
        for (size_t i = 0; i < res.size(); i++) {
            std::cout << res[i] << (i + 1 < res.size() ? "," : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dc-04') {
      return `${cleanUserCode}

int main() {
    Solution sol;
    std::vector<std::vector<int>> tests = {{0, 1, 0, 3, 12}, {0}, {1, 2, 3}, {0, 0, 1}, {4, 0, 5, 0, 0, 6}};
    for (auto& t : tests) {
        sol.moveZeroes(t);
        std::cout << "TEST_RES:[";
        for (size_t i = 0; i < t.size(); i++) {
            std::cout << t[i] << (i + 1 < t.size() ? "," : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId.startsWith('dsa-')) {
      const dsaTc = DSA_TEST_CASES[questionId];
      if (dsaTc && dsaTc.length > 0) {
        const calls = dsaTc.map(tc => tc.cppCall).join('\n    ');
        return `${cleanUserCode}

int main() {
    Solution sol;
    ${calls}
    return 0;
}
`;
      }
      return `${cleanUserCode}

int main() {
    std::cout << "TEST_RES:Success" << std::endl;
    return 0;
}
`;
    }
  }

  if (lang === 'csharp') {
    cleanUserCode = cleanUserCode.replace(/(?:public\s+|static\s+|private\s+|protected\s+)*(?:void|int)\s+(?:main|Main)\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    const lastBrace = cleanUserCode.lastIndexOf('}');
    if (lastBrace !== -1) {
      cleanUserCode = cleanUserCode.substring(0, lastBrace);
    }

    if (questionId === 'recent-dsa-001') {
      return `${cleanUserCode}

    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {22, 5, 14},
            new int[] {0, 11, 33, 7, 0},
            new int[] {11, 22, 33, 44},
            new int[] {7, 14, 21, 28, 35, 42, 49}
        };
        for (int i = 0; i < tests.Length; i++) {
            Console.WriteLine("TEST_RES:" + TransformAndSum(tests[i]));
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-002') {
      const isFind = cleanUserCode.includes('FindValidNumbers');
      const callSnippet = isFind
        ? `var r = FindValidNumbers(n); int res = r.Count;`
        : `int res = CountValidNumbers(n);`;

      return `${cleanUserCode}

    public static void Main() {
        int[] tests = {112, 50, 10, 250};
        foreach (int n in tests) {
            ${callSnippet}
            Console.WriteLine("TEST_RES:" + res);
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-003') {
      return `${cleanUserCode}

    public static void Main() {
        int[] tests = {10, 20, 5, 15};
        foreach (int n in tests) {
            Console.WriteLine("START_TC");
            CalculateRunningSumAndDivisibility(n);
            Console.WriteLine("END_TC");
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-004') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + CalculatePower(2, 5));
        Console.WriteLine("TEST_RES:" + CalculatePower(3, 4));
        Console.WriteLine("TEST_RES:" + CalculatePower(5, 0));
        Console.WriteLine("TEST_RES:" + CalculatePower(10, 3));
    }
}
`;
    }

    if (questionId === 'recent-dsa-005') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + MoveHyphen("String-Compare", 14));
        Console.WriteLine("TEST_RES:" + MoveHyphen("Move-Hyphens-To-Front", 21));
        Console.WriteLine("TEST_RES:" + MoveHyphen("a-b-c-d", 7));
        Console.WriteLine("TEST_RES:" + MoveHyphen("AccentureExam", 13));
    }
}
`;
    }

    if (questionId === 'recent-dsa-006') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + CountSpecialElements(new int[] {2, 1, 4, 3, 6, 5}));
        Console.WriteLine("TEST_RES:" + CountSpecialElements(new int[] {1, 2, 3, 4, 5}));
        Console.WriteLine("TEST_RES:" + CountSpecialElements(new int[] {10, 11, 12, 13}));
        Console.WriteLine("TEST_RES:" + CountSpecialElements(new int[] {2, 4, 6, 8}));
    }
}
`;
    }

    if (questionId === 'recent-dsa-007') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + ReverseNumber(12345));
        Console.WriteLine("TEST_RES:" + ReverseNumber(98760));
        Console.WriteLine("TEST_RES:" + ReverseNumber(7));
        Console.WriteLine("TEST_RES:" + ReverseNumber(1000));
    }
}
`;
    }

    if (questionId === 'recent-dsa-008') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + CountValidBlocks(7, new int[] {1, 2, 2, 3, 3, 3, 4}));
        Console.WriteLine("TEST_RES:" + CountValidBlocks(6, new int[] {1, 2, 2, 3, 3, 3}));
        Console.WriteLine("TEST_RES:" + CountValidBlocks(5, new int[] {2, 2, 2, 4, 4}));
        Console.WriteLine("TEST_RES:" + CountValidBlocks(8, new int[] {2, 2, 1, 2, 2, 3, 3, 3}));
    }
}
`;
    }

    if (questionId === 'recent-dsa-009') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + CalculatePrimeSum(10, 20));
        Console.WriteLine("TEST_RES:" + CalculatePrimeSum(1, 10));
        Console.WriteLine("TEST_RES:" + CalculatePrimeSum(14, 16));
        Console.WriteLine("TEST_RES:" + CalculatePrimeSum(-5, 5));
    }
}
`;
    }

    if (questionId === 'recent-dsa-010') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + CalculateDifference(1, 20));
        Console.WriteLine("TEST_RES:" + CalculateDifference(1, 10));
        Console.WriteLine("TEST_RES:" + CalculateDifference(28, 28));
        Console.WriteLine("TEST_RES:" + CalculateDifference(40, 50));
    }
}
`;
    }

    if (questionId === 'recent-dsa-011') {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:" + MinimumHouses(7, 2, 8, new int[] {2, 8, 3, 5, 7, 4, 1, 2}));
        Console.WriteLine("TEST_RES:" + MinimumHouses(5, 2, 5, new int[] {15, 2, 3, 4, 5}));
        Console.WriteLine("TEST_RES:" + MinimumHouses(10, 2, 5, new int[] {2, 3, 4, 5, 6}));
        Console.WriteLine("TEST_RES:" + MinimumHouses(10, 5, 4, new int[] {2, 3, 4, 5}));
        Console.WriteLine("TEST_RES:" + MinimumHouses(5, 2, 0, new int[] {}));
        Console.WriteLine("TEST_RES:" + MinimumHouses(4, 3, 5, new int[] {2, 4, 6, 8, 10}));
    }
}
`;
    }

    if (questionId === 'recent-dsa-012') {
      return `${cleanUserCode}

    public static void Main() {
        string[] tests = new string[] {
            "apple angle ball bottle axe",
            "apple    angle   ball     axe",
            "cat dog bus pen",
            "apple axe angle ball bat",
            "hello",
            "apple apple apple ball ball"
        };
        foreach (var s in tests) {
            var res = FindMostFrequent(s);
            var quoted = new List<string>();
            foreach (var item in res) {
                quoted.Add('"' + item + '"');
            }
            Console.WriteLine("TEST_RES:[" + string.Join(",", quoted) + "]");
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-013') {
      return `${cleanUserCode}

    public static void Main() {
        string[] tests = new string[] {
            "aaabbbccc",
            "aaaaaaaaa",
            "abcdefghi",
            "abcabcabc",
            "aababbaba",
            "a"
        };
        foreach (var s in tests) {
            Console.WriteLine("TEST_RES:" + CountUniform(s));
        }
    }
}
`;
    }

    if (questionId === 'recent-dsa-014') {
      const fnCall = cleanUserCode.includes('numberOfCarries') && !cleanUserCode.includes('NumberOfCarries')
        ? 'numberOfCarries'
        : 'NumberOfCarries';

      return `${cleanUserCode}

    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {451, 349},
            new int[] {123, 456},
            new int[] {999, 111},
            new int[] {95, 17},
            new int[] {999, 1},
            new int[] {123, 0},
            new int[] {0, 0}
        };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + ${fnCall}(t[0], t[1]));
        }
    }
}
`;
    }

    if (questionId === 'dc-01') {
      return `${cleanUserCode}

    public static void Main() {
        string[] tests = new string[] {"accenture", "loveleetcode", "aabb", "z", "swiss"};
        Solution sol = new Solution();
        foreach (string s in tests) {
            try {
                Console.WriteLine("TEST_RES:" + sol.FirstUniqChar(s));
            } catch (Exception e) {
                Console.WriteLine("TEST_ERR:" + e.Message);
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-02') {
      return `${cleanUserCode}

    public static void Main() {
        string[] tests = new string[] {"A man, a plan, a canal: Panama", "race a car", " ", "Was it a car or a cat I saw?", "0P"};
        Solution sol = new Solution();
        foreach (string s in tests) {
            try {
                Console.WriteLine("TEST_RES:" + sol.IsPalindrome(s).ToString().ToLower());
            } catch (Exception e) {
                Console.WriteLine("TEST_ERR:" + e.Message);
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-03') {
      return `${cleanUserCode}

    public static void Main() {
        Solution sol = new Solution();
        int[][] numTests = new int[][] { new int[] {2, 7, 11, 15}, new int[] {3, 2, 4}, new int[] {3, 3}, new int[] {1, 3, 7, 15}, new int[] {-3, 4, 3, 90} };
        int[] targetTests = new int[] {9, 6, 6, 10, 0};
        for (int i = 0; i < numTests.Length; i++) {
            try {
                var res = sol.TwoSum(numTests[i], targetTests[i]);
                Console.WriteLine("TEST_RES:[" + string.Join(",", res) + "]");
            } catch (Exception e) {
                Console.WriteLine("TEST_ERR:" + e.Message);
            }
        }
    }
}
`;
    }

    if (questionId === 'dc-04') {
      return `${cleanUserCode}

    public static void Main() {
        Solution sol = new Solution();
        int[][] tests = new int[][] { new int[] {0, 1, 0, 3, 12}, new int[] {0}, new int[] {1, 2, 3}, new int[] {0, 0, 1}, new int[] {4, 0, 5, 0, 0, 6} };
        foreach (var t in tests) {
            try {
                sol.MoveZeroes(t);
                Console.WriteLine("TEST_RES:[" + string.Join(",", t) + "]");
            } catch (Exception e) {
                Console.WriteLine("TEST_ERR:" + e.Message);
            }
        }
    }
}
`;
    }

    if (questionId.startsWith('dsa-')) {
      return `${cleanUserCode}

    public static void Main() {
        Console.WriteLine("TEST_RES:Success");
    }
}
`;
    }
  }

  // JavaScript Node.js harness
  cleanUserCode = cleanUserCode.split(/console\.log/)[0].trim();

  if (questionId === 'recent-dsa-001') {
    return `${cleanUserCode}

const _tests = [[22, 5, 14], [0, 11, 33, 7, 0], [11, 22, 33, 44], [7, 14, 21, 28, 35, 42, 49]];
for (const _t of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(transformAndSum(_t)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-002') {
    return `${cleanUserCode}

const _tests = [112, 50, 10, 250];
for (const _n of _tests) {
    try {
        const _fn = typeof countValidNumbers === 'function' ? countValidNumbers : findValidNumbers;
        const _res = _fn(_n);
        const _cnt = Array.isArray(_res) ? _res.length : Number(_res);
        console.log("TEST_RES:" + _cnt);
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-003') {
    return `${cleanUserCode}

const _tests = [10, 20, 5, 15];
for (const _n of _tests) {
    console.log("START_TC");
    try {
        const _r = calculateRunningSumAndDivisibility(_n);
        if (_r && typeof _r === 'object') {
            console.log("Running Sum = " + _r.runningSum);
            console.log("Count = " + _r.count);
        }
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
    console.log("END_TC");
}
`;
  }

  if (questionId === 'recent-dsa-004') {
    return `${cleanUserCode}

const _tests = [[2, 5], [3, 4], [5, 0], [10, 3]];
for (const [_n, _p] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(calculatePower(_n, _p)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-005') {
    return `${cleanUserCode}

const _tests = [["String-Compare", 14], ["Move-Hyphens-To-Front", 21], ["a-b-c-d", 7], ["AccentureExam", 13]];
for (const [_s, _n] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(moveHyphen(_s, _n)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-006') {
    return `${cleanUserCode}

const _tests = [[2, 1, 4, 3, 6, 5], [1, 2, 3, 4, 5], [10, 11, 12, 13], [2, 4, 6, 8]];
for (const _t of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(countSpecialElements(_t)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-007') {
    return `${cleanUserCode}

const _tests = [12345, 98760, 7, 1000];
for (const _n of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(reverseNumber(_n)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-008') {
    return `${cleanUserCode}

const _tests = [
  [7, [1, 2, 2, 3, 3, 3, 4]],
  [6, [1, 2, 2, 3, 3, 3]],
  [5, [2, 2, 2, 4, 4]],
  [8, [2, 2, 1, 2, 2, 3, 3, 3]]
];
for (const [_n, _a] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(countValidBlocks(_n, _a)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-009') {
    return `${cleanUserCode}

const _tests = [
  [10, 20],
  [1, 10],
  [14, 16],
  [-5, 5]
];
for (const [_m, _n] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(calculatePrimeSum(_m, _n)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-010') {
    return `${cleanUserCode}

const _tests = [
  [1, 20],
  [1, 10],
  [28, 28],
  [40, 50]
];
for (const [_m, _n] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(calculateDifference(_m, _n)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-011') {
    return `${cleanUserCode}

const _tests = [
  [7, 2, 8, [2, 8, 3, 5, 7, 4, 1, 2]],
  [5, 2, 5, [15, 2, 3, 4, 5]],
  [10, 2, 5, [2, 3, 4, 5, 6]],
  [10, 5, 4, [2, 3, 4, 5]],
  [5, 2, 0, []],
  [4, 3, 5, [2, 4, 6, 8, 10]]
];
for (const [_r, _u, _n, _arr] of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(minimumHouses(_r, _u, _n, _arr)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-012') {
    return `${cleanUserCode}

const _tests = [
  "apple angle ball bottle axe",
  "apple    angle   ball     axe",
  "cat dog bus pen",
  "apple axe angle ball bat",
  "hello",
  "apple apple apple ball ball"
];
for (const _s of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(findMostFrequent(_s)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-013') {
    return `${cleanUserCode}

const _tests = [
  "aaabbbccc",
  "aaaaaaaaa",
  "abcdefghi",
  "abcabcabc",
  "aababbaba",
  "a"
];
for (const _s of _tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(countUniform(_s)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'recent-dsa-014') {
    return `${cleanUserCode}

const _tests = [
  [451, 349],
  [123, 456],
  [999, 111],
  [95, 17],
  [999, 1],
  [123, 0],
  [0, 0]
];
for (const [_n1, _n2] of _tests) {
    try {
        const fn = typeof numberOfCarries === 'function' ? numberOfCarries : (typeof number_of_carries === 'function' ? number_of_carries : (typeof NumberOfCarries === 'function' ? NumberOfCarries : null));
        console.log("TEST_RES:" + JSON.stringify(fn(_n1, _n2)));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'dc-01') {
    return `${cleanUserCode}

const _tests = ["accenture", "loveleetcode", "aabb", "z", "swiss"];
for (const _s of _tests) {
    try {
        const fn = typeof firstUniqChar === 'function' ? firstUniqChar : (typeof Solution === 'function' && new Solution().firstUniqChar ? new Solution().firstUniqChar.bind(new Solution()) : null);
        console.log("TEST_RES:" + JSON.stringify(fn ? fn(_s) : -1));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'dc-02') {
    return `${cleanUserCode}

const _tests = ["A man, a plan, a canal: Panama", "race a car", " ", "Was it a car or a cat I saw?", "0P"];
for (const _s of _tests) {
    try {
        const fn = typeof isPalindrome === 'function' ? isPalindrome : (typeof Solution === 'function' && new Solution().isPalindrome ? new Solution().isPalindrome.bind(new Solution()) : null);
        console.log("TEST_RES:" + JSON.stringify(fn ? fn(_s) : false));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'dc-03') {
    return `${cleanUserCode}

const _tests = [[[2, 7, 11, 15], 9], [[3, 2, 4], 6], [[3, 3], 6], [[1, 3, 7, 15], 10], [[-3, 4, 3, 90], 0]];
for (const [_nums, _t] of _tests) {
    try {
        const fn = typeof twoSum === 'function' ? twoSum : (typeof Solution === 'function' && new Solution().twoSum ? new Solution().twoSum.bind(new Solution()) : null);
        console.log("TEST_RES:" + JSON.stringify(fn ? fn(_nums, _t) : []));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId === 'dc-04') {
    return `${cleanUserCode}

const _tests = [[0, 1, 0, 3, 12], [0], [1, 2, 3], [0, 0, 1], [4, 0, 5, 0, 0, 6]];
for (const _nums of _tests) {
    try {
        const fn = typeof moveZeroes === 'function' ? moveZeroes : (typeof Solution === 'function' && new Solution().moveZeroes ? new Solution().moveZeroes.bind(new Solution()) : null);
        const _arr = [..._nums];
        const _res = fn ? fn(_arr) : null;
        console.log("TEST_RES:" + JSON.stringify(_res !== undefined ? _res : _arr));
    } catch(e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
  }

  if (questionId.startsWith('dsa-')) {
    const dsaTc = DSA_TEST_CASES[questionId];
    if (dsaTc && dsaTc.length > 0) {
      const calls = dsaTc.map(tc => tc.jsCall).join('\n');
      return `${cleanUserCode}

try {
${calls}
} catch(e) {
    console.log("TEST_ERR:" + e.message);
}
`;
    }
    return `${cleanUserCode}

try {
    console.log("TEST_RES:Success");
} catch(e) {
    console.log("TEST_ERR:" + e.message);
}
`;
  }

  return cleanUserCode;
}

/**
 * Executes DSA code on Judge0 CE with fallback support
 */
export async function executeDsaOnJudge0(question, userCode, lang) {
  const langId = JUDGE0_LANGUAGE_IDS[lang];
  if (!langId) {
    throw new Error(`Unsupported Judge0 language: ${lang}`);
  }

  const harnessSource = buildJudge0Harness(question.id, userCode, lang);

  // 25 second timeout for Judge0 execution
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);

  const endpoints = typeof window !== 'undefined'
    ? ['/api/judge/submissions?base64_encoded=false&wait=true', 'https://ce.judge0.com/submissions?base64_encoded=false&wait=true']
    : ['https://ce.judge0.com/submissions?base64_encoded=false&wait=true'];

  let response = null;
  let lastFetchErr = null;

  try {
    for (const endpoint of endpoints) {
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language_id: langId,
            source_code: harnessSource
          }),
          signal: controller.signal
        });
        if (response.ok) {
          break;
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          clearTimeout(timeoutId);
          return {
            success: false,
            isFallback: true,
            error: 'Judge0 execution timed out (remote compiler is busy, please retry).'
          };
        }
        lastFetchErr = err;
      }
    }

    clearTimeout(timeoutId);

    if (!response || !response.ok) {
      return {
        success: false,
        isFallback: true,
        error: lastFetchErr ? lastFetchErr.message : `Judge0 API error (${response ? response.status : 'offline'})`
      };
    }

    const result = await response.json();

    // Check for Compilation Error
    if (result.status?.id === 6 || result.compile_output) {
      return {
        success: false,
        errorType: 'Compilation Error',
        errorMessage: (result.compile_output || 'Compilation failed').trim(),
        rawOutput: result.compile_output,
        time: result.time,
        memory: result.memory
      };
    }

    // Check for Runtime Error or TLE
    if (result.status?.id === 5) {
      return {
        success: false,
        errorType: 'Time Limit Exceeded (TLE)',
        errorMessage: 'Execution exceeded time limit on Judge0.',
        time: result.time,
        memory: result.memory
      };
    }

    if (result.status?.id >= 7) {
      return {
        success: false,
        errorType: 'Runtime Error',
        errorMessage: (result.stderr || result.message || 'Execution error').trim(),
        rawOutput: result.stderr,
        time: result.time,
        memory: result.memory
      };
    }

    // Parse stdout for test outputs
    const stdout = (result.stdout || '').trim();
    const testOutputs = [];

    if (stdout.includes('---START_TC---')) {
      const chunks = stdout.split(/---START_TC---/g).slice(1);
      for (const chunk of chunks) {
        const clean = chunk.split(/---END_TC---/)[0].trim();
        testOutputs.push(clean);
      }
    } else if (stdout.includes('START_TC')) {
      // Split by START_TC / END_TC
      const chunks = stdout.split(/START_TC/g).slice(1);
      for (const chunk of chunks) {
        const clean = chunk.split(/END_TC/)[0].trim();
        const mSum = clean.match(/Running Sum\s*=\s*(\d+)/i);
        const mCnt = clean.match(/Count\s*=\s*(\d+)/i);
        if (mSum && mCnt) {
          testOutputs.push(`Running Sum = ${mSum[1]}, Count = ${mCnt[1]}`);
        } else {
          testOutputs.push(clean || 'Running Sum = 0, Count = 0');
        }
      }
    } else {
      const lines = stdout.split('\n');
      for (const line of lines) {
        if (line.startsWith('TEST_RES:')) {
          testOutputs.push(parseTestResPayload(line.substring(9).trim()));
        } else if (line.startsWith('TEST_ERR:')) {
          testOutputs.push({ error: line.substring(9).trim() });
        }
      }
    }

    return {
      success: true,
      testOutputs,
      rawOutput: stdout,
      time: result.time,
      memory: result.memory,
      isJudge0: true
    };
  } catch (err) {
    clearTimeout(timeoutId);
    return {
      success: false,
      isFallback: true,
      error: err.name === 'AbortError' ? 'Judge0 execution timed out' : err.message
    };
  }
}

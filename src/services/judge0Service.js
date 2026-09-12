// src/services/judge0Service.js
// Judge0 Community Edition (CE) Online Code Execution Service

export const JUDGE0_LANGUAGE_IDS = {
  python: 71,    // Python (3.8.1)
  java: 62,      // Java (OpenJDK 13.0.1)
  cpp: 54,       // C++ (GCC 9.2.0)
  csharp: 51,    // C# (Mono 6.6.0.161)
  javascript: 63 // JavaScript (Node.js 12.14.0)
};

const JUDGE0_BASE_URL = 'https://ce.judge0.com';

/**
 * Builds test harness code for Judge0 execution
 */
export function buildJudge0Harness(questionId, userCode, lang) {
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

import json
_tests = [112, 50, 10, 250]
for _n in _tests:
    try:
        _r = find_valid_numbers(_n)
        _cnt = len(_r) if isinstance(_r, (list, set, tuple)) else _r
        print("TEST_RES:" + json.dumps(_cnt))
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
      return `${cleanUserCode}

    public static void main(String[] args) {
        int[] tests = {112, 50, 10, 250};
        for (int n : tests) {
            try {
                Object res = findValidNumbers(n);
                if (res instanceof java.util.List) {
                    System.out.println("TEST_RES:" + ((java.util.List)res).size());
                } else {
                    System.out.println("TEST_RES:" + res);
                }
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
      return `${cleanUserCode}

int main() {
    int tests[] = {112, 50, 10, 250};
    for (int n : tests) {
        auto res = findValidNumbers(n);
        std::cout << "TEST_RES:" << res.size() << std::endl;
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
      return `${cleanUserCode}

    public static void Main() {
        int[] tests = {112, 50, 10, 250};
        foreach (int n in tests) {
            var res = FindValidNumbers(n);
            Console.WriteLine("TEST_RES:" + res.Count);
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
        const _res = findValidNumbers(_n);
        const _cnt = Array.isArray(_res) ? _res.length : _res;
        console.log("TEST_RES:" + JSON.stringify(_cnt));
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

  // 6 second timeout for Judge0 execution
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(`${JUDGE0_BASE_URL}/submissions?base64_encoded=false&wait=true`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language_id: langId,
        source_code: harnessSource
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Judge0 API error (${response.status})`);
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

    if (question.id === 'recent-dsa-003') {
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
          let val = line.substring(9).trim();
          try {
            val = JSON.parse(val);
          } catch {}
          testOutputs.push(val);
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

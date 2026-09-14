// src/services/dsaPracticeHarness.js
// Test execution harness for all 20 authentic Accenture DSA Practice Questions (Set 1 & Set 2)
// Injects test cases and outputs `TEST_RES:<output>` for Judge0 CE

export function buildDsaPracticeHarness(questionId, userCode, lang) {
  let cleanCode = (userCode || '').trim();

  // =========================================================================
  // 1. PYTHON
  // =========================================================================
  if (lang === 'python') {
    cleanCode = cleanCode.split(/if\s+__name__\s*==/)[0].trim();

    if (questionId === 'dsa-p-01') {
      return `${cleanCode}
import json
tests = [
    ([12, 3, 14, 56, 77, 13], 6, 13, 2),
    ([1, 2, 3], 3, 10, 2),
    ([8, 10, 12], 3, 10, 2),
    ([50], 1, 50, 0),
    ([-5, -2, 3], 3, -2, 1)
]
for a, l, n, d in tests:
    try:
        print("TEST_RES:" + str(find_count(a, l, n, d)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-02') {
      return `${cleanCode}
tests = [("listen", "silent"), ("hello", "world"), ("aabb", "baba"), ("abc", "abcd"), ("race", "care")]
for s, t in tests:
    try:
        res = is_anagram(s, t)
        print("TEST_RES:" + ("True" if res else "False"))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-03') {
      return `${cleanCode}
tests = ["1210", "2020", "", "1", "21200"]
for n in tests:
    try:
        print("TEST_RES:" + str(find_auto_count(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-04') {
      return `${cleanCode}
tests = ["1C0C1C1A0B1", "0C1A1B1C1C1B0A0", "1A0", "1B0", "1C1"]
for s in tests:
    try:
        print("TEST_RES:" + str(operations_binary_string(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-05') {
      return `${cleanCode}
tests = ["1010", "1111", "1000", "0", "1"]
for b in tests:
    try:
        print("TEST_RES:" + str(binary_to_decimal(b)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-06') {
      return `${cleanCode}
tests = [[0, 1, 0, 1], [1, 0, 0, 0, 0], [1, 1, 1], [0], [0, 0, 0]]
for t in tests:
    try:
        print("TEST_RES:" + str(bulb_switch(t)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
tests = [([7, 3, 2, 4, 9, 12, 56], 3), ([3, 4, 1, 9, 56, 7, 9, 12], 5), ([12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50], 7), ([5, 5, 5, 5], 2), ([1, 4, 7], 3)]
for a, m in tests:
    try:
        print("TEST_RES:" + str(chocolate_distribution(a, m)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
tests = [(451, 349), (23, 563), (999, 111), (123, 456), (95, 17)]
for n1, n2 in tests:
    try:
        print("TEST_RES:" + str(number_of_carries(n1, n2)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-09') {
      return `${cleanCode}
tests = [10, 5, 8, 0, 15]
for n in tests:
    try:
        print("TEST_RES:" + str(decimal_to_binary(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-10') {
      return `${cleanCode}
tests = [(10, 80), (100, 200), (1, 5), (10, 12), (121, 121)]
for l, u in tests:
    try:
        print("TEST_RES:" + str(print_palindromes(l, u)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    // Set 2 (Q11 - Q20)
    if (questionId === 'dsa-p-11') {
      return `${cleanCode}
tests = [(1, 1, 2, 4, 3, 6), (0, 0, 3, 0, 0, 4), (0, 0, 0, 0, 0, 0), (1, 1, 4, 5, 1, 5), (-2, -1, 1, 3, 1, -1)]
for x1, y1, x2, y2, x3, y3 in tests:
    try:
        print("TEST_RES:" + str(sum_of_distances(x1, y1, x2, y2, x3, y3)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-12') {
      return `${cleanCode}
tests = [[10, 5, 10, 15, 10, 5], [1, 2, 3, 4], [7, 7, 7, 7], [42], [-1, 2, -1, 3, 2]]
for arr in tests:
    try:
        print("TEST_RES:" + str(count_occurrences(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-13') {
      return `${cleanCode}
tests = [[1, 2, 3, 4, 9, 8, 7], [10, 20, 30, 40, 50], [99, 80, 70, 60], [42], [-5, -2, -8, -1]]
for arr in tests:
    try:
        print("TEST_RES:" + str(find_elevation_point(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-14') {
      return `${cleanCode}
tests = [34, 9, 0, 123, 508]
for n in tests:
    try:
        print("TEST_RES:" + str(encode_number(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-15') {
      return `${cleanCode}
tests = [[-7, 1, 5, 2, -4, 3, 0], [1, 2, 3], [20], [0, 0, 0, 0], [1, -1, 4]]
for arr in tests:
    try:
        print("TEST_RES:" + str(find_equilibrium_index(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-16') {
      return `${cleanCode}
tests = [([1, 2, 4, 5, 6], 6), ([2, 3, 4, 5], 5), ([1, 2, 3, 4], 5), ([1], 2), ([2], 2)]
for arr, n in tests:
    try:
        print("TEST_RES:" + str(find_missing_number(arr, n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-17') {
      return `${cleanCode}
tests = [("Coding in Python is fun and powerful", 4), ("Hello world this is a test", 2), ("OneWordOnly", 3), ("Accenture Coding Assessment", 1), ("All words should be included", 5)]
for s, k in tests:
    try:
        print("TEST_RES:" + str(first_k_words(s, k)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-18') {
      return `${cleanCode}
tests = [4, 1, 2, 3, 5]
for n in tests:
    try:
        print("TEST_RES:" + str(floyd_triangle(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-19') {
      return `${cleanCode}
tests = [43, 123, 11, 10, 997]
for n in tests:
    try:
        print("TEST_RES:" + str(is_googly_prime(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-20') {
      return `${cleanCode}
tests = [([1, 2, 2, 3, 4], [2, 2, 4, 6, 7, 8]), ([1, 2, 3], [4, 5, 6]), ([5, 5, 5], [5, 5]), ([1, 3, 5, 7, 9], [3, 9]), ([10, 20, 30], [20, 10, 40])]
for arr1, arr2 in tests:
    try:
        print("TEST_RES:" + str(intersection_of_arrays(arr1, arr2)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }
  }

  // =========================================================================
  // 2. JAVA (Strict: import java.util.* + public class Main driver)
  // =========================================================================
  if (lang === 'java') {
    cleanCode = cleanCode.replace(/(?:public\s+|static\s+|private\s+|protected\s+)*(?:void|int)\s+(?:main|Main)\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    cleanCode = cleanCode.replace(/public\s+class\s+\w+/g, 'public class Main').replace(/class\s+\w+/g, 'class Main');
    const lastBrace = cleanCode.lastIndexOf('}');
    if (lastBrace !== -1) {
      cleanCode = cleanCode.substring(0, lastBrace);
    }
    if (!cleanCode.includes('import java.util.*;')) {
      cleanCode = 'import java.util.*;\n' + cleanCode;
    }

    if (questionId === 'dsa-p-01') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {{12, 3, 14, 56, 77, 13}, {1, 2, 3}, {8, 10, 12}, {50}, {-5, -2, 3}};
        int[] lengths = {6, 3, 3, 1, 3};
        int[] nums = {13, 10, 10, 50, -2};
        int[] diffs = {2, 2, 2, 0, 1};
        for (int i = 0; i < lengths.length; i++) {
            System.out.println("TEST_RES:" + findCount(arrs[i], lengths[i], nums[i], diffs[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-02') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[][] tests = {{"listen", "silent"}, {"hello", "world"}, {"aabb", "baba"}, {"abc", "abcd"}, {"race", "care"}};
        for (String[] t : tests) {
            boolean b = isAnagram(t[0], t[1]);
            System.out.println("TEST_RES:" + (b ? "True" : "False"));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-03') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"1210", "2020", "", "1", "21200"};
        for (String n : tests) {
            System.out.println("TEST_RES:" + findAutoCount(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-04') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"1C0C1C1A0B1", "0C1A1B1C1C1B0A0", "1A0", "1B0", "1C1"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + operationsBinaryString(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-05') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"1010", "1111", "1000", "0", "1"};
        for (String b : tests) {
            System.out.println("TEST_RES:" + binaryToDecimal(b));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-06') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {{0, 1, 0, 1}, {1, 0, 0, 0, 0}, {1, 1, 1}, {0}, {0, 0, 0}};
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + bulbSwitch(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {
            {7, 3, 2, 4, 9, 12, 56},
            {3, 4, 1, 9, 56, 7, 9, 12},
            {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50},
            {5, 5, 5, 5},
            {1, 4, 7}
        };
        int[] ms = {3, 5, 7, 2, 3};
        for (int i = 0; i < ms.length; i++) {
            System.out.println("TEST_RES:" + chocolateDistribution(arrs[i], ms[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {{451, 349}, {23, 563}, {999, 111}, {123, 456}, {95, 17}};
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + numberOfCarries(t[0], t[1]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-09') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {10, 5, 8, 0, 15};
        for (int n : tests) {
            System.out.println("TEST_RES:" + decimalToBinary(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-10') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {{10, 80}, {100, 200}, {1, 5}, {10, 12}, {121, 121}};
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + printPalindromes(t[0], t[1]));
        }
    }
}
`;
    }

    // Set 2 (Q11 - Q20)
    if (questionId === 'dsa-p-11') {
      return `${cleanCode}
    public static void main(String[] args) {
        double[][] tests = {
            {1, 1, 2, 4, 3, 6},
            {0, 0, 3, 0, 0, 4},
            {0, 0, 0, 0, 0, 0},
            {1, 1, 4, 5, 1, 5},
            {-2, -1, 1, 3, 1, -1}
        };
        for (double[] t : tests) {
            System.out.println("TEST_RES:" + sumOfDistances(t[0], t[1], t[2], t[3], t[4], t[5]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-12') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {10, 5, 10, 15, 10, 5},
            {1, 2, 3, 4},
            {7, 7, 7, 7},
            {42},
            {-1, 2, -1, 3, 2}
        };
        for (int[] arr : tests) {
            System.out.println("TEST_RES:" + countOccurrences(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-13') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {1, 2, 3, 4, 9, 8, 7},
            {10, 20, 30, 40, 50},
            {99, 80, 70, 60},
            {42},
            {-5, -2, -8, -1}
        };
        for (int[] arr : tests) {
            System.out.println("TEST_RES:" + findElevationPoint(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-14') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {34, 9, 0, 123, 508};
        for (int n : tests) {
            System.out.println("TEST_RES:" + encodeNumber(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-15') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {-7, 1, 5, 2, -4, 3, 0},
            {1, 2, 3},
            {20},
            {0, 0, 0, 0},
            {1, -1, 4}
        };
        for (int[] arr : tests) {
            System.out.println("TEST_RES:" + findEquilibriumIndex(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-16') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {
            {1, 2, 4, 5, 6},
            {2, 3, 4, 5},
            {1, 2, 3, 4},
            {1},
            {2}
        };
        int[] ns = {6, 5, 5, 2, 2};
        for (int i = 0; i < ns.length; i++) {
            System.out.println("TEST_RES:" + findMissingNumber(arrs[i], ns[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-17') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] strs = {
            "Coding in Python is fun and powerful",
            "Hello world this is a test",
            "OneWordOnly",
            "Accenture Coding Assessment",
            "All words should be included"
        };
        int[] ks = {4, 2, 3, 1, 5};
        for (int i = 0; i < ks.length; i++) {
            System.out.println("TEST_RES:" + firstKWords(strs[i], ks[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-18') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {4, 1, 2, 3, 5};
        for (int n : tests) {
            System.out.println("TEST_RES:" + floydTriangle(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-19') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {43, 123, 11, 10, 997};
        for (int n : tests) {
            System.out.println("TEST_RES:" + isGooglyPrime(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-20') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] a1 = {
            {1, 2, 2, 3, 4},
            {1, 2, 3},
            {5, 5, 5},
            {1, 3, 5, 7, 9},
            {10, 20, 30}
        };
        int[][] a2 = {
            {2, 2, 4, 6, 7, 8},
            {4, 5, 6},
            {5, 5},
            {3, 9},
            {20, 10, 40}
        };
        for (int i = 0; i < a1.length; i++) {
            System.out.println("TEST_RES:" + intersectionOfArrays(a1[i], a2[i]));
        }
    }
}
`;
    }
  }

  // =========================================================================
  // 3. C++
  // =========================================================================
  if (lang === 'cpp') {
    cleanCode = cleanCode.split(/(?:int|void)\s+main\s*\(/)[0].trim();

    if (questionId === 'dsa-p-01') {
      return `${cleanCode}
int main() {
    int a1[] = {12, 3, 14, 56, 77, 13}; std::cout << "TEST_RES:" << findCount(a1, 6, 13, 2) << std::endl;
    int a2[] = {1, 2, 3}; std::cout << "TEST_RES:" << findCount(a2, 3, 10, 2) << std::endl;
    int a3[] = {8, 10, 12}; std::cout << "TEST_RES:" << findCount(a3, 3, 10, 2) << std::endl;
    int a4[] = {50}; std::cout << "TEST_RES:" << findCount(a4, 1, 50, 0) << std::endl;
    int a5[] = {-5, -2, 3}; std::cout << "TEST_RES:" << findCount(a5, 3, -2, 1) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-02') {
      return `${cleanCode}
int main() {
    std::pair<std::string, std::string> tests[] = {{"listen", "silent"}, {"hello", "world"}, {"aabb", "baba"}, {"abc", "abcd"}, {"race", "care"}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << (isAnagram(t.first, t.second) ? "True" : "False") << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-03') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"1210", "2020", "", "1", "21200"};
    for (auto& n : tests) {
        std::cout << "TEST_RES:" << FindAutoCount(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-04') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"1C0C1C1A0B1", "0C1A1B1C1C1B0A0", "1A0", "1B0", "1C1"};
    for (auto& s : tests) {
        std::cout << "TEST_RES:" << OperationsBinaryString(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-05') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"1010", "1111", "1000", "0", "1"};
    for (auto& b : tests) {
        std::cout << "TEST_RES:" << binaryToDecimal(b) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-06') {
      return `${cleanCode}
int main() {
    std::vector<int> t1 = {0, 1, 0, 1}; std::cout << "TEST_RES:" << bulbSwitch(t1) << std::endl;
    std::vector<int> t2 = {1, 0, 0, 0, 0}; std::cout << "TEST_RES:" << bulbSwitch(t2) << std::endl;
    std::vector<int> t3 = {1, 1, 1}; std::cout << "TEST_RES:" << bulbSwitch(t3) << std::endl;
    std::vector<int> t4 = {0}; std::cout << "TEST_RES:" << bulbSwitch(t4) << std::endl;
    std::vector<int> t5 = {0, 0, 0}; std::cout << "TEST_RES:" << bulbSwitch(t5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {7, 3, 2, 4, 9, 12, 56}; std::cout << "TEST_RES:" << chocolateDistribution(a1, 3) << std::endl;
    std::vector<int> a2 = {3, 4, 1, 9, 56, 7, 9, 12}; std::cout << "TEST_RES:" << chocolateDistribution(a2, 5) << std::endl;
    std::vector<int> a3 = {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50}; std::cout << "TEST_RES:" << chocolateDistribution(a3, 7) << std::endl;
    std::vector<int> a4 = {5, 5, 5, 5}; std::cout << "TEST_RES:" << chocolateDistribution(a4, 2) << std::endl;
    std::vector<int> a5 = {1, 4, 7}; std::cout << "TEST_RES:" << chocolateDistribution(a5, 3) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
int main() {
    int tests[][2] = {{451, 349}, {23, 563}, {999, 111}, {123, 456}, {95, 17}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << numberOfCarries(t[0], t[1]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-09') {
      return `${cleanCode}
int main() {
    int tests[] = {10, 5, 8, 0, 15};
    for (int n : tests) {
        std::cout << "TEST_RES:" << decimalToBinary(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-10') {
      return `${cleanCode}
int main() {
    int tests[][2] = {{10, 80}, {100, 200}, {1, 5}, {10, 12}, {121, 121}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << printPalindromes(t[0], t[1]) << std::endl;
    }
    return 0;
}
`;
    }

    // Set 2 (Q11 - Q20)
    if (questionId === 'dsa-p-11') {
      return `${cleanCode}
int main() {
    double tests[][6] = {
        {1, 1, 2, 4, 3, 6},
        {0, 0, 3, 0, 0, 4},
        {0, 0, 0, 0, 0, 0},
        {1, 1, 4, 5, 1, 5},
        {-2, -1, 1, 3, 1, -1}
    };
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << sumOfDistances(t[0], t[1], t[2], t[3], t[4], t[5]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-12') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {10, 5, 10, 15, 10, 5},
        {1, 2, 3, 4},
        {7, 7, 7, 7},
        {42},
        {-1, 2, -1, 3, 2}
    };
    for (auto& arr : tests) {
        std::cout << "TEST_RES:" << countOccurrences(arr) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-13') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {1, 2, 3, 4, 9, 8, 7},
        {10, 20, 30, 40, 50},
        {99, 80, 70, 60},
        {42},
        {-5, -2, -8, -1}
    };
    for (auto& arr : tests) {
        std::cout << "TEST_RES:" << findElevationPoint(arr) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-14') {
      return `${cleanCode}
int main() {
    int tests[] = {34, 9, 0, 123, 508};
    for (int n : tests) {
        std::cout << "TEST_RES:" << encodeNumber(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-15') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {-7, 1, 5, 2, -4, 3, 0},
        {1, 2, 3},
        {20},
        {0, 0, 0, 0},
        {1, -1, 4}
    };
    for (auto& arr : tests) {
        std::cout << "TEST_RES:" << findEquilibriumIndex(arr) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-16') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {1, 2, 4, 5, 6}; std::cout << "TEST_RES:" << findMissingNumber(a1, 6) << std::endl;
    std::vector<int> a2 = {2, 3, 4, 5}; std::cout << "TEST_RES:" << findMissingNumber(a2, 5) << std::endl;
    std::vector<int> a3 = {1, 2, 3, 4}; std::cout << "TEST_RES:" << findMissingNumber(a3, 5) << std::endl;
    std::vector<int> a4 = {1}; std::cout << "TEST_RES:" << findMissingNumber(a4, 2) << std::endl;
    std::vector<int> a5 = {2}; std::cout << "TEST_RES:" << findMissingNumber(a5, 2) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-17') {
      return `${cleanCode}
int main() {
    std::cout << "TEST_RES:" << firstKWords("Coding in Python is fun and powerful", 4) << std::endl;
    std::cout << "TEST_RES:" << firstKWords("Hello world this is a test", 2) << std::endl;
    std::cout << "TEST_RES:" << firstKWords("OneWordOnly", 3) << std::endl;
    std::cout << "TEST_RES:" << firstKWords("Accenture Coding Assessment", 1) << std::endl;
    std::cout << "TEST_RES:" << firstKWords("All words should be included", 5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-18') {
      return `${cleanCode}
int main() {
    int tests[] = {4, 1, 2, 3, 5};
    for (int n : tests) {
        std::cout << "TEST_RES:" << floydTriangle(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-19') {
      return `${cleanCode}
int main() {
    int tests[] = {43, 123, 11, 10, 997};
    for (int n : tests) {
        std::cout << "TEST_RES:" << isGooglyPrime(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-20') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {1, 2, 2, 3, 4}, b1 = {2, 2, 4, 6, 7, 8};
    std::cout << "TEST_RES:" << intersectionOfArrays(a1, b1) << std::endl;
    std::vector<int> a2 = {1, 2, 3}, b2 = {4, 5, 6};
    std::cout << "TEST_RES:" << intersectionOfArrays(a2, b2) << std::endl;
    std::vector<int> a3 = {5, 5, 5}, b3 = {5, 5};
    std::cout << "TEST_RES:" << intersectionOfArrays(a3, b3) << std::endl;
    std::vector<int> a4 = {1, 3, 5, 7, 9}, b4 = {3, 9};
    std::cout << "TEST_RES:" << intersectionOfArrays(a4, b4) << std::endl;
    std::vector<int> a5 = {10, 20, 30}, b5 = {20, 10, 40};
    std::cout << "TEST_RES:" << intersectionOfArrays(a5, b5) << std::endl;
    return 0;
}
`;
    }
  }

  // =========================================================================
  // 4. C#
  // =========================================================================
  if (lang === 'csharp') {
    cleanCode = cleanCode.replace(/(?:public\s+|static\s+|private\s+|protected\s+)*(?:void|int)\s+(?:main|Main)\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    const lastBrace = cleanCode.lastIndexOf('}');
    if (lastBrace !== -1) {
      cleanCode = cleanCode.substring(0, lastBrace);
    }

    if (questionId === 'dsa-p-01') {
      return `${cleanCode}
    public static void Main() {
        Console.WriteLine("TEST_RES:" + FindCount(new int[] {12, 3, 14, 56, 77, 13}, 6, 13, 2));
        Console.WriteLine("TEST_RES:" + FindCount(new int[] {1, 2, 3}, 3, 10, 2));
        Console.WriteLine("TEST_RES:" + FindCount(new int[] {8, 10, 12}, 3, 10, 2));
        Console.WriteLine("TEST_RES:" + FindCount(new int[] {50}, 1, 50, 0));
        Console.WriteLine("TEST_RES:" + FindCount(new int[] {-5, -2, 3}, 3, -2, 1));
    }
}
`;
    }

    if (questionId === 'dsa-p-02') {
      return `${cleanCode}
    public static void Main() {
        string[][] tests = new string[][] { new string[] {"listen", "silent"}, new string[] {"hello", "world"}, new string[] {"aabb", "baba"}, new string[] {"abc", "abcd"}, new string[] {"race", "care"} };
        foreach (var t : tests) {
            Console.WriteLine("TEST_RES:" + (IsAnagram(t[0], t[1]) ? "True" : "False"));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-03') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"1210", "2020", "", "1", "21200"};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + FindAutoCount(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-04') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"1C0C1C1A0B1", "0C1A1B1C1C1B0A0", "1A0", "1B0", "1C1"};
        foreach (var s in tests) {
            Console.WriteLine("TEST_RES:" + OperationsBinaryString(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-05') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"1010", "1111", "1000", "0", "1"};
        foreach (var b in tests) {
            Console.WriteLine("TEST_RES:" + BinaryToDecimal(b));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-06') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] { new int[] {0, 1, 0, 1}, new int[] {1, 0, 0, 0, 0}, new int[] {1, 1, 1}, new int[] {0}, new int[] {0, 0, 0} };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + BulbSwitch(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
    public static void Main() {
        int[][] arrs = new int[][] {
            new int[] {7, 3, 2, 4, 9, 12, 56},
            new int[] {3, 4, 1, 9, 56, 7, 9, 12},
            new int[] {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50},
            new int[] {5, 5, 5, 5},
            new int[] {1, 4, 7}
        };
        int[] ms = new int[] {3, 5, 7, 2, 3};
        for (int i = 0; i < ms.Length; i++) {
            Console.WriteLine("TEST_RES:" + ChocolateDistribution(arrs[i], ms[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] { new int[] {451, 349}, new int[] {23, 563}, new int[] {999, 111}, new int[] {123, 456}, new int[] {95, 17} };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + NumberOfCarries(t[0], t[1]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-09') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {10, 5, 8, 0, 15};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + DecimalToBinary(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-10') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] { new int[] {10, 80}, new int[] {100, 200}, new int[] {1, 5}, new int[] {10, 12}, new int[] {121, 121} };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + PrintPalindromes(t[0], t[1]));
        }
    }
}
`;
    }

    // Set 2 (Q11 - Q20)
    if (questionId === 'dsa-p-11') {
      return `${cleanCode}
    public static void Main() {
        double[][] tests = new double[][] {
            new double[] {1, 1, 2, 4, 3, 6},
            new double[] {0, 0, 3, 0, 0, 4},
            new double[] {0, 0, 0, 0, 0, 0},
            new double[] {1, 1, 4, 5, 1, 5},
            new double[] {-2, -1, 1, 3, 1, -1}
        };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + SumOfDistances(t[0], t[1], t[2], t[3], t[4], t[5]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-12') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {10, 5, 10, 15, 10, 5},
            new int[] {1, 2, 3, 4},
            new int[] {7, 7, 7, 7},
            new int[] {42},
            new int[] {-1, 2, -1, 3, 2}
        };
        foreach (var arr in tests) {
            Console.WriteLine("TEST_RES:" + CountOccurrences(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-13') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {1, 2, 3, 4, 9, 8, 7},
            new int[] {10, 20, 30, 40, 50},
            new int[] {99, 80, 70, 60},
            new int[] {42},
            new int[] {-5, -2, -8, -1}
        };
        foreach (var arr in tests) {
            Console.WriteLine("TEST_RES:" + FindElevationPoint(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-14') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {34, 9, 0, 123, 508};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + EncodeNumber(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-15') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {-7, 1, 5, 2, -4, 3, 0},
            new int[] {1, 2, 3},
            new int[] {20},
            new int[] {0, 0, 0, 0},
            new int[] {1, -1, 4}
        };
        foreach (var arr in tests) {
            Console.WriteLine("TEST_RES:" + FindEquilibriumIndex(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-16') {
      return `${cleanCode}
    public static void Main() {
        int[][] arrs = new int[][] {
            new int[] {1, 2, 4, 5, 6},
            new int[] {2, 3, 4, 5},
            new int[] {1, 2, 3, 4},
            new int[] {1},
            new int[] {2}
        };
        int[] ns = new int[] {6, 5, 5, 2, 2};
        for (int i = 0; i < ns.Length; i++) {
            Console.WriteLine("TEST_RES:" + FindMissingNumber(arrs[i], ns[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-17') {
      return `${cleanCode}
    public static void Main() {
        string[] strs = new string[] {
            "Coding in Python is fun and powerful",
            "Hello world this is a test",
            "OneWordOnly",
            "Accenture Coding Assessment",
            "All words should be included"
        };
        int[] ks = new int[] {4, 2, 3, 1, 5};
        for (int i = 0; i < ks.Length; i++) {
            Console.WriteLine("TEST_RES:" + FirstKWords(strs[i], ks[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-18') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {4, 1, 2, 3, 5};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + FloydTriangle(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-19') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {43, 123, 11, 10, 997};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + IsGooglyPrime(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-20') {
      return `${cleanCode}
    public static void Main() {
        int[][] a1 = new int[][] {
            new int[] {1, 2, 2, 3, 4},
            new int[] {1, 2, 3},
            new int[] {5, 5, 5},
            new int[] {1, 3, 5, 7, 9},
            new int[] {10, 20, 30}
        };
        int[][] a2 = new int[][] {
            new int[] {2, 2, 4, 6, 7, 8},
            new int[] {4, 5, 6},
            new int[] {5, 5},
            new int[] {3, 9},
            new int[] {20, 10, 40}
        };
        for (int i = 0; i < a1.Length; i++) {
            Console.WriteLine("TEST_RES:" + IntersectionOfArrays(a1[i], a2[i]));
        }
    }
}
`;
    }
  }

  // =========================================================================
  // 5. JAVASCRIPT
  // =========================================================================
  if (lang === 'javascript') {
    if (questionId === 'dsa-p-01') {
      return `${cleanCode}
const tests = [
    [[12, 3, 14, 56, 77, 13], 6, 13, 2],
    [[1, 2, 3], 3, 10, 2],
    [[8, 10, 12], 3, 10, 2],
    [[50], 1, 50, 0],
    [[-5, -2, 3], 3, -2, 1]
];
for (const [a, l, n, d] of tests) {
    try {
        console.log("TEST_RES:" + findCount(a, l, n, d));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-02') {
      return `${cleanCode}
const tests = [["listen", "silent"], ["hello", "world"], ["aabb", "baba"], ["abc", "abcd"], ["race", "care"]];
for (const [s, t] of tests) {
    try {
        const res = isAnagram(s, t);
        console.log("TEST_RES:" + (res ? "True" : "False"));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-03') {
      return `${cleanCode}
const tests = ["1210", "2020", "", "1", "21200"];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + findAutoCount(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-04') {
      return `${cleanCode}
const tests = ["1C0C1C1A0B1", "0C1A1B1C1C1B0A0", "1A0", "1B0", "1C1"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + operationsBinaryString(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-05') {
      return `${cleanCode}
const tests = ["1010", "1111", "1000", "0", "1"];
for (const b of tests) {
    try {
        console.log("TEST_RES:" + binaryToDecimal(b));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-06') {
      return `${cleanCode}
const tests = [[0, 1, 0, 1], [1, 0, 0, 0, 0], [1, 1, 1], [0], [0, 0, 0]];
for (const t of tests) {
    try {
        console.log("TEST_RES:" + bulbSwitch(t));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
const tests = [
    [[7, 3, 2, 4, 9, 12, 56], 3],
    [[3, 4, 1, 9, 56, 7, 9, 12], 5],
    [[12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50], 7],
    [[5, 5, 5, 5], 2],
    [[1, 4, 7], 3]
];
for (const [a, m] of tests) {
    try {
        console.log("TEST_RES:" + chocolateDistribution(a, m));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
const tests = [[451, 349], [23, 563], [999, 111], [123, 456], [95, 17]];
for (const [n1, n2] of tests) {
    try {
        console.log("TEST_RES:" + numberOfCarries(n1, n2));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-09') {
      return `${cleanCode}
const tests = [10, 5, 8, 0, 15];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + decimalToBinary(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-10') {
      return `${cleanCode}
const tests = [[10, 80], [100, 200], [1, 5], [10, 12], [121, 121]];
for (const [l, u] of tests) {
    try {
        console.log("TEST_RES:" + printPalindromes(l, u));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    // Set 2 (Q11 - Q20)
    if (questionId === 'dsa-p-11') {
      return `${cleanCode}
const tests = [
    [1, 1, 2, 4, 3, 6],
    [0, 0, 3, 0, 0, 4],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 4, 5, 1, 5],
    [-2, -1, 1, 3, 1, -1]
];
for (const [x1, y1, x2, y2, x3, y3] of tests) {
    try {
        console.log("TEST_RES:" + sumOfDistances(x1, y1, x2, y2, x3, y3));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-12') {
      return `${cleanCode}
const tests = [
    [10, 5, 10, 15, 10, 5],
    [1, 2, 3, 4],
    [7, 7, 7, 7],
    [42],
    [-1, 2, -1, 3, 2]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + countOccurrences(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-13') {
      return `${cleanCode}
const tests = [
    [1, 2, 3, 4, 9, 8, 7],
    [10, 20, 30, 40, 50],
    [99, 80, 70, 60],
    [42],
    [-5, -2, -8, -1]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + findElevationPoint(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-14') {
      return `${cleanCode}
const tests = [34, 9, 0, 123, 508];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + encodeNumber(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-15') {
      return `${cleanCode}
const tests = [
    [-7, 1, 5, 2, -4, 3, 0],
    [1, 2, 3],
    [20],
    [0, 0, 0, 0],
    [1, -1, 4]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + findEquilibriumIndex(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-16') {
      return `${cleanCode}
const tests = [
    [[1, 2, 4, 5, 6], 6],
    [[2, 3, 4, 5], 5],
    [[1, 2, 3, 4], 5],
    [[1], 2],
    [[2], 2]
];
for (const [arr, n] of tests) {
    try {
        console.log("TEST_RES:" + findMissingNumber(arr, n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-17') {
      return `${cleanCode}
const tests = [
    ["Coding in Python is fun and powerful", 4],
    ["Hello world this is a test", 2],
    ["OneWordOnly", 3],
    ["Accenture Coding Assessment", 1],
    ["All words should be included", 5]
];
for (const [s, k] of tests) {
    try {
        console.log("TEST_RES:" + firstKWords(s, k));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-18') {
      return `${cleanCode}
const tests = [4, 1, 2, 3, 5];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + floydTriangle(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-19') {
      return `${cleanCode}
const tests = [43, 123, 11, 10, 997];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + isGooglyPrime(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-20') {
      return `${cleanCode}
const tests = [
    [[1, 2, 2, 3, 4], [2, 2, 4, 6, 7, 8]],
    [[1, 2, 3], [4, 5, 6]],
    [[5, 5, 5], [5, 5]],
    [[1, 3, 5, 7, 9], [3, 9]],
    [[10, 20, 30], [20, 10, 40]]
];
for (const [arr1, arr2] of tests) {
    try {
        console.log("TEST_RES:" + intersectionOfArrays(arr1, arr2));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }
  }

  return cleanCode;
}

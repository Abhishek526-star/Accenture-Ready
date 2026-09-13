// src/services/dsaPracticeHarness.js
// Test execution harness for the 10 authentic Accenture DSA Practice Questions
// Injects test cases and outputs `TEST_RES:<output>` for Judge0 CE

export function buildDsaPracticeHarness(questionId, userCode, lang) {
  let cleanCode = (userCode || '').trim();

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
  }

  if (lang === 'java') {
    cleanCode = cleanCode.replace(/(?:public\s+|static\s+|private\s+|protected\s+)*(?:void|int)\s+(?:main|Main)\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    cleanCode = cleanCode.replace(/public\s+class\s+\w+/g, 'public class Main').replace(/class\s+\w+/g, 'class Main');
    const lastBrace = cleanCode.lastIndexOf('}');
    if (lastBrace !== -1) {
      cleanCode = cleanCode.substring(0, lastBrace);
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
  }

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
    std::vector<std::vector<int>> tests = {{0, 1, 0, 1}, {1, 0, 0, 0, 0}, {1, 1, 1}, {0}, {0, 0, 0}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << bulbSwitch(t) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-07') {
      return `${cleanCode}
int main() {
    std::cout << "TEST_RES:" << chocolateDistribution({7, 3, 2, 4, 9, 12, 56}, 3) << std::endl;
    std::cout << "TEST_RES:" << chocolateDistribution({3, 4, 1, 9, 56, 7, 9, 12}, 5) << std::endl;
    std::cout << "TEST_RES:" << chocolateDistribution({12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50}, 7) << std::endl;
    std::cout << "TEST_RES:" << chocolateDistribution({5, 5, 5, 5}, 2) << std::endl;
    std::cout << "TEST_RES:" << chocolateDistribution({1, 4, 7}, 3) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-08') {
      return `${cleanCode}
int main() {
    int tests[][2] = {{451, 349}, {23, 563}, {999, 111}, {123, 456}, {95, 17}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << NumberOfCarries(t[0], t[1]) << std::endl;
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
  }

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
        foreach (var t in tests) {
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
        Console.WriteLine("TEST_RES:" + ChocolateDistribution(new int[] {7, 3, 2, 4, 9, 12, 56}, 3));
        Console.WriteLine("TEST_RES:" + ChocolateDistribution(new int[] {3, 4, 1, 9, 56, 7, 9, 12}, 5));
        Console.WriteLine("TEST_RES:" + ChocolateDistribution(new int[] {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50}, 7));
        Console.WriteLine("TEST_RES:" + ChocolateDistribution(new int[] {5, 5, 5, 5}, 2));
        Console.WriteLine("TEST_RES:" + ChocolateDistribution(new int[] {1, 4, 7}, 3));
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
  }

  if (lang === 'javascript') {
    cleanCode = cleanCode.split(/console\.log/)[0].trim();

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
        console.log("TEST_RES:" + (isAnagram(s, t) ? "True" : "False"));
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
  }

  return cleanCode;
}

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

    if (questionId === 'dsa-p-21') {
      return `${cleanCode}
tests = [[3, 2, 1, 7, 5, 4], [1, 8, 0, 2, 3, 5, 6], [1, 2, 3], [10, 20, 30, 40], [4, 1, 9, 10, 2, 6, 8, 3]]
for arr in tests:
    try:
        print("TEST_RES:" + str(large_small_sum(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-22') {
      return `${cleanCode}
tests = [" I am a passionate Developer ", "Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "Accenture"]
for s in tests:
    try:
        print("TEST_RES:" + str(length_of_last_word(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-23') {
      return `${cleanCode}
tests = [[1, 2, 2, 1], [1, 2], [1], [1, 2, 3, 2, 1], [1, 2, 3, 4, 5]]
for vals in tests:
    try:
        print("TEST_RES:" + str(is_palindrome_list(vals)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-24') {
      return `${cleanCode}
tests = ["abcabcbb", "bbbbb", "pwwkew", "", "au"]
for s in tests:
    try:
        print("TEST_RES:" + str(length_of_longest_substring(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-25') {
      return `${cleanCode}
tests = [["yes", "no", "number"], ["apple", "banana", "pie"], ["cat", "dog", "ant"], ["a", "ab", "abc", "abcd"], ["developer", "coding", "assessment"]]
for words in tests:
    try:
        print("TEST_RES:" + str(longest_word(words)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-26') {
      return `${cleanCode}
tests = [5, 1, 10, 2, 20]
for n in tests:
    try:
        print("TEST_RES:" + str(count_magical(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-27') {
      return `${cleanCode}
tests = [[3, 4, 1, 7, 9], [1, 2, 3], [10, 5, 20, 15, 30, 25], [5, 2, 4, 6], [7, 9, 3, 8, 11, 15]]
for arr in tests:
    try:
        print("TEST_RES:" + str(matrix_problem(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-28') {
      return `${cleanCode}
tests = [(7, 12), (10, 15), (1, 4), (15, 17), (20, 30)]
for a, b in tests:
    try:
        print("TEST_RES:" + str(max_exponents(a, b)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-29') {
      return `${cleanCode}
tests = [("acdbaaca", 3), ("aaaaa", 2), ("bcdef", 3), ("abacaba", 4), ("a", 1)]
for s, k in tests:
    try:
        print("TEST_RES:" + str(max_favourite_song(s, k)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-30') {
      return `${cleanCode}
tests = [([23, 45, 82, 27, 66, 12, 78, 13, 71, 86], 10), ([5, 1, 2, 3], 4), ([10, 20, 15], 3), ([100], 1), ([-10, -5, -2, -8], 4)]
for arr, length in tests:
    try:
        res = str(max_in_array(arr, length)).replace('\\n', ' ').replace('\\r', ' ').strip()
        print("TEST_RES:" + res)
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }
    if (questionId === 'dsa-p-31') {
      return `${cleanCode}
tests = [
    ([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]),
    ([1, 3, 5], [2, 4, 6]),
    ([], [1, 2, 3]),
    ([5, 10], []),
    ([2, 2, 2], [2, 2])
]
for a, b in tests:
    try:
        print("TEST_RES:" + str(merge_sorted_arrays(a, b)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-32') {
      return `${cleanCode}
tests = ["xyuaab", "beautiful", "accenture", "mississippi", "aeiouu"]
for s in tests:
    try:
        print("TEST_RES:" + str(most_frequent_vowel(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-33') {
      return `${cleanCode}
tests = ["String-Compare", "Move-Hyphens-to-Front", "a-b-c-d", "AccentureExam", "---"]
for s in tests:
    try:
        print("TEST_RES:" + str(move_hyphens(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-34') {
      return `${cleanCode}
tests = [[2, 3, 1, 4, 5, 2], [6], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [10, 20, 15, 25, 22, 18]]
for a in tests:
    try:
        print("TEST_RES:" + str(count_negative_growth(a)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-35') {
      return `${cleanCode}
tests = [(1, 12, 16), (2, 16, 20), (3, 7, 8), (4, 20, 4), (4, 15, 2)]
for c, a, b in tests:
    try:
        print("TEST_RES:" + str(operation_choices(c, a, b)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-36') {
      return `${cleanCode}
tests = [
    ([11, 1, 2, 8, 10, 11, 15, 7], 18),
    ([1, 5, 7, 3, 2, 4], 6),
    ([10, 20, 30, 40], 50),
    ([2, 4, 6, 8], 10),
    ([9, 1, 8, 2, 5, 5], 10)
]
for arr, target in tests:
    try:
        print("TEST_RES:" + str(pair_sum_max_product(arr, target)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-37') {
      return `${cleanCode}
tests = ["aA1_67", "a987 abC012", "1aA_", "a/B1", "aB1"]
for s in tests:
    try:
        print("TEST_RES:" + str(check_password(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-38') {
      return `${cleanCode}
tests = [[1, 2, 3, 4, 5, 6], [2, 4, 6], [1, 3, 5], [0], [7, 10, 13, 16]]
for arr in tests:
    try:
        print("TEST_RES:" + str(print_even_odd(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }
    if (questionId === 'dsa-p-39') {
      return `${cleanCode}
tests = [
    (9, [5, 2, 4, 3, 9, 7, 1]),
    (4, [9, 8, 3, -7, 3, 9]),
    (10, [1]),
    (4, [4, 3, 2]),
    (20, [10, 20, 30, 40])
]
for s, arr in tests:
    try:
        print("TEST_RES:" + str(product_smallest_pair(s, arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-40') {
      return `${cleanCode}
tests = [
    (7, 2, [2, 8, 3, 5, 7, 4, 1, 2]),
    (3, 5, [5, 5, 5]),
    (2, 8, [10]),
    (5, 2, []),
    (1, 1, [2, 1])
]
for r, u, arr in tests:
    try:
        print("TEST_RES:" + str(rat_count_house(r, u, arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-41') {
      return `${cleanCode}
tests = [10, 2, 7, 15, 16]
for n in tests:
    try:
        print("TEST_RES:" + str(rearrangement_of_bits(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-42') {
      return `${cleanCode}
tests = [(3, "abc"), (1, "hello"), (0, "xyz"), (4, "a"), (2, "Accenture")]
for n, s in tests:
    try:
        print("TEST_RES:" + str(repeat_string(n, s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-43') {
      return `${cleanCode}
tests = [
    ("apples", 'a', 'p'),
    ("banana", 'a', 'n'),
    ("code", 'x', 'y'),
    ("hello", 'l', 'l'),
    ("cat", 'c', 't')
]
for s, c1, c2 in tests:
    try:
        print("TEST_RES:" + str(replace_character(s, c1, c2)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-44') {
      return `${cleanCode}
tests = ["Hello World", "Accenture Assessment DSA", "Single", "one two three four", "Practice Makes Perfect"]
for s in tests:
    try:
        print("TEST_RES:" + str(reverse_words(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-45') {
      return `${cleanCode}
tests = [(1, -5, 6), (1, -2, 1), (1, 2, 5), (1, -7, 12), (1, 0, -4)]
for a, b, c in tests:
    try:
        print("TEST_RES:" + str(find_roots(a, b, c)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-46') {
      return `${cleanCode}
tests = [
    ([1, 2, 3, 4, 5, 6, 7], 3),
    ([1, 2, 3, 4], 2),
    ([1, 2], 3),
    ([10], 5),
    ([1, 2, 3], 0)
]
for arr, k in tests:
    try:
        print("TEST_RES:" + str(rotate_array(arr, k)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-47') {
      return `${cleanCode}
tests = [
    [10, 5, 8, 20, 15],
    [3, 1, 7, 5],
    [100, 50],
    [-1, -5, -2, -10],
    [10, 10, 8, 6]
]
for arr in tests:
    try:
        print("TEST_RES:" + str(second_largest(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-48') {
      return `${cleanCode}
import json
tests = [
    [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
    [[0, 1], [1, 1]],
    [[1, 2, 3], [4, 5, 6]],
    [[1, 0, 3], [4, 5, 6], [7, 8, 9]],
    [[0, 0], [0, 0]]
]
for m in tests:
    try:
        print("TEST_RES:" + json.dumps(set_zero_matrix(m)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-49') {
      return `${cleanCode}
tests = [
    [3, 2, 1, 7, 5, 4],
    [4, 0, 7, 9, 6, 4, 2],
    [1, 2, 3],
    [10, 20, 30, 40],
    []
]
for arr in tests:
    try:
        print("TEST_RES:" + str(small_large_sum(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-50') {
      return `${cleanCode}
tests = ["10110111", "1", "11", "111", "1011"]
for s in tests:
    try:
        print("TEST_RES:" + str(decode_string(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-51') {
      return `${cleanCode}
tests = [(12, 50), (100, 160), (1, 14), (15, 15), (30, 60)]
for m, n in tests:
    try:
        print("TEST_RES:" + str(calculate_sum_3_and_5(m, n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-52') {
      return `${cleanCode}
tests = [15, 8, 7, 10, 1]
for n in tests:
    try:
        print("TEST_RES:" + str(sum_binary(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-53') {
      return `${cleanCode}
tests = [
    [10, 20, 30, 40, 50, 60],
    [1, 2, 3, 4],
    [5],
    [1, 2, 3],
    [10, 20]
]
for arr in tests:
    try:
        print("TEST_RES:" + str(sum_even_index(arr)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-54') {
      return `${cleanCode}
tests = [12, 1, 6, 10, 16]
for n in tests:
    try:
        print("TEST_RES:" + str(sum_of_divisors(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-55') {
      return `${cleanCode}
tests = [10, 2, 5, 11, 20]
for n in tests:
    try:
        print("TEST_RES:" + str(sum_prime_no(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-56') {
      return `${cleanCode}
tests = [5, 12, 1, 10, 3]
for n in tests:
    try:
        print("TEST_RES:" + str(multiplication_table_sum(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-57') {
      return `${cleanCode}
tests = ["ABC", "A", "ABCD", "AEIO", "HELLO"]
for s in tests:
    try:
        print("TEST_RES:" + str(vowel_permutation(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-58') {
      return `${cleanCode}
tests = ["xayuaba", "aeaaa", "hello", "banana", "curious"]
for s in tests:
    try:
        print("TEST_RES:" + str(most_frequent_vowel(s)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-59') {
      return `${cleanCode}
tests = [
    [3, 6, 9, 1],
    [1],
    [1, 10, 5, 20],
    [5, 5, 5, 5],
    [10, 3]
]
for nums in tests:
    try:
        print("TEST_RES:" + str(maximum_gap(nums)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-60') {
      return `${cleanCode}
tests = [9, 0, 1, 5, 10]
for n in tests:
    try:
        print("TEST_RES:" + str(nth_fibonacci(n)))
    except Exception as e:
        print("TEST_ERR:" + str(e))
`;
    }

    if (questionId === 'dsa-p-61') {
      return `${cleanCode}
tests = [
    [1, 2, 2, 3, 4, 4, 5],
    [1, 1, 1, 1],
    [1, 2, 3, 4],
    [3, 1, 3, 2, 1],
    []
]
for arr in tests:
    try:
        print("TEST_RES:" + str(remove_duplicates(arr)))
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

    if (questionId === 'dsa-p-21') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {3, 2, 1, 7, 5, 4},
            {1, 8, 0, 2, 3, 5, 6},
            {1, 2, 3},
            {10, 20, 30, 40},
            {4, 1, 9, 10, 2, 6, 8, 3}
        };
        for (int[] arr : tests) {
            System.out.println("TEST_RES:" + largeSmallSum(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-22') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {" I am a passionate Developer ", "Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "Accenture"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + lengthOfLastWord(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-23') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {1, 2, 2, 1},
            {1, 2},
            {1},
            {1, 2, 3, 2, 1},
            {1, 2, 3, 4, 5}
        };
        for (int[] vals : tests) {
            System.out.println("TEST_RES:" + isPalindromeList(vals));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-24') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"abcabcbb", "bbbbb", "pwwkew", "", "au"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + lengthOfLongestSubstring(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-25') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[][] tests = {
            {"yes", "no", "number"},
            {"apple", "banana", "pie"},
            {"cat", "dog", "ant"},
            {"a", "ab", "abc", "abcd"},
            {"developer", "coding", "assessment"}
        };
        for (String[] words : tests) {
            System.out.println("TEST_RES:" + longestWord(words));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-26') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {5, 1, 10, 2, 20};
        for (int n : tests) {
            System.out.println("TEST_RES:" + countMagical(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-27') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {3, 4, 1, 7, 9},
            {1, 2, 3},
            {10, 5, 20, 15, 30, 25},
            {5, 2, 4, 6},
            {7, 9, 3, 8, 11, 15}
        };
        for (int[] arr : tests) {
            System.out.println("TEST_RES:" + matrixProblem(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-28') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {{7, 12}, {10, 15}, {1, 4}, {15, 17}, {20, 30}};
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + maxExponents(t[0], t[1]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-29') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] sArr = {"acdbaaca", "aaaaa", "bcdef", "abacaba", "a"};
        int[] kArr = {3, 2, 3, 4, 1};
        for (int i = 0; i < sArr.length; i++) {
            System.out.println("TEST_RES:" + maxFavouriteSong(sArr[i], kArr[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-30') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {
            {23, 45, 82, 27, 66, 12, 78, 13, 71, 86},
            {5, 1, 2, 3},
            {10, 20, 15},
            {100},
            {-10, -5, -2, -8}
        };
        int[] lengths = {10, 4, 3, 1, 4};
        for (int i = 0; i < arrs.length; i++) {
            String res = String.valueOf(maxInArray(arrs[i], lengths[i])).replace('\\n', ' ').replace('\\r', ' ').trim();
            System.out.println("TEST_RES:" + res);
        }
    }
}
`;
    }
    if (questionId === 'dsa-p-31') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] a = {
            {1, 2, 3, 4, 5},
            {1, 3, 5},
            {},
            {5, 10},
            {2, 2, 2}
        };
        int[][] b = {
            {2, 4, 6, 8, 10},
            {2, 4, 6},
            {1, 2, 3},
            {},
            {2, 2}
        };
        for (int i = 0; i < a.length; i++) {
            System.out.println("TEST_RES:" + Arrays.toString(mergeSortedArrays(a[i], b[i])));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-32') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"xyuaab", "beautiful", "accenture", "mississippi", "aeiouu"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + mostFrequentVowel(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-33') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"String-Compare", "Move-Hyphens-to-Front", "a-b-c-d", "AccentureExam", "---"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + moveHyphens(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-34') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {2, 3, 1, 4, 5, 2},
            {6},
            {5, 4, 3, 2, 1},
            {1, 2, 3, 4, 5},
            {10, 20, 15, 25, 22, 18}
        };
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + countNegativeGrowth(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-35') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {1, 12, 16},
            {2, 16, 20},
            {3, 7, 8},
            {4, 20, 4},
            {4, 15, 2}
        };
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + operationChoices(t[0], t[1], t[2]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-36') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {
            {11, 1, 2, 8, 10, 11, 15, 7},
            {1, 5, 7, 3, 2, 4},
            {10, 20, 30, 40},
            {2, 4, 6, 8},
            {9, 1, 8, 2, 5, 5}
        };
        int[] targets = {18, 6, 50, 10, 10};
        for (int i = 0; i < arrs.length; i++) {
            System.out.println("TEST_RES:" + Arrays.toString(pairSumMaxProduct(arrs[i], targets[i])));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-37') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"aA1_67", "a987 abC012", "1aA_", "a/B1", "aB1"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + checkPassword(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-38') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {1, 2, 3, 4, 5, 6},
            {2, 4, 6},
            {1, 3, 5},
            {0},
            {7, 10, 13, 16}
        };
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + printEvenOdd(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-39') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] sums = {9, 4, 10, 4, 20};
        int[][] arrs = {
            {5, 2, 4, 3, 9, 7, 1},
            {9, 8, 3, -7, 3, 9},
            {1},
            {4, 3, 2},
            {10, 20, 30, 40}
        };
        for (int i = 0; i < sums.length; i++) {
            System.out.println("TEST_RES:" + productSmallestPair(sums[i], arrs[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-40') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] r = {7, 3, 2, 5, 1};
        int[] unit = {2, 5, 8, 2, 1};
        int[][] arrs = {
            {2, 8, 3, 5, 7, 4, 1, 2},
            {5, 5, 5},
            {10},
            {},
            {2, 1}
        };
        for (int i = 0; i < r.length; i++) {
            System.out.println("TEST_RES:" + ratCountHouse(r[i], unit[i], arrs[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-41') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {10, 2, 7, 15, 16};
        for (int n : tests) {
            System.out.println("TEST_RES:" + rearrangementOfBits(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-42') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] n = {3, 1, 0, 4, 2};
        String[] s = {"abc", "hello", "xyz", "a", "Accenture"};
        for (int i = 0; i < n.length; i++) {
            System.out.println("TEST_RES:" + repeatString(n[i], s[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-43') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] s = {"apples", "banana", "code", "hello", "cat"};
        char[] c1 = {'a', 'a', 'x', 'l', 'c'};
        char[] c2 = {'p', 'n', 'y', 'l', 't'};
        for (int i = 0; i < s.length; i++) {
            System.out.println("TEST_RES:" + replaceCharacter(s[i], c1[i], c2[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-44') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"Hello World", "Accenture Assessment DSA", "Single", "one two three four", "Practice Makes Perfect"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + reverseWords(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-45') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {{1, -5, 6}, {1, -2, 1}, {1, 2, 5}, {1, -7, 12}, {1, 0, -4}};
        for (int[] t : tests) {
            System.out.println("TEST_RES:" + findRoots(t[0], t[1], t[2]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-46') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] arrs = {
            {1, 2, 3, 4, 5, 6, 7},
            {1, 2, 3, 4},
            {1, 2},
            {10},
            {1, 2, 3}
        };
        int[] k = {3, 2, 3, 5, 0};
        for (int i = 0; i < arrs.length; i++) {
            System.out.println("TEST_RES:" + Arrays.toString(rotateArray(arrs[i], k[i])));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-47') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {10, 5, 8, 20, 15},
            {3, 1, 7, 5},
            {100, 50},
            {-1, -5, -2, -10},
            {10, 10, 8, 6}
        };
        for (int[] a : tests) {
            System.out.println("TEST_RES:" + secondLargest(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-48') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][][] tests = {
            {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}},
            {{0, 1}, {1, 1}},
            {{1, 2, 3}, {4, 5, 6}},
            {{1, 0, 3}, {4, 5, 6}, {7, 8, 9}},
            {{0, 0}, {0, 0}}
        };
        for (int[][] m : tests) {
            int[][] res = setZeroMatrix(m);
            StringBuilder sb = new StringBuilder("[");
            for (int r = 0; r < res.length; r++) {
                sb.append(Arrays.toString(res[r]));
                if (r + 1 < res.length) sb.append(", ");
            }
            sb.append("]");
            System.out.println("TEST_RES:" + sb.toString());
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-49') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {3, 2, 1, 7, 5, 4},
            {4, 0, 7, 9, 6, 4, 2},
            {1, 2, 3},
            {10, 20, 30, 40},
            {}
        };
        for (int[] a : tests) {
            System.out.println("TEST_RES:" + smallLargeSum(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-50') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"10110111", "1", "11", "111", "1011"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + decodeString(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-51') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] m = {12, 100, 1, 15, 30};
        int[] n = {50, 160, 14, 15, 60};
        for (int i = 0; i < m.length; i++) {
            System.out.println("TEST_RES:" + calculateSum3And5(m[i], n[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-52') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {15, 8, 7, 10, 1};
        for (int n : tests) {
            System.out.println("TEST_RES:" + sumBinary(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-53') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {10, 20, 30, 40, 50, 60},
            {1, 2, 3, 4},
            {5},
            {1, 2, 3},
            {10, 20}
        };
        for (int[] a : tests) {
            System.out.println("TEST_RES:" + sumEvenIndex(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-54') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {12, 1, 6, 10, 16};
        for (int n : tests) {
            System.out.println("TEST_RES:" + sumOfDivisors(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-55') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {10, 2, 5, 11, 20};
        for (int n : tests) {
            System.out.println("TEST_RES:" + sumPrimeNo(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-56') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {5, 12, 1, 10, 3};
        for (int n : tests) {
            System.out.println("TEST_RES:" + tableAndSum(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-57') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"ABC", "A", "ABCD", "AEIO", "HELLO"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + vowelPermutation(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-58') {
      return `${cleanCode}
    public static void main(String[] args) {
        String[] tests = {"xayuaba", "aeaaa", "hello", "banana", "curious"};
        for (String s : tests) {
            System.out.println("TEST_RES:" + mostFrequentVowel(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-59') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {3, 6, 9, 1},
            {1},
            {1, 10, 5, 20},
            {5, 5, 5, 5},
            {10, 3}
        };
        for (int[] a : tests) {
            System.out.println("TEST_RES:" + maximumGap(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-60') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[] tests = {9, 0, 1, 5, 10};
        for (int n : tests) {
            System.out.println("TEST_RES:" + nthFibonacci(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-61') {
      return `${cleanCode}
    public static void main(String[] args) {
        int[][] tests = {
            {1, 2, 2, 3, 4, 4, 5},
            {1, 1, 1, 1},
            {1, 2, 3, 4},
            {3, 1, 3, 2, 1},
            {}
        };
        for (int[] a : tests) {
            System.out.println("TEST_RES:" + Arrays.toString(removeDuplicates(a)));
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

    if (questionId === 'dsa-p-21') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {3, 2, 1, 7, 5, 4}; std::cout << "TEST_RES:" << largeSmallSum(a1) << std::endl;
    std::vector<int> a2 = {1, 8, 0, 2, 3, 5, 6}; std::cout << "TEST_RES:" << largeSmallSum(a2) << std::endl;
    std::vector<int> a3 = {1, 2, 3}; std::cout << "TEST_RES:" << largeSmallSum(a3) << std::endl;
    std::vector<int> a4 = {10, 20, 30, 40}; std::cout << "TEST_RES:" << largeSmallSum(a4) << std::endl;
    std::vector<int> a5 = {4, 1, 9, 10, 2, 6, 8, 3}; std::cout << "TEST_RES:" << largeSmallSum(a5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-22') {
      return `${cleanCode}
int main() {
    std::string tests[] = {" I am a passionate Developer ", "Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "Accenture"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << lengthOfLastWord(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-23') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {1, 2, 2, 1}; std::cout << "TEST_RES:" << isPalindromeList(a1) << std::endl;
    std::vector<int> a2 = {1, 2}; std::cout << "TEST_RES:" << isPalindromeList(a2) << std::endl;
    std::vector<int> a3 = {1}; std::cout << "TEST_RES:" << isPalindromeList(a3) << std::endl;
    std::vector<int> a4 = {1, 2, 3, 2, 1}; std::cout << "TEST_RES:" << isPalindromeList(a4) << std::endl;
    std::vector<int> a5 = {1, 2, 3, 4, 5}; std::cout << "TEST_RES:" << isPalindromeList(a5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-24') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"abcabcbb", "bbbbb", "pwwkew", "", "au"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << lengthOfLongestSubstring(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-25') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<std::string>> tests = {
        {"yes", "no", "number"},
        {"apple", "banana", "pie"},
        {"cat", "dog", "ant"},
        {"a", "ab", "abc", "abcd"},
        {"developer", "coding", "assessment"}
    };
    for (const auto& w : tests) {
        std::cout << "TEST_RES:" << longestWord(w) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-26') {
      return `${cleanCode}
int main() {
    int tests[] = {5, 1, 10, 2, 20};
    for (int n : tests) {
        std::cout << "TEST_RES:" << countMagical(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-27') {
      return `${cleanCode}
int main() {
    std::vector<int> a1 = {3, 4, 1, 7, 9}; std::cout << "TEST_RES:" << matrixProblem(a1) << std::endl;
    std::vector<int> a2 = {1, 2, 3}; std::cout << "TEST_RES:" << matrixProblem(a2) << std::endl;
    std::vector<int> a3 = {10, 5, 20, 15, 30, 25}; std::cout << "TEST_RES:" << matrixProblem(a3) << std::endl;
    std::vector<int> a4 = {5, 2, 4, 6}; std::cout << "TEST_RES:" << matrixProblem(a4) << std::endl;
    std::vector<int> a5 = {7, 9, 3, 8, 11, 15}; std::cout << "TEST_RES:" << matrixProblem(a5) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-28') {
      return `${cleanCode}
int main() {
    int tests[][2] = {{7, 12}, {10, 15}, {1, 4}, {15, 17}, {20, 30}};
    for (auto& t : tests) {
        std::cout << "TEST_RES:" << maxExponents(t[0], t[1]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-29') {
      return `${cleanCode}
int main() {
    std::cout << "TEST_RES:" << maxFavouriteSong("acdbaaca", 3) << std::endl;
    std::cout << "TEST_RES:" << maxFavouriteSong("aaaaa", 2) << std::endl;
    std::cout << "TEST_RES:" << maxFavouriteSong("bcdef", 3) << std::endl;
    std::cout << "TEST_RES:" << maxFavouriteSong("abacaba", 4) << std::endl;
    std::cout << "TEST_RES:" << maxFavouriteSong("a", 1) << std::endl;
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-30') {
      return `${cleanCode}
int main() {
    int a1[] = {23, 45, 82, 27, 66, 12, 78, 13, 71, 86};
    int a2[] = {5, 1, 2, 3};
    int a3[] = {10, 20, 15};
    int a4[] = {100};
    int a5[] = {-10, -5, -2, -8};
    int* tests[] = {a1, a2, a3, a4, a5};
    int lens[] = {10, 4, 3, 1, 4};
    for (int i = 0; i < 5; i++) {
        std::string s = maxInArray(tests[i], lens[i]);
        for (char &c : s) { if (c == '\\n' || c == '\\r') c = ' '; }
        std::cout << "TEST_RES:" << s << std::endl;
    }
    return 0;
}
`;
    }
    if (questionId === 'dsa-p-31') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> a = {
        {1, 2, 3, 4, 5},
        {1, 3, 5},
        {},
        {5, 10},
        {2, 2, 2}
    };
    std::vector<std::vector<int>> b = {
        {2, 4, 6, 8, 10},
        {2, 4, 6},
        {1, 2, 3},
        {},
        {2, 2}
    };
    for (size_t i = 0; i < a.size(); i++) {
        std::vector<int> res = mergeSortedArrays(a[i], b[i]);
        std::cout << "TEST_RES:[";
        for (size_t j = 0; j < res.size(); j++) {
            std::cout << res[j] << (j + 1 < res.size() ? ", " : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-32') {
      return `${cleanCode}
int main() {
    std::vector<std::string> tests = {"xyuaab", "beautiful", "accenture", "mississippi", "aeiouu"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << mostFrequentVowel(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-33') {
      return `${cleanCode}
int main() {
    std::vector<std::string> tests = {"String-Compare", "Move-Hyphens-to-Front", "a-b-c-d", "AccentureExam", "---"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << moveHyphens(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-34') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {2, 3, 1, 4, 5, 2},
        {6},
        {5, 4, 3, 2, 1},
        {1, 2, 3, 4, 5},
        {10, 20, 15, 25, 22, 18}
    };
    for (const auto& t : tests) {
        std::cout << "TEST_RES:" << countNegativeGrowth(t) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-35') {
      return `${cleanCode}
int main() {
    int tests[5][3] = {
        {1, 12, 16},
        {2, 16, 20},
        {3, 7, 8},
        {4, 20, 4},
        {4, 15, 2}
    };
    for (int i = 0; i < 5; i++) {
        std::cout << "TEST_RES:" << operationChoices(tests[i][0], tests[i][1], tests[i][2]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-36') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> arrs = {
        {11, 1, 2, 8, 10, 11, 15, 7},
        {1, 5, 7, 3, 2, 4},
        {10, 20, 30, 40},
        {2, 4, 6, 8},
        {9, 1, 8, 2, 5, 5}
    };
    int targets[] = {18, 6, 50, 10, 10};
    for (size_t i = 0; i < arrs.size(); i++) {
        std::vector<int> res = pairSumMaxProduct(arrs[i], targets[i]);
        std::cout << "TEST_RES:[";
        for (size_t j = 0; j < res.size(); j++) {
            std::cout << res[j] << (j + 1 < res.size() ? ", " : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-37') {
      return `${cleanCode}
int main() {
    std::vector<std::string> tests = {"aA1_67", "a987 abC012", "1aA_", "a/B1", "aB1"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << checkPassword(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-38') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {1, 2, 3, 4, 5, 6},
        {2, 4, 6},
        {1, 3, 5},
        {0},
        {7, 10, 13, 16}
    };
    for (const auto& t : tests) {
        std::cout << "TEST_RES:" << printEvenOdd(t) << std::endl;
    }
    return 0;
}
`;
    }
    if (questionId === 'dsa-p-39') {
      return `${cleanCode}
int main() {
    int sums[] = {9, 4, 10, 4, 20};
    std::vector<std::vector<int>> arrs = {
        {5, 2, 4, 3, 9, 7, 1},
        {9, 8, 3, -7, 3, 9},
        {1},
        {4, 3, 2},
        {10, 20, 30, 40}
    };
    for (size_t i = 0; i < arrs.size(); i++) {
        std::cout << "TEST_RES:" << ProductSmallestPair(sums[i], arrs[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-40') {
      return `${cleanCode}
int main() {
    int r[] = {7, 3, 2, 5, 1};
    int unit[] = {2, 5, 8, 2, 1};
    std::vector<std::vector<int>> arrs = {
        {2, 8, 3, 5, 7, 4, 1, 2},
        {5, 5, 5},
        {10},
        {},
        {2, 1}
    };
    for (size_t i = 0; i < arrs.size(); i++) {
        std::cout << "TEST_RES:" << RatCountHouse(r[i], unit[i], arrs[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-41') {
      return `${cleanCode}
int main() {
    int tests[] = {10, 2, 7, 15, 16};
    for (int n : tests) {
        std::cout << "TEST_RES:" << RearrangementOfBits(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-42') {
      return `${cleanCode}
int main() {
    int n[] = {3, 1, 0, 4, 2};
    std::string s[] = {"abc", "hello", "xyz", "a", "Accenture"};
    for (int i = 0; i < 5; i++) {
        std::cout << "TEST_RES:" << repeatString(n[i], s[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-43') {
      return `${cleanCode}
int main() {
    std::string s[] = {"apples", "banana", "code", "hello", "cat"};
    char c1[] = {'a', 'a', 'x', 'l', 'c'};
    char c2[] = {'p', 'n', 'y', 'l', 't'};
    for (int i = 0; i < 5; i++) {
        std::cout << "TEST_RES:" << ReplaceCharacter(s[i], c1[i], c2[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-44') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"Hello World", "Accenture Assessment DSA", "Single", "one two three four", "Practice Makes Perfect"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << reverseWords(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-45') {
      return `${cleanCode}
int main() {
    int a[] = {1, 1, 1, 1, 1};
    int b[] = {-5, -2, 2, -7, 0};
    int c[] = {6, 1, 5, 12, -4};
    for (int i = 0; i < 5; i++) {
        std::cout << "TEST_RES:" << findRoots(a[i], b[i], c[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-46') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> arrs = {
        {1, 2, 3, 4, 5, 6, 7},
        {1, 2, 3, 4},
        {1, 2},
        {10},
        {1, 2, 3}
    };
    int k[] = {3, 2, 3, 5, 0};
    for (size_t i = 0; i < arrs.size(); i++) {
        std::vector<int> res = rotateArray(arrs[i], k[i]);
        std::cout << "TEST_RES:[";
        for (size_t j = 0; j < res.size(); j++) {
            std::cout << res[j] << (j + 1 < res.size() ? ", " : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-47') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {10, 5, 8, 20, 15},
        {3, 1, 7, 5},
        {100, 50},
        {-1, -5, -2, -10},
        {10, 10, 8, 6}
    };
    for (auto& a : tests) {
        std::cout << "TEST_RES:" << secondLargest(a) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-48') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<std::vector<int>>> tests = {
        {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}},
        {{0, 1}, {1, 1}},
        {{1, 2, 3}, {4, 5, 6}},
        {{1, 0, 3}, {4, 5, 6}, {7, 8, 9}},
        {{0, 0}, {0, 0}}
    };
    for (auto& m : tests) {
        auto res = setZeroMatrix(m);
        std::cout << "TEST_RES:[";
        for (size_t r = 0; r < res.size(); r++) {
            std::cout << "[";
            for (size_t c = 0; c < res[r].size(); c++) {
                std::cout << res[r][c] << (c + 1 < res[r].size() ? ", " : "");
            }
            std::cout << "]" << (r + 1 < res.size() ? ", " : "");
        }
        std::cout << "]" << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-49') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {3, 2, 1, 7, 5, 4},
        {4, 0, 7, 9, 6, 4, 2},
        {1, 2, 3},
        {10, 20, 30, 40},
        {}
    };
    for (auto& a : tests) {
        std::cout << "TEST_RES:" << SmallLargeSum(a) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-50') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"10110111", "1", "11", "111", "1011"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << decodeString(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-51') {
      return `${cleanCode}
int main() {
    int m[] = {12, 100, 1, 15, 30};
    int n[] = {50, 160, 14, 15, 60};
    for (int i = 0; i < 5; i++) {
        std::cout << "TEST_RES:" << Calculate(m[i], n[i]) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-52') {
      return `${cleanCode}
int main() {
    int tests[] = {15, 8, 7, 10, 1};
    for (int n : tests) {
        std::cout << "TEST_RES:" << sumBinary(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-53') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {10, 20, 30, 40, 50, 60},
        {1, 2, 3, 4},
        {5},
        {1, 2, 3},
        {10, 20}
    };
    for (auto& a : tests) {
        std::cout << "TEST_RES:" << sumEvenIndex(a) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-54') {
      return `${cleanCode}
int main() {
    int tests[] = {12, 1, 6, 10, 16};
    for (int n : tests) {
        std::cout << "TEST_RES:" << sumOfDivisors(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-55') {
      return `${cleanCode}
int main() {
    int tests[] = {10, 2, 5, 11, 20};
    for (int n : tests) {
        std::cout << "TEST_RES:" << sumPrimeNo(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-56') {
      return `${cleanCode}
int main() {
    int tests[] = {5, 12, 1, 10, 3};
    for (int n : tests) {
        std::cout << "TEST_RES:" << tableAndSum(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-57') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"ABC", "A", "ABCD", "AEIO", "HELLO"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << vowelPermutation(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-58') {
      return `${cleanCode}
int main() {
    std::string tests[] = {"xayuaba", "aeaaa", "hello", "banana", "curious"};
    for (const auto& s : tests) {
        std::cout << "TEST_RES:" << mostFrequentVowel(s) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-59') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {3, 6, 9, 1},
        {1},
        {1, 10, 5, 20},
        {5, 5, 5, 5},
        {10, 3}
    };
    for (auto& a : tests) {
        std::cout << "TEST_RES:" << maximumGap(a) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-60') {
      return `${cleanCode}
int main() {
    int tests[] = {9, 0, 1, 5, 10};
    for (int n : tests) {
        std::cout << "TEST_RES:" << nthFibonacci(n) << std::endl;
    }
    return 0;
}
`;
    }

    if (questionId === 'dsa-p-61') {
      return `${cleanCode}
int main() {
    std::vector<std::vector<int>> tests = {
        {1, 2, 2, 3, 4, 4, 5},
        {1, 1, 1, 1},
        {1, 2, 3, 4},
        {3, 1, 3, 2, 1},
        {}
    };
    for (auto& a : tests) {
        std::vector<int> res = removeDuplicates(a);
        std::cout << "TEST_RES:[";
        for (size_t j = 0; j < res.size(); j++) {
            std::cout << res[j] << (j + 1 < res.size() ? ", " : "");
        }
        std::cout << "]" << std::endl;
    }
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

    if (questionId === 'dsa-p-21') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {3, 2, 1, 7, 5, 4},
            new int[] {1, 8, 0, 2, 3, 5, 6},
            new int[] {1, 2, 3},
            new int[] {10, 20, 30, 40},
            new int[] {4, 1, 9, 10, 2, 6, 8, 3}
        };
        foreach (var arr in tests) {
            Console.WriteLine("TEST_RES:" + LargeSmallSum(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-22') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {" I am a passionate Developer ", "Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "Accenture"};
        foreach (var s in tests) {
            Console.WriteLine("TEST_RES:" + LengthOfLastWord(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-23') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {1, 2, 2, 1},
            new int[] {1, 2},
            new int[] {1},
            new int[] {1, 2, 3, 2, 1},
            new int[] {1, 2, 3, 4, 5}
        };
        foreach (var vals in tests) {
            Console.WriteLine("TEST_RES:" + IsPalindromeList(vals));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-24') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"abcabcbb", "bbbbb", "pwwkew", "", "au"};
        foreach (var s in tests) {
            Console.WriteLine("TEST_RES:" + LengthOfLongestSubstring(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-25') {
      return `${cleanCode}
    public static void Main() {
        string[][] tests = new string[][] {
            new string[] {"yes", "no", "number"},
            new string[] {"apple", "banana", "pie"},
            new string[] {"cat", "dog", "ant"},
            new string[] {"a", "ab", "abc", "abcd"},
            new string[] {"developer", "coding", "assessment"}
        };
        foreach (var words in tests) {
            Console.WriteLine("TEST_RES:" + LongestWord(words));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-26') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {5, 1, 10, 2, 20};
        foreach (var n in tests) {
            Console.WriteLine("TEST_RES:" + CountMagical(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-27') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {3, 4, 1, 7, 9},
            new int[] {1, 2, 3},
            new int[] {10, 5, 20, 15, 30, 25},
            new int[] {5, 2, 4, 6},
            new int[] {7, 9, 3, 8, 11, 15}
        };
        foreach (var arr in tests) {
            Console.WriteLine("TEST_RES:" + MatrixProblem(arr));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-28') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] { new int[] {7, 12}, new int[] {10, 15}, new int[] {1, 4}, new int[] {15, 17}, new int[] {20, 30} };
        foreach (var t in tests) {
            Console.WriteLine("TEST_RES:" + MaxExponents(t[0], t[1]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-29') {
      return `${cleanCode}
    public static void Main() {
        string[] sArr = new string[] {"acdbaaca", "aaaaa", "bcdef", "abacaba", "a"};
        int[] kArr = new int[] {3, 2, 3, 4, 1};
        for (int i = 0; i < sArr.Length; i++) {
            Console.WriteLine("TEST_RES:" + MaxFavouriteSong(sArr[i], kArr[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-30') {
      return `${cleanCode}
    public static void Main() {
        int[][] arrs = new int[][] {
            new int[] {23, 45, 82, 27, 66, 12, 78, 13, 71, 86},
            new int[] {5, 1, 2, 3},
            new int[] {10, 20, 15},
            new int[] {100},
            new int[] {-10, -5, -2, -8}
        };
        int[] lengths = new int[] {10, 4, 3, 1, 4};
        for (int i = 0; i < arrs.Length; i++) {
            string res = Convert.ToString(MaxInArray(arrs[i], lengths[i])).Replace('\\n', ' ').Replace('\\r', ' ').Trim();
            Console.WriteLine("TEST_RES:" + res);
        }
    }
}
`;
    }
    if (questionId === 'dsa-p-31') {
      return `${cleanCode}
    public static void Main() {
        int[][] a = new int[][] {
            new int[] {1, 2, 3, 4, 5},
            new int[] {1, 3, 5},
            new int[] {},
            new int[] {5, 10},
            new int[] {2, 2, 2}
        };
        int[][] b = new int[][] {
            new int[] {2, 4, 6, 8, 10},
            new int[] {2, 4, 6},
            new int[] {1, 2, 3},
            new int[] {},
            new int[] {2, 2}
        };
        for (int i = 0; i < a.Length; i++) {
            Console.WriteLine("TEST_RES:[" + string.Join(", ", MergeSortedArrays(a[i], b[i])) + "]");
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-32') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"xyuaab", "beautiful", "accenture", "mississippi", "aeiouu"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + MostFrequentVowel(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-33') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"String-Compare", "Move-Hyphens-to-Front", "a-b-c-d", "AccentureExam", "---"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + MoveHyphens(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-34') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {2, 3, 1, 4, 5, 2},
            new int[] {6},
            new int[] {5, 4, 3, 2, 1},
            new int[] {1, 2, 3, 4, 5},
            new int[] {10, 20, 15, 25, 22, 18}
        };
        foreach (int[] t in tests) {
            Console.WriteLine("TEST_RES:" + CountNegativeGrowth(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-35') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {1, 12, 16},
            new int[] {2, 16, 20},
            new int[] {3, 7, 8},
            new int[] {4, 20, 4},
            new int[] {4, 15, 2}
        };
        foreach (int[] t in tests) {
            Console.WriteLine("TEST_RES:" + OperationChoices(t[0], t[1], t[2]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-36') {
      return `${cleanCode}
    public static void Main() {
        int[][] arrs = new int[][] {
            new int[] {11, 1, 2, 8, 10, 11, 15, 7},
            new int[] {1, 5, 7, 3, 2, 4},
            new int[] {10, 20, 30, 40},
            new int[] {2, 4, 6, 8},
            new int[] {9, 1, 8, 2, 5, 5}
        };
        int[] targets = new int[] {18, 6, 50, 10, 10};
        for (int i = 0; i < arrs.Length; i++) {
            Console.WriteLine("TEST_RES:[" + string.Join(", ", PairSumMaxProduct(arrs[i], targets[i])) + "]");
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-37') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"aA1_67", "a987 abC012", "1aA_", "a/B1", "aB1"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + CheckPassword(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-38') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {1, 2, 3, 4, 5, 6},
            new int[] {2, 4, 6},
            new int[] {1, 3, 5},
            new int[] {0},
            new int[] {7, 10, 13, 16}
        };
        foreach (int[] t in tests) {
            Console.WriteLine("TEST_RES:" + PrintEvenOdd(t));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-39') {
      return `${cleanCode}
    public static void Main() {
        int[] sums = new int[] {9, 4, 10, 4, 20};
        int[][] arrs = new int[][] {
            new int[] {5, 2, 4, 3, 9, 7, 1},
            new int[] {9, 8, 3, -7, 3, 9},
            new int[] {1},
            new int[] {4, 3, 2},
            new int[] {10, 20, 30, 40}
        };
        for (int i = 0; i < sums.Length; i++) {
            Console.WriteLine("TEST_RES:" + ProductSmallestPair(sums[i], arrs[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-40') {
      return `${cleanCode}
    public static void Main() {
        int[] r = new int[] {7, 3, 2, 5, 1};
        int[] unit = new int[] {2, 5, 8, 2, 1};
        int[][] arrs = new int[][] {
            new int[] {2, 8, 3, 5, 7, 4, 1, 2},
            new int[] {5, 5, 5},
            new int[] {10},
            new int[] {},
            new int[] {2, 1}
        };
        for (int i = 0; i < r.Length; i++) {
            Console.WriteLine("TEST_RES:" + RatCountHouse(r[i], unit[i], arrs[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-41') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {10, 2, 7, 15, 16};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + RearrangementOfBits(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-42') {
      return `${cleanCode}
    public static void Main() {
        int[] n = new int[] {3, 1, 0, 4, 2};
        string[] s = new string[] {"abc", "hello", "xyz", "a", "Accenture"};
        for (int i = 0; i < n.Length; i++) {
            Console.WriteLine("TEST_RES:" + RepeatString(n[i], s[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-43') {
      return `${cleanCode}
    public static void Main() {
        string[] s = new string[] {"apples", "banana", "code", "hello", "cat"};
        char[] c1 = new char[] {'a', 'a', 'x', 'l', 'c'};
        char[] c2 = new char[] {'p', 'n', 'y', 'l', 't'};
        for (int i = 0; i < s.Length; i++) {
            Console.WriteLine("TEST_RES:" + ReplaceCharacter(s[i], c1[i], c2[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-44') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"Hello World", "Accenture Assessment DSA", "Single", "one two three four", "Practice Makes Perfect"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + ReverseWords(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-45') {
      return `${cleanCode}
    public static void Main() {
        int[] a = new int[] {1, 1, 1, 1, 1};
        int[] b = new int[] {-5, -2, 2, -7, 0};
        int[] c = new int[] {6, 1, 5, 12, -4};
        for (int i = 0; i < 5; i++) {
            Console.WriteLine("TEST_RES:" + FindRoots(a[i], b[i], c[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-46') {
      return `${cleanCode}
    public static void Main() {
        int[][] arrs = new int[][] {
            new int[] {1, 2, 3, 4, 5, 6, 7},
            new int[] {1, 2, 3, 4},
            new int[] {1, 2},
            new int[] {10},
            new int[] {1, 2, 3}
        };
        int[] k = new int[] {3, 2, 3, 5, 0};
        for (int i = 0; i < arrs.Length; i++) {
            Console.WriteLine("TEST_RES:[" + string.Join(", ", RotateArray(arrs[i], k[i])) + "]");
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-47') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {10, 5, 8, 20, 15},
            new int[] {3, 1, 7, 5},
            new int[] {100, 50},
            new int[] {-1, -5, -2, -10},
            new int[] {10, 10, 8, 6}
        };
        foreach (var a in tests) {
            Console.WriteLine("TEST_RES:" + SecondLargest(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-48') {
      return `${cleanCode}
    public static void Main() {
        int[][][] tests = new int[][][] {
            new int[][] {new int[] {1, 1, 1}, new int[] {1, 0, 1}, new int[] {1, 1, 1}},
            new int[][] {new int[] {0, 1}, new int[] {1, 1}},
            new int[][] {new int[] {1, 2, 3}, new int[] {4, 5, 6}},
            new int[][] {new int[] {1, 0, 3}, new int[] {4, 5, 6}, new int[] {7, 8, 9}},
            new int[][] {new int[] {0, 0}, new int[] {0, 0}}
        };
        foreach (var m in tests) {
            var res = SetZeroMatrix(m);
            var rows = new string[res.Length];
            for (int r = 0; r < res.Length; r++) {
                rows[r] = "[" + string.Join(", ", res[r]) + "]";
            }
            Console.WriteLine("TEST_RES:[" + string.Join(", ", rows) + "]");
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-49') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {3, 2, 1, 7, 5, 4},
            new int[] {4, 0, 7, 9, 6, 4, 2},
            new int[] {1, 2, 3},
            new int[] {10, 20, 30, 40},
            new int[] {}
        };
        foreach (var a in tests) {
            Console.WriteLine("TEST_RES:" + SmallLargeSum(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-50') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"10110111", "1", "11", "111", "1011"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + DecodeString(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-51') {
      return `${cleanCode}
    public static void Main() {
        int[] m = new int[] {12, 100, 1, 15, 30};
        int[] n = new int[] {50, 160, 14, 15, 60};
        for (int i = 0; i < 5; i++) {
            Console.WriteLine("TEST_RES:" + Calculate(m[i], n[i]));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-52') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {15, 8, 7, 10, 1};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + SumBinary(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-53') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {10, 20, 30, 40, 50, 60},
            new int[] {1, 2, 3, 4},
            new int[] {5},
            new int[] {1, 2, 3},
            new int[] {10, 20}
        };
        foreach (var a in tests) {
            Console.WriteLine("TEST_RES:" + SumEvenIndex(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-54') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {12, 1, 6, 10, 16};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + SumOfDivisors(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-55') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {10, 2, 5, 11, 20};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + SumPrimeNo(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-56') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {5, 12, 1, 10, 3};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + TableAndSum(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-57') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"ABC", "A", "ABCD", "AEIO", "HELLO"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + VowelPermutation(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-58') {
      return `${cleanCode}
    public static void Main() {
        string[] tests = new string[] {"xayuaba", "aeaaa", "hello", "banana", "curious"};
        foreach (string s in tests) {
            Console.WriteLine("TEST_RES:" + MostFrequentVowel(s));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-59') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {3, 6, 9, 1},
            new int[] {1},
            new int[] {1, 10, 5, 20},
            new int[] {5, 5, 5, 5},
            new int[] {10, 3}
        };
        foreach (var a in tests) {
            Console.WriteLine("TEST_RES:" + MaximumGap(a));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-60') {
      return `${cleanCode}
    public static void Main() {
        int[] tests = new int[] {9, 0, 1, 5, 10};
        foreach (int n in tests) {
            Console.WriteLine("TEST_RES:" + NthFibonacci(n));
        }
    }
}
`;
    }

    if (questionId === 'dsa-p-61') {
      return `${cleanCode}
    public static void Main() {
        int[][] tests = new int[][] {
            new int[] {1, 2, 2, 3, 4, 4, 5},
            new int[] {1, 1, 1, 1},
            new int[] {1, 2, 3, 4},
            new int[] {3, 1, 3, 2, 1},
            new int[] {}
        };
        foreach (var a in tests) {
            Console.WriteLine("TEST_RES:[" + string.Join(", ", RemoveDuplicates(a)) + "]");
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

    if (questionId === 'dsa-p-21') {
      return `${cleanCode}
const tests = [[3, 2, 1, 7, 5, 4], [1, 8, 0, 2, 3, 5, 6], [1, 2, 3], [10, 20, 30, 40], [4, 1, 9, 10, 2, 6, 8, 3]];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + largeSmallSum(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-22') {
      return `${cleanCode}
const tests = [" I am a passionate Developer ", "Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "Accenture"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + lengthOfLastWord(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-23') {
      return `${cleanCode}
const tests = [[1, 2, 2, 1], [1, 2], [1], [1, 2, 3, 2, 1], [1, 2, 3, 4, 5]];
for (const vals of tests) {
    try {
        console.log("TEST_RES:" + isPalindromeList(vals));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-24') {
      return `${cleanCode}
const tests = ["abcabcbb", "bbbbb", "pwwkew", "", "au"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + lengthOfLongestSubstring(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-25') {
      return `${cleanCode}
const tests = [["yes", "no", "number"], ["apple", "banana", "pie"], ["cat", "dog", "ant"], ["a", "ab", "abc", "abcd"], ["developer", "coding", "assessment"]];
for (const words of tests) {
    try {
        console.log("TEST_RES:" + longestWord(words));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-26') {
      return `${cleanCode}
const tests = [5, 1, 10, 2, 20];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + countMagical(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-27') {
      return `${cleanCode}
const tests = [[3, 4, 1, 7, 9], [1, 2, 3], [10, 5, 20, 15, 30, 25], [5, 2, 4, 6], [7, 9, 3, 8, 11, 15]];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + matrixProblem(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-28') {
      return `${cleanCode}
const tests = [[7, 12], [10, 15], [1, 4], [15, 17], [20, 30]];
for (const [a, b] of tests) {
    try {
        console.log("TEST_RES:" + maxExponents(a, b));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-29') {
      return `${cleanCode}
const tests = [["acdbaaca", 3], ["aaaaa", 2], ["bcdef", 3], ["abacaba", 4], ["a", 1]];
for (const [s, k] of tests) {
    try {
        console.log("TEST_RES:" + maxFavouriteSong(s, k));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-30') {
      return `${cleanCode}
const tests = [
    [[23, 45, 82, 27, 66, 12, 78, 13, 71, 86], 10],
    [[5, 1, 2, 3], 4],
    [[10, 20, 15], 3],
    [[100], 1],
    [[-10, -5, -2, -8], 4]
];
for (const [arr, len] of tests) {
    try {
        const res = String(maxInArray(arr, len)).replace(/\r?\n/g, ' ').trim();
        console.log("TEST_RES:" + res);
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }
    if (questionId === 'dsa-p-31') {
      return `${cleanCode}
const tests = [
    [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]],
    [[1, 3, 5], [2, 4, 6]],
    [[], [1, 2, 3]],
    [[5, 10], []],
    [[2, 2, 2], [2, 2]]
];
for (const [a, b] of tests) {
    try {
        console.log("TEST_RES:[" + mergeSortedArrays(a, b).join(", ") + "]");
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-32') {
      return `${cleanCode}
const tests = ["xyuaab", "beautiful", "accenture", "mississippi", "aeiouu"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + mostFrequentVowel(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-33') {
      return `${cleanCode}
const tests = ["String-Compare", "Move-Hyphens-to-Front", "a-b-c-d", "AccentureExam", "---"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + moveHyphens(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-34') {
      return `${cleanCode}
const tests = [
    [2, 3, 1, 4, 5, 2],
    [6],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [10, 20, 15, 25, 22, 18]
];
for (const a of tests) {
    try {
        console.log("TEST_RES:" + countNegativeGrowth(a));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-35') {
      return `${cleanCode}
const tests = [
    [1, 12, 16],
    [2, 16, 20],
    [3, 7, 8],
    [4, 20, 4],
    [4, 15, 2]
];
for (const [c, a, b] of tests) {
    try {
        console.log("TEST_RES:" + operationChoices(c, a, b));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-36') {
      return `${cleanCode}
const tests = [
    [[11, 1, 2, 8, 10, 11, 15, 7], 18],
    [[1, 5, 7, 3, 2, 4], 6],
    [[10, 20, 30, 40], 50],
    [[2, 4, 6, 8], 10],
    [[9, 1, 8, 2, 5, 5], 10]
];
for (const [arr, target] of tests) {
    try {
        console.log("TEST_RES:[" + pairSumMaxProduct(arr, target).join(", ") + "]");
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-37') {
      return `${cleanCode}
const tests = ["aA1_67", "a987 abC012", "1aA_", "a/B1", "aB1"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + checkPassword(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-38') {
      return `${cleanCode}
const tests = [
    [1, 2, 3, 4, 5, 6],
    [2, 4, 6],
    [1, 3, 5],
    [0],
    [7, 10, 13, 16]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + printEvenOdd(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }
    if (questionId === 'dsa-p-39') {
      return `${cleanCode}
const tests = [
    [9, [5, 2, 4, 3, 9, 7, 1]],
    [4, [9, 8, 3, -7, 3, 9]],
    [10, [1]],
    [4, [4, 3, 2]],
    [20, [10, 20, 30, 40]]
];
for (const [sum, arr] of tests) {
    try {
        console.log("TEST_RES:" + productSmallestPair(sum, arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-40') {
      return `${cleanCode}
const tests = [
    [7, 2, [2, 8, 3, 5, 7, 4, 1, 2]],
    [3, 5, [5, 5, 5]],
    [2, 8, [10]],
    [5, 2, []],
    [1, 1, [2, 1]]
];
for (const [r, u, arr] of tests) {
    try {
        console.log("TEST_RES:" + ratCountHouse(r, u, arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-41') {
      return `${cleanCode}
const tests = [10, 2, 7, 15, 16];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + rearrangementOfBits(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-42') {
      return `${cleanCode}
const tests = [[3, "abc"], [1, "hello"], [0, "xyz"], [4, "a"], [2, "Accenture"]];
for (const [n, s] of tests) {
    try {
        console.log("TEST_RES:" + repeatString(n, s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-43') {
      return `${cleanCode}
const tests = [
    ["apples", 'a', 'p'],
    ["banana", 'a', 'n'],
    ["code", 'x', 'y'],
    ["hello", 'l', 'l'],
    ["cat", 'c', 't']
];
for (const [s, c1, c2] of tests) {
    try {
        console.log("TEST_RES:" + replaceCharacter(s, c1, c2));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-44') {
      return `${cleanCode}
const tests = ["Hello World", "Accenture Assessment DSA", "Single", "one two three four", "Practice Makes Perfect"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + reverseWords(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-45') {
      return `${cleanCode}
const tests = [[1, -5, 6], [1, -2, 1], [1, 2, 5], [1, -7, 12], [1, 0, -4]];
for (const [a, b, c] of tests) {
    try {
        console.log("TEST_RES:" + findRoots(a, b, c));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-46') {
      return `${cleanCode}
const tests = [
    [[1, 2, 3, 4, 5, 6, 7], 3],
    [[1, 2, 3, 4], 2],
    [[1, 2], 3],
    [[10], 5],
    [[1, 2, 3], 0]
];
for (const [arr, k] of tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(rotateArray(arr, k)));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-47') {
      return `${cleanCode}
const tests = [
    [10, 5, 8, 20, 15],
    [3, 1, 7, 5],
    [100, 50],
    [-1, -5, -2, -10],
    [10, 10, 8, 6]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + secondLargest(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-48') {
      return `${cleanCode}
const tests = [
    [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
    [[0, 1], [1, 1]],
    [[1, 2, 3], [4, 5, 6]],
    [[1, 0, 3], [4, 5, 6], [7, 8, 9]],
    [[0, 0], [0, 0]]
];
for (const m of tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(setZeroMatrix(m)));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-49') {
      return `${cleanCode}
const tests = [
    [3, 2, 1, 7, 5, 4],
    [4, 0, 7, 9, 6, 4, 2],
    [1, 2, 3],
    [10, 20, 30, 40],
    []
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + smallLargeSum(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-50') {
      return `${cleanCode}
const tests = ["10110111", "1", "11", "111", "1011"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + decodeString(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-51') {
      return `${cleanCode}
const tests = [[12, 50], [100, 160], [1, 14], [15, 15], [30, 60]];
for (const [m, n] of tests) {
    try {
        console.log("TEST_RES:" + calculateSum3And5(m, n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-52') {
      return `${cleanCode}
const tests = [15, 8, 7, 10, 1];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + sumBinary(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-53') {
      return `${cleanCode}
const tests = [
    [10, 20, 30, 40, 50, 60],
    [1, 2, 3, 4],
    [5],
    [1, 2, 3],
    [10, 20]
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + sumEvenIndex(arr));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-54') {
      return `${cleanCode}
const tests = [12, 1, 6, 10, 16];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + sumOfDivisors(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-55') {
      return `${cleanCode}
const tests = [10, 2, 5, 11, 20];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + sumPrimeNo(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-56') {
      return `${cleanCode}
const tests = [5, 12, 1, 10, 3];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + tableAndSum(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-57') {
      return `${cleanCode}
const tests = ["ABC", "A", "ABCD", "AEIO", "HELLO"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + vowelPermutation(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-58') {
      return `${cleanCode}
const tests = ["xayuaba", "aeaaa", "hello", "banana", "curious"];
for (const s of tests) {
    try {
        console.log("TEST_RES:" + mostFrequentVowel(s));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-59') {
      return `${cleanCode}
const tests = [
    [3, 6, 9, 1],
    [1],
    [1, 10, 5, 20],
    [5, 5, 5, 5],
    [10, 3]
];
for (const nums of tests) {
    try {
        console.log("TEST_RES:" + maximumGap(nums));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-60') {
      return `${cleanCode}
const tests = [9, 0, 1, 5, 10];
for (const n of tests) {
    try {
        console.log("TEST_RES:" + nthFibonacci(n));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }

    if (questionId === 'dsa-p-61') {
      return `${cleanCode}
const tests = [
    [1, 2, 2, 3, 4, 4, 5],
    [1, 1, 1, 1],
    [1, 2, 3, 4],
    [3, 1, 3, 2, 1],
    []
];
for (const arr of tests) {
    try {
        console.log("TEST_RES:" + JSON.stringify(removeDuplicates(arr)));
    } catch (e) {
        console.log("TEST_ERR:" + e.message);
    }
}
`;
    }
  }

  return cleanCode;
}

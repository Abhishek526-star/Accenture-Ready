// src/data/dsaTestCases.js
// Structured test cases and multi-language harnesses for all 49 DSA Practice Sheet questions

export const DSA_TEST_CASES = {
  "dsa-1": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (N = 4)",
      "input": "N = 4",
      "expected": "1\n1 2\n1 2 3\n1 2 3 4",
      "javaCall": "System.out.println(\"---START_TC---\"); printTriangle(4); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printTriangle\"): sol.printTriangle(4)\nelse: sol.solve(4)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printTriangle(4); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printTriangle(4); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (N = 3)",
      "input": "N = 3",
      "expected": "1\n1 2\n1 2 3",
      "javaCall": "System.out.println(\"---START_TC---\"); printTriangle(3); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printTriangle\"): sol.printTriangle(3)\nelse: sol.solve(3)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printTriangle(3); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printTriangle(3); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 3,
      "name": "Boundary Test Case 3 (N = 1)",
      "input": "N = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"---START_TC---\"); printTriangle(1); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printTriangle\"): sol.printTriangle(1)\nelse: sol.solve(1)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printTriangle(1); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printTriangle(1); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 4,
      "name": "Exam Test Case 4 (N = 5)",
      "input": "N = 5",
      "expected": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
      "javaCall": "System.out.println(\"---START_TC---\"); printTriangle(5); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printTriangle\"): sol.printTriangle(5)\nelse: sol.solve(5)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printTriangle(5); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printTriangle(5); console.log(\"\\n---END_TC---\");"
    }
  ],
  "dsa-2": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (N = 3)",
      "input": "N = 3",
      "expected": "  *\n ***\n*****",
      "javaCall": "System.out.println(\"---START_TC---\"); printPyramid(3); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printPyramid\"): sol.printPyramid(3)\nelse: sol.solve(3)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printPyramid(3); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printPyramid(3); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (N = 2)",
      "input": "N = 2",
      "expected": " *\n***",
      "javaCall": "System.out.println(\"---START_TC---\"); printPyramid(2); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printPyramid\"): sol.printPyramid(2)\nelse: sol.solve(2)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printPyramid(2); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printPyramid(2); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 3,
      "name": "Boundary Test Case 3 (N = 1)",
      "input": "N = 1",
      "expected": "*",
      "javaCall": "System.out.println(\"---START_TC---\"); printPyramid(1); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printPyramid\"): sol.printPyramid(1)\nelse: sol.solve(1)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printPyramid(1); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printPyramid(1); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 4,
      "name": "Exam Test Case 4 (N = 4)",
      "input": "N = 4",
      "expected": "   *\n  ***\n *****\n*******",
      "javaCall": "System.out.println(\"---START_TC---\"); printPyramid(4); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printPyramid\"): sol.printPyramid(4)\nelse: sol.solve(4)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printPyramid(4); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printPyramid(4); console.log(\"\\n---END_TC---\");"
    }
  ],
  "dsa-3": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (N = 3)",
      "input": "N = 3",
      "expected": "*****\n ***\n  *",
      "javaCall": "System.out.println(\"---START_TC---\"); printInvertedPyramid(3); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printInvertedPyramid\"): sol.printInvertedPyramid(3)\nelse: sol.solve(3)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printInvertedPyramid(3); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printInvertedPyramid(3); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (N = 2)",
      "input": "N = 2",
      "expected": "***\n *",
      "javaCall": "System.out.println(\"---START_TC---\"); printInvertedPyramid(2); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printInvertedPyramid\"): sol.printInvertedPyramid(2)\nelse: sol.solve(2)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printInvertedPyramid(2); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printInvertedPyramid(2); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 3,
      "name": "Boundary Test Case 3 (N = 1)",
      "input": "N = 1",
      "expected": "*",
      "javaCall": "System.out.println(\"---START_TC---\"); printInvertedPyramid(1); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printInvertedPyramid\"): sol.printInvertedPyramid(1)\nelse: sol.solve(1)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printInvertedPyramid(1); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printInvertedPyramid(1); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 4,
      "name": "Exam Test Case 4 (N = 4)",
      "input": "N = 4",
      "expected": "*******\n *****\n  ***\n   *",
      "javaCall": "System.out.println(\"---START_TC---\"); printInvertedPyramid(4); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printInvertedPyramid\"): sol.printInvertedPyramid(4)\nelse: sol.solve(4)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printInvertedPyramid(4); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printInvertedPyramid(4); console.log(\"\\n---END_TC---\");"
    }
  ],
  "dsa-4": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (N = 3)",
      "input": "N = 3",
      "expected": "  *\n ***\n*****\n ***\n  *",
      "javaCall": "System.out.println(\"---START_TC---\"); printDiamond(3); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printDiamond\"): sol.printDiamond(3)\nelse: sol.solve(3)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printDiamond(3); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printDiamond(3); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 2,
      "name": "Boundary Test Case 2 (N = 1)",
      "input": "N = 1",
      "expected": "*",
      "javaCall": "System.out.println(\"---START_TC---\"); printDiamond(1); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printDiamond\"): sol.printDiamond(1)\nelse: sol.solve(1)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printDiamond(1); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printDiamond(1); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 3,
      "name": "Exam Test Case 3 (N = 2)",
      "input": "N = 2",
      "expected": " *\n***\n *",
      "javaCall": "System.out.println(\"---START_TC---\"); printDiamond(2); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printDiamond\"): sol.printDiamond(2)\nelse: sol.solve(2)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printDiamond(2); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printDiamond(2); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 4,
      "name": "Exam Test Case 4 (N = 4)",
      "input": "N = 4",
      "expected": "   *\n  ***\n *****\n*******\n *****\n  ***\n   *",
      "javaCall": "System.out.println(\"---START_TC---\"); printDiamond(4); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printDiamond\"): sol.printDiamond(4)\nelse: sol.solve(4)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printDiamond(4); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printDiamond(4); console.log(\"\\n---END_TC---\");"
    }
  ],
  "dsa-5": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Array Scanning)",
      "input": "arr = [2, 5, 1, 3, 0]",
      "expected": "5",
      "javaCall": "System.out.println(\"TEST_RES:\" + findLargest(new int[]{2, 5, 1, 3, 0}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findLargest([2, 5, 1, 3, 0]) if hasattr(sol, 'findLargest') else sol.solve([2, 5, 1, 3, 0])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.findLargest({2, 5, 1, 3, 0}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + findLargest([2, 5, 1, 3, 0]));"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (Distinct Elements)",
      "input": "arr = [10, 20, 5, 8]",
      "expected": "20",
      "javaCall": "System.out.println(\"TEST_RES:\" + findLargest(new int[]{10, 20, 5, 8}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findLargest([10, 20, 5, 8]) if hasattr(sol, 'findLargest') else sol.solve([10, 20, 5, 8])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.findLargest({10, 20, 5, 8}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + findLargest([10, 20, 5, 8]));"
    },
    {
      "id": 3,
      "name": "Negative Elements 3",
      "input": "arr = [-10, -5, -2, -100]",
      "expected": "-2",
      "javaCall": "System.out.println(\"TEST_RES:\" + findLargest(new int[]{-10, -5, -2, -100}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findLargest([-10, -5, -2, -100]) if hasattr(sol, 'findLargest') else sol.solve([-10, -5, -2, -100])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.findLargest({-10, -5, -2, -100}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + findLargest([-10, -5, -2, -100]));"
    },
    {
      "id": 4,
      "name": "Single Element 4",
      "input": "arr = [42]",
      "expected": "42",
      "javaCall": "System.out.println(\"TEST_RES:\" + findLargest(new int[]{42}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findLargest([42]) if hasattr(sol, 'findLargest') else sol.solve([42])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.findLargest({42}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + findLargest([42]));"
    }
  ],
  "dsa-6": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5 Elements)",
      "input": "arr = [5, 4, 3, 2, 1]",
      "expected": "[1, 2, 3, 4, 5]",
      "javaCall": "int[] a = {5, 4, 3, 2, 1}; reverseArray(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [5, 4, 3, 2, 1]\nif hasattr(sol, 'reverseArray'): sol.reverseArray(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {5, 4, 3, 2, 1}; sol.reverseArray(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [5, 4, 3, 2, 1]; reverseArray(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (Even Elements)",
      "input": "arr = [10, 20, 30, 40]",
      "expected": "[40, 30, 20, 10]",
      "javaCall": "int[] a = {10, 20, 30, 40}; reverseArray(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [10, 20, 30, 40]\nif hasattr(sol, 'reverseArray'): sol.reverseArray(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {10, 20, 30, 40}; sol.reverseArray(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [10, 20, 30, 40]; reverseArray(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 3,
      "name": "Single Element 3",
      "input": "arr = [7]",
      "expected": "[7]",
      "javaCall": "int[] a = {7}; reverseArray(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [7]\nif hasattr(sol, 'reverseArray'): sol.reverseArray(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {7}; sol.reverseArray(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [7]; reverseArray(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 4,
      "name": "Two Elements 4",
      "input": "arr = [1, 2]",
      "expected": "[2, 1]",
      "javaCall": "int[] a = {1, 2}; reverseArray(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [1, 2]\nif hasattr(sol, 'reverseArray'): sol.reverseArray(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {1, 2}; sol.reverseArray(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [1, 2]; reverseArray(a); console.log('TEST_RES:' + JSON.stringify(a));"
    }
  ],
  "dsa-7": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Frequencies)",
      "input": "arr = [10, 5, 10, 15, 10, 5]",
      "expected": "5: 2, 10: 3, 15: 1",
      "javaCall": "Map<Integer, Integer> map = countFrequency(new int[]{10, 5, 10, 15, 10, 5}); List<Integer> keys = new ArrayList<>(map.keySet()); Collections.sort(keys); List<String> p = new ArrayList<>(); for(int k: keys) p.add(k + \": \" + map.get(k)); System.out.println(\"TEST_RES:\" + String.join(\", \", p));",
      "pythonCall": "_r = sol.countFrequency([10, 5, 10, 15, 10, 5]) if hasattr(sol, 'countFrequency') else sol.solve([10, 5, 10, 15, 10, 5])\nprint('TEST_RES:' + ', '.join(f'{k}: {v}' for k, v in sorted(_r.items())))",
      "cppCall": "auto map = sol.countFrequency({10, 5, 10, 15, 10, 5}); vector<int> keys; for(auto& pair: map) keys.push_back(pair.first); sort(keys.begin(), keys.end()); for(size_t i=0; i<keys.size(); i++) cout << (i==0?\"TEST_RES:\":\", \") << keys[i] << \": \" << map[keys[i]]; cout << endl;",
      "jsCall": "const r = countFrequency([10, 5, 10, 15, 10, 5]); console.log('TEST_RES:' + Object.keys(r).sort((a,b)=>a-b).map(k=>k + ': ' + r[k]).join(', '));"
    },
    {
      "id": 2,
      "name": "All Distinct 2",
      "input": "arr = [1, 2, 3]",
      "expected": "1: 1, 2: 1, 3: 1",
      "javaCall": "Map<Integer, Integer> map = countFrequency(new int[]{1, 2, 3}); List<Integer> keys = new ArrayList<>(map.keySet()); Collections.sort(keys); List<String> p = new ArrayList<>(); for(int k: keys) p.add(k + \": \" + map.get(k)); System.out.println(\"TEST_RES:\" + String.join(\", \", p));",
      "pythonCall": "_r = sol.countFrequency([1, 2, 3]) if hasattr(sol, 'countFrequency') else sol.solve([1, 2, 3])\nprint('TEST_RES:' + ', '.join(f'{k}: {v}' for k, v in sorted(_r.items())))",
      "cppCall": "auto map = sol.countFrequency({1, 2, 3}); vector<int> keys; for(auto& pair: map) keys.push_back(pair.first); sort(keys.begin(), keys.end()); for(size_t i=0; i<keys.size(); i++) cout << (i==0?\"TEST_RES:\":\", \") << keys[i] << \": \" << map[keys[i]]; cout << endl;",
      "jsCall": "const r = countFrequency([1, 2, 3]); console.log('TEST_RES:' + Object.keys(r).sort((a,b)=>a-b).map(k=>k + ': ' + r[k]).join(', '));"
    },
    {
      "id": 3,
      "name": "All Same 3",
      "input": "arr = [4, 4, 4, 4]",
      "expected": "4: 4",
      "javaCall": "Map<Integer, Integer> map = countFrequency(new int[]{4, 4, 4, 4}); List<Integer> keys = new ArrayList<>(map.keySet()); Collections.sort(keys); List<String> p = new ArrayList<>(); for(int k: keys) p.add(k + \": \" + map.get(k)); System.out.println(\"TEST_RES:\" + String.join(\", \", p));",
      "pythonCall": "_r = sol.countFrequency([4, 4, 4, 4]) if hasattr(sol, 'countFrequency') else sol.solve([4, 4, 4, 4])\nprint('TEST_RES:' + ', '.join(f'{k}: {v}' for k, v in sorted(_r.items())))",
      "cppCall": "auto map = sol.countFrequency({4, 4, 4, 4}); vector<int> keys; for(auto& pair: map) keys.push_back(pair.first); sort(keys.begin(), keys.end()); for(size_t i=0; i<keys.size(); i++) cout << (i==0?\"TEST_RES:\":\", \") << keys[i] << \": \" << map[keys[i]]; cout << endl;",
      "jsCall": "const r = countFrequency([4, 4, 4, 4]); console.log('TEST_RES:' + Object.keys(r).sort((a,b)=>a-b).map(k=>k + ': ' + r[k]).join(', '));"
    },
    {
      "id": 4,
      "name": "Single 4",
      "input": "arr = [9]",
      "expected": "9: 1",
      "javaCall": "Map<Integer, Integer> map = countFrequency(new int[]{9}); List<Integer> keys = new ArrayList<>(map.keySet()); Collections.sort(keys); List<String> p = new ArrayList<>(); for(int k: keys) p.add(k + \": \" + map.get(k)); System.out.println(\"TEST_RES:\" + String.join(\", \", p));",
      "pythonCall": "_r = sol.countFrequency([9]) if hasattr(sol, 'countFrequency') else sol.solve([9])\nprint('TEST_RES:' + ', '.join(f'{k}: {v}' for k, v in sorted(_r.items())))",
      "cppCall": "auto map = sol.countFrequency({9}); vector<int> keys; for(auto& pair: map) keys.push_back(pair.first); sort(keys.begin(), keys.end()); for(size_t i=0; i<keys.size(); i++) cout << (i==0?\"TEST_RES:\":\", \") << keys[i] << \": \" << map[keys[i]]; cout << endl;",
      "jsCall": "const r = countFrequency([9]); console.log('TEST_RES:' + Object.keys(r).sort((a,b)=>a-b).map(k=>k + ': ' + r[k]).join(', '));"
    }
  ],
  "dsa-8": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (1 to 5)",
      "input": "arr = [1, 2, 3, 4, 5]",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findAverage(new int[]{1, 2, 3, 4, 5}));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findAverage([1, 2, 3, 4, 5])) if hasattr(sol, 'findAverage') else int(sol.solve([1, 2, 3, 4, 5]))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findAverage({1, 2, 3, 4, 5}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findAverage([1, 2, 3, 4, 5])));"
    },
    {
      "id": 2,
      "name": "Multiples of 10",
      "input": "arr = [10, 20, 30]",
      "expected": "20",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findAverage(new int[]{10, 20, 30}));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findAverage([10, 20, 30])) if hasattr(sol, 'findAverage') else int(sol.solve([10, 20, 30]))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findAverage({10, 20, 30}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findAverage([10, 20, 30])));"
    },
    {
      "id": 3,
      "name": "Single Element 3",
      "input": "arr = [50]",
      "expected": "50",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findAverage(new int[]{50}));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findAverage([50])) if hasattr(sol, 'findAverage') else int(sol.solve([50]))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findAverage({50}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findAverage([50])));"
    },
    {
      "id": 4,
      "name": "Even Numbers 4",
      "input": "arr = [2, 4, 6, 8, 10]",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findAverage(new int[]{2, 4, 6, 8, 10}));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findAverage([2, 4, 6, 8, 10])) if hasattr(sol, 'findAverage') else int(sol.solve([2, 4, 6, 8, 10]))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findAverage({2, 4, 6, 8, 10}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findAverage([2, 4, 6, 8, 10])));"
    }
  ],
  "dsa-9": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Sorted Dups)",
      "input": "nums = [1, 1, 2, 2, 3]",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicates(new int[]{1, 1, 2, 2, 3}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicates([1, 1, 2, 2, 3]) if hasattr(sol, 'removeDuplicates') else sol.solve([1, 1, 2, 2, 3])))",
      "cppCall": "std::vector<int> a = {1, 1, 2, 2, 3}; std::cout << \"TEST_RES:\" << sol.removeDuplicates(a) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + removeDuplicates([1, 1, 2, 2, 3]));"
    },
    {
      "id": 2,
      "name": "All Distinct 2",
      "input": "nums = [1, 2, 3]",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicates(new int[]{1, 2, 3}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicates([1, 2, 3]) if hasattr(sol, 'removeDuplicates') else sol.solve([1, 2, 3])))",
      "cppCall": "std::vector<int> a = {1, 2, 3}; std::cout << \"TEST_RES:\" << sol.removeDuplicates(a) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + removeDuplicates([1, 2, 3]));"
    },
    {
      "id": 3,
      "name": "All Same 3",
      "input": "nums = [2, 2, 2, 2]",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicates(new int[]{2, 2, 2, 2}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicates([2, 2, 2, 2]) if hasattr(sol, 'removeDuplicates') else sol.solve([2, 2, 2, 2])))",
      "cppCall": "std::vector<int> a = {2, 2, 2, 2}; std::cout << \"TEST_RES:\" << sol.removeDuplicates(a) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + removeDuplicates([2, 2, 2, 2]));"
    },
    {
      "id": 4,
      "name": "Longer Array 4",
      "input": "nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",
      "expected": "5",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicates(new int[]{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) if hasattr(sol, 'removeDuplicates') else sol.solve([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])))",
      "cppCall": "std::vector<int> a = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4}; std::cout << \"TEST_RES:\" << sol.removeDuplicates(a) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));"
    }
  ],
  "dsa-10": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Unsorted Dups)",
      "input": "arr = [2, 3, 1, 9, 3, 1, 3, 9]",
      "expected": "[2, 3, 1, 9]",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicatesUnsorted(new int[]{2, 3, 1, 9, 3, 1, 3, 9}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicatesUnsorted([2, 3, 1, 9, 3, 1, 3, 9]) if hasattr(sol, 'removeDuplicatesUnsorted') else sol.solve([2, 3, 1, 9, 3, 1, 3, 9])))",
      "cppCall": "auto res = sol.removeDuplicatesUnsorted({2, 3, 1, 9, 3, 1, 3, 9}); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<res.size();i++) std::cout<<res[i]<<(i+1<res.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(removeDuplicatesUnsorted([2, 3, 1, 9, 3, 1, 3, 9])));"
    },
    {
      "id": 2,
      "name": "Already Unique 2",
      "input": "arr = [4, 3, 2, 1]",
      "expected": "[4, 3, 2, 1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicatesUnsorted(new int[]{4, 3, 2, 1}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicatesUnsorted([4, 3, 2, 1]) if hasattr(sol, 'removeDuplicatesUnsorted') else sol.solve([4, 3, 2, 1])))",
      "cppCall": "auto res = sol.removeDuplicatesUnsorted({4, 3, 2, 1}); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<res.size();i++) std::cout<<res[i]<<(i+1<res.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(removeDuplicatesUnsorted([4, 3, 2, 1])));"
    },
    {
      "id": 3,
      "name": "All Duplicates 3",
      "input": "arr = [5, 5, 5, 5]",
      "expected": "[5]",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicatesUnsorted(new int[]{5, 5, 5, 5}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicatesUnsorted([5, 5, 5, 5]) if hasattr(sol, 'removeDuplicatesUnsorted') else sol.solve([5, 5, 5, 5])))",
      "cppCall": "auto res = sol.removeDuplicatesUnsorted({5, 5, 5, 5}); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<res.size();i++) std::cout<<res[i]<<(i+1<res.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(removeDuplicatesUnsorted([5, 5, 5, 5])));"
    },
    {
      "id": 4,
      "name": "Two Values 4",
      "input": "arr = [10, 20, 10, 20]",
      "expected": "[10, 20]",
      "javaCall": "System.out.println(\"TEST_RES:\" + removeDuplicatesUnsorted(new int[]{10, 20, 10, 20}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.removeDuplicatesUnsorted([10, 20, 10, 20]) if hasattr(sol, 'removeDuplicatesUnsorted') else sol.solve([10, 20, 10, 20])))",
      "cppCall": "auto res = sol.removeDuplicatesUnsorted({10, 20, 10, 20}); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<res.size();i++) std::cout<<res[i]<<(i+1<res.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(removeDuplicatesUnsorted([10, 20, 10, 20])));"
    }
  ],
  "dsa-11": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Subset True)",
      "input": "arr1 = [1, 2, 3, 4, 5], arr2 = [2, 4]",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isSubset(new int[]{1, 2, 3, 4, 5}, new int[]{2, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isSubset([1, 2, 3, 4, 5], [2, 4]) if hasattr(sol, 'isSubset') else sol.solve([1, 2, 3, 4, 5], [2, 4])).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isSubset({1, 2, 3, 4, 5}, {2, 4}) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isSubset([1, 2, 3, 4, 5], [2, 4]));"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (Subset False)",
      "input": "arr1 = [10, 5, 2], arr2 = [10, 7]",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isSubset(new int[]{10, 5, 2}, new int[]{10, 7}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isSubset([10, 5, 2], [10, 7]) if hasattr(sol, 'isSubset') else sol.solve([10, 5, 2], [10, 7])).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isSubset({10, 5, 2}, {10, 7}) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isSubset([10, 5, 2], [10, 7]));"
    },
    {
      "id": 3,
      "name": "Same Arrays 3",
      "input": "arr1 = [1, 2, 3], arr2 = [1, 2, 3]",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isSubset(new int[]{1, 2, 3}, new int[]{1, 2, 3}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isSubset([1, 2, 3], [1, 2, 3]) if hasattr(sol, 'isSubset') else sol.solve([1, 2, 3], [1, 2, 3])).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isSubset({1, 2, 3}, {1, 2, 3}) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isSubset([1, 2, 3], [1, 2, 3]));"
    },
    {
      "id": 4,
      "name": "Single Element Disjoint 4",
      "input": "arr1 = [4, 5], arr2 = [6]",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isSubset(new int[]{4, 5}, new int[]{6}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isSubset([4, 5], [6]) if hasattr(sol, 'isSubset') else sol.solve([4, 5], [6])).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isSubset({4, 5}, {6}) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isSubset([4, 5], [6]));"
    }
  ],
  "dsa-12": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Shifting Zeroes)",
      "input": "nums = [0, 1, 0, 3, 12]",
      "expected": "[1, 3, 12, 0, 0]",
      "javaCall": "int[] a = {0, 1, 0, 3, 12}; moveZeroes(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [0, 1, 0, 3, 12]\nif hasattr(sol, 'moveZeroes'): sol.moveZeroes(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {0, 1, 0, 3, 12}; sol.moveZeroes(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [0, 1, 0, 3, 12]; moveZeroes(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 2,
      "name": "Single Zero 2",
      "input": "nums = [0]",
      "expected": "[0]",
      "javaCall": "int[] a = {0}; moveZeroes(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [0]\nif hasattr(sol, 'moveZeroes'): sol.moveZeroes(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {0}; sol.moveZeroes(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [0]; moveZeroes(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 3,
      "name": "No Zeroes 3",
      "input": "nums = [1, 2, 3]",
      "expected": "[1, 2, 3]",
      "javaCall": "int[] a = {1, 2, 3}; moveZeroes(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [1, 2, 3]\nif hasattr(sol, 'moveZeroes'): sol.moveZeroes(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {1, 2, 3}; sol.moveZeroes(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [1, 2, 3]; moveZeroes(a); console.log('TEST_RES:' + JSON.stringify(a));"
    },
    {
      "id": 4,
      "name": "Leading Zeroes 4",
      "input": "nums = [0, 0, 1]",
      "expected": "[1, 0, 0]",
      "javaCall": "int[] a = {0, 0, 1}; moveZeroes(a); System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(a));",
      "pythonCall": "a = [0, 0, 1]\nif hasattr(sol, 'moveZeroes'): sol.moveZeroes(a)\nelse: sol.solve(a)\nprint('TEST_RES:' + str(a))",
      "cppCall": "std::vector<int> a = {0, 0, 1}; sol.moveZeroes(a); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<a.size();i++) std::cout<<a[i]<<(i+1<a.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const a = [0, 0, 1]; moveZeroes(a); console.log('TEST_RES:' + JSON.stringify(a));"
    }
  ],
  "dsa-13": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Standard Profit)",
      "input": "prices = [7, 1, 5, 3, 6, 4]",
      "expected": "5",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfit(new int[]{7, 1, 5, 3, 6, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfit([7, 1, 5, 3, 6, 4]) if hasattr(sol, 'maxProfit') else sol.solve([7, 1, 5, 3, 6, 4])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfit({7, 1, 5, 3, 6, 4}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfit([7, 1, 5, 3, 6, 4]));"
    },
    {
      "id": 2,
      "name": "Decreasing Prices 2",
      "input": "prices = [7, 6, 4, 3, 1]",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfit(new int[]{7, 6, 4, 3, 1}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfit([7, 6, 4, 3, 1]) if hasattr(sol, 'maxProfit') else sol.solve([7, 6, 4, 3, 1])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfit({7, 6, 4, 3, 1}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfit([7, 6, 4, 3, 1]));"
    },
    {
      "id": 3,
      "name": "Increasing Prices 3",
      "input": "prices = [1, 2, 3, 4, 5]",
      "expected": "4",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfit(new int[]{1, 2, 3, 4, 5}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfit([1, 2, 3, 4, 5]) if hasattr(sol, 'maxProfit') else sol.solve([1, 2, 3, 4, 5])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfit({1, 2, 3, 4, 5}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfit([1, 2, 3, 4, 5]));"
    },
    {
      "id": 4,
      "name": "Two Days 4",
      "input": "prices = [2, 4]",
      "expected": "2",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfit(new int[]{2, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfit([2, 4]) if hasattr(sol, 'maxProfit') else sol.solve([2, 4])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfit({2, 4}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfit([2, 4]));"
    }
  ],
  "dsa-14": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (3 elements)",
      "input": "arr = [1, 3, 3], n = 3",
      "expected": "[3, 2]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(findTwoElement(new int[]{1, 3, 3}, 3)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findTwoElement([1, 3, 3], 3) if hasattr(sol, 'findTwoElement') else sol.solve([1, 3, 3], 3)))",
      "cppCall": "auto res = sol.findTwoElement({1, 3, 3}, 3); std::cout << \"TEST_RES:[\" << res[0] << \", \" << res[1] << \"]\" << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(findTwoElement([1, 3, 3], 3)));"
    },
    {
      "id": 2,
      "name": "Exam Test Case 2 (2 elements)",
      "input": "arr = [2, 2], n = 2",
      "expected": "[2, 1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(findTwoElement(new int[]{2, 2}, 2)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findTwoElement([2, 2], 2) if hasattr(sol, 'findTwoElement') else sol.solve([2, 2], 2)))",
      "cppCall": "auto res = sol.findTwoElement({2, 2}, 2); std::cout << \"TEST_RES:[\" << res[0] << \", \" << res[1] << \"]\" << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(findTwoElement([2, 2], 2)));"
    },
    {
      "id": 3,
      "name": "6 Elements 3",
      "input": "arr = [4, 3, 6, 2, 1, 1], n = 6",
      "expected": "[1, 5]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(findTwoElement(new int[]{4, 3, 6, 2, 1, 1}, 6)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findTwoElement([4, 3, 6, 2, 1, 1], 6) if hasattr(sol, 'findTwoElement') else sol.solve([4, 3, 6, 2, 1, 1], 6)))",
      "cppCall": "auto res = sol.findTwoElement({4, 3, 6, 2, 1, 1}, 6); std::cout << \"TEST_RES:[\" << res[0] << \", \" << res[1] << \"]\" << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(findTwoElement([4, 3, 6, 2, 1, 1], 6)));"
    },
    {
      "id": 4,
      "name": "5 Elements 4",
      "input": "arr = [1, 2, 3, 5, 5], n = 5",
      "expected": "[5, 4]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(findTwoElement(new int[]{1, 2, 3, 5, 5}, 5)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.findTwoElement([1, 2, 3, 5, 5], 5) if hasattr(sol, 'findTwoElement') else sol.solve([1, 2, 3, 5, 5], 5)))",
      "cppCall": "auto res = sol.findTwoElement({1, 2, 3, 5, 5}, 5); std::cout << \"TEST_RES:[\" << res[0] << \", \" << res[1] << \"]\" << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(findTwoElement([1, 2, 3, 5, 5], 5)));"
    }
  ],
  "dsa-15": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Multiple Trans)",
      "input": "prices = [100, 180, 260, 310, 40, 535, 695]",
      "expected": "865",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfitMultiple(new int[]{100, 180, 260, 310, 40, 535, 695}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfitMultiple([100, 180, 260, 310, 40, 535, 695]) if hasattr(sol, 'maxProfitMultiple') else sol.solve([100, 180, 260, 310, 40, 535, 695])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfitMultiple({100, 180, 260, 310, 40, 535, 695}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfitMultiple([100, 180, 260, 310, 40, 535, 695]));"
    },
    {
      "id": 2,
      "name": "Flat Peak 2",
      "input": "prices = [4, 2, 2, 2, 4]",
      "expected": "2",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfitMultiple(new int[]{4, 2, 2, 2, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfitMultiple([4, 2, 2, 2, 4]) if hasattr(sol, 'maxProfitMultiple') else sol.solve([4, 2, 2, 2, 4])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfitMultiple({4, 2, 2, 2, 4}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfitMultiple([4, 2, 2, 2, 4]));"
    },
    {
      "id": 3,
      "name": "Strictly Increasing 3",
      "input": "prices = [1, 2, 3, 4, 5]",
      "expected": "4",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfitMultiple(new int[]{1, 2, 3, 4, 5}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfitMultiple([1, 2, 3, 4, 5]) if hasattr(sol, 'maxProfitMultiple') else sol.solve([1, 2, 3, 4, 5])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfitMultiple({1, 2, 3, 4, 5}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfitMultiple([1, 2, 3, 4, 5]));"
    },
    {
      "id": 4,
      "name": "Decreasing 4",
      "input": "prices = [7, 6, 4, 3, 1]",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxProfitMultiple(new int[]{7, 6, 4, 3, 1}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxProfitMultiple([7, 6, 4, 3, 1]) if hasattr(sol, 'maxProfitMultiple') else sol.solve([7, 6, 4, 3, 1])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxProfitMultiple({7, 6, 4, 3, 1}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxProfitMultiple([7, 6, 4, 3, 1]));"
    }
  ],
  "dsa-16": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Kadane Standard)",
      "input": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) if hasattr(sol, 'maxSubArray') else sol.solve([-2, 1, -3, 4, -1, 2, 1, -5, 4])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxSubArray({-2, 1, -3, 4, -1, 2, 1, -5, 4}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));"
    },
    {
      "id": 2,
      "name": "Single Element 2",
      "input": "nums = [1]",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxSubArray(new int[]{1}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxSubArray([1]) if hasattr(sol, 'maxSubArray') else sol.solve([1])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxSubArray({1}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxSubArray([1]));"
    },
    {
      "id": 3,
      "name": "All Positive 3",
      "input": "nums = [5, 4, -1, 7, 8]",
      "expected": "23",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxSubArray(new int[]{5, 4, -1, 7, 8}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxSubArray([5, 4, -1, 7, 8]) if hasattr(sol, 'maxSubArray') else sol.solve([5, 4, -1, 7, 8])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxSubArray({5, 4, -1, 7, 8}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxSubArray([5, 4, -1, 7, 8]));"
    },
    {
      "id": 4,
      "name": "All Negative 4",
      "input": "nums = [-4, -2, -3, -1]",
      "expected": "-1",
      "javaCall": "System.out.println(\"TEST_RES:\" + maxSubArray(new int[]{-4, -2, -3, -1}));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.maxSubArray([-4, -2, -3, -1]) if hasattr(sol, 'maxSubArray') else sol.solve([-4, -2, -3, -1])))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.maxSubArray({-4, -2, -3, -1}) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + maxSubArray([-4, -2, -3, -1]));"
    }
  ],
  "dsa-17": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (k = 100)",
      "input": "nums = [10, 5, 2, 6], k = 100",
      "expected": "8",
      "javaCall": "System.out.println(\"TEST_RES:\" + numSubarrayProductLessThanK(new int[]{10, 5, 2, 6}, 100));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numSubarrayProductLessThanK([10, 5, 2, 6], 100) if hasattr(sol, 'numSubarrayProductLessThanK') else sol.solve([10, 5, 2, 6], 100)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numSubarrayProductLessThanK({10, 5, 2, 6}, 100) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numSubarrayProductLessThanK([10, 5, 2, 6], 100));"
    },
    {
      "id": 2,
      "name": "Zero Target 2",
      "input": "nums = [1, 2, 3], k = 0",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + numSubarrayProductLessThanK(new int[]{1, 2, 3}, 0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numSubarrayProductLessThanK([1, 2, 3], 0) if hasattr(sol, 'numSubarrayProductLessThanK') else sol.solve([1, 2, 3], 0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numSubarrayProductLessThanK({1, 2, 3}, 0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numSubarrayProductLessThanK([1, 2, 3], 0));"
    },
    {
      "id": 3,
      "name": "Small K 3",
      "input": "nums = [1, 1, 1], k = 2",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + numSubarrayProductLessThanK(new int[]{1, 1, 1}, 2));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numSubarrayProductLessThanK([1, 1, 1], 2) if hasattr(sol, 'numSubarrayProductLessThanK') else sol.solve([1, 1, 1], 2)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numSubarrayProductLessThanK({1, 1, 1}, 2) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numSubarrayProductLessThanK([1, 1, 1], 2));"
    },
    {
      "id": 4,
      "name": "Moderate 4",
      "input": "nums = [1, 2, 3, 4], k = 10",
      "expected": "7",
      "javaCall": "System.out.println(\"TEST_RES:\" + numSubarrayProductLessThanK(new int[]{1, 2, 3, 4}, 10));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numSubarrayProductLessThanK([1, 2, 3, 4], 10) if hasattr(sol, 'numSubarrayProductLessThanK') else sol.solve([1, 2, 3, 4], 10)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numSubarrayProductLessThanK({1, 2, 3, 4}, 10) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numSubarrayProductLessThanK([1, 2, 3, 4], 10));"
    }
  ],
  "dsa-18": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (k = 2)",
      "input": "nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestOnes(new int[]{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, 2));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) if hasattr(sol, 'longestOnes') else sol.solve([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestOnes({1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, 2) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));"
    },
    {
      "id": 2,
      "name": "All Ones 2",
      "input": "nums = [1, 1, 1], k = 0",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestOnes(new int[]{1, 1, 1}, 0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestOnes([1, 1, 1], 0) if hasattr(sol, 'longestOnes') else sol.solve([1, 1, 1], 0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestOnes({1, 1, 1}, 0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestOnes([1, 1, 1], 0));"
    },
    {
      "id": 3,
      "name": "All Zeroes 3",
      "input": "nums = [0, 0, 0], k = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestOnes(new int[]{0, 0, 0}, 1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestOnes([0, 0, 0], 1) if hasattr(sol, 'longestOnes') else sol.solve([0, 0, 0], 1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestOnes({0, 0, 0}, 1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestOnes([0, 0, 0], 1));"
    },
    {
      "id": 4,
      "name": "Alternating 4",
      "input": "nums = [1, 0, 1, 0, 1], k = 1",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestOnes(new int[]{1, 0, 1, 0, 1}, 1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestOnes([1, 0, 1, 0, 1], 1) if hasattr(sol, 'longestOnes') else sol.solve([1, 0, 1, 0, 1], 1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestOnes({1, 0, 1, 0, 1}, 1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestOnes([1, 0, 1, 0, 1], 1));"
    }
  ],
  "dsa-19": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (12)",
      "input": "N = 12",
      "expected": "[2, 2, 3]",
      "javaCall": "System.out.println(\"TEST_RES:\" + primeFactors(12));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.primeFactors(12) if hasattr(sol, 'primeFactors') else sol.solve(12)))",
      "cppCall": "auto r = sol.primeFactors(12); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(primeFactors(12)));"
    },
    {
      "id": 2,
      "name": "Prime Number 2 (13)",
      "input": "N = 13",
      "expected": "[13]",
      "javaCall": "System.out.println(\"TEST_RES:\" + primeFactors(13));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.primeFactors(13) if hasattr(sol, 'primeFactors') else sol.solve(13)))",
      "cppCall": "auto r = sol.primeFactors(13); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(primeFactors(13)));"
    },
    {
      "id": 3,
      "name": "Power of Two 3 (16)",
      "input": "N = 16",
      "expected": "[2, 2, 2, 2]",
      "javaCall": "System.out.println(\"TEST_RES:\" + primeFactors(16));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.primeFactors(16) if hasattr(sol, 'primeFactors') else sol.solve(16)))",
      "cppCall": "auto r = sol.primeFactors(16); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(primeFactors(16)));"
    },
    {
      "id": 4,
      "name": "Composite 4 (30)",
      "input": "N = 30",
      "expected": "[2, 3, 5]",
      "javaCall": "System.out.println(\"TEST_RES:\" + primeFactors(30));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.primeFactors(30) if hasattr(sol, 'primeFactors') else sol.solve(30)))",
      "cppCall": "auto r = sol.primeFactors(30); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(primeFactors(30)));"
    }
  ],
  "dsa-20": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5!)",
      "input": "N = 5",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + trailingZeroes(5));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.trailingZeroes(5) if hasattr(sol, 'trailingZeroes') else sol.solve(5)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.trailingZeroes(5) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + trailingZeroes(5));"
    },
    {
      "id": 2,
      "name": "Zero Factorial 2 (0)",
      "input": "N = 0",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + trailingZeroes(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.trailingZeroes(0) if hasattr(sol, 'trailingZeroes') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.trailingZeroes(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + trailingZeroes(0));"
    },
    {
      "id": 3,
      "name": "Medium Factorial 3 (25)",
      "input": "N = 25",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + trailingZeroes(25));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.trailingZeroes(25) if hasattr(sol, 'trailingZeroes') else sol.solve(25)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.trailingZeroes(25) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + trailingZeroes(25));"
    },
    {
      "id": 4,
      "name": "Large Factorial 4 (100)",
      "input": "N = 100",
      "expected": "24",
      "javaCall": "System.out.println(\"TEST_RES:\" + trailingZeroes(100));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.trailingZeroes(100) if hasattr(sol, 'trailingZeroes') else sol.solve(100)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.trailingZeroes(100) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + trailingZeroes(100));"
    }
  ],
  "dsa-21": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (1004)",
      "input": "N = 1004",
      "expected": "1114",
      "javaCall": "System.out.println(\"TEST_RES:\" + replaceZeroWithOne(1004));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.replaceZeroWithOne(1004) if hasattr(sol, 'replaceZeroWithOne') else sol.solve(1004)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.replaceZeroWithOne(1004) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + replaceZeroWithOne(1004));"
    },
    {
      "id": 2,
      "name": "No Zeroes 2 (123)",
      "input": "N = 123",
      "expected": "123",
      "javaCall": "System.out.println(\"TEST_RES:\" + replaceZeroWithOne(123));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.replaceZeroWithOne(123) if hasattr(sol, 'replaceZeroWithOne') else sol.solve(123)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.replaceZeroWithOne(123) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + replaceZeroWithOne(123));"
    },
    {
      "id": 3,
      "name": "Single Zero 3 (0)",
      "input": "N = 0",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + replaceZeroWithOne(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.replaceZeroWithOne(0) if hasattr(sol, 'replaceZeroWithOne') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.replaceZeroWithOne(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + replaceZeroWithOne(0));"
    },
    {
      "id": 4,
      "name": "Multiple Zeroes 4 (2040)",
      "input": "N = 2040",
      "expected": "2141",
      "javaCall": "System.out.println(\"TEST_RES:\" + replaceZeroWithOne(2040));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.replaceZeroWithOne(2040) if hasattr(sol, 'replaceZeroWithOne') else sol.solve(2040)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.replaceZeroWithOne(2040) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + replaceZeroWithOne(2040));"
    }
  ],
  "dsa-22": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5)",
      "input": "N = 5",
      "expected": "2",
      "javaCall": "System.out.println(\"TEST_RES:\" + floorSqrt(5));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.floorSqrt(5) if hasattr(sol, 'floorSqrt') else sol.solve(5)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.floorSqrt(5) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + floorSqrt(5));"
    },
    {
      "id": 2,
      "name": "Perfect Square 2 (16)",
      "input": "N = 16",
      "expected": "4",
      "javaCall": "System.out.println(\"TEST_RES:\" + floorSqrt(16));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.floorSqrt(16) if hasattr(sol, 'floorSqrt') else sol.solve(16)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.floorSqrt(16) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + floorSqrt(16));"
    },
    {
      "id": 3,
      "name": "Boundary 3 (1)",
      "input": "N = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + floorSqrt(1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.floorSqrt(1) if hasattr(sol, 'floorSqrt') else sol.solve(1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.floorSqrt(1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + floorSqrt(1));"
    },
    {
      "id": 4,
      "name": "Zero 4 (0)",
      "input": "N = 0",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + floorSqrt(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.floorSqrt(0) if hasattr(sol, 'floorSqrt') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.floorSqrt(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + floorSqrt(0));"
    }
  ],
  "dsa-23": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (12 is Abundant)",
      "input": "N = 12",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAbundant(12));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAbundant(12) if hasattr(sol, 'isAbundant') else sol.solve(12)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAbundant(12) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAbundant(12));"
    },
    {
      "id": 2,
      "name": "Deficient Number 2 (15)",
      "input": "N = 15",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAbundant(15));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAbundant(15) if hasattr(sol, 'isAbundant') else sol.solve(15)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAbundant(15) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAbundant(15));"
    },
    {
      "id": 3,
      "name": "Abundant Number 3 (18)",
      "input": "N = 18",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAbundant(18));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAbundant(18) if hasattr(sol, 'isAbundant') else sol.solve(18)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAbundant(18) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAbundant(18));"
    },
    {
      "id": 4,
      "name": "Prime 4 (7)",
      "input": "N = 7",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAbundant(7));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAbundant(7) if hasattr(sol, 'isAbundant') else sol.solve(7)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAbundant(7) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAbundant(7));"
    }
  ],
  "dsa-24": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('1100')",
      "input": "binary = '1100'",
      "expected": "12",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToDecimal(\"1100\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToDecimal('1100') if hasattr(sol, 'binaryToDecimal') else sol.solve('1100')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToDecimal(\"1100\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToDecimal('1100'));"
    },
    {
      "id": 2,
      "name": "Zero 2 ('0')",
      "input": "binary = '0'",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToDecimal(\"0\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToDecimal('0') if hasattr(sol, 'binaryToDecimal') else sol.solve('0')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToDecimal(\"0\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToDecimal('0'));"
    },
    {
      "id": 3,
      "name": "All Ones 3 ('1111')",
      "input": "binary = '1111'",
      "expected": "15",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToDecimal(\"1111\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToDecimal('1111') if hasattr(sol, 'binaryToDecimal') else sol.solve('1111')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToDecimal(\"1111\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToDecimal('1111'));"
    },
    {
      "id": 4,
      "name": "Single Bit 4 ('1')",
      "input": "binary = '1'",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToDecimal(\"1\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToDecimal('1') if hasattr(sol, 'binaryToDecimal') else sol.solve('1')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToDecimal(\"1\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToDecimal('1'));"
    }
  ],
  "dsa-25": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (12)",
      "input": "n = 12",
      "expected": "1100",
      "javaCall": "System.out.println(\"TEST_RES:\" + decimalToBinary(12));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.decimalToBinary(12) if hasattr(sol, 'decimalToBinary') else sol.solve(12)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.decimalToBinary(12) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + decimalToBinary(12));"
    },
    {
      "id": 2,
      "name": "Zero 2 (0)",
      "input": "n = 0",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + decimalToBinary(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.decimalToBinary(0) if hasattr(sol, 'decimalToBinary') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.decimalToBinary(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + decimalToBinary(0));"
    },
    {
      "id": 3,
      "name": "Power of 2 3 (8)",
      "input": "n = 8",
      "expected": "1000",
      "javaCall": "System.out.println(\"TEST_RES:\" + decimalToBinary(8));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.decimalToBinary(8) if hasattr(sol, 'decimalToBinary') else sol.solve(8)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.decimalToBinary(8) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + decimalToBinary(8));"
    },
    {
      "id": 4,
      "name": "Fifteen 4 (15)",
      "input": "n = 15",
      "expected": "1111",
      "javaCall": "System.out.println(\"TEST_RES:\" + decimalToBinary(15));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.decimalToBinary(15) if hasattr(sol, 'decimalToBinary') else sol.solve(15)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.decimalToBinary(15) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + decimalToBinary(15));"
    }
  ],
  "dsa-26": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('11001')",
      "input": "binary = '11001'",
      "expected": "31",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToOctal(\"11001\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToOctal('11001') if hasattr(sol, 'binaryToOctal') else sol.solve('11001')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToOctal(\"11001\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToOctal('11001'));"
    },
    {
      "id": 2,
      "name": "Zero 2 ('0')",
      "input": "binary = '0'",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToOctal(\"0\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToOctal('0') if hasattr(sol, 'binaryToOctal') else sol.solve('0')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToOctal(\"0\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToOctal('0'));"
    },
    {
      "id": 3,
      "name": "One 3 ('1')",
      "input": "binary = '1'",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToOctal(\"1\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToOctal('1') if hasattr(sol, 'binaryToOctal') else sol.solve('1')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToOctal(\"1\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToOctal('1'));"
    },
    {
      "id": 4,
      "name": "Eight in Octal 4 ('1000')",
      "input": "binary = '1000'",
      "expected": "10",
      "javaCall": "System.out.println(\"TEST_RES:\" + binaryToOctal(\"1000\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.binaryToOctal('1000') if hasattr(sol, 'binaryToOctal') else sol.solve('1000')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.binaryToOctal(\"1000\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + binaryToOctal('1000'));"
    }
  ],
  "dsa-27": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('31')",
      "input": "octal = '31'",
      "expected": "11001",
      "javaCall": "System.out.println(\"TEST_RES:\" + octalToBinary(\"31\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.octalToBinary('31') if hasattr(sol, 'octalToBinary') else sol.solve('31')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.octalToBinary(\"31\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + octalToBinary('31'));"
    },
    {
      "id": 2,
      "name": "Zero 2 ('0')",
      "input": "octal = '0'",
      "expected": "0",
      "javaCall": "System.out.println(\"TEST_RES:\" + octalToBinary(\"0\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.octalToBinary('0') if hasattr(sol, 'octalToBinary') else sol.solve('0')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.octalToBinary(\"0\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + octalToBinary('0'));"
    },
    {
      "id": 3,
      "name": "One 3 ('1')",
      "input": "octal = '1'",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + octalToBinary(\"1\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.octalToBinary('1') if hasattr(sol, 'octalToBinary') else sol.solve('1')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.octalToBinary(\"1\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + octalToBinary('1'));"
    },
    {
      "id": 4,
      "name": "Ten 4 ('10')",
      "input": "octal = '10'",
      "expected": "1000",
      "javaCall": "System.out.println(\"TEST_RES:\" + octalToBinary(\"10\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.octalToBinary('10') if hasattr(sol, 'octalToBinary') else sol.solve('10')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.octalToBinary(\"10\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + octalToBinary('10'));"
    }
  ],
  "dsa-28": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (123)",
      "input": "num = 123",
      "expected": "One Hundred Twenty Three",
      "javaCall": "System.out.println(\"TEST_RES:\" + numberToWords(123));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numberToWords(123) if hasattr(sol, 'numberToWords') else sol.solve(123)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numberToWords(123) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numberToWords(123));"
    },
    {
      "id": 2,
      "name": "Zero 2 (0)",
      "input": "num = 0",
      "expected": "Zero",
      "javaCall": "System.out.println(\"TEST_RES:\" + numberToWords(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numberToWords(0) if hasattr(sol, 'numberToWords') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numberToWords(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numberToWords(0));"
    },
    {
      "id": 3,
      "name": "Teen 3 (15)",
      "input": "num = 15",
      "expected": "Fifteen",
      "javaCall": "System.out.println(\"TEST_RES:\" + numberToWords(15));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numberToWords(15) if hasattr(sol, 'numberToWords') else sol.solve(15)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numberToWords(15) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numberToWords(15));"
    },
    {
      "id": 4,
      "name": "Thousands 4 (12345)",
      "input": "num = 12345",
      "expected": "Twelve Thousand Three Hundred Forty Five",
      "javaCall": "System.out.println(\"TEST_RES:\" + numberToWords(12345));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.numberToWords(12345) if hasattr(sol, 'numberToWords') else sol.solve(12345)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.numberToWords(12345) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + numberToWords(12345));"
    }
  ],
  "dsa-29": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('hello')",
      "input": "s = 'hello'",
      "expected": "olleh",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseString(\"hello\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseString('hello') if hasattr(sol, 'reverseString') else sol.solve('hello')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseString(\"hello\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseString('hello'));"
    },
    {
      "id": 2,
      "name": "Single Character 2 ('a')",
      "input": "s = 'a'",
      "expected": "a",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseString(\"a\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseString('a') if hasattr(sol, 'reverseString') else sol.solve('a')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseString(\"a\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseString('a'));"
    },
    {
      "id": 3,
      "name": "Palindrome 3 ('racecar')",
      "input": "s = 'racecar'",
      "expected": "racecar",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseString(\"racecar\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseString('racecar') if hasattr(sol, 'reverseString') else sol.solve('racecar')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseString(\"racecar\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseString('racecar'));"
    },
    {
      "id": 4,
      "name": "Even Length 4 ('abcd')",
      "input": "s = 'abcd'",
      "expected": "dcba",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseString(\"abcd\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseString('abcd') if hasattr(sol, 'reverseString') else sol.solve('abcd')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseString(\"abcd\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseString('abcd'));"
    }
  ],
  "dsa-30": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('listen', 'silent')",
      "input": "s1 = 'listen', s2 = 'silent'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAnagram(\"listen\", \"silent\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAnagram('listen', 'silent') if hasattr(sol, 'isAnagram') else sol.solve('listen', 'silent')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAnagram(\"listen\", \"silent\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAnagram('listen', 'silent'));"
    },
    {
      "id": 2,
      "name": "Not Anagram 2 ('rat', 'car')",
      "input": "s1 = 'rat', s2 = 'car'",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAnagram(\"rat\", \"car\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAnagram('rat', 'car') if hasattr(sol, 'isAnagram') else sol.solve('rat', 'car')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAnagram(\"rat\", \"car\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAnagram('rat', 'car'));"
    },
    {
      "id": 3,
      "name": "Single Character 3 ('a', 'a')",
      "input": "s1 = 'a', s2 = 'a'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAnagram(\"a\", \"a\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAnagram('a', 'a') if hasattr(sol, 'isAnagram') else sol.solve('a', 'a')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAnagram(\"a\", \"a\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAnagram('a', 'a'));"
    },
    {
      "id": 4,
      "name": "Different Lengths 4 ('ab', 'a')",
      "input": "s1 = 'ab', s2 = 'a'",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isAnagram(\"ab\", \"a\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isAnagram('ab', 'a') if hasattr(sol, 'isAnagram') else sol.solve('ab', 'a')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isAnagram(\"ab\", \"a\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isAnagram('ab', 'a'));"
    }
  ],
  "dsa-31": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('racecar')",
      "input": "s = 'racecar'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindrome(\"racecar\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindrome('racecar') if hasattr(sol, 'isPalindrome') else sol.solve('racecar')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindrome(\"racecar\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindrome('racecar'));"
    },
    {
      "id": 2,
      "name": "Not Palindrome 2 ('hello')",
      "input": "s = 'hello'",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindrome(\"hello\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindrome('hello') if hasattr(sol, 'isPalindrome') else sol.solve('hello')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindrome(\"hello\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindrome('hello'));"
    },
    {
      "id": 3,
      "name": "Single Character 3 ('x')",
      "input": "s = 'x'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindrome(\"x\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindrome('x') if hasattr(sol, 'isPalindrome') else sol.solve('x')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindrome(\"x\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindrome('x'));"
    },
    {
      "id": 4,
      "name": "Even Palindrome 4 ('noon')",
      "input": "s = 'noon'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindrome(\"noon\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindrome('noon') if hasattr(sol, 'isPalindrome') else sol.solve('noon')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindrome(\"noon\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindrome('noon'));"
    }
  ],
  "dsa-32": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('i.like.this.program.very.much')",
      "input": "s = 'i.like.this.program.very.much'",
      "expected": "much.very.program.this.like.i",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseWords(\"i.like.this.program.very.much\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseWords('i.like.this.program.very.much') if hasattr(sol, 'reverseWords') else sol.solve('i.like.this.program.very.much')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseWords(\"i.like.this.program.very.much\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseWords('i.like.this.program.very.much'));"
    },
    {
      "id": 2,
      "name": "Single Word 2 ('hello')",
      "input": "s = 'hello'",
      "expected": "hello",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseWords(\"hello\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseWords('hello') if hasattr(sol, 'reverseWords') else sol.solve('hello')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseWords(\"hello\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseWords('hello'));"
    },
    {
      "id": 3,
      "name": "Two Words 3 ('pqr.mno')",
      "input": "s = 'pqr.mno'",
      "expected": "mno.pqr",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseWords(\"pqr.mno\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseWords('pqr.mno') if hasattr(sol, 'reverseWords') else sol.solve('pqr.mno')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseWords(\"pqr.mno\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseWords('pqr.mno'));"
    },
    {
      "id": 4,
      "name": "Three Words 4 ('a.b.c')",
      "input": "s = 'a.b.c'",
      "expected": "c.b.a",
      "javaCall": "System.out.println(\"TEST_RES:\" + reverseWords(\"a.b.c\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.reverseWords('a.b.c') if hasattr(sol, 'reverseWords') else sol.solve('a.b.c')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.reverseWords(\"a.b.c\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + reverseWords('a.b.c'));"
    }
  ],
  "dsa-33": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('testsample')",
      "input": "s = 'testsample'",
      "expected": "e",
      "javaCall": "System.out.println(\"TEST_RES:\" + getMaxOccurringChar(\"testsample\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.getMaxOccurringChar('testsample') if hasattr(sol, 'getMaxOccurringChar') else sol.solve('testsample')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.getMaxOccurringChar(\"testsample\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + getMaxOccurringChar('testsample'));"
    },
    {
      "id": 2,
      "name": "All Same 2 ('aaaa')",
      "input": "s = 'aaaa'",
      "expected": "a",
      "javaCall": "System.out.println(\"TEST_RES:\" + getMaxOccurringChar(\"aaaa\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.getMaxOccurringChar('aaaa') if hasattr(sol, 'getMaxOccurringChar') else sol.solve('aaaa')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.getMaxOccurringChar(\"aaaa\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + getMaxOccurringChar('aaaa'));"
    },
    {
      "id": 3,
      "name": "Lexicographical Tie 3 ('output')",
      "input": "s = 'output'",
      "expected": "t",
      "javaCall": "System.out.println(\"TEST_RES:\" + getMaxOccurringChar(\"output\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.getMaxOccurringChar('output') if hasattr(sol, 'getMaxOccurringChar') else sol.solve('output')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.getMaxOccurringChar(\"output\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + getMaxOccurringChar('output'));"
    },
    {
      "id": 4,
      "name": "Single 4 ('z')",
      "input": "s = 'z'",
      "expected": "z",
      "javaCall": "System.out.println(\"TEST_RES:\" + getMaxOccurringChar(\"z\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.getMaxOccurringChar('z') if hasattr(sol, 'getMaxOccurringChar') else sol.solve('z')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.getMaxOccurringChar(\"z\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + getMaxOccurringChar('z'));"
    }
  ],
  "dsa-34": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('geeksforgeeks')",
      "input": "s = 'geeksforgeeks'",
      "expected": "7",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestSubstrDistinctChars(\"geeksforgeeks\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestSubstrDistinctChars('geeksforgeeks') if hasattr(sol, 'longestSubstrDistinctChars') else sol.solve('geeksforgeeks')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestSubstrDistinctChars(\"geeksforgeeks\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestSubstrDistinctChars('geeksforgeeks'));"
    },
    {
      "id": 2,
      "name": "All Distinct 2 ('abc')",
      "input": "s = 'abc'",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestSubstrDistinctChars(\"abc\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestSubstrDistinctChars('abc') if hasattr(sol, 'longestSubstrDistinctChars') else sol.solve('abc')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestSubstrDistinctChars(\"abc\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestSubstrDistinctChars('abc'));"
    },
    {
      "id": 3,
      "name": "All Same 3 ('bbbbb')",
      "input": "s = 'bbbbb'",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestSubstrDistinctChars(\"bbbbb\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestSubstrDistinctChars('bbbbb') if hasattr(sol, 'longestSubstrDistinctChars') else sol.solve('bbbbb')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestSubstrDistinctChars(\"bbbbb\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestSubstrDistinctChars('bbbbb'));"
    },
    {
      "id": 4,
      "name": "Single 4 ('a')",
      "input": "s = 'a'",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + longestSubstrDistinctChars(\"a\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.longestSubstrDistinctChars('a') if hasattr(sol, 'longestSubstrDistinctChars') else sol.solve('a')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.longestSubstrDistinctChars(\"a\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + longestSubstrDistinctChars('a'));"
    }
  ],
  "dsa-35": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('()[]{}')",
      "input": "s = '()[]{}'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isValid(\"()[]{}\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isValid('()[]{}') if hasattr(sol, 'isValid') else sol.solve('()[]{}')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isValid(\"()[]{}\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isValid('()[]{}'));"
    },
    {
      "id": 2,
      "name": "Mismatched 2 ('(]')",
      "input": "s = '(]'",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isValid(\"(]\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isValid('(]') if hasattr(sol, 'isValid') else sol.solve('(]')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isValid(\"(]\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isValid('(]'));"
    },
    {
      "id": 3,
      "name": "Nested 3 ('{[]}')",
      "input": "s = '{[]}'",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isValid(\"{[]}\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isValid('{[]}') if hasattr(sol, 'isValid') else sol.solve('{[]}')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isValid(\"{[]}\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isValid('{[]}'));"
    },
    {
      "id": 4,
      "name": "Incomplete 4 ('(')",
      "input": "s = '('",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isValid(\"(\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isValid('(') if hasattr(sol, 'isValid') else sol.solve('(')).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isValid(\"(\") ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isValid('('));"
    }
  ],
  "dsa-36": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('characters', 'alphabets')",
      "input": "A = 'characters', B = 'alphabets'",
      "expected": "bclpr",
      "javaCall": "System.out.println(\"TEST_RES:\" + uncommonChars(\"characters\", \"alphabets\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.uncommonChars('characters', 'alphabets') if hasattr(sol, 'uncommonChars') else sol.solve('characters', 'alphabets')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.uncommonChars(\"characters\", \"alphabets\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + uncommonChars('characters', 'alphabets'));"
    },
    {
      "id": 2,
      "name": "Identical 2 ('abc', 'abc')",
      "input": "A = 'abc', B = 'abc'",
      "expected": "-1",
      "javaCall": "System.out.println(\"TEST_RES:\" + uncommonChars(\"abc\", \"abc\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.uncommonChars('abc', 'abc') if hasattr(sol, 'uncommonChars') else sol.solve('abc', 'abc')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.uncommonChars(\"abc\", \"abc\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + uncommonChars('abc', 'abc'));"
    },
    {
      "id": 3,
      "name": "Completely Disjoint 3 ('ab', 'cd')",
      "input": "A = 'ab', B = 'cd'",
      "expected": "abcd",
      "javaCall": "System.out.println(\"TEST_RES:\" + uncommonChars(\"ab\", \"cd\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.uncommonChars('ab', 'cd') if hasattr(sol, 'uncommonChars') else sol.solve('ab', 'cd')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.uncommonChars(\"ab\", \"cd\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + uncommonChars('ab', 'cd'));"
    },
    {
      "id": 4,
      "name": "Single 4 ('a', 'b')",
      "input": "A = 'a', B = 'b'",
      "expected": "ab",
      "javaCall": "System.out.println(\"TEST_RES:\" + uncommonChars(\"a\", \"b\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.uncommonChars('a', 'b') if hasattr(sol, 'uncommonChars') else sol.solve('a', 'b')))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.uncommonChars(\"a\", \"b\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + uncommonChars('a', 'b'));"
    }
  ],
  "dsa-37": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Words)",
      "input": "arr = ['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'], N = 6",
      "expected": "bbb",
      "javaCall": "System.out.println(\"TEST_RES:\" + secFrequent(new String[]{\"aaa\", \"bbb\", \"ccc\", \"bbb\", \"aaa\", \"aaa\"}, 6));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.secFrequent(['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'], 6) if hasattr(sol, 'secFrequent') else sol.solve(['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'], 6)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.secFrequent({\"aaa\", \"bbb\", \"ccc\", \"bbb\", \"aaa\", \"aaa\"}, 6) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + secFrequent(['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'], 6));"
    },
    {
      "id": 2,
      "name": "Two Items 2",
      "input": "arr = ['apple', 'apple', 'apple', 'banana'], N = 4",
      "expected": "banana",
      "javaCall": "System.out.println(\"TEST_RES:\" + secFrequent(new String[]{\"apple\", \"apple\", \"apple\", \"banana\"}, 4));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.secFrequent(['apple', 'apple', 'apple', 'banana'], 4) if hasattr(sol, 'secFrequent') else sol.solve(['apple', 'apple', 'apple', 'banana'], 4)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.secFrequent({\"apple\", \"apple\", \"apple\", \"banana\"}, 4) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + secFrequent(['apple', 'apple', 'apple', 'banana'], 4));"
    },
    {
      "id": 3,
      "name": "Three Items 3",
      "input": "arr = ['x', 'x', 'x', 'y', 'y', 'z'], N = 6",
      "expected": "y",
      "javaCall": "System.out.println(\"TEST_RES:\" + secFrequent(new String[]{\"x\", \"x\", \"x\", \"y\", \"y\", \"z\"}, 6));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.secFrequent(['x', 'x', 'x', 'y', 'y', 'z'], 6) if hasattr(sol, 'secFrequent') else sol.solve(['x', 'x', 'x', 'y', 'y', 'z'], 6)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.secFrequent({\"x\", \"x\", \"x\", \"y\", \"y\", \"z\"}, 6) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + secFrequent(['x', 'x', 'x', 'y', 'y', 'z'], 6));"
    },
    {
      "id": 4,
      "name": "Varied Count 4",
      "input": "arr = ['cat', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'bird'], N = 8",
      "expected": "dog",
      "javaCall": "System.out.println(\"TEST_RES:\" + secFrequent(new String[]{\"cat\", \"dog\", \"dog\", \"dog\", \"cat\", \"cat\", \"cat\", \"bird\"}, 8));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.secFrequent(['cat', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'bird'], 8) if hasattr(sol, 'secFrequent') else sol.solve(['cat', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'bird'], 8)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.secFrequent({\"cat\", \"dog\", \"dog\", \"dog\", \"cat\", \"cat\", \"cat\", \"bird\"}, 8) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + secFrequent(['cat', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'bird'], 8));"
    }
  ],
  "dsa-38": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('(a+(b*c))+(d/e)')",
      "input": "s = '(a+(b*c))+(d/e)'",
      "expected": "[1, 2, 2, 1, 3, 3]",
      "javaCall": "System.out.println(\"TEST_RES:\" + bracketNumbers(\"(a+(b*c))+(d/e)\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.bracketNumbers('(a+(b*c))+(d/e)') if hasattr(sol, 'bracketNumbers') else sol.solve('(a+(b*c))+(d/e)')))",
      "cppCall": "auto r = sol.bracketNumbers(\"(a+(b*c))+(d/e)\"); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(bracketNumbers('(a+(b*c))+(d/e)')));"
    },
    {
      "id": 2,
      "name": "Simple Nested 2 ('((a))')",
      "input": "s = '((a))'",
      "expected": "[1, 2, 2, 1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + bracketNumbers(\"((a))\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.bracketNumbers('((a))') if hasattr(sol, 'bracketNumbers') else sol.solve('((a))')))",
      "cppCall": "auto r = sol.bracketNumbers(\"((a))\"); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(bracketNumbers('((a))')));"
    },
    {
      "id": 3,
      "name": "Single Pair 3 ('(x)')",
      "input": "s = '(x)'",
      "expected": "[1, 1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + bracketNumbers(\"(x)\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.bracketNumbers('(x)') if hasattr(sol, 'bracketNumbers') else sol.solve('(x)')))",
      "cppCall": "auto r = sol.bracketNumbers(\"(x)\"); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(bracketNumbers('(x)')));"
    },
    {
      "id": 4,
      "name": "Sequential 4 ('()()')",
      "input": "s = '()()'",
      "expected": "[1, 1, 2, 2]",
      "javaCall": "System.out.println(\"TEST_RES:\" + bracketNumbers(\"()()\"));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.bracketNumbers('()()') if hasattr(sol, 'bracketNumbers') else sol.solve('()()')))",
      "cppCall": "auto r = sol.bracketNumbers(\"()()\"); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(bracketNumbers('()()')));"
    }
  ],
  "dsa-39": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (N = 5)",
      "input": "n = 5",
      "expected": "1 2 3 4 5",
      "javaCall": "System.out.println(\"---START_TC---\"); printNos(5); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printNos\"): sol.printNos(5)\nelse: sol.solve(5)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printNos(5); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printNos(5); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 2,
      "name": "Boundary 2 (N = 1)",
      "input": "n = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"---START_TC---\"); printNos(1); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printNos\"): sol.printNos(1)\nelse: sol.solve(1)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printNos(1); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printNos(1); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 3,
      "name": "Small 3 (N = 3)",
      "input": "n = 3",
      "expected": "1 2 3",
      "javaCall": "System.out.println(\"---START_TC---\"); printNos(3); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printNos\"): sol.printNos(3)\nelse: sol.solve(3)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printNos(3); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printNos(3); console.log(\"\\n---END_TC---\");"
    },
    {
      "id": 4,
      "name": "Even 4 (N = 4)",
      "input": "n = 4",
      "expected": "1 2 3 4",
      "javaCall": "System.out.println(\"---START_TC---\"); printNos(4); System.out.println(\"\\n---END_TC---\");",
      "pythonCall": "print(\"---START_TC---\")\nif hasattr(sol, \"printNos\"): sol.printNos(4)\nelse: sol.solve(4)\nprint(\"\\n---END_TC---\")",
      "cppCall": "std::cout << \"---START_TC---\\n\"; sol.printNos(4); std::cout << \"\\n---END_TC---\\n\";",
      "jsCall": "console.log(\"---START_TC---\"); printNos(4); console.log(\"\\n---END_TC---\");"
    }
  ],
  "dsa-40": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (1 to 5)",
      "input": "arr = [1, 2, 3, 4, 5], n = 5",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findMean(new int[]{1, 2, 3, 4, 5}, 5));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findMean([1, 2, 3, 4, 5], 5)) if hasattr(sol, 'findMean') else int(sol.solve([1, 2, 3, 4, 5], 5))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findMean({1, 2, 3, 4, 5}, 5) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findMean([1, 2, 3, 4, 5], 5)));"
    },
    {
      "id": 2,
      "name": "Single Element 2",
      "input": "arr = [10], n = 1",
      "expected": "10",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findMean(new int[]{10}, 1));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findMean([10], 1)) if hasattr(sol, 'findMean') else int(sol.solve([10], 1))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findMean({10}, 1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findMean([10], 1)));"
    },
    {
      "id": 3,
      "name": "Two Elements 3",
      "input": "arr = [2, 4], n = 2",
      "expected": "3",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findMean(new int[]{2, 4}, 2));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findMean([2, 4], 2)) if hasattr(sol, 'findMean') else int(sol.solve([2, 4], 2))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findMean({2, 4}, 2) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findMean([2, 4], 2)));"
    },
    {
      "id": 4,
      "name": "Four Elements 4",
      "input": "arr = [10, 20, 30, 40], n = 4",
      "expected": "25",
      "javaCall": "System.out.println(\"TEST_RES:\" + (int)findMean(new int[]{10, 20, 30, 40}, 4));",
      "pythonCall": "print(\"TEST_RES:\" + str(int(sol.findMean([10, 20, 30, 40], 4)) if hasattr(sol, 'findMean') else int(sol.solve([10, 20, 30, 40], 4))))",
      "cppCall": "std::cout << \"TEST_RES:\" << (int)sol.findMean({10, 20, 30, 40}, 4) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + Math.floor(findMean([10, 20, 30, 40], 4)));"
    }
  ],
  "dsa-41": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5)",
      "input": "n = 5",
      "expected": "15",
      "javaCall": "System.out.println(\"TEST_RES:\" + recurSum(5));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.recurSum(5) if hasattr(sol, 'recurSum') else sol.solve(5)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.recurSum(5) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + recurSum(5));"
    },
    {
      "id": 2,
      "name": "Boundary 2 (1)",
      "input": "n = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + recurSum(1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.recurSum(1) if hasattr(sol, 'recurSum') else sol.solve(1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.recurSum(1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + recurSum(1));"
    },
    {
      "id": 3,
      "name": "Three 3 (3)",
      "input": "n = 3",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + recurSum(3));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.recurSum(3) if hasattr(sol, 'recurSum') else sol.solve(3)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.recurSum(3) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + recurSum(3));"
    },
    {
      "id": 4,
      "name": "Ten 4 (10)",
      "input": "n = 10",
      "expected": "55",
      "javaCall": "System.out.println(\"TEST_RES:\" + recurSum(10));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.recurSum(10) if hasattr(sol, 'recurSum') else sol.solve(10)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.recurSum(10) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + recurSum(10));"
    }
  ],
  "dsa-42": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5 numbers)",
      "input": "n = 5",
      "expected": "[1, 1, 2, 3, 5]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(printFibb(5)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.printFibb(5) if hasattr(sol, 'printFibb') else sol.solve(5)))",
      "cppCall": "auto r = sol.printFibb(5); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(printFibb(5)));"
    },
    {
      "id": 2,
      "name": "Single 2 (1)",
      "input": "n = 1",
      "expected": "[1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(printFibb(1)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.printFibb(1) if hasattr(sol, 'printFibb') else sol.solve(1)))",
      "cppCall": "auto r = sol.printFibb(1); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(printFibb(1)));"
    },
    {
      "id": 3,
      "name": "Two 3 (2)",
      "input": "n = 2",
      "expected": "[1, 1]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(printFibb(2)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.printFibb(2) if hasattr(sol, 'printFibb') else sol.solve(2)))",
      "cppCall": "auto r = sol.printFibb(2); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(printFibb(2)));"
    },
    {
      "id": 4,
      "name": "Six 4 (6)",
      "input": "n = 6",
      "expected": "[1, 1, 2, 3, 5, 8]",
      "javaCall": "System.out.println(\"TEST_RES:\" + java.util.Arrays.toString(printFibb(6)));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.printFibb(6) if hasattr(sol, 'printFibb') else sol.solve(6)))",
      "cppCall": "auto r = sol.printFibb(6); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + JSON.stringify(printFibb(6)));"
    }
  ],
  "dsa-43": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5!)",
      "input": "n = 5",
      "expected": "120",
      "javaCall": "System.out.println(\"TEST_RES:\" + factorial(5));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.factorial(5) if hasattr(sol, 'factorial') else sol.solve(5)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.factorial(5) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + factorial(5));"
    },
    {
      "id": 2,
      "name": "Zero 2 (0)",
      "input": "n = 0",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + factorial(0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.factorial(0) if hasattr(sol, 'factorial') else sol.solve(0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.factorial(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + factorial(0));"
    },
    {
      "id": 3,
      "name": "One 3 (1)",
      "input": "n = 1",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + factorial(1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.factorial(1) if hasattr(sol, 'factorial') else sol.solve(1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.factorial(1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + factorial(1));"
    },
    {
      "id": 4,
      "name": "Four 4 (4)",
      "input": "n = 4",
      "expected": "24",
      "javaCall": "System.out.println(\"TEST_RES:\" + factorial(4));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.factorial(4) if hasattr(sol, 'factorial') else sol.solve(4)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.factorial(4) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + factorial(4));"
    }
  ],
  "dsa-44": [
    {
      "id": 1,
      "name": "Exam Test Case 1 ('racecar')",
      "input": "s = 'racecar', left = 0, right = 6",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindromeRecur(\"racecar\", 0, 6));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindromeRecur('racecar', 0, 6) if hasattr(sol, 'isPalindromeRecur') else sol.solve('racecar', 0, 6)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindromeRecur(\"racecar\", 0, 6) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindromeRecur('racecar', 0, 6));"
    },
    {
      "id": 2,
      "name": "Not Palindrome 2 ('hello')",
      "input": "s = 'hello', left = 0, right = 4",
      "expected": "false",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindromeRecur(\"hello\", 0, 4));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindromeRecur('hello', 0, 4) if hasattr(sol, 'isPalindromeRecur') else sol.solve('hello', 0, 4)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindromeRecur(\"hello\", 0, 4) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindromeRecur('hello', 0, 4));"
    },
    {
      "id": 3,
      "name": "Single Char 3 ('a')",
      "input": "s = 'a', left = 0, right = 0",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindromeRecur(\"a\", 0, 0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindromeRecur('a', 0, 0) if hasattr(sol, 'isPalindromeRecur') else sol.solve('a', 0, 0)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindromeRecur(\"a\", 0, 0) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindromeRecur('a', 0, 0));"
    },
    {
      "id": 4,
      "name": "Even 4 ('noon')",
      "input": "s = 'noon', left = 0, right = 3",
      "expected": "true",
      "javaCall": "System.out.println(\"TEST_RES:\" + isPalindromeRecur(\"noon\", 0, 3));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.isPalindromeRecur('noon', 0, 3) if hasattr(sol, 'isPalindromeRecur') else sol.solve('noon', 0, 3)).lower())",
      "cppCall": "std::cout << \"TEST_RES:\" << (sol.isPalindromeRecur(\"noon\", 0, 3) ? \"true\" : \"false\") << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + isPalindromeRecur('noon', 0, 3));"
    }
  ],
  "dsa-45": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (5C2)",
      "input": "n = 5, r = 2",
      "expected": "10",
      "javaCall": "System.out.println(\"TEST_RES:\" + nCr(5, 2));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.nCr(5, 2) if hasattr(sol, 'nCr') else sol.solve(5, 2)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.nCr(5, 2) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + nCr(5, 2));"
    },
    {
      "id": 2,
      "name": "Same N and R 2 (4C4)",
      "input": "n = 4, r = 4",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + nCr(4, 4));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.nCr(4, 4) if hasattr(sol, 'nCr') else sol.solve(4, 4)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.nCr(4, 4) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + nCr(4, 4));"
    },
    {
      "id": 3,
      "name": "Zero R 3 (5C0)",
      "input": "n = 5, r = 0",
      "expected": "1",
      "javaCall": "System.out.println(\"TEST_RES:\" + nCr(5, 0));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.nCr(5, 0) if hasattr(sol, 'nCr') else sol.solve(5, 0)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.nCr(5, 0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + nCr(5, 0));"
    },
    {
      "id": 4,
      "name": "R = 1 4 (6C1)",
      "input": "n = 6, r = 1",
      "expected": "6",
      "javaCall": "System.out.println(\"TEST_RES:\" + nCr(6, 1));",
      "pythonCall": "print(\"TEST_RES:\" + str(sol.nCr(6, 1) if hasattr(sol, 'nCr') else sol.solve(6, 1)))",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.nCr(6, 1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + nCr(6, 1));"
    }
  ],
  "dsa-46": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (k = 3)",
      "input": "k = 3",
      "expected": "1.875",
      "javaCall": "System.out.println(\"TEST_RES:\" + String.format(java.util.Locale.US, \"%.3f\", geometricSum(3)));",
      "pythonCall": "print(\"TEST_RES:\" + f\"{sol.geometricSum(3):.3f}\" if hasattr(sol, 'geometricSum') else f\"{sol.solve(3):.3f}\")",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.geometricSum(3) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + geometricSum(3).toFixed(3));"
    },
    {
      "id": 2,
      "name": "Zero 2 (k = 0)",
      "input": "k = 0",
      "expected": "1.000",
      "javaCall": "System.out.println(\"TEST_RES:\" + String.format(java.util.Locale.US, \"%.3f\", geometricSum(0)));",
      "pythonCall": "print(\"TEST_RES:\" + f\"{sol.geometricSum(0):.3f}\" if hasattr(sol, 'geometricSum') else f\"{sol.solve(0):.3f}\")",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.geometricSum(0) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + geometricSum(0).toFixed(3));"
    },
    {
      "id": 3,
      "name": "One 3 (k = 1)",
      "input": "k = 1",
      "expected": "1.500",
      "javaCall": "System.out.println(\"TEST_RES:\" + String.format(java.util.Locale.US, \"%.3f\", geometricSum(1)));",
      "pythonCall": "print(\"TEST_RES:\" + f\"{sol.geometricSum(1):.3f}\" if hasattr(sol, 'geometricSum') else f\"{sol.solve(1):.3f}\")",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.geometricSum(1) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + geometricSum(1).toFixed(3));"
    },
    {
      "id": 4,
      "name": "Two 4 (k = 2)",
      "input": "k = 2",
      "expected": "1.750",
      "javaCall": "System.out.println(\"TEST_RES:\" + String.format(java.util.Locale.US, \"%.3f\", geometricSum(2)));",
      "pythonCall": "print(\"TEST_RES:\" + f\"{sol.geometricSum(2):.3f}\" if hasattr(sol, 'geometricSum') else f\"{sol.solve(2):.3f}\")",
      "cppCall": "std::cout << \"TEST_RES:\" << sol.geometricSum(2) << std::endl;",
      "jsCall": "console.log(\"TEST_RES:\" + geometricSum(2).toFixed(3));"
    }
  ],
  "dsa-47": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Push & Pop)",
      "input": "push(10), push(20), pop()",
      "expected": "20",
      "javaCall": "MyStack s = new MyStack(); s.push(10); s.push(20); System.out.println(\"TEST_RES:\" + s.pop());",
      "pythonCall": "s = MyStack()\ns.push(10)\ns.push(20)\nprint('TEST_RES:' + str(s.pop()))",
      "cppCall": "MyStack s; s.push(10); s.push(20); std::cout << \"TEST_RES:\" << s.pop() << std::endl;",
      "jsCall": "const s = new MyStack(); s.push(10); s.push(20); console.log('TEST_RES:' + s.pop());"
    },
    {
      "id": 2,
      "name": "Peek Element 2",
      "input": "push(5), peek()",
      "expected": "5",
      "javaCall": "MyStack s = new MyStack(); s.push(5); System.out.println(\"TEST_RES:\" + s.peek());",
      "pythonCall": "s = MyStack()\ns.push(5)\nprint('TEST_RES:' + str(s.peek()))",
      "cppCall": "MyStack s; s.push(5); std::cout << \"TEST_RES:\" << s.peek() << std::endl;",
      "jsCall": "const s = new MyStack(); s.push(5); console.log('TEST_RES:' + s.peek());"
    },
    {
      "id": 3,
      "name": "Empty Check 3",
      "input": "isEmpty()",
      "expected": "true",
      "javaCall": "MyStack s = new MyStack(); System.out.println(\"TEST_RES:\" + s.isEmpty());",
      "pythonCall": "s = MyStack()\nprint('TEST_RES:' + str(s.isEmpty()).lower())",
      "cppCall": "MyStack s; std::cout << \"TEST_RES:\" << (s.isEmpty() ? \"true\" : \"false\") << std::endl;",
      "jsCall": "const s = new MyStack(); console.log('TEST_RES:' + s.isEmpty());"
    },
    {
      "id": 4,
      "name": "Multiple Operations 4",
      "input": "push(1), push(2), push(3), pop(), pop()",
      "expected": "2",
      "javaCall": "MyStack s = new MyStack(); s.push(1); s.push(2); s.push(3); s.pop(); System.out.println(\"TEST_RES:\" + s.pop());",
      "pythonCall": "s = MyStack()\ns.push(1)\ns.push(2)\ns.push(3)\ns.pop()\nprint('TEST_RES:' + str(s.pop()))",
      "cppCall": "MyStack s; s.push(1); s.push(2); s.push(3); s.pop(); std::cout << \"TEST_RES:\" << s.pop() << std::endl;",
      "jsCall": "const s = new MyStack(); s.push(1); s.push(2); s.push(3); s.pop(); console.log('TEST_RES:' + s.pop());"
    }
  ],
  "dsa-48": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Enqueue & Dequeue)",
      "input": "push(10), push(20), pop()",
      "expected": "10",
      "javaCall": "MyQueue q = new MyQueue(); q.push(10); q.push(20); System.out.println(\"TEST_RES:\" + q.pop());",
      "pythonCall": "q = MyQueue()\nq.push(10)\nq.push(20)\nprint('TEST_RES:' + str(q.pop()))",
      "cppCall": "MyQueue q; q.push(10); q.push(20); std::cout << \"TEST_RES:\" << q.pop() << std::endl;",
      "jsCall": "const q = new MyQueue(); q.push(10); q.push(20); console.log('TEST_RES:' + q.pop());"
    },
    {
      "id": 2,
      "name": "Empty Check 2",
      "input": "isEmpty()",
      "expected": "true",
      "javaCall": "MyQueue q = new MyQueue(); System.out.println(\"TEST_RES:\" + q.isEmpty());",
      "pythonCall": "q = MyQueue()\nprint('TEST_RES:' + str(q.isEmpty()).lower())",
      "cppCall": "MyQueue q; std::cout << \"TEST_RES:\" << (q.isEmpty() ? \"true\" : \"false\") << std::endl;",
      "jsCall": "const q = new MyQueue(); console.log('TEST_RES:' + q.isEmpty());"
    },
    {
      "id": 3,
      "name": "Multiple Dequeues 3",
      "input": "push(1), push(2), push(3), pop(), pop()",
      "expected": "2",
      "javaCall": "MyQueue q = new MyQueue(); q.push(1); q.push(2); q.push(3); q.pop(); System.out.println(\"TEST_RES:\" + q.pop());",
      "pythonCall": "q = MyQueue()\nq.push(1)\nq.push(2)\nq.push(3)\nq.pop()\nprint('TEST_RES:' + str(q.pop()))",
      "cppCall": "MyQueue q; q.push(1); q.push(2); q.push(3); q.pop(); std::cout << \"TEST_RES:\" << q.pop() << std::endl;",
      "jsCall": "const q = new MyQueue(); q.push(1); q.push(2); q.push(3); q.pop(); console.log('TEST_RES:' + q.pop());"
    },
    {
      "id": 4,
      "name": "FIFO Order 4",
      "input": "push(99), pop()",
      "expected": "99",
      "javaCall": "MyQueue q = new MyQueue(); q.push(99); System.out.println(\"TEST_RES:\" + q.pop());",
      "pythonCall": "q = MyQueue()\nq.push(99)\nprint('TEST_RES:' + str(q.pop()))",
      "cppCall": "MyQueue q; q.push(99); std::cout << \"TEST_RES:\" << q.pop() << std::endl;",
      "jsCall": "const q = new MyQueue(); q.push(99); console.log('TEST_RES:' + q.pop());"
    }
  ],
  "dsa-49": [
    {
      "id": 1,
      "name": "Exam Test Case 1 (Insert and Traversal)",
      "input": "insert(1), insert(2), toArray()",
      "expected": "[1, 2]",
      "javaCall": "LinkedList list = new LinkedList(); list.insert(1); list.insert(2); System.out.println(\"TEST_RES:\" + list.toArray());",
      "pythonCall": "list = LinkedList()\nlist.insert(1)\nlist.insert(2)\nprint('TEST_RES:' + str(list.to_list()))",
      "cppCall": "LinkedList list; list.insert(1); list.insert(2); auto r = list.toArray(); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const list = new LinkedList(); list.insert(1); list.insert(2); console.log('TEST_RES:' + JSON.stringify(list.toArray()));"
    },
    {
      "id": 2,
      "name": "Three Nodes 2",
      "input": "insert(10), insert(20), insert(30)",
      "expected": "[10, 20, 30]",
      "javaCall": "LinkedList list = new LinkedList(); list.insert(10); list.insert(20); list.insert(30); System.out.println(\"TEST_RES:\" + list.toArray());",
      "pythonCall": "list = LinkedList()\nlist.insert(10)\nlist.insert(20)\nlist.insert(30)\nprint('TEST_RES:' + str(list.to_list()))",
      "cppCall": "LinkedList list; list.insert(10); list.insert(20); list.insert(30); auto r = list.toArray(); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const list = new LinkedList(); list.insert(10); list.insert(20); list.insert(30); console.log('TEST_RES:' + JSON.stringify(list.toArray()));"
    },
    {
      "id": 3,
      "name": "Single Node 3",
      "input": "insert(5)",
      "expected": "[5]",
      "javaCall": "LinkedList list = new LinkedList(); list.insert(5); System.out.println(\"TEST_RES:\" + list.toArray());",
      "pythonCall": "list = LinkedList()\nlist.insert(5)\nprint('TEST_RES:' + str(list.to_list()))",
      "cppCall": "LinkedList list; list.insert(5); auto r = list.toArray(); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const list = new LinkedList(); list.insert(5); console.log('TEST_RES:' + JSON.stringify(list.toArray()));"
    },
    {
      "id": 4,
      "name": "Four Nodes 4",
      "input": "insert(1), insert(3), insert(5), insert(7)",
      "expected": "[1, 3, 5, 7]",
      "javaCall": "LinkedList list = new LinkedList(); list.insert(1); list.insert(3); list.insert(5); list.insert(7); System.out.println(\"TEST_RES:\" + list.toArray());",
      "pythonCall": "list = LinkedList()\nlist.insert(1)\nlist.insert(3)\nlist.insert(5)\nlist.insert(7)\nprint('TEST_RES:' + str(list.to_list()))",
      "cppCall": "LinkedList list; list.insert(1); list.insert(3); list.insert(5); list.insert(7); auto r = list.toArray(); std::cout << \"TEST_RES:[\"; for(size_t i=0;i<r.size();i++) std::cout<<r[i]<<(i+1<r.size()?\", \":\"\"); std::cout<<\"]\"<<std::endl;",
      "jsCall": "const list = new LinkedList(); list.insert(1); list.insert(3); list.insert(5); list.insert(7); console.log('TEST_RES:' + JSON.stringify(list.toArray()));"
    }
  ]
};

export function getDsaQuestionTestCases(questionId) {
  return DSA_TEST_CASES[questionId] || null;
}

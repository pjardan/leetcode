# LeetCode Solutions - Java

LeetCode problem solutions implemented in Java, focusing on idiomatic code, modern features (Java 11+), and clear algorithmic complexity explanations.

## About These Solutions

All Java solutions in this directory follow these practices:

- **Modern Java:** Use of Streams API, lambdas, Optional, records (when applicable), and Java 11+ features.
- **Documented Complexity:** Each solution includes comments about time and space complexity (Big O notation).
- **Clean Code:** Descriptive names, helper methods when necessary, and consistent formatting.
- **Tests:** Some problems include basic unit tests with JUnit 5 (when applicable).

## Structure

Solutions are organized by algorithmic pattern:

```text
src/main/com/pedrojardim/leetcode/
├── arrays/              # Two Pointers, Sliding Window, Prefix Sum
├── binarysearch/        # Binary Search and variations
├── strings/             # String manipulation
├── hashmap_set/         # Hash Maps, Hash Sets
├── stacks_queues/       # Stacks, Queues, Monotonic Stack
├── linkedlists/         # Linked Lists (reversal, cycle detection, etc.)
├── trees/               # Binary Trees, BST, DFS, BFS
├── graphs/              # Graph traversal, shortest path, topological sort
├── heaps/               # Heaps, Priority Queues
├── intervals/           # Merge intervals, scheduling
├── backtracking/        # Backtracking, permutations, combinations
└── dynamic_programming/ # DP (memoization, tabulation)
```


# Navigate to java/src/main/com/pedrojardim/leetcode/<pattern>/
javac FileName.java
java FileName
Run Tests (if available)
If you've set up tests with JUnit 5:

bash
Copy
mvn test
# or
gradle test
Resources and References
LeetCode
NeetCode 150
Java Streams API
Effective Java (Joshua Bloch)
Contact
LinkedIn: Pedro Daniel Jardim
GitHub: pjardim
Note: This README will be updated as new problems are solved.
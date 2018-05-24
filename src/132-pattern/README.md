# 6.132 Pattern

## Description

Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

## Example1

```javascript
Input: [1, 2, 3, 4]
Output: false
Explanation: There is no 132 pattern in the sequence.
```

## Example2

```javascript
Input: [3, 1, 4, 2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
```

## Example3

```javascript
Input: [-1, 3, 2, 0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
```

## From

[LeetCode](https://leetcode.com/problems/132-pattern)

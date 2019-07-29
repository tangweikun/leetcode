# 15.Advantage Shuffle

## Description

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

##Example1

```js
Input: (A = [2, 7, 11, 15]), (B = [1, 10, 4, 11])
Output: [2, 11, 7, 15]
```

##Example2

```js
Input: (A = [12, 24, 8, 32]), (B = [13, 25, 32, 11])
Output: [24, 32, 8, 12]
```

## Note

- 1 <= A.length = B.length <= 10000

## From

[LeetCode](https://leetcode.com/problems/advantage-shuffle)

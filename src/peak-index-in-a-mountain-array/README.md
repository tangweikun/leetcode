# 248.Peak Index in a Mountain Array

## Description

Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

## Example1

```js
Input: [0, 1, 0]
Output: 1
```

## Example2

```js
Input: [0, 2, 1, 0]
Output: 1
```

## From

[LeetCode](https://leetcode.com/problems/peak-index-in-a-mountain-array)

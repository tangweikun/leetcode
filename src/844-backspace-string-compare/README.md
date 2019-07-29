# 246.Backspace String Compare

## Description

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

## Example1

```js
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

## Example2

```js
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

## Example3

```js
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

## Example4

```js
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

## From

[LeetCode](https://leetcode.com/problems/backspace-string-compare)

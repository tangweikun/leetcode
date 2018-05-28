# 230.Positions of Large Groups

## Description

In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters. We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

## Example1

```js
Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
```

## Example2

```js
Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
```

## Example3

```js
Input: 'abcdddeeeeaabbbcd'
Output: [[3, 5], [6, 9], [12, 14]]
```

## From

[LeetCode](https://leetcode.com/problems/positions-of-large-groups)

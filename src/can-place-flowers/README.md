# 111.Can Place Flowers

## Description

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

## Example1

```javascript
Input: [1, 0, 0, 0, 1], 1
Output: true
```

## Example2

```javascript
Input: [1, 0, 0, 0, 1], 2
Output: false
```

## Note

- The input array won't violate no-adjacent-flowers rule.
- The input array size is in the range of [1, 20000].
- n is a non-negative integer which won't exceed the input array size.

## From

[LeetCode](https://leetcode.com/problems/can-place-flowers)

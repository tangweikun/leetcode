import { findLUSlength } from '.'

test('LongestUncommonSubsequence1-1', () => {
  expect(findLUSlength('aba', 'cdc')).toBe(3)
})

test('LongestUncommonSubsequence1-2', () => {
  expect(findLUSlength('ab', 'ab')).toBe(-1)
})

test('LongestUncommonSubsequence1-3', () => {
  expect(findLUSlength('', '')).toBe(-1)
})

test('LongestUncommonSubsequence1-4', () => {
  expect(findLUSlength('abc', '')).toBe(3)
})

test('LongestUncommonSubsequence1-5', () => {
  expect(findLUSlength('abc', 'deff')).toBe(4)
})

test('LongestUncommonSubsequence1-6', () => {
  expect(findLUSlength('abcd', 'cd')).toBe(4)
})

test('LongestUncommonSubsequence1-7', () => {
  expect(findLUSlength('cdabcdcd', 'cd')).toBe(8)
})

test('LongestUncommonSubsequence1-8', () => {
  expect(findLUSlength('dc', 'cd')).toBe(2)
})

test('LongestUncommonSubsequence1-9', () => {
  expect(findLUSlength('cdaf', 'mncd')).toBe(4)
})

test('LongestUncommonSubsequence1-10', () => {
  expect(findLUSlength('aefawfawfawfaw', 'aefawfeawfwafwaef')).toBe(17)
})

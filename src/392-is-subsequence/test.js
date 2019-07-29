import { isSubsequence } from '.'

test('Is Subsequence', () => {
  expect(isSubsequence('', '')).toBe(true)
})

test('Is Subsequence', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
})

test('Is Subsequence', () => {
  expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
})

test('Is Subsequence', () => {
  expect(isSubsequence('abb', 'adbfb')).toBe(true)
})

test('Is Subsequence', () => {
  expect(isSubsequence('ac', 'ca')).toBe(false)
})

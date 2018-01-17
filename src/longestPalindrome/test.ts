import { longestPalindrome } from '.'

test('longestPalindrome-1', () => {
  expect(longestPalindrome('abccccdd')).toBe(7)
})

test('longestPalindrome-2', () => {
  expect(longestPalindrome('a')).toBe(1)
})

test('longestPalindrome-3', () => {
  expect(longestPalindrome('Aa')).toBe(1)
})

test('longestPalindrome-4', () => {
  expect(longestPalindrome('aa')).toBe(2)
})

test('longestPalindrome-5', () => {
  expect(longestPalindrome('abcdef')).toBe(1)
})

test('longestPalindrome-6', () => {
  expect(longestPalindrome('abcdab')).toBe(5)
})

import { longestPalindromeSubseq } from '.'

test('', () => {
  expect(longestPalindromeSubseq('bbbab')).toBe(4)
})

test('', () => {
  expect(longestPalindromeSubseq('cbbd')).toBe(2)
})

test('', () => {
  expect(longestPalindromeSubseq('accbba')).toBe(4)
})

test('', () => {
  expect(longestPalindromeSubseq('abnbnnnbn')).toBe(7)
})

test('', () => {
  expect(longestPalindromeSubseq('abc')).toBe(1)
})

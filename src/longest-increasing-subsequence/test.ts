import { lengthOfLIS } from '.'

test('Longest Increasing Subsequence', () => {
  expect(lengthOfLIS([2, 3, 1, 2, 3])).toBe(3)
})

test('Longest Increasing Subsequence', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4)
})

test('Longest Increasing Subsequence', () => {
  expect(lengthOfLIS([5, 4, 2, 1])).toBe(1)
})

test('Longest Increasing Subsequence', () => {
  expect(lengthOfLIS([1, 2, 2, 1])).toBe(2)
})

test('Longest Increasing Subsequence', () => {
  expect(lengthOfLIS([])).toBe(0)
})

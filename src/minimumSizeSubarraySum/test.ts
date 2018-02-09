import { minSubArrayLen } from '.'

test('MinimumSizeSubarraySum-1', () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2)
})

test('MinimumSizeSubarraySum-2', () => {
  expect(minSubArrayLen([1], 2)).toBe(0)
})

test('MinimumSizeSubarraySum-3', () => {
  expect(minSubArrayLen([], 2)).toBe(0)
})

test('MinimumSizeSubarraySum-4', () => {
  expect(minSubArrayLen([1], 1)).toBe(1)
})

test('MinimumSizeSubarraySum-5', () => {
  expect(minSubArrayLen([1], 1)).toBe(1)
})

test('MinimumSizeSubarraySum-6', () => {
  expect(minSubArrayLen([1, 3, 2, 4, 3, 2], 10)).toBe(4)
})

test('MinimumSizeSubarraySum-7', () => {
  expect(minSubArrayLen([1, 3, 2, 4, 3, 10], 10)).toBe(1)
})

import { numSubarrayProductLessThanK } from '.'

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([1, 2, 3], 6)).toBe(4)
})

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([1, 2, 3, 5, 3], 12)).toBe(8)
})

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([8, 2, 3], 28)).toBe(5)
})

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([11, 2, 3, 4], 22)).toBe(6)
})

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([1, 1, 1, 1], 5)).toBe(10)
})

test('ShortestUnsortedContinuousSubarray-1', () => {
  expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0)
})

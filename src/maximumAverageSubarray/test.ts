import { findMaxAverage } from '.'

test('MaximumAverageSubarray-1', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75)
})

test('MaximumAverageSubarray-1', () => {
  expect(findMaxAverage([1, 2, 3], 2)).toBe(2.5)
})

test('MaximumAverageSubarray-1', () => {
  expect(findMaxAverage([-1, 2, 3, 5, -4, 6, -2, 7, -1], 4)).toBe(2.5)
})

test('MaximumAverageSubarray-1', () => {
  expect(findMaxAverage([1, 2, 0, -5], 1)).toBe(2)
})

test('MaximumAverageSubarray-1', () => {
  expect(findMaxAverage([-1], 1)).toBe(-1)
})

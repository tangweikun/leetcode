import { maximumSubArray } from '.'

test('maximumSubArray-1', () => {
  expect(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test('maximumSubArray-2', () => {
  expect(maximumSubArray([-2])).toBe(-2)
})

test('maximumSubArray-3', () => {
  expect(maximumSubArray([2, 1, -3, 4, -1, 0, 1, -5, 4])).toBe(4)
})

test('maximumSubArray-4', () => {
  expect(maximumSubArray([4, 1, -3, 4, -1, 2, 1])).toBe(8)
})

test('maximumSubArray-5', () => {
  expect(maximumSubArray([-2, -1, -3, -4, -1])).toBe(-1)
})

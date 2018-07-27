import { findLengthOfLCIS } from '.'

test('findLengthOfLCIS-1', () => {
  expect(findLengthOfLCIS([1, 2, 3])).toBe(3)
})

test('findLengthOfLCIS-2', () => {
  expect(findLengthOfLCIS([21, 12, 3])).toBe(1)
})

test('findLengthOfLCIS-3', () => {
  expect(findLengthOfLCIS([])).toBe(0)
})

test('findLengthOfLCIS-4', () => {
  expect(findLengthOfLCIS([-1, -2, 3])).toBe(2)
})

test('findLengthOfLCIS-5', () => {
  expect(findLengthOfLCIS([1, 0, 1, 3, 8])).toBe(4)
})

test('findLengthOfLCIS-6', () => {
  expect(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5])).toBe(4)
})

test('findLengthOfLCIS-7', () => {
  expect(findLengthOfLCIS([1, 2, 3, 4, 3, 4, 5])).toBe(4)
})

test('findLengthOfLCIS-8', () => {
  expect(findLengthOfLCIS([1, 2, 3, 3, 4, 4, 5])).toBe(3)
})

import { findPairs } from '.'

test('findPairs', () => {
  expect(findPairs([], 0)).toBe(0)
})

test('findPairs', () => {
  expect(findPairs([3, 1, 4, 1, 5], 2)).toBe(2)
})

test('findPairs', () => {
  expect(findPairs([1, 2, 3, 4, 5], 1)).toBe(4)
})

test('findPairs', () => {
  expect(findPairs([1, 3, 1, 5, 4], 0)).toBe(1)
})

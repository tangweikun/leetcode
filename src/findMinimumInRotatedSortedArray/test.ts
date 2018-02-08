import { findMin } from '.'

test('FindMinimumInRotatedSortedArray-1', () => {
  expect(findMin([1, 2, 3])).toBe(1)
})

test('FindMinimumInRotatedSortedArray-2', () => {
  expect(findMin([2, 3, 4, 1])).toBe(1)
})

test('FindMinimumInRotatedSortedArray-3', () => {
  expect(findMin([3, 4, 6, 8])).toBe(3)
})

test('FindMinimumInRotatedSortedArray-4', () => {
  expect(findMin([3, 5, 1])).toBe(1)
})

test('FindMinimumInRotatedSortedArray-5', () => {
  expect(findMin([1])).toBe(1)
})

test('FindMinimumInRotatedSortedArray-6', () => {
  expect(findMin([2, 1])).toBe(1)
})

test('FindMinimumInRotatedSortedArray-7', () => {
  expect(findMin([3, 1, 2])).toBe(1)
})

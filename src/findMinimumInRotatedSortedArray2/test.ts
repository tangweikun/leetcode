import { findMin2 } from '.'

test('FindMin2imumInRotatedSortedArray-1', () => {
  expect(findMin2([1, 2, 3, 1])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-2', () => {
  expect(findMin2([2, 3, 3, 1])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-3', () => {
  expect(findMin2([3, 2, 3])).toBe(2)
})

test('FindMin2imumInRotatedSortedArray-4', () => {
  expect(findMin2([3, 3, 3, 1, 1, 2, 2, 2])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-5', () => {
  expect(findMin2([1, 1, 1])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-6', () => {
  expect(findMin2([2, 1, 1])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-7', () => {
  expect(findMin2([3, 1, 2, 2])).toBe(1)
})

test('FindMin2imumInRotatedSortedArray-8', () => {
  expect(findMin2([3, 3, 1, 3])).toBe(1)
})

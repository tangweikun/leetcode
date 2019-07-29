import { findPeakElement } from '.'

test('FindPeakElement-1', () => {
  expect(findPeakElement([0])).toBe(0)
})

test('FindPeakElement-2', () => {
  expect(findPeakElement([0, 1, 2])).toBe(2)
})

test('FindPeakElement-3', () => {
  expect(findPeakElement([1, 0])).toBe(0)
})

test('FindPeakElement-4', () => {
  expect(findPeakElement([2, 3, 4, 2, 4, 3])).toBe(2)
})

test('FindPeakElement-5', () => {
  expect(findPeakElement([5, 0, 5])).toBe(0)
})

test('FindPeakElement-6', () => {
  expect(findPeakElement([6, 3, 4, 6, 7, 6])).toBe(4)
})

test('FindPeakElement-7', () => {
  expect(findPeakElement([1, 7, 4, 6, 2, 6])).toBe(1)
})

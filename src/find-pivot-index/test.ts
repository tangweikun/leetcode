import { pivotIndex } from '.'

test('FindPivotIndex-1', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
})

test('FindPivotIndex-2', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1)
})

test('FindPivotIndex-3', () => {
  expect(pivotIndex([1, 4, 4, 1, 0, 10])).toBe(4)
})

test('FindPivotIndex-4', () => {
  expect(pivotIndex([11, -1, 1, 2, 3, 5])).toBe(1)
})

test('FindPivotIndex-5', () => {
  expect(pivotIndex([])).toBe(-1)
})

test('FindPivotIndex-5', () => {
  expect(pivotIndex([-1, -1, -1, 0, 1, 1])).toBe(0)
})

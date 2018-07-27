import { makeSquare } from '.'

test('Match Sticks To Square', () => {
  expect(makeSquare([])).toBe(false)
})

test('Match Sticks To Square', () => {
  expect(makeSquare([1, 1, 2, 2, 2])).toBe(true)
})

test('Match Sticks To Square', () => {
  expect(makeSquare([3, 3, 3, 3, 4])).toBe(false)
})

test('Match Sticks To Square', () => {
  expect(makeSquare([1, 2, 3, 4])).toBe(false)
})

test('Match Sticks To Square', () => {
  expect(makeSquare([2, 2, 2])).toBe(false)
})

test('Match Sticks To Square', () => {
  expect(makeSquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])).toBe(true)
})

import { minMoves } from '.'

test('', () => {
  expect(minMoves([1, 2, 3])).toBe(2)
})

test('', () => {
  expect(minMoves([1, 2, 3, 5])).toBe(5)
})

test('', () => {
  expect(minMoves([2, 3, 3])).toBe(1)
})

test('', () => {
  expect(minMoves([2, 2, 3, 3])).toBe(2)
})

test('', () => {
  expect(minMoves([5, 6, 8, 8, 5])).toBe(6)
})

test('', () => {
  expect(minMoves([1, 0, 0, 8, 6])).toBe(14)
})

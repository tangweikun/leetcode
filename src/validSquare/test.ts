import { validSquare } from '.'

test('validSquare-1', () => {
  expect(validSquare([0, 0], [1, 1], [1, 0], [0, 1])).toBe(true)
})

test('validSquare-1', () => {
  expect(validSquare([2, 2], [2, 4], [4, 2], [4, 4])).toBe(true)
})

test('validSquare-1', () => {
  expect(validSquare([2, 2], [2, 4], [5, 2], [5, 4])).toBe(false)
})

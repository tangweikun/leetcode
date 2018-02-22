import { validSquare } from '.'

test('validSquare-1', () => {
  expect(validSquare([0, 0], [1, 1], [1, 0], [0, 1])).toBe(true)
})

test('validSquare-2', () => {
  expect(validSquare([2, 2], [2, 4], [4, 2], [4, 4])).toBe(true)
})

test('validSquare-3', () => {
  expect(validSquare([2, 2], [2, 4], [5, 2], [5, 4])).toBe(false)
})

test('validSquare-4', () => {
  expect(validSquare([0, 0], [0, 0], [0, 0], [0, 0])).toBe(false)
})

test('validSquare-5', () => {
  expect(
    validSquare([4604, 1524], [4574, 2274], [5354, 1554], [5324, 2304]),
  ).toBe(true)
})

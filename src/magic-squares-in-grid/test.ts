import { numMagicSquaresInside } from '.'

test('', () => {
  expect(
    numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]),
  ).toBe(1)
})

test('', () => {
  expect(numMagicSquaresInside([])).toBe(0)
})

test('', () => {
  expect(numMagicSquaresInside([[1, 8, 6], [10, 5, 0], [4, 2, 9]])).toBe(0)
})

test('', () => {
  expect(
    numMagicSquaresInside([
      [9, 0, 8, 1, 6],
      [2, 4, 3, 5, 7],
      [4, 3, 4, 9, 2],
      [2, 4, 5, 6, 1],
      [9, 8, 0, 7, 8],
    ]),
  ).toBe(1)
})

test('', () => {
  expect(numMagicSquaresInside([[10, 3, 5], [1, 6, 11], [7, 9, 2]])).toBe(0)
})

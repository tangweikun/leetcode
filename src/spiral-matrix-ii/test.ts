import { generateMatrix } from '.'

test('', () => {
  expect(generateMatrix(0)).toEqual([])
})

test('', () => {
  expect(generateMatrix(1)).toEqual([[1]])
})

test('', () => {
  expect(generateMatrix(2)).toEqual([[1, 2], [4, 3]])
})

test('', () => {
  expect(generateMatrix(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]])
})

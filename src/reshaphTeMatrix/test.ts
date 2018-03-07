import { matrixReshape } from '.'

test('matrixReshape', () => {
  expect(matrixReshape([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]])
})

test('matrixReshape', () => {
  expect(matrixReshape([[1, 2], [3, 4], [5, 6]], 1, 4)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
})

test('matrixReshape', () => {
  expect(matrixReshape([[1, 2], [3, 4]], 2, 4)).toEqual([[1, 2], [3, 4]])
})

test('matrixReshape', () => {
  expect(matrixReshape([[1, 2], [3, 4]], 4, 1)).toEqual([[1], [2], [3], [4]])
})

test('matrixReshape', () => {
  expect(matrixReshape([[1, 2, 3, 4]], 2, 2)).toEqual([[1, 2], [3, 4]])
})

test('matrixReshape', () => {
  expect(
    matrixReshape(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20],
      ],
      4,
      5,
    ),
  ).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
})

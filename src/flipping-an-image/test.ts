import { flipAndInvertImage } from '.'

test('Flipping an Image', () => {
  expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
})

test('Flipping an Image', () => {
  expect(
    flipAndInvertImage([
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0],
    ]),
  ).toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]])
})

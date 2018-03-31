import { floodFill } from '.'

test('floodFill', () => {
  expect(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ])
})

test('floodFill', () => {
  expect(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1)).toEqual([
    [0, 0, 0],
    [0, 1, 1],
  ])
})

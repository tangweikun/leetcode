import { updateMatrix } from '.'

test('updateMatrix', () => {
  expect(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
})

test('updateMatrix', () => {
  expect(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1],
  ])
})

test('updateMatrix', () => {
  expect(updateMatrix([[1, 1, 1], [1, 1, 1], [1, 1, 0]])).toEqual([
    [4, 3, 2],
    [3, 2, 1],
    [2, 1, 0],
  ])
})

test('updateMatrix', () => {
  expect(updateMatrix([[0]])).toEqual([[0]])
})

import { findLongestChain } from '.'

test('Maximum Length of Pair Chain', () => {
  expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toBe(2)
})

test('Maximum Length of Pair Chain', () => {
  expect(findLongestChain([[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(2)
})

test('Maximum Length of Pair Chain', () => {
  expect(findLongestChain([[1, 2], [2, 3]])).toBe(1)
})

test('Maximum Length of Pair Chain', () => {
  expect(findLongestChain([[3, 4], [2, 3], [1, 2]])).toBe(2)
})

test('Maximum Length of Pair Chain', () => {
  expect(
    findLongestChain([
      [7, 9],
      [4, 5],
      [7, 9],
      [-7, -1],
      [0, 10],
      [3, 10],
      [3, 6],
      [2, 3],
    ]),
  ).toBe(4)
})

test('Maximum Length of Pair Chain', () => {
  expect(
    findLongestChain([
      [-6, 9],
      [1, 6],
      [8, 10],
      [-1, 4],
      [-6, -2],
      [-9, 8],
      [-5, 3],
      [0, 3],
    ]),
  ).toBe(3)
})

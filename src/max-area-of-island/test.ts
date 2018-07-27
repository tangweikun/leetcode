import { maxAreaOfIsland } from '.'

test('maxAreaOfIsland', () => {
  expect(
    maxAreaOfIsland([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]),
  ).toBe(6)
})

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland([[0, 0, 0, 0]])).toBe(0)
})

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland([[0, 0], [1, 0]])).toBe(1)
})

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland([[1, 0], [1, 0]])).toBe(2)
})

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland([[0, 1], [1, 0]])).toBe(1)
})

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland([[1, 1], [1, 0], [0, 0], [1, 1]])).toBe(3)
})

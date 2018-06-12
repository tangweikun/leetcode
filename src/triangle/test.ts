import { minimumTotal } from '.'

test('', () => {
  expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11)
})

test('', () => {
  expect(minimumTotal([[-1], [2, 3], [1, -1, -3]])).toBe(-1)
})

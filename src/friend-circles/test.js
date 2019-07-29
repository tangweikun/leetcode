import { findCircleNum } from '.'

test('findCircleNum', () => {
  expect(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2)
})

test('findCircleNum', () => {
  expect(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1)
})

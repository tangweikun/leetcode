import { largestTriangleArea } from '.'

test('', () => {
  expect(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])).toBe(2)
})

test('', () => {
  expect(largestTriangleArea([[4, 6], [6, 5], [3, 1]])).toBe(5.5)
})

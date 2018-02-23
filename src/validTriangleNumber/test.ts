import { triangleNumber } from '.'

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([])).toBe(0)
})

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([0, 1, 2])).toBe(0)
})

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([0, 1, 2, 3])).toBe(0)
})

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([3, 2, 5, 8])).toBe(0)
})

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([2, 2, 3, 4])).toBe(3)
})

test('ValidTriangleNumber-1', () => {
  expect(triangleNumber([2, 2, 3, 4, 5])).toBe(6)
})

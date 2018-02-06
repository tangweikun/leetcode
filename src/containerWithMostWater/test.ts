import { maxArea } from '.'

test('ContainerWithMostWater-1', () => {
  expect(maxArea([1, 1])).toBe(1)
})

test('ContainerWithMostWater-2', () => {
  expect(maxArea([1, 1, 1])).toBe(2)
})

test('ContainerWithMostWater-3', () => {
  expect(maxArea([1, 2, 3, 4])).toBe(4)
})

test('ContainerWithMostWater-4', () => {
  expect(maxArea([2, 1, 2, 4, 3])).toBe(8)
})

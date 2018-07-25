import { maxDistToClosest } from '.'

test('', () => {
  expect(maxDistToClosest([1, 0, 1, 0])).toBe(1)
})

test('', () => {
  expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2)
})

test('', () => {
  expect(maxDistToClosest([1, 0, 0, 0])).toBe(3)
})

test('', () => {
  expect(maxDistToClosest([0, 0, 0, 1])).toBe(3)
})

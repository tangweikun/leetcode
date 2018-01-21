import { distributeCandies } from '.'

test('distributeCandies-1', () => {
  expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3)
})

test('distributeCandies-2', () => {
  expect(distributeCandies([1, 1, 2, 1])).toBe(2)
})

test('distributeCandies-3', () => {
  expect(distributeCandies([1, 1, 1, 1])).toBe(1)
})

test('distributeCandies-4', () => {
  expect(distributeCandies([1, 1, 1, 1, 2, 3])).toBe(3)
})

test('distributeCandies-5', () => {
  expect(distributeCandies([1, 2, 3, 4, 5, 6])).toBe(3)
})

test('distributeCandies-6', () => {
  expect(distributeCandies([1, 1, 1, 1, 1, 3])).toBe(2)
})

test('distributeCandies-7', () => {
  expect(distributeCandies([2, 4, 4, 1, 1, 3])).toBe(3)
})

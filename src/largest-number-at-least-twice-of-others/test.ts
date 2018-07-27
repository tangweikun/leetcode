import { dominantIndex } from '.'

test('dominantIndex-1', () => {
  expect(dominantIndex([1])).toBe(0)
})

test('dominantIndex-2', () => {
  expect(dominantIndex([2, 1])).toBe(0)
})

test('dominantIndex-3', () => {
  expect(dominantIndex([2, 1, 3, 5])).toBe(-1)
})

test('dominantIndex-4', () => {
  expect(dominantIndex([2, 1, 5, 8, 16])).toBe(4)
})

test('dominantIndex-5', () => {
  expect(dominantIndex([2, 1, 5, 8, 16, 0])).toBe(4)
})

test('dominantIndex-6', () => {
  expect(dominantIndex([2, 0])).toBe(0)
})

test('dominantIndex-7', () => {
  expect(dominantIndex([0])).toBe(0)
})

test('dominantIndex-8', () => {
  expect(dominantIndex([2, 6, 4])).toBe(-1)
})

test('dominantIndex-9', () => {
  expect(dominantIndex([-1, -2, -4])).toBe(0)
})

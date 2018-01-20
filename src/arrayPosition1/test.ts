import { arrayPairSum } from '.'

test('arrayPairSum-1', () => {
  expect(arrayPairSum([1, 4, 3, 2])).toBe(4)
})

test('arrayPairSum-2', () => {
  expect(arrayPairSum([3, 5, 8, -5, 0, 2])).toBe(2)
})

test('arrayPairSum-3', () => {
  expect(arrayPairSum([4, 4, 3, 2])).toBe(6)
})

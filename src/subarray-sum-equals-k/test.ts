import { subarraySum } from '.'

test('', () => {
  expect(subarraySum([1], 1)).toBe(1)
})

test('', () => {
  expect(subarraySum([-1, 2, -2, 0, 3, -1], 1)).toBe(3)
})

test('', () => {
  expect(subarraySum([1, 2, 1], 3)).toBe(2)
})

test('', () => {
  expect(subarraySum([1, 1, 2, 2, 0], 4)).toBe(3)
})

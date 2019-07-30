import { numSubarrayBoundedMax } from '.'

test('', () => {
  expect(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)).toBe(3)
})

test('', () => {
  expect(numSubarrayBoundedMax([2, 1, 4, 3, 1, 2, 3], 2, 3)).toBe(11)
})

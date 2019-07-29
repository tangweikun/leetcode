import { findMaximumXOR } from '.'

test('findMaximumXOR', () => {
  expect(findMaximumXOR([3, 10, 5, 25, 2, 8])).toBe(28)
})

test('findMaximumXOR', () => {
  expect(findMaximumXOR([0])).toBe(0)
})

test('findMaximumXOR', () => {
  expect(findMaximumXOR([1])).toBe(0)
})

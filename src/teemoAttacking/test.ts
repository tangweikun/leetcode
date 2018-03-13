import { findPoisonedDuration } from '.'

test('findPoisonedDuration', () => {
  expect(findPoisonedDuration([1, 4], 2)).toBe(4)
})

test('findPoisonedDuration', () => {
  expect(findPoisonedDuration([1, 2], 2)).toBe(3)
})

test('findPoisonedDuration', () => {
  expect(findPoisonedDuration([2, 5], 3)).toBe(6)
})

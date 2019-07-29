import { findMaxConsecutiveOnes } from '.'

test('MaxConsecutiveOnes-1', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3)
})

test('MaxConsecutiveOnes-1', () => {
  expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1])).toBe(6)
})

test('MaxConsecutiveOnes-1', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 0])).toBe(2)
})

test('MaxConsecutiveOnes-1', () => {
  expect(findMaxConsecutiveOnes([])).toBe(0)
})

test('MaxConsecutiveOnes-1', () => {
  expect(findMaxConsecutiveOnes([0, 1, 0, 1, 0, 1])).toBe(1)
})

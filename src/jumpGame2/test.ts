import { jump } from '.'

test('JumpGame2-1', () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2)
})

test('JumpGame2-1', () => {
  expect(jump([1, 5, 2])).toBe(2)
})

test('JumpGame2-1', () => {
  expect(jump([5, 2, 1])).toBe(1)
})

test('JumpGame2-1', () => {
  expect(jump([4, 7, 4, 1, 1, 1, 1])).toBe(2)
})

test('JumpGame2-1', () => {
  expect(jump([2, 4, 1, 1, 1])).toBe(2)
})

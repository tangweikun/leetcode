import { deleteAndEarn } from '.'

test('Delete and Earn', () => {
  expect(deleteAndEarn([3, 4, 2])).toBe(6)
})

test('Delete and Earn', () => {
  expect(deleteAndEarn([2, 2, 3, 3, 3, 4])).toBe(9)
})

test('Delete and Earn', () => {
  expect(deleteAndEarn([1, 4, 2, 4, 8])).toBe(18)
})

test('Delete and Earn', () => {
  expect(deleteAndEarn([1, 3, 2, 4, 3, 5])).toBe(12)
})

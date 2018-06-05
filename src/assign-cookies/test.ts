import { findContentChildren } from '.'

test('findContentChildren', () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
})

test('findContentChildren', () => {
  expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2)
})

test('findContentChildren', () => {
  expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toBe(2)
})

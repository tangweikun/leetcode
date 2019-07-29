import { findLength } from '.'

test('', () => {
  expect(findLength([1, 2], [1, 2])).toBe(2)
})

test('', () => {
  expect(findLength([1, 2], [3, 2, 1, 4, 7])).toBe(1)
})

test('', () => {
  expect(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3)
})

test('', () => {
  expect(findLength([], [])).toBe(0)
})

test('', () => {
  expect(findLength([1, 0, 0, 0, 1], [1, 0, 0, 1, 1])).toBe(3)
})

test('', () => {
  expect(findLength([1, 0, 0, 1], [1, 0, 1, 1])).toBe(2)
})

test('', () => {
  expect(findLength([1, 0, 1], [1, 1, 1])).toBe(1)
})

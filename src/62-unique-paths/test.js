import { uniquePaths } from '.'

test('', () => {
  expect(uniquePaths(1, 4)).toBe(1)
})

test('', () => {
  expect(uniquePaths(5, 1)).toBe(1)
})

test('', () => {
  expect(uniquePaths(2, 2)).toBe(2)
})

test('', () => {
  expect(uniquePaths(3, 2)).toBe(3)
})

test('', () => {
  expect(uniquePaths(7, 3)).toBe(28)
})

test('', () => {
  expect(uniquePaths(2, 3)).toBe(3)
})

test('', () => {
  expect(uniquePaths(3, 3)).toBe(6)
})

test('', () => {
  expect(uniquePaths(51, 9)).toBe(1916797311)
})

import { countSubstrings } from '.'

test('countSubstrings', () => {
  expect(countSubstrings('')).toBe(0)
})

test('countSubstrings', () => {
  expect(countSubstrings('a')).toBe(1)
})

test('countSubstrings', () => {
  expect(countSubstrings('abc')).toBe(3)
})

test('countSubstrings', () => {
  expect(countSubstrings('aaa')).toBe(6)
})

test('countSubstrings', () => {
  expect(countSubstrings('ababa')).toBe(9)
})

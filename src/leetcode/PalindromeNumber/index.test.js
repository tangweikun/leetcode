import { isPalindrome } from '.'

test('isPalindrome', () => {
  expect(isPalindrome(1)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(11)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(111)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(1221)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(12321)).toBe(true)
})

test('isPalindrome', () => {
  expect(isPalindrome(1232)).toBe(false)
})

test('isPalindrome', () => {
  expect(isPalindrome(123)).toBe(false)
})

test('isPalindrome', () => {
  expect(isPalindrome(-1)).toBe(false)
})

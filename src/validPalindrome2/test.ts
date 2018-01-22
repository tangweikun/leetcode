import { validPalindrome } from '.'

test('validPalindrome2-1', () => {
  expect(validPalindrome('aba')).toBe(true)
})

test('validPalindrome2-2', () => {
  expect(validPalindrome('acba')).toBe(true)
})

test('validPalindrome2-3', () => {
  expect(validPalindrome('aacca')).toBe(true)
})

test('validPalindrome2-4', () => {
  expect(validPalindrome('aabcdaa')).toBe(false)
})

test('validPalindrome2-5', () => {
  expect(validPalindrome('addb')).toBe(false)
})

test('validPalindrome2-6', () => {
  expect(validPalindrome('')).toBe(true)
})

test('validPalindrome2-7', () => {
  expect(validPalindrome('ac')).toBe(true)
})

test('validPalindrome2-8', () => {
  expect(validPalindrome('accc')).toBe(true)
})

test('validPalindrome2-8', () => {
  expect(validPalindrome('cbbcc')).toBe(true)
})

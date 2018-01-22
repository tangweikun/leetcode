import { reverseVowels } from '.'

test('reverseVowels-1', () => {
  expect(reverseVowels('hello')).toBe('holle')
})

test('reverseVowels-2', () => {
  expect(reverseVowels('leetcode')).toBe('leotcede')
})

test('reverseVowels-3', () => {
  expect(reverseVowels('HEllo')).toBe('HollE')
})

test('reverseVowels-4', () => {
  expect(reverseVowels('apple')).toBe('eppla')
})

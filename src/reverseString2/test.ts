import { reverseString2 } from '.'

test('reverseString2-1', () => {
  expect(reverseString2('abcdefg', 2)).toBe('bacdfeg')
})

test('reverseString2-2', () => {
  expect(reverseString2('1a2b3c4d5e6f7g', 2)).toBe('a12bc34de56fg7')
})

test('reverseString2-3', () => {
  expect(reverseString2('1a2b3c4d5e6f7g', 3)).toBe('2a1b3c5d4e6fg7')
})

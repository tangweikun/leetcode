import { longestCommonPrefix } from '.'

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['twka', 'twk', 'twkb'])).toBe('twk')
})

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['twk'])).toBe('twk')
})

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix([''])).toBe('')
})

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['twk', 'twkb', 'twka'])).toBe('twk')
})

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix([])).toBe('')
})

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['a', 'b'])).toBe('')
})

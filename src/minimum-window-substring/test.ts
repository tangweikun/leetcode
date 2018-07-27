import { minWindow } from '.'

test('MinWindowSubstring-1', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC')
})

test('MinWindowSubstring-2', () => {
  expect(minWindow('ABC', 'ABC')).toBe('ABC')
})

test('MinWindowSubstring-3', () => {
  expect(minWindow('ABDCBA', 'ABC')).toBe('CBA')
})

test('MinWindowSubstring-4', () => {
  expect(minWindow('', '')).toBe('')
})

test('MinWindowSubstring-5', () => {
  expect(minWindow('a', 'aa')).toBe('')
})

test('MinWindowSubstring-6', () => {
  expect(minWindow('cabwefgewcwaefgcf', 'cae')).toBe('cwae')
})

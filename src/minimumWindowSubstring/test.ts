import { minWindow } from '.'

test('MinWindow-1', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC')
})

test('MinWindow-2', () => {
  expect(minWindow('ABC', 'ABC')).toBe('ABC')
})

test('MinWindow-3', () => {
  expect(minWindow('ABDCBA', 'ABC')).toBe('CBA')
})

test('MinWindow-4', () => {
  expect(minWindow('', '')).toBe('')
})

test('MinWindow-5', () => {
  expect(minWindow('a', 'aa')).toBe('')
})

test('MinWindow-6', () => {
  expect(minWindow('cabwefgewcwaefgcf', 'cae')).toBe('cwae')
})

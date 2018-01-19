import { findTheDifference } from '.'

test('findTheDifference-1', () => {
  expect(findTheDifference('abcd', 'abcde')).toBe('e')
})

test('findTheDifference-2', () => {
  expect(findTheDifference('abcdef', 'fedkcba')).toBe('k')
})

test('findTheDifference-3', () => {
  expect(findTheDifference('abcd', 'dablc')).toBe('l')
})

test('findTheDifference-4', () => {
  expect(findTheDifference('cd', 'cad')).toBe('a')
})

test('findTheDifference-5', () => {
  expect(findTheDifference('mnk', 'amkn')).toBe('a')
})

test('findTheDifference-6', () => {
  expect(findTheDifference('a', 'aa')).toBe('a')
})

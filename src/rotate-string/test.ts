import { rotateString } from '.'

test('rotateString', () => {
  expect(rotateString('', '')).toBe(true)
})

test('rotateString', () => {
  expect(rotateString('abcde', 'cdeab')).toBe(true)
})

test('rotateString', () => {
  expect(rotateString('abcde', 'abced')).toBe(false)
})

test('rotateString', () => {
  expect(rotateString('abc', 'cab')).toBe(true)
})

test('rotateString', () => {
  expect(rotateString('abc', 'cba')).toBe(false)
})

test('rotateString', () => {
  expect(rotateString('abcd', 'cdab')).toBe(true)
})

test('rotateString', () => {
  expect(rotateString('abcd', 'bcda')).toBe(true)
})

test('rotateString', () => {
  expect(rotateString('abcd', 'dabc')).toBe(true)
})

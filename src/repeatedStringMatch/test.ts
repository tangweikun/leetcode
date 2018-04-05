import { repeatedStringMatch } from '.'

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('', 'a')).toBe(-1)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('a', 'a')).toBe(1)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('', '')).toBe(1)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('abcd', 'cdabcdab')).toBe(3)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('ab', 'ba')).toBe(2)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('acb', 'bac')).toBe(2)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('acb', 'baca')).toBe(-1)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('aaaa', 'a')).toBe(1)
})

test('repeatedStringMatch', () => {
  expect(repeatedStringMatch('abababaaba', 'aabaaba')).toBe(2)
})

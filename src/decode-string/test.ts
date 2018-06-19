import { decodeString } from '.'

test('decodeString', () => {
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
})

test('decodeString', () => {
  expect(decodeString('3[a2[c]]')).toBe('accaccacc')
})

test('decodeString', () => {
  expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
})

test('decodeString', () => {
  expect(decodeString('2[leetcode]')).toBe('leetcodeleetcode')
})

test('decodeString', () => {
  expect(decodeString('10[leetcode]')).toBe(
    'leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode',
  )
})

test('decodeString', () => {
  expect(decodeString('100[leetcode]')).toBe(
    'leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode',
  )
})

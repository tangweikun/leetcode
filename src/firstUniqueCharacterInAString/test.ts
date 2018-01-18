import { firstUniqChar } from '.'

test('firstUniqChar-1', () => {
  expect(firstUniqChar('leetcode')).toBe(0)
})

test('firstUniqChar-2', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2)
})

test('firstUniqChar-3', () => {
  expect(firstUniqChar('abab')).toBe(-1)
})

test('firstUniqChar-4', () => {
  expect(firstUniqChar('aaabccb')).toBe(-1)
})

test('firstUniqChar-5', () => {
  expect(firstUniqChar('acbdba')).toBe(1)
})

test('firstUniqChar-6', () => {
  expect(firstUniqChar('dddccdbba')).toBe(8)
})

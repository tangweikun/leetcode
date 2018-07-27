import { strStr } from '.'

test('strStr-1', () => {
  expect(strStr('hello', 'll')).toBe(2)
})

test('strStr-2', () => {
  expect(strStr('aaaaa', 'bba')).toBe(-1)
})

test('strStr-3', () => {
  expect(strStr('abcdd', 'd')).toBe(3)
})

test('strStr-4', () => {
  expect(strStr('ab', 'a')).toBe(0)
})

test('strStr-5', () => {
  expect(strStr('abc', 'abc')).toBe(0)
})

test('strStr-6', () => {
  expect(strStr(' ', ' ')).toBe(0)
})

test('strStr-7', () => {
  expect(strStr('av', ' ')).toBe(-1)
})

test('strStr-8', () => {
  expect(strStr('abc ', ' ')).toBe(3)
})

test('strStr-9', () => {
  expect(strStr('  abc ', 'abc')).toBe(2)
})

test('strStr-10', () => {
  expect(strStr('', '')).toBe(0)
})

test('strStr-11', () => {
  expect(strStr('', ' ')).toBe(-1)
})

test('strStr-12', () => {
  expect(strStr(' ', '')).toBe(0)
})

test('strStr-13', () => {
  expect(strStr('abtesetest', 'test')).toBe(6)
})
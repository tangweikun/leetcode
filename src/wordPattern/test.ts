import { wordPattern } from '.'

test('wordPattern-1', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
})

test('wordPattern-2', () => {
  expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
})

test('wordPattern-3', () => {
  expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
})

test('wordPattern-4', () => {
  expect(wordPattern('abba', 'dog dog dog dog')).toBe(false)
})

test('wordPattern-5', () => {
  expect(wordPattern('ab', 'dog dog dog dog')).toBe(false)
})

test('wordPattern-6', () => {
  expect(wordPattern('ab', 'dog')).toBe(false)
})

test('wordPattern-7', () => {
  expect(wordPattern('abccba', 'a b a a b a')).toBe(false)
})

test('wordPattern-8', () => {
  expect(wordPattern('abccba', 'a b c c c b a')).toBe(false)
})

test('wordPattern-9', () => {
  expect(wordPattern('aba', 'cat cat cat dog')).toBe(false)
})

test('wordPattern-10', () => {
  expect(wordPattern('aba', 'dog cat cat')).toBe(false)
})

import { findAnagrams } from '.'

test('FindAllAnagramsInAString-1', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
})

test('FindAllAnagramsInAString-2', () => {
  expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
})

test('FindAllAnagramsInAString-3', () => {
  expect(findAnagrams('aaa', 'a')).toEqual([0, 1, 2])
})

test('FindAllAnagramsInAString-4', () => {
  expect(findAnagrams('abc', 'd')).toEqual([])
})

test('FindAllAnagramsInAString-5', () => {
  expect(findAnagrams('abccbacccba', 'cab')).toEqual([0, 3, 4, 8])
})

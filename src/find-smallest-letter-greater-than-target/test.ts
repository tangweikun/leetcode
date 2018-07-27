import { nextGreatestLetter } from '.'

test('FindSmallestLetterGreaterThanTarget-1', () => {
  expect(nextGreatestLetter(['a', 'b'], 'z')).toBe('a')
})

test('FindSmallestLetterGreaterThanTarget-2', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
})

test('FindSmallestLetterGreaterThanTarget-3', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f')
})

test('FindSmallestLetterGreaterThanTarget-4', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f')
})

test('FindSmallestLetterGreaterThanTarget-5', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'g')).toBe('j')
})

test('FindSmallestLetterGreaterThanTarget-6', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'j')).toBe('c')
})

test('FindSmallestLetterGreaterThanTarget-7', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'k')).toBe('c')
})

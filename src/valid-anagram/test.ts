import { isAnagram } from '.'

test('validAnagram-1', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
})

test('validAnagram-2', () => {
  expect(isAnagram('aac', 'aac')).toBe(true)
})

test('validAnagram-3', () => {
  expect(isAnagram('hello', 'heoll')).toBe(true)
})

test('validAnagram-4', () => {
  expect(isAnagram('world', 'dlroww')).toBe(false)
})

test('validAnagram-5', () => {
  expect(isAnagram('abc', 'abccba')).toBe(false)
})

test('validAnagram-6', () => {
  expect(isAnagram('a', 'b')).toBe(false)
})

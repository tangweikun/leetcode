import { lengthOfLastWord } from '.'

test('lengthOfLastWord-1', () => {
  expect(lengthOfLastWord('Hello world')).toBe(5)
})

test('lengthOfLastWord-2', () => {
  expect(lengthOfLastWord('Hello world ')).toBe(5)
})

test('lengthOfLastWord-3', () => {
  expect(lengthOfLastWord('')).toBe(0)
})

test('lengthOfLastWord-4', () => {
  expect(lengthOfLastWord(' ')).toBe(0)
})

test('lengthOfLastWord-5', () => {
  expect(lengthOfLastWord('he')).toBe(2)
})

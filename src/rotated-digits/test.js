import { rotatedDigit } from '.'

test('rotatedDigit', () => {
  expect(rotatedDigit(1)).toBe(0)
})

test('rotatedDigit', () => {
  expect(rotatedDigit(10)).toBe(4)
})

test('rotatedDigit', () => {
  expect(rotatedDigit(12)).toBe(5)
})

test('rotatedDigit', () => {
  expect(rotatedDigit(14)).toBe(5)
})

test('rotatedDigit', () => {
  expect(rotatedDigit(15)).toBe(6)
})

test('rotatedDigit', () => {
  expect(rotatedDigit(16)).toBe(7)
})

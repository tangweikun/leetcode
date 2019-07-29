import { hasAlternatingBits } from '.'

test('binaryNumberWithAlternatingBits-1', () => {
  expect(hasAlternatingBits(5)).toBe(true)
})

test('binaryNumberWithAlternatingBits-2', () => {
  expect(hasAlternatingBits(10)).toBe(true)
})

test('binaryNumberWithAlternatingBits-3', () => {
  expect(hasAlternatingBits(7)).toBe(false)
})

test('binaryNumberWithAlternatingBits-4', () => {
  expect(hasAlternatingBits(11)).toBe(false)
})

test('binaryNumberWithAlternatingBits-5', () => {
  expect(hasAlternatingBits(4)).toBe(false)
})

test('binaryNumberWithAlternatingBits-6', () => {
  expect(hasAlternatingBits(1)).toBe(true)
})

test('binaryNumberWithAlternatingBits-7', () => {
  expect(hasAlternatingBits(21)).toBe(true)
})

test('binaryNumberWithAlternatingBits-8', () => {
  expect(hasAlternatingBits(2)).toBe(true)
})

test('binaryNumberWithAlternatingBits-9', () => {
  expect(hasAlternatingBits(3)).toBe(false)
})

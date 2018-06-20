import { findNthDigit } from '.'

test('', () => {
  expect(findNthDigit(5)).toBe(5)
})

test('', () => {
  expect(findNthDigit(11)).toBe(0)
})

test('', () => {
  expect(findNthDigit(12)).toBe(1)
})

test('', () => {
  expect(findNthDigit(13)).toBe(1)
})

test('', () => {
  expect(findNthDigit(14)).toBe(1)
})

test('', () => {
  expect(findNthDigit(15)).toBe(2)
})

test('', () => {
  expect(findNthDigit(17)).toBe(3)
})

test('', () => {
  expect(findNthDigit(187)).toBe(8)
})

test('', () => {
  expect(findNthDigit(1712)).toBe(0)
})

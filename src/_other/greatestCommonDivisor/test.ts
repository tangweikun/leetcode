import { greatestCommonDivisor } from '.'

test('greatestCommonDivisor-1', () => {
  expect(greatestCommonDivisor(1, 2)).toBe(1)
})

test('greatestCommonDivisor-2', () => {
  expect(greatestCommonDivisor(3, 3)).toBe(3)
})

test('greatestCommonDivisor-3', () => {
  expect(greatestCommonDivisor(7, 2)).toBe(1)
})

test('greatestCommonDivisor-4', () => {
  expect(greatestCommonDivisor(4, 9)).toBe(1)
})

test('greatestCommonDivisor-5', () => {
  expect(greatestCommonDivisor(12, 8)).toBe(4)
})

test('greatestCommonDivisor-6', () => {
  expect(greatestCommonDivisor(7, 21)).toBe(7)
})

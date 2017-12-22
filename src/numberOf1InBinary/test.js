import { numberOf1InBinary } from '.'

test('numberOf1InBinary-0', () => {
  expect(numberOf1InBinary(0)).toBe(0)
})

test('numberOf1InBinary-1', () => {
  expect(numberOf1InBinary(1)).toBe(1)
})

test('numberOf1InBinary-2', () => {
  expect(numberOf1InBinary(2)).toBe(1)
})

test('numberOf1InBinary-3', () => {
  expect(numberOf1InBinary(7)).toBe(3)
})

test('numberOf1InBinary-4', () => {
  expect(numberOf1InBinary(17)).toBe(2)
})

test('numberOf1InBinary-5', () => {
  expect(numberOf1InBinary(32)).toBe(1)
})

test('numberOf1InBinary-6', () => {
  expect(numberOf1InBinary(53)).toBe(4)
})

test('numberOf1InBinary-7', () => {
  expect(numberOf1InBinary(111)).toBe(6)
})

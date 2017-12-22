import { bitCount } from '.'

test('bitCount-0', () => {
  expect(bitCount(0)).toBe(0)
})

test('bitCount-1', () => {
  expect(bitCount(1)).toBe(1)
})

test('bitCount-2', () => {
  expect(bitCount(2)).toBe(1)
})

test('bitCount-3', () => {
  expect(bitCount(7)).toBe(3)
})

test('bitCount-4', () => {
  expect(bitCount(17)).toBe(2)
})

test('bitCount-5', () => {
  expect(bitCount(32)).toBe(1)
})

test('bitCount-6', () => {
  expect(bitCount(53)).toBe(4)
})

test('bitCount-7', () => {
  expect(bitCount(111)).toBe(6)
})

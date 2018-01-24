import { trailingZeroes } from '.'

test('trailingZeroes-1', () => {
  expect(trailingZeroes(0)).toBe(0)
})

test('trailingZeroes-2', () => {
  expect(trailingZeroes(1)).toBe(0)
})

test('trailingZeroes-3', () => {
  expect(trailingZeroes(4)).toBe(0)
})

test('trailingZeroes-4', () => {
  expect(trailingZeroes(5)).toBe(1)
})

test('trailingZeroes-5', () => {
  expect(trailingZeroes(10)).toBe(2)
})

test('trailingZeroes-6', () => {
  expect(trailingZeroes(14)).toBe(2)
})

test('trailingZeroes-7', () => {
  expect(trailingZeroes(15)).toBe(3)
})

test('trailingZeroes-8', () => {
  expect(trailingZeroes(20)).toBe(4)
})

test('trailingZeroes-9', () => {
  expect(trailingZeroes(30)).toBe(7)
})

test('trailingZeroes-10', () => {
  expect(trailingZeroes(40)).toBe(9)
})

test('trailingZeroes-11', () => {
  expect(trailingZeroes(1808548329)).toBe(452137076)
})

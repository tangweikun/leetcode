import { pow } from './pro'

test('pow-1', () => {
  expect(pow(2, 3)).toBe(8)
})

test('pow-2', () => {
  expect(pow(1, 3)).toBe(1)
})

test('pow-3', () => {
  expect(pow(-3, 3)).toBe(-27)
})

test('pow-4', () => {
  expect(pow(-3, 2)).toBe(9)
})

test('pow-5', () => {
  expect(pow(-3, -2)).toBe(1 / 9)
})

test('pow-6', () => {
  expect(pow(-3, 0)).toBe(1)
})

test('pow-6', () => {
  expect(pow(2, 2147483648)).toBe(Infinity)
})

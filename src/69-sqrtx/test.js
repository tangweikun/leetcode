import { sqrt } from '.'

test('sqrt-1', () => {
  expect(sqrt(4)).toBe(2)
})

test('sqrt-2', () => {
  expect(sqrt(8)).toBe(2)
})

test('sqrt-3', () => {
  expect(sqrt(11)).toBe(3)
})

test('sqrt-4', () => {
  expect(sqrt(0)).toBe(0)
})

test('sqrt-5', () => {
  expect(sqrt(66.66)).toBe(8)
})

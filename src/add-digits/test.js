import { addDigits } from '.'

test('addDigits-1', () => {
  expect(addDigits(38)).toBe(2)
})

test('addDigits-2', () => {
  expect(addDigits(8)).toBe(8)
})

test('addDigits-3', () => {
  expect(addDigits(153)).toBe(9)
})

test('addDigits-4', () => {
  expect(addDigits(666)).toBe(9)
})

test('addDigits-5', () => {
  expect(addDigits(19)).toBe(1)
})

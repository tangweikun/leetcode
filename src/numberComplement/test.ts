import { findComplement } from '.'

test('NumberComplement-1', () => {
  expect(findComplement(5)).toBe(2)
})

test('NumberComplement-2', () => {
  expect(findComplement(1)).toBe(0)
})

test('NumberComplement-3', () => {
  expect(findComplement(2)).toBe(1)
})

test('NumberComplement-4', () => {
  expect(findComplement(3)).toBe(0)
})

test('NumberComplement-4', () => {
  expect(findComplement(4)).toBe(3)
})

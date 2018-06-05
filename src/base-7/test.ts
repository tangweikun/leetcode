import { convertToBase7 } from '.'

test('convertToBase7-1', () => {
  expect(convertToBase7(100)).toBe('202')
})

test('convertToBase7-2', () => {
  expect(convertToBase7(-7)).toBe('-10')
})

test('convertToBase7-3', () => {
  expect(convertToBase7(1)).toBe('1')
})

test('convertToBase7-4', () => {
  expect(convertToBase7(5)).toBe('5')
})

test('convertToBase7-5', () => {
  expect(convertToBase7(-19)).toBe('-25')
})

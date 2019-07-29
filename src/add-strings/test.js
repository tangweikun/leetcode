import { addStrings } from '.'

test('addStrings-1', () => {
  expect(addStrings('0', '0')).toBe('0')
})

test('addStrings-2', () => {
  expect(addStrings('10', '10')).toBe('20')
})

test('addStrings-3', () => {
  expect(addStrings('32', '102')).toBe('134')
})

test('addStrings-4', () => {
  expect(addStrings('17', '23')).toBe('40')
})

test('addStrings-5', () => {
  expect(addStrings('5', '5')).toBe('10')
})

test('addStrings-6', () => {
  expect(addStrings('1', '0')).toBe('1')
})

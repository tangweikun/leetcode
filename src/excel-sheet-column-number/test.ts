import { titleToNumber } from '.'

test('titleToNumber', () => {
  expect(titleToNumber('A')).toBe(1)
})

test('titleToNumber', () => {
  expect(titleToNumber('Z')).toBe(26)
})

test('titleToNumber', () => {
  expect(titleToNumber('AA')).toBe(27)
})

test('titleToNumber', () => {
  expect(titleToNumber('AB')).toBe(28)
})

test('titleToNumber', () => {
  expect(titleToNumber('AZ')).toBe(52)
})

test('titleToNumber', () => {
  expect(titleToNumber('BA')).toBe(53)
})

test('titleToNumber', () => {
  expect(titleToNumber('BZ')).toBe(78)
})

test('titleToNumber', () => {
  expect(titleToNumber('CA')).toBe(79)
})

test('titleToNumber', () => {
  expect(titleToNumber('ZA')).toBe(677)
})

test('titleToNumber', () => {
  expect(titleToNumber('ZZ')).toBe(702)
})

test('titleToNumber', () => {
  expect(titleToNumber('AAA')).toBe(703)
})

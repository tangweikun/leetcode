import { convertToTitle } from '.'

test('', () => {
  expect(convertToTitle(1)).toBe('A')
})

test('', () => {
  expect(convertToTitle(28)).toBe('AB')
})

test('', () => {
  expect(convertToTitle(26)).toBe('Z')
})

test('', () => {
  expect(convertToTitle(27)).toBe('AA')
})

test('', () => {
  expect(convertToTitle(701)).toBe('ZY')
})

test('', () => {
  expect(convertToTitle(52)).toBe('AZ')
})

import { getHint } from '.'

test('', () => {
  expect(getHint('1807', '7810')).toBe('1A3B')
})

test('', () => {
  expect(getHint('1', '0')).toBe('0A0B')
})

test('', () => {
  expect(getHint('1123', '0111')).toBe('1A1B')
})

test('', () => {
  expect(getHint('1111', '2222')).toBe('0A0B')
})

test('', () => {
  expect(getHint('1111', '1000')).toBe('1A0B')
})

test('', () => {
  expect(getHint('1234', '4321')).toBe('0A4B')
})

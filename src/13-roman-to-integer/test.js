import { romanToInteger } from '.'

test('romanToInteger-1', () => {
  expect(romanToInteger('IV')).toBe(4)
})

test('romanToInteger-2', () => {
  expect(romanToInteger('VII')).toBe(7)
})

test('romanToInteger-3', () => {
  expect(romanToInteger('XVII')).toBe(17)
})

test('romanToInteger-4', () => {
  expect(romanToInteger('XCIX')).toBe(99)
})

test('romanToInteger-5', () => {
  expect(romanToInteger('XXX')).toBe(30)
})

test('romanToInteger-6', () => {
  expect(romanToInteger('XL')).toBe(40)
})

test('romanToInteger-7', () => {
  expect(romanToInteger('LXX')).toBe(70)
})

test('romanToInteger-8', () => {
  expect(romanToInteger('CXCIX')).toBe(199)
})

test('romanToInteger-9', () => {
  expect(romanToInteger('CCC')).toBe(300)
})

test('romanToInteger-10', () => {
  expect(romanToInteger('CD')).toBe(400)
})

test('romanToInteger-11', () => {
  expect(romanToInteger('MCD')).toBe(1400)
})

test('romanToInteger-12', () => {
  expect(romanToInteger('MCDXXXVII')).toBe(1437)
})

test('romanToInteger-13', () => {
  expect(romanToInteger('MMMCCCXXXIII')).toBe(3333)
})

test('romanToInteger-14', () => {
  expect(romanToInteger('MMMCMXCIX')).toBe(3999)
})
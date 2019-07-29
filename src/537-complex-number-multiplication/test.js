import { complexNumberMultiply } from '.'

test('ComplexNumberMultiply-1', () => {
  expect(complexNumberMultiply('1+1i', '1+1i')).toBe('0+2i')
})

test('ComplexNumberMultiply-2', () => {
  expect(complexNumberMultiply('1+-1i', '1+-1i')).toBe('0+-2i')
})

test('ComplexNumberMultiply-3', () => {
  expect(complexNumberMultiply('1+2i', '1+1i')).toBe('-1+3i')
})

test('ComplexNumberMultiply-4', () => {
  expect(complexNumberMultiply('1+-2i', '1+1i')).toBe('3+-1i')
})

test('ComplexNumberMultiply-5', () => {
  expect(complexNumberMultiply('0+-2i', '1+1i')).toBe('2+-2i')
})

import { isAdditiveNumber } from '.'

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('123')).toBe(true)
})

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('1023')).toBe(false)
})

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('11213')).toBe(true)
})

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('111213')).toBe(false)
})

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('112358')).toBe(true)
})

test('isAdditiveNumber', () => {
  expect(isAdditiveNumber('199100199')).toBe(true)
})

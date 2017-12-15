import { isPrime } from '.'

test('isPrime', () => {
  expect(isPrime(2)).toBe(true)
})

test('isPrime', () => {
  expect(isPrime(3)).toBe(true)
})

test('isPrime', () => {
  expect(isPrime(4)).toBe(false)
})



test('isPrime', () => {
  expect(isPrime(5)).toBe(true)
})

test('isPrime', () => {
  expect(isPrime(11)).toBe(true)
})

test('isPrime', () => {
  expect(isPrime(121)).toBe(false)
})
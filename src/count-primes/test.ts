import { countPrimes } from '.'

test('countPrimes-1', () => {
  expect(countPrimes(1)).toBe(0)
})

test('countPrimes-2', () => {
  expect(countPrimes(2)).toBe(0)
})

test('countPrimes-3', () => {
  expect(countPrimes(3)).toBe(1)
})

test('countPrimes-4', () => {
  expect(countPrimes(8)).toBe(4)
})

test('countPrimes-5', () => {
  expect(countPrimes(12)).toBe(5)
})

test('countPrimes-6', () => {
  expect(countPrimes(499979)).toBe(41537)
})

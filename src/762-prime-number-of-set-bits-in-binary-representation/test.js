import { countPrimeSetBits } from '.'

test('PrimeNumberOfSetBitsInBinaryRepresentation-1', () => {
  expect(countPrimeSetBits(6, 10)).toBe(4)
})

test('PrimeNumberOfSetBitsInBinaryRepresentation-2', () => {
  expect(countPrimeSetBits(10, 15)).toBe(5)
})

test('PrimeNumberOfSetBitsInBinaryRepresentation-3', () => {
  expect(countPrimeSetBits(1, 3)).toBe(1)
})

test('PrimeNumberOfSetBitsInBinaryRepresentation-4', () => {
  expect(countPrimeSetBits(0, 1)).toBe(0)
})

test('PrimeNumberOfSetBitsInBinaryRepresentation-4', () => {
  expect(countPrimeSetBits(842, 888)).toBe(23)
})

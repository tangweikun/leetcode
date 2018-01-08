import { reverseBits } from '.'

test('reverseBit-1', () => {
  expect(reverseBits(43261596)).toBe(964176192)
})

test('reverseBit-2', () => {
  expect(reverseBits(1)).toBe(2147483648)
})

test('reverseBit-3', () => {
  expect(reverseBits(0)).toBe(0)
})

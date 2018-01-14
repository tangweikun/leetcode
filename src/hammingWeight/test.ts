import { hammingWeight } from '.'

test('hammingWeight-1', () => {
  expect(hammingWeight(0)).toBe(0)
})

test('hammingWeight-2', () => {
  expect(hammingWeight(2)).toBe(1)
})

test('hammingWeight-3', () => {
  expect(hammingWeight(5)).toBe(2)
})

test('hammingWeight-4', () => {
  expect(hammingWeight(8)).toBe(1)
})

test('hammingWeight-5', () => {
  expect(hammingWeight(11)).toBe(3)
})

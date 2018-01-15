import { hammingDistance } from '.'

test('hammingDistance-1', () => {
  expect(hammingDistance(1, 4)).toBe(2)
})

test('hammingDistance-2', () => {
  expect(hammingDistance(2, 5)).toBe(3)
})

test('hammingDistance-3', () => {
  expect(hammingDistance(4, 4)).toBe(0)
})

test('hammingDistance-4', () => {
  expect(hammingDistance(3, 7)).toBe(1)
})

test('hammingDistance-5', () => {
  expect(hammingDistance(4, 8)).toBe(2)
})

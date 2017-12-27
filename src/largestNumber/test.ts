import { largestNumber } from '.'

test('largestNumber-1', () => {
  expect(largestNumber([1])).toBe(0)
})

test('largestNumber-2', () => {
  expect(largestNumber([2, 1])).toBe(0)
})

test('largestNumber-3', () => {
  expect(largestNumber([2, 1, 3, 5])).toBe(-1)
})

test('largestNumber-4', () => {
  expect(largestNumber([2, 1, 5, 8, 16])).toBe(4)
})

test('largestNumber-5', () => {
  expect(largestNumber([2, 1, 5, 8, 16, 0])).toBe(4)
})

test('largestNumber-6', () => {
  expect(largestNumber([2, 0])).toBe(0)
})

test('largestNumber-7', () => {
  expect(largestNumber([0])).toBe(0)
})

test('largestNumber-8', () => {
  expect(largestNumber([2, 6, 4])).toBe(-1)
})

test('largestNumber-9', () => {
  expect(largestNumber([-1, -2, -4])).toBe(0)
})
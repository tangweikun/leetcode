import { getSum } from '.'

test('SumOfTwoIntegers-1', () => {
  expect(getSum(1, 2)).toBe(3)
})

test('SumOfTwoIntegers-1', () => {
  expect(getSum(1, -1)).toBe(0)
})

test('SumOfTwoIntegers-1', () => {
  expect(getSum(1, 0)).toBe(1)
})

test('SumOfTwoIntegers-1', () => {
  expect(getSum(-5, 2)).toBe(-3)
})

test('SumOfTwoIntegers-1', () => {
  expect(getSum(11, -2)).toBe(9)
})

test('SumOfTwoIntegers-1', () => {
  expect(getSum(-11, -2)).toBe(-13)
})

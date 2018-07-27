import { judgeSquareSum } from '.'

test('SumOfSquareNumbers-1', () => {
  expect(judgeSquareSum(0)).toBe(true)
})

test('SumOfSquareNumbers-2', () => {
  expect(judgeSquareSum(1)).toBe(true)
})

test('SumOfSquareNumbers-3', () => {
  expect(judgeSquareSum(2)).toBe(true)
})

test('SumOfSquareNumbers-4', () => {
  expect(judgeSquareSum(4)).toBe(true)
})

test('SumOfSquareNumbers-5', () => {
  expect(judgeSquareSum(5)).toBe(true)
})

test('SumOfSquareNumbers-6', () => {
  expect(judgeSquareSum(8)).toBe(true)
})
test('SumOfSquareNumbers-7', () => {
  expect(judgeSquareSum(3)).toBe(false)
})
test('SumOfSquareNumbers-8', () => {
  expect(judgeSquareSum(6)).toBe(false)
})

import { maximumProduct } from '.'

test('MaximumProductOfThreeNumbers-1', () => {
  expect(maximumProduct([1, 2, 3])).toBe(6)
})

test('MaximumProductOfThreeNumbers-1', () => {
  expect(maximumProduct([1, 2, 3, 4])).toBe(24)
})

test('MaximumProductOfThreeNumbers-1', () => {
  expect(maximumProduct([1, 2, 3, 0])).toBe(6)
})

test('MaximumProductOfThreeNumbers-1', () => {
  expect(maximumProduct([-1, 5, 4, -2])).toBe(10)
})

test('MaximumProductOfThreeNumbers-1', () => {
  expect(maximumProduct([-1, 0, -4, -2])).toBe(0)
})

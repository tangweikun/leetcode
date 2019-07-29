import { numberOfArithmeticSlices } from '.'

test('numberOfArithmeticSlices', () => {
  expect(numberOfArithmeticSlices([1, 2, 3, 4])).toBe(3)
})

test('numberOfArithmeticSlices', () => {
  expect(numberOfArithmeticSlices([1, 3, 5, 7, 9])).toBe(6)
})

test('numberOfArithmeticSlices', () => {
  expect(numberOfArithmeticSlices([7, 7, 7, 7])).toBe(3)
})

test('numberOfArithmeticSlices', () => {
  expect(numberOfArithmeticSlices([3, -1, -5, -9])).toBe(3)
})

test('numberOfArithmeticSlices', () => {
  expect(numberOfArithmeticSlices([1, 1, 2, 5, 7])).toBe(0)
})

import { productExceptSelf } from '.'

test('productExceptSelf', () => {
  expect(productExceptSelf([0, 0])).toEqual([0, 0])
})

test('productExceptSelf', () => {
  expect(productExceptSelf([1, 2])).toEqual([2, 1])
})

test('productExceptSelf', () => {
  expect(productExceptSelf([1, 2, 0])).toEqual([0, 0, 2])
})

test('productExceptSelf', () => {
  expect(productExceptSelf([1, 2, 3])).toEqual([6, 3, 2])
})

test('productExceptSelf', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
})

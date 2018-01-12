import { fractionalSimplify } from '.'

test('fractionalSimplify-1', () => {
  expect(fractionalSimplify(1)).toEqual([1])
})

test('fractionalSimplify-2', () => {
  expect(fractionalSimplify(1, 1, 2)).toEqual([1, 1, 2])
})

test('fractionalSimplify-3', () => {
  expect(fractionalSimplify(1, 2, 3)).toEqual([1, 2, 3])
})

test('fractionalSimplify-4', () => {
  expect(fractionalSimplify(2, 2, 4)).toEqual([2, 1, 2])
})

test('fractionalSimplify-5', () => {
  expect(fractionalSimplify(7, 7, 8)).toEqual([7, 7, 8])
})

test('fractionalSimplify-6', () => {
  expect(fractionalSimplify(0, -2, 4)).toEqual([0, -1, 2])
})

test('fractionalSimplify-7', () => {
  expect(fractionalSimplify(0, 1, 3)).toEqual([0, 1, 3])
})

test('fractionalSimplify-8', () => {
  expect(fractionalSimplify(0, 11, 121)).toEqual([0, 1, 11])
})

test('fractionalSimplify-9', () => {
  expect(fractionalSimplify(0, -11, 121)).toEqual([0, -1, 11])
})
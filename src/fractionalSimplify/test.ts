import { fractionalSimplify } from '.'

test('fractionalSimplify-1', () => {
  expect(fractionalSimplify(4, 2)).toEqual([2])
})

test('fractionalSimplify-2', () => {
  expect(fractionalSimplify(1, 2)).toEqual([0, 1, 2])
})

test('fractionalSimplify-3', () => {
  expect(fractionalSimplify(2, 3)).toEqual([0, 2, 3])
})

test('fractionalSimplify-4', () => {
  expect(fractionalSimplify(7, 8)).toEqual([0, 7, 8])
})

test('fractionalSimplify-5', () => {
  expect(fractionalSimplify(0, 4)).toEqual([0])
})

test('fractionalSimplify-6', () => {
  expect(fractionalSimplify(-4, 6)).toEqual([0, -2, 3])
})

test('fractionalSimplify-7', () => {
  expect(fractionalSimplify(11, 121)).toEqual([0, 1, 11])
})

test('fractionalSimplify-8', () => {
  expect(fractionalSimplify(-17, 2)).toEqual([-8, -1, 2])
})

test('fractionalSimplify-9', () => {
  expect(fractionalSimplify(12, 5)).toEqual([2, 2, 5])
})

test('fractionalSimplify-10', () => {
  expect(fractionalSimplify(-1, 5)).toEqual([0, -1, 5])
})

test('fractionalSimplify-11', () => {
  expect(fractionalSimplify(16, -5)).toEqual([-3, -1, 5])
})

test('fractionalSimplify-12', () => {
  expect(fractionalSimplify(0, -1)).toEqual([0])
})

test('fractionalSimplify-13', () => {
  expect(fractionalSimplify(-40, -11)).toEqual([3, 7, 11])
})

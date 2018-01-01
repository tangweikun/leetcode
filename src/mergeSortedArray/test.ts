import { mergeSortedArray } from './pro'

test('mergeSortedArray-1', () => {
  expect(mergeSortedArray([1, 2, 4, 8], [2, 7, 8])).toEqual([1, 2, 2, 4, 7, 8, 8])
})

test('mergeSortedArray-2', () => {
  expect(mergeSortedArray([-1], [-5, 0])).toEqual([-5, -1, 0])
})

test('mergeSortedArray-3', () => {
  expect(mergeSortedArray([], [0])).toEqual([0])
})

test('mergeSortedArray-4', () => {
  expect(mergeSortedArray([0], [1])).toEqual([0, 1])
})

test('mergeSortedArray-5', () => {
  expect(mergeSortedArray([2, 3], [1])).toEqual([1, 2, 3])
})


import { rotateArray } from '.'

test('rotateArray-1', () => {
  expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])
})

test('rotateArray-2', () => {
  expect(rotateArray([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5])
})

test('rotateArray-3', () => {
  expect(rotateArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5])
})

test('rotateArray-4', () => {
  expect(rotateArray([1, 2], 3)).toEqual([2, 1])
})

test('rotateArray-5', () => {
  expect(rotateArray([1, 2], 5)).toEqual([2, 1])
})

test('rotateArray-6', () => {
  expect(rotateArray([1, 2, 3], 7)).toEqual([3, 1, 2])
})


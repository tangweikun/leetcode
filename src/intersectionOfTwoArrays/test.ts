import { intersectionOfTwoArrays } from '.'

test('intersectionOfTwoArrays-1', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [])).toEqual([])
})

test('intersectionOfTwoArrays-2', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [2, 3, 2]).sort()).toEqual([2, 3])
})

test('intersectionOfTwoArrays-3', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [4, 5])).toEqual([])
})

test('intersectionOfTwoArrays-4', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [3, 3])).toEqual([3])
})

test('intersectionOfTwoArrays-5', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [3, 4, 5, 2, 1]).sort()).toEqual([
    1,
    2,
    3,
  ])
})

test('intersectionOfTwoArrays-6', () => {
  expect(intersectionOfTwoArrays([1, 2, 3], [1, 1, 3, 3, 4]).sort()).toEqual([
    1,
    3,
  ])
})

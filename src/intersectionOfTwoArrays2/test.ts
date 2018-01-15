import { intersectionOfTwoArrays2 } from '.'

test('intersectionOfTwoArrays2-1', () => {
  expect(intersectionOfTwoArrays2([1, 2, 3], [])).toEqual([])
})

test('intersectionOfTwoArrays2-2', () => {
  expect(intersectionOfTwoArrays2([1, 2, 3, 2], [2, 3, 2]).sort()).toEqual([
    2,
    2,
    3,
  ])
})

test('intersectionOfTwoArrays2-3', () => {
  expect(intersectionOfTwoArrays2([1, 2, 3], [4, 5])).toEqual([])
})

test('intersectionOfTwoArrays2-4', () => {
  expect(intersectionOfTwoArrays2([1, 3, 2, 3], [3, 3])).toEqual([3, 3])
})

test('intersectionOfTwoArrays2-5', () => {
  expect(
    intersectionOfTwoArrays2(
      [1, 2, 3, 1, 1, 2],
      [3, 4, 5, 2, 1, 1, 2, 3],
    ).sort(),
  ).toEqual([1, 1, 2, 2, 3])
})

test('intersectionOfTwoArrays2-6', () => {
  expect(intersectionOfTwoArrays2([1, 2, 3], [1, 1, 3, 3, 4]).sort()).toEqual([
    1,
    3,
  ])
})

import { spiralOrder } from '.'

test('', () => {
  expect(spiralOrder([])).toEqual([])
})

test('', () => {
  expect(spiralOrder([1])).toEqual([1])
})

test('', () => {
  expect(spiralOrder([1, 2, 3])).toEqual([1, 2, 3])
})

test('', () => {
  expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3])
})

test('', () => {
  expect(spiralOrder([[1, 2], [3, 4], [5, 6]])).toEqual([1, 2, 4, 6, 5, 3])
})

test('', () => {
  expect(spiralOrder([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 6, 5, 4])
})

test('', () => {
  expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([
    1,
    2,
    3,
    4,
    8,
    12,
    11,
    10,
    9,
    5,
    6,
    7,
  ])
})

test('', () => {
  expect(
    spiralOrder([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ]),
  ).toEqual([
    1,
    2,
    3,
    4,
    5,
    10,
    15,
    20,
    25,
    24,
    23,
    22,
    21,
    16,
    11,
    6,
    7,
    8,
    9,
    14,
    19,
    18,
    17,
    12,
    13,
  ])
})

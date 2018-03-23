import { findTargetSumWays } from '.'

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 2, 1], 0)).toBe(2)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 1, 2, 2], 0)).toBe(4)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1], 1)).toBe(1)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 1], 1)).toBe(0)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 1], 2)).toBe(1)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([1, 1, 1], 2)).toBe(0)
})

test('findTargetSumWays', () => {
  expect(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toBe(256)
})

test('findTargetSumWays', () => {
  expect(
    findTargetSumWays(
      [
        18,
        47,
        49,
        45,
        31,
        13,
        45,
        44,
        33,
        45,
        44,
        43,
        21,
        30,
        23,
        46,
        43,
        10,
        3,
        30,
      ],
      23,
    ),
  ).toBe(5100)
})

test('findTargetSumWays', () => {
  expect(
    findTargetSumWays(
      [
        2,
        107,
        109,
        113,
        127,
        131,
        137,
        3,
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        47,
        53,
      ],
      2333,
    ),
  ).toBe(0)
})

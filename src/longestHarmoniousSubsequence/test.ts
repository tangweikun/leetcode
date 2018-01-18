import { findLHS } from '.'

test('longestHarmoniousSubsequence-1', () => {
  expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5)
})

test('longestHarmoniousSubsequence-2', () => {
  expect(findLHS([])).toBe(0)
})

test('longestHarmoniousSubsequence-3', () => {
  expect(findLHS([1])).toBe(0)
})

test('longestHarmoniousSubsequence-4', () => {
  expect(findLHS([0])).toBe(0)
})

test('longestHarmoniousSubsequence-5', () => {
  expect(findLHS([1, -1])).toBe(0)
})

test('longestHarmoniousSubsequence-6', () => {
  expect(findLHS([1, 1, 2, 3, 4, 8])).toBe(3)
})

test('longestHarmoniousSubsequence-7', () => {
  expect(findLHS([1, 1, 2, 3, 3, 3, 6, 6, 7, 6, 7])).toBe(5)
})

test('longestHarmoniousSubsequence-8', () => {
  expect(findLHS([1, 1, 1, 1])).toBe(0)
})

test('longestHarmoniousSubsequence-8', () => {
  expect(
    findLHS([
      4,
      3,
      2,
      0,
      3,
      1,
      10,
      2,
      1,
      1,
      9,
      5,
      9,
      6,
      8,
      6,
      5,
      1,
      0,
      10,
      8,
      6,
      -9,
      0,
      8,
      9,
      5,
      0,
      2,
      2,
      4,
      0,
      9,
      10,
      2,
      0,
      0,
      7,
      10,
      9,
      6,
      0,
      8,
      9,
      10,
      7,
      8,
      8,
      3,
      9,
      5,
      3,
      4,
      6,
      1,
      5,
      4,
      7,
      9,
      2,
      5,
      10,
      4,
      -3,
      4,
      6,
      4,
      6,
      1,
      1,
      10,
      0,
      9,
      9,
      3,
      5,
      1,
      3,
      3,
      2,
      1,
      3,
      8,
      7,
      1,
      2,
      0,
      7,
      4,
    ]),
  ).toBe(20)
})

test('longestHarmoniousSubsequence-8', () => {
  expect(
    findLHS([
      10,
      5,
      6,
      5,
      8,
      2,
      1,
      0,
      4,
      4,
      1,
      9,
      8,
      5,
      7,
      7,
      8,
      10,
      8,
      10,
      5,
      0,
      7,
      9,
      10,
      6,
      2,
      2,
      9,
      4,
      10,
      7,
      2,
      10,
      7,
      3,
      4,
      9,
      2,
      0,
      5,
      9,
      4,
      9,
      5,
      2,
      0,
      3,
      7,
      7,
      4,
      10,
      7,
      9,
      4,
      -10,
      3,
      8,
      5,
      10,
      6,
      4,
      3,
      2,
      0,
      7,
      6,
      10,
      6,
      8,
      4,
      1,
      8,
      9,
    ]),
  ).toBe(17)
})

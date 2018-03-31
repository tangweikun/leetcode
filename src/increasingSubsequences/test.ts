import { findSubsequences } from '.'

test('Increasing Subsequences', () => {
  expect(findSubsequences([4, 6, 7, 7])).toEqual([
    [4, 6],
    [4, 6, 7],
    [4, 6, 7, 7],
    [4, 7],
    [4, 7, 7],
    [6, 7],
    [6, 7, 7],
    [7, 7],
  ])
})

import { combinationSum } from '.'

test('', () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
})

test('', () => {
  expect(combinationSum([2, 3, 5], 8)).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ])
})

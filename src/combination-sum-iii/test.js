import { combinationSum3 } from '.'

test('Combination Sum III', () => {
  expect(combinationSum3(1, 3)).toEqual([[3]])
})

test('Combination Sum III', () => {
  expect(combinationSum3(2, 3)).toEqual([[1, 2]])
})

test('Combination Sum III', () => {
  expect(combinationSum3(2, 9)).toEqual([[1, 8], [2, 7], [3, 6], [4, 5]])
})

test('Combination Sum III', () => {
  expect(combinationSum3(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]])
})

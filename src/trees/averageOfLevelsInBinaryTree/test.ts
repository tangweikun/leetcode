import { averageOfLevels } from '.'
import { TREE_10, TREE_8, TREE_9, TREE_7 } from '../_testData'

test('AverageOfLevelsInBinaryTree-1', () => {
  expect(averageOfLevels(TREE_10)).toEqual([3, 4.5, 1.5, 0])
})

test('AverageOfLevelsInBinaryTree-2', () => {
  expect(averageOfLevels(TREE_8)).toEqual([1])
})

test('AverageOfLevelsInBinaryTree-2', () => {
  expect(averageOfLevels(TREE_9)).toEqual([2, 2])
})

test('AverageOfLevelsInBinaryTree-4', () => {
  expect(averageOfLevels(TREE_7)).toEqual([1, 2.5, 5, 7])
})

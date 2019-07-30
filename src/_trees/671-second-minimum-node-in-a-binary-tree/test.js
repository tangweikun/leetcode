import { TREE_1, TREE_8, TREE_9 } from '../_testData'
import { findSecondMinimumValue } from '.'

test('findSecondMinimumValue', () => {
  expect(findSecondMinimumValue(TREE_1)).toBe(2)
})

test('findSecondMinimumValue', () => {
  expect(findSecondMinimumValue(TREE_8)).toBe(-1)
})

test('findSecondMinimumValue', () => {
  expect(findSecondMinimumValue(TREE_9)).toBe(-1)
})

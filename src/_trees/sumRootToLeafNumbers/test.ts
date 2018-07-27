import { sumNumbers } from '.'
import { TREE_1, TREE_3, TREE_5 } from '../_testData'

test('SumRootToLeafNumbers', () => {
  expect(sumNumbers(TREE_1)).toBe(138)
})

test('SumRootToLeafNumbers', () => {
  expect(sumNumbers(TREE_3)).toBe(3335)
})

test('SumRootToLeafNumbers', () => {
  expect(sumNumbers(TREE_5)).toBe(0)
})

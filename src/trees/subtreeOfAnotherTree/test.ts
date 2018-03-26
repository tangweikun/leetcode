import { TREE_2, TREE_1, TREE_10, TREE_11, TREE_8, TREE_6 } from '../_testData'
import { isSubtree } from '.'

test('isSubtree', () => {
  expect(isSubtree(TREE_10, TREE_11)).toBe(false)
})

test('isSubtree', () => {
  expect(isSubtree(TREE_1, TREE_2)).toBe(false)
})

test('isSubtree', () => {
  expect(isSubtree(TREE_6, TREE_8)).toBe(false)
})

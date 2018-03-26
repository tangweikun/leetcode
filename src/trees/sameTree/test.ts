import { TREE_1, TREE_3, TREE_4, TREE_5 } from '../_testData'
import { isSameTree } from '.'

test('isSameTree-1', () => {
  expect(isSameTree(null, null)).toBe(true)
})

test('isSameTree-2', () => {
  expect(isSameTree(TREE_1, TREE_1)).toBe(true)
})

test('isSameTree-3', () => {
  expect(isSameTree(TREE_3, TREE_4)).toBe(false)
})

test('isSameTree-3', () => {
  expect(isSameTree(TREE_5, TREE_5)).toBe(true)
})

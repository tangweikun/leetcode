import { TREE_1, TREE_3, TREE_4, TREE_5, TREE_7, TREE_8 } from '../_testData'
import { maxDepth } from '.'

test('MaximumDepthOfBinaryTree-1', () => {
  expect(maxDepth(TREE_1)).toBe(3)
})

test('MaximumDepthOfBinaryTree-2', () => {
  expect(maxDepth(TREE_3)).toBe(3)
})

test('MaximumDepthOfBinaryTree-3', () => {
  expect(maxDepth(TREE_4)).toBe(4)
})

test('MaximumDepthOfBinaryTree-4', () => {
  expect(maxDepth(null)).toBe(0)
})

test('MaximumDepthOfBinaryTree-5', () => {
  expect(maxDepth(TREE_7)).toBe(4)
})

test('MaximumDepthOfBinaryTree-6', () => {
  expect(maxDepth(TREE_8)).toBe(1)
})

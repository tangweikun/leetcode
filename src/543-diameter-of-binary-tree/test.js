import { diameterOfBinaryTree } from '.'
import { TREE_3, TREE_2, TREE_4, TREE_6, TREE_7 } from '../_testData'

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(TREE_3)).toBe(4)
})

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(TREE_2)).toBe(2)
})

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(TREE_4)).toBe(5)
})

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(TREE_6)).toBe(0)
})

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(TREE_7)).toBe(5)
})

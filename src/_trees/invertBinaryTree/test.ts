import { TREE_3, TREE_7 } from '../_testData'
import { invertTree } from '.'

test('InvertBinaryTree-1', () => {
  const expectTree = {
    left: {
      left: { left: null, right: null, val: 5 },
      right: { left: null, right: null, val: 6 },
      val: 4,
    },
    right: {
      left: { left: null, right: null, val: 1 },
      right: { left: null, right: null, val: 3 },
      val: 2,
    },
    val: 8,
  }

  expect(invertTree(TREE_3)).toEqual(expectTree)
})

test('InvertBinaryTree-2', () => {
  const expectTree = {
    val: 1,
    left: {
      val: 3,
      left: { val: 6, left: null, right: null },
      right: { val: 5, left: { val: 7, left: null, right: null }, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 4, left: null, right: null },
    },
  }

  expect(invertTree(TREE_7)).toEqual(expectTree)
})

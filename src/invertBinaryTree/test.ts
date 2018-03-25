import { TREE_6, TREE_7 } from './../_tree/index'
import { invertTree } from '.'

test('InvertBinaryTree-1', () => {
  const expectTree = {
    val: 4,
    left: {
      val: 7,
      left: { val: 9, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
  }

  expect(invertTree(TREE_6)).toEqual(expectTree)
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

import { TREE_1, TREE_3, TREE_4, TREE_5, TREE_7 } from '../_testData'
import { trimBST } from '.'

test('trimABinarySearchTree-1', () => {
  const expectedTree = {
    left: { left: null, right: null, val: 2 },
    right: null,
    val: 1,
  }
  expect(trimBST(TREE_1, 1, 2)).toEqual(expectedTree)
})

test('trimABinarySearchTree-2', () => {
  const expectedTree = {
    left: { left: null, right: null, val: 3 },
    right: { left: null, right: null, val: 1 },
    val: 2,
  }
  expect(trimBST(TREE_3, 1, 3)).toEqual(expectedTree)
})

test('trimABinarySearchTree-3', () => {
  const expectedTree = {
    left: { left: { left: null, right: null, val: 4 }, right: null, val: 2 },
    right: { left: null, right: null, val: 4 },
    val: 3,
  }
  expect(trimBST(TREE_4, 2, 4)).toEqual(expectedTree)
})

test('trimABinarySearchTree-4', () => {
  expect(trimBST(TREE_5, 1, 2)).toEqual(null)
})

test('trimABinarySearchTree-5', () => {
  const expectedTree = {
    left: { left: null, right: null, val: 2 },
    right: null,
    val: 1,
  }
  expect(trimBST(TREE_7, 1, 2)).toEqual(expectedTree)
})

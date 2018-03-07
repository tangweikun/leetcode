import { trimBST } from '.'

test('trimABinarySearchTree-1', () => {
  const tree = {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: { val: 2, left: null, right: null },
  }

  const expectedTree = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  }
  expect(trimBST(tree, 1, 2)).toEqual(expectedTree)
})

test('trimABinarySearchTree-2', () => {
  const tree = {
    val: 3,
    left: {
      val: 0,
      left: null,
      right: { val: 2, left: { val: 1, left: null, right: null }, right: null },
    },
    right: { val: 4, left: null, right: null },
  }

  const expectedTree = {
    val: 3,
    left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
    right: null,
  }
  expect(trimBST(tree, 1, 3)).toEqual(expectedTree)
})

test('trimABinarySearchTree-3', () => {
  const tree = {
    val: 3,
    left: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: { val: 4, left: null, right: null },
  }

  const expectedTree = {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: { val: 4, left: null, right: null },
  }

  expect(trimBST(tree, 2, 4)).toEqual(expectedTree)
})

test('trimABinarySearchTree-3', () => {
  const tree = {
    val: 3,
    left: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: { val: 4, left: null, right: null },
  }

  const expectedTree = {
    left: null,
    right: { left: null, right: null, val: 2 },
    val: 1,
  }

  expect(trimBST(tree, 1, 2)).toEqual(expectedTree)
})

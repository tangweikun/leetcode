import { diameterOfBinaryTree } from '.'

test('diameterOfBinaryTree', () => {
  const tree = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: {
      val: 3,
      left: { val: 4, left: { val: 5, left: null, right: null }, right: null },
      right: { val: 6, left: null, right: { val: 7, left: null, right: null } },
    },
  }
  expect(diameterOfBinaryTree(tree)).toBe(4)
})

test('diameterOfBinaryTree', () => {
  const tree = {
    val: 2,
    left: null,
    right: null,
  }
  expect(diameterOfBinaryTree(tree)).toBe(0)
})

test('diameterOfBinaryTree', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  }
  expect(diameterOfBinaryTree(tree)).toBe(3)
})

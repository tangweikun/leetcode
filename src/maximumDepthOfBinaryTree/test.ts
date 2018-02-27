import { maxDepth } from '.'

test('MaximumDepthOfBinaryTree-1', () => {
  const tree1 = {
    data: 3,
    left: { data: 9, left: null, right: null },
    right: {
      data: 20,
      left: { data: 15, left: null, right: null },
      right: { data: 15, left: null, right: null },
    },
  }
  expect(maxDepth(tree1)).toBe(3)
})

test('MaximumDepthOfBinaryTree-2', () => {
  const tree1 = {
    data: 3,
    left: { data: 9, left: null, right: null },
    right: null,
  }
  expect(maxDepth(tree1)).toBe(2)
})

test('MaximumDepthOfBinaryTree-3', () => {
  const tree1 = {
    data: 3,
    left: null,
    right: null,
  }
  expect(maxDepth(tree1)).toBe(1)
})

test('MaximumDepthOfBinaryTree-4', () => {
  const tree1 = null
  expect(maxDepth(tree1)).toBe(0)
})

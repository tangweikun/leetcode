import { hasPathSum } from '.'

test('hasPathSum', () => {
  const tree = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: { val: 7, left: null, right: null },
        right: { val: 2, left: null, right: null },
      },
      right: null,
    },
    right: {
      val: 8,
      left: { val: 13, left: null, right: null },
      right: {
        val: 4,
        left: null,
        right: { val: 1, left: null, right: null },
      },
    },
  }
  expect(hasPathSum(tree, 22)).toBe(true)
})

test('hasPathSum', () => {
  const tree = {
    val: 5,
    left: { val: 4, left: null, right: null },
    right: { val: 6, left: null, right: null },
  }
  expect(hasPathSum(tree, 10)).toBe(false)
  expect(hasPathSum(tree, 11)).toBe(true)
  expect(hasPathSum(tree, 9)).toBe(true)
})

test('hasPathSum', () => {
  const tree = {
    val: 1,
    left: {
      val: -2,
      left: { val: 1, left: { val: -1, left: null, right: null }, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: { val: -3, left: { val: -2, left: null, right: null }, right: null },
  }
  expect(hasPathSum(tree, 3)).toBe(false)
  expect(hasPathSum(tree, -1)).toBe(true)
  expect(hasPathSum(tree, -2)).toBe(false)
  expect(hasPathSum(tree, -4)).toBe(true)
})

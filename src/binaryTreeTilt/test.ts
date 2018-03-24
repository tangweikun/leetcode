import { findTilt } from '.'

test('Binary Tree Tilt', () => {
  const tree = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  expect(findTilt(tree)).toBe(1)
})

test('Binary Tree Tilt', () => {
  const tree = {
    val: 8,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
    right: {
      val: 4,
      left: { val: 6, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
  }
  expect(findTilt(tree)).toBe(12)
})

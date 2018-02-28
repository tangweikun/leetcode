import { findDuplicateSubtrees } from '.'

test('FindDuplicateSubtrees-1', () => {
  const tree = {
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: {
      val: 3,
      left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
      right: { val: 4, left: null, right: null },
    },
  }
  expect(findDuplicateSubtrees(tree)).toEqual([
    { left: null, right: null, val: 4 },
    { left: { left: null, right: null, val: 4 }, right: null, val: 2 },
  ])
})

test('FindDuplicateSubtrees-1', () => {
  const tree = {
    val: 0,
    left: { val: 0, left: { val: 0, left: null, right: null }, right: null },
    right: {
      val: 0,
      left: null,
      right: {
        val: 0,
        left: null,
        right: {
          val: 0,
          left: null,
          right: { val: 0, left: null, right: null },
        },
      },
    },
  }
  expect(findDuplicateSubtrees(tree)).toEqual([
    { left: null, right: null, val: 0 },
  ])
})
